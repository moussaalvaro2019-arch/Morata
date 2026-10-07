/* =====================================================================
   ACCÈS PAYANT ET FORMULES
   - Inscription (paiement unique) : 31 jours tout compris (essai Premium), puis formule
     « Inscrit » : tous les cours, contenus réduits (exercices, quiz, sujets).
   - Abonnements Basic et Premium (31 jours) : plus d'exercices, solveurs, sujets, métré
     (Basic) ; tout, dont l'atelier de dessin et l'assistant IA (Premium).
   - Une fonctionnalité non comprise reste visible, avec l'offre qui la débloque.
   - Apprenant : page « Mon abonnement », déclaration du paiement Wave / Mobile Money
   - Partout : écran « Activez votre accès » pour les parties réservées
   - PDG : validation des paiements, activation / désactivation des accès, réglages
   Deux façons de payer :
   - Mobile Money (Wave, MTN…) sur le numéro de la direction, qui vérifie la réception
     (SMS) puis valide en un clic ;
   - paiement en ligne Chariow (carte bancaire, Mobile Money d'autres pays…), pour les
     apprenants de partout : Chariow prévient la plateforme (webhook) et l'accès s'ouvre
     tout seul, sans validation (la direction garde la main : activer, désactiver, offrir).
   Les prix sont en FCFA ; chacun voit l'équivalent dans la devise de son choix.
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S, fd, fdt, ago, ts, now} = A;
const DAY = 86400000;
const MOYENS = [['wave','Wave','#1DC4FF'],['mtn','MTN Mobile Money','#FFCB05'],['orange','Orange Money','#FF7900'],['moov','Moov Money','#0066B3'],['djamo','Djamo','#111827']];
const moyenN = k => k === 'chariow' ? 'Paiement en ligne (Chariow)' : (MOYENS.find(m => m[0] === k) || [k, k || 'Autre'])[1];
const telFmt = t => String(t || '').replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1 ').trim();
const waLink = (num, txt) => { const d = String(num || '').replace(/\D/g, ''); return d ? `https://wa.me/${d.length <= 10 ? '225' + d : d}${txt ? '?text=' + encodeURIComponent(txt) : ''}` : ''; };
const moyensActifs = () => { const p = A.cfg().pay || {}; return MOYENS.filter(m => String(p[m[0]] || '').trim()); };
const montant = () => { const c = A.cfg(); return c.formule === 'mensuel' ? +c.prixMois : +c.prixAcces; };
const prixPlan = plan => +(plan === 'premium' ? A.cfg().prixPremium : A.cfg().prixBasic) || 0;
const pending = () => (S.pay || []).filter(x => x.statut === 'en_attente' && ['acces', 'abo'].includes(x.objet || 'acces'));
const objetTxt = x => x.objet === 'livre' ? 'Livre : ' + (((S.livres || []).find(l => l.id === x.livre) || {}).titre || x.livre || '?') : x.objet === 'abo' ? 'Abonnement ' + (x.formule === 'premium' ? 'Premium' : 'Basic') : x.formule === 'mensuel' ? 'Abonnement d\'un mois' : 'Inscription';
const statutPill = s => s === 'valide' ? '<span class="pill p-ok dot">Validé</span>' : s === 'refuse' ? '<span class="pill p-bad dot">Refusé</span>' : s === 'rembourse' ? '<span class="pill p-mute dot">Remboursé</span>' : '<span class="pill p-warn dot">En attente</span>';
A.statutPill = statutPill; A.moyenN = moyenN; A.telFmt = telFmt; A.waLink = waLink; A.moyensActifs = moyensActifs;
/* montant payé dans une autre devise que le FCFA (paiement en ligne) */
const devPaye = x => x.devise && x.devise !== 'XOF' && x.montant_devise ? `<div class="small faint">${esc(A.money(x.montant_devise * A.taux(x.devise), x.devise))} payés</div>` : '';
A.devPaye = devPaye;

/* =====================================================================
   PAIEMENT EN LIGNE (CHARIOW) : commun à l'inscription et aux livres
   ===================================================================== */
const PAYS = [['CI',"Côte d'Ivoire",'XOF'],['SN','Sénégal','XOF'],['ML','Mali','XOF'],['BF','Burkina Faso','XOF'],['BJ','Bénin','XOF'],['TG','Togo','XOF'],['NE','Niger','XOF'],['GW','Guinée-Bissau','XOF'],
  ['GN','Guinée','GNF'],['GH','Ghana','GHS'],['NG','Nigeria','NGN'],['LR','Liberia','LRD'],['SL','Sierra Leone','SLE'],['GM','Gambie','GMD'],['MR','Mauritanie','MRU'],['CV','Cap-Vert','CVE'],
  ['CM','Cameroun','XAF'],['GA','Gabon','XAF'],['CG','Congo','XAF'],['TD','Tchad','XAF'],['CF','Centrafrique','XAF'],['GQ','Guinée équatoriale','XAF'],['CD','RD Congo','USD'],['MA','Maroc','EUR'],
  ['FR','France','EUR'],['BE','Belgique','EUR'],['CH','Suisse','EUR'],['DE','Allemagne','EUR'],['IT','Italie','EUR'],['ES','Espagne','EUR'],['GB','Royaume-Uni','GBP'],['CA','Canada','CAD'],['US','États-Unis','USD']];
