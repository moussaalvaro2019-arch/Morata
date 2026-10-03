// =====================================================================
// BâtiPro Académie · génère public/data/catalogue.js à partir de contenus/cours/*.js
// Le catalogue (léger, public) liste les matières et les titres des chapitres ; le contenu
// complet d'une matière reste hors du site publié (dossier « contenus ») et n'est envoyé
// que par la fonction serveur /api/cours, selon les droits d'accès de l'apprenant.
// Usage : node outils/catalogue.mjs      (à relancer après chaque modification d'un cours)
// =====================================================================
import fs from 'fs'; import vm from 'vm'; import crypto from 'crypto'; import path from 'path'; import { fileURLToPath } from 'url';
import { ser } from './jsser.mjs';
const BASE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..'), ROOT = path.join(BASE, 'public');
const DIR = path.join(BASE, 'contenus', 'cours');
const errors = [], warn = [];
const mats = [];
for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort()) {
  const got = [];
  const ctx = { A: { addMatiere: m => got.push(m) } };
  try { vm.runInNewContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { errors.push(`${f} : ${e.message}`); continue; }
  if (got.length !== 1) { errors.push(`${f} : un seul A.addMatiere attendu (${got.length})`); continue; }
  const m = got[0];
  if (m.id + '.js' !== f) errors.push(`${f} : l'identifiant de la matière doit être « ${f.slice(0, -3)} »`);
  mats.push({ m, f });
}
const ids = new Set();
for (const { m, f } of mats) {
  (m.chapitres || []).forEach((c, i) => {
    const w = `${f} › ${c.id || '#' + i}`;
    if (!c.id || ids.has(c.id)) errors.push(`${w} : identifiant absent ou en double`); ids.add(c.id);
    if (![1, 2, 3].includes(c.niv)) errors.push(`${w} : niv doit valoir 1, 2 ou 3`);
    if (!c.titre || !c.contenu) errors.push(`${w} : titre ou contenu manquant`);
    (c.quiz || []).forEach((q, k) => {
      if (!q.q || !Array.isArray(q.o) || q.o.length < 2 || !(q.r >= 0 && q.r < q.o.length)) errors.push(`${w} : question ${k + 1} mal formée`);
    });
    (c.exercices || []).forEach((x, k) => { if (!x.t || !x.e || !x.c) errors.push(`${w} : exercice ${k + 1} incomplet (t, e, c)`); });
    if (c.sujet && (!c.sujet.titre || !c.sujet.enonce || !c.sujet.corrige)) errors.push(`${w} : sujet d'examen incomplet (titre, enonce, corrige)`);
    if (!(c.quiz || []).length) warn.push(`${w} : pas de quiz`);
    if (!(c.exercices || []).length) warn.push(`${w} : pas d'exercice corrigé`);
    const fences = (c.contenu.match(/^```/gm) || []).length; if (fences % 2) errors.push(`${w} : bloc de code non fermé`);
  });
  const by = [1, 2, 3].map(n => (m.chapitres || []).filter(c => c.niv === n).length);
  if (by.some(n => !n)) warn.push(`${f} : un niveau n'a aucun chapitre (${by.join('/')})`);
}
if (errors.length) { console.error('ERREURS :\n- ' + errors.join('\n- ')); process.exit(1); }
let out = `/* Fichier généré par outils/catalogue.mjs — ne pas modifier à la main.\n   Liste des matières et des chapitres ; le contenu est servi par /api/cours (dossier contenus/cours) */\n`;
let nch = 0, nq = 0, nex = 0, size = 0;
for (const { m, f } of mats) {
  const meta = { ...m }; delete meta.chapitres;
  const buf = fs.readFileSync(path.join(DIR, f)), st = { size: buf.length };
  meta.src = 'data/cours/' + f + '?v=' + crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
  meta.chapitres = (m.chapitres || []).map(c => ({ id: c.id, niv: c.niv, titre: c.titre, duree: c.duree || 20, nq: (c.quiz || []).length, nex: (c.exercices || []).length, ...(c.sujet ? { ns: 1 } : {}) }));
  nch += meta.chapitres.length; nq += meta.chapitres.reduce((a, c) => a + c.nq, 0); nex += meta.chapitres.reduce((a, c) => a + c.nex, 0); size += st.size;
  out += 'A.addMatiere(' + ser(meta, '') + ');\n';
}
fs.writeFileSync(path.join(ROOT, 'data', 'catalogue.js'), out);
console.log(`${mats.length} matières · ${nch} chapitres · ${nq} questions · ${nex} exercices corrigés · cours ${(size / 1e6).toFixed(2)} Mo · catalogue ${(out.length / 1e3).toFixed(0)} ko`);
if (warn.length && process.argv.includes('--details')) console.log('À compléter :\n- ' + warn.join('\n- '));
else if (warn.length) console.log(`${warn.length} remarque(s) (chapitres sans quiz ou sans exercice) : relancez avec --details pour les voir.`);
