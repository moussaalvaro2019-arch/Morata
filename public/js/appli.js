/* =====================================================================
   MATIÈRES APPLIQUÉES À UN PROJET TYPE
   Pour chaque matière : ce qui a été calculé ou décidé POUR CE PROJET
   (valeurs tirées des plans, de la note de calcul et du métré).
   ===================================================================== */
(function(){
'use strict';
const {esc, ic, F} = A;
const fm = (v, d=2) => F(v, d);
const HN = 3.0;
const kgm = d => d*d/162;
const tab = (head, rows) => `| ${head.join(' | ')} |\n|${head.map(() => '---').join('|')}|\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);
const ORI = {S:{h0:'Sud', h1:'Nord', v0:'Est', v1:'Ouest'}, N:{h0:'Nord', h1:'Sud', v0:'Ouest', v1:'Est'}};

/* ---------- contexte commun ---------- */
function ctx(p){
  const M = A.PRJ.model(p), L = M.L, PL = A.PLAN, lv0 = L[0].lv, b = PL.bbox(lv0);
  const ME = PL.metre(p), DQ = A.METRE ? A.METRE.fromLines(ME.lines) : null;
  const q = c => ME.lines.filter(l => l.code === c).reduce((a, l) => a + l.q, 0);
  const uniq = []; L.forEach(l => { if(!uniq.some(u => u.src === l.src && u.lv.portes.length === l.lv.portes.length && u.i > 0 && l.i > 0)) uniq.push(l); });
  const rep = l => L.filter(x => x.src === l.src && x.i > 0 && l.i > 0 && x.lv.portes.length === l.lv.portes.length).length || 1;
  const o = ORI[(p.site || {}).orient || 'S'] || ORI.S;
  return {p, M, L, PL, b, Wd:b.x1 - b.x0, Dp:b.y1 - b.y0, ME, DQ, q, site:p.site || {}, sol:M.sol, top:L.length - 1, nL:L.length, uniq, rep, o, slab:M.slab, T:p.toit || {}};
}
const area = r => Math.max(0, (r.w - .15)*(r.h - .15));
function roomOpenings(c, lv){
  const b = c.PL.bbox(lv);
  return lv.pieces.map(r => {
    const on = o => o.o === 'h' ? (Math.abs(o.y - r.y) < .02 || Math.abs(o.y - r.y - r.h) < .02) && o.x >= r.x - .02 && o.x + o.w <= r.x + r.w + .02 : (Math.abs(o.x - r.x) < .02 || Math.abs(o.x - r.x - r.w) < .02) && o.y >= r.y - .02 && o.y + o.w <= r.y + r.h + .02;
    const win = (lv.fenetres || []).filter(on).map(f => ({...f, S:f.w*1.2, fac:f.o === 'h' ? (Math.abs(f.y - b.y0) < .05 ? c.o.h0 : Math.abs(f.y - b.y1) < .05 ? c.o.h1 : '') : (Math.abs(f.x - b.x0) < .05 ? c.o.v0 : Math.abs(f.x - b.x1) < .05 ? c.o.v1 : '')}));
    return {r, S:area(r), win, Sv:sum(win, f => f.S)};
  });
}
function fixtures(lv){
  const fx = [];
  lv.pieces.forEach(r => {
    if(r.t === 'eau'){ fx.push('douche', 'lavabo'); if(!lv.pieces.some(q => q.t === 'wc') || r.w*r.h > 6.5) fx.push('wc'); }
    if(r.t === 'wc') fx.push('wc', 'lavemains');
    if(r.t === 'cuisine') fx.push('evier');
    if(r.t === 'service') fx.push('bac');
  });
  return fx;
}
function steelByDia(M){
  const d = {}, add = (D, kg) => { d[D] = (d[D] || 0) + kg; };
  M.postEls.forEach(e => { const x = e.d; add(x.bars.d, x.bars.n*(HN + .05*x.bars.d)*kgm(x.bars.d)); add(x.dt, (Math.ceil(HN/x.st) + 4)*(4*(x.a - .05) + .2)*kgm(x.dt)); });
  M.beams.forEach(e => { add(e.bt.d, e.bt.n*(e.L + .6)*kgm(e.bt.d)); add(e.ba.d, 2*e.ba.n*(e.L*.3 + .4)*kgm(e.ba.d)); add(e.sv.dt, (Math.ceil(e.L/e.sv.st) + 1)*(2*(e.b + e.h) + .04)*kgm(e.sv.dt)); });
  M.semelles.forEach(e => add(e.bars.d, 2*e.bars.n*(e.B + .2)*kgm(e.bars.d)));
  M.longs.forEach(e => { add(e.bars.d, 2*e.bars.n*(e.L + .6)*kgm(e.bars.d)); add(6, Math.ceil(e.L/e.sv.st)*(2*(e.b + e.h) + .04)*kgm(6)); });
  M.lint.forEach(e => { const n = e.nrep || 1; add(e.bars.d, n*e.bars.n*e.L*kgm(e.bars.d)); add(8, n*2*e.L*kgm(8)); add(6, n*Math.ceil(e.L/.15)*(2*(e.t + .2))*kgm(6)); });
  M.stairs.forEach(e => add(e.bars.d, (e.qty ? e.qty.acier : 0)));
  const tr = sum(M.panels, e => e.qty ? e.qty.acier : 0) + sum(M.extra.filter(e => e.type === 'dallage' || e.type === 'acrotere'), e => e.qty ? e.qty.acier : 0);
  return {d, tr};
}

/* =====================================================================
   LES 18 APPLICATIONS
   ===================================================================== */
const G = {};

G.topo = c => {
  const {M, site, b} = c, B0 = site.borne || [-3, -4], alt = site.alt || 0, prof = c.sol.prof || .9;
  const rows = M.posts.map(q => { const dx = q.x - B0[0], dy = q.y - B0[1], D = Math.hypot(dx, dy); let g = Math.atan2(dx, dy)*200/Math.PI; if(g < 0) g += 400; return [`**${q.id}**`, fm(q.x), fm(q.y), fm(D, 3), fm(g, 4)]; });
  const diag = Math.hypot(c.Wd, c.Dp), altR = alt + (site.tn ?? -.2) - .12, LA = 1.385, HV = altR + LA;
  const lect = z => fm(HV - (alt + z), 3);
  const ty = M.types.map((t, i) => [`S${i+1} (${fm(t[0])} m)`, fm(alt - prof, 2), fm(alt - prof + t[1], 2), lect(-prof), lect(-prof + t[1])]);
  const dec = c.q('decap'), fou = c.q('fouille'), rem = c.q('remblai');
  return `## Repère et système de coordonnées
Le géomètre matérialise une **borne de référence B0** à **(${fm(B0[0])} ; ${fm(B0[1])})** dans le repère du projet (X le long de la façade principale, Y vers l'arrière, origine à l'intersection des axes **A** et **1**). L'altitude du niveau **±0,00** est fixée à **${fm(alt)} m** (terrain naturel moyen à ${fm(alt + (site.tn ?? -.2))} m, soit ${fm(-(site.tn ?? -.2)*100, 0)} cm plus bas pour protéger la construction du ruissellement).

## Implantation des ${M.posts.length} poteaux depuis B0 (rayonnement)
Station sur B0, référence angulaire sur l'axe Y. Pour chaque point : distance horizontale et gisement (en grades), à reporter au théodolite ou à la station totale.

${tab(['Point','X (m)','Y (m)','Distance B0 (m)','Gisement (gr)'], rows)}

## Contrôles d'équerrage
- Rectangle d'emprise ${fm(c.Wd)} × ${fm(c.Dp)} m : **diagonale théorique = √(${fm(c.Wd)}² + ${fm(c.Dp)}²) = ${fm(diag, 3)} m**. Les deux diagonales mesurées doivent être égales à ±2 cm.
- Méthode 3-4-5 aux angles : 3,00 m sur un axe, 4,00 m sur l'autre, la diagonale doit mesurer 5,00 m.
- **${2*(M.G.ax.x.length + M.G.ax.y.length)} chaises** d'implantation (une à chaque extrémité des ${M.G.ax.x.length} axes numérotés et des ${M.G.ax.y.length} files lettrées), placées à 1,50 m au-delà des fouilles.

## Nivellement : altitudes et lectures sur mire
Repère de nivellement R (clou sur la borne) à **${fm(altR, 3)} m**. Lecture arrière sur R : ${fm(LA, 3)} m → **altitude du plan de visée = ${fm(HV, 3)} m**. La lecture à faire sur la mire posée sur un point = plan de visée − altitude du point.

${tab(['Niveau à régler','Altitude (m)','Lecture sur mire (m)'], [['±0,00 (dallage fini)', fm(alt, 3), lect(0)], ['Terrain naturel', fm(alt + (site.tn ?? -.2), 3), lect(site.tn ?? -.2)], ['Fond de fouille', fm(alt - prof, 3), lect(-prof)], ...c.L.slice(1).map(l => [`Plancher ${l.court} (+${fm(l.z)})`, fm(alt + l.z, 3), '— (niveau laser)'])])}

${tab(['Semelle','Fond de fouille (m)','Dessus semelle (m)','Lecture fond','Lecture dessus'], ty)}

## Terrassements à piqueter
- Décapage : **${fm(dec, 1)} m²** sur 20 cm, soit ${fm(dec*.2, 1)} m³ de terre végétale à stocker.
- Fouilles : **${fm(fou, 1)} m³** en place → ${fm(fou*1.25, 1)} m³ foisonnés (coefficient 1,25), soit **${Math.ceil(fou*1.25/8)} camions de 8 m³** si tout est évacué.
- Remblai compacté sous dallage : ${fm(rem, 1)} m³.`;
};

G.geo = c => {
  const {M, sol} = c, sig = sol.sigma*100, tot = sum(M.semelles, e => e.Ns), emp = c.Wd*c.Dp, pm = tot/emp;
  const E = /lat[ée]rite/i.test(sol.nature) ? 25 : /sable/i.test(sol.nature) ? 30 : 20;
  const set = e => Math.max(0, (e.sreal - 18*sol.prof))*e.B*(1 - .09)*.88/(E*1000)*1000;
  const smax = M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a), smin = M.semelles.reduce((a, e) => e.Ns < a.Ns ? e : a);
  const dmax = set(smax), dmin = set(smin), Lx = Math.hypot(smax.x - smin.x, smax.y - smin.y) || 1;
  const nS = Math.max(2, Math.ceil(emp/150));
  const ty = M.types.map((t, i) => { const L = M.semelles.filter(e => e.typ === 'S' + (i+1)); const mx = L.reduce((a, e) => e.sreal > a.sreal ? e : a);
    return [`**S${i+1}**`, L.length, `${fm(t[0])} × ${fm(t[0])} × ${fm(t[1])}`, fm(Math.max(...L.map(e => e.Ns)), 0), fm(mx.sreal, 0), fm(mx.sreal/sig*100, 0) + ' %']; });
  return `## Le sol du projet
**${String(sol.nature)}** à ${String(c.site.ville || 'Abidjan')}. Contrainte admissible retenue : **σsol = ${fm(sol.sigma, 1)} bar = ${fm(sig, 0)} kN/m²**, fond de fouille à **−${fm(sol.prof)} m**.

> [!norme] Reconnaissance demandée pour ce projet
> Emprise ${fm(emp, 0)} m² → **${nS} essais au pénétromètre dynamique** (1 pour 150 m², au moins 2)${c.nL > 1 ? ', plus **1 sondage carotté** jusqu\'à 2 fois la largeur de la plus grande semelle sous la fondation' : ''} et essais d'identification (granulométrie, limites d'Atterberg).

## Charges transmises au sol
- Charge totale de service sur l'ensemble des semelles : **${fm(tot, 0)} kN** (≈ ${fm(tot/10, 0)} t).
- Pression moyenne sur l'emprise : ${fm(tot, 0)} / ${fm(emp, 1)} = **${fm(pm, 1)} kN/m²**, soit ${fm(pm/sig*100, 0)} % de σsol : ${pm/sig < .5 ? 'les **semelles isolées** conviennent (un radier ne se justifie pas)' : 'la pression moyenne dépasse 50 % de σsol : un **radier général** serait à étudier'}.

${tab(['Type','Nombre','B × B × h (m)','Nser max (kN)','σ réelle max (kN/m²)','Taux de travail'], ty)}

## Tassements estimés (élasticité, module E ≈ ${E} MPa)
$$ s ≈ q × B × (1 − ν²) × 0,88 / E
- Semelle la plus chargée ${smax.id} : **${fm(dmax, 1)} mm** ; la moins chargée ${smin.id} : **${fm(dmin, 1)} mm**.
- Tassement différentiel ${fm(Math.abs(dmax - dmin), 1)} mm sur ${fm(Lx, 1)} m → distorsion 1/${fm(Lx*1000/Math.max(.1, Math.abs(dmax - dmin)), 0)} ${Math.abs(dmax - dmin)/(Lx*1000) < 1/500 ? '(< 1/500 : acceptable ✔)' : '(> 1/500 : à surveiller)'}.

## Remblai et compactage
Remblai sous dallage : **${fm(c.q('remblai'), 1)} m³**, mis en couches de 20 cm, compacté à **95 % de l'Optimum Proctor Modifié** ; contrôle à la plaque ou au densitomètre (1 essai par couche et par 300 m²).`;
};

