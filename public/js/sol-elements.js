/* =====================================================================
   Études progressives des éléments de structure (même démarche que la poutre)
   - Poteau en béton armé : surface d'influence, descente de charges niveau
     par niveau (dégression), pré-dimensionnement, flambement, aciers,
     cadres, plan de ferraillage, nomenclature et mise en œuvre ;
   - Dalle pleine en béton armé : type de dalle, épaisseur, charges couche
     par couche, moments, aciers, effort tranchant, flèche, plan de
     ferraillage, nomenclature et mise en œuvre ;
   - Fondation (technologie) : choix du type, semelle isolée ou filante,
     coffrage, hauteur, contrainte sur le sol, aciers, attentes, plan,
     métré et exécution sur le chantier.
   Chaque étude s'appuie sur les outils du solveur de poutre (A.SOL.ba).
   ===================================================================== */
(function(){
'use strict';
const {esc, ic} = A;
const SOL = A.SOL, {nf, clone, R, SV, T, Ln, Pth, Rc, Ci, Dim, C} = SOL.U, Err = SOL.Err, need = SOL.need;
const BA = () => SOL.ba;
const sec = d => Math.PI*d*d/400, kgm = d => .00617*d*d;
const up = (v, st) => Math.ceil(v/st - 1e-9)*st, dn = (v, st) => Math.floor(v/st + 1e-9)*st;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const mdT = (head, rows) => `| ${head.join(' | ')} |\n| ${head.map(() => '---').join(' | ')} |\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
const fig = (svg) => `<div class="solfig">${svg}</div>`;
const FE = [[500, 'FeE500'], [400, 'FeE400']];
const nomTable = rows => mdT(['Rep.', 'Désignation', 'Nb', 'Ø', 'Forme', 'L unit. (m)', 'L totale (m)', 'Poids (kg)'], rows.map(r => [r.rep, r.des, r.n, 'HA' + r.d, r.forme, nf(r.lu, 2), nf(r.n*r.lu, 2), nf(r.n*r.lu*kgm(r.d), 1)]));
const nomKg = rows => rows.reduce((a, r) => a + r.n*r.lu*kgm(r.d), 0);

/* =====================================================================
   1. POTEAU EN BÉTON ARMÉ
   ===================================================================== */
const MAJ = [[1, 'Aucune (poteau de rive, ou travées égales)'], [1.10, '+ 10 % (poteau voisin d\'un poteau de rive)'], [1.15, '+ 15 % (poteau central d\'une poutre à 2 travées)']];
const degrCoef = k => k <= 1 ? 1 : k === 2 ? .95 : k === 3 ? .90 : k === 4 ? .85 : (3 + k)/(2*k);
const CAD = [10, 12, 15, 18, 20, 25, 30, 35, 40];

function potBars(Areq, a, b, c, dmin){
  let best = null;
  [12, 14, 16, 20, 25].filter(d => d >= dmin).forEach(d => {
    for(let n = 4; n <= 20; n += 2){
      const A_ = n*sec(d); if(A_ + 1e-9 < Areq) continue;
      let nB = 2, nA = 2;
      for(let i = 0; i < (n - 4)/2; i++){ const sB = (b - 2*c)/(nB - 1), sA = (a - 2*c)/(nA - 1); if(sB >= sA) nB++; else nA++; }
      const sB = (b - 2*c)/(nB - 1), sA = (a - 2*c)/(nA - 1), smax = Math.min(.40, a + .10);
      if(Math.max(sA, sB) > smax + 1e-9) continue;
      const cost = A_ + n*.08;
      if(!best || cost < best.cost) best = {n, d, A:A_, nB, nA, sA, sB, smax, cost};
      break;
    }
  });
  return best;
}

function potCalc(p){
  const conc = p.mode === 'conc';
  need(p, [['a', 'Côté a du poteau', 15, 100], ['b', 'Côté b du poteau', 15, 150], ['he', 'Hauteur d\'étage', 2, 8], ['hp', 'Hauteur des poutres', 15, 150], ['fc28', 'fc28', 16, 60], ['c', 'Enrobage', 1.5, 6]]);
  if(!conc){ need(p, [['bp', 'Largeur des poutres', 10, 60], ['e', 'Épaisseur de la dalle', 8, 40]]); ['lxg', 'lxd', 'lyb', 'lyh'].forEach(k => need(p, [[k, 'Portée ' + k, 0, 20]])); }
  const list = (conc ? p.nivc : p.niv) || [];
  const niv = list.filter(r => r && isFinite(+r.G) && isFinite(+r.Q));
  if(!niv.length) throw new Err('Ajoutez au moins un niveau dans le tableau de la descente de charges.');
  niv.forEach((r, i) => { if(+r.G < 0 || +r.Q < 0) throw new Err(`Niveau ${i + 1} : les charges doivent être positives.`); });
  const a = Math.min(p.a, p.b)/100, b = Math.max(p.a, p.b)/100, he = +p.he, hp = p.hp/100, c = p.c/100;
  const bp = (p.bp || 20)/100, e = (p.e || 16)/100;
  if(hp >= he - .5) throw new Err('La hauteur des poutres est trop grande par rapport à la hauteur d\'étage.');
  if(!conc && hp <= e) throw new Err('La hauteur des poutres doit être supérieure à l\'épaisseur de la dalle.');
  const Lx = conc ? 0 : (+p.lxg + +p.lxd)/2, Ly = conc ? 0 : (+p.lyb + +p.lyh)/2;
  if(!conc && (Lx <= 0 || Ly <= 0)) throw new Err('Le poteau doit recevoir au moins une travée dans chaque direction.');
  const S = Lx*Ly, nz = conc ? 0 : [p.lxg, p.lxd, p.lyb, p.lyh].filter(v => !(+v > 0)).length;
  const pos = conc ? '' : nz === 0 ? 'central' : nz === 1 ? 'de rive' : 'd\'angle';
  const maj = +p.maj || 1;
  const gpout = conc ? 0 : 25*bp*(hp - e)*(Lx + Ly), gpot = 25*a*b*he;
  let NG = 0, Q0 = 0, sQi = 0; const rows = [];
  niv.forEach((r, k) => {
    const gpl = conc ? +r.G : +r.G*S, q = conc ? +r.Q : +r.Q*S;
    const Gn = (gpl + gpout)*maj + gpot; NG += Gn;
    let coef = 1, Qc;
    if(k === 0){ Q0 = q; Qc = q; } else { sQi += q; coef = p.degr ? degrCoef(k) : 1; Qc = Q0 + coef*sQi; }
    rows.push({n:r.n || ('Niveau ' + (k + 1)), G:+r.G, Q:+r.Q, gpl, gpout, gpot, Gn, q, coef, NG, NQ:maj*Qc, sQi});
  });
  const NQ = rows[rows.length - 1].NQ, Nu = 1.35*NG + 1.5*NQ, Ns = NG + NQ;
  const M = BA().mat(p), fe = +p.fe || 500;
  // pré-dimensionnement (λ = 35, A/Br = 1 %)
  const Brmin = 1.2*Nu/1000/(M.fbu/.9 + .85*M.fsu/100), amin = Math.sqrt(Brmin) + .02;
  const l0 = he - hp, lf = (+p.kf || .7)*l0, lam = lf*Math.sqrt(12)/a;
  const lamA = lf*Math.sqrt(12)/50; // côté minimal pour λ ≤ 50
  if(lam > 70) throw new Err(`Élancement λ = ${nf(lam, 1)} > 70 : le poteau est trop élancé (calcul en flexion composée nécessaire). Augmentez le côté a.`);
  const al = lam <= 50 ? .85/(1 + .2*Math.pow(lam/35, 2)) : .6*Math.pow(50/lam, 2);
  const Br = (a - .02)*(b - .02), B = a*b;
  const Ath = (Nu/1000/al - Br*p.fc28/(.9*1.5))*1.15/fe*1e4;
  const Amin = Math.max(4*2*(a + b), .2/100*B*1e4), Amax = 5/100*B*1e4, Areq = Math.max(Ath, Amin);
  if(Areq > Amax) throw new Err(`Section d'acier nécessaire (${nf(Areq, 1)} cm²) supérieure au maximum de 5 % (${nf(Amax, 1)} cm²) : agrandissez le poteau.`);
  const bars = potBars(Areq, a, b, c + .01, 12);
  if(!bars) throw new Err('Aucune disposition de barres ne convient : agrandissez le poteau.');
  const dt = [6, 8, 10].find(d => d >= bars.d/3 - 1e-9) || 10;
  const stmax = Math.min(15*bars.d/10, 40, a*100 + 10), st0 = [...CAD].reverse().find(s => s <= stmax + 1e-9) || 10, stn = Math.min(10, st0);
  const ls = M.lsk*bars.d/1000, lr = up(.6*ls, .05);
  const lnod = up(Math.max(.50, b, l0/6), .05);
  const nNod = Math.ceil(lnod/(stn/100)), nCur = Math.max(0, Math.ceil((l0 - 2*lnod)/(st0/100)) - 1), nNoeud = Math.ceil(hp/.15);
  const nCad = 2*nNod + nCur + 1 + nNoeud;
  const per = 2*((a - 2*c) + (b - 2*c)) + 2*10*dt/1000;
  const nEp = Math.max(0, bars.nB - 2) + Math.max(0, bars.nA - 2), lEp = (a - 2*c) + 2*10*dt/1000;
  const sbc = Ns/1000/(B + 15*bars.A*1e-4);
  const nomen = [{rep:1, n:bars.n, d:bars.d, des:'Barres longitudinales (étage + recouvrement)', forme:'Barre droite', lu:he + lr},
    {rep:2, n:nCad, d:dt, des:`Cadres HA${dt}`, forme:'Cadre fermé, crochets à 135°', lu:per}];
  if(nEp) nomen.push({rep:3, n:nEp*nCad, d:dt, des:`Épingles HA${dt} (barres intermédiaires)`, forme:'Épingle à crochets', lu:lEp});
  const kg = nomKg(nomen), vol = a*b*l0, coff = 2*(a + b)*l0;
  return {conc, a, b, he, hp, c, bp, e, Lx, Ly, S, pos, maj, gpout, gpot, rows, NG, NQ, Nu, Ns, M, fe, Brmin, amin, l0, lf, lam, lamA, al, Br, B, Ath, Amin, Amax, Areq, bars, dt, stmax, st0, stn, ls, lr, lnod, nNod, nCur, nNoeud, nCad, per, nEp, lEp, sbc, nomen, kg, vol, coff};
}

/* ---- figures du poteau ---- */
function potPlan(p, X){
  const W = 470, H = 330, tx = Math.max(+p.lxg + +p.lxd, .5), ty = Math.max(+p.lyb + +p.lyh, .5);
  const k = Math.min((W - 150)/tx, (H - 120)/ty);
  const X0 = 75 + (+p.lxg > 0 ? +p.lxg*k : 26), Y0 = 40 + (+p.lyh > 0 ? +p.lyh*k : 26);
  let g = '';
  // surface d'influence
  const x1 = X0 - (+p.lxg/2)*k, x2 = X0 + (+p.lxd/2)*k, y1 = Y0 - (+p.lyh/2)*k, y2 = Y0 + (+p.lyb/2)*k;
  g += Rc(x1, y1, x2 - x1, y2 - y1, {f:'#FDEEE2', c:C.OR, w:1.6});
  g += Pth(`M${x1},${y1} L${x2},${y2} M${x2},${y1} L${x1},${y2}`, {c:'#F2B98E', w:.8, d:'4 4'});
  // poutres
  const gx1 = X0 - +p.lxg*k, gx2 = X0 + +p.lxd*k, gy1 = Y0 - +p.lyh*k, gy2 = Y0 + +p.lyb*k;
  g += Ln(gx1, Y0, gx2, Y0, {c:'#9AA3AD', w:5}) + Ln(X0, gy1, X0, gy2, {c:'#9AA3AD', w:5});
  // poteaux voisins
  [[gx1, Y0, +p.lxg], [gx2, Y0, +p.lxd], [X0, gy1, +p.lyh], [X0, gy2, +p.lyb]].forEach(([x, y, l]) => { if(l > 0) g += Rc(x - 6, y - 6, 12, 12, {f:C.INK, c:C.INK}); });
  // façades
  if(!(+p.lxg > 0)) g += Ln(X0 - 10, gy1 - 10, X0 - 10, gy2 + 10, {c:C.INK, w:3}) + T(X0 - 16, (gy1 + gy2)/2, 'façade', {a:'middle', s:10, c:C.GR, r:-90});
  if(!(+p.lxd > 0)) g += Ln(X0 + 10, gy1 - 10, X0 + 10, gy2 + 10, {c:C.INK, w:3}) + T(X0 + 22, (gy1 + gy2)/2, 'façade', {a:'middle', s:10, c:C.GR, r:-90});
  if(!(+p.lyh > 0)) g += Ln(gx1 - 10, Y0 - 10, gx2 + 10, Y0 - 10, {c:C.INK, w:3}) + T((gx1 + gx2)/2, Y0 - 16, 'façade', {a:'middle', s:10, c:C.GR});
  if(!(+p.lyb > 0)) g += Ln(gx1 - 10, Y0 + 10, gx2 + 10, Y0 + 10, {c:C.INK, w:3}) + T((gx1 + gx2)/2, Y0 + 24, 'façade', {a:'middle', s:10, c:C.GR});
  g += Rc(X0 - 8, Y0 - 8, 16, 16, {f:C.RD, c:C.RD}) + T(X0 + 12, Y0 - 12, 'P', {s:13, b:1, c:C.RD});
  // cotes
  const yd = gy2 + 30;
  if(+p.lxg > 0) g += Dim(gx1, yd, X0, yd, nf(+p.lxg, 2) + ' m');
  if(+p.lxd > 0) g += Dim(X0, yd, gx2, yd, nf(+p.lxd, 2) + ' m');
  const xd = Math.max(gx2, X0 + 30) + 30;
  if(+p.lyh > 0) g += Dim(xd, gy1, xd, Y0, nf(+p.lyh, 2) + ' m');
  if(+p.lyb > 0) g += Dim(xd, Y0, xd, gy2, nf(+p.lyb, 2) + ' m');
  g += T(10, H - 8, `Surface d'influence S = ${nf(X.Lx, 2)} × ${nf(X.Ly, 2)} = ${nf(X.S, 2)} m² (en orange)`, {s:11.5, b:1, c:'#C95F18'});
  return SV(W, H, g, 'Surface d\'influence du poteau');
}
function potDescente(X){
  const n = X.rows.length, lh = 40, W = 620, H = 60 + n*lh;
  let g = '';
  const x0 = 120, xw = 150;
  X.rows.forEach((r, i) => {
    const y = 30 + i*lh;
    g += Rc(x0 - 20, y, xw + 40, 7, {f:'#D9D3C7', c:C.INK, w:1.2});
    g += Rc(x0 + xw/2 - 7, y + 7, 14, lh - 7, {f:'#E9E4DA', c:C.INK, w:1.2});
    g += T(x0 - 26, y + 7, r.n, {a:'end', s:10.5, b:1});
    g += Ln(x0 + xw/2 + 10, y + lh - 3, x0 + xw + 40, y + lh - 3, {c:C.GR, w:.8, d:'3 3'});
    g += T(x0 + xw + 46, y + lh, `NG = ${nf(r.NG, 1)} kN ; NQ = ${nf(r.NQ, 1)} kN`, {s:11, c:C.INK, b:i === n - 1});
  });
  g += Rc(x0 - 20, 30 + n*lh, xw + 40, 10, {f:'url(#shh)', c:'none'});
  g += T(x0 + xw/2, H - 4, 'Charges cumulées en pied de chaque poteau', {a:'middle', s:10.5, c:C.GR});
  return SV(W, H + 10, g, 'Descente de charges');
}
function potSection(X){
  const a = X.a*100, b = X.b*100, k = Math.min(230/b, 170/a), w = b*k, h = a*k, x0 = 50, y0 = 26, cc = X.c*100*k, dtk = X.dt/10*k, r = Math.max(3.2, X.bars.d/10*k/2);
  let g = Rc(x0, y0, w, h, {f:C.CO, w:2}) + Rc(x0 + cc, y0 + cc, w - 2*cc, h - 2*cc, {c:C.BL, w:2.2, rx:4});
  const xa = x0 + cc + dtk + r, xb = x0 + w - cc - dtk - r, ya = y0 + cc + dtk + r, yb = y0 + h - cc - dtk - r;
  const pts = [];
  for(let i = 0; i < X.bars.nB; i++){ const x = xa + i*(xb - xa)/(X.bars.nB - 1); pts.push([x, ya, i > 0 && i < X.bars.nB - 1 ? 'b' : 'c']); pts.push([x, yb, i > 0 && i < X.bars.nB - 1 ? 'b' : '']); }
  for(let j = 1; j < X.bars.nA - 1; j++){ const y = ya + j*(yb - ya)/(X.bars.nA - 1); pts.push([xa, y, 'a']); pts.push([xb, y, '']); }
  // épingles
  for(let i = 1; i < X.bars.nB - 1; i++){ const x = xa + i*(xb - xa)/(X.bars.nB - 1); g += Ln(x, ya, x, yb, {c:C.BL, w:1.2, d:'5 3'}); }
  for(let j = 1; j < X.bars.nA - 1; j++){ const y = ya + j*(yb - ya)/(X.bars.nA - 1); g += Ln(xa, y, xb, y, {c:C.BL, w:1.2, d:'5 3'}); }
  pts.forEach(([x, y]) => { g += Ci(x, y, r, {f:C.OR, c:C.INK, w:1}); });
  g += Dim(x0, y0 + h + 16, x0 + w, y0 + h + 16, `b = ${nf(b)} cm`) + Dim(x0 - 16, y0, x0 - 16, y0 + h, `a = ${nf(a)} cm`);
  const xt = x0 + w + 18;
  g += T(xt, y0 + 14, `${X.bars.n} HA${X.bars.d}`, {s:12, b:1, c:'#C95F18'}) + T(xt, y0 + 32, `Cadre HA${X.dt}`, {s:11, c:C.BL}) + (X.nEp ? T(xt, y0 + 50, `+ ${X.nEp} épingle${X.nEp > 1 ? 's' : ''} HA${X.dt}`, {s:11, c:C.BL}) : '') + T(xt, y0 + 68, `enrobage ${nf(X.c*100)} cm`, {s:11, c:C.GR});
  return SV(x0 + w + 170, y0 + h + 40, g, 'Coupe du poteau');
}
function potElev(X){
  const H = 450, W = 560, k = (H - 90)/(X.he + X.lr + .35), yF = H - 56, xL = 150, wP = 64;
  const Y = z => yF - z*k;
  let g = '';
  // plancher bas, poutre haute, étage supérieur
  g += Rc(xL - 90, Y(0), wP + 180, 12, {f:'#D9D3C7', w:1.2}) + T(xL - 86, Y(0) + 46, 'Plancher bas', {s:10, c:C.GR});
  g += Rc(xL - 90, Y(X.he), wP + 180, X.hp*k, {f:'#E9E4DA', w:1.2}) + T(xL + wP + 96, Y(X.he) + X.hp*k/2 + 4, `Poutre h = ${nf(X.hp*100)} cm`, {s:10, c:C.GR});
  g += Rc(xL, Y(X.l0), wP, X.l0*k, {f:'#F4F1EB', w:1.4});
  g += Rc(xL, Y(X.he + X.lr + .3), wP, (X.lr + .3)*k, {f:'#F4F1EB', w:1, c:C.GR});
  // barres : attentes de l'étage inférieur (gris) et barres de l'étage (orange)
  g += Ln(xL + 12, yF + 22, xL + 12, Y(X.lr), {c:'#9AA3AD', w:3}) + Ln(xL + wP - 12, yF + 22, xL + wP - 12, Y(X.lr), {c:'#9AA3AD', w:3});
  g += Ln(xL + 18, Y(0), xL + 18, Y(X.he + X.lr), {c:C.OR, w:3}) + Ln(xL + wP - 18, Y(0), xL + wP - 18, Y(X.he + X.lr), {c:C.OR, w:3});
  // cadres
  const marks = []; let z = .05;
  for(let i = 0; i < X.nNod; i++){ marks.push(z); z += X.stn/100; }
  const zTop = X.l0 - X.lnod; while(z < zTop - 1e-6){ marks.push(z); z += X.st0/100; }
  z = zTop; for(let i = 0; i <= X.nNod; i++){ if(z <= X.l0 - .02) marks.push(z); z += X.stn/100; }
  for(let i = 0; i < X.nNoeud; i++) marks.push(X.l0 + .05 + i*.15);
  marks.forEach(m => { g += Ln(xL + 6, Y(m), xL + wP - 6, Y(m), {c:C.BL, w:1.3}); });
  // cotes
  g += Dim(xL - 26, Y(0), xL - 26, Y(X.lnod), `${nf(X.lnod*100)} cm`) + Dim(xL - 26, Y(X.l0 - X.lnod), xL - 26, Y(X.l0), `${nf(X.lnod*100)} cm`);
  g += Dim(xL - 60, Y(0), xL - 60, Y(X.l0), `l0 = ${nf(X.l0, 2)} m`);
  g += Dim(xL + wP + 26, Y(X.he), xL + wP + 26, Y(X.he + X.lr), `lr = ${nf(X.lr*100)} cm`);
  g += Dim(xL + wP + 26, yF + 18, xL + wP + 26, Y(X.lr), `lr`);
  g += T(xL + wP + 40, Y(X.lnod/2) + 4, `cadres / ${X.stn} cm (zone de nœud)`, {s:10.5, c:C.BL});
  g += T(xL + wP + 40, Y(X.l0/2) + 4, `cadres / ${X.st0} cm (zone courante)`, {s:10.5, c:C.BL, b:1});
  g += T(xL + wP + 40, Y(X.l0 - X.lnod/2) + 4, `cadres / ${X.stn} cm (zone de nœud)`, {s:10.5, c:C.BL});
  g += T(xL + wP + 40, Y(X.he + X.lr/2 + .1), `${X.bars.n} HA${X.bars.d} : recouvrement avec l'étage au-dessus`, {s:10.5, c:'#C95F18', b:1});
  g += T(xL + wP + 40, yF + 34, 'en gris : attentes de l\'étage inférieur (ou de la semelle)', {s:10, c:C.GR});
  return SV(W, H, g, 'Plan de ferraillage du poteau (élévation)');
}

function potSolve(p){
  const X = potCalc(p), st = [], M = X.M, fe = X.fe, bars = X.bars;
  const last = X.rows[X.rows.length - 1];
  if(!X.conc){
    st.push({t:'Position du poteau et surface d\'influence', q:'Calculez la surface de plancher portée par le poteau (moitié de chaque travée voisine dans les deux sens).',
      md:`Le poteau étudié est un poteau **${X.pos}**. Chaque plancher lui transmet la charge de la zone limitée par les **milieux des travées** voisines :\n$$ Lx = (${nf(+p.lxg, 2)} + ${nf(+p.lxd, 2)})/2 = ${nf(X.Lx, 3)} m     Ly = (${nf(+p.lyb, 2)} + ${nf(+p.lyh, 2)})/2 = ${nf(X.Ly, 3)} m\n$$ S = Lx × Ly = ${nf(X.Lx, 3)} × ${nf(X.Ly, 3)} = ${nf(X.S, 3)} m²\n\nLongueur de poutres portée par le poteau à chaque niveau : Lx + Ly = ${nf(X.Lx + X.Ly, 3)} m.` +
        (X.maj > 1 ? `\n\n> [!norme] Effet de la continuité\n> Les poutres étant continues, ce poteau reçoit un peu plus que la moitié des travées : on majore les charges des planchers et des poutres de **${nf((X.maj - 1)*100)} %** (règle forfaitaire du BAEL).` : ''),
      ask:[{l:'S', v:X.S, u:'m²'}], hint:'Prenez la moitié de la travée de chaque côté du poteau, dans chaque direction, puis multipliez les deux longueurs.', html:fig(potPlan(p, X))});
    st.push({t:'Charges d\'un niveau courant', q:`Calculez, pour le niveau « ${X.rows[0].n} », la charge du plancher, le poids des poutres et le poids du poteau.`,
      md:`Pour chaque niveau :\n- **plancher** : G(plancher) × S ;\n- **poutres** (partie sous la dalle) : $$ 25 × b × (h − e) × (Lx + Ly) = 25 × ${nf(X.bp, 2)} × (${nf(X.hp, 2)} − ${nf(X.e, 2)}) × ${nf(X.Lx + X.Ly, 3)} = ${nf(X.gpout, 3)} kN\n- **poteau** (béton armé 25 kN/m³) : $$ 25 × a × b × he = 25 × ${nf(X.a, 2)} × ${nf(X.b, 2)} × ${nf(X.he, 2)} = ${nf(X.gpot, 3)} kN\n\nNiveau « ${X.rows[0].n} » : $$ G(plancher) = ${nf(X.rows[0].G, 2)} × ${nf(X.S, 3)} = ${nf(X.rows[0].gpl, 2)} kN     Q = ${nf(X.rows[0].Q, 2)} × ${nf(X.S, 3)} = ${nf(X.rows[0].q, 2)} kN`,
      ask:[{l:`G du plancher « ${X.rows[0].n} »`, v:X.rows[0].gpl, u:'kN'}, {l:'Poids des poutres', v:X.gpout, u:'kN'}, {l:'Poids du poteau', v:X.gpot, u:'kN'}],
      hint:'Poids = 25 kN/m³ × volume. Pour les poutres, seule la retombée sous la dalle compte (la dalle est déjà dans G du plancher).'});
  } else {
    st.push({t:'Charges transmises au poteau', md:`Les charges transmises par les poutres à chaque niveau sont données (descente de charges déjà faite sur les poutres du projet). On ajoute, à chaque niveau, le **poids propre du poteau** :\n$$ 25 × a × b × he = 25 × ${nf(X.a, 2)} × ${nf(X.b, 2)} × ${nf(X.he, 2)} = ${nf(X.gpot, 3)} kN`,
      ask:[{l:'Poids du poteau par niveau', v:X.gpot, u:'kN'}], hint:'Volume du poteau (a × b × hauteur d\'étage) × 25 kN/m³.'});
  }
  // descente
  const degrTxt = p.degr && X.rows.length > 2 ? `\n\n> [!norme] Dégression des charges d'exploitation (bâtiments d'habitation)\n> Tous les étages ne sont pas chargés au maximum en même temps. Sous la terrasse on garde Q₀ ; sous l'étage n (compté depuis le haut), on prend Q₀ + c(n) × (Q₁ + … + Qₙ) avec c = 1 ; 0,95 ; 0,90 ; 0,85 puis (3 + n)/(2n) à partir de n = 5.` : '';
  st.push({t:'Descente de charges niveau par niveau', q:`Cumulez les charges du haut vers le bas et donnez NG et NQ en pied du poteau le plus bas (« ${last.n} »).`,
    md:mdT(['Niveau', X.conc ? 'G transmis (kN)' : 'G plancher (kN)', X.conc ? '' : 'Poutres (kN)', 'Poteau (kN)', 'G du niveau (kN)', 'NG cumulé (kN)', 'Q du niveau (kN)', X.rows.length > 2 && p.degr ? 'Coef.' : '', 'NQ cumulé (kN)'].filter(Boolean),
      X.rows.map((r, k) => [r.n, nf(r.gpl, 2), X.conc ? null : nf(r.gpout, 2), nf(r.gpot, 2), nf(r.Gn, 2), `**${nf(r.NG, 2)}**`, nf(r.q, 2), X.rows.length > 2 && p.degr ? (k === 0 ? '—' : nf(r.coef, 3)) : null, `**${nf(r.NQ, 2)}**`].filter(v => v !== null))) +
      `\n\nG du niveau = ${X.maj > 1 ? nf(X.maj, 2) + ' × ' : ''}(G plancher + poutres) + poteau${X.maj > 1 ? ' ; NQ est aussi majoré de ' + nf((X.maj - 1)*100) + ' %' : ''}.` + degrTxt,
    ask:[{l:'NG en pied', v:X.NG, u:'kN'}, {l:'NQ en pied', v:X.NQ, u:'kN'}],
    hint:'NG : additionnez les G de tous les niveaux au-dessus (poteau compris). NQ : additionnez les Q en appliquant la dégression si elle est demandée.',
    html:fig(potDescente(X))});
  st.push({t:'Efforts de calcul en pied de poteau', md:`$$ Nu = 1,35 NG + 1,5 NQ = 1,35 × ${nf(X.NG, 2)} + 1,5 × ${nf(X.NQ, 2)} = ${nf(X.Nu, 2)} kN\n$$ Nser = NG + NQ = ${nf(X.Ns, 2)} kN\n\nNu sert au calcul des aciers (ELU) ; Nser sert à la vérification à l'ELS et au dimensionnement de la **fondation**.`,
    ask:[{l:'Nu', v:X.Nu, u:'kN'}, {l:'Nser', v:X.Ns, u:'kN'}], hint:'Coefficients de l\'ELU : 1,35 sur les charges permanentes, 1,5 sur les charges d\'exploitation.'});
  st.push({t:'Pré-dimensionnement de la section', q:'Calculez la section réduite minimale Br (en cm²) en prenant λ = 35 et 1 % d\'acier.',
    md:`On se place à λ = 35 (β = 1 + 0,2 (λ/35)² = 1,2) avec 1 % d'acier :\n$$ Br ≥ β Nu / (f_bu/0,9 + 0,85 × fe/(100 γs)) = 1,2 × ${nf(X.Nu/1000, 4)} / (${nf(M.fbu, 2)}/0,9 + 0,85 × ${nf(M.fsu, 1)}/100) = ${nf(X.Brmin*1e4, 0)} cm²\nPour un poteau carré : $$ a ≥ √Br + 2 cm = ${nf(X.amin*100, 1)} cm\nPour garder λ ≤ 50 (calcul simple) : $$ a ≥ lf √12 / 50 = ${nf(X.lamA*100, 1)} cm\n\nSection choisie : **${nf(X.a*100)} × ${nf(X.b*100)} cm** → Br = (a − 2)(b − 2) = ${nf(X.Br*1e4, 0)} cm² ${X.Br >= X.Brmin - 1e-9 ? '≥ Br min ✓' : '< Br min : la section est un peu juste, les aciers compenseront (à vérifier ci-dessous)'}. En pratique, on ne descend pas sous **20 × 20 cm** (25 × 25 cm conseillé pour les poteaux porteurs d'immeuble).`,
    ask:[{l:'Br min', v:X.Brmin*1e4, u:'cm²'}], hint:'Nu en MN et f_bu, f_su en MPa donnent Br en m² ; multipliez par 10 000 pour des cm².'});
  st.push({t:'Longueur de flambement, élancement et coefficient α', md:`Hauteur libre (du plancher au-dessous de la poutre) : $$ l0 = he − h(poutre) = ${nf(X.he, 2)} − ${nf(X.hp, 2)} = ${nf(X.l0, 3)} m\n$$ lf = ${nf(+p.kf || .7, 2)} × l0 = ${nf(X.lf, 3)} m\n$$ λ = lf √12 / a = ${nf(X.lf*100, 1)} × 3,464 / ${nf(X.a*100)} = ${nf(X.lam, 2)}\n${X.lam <= 50 ? `λ ≤ 50 : $$ α = 0,85 / (1 + 0,2 (λ/35)²) = ${nf(X.al, 4)}` : `50 < λ ≤ 70 : $$ α = 0,6 (50/λ)² = ${nf(X.al, 4)}`}\n\n> [!attention] Charges appliquées jeunes\n> Si plus de la moitié des charges est appliquée avant 90 jours, on divise α par 1,10.`,
    ask:[{l:'l0', v:X.l0, u:'m'}, {l:'λ', v:X.lam}, {l:'α', v:X.al, d:4}], hint:'Pour une section rectangulaire, le rayon de giration vaut i = a/√12 avec a le plus petit côté ; λ = lf/i.'});
  st.push({t:'Section d\'aciers longitudinaux', md:`$$ Ath = [Nu/α − Br fc28/(0,9 γb)] × γs/fe = [${nf(X.Nu/1000, 4)}/${nf(X.al, 4)} − ${nf(X.Br, 4)} × ${nf(p.fc28)}/1,35] × 1,15/${nf(fe)} = ${nf(X.Ath, 2)} cm²\n${X.Ath <= 0 ? 'Ath ≤ 0 : le béton seul suffit, on met le **minimum réglementaire**.\n' : ''}$$ Amin = max(4 cm² par mètre de périmètre ; 0,2 % B) = max(${nf(4*2*(X.a + X.b), 2)} ; ${nf(.002*X.B*1e4, 2)}) = ${nf(X.Amin, 2)} cm²\n$$ Amax = 5 % B = ${nf(X.Amax, 1)} cm²\n$$ A = max(Ath ; Amin) = ${nf(X.Areq, 2)} cm²`,
    ask:[{l:'Ath', v:X.Ath, u:'cm²', abs:Math.abs(X.Ath)*.03 + .05}, {l:'Amin', v:X.Amin, u:'cm²'}, {l:'A retenue', v:X.Areq, u:'cm²'}],
    hint:'Nu en MN, Br en m², fc28 et fe en MPa : le résultat est en m², × 10 000 pour des cm². Le périmètre u = 2(a + b) en mètres.'});
  st.push({t:'Choix et disposition des barres', md:`On choisit **${bars.n} HA${bars.d}** = ${nf(bars.A, 2)} cm² ≥ ${nf(X.Areq, 2)} cm².\n\nRègles de disposition :\n- au moins **une barre dans chaque angle**, Ø ≥ 12 mm ;\n- distance entre barres d'une même face ≤ min(a + 10 cm ; 40 cm) = ${nf(bars.smax*100, 0)} cm : ici ${nf(bars.sB*100, 1)} cm sur la grande face et ${nf(bars.sA*100, 1)} cm sur la petite face ✓ ;\n- barres réparties symétriquement : **${bars.nB} barres** sur chaque grande face, **${bars.nA}** sur chaque petite face (angles compris).`,
    ask:[{l:'Nombre de barres', v:bars.n, abs:.01}, {l:'Section réelle', v:bars.A, u:'cm²'}], hint:'Cherchez le plus petit nombre pair de barres d\'un même diamètre dont la section dépasse A.',
    html:fig(potSection(X))});
  st.push({t:'Armatures transversales (cadres)', md:`$$ Øt ≥ Øl / 3 = ${nf(bars.d/3, 1)} mm  →  cadres **HA${X.dt}**\n$$ st ≤ min(15 Øl ; 40 cm ; a + 10 cm) = min(${nf(15*bars.d/10)} ; 40 ; ${nf(X.a*100 + 10)}) = ${nf(X.stmax)} cm  →  **st = ${X.st0} cm** en zone courante\n\n**Zones de nœud** (bonne pratique, surtout en zone sismique) : on resserre les cadres à **${X.stn} cm** sur ${nf(X.lnod*100)} cm en pied et en tête du poteau (max(50 cm ; b ; l0/6)) et on poursuit les cadres dans la hauteur de la poutre.\n\n**Recouvrement** avec l'étage supérieur : $$ ls = Ø fe/(4 τsu) = ${nf(M.lsk, 1)} Ø = ${nf(X.ls*100, 0)} cm     lr = 0,6 ls ≈ ${nf(X.lr*100)} cm  (barres comprimées)\nAu moins 3 cadres dans la longueur de recouvrement.` +
    (X.nEp ? `\n\nLes **${X.nEp} barres intermédiaires** sont tenues par des **épingles HA${X.dt}** (une par barre, à chaque cadre).` : '') +
    `\n\nNombre de cadres sur un étage : 2 × ${X.nNod} (nœuds) + ${X.nCur + 1} (zone courante) + ${X.nNoeud} (dans la poutre) = **${X.nCad} cadres**.`,
    ask:[{l:'Øt minimal', v:bars.d/3, u:'mm', tol:.05}, {l:'Espacement maximal st', v:X.stmax, u:'cm', abs:.5}], hint:'Le diamètre des cadres vaut au moins le tiers du diamètre des barres longitudinales.'});
  st.push({t:'Vérification à l\'ELS', md:`Section homogène (n = 15) : $$ σbc = Nser/(B + 15 A) = ${nf(X.Ns/1000, 4)}/(${nf(X.B, 4)} + 15 × ${nf(bars.A*1e-4, 6)}) = ${nf(X.sbc, 2)} MPa\n$$ σbc ${X.sbc <= .6*p.fc28 ? '≤' : '>'} 0,6 fc28 = ${nf(.6*p.fc28, 1)} MPa ${X.sbc <= .6*p.fc28 ? '✓' : '✗ : agrandir la section'}`,
    ask:[{l:'σbc', v:X.sbc, u:'MPa', tol:.03}], hint:'Nser en MN, B en m² et A en m² : la contrainte est en MPa.'});
  st.push({t:'Plan de ferraillage', md:`Le plan montre un étage courant :\n- les **${bars.n} HA${bars.d}** partent du plancher bas, traversent le nœud et dépassent de **lr = ${nf(X.lr*100)} cm** au-dessus du plancher haut pour le recouvrement avec l'étage supérieur ;\n- en pied, ils recouvrent les **attentes** de l'étage inférieur (ou de la semelle) ;\n- les **cadres** sont resserrés à ${X.stn} cm dans les zones de nœud et espacés de ${X.st0} cm au milieu.`,
    html:fig(potElev(X))});
  st.push({t:'Nomenclature des aciers et quantités (un étage)', q:'Calculez le poids d\'acier d\'un étage de poteau (poids d\'une barre : 0,00617 × Ø² kg/m).',
    md:nomTable(X.nomen) + `\n\n$$ Poids d'acier = ${nf(X.kg, 1)} kg  (+ 5 % de chutes ≈ ${nf(X.kg*1.05, 0)} kg)\n$$ Béton = a × b × l0 = ${nf(X.a, 2)} × ${nf(X.b, 2)} × ${nf(X.l0, 2)} = ${nf(X.vol, 3)} m³   →   ${nf(X.kg/X.vol, 0)} kg/m³\n$$ Coffrage = 2 (a + b) × l0 = ${nf(X.coff, 2)} m²`,
    ask:[{l:'Poids d\'acier (un étage)', v:X.kg, u:'kg', tol:.05}], hint:'Pour chaque ligne : nombre × longueur × 0,00617 × Ø², puis additionnez.'});
  const lienF = SOL.link('tech-fondation', {type:'isolee', a:Math.round(X.a*100), b:Math.round(X.b*100), G:Math.round(X.NG*10)/10, Q:Math.round(X.NQ*10)/10, nbp:Math.min(8, bars.n), dp:Math.min(20, bars.d)}, 'guide');
  st.push({t:'Mise en œuvre sur le chantier', md:`1. **Attentes** : vérifier la position et le nombre des barres en attente sortant de la semelle ou du plancher inférieur (implantation des axes au cordeau).\n2. **Cage** : enfiler les cadres sur les barres, les ligaturer aux espacements du plan (marquer à la craie : ${X.stn} cm aux nœuds, ${X.st0} cm au milieu), crochets des cadres alternés d'un angle à l'autre.\n3. **Cales d'enrobage** de ${nf(X.c*100)} cm sur les quatre faces ; la cage doit être bien verticale (fil à plomb).\n4. **Coffrage** propre et huilé, étayé dans les deux directions ; vérifier l'aplomb et les dimensions.\n5. **Bétonnage** par couches de 50 cm environ, **vibré** à l'aiguille, sans chute libre de plus de 1,5 à 2 m (sinon fenêtre de bétonnage ou goulotte).\n6. **Décoffrage** après 1 à 2 jours, puis **cure** (arrosage) pendant au moins 7 jours.`,
    html:`<div class="row"><a class="btn b-pri b-sm" href="${lienF}">${ic('arrow')}Étudier la fondation de ce poteau</a></div>`});
  const bilan = `Poteau **${nf(X.a*100)} × ${nf(X.b*100)} cm** : NG = ${nf(X.NG, 1)} kN, NQ = ${nf(X.NQ, 1)} kN → **Nu = ${nf(X.Nu, 1)} kN**, Nser = ${nf(X.Ns, 1)} kN ; λ = ${nf(X.lam, 1)}, α = ${nf(X.al, 3)} ; **${bars.n} HA${bars.d}** (${nf(bars.A, 2)} cm²), cadres **HA${X.dt}** à ${X.st0} cm (${X.stn} cm aux nœuds), recouvrement ${nf(X.lr*100)} cm ; ${nf(X.kg*1.05, 0)} kg d'acier par étage.\n\n[Étudier maintenant la fondation de ce poteau](${lienF})`;
  return {steps:st, bilan};
}

/* =====================================================================
   2. DALLE PLEINE EN BÉTON ARMÉ
   ===================================================================== */
const USAGES = [['hab', 'Habitation (logements)', 1.5], ['bur', 'Bureaux', 2.5], ['classe', 'Salle de classe', 2.5], ['comm', 'Commerce, boutique', 5], ['balcon', 'Balcon', 3.5], ['circ', 'Escalier, couloir', 2.5], ['tacc', 'Terrasse accessible', 1.5], ['tinac', 'Terrasse inaccessible', 1.0], ['autre', 'Autre usage (Q saisi)', 0]];
const EDGE = [['rive', 'Appui de rive (poutre de façade)'], ['cont', 'Continu (panneau voisin)']];
const SPACE = [33, 30, 25, 20, 16, 15, 12.5, 10];
function slabPick(As, smax){
  for(const smin of [15, 10]) for(const d of [8, 10, 12, 14]){ const s = sec(d), sp = SPACE.filter(x => x <= smax + 1e-9 && x >= smin).find(x => s*100/x >= As - 1e-9); if(sp) return {d, sp, A:s*100/sp}; }
  return {d:14, sp:10, A:sec(14)*10};
}
function dalleCalc(p){
  need(p, [['lx', 'Portée lx', .8, 12], ['ly', 'Portée ly', .8, 20], ['e', 'Épaisseur', 8, 40], ['fc28', 'fc28', 16, 60], ['c', 'Enrobage', 1, 5]]);
  let lx = +p.lx, ly = +p.ly, swap = false; if(lx > ly){ [lx, ly] = [ly, lx]; swap = true; }
  const e = p.e/100, al = lx/ly, one = al < .4, M = BA().mat(p), fe = +p.fe || 500;
  const ed = {x1:p.bx1 || 'rive', x2:p.bx2 || 'rive', y1:p.by1 || 'rive', y2:p.by2 || 'rive'};
  const nCont = Object.values(ed).filter(v => v === 'cont').length;
  const cont = ed.x1 === 'cont' || ed.x2 === 'cont';
  const div = one ? (cont ? 35 : 30) : (cont ? 45 : 40), emin = Math.max(lx*100/div, 12);
  // charges
  const couches = (p.couches || []).filter(r => r && (+r.w > 0 || (+r.ep > 0 && +r.gam > 0))).map(r => ({n:r.n || 'Couche', ep:+r.ep || 0, gam:+r.gam || 0, w:+r.w || 0, g:+r.w > 0 ? +r.w : (+r.ep)/100*(+r.gam)}));
  const gpp = 25*e, G = gpp + couches.reduce((a, r) => a + r.g, 0);
  const U = USAGES.find(u => u[0] === p.usage) || USAGES[0], Q = U[0] === 'autre' ? (+p.Qd || 0) : U[2];
  const pu = 1.35*G + 1.5*Q, ps = G + Q;
  // moments
  const mx = one ? .125 : 1/(8*(1 + 2.4*Math.pow(al, 3))), my = one ? 0 : Math.pow(al, 3)*(1.9 - .9*al);
  const M0x = mx*pu*lx*lx, M0y = my*M0x;
  const cf = v => v === 'cont' ? .5 : .3;
  const ax1 = cf(ed.x1)*M0x, ax2 = cf(ed.x2)*M0x, ay1 = cf(ed.y1)*M0x, ay2 = cf(ed.y2)*M0x;
  const kx = clamp(1.25 - (cf(ed.x1) + cf(ed.x2))/2, .75, 1), ky = clamp(1.25 - (cf(ed.y1) + cf(ed.y2))/2, .75, 1);
  const Mtx = kx*M0x, Mty0 = one ? 0 : ky*M0y, Mty = one ? 0 : Math.max(Mty0, Mtx/4);
  // hauteurs utiles et aciers
  const dx = e - p.c/100 - .005, dy = dx - .01;
  const fx = BA().flex(Mtx, 1, dx, M), fy = one ? null : BA().flex(Mty, 1, dy, M);
  const MaC = Math.max(ed.x1 === 'cont' ? ax1 : 0, ed.x2 === 'cont' ? ax2 : 0, ed.y1 === 'cont' ? ay1 : 0, ed.y2 === 'cont' ? ay2 : 0);
  const MaR = .3*M0x, faC = MaC > 0 ? BA().flex(MaC, 1, dx, M) : null, faR = BA().flex(MaR, 1, dx, M);
  const r0 = fe >= 500 ? .0006 : .0008, Axmin = r0*(3 - al)/2*100*p.e, Aymin = r0*100*p.e;
  const Ax = Math.max(fx.As, Axmin), Ay = one ? Math.max(Ax/4, Aymin) : Math.max(fy.As, Aymin, Ax/4);
  const AaC = faC ? Math.max(faC.As, Aymin) : 0, AaR = Math.max(faR.As, Aymin);
  const stx = Math.min(3*p.e, 33), sty = Math.min(4*p.e, 45);
  const bx = slabPick(Ax, stx), by = slabPick(Ay, sty), bC = faC ? slabPick(AaC, stx) : null, bR = slabPick(AaR, stx);
  // effort tranchant
  const Vx = one ? pu*lx/2 : pu*lx*ly/(2*ly + lx), Vy = one ? 0 : pu*lx/3, Vmax = Math.max(Vx, Vy);
  const tu = Vmax/1000/dx, tlim = .07*p.fc28/1.5;
  // flèche
  const f1 = e/lx >= Mtx/(20*M0x) - 1e-9, rho = bx.A/(100*dx*100), f2 = rho <= 2/fe + 1e-12;
  // chapeaux
  const lsC = bC ? M.lsk*bC.d/1000 : 0, lsR = M.lsk*bR.d/1000;
  const lC = bC ? up(Math.max(lsC, .25*lx), .05) : 0, lR = up(Math.max(lsR, .20*lx), .05);
  // nomenclature
  const anc = .10, rows = []; let rep = 1;
  const nX = Math.floor((ly - .10)/(bx.sp/100)) + 1, nY = Math.floor((lx - .10)/(by.sp/100)) + 1;
  rows.push({rep:rep++, n:nX, d:bx.d, des:'Nappe inférieure, sens x (portée lx)', forme:'Barre droite', lu:lx + 2*anc});
  rows.push({rep:rep++, n:nY, d:by.d, des:one ? 'Aciers de répartition, sens y' : 'Nappe inférieure, sens y (portée ly)', forme:'Barre droite', lu:ly + 2*anc});
  const edgeRows = [['x1', ly], ['x2', ly], ['y1', lx], ['y2', lx]];
  edgeRows.forEach(([k, len]) => { const isC = ed[k] === 'cont', bb = isC ? bC : bR; if(!bb) return; const n = Math.floor((len - .10)/(bb.sp/100)) + 1;
    rows.push({rep:rep++, n, d:bb.d, des:`Chapeaux, bord ${k[0] === 'x' ? 'long' : 'court'} n°${k[1]} (${isC ? 'continu' : 'rive'})`, forme:isC ? 'Chapeau droit à retours (de part et d\'autre de l\'appui)' : 'Chapeau en L ancré dans la poutre', lu:isC ? 2*lC + .20 + 2*(e - .04) : lR + .20 + .15 + (e - .04)}); });
  const kg = nomKg(rows), vol = lx*ly*e;
  return {lx, ly, swap, e, al, one, M, fe, ed, nCont, div, emin, couches, gpp, G, U, Q, pu, ps, mx, my, M0x, M0y, ax1, ax2, ay1, ay2, kx, ky, Mtx, Mty0, Mty, dx, dy, fx, fy, MaC, MaR, faC, faR, r0, Axmin, Aymin, Ax, Ay, AaC, AaR, stx, sty, bx, by, bC, bR, Vx, Vy, Vmax, tu, tlim, f1, f2, rho, lsC, lsR, lC, lR, rows, kg, vol};
}
/* ---- figures de la dalle (le panneau est dessiné avec ly à l'horizontale) ---- */
function dallePlan(X){
  const W = 540, H = 370, k = Math.min(330/X.ly, 200/X.lx), w = X.ly*k, h = X.lx*k, x0 = 96, y0 = 64;
  let g = '';
  const edge = (cont, x1, y1, x2, y2, side) => {
    if(cont){ const dx = side === 'l' ? -32 : side === 'r' ? 32 : 0, dy = side === 't' ? -28 : side === 'b' ? 28 : 0;
      return Pth(`M${x1},${y1} L${x1 + dx},${y1 + dy} L${x2 + dx},${y2 + dy} L${x2},${y2}`, {f:'#F1EEE8', c:C.GR, w:1, d:'4 3'}) + Ln(x1, y1, x2, y2, {c:C.INK, w:2, d:'7 4'}); }
    return Ln(x1, y1, x2, y2, {c:C.INK, w:6}); };
  g += Rc(x0, y0, w, h, {f:'#FDEEE2', c:'none'});
  g += edge(X.ed.x1 === 'cont', x0, y0, x0 + w, y0, 't') + edge(X.ed.x2 === 'cont', x0, y0 + h, x0 + w, y0 + h, 'b') + edge(X.ed.y1 === 'cont', x0, y0, x0, y0 + h, 'l') + edge(X.ed.y2 === 'cont', x0 + w, y0, x0 + w, y0 + h, 'r');
  const cx = x0 + w/2, cy = y0 + h/2;
  g += Ln(cx, y0 + 14, cx, y0 + h - 14, {c:C.OR, w:2.4, m:'so', ms:'so'}) + T(cx + 8, cy - 4, 'sens x (lx)', {s:11, b:1, c:'#C95F18'});
  if(!X.one) g += Ln(x0 + 16, cy + 18, x0 + w - 16, cy + 18, {c:C.BL, w:2, m:'sb', ms:'sb'}) + T(x0 + 20, cy + 34, 'sens y (ly)', {s:11, b:1, c:C.BL});
  g += T(cx, y0 - 36, 'bord long n°1', {a:'middle', s:10, c:C.GR}) + T(cx, y0 + h + 44, 'bord long n°2', {a:'middle', s:10, c:C.GR});
  g += T(x0 - 42, cy, 'bord court n°1', {a:'middle', s:10, c:C.GR, r:-90}) + T(x0 + w + 44, cy, 'bord court n°2', {a:'middle', s:10, c:C.GR, r:-90});
  g += Dim(x0, y0 + h + 62, x0 + w, y0 + h + 62, `ly = ${nf(X.ly, 2)} m`) + Dim(x0 + w + 74, y0, x0 + w + 74, y0 + h, `lx = ${nf(X.lx, 2)} m`);
  g += T(10, H - 22, `α = lx/ly = ${nf(X.al, 3)} : ${X.one ? 'la dalle porte dans un seul sens (x)' : 'la dalle porte dans les deux sens'}`, {s:11.5, b:1, c:C.INK});
  g += T(10, H - 6, 'Trait épais : poutre de rive · tirets : continuité avec le panneau voisin', {s:10.5, c:C.GR});
  return SV(W, H, g, 'Panneau de dalle');
}
function dalleFerr(X){
  const W = 560, k = Math.min(400/X.ly, 230/X.lx), w = X.ly*k, h = X.lx*k, x0 = 50, y0 = 20, H = y0 + h + 122;
  let g = Rc(x0, y0, w, h, {f:'#F7F4EE', c:C.INK, w:1.6});
  // nappe inférieure : barres représentatives dans une bande centrale (repère de répétition)
  const nx = 9; for(let i = 0; i < nx; i++){ const x = x0 + w*.32 + i*w*.36/(nx - 1); g += Ln(x, y0 + 5, x, y0 + h - 5, {c:C.OR, w:1.8}); }
  g += Ln(x0 + w*.32, y0 + h*.5, x0 + w*.68, y0 + h*.5, {c:'#C95F18', w:1, m:'so', ms:'so'});
  const ny = 7; for(let j = 0; j < ny; j++){ const y = y0 + h*.30 + j*h*.40/(ny - 1); g += Ln(x0 + 5, y, x0 + w - 5, y, {c:C.BL, w:1.4, d:'8 4'}); }
  // chapeaux le long des appuis
  const chap = (key, x1, y1, x2, y2, nrm) => { const isC = X.ed[key] === 'cont', bb = isC ? X.bC : X.bR; if(!bb) return ''; const L = (isC ? X.lC : X.lR)*k; let o = '';
    for(let i = 1; i <= 7; i++){ const t = .12 + (i - 1)*.76/6, x = x1 + (x2 - x1)*t, y = y1 + (y2 - y1)*t; o += Ln(x, y, x + nrm[0]*L, y + nrm[1]*L, {c:C.RD, w:2}); }
    return o; };
  g += chap('x1', x0, y0, x0 + w, y0, [0, 1]) + chap('x2', x0, y0 + h, x0 + w, y0 + h, [0, -1]) + chap('y1', x0, y0, x0, y0 + h, [1, 0]) + chap('y2', x0 + w, y0, x0 + w, y0 + h, [-1, 0]);
  g += Dim(x0, y0 + h + 18, x0 + w, y0 + h + 18, `ly = ${nf(X.ly, 2)} m`) + Dim(x0 + w + 20, y0, x0 + w + 20, y0 + h, `lx = ${nf(X.lx, 2)} m`);
  const yt = y0 + h + 46;
  g += Ln(x0, yt - 4, x0 + 22, yt - 4, {c:C.OR, w:2.4}) + T(x0 + 30, yt, `Nappe inférieure, sens x (en dessous) : HA${X.bx.d} tous les ${nf(X.bx.sp)} cm`, {s:11, b:1, c:'#C95F18'});
  g += Ln(x0, yt + 14, x0 + 22, yt + 14, {c:C.BL, w:2, d:'8 4'}) + T(x0 + 30, yt + 18, `${X.one ? 'Aciers de répartition, sens y' : 'Nappe inférieure, sens y'} (au-dessus) : HA${X.by.d} tous les ${nf(X.by.sp)} cm`, {s:11, b:1, c:C.BL});
  g += Ln(x0, yt + 32, x0 + 22, yt + 32, {c:C.RD, w:2.4}) + T(x0 + 30, yt + 36, `Chapeaux (nappe supérieure) :${X.bC ? ` HA${X.bC.d}/${nf(X.bC.sp)} sur ${nf(X.lC*100)} cm aux appuis continus ;` : ''}`, {s:11, b:1, c:C.RD}) + T(x0 + 30, yt + 52, `HA${X.bR.d}/${nf(X.bR.sp)} sur ${nf(X.lR*100)} cm aux rives (longueurs mesurées depuis le nu de l'appui)`, {s:11, b:1, c:C.RD});
  return SV(W, H, g, 'Plan de ferraillage de la dalle');
}
function dalleCoupe(X){
  const W = 560, H = 220, k = 430/X.lx, x0 = 64, y0 = 52, th = Math.max(26, X.e*k*1.6);
  let g = '';
  g += Rc(x0 - 30, y0, 30, th + 46, {f:'#E9E4DA', w:1.2}) + Rc(x0 + X.lx*k, y0, 30, th + 46, {f:'#E9E4DA', w:1.2});
  g += Rc(x0 - 30, y0, X.lx*k + 60, th, {f:C.CO, w:1.6});
  g += Ln(x0 - 22, y0 + th - 7, x0 + X.lx*k + 22, y0 + th - 7, {c:C.OR, w:2.6});
  const ny = Math.min(30, Math.round(X.lx/(X.by.sp/100)));
  for(let j = 0; j <= ny; j++){ const x = x0 + j*X.lx*k/ny; g += Ci(x, y0 + th - 12, 2.4, {f:C.BL, c:C.BL}); }
  const L1 = (X.ed.x1 === 'cont' ? X.lC : X.lR)*k, L2 = (X.ed.x2 === 'cont' ? X.lC : X.lR)*k;
  g += Ln(x0 - 24, y0 + 6, x0 + L1, y0 + 6, {c:C.RD, w:2.6}) + Ln(x0 - 24, y0 + 6, x0 - 24, y0 + th - 4, {c:C.RD, w:2.4});
  g += Ln(x0 + X.lx*k - L2, y0 + 6, x0 + X.lx*k + 24, y0 + 6, {c:C.RD, w:2.6}) + Ln(x0 + X.lx*k + 24, y0 + 6, x0 + X.lx*k + 24, y0 + th - 4, {c:C.RD, w:2.4});
  g += Dim(x0, y0 - 14, x0 + L1, y0 - 14, nf(L1/k*100) + ' cm') + Dim(x0 + X.lx*k - L2, y0 - 14, x0 + X.lx*k, y0 - 14, nf(L2/k*100) + ' cm');
  g += Dim(x0, y0 + th + 62, x0 + X.lx*k, y0 + th + 62, `lx = ${nf(X.lx, 2)} m`);
  g += T(10, H - 22, `e = ${nf(X.e*100)} cm · aciers du sens x en bas (orange), du sens y au-dessus (points bleus)`, {s:10.5, c:C.INK});
  g += T(10, H - 6, 'Chapeaux en nappe supérieure (rouge), ancrés dans les poutres de rive', {s:10.5, c:C.INK});
  return SV(W, H, g, 'Coupe de la dalle dans le sens x');
}
function dalleSolve(p){
  const X = dalleCalc(p), st = [], M = X.M;
  const edTxt = k => X.ed[k] === 'cont' ? 'continu' : 'rive';
  st.push({t:'Le panneau et son mode de fonctionnement', q:'Calculez α = lx/ly et dites si la dalle porte dans un sens ou dans deux sens.',
    md:`Panneau de **${nf(X.lx, 2)} × ${nf(X.ly, 2)} m** (portées entre nus d'appuis)${X.swap ? ' — on a nommé lx la plus petite portée' : ''}. Bords longs : ${edTxt('x1')} / ${edTxt('x2')} ; bords courts : ${edTxt('y1')} / ${edTxt('y2')}.\n$$ α = lx / ly = ${nf(X.lx, 2)} / ${nf(X.ly, 2)} = ${nf(X.al, 3)}\n${X.one ? '**α < 0,4** : la dalle **porte dans un seul sens**, celui de la petite portée lx. On la calcule comme une poutre de 1 m de largeur ; dans l\'autre sens, on ne met que des **aciers de répartition**.' : '**0,4 ≤ α ≤ 1** : la dalle **porte dans les deux sens** ; la charge se partage entre les deux directions, davantage dans le sens de la petite portée.'}`,
    ask:[{l:'α', v:X.al, d:3}, {l:'Fonctionnement', o:['Porte dans un seul sens', 'Porte dans les deux sens'], v:X.one ? 0 : 1}],
    hint:'Si α est inférieur à 0,4, la dalle est très allongée : presque toute la charge part vers les grands côtés.', html:fig(dallePlan(X))});
  st.push({t:'Épaisseur de la dalle', q:'Calculez l\'épaisseur minimale conseillée (en cm).',
    md:`Règle de pré-dimensionnement (rigidité, flèche) : dalle ${X.one ? 'portant dans un sens' : 'portant dans deux sens'}, panneau ${X.ed.x1 === 'cont' || X.ed.x2 === 'cont' ? 'continu' : 'isolé ou de rive'} :\n$$ e ≥ lx / ${X.div} = ${nf(X.lx*100, 0)} / ${X.div} = ${nf(X.lx*100/X.div, 1)} cm\nOn ne descend pas sous **12 cm** (résistance au feu 1 h, isolation phonique minimale ; 15 à 16 cm entre logements).\n$$ e min = ${nf(X.emin, 1)} cm\n\nÉpaisseur retenue : **e = ${nf(X.e*100)} cm** ${X.e*100 >= X.emin - 1e-9 ? '✓' : '✗ : dalle trop mince, augmentez e'}.`,
    ask:[{l:'e min', v:X.emin, u:'cm', tol:.03}], hint:`Divisez la petite portée (en cm) par ${X.div}.`});
  st.push({t:'Charges permanentes (couche par couche)', q:'Calculez la charge permanente totale G.',
    md:mdT(['Couche', 'Calcul', 'Charge (kN/m²)'], [['Dalle en béton armé', `25 × ${nf(X.e, 2)}`, nf(X.gpp, 3)]].concat(X.couches.map(r => [r.n, r.w > 0 ? 'forfait' : `${nf(r.gam)} × ${nf(r.ep/100, 3)}`, nf(r.g, 3)])).concat([['**Total G**', '', `**${nf(X.G, 3)}**`]])),
    ask:[{l:'G', v:X.G, u:'kN/m²'}], hint:'Chaque couche pèse poids volumique (kN/m³) × épaisseur (m). Le béton armé pèse 25 kN/m³.'});
  st.push({t:'Charges d\'exploitation et combinaisons', md:`Usage : **${X.U[0] === 'autre' ? 'charge donnée' : X.U[1]}** → Q = **${nf(X.Q, 2)} kN/m²**.\n$$ pu = 1,35 G + 1,5 Q = 1,35 × ${nf(X.G, 3)} + 1,5 × ${nf(X.Q, 2)} = ${nf(X.pu, 3)} kN/m²   (ELU)\n$$ pser = G + Q = ${nf(X.ps, 3)} kN/m²   (ELS)`,
    ask:[{l:'pu', v:X.pu, u:'kN/m²'}, {l:'pser', v:X.ps, u:'kN/m²'}], hint:'Même combinaison que pour les poutres : 1,35 G + 1,5 Q.'});
  st.push({t:'Moments isostatiques', md:X.one ? `La dalle porte dans le sens x comme une poutre de 1 m de largeur :\n$$ M0x = pu lx²/8 = ${nf(X.pu, 3)} × ${nf(X.lx, 2)}²/8 = ${nf(X.M0x, 3)} kN·m/m` :
      `Coefficients du BAEL (annexe E3, ν = 0 à l'ELU) :\n$$ μx = 1 / (8 (1 + 2,4 α³)) = ${nf(X.mx, 4)}\n$$ μy = α³ (1,9 − 0,9 α) = ${nf(X.my, 4)}\n$$ M0x = μx pu lx² = ${nf(X.mx, 4)} × ${nf(X.pu, 3)} × ${nf(X.lx, 2)}² = ${nf(X.M0x, 3)} kN·m/m\n$$ M0y = μy M0x = ${nf(X.M0y, 3)} kN·m/m\n\nCe sont les moments au centre d'un panneau **simplement appuyé** sur ses quatre côtés.`,
    ask:X.one ? [{l:'M0x', v:X.M0x, u:'kN·m/m'}] : [{l:'μx', v:X.mx, d:4}, {l:'M0x', v:X.M0x, u:'kN·m/m'}, {l:'M0y', v:X.M0y, u:'kN·m/m'}],
    hint:X.one ? 'Comme une poutre sur deux appuis : q L²/8.' : 'Calculez d\'abord α³, puis μx et μy, puis M0x = μx × pu × lx².'});
  st.push({t:'Moments en travée et sur appuis', q:'Calculez le moment en travée dans le sens x.',
    md:`La continuité réduit le moment en travée et crée des moments **négatifs** sur les appuis. Moments sur appuis (on prend la même base M0x dans les deux sens) : **0,5 M0x** sur un appui continu, **0,3 M0x** sur un appui de rive solidaire d'une poutre.\n\n` +
      mdT(['Appui', 'Type', 'Moment (kN·m/m)'], [['Bord long n°1', edTxt('x1'), nf(-X.ax1, 3)], ['Bord long n°2', edTxt('x2'), nf(-X.ax2, 3)], ['Bord court n°1', edTxt('y1'), nf(-X.ay1, 3)], ['Bord court n°2', edTxt('y2'), nf(-X.ay2, 3)]]) +
      `\n\nEn travée, il faut respecter $$ Mt + (Mw + Me)/2 ≥ 1,25 M0  avec  0,75 M0 ≤ Mt ≤ M0\n$$ Mtx = ${nf(X.kx, 3)} × M0x = ${nf(X.Mtx, 3)} kN·m/m` + (X.one ? '\nSens y : aciers de répartition seulement.' : `\n$$ Mty = max(${nf(X.ky, 3)} × M0y ; Mtx/4) = ${nf(X.Mty, 3)} kN·m/m`),
    ask:[{l:'Mtx', v:X.Mtx, u:'kN·m/m'}].concat(X.one ? [] : [{l:'Mty', v:X.Mty, u:'kN·m/m'}]),
    hint:'Mt = (1,25 − moyenne des coefficients d\'appui) × M0, sans descendre sous 0,75 M0 ni dépasser M0.'});
  st.push({t:'Aciers en travée', q:'Calculez la section d\'acier par mètre dans le sens x.',
    md:`Section de calcul : bande de **b = 1 m**. Hauteurs utiles (enrobage ${nf(+p.c)} cm, barres de 10 mm) : $$ dx = e − c − Ø/2 = ${nf(X.dx*100, 1)} cm     dy = dx − Ø = ${nf(X.dy*100, 1)} cm\n\n**Sens x** :\n$$ μ = Mtx/(b dx² f_bu) = ${nf(X.Mtx/1000, 5)}/(1 × ${nf(X.dx, 3)}² × ${nf(M.fbu, 2)}) = ${nf(X.fx.mu, 4)}\n$$ α = 1,25 (1 − √(1 − 2μ)) = ${nf(X.fx.al, 4)}     z = dx (1 − 0,4 α) = ${nf(X.fx.z, 4)} m\n$$ Ax = Mtx/(z f_su) = ${nf(X.fx.As, 2)} cm²/m` +
      (X.one ? `\n\n**Sens y** : aciers de répartition $$ Ay ≥ Ax/4 = ${nf(X.Ax/4, 2)} cm²/m` : `\n\n**Sens y** :\n$$ μ = ${nf(X.fy.mu, 4)}     Ay = Mty/(z f_su) = ${nf(X.fy.As, 2)} cm²/m`),
    ask:[{l:'μx', v:X.fx.mu, d:4}, {l:'Ax calcul', v:X.fx.As, u:'cm²/m'}], hint:'Même méthode que pour une poutre, avec b = 1 m : μ, puis α, puis z, puis A = M/(z f_su).'});
  st.push({t:'Aciers sur appuis (chapeaux)', md:(X.faC ? `**Appuis continus** : $$ Ma = ${nf(X.MaC, 3)} kN·m/m  →  μ = ${nf(X.faC.mu, 4)}  →  Aa = ${nf(X.faC.As, 2)} cm²/m\n` : '') +
      `**Appuis de rive** : $$ Ma = 0,3 M0x = ${nf(X.MaR, 3)} kN·m/m  →  μ = ${nf(X.faR.mu, 4)}  →  Aa = ${nf(X.faR.As, 2)} cm²/m\n\nLes chapeaux sont placés en **nappe supérieure**, perpendiculairement aux appuis.`,
    ask:[{l:'Aa (rive)', v:X.faR.As, u:'cm²/m'}].concat(X.faC ? [{l:'Aa (continu)', v:X.faC.As, u:'cm²/m'}] : []), hint:'Le moment sur appui se calcule comme un moment de travée, avec la même hauteur utile dx.'});
  st.push({t:'Sections minimales, espacements et choix des barres', q:'Calculez la section minimale dans le sens x.',
    md:`Non-fragilité (ρ0 = ${nf(X.r0, 4)} pour FeE${X.fe}) : $$ Ax min = ρ0 (3 − α)/2 × b × e = ${nf(X.Axmin, 2)} cm²/m     Ay min = ρ0 × b × e = ${nf(X.Aymin, 2)} cm²/m\nEspacements maximaux (fissuration peu préjudiciable) : **${nf(X.stx)} cm** dans le sens x (min(3e ; 33 cm)), **${nf(X.sty)} cm** dans le sens y (min(4e ; 45 cm)).\n\n` +
      mdT(['Position', 'A calcul (cm²/m)', 'A minimale', 'A retenue', 'Choix', 'A réelle (cm²/m)'], [['Travée, sens x', nf(X.fx.As, 2), nf(X.Axmin, 2), nf(X.Ax, 2), `HA${X.bx.d} e = ${nf(X.bx.sp)} cm`, nf(X.bx.A, 2)],
        ['Travée, sens y', X.one ? 'répartition' : nf(X.fy.As, 2), nf(Math.max(X.Aymin, X.Ax/4), 2), nf(X.Ay, 2), `HA${X.by.d} e = ${nf(X.by.sp)} cm`, nf(X.by.A, 2)]]
        .concat(X.bC ? [['Chapeaux continus', nf(X.faC.As, 2), nf(X.Aymin, 2), nf(X.AaC, 2), `HA${X.bC.d} e = ${nf(X.bC.sp)} cm`, nf(X.bC.A, 2)]] : [])
        .concat([['Chapeaux de rive', nf(X.faR.As, 2), nf(X.Aymin, 2), nf(X.AaR, 2), `HA${X.bR.d} e = ${nf(X.bR.sp)} cm`, nf(X.bR.A, 2)]])) +
      `\n\nUne section par mètre se lit ainsi : HA${X.bx.d} tous les ${nf(X.bx.sp)} cm = ${nf(100/X.bx.sp, 2)} barres par mètre × ${nf(sec(X.bx.d), 3)} cm² = ${nf(X.bx.A, 2)} cm²/m. Les barres du sens x (le plus sollicité) sont placées **en dessous**.`,
    ask:[{l:'Ax min', v:X.Axmin, u:'cm²/m'}], hint:'ρ0 vaut 0,0006 pour FeE500 (0,0008 pour FeE400) ; b × e en cm² pour b = 100 cm.'});
  st.push({t:'Effort tranchant', q:'Calculez la contrainte de cisaillement τu.',
    md:(X.one ? `$$ Vu = pu lx/2 = ${nf(X.Vx, 3)} kN/m` : `Effort tranchant par mètre sur les grands côtés et sur les petits côtés :\n$$ Vx = pu lx ly/(2 ly + lx) = ${nf(X.Vx, 3)} kN/m     Vy = pu lx/3 = ${nf(X.Vy, 3)} kN/m`) +
      `\n$$ τu = Vmax/(b dx) = ${nf(X.Vmax/1000, 5)}/(1 × ${nf(X.dx, 3)}) = ${nf(X.tu, 3)} MPa\n$$ τu ${X.tu <= X.tlim ? '≤' : '>'} 0,07 fc28/γb = ${nf(X.tlim, 3)} MPa → ${X.tu <= X.tlim ? '**pas d\'armatures d\'effort tranchant** (dalle bétonnée sans reprise) ✓' : '**armatures transversales nécessaires** ou dalle plus épaisse ✗'}`,
    ask:[{l:'τu', v:X.tu, u:'MPa', tol:.03}], hint:'Vu en MN, b = 1 m et dx en m : la contrainte est en MPa.'});
  st.push({t:'Vérification de la flèche', md:`Le BAEL dispense du calcul de la flèche si les deux conditions suivantes sont remplies :\n$$ e/lx = ${nf(X.e/X.lx, 4)} ${X.f1 ? '≥' : '<'} Mtx/(20 M0x) = ${nf(X.Mtx/(20*X.M0x), 4)} ${X.f1 ? '✓' : '✗'}\n$$ A/(b dx) = ${nf(X.rho, 5)} ${X.f2 ? '≤' : '>'} 2/fe = ${nf(2/X.fe, 5)} ${X.f2 ? '✓' : '✗'}\n\n${X.f1 && X.f2 ? '→ **Flèche vérifiée** sans calcul.' : '→ Une condition n\'est pas remplie : il faut **calculer la flèche** (inertie fissurée) ou **augmenter l\'épaisseur**.'}`,
    ask:[{l:'Flèche à calculer ?', o:['Non, conditions remplies', 'Oui, calcul nécessaire'], v:X.f1 && X.f2 ? 0 : 1}], hint:'Comparez l\'élancement e/lx au rapport des moments, puis le pourcentage d\'acier à 2/fe.'});
  st.push({t:'Longueurs des chapeaux et arrêt des barres', md:`Longueur de scellement : $$ ls = ${nf(M.lsk, 1)} Ø\n- **Appuis continus** : chapeaux de part et d'autre de l'appui sur $$ max(ls ; lx/4) = ${X.bC ? nf(X.lC*100) + ' cm' : '— (pas d\'appui continu)'}\n- **Appuis de rive** : chapeaux sur $$ max(ls ; 0,2 lx) = ${nf(X.lR*100)} cm  depuis le nu, ancrés par un retour dans la poutre de rive.\n\nLes barres de la nappe inférieure vont d'un appui à l'autre et pénètrent d'au moins 10 cm dans les poutres (une barre sur deux peut s'arrêter à 0,1 lx de l'appui sur les grandes dalles).`});
  st.push({t:'Plan de ferraillage', md:`Plan du panneau : nappe inférieure dans les deux sens, chapeaux le long des appuis, puis coupe dans le sens de la petite portée.`, html:fig(dalleFerr(X)) + fig(dalleCoupe(X))});
  st.push({t:'Nomenclature et quantités', q:'Calculez le poids d\'acier du panneau.',
    md:nomTable(X.rows) + `\n\n$$ Poids d'acier = ${nf(X.kg, 1)} kg  (+ 5 % ≈ ${nf(X.kg*1.05, 0)} kg)\n$$ Béton = ${nf(X.lx, 2)} × ${nf(X.ly, 2)} × ${nf(X.e, 2)} = ${nf(X.vol, 3)} m³   →   ${nf(X.kg/(X.lx*X.ly), 1)} kg/m² ; ${nf(X.kg/X.vol, 0)} kg/m³`,
    ask:[{l:'Poids d\'acier', v:X.kg, u:'kg', tol:.05}], hint:'Nombre de barres d\'une nappe = longueur à couvrir / espacement + 1.'});
  st.push({t:'Mise en œuvre sur le chantier', md:`1. **Coffrage** (contreplaqué ou bacs) sur étais, réglé de niveau, avec une légère **contre-flèche** sur les grandes portées ; huiler.\n2. **Nappe inférieure** : barres du sens x en premier (en dessous), puis celles du sens y, ligaturées une intersection sur deux, posées sur des **cales** de ${nf(+p.c)} cm.\n3. **Chapeaux** en nappe supérieure, tenus par des **chaises** (distanciers) pour qu'ils restent en haut pendant le bétonnage : un chapeau écrasé en fond de dalle ne sert à rien.\n4. **Réservations** (gaines, trémies) mises en place avant le coulage.\n5. **Bétonnage** en une seule fois, vibré, surfacé à la règle ; **cure** (arrosage) au moins 7 jours.\n6. **Décintrement** : pas avant 21 à 28 jours pour les dalles de portée courante (garder des étais de sécurité).`});
  const bilan = `Dalle **${nf(X.lx, 2)} × ${nf(X.ly, 2)} m**, e = ${nf(X.e*100)} cm (α = ${nf(X.al, 2)}, ${X.one ? 'porte dans un sens' : 'porte dans deux sens'}) ; G = ${nf(X.G, 2)}, Q = ${nf(X.Q, 2)} kN/m², pu = ${nf(X.pu, 2)} kN/m² ; Mtx = ${nf(X.Mtx, 2)}${X.one ? '' : `, Mty = ${nf(X.Mty, 2)}`} kN·m/m → nappe inférieure **HA${X.bx.d}/${nf(X.bx.sp)}** (x) et **HA${X.by.d}/${nf(X.by.sp)}** (y)${X.bC ? `, chapeaux **HA${X.bC.d}/${nf(X.bC.sp)}** (continus)` : ''} et **HA${X.bR.d}/${nf(X.bR.sp)}** (rives) ; ${nf(X.kg*1.05, 0)} kg d'acier.`;
  return {steps:st, bilan};
}

/* =====================================================================
   3. FONDATION (technologie) : semelle isolée ou filante
   ===================================================================== */
const FISS = [['FP', 'Préjudiciable (fondations courantes)'], ['FPP', 'Peu préjudiciable (sol sec)'], ['FTP', 'Très préjudiciable (eau agressive)']];
const kFiss = f => f === 'FTP' ? 1.5 : f === 'FP' ? 1.1 : 1;
function semPick(As, len){
  for(const d of [10, 12, 14, 16, 20]){ const s = sec(d), n = Math.max(Math.ceil(As/s - 1e-9), Math.ceil((len - .10)/.25 - 1e-9) + 1, 3); const esp = (len - .10)/(n - 1); if(esp >= .10 - 1e-9) return {n, d, A:n*s, esp}; }
  const n = Math.ceil(As/sec(20)); return {n, d:20, A:n*sec(20), esp:(len - .10)/(n - 1)};
}
function fondCalc(p){
  const fil = p.type === 'filante';
  need(p, [['G', 'Charge permanente G', 1], ['Q', 'Charge d\'exploitation Q', 0], ['sig', 'Contrainte admissible du sol', .03, 1], ['D', 'Profondeur d\'assise', .4, 4], ['fc28', 'fc28', 16, 60]]);
  if(fil) need(p, [['em', 'Épaisseur du mur', 10, 60]]); else need(p, [['a', 'Côté a du poteau', 15, 100], ['b', 'Côté b du poteau', 15, 150]]);
  const M = BA().mat(p), fe = +p.fe || 500, fsu = fe/1.15, kf = kFiss(p.fiss), D = +p.D, gT = 18;
  const Ns = +p.G + +p.Q, Nu = 1.35*p.G + 1.5*p.Q, sig = p.sig*1000, qnet = sig - 20*D;
  if(qnet <= 20) throw new Err('La contrainte du sol est trop faible pour cette profondeur : une fondation superficielle ne convient pas (radier ou pieux).');
  const X = {fil, M, fe, fsu, kf, D, gT, Ns, Nu, sig, qnet, fiss:p.fiss};
  if(fil){
    const em = p.em/100; X.em = em;
    X.Breq = Ns/qnet; let B = Math.max(.40, em + .20, up(X.Breq, .05)), h, d, sg, Pt, it = 0;
    for(;;){ d = (B - em)/4; h = Math.max(.20, up(d + .05, .05)); d = h - .05; if(h > D - .05) throw new Err('La semelle serait plus haute que la profondeur d\'assise : augmentez la profondeur D.');
      Pt = Ns + 25*B*h + gT*(B - em)*(D - h) + 22*em*(D - h); sg = Pt/B; if(sg <= sig + 1e-9 || it++ > 60) break; B = +(B + .05).toFixed(2); }
    Object.assign(X, {B, h, d, sg, Pt, ppS:25*B*h, ter:gT*(B - em)*(D - h), mur:22*em*(D - h)});
    X.dmin = (B - em)/4;
    X.As = Nu/1000*(B - em)/(8*d*fsu)*1e4*kf; // cm² par mètre de semelle
    const t = [10, 12, 14].map(dd => { const s = sec(dd), sp = [25, 20, 15, 12.5, 10].find(x => s*100/x >= X.As - 1e-9); return sp ? {d:dd, sp, A:s*100/sp} : null; }).find(Boolean) || {d:14, sp:10, A:sec(14)*10};
    X.bt = t; X.Ar = Math.max(X.As*B/4, 3*sec(10)); const dr = X.Ar > 6*sec(10) ? 12 : 10; X.br = {n:Math.max(3, Math.ceil(X.Ar/sec(dr) - 1e-9)), d:dr}; X.br.A = X.br.n*sec(dr);
    X.ls = M.lsk*t.d/1000; X.crochet = X.ls > B/4;
    const nT = Math.round(100/t.sp), lt = B - .10 + (X.crochet ? 2*.10 : 0);
    X.rows = [{rep:1, n:nT, d:t.d, des:'Aciers transversaux (par mètre de semelle)', forme:X.crochet ? 'Barre droite à crochets' : 'Barre droite', lu:lt}, {rep:2, n:X.br.n, d:X.br.d, des:'Aciers de répartition (filants, par mètre)', forme:'Barre droite (recouvrement 50 Ø)', lu:1}];
    X.kg = nomKg(X.rows);
    X.vFouille = (B + .40)*D; X.vProp = (B + .10)*.05; X.vBeton = B*h; X.vRemblai = X.vFouille - X.vProp - X.vBeton - em*(D - h);
    return X;
  }
  const a = p.a/100, b = p.b/100; X.a = a; X.b = b;
  X.Sreq = Ns/qnet;
  let A_ = Math.max(.60, a + .20, up(Math.sqrt(X.Sreq*a/b), .05)), B_ = Math.max(.60, b + .20, up(Math.sqrt(X.Sreq*b/a), .05)), h, d, sg, Pt, it = 0;
  X.A0 = Math.sqrt(X.Sreq*a/b); X.B0 = Math.sqrt(X.Sreq*b/a);
  for(;;){ d = Math.max((A_ - a)/4, (B_ - b)/4); h = Math.max(.25, up(d + .05, .05)); d = h - .05; if(h > D - .05) throw new Err('La semelle serait plus haute que la profondeur d\'assise : augmentez la profondeur D.');
    Pt = Ns + 25*A_*B_*h + gT*(A_*B_ - a*b)*(D - h) + 25*a*b*(D - h); sg = Pt/(A_*B_); if(sg <= sig + 1e-9 || it++ > 80) break; A_ = +(A_ + .05).toFixed(2); B_ = Math.max(B_, up(A_*b/a, .05)); }
  Object.assign(X, {A:A_, B:B_, h, d, sg, Pt, ppS:25*A_*B_*h, ter:gT*(A_*B_ - a*b)*(D - h), amorce:25*a*b*(D - h), dmin:Math.max((A_ - a)/4, (B_ - b)/4)});
  X.Ax = Nu/1000*(A_ - a)/(8*d*fsu)*1e4*kf; X.Ay = Nu/1000*(B_ - b)/(8*d*fsu)*1e4*kf;
  X.bx = semPick(X.Ax, B_); X.by = semPick(X.Ay, A_);
  X.ls = M.lsk*X.bx.d/1000; X.crochet = X.ls > A_/4; X.arret = X.ls <= A_/8;
  const nbp = +p.nbp || 4, dp = +p.dp || 12; X.nbp = nbp; X.dp = dp;
  X.lsP = M.lsk*dp/1000; X.lrP = up(.6*X.lsP, .05);
  X.lAtt = .20 + (h - .05 - .02) + (D - h) + X.lrP; // retour + traversée de la semelle + amorce + recouvrement
  const lx = A_ - .10 + (X.crochet ? 2*.12 : 0), ly = B_ - .10 + (X.crochet ? 2*.12 : 0);
  X.rows = [{rep:1, n:X.bx.n, d:X.bx.d, des:'Nappe inférieure, barres parallèles à A', forme:X.crochet ? 'Barre droite à crochets' : 'Barre droite', lu:lx},
    {rep:2, n:X.by.n, d:X.by.d, des:'Nappe inférieure, barres parallèles à B (au-dessus)', forme:X.crochet ? 'Barre droite à crochets' : 'Barre droite', lu:ly},
    {rep:3, n:nbp, d:dp, des:'Attentes du poteau', forme:'Barre en L (retour de 20 cm en pied)', lu:X.lAtt},
    {rep:4, n:3, d:6, des:'Cadres de maintien des attentes', forme:'Cadre fermé', lu:2*((a - .05) + (b - .05)) + .12}];
  X.kg = nomKg(X.rows);
  X.vFouille = (A_ + .40)*(B_ + .40)*D; X.vProp = (A_ + .10)*(B_ + .10)*.05; X.vBeton = A_*B_*h; X.vAmorce = a*b*(D - h); X.vRemblai = X.vFouille - X.vProp - X.vBeton - X.vAmorce;
  return X;
}
function fondCoupe(X){
  const W = 520, H = 330, wid = X.fil ? X.B : Math.max(X.A, X.B), k = Math.min(260/wid, 200/(X.D + .4)), cx = 210, yTN = 60, Y = z => yTN + z*k;
  let g = '';
  const fw = (wid + .40)*k;
  g += Rc(cx - fw/2, yTN, fw, X.D*k, {f:'#EDE6D8', c:C.GR, w:1, d:'5 3'});
  g += Rc(cx - fw/2 - 60, yTN - 4, 60, 4, {f:'url(#shh)', c:'none'}) + Rc(cx + fw/2, yTN - 4, 60, 4, {f:'url(#shh)', c:'none'}) + Ln(cx - fw/2 - 70, yTN, cx + fw/2 + 70, yTN, {c:C.INK, w:1.6});
  g += T(cx + fw/2 + 66, yTN - 8, 'TN', {a:'end', s:11, b:1});
  const sw = wid*k, top = X.D - X.h;
  g += Rc(cx - sw/2 - .05*k, Y(X.D), sw + .10*k, .05*k + 3, {f:'#C9C2B5', w:1}) + T(cx + sw/2 + 30, Y(X.D) + 18, 'béton de propreté 5 cm', {s:10, c:C.GR});
  g += Rc(cx - sw/2, Y(top), sw, X.h*k, {f:C.CO, w:1.8});
  const ew = (X.fil ? X.em : X.a)*k;
  g += Rc(cx - ew/2, Y(0) - 26, ew, top*k + 26, {f:X.fil ? '#E7D6C5' : '#E9E4DA', w:1.6});
  g += T(cx + ew/2 + 6, Y(top/2) + 4, X.fil ? 'mur de soubassement' : 'amorce du poteau', {s:10, c:C.GR});
  g += Ln(cx - sw/2 + 6, Y(X.D) - 8, cx + sw/2 - 6, Y(X.D) - 8, {c:C.OR, w:3});
  g += Dim(cx - sw/2, Y(X.D) + 30, cx + sw/2, Y(X.D) + 30, `${X.fil ? 'B' : 'A'} = ${nf(X.fil ? X.B : X.A, 2)} m`);
  g += Dim(cx - fw/2 - 30, yTN, cx - fw/2 - 30, Y(X.D), `D = ${nf(X.D, 2)} m`);
  g += Dim(cx + sw/2 + 20, Y(top), cx + sw/2 + 20, Y(X.D), `h = ${nf(X.h, 2)} m`);
  g += T(cx - fw/2 + 6, yTN + 16, 'remblai compacté', {s:10, c:C.GR});
  return SV(W, H, g, 'Coupe de la fondation');
}
function fondFerr(X){
  if(X.fil){
    const W = 540, H = 250, k = 300/X.B, x0 = 90, y0 = 170, h = Math.max(40, X.h*k);
    let g = Rc(x0, y0 - h, X.B*k, h, {f:C.CO, w:1.8}) + Rc(x0 + (X.B - X.em)*k/2, y0 - h - 70, X.em*k, 70, {f:'#E7D6C5', w:1.4});
    g += Ln(x0 + 6, y0 - 8, x0 + X.B*k - 6, y0 - 8, {c:C.OR, w:3}) + (X.crochet ? Ln(x0 + 6, y0 - 8, x0 + 6, y0 - 26, {c:C.OR, w:3}) + Ln(x0 + X.B*k - 6, y0 - 8, x0 + X.B*k - 6, y0 - 26, {c:C.OR, w:3}) : '');
    for(let i = 0; i < X.br.n; i++){ const x = x0 + 14 + i*(X.B*k - 28)/(X.br.n - 1); g += Ci(x, y0 - 15, 3.2, {f:C.BL, c:C.INK, w:.8}); }
    g += Dim(x0, y0 + 20, x0 + X.B*k, y0 + 20, `B = ${nf(X.B, 2)} m`) + Dim(x0 + X.B*k + 16, y0 - h, x0 + X.B*k + 16, y0, `h = ${nf(X.h, 2)} m`);
    g += T(10, H - 8, `Aciers transversaux HA${X.bt.d} e = ${nf(X.bt.sp)} cm (orange) · répartition ${X.br.n} HA${X.br.d} filants (bleu)`, {s:11, b:1, c:'#C95F18'});
    return SV(W, H, g, 'Ferraillage de la semelle filante');
  }
  const k = 200/Math.max(X.A, X.B), w = X.A*k, hh = X.B*k, x0 = 40, y0 = 40;
  let g = Rc(x0, y0, w, hh, {f:C.CO, w:2}) + Rc(x0 + (w - X.a*k)/2, y0 + (hh - X.b*k)/2, X.a*k, X.b*k, {f:'url(#shh)', w:1.6});
  const nA = Math.min(X.bx.n, 16), nB = Math.min(X.by.n, 16);
  for(let i = 0; i < nA; i++){ const y = y0 + 6 + i*(hh - 12)/Math.max(1, nA - 1); g += Ln(x0 + 5, y, x0 + w - 5, y, {c:C.OR, w:1.4}); }
  for(let i = 0; i < nB; i++){ const x = x0 + 6 + i*(w - 12)/Math.max(1, nB - 1); g += Ln(x, y0 + 5, x, y0 + hh - 5, {c:C.BL, w:1.2}); }
  g += Dim(x0, y0 + hh + 16, x0 + w, y0 + hh + 16, 'A = ' + nf(X.A, 2) + ' m') + Dim(x0 + w + 16, y0, x0 + w + 16, y0 + hh, 'B = ' + nf(X.B, 2) + ' m');
  const x1 = 330, yb = 230, kk = 170/X.A, hS = X.h*kk;
  g += Rc(x1, yb - hS, X.A*kk, hS, {f:C.CO, w:2}) + Rc(x1 + (X.A - X.a)/2*kk, yb - hS - 80, X.a*kk, 80, {f:'#E9E4DA', w:1.6});
  g += Ln(x1 + 6, yb - 8, x1 + X.A*kk - 6, yb - 8, {c:C.OR, w:3}) + (X.crochet ? Ln(x1 + 6, yb - 8, x1 + 6, yb - 24, {c:C.OR, w:3}) + Ln(x1 + X.A*kk - 6, yb - 8, x1 + X.A*kk - 6, yb - 24, {c:C.OR, w:3}) : '');
  const xa = x1 + (X.A - X.a)/2*kk + 5, xb = x1 + (X.A + X.a)/2*kk - 5;
  [xa, xb].forEach((x, i) => { g += Pth(`M${x + (i ? -16 : 16)},${yb - 14} L${x},${yb - 14} L${x},${yb - hS - 80}`, {c:C.RD, w:2.4}); });
  g += Rc(x1 - 6, yb, X.A*kk + 12, 8, {f:'url(#shh)', c:'none'}) + T(x1 + X.A*kk/2, yb + 24, 'Coupe : h = ' + nf(X.h, 2) + ' m', {a:'middle', s:11});
  g += T(x1, 30, `Attentes ${X.nbp} HA${X.dp} (rouge)`, {s:11, b:1, c:C.RD}) + T(x0, 24, `${X.bx.n} HA${X.bx.d} // A (orange, en bas) · ${X.by.n} HA${X.by.d} // B (bleu)`, {s:11, b:1, c:'#C95F18'});
  return SV(560, Math.max(hh + 80, 260), g, 'Semelle : plan et coupe de ferraillage');
}
function fondSolve(p){
  const X = fondCalc(p), st = [], M = X.M, fil = X.fil;
  const U = fil ? ' kN/m' : ' kN';
  st.push({t:'Choix du type de fondation (technologie)', q:'Quel type de fondation superficielle convient ici ?',
    md:`Sol d'assise : **σsol = ${nf(+p.sig)} MPa** (${nf(p.sig*10, 2)} bars) à **${nf(X.D, 2)} m** de profondeur.\n- Un sol de bonne portance (σsol ≥ 0,1 MPa) à faible profondeur permet des **fondations superficielles** ;\n- sous un **poteau** isolé, on réalise une **semelle isolée** ; sous un **mur porteur** continu, une **semelle filante** ;\n- si les semelles deviennent très grandes (plus de la moitié de l'emprise) ou si le sol est mauvais, on passe au **radier** ou aux **pieux**.\n\nEnchaînement des couches (de bas en haut) : sol d'assise → **béton de propreté** (5 cm, dosé à 150 kg/m³) → **semelle** en béton armé → ${fil ? '**mur de soubassement** (agglos pleins ou béton)' : '**amorce du poteau**'} → **longrines** et dallage → **remblai** compacté.`,
    ask:[{l:'Type de fondation', o:['Semelle isolée', 'Semelle filante', 'Radier'], v:fil ? 1 : 0}], hint:'Un poteau transmet une charge concentrée ; un mur transmet une charge linéaire (par mètre).', html:fig(fondCoupe(X))});
  st.push({t:'Charges en pied', md:`$$ Nser = G + Q = ${nf(+p.G, 2)} + ${nf(+p.Q, 2)} = ${nf(X.Ns, 2)}${U}   (dimensionnement du coffrage)\n$$ Nu = 1,35 G + 1,5 Q = ${nf(X.Nu, 2)}${U}   (calcul des aciers)`,
    ask:[{l:'Nser', v:X.Ns, u:U.trim()}, {l:'Nu', v:X.Nu, u:U.trim()}], hint:'On dimensionne la surface avec les charges de service (G + Q), les aciers avec l\'ELU.'});
  st.push({t:fil ? 'Largeur de la semelle' : 'Surface et dimensions de la semelle', q:fil ? 'Calculez la largeur minimale B.' : 'Calculez la surface minimale puis les côtés A et B.',
    md:`La semelle et les terres au-dessus pèsent environ **20 kN/m³** × D : il reste pour la charge $$ q(net) = σsol − 20 D = ${nf(X.sig, 1)} − 20 × ${nf(X.D, 2)} = ${nf(X.qnet, 1)} kPa\n` +
      (fil ? `$$ B ≥ Nser / q(net) = ${nf(X.Ns, 2)} / ${nf(X.qnet, 1)} = ${nf(X.Breq, 3)} m\nArrondi aux 5 cm supérieurs (et au moins e + 20 cm) : **B = ${nf(X.B, 2)} m**.` :
        `$$ S ≥ Nser / q(net) = ${nf(X.Ns, 2)} / ${nf(X.qnet, 1)} = ${nf(X.Sreq, 3)} m²\nSemelle **homothétique** au poteau (A/B = a/b) : $$ A = √(S a/b) = ${nf(X.A0, 3)} m     B = √(S b/a) = ${nf(X.B0, 3)} m\nArrondis aux 5 cm supérieurs : **A × B = ${nf(X.A, 2)} × ${nf(X.B, 2)} m**${X.A > up(X.A0, .05) + 1e-9 || X.B > up(X.B0, .05) + 1e-9 ? ' (agrandie pour vérifier le sol, voir plus bas)' : ''}.`),
    ask:fil ? [{l:'B minimale', v:X.Breq, u:'m'}] : [{l:'S minimale', v:X.Sreq, u:'m²'}, {l:'A', v:X.A0, u:'m'}],
    hint:'Les kPa sont des kN/m² : divisez la charge (kN) par la contrainte nette (kN/m²) pour obtenir une surface en m².'});
  st.push({t:'Hauteur de la semelle', q:'Calculez la hauteur utile minimale d puis la hauteur h.',
    md:`Pour que la semelle soit **rigide** (méthode des bielles), la hauteur utile doit vérifier :\n` + (fil ? `$$ d ≥ (B − e)/4 = (${nf(X.B, 2)} − ${nf(X.em, 2)})/4 = ${nf(X.dmin, 3)} m` : `$$ d ≥ max((A − a)/4 ; (B − b)/4) = max(${nf((X.A - X.a)/4, 3)} ; ${nf((X.B - X.b)/4, 3)}) = ${nf(X.dmin, 3)} m`) +
      `\n$$ h = d + 5 cm  →  h = ${nf(X.h, 2)} m  (arrondi aux 5 cm, au moins ${fil ? '20' : '25'} cm), d = ${nf(X.d, 2)} m\n\nUne semelle rigide répartit la charge de façon presque uniforme sur le sol et n'a pas besoin de vérification au poinçonnement.`,
    ask:[{l:'d minimale', v:X.dmin, u:'m'}, {l:'h', v:X.h, u:'m', abs:.01}], hint:'Le débord de la semelle par rapport au poteau (ou au mur) divisé par 2, c\'est-à-dire (A − a)/4.'});
  st.push({t:'Vérification de la contrainte sur le sol', q:'Calculez la contrainte réelle sous la semelle.',
    md:(fil ? `Par mètre de semelle :\n- charge : ${nf(X.Ns, 2)} kN\n- semelle : 25 × ${nf(X.B, 2)} × ${nf(X.h, 2)} = ${nf(X.ppS, 2)} kN\n- terres sur les débords : 18 × (${nf(X.B, 2)} − ${nf(X.em, 2)}) × ${nf(X.D - X.h, 2)} = ${nf(X.ter, 2)} kN\n- mur enterré : 22 × ${nf(X.em, 2)} × ${nf(X.D - X.h, 2)} = ${nf(X.mur, 2)} kN\n$$ σ = ${nf(X.Pt, 2)} / ${nf(X.B, 2)} = ${nf(X.sg, 1)} kPa` :
      `- charge : ${nf(X.Ns, 2)} kN\n- semelle : 25 × ${nf(X.A, 2)} × ${nf(X.B, 2)} × ${nf(X.h, 2)} = ${nf(X.ppS, 2)} kN\n- terres au-dessus : 18 × (${nf(X.A*X.B, 3)} − ${nf(X.a*X.b, 3)}) × ${nf(X.D - X.h, 2)} = ${nf(X.ter, 2)} kN\n- amorce du poteau : 25 × ${nf(X.a, 2)} × ${nf(X.b, 2)} × ${nf(X.D - X.h, 2)} = ${nf(X.amorce, 2)} kN\n$$ σ = ${nf(X.Pt, 2)} / (${nf(X.A, 2)} × ${nf(X.B, 2)}) = ${nf(X.sg, 1)} kPa`) +
      ` ${X.sg <= X.sig + 1e-9 ? '≤' : '>'} σsol = ${nf(X.sig, 0)} kPa ${X.sg <= X.sig + 1e-9 ? '✓' : '✗'}`,
    ask:[{l:'σ sous la semelle', v:X.sg, u:'kPa', tol:.03}], hint:'Additionnez la charge, le poids de la semelle, des terres et de l\'amorce, puis divisez par la surface.'});
  st.push({t:'Aciers (méthode des bielles)', q:fil ? 'Calculez la section d\'aciers transversaux par mètre.' : 'Calculez les sections d\'aciers dans les deux sens.',
    md:`Les **bielles** de béton descendent du ${fil ? 'mur' : 'poteau'} vers le sol ; les aciers de la nappe inférieure reprennent la traction qui les retient.${X.kf > 1 ? ` Fissuration ${X.fiss === 'FTP' ? 'très préjudiciable : section majorée de 50 %' : 'préjudiciable : section majorée de 10 %'}.` : ''}\n` +
      (fil ? `$$ As = ${X.kf > 1 ? nf(X.kf, 1) + ' × ' : ''}Nu (B − e)/(8 d f_su) = ${X.kf > 1 ? nf(X.kf, 1) + ' × ' : ''}${nf(X.Nu/1000, 5)} × ${nf(X.B - X.em, 3)}/(8 × ${nf(X.d, 2)} × ${nf(X.fsu, 1)}) = ${nf(X.As, 2)} cm²/m\nAciers de **répartition** (filants, dans le sens du mur) : $$ Ar = As × B/4 = ${nf(X.As*X.B/4, 2)} cm²  (au moins 3 HA10)` :
        `$$ Ax = ${X.kf > 1 ? nf(X.kf, 1) + ' × ' : ''}Nu (A − a)/(8 d f_su) = ${X.kf > 1 ? nf(X.kf, 1) + ' × ' : ''}${nf(X.Nu/1000, 5)} × ${nf(X.A - X.a, 3)}/(8 × ${nf(X.d, 2)} × ${nf(X.fsu, 1)}) = ${nf(X.Ax, 2)} cm²   (barres parallèles à A)\n$$ Ay = ${X.kf > 1 ? nf(X.kf, 1) + ' × ' : ''}Nu (B − b)/(8 d f_su) = ${nf(X.Ay, 2)} cm²   (barres parallèles à B)`),
    ask:fil ? [{l:'As', v:X.As, u:'cm²/m'}] : [{l:'Ax', v:X.Ax, u:'cm²'}, {l:'Ay', v:X.Ay, u:'cm²'}], hint:'Nu en MN, longueurs en m, f_su en MPa : le résultat sort en m², × 10 000 pour des cm².'});
  st.push({t:'Choix des barres et ancrage', md:(fil ? `Aciers transversaux : **HA${X.bt.d} tous les ${nf(X.bt.sp)} cm** (${nf(X.bt.A, 2)} cm²/m). Répartition : **${X.br.n} HA${X.br.d}** filants.` :
      `Espacement entre 10 et 25 cm, Ø ≥ 10 mm :\n- parallèles à A : **${X.bx.n} HA${X.bx.d}** (${nf(X.bx.A, 2)} cm²), espacées de ${nf(X.bx.esp*100, 0)} cm, **en dessous** ;\n- parallèles à B : **${X.by.n} HA${X.by.d}** (${nf(X.by.A, 2)} cm²), espacées de ${nf(X.by.esp*100, 0)} cm, au-dessus.`) +
      `\n\n**Ancrage** : $$ ls = ${nf(M.lsk, 1)} Ø = ${nf(X.ls*100, 0)} cm\n${X.crochet ? `ls > ${fil ? 'B' : 'A'}/4 : les barres se terminent par des **crochets**.` : fil || !X.arret ? `ls ≤ ${fil ? 'B' : 'A'}/4 : **barres droites** filantes jusqu'aux extrémités, sans crochets.` : 'ls ≤ A/8 : barres droites, on peut arrêter une barre sur deux à 0,71 A/2.'}\nEnrobage : **5 cm** (béton coulé sur béton de propreté).`,
    ask:fil ? [{l:'Espacement des aciers transversaux', v:X.bt.sp, u:'cm', tol:.3}] : [{l:'Nombre de barres // A', v:X.bx.n, abs:.01}], hint:'Nombre de barres = section nécessaire / section d\'une barre, arrondi au-dessus, sans dépasser 25 cm d\'espacement.'});
  if(!fil) st.push({t:'Attentes du poteau et longrines', md:`Les barres du poteau (**${X.nbp} HA${X.dp}**) démarrent dans la semelle : chaque **attente** a un **retour de 20 cm** posé sur la nappe inférieure, traverse la semelle, monte dans l'amorce (${nf(X.D - X.h, 2)} m) et dépasse de **lr = 0,6 ls = ${nf(X.lrP*100)} cm** pour le recouvrement avec les barres du poteau :\n$$ longueur d'une attente ≈ 0,20 + ${nf(X.h - .07, 2)} + ${nf(X.D - X.h, 2)} + ${nf(X.lrP, 2)} = ${nf(X.lAtt, 2)} m\nOn les maintient par **3 cadres** dans la semelle et l'amorce. Les semelles sont reliées entre elles par des **longrines** (par exemple 20 × 30 cm, 4 HA12, cadres HA6 / 20 cm) qui portent les murs du rez-de-chaussée et empêchent les tassements différentiels.`,
    ask:[{l:'Longueur d\'une attente', v:X.lAtt, u:'m', tol:.05}]});
  st.push({t:'Plan de ferraillage', md:fil ? 'Coupe transversale de la semelle filante : aciers transversaux en nappe inférieure, aciers de répartition au-dessus.' : 'Plan de la semelle (nappe inférieure dans les deux sens) et coupe avec les attentes du poteau.', html:fig(fondFerr(X))});
  st.push({t:'Métré et nomenclature', q:'Calculez le volume de béton de la semelle.',
    md:(fil ? 'Quantités **par mètre linéaire** de semelle :\n\n' : '') + nomTable(X.rows) + `\n\n$$ Acier = ${nf(X.kg, 1)} kg  (+ 5 % ≈ ${nf(X.kg*1.05, 1)} kg)\n` +
      mdT(['Ouvrage', 'Calcul', 'Quantité'], (fil ? [['Fouille (surlargeur 20 cm de chaque côté)', `(${nf(X.B, 2)} + 0,40) × ${nf(X.D, 2)}`, nf(X.vFouille, 3) + ' m³/m'], ['Béton de propreté', `(${nf(X.B, 2)} + 0,10) × 0,05`, nf(X.vProp, 3) + ' m³/m'], ['Béton de la semelle', `${nf(X.B, 2)} × ${nf(X.h, 2)}`, nf(X.vBeton, 3) + ' m³/m'], ['Remblai', 'fouille − ouvrages', nf(X.vRemblai, 3) + ' m³/m']] :
        [['Fouille (surlargeur 20 cm de chaque côté)', `(${nf(X.A, 2)} + 0,40) × (${nf(X.B, 2)} + 0,40) × ${nf(X.D, 2)}`, nf(X.vFouille, 3) + ' m³'], ['Béton de propreté', `(${nf(X.A, 2)} + 0,10) × (${nf(X.B, 2)} + 0,10) × 0,05`, nf(X.vProp, 3) + ' m³'], ['Béton de la semelle', `${nf(X.A, 2)} × ${nf(X.B, 2)} × ${nf(X.h, 2)}`, nf(X.vBeton, 3) + ' m³'], ['Béton de l\'amorce', `${nf(X.a, 2)} × ${nf(X.b, 2)} × ${nf(X.D - X.h, 2)}`, nf(X.vAmorce, 3) + ' m³'], ['Remblai', 'fouille − ouvrages', nf(X.vRemblai, 3) + ' m³']])),
    ask:[{l:'Béton de la semelle', v:X.vBeton, u:fil ? 'm³/m' : 'm³'}], hint:'Volume = longueur × largeur × hauteur.'});
  st.push({t:'Exécution sur le chantier', md:`1. **Implantation** : axes des ${fil ? 'murs' : 'poteaux'} reportés sur des chaises (cordeaux), contrôle des diagonales.\n2. **Fouilles** jusqu'au bon sol (${nf(X.D, 2)} m), fond dressé et propre, **sans eau** ; faire constater le fond de fouille si le sol paraît différent de l'étude.\n3. **Béton de propreté** de 5 cm dès l'ouverture de la fouille (il protège le fond et sert de support aux aciers).\n4. **Ferraillage** : nappe posée sur des **cales de 5 cm**, ${fil ? 'aciers transversaux en dessous, répartition au-dessus' : 'barres parallèles à A en dessous'} ; ${fil ? 'attentes des chaînages verticaux aux angles et tous les 4 à 5 m' : 'attentes du poteau positionnées au gabarit et bien verticales'}.\n5. **Bétonnage** (béton dosé à 350 kg/m³), vibré, sans interruption ; coffrage des bords si le terrain s'éboule.\n6. **Remblai** par couches de 20 cm compactées, après décoffrage et contrôle des attentes.`});
  const bilan = fil ? `Semelle filante **B = ${nf(X.B, 2)} m**, h = ${nf(X.h, 2)} m (σ = ${nf(X.sg, 0)} kPa ≤ ${nf(X.sig, 0)} kPa) ; aciers transversaux **HA${X.bt.d}/${nf(X.bt.sp)} cm**, répartition **${X.br.n} HA${X.br.d}** ; ${nf(X.vBeton, 3)} m³ de béton et ${nf(X.kg*1.05, 1)} kg d'acier par mètre.`
    : `Semelle **${nf(X.A, 2)} × ${nf(X.B, 2)} × ${nf(X.h, 2)} m** (σ = ${nf(X.sg, 0)} kPa ≤ ${nf(X.sig, 0)} kPa) ; **${X.bx.n} HA${X.bx.d}** // A et **${X.by.n} HA${X.by.d}** // B${X.crochet ? ' avec crochets' : ''} ; attentes ${X.nbp} HA${X.dp} de ${nf(X.lAtt, 2)} m ; ${nf(X.vBeton, 3)} m³ de béton, ${nf(X.kg*1.05, 0)} kg d'acier.`;
  return {steps:st, bilan};
}

/* =====================================================================
   ENREGISTREMENT
   ===================================================================== */
const NIV_EX = [{n:'Terrasse', G:6.6, Q:1.0}, {n:'2e étage', G:5.5, Q:1.5}, {n:'1er étage', G:5.5, Q:1.5}];
SOL.reg({id:'ba-poteau-etude', mat:'ba', mats:['ba', 'rdm', 'tech'], niv:3,
  titre:'Étude complète d\'un poteau : de la descente de charges au plan de ferraillage',
  resume:'Surface d\'influence, descente de charges niveau par niveau (dégression), pré-dimensionnement, flambement, aciers, cadres, ELS, plan de ferraillage, nomenclature et mise en œuvre.',
  ia:'{"mode":"surf","lxg":4,"lxd":3.6,"lyb":3.8,"lyh":4.2,"bp":20,"hp":40,"e":16,"he":3,"niv":[{"n":"Terrasse","G":6.6,"Q":1},{"n":"1er étage","G":5.5,"Q":1.5}],"maj":1.1,"degr":true,"a":25,"b":25,"kf":0.7,"fc28":25,"fe":500,"c":3} — portées voisines en m (0 = façade), poutres et dalle en cm, G et Q des planchers en kN/m² du haut vers le bas ; ou "mode":"conc" avec "nivc":[{"n":"...","G":kN,"Q":kN}] si les charges par niveau sont données en kN',
  champs:[{h:'Descente de charges'},
    {k:'mode', l:'Charges données', t:'sel', w:1, o:[['surf', 'Charges des planchers en kN/m² (surface d\'influence)'], ['conc', 'Charges transmises par niveau en kN (déjà calculées)']]},
    {k:'lxg', l:'Travée à gauche (sens x)', u:'m', if:p => p.mode !== 'conc'}, {k:'lxd', l:'Travée à droite (sens x)', u:'m', if:p => p.mode !== 'conc'},
    {k:'lyh', l:'Travée au-dessus (sens y)', u:'m', if:p => p.mode !== 'conc'}, {k:'lyb', l:'Travée en dessous (sens y)', u:'m', if:p => p.mode !== 'conc'},
    {k:'bp', l:'Poutres : largeur', u:'cm', if:p => p.mode !== 'conc'}, {k:'hp', l:'Poutres : hauteur', u:'cm'}, {k:'e', l:'Épaisseur de la dalle', u:'cm', if:p => p.mode !== 'conc'}, {k:'he', l:'Hauteur d\'étage', u:'m'},
    {k:'niv', l:'Planchers portés, du haut vers le bas (0 pour une façade)', t:'tab', min:1, max:12, if:p => p.mode !== 'conc', cols:[{k:'n', l:'Niveau', t:'txt', w:110}, {k:'G', l:'G', u:'kN/m²'}, {k:'Q', l:'Q', u:'kN/m²'}], row:() => ({n:'Étage', G:5.5, Q:1.5}), note:'Le poteau étudié est celui du niveau le plus bas (il porte tous les planchers du tableau).'},
    {k:'nivc', l:'Charges transmises par niveau, du haut vers le bas', t:'tab', min:1, max:12, if:p => p.mode === 'conc', cols:[{k:'n', l:'Niveau', t:'txt', w:110}, {k:'G', l:'G', u:'kN'}, {k:'Q', l:'Q', u:'kN'}], row:() => ({n:'Étage', G:80, Q:20})},
    {k:'maj', l:'Majoration de continuité', t:'sel', w:1, o:MAJ},
    {k:'degr', l:'Dégression des charges d\'exploitation (bâtiment d\'habitation)', t:'chk'},
    {h:'Poteau et matériaux'}, {k:'a', l:'Petit côté a', u:'cm'}, {k:'b', l:'Grand côté b', u:'cm'},
    {k:'kf', l:'Longueur de flambement', t:'sel', w:1, o:[[.7, 'lf = 0,7 l0 (poteau encastré dans les planchers)'], [1, 'lf = l0 (extrémité articulée)']]},
    {k:'fc28', l:'Béton fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:FE}, {k:'c', l:'Enrobage', u:'cm'}],
  ex:{mode:'surf', lxg:4, lxd:3.6, lyb:3.8, lyh:4.2, bp:20, hp:40, e:16, he:3, niv:clone(NIV_EX), nivc:[{n:'Terrasse', G:95, Q:16}, {n:'1er étage', G:85, Q:24}], maj:1.1, degr:true, a:25, b:25, kf:.7, fc28:25, fe:500, c:3},
  rnd:() => { const n = R.i(2, 5), niv = [{n:'Terrasse', G:R.s(6, 7, .1), Q:1}]; for(let i = n - 1; i >= 1; i--) niv.push({n:i === 1 ? '1er étage' : i + 'e étage', G:R.s(5, 6, .1), Q:R.p([1.5, 1.5, 2.5])});
    const pos = R.p(['c', 'c', 'r', 'a']); const L = () => R.s(3, 5, .1);
    return {mode:'surf', lxg:pos === 'a' || pos === 'r' ? 0 : L(), lxd:L(), lyb:L(), lyh:pos === 'a' ? 0 : L(), bp:20, hp:R.p([35, 40, 45]), e:R.p([15, 16, 20]), he:R.s(2.9, 3.4, .1), niv, maj:pos === 'c' ? R.p([1, 1.1, 1.15]) : 1, degr:n > 2, a:R.p([25, 25, 30]), b:R.p([25, 30, 35]), kf:.7, fc28:R.p([25, 25, 30]), fe:500, c:3}; },
  enonce:p => { let X; try{ X = potCalc(p); }catch(e){ return ''; }
    return (X.conc ? `Un poteau de **${nf(+p.a)} × ${nf(+p.b)} cm** reçoit, à chaque niveau, les charges transmises par les poutres : ${X.rows.map(r => `${r.n} : G = ${nf(r.G)} kN, Q = ${nf(r.Q)} kN`).join(' ; ')}. Hauteur d'étage ${nf(X.he)} m, poutres de ${nf(+p.hp)} cm de hauteur.`
      : `Un poteau ${X.pos} de **${nf(+p.a)} × ${nf(+p.b)} cm** d'un immeuble de ${X.rows.length} niveau${X.rows.length > 1 ? 'x' : ''} reçoit les travées suivantes : ${nf(+p.lxg)} m et ${nf(+p.lxd)} m dans le sens x, ${nf(+p.lyh)} m et ${nf(+p.lyb)} m dans le sens y (0 = façade). Planchers (du haut vers le bas) : ${X.rows.map(r => `${r.n} G = ${nf(r.G)} kN/m², Q = ${nf(r.Q)} kN/m²`).join(' ; ')}. Poutres ${nf(+p.bp)} × ${nf(+p.hp)} cm, dalle de ${nf(+p.e)} cm, hauteur d'étage ${nf(X.he)} m.`) +
      ` Béton fc28 = ${nf(+p.fc28)} MPa, aciers FeE${nf(+p.fe)}, enrobage ${nf(+p.c)} cm.${X.maj > 1 ? ` Majoration de continuité : ${nf((X.maj - 1)*100)} %.` : ''}${p.degr && X.rows.length > 2 ? ' On applique la dégression des charges d\'exploitation.' : ''}\n\n` +
      `1. ${X.conc ? 'Calculer le poids propre du poteau par niveau.' : 'Calculer la surface d\'influence et les charges d\'un niveau.'}\n2. Faire la descente de charges et en déduire Nu et Nser en pied du poteau le plus bas.\n3. Pré-dimensionner la section, calculer l'élancement et α.\n4. Calculer les aciers longitudinaux, les choisir et les disposer.\n5. Dimensionner les cadres, vérifier l'ELS.\n6. Dessiner le plan de ferraillage et établir la nomenclature.`; },
  solve:potSolve});

const COUCHES_EX = [{n:'Carrelage', ep:2, gam:22, w:0}, {n:'Mortier de pose', ep:3, gam:20, w:0}, {n:'Enduit sous plafond', ep:1.5, gam:18, w:0}, {n:'Cloisons légères (forfait)', ep:0, gam:0, w:1}];
SOL.reg({id:'ba-dalle-etude', mat:'ba', mats:['ba', 'rdm', 'tech'], niv:3,
  titre:'Étude complète d\'une dalle pleine : des charges au plan de ferraillage',
  resume:'Fonctionnement (α), épaisseur, charges couche par couche, moments en travée et sur appuis, aciers, minimums, effort tranchant, flèche, chapeaux, plan de ferraillage, nomenclature et mise en œuvre.',
  ia:'{"lx":4,"ly":5,"e":16,"bx1":"rive","bx2":"cont","by1":"rive","by2":"rive","couches":[{"n":"Carrelage","ep":2,"gam":22,"w":0},{"n":"Cloisons","ep":0,"gam":0,"w":1}],"usage":"hab","fc28":25,"fe":500,"c":2} — lx ≤ ly en m ; bx1/bx2 = bords longs, by1/by2 = bords courts : "rive" ou "cont" ; couches : épaisseur en cm et poids volumique en kN/m³, ou charge w en kN/m² ; usage : hab, bur, classe, comm, balcon, circ, tacc, tinac ou "autre" avec "Qd" en kN/m²',
  champs:[{h:'Panneau'}, {k:'lx', l:'Petite portée lx (entre nus)', u:'m'}, {k:'ly', l:'Grande portée ly', u:'m'}, {k:'e', l:'Épaisseur choisie', u:'cm'},
    {k:'bx1', l:'Bord long n°1', t:'sel', o:EDGE}, {k:'bx2', l:'Bord long n°2', t:'sel', o:EDGE}, {k:'by1', l:'Bord court n°1', t:'sel', o:EDGE}, {k:'by2', l:'Bord court n°2', t:'sel', o:EDGE},
    {h:'Charges'}, {k:'couches', l:'Revêtements et cloisons (en plus de la dalle)', t:'tab', min:1, max:8, cols:[{k:'n', l:'Couche', t:'txt', w:150}, {k:'ep', l:'Épaisseur', u:'cm'}, {k:'gam', l:'γ', u:'kN/m³'}, {k:'w', l:'ou charge', u:'kN/m²'}], row:() => ({n:'Couche', ep:0, gam:0, w:.5}), note:'Indiquez soit l\'épaisseur et le poids volumique, soit directement la charge en kN/m².'},
    {k:'usage', l:'Usage du local', t:'sel', w:1, o:USAGES.map(u => [u[0], u[1] + (u[2] ? ` (Q = ${nf(u[2])} kN/m²)` : '')])}, {k:'Qd', l:'Charge d\'exploitation Q', u:'kN/m²', if:p => p.usage === 'autre'},
    {h:'Matériaux'}, {k:'fc28', l:'Béton fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:FE}, {k:'c', l:'Enrobage', u:'cm'}],
  ex:{lx:4, ly:5, e:16, bx1:'rive', bx2:'cont', by1:'rive', by2:'rive', couches:clone(COUCHES_EX), usage:'hab', Qd:2.5, fc28:25, fe:500, c:2},
  rnd:() => { const lx = R.s(3, 5.5, .1), one = Math.random() < .25; const ly = one ? +(lx*R.s(2.6, 3.2, .1)).toFixed(1) : +(lx*R.s(1, 1.8, .1)).toFixed(1);
    const E = () => R.p(['rive', 'cont']); return {lx, ly, e:Math.max(12, up(lx*100/(one ? 32 : 42), 1)), bx1:'rive', bx2:E(), by1:E(), by2:'rive', couches:clone(COUCHES_EX), usage:R.p(['hab', 'hab', 'bur', 'classe', 'tacc']), fc28:25, fe:R.p([400, 500]), c:2}; },
  enonce:p => { let X; try{ X = dalleCalc(p); }catch(e){ return ''; }
    return `Un panneau de dalle pleine de **${nf(X.lx, 2)} × ${nf(X.ly, 2)} m** (entre nus d'appuis), d'épaisseur **${nf(X.e*100)} cm**, est appuyé sur des poutres : bords longs ${X.ed.x1 === 'cont' ? 'continu' : 'de rive'} et ${X.ed.x2 === 'cont' ? 'continu' : 'de rive'}, bords courts ${X.ed.y1 === 'cont' ? 'continu' : 'de rive'} et ${X.ed.y2 === 'cont' ? 'continu' : 'de rive'}. Revêtements : ${X.couches.map(r => r.w > 0 ? `${r.n.toLowerCase()} (${nf(r.w)} kN/m²)` : `${r.n.toLowerCase()} ${nf(r.ep)} cm (${nf(r.gam)} kN/m³)`).join(', ')}. Usage : ${X.U[0] === 'autre' ? `Q = ${nf(X.Q)} kN/m²` : X.U[1].toLowerCase()}. Béton fc28 = ${nf(+p.fc28)} MPa, aciers FeE${nf(+p.fe)}, enrobage ${nf(+p.c)} cm, fissuration peu préjudiciable.\n\n` +
      `1. Dire comment travaille la dalle et vérifier son épaisseur.\n2. Calculer les charges G et Q et les combinaisons.\n3. Calculer les moments isostatiques puis les moments en travée et sur appuis.\n4. Calculer les aciers en travée et sur appuis, vérifier les minimums et choisir les barres.\n5. Vérifier l'effort tranchant et la flèche.\n6. Dessiner le plan de ferraillage et établir la nomenclature.`; },
  solve:dalleSolve});

SOL.reg({id:'tech-fondation', mat:'tech', mats:['tech', 'ba', 'geo'], niv:3,
  titre:'Étude complète d\'une fondation : semelle isolée ou filante',
  resume:'Choix du type de fondation, surface, hauteur, contrainte sur le sol, aciers par la méthode des bielles, ancrage, attentes, plan de ferraillage, métré et exécution sur le chantier.',
  ia:'{"type":"isolee","a":25,"b":25,"G":420,"Q":110,"sig":0.2,"D":1,"nbp":4,"dp":12,"fc28":25,"fe":500,"fiss":"FP"} — type isolee (poteau a × b en cm, G et Q en kN) ou filante (mur d\'épaisseur "em" en cm, G et Q en kN par mètre) ; sig en MPa ; D profondeur d\'assise en m ; fiss : FP, FPP ou FTP',
  champs:[{k:'type', l:'Type de fondation', t:'sel', w:1, o:[['isolee', 'Semelle isolée sous poteau'], ['filante', 'Semelle filante sous mur']]},
    {h:'Charges en pied (descente de charges)'},
    {k:'G', l:'Charge permanente G', u:'kN', if:p => p.type !== 'filante'}, {k:'Q', l:'Charge d\'exploitation Q', u:'kN', if:p => p.type !== 'filante'},
    {k:'G', l:'G par mètre de mur', u:'kN/m', if:p => p.type === 'filante'}, {k:'Q', l:'Q par mètre de mur', u:'kN/m', if:p => p.type === 'filante'},
    {k:'a', l:'Poteau : côté a', u:'cm', if:p => p.type !== 'filante'}, {k:'b', l:'Poteau : côté b', u:'cm', if:p => p.type !== 'filante'},
    {k:'nbp', l:'Barres du poteau', t:'sel', o:[[4, '4 barres'], [6, '6 barres'], [8, '8 barres']], if:p => p.type !== 'filante'}, {k:'dp', l:'Diamètre des barres du poteau', t:'sel', o:[[12, 'HA12'], [14, 'HA14'], [16, 'HA16'], [20, 'HA20']], if:p => p.type !== 'filante'},
    {k:'em', l:'Épaisseur du mur', u:'cm', if:p => p.type === 'filante'},
    {h:'Sol et matériaux'}, {k:'sig', l:'Contrainte admissible du sol σsol', u:'MPa'}, {k:'D', l:'Profondeur d\'assise (fond de fouille)', u:'m'},
    {k:'fc28', l:'Béton fc28', u:'MPa'}, {k:'fe', l:'Acier', t:'sel', o:FE}, {k:'fiss', l:'Fissuration', t:'sel', w:1, o:FISS}],
  ex:{type:'isolee', a:25, b:25, G:420, Q:110, nbp:4, dp:12, em:20, sig:.2, D:1, fc28:25, fe:500, fiss:'FP'},
  rnd:() => R.p([0, 0, 1]) ? {type:'isolee', a:R.p([20, 25, 30]), b:R.p([25, 30, 35]), G:R.s(150, 900, 10), Q:R.s(40, 250, 10), nbp:R.p([4, 4, 6]), dp:R.p([12, 14, 16]), em:20, sig:R.p([.15, .2, .25, .3]), D:R.s(.8, 1.5, .1), fc28:25, fe:R.p([400, 500]), fiss:'FP'}
    : {type:'filante', em:R.p([15, 20, 25]), G:R.s(40, 140, 5), Q:R.s(10, 40, 5), a:25, b:25, nbp:4, dp:12, sig:R.p([.1, .15, .2, .25]), D:R.s(.6, 1.2, .1), fc28:25, fe:R.p([400, 500]), fiss:'FP'},
  enonce:p => { let X; try{ X = fondCalc(p); }catch(e){ return ''; }
    return (X.fil ? `Un mur porteur de **${nf(+p.em)} cm** d'épaisseur transmet à sa fondation G = **${nf(+p.G)} kN/m** et Q = **${nf(+p.Q)} kN/m**.` : `Un poteau de **${nf(+p.a)} × ${nf(+p.b)} cm** (${X.nbp} HA${X.dp}) transmet à sa fondation G = **${nf(+p.G)} kN** et Q = **${nf(+p.Q)} kN**.`) +
      ` L'étude de sol donne **σsol = ${nf(+p.sig)} MPa** (${nf(p.sig*10, 2)} bars) à **${nf(X.D)} m** de profondeur. Béton fc28 = ${nf(+p.fc28)} MPa, aciers FeE${nf(+p.fe)}, fissuration ${({FP:'préjudiciable', FPP:'peu préjudiciable', FTP:'très préjudiciable'})[p.fiss] || 'préjudiciable'}, enrobage 5 cm, terres 18 kN/m³.\n\n` +
      `1. Justifier le type de fondation.\n2. Dimensionner la semelle (${X.fil ? 'largeur B' : 'A × B'}) et sa hauteur.\n3. Vérifier la contrainte sur le sol avec le poids de la semelle et des terres.\n4. Calculer et choisir les aciers (méthode des bielles), vérifier l'ancrage.\n5. ${X.fil ? 'Dessiner la coupe de ferraillage' : 'Prévoir les attentes du poteau et dessiner le plan de ferraillage'}.\n6. Établir le métré et décrire l'exécution.`; },
  solve:fondSolve});

/* ---------- depuis un projet type (fiches des éléments) ---------- */
SOL.postFromProject = (Mdl, e) => {
  const q = Mdl.posts.find(x => x.id === e.post); if(!q) return null;
  const top = Mdl.L.length - 1, rows = [];
  for(let i = top; i >= e.lvl; i--){ const l = q.lv[i]; if(l && (l.G > 0 || l.Q > 0 || i === e.lvl)) rows.push({n:Mdl.L[i].court, G:Math.round(l.G*10)/10, Q:Math.round(l.Q*10)/10}); }
  const hp = Math.round((((Mdl.beams || []).find(b => b.lvl === e.lvl) || {}).h || .4)*100);
  return {mode:'conc', nivc:rows, he:A.PRJ.HN, hp, maj:1, degr:false, a:Math.round(e.d.a*100), b:Math.round(e.d.a*100), kf:.7, fc28:25, fe:500, c:3, src:e.id};
};
SOL.footFromProject = (Mdl, e) => ({type:'isolee', a:Math.round(e.a*100), b:Math.round(e.a*100), G:Math.round((e.NG - (e.amorce || 0))*10)/10, Q:Math.round(e.NQ*10)/10, nbp:4, dp:12, sig:Math.round(e.sig/1000*100)/100, D:Math.round(-e.z*100)/100, fc28:25, fe:500, fiss:'FP', src:e.id});
SOL.slabFromProject = (Mdl, e) => {
  const map = {'Plancher d\'étage (logement)':'hab', 'Terrasse accessible':'tacc', 'Toiture-terrasse inaccessible':'tinac', 'Trémie d\'escalier':'circ'};
  return {lx:Math.round(e.lx*100)/100, ly:Math.round(e.ly*100)/100, e:Math.max(12, up(e.lx*100/42, 1)), bx1:'rive', bx2:'rive', by1:'rive', by2:'rive', couches:clone(COUCHES_EX), usage:map[e.usage] || 'hab', fc28:25, fe:500, c:2, src:e.id};
};
SOL.elem = {potCalc, dalleCalc, fondCalc};

/* ---------- études progressives proposées à la fin des chapitres de cours ---------- */
const CHAP = {
  'ba-11':['ba-poteau-etude'], 'ba-4':['ba-poteau-etude'], 'ba-21':['ba-poteau-etude'], 'ba-3':['ba-poteau-etude', 'ba-poutre'], 'ba-12':['ba-poteau-etude', 'ba-poutre'], 'ba-8':['ba-poutre', 'ba-poteau-etude'],
  'ba-6':['ba-dalle-etude'], 'ba-17':['ba-dalle-etude'], 'ba-22':['ba-dalle-etude', 'ba-poutre'], 'ba-7':['tech-fondation'], 'ba-18':['tech-fondation'],
  'ba-5':['ba-poutre'], 'ba-9':['ba-poutre'], 'ba-14':['ba-poutre'], 'ba-15':['ba-poutre'], 'ba-16':['ba-poutre'], 'ba-23':['ba-dalle-etude', 'ba-poutre', 'ba-poteau-etude', 'tech-fondation'],
  'tech-3':['tech-fondation'], 'tech-5':['ba-dalle-etude'], 'tech-12':['ba-poteau-etude', 'ba-poutre', 'ba-dalle-etude', 'tech-fondation'], 'tech-8':['ba-poteau-etude'], 'tech-17':['tech-fondation'],
  'rdm-1':['poutre'], 'rdm-2':['poutre'], 'rdm-13':['poutre'], 'rdm-15':['poutre'], 'rdm-8':['poutre'], 'rdm-19':['poutre'], 'rdm-4':['ba-poteau-etude'], 'rdm-6':['ba-poteau-etude'],
  'geo-12':['tech-fondation'], 'geo-14':['tech-fondation']};
SOL.chapStudies = c => {
  const ids = (CHAP[c && c.id] || []).filter(id => SOL.get(id)); if(!ids.length) return '';
  return `<section class="lesson noprint studies"><span class="kick">${ic('target')} Étude progressive</span><h2 style="font-size:20px;margin:4px 0 6px">Appliquer ce cours pas à pas</h2>
   <p class="sub">Refaites l'étude complète de l'élément, de la charge jusqu'au plan de ferraillage : à chaque étape vous calculez, la plateforme vérifie, donne un indice ou la solution. Changez les données ou demandez un nouvel exercice à volonté.</p>
   <div class="stack s8">${ids.map(id => { const d = SOL.get(id); return `<div class="row between stud"><span style="min-width:0"><b>${esc(d.titre)} ${A.droitSolveur && !A.droitSolveur(id) ? `<span class="pill p-amber">${ic('lock')} ${(+A.offre('basic').solveurs || 0) >= (d.niv || 1) ? 'Basic' : 'Premium'}</span>` : ''}</b><div class="sub">${esc(d.resume || '')}</div></span><span class="row nw" style="gap:6px"><a class="btn b-pri b-sm" href="${SOL.link(id, null, 'guide')}">${ic('target')}Étude guidée</a><a class="btn b-line b-sm" href="${SOL.link(id, null, 'full')}">${ic('book')}Corrigé complet</a></span></div>`; }).join('')}</div></section>`;
};
})();
