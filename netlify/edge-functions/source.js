// =====================================================================
// Morata · Import de sujets d'examen depuis un site autorisé → POST /api/source
// Réservé à la direction : le compte est vérifié par Supabase (my_roles).
// Seuls les sites listés dans la variable Netlify SOURCES_AUTORISEES
// (par défaut : fomesoutra.com) peuvent être lus.
//   { action: "list", url, cat } → sujets d'une page de rubrique + pages suivantes
//   { action: "file", url }  → le fichier PDF d'un sujet (réponse binaire)
// =====================================================================

const UA = "Mozilla/5.0 (compatible; MorataImport/1.0; +https://www.fomesoutra.com)";
const MAX_HTML = 4_000_000, MAX_PDF = 30_000_000, MAX_PAGES = 25;

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  try { const v = globalThis.Deno?.env?.get?.(name); if (v) return v; } catch (_) {}
  return globalThis.process?.env?.[name] || "";
}
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

async function supabaseConf(request) {
  let url = env("SUPABASE_URL"), key = env("SUPABASE_ANON_KEY");
  if (!url || !key) {
    try {
      const t = await (await fetch(new URL("/config.js", request.url))).text();
      url = url || (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || "";
      key = key || (t.match(/supabaseAnonKey\s*:\s*["']([^"']+)["']/) || [])[1] || "";
    } catch (_) { /* pas de config.js lisible */ }
  }
  return url && key ? { url: url.replace(/\/+$/, ""), key } : null;
}

/* Le compte doit être un administrateur de la plateforme */
async function checkAdmin(request) {
  const sb = await supabaseConf(request);
  if (!sb) return env("IA_SANS_CONNEXION") === "oui" ? null : "L'import a besoin de Supabase (config.js) pour vérifier que vous êtes administrateur.";
  const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!token) return "Connectez-vous à l'espace PDG.";
  try {
    const r = await fetch(`${sb.url}/rest/v1/rpc/my_roles`, { method: "POST", headers: { apikey: sb.key, Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: "{}" });
    if (!r.ok) return "Session expirée : reconnectez-vous.";
    const j = await r.json();
    return j && j.is_admin ? null : "L'import de sujets est réservé à la direction.";
  } catch (_) { return "Base de données injoignable."; }
}

function allowedHost(u) {
  const list = (env("SOURCES_AUTORISEES") || "fomesoutra.com").split(/[\s,;]+/).map(s => s.trim().toLowerCase().replace(/^www\./, "")).filter(Boolean);
  const h = u.hostname.toLowerCase().replace(/^www\./, "");
  return (u.protocol === "https:" || u.protocol === "http:") && list.some(d => h === d || h.endsWith("." + d));
}

async function get(url, max) {
  const r = await fetch(url, { headers: { "User-Agent": UA, Accept: "text/html,application/pdf;q=0.9,*/*;q=0.8" }, redirect: "follow", signal: AbortSignal.timeout(25000) });
  if (!r.ok) throw new Error(`le site a répondu ${r.status}`);
  const len = +(r.headers.get("content-length") || 0);
  if (len && len > max) throw new Error("fichier trop volumineux");
  const buf = new Uint8Array(await r.arrayBuffer());
  if (buf.length > max) throw new Error("fichier trop volumineux");
  return { buf, type: (r.headers.get("content-type") || "").toLowerCase(), url: r.url || url, disp: r.headers.get("content-disposition") || "" };
}
const isPdf = f => f.buf.length > 4 && f.buf[0] === 0x25 && f.buf[1] === 0x50 && f.buf[2] === 0x44 && f.buf[3] === 0x46; // %PDF
const html = f => new TextDecoder("utf-8").decode(f.buf);
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", acirc: "â", ccedil: "ç", ocirc: "ô", ucirc: "û", icirc: "î", iuml: "ï", euml: "ë", rsquo: "’", lsquo: "‘", laquo: "«", raquo: "»", ndash: "–", mdash: "—", Eacute: "É" };
const decode = s => String(s).replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/&([a-z]+);/gi, (m, k) => ENT[k] ?? m);
const clean = s => decode(String(s).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

function links(page, base) {
  const out = [], re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(page))) {
    const attrs = m[1], href = (attrs.match(/href\s*=\s*["']([^"']+)["']/i) || [])[1];
    if (!href || /^(#|javascript:|mailto:)/i.test(href)) continue;
    let u; try { u = new URL(decode(href), base); } catch (_) { continue; }
    const title = clean(m[2]) || clean((attrs.match(/title\s*=\s*["']([^"']+)["']/i) || [])[1] || "");
    out.push({ u, title });
  }
  return out;
}
const sameSite = (a, b) => a.hostname.replace(/^www\./, "") === b.hostname.replace(/^www\./, "");
const itemSlug = u => { const segs = u.pathname.replace(/\/file\/?$/, "").split("/").filter(Boolean); const last = segs[segs.length - 1] || ""; return /^\d{2,7}-[a-z0-9-]{3,}$/i.test(last) ? last : null; };
const itemUrl = u => { const v = new URL(u.href); v.pathname = v.pathname.replace(/\/file\/?$/, ""); v.search = ""; v.hash = ""; return v.href; };

/* Sujets trouvés sur UNE page de rubrique + liens vers les pages suivantes.
   Le navigateur enchaîne les pages : chaque appel reste court (limites des fonctions Edge). */
async function listPage(pageUrl, catUrl) {
  const cat = new URL(catUrl), catPath = cat.pathname.replace(/\/$/, ""), catSlug = catPath.split("/").filter(Boolean).pop() || "";
  const pageRe = new RegExp("^" + catPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "/page/\\d+$");
  const f = await get(pageUrl, MAX_HTML);
  const items = new Map(), next = new Set();
  if (isPdf(f)) return { items: [], next: [] };
  for (const { u, title } of links(html(f), f.url)) {
    if (!sameSite(u, cat)) continue;
    const slug = itemSlug(u);
    if (slug) {
      const key = slug.split("-")[0], inCat = u.pathname.includes("/" + catSlug + "/");
      const prev = items.get(key);
      const t = title && !/^(t[ée]l[ée]charger|download|voir|lire la suite|ouvrir|\d+)$/i.test(title) ? title : "";
      if (!prev) items.set(key, { id: key, title: t || slug.replace(/^\d+-/, "").replace(/-/g, " "), url: itemUrl(u), inCat });
      else { if (t && t.length > prev.title.length) prev.title = t; if (inCat) prev.inCat = true; }
      continue;
    }
    // pages suivantes de la même rubrique : ?start=20, ?page=2… ou …/page/2
    const path = u.pathname.replace(/\/$/, "");
    if ((path === catPath && /[?&](start|limitstart|offset|page|p)=\d+/i.test(u.search)) || pageRe.test(path)) { u.hash = ""; next.add(u.href); }
  }
  return { items: [...items.values()], next: [...next].slice(0, MAX_PAGES) };
}

/* Fichier PDF d'un sujet : lien direct, sinon « …/file », sinon lien de téléchargement trouvé dans la page */
async function fetchPdf(url) {
  const tried = new Set(), tryUrl = async u => { if (tried.has(u)) return null; tried.add(u); try { const f = await get(u, MAX_PDF); return f; } catch (_) { return null; } };
  const first = await tryUrl(url);
  if (first && isPdf(first)) return first;
  const base = new URL(url), cands = [];
  if (first && !isPdf(first)) {
    const id = (itemSlug(base) || "").split("-")[0];
    for (const { u } of links(html(first), first.url)) {
      if (!sameSite(u, base) && !/\.pdf(\?|$)/i.test(u.pathname)) continue;
      const s = u.href;
      if (/\/file\/?(\?|$)/i.test(u.pathname) || /\.pdf(\?|$)/i.test(s) || /download|telecharg/i.test(s)) cands.push({ s, w: (id && s.includes(id) ? 2 : 0) + (/\/file\/?$/.test(u.pathname) ? 1 : 0) });
    }
  }
  const direct = new URL(url); direct.search = ""; direct.hash = ""; if (!/\/file\/?$/.test(direct.pathname)) { direct.pathname = direct.pathname.replace(/\/$/, "") + "/file"; cands.push({ s: direct.href, w: 1.5 }); }
  cands.sort((a, b) => b.w - a.w);
  for (const c of cands.slice(0, 6)) { const f = await tryUrl(c.s); if (f && isPdf(f)) return f; }
  throw new Error("aucun fichier PDF trouvé pour ce sujet");
}

export default async (request) => {
  if (request.method !== "POST") return json({ error: "Méthode non autorisée" }, 405);
  let body; try { body = await request.json(); } catch (_) { return json({ error: "Requête invalide" }, 400); }
  const deny = await checkAdmin(request); if (deny) return json({ error: deny }, 403);
  let u; try { u = new URL(String(body.url || "")); } catch (_) { return json({ error: "Adresse invalide." }, 400); }
  if (!allowedHost(u)) return json({ error: `Site non autorisé : ${u.hostname}. Ajoutez-le à la variable SOURCES_AUTORISEES sur Netlify.` }, 403);
  try {
    if (body.action === "list") {
      let c; try { c = new URL(String(body.cat || u.href)); } catch (_) { c = u; }
      if (!allowedHost(c)) c = u;
      const r = await listPage(u.href, c.href); return json({ ...r, count: r.items.length });
    }
    if (body.action === "file") {
      const f = await fetchPdf(u.href);
      const name = (f.disp.match(/filename\*?=(?:UTF-8'')?"?([^";]+)/i) || [])[1] || decodeURIComponent(new URL(f.url).pathname.split("/").filter(Boolean).filter(s => s !== "file").pop() || "sujet") + ".pdf";
      return new Response(f.buf, { headers: { "Content-Type": "application/pdf", "Cache-Control": "no-store", "X-File-Name": encodeURIComponent(name), "X-Source-Url": encodeURIComponent(f.url) } });
    }
    return json({ error: "Action inconnue." }, 400);
  } catch (e) {
    return json({ error: "Lecture du site impossible : " + (e && e.message || "erreur réseau") }, 502);
  }
};

export const config = { path: "/api/source" };
