/* =====================================================================
   Solveurs guidés : chaque type d'exercice est résolu étape par étape.
   - mode « guidé » : l'apprenant répond à chaque étape, la plateforme
     vérifie, donne un indice ou la solution, puis passe à la suite ;
   - mode « corrigé » : toutes les étapes sont affichées.
   Un solveur est déclaré par A.SOL.reg({...}) (voir data/solveurs/*.js).
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast} = A;

/* ---------- nombres ---------- */
const nf = (v, d=3) => { if(v == null || typeof v !== 'number' || !isFinite(v)) return '—'; let r = Math.round(v*Math.pow(10,d))/Math.pow(10,d); if(r === 0) r = 0;
  return r.toLocaleString('fr-FR', {maximumFractionDigits:d}).replace(/[\u202f\u00a0]/g, ' ').replace(/^-/, '−'); };
const ns = (v, s=4) => { if(!v || !isFinite(v)) return nf(v); const d = s - 1 - Math.floor(Math.log10(Math.abs(v))); return nf(v, Math.max(0, Math.min(8, d))); };
const parse = s => { if(typeof s === 'number') return s; s = String(s ?? '').trim().replace(/[\s\u202f\u00a0]/g, '').replace(/[−–]/g, '-').replace(',', '.').replace(/^\+/, ''); if(!s) return NaN;
  const fr = s.match(/^(-?[\d.]+)\/([\d.]+)$/); if(fr) return +fr[1] / +fr[2]; const n = Number(s); return isFinite(n) ? n : parseFloat(s); };
const inFmt = v => typeof v === 'number' && isFinite(v) ? String(Math.round(v*1e6)/1e6).replace('.', ',') : (v ?? '');
const clone = o => JSON.parse(JSON.stringify(o));
const R = { i:(a,b) => a + Math.floor(Math.random()*(b-a+1)), s:(a,b,st=1) => { const n = Math.round((b-a)/st); return +(a + st*Math.floor(Math.random()*(n+1))).toFixed(6); }, p:arr => arr[Math.floor(Math.random()*arr.length)] };

/* ---------- petites figures SVG ---------- */
const INK = '#14202E', OR = '#E8752A', BL = '#2F6FDB', GR = '#5E6B7A', OK = '#1E9B5E', RD = '#C8363B', CO = '#E9E4DA';
const SV = (w, h, body, label='Schéma') => `<svg class="solsvg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Segoe UI,sans-serif" font-size="12" role="img" aria-label="${esc(label)}"><defs>
 <marker id="sa" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${INK}"/></marker>
 <marker id="so" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${OR}"/></marker>
 <marker id="sb" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${BL}"/></marker>
 <marker id="sg" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${OK}"/></marker>
 <marker id="sr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${RD}"/></marker>
 <pattern id="shh" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#B5AC9C" stroke-width="1.5"/></pattern>
</defs><rect width="${w}" height="${h}" fill="#FBFAF7"/>${body}</svg>`;
const n1 = v => typeof v === 'number' ? v.toFixed(1) : v;
const T = (x, y, t, o={}) => `<text x="${n1(x)}" y="${n1(y)}" ${o.a?`text-anchor="${o.a}"`:''} font-size="${o.s||12}" fill="${o.c||INK}" ${o.b?'font-weight="700"':''} ${o.r?`transform="rotate(${o.r} ${x} ${y})"`:''}>${esc(t)}</text>`;
const Ln = (x1, y1, x2, y2, o={}) => `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${o.c||INK}" stroke-width="${o.w||1.4}" ${o.d?`stroke-dasharray="${o.d}"`:''} ${o.m?`marker-end="url(#${o.m})"`:''} ${o.ms?`marker-start="url(#${o.ms})"`:''}/>`;
const Pth = (d, o={}) => `<path d="${d}" fill="${o.f||'none'}" ${o.fo?`fill-opacity="${o.fo}"`:''} stroke="${o.c||INK}" stroke-width="${o.w||1.4}" ${o.d?`stroke-dasharray="${o.d}"`:''}/>`;
const Rc = (x, y, w, h, o={}) => `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(0,w).toFixed(1)}" height="${Math.max(0,h).toFixed(1)}" ${o.rx?`rx="${o.rx}"`:''} fill="${o.f||'none'}" stroke="${o.c||INK}" stroke-width="${o.w||1.4}"/>`;
const Ci = (x, y, r, o={}) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${o.f||'none'}" stroke="${o.c||INK}" stroke-width="${o.w||1.2}"/>`;
const Dim = (x1, y1, x2, y2, t, o={}) => { const hor = Math.abs(y2-y1) < 1, mx = (x1+x2)/2, my = (y1+y2)/2;
  return Ln(x1,y1,x2,y2,{c:GR,w:1,m:'sa',ms:'sa'}) + (hor ? T(mx, my - 5, t, {a:'middle', s:11, c:o.c||GR}) : T(mx - 6, my, t, {a:'middle', s:11, c:o.c||GR, r:-90})); };

