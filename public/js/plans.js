/* =====================================================================
   Plans des projets types (SVG) : architecture, fondations, structure,
   électricité, plomberie, façade + avant-métré automatique
   Coordonnées en mètres, axe des murs, x vers la droite, y vers le bas.
   ===================================================================== */
(function(){
'use strict';
const {esc, F} = A;
const K = 40;                       // 1 m = 40 unités SVG
const r2 = v => Math.round(v*100)/100;
const fm = v => F(v, 2);            // 4,60
const TYPES = {
  sejour:{f:'#FFF4E8', d:'#2A2112'}, chambre:{f:'#EDF3FF', d:'#162238'}, cuisine:{f:'#F1F7E9', d:'#1A2414'},
  eau:{f:'#E6F5F6', d:'#11262A'}, wc:{f:'#E6F5F6', d:'#11262A'}, circ:{f:'#F4F2EE', d:'#141E2C'},
  terrasse:{f:'#FAF7F0', d:'#101B2B'}, escalier:{f:'#F4F2EE', d:'#141E2C'}, service:{f:'#F5F1EA', d:'#141E2C'}, bureau:{f:'#F3EEFB', d:'#1C1830'}
};
const WET = ['eau','wc','cuisine','service'];

/* ---------- niveaux (étages répétés développés un par un) ---------- */
const ORD = i => i === 0 ? 'Rez-de-chaussée' : i === 1 ? '1er étage' : i + 'e étage';
const LVC = new WeakMap();
function variant(s, i){
  const v = i === 0 ? s.rdc : s.etage, base = {nom:ORD(i), pieces:s.pieces, portes:s.portes || [], fenetres:s.fenetres || []};
  if(!v) return base;
  return {nom:base.nom, pieces:s.pieces.map(r => v.renomme && v.renomme[r.n] ? {...r, n:v.renomme[r.n]} : r), portes:[...base.portes, ...(v.portes || [])], fenetres:[...base.fenetres, ...(v.fenetres || [])]};
}
function levels(p){
  if(LVC.has(p)) return LVC.get(p);
  const out = [];
  (p.niveaux || [p]).forEach(s => { for(let r=0;r<(s.repeat || 1);r++){ const i = out.length; out.push({i, nom:ORD(i), court:i ? 'R+' + i : 'RDC', z:i*3.0, src:s, lv:variant(s, i)}); } });
  LVC.set(p, out); return out;
}
/* ---------- géométrie ---------- */
function levelOf(p, li){ const L = levels(p); return (L[li || 0] || L[0]).lv; }
function walls(lv, opt={}){
  const rooms = lv.pieces;
  const H = {}, V = {};
  rooms.forEach((r, ri) => {
    const open = r.t === 'terrasse';
    const add = (M, k, a, b) => { (M[k] = M[k] || []).push({a:Math.min(a,b), b:Math.max(a,b), ri, open}); };
    add(H, r2(r.y), r.x, r.x + r.w); add(H, r2(r.y + r.h), r.x, r.x + r.w);
    add(V, r2(r.x), r.y, r.y + r.h); add(V, r2(r.x + r.w), r.y, r.y + r.h);
  });
  const out = [];
  const split = (M, hor) => Object.entries(M).forEach(([k, list]) => {
    const c = +k; const pts = [...new Set(list.flatMap(s => [r2(s.a), r2(s.b)]))].sort((a,b)=>a-b);
    let cur = null;
    for(let i=0;i<pts.length-1;i++){
      const a = pts[i], b = pts[i+1], m = (a+b)/2;
      const cov = list.filter(s => s.a <= m && s.b >= m);
      if(!cov.length){ if(cur){ out.push(cur); cur = null; } continue; }
      const closed = cov.filter(s => !s.open);
      let type;
      if(cov.length === 1) type = closed.length ? 'ext' : 'none';
      else type = closed.length >= 2 ? 'int' : 'ext';
      if(type === 'none'){ if(cur){ out.push(cur); cur = null; } continue; }
      if(cur && cur.type === type && Math.abs(cur.b - a) < 1e-6) cur.b = b;
      else { if(cur) out.push(cur); cur = {hor, c, a, b, type}; }
    }
    if(cur) out.push(cur);
  });
  split(H, true); split(V, false);
  const te = opt.te || 0.20, ti = opt.ti || 0.15;
  return out.map(s => ({...s, t: s.type === 'ext' ? te : ti, x1: s.hor ? s.a : s.c, y1: s.hor ? s.c : s.a, x2: s.hor ? s.b : s.c, y2: s.hor ? s.c : s.b}));
}
function bbox(lv){
  const xs = lv.pieces.flatMap(r => [r.x, r.x+r.w]), ys = lv.pieces.flatMap(r => [r.y, r.y+r.h]);
  return {x0:Math.min(...xs), y0:Math.min(...ys), x1:Math.max(...xs), y1:Math.max(...ys)};
}
const area = r => Math.max(0, (r.w - 0.15) * (r.h - 0.15));
function wallAt(W, o){
  return W.find(w => (o.o === 'h') === w.hor && Math.abs(w.c - (o.o === 'h' ? o.y : o.x)) < 0.02 && (o.o === 'h' ? o.x : o.y) >= w.a - 0.02 && (o.o === 'h' ? o.x + o.w : o.y + o.w) <= w.b + 0.02);
}
function posts(p, lv, W){
  if(p.grille) return p.grille.x.flatMap(x => p.grille.y.map(y => [x, y]));
  const set = new Map();
  const add = (x, y) => set.set(r2(x)+','+r2(y), [r2(x), r2(y)]);
  W.forEach(w => { add(w.x1, w.y1); add(w.x2, w.y2);
    const L = w.b - w.a; if(L > 4.6){ const n = Math.ceil(L / 4.2); for(let k=1;k<n;k++){ const t = w.a + L*k/n; w.hor ? add(t, w.c) : add(w.c, t); } } });
  return [...set.values()];
}

/* ---------- habillage SVG ---------- */
function frame(lv, body, opt){
  const b = bbox(lv), m = opt.margin ?? 1.9;
  const x = (b.x0 - m) * K, y = (b.y0 - m) * K, w = (b.x1 - b.x0 + 2*m) * K, h = (b.y1 - b.y0 + 2*m + (opt.extraBottom||0)) * K;
  const bg = opt.dark ? '#13233A' : '#FBFAF7';
  return `<svg viewBox="${x} ${y} ${w} ${h}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Segoe UI,sans-serif" role="img" aria-label="${esc(opt.label||'Plan')}">
   <defs>
    <pattern id="hatch${opt.dark?'D':''}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="${opt.dark?'#3A5070':'#C9C2B5'}" stroke-width="2"/></pattern>
    <pattern id="grid${opt.dark?'D':''}" width="${K}" height="${K}" patternUnits="userSpaceOnUse"><path d="M ${K} 0 L 0 0 0 ${K}" fill="none" stroke="${opt.dark?'#1C3150':'#ECE8E1'}" stroke-width="1"/></pattern>
   </defs>
   <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${bg}"/>${opt.grid?`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#grid${opt.dark?'D':''})"/>`:''}
   ${body}</svg>`;
}
function wallsSvg(W, opt){
  const col = opt.dark ? '#FAD98D' : (opt.wallColor || '#2A3340');
  return W.map(w => {
    const t = w.t, h = t/2;
    const [x, y, ww, hh] = w.hor ? [w.a - h, w.c - h, w.b - w.a + t, t] : [w.c - h, w.a - h, t, w.b - w.a + t];
    return `<rect x="${x*K}" y="${y*K}" width="${ww*K}" height="${hh*K}" fill="${opt.light ? 'none' : col}" ${opt.light?`stroke="${col}" stroke-width="1.2"`:''}/>`;
  }).join('');
}
function openingsSvg(lv, W, opt){
  const bg = opt.dark ? '#13233A' : '#FBFAF7', ln = opt.dark ? '#FAD98D' : '#2A3340', thin = opt.dark ? 1.4 : 1.2;
  let s = '';
  (lv.portes || []).forEach(d => {
    const w = wallAt(W, d), t = w ? w.t : 0.2;
    const [x0, y0] = [d.x, d.y], [x1, y1] = d.o === 'h' ? [d.x + d.w, d.y] : [d.x, d.y + d.w];
    s += d.o === 'h' ? `<rect x="${x0*K}" y="${(y0 - t/2 - .01)*K}" width="${d.w*K}" height="${(t+.02)*K}" fill="${bg}"/>` : `<rect x="${(x0 - t/2 - .01)*K}" y="${y0*K}" width="${(t+.02)*K}" height="${d.w*K}" fill="${bg}"/>`;
    const H = d.h ? [x1, y1] : [x0, y0], E = d.h ? [x0, y0] : [x1, y1], sg = d.s || 1;
    const L = d.o === 'h' ? [H[0], H[1] + sg*d.w] : [H[0] + sg*d.w, H[1]];
    const a = [L[0]-H[0], L[1]-H[1]], b = [E[0]-H[0], E[1]-H[1]], sweep = (a[0]*b[1] - a[1]*b[0]) > 0 ? 1 : 0;
    s += `<line x1="${H[0]*K}" y1="${H[1]*K}" x2="${L[0]*K}" y2="${L[1]*K}" stroke="${ln}" stroke-width="${thin*1.6}"/><path d="M ${L[0]*K} ${L[1]*K} A ${d.w*K} ${d.w*K} 0 0 ${sweep} ${E[0]*K} ${E[1]*K}" fill="none" stroke="${ln}" stroke-width="${thin*.8}" stroke-dasharray="${opt.dark?'':'3 2'}"/>`;
    if(d.double){ /* porte à deux battants */ }
  });
  (lv.fenetres || []).forEach(f => {
    const w = wallAt(W, f), t = w ? w.t : 0.2;
    if(f.o === 'h'){
      s += `<rect x="${f.x*K}" y="${(f.y - t/2)*K}" width="${f.w*K}" height="${t*K}" fill="${bg}" stroke="${ln}" stroke-width="${thin}"/><line x1="${f.x*K}" y1="${f.y*K}" x2="${(f.x+f.w)*K}" y2="${f.y*K}" stroke="${ln}" stroke-width="${thin}"/>`;
    }else{
      s += `<rect x="${(f.x - t/2)*K}" y="${f.y*K}" width="${t*K}" height="${f.w*K}" fill="${bg}" stroke="${ln}" stroke-width="${thin}"/><line x1="${f.x*K}" y1="${f.y*K}" x2="${f.x*K}" y2="${(f.y+f.w)*K}" stroke="${ln}" stroke-width="${thin}"/>`;
    }
  });
  return s;
}
function roomsSvg(lv, opt){
  return lv.pieces.map(r => {
    const T = TYPES[r.t] || TYPES.circ;
    const fill = opt.dark ? 'none' : (opt.nofill ? 'none' : (r.t === 'terrasse' ? 'url(#hatch)' : T.f));
    let s = `<rect x="${r.x*K}" y="${r.y*K}" width="${r.w*K}" height="${r.h*K}" fill="${fill}" ${r.t==='terrasse'?`stroke="${opt.dark?'#3A5070':'#B5AC9C'}" stroke-dasharray="6 4" stroke-width="1.2"`:''}/>`;
    if(r.t === 'escalier'){
      const n = Math.max(6, Math.round(Math.max(r.w, r.h) / 0.28)), vert = r.h >= r.w;
      for(let k=1;k<n;k++){ s += vert ? `<line x1="${(r.x+.1)*K}" x2="${(r.x+r.w-.1)*K}" y1="${(r.y + r.h*k/n)*K}" y2="${(r.y + r.h*k/n)*K}" stroke="${opt.dark?'#5F7590':'#9A9184'}" stroke-width="1"/>` : `<line y1="${(r.y+.1)*K}" y2="${(r.y+r.h-.1)*K}" x1="${(r.x + r.w*k/n)*K}" x2="${(r.x + r.w*k/n)*K}" stroke="${opt.dark?'#5F7590':'#9A9184'}" stroke-width="1"/>`; }
      s += vert ? `<line x1="${(r.x+r.w/2)*K}" x2="${(r.x+r.w/2)*K}" y1="${(r.y+r.h-.3)*K}" y2="${(r.y+.4)*K}" stroke="${opt.dark?'#FAD98D':'#E8752A'}" stroke-width="1.6" marker-end="url(#arr)"/>` : '';
    }
    return s;
  }).join('');
}
function labelsSvg(lv, opt){
  if(opt.labels === false) return '';
  const col = opt.dark ? '#E3EAF2' : '#14202E', sub = opt.dark ? '#8EA1B8' : '#5E6B7A';
  return lv.pieces.map(r => {
    const cx = (r.x + r.w/2) * K, cy = (r.y + r.h/2) * K;
    const narrow = r.w < 1.7, fs = Math.min(13, Math.max(8.5, Math.min(r.w, r.h) * 4.2));
    const rot = narrow && r.h > r.w * 1.6 ? ` transform="rotate(-90 ${cx} ${cy})"` : '';
    return `<g${rot}><text x="${cx}" y="${cy - (opt.area===false?0:fs*.25)}" text-anchor="middle" font-size="${fs}" font-weight="700" fill="${col}">${esc(r.n)}</text>${opt.area===false||r.t==='escalier'?'':`<text x="${cx}" y="${cy + fs*.95}" text-anchor="middle" font-size="${fs*.82}" fill="${sub}">${fm(area(r))} m²</text>`}</g>`;
  }).join('');
}
function dimsSvg(lv, opt){
  const b = bbox(lv), col = opt.dark ? '#8EA1B8' : '#5E6B7A', fs = 10;
  const xs = [...new Set(lv.pieces.flatMap(r => [r2(r.x), r2(r.x+r.w)]))].sort((a,b)=>a-b);
  const ys = [...new Set(lv.pieces.flatMap(r => [r2(r.y), r2(r.y+r.h)]))].sort((a,b)=>a-b);
  const tick = (x, y) => `<line x1="${x*K-4}" y1="${y*K+4}" x2="${x*K+4}" y2="${y*K-4}" stroke="${col}" stroke-width="1.3"/>`;
  let s = '';
  const hRow = (y, pts) => { s += `<line x1="${pts[0]*K}" x2="${pts[pts.length-1]*K}" y1="${y*K}" y2="${y*K}" stroke="${col}" stroke-width=".8"/>`;
    pts.forEach(x => { s += tick(x, y) + `<line x1="${x*K}" x2="${x*K}" y1="${(y+.15)*K}" y2="${(b.y0-.25)*K}" stroke="${col}" stroke-width=".5" stroke-dasharray="2 2"/>`; });
    for(let i=0;i<pts.length-1;i++){ const L = pts[i+1]-pts[i]; if(L < .5) continue; s += `<text x="${(pts[i]+L/2)*K}" y="${(y-.12)*K}" text-anchor="middle" font-size="${fs}" fill="${col}">${fm(L)}</text>`; } };
  const vRow = (x, pts) => { s += `<line y1="${pts[0]*K}" y2="${pts[pts.length-1]*K}" x1="${x*K}" x2="${x*K}" stroke="${col}" stroke-width=".8"/>`;
    pts.forEach(y => { s += tick(x, y) + `<line y1="${y*K}" y2="${y*K}" x1="${(x+.15)*K}" x2="${(b.x0-.25)*K}" stroke="${col}" stroke-width=".5" stroke-dasharray="2 2"/>`; });
    for(let i=0;i<pts.length-1;i++){ const L = pts[i+1]-pts[i]; if(L < .5) continue; const cy = (pts[i]+L/2)*K; s += `<text x="${(x-.12)*K}" y="${cy}" text-anchor="middle" font-size="${fs}" fill="${col}" transform="rotate(-90 ${(x-.12)*K} ${cy})">${fm(L)}</text>`; } };
  hRow(b.y0 - .8, xs); hRow(b.y0 - 1.45, [b.x0, b.x1]);
  vRow(b.x0 - .8, ys); vRow(b.x0 - 1.45, [b.y0, b.y1]);
  return s;
}
function arrowDefs(dark){ return `<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${dark?'#FAD98D':'#E8752A'}"/></marker></defs>`; }
function northSvg(lv, dark){ const b = bbox(lv), x = (b.x1 + 1.1)*K, y = (b.y0 - 1.1)*K, c = dark ? '#FAD98D' : '#14202E';
  return `<g><circle cx="${x}" cy="${y}" r="13" fill="none" stroke="${c}" stroke-width="1"/><path d="M ${x} ${y-12} L ${x+5} ${y+6} L ${x} ${y+2} L ${x-5} ${y+6} z" fill="${c}"/><text x="${x}" y="${y-16}" text-anchor="middle" font-size="10" font-weight="700" fill="${c}">N</text></g>`; }
function titleSvg(lv, p, name, ech, dark){
  const b = bbox(lv), w = 6.2, h = 1.15, x = (b.x1 - w + 1.6), y = (b.y1 + .6 + (name === 'PLAN DE FONDATIONS' ? .4 : 0));
  const c = dark ? '#E3EAF2' : '#14202E', sub = dark ? '#8EA1B8' : '#5E6B7A', st = dark ? '#3A5070' : '#14202E';
  return `<g><rect x="${x*K}" y="${y*K}" width="${w*K}" height="${h*K}" fill="${dark?'#17263B':'#fff'}" stroke="${st}" stroke-width="1.2"/>
   <line x1="${(x+4.5)*K}" x2="${(x+4.5)*K}" y1="${y*K}" y2="${(y+h)*K}" stroke="${st}" stroke-width=".8"/>
   <text x="${(x+.18)*K}" y="${(y+.42)*K}" font-size="11" font-weight="800" fill="${c}">${esc(name)}</text>
   <text x="${(x+.18)*K}" y="${(y+.82)*K}" font-size="9" fill="${sub}">${esc(p.titre)} · ${esc(lv.nom||'RDC')}</text>
   <text x="${(x+5.35)*K}" y="${(y+.5)*K}" text-anchor="middle" font-size="8" fill="${sub}">ÉCHELLE</text>
   <text x="${(x+5.35)*K}" y="${(y+.88)*K}" text-anchor="middle" font-size="11" font-weight="700" fill="${c}">${ech}</text></g>`;
}

/* ---------- plans ---------- */
const PLAN = A.PLAN = {walls, bbox, area, posts, levelOf, levels, TYPES, WET};

PLAN.thumb = function(p, opt={}){
  if(!p) return '';
  const lv = levelOf(p, opt.level || 0), W = walls(lv);
  const o = {dark:opt.dark, labels:opt.labels ? true : false, area:false};
  return frame(lv, arrowDefs(o.dark) + roomsSvg(lv, o) + wallsSvg(W, o) + openingsSvg(lv, W, o) + (opt.labels ? labelsSvg(lv, o) : ''), {dark:o.dark, margin:.6, grid:true, label:p.titre});
};

PLAN.archi = function(p, li=0, opt={}){
  const lv = levelOf(p, li), W = walls(lv, p.murs), o = {dark:opt.dark};
  return frame(lv, arrowDefs(o.dark) + roomsSvg(lv, o) + wallsSvg(W, o) + openingsSvg(lv, W, o) + labelsSvg(lv, o) + dimsSvg(lv, o) + cutLines(p, lv) + northSvg(lv, o.dark) + titleSvg(lv, p, 'PLAN ' + (levels(p)[li] || {nom:''}).nom.toUpperCase(), '1/100', o.dark),
    {dark:o.dark, extraBottom:1.2, label:'Plan architectural ' + p.titre});
};

function cutLines(p, lv){
  const b = bbox(lv); let s = '';
  (p.coupes || []).forEach(C => {
    const st = 'stroke="#C8363B" stroke-width="1.8" stroke-dasharray="14 4 3 4"';
    const tag = (x, y, dx, dy) => `<path d="M ${x*K} ${y*K} l ${dx*14} ${dy*14}" stroke="#C8363B" stroke-width="2.2" marker-end="url(#arrC)"/><text x="${(x*K) + (dx ? dx*24 : -10)}" y="${(y*K) + (dy ? dy*24 : 0) + (dx ? 4 : 0)}" text-anchor="middle" font-size="13" font-weight="800" fill="#C8363B">${C.nom}</text>`;
    if(C.x != null) s += `<line x1="${C.x*K}" x2="${C.x*K}" y1="${(b.y0-.9)*K}" y2="${(b.y1+.5)*K}" ${st}/>` + tag(C.x, b.y0 - .9, 1, 0) + tag(C.x, b.y1 + .5, 1, 0);
    else s += `<line y1="${C.y*K}" y2="${C.y*K}" x1="${(b.x0-.6)*K}" x2="${(b.x1+.9)*K}" ${st}/>` + tag(b.x0 - .6, C.y, 0, 1) + tag(b.x1 + .9, C.y, 0, 1);
  });
  return s ? `<defs><marker id="arrC" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#C8363B"/></marker></defs>` + s : '';
}
function axesSvg(M, lv){
  const b = bbox(lv), ax = M.G.ax, c = '#7A8794'; let s = '';
  const bub = (x, y, t) => `<circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="${c}" stroke-width="1.2"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="10" font-weight="700" fill="#14202E">${t}</text>`;
  ax.x.forEach(a => { s += `<line x1="${a.v*K}" x2="${a.v*K}" y1="${(b.y0-1.3)*K}" y2="${(b.y1+.3)*K}" stroke="${c}" stroke-width=".7" stroke-dasharray="10 3 2 3"/>` + bub(a.v*K, (b.y0-1.55)*K, a.n); });
  ax.y.forEach(a => { s += `<line y1="${a.v*K}" y2="${a.v*K}" x1="${(b.x0-1.3)*K}" x2="${(b.x1+.3)*K}" stroke="${c}" stroke-width=".7" stroke-dasharray="10 3 2 3"/>` + bub((b.x0-1.55)*K, a.v*K, a.n); });
  const row = (pts, hor) => { for(let i=0;i<pts.length-1;i++){ const L = pts[i+1]-pts[i]; if(L < .45) continue; const m = (pts[i]+L/2)*K;
    s += hor ? `<text x="${m}" y="${(b.y0-.85)*K}" text-anchor="middle" font-size="9.5" fill="#5E6B7A">${fm(L)}</text>` : `<text x="${(b.x0-.85)*K}" y="${m}" text-anchor="middle" font-size="9.5" fill="#5E6B7A" transform="rotate(-90 ${(b.x0-.85)*K} ${m})">${fm(L)}</text>`; } };
  row(ax.x.map(a => a.v), true); row(ax.y.map(a => a.v), false);
  return s;
}
PLAN.structure = function(p, li=0, opt={}){
  const M = A.PRJ.model(p), L = levels(p), lvx = L[li] || L[0], lv = lvx.lv;
  const hl = opt.hl; let s = roomsSvg(lv, {nofill:true});
  s += M.panels.filter(c => c.lvl === lvx.i).map(c => {
    const on = hl === c.id, cx = (c.x + c.w/2)*K, cy = (c.y + c.h/2)*K;
    let g = `<g data-el="${c.id}" style="cursor:pointer"><rect x="${(c.x+.1)*K}" y="${(c.y+.1)*K}" width="${(c.w-.2)*K}" height="${(c.h-.2)*K}" fill="${on ? 'rgba(232,117,42,.25)' : c.tremie ? '#F5F1EA' : 'rgba(47,111,219,.05)'}" stroke="${on ? '#E8752A' : 'none'}" stroke-width="2"/>`;
    if(c.tremie) g += `<line x1="${(c.x+.1)*K}" y1="${(c.y+.1)*K}" x2="${(c.x+c.w-.1)*K}" y2="${(c.y+c.h-.1)*K}" stroke="#9A9184"/><line x1="${(c.x+c.w-.1)*K}" y1="${(c.y+.1)*K}" x2="${(c.x+.1)*K}" y2="${(c.y+c.h-.1)*K}" stroke="#9A9184"/><text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="9" fill="#5E6B7A" font-weight="700">TRÉMIE</text>`;
    else { const d = c.dir === 'x'; if(c.w > 1.2 && c.h > 1.2) g += d ? `<line y1="${cy+10}" y2="${cy+10}" x1="${(c.x+.35)*K}" x2="${(c.x+c.w-.35)*K}" stroke="#2F6FDB" stroke-width="1.4" marker-end="url(#arrB)" marker-start="url(#arrB)"/>` : `<line x1="${cx+10}" x2="${cx+10}" y1="${(c.y+.35)*K}" y2="${(c.y+c.h-.35)*K}" stroke="#2F6FDB" stroke-width="1.4" marker-end="url(#arrB)" marker-start="url(#arrB)"/>`;
      g += `<text x="${cx}" y="${cy-6}" text-anchor="middle" font-size="9" font-weight="700" fill="#2F6FDB">${c.id}</text><text x="${cx}" y="${cy+3}" text-anchor="middle" font-size="8.5" fill="#2F6FDB">${c.hd}</text>`; }
    return g + '</g>';
  }).join('');
  const BM = M.beams.filter(b => b.lvl === (M.slab ? lvx.i : 0));
  BM.forEach(bm => { const w = bm.s, bw = bm.b, h = bw/2, on = hl === bm.id;
    const [x, y, ww, hh] = w.hor ? [w.a, w.c - h, w.b - w.a, bw] : [w.c - h, w.a, bw, w.b - w.a];
    s += `<g data-el="${bm.id}" style="cursor:pointer"><rect x="${x*K}" y="${y*K}" width="${ww*K}" height="${hh*K}" fill="${on ? '#E8752A' : '#FDF1E6'}" stroke="#C95F18" stroke-width="1" stroke-dasharray="${on ? '' : '5 3'}"/><rect x="${x*K - (w.hor?0:6)}" y="${y*K - (w.hor?6:0)}" width="${ww*K + (w.hor?0:12)}" height="${hh*K + (w.hor?12:0)}" fill="transparent"/>`;
    if(w.b - w.a > 1.6){ const cx = (w.a + w.b)/2*K, lab = `${Math.round(bm.b*100)}×${Math.round(bm.h*100)}`;
      s += w.hor ? `<text x="${cx}" y="${(w.c - h)*K - 3}" text-anchor="middle" font-size="7.5" fill="#C95F18" font-weight="700">${lab}</text>` : `<text x="${(w.c - h)*K - 3}" y="${cx}" text-anchor="middle" font-size="7.5" fill="#C95F18" font-weight="700" transform="rotate(-90 ${(w.c - h)*K - 3} ${cx})">${lab}</text>`; }
    s += '</g>'; });
  M.postEls.filter(e => e.lvl === (M.slab ? lvx.i : 0)).forEach(e => { const a = e.d.a, on = hl === e.id || hl === e.post;
    s += `<g data-el="${e.id}" style="cursor:pointer"><rect x="${(e.x-a/2)*K}" y="${(e.y-a/2)*K}" width="${a*K}" height="${a*K}" fill="${on ? '#E8752A' : '#14202E'}"/><rect x="${(e.x-.3)*K}" y="${(e.y-.3)*K}" width="${.6*K}" height="${.6*K}" fill="transparent"/><text x="${(e.x+a/2+.06)*K}" y="${(e.y-a/2-.05)*K}" font-size="8" font-weight="700" fill="#14202E">${e.post}</text></g>`; });
  const defs = `<defs><marker id="arrB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="#2F6FDB"/></marker></defs>`;
  const name = M.slab ? 'COFFRAGE · PLANCHER HAUT ' + lvx.court : 'STRUCTURE · POTEAUX ET CHAÎNAGES';
  return frame(lv, defs + arrowDefs() + s + axesSvg(M, lv) + titleSvg(lv, p, name, '1/100'), {extraBottom:1.2, label:'Plan de structure'});
};
function gridBeams(p){
  const g = p.grille, out = [];
  g.y.forEach(y => { for(let i=0;i<g.x.length-1;i++) out.push({hor:true, c:y, a:g.x[i], b:g.x[i+1], x1:g.x[i], x2:g.x[i+1], y1:y, y2:y}); });
  g.x.forEach(x => { for(let i=0;i<g.y.length-1;i++) out.push({hor:false, c:x, a:g.y[i], b:g.y[i+1], x1:x, x2:x, y1:g.y[i], y2:g.y[i+1]}); });
  return out;
}
PLAN.fondations = function(p, opt={}){
  const M = A.PRJ.model(p), lv = levelOf(p, 0), hl = opt.hl; let s = roomsSvg(lv, {nofill:true});
  M.longs.forEach(l => { const w = l.s, h = l.b/2, on = hl === l.id; const [x, y, ww, hh] = w.hor ? [w.a, w.c - h, w.b - w.a, l.b] : [w.c - h, w.a, l.b, w.b - w.a];
    s += `<g data-el="${l.id}" style="cursor:pointer"><rect x="${x*K}" y="${y*K}" width="${ww*K}" height="${hh*K}" fill="${on ? '#E8752A' : '#EEF3FA'}" stroke="#2F6FDB" stroke-width="1"/><rect x="${x*K - (w.hor?0:6)}" y="${y*K - (w.hor?6:0)}" width="${ww*K + (w.hor?0:12)}" height="${hh*K + (w.hor?12:0)}" fill="transparent"/></g>`; });
  M.semelles.forEach(e => { const on = hl === e.id, B = e.B;
    s += `<g data-el="${e.id}" style="cursor:pointer"><rect x="${(e.x-B/2)*K}" y="${(e.y-B/2)*K}" width="${B*K}" height="${B*K}" fill="${on ? 'rgba(232,117,42,.35)' : 'rgba(232,117,42,.10)'}" stroke="#C95F18" stroke-width="${on ? 2.2 : 1.3}" stroke-dasharray="${on ? '' : '6 3'}"/><rect x="${(e.x-e.a/2)*K}" y="${(e.y-e.a/2)*K}" width="${e.a*K}" height="${e.a*K}" fill="#14202E"/><text x="${(e.x+B/2+.04)*K}" y="${(e.y+B/2+.22)*K}" font-size="8" fill="#C95F18" font-weight="700">${e.id} · ${e.typ}</text></g>`; });
  const b0 = bbox(lv), ext = Math.max(0, ...M.semelles.map(e => e.B/2)) + .1;
  const lvE = {nom:lv.nom, pieces:[{x:b0.x0 - ext, y:b0.y0 - ext, w:b0.x1 - b0.x0 + 2*ext, h:b0.y1 - b0.y0 + 2*ext}]}, b = bbox(lvE);
  s += `<text x="${b.x0*K}" y="${(b.y1+.35)*K}" font-size="10" fill="#14202E"><tspan font-weight="700">Semelles :</tspan> ${M.types.map((t,i) => `S${i+1} = ${fm(t[0])}×${fm(t[0])}×${fm(t[1])} (${M.semelles.filter(x => x.typ === 'S'+(i+1)).length})`).join(' · ')} · σsol ${fm(M.sol.sigma,1)} bar · fond de fouille −${fm(M.sol.prof)}</text>`;
  return frame(lvE, s + axesSvg(M, lvE) + titleSvg(lvE, p, 'PLAN DE FONDATIONS', '1/100'), {extraBottom:1.6, label:'Plan de fondations'});
};
function doorsOfRoom(lv, r){
  return (lv.portes||[]).filter(d => d.o === 'h' ? (Math.abs(d.y - r.y) < .02 || Math.abs(d.y - r.y - r.h) < .02) && d.x >= r.x - .02 && d.x + d.w <= r.x + r.w + .02
                                              : (Math.abs(d.x - r.x) < .02 || Math.abs(d.x - r.x - r.w) < .02) && d.y >= r.y - .02 && d.y + d.w <= r.y + r.h + .02);
}
const PRISES = {sejour:5, chambre:3, cuisine:4, bureau:4, circ:1, eau:1, service:2, wc:0, escalier:0, terrasse:1};
PLAN.elecData = function(p, li=0){
  const lv = levelOf(p, li); const pts = [];
  lv.pieces.forEach(r => {
    if(r.t === 'escalier'){ pts.push({k:'L', x:r.x+r.w/2, y:r.y+r.h/2, r}); return; }
    const big = r.w * r.h > 20;
    pts.push({k:'L', x:r.x+r.w/2, y:r.y+r.h/2, r});
    if(big) pts.push({k:'L', x:r.x+r.w/2, y:r.y+r.h*.25, r});
    const d = doorsOfRoom(lv, r)[0];
    if(d){
      const inX = d.o === 'v' ? (Math.abs(d.x - r.x) < .02 ? .3 : -.3) : 0, inY = d.o === 'h' ? (Math.abs(d.y - r.y) < .02 ? .3 : -.3) : 0;
      const sx = d.o === 'h' ? (d.h ? d.x - .25 : d.x + d.w + .25) : d.x + inX, sy = d.o === 'v' ? (d.h ? d.y - .25 : d.y + d.w + .25) : d.y + inY;
      pts.push({k:'S', x:Math.min(r.x+r.w-.2, Math.max(r.x+.2, sx)), y:Math.min(r.y+r.h-.2, Math.max(r.y+.2, sy)), r});
    }
    const n = PRISES[r.t] ?? 1;
    const spots = [[r.x+.25, r.y+r.h/2, 'v'],[r.x+r.w-.25, r.y+r.h/2, 'v'],[r.x+r.w/2, r.y+r.h-.25, 'h'],[r.x+r.w/2, r.y+.25, 'h'],[r.x+.25, r.y+r.h*.8, 'v'],[r.x+r.w-.25, r.y+r.h*.2, 'v']];
    for(let k=0;k<n && k<spots.length;k++) pts.push({k:'P', x:spots[k][0], y:spots[k][1], r});
    if(r.t === 'cuisine') pts.push({k:'P32', x:r.x+r.w*.3, y:r.y+.25, r});
    if(r.t === 'eau') pts.push({k:'CE', x:r.x+r.w-.35, y:r.y+.35, r});
  });
  const main = (lv.portes||[])[0] || {x:0, y:0, o:'h', w:1};
  const tab = {x: main.o === 'h' ? main.x + main.w + .45 : main.x + .3, y: main.o === 'h' ? main.y + .3 : main.y + main.w + .45};
  const L = pts.filter(x=>x.k==='L').length, P = pts.filter(x=>x.k==='P').length;
  const circuits = [
    {n:'Éclairage', nb:L, cir:Math.ceil(L/8), cable:'1,5 mm²', prot:'Disj. 10 A', p:L*100},
    {n:'Prises 16 A', nb:P, cir:Math.ceil(P/8), cable:'2,5 mm²', prot:'Disj. 20 A', p:Math.min(P,8)*250*Math.ceil(P/8)},
    {n:'Cuisson (plaque/four)', nb:pts.filter(x=>x.k==='P32').length, cir:pts.filter(x=>x.k==='P32').length, cable:'6 mm²', prot:'Disj. 32 A', p:pts.filter(x=>x.k==='P32').length*4000},
    {n:'Chauffe-eau', nb:pts.filter(x=>x.k==='CE').length, cir:Math.min(1,pts.filter(x=>x.k==='CE').length), cable:'2,5 mm²', prot:'Disj. 20 A', p:pts.filter(x=>x.k==='CE').length?1500:0},
    {n:'Climatisation', nb:lv.pieces.filter(r=>r.t==='chambre'||r.t==='sejour').length, cir:lv.pieces.filter(r=>r.t==='chambre'||r.t==='sejour').length, cable:'2,5 mm²', prot:'Disj. 20 A', p:lv.pieces.filter(r=>r.t==='chambre'||r.t==='sejour').length*1200}
  ];
  return {lv, pts, tab, circuits};
};
PLAN.elec = function(p, li=0){
  const {lv, pts, tab} = PLAN.elecData(p, li), W = walls(lv, p.murs);
  let s = roomsSvg(lv, {nofill:true}) + wallsSvg(W, {light:true, wallColor:'#9AA5B1'}) + openingsSvg(lv, W, {}) + labelsSvg(lv, {area:false});
  pts.filter(x => x.k === 'S').forEach(sw => { const l = pts.find(x => x.k === 'L' && x.r === sw.r); if(l) s += `<path d="M ${sw.x*K} ${sw.y*K} Q ${(sw.x+l.x)/2*K + 12} ${(sw.y+l.y)/2*K - 12} ${l.x*K} ${l.y*K}" fill="none" stroke="#2F6FDB" stroke-width="1" stroke-dasharray="4 3"/>`; });
  pts.forEach(o => {
    const x = o.x*K, y = o.y*K;
    if(o.k === 'L') s += `<g stroke="#C95F18" stroke-width="1.6" fill="#fff"><circle cx="${x}" cy="${y}" r="7"/><line x1="${x-5}" y1="${y-5}" x2="${x+5}" y2="${y+5}"/><line x1="${x+5}" y1="${y-5}" x2="${x-5}" y2="${y+5}"/></g>`;
    if(o.k === 'S') s += `<g stroke="#2F6FDB" stroke-width="1.5" fill="#fff"><circle cx="${x}" cy="${y}" r="4"/><line x1="${x+3}" y1="${y-3}" x2="${x+10}" y2="${y-10}"/></g>`;
    if(o.k === 'P') s += `<g stroke="#1E9B5E" stroke-width="1.5" fill="#fff"><path d="M ${x-6} ${y} A 6 6 0 0 1 ${x+6} ${y} Z"/><line x1="${x}" y1="${y-6}" x2="${x}" y2="${y-10}"/></g>`;
    if(o.k === 'P32') s += `<g stroke="#8E4FD1" stroke-width="1.6" fill="#fff"><path d="M ${x-7} ${y} A 7 7 0 0 1 ${x+7} ${y} Z"/><text x="${x}" y="${y+11}" font-size="7" text-anchor="middle" fill="#8E4FD1" stroke="none" font-weight="700">32A</text></g>`;
    if(o.k === 'CE') s += `<g stroke="#0E8C95" stroke-width="1.5" fill="#fff"><rect x="${x-7}" y="${y-7}" width="14" height="14" rx="3"/><text x="${x}" y="${y+3}" font-size="7" text-anchor="middle" fill="#0E8C95" stroke="none" font-weight="700">CE</text></g>`;
  });
  s += `<g><rect x="${tab.x*K - 10}" y="${tab.y*K - 7}" width="20" height="14" fill="#14202E"/><text x="${tab.x*K}" y="${tab.y*K + 3.5}" font-size="7.5" text-anchor="middle" fill="#FAD98D" font-weight="700">TGBT</text></g>`;
  return frame(lv, s + titleSvg(lv, p, 'PLAN D\'ÉLECTRICITÉ', '1/100'), {extraBottom:1.2, margin:1.2, label:'Plan électrique'});
};
PLAN.plomberie = function(p, li=0){
  const lv = levelOf(p, li), W = walls(lv, p.murs), b = bbox(lv);
  let s = roomsSvg(lv, {nofill:true}) + wallsSvg(W, {light:true, wallColor:'#9AA5B1'}) + openingsSvg(lv, W, {}) + labelsSvg(lv, {area:false});
  const fx = [];
  lv.pieces.forEach(r => {
    if(r.t === 'eau'){ fx.push({k:'douche', x:r.x+.55, y:r.y+.55, r}); fx.push({k:'lavabo', x:r.x+r.w-.45, y:r.y+.3, r}); if(!lv.pieces.some(q => q.t === 'wc') || r.w*r.h > 6.5) fx.push({k:'wc', x:r.x+r.w-.4, y:r.y+r.h-.45, r}); }
    if(r.t === 'wc'){ fx.push({k:'wc', x:r.x+r.w/2, y:r.y+r.h-.45, r}); fx.push({k:'lm', x:r.x+r.w/2, y:r.y+.25, r}); }
    if(r.t === 'cuisine') fx.push({k:'evier', x:r.x+.6, y:r.y+r.h-.35, r});
    if(r.t === 'service') fx.push({k:'bac', x:r.x+r.w/2, y:r.y+r.h-.35, r});
  });
  const cpt = {x:b.x0 - .9, y:b.y0 + .6};
  const fosse = {x:b.x1 + .3, y:b.y1 + .3};
  fx.forEach(f => { const midx = f.x;
    s += `<path d="M ${cpt.x*K} ${cpt.y*K} L ${(b.x0+.12)*K} ${cpt.y*K} L ${(b.x0+.12)*K} ${(f.y)*K} L ${f.x*K} ${f.y*K}" fill="none" stroke="#2F6FDB" stroke-width="1.3" opacity=".75"/>`;
    const ex = f.r.y + f.r.h > b.y1 - .05 ? f.r.y + f.r.h : b.y1;
    s += `<path d="M ${f.x*K} ${f.y*K} L ${midx*K} ${(b.y1+.3)*K} L ${fosse.x*K} ${(b.y1+.3)*K}" fill="none" stroke="#8B5A2B" stroke-width="1.6" stroke-dasharray="7 4" opacity=".8"/>`;
  });
  const sym = {
    douche:(x,y)=>`<rect x="${x-16}" y="${y-16}" width="32" height="32" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/><line x1="${x-16}" y1="${y-16}" x2="${x+16}" y2="${y+16}" stroke="#0E8C95"/><line x1="${x+16}" y1="${y-16}" x2="${x-16}" y2="${y+16}" stroke="#0E8C95"/>`,
    lavabo:(x,y)=>`<rect x="${x-12}" y="${y-8}" width="24" height="16" rx="7" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/>`,
    lm:(x,y)=>`<rect x="${x-8}" y="${y-6}" width="16" height="12" rx="5" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/>`,
    wc:(x,y)=>`<rect x="${x-9}" y="${y+6}" width="18" height="8" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/><ellipse cx="${x}" cy="${y-2}" rx="8" ry="11" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/>`,
    evier:(x,y)=>`<rect x="${x-22}" y="${y-10}" width="44" height="20" rx="3" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/><line x1="${x}" y1="${y-10}" x2="${x}" y2="${y+10}" stroke="#0E8C95"/>`,
    bac:(x,y)=>`<rect x="${x-14}" y="${y-12}" width="28" height="24" rx="3" fill="#fff" stroke="#0E8C95" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="4" fill="none" stroke="#0E8C95"/>`
  };
  fx.forEach(f => s += sym[f.k](f.x*K, f.y*K));
  s += `<g><rect x="${cpt.x*K-12}" y="${cpt.y*K-9}" width="24" height="18" fill="#2F6FDB"/><text x="${cpt.x*K}" y="${cpt.y*K+3.5}" font-size="7.5" text-anchor="middle" fill="#fff" font-weight="700">CPT</text><text x="${cpt.x*K}" y="${cpt.y*K-13}" font-size="8" text-anchor="middle" fill="#2F6FDB">Compteur</text></g>`;
  s += `<g><rect x="${fosse.x*K}" y="${(b.y1+.05)*K}" width="${1.4*K}" height="${.9*K}" fill="#F5EDE3" stroke="#8B5A2B" stroke-width="1.4"/><text x="${(fosse.x+.7)*K}" y="${(b.y1+.58)*K}" font-size="8.5" text-anchor="middle" fill="#8B5A2B" font-weight="700">Fosse</text></g>`;
  return frame(lv, s + titleSvg(lv, p, 'PLAN DE PLOMBERIE', '1/100'), {extraBottom:1.4, margin:1.6, label:'Plan de plomberie'});
};
PLAN.facade = function(p){
  const lvs = levels(p).map(l => l.lv), lv0 = lvs[0], b = bbox(lv0), Wd = b.x1 - b.x0;
  const hN = 3.0, nb = lvs.length, base = .5, H = base + nb*hN;
  const roofH = p.toiture === 'terrasse' ? .7 : Math.min(2.2, Wd*.12);
  const tot = H + roofH;
  const sx = v => (v - b.x0 + 1) * K, sy = v => (tot - v + .8) * K;
  const vw = (Wd + 2) * K, vh = (tot + 1.8) * K;
  let s = `<rect width="${vw}" height="${vh}" fill="#FBFAF7"/><line x1="0" x2="${vw}" y1="${sy(0)}" y2="${sy(0)}" stroke="#14202E" stroke-width="2"/>`;
  s += `<rect x="${sx(b.x0)}" y="${sy(H)}" width="${Wd*K}" height="${H*K}" fill="#F3EEE6" stroke="#14202E" stroke-width="1.6"/>`;
  s += `<rect x="${sx(b.x0)}" y="${sy(base)}" width="${Wd*K}" height="${base*K}" fill="#D8D0C2" stroke="#14202E" stroke-width="1"/>`;
  for(let k=1;k<nb;k++) s += `<line x1="${sx(b.x0)}" x2="${sx(b.x1)}" y1="${sy(base + k*hN)}" y2="${sy(base + k*hN)}" stroke="#9A9184" stroke-width="1"/>`;
  if(p.toiture === 'terrasse') s += `<rect x="${sx(b.x0)-4}" y="${sy(H+roofH)}" width="${Wd*K+8}" height="${roofH*K}" fill="#E7E1D6" stroke="#14202E" stroke-width="1.4"/>`;
  else s += `<path d="M ${sx(b.x0)-14} ${sy(H)} L ${sx(b.x0 + Wd/2)} ${sy(H+roofH)} L ${sx(b.x1)+14} ${sy(H)} Z" fill="#B85C38" stroke="#14202E" stroke-width="1.4"/>`;
  lvs.forEach((lv, k) => {
    const z = base + k*hN;
    (lv.portes||[]).filter(d => d.o === 'h' && Math.abs(d.y - b.y0) < .05 && !isInner(lv, d)).forEach(d => s += `<rect x="${sx(d.x)}" y="${sy(z+2.2)}" width="${d.w*K}" height="${2.2*K}" fill="#6B4A2E" stroke="#14202E"/>`);
    (lv.fenetres||[]).filter(f => f.o === 'h' && Math.abs(f.y - b.y0) < .05).forEach(f => s += `<rect x="${sx(f.x)}" y="${sy(z+2.2)}" width="${f.w*K}" height="${1.2*K}" fill="#BFD6EE" stroke="#14202E"/><line x1="${sx(f.x+f.w/2)}" x2="${sx(f.x+f.w/2)}" y1="${sy(z+2.2)}" y2="${sy(z+1.0)}" stroke="#14202E"/>`);
    s += `<text x="${sx(b.x1)+18}" y="${sy(z)+4}" font-size="10" fill="#5E6B7A">${z ? '+' + fm(z) : '±0,00'}</text><line x1="${sx(b.x1)+4}" x2="${sx(b.x1)+14}" y1="${sy(z)}" y2="${sy(z)}" stroke="#5E6B7A"/>`;
  });
  s += `<text x="${sx(b.x1)+18}" y="${sy(H)+4}" font-size="10" fill="#5E6B7A">+${fm(H)}</text>`;
  s += `<text x="${vw/2}" y="${vh-10}" text-anchor="middle" font-size="12" font-weight="800" fill="#14202E">FAÇADE PRINCIPALE · ${esc(p.titre)}</text>`;
  return `<svg viewBox="0 0 ${vw+40} ${vh}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" role="img" aria-label="Façade">${s}</svg>`;
};
function isInner(lv, d){ return lv.pieces.filter(r => r.t !== 'terrasse' && (Math.abs(r.y - d.y) < .02 || Math.abs(r.y + r.h - d.y) < .02) && d.x >= r.x - .02 && d.x + d.w <= r.x + r.w + .02).length > 1; }

/* =====================================================================
   PLAN DE TOITURE
   ===================================================================== */
PLAN.toiture = function(p){
  const L = levels(p), T = p.toit || {type:p.toiture === 'terrasse' ? 'terrasse' : '2 pans', pente:15, debord:.6};
  const lvT = L[L.length-1].lv, b0 = bbox(L[0].lv);
  let s = '';
  const dr = '#14202E', blue = '#2F6FDB';
  const arrowDef = `<defs><marker id="arrT" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${dr}"/></marker></defs>`;
  const ep = (x, y) => `<circle cx="${x*K}" cy="${y*K}" r="6" fill="#fff" stroke="${blue}" stroke-width="2"/><text x="${x*K}" y="${y*K-9}" text-anchor="middle" font-size="7.5" fill="${blue}" font-weight="700">EP</text>`;
  const arr = (x1, y1, x2, y2) => `<line x1="${x1*K}" y1="${y1*K}" x2="${x2*K}" y2="${y2*K}" stroke="${dr}" stroke-width="1.4" marker-end="url(#arrT)"/>`;
  if(T.type !== 'terrasse'){
    const d = T.debord || .6, X0 = b0.x0 - d, X1 = b0.x1 + d, Y0 = b0.y0 - d, Y1 = b0.y1 + d, ym = (Y0 + Y1)/2, D = Y1 - Y0;
    s += L[0].lv.pieces.map(r => `<rect x="${r.x*K}" y="${r.y*K}" width="${r.w*K}" height="${r.h*K}" fill="none" stroke="#C9C2B5" stroke-dasharray="3 3"/>`).join('');
    s += `<rect x="${X0*K}" y="${Y0*K}" width="${(X1-X0)*K}" height="${D*K}" fill="#E9EEF3" stroke="${dr}" stroke-width="1.6"/>`;
    for(let x = X0 + .5; x < X1; x += .5) s += `<line x1="${x*K}" x2="${x*K}" y1="${Y0*K}" y2="${Y1*K}" stroke="#C6D0DA" stroke-width=".8"/>`;
    if(T.type === '4 pans'){
      const r0 = X0 + D/2, r1 = X1 - D/2;
      s += `<line x1="${r0*K}" x2="${r1*K}" y1="${ym*K}" y2="${ym*K}" stroke="${dr}" stroke-width="2.4"/>`;
      [[X0,Y0,r0],[X0,Y1,r0],[X1,Y0,r1],[X1,Y1,r1]].forEach(([x,y,r]) => s += `<line x1="${x*K}" y1="${y*K}" x2="${r*K}" y2="${ym*K}" stroke="${dr}" stroke-width="1.8"/>`);
      s += arr((r0+r1)/2, ym - .4, (r0+r1)/2, Y0 + .5) + arr((r0+r1)/2, ym + .4, (r0+r1)/2, Y1 - .5) + arr(r0 - .3, ym, X0 + .5, ym) + arr(r1 + .3, ym, X1 - .5, ym);
      s += `<rect x="${X0*K}" y="${Y0*K}" width="${(X1-X0)*K}" height="${D*K}" fill="none" stroke="${blue}" stroke-width="3" opacity=".7"/>`;
    } else {
      s += `<line x1="${X0*K}" x2="${X1*K}" y1="${ym*K}" y2="${ym*K}" stroke="${dr}" stroke-width="2.4"/>`;
      for(const x of [X0 + (X1-X0)*.3, X0 + (X1-X0)*.7]) s += arr(x, ym - .4, x, Y0 + .5) + arr(x, ym + .4, x, Y1 - .5);
      s += `<line x1="${X0*K}" x2="${X1*K}" y1="${Y0*K}" y2="${Y0*K}" stroke="${blue}" stroke-width="3" opacity=".7"/><line x1="${X0*K}" x2="${X1*K}" y1="${Y1*K}" y2="${Y1*K}" stroke="${blue}" stroke-width="3" opacity=".7"/>`;
    }
    const nd = Math.max(2, Math.ceil((X1 - X0)/12) + 1); for(let k=0;k<nd;k++){ const x = X0 + .3 + (X1 - X0 - .6)*k/(nd-1); s += ep(x, Y0 + .3) + ep(x, Y1 - .3); }
    s += `<text x="${(X0+X1)/2*K}" y="${(ym - D*.22)*K}" text-anchor="middle" font-size="11" font-weight="700" fill="${dr}">Pente ${T.pente}° (${fm(Math.tan(T.pente*Math.PI/180)*100).replace(',00','')} %)</text>
     <text x="${(X0+X1)/2*K}" y="${(ym + D*.3)*K}" text-anchor="middle" font-size="9.5" fill="#5E6B7A">${esc(T.couverture || '')} · ${esc(T.charpente || '')} · débords ${fm(d)} m</text>
     <text x="${(X0+.2)*K}" y="${(ym-.15)*K}" font-size="9" fill="${dr}" font-weight="700">Faîtage</text>`;
    return frame({pieces:[{x:X0, y:Y0, w:X1-X0, h:D}]}, arrowDef + s + titleSvg(L[0].lv, p, 'PLAN DE TOITURE', '1/100'), {extraBottom:1.2, label:'Plan de toiture'});
  }
  // toiture-terrasse
  const rooms = lvT.pieces.filter(r => r.t !== 'terrasse'), bt = bbox({pieces:rooms});
  s += L[0].lv.pieces.map(r => `<rect x="${r.x*K}" y="${r.y*K}" width="${r.w*K}" height="${r.h*K}" fill="none" stroke="#D6CFC2" stroke-dasharray="3 3"/>`).join('');
  lvT.pieces.filter(r => r.t === 'terrasse').forEach(r => { s += `<rect x="${r.x*K}" y="${r.y*K}" width="${r.w*K}" height="${r.h*K}" fill="url(#hatch)" stroke="${dr}" stroke-width="1.2"/><text x="${(r.x+r.w/2)*K}" y="${(r.y+r.h/2)*K}" text-anchor="middle" font-size="10" font-weight="700" fill="${dr}">Terrasse accessible</text><text x="${(r.x+r.w/2)*K}" y="${(r.y+r.h/2+.45)*K}" text-anchor="middle" font-size="8.5" fill="#5E6B7A">(niveau +3,00, carrelage sur étanchéité)</text>`; s += ep(r.x + .35, r.y + r.h - .35); });
  const ac = .10;
  rooms.forEach(r => { s += `<rect x="${r.x*K}" y="${r.y*K}" width="${r.w*K}" height="${r.h*K}" fill="#EDEAE3"/>`; });
  const outline = walls({pieces:rooms}).filter(w => w.type === 'ext');
  outline.forEach(w => { s += w.hor ? `<rect x="${(w.a-ac)*K}" y="${(w.c-ac)*K}" width="${(w.b-w.a+2*ac)*K}" height="${2*ac*K}" fill="${dr}"/>` : `<rect x="${(w.c-ac)*K}" y="${(w.a-ac)*K}" width="${2*ac*K}" height="${(w.b-w.a+2*ac)*K}" fill="${dr}"/>`; });
  const corners = [[bt.x0+.4, bt.y0+.4],[bt.x1-.4, bt.y0+.4],[bt.x0+.4, bt.y1-.4],[bt.x1-.4, bt.y1-.4]].filter(([x,y]) => rooms.some(r => x > r.x && x < r.x + r.w && y > r.y && y < r.y + r.h));
  const cx = (bt.x0 + bt.x1)/2, cy = (bt.y0 + bt.y1)/2;
  corners.forEach(([x,y]) => { s += ep(x, y) + arr(cx + (x - cx)*.25, cy + (y - cy)*.25, x + (x < cx ? .5 : -.5), y + (y < cy ? .5 : -.5)); });
  const st = p.edicule && lvT.pieces.find(r => r.t === 'escalier');
  if(st){ s += `<rect x="${st.x*K}" y="${st.y*K}" width="${st.w*K}" height="${st.h*K}" fill="#D8D0C2" stroke="${dr}" stroke-width="2"/><text x="${(st.x+st.w/2)*K}" y="${(st.y+st.h/2)*K}" text-anchor="middle" font-size="10" font-weight="800" fill="${dr}">ÉDICULE</text><text x="${(st.x+st.w/2)*K}" y="${(st.y+st.h/2+.45)*K}" text-anchor="middle" font-size="8.5" fill="#5E6B7A">sortie d'escalier</text>`; }
  s += `<text x="${cx*K}" y="${(cy - .2)*K}" text-anchor="middle" font-size="11" font-weight="700" fill="${dr}">Toiture-terrasse ${T.acces ? 'accessible' : 'inaccessible'} · pente ${T.pente || 2} %</text><text x="${cx*K}" y="${(cy + .35)*K}" text-anchor="middle" font-size="9" fill="#5E6B7A">Forme de pente + étanchéité multicouche + gravillons · acrotère h = ${fm(T.acrotere || .6)} m</text>`;
  return frame(lvT, arrowDef + s + titleSvg(lvT, p, 'PLAN DE TOITURE-TERRASSE', '1/100'), {extraBottom:1.2, label:'Plan de toiture-terrasse'});
};

/* =====================================================================
   COUPES VERTICALES PROPRES À CHAQUE PROJET
   ===================================================================== */
PLAN.coupe = function(p, k=0){
  const L = levels(p), top = L.length - 1, S = p.struct || {}, T = p.toit || {}, site = p.site || {}, sol = site.sol || {prof:.9};
  const C = (p.coupes || [])[k] || {nom:'A', x:bbox(L[0].lv).x0 + 1};
  const vert = C.x != null, pos = vert ? C.x : C.y, slab = !!S.dalle, prof = sol.prof || .9, tn = site.tn ?? -.2;
  const M = A.PRJ ? A.PRJ.model(p) : null;
  const b0 = bbox(L[0].lv), u0 = vert ? b0.y0 : b0.x0, u1 = vert ? b0.y1 : b0.x1;
  const HN = 3.0, deb = T.debord || .6, ang = (T.pente || 15)*Math.PI/180;
  const roofTop = T.type === 'terrasse' || p.toiture === 'terrasse' ? L.length*HN + (T.acrotere || .6) + (p.edicule ? 2.8 : 0) : HN + ((b0.y1 - b0.y0)/2 + deb)*Math.tan(ang);
  const zMin = -(prof + .5), zMax = roofTop + .6, KK = 34;
  const X = u => (u - u0 + 2.4)*KK, Y = z => (zMax - z + .4)*KK;
  const W = (u1 - u0 + 5.4)*KK, H = (zMax - zMin + 2.2)*KK;
  const cross = lv => lv.pieces.filter(r => vert ? r.x < pos - .01 && r.x + r.w > pos + .01 : r.y < pos - .01 && r.y + r.h > pos + .01).map(r => ({r, a:vert ? r.y : r.x, b:vert ? r.y + r.h : r.x + r.w})).sort((m,n) => m.a - n.a);
  const cutW = lv => walls(lv, p.murs).filter(w => (vert ? w.hor : !w.hor) && w.a < pos - .01 && w.b > pos + .01);
  const opening = (lv, w) => [...(lv.portes || []).map(o => ({...o, k:'p'})), ...(lv.fenetres || []).map(o => ({...o, k:'f'}))].find(o => (o.o === 'h') === w.hor && Math.abs((o.o === 'h' ? o.y : o.x) - w.c) < .02 && (o.o === 'h' ? o.x : o.y) <= pos + .01 && (o.o === 'h' ? o.x + o.w : o.y + o.w) >= pos - .01);
  const dk = '#14202E', conc = '#BFB6A8', maso = '#E3D9C6', sub = '#5E6B7A';
  const rect = (u, z, du, dz, f, extra='') => du <= 0 || dz <= 0 ? '' : `<rect x="${X(u)}" y="${Y(z + dz)}" width="${du*KK}" height="${dz*KK}" fill="${f}" stroke="${dk}" stroke-width="1" ${extra}/>`;
  let s = `<defs><pattern id="earth" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="#B49A7A" stroke-width="1.4"/></pattern><pattern id="her" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2" fill="#A39B8E"/></pattern></defs>`;
  s += `<rect width="${W}" height="${H}" fill="#FBFAF7"/>`;
  // terrain
  s += `<rect x="0" y="${Y(tn)}" width="${W}" height="${Y(zMin) - Y(tn)}" fill="url(#earth)" opacity=".55"/><line x1="0" x2="${W}" y1="${Y(tn)}" y2="${Y(tn)}" stroke="#8B5A2B" stroke-width="2"/>`;
  // fondations sous les murs coupés du RDC
  const lgr = (S.longrine || [20,30]).map(v => v/100);
  const W0 = cutW(L[0].lv);
  let lastLab = -99, labRow = 0;
  W0.sort((m,n) => m.c - n.c).forEach(w => {
    const t = w.t, u = w.c;
    const near = M ? M.semelles.filter(e => vert ? Math.abs(e.y - w.c) < .02 : Math.abs(e.x - w.c) < .02).sort((m,n) => Math.abs((vert ? m.x : m.y) - pos) - Math.abs((vert ? n.x : n.y) - pos))[0] : null;
    const zS = -prof + (near ? near.h : .25), zLb = Math.max(-.6 - lgr[1], zS), zLt = Math.min(-.1, zLb + lgr[1]);
    s += rect(u - t/2, zLt, t, -zLt, maso) + rect(u - lgr[0]/2, zLb, lgr[0], zLt - zLb, conc);
    if(near){ const cutS = Math.abs((vert ? near.x : near.y) - pos) < near.B/2;
      s += `<rect x="${X(u - near.B/2)}" y="${Y(zS)}" width="${near.B*KK}" height="${near.h*KK}" fill="${cutS ? conc : 'none'}" stroke="${dk}" stroke-width="1.2" stroke-dasharray="${cutS ? '' : '6 3'}"/>` + rect(u - near.B/2 - .05, -prof - .05, near.B + .1, .05, '#D8D0C2');
      if(zLb - zS > .02) s += `<rect x="${X(u - near.a/2)}" y="${Y(zLb)}" width="${near.a*KK}" height="${(zLb - zS)*KK}" fill="none" stroke="${dk}" stroke-dasharray="4 3"/>`;
      labRow = u - lastLab < 1.6 ? 1 - labRow : 0; lastLab = u;
      s += `<text x="${X(u)}" y="${Y(-prof - .05) + 13 + labRow*11}" text-anchor="middle" font-size="8.5" fill="${sub}">${near.id}${u - lastLab === 0 && labRow === 0 ? ' · ' + fm(near.B) : ''}</text>`; }
  });
  // dallage
  cross(L[0].lv).forEach(({r, a, b}) => { const ter = r.t === 'terrasse', z0 = ter ? -.05 : 0;
    s += rect(a, z0 - .08, b - a, .08, conc) + `<rect x="${X(a)}" y="${Y(z0 - .08)}" width="${(b-a)*KK}" height="${.15*KK}" fill="url(#her)"/>`; });
  // niveaux
  L.forEach((l, i) => {
    const z = l.z, lv = l.lv, rooms = cross(lv), Wc = cutW(lv);
    const beamH = slab ? (M ? Math.max(...M.beams.filter(b => b.lvl === i).map(b => b.h), .4) : .45) : (S.chainage ? S.chainage[1]/100 : .2);
    Wc.forEach(w => {
      const t = w.t, u = w.c, o = opening(lv, w), top_ = slab ? HN - beamH : HN - beamH;
      const piece = (z1, z2, f) => z2 > z1 ? rect(u - t/2, z + z1, t, z2 - z1, f) : '';
      if(!o) s += piece(0, top_, maso);
      else if(o.k === 'p') s += piece(2.4, top_, maso) + piece(2.2, 2.4, conc);
      else s += piece(0, 1.0, maso) + `<rect x="${X(u - t/2)}" y="${Y(z + 2.2)}" width="${t*KK}" height="${1.2*KK}" fill="#DCEBFA" stroke="#2F6FDB" stroke-width="1.2"/><line x1="${X(u)}" x2="${X(u)}" y1="${Y(z + 2.2)}" y2="${Y(z + 1.0)}" stroke="#2F6FDB"/>` + piece(2.2, 2.4, conc) + piece(2.4, top_, maso);
      s += rect(u - (slab ? .125 : t/2), z + HN - beamH, slab ? .25 : t, beamH, conc);
    });
    rooms.forEach(({r, a, b}) => {
      if(r.t === 'terrasse'){ s += `<text x="${X((a+b)/2)}" y="${Y(z + 1.2)}" text-anchor="middle" font-size="10" font-weight="700" fill="${sub}">${esc(r.n)}</text>`; return; }
      s += `<text x="${X((a+b)/2)}" y="${Y(z + 1.45)}" text-anchor="middle" font-size="${b - a < 1.6 ? 8.5 : 10.5}" font-weight="700" fill="${dk}">${esc(r.n)}</text>`;
      if(b - a > 1.4) s += `<text x="${X((a+b)/2)}" y="${Y(z + 1.45) + 13}" text-anchor="middle" font-size="9" fill="${sub}">HSP ${slab ? fm(HN - .26) : '2,70'}</text>`;
    });
    // escalier
    rooms.filter(x => x.r.t === 'escalier').forEach(({r, a, b}) => {
      if(i === top && !p.edicule) return;
      const n = Math.round(HN/.17), hm = HN/n, g = Math.min(.30, Math.max(.26, .63 - 2*hm)), n1 = Math.ceil(n/2), L1 = (n1 - 1)*g, pal = Math.min(1.4, Math.max(1.0, (vert ? r.w : r.h)/2));
      let x = b - pal - L1, zz = z, d1 = `M ${X(x)} ${Y(zz)}`; const xs = x;
      for(let k2=0;k2<n1;k2++){ zz += hm; d1 += ` L ${X(x)} ${Y(zz)}`; if(k2 < n1 - 1){ x += g; d1 += ` L ${X(x)} ${Y(zz)}`; } }
      d1 += ` L ${X(b)} ${Y(zz)}`;
      s += `<path d="${d1} L ${X(b)} ${Y(zz - .16)} L ${X(xs + .3)} ${Y(z - .05)} Z" fill="${conc}" stroke="${dk}" stroke-width="1.2"/>`;
      let x2 = b - pal, z2 = zz, d2 = `M ${X(x2)} ${Y(z2)}`;
      for(let k2=0;k2<n - n1;k2++){ z2 += hm; d2 += ` L ${X(x2)} ${Y(z2)}`; if(k2 < n - n1 - 1){ x2 -= g; d2 += ` L ${X(x2)} ${Y(z2)}`; } }
      s += `<path d="${d2}" fill="none" stroke="${dk}" stroke-width="1" stroke-dasharray="4 2" opacity=".7"/>`;
    });
    // planchers
    if(slab && M){
      M.panels.filter(c => c.lvl === i && !c.tremie && (vert ? c.x < pos && c.x + c.w > pos : c.y < pos && c.y + c.h > pos)).forEach(c => {
        const a = vert ? c.y : c.x, b = vert ? c.y + c.h : c.x + c.w, e = c.ep || .2;
        s += rect(a, z + HN - e, b - a, e, conc) + `<line x1="${X(a)}" x2="${X(b)}" y1="${Y(z + HN - .04)}" y2="${Y(z + HN - .04)}" stroke="${dk}" stroke-width=".6"/>`;
        if(/Toiture|Terrasse/.test(c.usage)) s += `<rect x="${X(a)}" y="${Y(z + HN + .10)}" width="${(b-a)*KK}" height="${.10*KK}" fill="#9C9486"/><line x1="${X(a)}" x2="${X(b)}" y1="${Y(z + HN + .10)}" y2="${Y(z + HN + .10)}" stroke="#14202E" stroke-width="2.4"/>`;
      });
      // acrotères / garde-corps aux bords de dalle
      const P = M.panels.filter(c => c.lvl === i && (vert ? c.x < pos && c.x + c.w > pos : c.y < pos && c.y + c.h > pos)).map(c => vert ? [c.y, c.y + c.h, c] : [c.x, c.x + c.w, c]).sort((m,n) => m[0] - n[0]);
      const above = L[i+1] ? cross(L[i+1].lv).filter(x => x.r.t !== 'terrasse') : [];
      const edgeOpen = u => i === top || !above.some(x => u > x.a - .05 && u < x.b + .05);
      if(P.length){ [[P[0][0], -1], [P[P.length-1][1], 1]].forEach(([u, sg]) => { if(!edgeOpen(u + sg*.05)) return; const h = i === top ? (T.acrotere || .6) : 1.0;
        s += rect(sg < 0 ? u - .05 : u - .05, z + HN, .10, h + .1, conc); }); }
    }
  });
  // toiture
  const ztop = L.length*HN;
  if(!slab || p.toiture !== 'terrasse'){
    const span0 = vert ? b0.y0 - deb : b0.x0 - deb, span1 = vert ? b0.y1 + deb : b0.x1 + deb;
    const hz = HN + .02;
    s += `<line x1="${X(u0)}" x2="${X(u1)}" y1="${Y(2.7)}" y2="${Y(2.7)}" stroke="${dk}" stroke-width="1.2" stroke-dasharray="2 2"/><text x="${X(u0) + 6}" y="${Y(2.7) + 12}" font-size="8.5" fill="${sub}">faux plafond +2,70</text>`;
    if(vert){
      const mid = (span0 + span1)/2, hf = (mid - span0)*Math.tan(ang);
      s += `<path d="M ${X(span0)} ${Y(hz)} L ${X(mid)} ${Y(hz + hf)} L ${X(span1)} ${Y(hz)}" fill="none" stroke="#5E6B7A" stroke-width="4"/>`;
      s += `<path d="M ${X(u0)} ${Y(hz)} L ${X(u1)} ${Y(hz)} M ${X(mid)} ${Y(hz)} L ${X(mid)} ${Y(hz + hf - .05)} M ${X(u0 + (u1-u0)*.25)} ${Y(hz)} L ${X(mid)} ${Y(hz + hf*.6)} M ${X(u1 - (u1-u0)*.25)} ${Y(hz)} L ${X(mid)} ${Y(hz + hf*.6)}" stroke="#8B5A2B" stroke-width="2" fill="none"/>`;
      const npn = Math.max(2, Math.round((mid - span0)/1.1));
      for(let k2=0;k2<=npn;k2++){ const u = span0 + (mid - span0)*k2/npn, zz = hz + (u - span0)*Math.tan(ang); s += `<rect x="${X(u)-4}" y="${Y(zz)}" width="8" height="8" fill="#8B5A2B"/><rect x="${X(span1 - (u - span0))-4}" y="${Y(zz)}" width="8" height="8" fill="#8B5A2B"/>`; }
      s += `<text x="${X(mid)}" y="${Y(hz + hf) - 8}" text-anchor="middle" font-size="9.5" fill="${dk}" font-weight="700">Faîtage +${fm(hz + hf)}</text><text x="${X(span0 + (mid-span0)*.12)}" y="${Y(hz + hf*.12) - 12}" font-size="9" fill="${sub}" transform="rotate(${-T.pente} ${X(span0 + (mid-span0)*.12)} ${Y(hz + hf*.12) - 12})">${esc((T.couverture || 'Tôles').split(' ').slice(0,3).join(' '))} · ${T.pente}°</text>`;
    } else {
      const yy = pos, d0 = Math.min(yy - (b0.y0 - deb), (b0.y1 + deb) - yy), zr = hz + d0*Math.tan(ang);
      if(T.type === '4 pans'){ const run = (zr - hz)/Math.tan(ang);
        s += `<path d="M ${X(span0)} ${Y(hz)} L ${X(span0 + run)} ${Y(zr)} L ${X(span1 - run)} ${Y(zr)} L ${X(span1)} ${Y(hz)}" fill="none" stroke="#5E6B7A" stroke-width="4"/>`; }
      else { s += `<line x1="${X(span0)}" x2="${X(span1)}" y1="${Y(zr)}" y2="${Y(zr)}" stroke="#5E6B7A" stroke-width="4"/>` + rect(u0 - .1, hz, .2, zr - hz, maso) + rect(u1 - .1, hz, .2, zr - hz, maso); }
      const nf = Math.floor((u1 - u0)/(T.entraxe || 1.2));
      for(let k2=0;k2<=nf;k2++){ const u = u0 + (u1 - u0)*k2/nf; s += `<line x1="${X(u)}" x2="${X(u)}" y1="${Y(hz)}" y2="${Y(Math.min(zr, hz + 2))}" stroke="#8B5A2B" stroke-width="1" opacity=".6"/>`; }
      s += `<text x="${X((u0+u1)/2)}" y="${Y(zr) - 8}" text-anchor="middle" font-size="9.5" fill="${dk}" font-weight="700">Toiture coupée à +${fm(zr)} · fermes vues (entraxe ${fm(T.entraxe || 1.2)} m)</text>`;
    }
  } else if(p.edicule && M){
    const st = cross(L[top].lv).find(x => x.r.t === 'escalier') || cross(L[top].lv).find(x => /Palier|Hall/.test(x.r.n));
    const sr = L[top].lv.pieces.find(r => r.t === 'escalier');
    if(sr){ const a = vert ? sr.y : sr.x, b = vert ? sr.y + sr.h : sr.x + sr.w;
      if(vert ? sr.x < pos && sr.x + sr.w > pos : sr.y < pos && sr.y + sr.h > pos){ s += rect(a - .1, ztop, .2, 2.6, maso) + rect(b - .1, ztop, .2, 2.6, maso) + rect(a - .1, ztop + 2.6, b - a + .2, .16, conc) + rect(a - .15, ztop + 2.76, .1, .4, conc) + rect(b + .05, ztop + 2.76, .1, .4, conc) + `<text x="${X((a+b)/2)}" y="${Y(ztop + 1.4)}" text-anchor="middle" font-size="10" font-weight="700" fill="${dk}">Édicule</text>`; } }
  }
  // cotes de niveaux
  const xr = X(u1) + 2.0*KK*.45, mk = (z, lab) => `<line x1="${xr - 10}" x2="${xr + 6}" y1="${Y(z)}" y2="${Y(z)}" stroke="${sub}"/><path d="M ${xr - 4} ${Y(z) - 7} L ${xr} ${Y(z)} L ${xr + 4} ${Y(z) - 7} Z" fill="${sub}"/><text x="${xr + 9}" y="${Y(z) + 4}" font-size="9.5" fill="${dk}">${lab}</text>`;
  s += mk(0, '±0,00' + (site.alt ? ` (${fm(site.alt)})` : '')) + mk(tn, `TN ${fm(tn)}`) + mk(-prof, `Fond de fouille −${fm(prof)}`);
  L.slice(1).forEach(l => s += mk(l.z, '+' + fm(l.z) + ' · ' + l.court));
  if(slab) s += mk(ztop, '+' + fm(ztop) + ' toiture') + mk(ztop + (T.acrotere || .6), '+' + fm(ztop + (T.acrotere || .6)) + ' acrotère');
  else s += mk(HN, '+' + fm(HN) + ' arase');
  // cote verticale totale à gauche
  const xl = X(u0) - 1.4*KK, zt = slab ? ztop + (T.acrotere || .6) : roofTop;
  s += `<line x1="${xl}" x2="${xl}" y1="${Y(0)}" y2="${Y(zt)}" stroke="${sub}"/><line x1="${xl-5}" x2="${xl+5}" y1="${Y(0)}" y2="${Y(0)}" stroke="${sub}"/><line x1="${xl-5}" x2="${xl+5}" y1="${Y(zt)}" y2="${Y(zt)}" stroke="${sub}"/><text x="${xl - 6}" y="${(Y(0)+Y(zt))/2}" font-size="10" fill="${dk}" text-anchor="middle" transform="rotate(-90 ${xl - 6} ${(Y(0)+Y(zt))/2})">${fm(zt)} m</text>`;
  // cartouche
  const tw = 6.6*KK, tx = W - tw - 10, ty = H - 1.25*KK;
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="${1.1*KK}" fill="#fff" stroke="${dk}" stroke-width="1.2"/><text x="${tx + 8}" y="${ty + 16}" font-size="12" font-weight="800" fill="${dk}">COUPE ${C.nom}-${C.nom}</text><text x="${tx + 8}" y="${ty + 31}" font-size="9" fill="${sub}">${esc(p.titre)} · ${vert ? 'X = ' + fm(pos) : 'Y = ' + fm(pos)} m · éch. 1/100</text>`;
  return `<svg viewBox="0 0 ${W + 70} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Segoe UI,sans-serif" role="img" aria-label="Coupe ${C.nom}-${C.nom}">${s}</svg>`;
};

/* =====================================================================
   AVANT-MÉTRÉ AUTOMATIQUE D'UN PROJET
   ===================================================================== */
PLAN.metre = function(p){
  const lvs = p.niveaux || [p], S = p.struct || {}, hN = 3.0;
  const lines = [];
  const add = (lot, d, u, q, code) => { if(q > 0.001) lines.push({lot, d, u, q: r2(q), code}); };
  let Lext = 0, Lint = 0, Aopen = 0, AopenInt = 0, Shab = 0, nPost = 0, Lbeam = 0, Sdalle = 0, Swet = 0, Pwet = 0, Ldoors = 0, Nd = 0, Nw = 0, Sw = 0;
  let nLv = 0;
  lvs.forEach((lv, k) => {
    const W = walls(lv, p.murs), rep = lv.repeat || 1; nLv += rep;
    W.forEach(w => { const L = (w.b - w.a) * rep; if(w.type === 'ext') Lext += L; else Lint += L; });
    (lv.portes||[]).forEach(d => { const w = wallAt(W, d); const a = d.w * 2.2 * rep; if(w && w.type === 'ext') Aopen += a; else AopenInt += a; Nd += rep; });
    (lv.fenetres||[]).forEach(f => { Aopen += f.w * 1.2 * rep; Nw += rep; Sw += f.w*1.2*rep; });
    lv.pieces.forEach(r => { if(r.t !== 'terrasse') Shab += area(r)*rep; if(r.t === 'eau' || r.t === 'wc' || r.t === 'cuisine'){ Swet += area(r)*rep; Pwet += 2*(r.w + r.h)*rep; } });
    const P = posts(p, lv, W); nPost += P.length * rep;
    Lbeam += (p.grille ? gridBeams(p).reduce((a,w)=>a+(w.b-w.a),0) : W.reduce((a,w)=>a+(w.b-w.a),0)) * rep;
    if(k > 0 || S.dalle) Sdalle += lv.pieces.filter(r => r.t !== 'escalier').reduce((a,r)=>a+r.w*r.h,0) * rep;
  });
  const lv0 = lvs[0], W0 = walls(lv0, p.murs), P0 = posts(p, lv0, W0), Lw0 = W0.reduce((a,w)=>a+(w.b-w.a),0);
  const b0 = bbox(lv0), emprise = (b0.x1-b0.x0)*(b0.y1-b0.y0);
  const sm = (S.semelle || [80,80,25]).map(v => v/100), pt = (S.poteau || 20)/100, lg = (S.longrine || [20,30]).map(v=>v/100);
  const ch = (S.chainage || [20,20]).map(v=>v/100), pb = (S.poutre || [20,40]).map(v=>v/100);
  const nS = S.radier ? 0 : P0.length, prof = S.prof || 0.9;
  const sol0 = lv0.pieces.filter(r => r.t !== 'terrasse' && r.t !== 'escalier').reduce((a,r)=>a+r.w*r.h,0);
  const ter = lv0.pieces.filter(r => r.t === 'terrasse').reduce((a,r)=>a+r.w*r.h,0);
  // 1. Terrassements
  add('Terrassements','Décapage et nettoyage du terrain','m²', emprise + 2*((b0.x1-b0.x0)+(b0.y1-b0.y0))*1.5 + 9, 'decap');
  if(S.radier) add('Terrassements','Fouille en pleine masse pour radier','m³', (emprise + 2*((b0.x1-b0.x0)+(b0.y1-b0.y0)))*0.8, 'fouille');
  const MS = A.PRJ ? A.PRJ.model(p) : null, SE = MS && !S.radier ? MS.semelles : null;
  if(S.radier){}
  else if(SE) add('Terrassements',`Fouilles en puits pour ${SE.length} semelles isolées (prof. ${fm(MS.sol.prof)} m)`,'m³', SE.reduce((a,e) => a + e.qty.fouille, 0), 'fouille');
  else add('Terrassements','Fouilles en puits pour semelles isolées','m³', nS * Math.pow(sm[0]+.3, 2) * prof, 'fouille');
  add('Terrassements','Fouilles en rigole pour longrines / soubassement','m³', Lw0 * 0.4 * 0.4, 'fouille');
  add('Terrassements','Remblai compacté sous dallage (couches de 20 cm)','m³', sol0 * 0.3, 'remblai');
  // 2. Fondations
  add('Fondations','Béton de propreté dosé à 150 kg/m³ (ép. 5 cm)','m³', (S.radier ? emprise*1.1*.05 : SE ? SE.reduce((a,e) => a + e.qty.propre, 0) : nS*Math.pow(sm[0]+.1,2)*.05) + Lw0*.3*.05, 'bp');
  if(S.radier) add('Fondations',`Béton armé dosé à 350 kg/m³ pour radier (ép. ${S.radier} cm)`,'m³', emprise*1.05*S.radier/100, 'ba');
  else if(SE) add('Fondations',`Béton armé dosé à 350 kg/m³ pour semelles isolées (${MS.types.length} types, de ${fm(MS.types[0][0])} à ${fm(MS.types[MS.types.length-1][0])} m de côté)`,'m³', SE.reduce((a,e) => a + e.qty.beton, 0), 'ba');
  else add('Fondations',`Béton armé dosé à 350 kg/m³ pour semelles ${S.semelle.slice(0,2).join('×')}×${S.semelle[2]} cm`,'m³', nS*sm[0]*sm[1]*sm[2], 'ba');
  add('Fondations','Béton armé pour amorces de poteaux (h = 1,00 m)','m³', P0.length*pt*pt*(prof+.1), 'ba');
  add('Fondations',`Béton armé pour longrines ${(S.longrine||[20,30]).join('×')} cm`,'m³', Lw0*lg[0]*lg[1], 'ba');
  add('Fondations','Maçonnerie d\'agglos pleins de 15 en soubassement (h = 0,60 m)','m²', Lw0*0.6, 'aggp');
  add('Fondations','Hérisson en pierres cassées ép. 15 cm','m²', sol0 + ter, 'heris');
  add('Fondations','Dallage en béton dosé à 300 kg/m³ ép. 8 cm + treillis soudé','m²', sol0 + ter, 'dallage');
  // 3. Élévation (béton armé)
  add('Élévation','Béton armé pour poteaux ' + (S.poteau||20) + '×' + (S.poteau||20) + ' (h = 3,00 m par niveau)','m³', nPost*pt*pt*hN, 'ba');
  add('Élévation',`Béton armé pour chaînage haut ${(S.chainage||[20,20]).join('×')} cm`,'m³', (lvs.length && !S.dalle ? Lbeam : W0.reduce((a,w)=>a+(w.b-w.a),0)) * ch[0]*ch[1] * (S.dalle ? 0 : 1), 'ba');
  if(S.dalle){
    add('Élévation',`Béton armé pour poutres ${S.poutre.join('×')} cm`,'m³', Lbeam*pb[0]*(pb[1]-.2), 'ba');
    if(S.dalle === 'hourdis') add('Élévation','Plancher à corps creux 16+4 (hourdis, poutrelles, dalle de compression)','m²', Sdalle, 'hourdis');
    else add('Élévation',`Dalle pleine en béton armé ép. ${S.dalle} cm`,'m³', Sdalle*S.dalle/100, 'ba');
  }
  add('Élévation','Linteaux en béton armé au-dessus des ouvertures','ml', (Nd + Nw) * 1.4, 'linteau');
  // 4. Maçonnerie
  add('Maçonnerie','Agglos creux de 15 (murs extérieurs), joints au mortier','m²', Math.max(0, Lext*hN - Aopen), 'agg15');
  add('Maçonnerie','Agglos creux de 10 (cloisons intérieures)','m²', Math.max(0, Lint*hN - AopenInt), 'agg10');
  // 5. Toiture
  if(p.toiture === 'terrasse') add('Toiture / étanchéité','Étanchéité multicouche de toiture-terrasse + protection','m²', (bbox(lvs[lvs.length-1]).x1-bbox(lvs[lvs.length-1]).x0)*(bbox(lvs[lvs.length-1]).y1-bbox(lvs[lvs.length-1]).y0), 'etanch');
  else { const Sr = emprise*1.18; add('Toiture / étanchéité','Charpente (bois traité ou métallique)','m²', Sr, 'charpente'); add('Toiture / étanchéité','Couverture en tôles bac aluminium 6/10e','m²', Sr, 'tole'); add('Toiture / étanchéité','Faux plafond en staff / plâtre','m²', Shab, 'fplaf'); }
  // 6. Enduits & revêtements
  const Senduit = Math.max(0, (Lext*2 + Lint*2)*hN - (Aopen + AopenInt)*2);
  add('Enduits & revêtements','Enduit au mortier de ciment dosé à 300 kg/m³ (2 faces)','m²', Senduit, 'enduit');
  add('Enduits & revêtements','Carrelage grès cérame 40×40 (sols)','m²', Shab*1.0, 'carreau');
  add('Enduits & revêtements','Plinthes en carreaux (h = 10 cm)','ml', Shab*0.55, 'plinthe');
  add('Enduits & revêtements','Faïence murale des pièces d\'eau et crédences (h = 1,80 m)','m²', Pwet*1.6, 'faience');
  // 7. Menuiseries
  const nEnt = p.entrees || 1;
  add('Menuiseries','Portes intérieures isoplanes 0,80 × 2,10 avec huisserie','u', Math.max(0, Nd - nEnt), 'porte');
  add('Menuiseries','Porte d\'entrée métallique ou bois massif','u', nEnt, 'portee');
  add('Menuiseries','Fenêtres aluminium vitrées avec grilles de protection','m²', Sw, 'fenetre');
  // 8. Lots techniques
  const E = lvs.map((lv,i)=>PLAN.elecData(p, i));
  add('Électricité','Points lumineux (fourniture + pose, câble 1,5 mm²)','u', E.reduce((a,e,i)=>a+(lvs[i].repeat||1)*e.pts.filter(x=>x.k==='L').length,0), 'ptl');
  add('Électricité','Prises de courant 16 A (câble 2,5 mm²)','u', E.reduce((a,e,i)=>a+(lvs[i].repeat||1)*e.pts.filter(x=>x.k==='P'||x.k==='P32').length,0), 'prise');
  add('Électricité','Tableau électrique équipé + mise à la terre','ens', p.tableaux || 1, 'tableau');
  const fx = lvs.reduce((a,lv)=>a+(lv.repeat||1)*lv.pieces.reduce((b,r)=>b+(r.t==='eau'?3:r.t==='wc'?2:r.t==='cuisine'?1:r.t==='service'?1:0),0),0);
  add('Plomberie sanitaire','Appareils sanitaires posés (WC, lavabo, douche, évier) avec alimentation PPR','u', fx, 'sanit');
  add('Plomberie sanitaire','Fosse septique + puisard en maçonnerie','ens', 1, 'fosse');
  // 9. Peinture
  add('Peinture','Peinture vinylique intérieure (murs et plafonds), 2 couches','m²', Lint*2*hN + Lext*hN + Shab - (Aopen+AopenInt), 'peinti');
  add('Peinture','Peinture façade (pliolite / acrylique)','m²', Lext*(hN+.5) - Aopen, 'peinte');
  // aciers (ratios)
  const ratio = {semelle:40, longrine:80, poteau:110, chainage:90, poutre:100, dalle:80};
  let acier = (S.radier ? emprise*1.05*S.radier/100*85 : nS*sm[0]*sm[1]*sm[2]*ratio.semelle) + Lw0*lg[0]*lg[1]*ratio.longrine + (nPost*pt*pt*hN + P0.length*pt*pt*(prof+.1))*ratio.poteau;
  acier += S.dalle ? Lbeam*pb[0]*(pb[1]-.2)*ratio.poutre + (S.dalle === 'hourdis' ? Sdalle*0.04*ratio.dalle : Sdalle*S.dalle/100*ratio.dalle) : Lbeam*ch[0]*ch[1]*ratio.chainage;
  if(MS) acier = MS.totAcier*1.05;
  add('Fondations','Aciers HA (Fe E500) façonnés et posés, tous éléments (note de calcul + 5 % de chutes)','kg', acier, 'acier');
  const G = p.gamme || {};
  lines.forEach(l => { if(G[l.code]) l.coef = G[l.code]; });
  (p.extras || []).forEach(x => lines.push({lot:x[0], d:x[1], u:x[2], q:x[3], pu:x[4]}));
  return {lines, info:{Lext:r2(Lext), Lint:r2(Lint), Shab:r2(Shab), emprise:r2(emprise), nPost, acier:Math.round(acier), niveaux:nLv}};
};
})();
