/* =====================================================================
   DICTIONNAIRES : français (définitions) et anglais ↔ français
   Données chargées à la demande : data/dico-fr.js (A.DICO.fr) et data/dico-en.js (A.DICO.en)
   Recherche sans accents, fiches, prononciation (synthèse vocale du navigateur),
   mot du jour, quiz de vocabulaire, et l'assistant IA pour un mot absent.
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast} = A;
A.DICO = A.DICO || {};
const DOM = {cour:'Courant', pro:'Écrit professionnel', btp:'Bâtiment'};
const LANGS = {fr:'Français', en:'Anglais ↔ Français', quiz:'Quiz de vocabulaire'};
const D = {l:'fr', q:'', dom:'', sens:'en', lettre:'', sel:null, quiz:null, err:'', hash:''};
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[’']/g, ' ').replace(/\s+/g, ' ').trim();
const IDX = {};
const pending = {};

/* ---------- chargement et index ---------- */
function charger(l){
  if(IDX[l]) return Promise.resolve(IDX[l]);
  if(pending[l]) return pending[l];
  return pending[l] = new Promise((res, rej) => {
    const fin = () => { const raw = A.DICO[l]; if(!Array.isArray(raw) || !raw.length) return rej(new Error('dictionnaire vide')); res(IDX[l] = indexer(l, raw)); };
    if(A.DICO[l]) return fin();
    const s = document.createElement('script'); s.src = 'data/dico-' + l + '.js';
    s.onload = fin; s.onerror = () => { pending[l] = null; rej(new Error('dictionnaire indisponible (connexion ?)')); };
    document.head.appendChild(s);
  });
}
function indexer(l, raw){
  const L = raw.map((r, i) => l === 'fr'
    ? {i, m:r[0], n:r[1], d:r[2], x:r[3] || '', s:r[4] || '', dom:r[5] || 'cour', en:r[6] || ''}
    : {i, m:r[0], n:r[1], t:r[2], x:r[3] || '', dom:r[4] || 'cour'});
  L.forEach(e => { e.k = norm(e.m); e.kt = norm(l === 'fr' ? e.s : e.t); e.mots = e.kt.split(/[^a-z0-9-]+/).filter(Boolean); });
  L.sort((a, b) => a.k.localeCompare(b.k));
  L.forEach((e, j) => e.j = j);
  return L;
}
/* exact → commence par → contient ; puis dans les synonymes (fr) ou dans la traduction (fr → en) */
function chercher(L, q, inverse){
  const nq = norm(q); if(!nq) return [];
  const a = [], b = [], c = [], d = [];
  for(const e of L){
    if(D.dom && e.dom !== D.dom) continue;
    if(inverse){ if(e.mots.includes(nq)) a.push(e); else if(e.mots.some(w => w.startsWith(nq))) b.push(e); else if(e.kt.includes(nq)) c.push(e); continue; }
    if(e.k === nq) a.push(e); else if(e.k.startsWith(nq)) b.push(e); else if(e.k.includes(nq)) c.push(e); else if(e.kt && e.mots.some(w => w.startsWith(nq))) d.push(e);
  }
  return a.concat(b, c, d);
}
const jour = L => L[Math.floor(Date.now() / 864e5) % L.length];
const parler = (txt, lang) => {
  if(!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined'){ toast('Lecture à voix haute non disponible sur cet appareil', 'x'); return; }
  try{ speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(txt); u.lang = lang; u.rate = .9;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase())); if(v) u.voice = v;
    speechSynthesis.speak(u); }catch(_){ toast('Lecture à voix haute impossible', 'x'); }
};
const iaLien = (l, mot) => '#/app/ia?q=' + encodeURIComponent(l === 'en'
  ? `Que signifie le mot anglais « ${mot} » ? Donne sa traduction en français, sa nature, sa prononciation et deux exemples d'emploi (dont un dans le bâtiment).`
  : `Que signifie le mot « ${mot} » ? Donne sa nature, sa définition, deux exemples, ses synonymes et sa traduction en anglais.`);

