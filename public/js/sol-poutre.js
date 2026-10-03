/* =====================================================================
   Solveur « Poutre » : RDM complète puis ferraillage en béton armé
   - dessin de la poutre (appuis, charges) à la souris ou au doigt
   - degré d'hyperstaticité, réactions (équilibre ou 3 moments)
   - équations de V(x) et M(x) par tronçon, moment maximal, diagrammes
   - flèche, puis dimensionnement BAEL 91 : aciers, choix des barres,
     disposition, cadres (Caquot), chapeaux, nomenclature et façonnage
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast} = A;
const SOL = A.SOL, {nf, ns, clone, R, SV, T, Ln, Pth, Rc, Ci, Dim, C} = SOL.U;
const Err = SOL.Err;
const EPS = 1e-9;

/* ---------- polynômes (coefficients du degré 0 au degré 3) ---------- */
const padd = (a, b) => { const o = []; for(let i = 0; i < Math.max(a.length, b.length); i++) o[i] = (a[i] || 0) + (b[i] || 0); return o; };
const pk = (a, k) => a.map(c => c*k);
const BIN = [[1],[1,1],[1,2,1],[1,3,3,1]];
const ppow = (s, n) => { const o = []; for(let k = 0; k <= n; k++) o[k] = BIN[n][k]*Math.pow(-s, n - k); return o; }; // (x - s)^n
const pev = (p, x) => p.reduce((a, c, i) => a + c*Math.pow(x, i), 0);
const pder = p => p.slice(1).map((c, i) => c*(i + 1));
function pfmt(p, v='x'){
  const big = Math.max(1, ...p.map(Math.abs)); const parts = [];
  for(let i = p.length - 1; i >= 0; i--){ const c = p[i]; if(Math.abs(c) < 1e-9*big) continue;
    const a = Math.abs(c), cs = (i && Math.abs(a - 1) < 1e-9) ? '' : nf(a, 3), xs = i === 0 ? '' : i === 1 ? ` ${v}` : ` ${v}${i === 2 ? '²' : '³'}`;
    parts.push((c < 0 ? '− ' : parts.length ? '+ ' : '') + (cs + xs).trim()); }
  return parts.length ? parts.join(' ').replace(/^\+ /, '') : '0';
}
/* racines réelles d'un polynôme de degré ≤ 2 dans [a, b] */
function roots(p, a, b){
  const [c0 = 0, c1 = 0, c2 = 0] = p, out = [];
  if(Math.abs(c2) < 1e-12){ if(Math.abs(c1) > 1e-12) out.push(-c0/c1); }
  else { const D = c1*c1 - 4*c2*c0; if(D >= 0){ out.push((-c1 + Math.sqrt(D))/(2*c2), (-c1 - Math.sqrt(D))/(2*c2)); } }
  return out.filter(x => x > a + 1e-6 && x < b - 1e-6);
}

/* ---------- efforts internes par sommation à gauche ----------
   items : {F, x} force vers le haut ; {Cw, x} couple horaire ; {q:[v1,v2], a, b} charge répartie vers le bas */
function piecewise(items, x0, x1){
  const ev = new Set([x0, x1]);
  items.forEach(it => { if(it.q){ ev.add(it.a); ev.add(it.b); } else ev.add(it.x); });
  const xs = [...ev].filter(x => x >= x0 - EPS && x <= x1 + EPS).sort((a, b) => a - b).filter((x, i, a) => !i || x - a[i-1] > 1e-7);
  const segs = [];
  for(let i = 0; i < xs.length - 1; i++){
    const a = xs[i], b = xs[i+1], xm = (a + b)/2; let V = [0], M = [0];
    items.forEach(it => {
      if(it.q){ if(it.a >= xm) return; const [v1, v2] = it.q, l = it.b - it.a;
        if(it.b <= xm){ const W = (v1 + v2)/2*l, xg = it.a + (Math.abs(v1 + v2) > EPS ? l*(v1 + 2*v2)/(3*(v1 + v2)) : l/2);
          V = padd(V, [-W]); M = padd(M, pk([-xg, 1], -W)); }
        else { const k = (v2 - v1)/l;
          V = padd(V, padd(pk(ppow(it.a, 1), -v1), pk(ppow(it.a, 2), -k/2)));
          M = padd(M, padd(pk(ppow(it.a, 2), -v1/2), pk(ppow(it.a, 3), -k/6))); } }
      else if(it.x < xm){ if(it.F != null){ V = padd(V, [it.F]); M = padd(M, pk([-it.x, 1], it.F)); } if(it.Cw != null) M = padd(M, [it.Cw]); }
    });
    segs.push({a, b, V, M});
  }
  return segs;
}
/* intégrale de f(s)·g(s) par Gauss-Legendre à 3 points sur chaque tronçon (exacte jusqu'au degré 5) */
const GL = [[-Math.sqrt(.6), 5/9], [0, 8/9], [Math.sqrt(.6), 5/9]];
const integ = (segs, w) => segs.reduce((acc, s) => acc + GL.reduce((a, [t, wt]) => { const x = (s.a + s.b)/2 + t*(s.b - s.a)/2; return a + wt*pev(s.M, x)*w(x); }, 0)*(s.b - s.a)/2, 0);

/* ---------- normalisation des données ---------- */
const TYPES_AP = [['S','Appui simple (rouleau)'],['A','Articulation (rotule fixe)'],['E','Encastrement']];
const TYPES_CH = [['q','Répartie uniforme'],['t','Répartie variable (trapèze)'],['P','Ponctuelle'],['C','Couple (sens horaire +)']];
const COMB = {ELU:{g:1.35, q:1.5, n:'ELU : 1,35 G + 1,5 Q'}, ELS:{g:1, q:1, n:'ELS : G + Q'}, brut:{g:1, q:1, n:'charges données (G + Q, sans coefficient)'}};
const unitOf = t => t === 'P' ? 'kN' : t === 'C' ? 'kN·m' : 'kN/m';

function loadsOf(p, comb, withPP){
  const k = COMB[comb] || COMB.brut, out = [];
  (p.ch || []).forEach((c, i) => {
    const g = +c.g || 0, q = +c.q || 0, g2 = c.t === 't' ? (+c.g2 || 0) : g, q2 = c.t === 't' ? (+c.q2 || 0) : q;
    const v = k.g*g + k.q*q, v2 = k.g*g2 + k.q*q2, lab = 'ch' + (i + 1);
    if(c.t === 'P') out.push({t:'P', x:+c.a, v, g, q, i, lab});
    else if(c.t === 'C') out.push({t:'C', x:+c.a, v, g, q, i, lab});
    else { const a = Math.min(+c.a, +c.b), b = Math.max(+c.a, +c.b); if(b - a > 1e-6) out.push({t:c.t === 't' ? 't' : 'q', a, b, v1:v, v2, g, q, g2, q2, i, lab}); }
  });
  if(withPP && p.pp){ const g = 25*p.b/100*p.h/100, v = k.g*g; out.push({t:'q', a:0, b:p.L, v1:v, v2:v, g, q:0, g2:g, q2:0, pp:true, lab:'pp'}); }
  return out;
}
const itemsOfLoads = L => L.map(l => l.t === 'P' ? {F:-l.v, x:l.x} : l.t === 'C' ? {Cw:l.v, x:l.x} : {q:[l.v1, l.v2], a:l.a, b:l.b});
const resultant = l => { const len = l.b - l.a, W = (l.v1 + l.v2)/2*len; const xg = l.a + (Math.abs(l.v1 + l.v2) > EPS ? len*(l.v1 + 2*l.v2)/(3*(l.v1 + l.v2)) : len/2); return {W, xg, len}; };

function check(p){
  SOL.need(p, [['L', 'Longueur de la poutre', .2, 60]]);
  const ap = (p.appuis || []).map(s => ({x:+s.x, t:s.t})).sort((a, b) => a.x - b.x);
  if(!ap.length) throw new Err('Ajoutez au moins un appui.');
  ap.forEach(s => { if(!isFinite(s.x) || s.x < -1e-6 || s.x > p.L + 1e-6) throw new Err(`Un appui est hors de la poutre (x doit être entre 0 et ${nf(p.L)} m).`); });
  for(let i = 1; i < ap.length; i++) if(ap[i].x - ap[i-1].x < .05) throw new Err('Deux appuis sont au même endroit : écartez-les.');
  ap.forEach((s, i) => { if(s.t === 'E' && !(Math.abs(s.x) < 1e-6 && i === 0) && !(Math.abs(s.x - p.L) < 1e-6 && i === ap.length - 1)) throw new Err('Un encastrement doit être placé à une extrémité de la poutre (x = 0 ou x = L).'); });
  (p.ch || []).forEach((c, i) => { ['a'].concat(c.t === 'q' || c.t === 't' ? ['b'] : []).forEach(k => { const v = +c[k]; if(!isFinite(v) || v < -1e-6 || v > p.L + 1e-6) throw new Err(`Charge ${i + 1} : position hors de la poutre.`); });
    if(!isFinite(+c.g) || !isFinite(+c.q)) throw new Err(`Charge ${i + 1} : valeur G ou Q invalide.`); });
  if(!(p.ch || []).length && !p.pp) throw new Err('Ajoutez au moins une charge.');
  return ap;
}

/* ---------- analyse ---------- */
function analyse(p, comb, withPP){
  const ap0 = check(p), L = +p.L;
  const ap = ap0.map(s => ({...s}));
  const nh = ap.filter(s => s.t !== 'S').length;
  let note = '';
  if(!nh && !(ap.length === 1)){ ap[0].t = 'A'; note = 'Aucun appui ne bloque le glissement horizontal : comme on le fait toujours en pratique, on considère le premier appui comme une articulation.'; }
  const r = ap.reduce((a, s) => a + (s.t === 'S' ? 1 : s.t === 'A' ? 2 : 3), 0), h = r - 3;
  if(ap.length === 1 && ap[0].t !== 'E') throw new Err('Un seul appui simple ou articulé : la poutre tourne autour de lui (mécanisme). Ajoutez un appui ou un encastrement.');
  const loads = loadsOf(p, comb, withPP), items = itemsOfLoads(loads);
  const nhx = ap.filter(s => s.t !== 'S').length, hH = Math.max(0, nhx - 1); // inconnues horizontales surabondantes
  const res = {L, ap, r, h, hH, note, loads, comb};

  if(ap.length === 1){ // console encastrée
    const s = ap[0];
    let Rv = 0, Me = 0; // Me : moment interne au droit de l'encastrement (convention fibre inférieure tendue +)
    loads.forEach(l => { if(l.t === 'P'){ Rv += l.v; Me += -l.v*Math.abs(l.x - s.x); } else if(l.t === 'C'){ Me += s.x < 1e-6 ? -l.v : l.v; } else { const {W, xg} = resultant(l); Rv += W; Me += -W*Math.abs(xg - s.x); } });
    // couple : convention horaire +, contribution au moment interne côté encastrement
    s.R = Rv; s.M = Me;
    res.kind = 'console'; res.unk = [];
  } else {
    // travées et consoles
    const n = ap.length - 1, sp = [];
    for(let i = 1; i <= n; i++) sp.push({i, a:ap[i-1].x, b:ap[i].x, l:ap[i].x - ap[i-1].x});
    // moments connus aux appuis de rive (consoles)
    const mLeft = (() => { const x0 = ap[0].x; let m = 0; loads.forEach(l => { if(l.t === 'P' && l.x < x0 - 1e-9) m += -l.v*(x0 - l.x); else if(l.t === 'C' && l.x < x0 - 1e-9) m += l.v;
      else if(l.t === 'q' || l.t === 't'){ if(l.a < x0 - 1e-9){ const part = clipLoad(l, l.a, Math.min(l.b, x0)); const {W, xg} = resultant(part); m += -W*(x0 - xg); } } }); return m; })();
    const mRight = (() => { const xn = ap[n].x; let m = 0; loads.forEach(l => { if(l.t === 'P' && l.x > xn + 1e-9) m += -l.v*(l.x - xn); else if(l.t === 'C' && l.x > xn + 1e-9) m += -l.v;
      else if(l.t === 'q' || l.t === 't'){ if(l.b > xn + 1e-9){ const part = clipLoad(l, Math.max(l.a, xn), l.b); const {W, xg} = resultant(part); m += -W*(xg - xn); } } }); return m; })();
    // charges de chaque travée (repère local s = x - a)
    sp.forEach((s, k) => {
      const last = k === n - 1, loc = [];
      loads.forEach(l => {
        if(l.t === 'P'){ if(l.x > s.a + 1e-9 && l.x < s.b - 1e-9) loc.push({t:'P', x:l.x - s.a, v:l.v, src:l}); }
        else if(l.t === 'C'){ if((l.x > s.a - 1e-9 && l.x < s.b - 1e-9) || (last && Math.abs(l.x - s.b) < 1e-9)) loc.push({t:'C', x:Math.min(Math.max(l.x - s.a, 1e-6), s.l - 1e-6), v:l.v, src:l}); }
        else { const a = Math.max(l.a, s.a), b = Math.min(l.b, s.b); if(b - a > 1e-9){ const part = clipLoad(l, a, b); loc.push({t:part.t, a:a - s.a, b:b - s.a, v1:part.v1, v2:part.v2, src:l}); } }
      });
      let W = 0, Wd = 0; loc.forEach(l => { if(l.t === 'P'){ W += l.v; Wd += l.v*l.x; } else if(l.t === 'C'){ Wd += l.v; } else { const r_ = resultant(l); W += r_.W; Wd += r_.W*r_.xg; } });
      s.loc = loc; s.R0d = Wd/s.l; s.R0g = W - s.R0d;
      const segs = piecewise([{F:s.R0g, x:0}].concat(itemsOfLoads(loc)), 0, s.l);
      s.segs0 = segs;
      s.phiG = integ(segs, x => (s.l - x))/s.l; // EI·θ gauche
      s.phiD = integ(segs, x => x)/s.l;        // EI·θ droite
    });
    // inconnues : moments sur appuis intermédiaires et encastrements
    const unk = [];
    ap.forEach((s, i) => { if((i > 0 && i < n) || s.t === 'E') unk.push(i); });
    const Mk = ap.map((s, i) => i === 0 ? (s.t === 'E' ? null : mLeft) : i === n ? (s.t === 'E' ? null : mRight) : null);
    const eqs = [];
    if(unk.length){
      const N = unk.length, Am = unk.map(() => new Array(N).fill(0)), bv = new Array(N).fill(0);
      unk.forEach((i, row) => {
        const lg = i > 0 ? sp[i-1].l : 0, ld = i < n ? sp[i].l : 0;
        const coef = {}; coef[i] = 2*(lg + ld); if(i > 0) coef[i-1] = lg; if(i < n) coef[i+1] = ld;
        let rhs = -6*((i > 0 ? sp[i-1].phiD : 0) + (i < n ? sp[i].phiG : 0));
        Object.entries(coef).forEach(([j, c]) => { j = +j; const col = unk.indexOf(j); if(col >= 0) Am[row][col] += c; else rhs -= c*Mk[j]; });
        bv[row] = rhs; eqs.push({i, coef, rhs, lg, ld});
      });
      const sol = gauss(Am, bv); if(!sol) throw new Err('Système d\'équations singulier : vérifiez les appuis.');
      unk.forEach((i, k) => { Mk[i] = sol[k]; });
    }
    res.kind = unk.length ? 'clapeyron' : 'iso'; res.unk = unk; res.eqs = eqs; res.sp = sp; res.Mk = Mk; res.mLeft = mLeft; res.mRight = mRight;
    // réactions d'appui
    ap.forEach((s, i) => { let Rv = 0;
      if(i > 0){ const S = sp[i-1]; Rv += S.R0d - (Mk[i] - Mk[i-1])/S.l; }
      if(i < n){ const S = sp[i]; Rv += S.R0g + (Mk[i+1] - Mk[i])/S.l; }
      if(i === 0) loads.forEach(l => { Rv += loadLeftOf(l, s.x); });
      if(i === n) loads.forEach(l => { Rv += loadRightOf(l, s.x); });
      s.R = Rv; s.M = s.t === 'E' ? Mk[i] : 0; s.Mi = Mk[i]; });
    // forces ponctuelles appliquées exactement sur un appui : elles descendent directement dans l'appui
    loads.forEach(l => { if(l.t === 'P'){ const s = ap.find(q => Math.abs(q.x - l.x) < 1e-9); if(s) s.R += l.v; } });
  }
  // efforts internes sur toute la poutre (sommation à gauche, réactions comprises)
  const all = itemsOfLoads(loads).concat(ap.map(s => ({F:s.R, x:s.x})));
  const e0 = ap.find(s => s.t === 'E' && Math.abs(s.x) < 1e-6);
  if(e0) all.push({Cw:e0.M, x:-1e-7});
  res.items = all;
  res.segs = piecewise(all, 0, L).map(s => ({...s}));
  // valeurs clés
  const key = [];
  res.segs.forEach((s, k) => { key.push({x:s.a, V:pev(s.V, s.a), M:pev(s.M, s.a), side:'+', k}); key.push({x:s.b, V:pev(s.V, s.b), M:pev(s.M, s.b), side:'-', k}); });
  res.key = key;
  let Mmax = {M:-Infinity}, Mmin = {M:Infinity}, Vmax = {V:0};
  res.segs.forEach(s => { const cand = [s.a, s.b].map(x => [x, false]).concat(roots(s.V, s.a, s.b).map(x => [x, true])); cand.forEach(([x, rt]) => { const m = pev(s.M, x); if(m > Mmax.M + 1e-9) Mmax = {M:m, x, s, root:rt}; if(m < Mmin.M - 1e-9) Mmin = {M:m, x, s, root:rt}; });
    [s.a, s.b].forEach(x => { const v = pev(s.V, x); if(Math.abs(v) > Math.abs(Vmax.V)) Vmax = {V:v, x}; }); });
  res.Mmax = Mmax; res.Mmin = Mmin; res.Vmax = Vmax;
  return res;
}
function clipLoad(l, a, b){ const len = l.b - l.a, f = x => l.v1 + (l.v2 - l.v1)*(x - l.a)/len; return {t:l.t, a, b, v1:f(a), v2:f(b)}; }
function loadLeftOf(l, x0){ if(l.t === 'P') return l.x < x0 - 1e-9 ? l.v : 0; if(l.t === 'C') return 0; if(l.a >= x0 - 1e-9) return 0; return resultant(clipLoad(l, l.a, Math.min(l.b, x0))).W; }
function loadRightOf(l, xn){ if(l.t === 'P') return l.x > xn + 1e-9 ? l.v : 0; if(l.t === 'C') return 0; if(l.b <= xn + 1e-9) return 0; return resultant(clipLoad(l, Math.max(l.a, xn), l.b)).W; }
function gauss(A_, b){ const n = b.length, M = A_.map((r, i) => r.concat([b[i]]));
  for(let c = 0; c < n; c++){ let pv = c; for(let r = c + 1; r < n; r++) if(Math.abs(M[r][c]) > Math.abs(M[pv][c])) pv = r; if(Math.abs(M[pv][c]) < 1e-12) return null; [M[c], M[pv]] = [M[pv], M[c]];
    for(let r = 0; r < n; r++) if(r !== c){ const f = M[r][c]/M[c][c]; for(let k = c; k <= n; k++) M[r][k] -= f*M[c][k]; } }
  return M.map((r, i) => r[n]/r[i]); }
