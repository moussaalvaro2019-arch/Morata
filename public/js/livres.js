/* =====================================================================
   LIVRES DE LA DIRECTION
   - Site public : « Les livres de … » et la fiche de chaque livre (visible de tous)
   - Apprenant : catalogue, achat (paiement en ligne Chariow ou Mobile Money), « Mes livres »
   - PDG : ajouter, modifier, masquer, supprimer un livre ; ventes ; offrir un livre
   Le lien du livre complet n'est remis qu'aux acheteurs (fonction SQL livre_fichier).
   Les prix sont en FCFA ; chacun voit l'équivalent dans la devise de son choix.
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S, fd, fdt, ago} = A;
const pub = () => (S.livres || []).filter(l => l.publie);
const livre = id => (S.livres || []).find(l => l.id === id);
const owned = id => (S.achats || []).some(a => a.livre === id);
const gratuit = l => !(+l.prix > 0);
const safeImg = u => /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(u || '') || /^https:\/\/\S+$/i.test(u || '');
const safeUrl = u => /^https?:\/\/\S+$/i.test(u || '');
const coul = l => /^#[0-9a-f]{3,8}$/i.test(l.couleur || '') ? l.couleur : '#1D4FA8';
const auteur = l => l.auteur || A.cfg().ceo;

/* couverture : l'image envoyée par la direction, sinon une couverture dessinée aux couleurs du livre */
A.livreCover = (l, big, tag) => `<div class="lcov${big ? ' lbig' : ''}">${tag || ''}${l.couverture && safeImg(l.couverture) ? `<img src="${esc(l.couverture)}" alt="Couverture du livre ${esc(l.titre)}" loading="lazy">`
  : `<div class="lgen" style="--c:${esc(coul(l))}"><span class="lg-k">${esc(A.brandText())}</span><span class="lg-t">${esc(l.titre || 'Sans titre')}</span><span class="lg-a">${esc(auteur(l))}</span></div>`}</div>`;
const prixHtml = l => gratuit(l) ? 'Gratuit' : `${F(l.prix)} FCFA${A.eq(l.prix) ? `<small>${esc(A.eq(l.prix))}</small>` : ''}`;
const card = (l, base) => `<a class="lcard" href="#/${base}/${l.id}">${A.livreCover(l, false, S.me && owned(l.id) ? '<span class="pill p-ok tag">Acheté</span>' : !l.publie ? '<span class="pill p-mute tag">Masqué</span>' : '')}<b>${esc(l.titre)}</b><span class="sub">${esc(auteur(l))}</span><span class="lprix">${prixHtml(l)}</span></a>`;
const fiche = (l, actions) => `<div class="ldet">${A.livreCover(l, true)}<div class="stack s16" style="min-width:0">
  <div class="stack s8"><span class="kick">${l.vedette ? 'Nouveauté' : 'Livre'}${l.publie ? '' : ' · masqué'}</span><h1 style="font-size:clamp(26px,3.6vw,38px)">${esc(l.titre)}</h1>${l.sousTitre ? `<p style="margin:0;font-size:17px;color:var(--muted)">${esc(l.sousTitre)}</p>` : ''}<p style="margin:0">par <b>${esc(auteur(l))}</b></p></div>
  ${(() => { const m = [l.format, l.pages ? l.pages + ' pages' : '', l.annee, l.langue, l.isbn ? 'ISBN ' + l.isbn : ''].filter(Boolean); return m.length ? `<div class="lmeta">${m.map(x => `<span class="pill p-mute">${esc(String(x))}</span>`).join('')}</div>` : ''; })()}
  <div class="row between"><div class="stack s8"><div class="price-big" style="font-size:clamp(28px,4vw,38px)">${gratuit(l) ? 'Gratuit' : F(l.prix) + ' <small>FCFA</small>'}</div>${!gratuit(l) && A.eq(l.prix) ? `<span class="sub">${esc(A.eq(l.prix))}</span>` : ''}</div>${gratuit(l) ? '' : A.devSel()}</div>
  ${l.resume ? `<p style="font-size:16px;margin:0">${esc(l.resume)}</p>` : ''}
  ${actions}
  ${l.description ? `<div class="md">${A.md(l.description).html}</div>` : ''}
</div></div>`;
const extrait = l => safeUrl(l.extrait) ? `<a class="btn b-line" href="${esc(l.extrait)}" target="_blank" rel="noopener">${ic('eye')}Lire un extrait</a>` : '';

