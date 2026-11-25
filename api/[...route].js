import { handleApi } from '../worker.js';
import { getLocalEnv, readRequestToWebRequest, sendWebResponse } from '../server/db-adapter.mjs';

export default async function handler(req, res) {
  try {
    const env = await getLocalEnv();
    const webReq = await readRequestToWebRequest(req);
    const webRes = await handleApi(webReq, env);
    await sendWebResponse(res, webRes);
  } catch (err) {
    console.error('API Error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: err.message || 'Internal error', error: err.message || 'Internal error' }));
  }
}
