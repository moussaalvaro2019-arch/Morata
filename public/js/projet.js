/* =====================================================================
   PROJETS TYPES : modèle de structure calculé
   Chaque élément a un repère, des coordonnées, ses charges, son calcul
   (BAEL 91 simplifié, béton fc28 = 25 MPa, aciers Fe E500) et ses quantités.
   Origine des coordonnées : intersection des axes A et 1 (x vers la droite,
   y vers l'arrière du bâtiment), niveaux en mètres depuis ±0,00.
   ===================================================================== */
(function(){
'use strict';
const {esc, ic, F} = A;
const r2 = v => Math.round(v*100)/100;
const r3 = v => Math.round(v*1000)/1000;
const up = (v, s) => Math.round(Math.ceil(v/s - 1e-9)*s*1000)/1000;
const dn = (v, s) => Math.round(Math.floor(v/s + 1e-9)*s*1000)/1000;
const fm = (v, d=2) => F(v, d);
const HN = 3.0;
const fc28 = 25, fe = 500, gb = 1.5, gs = 1.15;
const fbu = 0.85*fc28/gb, fsu = fe/gs, ft28 = 0.6 + 0.06*fc28;
const AXL = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const sec = d => Math.PI*d*d/400;          // cm²
const kgm = d => d*d/162;                  // kg/m
const GMUR = {ext:2.3, int:1.8};           // kN/m² de mur en agglos enduits (15 / 10)
const HOURDIS = [[4.0,'12+4',2.40,.16],[5.0,'16+4',2.85,.20],[6.0,'20+4',3.20,.24],[7.2,'25+5',3.65,.30]];
const uniq = a => [...new Set(a.map(r2))].sort((x,y)=>x-y);
const MC = new WeakMap();

/* ---------- choix des barres ---------- */
const COMBOS = [];
[10,12,14,16,20,25].forEach(d => [2,3,4,5,6].forEach(n => COMBOS.push({n, d, A:n*sec(d)})));
function pick(As, o={}){
  const nmax = o.nmax || 5, nmin = o.nmin || 2, dmin = o.dmin || 10;
  const c = COMBOS.filter(x => x.n <= nmax && x.n >= nmin && x.d >= dmin && x.A >= As - 1e-9).sort((a,b) => a.A - b.A || a.n - b.n)[0];
  return c || {n:nmax, d:25, A:nmax*sec(25)};
}
function pickPost(As, a){
  const ns = a >= .35 ? [4,6,8] : a >= .30 ? [4,6,8] : [4,6];
  const c = [];
  ns.forEach(n => [10,12,14,16,20,25].forEach(d => { const A_ = n*sec(d); if(A_ >= As - 1e-9) c.push({n, d, A:A_}); }));
  return c.sort((x,y) => x.A - y.A || x.n - y.n)[0] || {n:8, d:25, A:8*sec(25)};
}
const barTxt = b => `${b.n} HA${b.d}`;

/* ---------- flexion simple ELU (section rectangulaire) ---------- */
function flex(Mu, b, h){
  const d = .9*h, mu = Mu*1e-3/(b*d*d*fbu);
  const ok = mu < .372, al = 1.25*(1 - Math.sqrt(Math.max(0, 1 - 2*Math.min(mu, .48))));
  const z = d*(1 - .4*al), As = Mu*1e-3/(z*fsu)*1e4, Amin = .23*b*d*ft28/fe*1e4;
  return {d, mu, al, z, As:Math.max(0, As), Amin, ok};
}
function stirrups(Vu, b, d, dl){
  const tu = Vu*1e-3/(b*d), tlim = Math.min(.2*fc28/gb, 5);
  const dt = dl >= 16 ? 8 : 6, At = 2*sec(dt);
  const need = Math.max(tu - .3*ft28, .35);
  const st = Math.max(.07, Math.min(dn(At*1e-4*.9*fsu/(b*need), .01), dn(.9*d, .05), .40));
  return {tu, tlim, ok:tu <= tlim, dt, st:Math.min(st, .25)};
}

/* ---------- niveaux et géométrie ---------- */
function geom(p){
  const PL = A.PLAN, L = PL.levels(p), S = p.struct || {};
  const lv0 = L[0].lv, W0 = PL.walls(lv0, p.murs);
  let pts = PL.posts(p, lv0, W0).map(([x,y]) => [r2(x), r2(y)]);
  (S.extraPosts || []).forEach(([x,y]) => { if(!pts.some(q => Math.abs(q[0]-x) < .01 && Math.abs(q[1]-y) < .01)) pts.push([x, y]); });
  const xs = uniq(pts.map(q => q[0])), ys = uniq(pts.map(q => q[1]));
  const ax = {x:xs.map((v,i) => ({n:String(i+1), v})), y:ys.map((v,i) => ({n:AXL[i] || 'Y'+i, v}))};
  const nX = v => (ax.x.find(a => Math.abs(a.v - v) < .011) || {n:'?'}).n, nY = v => (ax.y.find(a => Math.abs(a.v - v) < .011) || {n:'?'}).n;
  const posts = pts.map(([x,y]) => ({x, y, ax:nY(y) + nX(x)})).sort((a,b) => a.y - b.y || a.x - b.x);
  posts.forEach(q => q.id = 'P' + q.ax);
  // lignes porteuses
  let lines;
  if(p.grille){ const g = p.grille, X0 = g.x[0], X1 = g.x[g.x.length-1], Y0 = g.y[0], Y1 = g.y[g.y.length-1];
    lines = [...g.y.map(y => ({hor:true, c:y, a:X0, b:X1, ext:y === Y0 || y === Y1})), ...g.x.map(x => ({hor:false, c:x, a:Y0, b:Y1, ext:x === X0 || x === X1}))]; }
  else lines = W0.map(w => ({hor:w.hor, c:r2(w.c), a:r2(w.a), b:r2(w.b), ext:w.type === 'ext'}));
  (S.extraBeams || []).forEach(([x1,y1,x2,y2]) => lines.push(y1 === y2 ? {hor:true, c:y1, a:Math.min(x1,x2), b:Math.max(x1,x2), ext:true} : {hor:false, c:x1, a:Math.min(y1,y2), b:Math.max(y1,y2), ext:true}));
  const on = (q, l) => l.hor ? Math.abs(q.y - l.c) < .011 && q.x > l.a - .011 && q.x < l.b + .011 : Math.abs(q.x - l.c) < .011 && q.y > l.a - .011 && q.y < l.b + .011;
  const segs = new Map();
  lines.forEach(l => {
    const ps = posts.filter(q => on(q, l)).map(q => l.hor ? q.x : q.y).sort((a,b) => a-b);
    for(let i=0;i<ps.length-1;i++){ const a = ps[i], b = ps[i+1]; if(b - a < .3) continue;
      const k = (l.hor?'h':'v') + l.c + ':' + a;
      if(!segs.has(k)) segs.set(k, {hor:l.hor, c:l.c, a, b, L:r2(b - a), ext:l.ext}); else if(l.ext) segs.get(k).ext = true; }
  });
  const SG = [...segs.values()].sort((u,v) => (u.hor === v.hor ? 0 : u.hor ? -1 : 1) || u.c - v.c || u.a - v.a);
  SG.forEach(s => { s.name = s.hor ? `${nY(s.c)}${nX(s.a)}-${nX(s.b)}` : `${nX(s.c)}${nY(s.a)}-${nY(s.b)}`;
    s.lbl = s.hor ? `file ${nY(s.c)}, entre les axes ${nX(s.a)} et ${nX(s.b)}` : `axe ${nX(s.c)}, entre les files ${nY(s.a)} et ${nY(s.b)}`;
    s.pa = posts.find(q => s.hor ? Math.abs(q.x - s.a) < .011 && Math.abs(q.y - s.c) < .011 : Math.abs(q.y - s.a) < .011 && Math.abs(q.x - s.c) < .011);
    s.pb = posts.find(q => s.hor ? Math.abs(q.x - s.b) < .011 && Math.abs(q.y - s.c) < .011 : Math.abs(q.y - s.b) < .011 && Math.abs(q.x - s.c) < .011); });
  // continuité
  const byLine = {};
  SG.forEach(s => (byLine[(s.hor?'h':'v') + s.c] = byLine[(s.hor?'h':'v') + s.c] || []).push(s));
  Object.values(byLine).forEach(list => { list.sort((u,v) => u.a - v.a); let chain = [];
    const flush = () => { chain.forEach((s,i) => { s.nspan = chain.length; s.pos = chain.length === 1 ? 'iso' : (i === 0 || i === chain.length - 1) ? 'rive' : 'inter'; s.ia = i > 0; s.ib = i < chain.length - 1; }); chain = []; };
    list.forEach(s => { if(chain.length && Math.abs(chain[chain.length-1].b - s.a) > .011) flush(); chain.push(s); }); flush(); });
  // cellules (panneaux de plancher)
  let cells;
  if(p.grille){ const g = p.grille; cells = [];
    for(let j=0;j<g.y.length-1;j++) for(let i=0;i<g.x.length-1;i++){ const c = {x:g.x[i], y:g.y[j], w:r2(g.x[i+1]-g.x[i]), h:r2(g.y[j+1]-g.y[j])}; c.n = `${nY(c.y)}-${nY(c.y+c.h)} / ${nX(c.x)}-${nX(c.x+c.w)}`; cells.push(c); } }
  else cells = lv0.pieces.filter(r => r.t !== 'terrasse').map(r => ({x:r.x, y:r.y, w:r.w, h:r.h, n:r.n}));
  return {L, S, lv0, W0, posts, ax, xs, ys, nX, nY, segs:SG, cells};
}
const inRoom = (c, rooms, t) => { const cx = c.x + c.w/2, cy = c.y + c.h/2; return rooms.find(r => (!t || r.t === t) && cx > r.x && cx < r.x + r.w && cy > r.y && cy < r.y + r.h); };
const adj = (s, c) => s.hor ? (Math.abs(c.y - s.c) < .011 || Math.abs(c.y + c.h - s.c) < .011) && Math.min(s.b, c.x + c.w) - Math.max(s.a, c.x) > .1
                            : (Math.abs(c.x - s.c) < .011 || Math.abs(c.x + c.w - s.c) < .011) && Math.min(s.b, c.y + c.h) - Math.max(s.a, c.y) > .1;
const overlap = (s, c) => s.hor ? Math.min(s.b, c.x + c.w) - Math.max(s.a, c.x) : Math.min(s.b, c.y + c.h) - Math.max(s.a, c.y);

/* =====================================================================
   MODÈLE
   ===================================================================== */
function model(p){
  if(MC.has(p)) return MC.get(p);
  const G = geom(p), {L, S, posts, segs, cells} = G, PL = A.PLAN;
  const site = p.site || {}, sol = site.sol || {sigma:1.5, prof:.9, nature:'Sol courant'};
  const slab = !!S.dalle, top = L.length - 1;
  const els = [];
  const Wl = L.map(l => PL.walls(l.lv, p.murs));
  const a0 = (S.poteau || 20)/100, aMin = (S.poteauMin || S.poteau || 20)/100;
  const bP = (S.poutre || S.chainage || [20,25])[0]/100, hP0 = (S.poutre || S.chainage || [20,25])[1]/100;
  const bbox0 = PL.bbox(L[0].lv);

  /* ---- planchers (par niveau) ---- */
  const panels = [];
  if(slab) L.forEach((l, i) => {
    const rooms = l.lv.pieces, above = L[i+1] ? L[i+1].lv.pieces : null;
    cells.forEach((c, k) => {
      if(!inRoom(c, rooms) || inRoom(c, rooms, 'terrasse')) return;
      const stair = inRoom(c, rooms, 'escalier'), tremie = !!stair && (i < top || p.edicule);
      const lx = Math.min(c.w, c.h), ly = Math.max(c.w, c.h);
      const hd = HOURDIS.find(x => lx <= x[0]) || HOURDIS[HOURDIS.length-1];
      let usage, Gk, Qk;
      if(tremie){ usage = 'Trémie d\'escalier'; Gk = 6.5; Qk = 2.5; }
      else if(i === top){ usage = 'Toiture-terrasse inaccessible'; Gk = hd[2] + 2.4 + .2; Qk = 1.0; }
      else if(above && inRoom(c, above, 'terrasse')){ usage = 'Terrasse accessible'; Gk = hd[2] + 2.4; Qk = 1.5; }
      else { usage = 'Plancher d\'étage (logement)'; Gk = hd[2] + 1.0 + 1.0; Qk = 1.5; }
      panels.push({type:'dalle', id:`D${i}-${k+1}`, lvl:i, z:l.z + HN, x:c.x, y:c.y, w:c.w, h:c.h, n:c.n, lx, ly, dir:c.w <= c.h ? 'x' : 'y', hd:hd[1], ep:hd[3], tremie, usage, G:r2(Gk), Q:Qk});
    });
  });

  /* ---- poutres / chaînages (par niveau) ---- */
  const beams = [];
  const roofDepth = bbox0.y1 - bbox0.y0, deb = (p.toit && p.toit.debord) || .6;
  L.forEach((l, i) => {
    if(!slab && i > 0) return;
    const P = panels.filter(x => x.lvl === i);
    segs.forEach(s => {
      let Gq = 0, Qq = 0; const src = [];
      const adjP = P.filter(c => adj(s, c));
      if(slab){
        if(!adjP.length && !(Wl[i+1] && Wl[i+1].some(w => w.hor === s.hor && Math.abs(w.c - s.c) < .011 && Math.min(w.b, s.b) - Math.max(w.a, s.a) > .1))) return;
        adjP.forEach(c => { const f = Math.max(0, overlap(s, c))/s.L; const bearing = (c.dir === 'x') !== s.hor; const wdt = bearing ? c.lx/2 : .30;
          Gq += c.G*wdt*f; Qq += c.Q*wdt*f; src.push(`${c.tremie ? 'Escalier' : 'Plancher'} ${c.n} (${bearing ? 'appui des poutrelles, ' + fm(c.lx/2) + ' m' : 'bande de rive 0,30 m'})`); });
        if(Wl[i+1]){ Wl[i+1].forEach(w => { if(w.hor !== s.hor || Math.abs(w.c - s.c) > .011) return; const ov = Math.min(w.b, s.b) - Math.max(w.a, s.a); if(ov > .1){ const g = GMUR[w.type === 'ext' ? 'ext' : 'int']*(HN - hP0)*ov/s.L; Gq += g; src.push(`Mur de l'étage au-dessus (${w.type === 'ext' ? 'agglos de 15' : 'agglos de 10'}) : ${fm(g)} kN/m`); } }); }
        const nAdj = P.filter(c => !c.tremie && adj(s, c)).length;
        if(i === top && nAdj === 1 && p.toit && p.toit.acrotere){ const g = 25*.10*p.toit.acrotere + .5; Gq += g; src.push(`Acrotère h = ${fm(p.toit.acrotere)} m : ${fm(g)} kN/m`); }
      } else {
        const eave = s.hor && (Math.abs(s.c - bbox0.y0) < .011 || Math.abs(s.c - bbox0.y1) < .011);
        const gr = .05 + (p.toit && /m[ée]tal/i.test(p.toit.charpente) ? .20 : .15) + .20, qr = .40;
        if(eave){ const w = roofDepth/2 + deb; Gq += gr*w; Qq += qr*w; src.push(`Toiture (${p.toit ? p.toit.couverture : 'tôles'} + charpente + faux plafond) sur ${fm(w)} m de largeur`); }
        else if(!s.hor && p.toit && p.toit.type === '4 pans' && (Math.abs(s.c - bbox0.x0) < .011 || Math.abs(s.c - bbox0.x1) < .011)){ const w = Math.min(s.L, roofDepth)/3 + deb; Gq += gr*w; Qq += qr*w; src.push(`Toiture : croupe (pan de bout) sur ${fm(w)} m`); }
      }
      const h = slab ? Math.max(hP0, up(s.L/(s.pos === 'inter' ? 14 : 12), .05)) : hP0, b = bP;
      const pp = 25*b*(slab ? h - .20 : h); Gq += pp; src.push(`Poids propre ${Math.round(b*100)}×${Math.round(h*100)} : ${fm(pp)} kN/m`);
      const qu = 1.35*Gq + 1.5*Qq, qs = Gq + Qq, M0 = qu*s.L*s.L/8;
      const cT = s.pos === 'iso' ? 1 : s.pos === 'rive' ? .85 : .75, cA = s.pos === 'iso' ? .15 : s.nspan === 2 ? .6 : .5;
      const Mt = cT*M0, Ma = cA*M0, Ma0 = s.pos === 'iso' ? .15*M0 : .2*M0;
      const Vu = qu*s.L/2*(s.pos === 'iso' ? 1 : 1.1);
      const ft = flex(Mt, b, h), fa = flex(Math.max(Ma, Ma0), b, h);
      const bt = pick(Math.max(ft.As, ft.Amin, slab ? 0 : 2*sec(10)), {nmax:b >= .25 ? 5 : 4, nmin:slab ? 3 : 2});
      const ba = pick(Math.max(fa.As, slab ? ft.Amin*.6 : 2*sec(10)), {nmax:4});
      const sv = stirrups(Vu, b, ft.d, bt.d);
      const id = (slab ? 'B' + i + '-' : 'CH-') + s.name;
      beams.push({type:slab ? 'poutre' : 'chainage', id, lvl:i, z:l.z + (slab ? HN : HN), s, L:s.L, b, h, G:r2(Gq), Q:r2(Qq), qu, qs, M0, Mt, Ma:Math.max(Ma, Ma0), Vu, ft, fa, bt, ba, sv, src, fl:h/s.L >= 1/16});
    });
  });

  /* ---- poteaux : descente de charges ---- */
  const Pd = posts.map(q => ({...q, lv:L.map(() => ({G:0, Q:0}))}));
  const ofPost = q => Pd.find(x => x.id === q.id);
  beams.forEach(bm => { [['pa','ia'],['pb','ib']].forEach(([k, inner]) => { const q = bm.s[k]; if(!q) return; const kk = bm.s[inner] ? 1.1 : 1;
    const P_ = ofPost(q); P_.lv[bm.lvl].G += bm.G*bm.L/2*kk; P_.lv[bm.lvl].Q += bm.Q*bm.L/2*kk; (P_.from = P_.from || []).push({id:bm.id, lvl:bm.lvl, G:bm.G*bm.L/2*kk, Q:bm.Q*bm.L/2*kk}); }); });
  const postEls = [];
  Pd.forEach(q => {
    let NG = 0, NQ = 0; const rows = [];
    for(let i = (slab ? top : 0); i >= 0; i--){
      let a = Math.max(aMin, a0 - (slab && S.poteauMin ? .05*Math.floor(i/2) : 0));
      NG += q.lv[i].G; NQ += q.lv[i].Q;
      let design;
      for(let k=0;k<4;k++){
        const pp = 25*a*a*HN, NGi = NG + pp, Nu = 1.35*NGi + 1.5*NQ, Ns = NGi + NQ;
        const lf = .7*HN, lam = 3.46*lf/a, alpha = .85/(1 + .2*Math.pow(lam/35, 2)), Br = Math.pow(a - .02, 2);
        const Areq = (Nu*1e-3/alpha - Br*fc28/(.9*gb))*gs/fe*1e4, Amin = Math.max(4*4*a, .2*a*a*100), Amax = 5*a*a*100;
        if(Areq > Amax && k < 3){ a += .05; continue; }
        const bars = pickPost(Math.max(Areq, Amin), a), dt = bars.d >= 16 ? 8 : 6, st = Math.min(dn(15*bars.d/1000, .05), .40, dn(a + .10, .05), .20);
        design = {a, pp, NGi, Nu, Ns, lf, lam, alpha, Br, Areq, Amin, Amax, bars, dt, st, sb:Ns*1e-3/(a*a + 15*bars.A*1e-4)};
        break;
      }
      NG += design.pp;
      rows.unshift({lvl:i, ...design, NGl:q.lv[i].G, NQl:q.lv[i].Q, NG, NQ});
    }
    rows.forEach(r => postEls.push({type:'poteau', id:`${q.id}-${L[r.lvl].court}`, post:q.id, ax:q.ax, x:q.x, y:q.y, lvl:r.lvl, z:L[r.lvl].z, d:r, from:(q.from||[]).filter(f => f.lvl === r.lvl)}));
    q.base = rows[0];
  });

  /* ---- longrines ---- */
  const lgr = (S.longrine || [20,30]).map(v => v/100);
  const longs = segs.map(s => {
    let ov = 0, ext = false; Wl[0].forEach(w => { if(w.hor === s.hor && Math.abs(w.c - s.c) < .011){ const o = Math.min(w.b, s.b) - Math.max(w.a, s.a); if(o > .1){ ov += o; if(w.type === 'ext') ext = true; } } });
    const fw = Math.min(1, ov/s.L), gm = GMUR[ext ? 'ext' : 'int'];
    const Gm = fw*(gm*(HN - (slab ? hP0 : (S.chainage||[20,20])[1]/100)) + 2.8*.6), pp = 25*lgr[0]*lgr[1];
    const Gq = Gm + pp, qu = 1.35*Gq, M0 = qu*s.L*s.L/8, Mt = (s.pos === 'iso' ? 1 : .85)*M0;
    const f = flex(Mt, lgr[0], lgr[1]), minB = /HA12/.test(S.aciers||'') && /Longrines 4 HA12/.test(S.aciers||'') ? 12 : 10;
    const bars = pick(Math.max(f.As, 2*sec(minB)), {nmax:3}), Vu = qu*s.L/2;
    return {type:'longrine', id:'L-' + s.name, s, lvl:-1, z:-(sol.prof||.9) + .4, L:s.L, b:lgr[0], h:lgr[1], Gm:r2(Gm), pp, G:r2(Gq), qu, M0, Mt, f, bars, sv:stirrups(Vu, lgr[0], f.d, bars.d), wall:fw > 0};
  });
  longs.forEach(l => { [l.s.pa, l.s.pb].forEach(q => { if(!q) return; const P_ = Pd.find(x => x.id === q.id); P_.wallG = (P_.wallG || 0) + l.G*l.L/2; (P_.longs = P_.longs || []).push({id:l.id, G:l.G*l.L/2}); }); });

  /* ---- semelles isolées ---- */
  const sig = sol.sigma*100, prof = sol.prof || .9;
  let semelles = Pd.map(q => {
    const b0 = q.base, a = b0.a, amorce = 25*a*a*prof;
    const NG = b0.NG + amorce + (q.wallG || 0), NQ = b0.NQ, Ns = NG + NQ, Nu = 1.35*NG + 1.5*NQ;
    let B = Math.max(.8, a + .4, up(Math.sqrt(Ns*1.08/sig), .20)), h = 0;
    for(let k=0;k<12;k++){ h = Math.max(.25, up((B - a)/4 + .05, .05)); if((Ns + 25*B*B*h + 18*B*B*Math.max(0, prof - h))/(B*B) <= sig) break; B = r2(B + .20); }
    const d = h - .05;
    const As = Nu*1e-3*(B - a)/(8*d*fsu)*1e4;
    let choice = null;
    for(const D of [10,12,14,16]){ const n = Math.max(Math.ceil(As/sec(D)), Math.ceil((B - .10)/.20) + 1); const s_ = (B - .10)/(n - 1); if(s_ >= .10){ choice = {n, d:D, s:s_}; break; } }
    choice = choice || {n:Math.ceil(As/sec(16)), d:16, s:.1};
    const Ptot = Ns + 25*B*B*h + 18*B*B*Math.max(0, prof - h);
    return {type:'semelle', id:'S' + q.ax, post:q.id, ax:q.ax, x:q.x, y:q.y, lvl:-1, z:-prof, a, B, h, d, NG, NQ, Ns, Nu, amorce, wallG:q.wallG || 0, longs:q.longs || [], As, bars:choice, sreal:Ptot/(B*B), sig};
  });
  const types = [...new Set(semelles.map(s => s.B + 'x' + s.h))].map(k => k.split('x').map(Number)).sort((u,v) => u[0] - v[0] || u[1] - v[1]);
  semelles.forEach(s => { s.typ = 'S' + (types.findIndex(t => t[0] === s.B && t[1] === s.h) + 1); });

  /* ---- linteaux ---- */
  const lint = [];
  L.forEach((l, i) => {
    if(i >= 2 && l.src === L[i-1].src) return;
    const W = Wl[i]; let k = 0;
    [...(l.lv.portes||[]).map(o => ({...o, kind:'porte', hh:2.2})), ...(l.lv.fenetres||[]).map(o => ({...o, kind:'fenetre', hh:2.2}))].forEach(o => {
      const w = W.find(w_ => (o.o === 'h') === w_.hor && Math.abs(w_.c - (o.o === 'h' ? o.y : o.x)) < .02 && (o.o === 'h' ? o.x : o.y) >= w_.a - .02 && (o.o === 'h' ? o.x + o.w : o.y + o.w) <= w_.b + .02);
      const t = w ? w.t : .15, Ll = r2(o.w + .40), q = GMUR[w && w.type === 'ext' ? 'ext' : 'int']*Math.min(.8, o.w*.87) + 25*t*.2, Mu = 1.35*q*Ll*Ll/8;
      const f = flex(Mu, t, .20), bars = pick(Math.max(f.As, 2*sec(10)), {nmax:3});
      const rooms = l.lv.pieces.filter(r => o.o === 'h' ? (Math.abs(r.y - o.y) < .02 || Math.abs(r.y + r.h - o.y) < .02) && o.x >= r.x - .02 && o.x + o.w <= r.x + r.w + .02 : (Math.abs(r.x - o.x) < .02 || Math.abs(r.x + r.w - o.x) < .02) && o.y >= r.y - .02 && o.y + o.w <= r.y + r.h + .02).map(r => r.n);
      k++;
      lint.push({type:'linteau', id:`LT${i}-${k}`, lvl:i, z:l.z + 2.2, o, kind:o.kind, t, L:Ll, q, Mu, f, bars, rooms, ext:!!(w && w.type === 'ext'), rep:i > 0 && L[i+1] && L[i+1].src === l.src ? `identique du ${L[i].nom} au ${L[top].nom}` : ''});
    });
  });

  /* ---- escaliers ---- */
  const stairs = [];
  L.forEach((l, i) => {
    if(i === top && !p.edicule) return;
    const r = l.lv.pieces.find(x => x.t === 'escalier'); if(!r) return;
    const H = HN, n = Math.round(H/.17), hm = H/n, g = Math.min(.30, Math.max(.26, .63 - 2*hm)), n1 = Math.ceil(n/2), L1 = (n1 - 1)*g;
    const long = Math.max(r.w, r.h), larg = Math.min(r.w, r.h), emm = (larg - .10)/2, pal = Math.max(1.0, emm);
    const Lh = L1 + pal, alpha = Math.atan(hm/g), e = Math.max(.12, up(Lh/28, .01));
    const Gk = 25*e/Math.cos(alpha) + 22*hm/2 + 1.0, Qk = 2.5, qu = 1.35*Gk + 1.5*Qk, Mu = .85*qu*Lh*Lh/8;
    const f = flex(Mu, 1, e); let bars = null;
    for(const D of [10,12,14]){ const s_ = dn(sec(D)/Math.max(f.As, f.Amin)*100, .01)/100; if(s_ >= .10){ bars = {d:D, s:Math.min(.20, s_*100 >= 10 ? s_ : .1)}; break; } }
    bars = bars || {d:14, s:.10};
    stairs.push({type:'escalier', id:'E' + i, lvl:i, z:l.z, r, H, n, hm, g, n1, n2:n - n1, L1, long, larg, emm, pal, fits:L1 + pal + .2 <= long, alpha, e, G:Gk, Q:Qk, qu, Mu, f, bars, Lh, top:i === top});
  });

  /* ---- acrotère, charpente, dallage ---- */
  const extra = [];
  if(slab && p.toit && p.toit.acrotere){ const P = panels.filter(x => x.lvl === top && !x.tremie);
    const Lp = beams.filter(b_ => b_.lvl === top && P.filter(c => adj(b_.s, c)).length === 1).reduce((a,b_) => a + b_.L, 0);
    const h = p.toit.acrotere, Mu = 1.5*1.0*h, f = flex(Mu, 1, .10);
    extra.push({type:'acrotere', id:'AC', lvl:top, z:L[top].z + HN, L:r2(Lp), h, e:.10, Mu, f}); }
  if(!slab && p.toit){ const T = p.toit, Wd = bbox0.x1 - bbox0.x0, span = roofDepth, ang = T.pente*Math.PI/180;
    const nf = Math.floor(Wd/T.entraxe) + 1, hf = (span/2 + T.debord)*Math.tan(ang) , rampant = (span/2 + T.debord)/Math.cos(ang);
    const Sc = (Wd + 2*T.debord)*rampant*2*(T.type === '4 pans' ? .97 : 1);
    extra.push({type:'charpente', id:'CHP', lvl:0, z:HN, T, Wd, span, ang, nf, hf, rampant, Sc, pannes:Math.ceil(rampant/1.1) + 1}); }
  const Sdal = L[0].lv.pieces.filter(r => r.t !== 'escalier').reduce((a,r) => a + r.w*r.h, 0);
  extra.push({type:'dallage', id:'DL', lvl:0, z:0, S:Sdal, e:slab ? .10 : .08});

  /* ---- quantités ---- */
  const q = {beton:{}, acier:{}};
  const addQ = (k, v, kg) => { q.beton[k] = (q.beton[k] || 0) + v; q.acier[k] = (q.acier[k] || 0) + kg; };
  postEls.forEach(e => { const d = e.d, Ll = d.bars.n*(HN + 50*d.bars.d/1000)*kgm(d.bars.d), nc = Math.ceil(HN/d.st) + 4, per = 4*(d.a - .05) + .2;
    e.qty = {beton:d.a*d.a*HN, acier:Ll + nc*per*kgm(d.dt), coff:4*d.a*HN}; addQ('Poteaux', e.qty.beton, e.qty.acier); });
  beams.forEach(e => { const nc = Math.ceil(e.L/e.sv.st) + 1, per = 2*(e.b + e.h) - .16 + .2;
    const kg = e.bt.n*(e.L + .6)*kgm(e.bt.d) + 2*e.ba.n*(e.L*.3 + .4)*kgm(e.ba.d) + nc*per*kgm(e.sv.dt);
    e.qty = {beton:e.b*(slab ? e.h - .20 : e.h)*e.L, acier:kg, coff:e.L*(e.b + 2*(slab ? e.h - .20 : e.h))}; addQ(slab ? 'Poutres' : 'Chaînages', e.qty.beton, e.qty.acier); });
  panels.forEach(e => { const S_ = e.w*e.h; if(e.tremie){ e.qty = {beton:0, acier:0, coff:0}; return; }
    const npt = Math.ceil((e.dir === 'x' ? e.h : e.w)/.6) - 1, nent = npt + 1;
    e.npt = npt; e.nent = Math.ceil(nent*e.lx/.20); e.qty = {beton:S_*(e.hd === '25+5' ? .05 : .04)*1.15 + npt*.012*e.lx, acier:S_*1.6 + 2*e.ly*1.2*kgm(10), coff:0, treillis:S_*1.1};
    addQ('Planchers', e.qty.beton, e.qty.acier); });
  semelles.forEach(e => { const kg = 2*e.bars.n*(e.B - .1 + .3)*kgm(e.bars.d); e.qty = {beton:e.B*e.B*e.h, acier:kg, coff:4*e.B*e.h, propre:Math.pow(e.B + .1, 2)*.05, fouille:Math.pow(e.B + .3, 2)*prof}; addQ('Semelles', e.qty.beton, e.qty.acier); });
  longs.forEach(e => { const nc = Math.ceil(e.L/e.sv.st), per = 2*(e.b + e.h) - .16 + .2; e.qty = {beton:e.b*e.h*e.L, acier:2*e.bars.n*(e.L + .6)*kgm(e.bars.d) + nc*per*kgm(6), coff:2*e.h*e.L}; addQ('Longrines', e.qty.beton, e.qty.acier); });
  lint.forEach(e => { const rep = e.lvl > 0 ? L.filter(x => x.src === L[e.lvl].src && x.i >= e.lvl).length : 1;
    e.qty = {beton:e.t*.2*e.L, acier:(e.bars.n*e.L + 2*e.L)*kgm(e.bars.d) + Math.ceil(e.L/.15)*(2*(e.t + .2))*kgm(6), coff:e.L*(.4 + e.t)}; e.nrep = rep; addQ('Linteaux', e.qty.beton*rep, e.qty.acier*rep); });
  stairs.forEach(e => { const w = e.emm*2 + e.pal*e.larg/2, Sv = (e.L1/Math.cos(e.alpha))*e.emm*2 + e.pal*e.larg; e.qty = {beton:Sv*e.e + e.n*e.hm*e.g/2*e.emm, acier:Sv/e.bars.s*kgm(e.bars.d)*1.3 + Sv*2.5, coff:Sv*1.1}; addQ('Escaliers', e.qty.beton, e.qty.acier); });
  extra.filter(e => e.type === 'acrotere').forEach(e => { e.qty = {beton:e.L*e.h*e.e, acier:e.L*e.h*2*(1/.2)*kgm(8)*1.1, coff:2*e.L*e.h}; addQ('Acrotère', e.qty.beton, e.qty.acier); });
  extra.filter(e => e.type === 'dallage').forEach(e => { e.qty = {beton:e.S*e.e, acier:e.S*(slab ? 2.0 : 1.3), coff:0}; addQ('Dallage', e.qty.beton, e.qty.acier); });

  const all = [...postEls, ...beams, ...panels, ...semelles, ...longs, ...lint, ...stairs, ...extra];
  const M = {p, G, L, top, slab, sol, site, posts:Pd, postEls, beams, panels, semelles, types, longs, lint, stairs, extra, all, q,
    totBeton:Object.values(q.beton).reduce((a,b) => a + b, 0), totAcier:Object.values(q.acier).reduce((a,b) => a + b, 0)};
  M.byId = id => all.find(e => e.id === id);
  MC.set(p, M);
  return M;
}

/* =====================================================================
   SCHÉMAS PARAMÉTRÉS (propres à chaque élément)
   ===================================================================== */
const SV = (w, h, body, lab) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" role="img" aria-label="${esc(lab||'Schéma')}" style="max-width:100%;height:auto;display:block;margin:auto">${body}</svg>`;
const txt = (x, y, t, o='') => `<text x="${x}" y="${y}" font-size="11" fill="#14202E" ${o}>${esc(t)}</text>`;
function barsPos(n, a, c){ // positions des barres dans une section carrée (mm d'image)
  const p = [[c, c], [a-c, c], [a-c, a-c], [c, a-c]];
  if(n >= 6){ p.push([a/2, c], [a/2, a-c]); }
  if(n >= 8){ p.push([c, a/2], [a-c, a/2]); }
  return p.slice(0, n);
}
function schemaPost(e){
  const d = e.d, s = 170/d.a/100, a = d.a*100*s, c = 3.5*s, ox = 40, oy = 22;
  const B = barsPos(d.bars.n, a, c);
  return SV(330, 240, `<rect x="${ox}" y="${oy}" width="${a}" height="${a}" fill="#E7E1D6" stroke="#14202E" stroke-width="1.6"/>
   <rect x="${ox+2.5*s}" y="${oy+2.5*s}" width="${a-5*s}" height="${a-5*s}" fill="none" stroke="#C95F18" stroke-width="2" rx="4"/>
   ${B.map(([x,y]) => `<circle cx="${ox+x}" cy="${oy+y}" r="${Math.max(4, d.bars.d*s/20)}" fill="#14202E"/>`).join('')}
   <line x1="${ox}" x2="${ox+a}" y1="${oy+a+16}" y2="${oy+a+16}" stroke="#5E6B7A"/>${txt(ox+a/2-14, oy+a+30, Math.round(d.a*100) + ' cm')}
   ${txt(ox+a+16, oy+20, barTxt(d.bars), 'font-weight="700"')}${txt(ox+a+16, oy+38, `Cadres HA${d.dt} e = ${Math.round(d.st*100)} cm`)}${txt(ox+a+16, oy+56, `Enrobage ${e.ext ? '3' : '2,5'} cm`)}${txt(ox+a+16, oy+74, `Recouvrement ${Math.round(50*d.bars.d/10)} cm`)}`, 'Section du poteau');
}
function schemaBeam(e){
  const W = 520, x0 = 30, x1 = W - 150, y0 = 40, hh = Math.max(34, e.h*90);
  const sup = x => `<path d="M ${x-10} ${y0+hh+14} L ${x} ${y0+hh} L ${x+10} ${y0+hh+14} Z" fill="#fff" stroke="#14202E"/>`;
  const nst = Math.min(28, Math.ceil(e.L/e.sv.st));
  let st = ''; for(let k=0;k<=nst;k++){ const x = x0 + 6 + (x1 - x0 - 12)*k/nst; st += `<line x1="${x}" x2="${x}" y1="${y0+4}" y2="${y0+hh-4}" stroke="#C95F18" stroke-width="1"/>`; }
  const sx = W - 110, sw = e.b*170, sh = e.h*170, sy = 30;
  return SV(W, 190, `<rect x="${x0}" y="${y0}" width="${x1-x0}" height="${hh}" fill="#F3EEE6" stroke="#14202E" stroke-width="1.4"/>${st}
   <line x1="${x0+4}" x2="${x1-4}" y1="${y0+hh-6}" y2="${y0+hh-6}" stroke="#14202E" stroke-width="3"/>
   <line x1="${x0+4}" x2="${x0+(x1-x0)*.3}" y1="${y0+6}" y2="${y0+6}" stroke="#2F6FDB" stroke-width="3"/><line x1="${x1-(x1-x0)*.3}" x2="${x1-4}" y1="${y0+6}" y2="${y0+6}" stroke="#2F6FDB" stroke-width="3"/>
   ${sup(x0)}${sup(x1)}${txt((x0+x1)/2-30, y0+hh+30, 'L = ' + fm(e.L) + ' m')}
   ${txt(x0, 22, 'Chapeaux ' + barTxt(e.ba), 'fill="#2F6FDB" font-weight="700"')}${txt((x0+x1)/2-40, y0+hh-12, 'Inférieurs ' + barTxt(e.bt), 'font-weight="700"')}
   <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="#E7E1D6" stroke="#14202E" stroke-width="1.4"/><rect x="${sx+5}" y="${sy+5}" width="${sw-10}" height="${sh-10}" fill="none" stroke="#C95F18" stroke-width="1.6" rx="3"/>
   ${Array.from({length:e.bt.n}, (_,k) => `<circle cx="${sx+9+(sw-18)*k/Math.max(1,e.bt.n-1)}" cy="${sy+sh-9}" r="4" fill="#14202E"/>`).join('')}
   ${Array.from({length:e.ba.n}, (_,k) => `<circle cx="${sx+9+(sw-18)*k/Math.max(1,e.ba.n-1)}" cy="${sy+9}" r="3.5" fill="#2F6FDB"/>`).join('')}
   ${txt(sx-4, sy+sh+18, Math.round(e.b*100) + ' × ' + Math.round(e.h*100) + ' cm')}${txt(x0, 182, 'Cadres HA' + e.sv.dt + ' : e = ' + Math.round(e.sv.st*100) + ' cm (resserrés à ' + Math.max(7, Math.round(e.sv.st*50)) + ' cm près des appuis)', 'fill="#C95F18"')}`, 'Ferraillage de la poutre');
}
function schemaSemelle(e){
  const s = 150/e.B, B = e.B*s, a = e.a*s, ox = 20, oy = 20;
  let g = ''; for(let k=0;k<e.bars.n;k++){ const t = 6 + (B-12)*k/Math.max(1,e.bars.n-1); g += `<line x1="${ox+t}" x2="${ox+t}" y1="${oy+5}" y2="${oy+B-5}" stroke="#C95F18" stroke-width="1.2"/><line y1="${oy+t}" y2="${oy+t}" x1="${ox+5}" x2="${ox+B-5}" stroke="#C95F18" stroke-width="1.2"/>`; }
  const cx = 230, hS = Math.max(26, e.h*s), base = 150;
  return SV(440, 210, `<rect x="${ox}" y="${oy}" width="${B}" height="${B}" fill="#F3EEE6" stroke="#14202E" stroke-width="1.4"/>${g}<rect x="${ox+(B-a)/2}" y="${oy+(B-a)/2}" width="${a}" height="${a}" fill="#14202E"/>
   ${txt(ox, oy+B+18, fm(e.B) + ' × ' + fm(e.B) + ' m (vue en plan)')}
   <rect x="${cx}" y="${base-hS}" width="${B}" height="${hS}" fill="#E7E1D6" stroke="#14202E" stroke-width="1.4"/><rect x="${cx-6}" y="${base}" width="${B+12}" height="8" fill="#D8D0C2"/>
   <rect x="${cx+(B-a)/2}" y="${base-hS-60}" width="${a}" height="60" fill="#E7E1D6" stroke="#14202E"/>
   <line x1="${cx+5}" x2="${cx+B-5}" y1="${base-7}" y2="${base-7}" stroke="#C95F18" stroke-width="3"/>
   ${txt(cx+B+8, base-hS/2, 'h = ' + Math.round(e.h*100) + ' cm')}${txt(cx, base+26, 'Béton de propreté 5 cm')}${txt(cx, 22, e.bars.n + ' HA' + e.bars.d + ' e = ' + Math.round(e.bars.s*100) + ' cm, 2 sens', 'font-weight="700" fill="#C95F18"')}`, 'Semelle');
}
function schemaPanel(e){
  const s = Math.min(300/e.w, 180/e.h), W = e.w*s, H = e.h*s, ox = 20, oy = 20;
  let g = '';
  if(!e.tremie){ const n = Math.max(2, Math.round((e.dir === 'x' ? e.h : e.w)/.6)); for(let k=1;k<n;k++){ const t = k/n; g += e.dir === 'x' ? `<line x1="${ox}" x2="${ox+W}" y1="${oy+H*t}" y2="${oy+H*t}" stroke="#2F6FDB" stroke-width="1.5"/>` : `<line y1="${oy}" y2="${oy+H}" x1="${ox+W*t}" x2="${ox+W*t}" stroke="#2F6FDB" stroke-width="1.5"/>`; } }
  return SV(Math.max(360, W+60), H+70, `<rect x="${ox}" y="${oy}" width="${W}" height="${H}" fill="${e.tremie?'#F5F1EA':'#F3EEE6'}" stroke="#14202E" stroke-width="1.6"/>${g}
   ${e.tremie ? `<line x1="${ox}" y1="${oy}" x2="${ox+W}" y2="${oy+H}" stroke="#9A9184"/><line x1="${ox+W}" y1="${oy}" x2="${ox}" y2="${oy+H}" stroke="#9A9184"/>` : ''}
   ${txt(ox, oy+H+18, `${fm(e.w)} × ${fm(e.h)} m · ${e.tremie ? 'trémie' : 'poutrelles (traits bleus) dans le sens de ' + fm(e.lx) + ' m'}`)}`, 'Panneau de plancher');
}
function schemaStair(e){
  const s = 150/e.H, X = 30, Y = 190; let d = `M ${X} ${Y}`; let x = X, y = Y;
  for(let k=0;k<e.n1;k++){ y -= e.hm*s; d += ` L ${x} ${y}`; if(k < e.n1-1){ x += e.g*s; d += ` L ${x} ${y}`; } }
  x += e.pal*s; d += ` L ${x} ${y}`;
  const px = x;
  return SV(Math.max(360, px + 140), 210, `<path d="${d}" fill="none" stroke="#14202E" stroke-width="2"/><line x1="${X}" y1="${Y+e.e*s*2}" x2="${X + (e.n1-1)*e.g*s}" y2="${Y - e.H/2*s + e.e*s*2}" stroke="#C95F18" stroke-width="2"/>
   ${txt(X, 20, `${e.n} marches de ${fm(e.hm*100,1)} cm, giron ${Math.round(e.g*100)} cm (2 volées)`, 'font-weight="700"')}${txt(px + 10, Y - e.H/2*s + 4, 'Palier ' + fm(e.pal) + ' m')}${txt(X, Y + 18, 'Paillasse e = ' + Math.round(e.e*100) + ' cm, HA' + e.bars.d + ' e = ' + Math.round(e.bars.s*100) + ' cm', 'fill="#C95F18"')}`, 'Escalier');
}

/* ---------- plan de situation d'un élément ---------- */
function situ(M, e){
  const PL = A.PLAN, lvl = Math.max(0, e.lvl), lv = M.L[lvl].lv, b = PL.bbox(lv), K = 22, m = .8;
  const W = (b.x1 - b.x0 + 2*m)*K, H = (b.y1 - b.y0 + 2*m)*K, X = v => (v - b.x0 + m)*K, Y = v => (v - b.y0 + m)*K;
  let g = lv.pieces.map(r => `<rect x="${X(r.x)}" y="${Y(r.y)}" width="${r.w*K}" height="${r.h*K}" fill="${r.t==='terrasse'?'#FAF7F0':'#fff'}" stroke="#C9C2B5"/>`).join('');
  g += M.G.ax.x.map(a => `<text x="${X(a.v)}" y="${Y(b.y0)-6}" font-size="9" text-anchor="middle" fill="#5E6B7A">${a.n}</text>`).join('') + M.G.ax.y.map(a => `<text x="${X(b.x0)-8}" y="${Y(a.v)+3}" font-size="9" text-anchor="middle" fill="#5E6B7A">${a.n}</text>`).join('');
  M.posts.forEach(q => g += `<rect x="${X(q.x)-3}" y="${Y(q.y)-3}" width="6" height="6" fill="#9AA5B1"/>`);
  const hl = 'fill="#E8752A" stroke="#C95F18" stroke-width="2"';
  if(e.type === 'poteau' || e.type === 'semelle'){ const x = X(e.x), y = Y(e.y); g += `<circle cx="${x}" cy="${y}" r="11" fill="none" stroke="#E8752A" stroke-width="2.5"/><rect x="${x-4}" y="${y-4}" width="8" height="8" ${hl}/>`; }
  if(e.s){ const s = e.s; g += s.hor ? `<line x1="${X(s.a)}" x2="${X(s.b)}" y1="${Y(s.c)}" y2="${Y(s.c)}" stroke="#E8752A" stroke-width="5" stroke-linecap="round"/>` : `<line y1="${Y(s.a)}" y2="${Y(s.b)}" x1="${X(s.c)}" x2="${X(s.c)}" stroke="#E8752A" stroke-width="5" stroke-linecap="round"/>`; }
  if(e.type === 'dalle') g += `<rect x="${X(e.x)}" y="${Y(e.y)}" width="${e.w*K}" height="${e.h*K}" fill="rgba(232,117,42,.3)" stroke="#E8752A" stroke-width="2"/>`;
  if(e.type === 'escalier') g += `<rect x="${X(e.r.x)}" y="${Y(e.r.y)}" width="${e.r.w*K}" height="${e.r.h*K}" fill="rgba(232,117,42,.3)" stroke="#E8752A" stroke-width="2"/>`;
  if(e.type === 'linteau'){ const o = e.o; g += o.o === 'h' ? `<line x1="${X(o.x)}" x2="${X(o.x+o.w)}" y1="${Y(o.y)}" y2="${Y(o.y)}" stroke="#E8752A" stroke-width="6"/>` : `<line y1="${Y(o.y)}" y2="${Y(o.y+o.w)}" x1="${X(o.x)}" x2="${X(o.x)}" stroke="#E8752A" stroke-width="6"/>`; }
  return `<svg viewBox="-14 -4 ${W+20} ${H+8}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" style="max-width:100%;height:auto" role="img" aria-label="Situation">${g}</svg>`;
}

/* =====================================================================
   FICHES DES ÉLÉMENTS
   ===================================================================== */
const TYPES = {poteau:['Poteau','column'], poutre:['Poutre','beam'], chainage:['Chaînage','beam'], dalle:['Plancher','layers'], semelle:['Semelle isolée','layers'], longrine:['Longrine','brick'], linteau:['Linteau','door'], escalier:['Escalier','steps'], acrotere:['Acrotère','roof'], charpente:['Charpente','roof'], dallage:['Dallage','grid']};
const kv = rows => `<dl class="kv">${rows.filter(Boolean).map(([k,v]) => `<dt>${esc(k)}</dt><dd>${v}</dd>`).join('')}</dl>`;
const ok = b => b ? '<b style="color:var(--ok)">✔ vérifié</b>' : '<b style="color:var(--bad)">✖ à revoir</b>';
const lvName = (M, i) => i < 0 ? 'Fondations' : M.L[i].nom;
const coord = (M, x, y) => `X = ${fm(x)} m · Y = ${fm(y)} m`;
const alt = (M, z) => { const a0 = M.site.alt; return (z >= 0 ? '+' : '') + fm(z) + ' m' + (a0 ? ` (altitude ${fm(a0 + z)} m)` : ''); };
function qtyRows(e){ const q = e.qty || {}; return [['Béton', fm(q.beton||0, 3) + ' m³'], ['Aciers', fm(q.acier||0, 1) + ' kg'], q.coff ? ['Coffrage', fm(q.coff, 2) + ' m²'] : null]; }

function sheet(M, e){
  const t = TYPES[e.type] || ['Élément','grid'];
  let head = [], calc = '', sch = '', notes = '';
  const p = M.p;
  if(e.type === 'poteau'){ const d = e.d;
    head = [['Repère', `<b>${esc(e.post)}</b> (axes ${esc(e.ax.replace(/^([A-Z])/, '$1 / '))})`], ['Niveau', lvName(M, e.lvl)], ['Coordonnées', coord(M, e.x, e.y)], ['Pied / tête', alt(M, e.z) + ' → ' + alt(M, e.z + HN)], ['Section', `${Math.round(d.a*100)} × ${Math.round(d.a*100)} cm`], ['Aciers', `<b>${barTxt(d.bars)}</b> + cadres HA${d.dt} / ${Math.round(d.st*100)} cm`]];
    calc = `## Descente de charges sur ${e.post} (${lvName(M, e.lvl)})
| Provenance | G (kN) | Q (kN) |
|---|---|---|
${e.from.map(f => `| Poutre ${f.id} (réaction) | ${fm(f.G,1)} | ${fm(f.Q,1)} |`).join('\n') || '| (aucune poutre à ce niveau) | 0 | 0 |'}
| Poids propre du poteau ${Math.round(d.a*100)}×${Math.round(d.a*100)} sur ${fm(HN)} m | ${fm(d.pp,1)} | 0 |
| **Cumul avec les niveaux supérieurs** | **${fm(d.NGi,1)}** | **${fm(d.NQ,1)}** |

$$ Nu = 1,35 G + 1,5 Q = 1,35 × ${fm(d.NGi,1)} + 1,5 × ${fm(d.NQ,1)} = ${fm(d.Nu,1)} kN
$$ Nser = G + Q = ${fm(d.Ns,1)} kN

## Vérification au flambement (BAEL)
- Longueur de flambement : lf = 0,7 × l0 = 0,7 × ${fm(HN)} = **${fm(d.lf)} m** (poteau encastré dans les planchers)
- Élancement : λ = 3,46 × lf / a = 3,46 × ${fm(d.lf)} / ${fm(d.a)} = **${fm(d.lam,1)}** (≤ 50 ✔)
- Coefficient : α = 0,85 / (1 + 0,2 (λ/35)²) = **${fm(d.alpha,3)}**
- Section réduite : Br = (a − 2 cm)² = **${fm(d.Br,4)} m²**

$$ A ≥ (Nu/α − Br × fc28/(0,9 × 1,5)) × 1,15/fe = ${fm(Math.max(0,d.Areq),2)} cm²
$$ Amin = max(4 cm²/m × périmètre ; 0,2 % B) = ${fm(d.Amin,2)} cm²

> [!retenir] Ferraillage retenu
> **${barTxt(d.bars)}** = ${fm(d.bars.A,2)} cm² ≥ ${fm(Math.max(d.Areq, d.Amin),2)} cm² ${d.bars.A >= Math.max(d.Areq, d.Amin) ? '✔' : '✖'}
> Cadres **HA${d.dt}** espacés de **${Math.round(d.st*100)} cm** (≤ 15 Ø, ≤ 40 cm, ≤ a + 10 cm), resserrés à 10 cm aux nœuds et dans la zone de recouvrement (${Math.round(50*d.bars.d/10)} cm).

Contrainte de service dans le béton : σ = Nser / (B + 15 A) = **${fm(d.sb,2)} MPa** (≤ 0,6 fc28 = 15 MPa ${d.sb <= 15 ? '✔' : '✖'}).`;
    sch = schemaPost({...e, ext:false});
  }
  if(e.type === 'poutre' || e.type === 'chainage'){ const s = e.s;
    head = [['Repère', `<b>${esc(e.id)}</b>`], ['Position', esc(s.lbl)], ['Niveau', e.type === 'poutre' ? 'Plancher haut du ' + lvName(M, e.lvl) : 'Tête des murs (sous toiture)'], ['Coordonnées', s.hor ? `de (${fm(s.a)} ; ${fm(s.c)}) à (${fm(s.b)} ; ${fm(s.c)})` : `de (${fm(s.c)} ; ${fm(s.a)}) à (${fm(s.c)} ; ${fm(s.b)})`], ['Appuis', `poteaux ${s.pa ? s.pa.id : '?'} et ${s.pb ? s.pb.id : '?'}`], ['Portée', fm(e.L) + ' m (' + (s.pos === 'iso' ? 'travée isolée' : s.pos === 'rive' ? 'travée de rive d\'une poutre continue de ' + s.nspan + ' travées' : 'travée intermédiaire') + ')'], ['Section', `${Math.round(e.b*100)} × ${Math.round(e.h*100)} cm` + (e.type === 'poutre' ? ' (retombée ' + Math.round((e.h - .2)*100) + ' cm sous plancher)' : '')], ['Aciers', `<b>${barTxt(e.bt)}</b> en bas · chapeaux ${barTxt(e.ba)} · cadres HA${e.sv.dt}/${Math.round(e.sv.st*100)}`]];
    calc = `## Charges sur ${esc(e.id)}
${e.src.map(x => '- ' + x).join('\n')}

$$ G = ${fm(e.G)} kN/m    Q = ${fm(e.Q)} kN/m
$$ qu = 1,35 G + 1,5 Q = ${fm(e.qu)} kN/m

## Sollicitations
- Moment isostatique : M0 = qu L² / 8 = ${fm(e.qu)} × ${fm(e.L)}² / 8 = **${fm(e.M0,1)} kN·m**
- Moment en travée : Mt = ${s.pos === 'iso' ? '1,00' : s.pos === 'rive' ? '0,85' : '0,75'} M0 = **${fm(e.Mt,1)} kN·m** · sur appui : Ma = **${fm(e.Ma,1)} kN·m**
- Effort tranchant : Vu = ${s.pos === 'iso' ? '' : '1,1 × '}qu L / 2 = **${fm(e.Vu,1)} kN**

## Armatures longitudinales (ELU)
$$ μ = Mt / (b d² fbu) = ${fm(e.ft.mu,3)}   (d = ${fm(e.ft.d)} m, fbu = 14,17 MPa)
$$ As = Mt / (z × fsu) = ${fm(e.ft.As,2)} cm²   (z = ${fm(e.ft.z,3)} m, fsu = 435 MPa)

- Section minimale : Amin = 0,23 b d ft28/fe = ${fm(e.ft.Amin,2)} cm²
- **Aciers inférieurs : ${barTxt(e.bt)}** (${fm(e.bt.A,2)} cm²) · **chapeaux sur appuis : ${barTxt(e.ba)}** (${fm(e.ba.A,2)} cm² pour ${fm(e.fa.As,2)} cm² nécessaires)

## Effort tranchant et cadres
τu = Vu / (b d) = **${fm(e.sv.tu,2)} MPa** ≤ τlim = ${fm(e.sv.tlim,2)} MPa ${e.sv.ok ? '✔' : '✖'} → cadres **HA${e.sv.dt}** tous les **${Math.round(e.sv.st*100)} cm**.

## Flèche
h / L = ${fm(e.h,2)} / ${fm(e.L,2)} = ${fm(e.h/e.L,3)} ${e.fl ? '≥ 1/16 : la flèche n\'a pas à être calculée ✔' : '< 1/16 : calcul de flèche nécessaire'}`;
    sch = schemaBeam(e);
  }
  if(e.type === 'dalle'){
    head = [['Repère', `<b>${esc(e.id)}</b>`], ['Panneau', esc(e.n)], ['Niveau', 'Plancher haut du ' + lvName(M, e.lvl) + ' (' + alt(M, e.z) + ')'], ['Coordonnées', `de (${fm(e.x)} ; ${fm(e.y)}) à (${fm(e.x+e.w)} ; ${fm(e.y+e.h)})`], ['Dimensions', `${fm(e.w)} × ${fm(e.h)} m (${fm(e.w*e.h)} m²)`], ['Type', e.tremie ? 'Trémie (ouverture pour l\'escalier)' : `Plancher à corps creux <b>${e.hd}</b>`], ['Usage', esc(e.usage)]];
    calc = e.tremie ? `## Trémie d'escalier
Ce panneau reste ouvert pour le passage de l'escalier. Les poutres qui l'entourent (chevêtres) reprennent la paillasse et les paliers : G = ${fm(e.G)} kN/m², Q = ${fm(e.Q)} kN/m².` : `## Choix du plancher
- Petite portée lx = **${fm(e.lx)} m** → plancher **${e.hd}** (portée admissible ${e.hd === '12+4' ? '4,0' : e.hd === '16+4' ? '5,0' : e.hd === '20+4' ? '6,0' : '7,2'} m).
- Les **poutrelles** sont posées dans le sens de la petite portée (parallèles à ${e.dir === 'x' ? 'l\'axe X' : 'l\'axe Y'}), tous les **60 cm** : **${e.npt} poutrelles** de ${fm(e.lx + .1)} m, environ **${e.nent} entrevous**.
- Dalle de compression ${e.hd === '25+5' ? '5' : '4'} cm avec treillis soudé (${fm(e.qty.treillis,1)} m²).

## Charges
| Charge | Valeur |
|---|---|
| Permanente G (plancher, revêtement${e.usage.includes('Toiture') || e.usage.includes('Terrasse') ? ', étanchéité et forme de pente' : ', cloisons'}) | ${fm(e.G)} kN/m² |
| Exploitation Q (${esc(e.usage)}) | ${fm(e.Q)} kN/m² |
| ELU : 1,35 G + 1,5 Q | **${fm(1.35*e.G + 1.5*e.Q)} kN/m²** |

Chaque poutrelle reprend une bande de 0,60 m : qu = ${fm((1.35*e.G + 1.5*e.Q)*.6)} kN/m → Mu = qu lx²/8 = **${fm((1.35*e.G + 1.5*e.Q)*.6*e.lx*e.lx/8)} kN·m** (à comparer au moment admissible donné par le fabricant de poutrelles).`;
    sch = schemaPanel(e);
  }
  if(e.type === 'semelle'){ const sg = e.sig;
    head = [['Repère', `<b>${esc(e.id)}</b> (type ${e.typ})`], ['Sous le poteau', esc(e.post)], ['Coordonnées du centre', coord(M, e.x, e.y)], ['Fond de fouille', alt(M, -M.sol.prof)], ['Dimensions', `${fm(e.B)} × ${fm(e.B)} × ${fm(e.h)} m`], ['Aciers', `<b>${e.bars.n} HA${e.bars.d}</b> e = ${Math.round(e.bars.s*100)} cm dans les 2 sens`]];
    calc = `## Charges au niveau de la fondation
| Provenance | G (kN) | Q (kN) |
|---|---|---|
| Poteau ${esc(e.post)} (tous niveaux) | ${fm(e.NG - e.amorce - e.wallG,1)} | ${fm(e.NQ,1)} |
| Amorce de poteau (${fm(M.sol.prof)} m) | ${fm(e.amorce,1)} | 0 |
${e.longs.map(l => `| Longrine ${l.id} + mur porté (moitié) | ${fm(l.G,1)} | 0 |`).join('\n')}
| **Total** | **${fm(e.NG,1)}** | **${fm(e.NQ,1)}** |

$$ Nser = ${fm(e.Ns,1)} kN    Nu = ${fm(e.Nu,1)} kN

## Surface d'appui (sol : ${esc(M.sol.nature)}, σsol = ${fm(M.sol.sigma,1)} bar = ${fm(sg,0)} kN/m²)
$$ A × B ≥ 1,08 × Nser / σsol = ${fm(e.Ns*1.08/sg,2)} m²  → semelle carrée ${fm(e.B)} × ${fm(e.B)} m

- Hauteur : h ≥ (B − a)/4 + 5 cm = (${fm(e.B)} − ${fm(e.a)})/4 + 0,05 = ${fm((e.B - e.a)/4 + .05)} m → **h = ${Math.round(e.h*100)} cm** (min. 25 cm)
- Contrainte réelle sous la semelle (avec son poids et la terre) : **${fm(e.sreal,0)} kN/m²** ≤ ${fm(sg,0)} ${ok(e.sreal <= sg*1.02)}

## Armatures (méthode des bielles)
$$ As = Nu (B − a) / (8 d fsu) = ${fm(e.As,2)} cm² par sens

→ **${e.bars.n} HA${e.bars.d}** (${fm(e.bars.n*sec(e.bars.d),2)} cm²) espacées de **${Math.round(e.bars.s*100)} cm**, dans les deux directions, avec crochets. Enrobage **5 cm** sur béton de propreté.`;
    sch = schemaSemelle(e);
  }
  if(e.type === 'longrine'){ const s = e.s;
    head = [['Repère', `<b>${esc(e.id)}</b>`], ['Position', esc(s.lbl)], ['Coordonnées', s.hor ? `de (${fm(s.a)} ; ${fm(s.c)}) à (${fm(s.b)} ; ${fm(s.c)})` : `de (${fm(s.c)} ; ${fm(s.a)}) à (${fm(s.c)} ; ${fm(s.b)})`], ['Entre les semelles', `S${s.pa ? s.pa.ax : '?'} et S${s.pb ? s.pb.ax : '?'}`], ['Section', `${Math.round(e.b*100)} × ${Math.round(e.h*100)} cm`], ['Aciers', `<b>${barTxt(e.bars)}</b> en haut et en bas · cadres HA6/${Math.round(e.sv.st*100)}`]];
    calc = `## Charges
- Mur porté (rez-de-chaussée + soubassement en agglos pleins) : **${fm(e.Gm)} kN/m**${e.wall ? '' : ' (pas de mur sur cette ligne)'}
- Poids propre : 25 × ${fm(e.b)} × ${fm(e.h)} = ${fm(e.pp)} kN/m
- qu = 1,35 × ${fm(e.G)} = **${fm(e.qu)} kN/m** sur L = ${fm(e.L)} m

$$ Mt ≈ ${s.pos === 'iso' ? '' : '0,85 × '}qu L²/8 = ${fm(e.Mt,1)} kN·m → As = ${fm(e.f.As,2)} cm²

Retenu : **${barTxt(e.bars)}** en partie basse et la même chose en partie haute (la longrine relie les semelles et peut travailler dans les deux sens). Enrobage 4 à 5 cm, fourreaux pour les réseaux avant coulage.`;
  }
  if(e.type === 'linteau'){ const o = e.o;
    head = [['Repère', `<b>${esc(e.id)}</b>`], ['Niveau', lvName(M, e.lvl) + (e.rep ? ' (' + e.rep + ')' : '')], ['Ouverture', `${e.kind === 'porte' ? 'Porte' : 'Fenêtre'} de ${fm(o.w)} m ${e.ext ? 'en façade' : 'intérieure'} · ${esc(e.rooms.join(' / '))}`], ['Coordonnées', o.o === 'h' ? `de (${fm(o.x)} ; ${fm(o.y)}) à (${fm(o.x+o.w)} ; ${fm(o.y)})` : `de (${fm(o.x)} ; ${fm(o.y)}) à (${fm(o.x)} ; ${fm(o.y+o.w)})`], ['Dessous du linteau', alt(M, e.z)], ['Section × longueur', `${Math.round(e.t*100)} × 20 cm × ${fm(e.L)} m (appuis de 20 cm)`], ['Aciers', `<b>${barTxt(e.bars)}</b> en bas + 2 HA8 en haut, cadres HA6/15`]];
    calc = `Charge du mur au-dessus (triangle de décharge) et poids propre : q = ${fm(e.q)} kN/m → Mu = 1,35 q L²/8 = **${fm(e.Mu,2)} kN·m** → As = ${fm(e.f.As,2)} cm² → **${barTxt(e.bars)}** ${e.f.As <= e.bars.A ? '✔' : '✖'}.`;
  }
  if(e.type === 'escalier'){
    head = [['Repère', `<b>${esc(e.id)}</b>`], ['Liaison', `${lvName(M, e.lvl)} → ${e.top ? 'toiture (édicule)' : lvName(M, e.lvl + 1)}`], ['Cage', `${esc(e.r.n)} : de (${fm(e.r.x)} ; ${fm(e.r.y)}) à (${fm(e.r.x+e.r.w)} ; ${fm(e.r.y+e.r.h)})`], ['Hauteur à franchir', fm(e.H) + ' m'], ['Marches', `${e.n} × ${fm(e.hm*100,1)} cm, giron ${Math.round(e.g*100)} cm`], ['Volées', `2 volées (${e.n1} + ${e.n2} marches), emmarchement ${fm(e.emm)} m, palier ${fm(e.pal)} m`], ['Paillasse', `e = ${Math.round(e.e*100)} cm, HA${e.bars.d} e = ${Math.round(e.bars.s*100)} cm`]];
    calc = `## Confort (Blondel)
$$ 2h + g = 2 × ${fm(e.hm*100,1)} + ${Math.round(e.g*100)} = ${fm(2*e.hm*100 + e.g*100,1)} cm (entre 60 et 64 ✔)

Longueur d'une volée en plan : (${e.n1} − 1) × ${fm(e.g)} = **${fm(e.L1)} m** ; avec le palier : ${fm(e.L1 + e.pal)} m pour ${fm(e.long)} m disponibles ${ok(e.fits)}.

## Paillasse
- Pente : α = ${fm(e.alpha*180/Math.PI,1)}° · portée horizontale ${fm(e.Lh)} m · épaisseur e ≈ L/28 → **${Math.round(e.e*100)} cm**
- G = 25 e / cos α + marches + revêtement = **${fm(e.G)} kN/m²** · Q = ${fm(e.Q)} kN/m² · qu = ${fm(e.qu)} kN/m²
- Mu (bande de 1 m, semi-encastrement 0,85) = **${fm(e.Mu,1)} kN·m** → As = ${fm(e.f.As,2)} cm²/m → **HA${e.bars.d} tous les ${Math.round(e.bars.s*100)} cm** + répartition HA8/20.`;
    sch = schemaStair(e);
  }
  if(e.type === 'acrotere'){
    head = [['Repère', 'AC'], ['Position', 'Pourtour de la toiture-terrasse'], ['Niveau', alt(M, e.z) + ' → ' + alt(M, e.z + e.h)], ['Longueur', fm(e.L, 1) + ' m'], ['Section', `${Math.round(e.e*100)} cm × ${fm(e.h)} m`]];
    calc = `Charge horizontale de main courante Q = 1 kN/m en tête → Mu = 1,5 × 1 × ${fm(e.h)} = **${fm(e.Mu,2)} kN·m/m** (encastrement dans le plancher). As = ${fm(e.f.As,2)} cm²/m → treillis **HA8 e = 20 cm** sur les deux faces (minimum constructif). Joints tous les 8 à 10 m ; relevé d'étanchéité de 15 cm minimum.`;
  }
  if(e.type === 'charpente'){ const T = e.T;
    head = [['Type', `${esc(T.charpente)} · toiture ${esc(T.type)}`], ['Couverture', esc(T.couverture)], ['Pente', `${T.pente}° (${fm(Math.tan(e.ang)*100,0)} %)`], ['Portée des fermes', fm(e.span) + ' m + débords de ' + fm(T.debord) + ' m'], ['Nombre de fermes', `${e.nf} (entraxe ${fm(T.entraxe)} m)`], ['Hauteur au faîtage', fm(e.hf) + ' m au-dessus de l\'arase des murs']];
    calc = `- Longueur du rampant : (${fm(e.span/2)} + ${fm(T.debord)}) / cos ${T.pente}° = **${fm(e.rampant)} m**
- Surface de couverture : **${fm(e.Sc,1)} m²** · ${e.pannes} pannes par versant (tous les 1,10 m environ)
- Charges : couverture + charpente + faux plafond ≈ ${/m[ée]tal/i.test(T.charpente) ? '0,45' : '0,40'} kN/m², entretien 0,40 kN/m² ; elles descendent sur les chaînages des façades longues (voir les chaînages CH-…).`;
  }
  if(e.type === 'dallage'){
    head = [['Repère', 'DL'], ['Niveau', '±0,00 (rez-de-chaussée)'], ['Surface', fm(e.S,1) + ' m²'], ['Épaisseur', Math.round(e.e*100) + ' cm + treillis soudé'], ['Sous-couches', 'Remblai compacté, hérisson 15 cm, film polyane']];
    calc = `Béton dosé à 300 kg/m³ : ${fm(e.S*e.e,2)} m³ ; joints de retrait tous les 25 à 30 m² ; pente de 1 % vers les siphons des pièces d'eau.`;
  }
  return `<div class="row" style="gap:8px;flex-wrap:wrap"><span class="pill p-or">${ic(t[1])}${t[0]}</span><span class="pill p-mute">${esc(lvName(M, e.lvl))}</span><span class="pill p-mute">${esc(p.titre)}</span></div>
   <div class="cols" style="align-items:start"><div class="card" style="padding:14px">${kv(head)}</div><div class="card" style="padding:10px"><b class="small faint mono" style="letter-spacing:.08em">SITUATION</b>${situ(M, e)}</div></div>
   ${sch ? `<div class="card" style="padding:12px;overflow:auto">${sch}</div>` : ''}
   <div class="card">${A.mdHtml(calc)}</div>
   <div class="card" style="padding:14px"><h3 style="font-size:16px">Quantités de cet élément</h3>${kv(qtyRows(e))}${e.nrep > 1 ? `<p class="sub">× ${e.nrep} niveaux identiques.</p>` : ''}</div>`;
}

/* ---------- liste des éléments ---------- */
const FAM = [['poteau','Poteaux'],['poutre','Poutres'],['chainage','Chaînages'],['dalle','Planchers'],['semelle','Semelles'],['longrine','Longrines'],['linteau','Linteaux'],['escalier','Escaliers'],['autres','Toiture et dallage']];
function rowOf(M, e){
  const T = (TYPES[e.type]||['?'])[0];
  if(e.type === 'poteau') return [e.post, lvName(M, e.lvl), `${fm(e.x)} ; ${fm(e.y)}`, `${Math.round(e.d.a*100)}×${Math.round(e.d.a*100)}`, `${barTxt(e.d.bars)} · HA${e.d.dt}/${Math.round(e.d.st*100)}`, fm(e.d.Nu,0) + ' kN'];
  if(e.type === 'poutre' || e.type === 'chainage') return [e.id, lvName(M, e.lvl), e.s.lbl, `${Math.round(e.b*100)}×${Math.round(e.h*100)} · L ${fm(e.L)}`, `${barTxt(e.bt)} + ${barTxt(e.ba)}`, fm(e.Mt,1) + ' kN·m'];
  if(e.type === 'dalle') return [e.id, lvName(M, e.lvl), e.n, `${fm(e.w)}×${fm(e.h)}`, e.tremie ? 'Trémie' : e.hd + ' · ' + e.npt + ' poutrelles', fm(e.G) + ' + ' + fm(e.Q)];
  if(e.type === 'semelle') return [e.id, 'Fondations', `${fm(e.x)} ; ${fm(e.y)}`, `${e.typ} : ${fm(e.B)}×${fm(e.B)}×${fm(e.h)}`, `${e.bars.n} HA${e.bars.d}/${Math.round(e.bars.s*100)}`, fm(e.Ns,0) + ' kN'];
  if(e.type === 'longrine') return [e.id, 'Fondations', e.s.lbl, `${Math.round(e.b*100)}×${Math.round(e.h*100)} · L ${fm(e.L)}`, barTxt(e.bars) + ' ×2', fm(e.G) + ' kN/m'];
  if(e.type === 'linteau') return [e.id, lvName(M, e.lvl), (e.kind === 'porte' ? 'Porte ' : 'Fenêtre ') + fm(e.o.w) + ' · ' + e.rooms.join('/'), `${Math.round(e.t*100)}×20 · L ${fm(e.L)}`, barTxt(e.bars), ''];
  if(e.type === 'escalier') return [e.id, lvName(M, e.lvl), e.r.n, `${e.n} marches`, 'HA' + e.bars.d + '/' + Math.round(e.bars.s*100), ''];
  return [e.id, lvName(M, e.lvl), T, e.L ? fm(e.L,1) + ' m' : e.S ? fm(e.S,1) + ' m²' : '', '', ''];
}
const famOf = e => ['acrotere','charpente','dallage'].includes(e.type) ? 'autres' : e.type;
let fam = 'poteau', famLv = 'all';
function listHtml(p){
  const M = model(p);
  const counts = {}; M.all.forEach(e => counts[famOf(e)] = (counts[famOf(e)] || 0) + 1);
  const fams = FAM.filter(f => counts[f[0]]); if(!counts[fam]) fam = fams[0][0];
  const L = M.all.filter(e => famOf(e) === fam);
  const lvs = [...new Set(L.map(e => e.lvl))];
  if(famLv !== 'all' && !lvs.includes(+famLv)) famLv = 'all';
  const rows = L.filter(e => famLv === 'all' || e.lvl === +famLv);
  const heads = {poteau:['Repère','Niveau','X ; Y (m)','Section (cm)','Aciers','Nu'], poutre:['Repère','Niveau','Position','Section · portée','Aciers','Mt'], chainage:['Repère','Niveau','Position','Section · portée','Aciers','Mt'], dalle:['Repère','Niveau','Panneau','Dimensions (m)','Type','G + Q (kN/m²)'], semelle:['Repère','Niveau','X ; Y (m)','Type et dimensions (m)','Aciers (2 sens)','Nser'], longrine:['Repère','Niveau','Position','Section · longueur','Aciers','Charge'], linteau:['Repère','Niveau','Ouverture','Section · longueur','Aciers',''], escalier:['Repère','Niveau','Cage','Marches','Paillasse',''], autres:['Repère','Niveau','Élément','Quantité','','']}[fam];
  return `<div class="tabs" style="flex-wrap:wrap">${fams.map(f => `<button class="tab ${fam===f[0]?'on':''}" data-pfam="${f[0]}">${f[1]} <span class="cnt">${counts[f[0]]}</span></button>`).join('')}</div>
   ${lvs.length > 1 ? `<div class="row" style="gap:6px;flex-wrap:wrap;margin:8px 0"><button class="btn b-sm ${famLv==='all'?'b-dark':'b-line'}" data-pflv="all">Tous</button>${lvs.map(i => `<button class="btn b-sm ${String(famLv)===String(i)?'b-dark':'b-line'}" data-pflv="${i}">${esc(i < 0 ? 'Fondations' : M.L[i].court)}</button>`).join('')}</div>` : ''}
   <div class="tw"><table class="t click"><thead><tr>${heads.map((h,k) => `<th class="${k===5?'r':''}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(e => `<tr data-pel="${esc(e.id)}" tabindex="0">${rowOf(M, e).map((c,k) => `<td class="${k===0?'mono':''}${k===5?' r':''}">${k===0?'<b>'+esc(c)+'</b>':esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
   <p class="sub">${rows.length} élément(s). Touchez une ligne (ou un élément sur les plans de structure et de fondations) pour ouvrir sa fiche : coordonnées, charges, calcul et ferraillage.</p>`;
}
let curP = null;
function openEl(p, id){
  const M = model(p), e = M.byId(id); if(!e) return A.toast('Élément introuvable', 'x');
  const T = TYPES[e.type] || ['Élément'];
  A.win({title:`${T[0]} ${e.post || e.id}${e.type === 'poteau' ? ' · ' + M.L[e.lvl].court : ''}`, wide:true, body:sheet(M, e),
    foot:`<span class="sub" style="margin-right:auto">Calcul simplifié (BAEL 91), à faire valider par un bureau d'études.</span>${e.type === 'poteau' ? M.postEls.filter(x => x.post === e.post).map(x => `<button class="btn b-sm ${x.id===e.id?'b-dark':'b-line'}" data-pel="${esc(x.id)}">${esc(M.L[x.lvl].court)}</button>`).join('') : ''}<button class="btn b-line" data-act="closewin">Fermer</button>`});
}
A.on('click', '[data-pfam]', el => { fam = el.dataset.pfam; famLv = 'all'; A.refresh(); });
A.on('click', '[data-pflv]', el => { famLv = el.dataset.pflv; A.refresh(); });
A.on('click', '[data-pel]', el => { if(curP) openEl(curP, el.dataset.pel); });
document.addEventListener('keydown', e => { if(e.key === 'Enter' && e.target && e.target.dataset && e.target.dataset.pel && curP) openEl(curP, e.target.dataset.pel); });

A.PRJ = {model, listHtml, openEl, sheet, setCurrent:p => { if(curP !== p){ fam = 'poteau'; famLv = 'all'; } curP = p; }, HN, fm, sec, kgm, barTxt, flex};
})();
