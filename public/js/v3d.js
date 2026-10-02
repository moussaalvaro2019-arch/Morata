/* =====================================================================
   3D : visionneuse (three.js chargé à la demande), matériaux, maquettes
   des projets types et rendu modifiable. Repère : x plan → X, y plan → Z,
   altitude → Y (mètres).
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast} = A;
let THREE = null, loading = null;
function load(){
  if(window.THREE){ THREE = window.THREE; return Promise.resolve(THREE); }
  if(loading) return loading;
  loading = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'vendor/three.min.js'; s.onload = () => { THREE = window.THREE; res(THREE); }; s.onerror = () => { loading = null; rej(new Error('Impossible de charger le moteur 3D')); }; document.head.appendChild(s); });
  return loading;
}

/* ---------- matériaux ---------- */
const MATS = {
  enduit:{n:'Enduit peint', tex:'noise', rough:.95},
  peinture:{n:'Peinture lisse', tex:null, rough:.6},
  brique:{n:'Brique apparente', tex:'brick', rough:.9, color:'#B65A35'},
  pierre:{n:'Pierre naturelle', tex:'stone', rough:.95, color:'#A89F91'},
  beton:{n:'Béton brut', tex:'concrete', rough:.9, color:'#B9B4AA'},
  carrelage:{n:'Carrelage', tex:'tiles', rough:.35, color:'#E9E3D6'},
  marbre:{n:'Marbre', tex:'marble', rough:.15, color:'#F1EEE8'},
  bois:{n:'Bois', tex:'wood', rough:.7, color:'#8B5A2B'},
  tole:{n:'Tôle bac', tex:'ribs', rough:.4, metal:.55, color:'#6F7F8F'},
  tuile:{n:'Tuiles', tex:'roof', rough:.8, color:'#A8452B'},
  alu:{n:'Aluminium', tex:null, rough:.3, metal:.75, color:'#CBD1D8'},
  verre:{n:'Verre', tex:null, rough:.05, metal:.2, color:'#8EB8DA', opacity:.38},
  gazon:{n:'Gazon', tex:'grass', rough:1, color:'#6E9B4C'},
  pave:{n:'Pavés', tex:'pavers', rough:.9, color:'#9C958A'},
  gravier:{n:'Gravillons', tex:'noise2', rough:1, color:'#A39C90'},
  eau:{n:'Eau', tex:null, rough:.08, metal:.1, color:'#3E8FC4', opacity:.82}
};
const SLOTS = [['facade','Façades'],['soubassement','Soubassement'],['bandeau','Bandeaux, acrotères, poteaux'],['interieur','Murs intérieurs'],['sol','Sols intérieurs'],['terrasse','Sols extérieurs'],['toiture','Toiture'],['menuiserie','Portes et cadres'],['vitrage','Vitrages'],['gardecorps','Garde-corps'],['escalier','Escaliers'],['abords','Allées et abords'],['gazon','Jardin'],['piscine','Piscine'],['structure','Structure béton']];
const DEF = {facade:['enduit','#EFE6D6'], soubassement:['enduit','#8E8577'], bandeau:['enduit','#F7F4EE'], interieur:['enduit','#F4F1EA'], sol:['carrelage','#E3DCCD'], terrasse:['carrelage','#CDBFA8'], toiture:['tole','#6C7A89'], menuiserie:['bois','#7A4E2D'], vitrage:['verre','#8EB8DA'], gardecorps:['alu','#CBD1D8'], escalier:['carrelage','#D9D2C4'], abords:['pave','#A49C90'], gazon:['gazon','#6E9B4C'], piscine:['eau','#3E8FC4'], structure:['beton','#B9B4AA']};
const PRESETS = {
  eco:{facade:['enduit','#EFE3C8'], toiture:['tole','#5F7184'], menuiserie:['bois','#7A4E2D'], soubassement:['enduit','#8A7F70']},
  moyen:{facade:['enduit','#F3EDE2'], soubassement:['pierre','#A39A8B'], toiture:['tole','#9C3B2E'], menuiserie:['alu','#3E4650'], bandeau:['enduit','#E7DFD0']},
  haut:{facade:['enduit','#FAFAF7'], soubassement:['pierre','#8E8678'], bandeau:['enduit','#4F5862'], toiture:['gravier','#A39C90'], menuiserie:['alu','#2E343B'], gardecorps:['verre','#9CC3E0'], sol:['marbre','#EFEBE4'], terrasse:['carrelage','#C9BBA5']},
  immeuble:{facade:['enduit','#EDE3D0'], bandeau:['enduit','#8C96A1'], soubassement:['enduit','#6E675D'], toiture:['gravier','#A39C90'], menuiserie:['alu','#CBD1D8']}
};