G.rdm = c => {
  const {M} = c, bm = M.beams.reduce((a, e) => e.Mt > a.Mt ? e : a), q = bm.qu, L = bm.L;
  const RA = q*L/2, Ei = 11000*Math.cbrt(25), Ev = 3700*Math.cbrt(25), I = bm.b*Math.pow(bm.h, 3)/12, W = I/(bm.h/2);
  const fi = 5*bm.qs*Math.pow(L, 4)/(384*Ei*1e3*I)*1000, fv = 5*bm.qs*Math.pow(L, 4)/(384*Ev*1e3*I)*1000, fadm = L <= 5 ? L*1000/500 : 5 + L*1000/1000;
  const pe = M.postEls.filter(e => e.lvl === 0).reduce((a, e) => e.d.Nu > a.d.Nu ? e : a), a = pe.d.a, Ip = Math.pow(a, 4)/12, lf = pe.d.lf;
  const Ncr = Math.PI*Math.PI*Ei*1e3*Ip/(lf*lf);
  const n = 20, W_ = 520, H_ = 120, X = x => 30 + x/L*(W_ - 60);
  let pm = '', pv = '';
  for(let k=0;k<=n;k++){ const x = L*k/n, m = q*x*(L - x)/2, v = q*(L/2 - x); pm += (k ? ' L ' : 'M ') + X(x).toFixed(1) + ' ' + (20 + m/(q*L*L/8)*80).toFixed(1); pv += (k ? ' L ' : 'M ') + X(x).toFixed(1) + ' ' + (60 - v/(q*L/2)*45).toFixed(1); }
  const svg = `<svg viewBox="0 0 ${W_} ${2*H_+20}" width="${W_}" height="${2*H_+20}" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><g><line x1="30" x2="${W_-30}" y1="20" y2="20" stroke="#14202E"/><path d="${pm}" fill="rgba(232,117,42,.18)" stroke="#E8752A" stroke-width="2"/><text x="${W_/2}" y="${20+80+16}" text-anchor="middle" font-size="12" fill="#14202E">M max = ${fm(bm.M0, 1)} kN·m à x = ${fm(L/2)} m</text><text x="34" y="14" font-size="11" fill="#5E6B7A">Moment fléchissant M(x)</text></g><g transform="translate(0,${H_+20})"><line x1="30" x2="${W_-30}" y1="60" y2="60" stroke="#14202E"/><path d="${pv}" fill="none" stroke="#2F6FDB" stroke-width="2"/><text x="34" y="10" font-size="11" fill="#5E6B7A">Effort tranchant V(x)</text><text x="${W_-34}" y="${60+48}" text-anchor="end" font-size="12" fill="#14202E">V = ±${fm(RA, 1)} kN aux appuis</text></g></svg>`;
  let roof = '';
  if(!c.slab && c.T.type){ const span = c.Dp, ang = c.T.pente*Math.PI/180, Pf = (.45 + .4)*c.T.entraxe*(span + 2*c.T.debord), R = Pf/2, Na = R/Math.sin(ang), Ne = Na*Math.cos(ang);
    roof = `\n\n## La ferme de charpente (treillis)
Une ferme reprend ${fm(c.T.entraxe)} m de toiture sur ${fm(span + 2*c.T.debord)} m : P = (0,45 + 0,40) × ${fm(c.T.entraxe)} × ${fm(span + 2*c.T.debord)} = **${fm(Pf, 1)} kN**, réactions R = ${fm(R, 1)} kN sur chaque mur.
Équilibre du nœud d'appui (pente ${c.T.pente}°) : effort dans l'arbalétrier N = R / sin α = **${fm(Na, 1)} kN (compression)**, effort dans l'entrait T = N cos α = **${fm(Ne, 1)} kN (traction)**.`; }
  return `## La poutre la plus sollicitée : ${bm.id}
${String(bm.s.lbl)}, portée **L = ${fm(L)} m**, section ${Math.round(bm.b*100)} × ${Math.round(bm.h*100)} cm, charge ultime **qu = ${fm(q)} kN/m**.

- Réactions (isostatique) : RA = RB = qu L / 2 = **${fm(RA, 1)} kN**
- Moment : M(x) = qu x (L − x) / 2, maximal au milieu : **M0 = qu L²/8 = ${fm(bm.M0, 1)} kN·m**
- Effort tranchant : V(x) = qu (L/2 − x), nul au milieu

<!--svg-->

## Caractéristiques de la section ${Math.round(bm.b*100)} × ${Math.round(bm.h*100)}
${tab(['Grandeur','Formule','Valeur'], [['Aire','b × h', fm(bm.b*bm.h, 4) + ' m²'], ['Moment quadratique','b h³ / 12', fm(I*1e8, 0) + ' cm⁴'], ['Module de flexion','I / (h/2)', fm(W*1e6, 0) + ' cm³'], ['Contrainte de flexion (béton seul)','σ = M0 / W', fm(bm.M0/1000/W, 1) + ' MPa']])}

La contrainte de traction (${fm(bm.M0/1000/W, 1)} MPa) dépasse largement la résistance du béton en traction (ft28 = 2,1 MPa) : c'est pourquoi il faut des **aciers** dans la partie basse.

## Flèche de ${bm.id} (charges de service ${fm(bm.qs)} kN/m)
$$ f = 5 q L⁴ / (384 E I)
- Instantanée (Ei = ${fm(Ei, 0)} MPa) : **${fm(fi, 1)} mm** ; différée (Ev = ${fm(Ev, 0)} MPa) : **${fm(fv, 1)} mm**
- Limite : ${L <= 5 ? 'L/500' : '0,5 cm + L/1000'} = ${fm(fadm, 1)} mm → ${fv <= fadm ? '✔ vérifiée' : '✖ à revoir (augmenter h)'}

## Flambement du poteau le plus chargé : ${pe.post} (RDC)
Section ${Math.round(a*100)} × ${Math.round(a*100)}, lf = ${fm(lf)} m, I = a⁴/12 = ${fm(Ip*1e8, 0)} cm⁴.
$$ Ncr = π² E I / lf² = ${fm(Ncr, 0)} kN   pour Nu = ${fm(pe.d.Nu, 0)} kN
Coefficient de sécurité vis-à-vis de l'instabilité élastique : **${fm(Ncr/pe.d.Nu, 1)}** (élancement λ = ${fm(pe.d.lam, 1)}).${roof}`.replace('<!--svg-->', '\n' + svg.replace(/\n/g, '') + '\n');
};

