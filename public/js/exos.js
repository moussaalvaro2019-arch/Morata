/* =====================================================================
   Exercices : banque d'exercices corrigés (type BTS / Licence),
   épreuves d'entraînement chronométrées, annales officielles
   (sujets importés par la direction, corrigés relus avant publication).
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast, S} = A;
const SOL = A.SOL;

/* ---------- registre des exercices ---------- */
const EXO = A.EXO = {
  L: [], EP: [],
  add(mat, list){ list.forEach(e => { e.mat = e.mat || mat; e.niv = e.niv || 'BTS'; EXO.L.push(e); }); },
  ep(list){ EXO.EP.push(...list); },
  get: id => EXO.L.find(e => e.id === id),
  byMat: m => EXO.L.filter(e => e.mat === m),
  /* énoncé d'un exercice : texte rédigé, sinon énoncé généré par le solveur */
  enonce(e){ const def = e.sol && SOL.get(e.sol); let t = e.enonce || ''; if(def && !e.enonce){ try{ t = def.enonce(Object.assign(SOL.U.clone(def.ex), e.p || {})); }catch(_){ t = ''; } } return (e.ctx ? e.ctx + '\n\n' : '') + t; },
  params: e => { const def = e.sol && SOL.get(e.sol); return def ? Object.assign(SOL.U.clone(def.ex), e.p || {}) : null; }
};
const EXAMS = ['BTS Bâtiment', 'BTS Génie civil', 'BTS Travaux publics', 'BTS Géomètre-topographe', 'DUT Génie civil', 'Licence Génie civil', 'Licence Bâtiment', 'Master Génie civil', 'BT / Bac technique', 'Concours', 'Autre'];
A.EXAMS = EXAMS;
const YEARS = []; for(let y = new Date().getFullYear(); y >= 2010; y--) YEARS.push(y);
const nivTag = n => `<span class="tag ${/lic|master/i.test(n) ? 'lic' : 'bts'}">${esc(n)}</span>`;

/* ---------- annales (cache) ---------- */
let AN = null, anLoading = null;
async function loadAnnales(force){ if(AN && !force) return AN; if(!anLoading) anLoading = A.db.annales().then(r => { AN = r; anLoading = null; return r; }); return anLoading; }
A.loadAnnales = loadAnnales;
const annOf = m => (AN || []).filter(a => a.mat === m);

/* =====================================================================
   HUB
   ===================================================================== */
