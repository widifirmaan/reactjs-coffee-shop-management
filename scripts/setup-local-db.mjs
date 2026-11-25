import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@libsql/client';
import { initializeDatabase } from '../server/db-adapter.mjs';

const args = process.argv.slice(2);
const shouldReset = args.includes('--reset');
const dbPath = path.resolve(process.cwd(), 'local.db');

if (shouldReset) {
  for (const suffix of ['', '-wal', '-shm']) {
    const target = `${dbPath}${suffix}`;
    if (fs.existsSync(target)) {
      fs.unlinkSync(target);
      console.log(`Removed ${path.basename(target)}`);
    }
  }
}

const url = process.env.TURSO_DATABASE_URL || `file:${dbPath}`;
const client = createClient({
  url,
  authToken: process.env.TURSO_AUTH_TOKEN
});

const result = await initializeDatabase(client, { forceSeed: true });
const counts = await client.execute(`
  SELECT
    (SELECT COUNT(*) FROM employees) AS employees,
    (SELECT COUNT(*) FROM categories) AS categories,
    (SELECT COUNT(*) FROM menus) AS menus,
    (SELECT COUNT(*) FROM posts) AS posts,
    (SELECT COUNT(*) FROM ingredients) AS ingredients,
    (SELECT COUNT(*) FROM assets) AS assets,
    (SELECT COUNT(*) FROM recipes) AS recipes,
    (SELECT COUNT(*) FROM shop_config) AS shop_config
`);

console.log('Database setup complete:', result);
console.log('Row counts:', counts.rows[0]);
await client.close();
