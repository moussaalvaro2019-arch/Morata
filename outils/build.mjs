// =====================================================================
// BâtiPro Académie · préparation au déploiement (lancé par Netlify à chaque mise en ligne)
//   node outils/build.mjs
// 1. Ajoute à chaque fichier JS / CSS appelé par public/index.html une empreinte de son
//    contenu (?v=…). Un fichier modifié change d'empreinte : les navigateurs prennent la
//    nouvelle version ; un fichier inchangé reste dans le téléphone de l'apprenant.
// 2. Écrit public/_headers : ces fichiers peuvent être gardés un an par le navigateur.
// Résultat : une visite ne coûte plus que quelques requêtes à Netlify (page + config),
// au lieu d'une quarantaine. Sans ce script (test local), rien ne change.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const index = path.join(ROOT, "index.html");
let html = fs.readFileSync(index, "utf8"), n = 0;
const empreinte = (rel) => {
  const f = path.join(ROOT, rel.split("?")[0]);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { console.warn("introuvable :", rel); return null; }
  return crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex").slice(0, 10);
};
html = html.replace(/(<script\s+src="|<link\s+rel="stylesheet"\s+href=")((?:js|css|data|vendor)\/[^"?#]+)(\?[^"]*)?"/g, (m, a, rel) => {
  const h = empreinte(rel); if (!h) return m; n++;
  return `${a}${rel}?v=${h}"`;
});
fs.writeFileSync(index, html);

const an = "Cache-Control: public, max-age=31536000, immutable", sem = "Cache-Control: public, max-age=604800";
fs.writeFileSync(path.join(ROOT, "_headers"), [
  "# Généré par outils/build.mjs au déploiement : ne pas modifier.",
  ...["/js/*", "/css/*", "/vendor/*", "/data/catalogue.js", "/data/construction.js", "/data/solveurs/*", "/data/exercices/*"].map((p) => `${p}\n  ${an}`),
  ...["/batipro-*", "/apple-touch-icon.png", "/manifest.json"].map((p) => `${p}\n  ${sem}`),
  "/service-worker.js\n  Cache-Control: no-cache",
  "",
].join("\n"));
console.log(`BâtiPro : ${n} fichiers marqués d'une empreinte, en-têtes de cache écrits.`);
