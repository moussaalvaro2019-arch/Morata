// =====================================================================
// BâtiPro Académie · Cours protégés (Netlify Function)
//   GET /api/cours?m=<matière>   → JSON de la matière (fetch, avec le jeton de l'apprenant)
//   GET /data/cours/<matière>.js → même contenu sous forme de script (mode démonstration)
// Le contenu complet des cours est dans le dossier « contenus/cours », qui n'est PAS
// publié sur le site : seule cette fonction le lit. Elle demande à Supabase
// (fonction SQL public.cours_acces) si la personne a un accès actif (inscription payée,
// abonnement en cours, administrateur, ou accès payant désactivé par la direction).
// Sans accès, seuls les premiers chapitres de chaque matière (réglage « chapitres
// gratuits » de l'Espace PDG) sont envoyés avec leur contenu ; les autres arrivent
// sans contenu, ni exercices, ni quiz, ni sujet d'examen.
// Sans Supabase configuré (site de démonstration), tout est envoyé.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  return process.env[name] || "";
}
const here = (() => { try { return path.dirname(fileURLToPath(import.meta.url)); } catch (_) { return ""; } })();
let DIR = null;
function contentDir() {
  if (DIR) return DIR;
  const roots = [process.cwd(), env("LAMBDA_TASK_ROOT"), here && path.resolve(here, "..", ".."), here && path.resolve(here, ".."), here, "/var/task"].filter(Boolean);
  for (const r of roots) { const d = path.join(r, "contenus", "cours"); try { if (fs.statSync(d).isDirectory()) return (DIR = d); } catch (_) {} }
  return null;
}
const CACHE = new Map();
function matiere(id) {
  if (!/^[a-z0-9-]{1,24}$/.test(id)) return null;
  if (CACHE.has(id)) return CACHE.get(id);
  const d = contentDir(); if (!d) throw new Error("Dossier contenus/cours introuvable");
  const f = path.join(d, id + ".js"); if (!fs.existsSync(f)) return null;
  let out = null;
  new Function("A", fs.readFileSync(f, "utf8"))({ addMatiere: (m) => { out = m; } });
  if (out) { out.chapitres = (out.chapitres || []).map((c, i) => ({ ...c, _i: i })).sort((a, b) => (a.niv || 2) - (b.niv || 2) || a._i - b._i).map(({ _i, ...c }) => c); }
  CACHE.set(id, out); return out;
}

/* Paramètres Supabase : variables Netlify, sinon lecture de /config.js du site */
async function supabaseConf(request) {
  let url = env("SUPABASE_URL"), key = env("SUPABASE_ANON_KEY");
  if (!url || !key) {
    try {
      const t = await (await fetch(new URL("/config.js", request.url))).text();
      url = url || (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || "";
      key = key || (t.match(/supabaseAnonKey\s*:\s*["']([^"']+)["']/) || [])[1] || "";
    } catch (_) {}
  }
  return url && key ? { url: url.replace(/\/+$/, ""), key } : null;
}
async function acces(request, sb) {
  if (!sb) return { full: true, preview: 999, demo: true };
  const auth = request.headers.get("authorization") || "";
  const token = /^Bearer\s+\S+$/i.test(auth) ? auth.replace(/^Bearer\s+/i, "") : sb.key;
  try {
    const r = await fetch(sb.url + "/rest/v1/rpc/cours_acces", { method: "POST", headers: { apikey: sb.key, Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: "{}" });
    if (r.ok) { const j = await r.json(); return { full: !!j.full, preview: Math.max(0, +j.preview || 0) }; }
    if (token !== sb.key) { // jeton expiré : on retombe sur l'accès public
      const r2 = await fetch(sb.url + "/rest/v1/rpc/cours_acces", { method: "POST", headers: { apikey: sb.key, Authorization: "Bearer " + sb.key, "Content-Type": "application/json" }, body: "{}" });
      if (r2.ok) { const j = await r2.json(); return { full: !!j.full, preview: Math.max(0, +j.preview || 0), expired: true }; }
    }
  } catch (_) {}
  return { full: false, preview: 1, erreur: true };
}
const LOCKED = (c) => ({ id: c.id, niv: c.niv, titre: c.titre, duree: c.duree, nq: (c.quiz || []).length, nex: (c.exercices || []).length, sujet: c.sujet ? { titre: c.sujet.titre, duree: c.sujet.duree } : undefined, verrou: true });

export default async (request) => {
  const url = new URL(request.url);
  const asScript = url.pathname.startsWith("/data/cours/");
  const id = asScript ? path.basename(url.pathname).replace(/\.js$/, "") : (url.searchParams.get("m") || "");
  let m;
  try { m = matiere(id); } catch (e) { return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } }); }
  if (!m) return new Response(JSON.stringify({ error: "Matière inconnue" }), { status: 404, headers: { "Content-Type": "application/json" } });
  const sb = await supabaseConf(request), a = await acces(request, sb);
  const out = { ...m, chapitres: m.chapitres.map((c, i) => (a.full || i < a.preview ? c : LOCKED(c))), acces: { full: a.full, preview: a.preview, expired: !!a.expired } };
  const headers = { "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" };
  if (asScript) return new Response("A.addMatiere(" + JSON.stringify(out) + ");\n", { headers: { ...headers, "Content-Type": "text/javascript; charset=utf-8" } });
  return new Response(JSON.stringify(out), { headers: { ...headers, "Content-Type": "application/json; charset=utf-8" } });
};

export const config = { path: ["/api/cours", "/data/cours/*"] };
