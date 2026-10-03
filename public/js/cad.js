/* =====================================================================
   ATELIER DE DESSIN (DAO) — inspiré d'AutoCAD
   Coordonnées en mètres, Y vers le haut. Commandes au clavier :
   LIGNE (L) MUR (MU) POLYLIGNE (PL) RECTANGLE (REC) CERCLE (C) PIECE (PI)
   PORTE (PO) FENETRE (FE) COTE (COT) TEXTE (T) EFFACER (E) DEPLACER (D)
   COPIER (CO) ROTATION (RO) MIROIR (MI) ANNULER (U) RETABLIR (R)
   ZOOM (Z / ZE) ORTHO (O, F8) ACCROCHAGE (ACC, F3) GRILLE (G, F7)
   EPAISSEUR (EP) HAUTEUR (HT) METRE (MT) ENREGISTRER (ENR) AIDE (?)
   Saisie des points : x,y  ·  @dx,dy  ·  @d<angle  ·  d (distance directe)
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S} = A;
const BG = '#0B1524';
const LAYERS = () => [
  {id:'murs', n:'Murs', c:'#D5DEE9', v:true}, {id:'ouv', n:'Ouvertures', c:'#FAD98D', v:true},
  {id:'pieces', n:'Pièces', c:'#6EE7B7', v:true}, {id:'cotes', n:'Cotations', c:'#7FB2FF', v:true},
  {id:'textes', n:'Textes', c:'#FFFFFF', v:true}, {id:'axes', n:'Axes', c:'#F87171', v:true},
  {id:'mobilier', n:'Mobilier', c:'#C4B5FD', v:true}, {id:'dessin', n:'Dessin', c:'#E8752A', v:true},
  {id:'structure', n:'Structure (dalles, poteaux, poutres)', c:'#9DB4CC', v:true}, {id:'toiture', n:'Toiture', c:'#F59E8B', v:true}, {id:'volumes', n:'Volumes 3D', c:'#A7F3D0', v:true}
];
const ensureLayers = d => { LAYERS().forEach(l => { if(!d.layers.find(x => x.id === l.id)) d.layers.push(l); }); };
const belongs = e => { const z = e.z ?? 0; return z >= C.lvz - .05 && z < C.lvz + C.ht + .15; };
const AUTO = {wall:'murs', door:'ouv', win:'ouv', dim:'cotes', text:'textes', room:'pieces', box:'volumes', cyl:'volumes', slab:'structure', post:'structure', beam:'structure', roof:'toiture', stair:'structure'};
let C = null;          // état du dessin courant
let vw = 0, vh = 0;    // taille du canevas en pixels
const fresh = (name) => ({id:null, name:name || 'Plan sans nom', ents:[], layers:LAYERS(), cur:'dessin', auto:true,
  view:{ox:120, oy:520, s:40}, ortho:true, snap:true, osnap:true, grid:0.1, showGrid:true, ep:0.20, ht:2.80, th:0.25, lvz:0, pa:0.20, vmode:'plan', r3d:{mode:'reel', hour:15},
  tool:'select', cmd:null, last:null, lastCmd:null, sel:new Set(), hist:[], fut:[], mouse:{x:0, y:0, sx:0, sy:0}, snapPt:null, dirty:false, log:[]});

/* ---------- outils géométriques ---------- */
const dist = (a, b) => Math.hypot(b[0]-a[0], b[1]-a[1]);
const r3 = v => Math.round(v*1000)/1000;
const fm = v => F(v, 2);
function segDist(p, a, b){ const dx = b[0]-a[0], dy = b[1]-a[1], L2 = dx*dx+dy*dy; let t = L2 ? ((p[0]-a[0])*dx + (p[1]-a[1])*dy)/L2 : 0; t = Math.max(0, Math.min(1, t)); return Math.hypot(p[0]-(a[0]+t*dx), p[1]-(a[1]+t*dy)); }
const polyArea = pts => Math.abs(pts.reduce((a,p,i) => { const q = pts[(i+1)%pts.length]; return a + p[0]*q[1] - q[0]*p[1]; }, 0))/2;
const polyPer = pts => pts.reduce((a,p,i) => a + dist(p, pts[(i+1)%pts.length]), 0);
const centroid = pts => [pts.reduce((a,p)=>a+p[0],0)/pts.length, pts.reduce((a,p)=>a+p[1],0)/pts.length];
const rectPts = (a, b) => [[a[0],a[1]],[b[0],a[1]],[b[0],b[1]],[a[0],b[1]]];
function entPts(e){
  switch(e.t){
    case 'line': case 'wall': case 'door': case 'win': case 'dim': case 'beam': return [[e.x1,e.y1],[e.x2,e.y2]];
    case 'rect': case 'box': case 'stair': return rectPts([e.x1,e.y1],[e.x2,e.y2]);
    case 'roof': return roofFoot(e);
    case 'circle': case 'cyl': return [[e.cx-e.r,e.cy-e.r],[e.cx+e.r,e.cy+e.r]];
    case 'post': return [[e.cx-e.a/2,e.cy-e.a/2],[e.cx+e.a/2,e.cy+e.a/2]];
    case 'slab': return e.pts;
    case 'text': return [[e.x,e.y],[e.x + e.s*.6*String(e.txt).length, e.y + e.s]];
    case 'room': case 'poly': return e.pts;
  }
  return [];
}
function bboxOf(list){
  const P = list.flatMap(entPts); if(!P.length) return null;
  return {x0:Math.min(...P.map(p=>p[0])), y0:Math.min(...P.map(p=>p[1])), x1:Math.max(...P.map(p=>p[0])), y1:Math.max(...P.map(p=>p[1]))};
}
function transform(e, fn){ // fn([x,y]) -> [x,y]
  const o = JSON.parse(JSON.stringify(e));
  if(o.t === 'roof' && !o.pts){ o.pts = rectPts([o.x1,o.y1],[o.x2,o.y2]); delete o.x1; delete o.y1; delete o.x2; delete o.y2; }
  const T2 = (kx, ky) => { const p = fn([o[kx], o[ky]]); o[kx] = r3(p[0]); o[ky] = r3(p[1]); };
  if('x1' in o){ T2('x1','y1'); T2('x2','y2'); }
  if(o.t === 'circle' || o.t === 'cyl' || o.t === 'post') T2('cx','cy');
  if(o.t === 'text') T2('x','y');
  if(o.pts) o.pts = o.pts.map(p => fn(p).map(r3));
  return o;
}
function hit(e, p, tol){
  switch(e.t){
    case 'line': case 'door': case 'win': return segDist(p, [e.x1,e.y1], [e.x2,e.y2]) <= tol + (e.ep||0)/2;
    case 'wall': return segDist(p, [e.x1,e.y1], [e.x2,e.y2]) <= tol + e.ep/2;
    case 'dim': { const n = normal(e), o = e.off||0; return segDist(p, [e.x1+n[0]*o, e.y1+n[1]*o], [e.x2+n[0]*o, e.y2+n[1]*o]) <= tol*1.5; }
    case 'rect': { const P = rectPts([e.x1,e.y1],[e.x2,e.y2]); return P.some((a,i)=>segDist(p, a, P[(i+1)%4]) <= tol); }
    case 'box': case 'stair': { const P = rectPts([e.x1,e.y1],[e.x2,e.y2]); return inside(p, P) || P.some((a,i)=>segDist(p, a, P[(i+1)%4]) <= tol); }
    case 'roof': { const P = roofGeo(e).eaves; return inside(p, P) || P.some((a,i)=>segDist(p, a, P[(i+1)%P.length]) <= tol); }
    case 'circle': return Math.abs(Math.hypot(p[0]-e.cx, p[1]-e.cy) - e.r) <= tol;
    case 'cyl': return Math.hypot(p[0]-e.cx, p[1]-e.cy) <= e.r + tol;
    case 'post': return Math.abs(p[0]-e.cx) <= e.a/2 + tol && Math.abs(p[1]-e.cy) <= e.a/2 + tol;
    case 'beam': return segDist(p, [e.x1,e.y1], [e.x2,e.y2]) <= tol + (e.b||.2)/2;
    case 'slab': return inside(p, e.pts) || e.pts.some((a,i)=>segDist(p, a, e.pts[(i+1)%e.pts.length]) <= tol);
    case 'text': { const b = bboxOf([e]); return p[0] >= b.x0-tol && p[0] <= b.x1+tol && p[1] >= b.y0-tol && p[1] <= b.y1+tol; }
    case 'room': return inside(p, e.pts) || e.pts.some((a,i)=>segDist(p, a, e.pts[(i+1)%e.pts.length]) <= tol);
    case 'poly': return e.pts.some((a,i)=> (i < e.pts.length-1 || e.closed) && segDist(p, a, e.pts[(i+1)%e.pts.length]) <= tol);
  }
  return false;
}
function inside(p, pts){ let c = false; for(let i=0, j=pts.length-1; i<pts.length; j=i++){ const a = pts[i], b = pts[j]; if(((a[1] > p[1]) !== (b[1] > p[1])) && (p[0] < (b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1]) + a[0])) c = !c; } return c; }
function normal(e){ const dx = e.x2-e.x1, dy = e.y2-e.y1, L = Math.hypot(dx, dy) || 1; return [-dy/L, dx/L]; }

/* ---------- toitures : géométrie adaptée au contour du bâtiment ----------
   Une toiture est un polygone (contour des murs, d'une pièce, d'une sélection ou tracé point par point).
   4 pans : enveloppe des croupes posées sur les rectangles maximaux du contour (toiture à pentes égales exacte
   pour les plans orthogonaux : L, T, U, en croix…). 2 pans : corps principal + ailes dont le faîtage vient
   rejoindre celui du corps principal. 1 pan et terrasse : plan incliné ou dalle sur le contour exact. */