/* ---------- textures procédurales (motif clair, teinté par la couleur) ---------- */
const TEX = {};
function canvasTex(kind){
  if(TEX[kind]) return TEX[kind];
  const N = 256, c = document.createElement('canvas'); c.width = c.height = N; const g = c.getContext('2d');
  const rnd = (() => { let s = kind.length*977; return () => (s = (s*16807) % 2147483647)/2147483647; })();
  g.fillStyle = '#fff'; g.fillRect(0, 0, N, N);
  const noise = (a, n=6000, sz=2) => { for(let i=0;i<n;i++){ const v = 255 - Math.floor(rnd()*a); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(rnd()*N, rnd()*N, sz, sz); } };
  let rep = 1;
  if(kind === 'noise'){ noise(26, 9000); rep = 1; }
  if(kind === 'noise2'){ noise(70, 14000, 3); rep = 2; }
  if(kind === 'concrete'){ noise(40, 9000); g.strokeStyle = 'rgba(0,0,0,.08)'; for(let y=0;y<N;y+=64){ g.beginPath(); g.moveTo(0,y); g.lineTo(N,y); g.stroke(); } rep = 1; }
  if(kind === 'brick'){ g.fillStyle = '#bdb6ad'; g.fillRect(0,0,N,N); const h = N/8; for(let r=0;r<8;r++){ const off = r%2 ? N/8 : 0; for(let x=-N/4;x<N;x+=N/4){ const v = 225 + Math.floor(rnd()*30); g.fillStyle = `rgb(${v},${v-4},${v-8})`; g.fillRect(x+off+3, r*h+3, N/4-6, h-6); } } rep = 1; }
  if(kind === 'stone'){ g.fillStyle = '#9d968c'; g.fillRect(0,0,N,N); for(let i=0;i<26;i++){ const v = 200 + Math.floor(rnd()*55); g.fillStyle = `rgb(${v},${v},${v-6})`; const x = rnd()*N, y = rnd()*N, w = 40 + rnd()*60, h = 26 + rnd()*30; g.beginPath(); g.ellipse(x, y, w/2, h/2, rnd(), 0, 7); g.fill(); } rep = 1; }
  if(kind === 'tiles'){ noise(10, 3000); g.strokeStyle = '#b8b2a8'; g.lineWidth = 3; for(let k=0;k<=2;k++){ g.beginPath(); g.moveTo(k*N/2,0); g.lineTo(k*N/2,N); g.moveTo(0,k*N/2); g.lineTo(N,k*N/2); g.stroke(); } rep = 1; }
  if(kind === 'marble'){ noise(12, 4000); g.strokeStyle = 'rgba(120,120,130,.25)'; g.lineWidth = 1.5; for(let i=0;i<9;i++){ g.beginPath(); let x = rnd()*N, y = 0; g.moveTo(x,y); while(y < N){ x += (rnd()-.5)*30; y += 18; g.lineTo(x,y); } g.stroke(); } g.strokeStyle = 'rgba(0,0,0,.12)'; g.lineWidth = 2; g.strokeRect(0,0,N,N); rep = 1; }
  if(kind === 'wood'){ for(let y=0;y<N;y+=4){ const v = 200 + Math.floor(Math.sin(y*.09 + rnd()*2)*25 + rnd()*20); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(0,y,N,4); } rep = 1; }
  if(kind === 'ribs'){ for(let x=0;x<N;x+=N/4){ const gr = g.createLinearGradient(x,0,x+N/4,0); gr.addColorStop(0,'#c9c9c9'); gr.addColorStop(.18,'#ffffff'); gr.addColorStop(.3,'#dcdcdc'); gr.addColorStop(1,'#efefef'); g.fillStyle = gr; g.fillRect(x,0,N/4,N); } rep = 1; }
  if(kind === 'roof'){ for(let y=0;y<N;y+=N/8){ for(let x=-N/8;x<N;x+=N/6){ const gr = g.createRadialGradient(x+N/12, y, 2, x+N/12, y, N/9); gr.addColorStop(0,'#fff'); gr.addColorStop(1,'#bbb'); g.fillStyle = gr; g.beginPath(); g.arc(x+N/12+(y/(N/8))%2*N/12, y+N/8, N/12, Math.PI, 0); g.fill(); } } rep = 1; }
  if(kind === 'grass'){ g.fillStyle = '#e6e6e6'; g.fillRect(0,0,N,N); for(let i=0;i<9000;i++){ const v = 170 + Math.floor(rnd()*85); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(rnd()*N, rnd()*N, 1.5, 4); } rep = 2; }
  if(kind === 'pavers'){ noise(25, 5000); g.strokeStyle = '#9a948b'; g.lineWidth = 3; for(let k=0;k<=5;k++){ g.beginPath(); g.moveTo(0,k*N/5); g.lineTo(N,k*N/5); g.stroke(); } for(let r=0;r<5;r++) for(let x=0;x<=N;x+=N/2.5){ const o = r%2 ? N/5 : 0; g.beginPath(); g.moveTo(x+o, r*N/5); g.lineTo(x+o, (r+1)*N/5); g.stroke(); } rep = 1; }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); t.anisotropy = 4;
  return TEX[kind] = t;
}
const MCACHE = {};
function material(slot, cfg, mode){
  const [mk, col] = cfg[slot] || DEF[slot] || ['enduit', '#ddd'];
  const key = slot + mk + col + mode; if(MCACHE[key]) return MCACHE[key];
  const D = MATS[mk] || MATS.enduit;
  let m;
  if(mode === 'maquette'){ m = new THREE.MeshStandardMaterial({color: mk === 'verre' ? '#cfe0ee' : mk === 'eau' ? '#bcd7ea' : mk === 'gazon' ? '#e9ece4' : '#f3f2ee', roughness:.9, transparent:mk === 'verre', opacity:mk === 'verre' ? .45 : 1}); }
  else {
    m = new THREE.MeshStandardMaterial({color:col || D.color || '#ddd', roughness:D.rough ?? .8, metalness:D.metal || 0, transparent:!!D.opacity, opacity:D.opacity || 1, side:THREE.DoubleSide});
    if(D.tex) m.map = canvasTex(D.tex);
  }
  if(D.opacity) m.depthWrite = false;
  return MCACHE[key] = m;
}