G.ba = c => {
  const {M} = c, fams = Object.keys(M.q.beton);
  const pe = M.postEls.reduce((a, e) => e.d.Nu > a.d.Nu ? e : a), bm = M.beams.reduce((a, e) => e.Mt > a.Mt ? e : a), sm = M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a);
  const pn = M.panels.filter(e => !e.tremie).sort((a, b) => b.lx - a.lx)[0];
  return `## Hypothèses de calcul du projet
- Béton **fc28 = 25 MPa** (dosé à 350 kg/m³) → fbu = 0,85 × 25 / 1,5 = **14,17 MPa**, ft28 = 2,1 MPa
- Aciers **HA Fe E500** → fsu = 500 / 1,15 = **435 MPa** ; cadres HA6 ou HA8
- Enrobages : **5 cm** en fondation, **3 cm** en façade, **2,5 cm** à l'intérieur, **2 cm** dans les planchers
- Combinaisons : ELU = 1,35 G + 1,5 Q (résistance) ; ELS = G + Q (sol, flèches)

## Synthèse des éléments calculés
${tab(['Famille','Béton (m³)','Aciers (kg)','Ratio (kg/m³)'], fams.map(k => [k, fm(M.q.beton[k], 2), fm(M.q.acier[k], 0), M.q.beton[k] ? fm(M.q.acier[k]/M.q.beton[k], 0) : '—']).concat([['**Total**', '**' + fm(M.totBeton, 1) + '**', '**' + fm(M.totAcier, 0) + '**', '**' + fm(M.totAcier/M.totBeton, 0) + '**']]))}

## Les éléments clés
- **Poteau ${pe.post} (${M.L[pe.lvl].court})** : Nu = ${fm(pe.d.Nu, 0)} kN → ${Math.round(pe.d.a*100)}×${Math.round(pe.d.a*100)}, **${A.PRJ.barTxt(pe.d.bars)}**, cadres HA${pe.d.dt}/${Math.round(pe.d.st*100)}.
- **${c.slab ? 'Poutre' : 'Chaînage'} ${bm.id}** : L = ${fm(bm.L)} m, Mt = ${fm(bm.Mt, 1)} kN·m → ${Math.round(bm.b*100)}×${Math.round(bm.h*100)}, **${A.PRJ.barTxt(bm.bt)}** + chapeaux ${A.PRJ.barTxt(bm.ba)}.
- **Semelle ${sm.id}** : Nser = ${fm(sm.Ns, 0)} kN → ${fm(sm.B)}×${fm(sm.B)}×${fm(sm.h)} m, **${sm.bars.n} HA${sm.bars.d}** e = ${Math.round(sm.bars.s*100)} cm dans les 2 sens.
${pn ? `- **Plancher ${pn.id} (${String(pn.n)})** : lx = ${fm(pn.lx)} m → corps creux **${pn.hd}**, ${pn.npt} poutrelles.` : '- Pas de plancher en béton : la toiture repose sur les chaînages par l\'intermédiaire de la charpente.'}
${M.stairs.length ? `- **Escalier ${M.stairs[0].id}** : paillasse ${Math.round(M.stairs[0].e*100)} cm, HA${M.stairs[0].bars.d} e = ${Math.round(M.stairs[0].bars.s*100)} cm.` : ''}

Touchez un élément ci-dessous pour voir son calcul complet.
<!--btn:${[pe.id, bm.id, sm.id, pn && pn.id, M.stairs[0] && M.stairs[0].id].filter(Boolean).join(',')}-->`;
};

G.mat = c => {
  const {M} = c, dal = (M.q.beton['Dallage'] || 0), ba = M.totBeton - dal, bp = c.q('bp');
  const mix = (V, dos) => [fm(V, 1), fm(V*dos/50, 0), fm(V*.42, 1), fm(V*.82, 1), fm(V*175/1000, 1)];
  const st = steelByDia(M), dias = Object.keys(st.d).map(Number).sort((a, b) => a - b);
  const a15 = c.q('agg15'), a10 = c.q('agg10'), en = c.q('enduit'), ca = c.q('carreau'), fa = c.q('faience'), pi = c.q('peinti') + c.q('peinte');
  const nA15 = Math.ceil(a15*12.5*1.05), nA10 = Math.ceil(a10*12.5*1.05);
  const mort = (a15 + a10)*.02 + en*.02, cimM = mort*350/50;
  const cimTot = ba*350/50 + dal*300/50 + bp*150/50 + cimM;
  return `## Bétons du projet
${tab(['Béton','Volume (m³)','Ciment (sacs de 50 kg)','Sable (m³)','Gravier (m³)','Eau (m³)'], [['Béton armé 350 kg/m³', ...mix(ba, 350)], ['Dallage 300 kg/m³', ...mix(dal, 300)], ['Propreté 150 kg/m³', ...mix(bp, 150)]])}

Rapport eau/ciment visé **E/C ≈ 0,5** (175 L d'eau pour 350 kg) : plus d'eau rend le béton plus facile à couler mais nettement moins résistant.

## Aciers par diamètre (note de calcul)
${tab(['Diamètre','Poids (kg)','Barres de 12 m'], dias.map(d => [`HA${d}`, fm(st.d[d], 0), fm(Math.ceil(st.d[d]/(12*kgm(d))), 0)]).concat([['Treillis soudé', fm(st.tr, 0), '—']]))}

## Maçonnerie et enduits
- Agglos creux de 15 : ${fm(a15, 1)} m² × 12,5 u/m² + 5 % de casse = **${F(nA15)} agglos**
- Agglos creux de 10 : ${fm(a10, 1)} m² → **${F(nA10)} agglos**
- Mortier de pose et enduits : ${fm(mort, 1)} m³ dosés à 350 kg/m³ → ${fm(cimM, 0)} sacs de ciment

## Finitions
- Carrelage ${fm(ca, 1)} m² (+ 8 % de coupes = ${fm(ca*1.08, 1)} m²), faïence ${fm(fa, 1)} m²
- Peinture : ${fm(pi, 0)} m² × 2 couches à 10 m²/L ≈ **${fm(pi*2/10, 0)} litres**

> [!retenir] Ciment total du projet
> Environ **${F(Math.round(cimTot))} sacs de 50 kg** (${fm(cimTot*50/1000, 1)} t). À stocker sur palettes, à l'abri, piles de 10 sacs maximum.`;
};