/* Courbe y = f(x) tracée sur un repère (courbes de cours, diagrammes) */
function plot(pts, opt={}){
  const W = opt.w || 560, H = opt.h || 240, pl = opt.pl || 46, pr = 16, pt = 16, pb = 34;
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]).concat(opt.yl || []);
  let x0 = opt.x0 ?? Math.min(...xs), x1 = opt.x1 ?? Math.max(...xs), y0 = opt.y0 ?? Math.min(0, ...ys), y1 = opt.y1 ?? Math.max(0, ...ys);
  if(x1 - x0 < 1e-9) x1 = x0 + 1; if(y1 - y0 < 1e-9) y1 = y0 + 1;
  const pad = (y1 - y0)*.08; if(opt.y0 == null) y0 -= y0 < 0 ? pad : 0; if(opt.y1 == null) y1 += pad;
  const X = x => pl + (x - x0)/(x1 - x0)*(W - pl - pr), Y = y => pt + (1 - (y - y0)/(y1 - y0))*(H - pt - pb);
  let g = '';
  const tk = (a, b, n) => { const st = niceStep((b - a)/n); const o = []; for(let v = Math.ceil(a/st)*st; v <= b + st*1e-6; v += st) o.push(+v.toFixed(10)); return o; };
  tk(y0, y1, 4).forEach(v => { g += Ln(pl, Y(v), W - pr, Y(v), {c:'#E3DFD7', w:1, d:v ? '3 4' : ''}) + T(pl - 5, Y(v) + 4, nf(v, 3), {a:'end', s:10, c:GR}); });
  tk(x0, x1, opt.nx || 6).forEach(v => { g += Ln(X(v), H - pb, X(v), H - pb + 4, {c:GR, w:1}) + T(X(v), H - pb + 16, nf(v, 3), {a:'middle', s:10, c:GR}); });
  g += Ln(pl, pt, pl, H - pb, {c:GR, w:1}) + Ln(pl, H - pb, W - pr, H - pb, {c:GR, w:1});
  if(opt.xl) g += T(W - pr, H - 4, opt.xl, {a:'end', s:11, c:GR});
  if(opt.ylab) g += T(pl + 4, pt + 10, opt.ylab, {s:11, c:GR});
  (opt.series || [{pts, c:opt.c || BL}]).forEach(s => {
    if(s.dots){ s.pts.forEach(p => { g += Ci(X(p[0]), Y(p[1]), 3.2, {f:s.c || OR, c:s.c || OR}); }); return; }
    g += Pth('M' + s.pts.map(p => X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' L'), {c:s.c || BL, w:s.w || 2.2, d:s.d});
  });
  (opt.marks || []).forEach(m => { g += Ci(X(m[0]), Y(m[1]), 3.5, {f:m[3] || OR, c:m[3] || OR}) + (m[2] ? T(X(m[0]) + 6, Y(m[1]) - 6, m[2], {s:10.5, c:INK, b:1}) : ''); });
  return SV(W, H, g, opt.label || 'Courbe');
}
function niceStep(raw){ if(!(raw > 0)) return 1; const p = Math.pow(10, Math.floor(Math.log10(raw))), n = raw/p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10)*p; }

/* les formules « $$ » doivent commencer une ligne : on coupe la ligne avant si besoin */
const fixMd = t => String(t || '').replace(/([^\n$])[ \t]*\$\$ /g, '$1\n$$$$ ');
const md = t => A.mdHtml(fixMd(t));

