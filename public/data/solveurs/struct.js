/* =====================================================================
   Solveurs guidés : mécanique des milieux continus, RDM (sections,
   flambement), béton armé (section, poteau, semelle, dalle)
   ===================================================================== */
(function(){
'use strict';
const S = A.SOL, {nf, ns, R, plot, SV, T, Ln, Pth, Rc, Ci, Dim, C} = S.U, need = S.need, Err = S.Err;
const tb = (h, rows) => `| ${h.join(' | ')} |\n| ${h.map(() => '---').join(' | ')} |\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
const deg = r => r*180/Math.PI, rad = d => d*Math.PI/180;
const BA = () => S.ba;

/* ---------------- MMC ---------------- */
function mohrSvg(sx, sy, txy, s1, s2, c, r){
  const W = 420, H = 300, mx = Math.max(Math.abs(c) + r, 1)*1.15, k = 170/(2*mx), X = s => 210 + (s - 0)*k, Y = t => 150 + t*k;
  let g = Ln(20, 150, W - 10, 150, {c:C.INK, m:'sa'}) + Ln(X(0), 280, X(0), 16, {c:C.INK, m:'sa'}) + T(W - 14, 142, 'σ', {a:'end', b:1}) + T(X(0) + 6, 24, 'τ', {b:1});
  g += Ci(X(c), Y(0), r*k, {c:C.BL, w:2}) + Ln(X(sx), Y(txy), X(sy), Y(-txy), {c:C.OR, w:1.6, d:'5 3'});
  g += Ci(X(sx), Y(txy), 4, {f:C.OR, c:C.OR}) + T(X(sx) + 6, Y(txy) - 6, 'X (σx ; τxy)', {s:10.5}) + Ci(X(sy), Y(-txy), 4, {f:C.OR, c:C.OR}) + T(X(sy) + 6, Y(-txy) + 14, 'Y (σy ; −τxy)', {s:10.5});
  g += Ci(X(s1), Y(0), 4, {f:C.RD, c:C.RD}) + T(X(s1) + 4, Y(0) + 16, 'σ1', {s:11, b:1, c:C.RD}) + Ci(X(s2), Y(0), 4, {f:C.RD, c:C.RD}) + T(X(s2) - 4, Y(0) + 16, 'σ2', {s:11, b:1, c:C.RD, a:'end'});
  g += Ci(X(c), Y(0), 3, {f:C.INK}) + T(X(c), Y(0) - 8, 'C', {a:'middle', s:11}) + Ln(X(c), Y(0), X(c), Y(-r), {c:C.OK, w:1.4}) + T(X(c) + 4, Y(-r) - 4, 'τmax', {s:10.5, c:C.OK});
  return SV(W, H, g, 'Cercle de Mohr');
}
S.reg({id:'mmc-mohr', mat:'mmc', niv:2, titre:'État de contrainte plan : contraintes principales et cercle de Mohr', resume:'Centre et rayon du cercle de Mohr, contraintes principales, direction principale, cisaillement maximal et contraintes sur une facette.',
 champs:[{k:'sx', l:'σx', u:'MPa'}, {k:'sy', l:'σy', u:'MPa'}, {k:'txy', l:'τxy', u:'MPa'}, {k:'th', l:'Angle d\'une facette étudiée θ', u:'°'}],
 ex:{sx:80, sy:-20, txy:30, th:30},
 rnd:() => ({sx:R.s(-60, 120, 5), sy:R.s(-80, 60, 5), txy:R.s(-50, 50, 5), th:R.p([15, 30, 45, 60])}),
 enonce:p => `En un point d'une pièce, l'état de contrainte plan est : **σx = ${nf(p.sx)} MPa**, **σy = ${nf(p.sy)} MPa**, **τxy = ${nf(p.txy)} MPa**.\n\n1. Déterminer le centre et le rayon du cercle de Mohr.\n2. En déduire les contraintes principales et leur direction.\n3. Calculer le cisaillement maximal.\n4. Calculer les contraintes sur la facette inclinée de θ = ${nf(p.th)}°.`,
 solve(p){
  need(p, [['sx', 'σx'], ['sy', 'σy'], ['txy', 'τxy'], ['th', 'θ']]);
  const c = (p.sx + p.sy)/2, d = (p.sx - p.sy)/2, r = Math.sqrt(d*d + p.txy*p.txy), s1 = c + r, s2 = c - r, tp = deg(Math.atan2(2*p.txy, p.sx - p.sy))/2;
  const t2 = rad(2*p.th), sn = c + d*Math.cos(t2) + p.txy*Math.sin(t2), tn = -d*Math.sin(t2) + p.txy*Math.cos(t2), st = [];
  st.push({t:'Centre et rayon du cercle de Mohr', md:`$$ C = (σx + σy)/2 = (${nf(p.sx)} + ${nf(p.sy)})/2 = ${nf(c, 3)} MPa\n$$ R = √( ((σx − σy)/2)² + τxy² ) = √(${nf(d, 3)}² + ${nf(p.txy)}²) = ${nf(r, 3)} MPa`, ask:[{l:'C', v:c, u:'MPa', abs:.05}, {l:'R', v:r, u:'MPa'}]});
  st.push({t:'Contraintes principales', md:`$$ σ1 = C + R = ${nf(s1, 3)} MPa     σ2 = C − R = ${nf(s2, 3)} MPa\nDirection principale (angle entre l'axe x et la direction de σ1) :\n$$ tan 2θp = 2 τxy / (σx − σy)  ⇒  θp = ${nf(tp, 2)}°\nSur les facettes principales, le cisaillement est **nul**.`, ask:[{l:'σ1', v:s1, u:'MPa'}, {l:'σ2', v:s2, u:'MPa', abs:Math.abs(s2)*.02 + .05}, {l:'θp', v:tp, u:'°', abs:.3}],
   html:`<div class="solfig">${mohrSvg(p.sx, p.sy, p.txy, s1, s2, c, r)}</div>`});
  st.push({t:'Cisaillement maximal', md:`$$ τmax = R = ${nf(r, 3)} MPa   sur des facettes à 45° des directions principales (θ = ${nf(tp + 45, 2)}°)\nC'est cette valeur qui gouverne la rupture des matériaux ductiles (critère de Tresca : τmax ≤ σe/2).`, ask:[{l:'τmax', v:r, u:'MPa'}]});
  st.push({t:`Contraintes sur la facette θ = ${nf(p.th)}°`, md:`$$ σn = C + (σx − σy)/2 cos 2θ + τxy sin 2θ = ${nf(sn, 3)} MPa\n$$ τn = −(σx − σy)/2 sin 2θ + τxy cos 2θ = ${nf(tn, 3)} MPa\nVérification : le point (σn ; τn) est bien sur le cercle : (σn − C)² + τn² = ${nf((sn - c)**2 + tn*tn, 2)} = R² = ${nf(r*r, 2)} ✓`, ask:[{l:'σn', v:sn, u:'MPa', abs:Math.abs(sn)*.02 + .1}, {l:'τn', v:tn, u:'MPa', abs:Math.abs(tn)*.02 + .1}]});
  return {steps:st, bilan:`σ1 = **${nf(s1, 2)} MPa**, σ2 = **${nf(s2, 2)} MPa** (θp = ${nf(tp, 1)}°), τmax = **${nf(r, 2)} MPa**.`};
 }});

