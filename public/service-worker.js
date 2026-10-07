/* =====================================================================
   BâtiPro Académie · service worker (application installable)
   - Pages : réseau d'abord (toujours la dernière version), copie de secours hors connexion.
   - Fichiers marqués d'une empreinte (?v=…, ajoutée au déploiement par outils/build.mjs) :
     servis depuis le téléphone sans aucune requête au serveur, ce qui économise les
     crédits Netlify ; une nouvelle version a une nouvelle empreinte, donc pas de vieux fichiers.
   - Jamais mis en cache : fonctions serveur (/api/…), cours protégés (/data/cours/…),
     config.js, requêtes autres que GET et autres sites (Supabase, polices, CDN).
   ===================================================================== */
const CACHE = "batipro-v2";
const SHELL = ["/", "/manifest.json", "/batipro-192.png", "/batipro-512.png", "/batipro-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const jamais = (u) => u.pathname.startsWith("/api/") || u.pathname.startsWith("/data/cours/") || u.pathname === "/config.js" || u.pathname === "/service-worker.js";

async function garder(req, res) {
  if (!res || !res.ok || res.type !== "basic") return;
  const c = await caches.open(CACHE), u = new URL(req.url);
  if (u.searchParams.has("v")) { // une seule version de chaque fichier
    for (const k of await c.keys()) { const ku = new URL(k.url); if (ku.pathname === u.pathname && ku.search !== u.search) c.delete(k); }
  }
  await c.put(req, res);
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin !== self.location.origin || jamais(u)) return;
  if (req.mode === "navigate") { // page : réseau d'abord
    e.respondWith(fetch(req).then((res) => { const r = res.clone(); caches.open(CACHE).then((c) => c.put("/", r)); return res; })
      .catch(() => caches.match("/").then((r) => r || Response.error())));
    return;
  }
  if (u.searchParams.has("v")) { // fichier avec empreinte : depuis l'appareil
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => { e.waitUntil(garder(req, res.clone())); return res; })));
    return;
  }
  // autres fichiers : réseau, copie de secours hors connexion
  e.respondWith(fetch(req).then((res) => { e.waitUntil(garder(req, res.clone())); return res; }).catch(() => caches.match(req).then((r) => r || Response.error())));
});