G.tech = c => {
  const {M, p, T} = c, lxMax = Math.max(0, ...M.panels.filter(e => !e.tremie).map(e => e.lx));
  const rows = [
    ['Fondations', `${M.semelles.length} semelles isolées (${M.types.length} types) + longrines ${p.struct.longrine.join('×')}`, `σsol = ${fm(c.sol.sigma, 1)} bar : la pression moyenne reste faible, inutile de prévoir un radier`],
    ['Soubassement', 'Agglos pleins de 15 sur 0,60 m + hérisson + dallage ' + (c.slab ? '10' : '8') + ' cm', 'Couper les remontées d\'humidité et porter le dallage'],
    ['Ossature', c.slab ? `Poteaux-poutres en béton armé (${M.posts.length} poteaux, ${c.nL} niveaux)` : `Poteaux ${p.struct.poteau}×${p.struct.poteau} et chaînages`, c.slab ? 'Reprendre les planchers et les charges des étages' : 'Maçonnerie chaînée : solution économique pour un plain-pied'],
    ['Planchers', c.slab ? `Corps creux (${[...new Set(M.panels.filter(e => !e.tremie).map(e => e.hd))].join(', ')})` : 'Aucun (faux plafond sous charpente)', c.slab ? `Portée maximale ${fm(lxMax)} m : le corps creux reste léger et économique` : 'Toiture légère, pas d\'étage'],
    ['Murs', 'Agglos creux de 15 (façades) et de 10 (cloisons), enduits 2 faces', 'Matériau local, rapide à poser'],
    ['Toiture', T.type === 'terrasse' ? `Toiture-terrasse, étanchéité multicouche, acrotère ${fm(T.acrotere)} m` : `${T.couverture}, ${T.charpente.toLowerCase()}, ${T.type} à ${T.pente}°`, T.type === 'terrasse' ? 'Permet une extension ou des équipements en toiture' : 'Évacuation rapide des fortes pluies, débords de ' + fm(T.debord) + ' m qui protègent les façades'],
    ['Escaliers', M.stairs.length ? `Béton armé, 2 volées de ${M.stairs[0].n1} + ${M.stairs[0].n2} marches` : '—', M.stairs.length ? 'Robuste et coupe-feu' : ''],
    ['Menuiseries', p.id === 'eco' ? 'Aluminium simple, portes isoplanes' : p.id === 'haut' ? 'Aluminium à rupture de pont thermique, bois massif' : 'Aluminium et bois', 'Selon le standing'],
    ['Revêtements', p.id === 'haut' ? 'Marbre et grès cérame grand format' : 'Carrelage grès cérame 40×40, faïence', 'Durables et faciles à entretenir']
  ].filter(r => r[1] !== '—');
  return `## Le système constructif retenu
${tab(['Ouvrage','Solution','Pourquoi'], rows)}

## Ordre d'exécution sur ce chantier
${p.planning.map((r, i) => `${i+1}. **${String(r[0])}** : semaines ${r[1] + 1} à ${r[1] + r[2]}`).join('\n')}

## Points techniques propres à ce projet
- ${M.longs.length} longrines avec **fourreaux** (eau, électricité) posés avant coulage.
- ${M.lint.length} linteaux, dont ${M.lint.filter(l => l.o.w >= 1.4).length} de plus de 1,40 m (ouvertures larges).
${c.slab ? `- ${M.panels.filter(e => !e.tremie).length} panneaux de plancher : poutrelles posées dans le sens de la petite portée, étais à mi-portée pendant 21 jours.` : '- Arase des murs à +3,00 avec chaînage continu sur lequel s\'ancrent les fermes (pattes de scellement).'}
${T.type === 'terrasse' ? `- Relevés d'étanchéité de 15 cm sur l'acrotère, ${Math.max(2, Math.ceil(c.Wd*c.Dp/80))} évacuations d'eaux pluviales.` : `- Gouttières sur les ${T.type === '4 pans' ? '4 côtés' : '2 longs pans'} et ${Math.max(4, 2*Math.ceil((c.Wd + 1.2)/12) + 2)} descentes.`}`;
};

G.metre = c => {
  const lots = {}; c.ME.lines.forEach(l => (lots[l.lot] = lots[l.lot] || []).push(l));
  return `## Avant-métré de ce projet (extrait)
Les quantités ci-dessous sont mesurées sur les plans et sur la note de calcul du projet ; le détail complet se modifie dans l'outil Métré.

${Object.entries(lots).map(([lot, L]) => `### ${String(lot)}\n${tab(['Ouvrage','Unité','Quantité'], L.slice(0, 6).map(l => [String(l.d), l.u, fm(l.q, l.u === 'u' || l.u === 'ens' ? 0 : 2)]))}`).join('\n\n')}

> [!astuce] Règles appliquées
> Murs : longueur × hauteur − ouvertures de plus de 1 m² ; béton : dimensions nettes ; aciers : longueurs de la note de calcul + 5 % de chutes ; carrelage : surface habitable des pièces.
<!--metre-->`;
};

G.eco = c => {
  const {p, DQ, M} = c; if(!DQ) return 'Données indisponibles.';
  const shab = c.ME.info.Shab, ttc = DQ.ttc, m2 = ttc/shab;
  const ann = [['Études (architecte, BET structure)', .07], ['Permis, contrôle, assurances', .03], ['Raccordements CIE / SODECI', .015], ['Imprévus', .08]];
  const glob = ttc*(1 + sum(ann, a => a[1]));
  let rent = '';
  if(p.id === 'immeuble'){ const loyer = 250000, n = 10, an = loyer*n*12, ch = .25;
    rent = `\n\n## Rentabilité locative
${n} appartements F3 loués ${F(loyer)} F/mois : **${F(an)} F/an** de loyers bruts.
- Rendement brut = ${F(an)} / ${F(Math.round(glob))} = **${fm(an/glob*100, 1)} %**
- Après ${fm(ch*100, 0)} % de charges, vacance et entretien : rendement net ≈ **${fm(an*(1 - ch)/glob*100, 1)} %**, retour sur investissement en **${fm(glob/(an*(1 - ch)), 1)} ans** (hors foncier et financement).`; }
  return `## Coût de construction calculé (DQE du projet)
${tab(['Lot','Montant HT (F CFA)','Part'], DQ.lots.filter(l => l.t).map(l => [String(l.nom), F(Math.round(l.t)), fm(l.t/DQ.ht*100, 1) + ' %']).concat([['**Total HT**', '**' + F(Math.round(DQ.ht)) + '**', '100 %'], ['TVA 18 %', F(Math.round(DQ.tv)), ''], ['**Total TTC**', '**' + F(Math.round(ttc)) + '**', '']]))}

## Ratios
- Surface habitable calculée : ${fm(shab, 1)} m² → **${F(Math.round(m2))} F CFA TTC par m²**.
- Fourchette de ce standing : ${F(p.budget[0])} à ${F(p.budget[1])} F → le devis est ${ttc < p.budget[0] ? 'sous' : ttc > p.budget[1] ? 'au-dessus de' : 'dans'} la fourchette.
- Gros œuvre (terrassements, fondations, élévation, maçonnerie) : ${fm(sum(DQ.lots.filter(l => /Terrass|Fondation|Élévation|Maçonnerie/.test(l.nom)), l => l.t)/DQ.ht*100, 0)} % du HT ; acier : ${fm(M.totAcier/1000, 2)} t.

## Coût global de l'opération (hors terrain)
${tab(['Poste','Taux','Montant (F CFA)'], [['Travaux TTC', '', F(Math.round(ttc))], ...ann.map(a => [a[0], fm(a[1]*100, 1) + ' %', F(Math.round(ttc*a[1]))]), ['**Coût global**', '', '**' + F(Math.round(glob)) + '**']])}

> [!attention] Sensibilité
> Une hausse de 10 % du prix du ciment et de l'acier augmente le gros œuvre d'environ ${F(Math.round(sum(DQ.lots.filter(l => /Fondation|Élévation/.test(l.nom)), l => l.t)*.055))} F (≈ ${fm(sum(DQ.lots.filter(l => /Fondation|Élévation/.test(l.nom)), l => l.t)*.055/ttc*100, 1)} % du total).${rent}`;
};

G.chant = c => {
  const {p, M} = c, wk = Math.max(...p.planning.map(r => r[1] + r[2]));
  const ba = M.totBeton, maso = c.q('agg15') + c.q('agg10'), carr = c.q('carreau') + c.q('faience'), enduit = c.q('enduit');
  const r = [['Béton armé (coffrage, ferraillage, coulage)', ba, 'm³', 1.0, 'équipe de 6 (1 chef, 2 ferrailleurs, 2 coffreurs, 1 manœuvre)'], ['Maçonnerie d\'agglos', maso, 'm²', 10, 'maçon + aide'], ['Enduits', enduit, 'm²', 14, 'maçon + aide'], ['Carrelage et faïence', carr, 'm²', 12, 'carreleur + aide']];
  const cim = (M.totBeton*350 + c.q('dallage')*.08*300)/50, go = p.planning.filter(x => /Fondation|Structure|Poteaux|Soubassement/.test(x[0])).reduce((a, x) => a + x[2], 0) || 6;
  const surf = Math.max(150, c.Wd*c.Dp*2.2);
  return `## Durée et enchaînement
Durée totale prévue : **${wk} semaines** (${fm(wk/4.33, 1)} mois). Gros œuvre : environ ${go} semaines.

## Main-d'œuvre calculée à partir des quantités du projet
${tab(['Tâche','Quantité','Rendement','Journées d\'équipe','Équipe type'], r.map(x => [x[0], fm(x[1], 1) + ' ' + x[2], fm(x[3], 1) + ' ' + x[2] + '/j', fm(x[1]/x[3], 0), x[4]]))}

## Approvisionnements
- Ciment pour le béton : **${F(Math.round(cim))} sacs**, soit environ **${F(Math.round(cim/go))} sacs par semaine** pendant le gros œuvre → magasin pour au moins ${F(Math.round(cim/go*1.5))} sacs (1,5 semaine de stock).
- Aciers : ${fm(M.totAcier/1000, 2)} t livrées en 2 ou 3 fois (fondations, puis chaque niveau).
- Agglos : ${F(Math.ceil((c.q('agg15') + c.q('agg10'))*12.5*1.05))} unités, à commander par lots de 1 000 à 2 000.

## Installation de chantier pour ce projet
- Surface utile autour du bâtiment : **≈ ${fm(surf, 0)} m²** (stockage, aire de ferraillage, circulation).
- Magasin fermé de ${c.nL > 2 ? '20' : '12'} m², point d'eau (${fm(M.totBeton*.18 + 10, 0)} m³ d'eau pour le béton et la cure), bétonnière ${c.nL > 2 ? '500 L ou centrale à béton' : '350 L'}${c.nL > 2 ? ', monte-charge ou grue légère pour les étages' : ''}.