const roofFoot = e => e.pts && e.pts.length >= 3 ? e.pts : rectPts([e.x1,e.y1],[e.x2,e.y2]);
const sArea = P => P.reduce((a,p,i) => { const q = P[(i+1)%P.length]; return a + p[0]*q[1] - q[0]*p[1]; }, 0)/2;
const ccwPoly = P => sArea(P) < 0 ? P.slice().reverse() : P.slice();
function cleanPoly(P){
  let Q = P.filter((p,i) => dist(p, P[(i+1)%P.length]) > 1e-4), k = 0;
  while(Q.length > 3 && k < Q.length){ const a = Q[(k-1+Q.length)%Q.length], b = Q[k], c = Q[(k+1)%Q.length]; if(segDist(b, a, c) < 2e-3){ Q.splice(k, 1); k = 0; } else k++; }
  return Q;
}
function offsetPoly(P, d){ // décalage à angles vifs d'un polygone CCW (d > 0 vers l'extérieur)
  if(!d) return P.map(p => p.slice());
  const n = P.length, L = P.map((a, i) => { const b = P[(i+1)%n], l = dist(a, b) || 1; return {p:[a[0] + (b[1]-a[1])/l*d, a[1] - (b[0]-a[0])/l*d], d:[(b[0]-a[0])/l, (b[1]-a[1])/l]}; });
  return P.map((_, i) => { const A1 = L[(i-1+n)%n], A2 = L[i], den = A1.d[0]*A2.d[1] - A1.d[1]*A2.d[0];
    if(Math.abs(den) < 1e-9) return A2.p.slice();
    const t = ((A2.p[0]-A1.p[0])*A2.d[1] - (A2.p[1]-A1.p[1])*A2.d[0])/den; return [A1.p[0] + A1.d[0]*t, A1.p[1] + A1.d[1]*t]; });
}
function frameOf(P){ // repère du bâtiment : axe du plus long côté
  let b = null; P.forEach((p, i) => { const q = P[(i+1)%P.length], l = dist(p, q); if(!b || l > b.l) b = {l, a:Math.atan2(q[1]-p[1], q[0]-p[0])}; });
  const q = Math.PI/2, th = ((b.a % q) + q) % q, c = Math.cos(th), s = Math.sin(th);
  return {th, L:p => [p[0]*c + p[1]*s, -p[0]*s + p[1]*c], W:p => [p[0]*c - p[1]*s, p[0]*s + p[1]*c]};
}
const isOrtho = P => P.every((p, i) => { const q = P[(i+1)%P.length]; return Math.abs(p[0]-q[0]) < 2e-3 || Math.abs(p[1]-q[1]) < 2e-3; });
/* contour extérieur d'un ensemble de murs (segments épais) et/ou de polygones, par une grille fine */
function rasterOutline(segs, polys, opt={}){
  const pts = segs.flatMap(s => [s.a, s.b]).concat(polys.flat()); if(pts.length < 2) return null;
  const pad = Math.max(0, ...segs.map(s => s.r)) + .3;
  let x0 = Math.min(...pts.map(p => p[0])) - pad, y0 = Math.min(...pts.map(p => p[1])) - pad;
  const x1 = Math.max(...pts.map(p => p[0])) + pad, y1 = Math.max(...pts.map(p => p[1])) + pad;
  let h = opt.h || .05; if((x1-x0)*(y1-y0)/(h*h) > 1.2e6) h = Math.sqrt((x1-x0)*(y1-y0)/1.2e6);
  const nx = Math.ceil((x1-x0)/h) + 2, ny = Math.ceil((y1-y0)/h) + 2, G = new Uint8Array(nx*ny);
  x0 -= h; y0 -= h;
  const cx = i => x0 + (i + .5)*h, cy = j => y0 + (j + .5)*h;
  segs.forEach(s => { const l = dist(s.a, s.b); if(l < 1e-6) return; const u = [(s.b[0]-s.a[0])/l, (s.b[1]-s.a[1])/l], r = s.r + h*.6;
    const i0 = Math.max(0, Math.floor((Math.min(s.a[0], s.b[0]) - r - x0)/h)), i1 = Math.min(nx-1, Math.ceil((Math.max(s.a[0], s.b[0]) + r - x0)/h));
    const j0 = Math.max(0, Math.floor((Math.min(s.a[1], s.b[1]) - r - y0)/h)), j1 = Math.min(ny-1, Math.ceil((Math.max(s.a[1], s.b[1]) + r - y0)/h));
    for(let j=j0;j<=j1;j++) for(let i=i0;i<=i1;i++){ const dx = cx(i) - s.a[0], dy = cy(j) - s.a[1], t = dx*u[0] + dy*u[1], n = Math.abs(-dx*u[1] + dy*u[0]); if(t >= -s.r - h*.6 && t <= l + s.r + h*.6 && n <= r) G[j*nx+i] = 1; } });
  polys.forEach(P => { const xs = P.map(p => p[0]), ys = P.map(p => p[1]);
    const i0 = Math.max(0, Math.floor((Math.min(...xs) - x0)/h)), i1 = Math.min(nx-1, Math.ceil((Math.max(...xs) - x0)/h)), j0 = Math.max(0, Math.floor((Math.min(...ys) - y0)/h)), j1 = Math.min(ny-1, Math.ceil((Math.max(...ys) - y0)/h));
    for(let j=j0;j<=j1;j++) for(let i=i0;i<=i1;i++) if(inside([cx(i), cy(j)], P)) G[j*nx+i] = 1; });
  // extérieur : remplissage depuis le bord ; l'emprise = tout ce qui n'est pas extérieur (murs + intérieur)
  const st = [0]; G[0] = 2;
  while(st.length){ const k = st.pop(), i = k % nx, j = (k - i)/nx; [[i-1,j],[i+1,j],[i,j-1],[i,j+1]].forEach(([a, b]) => { if(a >= 0 && b >= 0 && a < nx && b < ny && !G[b*nx+a]){ G[b*nx+a] = 2; st.push(b*nx+a); } }); }
  const full = (i, j) => i >= 0 && j >= 0 && i < nx && j < ny && G[j*nx+i] !== 2;
  const next = new Map(), key = (i, j) => i + ',' + j, add = (a, b) => { const k = key(a[0], a[1]); if(!next.has(k)) next.set(k, []); next.get(k).push(b); };
  for(let j=0;j<ny;j++) for(let i=0;i<nx;i++){ if(!full(i, j)) continue;
    if(!full(i, j-1)) add([i,j],[i+1,j]); if(!full(i+1, j)) add([i+1,j],[i+1,j+1]); if(!full(i, j+1)) add([i+1,j+1],[i,j+1]); if(!full(i-1, j)) add([i,j+1],[i,j]); }
  const loops = [];
  while(next.size){ const [k0] = next.keys(); let cur = k0.split(',').map(Number), loop = [], guard = 0;
    while(guard++ < 2e6){ const k = key(cur[0], cur[1]), L = next.get(k); if(!L) break; const nx2 = L.pop(); if(!L.length) next.delete(k); loop.push(cur); cur = nx2; if(key(cur[0], cur[1]) === k0) break; }
    if(loop.length >= 4) loops.push(loop); }
  if(!loops.length) return null;
  let P = loops.map(l => l.map(([i, j]) => [x0 + i*h, y0 + j*h])).sort((a, b) => sArea(b) - sArea(a))[0];
  P = cleanPoly(P);
  if(opt.ortho) return P;
  P = cleanPoly(dpClosed(P, h*1.5));
  // recalage des côtés sur les nus extérieurs des murs (ou les sommets des polygones)
  const cands = {x:[], y:[]};
  segs.forEach(s => { if(Math.abs(s.a[0]-s.b[0]) < 1e-3){ cands.x.push(s.a[0]-s.r, s.a[0]+s.r); cands.y.push(Math.min(s.a[1],s.b[1])-s.r, Math.max(s.a[1],s.b[1])+s.r); } if(Math.abs(s.a[1]-s.b[1]) < 1e-3){ cands.y.push(s.a[1]-s.r, s.a[1]+s.r); cands.x.push(Math.min(s.a[0],s.b[0])-s.r, Math.max(s.a[0],s.b[0])+s.r); } });
  polys.flat().forEach(p => { cands.x.push(p[0]); cands.y.push(p[1]); });
  const snapV = (v, L) => { let b = v, bd = h*2.2; L.forEach(c => { const d = Math.abs(c - v); if(d < bd){ bd = d; b = c; } }); return b; };
  const n = P.length, Q = P.map(p => p.slice());
  for(let i=0;i<n;i++){ const a = P[i], b = P[(i+1)%n];
    if(Math.abs(a[1]-b[1]) < 1e-6){ const y = snapV(a[1], cands.y); Q[i][1] = y; Q[(i+1)%n][1] = y; }
    else if(Math.abs(a[0]-b[0]) < 1e-6){ const x = snapV(a[0], cands.x); Q[i][0] = x; Q[(i+1)%n][0] = x; } }
  P = cleanPoly(Q);
  // côtés en biais : recalés sur le nu des murs parallèles, puis sommets recalculés à l'intersection des côtés
  const Lns = P.map((a, i) => { const b = P[(i+1)%P.length], l = dist(a, b) || 1, u = [(b[0]-a[0])/l, (b[1]-a[1])/l]; return {p:a.slice(), u, l, ax:Math.abs(u[0]) < 1e-6 || Math.abs(u[1]) < 1e-6}; });
  Lns.forEach(L => { if(L.ax) return; const m = [L.p[0] + L.u[0]*L.l/2, L.p[1] + L.u[1]*L.l/2]; let best = null;
    segs.forEach(sg => { const l = dist(sg.a, sg.b); if(l < .2) return; const v = [(sg.b[0]-sg.a[0])/l, (sg.b[1]-sg.a[1])/l]; if(Math.abs(v[0]*L.u[1] - v[1]*L.u[0]) > .06) return;
      const n = [-v[1], v[0]]; [1, -1].forEach(k => { const q = [sg.a[0] + n[0]*sg.r*k, sg.a[1] + n[1]*sg.r*k], d2 = Math.abs((m[0]-q[0])*n[0] + (m[1]-q[1])*n[1]); if(d2 < h*3 && (!best || d2 < best.d)) best = {d:d2, p:q, u:v}; }); });
    if(best){ L.p = best.p; L.u = best.u; L.fit = true; } });
  const keep = Lns.filter((L, i) => { if(L.l >= h*3 && (L.ax || L.fit || L.l >= h*10)) return true; const A1 = Lns[(i-1+Lns.length)%Lns.length], A2 = Lns[(i+1)%Lns.length]; return Math.abs(A1.u[0]*A2.u[1] - A1.u[1]*A2.u[0]) < .2; });
  if(keep.length >= 3 && keep.length < Lns.length || Lns.some(L => !L.ax)){
    const V = keep.map((A2, i) => { const A1 = keep[(i-1+keep.length)%keep.length], den = A1.u[0]*A2.u[1] - A1.u[1]*A2.u[0];
      if(Math.abs(den) < 1e-6) return A2.p.slice(); const t = ((A2.p[0]-A1.p[0])*A2.u[1] - (A2.p[1]-A1.p[1])*A2.u[0])/den; return [A1.p[0] + A1.u[0]*t, A1.p[1] + A1.u[1]*t]; });
    if(V.length >= 3 && Math.abs(polyArea(V) - polyArea(P)) < polyArea(P)*.05) P = cleanPoly(V);
  }
  return P;
}
function dpClosed(P, tol){
  const dp = (pts) => { if(pts.length < 3) return pts; let k = 0, dm = 0; for(let i=1;i<pts.length-1;i++){ const d = segDist(pts[i], pts[0], pts[pts.length-1]); if(d > dm){ dm = d; k = i; } }
    return dm > tol ? dp(pts.slice(0, k+1)).slice(0, -1).concat(dp(pts.slice(k))) : [pts[0], pts[pts.length-1]]; };
  let k0 = 0; P.forEach((p, i) => { if(p[0] < P[k0][0] - 1e-9 || (Math.abs(p[0] - P[k0][0]) < 1e-9 && p[1] < P[k0][1])) k0 = i; });
  P = P.slice(k0).concat(P.slice(0, k0));
  let far = 0, fd = 0; P.forEach((p, i) => { const d = dist(p, P[0]); if(d > fd){ fd = d; far = i; } });
  const A1 = dp(P.slice(0, far+1)), A2 = dp(P.slice(far).concat([P[0]]));
  return A1.slice(0, -1).concat(A2.slice(0, -1));
}
/* rectangles maximaux d'un polygone orthogonal (repère local) */
function maxRects(P){
  const U = a => [...new Set(a.map(v => Math.round(v*1e4)/1e4))].sort((x, y) => x - y);
  const xs = U(P.map(p => p[0])), ys = U(P.map(p => p[1])), nx = xs.length - 1, ny = ys.length - 1;
  if(nx < 1 || ny < 1 || nx*ny > 6400) return [];
  const S = new Int32Array((nx+1)*(ny+1)), at = (i, j) => S[j*(nx+1)+i];
  for(let j=0;j<ny;j++) for(let i=0;i<nx;i++) S[(j+1)*(nx+1)+i+1] = (inside([(xs[i]+xs[i+1])/2, (ys[j]+ys[j+1])/2], P) ? 1 : 0) + at(i+1, j) + at(i, j+1) - at(i, j);
  const full = (i0, i1, j0, j1) => at(i1, j1) - at(i0, j1) - at(i1, j0) + at(i0, j0) === (i1-i0)*(j1-j0);
  const out = [];
  for(let i0=0;i0<nx;i0++) for(let j0=0;j0<ny;j0++){ if(!full(i0, i0+1, j0, j0+1)) continue;
    for(let i1=i0+1; i1<=nx && full(i0, i1, j0, j0+1); i1++) for(let j1=j0+1; j1<=ny && full(i0, i1, j0, j1); j1++){
      if((i0 && full(i0-1, i0, j0, j1)) || (i1 < nx && full(i1, i1+1, j0, j1)) || (j0 && full(i0, i1, j0-1, j0)) || (j1 < ny && full(i0, i1, j1, j1+1))) continue;
      out.push({x0:xs[i0], x1:xs[i1], y0:ys[j0], y1:ys[j1]}); } }
  return out.sort((a, b) => (b.x1-b.x0)*(b.y1-b.y0) - (a.x1-a.x0)*(a.y1-a.y0));
}
/* 2 pans : corps principal puis ailes ; une aile perpendiculaire prolonge son faîtage jusqu'à celui du corps qu'elle rejoint */
function gablePieces(R, sens){
  const area = r => (r.x1-r.x0)*(r.y1-r.y0), long = r => (r.x1-r.x0) >= (r.y1-r.y0) ? 'x' : 'y', E = 1e-6;
  const sub = (F, Q) => { if(F.x1 <= Q.x0+E || F.x0 >= Q.x1-E || F.y1 <= Q.y0+E || F.y0 >= Q.y1-E) return [F]; const o = [];
    if(F.x0 < Q.x0-E) o.push({...F, x1:Q.x0}); if(F.x1 > Q.x1+E) o.push({...F, x0:Q.x1});
    const mx0 = Math.max(F.x0, Q.x0), mx1 = Math.min(F.x1, Q.x1);
    if(F.y0 < Q.y0-E) o.push({x0:mx0, x1:mx1, y0:F.y0, y1:Q.y0}); if(F.y1 > Q.y1+E) o.push({x0:mx0, x1:mx1, y0:Q.y1, y1:F.y1}); return o; };
  const ov = (a0, a1, b0, b1) => Math.min(a1, b1) - Math.max(a0, b0);
  const contact = (F, Q) => { const c = [];
    if(Math.abs(F.x1-Q.x0) < 1e-4) c.push({side:'x1', len:ov(F.y0, F.y1, Q.y0, Q.y1), inQ:F.y0 >= Q.y0-1e-4 && F.y1 <= Q.y1+1e-4});
    if(Math.abs(F.x0-Q.x1) < 1e-4) c.push({side:'x0', len:ov(F.y0, F.y1, Q.y0, Q.y1), inQ:F.y0 >= Q.y0-1e-4 && F.y1 <= Q.y1+1e-4});
    if(Math.abs(F.y1-Q.y0) < 1e-4) c.push({side:'y1', len:ov(F.x0, F.x1, Q.x0, Q.x1), inQ:F.x0 >= Q.x0-1e-4 && F.x1 <= Q.x1+1e-4});
    if(Math.abs(F.y0-Q.y1) < 1e-4) c.push({side:'y0', len:ov(F.x0, F.x1, Q.x0, Q.x1), inQ:F.x0 >= Q.x0-1e-4 && F.x1 <= Q.x1+1e-4});
    return c.filter(x => x.len > 1e-3).sort((a, b) => b.len - a.len)[0]; };
  const main = R[0], placed = [{...main, k:'gable', dir:(sens === 'x' || sens === 'y') ? sens : long(main)}];
  R.slice(1).forEach(r => {
    let free = [r]; placed.forEach(Q => { free = free.flatMap(F => sub(F, Q)); });
    free.filter(F => area(F) > 1e-3).sort((a, b) => area(b) - area(a)).forEach(F => {
      let best = null; placed.forEach(Q => { const c = contact(F, Q); if(c && (!best || c.len > best.len)) best = {...c, Q}; });
      if(!best){ placed.push({...F, k:'gable', dir:long(F)}); return; }
      const Q = best.Q, perp = best.side[0], width = perp === 'x' ? F.y1 - F.y0 : F.x1 - F.x0, hostW = Q.dir === 'x' ? Q.y1 - Q.y0 : Q.x1 - Q.x0;
      if(Q.dir !== perp && best.inQ && width <= hostW + 1e-4){ const G = {...F, k:'gable', dir:perp}, mid = perp === 'x' ? (Q.x0+Q.x1)/2 : (Q.y0+Q.y1)/2; G[best.side] = mid; placed.push(G); }
      else placed.push({...F, k:'gable', dir:Q.dir === perp ? perp : long(F)});
    });
  });
  return placed;
}
function pieceH(P, u, v, s){
  if(u < P.x0 - 1e-6 || u > P.x1 + 1e-6 || v < P.y0 - 1e-6 || v > P.y1 + 1e-6) return -Infinity;
  if(P.k === 'hip') return s*Math.min(u - P.x0, P.x1 - u, v - P.y0, P.y1 - v);
  return P.dir === 'x' ? s*Math.min(v - P.y0, P.y1 - v) : s*Math.min(u - P.x0, P.x1 - u);
}
function pieceFaces(P, s){ // pans plans : z = a u + b v + c sur un polygone convexe (sens trigonométrique)
  const {x0, x1, y0, y1} = P, w = x1 - x0, h = y1 - y0, F = [], add = (poly, a, b, c) => F.push({poly, pl:[a, b, c], P});
  const S = () => add([[x0,y0],[x1,y0],[x1,y1],[x0,y1]], 0, 0, 0);
  if(P.k === 'hip'){
    if(w >= h){ const m = h/2, ym = (y0+y1)/2;
      add([[x0,y0],[x1,y0],[x1-m,ym],[x0+m,ym]], 0, s, -s*y0); add([[x1,y1],[x0,y1],[x0+m,ym],[x1-m,ym]], 0, -s, s*y1);
      add([[x0,y1],[x0,y0],[x0+m,ym]], s, 0, -s*x0); add([[x1,y0],[x1,y1],[x1-m,ym]], -s, 0, s*x1); }
    else { const m = w/2, xm = (x0+x1)/2;
      add([[x0,y1],[x0,y0],[xm,y0+m],[xm,y1-m]], s, 0, -s*x0); add([[x1,y0],[x1,y1],[xm,y1-m],[xm,y0+m]], -s, 0, s*x1);
      add([[x0,y0],[x1,y0],[xm,y0+m]], 0, s, -s*y0); add([[x1,y1],[x0,y1],[xm,y1-m]], 0, -s, s*y1); }
  } else if(P.dir === 'x'){ const ym = (y0+y1)/2; add([[x0,y0],[x1,y0],[x1,ym],[x0,ym]], 0, s, -s*y0); add([[x1,y1],[x0,y1],[x0,ym],[x1,ym]], 0, -s, s*y1); }
  else if(P.dir === 'y'){ const xm = (x0+x1)/2; add([[x0,y1],[x0,y0],[xm,y0],[xm,y1]], s, 0, -s*x0); add([[x1,y0],[x1,y1],[xm,y1],[xm,y0]], -s, 0, s*x1); }
  else S();
  return F;
}
function clipLine(p0, d, poly){ // intervalle de t pour lequel p0 + t d est dans le polygone convexe CCW
  let t0 = -1e9, t1 = 1e9;
  for(let i=0;i<poly.length;i++){ const a = poly[i], b = poly[(i+1)%poly.length], nI = [-(b[1]-a[1]), b[0]-a[0]], num = (p0[0]-a[0])*nI[0] + (p0[1]-a[1])*nI[1], den = d[0]*nI[0] + d[1]*nI[1];
    if(Math.abs(den) < 1e-12){ if(num < -1e-7) return null; continue; }
    const t = -num/den; if(den > 0) t0 = Math.max(t0, t); else t1 = Math.min(t1, t); }
  return t0 <= t1 ? [t0, t1] : null;
}
function visRuns(t0, t1, n, vis){ // sous-intervalles de [t0, t1] où vis(t) est vrai (bornes affinées par dichotomie)
  const out = [], edge = (tin, tout) => { for(let k=0;k<18;k++){ const m = (tin + tout)/2; if(vis(m)) tin = m; else tout = m; } return tin; };
  let run = null, prevT = t0, prevV = false;
  for(let k=0;k<=n;k++){ const t = t0 + (t1 - t0)*k/n, v = vis(t);
    if(v && run === null) run = k ? edge(t, prevT) : t;
    if(!v && run !== null){ out.push([run, edge(prevT, t)]); run = null; }
    prevT = t; prevV = v; }
  if(run !== null) out.push([run, t1]);
  return out.filter(r => r[1] - r[0] > 2e-3);
}
function triPoly(P){ // découpage en triangles par oreilles (polygone simple CCW)
  const idx = P.map((_, i) => i), out = [], cr = (a, b, c) => (b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0]);
  const inT = (p, a, b, c) => cr(a, b, p) > 1e-12 && cr(b, c, p) > 1e-12 && cr(c, a, p) > 1e-12;
  let guard = 0;
  while(idx.length > 3 && guard++ < 4000){ let cut = false;
    for(let k=0;k<idx.length;k++){ const i0 = idx[(k-1+idx.length)%idx.length], i1 = idx[k], i2 = idx[(k+1)%idx.length], a = P[i0], b = P[i1], c = P[i2];
      if(cr(a, b, c) <= 1e-12) continue;
      if(idx.some(j => j !== i0 && j !== i1 && j !== i2 && inT(P[j], a, b, c))) continue;
      out.push([a, b, c]); idx.splice(k, 1); cut = true; break; }
    if(!cut) break; }
  if(idx.length === 3) out.push(idx.map(i => P[i]));
  return out;
}
const RG = new Map();
function roofGeo(e){
  const foot0 = roofFoot(e), key = JSON.stringify([foot0, e.deb, e.type, e.pente, e.sens, e.inv]);
  if(RG.has(key)) return RG.get(key);
  const type = e.type || '2 pans', foot = ccwPoly(cleanPoly(foot0.map(p => [+p[0], +p[1]]))), deb = type === 'terrasse' ? (e.deb || 0) : (e.deb ?? .5);
  if(foot.length < 3 || polyArea(foot) < 1e-3){ const I = p => p.slice(); return {type, foot, outer:foot, eaves:foot, fr:{th:0, L:I, W:I}, s:0, ang:0, faces:[], lines:[], pieces:[], h:() => -Infinity, area:0, ridge:0, valley:0, hip:0, ortho:true}; }
  const outer = offsetPoly(foot, deb), fr = frameOf(foot), ang = (e.pente || (type === '1 pan' ? 10 : 15))*Math.PI/180, s = Math.tan(ang);
  const G = {type, foot, outer, eaves:outer, fr, s, ang, faces:[], lines:[], pieces:[], h:() => 0, ortho:true};
  const Lo = outer.map(fr.L);
  if(type === '1 pan'){
    const xs = Lo.map(q => q[0]), ys = Lo.map(q => q[1]), u0 = Math.min(...xs), u1 = Math.max(...xs), v0 = Math.min(...ys), v1 = Math.max(...ys);
    const dir = (e.sens === 'x' || e.sens === 'y') ? e.sens : ((u1-u0) >= (v1-v0) ? 'x' : 'y'), inv = e.inv === true || e.inv === '1';
    const pl = dir === 'x' ? (inv ? [0, -s, s*v1] : [0, s, -s*v0]) : (inv ? [-s, 0, s*u1] : [s, 0, -s*u0]);
    G.faces = [{poly:Lo, pl, tri:true}];
    G.h = (u, v) => inside([u, v], Lo) || Lo.some((a, i) => segDist([u, v], a, Lo[(i+1)%Lo.length]) < 1e-4) ? pl[0]*u + pl[1]*v + pl[2] : -Infinity;
    const gw = fr.W([pl[0], pl[1]]), gl = Math.hypot(gw[0], gw[1]) || 1, c = centroid(outer), len = Math.min(3, Math.sqrt(polyArea(outer))*.45);
    G.arrow = [[c[0] + gw[0]/gl*len/2, c[1] + gw[1]/gl*len/2], [c[0] - gw[0]/gl*len/2, c[1] - gw[1]/gl*len/2]];
  } else if(type !== 'terrasse'){
    const convex = Lo.every((a, i) => { const b = Lo[(i+1)%Lo.length], c = Lo[(i+2)%Lo.length]; return (b[0]-a[0])*(c[1]-b[1]) - (b[1]-a[1])*(c[0]-b[0]) > -1e-9; });
    if(!isOrtho(Lo) && convex){
      // contour convexe quelconque : un pan par côté (4 pans) ou par long côté (2 pans), toiture exacte à pentes égales
      const xs = Lo.map(q => q[0]), ys = Lo.map(q => q[1]), ax = (e.sens === 'x' || e.sens === 'y') ? e.sens : ((Math.max(...xs) - Math.min(...xs)) >= (Math.max(...ys) - Math.min(...ys)) ? 'x' : 'y');
      const PLs = Lo.map((a, i) => { const b = Lo[(i+1)%Lo.length], l = dist(a, b) || 1, n = [-(b[1]-a[1])/l, (b[0]-a[0])/l], dx = Math.abs((b[0]-a[0])/l);
        return {pl:[s*n[0], s*n[1], -s*(a[0]*n[0] + a[1]*n[1])], eave:type === '4 pans' || (ax === 'x' ? dx >= Math.SQRT1_2 - 1e-9 : dx <= Math.SQRT1_2 + 1e-9)}; }).filter(q => q.eave);
      const zq = (pl, q) => pl[0]*q[0] + pl[1]*q[1] + pl[2];
      const clipHalf = (poly, f) => { const o = []; poly.forEach((a, i) => { const b = poly[(i+1)%poly.length], fa = f(a), fb = f(b); if(fa <= 1e-9) o.push(a); if((fa < -1e-9 && fb > 1e-9) || (fa > 1e-9 && fb < -1e-9)){ const t = fa/(fa - fb); o.push([a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t]); } }); return o; };
      PLs.forEach((q, i) => { let poly = Lo.map(v => v.slice()); PLs.forEach((r, j) => { if(j !== i && poly.length >= 3) poly = clipHalf(poly, v => zq(q.pl, v) - zq(r.pl, v)); }); if(poly.length >= 3 && polyArea(poly) > 1e-4) G.faces.push({poly, pl:q.pl}); });
      G.h = (u, v) => (inside([u, v], Lo) || Lo.some((a, i) => segDist([u, v], a, Lo[(i+1)%Lo.length]) < 1e-4)) ? Math.max(0, Math.min(...PLs.map(q => zq(q.pl, [u, v])))) : -Infinity;
    } else {
      let Pl = Lo;
      if(!isOrtho(Lo)){ G.ortho = false; const W = Math.max(...Lo.map(q => q[0])) - Math.min(...Lo.map(q => q[0])), H = Math.max(...Lo.map(q => q[1])) - Math.min(...Lo.map(q => q[1]));
        Pl = rasterOutline([], [Lo], {ortho:true, h:Math.max(.25, Math.max(W, H)/36)}) || Lo; G.eaves = Pl.map(fr.W); }
      const R = maxRects(Pl);
      G.pieces = !R.length ? [] : type === '4 pans' ? R.map(r => ({...r, k:'hip'})) : gablePieces(R, e.sens);
      G.faces = G.pieces.flatMap(P => pieceFaces(P, s));
      G.h = (u, v) => { let m = -Infinity; for(const P of G.pieces){ const z = pieceH(P, u, v, s); if(z > m) m = z; } return m; };
    }
    // lignes du plan de toiture : faîtages, arêtiers, noues et ressauts
    const F = G.faces, H = q => G.h(q[0], q[1]), zf = (f, q) => f.pl[0]*q[0] + f.pl[1]*q[1] + f.pl[2];
    for(let i=0;i<F.length;i++) for(let j=i+1;j<F.length;j++){
      const f = F[i], g = F[j], na = f.pl[0]-g.pl[0], nb = f.pl[1]-g.pl[1], nc = f.pl[2]-g.pl[2], nn = na*na + nb*nb;
      if(nn < 1e-12) continue;
      const sq = Math.sqrt(nn), p0 = [-nc*na/nn, -nc*nb/nn], d = [-nb/sq, na/sq], r1 = clipLine(p0, d, f.poly), r2 = r1 && clipLine(p0, d, g.poly);
      if(!r2) continue; const t0 = Math.max(r1[0], r2[0]), t1 = Math.min(r1[1], r2[1]); if(t1 - t0 < 2e-3) continue;
      const at = t => [p0[0] + d[0]*t, p0[1] + d[1]*t];
      const nr = [na/sq, nb/sq], flat = (pl, q) => { let n = 0; for(const sg of [1, -1]){ const q1 = [q[0]+nr[0]*.02*sg, q[1]+nr[1]*.02*sg], h1 = H(q1); if(h1 === -Infinity) continue; if(Math.abs(h1 - zf(pl, q1)) > 1e-6) return false; n++; } return n > 0; };
      visRuns(t0, t1, Math.max(8, Math.ceil((t1-t0)/.08)), t => { const q = at(t); return zf(f, q) >= H(q) - 1e-6 && !flat(f, q) && !flat(g, q); }).forEach(([a, b]) => {
        const m = at((a+b)/2), nrm = [na/sq, nb/sq], zm = zf(f, m), h1 = H([m[0]+nrm[0]*.05, m[1]+nrm[1]*.05]), h2 = H([m[0]-nrm[0]*.05, m[1]-nrm[1]*.05]);
        const k = (h1 > -Infinity && h2 > -Infinity && (h1 + h2)/2 > zm + 1e-4) ? 'valley' : Math.abs(f.pl[0]*d[0] + f.pl[1]*d[1]) < 1e-7 ? 'ridge' : 'hip';
        G.lines.push({a:fr.W(at(a)), b:fr.W(at(b)), k}); });
    }
    G.pieces.forEach(P => [[[P.x0,P.y0],[P.x1,P.y0],[0,-1]], [[P.x1,P.y0],[P.x1,P.y1],[1,0]], [[P.x1,P.y1],[P.x0,P.y1],[0,1]], [[P.x0,P.y1],[P.x0,P.y0],[-1,0]]].forEach(([a, b, n]) => {
      const at = t => [a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t];
      visRuns(0, 1, Math.max(6, Math.ceil(dist(a, b)/.1)), t => { const q = at(t), qi = [q[0]-n[0]*1e-3, q[1]-n[1]*1e-3], qo = [q[0]+n[0]*1e-3, q[1]+n[1]*1e-3], zi = pieceH(P, qi[0], qi[1], s), hi = H(qi), ho = H(qo);
        return zi >= hi - 1e-6 && ho > -Infinity && Math.abs(ho - hi) > .02; }).forEach(([t0, t1]) => G.lines.push({a:fr.W(at(t0)), b:fr.W(at(t1)), k:'step'})); }));
  }
  // fusion des segments confondus (pans coplanaires de plusieurs rectangles)
  const kept = [];
  G.lines.forEach(l => { const d = [l.b[0]-l.a[0], l.b[1]-l.a[1]], Ln = Math.hypot(d[0], d[1]); if(Ln < 2e-3) return; const u = [d[0]/Ln, d[1]/Ln];
    const m = kept.find(k => k.k === l.k && Math.abs(u[0]*k.u[1] - u[1]*k.u[0]) < 1e-4 && Math.abs((l.a[0]-k.p[0])*k.u[1] - (l.a[1]-k.p[1])*k.u[0]) < 1e-3);
    const t1 = m ? (l.a[0]-m.p[0])*m.u[0] + (l.a[1]-m.p[1])*m.u[1] : 0, t2 = m ? (l.b[0]-m.p[0])*m.u[0] + (l.b[1]-m.p[1])*m.u[1] : 0;
    if(m && Math.max(t1, t2) >= m.t0 - 1e-3 && Math.min(t1, t2) <= m.t1 + 1e-3){ m.t0 = Math.min(m.t0, t1, t2); m.t1 = Math.max(m.t1, t1, t2); }
    else kept.push({k:l.k, p:l.a, u, t0:0, t1:Ln}); });
  G.lines = kept.filter(k => k.t1 - k.t0 > .05).map(k => ({k:k.k, a:[k.p[0]+k.u[0]*k.t0, k.p[1]+k.u[1]*k.t0], b:[k.p[0]+k.u[0]*k.t1, k.p[1]+k.u[1]*k.t1]}));
  G.area = type === 'terrasse' ? polyArea(outer) : polyArea(G.eaves)/Math.cos(ang);
  G.ridge = G.lines.filter(l => l.k === 'ridge').reduce((a, l) => a + dist(l.a, l.b), 0);
  G.valley = G.lines.filter(l => l.k === 'valley').reduce((a, l) => a + dist(l.a, l.b), 0);
  G.hip = G.lines.filter(l => l.k === 'hip').reduce((a, l) => a + dist(l.a, l.b), 0);
  if(RG.size > 60) RG.delete(RG.keys().next().value);
  RG.set(key, G); return G;
}
/* contour du bâtiment : murs du niveau courant (sinon pièces, dalles, formes fermées) */
function autoOutline(list){
  const walls = list.filter(e => e.t === 'wall' && dist([e.x1,e.y1],[e.x2,e.y2]) > .05);
  const shapes = list.filter(e => ['room','slab'].includes(e.t) || (e.t === 'poly' && e.closed) || e.t === 'rect' || e.t === 'box');
  if(!walls.length && !shapes.length) return null;
  const ref = walls.length ? walls.map(w => [[w.x1,w.y1],[w.x2,w.y2]]) : shapes.map(e => e.pts || rectPts([e.x1,e.y1],[e.x2,e.y2]));
  let b = null; ref.forEach(P => P.forEach((p, i) => { const q = P[(i+1)%P.length], l = dist(p, q); if(!b || l > b.l) b = {l, a:Math.atan2(q[1]-p[1], q[0]-p[0])}; }));
  const qa = Math.PI/2, th = ((b.a % qa) + qa) % qa, c = Math.cos(th), s = Math.sin(th), L = p => [p[0]*c + p[1]*s, -p[0]*s + p[1]*c], W = p => [p[0]*c - p[1]*s, p[0]*s + p[1]*c];
  const P = walls.length ? rasterOutline(walls.map(w => ({a:L([w.x1,w.y1]), b:L([w.x2,w.y2]), r:(w.ep || .2)/2})), [])
                         : rasterOutline([], shapes.map(e => (e.pts || rectPts([e.x1,e.y1],[e.x2,e.y2])).map(L)));
  if(!P || P.length < 3) return null;
  const top = walls.length ? Math.max(...walls.map(w => (w.z ?? 0) + (w.h ?? C.ht))) : null;
  return {pts:ccwPoly(P.map(W)).map(p => p.map(r3)), z:top};
}