/* ---------- registre ---------- */
const SOL = A.SOL = {
  L: [],
  reg(def){ def.niv = def.niv || 2; def.mats = def.mats || [def.mat]; if(!def.mats.includes(def.mat)) def.mats.unshift(def.mat); SOL.L.push(def); },
  get: id => SOL.L.find(s => s.id === id),
  byMat: m => SOL.L.filter(s => s.mats.includes(m)),
  link: (id, p, mode) => `#/app/solveur/${id}` + (p || mode ? '?' + [p ? 'p=' + encodeURIComponent(JSON.stringify(p)) : '', mode ? 'mode=' + mode : ''].filter(Boolean).join('&') : ''),
  md, fixMd,
  U: {nf, ns, parse, clone, R, SV, T, Ln, Pth, Rc, Ci, Dim, plot, niceStep, C:{INK, OR, BL, GR, OK, RD, CO}},
  /* Résout et renvoie {steps, bilan} ou {err} */
  run(def, p){
    try{ const r = def.solve(p); return r && r.steps ? r : {err:'Aucune étape produite'}; }
    catch(e){ if(!(e instanceof SolErr)) console.warn(e); return {err: e.message || 'Données incohérentes'}; }
  },
  /* Corrigé complet (HTML) d'un jeu de données : utilisé par la banque d'exercices */
  fullHtml(def, p){ const r = SOL.run(def, p); if(r.err) return `<div class="note bad">${ic('alert')}<span>${esc(r.err)}</span></div>`;
    return `<div class="ssteps">${r.steps.map((s, i) => stepFull(s, i)).join('')}</div>${r.bilan ? `<div class="card sbilan"><b class="kick">Résultat</b>${md(r.bilan)}</div>` : ''}`; }
};
class SolErr extends Error {}
SOL.Err = SolErr;
SOL.need = (p, list) => { list.forEach(([k, lab, min, max]) => { const v = p[k]; if(typeof v !== 'number' || !isFinite(v)) throw new SolErr(`Valeur manquante ou invalide : ${lab}`);
  if(min != null && v < min) throw new SolErr(`${lab} doit être au moins ${nf(min, 4)}`); if(max != null && v > max) throw new SolErr(`${lab} doit être au plus ${nf(max, 4)}`); }); };

/* ---------- état de la page ---------- */
let ST = null;
function init(def, q){
  let p = null;
  if(q.get('p')){ try{ p = Object.assign(clone(def.ex), JSON.parse(q.get('p'))); }catch(_){ p = null; } }
  ST = {id:def.id, raw:location.hash, p: p || clone(def.ex), mode: q.get('mode') === 'full' ? 'full' : (q.get('mode') === 'guide' ? 'guide' : (ST && ST.mode) || 'guide'), cur:0, st:{}, ui:{}};
}
const resetProgress = () => { ST.cur = 0; ST.st = {}; };

