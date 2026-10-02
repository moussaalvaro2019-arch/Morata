/* =====================================================================
   Résoudre en photo : l'apprenant photographie un exercice (ou le tape),
   l'IA lit l'énoncé et rédige la résolution pas à pas.
   Quatre modes : résoudre, guider (indices sans la réponse), vérifier
   ma réponse, expliquer l'énoncé. Historique dans « Mes travaux ».
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast, S} = A;
const MAXP = 4;
const MODES = [
  ['resoudre', 'Résoudre', 'Correction complète, étape par étape', 'check'],
  ['guider', 'Me guider', 'Méthode et indices, sans donner la réponse', 'target'],
  ['verifier', 'Vérifier ma réponse', 'L\'IA contrôle votre résultat', 'flag'],
  ['expliquer', 'Expliquer l\'énoncé', 'Comprendre ce qui est demandé', 'book']
];
const NIVS = ['Collège / lycée', 'BT / Bac technique', 'BTS / DUT', 'Licence', 'Master / ingénieur'];
let PH = null, ctrl = null;
const fresh = () => ({pages:[], txt:'', mat:'', niv:'BTS / DUT', mode:'resoudre', prec:'', rep:'', out:'', msgs:[], id:'', busy:false, err:''});

A.workPill = k => k === 'dessin' ? '<span class="pill p-dark">Plan</span>' : k === 'photo' ? '<span class="pill p-or">Photo IA</span>' : '<span class="pill p-info">Métré</span>';

/* ---------- catalogue des solveurs envoyé à l'IA (pour proposer la résolution guidée) ---------- */
function solCatalog(){
  return A.SOL.L.map(s => {
    if(s.ia) return `- ${s.id} (${s.titre}) : ${s.ia}`;
    const f = (s.champs || []).filter(c => c.k).map(c => c.t === 'tab' ? `${c.k}: [{${c.cols.map(x => x.k + (x.u ? ' (' + x.u + ')' : '')).join(', ')}}]` : `${c.k}${c.u ? ' (' + c.u + ')' : ''}${c.t === 'sel' ? ' ∈ {' + c.o.map(o => o[0]).join('|') + '}' : ''}`);
    return `- ${s.id} (${s.titre}) : ${f.join(' ; ')}`;
  }).join('\n').slice(0, 9000);
}
function solBlock(t){
  const m = String(t || '').match(/```morata\s*([\s\S]*?)```/); if(!m) return null;
  try{ const j = JSON.parse(m[1].trim()); const def = A.SOL.get(j.solveur); if(!def) return null;
    const p = Object.assign(A.SOL.U.clone(def.ex), j.p || {}); if(A.SOL.run(def, p).err) return null; return {def, p}; }catch(_){ return null; }
}
const clean = t => String(t || '').replace(/```morata[\s\S]*?(```|$)/g, '').trim();

/* ---------- page ---------- */
A.page('app/resoudre', {space:'app', title:'Résoudre en photo', crumb:'Photographiez un exercice, l\'IA vous explique la solution', static:true,
 actions:() => PH && (PH.out || PH.busy) ? `<button class="btn b-line b-sm" data-act="phnew">${ic('plus')}Nouvel exercice</button>` : '',
 render(){
  const q = A.query();
  if(!PH) PH = fresh();
  if(q.get('h') && PH.id !== q.get('h')){ const w = S.works[q.get('h')]; if(w && w.kind === 'photo') PH = Object.assign(fresh(), w.data, {id:q.get('h'), pages:w.data.thumb ? [{url:w.data.thumb, thumb:w.data.thumb, old:true}] : []}); }
  if(q.get('m') && !PH.mat && A.mat(q.get('m'))) PH.mat = q.get('m');
  if(A.photoHandoff){ const h = A.photoHandoff; A.photoHandoff = null; PH = fresh(); PH.mat = h.mat || ''; PH.txt = h.txt || ''; PH.pages = (h.pages || []).map(u => ({url:u, thumb:u})); }
  const hs = A.ss.get('photoTxt'); if(hs){ A.ss.del('photoTxt'); try{ const h = JSON.parse(hs); PH = fresh(); PH.mat = h.mat || ''; PH.txt = h.txt || ''; }catch(_){} }
  return PH.out || PH.busy || PH.err ? resultHtml() : inputHtml();
 },
 unmount(){ if(ctrl){ ctrl.abort(); ctrl = null; } }
});