/* ---------- vue ---------- */
const toS = p => [p[0]*C.view.s + C.view.ox, C.view.oy - p[1]*C.view.s];
const toW = (sx, sy) => [(sx - C.view.ox)/C.view.s, (C.view.oy - sy)/C.view.s];
const layer = id => C.layers.find(l => l.id === id) || C.layers[0];

/* ---------- rendu des entités (coordonnées monde) ---------- */
function entSvg(e, o={}){
  const L = layer(e.layer), col = o.col || (C.sel.has(e.id) ? '#F3B23A' : L.c), nss = 'vector-effect="non-scaling-stroke"';
  const sw = o.light ? 1.2 : 1.5, txtCol = o.col || (C.sel.has(e.id) ? '#F3B23A' : (o.light ? '#14202E' : L.c));
  switch(e.t){
    case 'line': return `<line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
    case 'wall': return `<line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" stroke="${o.light && !C.sel.has(e.id) ? '#2A3340' : col}" stroke-width="${e.ep}" stroke-linecap="square" opacity="${o.ghost?.5:.92}"/>`;
    case 'rect': return `<rect x="${Math.min(e.x1,e.x2)}" y="${Math.min(e.y1,e.y2)}" width="${Math.abs(e.x2-e.x1)}" height="${Math.abs(e.y2-e.y1)}" fill="none" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
    case 'circle': return `<circle cx="${e.cx}" cy="${e.cy}" r="${e.r}" fill="none" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
    case 'poly': return `<${e.closed?'polygon':'polyline'} points="${e.pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
    case 'room': { const c = centroid(e.pts), A2 = polyArea(e.pts), h = Math.min(.32, Math.sqrt(A2)/9 + .1);
      return `<polygon points="${e.pts.map(p=>p.join(',')).join(' ')}" fill="${o.light?'#EEF4FF':L.c}" fill-opacity="${o.light?1:.08}" stroke="${col}" stroke-width="1" stroke-dasharray="5 4" ${nss}/>
      <g transform="translate(${c[0]} ${c[1]}) scale(1 -1)"><text text-anchor="middle" font-size="${h}" font-weight="700" fill="${txtCol}" font-family="Inter,sans-serif">${esc(e.name||'Pièce')}</text><text y="${h*1.15}" text-anchor="middle" font-size="${h*.8}" fill="${o.light?'#5E6B7A':txtCol}" opacity=".8" font-family="Inter,sans-serif">${fm(A2)} m²</text></g>`; }
    case 'text': return `<g transform="translate(${e.x} ${e.y}) scale(1 -1)"><text font-size="${e.s}" fill="${txtCol}" font-family="Inter,sans-serif">${esc(e.txt)}</text></g>`;
    case 'box': case 'stair': { const x = Math.min(e.x1,e.x2), y = Math.min(e.y1,e.y2), w = Math.abs(e.x2-e.x1), h = Math.abs(e.y2-e.y1);
      let g = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
      if(e.t === 'box') g += `<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y+h}" stroke="${col}" stroke-width=".8" ${nss}/><line x1="${x+w}" y1="${y}" x2="${x}" y2="${y+h}" stroke="${col}" stroke-width=".8" ${nss}/>`;
      else { const alongX = w >= h, n = Math.max(3, Math.round((e.H||3)/.17)), L = alongX ? w : h; for(let k=1;k<n;k++){ const t = L*k/n; g += alongX ? `<line x1="${x+t}" y1="${y}" x2="${x+t}" y2="${y+h}" stroke="${col}" stroke-width=".7" ${nss}/>` : `<line x1="${x}" y1="${y+t}" x2="${x+w}" y2="${y+t}" stroke="${col}" stroke-width=".7" ${nss}/>`; }
        const sx = e.x1, sy = e.y1, ex = alongX ? e.x2 : e.x1, ey = alongX ? e.y1 : e.y2; g += `<line x1="${alongX ? sx : x+w/2}" y1="${alongX ? y+h/2 : sy}" x2="${alongX ? ex : x+w/2}" y2="${alongX ? y+h/2 : ey}" stroke="${col}" stroke-width="1.6" ${nss}/>`; }
      return g; }
    case 'cyl': return `<circle cx="${e.cx}" cy="${e.cy}" r="${e.r}" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="${sw}" ${nss}/><circle cx="${e.cx}" cy="${e.cy}" r="${e.r*.15}" fill="${col}"/>`;
    case 'post': return `<rect x="${e.cx-e.a/2}" y="${e.cy-e.a/2}" width="${e.a}" height="${e.a}" fill="${o.light && !C.sel.has(e.id) ? '#14202E' : col}"/>`;
    case 'beam': { const n = normal(e), h = (e.b||.2)/2; return `<polygon points="${[[e.x1+n[0]*h,e.y1+n[1]*h],[e.x2+n[0]*h,e.y2+n[1]*h],[e.x2-n[0]*h,e.y2-n[1]*h],[e.x1-n[0]*h,e.y1-n[1]*h]].map(p=>p.join(',')).join(' ')}" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="1" stroke-dasharray="5 3" ${nss}/>`; }
    case 'slab': return `<polygon points="${e.pts.map(p=>p.join(',')).join(' ')}" fill="${col}" fill-opacity=".10" stroke="${col}" stroke-width="1.2" stroke-dasharray="8 3 2 3" ${nss}/>`;
    case 'roof': { const G = roofGeo(e), ps = P => P.map(q => q[0] + ',' + q[1]).join(' ');
      let g = `<polygon points="${ps(G.eaves)}" fill="${col}" fill-opacity=".10" stroke="${col}" stroke-width="${sw}" ${nss}/>`;
      if(G.type !== 'terrasse' || (e.deb || 0) > 0) g += `<polygon points="${ps(G.foot)}" fill="none" stroke="${col}" stroke-width=".6" stroke-dasharray="3 3" ${nss}/>`;
      G.lines.forEach(l => { g += `<line x1="${l.a[0]}" y1="${l.a[1]}" x2="${l.b[0]}" y2="${l.b[1]}" stroke="${col}" stroke-width="${l.k === 'ridge' ? 2.2 : l.k === 'step' ? 1.6 : 1.2}" ${l.k === 'valley' ? 'stroke-dasharray="7 4"' : ''} ${nss}/>`; });
      if(G.arrow){ const [a, b] = G.arrow, u = [b[0]-a[0], b[1]-a[1]], l = Math.hypot(u[0], u[1]) || 1, k = Math.min(.45, l*.25), n = [-u[1]/l, u[0]/l], t = [b[0]-u[0]/l*k, b[1]-u[1]/l*k];
        g += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${col}" stroke-width="1.6" ${nss}/><polygon points="${b[0]},${b[1]} ${t[0]+n[0]*k*.5},${t[1]+n[1]*k*.5} ${t[0]-n[0]*k*.5},${t[1]-n[1]*k*.5}" fill="${col}"/>`; }
      if(G.type === 'terrasse') g += `<polygon points="${ps(offsetPoly(G.outer, -.12))}" fill="none" stroke="${col}" stroke-width=".8" stroke-dasharray="2 3" ${nss}/>`;
      return g; }
    case 'door': case 'win': {
      const n = normal(e), w = dist([e.x1,e.y1],[e.x2,e.y2]), t = (e.ep || .2) + .02, h = t/2;
      const bgPts = [[e.x1+n[0]*h, e.y1+n[1]*h],[e.x2+n[0]*h, e.y2+n[1]*h],[e.x2-n[0]*h, e.y2-n[1]*h],[e.x1-n[0]*h, e.y1-n[1]*h]];
      let s = `<polygon points="${bgPts.map(p=>p.join(',')).join(' ')}" fill="${o.light?'#fff':BG}"/>`;
      if(e.t === 'win'){ s += `<polygon points="${bgPts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${col}" stroke-width="1.2" ${nss}/><line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" stroke="${col}" stroke-width="1.2" ${nss}/>`; return s; }
      const sg = e.sw || 1, Lp = [e.x1 + n[0]*w*sg, e.y1 + n[1]*w*sg];
      const a = [Lp[0]-e.x1, Lp[1]-e.y1], b = [e.x2-e.x1, e.y2-e.y1], sweep = (a[0]*b[1] - a[1]*b[0]) > 0 ? 1 : 0;
      return s + `<line x1="${e.x1}" y1="${e.y1}" x2="${Lp[0]}" y2="${Lp[1]}" stroke="${col}" stroke-width="2" ${nss}/><path d="M ${Lp[0]} ${Lp[1]} A ${w} ${w} 0 0 ${sweep} ${e.x2} ${e.y2}" fill="none" stroke="${col}" stroke-width="1" stroke-dasharray="4 3" ${nss}/>`;
    }
    case 'dim': {
      const n = normal(e), off = e.off ?? .6, a = [e.x1 + n[0]*off, e.y1 + n[1]*off], b = [e.x2 + n[0]*off, e.y2 + n[1]*off];
      const ov = Math.sign(off||1)*.12, L2 = dist([e.x1,e.y1],[e.x2,e.y2]);
      let ang = Math.atan2(e.y2-e.y1, e.x2-e.x1)*180/Math.PI; if(ang > 90) ang -= 180; if(ang <= -90) ang += 180;
      const m = [(a[0]+b[0])/2, (a[1]+b[1])/2], ts = e.s || Math.max(.14, Math.min(.3, L2/12)), tk = ts*.45;
      const ux = (e.x2-e.x1)/(L2||1), uy = (e.y2-e.y1)/(L2||1);
      const tick = p => `<line x1="${p[0]-(ux+n[0])*tk*.7}" y1="${p[1]-(uy+n[1])*tk*.7}" x2="${p[0]+(ux+n[0])*tk*.7}" y2="${p[1]+(uy+n[1])*tk*.7}" stroke="${col}" stroke-width="1.6" ${nss}/>`;
      return `<line x1="${e.x1+n[0]*.05*Math.sign(off||1)}" y1="${e.y1+n[1]*.05*Math.sign(off||1)}" x2="${a[0]+n[0]*ov}" y2="${a[1]+n[1]*ov}" stroke="${col}" stroke-width=".8" ${nss}/><line x1="${e.x2+n[0]*.05*Math.sign(off||1)}" y1="${e.y2+n[1]*.05*Math.sign(off||1)}" x2="${b[0]+n[0]*ov}" y2="${b[1]+n[1]*ov}" stroke="${col}" stroke-width=".8" ${nss}/>
       <line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${col}" stroke-width="1" ${nss}/>${tick(a)}${tick(b)}
       <g transform="translate(${m[0]} ${m[1]}) rotate(${ang}) scale(1 -1)"><text y="${-ts*.35}" text-anchor="middle" font-size="${ts}" fill="${txtCol}" font-family="Inter,sans-serif">${fm(L2)}</text></g>`;
    }
  }
  return '';
}
function entsSvg(o={}){
  const order = {slab:-1, room:0, stair:0, wall:1, line:2, rect:2, circle:2, poly:2, box:2, cyl:2, post:2, beam:2, door:3, win:3, roof:3, dim:4, text:5};
  const L = C.ents.filter(e => layer(e.layer).v).sort((a,b)=>(order[a.t]??2)-(order[b.t]??2));
  if(o.all) return L.map(e => entSvg(e, o)).join('');
  const other = L.filter(e => !belongs(e)), mine = L.filter(belongs);
  return (other.length ? `<g opacity=".16">${other.map(e => entSvg(e, o)).join('')}</g>` : '') + mine.map(e => entSvg(e, o)).join('');
}

/* ---------- rendu du canevas ---------- */
function gridSvg(){
  if(!C.showGrid) return '';
  let g = C.grid; while(g*C.view.s < 9) g *= (String(g).includes('25') ? 2 : g*C.view.s < 4 ? 10 : 5);
  const G = g*C.view.s, M = Math.max(1, Math.round(1/g))*G <= vw ? (g < 1 ? 1 : g*5)*C.view.s : G*5;
  const ox = ((C.view.ox % G) + G) % G, oy = ((C.view.oy % G) + G) % G, mx = ((C.view.ox % M) + M) % M, my = ((C.view.oy % M) + M) % M;
  return `<defs><pattern id="cgr" x="${ox}" y="${oy}" width="${G}" height="${G}" patternUnits="userSpaceOnUse"><path d="M ${G} 0 L 0 0 0 ${G}" fill="none" stroke="#14243A" stroke-width="1"/></pattern>
   <pattern id="cgM" x="${mx}" y="${my}" width="${M}" height="${M}" patternUnits="userSpaceOnUse"><path d="M ${M} 0 L 0 0 0 ${M}" fill="none" stroke="#1C3150" stroke-width="1"/></pattern></defs>
   <rect width="${vw}" height="${vh}" fill="url(#cgr)"/><rect width="${vw}" height="${vh}" fill="url(#cgM)"/>
   <line x1="${C.view.ox}" y1="0" x2="${C.view.ox}" y2="${vh}" stroke="#2B4870" stroke-width="1"/><line x1="0" y1="${C.view.oy}" x2="${vw}" y2="${C.view.oy}" stroke="#2B4870" stroke-width="1"/>`;
}
const wt = () => `matrix(${C.view.s} 0 0 ${-C.view.s} ${C.view.ox} ${C.view.oy})`;
function draw(){
  const svgEl = $('#cvs'); if(!svgEl || !C) return;
  const cv = $('#cv'); vw = cv.clientWidth; vh = cv.clientHeight;
  svgEl.setAttribute('viewBox', `0 0 ${vw} ${vh}`);
  $('#cgrid').innerHTML = gridSvg();
  const g = $('#wg'); g.setAttribute('transform', wt()); g.innerHTML = entsSvg();
  overlay(); props(); hud(); upd3d();
}
function overlay(){
  const o = $('#ovl'); if(!o) return;
  const m = C.mouse, p = C.snapPt || [m.x, m.y], sp = toS(p);
  let s = '';
  const cmd = C.cmd;
  // prévisualisation
  if(cmd){
    const P = cmd.pts, last = P[P.length-1];
    const ghost = (e) => `<g transform="${wt()}" opacity=".75">${entSvg(Object.assign({layer:AUTO[e.t]||C.cur}, e), {col:'#F3B23A'})}</g>`;
    if(cmd.n === 'TOIT'){
      if(cmd.foot) s += ghost({t:'roof', pts:cmd.foot, type:cmd.type || '2 pans', deb:cmd.type === 'terrasse' ? 0 : .5, pente:15});
      else if(cmd.poly && P.length) s += `<g transform="${wt()}"><polygon points="${P.concat([p]).map(q => q.join(',')).join(' ')}" fill="rgba(243,178,58,.08)" stroke="#F3B23A" stroke-width="1.5" stroke-dasharray="6 4" vector-effect="non-scaling-stroke"/></g>`;
      else if(last && dist(last, p) > .05) s += ghost({t:'roof', pts:ccwPoly(rectPts(last, p)), type:'4 pans', deb:.5, pente:15});
    }
    if(last){
      if(['LIGNE','POLYLIGNE','COTE','PORTE','FENETRE'].includes(cmd.n) && !(cmd.n==='COTE' && P.length===2) && !(cmd.n==='PORTE' && P.length===2)) s += ghost({t: cmd.n==='FENETRE'?'win':'line', x1:last[0], y1:last[1], x2:p[0], y2:p[1], ep:C.ep});
      if(cmd.n === 'MUR') s += ghost({t:'wall', x1:last[0], y1:last[1], x2:p[0], y2:p[1], ep:cmd.ep||C.ep});
      if(cmd.n === 'RECTANGLE') s += ghost({t:'rect', x1:last[0], y1:last[1], x2:p[0], y2:p[1]});
      if(cmd.n === 'PIECE' && P.length === 1) s += ghost({t:'room', pts:rectPts(last, p), name:'Pièce'});
      if(cmd.n === 'CERCLE') s += ghost({t:'circle', cx:last[0], cy:last[1], r:dist(last, p)});
      if(cmd.n === 'COTE' && P.length === 2){ const e = {t:'dim', x1:P[0][0], y1:P[0][1], x2:P[1][0], y2:P[1][1]}; const n = normal(e); e.off = (p[0]-P[0][0])*n[0] + (p[1]-P[0][1])*n[1]; s += ghost(e); }
      if(cmd.n === 'PORTE' && P.length === 2){ const e = {t:'door', x1:P[0][0], y1:P[0][1], x2:P[1][0], y2:P[1][1], ep:cmd.ep||C.ep}; const n = normal(e); e.sw = ((p[0]-P[0][0])*n[0] + (p[1]-P[0][1])*n[1]) >= 0 ? 1 : -1; s += ghost(e); }
      if(['DEPLACER','COPIER'].includes(cmd.n) && cmd.base){ const d = [p[0]-cmd.base[0], p[1]-cmd.base[1]]; s += `<g transform="${wt()}" opacity=".6">${C.ents.filter(e=>C.sel.has(e.id)).map(e=>entSvg(transform(e, q=>[q[0]+d[0], q[1]+d[1]]),{col:'#F3B23A', ghost:1})).join('')}</g>`; }
      if(cmd.n === 'ROTATION' && cmd.base){ const a = Math.atan2(p[1]-cmd.base[1], p[0]-cmd.base[0]); s += `<g transform="${wt()}" opacity=".6">${C.ents.filter(e=>C.sel.has(e.id)).map(e=>entSvg(transform(e, q=>rot(q, cmd.base, a)),{col:'#F3B23A', ghost:1})).join('')}</g>`; }
      if(cmd.n === 'MIROIR' && cmd.base) s += `<g transform="${wt()}" opacity=".6">${C.ents.filter(e=>C.sel.has(e.id)).map(e=>entSvg(transform(e, q=>mirror(q, cmd.base, p)),{col:'#F3B23A', ghost:1})).join('')}</g>`;
      if(!['ROTATION'].includes(cmd.n)) { const a = toS(last); s += `<line x1="${a[0]}" y1="${a[1]}" x2="${sp[0]}" y2="${sp[1]}" stroke="#F3B23A" stroke-width="1" stroke-dasharray="3 4" opacity=".5"/>`; }
    }
  }
  if(C.win){ const a = C.win.a, b = [m.sx, m.sy], cross = b[0] < a[0];
    s += `<rect x="${Math.min(a[0],b[0])}" y="${Math.min(a[1],b[1])}" width="${Math.abs(b[0]-a[0])}" height="${Math.abs(b[1]-a[1])}" fill="${cross?'rgba(30,155,94,.12)':'rgba(47,111,219,.12)'}" stroke="${cross?'#1E9B5E':'#2F6FDB'}" stroke-dasharray="${cross?'5 4':''}"/>`; }
  // réticule
  if(C.tool !== 'pan' && m.in) s += `<line x1="0" x2="${vw}" y1="${sp[1]}" y2="${sp[1]}" stroke="#5F7590" stroke-width=".6"/><line y1="0" y2="${vh}" x1="${sp[0]}" x2="${sp[0]}" stroke="#5F7590" stroke-width=".6"/><rect x="${sp[0]-4}" y="${sp[1]-4}" width="8" height="8" fill="none" stroke="#E3EAF2"/>`;
  if(C.snapPt && C.snapKind) s += C.snapKind === 'mid' ? `<path d="M ${sp[0]} ${sp[1]-8} L ${sp[0]+8} ${sp[1]+6} L ${sp[0]-8} ${sp[1]+6} Z" fill="none" stroke="#1E9B5E" stroke-width="2"/>` : C.snapKind === 'ctr' ? `<circle cx="${sp[0]}" cy="${sp[1]}" r="7" fill="none" stroke="#1E9B5E" stroke-width="2"/>` : `<rect x="${sp[0]-7}" y="${sp[1]-7}" width="14" height="14" fill="none" stroke="#1E9B5E" stroke-width="2"/>`;
  o.innerHTML = s;
}
function hud(){
  const h = $('#hud'); if(!h) return;
  const p = C.snapPt || [C.mouse.x, C.mouse.y], last = C.cmd && C.cmd.pts[C.cmd.pts.length-1];
  h.innerHTML = `<span>X ${fm(p[0])}</span><span>Y ${fm(p[1])}</span>${last?`<span>L ${fm(dist(last,p))} m</span><span>∠ ${F((Math.atan2(p[1]-last[1],p[0]-last[0])*180/Math.PI+360)%360,1)}°</span>`:''}<span>${C.ortho?'ORTHO':''} ${C.osnap?'ACCROCH.':''}</span><span>NIV. ${C.lvz >= 0 ? '+' : ''}${fm(C.lvz)}</span>`;
  const ls = $('#cLv'), lk = levelsList().join('|') + '#' + C.lvz; if(ls && document.activeElement !== ls && (lk !== lvKey || !ls.options.length)){ lvKey = lk; const L = levelsList(); ls.innerHTML = L.map(z => `<option value="${z}" ${Math.abs(z - C.lvz) < .01 ? 'selected' : ''}>Niv. ${z >= 0 ? '+' : ''}${fm(z)}</option>`).join('') + '<option value="new">Autre niveau…</option>'; }
  const hint = $('#hint'); if(hint){ hint.hidden = !C.cmd; if(C.cmd) hint.textContent = C.cmd.n + ' · ' + prompt(); }
  const pr = $('#cmdP'); if(pr) pr.textContent = C.cmd ? prompt() + ' ' : 'Commande :';
  [['ortho',C.ortho],['osnap',C.osnap],['grid',C.showGrid]].forEach(([k,v]) => { const b = $(`[data-cact="${k}"]`); if(b) b.classList.toggle('on', !!v); });
}

