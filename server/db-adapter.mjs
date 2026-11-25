import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@libsql/client';

function resolveDbConfig() {
  if (process.env.TURSO_DATABASE_URL) {
    return {
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
      isRemote: true
    };
  }
  if (process.env.VERCEL) {
    return { url: 'file:/tmp/siapnyafe.db', isRemote: false };
  }
  const dbPath = path.resolve(process.cwd(), 'local.db');
  return { url: `file:${dbPath}`, isRemote: false };
}

function createD1Wrapper(client) {
  const wrapStmt = (sql, boundArgs = []) => ({
    _sql: sql,
    _args: boundArgs,
    bind(...args) {
      return wrapStmt(sql, args.map(v => (v === undefined ? null : v)));
    },
    async first(colName) {
      const res = await client.execute({ sql, args: boundArgs });
      const row = res.rows?.[0];
      if (!row) return null;
      const obj = { ...row };
      return colName ? obj[colName] : obj;
    },
    async all() {
      const res = await client.execute({ sql, args: boundArgs });
      return { results: (res.rows || []).map(r => ({ ...r })) };
    },
    async run() {
      const res = await client.execute({ sql, args: boundArgs });
      return {
        success: true,
        meta: {
          changes: res.rowsAffected ?? 0,
          last_row_id: res.lastInsertRowid ? Number(res.lastInsertRowid) : 0
        }
      };
    }
  });

  return {
    prepare(sql) {
      return wrapStmt(sql);
    },
    async batch(statements) {
      if (!Array.isArray(statements) || statements.length === 0) return [];
      const tx = await client.transaction('write');
      const results = [];
      try {
        for (const stmt of statements) {
          const res = await tx.execute({
            sql: stmt._sql,
            args: stmt._args || []
          });
          results.push({
            success: true,
            results: (res.rows || []).map(r => ({ ...r })),
            meta: {
              changes: res.rowsAffected ?? 0,
              last_row_id: res.lastInsertRowid ? Number(res.lastInsertRowid) : 0
            }
          });
        }
        await tx.commit();
        return results;
      } catch (err) {
        try {
          await tx.rollback();
        } catch {}
        throw err;
      }
    },
    async executeMultiple(sql) {
      await client.executeMultiple(sql);
    }
  };
}

function createLocalImagesStore(uploadDir) {
  fs.mkdirSync(uploadDir, { recursive: true });
  return {
    async put(key, arrayBuffer, options = {}) {
      const safeKey = path.basename(key);
      const buf = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(uploadDir, safeKey), buf);
      if (options?.httpMetadata?.contentType) {
        fs.writeFileSync(path.join(uploadDir, `${safeKey}.meta`), options.httpMetadata.contentType);
      }
    },
    async get(key) {
      const safeKey = path.basename(key);
      const filePath = path.join(uploadDir, safeKey);
      if (!fs.existsSync(filePath)) return null;
      const buf = fs.readFileSync(filePath);
      const metaPath = path.join(uploadDir, `${safeKey}.meta`);
      const contentType = fs.existsSync(metaPath) ? fs.readFileSync(metaPath, 'utf8') : 'application/octet-stream';
      return {
        async blob() {
          return new Blob([buf], { type: contentType });
        }
      };
    },
    async delete(key) {
      const safeKey = path.basename(key);
      const filePath = path.join(uploadDir, safeKey);
      const metaPath = path.join(uploadDir, `${safeKey}.meta`);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      if (fs.existsSync(metaPath)) fs.unlinkSync(metaPath);
    }
  };
}

let cachedLocalEnv = null;
let initPromise = null;

export async function initializeDatabase(client, { forceSeed = false } = {}) {
  const check = await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='employees'");
  if (check.rows.length === 0) {
    const schemaSql = fs.readFileSync(path.resolve(process.cwd(), 'schema.sql'), 'utf8');
    await client.executeMultiple(schemaSql);
    const seedSql = fs.readFileSync(path.resolve(process.cwd(), 'scripts/seed.sql'), 'utf8');
    await client.executeMultiple(seedSql);
    return { initialized: true, seeded: true };
  }
  if (forceSeed) {
    const seedSql = fs.readFileSync(path.resolve(process.cwd(), 'scripts/seed.sql'), 'utf8');
    await client.executeMultiple(seedSql);
    return { initialized: false, seeded: true };
  }
  return { initialized: false, seeded: false };
}

export async function getLocalEnv() {
  if (!initPromise) {
    initPromise = (async () => {
      const cfg = resolveDbConfig();
      const client = createClient({ url: cfg.url, authToken: cfg.authToken });
      await initializeDatabase(client);
      const isVercel = Boolean(process.env.VERCEL);
      const imagesStore = isVercel
        ? null
        : createLocalImagesStore(path.resolve(process.cwd(), '.local-uploads'));
      cachedLocalEnv = {
        DB: createD1Wrapper(client),
        IMAGES: imagesStore,
        JWT_SECRET: process.env.JWT_SECRET,
        SEED_SECRET: process.env.SEED_SECRET
      };
      return cachedLocalEnv;
    })().catch((err) => {
      initPromise = null;
      throw err;
    });
  }
  return initPromise;
}

export async function readRequestToWebRequest(req) {
  const proto = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:8085';
  const url = new URL(req.url, `${proto}://${host}`);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      for (const item of v) headers.append(k, item);
    } else {
      headers.set(k, v);
    }
  }
  const hasBody = !['GET', 'HEAD'].includes((req.method || 'GET').toUpperCase());
  let body;
  if (hasBody) {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    if (chunks.length > 0) {
      body = Buffer.concat(chunks);
    }
  }
  return new Request(url.toString(), {
    method: req.method,
    headers,
    body
  });
}

export async function sendWebResponse(res, webRes) {
  res.statusCode = webRes.status;
  const setCookies = typeof webRes.headers.getSetCookie === 'function'
    ? webRes.headers.getSetCookie()
    : [];
  webRes.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'set-cookie') return;
    res.setHeader(key, value);
  });
  if (setCookies.length > 0) {
    res.setHeader('Set-Cookie', setCookies);
  }
  const buf = Buffer.from(await webRes.arrayBuffer());
  res.end(buf);
}
