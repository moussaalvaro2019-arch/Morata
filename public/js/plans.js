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

/* ---------- géométrie ---------- */
function levelOf(p, li){ return (p.niveaux || [p])[li || 0]; }
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
  const b = bbox(lv), w = 6.2, h = 1.15, x = (b.x1 - w + 1.6), y = (b.y1 + .55);
  const c = dark ? '#E3EAF2' : '#14202E', sub = dark ? '#8EA1B8' : '#5E6B7A', st = dark ? '#3A5070' : '#14202E';
  return `<g><rect x="${x*K}" y="${y*K}" width="${w*K}" height="${h*K}" fill="${dark?'#17263B':'#fff'}" stroke="${st}" stroke-width="1.2"/>
   <line x1="${(x+4.5)*K}" x2="${(x+4.5)*K}" y1="${y*K}" y2="${(y+h)*K}" stroke="${st}" stroke-width=".8"/>
   <text x="${(x+.18)*K}" y="${(y+.42)*K}" font-size="11" font-weight="800" fill="${c}">${esc(name)}</text>
   <text x="${(x+.18)*K}" y="${(y+.82)*K}" font-size="9" fill="${sub}">${esc(p.titre)} · ${esc(lv.nom||'RDC')}</text>
   <text x="${(x+5.35)*K}" y="${(y+.5)*K}" text-anchor="middle" font-size="8" fill="${sub}">ÉCHELLE</text>
   <text x="${(x+5.35)*K}" y="${(y+.88)*K}" text-anchor="middle" font-size="11" font-weight="700" fill="${c}">${ech}</text></g>`;
}

/* ---------- plans ---------- */
const PLAN = A.PLAN = {walls, bbox, area, posts, levelOf, TYPES, WET};

PLAN.thumb = function(p, opt={}){
  if(!p) return '';
  const lv = levelOf(p, opt.level || 0), W = walls(lv);
  const o = {dark:opt.dark, labels:opt.labels ? true : false, area:false};
  return frame(lv, arrowDefs(o.dark) + roomsSvg(lv, o) + wallsSvg(W, o) + openingsSvg(lv, W, o) + (opt.labels ? labelsSvg(lv, o) : ''), {dark:o.dark, margin:.6, grid:true, label:p.titre});
};

PLAN.archi = function(p, li=0, opt={}){
  const lv = levelOf(p, li), W = walls(lv, p.murs), o = {dark:opt.dark};
  return frame(lv, arrowDefs(o.dark) + roomsSvg(lv, o) + wallsSvg(W, o) + openingsSvg(lv, W, o) + labelsSvg(lv, o) + dimsSvg(lv, o) + northSvg(lv, o.dark) + titleSvg(lv, p, 'PLAN ARCHITECTURAL', '1/100', o.dark),
    {dark:o.dark, extraBottom:1.2, label:'Plan architectural ' + p.titre});
};

