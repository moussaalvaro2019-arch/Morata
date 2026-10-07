/* =====================================================================
   Espace apprenant : tableau de bord, matières, cours, quiz, profil
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S, fd, ago} = A;
const first = () => ((S.me && S.me.data && S.me.data.name) || '').split(' ').slice(-1)[0] || '';

function lastChapter(){
  const done = Object.values(S.progress || {}).filter(p => p.done).sort((a,b)=>b.at-a.at);
  const cat = A.catalog();
  if(done.length){
    const f = A.chap(done[0].chap);
    if(f){ const m = cat.find(x => x.id === f.m.id) || f.m; const nx = m.chapitres.find(c => !(S.progress[c.id] && S.progress[c.id].done)); if(nx) return {m, c:nx}; }
  }
  for(const m of cat){ const c = m.chapitres.find(c => !(S.progress[c.id] && S.progress[c.id].done)); if(c) return {m, c}; }
  return null;
}
function globalStats(){
  const cat = A.catalog();
  const total = cat.reduce((a,m)=>a+m.chapitres.length,0);
  const done = cat.reduce((a,m)=>a+A.matProgress(m).done,0);
  const q = S.quiz || [];
  const avg = q.length ? Math.round(q.reduce((a,x)=>a+x.score/x.total,0)/q.length*100) : 0;
  const certs = cat.filter(m => m.chapitres.length && A.matProgress(m).pct === 100).length;
  return {total, done, pct: total ? Math.round(done/total*100) : 0, quiz:q.length, avg, certs};
}

/* ---------- Tableau de bord ---------- */
A.page('app', {space:'app', free:true, title:'Tableau de bord', crumb:'Espace apprenant', render(){
  const st = globalStats(), nx = lastChapter(), cat = A.catalog();
  const enCours = cat.filter(m => { const p = A.matProgress(m); return p.done > 0 && p.pct < 100; });
  const sugg = enCours.length ? enCours : cat.filter(m => ['math','ba','rdm','metre','tech'].includes(m.id)).slice(0,4);
  const ann = Object.entries(S.annonces||{}).map(([id,a])=>({id,...a})).sort((a,b)=>(b.at||0)-(a.at||0)).slice(0,3);
  const quiz = (S.quiz||[]).slice(0,5);
  const lk = n => A.lockTag ? A.lockTag(n) : '';
  return `${A.aboBanner ? A.aboBanner() : ''}
  <div class="welcome"><div class="stack s8"><span class="kick" style="color:var(--amber)">Bonjour ${esc(first())}</span><h2>${st.done ? 'Continuons sur votre lancée.' : 'Bienvenue sur votre espace de formation.'}</h2>
   <p>${st.done ? `Vous avez terminé ${st.done} chapitre${st.done>1?'s':''} sur ${st.total}.` : 'Choisissez une matière ou suivez le parcours Construction de A à Z.'}</p>
   ${nx?`<div class="row" style="margin-top:6px"><a class="btn b-pri" href="#/app/cours/${nx.c.id}">${ic('play')}${st.done?'Reprendre':'Commencer'} : ${esc(nx.c.titre)}</a><span class="sub" style="color:#B7C3D3">${esc(nx.m.titre)}</span></div>`:''}</div>
   <div style="display:grid;justify-items:center;gap:6px"><span class="ring" style="--p:${st.pct};width:92px;height:92px"><b style="font-size:16px;color:var(--ink)">${st.pct}%</b></span><span class="sub" style="color:#B7C3D3">progression globale</span></div></div>
  <div class="kpis">
   <div class="kpi"><small>${ic('check')}Chapitres terminés</small><b>${st.done}</b><em>sur ${st.total}</em></div>
   <div class="kpi"><small>${ic('target')}Quiz passés</small><b>${st.quiz}</b><em>moyenne ${st.avg}%</em></div>
   <div class="kpi"><small>${ic('award')}Attestations</small><b>${st.certs}</b><em>matières terminées à 100 %</em></div>
   <div class="kpi"><small>${ic('folder')}Mes travaux</small><b>${Object.keys(S.works||{}).length}</b><em>plans, métrés et exercices en photo</em></div>
  </div>
  <div class="qa">
   <a href="#/app/resoudre"><span class="ic" style="background:var(--or);color:#fff">${ic('camera')}</span><b>Résoudre en photo ${lk('ia')}</b><span>L'IA corrige votre exercice</span></a>
   <a href="#/app/exercices"><span class="ic" style="background:var(--okbg);color:var(--ok)">${ic('target')}</span><b>Exercices & annales</b><span>S'entraîner pas à pas</span></a>
   <a href="#/app/construction"><span class="ic" style="background:var(--or3);color:var(--or2)">${ic('crane')}</span><b>Construction A→Z</b><span>Le chantier étape par étape</span></a>
   <a href="#/app/atelier"><span class="ic" style="background:#E7ECF5;color:var(--navy)">${ic('compass')}</span><b>Atelier de dessin ${lk('atelier')}</b><span>Dessiner un plan</span></a>
   <a href="#/app/metre"><span class="ic" style="background:var(--bluebg);color:var(--blue)">${ic('calc')}</span><b>Métré ${lk('metres')}</b><span>Quantités et devis</span></a>
   <a href="#/app/ia"><span class="ic" style="background:linear-gradient(140deg,#E4EDFC,#FBE6D6);color:var(--blue)">${ic('spark')}</span><b>Assistant IA ${lk('ia')}</b><span>Poser une question</span></a>
  </div>
  ${A.formuleCard ? A.formuleCard() : ''}
  ${A.parrainBand ? A.parrainBand() : ''}
  <div class="cols">
   <div class="stack">
    <div class="sech"><h2 style="font-size:20px">${enCours.length?'Mes matières en cours':'Pour bien commencer'}</h2><a class="btn b-line b-sm" href="#/app/matieres">Toutes les matières</a></div>
    <div class="mgrid">${sugg.map(m => A.matCard(m, {progress:true, href:m=>'#/app/matiere/'+m.id})).join('')}</div>
   </div>
   <div class="stack">
    <div class="card"><h3>Annonces ${ic('bell')}</h3><div class="stack s8">${ann.length ? ann.map(a=>`<div class="ann"><b>${esc(a.titre)}</b><span class="sub">${esc(a.texte)}</span><span class="small faint">${fd(a.at)}</span></div>`).join('') : '<p class="sub">Aucune annonce pour le moment.</p>'}</div></div>
    <div class="card"><h3>Derniers quiz</h3>${quiz.length ? `<div class="stack s8">${quiz.map(q=>{const f=A.chap(q.chap);const p=Math.round(q.score/q.total*100);return `<div class="row between nw"><span class="grow" style="min-width:0"><b style="font-size:13.5px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(f?f.c.titre:q.chap)}</b><span class="small faint">${ago(q.at)}</span></span><span class="pill ${p>=70?'p-ok':p>=50?'p-warn':'p-bad'}">${q.score}/${q.total}</span></div>`}).join('')}</div>` : '<p class="sub">Passez un quiz à la fin d\'un chapitre pour voir vos résultats ici.</p>'}</div>
   </div>
  </div>`;
}});

