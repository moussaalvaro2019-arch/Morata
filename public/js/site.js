/* =====================================================================
   Site public + inscription / connexion / espace direction
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, F, toast, S} = A;

const stats = () => {
  const cat = A.catalog();
  const ch = cat.reduce((a,m)=>a+m.chapitres.length,0);
  const q = cat.reduce((a,m)=>a+m.chapitres.reduce((b,c)=>b+A.nq(c),0),0), ex = cat.reduce((a,m)=>a+m.chapitres.reduce((b,c)=>b+A.nex(c),0),0);
  return {mat:cat.length, ch, q, ex, proj:(A.AZ && A.AZ.projets || []).length};
};
A.matCard = (m, opt={}) => {
  const p = opt.progress ? A.matProgress(m) : null;
  const href = opt.href ? opt.href(m) : `#/matiere/${m.id}`;
  return `<a class="mcard" href="${href}">${A.matIcon(m)}<b>${esc(m.titre)}</b><p>${esc(m.resume||'')}</p>
   <div class="meta"><span>${ic('book')} ${m.chapitres.length} chapitres</span><span>${ic('clock')} ${Math.max(m.heures||0, Math.round(m.chapitres.reduce((a,c)=>a+(c.duree||20),0)/60))} h</span><span class="pill p-mute">3 niveaux</span></div>
   ${p?`<div class="row nw" style="gap:8px"><div class="grow">${A.bar(p.pct)}</div><span class="small mono">${p.pct}%</span></div>`:''}</a>`;
};
A.matGroups = (list, card) => A.GROUPES.map(g => {
  const ms = list.filter(m => (m.groupe||'fond') === g.id); if(!ms.length) return '';
  return `<section class="grp"><h3>${esc(g.n)}</h3><div class="mgrid">${ms.map(card).join('')}</div></section>`;
}).join('');

/* ---------- Accueil ---------- */
A.page('', {space:'site', title:'Accueil', render(){
  const c = A.cfg(), st = stats();
  const proj = (A.AZ && A.AZ.projets) || [];
  return `
  <section class="hero"><div class="wrap hero-g">
    <div class="stack s20">
      <span class="kick" style="color:var(--amber)">${esc(c.tagline)}</span>
      <h1>${esc(c.heroTitle)} <em>${esc(c.heroAccent)}</em></h1>
      <p class="lead">${esc(c.heroText)}</p>
      <div class="row"><a class="btn b-pri b-lg" href="#/${S.me?'app':'matieres'}">${S.me?'Continuer mes cours':'Lire un chapitre gratuit'} ${ic('arrow')}</a><a class="btn b-lg" style="background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.18)" href="#/matieres">Voir les ${st.mat} matières</a></div>
      <div class="trust"><span>${ic('book')}${st.ch} chapitres</span><span>${ic('edit')}${st.ex} exercices corrigés</span><span>${ic('target')}${st.q} questions de quiz</span><span>${ic('building')}${st.proj} projets réels</span><span>${ic('spark')}Professeur IA</span></div>
    </div>
    <div class="bp" aria-hidden="true">${A.PLAN ? A.PLAN.thumb(proj[1] || proj[0], {dark:true, labels:true}) : ''}</div>
  </div></section>

  <div class="wrap">
  <section class="sect"><div class="stats">
    <div class="stat"><b>${st.mat}</b><span>matières du génie civil</span></div>
    <div class="stat"><b>${st.ch}</b><span>chapitres de cours rédigés</span></div>
    <div class="stat"><b>${st.ex}</b><span>exercices corrigés pas à pas</span></div>
    <div class="stat"><b>24 h/24</b><span>assistant IA pour vos questions</span></div>
  </div></section>

  <section class="sect">
    <div class="sech"><div><span class="kick">Programme</span><h2>Toutes les matières du bâtiment</h2></div><a class="btn b-line" href="#/matieres">Catalogue complet ${ic('arrow')}</a></div>
    ${A.matGroups(A.catalog(), m => A.matCard(m))}
  </section>

  <section class="sect">
    <div class="sech"><div><span class="kick">Pratique</span><h2>De la théorie au chantier</h2></div></div>
    <div class="feat">
      <a class="fcard" href="#/construction" style="background:linear-gradient(140deg,#C95F18,#E8752A 60%,#F3B23A)">${ic('crane')}<b>Construction de A à Z</b><p>Du terrain à la remise des clés : implantation, fondations, poteaux, poutres, dalles, toiture, électricité, plomberie, finitions. Avec 4 projets complets : maison économique, moyen et haut standing, immeuble R+4.</p><span class="go">Découvrir ${ic('arrow')}</span></a>
      <a class="fcard" href="#/outils" style="background:linear-gradient(140deg,#0E1A2B,#22344D)">${ic('compass')}<b>Atelier de dessin</b><p>Dessinez vos plans comme sur AutoCAD : murs, portes, fenêtres, cotations, calques, commandes au clavier (LIGNE, MUR, COTE…) et export du plan.</p><span class="go">Essayer ${ic('arrow')}</span></a>
      <a class="fcard" href="#/outils" style="background:linear-gradient(140deg,#1D4FA8,#2F6FDB 60%,#5FA0F5)">${ic('calc')}<b>Métré & devis</b><p>Avant-métré, quantités de béton, d'acier, d'agglos, de carrelage, devis quantitatif et estimatif (DQE) en FCFA, directement depuis votre plan.</p><span class="go">Calculer ${ic('arrow')}</span></a>
    </div>
  </section>

  <section class="sect">
    <div class="sech"><div><span class="kick">Examens</span><h2>S'entraîner et se faire corriger</h2></div></div>
    <div class="feat">
      <a class="fcard" href="#/${S.me ? 'app/resoudre' : 'inscription'}" style="background:linear-gradient(140deg,#7A2E0E,#C95F18 55%,#E8752A)">${ic('camera')}<b>Résoudre en photo</b><p>Photographiez un exercice de cours, de TD ou d'examen : l'IA lit l'énoncé et vous explique la résolution étape par étape, vous guide sans donner la réponse ou vérifie votre résultat.</p><span class="go">Essayer ${ic('arrow')}</span></a>
      <a class="fcard" href="#/${S.me ? 'app/solveur/poutre' : 'inscription'}" style="background:linear-gradient(140deg,#0B4D33,#1E9B5E 60%,#58C28A)">${ic('target')}<b>Solveurs guidés</b><p>Dessinez une poutre : la plateforme vous fait trouver le degré d'hyperstaticité, les réactions, les diagrammes de V et M, puis les aciers et leur disposition. ${A.SOL ? A.SOL.L.length : 50} exercices types dans les ${A.catalog().length} matières, avec des valeurs nouvelles à chaque essai.</p><span class="go">S'entraîner ${ic('arrow')}</span></a>
      <a class="fcard" href="#/${S.me ? 'app/exercices' : 'inscription'}" style="background:linear-gradient(140deg,#2A1458,#6B2FA8 60%,#9B6BD6)">${ic('doc')}<b>Exercices, épreuves et annales</b><p>${A.EXO ? A.EXO.L.length : 120} exercices corrigés type BTS et Licence, des épreuves d'entraînement chronométrées et les sujets d'examen officiels publiés par la direction avec leurs corrigés.</p><span class="go">Voir les exercices ${ic('arrow')}</span></a>
    </div>
  </section>

  <section class="sect">
    <div class="sech"><div><span class="kick">Projets types</span><h2>Apprenez sur de vrais projets</h2></div><a class="btn b-line" href="#/construction">Voir les projets ${ic('arrow')}</a></div>
    <div class="pcards">${proj.map(p => `<a class="pcard" href="#/${S.me?'app/construction/projet/'+p.id:'construction'}"><div class="pv">${A.PLAN.thumb(p,{dark:true})}</div><div class="pb"><span class="pill p-or" style="justify-self:start">${esc(p.standing)}</span><b>${esc(p.titre)}</b><span class="sub">${esc(p.resume)}</span></div></a>`).join('')}</div>
  </section>

  ${A.livresHome ? A.livresHome() : ''}

  ${A.paywallOn() ? `<section class="sect"><div class="price-card"><div class="stack s8"><span class="kick">Tarif</span><h2>Accès complet : ${esc(A.prixTxt())}</h2><p class="muted" style="max-width:62ch">Le premier chapitre de chaque matière se lit gratuitement, sans compte. L'inscription débloque tous les chapitres, les exercices corrigés, les sujets d'examen, les quiz, l'atelier de dessin, le métré et le professeur IA. Paiement simple par ${['wave','mtn','orange','moov'].filter(k => (A.cfg().pay||{})[k]).map(k => ({wave:'Wave', mtn:'MTN Mobile Money', orange:'Orange Money', moov:'Moov Money'})[k]).join(', ') || 'Mobile Money'}${A.chwDispo && A.chwDispo('acces') ? ', ou en ligne par carte bancaire depuis n\'importe quel pays' : ''}.</p></div><div class="stack s8" style="justify-items:start">${A.promoAcces() ? `<div class="row nw" style="gap:8px">${A.promoOld(A.promoAcces()).replace('class="px-old"', 'class="px-old" style="font-size:20px"')}${A.promoTag(A.promoAcces())}${A.cfg().promoNom ? `<b class="px-urg">${esc(A.cfg().promoNom)}</b>` : ''}</div>` : ''}<b class="price-big">${F(A.cfg().formule === 'mensuel' ? A.cfg().prixMois : A.cfg().prixAcces)} <small>FCFA${A.cfg().formule === 'mensuel' ? ' / mois' : ''}</small></b>${A.promoUrg(A.promoAcces()) ? `<span class="px-urg">${ic('clock')} ${esc(A.promoUrg(A.promoAcces()))}</span>` : ''}${A.eq(A.cfg().formule === 'mensuel' ? A.cfg().prixMois : A.cfg().prixAcces) ? `<span class="sub">${esc(A.eq(A.cfg().formule === 'mensuel' ? A.cfg().prixMois : A.cfg().prixAcces))}</span>` : ''}${A.devSel()}<a class="btn b-pri b-lg" href="#/${S.me ? 'app/abonnement' : 'inscription'}">${S.me ? 'Activer mon accès' : 'Créer mon compte'} ${ic('arrow')}</a></div></div></section>` : ''}

  <section class="sect">
    <div class="sech"><div><span class="kick">Méthode</span><h2>Comment ça marche</h2></div></div>
    <ol class="how">
      <li><span class="n">1</span><b>Créez votre compte</b><p>En une minute, depuis votre téléphone ou votre ordinateur${A.paywallOn() ? `, puis activez votre accès : ${esc(A.prixCourt())}, par Wave ou Mobile Money` : ''}.</p></li>
      <li><span class="n">2</span><b>Suivez les cours</b><p>Chapitres courts, formules, exemples chiffrés et figures. Votre progression est enregistrée.</p></li>
      <li><span class="n">3</span><b>Testez-vous</b><p>Un quiz corrigé à la fin de chaque chapitre, et l'IA pour réexpliquer autrement.</p></li>
      <li><span class="n">4</span><b>Pratiquez</b><p>Dessinez des plans, faites le métré d'un projet et obtenez votre attestation par matière.</p></li>
    </ol>
  </section>

  <section class="sect"><div class="band"><div><h2>Prêt à bâtir vos compétences ?</h2><p>Rejoignez la plateforme et commencez par la matière de votre choix.</p></div><a class="btn b-lg" style="background:#fff;color:var(--or2)" href="#/${S.me?'app':'inscription'}">${S.me?'Mon espace':'Créer mon compte'} ${ic('arrow')}</a></div></section>
  </div>`;
}});