function inputHtml(){
  const cat = A.catalog();
  const hist = Object.entries(S.works || {}).filter(([, w]) => w.kind === 'photo').sort((a, b) => String(b[1].updated_at).localeCompare(String(a[1].updated_at))).slice(0, 12);
  return `<div class="g2" style="align-items:start">
  <div class="stack">
   <div class="card stack">
    <h3 style="margin:0">1. L'énoncé</h3>
    <div class="phbig">
     <label class="phbtn">${ic('camera')}<span>Prendre une photo</span><small class="sub">appareil photo du téléphone</small><input type="file" accept="image/*" capture="environment" data-phup></label>
     <label class="phbtn">${ic('image')}<span>Importer une image</span><small class="sub">galerie, capture d'écran, scan</small><input type="file" accept="image/*" multiple data-phup></label>
    </div>
    ${PH.pages.length ? `<div class="phgrid">${PH.pages.map((p, i) => `<div class="phitem"><img src="${esc(p.thumb || p.url)}" alt="Page ${i + 1}">${p.old ? '' : `<button class="ibtn l" data-phrot="${i}" title="Tourner" aria-label="Tourner la photo">${ic('rotate')}</button>`}<button class="ibtn r" data-phdel="${i}" title="Retirer" aria-label="Retirer la photo">${ic('x')}</button></div>`).join('')}</div>
      <p class="sub">${PH.pages.length}/${MAXP} photo${PH.pages.length > 1 ? 's' : ''}. Vérifiez que le texte est net et droit (bouton ${ic('rotate')} pour tourner).</p>` : `<p class="sub">${ic('info')} Cadrez l'exercice entier, bien éclairé, sans reflet. Vous pouvez ajouter jusqu'à ${MAXP} photos (plusieurs pages).</p>`}
    <label class="fld"><span>Ou tapez l'énoncé (ou complétez-le)</span><textarea class="inp" id="phTxt" rows="4" placeholder="Ex. : Une poutre de 6 m sur deux appuis supporte une charge de 20 kN/m. Calculer les réactions et le moment maximal.">${esc(PH.txt)}</textarea></label>
   </div>
   <div class="card stack">
    <h3 style="margin:0">2. Ce que vous voulez</h3>
    <div class="phmodes">${MODES.map(([k, n, d, icn]) => `<button type="button" class="lvcard ${PH.mode === k ? 'on' : ''}" style="--lc:var(--or);--lb:var(--or3)" data-phmode="${k}"><b>${ic(icn)} ${n}</b><span class="sub">${d}</span></button>`).join('')}</div>
    ${PH.mode === 'verifier' ? `<label class="fld"><span>Votre réponse (résultats, démarche…)</span><textarea class="inp" id="phRep" rows="3" placeholder="Ex. : RA = 60 kN, RB = 60 kN, Mmax = 90 kN·m">${esc(PH.rep)}</textarea></label>` : ''}
    <div class="g2"><label class="fld"><span>Matière</span><select class="inp" id="phMat"><option value="">L'IA la reconnaît</option>${cat.map(m => `<option value="${m.id}" ${PH.mat === m.id ? 'selected' : ''}>${esc(m.titre)}</option>`).join('')}</select></label>
     <label class="fld"><span>Votre niveau</span><select class="inp" id="phNiv">${NIVS.map(n => `<option ${PH.niv === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
    <label class="fld"><span>Précision (facultatif)</span><input class="inp" id="phPrec" placeholder="Ex. : seulement la question 2 ; utiliser le BAEL" value="${esc(PH.prec)}"></label>
    <button class="btn b-pri b-lg" data-act="phgo">${ic('spark')}${MODES.find(m => m[0] === PH.mode)[1]} avec l'IA</button>
    <p class="sub">${A.cfg().iaQuota ? `Compte pour une question (limite : ${A.cfg().iaQuota} par jour). ` : ''}L'IA peut se tromper : vérifiez toujours les résultats importants.</p>
   </div>
  </div>
  <div class="stack">
   <div class="card stack"><h3 style="margin:0">Comment ça marche</h3>
    <div class="timeline">${[['camera', 'Photographiez', 'Un exercice de cours, de TD, d\'examen (BTS, licence…), manuscrit ou imprimé.'], ['spark', 'L\'IA lit et résout', 'Elle recopie l\'énoncé, liste les données, choisit la méthode et détaille chaque calcul avec les unités.'], ['chat', 'Posez vos questions', 'Une étape pas claire ? Demandez une explication, un autre exemple ou une vérification.'], ['target', 'Entraînez-vous', 'Pour les exercices types (poutres, nivellement, semelles…), refaites-le pas à pas dans un solveur guidé.']].map(([icn, t, d], i) => `<div class="tstep"><span class="n">${ic(icn)}</span><span class="c"><b>${t}</b><span class="sub">${d}</span></span></div>`).join('')}</div></div>
   <div class="card stack"><div class="row between"><h3 style="margin:0">Mes exercices résolus</h3><span class="sub">${hist.length}</span></div>
    ${hist.length ? `<div class="exlist">${hist.map(([id, w]) => `<a class="exrow" href="#/app/resoudre?h=${id}">${w.data.thumb ? `<img src="${esc(w.data.thumb)}" alt="" style="width:44px;height:44px;object-fit:cover;border-radius:8px">` : `<span class="tag">${ic('doc')}</span>`}<span style="min-width:0"><span class="ti">${esc(w.data.name || 'Exercice')}</span><div class="sub">${esc((A.mat(w.data.mat) || {}).titre || '')} · ${A.ago(w.updated_at)}</div></span>${ic('chev')}</a>`).join('')}</div>` : '<p class="sub">Vos résolutions seront enregistrées ici.</p>'}
    <a class="btn b-line" style="white-space:normal" href="#/app/exercices">${ic('target')}Exercices et solveurs guidés</a></div>
  </div></div>`;
}
function resultHtml(){
  const sb = !PH.busy && solBlock(PH.out);
  const m = A.mat(PH.mat), md = MODES.find(x => x[0] === PH.mode) || MODES[0];
  return `<div class="reader" style="max-width:980px"><div class="stack">
   <div class="card stack s8"><div class="row between"><div class="row" style="gap:8px"><span class="pill p-or">${ic(md[3])}${md[1]}</span>${m ? `<span class="pill p-mute">${esc(m.titre)}</span>` : ''}<span class="pill p-mute">${esc(PH.niv)}</span></div>${PH.busy ? `<button class="btn b-line b-sm" data-act="phstop">${ic('x')}Arrêter</button>` : ''}</div>
    ${PH.pages.length ? `<div class="phgrid">${PH.pages.map((p, i) => `<div class="phitem" style="aspect-ratio:auto;max-height:200px"><img src="${esc(p.thumb || p.url)}" alt="Page ${i + 1}"></div>`).join('')}</div>` : ''}
    ${PH.txt ? `<p class="small" style="white-space:pre-wrap">${esc(PH.txt.slice(0, 600))}</p>` : ''}</div>
   ${PH.err && !PH.out ? `<div class="note bad">${ic('alert')}<span>${esc(PH.err)}</span></div><div class="row"><button class="btn b-pri" data-act="phback">${ic('back')}Revenir à l'énoncé</button></div>` : `<div class="card"><div id="phOut" class="md">${PH.out ? A.mdHtml(clean(PH.out), {inner:true}) : `<div class="row sub">${ic('spark')}L'IA lit l'exercice et prépare la résolution <span class="typing"><i></i><i></i><i></i></span></div>`}</div>
    ${PH.err ? `<div class="note bad" style="margin-top:10px">${ic('alert')}<span>${esc(PH.err)}</span></div>` : ''}</div>`}
   ${sb ? `<div class="note ok">${ic('target')}<div class="stack s8"><span>Cet exercice correspond au solveur guidé <b>${esc(sb.def.titre)}</b> : refaites-le étape par étape, la plateforme vérifie vos réponses.</span><a class="btn b-pri b-sm" style="justify-self:start" href="${A.SOL.link(sb.def.id, sb.p, 'guide')}">${ic('target')}Refaire pas à pas</a></div></div>` : ''}
   <div id="phMsgs" class="stack">${PH.msgs.map(x => x.role === 'user' ? `<div class="msg u" style="justify-self:end">${esc(x.content)}</div>` : `<div class="card"><span class="who2">${ic('spark')}Assistant</span>${A.mdHtml(clean(x.content), {inner:true})}</div>`).join('')}</div>
   ${PH.busy || !PH.out ? '' : `<form class="card stack s8" id="fPhAsk"><b class="small">Une question sur cette correction ?</b><div class="sugg">${['Je n\'ai pas compris la première étape', 'Explique plus simplement', 'Donne-moi un exercice du même type', 'Quelles erreurs éviter ?'].map(s => `<button type="button" data-phsugg="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <div class="row nw"><input class="inp" id="phAsk" placeholder="Ex. : pourquoi le moment est-il maximal au milieu ?" autocomplete="off"><button class="btn b-blue" aria-label="Envoyer">${ic('send')}</button></div></form>`}
   <div class="row"><button class="btn b-line" data-act="phnew">${ic('camera')}Nouvel exercice</button>${PH.mat ? `<a class="btn b-ghost" href="#/app/exercices/${PH.mat}">${ic('target')}Exercices de la matière</a>` : ''}</div>
  </div></div>`;
}

/* ---------- photos ---------- */
A.on('change', '[data-phup]', async el => {
  readForm(); const files = [...el.files]; el.value = '';
  for(const f of files){ if(PH.pages.filter(p => !p.old).length >= MAXP){ toast(`${MAXP} photos au maximum`, 'alert'); break; }
    try{ const big = await A.imgPrep(f, 1568, .85), th = await A.imgPrep(big.url, 360, .7); PH.pages.push({url:big.url, thumb:th.url, rot:0, src:big.url}); }catch(e){ toast('Image illisible : ' + (f.name || ''), 'x'); } }
  PH.pages = PH.pages.filter(p => !p.old); A.render();
});
A.on('click', '[data-phdel]', el => { readForm(); PH.pages.splice(+el.dataset.phdel, 1); A.render(); });
A.on('click', '[data-phrot]', async el => { readForm(); const p = PH.pages[+el.dataset.phrot]; if(!p) return; p.rot = ((p.rot || 0) + 90) % 360;
  const big = await A.imgPrep(p.src, 1568, .85, p.rot), th = await A.imgPrep(big.url, 360, .7); p.url = big.url; p.thumb = th.url; A.render(); });
A.on('click', '[data-phmode]', el => { readForm(); PH.mode = el.dataset.phmode; A.render(); });
function readForm(){ if(!PH) return; const g = id => { const e = document.getElementById(id); return e ? e.value : null; };
  ['phTxt:txt', 'phRep:rep', 'phMat:mat', 'phNiv:niv', 'phPrec:prec'].forEach(x => { const [id, k] = x.split(':'); const v = g(id); if(v != null) PH[k] = v; }); }

/* ---------- résolution ---------- */
function firstMessage(){
  const m = A.mat(PH.mat);
  return [`Mode demandé : ${(MODES.find(x => x[0] === PH.mode) || MODES[0])[1].toUpperCase()}.`,
    m ? `Matière indiquée : ${m.titre}.` : 'Matière : à reconnaître d\'après l\'énoncé.',
    `Niveau de l'apprenant : ${PH.niv}.`,
    PH.pages.length ? `L'énoncé est sur ${PH.pages.length > 1 ? 'les ' + PH.pages.length + ' photos jointes (dans l\'ordre)' : 'la photo jointe'}.` : '',
    PH.txt.trim() ? `Énoncé tapé par l'apprenant :\n${PH.txt.trim()}` : '',
    PH.prec.trim() ? `Précision de l'apprenant : ${PH.prec.trim()}` : '',
    PH.mode === 'verifier' && PH.rep.trim() ? `Réponse de l'apprenant à vérifier :\n${PH.rep.trim()}` : ''].filter(Boolean).join('\n');
}
async function ask(extra){
  if(ctrl){ toast('Patientez, une réponse est en cours', 'clock'); return; }
  const imgs = PH.pages.filter(p => !p.old).map(p => ({type:'image/jpeg', data:p.url.split(',')[1] || ''}));
  const m = A.mat(PH.mat);
  const history = [{role:'user', content:firstMessage()}];
  if(PH.out) history.push({role:'assistant', content:clean(PH.out)});
  PH.msgs.forEach(x => { if(x.content) history.push({role:x.role, content:clean(x.content)}); });
  let target;
  if(extra){ PH.msgs.push({role:'user', content:extra}); target = {role:'assistant', content:''}; PH.msgs.push(target); history.push({role:'user', content:extra}); }
  PH.busy = true; PH.err = ''; if(!extra) PH.out = '';
  A.render();
  ctrl = new AbortController();
  const r = await A.IA.stream({kind:'photo', ref:PH.mat || 'photo', ctx:{matiere:m ? m.titre : '', niveau:PH.niv, mode:PH.mode, solveurs:solCatalog()}, images:imgs, messages:history}, t => {
    if(extra) target.content = t; else PH.out = t;
    const box = extra ? null : $('#phOut'); if(box) box.innerHTML = A.mdHtml(clean(t), {inner:true});
    else { const ms = $('#phMsgs'); if(ms && extra){ const last = ms.lastElementChild; if(last && !last.classList.contains('msg')) last.innerHTML = `<span class="who2">${ic('spark')}Assistant</span>` + A.mdHtml(clean(t), {inner:true}); else A.render(); } }
  }, ctrl.signal);
  ctrl = null; PH.busy = false;
  if(!r.ok && !r.aborted){ if(extra){ PH.msgs.pop(); PH.msgs.pop(); toast(r.error, 'x'); } else PH.err = r.error; }
  if(r.ok) await save();
  A.render();
}
async function save(){
  if(!S.me || !PH.out) return;
  const name = (() => { const t = clean(PH.out), mm = t.match(/##\s*[ÉE]nonc[ée][^\n]*\n+([^\n]{8,})/i); const src = (mm ? mm[1] : PH.txt || t).replace(/[#*>$`|]/g, '').trim(); return src.slice(0, 70) + (src.length > 70 ? '…' : ''); })() || 'Exercice du ' + A.fd(Date.now());
  const data = {name, mat:PH.mat, niv:PH.niv, mode:PH.mode, txt:PH.txt.slice(0, 2000), prec:PH.prec, rep:PH.rep, out:PH.out.slice(0, 40000), msgs:PH.msgs.slice(-10).map(x => ({role:x.role, content:String(x.content).slice(0, 12000)})), thumb:(PH.pages[0] && PH.pages[0].thumb) || ''};
  try{ PH.id = await A.db.saveWork(PH.id || '', 'photo', data); }catch(_){}
}
A.on('click', '[data-act="phgo"]', () => { readForm();
  if(!PH.pages.length && !PH.txt.trim()) return toast('Ajoutez une photo ou tapez l\'énoncé', 'alert');
  if(PH.mode === 'verifier' && !PH.rep.trim()) return toast('Indiquez votre réponse à vérifier', 'alert');
  PH.msgs = []; PH.id = ''; ask(); window.scrollTo({top:0, behavior:'smooth'}); });
A.on('submit', '#fPhAsk', () => { const v = A.val('phAsk').trim(); if(v) ask(v); });
A.on('click', '[data-phsugg]', el => ask(el.dataset.phsugg));
A.on('click', '[data-act="phstop"]', () => { if(ctrl) ctrl.abort(); });
A.on('click', '[data-act="phback"]', () => { PH.err = ''; PH.out = ''; A.render(); });
A.on('click', '[data-act="phnew"]', () => { if(ctrl) ctrl.abort(); PH = fresh(); if(location.hash !== '#/app/resoudre') A.go('#/app/resoudre'); else A.render(); });

/* ---------- fenêtre de consultation (espace PDG) ---------- */
A.photoWin = (d, who) => A.win({title:d.name || 'Exercice résolu en photo', wide:true, body:`<div class="stack">
  <div class="row" style="gap:8px">${who ? `<span class="pill p-mute">${ic('user')}${esc(who)}</span>` : ''}${d.mat ? `<span class="pill p-mute">${esc((A.mat(d.mat) || {}).titre || '')}</span>` : ''}<span class="pill p-or">${esc((MODES.find(x => x[0] === d.mode) || MODES[0])[1])}</span></div>
  ${d.thumb ? `<img src="${esc(d.thumb)}" alt="Photo de l'énoncé" style="max-width:260px;border-radius:10px;border:1px solid var(--line)">` : ''}
  ${d.txt ? `<p class="small" style="white-space:pre-wrap">${esc(d.txt)}</p>` : ''}
  <div class="md">${A.mdHtml(clean(d.out), {inner:true})}</div>
  ${(d.msgs || []).map(x => x.role === 'user' ? `<div class="msg u" style="justify-self:end">${esc(x.content)}</div>` : `<div class="card">${A.mdHtml(clean(x.content), {inner:true})}</div>`).join('')}</div>`,
  foot:`<button class="btn b-line" data-act="closewin">Fermer</button>`});
})();