/* ---------- géométries ---------- */
function boxGeo(w, h, d){
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, dims = [[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];
  for(let f=0;f<6;f++) for(let k=0;k<4;k++){ const i = f*4 + k; uv.setXY(i, uv.getX(i)*dims[f][0], uv.getY(i)*dims[f][1]); }
  uv.needsUpdate = true; return g;
}
function polyGeo(tris){ // tris : [[x,y,z]*3]... en coordonnées monde, uv = projection
  const pos = [], uv = [];
  tris.forEach(t => { const a = new THREE.Vector3(...t[0]), b = new THREE.Vector3(...t[1]), c = new THREE.Vector3(...t[2]);
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a)).normalize();
    const ax = Math.abs(n.x) > .7 ? ['z','y'] : Math.abs(n.y) > .7 ? ['x','z'] : ['x','y'];
    [a,b,c].forEach(v => { pos.push(v.x, v.y, v.z); uv.push(v[ax[0]], v[ax[1]]); }); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals(); return g;
}
/* solide → mesh(es) */
function build(s, cfg, mode){
  let g;
  if(s.k === 'box'){ g = boxGeo(Math.max(.001, s.w), Math.max(.001, s.h), Math.max(.001, s.d)); const m = new THREE.Mesh(g, material(s.slot, cfg, mode)); m.position.set(s.x + s.w/2, s.z + s.h/2, s.y + s.d/2); if(s.rot){ m.rotation.y = -s.rot; } return m; }
  if(s.k === 'cyl'){ g = new THREE.CylinderGeometry(s.r, s.r2 ?? s.r, s.h, s.seg || 20); const m = new THREE.Mesh(g, material(s.slot, cfg, mode)); m.position.set(s.x, s.z + s.h/2, s.y); return m; }
  if(s.k === 'sphere'){ g = new THREE.SphereGeometry(s.r, 14, 10); const m = new THREE.Mesh(g, material(s.slot, cfg, mode)); m.position.set(s.x, s.z, s.y); m.scale.y = s.sy || 1; return m; }
  if(s.k === 'prism'){ const sh = new THREE.Shape(s.pts.map(([x,y]) => new THREE.Vector2(x, -y))); g = new THREE.ExtrudeGeometry(sh, {depth:s.h, bevelEnabled:false}); g.rotateX(-Math.PI/2); const m = new THREE.Mesh(g, material(s.slot, cfg, mode)); m.position.y = s.z; return m; }
  if(s.k === 'tris'){ g = polyGeo(s.tris); return new THREE.Mesh(g, material(s.slot, cfg, mode)); }
  return null;
}

/* =====================================================================
   VISIONNEUSE
   ===================================================================== */
function viewer(host, opt={}){
  const W = () => host.clientWidth || 600, H = () => host.clientHeight || 400;
  const renderer = new THREE.WebGLRenderer({antialias:true, preserveDrawingBuffer:true});
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); renderer.setSize(W(), H());
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding; renderer.localClippingEnabled = true;
  host.appendChild(renderer.domElement); renderer.domElement.style.display = 'block'; renderer.domElement.style.touchAction = 'none';
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#DCE7F1'); scene.fog = new THREE.Fog('#DCE7F1', 80, 220);
  const cam = new THREE.PerspectiveCamera(42, W()/H(), .1, 600);
  const hemi = new THREE.HemisphereLight('#F4F8FF', '#8C8574', .75); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#FFF6E5', .95); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0004; scene.add(sun); scene.add(sun.target);
  const grp = new THREE.Group(); scene.add(grp);
  const edges = new THREE.Group(); scene.add(edges);
  const V = {renderer, scene, cam, grp, sun, mode:'reel', cfg:{}, solids:[], hour:15, shadows:true, maxLvl:99, roof:true, cut:null, auto:false};
  let target = new THREE.Vector3(), rad = 30, th = -.8, ph = 1.05, need = true, raf = 0, alive = true, box = null;
  const place = () => { cam.position.set(target.x + rad*Math.sin(ph)*Math.sin(th), target.y + rad*Math.cos(ph), target.z - rad*Math.sin(ph)*Math.cos(th)); cam.lookAt(target); need = true; };
  V.frame = (preset) => {
    if(!box) return; const c = box.getCenter(new THREE.Vector3()), s = box.getSize(new THREE.Vector3()), R = Math.max(s.x, s.z, s.y*1.4);
    target.copy(c); target.y = Math.min(c.y, s.y*.4);
    rad = R*1.55 + 6;
    const P = {persp:[-.75, 1.05], face:[0, 1.35], arriere:[Math.PI, 1.35], cote:[-Math.PI/2, 1.35], dessus:[0, .05], droite:[Math.PI/2, 1.35]}[preset || 'persp'];
    th = P[0]; ph = P[1]; if(preset === 'dessus') rad = R*1.25 + 4; place();
  };
  V.setSun = h => { V.hour = h; const t = (h - 6)/12, el = Math.max(.08, Math.sin(t*Math.PI));
    const c = box ? box.getCenter(new THREE.Vector3()) : new THREE.Vector3(); const d = 60;
    sun.position.set(c.x - Math.cos(t*Math.PI)*d*(1 - el*.6), d*el + 4, c.z - d*.35); sun.target.position.copy(c);
    sun.intensity = .35 + .7*el; hemi.intensity = .55 + .3*el;
    const R = box ? Math.max(...box.getSize(new THREE.Vector3()).toArray())*0.9 + 8 : 40; const sc = sun.shadow.camera; sc.left = sc.bottom = -R; sc.right = sc.top = R; sc.near = 1; sc.far = 220; sc.updateProjectionMatrix();
    need = true; };
  V.rebuild = () => {
    while(grp.children.length){ const o = grp.children.pop(); o.geometry && o.geometry.dispose(); }
    while(edges.children.length){ const o = edges.children.pop(); o.geometry && o.geometry.dispose(); }
    const mode = V.mode === 'filaire' ? 'maquette' : V.mode === 'structure' ? 'reel' : V.mode;
    V.solids.forEach(s => {
      if(s.lvl != null && s.lvl > V.maxLvl) return;
      if(s.roof && !V.roof) return;
      if(V.mode === 'structure' && !s.struct && !s.ground) return;
      if(V.mode !== 'structure' && s.structOnly) return;
      const m = build(s, V.mode === 'structure' && s.struct ? {...V.cfg, [s.slot]:['beton', s.struct === 'semelle' ? '#9C8E7A' : s.struct === 'poteau' ? '#7D8794' : '#B9B4AA']} : V.cfg, mode); if(!m) return;
      m.castShadow = V.shadows && !s.noShadow; m.receiveShadow = V.shadows; m.userData = {s}; grp.add(m);
      if(V.mode === 'filaire' && !s.ground){ const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry, 25), new THREE.LineBasicMaterial({color:'#3A4654'})); e.position.copy(m.position); e.rotation.copy(m.rotation); e.scale.copy(m.scale); edges.add(e); }
    });
    if(V.mode === 'filaire') grp.children.forEach(m => { if(!m.userData.s.ground){ m.material = m.material.clone(); m.material.transparent = true; m.material.opacity = .12; m.material.depthWrite = false; } });
    if(V.mode === 'structure') grp.children.forEach(m => { if(m.userData.s.ground){ m.material = m.material.clone(); m.material.transparent = true; m.material.opacity = .28; m.material.depthWrite = false; m.receiveShadow = false; } });
    renderer.shadowMap.enabled = V.shadows;
    renderer.clippingPlanes = V.cut ? [new THREE.Plane(new THREE.Vector3(V.cut.ax === 'x' ? -1 : 0, 0, V.cut.ax === 'z' ? -1 : 0), V.cut.v)] : [];
    need = true;
  };
  V.set = (solids, cfg, keepView) => { V.solids = solids; if(cfg) V.cfg = cfg; for(const k in MCACHE) delete MCACHE[k];
    const b = new THREE.Box3(); solids.filter(s => !s.ground).forEach(s => { if(s.k === 'box') b.expandByPoint(new THREE.Vector3(s.x, s.z, s.y)).expandByPoint(new THREE.Vector3(s.x + s.w, s.z + s.h, s.y + s.d)); else if(s.k === 'cyl') b.expandByPoint(new THREE.Vector3(s.x - s.r, s.z, s.y - s.r)).expandByPoint(new THREE.Vector3(s.x + s.r, s.z + s.h, s.y + s.r)); else if(s.k === 'tris') s.tris.forEach(t => t.forEach(p => b.expandByPoint(new THREE.Vector3(...p)))); else if(s.k === 'prism') s.pts.forEach(([x,y]) => b.expandByPoint(new THREE.Vector3(x, s.z, y)).expandByPoint(new THREE.Vector3(x, s.z + s.h, y))); });
    if(b.isEmpty()) b.set(new THREE.Vector3(-5, 0, -5), new THREE.Vector3(5, 3, 5));
    box = b; V.box = b; V.rebuild(); V.setSun(V.hour); if(!keepView) V.frame('persp'); };
  V.matChange = () => { for(const k in MCACHE) delete MCACHE[k]; V.rebuild(); };
  V.render = () => { need = true; };
  V.shot = () => { renderer.render(scene, cam); return renderer.domElement.toDataURL('image/png'); };
  /* commandes souris / tactile */
  const el = renderer.domElement, P = new Map(); let down = null, pinch = 0, moved = 0;
  el.addEventListener('pointerdown', e => { el.setPointerCapture(e.pointerId); P.set(e.pointerId, {x:e.clientX, y:e.clientY}); down = {x:e.clientX, y:e.clientY, b:e.button, sh:e.shiftKey}; moved = 0; if(P.size === 2){ const [a, b] = [...P.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); } });
  el.addEventListener('pointermove', e => { if(!P.has(e.pointerId)) return; const p0 = P.get(e.pointerId), dx = e.clientX - p0.x, dy = e.clientY - p0.y; P.set(e.pointerId, {x:e.clientX, y:e.clientY}); moved += Math.abs(dx) + Math.abs(dy);
    if(P.size === 2){ const [a, b] = [...P.values()], d = Math.hypot(a.x - b.x, a.y - b.y); if(pinch){ rad = Math.max(3, Math.min(250, rad*pinch/d)); } pinch = d; pan(dx/2, dy/2); place(); return; }
    if(down && (down.b === 2 || down.b === 1 || down.sh)) pan(dx, dy); else { th -= dx*.006; ph = Math.max(.04, Math.min(1.52, ph - dy*.006)); }
    place(); });
  const up_ = e => { P.delete(e.pointerId); if(P.size < 2) pinch = 0; if(down && moved < 6 && opt.onPick && e.type === 'pointerup') pick(e); if(!P.size) down = null; };
  el.addEventListener('pointerup', up_); el.addEventListener('pointercancel', up_);
  el.addEventListener('contextmenu', e => e.preventDefault());
  el.addEventListener('wheel', e => { e.preventDefault(); rad = Math.max(3, Math.min(250, rad*(1 + Math.sign(e.deltaY)*.1))); place(); }, {passive:false});
  function pan(dx, dy){ const k = rad*.0016, right = new THREE.Vector3(), upv = new THREE.Vector3(); cam.matrixWorld.extractBasis(right, upv, new THREE.Vector3()); target.addScaledVector(right, -dx*k).addScaledVector(upv, dy*k); }
  const ray = new THREE.Raycaster();
  function pick(e){ const r = el.getBoundingClientRect(); ray.setFromCamera({x:(e.clientX - r.left)/r.width*2 - 1, y:-(e.clientY - r.top)/r.height*2 + 1}, cam);
    const hit = ray.intersectObjects(grp.children, false).find(h => !(h.object.userData.s || {}).ground || true); opt.onPick(hit ? hit.object.userData.s : null, hit); }
  const ro = new ResizeObserver(() => { renderer.setSize(W(), H()); cam.aspect = W()/H(); cam.updateProjectionMatrix(); need = true; }); ro.observe(host);
  const loop = () => { if(!alive) return; raf = requestAnimationFrame(loop); if(V.auto){ th += .004; place(); } if(need){ need = false; renderer.render(scene, cam); } };
  loop();
  V.dispose = () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); grp.children.forEach(o => o.geometry && o.geometry.dispose()); renderer.dispose(); renderer.domElement.remove(); };
  V.view = { get:() => ({th, ph, rad, t:target.toArray()}), set:v => { th = v.th; ph = v.ph; rad = v.rad; target.fromArray(v.t); place(); } };
  return V;
}