S.reg({id:'mmc-rosette', mat:'mmc', niv:3, titre:'Rosette de jauges à 45° : déformations et contraintes principales', resume:'Des trois mesures de jauges aux déformations, puis aux contraintes par la loi de Hooke (contraintes planes).',
 champs:[{k:'e0', l:'Jauge à 0° (ε0)', u:'µm/m'}, {k:'e45', l:'Jauge à 45° (ε45)', u:'µm/m'}, {k:'e90', l:'Jauge à 90° (ε90)', u:'µm/m'}, {k:'E', l:'Module d\'Young E', u:'MPa'}, {k:'nu', l:'Coefficient de Poisson ν'}],
 ex:{e0:450, e45:120, e90:-150, E:210000, nu:.3},
 rnd:() => ({e0:R.s(-300, 600, 10), e45:R.s(-300, 500, 10), e90:R.s(-400, 400, 10), E:R.p([210000, 70000, 32000]), nu:R.p([.3, .33, .2])}),
 enonce:p => `Une rosette de jauges à 45° collée sur une pièce (E = ${nf(p.E)} MPa, ν = ${nf(p.nu)}) donne : **ε0 = ${nf(p.e0)} µm/m**, **ε45 = ${nf(p.e45)} µm/m**, **ε90 = ${nf(p.e90)} µm/m**.\n\n1. Calculer εx, εy et la distorsion γxy.\n2. Calculer les déformations principales.\n3. Calculer les contraintes σx, σy, τxy puis les contraintes principales.`,
 solve(p){
  need(p, [['e0', 'ε0'], ['e45', 'ε45'], ['e90', 'ε90'], ['E', 'E', 1], ['nu', 'ν', 0, .5]]);
  const ex = p.e0*1e-6, ey = p.e90*1e-6, g = 2*p.e45*1e-6 - ex - ey, ce = (ex + ey)/2, re = Math.sqrt(((ex - ey)/2)**2 + (g/2)**2);
  const k = p.E/(1 - p.nu*p.nu), sx = k*(ex + p.nu*ey), sy = k*(ey + p.nu*ex), G = p.E/(2*(1 + p.nu)), t = G*g, c = (sx + sy)/2, r = Math.sqrt(((sx - sy)/2)**2 + t*t), st = [];
  st.push({t:'Déformations dans le repère des jauges', md:`$$ εx = ε0 = ${nf(p.e0)} µm/m     εy = ε90 = ${nf(p.e90)} µm/m\nLa jauge à 45° mesure ε45 = (εx + εy)/2 + γxy/2, d'où :\n$$ γxy = 2 ε45 − ε0 − ε90 = 2 × ${nf(p.e45)} − ${nf(p.e0)} − (${nf(p.e90)}) = ${nf(g*1e6, 1)} µm/m`, ask:[{l:'γxy', v:g*1e6, u:'µm/m', abs:.5}]});
  st.push({t:'Déformations principales', md:`$$ ε1,2 = (εx + εy)/2 ± √( ((εx − εy)/2)² + (γxy/2)² )\n$$ ε1 = ${nf((ce + re)*1e6, 1)} µm/m     ε2 = ${nf((ce - re)*1e6, 1)} µm/m`, ask:[{l:'ε1', v:(ce + re)*1e6, u:'µm/m', abs:1}]});
  st.push({t:'Contraintes (loi de Hooke, contraintes planes)', md:`$$ σx = E/(1 − ν²) × (εx + ν εy) = ${nf(sx, 2)} MPa\n$$ σy = E/(1 − ν²) × (εy + ν εx) = ${nf(sy, 2)} MPa\n$$ G = E/(2(1 + ν)) = ${nf(G, 0)} MPa   ⇒   τxy = G γxy = ${nf(t, 2)} MPa`, ask:[{l:'σx', v:sx, u:'MPa', abs:Math.abs(sx)*.02 + .1}, {l:'τxy', v:t, u:'MPa', abs:Math.abs(t)*.02 + .1}]});
  st.push({t:'Contraintes principales', md:`$$ σ1 = ${nf(c + r, 2)} MPa     σ2 = ${nf(c - r, 2)} MPa     τmax = ${nf(r, 2)} MPa`, ask:[{l:'σ1', v:c + r, u:'MPa', abs:Math.abs(c + r)*.02 + .1}], html:`<div class="solfig">${mohrSvg(sx, sy, t, c + r, c - r, c, r)}</div>`});
  return {steps:st, bilan:`γxy = ${nf(g*1e6, 0)} µm/m ; σx = ${nf(sx, 1)}, σy = ${nf(sy, 1)}, τxy = ${nf(t, 1)} MPa ; σ1 = **${nf(c + r, 1)} MPa**, σ2 = **${nf(c - r, 1)} MPa**.`};
 }});