PLAN.structure = function(p, li=0){
  const lv = levelOf(p, li), W = walls(lv, p.murs), S = p.struct || {};
  const P = posts(p, lv, W), a = (S.poteau || 20) / 100, bw = (S.poutre ? S.poutre[0] : 20) / 100;
  const beams = p.grille ? gridBeams(p) : W.filter(w => w.type !== 'none');
  let s = roomsSvg(lv, {nofill:true}) ;
  if(S.dalle){ lv.pieces.filter(r => r.t !== 'terrasse' && r.t !== 'escalier').forEach(r => { s += `<rect x="${(r.x+.1)*K}" y="${(r.y+.1)*K}" width="${(r.w-.2)*K}" height="${(r.h-.2)*K}" fill="url(#hatch)" opacity=".35"/>`;
    const vert = r.h < r.w; const cx = (r.x + r.w/2)*K, cy = (r.y + r.h/2)*K;
    if(r.w > 1.5 && r.h > 1.5) s += vert ? `<line x1="${cx}" x2="${cx}" y1="${(r.y+.35)*K}" y2="${(r.y+r.h-.35)*K}" stroke="#2F6FDB" stroke-width="1.4" marker-end="url(#arrB)" marker-start="url(#arrB)"/>` : `<line y1="${cy}" y2="${cy}" x1="${(r.x+.35)*K}" x2="${(r.x+r.w-.35)*K}" stroke="#2F6FDB" stroke-width="1.4" marker-end="url(#arrB)" marker-start="url(#arrB)"/>`; }); }
  beams.forEach((w, i) => {
    const h = bw/2; const [x, y, ww, hh] = w.hor ? [w.x1, w.c - h, w.x2 - w.x1, bw] : [w.c - h, w.y1, bw, w.y2 - w.y1];
    s += `<rect x="${x*K}" y="${y*K}" width="${ww*K}" height="${hh*K}" fill="#FDF1E6" stroke="#C95F18" stroke-width="1" stroke-dasharray="5 3"/>`;
  });
  const lab = S.dalle ? `P ${S.poutre[0]}×${S.poutre[1]}` : `Ch ${S.chainage ? S.chainage.join('×') : '20×20'}`;
  beams.filter(w => (w.b - w.a) > 2.2).slice(0, 6).forEach(w => {
    const cx = (w.x1 + w.x2)/2*K, cy = (w.y1 + w.y2)/2*K;
    s += w.hor ? `<text x="${cx}" y="${cy - bw*K/2 - 4}" text-anchor="middle" font-size="9" fill="#C95F18" font-weight="700">${lab}</text>` : `<text x="${cx - bw*K/2 - 4}" y="${cy}" text-anchor="middle" font-size="9" fill="#C95F18" font-weight="700" transform="rotate(-90 ${cx - bw*K/2 - 4} ${cy})">${lab}</text>`;
  });
  P.forEach(([x, y], i) => { s += `<rect x="${(x-a/2)*K}" y="${(y-a/2)*K}" width="${a*K}" height="${a*K}" fill="#14202E"/><text x="${(x+a/2+.08)*K}" y="${(y-a/2-.06)*K}" font-size="8.5" font-weight="700" fill="#14202E">P${i+1}</text>`; });
  const defs = `<defs><marker id="arrB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="#2F6FDB"/></marker></defs>`;
  return frame(lv, defs + arrowDefs() + s + dimsSvg(lv, {}) + titleSvg(lv, p, S.dalle ? 'PLAN DE COFFRAGE' : 'PLAN DE STRUCTURE', '1/100'), {extraBottom:1.2, label:'Plan de structure'});
};
function gridBeams(p){
  const g = p.grille, out = [];
  g.y.forEach(y => { for(let i=0;i<g.x.length-1;i++) out.push({hor:true, c:y, a:g.x[i], b:g.x[i+1], x1:g.x[i], x2:g.x[i+1], y1:y, y2:y}); });
  g.x.forEach(x => { for(let i=0;i<g.y.length-1;i++) out.push({hor:false, c:x, a:g.y[i], b:g.y[i+1], x1:x, x2:x, y1:g.y[i], y2:g.y[i+1]}); });
  return out;
}
PLAN.fondations = function(p){
  const lv = levelOf(p, 0), W = walls(lv, p.murs), S = p.struct || {};
  const P = posts(p, lv, W), sm = (S.semelle || [80])[0] / 100, lw = (S.longrine || [20,30])[0] / 100;
  const beams = p.grille ? gridBeams(p) : W;
  let s = '';
  if(S.radier){ const b = bbox(lv); s += `<rect x="${(b.x0-.5)*K}" y="${(b.y0-.5)*K}" width="${(b.x1-b.x0+1)*K}" height="${(b.y1-b.y0+1)*K}" fill="url(#hatch)" opacity=".4" stroke="#14202E" stroke-dasharray="8 4"/>`; }
  beams.forEach(w => { const h = lw/2; const [x, y, ww, hh] = w.hor ? [w.x1, w.c - h, w.x2 - w.x1, lw] : [w.c - h, w.y1, lw, w.y2 - w.y1];
    s += `<rect x="${x*K}" y="${y*K}" width="${ww*K}" height="${hh*K}" fill="#EEF3FA" stroke="#2F6FDB" stroke-width="1"/>`; });
  if(!S.radier) P.forEach(([x, y], i) => { s += `<rect x="${(x-sm/2)*K}" y="${(y-sm/2)*K}" width="${sm*K}" height="${sm*K}" fill="rgba(232,117,42,.12)" stroke="#C95F18" stroke-width="1.3" stroke-dasharray="6 3"/>`; });
  const a = (S.poteau || 20)/100;
  P.forEach(([x, y], i) => { s += `<rect x="${(x-a/2)*K}" y="${(y-a/2)*K}" width="${a*K}" height="${a*K}" fill="#14202E"/>${S.radier?'':`<text x="${(x+sm/2+.05)*K}" y="${(y+sm/2+.2)*K}" font-size="8.5" fill="#C95F18" font-weight="700">S${i+1}</text>`}`; });
  const b = bbox(lv);
  s += `<text x="${b.x0*K}" y="${(b.y1+.9)*K}" font-size="10" fill="#14202E"><tspan font-weight="700">Légende :</tspan> ${S.radier ? `radier général ép. ${S.radier} cm` : `semelles isolées ${S.semelle.join('×')} cm`} · longrines ${(S.longrine||[20,30]).join('×')} cm · amorces de poteaux ${S.poteau||20}×${S.poteau||20}</text>`;
  return frame(lv, s + dimsSvg(lv, {}) + titleSvg(lv, p, 'PLAN DE FONDATIONS', '1/100'), {extraBottom:1.4, label:'Plan de fondations'});
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
  const lvs = (p.niveaux || [p]).flatMap(l => Array(l.repeat || 1).fill(l)), lv0 = lvs[0], b = bbox(lv0), Wd = b.x1 - b.x0;
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
  else add('Terrassements','Fouilles en puits pour semelles isolées','m³', nS * Math.pow(sm[0]+.3, 2) * prof, 'fouille');
  add('Terrassements','Fouilles en rigole pour longrines / soubassement','m³', Lw0 * 0.4 * 0.4, 'fouille');
  add('Terrassements','Remblai compacté sous dallage (couches de 20 cm)','m³', sol0 * 0.3, 'remblai');
  // 2. Fondations
  add('Fondations','Béton de propreté dosé à 150 kg/m³ (ép. 5 cm)','m³', (S.radier ? emprise*1.1 : nS*Math.pow(sm[0]+.1,2)) * .05 + Lw0*.3*.05, 'bp');
  if(S.radier) add('Fondations',`Béton armé dosé à 350 kg/m³ pour radier (ép. ${S.radier} cm)`,'m³', emprise*1.05*S.radier/100, 'ba');
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
  add('Fondations','Aciers HA (Fe E400/500) façonnés et posés, tous éléments','kg', acier, 'acier');
  const G = p.gamme || {};
  lines.forEach(l => { if(G[l.code]) l.coef = G[l.code]; });
  (p.extras || []).forEach(x => lines.push({lot:x[0], d:x[1], u:x[2], q:x[3], pu:x[4]}));
  return {lines, info:{Lext:r2(Lext), Lint:r2(Lint), Shab:r2(Shab), emprise:r2(emprise), nPost, acier:Math.round(acier), niveaux:nLv}};
};
})();