/* section de la page d'accueil */
A.livresHome = () => {
  const L = pub(); if(!L.length) return '';
  const v = L.filter(l => l.vedette).concat(L.filter(l => !l.vedette)).slice(0, 4);
  return `<section class="sect"><div class="sech"><div><span class="kick">Bibliothèque</span><h2>Les livres de ${esc(A.cfg().ceo)}</h2></div><a class="btn b-line" href="#/${S.me ? 'app/livres' : 'livres'}">Tous les livres ${ic('arrow')}</a></div>
    <div class="lgrid">${v.map(l => card(l, S.me ? 'app/livre' : 'livre')).join('')}</div></section>`;
};

/* ---------- site public ---------- */
A.page('livres', {space:'site', title:'Livres', render(){
  const c = A.cfg(), L = pub();
  return `<div class="wrap"><section class="sect stack s20">
   <div class="lhero"><div class="stack s8"><span class="kick">Bibliothèque</span><h1 style="font-size:clamp(28px,4vw,40px)">Les livres de ${esc(c.ceo)}</h1><p class="muted">Des ouvrages pratiques pour apprendre et exercer les métiers du bâtiment, à lire sur téléphone, tablette ou ordinateur. Paiement par Mobile Money${A.chwDispo('livre', '') || L.some(l => l.prdChariow || l.lienAchat) ? ' ou en ligne depuis n\'importe quel pays' : ''}.</p></div>${L.some(l => !gratuit(l)) ? A.devSel() : ''}</div>
   ${L.length ? `<div class="lgrid">${L.map(l => card(l, 'livre')).join('')}</div>` : A.empty('books', 'Les livres arrivent bientôt.')}
  </section></div>`;
}});
A.page('livre/:id', {space:'site', title:p => (livre(p.id) || {}).titre || 'Livre', render(p){
  const l = livre(p.id);
  if(!l || (!l.publie && !(S.me && S.me.isAdmin))) return `<div class="wrap"><section class="sect">${A.empty('books', 'Ce livre n\'est pas disponible. <a href="#/livres">Voir tous les livres</a>')}</section></div>`;
  if(S.me){ location.replace('#/app/livre/' + l.id); return null; }
  const acts = `<div class="row"><button class="btn b-pri b-lg" data-lvnext="${l.id}" data-to="inscription">${ic(gratuit(l) ? 'book' : 'card')}${gratuit(l) ? 'Créer mon compte pour le lire' : 'Acheter ce livre'}</button><button class="btn b-line" data-lvnext="${l.id}" data-to="connexion">J'ai déjà un compte</button>${extrait(l)}</div>
   ${!gratuit(l) ? `<p class="sub">Créez votre compte (gratuit) puis payez par ${esc(A.moyensActifs().map(m => m[1]).join(', ') || 'Mobile Money')}${A.chwDispo('livre', l.id) ? ' ou en ligne par carte bancaire, depuis n\'importe quel pays' : ''}.${safeUrl(l.lienAchat) ? ` Vous pouvez aussi <a href="${esc(l.lienAchat)}" target="_blank" rel="noopener">l'acheter directement sur Chariow</a> : créez ensuite votre compte avec la même adresse e-mail, le livre y apparaîtra automatiquement.` : ''}</p>` : ''}`;
  return `<div class="wrap"><section class="sect stack s20"><a class="sub" href="#/livres">${ic('back')} Tous les livres</a>${fiche(l, acts)}</section></div>`;
}});
A.on('click', '[data-lvnext]', el => { A.ss.set('next', '#/app/livre/' + el.dataset.lvnext); A.go('#/' + el.dataset.to); });