const Vat = (res, x, side) => { const s = res.segs.find(q => side === '-' ? x > q.a + 1e-9 && x <= q.b + 1e-9 : x >= q.a - 1e-9 && x < q.b - 1e-9) || res.segs[res.segs.length - 1]; return pev(s.V, Math.min(Math.max(x, s.a), s.b)); };
const Mat = (res, x) => { const s = res.segs.find(q => x >= q.a - 1e-9 && x <= q.b + 1e-9) || res.segs[0]; return pev(s.M, x); };

/* ---------- flèche (double intégration numérique) ---------- */
function deflection(res, EI){
  const N = 600, L = res.L, dx = L/N, xs = [], m = [];
  for(let i = 0; i <= N; i++){ const x = i*dx; xs.push(x); m.push(Mat(res, x)/EI); }
  const th = [0], w = [0];
  for(let i = 1; i <= N; i++){ th[i] = th[i-1] + (m[i] + m[i-1])/2*dx; w[i] = w[i-1] + (th[i] + th[i-1])/2*dx; }
  // y = w + C1 x + C2 : conditions d'appui (moindres carrés, exactes si M est juste)
  const rows = [];
  res.ap.forEach(s => { const i = Math.round(s.x/dx); rows.push([xs[i], 1, -w[i]]); if(s.t === 'E') rows.push([1, 0, -th[i]]); });
  let a11 = 0, a12 = 0, a22 = 0, b1 = 0, b2 = 0; rows.forEach(([u, v, r]) => { a11 += u*u; a12 += u*v; a22 += v*v; b1 += u*r; b2 += v*r; });
  const det = a11*a22 - a12*a12; const C1 = (b1*a22 - b2*a12)/det, C2 = (a11*b2 - a12*b1)/det;
  const y = w.map((v, i) => v + C1*xs[i] + C2);
  let f = {y:0, x:0}; y.forEach((v, i) => { if(Math.abs(v) > Math.abs(f.y)) f = {y:v, x:xs[i]}; });
  return {xs, y, f};
}

/* =====================================================================
   FIGURES
   ===================================================================== */