/* ---------------- RDM : caractéristiques géométriques ---------------- */
S.reg({id:'rdm-section', mat:'rdm', mats:['rdm', 'mmc'], niv:2, titre:'Caractéristiques d\'une section (T, I, composée) : G, I, W', resume:'Section découpée en rectangles : centre de gravité, moment quadratique (Huygens), modules de flexion, rayon de giration.',
 champs:[{k:'r', l:'Rectangles (x, y = coin inférieur gauche)', t:'tab', min:1, max:8, cols:[{k:'n', l:'Partie', t:'txt', w:90}, {k:'b', l:'b', u:'cm'}, {k:'h', l:'h', u:'cm'}, {k:'x', l:'x', u:'cm'}, {k:'y', l:'y', u:'cm'}, {k:'s', l:'Type', t:'sel', o:[[1, 'plein'], [-1, 'vide']]}], row:() => ({n:'Partie', b:10, h:10, x:0, y:0, s:1})}],
 ex:{r:[{n:'Âme', b:15, h:40, x:12.5, y:0, s:1}, {n:'Table', b:40, h:10, x:0, y:40, s:1}]},
 rnd:() => { const k = R.p(['T', 'I', 'L', 'rect']); const bw = R.s(10, 20, 1), hw = R.s(25, 50, 1), bt = R.s(30, 60, 2), ht = R.s(6, 14, 1);
   if(k === 'T') return {r:[{n:'Âme', b:bw, h:hw, x:(bt - bw)/2, y:0, s:1}, {n:'Table', b:bt, h:ht, x:0, y:hw, s:1}]};
   if(k === 'I') return {r:[{n:'Semelle inf.', b:bt, h:ht, x:0, y:0, s:1}, {n:'Âme', b:bw, h:hw, x:(bt - bw)/2, y:ht, s:1}, {n:'Semelle sup.', b:bt, h:ht, x:0, y:ht + hw, s:1}]};
   if(k === 'L') return {r:[{n:'Aile verticale', b:bw, h:hw, x:0, y:0, s:1}, {n:'Aile horizontale', b:bt - bw, h:bw, x:bw, y:0, s:1}]};
   return {r:[{n:'Rectangle', b:R.s(20, 40, 5), h:R.s(30, 70, 5), x:0, y:0, s:1}]}; },
 enonce:p => `La section d'une poutre est composée des rectangles suivants (cotes en cm, x et y = coin inférieur gauche) :\n\n${tb(['Partie', 'b', 'h', 'x', 'y', 'Type'], p.r.map(r => [r.n, nf(r.b), nf(r.h), nf(r.x), nf(r.y), +r.s < 0 ? 'vide' : 'plein']))}\n\n1. Calculer l'aire de la section.\n2. Déterminer la position du centre de gravité G.\n3. Calculer le moment quadratique I_Gx par rapport à l'axe horizontal passant par G (théorème de Huygens).\n4. Calculer les modules de flexion W = I/v et le rayon de giration.`,
 solve(p){
  const rr = p.r.map(r => ({n:r.n, b:+r.b, h:+r.h, x:+r.x, y:+r.y, s:+r.s < 0 ? -1 : 1}));
  rr.forEach((r, i) => { if(!(r.b > 0) || !(r.h > 0) || !isFinite(r.x) || !isFinite(r.y)) throw new Err(`Rectangle ${i + 1} : dimensions invalides.`); });
  rr.forEach(r => { r.A = r.s*r.b*r.h; r.yg = r.y + r.h/2; r.xg = r.x + r.b/2; r.I0 = r.s*r.b*r.h**3/12; r.I0y = r.s*r.h*r.b**3/12; });
  const Atot = rr.reduce((a, r) => a + r.A, 0); if(!(Atot > 0)) throw new Err('L\'aire totale doit être positive.');
  const yG = rr.reduce((a, r) => a + r.A*r.yg, 0)/Atot, xG = rr.reduce((a, r) => a + r.A*r.xg, 0)/Atot;
  rr.forEach(r => { r.d = r.yg - yG; r.I = r.I0 + r.A*r.d*r.d; r.dx = r.xg - xG; r.Iy = r.I0y + r.A*r.dx*r.dx; });
  const I = rr.reduce((a, r) => a + r.I, 0), Iy = rr.reduce((a, r) => a + r.Iy, 0), ymax = Math.max(...rr.map(r => r.y + r.h)), ymin = Math.min(...rr.map(r => r.y));
  const vs = ymax - yG, vi = yG - ymin, Ws = I/vs, Wi = I/vi, ig = Math.sqrt(I/Atot), st = [];
  st.push({t:'Aire de la section', md:tb(['Partie', 'b × h', 'Aire (cm²)'], rr.map(r => [r.n + (r.s < 0 ? ' (vide)' : ''), `${nf(r.b)} × ${nf(r.h)}`, nf(r.A, 2)])) + `\n\n$$ A = ${nf(Atot, 2)} cm²`, ask:[{l:'A', v:Atot, u:'cm²'}]});
  st.push({t:'Centre de gravité', md:`$$ yG = Σ(Ai × yi) / Σ Ai\n\n${tb(['Partie', 'Ai', 'yi (centre)', 'Ai × yi'], rr.map(r => [r.n, nf(r.A, 2), nf(r.yg, 2), nf(r.A*r.yg, 2)]))}\n\n$$ yG = ${nf(rr.reduce((a, r) => a + r.A*r.yg, 0), 2)} / ${nf(Atot, 2)} = ${nf(yG, 3)} cm   (depuis la base)\n$$ xG = ${nf(xG, 3)} cm`, ask:[{l:'yG', v:yG, u:'cm'}], hint:'Moment statique de chaque partie = aire × ordonnée de son centre ; divisez la somme par l\'aire totale.'});
  st.push({t:'Moment quadratique (théorème de Huygens)', md:`Pour chaque rectangle : I propre = b h³/12, puis on le transporte à l'axe passant par G :\n$$ I/G = I propre + A × d²   (d = distance entre le centre du rectangle et G)\n\n${tb(['Partie', 'b h³/12', 'd (cm)', 'A d²', 'I/G (cm⁴)'], rr.map(r => [r.n, nf(r.I0, 1), nf(r.d, 3), nf(r.A*r.d*r.d, 1), nf(r.I, 1)]))}\n\n$$ I_Gx = ${nf(I, 1)} cm⁴     (et I_Gy = ${nf(Iy, 1)} cm⁴)`, ask:[{l:'I_Gx', v:I, u:'cm⁴'}], hint:'N\'oubliez pas le terme A × d² : c\'est lui qui donne l\'essentiel de l\'inertie des tables et semelles.'});
  st.push({t:'Modules de flexion et rayon de giration', md:`$$ v sup = ${nf(vs, 3)} cm     v inf = ${nf(vi, 3)} cm\n$$ W sup = I/v sup = ${nf(Ws, 1)} cm³     W inf = I/v inf = ${nf(Wi, 1)} cm³\n$$ i = √(I/A) = ${nf(ig, 3)} cm\nLa contrainte de flexion maximale vaut σ = M/W : la fibre la plus éloignée de G (plus petit W) est la plus sollicitée.`, ask:[{l:'W minimal', v:Math.min(Ws, Wi), u:'cm³'}],
   html:(() => { const xmin = Math.min(...rr.map(r => r.x)), xmax = Math.max(...rr.map(r => r.x + r.b)), k = Math.min(220/(ymax - ymin), 300/(xmax - xmin)), ox = 60 - xmin*k, oy = 250 + ymin*k;
     let g = ''; rr.filter(r => r.s > 0).forEach(r => { g += Rc(ox + r.x*k, oy - (r.y + r.h)*k, r.b*k, r.h*k, {f:C.CO, c:C.INK, w:1.6}); }); rr.filter(r => r.s < 0).forEach(r => { g += Rc(ox + r.x*k, oy - (r.y + r.h)*k, r.b*k, r.h*k, {f:'#FBFAF7', c:C.INK, w:1.2}); });
     g += Ln(ox + xmin*k - 20, oy - yG*k, ox + xmax*k + 20, oy - yG*k, {c:C.RD, w:1.2, d:'6 4'}) + Ci(ox + xG*k, oy - yG*k, 4, {f:C.RD, c:C.RD}) + T(ox + xmax*k + 24, oy - yG*k + 4, 'G (yG = ' + nf(yG, 2) + ' cm)', {s:11, c:C.RD, b:1});
     return `<div class="solfig">${SV(480, 280, g, 'Section')}</div>`; })()});
  return {steps:st, bilan:`A = **${nf(Atot, 1)} cm²**, yG = **${nf(yG, 2)} cm**, I = **${nf(I, 0)} cm⁴**, W min = **${nf(Math.min(Ws, Wi), 0)} cm³**.`};
 }});