/* ---------- affichage ---------- */
const pillDom = dom => `<span class="pill ${dom === 'btp' ? 'p-or' : dom === 'pro' ? 'p-info' : 'p-mute'}">${esc(DOM[dom] || dom)}</span>`;
function ligne(l, e){
  const sous = l === 'fr' ? e.d : e.t;
  return `<button class="dl ${D.sel && D.sel.l === l && D.sel.j === e.j ? 'on' : ''}" data-dw="${l}:${e.j}"><b>${esc(e.m)}</b> <i>${esc(e.n)}</i><span>${esc(sous.length > 90 ? sous.slice(0, 88) + '…' : sous)}</span></button>`;
}
function fiche(l, e){
  if(!e) return '';
  const say = l === 'en'
    ? `<button class="btn b-line b-sm" data-dsay="en-GB" data-txt="${esc(e.m)}">${ic('sound')}Écouter (GB)</button><button class="btn b-line b-sm" data-dsay="en-US" data-txt="${esc(e.m)}">${ic('sound')}Écouter (US)</button>`
    : `<button class="btn b-line b-sm" data-dsay="fr-FR" data-txt="${esc(e.m)}">${ic('sound')}Écouter</button>`;
  const syn = l === 'fr' && e.s ? `<div><span class="kick">Synonymes</span><div class="row" style="flex-wrap:wrap;gap:6px;margin-top:6px">${e.s.split(/\s*,\s*/).filter(Boolean).map(w => `<button class="tab" data-dgo="fr:${esc(w)}">${esc(w)}</button>`).join('')}</div></div>` : '';
  const pont = l === 'fr' && e.en ? `<div><span class="kick">En anglais</span><div class="row" style="flex-wrap:wrap;gap:6px;margin-top:6px">${e.en.split(/\s*[,;]\s*/).filter(Boolean).map(w => `<button class="tab" data-dgo="en:${esc(w)}">${ic('globe')}${esc(w)}</button>`).join('')}</div></div>`
    : l === 'en' ? (() => { const fr = (e.t.split(/[;,(]/)[0] || '').trim(); return fr ? `<div><span class="kick">Définition en français</span><div class="row" style="margin-top:6px"><button class="tab" data-dgo="fr:${esc(fr)}">${ic('book')}${esc(fr)}</button></div></div>` : ''; })() : '';
  return `<div class="card stack dfiche" id="dFiche">
   <div class="row between" style="align-items:flex-start"><div><h2 style="margin:0;font-size:26px">${esc(e.m)}</h2><div class="row" style="gap:6px;margin-top:6px"><span class="pill p-mute">${esc(e.n)}</span>${pillDom(e.dom)}</div></div><button class="ibtn" data-dclose aria-label="Fermer">${ic('x')}</button></div>
   ${l === 'fr' ? `<p style="margin:0;font-size:16px;line-height:1.6">${esc(e.d)}</p>` : `<p style="margin:0;font-size:18px"><b>${esc(e.t)}</b></p>`}
   ${e.x ? `<div class="dex">${ic('chat')}<span>${esc(e.x)}</span></div>` : ''}
   ${syn}${pont}
   <div class="row" style="flex-wrap:wrap;gap:6px">${say}<button class="btn b-line b-sm" data-dcopy="${esc(e.m + ' : ' + (l === 'fr' ? e.d : e.t))}">${ic('copy')}Copier</button></div>
  </div>`;
}
function liste(l, L){
  const inverse = l === 'en' && D.sens === 'fr';
  let res, titre;
  if(D.q.trim()){ res = chercher(L, D.q, inverse); titre = `${res.length} résultat${res.length > 1 ? 's' : ''}`; }
  else { const let0 = D.lettre || 'a'; res = L.filter(e => (!D.dom || e.dom === D.dom) && e.k.startsWith(let0)); titre = `Lettre ${let0.toUpperCase()} · ${res.length} mot${res.length > 1 ? 's' : ''}`; }
  const lettres = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(c => L.some(e => e.k.startsWith(c)));
  const vide = D.q.trim() && !res.length ? `<div class="stack" style="text-align:center;justify-items:center;padding:14px">${A.empty('search', `« ${esc(D.q)} » n'est pas encore dans le dictionnaire de la plateforme.`)}
     <a class="btn b-blue" href="${iaLien(inverse ? 'fr' : l, D.q.trim())}">${ic('spark')}Demander à l'assistant IA</a><span class="sub">L'assistant donne la définition, des exemples et la traduction.</span></div>` : '';
  return `<div class="card stack" style="padding:12px">
    ${D.q.trim() ? '' : `<div class="dlet">${lettres.map(c => `<button class="${(D.lettre || 'a') === c ? 'on' : ''}" data-dlettre="${c}">${c.toUpperCase()}</button>`).join('')}</div>`}
    <div class="row between"><b class="small faint mono" style="letter-spacing:.08em">${esc(titre.toUpperCase())}</b>${res.length > 80 ? '<span class="sub">80 premiers</span>' : ''}</div>
    ${vide || `<div class="dlist">${res.slice(0, 80).map(e => ligne(l, e)).join('')}</div>`}</div>`;
}
function quizHtml(){
  const Q = D.quiz;
  if(!Q) return `<div class="card stack" style="max-width:640px">
    <h3 style="margin:0">Quiz de vocabulaire anglais</h3>
    <p class="sub" style="margin:0">10 questions tirées du dictionnaire : trouvez la bonne traduction. Une nouvelle série à chaque fois.</p>
    <div class="tabs">${[['en', 'Anglais → Français'], ['fr', 'Français → Anglais']].map(([k, n]) => `<button class="tab ${D.sens === k ? 'on' : ''}" data-dsens="${k}">${n}</button>`).join('')}</div>
    <div class="tabs">${[['', 'Tous les mots']].concat(Object.entries(DOM)).map(([k, n]) => `<button class="tab ${D.dom === k ? 'on' : ''}" data-ddom="${k}">${esc(n)}</button>`).join('')}</div>
    <button class="btn b-pri" style="justify-self:start" data-dquiz>${ic('play')}Commencer</button></div>`;
  if(Q.i >= Q.qs.length){
    const pct = Math.round(Q.ok / Q.qs.length * 100);
    return `<div class="card stack" style="max-width:640px;text-align:center;justify-items:center">
      ${A.ring ? A.ring(pct) : ''}<h3 style="margin:0">${Q.ok} / ${Q.qs.length} bonnes réponses</h3>
      <p class="sub" style="margin:0">${pct >= 80 ? 'Excellent !' : pct >= 50 ? 'Bien : revoyez les mots manqués ci-dessous.' : 'Courage : relisez les mots ci-dessous puis recommencez.'}</p>
      ${Q.rates.length ? `<div class="stack s8" style="width:100%;text-align:left">${Q.rates.map(e => `<button class="dl" data-dw="en:${e.j}"><b>${esc(e.m)}</b> <i>${esc(e.n)}</i><span>${esc(e.t)}</span></button>`).join('')}</div>` : ''}
      <div class="row"><button class="btn b-pri" data-dquiz>${ic('refresh')}Nouvelle série</button><button class="btn b-line" data-dqfin>Réglages du quiz</button></div></div>`;
  }
  const q = Q.qs[Q.i], fr = D.sens === 'fr';
  return `<div class="card stack" style="max-width:640px">
    <div class="row between"><span class="kick">Question ${Q.i + 1} / ${Q.qs.length}</span><span class="pill p-mute">${Q.ok} bonne${Q.ok > 1 ? 's' : ''}</span></div>
    <h2 style="margin:0">${esc(fr ? q.e.t : q.e.m)}</h2>${fr ? '' : `<button class="btn b-line b-sm" style="justify-self:start" data-dsay="en-GB" data-txt="${esc(q.e.m)}">${ic('sound')}Écouter</button>`}
    <div class="stack s8">${q.o.map((o, k) => { const st = Q.rep == null ? '' : o === q.e ? 'ok' : k === Q.rep ? 'ko' : '';
      return `<button class="dqo ${st}" data-drep="${k}" ${Q.rep != null ? 'disabled' : ''}>${esc(fr ? o.m : o.t)}</button>`; }).join('')}</div>
    ${Q.rep != null ? `<div class="dex">${ic(q.o[Q.rep] === q.e ? 'check' : 'info')}<span><b>${esc(q.e.m)}</b> : ${esc(q.e.t)}${q.e.x ? ' — ' + esc(q.e.x) : ''}</span></div><button class="btn b-pri" style="justify-self:start" data-dnext>${Q.i + 1 < Q.qs.length ? 'Question suivante' : 'Voir le résultat'} ${ic('arrow')}</button>` : ''}
  </div>`;
}
function nouveauQuiz(){
  const L = (IDX.en || []).filter(e => !D.dom || e.dom === D.dom);
  if(L.length < 8){ toast('Pas assez de mots dans cette catégorie', 'x'); return; }
  const pick = n => { const s = new Set(); while(s.size < n) s.add(L[Math.floor(Math.random() * L.length)]); return [...s]; };
  const qs = pick(10).map(e => { const autres = pick(12).filter(o => o !== e && o.t !== e.t && o.m !== e.m).slice(0, 3); const o = autres.concat(e).sort(() => Math.random() - .5); return {e, o}; });
  D.quiz = {qs, i:0, ok:0, rep:null, rates:[]};
}

A.page('app/dictionnaire', {space:'app', free:true, title:'Dictionnaires', crumb:'Français · Anglais ↔ Français', render(){
  if(location.hash !== D.hash){ D.hash = location.hash; const qp = A.query(), l = qp.get('l'), q = qp.get('q');
    if(l && LANGS[l]){ D.l = l; D.sel = null; } if(q != null){ D.q = q; D.sel = null; } }
  const l = D.l === 'quiz' ? 'en' : D.l;
  const L = IDX[l];
  if(!L && !D.err) charger(l).then(() => { if(D.l === 'quiz' ? IDX.en : IDX[D.l]) { if(D.q && !D.sel){ const r = chercher(IDX[l], D.q, l === 'en' && D.sens === 'fr'); if(r.length === 1 || (r[0] && norm(r[0].m) === norm(D.q))) D.sel = {l, j:r[0].j}; } A.refresh(); } }).catch(e => { D.err = e.message; A.refresh(); });
  const onglets = `<div class="tabs">${Object.entries(LANGS).map(([k, n]) => `<button class="tab ${D.l === k ? 'on' : ''}" data-dl="${k}">${ic(k === 'quiz' ? 'target' : k === 'en' ? 'globe' : 'book')}${n}${IDX[k] ? ` <span class="cnt">${IDX[k].length}</span>` : ''}</button>`).join('')}</div>`;
  if(D.err) return `${onglets}<div class="note bad" style="margin-top:12px">${ic('alert')}<span>Le dictionnaire n'a pas pu être chargé : ${esc(D.err)}. <button class="btn b-xs b-line" data-dretry>Réessayer</button></span></div>`;
  if(!L) return `${onglets}<div class="card" style="margin-top:12px"><div class="row">${ic('refresh')}Chargement du dictionnaire…</div></div>`;
  if(D.l === 'quiz') return `<div class="stack">${onglets}${quizHtml()}</div>`;
  const sel = D.sel && D.sel.l === l ? L[D.sel.j] : null, mj = jour(L);
  const sens = l === 'en' ? `<div class="tabs">${[['en', 'Anglais → Français'], ['fr', 'Français → Anglais']].map(([k, n]) => `<button class="tab ${D.sens === k ? 'on' : ''}" data-dsens="${k}">${n}</button>`).join('')}</div>` : '';
  const ph = l === 'fr' ? 'Chercher un mot français (sans accents si vous voulez)…' : D.sens === 'fr' ? 'Tapez un mot français : poutre, devis, casque…' : 'Type an English word: beam, quotation, helmet…';
  return `<div class="stack">
   ${onglets}
   <div class="toolbar"><label class="search" style="max-width:520px">${ic('search')}<input id="dQ" placeholder="${esc(ph)}" value="${esc(D.q)}" autocomplete="off" autocapitalize="off" spellcheck="false"></label>${sens}</div>
   <div class="tabs">${[['', 'Tous']].concat(Object.entries(DOM)).map(([k, n]) => `<button class="tab ${D.dom === k ? 'on' : ''}" data-ddom="${k}">${esc(n)}</button>`).join('')}</div>
   <div class="dico">
    <div class="stack" style="min-width:0">${liste(l, L)}</div>
    <div class="stack" style="min-width:0">${sel ? fiche(l, sel) : `<div class="card stack dfiche"><span class="kick">${ic('star')}Mot du jour</span><h2 style="margin:0">${esc(mj.m)}</h2><div class="row" style="gap:6px"><span class="pill p-mute">${esc(mj.n)}</span>${pillDom(mj.dom)}</div>
      <p style="margin:0">${esc(l === 'fr' ? mj.d : mj.t)}</p>${mj.x ? `<div class="dex">${ic('chat')}<span>${esc(mj.x)}</span></div>` : ''}<button class="btn b-line b-sm" style="justify-self:start" data-dw="${l}:${mj.j}">Ouvrir la fiche</button></div>`}
     <div class="note">${ic('info')}<span>${l === 'fr' ? 'Vocabulaire courant, de l\'écrit professionnel et du bâtiment, avec exemples et synonymes. Un mot manque ? L\'assistant IA vous le définit.' : 'Anglais courant, professionnel et technique du bâtiment, avec exemples et prononciation britannique ou américaine. Entraînez-vous avec le quiz de vocabulaire.'}</span></div></div>
   </div></div>`;
}});