/* ---------- accrochage ---------- */
function snap(sx, sy){
  let w = toW(sx, sy); C.snapPt = null; C.snapKind = null;
  if(C.osnap){
    const tol = 10 / C.view.s; let best = null;
    C.ents.forEach(e => {
      if(!layer(e.layer).v || !belongs(e)) return;
      const cand = [];
      if('x1' in e){ cand.push([[e.x1,e.y1],'end'],[[e.x2,e.y2],'end'],[[(e.x1+e.x2)/2,(e.y1+e.y2)/2],'mid']); }
      if(['rect','box','stair'].includes(e.t) || (e.t === 'roof' && !e.pts)) rectPts([e.x1,e.y1],[e.x2,e.y2]).forEach(p => cand.push([p,'end']));
      if(e.t === 'post' || e.t === 'cyl') cand.push([[e.cx,e.cy],'ctr']);
      if(e.pts) e.pts.forEach(p => cand.push([p,'end']));
      if(e.t === 'circle') cand.push([[e.cx,e.cy],'ctr']);
      if(e.t === 'wall'){ const n = normal(e), h = e.ep/2; [[e.x1,e.y1],[e.x2,e.y2]].forEach(p => { cand.push([[p[0]+n[0]*h, p[1]+n[1]*h],'end'],[[p[0]-n[0]*h, p[1]-n[1]*h],'end']); }); }
      cand.forEach(([p,k]) => { const d = dist(p, w); if(d < tol && (!best || d < best.d)) best = {p, k, d}; });
    });
    if(best){ C.snapPt = best.p; C.snapKind = best.k; return best.p; }
  }
  const cmd = C.cmd, last = cmd && cmd.pts[cmd.pts.length-1];
  if(C.snap){ const g = C.grid; w = [Math.round(w[0]/g)*g, Math.round(w[1]/g)*g]; }
  if(C.ortho && last && !(cmd.n === 'COTE' && cmd.pts.length === 2) && !(cmd.n === 'PORTE' && cmd.pts.length === 2) && !(cmd.base && ['ROTATION','MIROIR'].includes(cmd.n))){
    if(Math.abs(w[0]-last[0]) >= Math.abs(w[1]-last[1])) w = [w[0], last[1]]; else w = [last[0], w[1]];
  }
  C.snapPt = [r3(w[0]), r3(w[1])]; C.snapKind = null; return C.snapPt;
}

/* ---------- historique ---------- */
function pushHist(){ C.hist.push(JSON.stringify(C.ents)); if(C.hist.length > 120) C.hist.shift(); C.fut = []; C.dirty = true; }
function undo(){ if(!C.hist.length){ log('Rien à annuler'); return; } C.fut.push(JSON.stringify(C.ents)); C.ents = JSON.parse(C.hist.pop()); C.sel.clear(); C.dirty = true; log('Annulé'); draw(); }
function redo(){ if(!C.fut.length){ log('Rien à rétablir'); return; } C.hist.push(JSON.stringify(C.ents)); C.ents = JSON.parse(C.fut.pop()); C.dirty = true; log('Rétabli'); draw(); }
const nid = () => 'e' + Math.random().toString(36).slice(2, 9);
function addEnt(e){ e.id = nid(); e.layer = C.auto ? (AUTO[e.t] || C.cur) : C.cur; if(e.z == null && !['dim','text','line'].includes(e.t)) e.z = C.lvz; C.ents.push(e); return e; }

/* ---------- commandes ---------- */
const ALIAS = {L:'LIGNE', LIGNE:'LIGNE', LINE:'LIGNE', MU:'MUR', MUR:'MUR', W:'MUR', WALL:'MUR', PL:'POLYLIGNE', POLYLIGNE:'POLYLIGNE', PLINE:'POLYLIGNE', REC:'RECTANGLE', RECT:'RECTANGLE', RECTANGLE:'RECTANGLE', RECTANG:'RECTANGLE',
  C:'CERCLE', CERCLE:'CERCLE', CIRCLE:'CERCLE', PI:'PIECE', PIECE:'PIECE', 'PIÈCE':'PIECE', PO:'PORTE', PORTE:'PORTE', DOOR:'PORTE', FE:'FENETRE', FENETRE:'FENETRE', 'FENÊTRE':'FENETRE', WIN:'FENETRE',
  COT:'COTE', COTE:'COTE', COTATION:'COTE', DIM:'COTE', T:'TEXTE', TEXTE:'TEXTE', TEXT:'TEXTE', E:'EFFACER', EFF:'EFFACER', EFFACER:'EFFACER', ERASE:'EFFACER',
  D:'DEPLACER', DEP:'DEPLACER', DEPLACER:'DEPLACER', 'DÉPLACER':'DEPLACER', M:'DEPLACER', MOVE:'DEPLACER', CO:'COPIER', CP:'COPIER', COPIER:'COPIER', COPY:'COPIER',
  RO:'ROTATION', ROTATION:'ROTATION', ROTATE:'ROTATION', MI:'MIROIR', MIROIR:'MIROIR', MIRROR:'MIROIR', U:'ANNULER', ANNULER:'ANNULER', UNDO:'ANNULER', R:'RETABLIR', RET:'RETABLIR', RETABLIR:'RETABLIR', 'RÉTABLIR':'RETABLIR', REDO:'RETABLIR',
  Z:'ZOOM', ZOOM:'ZOOM', ZE:'ZE', O:'ORTHO', ORTHO:'ORTHO', ACC:'ACCROCHAGE', ACCROCHAGE:'ACCROCHAGE', OSNAP:'ACCROCHAGE', G:'GRILLE', GRILLE:'GRILLE', GRID:'GRILLE',
  EP:'EPAISSEUR', EPAISSEUR:'EPAISSEUR', 'ÉPAISSEUR':'EPAISSEUR', HT:'HAUTEUR', HAUTEUR:'HAUTEUR', MT:'METRE', METRE:'METRE', 'MÉTRÉ':'METRE', ENR:'ENREGISTRER', ENREGISTRER:'ENREGISTRER', SAVE:'ENREGISTRER',
  '?':'AIDE', AIDE:'AIDE', HELP:'AIDE', TOUT:'TOUT', ALL:'TOUT', NOUVEAU:'NOUVEAU', NEW:'NOUVEAU', CALQUE:'CALQUE', LA:'CALQUE',
  BOITE:'BOITE', 'BOÎTE':'BOITE', BOX:'BOITE', BO:'BOITE', CYLINDRE:'CYLINDRE', CYL:'CYLINDRE', DALLE:'DALLE', DA:'DALLE', SLAB:'DALLE', TOIT:'TOIT', TOITURE:'TOIT', TO:'TOIT', ROOF:'TOIT',
  POTEAU:'POTEAU', POT:'POTEAU', COLUMN:'POTEAU', POUTRE:'POUTRE', POU:'POUTRE', BEAM:'POUTRE', ESCALIER:'ESCALIER', ESC:'ESCALIER', STAIR:'ESCALIER',
  EXTRUSION:'EXTRUSION', EXT:'EXTRUSION', EXTRUDE:'EXTRUSION', NIVEAU:'NIVEAU', NIV:'NIVEAU', LEVEL:'NIVEAU', COPIERNIVEAU:'COPIERNIVEAU', CN:'COPIERNIVEAU',
  ELEVATION:'ELEVATION', 'ÉLÉVATION':'ELEVATION', ELEV:'ELEVATION', MATERIAU:'MATERIAU', 'MATÉRIAU':'MATERIAU', MAT:'MATERIAU', COULEUR:'COULEUR', COUL:'COULEUR', COLOR:'COULEUR',
  RDM:'RDM', ETUDIER:'RDM', 'ÉTUDIER':'RDM', CALCUL:'RDM',
  '3D':'VUE3D', VUE3D:'VUE3D', '2D':'VUE2D', VUE2D:'VUE2D', PLAN:'VUE2D', PARTAGE:'PARTAGE', 'PARTAGÉ':'PARTAGE', SPLIT:'PARTAGE', RENDU:'RENDU', REN:'RENDU', SOLEIL:'SOLEIL', SOL:'SOLEIL', ORBITE:'VUE3D'};
const NEEDSEL = ['DEPLACER','COPIER','ROTATION','MIROIR'];
const SELVAL = ['EXTRUSION','ELEVATION','MATERIAU','COULEUR'];
const MATLIST = () => Object.entries(A.V3D ? A.V3D.MATS : {}).map(([k, m], i) => [k, m.n, i + 1]);
const COLORS = {blanc:'#F7F5F0', beige:'#EFE3C8', sable:'#E2CFA8', creme:'#F3EBD9', gris:'#9AA3AD', anthracite:'#3E4650', noir:'#1E2228', rouge:'#B5372B', brique:'#B65A35', orange:'#E8752A', jaune:'#E9C46A', vert:'#4F8A4B', bleu:'#2F6FDB', ciel:'#8EB8DA', bois:'#8B5A2B', terre:'#A0522D', rose:'#E3A1A1'};
function prompt(){
  const c = C.cmd; if(!c) return '';
  const k = c.pts.length;
  switch(c.n){
    case 'LIGNE': case 'POLYLIGNE': return k ? 'Point suivant [Entrée = terminer, C = clore, U = annuler le dernier] :' : 'Premier point :';
    case 'MUR': return k ? `Point suivant (ép. ${fm(c.ep||C.ep)} m) [E = épaisseur, C = clore, Entrée = terminer] :` : `Premier point du mur (ép. ${fm(c.ep||C.ep)} m) [E = épaisseur] :`;
    case 'RECTANGLE': return k ? 'Coin opposé (ou @largeur,hauteur) :' : 'Premier coin :';
    case 'PIECE': return k === 0 ? 'Premier coin de la pièce :' : k === 1 ? 'Coin opposé :' : 'Nom de la pièce :';
    case 'CERCLE': return k ? 'Rayon (valeur ou point) :' : 'Centre :';
    case 'PORTE': return k === 0 ? 'Premier point de l\'ouverture (charnière) :' : k === 1 ? 'Second point (ou largeur, ex. 0.9) :' : 'Côté d\'ouverture (cliquer) :';
    case 'FENETRE': return k === 0 ? 'Premier point de la fenêtre :' : 'Second point (ou largeur, ex. 1.2) :';
    case 'COTE': return k === 0 ? 'Origine de la première ligne d\'attache :' : k === 1 ? 'Origine de la seconde ligne d\'attache :' : 'Position de la ligne de cote :';
    case 'TEXTE': return k ? 'Texte à écrire :' : `Point d'insertion (hauteur ${fm(C.th)} m) :`;
    case 'EFFACER': return 'Cliquez les objets à effacer [Entrée = terminer] :';
    case 'DEPLACER': case 'COPIER': return c.base ? (c.n === 'COPIER' ? 'Point de destination [Entrée = terminer] :' : 'Point de destination :') : (C.sel.size ? `Point de base (${C.sel.size} objet(s)) :` : 'Sélectionnez les objets puis Entrée :');
    case 'ROTATION': return c.base ? 'Angle de rotation (degrés) ou point :' : (C.sel.size ? 'Point de base :' : 'Sélectionnez les objets puis Entrée :');
    case 'MIROIR': return c.base ? 'Second point de l\'axe de symétrie :' : (C.sel.size ? 'Premier point de l\'axe :' : 'Sélectionnez les objets puis Entrée :');
    case 'EPAISSEUR': return `Nouvelle épaisseur de mur en m <${fm(C.ep)}> :`;
    case 'BOITE': return k === 0 ? 'Premier coin de la boîte :' : k === 1 ? 'Coin opposé (ou @longueur,largeur) :' : `Hauteur en m <${fm(C.ht)}> :`;
    case 'CYLINDRE': return k === 0 ? 'Centre du cylindre :' : k === 1 ? 'Rayon (valeur ou point) :' : `Hauteur en m <${fm(C.ht)}> :`;
    case 'DALLE': return k === 0 ? 'Premier coin de la dalle [S = depuis la sélection] :' : k === 1 ? 'Coin opposé :' : 'Épaisseur en m <0,20> :';
    case 'TOIT': if(!c.foot){ if(c.poly) return k ? 'Point suivant du contour [C ou Entrée = fermer, U = annuler le dernier] :' : 'Premier point du contour du toit :'; return k ? 'Coin opposé :' : 'Premier coin [Entrée = contour automatique des murs, S = pièces ou formes sélectionnées, P = contour point par point] :'; }
      return c.type ? `Pente en degrés <${c.type === '1 pan' ? 10 : 15}> :` : `Contour de ${c.foot.length} côtés, ${fm(polyArea(c.foot))} m². Type [2P = 2 pans, 4P = 4 pans (croupes), 1P = monopente, T = terrasse] <2P> :`;
    case 'POTEAU': return `Centre du poteau ${fm(C.pa*100).replace(',00','')}×${fm(C.pa*100).replace(',00','')} cm [S = section, Entrée = terminer] :`;
    case 'POUTRE': return k ? 'Point suivant [Entrée = terminer] :' : 'Premier point de la poutre (20 × 40 cm) :';
    case 'ESCALIER': return k === 0 ? 'Coin de départ (bas de l\'escalier) :' : k === 1 ? 'Coin opposé (l\'escalier monte dans le sens du plus grand côté) :' : `Hauteur à monter en m <${fm(C.ht + .2)}> :`;
    case 'EXTRUSION': return c.stage ? `Hauteur d'extrusion en m <${fm(C.ht)}> :` : 'Sélectionnez des rectangles, polylignes fermées, cercles ou pièces puis Entrée :';
    case 'ELEVATION': return c.stage ? 'Altitude de base z en m (ex. 3) :' : 'Sélectionnez les objets puis Entrée :';
    case 'MATERIAU': return c.stage ? 'Matériau (numéro ou nom) : ' + MATLIST().map(m => m[2] + ' ' + m[1]).join(', ') + ' :' : 'Sélectionnez les objets puis Entrée :';
    case 'COULEUR': return c.stage ? 'Couleur (#RRGGBB ou ' + Object.keys(COLORS).join(', ') + ') :' : 'Sélectionnez les objets puis Entrée :';
    case 'NIVEAU': return `Altitude du niveau de travail en m <${fm(C.lvz)}> (niveaux existants : ${levelsList().map(fm).join(' ; ')}) :`;
    case 'COPIERNIVEAU': return `Copier le niveau ${fm(C.lvz)} vers le haut de combien de mètres ? <3,00> :`;
    case 'RENDU': return 'Rendu 3D [R = réaliste, M = maquette blanche, F = filaire] :';
    case 'SOLEIL': return `Heure du soleil (6 à 18) <${C.r3d.hour}> :`;
    case 'HAUTEUR': return `Hauteur des murs pour le métré en m <${fm(C.ht)}> :`;
  }
  return '';
}
function log(t){ C.log.push(t); if(C.log.length > 60) C.log.shift(); const l = $('#cmdLog'); if(l){ l.textContent = C.log.slice(-6).join('\n'); l.scrollTop = l.scrollHeight; } }
function setTool(t){ cancel(); C.tool = t; const cv = $('#cv'); if(cv){ cv.classList.toggle('pan', t === 'pan'); cv.classList.toggle('sel', t === 'select'); } $$('[data-ctool]').forEach(b => b.classList.toggle('on', b.dataset.ctool === t)); }
function start(name){
  const n = ALIAS[String(name).toUpperCase().trim()];
  if(!n){ log(`Commande inconnue : « ${name} ». Tapez AIDE pour la liste.`); return; }
  log('Commande : ' + n);
  switch(n){
    case 'ANNULER': return undo();
    case 'RETABLIR': return redo();
    case 'ZE': return zoomExt();
    case 'ZOOM': return zoomExt();
    case 'ORTHO': C.ortho = !C.ortho; log('Ortho ' + (C.ortho ? 'activé' : 'désactivé')); return draw();
    case 'ACCROCHAGE': C.osnap = !C.osnap; log('Accrochage ' + (C.osnap ? 'activé' : 'désactivé')); return draw();
    case 'GRILLE': C.showGrid = !C.showGrid; return draw();
    case 'METRE': return showMetre();
    case 'ENREGISTRER': return save();
    case 'AIDE': return help();
    case 'NOUVEAU': return newDrawing();
    case 'TOUT': C.ents.forEach(e => C.sel.add(e.id)); log(C.sel.size + ' objet(s) sélectionné(s)'); return draw();
    case 'CALQUE': return toggleProps(true);
    case 'VUE3D': return setVmode(C.vmode === '3d' ? 'plan' : '3d');
    case 'VUE2D': return setVmode('plan');
    case 'PARTAGE': return setVmode('split');
    case 'RDM': return studyBeam();
  }
  if(SELVAL.includes(n)){ C.cmd = {n, pts:[], stage:C.sel.size ? 1 : 0}; C.lastCmd = n; C.tool = 'cmd'; log(prompt()); return draw(); }
  if(n === 'EFFACER' && C.sel.size){ pushHist(); const k = C.sel.size; C.ents = C.ents.filter(e => !C.sel.has(e.id)); C.sel.clear(); log(k + ' objet(s) effacé(s)'); return draw(); }
  C.cmd = {n, pts:[], ep:C.ep}; C.lastCmd = n; C.tool = 'cmd';
  $$('[data-ctool]').forEach(b => b.classList.toggle('on', b.dataset.ctool === n));
  log(prompt()); draw();
}
function cancel(){ if(C && C.cmd){ log('*Annulé*'); } if(C){ C.cmd = null; C.tool = 'select'; C.win = null; $$('[data-ctool]').forEach(b => b.classList.toggle('on', b.dataset.ctool === 'select')); } }
function finish(){
  const c = C.cmd; if(!c) return;
  if(SELVAL.includes(c.n) && !c.stage){ if(C.sel.size){ c.stage = 1; log(prompt()); return draw(); } log('Aucun objet sélectionné'); }
  if(c.n === 'POLYLIGNE' && c.pts.length >= 2){ pushHist(); addEnt({t:'poly', pts:c.pts.map(p=>p.slice()), closed:false}); }
  if(['DEPLACER','COPIER','ROTATION','MIROIR'].includes(c.n) && !c.base && C.sel.size){ log(prompt()); return draw(); }
  C.cmd = null; C.tool = 'select'; $$('[data-ctool]').forEach(b => b.classList.toggle('on', b.dataset.ctool === 'select')); draw();
}
const rot = (q, b, a) => { const dx = q[0]-b[0], dy = q[1]-b[1]; return [b[0] + dx*Math.cos(a) - dy*Math.sin(a), b[1] + dx*Math.sin(a) + dy*Math.cos(a)]; };
function mirror(q, a, b){ const dx = b[0]-a[0], dy = b[1]-a[1], L2 = dx*dx+dy*dy || 1, t = ((q[0]-a[0])*dx + (q[1]-a[1])*dy)/L2, px = a[0]+t*dx, py = a[1]+t*dy; return [2*px-q[0], 2*py-q[1]]; }

/* reçoit un point (clic ou saisie) */
function point(p){
  const c = C.cmd; if(!c) return;
  const k = c.pts.length, last = c.pts[k-1];
  switch(c.n){
    case 'LIGNE': if(last && dist(last,p) > 1e-6){ pushHist(); addEnt({t:'line', x1:last[0], y1:last[1], x2:p[0], y2:p[1]}); } c.pts.push(p); break;
    case 'MUR': if(last && dist(last,p) > 1e-6){ pushHist(); addEnt({t:'wall', x1:last[0], y1:last[1], x2:p[0], y2:p[1], ep:c.ep||C.ep}); } c.pts.push(p); break;
    case 'POLYLIGNE': c.pts.push(p); break;
    case 'RECTANGLE': if(k){ pushHist(); addEnt({t:'rect', x1:last[0], y1:last[1], x2:p[0], y2:p[1]}); C.cmd = null; } else c.pts.push(p); break;
    case 'PIECE': if(k === 0) c.pts.push(p); else if(k === 1){ c.pts.push(p); log(prompt()); } break;
    case 'CERCLE': if(k){ pushHist(); addEnt({t:'circle', cx:last[0], cy:last[1], r:r3(dist(last,p))}); C.cmd = null; } else c.pts.push(p); break;
    case 'FENETRE': if(k){ pushHist(); addEnt({t:'win', x1:last[0], y1:last[1], x2:p[0], y2:p[1], ep:wallEpAt(last)}); C.cmd = null; } else c.pts.push(p); break;
    case 'PORTE': if(k < 2) c.pts.push(p); else { const e = {t:'door', x1:c.pts[0][0], y1:c.pts[0][1], x2:c.pts[1][0], y2:c.pts[1][1], ep:wallEpAt(c.pts[0])}; const n = normal(e); e.sw = ((p[0]-e.x1)*n[0] + (p[1]-e.y1)*n[1]) >= 0 ? 1 : -1; pushHist(); addEnt(e); C.cmd = null; } break;
    case 'COTE': if(k < 2) c.pts.push(p); else { const e = {t:'dim', x1:c.pts[0][0], y1:c.pts[0][1], x2:c.pts[1][0], y2:c.pts[1][1]}; const n = normal(e); e.off = r3((p[0]-e.x1)*n[0] + (p[1]-e.y1)*n[1]); pushHist(); addEnt(e); C.cmd = null; } break;
    case 'TEXTE': if(!k){ c.pts.push(p); log(prompt()); } break;
    case 'BOITE': case 'DALLE': case 'ESCALIER': if(k < 2){ c.pts.push(p); if(k === 1) log(prompt()); } break;
    case 'TOIT': if(c.foot) break; c.pts.push(p); if(!c.poly && c.pts.length === 2){ c.foot = ccwPoly(rectPts(c.pts[0], c.pts[1])); c.z = r3(C.lvz + C.ht); log(prompt()); } break;
    case 'CYLINDRE': if(k === 0) c.pts.push(p); else if(k === 1){ c.r = r3(dist(c.pts[0], p)); c.pts.push(p); log(prompt()); } break;
    case 'POTEAU': pushHist(); addEnt({t:'post', cx:p[0], cy:p[1], a:C.pa, h:r3(C.ht)}); log('Poteau placé en ' + fm(p[0]) + ' ; ' + fm(p[1])); break;
    case 'POUTRE': if(last && dist(last,p) > 1e-6){ pushHist(); addEnt({t:'beam', x1:last[0], y1:last[1], x2:p[0], y2:p[1], b:.2, hb:.4, z:r3(C.lvz + C.ht - .4)}); } c.pts.push(p); break;
    case 'EXTRUSION': case 'ELEVATION': case 'MATERIAU': case 'COULEUR': if(!c.stage){ const e = pick(toS(p)); if(e){ if(C.sel.has(e.id)) C.sel.delete(e.id); else C.sel.add(e.id); log(C.sel.size + ' objet(s) sélectionné(s)'); } } break;
    case 'EFFACER': { const e = pick(toS(p)); if(e){ pushHist(); C.ents = C.ents.filter(x => x !== e); log('1 objet effacé'); } break; }
    case 'DEPLACER': case 'COPIER':
      if(!C.sel.size){ const e = pick(toS(p)); if(e){ C.sel.add(e.id); } break; }
      if(!c.base){ c.base = p; c.pts.push(p); break; }
      { const d = [p[0]-c.base[0], p[1]-c.base[1]]; pushHist();
        if(c.n === 'DEPLACER'){ C.ents = C.ents.map(e => C.sel.has(e.id) ? Object.assign(transform(e, q=>[q[0]+d[0], q[1]+d[1]]), {id:e.id}) : e); C.cmd = null; log('Objets déplacés'); }
        else { C.ents.filter(e => C.sel.has(e.id)).forEach(e => { const n = transform(e, q=>[q[0]+d[0], q[1]+d[1]]); n.id = nid(); C.ents.push(n); }); log('Objets copiés'); } }
      break;
    case 'ROTATION':
      if(!C.sel.size){ const e = pick(toS(p)); if(e) C.sel.add(e.id); break; }
      if(!c.base){ c.base = p; c.pts.push(p); break; }
      doRotate(Math.atan2(p[1]-c.base[1], p[0]-c.base[0])); break;
    case 'MIROIR':
      if(!C.sel.size){ const e = pick(toS(p)); if(e) C.sel.add(e.id); break; }
      if(!c.base){ c.base = p; c.pts.push(p); break; }
      pushHist(); C.ents.filter(e => C.sel.has(e.id)).forEach(e => { const n = transform(e, q=>mirror(q, c.base, p)); n.id = nid(); if(n.t === 'door') n.sw = -(n.sw||1); C.ents.push(n); }); C.cmd = null; log('Symétrie créée'); break;
  }
  C.last = p; draw();
}
function doRotate(a){ const c = C.cmd; pushHist(); C.ents = C.ents.map(e => C.sel.has(e.id) ? Object.assign(transform(e, q=>rot(q, c.base, a)), {id:e.id}) : e); C.cmd = null; log('Rotation de ' + F(a*180/Math.PI,1) + '°'); draw(); }
function wallEpAt(p){ const w = C.ents.filter(e => e.t === 'wall').find(e => segDist(p, [e.x1,e.y1],[e.x2,e.y2]) <= e.ep/2 + .05); return w ? w.ep : C.ep; }