const MATF = {acier:['Acier S235', 210000, 235], bois:['Bois résineux C24', 11000, 21], alu:['Aluminium', 70000, 160], beton:['Béton C25', 32000, 25]};
S.reg({id:'rdm-flambement', mat:'rdm', niv:2, titre:'Flambement d\'un poteau (Euler)', resume:'Longueur de flambement, élancement, charge critique d\'Euler et vérification.',
 champs:[{k:'mat', l:'Matériau', t:'sel', o:Object.entries(MATF).map(([k, v]) => [k, v[0]])}, {k:'sec', l:'Section', t:'sel', o:[['rect', 'Rectangle b × h'], ['circ', 'Cercle plein Ø d'], ['tube', 'Tube rond D × e']]},
  {k:'b', l:'b (ou d, ou D)', u:'cm'}, {k:'h', l:'h (ou épaisseur e)', u:'cm', if:p => p.sec !== 'circ'}, {k:'l0', l:'Longueur du poteau', u:'m'},
  {k:'k', l:'Liaisons aux extrémités', t:'sel', w:1, o:[[1, 'Articulé – articulé (lf = l0)'], [.7, 'Encastré – articulé (lf = 0,7 l0)'], [.5, 'Encastré – encastré (lf = 0,5 l0)'], [2, 'Encastré – libre (lf = 2 l0)']]},
  {k:'N', l:'Effort de compression', u:'kN'}, {k:'s', l:'Coefficient de sécurité sur Ncr'}],
 ex:{mat:'acier', sec:'tube', b:11.43, h:.4, l0:3.5, k:1, N:150, s:3},
 rnd:() => ({mat:R.p(['acier', 'bois', 'alu']), sec:R.p(['rect', 'circ', 'tube']), b:R.s(6, 20, 1), h:R.s(.3, 15, .1), l0:R.s(2, 6, .5), k:R.p([1, .7, .5, 2]), N:R.s(20, 300, 10), s:3}),
 enonce:p => { const m = MATF[p.mat]; return `Un poteau en ${m[0].toLowerCase()} (E = ${nf(m[1])} MPa, limite σe = ${nf(m[2])} MPa) de **${nf(p.l0)} m**, de section ${p.sec === 'rect' ? `rectangulaire **${nf(p.b)} × ${nf(p.h)} cm**` : p.sec === 'circ' ? `circulaire pleine **Ø ${nf(p.b)} cm**` : `tube rond **Ø ${nf(p.b)} cm, épaisseur ${nf(p.h)} cm**`}, est ${({1:'articulé à ses deux extrémités', .7:'encastré en pied et articulé en tête', .5:'encastré à ses deux extrémités', 2:'encastré en pied et libre en tête'})[p.k]}. Il supporte **N = ${nf(p.N)} kN**.\n\n1. Calculer la longueur de flambement, le moment quadratique minimal et le rayon de giration.\n2. Calculer l'élancement et le comparer à l'élancement critique.\n3. Calculer la charge critique d'Euler et vérifier le poteau (sécurité ${nf(p.s)}).`; },
 solve(p){
  need(p, [['b', 'Dimension', .1], ['l0', 'Longueur', .1], ['N', 'Effort', 0], ['s', 'Sécurité', 1]]); const [mn, E, fy] = MATF[p.mat];
  let Im, Ar, txt;
  if(p.sec === 'rect'){ need(p, [['h', 'h', .1]]); const a = Math.min(p.b, p.h), bb = Math.max(p.b, p.h); Im = bb*a**3/12; Ar = a*bb; txt = `$$ I min = b a³/12 (a = plus petit côté) = ${nf(bb)} × ${nf(a)}³/12 = ${nf(Im, 2)} cm⁴`; }
  else if(p.sec === 'circ'){ Im = Math.PI*p.b**4/64; Ar = Math.PI*p.b*p.b/4; txt = `$$ I = π d⁴/64 = ${nf(Im, 2)} cm⁴`; }
  else { need(p, [['h', 'Épaisseur', .05]]); if(2*p.h >= p.b) throw new Err('L\'épaisseur est trop grande pour ce diamètre.'); const d = p.b - 2*p.h; Im = Math.PI*(p.b**4 - d**4)/64; Ar = Math.PI*(p.b*p.b - d*d)/4; txt = `$$ I = π (D⁴ − d⁴)/64 avec d = ${nf(d, 2)} cm : I = ${nf(Im, 2)} cm⁴`; }
  const lf = p.k*p.l0, i = Math.sqrt(Im/Ar), lam = lf*100/i, lc = Math.PI*Math.sqrt(E/fy), Ncr = Math.PI**2*E*Im*1e4/(lf*1000)**2/1000, scr = Ncr*1000/(Ar*100), sig = p.N*1000/(Ar*100), Nadm = Ncr/p.s, st = [];
  st.push({t:'Longueur de flambement et section', md:`$$ lf = k × l0 = ${nf(p.k)} × ${nf(p.l0)} = ${nf(lf, 3)} m\n${txt}\n$$ A = ${nf(Ar, 2)} cm²\n$$ i = √(I/A) = ${nf(i, 3)} cm`, ask:[{l:'lf', v:lf, u:'m'}, {l:'i', v:i, u:'cm'}], hint:'Le flambement se produit autour de l\'axe de plus faible inertie.'});
  st.push({t:'Élancement', md:`$$ λ = lf / i = ${nf(lf*100, 1)} / ${nf(i, 3)} = ${nf(lam, 1)}\nÉlancement critique du matériau : $$ λc = π √(E/σe) = π √(${nf(E)}/${nf(fy)}) = ${nf(lc, 1)}\n${lam > lc ? 'λ > λc : le poteau est **élancé**, il flambe avant que le matériau n\'atteigne sa limite : la formule d\'Euler s\'applique.' : 'λ < λc : poteau **trapu** ; la ruine se fait plutôt par écrasement du matériau (Euler surestime la résistance).'}`, ask:[{l:'λ', v:lam}]});
  st.push({t:'Charge critique d\'Euler', md:`$$ Ncr = π² E I / lf² = π² × ${nf(E)} × ${nf(Im*1e4, 0)} / ${nf(lf*1000, 0)}² = ${nf(Ncr, 1)} kN\n$$ σcr = Ncr / A = ${nf(scr, 1)} MPa`, ask:[{l:'Ncr', v:Ncr, u:'kN'}], hint:'Mettez tout en N et mm : E en MPa, I en mm⁴ (cm⁴ × 10⁴), lf en mm ; le résultat est en N.'});
  const ok = p.N <= Nadm && sig <= fy;
  st.push({t:'Vérification', md:`$$ N admissible = Ncr / ${nf(p.s)} = ${nf(Nadm, 1)} kN\n$$ σ = N / A = ${nf(sig, 2)} MPa  (limite ${nf(fy)} MPa)\n${ok ? `N = ${nf(p.N)} kN ≤ ${nf(Nadm, 1)} kN et σ ≤ σe : **le poteau est vérifié**.` : `**Le poteau n'est pas vérifié** : augmenter l'inertie (section plus grande, tube plus large) ou réduire la longueur de flambement (contreventement, encastrement).`}`, ask:[{l:'N admissible', v:Nadm, u:'kN'}]});
  return {steps:st, bilan:`λ = **${nf(lam, 0)}**, Ncr = **${nf(Ncr, 0)} kN**, N admissible ${nf(Nadm, 0)} kN → ${ok ? 'vérifié' : 'non vérifié'}.`};
 }});