const W0 = 660, ML = 46, MR = 30;
const sx = (L, x) => ML + x/L*(W0 - ML - MR);
function supportSvg(X, Y, t, atEnd){
  if(t === 'E'){ const left = atEnd === 'L', x = X + (left ? -2 : 2);
    return Rc(left ? x - 12 : x, Y - 26, 12, 52, {f:'url(#shh)', c:'none'}) + Ln(x, Y - 26, x, Y + 26, {w:2.6}); }
  const tri = `M${X},${Y + 4} L${X - 11},${Y + 22} L${X + 11},${Y + 22} Z`;
  return Pth(tri, {f:'#fff', w:1.6}) + (t === 'S' ? Ci(X - 6, Y + 26, 3.4, {f:'#fff'}) + Ci(X + 6, Y + 26, 3.4, {f:'#fff'}) + Ln(X - 15, Y + 31, X + 15, Y + 31, {w:1.4}) + Rc(X - 15, Y + 31, 30, 6, {f:'url(#shh)', c:'none'})
    : Ln(X - 15, Y + 22, X + 15, Y + 22, {w:1.4}) + Rc(X - 15, Y + 22, 30, 7, {f:'url(#shh)', c:'none'}));
}
function beamSvg(p, opt={}){
  const L = +p.L, Y = 118, H = opt.res ? 232 : 192; let g = '';
  const loads = opt.loads || loadsOf(p, opt.comb || 'brut', opt.pp);
  // charges réparties
  const qmax = Math.max(1e-9, ...loads.filter(l => l.t === 'q' || l.t === 't').map(l => Math.max(Math.abs(l.v1), Math.abs(l.v2))));
  const lanes = [];
  loads.filter(l => l.t === 'q' || l.t === 't').sort((u, v) => (v.pp ? 1 : 0) - (u.pp ? 1 : 0)).forEach((l, k) => {
    let lv = 0; while(lanes[lv] && lanes[lv].some(([a, b]) => Math.min(b, l.b) - Math.max(a, l.a) > 1e-6)) lv++; (lanes[lv] = lanes[lv] || []).push([l.a, l.b]);
    const x1 = sx(L, l.a), x2 = sx(L, l.b), h1 = 10 + 22*Math.abs(l.v1)/qmax, h2 = 10 + 22*Math.abs(l.v2)/qmax;
    const yy = Y - 12 - lv*48;
    g += Pth(`M${x1},${yy} L${x1},${yy - h1} L${x2},${yy - h2} L${x2},${yy} Z`, {f:l.pp ? '#E3DFD7' : '#FDEEE2', c:l.pp ? C.GR : C.OR, w:1.2});
    const n = Math.max(2, Math.round((x2 - x1)/22));
    for(let i = 0; i <= n; i++){ const xx = x1 + (x2 - x1)*i/n, hh = h1 + (h2 - h1)*i/n; g += Ln(xx, yy - hh, xx, yy - 2, {c:l.pp ? C.GR : C.OR, w:1.2, m:l.pp ? '' : 'so'}); }
    const lab = opt.raw ? (l.pp ? `pp = ${nf(l.g, 2)}` : `G=${nf(l.g, 2)}${l.q ? ' Q=' + nf(l.q, 2) : ''}`) + (l.t === 't' ? ' → ' + nf(l.g2, 2) + (l.q2 ? '/' + nf(l.q2, 2) : '') : '') + ' kN/m' : `${l.pp ? 'pp ' : 'q = '}${nf(l.v1, 2)}${l.t === 't' ? ' → ' + nf(l.v2, 2) : ''} kN/m`;
    g += T(Math.min(x1 + 4, W0 - 150), yy - Math.max(h1, h2) - 5, lab, {s:11, c:l.pp ? C.GR : '#C95F18', b:1});
  });
  // poutre
  g += Rc(sx(L, 0), Y - 5, sx(L, L) - sx(L, 0), 10, {f:'#D9D3C7', w:1.6});
  // appuis
  (opt.res ? opt.res.ap : (p.appuis || [])).forEach(s => { const X = sx(L, +s.x); g += supportSvg(X, Y + 5, s.t, Math.abs(+s.x) < 1e-6 ? 'L' : 'R'); });
  // forces ponctuelles et couples
  loads.filter(l => l.t === 'P').forEach((l, k) => { const X = sx(L, l.x); g += Ln(X, Y - 86, X, Y - 8, {c:C.RD, w:2.4, m:'sr'}) + T(Math.min(Math.max(X, 60), W0 - 60), Y - 92 - (k % 2)*13, opt.raw ? `G=${nf(l.g, 2)}${l.q ? ' Q=' + nf(l.q, 2) : ''} kN` : `${nf(l.v, 2)} kN`, {a:'middle', s:11, c:C.RD, b:1}); });
  loads.filter(l => l.t === 'C').forEach(l => { const X = sx(L, l.x), cw = l.v >= 0;
    g += Pth(`M${X - 16},${Y - 10} A16,16 0 1,1 ${X + 16},${Y - 10}`, {c:C.BL, w:2}) + Ln(cw ? X + 14 : X - 14, Y - 15, cw ? X + 16 : X - 16, Y - 9, {c:C.BL, w:2, m:'sb'}) + T(X, Y - 32, `${opt.raw ? 'C' : 'C'} = ${nf(Math.abs(opt.raw ? l.g : l.v), 2)} kN·m ${cw ? '↻' : '↺'}`, {a:'middle', s:11, c:C.BL, b:1}); });
  // réactions
  if(opt.res) opt.res.ap.forEach((s, i) => { const X = sx(L, s.x), up = s.R >= 0;
    g += Ln(X + (s.t === 'E' ? (s.x < 1e-6 ? 16 : -16) : 0), up ? Y + 82 : Y + 50, X + (s.t === 'E' ? (s.x < 1e-6 ? 16 : -16) : 0), up ? Y + 50 : Y + 82, {c:C.OK, w:2.4, m:'sg'});
    g += T(X, Y + 98, `${apName(i)} : ${nf(s.R, 2)} kN`, {a:'middle', s:11, c:C.OK, b:1});
    if(s.t === 'E') g += T(X, Y + 112, `M = ${nf(s.M, 2)} kN·m`, {a:'middle', s:11, c:C.OK, b:1}); });
  // cotes
  const xs = [...new Set([0, L].concat((opt.res ? opt.res.ap : p.appuis || []).map(s => +s.x)).concat((p.ch || []).flatMap(c => c.t === 'P' || c.t === 'C' ? [+c.a] : [+c.a, +c.b])))].filter(x => isFinite(x)).sort((a, b) => a - b).filter((x, i, a) => !i || x - a[i-1] > 1e-6);
  const yd = opt.res ? H - 22 : H - 24;
  for(let i = 0; i < xs.length - 1; i++) if(sx(L, xs[i+1]) - sx(L, xs[i]) > 14) g += Dim(sx(L, xs[i]), yd, sx(L, xs[i+1]), yd, nf(xs[i+1] - xs[i], 2));
  xs.forEach(x => { g += Ln(sx(L, x), yd - 6, sx(L, x), yd + 6, {c:C.GR, w:1}); });
  g += T(sx(L, L), H - 4, 'cotes en m', {a:'end', s:10, c:C.GR});
  if(!opt.res) (p.appuis || []).forEach((s, i) => { const X = sx(L, +s.x), last = X > W0 - 60; g += T(X + (last ? -18 : 18), Y + 30, apName(i), {a:last ? 'end' : 'start', s:12, b:1, c:C.INK}); });
  return SV(W0, H, g, 'Schéma mécanique de la poutre');
}
const apName = i => 'ABCDEFGHIJ'[i] || ('S' + (i + 1));
function diagSvg(res, what){
  const L = res.L, H = 190, Y0 = 92, isM = what === 'M';
  const vals = []; const pts = [];
  res.segs.forEach(s => { const n = Math.max(2, Math.ceil((s.b - s.a)/L*80)); for(let i = 0; i <= n; i++){ const x = s.a + (s.b - s.a)*i/n; pts.push([x, pev(isM ? s.M : s.V, x)]); } });
  const mx = Math.max(1e-9, ...pts.map(p => Math.abs(p[1]))), k = 70/mx;
  const Y = v => isM ? Y0 + v*k : Y0 - v*k; // M tracé côté fibre tendue (positif vers le bas)
  let g = Ln(sx(L, 0), Y0, sx(L, L), Y0, {c:C.INK, w:1.6});
  const d = `M${sx(L, 0)},${Y0} ` + pts.map(p => `L${sx(L, p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ') + ` L${sx(L, L)},${Y0} Z`;
  g += Pth(d, {f:isM ? '#FDEEE2' : '#E4EDFC', c:isM ? C.OR : C.BL, w:1.8});
  // étiquettes aux points clés
  const lab = []; const add = (x, v) => { if(Math.abs(v) < mx*.02) return; if(lab.some(q => Math.abs(q[0] - x) < L*.07 && Math.abs(q[1] - v) < mx*.15)) return; lab.push([x, v]); };
  res.key.forEach(q => add(q.x, isM ? q.M : q.V));
  if(isM){ add(res.Mmax.x, res.Mmax.M); add(res.Mmin.x, res.Mmin.M); res.segs.forEach(s => roots(s.V, s.a, s.b).forEach(x => add(x, pev(s.M, x)))); }
  lab.forEach(([x, v]) => { const X = sx(L, x), YY = Y(v); g += Ci(X, YY, 2.6, {f:isM ? C.OR : C.BL, c:isM ? C.OR : C.BL}) + T(Math.min(Math.max(X, 40), W0 - 40), YY + ((isM ? v > 0 : v < 0) ? 15 : -7), nf(v, 2), {a:'middle', s:10.5, b:1, c:C.INK}); });
  res.ap.forEach(s => { g += Ln(sx(L, s.x), Y0 - 80, sx(L, s.x), Y0 + 80, {c:C.GR, w:.8, d:'3 4'}); });
  g += T(10, 16, isM ? 'M (kN·m) — tracé du côté de la fibre tendue' : 'V (kN)', {s:11, b:1, c:isM ? '#C95F18' : C.BL});
  if(isM){ g += T(10, Y0 - 6, '−', {s:14, b:1, c:C.GR}) + T(10, Y0 + 16, '+', {s:14, b:1, c:C.GR}); }
  return SV(W0, H, g, isM ? 'Diagramme du moment fléchissant' : 'Diagramme de l\'effort tranchant');
}
function deflSvg(res, D){
  const L = res.L, H = 130, Y0 = 50, mx = Math.max(1e-12, ...D.y.map(Math.abs)), k = 45/mx;
  let g = Ln(sx(L, 0), Y0, sx(L, L), Y0, {c:C.GR, w:1, d:'4 4'});
  g += Pth('M' + D.xs.map((x, i) => `${sx(L, x).toFixed(1)},${(Y0 - D.y[i]*k).toFixed(1)}`).join(' L'), {c:C.BL, w:2.4});
  g += Ci(sx(L, D.f.x), Y0 - D.f.y*k, 3, {f:C.RD, c:C.RD}) + T(sx(L, D.f.x), Y0 - D.f.y*k + (D.f.y < 0 ? 16 : -8), `f = ${nf(Math.abs(D.f.y)*1000, 1)} mm`, {a:'middle', s:11, b:1, c:C.RD});
  res.ap.forEach(s => { g += supportSvg(sx(L, s.x), Y0, s.t, s.x < 1e-6 ? 'L' : 'R'); });
  return SV(W0, H + 20, g, 'Déformée de la poutre');
}

/* =====================================================================
   BÉTON ARMÉ (BAEL 91 modifié 99)
   ===================================================================== */
const DIAMS = [8, 10, 12, 14, 16, 20, 25, 32];
const sec = d => Math.PI*d*d/400;            // cm² (d en mm)
const kgm = d => .00617*d*d;                  // kg/m
const CAQ = [7, 8, 9, 10, 11, 13, 16, 20, 25, 35, 40];
function mat(p){
  const fc = +p.fc28 || 25, fe = +p.fe || 500, gb = 1.5, gs = 1.15, th = 1;
  const fbu = .85*fc/(th*gb), fsu = fe/gs, ft = .6 + .06*fc, Es = 200000, el = fsu/Es, al = 3.5/(3.5 + 1000*el), mul = .8*al*(1 - .4*al);
  const sbc = .6*fc, eta = 1.6, ssFP = Math.min(2/3*fe, Math.max(.5*fe, 110*Math.sqrt(eta*ft)));
  const tsu = .6*1.5*1.5*ft, lsk = fe/(4*tsu);
  return {fc, fe, gb, gs, fbu, fsu, ft, Es, el, al, mul, sbc, ssFP, tsu, lsk, Ei:11000*Math.cbrt(fc), Ev:3700*Math.cbrt(fc)};
}
function flex(Mu, b, d, M){ // Mu kN·m, b et d en m → résultat en cm²
  const mu = Mu*1e-3/(b*d*d*M.fbu);
  if(mu <= M.mul){ const al = 1.25*(1 - Math.sqrt(1 - 2*mu)), z = d*(1 - .4*al), As = Mu*1e-3/(z*M.fsu)*1e4; return {mu, al, z, As, Asc:0, ok:true}; }
  const Ml = M.mul*b*d*d*M.fbu*1e3, dp = .05, al = M.al, z = d*(1 - .4*al), Asc = (Mu - Ml)*1e-3/((d - dp)*M.fsu)*1e4, As = Ml*1e-3/(z*M.fsu)*1e4 + Asc;
  return {mu, al, z, As, Asc, Ml, ok:false};
}
function pickBars(As, b_cm, c_cm, dt, opt={}){
  const e0 = 2.5; let best = null;
  DIAMS.filter(d => d >= (opt.dmin || 10) && d <= (opt.dmax || 25)).forEach(d => {
    const nl = Math.max(2, Math.floor((b_cm - 2*(c_cm + dt/10) + Math.max(d/10, e0))/(d/10 + Math.max(d/10, e0))));
    for(let n = Math.max(2, opt.nmin || 2); n <= Math.min(2*nl, opt.nmax || 10); n++){ const A_ = n*sec(d); if(A_ + 1e-9 < As) continue;
      const layers = n > nl ? 2 : 1, cost = A_ + (layers - 1)*.4 + n*.02;
      if(!best || cost < best.cost) best = {n, d, A:A_, layers, nl, cost}; break; }
  });
  if(!best){ const d = opt.dmax || 25, nl = Math.max(2, Math.floor((b_cm - 2*(c_cm + dt/10) + d/10)/(2*d/10))); best = {n:2*nl, d, A:2*nl*sec(d), layers:2, nl, cost:0, insuf:true}; }
  return best;
}
const barTxt = bb => `${bb.n} HA${bb.d}`;
function elsCheck(Ms, b, d, As, M, fiss){ // Ms kN·m, b,d m, As cm² ; section rectangulaire fissurée, n = 15
  const A_ = As*1e-4, n = 15; const y = (-n*A_ + Math.sqrt(n*n*A_*A_ + 2*b*n*A_*d))/b;
  const I = b*y*y*y/3 + n*A_*(d - y)*(d - y), sb = Ms*1e-3*y/I, ss = n*Ms*1e-3*(d - y)/I;
  return {y, I, sb, ss, okb: sb <= M.sbc + 1e-9, oks: fiss !== 'FP' || ss <= M.ssFP + 1e-9};
}
function caquot(St0, lspan, Stlim){
  const half = lspan*100/2, rep = Math.max(1, Math.round(lspan/2)), seq = [{e:St0/2, n:1, first:true}];
  let pos = St0/2, i = Math.max(0, CAQ.indexOf(St0));
  while(pos < half - 1e-6){
    const e = CAQ[i], lastStep = i >= CAQ.length - 1 || CAQ[i+1] > Stlim + 1e-9; let k = 0;
    while((lastStep || k < rep) && pos + e <= half + 1e-6){ pos += e; k++; }
    if(k) seq.push({e, n:k});
    if(lastStep || pos + CAQ[i+1] > half + 1e-6) break;
    i++;
  }
  return seq;
}

function design(p, U, S_){
  const M = mat(p), b = p.b/100, h = p.h/100, c = (+p.c || 3)/100, fiss = p.fiss || 'FPP';
  const d = h - c - .008 - .006; // enrobage + cadre (≈ 8 mm) + demi-barre (≈ 6 mm)
  const out = {M, b, h, c, d, fiss};
  // moments de calcul : travées (max positif) et appuis (min négatif)
  const sp = U.sp || [{a:U.ap[0].x, b:U.ap[0].x, l:0}];
  const span = (U.sp || []).map((s, k) => { let mu = {M:0, x:(s.a + s.b)/2}, ms = 0;
    U.segs.forEach(g => { if(g.b < s.a - 1e-9 || g.a > s.b + 1e-9) return; [Math.max(g.a, s.a), Math.min(g.b, s.b)].concat(roots(g.V, Math.max(g.a, s.a), Math.min(g.b, s.b))).forEach(x => { const m = pev(g.M, x); if(m > mu.M) mu = {M:m, x}; }); });
    ms = Mat(S_, mu.x); return {k, s, Mu:mu.M, x:mu.x, Ms:Math.max(0, ms)}; });
  const supp = U.ap.map((s, i) => ({i, s, Mu:Math.min(0, Mat(U, s.x)), Ms:Math.min(0, Mat(S_, s.x))}));
  // consoles : moment négatif à l'encastrement de la console
  out.span = span; out.supp = supp;
  out.Vu = Math.abs(U.Vmax.V);
  const dt0 = 6;
  span.forEach(t => { t.f = flex(Math.max(t.Mu, 0), b, d, M); t.Amin = .23*b*d*M.ft/M.fe*1e4; t.Areq = Math.max(t.f.As, t.Amin); t.bars = pickBars(t.Areq, p.b, p.c || 3, dt0, {dmin:10});
    t.els = elsCheck(t.Ms, b, d, t.bars.A, M, fiss);
    if(!t.els.oks){ const zs = d*(1 - (t.els.y/d)/3), Aser = t.Ms*1e-3/(zs*M.ssFP)*1e4; t.Aser = Aser; t.bars = pickBars(Math.max(t.Areq, Aser), p.b, p.c || 3, dt0, {dmin:10}); t.els = elsCheck(t.Ms, b, d, t.bars.A, M, fiss); } });
  supp.forEach(t => { if(t.Mu > -1e-6){ t.none = true; return; } t.f = flex(-t.Mu, b, d, M); t.Amin = .23*b*d*M.ft/M.fe*1e4; t.Areq = Math.max(t.f.As, t.Amin); t.bars = pickBars(t.Areq, p.b, p.c || 3, dt0, {dmin:10});
    t.els = elsCheck(-t.Ms, b, d, t.bars.A, M, fiss); });
  // effort tranchant
  const dl = Math.max(...span.map(t => t.bars.d), 10);
  const tu = out.Vu*1e-3/(b*d), tlim = fiss === 'FP' ? Math.min(.15*M.fc/M.gb, 4) : Math.min(.2*M.fc/M.gb, 5);
  const dtx = Math.min(p.h*10/35, p.b*10/10, dl); const dt = dtx >= 8 && (p.h >= 60 || dl >= 16) ? 8 : 6;
  const At = 2*sec(dt), Stc = tu > .3*M.ft ? At*.9*M.fe/(M.gs*p.b*(tu - .3*M.ft)) : Infinity, Stmax = Math.min(.9*d*100, 40), Stpct = At*M.fe/(.4*p.b);
  const Stv = Math.min(Stc, Stmax, Stpct); const St0 = [...CAQ].reverse().find(e => e <= Stv + 1e-9) || 7;
  out.sh = {tu, tlim, ok:tu <= tlim, dt, dtx, At, Stc, Stmax, Stpct, Stv, St0};
  // chapeaux : longueur de part et d'autre de l'appui
  const lsOf = dd => M.lsk*dd/1000; // m
  supp.forEach(t => { if(t.none) return; const x = t.s.x; let lg = 0, ld = 0;
    // point de moment nul de chaque côté
    const zero = dir => { const st = U.L/400; let xx = x; for(let k = 0; k < 400; k++){ xx += dir*st; if(xx < 0 || xx > U.L) return dir < 0 ? x : U.L - x; if(Mat(U, xx) >= 0) return Math.abs(xx - x); } return Math.abs(xx - x); };
    const zg = x > 1e-6 ? zero(-1) : 0, zd = x < U.L - 1e-6 ? zero(1) : 0;
    const spanG = U.sp && U.sp.find(s => Math.abs(s.b - x) < 1e-6), spanD = U.sp && U.sp.find(s => Math.abs(s.a - x) < 1e-6);
    const ls = lsOf(t.bars.d), dec = .8*h;
    if(x > 1e-6) lg = Math.min(x, Math.max(zg + dec, ls, spanG ? spanG.l/4 : 0)); if(x < U.L - 1e-6) ld = Math.min(U.L - x, Math.max(zd + dec, ls, spanD ? spanD.l/4 : 0));
    if(t.s.t === 'E'){ if(x < 1e-6) lg = 0; else ld = 0; }
    t.lg = lg; t.ld = ld; t.ls = ls; t.zg = zg; t.zd = zd; });
  // cadres : répartition de Caquot dans chaque travée
  out.cadres = (U.sp || []).map(s => ({s, seq:caquot(St0, s.l, Math.min(Stmax, Stpct))}));
  // nomenclature
  const first = U.ap[0].x, last = U.ap[U.ap.length - 1].x;
  const Lb = U.L + (first < 1e-6 ? .10 : 0) + (last > U.L - 1e-6 ? .10 : 0); // + demi-largeur des poteaux de rive
  out.Lb = Lb;
  const rows = []; let rep = 1;
  const tb = span.reduce((a, t) => t.bars.A > a.A ? t.bars : a, span[0] ? span[0].bars : {n:2, d:10, A:2*sec(10)});
  const Linf = Lb - 2*c + 2*10*tb.d/1000;
  rows.push({rep:rep++, n:tb.n, d:tb.d, des:span.length ? 'Aciers inférieurs (travées), filants' : 'Aciers inférieurs de montage', forme:'Barre droite à crochets d\'about à 90°', lu:Linf});
  const dm = p.b >= 25 ? 12 : 10;
  rows.push({rep:rep++, n:2, d:dm, des:'Aciers de montage (haut), filants', forme:'Barre droite à crochets d\'about', lu:Lb - 2*c + 2*10*dm/1000});
  supp.forEach((t, i) => { if(t.none) return; const lu = t.lg + t.ld + (t.s.t === 'E' || (t.s.x < 1e-6 || t.s.x > U.L - 1e-6) ? t.ls*.4 + 10*t.bars.d/1000 : 0);
    rows.push({rep:rep++, n:t.bars.n, d:t.bars.d, des:`Chapeaux sur appui ${apName(i)}`, forme:t.s.t === 'E' || t.s.x < 1e-6 || t.s.x > U.L - 1e-6 ? 'Barre droite, ancrée par crochet dans l\'appui' : 'Barre droite', lu}); });
  // consoles : aciers supérieurs sur toute la console (déjà couverts par les chapeaux de l'appui de rive)
  let nc = 0; out.cadres.forEach(cc => { cc.count = 2*cc.seq.reduce((a, q) => a + q.n, 0); nc += cc.count; });
  const cons = (first > 1e-6 ? first : 0) + (last < U.L - 1e-6 ? U.L - last : 0); if(cons > 0) nc += Math.ceil(cons/(out.sh.St0/100)) + 1;
  if(U.kind === 'console') nc = Math.ceil(U.L/(out.sh.St0/100)) + 1;
  const per = 2*(p.b/100 - 2*c) + 2*(p.h/100 - 2*c) + 2*10*dt/1000;
  rows.push({rep:rep++, n:nc, d:dt, des:`Cadres HA${dt}`, forme:'Cadre fermé, crochets à 135°', lu:per});
  rows.forEach(r => { r.lt = r.n*r.lu; r.kg = r.lt*kgm(r.d); });
  out.rows = rows; out.kg = rows.reduce((a, r) => a + r.kg, 0); out.vol = b*h*Lb; out.ratio = out.kg/out.vol;
  return out;
}

function sectionSvg(p, D, t, top){
  const W = 300, H = 240, k = Math.min(150/p.h, 150/p.b, 4), bw = p.b*k, hh = p.h*k, x0 = (W - bw)/2 - 30, y0 = 24, c = (p.c || 3)*k, dtk = D.sh.dt/10*k;
  let g = Rc(x0, y0, bw, hh, {f:C.CO, w:2});
  g += Rc(x0 + c, y0 + c, bw - 2*c, hh - 2*c, {c:C.BL, w:2.2, rx:4});
  const place = (bars, yc, col) => { const n = bars.n, nl = Math.min(n, bars.nl || n), r = Math.max(3, bars.d/10*k/2); let out = '';
    for(let i = 0; i < n; i++){ const layer = i < nl ? 0 : 1, idx = layer ? i - nl : i, cnt = layer ? n - nl : nl; const xx = x0 + c + dtk + r + (cnt > 1 ? idx*(bw - 2*c - 2*dtk - 2*r)/(cnt - 1) : (bw - 2*c - 2*dtk - 2*r)/2);
      out += Ci(xx, yc + (top ? 1 : -1)*layer*(2*r + 3*k*.6), r, {f:col, c:C.INK, w:1}); } return out; };
  const tb = D.span.length ? D.span.reduce((a, q) => q.bars.A > a.A ? q.bars : a, D.span[0].bars) : {n:2, d:p.b >= 25 ? 12 : 10, nl:2}; const bot = top ? tb : t.bars, tp = top ? t.bars : {n:2, d:p.b >= 25 ? 12 : 10, nl:2};
  g += place(bot, y0 + hh - c - dtk - Math.max(3, bot.d/10*k/2), top ? '#9AA3AD' : C.OR);
  g += place(tp, y0 + c + dtk + Math.max(3, tp.d/10*k/2), top ? C.OR : '#9AA3AD');
  g += Dim(x0, y0 + hh + 16, x0 + bw, y0 + hh + 16, `b = ${nf(p.b)} cm`) + Dim(x0 + bw + 16, y0, x0 + bw + 16, y0 + hh, `h = ${nf(p.h)} cm`);
  g += T(x0 + bw + 34, y0 + 14, top ? `${barTxt(t.bars)} (chapeaux)` : '2 HA' + (p.b >= 25 ? 12 : 10) + ' (montage)', {s:11, c:top ? '#C95F18' : C.GR, b:top});
  g += T(x0 + bw + 34, y0 + hh - 6, top ? `${barTxt(tb)} (filants)` : `${barTxt(t.bars)} (travée)`, {s:11, c:top ? C.GR : '#C95F18', b:!top});
  g += T(x0 + bw + 34, y0 + hh/2, `Cadre HA${D.sh.dt}`, {s:11, c:C.BL});
  g += T(W/2 + 40, H - 4, top ? 'Coupe sur appui' : 'Coupe en travée', {a:'middle', s:11.5, b:1});
  return SV(W + 80, H, g, 'Coupe de la section');
}
function elevSvg(p, U, D){
  const L = U.L, H = 230, yT = 70, yB = 150; let g = '';
  g += Rc(sx(L, 0), yT, sx(L, L) - sx(L, 0), yB - yT, {f:'#F1EEE8', w:1.6});
  U.ap.forEach((s, i) => { const X = sx(L, s.x); g += Rc(X - 8, yB, 16, 34, {f:'url(#shh)', w:1}) + T(X, yB + 48, apName(i), {a:'middle', b:1}); });
  // aciers inférieurs
  g += Ln(sx(L, 0) + 6, yB - 10, sx(L, L) - 6, yB - 10, {c:C.OR, w:3}) + Ln(sx(L, 0) + 6, yB - 10, sx(L, 0) + 6, yB - 30, {c:C.OR, w:3}) + Ln(sx(L, L) - 6, yB - 10, sx(L, L) - 6, yB - 30, {c:C.OR, w:3});
  // montage
  g += Ln(sx(L, 0) + 6, yT + 10, sx(L, L) - 6, yT + 10, {c:'#9AA3AD', w:2});
  // chapeaux
  D.supp.forEach((t, i) => { if(t.none) return; const x1 = sx(L, t.s.x - t.lg), x2 = sx(L, t.s.x + t.ld);
    g += Ln(Math.max(x1, sx(L, 0) + 4), yT + 18, Math.min(x2, sx(L, L) - 4), yT + 18, {c:C.RD, w:3});
    if(t.lg > 0) g += Dim(x1, yT - 14, sx(L, t.s.x), yT - 14, nf(t.lg, 2) + ' m'); if(t.ld > 0) g += Dim(sx(L, t.s.x), yT - 14, x2, yT - 14, nf(t.ld, 2) + ' m');
    g += T((x1 + x2)/2, yT - 32, `Chapeaux ${barTxt(t.bars)}`, {a:'middle', s:11, b:1, c:C.RD}); });
  // cadres
  const marks = [];
  D.cadres.forEach(cc => { const s = cc.s; let pos = 0; cc.seq.forEach(q => { for(let k = 0; k < q.n; k++){ pos += q.e/100; if(pos <= s.l/2 + 1e-6){ marks.push(s.a + pos); marks.push(s.b - pos); } } }); });
  if(U.kind === 'console'){ for(let x = .05; x < L; x += D.sh.St0/100) marks.push(x); }
  marks.forEach(x => { g += Ln(sx(L, x), yT + 4, sx(L, x), yB - 4, {c:C.BL, w:1}); });
  g += T(sx(L, 0), H - 14, `Aciers inférieurs ${D.span.length ? barTxt(D.span.reduce((a, t) => t.bars.A > a.A ? t.bars : a, D.span[0].bars)) : ''} filants · cadres HA${D.sh.dt} (répartition de Caquot, espacement initial ${D.sh.St0} cm)`, {s:11, c:C.INK});
  return SV(W0, H, g, 'Plan de ferraillage (élévation)');
}

/* =====================================================================
   ÉTAPES
   ===================================================================== */
const mdTable = (head, rows) => `| ${head.join(' | ')} |\n| ${head.map(() => '---').join(' | ')} |\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
function solve(p){
  const comb = p.ba ? 'ELU' : (p.comb || 'brut');
  const U = analyse(p, comb, p.ba && p.pp), steps = [];
  const k = COMB[comb], aps = U.ap;
  // 1. modélisation
  steps.push({t:'Modélisation de la poutre', md:`Poutre de longueur **L = ${nf(U.L)} m** reposant sur ${aps.length} appui${aps.length > 1 ? 's' : ''} : ${aps.map((s, i) => `**${apName(i)}** (${TYPES_AP.find(t => t[0] === s.t)[1].toLowerCase()}, x = ${nf(s.x)} m)`).join(', ')}.${U.note ? `\n\n> [!astuce] Remarque\n> ${U.note}` : ''}\n\nOn prend l'origine des abscisses x à l'extrémité gauche de la poutre ; les charges sont comptées positives vers le bas.`,
    html:`<div class="solfig">${beamSvg(p, {raw:true, pp:p.ba && p.pp, comb})}</div>`});
  // 2. charges de calcul
  const lq = U.loads;
  steps.push({t:'Charges de calcul', md:`Combinaison utilisée : **${k.n}**.\n\n` + mdTable(['Charge', 'Type', 'Position', 'G', 'Q', 'Valeur de calcul'], lq.map(l => [l.pp ? 'Poids propre' : 'Charge ' + (l.i + 1), l.t === 'P' ? 'ponctuelle' : l.t === 'C' ? 'couple' : l.t === 't' ? 'répartie variable' : 'répartie', l.t === 'P' || l.t === 'C' ? `x = ${nf(l.x)} m` : `de ${nf(l.a)} à ${nf(l.b)} m`,
      nf(l.g, 2) + (l.t === 't' ? ' → ' + nf(l.g2, 2) : ''), nf(l.q, 2) + (l.t === 't' ? ' → ' + nf(l.q2, 2) : ''), `**${nf(l.t === 'P' || l.t === 'C' ? l.v : l.v1, 3)}${l.t === 't' ? ' → ' + nf(l.v2, 3) : ''} ${unitOf(l.t)}**`])) +
      (comb === 'ELU' ? `\n\n$$ p_u = 1,35 × G + 1,5 × Q` : '') + (p.ba && p.pp ? `\n\nLe **poids propre** de la poutre est ajouté : $$ g_pp = 25 × ${nf(p.b/100, 2)} × ${nf(p.h/100, 2)} = ${nf(25*p.b/100*p.h/100, 3)} kN/m` : ''),
    ask: lq.length && comb === 'ELU' && lq[0].t !== 'C' && !lq[0].pp ? [{l:`Valeur de calcul de la charge 1`, v:lq[0].t === 'P' ? lq[0].v : lq[0].v1, u:unitOf(lq[0].t)}] : null,
    hint:'Multipliez les charges permanentes G par 1,35 et les charges d\'exploitation Q par 1,5, puis additionnez.'});
  // 3. degré d'hyperstaticité
  const rDet = aps.map(s => s.t === 'S' ? 1 : s.t === 'A' ? 2 : 3);
  const hb = U.unk.length;
  steps.push({t:'Degré d\'hyperstaticité', q:'Comptez les inconnues de liaison (appui simple : 1, articulation : 2, encastrement : 3) et déduisez le degré h = r − 3.',
    md:`Nombre d'inconnues de liaison : $$ r = ${rDet.join(' + ')} = ${U.r}\nLa statique fournit 3 équations dans le plan (ΣFx = 0, ΣFy = 0, ΣM = 0) :\n$$ h = r − 3 = ${U.r} − 3 = ${U.h}\n\n` +
      (U.h === 0 ? '→ La poutre est **isostatique** : les équations d\'équilibre suffisent pour trouver les réactions.' : `→ La poutre est **hyperstatique de degré ${U.h}**.` + (U.hH ? ` Sous charges verticales, ${U.hH} de ces inconnues sont horizontales et nulles ; il reste **${hb} inconnue${hb > 1 ? 's' : ''} de flexion** (moment${hb > 1 ? 's' : ''} sur appui${hb > 1 ? 's' : ''}).` : ` On choisit comme inconnues hyperstatiques les **moments sur appuis** et on utilise le **théorème des trois moments (Clapeyron)**.`)),
    ask:[{l:'Nature de la poutre', o:['Isostatique', 'Hyperstatique'], v:U.h > 0 ? 1 : 0}, {l:'Degré h', v:U.h, abs:.01}],
    hint:'Un appui simple bloque 1 déplacement, une articulation 2 (horizontal et vertical), un encastrement 3 (deux déplacements et la rotation).'});
  // 4. réactions
  const sumW = lq.reduce((a, l) => a + (l.t === 'P' ? l.v : l.t === 'C' ? 0 : resultant(l).W), 0);
  const dl = lq.filter(l => l.t === 'q' || l.t === 't');
  if(dl.length) steps.push({t:'Résultantes des charges réparties', md:'Chaque charge répartie est remplacée, pour écrire l\'équilibre, par sa **résultante** appliquée au centre de gravité du diagramme de charge.\n\n' + dl.map((l, j) => { const r_ = resultant(l); return l.t === 'q' || Math.abs(l.v1 - l.v2) < 1e-9
      ? `$$ W${j + 1} = q × l = ${nf(l.v1, 3)} × ${nf(r_.len, 3)} = ${nf(r_.W, 3)} kN   appliquée en x = ${nf(l.a, 3)} + ${nf(r_.len, 3)}/2 = ${nf(r_.xg, 3)} m`
      : `$$ W${j + 1} = (q₁ + q₂)/2 × l = (${nf(l.v1, 3)} + ${nf(l.v2, 3)})/2 × ${nf(r_.len, 3)} = ${nf(r_.W, 3)} kN\n$$ x_G = a + l(q₁ + 2q₂)/(3(q₁ + q₂)) = ${nf(r_.xg, 3)} m`; }).join('\n') + `\n\nCharge verticale totale : $$ ΣW = ${nf(sumW, 3)} kN`,
    ask:[{l:'W1', v:resultant(dl[0]).W, u:'kN'}], hint:'Résultante = aire du diagramme de charge (rectangle : q × longueur ; trapèze : moyenne des deux valeurs × longueur).'});
  if(U.kind === 'console'){
    const s = aps[0], Pn = apName(0);
    steps.push({t:'Réactions de l\'encastrement', md:`Équilibre de la console encastrée en ${Pn} :\n$$ ΣFy = 0 : R_${Pn} − ΣW = 0  ⇒  R_${Pn} = ${nf(s.R, 3)} kN\n$$ ΣM/${Pn} = 0 : le moment d'encastrement équilibre le moment des charges\n$$ M_${Pn} = ${lq.map(l => l.t === 'C' ? `${l.v >= 0 ? '±' : '∓'}${nf(Math.abs(l.v), 2)}` : `− ${nf(l.t === 'P' ? l.v : resultant(l).W, 2)} × ${nf(Math.abs((l.t === 'P' ? l.x : resultant(l).xg) - s.x), 3)}`).join(' ')} = ${nf(s.M, 3)} kN·m\n\nLe moment est **négatif** : la fibre **supérieure** est tendue au droit de l'encastrement.`,
      ask:[{l:`R_${Pn}`, v:s.R, u:'kN'}, {l:`M_${Pn}`, v:s.M, u:'kN·m'}], hint:'Isolez la console : la réaction verticale reprend toute la charge, le moment d\'encastrement reprend le moment de toutes les charges par rapport à l\'encastrement.',
      html:`<div class="solfig">${beamSvg(p, {res:U, loads:lq})}</div>`});
  } else if(U.kind === 'iso'){
    const iA = 0, iB = aps.length - 1, xa = aps[iA].x, xb = aps[iB].x, nA = apName(iA), nB = apName(iB);
    const terms = lq.map(l => { if(l.t === 'C') return {txt:`${l.v >= 0 ? '+' : '−'} ${nf(Math.abs(l.v), 3)}`, v:l.v}; const W = l.t === 'P' ? l.v : resultant(l).W, xg = l.t === 'P' ? l.x : resultant(l).xg; return {txt:`${W*(xg - xa) >= 0 ? '+' : '−'} ${nf(W, 3)} × ${nf(Math.abs(xg - xa), 3)}`, v:W*(xg - xa)}; });
    const mom = terms.reduce((a, t) => a + t.v, 0);
    steps.push({t:'Réactions d\'appui (équations d\'équilibre)', q:`Écrivez ΣM/${nA} = 0 pour trouver R_${nB}, puis ΣFy = 0 pour R_${nA}.`,
      md:`Les charges étant verticales : $$ ΣFx = 0  ⇒  H_${nA} = 0\n\n**Moments par rapport à ${nA}** (sens horaire des charges = positif) :\n$$ R_${nB} × ${nf(xb - xa, 3)} = ${terms.map(t => t.txt).join(' ').replace(/^\+ /, '')}\n$$ R_${nB} = ${nf(mom, 3)} / ${nf(xb - xa, 3)} = ${nf(aps[iB].R, 3)} kN\n\n**Projection verticale** :\n$$ R_${nA} + R_${nB} = ΣW = ${nf(sumW, 3)} kN  ⇒  R_${nA} = ${nf(sumW, 3)} − ${nf(aps[iB].R, 3)} = ${nf(aps[iA].R, 3)} kN\n\n**Vérification** : ΣM/${nB} = 0 donne bien R_${nA} = ${nf(aps[iA].R, 3)} kN.`,
      ask:[{l:`R_${nB}`, v:aps[iB].R, u:'kN'}, {l:`R_${nA}`, v:aps[iA].R, u:'kN'}],
      hint:`Le bras de levier d'une charge est sa distance à ${nA}. Pour une charge répartie, utilisez sa résultante placée en son centre.`,
      html:`<div class="solfig">${beamSvg(p, {res:U, loads:lq})}</div>`});
  } else {
    // Clapeyron
    const sp = U.sp;
    const phiTxt = s => { const lines = []; s.loc.forEach(l => { if(l.t === 'q' && Math.abs(l.a) < 1e-9 && Math.abs(l.b - s.l) < 1e-9) lines.push(`charge uniforme q = ${nf(l.v1, 3)} kN/m sur toute la travée : 6EIθ = q l³/4 = ${nf(l.v1*Math.pow(s.l, 3)/4, 3)} de chaque côté`);
        else if(l.t === 'P'){ const a = l.x, b_ = s.l - l.x; lines.push(`force P = ${nf(l.v, 3)} kN à a = ${nf(a, 3)} m : 6EIθg = P a b (l + b)/l = ${nf(l.v*a*b_*(s.l + b_)/s.l, 3)} ; 6EIθd = P a b (l + a)/l = ${nf(l.v*a*b_*(s.l + a)/s.l, 3)}`); }
        else lines.push(`${l.t === 'C' ? 'couple' : 'charge répartie partielle'} : terme obtenu par intégration du moment isostatique`); });
      return lines; };
    steps.push({t:'Travées rendues isostatiques', md:`On coupe la poutre au droit de chaque appui intermédiaire : chaque travée devient une poutre **sur deux appuis simples**, chargée par ses propres charges (moment **isostatique** M₀) et par les moments sur appuis inconnus.\n\nPour chaque travée, on calcule les **rotations isostatiques** aux appuis (termes de chargement 6EIθ) :\n\n` +
      mdTable(['Travée', 'Portée l', '6EIθ gauche', '6EIθ droite'], sp.map(s => [`${apName(s.i - 1)}${apName(s.i)}`, nf(s.l, 3) + ' m', nf(6*s.phiG, 3), nf(6*s.phiD, 3)])) + '\n\n' + sp.map(s => `- Travée ${apName(s.i - 1)}${apName(s.i)} : ${phiTxt(s).join(' ; ') || 'pas de charge'}`).join('\n') +
      (U.mLeft || U.mRight ? `\n\nMoments connus dus aux **consoles** : ${U.mLeft ? `M_${apName(0)} = ${nf(U.mLeft, 3)} kN·m` : ''}${U.mLeft && U.mRight ? ' ; ' : ''}${U.mRight ? `M_${apName(aps.length - 1)} = ${nf(U.mRight, 3)} kN·m` : ''}.` : ''),
      hint:'Pour une charge uniforme q sur toute la travée, 6EIθ = q l³/4 de chaque côté.', ask:sp[0].loc.length ? [{l:`6EIθ gauche de la travée ${apName(0)}${apName(1)}`, v:6*sp[0].phiG}] : null});
    const eqTxt = U.eqs.map(e => { const parts = Object.entries(e.coef).sort((a, b) => a[0] - b[0]).map(([j, c]) => `${nf(c, 3)} M_${apName(+j)}`); return `$$ ${parts.join(' + ')} = ${nf(-6*((e.i > 0 ? sp[e.i - 1].phiD : 0) + (e.i < sp.length ? sp[e.i].phiG : 0)), 3)}`; }).join('\n');
    steps.push({t:'Équations des trois moments (Clapeyron)', q:`Écrivez l'équation de Clapeyron pour chaque appui inconnu et résolvez le système. Donnez ${U.unk.map(i => 'M_' + apName(i)).join(', ')}.`,
      md:`Pour un appui intermédiaire i entre les travées de portées lᵢ et lᵢ₊₁ (EI constant) :\n$$ Mᵢ₋₁ lᵢ + 2 Mᵢ (lᵢ + lᵢ₊₁) + Mᵢ₊₁ lᵢ₊₁ = − 6EI (θdᵢ + θgᵢ₊₁)\nUn **encastrement** se traite comme un appui avec une travée fictive de longueur nulle ; un appui de rive simple a un moment nul (ou le moment de la console).\n\nSystème obtenu :\n${eqTxt}\n${aps.map((s, i) => U.unk.includes(i) ? '' : `avec M_${apName(i)} = ${nf(U.Mk[i], 3)} kN·m (${(i === 0 && U.mLeft) || (i === aps.length - 1 && U.mRight) ? 'moment de la console' : 'appui de rive'})`).filter(Boolean).join(' ; ')}\n\nRésolution :\n${U.unk.map(i => `$$ M_${apName(i)} = ${nf(U.Mk[i], 3)} kN·m`).join('\n')}\n\nLes moments sur appuis sont **négatifs** : la fibre supérieure est tendue au-dessus des appuis (d'où les **chapeaux** en béton armé).`,
      ask:U.unk.map(i => ({l:`M_${apName(i)}`, v:U.Mk[i], u:'kN·m'})), hint:'Les moments sur appuis sont négatifs. Pour deux travées égales sous charge uniforme : M = − q l²/8.'});
    steps.push({t:'Réactions d\'appui', q:'Calculez les réactions en ajoutant aux réactions isostatiques l\'effet des moments sur appuis : ±(Mᵢ₊₁ − Mᵢ)/l.',
      md:`Dans chaque travée : $$ V_gauche = R₀g + (M_droite − M_gauche)/l   et   V_droite = R₀d − (M_droite − M_gauche)/l\n\n` + mdTable(['Travée', 'R₀ gauche', 'R₀ droite', '(Md − Mg)/l', 'Effort à gauche', 'Effort à droite'], sp.map(s => { const dm = (U.Mk[s.i] - U.Mk[s.i - 1])/s.l; return [`${apName(s.i - 1)}${apName(s.i)}`, nf(s.R0g, 3), nf(s.R0d, 3), nf(dm, 3), nf(s.R0g + dm, 3), nf(s.R0d - dm, 3)]; })) +
      `\n\nRéaction d'un appui = somme des efforts des deux travées voisines (+ charges des consoles) :\n${aps.map((s, i) => `$$ R_${apName(i)} = ${nf(s.R, 3)} kN`).join('\n')}\n\n**Vérification** : ΣR = ${nf(aps.reduce((a, s) => a + s.R, 0), 3)} kN = ΣW = ${nf(sumW, 3)} kN ✓`,
      ask:aps.map((s, i) => ({l:`R_${apName(i)}`, v:s.R, u:'kN'})).slice(0, 3), html:`<div class="solfig">${beamSvg(p, {res:U, loads:lq})}</div>`});
  }
  // 5. équations par tronçon
  const segs = U.segs.filter(s => s.b - s.a > 1e-6);
  steps.push({t:'Effort tranchant V(x) par tronçon', q:'Isolez la partie gauche de la poutre dans chaque tronçon et écrivez V(x) = somme des forces verticales à gauche de la section (vers le haut positif).',
    md:`Sur chaque tronçon, on fait une **coupure** à l'abscisse x et on isole la partie gauche :\n$$ V(x) = Σ (forces verticales à gauche de x, vers le haut +)\n\n` + mdTable(['Tronçon', 'V(x) en kN', 'V au début', 'V à la fin'], segs.map(s => [`${nf(s.a, 3)} ≤ x ≤ ${nf(s.b, 3)}`, `V(x) = ${pfmt(s.V)}`, nf(pev(s.V, s.a), 3), nf(pev(s.V, s.b), 3)])) + `\n\nL'effort tranchant **saute** au droit de chaque force ponctuelle et de chaque appui (d'une valeur égale à la force).`,
    ask:aps[0].x < U.L - 1e-6 ? [{l:'V juste à droite du premier appui', v:Vat(U, aps[0].x, '+'), u:'kN'}] : [{l:'V juste à gauche de l\'encastrement', v:Vat(U, U.L, '-'), u:'kN'}], hint:'Juste à droite du premier appui, V est égal à la réaction de cet appui, moins les charges qui sont à sa gauche (console).'});
  steps.push({t:'Moment fléchissant M(x) par tronçon', q:'Écrivez M(x) = somme des moments, par rapport à la section, des forces situées à gauche (sens horaire positif).',
    md:`$$ M(x) = Σ (moments par rapport à la section des forces à gauche de x) — et dM/dx = V(x)\n\n` + mdTable(['Tronçon', 'M(x) en kN·m', 'M au début', 'M à la fin'], segs.map(s => [`${nf(s.a, 3)} ≤ x ≤ ${nf(s.b, 3)}`, `M(x) = ${pfmt(s.M)}`, nf(pev(s.M, s.a), 3), nf(pev(s.M, s.b), 3)])) + `\n\nAux appuis simples d'extrémité sans console, le moment est nul ; au droit d'un encastrement ou d'un appui intermédiaire, il est égal au moment sur appui.`,
    ask:(() => { const s = segs[0]; return [{l:`M au milieu du premier tronçon (x = ${nf((s.a + s.b)/2, 3)} m)`, v:pev(s.M, (s.a + s.b)/2), u:'kN·m'}]; })(), hint:'Remplacez x par la valeur demandée dans l\'expression de M(x) du tronçon.'});
  // 6. moment maximal
  const Mx = U.Mmax, Mn = U.Mmin;
  steps.push({t:'Moment maximal', q:'Le moment est maximal là où l\'effort tranchant s\'annule. Trouvez cette abscisse et la valeur du moment.',
    md:(Mx.M > 1e-9 ? (Mx.root ? `En travée, M est maximal là où **V(x) = 0** :\n$$ V(x) = ${pfmt(Mx.s.V)} = 0  ⇒  x₀ = ${nf(Mx.x, 3)} m\n$$ M_max = M(${nf(Mx.x, 3)}) = ${nf(Mx.M, 3)} kN·m\n\n` : `Ici, V ne s'annule pas à l'intérieur d'un tronçon : il **change de signe en sautant** au droit d'une charge ponctuelle ou d'un appui, en x₀ = ${nf(Mx.x, 3)} m. C'est là que le moment est maximal :\n$$ M_max = M(${nf(Mx.x, 3)}) = ${nf(Mx.M, 3)} kN·m\n\n`) : 'Aucun moment positif : toute la poutre a la fibre supérieure tendue.\n\n') +
      (Mn.M < -1e-9 ? `Moment le plus négatif : $$ M_min = ${nf(Mn.M, 3)} kN·m  (en x = ${nf(Mn.x, 3)} m)\n` : '') + `Effort tranchant maximal (en valeur absolue) : $$ |V|max = ${nf(Math.abs(U.Vmax.V), 3)} kN  (en x = ${nf(U.Vmax.x, 3)} m)`,
    ask:Mx.M > 1e-9 ? [{l:'Abscisse x₀ où V = 0', v:Mx.x, u:'m', tol:.02, abs:Math.max(.02, U.L*.005)}, {l:'Moment maximal Mmax', v:Mx.M, u:'kN·m'}] : [{l:'Moment minimal', v:Mn.M, u:'kN·m'}],
    hint:'Résolvez V(x) = 0 dans le tronçon où V change de signe, puis calculez M en ce point.'});
  // 7. diagrammes
  steps.push({t:'Diagrammes de l\'effort tranchant et du moment fléchissant', md:`On trace V(x) et M(x) avec les valeurs des tronçons. Repères pour vérifier un diagramme :\n- là où V est constant, M varie **linéairement** ; là où la charge est uniforme, V est linéaire et M est une **parabole** ;\n- M est **maximal là où V s'annule** ;\n- aux forces ponctuelles, V fait un **saut** et M présente un **point anguleux**.\n\nLe moment est tracé **du côté de la fibre tendue** (positif vers le bas) : c'est là qu'il faudra placer les aciers.`,
    html:`<div class="solfig">${diagSvg(U, 'V')}</div><div class="solfig">${diagSvg(U, 'M')}</div>`});
  // 8. flèche
  const M_ = mat(p), EI = (M_.Ev*1e3)*(p.b/100)*Math.pow(p.h/100, 3)/12; // kN·m² (E en kPa)
  const Us = p.ba ? analyse(p, 'ELS', p.pp) : (comb === 'ELU' ? analyse(p, 'ELS', false) : U);
  const D = deflection(Us, EI);
  const spanOfF = (Us.sp || []).find(s => D.f.x >= s.a - 1e-6 && D.f.x <= s.b + 1e-6), cons = !spanOfF;
  const lref = cons ? Math.max(Us.ap[0].x, Us.L - Us.ap[Us.ap.length - 1].x, Us.kind === 'console' ? Us.L : 0) : spanOfF.l;
  const fadm = cons ? lref/250 : lref <= 5 ? lref/500 : .005 + lref/1000;
  steps.push({t:'Flèche (déformation)', md:`La déformée y(x) s'obtient en intégrant deux fois $$ EI y'' = M(x)\navec les conditions aux appuis (y = 0 sur chaque appui, y' = 0 à un encastrement).\n\nSection ${nf(p.b)} × ${nf(p.h)} cm en béton (module différé Ev = 3700 ∛fc28 = ${nf(M_.Ev, 0)} MPa), charges de service G + Q :\n$$ I = b h³/12 = ${nf(p.b/100, 2)} × ${nf(p.h/100, 2)}³/12 = ${ns((p.b/100)*Math.pow(p.h/100, 3)/12, 4)} m⁴\n$$ EI = ${nf(EI, 0)} kN·m²\n$$ f_max = ${nf(Math.abs(D.f.y)*1000, 2)} mm  (en x = ${nf(D.f.x, 2)} m)\n\nFlèche admissible (BAEL) : ${cons ? `console : l/250 = ${nf(fadm*1000, 1)} mm` : lref <= 5 ? `l/500 = ${nf(fadm*1000, 1)} mm` : `0,5 cm + l/1000 = ${nf(fadm*1000, 1)} mm`} → ${Math.abs(D.f.y) <= fadm ? '**vérifiée** ✓' : '**non vérifiée** : augmenter la hauteur de la poutre'}.\n\n> [!attention]\n> Calcul simplifié avec l'inertie de la section non fissurée ; le règlement prévoit une inertie fissurée, plus faible.`,
    html:`<div class="solfig">${deflSvg(Us, D)}</div>`});
  let bilan = `- Poutre **${U.h === 0 ? 'isostatique' : 'hyperstatique de degré ' + U.h}** ; réactions : ${aps.map((s, i) => `R_${apName(i)} = **${nf(s.R, 2)} kN**${s.t === 'E' ? ` (M = ${nf(s.M, 2)} kN·m)` : ''}`).join(', ')}\n- Moment maximal en travée : **${nf(Math.max(0, Mx.M), 2)} kN·m**${Mn.M < -1e-9 ? ` ; moment sur appui : **${nf(Mn.M, 2)} kN·m**` : ''} ; effort tranchant maximal : **${nf(Math.abs(U.Vmax.V), 2)} kN**\n- Flèche : ${nf(Math.abs(D.f.y)*1000, 1)} mm (admissible ${nf(fadm*1000, 1)} mm)`;

  /* ---------------- béton armé ---------------- */
  if(p.ba){
    const Ds = design(p, U, Us), M = Ds.M;
    steps.push({t:'Béton armé : matériaux et hypothèses', md:`Béton fc28 = ${nf(M.fc)} MPa, aciers HA FeE${nf(M.fe)}, fissuration ${Ds.fiss === 'FP' ? 'préjudiciable' : 'peu préjudiciable'}, enrobage c = ${nf(p.c || 3)} cm.\n$$ f_bu = 0,85 fc28/(θ γb) = 0,85 × ${nf(M.fc)}/1,5 = ${nf(M.fbu, 2)} MPa\n$$ f_su = fe/γs = ${nf(M.fe)}/1,15 = ${nf(M.fsu, 1)} MPa\n$$ ft28 = 0,6 + 0,06 fc28 = ${nf(M.ft, 2)} MPa\n$$ d ≈ h − c − Ø cadre − Ø/2 = ${nf(p.h)} − ${nf(p.c || 3)} − 0,8 − 0,6 = ${nf(Ds.d*100, 1)} cm\n$$ μl = 0,8 αl (1 − 0,4 αl) = ${nf(M.mul, 4)}  (αl = 3,5/(3,5 + 1000 εl) = ${nf(M.al, 4)})`,
      ask:[{l:'f_bu', v:M.fbu, u:'MPa'}, {l:'f_su', v:M.fsu, u:'MPa'}], hint:'f_bu = 0,85 × fc28 / 1,5 ; f_su = fe / 1,15.'});
    const tmax = Ds.span.reduce((a, t) => t.Mu > a.Mu ? t : a, Ds.span[0] || {Mu:0});
    const smin = Ds.supp.filter(t => !t.none).reduce((a, t) => !a || t.Mu < a.Mu ? t : a, null);
    steps.push({t:'Sollicitations de calcul', md:`Moments à l'ELU (1,35 G + 1,5 Q) et à l'ELS (G + Q) :\n\n` + mdTable(['Section', 'Mu (kN·m)', 'Mser (kN·m)'], Ds.span.map(t => [`Travée ${apName(t.s.i - 1)}${apName(t.s.i)} (x = ${nf(t.x, 2)} m)`, nf(t.Mu, 2), nf(t.Ms, 2)]).concat(Ds.supp.filter(t => !t.none).map(t => [`Appui ${apName(t.i)}`, nf(t.Mu, 2), nf(t.Ms, 2)]))) + `\n\nEffort tranchant maximal : $$ Vu = ${nf(Ds.Vu, 2)} kN`});
    if(tmax && tmax.f){ const f = tmax.f;
      steps.push({t:`Aciers en travée ${apName(tmax.s.i - 1)}${apName(tmax.s.i)} (flexion simple)`, q:'Calculez le moment réduit μ, puis α, z et la section d\'acier As.',
        md:`$$ μ = Mu/(b d² f_bu) = ${nf(tmax.Mu/1000, 5)}/(${nf(Ds.b, 2)} × ${nf(Ds.d, 3)}² × ${nf(M.fbu, 2)}) = ${nf(f.mu, 4)}\n` + (f.ok ? `μ = ${nf(f.mu, 4)} < μl = ${nf(M.mul, 4)} → **pas d'aciers comprimés**.\n$$ α = 1,25 (1 − √(1 − 2μ)) = ${nf(f.al, 4)}\n$$ z = d (1 − 0,4 α) = ${nf(f.z, 4)} m\n$$ As = Mu/(z f_su) = ${nf(tmax.Mu/1000, 5)}/(${nf(f.z, 4)} × ${nf(M.fsu, 1)}) = ${nf(f.As, 2)} cm²`
          : `μ = ${nf(f.mu, 4)} > μl = ${nf(M.mul, 4)} → il faut des **aciers comprimés** (ou mieux : augmenter la hauteur de la poutre).\n$$ Ml = μl b d² f_bu = ${nf(f.Ml, 2)} kN·m\n$$ A' = (Mu − Ml)/((d − d') f_su) = ${nf(f.Asc, 2)} cm²\n$$ As = Ml/(z f_su) + A' = ${nf(f.As, 2)} cm²`) +
          `\n\n**Condition de non-fragilité** : $$ Amin = 0,23 b d ft28/fe = ${nf(tmax.Amin, 2)} cm²\n$$ A retenue = max(As ; Amin) = ${nf(tmax.Areq, 2)} cm²`,
        ask:[{l:'μ', v:f.mu, d:4}, {l:'As', v:f.As, u:'cm²'}], hint:'μ = Mu / (b d² f_bu) avec Mu en MN·m, b et d en m, f_bu en MPa. As = Mu / (z f_su) donne des m², multipliez par 10 000 pour avoir des cm².'});
      steps.push({t:'Choix et disposition des barres en travée', q:'Choisissez un nombre de barres HA dont la section totale dépasse As, et qui tiennent dans la largeur de la poutre.',
        md:`Section à fournir : **${nf(tmax.Areq, 2)} cm²** → on choisit **${barTxt(tmax.bars)}** = ${nf(tmax.bars.A, 2)} cm² (${tmax.bars.layers === 1 ? 'un seul lit' : 'deux lits'}).\n\n${mdTable(['Barres', 'Section (cm²)'], [6, 8, 10, 12, 14, 16, 20, 25].map(dd => [`HA${dd}`, [1, 2, 3, 4, 5, 6].map(n => nf(n*sec(dd), 2)).join(' · ')]))}\n\n*(sections pour 1 à 6 barres)*\n\nEspacement horizontal entre barres ≥ max(Ø ; 2,5 cm) : au plus ${tmax.bars.nl} barres de HA${tmax.bars.d} par lit dans ${nf(p.b)} cm.\n\n` + Ds.span.map(t => `- Travée ${apName(t.s.i - 1)}${apName(t.s.i)} : As = ${nf(t.Areq, 2)} cm² → **${barTxt(t.bars)}** (${nf(t.bars.A, 2)} cm²)`).join('\n'),
        ask:[{l:'Section réelle des barres choisies', v:tmax.bars.A, u:'cm²', tol:.08}], q2:'', html:`<div class="solfig">${sectionSvg(p, Ds, tmax, false)}</div>`});
      steps.push({t:'Vérification à l\'ELS', md:`Section fissurée, coefficient d'équivalence n = 15. Position de l'axe neutre y₁ :\n$$ b y₁²/2 − 15 A (d − y₁) = 0  ⇒  y₁ = ${nf(tmax.els.y*100, 2)} cm\n$$ I = b y₁³/3 + 15 A (d − y₁)² = ${ns(tmax.els.I*1e8, 5)} cm⁴\n$$ σbc = Mser y₁ / I = ${nf(tmax.els.sb, 2)} MPa ${tmax.els.okb ? '≤' : '>'} 0,6 fc28 = ${nf(M.sbc, 1)} MPa ${tmax.els.okb ? '✓' : '✗'}\n` + (Ds.fiss === 'FP' ? `$$ σs = 15 Mser (d − y₁)/I = ${nf(tmax.els.ss, 1)} MPa ${tmax.els.oks ? '≤' : '>'} σs adm = ${nf(M.ssFP, 1)} MPa ${tmax.els.oks ? '✓' : '✗'}` : `Fissuration peu préjudiciable : pas de limite sur σs (σs = ${nf(tmax.els.ss, 1)} MPa pour information).`),
        ask:[{l:'σbc', v:tmax.els.sb, u:'MPa', tol:.05}], hint:'Calculez d\'abord y₁ (équation du second degré), puis I, puis σbc = Mser × y₁ / I.'}); }
    if(smin){ const f = smin.f;
      steps.push({t:'Aciers sur appuis (chapeaux)', q:`Le moment sur l'appui ${apName(smin.i)} est négatif : calculez la section des aciers supérieurs.`,
        md:`Au droit des appuis, le moment est négatif : la fibre **supérieure** est tendue. On place des **chapeaux** en partie haute.\n\nAppui ${apName(smin.i)} : $$ |Mu| = ${nf(-smin.Mu, 2)} kN·m  →  μ = ${nf(f.mu, 4)}  →  As = ${nf(f.As, 2)} cm²\n\n` + Ds.supp.filter(t => !t.none).map(t => `- Appui ${apName(t.i)} : |Mu| = ${nf(-t.Mu, 2)} kN·m → As = ${nf(t.Areq, 2)} cm² → **${barTxt(t.bars)}** ; longueur ${nf(t.lg, 2)} m à gauche + ${nf(t.ld, 2)} m à droite`).join('\n') +
          `\n\n**Longueur des chapeaux** : on les prolonge au-delà du point de moment nul d'un décalage 0,8 h = ${nf(.8*Ds.h, 2)} m, avec au moins la longueur de scellement droit ls = ${nf(M.lsk, 1)} Ø et le quart de la portée voisine.`,
        ask:[{l:`As sur l'appui ${apName(smin.i)}`, v:f.As, u:'cm²'}], html:`<div class="solfig">${sectionSvg(p, Ds, smin, true)}</div>`}); }
    const sh = Ds.sh;
    steps.push({t:'Effort tranchant et armatures transversales', q:'Calculez la contrainte de cisaillement τu = Vu/(b d), comparez à la limite, puis l\'espacement des cadres.',
      md:`$$ τu = Vu/(b₀ d) = ${nf(Ds.Vu/1000, 5)}/(${nf(Ds.b, 2)} × ${nf(Ds.d, 3)}) = ${nf(sh.tu, 3)} MPa\n$$ τ lim = ${Ds.fiss === 'FP' ? 'min(0,15 fc28/γb ; 4 MPa)' : 'min(0,2 fc28/γb ; 5 MPa)'} = ${nf(sh.tlim, 2)} MPa → ${sh.ok ? '**béton vérifié** ✓' : '**non vérifié** : augmenter la section'}\n\nDiamètre des cadres : Øt ≤ min(h/35 ; b/10 ; Øl) = ${nf(sh.dtx, 1)} mm → **HA${sh.dt}**, un cadre = 2 brins : $$ At = 2 × ${nf(sec(sh.dt), 3)} = ${nf(sh.At, 3)} cm²\n` +
        `$$ St ≤ At × 0,9 fe / (γs b₀ (τu − 0,3 ft28)) = ${isFinite(sh.Stc) ? nf(sh.Stc, 1) + ' cm' : 'pas de limite (τu ≤ 0,3 ft28)'}\n$$ St ≤ min(0,9 d ; 40 cm) = ${nf(sh.Stmax, 1)} cm\n$$ St ≤ At fe / (0,4 b₀) = ${nf(sh.Stpct, 1)} cm\nEspacement de départ (pris dans la suite de Caquot) : **St₀ = ${sh.St0} cm**.\n\n**Répartition de Caquot** : premier cadre à St₀/2 du nu de l'appui, puis on répète chaque espacement de la suite 7 – 8 – 9 – 10 – 11 – 13 – 16 – 20 – 25 – 35 – 40 cm autant de fois qu'il y a de mètres dans la demi-portée, jusqu'au milieu de la travée.\n\n` +
        Ds.cadres.map(cc => `- Travée ${apName(cc.s.i - 1)}${apName(cc.s.i)} (l = ${nf(cc.s.l, 2)} m) : ${cc.seq.map(q => q.first ? `1 × ${nf(q.e, 1)} cm` : `${q.n} × ${q.e} cm`).join(' + ')} jusqu'au milieu, puis symétrique → **${cc.count} cadres**`).join('\n'),
      ask:[{l:'τu', v:sh.tu, u:'MPa'}, {l:'Espacement St₀', v:sh.St0, u:'cm', tol:.15}], hint:'τu = Vu / (b d) avec Vu en MN, b et d en m. St₀ est le plus petit des trois espacements, arrondi par défaut dans la suite de Caquot.'});
    steps.push({t:'Plan de ferraillage', md:`Le plan montre la position de tous les aciers :\n- **aciers inférieurs** filants d'un appui à l'autre, ancrés par crochets aux appuis de rive ;\n- **chapeaux** en partie haute au-dessus des appuis (moment négatif) ;\n- **aciers de montage** en partie haute pour tenir les cadres ;\n- **cadres** resserrés près des appuis (effort tranchant maximal) puis espacés vers le milieu.\n\nLongueur de scellement droit : $$ ls = Ø fe /(4 τsu) = ${nf(M.lsk, 1)} Ø  avec τsu = 0,6 ψs² ft28 = ${nf(M.tsu, 3)} MPa\nPar crochet normal, la longueur d'ancrage hors crochet peut être réduite à 0,4 ls.`,
      html:`<div class="solfig">${elevSvg(p, U, Ds)}</div>`});
    steps.push({t:'Nomenclature des aciers (quantités)', q:'Calculez le poids total d\'acier de la poutre (poids d\'une barre : 0,00617 × Ø² kg/m).',
      md:mdTable(['Rep.', 'Désignation', 'Nb', 'Ø', 'Forme', 'L unit. (m)', 'L totale (m)', 'Poids (kg)'], Ds.rows.map(r => [r.rep, r.des, r.n, 'HA' + r.d, r.forme, nf(r.lu, 2), nf(r.lt, 2), nf(r.kg, 1)])) +
        `\n\n$$ Poids total = ${nf(Ds.kg, 1)} kg  (+ 5 % de chutes et ligatures ≈ ${nf(Ds.kg*1.05, 0)} kg)\n$$ Volume de béton = ${nf(Ds.b, 2)} × ${nf(Ds.h, 2)} × ${nf(Ds.Lb, 2)} = ${nf(Ds.vol, 3)} m³   →   ratio ≈ ${nf(Ds.ratio, 0)} kg/m³`,
      ask:[{l:'Poids total d\'acier', v:Ds.kg, u:'kg', tol:.05}], hint:'Pour chaque ligne : nombre × longueur × 0,00617 × Ø², puis additionnez.'});
    steps.push({t:'Comment l\'obtenir sur le chantier', md:`1. **Commande** : barres HA de 12 m ; regrouper les longueurs pour limiter les chutes (plan de coupe).\n2. **Façonnage** à la cintreuse : crochets d'about, cadres au mandrin (Ø du mandrin ≈ 4 Øt pour les cadres) ; repérer chaque paquet avec son numéro de nomenclature.\n3. **Assemblage de la cage** : enfiler les cadres sur les aciers de montage, les espacer selon la répartition de Caquot (marquer les positions à la craie), ligaturer au fil recuit, puis ligaturer les aciers inférieurs dans les angles des cadres.\n4. **Chapeaux** : les placer au-dessus des appuis avec leurs longueurs de part et d'autre, ligaturés sous les aciers de montage.\n5. **Enrobage** : cales en béton ou en plastique de ${nf(p.c || 3)} cm sous et sur les côtés de la cage, tous les 1 m environ.\n6. **Contrôle avant coulage** : nombre et diamètre des barres, espacement des cadres, longueur des chapeaux, enrobage, propreté des aciers (pas de terre ni d'huile), coffrage étayé.\n\n> [!retenir]\n> Le calcul donne la **section** d'acier ; le plan de ferraillage donne la **position** de chaque barre. Les deux sont indispensables.`});
    const tb = Ds.span.reduce((a, t) => t.bars.A > a.A ? t.bars : a, Ds.span[0] ? Ds.span[0].bars : {n:0, d:0, A:0});
    bilan += `\n- **Ferraillage** (${nf(p.b)} × ${nf(p.h)} cm) : ${Ds.span.length ? barTxt(tb) + ' en partie basse' : ''}${Ds.supp.filter(t => !t.none).length ? ', chapeaux ' + Ds.supp.filter(t => !t.none).map(t => `${barTxt(t.bars)} sur ${apName(t.i)}`).join(', ') : ''}, cadres HA${Ds.sh.dt} à partir de ${Ds.sh.St0} cm (Caquot) ; **${nf(Ds.kg*1.05, 0)} kg d'acier** (${nf(Ds.ratio, 0)} kg/m³).`;
  }
  return {steps, bilan};
}

/* =====================================================================
   ÉDITEUR GRAPHIQUE DE LA POUTRE
   ===================================================================== */
let tool = 'sel', sel = null, pendingQ = null;
const TOOLS = [['sel','Sélection','pointer'],['S','Appui simple','dot'],['A','Articulation','pin'],['E','Encastrement','wall'],['P','Charge ponctuelle','arrow'],['q','Charge répartie','wave'],['C','Couple','refresh']];
const MODELES = {
  iso:{n:'Poutre sur 2 appuis', L:6, appuis:[{x:0, t:'A'}, {x:6, t:'S'}], ch:[{t:'q', a:0, b:6, g:15, q:10}]},
  ponct:{n:'2 appuis + charges ponctuelles', L:5, appuis:[{x:0, t:'A'}, {x:5, t:'S'}], ch:[{t:'P', a:1.5, g:20, q:10}, {t:'P', a:3.5, g:10, q:5}, {t:'q', a:0, b:5, g:4, q:0}]},
  pf:{n:'Poutre avec porte-à-faux', L:7, appuis:[{x:0, t:'A'}, {x:5.5, t:'S'}], ch:[{t:'q', a:0, b:7, g:12, q:6}, {t:'P', a:7, g:8, q:0}]},
  console:{n:'Console encastrée', L:2.5, appuis:[{x:0, t:'E'}], ch:[{t:'q', a:0, b:2.5, g:8, q:3}, {t:'P', a:2.5, g:6, q:2}]},
  c2:{n:'Poutre continue à 2 travées', L:10, appuis:[{x:0, t:'A'}, {x:5, t:'S'}, {x:10, t:'S'}], ch:[{t:'q', a:0, b:10, g:18, q:8}]},
  c3:{n:'Poutre continue à 3 travées', L:13, appuis:[{x:0, t:'A'}, {x:4, t:'S'}, {x:9, t:'S'}, {x:13, t:'S'}], ch:[{t:'q', a:0, b:13, g:16, q:7}]},
  es:{n:'Encastrée – appuyée', L:6, appuis:[{x:0, t:'E'}, {x:6, t:'S'}], ch:[{t:'q', a:0, b:6, g:14, q:6}]},
  ee:{n:'Bi-encastrée', L:6, appuis:[{x:0, t:'E'}, {x:6, t:'E'}], ch:[{t:'q', a:0, b:6, g:14, q:6}, {t:'P', a:3, g:20, q:0}]},
  tri:{n:'Charge triangulaire', L:4, appuis:[{x:0, t:'A'}, {x:4, t:'S'}], ch:[{t:'t', a:0, b:4, g:0, q:0, g2:20, q2:0}]}
};
function edSvg(p){
  const L = +p.L || 1;
  let g = '';
  try{ g = beamSvg(p, {raw:true, pp:p.ba && p.pp}); }catch(e){ g = ''; }
  // marqueurs de sélection
  return g;
}
function edHtml(p){
  return `<div class="stack">
   <div class="bmtools" role="toolbar">${TOOLS.map(([k, n, icn]) => `<button type="button" class="${tool === k ? 'on' : ''}" data-bmtool="${k}" title="${n}">${ic(icn)}<span>${n}</span></button>`).join('')}</div>
   <div class="bmed" id="bmEd">${edSvg(p)}</div>
   <p class="sub" id="bmHint">${hintTxt()}</p>
   <div class="bmcols"><div class="stack">
   <div class="row" style="gap:6px"><label class="fld" style="max-width:120px"><span>Longueur L <small class="faint">(m)</small></span><input class="inp num" id="bmL" data-bmf="L" inputmode="decimal" value="${String(p.L).replace('.', ',')}"></label>
    <label class="fld grow"><span>Modèle de départ</span><select class="inp" data-bmmod><option value="">Choisir un cas type…</option>${Object.entries(MODELES).map(([k, m]) => `<option value="${k}">${m.n}</option>`).join('')}</select></label></div>
   <div class="sftab"><div class="row between"><b class="small">Appuis</b><button type="button" class="btn b-line b-xs" data-bmadd="ap">${ic('plus')}Appui</button></div>
    <div class="tw"><table class="t sm"><thead><tr><th></th><th>x (m)</th><th>Type</th><th></th></tr></thead><tbody>${(p.appuis || []).map((s, i) => `<tr class="${sel && sel.k === 'ap' && sel.i === i ? 'on' : ''}"><td><b>${apName(i)}</b></td><td><input class="inp sm num" id="bm_ap_${i}_x" data-bmrow="ap:${i}:x" inputmode="decimal" value="${String(s.x).replace('.', ',')}" style="width:70px"></td><td><select class="inp sm" data-bmrow="ap:${i}:t" style="min-width:170px">${TYPES_AP.map(([v, n]) => `<option value="${v}" ${s.t === v ? 'selected' : ''}>${n}</option>`).join('')}</select></td><td><button type="button" class="ibtn" data-bmdel="ap:${i}" aria-label="Supprimer">${ic('x')}</button></td></tr>`).join('')}</tbody></table></div></div>
   <div class="sftab"><div class="row between"><b class="small">Charges <small class="faint">(G permanentes, Q d'exploitation)</small></b><button type="button" class="btn b-line b-xs" data-bmadd="ch">${ic('plus')}Charge</button></div>
    <div class="tw"><table class="t sm"><thead><tr><th>Type</th><th>x / début</th><th>fin</th><th>G</th><th>Q</th><th>G fin</th><th>Q fin</th><th></th></tr></thead><tbody>${(p.ch || []).map((c, i) => { const rep = c.t === 'q' || c.t === 't';
      const inp = (k, w=56, dis) => `<input class="inp sm num" id="bm_ch_${i}_${k}" data-bmrow="ch:${i}:${k}" inputmode="decimal" value="${dis ? '' : String(c[k] ?? '').replace('.', ',')}" ${dis ? 'disabled' : ''} style="width:${w}px">`;
      return `<tr class="${sel && sel.k === 'ch' && sel.i === i ? 'on' : ''}"><td><select class="inp sm" data-bmrow="ch:${i}:t" style="min-width:150px">${TYPES_CH.map(([v, n]) => `<option value="${v}" ${c.t === v ? 'selected' : ''}>${n}</option>`).join('')}</select></td><td>${inp('a')}</td><td>${inp('b', 56, !rep)}</td><td>${inp('g')}</td><td>${inp('q')}</td><td>${inp('g2', 56, c.t !== 't')}</td><td>${inp('q2', 56, c.t !== 't')}</td><td><button type="button" class="ibtn" data-bmdel="ch:${i}" aria-label="Supprimer">${ic('x')}</button></td></tr>`; }).join('')}</tbody></table></div>
    <p class="sub">Unités : kN pour une force, kN/m pour une charge répartie, kN·m pour un couple (positif dans le sens horaire).</p></div>
   </div><div class="stack">
   <div class="sfh">Étude</div>
   <div class="sfgrid">
    ${p.ba ? '' : `<label class="fld sfw"><span>Combinaison des charges</span><select class="inp" data-bmf="comb">${Object.entries(COMB).map(([k, c]) => `<option value="${k}" ${p.comb === k ? 'selected' : ''}>${c.n}</option>`).join('')}</select></label>`}
    <label class="check sfw"><input type="checkbox" data-bmf="ba" ${p.ba ? 'checked' : ''}><span><b>Étude en béton armé</b> : aciers, disposition, cadres, plan de ferraillage et nomenclature</span></label>
    <label class="fld"><span>Largeur b <small class="faint">(cm)</small></span><input class="inp num" id="bm_b" data-bmf="b" inputmode="decimal" value="${p.b}"></label>
    <label class="fld"><span>Hauteur h <small class="faint">(cm)</small></span><input class="inp num" id="bm_h" data-bmf="h" inputmode="decimal" value="${p.h}"></label>
    ${p.ba ? `<label class="fld"><span>Béton fc28 <small class="faint">(MPa)</small></span><input class="inp num" id="bm_fc" data-bmf="fc28" inputmode="decimal" value="${p.fc28}"></label>
    <label class="fld"><span>Acier</span><select class="inp" data-bmf="fe"><option value="500" ${+p.fe === 500 ? 'selected' : ''}>FeE500</option><option value="400" ${+p.fe === 400 ? 'selected' : ''}>FeE400</option></select></label>
    <label class="fld"><span>Enrobage <small class="faint">(cm)</small></span><input class="inp num" id="bm_c" data-bmf="c" inputmode="decimal" value="${p.c}"></label>
    <label class="fld"><span>Fissuration</span><select class="inp" data-bmf="fiss"><option value="FPP" ${p.fiss !== 'FP' ? 'selected' : ''}>Peu préjudiciable</option><option value="FP" ${p.fiss === 'FP' ? 'selected' : ''}>Préjudiciable</option></select></label>
    <label class="check sfw"><input type="checkbox" data-bmf="pp" ${p.pp ? 'checked' : ''}><span>Ajouter le poids propre de la poutre (25 kN/m³)</span></label>` : ''}
   </div></div></div></div>`;
}
const hintTxt = () => tool === 'sel' ? 'Choisissez un outil puis touchez la poutre pour ajouter un appui ou une charge. En mode Sélection, faites glisser un élément pour le déplacer.'
  : tool === 'q' ? (pendingQ != null ? `Touchez la fin de la charge répartie (début : x = ${nf(pendingQ, 2)} m).` : 'Touchez le début de la charge répartie sur la poutre.')
  : `Touchez la poutre à l'endroit voulu pour placer : ${TOOLS.find(t => t[0] === tool)[1].toLowerCase()}.`;
function xFromEvent(svg, e, L){ const r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal, X = (e.clientX - r.left)/r.width*vb.width; const x = (X - ML)/(W0 - ML - MR)*L; const st = L > 12 ? .1 : .05; return Math.min(L, Math.max(0, Math.round(x/st)*st)); }
function nearest(p, x){ let best = null; const L = +p.L, tolx = L*.04;
  (p.appuis || []).forEach((s, i) => { const d = Math.abs(+s.x - x); if(d < tolx && (!best || d < best.d)) best = {k:'ap', i, f:'x', d}; });
  (p.ch || []).forEach((c, i) => { if(c.t === 'P' || c.t === 'C'){ const d = Math.abs(+c.a - x); if(d < tolx && (!best || d < best.d)) best = {k:'ch', i, f:'a', d}; }
    else { const da = Math.abs(+c.a - x), db = Math.abs(+c.b - x); if(da < tolx && (!best || da < best.d)) best = {k:'ch', i, f:'a', d:da}; if(db < tolx && (!best || db < best.d)) best = {k:'ch', i, f:'b', d:db}; } });
  return best; }
let drag = null, changed = null;
function edMount(root, p, st, onChange){
  changed = onChange;
  const box = root && root.querySelector('#bmEd'); if(!box) return;
  const svgOf = () => box.querySelector('svg');
  box.onpointerdown = e => { const svg = svgOf(); if(!svg) return; const x = xFromEvent(svg, e, +p.L);
    if(tool === 'sel'){ const n = nearest(p, x); if(n){ drag = n; sel = {k:n.k, i:n.i}; box.setPointerCapture(e.pointerId); } return; }
    if(tool === 'q'){ if(pendingQ == null){ pendingQ = x; $('#bmHint').textContent = hintTxt(); return; } const a = Math.min(pendingQ, x), b = Math.max(pendingQ, x); pendingQ = null; if(b - a < .05){ toast('Charge trop courte', 'alert'); return; }
      p.ch.push({t:'q', a, b, g:10, q:5}); sel = {k:'ch', i:p.ch.length - 1}; A.refresh(); changed(); toast('Charge répartie ajoutée : réglez G et Q dans le tableau', 'check'); return; }
    if(tool === 'S' || tool === 'A' || tool === 'E'){ let xx = x; if(tool === 'E') xx = x < p.L/2 ? 0 : +p.L; if((p.appuis || []).some(s => Math.abs(+s.x - xx) < .05)){ toast('Il y a déjà un appui ici', 'alert'); return; }
      p.appuis.push({x:xx, t:tool}); p.appuis.sort((a, b) => a.x - b.x); A.refresh(); changed(); return; }
    p.ch.push({t:tool, a:x, g:tool === 'C' ? 10 : 20, q:tool === 'C' ? 0 : 10}); sel = {k:'ch', i:p.ch.length - 1}; A.refresh(); changed(); toast('Charge ajoutée : réglez sa valeur dans le tableau', 'check');
  };
  box.onpointermove = e => { if(!drag) return; const svg = svgOf(); const x = xFromEvent(svg, e, +p.L);
    if(drag.k === 'ap'){ if(p.appuis[drag.i].t === 'E') return; p.appuis[drag.i].x = x; } else p.ch[drag.i][drag.f] = x;
    box.innerHTML = edSvg(p); const inp = $(`#bm_${drag.k}_${drag.i}_${drag.f === 'x' ? 'x' : drag.f}`); if(inp) inp.value = String(x).replace('.', ','); };
  box.onpointerup = () => { if(!drag) return; drag = null; if(p.appuis) p.appuis.sort((a, b) => a.x - b.x); changed(); A.refresh(); };
}
function edUpdate(p){ const box = $('#bmEd'); if(box && !drag) box.innerHTML = edSvg(p); }
const P_ = () => SOL.state() && SOL.state().p;
A.on('click', '[data-bmtool]', el => { tool = el.dataset.bmtool; pendingQ = null; document.querySelectorAll('[data-bmtool]').forEach(b => b.classList.toggle('on', b === el)); const h = $('#bmHint'); if(h) h.textContent = hintTxt(); });
A.on('input', '[data-bmrow]', el => { const p = P_(); if(!p || el.tagName === 'SELECT') return; const [k, i, f] = el.dataset.bmrow.split(':'); const list = k === 'ap' ? p.appuis : p.ch; list[+i][f] = SOL.U.parse(el.value); SOL.reset(); clearTimeout(edT); edT = setTimeout(() => SOL.refreshOut(), 300); });
let edT = null;
A.on('change', '[data-bmrow]', el => { const p = P_(); if(!p || el.tagName !== 'SELECT') return; const [k, i, f] = el.dataset.bmrow.split(':'); const list = k === 'ap' ? p.appuis : p.ch; list[+i][f] = el.value;
  if(k === 'ch' && f === 't'){ const c = list[+i]; if((c.t === 'q' || c.t === 't') && !(+c.b > +c.a)) c.b = Math.min(+p.L, +c.a + 1); if(c.t === 't'){ c.g2 = c.g2 ?? c.g; c.q2 = c.q2 ?? c.q; } }
  if(k === 'ap' && f === 't' && el.value === 'E'){ const s = list[+i]; s.x = +s.x < p.L/2 ? 0 : +p.L; }
  SOL.reset(); A.refresh(); });
A.on('input', '[data-bmf]', el => { const p = P_(); if(!p || el.tagName === 'SELECT' || el.type === 'checkbox') return; const k = el.dataset.bmf; const v = SOL.U.parse(el.value);
  if(k === 'L'){ if(!(v > 0)) return; const old = +p.L; p.L = v; (p.appuis || []).forEach(s => { if(Math.abs(+s.x - old) < 1e-6) s.x = v; }); (p.ch || []).forEach(c => { if(Math.abs(+c.b - old) < 1e-6) c.b = v; }); }
  else p[k] = v; SOL.reset(); clearTimeout(edT); edT = setTimeout(() => SOL.refreshOut(), 300); });
A.on('change', '[data-bmf]', el => { const p = P_(); if(!p) return; const k = el.dataset.bmf; if(el.type === 'checkbox') p[k] = el.checked; else if(el.tagName === 'SELECT') p[k] = k === 'fe' ? +el.value : el.value; else return; SOL.reset(); A.refresh(); });
A.on('click', '[data-bmadd]', el => { const p = P_(); if(el.dataset.bmadd === 'ap'){ const xs = (p.appuis || []).map(s => +s.x); let x = +p.L; for(const c of [p.L, 0, p.L/2, p.L/3, 2*p.L/3]) if(!xs.some(v => Math.abs(v - c) < .05)){ x = c; break; } p.appuis.push({x:+(+x).toFixed(2), t:'S'}); p.appuis.sort((a, b) => a.x - b.x); }
  else p.ch.push({t:'P', a:+(p.L/2).toFixed(2), g:10, q:5}); SOL.reset(); A.refresh(); });
A.on('click', '[data-bmdel]', el => { const p = P_(); const [k, i] = el.dataset.bmdel.split(':'); (k === 'ap' ? p.appuis : p.ch).splice(+i, 1); sel = null; SOL.reset(); A.refresh(); });
A.on('change', '[data-bmmod]', el => { const p = P_(); const m = MODELES[el.value]; if(!m) return; Object.assign(p, clone({L:m.L, appuis:m.appuis, ch:m.ch})); SOL.reset(); A.refresh(); toast('Modèle chargé : ' + m.n, 'check'); });

function rndBeam(ba){
  const k = R.p(Object.keys(MODELES)), m = clone(MODELES[k]); const f = R.s(.8, 1.3, .1);
  const L = +(m.L*f).toFixed(1); const sc = L/m.L;
  m.appuis.forEach(s => { s.x = +(s.x*sc).toFixed(2); }); m.appuis[m.appuis.length - 1].x = m.appuis[m.appuis.length - 1].x > L ? L : m.appuis[m.appuis.length - 1].x;
  if(m.appuis.some(s => Math.abs(s.x - m.L) < 1e-6)) m.appuis.forEach(s => { if(Math.abs(s.x - m.L*sc) < .02) s.x = L; });
  m.ch.forEach(c => { c.a = +(c.a*sc).toFixed(2); if(c.b != null) c.b = Math.min(L, +(c.b*sc).toFixed(2)); c.g = R.s(Math.max(2, c.g*.6), c.g*1.4 + 1, 1); c.q = c.q ? R.s(c.q*.6, c.q*1.4 + 1, 1) : 0; if(c.t === 't'){ c.g2 = R.s(10, 30, 1); } });
  const p = {L, appuis:m.appuis, ch:m.ch};
  if(ba){ p.h = Math.max(30, Math.ceil(L*100/12/5)*5); p.b = p.h >= 50 ? 25 : 20; }
  return p;
}

/* ---------- enregistrement ---------- */
const editor = {html:edHtml, mount:edMount, update:edUpdate};
const base = {L:6, appuis:[{x:0, t:'A'}, {x:6, t:'S'}], ch:[{t:'q', a:0, b:6, g:15, q:10}], comb:'ELU', ba:false, b:20, h:45, fc28:25, fe:500, c:3, fiss:'FPP', pp:false};
const enonce = p => { let U; try{ U = analyse(p, p.ba ? 'ELU' : (p.comb || 'brut'), p.ba && p.pp); }catch(e){ return ''; }
  const ld = (p.ch || []).map((c, i) => c.t === 'P' ? `une force ponctuelle G = ${nf(+c.g, 2)} kN${+c.q ? `, Q = ${nf(+c.q, 2)} kN` : ''} en x = ${nf(+c.a, 2)} m` : c.t === 'C' ? `un couple de ${nf(+c.g, 2)} kN·m (sens ${+c.g >= 0 ? 'horaire' : 'trigonométrique'}) en x = ${nf(+c.a, 2)} m`
    : `une charge répartie ${c.t === 't' ? `variant de ${nf(+c.g, 2)} à ${nf(+c.g2, 2)} kN/m (G)` : `G = ${nf(+c.g, 2)} kN/m`}${+c.q ? `, Q = ${nf(+c.q, 2)} kN/m` : ''} de x = ${nf(Math.min(+c.a, +c.b), 2)} à ${nf(Math.max(+c.a, +c.b), 2)} m`);
  return `Une poutre de **${nf(+p.L)} m** repose sur ${U.ap.map((s, i) => `un${s.t === 'A' ? 'e articulation' : s.t === 'E' ? ' encastrement' : ' appui simple'} en ${apName(i)} (x = ${nf(s.x)} m)`).join(', ')}. Elle supporte ${ld.join(' ; ')}.\n\n` +
    `1. Déterminer le degré d'hyperstaticité de la poutre.\n2. Calculer les réactions d'appui${p.ba ? ' à l\'ELU' : ''}.\n3. Établir les équations de l'effort tranchant et du moment fléchissant sur chaque tronçon.\n4. Tracer les diagrammes de V et de M ; en déduire le moment maximal.\n5. Calculer la flèche et la comparer à la flèche admissible.` +
    (p.ba ? `\n6. La poutre est en béton armé (${nf(p.b)} × ${nf(p.h)} cm, fc28 = ${nf(p.fc28)} MPa, FeE${nf(p.fe)}, fissuration ${p.fiss === 'FP' ? 'préjudiciable' : 'peu préjudiciable'}). Calculer les aciers longitudinaux en travée et sur appuis, choisir les barres, vérifier l'ELS.\n7. Calculer les armatures transversales et leur répartition.\n8. Dessiner le plan de ferraillage et établir la nomenclature des aciers.` : ''); };
SOL.reg({id:'poutre', mat:'rdm', mats:['rdm', 'ba'], niv:2, ia:'{"L":6,"appuis":[{"x":0,"t":"A"},{"x":6,"t":"S"}],"ch":[{"t":"q","a":0,"b":6,"g":20,"q":0}],"comb":"brut","b":20,"h":45} — appuis t : S appui simple, A articulation, E encastrement (x = 0 ou L) ; charges t : q répartie uniforme de a à b (kN/m), t trapèze de a à b (g puis g2), P force ponctuelle en a (kN), C couple en a (kN·m, sens horaire +) ; g = charge permanente ou charge donnée, q = charge d\'exploitation ; comb : brut (sans coefficient), ELU ou ELS ; b et h en cm', titre:'Étude complète d\'une poutre (dessin, réactions, V, M, flèche)', resume:'Dessinez votre poutre (appuis, charges) : la plateforme vous guide pour le degré d\'hyperstaticité, les réactions, les équations par tronçon, les diagrammes et la flèche.',
  ex:clone(Object.assign({}, base, {comb:'brut', ch:[{t:'q', a:0, b:6, g:20, q:0}, {t:'P', a:2, g:30, q:0}]})), rnd:() => Object.assign(rndBeam(false), {comb:R.p(['brut', 'ELU'])}), editor, enonce, solve});
SOL.reg({id:'ba-poutre', mat:'ba', mats:['ba', 'rdm'], niv:3, ia:'mêmes données que « poutre » avec en plus "ba":true, "fc28":25, "fe":500, "c":3 (enrobage en cm), "fiss":"FPP" ou "FP", "pp":true pour ajouter le poids propre ; g et q = charges permanentes et d\'exploitation (ELU calculé automatiquement)', titre:'Poutre en béton armé : du chargement au plan de ferraillage', resume:'Chaîne complète : RDM (réactions, V, M), aciers en travée et sur appuis, choix et disposition des barres, ELS, cadres (Caquot), plan de ferraillage, nomenclature et mise en œuvre.',
  ex:clone(Object.assign({}, base, {ba:true, comb:'ELU', L:10, appuis:[{x:0, t:'A'}, {x:5, t:'S'}, {x:10, t:'S'}], ch:[{t:'q', a:0, b:10, g:18, q:8}], b:20, h:45, pp:true})), rnd:() => Object.assign(rndBeam(true), {ba:true, comb:'ELU', pp:true}), editor, enonce, solve});

/* ---------- depuis un projet type : poutre continue de la file ---------- */
SOL.beamFromProject = (Mdl, e) => {
  const s = e.s, chain = Mdl.beams.filter(b => b.lvl === e.lvl && b.type === e.type && b.s.hor === s.hor && Math.abs(b.s.c - s.c) < .011).sort((u, v) => u.s.a - v.s.a);
  // ne garder que la chaîne continue qui contient e
  const groups = []; chain.forEach(b => { const g = groups[groups.length - 1]; if(g && Math.abs(g[g.length - 1].s.b - b.s.a) < .011) g.push(b); else groups.push([b]); });
  const grp = groups.find(g => g.includes(e)) || [e], x0 = grp[0].s.a;
  const r2 = v => Math.round(v*100)/100;
  const appuis = [{x:0, t:'A'}].concat(grp.map(b => ({x:r2(b.s.b - x0), t:'S'})));
  const ch = grp.map(b => ({t:'q', a:r2(b.s.a - x0), b:r2(b.s.b - x0), g:r2(b.G), q:r2(b.Q)}));
  return {L:r2(grp[grp.length - 1].s.b - x0), appuis, ch, ba:true, comb:'ELU', b:Math.round(e.b*100), h:Math.round(e.h*100), fc28:25, fe:500, c:3, fiss:'FPP', pp:false, src:e.id};
};
SOL.beam = {analyse, design, beamSvg, diagSvg, pfmt, piecewise, pev, MODELES};
SOL.ba = {mat, flex, pickBars, elsCheck, sec, kgm, barTxt, CAQ, caquot, DIAMS, mdTable};
})();