/* RDM : étudie une poutre, une ligne ou un mur sélectionné dans le solveur guidé */
function studyBeam(){
  const e = C.ents.find(x => C.sel.has(x.id) && ['beam', 'line', 'wall'].includes(x.t));
  if(!e){ log('RDM : sélectionnez d\'abord une poutre, une ligne ou un mur, puis tapez RDM.'); return; }
  const L = Math.round(dist([e.x1, e.y1], [e.x2, e.y2])*100)/100;
  if(!(L > .2)){ log('Élément trop court pour une étude de poutre.'); return; }
  log(`Étude RDM d'une poutre de ${F(L, 2)} m : ouverture du solveur guidé`);
  A.go(A.SOL.link(e.t === 'beam' ? 'ba-poutre' : 'poutre', {L, appuis:[{x:0, t:'A'}, {x:L, t:'S'}], ch:[{t:'q', a:0, b:L, g:e.t === 'beam' ? 15 : 10, q:e.t === 'beam' ? 5 : 0}], comb:e.t === 'beam' ? 'ELU' : 'brut', b:Math.round((e.b || .2)*100), h:Math.round((e.hb || .4)*100)}, 'guide'));
}

/* saisie au clavier dans la ligne de commande */
function typed(raw){
  const t = String(raw).trim(); const c = C.cmd;
  if(!c){ if(!t){ if(C.lastCmd) start(C.lastCmd); return; } return start(t); }
  const U = t.toUpperCase();
  if(!t){ if(c.n === 'PIECE' && c.pts.length === 2) return mkRoom('Pièce'); if(c.n === 'TEXTE' && c.pts.length) return;
    if(['BOITE','CYLINDRE','DALLE','ESCALIER'].includes(c.n) && c.pts.length === 2) return make3d(c, null);
    if(c.n === 'TOIT'){ if(!c.foot){ if(c.poly) return roofClose(c); if(!c.pts.length) return roofAuto(c); return; } if(!c.type){ c.type = '2 pans'; log(prompt()); return draw(); } return make3d(c, null); }
    if(c.n === 'NIVEAU' || c.n === 'RENDU' || c.n === 'SOLEIL'){ C.cmd = null; return draw(); }
    if(c.n === 'COPIERNIVEAU') return copyLevel(3);
    if(SELVAL.includes(c.n) && c.stage){ if(c.n === 'EXTRUSION') return selVal(c, String(C.ht), String(C.ht)); C.cmd = null; return draw(); }
    return finish(); }
  // options des commandes 3D
  const num = () => parseFloat(t.replace(',','.'));
  if(['BOITE','CYLINDRE','DALLE','ESCALIER'].includes(c.n) && c.pts.length === 2) return make3d(c, isNaN(num()) ? null : num());
  if(c.n === 'TOIT' && !c.foot){
    if(!c.pts.length && (U === 'S' || U === 'SEL')) return roofFromSel(c);
    if(!c.pts.length && (U === 'A' || U === 'AUTO')) return roofAuto(c);
    if(!c.pts.length && U === 'P'){ c.poly = true; log(prompt()); return draw(); }
    if(c.poly && U === 'C') return roofClose(c);
    if(c.poly && U === 'U'){ c.pts.pop(); return draw(); }
  }
  if(c.n === 'TOIT' && c.foot){
    if(!c.type){ const T = {'2P':'2 pans', '2':'2 pans', '4P':'4 pans', '4':'4 pans', '1P':'1 pan', '1':'1 pan', 'T':'terrasse'}[U]; if(!T){ log('Type inconnu : tapez 2P, 4P, 1P ou T'); return; } c.type = T; if(T === 'terrasse') return make3d(c, 0); log(prompt()); return draw(); }
    return make3d(c, isNaN(num()) ? null : num());
  }
  if(c.n === 'DALLE' && !c.pts.length && U === 'S') return slabFromSel();
  if(c.n === 'POTEAU' && U.startsWith('S')){ const v = parseFloat(U.slice(1).replace(',','.')); if(v > 0){ C.pa = v > 2 ? v/100 : v; log('Section des poteaux : ' + fm(C.pa*100) + ' cm'); } else log('Tapez S suivi de la section, ex. S25 ou S0.25'); return draw(); }
  if(c.n === 'CYLINDRE' && c.pts.length === 1 && /^[\d.,]+$/.test(t)){ c.r = num(); c.pts.push(c.pts[0]); log(prompt()); return draw(); }
  if(SELVAL.includes(c.n) && c.stage) return selVal(c, t, U);
  if(c.n === 'NIVEAU'){ const v = num(); if(!isNaN(v)){ C.lvz = v; C.sel.clear(); log('Niveau de travail : ' + fm(v) + ' m'); } C.cmd = null; return draw(); }
  if(c.n === 'COPIERNIVEAU'){ return copyLevel(isNaN(num()) ? 3 : num()); }
  if(c.n === 'RENDU'){ const m = {R:'reel', M:'maquette', F:'filaire'}[U[0]]; if(m){ C.r3d.mode = m; log('Rendu : ' + m); upd3d(true); } C.cmd = null; return draw(); }
  if(c.n === 'SOLEIL'){ const v = num(); if(v >= 6 && v <= 18){ C.r3d.hour = v; if(V3) V3.setSun(v); log('Soleil : ' + v + ' h'); } C.cmd = null; return draw(); }
  // options
  if(c.n === 'TEXTE' && c.pts.length){ pushHist(); addEnt({t:'text', x:c.pts[0][0], y:c.pts[0][1], s:C.th, txt:t}); C.cmd = null; log('Texte ajouté'); return draw(); }
  if(c.n === 'PIECE' && c.pts.length === 2) return mkRoom(t);
  if(c.n === 'EPAISSEUR'){ const v = parseFloat(t.replace(',','.')); if(v > 0){ C.ep = v; log('Épaisseur des murs : ' + fm(v) + ' m'); } C.cmd = null; return draw(); }
  if(c.n === 'HAUTEUR'){ const v = parseFloat(t.replace(',','.')); if(v > 0){ C.ht = v; log('Hauteur des murs : ' + fm(v) + ' m'); } C.cmd = null; return draw(); }
  if(c.n === 'MUR' && (U === 'E' || U.startsWith('E '))){ const v = parseFloat(U.slice(1).replace(',','.')); if(v > 0){ c.ep = v; C.ep = v; log('Épaisseur : ' + fm(v) + ' m'); } else { c.askEp = true; log('Tapez l\'épaisseur (ex. 0.15) :'); } return draw(); }
  if(c.askEp){ const v = parseFloat(t.replace(',','.')); if(v > 0){ c.ep = v; C.ep = v; log('Épaisseur : ' + fm(v) + ' m'); } c.askEp = false; return draw(); }
  if((c.n === 'LIGNE' || c.n === 'MUR' || c.n === 'POLYLIGNE') && U === 'C' && c.pts.length >= 3){ if(c.n === 'POLYLIGNE'){ pushHist(); addEnt({t:'poly', pts:c.pts.map(p=>p.slice()), closed:true}); C.cmd = null; return draw(); } point(c.pts[0]); return finish(); }
  if((c.n === 'LIGNE' || c.n === 'MUR' || c.n === 'POLYLIGNE') && U === 'U' && c.pts.length){ if(c.n !== 'POLYLIGNE' && c.pts.length > 1) undo(); c.pts.pop(); return draw(); }
  if(c.n === 'ROTATION' && c.base && /^-?[\d.,]+$/.test(t)) return doRotate(parseFloat(t.replace(',','.'))*Math.PI/180);
  if(c.n === 'CERCLE' && c.pts.length === 1 && /^[\d.,]+$/.test(t)){ pushHist(); addEnt({t:'circle', cx:c.pts[0][0], cy:c.pts[0][1], r:parseFloat(t.replace(',','.'))}); C.cmd = null; return draw(); }
  const p = parsePt(t);
  if(!p){ log('Point ou option non valide : ' + t); return; }
  point(p);
}
function roofSet(c, r, how){
  if(!r || r.pts.length < 3){ log('Contour introuvable : ' + how); return draw(); }
  c.foot = r.pts; c.z = r.z ?? r3(C.lvz + C.ht); c.pts = []; c.poly = false; log(prompt()); draw();
}
function roofAuto(c){
  const lv = C.ents.filter(e => layer(e.layer).v && belongs(e));
  roofSet(c, autoOutline(lv), 'dessinez d\'abord des murs (MUR) ou des pièces sur ce niveau, ou cliquez deux coins, ou tapez P.');
}
function roofFromSel(c){
  const src = C.ents.filter(e => C.sel.has(e.id) && (['room','slab','rect','box','wall'].includes(e.t) || (e.t === 'poly' && e.closed)));
  if(!src.length){ log('Sélectionnez d\'abord les pièces, rectangles, polylignes fermées ou murs à couvrir.'); return draw(); }
  if(src.length === 1 && src[0].t !== 'wall'){ const e = src[0]; return roofSet(c, {pts:ccwPoly(cleanPoly(e.pts || rectPts([e.x1,e.y1],[e.x2,e.y2]))).map(p => p.map(r3)), z:r3((e.z ?? C.lvz) + (e.t === 'box' ? (e.h || C.ht) : C.ht))}, ''); }
  roofSet(c, autoOutline(src), 'sélection non fermée.');
}
function roofClose(c){
  if(c.pts.length < 3){ log('Il faut au moins 3 points pour fermer le contour'); return; }
  const P = ccwPoly(cleanPoly(c.pts.map(p => p.slice())));
  if(P.length < 3 || polyArea(P) < .05){ log('Contour trop petit'); return; }
  roofSet(c, {pts:P.map(p => p.map(r3)), z:r3(C.lvz + C.ht)}, '');
}
function make3d(c, v){
  const [a, b] = c.pts; pushHist();
  if(c.n === 'BOITE'){ addEnt({t:'box', x1:a[0], y1:a[1], x2:b[0], y2:b[1], h:r3(v || C.ht)}); log('Boîte créée (h = ' + fm(v || C.ht) + ' m)'); }
  if(c.n === 'CYLINDRE'){ addEnt({t:'cyl', cx:a[0], cy:a[1], r:c.r || .2, h:r3(v || C.ht)}); log('Cylindre créé'); }
  if(c.n === 'DALLE'){ const ep = v || .2; addEnt({t:'slab', pts:rectPts(a, b).map(q => q.map(r3)), z:r3(C.lvz + C.ht), h:r3(ep)}); log('Dalle créée à +' + fm(C.lvz + C.ht) + ' (ép. ' + fm(ep) + ' m)'); }
  if(c.n === 'ESCALIER'){ addEnt({t:'stair', x1:a[0], y1:a[1], x2:b[0], y2:b[1], H:r3(v || C.ht + .2)}); log('Escalier créé (' + Math.round((v || C.ht + .2)/.17) + ' marches)'); }
  if(c.n === 'TOIT'){ const e = addEnt({t:'roof', pts:c.foot.map(q => q.map(r3)), z:c.z ?? r3(C.lvz + C.ht), type:c.type, pente:c.type === 'terrasse' ? 2 : (v || (c.type === '1 pan' ? 10 : 15)), deb:c.type === 'terrasse' ? 0 : .5, sens:'auto'}); const G = roofGeo(e);
    log('Toiture ' + c.type + ' créée : ' + fm(G.area) + ' m² de couverture' + (G.ridge ? ', faîtage ' + fm(G.ridge) + ' m' : '') + (G.valley ? ', noues ' + fm(G.valley) + ' m' : '') + (G.ortho ? '' : ' (murs en biais : contour approché en escalier)')); }
  C.cmd = null; draw();
}
function slabFromSel(){
  const src = C.ents.filter(e => C.sel.has(e.id) && (e.t === 'rect' || e.t === 'room' || (e.t === 'poly' && e.closed)));
  if(!src.length){ log('Sélectionnez d\'abord un rectangle, une pièce ou une polyligne fermée'); C.cmd = null; return draw(); }
  pushHist(); src.forEach(e => addEnt({t:'slab', pts:(e.t === 'rect' ? rectPts([e.x1,e.y1],[e.x2,e.y2]) : e.pts).map(q => q.map(r3)), z:r3((e.z ?? C.lvz) + C.ht), h:.2}));
  log(src.length + ' dalle(s) créée(s)'); C.cmd = null; draw();
}
function selVal(c, t, U){
  const sel = C.ents.filter(e => C.sel.has(e.id)); if(!sel.length){ C.cmd = null; return draw(); }
  const v = parseFloat(t.replace(',','.'));
  if(c.n === 'EXTRUSION'){ if(!(v > 0)){ log('Hauteur non valide'); return; } pushHist(); let k = 0; sel.forEach(e => { if(['rect','poly','circle','room','box','cyl','slab'].includes(e.t)){ e.h = r3(v); if(e.z == null) e.z = C.lvz; k++; } }); log(k + ' objet(s) extrudé(s) sur ' + fm(v) + ' m'); }
  if(c.n === 'ELEVATION'){ if(isNaN(v)){ log('Altitude non valide'); return; } pushHist(); sel.forEach(e => e.z = r3(v)); log(sel.length + ' objet(s) placé(s) à z = ' + fm(v)); }
  if(c.n === 'MATERIAU'){ const L = MATLIST(), m = L.find(x => String(x[2]) === t || x[0] === t.toLowerCase() || x[1].toLowerCase().startsWith(t.toLowerCase())); if(!m){ log('Matériau inconnu'); return; } pushHist(); sel.forEach(e => e.mat = m[0]); log('Matériau « ' + m[1] + ' » appliqué à ' + sel.length + ' objet(s)'); }
  if(c.n === 'COULEUR'){ const col = /^#[0-9a-f]{6}$/i.test(t) ? t : COLORS[t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')]; if(!col){ log('Couleur inconnue'); return; } pushHist(); sel.forEach(e => e.col = col); log('Couleur ' + col + ' appliquée'); }
  C.cmd = null; draw();
}
function levelsList(){ return [...new Set([0, C.lvz, ...C.ents.filter(e => e.t === 'wall' || e.t === 'room').map(e => r3(e.z ?? 0))])].sort((a,b) => a - b); }
function copyLevel(d){
  const src = C.ents.filter(e => Math.abs((e.z ?? 0) - C.lvz) < .05 && ['wall','door','win','room','post','beam','box','cyl','stair'].includes(e.t) || (e.t === 'slab' && Math.abs((e.z ?? 0) - (C.lvz + C.ht)) < .3));
  if(!src.length){ log('Rien à copier sur ce niveau'); C.cmd = null; return draw(); }
  pushHist(); src.forEach(e => { const n = JSON.parse(JSON.stringify(e)); n.id = nid(); n.z = r3((e.z ?? 0) + d); C.ents.push(n); });
  const roofs = C.ents.filter(e => e.t === 'roof' && Math.abs((e.z ?? 0) - (C.lvz + C.ht)) < .4); roofs.forEach(e => e.z = r3((e.z ?? 0) + d));
  C.lvz = r3(C.lvz + d); C.sel.clear(); log(src.length + ' objets copiés' + (roofs.length ? ', toiture remontée' : '') + ' ; niveau de travail : ' + fm(C.lvz) + ' m'); C.cmd = null; draw();
}
function mkRoom(name){ const c = C.cmd; pushHist(); addEnt({t:'room', pts:rectPts(c.pts[0], c.pts[1]).map(p=>p.map(r3)), name}); C.cmd = null; log('Pièce « ' + name + ' » créée'); draw(); }
function parsePt(t){
  const c = C.cmd, last = c && c.pts[c.pts.length-1];
  t = t.replace(/\s+/g, '');
  let m;
  if((m = t.match(/^@(-?[\d.]+)<(-?[\d.]+)$/)) && last){ const d = +m[1], a = +m[2]*Math.PI/180; return [r3(last[0] + d*Math.cos(a)), r3(last[1] + d*Math.sin(a))]; }
  if((m = t.match(/^@(-?[\d.]+)[,;](-?[\d.]+)$/))){ const b = last || [0,0]; return [r3(b[0] + +m[1]), r3(b[1] + +m[2])]; }
  if((m = t.match(/^(-?[\d.]+)<(-?[\d.]+)$/))){ const d = +m[1], a = +m[2]*Math.PI/180; return [r3(d*Math.cos(a)), r3(d*Math.sin(a))]; }
  if((m = t.match(/^(-?[\d.]+)[,;](-?[\d.]+)$/))) return [+m[1], +m[2]];
  if((m = t.match(/^(-?[\d]+(?:[.,][\d]+)?)$/)) && last){
    const d = parseFloat(m[1].replace(',','.')); const cur = C.snapPt || [C.mouse.x, C.mouse.y];
    let dx = cur[0]-last[0], dy = cur[1]-last[1];
    if(C.ortho){ if(Math.abs(dx) >= Math.abs(dy)) dy = 0; else dx = 0; }
    const L = Math.hypot(dx, dy) || 1; if(!dx && !dy) dx = 1;
    return [r3(last[0] + dx/L*d), r3(last[1] + dy/L*d)];
  }
  return null;
}
function pick(sp){ const w = toW(sp[0], sp[1]), tol = 6 / C.view.s; const vis = C.ents.filter(e => layer(e.layer).v && belongs(e)); for(let i = vis.length-1; i >= 0; i--){ if(vis[i].t !== 'room' && hit(vis[i], w, tol)) return vis[i]; } for(let i = vis.length-1; i >= 0; i--){ if(hit(vis[i], w, tol)) return vis[i]; } return null; }

/* ---------- zoom ---------- */
function zoomExt(){
  const b = bboxOf(C.ents.filter(e => layer(e.layer).v));
  if(!b){ C.view = {ox:80, oy:vh-80, s:40}; return draw(); }
  const w = Math.max(1, b.x1-b.x0), h = Math.max(1, b.y1-b.y0), s = Math.min((vw-80)/w, (vh-80)/h);
  C.view.s = Math.max(4, Math.min(400, s)); C.view.ox = (vw - w*C.view.s)/2 - b.x0*C.view.s; C.view.oy = (vh + h*C.view.s)/2 + b.y0*C.view.s; draw();
}
function zoomAt(sx, sy, f){ const w = toW(sx, sy); C.view.s = Math.max(2, Math.min(800, C.view.s*f)); C.view.ox = sx - w[0]*C.view.s; C.view.oy = sy + w[1]*C.view.s; draw(); }

/* ---------- panneau des propriétés ---------- */
function props(){
  const box = $('#cprops'); if(!box) return;
  const sel = C.ents.filter(e => C.sel.has(e.id));
  const NAMES = {line:'Ligne', wall:'Mur', rect:'Rectangle', circle:'Cercle', poly:'Polyligne', room:'Pièce', door:'Porte', win:'Fenêtre', dim:'Cotation', text:'Texte', box:'Boîte', cyl:'Cylindre', slab:'Dalle', post:'Poteau', beam:'Poutre', roof:'Toiture', stair:'Escalier'};
  let selHtml = '';
  if(sel.length === 1){
    const e = sel[0];
    const L = 'x1' in e ? dist([e.x1,e.y1],[e.x2,e.y2]) : 0;
    selHtml = `<h4>${NAMES[e.t]}</h4><div class="blk">
      <label class="fld"><span>Calque</span><select class="inp" data-pe="layer">${C.layers.map(l=>`<option value="${l.id}" ${l.id===e.layer?'selected':''}>${esc(l.n)}</option>`).join('')}</select></label>
      ${'x1' in e ? `<div class="mlist"><div><span>Longueur</span><b>${fm(L)} m</b></div><div><span>Angle</span><b>${F((Math.atan2(e.y2-e.y1,e.x2-e.x1)*180/Math.PI+360)%360,1)}°</b></div></div>` : ''}
      ${e.t === 'wall' ? `<label class="fld"><span>Épaisseur (m)</span><input class="inp" type="number" step="0.01" data-pe="ep" value="${e.ep}"></label>` : ''}
      ${e.t === 'door' ? `<button class="btn b-line b-sm" data-cact="flip">${ic('refresh')}Inverser le sens d'ouverture</button>` : ''}
      ${e.t === 'text' ? `<label class="fld"><span>Texte</span><input class="inp" data-pe="txt" value="${esc(e.txt)}"></label><label class="fld"><span>Hauteur (m)</span><input class="inp" type="number" step="0.05" data-pe="s" value="${e.s}"></label>` : ''}
      ${e.t === 'room' ? `<label class="fld"><span>Nom</span><input class="inp" data-pe="name" value="${esc(e.name||'')}"></label><div class="mlist"><div><span>Surface</span><b>${fm(polyArea(e.pts))} m²</b></div><div><span>Périmètre</span><b>${fm(polyPer(e.pts))} m</b></div></div>` : ''}
      ${e.t === 'circle' ? `<label class="fld"><span>Rayon (m)</span><input class="inp" type="number" step="0.05" data-pe="r" value="${e.r}"></label>` : ''}
      ${e.t === 'dim' ? `<label class="fld"><span>Décalage (m)</span><input class="inp" type="number" step="0.1" data-pe="off" value="${e.off}"></label>` : ''}
      ${props3d(e)}
      <button class="btn b-line b-sm" data-cact="delsel">${ic('trash')}Effacer</button></div>`;
  }else if(sel.length > 1){
    selHtml = `<h4>Sélection</h4><div class="blk"><div class="mlist"><div><span>Objets sélectionnés</span><b>${sel.length}</b></div></div><label class="fld"><span>Mettre sur le calque</span><select class="inp" data-pe="layer"><option value="">—</option>${C.layers.map(l=>`<option value="${l.id}">${esc(l.n)}</option>`).join('')}</select></label><button class="btn b-line b-sm" data-cact="delsel">${ic('trash')}Effacer la sélection</button></div>`;
  }
  const W = C.ents.filter(e => e.t === 'wall'), Lw = W.reduce((a,e)=>a+dist([e.x1,e.y1],[e.x2,e.y2]),0), R = C.ents.filter(e => e.t === 'room'), Sr = R.reduce((a,e)=>a+polyArea(e.pts),0);
  box.innerHTML = selHtml + `<h4>Calques</h4><div class="blk">${C.layers.map(l=>`<div class="layer ${l.id===C.cur?'cur':''}" data-clayer="${l.id}"><button data-clvis="${l.id}" title="Afficher / masquer">${ic(l.v?'eye':'eyeoff')}</button><i style="background:${l.c}"></i><span>${esc(l.n)}</span><span class="small" style="color:#6F86A3">${C.ents.filter(e=>e.layer===l.id).length}</span></div>`).join('')}
    <label class="check" style="font-size:12.5px;color:#8EA1B8"><input type="checkbox" data-cauto ${C.auto?'checked':''}>Calque automatique selon l'objet</label></div>
   <h4>Paramètres</h4><div class="blk"><div class="g2"><label class="fld"><span>Ép. murs (m)</span><input class="inp" type="number" step="0.01" data-cp="ep" value="${C.ep}"></label><label class="fld"><span>Hauteur (m)</span><input class="inp" type="number" step="0.05" data-cp="ht" value="${C.ht}"></label></div>
    <div class="g2"><label class="fld"><span>Pas de grille (m)</span><select class="inp" data-cp="grid">${[0.01,0.05,0.1,0.25,0.5,1].map(g=>`<option ${g===C.grid?'selected':''}>${g}</option>`).join('')}</select></label><label class="fld"><span>Texte (m)</span><input class="inp" type="number" step="0.05" data-cp="th" value="${C.th}"></label></div></div>
   <h4>Métré instantané</h4><div class="blk"><div class="mlist"><div><span>Murs (longueur)</span><b>${fm(Lw)} m</b></div><div><span>Murs (surface brute)</span><b>${fm(Lw*C.ht)} m²</b></div><div><span>Pièces (${R.length})</span><b>${fm(Sr)} m²</b></div><div><span>Portes / fenêtres</span><b>${C.ents.filter(e=>e.t==='door').length} / ${C.ents.filter(e=>e.t==='win').length}</b></div></div><button class="btn b-line b-sm" data-cact="metre">${ic('calc')}Métré détaillé du plan</button></div>`;
}
const DEFMAT = {wall:['enduit','#EFE6D6'], room:['carrelage','#E3DCCD'], box:['enduit','#E9E1D3'], cyl:['enduit','#E9E1D3'], slab:['enduit','#F4F1EA'], post:['beton','#B9B4AA'], beam:['beton','#B9B4AA'], roof:['tole','#6C7A89'], stair:['carrelage','#D9D2C4'], door:['bois','#7A4E2D'], win:['alu','#CBD1D8'], rect:['enduit','#E9E1D3'], poly:['enduit','#E9E1D3'], circle:['enduit','#E9E1D3']};
function props3d(e){
  if(['line','dim','text'].includes(e.t)) return '';
  const H = {wall:['h','Hauteur du mur (m)', C.ht], door:['h','Hauteur de la porte (m)', 2.2], win:['h','Hauteur du vitrage (m)', 1.2], room:['h','Hauteur du volume (0 = sol seul)', 0], box:['h','Hauteur (m)', C.ht], cyl:['h','Hauteur (m)', C.ht], slab:['h','Épaisseur (m)', .2], post:['h','Hauteur (m)', C.ht], beam:['hb','Retombée totale (m)', .4], stair:['H','Hauteur à monter (m)', C.ht + .2], rect:['h','Extrusion (m)', 0], poly:['h','Extrusion (m)', 0], circle:['h','Extrusion (m)', 0], roof:['pente','Pente (°)', 15]}[e.t];
  const d = DEFMAT[e.t] || ['enduit','#dddddd'], mats = A.V3D ? A.V3D.MATS : {};
  return `<div class="g2"><label class="fld"><span>Altitude z (m)</span><input class="inp" type="number" step="0.05" data-pe="z" value="${e.z ?? 0}"></label>${H ? `<label class="fld"><span>${H[1]}</span><input class="inp" type="number" step="0.05" data-pe="${H[0]}" value="${e[H[0]] ?? H[2]}"></label>` : ''}</div>
   ${e.t === 'win' ? `<label class="fld"><span>Allège (m)</span><input class="inp" type="number" step="0.05" data-pe="sill" value="${e.sill ?? 1}"></label>` : ''}
   ${e.t === 'post' ? `<label class="fld"><span>Section (m)</span><input class="inp" type="number" step="0.05" data-pe="a" value="${e.a}"></label>` : ''}
   ${e.t === 'beam' ? `<label class="fld"><span>Largeur (m)</span><input class="inp" type="number" step="0.05" data-pe="b" value="${e.b ?? .2}"></label>` : ''}
   ${e.t === 'roof' ? roofProps(e) : ''}
   <div class="g2"><label class="fld"><span>Matériau 3D</span><select class="inp" data-pe="mat">${Object.entries(mats).map(([k, m]) => `<option value="${k}" ${(e.mat || d[0]) === k ? 'selected' : ''}>${esc(m.n)}</option>`).join('')}</select></label><label class="fld"><span>Couleur</span><input class="inp" type="color" data-pe="col" value="${e.col || d[1]}" style="height:34px;padding:2px"></label></div>`;
}
function roofProps(e){
  const G = roofGeo(e), opt = (k, L) => L.map(([v, n]) => `<option value="${v}" ${String(e[k] ?? L[0][0]) === v ? 'selected' : ''}>${n}</option>`).join('');
  return `<div class="g2"><label class="fld"><span>Type</span><select class="inp" data-pe="type">${['2 pans','4 pans','1 pan','terrasse'].map(t => `<option ${t === e.type ? 'selected' : ''}>${t}</option>`).join('')}</select></label><label class="fld"><span>Débord (m)</span><input class="inp" type="number" step="0.1" data-pe="deb" value="${e.deb ?? .5}"></label></div>
   ${G.type === 'terrasse' ? `<label class="fld"><span>Acrotère (m)</span><input class="inp" type="number" step="0.05" data-pe="acro" value="${e.acro ?? .6}"></label>`
     : `<div class="g2"><label class="fld"><span>${G.type === '1 pan' ? 'Égout parallèle à' : 'Faîtage principal'}</span><select class="inp" data-pe="sens">${opt('sens', [['auto','Automatique'],['x','l\'axe X du bâtiment'],['y','l\'axe Y du bâtiment']])}</select></label>${G.type === '1 pan' ? `<label class="fld"><span>Sens de la pente</span><select class="inp" data-pe="inv">${opt('inv', [['0','Normal'],['1','Inversé']])}</select></label>` : ''}</div>`}
   <div class="mlist"><div><span>Contour</span><b>${G.foot.length} côtés</b></div><div><span>Surface couverte</span><b>${fm(G.area)} m²</b></div>${G.ridge ? `<div><span>Faîtage</span><b>${fm(G.ridge)} m</b></div>` : ''}${G.hip ? `<div><span>Arêtiers</span><b>${fm(G.hip)} m</b></div>` : ''}${G.valley ? `<div><span>Noues</span><b>${fm(G.valley)} m</b></div>` : ''}</div>
   <button class="btn b-line b-sm" data-cact="roofauto">${ic('roof')}Ajuster au contour des murs</button>`;
}
function toggleProps(force){ const p = $('#cprops'); if(p) p.classList.toggle('open', force ?? !p.classList.contains('open')); }

/* ---------- sauvegarde, export ---------- */
const data = () => ({name:C.name, ents:C.ents, layers:C.layers, ep:C.ep, ht:C.ht, th:C.th, grid:C.grid, lvz:C.lvz, pa:C.pa, vmode:C.vmode, r3d:C.r3d});
async function save(){
  if(!S.me) return;
  C.name = ($('#cName') ? $('#cName').value.trim() : C.name) || 'Plan sans nom';
  const wasNew = !C.id;
  try{ C.id = await A.db.saveWork(C.id, 'dessin', data()); C.dirty = false; toast('Plan enregistré', 'save'); log('Plan enregistré : ' + C.name);
    if(wasNew) history.replaceState(null, '', '#/app/atelier/' + C.id); }catch(e){ log('Erreur d\'enregistrement'); }
}
function standalone(){
  const b = bboxOf(C.ents.filter(e => layer(e.layer).v)) || {x0:0,y0:0,x1:10,y1:8};
  const m = 1, s = 50, w = (b.x1-b.x0+2*m)*s, h = (b.y1-b.y0+2*m)*s;
  const keep = new Set(C.sel); C.sel.clear();
  const body = entsSvg({light:true}).replace(/fill="#0B1524"/g, 'fill="#fff"');
  C.sel = keep;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h+40}" width="${w}" height="${h+40}"><rect width="${w}" height="${h+40}" fill="#fff"/><g transform="matrix(${s} 0 0 ${-s} ${(m-b.x0)*s} ${(b.y1+m)*s})" style="--c:#14202E">${body.replace(/stroke="#(D5DEE9|FAD98D|6EE7B7|7FB2FF|FFFFFF|F87171|C4B5FD|E8752A)"/g,'stroke="#14202E"').replace(/fill="#(FFFFFF|D5DEE9|7FB2FF|FAD98D|6EE7B7)"/g,'fill="#14202E"')}</g><text x="12" y="${h+26}" font-family="Inter,sans-serif" font-size="14" fill="#14202E" font-weight="700">${esc(C.name)}</text><text x="${w-12}" y="${h+26}" text-anchor="end" font-family="Inter,sans-serif" font-size="12" fill="#5E6B7A">${esc(A.brandText())} · cotes en mètres</text></svg>`;
}
function exportPng(){
  const svg = standalone(), img = new Image();
  img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0,0,c.width,c.height); x.drawImage(img, 0, 0); c.toBlob(b => A.download((C.name||'plan').replace(/[^\w-]+/g,'_') + '.png', b), 'image/png'); };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function printPlan(){ const w = window.open('', '_blank'); if(!w){ toast('Autorisez les fenêtres pour imprimer', 'x'); return; } w.document.write(`<!doctype html><title>${esc(C.name)}</title><body style="margin:0">${standalone()}<script>setTimeout(()=>print(),300)<\/script>`); w.document.close(); }

/* ---------- métré du plan ---------- */
function metreDoc(d){
  const ents = d.ents || [], ht = d.ht || 2.8;
  const W = ents.filter(e => e.t === 'wall'), D = ents.filter(e => e.t === 'door'), Wn = ents.filter(e => e.t === 'win'), R = ents.filter(e => e.t === 'room');
  const len = e => dist([e.x1,e.y1],[e.x2,e.y2]);
  const L15 = W.filter(w => w.ep >= .18).reduce((a,w)=>a+len(w),0), L10 = W.filter(w => w.ep < .18).reduce((a,w)=>a+len(w),0);
  const onThick = (o, thick) => { const w = W.find(x => segDist([o.x1,o.y1], [x.x1,x.y1],[x.x2,x.y2]) <= x.ep/2 + .05); return w ? (w.ep >= .18) === thick : thick; };
  const Ad15 = D.filter(o=>onThick(o,true)).reduce((a,o)=>a+len(o)*2.2,0) + Wn.filter(o=>onThick(o,true)).reduce((a,o)=>a+len(o)*1.2,0);
  const Ad10 = D.filter(o=>onThick(o,false)).reduce((a,o)=>a+len(o)*2.2,0) + Wn.filter(o=>onThick(o,false)).reduce((a,o)=>a+len(o)*1.2,0);
  const Sr = R.reduce((a,r)=>a+polyArea(r.pts),0), Pr = R.reduce((a,r)=>a+polyPer(r.pts),0);
  const P = A.METRE.pu;
  const L = (lot, code, q, d, u) => ({lot, code, d: d || A.METRE.PRIX[code].d, u: u || A.METRE.PRIX[code].u, q: Math.round(q*100)/100, qm:true, pu:P(code)});
  const lines = [];
  if(L15) lines.push(L('Maçonnerie','agg15', Math.max(0, L15*ht - Ad15), `Agglos de 15 : ${fm(L15)} m × ${fm(ht)} m − ouvertures`));
  if(L10) lines.push(L('Maçonnerie','agg10', Math.max(0, L10*ht - Ad10), `Agglos de 10 : ${fm(L10)} m × ${fm(ht)} m − ouvertures`));
  if(L15 || L10) lines.push(L('Élévation','ba', (L15+L10)*.2*.2, 'Chaînage haut 20 × 20 en béton armé'), L('Élévation','acier', (L15+L10)*.04*90, 'Aciers du chaînage (ratio 90 kg/m³)'));
  if(D.length || Wn.length) lines.push(L('Élévation','linteau', D.concat(Wn).reduce((a,o)=>a+len(o)+.5,0)));
  if(L15 || L10) lines.push(L('Enduits & revêtements','enduit', Math.max(0, (L15+L10)*ht*2 - (Ad15+Ad10)*2), 'Enduits ciment 2 faces'));
  if(Sr){ lines.push(L('Enduits & revêtements','carreau', Sr*1.05, `Carrelage des pièces (${R.length} pièces, ${fm(Sr)} m² + 5 %)`)); lines.push(L('Enduits & revêtements','plinthe', Math.max(0, Pr - D.reduce((a,o)=>a+len(o),0)))); lines.push(L('Peinture','peinti', Sr + Math.max(0, (L15+L10)*ht*2 - (Ad15+Ad10)*2)*.8, 'Peinture plafonds et murs intérieurs')); }
  D.length && lines.push(L('Menuiseries','porte', D.length, `Portes (${D.map(o=>fm(len(o))).join(' ; ')} m)`));
  Wn.length && lines.push(L('Menuiseries','fenetre', Wn.reduce((a,o)=>a+len(o)*1.2,0), 'Fenêtres (hauteur 1,20 m)'));
  ents.filter(e => e.t === 'roof').forEach(e => { const G = roofGeo(e); if(!G.area) return;
    if(G.type === 'terrasse') lines.push(L('Toiture / étanchéité','etanch', G.area, `Étanchéité de la toiture-terrasse (${fm(G.area)} m²)`));
    else lines.push(L('Toiture / étanchéité','charpente', G.area, `Charpente de la toiture ${G.type} (${fm(G.area)} m² de rampants)`),
      L('Toiture / étanchéité','tole', G.area, `Couverture ${G.type}, pente ${F(e.pente || 15, 0)}° : ${fm(G.area)} m²${G.ridge ? ', faîtage ' + fm(G.ridge) + ' m' : ''}${G.hip ? ', arêtiers ' + fm(G.hip) + ' m' : ''}${G.valley ? ', noues ' + fm(G.valley) + ' m' : ''}`)); });
  const doc = {name:'Métré · ' + (d.name || 'plan'), projet:d.name || '', tva:A.cfg().tva ?? 18, lots:[]};
  lines.forEach(l => { let lt = doc.lots.find(x => x.nom === l.lot); if(!lt){ lt = {nom:l.lot, lignes:[]}; doc.lots.push(lt); } lt.lignes.push(l); });
  return doc;
}
function showMetre(){
  const doc = metreDoc(data()); const t = A.METRE.totals(doc);
  A.win({title:'Métré du plan', wide:true, body:`<p class="muted">Calculé à partir des murs (${fm(C.ht)} m de hauteur), des ouvertures et des pièces dessinées. Ouvrez-le dans l'outil Métré pour l'ajuster.</p>
   <div class="tw"><table class="t"><thead><tr><th>Lot</th><th>Ouvrage</th><th class="r">Quantité</th><th>U</th><th class="r">Montant</th></tr></thead><tbody>${doc.lots.flatMap(lt=>lt.lignes.map(l=>`<tr><td class="sub">${esc(lt.nom)}</td><td>${esc(l.d)}</td><td class="r mono">${F(l.q,2)}</td><td>${l.u}</td><td class="r mono">${F(l.q*l.pu)} F</td></tr>`)).join('') || '<tr><td colspan="5" class="sub">Dessinez des murs (commande MUR), des portes, des fenêtres et des pièces pour obtenir un métré.</td></tr>'}</tbody></table></div>
   ${A.METRE.recapHtml(t)}`, foot:`<button class="btn b-pri" data-cact="metreopen">${ic('calc')}Ouvrir dans l'outil Métré</button>`});
}

/* ---------- vue 3D de l'atelier ---------- */
let V3 = null, t3 = 0, v3busy = false, sig3 = '', lvKey = '', frame3 = false;
function setVmode(m){
  C.vmode = m; const v = $('#cview'); if(v) v.className = 'cview m-' + m;
  $$('[data-cvm]').forEach(b => b.classList.toggle('on', b.dataset.cvm === m));
  if(m === 'plan'){ if(V3){ V3.dispose(); V3 = null; } }
  else ensure3d();
  setTimeout(() => { draw(); }, 30);
  log(m === 'plan' ? 'Vue en plan (2D)' : m === '3d' ? 'Vue 3D : glisser pour tourner, molette pour zoomer, toucher un objet pour le sélectionner' : 'Vue partagée plan + 3D');
}
function ensure3d(){
  if(V3 || v3busy || !A.V3D) return;
  const host = $('#cv3'); if(!host) return; v3busy = true;
  A.V3D.load().then(() => { v3busy = false; if(!document.body.contains(host) || C.vmode === 'plan') return;
    const ld = $('.c3load', host); if(ld) ld.remove();
    V3 = A.V3D.viewer(host, {flip:true, onPick:s => { if(!s || !s.ent){ C.sel.clear(); draw(); return; } const e = C.ents.find(x => x.id === s.ent); if(!e) return; if(!belongs(e)) C.lvz = e.z ?? 0; C.sel.clear(); C.sel.add(e.id); log('Sélection 3D : ' + (s.label || e.t)); draw(); }});
    V3.mode = C.r3d.mode; V3.hour = C.r3d.hour; sig3 = ''; frame3 = true; upd3d(true);
  }).catch(e => { v3busy = false; host.innerHTML = `<div class="c3load">${esc(e.message)}</div>`; });
}
function upd3d(now, first){
  if(!V3 || C.vmode === 'plan') return;
  clearTimeout(t3); t3 = setTimeout(() => { if(!V3) return; const sg = JSON.stringify([C.ents, C.layers.map(l => l.v), C.r3d.mode]); if(sg === sig3 && !now && !frame3) return; sig3 = sg; const r = cadSolids(); V3.mode = C.r3d.mode; const kv = !frame3; frame3 = false; V3.set(r.solids, r.cfg, kv); }, now ? 0 : 150);
}
function cadSolids(){
  const out = [], cfg = {}, vis = C.ents.filter(e => layer(e.layer).v);
  const slot = (e, sfx='') => { const d = DEFMAT[e.t] || ['enduit','#dddddd']; const k = 'ent:' + e.id + sfx; cfg[k] = [e.mat || d[0], e.col || d[1]]; return k; };
  const opens = vis.filter(e => e.t === 'door' || e.t === 'win');
  const prism = (pts, z, h, sl, e, lab) => out.push({k:'prism', pts:pts.map(q => [q[0], -q[1]]), z, h, slot:sl, ent:e.id, label:lab});
  vis.forEach(e => {
    const z = e.z ?? 0, id = e.id;
    if(e.t === 'wall'){ const L = dist([e.x1,e.y1],[e.x2,e.y2]); if(L < .01) return; const ux = (e.x2-e.x1)/L, uy = (e.y2-e.y1)/L, H = e.h ?? C.ht, sl = slot(e), t = e.ep;
      const ang = Math.atan2(-uy, ux);
      const ops = opens.filter(o => Math.abs((o.z ?? 0) - z) < .5 && segDist([o.x1,o.y1],[e.x1,e.y1],[e.x2,e.y2]) <= t/2 + .06 && segDist([o.x2,o.y2],[e.x1,e.y1],[e.x2,e.y2]) <= t/2 + .06)
        .map(o => { const t1 = (o.x1-e.x1)*ux + (o.y1-e.y1)*uy, t2 = (o.x2-e.x1)*ux + (o.y2-e.y1)*uy; return {o, a:Math.max(0, Math.min(t1,t2)), b:Math.min(L, Math.max(t1,t2))}; }).sort((m,n) => m.a - n.a);
      const piece = (a, b, z1, z2, s2, lab, th) => { if(b - a < .005 || z2 - z1 < .005) return; const m = (a+b)/2; out.push({k:'obox', cx:e.x1 + ux*m, cy:-(e.y1 + uy*m), z:z + z1, L:b - a, t:th || t, h:z2 - z1, ang, slot:s2, ent:id, label:lab || 'Mur'}); };
      let cur = -t/2;
      ops.forEach(({o, a, b}) => { piece(cur, a, 0, H, sl);
        if(o.t === 'door'){ const hd = o.h ?? 2.2; piece(a, b, hd, H, sl); const m = (a+b)/2; out.push({k:'obox', cx:e.x1 + ux*m, cy:-(e.y1 + uy*m), z, L:b - a, t:.05, h:hd, ang, slot:slot(o), ent:o.id, label:'Porte'}); }
        else { const si = o.sill ?? 1, hw = o.h ?? 1.2; piece(a, b, 0, si, sl); piece(a, b, si + hw, H, sl); const m = (a+b)/2; out.push({k:'obox', cx:e.x1 + ux*m, cy:-(e.y1 + uy*m), z:z + si, L:b - a, t:.03, h:hw, ang, slot:'vitrage', ent:o.id, label:'Fenêtre', noShadow:true}); out.push({k:'obox', cx:e.x1 + ux*m, cy:-(e.y1 + uy*m), z:z + si - .03, L:b - a, t:t + .04, h:.05, ang, slot:slot(o), ent:o.id, label:'Appui de fenêtre'}); }
        cur = b; });
      piece(cur, L + t/2, 0, H, sl);
    }
    if(e.t === 'room'){ prism(e.pts, z - .02, .04, slot(e), e, 'Sol : ' + (e.name || 'pièce')); if(e.h > .1) prism(e.pts, z, e.h, slot(e, ':v'), e, e.name || 'Volume'); }
    if(['rect','box'].includes(e.t) && (e.t === 'box' || e.h > 0)) prism(rectPts([e.x1,e.y1],[e.x2,e.y2]), z, e.h || C.ht, slot(e), e, e.t === 'box' ? 'Boîte' : 'Volume');
    if(e.t === 'poly' && e.closed && e.h > 0) prism(e.pts, z, e.h, slot(e), e, 'Volume');
    if(e.t === 'slab') prism(e.pts, z, e.h || .2, slot(e), e, 'Dalle');
    if((e.t === 'circle' && e.h > 0) || e.t === 'cyl') out.push({k:'cyl', x:e.cx, y:-e.cy, z, r:e.r, h:e.h || C.ht, slot:slot(e), ent:id, label:'Cylindre', seg:28});
    if(e.t === 'post') out.push({k:'box', x:e.cx - e.a/2, y:-e.cy - e.a/2, z, w:e.a, d:e.a, h:e.h || C.ht, slot:slot(e), ent:id, label:'Poteau'});
    if(e.t === 'beam'){ const L = dist([e.x1,e.y1],[e.x2,e.y2]); if(L > .01) out.push({k:'obox', cx:(e.x1+e.x2)/2, cy:-(e.y1+e.y2)/2, z, L, t:e.b || .2, h:e.hb || .4, ang:Math.atan2(-(e.y2-e.y1), e.x2-e.x1), slot:slot(e), ent:id, label:'Poutre'}); }
    if(e.t === 'stair'){ const x0 = Math.min(e.x1,e.x2), x1 = Math.max(e.x1,e.x2), y0 = Math.min(e.y1,e.y2), y1 = Math.max(e.y1,e.y2), alongX = (x1-x0) >= (y1-y0), H = e.H || 3, n = Math.max(3, Math.round(H/.17)), L = alongX ? x1-x0 : y1-y0, g = L/n, sl = slot(e);
      const fwd = alongX ? (e.x2 >= e.x1 ? 1 : -1) : (e.y2 >= e.y1 ? 1 : -1);
      for(let k=0;k<n;k++){ const u0 = fwd > 0 ? k*g : L - (k+1)*g; out.push(alongX ? {k:'box', x:x0 + u0, y:-y1, z, w:g, d:y1-y0, h:(k+1)*H/n, slot:sl, ent:id, label:'Escalier'} : {k:'box', x:x0, y:-(y0 + u0 + g), z, w:x1-x0, d:g, h:(k+1)*H/n, slot:sl, ent:id, label:'Escalier'}); } }
    if(e.t === 'roof'){ const G = roofGeo(e), sl = slot(e), y0 = z + .02, fr = G.fr;
      const P3 = (q, h) => { const p = fr.W(q); return [p[0], y0 + h, -p[1]]; };
      const up = t => { const [a, b, c] = t, ny = (b[2]-a[2])*(c[0]-a[0]) - (b[0]-a[0])*(c[2]-a[2]); return ny < 0 ? [a, c, b] : t; };
      const face = (t, nx, nz) => { const [a, b, c] = t, n = [(b[1]-a[1])*(c[2]-a[2]) - (b[2]-a[2])*(c[1]-a[1]), (b[2]-a[2])*(c[0]-a[0]) - (b[0]-a[0])*(c[2]-a[2]), (b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0])]; return n[0]*nx + n[2]*nz < 0 ? [a, c, b] : t; };
      if(G.type === 'terrasse'){ const kd = 'ent:' + id + ':d', ac = e.acro ?? .6, P = G.outer; cfg[kd] = ['enduit', '#F4F1EA'];
        out.push({k:'prism', pts:P.map(q => [q[0], -q[1]]), z, h:.2, slot:kd, ent:id, label:'Dalle de toiture'});
        if(ac > 0) P.forEach((a, i) => { const b = P[(i+1)%P.length], l = dist(a, b); if(l < .01) return; const u = [(b[0]-a[0])/l, (b[1]-a[1])/l], nI = [-u[1], u[0]];
          const pv = P[(i-1+P.length)%P.length], pn = P[(i+2)%P.length];
          const crA = (a[0]-pv[0])*(b[1]-a[1]) - (a[1]-pv[1])*(b[0]-a[0]), crB = (b[0]-a[0])*(pn[1]-b[1]) - (b[1]-a[1])*(pn[0]-b[0]);
          const ea = crA < -1e-9 ? .12 : 0, eb = crB < -1e-9 ? .12 : 0, L2 = l + ea + eb, mo = (eb - ea)/2, m = [(a[0]+b[0])/2 + u[0]*mo + nI[0]*.06, (a[1]+b[1])/2 + u[1]*mo + nI[1]*.06];
          out.push({k:'obox', cx:m[0], cy:-m[1], z:z + .2, L:L2, t:.12, h:ac, ang:Math.atan2(-u[1], u[0]), slot:kd, ent:id, label:'Acrotère'}); });
        const Pin = offsetPoly(P, -.12); if(polyArea(Pin) > .05) out.push({k:'prism', pts:Pin.map(q => [q[0], -q[1]]), z:z + .2, h:.06, slot:sl, ent:id, label:'Toiture-terrasse'}); }
      else { const tr = [];
        G.faces.forEach(f => { const pz = q => f.pl[0]*q[0] + f.pl[1]*q[1] + f.pl[2], T = f.tri ? triPoly(f.poly) : f.poly.slice(1, -1).map((q, k) => [f.poly[0], q, f.poly[k+2]]);
          T.forEach(t => tr.push(up(t.map(q => P3(q, pz(q)))))); });
        out.push({k:'tris', tris:tr, slot:sl, ent:id, label:'Toiture ' + G.type});
        out.push({k:'tris', tris:tr.map(t => t.map(([x,y,zz]) => [x, y - .1, zz])), slot:'bandeau', ent:id, label:'Sous-face'});
        // pignons et frises : du haut des murs jusqu'à la sous-face, le long du contour des murs
        const kp = 'ent:' + id + ':p', pg = []; cfg[kp] = ['enduit', '#EFE6D6'];
        const hAt = p => { const q = fr.L(p), v = G.h(q[0], q[1]); return v > -Infinity ? v : 0; };
        G.foot.forEach((a, i) => { const b = G.foot[(i+1)%G.foot.length], l = dist(a, b); if(l < .01) return; const nO = [(b[1]-a[1])/l, -(b[0]-a[0])/l], n = Math.max(1, Math.ceil(l/.15));
          for(let k=0;k<n;k++){ const pa = [a[0] + (b[0]-a[0])*k/n, a[1] + (b[1]-a[1])*k/n], pb = [a[0] + (b[0]-a[0])*(k+1)/n, a[1] + (b[1]-a[1])*(k+1)/n];
            const ha = y0 + hAt(pa) - .04, hb = y0 + hAt(pb) - .04; if(Math.max(ha, hb) <= z + .005) continue;
            const A0 = [pa[0], z, -pa[1]], B0 = [pb[0], z, -pb[1]], A1 = [pa[0], Math.max(z, ha), -pa[1]], B1 = [pb[0], Math.max(z, hb), -pb[1]];
            pg.push(face([A0, B0, B1], nO[0], -nO[1]), face([A0, B1, A1], nO[0], -nO[1])); } });
        G.pieces.filter(P => P.k === 'gable').forEach(P => { const ends = P.dir === 'x' ? [[P.x0, -1], [P.x1, 1]] : [[P.y0, -1], [P.y1, 1]];
          ends.forEach(([c, sg]) => { const out1 = P.dir === 'x' ? [c + sg*1e-3, (P.y0+P.y1)/2] : [(P.x0+P.x1)/2, c + sg*1e-3]; if(G.h(out1[0], out1[1]) === -Infinity) return;
            const m = P.dir === 'x' ? (P.y1-P.y0)/2 : (P.x1-P.x0)/2, q0 = P.dir === 'x' ? [c, P.y0] : [P.x0, c], q1 = P.dir === 'x' ? [c, P.y1] : [P.x1, c], qm = P.dir === 'x' ? [c, (P.y0+P.y1)/2] : [(P.x0+P.x1)/2, c];
            const nl = P.dir === 'x' ? fr.W([sg, 0]) : fr.W([0, sg]); pg.push(face([P3(q0, -.04), P3(q1, -.04), P3(qm, G.s*m - .04)], nl[0], -nl[1])); }); });
        if(pg.length) out.push({k:'tris', tris:pg, slot:kp, ent:id, label:'Pignons et frises'}); }
    }
  });
  if(out.length){ const xs = out.flatMap(s => s.k === 'obox' ? [s.cx - s.L/2, s.cx + s.L/2] : s.k === 'box' ? [s.x, s.x + s.w] : s.k === 'cyl' ? [s.x] : s.k === 'prism' ? s.pts.map(q => q[0]) : []), zs = out.flatMap(s => s.k === 'obox' ? [s.cy - s.L/2, s.cy + s.L/2] : s.k === 'box' ? [s.y, s.y + s.d] : s.k === 'cyl' ? [s.y] : s.k === 'prism' ? s.pts.map(q => q[1]) : []);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), z0 = Math.min(...zs), z1 = Math.max(...zs);
    out.push({k:'box', x:x0 - 25, y:z0 - 25, z:-.32, w:x1 - x0 + 50, d:z1 - z0 + 50, h:.3, slot:'gazon', ground:true, noShadow:true}); }
  return {solids:out, cfg};
}
A.on('click', '[data-cvm]', el => { if(C) setVmode(el.dataset.cvm); });
A.on('click', '[data-c3v]', el => { if(V3) V3.frame(el.dataset.c3v); });
A.on('click', '[data-c3m]', el => { if(!V3) return; C.r3d.mode = el.dataset.c3m; $$('[data-c3m]').forEach(b => b.classList.toggle('on', b === el)); upd3d(true); });
A.on('input', '#c3sun', el => { if(!V3) return; C.r3d.hour = +el.value; V3.setSun(+el.value); });