## Contrôles prévus
${tab(['Étape','Contrôle'], [['Implantation', 'Cotes et diagonales, ±0,00'], ['Fouilles', 'Profondeur −' + fm(c.sol.prof) + ', bon sol, propreté'], ['Ferraillage', `Avant chaque coulage : ${M.semelles.length} semelles, ${M.postEls.length} poteaux${c.slab ? ', ' + M.beams.length + ' poutres, ' + M.panels.length + ' panneaux' : ''}`], ['Béton', 'Cône d\'Abrams (affaissement 7 à 10 cm), 3 éprouvettes par 15 m³'], ['Réception', 'Visite contradictoire, PV, levée des réserves']])}`;
};

G.ro = c => {
  const P = c.p.planning.map((r, i) => ({i, n:r[0], s:r[1], d:r[2], f:r[1] + r[2]}));
  const end = Math.max(...P.map(t => t.f));
  P.forEach(t => { const succ = P.filter(u => u.s >= t.f - 1e-9); t.ml = succ.length ? Math.min(...succ.map(u => u.s)) - t.f : end - t.f; });
  P.forEach(t => { const later = P.filter(u => u.s >= t.s && u !== t); t.mt = end - t.f - (later.length ? 0 : 0); });
  const crit = P.filter(t => t.ml === 0);
  const cim = c.M.totBeton*350/50, wk = end, Dw = cim/wk, Cc = 25000, Cs = 150;
  const Q = Math.sqrt(2*Dw*Cc/Cs);
  return `## Réseau des tâches et chemin critique
Les ${P.length} tâches du planning de ce projet sont ordonnées selon leurs dates de début. Une tâche est **critique** lorsque sa marge libre est nulle : tout retard décale la fin du chantier.

${tab(['Tâche','Début (sem.)','Durée','Fin','Marge libre','Critique'], P.map(t => [String(t.n), t.s + 1, t.d, t.f, t.ml, t.ml === 0 ? '**oui**' : 'non']))}

Durée totale : **${end} semaines**. Chemin critique : ${crit.map(t => String(t.n)).join(' → ')}.

## Optimiser les commandes de ciment (formule de Wilson)
Demande moyenne : ${F(Math.round(cim))} sacs sur ${wk} semaines ≈ **${fm(Dw, 0)} sacs/semaine**. Coût d'une commande (transport, déchargement) : ${F(Cc)} F ; coût de stockage : ${Cs} F par sac et par semaine (immobilisation, pertes).
$$ Q* = √(2 × D × Cc / Cs) = √(2 × ${fm(Dw, 0)} × ${F(Cc)} / ${Cs}) ≈ ${fm(Q, 0)} sacs
Commander environ **${F(Math.round(Q/10)*10)} sacs** à chaque livraison, soit une commande toutes les **${fm(Q/Dw, 1)} semaines**.`;
};

G.math = c => {
  const rooms = []; c.uniq.forEach(l => roomOpenings(c, l.lv).forEach(o => rooms.push({l, ...o})));
  const big = rooms.filter(o => o.r.t !== 'escalier').sort((a, b) => b.S - a.S)[0].r;
  const ang = c.T.pente || 0, fou = c.q('fouille');
  return `## Surfaces des pièces (dimensions intérieures = axes − 15 cm)
${tab(['Niveau','Pièce','Dimensions (m)','Surface (m²)','Périmètre (m)'], rooms.filter(o => o.r.t !== 'escalier').map(o => [o.l.court + (c.rep(o.l) > 1 ? ' ×' + c.rep(o.l) : ''), String(o.r.n), `${fm(o.r.w - .15)} × ${fm(o.r.h - .15)}`, fm(o.S), fm(2*(o.r.w + o.r.h - .3))]))}

Surface habitable totale (hors terrasses) : **${fm(c.ME.info.Shab, 1)} m²**.

## Pythagore sur le projet
- Diagonale de l'emprise : √(${fm(c.Wd)}² + ${fm(c.Dp)}²) = **${fm(Math.hypot(c.Wd, c.Dp), 3)} m**
- Diagonale de la plus grande pièce (${String(big.n)}) : √(${fm(big.w)}² + ${fm(big.h)}²) = **${fm(Math.hypot(big.w, big.h), 3)} m**
${ang ? `- Rampant de toiture : (${fm(c.Dp/2)} + ${fm(c.T.debord)}) / cos ${ang}° = **${fm((c.Dp/2 + c.T.debord)/Math.cos(ang*Math.PI/180), 3)} m**` : ''}

## Trigonométrie et pentes
${ang ? `Pente de ${ang}° → tan ${ang}° = ${fm(Math.tan(ang*Math.PI/180), 4)}, soit **${fm(Math.tan(ang*Math.PI/180)*100, 1)} %** ; hauteur au faîtage = ${fm(c.Dp/2 + c.T.debord)} × tan ${ang}° = **${fm((c.Dp/2 + c.T.debord)*Math.tan(ang*Math.PI/180))} m**.` : `Forme de pente de la terrasse à ${c.T.pente || 2} % : sur ${fm(c.Dp/2)} m, la surépaisseur atteint ${fm((c.Dp/2)*(c.T.pente || 2), 0)} cm (angle de ${fm(Math.atan((c.T.pente || 2)/100)*180/Math.PI, 2)}°).`}
${c.M.stairs.length ? `Escalier : pente = arctan(h/g) = arctan(${fm(c.M.stairs[0].hm*100, 1)}/${Math.round(c.M.stairs[0].g*100)}) = **${fm(c.M.stairs[0].alpha*180/Math.PI, 1)}°**.` : ''}