/* ---------- Catalogue ---------- */
let catQ = '', catG = '';
A.page('matieres', {space:'site', title:'Matières', render(){
  let list = A.catalog();
  if(catG) list = list.filter(m => m.groupe === catG);
  if(catQ){ const q = catQ.toLowerCase(); list = list.filter(m => (m.titre+' '+(m.resume||'')+' '+m.chapitres.map(c=>c.titre).join(' ')).toLowerCase().includes(q)); }
  return `<div class="wrap"><section class="sect">
   <div class="sech"><div><span class="kick">Catalogue</span><h2>Les matières du bâtiment</h2><p class="muted" style="margin-top:6px">Chaque matière contient des chapitres rédigés, des exemples et des quiz. Le premier chapitre est consultable sans compte.</p></div></div>
   <div class="toolbar"><label class="search">${ic('search')}<input id="catQ" placeholder="Rechercher une matière, un chapitre…" value="${esc(catQ)}"></label>
   <div class="chips"><button class="tab ${!catG?'on':''}" data-catg="">Toutes</button>${A.GROUPES.map(g=>`<button class="tab ${catG===g.id?'on':''}" data-catg="${g.id}">${esc(g.n)}</button>`).join('')}</div></div>
   ${list.length ? A.matGroups(list, m => A.matCard(m, {progress:!!S.me, href: m => S.me ? '#/app/matiere/'+m.id : '#/matiere/'+m.id})) : A.empty('search','Aucune matière ne correspond à votre recherche.')}
  </section></div>`;
}});
A.on('input', '#catQ', el => { catQ = el.value; A.refresh(); });
A.on('click', '[data-catg]', el => { catG = el.dataset.catg; A.refresh(); });