/* ---------- ouverture d'un projet type ---------- */
function fromProject(pj, li=0){
  const lv = A.PLAN.levelOf(pj, li), b = A.PLAN.bbox(lv), H = b.y1;
  const d = fresh(pj.titre + (pj.niveaux && pj.niveaux.length > 1 ? ' · ' + lv.nom : ''));
  const fy = y => r3(H - y);
  A.PLAN.walls(lv, pj.murs).forEach(w => d.ents.push({id:nid(), layer:'murs', t:'wall', x1:w.x1, y1:fy(w.y1), x2:w.x2, y2:fy(w.y2), ep:w.t}));
  (lv.portes||[]).forEach(o => { const ex = o.o === 'h' ? [o.x, o.y, o.x+o.w, o.y] : [o.x, o.y, o.x, o.y+o.w]; const hinge = o.h ? [ex[2],ex[3],ex[0],ex[1]] : ex; const e = {id:nid(), layer:'ouv', t:'door', x1:hinge[0], y1:fy(hinge[1]), x2:hinge[2], y2:fy(hinge[3]), ep:.2}; const n = normal(e); const dir = o.o === 'h' ? [0, -(o.s||1)] : [(o.s||1), 0]; e.sw = (n[0]*dir[0] + n[1]*dir[1]) >= 0 ? 1 : -1; d.ents.push(e); });
  (lv.fenetres||[]).forEach(o => { const ex = o.o === 'h' ? [o.x, o.y, o.x+o.w, o.y] : [o.x, o.y, o.x, o.y+o.w]; d.ents.push({id:nid(), layer:'ouv', t:'win', x1:ex[0], y1:fy(ex[1]), x2:ex[2], y2:fy(ex[3]), ep:.2}); });
  lv.pieces.filter(r => r.t !== 'terrasse').forEach(r => d.ents.push({id:nid(), layer:'pieces', t:'room', name:r.n, pts:rectPts([r.x, fy(r.y+r.h)], [r.x+r.w, fy(r.y)])}));
  d.ents.push({id:nid(), layer:'cotes', t:'dim', x1:b.x0, y1:fy(b.y0), x2:b.x1, y2:fy(b.y0), off:1.0});
  d.ents.push({id:nid(), layer:'cotes', t:'dim', x1:b.x0, y1:fy(b.y1), x2:b.x0, y2:fy(b.y0), off:1.0});
  d.ents.push({id:nid(), layer:'textes', t:'text', x:b.x0, y:fy(b.y1) - 1.6, s:.4, txt:pj.titre});
  return d;
}
function fromProject3D(pj){
  const PL = A.PLAN, L = PL.levels(pj), M = A.PRJ.model(pj), b0 = PL.bbox(L[0].lv), H = b0.y1, fy = y => r3(H - y), HN = 3.0, T = pj.toit || {};
  const d = fresh(pj.titre + ' · maquette 3D'); d.vmode = 'split'; d.ht = M.slab ? 2.8 : 3.0;
  L.forEach((l, i) => { const z = l.z, lv = l.lv, hb = M.slab ? .2 : 0;
    PL.walls(lv, pj.murs).forEach(w => d.ents.push({id:nid(), layer:'murs', t:'wall', x1:w.x1, y1:fy(w.y1), x2:w.x2, y2:fy(w.y2), ep:w.t, z, h:r3(HN - hb)}));
    (lv.portes||[]).forEach(o => { const ex = o.o === 'h' ? [o.x, o.y, o.x+o.w, o.y] : [o.x, o.y, o.x, o.y+o.w]; const hinge = o.h ? [ex[2],ex[3],ex[0],ex[1]] : ex; const e = {id:nid(), layer:'ouv', t:'door', x1:hinge[0], y1:fy(hinge[1]), x2:hinge[2], y2:fy(hinge[3]), ep:.2, z}; const n = normal(e); const dir = o.o === 'h' ? [0, -(o.s||1)] : [(o.s||1), 0]; e.sw = (n[0]*dir[0] + n[1]*dir[1]) >= 0 ? 1 : -1; d.ents.push(e); });
    (lv.fenetres||[]).forEach(o => { const ex = o.o === 'h' ? [o.x, o.y, o.x+o.w, o.y] : [o.x, o.y, o.x, o.y+o.w]; d.ents.push({id:nid(), layer:'ouv', t:'win', x1:ex[0], y1:fy(ex[1]), x2:ex[2], y2:fy(ex[3]), ep:.2, z}); });
    lv.pieces.filter(r => !(r.t === 'escalier' && i > 0)).forEach(r => d.ents.push({id:nid(), layer:'pieces', t:'room', name:r.n, pts:rectPts([r.x, fy(r.y+r.h)], [r.x+r.w, fy(r.y)]), z, mat:r.t === 'terrasse' ? 'carrelage' : undefined, col:r.t === 'terrasse' ? '#CDBFA8' : undefined}));
    M.panels.filter(c => c.lvl === i && !c.tremie).forEach(c => d.ents.push({id:nid(), layer:'structure', t:'slab', pts:rectPts([c.x, fy(c.y+c.h)], [c.x+c.w, fy(c.y)]), z:r3(z + HN - (c.ep || .2)), h:c.ep || .2}));
    M.stairs.filter(e => e.lvl === i).forEach(e => { const r = e.r; d.ents.push({id:nid(), layer:'structure', t:'stair', x1:r.x + .05, y1:fy(r.y + r.h - .05), x2:r.x + r.w/2, y2:fy(r.y + .05), z, H:HN}); });
  });
  const zt = L.length*HN;
  const zTop = L[L.length-1].z, rect2 = r => ({t:'room', pts:rectPts([r.x, fy(r.y+r.h)], [r.x+r.w, fy(r.y)])});
  if(T.type === 'terrasse' || pj.toiture === 'terrasse'){ const rooms = L[L.length-1].lv.pieces.filter(r => r.t !== 'terrasse'), o = autoOutline(rooms.map(rect2)), bt = PL.bbox({pieces:rooms});
    d.ents.push({id:nid(), layer:'toiture', t:'roof', pts:o ? o.pts : ccwPoly(rectPts([bt.x0, fy(bt.y1)], [bt.x1, fy(bt.y0)])), z:r3(zt - .2), type:'terrasse', pente:2, deb:0, acro:T.acrotere || .6, mat:'gravier', col:'#A39C90'}); }
  else { const o = autoOutline(d.ents.filter(e => e.t === 'wall' && Math.abs((e.z ?? 0) - zTop) < .05));
    d.ents.push({id:nid(), layer:'toiture', t:'roof', pts:o ? o.pts : ccwPoly(rectPts([b0.x0, fy(b0.y1)], [b0.x1, fy(b0.y0)])), z:r3(zt), type:T.type || '2 pans', pente:T.pente || 15, deb:T.debord || .6, sens:'auto', mat:'tole', col:(pj.id === 'moyen' ? '#9C3B2E' : '#5F7184')}); }
  d.ents.push({id:nid(), layer:'textes', t:'text', x:b0.x0, y:fy(b0.y1) - 1.6, s:.4, txt:pj.titre, z:0});
  return d;
}
A.CAD = {metreDoc,
  openProject(pj, li){ C = fresh(); Object.assign(C, fromProject(pj, li)); C._fit = true; A.go('#/app/atelier/nouveau'); },
  openProject3D(pj){ C = fresh(); Object.assign(C, fromProject3D(pj)); C._fit = true; A.go('#/app/atelier/nouveau'); }
};