/* =====================================================================
   MAQUETTE D'UN PROJET TYPE
   ===================================================================== */
function fromProject(p){
  const PL = A.PLAN, L = PL.levels(p), M = A.PRJ.model(p), S = p.struct || {}, T = p.toit || {}, site = p.site || {}, HN = 3.0;
  const out = [], top = L.length - 1, slab = M.slab, tn = site.tn ?? -.2;
  const b0 = PL.bbox(L[0].lv);
  const add = o => { out.push(o); return o; };
  const B = (x, y, z, w, d, h, slot, ex={}) => (w > .005 && d > .005 && h > .005) ? add({k:'box', x, y, z, w, d, h, slot, ...ex}) : null;
  // terrain et abords
  const mg = 9, gx0 = b0.x0 - mg, gy0 = b0.y0 - mg, gx1 = b0.x1 + mg + (p.id === 'haut' ? 12 : 0), gy1 = b0.y1 + mg;
  B(gx0 - 30, gy0 - 30, tn - .3, gx1 - gx0 + 60, gy1 - gy0 + 60, .3, 'gazon', {ground:true, noShadow:true});
  B(b0.x0 - 1.2, b0.y0 - 1.2, tn - .28, b0.x1 - b0.x0 + 2.4, b0.y1 - b0.y0 + 2.4, .3, 'abords', {ground:true, noShadow:true});
  B((b0.x0 + b0.x1)/2 - 1.5, gy0 - 30, tn - .27, 3, b0.y0 - 1.2 - gy0 + 30, .3, 'abords', {ground:true, noShadow:true});
  // soubassement visible sous le RDC
  L[0].lv.pieces.forEach(r => { if(r.t === 'terrasse') B(r.x, r.y, tn, r.w, r.h, -tn - .05, 'soubassement', {lvl:0}); else B(r.x, r.y, tn, r.w, r.h, -tn - .02, 'soubassement', {lvl:0}); });
  // fondations (vue structure)
  M.semelles.forEach(e => { B(e.x - e.B/2, e.y - e.B/2, -M.sol.prof, e.B, e.B, e.h, 'structure', {struct:'semelle', structOnly:true, lvl:-1, id:e.id, label:'Semelle ' + e.id}); B(e.x - e.a/2, e.y - e.a/2, -M.sol.prof + e.h, e.a, e.a, M.sol.prof - e.h, 'structure', {struct:'poteau', structOnly:true, lvl:-1}); });
  M.longs.forEach(e => { const s = e.s, t = e.b; const z = -.6 - e.h; s.hor ? B(s.a, s.c - t/2, z, s.L, t, e.h, 'structure', {struct:'longrine', structOnly:true, lvl:-1, id:e.id, label:'Longrine ' + e.id}) : B(s.c - t/2, s.a, z, t, s.L, e.h, 'structure', {struct:'longrine', structOnly:true, lvl:-1, id:e.id, label:'Longrine ' + e.id}); });
  // niveaux
  L.forEach((l, i) => {
    const z = l.z, lv = l.lv, W = PL.walls(lv, p.murs);
    const hb = slab ? Math.max(.2, ...M.panels.filter(c => c.lvl === i).map(c => c.ep || .2)) : 0, Hw = HN - hb;
    const ops = [...(lv.portes || []).map(o => ({...o, k:'p'})), ...(lv.fenetres || []).map(o => ({...o, k:'f'}))];
    // sols
    lv.pieces.forEach(r => { if(r.t === 'escalier' && i > 0) return; B(r.x, r.y, z - .02, r.w, r.h, .04, r.t === 'terrasse' ? 'terrasse' : 'sol', {lvl:i, label:r.n + ' (sol)', noShadow:true}); });
    // murs avec ouvertures
    W.forEach(w => {
      const slotW = w.type === 'ext' ? 'facade' : 'interieur', t = w.t;
      const on = ops.filter(o => (o.o === 'h') === w.hor && Math.abs((o.o === 'h' ? o.y : o.x) - w.c) < .02 && (o.o === 'h' ? o.x : o.y) >= w.a - .02 && (o.o === 'h' ? o.x + o.w : o.y + o.w) <= w.b + .02).sort((m, n) => (m.o === 'h' ? m.x : m.y) - (n.o === 'h' ? n.x : n.y));
      const seg = (a, b, z1, z2, slot, ex) => { if(b - a < .005 || z2 - z1 < .005) return; w.hor ? B(a - (a === w.a ? t/2 : 0), w.c - t/2, z + z1, b - a + (a === w.a ? t/2 : 0) + (b === w.b ? t/2 : 0), t, z2 - z1, slot, {lvl:i, label:(w.type === 'ext' ? 'Mur de façade' : 'Cloison') + ' · ' + l.court, ...ex}) : B(w.c - t/2, a - (a === w.a ? t/2 : 0), z + z1, t, b - a + (a === w.a ? t/2 : 0) + (b === w.b ? t/2 : 0), z2 - z1, slot, {lvl:i, label:(w.type === 'ext' ? 'Mur de façade' : 'Cloison') + ' · ' + l.court, ...ex}); };
      let cur = w.a;
      on.forEach(o => { const a = o.o === 'h' ? o.x : o.y, b = a + o.w;
        seg(cur, a, 0, Hw, slotW);
        if(o.k === 'p'){ seg(a, b, 2.2, Hw, slotW);
          const isExt = w.type === 'ext'; w.hor ? B(a, w.c - .03, z, o.w, .06, 2.2, 'menuiserie', {lvl:i, label:'Porte ' + F(o.w, 2) + ' m', noShadow:!isExt}) : B(w.c - .03, a, z, .06, o.w, 2.2, 'menuiserie', {lvl:i, label:'Porte ' + F(o.w, 2) + ' m', noShadow:!isExt}); }
        else { seg(a, b, 0, 1.0, slotW); seg(a, b, 2.2, Hw, slotW);
          w.hor ? (B(a, w.c - .015, z + 1.0, o.w, .03, 1.2, 'vitrage', {lvl:i, label:'Fenêtre ' + F(o.w, 2) + ' m', noShadow:true}), B(a, w.c - t/2 - .02, z + .97, o.w, t + .04, .05, 'menuiserie', {lvl:i}), B(a + o.w/2 - .025, w.c - .03, z + 1.0, .05, .06, 1.2, 'menuiserie', {lvl:i}))
                : (B(w.c - .015, a, z + 1.0, .03, o.w, 1.2, 'vitrage', {lvl:i, label:'Fenêtre ' + F(o.w, 2) + ' m', noShadow:true}), B(w.c - t/2 - .02, a, z + .97, t + .04, o.w, .05, 'menuiserie', {lvl:i}), B(w.c - .03, a + o.w/2 - .025, z + 1.0, .06, .05, 1.2, 'menuiserie', {lvl:i})); }
        cur = b; });
      seg(cur, w.b, 0, Hw, slotW);
    });
    // planchers hauts, poutres
    if(slab){
      M.panels.filter(c => c.lvl === i && !c.tremie).forEach(c => B(c.x - .1, c.y - .1, z + HN - (c.ep || .2), c.w + .2, c.h + .2, c.ep || .2, i === top || /Terrasse/.test(c.usage) ? 'bandeau' : 'bandeau', {lvl:i, label:'Plancher ' + c.id + ' (' + c.hd + ')', id:c.id, struct:'dalle'}));
      M.beams.filter(e => e.lvl === i).forEach(e => { const s = e.s; s.hor ? B(s.a, s.c - e.b/2, z + HN - e.h, s.L, e.b, e.h - .2, 'structure', {lvl:i, struct:'poutre', structOnly:true, id:e.id, label:'Poutre ' + e.id}) : B(s.c - e.b/2, s.a, z + HN - e.h, e.b, s.L, e.h - .2, 'structure', {lvl:i, struct:'poutre', structOnly:true, id:e.id, label:'Poutre ' + e.id}); });
    } else {
      M.beams.forEach(e => { const s = e.s; s.hor ? B(s.a, s.c - e.b/2, HN - e.h, s.L, e.b, e.h, 'structure', {lvl:0, struct:'poutre', structOnly:true, id:e.id, label:'Chaînage ' + e.id}) : B(s.c - e.b/2, s.a, HN - e.h, e.b, s.L, e.h, 'structure', {lvl:0, struct:'poutre', structOnly:true, id:e.id, label:'Chaînage ' + e.id}); });
    }
    M.postEls.filter(e => e.lvl === i).forEach(e => { const a = e.d.a; const inWall = W.some(w => w.hor ? Math.abs(w.c - e.y) < .02 && e.x >= w.a - .02 && e.x <= w.b + .02 : Math.abs(w.c - e.x) < .02 && e.y >= w.a - .02 && e.y <= w.b + .02);
      B(e.x - a/2, e.y - a/2, z, a, a, HN - (slab ? .2 : 0), inWall ? 'structure' : 'bandeau', {lvl:i, struct:'poteau', structOnly:inWall, id:e.id, label:'Poteau ' + e.post + ' · ' + l.court}); });
    // escaliers
    M.stairs.filter(e => e.lvl === i).forEach(e => {
      const r = e.r, alongY = r.h >= r.w, n1 = e.n1, n2 = e.n2, g = e.g, hm = e.hm, half = (alongY ? r.w : r.h)/2 - .05, pal = Math.min(e.pal, (alongY ? r.h : r.w)*.4);
      const L0 = (alongY ? r.y + r.h : r.x + r.w) - pal, start = L0 - (n1 - 1)*g;
      for(let k=0;k<n1;k++){ const u = start + k*g; alongY ? B(r.x + .05, u, z, half, g, (k + 1)*hm, 'escalier', {lvl:i, label:'Escalier ' + e.id}) : B(u, r.y + .05, z, g, half, (k + 1)*hm, 'escalier', {lvl:i, label:'Escalier ' + e.id}); }
      alongY ? B(r.x + .05, L0, z + n1*hm - .2, r.w - .1, pal, .2, 'escalier', {lvl:i, label:'Palier'}) : B(L0, r.y + .05, z + n1*hm - .2, pal, r.h - .1, .2, 'escalier', {lvl:i, label:'Palier'});
      for(let k=0;k<n2;k++){ const u = L0 - (k + 1)*g; const zz = z + n1*hm + k*hm; alongY ? B(r.x + r.w - .05 - half, u, zz - .2, half, g, hm + .2, 'escalier', {lvl:i, label:'Escalier ' + e.id}) : B(u, r.y + r.h - .05 - half, zz - .2, g, half, hm + .2, 'escalier', {lvl:i, label:'Escalier ' + e.id}); }
    });
    // garde-corps des terrasses d'étage
    if(i > 0) lv.pieces.filter(r => r.t === 'terrasse').forEach(r => {
      const sides = [[r.x, r.y, r.w, .08, Math.abs(r.y - b0.y0) < .05], [r.x, r.y + r.h - .08, r.w, .08, Math.abs(r.y + r.h - b0.y1) < .05], [r.x, r.y, .08, r.h, Math.abs(r.x - b0.x0) < .05], [r.x + r.w - .08, r.y, .08, r.h, Math.abs(r.x + r.w - b0.x1) < .05]];
      sides.filter(sd => sd[4]).forEach(sd => B(sd[0], sd[1], z, sd[2], sd[3], 1.0, 'gardecorps', {lvl:i, label:'Garde-corps de terrasse'}));
    });
  });
  // toiture
  const zt = L.length*HN;
  if(slab){
    const P = M.panels.filter(c => c.lvl === top && !c.tremie);
    P.forEach(c => B(c.x, c.y, zt, c.w, c.h, .08, 'toiture', {lvl:top, roof:true, label:'Toiture-terrasse (protection)'}));
    const acro = T.acrotere || .6;
    M.beams.filter(e => e.lvl === top).forEach(e => { const s = e.s; const n = P.filter(c => s.hor ? (Math.abs(c.y - s.c) < .02 || Math.abs(c.y + c.h - s.c) < .02) && Math.min(s.b, c.x + c.w) - Math.max(s.a, c.x) > .1 : (Math.abs(c.x - s.c) < .02 || Math.abs(c.x + c.w - s.c) < .02) && Math.min(s.b, c.y + c.h) - Math.max(s.a, c.y) > .1).length;
      if(n === 1) s.hor ? B(s.a - .1, s.c - .1, zt, s.L + .2, .2, acro, 'bandeau', {lvl:top, roof:true, label:'Acrotère'}) : B(s.c - .1, s.a - .1, zt, .2, s.L + .2, acro, 'bandeau', {lvl:top, roof:true, label:'Acrotère'}); });
    const st = p.edicule && L[top].lv.pieces.find(r => r.t === 'escalier');
    if(st){ B(st.x - .1, st.y - .1, zt, st.w + .2, st.h + .2, 2.7, 'facade', {lvl:top, roof:true, label:'Édicule'}); B(st.x - .25, st.y - .25, zt + 2.7, st.w + .5, st.h + .5, .18, 'bandeau', {lvl:top, roof:true, label:'Édicule'}); B(st.x + st.w/2 - .45, st.y - .14, zt, .9, .06, 2.1, 'menuiserie', {lvl:top, roof:true}); }
  } else {
    const d = T.debord || .6, X0 = b0.x0 - d, X1 = b0.x1 + d, Z0 = b0.y0 - d, Z1 = b0.y1 + d, Zm = (Z0 + Z1)/2, ang = (T.pente || 15)*Math.PI/180, hf = (Zm - Z0)*Math.tan(ang), y0 = HN + .02, yR = y0 + hf;
    const tr = [];
    if(T.type === '4 pans'){ const r0 = X0 + (Zm - Z0), r1 = X1 - (Zm - Z0);
      tr.push([[X0,y0,Z0],[X1,y0,Z0],[r1,yR,Zm]], [[X0,y0,Z0],[r1,yR,Zm],[r0,yR,Zm]], [[X1,y0,Z1],[X0,y0,Z1],[r0,yR,Zm]], [[X1,y0,Z1],[r0,yR,Zm],[r1,yR,Zm]], [[X0,y0,Z1],[X0,y0,Z0],[r0,yR,Zm]], [[X1,y0,Z0],[X1,y0,Z1],[r1,yR,Zm]]); }
    else { tr.push([[X0,y0,Z0],[X1,y0,Z0],[X1,yR,Zm]], [[X0,y0,Z0],[X1,yR,Zm],[X0,yR,Zm]], [[X1,y0,Z1],[X0,y0,Z1],[X0,yR,Zm]], [[X1,y0,Z1],[X0,yR,Zm],[X1,yR,Zm]]);
      [b0.x0, b0.x1].forEach(x => add({k:'tris', tris:[[[x, HN, b0.y0],[x, HN, b0.y1],[x, HN + (Zm - b0.y0)*Math.tan(ang), Zm]]], slot:'facade', lvl:0, label:'Pignon'})); }
    add({k:'tris', tris:tr, slot:'toiture', lvl:0, roof:true, label:'Couverture : ' + (T.couverture || 'tôles')});
    add({k:'tris', tris:tr.map(t => t.map(([x,y,z]) => [x, y - .12, z])), slot:'bandeau', lvl:0, roof:true, label:'Sous-face de toiture'});
    B(X0, Z0 - .02, y0 - .2, X1 - X0, .04, .2, 'bandeau', {lvl:0, roof:true, label:'Rive'}); B(X0, Z1 - .02, y0 - .2, X1 - X0, .04, .2, 'bandeau', {lvl:0, roof:true, label:'Rive'});
  }
  // aménagements : piscine, arbres
  if(p.id === 'haut'){ B(b0.x1 + 3, b0.y0 + 2.5, tn - .05, 8.4, 4.4, .3, 'abords', {ground:true}); B(b0.x1 + 3.2, b0.y0 + 2.7, tn + .1, 8, 4, .1, 'piscine', {label:'Piscine 8 × 4 m', noShadow:true}); }
  const trees = [[b0.x0 - 4, b0.y0 - 3.5], [b0.x1 + 3.5, b0.y1 + 3], [b0.x0 - 3.5, b0.y1 + 2.5], [b0.x1 + (p.id === 'haut' ? 13 : 4), b0.y0 - 3]];
  trees.forEach(([x, y]) => { add({k:'cyl', x, y, z:tn, r:.14, r2:.2, h:2.2, slot:'menuiserie', label:'Arbre', lvl:-2}); add({k:'sphere', x, y, z:tn + 3.1, r:1.5, sy:1.1, slot:'gazon', label:'Arbre', lvl:-2}); });
  return out;
}