/* ce qui est vendu sur Chariow pour l'accès (inscription ou mois) ou pour un livre */
const chwConf = (objet, livre) => {
  if(objet === 'livre'){ const l = (S.livres || []).find(x => x.id === livre) || {}; return {lien:String(l.lienAchat || '').trim(), prd:String(l.prdChariow || '').trim()}; }
  const ch = A.cfg().chariow || {}, m = A.cfg().formule === 'mensuel';
  if(objet === 'abo'){ const k = livre === 'premium' ? 'Premium' : 'Basic'; return {lien:String(ch['lien' + k] || '').trim(), prd:String(ch['prd' + k] || '').trim()}; }
  return {lien:String((m ? ch.lienMois : ch.lienAcces) || '').trim(), prd:String((m ? ch.prdMois : ch.prdAcces) || '').trim()};
};
A.chwDispo = (objet, livre) => { const c = chwConf(objet, livre); return S.mode === 'local' || !!(c.prd || /^https:\/\//.test(c.lien)); };
let chwPays = '';
A.chwBox = (objet, livre, fcfa, promo) => {
  const c = chwConf(objet, livre), lienSeul = S.mode !== 'local' && !c.prd;
  if(!chwPays){
    const t = String((S.me && S.me.data && S.me.data.phone) || '').replace(/\s/g, ''), d0 = A.devise();
    chwPays = /^(\+|00)33/.test(t) ? 'FR' : /^(\+|00)32/.test(t) ? 'BE' : /^(\+|00)1/.test(t) ? 'US' : /^(\+|00)44/.test(t) ? 'GB' : /^(\+|00)221/.test(t) ? 'SN' : /^(\+|00)237/.test(t) ? 'CM' : /^(\+|00)233/.test(t) ? 'GH' : /^(\+|00)234/.test(t) ? 'NG' : /^(\+|00)224/.test(t) ? 'GN' : ({EUR:'FR', USD:'US', CAD:'CA', GBP:'GB', XAF:'CM', GHS:'GH', NGN:'NG', GNF:'GN', SLE:'SL', LRD:'LR', GMD:'GM', MRU:'MR', CVE:'CV'})[d0] || 'CI';
    const p = PAYS.find(x => x[0] === chwPays);   // devise du pays, si le visiteur n'en a pas encore choisi
    if(p && A.ls.get('devise', null) == null && A.devisesOn().some(d => d.c === p[2])) A.setDevise(p[2]);
  }
  const dev = A.devise(), D = A.devInfo(dev);
  const montant = A.money(fcfa, dev);
  return `<div class="stack chw">
   <ul class="chw-list">
    <li>${ic('card')}<span><b>Carte bancaire</b> (Visa, Mastercard), <b>Mobile Money</b> de nombreux pays d'Afrique (Orange, MTN, Moov, Wave…) et les autres moyens proposés par Chariow selon votre pays.</span></li>
    <li>${ic('zap')}<span><b>Accès immédiat</b> : dès que Chariow confirme le paiement, ${objet === 'livre' ? 'le livre apparaît dans votre espace' : objet === 'abo' ? 'votre abonnement s\'active' : 'votre accès s\'ouvre'} tout seul, sans attendre la direction.</span></li>
    <li>${ic('mail')}<span>Reçu et confirmation envoyés à <b>${esc(S.me ? S.me.email : '')}</b> : le paiement est relié à ce compte.</span></li>
   </ul>
   ${lienSeul ? '' : `<div class="g3"><label class="fld"><span>Pays</span><select class="inp" id="chwPays">${PAYS.map(p => `<option value="${p[0]}" ${p[0] === chwPays ? 'selected' : ''}>${esc(p[1])}</option>`).join('')}</select></label>
    <label class="fld"><span>Téléphone</span><input class="inp" id="chwTel" type="tel" inputmode="tel" value="${esc((S.me && S.me.data && S.me.data.phone) || '')}" placeholder="numéro avec lequel vous payez"></label>
    <label class="fld"><span>Devise de paiement</span><select class="inp" data-devsel>${A.devisesOn().map(d => `<option value="${d.c}" ${d.c === dev ? 'selected' : ''}>${d.c} · ${esc(d.n)}</option>`).join('')}</select></label></div>`}
   <div class="chw-total"><span>À payer</span><b>${esc(montant)}</b>${promo ? `<span><s class="px-old">${esc(A.money(promo.old, dev))}</s> ${A.promoTag(promo)}</span>` : ''}${D.s === 'FCFA' ? '' : `<span class="sub">soit ${F(fcfa)} FCFA · taux indicatif, Chariow affiche le montant exact</span>`}</div>
   <div class="row">${lienSeul
      ? `<a class="btn b-pri b-lg" href="${esc(c.lien)}" target="_blank" rel="noopener" data-chwlien="${objet}" data-livre="${esc(livre || '')}">${ic('card')}Payer en ligne sur Chariow ${ic('arrow')}</a>`
      : `<button class="btn b-pri b-lg" data-chwpay="${objet}" data-livre="${esc(livre || '')}">${ic('card')}Payer ${esc(montant)} en ligne</button>`}</div>
   <p class="sub">${S.mode === 'local' ? '<b>Démonstration</b> : le paiement est simulé, pour voir l\'accès s\'ouvrir automatiquement. ' : ''}${S.mode === 'local' ? '' : lienSeul ? `Sur la page Chariow, <b>utilisez l'adresse ${esc(S.me ? S.me.email : '')}</b> : c'est elle qui relie le paiement à votre compte. Revenez ensuite sur cette page.` : 'Vous allez être dirigé vers la page de paiement sécurisée de Chariow, puis ramené ici.'}</p>
  </div>`;
};
A.on('change', '#chwPays', el => { chwPays = el.value; const p = PAYS.find(x => x[0] === el.value); if(p && A.devisesOn().some(d => d.c === p[2])) A.setDevise(p[2]); A.refresh(); });
/* attente de la confirmation de Chariow : on relit les droits jusqu'à l'ouverture de l'accès (ou du livre) */
let poll = null;
A.chwAttente = () => !!poll;
const etatAbo = () => S.me ? [S.me.abo, S.me.abo_fin].join('|') : '';
const chwOk = (objet, ref, avant) => objet === 'livre' ? (S.achats || []).some(a => a.livre === ref) : objet === 'abo' ? etatAbo() !== avant && S.me.abo === ref && ts(S.me.abo_fin) > now() : A.hasAccess();
A.chwPoll = (objet, livre) => {
  if(poll || S.mode !== 'sb') return;
  let n = 0;
  const avant = (A.ls.get('chw_wait', null) || {}).avant || etatAbo();
  const ok = () => chwOk(objet, livre, avant);
  poll = setInterval(async () => {
    if(document.visibilityState !== 'visible') return;
    n++;
    await A.db.refreshAccess().catch(() => {});
    if(ok()){ clearInterval(poll); poll = null; A.ls.del('chw_wait'); toast(objet === 'livre' ? 'Paiement confirmé : votre livre est disponible' : objet === 'abo' ? 'Paiement confirmé : votre abonnement est activé' : 'Paiement confirmé : votre accès est activé, bonne formation !', 'check'); A.render(); }
    else if(n >= 75){ clearInterval(poll); poll = null; A.refresh(); }
  }, 4000);
  A.refresh();
};
A.on('click', '[data-chwlien]', el => { A.ls.set('chw_wait', {objet:el.dataset.chwlien, livre:el.dataset.livre || null, at:A.now(), avant:etatAbo()}); A.chwPoll(el.dataset.chwlien, el.dataset.livre || null); });
A.on('click', '[data-chwpay]', async el => {
  const objet = el.dataset.chwpay, livre = el.dataset.livre || null, old = el.innerHTML;
  el.disabled = true; el.innerHTML = ic('refresh') + 'Connexion au paiement sécurisé…';
  try{
    if(S.mode === 'local'){ await A.db.chariowDemo(objet, livre); toast(objet === 'livre' ? 'Paiement simulé : le livre est disponible immédiatement' : objet === 'abo' ? 'Paiement simulé : votre abonnement est activé immédiatement' : 'Paiement simulé : votre accès est activé immédiatement', 'check'); A.render(); return; }
    const c = chwConf(objet, livre);
    const r = await A.db.chariowCheckout({objet, livre:objet === 'livre' ? livre : null, plan:objet === 'abo' ? livre : null, devise:A.devise(), pays:A.val('chwPays') || 'CI', tel:A.val('chwTel'), nom:(S.me.data && S.me.data.name) || ''});
    if(r.url){ A.ls.set('chw_wait', {objet, livre, at:A.now(), avant:etatAbo()}); location.href = r.url; return; }
    if(r.deja){ await A.db.refreshAccess(); toast(r.chariow ? 'Chariow indique que ce produit est déjà payé : votre accès est mis à jour' : 'C\'est déjà payé : bonne lecture !', 'check'); A.render(); return; }
    if(r.termine){ await A.db.refreshAccess(); A.render(); return; }
    if(/^https:\/\//.test(c.lien)){
      A.win({title:'Payer sur Chariow', body:`<p>Le paiement direct n'est pas disponible pour le moment : ouvrez la page Chariow ci-dessous et <b>payez avec l'adresse ${esc(S.me.email)}</b>. Votre accès s'ouvrira automatiquement.</p>`, foot:`<a class="btn b-pri" href="${esc(c.lien)}" target="_blank" rel="noopener" data-chwlien="${objet}" data-livre="${esc(livre || '')}">${ic('card')}Ouvrir la page de paiement</a>`});
      return;
    }
    toast(r.error || 'Paiement en ligne indisponible pour le moment', 'x');
  }finally{ el.disabled = false; el.innerHTML = old; }
});
/* retour depuis Chariow (ou paiement lancé dans un autre onglet) : bandeau d'attente */
A.chwRetour = (objet, livre) => {
  const w = A.ls.get('chw_wait', null), retour = A.query().get('chariow') === 'retour' || (w && w.objet === objet && (w.livre || null) === (livre || null) && A.now() - w.at < 3*3600000);
  const ok = objet === 'livre' ? (S.achats || []).some(a => a.livre === livre) : objet === 'abo' ? (w && chwOk('abo', w.livre, w.avant)) || (!w && !!A.aboActif()) : A.hasAccess();
  if(!retour || ok || S.mode !== 'sb') return '';
  if(objet === 'acces' && w && w.objet === 'abo'){ objet = 'abo'; livre = w.livre; }
  if(!poll) setTimeout(() => A.chwPoll(objet, livre), 0);
  return `<div class="note info">${ic('clock')}<span><b>Paiement en cours de confirmation par Chariow…</b> ${poll ? 'Cette page se met à jour toute seule' : 'Vérification terminée'} : ${objet === 'livre' ? 'le livre' : 'votre accès'} s'ouvrira dès que Chariow aura confirmé le paiement (en général quelques secondes). Si rien ne change après quelques minutes, écrivez à la direction sur WhatsApp avec votre reçu Chariow.${poll ? '' : ` <button class="btn b-line b-xs" data-act="chwrecheck">${ic('refresh')}Vérifier à nouveau</button>`}</span></div>`;
};
A.on('click', '[data-act="chwrecheck"]', () => { const w = A.ls.get('chw_wait', null) || {objet:'acces'}; A.chwPoll(w.objet, w.livre); });
/* étiquette de la formule d'une personne (espace PDG et page Mon abonnement) */
A.accesPill = p => {
  if(p.admin) return '<span class="pill p-amber">Admin</span>';
  const n = A.niveauDe(p), t = now();
  if(n === 'premium') return `<span class="pill p-or dot">${p.abo === 'premium' && ts(p.abo_fin) > t ? 'Premium' : 'Premium (essai)'}</span>`;
  if(n === 'basic') return '<span class="pill p-info dot">Basic</span>';
  if(n === 'inscrit') return '<span class="pill p-ok dot">Inscrit</span>';
  if(p.acces === 'actif' && p.acces_fin && ts(p.acces_fin) < t) return '<span class="pill p-bad dot">Expiré</span>';
  return '<span class="pill p-mute dot">Non payé</span>';
};
A.accesDetail = p => { const t = now(), L = [];
  if(p.abo && p.abo_fin) L.push(`${p.abo === 'premium' ? 'Premium' : 'Basic'} ${ts(p.abo_fin) > t ? 'jusqu\'au' : 'terminé le'} ${fd(p.abo_fin)}`);
  if(p.acces === 'actif' && p.essai_fin && ts(p.essai_fin) > t) L.push('essai Premium jusqu\'au ' + fd(p.essai_fin));
  if(p.acces === 'actif') L.push('inscription ' + (p.acces_fin ? 'jusqu\'au ' + fd(p.acces_fin) : 'payée'));
  return L.join(' · '); };

/* =====================================================================
   FORMULES : ce que comprend chacune, verrous, écran « formule requise »
   ===================================================================== */
const PLANS = ['inscrit', 'basic', 'premium'];
const FEAT = {
  exos:['edit', 'Exercices corrigés par chapitre'], quiz:['target', 'Questions de quiz par chapitre'], sujets:['doc', 'Sujets d\'examen corrigés'],
  solveurs:['steps', 'Solveurs guidés et études pas à pas'], banque:['book', 'Exercices type BTS et Licence'], epreuves:['clock', 'Épreuves d\'entraînement chronométrées'],
  annales:['doc', 'Annales officielles'], metres:['calc', 'Métré complet et devis (DQE)'], atelier:['compass', 'Atelier de dessin 2D / 3D'], ia:['spark', 'Assistant IA et résolution en photo']
};
const NIVX = ['—', 'Débutant', 'Débutant + Intermédiaire', 'Tous les niveaux'];
const fv = (k, v) => k === 'exos' || k === 'quiz' ? (v >= 99 ? 'Tous' : v ? String(v) : '—') : k === 'sujets' || k === 'solveurs' ? NIVX[Math.max(0, Math.min(3, +v || 0))]
  : k === 'banque' ? (v === 'tout' ? 'BTS et Licence' : 'BTS (sans solveur)') : k === 'metres' ? (+v < 0 ? 'Illimité' : +v ? `${v} par mois` : '—') : v ? '✓' : '—';
const nomPlan = n => n === 'premium' ? 'Premium' : n === 'basic' ? 'Basic' : 'Inscription';
A.offresTable = (cur) => `<div class="tw"><table class="t offt"><thead><tr><th>Ce que comprend chaque formule</th>${PLANS.map(n => `<th class="c ${cur === n ? 'on' : ''}">${n === 'inscrit' ? 'Inscrit' : nomPlan(n)}</th>`).join('')}</tr></thead><tbody>
  <tr><td>${ic('book')} Tous les cours des ${A.catalog().length} matières</td>${PLANS.map(n => `<td class="c ${cur === n ? 'on' : ''}">✓</td>`).join('')}</tr>
  <tr><td>${ic('crane')} Construction A→Z et projets types</td>${PLANS.map(n => `<td class="c ${cur === n ? 'on' : ''}">✓</td>`).join('')}</tr>
  ${Object.entries(FEAT).map(([k, [i, t]]) => `<tr><td>${ic(i)} ${esc(t)}</td>${PLANS.map(n => { const v = fv(k, A.offre(n)[k]); return `<td class="c ${cur === n ? 'on' : ''} ${v === '—' ? 'no' : ''}">${esc(v)}</td>`; }).join('')}</tr>`).join('')}
  </tbody></table></div>`;
/* écran affiché à la place d'une fonctionnalité non comprise dans la formule */
A.upgradePage = (need, p) => {
  const k = typeof need === 'object' ? need.k : need, f = FEAT[k] || ['lock', 'Cette fonctionnalité'], n = A.niveau();
  const min = typeof need === 'object' && need.min ? need.min(p) : A.offreMin(o => { const v = o[k]; return v === true || v === 'tout' || (typeof v === 'number' && v !== 0); });
  const quota = k === 'metres' && +A.lim('metres') > 0;
  return `<div class="abo-wall card stack">
   <div class="row" style="gap:14px"><span class="abo-lock">${ic(f[0])}</span><div><span class="kick">${ic('lock')} Formule ${esc(nomPlan(min))} requise</span><h2 style="font-size:clamp(20px,2.6vw,26px);margin-top:4px">${esc(f[1])}</h2></div></div>
   <p class="sub" style="font-size:15px">${quota ? `Vous avez déjà créé <b>${A.metresMois()} métré${A.metresMois() > 1 ? 's' : ''}</b> ce mois-ci, le maximum de votre formule ${esc(A.NIV_NOM[n])}. Passez à <b>Premium</b> pour des métrés illimités, ou attendez le mois prochain.`
     : `Cette fonctionnalité n'est pas comprise dans votre formule actuelle (<b>${esc(A.NIV_NOM[n])}</b>). Activez l'abonnement <b>${esc(nomPlan(min))}</b> pour l'utiliser${min === 'premium' ? '' : ', ou Premium pour tout débloquer'}.`}</p>
   ${A.offresTable(n)}
   <div class="row"><a class="btn b-pri b-lg" href="#/app/abonnement">${ic('coins')}Voir les offres</a><a class="btn b-ghost" href="#/app">${ic('home')}Tableau de bord</a></div></div>`;
};
/* petit cadenas : dans le menu, sur les raccourcis du tableau de bord, dans les listes */
const NAVNEED = {'app/atelier':'atelier', 'app/ia':'ia', 'app/resoudre':'ia', 'app/metre':'metres'};
A.lockTag = (need, p) => A.S.me && !A.droit(need, p) ? `<span class="lk" title="Formule supérieure requise">${ic('lock')}</span>` : '';
A.navLock = path => NAVNEED[path] ? A.lockTag(NAVNEED[path]) : '';
/* encart « débloquer davantage » dans un chapitre */
A.upsell = (txt, k) => { const min = A.offreMin(o => { const v = o[k]; return v === true || v === 'tout' || (typeof v === 'number' && (v < 0 || v > (+A.lim(k) || 0))); });
  return `<div class="upsell noprint">${ic('lock')}<span>${txt} avec la formule <b>${esc(nomPlan(min))}</b>.</span><a class="btn b-pri b-xs" href="#/app/abonnement">Voir les offres</a></div>`; };
/* fonctionnalités réservées : à la place de la page, l'écran « formule requise » */
const NEED = {
  'app/atelier':'atelier', 'app/atelier/:id':'atelier', 'app/ia':'ia', 'app/resoudre':'ia', 'app/epreuve/:id':'epreuves', 'app/annale/:id':'annales',
  'app/solveur/:id':{k:'solveurs', test:p => A.droitSolveur(p.id), min:p => { const d = A.SOL && A.SOL.get(p.id); return A.offreMin(o => (+o.solveurs || 0) >= ((d && d.niv) || 1)); }},
  'app/exercice/:id':{k:'banque', test:p => A.droitExo(p.id), min:() => A.offreMin(o => o.banque === 'tout')},
  'app/metre/:id':{k:'metres', test:p => p.id !== 'nouveau' || A.peutMetre(), min:() => A.offreMin(o => +o.metres < 0 || +o.metres > A.metresMois())}
};
A.routes.forEach(r => { const k = r.parts.join('/'); if(NEED[k]) r.def.need = NEED[k]; });

/* ---------- ce que l'inscription débloque ---------- */
function avantages(){
  const cat = A.catalog(), ch = cat.reduce((a, m) => a + m.chapitres.length, 0), ex = cat.reduce((a, m) => a + m.chapitres.reduce((b, c) => b + A.nex(c), 0), 0), su = cat.reduce((a, m) => a + m.chapitres.filter(c => c.ns || c.sujet).length, 0);
  return [
    ['book', `${ch} chapitres de cours`, `les ${cat.length} matières, du niveau Débutant au niveau Avancé`],
    ['edit', `${F(ex)} exercices corrigés`, 'à la fin de chaque chapitre, corrigés pas à pas'],
    ['doc', su ? `${su} sujets d'examen corrigés` : 'Sujets d\'examen corrigés', 'un sujet type examen par chapitre, avec barème et corrigé'],
    ['target', 'Quiz, solveurs guidés et annales', 'pour s\'entraîner et préparer le BTS, la Licence, les concours'],
    ['spark', 'Professeur IA 24 h/24', 'questions, explications, exercice en photo corrigé'],
    ['crane', 'Construction A→Z, atelier de dessin, métré', 'projets réels, plans 2D / 3D, devis en FCFA']
  ];
}
const avantagesHtml = () => `<div class="abo-list">${avantages().map(([i, b, s]) => `<div class="row nw" style="align-items:flex-start;gap:10px"><span class="abo-ic">${ic(i)}</span><span><b>${esc(b)}</b><span class="sub" style="display:block">${esc(s)}</span></span></div>`).join('')}</div>`;

