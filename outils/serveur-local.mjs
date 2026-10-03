// =====================================================================
// BâtiPro Académie · serveur de test local (sans installation)
//   node outils/serveur-local.mjs        puis ouvrir http://localhost:8080
// Sert le dossier « public » et la fonction des cours protégés (/api/cours et
// /data/cours/<matière>.js), comme Netlify une fois le site en ligne.
// L'assistant IA (/api/ia) ne fonctionne qu'une fois déployé sur Netlify.
// =====================================================================
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const BASE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..'), ROOT = path.join(BASE, 'public');
process.chdir(BASE);
const cours = (await import(path.join(BASE, 'netlify', 'functions', 'cours.mjs'))).default;
const PORT = +(process.env.PORT || process.argv[2] || 8080);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:' + PORT);
  if (url.pathname === '/api/cours' || url.pathname.startsWith('/data/cours/')) {
    const r = await cours(new Request(url, { headers: req.headers }));
    res.writeHead(r.status, Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer())); return;
  }
  let f = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
  if (!f.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  if (url.pathname === '/' || fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(ROOT, 'index.html');
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end('Introuvable'); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
}).listen(PORT, () => console.log(`BâtiPro Académie : http://localhost:${PORT}  (Ctrl + C pour arrêter)`));