/* =====================================================================
   ONGLET « MAQUETTE 3D » D'UN PROJET
   ===================================================================== */
let VW = null, cur = null;
const cfgOf = p => { const base = {}; SLOTS.forEach(([k]) => base[k] = (PRESETS[p.id] || {})[k] || DEF[k]); const saved = A.ls.get('v3d_' + p.id, null); return {...base, ...(saved || {})}; };
function sidePanel(p){
  const L = A.PLAN.levels(p), c = cur ? cur.cfg : cfgOf(p);
  const used = new Set(cur ? cur.solids.map(s => s.slot) : SLOTS.map(s => s[0]));
  return `<div class="v3d-sec"><b>Rendu</b><div class="seg">${[['reel','Réaliste'],['maquette','Maquette blanche'],['filaire','Filaire'],['structure','Structure']].map(m => `<button class="${(VW ? VW.mode : 'reel') === m[0] ? 'on' : ''}" data-v3mode="${m[0]}">${m[1]}</button>`).join('')}</div></div>
   <div class="v3d-sec"><b>Niveaux affichés</b><div class="seg">${L.map((l,i) => `<button class="${VW && VW.maxLvl === i ? 'on' : ''}" data-v3lvl="${i}">${esc(l.court)}</button>`).join('')}<button class="${!VW || VW.maxLvl >= 99 ? 'on' : ''}" data-v3lvl="99">Tout + toiture</button></div></div>
   <div class="v3d-sec"><b>Coupe verticale</b><div class="seg">${[['','Aucune'],['x','Selon X'],['z','Selon Y']].map(c => `<button class="${((VW && VW.cut) ? VW.cut.ax : '') === c[0] ? 'on' : ''}" data-v3cutax="${c[0]}">${c[1]}</button>`).join('')}</div>${VW && VW.cut ? `<input type="range" id="v3cut" min="0" max="100" value="${VW.cut.p}" aria-label="Position de la coupe">` : ''}</div>
   <div class="v3d-sec"><b>Soleil et ombres <span class="small mono" id="v3h" style="font-weight:500">${VW ? VW.hour : 15} h</span></b><input type="range" id="v3sun" min="6" max="18" step=".5" value="${VW ? VW.hour : 15}" aria-label="Heure"><label class="check small"><input type="checkbox" id="v3sh" ${!VW || VW.shadows ? 'checked' : ''}>Ombres portées</label></div>
   <div class="v3d-sec"><b>Matériaux et couleurs</b><div class="v3mats">${SLOTS.filter(([k]) => used.has(k)).map(([k, n]) => `<div class="v3m${cur && cur.sel === k ? ' on' : ''}" data-slot="${k}"><span>${esc(n)}</span><select class="inp" data-v3mat="${k}">${Object.entries(MATS).map(([mk, m]) => `<option value="${mk}" ${c[k] && c[k][0] === mk ? 'selected' : ''}>${esc(m.n)}</option>`).join('')}</select><input type="color" data-v3col="${k}" value="${esc(c[k] ? c[k][1] : '#dddddd')}"></div>`).join('')}</div>
    <div class="row" style="gap:6px;margin-top:8px"><button class="btn b-sm b-line" data-v3act="reset">${ic('undo')}Couleurs d'origine</button><button class="btn b-sm b-line" data-v3act="shot">${ic('image')}Capture</button></div></div>`;
}
function projectHtml(p){
  return `<div class="v3d"><div class="v3d-view" id="v3view"><div class="v3d-load">${ic('cube')}Chargement de la maquette 3D…</div>
    <div class="v3d-tools"><button class="ibtn" data-v3view="persp" title="Perspective">${ic('cube')}</button><button class="ibtn" data-v3view="face" title="Façade principale">${ic('home')}</button><button class="ibtn" data-v3view="arriere" title="Façade arrière">${ic('back')}</button><button class="ibtn" data-v3view="cote" title="Côté">${ic('square')}</button><button class="ibtn" data-v3view="dessus" title="Vue de dessus">${ic('grid')}</button><button class="ibtn" data-v3act="auto" title="Rotation automatique">${ic('refresh')}</button></div>
    <div class="v3d-info" id="v3info">Glisser : tourner · Clic droit ou 2 doigts : déplacer · Molette ou pincer : zoomer · Toucher un élément pour le sélectionner</div></div>
   <div class="v3d-side" id="v3side">${sidePanel(p)}</div></div>`;
}
function mountProject(root, p){
  dispose();
  const host = $('#v3view', root); if(!host) return;
  load().then(() => {
    if(!document.body.contains(host)) return;
    $('.v3d-load', host) && $('.v3d-load', host).remove();
    VW = viewer(host, {onPick:s => { const inf = $('#v3info'); if(!s){ if(inf) inf.textContent = 'Aucun élément'; return; } if(inf) inf.innerHTML = `<b>${esc(s.label || s.slot)}</b> · ${esc((SLOTS.find(x => x[0] === s.slot) || ['', s.slot])[1])}`; cur.sel = s.slot; const side = $('#v3side'); if(side){ side.innerHTML = sidePanel(p); const r = $(`.v3m[data-slot="${s.slot}"]`, side); if(r) r.scrollIntoView({block:'nearest'}); } }});
    cur = {p, cfg:cfgOf(p), solids:fromProject(p), sel:null};
    VW.set(cur.solids, cur.cfg);
    const side = $('#v3side'); if(side) side.innerHTML = sidePanel(p);
  }).catch(e => { host.innerHTML = `<div class="note bad">${ic('alert')}<span>${esc(e.message)}. Vérifiez votre connexion puis rechargez la page.</span></div>`; });
}
function dispose(){ if(VW){ try{ VW.dispose(); }catch(_){} VW = null; } }
const refreshSide = () => { const s = $('#v3side'); if(s && cur) s.innerHTML = sidePanel(cur.p); };
A.on('click', '[data-v3mode]', el => { if(!VW) return; VW.mode = el.dataset.v3mode; VW.matChange(); refreshSide(); });
A.on('click', '[data-v3lvl]', el => { if(!VW) return; VW.maxLvl = +el.dataset.v3lvl; VW.roof = VW.maxLvl >= 99; VW.rebuild(); refreshSide(); });
A.on('click', '[data-v3view]', el => { if(VW) VW.frame(el.dataset.v3view); });
A.on('click', '[data-v3act]', el => {
  if(!VW || !cur) return; const a = el.dataset.v3act;
  if(a === 'auto'){ VW.auto = !VW.auto; el.classList.toggle('on', VW.auto); VW.render(); }
  if(a === 'reset'){ A.ls.del('v3d_' + cur.p.id); cur.cfg = cfgOf(cur.p); VW.cfg = cur.cfg; VW.matChange(); refreshSide(); toast('Couleurs d\'origine rétablies'); }
  if(a === 'shot'){ const d = VW.shot(); fetch(d).then(r => r.blob()).then(b => A.download('maquette-' + cur.p.id + '.png', b)); }
});
A.on('change', '[data-v3mat]', el => { if(!cur) return; const k = el.dataset.v3mat; const mk = el.value; cur.cfg[k] = [mk, (MATS[mk].color && MATS[mk].color) || cur.cfg[k][1]]; save(); refreshSide(); });
A.on('input', '[data-v3col]', el => { if(!cur) return; const k = el.dataset.v3col; cur.cfg[k] = [cur.cfg[k][0], el.value]; save(false); });
A.on('change', '#v3sh', el => { if(!VW) return; VW.shadows = el.checked; VW.rebuild(); });
A.on('input', '#v3sun', el => { if(!VW) return; VW.setSun(+el.value); const h = $('#v3h'); if(h) h.textContent = el.value + ' h'; });
A.on('click', '[data-v3cutax]', el => { if(!VW) return; cutUpd(el.dataset.v3cutax, VW.cut ? VW.cut.p : 50); refreshSide(); });
A.on('input', '#v3cut', el => { if(VW && VW.cut) cutUpd(VW.cut.ax, +el.value); });
function cutUpd(ax, pc){ if(!VW) return;
  if(!ax){ VW.cut = null; } else { const b = VW.box, lo = ax === 'x' ? b.min.x : b.min.z, hi = ax === 'x' ? b.max.x : b.max.z; VW.cut = {ax, p:pc, v:lo + (hi - lo)*pc/100}; }
  VW.rebuild(); }
let saveT = 0;
function save(rebuild=true){ if(!cur || !VW) return; A.ls.set('v3d_' + cur.p.id, cur.cfg); VW.cfg = cur.cfg; clearTimeout(saveT); saveT = setTimeout(() => VW.matChange(), rebuild ? 0 : 60); }

A.V3D = {load, viewer, fromProject, projectHtml, mountProject, dispose, MATS, SLOTS, DEF, material:(...a) => material(...a), build:(...a) => build(...a)};
})();