/* ---------- écran des parties réservées ---------- */
A.paywallPage = path => {
  const c = A.cfg(), wait = pending()[0];
  return `<div class="abo-wall card stack">
   <div class="row" style="gap:14px"><span class="abo-lock">${ic('lock')}</span><div><span class="kick">Accès complet</span><h2 style="font-size:clamp(20px,2.6vw,26px);margin-top:4px">Cette partie est réservée aux inscrits</h2></div></div>
   ${wait ? `<div class="note info">${ic('clock')}<span>Votre paiement de <b>${F(wait.montant)} FCFA</b> (${esc(moyenN(wait.moyen))}, réf. ${esc(wait.reference)}) a été déclaré ${ago(wait.at)}. Il sera validé dès que la direction aura vérifié la réception ; votre accès s'ouvrira alors automatiquement.</span></div>`
     : `<p class="sub" style="font-size:15px">Vous avez lu gratuitement le premier chapitre de chaque matière. Pour continuer, activez votre accès : <b style="color:var(--ink)">${esc(A.prixTxt())}</b>${A.promoAcces() ? ` au lieu de ${A.promoOld(A.promoAcces())} ${A.promoTag(A.promoAcces())}` : ''}${A.eq(montant()) ? ` (${esc(A.eq(montant()))})` : ''}, payé par ${moyensActifs().map(m => m[1]).join(' ou ') || 'Mobile Money'}${A.chwDispo('acces') ? ', ou en ligne par carte bancaire depuis n\'importe quel pays (accès immédiat)' : ''}.</p>`}
   ${avantagesHtml()}
   <div class="row"><a class="btn b-pri b-lg" href="#/app/abonnement">${ic('coins')}${wait ? 'Suivre mon paiement' : 'Activer mon accès'}</a>${wait ? `<button class="btn b-line" data-act="abocheck">${ic('refresh')}Vérifier mon accès</button>` : ''}<a class="btn b-ghost" href="#/app/matieres">${ic('book')}Lire les chapitres gratuits</a></div>
  </div>`;
};
/* encart dans un chapitre réservé */
A.lockedChapter = (c, m) => `<div class="stack s20"><div class="lesson"><span class="kick">${A.nivPill(c)} ${esc(m.titre)}</span><h1 style="font-size:clamp(24px,3vw,32px);margin:8px 0 6px">${esc(c.titre)}</h1><p class="sub">${c.duree || 20} min de lecture · ${A.nex(c)} exercices corrigés · ${A.nq(c)} questions de quiz${c.ns || c.sujet ? ' · 1 sujet d\'examen corrigé' : ''}</p></div>${A.paywallPage('')}</div>`;
/* bandeau du tableau de bord : essai qui se termine, abonnement qui expire, inscription à faire */
A.aboBanner = () => {
  if(!S.me || S.me.isAdmin || !A.paywallOn()) return '';
  const n = A.niveau(), essai = A.essaiFin(), abo = A.aboActif(), fin = A.accesFin(), wait = pending()[0];
  if(n !== 'aucun'){
    if(wait) return `<div class="note info">${ic('clock')}<span>Paiement déclaré ${ago(wait.at)} : il sera validé dès que la direction aura vérifié la réception.</span></div>`;
    if(essai) return `<div class="abo-band"><div class="stack s8"><b style="font-size:17px">Premium offert : encore ${Math.max(1, Math.ceil((essai - now()) / DAY))} jour${Math.ceil((essai - now()) / DAY) > 1 ? 's' : ''}</b><span>Vous profitez de tout jusqu'au <b>${fd(essai)}</b>. Ensuite, votre formule Inscrit garde tous les cours ; prenez Basic ou Premium pour garder les solveurs, les sujets, le métré${A.offre('basic').atelier ? '' : ', l\'atelier de dessin et l\'assistant IA'}.</span></div><div class="row"><a class="btn b-pri" href="#/app/abonnement">${ic('coins')}Voir les offres</a></div></div>`;
    if(abo && abo.fin - now() < 7*DAY) return `<div class="note">${ic('clock')}<span>Votre abonnement <b>${abo.plan === 'premium' ? 'Premium' : 'Basic'}</b> se termine le <b>${fd(abo.fin)}</b>. <a href="#/app/abonnement">Le renouveler</a></span></div>`;
    if(n === 'inscrit') return `<div class="abo-band"><div class="stack s8"><b style="font-size:17px">Formule Inscrit : tous les cours</b><span>Débloquez plus d'exercices, les sujets d'examen, les solveurs guidés et le métré avec <b>Basic</b> (${F(prixPlan('basic'))} FCFA), ou tout, dont l'atelier de dessin et le professeur IA, avec <b>Premium</b> (${F(prixPlan('premium'))} FCFA) pour ${+A.cfg().aboJours || 31} jours.</span></div><div class="row"><a class="btn b-pri" href="#/app/abonnement">${ic('coins')}Voir les offres</a></div></div>`;
    return fin && fin - now() < 7*DAY ? `<div class="note">${ic('clock')}<span>Votre accès se termine le <b>${fd(fin)}</b>. <a href="#/app/abonnement">Le renouveler</a></span></div>` : '';
  }
  return `<div class="abo-band"><div class="stack s8"><b style="font-size:17px">${wait ? 'Paiement en cours de validation' : 'Activez votre accès complet'}</b><span>${wait ? `Déclaré ${ago(wait.at)} : votre accès s'ouvrira dès la validation par la direction.` : `Le premier chapitre de chaque matière est gratuit. Inscription : ${esc(A.prixTxt())}${A.promoAcces() ? ` au lieu de ${A.promoOld(A.promoAcces())} ${A.promoTag(A.promoAcces())}` : ''}, avec <b>${+A.cfg().essaiJours || 31} jours de Premium offerts</b> (tout compris).`}</span></div><div class="row">${wait ? `<button class="btn b-line" style="background:#fff" data-act="abocheck">${ic('refresh')}Vérifier mon accès</button>` : ''}<a class="btn b-pri" href="#/app/abonnement">${ic('coins')}${wait ? 'Voir mon paiement' : 'Payer ' + F(montant()) + ' FCFA'}</a></div></div>`;
};
/* carte « Ma formule » du tableau de bord : ce qui est ouvert, ce qui est verrouillé */
A.formuleCard = () => {
  if(!S.me || !A.paywallOn() || S.me.isAdmin) return '';
  const n = A.niveau(), o = A.offre(n), essai = A.essaiFin(), abo = A.aboActif();
  const L = [['book', 'Cours', n !== 'aucun' ? 'tous' : '1er chapitre', n !== 'aucun', 'app/matieres'],
    ['edit', 'Exercices', o.exos >= 99 ? 'tous' : o.exos + ' / chapitre', n !== 'aucun', 'app/matieres'],
    ['doc', 'Sujets d\'examen', fv('sujets', o.sujets), n !== 'aucun' && o.sujets > 0, 'app/exercices'],
    ['steps', 'Solveurs guidés', fv('solveurs', o.solveurs), n !== 'aucun' && o.solveurs > 0, 'app/exercices'],
    ['calc', 'Métré & devis', fv('metres', o.metres), n !== 'aucun' && +o.metres !== 0, 'app/metre'],
    ['compass', 'Atelier de dessin', o.atelier ? 'inclus' : 'Premium', n !== 'aucun' && o.atelier, 'app/atelier'],
    ['spark', 'Assistant IA', o.ia ? 'inclus' : 'Premium', n !== 'aucun' && o.ia, 'app/ia']];
  return `<div class="card stack formule"><div class="row between"><div class="row" style="gap:10px"><b style="font-family:var(--fd);font-size:17px">Ma formule</b>${A.accesPill(Object.assign({}, S.me, {admin:false}))}</div><span class="sub">${esc(essai ? 'Premium offert jusqu\'au ' + fd(essai) : abo ? (abo.plan === 'premium' ? 'Premium' : 'Basic') + ' jusqu\'au ' + fd(abo.fin) : n === 'inscrit' ? 'tous les cours, contenus réduits' : n === 'aucun' ? 'version gratuite' : '')}</span></div>
   <div class="fgrid">${L.map(([i, t, v, on, h]) => `<a class="fitem ${on ? '' : 'off'}" href="#/${h}"><span class="fi">${ic(on ? i : 'lock')}</span><span><b>${esc(t)}</b><small>${esc(v)}</small></span></a>`).join('')}</div>
   ${n === 'premium' && !essai ? '' : `<a class="btn b-pri b-sm" style="justify-self:start" href="#/app/abonnement">${ic('coins')}${n === 'aucun' ? 'Activer mon accès' : 'Comparer les formules'}</a>`}</div>`;
};