## Volumes
- Fouilles des ${c.M.semelles.length} semelles : Σ (B + 0,30)² × ${fm(c.sol.prof)} = **${fm(fou, 2)} m³**
- Béton armé total (note de calcul) : **${fm(c.M.totBeton, 2)} m³**

## Échelles
Au 1/100, 1 cm sur le plan = 1 m réel : la façade de ${fm(c.Wd)} m mesure **${fm(c.Wd, 1)} cm** sur la planche ; au 1/50 (détails), elle mesurerait ${fm(c.Wd*2, 1)} cm.`;
};

G.om = c => {
  const {M} = c, bm = M.beams.reduce((a, e) => e.Mt > a.Mt ? e : a), q = bm.qu, L = bm.L;
  const W = sum(M.semelles, e => e.Ns), xg = sum(M.semelles, e => e.Ns*e.x)/W, yg = sum(M.semelles, e => e.Ns*e.y)/W;
  const rooms = c.L[0].lv.pieces, Sa = sum(rooms, r => r.w*r.h), xa = sum(rooms, r => r.w*r.h*(r.x + r.w/2))/Sa, ya = sum(rooms, r => r.w*r.h*(r.y + r.h/2))/Sa;
  return `## Dériver pour trouver le moment maximal (${bm.id})
Sur la poutre ${bm.id} (L = ${fm(L)} m, qu = ${fm(q)} kN/m) :
$$ M(x) = qu x (L − x) / 2 = ${fm(q/2, 3)} (${fm(L)} x − x²)
$$ M'(x) = qu (L/2 − x) = V(x)
M'(x) = 0 pour **x = L/2 = ${fm(L/2)} m** : la dérivée du moment est l'effort tranchant, et le moment est maximal là où l'effort tranchant s'annule : M(${fm(L/2)}) = **${fm(q*L*L/8, 1)} kN·m**.

## Intégrer pour obtenir une résultante
La charge totale sur la poutre est l'intégrale de q sur la portée : ∫₀ᴸ qu dx = qu × L = **${fm(q*L, 1)} kN**, appliquée au milieu (centre de gravité du diagramme rectangulaire).

## Centre de gravité des charges du bâtiment
$$ xG = Σ Ni xi / Σ Ni    yG = Σ Ni yi / Σ Ni
Avec les ${M.semelles.length} charges de service des semelles (Σ N = ${fm(W, 0)} kN) : **G = (${fm(xg)} ; ${fm(yg)})** m.
Centre géométrique de l'emprise (pondéré par les surfaces des pièces) : (${fm(xa)} ; ${fm(ya)}) m.
Excentricité : ex = ${fm(xg - xa)} m, ey = ${fm(yg - ya)} m → ${Math.hypot(xg - xa, yg - ya) < .05*Math.max(c.Wd, c.Dp) ? 'charges bien centrées ✔ (tassements homogènes)' : 'légère excentricité, à surveiller pour les tassements'}.

## Moment quadratique par intégration
Pour la section ${Math.round(bm.b*100)}×${Math.round(bm.h*100)} : I = ∫ y² dA = ∫ b y² dy (de −h/2 à h/2) = b h³/12 = **${fm(bm.b*Math.pow(bm.h, 3)/12*1e8, 0)} cm⁴**.

## Équation différentielle de la déformée
$$ E I y''(x) = −M(x)
Deux intégrations avec y(0) = y(L) = 0 donnent la flèche maximale **f = 5 q L⁴ / (384 E I)** utilisée dans la vérification de ${bm.id}.`;
};

G.sp = c => {
  const {M, p} = c, W = sum(M.semelles, e => e.NG), Q = sum(M.semelles, e => e.NQ);
  const E = c.L.map((l, i) => A.PLAN.elecData(p, i)), P = sum(E, e => sum(e.circuits, x => x.p)), Ptot = P;
  const tri = c.nL > 2, I = tri ? Ptot/(Math.sqrt(3)*400*.9) : Ptot/(230*.9), ks = .6, kVA = Ptot*ks/1000/.9;
  const kwh = Ptot*ks*.25*24*30/1000;
  return `## Masse et poids du bâtiment
Somme des charges permanentes descendues aux fondations : **G = ${fm(W, 0)} kN**, soit une masse d'environ **${fm(W/9.81, 0)} tonnes** (P = m g, g = 9,81 N/kg) ; charges d'exploitation : ${fm(Q, 0)} kN.
Par m² de plancher : ${fm(W/(c.Wd*c.Dp*c.nL), 1)} kN/m² ≈ ${fm(W/(c.Wd*c.Dp*c.nL)/9.81*1000, 0)} kg/m².

## Électricité : puissance et courant
${tab(['Niveau','Puissance installée (W)'], c.L.map((l, i) => [l.nom, F(sum(E[i].circuits, x => x.p))]).concat([['**Total**', '**' + F(Ptot) + ' W**']]))}

- Coefficient de simultanéité 0,6 → puissance appelée ≈ **${fm(Ptot*ks/1000, 1)} kW**, soit un abonnement de **${fm(Math.ceil(kVA), 0)} kVA**${tri ? ' en triphasé 400 V' : ' en monophasé 230 V'}.
- Courant total : I = P / (${tri ? '√3 × 400' : '230'} × cos φ) = **${fm(I, 0)} A** (cos φ = 0,9).
- Énergie consommée (25 % du temps à la puissance appelée) : ≈ **${F(Math.round(kwh))} kWh/mois**.

## Physique appliquée au chantier
- Énergie pour monter 1 m³ de béton (2 500 kg) au dernier plancher (+${fm(c.top*HN)} m) : Ep = m g h = 2 500 × 9,81 × ${fm(c.top*HN)} = **${fm(2500*9.81*c.top*HN/1000, 0)} kJ**.
- Chimie du ciment : l'eau de gâchage (175 L/m³) hydrate le ciment ; un excès d'eau laisse des pores qui facilitent la **carbonatation** et la corrosion des aciers, d'où les enrobages de 2 à 5 cm imposés dans ce projet.`;
};

G.pb = c => {
  const rows = []; c.uniq.forEach(l => roomOpenings(c, l.lv).filter(o => ['sejour','chambre','cuisine','bureau'].includes(o.r.t)).forEach(o => rows.push([l.court, String(o.r.n), fm(o.S, 1), fm(o.Sv, 2), fm(o.Sv/o.S*100, 0) + ' %', o.Sv/o.S >= 1/6 ? '✔ ≥ 1/6' : o.Sv/o.S >= 1/8 ? '≈ correct' : '✖ faible', [...new Set(o.win.map(w => w.fac).filter(Boolean))].join(', ') || '—'])));
  const wet = []; c.uniq.forEach(l => l.lv.pieces.filter(r => ['eau','wc'].includes(r.t)).forEach(r => wet.push(r.n)));
  return `## Orientation
Façade principale orientée **${c.o.h0}**, façade arrière ${c.o.h1}, pignons ${c.o.v0} et ${c.o.v1}. En climat tropical humide (Abidjan, 5° N), le soleil est haut toute l'année : les façades **Est et Ouest** reçoivent le soleil le plus rasant et le plus chaud ; les débords de toit et les casquettes protègent les ouvertures ${c.o.h0}.

## Éclairage naturel et aération des pièces principales
Règle pratique : surface vitrée ≥ **1/6 de la surface** de la pièce (environ 17 %).

${tab(['Niveau','Pièce','Surface (m²)','Vitrage (m²)','Rapport','Appréciation','Façades'], rows)}

## Ventilation et humidité
- Pièces humides à ventiler (grilles hautes ou extraction) : ${[...new Set(wet)].map(String).join(', ')}.
- Ventilation traversante possible lorsque des fenêtres existent sur deux façades opposées.
- Contre les remontées d'humidité : soubassement en agglos pleins, **hérisson** de 15 cm, film polyane sous le dallage, niveau ±0,00 à ${fm(-(c.site.tn ?? -.2)*100, 0)} cm au-dessus du terrain.

${c.nL > 2 ? `## Sécurité incendie (immeuble d'habitation)
- Escalier encloisonné de ${fm(c.M.stairs[0] ? c.M.stairs[0].emm : 1.2)} m d'emmarchement, désenfumage en partie haute (édicule).
- Plancher haut du dernier niveau à +${fm(c.top*HN)} m (< 28 m) ; extincteurs à chaque palier, éclairage de sécurité.` : `## Sécurité incendie
Cuisine éloignée des chambres, tableau électrique avec disjoncteur différentiel 30 mA, détecteur de fumée conseillé dans le dégagement.`}`;
};