/* ---------- formulaire de données ---------- */
function fieldHtml(f, p){
  if(f.if && !f.if(p)) return '';
  if(f.h) return `<div class="sfh">${esc(f.h)}</div>`;
  const v = p[f.k], lab = `<span>${esc(f.l)}${f.u ? ` <small class="faint">(${esc(f.u)})</small>` : ''}</span>`;
  if(f.t === 'sel') return `<label class="fld${f.w ? ' sfw' : ''}">${lab}<select class="inp" id="sf_${f.k}" data-sf="${f.k}">${f.o.map(([val, l]) => `<option value="${esc(val)}" ${String(val) === String(v) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></label>`;
  if(f.t === 'chk') return `<label class="check sfw"><input type="checkbox" id="sf_${f.k}" data-sf="${f.k}" ${v ? 'checked' : ''}><span>${esc(f.l)}</span></label>`;
  if(f.t === 'txt') return `<label class="fld sfw">${lab}<input class="inp" id="sf_${f.k}" data-sf="${f.k}" value="${esc(v ?? '')}"></label>`;
  if(f.t === 'tab') return tabHtml(f, p);
  return `<label class="fld${f.w ? ' sfw' : ''}">${lab}<input class="inp num" id="sf_${f.k}" data-sf="${f.k}" inputmode="decimal" autocomplete="off" value="${esc(inFmt(v))}"></label>`;
}
function tabHtml(f, p){
  const rows = p[f.k] || [];
  return `<div class="sftab sfw"><div class="row between"><b class="small">${esc(f.l)}</b>${rows.length < (f.max || 30) ? `<button type="button" class="btn b-line b-xs" data-sfadd="${f.k}">${ic('plus')}Ligne</button>` : ''}</div>
  <div class="tw"><table class="t sm"><thead><tr><th>#</th>${f.cols.map(c => `<th>${esc(c.l)}${c.u ? ` <small class="faint">${esc(c.u)}</small>` : ''}</th>`).join('')}<th></th></tr></thead><tbody>
  ${rows.map((r, i) => `<tr><td class="faint">${f.lab ? esc(f.lab(i, r)) : i + 1}</td>${f.cols.map(c => `<td>${c.t === 'sel' ? `<select class="inp sm" id="sf_${f.k}_${i}_${c.k}" data-sft="${f.k}:${i}:${c.k}">${c.o.map(([val, l]) => `<option value="${esc(val)}" ${String(val) === String(r[c.k]) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`
    : `<input class="inp sm ${c.t === 'txt' ? '' : 'num'}" id="sf_${f.k}_${i}_${c.k}" data-sft="${f.k}:${i}:${c.k}" ${c.t === 'txt' ? '' : 'inputmode="decimal"'} autocomplete="off" value="${esc(c.t === 'txt' ? (r[c.k] ?? '') : inFmt(r[c.k]))}" style="min-width:${c.w || 64}px">`}</td>`).join('')}
   <td>${rows.length > (f.min || 1) ? `<button type="button" class="ibtn" data-sfdel="${f.k}:${i}" aria-label="Supprimer la ligne">${ic('x')}</button>` : ''}</td></tr>`).join('')}
  </tbody></table></div>${f.note ? `<p class="sub">${esc(f.note)}</p>` : ''}</div>`;
}
function formHtml(def){
  if(def.editor) return def.editor.html(ST.p, ST);
  return `<div class="sfgrid">${(def.champs || []).map(f => fieldHtml(f, ST.p)).join('')}</div>`;
}

/* ---------- étapes ---------- */
const askVal = a => a.o ? a.o[a.v] : `${nf(a.v, a.d ?? 3)}${a.u ? ' ' + a.u : ''}`;
function stepFull(s, i){
  return `<div class="sstep done"><div class="sh"><span class="sn">${i + 1}</span><b>${esc(s.t)}</b></div>
   ${s.md ? md(s.md) : ''}${s.html || ''}
   ${s.ask && s.ask.length ? `<div class="sres">${s.ask.map(a => `<span class="sav">${esc(a.l)} = <b>${esc(askVal(a))}</b></span>`).join('')}</div>` : ''}</div>`;
}
function stepGuided(s, i, last){
  const st = ST.st[i] = ST.st[i] || {ok:[], val:[], tries:0};
  const asks = s.ask || [], done = !asks.length || asks.every((a, j) => st.ok[j] != null);
  const q = s.q || (asks.length ? 'Calculez ' + asks.map(a => a.l).join(', ') + '.' : '');
  let body = '';
  if(!done){
    body = `<div class="sq">${A.mdHtml(fixMd(q), {inner:true})}</div>
    <div class="sasks">${asks.map((a, j) => st.ok[j] != null ? `<div class="sav ${st.ok[j] ? 'ok' : 'shown'}">${esc(a.l)} = <b>${esc(askVal(a))}</b> ${st.ok[j] ? ic('check') : ''}</div>`
      : a.o ? `<div class="sask"><span class="small">${esc(a.l)}</span><div class="seg">${a.o.map((o, k) => `<button type="button" data-sch="${i}:${j}:${k}">${esc(o)}</button>`).join('')}</div>${st.val[j] != null ? `<span class="pill p-bad">Non</span>` : ''}</div>`
      : `<label class="sask"><span class="small">${esc(a.l)}</span><span class="row nw"><input class="inp num" id="sa_${i}_${j}" inputmode="decimal" autocomplete="off" placeholder="?" value="${esc(st.draft && st.draft[j] != null ? st.draft[j] : (st.val[j] ?? ''))}"><span class="small faint">${esc(a.u || '')}</span>${st.val[j] != null && st.val[j] !== '' ? `<span class="pill p-bad">${ic('x')}</span>` : ''}</span></label>`).join('')}</div>
    ${st.hint && s.hint ? `<div class="note">${ic('zap')}<div>${A.mdHtml(fixMd(s.hint), {inner:true})}</div></div>` : ''}
    <div class="row">${asks.some(a => !a.o) ? `<button type="button" class="btn b-pri b-sm" data-scheck="${i}">${ic('check')}Vérifier</button>` : ''}${s.hint && !st.hint ? `<button type="button" class="btn b-line b-sm" data-shint="${i}">${ic('zap')}Indice</button>` : ''}<button type="button" class="btn b-ghost b-sm" data-sshow="${i}">${ic('eye')}Voir la solution</button></div>`;
  } else {
    body = `${asks.length ? `<div class="sasks">${asks.map((a, j) => `<div class="sav ${st.ok[j] ? 'ok' : 'shown'}">${esc(a.l)} = <b>${esc(askVal(a))}</b> ${st.ok[j] ? ic('check') + '<small>trouvé</small>' : '<small>solution affichée</small>'}</div>`).join('')}</div>` : ''}
     ${s.md ? md(s.md) : ''}${s.html || ''}
     ${i === ST.cur && !last ? `<div class="row"><button type="button" class="btn b-pri b-sm" data-snext>${ic('arrow')}Étape suivante</button></div>` : ''}`;
  }
  return `<div class="sstep ${done ? 'done' : 'cur'}" id="sst${i}"><div class="sh"><span class="sn">${i + 1}</span><b>${esc(s.t)}</b></div>${body}</div>`;
}
function score(){ let ok = 0, n = 0; Object.values(ST.st).forEach(s => s.ok.forEach(v => { n++; if(v) ok++; })); return {ok, n}; }
function outHtml(def){
  const r = SOL.run(def, ST.p);
  if(r.err) return `<div class="note bad">${ic('alert')}<span>${esc(r.err)}</span></div>`;
  ST.n = r.steps.length;
  if(ST.mode === 'full') return `<div class="ssteps">${r.steps.map(stepFull).join('')}</div>${r.bilan ? `<div class="card sbilan"><b class="kick">Résultat</b>${md(r.bilan)}</div>` : ''}`;
  ST.cur = Math.min(ST.cur, r.steps.length - 1);
  const shown = r.steps.slice(0, ST.cur + 1).map((s, i) => stepGuided(s, i, i === r.steps.length - 1)).join('');
  const lastSt = ST.st[r.steps.length - 1], last = r.steps[r.steps.length - 1];
  const finished = ST.cur === r.steps.length - 1 && lastSt && (!(last.ask || []).length || last.ask.every((a, j) => lastSt.ok[j] != null));
  const sc = score();
  return `<div class="ssteps">${shown}</div>
   ${!finished ? `<p class="sub">${ic('info')} Étape ${ST.cur + 1} sur ${r.steps.length}. Répondez puis cliquez sur « Vérifier » (virgule ou point acceptés, tolérance de 2 %).</p>` :
   `<div class="card sbilan"><div class="row between"><b class="kick">Exercice terminé</b>${sc.n ? `<span class="pill ${sc.ok/sc.n >= .7 ? 'p-ok' : sc.ok/sc.n >= .5 ? 'p-or' : 'p-bad'}">${sc.ok}/${sc.n} réponses trouvées</span>` : ''}</div>${r.bilan ? md(r.bilan) : ''}
    <div class="row"><button type="button" class="btn b-pri b-sm" data-solrnd>${ic('refresh')}Nouvel exercice</button><button type="button" class="btn b-line b-sm" data-srestart>${ic('back')}Recommencer</button><button type="button" class="btn b-ghost b-sm" data-solmode="full">${ic('book')}Voir tout le corrigé</button></div></div>`}`;
}
function updOut(){
  const def = SOL.get(ST.id); if(!def) return;
  const e = $('#solEnonce'), o = $('#solOut');
  if(e) e.innerHTML = enHtml(def);
  if(o) o.innerHTML = outHtml(def);
  if(def.editor && def.editor.update) def.editor.update(ST.p, ST);
}
const enHtml = def => { let t = ''; try{ t = def.enonce ? def.enonce(ST.p) : ''; }catch(e){ t = ''; } return t ? md(t) : ''; };

/* ---------- page ---------- */
A.page('app/solveur/:id', {space:'app', title:p => (SOL.get(p.id) || {}).titre || 'Solveur', crumb:p => { const d = SOL.get(p.id), m = d && A.mat(d.mat); return `<a href="#/app/exercices">Exercices</a>${m ? ` › <a href="#/app/exercices/${m.id}">${esc(m.court || m.titre)}</a>` : ''}`; },
 actions:p => `<div class="seg" role="tablist"><button type="button" class="${ST && ST.mode === 'guide' ? 'on' : ''}" data-solmode="guide">${ic('target')}<span class="hs">Guidé</span></button><button type="button" class="${ST && ST.mode === 'full' ? 'on' : ''}" data-solmode="full">${ic('book')}<span class="hs">Corrigé</span></button></div>`,
 render(p){
  const def = SOL.get(p.id);
  if(!def) return A.empty('search', 'Solveur introuvable.', `<a class="btn b-line" href="#/app/exercices">Tous les exercices</a>`);
  if(!ST || ST.id !== def.id || ST.raw !== location.hash) init(def, A.query());
  const m = A.mat(def.mat), N = A.NIVEAUX[def.niv - 1];
  return `<div class="solg${def.editor ? ' wide' : ''}">
   <div class="stack">
    <div class="card stack s8"><div class="row between"><div class="row" style="gap:8px">${m ? A.matIconSm(m) : ''}<b>${esc(m ? m.titre : '')}</b></div><span class="pill" style="background:${N.bg};color:${N.c}">${'●'.repeat(N.id)} ${N.n}</span></div>
     <p class="sub">${esc(def.resume || '')}</p></div>
    <div class="card stack"><div class="row between"><h3 style="margin:0">Données</h3><div class="row" style="gap:6px"><button type="button" class="btn b-line b-xs" data-solex>${ic('book')}Exemple</button>${def.rnd ? `<button type="button" class="btn b-line b-xs" data-solrnd>${ic('refresh')}Nouvel exercice</button>` : ''}</div></div>
     <div id="solForm">${formHtml(def)}</div>
     <p class="sub">${ic('info')} Modifiez les valeurs : l'énoncé et la correction se mettent à jour.</p></div>
   </div>
   <div class="stack" style="min-width:0">
    <div class="card"><b class="kick">Énoncé</b><div id="solEnonce">${enHtml(def)}</div></div>
    <div id="solOut">${outHtml(def)}</div>
   </div></div>`;
 },
 mount(){ const def = ST && SOL.get(ST.id); if(def && def.editor && def.editor.mount) def.editor.mount($('#solForm'), ST.p, ST, () => { resetProgress(); updOut(); }); }
});

/* ---------- événements ---------- */
let tmo = null;
const setField = (k, v, f) => { const def = SOL.get(ST.id); f = f || (def.champs || []).find(x => x.k === k) || {}; ST.p[k] = f.t === 'sel' ? (f.o.some(o => typeof o[0] === 'number') ? +v : v) : f.t === 'txt' ? v : parse(v); };
A.on('input', '[data-sf]', el => { if(!ST || el.type === 'checkbox' || el.tagName === 'SELECT') return; setField(el.dataset.sf, el.value); resetProgress(); clearTimeout(tmo); tmo = setTimeout(updOut, 280); });
A.on('change', '[data-sf]', el => { if(!ST) return; if(el.type === 'checkbox') ST.p[el.dataset.sf] = el.checked; else if(el.tagName === 'SELECT') setField(el.dataset.sf, el.value); else return; resetProgress(); A.refresh(); });
A.on('input', '[data-sft]', el => { if(!ST || el.tagName === 'SELECT') return; const [k, i, c] = el.dataset.sft.split(':'); const def = SOL.get(ST.id), f = def.champs.find(x => x.k === k), col = f.cols.find(x => x.k === c);
  ST.p[k][+i][c] = col.t === 'txt' ? el.value : parse(el.value); resetProgress(); clearTimeout(tmo); tmo = setTimeout(updOut, 280); });
A.on('change', '[data-sft]', el => { if(!ST || el.tagName !== 'SELECT') return; const [k, i, c] = el.dataset.sft.split(':'); const def = SOL.get(ST.id), col = def.champs.find(x => x.k === k).cols.find(x => x.k === c);
  ST.p[k][+i][c] = col.o.some(o => typeof o[0] === 'number') ? +el.value : el.value; resetProgress(); updOut(); });
A.on('click', '[data-sfadd]', el => { const def = SOL.get(ST.id), f = def.champs.find(x => x.k === el.dataset.sfadd), rows = ST.p[f.k];
  rows.push(f.row ? f.row(rows) : Object.assign({}, rows[rows.length - 1] || {})); resetProgress(); A.refresh(); });
A.on('click', '[data-sfdel]', el => { const [k, i] = el.dataset.sfdel.split(':'); ST.p[k].splice(+i, 1); resetProgress(); A.refresh(); });
A.on('click', '[data-solex]', () => { const def = SOL.get(ST.id); ST.p = clone(def.ex); resetProgress(); A.refresh(); });
A.on('click', '[data-solrnd]', () => { const def = SOL.get(ST.id); if(!def.rnd) return; for(let k = 0; k < 30; k++){ const p = Object.assign(clone(def.ex), def.rnd()); if(!SOL.run(def, p).err){ ST.p = p; break; } }
  resetProgress(); A.refresh(); window.scrollTo({top:0, behavior:'smooth'}); toast('Nouvel exercice : à vous de jouer', 'refresh'); });
A.on('click', '[data-solmode]', el => { ST.mode = el.dataset.solmode; A.refresh(); });
A.on('click', '[data-srestart]', () => { resetProgress(); updOut(); const o = $('#solOut'); if(o) o.scrollIntoView({behavior:'smooth'}); });
A.on('click', '[data-snext]', () => { ST.cur++; updOut(); const s = $('#sst' + ST.cur); if(s) s.scrollIntoView({behavior:'smooth', block:'start'}); });
const curStep = i => { const r = SOL.run(SOL.get(ST.id), ST.p); return r.steps ? r.steps[i] : null; };
A.on('click', '[data-scheck]', el => { const i = +el.dataset.scheck, s = curStep(i); if(!s) return; const st = ST.st[i]; st.tries++;
  let all = true;
  (s.ask || []).forEach((a, j) => { if(st.ok[j] != null || a.o) { if(a.o && st.ok[j] == null) all = false; return; }
    const inp = $(`#sa_${i}_${j}`), raw = inp ? inp.value : ''; st.val[j] = raw; if(st.draft) delete st.draft[j]; const u = parse(raw);
    const tol = a.abs != null ? a.abs : Math.max(Math.abs(a.v) * (a.tol ?? .02), a.v === 0 ? .01 : 1e-12);
    if(isFinite(u) && Math.abs(u - a.v) <= tol) st.ok[j] = true; else all = false; });
  updOut(); toast(all ? 'Bonne réponse !' : 'Pas encore : vérifiez votre calcul ou demandez un indice', all ? 'check' : 'alert'); });
A.on('click', '[data-sch]', el => { const [i, j, k] = el.dataset.sch.split(':').map(Number), s = curStep(i); if(!s) return; const st = ST.st[i];
  st.draft = st.draft || {}; (s.ask || []).forEach((a, jj) => { const inp = $(`#sa_${i}_${jj}`); if(inp) st.draft[jj] = inp.value; }); // garder les valeurs déjà tapées
  if(s.ask[j].v === k){ st.ok[j] = true; toast('Bonne réponse !', 'check'); } else { st.val[j] = k; toast('Ce n\'est pas ça : réfléchissez encore', 'alert'); } updOut(); });
A.on('click', '[data-shint]', el => { ST.st[+el.dataset.shint].hint = true; updOut(); });
A.on('click', '[data-sshow]', el => { const i = +el.dataset.sshow, s = curStep(i); if(!s) return; const st = ST.st[i]; (s.ask || []).forEach((a, j) => { if(st.ok[j] == null) st.ok[j] = false; }); updOut(); });
document.addEventListener('keydown', e => { if(e.key === 'Enter' && e.target && /^sa_\d+_\d+$/.test(e.target.id)){ e.preventDefault(); const b = $(`[data-scheck="${e.target.id.split('_')[1]}"]`); if(b) b.click(); } });
SOL.state = () => ST;
SOL.refreshOut = updOut;
SOL.reset = resetProgress;
})();
