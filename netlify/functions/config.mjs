// =====================================================================
// BâtiPro Académie · Configuration publique (Netlify Function)
//   GET /api/config → { supabaseUrl, supabaseAnonKey } lus dans les variables Netlify
//   SUPABASE_URL et SUPABASE_ANON_KEY. Ainsi, inutile de modifier public/config.js
//   sur GitHub : tout se règle dans Netlify, avec les autres clés.
// La clé « anon / publishable » est publique par nature. Une clé secrète
// (service_role, sb_secret_…) mise par erreur dans SUPABASE_ANON_KEY n'est jamais renvoyée.
// =====================================================================
function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  return process.env[name] || "";
}
function secrete(key) {
  if (/^sb_secret_/i.test(key)) return true;
  const p = key.split(".")[1];
  if (!p) return false;
  try { return JSON.parse(Buffer.from(p.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8")).role === "service_role"; } catch (_) { return false; }
}
export default async () => {
  const url = env("SUPABASE_URL").trim().replace(/\/+$/, ""), key = env("SUPABASE_ANON_KEY").trim();
  const ok = /^https:\/\/\S+$/.test(url) && key && !secrete(key);
  return new Response(JSON.stringify(ok ? { supabaseUrl: url, supabaseAnonKey: key } : {}), {
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
};
export const config = { path: "/api/config" };