/* ---------- page apprenant : Mon abonnement ---------- */
let payMoyen = '', payMode = '', ACH = null;
const achPrix = () => ACH.objet === 'abo' ? prixPlan(ACH.plan) : montant();
const achNom = () => ACH.objet === 'abo' ? `Abonnement ${nomPlan(ACH.plan)} · ${+A.cfg().aboJours || 31} jours` : A.cfg().formule === 'mensuel' ? 'Abonnement mensuel' : 'Inscription';
A.page('app/abonnement', {space:'app', free:true, title:'Mon abonnement', crumb:'Formules et paiement', render(){
  const c = A.cfg(), P = c.pay || {}, ms = moyensActifs(), n = A.niveau(), inscrit = S.me.acces === 'actif' || S.me.isAdmin, wait = pending()[0], hist = S.pay || [];
  const essai = A.essaiFin(), abo = A.aboActif(), jours = +c.aboJours || 31;
  if(!ACH){ const q = A.query().get('plan'); ACH = ['basic', 'premium'].includes(q) && inscrit ? {objet:'abo', plan:q} : !inscrit ? {objet:'acces'} : {objet:'abo', plan:abo ? abo.plan : 'premium'}; }
  if(ACH.objet === 'acces' && inscrit && c.formule !== 'mensuel') ACH = {objet:'abo', plan:'premium'};
  if(!payMoyen || !ms.find(m => m[0] === payMoyen)) payMoyen = (ms[0] || ['wave'])[0];
  const chw = A.chwDispo(ACH.objet, ACH.plan), modes = [ms.length ? 'momo' : null, chw ? 'chariow' : null].filter(Boolean);
  if(!modes.includes(payMode)) payMode = modes[0] || 'momo';
  const num = P[payMoyen] || '', name = (S.me.data && S.me.data.name) || S.me.email, px = achPrix(), promo = ACH.objet === 'acces' ? A.promoAcces() : null;
  const waTxt = `Bonjour, je suis ${name} (${S.me.email}). Je viens de payer ${F(px)} FCFA par ${moyenN(payMoyen)} pour : ${achNom()} (${A.brandText()}).`;
  const etat = !A.paywallOn() ? `<div class="note ok">${ic('check')}<span>L'accès à la plateforme est actuellement <b>gratuit pour tous</b>.</span></div>`
    : S.me.isAdmin ? `<div class="note ok">${ic('crown')}<span>Compte administrateur : accès complet.</span></div>`
    : wait ? `<div class="note info">${ic('clock')}<span><b>Paiement déclaré ${ago(wait.at)}</b> : ${F(wait.montant)} FCFA par ${esc(moyenN(wait.moyen))} (${esc(objetTxt(wait))}), référence ${esc(wait.reference)}. La direction vérifie la réception puis l'active.</span></div>`
    : n === 'aucun' ? `<div class="note">${ic('lock')}<span>Vous utilisez la <b>version gratuite</b> : premier chapitre de chaque matière.</span></div>`
    : `<div class="note ok">${ic('check')}<span>Votre formule : <b>${esc(A.NIV_NOM[n])}</b>${essai ? ` (offert après l'inscription) jusqu'au <b>${fd(essai)}</b>, puis formule Inscrit` : abo ? ` jusqu'au <b>${fd(abo.fin)}</b>` : n === 'inscrit' ? ' : tous les cours, contenus réduits' : ''}.</span></div>`;
  const carte = (k, titre, prix, unite, desc, bouton, actif, dispo) => `<div class="offre ${actif ? 'on' : ''} ${ACH.objet === (k === 'acces' ? 'acces' : 'abo') && (k === 'acces' || ACH.plan === k) ? 'sel' : ''}">
    <div class="stack s8"><span class="kick">${esc(titre)}</span>${k === 'acces' && promo ? `<div class="row nw" style="gap:6px">${A.promoOld(promo)}${A.promoTag(promo)}</div>` : ''}<b class="oprix">${F(prix)} <small>FCFA ${esc(unite)}</small></b>${A.eq(prix) ? `<span class="sub">${esc(A.eq(prix))}</span>` : ''}</div>
    <ul>${desc.map(d => `<li>${ic('check')}<span>${d}</span></li>`).join('')}</ul>
    ${actif ? `<span class="pill p-ok dot" style="justify-self:start">${esc(actif)}</span>` : ''}
    ${bouton ? `<button class="btn ${dispo ? 'b-pri' : 'b-line'} b-sm" ${dispo ? `data-ach="${k}"` : 'disabled'}>${bouton}</button>` : ''}</div>`;
  const ob = A.offre('basic'), oi = A.offre('inscrit');
  const offres = A.paywallOn() && !S.me.isAdmin ? `<div class="offres">
    ${carte('acces', 'Inscription', montant(), c.formule === 'mensuel' ? '/ mois' : 'une seule fois', [`<b>${+c.essaiJours || 31} jours Premium offerts</b> : tout est ouvert`, 'Ensuite : <b>tous les cours</b>, sans limite de durée', `${oi.exos} exercices et ${oi.quiz} questions de quiz par chapitre`, 'Sujets d\'examen du niveau Débutant'], inscrit ? '' : 'S\'inscrire', inscrit ? 'Payée' : '', !inscrit)}
    ${carte('basic', 'Abonnement Basic', prixPlan('basic'), `/ ${jours} jours`, [`${ob.exos >= 99 ? 'Tous les' : ob.exos} exercices et ${ob.quiz >= 99 ? 'toutes les' : ob.quiz} questions de quiz par chapitre`, `Sujets d'examen : ${esc(fv('sujets', ob.sujets))}`, `Solveurs guidés : ${esc(fv('solveurs', ob.solveurs))}`, `Métré et devis : ${esc(fv('metres', ob.metres))}`, 'Épreuves et annales'], 'Choisir Basic', abo && abo.plan === 'basic' ? 'En cours' : '', inscrit)}
    ${carte('premium', 'Abonnement Premium', prixPlan('premium'), `/ ${jours} jours`, ['<b>Tout</b> : exercices, quiz, sujets, solveurs', 'Atelier de dessin 2D / 3D', 'Assistant IA et résolution en photo', 'Métré et devis illimités'], 'Choisir Premium', abo && abo.plan === 'premium' ? 'En cours' : essai ? 'Offert (essai)' : '', inscrit)}
   </div>${inscrit ? '' : `<p class="sub">Les abonnements Basic et Premium se prennent après l'inscription. ${essai ? '' : 'L\'inscription comprend déjà 31 jours Premium.'}</p>`}` : '';
  const showPay = A.paywallOn() && !S.me.isAdmin && (ACH.objet === 'abo' ? inscrit : !inscrit || c.formule === 'mensuel');
  const momo = `<ol class="abo-steps">
     <li><b>Envoyez ${F(px)} FCFA par ${esc(moyenN(payMoyen))}</b> au numéro :
      <div class="abo-num"><span class="mono">${esc(telFmt(num))}</span><button class="btn b-line b-sm" data-copy="${esc(String(num).replace(/\s/g, ''))}">${ic('copy')}Copier</button></div>
      <span class="sub">Bénéficiaire : ${esc(P.titulaire || c.ceo)}. ${payMoyen === 'wave' ? 'Dans l\'application Wave : « Envoyer », saisissez le numéro et le montant.' : payMoyen === 'mtn' ? 'Avec MTN MoMo : composez *133# puis « Transfert d\'argent », ou utilisez l\'application MoMo.' : payMoyen === 'orange' ? 'Avec Orange Money : composez #144# ou utilisez l\'application Max it.' : payMoyen === 'moov' ? 'Avec Moov Money : composez *155# ou utilisez l\'application Moov Money.' : 'Depuis votre application, faites un transfert vers ce compte.'}</span></li>
     <li><b>Gardez le SMS de confirmation</b> : il contient la référence (identifiant) de la transaction.</li>
     <li><b>Déclarez votre paiement ci-dessous</b> : la direction vérifie la réception et l'active, en général dans la journée.</li>
    </ol>
    <form class="stack" id="fPay">
     <div class="g2"><label class="fld"><span>Numéro utilisé pour payer</span><input class="inp" id="payNum" type="tel" inputmode="tel" placeholder="07 00 00 00 00" value="${esc((S.me.data && S.me.data.phone) || '')}" required></label>
      <label class="fld"><span>Référence de la transaction</span><input class="inp" id="payRef" placeholder="ex. TXN123456 ou MP2410.1234.A5678" required></label></div>
     <div class="row"><button class="btn b-pri" type="submit">${ic('check')}J'ai payé : déclarer mon paiement</button>${c.whatsapp ? `<a class="btn b-ok" target="_blank" rel="noopener" href="${esc(waLink(c.whatsapp, waTxt))}">${ic('whatsapp')}Envoyer la capture sur WhatsApp</a>` : ''}</div>
     <p class="sub">${c.whatsapp ? `WhatsApp de la direction : <b class="mono" style="color:var(--ink)">${esc(telFmt(c.whatsapp))}</b>. ` : ''}N'envoyez jamais votre code secret (PIN) : personne de la plateforme ne vous le demandera.</p>
    </form>`;
  return `<div class="stack">
   ${A.chwRetour(ACH.objet === 'abo' ? 'abo' : 'acces', ACH.objet === 'abo' ? ACH.plan : null)}
   ${etat}
   ${offres}
   ${showPay ? `<div class="card stack" id="payBox">
    <div class="row between"><div><span class="kick">Paiement</span>${promo ? `<div class="row nw" style="gap:8px;margin-top:6px">${A.promoOld(promo)}${A.promoTag(promo)}${c.promoNom ? `<b class="px-urg">${esc(c.promoNom)}</b>` : ''}</div>` : ''}<h2 style="font-size:22px;margin-top:4px">${esc(achNom())} : ${F(px)} <small style="font-size:15px;color:var(--muted)">FCFA</small></h2>${promo && A.promoUrg(promo) ? `<div class="px-urg">${ic('clock')} ${esc(A.promoUrg(promo))}</div>` : ''}${A.eq(px) ? `<div class="sub" style="font-size:14px;margin-top:2px">${esc(A.eq(px))}</div>` : ''}${ACH.objet === 'abo' && (essai || (abo && abo.plan === ACH.plan)) ? `<div class="sub" style="margin-top:4px">${ic('info')} Les ${jours} jours commenceront ${essai ? 'après votre essai Premium (' + fd(essai) + ')' : 'à la fin de votre abonnement en cours (' + fd(abo.fin) + ')'} : vous ne perdez aucun jour.</div>` : ''}</div>${A.devSel()}</div>
    ${modes.length > 1 ? `<div class="paymodes" role="tablist">
      <button class="paymode ${payMode === 'momo' ? 'on' : ''}" data-paymode="momo" role="tab" aria-selected="${payMode === 'momo'}"><span class="pm-ic">${ic('phone')}</span><span><b>Mobile Money · Côte d'Ivoire</b><small>${esc(ms.map(m => m[1]).join(', '))} · validé par la direction</small></span></button>
      <button class="paymode ${payMode === 'chariow' ? 'on' : ''}" data-paymode="chariow" role="tab" aria-selected="${payMode === 'chariow'}"><span class="pm-ic">${ic('globe')}</span><span><b>Paiement en ligne · tous pays</b><small>carte bancaire, Mobile Money d'autres pays… · activation immédiate</small></span></button>
     </div>` : ''}
    ${payMode === 'chariow' ? A.chwBox(ACH.objet, ACH.objet === 'abo' ? ACH.plan : null, px, promo) : `${ms.length > 1 ? `<div class="tabs">${ms.map(m => `<button class="tab ${payMoyen === m[0] ? 'on' : ''}" data-paym="${m[0]}"><i class="abo-dot" style="background:${m[2]}"></i>${esc(m[1])}</button>`).join('')}</div>` : ''}${momo}`}
   </div>` : ''}
   ${A.paywallOn() ? `<div class="card stack"><h3 style="margin:0">Comparer les formules</h3>${A.offresTable(n)}</div>` : ''}
   <div class="cols"><div class="stack">
   ${hist.length ? `<div class="card"><h3>Mes paiements <small>${hist.length}</small></h3><div class="tw"><table class="t"><thead><tr><th>Date</th><th>Objet</th><th>Moyen et référence</th><th class="r">Montant</th><th>Statut</th></tr></thead><tbody>${hist.map(x => `<tr><td class="nowrap">${fdt(x.at)}</td><td style="min-width:130px">${esc(objetTxt(x))}</td><td style="min-width:130px">${esc(moyenN(x.moyen))}<div class="small faint mono" style="overflow-wrap:anywhere">${esc([telFmt(x.numero), x.reference].filter(Boolean).join(' · '))}</div></td><td class="r mono nowrap">${F(x.montant)} F${devPaye(x)}</td><td style="min-width:110px">${statutPill(x.statut)}${x.note ? `<div class="small faint">${esc(x.note)}</div>` : ''}</td></tr>`).join('')}</tbody></table></div>${wait ? `<button class="btn b-line b-sm" style="margin-top:10px" data-act="abocheck">${ic('refresh')}Vérifier mon accès</button>` : ''}</div>` : `<div class="card stack"><h3 style="margin:0">Ce que comprend l'accès</h3>${avantagesHtml()}</div>`}
   </div><div class="stack">
   <div class="card"><h3>Questions fréquentes</h3><div class="stack s8 small">
    <p><b>Combien de temps pour l'activation ?</b><br>${chw ? 'Paiement en ligne : immédiat, dès que Chariow confirme le paiement. ' : ''}Mobile Money : dès que la direction a vérifié la réception, en général dans la journée. Le bouton « Vérifier mon accès » met à jour votre compte.</p>
    <p><b>Que se passe-t-il après les ${+c.essaiJours || 31} jours offerts ?</b><br>Vous gardez tous les cours (formule Inscrit), avec moins d'exercices, de quiz et de sujets. Les solveurs, le métré, l'atelier de dessin et l'assistant IA demandent un abonnement Basic ou Premium. Votre progression est conservée.</p>
    <p><b>J'habite hors de Côte d'Ivoire.</b><br>${chw ? 'Choisissez « Paiement en ligne » : carte bancaire ou Mobile Money de votre pays, dans la devise de votre choix.' : 'Écrivez à la direction sur WhatsApp : elle vous indiquera comment payer depuis votre pays.'}</p>
    <p><b>Je me suis trompé de montant ou de numéro.</b><br>Écrivez à la direction sur WhatsApp avec la capture du paiement.</p>
   </div></div>
  </div></div></div>`;
}});
A.on('click', '[data-ach]', el => { const k = el.dataset.ach; ACH = k === 'acces' ? {objet:'acces'} : {objet:'abo', plan:k}; A.refresh(); setTimeout(() => { const b = $('#payBox'); if(b) b.scrollIntoView({behavior:'smooth', block:'start'}); }, 50); });
A.on('click', '[data-paymode]', el => { payMode = el.dataset.paymode; A.refresh(); });
A.on('click', '[data-paym]', el => { payMoyen = el.dataset.paym; A.refresh(); });
A.on('submit', '#fPay', async () => {
  const num = A.val('payNum'), ref = A.val('payRef');
  const r = await A.db.declarePayment(payMoyen, num, ref, ACH ? ACH.objet : 'acces', null, ACH && ACH.objet === 'abo' ? ACH.plan : null);
  if(!r.ok){ toast(r.msg || 'Erreur', 'x'); return; }
  toast('Paiement déclaré : la direction va le vérifier', 'check'); A.refresh();
});
A.on('click', '[data-act="abocheck"]', async () => {
  const had = A.hasAccess(); await A.db.refreshAccess();
  if(A.hasAccess()){ toast(had ? 'Accès à jour' : 'Votre accès est activé, bonne formation !', 'check'); }
  else toast(pending().length ? 'Paiement toujours en attente de validation' : 'Accès non activé pour le moment', 'clock');
  A.render();
});

/* ---------- Espace PDG : abonnements et paiements ---------- */
const AD = () => S.adm || {profiles:[], paiements:[]};
const nm = p => (p && p.data && p.data.name) || (p && p.email) || '—';
const profOf = id => AD().profiles.find(p => p.id === id) || {id, email:'(compte supprimé)', data:{name:'Compte supprimé'}};
/* acheteur d'un paiement : compte de la plateforme, ou simple e-mail (paiement en ligne avant la création du compte) */
const payer = x => x.owner ? profOf(x.owner) : {id:'', email:x.email || '—', data:{name:x.email || 'Acheteur'}, sansCompte:true};
const payerLink = (x, p) => p.sansCompte ? `<b>${esc(p.email)}</b><div class="small faint">compte pas encore créé : ${x.objet === 'livre' ? 'le livre' : 'l\'accès'} sera ajouté à son inscription avec cet e-mail</div>`
  : `<a href="#/admin/apprenant/${x.owner}" style="text-decoration:none"><b>${esc(nm(p))}</b></a><div class="small faint">${esc(p.email)}${(p.data || {}).phone ? ' · ' + esc(telFmt(p.data.phone)) : ''}</div>`;

const sourcePill = x => x.source === 'chariow' ? ' <span class="pill p-info">En ligne</span>' : '';
let abF = 'attente', abQ = '';
A.page('admin/abonnements', {space:'admin', title:'Abonnements & paiements', crumb:'Accès payant à la plateforme', actions:() => `<button class="btn b-line b-sm" data-act="admrefresh">${ic('refresh')}<span class="hs">Actualiser</span></button>`, render(){
  const c = A.cfg(), P = c.pay || {}, D = AD(), pay = D.paiements || [], L = D.profiles.filter(p => !p.admin), t = now();
  const ok = pay.filter(x => x.statut === 'valide'), wait = pay.filter(x => x.statut === 'en_attente');
  const niv = p => A.niveauDe(p), actifs = L.filter(p => niv(p) !== 'aucun'), abonnes = L.filter(p => p.abo && ts(p.abo_fin) > t);
  const exp = L.filter(p => (p.acces === 'actif' && p.acces_fin && ts(p.acces_fin) <= t) || (p.abo && p.abo_fin && ts(p.abo_fin) <= t));
  const mois = new Date(); mois.setDate(1); mois.setHours(0, 0, 0, 0);
  const recM = ok.filter(x => ts(x.traite_at || x.at) >= mois.getTime()).reduce((a, x) => a + (+x.montant || 0), 0), rec = ok.reduce((a, x) => a + (+x.montant || 0), 0);
  let rows = abF === 'attente' ? wait : abF === 'historique' ? pay.filter(x => x.statut !== 'en_attente') : null;
  let users = abF === 'apprenants' ? L : abF === 'actifs' ? actifs : abF === 'abonnes' ? abonnes : abF === 'nonpayes' ? L.filter(p => niv(p) === 'aucun') : abF === 'expires' ? exp : null;
  if(abQ){ const q = abQ.toLowerCase(), hit = p => (nm(p) + ' ' + p.email + ' ' + ((p.data || {}).phone || '')).toLowerCase().includes(q);
    if(rows) rows = rows.filter(x => hit(payer(x)) || String(x.reference).toLowerCase().includes(q) || String(x.numero).includes(q)); if(users) users = users.filter(hit); }
  const tabs = [['attente', 'À valider', wait.length], ['historique', 'Historique', pay.length - wait.length], ['apprenants', 'Tous les apprenants', L.length], ['actifs', 'Accès actifs', actifs.length], ['abonnes', 'Abonnés Basic / Premium', abonnes.length], ['nonpayes', 'Non payés', L.filter(p => niv(p) === 'aucun').length], ['expires', 'Expirés', exp.length], ['reglages', 'Réglages', '']];
  const payRow = x => { const p = payer(x); return `<tr><td class="nowrap">${fdt(x.at)}<div class="small faint">${ago(x.at)}</div></td><td>${payerLink(x, p)}</td><td>${esc(moyenN(x.moyen))}${sourcePill(x)}<div class="small faint mono">${esc(telFmt(x.numero))}</div></td><td class="mono small" style="overflow-wrap:anywhere">${esc(x.reference)}</td><td class="r mono nowrap">${F(x.montant)} F${devPaye(x)}<div class="small faint">${esc(objetTxt(x))}</div></td>
    <td>${x.statut === 'en_attente' ? `<div class="row nw"><button class="btn b-ok b-xs" data-payok="${x.id}">${ic('check')}Valider</button><button class="btn b-line b-xs" data-payno="${x.id}">${ic('x')}Refuser</button></div>` : statutPill(x.statut) + (x.note ? `<div class="small faint">${esc(x.note)}</div>` : '') + (x.traite_at ? `<div class="small faint">${fd(x.traite_at)}</div>` : '')}</td></tr>`; };
  const userRow = p => `<tr><td><a href="#/admin/apprenant/${p.id}" style="text-decoration:none"><b>${esc(nm(p))}</b></a><div class="small faint">${esc(p.email)}</div></td><td class="sub">${esc(telFmt((p.data || {}).phone)) || '—'}</td><td class="sub nowrap">${fd(p.created_at)}</td><td>${A.accesPill(p)}${A.accesDetail(p) ? `<div class="small faint">${esc(A.accesDetail(p))}</div>` : ''}</td><td>${A.accesBtns(p)}</td></tr>`;
  let body;
  if(abF === 'reglages') body = reglages(c, P);
  else if(rows && abF === 'attente') body = `<div class="abo-cards">${rows.map(x => { const p = payer(x); return `<div class="card stack s8"><div class="row between nw"><div style="min-width:0;overflow-wrap:anywhere">${payerLink(x, p)}</div><b class="mono nowrap" style="font-size:17px">${F(x.montant)} F${devPaye(x)}</b></div>
      <dl class="kv"><dt>Moyen</dt><dd>${esc(moyenN(x.moyen))}${sourcePill(x)}</dd>${x.numero ? `<dt>Payé depuis</dt><dd class="mono">${esc(telFmt(x.numero))}</dd>` : ''}<dt>Référence</dt><dd class="mono" style="overflow-wrap:anywhere">${esc(x.reference)}</dd><dt>${x.source === 'chariow' ? 'Reçu' : 'Déclaré'}</dt><dd>${fdt(x.at)} · ${ago(x.at)}</dd><dt>Objet</dt><dd>${esc(objetTxt(x))}</dd></dl>${x.note ? `<p class="sub" style="margin:0">${esc(x.note)}</p>` : ''}
      <div class="row"><button class="btn b-ok b-sm" data-payok="${x.id}">${ic('check')}${x.objet === 'livre' ? 'Valider : remettre le livre' : x.objet === 'abo' ? 'Valider : activer l\'abonnement' : 'Valider : activer l\'accès'}</button><button class="btn b-line b-sm" data-payno="${x.id}">${ic('x')}Refuser</button>${(p.data || {}).phone ? `<a class="btn b-ghost b-sm" target="_blank" rel="noopener" href="${esc(waLink(p.data.phone))}">${ic('whatsapp')}WhatsApp</a>` : ''}</div></div>`; }).join('') || `<div class="card">${A.empty('coins', 'Aucun paiement à valider.')}</div>`}</div>
    ${rows.length ? `<div class="note info">${ic('info')}<span>Avant de valider, vérifiez sur votre téléphone (${moyensActifs().map(m => m[1] + ' ' + telFmt(P[m[0]])).join(' · ')}) que le montant est bien arrivé avec cette référence${rows.some(x => x.source === 'chariow') ? ', ou dans votre tableau de bord Chariow (Ventes) pour un paiement en ligne' : ''}.</span></div>` : ''}`;
  else if(rows) body = `<div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Déclaré le</th><th>Apprenant</th><th>Moyen / numéro</th><th>Référence</th><th class="r">Montant</th><th>${abF === 'attente' ? 'Action' : 'Statut'}</th></tr></thead><tbody>${rows.map(payRow).join('') || `<tr><td colspan="6">${A.empty('coins', abF === 'attente' ? 'Aucun paiement à valider.' : 'Aucun paiement traité.')}</td></tr>`}</tbody></table></div></div>
    ${abF === 'attente' && rows.length ? `<div class="note info">${ic('info')}<span>Avant de valider, vérifiez sur votre téléphone (${moyensActifs().map(m => m[1] + ' ' + telFmt(P[m[0]])).join(' · ')}) que le montant est bien arrivé avec cette référence.</span></div>` : ''}`;
  else body = `<div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Apprenant</th><th>Téléphone</th><th>Inscrit le</th><th>Accès</th><th>Action</th></tr></thead><tbody>${users.map(userRow).join('') || `<tr><td colspan="5">${A.empty('users', 'Aucun apprenant.')}</td></tr>`}</tbody></table></div></div>`;
  return `<div class="kpis">
   <div class="kpi hl"><small>${ic('clock')}Paiements à valider</small><b>${wait.length}</b><em>${wait.length ? F(wait.reduce((a, x) => a + (+x.montant || 0), 0)) + ' FCFA déclarés' : 'rien en attente'}</em></div>
   <div class="kpi"><small>${ic('users')}Accès actifs</small><b style="color:var(--ok)">${actifs.length}</b><em>sur ${L.length} inscrit${L.length > 1 ? 's' : ''}</em></div>
   <div class="kpi"><small>${ic('coins')}Encaissé ce mois</small><b>${F(recM)} F</b><em>paiements validés</em></div>
   <div class="kpi"><small>${ic('chart')}Encaissé au total</small><b>${F(rec)} F</b><em>${ok.length} paiement${ok.length > 1 ? 's' : ''} validé${ok.length > 1 ? 's' : ''}${ok.some(x => x.source === 'chariow') ? ` · dont ${F(ok.filter(x => x.source === 'chariow').reduce((a, x) => a + (+x.montant || 0), 0))} F en ligne` : ''}</em></div>
  </div>
  ${A.paywallOn() ? '' : `<div class="note">${ic('alert')}<span>L'accès payant est <b>désactivé</b> : toute la plateforme est gratuite. Réactivez-le dans l'onglet Réglages.</span></div>`}
  <div class="toolbar">${abF === 'reglages' ? '' : `<label class="search">${ic('search')}<input id="abQ" placeholder="Nom, e-mail, téléphone, référence…" value="${esc(abQ)}"></label>`}<div class="tabs">${tabs.map(x => `<button class="tab ${abF === x[0] ? 'on' : ''}" data-abf="${x[0]}">${x[1]}${x[2] !== '' ? ` <span class="cnt">${x[2]}</span>` : ''}</button>`).join('')}</div></div>
  ${body}`;
}});
function reglages(c, P){
  return `<div class="cols"><div class="card stack">
   <h3 style="margin:0">Accès payant</h3>
   <label class="check"><input type="checkbox" id="ab_paywall" ${c.paywall !== false ? 'checked' : ''}>Activer l'accès payant (sinon toute la plateforme est gratuite)</label>
   <div class="g2"><label class="fld"><span>Chapitres gratuits par matière (sans inscription)</span><input class="inp" type="number" min="0" id="ab_preview" value="${esc(c.preview)}"></label>
    <label class="fld"><span>Prix de l'inscription (FCFA, une seule fois)</span><input class="inp" type="number" min="0" step="500" id="ab_prixAcces" value="${esc(c.prixAcces)}"></label></div>
   <div class="g3"><label class="fld"><span>Jours tout compris après l'inscription</span><input class="inp" type="number" min="0" id="ab_essaiJours" value="${esc(c.essaiJours)}"></label>
    <label class="fld"><span>Prix Basic (FCFA)</span><input class="inp" type="number" min="0" step="500" id="ab_prixBasic" value="${esc(c.prixBasic)}"></label>
    <label class="fld"><span>Prix Premium (FCFA)</span><input class="inp" type="number" min="0" step="500" id="ab_prixPremium" value="${esc(c.prixPremium)}"></label></div>
   <label class="fld" style="max-width:320px"><span>Durée d'un abonnement Basic ou Premium (jours)</span><input class="inp" type="number" min="1" id="ab_aboJours" value="${esc(c.aboJours)}"></label>
   <p class="sub">Inscription = tous les cours à vie + ${esc(c.essaiJours)} jours tout compris ; ensuite formule « Inscrit » (contenus réduits). Chaque abonnement payé ajoute ${esc(c.aboJours)} jours, à la suite de l'essai ou de l'abonnement en cours. Mettez les mêmes prix sur vos produits Chariow.</p>
   <div class="promo-box stack s8"><b class="small">Promotion (facultatif) : prix normal barré en rouge à côté du prix ci-dessus</b>
    <div class="g3"><label class="fld"><span>Prix normal barré (FCFA)</span><input class="inp" type="number" min="0" step="500" id="ab_prixBarre" value="${esc(c.prixBarre || '')}" placeholder="ex. 6000"></label>
     <label class="fld"><span>Fin de l'offre</span><input class="inp" type="date" id="ab_promoFin" value="${esc(c.promoFin || '')}"></label>
     <label class="fld"><span>Nom de l'offre</span><input class="inp" id="ab_promoNom" maxlength="40" value="${esc(c.promoNom || '')}" placeholder="Offre de lancement"></label></div>
    <p class="sub" style="margin:0">${A.promoAcces() ? `Affiché actuellement : ${A.promoOld(A.promoAcces())} <b>${F(montant())} FCFA</b> ${A.promoTag(A.promoAcces())}. ` : A.promoFinie(montant(), c.prixBarre, c.promoFin) ? 'L\'offre est terminée : seul le prix s\'affiche. ' : ''}Laissez « Prix normal barré » vide pour ne pas afficher de promotion ; avec une date de fin, le prix barré disparaît tout seul le lendemain. Mettez le même prix sur Chariow.</p></div>
   <h3 style="margin:8px 0 0">Où les apprenants paient</h3>
   <div class="g2">${MOYENS.map(m => `<label class="fld"><span>${esc(m[1])}${m[0] === 'djamo' ? ' (numéro de téléphone du compte)' : ''}</span><input class="inp" id="ab_pay_${m[0]}" inputmode="tel" value="${esc(P[m[0]] || '')}" placeholder="laisser vide si non utilisé"></label>`).join('')}
    <label class="fld"><span>Nom du bénéficiaire affiché</span><input class="inp" id="ab_pay_titulaire" value="${esc(P.titulaire || '')}"></label></div>
   <label class="fld" style="max-width:320px"><span>WhatsApp pour les preuves de paiement</span><input class="inp" id="ab_whatsapp" inputmode="tel" value="${esc(c.whatsapp || '')}"></label>
   <div class="note bad">${ic('shield')}<span>N'inscrivez jamais un <b>numéro de carte bancaire</b> (16 chiffres, carte Visa Djamo…) : il serait visible par tous les visiteurs et pourrait servir à des fraudes. Pour Djamo, indiquez le numéro de téléphone lié au compte.</span></div>
   <button class="btn b-pri" style="justify-self:start" data-act="absave">${ic('save')}Enregistrer</button>
  </div><div class="card stack"><h3 style="margin:0">Comment ça marche</h3>
   <ol class="abo-steps"><li><b>L'apprenant paie</b> le montant sur votre numéro Wave ou Mobile Money, depuis son téléphone.</li><li><b>Il déclare le paiement</b> sur la plateforme (numéro utilisé et référence du SMS), et peut vous envoyer la capture sur WhatsApp.</li><li><b>Vous vérifiez</b> la réception sur votre téléphone, puis cliquez sur <b>Valider</b> dans l'onglet « À valider » : son accès s'ouvre aussitôt.</li><li>Vous pouvez à tout moment <b>activer ou désactiver</b> un apprenant (onglets Apprenants), par exemple en cas de paiement en espèces ou d'abonnement non renouvelé.</li></ol>
   <p class="sub">Les cours complets ne sont envoyés par le serveur qu'aux comptes dont l'accès est actif : un visiteur ne peut lire que les chapitres gratuits.</p>
   <p class="sub">Les paiements en ligne par Chariow (ci-dessous) n'ont pas besoin de validation : l'accès s'ouvre dès que Chariow confirme le paiement. Vous gardez la main : activer, désactiver ou offrir un accès à tout moment.</p></div></div>
  ${reglagesOffres(c)}
  ${reglagesChariow(c)}
  ${reglagesDevises(c)}`;
}
/* ---------- réglages : contenu de chaque formule ---------- */
function reglagesOffres(c){
  const champ = (n, k) => { const v = A.offre(n)[k], id = `of_${n}_${k}`;
    if(k === 'sujets' || k === 'solveurs') return `<select class="inp sm" id="${id}">${NIVX.map((t, i) => `<option value="${i}" ${+v === i ? 'selected' : ''}>${t}</option>`).join('')}</select>`;
    if(k === 'banque') return `<select class="inp sm" id="${id}"><option value="bts" ${v !== 'tout' ? 'selected' : ''}>BTS (sans solveur)</option><option value="tout" ${v === 'tout' ? 'selected' : ''}>BTS et Licence</option></select>`;
    if(typeof v === 'boolean') return `<input type="checkbox" id="${id}" ${v ? 'checked' : ''} aria-label="${esc(FEAT[k][1])}">`;
    return `<input class="inp sm mono" style="width:90px" type="number" id="${id}" value="${esc(v)}" ${k === 'metres' ? 'min="-1" title="-1 = illimité, 0 = aucun"' : 'min="0"'}>`; };
  return `<div class="card stack"><h3 style="margin:0">Contenu des formules</h3>
   <p class="sub">Ce que voit chaque formule. Premium a toujours tout. Pour le métré : nombre de métrés complets par mois (-1 = illimité, 0 = aucun). Les fonctionnalités non comprises restent visibles, avec un cadenas et l'offre qui les débloque.</p>
   <div class="tw"><table class="t"><thead><tr><th></th><th>Inscrit (après l'essai)</th><th>Basic</th><th>Premium</th></tr></thead><tbody>${Object.entries(FEAT).map(([k, [i, t]]) => `<tr><td>${ic(i)} ${esc(t)}</td><td>${champ('inscrit', k)}</td><td>${champ('basic', k)}</td><td class="sub">${esc(fv(k, A.offre('premium')[k]))}</td></tr>`).join('')}</tbody></table></div>
   <button class="btn b-pri" style="justify-self:start" data-act="offsave">${ic('save')}Enregistrer le contenu des formules</button></div>`;
}
A.on('click', '[data-act="offsave"]', async () => {
  const offres = {};
  ['inscrit', 'basic'].forEach(n => { offres[n] = {}; Object.keys(FEAT).forEach(k => { const el = $(`#of_${n}_${k}`); if(!el) return;
    offres[n][k] = el.type === 'checkbox' ? el.checked : k === 'banque' ? el.value : Math.max(k === 'metres' ? -1 : 0, Math.round(+el.value || 0)); }); });
  if(await A.db.saveSettings({offres})){ A.resetCours(); toast('Contenu des formules enregistré', 'check'); A.refresh(); }
});
/* ---------- réglages : paiement en ligne Chariow ---------- */
let chwEtat;   // undefined : à lire ; null : en cours ou indisponible
function reglagesChariow(c){
  const ch = c.chariow || {};
  if(chwEtat === undefined && S.mode === 'sb'){ chwEtat = null; A.db.chariowEtat().then(r => { chwEtat = r || false; A.refresh(); }); }
  const e = chwEtat || {}, hook = e.webhook || (location.origin + '/api/chariow/webhook');
  const lig = (ok, t, d) => `<div class="row nw chk-l"><span class="pill ${ok ? 'p-ok' : 'p-warn'} dot">${ok ? 'OK' : 'À faire'}</span><span><b>${t}</b><span class="sub" style="display:block">${d}</span></span></div>`;
  const etat = S.mode === 'local' ? `<div class="note info">${ic('info')}<span>Mode démonstration : le paiement en ligne est <b>simulé</b> (l'apprenant clique, l'accès s'ouvre aussitôt). Sur votre site Netlify, il passe réellement par Chariow.</span></div>`
    : chwEtat === null ? '<p class="sub">Vérification de la configuration du serveur…</p>'
    : chwEtat === false ? `<div class="note">${ic('alert')}<span>La fonction de paiement en ligne ne répond pas : vérifiez que le site est bien déployé sur Netlify avec le dossier <b>netlify/functions</b>.</span></div>`
    : `<div class="stack s8">${lig(e.api, 'Clé API Chariow', 'Variable Netlify CHARIOW_API_KEY : crée la page de paiement et vérifie chaque vente.')}${lig(e.secret, 'Secret du Pulse', 'Variable Netlify CHARIOW_WEBHOOK_SECRET (commence par whsec_) : prouve que l\'avis de paiement vient bien de Chariow.')}${lig(e.service, 'Clé de service Supabase', 'Variable Netlify SUPABASE_SERVICE_ROLE_KEY : permet d\'ouvrir l\'accès automatiquement.')}${lig(e.mail, 'E-mail de confirmation (facultatif)', 'Variables RESEND_API_KEY et MAIL_FROM. Sans elles, l\'acheteur reçoit tout de même le reçu de Chariow.')}</div>`;
  return `<div class="cols"><div class="card stack">
   <h3 style="margin:0">Paiement en ligne international (Chariow)</h3>
   <p class="sub">Pour les apprenants hors de Côte d'Ivoire, ou quand Wave et MTN ne passent pas : carte bancaire, Mobile Money d'autres pays… depuis votre boutique Chariow. <b>L'accès s'ouvre tout seul</b> dès la confirmation du paiement.</p>
   <div class="g2"><label class="fld"><span>Adresse de votre boutique Chariow</span><input class="inp" id="ab_chw_boutique" value="${esc(ch.boutique || '')}" placeholder="https://votre-boutique.mychariow.com"></label>
    <div class="fld"><span>Raccourcis</span><div class="row" style="padding-top:2px">${/^https:\/\//.test(ch.boutique || '') ? `<a class="btn b-line b-sm" href="${esc(ch.boutique)}" target="_blank" rel="noopener">${ic('globe')}Ma boutique</a>` : ''}<a class="btn b-line b-sm" href="https://app.chariow.com" target="_blank" rel="noopener">${ic('cog')}Tableau de bord Chariow</a></div></div></div>
   <div class="g2"><label class="fld"><span>Inscription : lien de la page produit Chariow</span><input class="inp" id="ab_chw_lienAcces" value="${esc(ch.lienAcces || '')}" placeholder="${esc(/^https:\/\//.test(ch.boutique || '') ? ch.boutique.replace(/\/+$/, '') + '/prd_…' : 'https://…')}"></label>
    <label class="fld"><span>Inscription : identifiant du produit</span><input class="inp mono" id="ab_chw_prdAcces" value="${esc(ch.prdAcces || '')}" placeholder="prd_…"></label></div>
   <div class="g2"><label class="fld"><span>Abonnement Basic : lien du produit</span><input class="inp" id="ab_chw_lienBasic" value="${esc(ch.lienBasic || '')}" placeholder="https://…/prd_…"></label>
    <label class="fld"><span>Abonnement Basic : identifiant du produit</span><input class="inp mono" id="ab_chw_prdBasic" value="${esc(ch.prdBasic || '')}" placeholder="prd_…"></label></div>
   <div class="g2"><label class="fld"><span>Abonnement Premium : lien du produit</span><input class="inp" id="ab_chw_lienPremium" value="${esc(ch.lienPremium || '')}" placeholder="https://…/prd_…"></label>
    <label class="fld"><span>Abonnement Premium : identifiant du produit</span><input class="inp mono" id="ab_chw_prdPremium" value="${esc(ch.prdPremium || '')}" placeholder="prd_…"></label></div>
   <label class="check"><input type="checkbox" id="ab_chw_auto" ${ch.auto !== false ? 'checked' : ''}>Ouvrir l'accès automatiquement dès que Chariow confirme le paiement (sinon le paiement arrive dans « À valider » et vous confirmez vous-même)</label>
   <p class="sub">Pour vos livres, le lien et l'identifiant Chariow se renseignent sur la fiche de chaque livre (Espace PDG › Livres).</p>
   <button class="btn b-pri" style="justify-self:start" data-act="absave">${ic('save')}Enregistrer</button>
  </div><div class="card stack">
   <h3 style="margin:0">Branchement de Chariow</h3>
   ${etat}
   <label class="fld"><span>Adresse à coller dans Chariow › Automatisation › Pulses</span><div class="row nw"><input class="inp mono" readonly value="${esc(hook)}"><button class="btn b-line b-sm" data-copy="${esc(hook)}">${ic('copy')}Copier</button></div></label>
   <ol class="abo-steps small">
    <li>Dans <a href="https://app.chariow.com" target="_blank" rel="noopener">votre tableau de bord Chariow</a>, créez le produit <b>« ${esc(A.brandText())} : accès complet »</b> au prix de ${F(c.prixAcces)} FCFA (produit numérique), puis copiez son lien${/^https:\/\//.test(ch.boutique || '') ? ` (de la forme <span class="mono">${esc(ch.boutique.replace(/^https:\/\//, '').replace(/\/+$/, ''))}/prd_…</span>)` : ''} ci-contre : l'identifiant prd_… est repris automatiquement.</li>
    <li>Dans <b>Automatisation › Pulses</b>, ajoutez un Pulse « vente réussie » vers l'adresse ci-dessus, et copiez son secret (whsec_…).</li>
    <li>Dans <b>Netlify › Site configuration › Environment variables</b>, ajoutez CHARIOW_API_KEY, CHARIOW_WEBHOOK_SECRET et SUPABASE_SERVICE_ROLE_KEY, puis redéployez.</li>
    <li>Faites un achat test : l'accès doit s'ouvrir seul et le paiement apparaître dans l'Historique avec l'étiquette « En ligne ».</li>
   </ol>
   <div class="note bad">${ic('shield')}<span>Ne collez jamais ces clés secrètes ici, dans un message ou dans le code : uniquement dans les variables d'environnement de Netlify.</span></div>
  </div></div>`;
}
/* ---------- réglages : devises et taux ---------- */
function reglagesDevises(c){
  const off = c.devisesOff || [];
  return `<div class="card stack"><h3 style="margin:0">Devises affichées</h3>
   <p class="sub">Les prix restent fixés en FCFA. Chaque visiteur peut afficher l'équivalent dans sa devise (sélecteur « Devise ») et payer en ligne dans cette devise. Les taux ci-dessous sont indicatifs : mettez-les à jour quand vous le souhaitez (nombre de FCFA pour 1 unité). Le FCFA, l'euro et l'escudo cap-verdien ont une parité fixe.</p>
   <div class="tw"><table class="t"><thead><tr><th>Proposée</th><th>Devise</th><th>Pays</th><th class="r">1 unité =</th><th class="r">${F(+c.prixAcces || 0)} FCFA =</th></tr></thead><tbody>${A.DEVISES.map(d => { const fixe = A.DEV_FIXES.includes(d.c);
     return `<tr><td>${d.c === 'XOF' ? '<span class="sub">toujours</span>' : `<input type="checkbox" data-devon="${d.c}" ${off.includes(d.c) ? '' : 'checked'} aria-label="Proposer ${esc(d.n)}">`}</td><td><b>${d.c}</b> <span class="sub">${esc(d.n)}</span></td><td class="sub">${esc(d.p)}</td>
      <td class="r nowrap">${fixe ? `<span class="mono">${String(d.t).replace('.', ',')}</span> <span class="sub">FCFA (fixe)</span>` : `<input class="inp sm mono" style="width:110px;text-align:right" type="number" min="0" step="any" data-devtx="${d.c}" value="${esc(String(A.taux(d.c)))}"> <span class="sub">FCFA</span>`}</td><td class="r mono nowrap">${esc(A.money(+c.prixAcces || 0, d.c))}</td></tr>`; }).join('')}</tbody></table></div>
   <button class="btn b-pri" style="justify-self:start" data-act="devsave">${ic('save')}Enregistrer les devises</button></div>`;
}
A.accesBtns = p => {
  if(p.admin) return '<span class="sub">—</span>';
  const act = p.acces === 'actif' && (!p.acces_fin || ts(p.acces_fin) > now()), j = +A.cfg().aboJours || 31, abo = p.abo && ts(p.abo_fin) > now();
  return `<div class="row" style="gap:6px">${act ? `<button class="btn b-line b-xs" data-acc="${p.id}" data-v="gratuit">${ic('lock')}Désactiver</button>` : `<button class="btn b-ok b-xs" data-acc="${p.id}" data-v="actif">${ic('check')}Activer l'inscription</button>`}${A.cfg().formule === 'mensuel' || p.acces_fin ? `<button class="btn b-line b-xs" data-acc="${p.id}" data-v="mois">${ic('cal')}+1 mois</button>` : ''}
    <button class="btn b-line b-xs" data-abo="${p.id}" data-plan="basic">+${j} j Basic</button><button class="btn b-line b-xs" data-abo="${p.id}" data-plan="premium">+${j} j Premium</button>${abo ? `<button class="btn b-ghost b-xs" data-abo="${p.id}" data-plan="">${ic('x')}Retirer l'abonnement</button>` : ''}</div>`;
};
A.on('click', '[data-abo]', async el => {
  const id = el.dataset.abo, plan = el.dataset.plan, p = profOf(id), j = (+A.cfg().aboJours || 31) * DAY;
  if(!plan && el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = ic('alert') + 'Confirmer'; return; }
  const base = plan && p.abo === plan && ts(p.abo_fin) > now() ? ts(p.abo_fin) : now();
  if(await A.db.setAbo(id, plan, plan ? new Date(base + j).toISOString() : null)){ toast(plan ? `Abonnement ${plan === 'premium' ? 'Premium' : 'Basic'} jusqu'au ${fd(base + j)}` : 'Abonnement retiré', plan ? 'check' : 'lock'); A.refresh(); }
});
A.accesCard = u => u.admin ? '' : `<div class="card"><h3>Formule ${A.accesPill(u)}</h3><dl class="kv"><dt>Inscription</dt><dd>${u.acces === 'actif' ? (u.acces_fin ? 'Active jusqu\'au ' + fd(u.acces_fin) : 'Payée') : 'Non payée (chapitres gratuits seulement)'}</dd>${u.acces_at ? `<dt>Activée le</dt><dd>${fd(u.acces_at)}</dd>` : ''}${u.essai_fin ? `<dt>Essai Premium</dt><dd>${ts(u.essai_fin) > now() ? 'jusqu\'au' : 'terminé le'} ${fd(u.essai_fin)}</dd>` : ''}${u.abo ? `<dt>Abonnement</dt><dd>${u.abo === 'premium' ? 'Premium' : 'Basic'} ${ts(u.abo_fin) > now() ? 'jusqu\'au' : 'terminé le'} ${fd(u.abo_fin)}</dd>` : ''}</dl>
  ${(() => { const L = (AD().paiements || []).filter(x => x.owner === u.id); return L.length ? `<div class="stack s8" style="margin:10px 0">${L.slice(0, 6).map(x => `<div class="row between nw small"><span>${fd(x.at)} · ${esc(moyenN(x.moyen))} · <span class="mono">${esc(x.reference)}</span></span><span class="row nw">${F(x.montant)} F ${x.statut === 'en_attente' ? `<button class="btn b-ok b-xs" data-payok="${x.id}">Valider</button>` : statutPill(x.statut)}</span></div>`).join('')}</div>` : '<p class="sub" style="margin:8px 0">Aucun paiement déclaré.</p>'; })()}
  ${(() => { const L = (AD().achats || []).filter(a => a.owner === u.id); return L.length ? `<p class="small" style="margin:0 0 10px"><b>Livres :</b> ${L.map(a => esc((((S.livres || []).find(l => l.id === a.livre) || {}).titre || a.livre)) + (a.source === 'offert' ? ' (offert)' : '')).join(', ')}</p>` : ''; })()}
  ${A.accesBtns(u)}</div>`;
A.on('click', '[data-act="devsave"]', async () => {
  const devises = {}, devisesOff = [];
  A.$$('[data-devtx]').forEach(i => { const v = +i.value, D = A.devInfo(i.dataset.devtx); if(v > 0 && Math.abs(v - D.t) / D.t > 1e-6) devises[D.c] = v; });
  A.$$('[data-devon]').forEach(i => { if(!i.checked) devisesOff.push(i.dataset.devon); });
  if(await A.db.saveSettings({devises, devisesOff})){ toast('Devises enregistrées', 'coins'); A.refresh(); }
});
A.on('input', '#abQ', el => { abQ = el.value; A.refresh(); });
A.on('click', '[data-abf]', el => { abF = el.dataset.abf; A.refresh(); });
A.on('click', '[data-payok]', async el => { el.disabled = true; if(await A.db.treatPayment(+el.dataset.payok, true, '')){ toast('Paiement validé : accès activé', 'check'); A.refresh(); } else el.disabled = false; });
A.on('click', '[data-payno]', async el => {
  if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = ic('alert') + 'Confirmer le refus'; return; }
  if(await A.db.treatPayment(+el.dataset.payno, false, 'Paiement non reçu')){ toast('Paiement refusé', 'x'); A.refresh(); }
});
A.on('click', '[data-acc]', async el => {
  const id = el.dataset.acc, v = el.dataset.v, p = profOf(id);
  let ok;
  if(v === 'mois'){ const base = Math.max(now(), p.acces_fin ? ts(p.acces_fin) : 0); ok = await A.db.setAccess(id, 'actif', new Date(base + 30.44*DAY).toISOString()); }
  else if(v === 'actif') ok = await A.db.setAccess(id, 'actif', A.cfg().formule === 'mensuel' ? new Date(now() + 30.44*DAY).toISOString() : null);
  else { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = ic('alert') + 'Confirmer'; return; } ok = await A.db.setAccess(id, 'gratuit', null); }
  if(ok){ toast(v === 'gratuit' ? 'Accès désactivé' : 'Accès activé', v === 'gratuit' ? 'lock' : 'check'); A.refresh(); }
});
A.on('click', '[data-act="absave"]', async () => {
  const pay = {}; MOYENS.forEach(m => pay[m[0]] = A.val('ab_pay_' + m[0]).trim()); pay.titulaire = A.val('ab_pay_titulaire').trim();
  if(Object.values(pay).concat([A.val('ab_whatsapp')]).some(v => String(v).replace(/\D/g, '').length >= 16)){ toast('Un numéro de carte bancaire ne doit pas être affiché : indiquez un numéro de téléphone', 'x'); return; }
  const prd = (lien, v) => (String(v || '').trim() || (String(lien || '').match(/prd_[A-Za-z0-9]+/) || [''])[0]);
  const c0 = A.cfg().chariow || {};
  const chariow = {boutique:A.val('ab_chw_boutique').trim().replace(/\/+$/, ''), lienAcces:A.val('ab_chw_lienAcces').trim(), lienMois:c0.lienMois || '', prdMois:c0.prdMois || '',
    lienBasic:A.val('ab_chw_lienBasic').trim(), lienPremium:A.val('ab_chw_lienPremium').trim(), auto:$('#ab_chw_auto') ? $('#ab_chw_auto').checked : true};
  chariow.prdAcces = prd(chariow.lienAcces, A.val('ab_chw_prdAcces')); chariow.prdBasic = prd(chariow.lienBasic, A.val('ab_chw_prdBasic')); chariow.prdPremium = prd(chariow.lienPremium, A.val('ab_chw_prdPremium'));
  if([chariow.boutique, chariow.lienAcces, chariow.lienBasic, chariow.lienPremium].some(l => l && !/^https:\/\//.test(l))){ toast('Les liens Chariow doivent commencer par https://', 'x'); return; }
  if(/whsec_|sk_|sb_secret_|service_role/i.test(JSON.stringify(chariow))){ toast('Une clé secrète ne doit jamais être enregistrée ici : mettez-la dans les variables Netlify', 'x'); return; }
  const n0 = (id, d, min = 0) => { const v = Math.round(+A.val(id)); return isNaN(v) ? d : Math.max(min, v); }, c1 = A.cfg();
  const patch = {paywall:$('#ab_paywall').checked, formule:c1.formule || 'unique', preview:n0('ab_preview', 1), prixAcces:n0('ab_prixAcces', 4000), prixMois:+c1.prixMois || 2000, pay, whatsapp:A.val('ab_whatsapp').trim(), chariow,
    essaiJours:n0('ab_essaiJours', 31), aboJours:n0('ab_aboJours', 31, 1), prixBasic:n0('ab_prixBasic', 2000), prixPremium:n0('ab_prixPremium', 5000),
    prixBarre:Math.max(0, Math.round(+A.val('ab_prixBarre') || 0)) || '', promoFin:/^\d{4}-\d{2}-\d{2}$/.test(A.val('ab_promoFin')) ? A.val('ab_promoFin') : '', promoNom:A.val('ab_promoNom').trim().slice(0, 40)};
  const prixActif = patch.formule === 'mensuel' ? patch.prixMois : patch.prixAcces;
  if(patch.prixBarre && patch.prixBarre <= prixActif){ toast('Le prix barré doit être plus élevé que le prix de l\'' + (patch.formule === 'mensuel' ? 'abonnement' : 'inscription') + ' (ou laissez-le vide)', 'x'); return; }
  if(await A.db.saveSettings(patch)){ A.resetCours(); toast('Réglages de l\'accès payant enregistrés', 'coins'); A.refresh(); }
});
})();