A.on('click', '[data-dl]', el => { D.l = el.dataset.dl; D.sel = null; D.err = ''; if(D.l !== 'quiz') D.quiz = null; A.refresh(); });
A.on('input', '#dQ', el => { D.q = el.value; D.sel = null; A.refresh(); });
A.on('click', '[data-ddom]', el => { D.dom = el.dataset.ddom; D.sel = null; A.refresh(); });
A.on('click', '[data-dsens]', el => { D.sens = el.dataset.dsens; D.sel = null; A.refresh(); });
A.on('click', '[data-dlettre]', el => { D.lettre = el.dataset.dlettre; D.sel = null; A.refresh(); });
A.on('click', '[data-dclose]', () => { D.sel = null; A.refresh(); });
A.on('click', '[data-dretry]', () => { D.err = ''; A.refresh(); });
A.on('click', '[data-dw]', el => { const [l, j] = el.dataset.dw.split(':'); if(D.l === 'quiz' && l === 'en'){ D.l = 'en'; D.sens = 'en'; } D.sel = {l, j:+j}; A.refresh();
  if(window.innerWidth < 860) setTimeout(() => { const f = $('#dFiche'); if(f) f.scrollIntoView({behavior:'smooth', block:'start'}); }, 30); });
A.on('click', '[data-dgo]', el => { const i = el.dataset.dgo.indexOf(':'), l = el.dataset.dgo.slice(0, i), mot = el.dataset.dgo.slice(i + 1);
  D.l = l; D.sens = 'en'; D.dom = ''; D.q = mot; D.sel = null; D.err = '';
  const go = () => { const r = chercher(IDX[l], mot, false); if(r[0]) D.sel = {l, j:r[0].j}; A.refresh(); };
  if(IDX[l]) go(); else { A.refresh(); charger(l).then(go).catch(e => { D.err = e.message; A.refresh(); }); } });
A.on('click', '[data-dsay]', el => parler(el.dataset.txt, el.dataset.dsay));
A.on('click', '[data-dcopy]', el => A.copy(el.dataset.dcopy));
A.on('click', '[data-dquiz]', () => { const go = () => { nouveauQuiz(); A.refresh(); }; if(IDX.en) go(); else charger('en').then(go).catch(e => toast(e.message, 'x')); });
A.on('click', '[data-dqfin]', () => { D.quiz = null; A.refresh(); });
A.on('click', '[data-drep]', el => { const Q = D.quiz; if(!Q || Q.rep != null) return; Q.rep = +el.dataset.drep; const q = Q.qs[Q.i]; if(q.o[Q.rep] === q.e) Q.ok++; else Q.rates.push(q.e); A.refresh(); });
A.on('click', '[data-dnext]', () => { const Q = D.quiz; if(!Q) return; Q.i++; Q.rep = null; A.refresh(); });
A.DICOS = {charger, chercher, norm};
})();