/* ---------- espace apprenant ---------- */
let lvTab = 'tous', lvMode = '', lvMoyen = '';
const FICH = {};   // liens des livres achetés (demandés au serveur une fois)
A.page('app/livres', {space:'app', free:true, title:'Livres', crumb:'La bibliothèque de la plateforme', render(){
  const L = pub(), mine = (S.livres || []).filter(l => owned(l.id) || (l.publie && gratuit(l)));
  const list = lvTab === 'miens' ? mine : L;
  return `<div class="toolbar"><div class="tabs"><button class="tab ${lvTab === 'tous' ? 'on' : ''}" data-lvtab="tous">${ic('books')}Catalogue <span class="cnt">${L.length}</span></button><button class="tab ${lvTab === 'miens' ? 'on' : ''}" data-lvtab="miens">${ic('book')}Mes livres <span class="cnt">${mine.length}</span></button></div>${L.some(l => !gratuit(l)) ? A.devSel() : ''}</div>
   ${list.length ? `<div class="lgrid">${list.map(l => card(l, 'app/livre')).join('')}</div>` : `<div class="card">${A.empty('books', lvTab === 'miens' ? 'Vous n\'avez pas encore de livre : parcourez le catalogue.' : 'Aucun livre pour le moment : la direction les ajoutera bientôt.')}</div>`}`;
}});
A.on('click', '[data-lvtab]', el => { lvTab = el.dataset.lvtab; A.refresh(); });