G.therm = c => {
  const hi = .11, he = .06;
  const Rmur = hi + he + .015/1.15*2 + .23, Umur = 1/Rmur;
  const Utoit = c.T.type === 'terrasse' ? 1/(hi + he + .22 + .05/1.15 + .02) : 1/(hi + he + .16 + .02 + .17);
  const UtoitIso = 1/(1/Utoit + .05/.04);
  const fac = {Est:500, Ouest:550, Sud:250, Nord:180, '':300};
  const rows = []; let tot = 0;
  c.uniq.forEach(l => roomOpenings(c, l.lv).filter(o => ['sejour','chambre','bureau'].includes(o.r.t)).forEach(o => {
    const W = o.S*90 + sum(o.win, w => w.S*(fac[w.fac] || 300)*.5) + (o.r.t === 'sejour' ? 4 : 2)*100;
    const btu = W*3.412, sp = btu <= 9000 ? '9 000 BTU (1 CV)' : btu <= 12000 ? '12 000 BTU (1,5 CV)' : btu <= 18000 ? '18 000 BTU (2 CV)' : btu <= 24000 ? '24 000 BTU (2,5 CV)' : 'Gainable ou 2 splits';
    tot += W*c.rep(l); rows.push([l.court + (c.rep(l) > 1 ? ' ×' + c.rep(l) : ''), String(o.r.n), fm(o.S, 1), fm(o.Sv, 1), F(Math.round(W)), F(Math.round(btu)), sp]); }));
  return `## Coefficients de transmission U des parois du projet
${tab(['Paroi','Composition','U (W/m²·K)'], [['Mur de façade', 'Enduit 1,5 + agglo creux 15 + enduit 1,5', fm(Umur, 2)], ['Toiture', c.T.type === 'terrasse' ? 'Protection + étanchéité + forme de pente + corps creux 16+4' : `${c.T.couverture} + lame d'air ventilée + faux plafond staff`, fm(Utoit, 2)], ['Toiture avec 5 cm de laine minérale', 'variante conseillée', fm(UtoitIso, 2)], ['Fenêtre', 'Aluminium, simple vitrage', '5,8']])}

R = 1/hi + Σ e/λ + 1/he ; U = 1/R. La **toiture** est la paroi la plus exposée au soleil : ajouter 5 cm d'isolant divise ses apports par ${fm(Utoit/UtoitIso, 1)}.

## Puissance de climatisation pièce par pièce
Estimation : 90 W/m² (parois et renouvellement d'air) + apports solaires des vitrages selon la façade + 100 W par occupant.

${tab(['Niveau','Pièce','Surface (m²)','Vitrage (m²)','Puissance (W)','BTU/h','Appareil conseillé'], rows)}

Puissance frigorifique totale : **${fm(tot/1000, 1)} kW** (${F(Math.round(tot*3.412))} BTU/h), soit environ **${fm(tot/1000/3, 1)} kW électriques** (COP ≈ 3).`;
};

G.acou = c => {
  const R = m => 20*Math.log10(m) + 20*Math.log10(500) - 47;
  const m15 = 230, m10 = 180, mpl = c.slab ? 285 + 60 : 0;
  const sej = []; c.uniq.forEach(l => l.lv.pieces.filter(r => r.t === 'sejour').forEach(r => sej.push(r)));
  const s = sej.sort((a, b) => b.w*b.h - a.w*a.h)[0], hsp = c.slab ? 2.74 : 2.70;
  const V = (s.w - .15)*(s.h - .15)*hsp, Sf = (s.w - .15)*(s.h - .15), Sm = 2*((s.w - .15) + (s.h - .15))*hsp;
  const Aeq = Sf*.02 + Sf*(c.slab ? .03 : .05) + Sm*.03 + Sf*.25, T = .16*V/Aeq;
  return `## Isolement aux bruits aériens (loi de masse à 500 Hz)
$$ R ≈ 20 log(m') + 20 log(f) − 47
${tab(['Paroi du projet','Masse surfacique m\' (kg/m²)','R théorique à 500 Hz (dB)','Rw courant (dB)'], [['Mur de façade (agglo creux 15 enduit)', m15, fm(R(m15), 0), '≈ 45'], ['Cloison (agglo creux 10 enduit)', m10, fm(R(m10), 0), '≈ 42'], ...(c.slab ? [['Plancher corps creux + chape + carrelage', mpl, fm(R(mpl), 0), '≈ 50']] : [])])}

${c.p.id === 'immeuble' ? `> [!norme] Séparatif entre appartements
> L'exigence courante est **DnT,A ≥ 53 dB** entre logements : un agglo creux de 15 seul (≈ 45 dB) ne suffit pas. Solutions pour ce projet : **agglo plein de 20 enduit** (≈ 52 dB) ou agglo de 15 + doublage plaque de plâtre sur laine minérale (≈ 58 dB).

## Bruits d'impact
Plancher 16+4 + carrelage collé : L'n,w ≈ 75 dB (bruyant). Avec une **sous-couche résiliente** sous chape flottante : ≈ 58 dB, conforme à l'exigence de 58 dB.` : `## Bruits extérieurs
Les menuiseries sont le point faible : une fenêtre aluminium simple vitrage fermée donne ≈ 25 dB d'isolement. Placer les chambres côté jardin plutôt que côté rue.`}

## Temps de réverbération du séjour « ${String(s.n)} »
Volume V = ${fm((s.w - .15))} × ${fm((s.h - .15))} × ${fm(hsp)} = **${fm(V, 1)} m³** ; aire d'absorption A = Σ S α ≈ ${fm(Aeq, 1)} m² (carrelage α = 0,02, plafond, murs enduits peints α = 0,03, mobilier et occupants).
$$ T = 0,16 V / A = 0,16 × ${fm(V, 1)} / ${fm(Aeq, 1)} = ${fm(T, 2)} s
${T > .8 ? `Au-dessus de 0,8 s : le séjour sera **réverbérant**. Prévoir rideaux, tapis ou un plafond acoustique pour descendre vers 0,6 s.` : 'Entre 0,5 et 0,8 s : confort acoustique correct pour un séjour.'}`;
};

G.mdf = c => {
  const QB = {douche:.20, lavabo:.10, wc:.12, lavemains:.05, evier:.20, bac:.20};
  const NM = {douche:'Douche', lavabo:'Lavabo', wc:'WC', lavemains:'Lave-mains', evier:'Évier', bac:'Bac à laver'};
  const all = []; c.L.forEach(l => fixtures(l.lv).forEach(f => all.push(f)));
  const cnt = {}; all.forEach(f => cnt[f] = (cnt[f] || 0) + 1);
  const n = all.length, Qb = sum(all, f => QB[f]), y = n > 1 ? .8/Math.sqrt(n - 1) : 1, Qp = Math.max(Qb*y, .2);
  const D = Math.sqrt(4*Qp/1000/(Math.PI*1.5))*1000, dn = D < 16 ? 'PPR 20' : D < 21 ? 'PPR 25' : D < 26 ? 'PPR 32' : D < 33 ? 'PPR 40' : 'PPR 50';
  const roof = (c.Wd + 2*(c.T.debord || 0))*(c.Dp + 2*(c.T.debord || 0)), i = .05, Qep = .9*i*roof;
  const nd = Math.max(2, Math.ceil(Qep/3)), EH = c.p.id === 'immeuble' ? 50 : c.p.id === 'haut' ? 10 : c.p.id === 'moyen' ? 8 : 5;
  const H = c.top*HN + 3 + 15 + 5, Pp = 1000*9.81*Qp/1000*H/.6;
  return `## Débits des appareils du projet
${tab(['Appareil','Nombre','Débit de base (L/s)','Total (L/s)'], Object.entries(cnt).map(([k, v]) => [NM[k], v, fm(QB[k], 2), fm(v*QB[k], 2)]).concat([['**Total**', n, '', '**' + fm(Qb, 2) + '**']]))}

Tous les robinets ne coulent pas en même temps : coefficient de simultanéité **y = 0,8 / √(n − 1) = ${fm(y, 3)}** → débit probable **Qp = ${fm(Qp, 2)} L/s**.

## Diamètre de l'alimentation générale
$$ D = √(4 Q / (π V)) avec V = 1,5 m/s → D = ${fm(D, 1)} mm
Tube retenu : **${dn}** depuis le compteur SODECI, puis PPR 20 vers chaque appareil.
${c.nL > 2 ? `\n## Surpresseur (immeuble)
Hauteur à vaincre : ${fm(c.top*HN + 3, 0)} m (dernier robinet) + 15 m de pression résiduelle + 5 m de pertes de charge = **HMT ≈ ${fm(H, 0)} m**.
Puissance hydraulique P = ρ g Q H = 1000 × 9,81 × ${fm(Qp/1000, 4)} × ${fm(H, 0)} = ${fm(1000*9.81*Qp/1000*H, 0)} W → moteur ≈ **${fm(Pp/1000, 1)} kW** (rendement 0,6), avec une bâche de 20 m³.` : ''}

## Eaux pluviales
Surface de toiture projetée : ${fm(roof, 1)} m². Pluie de projet à Abidjan ≈ 180 mm/h (0,05 L/s/m²), coefficient de ruissellement 0,9 :
$$ Q = C × i × A = 0,9 × 0,05 × ${fm(roof, 1)} = ${fm(Qep, 2)} L/s
→ **${nd} descentes Ø 100 mm** (≈ 3 L/s chacune), rejet vers le caniveau, jamais dans la fosse.

## Eaux usées et fosse septique
Évacuations en PVC : Ø 40 (lavabos, douches), Ø 50 (éviers), **Ø 100** (WC et collecteurs), pente 1 à 3 %. ${c.p.id === 'immeuble' ? `Pour ${EH} équivalents-habitants, raccordement au réseau collectif ou **mini-station d'épuration** (fosse toutes eaux de ${fm(EH*.5, 0)} m³ minimum).` : `Pour ${EH} équivalents-habitants : fosse toutes eaux de **${fm(Math.max(3, EH*.5), 1)} m³** + puisard ou épandage, à plus de 5 m de la maison.`}`;
};

G.mmc = c => {
  const {M} = c, pe = M.postEls.filter(e => e.lvl === 0).reduce((a, e) => e.d.Ns > a.d.Ns ? e : a), d = pe.d;
  const E = 32164, nu = .2, sig = d.Ns*1e-3/(d.a*d.a + 15*d.bars.A*1e-4), eps = sig/E, dl = eps*HN*1000, et = -nu*eps;
  const Lb = Math.max(c.Wd, c.Dp), dT = 30, al = 1e-5, dL = al*dT*Lb*1000;
  const bm = M.beams.reduce((a, e) => e.Mt > a.Mt ? e : a), W = bm.b*bm.h*bm.h/6, st = bm.M0/1000/W;
  return `## Contraintes et déformations dans le poteau ${pe.post} (RDC)
Charge de service Nser = ${fm(d.Ns, 0)} kN sur une section homogénéisée B + 15 A = ${fm(d.a*d.a*1e4, 0)} + 15 × ${fm(d.bars.A, 2)} cm².
- Contrainte normale (compression) : **σ = ${fm(sig, 2)} MPa**
- Déformation longitudinale (loi de Hooke, E = ${F(E)} MPa) : ε = σ/E = **${fm(eps*1e6, 0)} × 10⁻⁶**
- Raccourcissement instantané sur ${fm(HN)} m : Δl = ε × l = **${fm(dl, 3)} mm** (environ 3 fois plus à long terme avec le fluage)
- Déformation transversale (coefficient de Poisson ν = 0,2) : εt = −ν ε = ${fm(et*1e6, 0)} × 10⁻⁶ : la section « gonfle » légèrement, ce que les cadres empêchent

## Pourquoi armer : critère de traction
Dans la poutre ${bm.id}, la contrainte de traction calculée pour un béton non armé serait σt = M/W = **${fm(st, 1)} MPa**, très supérieure à ft28 = 2,1 MPa (critère de Rankine : rupture dès que la contrainte principale de traction atteint ft). Le béton fissure, les aciers reprennent la traction.

## Dilatation thermique de la toiture
Plus grande dimension : ${fm(Lb, 1)} m ; écart de température ΔT ≈ ${dT} °C entre la nuit et le plein soleil ; α = 10⁻⁵ /°C.
$$ ΔL = α ΔT L = 10⁻⁵ × ${dT} × ${fm(Lb, 1)} = ${fm(dL, 1)} mm
${Lb > 25 ? '**Joint de dilatation** nécessaire (longueur > 25 m).' : 'Longueur inférieure à 25 m : **pas de joint de dilatation** obligatoire, mais la protection de l\'étanchéité (gravillons, isolation) limite ces mouvements.'}

## État de contrainte sous la semelle la plus chargée
Sous ${M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a).id}, la contrainte verticale vaut σ1 = ${fm(M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a).sreal, 0)} kPa ; dans le sol, la contrainte horizontale σ3 ≈ K0 σ1 ≈ 0,5 σ1. Le cisaillement maximal τ = (σ1 − σ3)/2 ≈ ${fm(M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a).sreal/4, 0)} kPa (centre du cercle de Mohr à ${fm(.75*M.semelles.reduce((a, e) => e.Ns > a.Ns ? e : a).sreal, 0)} kPa).`;
};

/* ---------- affichage ---------- */
const ORDER = ['topo','geo','rdm','ba','mat','tech','metre','eco','chant','ro','math','om','sp','pb','therm','acou','mdf','mmc'];
function chips(p){
  return `<div class="achips">${ORDER.map(id => { const m = A.mat(id); if(!m) return ''; return `<button class="achip" data-appli="${id}" data-pj="${p.id}"><span class="ic" style="background:${esc(m.couleur||'#5B6B7F')}">${ic(m.icone||'book')}</span><span>${esc(m.court||m.titre)}<small>appliquée au projet</small></span></button>`; }).join('')}</div>`;
}
function open(p, id){
  const m = A.mat(id), c = ctx(p);
  let md = ''; try{ md = G[id] ? G[id](c) : 'Application non disponible.'; }catch(e){ console.error(e); md = '> [!attention] Erreur de calcul\n> ' + e.message; }
  let extra = '';
  md = md.replace(/<!--btn:([^>]*)-->/, (x, ids) => { extra += `<div class="row" style="flex-wrap:wrap;gap:6px">${ids.split(',').filter(Boolean).map(k => `<button class="btn b-sm b-line" data-pel="${esc(k)}">${ic('column')}${esc(k)}</button>`).join('')}</div>`; return ''; });
  md = md.replace('<!--metre-->', () => { extra += `<div class="row"><button class="btn b-pri" data-pjmetre="${p.id}">${ic('calc')}Ouvrir le métré complet de ce projet</button></div>`; return ''; });
  const svgs = []; md = md.replace(/<svg[\s\S]*?<\/svg>/g, s => { svgs.push(s); return '\n@@SVG' + (svgs.length - 1) + '@@\n'; });
  let html = A.mdHtml(md); html = html.replace(/<p>@@SVG(\d+)@@<\/p>|@@SVG(\d+)@@/g, (x, a, b) => `<div class="card" style="padding:10px;overflow:auto">${svgs[+(a ?? b)]}</div>`);
  A.PRJ.setCurrent(p);
  A.win({title:`${m ? (m.court || m.titre) : id} · ${p.titre}`, wide:true,
    body:`<div class="row" style="gap:8px;flex-wrap:wrap"><span class="pill p-or">${ic(m ? m.icone : 'book')}${esc(m ? m.titre : id)}</span><span class="pill p-mute">${esc(p.titre)}</span><span class="pill p-mute">${ic('pin')}${esc((p.site||{}).ville || '')}</span></div>
     <div class="note">${ic('info')}<span>Ce qui a été calculé et décidé pour <b>ce projet</b> dans cette matière, avec ses propres valeurs. Le cours théorique reste disponible dans l'onglet Matières.</span></div>
     <div class="card">${html}</div>${extra}`,
    foot:`<div class="row" style="margin-right:auto;gap:6px;flex-wrap:wrap">${(() => { const i = ORDER.indexOf(id); const pr = ORDER[(i + ORDER.length - 1) % ORDER.length], nx = ORDER[(i + 1) % ORDER.length]; const a = A.mat(pr), b = A.mat(nx); return `<button class="btn b-sm b-line" data-appli="${pr}" data-pj="${p.id}">${ic('back')}${esc(a ? a.court || a.titre : pr)}</button><button class="btn b-sm b-line" data-appli="${nx}" data-pj="${p.id}">${esc(b ? b.court || b.titre : nx)} ${ic('arrow')}</button>`; })()}</div><button class="btn b-line" data-act="closewin">Fermer</button>`});
}
A.on('click', '[data-appli]', el => { const p = (A.AZ.projets || []).find(x => x.id === el.dataset.pj); if(p) open(p, el.dataset.appli); });
A.APPLI = {chips, open, G, ctx};
})();