/* ---------------- BÉTON ARMÉ ---------------- */
const fissO = [['FPP', 'Peu préjudiciable'], ['FP', 'Préjudiciable']];
S.reg({id:'ba-section', mat:'ba', niv:2, titre:'Section rectangulaire en flexion simple (aciers et ELS)', resume:'Moment réduit μ, aciers tendus (et comprimés si besoin), condition de non-fragilité, choix des barres, vérification ELS.',
 champs:[{k:'b', l:'Largeur b', u:'cm'}, {k:'h', l:'Hauteur h', u:'cm'}, {k:'c', l:'Enrobage', u:'cm'}, {k:'Mu', l:'Moment ultime Mu', u:'kN·m'}, {k:'Ms', l:'Moment de service Mser', u:'kN·m'}, {k:'fc28', l:'fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:[[500, 'FeE500'], [400, 'FeE400']]}, {k:'fiss', l:'Fissuration', t:'sel', o:fissO}],
 ex:{b:25, h:50, c:3, Mu:180, Ms:130, fc28:25, fe:500, fiss:'FPP'},
 rnd:() => { const b = R.p([20, 25, 30]), h = R.p([40, 45, 50, 60]), Mu = R.s(40, 260, 5); return {b, h, c:3, Mu, Ms:+(Mu/R.s(1.35, 1.42, .01)).toFixed(1), fc28:R.p([20, 25, 30]), fe:R.p([400, 500]), fiss:R.p(['FPP', 'FPP', 'FP'])}; },
 enonce:p => `Une poutre rectangulaire **${nf(p.b)} × ${nf(p.h)} cm** (enrobage ${nf(p.c)} cm) est soumise à **Mu = ${nf(p.Mu)} kN·m** (ELU) et **Mser = ${nf(p.Ms)} kN·m** (ELS). Béton fc28 = ${nf(p.fc28)} MPa, aciers FeE${nf(p.fe)}, fissuration ${p.fiss === 'FP' ? 'préjudiciable' : 'peu préjudiciable'}.\n\n1. Calculer la section d'aciers à l'ELU.\n2. Vérifier la condition de non-fragilité et choisir les barres.\n3. Vérifier les contraintes à l'ELS.`,
 solve(p){
  need(p, [['b', 'b', 10], ['h', 'h', 15], ['c', 'Enrobage', 1, 10], ['Mu', 'Mu', 0], ['Ms', 'Mser', 0], ['fc28', 'fc28', 16, 60]]); const ba = BA(), M = ba.mat(p), b = p.b/100, d = (p.h - p.c - 1.4)/100;
  const f = ba.flex(p.Mu, b, d, M), Amin = .23*b*d*M.ft/M.fe*1e4, Areq = Math.max(f.As, Amin), bars = ba.pickBars(Areq, p.b, p.c, 6, {dmin:10}), els = ba.elsCheck(p.Ms, b, d, bars.A, M, p.fiss), st = [];
  st.push({t:'Matériaux et hauteur utile', md:`$$ f_bu = 0,85 × ${nf(M.fc)}/1,5 = ${nf(M.fbu, 2)} MPa     f_su = ${nf(M.fe)}/1,15 = ${nf(M.fsu, 1)} MPa     ft28 = ${nf(M.ft, 2)} MPa\n$$ d = h − c − Ø cadre − Ø/2 ≈ ${nf(p.h)} − ${nf(p.c)} − 1,4 = ${nf(d*100, 1)} cm\n$$ μl = ${nf(M.mul, 4)}  (FeE${nf(M.fe)})`, ask:[{l:'d', v:d*100, u:'cm', tol:.03}]});
  st.push({t:'Moment réduit', md:`$$ μ = Mu / (b d² f_bu) = ${nf(p.Mu/1000, 4)} / (${nf(b, 2)} × ${nf(d, 3)}² × ${nf(M.fbu, 2)}) = ${nf(f.mu, 4)}\n${f.ok ? `μ ≤ μl = ${nf(M.mul, 4)} : **pas d'aciers comprimés** (pivot A ou B).` : `μ > μl : la section a besoin d'**aciers comprimés** (ou d'être agrandie).`}`, ask:[{l:'μ', v:f.mu, d:4}]});
  st.push({t:'Section d\'aciers tendus', md:f.ok ? `$$ α = 1,25 (1 − √(1 − 2μ)) = ${nf(f.al, 4)}\n$$ z = d (1 − 0,4 α) = ${nf(f.z, 4)} m\n$$ As = Mu / (z f_su) = ${nf(p.Mu/1000, 4)} / (${nf(f.z, 4)} × ${nf(M.fsu, 1)}) = ${nf(f.As, 2)} cm²`
     : `$$ Ml = μl b d² f_bu = ${nf(f.Ml, 2)} kN·m\n$$ A' = (Mu − Ml) / ((d − d') f_su) = ${nf(f.Asc, 2)} cm²  (aciers comprimés)\n$$ As = Ml/(z_l f_su) + A' = ${nf(f.As, 2)} cm²`, ask:[{l:'As', v:f.As, u:'cm²'}], hint:'α puis z, puis As = Mu/(z × f_su) ; résultat en m², × 10 000 pour des cm².'});
  st.push({t:'Non-fragilité et choix des barres', md:`$$ Amin = 0,23 b d ft28/fe = ${nf(Amin, 2)} cm²\n$$ A = max(As ; Amin) = ${nf(Areq, 2)} cm²\nOn choisit **${ba.barTxt(bars)}** = ${nf(bars.A, 2)} cm² (${bars.layers === 1 ? 'un lit' : 'deux lits'}).`, ask:[{l:'Amin', v:Amin, u:'cm²'}]});
  st.push({t:'Vérification à l\'ELS', md:`$$ b y₁²/2 − 15 A (d − y₁) = 0  ⇒  y₁ = ${nf(els.y*100, 2)} cm\n$$ I = b y₁³/3 + 15 A (d − y₁)² = ${ns(els.I*1e8, 5)} cm⁴\n$$ σbc = Mser y₁/I = ${nf(els.sb, 2)} MPa ${els.okb ? '≤' : '>'} ${nf(M.sbc, 1)} MPa ${els.okb ? '✓' : '✗'}\n${p.fiss === 'FP' ? `$$ σs = 15 Mser (d − y₁)/I = ${nf(els.ss, 1)} MPa ${els.oks ? '≤' : '>'} ${nf(M.ssFP, 1)} MPa ${els.oks ? '✓' : '✗ : augmenter A'}` : 'Fissuration peu préjudiciable : pas de vérification de σs.'}`, ask:[{l:'σbc', v:els.sb, u:'MPa', tol:.05}]});
  return {steps:st, bilan:`μ = ${nf(f.mu, 3)} → As = **${nf(f.As, 2)} cm²** → **${ba.barTxt(bars)}** (${nf(bars.A, 2)} cm²) ; σbc = ${nf(els.sb, 1)} MPa.`};
 }});

S.reg({id:'ba-poteau', mat:'ba', niv:2, titre:'Poteau en compression centrée (BAEL)', resume:'Effort ultime, élancement, coefficient α, section réduite, aciers longitudinaux et transversaux.',
 ia:'{"a":20,"b":25,"l0":3,"kf":0.7,"G":350,"Q":90,"fc28":25,"fe":500} — a et b en cm, l0 hauteur libre en m, kf : 0,7 (poteau d\'étage encastré) ou 1, G et Q en kN',
 champs:[{k:'a', l:'Petit côté a', u:'cm'}, {k:'b', l:'Grand côté b', u:'cm'}, {k:'l0', l:'Hauteur libre l0', u:'m'}, {k:'kf', l:'Longueur de flambement', t:'sel', w:1, o:[[.7, 'lf = 0,7 l0 (poteau d\'étage, plancher encastré)'], [1, 'lf = l0 (extrémité articulée)']]},
  {k:'G', l:'Charge permanente G', u:'kN'}, {k:'Q', l:'Charge d\'exploitation Q', u:'kN'}, {k:'fc28', l:'fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:[[500, 'FeE500'], [400, 'FeE400']]}],
 ex:{a:20, b:25, l0:3, kf:.7, G:420, Q:110, fc28:25, fe:500},
 rnd:() => ({a:R.p([20, 25, 30]), b:R.p([25, 30, 35, 40]), l0:R.s(2.6, 4, .1), kf:R.p([.7, .7, 1]), G:R.s(150, 900, 10), Q:R.s(40, 250, 10), fc28:R.p([20, 25, 30]), fe:R.p([400, 500])}),
 enonce:p => `Un poteau de **${nf(p.a)} × ${nf(p.b)} cm** et de hauteur libre **${nf(p.l0)} m** supporte, en pied, G = **${nf(p.G)} kN** et Q = **${nf(p.Q)} kN** (descente de charges). Béton fc28 = ${nf(p.fc28)} MPa, aciers FeE${nf(p.fe)}. ${+p.kf === .7 ? 'Le poteau est encastré dans les planchers (lf = 0,7 l0).' : 'On prend lf = l0.'}\n\n1. Calculer l'effort normal ultime Nu.\n2. Calculer l'élancement et le coefficient α.\n3. Calculer la section d'aciers longitudinaux et choisir les barres.\n4. Dimensionner les armatures transversales.`,
 solve(p){
  need(p, [['a', 'a', 15], ['b', 'b', 15], ['l0', 'l0', .5], ['G', 'G', 0], ['Q', 'Q', 0], ['fc28', 'fc28', 16, 60]]); const a = Math.min(p.a, p.b), b = Math.max(p.a, p.b), fe = +p.fe, gb = 1.5, gs = 1.15;
  const Nu = 1.35*p.G + 1.5*p.Q, lf = +p.kf*p.l0, lam = lf*100*Math.sqrt(12)/a;
  if(lam > 70) throw new Err(`Élancement λ = ${nf(lam, 1)} > 70 : la section est trop petite pour cette hauteur (calcul en flexion composée nécessaire). Augmentez a.`);
  const al = lam <= 50 ? .85/(1 + .2*(lam/35)**2) : .6*(50/lam)**2, Br = (a - 2)*(b - 2)/1e4, Bm = a*b/1e4;
  const Ath = (Nu/1000/al - Br*p.fc28/(.9*gb))*gs/fe*1e4, Amin = Math.max(4*2*(a + b)/100, .2/100*a*b), Amax = 5/100*a*b, Areq = Math.max(Ath, Amin);
  if(Areq > Amax) throw new Err(`Section d'acier nécessaire (${nf(Areq, 1)} cm²) supérieure au maximum de 5 % (${nf(Amax, 1)} cm²) : agrandissez le poteau.`);
  let best = null; [12, 14, 16, 20, 25].forEach(d => { for(let n = 4; n <= 12; n += 2){ const A_ = n*Math.PI*d*d/400; if(A_ >= Areq){ if(!best || A_ < best.A - 1e-9) best = {n, d, A:A_}; break; } } });
  const dt = best.d <= 16 ? 6 : 8, stt = Math.min(15*best.d/10, 40, a + 10), st = [];
  st.push({t:'Effort normal ultime', md:`$$ Nu = 1,35 G + 1,5 Q = 1,35 × ${nf(p.G)} + 1,5 × ${nf(p.Q)} = ${nf(Nu, 2)} kN`, ask:[{l:'Nu', v:Nu, u:'kN'}]});
  st.push({t:'Élancement et coefficient α', md:`$$ lf = ${nf(+p.kf)} × ${nf(p.l0)} = ${nf(lf, 3)} m\n$$ λ = lf √12 / a = ${nf(lf*100, 1)} × 3,464 / ${nf(a)} = ${nf(lam, 2)}\n${lam <= 50 ? `λ ≤ 50 : $$ α = 0,85 / (1 + 0,2 (λ/35)²) = ${nf(al, 4)}` : `50 < λ ≤ 70 : $$ α = 0,6 (50/λ)² = ${nf(al, 4)}`}\n\n> [!attention]\n> Si plus de la moitié des charges est appliquée avant 90 jours, on divise α par 1,10.`, ask:[{l:'λ', v:lam}, {l:'α', v:al, d:4}], hint:'Pour une section rectangulaire, i = a/√12 avec a le plus petit côté.'});
  st.push({t:'Aciers longitudinaux', md:`Section réduite (on retire 1 cm sur le pourtour) : $$ Br = (a − 2)(b − 2) = ${nf((a - 2)*(b - 2))} cm² = ${nf(Br, 4)} m²\n$$ Ath = [Nu/α − Br fc28/(0,9 γb)] × γs/fe = [${nf(Nu/1000, 4)}/${nf(al, 4)} − ${nf(Br, 4)} × ${nf(p.fc28)}/1,35] × 1,15/${nf(fe)} = ${nf(Ath, 2)} cm²\n${Ath <= 0 ? 'Ath ≤ 0 : le béton seul suffit, on met le minimum réglementaire.\n' : ''}$$ Amin = max(4 cm²/m de périmètre ; 0,2 % B) = max(${nf(4*2*(a + b)/100, 2)} ; ${nf(.002*a*b, 2)}) = ${nf(Amin, 2)} cm²\n$$ Amax = 5 % B = ${nf(Amax, 1)} cm²\n$$ A = ${nf(Areq, 2)} cm²  →  **${best.n} HA${best.d}** = ${nf(best.A, 2)} cm²`, ask:[{l:'Ath', v:Ath, u:'cm²', abs:Math.abs(Ath)*.03 + .05}, {l:'A retenue', v:Areq, u:'cm²'}]});
  st.push({t:'Armatures transversales', md:`$$ Øt ≥ Øl/3 = ${nf(best.d/3, 1)} mm  →  cadres **HA${dt}**\n$$ st ≤ min(15 Øl ; 40 cm ; a + 10 cm) = min(${nf(15*best.d/10)} ; 40 ; ${nf(a + 10)}) = ${nf(stt)} cm\nOn retient un espacement de **${Math.floor(stt)} cm** en zone courante, resserré (≈ 10 cm) aux nœuds poteau-poutre et dans les zones de recouvrement (recouvrement ≈ ${nf(.6*44*best.d/10, 0)} cm).`, ask:[{l:'Espacement maximal st', v:stt, u:'cm', abs:.5}],
   html:(() => { const k = 160/b, w = b*k, hh = a*k, x0 = 70, y0 = 30, c = 3*k, r = Math.max(3, best.d/10*k/2); let g = Rc(x0, y0, w, hh, {f:C.CO, w:2}) + Rc(x0 + c, y0 + c, w - 2*c, hh - 2*c, {c:C.BL, w:2, rx:4});
     const per = best.n/2; for(let i = 0; i < per; i++){ const xx = x0 + c + r + 2 + i*(w - 2*c - 2*r - 4)/Math.max(1, per - 1); g += Ci(xx, y0 + c + r + 2, r, {f:C.OR}) + Ci(xx, y0 + hh - c - r - 2, r, {f:C.OR}); }
     g += Dim(x0, y0 + hh + 16, x0 + w, y0 + hh + 16, nf(b) + ' cm') + Dim(x0 - 16, y0, x0 - 16, y0 + hh, nf(a) + ' cm') + T(x0 + w + 14, y0 + 20, `${best.n} HA${best.d}`, {b:1, c:'#C95F18'}) + T(x0 + w + 14, y0 + 38, `cadres HA${dt} / ${Math.floor(stt)} cm`, {c:C.BL, s:11});
     return `<div class="solfig">${SV(380, hh + 70, g, 'Coupe du poteau')}</div>`; })()});
  return {steps:st, bilan:`Nu = **${nf(Nu, 1)} kN**, λ = ${nf(lam, 1)}, α = ${nf(al, 3)} → A = ${nf(Areq, 2)} cm² : **${best.n} HA${best.d}**, cadres HA${dt} tous les ${Math.floor(stt)} cm.`};
 }});

S.reg({id:'ba-semelle', mat:'ba', mats:['ba', 'geo'], niv:2, titre:'Semelle isolée sous poteau (méthode des bielles)', resume:'Coffrage A × B à partir de la contrainte du sol, hauteur, vérification avec le poids propre, aciers dans les deux sens.',
 ia:'{"a":20,"b":25,"G":420,"Q":110,"sig":0.2,"fc28":25,"fe":500} — a, b dimensions du poteau en cm ; G, Q en kN ; sig = contrainte admissible du sol en MPa (0,2 MPa = 2 bars)',
 champs:[{k:'a', l:'Poteau : côté a', u:'cm'}, {k:'b', l:'Poteau : côté b', u:'cm'}, {k:'G', l:'Charge permanente G', u:'kN'}, {k:'Q', l:'Charge d\'exploitation Q', u:'kN'}, {k:'sig', l:'Contrainte admissible du sol σsol', u:'MPa'}, {k:'fc28', l:'fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:[[500, 'FeE500'], [400, 'FeE400']]}],
 ex:{a:20, b:25, G:420, Q:110, sig:.2, fc28:25, fe:500},
 rnd:() => ({a:R.p([20, 25, 30]), b:R.p([20, 25, 30, 40]), G:R.s(120, 800, 10), Q:R.s(30, 200, 10), sig:R.p([.1, .15, .2, .25, .3]), fc28:R.p([20, 25]), fe:R.p([400, 500])}),
 enonce:p => `Un poteau de **${nf(p.a)} × ${nf(p.b)} cm** transmet à sa fondation G = **${nf(p.G)} kN** et Q = **${nf(p.Q)} kN**. L'étude de sol donne une contrainte admissible **σsol = ${nf(p.sig)} MPa** (${nf(p.sig*10)} bars). Béton fc28 = ${nf(p.fc28)} MPa, aciers FeE${nf(p.fe)}, enrobage 5 cm.\n\n1. Dimensionner la semelle (A × B, homothétique au poteau).\n2. Déterminer sa hauteur et vérifier la contrainte sur le sol avec son poids propre.\n3. Calculer les aciers dans les deux sens (méthode des bielles) et proposer un ferraillage.`,
 solve(p){
  need(p, [['a', 'a', 15], ['b', 'b', 15], ['G', 'G', 1], ['Q', 'Q', 0], ['sig', 'σsol', .03, 1], ['fc28', 'fc28', 16, 60]]);
  const fe = +p.fe, fsu = fe/1.15, Ns = p.G + p.Q, Nu = 1.35*p.G + 1.5*p.Q, a = p.a/100, b = p.b/100, Sreq = Ns*1.05/(p.sig*1000);
  const up = v => Math.ceil(v*20 - 1e-9)/20; let A_ = Math.max(.6, up(Math.sqrt(Sreq*a/b))), B_ = Math.max(.6, up(Math.sqrt(Sreq*b/a)));
  let d = Math.max((A_ - a)/4, (B_ - b)/4), h = Math.max(.2, up(d + .05)); d = h - .05;
  let pp = 25*A_*B_*h, sg = (Ns + pp)/(A_*B_)/1000;
  while(sg > p.sig){ A_ += .05; B_ = up(A_*b/a); d = Math.max((A_ - a)/4, (B_ - b)/4); h = Math.max(.2, up(d + .05)); d = h - .05; pp = 25*A_*B_*h; sg = (Ns + pp)/(A_*B_)/1000; }
  const Ax = Nu/1000*(A_ - a)/(8*d*fsu)*1e4, Ay = Nu/1000*(B_ - b)/(8*d*fsu)*1e4;
  const pick = (As, len) => { for(const dd of [10, 12, 14, 16, 20]){ const s = Math.PI*dd*dd/400, n = Math.max(Math.ceil(As/s), Math.ceil((len - .1)/.25) + 1); const esp = (len - .1)/(n - 1); if(esp >= .1) return {n, d:dd, A:n*s, esp}; } return {n:Math.ceil(As/3.14), d:20, A:Math.ceil(As/3.14)*3.14, esp:.1}; };
  const bx = pick(Ax, B_), by = pick(Ay, A_), ls = 44*bx.d/1000, st = [];
  st.push({t:'Charges', md:`$$ Nser = G + Q = ${nf(Ns, 1)} kN\n$$ Nu = 1,35 G + 1,5 Q = ${nf(Nu, 1)} kN`, ask:[{l:'Nser', v:Ns, u:'kN'}, {l:'Nu', v:Nu, u:'kN'}]});
  st.push({t:'Surface de la semelle', md:`On majore de 5 % pour le poids propre de la semelle et des terres :\n$$ S ≥ 1,05 Nser / σsol = 1,05 × ${nf(Ns/1000, 4)} / ${nf(p.sig)} = ${nf(Sreq, 3)} m²\nSemelle **homothétique** au poteau (A/B = a/b) :\n$$ A = √(S a/b) = ${nf(Math.sqrt(Sreq*a/b), 3)} m     B = √(S b/a) = ${nf(Math.sqrt(Sreq*b/a), 3)} m\nArrondi aux 5 cm supérieurs : **A × B = ${nf(A_, 2)} × ${nf(B_, 2)} m**.`, ask:[{l:'Surface minimale', v:Sreq, u:'m²'}], hint:'Convertissez Nser en MN (÷ 1000) pour diviser par σsol en MPa : on obtient des m².'});
  st.push({t:'Hauteur et vérification du sol', md:`Condition de rigidité (méthode des bielles) : $$ d ≥ max((A − a)/4 ; (B − b)/4) = ${nf(Math.max((A_ - a)/4, (B_ - b)/4), 3)} m\n$$ h = d + 5 cm  →  h = ${nf(h, 2)} m  (d = ${nf(d, 2)} m)\nPoids propre : $$ pp = 25 × ${nf(A_, 2)} × ${nf(B_, 2)} × ${nf(h, 2)} = ${nf(pp, 2)} kN\n$$ σ = (Nser + pp)/(A B) = ${nf(sg, 4)} MPa ≤ σsol = ${nf(p.sig)} MPa ✓`, ask:[{l:'h', v:h, u:'m', abs:.01}, {l:'σ sur le sol', v:sg, u:'MPa', tol:.03}]});
  st.push({t:'Aciers (méthode des bielles)', md:`Les bielles de béton transmettent la charge du poteau au sol ; les aciers en nappe inférieure reprennent la traction :\n$$ Ax = Nu (A − a) / (8 d f_su) = ${nf(Nu/1000, 4)} × ${nf(A_ - a, 3)} / (8 × ${nf(d, 2)} × ${nf(fsu, 1)}) = ${nf(Ax, 2)} cm²   (barres parallèles à A)\n$$ Ay = Nu (B − b) / (8 d f_su) = ${nf(Ay, 2)} cm²   (barres parallèles à B)\n\nChoix (espacement ≤ 25 cm) :\n- parallèles à A : **${bx.n} HA${bx.d}** (${nf(bx.A, 2)} cm²), espacées de ${nf(bx.esp*100, 0)} cm\n- parallèles à B : **${by.n} HA${by.d}** (${nf(by.A, 2)} cm²), espacées de ${nf(by.esp*100, 0)} cm\n\nAncrage : ls ≈ 44 Ø = ${nf(ls, 2)} m ${ls > A_/4 ? '> A/4 : **crochets** aux extrémités.' : ls > A_/8 ? '≤ A/4 : barres droites filantes jusqu\'aux extrémités, sans crochets.' : '≤ A/8 : barres droites, arrêt possible.'}`, ask:[{l:'Ax', v:Ax, u:'cm²'}, {l:'Ay', v:Ay, u:'cm²'}],
   html:(() => { const k = 200/Math.max(A_, B_), w = A_*k, hh = B_*k, x0 = 40, y0 = 30; let g = Rc(x0, y0, w, hh, {f:C.CO, w:2}) + Rc(x0 + (w - a*k)/2, y0 + (hh - b*k)/2, a*k, b*k, {f:'url(#shh)', w:1.6});
     for(let i = 0; i < Math.min(bx.n, 14); i++){ const y = y0 + 6 + i*(hh - 12)/Math.max(1, Math.min(bx.n, 14) - 1); g += Ln(x0 + 5, y, x0 + w - 5, y, {c:C.OR, w:1.4}); }
     for(let i = 0; i < Math.min(by.n, 14); i++){ const x = x0 + 6 + i*(w - 12)/Math.max(1, Math.min(by.n, 14) - 1); g += Ln(x, y0 + 5, x, y0 + hh - 5, {c:C.BL, w:1.2}); }
     g += Dim(x0, y0 + hh + 16, x0 + w, y0 + hh + 16, 'A = ' + nf(A_, 2) + ' m') + Dim(x0 + w + 16, y0, x0 + w + 16, y0 + hh, 'B = ' + nf(B_, 2) + ' m');
     const x1 = 330, yb = 200, kk = 200/A_; g += Rc(x1, yb - h*kk, A_*kk, h*kk, {f:C.CO, w:2}) + Rc(x1 + (A_ - a)/2*kk, yb - h*kk - 60, a*kk, 60, {f:C.CO, w:1.6}) + Ln(x1 + 6, yb - 8, x1 + A_*kk - 6, yb - 8, {c:C.OR, w:3}) + Rc(x1 - 6, yb, A_*kk + 12, 8, {f:'url(#shh)', c:'none'}) + T(x1 + A_*kk/2, yb + 24, 'Coupe : h = ' + nf(h, 2) + ' m', {a:'middle', s:11});
     return `<div class="solfig">${SV(560, Math.max(hh + 70, 240), g, 'Semelle : plan et coupe')}</div>`; })()});
  return {steps:st, bilan:`Semelle **${nf(A_, 2)} × ${nf(B_, 2)} × ${nf(h, 2)} m** (σ = ${nf(sg, 3)} MPa) ; aciers **${bx.n} HA${bx.d}** // A et **${by.n} HA${by.d}** // B.`};
 }});

S.reg({id:'ba-dalle', mat:'ba', niv:3, titre:'Dalle pleine sur quatre appuis (BAEL)', resume:'Rapport α, moments μx et μy, moments en travée et sur appuis, aciers par mètre, minimums et espacements.',
 champs:[{k:'lx', l:'Petite portée lx', u:'m'}, {k:'ly', l:'Grande portée ly', u:'m'}, {k:'e', l:'Épaisseur', u:'cm'}, {k:'G', l:'Charges permanentes (y compris poids propre)', u:'kN/m²'}, {k:'Q', l:'Charges d\'exploitation', u:'kN/m²'},
  {k:'pos', l:'Continuité du panneau', t:'sel', w:1, o:[['iso', 'Panneau isolé (appuis simples)'], ['rive', 'Panneau de rive (continu d\'un côté)'], ['inter', 'Panneau intermédiaire (continu)']]}, {k:'fc28', l:'fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:[[500, 'FeE500'], [400, 'FeE400']]}],
 ex:{lx:4, ly:5, e:15, G:5.75, Q:1.5, pos:'rive', fc28:25, fe:500},
 rnd:() => { const lx = R.s(3, 5.5, .1); return {lx, ly:+(lx*R.s(1, 2.4, .1)).toFixed(1), e:R.p([12, 14, 15, 16, 18]), G:R.s(4.5, 7, .25), Q:R.p([1.5, 2.5, 3.5]), pos:R.p(['iso', 'rive', 'inter']), fc28:25, fe:R.p([400, 500])}; },
 enonce:p => `Un panneau de dalle pleine de **${nf(p.lx)} × ${nf(p.ly)} m**, épaisseur **${nf(p.e)} cm**, repose sur ses quatre côtés (${({iso:'panneau isolé', rive:'panneau de rive', inter:'panneau intermédiaire'})[p.pos]}). Charges : G = ${nf(p.G)} kN/m², Q = ${nf(p.Q)} kN/m². Béton fc28 = ${nf(p.fc28)} MPa, aciers FeE${nf(p.fe)}, fissuration peu préjudiciable, enrobage 2 cm.\n\n1. Calculer la charge ultime et le rapport α = lx/ly.\n2. Calculer les moments isostatiques M0x et M0y puis les moments en travée et sur appuis.\n3. Calculer les aciers par mètre dans les deux sens et choisir les barres.`,
 solve(p){
  need(p, [['lx', 'lx', .5], ['ly', 'ly', .5], ['e', 'Épaisseur', 8, 40], ['G', 'G', 0], ['Q', 'Q', 0], ['fc28', 'fc28', 16, 60]]); if(p.lx > p.ly) throw new Err('lx doit être la plus petite portée.');
  const ba = BA(), M = ba.mat(p), pu = 1.35*p.G + 1.5*p.Q, al = p.lx/p.ly, one = al < .4;
  const mx = one ? .125 : 1/(8*(1 + 2.4*al**3)), my = one ? 0 : Math.max(al**3*(1.9 - .9*al), 0), M0x = mx*pu*p.lx*p.lx, M0y = my*M0x;
  const kt = {iso:1, rive:.85, inter:.75}[p.pos], ka = {iso:.15, rive:.3, inter:.5}[p.pos], kaI = {iso:.15, rive:.5, inter:.5}[p.pos];
  const Mtx = kt*M0x, Mty = kt*M0y, Ma = Math.max(ka, kaI)*M0x, d = (p.e - 2 - .5)/100, b = 1;
  const fx = ba.flex(Mtx, b, d, M), fy = ba.flex(Mty, b, d - .01, M), fa = ba.flex(Ma, b, d, M);
  const r0 = +p.fe >= 500 ? .0006 : .0008, Axmin = r0*(3 - al)/2*100*p.e, Aymin = r0*100*p.e;
  const Ax = Math.max(fx.As, Axmin), Ay = Math.max(fy.As, Aymin, Ax/4), Aa = Math.max(fa.As, Aymin);
  const stx = Math.min(3*p.e, 33), sty = Math.min(4*p.e, 45);
  const pick = (As, smax) => { for(const dd of [8, 10, 12, 14]){ const s = Math.PI*dd*dd/400, sp = [33, 30, 25, 20, 16, 15, 12.5, 10].filter(x => x <= smax).find(x => s*100/x >= As); if(sp) return {d:dd, sp, A:s*100/sp}; } return {d:14, sp:10, A:Math.PI*1.96/4*10}; };
  const bx = pick(Ax, stx), by = pick(Ay, sty), bA = pick(Aa, stx), st = [];
  st.push({t:'Charge ultime et rapport des portées', md:`$$ pu = 1,35 G + 1,5 Q = 1,35 × ${nf(p.G)} + 1,5 × ${nf(p.Q)} = ${nf(pu, 3)} kN/m²\n$$ α = lx / ly = ${nf(p.lx)} / ${nf(p.ly)} = ${nf(al, 3)}\n${one ? 'α < 0,4 : la dalle **porte dans un seul sens** (comme une poutre de largeur 1 m dans le sens lx).' : '0,4 ≤ α ≤ 1 : la dalle **porte dans les deux sens**.'}\nÉpaisseur conseillée : e ≥ lx/${p.pos === 'iso' ? 30 : 40} = ${nf(p.lx*100/(p.pos === 'iso' ? 30 : 40), 1)} cm ${p.e >= p.lx*100/(p.pos === 'iso' ? 30 : 40) ? '✓' : '✗ (dalle un peu mince)'}`, ask:[{l:'pu', v:pu, u:'kN/m²'}, {l:'α', v:al, d:3}]});
  st.push({t:'Moments isostatiques', md:one ? `$$ M0x = pu lx²/8 = ${nf(pu, 3)} × ${nf(p.lx)}²/8 = ${nf(M0x, 3)} kN·m/m` : `Coefficients du BAEL (annexe E3, ν = 0 à l'ELU) :\n$$ μx = 1 / (8 (1 + 2,4 α³)) = ${nf(mx, 4)}\n$$ μy = α³ (1,9 − 0,9 α) = ${nf(my, 4)}\n$$ M0x = μx pu lx² = ${nf(mx, 4)} × ${nf(pu, 3)} × ${nf(p.lx)}² = ${nf(M0x, 3)} kN·m/m\n$$ M0y = μy M0x = ${nf(M0y, 3)} kN·m/m`, ask:[{l:'M0x', v:M0x, u:'kN·m/m'}]});
  st.push({t:'Moments en travée et sur appuis', md:`Prise en compte de la continuité (${({iso:'panneau isolé', rive:'panneau de rive', inter:'panneau intermédiaire'})[p.pos]}) :\n$$ Mtx = ${nf(kt)} M0x = ${nf(Mtx, 3)} kN·m/m     Mty = ${nf(kt)} M0y = ${nf(Mty, 3)} kN·m/m\n$$ Ma = ${nf(Math.max(ka, kaI))} M0x = ${nf(Ma, 3)} kN·m/m  (sur appuis)`, ask:[{l:'Mtx', v:Mtx, u:'kN·m/m'}]});
  st.push({t:'Aciers par mètre de dalle', md:`Section de calcul b = 1 m, d ≈ e − 2,5 cm = ${nf(d*100, 1)} cm :\n\n${tb(['Sens', 'M (kN·m/m)', 'μ', 'As calcul (cm²/m)', 'Minimum (cm²/m)', 'A retenu', 'Choix'], [['x (travée)', nf(Mtx, 2), nf(fx.mu, 4), nf(fx.As, 2), nf(Axmin, 2), nf(Ax, 2), `HA${bx.d} e = ${nf(bx.sp)} cm (${nf(bx.A, 2)})`], ['y (travée)', nf(Mty, 2), nf(fy.mu, 4), nf(fy.As, 2), nf(Aymin, 2), nf(Ay, 2), `HA${by.d} e = ${nf(by.sp)} cm (${nf(by.A, 2)})`], ['appuis (chapeaux)', nf(Ma, 2), nf(fa.mu, 4), nf(fa.As, 2), nf(Aymin, 2), nf(Aa, 2), `HA${bA.d} e = ${nf(bA.sp)} cm (${nf(bA.A, 2)})`]])}\n\nMinimums : $$ Ax ≥ ρ0 (3 − α)/2 × b × h   et   Ay ≥ ρ0 × b × h   (ρ0 = ${nf(r0, 4)} pour FeE${nf(p.fe)})\nEspacements maximaux : ${nf(stx)} cm dans le sens x, ${nf(sty)} cm dans le sens y. Les barres du sens x (le plus sollicité) sont placées **en dessous**.`, ask:[{l:'Ax retenu', v:Ax, u:'cm²/m'}, {l:'Ay retenu', v:Ay, u:'cm²/m'}]});
  return {steps:st, bilan:`α = ${nf(al, 2)} ; Mtx = ${nf(Mtx, 2)}, Mty = ${nf(Mty, 2)}, Ma = ${nf(Ma, 2)} kN·m/m → nappe inférieure **HA${bx.d}/${nf(bx.sp)} cm** (x) et **HA${by.d}/${nf(by.sp)} cm** (y), chapeaux **HA${bA.d}/${nf(bA.sp)} cm**.`};
 }});
})();