/* ---------- Matières ---------- */
let mQ = '';
A.page('app/matieres', {space:'app', free:true, title:'Matières', crumb:'Programme complet', render(){
  let list = A.catalog();
  if(mQ){ const q = mQ.toLowerCase(); list = list.filter(m => (m.titre+' '+(m.resume||'')+' '+m.chapitres.map(c=>c.titre).join(' ')).toLowerCase().includes(q)); }
  return `<div class="toolbar"><label class="search">${ic('search')}<input id="mQ" placeholder="Rechercher une matière ou un chapitre…" value="${esc(mQ)}"></label><span class="sub">${A.catalog().length} matières · ${globalStats().total} chapitres</span></div>
  ${list.length ? A.matGroups(list, m => A.matCard(m, {progress:true, href:m=>'#/app/matiere/'+m.id})) : A.empty('search','Aucun résultat.')}`;
}});
A.on('input', '#mQ', el => { mQ = el.value; A.refresh(); });

let mLv = {};
A.page('app/matiere/:id', {space:'app', free:true, title:p => (A.mat(p.id)||{}).titre || 'Matière', crumb:'<a href="#/app/matieres">Matières</a>', render(p){
  const m = A.mat(p.id); if(!m) return A.empty('book','Matière introuvable.');
  const pr = A.matProgress(m), LV = A.matLevels(m), mine = A.myNiv(m.id);
  const cur = mLv[m.id] || mine || (LV.find(l => l.total && l.pct < 100) || LV[0]).id, lv = LV[cur-1], nxtL = LV.slice(cur).find(l => l.total);
  const nx = lv.ch.find(c => !(S.progress[c.id] && S.progress[c.id].done)) || lv.ch[0];
  const qz = (S.quiz||[]).filter(q => q.mat === m.id);
  const pre = (m.prerequis||[]).map(id => A.mat(id)).filter(Boolean);
  return `${A.matHead(m)}
  <div class="cols"><div class="stack">
   <div class="card stack"><div class="row between"><div><b style="font-size:16px">Choisissez votre niveau</b><div class="sub">Commencez au niveau qui vous correspond, puis progressez : Débutant → Intermédiaire → Avancé.</div></div><div class="row">${A.ring(pr.pct)}<div class="sub">${pr.done} / ${pr.total} chapitres<br>${qz.length} quiz passés</div></div></div>
    <div class="lvcards">${LV.map(l => `<button class="lvcard ${l.id===cur?'on':''}" style="--lc:${l.c};--lb:${l.bg}" data-mlv="${l.id}" data-m="${m.id}"><span class="row between"><b>${'●'.repeat(l.id)} ${l.n}</b>${mine===l.id?'<span class="pill" style="background:var(--lc);color:#fff">Mon niveau</span>':l.pct===100?`<span class="pill p-ok">${ic('check')}Terminé</span>`:''}</span><span class="sub">${l.d}</span><span class="small">${l.total} chapitres · ${Math.max(1, Math.round(l.min/60))} h</span>${A.bar(l.pct)}<span class="small mono">${l.done}/${l.total} terminés</span></button>`).join('')}</div></div>
   <div class="card stack"><div class="row between"><h3 style="margin:0;color:${lv.c}">${'●'.repeat(lv.id)} Niveau ${lv.n}</h3><div class="row">${nx?`<a class="btn b-pri" href="#/app/cours/${nx.id}">${ic('play')}${lv.done?'Continuer':'Commencer'}</a>`:''}${mine!==lv.id?`<button class="btn b-line" data-setniv="${lv.id}" data-m="${m.id}">${ic('flag')}Choisir comme mon niveau</button>`:''}</div></div>
    <div class="chlist">${lv.ch.map((c,i) => { const d = S.progress[c.id] && S.progress[c.id].done; const best = qz.filter(q=>q.chap===c.id).reduce((a,q)=>Math.max(a,Math.round(q.score/q.total*100)),-1);
     const open = A.canRead(c.id), free = !A.hasAccess() && A.isFree(c.id);
     return `<a class="chap ${d?'done':''} ${open?'':'locked'}" href="#/app/cours/${c.id}"><span class="n">${d?ic('check'):i+1}</span><span><b>${esc(c.titre)}</b><span class="sub">${c.duree||20} min${A.nex(c) ? ` · ${A.nex(c)} exercice${A.nex(c) > 1 ? 's' : ''} corrigé${A.nex(c) > 1 ? 's' : ''}` : ''} · ${A.nq(c)} questions${c.ns || c.sujet ? ' · sujet d\'examen' : ''}${best>=0?` · meilleur score ${best}%`:''}${c.custom?' · nouveau':''}</span></span>${free ? '<span class="pill p-ok">Gratuit</span>' : open ? ic('chev') : ic('lock')}</a>`; }).join('') || A.empty('book','Aucun chapitre à ce niveau pour le moment.')}</div>
    ${lv.pct===100 && lv.total ? `<div class="note ok">${ic('award')}<span>Niveau ${lv.n} terminé. <a href="#/app/attestation/${m.id}?n=${lv.id}">Voir mon attestation de niveau</a>${nxtL?` · <a href="#" data-mlv="${nxtL.id}" data-m="${m.id}">Passer au niveau ${nxtL.n} →</a>`:''}</span></div>` : ''}
   </div>
   ${pr.pct===100?`<a class="btn b-amber" style="justify-self:start" href="#/app/attestation/${m.id}">${ic('award')}Attestation complète de la matière</a>`:''}
  </div><div class="stack">
   ${A.SOL ? (() => { const sl = A.SOL.byMat(m.id), ex = A.EXO ? A.EXO.byMat(m.id) : []; return `<div class="card stack s8"><h3 style="margin:0;justify-content:flex-start">${ic('target')} S'entraîner</h3><p class="sub">${sl.length} solveur${sl.length > 1 ? 's' : ''} guidé${sl.length > 1 ? 's' : ''} pas à pas et ${ex.length} exercice${ex.length > 1 ? 's' : ''} corrigé${ex.length > 1 ? 's' : ''} (type BTS et Licence), plus les annales d'examen.</p>
    <div class="stack s8">${sl.slice(0, 3).map(x => `<a class="row between nw" style="text-decoration:none;font-size:14px" href="${A.SOL.link(x.id)}"><span class="row nw">${ic('target')}<b style="font-weight:600">${esc(x.titre)}</b></span>${ic('chev')}</a>`).join('')}</div>
    <div class="row"><a class="btn b-pri b-sm" href="#/app/exercices/${m.id}">${ic('book')}Exercices de la matière</a><a class="btn b-line b-sm" href="#/app/resoudre?m=${m.id}">${ic('camera')}Résoudre en photo</a></div></div>`; })() : ''}
   ${m.objectifs?`<div class="card"><h3>Objectifs</h3><ul style="margin:0;padding-left:18px;display:grid;gap:6px;font-size:14px">${m.objectifs.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></div>`:''}
   ${pre.length?`<div class="card"><h3>Prérequis conseillés</h3><div class="stack s8">${pre.map(x=>`<a class="who" style="text-decoration:none" href="#/app/matiere/${x.id}">${A.matIconSm(x)}<b>${esc(x.titre)}</b></a>`).join('')}</div></div>`:''}
   ${(m.applications||[]).length?`<div class="card"><h3>Sur le chantier</h3><ul style="margin:0;padding-left:18px;display:grid;gap:6px;font-size:14px">${m.applications.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></div>`:''}
   <div class="aipanel"><div class="hd">${ic('spark')}Une question sur cette matière ?</div><p class="sub">L'assistant IA connaît tout le programme de ${esc(m.titre)}.</p><a class="btn b-blue b-sm" style="justify-self:start" href="#/app/ia?m=${m.id}">${ic('chat')}Demander à l'IA</a></div>
  </div></div>`;
}});
A.on('click', '[data-mlv]', (el, e) => { e.preventDefault(); mLv[el.dataset.m] = +el.dataset.mlv; A.refresh(); });
A.on('click', '[data-setniv]', async el => { const n = +el.dataset.setniv; if(await A.setNiv(el.dataset.m, n)){ toast('Niveau ' + A.NIVEAUX[n-1].n + ' choisi pour cette matière', 'flag'); A.refresh(); } });

/* ---------- Lecteur de cours + quiz ---------- */
let QZ = null;
A.page('app/cours/:id', {space:'app', free:true, title:p => ((A.chap(p.id)||{}).c||{}).titre || 'Cours', crumb:p => { const f = A.chap(p.id); return f ? `<a href="#/app/matieres">Matières</a> › <a href="#/app/matiere/${f.m.id}">${esc(f.m.titre)}</a>` : ''; },
 actions:p => `<button class="ibtn noprint" data-act="print" title="Imprimer le chapitre">${ic('print')}</button>`,
 render(p){
  const f0 = A.chap(p.id); if(!f0) return A.empty('book','Chapitre introuvable.');
  if(!A.hasAccess() && !A.isFree(p.id)) return A.lockedChapter(f0.c, A.mat(f0.m.id) || f0.m);
  if(!A.chapReady(f0)) return A.chapLoading();
  const f = A.chap(p.id), m = A.mat(f.m.id) || f.m, c = f.c;
  if(c.verrou) return A.lockedChapter(c, m);
  const list = m.chapitres, idx = list.findIndex(x => x.id === c.id);
  const prev = list[idx-1], next = list[idx+1];
  const done = S.progress[c.id] && S.progress[c.id].done;
  const md = A.md(c.contenu || '');
  if(!QZ || QZ.chap !== c.id) QZ = {chap:c.id, items:(c.quiz||[]).slice(0, Math.max(0, +A.lim('quiz') || 0)), tot:c.nqTot || (c.quiz||[]).length, ans:{}, checked:false, ia:false};
  return `<div class="reader">
   <div class="stack s20" style="min-width:0">
    <article class="lesson">
     <div class="row between" style="margin-bottom:6px"><span class="kick">${(() => { const L = list.filter(x => A.nivOf(x) === A.nivOf(c)); return `${A.nivPill(c)} Chapitre ${L.findIndex(x => x.id === c.id) + 1} sur ${L.length} · ${c.duree||20} min`; })()}</span>${done?`<span class="pill p-ok dot">Terminé</span>`:''}</div>
     <h1 style="font-size:clamp(24px,3vw,34px);margin-bottom:18px">${esc(c.titre)}</h1>
     ${md.html}
    </article>
    ${A.SOL && A.SOL.chapStudies ? A.SOL.chapStudies(c) : ''}
    ${A.exosHtml(c)}
    ${A.sujetHtml(c)}
    ${A.droit('ia') ? `<div class="aipanel noprint" id="aiBox">
     <div class="hd">${ic('spark')}Besoin d'aide sur ce chapitre ?</div>
     <div class="sugg"><button data-iaq="simple">${ic('chat')} Expliquer plus simplement</button><button data-iaq="exemple">${ic('calc')} Un exemple chiffré</button><button data-iaq="exercice">${ic('edit')} Un exercice corrigé</button><button data-iaq="chantier">${ic('hat')} Application sur chantier</button><button data-iaq="resume">${ic('list')} Fiche résumé</button></div>
     <div id="aiOut" class="aiout md" hidden></div>
    </div>` : A.upsell ? A.upsell('Le professeur IA explique ce chapitre, donne des exemples et des exercices', 'ia') : ''}
    <section class="lesson noprint" id="quiz">${quizHtml(c)}</section>
    ${A.SOL && A.SOL.byMat(m.id).length ? `<div class="note noprint">${ic('target')}<div class="stack s8"><span><b>Passez à la pratique</b> : refaites un exercice type pas à pas (la plateforme vérifie chaque étape) ou faites corriger votre propre exercice en photo.</span><div class="row"><a class="btn b-pri b-sm" href="#/app/exercices/${m.id}">${ic('book')}Exercices de ${esc(m.court || m.titre)}</a><a class="btn b-line b-sm" href="#/app/resoudre?m=${m.id}">${ic('camera')}Résoudre en photo</a></div></div></div>` : ''}
    <div class="lnav noprint">
     ${prev?`<a class="btn b-line" href="#/app/cours/${prev.id}">${ic('back')}${esc(prev.titre)}</a>`:'<span></span>'}
     <div class="row">${done?'':`<button class="btn b-ok" data-done="${c.id}">${ic('check')}Marquer comme terminé</button>`}${next?(A.nivOf(next) > A.nivOf(c) ? `<a class="btn b-amber" href="#/app/cours/${next.id}">Niveau ${A.NIVEAUX[A.nivOf(next)-1].n} ${ic('arrow')}</a>` : `<a class="btn b-pri" href="#/app/cours/${next.id}">Chapitre suivant ${ic('arrow')}</a>`):`<a class="btn b-dark" href="#/app/matiere/${m.id}">Fin de la matière ${ic('flag')}</a>`}</div>
    </div>
   </div>
   <aside class="toc noprint">
    ${md.toc.length?`<div class="card" style="padding:12px"><b class="small faint mono" style="letter-spacing:.1em">DANS CE CHAPITRE</b><div style="display:grid;gap:2px;margin-top:6px">${md.toc.map(t=>`<a href="javascript:void 0" data-toc="${t.id}">${ic('chev')}${esc(t.t)}</a>`).join('')}${(c.exercices||[]).length?`<a href="javascript:void 0" data-toc="exos">${ic('chev')}Exercices corrigés</a>`:''}<a href="javascript:void 0" data-toc="quiz">${ic('target')}Quiz</a></div></div>`:''}
    <div class="card" style="padding:12px"><b class="small faint mono" style="letter-spacing:.1em">${esc(m.titre.toUpperCase())}</b><div style="display:grid;gap:2px;margin-top:6px">${list.map((x,i)=>`<a href="#/app/cours/${x.id}" class="${x.id===c.id?'on':''} ${S.progress[x.id]&&S.progress[x.id].done?'done':''}">${ic(S.progress[x.id]&&S.progress[x.id].done?'check':'chev')}<span>${i+1}. ${esc(x.titre)}</span></a>`).join('')}</div></div>
   </aside></div>`;
 }
});
A.on('click', '[data-toc]', el => { const t = document.getElementById(el.dataset.toc); if(t) t.scrollIntoView({behavior:'smooth', block:'start'}); });
A.on('click', '[data-done]', async el => { const f = A.chap(el.dataset.done); await A.db.saveProgress(f.c.id, f.m.id, true); toast('Chapitre terminé'); A.refresh(); });

/* Exercices corrigés à la fin du chapitre : énoncé, puis corrigé détaillé à ouvrir */
const EXD = {1:['Application directe','#1E9B5E','#E7F5EE'], 2:['Entraînement','#D9661F','#FDEEE2'], 3:['Approfondissement','#C8363B','#FBE9E9']};
A.exosHtml = c => {
  const L0 = c.exercices || [], L = L0.slice(0, Math.max(0, +A.lim('exos') || 0)), cache = Math.max(0, (c.nexTot || L0.length) - L.length);
  if(!L.length) return cache && A.upsell ? `<section class="lesson" id="exos"><span class="kick">À vous de jouer</span><h2 style="font-size:22px;margin:4px 0 10px">Exercices corrigés</h2>${A.upsell(`${cache} exercice${cache > 1 ? 's' : ''} corrigé${cache > 1 ? 's' : ''} dans ce chapitre`, 'exos')}</section>` : '';
  return `<section class="lesson" id="exos"><span class="kick">À vous de jouer</span><h2 style="font-size:22px;margin:4px 0 6px">Exercices corrigés</h2>
   <p class="sub" style="margin-bottom:14px">Cherchez chaque exercice sur une feuille avant d'ouvrir le corrigé : c'est en se trompant qu'on apprend.</p>
   <div class="exos">${L.map((x, i) => { const d = EXD[x.d] || EXD[2]; return `<div class="exo"><div class="row between nw" style="align-items:flex-start"><b>Exercice ${i + 1} · ${esc(x.t)}</b><span class="pill" style="background:${d[2]};color:${d[1]};flex:none">${d[0]}</span></div>
    ${A.mdHtml(x.e)}<details class="cor"><summary>${ic('check')}Voir le corrigé détaillé</summary>${A.mdHtml(x.c)}</details></div>`; }).join('')}</div>${cache && A.upsell ? A.upsell(`${cache} autre${cache > 1 ? 's' : ''} exercice${cache > 1 ? 's' : ''} corrigé${cache > 1 ? 's' : ''} dans ce chapitre`, 'exos') : ''}</section>`;
};

/* Sujet type examen du chapitre : énoncé complet, puis corrigé détaillé et barème à ouvrir */
A.sujetVerrou = c => !!(c.sujet && (c.sujet.verrou || A.nivOf(c) > (+A.lim('sujets') || 0)));
A.sujetHtml = (c, opt={}) => {
  const s = c.sujet; if(!s) return '';
  if(A.sujetVerrou(c)) return `<section class="lesson sujet" id="sujet"><span class="kick">${ic('lock')} Sujet type examen</span><h2 style="font-size:22px;margin:4px 0 10px">${esc(s.titre || 'Sujet d\'examen')}</h2>${A.upsell ? A.upsell(`Le sujet d'examen de ce chapitre (niveau ${A.NIVEAUX[A.nivOf(c) - 1].n}), avec son corrigé et son barème, est disponible`, 'sujets') : ''}</section>`;
  if(!s.enonce) return '';
  return `<section class="lesson sujet" id="sujet"><div class="row between nw" style="align-items:flex-start"><div style="min-width:0"><span class="kick">${ic('doc')} Sujet type examen</span><h2 style="font-size:22px;margin:4px 0 6px">${esc(s.titre)}</h2></div>${opt.full ? '' : `<a class="btn b-line b-sm noprint" style="flex:none" href="#/app/sujet/${c.id}">${ic('clock')}Mode examen</a>`}</div>
   <div class="row" style="gap:8px;margin-bottom:12px"><span class="pill p-info">${ic('clock')} ${s.duree || 60} min</span><span class="pill p-mute">Noté sur ${s.bareme || 20}</span>${s.niveau ? `<span class="pill p-or">${esc(s.niveau)}</span>` : ''}</div>
   <div class="sujet-e">${A.mdHtml(s.enonce)}</div>
   ${opt.full ? '' : `<details class="cor"><summary>${ic('check')}Voir le corrigé détaillé et le barème</summary>${A.mdHtml(s.corrige)}</details>`}</section>`;
};

/* ---------- Mode examen : chronomètre, énoncé, corrigé à la fin ---------- */
let SJ = null, sjTimer = 0;
const sjFmt = t => { t = Math.max(0, Math.round(t/1000)); const h = Math.floor(t/3600), m = Math.floor(t%3600/60), s = t%60; return (h ? h + ' h ' : '') + String(m).padStart(2, '0') + ' min ' + String(s).padStart(2, '0') + ' s'; };
const sjLeft = () => !SJ ? 0 : SJ.total - (SJ.run ? SJ.used + (Date.now() - SJ.t0) : SJ.used);
function sjTick(){ const el = $('#sjT'); if(!el || !SJ){ clearInterval(sjTimer); return; } const l = sjLeft(); el.textContent = sjFmt(l); el.classList.toggle('late', l <= 0); }
A.page('app/sujet/:id', {space:'app', free:true, title:p => (((A.chap(p.id)||{}).c||{}).sujet||{}).titre || 'Sujet d\'examen', crumb:p => { const f = A.chap(p.id); return f ? `<a href="#/app/exercices/${f.m.id}">Exercices</a> › <a href="#/app/cours/${f.c.id}">${esc(f.c.titre)}</a>` : ''; },
 actions:() => `<button class="ibtn noprint" data-act="print" title="Imprimer le sujet">${ic('print')}</button>`,
 render(p){
  const f0 = A.chap(p.id); if(!f0) return A.empty('doc', 'Sujet introuvable.');
  if(!A.hasAccess() && !A.isFree(p.id)) return A.lockedChapter(f0.c, A.mat(f0.m.id) || f0.m);
  if(!A.chapReady(f0)) return A.chapLoading();
  const f = A.chap(p.id), c = f.c, s = c.sujet; if(c.verrou) return A.lockedChapter(c, f.m);
  if(!s) return A.empty('doc', 'Ce chapitre n\'a pas encore de sujet d\'examen.');
  if(A.sujetVerrou(c)) return A.sujetHtml(c);
  if(!SJ || SJ.id !== c.id) SJ = {id:c.id, total:(s.duree || 60)*60000, used:0, run:false, t0:0, show:false};
  const note = A.ls.get('sjNote:' + c.id, '');
  return `<div class="reader"><div class="stack s20" style="min-width:0">
   <div class="sjbar noprint"><div class="row nw"><span class="ic">${ic('clock')}</span><div><b id="sjT" class="mono">${sjFmt(sjLeft())}</b><div class="small faint">temps restant sur ${s.duree || 60} min</div></div></div>
    <div class="row">${SJ.run ? `<button class="btn b-line b-sm" data-sj="pause">${ic('clock')}Pause</button>` : `<button class="btn b-pri b-sm" data-sj="go">${ic('play')}${SJ.used ? 'Reprendre' : 'Démarrer l\'épreuve'}</button>`}<button class="btn b-ghost b-sm" data-sj="reset">${ic('refresh')}Recommencer</button></div></div>
   ${A.sujetHtml(c, {full:true})}
   <section class="lesson noprint"><div class="row between"><div><span class="kick">Après l'épreuve</span><h2 style="font-size:20px">Correction</h2></div>${SJ.show ? '' : `<button class="btn b-ok" data-sj="cor">${ic('check')}Afficher le corrigé et le barème</button>`}</div>
    ${SJ.show ? `<div style="margin-top:12px">${A.mdHtml(s.corrige)}</div>
     <div class="row" style="margin-top:14px"><label class="fld" style="max-width:220px"><span>Ma note (auto-correction)</span><input class="inp" id="sjNote" type="number" min="0" max="${s.bareme || 20}" step="0.5" value="${esc(note)}" placeholder="sur ${s.bareme || 20}"></label><button class="btn b-line" data-sj="note">${ic('save')}Enregistrer</button></div>` : '<p class="sub" style="margin-top:8px">Rédigez votre copie sur une feuille dans le temps imparti, puis ouvrez le corrigé pour vous noter avec le barème.</p>'}</section>
   <div class="lnav noprint"><a class="btn b-line" href="#/app/cours/${c.id}">${ic('back')}Revoir le cours</a><a class="btn b-pri" href="#/app/exercices/${f.m.id}">${ic('doc')}Autres sujets de ${esc(f.m.court || f.m.titre)}</a></div>
  </div></div>`;
 },
 mount(){ clearInterval(sjTimer); sjTimer = setInterval(sjTick, 1000); sjTick(); },
 unmount(){ clearInterval(sjTimer); }
});
A.on('click', '[data-sj]', el => {
  if(!SJ) return; const a = el.dataset.sj;
  if(a === 'go'){ SJ.run = true; SJ.t0 = Date.now(); }
  if(a === 'pause'){ SJ.used += Date.now() - SJ.t0; SJ.run = false; }
  if(a === 'reset'){ SJ.used = 0; SJ.run = false; SJ.show = false; }
  if(a === 'cor'){ if(SJ.run){ SJ.used += Date.now() - SJ.t0; SJ.run = false; } SJ.show = true; }
  if(a === 'note'){ const v = A.val('sjNote'); A.ls.set('sjNote:' + SJ.id, v); toast('Note enregistrée : ' + v, 'check'); return; }
  A.refresh();
});

function quizHtml(c){
  const items = QZ.items, ia = A.droit('ia'), plus = !QZ.ia && QZ.tot > items.length && A.upsell ? A.upsell(`${QZ.tot - items.length} autre${QZ.tot - items.length > 1 ? 's' : ''} question${QZ.tot - items.length > 1 ? 's' : ''} de quiz dans ce chapitre`, 'quiz') : '';
  if(!items.length && !QZ.loading) return `<div class="row between"><div><span class="kick">Quiz</span><h2 style="font-size:20px">Testez vos connaissances</h2></div>${ia ? `<button class="btn b-blue b-sm" data-act="iaquiz">${ic('spark')}Générer un quiz avec l'IA</button>` : ''}</div>${plus || `<p class="sub" style="margin-top:8px">Ce chapitre n'a pas encore de quiz.${ia ? ' Demandez à l\'IA d\'en créer un.' : ''}</p>`}`;
  if(QZ.loading) return `<div class="row">${ic('spark')}<span>L'IA prépare vos questions…</span><span class="typing"><i></i><i></i><i></i></span></div>`;
  const score = items.reduce((a,q,i)=>a+(QZ.ans[i]===q.r?1:0),0);
  return `<div class="row between" style="margin-bottom:14px"><div><span class="kick">${QZ.ia?'Quiz généré par l\'IA':'Quiz'}</span><h2 style="font-size:20px">Testez vos connaissances</h2></div>${ia ? `<button class="btn b-line b-sm" data-act="iaquiz">${ic('spark')}Nouveau quiz IA</button>` : ''}</div>${plus}
  <div class="quiz">${items.map((q,i)=>`<div class="qq" id="q${i}"><b>${i+1}. ${A.mdHtml(q.q,{inner:true}).replace(/^<p>|<\/p>$/g,'')}</b>${q.o.map((o,j)=>{
    let cls = ''; if(QZ.checked){ if(j===q.r) cls='good'; else if(QZ.ans[i]===j) cls='bad'; } else if(QZ.ans[i]===j) cls='sel';
    return `<button class="qo ${cls}" data-qi="${i}" data-qj="${j}" ${QZ.checked?'disabled':''}><span class="k">${'ABCDE'[j]}</span><span>${esc(o)}</span></button>`;}).join('')}
    ${QZ.checked && q.e?`<div class="qexp">${ic('info')} ${esc(q.e)}</div>`:''}</div>`).join('')}</div>
  ${QZ.checked ? `<div class="score" style="margin-top:14px"><b>${score}/${items.length}</b><div class="grow"><b style="font-size:16px;font-family:var(--fb)">${score/items.length>=.7?'Excellent travail !':score/items.length>=.5?'Bien, chapitre validé.':'À revoir : relisez le chapitre et réessayez.'}</b><div class="sub" style="color:#B7C3D3">${score/items.length>=.5?'Le chapitre est marqué comme terminé.':'Il faut au moins 50 % pour valider le chapitre.'}</div></div><button class="btn b-pri" data-act="qreset">${ic('refresh')}Recommencer</button></div>`
   : `<button class="btn b-pri b-lg" style="margin-top:14px" data-act="qcheck" ${Object.keys(QZ.ans).length<items.length?'disabled':''}>${ic('check')}Valider mes réponses (${Object.keys(QZ.ans).length}/${items.length})</button>`}`;
}
const reQuiz = () => { const c = A.chap(QZ.chap); const box = $('#quiz'); if(box && c) box.innerHTML = quizHtml(c.c); };
A.on('click', '[data-qi]', el => { if(QZ.checked) return; QZ.ans[+el.dataset.qi] = +el.dataset.qj; reQuiz(); });
A.on('click', '[data-act="qreset"]', () => { QZ.ans = {}; QZ.checked = false; reQuiz(); $('#quiz').scrollIntoView({behavior:'smooth'}); });
A.on('click', '[data-act="qcheck"]', async () => {
  const f = A.chap(QZ.chap); QZ.checked = true;
  const score = QZ.items.reduce((a,q,i)=>a+(QZ.ans[i]===q.r?1:0),0);
  reQuiz();
  await A.db.saveQuiz(f.c.id, f.m.id, score, QZ.items.length);
  if(score / QZ.items.length >= .5 && !(S.progress[f.c.id] && S.progress[f.c.id].done)){ await A.db.saveProgress(f.c.id, f.m.id, true); toast('Chapitre validé !', 'award'); }
});
A.on('click', '[data-act="iaquiz"]', async () => {
  const f = A.chap(QZ.chap); if(!f) return;
  QZ.loading = true; reQuiz();
  const items = await A.IA.quiz(f.m, f.c);
  QZ.loading = false;
  if(items && items.length){ Object.assign(QZ, {items, ans:{}, checked:false, ia:true}); }
  reQuiz();
});
A.on('click', '[data-iaq]', el => {
  const f = A.chap(QZ ? QZ.chap : ''); if(!f) return;
  const out = $('#aiOut'); out.hidden = false;
  A.IA.lesson(f.m, f.c, el.dataset.iaq, out);
});

/* ---------- Profil ---------- */
A.page('app/profil', {space:'app', free:true, title:'Mon profil', crumb:'Compte', render(){
  const me = S.me, d = me.data || {}, st = globalStats(), cat = A.catalog();
  const certs = cat.filter(m => m.chapitres.length && A.matProgress(m).pct === 100);
  const works = Object.entries(S.works||{}).sort((a,b)=>String(b[1].updated_at).localeCompare(String(a[1].updated_at)));
  return `<div class="cols"><div class="stack">
   <div class="card"><h3>Mes informations</h3><form id="fProf" class="stack">
    <div class="g2"><label class="fld"><span>Nom et prénoms</span><input class="inp" id="pfName" value="${esc(d.name)}"></label><label class="fld"><span>E-mail</span><input class="inp" value="${esc(me.email)}" disabled></label></div>
    <div class="g3"><label class="fld"><span>Téléphone</span><input class="inp" id="pfPhone" value="${esc(d.phone)}"></label><label class="fld"><span>Ville</span><input class="inp" id="pfCity" value="${esc(d.city)}"></label><label class="fld"><span>Profil</span><select class="inp" id="pfProfil">${A.PROFILS.concat(d.profil && !A.PROFILS.includes(d.profil)?[d.profil]:[]).map(x=>`<option ${x===d.profil?'selected':''}>${esc(x)}</option>`).join('')}</select></label></div>
    <button class="btn b-pri" style="justify-self:start">${ic('save')}Enregistrer</button></form></div>
   <div class="card"><h3>Mot de passe</h3><div class="g2"><label class="fld"><span>Nouveau mot de passe</span><input class="inp" id="pnPw" type="password" autocomplete="new-password"></label><label class="fld"><span>Confirmer</span><input class="inp" id="pnPw2" type="password" autocomplete="new-password"></label></div><button class="btn b-line" style="margin-top:12px" data-act="pwsave">${ic('lock')}Changer le mot de passe</button></div>
   <div class="card"><h3>Mes travaux <small>${works.length}</small></h3>${works.length?`<div class="tw"><table class="t"><thead><tr><th>Nom</th><th>Type</th><th>Modifié</th><th></th></tr></thead><tbody>${works.map(([id,w])=>`<tr><td><b>${esc((w.data||{}).name||'Sans nom')}</b></td><td>${A.workPill(w.kind)}</td><td class="sub">${ago(w.updated_at)}</td><td class="r"><a class="btn b-line b-xs" href="${w.kind==='photo'?'#/app/resoudre?h='+id:'#/app/'+(w.kind==='dessin'?'atelier':'metre')+'/'+id}">Ouvrir</a></td></tr>`).join('')}</tbody></table></div>`:'<p class="sub">Vos plans, vos métrés et vos exercices résolus en photo apparaîtront ici.</p>'}</div>
  </div><div class="stack">
   <div class="card stack" style="justify-items:center;text-align:center">${A.avatar(d.name||me.email,'lg')}<div><b style="font-size:18px">${esc(d.name||'')}</b><div class="sub">${esc(d.profil||'Apprenant')} · inscrit le ${fd(me.created_at)}</div></div>
    <div class="g3" style="width:100%"><div><b style="font-family:var(--fd);font-size:22px">${st.done}</b><div class="small faint">chapitres</div></div><div><b style="font-family:var(--fd);font-size:22px">${st.quiz}</b><div class="small faint">quiz</div></div><div><b style="font-family:var(--fd);font-size:22px">${st.avg}%</b><div class="small faint">moyenne</div></div></div></div>
   ${(() => { const lvc = cat.flatMap(m => A.matLevels(m).filter(l => l.total && l.pct === 100).map(l => ({m, l}))); const n = certs.length + lvc.length;
     return `<div class="card"><h3>Mes attestations <small>${n}</small></h3>${n?`<div class="stack s8">${certs.map(m=>`<a class="row between" style="text-decoration:none" href="#/app/attestation/${m.id}"><span class="row">${ic('award')}<b style="font-size:14px">${esc(m.titre)}</b><span class="pill p-or">Matière complète</span></span>${ic('chev')}</a>`).join('')}${lvc.map(({m,l})=>`<a class="row between" style="text-decoration:none" href="#/app/attestation/${m.id}?n=${l.id}"><span class="row">${ic('award')}<b style="font-size:14px">${esc(m.titre)}</b><span class="pill" style="background:${l.bg};color:${l.c}">${l.n}</span></span>${ic('chev')}</a>`).join('')}</div>`:'<p class="sub">Terminez tous les chapitres d\'un niveau (ou d\'une matière) pour obtenir son attestation.</p>'}</div>`; })()}
   <div class="card"><h3>Progression par matière</h3><div class="bars">${cat.map(m=>{const p=A.matProgress(m);return `<div class="brow"><span>${esc(m.court||m.titre)}</span><span class="mono small">${p.done}/${p.total}</span>${A.bar(p.pct)}</div>`}).join('')}</div></div>
  </div></div>`;
}});
A.on('submit', '#fProf', async () => {
  const data = Object.assign({}, S.me.data, {name:A.val('pfName').trim(), phone:A.val('pfPhone').trim(), city:A.val('pfCity').trim(), profil:A.val('pfProfil')});
  if(await A.db.saveProfile(data)){ toast('Profil enregistré'); A.refresh(); }
});

/* ---------- Attestation ---------- */
A.page('app/attestation/:id', {space:'app', title:'Attestation', crumb:'<a href="#/app/profil">Mon profil</a>', actions:()=>`<button class="btn b-pri b-sm" data-act="print">${ic('print')}Imprimer / PDF</button>`, render(p){
  const m0 = A.mat(p.id); if(!m0) return A.empty('award','Matière introuvable.');
  const nq = +A.query().get('n') || 0, NV = nq ? A.NIVEAUX[nq-1] : null;
  const m = NV ? {...m0, chapitres:m0.chapitres.filter(c => A.nivOf(c) === nq), titre:m0.titre + ' · niveau ' + NV.n, heures:null} : m0;
  const pr = A.matProgress(m);
  if(pr.pct < 100) return `<div class="card stack" style="max-width:560px">${ic('lock')}<h2>Attestation pas encore disponible</h2><p class="muted">Terminez les ${pr.total - pr.done} chapitre(s) restant(s) de ${esc(m.titre)} pour l'obtenir.</p><a class="btn b-pri" style="justify-self:start" href="#/app/matiere/${m.id}">Continuer la matière</a></div>`;
  const qz = (S.quiz||[]).filter(q => q.mat === m.id);
  const avg = qz.length ? Math.round(qz.reduce((a,q)=>a+q.score/q.total,0)/qz.length*100) : null;
  const last = Math.max(...m.chapitres.map(c => (S.progress[c.id]||{}).at || 0));
  const ref = 'MRT-' + m.id.toUpperCase() + (nq ? '-N' + nq : '') + '-' + String(S.me.id).replace(/\W/g,'').slice(-6).toUpperCase();
  const c = A.cfg();
  return `<div class="cert"><div class="row" style="justify-content:center">${A.lockup(false)}</div>
   <span class="kick">Attestation de formation</span><h2>Attestation de réussite</h2><p class="muted">Nous attestons que</p>
   <div class="nm">${esc(S.me.data.name||S.me.email)}</div>
   <p style="max-width:60ch;margin:0 auto">a suivi avec succès l'intégralité du module <b>${esc(m.titre)}</b> (${m.chapitres.length} chapitres${m.heures?`, ${m.heures} heures de formation`:''}) sur la plateforme ${esc(A.brandText())}${avg!=null?`, avec une moyenne de <b>${avg} %</b> aux évaluations`:''}.</p>
   <div class="row" style="justify-content:space-between;margin-top:18px;text-align:left"><div class="sub">Délivrée le ${fd(last||Date.now(),{day:'numeric',month:'long',year:'numeric'})}<br>Référence : <span class="mono">${ref}</span></div><div class="sub" style="text-align:right">Le PDG<br><b style="color:var(--ink);font-family:var(--fd);font-size:16px">${esc(c.ceo)}</b></div></div></div>`;
}});
})();