/* =====================================================================
   PAGE
   ===================================================================== */
const TOOLS3D = [['BOITE','cube','Boîte 3D (BOITE)'],['CYLINDRE','circle','Cylindre (CYL)'],['DALLE','layers','Dalle (DALLE)'],['POTEAU','column','Poteau (POT)'],['POUTRE','beam','Poutre (POU)'],['ESCALIER','steps','Escalier (ESC)'],['TOIT','roof','Toiture (TOIT)'],['EXTRUSION','max','Extrusion (EXT)'],['MATERIAU','paint','Matériau (MAT)'],['COULEUR','drop','Couleur (COUL)']];
const TOOLS = [['select','pointer','Sélection (Échap)'],['pan','hand','Déplacer la vue'],['LIGNE','line','Ligne (L)'],['MUR','wall','Mur (MU)'],['POLYLIGNE','poly','Polyligne (PL)'],['RECTANGLE','square','Rectangle (REC)'],['CERCLE','circle','Cercle (C)'],['PIECE','room','Pièce (PI)'],['PORTE','door','Porte (PO)'],['FENETRE','window','Fenêtre (FE)'],['COTE','dim','Cotation (COT)'],['TEXTE','text','Texte (T)'],['DEPLACER','move','Déplacer (D)'],['COPIER','copy','Copier (CO)'],['ROTATION','refresh','Rotation (RO)'],['MIROIR','layers','Miroir (MI)'],['EFFACER','trash','Effacer (E)']];
let ro = null, keyH = null, ptrs = new Map(), pinch = null, downAt = null;
A.page('app/atelier/:id', {space:'app', title:'Atelier de dessin', noTop:true, full:true, static:true, render(p){
  if(p.id === 'import'){ const d = A.ls.get('cadImport', null); if(d){ A.ls.del('cadImport'); C = fresh(); Object.assign(C, d, {id:null, sel:new Set(), hist:[], fut:[], log:[]}); C._fit = true; } else if(!C) C = fresh(); }
  else if(p.id === 'nouveau'){ if(!C || C.id) C = fresh(); }
  else if(!C || C.id !== p.id){ const w = S.works[p.id]; if(!w) return `<div class="page">${A.empty('compass','Plan introuvable.')}</div>`; C = fresh(); Object.assign(C, JSON.parse(JSON.stringify(w.data)), {id:p.id}); C._fit = true; }
  ensureLayers(C); C.r3d = C.r3d || {mode:'reel', hour:15}; C.vmode = C.vmode || 'plan'; if(C.lvz == null) C.lvz = 0;
  return `<div class="cad">
   <div class="cbar">
    <input class="inp nm" id="cName" value="${esc(C.name)}" aria-label="Nom du plan" style="width:170px">
    <button class="ibtn" data-cact="new" title="Nouveau plan">${ic('plus')}</button><button class="ibtn" data-cact="open" title="Ouvrir">${ic('folder')}</button><button class="ibtn" data-cact="save" title="Enregistrer (Ctrl+S)">${ic('save')}</button>
    <span class="sep"></span><button class="ibtn" data-cact="undo" title="Annuler (Ctrl+Z)">${ic('undo')}</button><button class="ibtn" data-cact="redo" title="Rétablir (Ctrl+Y)">${ic('redo')}</button>
    <span class="sep"></span><button class="ibtn" data-cact="zin" title="Zoom +">${ic('zoomin')}</button><button class="ibtn" data-cact="zout" title="Zoom −">${ic('zoomout')}</button><button class="ibtn" data-cact="zext" title="Zoom étendu (ZE)">${ic('max')}</button>
    <span class="sep"></span><button class="ibtn ${C.ortho?'on':''}" data-cact="ortho" title="Ortho (F8)">${ic('cross')}</button><button class="ibtn ${C.osnap?'on':''}" data-cact="osnap" title="Accrochage aux objets (F3)">${ic('magnet')}</button><button class="ibtn ${C.showGrid?'on':''}" data-cact="grid" title="Grille (F7)">${ic('grid')}</button>
    <span class="sep"></span><button class="ibtn ${C.vmode==='plan'?'on':''}" data-cvm="plan" title="Vue en plan (2D)">${ic('square')}</button><button class="ibtn ${C.vmode==='3d'?'on':''}" data-cvm="3d" title="Vue 3D">${ic('cube')}</button><button class="ibtn ${C.vmode==='split'?'on':''}" data-cvm="split" title="Plan + 3D">${ic('layers')}</button><select class="inp" id="cLv" title="Niveau de travail" aria-label="Niveau de travail"></select>
    <span class="sep"></span><button class="ibtn" data-cact="metre" title="Métré du plan">${ic('calc')}</button><button class="ibtn" data-cact="png" title="Exporter en image PNG">${ic('image')}</button><button class="ibtn" data-cact="svg" title="Exporter en SVG">${ic('download')}</button><button class="ibtn" data-cact="print" title="Imprimer">${ic('print')}</button>
    <span class="grow"></span><button class="ibtn" data-cact="props" title="Calques et propriétés">${ic('layers')}</button><button class="ibtn" data-cact="help" title="Aide">${ic('info')}</button>
   </div>
   <div class="ctools">${TOOLS.map(t=>`<button class="ibtn ${C.tool===t[0]?'on':''}" data-ctool="${t[0]}" title="${esc(t[2])}">${ic(t[1])}</button>`).join('')}<span class="tsep">3D</span>${TOOLS3D.map(t=>`<button class="ibtn" data-ctool="${t[0]}" title="${esc(t[2])}">${ic(t[1])}</button>`).join('')}</div>
   <div class="cview m-${C.vmode}" id="cview"><div class="ccanvas sel" id="cv" tabindex="0"><svg id="cvs" xmlns="http://www.w3.org/2000/svg"><g id="cgrid"></g><g id="wg"></g><g id="ovl"></g></svg><div class="chud" id="hud"></div><div class="chint" id="hint" hidden></div></div>
    <div class="c3d" id="cv3"><div class="c3load">${ic('cube')}Chargement de la vue 3D…</div><div class="c3tools"><button class="ibtn" data-c3v="persp" title="Perspective">${ic('cube')}</button><button class="ibtn" data-c3v="face" title="Face">${ic('home')}</button><button class="ibtn" data-c3v="cote" title="Côté">${ic('square')}</button><button class="ibtn" data-c3v="dessus" title="Dessus">${ic('grid')}</button></div>
     <div class="c3bar"><div class="seg">${[['reel','Réaliste'],['maquette','Maquette'],['filaire','Filaire']].map(m => `<button class="${C.r3d.mode===m[0]?'on':''}" data-c3m="${m[0]}">${m[1]}</button>`).join('')}</div><label class="small" style="display:flex;gap:6px;align-items:center;color:#C8D3E0">${ic('sun')}<input type="range" id="c3sun" min="6" max="18" step=".5" value="${C.r3d.hour}" style="width:90px"></label></div></div></div>
   <aside class="cprops" id="cprops"></aside>
   <div class="cmd"><div class="log" id="cmdLog"></div><form class="line" id="fCmd" autocomplete="off"><b id="cmdP">Commande :</b><input id="cmdIn" placeholder="Tapez une commande (MUR, LIGNE, PORTE, COTE…) ou des coordonnées (@4,0)" spellcheck="false" autocapitalize="characters"></form></div>
  </div>`;
 },
 mount(){
  const cv = $('#cv');
  ro = new ResizeObserver(() => { draw(); if(!C._init){ C._init = true; if(!C.ents.length){ C.view = {ox:70, oy:vh-60, s:40}; draw(); } } if(C._fit){ C._fit = false; zoomExt(); } }); ro.observe(cv);
  if(!C.log.length){ log('Bienvenue dans l\'atelier de dessin. Tapez une commande (ex. MUR) puis Entrée, ou choisissez un outil à gauche. AIDE pour la liste.'); }
  else { const l = $('#cmdLog'); if(l) l.textContent = C.log.slice(-6).join('\n'); }
  cv.addEventListener('pointerdown', onDown); cv.addEventListener('pointermove', onMove); cv.addEventListener('pointerup', onUp); cv.addEventListener('pointercancel', onUp);
  cv.addEventListener('pointerleave', () => { C.mouse.in = false; overlay(); });
  cv.addEventListener('wheel', e => { e.preventDefault(); const r = cv.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.15 : 1/1.15); }, {passive:false});
  cv.addEventListener('contextmenu', e => { e.preventDefault(); if(C.cmd) typed(''); });
  keyH = onKey; document.addEventListener('keydown', keyH);
  fitH(); window.addEventListener('resize', fitH);
  if(C.vmode !== 'plan') ensure3d();
 },
 unmount(){ if(V3){ V3.dispose(); V3 = null; } if(ro){ ro.disconnect(); ro = null; } if(keyH){ document.removeEventListener('keydown', keyH); keyH = null; } window.removeEventListener('resize', fitH); }
});
A.page('app/atelier', {space:'app', title:'Atelier de dessin', render(){ location.replace('#/app/atelier/' + (C && C.id ? C.id : 'nouveau')); return null; }});