function momoBox(l){
  const ms = A.moyensActifs(), P = A.cfg().pay || {};
  if(!ms.length) return `<p class="sub">Contactez la direction sur WhatsApp pour acheter ce livre.</p>`;
  if(!ms.find(m => m[0] === lvMoyen)) lvMoyen = ms[0][0];
  const num = P[lvMoyen] || '';
  return `${ms.length > 1 ? `<div class="tabs">${ms.map(m => `<button class="tab ${lvMoyen === m[0] ? 'on' : ''}" data-lvmoyen="${m[0]}"><i class="abo-dot" style="background:${m[2]}"></i>${esc(m[1])}</button>`).join('')}</div>` : ''}
   <ol class="abo-steps"><li><b>Envoyez ${F(l.prix)} FCFA par ${esc(A.moyenN(lvMoyen))}</b> au numéro :<div class="abo-num"><span class="mono">${esc(A.telFmt(num))}</span><button class="btn b-line b-sm" data-copy="${esc(String(num).replace(/\s/g, ''))}">${ic('copy')}Copier</button></div><span class="sub">Bénéficiaire : ${esc(P.titulaire || A.cfg().ceo)}.</span></li>
    <li><b>Déclarez le paiement</b> avec la référence du SMS : la direction vérifie la réception et le livre apparaît dans « Mes livres ».</li></ol>
   <form class="stack" id="fPayLv" data-livre="${l.id}"><div class="g2"><label class="fld"><span>Numéro utilisé pour payer</span><input class="inp" id="lvNum" type="tel" inputmode="tel" value="${esc((S.me.data && S.me.data.phone) || '')}" required></label><label class="fld"><span>Référence de la transaction</span><input class="inp" id="lvRef" placeholder="ex. TXN123456" required></label></div>
    <div class="row"><button class="btn b-pri" type="submit">${ic('check')}J'ai payé : déclarer mon paiement</button></div></form>`;
}
A.page('app/livre/:id', {space:'app', free:true, title:p => (livre(p.id) || {}).titre || 'Livre', crumb:'<a href="#/app/livres">Livres</a>', render(p){
  const l = livre(p.id);
  if(!l || (!l.publie && !S.me.isAdmin)) return `<div class="card">${A.empty('books', 'Ce livre n\'est pas disponible. <a href="#/app/livres">Voir les livres</a>')}</div>`;
  const has = owned(l.id) || gratuit(l) || S.me.isAdmin;
  let box;
  if(has){
    if(FICH[l.id] === undefined){ FICH[l.id] = null; A.db.livreFichier(l.id).then(u => { FICH[l.id] = u || ''; A.refresh(); }); }
    const u = FICH[l.id];
    box = `<div class="lbuy"><div class="note ok">${ic('check')}<span>${owned(l.id) ? 'Vous avez ce livre. Bonne lecture !' : gratuit(l) ? 'Ce livre est offert à tous les inscrits : bonne lecture !' : 'Compte administrateur : accès au livre.'}</span></div>
     <div class="row">${u === null ? `<span class="sub">${ic('refresh')} Préparation du lien…</span>` : safeUrl(u) ? `<a class="btn b-pri b-lg" href="${esc(u)}" target="_blank" rel="noopener">${ic('book')}Ouvrir le livre</a>` : ''}${extrait(l)}</div>
     <p class="sub">${u && safeUrl(u) ? 'Le livre s\'ouvre dans un nouvel onglet : vous pouvez le télécharger pour le lire hors connexion. Ce lien est personnel, merci de ne pas le partager.' : u === '' ? `Le fichier de ce livre vous est remis directement par la direction (e-mail ou WhatsApp${A.cfg().whatsapp ? ' ' + esc(A.telFmt(A.cfg().whatsapp)) : ''})${owned(l.id) ? ' ; si vous l\'avez acheté sur Chariow, il est aussi dans l\'e-mail de confirmation de Chariow' : ''}.` : ''}</p></div>`;
  }else{
    const wait = (S.pay || []).find(x => x.objet === 'livre' && x.livre === l.id && x.statut === 'en_attente');
    const chw = A.chwDispo('livre', l.id), modes = [chw ? 'chariow' : null, A.moyensActifs().length ? 'momo' : null].filter(Boolean);
    if(!modes.includes(lvMode)) lvMode = modes[0] || 'momo';
    box = `<div class="lbuy"><b style="font-size:16px">Acheter ce livre</b>
     ${wait ? `<div class="note info">${ic('clock')}<span><b>Paiement déclaré ${ago(wait.at)}</b> (${esc(A.moyenN(wait.moyen))}, réf. ${esc(wait.reference)}) : le livre sera ajouté dès la validation par la direction.</span></div>` : ''}
     ${modes.length > 1 ? `<div class="paymodes"><button class="paymode ${lvMode === 'chariow' ? 'on' : ''}" data-lvmode="chariow"><span class="pm-ic">${ic('globe')}</span><span><b>Paiement en ligne · tous pays</b><small>carte bancaire, Mobile Money… · livre disponible tout de suite</small></span></button><button class="paymode ${lvMode === 'momo' ? 'on' : ''}" data-lvmode="momo"><span class="pm-ic">${ic('phone')}</span><span><b>Mobile Money · Côte d'Ivoire</b><small>${esc(A.moyensActifs().map(m => m[1]).join(', '))} · validé par la direction</small></span></button></div>` : ''}
     ${lvMode === 'chariow' ? A.chwBox('livre', l.id, +l.prix) : momoBox(l)}
     ${extrait(l) ? `<div class="row">${extrait(l)}</div>` : ''}</div>`;
  }
  return `<div class="stack s20">${A.chwRetour('livre', l.id)}${fiche(l, box)}</div>`;
}});
A.on('click', '[data-lvmode]', el => { lvMode = el.dataset.lvmode; A.refresh(); });
A.on('click', '[data-lvmoyen]', el => { lvMoyen = el.dataset.lvmoyen; A.refresh(); });
A.on('submit', '#fPayLv', async el => {
  const r = await A.db.declarePayment(lvMoyen, A.val('lvNum'), A.val('lvRef'), 'livre', el.dataset.livre);
  if(!r.ok){ toast(r.msg || 'Erreur', 'x'); return; }
  toast('Paiement déclaré : la direction va le vérifier', 'check'); A.refresh();
});

/* ---------- Espace PDG : mes livres ---------- */
const AD = () => S.adm || {profiles:[], paiements:[], achats:[]};
A.page('admin/livres', {space:'admin', title:'Livres', crumb:'Vos livres : catalogue, ventes, accès', actions:() => `<a class="btn b-pri b-sm" href="#/admin/livre/nouveau">${ic('plus')}Ajouter un livre</a>`, render(){
  const L = S.livres || [], ach = AD().achats || [], pay = (AD().paiements || []).filter(x => x.objet === 'livre');
  const ventes = id => ach.filter(a => a.livre === id && a.source !== 'offert').length, offerts = id => ach.filter(a => a.livre === id && a.source === 'offert').length;
  const recette = id => pay.filter(x => (!id || x.livre === id) && x.statut === 'valide').reduce((a, x) => a + (+x.montant || 0), 0);
  const att = pay.filter(x => x.statut === 'en_attente');
  return `<div class="kpis">
    <div class="kpi hl"><small>${ic('books')}Livres publiés</small><b>${L.filter(l => l.publie).length}</b><em>${L.length} au total</em></div>
    <div class="kpi"><small>${ic('check')}Exemplaires vendus</small><b>${ach.filter(a => a.source !== 'offert').length}</b><em>${ach.filter(a => a.source === 'offert').length} offert(s)</em></div>
    <div class="kpi"><small>${ic('coins')}Recette des livres</small><b>${F(recette())} F</b><em>paiements validés</em></div>
    <div class="kpi"><small>${ic('clock')}Paiements à valider</small><b>${att.length}</b><em>${att.length ? '<a href="#/admin/abonnements">les voir</a>' : 'rien en attente'}</em></div>
   </div>
   ${L.length ? `<div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Livre</th><th class="r">Prix</th><th>Visible</th><th class="r">Ventes</th><th class="r">Recette</th><th>Actions</th></tr></thead><tbody>${L.map(l => `<tr>
     <td><div class="row nw" style="gap:12px"><span class="lthumb">${A.livreCover(l)}</span><span style="min-width:0"><a href="#/admin/livre/${l.id}" style="text-decoration:none"><b>${esc(l.titre)}</b></a><div class="small faint">${esc(auteur(l))}${l.format ? ' · ' + esc(l.format) : ''}${l.prdChariow || l.lienAchat ? ' · Chariow' : ''}</div></span></div></td>
     <td class="r mono nowrap">${gratuit(l) ? 'Gratuit' : F(l.prix) + ' F'}</td>
     <td>${l.publie ? '<span class="pill p-ok dot">Publié</span>' : '<span class="pill p-mute dot">Masqué</span>'}</td>
     <td class="r mono">${ventes(l.id)}${offerts(l.id) ? `<div class="small faint">+${offerts(l.id)} offert(s)</div>` : ''}</td><td class="r mono nowrap">${F(recette(l.id))} F</td>
     <td><div class="row nw"><a class="btn b-line b-xs" href="#/admin/livre/${l.id}">${ic('edit')}Modifier</a><button class="btn b-line b-xs" data-lvpub="${l.id}">${ic(l.publie ? 'eyeoff' : 'eye')}${l.publie ? 'Masquer' : 'Publier'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`
   : `<div class="card">${A.empty('books', 'Ajoutez votre premier livre : titre, couverture, prix et description. Il apparaîtra sur le site public et dans l\'espace des apprenants.', `<a class="btn b-pri" href="#/admin/livre/nouveau">${ic('plus')}Ajouter un livre</a>`)}</div>`}
   <div class="card"><h3>Comment vos livres sont vendus</h3><ol class="abo-steps small">
    <li><b>Vous ajoutez le livre</b> : couverture, prix en FCFA, description, et le lien du fichier complet (PDF sur Google Drive, Dropbox…). Ce lien n'est montré qu'aux acheteurs.</li>
    <li><b>Paiement en ligne (tous pays)</b> : créez le livre comme produit dans votre boutique Chariow et collez son lien et son identifiant (prd_…) sur la fiche. L'acheteur paie par carte ou Mobile Money, le livre s'ajoute aussitôt à son espace.</li>
    <li><b>Mobile Money</b> : l'apprenant paie sur votre numéro et déclare le paiement ; vous validez dans « Abonnements & paiements ».</li>
    <li>Vous pouvez aussi <b>offrir un livre</b> à un apprenant depuis sa fiche de livre.</li></ol></div>`;
}});
A.on('click', '[data-lvpub]', async el => {
  const l = livre(el.dataset.lvpub); if(!l) return;
  const {id, ...data} = l; data.publie = !l.publie;
  if(await A.db.saveLivre(id, data, null)){ toast(data.publie ? 'Livre publié' : 'Livre masqué', data.publie ? 'eye' : 'eyeoff'); A.refresh(); }
});

/* ---------- éditeur d'un livre ---------- */
let ED = null;
const FORMATS = ['PDF', 'EPUB', 'Papier', 'PDF et papier', 'Livre audio'];
const COULEURS = ['#1D4FA8', '#C95F18', '#0B4D33', '#6B2FA8', '#7A2E0E', '#0E1A2B', '#B8700A', '#C8363B'];
const blank = () => ({titre:'', sousTitre:'', auteur:A.cfg().ceo, resume:'', description:'', prix:5000, format:'PDF', pages:'', annee:new Date().getFullYear(), langue:'Français', isbn:'', couverture:'', couleur:COULEURS[0], extrait:'', lienAchat:'', prdChariow:'', publie:false, vedette:false, ordre:((S.livres || []).length + 1)});
const preview = () => { const el = $('#lvPrev'); if(el) el.innerHTML = A.livreCover(ED, true) + `<p class="sub" style="text-align:center;margin:8px 0 0">${gratuit(ED) ? 'Gratuit' : `${F(+ED.prix || 0)} FCFA${['EUR', 'USD'].map(c => ' · ' + A.money(+ED.prix || 0, c)).join('')}`}</p>`; };
A.page('admin/livre/:id', {space:'admin', title:() => ED && ED.titre ? ED.titre : 'Nouveau livre', crumb:'<a href="#/admin/livres">Livres</a>', static:true, render(p){
  if(!ED || ED._for !== p.id){
    const l = livre(p.id);
    ED = Object.assign(blank(), l || {}, {_for:p.id, _fichier:p.id === 'nouveau' ? '' : null});
    if(l) A.db.livreFichier(l.id).then(u => { if(ED && ED._for === p.id){ ED._fichier = u || ''; const i = $('#lv_fichier'); if(i){ i.value = ED._fichier; i.disabled = false; } } });
  }
  if(p.id !== 'nouveau' && !livre(p.id)) return `<div class="card">${A.empty('books', 'Livre introuvable. <a href="#/admin/livres">Retour aux livres</a>')}</div>`;
  const f = (k, lab, attrs = '', ph = '') => `<label class="fld"><span>${lab}</span><input class="inp" data-lv="${k}" id="lv_${k}" value="${esc(ED[k] == null ? '' : ED[k])}" ${attrs} ${ph ? `placeholder="${esc(ph)}"` : ''}></label>`;
  const ach = (AD().achats || []).filter(a => a.livre === p.id), prof = id => (AD().profiles || []).find(x => x.id === id) || {email:'(compte supprimé)', data:{}};
  return `<div class="ledit"><div class="stack">
   <div class="card stack"><h3 style="margin:0">Le livre</h3>
    ${f('titre', 'Titre', 'required maxlength="160"')}
    <div class="g2">${f('sousTitre', 'Sous-titre', 'maxlength="200"')}${f('auteur', 'Auteur', 'maxlength="120"')}</div>
    <label class="fld"><span>Résumé (2 ou 3 phrases, affiché sous le prix)</span><textarea class="inp" data-lv="resume" rows="3" maxlength="600">${esc(ED.resume)}</textarea></label>
    <label class="fld"><span>Présentation détaillée (sommaire, à qui s'adresse le livre… : listes avec « - », gras avec **texte**)</span><textarea class="inp" data-lv="description" rows="8" maxlength="12000">${esc(ED.description)}</textarea></label>
    <div class="g3"><label class="fld"><span>Format</span><select class="inp" data-lv="format">${FORMATS.map(x => `<option ${ED.format === x ? 'selected' : ''}>${x}</option>`).join('')}</select></label>${f('pages', 'Nombre de pages', 'type="number" min="0"')}${f('annee', 'Année', 'type="number" min="1950" max="2100"')}</div>
    <div class="g2">${f('langue', 'Langue')}${f('isbn', 'ISBN (facultatif)')}</div>
   </div>
   <div class="card stack"><h3 style="margin:0">Prix et vente</h3>
    <div class="g2">${f('prix', 'Prix en FCFA (0 = gratuit pour les inscrits)', 'type="number" min="0" step="100"')}<div class="fld"><span>Équivalents affichés</span><div class="sub" id="lvEq" style="padding-top:8px">${esc(['EUR', 'USD', 'GHS', 'NGN'].map(c => A.money(+ED.prix || 0, c)).join(' · '))}</div></div></div>
    <div class="g2">${f('lienAchat', 'Lien de la page du livre sur Chariow (paiement en ligne)', 'type="url"', 'https://…')}${f('prdChariow', 'Identifiant du produit Chariow', 'spellcheck="false"', 'prd_…')}</div>
    <p class="sub">Avec l'identifiant, l'acheteur est envoyé sur la page de paiement Chariow et le livre s'ajoute à son espace dès la confirmation, sans validation. Sans Chariow, l'achat se fait par Mobile Money, validé par vous.</p>
    <label class="fld"><span>Lien du livre complet (remis uniquement aux acheteurs)</span><input class="inp" id="lv_fichier" type="url" value="${esc(ED._fichier || '')}" ${ED._fichier === null ? 'disabled placeholder="Chargement…"' : 'placeholder="https://drive.google.com/… (PDF partagé par lien)"'}></label>
    ${f('extrait', 'Lien d\'un extrait gratuit (facultatif, visible de tous)', 'type="url"', 'https://…')}
    <div class="note">${ic('shield')}<span>Le lien du livre complet n'est jamais affiché sur le site public : seuls les acheteurs (et vous) le reçoivent. Si vous vendez sur Chariow, Chariow envoie aussi le fichier à l'acheteur.</span></div>
   </div>
   <div class="card stack"><h3 style="margin:0">Publication</h3>
    <label class="check"><input type="checkbox" data-lv="publie" ${ED.publie ? 'checked' : ''}>Publié : visible sur le site public et dans l'espace des apprenants</label>
    <label class="check"><input type="checkbox" data-lv="vedette" ${ED.vedette ? 'checked' : ''}>Mettre en avant (page d'accueil, mention « Nouveauté »)</label>
    <div class="g2">${f('ordre', 'Ordre d\'affichage', 'type="number" min="1"')}</div>
    <div class="row"><button class="btn b-pri" data-act="lvsave">${ic('save')}Enregistrer</button>${p.id !== 'nouveau' ? `<a class="btn b-line" href="#/livre/${p.id}" target="_blank" rel="noopener">${ic('eye')}Voir la page publique</a><button class="btn b-line" data-act="lvdel" style="color:var(--bad)">${ic('trash')}Supprimer</button>` : ''}<a class="btn b-ghost" href="#/admin/livres">Retour</a></div>
   </div>
  </div><div class="stack">
   <div class="card stack"><h3 style="margin:0">Couverture</h3><div id="lvPrev"></div>
    <label class="btn b-line" style="justify-content:center">${ic('upload')}Envoyer une image<input type="file" accept="image/*" id="lvImg" hidden></label>
    ${f('couverture', 'ou lien d\'une image', 'type="url"', 'https://…')}
    ${ED.couverture ? `<button class="btn b-ghost b-sm" data-act="lvnocov">${ic('x')}Retirer l'image</button>` : ''}
    <div class="fld"><span>Couleur de la couverture dessinée (sans image)</span><div class="row" style="gap:6px">${COULEURS.map(c => `<button class="ibtn" style="background:${c};border-color:${ED.couleur === c ? 'var(--ink)' : 'transparent'};border-width:2px" data-lvcol="${c}" aria-label="Couleur ${c}"></button>`).join('')}</div></div>
   </div>
   ${p.id !== 'nouveau' ? `<div class="card stack"><h3 style="margin:0">Lecteurs <small>${ach.length}</small></h3>
    ${ach.length ? `<div class="stack s8">${ach.map(a => { const u = prof(a.owner); return `<div class="row between nw small"><span style="min-width:0;overflow-wrap:anywhere"><b>${esc((u.data || {}).name || u.email)}</b><div class="faint">${a.source === 'offert' ? 'offert' : 'acheté'} le ${fd(a.at)}</div></span>${a.source === 'offert' ? `<button class="btn b-line b-xs" data-lvoff="${a.owner}">Retirer</button>` : ''}</div>`; }).join('')}</div>` : '<p class="sub" style="margin:0">Aucun lecteur pour le moment.</p>'}
    <label class="fld"><span>Offrir ce livre à un apprenant</span><select class="inp" id="lvGift"><option value="">Choisir…</option>${(AD().profiles || []).filter(u => !u.admin && !ach.some(a => a.owner === u.id)).map(u => `<option value="${u.id}">${esc(((u.data || {}).name || '') + ' · ' + u.email)}</option>`).join('')}</select></label>
    <button class="btn b-line b-sm" style="justify-self:start" data-act="lvgift">${ic('award')}Offrir le livre</button></div>` : ''}
  </div></div>`;
}, mount(){ preview(); }});
A.on('input', '[data-lv]', el => {
  if(!ED) return; const k = el.dataset.lv;
  ED[k] = el.type === 'checkbox' ? el.checked : el.value;
  if(k === 'lienAchat' && !A.val('lv_prdChariow')){ const m = el.value.match(/prd_[A-Za-z0-9]+/); if(m){ ED.prdChariow = m[0]; const i = $('#lv_prdChariow'); if(i) i.value = m[0]; } }
  if(k === 'prix'){ const e = $('#lvEq'); if(e) e.textContent = ['EUR', 'USD', 'GHS', 'NGN'].map(c => A.money(+ED.prix || 0, c)).join(' · '); }
  if(['titre', 'auteur', 'couverture', 'prix'].includes(k)) preview();
});
A.on('change', '[data-lv]', el => { if(ED && el.type === 'checkbox') ED[el.dataset.lv] = el.checked; if(ED && el.tagName === 'SELECT') ED[el.dataset.lv] = el.value; });
A.on('click', '[data-lvcol]', el => { ED.couleur = el.dataset.lvcol; $$('[data-lvcol]').forEach(b => b.style.borderColor = b === el ? 'var(--ink)' : 'transparent'); preview(); });
A.on('change', '#lvImg', async el => {
  const file = el.files && el.files[0]; if(!file) return;
  try{ const r = await A.imgPrep(file, 900, .8); ED.couverture = r.url; const i = $('#lv_couverture'); if(i) i.value = ''; preview(); toast('Couverture prête : pensez à enregistrer', 'image'); }
  catch(_){ toast('Image illisible', 'x'); }
});
A.on('click', '[data-act="lvnocov"]', el => { ED.couverture = ''; const i = $('#lv_couverture'); if(i) i.value = ''; el.remove(); preview(); });
A.on('click', '[data-act="lvsave"]', async el => {
  if(!ED) return;
  const titre = String(ED.titre || '').trim();
  if(titre.length < 2){ toast('Indiquez le titre du livre', 'x'); return; }
  const urls = ['lienAchat', 'extrait'].map(k => String(ED[k] || '').trim()), fichier = $('#lv_fichier') && !$('#lv_fichier').disabled ? $('#lv_fichier').value.trim() : null;
  if(urls.concat([fichier || '']).some(u => u && !/^https?:\/\//i.test(u))){ toast('Les liens doivent commencer par https://', 'x'); return; }
  if(ED.couverture && !safeImg(ED.couverture)){ toast('Lien d\'image invalide (https://…)', 'x'); return; }
  if(/whsec_|sk_live|sk_test|sb_secret_|service_role/i.test(JSON.stringify([ED.lienAchat, ED.prdChariow, fichier]))){ toast('Une clé secrète ne doit jamais être enregistrée ici', 'x'); return; }
  const data = {titre, sousTitre:String(ED.sousTitre || '').trim(), auteur:String(ED.auteur || '').trim(), resume:String(ED.resume || '').trim(), description:String(ED.description || ''), prix:Math.max(0, Math.round(+ED.prix || 0)),
    format:ED.format || 'PDF', pages:Math.max(0, Math.round(+ED.pages || 0)) || '', annee:Math.round(+ED.annee || 0) || '', langue:String(ED.langue || '').trim(), isbn:String(ED.isbn || '').trim(),
    couverture:ED.couverture || '', couleur:ED.couleur || COULEURS[0], extrait:urls[1], lienAchat:urls[0], prdChariow:String(ED.prdChariow || '').trim() || (urls[0].match(/prd_[A-Za-z0-9]+/) || [''])[0],
    publie:!!ED.publie, vedette:!!ED.vedette, ordre:Math.max(1, Math.round(+ED.ordre || 1)), at:A.now()};
  el.disabled = true;
  const id = await A.db.saveLivre(ED._for === 'nouveau' ? null : ED._for, data, fichier);
  el.disabled = false;
  if(!id) return;
  toast(data.publie ? 'Livre enregistré et publié' : 'Livre enregistré (masqué : cochez « Publié » pour le montrer)', 'check');
  ED = null; A.go('#/admin/livre/' + id);
});
A.on('click', '[data-act="lvdel"]', async el => {
  if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = ic('alert') + 'Confirmer la suppression'; return; }
  if(await A.db.delLivre(ED._for)){ toast('Livre supprimé', 'trash'); ED = null; A.go('#/admin/livres'); }
});
A.on('click', '[data-act="lvgift"]', async () => {
  const u = A.val('lvGift'); if(!u){ toast('Choisissez un apprenant', 'x'); return; }
  if(await A.db.offrirLivre(u, ED._for, true)){ toast('Livre offert : il apparaît dans « Mes livres » de l\'apprenant', 'award'); ED = null; A.render(); }
});
A.on('click', '[data-lvoff]', async el => {
  if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.textContent = 'Confirmer'; return; }
  if(await A.db.offrirLivre(el.dataset.lvoff, ED._for, false)){ toast('Livre retiré', 'trash'); ED = null; A.render(); }
});
})();