/* ---------- Matière (aperçu public) ---------- */
A.page('matiere/:id', {space:'site', title:p => (A.mat(p.id)||{}).titre || 'Matière', render(p){
  if(S.me){ location.replace('#/app/matiere/'+p.id); return null; }
  const m = A.mat(p.id); if(!m) return `<div class="wrap sect">${A.empty('book','Matière introuvable.')}</div>`;
  const pv = +A.cfg().preview || 0;
  return `<div class="wrap"><section class="sect">
   <a class="btn b-ghost b-sm" style="justify-self:start" href="#/matieres">${ic('back')}Toutes les matières</a>
   ${A.matHead(m)}
   <div class="cols"><div class="stack">
    <h3 style="font-size:18px">Trois niveaux, à suivre dans l'ordre</h3>
    ${A.matLevels(m, {}).map(L => `<div class="card lvbox" style="--lc:${L.c}"><div class="row between"><b style="color:${L.c}">${'●'.repeat(L.id)} ${L.n}</b><span class="sub">${L.total} chapitres · ${Math.max(1, Math.round(L.min/60))} h</span></div><p class="sub" style="margin:2px 0 8px">${L.d}</p><div class="chlist">${L.ch.map((c,i) => A.isFree(c.id)
      ? `<a class="chap" href="#/cours/${c.id}"><span class="n">${i+1}</span><span><b>${esc(c.titre)}</b><span class="sub">${c.duree||20} min · aperçu gratuit</span></span><span class="pill p-ok">Ouvert</span></a>`
      : `<a class="chap locked" href="#/inscription"><span class="n">${i+1}</span><span><b>${esc(c.titre)}</b><span class="sub">${c.duree||20} min · ${A.nq(c)} questions${A.nex(c) ? ` · ${A.nex(c)} exercices corrigés` : ''}</span></span>${ic('lock')}</a>`).join('') || '<p class="sub">Chapitres en préparation.</p>'}</div></div>`).join('')}
   </div><div class="stack">
    ${m.objectifs?`<div class="card"><h3>Objectifs</h3><ul style="margin:0;padding-left:18px;display:grid;gap:6px">${m.objectifs.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></div>`:''}
    <div class="card" style="background:var(--navy);color:#fff;border:0"><h3 style="color:#fff">${A.paywallOn() ? 'Accès complet : ' + esc(A.prixTxt()) : 'Accès complet gratuit'}</h3><p style="color:#B7C3D3;margin-bottom:12px">Créez votre compte pour lire tous les chapitres, faire les exercices et les sujets d'examen corrigés, passer les quiz, suivre votre progression et poser vos questions à l'IA.</p><a class="btn b-pri b-full" href="#/inscription">Créer mon compte ${ic('arrow')}</a></div>
   </div></div>
  </section></div>`;
}});
A.matHead = m => `<div class="mhead" style="background:linear-gradient(130deg,${esc(m.couleur||'#22344D')},#0E1A2B 140%)"><span class="ic">${ic(m.icone||'book')}</span><div><span class="kick" style="color:rgba(255,255,255,.75)">${esc((A.GROUPES.find(g=>g.id===m.groupe)||{}).n||'')}</span><h2>${esc(m.titre)}</h2><p>${esc(m.resume||'')}</p></div><div class="stack s8" style="text-align:right"><span class="pill" style="background:rgba(255,255,255,.15);color:#fff">${m.chapitres.length} chapitres · 3 niveaux</span><span class="pill" style="background:rgba(255,255,255,.15);color:#fff">${A.NIVEAUX.map(N=>'●'.repeat(N.id)+' '+N.n).join(' → ')}</span></div></div>`;

/* ---------- Cours (aperçu public) ---------- */
A.page('cours/:id', {space:'site', title:p => ((A.chap(p.id)||{}).c||{}).titre || 'Cours', render(p){
  if(S.me){ location.replace('#/app/cours/'+p.id); return null; }
  const f0 = A.chap(p.id); if(!f0) return `<div class="wrap sect">${A.empty('book','Chapitre introuvable.')}</div>`;
  const idx = f0.m.chapitres.findIndex(c => c.id === p.id);
  const lockedMsg = `<div class="wrap sect"><div class="card stack" style="max-width:560px;margin:0 auto;text-align:center;justify-items:center">${ic('lock')}<h2>Chapitre réservé aux inscrits</h2><p class="muted">${A.paywallOn() ? `L'inscription, ${esc(A.prixCourt())}, donne accès à tous les cours, exercices, sujets d'examen, quiz et outils.` : 'L\'inscription est gratuite et donne accès à tous les cours, quiz et outils.'}</p><a class="btn b-pri" href="#/inscription">Créer mon compte ${ic('arrow')}</a></div></div>`;
  if(!A.isFree(p.id)) return lockedMsg;
  if(!A.chapReady(f0)) return `<div class="wrap sect">${A.chapLoading()}</div>`;
  if(A.chap(p.id).c.verrou) return lockedMsg;
  const f = A.chap(p.id), md = A.md(f.c.contenu);
  return `<div class="wrap"><section class="sect" style="max-width:900px;margin:0 auto">
   <a class="btn b-ghost b-sm" style="justify-self:start" href="#/matiere/${f.m.id}">${ic('back')}${esc(f.m.titre)}</a>
   <article class="lesson"><span class="kick">Chapitre ${idx+1} · ${f.c.duree||20} min</span><h1 style="font-size:clamp(24px,3vw,34px);margin:6px 0 18px">${esc(f.c.titre)}</h1>${md.html}</article>
   ${A.exosHtml(f.c)}
   <div class="band"><div><h2>La suite vous attend</h2><p>${A.paywallOn() ? `Quiz corrigé, sujets d'examen, chapitres suivants, assistant IA : tout est inclus dans l'inscription : ${esc(A.prixCourt())}.` : 'Quiz corrigé, chapitres suivants, assistant IA : tout est gratuit avec un compte.'}</p></div><a class="btn b-lg" style="background:#fff;color:var(--or2)" href="#/inscription">S'inscrire ${ic('arrow')}</a></div>
  </section></div>`;
}});

/* ---------- Construction (aperçu public) ---------- */
A.page('construction', {space:'site', title:'Construction de A à Z', render(){
  const Z = A.AZ || {etapes:[], projets:[], elements:[]};
  if(S.me){ location.replace('#/app/construction'); return null; }
  return `<div class="wrap"><section class="sect">
   <div class="sech"><div><span class="kick">Parcours pratique</span><h2>Construire une maison de A à Z</h2><p class="muted" style="margin-top:6px;max-width:70ch">Chaque étape du chantier est reliée aux matières qui interviennent : topographie pour l'implantation, géotechnique pour les fondations, béton armé pour les poteaux et les dalles, métré et économie pour le devis.</p></div><a class="btn b-pri" href="#/inscription">Accéder au parcours complet ${ic('arrow')}</a></div>
   <div class="cols"><div class="timeline">${Z.etapes.map((e,i) => `<a class="tstep" href="#/inscription"><span class="n">${i+1}</span><span class="c"><b>${esc(e.titre)}</b><span class="sub">${esc(e.resume)}</span><span class="mtags">${(e.matieres||[]).map(x=>{const m=A.mat(x);return m?`<span class="mtag">${esc(m.court||m.titre)}</span>`:''}).join('')}</span></span></a>`).join('')}</div>
   <div class="stack"><h3 style="font-size:18px">Projets étudiés</h3>${Z.projets.map(p=>`<a class="pcard" href="#/inscription"><div class="pv">${A.PLAN.thumb(p,{dark:true})}</div><div class="pb"><span class="pill p-or" style="justify-self:start">${esc(p.standing)}</span><b>${esc(p.titre)}</b><span class="sub">${esc(p.resume)}</span></div></a>`).join('')}</div></div>
  </section></div>`;
}});

/* ---------- Outils (présentation) ---------- */
A.page('outils', {space:'site', title:'Outils', render(){
  return `<div class="wrap"><section class="sect">
   <div class="sech"><div><span class="kick">Outils</span><h2>Dessin de plans, métré et assistant IA</h2></div></div>
   <div class="cols eq">
    <div class="card stack"><h3>${ic('compass')} Atelier de dessin</h3><div class="bp" style="background:#0B1524">${A.PLAN.thumb((A.AZ.projets||[])[0],{dark:true,labels:true})}</div>
      <p class="muted">Un logiciel de dessin dans votre navigateur. Tapez les commandes comme sur AutoCAD : <span class="mono">MUR</span>, <span class="mono">LIGNE</span>, <span class="mono">PORTE</span>, <span class="mono">FENETRE</span>, <span class="mono">COTE</span>, <span class="mono">@4,0</span> pour une longueur de 4 m… Accrochage, mode ortho, calques, annuler/rétablir, export PNG/SVG.</p></div>
    <div class="stack">
     <div class="card stack"><h3>${ic('calc')} Métré & devis estimatif</h3><p class="muted">Avant-métré par lots (terrassement, béton armé, maçonnerie, enduits, revêtements, peinture…), sous-détail des matériaux (sacs de ciment, sable, gravier, acier), devis quantitatif et estimatif en FCFA avec TVA, et métré automatique de votre plan dessiné.</p></div>
     <div class="card stack"><h3>${ic('spark')} Professeur IA</h3><p class="muted">Posez vos questions à toute heure : « comment calculer le ferraillage d'une poutre de 5 m ? », « explique-moi l'essai Proctor ». L'IA répond en français, avec les formules, les normes et des exemples adaptés aux chantiers locaux.</p></div>
     <a class="btn b-pri b-lg" href="#/${S.me?'app/atelier':'inscription'}">${S.me?'Ouvrir l\'atelier':'Créer mon compte'} ${ic('arrow')}</a>
    </div>
   </div></section></div>`;
}});

/* ---------- À propos ---------- */
A.page('a-propos', {space:'site', title:'À propos', render(){
  const c = A.cfg();
  const wa = c.whatsapp ? String(c.whatsapp).replace(/\D/g,'') : '';
  return `<div class="wrap"><section class="sect" style="max-width:900px">
   <span class="kick">À propos</span><h2 style="font-size:clamp(26px,3vw,36px)">${esc(A.brandText())}</h2><p class="kick" style="margin-top:-6px">${esc(c.tagline)}</p>
   <p style="font-size:17px;line-height:1.7">${esc(c.about)}</p>
   <div class="g2">
    <div class="card stack"><h3>${ic('target')} Notre mission</h3><p class="muted">Rendre accessible à tous la connaissance du bâtiment : comprendre pourquoi on fait les choses sur un chantier, pas seulement comment. Chaque matière est reliée à la pratique, du calcul à la mise en œuvre.</p></div>
    <div class="card stack"><h3>${ic('crown')} Direction</h3><p class="muted">Plateforme fondée et dirigée par <b style="color:var(--ink)">${esc(c.ceo)}</b>, PDG.</p>
     <div class="stack s8">${c.city?`<span class="row">${ic('pin')}${esc(c.city)}</span>`:''}${c.phone?`<span class="row">${ic('phone')}${esc(c.phone)}</span>`:''}${c.email?`<a class="row" href="mailto:${esc(c.email)}">${ic('mail')}${esc(c.email)}</a>`:''}${wa?`<a class="btn b-ok b-sm" style="justify-self:start" target="_blank" rel="noopener" href="https://wa.me/${esc(wa.replace(/^0/,'2250'))}">${ic('whatsapp')}Écrire sur WhatsApp</a>`:''}</div></div>
   </div></section></div>`;
}});

/* =====================================================================
   Connexion / inscription
   ===================================================================== */
const authHero = () => `<div class="a-hero">${A.lockup(true)}<div class="stack s20" style="margin-top:auto;margin-bottom:auto"><h1>Le bâtiment s'apprend <em>pas à pas.</em></h1><p>Un seul compte pour tous les cours, les quiz, l'atelier de dessin, le métré et l'assistant IA.</p>
 <ul><li>${ic('check')}<span>${A.catalog().length} matières, du niveau bac au niveau ingénieur</span></li><li>${ic('check')}<span>Une maison construite de A à Z avec les plans d'exécution</span></li><li>${ic('check')}<span>Des exercices corrigés pas à pas et la résolution de vos exercices en photo</span></li><li>${ic('check')}<span>Votre progression enregistrée, sur téléphone comme sur ordinateur</span></li><li>${ic('check')}<span>Une attestation pour chaque matière terminée</span></li></ul></div>
 <a href="#/" class="sub" style="color:#7F93AA;text-decoration:none">${ic('back')} Retour au site</a></div>`;

A.page('connexion', {space:'bare', title:'Connexion', render(){
  if(S.me) { location.replace('#/app'); return null; }
  return `<div class="auth">${authHero()}<div class="a-side">
   <div class="stack s8"><span class="kick">Bon retour</span><h2>Se connecter</h2><p class="muted">Pas encore de compte ? <a href="#/inscription" style="color:var(--or2);font-weight:600">Inscrivez-vous</a></p></div>
   <form id="fLogin" class="stack">
    <label class="fld"><span>E-mail</span><input class="inp" id="lgEmail" type="email" autocomplete="username" required></label>
    <label class="fld"><span>Mot de passe</span><input class="inp" id="lgPw" type="password" autocomplete="current-password" required></label>
    <button class="btn b-pri b-lg b-full">Se connecter ${ic('arrow')}</button>
    <button type="button" class="btn b-ghost b-sm" style="justify-self:start" data-act="pwforgot">Mot de passe oublié ?</button>
   </form>
   ${S.panne === 'bibliotheque' ? `<div class="note bad">${ic('alert')}<span>Connexion au serveur impossible pour le moment : votre compte n'est pas perdu. Vérifiez votre connexion Internet puis <button class="btn b-xs b-line" type="button" data-act="recharger">réessayez</button>.</span></div>`
     : S.mode==='local'?`<div class="note info">${ic('info')}<span>Mode démonstration : créez un compte de test, il restera dans ce navigateur.</span></div>`:''}
  </div></div>`;
}});
A.on('submit', '#fLogin', async () => {
  const b = $('#fLogin button'); b.disabled = true;
  const r = await A.db.signIn(A.val('lgEmail'), A.val('lgPw'));
  b.disabled = false;
  if(!r.ok){ toast(r.msg, 'lock'); return; }
  toast('Bienvenue ' + ((S.me.data||{}).name||'').split(' ')[0]);
  const next = A.ss.get('next'); A.ss.del('next');
  A.go(next && next.startsWith('#/app') ? next : '#/app');
});

/* lien d'invitation (…#/inscription?parrain=CODE) : le code est gardé jusqu'à la création du compte */
const prendreParrain = () => { const q = String(A.query().get('parrain') || '').trim().toUpperCase(); if(/^[A-Z0-9]{4,12}$/.test(q)) A.ls.set('parrain', q);
  const e = String(A.query().get('essai') || '').trim().toUpperCase(); if(/^[A-Z0-9_-]{3,30}$/.test(e)) A.ls.set('essai', e); };   // lien publicitaire …?essai=CODE
window.addEventListener('hashchange', prendreParrain); prendreParrain();

A.page('inscription', {space:'bare', title:'Inscription', render(){
  prendreParrain();   // le routeur affiche la page avant les autres écouteurs de hashchange
  if(S.me){ location.replace(A.ls.get('parrain', '') ? '#/app/parrainage' : '#/app'); return null; }
  const c = A.cfg(), parrain = A.ls.get('parrain', ''), E = c.essaiGratuit || {}, essai = A.ls.get('essai', '');
  if(c.openSignup === false) return `<div class="auth">${authHero()}<div class="a-side"><h2>Inscriptions fermées</h2><p class="muted">Les inscriptions sont momentanément fermées. Revenez bientôt ou contactez la direction.</p><a class="btn b-line" href="#/connexion">J'ai déjà un compte</a></div></div>`;
  return `<div class="auth">${authHero()}<div class="a-side">
   <div class="stack s8"><span class="kick">${A.paywallOn() ? 'Inscription' : 'Gratuit'}</span><h2>Créer mon compte</h2><p class="muted">Déjà inscrit ? <a href="#/connexion" style="color:var(--or2);font-weight:600">Connectez-vous</a></p>${A.paywallOn() ? `<div class="note info">${ic('coins')}<span>Accès complet : <b>${esc(A.prixTxt())}</b>${A.promoAcces() ? ` au lieu de ${A.promoOld(A.promoAcces())} ${A.promoTag(A.promoAcces())}` : ''}, par ${['wave','mtn','orange','moov'].filter(k => (c.pay||{})[k]).map(k => ({wave:'Wave', mtn:'MTN Mobile Money', orange:'Orange Money', moov:'Moov Money'})[k]).join(' ou ') || 'Mobile Money'}. ${A.chwDispo && A.chwDispo('acces') ? ' Depuis l\'étranger : paiement en ligne par carte bancaire, accès immédiat.' : ''} Après la création du compte, une page vous indique comment payer.</span></div>` : ''}</div>
   <form id="fSignup" class="stack">
    <label class="fld"><span>Nom et prénoms</span><input class="inp" id="suName" autocomplete="name" required></label>
    <div class="g2"><label class="fld"><span>E-mail</span><input class="inp" id="suEmail" type="email" autocomplete="email" value="${esc(A.query().get('email') || '')}" required></label><label class="fld"><span>Téléphone (WhatsApp)</span><input class="inp" id="suPhone" inputmode="tel" autocomplete="tel"></label></div>
    <div class="g2"><label class="fld"><span>Ville</span><input class="inp" id="suCity" placeholder="Ex. Abidjan"></label><label class="fld"><span>Vous êtes</span><select class="inp" id="suProfil">${A.PROFILS.map(x=>`<option>${esc(x)}</option>`).join('')}</select></label></div>
    <div class="g2"><label class="fld"><span>Mot de passe (8 caractères min.)</span><input class="inp" id="suPw" type="password" autocomplete="new-password" required></label><label class="fld"><span>Confirmer</span><input class="inp" id="suPw2" type="password" autocomplete="new-password" required></label></div>
    ${E.actif && E.pourTous ? `<div class="note ok">${ic('award')}<span><b>${+E.jours || 3} jours gratuits offerts</b> dès la création de votre compte : tout est ouvert.</span></div>`
      : E.actif ? `<label class="fld"><span>Code d'essai gratuit (facultatif)</span><input class="inp mono" id="suEssai" maxlength="30" autocapitalize="characters" autocomplete="off" value="${esc(essai)}" placeholder="Code reçu (affiche, WhatsApp, TikTok…)"></label>${essai ? `<p class="sub" style="margin:-6px 0 0">${ic('award')} Votre code donne <b>${+E.jours || 3} jours gratuits</b> : tout est ouvert dès la création du compte.</p>` : ''}` : ''}
    <label class="fld"><span>Code parrain (facultatif)</span><input class="inp mono" id="suParrain" maxlength="12" autocapitalize="characters" autocomplete="off" value="${esc(parrain)}" placeholder="Code d'un ami déjà inscrit"></label>${parrain ? `<p class="sub" style="margin:-6px 0 0">${ic('users')} Un ami vous a invité : son code est déjà rempli.</p>` : ''}
    <label class="check"><input type="checkbox" id="suOk" required><span class="sub">J'accepte que ma progression et mes connexions soient enregistrées pour le suivi pédagogique.</span></label>
    <button class="btn b-pri b-lg b-full">Créer mon compte ${ic('arrow')}</button>
   </form></div></div>`;
}});
const pwOk = (a, b) => { if(!a || a.length < 8){ toast("Mot de passe : 8 caractères minimum", "x"); return false; } if(a !== b){ toast('Les deux mots de passe ne correspondent pas', 'x'); return false; } return true; };
A.pwOk = pwOk;
A.on('submit', '#fSignup', async () => {
  const name = A.val('suName').trim(), email = A.val('suEmail').trim();
  if(name.length < 3){ toast('Indiquez votre nom complet', 'x'); return; }
  if(!A.emailOk(email)){ toast('E-mail invalide', 'x'); return; }
  if(!pwOk(A.val('suPw'), A.val('suPw2'))) return;
  const b = $('#fSignup button'); b.disabled = true;
  const r = await A.db.signUp({email, password:A.val('suPw'), name, phone:A.val('suPhone'), city:A.val('suCity'), profil:A.val('suProfil'), parrain:A.val('suParrain'), essai:$('#suEssai') ? A.val('suEssai') : ''});
  b.disabled = false;
  if(r.ok || r.confirm){ A.ls.del('parrain'); A.ls.del('essai'); }
  if(!r.ok){ toast(r.msg, r.confirm ? 'mail' : 'x'); if(r.confirm) A.go('#/connexion'); return; }
  if(r.essai){ toast(`Essai gratuit activé jusqu'au ${new Date(r.essai).toLocaleDateString('fr-FR', {day:'numeric', month:'long'})} : profitez de tout !`, 'award'); A.go('#/app'); return; }
  if($('#suEssai') && A.val('suEssai').trim()) toast('Compte créé, mais ce code d\'essai n\'est pas valable (vous pourrez en saisir un autre dans « Mon abonnement »)', 'alert');
  else toast('Compte créé. Bienvenue !');
  const next = A.ss.get('next'); A.ss.del('next');
  A.go(next && next.startsWith('#/app/livre') ? next : A.hasAccess() ? '#/app' : '#/app/abonnement');
});

/* mot de passe oublié / nouveau */
A.on('click', '[data-act="pwforgot"]', () => A.win({title:'Mot de passe oublié', body:`<p class="muted">Saisissez votre e-mail : vous recevrez un lien pour choisir un nouveau mot de passe.</p><label class="fld"><span>E-mail</span><input class="inp" id="pfEmail" type="email" value="${esc(A.val('lgEmail')||A.val('dEmail'))}"></label>`, foot:`<button class="btn b-pri" data-act="pwsend">${ic('mail')}Envoyer le lien</button>`}));
A.on('click', '[data-act="pwsend"]', async () => { const e = A.val('pfEmail'); if(!A.emailOk(e)){ toast('E-mail invalide','x'); return; } const r = await A.db.resetPw(e); A.closeWin(); toast(r.ok ? 'Lien envoyé. Vérifiez votre boîte e-mail.' : r.msg, r.ok ? 'mail' : 'x'); });
A.openPwNew = () => A.win({title:'Nouveau mot de passe', body:`<div class="g2"><label class="fld"><span>Nouveau mot de passe</span><input class="inp" id="pnPw" type="password" autocomplete="new-password"></label><label class="fld"><span>Confirmer</span><input class="inp" id="pnPw2" type="password" autocomplete="new-password"></label></div>`, foot:`<button class="btn b-pri" data-act="pwsave">${ic('check')}Enregistrer</button>`});
A.on('click', '[data-act="pwsave"]', async () => { if(!pwOk(A.val('pnPw'), A.val('pnPw2'))) return; const r = await A.db.newPw(A.val('pnPw')); A.closeWin(); toast(r.ok ? 'Mot de passe modifié' : r.msg, r.ok ? 'lock' : 'x'); });

/* =====================================================================
   Espace direction (PDG)
   ===================================================================== */
A.page('direction', {space:'bare', title:'Espace direction', render(){
  const c = A.cfg();
  let body;
  if(S.me && S.me.isAdmin){
    body = `<p>Connecté : <b style="color:#fff">${esc(S.me.email)}</b></p><a class="btn b-amber b-lg" href="#/admin">${ic('crown')}Ouvrir l'espace PDG ${ic('arrow')}</a><button class="btn b-sm" style="background:transparent;color:#9FB0C4;justify-self:start" data-act="logout">${ic('logout')}Se déconnecter</button>`;
  }else if(S.panne === 'bibliotheque'){
    body = `<p>Connexion au serveur impossible : la bibliothèque Supabase (fichier vendor/supabase.js) ne s'est pas chargée sur cet appareil. Vérifiez la connexion Internet puis réessayez.</p><button class="btn b-amber b-lg" data-act="recharger">${ic('refresh')}Réessayer</button>`;
  }else if(S.mode === 'local'){
    body = `<p>Mode démonstration : l'espace PDG s'ouvre sans mot de passe. Une fois Supabase configuré, il sera protégé par votre e-mail et votre mot de passe.</p><button class="btn b-amber b-lg" data-act="demoadmin">${ic('crown')}Ouvrir l'espace PDG (démo) ${ic('arrow')}</button>`;
  }else{
    body = `<form id="fDir" class="stack">
      <label class="fld"><span style="color:#9FB0C4">E-mail</span><input class="inp" id="dEmail" type="email" autocomplete="username" required></label>
      <label class="fld"><span style="color:#9FB0C4">Mot de passe</span><input class="inp" id="dPw" type="password" autocomplete="current-password" required></label>
      <button class="btn b-amber b-lg">Se connecter ${ic('arrow')}</button>
      <button type="button" class="btn b-sm" style="background:transparent;color:var(--amber2);justify-self:start" data-act="pwforgot">Mot de passe oublié ?</button>
      ${!S.adminExists?`<button type="button" class="btn b-sm" style="background:#22344D;color:#fff;justify-self:start" data-act="firstadmin">${ic('crown')}Première utilisation : créer le compte PDG</button>`:''}
    </form>`;
  }
  return `<div class="dir"><div class="dir-in">
   <a class="btn b-sm" style="justify-self:start;background:rgba(255,255,255,.08);color:#C8D3E0" href="#/">${ic('back')}Retour au site</a>
   ${A.lockup(true, 'Espace direction')}
   <div><h1 style="font-size:clamp(28px,4vw,40px)">Administration</h1><p style="color:#9FB0C4;margin-top:8px">Réservé au PDG et aux administrateurs de ${esc(A.brandText())}. Les apprenants n'ont pas accès à cette partie.</p></div>
   <div class="dcard"><span class="row" style="font-family:var(--fd);font-size:19px;font-weight:700">${ic('crown')}Direction</span>${body}</div>
  </div></div>`;
}});
A.on('click', '[data-act="demoadmin"]', async () => { await A.db.demoAdmin(); toast('Espace PDG ouvert'); A.go('#/admin'); });
A.on('submit', '#fDir', async () => {
  const r = await A.db.signIn(A.val('dEmail'), A.val('dPw'));
  if(!r.ok){ toast(r.msg, 'lock'); return; }
  if(S.me && S.me.isAdmin){ toast('Bienvenue ' + ((S.me.data||{}).name||'')); A.go('#/admin'); }
  else { toast('Ce compte n\'a pas accès à la direction', 'lock'); await A.db.signOut(); A.refresh(); }
});
A.on('click', '[data-act="firstadmin"]', () => A.win({title:'Créer le compte PDG', body:`<div class="note ok">${ic('crown')}<span>Ce bouton n'existe que tant qu'aucun PDG n'est enregistré. Le premier compte créé devient administrateur principal.</span></div>
 <label class="fld"><span>Nom</span><input class="inp" id="faName" value="${esc(A.cfg().ceo)}"></label><label class="fld"><span>E-mail</span><input class="inp" id="faEmail" type="email" autocomplete="username"></label>
 <div class="g2"><label class="fld"><span>Mot de passe (8 caractères min.)</span><input class="inp" id="faPw" type="password" autocomplete="new-password"></label><label class="fld"><span>Confirmer</span><input class="inp" id="faPw2" type="password" autocomplete="new-password"></label></div>`,
 foot:`<button class="btn b-amber" data-act="dofirstadmin">${ic('check')}Créer mon compte PDG</button>`}));
A.on('click', '[data-act="dofirstadmin"]', async () => {
  const email = A.val('faEmail'), pw = A.val('faPw');
  if(!A.emailOk(email)){ toast('E-mail invalide','x'); return; }
  if(!pwOk(pw, A.val('faPw2'))) return;
  const r = await A.db.claimFirstAdmin(A.val('faName').trim() || 'PDG', email, pw);
  if(!r.ok){ toast(r.msg, r.confirm ? 'mail' : 'lock'); return; }
  A.closeWin(); toast('Compte PDG créé'); A.go('#/admin');
});
})();