function fitH(){ const el = $('.cad'); if(!el) return; const bn = $('.bnav'); const bh = bn && getComputedStyle(bn).display !== 'none' ? bn.offsetHeight : 0; el.style.height = Math.max(420, window.innerHeight - el.getBoundingClientRect().top - window.scrollY - bh) + 'px'; }
function rel(e){ const r = $('#cv').getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
function onDown(e){
  const cv = $('#cv'); cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, rel(e));
  if(ptrs.size === 2){ const [a, b] = [...ptrs.values()]; pinch = {d:dist(a,b), s:C.view.s, m:[(a[0]+b[0])/2, (a[1]+b[1])/2]}; return; }
  const [sx, sy] = rel(e); downAt = {sx, sy, ox:C.view.ox, oy:C.view.oy, btn:e.button, moved:false};
  if(e.button === 1 || C.tool === 'pan' || e.shiftKey && e.button === 2){ downAt.pan = true; return; }
  if(!C.cmd && C.tool === 'select' && e.button === 0 && e.pointerType !== 'touch'){ const hitE = pick([sx, sy]); if(!hitE){ C.win = {a:[sx, sy]}; } }
}
function onMove(e){
  const [sx, sy] = rel(e); if(ptrs.has(e.pointerId)) ptrs.set(e.pointerId, [sx, sy]);
  if(pinch && ptrs.size === 2){ const [a, b] = [...ptrs.values()]; const f = dist(a,b) / pinch.d; const w = toW(pinch.m[0], pinch.m[1]); C.view.s = Math.max(2, Math.min(800, pinch.s*f)); C.view.ox = pinch.m[0] - w[0]*C.view.s; C.view.oy = pinch.m[1] + w[1]*C.view.s; draw(); return; }
  if(downAt && Math.hypot(sx-downAt.sx, sy-downAt.sy) > 4) downAt.moved = true;
  if(downAt && downAt.pan){ C.view.ox = downAt.ox + sx - downAt.sx; C.view.oy = downAt.oy + sy - downAt.sy; draw(); return; }
  if(downAt && e.pointerType === 'touch' && !C.cmd && !C.win && downAt.moved){ C.view.ox = downAt.ox + sx - downAt.sx; C.view.oy = downAt.oy + sy - downAt.sy; draw(); return; }
  C.mouse.sx = sx; C.mouse.sy = sy; C.mouse.in = true; const w = toW(sx, sy); C.mouse.x = w[0]; C.mouse.y = w[1];
  if(C.cmd || C.tool !== 'pan') snap(sx, sy); else C.snapPt = null;
  overlay(); hud();
}
function onUp(e){
  ptrs.delete(e.pointerId); if(pinch){ if(ptrs.size < 2) pinch = null; downAt = null; return; }
  const [sx, sy] = rel(e); const d = downAt; downAt = null; if(!d) return;
  if(d.pan) return;
  if(C.win){ const a = C.win.a; C.win = null; if(d.moved){ const p1 = toW(Math.min(a[0],sx), Math.max(a[1],sy)), p2 = toW(Math.max(a[0],sx), Math.min(a[1],sy)), cross = sx < a[0];
      if(!e.shiftKey) C.sel.clear();
      C.ents.filter(x => layer(x.layer).v).forEach(x => { const b = bboxOf([x]); const inBox = b.x0 >= p1[0] && b.x1 <= p2[0] && b.y0 >= p1[1] && b.y1 <= p2[1]; const over = !(b.x1 < p1[0] || b.x0 > p2[0] || b.y1 < p1[1] || b.y0 > p2[1]); if(cross ? over : inBox) C.sel.add(x.id); });
      log(C.sel.size + ' objet(s) sélectionné(s)'); draw(); return; } }
  if(d.moved && e.pointerType === 'touch') return;
  if(d.btn !== 0 && e.pointerType === 'mouse') return;
  if(e.pointerType === 'touch'){ C.mouse.sx = sx; C.mouse.sy = sy; snap(sx, sy); }
  if(C.cmd){ point(C.snapPt || toW(sx, sy)); return; }
  if(C.tool === 'select'){ const x = pick([sx, sy]); if(!e.shiftKey) C.sel.clear(); if(x){ if(C.sel.has(x.id) && e.shiftKey) C.sel.delete(x.id); else C.sel.add(x.id); } draw(); }
}
function onKey(e){
  const inCmd = e.target && e.target.id === 'cmdIn', inOther = e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && !inCmd;
  if($('#ov')) return;
  if(e.key === 'F8'){ e.preventDefault(); start('ORTHO'); return; }
  if(e.key === 'F3'){ e.preventDefault(); start('ACCROCHAGE'); return; }
  if(e.key === 'F7'){ e.preventDefault(); start('GRILLE'); return; }
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's'){ e.preventDefault(); save(); return; }
  if(inOther) return;
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z'){ e.preventDefault(); undo(); return; }
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y'){ e.preventDefault(); redo(); return; }
  if(e.key === 'Escape'){ e.preventDefault(); const had = !!C.cmd; cancel(); if(!had) C.sel.clear(); const i = $('#cmdIn'); if(i) i.value = ''; draw(); return; }
  if((e.key === 'Delete' || e.key === 'Backspace') && !inCmd && C.sel.size){ e.preventDefault(); start('EFFACER'); return; }
  if(e.key === ' ' && inCmd && !(C.cmd && C.cmd.n === 'TEXTE' && C.cmd.pts.length) && !(C.cmd && C.cmd.n === 'PIECE' && C.cmd.pts.length === 2)){ e.preventDefault(); const i = $('#cmdIn'); const v = i.value; i.value = ''; typed(v); return; }
  if(!inCmd && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey){ const i = $('#cmdIn'); if(i){ i.focus(); } }
  if(!inCmd && e.key === 'Enter'){ e.preventDefault(); typed(''); }
}
A.on('submit', '#fCmd', () => { const i = $('#cmdIn'); const v = i.value; i.value = ''; typed(v); });
A.on('click', '[data-ctool]', el => { const t = el.dataset.ctool; if(t === 'select' || t === 'pan') setTool(t); else { cancel(); start(t); } $('#cmdIn') && window.innerWidth > 960 && $('#cmdIn').focus(); });
A.on('input', '#cName', el => { if(C){ C.name = el.value; C.dirty = true; } });
A.on('click', '[data-cact]', async el => {
  const a = el.dataset.cact;
  if(a === 'save') return save();
  if(a === 'undo') return undo(); if(a === 'redo') return redo();
  if(a === 'zin') return zoomAt(vw/2, vh/2, 1.25); if(a === 'zout') return zoomAt(vw/2, vh/2, .8); if(a === 'zext') return zoomExt();
  if(a === 'ortho' || a === 'osnap' || a === 'grid'){ start(a === 'ortho' ? 'ORTHO' : a === 'osnap' ? 'ACCROCHAGE' : 'GRILLE'); return; }
  if(a === 'metre') return showMetre();
  if(a === 'roofauto'){ const e = C.ents.find(x => C.sel.has(x.id) && x.t === 'roof'); if(!e) return;
    const ws = C.ents.filter(w => (w.t === 'wall' || w.t === 'room') && Math.abs(((w.z ?? 0) + (w.t === 'wall' ? (w.h ?? C.ht) : C.ht)) - (e.z ?? 0)) < .45), r = autoOutline(ws.length ? ws : C.ents.filter(belongs));
    if(!r){ log('Aucun mur sous cette toiture'); return; } pushHist(); e.pts = r.pts; delete e.x1; delete e.y1; delete e.x2; delete e.y2; log('Toiture ajustée au contour des murs (' + r.pts.length + ' côtés)'); return draw(); }
  if(a === 'metreopen'){ A.closeWin(); return A.METRE.openDoc(metreDoc(data())); }
  if(a === 'png') return exportPng();
  if(a === 'svg') return A.download((C.name||'plan').replace(/[^\w-]+/g,'_') + '.svg', standalone(), 'image/svg+xml');
  if(a === 'print') return printPlan();
  if(a === 'props') return toggleProps();
  if(a === 'help') return help();
  if(a === 'new') return newDrawing();
  if(a === 'open') return openDlg();
  if(a === 'delsel'){ start('EFFACER'); return; }
  if(a === 'flip'){ const e = C.ents.find(x => C.sel.has(x.id) && x.t === 'door'); if(e){ pushHist(); e.sw = -(e.sw||1); draw(); } return; }
});
A.on('change', '[data-pe]', el => { const k = el.dataset.pe; if(!C) return; pushHist(); C.ents.filter(e => C.sel.has(e.id)).forEach(e => { if(k === 'layer'){ if(el.value) e.layer = el.value; } else if(['ep','s','r','off','z','h','hb','H','a','b','pente','deb','sill','acro'].includes(k)){ const v = parseFloat(el.value); if(!isNaN(v)) e[k] = v; } else e[k] = el.value; }); draw(); });
A.on('change', '#cLv', el => { if(!C) return; if(el.value === 'new'){ start('NIVEAU'); const i = $('#cmdIn'); if(i) i.focus(); return; } C.lvz = parseFloat(el.value) || 0; C.sel.clear(); log('Niveau de travail : ' + fm(C.lvz) + ' m'); draw(); });
A.on('change', '[data-cp]', el => { const k = el.dataset.cp, v = parseFloat(el.value); if(C && v > 0){ C[k] = v; draw(); } });
A.on('change', '[data-cauto]', el => { if(C) C.auto = el.checked; });
A.on('click', '[data-clayer]', (el, e) => { if(e.target.closest('[data-clvis]')) return; C.cur = el.dataset.clayer; C.auto = false; draw(); });
A.on('click', '[data-clvis]', el => { const l = layer(el.dataset.clvis); l.v = !l.v; draw(); });
function newDrawing(){ if(C && C.dirty && C.ents.length && !confirm('Le plan actuel n\'est pas enregistré. Continuer ?')) return; C = fresh(); if(location.hash !== '#/app/atelier/nouveau') A.go('#/app/atelier/nouveau'); else A.render(); }
function openDlg(){
  const mine = Object.entries(S.works||{}).filter(([,w]) => w.kind === 'dessin');
  A.win({title:'Ouvrir un plan', body:`<b>Mes plans</b>${mine.length ? `<div class="stack s8">${mine.map(([id,w])=>`<a class="row between card" style="padding:12px;text-decoration:none" href="#/app/atelier/${id}"><b>${esc(w.data.name)}</b><span class="sub">${A.ago(w.updated_at)}</span></a>`).join('')}</div>` : '<p class="sub">Aucun plan enregistré.</p>'}
   <b>Maquettes 3D complètes (tous les niveaux)</b><div class="stack s8">${(A.AZ.projets||[]).map(p => `<button class="btn b-line" style="justify-content:space-between" data-cad3d="${p.id}"><span>${ic('cube')} ${esc(p.titre)}</span>${ic('chev')}</button>`).join('')}</div>
   <b>Plans des projets types (un niveau)</b><div class="stack s8">${(A.AZ.projets||[]).flatMap(p => (p.niveaux||[p]).map((l,i)=>`<button class="btn b-line" style="justify-content:space-between" data-cadpj="${p.id}" data-li="${i}"><span>${esc(p.titre)}${p.niveaux&&p.niveaux.length>1?' · '+esc(l.nom):''}</span>${ic('chev')}</button>`)).join('')}</div>`});
}
A.on('click', '[data-cad3d]', el => { const pj = A.AZ.projets.find(p => p.id === el.dataset.cad3d); A.closeWin(); if(V3){ V3.dispose(); V3 = null; } C = fresh(); Object.assign(C, fromProject3D(pj)); C._fit = true; if(location.hash !== '#/app/atelier/nouveau') A.go('#/app/atelier/nouveau'); else A.render(); });
A.on('click', '[data-cadpj]', el => { const pj = A.AZ.projets.find(p => p.id === el.dataset.cadpj); A.closeWin(); C = fresh(); Object.assign(C, fromProject(pj, +el.dataset.li)); C._fit = true; if(location.hash !== '#/app/atelier/nouveau') A.go('#/app/atelier/nouveau'); else A.render(); });
function help(){
  const rows = [['MUR / MU','Dessine des murs (épaisseur réglable : E 0.15)'],['LIGNE / L','Lignes successives'],['POLYLIGNE / PL','Polyligne (C pour clore)'],['RECTANGLE / REC','Rectangle par 2 coins'],['CERCLE / C','Centre puis rayon'],['PIECE / PI','Pièce : 2 coins puis le nom (surface calculée)'],['PORTE / PO','2 points sur le mur puis le côté d\'ouverture'],['FENETRE / FE','2 points sur le mur'],['COTE / COT','Cotation : 2 points puis position'],['TEXTE / T','Point puis texte'],['EFFACER / E','Efface la sélection ou les objets cliqués'],['DEPLACER / D, COPIER / CO','Sélection, point de base, destination'],['ROTATION / RO, MIROIR / MI','Sélection puis point de base / axe'],['ANNULER / U, RETABLIR / R','Ctrl+Z / Ctrl+Y'],['ZE','Zoom étendu (tout voir)'],['ORTHO / O (F8)','Traits horizontaux ou verticaux'],['ACC (F3), GRILLE / G (F7)','Accrochage aux objets, grille'],['EP / HT','Épaisseur des murs, hauteur pour le métré'],['METRE / MT','Métré du plan'],['ENR','Enregistrer (Ctrl+S)']];
  A.win({title:'Aide de l\'atelier de dessin', wide:true, body:`<div class="note info">${ic('info')}<span>Les unités sont en <b>mètres</b>. L'axe Y monte vers le haut comme sur AutoCAD. Molette = zoom, bouton du milieu (ou outil main) = déplacer la vue. Entrée ou Espace répète la dernière commande.</span></div>
   <div class="tw"><table class="t"><thead><tr><th>Commande</th><th>Effet</th></tr></thead><tbody>${rows.map(r=>`<tr><td class="mono" style="white-space:nowrap"><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div>
   <h3 style="font-size:16px">Dessin en 3D</h3><div class="tw"><table class="t"><tbody>${[['3D, 2D, PARTAGE','Vue 3D, vue en plan, ou les deux côte à côte (boutons dans la barre du haut)'],['NIVEAU / NIV','Choisit l\'altitude de travail (ex. 3 pour l\'étage) ; les autres niveaux sont grisés'],['COPIERNIVEAU / CN','Copie tout le niveau courant vers le haut (ex. 3) et passe au nouveau niveau'],['BOITE / BO','Boîte : 2 coins puis la hauteur'],['CYLINDRE / CYL','Centre, rayon puis hauteur'],['DALLE / DA','2 coins puis l\'épaisseur (S = dalle depuis une pièce ou un rectangle sélectionné)'],['POTEAU / POT','Clics successifs (S25 = section 25 cm)'],['POUTRE / POU','Points successifs (20 × 40 cm)'],['ESCALIER / ESC','Coin de départ, coin opposé, hauteur à monter'],['TOIT / TO','Entrée = toiture sur le contour des murs du niveau (plans en L, T, U, en croix…), S = sur les pièces ou formes sélectionnées, P = contour point par point, ou 2 coins ; puis le type (2P = 2 pans, 4P = 4 pans à croupes, 1P = monopente, T = terrasse) et la pente. Dans les propriétés : débord, sens du faîtage, sens de la pente, acrotère, « Ajuster au contour des murs »'],['EXTRUSION / EXT','Donne une hauteur à des rectangles, polylignes fermées, cercles ou pièces'],['ELEVATION / ELEV','Change l\'altitude des objets sélectionnés'],['MATERIAU / MAT, COULEUR / COUL','Matériau (enduit, brique, pierre, bois, tôle, tuiles, verre…) et couleur (#C0A080 ou blanc, beige, rouge…) des objets'],['RENDU, SOLEIL','Mode réaliste, maquette ou filaire ; heure du soleil (6 à 18)'],['RDM / ETUDIER','Étude complète de la poutre, de la ligne ou du mur sélectionné : appuis, charges, réactions, diagrammes V et M, ferraillage (solveur guidé)']].map(r=>`<tr><td class="mono" style="white-space:nowrap"><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div>
   <h3 style="font-size:16px">Saisie des points</h3><div class="tw"><table class="t"><tbody>
   <tr><td class="mono"><b>3,2</b></td><td>Point absolu x = 3 m, y = 2 m</td></tr><tr><td class="mono"><b>@4,0</b></td><td>4 m vers la droite depuis le dernier point</td></tr>
   <tr><td class="mono"><b>@3&lt;90</b></td><td>3 m dans la direction 90° (vers le haut)</td></tr><tr><td class="mono"><b>4.5</b></td><td>Distance directe : 4,50 m dans la direction du curseur</td></tr></tbody></table></div>
   <h3 style="font-size:16px">Exemple : une chambre de 3,50 × 3,00 m</h3><ol class="sub" style="display:grid;gap:4px"><li>Tapez <b class="mono">MUR</b> puis Entrée, tapez <b class="mono">0,0</b> Entrée.</li><li>Tapez <b class="mono">@3.5,0</b>, puis <b class="mono">@0,3</b>, puis <b class="mono">@-3.5,0</b>, puis <b class="mono">C</b> pour fermer.</li><li>Tapez <b class="mono">PO</b>, cliquez 2 points sur un mur puis le côté d'ouverture.</li><li>Tapez <b class="mono">PI</b>, cliquez 2 coins intérieurs puis tapez « Chambre ».</li><li>Tapez <b class="mono">MT</b> pour voir le métré.</li></ol>`});
}
})();