let hubTab = 'mat';
A.page('app/exercices', {space:'app', title:'Exercices & annales', crumb:'S\'entraîner, se corriger, préparer l\'examen', render(){
  if(!AN) loadAnnales().then(() => A.refresh());
  const cat = A.catalog();
  const tabs = [['mat', 'Par matière', 'book'], ['sol', 'Solveurs guidés', 'target'], ['ep', 'Épreuves d\'entraînement', 'clock'], ['ann', 'Annales officielles', 'doc']];
  let body = '';
  if(hubTab === 'mat') body = `<div class="mgrid">${cat.map(m => { const ns = SOL.byMat(m.id).length, ne = EXO.byMat(m.id).length, na = annOf(m.id).length;
      const nsj = m.chapitres.filter(c => c.ns || c.sujet).length;
      return `<a class="mcard" href="#/app/exercices/${m.id}">${A.matIcon(m)}<b>${esc(m.titre)}</b><div class="meta">${nsj ? `<span>${ic('doc')} ${nsj} sujet${nsj > 1 ? 's' : ''} d'examen</span>` : ''}<span>${ic('target')} ${ns} solveur${ns > 1 ? 's' : ''}</span><span>${ic('book')} ${ne} exercice${ne > 1 ? 's' : ''}</span>${na ? `<span>${ic('doc')} ${na} annale${na > 1 ? 's' : ''}</span>` : ''}</div></a>`; }).join('')}</div>`;
  else if(hubTab === 'sol') body = A.GROUPES.map(g => { const ms = cat.filter(m => m.groupe === g.id); const list = ms.flatMap(m => SOL.L.filter(s => s.mat === m.id));
      return list.length ? `<div class="stack s8"><h3>${esc(g.n)}</h3><div class="exlist">${list.map(solRow).join('')}</div></div>` : ''; }).join('');
  else if(hubTab === 'ep') body = (A.droit('epreuves') ? '' : A.upsell('Les épreuves d\'entraînement chronométrées sont disponibles', 'epreuves')) + epList(EXO.EP);
  else body = (A.droit('annales') ? '' : A.upsell('Les annales officielles corrigées sont disponibles', 'annales')) + annList(AN, true);
  return `<div class="stack">
   <div class="exhero"><span class="ic">${ic('camera')}</span><div class="stack s8"><h2 style="color:#fff">Un exercice qui bloque ?</h2><p>Prenez-le en photo : l'IA lit l'énoncé et vous explique la résolution étape par étape, dans n'importe quelle matière.</p></div><a class="btn b-pri b-lg" href="#/app/resoudre">${ic('camera')}Résoudre en photo</a></div>
   <div class="tabs" style="flex-wrap:wrap">${tabs.map(([k, n, icn]) => `<button class="tab ${hubTab === k ? 'on' : ''}" data-exhub="${k}">${ic(icn)}${n}</button>`).join('')}</div>
   ${hubTab === 'mat' ? `<p class="sub">${SOL.L.length} solveurs guidés, ${EXO.L.length} exercices corrigés type BTS et Licence, ${EXO.EP.length} épreuves d'entraînement${AN && AN.length ? `, ${AN.length} annales officielles` : ''}.</p>` : ''}
   ${body}</div>`;
}});
A.on('click', '[data-exhub]', el => { hubTab = el.dataset.exhub; A.refresh(); });
function solRow(s){ const m = A.mat(s.mat), N = A.NIVEAUX[s.niv - 1];
  return `<a class="exrow" href="${SOL.link(s.id)}"><span class="tag sol">${ic('target')}Guidé</span><span style="min-width:0"><span class="ti">${esc(s.titre)}</span><div class="sub">${esc(m ? m.court || m.titre : '')} · ${esc(s.resume || '')}</div></span><span class="pill" style="background:${N.bg};color:${N.c}">${'●'.repeat(N.id)}</span>${A.droitSolveur(s.id) ? '' : A.lockTag(() => false)}</a>`; }
function exRow(e){ const m = A.mat(e.mat);
  return `<a class="exrow" href="#/app/exercice/${e.id}">${nivTag(e.niv)}<span style="min-width:0"><span class="ti">${esc(e.titre)}</span><div class="sub">${esc(m ? m.court || m.titre : '')}${e.theme ? ' · ' + esc(e.theme) : ''}${e.duree ? ' · ' + e.duree + ' min' : ''}${e.sol ? ' · corrigé pas à pas' : ''}</div></span>${A.droitExo(e.id) ? ic('chev') : A.lockTag(() => false)}</a>`; }
function epList(list){
  if(!list.length) return A.empty('clock', 'Aucune épreuve d\'entraînement.');
  return `<p class="sub">Sujets d'entraînement composés à partir des exercices de la plateforme, dans les conditions de l'examen (durée, enchaînement des exercices). Ce ne sont pas les sujets officiels : ceux-ci se trouvent dans l'onglet « Annales officielles ».</p>
  <div class="exlist">${list.map(ep => `<a class="exrow" href="#/app/epreuve/${ep.id}">${nivTag(ep.exam)}<span style="min-width:0"><span class="ti">${esc(ep.titre)}</span><div class="sub">${esc(ep.duree)} · ${ep.exos.length} exercice${ep.exos.length > 1 ? 's' : ''} · ${esc(ep.mats.map(id => (A.mat(id) || {}).court || id).join(', '))}</div></span>${A.droit('epreuves') ? ic('chev') : A.lockTag(() => false)}</a>`).join('')}</div>`;
}
let anF = {exam:'', annee:'', mat:''};
function annList(list, filters, edit){
  if(!list) return `<div class="row sub">${ic('refresh')}Chargement des annales…</div>`;
  let l = list.filter(a => a.pub || (S.me && S.me.isAdmin));
  if(filters){ if(anF.exam) l = l.filter(a => a.examen === anF.exam); if(anF.annee) l = l.filter(a => +a.annee === +anF.annee); if(anF.mat) l = l.filter(a => a.mat === anF.mat); }
  l.sort((a, b) => (b.annee || 0) - (a.annee || 0) || String(a.titre).localeCompare(String(b.titre)));
  const cat = A.catalog();
  return `${filters ? `<div class="row"><select class="inp sm" style="width:auto" data-anf="exam"><option value="">Tous les examens</option>${EXAMS.map(x => `<option ${anF.exam === x ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select>
    <select class="inp sm" style="width:auto" data-anf="annee"><option value="">Toutes les années</option>${YEARS.map(y => `<option ${+anF.annee === y ? 'selected' : ''}>${y}</option>`).join('')}</select>
    <select class="inp sm" style="width:auto" data-anf="mat"><option value="">Toutes les matières</option>${cat.map(m => `<option value="${m.id}" ${anF.mat === m.id ? 'selected' : ''}>${esc(m.titre)}</option>`).join('')}</select></div>` : ''}
   ${l.length ? `<div class="exlist">${l.map(a => `<a class="exrow" href="#/${edit ? 'admin' : 'app'}/annale/${a.id}">${nivTag(a.examen || 'Examen')}<span style="min-width:0"><span class="ti">${esc(a.titre || 'Sujet')}</span><div class="sub">${a.annee ? 'Session ' + a.annee : ''}${a.session ? ' (' + esc(a.session) + ')' : ''}${a.mat ? ' · ' + esc((A.mat(a.mat) || {}).titre || '') : ''}${a.option ? ' · ' + esc(a.option) : ''} · ${a.hasC ? 'corrigé disponible' : 'sans corrigé'}${a.pub ? '' : ' · <b>brouillon</b>'}</div></span>${ic('chev')}</a>`).join('')}</div>`
     : A.empty('doc', filters ? 'Aucune annale ne correspond à ces filtres.' : 'Aucune annale pour cette matière pour le moment.', S.me && S.me.isAdmin ? `<a class="btn b-pri" href="#/admin/annale/nouvelle">${ic('plus')}Importer un sujet</a>` : '<p class="sub">La direction ajoute les sujets officiels au fur et à mesure.</p>')}`;
}
A.on('change', '[data-anf]', el => { anF[el.dataset.anf] = el.value; A.refresh(); });

/* =====================================================================
   MATIÈRE
   ===================================================================== */
let exNiv = '';
A.page('app/exercices/:mat', {space:'app', title:p => (A.mat(p.mat) || {}).titre || 'Matière', crumb:'<a href="#/app/exercices">Exercices & annales</a>', render(p){
  const m = A.mat(p.mat); if(!m) return A.empty('search', 'Matière introuvable.');
  if(!AN) loadAnnales().then(() => A.refresh());
  const sols = SOL.byMat(m.id).sort((a, b) => a.niv - b.niv), exs = EXO.byMat(m.id).filter(e => !exNiv || (exNiv === 'BTS' ? !/lic|master/i.test(e.niv) : /lic|master/i.test(e.niv)));
  const sjs = m.chapitres.filter(c => c.ns || c.sujet);
  return `<div class="stack">${A.matHead(m)}
   ${sjs.length ? `<div class="card stack"><div class="row between"><h3 style="margin:0;justify-content:flex-start">${ic('doc')} Sujets d'examen par chapitre</h3><span class="sub">${sjs.length}</span></div>
    <p class="sub">Un sujet type examen (BTS, Licence) pour chaque chapitre du cours : contexte de chantier, données, questions notées, puis corrigé détaillé et barème. Faites-le en temps limité en « mode examen ».</p>
    ${A.NIVEAUX.map(N => { const L = sjs.filter(c => A.nivOf(c) === N.id); return L.length ? `<div class="stack s8"><b style="color:${N.c}">${'●'.repeat(N.id)} ${N.n}</b><div class="exlist">${L.map(c => `<a class="exrow" href="#/app/sujet/${c.id}"><span class="tag" style="background:${N.bg};color:${N.c}">${ic('doc')}Sujet</span><span style="min-width:0"><span class="ti">${esc(c.titre)}</span><div class="sub">${c.sujet && c.sujet.titre ? esc(c.sujet.titre) + ' · ' : ''}${(c.sujet && c.sujet.duree) || ''}${c.sujet && c.sujet.duree ? ' min' : 'sujet noté sur 20'}</div></span>${A.canRead(c.id) && !(N.id > (+A.lim('sujets') || 0)) ? ic('chev') : ic('lock')}</a>`).join('')}</div></div>` : ''; }).join('')}</div>` : ''}
   <div class="g2" style="align-items:start">
    <div class="stack">
     <div class="card stack"><div class="row between"><h3 style="margin:0;justify-content:flex-start">${ic('target')} Solveurs guidés</h3><span class="sub">${sols.length}</span></div>
      <p class="sub">Vous entrez (ou dessinez) les données ; la plateforme vous fait trouver chaque étape et corrige vos réponses. « Nouvel exercice » génère d'autres valeurs à l'infini.</p>
      ${sols.length ? `<div class="exlist">${sols.map(solRow).join('')}</div>` : A.empty('target', 'Pas encore de solveur pour cette matière.')}</div>
     <div class="card stack"><div class="row between"><h3 style="margin:0;justify-content:flex-start">${ic('doc')} Annales officielles</h3><a class="btn b-ghost b-xs" href="#/app/exercices" data-exhub="ann">Toutes</a></div>${annList(AN ? annOf(m.id) : null, false)}</div>
    </div>
    <div class="card stack"><div class="row between"><h3 style="margin:0;justify-content:flex-start">${ic('book')} Exercices corrigés</h3><div class="seg">${[['', 'Tous'], ['BTS', 'BTS'], ['LIC', 'Licence']].map(([k, n]) => `<button class="${exNiv === k ? 'on' : ''}" data-exniv="${k}">${n}</button>`).join('')}</div></div>
     ${exs.length ? `<div class="exlist">${exs.map(exRow).join('')}</div>` : A.empty('book', 'Aucun exercice pour ce filtre.')}
     <a class="btn b-line" href="#/app/resoudre?m=${m.id}">${ic('camera')}Résoudre un autre exercice en photo</a></div>
   </div></div>`;
}});
A.on('click', '[data-exniv]', el => { exNiv = el.dataset.exniv; A.refresh(); });

/* =====================================================================
   EXERCICE
   ===================================================================== */
let showC = {};
A.page('app/exercice/:id', {space:'app', title:p => (EXO.get(p.id) || {}).titre || 'Exercice', crumb:p => { const e = EXO.get(p.id), m = e && A.mat(e.mat); return `<a href="#/app/exercices">Exercices</a>${m ? ` › <a href="#/app/exercices/${m.id}">${esc(m.court || m.titre)}</a>` : ''}`; }, render(p){
  const e = EXO.get(p.id); if(!e) return A.empty('search', 'Exercice introuvable.');
  const def = e.sol && SOL.get(e.sol), prm = EXO.params(e), m = A.mat(e.mat);
  const sib = EXO.byMat(e.mat), k = sib.indexOf(e), nx = sib[k + 1], pv = sib[k - 1];
  return `<div class="reader" style="max-width:920px"><div class="stack">
   <div class="card stack s8"><div class="row" style="gap:8px">${nivTag(e.niv)}${m ? `<span class="pill p-mute">${esc(m.titre)}</span>` : ''}${e.theme ? `<span class="pill p-mute">${esc(e.theme)}</span>` : ''}${e.duree ? `<span class="pill p-mute">${ic('clock')}${e.duree} min</span>` : ''}</div>
    <h2 style="margin:0">${esc(e.titre)}</h2>${e.contexte ? `<p class="sub">${esc(e.contexte)}</p>` : ''}</div>
   <div class="card"><b class="kick">Énoncé</b>${SOL.md(EXO.enonce(e))}${e.fig && A.FIG[e.fig] ? `<figure>${A.FIG[e.fig]()}</figure>` : ''}</div>
   <div class="row">${def ? `<a class="btn b-pri" href="${SOL.link(def.id, prm, 'guide')}">${ic('target')}S'entraîner pas à pas</a>` : ''}
    <button class="btn ${showC[e.id] ? 'b-dark' : 'b-line'}" data-exc="${e.id}">${ic(showC[e.id] ? 'eyeoff' : 'eye')}${showC[e.id] ? 'Masquer le corrigé' : 'Voir le corrigé'}</button>
    <button class="btn b-ghost" data-exia="${e.id}">${ic('spark')}Demander de l'aide à l'IA</button></div>
   ${showC[e.id] ? `<div class="stack"><h3>Corrigé détaillé</h3>${e.corrige ? `<div class="card">${SOL.md(e.corrige)}</div>` : ''}${def ? SOL.fullHtml(def, prm) : ''}</div>` : `<p class="sub">${ic('info')} Cherchez d'abord seul (au brouillon), puis comparez avec le corrigé ou laissez-vous guider étape par étape.</p>`}
   <div class="lnav">${pv ? `<a class="btn b-line" href="#/app/exercice/${pv.id}">${ic('back')}Précédent</a>` : '<span></span>'}${nx ? `<a class="btn b-pri" href="#/app/exercice/${nx.id}">Exercice suivant ${ic('arrow')}</a>` : `<a class="btn b-dark" href="#/app/exercices/${e.mat}">Tous les exercices ${ic('flag')}</a>`}</div>
  </div></div>`;
}});
A.on('click', '[data-exc]', el => { showC[el.dataset.exc] = !showC[el.dataset.exc]; A.refresh(); });
A.on('click', '[data-exia]', el => { const e = EXO.get(el.dataset.exia); if(!e) return; A.ss.set('photoTxt', JSON.stringify({mat:e.mat, txt:e.titre + '\n\n' + EXO.enonce(e).replace(/\*\*/g, '')})); A.go('#/app/resoudre'); });

/* =====================================================================
   ÉPREUVE D'ENTRAÎNEMENT (chronométrée)
   ===================================================================== */
let EPS = {};
const fmtT = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s/3600), m = Math.floor(s%3600/60), x = s%60; return (h ? h + ' h ' : '') + String(m).padStart(2, '0') + ' min ' + String(x).padStart(2, '0') + ' s'; };
const durSec = d => { const m = String(d).match(/(\d+)\s*h(?:\s*(\d+))?/); return m ? (+m[1])*3600 + (+(m[2] || 0))*60 : (parseInt(d, 10) || 120)*60; };
let tick = null;
A.page('app/epreuve/:id', {space:'app', title:p => (EXO.EP.find(x => x.id === p.id) || {}).titre || 'Épreuve', crumb:'<a href="#/app/exercices">Exercices</a> › Épreuve d\'entraînement', render(p){
  const ep = EXO.EP.find(x => x.id === p.id); if(!ep) return A.empty('search', 'Épreuve introuvable.');
  const st = EPS[ep.id] = EPS[ep.id] || {start:0, end:0};
  const exs = ep.exos.map(id => EXO.get(id)).filter(Boolean), total = durSec(ep.duree);
  const running = st.start && !st.end, left = running ? total - (Date.now() - st.start)/1000 : total;
  return `<div class="reader" style="max-width:920px"><div class="stack">
   <div class="card stack s8"><div class="row between"><div class="row" style="gap:8px">${nivTag(ep.exam)}<span class="pill p-mute">${ic('clock')}${esc(ep.duree)}</span></div>
     ${running ? `<span class="chrono ${left < 600 ? 'late' : ''}" id="epChrono">${fmtT(left)}</span>` : ''}</div>
    <h2 style="margin:0">${esc(ep.titre)}</h2><p class="sub">${esc(ep.intro || 'Documents non autorisés sauf formulaire. Calculatrice autorisée.')}</p>
    ${ep.bareme ? `<p class="small">Barème indicatif : ${ep.exos.map((id, i) => `exercice ${i + 1} : ${ep.bareme[i]} pts`).join(' · ')}</p>` : ''}
    <div class="row">${!st.start ? `<button class="btn b-pri" data-epgo="${ep.id}">${ic('play')}Commencer l'épreuve</button>` : running ? `<button class="btn b-amber" data-epend="${ep.id}">${ic('flag')}Terminer et voir le corrigé</button>` : `<span class="pill p-ok">${ic('check')}Épreuve terminée en ${fmtT((st.end - st.start)/1000)}</span><button class="btn b-line b-sm" data-epreset="${ep.id}">${ic('refresh')}Recommencer</button>`}</div></div>
   ${!st.start ? `<div class="note">${ic('info')}<span>Le sujet s'affiche quand vous cliquez sur « Commencer ». Travaillez sur papier, puis terminez l'épreuve pour voir le corrigé détaillé de chaque exercice.</span></div>`
    : exs.map((e, i) => `<div class="card stack"><div class="row between"><h3 style="margin:0">Exercice ${i + 1} · ${esc(e.titre)}</h3>${ep.bareme ? `<span class="pill p-mute">${ep.bareme[i]} pts</span>` : ''}</div>${SOL.md(EXO.enonce(e))}${e.fig && A.FIG[e.fig] ? `<figure>${A.FIG[e.fig]()}</figure>` : ''}
      ${st.end ? `<details class="stack"><summary class="btn b-line b-sm" style="width:max-content">${ic('eye')}Corrigé de l'exercice ${i + 1}</summary><div class="stack" style="margin-top:10px">${e.corrige ? `<div class="card">${SOL.md(e.corrige)}</div>` : ''}${e.sol && SOL.get(e.sol) ? SOL.fullHtml(SOL.get(e.sol), EXO.params(e)) : ''}</div></details>` : ''}</div>`).join('')}
  </div></div>`;
 },
 mount(){ clearInterval(tick); tick = setInterval(() => { const el = $('#epChrono'); if(!el){ clearInterval(tick); return; } const id = A.hash().split('/')[2], ep = EXO.EP.find(x => x.id === id), st = EPS[id]; if(!ep || !st) return;
   const left = durSec(ep.duree) - (Date.now() - st.start)/1000; el.textContent = fmtT(left); el.classList.toggle('late', left < 600); if(left <= 0){ st.end = Date.now(); clearInterval(tick); toast('Temps écoulé : voici le corrigé', 'clock'); A.refresh(); } }, 1000); },
 unmount(){ clearInterval(tick); }
});
A.on('click', '[data-epgo]', el => { EPS[el.dataset.epgo] = {start:Date.now(), end:0}; A.refresh(); });
A.on('click', '[data-epend]', el => { const st = EPS[el.dataset.epend]; if(st){ st.end = Date.now(); } A.refresh(); window.scrollTo({top:0, behavior:'smooth'}); });
A.on('click', '[data-epreset]', el => { delete EPS[el.dataset.epreset]; A.refresh(); });

/* =====================================================================
   ANNALE (consultation)
   ===================================================================== */
let CUR = null;
A.page('app/annale/:id', {space:'app', title:() => CUR && CUR.titre || 'Annale', crumb:'<a href="#/app/exercices">Exercices</a> › Annales officielles', render(p){
  if(!CUR || CUR.id !== p.id){ CUR = {id:p.id, loading:true}; A.db.annale(p.id).then(r => { CUR = r || {id:p.id, missing:true}; A.refresh(); }); }
  if(CUR.loading) return `<div class="row sub">${ic('refresh')}Chargement du sujet…</div>`;
  if(CUR.missing) return A.empty('doc', 'Sujet introuvable ou non publié.');
  const a = CUR, m = A.mat(a.mat);
  return `<div class="reader" style="max-width:980px"><div class="stack">
   <div class="card stack s8"><div class="row" style="gap:8px">${nivTag(a.examen || 'Examen')}${a.annee ? `<span class="pill p-mute">Session ${a.annee}</span>` : ''}${m ? `<span class="pill p-mute">${esc(m.titre)}</span>` : ''}${a.option ? `<span class="pill p-mute">${esc(a.option)}</span>` : ''}${a.pub ? '' : '<span class="pill p-bad">Brouillon (visible par la direction seulement)</span>'}</div>
    <h2 style="margin:0">${esc(a.titre || 'Sujet')}</h2>${a.src ? `<p class="small">Source : <a href="${esc(a.src)}" target="_blank" rel="noopener">${esc(((String(a.src).match(/^https?:\/\/([^/?#]+)/i) || [])[1] || a.src).replace(/^www\./, ''))}</a></p>` : ''}
    <div class="row">${a.pages && a.pages.length ? `<button class="btn b-pri" data-annia>${ic('spark')}Me faire expliquer ce sujet par l'IA</button>` : ''}${S.me && S.me.isAdmin ? `<a class="btn b-line" href="#/admin/annale/${a.id}">${ic('edit')}Modifier</a>` : ''}</div></div>
   ${a.pages && a.pages.length ? `<div class="card stack"><b class="kick">Sujet (${a.pages.length} page${a.pages.length > 1 ? 's' : ''})</b>${a.pages.map((src, i) => `<img class="annpage" src="${esc(src)}" alt="Page ${i + 1} du sujet" loading="lazy">`).join('')}</div>` : ''}
   ${a.enonce ? `<div class="card"><b class="kick">Énoncé (texte)</b>${A.mdHtml(a.enonce)}</div>` : ''}
   ${a.corrige ? `<div class="card"><div class="row between"><b class="kick">Corrigé</b><button class="btn b-line b-xs" data-anc>${ic(showC['an' + a.id] ? 'eyeoff' : 'eye')}${showC['an' + a.id] ? 'Masquer' : 'Afficher'}</button></div>${showC['an' + a.id] ? A.mdHtml(a.corrige) : '<p class="sub">Essayez de traiter le sujet avant d\'ouvrir le corrigé.</p>'}</div>` : `<div class="note">${ic('info')}<span>Le corrigé de ce sujet n'est pas encore publié. Utilisez « Me faire expliquer ce sujet par l'IA » pour une aide immédiate.</span></div>`}
  </div></div>`;
}});
A.on('click', '[data-anc]', () => { const k = 'an' + CUR.id; showC[k] = !showC[k]; A.refresh(); });
A.on('click', '[data-annia]', () => { if(!CUR || !CUR.pages) return; A.photoHandoff = {mat:CUR.mat, txt:`Sujet d'examen : ${CUR.titre || ''} (${CUR.examen || ''} ${CUR.annee || ''})`, pages:CUR.pages.slice(0, 4)}; A.go('#/app/resoudre'); });

/* =====================================================================
   ESPACE PDG : importer et corriger les annales
   ===================================================================== */
A.page('admin/annales', {space:'admin', title:'Annales d\'examens', crumb:'Sujets officiels BTS, Licence… et leurs corrigés',
 actions:() => `<a class="btn b-pri b-sm" href="#/admin/annale/nouvelle">${ic('plus')}Ajouter un sujet</a>`, render(){
  if(!AN) loadAnnales().then(() => A.refresh());
  return `<div class="stack">
   <div class="note">${ic('info')}<div>Importez ici les <b>sujets d'examen</b> (PDF, photos ou scans) par examen, année et matière. L'IA peut <b>transcrire l'énoncé</b> et <b>rédiger un corrigé</b> : relisez-le, corrigez-le si besoin, puis publiez. Seuls les sujets publiés sont visibles des apprenants.</div></div>
   ${importCard()}
   ${annList(AN, true, true)}</div>`;
}});

/* ---------- import en lot depuis un site autorisé (Fomesoutra…) ---------- */
const DEF_SRC = 'https://www.fomesoutra.com/sujets-du-superieur/bts/bts-genie-civil-option-batiment';
const IMP = {url:DEF_SRC, exam:'BTS Bâtiment', items:[], loading:false, run:false, stop:false, ai:true, pub:false, msg:''};
const nrm = t => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
A.guessMat = t => { t = nrm(t);
  if(/\brdm\b|resistance des materiaux|beton arme|\bba\b|bael/.test(t)) return /beton|\bba\b|bael/.test(t) ? 'ba' : 'rdm';
  if(/topo/.test(t)) return 'topo'; if(/metre|devis|etude de prix|quantitatif/.test(t)) return 'metre'; if(/math/.test(t)) return 'math';
  if(/materiau/.test(t)) return 'mat'; if(/structure|technolog|construction metallique|charpente|route|ouvrage/.test(t)) return 'tech';
  if(/etude de cas|organisation|chantier|\bogc\b|planning/.test(t)) return 'chant'; if(/econom|droit|comptab|gestion/.test(t)) return 'eco';
  if(/\bsols?\b|geotech/.test(t)) return 'geo'; if(/hydraul|fluide|assainissement/.test(t)) return 'mdf'; if(/thermi|physique|electri/.test(t)) return 'pb';
  if(/mecanique|statique/.test(t)) return 'rdm'; return ''; };
const guessYear = t => { const m = String(t).match(/\b(20[0-3]\d)\b/); return m ? +m[1] : null; };
const guessSess = t => { t = nrm(t); return /blanc/.test(t) ? 'BTS blanc' : /partiel|\btd\b|efm|devoir|composition/.test(t) ? 'Devoir / TD' : /session|officiel/.test(t) ? 'Session officielle' : ''; };
function importCard(){
  const sel = IMP.items.filter(x => x.on).length, cat = A.catalog(true);
  return `<div class="card stack"><div class="row between"><h3 style="margin:0;justify-content:flex-start">${ic('download')} Importer les sujets d'un site autorisé</h3><span class="pill p-mute">Fomesoutra</span></div>
   <p class="sub">Collez l'adresse d'une rubrique (par exemple « BTS Génie Civil option bâtiment ») : la plateforme liste tous ses sujets, télécharge les PDF, les convertit en pages et, si vous le souhaitez, fait <b>transcrire l'énoncé</b> et <b>rédiger un corrigé</b> par l'IA. Les sujets sont enregistrés en <b>brouillon</b> pour relecture.</p>
   <div class="row"><input class="inp" id="impUrl" value="${esc(IMP.url)}" placeholder="https://www.fomesoutra.com/…" style="flex:1 1 260px;width:auto;min-width:0"><button class="btn b-pri" data-act="implist" ${IMP.loading || IMP.run ? 'disabled' : ''}>${ic('search')}Lister les sujets</button></div>
   ${IMP.msg ? `<div class="note${/rreur|impossible|refus|autoris/i.test(IMP.msg) ? ' bad' : ''}">${ic('info')}<span>${esc(IMP.msg)}</span></div>` : ''}
   ${IMP.loading ? `<div class="row sub">${ic('refresh')}Lecture de la rubrique…</div>` : ''}
   ${IMP.items.length ? `<div class="row"><label class="fld" style="max-width:260px"><span>Examen</span><select class="inp sm" id="impExam">${EXAMS.map(x => `<option ${IMP.exam === x ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select></label>
     <label class="check"><input type="checkbox" id="impAi" ${IMP.ai ? 'checked' : ''}><span>Transcrire et rédiger le corrigé avec l'IA</span></label>
     <label class="check"><input type="checkbox" id="impPub" ${IMP.pub ? 'checked' : ''}><span>Publier tout de suite</span></label></div>
    <div class="row between"><span class="sub">${IMP.items.length} sujet(s) trouvé(s) · ${sel} sélectionné(s)</span><div class="row" style="gap:6px"><button class="btn b-line b-xs" data-impall="1">Tout cocher</button><button class="btn b-line b-xs" data-impall="0">Tout décocher</button></div></div>
    <div class="tw"><table class="t sm"><thead><tr><th></th><th>Sujet</th><th>Année</th><th>Matière</th><th>État</th></tr></thead><tbody>${IMP.items.map((x, i) => `<tr><td><input type="checkbox" data-impon="${i}" ${x.on ? 'checked' : ''} ${IMP.run ? 'disabled' : ''}></td>
      <td style="min-width:220px"><b style="font-size:13px">${esc(x.title)}</b>${x.inCat ? '' : ' <span class="pill p-mute">autre rubrique</span>'}<div class="small"><a href="${esc(x.url)}" target="_blank" rel="noopener">source</a>${x.session ? ' · ' + esc(x.session) : ''}</div></td>
      <td><input class="inp sm num" style="width:70px" data-impy="${i}" value="${x.annee || ''}"></td>
      <td><select class="inp sm" data-impm="${i}"><option value="">—</option>${cat.map(m => `<option value="${m.id}" ${x.mat === m.id ? 'selected' : ''}>${esc(m.court || m.titre)}</option>`).join('')}</select></td>
      <td class="small" style="min-width:120px">${x.done ? `<span class="pill p-ok">${ic('check')}${esc(x.state || 'importé')}</span>${x.aid ? ` <a href="#/admin/annale/${x.aid}">ouvrir</a>` : ''}` : x.err ? `<span class="pill p-bad">${esc(x.err)}</span>` : esc(x.state || (x.dup ? 'déjà importé' : ''))}</td></tr>`).join('')}</tbody></table></div>
    <div class="row">${IMP.run ? `<button class="btn b-amber" data-act="impstop">${ic('x')}Arrêter après ce sujet</button><span class="sub">${ic('refresh')}Import en cours : laissez cette page ouverte.</span>` : `<button class="btn b-pri" data-act="impgo" ${sel ? '' : 'disabled'}>${ic('download')}Importer ${sel} sujet(s)</button>`}</div>` : ''}
  </div>`;
}
const srcFetch = async (action, url, extra) => { const token = await A.db.token(); return fetch('/api/source', {method:'POST', headers:{'Content-Type':'application/json', ...(token ? {Authorization:'Bearer ' + token} : {})}, body:JSON.stringify({action, url, ...(extra || {})})}); };
const srcErr = async (r) => { let m = ''; try{ m = (await r.json()).error || ''; }catch(_){} return r.status === 404 || r.status === 405 || r.status === 501 ? 'L\'import fonctionne sur le site publié sur Netlify (fonction /api/source).' : (m || 'Erreur ' + r.status); };
A.on('click', '[data-act="implist"]', async () => {
  IMP.url = A.val('impUrl').trim(); if(!/^https?:\/\//.test(IMP.url)) return toast('Adresse invalide', 'alert');
  IMP.loading = true; IMP.msg = ''; IMP.items = []; A.refresh();
  try{
    // la rubrique est lue page par page (?limit=100 d'abord, puis les liens de pagination)
    let big = IMP.url; try{ const u = new URL(IMP.url); u.searchParams.set('limit', '100'); big = u.href; }catch(_){}
    const queue = [big, IMP.url], seen = new Set(), found = new Map(); let err = '';
    while(queue.length && seen.size < 30){
      const url = queue.shift(); if(seen.has(url)) continue; seen.add(url);
      const r = await srcFetch('list', url, {cat:IMP.url});
      if(!r.ok){ if(!found.size && (r.status !== 502 || !queue.length)) { err = await srcErr(r); if(r.status !== 502) break; } continue; }
      const j = await r.json();
      (j.items || []).forEach(x => { const p = found.get(x.id); if(!p) found.set(x.id, x); else { if(x.title.length > p.title.length) p.title = x.title; p.inCat = p.inCat || x.inCat; } });
      (j.next || []).forEach(n => { if(!seen.has(n) && !queue.includes(n)) queue.push(n); });
      IMP.msg = found.size + ' sujet(s) trouvé(s) · ' + seen.size + ' page(s) lue(s)…'; A.refresh();
    }
    await loadAnnales(true); const have = new Set((AN || []).map(a => a.src).filter(Boolean));
    IMP.items = [...found.values()].map(x => ({...x, annee:guessYear(x.title), mat:A.guessMat(x.title), session:guessSess(x.title), dup:have.has(x.url), on:x.inCat && !have.has(x.url)}))
      .sort((a, b) => (b.inCat - a.inCat) || ((b.annee || 0) - (a.annee || 0)) || a.title.localeCompare(b.title));
    IMP.msg = IMP.items.length ? '' : err || 'Aucun sujet trouvé à cette adresse. Vérifiez qu\'il s\'agit bien d\'une page de rubrique.';
  }catch(e){ IMP.msg = 'Connexion impossible : ' + e.message; }
  IMP.loading = false; A.refresh();
});
A.on('change', '[data-impon]', el => { IMP.items[+el.dataset.impon].on = el.checked; A.refresh(); });
A.on('click', '[data-impall]', el => { IMP.items.forEach(x => { x.on = el.dataset.impall === '1' && !x.done; }); A.refresh(); });
A.on('change', '[data-impy]', el => { IMP.items[+el.dataset.impy].annee = +el.value || null; });
A.on('change', '[data-impm]', el => { IMP.items[+el.dataset.impm].mat = el.value; });
A.on('change', '#impExam', el => { IMP.exam = el.value; });
A.on('change', '#impAi', el => { IMP.ai = el.checked; });
A.on('change', '#impPub', el => { IMP.pub = el.checked; });
A.on('click', '[data-act="impstop"]', () => { IMP.stop = true; toast('L\'import s\'arrêtera après le sujet en cours', 'clock'); });
A.on('click', '[data-act="impgo"]', async () => {
  if(IMP.run) return; IMP.run = true; IMP.stop = false; A.refresh();
  for(const x of IMP.items.filter(y => y.on && !y.done)){
    if(IMP.stop) break;
    const st = t => { x.state = t; A.refresh(); };
    try{
      st('téléchargement…'); const r = await srcFetch('file', x.url); if(!r.ok) throw new Error(await srcErr(r));
      const buf = await r.arrayBuffer(); st('conversion des pages…');
      const pages = await A.pdfPages(buf, {max:16});
      const rec = {examen:IMP.exam, annee:x.annee, mat:x.mat, session:x.session, option:'', titre:x.title, pages, enonce:'', corrige:'', pub:IMP.pub, src:x.url};
      let id = await A.db.saveAnnale('', rec); if(!id){ IMP.stop = true; throw new Error('enregistrement impossible : import arrêté'); }
      x.aid = id;
      if(IMP.ai){
        st('transcription IA…'); const en = await aiAnnale('transcrire', rec); if(en.ok) rec.enonce = en.text;
        st('corrigé IA…'); const co = await aiAnnale('corrige', rec); if(co.ok) rec.corrige = co.text;
        await A.db.saveAnnale(id, rec);
        if(!en.ok || !co.ok) throw Object.assign(new Error('IA : ' + (en.error || co.error)), {saved:true});
      }
      x.done = true; x.on = false; x.state = IMP.ai ? 'importé + corrigé' : 'importé';
    }catch(e){ x.err = String(e.message || e).slice(0, 120); if(e.saved){ x.done = true; x.on = false; } }
    A.refresh();
  }
  IMP.run = false; AN = null; await loadAnnales(true); A.refresh();
  toast('Import terminé : relisez les corrigés puis publiez', 'check');
});
async function aiAnnale(kind, rec){
  const m = A.mat(rec.mat);
  return A.IA.stream({kind, ref:rec.mat || 'annale', ctx:{matiere:m ? m.titre : '', examen:rec.examen, annee:String(rec.annee || ''), titre:rec.titre, extrait:kind === 'corrige' ? rec.enonce : ''},
    images:(rec.pages || []).slice(0, 16).map(u => ({type:'image/jpeg', data:u.split(',')[1] || ''})),
    messages:[{role:'user', content:kind === 'corrige' ? `Rédige le corrigé détaillé de ce sujet (${rec.examen} ${rec.annee || ''}${m ? ', ' + m.titre : ''}).` : 'Transcris fidèlement l\'énoncé de ce sujet.'}]});
}

/* ---------- PDF → pages (pdf.js, fourni dans vendor/pdfjs) ---------- */
let pdfjs = null;
const loadPdfjs = () => pdfjs || (pdfjs = new Promise((res, rej) => { if(window.pdfjsLib) return res(window.pdfjsLib);
  const sc = document.createElement('script'); sc.src = 'vendor/pdfjs/pdf.min.js';
  sc.onload = () => { const L = window.pdfjsLib; if(!L) return rej(new Error('lecteur PDF indisponible')); L.GlobalWorkerOptions.workerSrc = 'vendor/pdfjs/pdf.worker.min.js'; res(L); };
  sc.onerror = () => { pdfjs = null; rej(new Error('lecteur PDF indisponible')); }; document.head.appendChild(sc); }));
A.pdfPages = async (buf, opt = {}) => {
  const L = await loadPdfjs(), doc = await L.getDocument({data:new Uint8Array(buf)}).promise, out = [], n = Math.min(doc.numPages, opt.max || 16), W = opt.width || 1300;
  for(let i = 1; i <= n; i++){ const page = await doc.getPage(i), v0 = page.getViewport({scale:1}), sc = Math.min(3, W/Math.max(v0.width, v0.height)*1.0), v = page.getViewport({scale:sc});
    const c = document.createElement('canvas'); c.width = Math.round(v.width); c.height = Math.round(v.height); const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
    await page.render({canvasContext:g, viewport:v}).promise; out.push(c.toDataURL('image/jpeg', opt.q || .7)); page.cleanup(); }
  await doc.destroy(); return out;
};
let ED = null;
const blankAnn = () => ({id:'', examen:'BTS Bâtiment', option:'', annee:new Date().getFullYear(), session:'', mat:'', titre:'', pages:[], enonce:'', corrige:'', pub:false});
A.page('admin/annale/:id', {space:'admin', title:() => ED && ED.titre ? ED.titre : 'Sujet d\'examen', crumb:'<a href="#/admin/annales">Annales d\'examens</a>', static:true, render(p){
  if(!ED || ED._for !== p.id){
    if(p.id === 'nouvelle'){ ED = Object.assign(blankAnn(), {_for:p.id}); }
    else { ED = {_for:p.id, loading:true}; A.db.annale(p.id).then(r => { ED = Object.assign(blankAnn(), r || {}, {_for:p.id}); A.render(); }); }
  }
  if(ED.loading) return `<div class="row sub">${ic('refresh')}Chargement…</div>`;
  const cat = A.catalog(true);
  return `<div class="g2" style="align-items:start">
   <div class="card stack">
    <div class="g2"><label class="fld"><span>Examen</span><select class="inp" id="anExam">${EXAMS.map(x => `<option ${ED.examen === x ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select></label>
     <label class="fld"><span>Année (session)</span><select class="inp" id="anYear">${YEARS.map(y => `<option ${+ED.annee === y ? 'selected' : ''}>${y}</option>`).join('')}</select></label></div>
    <div class="g2"><label class="fld"><span>Matière</span><select class="inp" id="anMat"><option value="">—</option>${cat.map(m => `<option value="${m.id}" ${ED.mat === m.id ? 'selected' : ''}>${esc(m.titre)}</option>`).join('')}</select></label>
     <label class="fld"><span>Session / épreuve</span><input class="inp" id="anSess" placeholder="Ex. : session normale, épreuve E4" value="${esc(ED.session)}"></label></div>
    <label class="fld"><span>Option / spécialité</span><input class="inp" id="anOpt" placeholder="Ex. : Bâtiment, Travaux publics" value="${esc(ED.option)}"></label>
    <label class="fld"><span>Titre</span><input class="inp" id="anTit" placeholder="Ex. : Résistance des matériaux et béton armé" value="${esc(ED.titre)}"></label>
    <div class="stack s8"><b class="small">Pages du sujet (PDF, photos ou scans, 16 pages au maximum)</b>
     <div class="phgrid" id="anPages">${ED.pages.map((src, i) => `<div class="phitem"><img src="${esc(src)}" alt="Page ${i + 1}"><button class="ibtn l" data-anpm="${i}" title="Monter" aria-label="Monter">${ic('back')}</button><button class="ibtn r" data-anpd="${i}" title="Retirer" aria-label="Retirer">${ic('x')}</button></div>`).join('')}
      ${ED.pages.length < 16 ? `<label class="phbtn" style="aspect-ratio:3/4">${ic('upload')}<span>Ajouter des pages (PDF ou photos)</span><input type="file" accept="image/*,application/pdf" multiple data-anup></label>` : ''}</div></div>
    ${ED.src ? `<p class="small">Source : <a href="${esc(ED.src)}" target="_blank" rel="noopener">${esc(ED.src)}</a></p>` : ''}
    <label class="check"><input type="checkbox" id="anPub" ${ED.pub ? 'checked' : ''}><span><b>Publié</b> : visible par les apprenants</span></label>
    <div class="row"><button class="btn b-pri" data-act="ansave">${ic('save')}Enregistrer</button>${ED.id ? `<a class="btn b-line" href="#/app/annale/${ED.id}">${ic('eye')}Voir comme un apprenant</a><button class="btn b-ghost" data-act="andel">${ic('trash')}Supprimer</button>` : ''}</div>
   </div>
   <div class="stack">
    <div class="card stack"><div class="row between"><b>Énoncé (texte)</b><button class="btn b-blue b-xs" data-anai="transcrire" ${ED.pages.length ? '' : 'disabled'}>${ic('spark')}Transcrire les photos</button></div>
     <textarea class="inp" id="anEn" rows="8" placeholder="Facultatif : texte de l'énoncé (permet la recherche et la lecture sur téléphone)">${esc(ED.enonce)}</textarea></div>
    <div class="card stack"><div class="row between"><b>Corrigé</b><button class="btn b-blue b-xs" data-anai="corrige" ${ED.pages.length || ED.enonce ? '' : 'disabled'}>${ic('spark')}Rédiger le corrigé avec l'IA</button></div>
     <textarea class="inp" id="anCo" rows="16" placeholder="Corrigé détaillé (Markdown : ## titres, $$ formules, tableaux…)">${esc(ED.corrige)}</textarea>
     <p class="sub">Le corrigé produit par l'IA est un brouillon : vérifiez chaque résultat avant de publier.</p></div>
   </div></div>`;
}});
const readEd = () => { if(!ED) return; ED.examen = A.val('anExam'); ED.annee = +A.val('anYear'); ED.mat = A.val('anMat'); ED.session = A.val('anSess'); ED.option = A.val('anOpt'); ED.titre = A.val('anTit'); ED.enonce = A.val('anEn'); ED.corrige = A.val('anCo'); const pb = $('#anPub'); ED.pub = !!(pb && pb.checked); };
A.on('change', '[data-anup]', async el => { readEd(); const files = [...el.files];
  for(const f of files){ if(ED.pages.length >= 16) break;
    try{ if(/pdf$/i.test(f.type) || /\.pdf$/i.test(f.name)){ toast('Conversion du PDF…', 'refresh'); const pg = await A.pdfPages(await f.arrayBuffer(), {max:16 - ED.pages.length}); ED.pages.push(...pg); if(!ED.titre) ED.titre = f.name.replace(/\.pdf$/i, '').replace(/[-_]+/g, ' '); }
      else { const im = await A.imgPrep(f, 1400, .72); ED.pages.push(im.url); } }
    catch(e){ toast('Fichier illisible : ' + f.name, 'x'); } }
  A.render(); });
A.on('click', '[data-anpd]', el => { readEd(); ED.pages.splice(+el.dataset.anpd, 1); A.render(); });
A.on('click', '[data-anpm]', el => { readEd(); const i = +el.dataset.anpm; if(i > 0){ const t = ED.pages[i-1]; ED.pages[i-1] = ED.pages[i]; ED.pages[i] = t; } A.render(); });
A.on('click', '[data-act="ansave"]', async () => { readEd(); if(!ED.titre.trim()) return toast('Donnez un titre au sujet', 'alert');
  const id = await A.db.saveAnnale(ED.id, ED); if(!id) return; ED.id = id; ED._for = id; AN = null; toast(ED.pub ? 'Sujet enregistré et publié' : 'Sujet enregistré (brouillon)', 'check'); location.replace('#/admin/annale/' + id); A.render(); });
A.on('click', '[data-act="andel"]', async () => { if(!ED || !ED.id) return; if(!confirm('Supprimer définitivement ce sujet ?')) return; if(await A.db.delAnnale(ED.id)){ AN = null; ED = null; toast('Sujet supprimé', 'trash'); A.go('#/admin/annales'); } });
A.on('click', '[data-anai]', async el => {
  readEd(); const kind = el.dataset.anai, out = $(kind === 'corrige' ? '#anCo' : '#anEn');
  if(!A.IA || !out) return;
  const m = A.mat(ED.mat);
  el.disabled = true; const old = out.value; out.value = '';
  const r = await A.IA.stream({kind, ref:ED.mat || 'annale', ctx:{matiere:m ? m.titre : '', examen:ED.examen, annee:String(ED.annee || ''), titre:ED.titre, extrait:kind === 'corrige' ? ED.enonce : ''},
    images:ED.pages.slice(0, 16).map(u => ({type:'image/jpeg', data:u.split(',')[1] || ''})),
    messages:[{role:'user', content:kind === 'corrige' ? `Rédige le corrigé détaillé de ce sujet (${ED.examen} ${ED.annee || ''}${m ? ', ' + m.titre : ''}).` : 'Transcris fidèlement l\'énoncé de ce sujet.'}]}, t => { out.value = t; });
  el.disabled = false;
  if(!r.ok){ out.value = old; toast(r.error || 'Erreur IA', 'x'); } else { if(kind === 'corrige') ED.corrige = out.value; else ED.enonce = out.value; toast('Texte prêt : relisez-le puis enregistrez', 'check'); }
});

/* ---------- préparation d'image (redimensionnement, rotation, JPEG) ---------- */
A.imgPrep = (file, max = 1568, q = .82, rot = 0) => new Promise((res, rej) => {
  const url = typeof file === 'string' ? file : URL.createObjectURL(file), img = new Image();
  img.onload = () => { try{
      const k = Math.min(1, max/Math.max(img.width, img.height)), w = Math.round(img.width*k), h = Math.round(img.height*k), r = ((rot % 360) + 360) % 360, sw = r % 180 ? h : w, sh = r % 180 ? w : h;
      const c = document.createElement('canvas'); c.width = sw; c.height = sh; const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, sw, sh);
      g.translate(sw/2, sh/2); g.rotate(r*Math.PI/180); g.drawImage(img, -w/2, -h/2, w, h);
      const out = c.toDataURL('image/jpeg', q); if(typeof file !== 'string') URL.revokeObjectURL(url); res({url:out, w:sw, h:sh});
    }catch(e){ rej(e); } };
  img.onerror = () => { if(typeof file !== 'string') URL.revokeObjectURL(url); rej(new Error('image illisible')); };
  img.src = url;
});
})();
