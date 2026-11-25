import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function localApiPlugin() {
    return {
        name: 'siap-nyafe-local-api',
        configureServer(server) {
            if (process.env.USE_WRANGLER === '1') return;
            server.middlewares.use(async (req, res, next) => {
                if (!req.url || !req.url.startsWith('/api/')) return next();
                try {
                    const [{ handleApi }, { getLocalEnv, readRequestToWebRequest, sendWebResponse }] = await Promise.all([
                        import('./worker.js'),
                        import('./server/db-adapter.mjs')
                    ]);
                    const env = await getLocalEnv();
                    const webReq = await readRequestToWebRequest(req);
                    const webRes = await handleApi(webReq, env);
                    await sendWebResponse(res, webRes);
                } catch (err) {
                    console.error('Local API error:', err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: err.message || 'Internal error', error: err.message || 'Internal error' }));
                }
            });
        }
    };
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), localApiPlugin()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    ui: ['lucide-react', 'swiper'],
                    axios: ['axios']
                }
            }
        },
        chunkSizeWarningLimit: 1000
    },
    server: {
        port: 8085,
        proxy: process.env.USE_WRANGLER === '1' ? {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            }
        } : undefined
    }
})
