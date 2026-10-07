/* =====================================================================
   Outil MÉTRÉ : avant-métré par lots, devis quantitatif et estimatif,
   sous-détail des matériaux, calculateurs rapides
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S, uid} = A;

/* ---------- Bordereau des prix (indicatifs, Abidjan, fourniture + pose) ---------- */
const PRIX = {
  decap:    {lot:'Terrassements', d:'Décapage et nettoyage du terrain', u:'m²', pu:500},
  fouille:  {lot:'Terrassements', d:'Fouilles manuelles en terrain ordinaire', u:'m³', pu:4500},
  remblai:  {lot:'Terrassements', d:'Remblai d\'apport compacté par couches', u:'m³', pu:6000},
  bp:       {lot:'Fondations', d:'Béton de propreté dosé à 150 kg/m³', u:'m³', pu:75000},
  ba:       {lot:'Fondations', d:'Béton armé dosé à 350 kg/m³ (coffrage compris, hors aciers)', u:'m³', pu:185000},
  acier:    {lot:'Fondations', d:'Aciers HA façonnés et posés', u:'kg', pu:1000},
  aggp:     {lot:'Fondations', d:'Maçonnerie d\'agglos pleins de 15', u:'m²', pu:12000},
  heris:    {lot:'Fondations', d:'Hérisson en pierres cassées ép. 15 cm', u:'m²', pu:6500},
  dallage:  {lot:'Fondations', d:'Dallage béton 8 cm + treillis soudé', u:'m²', pu:9500},
  hourdis:  {lot:'Élévation', d:'Plancher à corps creux 16+4 complet', u:'m²', pu:28000},
  linteau:  {lot:'Élévation', d:'Linteau en béton armé 15 × 20', u:'ml', pu:9000},
  agg15:    {lot:'Maçonnerie', d:'Maçonnerie d\'agglos creux de 15', u:'m²', pu:9500},
  agg10:    {lot:'Maçonnerie', d:'Maçonnerie d\'agglos creux de 10', u:'m²', pu:7500},
  charpente:{lot:'Toiture / étanchéité', d:'Charpente bois traité', u:'m²', pu:12000},
  tole:     {lot:'Toiture / étanchéité', d:'Couverture tôle bac alu 6/10e', u:'m²', pu:9500},
  fplaf:    {lot:'Toiture / étanchéité', d:'Faux plafond staff / plâtre', u:'m²', pu:7500},
  etanch:   {lot:'Toiture / étanchéité', d:'Étanchéité multicouche + protection', u:'m²', pu:18000},
  enduit:   {lot:'Enduits & revêtements', d:'Enduit ciment dosé à 350 kg/m³', u:'m²', pu:3000},
  carreau:  {lot:'Enduits & revêtements', d:'Carrelage grès cérame 40 × 40 posé', u:'m²', pu:14000},
  plinthe:  {lot:'Enduits & revêtements', d:'Plinthes carrelées', u:'ml', pu:2500},
  faience:  {lot:'Enduits & revêtements', d:'Faïence murale posée', u:'m²', pu:13000},
  porte:    {lot:'Menuiseries', d:'Porte isoplane 0,80 × 2,10 avec huisserie', u:'u', pu:85000},
  portee:   {lot:'Menuiseries', d:'Porte d\'entrée métallique / bois massif', u:'u', pu:250000},
  fenetre:  {lot:'Menuiseries', d:'Fenêtre aluminium vitrée + grille', u:'m²', pu:75000},
  ptl:      {lot:'Électricité', d:'Point lumineux complet', u:'u', pu:18000},
  prise:    {lot:'Électricité', d:'Prise de courant 16 A complète', u:'u', pu:15000},
  tableau:  {lot:'Électricité', d:'Tableau électrique équipé + terre', u:'ens', pu:250000},
  sanit:    {lot:'Plomberie sanitaire', d:'Appareil sanitaire posé et raccordé', u:'u', pu:95000},
  fosse:    {lot:'Plomberie sanitaire', d:'Fosse septique + puisard', u:'ens', pu:650000},
  peinti:   {lot:'Peinture', d:'Peinture vinylique intérieure 2 couches', u:'m²', pu:2200},
  peinte:   {lot:'Peinture', d:'Peinture façade 2 couches', u:'m²', pu:3200}
};
const LOTS = ['Installation de chantier','Terrassements','Fondations','Élévation','Maçonnerie','Toiture / étanchéité','Enduits & revêtements','Menuiseries','Électricité','Plomberie sanitaire','Peinture','Divers'];
const pu = code => { const o = (A.cfg().prix || {})[code]; return o != null ? +o : (PRIX[code] ? PRIX[code].pu : 0); };

/* sous-détail des matériaux par unité d'ouvrage */
const MAT = {
  ba:{ciment:7, sable:.4, gravier:.8}, bp:{ciment:3, sable:.4, gravier:.8},
  dallage:{ciment:.48, sable:.032, gravier:.064, treillis:1.1}, hourdis:{ciment:.5, sable:.03, gravier:.06, treillis:1.1, hourdis:8.3, poutrelles:1.7},
  agg15:{agg15:12.5, ciment:.09, sable:.015}, agg10:{agg10:12.5, ciment:.06, sable:.01}, aggp:{aggp:12.5, ciment:.09, sable:.015},
  enduit:{ciment:.13, sable:.018}, carreau:{carreaux:1.08, ciment:.1, sable:.01}, faience:{faience:1.08}, linteau:{ciment:.21, sable:.012, gravier:.024, acier:3.5},
  acier:{acier:1}, heris:{pierres:.16}
};
const MATN = {ciment:['Ciment','sacs de 50 kg',0], sable:['Sable','m³',2], gravier:['Gravier','m³',2], acier:['Acier HA','kg',0], agg15:['Agglos creux de 15','u',0], agg10:['Agglos creux de 10','u',0], aggp:['Agglos pleins de 15','u',0], treillis:['Treillis soudé','m²',1], hourdis:['Entrevous (hourdis)','u',0], poutrelles:['Poutrelles','ml',1], carreaux:['Carreaux de sol','m²',1], faience:['Faïence','m²',1], pierres:['Pierres cassées','m³',2]};

/* ---------- calculs ---------- */
const num = v => { const n = parseFloat(String(v ?? '').replace(',', '.')); return isNaN(n) ? null : n; };
function qty(l){
  const q = num(l.q); if(q != null && l.qm) return q;
  const parts = [num(l.nb), num(l.L), num(l.l), num(l.h)].filter(v => v != null);
  if(!parts.length) return q != null ? q : 0;
  return parts.reduce((a,b)=>a*b, 1);
}
function totals(doc){
  const lots = doc.lots.map(lt => { const t = lt.lignes.reduce((a,l)=>a + qty(l)*(num(l.pu)||0), 0); return {nom:lt.nom, t}; });
  const ht = lots.reduce((a,l)=>a+l.t, 0), tva = (num(doc.tva) ?? 0)/100;
  const mats = {};
  doc.lots.forEach(lt => lt.lignes.forEach(l => { const m = MAT[l.code]; if(!m) return; const q = qty(l); Object.entries(m).forEach(([k,v]) => mats[k] = (mats[k]||0) + v*q); }));
  return {lots, ht, tv: ht*tva, ttc: ht*(1+tva), mats};
}
function recapHtml(t){
  return `<div class="cols eq"><div class="recap">${t.lots.filter(l=>l.t).map((l,i)=>`<div><span>${i+1}. ${esc(l.nom)}</span><b class="mono">${F(l.t)} F</b></div>`).join('')}
   <div><span>Total hors taxes</span><b class="mono">${F(t.ht)} F</b></div><div><span>TVA</span><b class="mono">${F(t.tv)} F</b></div><div class="tt"><span>TOTAL TTC</span><span class="mono">${F(t.ttc)} FCFA</span></div></div>
   <div><b style="font-size:14px">Sous-détail des principaux matériaux</b><div class="tw" style="margin-top:8px"><table class="t"><tbody>${Object.entries(t.mats).filter(([k,v])=>v>0.01&&MATN[k]).sort((a,b)=>Object.keys(MATN).indexOf(a[0])-Object.keys(MATN).indexOf(b[0])).map(([k,v])=>`<tr><td>${MATN[k][0]}</td><td class="r mono">${F(k==='ciment'?Math.ceil(v):v, MATN[k][2])}</td><td class="sub">${MATN[k][1]}</td></tr>`).join('') || '<tr><td class="sub">Aucun matériau identifié (utilisez la bibliothèque d\'ouvrages).</td></tr>'}</tbody></table></div>
   ${t.mats.acier?`<p class="sub" style="margin-top:6px">Acier : ${F(t.mats.acier/1000,2)} t, soit environ ${F(Math.ceil(t.mats.acier/(12*0.888)))} barres de HA12 de 12 m (équivalent).</p>`:''}</div></div>`;
}
function newDoc(name){ return {name: name || 'Nouveau métré', projet:'', tva:A.cfg().tva ?? 18, lots:LOTS.slice(1,4).map(n => ({nom:n, lignes:[]}))}; }
function fromLines(lines){
  const doc = {name:'', tva:A.cfg().tva ?? 18, lots:[]};
  lines.forEach(l => { let lt = doc.lots.find(x => x.nom === l.lot); if(!lt){ lt = {nom:l.lot, lignes:[]}; doc.lots.push(lt); } lt.lignes.push({code:l.code, d:l.d, u:l.u, q:l.q, qm:true, pu: l.pu != null ? l.pu : Math.round(pu(l.code) * (l.coef || 1))}); });
  return Object.assign(totals(doc), {doc});
}
A.METRE = {PRIX, LOTS, qty, totals, recapHtml, pu,
  fromLines,
  openFromProject(pj){ const r = fromLines(A.PLAN.metre(pj).lines); r.doc.name = 'Métré · ' + pj.titre; r.doc.projet = pj.titre; MD = {id:null, doc:r.doc, dirty:true}; A.go('#/app/metre/nouveau'); },
  openDoc(doc){ MD = {id:null, doc, dirty:true}; A.go('#/app/metre/nouveau'); }
};

/* =====================================================================
   Page d'accueil du métré
   ===================================================================== */
const QC = {
  beton:{t:'Béton : volume et composition', f:[['L','Longueur','m',4],['l','Largeur','m',0.2],['h','Hauteur / épaisseur','m',0.4],['n','Nombre','u',1],['dos','Dosage','kg/m³',350]],
    run:v => { const V = v.L*v.l*v.h*v.n; return [['Volume', F(V,3)+' m³'],['Ciment', F(V*v.dos/50,1)+' sacs ('+F(V*v.dos,0)+' kg)'],['Sable', F(V*.4,2)+' m³ ('+F(V*.4*1000,0)+' L)'],['Gravier', F(V*.8,2)+' m³'],['Eau (E/C ≈ 0,5)', F(V*v.dos*.5,0)+' L'],['Brouettes de 60 L (sable + gravier)', F(Math.ceil(V*1.2/0.06),0)]]; }},
  maco:{t:'Maçonnerie d\'agglos', f:[['L','Longueur des murs','m',10],['h','Hauteur','m',3],['o','Ouvertures à déduire','m²',2.4],['ep','Épaisseur (10, 15 ou 20)','cm',15]],
    run:v => { const S = Math.max(0, v.L*v.h - v.o), n = Math.ceil(S*12.5*1.03), m = S*(v.ep>=15?.015:.01); return [['Surface nette', F(S,2)+' m²'],['Agglos de '+v.ep+' (+3 % casse)', F(n,0)+' u'],['Mortier de pose', F(m,3)+' m³'],['Ciment (300 kg/m³)', F(Math.ceil(m*300/50*10)/10,1)+' sacs'],['Sable', F(m,2)+' m³'],['Enduit 2 faces (1,5 cm)', F(S*2*.018,2)+' m³ de mortier · '+F(S*2*.018*350/50,1)+' sacs']]; }},
  acier:{t:'Poids d\'acier', f:[['d','Diamètre','mm',12],['L','Longueur d\'une barre','m',3.2],['n','Nombre de barres','u',20]],
    run:v => { const w = v.d*v.d/162, kg = w*v.L*v.n; return [['Masse linéique (d²/162)', F(w,3)+' kg/m'],['Section d\'une barre', F(Math.PI*v.d*v.d/400,3)+' cm²'],['Longueur totale', F(v.L*v.n,2)+' m'],['Masse totale', F(kg,1)+' kg'],['Barres de 12 m à acheter', F(Math.ceil(v.L*v.n*1.05/12),0)+' (5 % de chutes)']]; }},
  carrelage:{t:'Carrelage', f:[['S','Surface','m²',20],['c','Côté du carreau','cm',40],['ch','Chutes','%',8],['cart','m² par carton','m²',1.44]],
    run:v => { const S = v.S*(1+v.ch/100); return [['Surface à commander', F(S,2)+' m²'],['Nombre de carreaux', F(Math.ceil(S/(v.c*v.c/10000)),0)],['Cartons', F(Math.ceil(S/v.cart),0)],['Mortier-colle (≈ 5 kg/m²)', F(Math.ceil(v.S*5/25),0)+' sacs de 25 kg'],['Joint (≈ 0,3 kg/m²)', F(v.S*.3,1)+' kg']]; }},
  peinture:{t:'Peinture', f:[['S','Surface à peindre','m²',100],['r','Rendement','m²/L',10],['c','Nombre de couches','u',2]],
    run:v => { const L = v.S*v.c/v.r; return [['Peinture de finition', F(L,1)+' L ('+F(Math.ceil(L/20),0)+' seaux de 20 L)'],['Impression (1 couche)', F(v.S/12,1)+' L'],['Enduit de rebouchage (≈ 0,3 kg/m²)', F(v.S*.3,0)+' kg']]; }},
  toiture:{t:'Couverture en tôle', f:[['L','Longueur du bâtiment','m',12],['W','Largeur du bâtiment','m',9],['p','Pente','%',15],['deb','Débord','m',0.6],['lu','Largeur utile d\'une tôle','m',1.0]],
    run:v => { const k = Math.sqrt(1+Math.pow(v.p/100,2)), S = (v.L+2*v.deb)*(v.W+2*v.deb)*k, lr = (v.W/2+v.deb)*k; return [['Coefficient de pente', F(k,3)],['Surface réelle de couverture', F(S,1)+' m²'],['Longueur de rampant', F(lr,2)+' m'],['Nombre de tôles (2 versants)', F(2*Math.ceil((v.L+2*v.deb)/v.lu),0)+' tôles de '+F(Math.ceil(lr*10)/10,1)+' m'],['Faîtière', F(v.L+2*v.deb,1)+' ml']]; }}
};
function qcHtml(id){ const c = QC[id]; return `<div class="calc" data-qcid="${id}"><b style="font-family:var(--fd);font-size:16px">${esc(c.t)}</b><div class="g3">${c.f.map(f=>`<label class="fld"><span>${esc(f[1])} (${esc(f[2])})</span><input class="inp" type="number" step="any" data-qf="${f[0]}" value="${f[3]}"></label>`).join('')}</div><div class="res" data-qres></div></div>`; }
function runQc(box){ const c = QC[box.dataset.qcid], v = {}; $$('[data-qf]', box).forEach(i => v[i.dataset.qf] = num(i.value) || 0); $('[data-qres]', box).innerHTML = c.run(v).map(r=>`<div class="row between nw"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></div>`).join(''); }
A.on('input', '[data-qf]', el => runQc(el.closest('[data-qcid]')));

let qcSel = 'beton';
A.page('app/metre', {space:'app', title:'Métré & devis', crumb:'Outils', render(){
  const mine = Object.entries(S.works||{}).filter(([,w]) => w.kind === 'metre').sort((a,b)=>String(b[1].updated_at).localeCompare(String(a[1].updated_at)));
  const plans = Object.entries(S.works||{}).filter(([,w]) => w.kind === 'dessin');
  return `<div class="cols"><div class="stack">
   <div class="card"><h3>Mes métrés <small>${mine.length}</small></h3>${mine.length ? `<div class="tw"><table class="t"><thead><tr><th>Nom</th><th>Projet</th><th class="r">Total TTC</th><th>Modifié</th><th></th></tr></thead><tbody>${mine.map(([id,w])=>{const t=totals(w.data);return `<tr class="click" data-go="#/app/metre/${id}"><td><b>${esc(w.data.name)}</b></td><td class="sub">${esc(w.data.projet||'—')}</td><td class="r mono">${F(t.ttc)} F</td><td class="sub">${A.ago(w.updated_at)}</td><td class="r">${ic('chev')}</td></tr>`}).join('')}</tbody></table></div>` : `<p class="sub">Aucun métré enregistré. Créez-en un ci-dessous.</p>`}</div>
   <div class="card stack"><h3>Nouveau métré${+A.lim('metres') > 0 ? ` <small>${A.metresMois()} / ${A.lim('metres')} ce mois-ci</small>` : ''}</h3>
    ${A.peutMetre() ? '' : A.upsell(+A.lim('metres') > 0 ? `Vous avez créé vos ${A.lim('metres')} métrés du mois. Des métrés illimités sont disponibles` : 'La création d\'un métré complet et de son devis (DQE) est disponible', 'metres')}
    <div class="g3" ${A.peutMetre() ? '' : 'hidden'}><button class="btn b-pri" data-act="mnew">${ic('plus')}Métré vierge</button>
     <select class="inp" id="mProj"><option value="">À partir d'un projet type…</option>${(A.AZ.projets||[]).map(p=>`<option value="${p.id}">${esc(p.titre)}</option>`).join('')}</select>
     <select class="inp" id="mPlan" ${plans.length?'':'disabled'}><option value="">${plans.length?'À partir de mon plan…':'Aucun plan dessiné'}</option>${plans.map(([id,w])=>`<option value="${id}">${esc(w.data.name)}</option>`).join('')}</select></div>
    <p class="sub">Le métré d'un projet type ou d'un plan dessiné est calculé automatiquement : murs, surfaces, béton, acier, enduits, carrelage, menuiseries.</p></div>
   <div class="card"><h3>Méthode du métré</h3>${A.mdHtml(`1. **Lire les plans** et lister les ouvrages par **lots** (terrassement, fondations, élévation…).
2. **Mesurer** chaque ouvrage avec son unité : m³ pour le béton, m² pour la maçonnerie et les enduits, ml pour les linteaux, kg pour l'acier, u pour les menuiseries.
3. **Déduire** les vides (ouvertures) selon les règles du marché.
4. Multiplier par le **prix unitaire** (bordereau) : c'est le **DQE** (Devis Quantitatif et Estimatif).
5. Établir le **sous-détail des matériaux** pour les commandes (sacs de ciment, sable, gravier, acier, agglos).`)}<a class="btn b-line b-sm" style="margin-top:10px" href="#/app/matiere/metre">${ic('book')}Cours complet de métré</a></div>
  </div><div class="stack">
   <div class="card stack"><h3>Calculateurs rapides</h3><div class="chips">${Object.entries(QC).map(([k,c])=>`<button class="tab ${qcSel===k?'on':''}" data-qcsel="${k}">${esc(c.t.split(' :')[0].split(' ')[0])}</button>`).join('')}</div>${qcHtml(qcSel)}</div>
   <div class="card"><h3>Bordereau des prix <small>indicatifs</small></h3><div class="tw" style="max-height:360px;overflow:auto"><table class="t"><tbody>${Object.entries(PRIX).map(([k,p])=>`<tr><td style="font-size:13px">${esc(p.d)}</td><td class="sub">${p.u}</td><td class="r mono" style="font-size:13px">${F(pu(k))}</td></tr>`).join('')}</tbody></table></div></div>
  </div></div>`;
}, mount(root){ $$('[data-qcid]', root).forEach(runQc); }});
A.on('click', '[data-qcsel]', el => { qcSel = el.dataset.qcsel; A.refresh(); });
A.on('click', 'tr[data-go]', el => A.go(el.dataset.go));
A.on('click', '[data-act="mnew"]', () => { MD = {id:null, doc:newDoc(), dirty:true}; A.go('#/app/metre/nouveau'); });
A.on('change', '#mProj', el => { const pj = (A.AZ.projets||[]).find(p => p.id === el.value); if(pj) A.METRE.openFromProject(pj); });
A.on('change', '#mPlan', el => { const w = S.works[el.value]; if(w && A.CAD) A.METRE.openDoc(A.CAD.metreDoc(w.data)); });

/* =====================================================================
   Éditeur de métré
   ===================================================================== */
let MD = null;
A.page('app/metre/:id', {space:'app', title:() => MD && MD.doc ? MD.doc.name : 'Métré', crumb:'<a href="#/app/metre">Métré & devis</a>', static:true,
 actions:() => `<div class="row noprint"><button class="btn b-line b-sm" data-act="mcsv">${ic('download')}<span class="hs">CSV</span></button><button class="btn b-line b-sm" data-act="print">${ic('print')}<span class="hs">Imprimer</span></button><button class="btn b-pri b-sm" data-act="msave">${ic('save')}Enregistrer</button></div>`,
 render(p){
  if(p.id === 'nouveau'){ if(!MD || MD.id) MD = {id:null, doc:newDoc(), dirty:true}; }
  else if(!MD || MD.id !== p.id){ const w = S.works[p.id]; if(!w) return A.empty('calc','Métré introuvable.'); MD = {id:p.id, doc:JSON.parse(JSON.stringify(w.data)), dirty:false}; }
  return editorHtml();
 },
 mount(){ updTotals(); }
});
function lineRow(li, l, i){
  return `<tr data-li="${li}" data-i="${i}"><td style="min-width:260px"><input class="inp" data-mf="d" value="${esc(l.d)}" placeholder="Désignation de l'ouvrage"></td>
   <td><select class="inp" data-mf="u" style="width:66px">${['m³','m²','ml','kg','u','ens','fft','t'].map(u=>`<option ${u===l.u?'selected':''}>${u}</option>`).join('')}</select></td>
   <td><input class="inp" type="number" step="any" data-mf="nb" value="${esc(l.nb??'')}" placeholder="nb"></td><td><input class="inp" type="number" step="any" data-mf="L" value="${esc(l.L??'')}" placeholder="L"></td><td><input class="inp" type="number" step="any" data-mf="l" value="${esc(l.l??'')}" placeholder="l"></td><td><input class="inp" type="number" step="any" data-mf="h" value="${esc(l.h??'')}" placeholder="h"></td>
   <td><input class="inp" type="number" step="any" data-mf="q" value="${l.qm?esc(l.q):''}" placeholder="${esc(F(qty(l),2))}" title="Quantité saisie directement (sinon nb × L × l × h)"></td>
   <td><input class="inp" type="number" step="any" data-mf="pu" value="${esc(l.pu??'')}" style="width:96px"></td>
   <td class="tot" data-tot>—</td><td><button class="ibtn" style="width:30px;height:30px" data-mdel title="Supprimer">${ic('trash')}</button></td></tr>`;
}
function editorHtml(){
  const d = MD.doc;
  return `<div class="card stack noprint"><div class="g3"><label class="fld"><span>Nom du métré</span><input class="inp" id="mName" value="${esc(d.name)}"></label><label class="fld"><span>Projet / client</span><input class="inp" id="mPj" value="${esc(d.projet||'')}"></label><label class="fld"><span>TVA (%)</span><input class="inp" type="number" id="mTva" value="${esc(d.tva)}"></label></div>
   <p class="sub">Quantité = nb × L × l × h (les cases vides valent 1), ou saisissez directement la quantité. Les prix sont en FCFA.</p></div>
  <div class="printonly"><h1>${esc(d.name)}</h1><p>${esc(d.projet||'')}</p></div>
  ${d.lots.map((lt, li) => `<section class="mt-lot"><header><span class="pill p-dark">${li+1}</span><input class="inp grow" data-lotname="${li}" value="${esc(lt.nom)}"><span class="mono small" data-lottot="${li}"></span><button class="btn b-line b-xs noprint" data-mbib="${li}">${ic('book')}Bibliothèque</button><button class="btn b-line b-xs noprint" data-madd="${li}">${ic('plus')}Ligne</button><button class="ibtn noprint" style="width:30px;height:30px" data-mdellot="${li}" title="Supprimer le lot">${ic('trash')}</button></header>
   <div class="tw"><table class="mt"><thead><tr><th>Désignation</th><th>U</th><th>Nb</th><th>L</th><th>l</th><th>h</th><th>Quantité</th><th>P.U.</th><th style="text-align:right">Montant</th><th></th></tr></thead><tbody>${lt.lignes.map((l,i)=>lineRow(li,l,i)).join('') || `<tr><td colspan="10" class="sub" style="padding:12px">Aucune ligne. Ajoutez un ouvrage depuis la bibliothèque.</td></tr>`}</tbody></table></div></section>`).join('')}
  <div class="row noprint"><button class="btn b-line" data-act="maddlot">${ic('plus')}Ajouter un lot</button>${MD.id?`<button class="btn b-bad" data-act="mdeldoc">${ic('trash')}Supprimer ce métré</button>`:''}</div>
  <div class="card"><h3>Récapitulatif du devis</h3><div id="mRecap"></div></div>`;
}
function updTotals(){
  const d = MD.doc; const t = totals(d);
  $$('tr[data-li]').forEach(tr => { const l = d.lots[+tr.dataset.li].lignes[+tr.dataset.i]; const q = qty(l); tr.querySelector('[data-tot]').textContent = F(q*(num(l.pu)||0)) + ' F'; const qi = tr.querySelector('[data-mf="q"]'); if(qi && !l.qm) qi.placeholder = F(q, 2); });
  t.lots.forEach((l,i) => { const el = $(`[data-lottot="${i}"]`); if(el) el.textContent = F(l.t) + ' F'; });
  const r = $('#mRecap'); if(r) r.innerHTML = recapHtml(t);
}
const reEd = () => { const pg = $('#pg'); if(pg){ pg.innerHTML = editorHtml(); updTotals(); } };
A.on('input', '[data-mf]', el => {
  const tr = el.closest('tr'), l = MD.doc.lots[+tr.dataset.li].lignes[+tr.dataset.i], f = el.dataset.mf;
  if(f === 'q'){ l.q = el.value; l.qm = el.value !== ''; } else l[f] = el.value;
  MD.dirty = true; updTotals();
});
A.on('change', 'select[data-mf]', el => { const tr = el.closest('tr'); MD.doc.lots[+tr.dataset.li].lignes[+tr.dataset.i].u = el.value; MD.dirty = true; });
A.on('input', '#mName', el => { MD.doc.name = el.value; MD.dirty = true; });
A.on('input', '#mPj', el => { MD.doc.projet = el.value; MD.dirty = true; });
A.on('input', '#mTva', el => { MD.doc.tva = el.value; MD.dirty = true; updTotals(); });
A.on('input', '[data-lotname]', el => { MD.doc.lots[+el.dataset.lotname].nom = el.value; MD.dirty = true; updTotals(); });
A.on('click', '[data-madd]', el => { MD.doc.lots[+el.dataset.madd].lignes.push({d:'', u:'m²', pu:0}); MD.dirty = true; reEd(); });
A.on('click', '[data-mdel]', el => { const tr = el.closest('tr'); MD.doc.lots[+tr.dataset.li].lignes.splice(+tr.dataset.i, 1); MD.dirty = true; reEd(); });
A.on('click', '[data-mdellot]', el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.style.background = 'var(--badbg)'; toast('Cliquez encore pour supprimer le lot', 'trash'); return; } MD.doc.lots.splice(+el.dataset.mdellot, 1); MD.dirty = true; reEd(); });
A.on('click', '[data-act="maddlot"]', () => { const used = MD.doc.lots.map(l=>l.nom); MD.doc.lots.push({nom: LOTS.find(n => !used.includes(n)) || 'Nouveau lot', lignes:[]}); MD.dirty = true; reEd(); });
A.on('click', '[data-mbib]', el => {
  const li = +el.dataset.mbib, lotName = MD.doc.lots[li].nom;
  const groups = {}; Object.entries(PRIX).forEach(([k,p]) => (groups[p.lot] = groups[p.lot] || []).push([k,p]));
  A.win({title:'Bibliothèque d\'ouvrages', body:`<p class="muted">Cliquez sur un ouvrage pour l'ajouter au lot « ${esc(lotName)} ».</p><div class="bibl">${Object.entries(groups).map(([g,list])=>`<b class="small faint mono" style="margin-top:8px">${esc(g.toUpperCase())}</b>${list.map(([k,p])=>`<button data-bibadd="${k}" data-li="${li}"><span>${esc(p.d)}</span><span class="mono sub">${F(pu(k))} F/${p.u}</span></button>`).join('')}`).join('')}</div>`});
});
A.on('click', '[data-bibadd]', el => { const k = el.dataset.bibadd, p = PRIX[k]; MD.doc.lots[+el.dataset.li].lignes.push({code:k, d:p.d, u:p.u, pu:pu(k)}); MD.dirty = true; toast('Ajouté : ' + p.d); A.closeWin(); reEd(); });
A.on('click', '[data-act="msave"]', async () => {
  if(!MD) return; MD.doc.name = MD.doc.name.trim() || 'Métré sans nom';
  if(!MD.id && !A.peutMetre()){ toast('Nombre de métrés du mois atteint pour votre formule', 'lock'); A.go('#/app/abonnement'); return; }
  if(!MD.id && !MD.doc.cree) MD.doc.cree = A.now();   // compte des métrés créés dans le mois (formules)
  const id = await A.db.saveWork(MD.id, 'metre', MD.doc); const wasNew = !MD.id; MD.id = id; MD.dirty = false; toast('Métré enregistré', 'save');
  if(wasNew) A.go('#/app/metre/' + id);
});
A.on('click', '[data-act="mdeldoc"]', async el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.textContent = 'Confirmer la suppression'; return; } await A.db.delWork(MD.id); MD = null; toast('Métré supprimé', 'trash'); A.go('#/app/metre'); });
A.on('click', '[data-act="mcsv"]', () => {
  const d = MD.doc, rows = [['Lot','Désignation','Unité','Nb','L','l','h','Quantité','Prix unitaire','Montant']];
  d.lots.forEach(lt => lt.lignes.forEach(l => { const q = qty(l); rows.push([lt.nom, l.d, l.u, l.nb||'', l.L||'', l.l||'', l.h||'', q.toFixed(2).replace('.',','), String(num(l.pu)||0), (q*(num(l.pu)||0)).toFixed(0)]); }));
  const t = totals(d); rows.push([]); rows.push(['','Total HT','','','','','','','',t.ht.toFixed(0)]); rows.push(['','TVA','','','','','','','',t.tv.toFixed(0)]); rows.push(['','Total TTC','','','','','','','',t.ttc.toFixed(0)]);
  A.download((d.name||'metre').replace(/[^\w-]+/g,'_') + '.csv', '﻿' + rows.map(r => r.map(c => '"' + String(c).replace(/"/g,'""') + '"').join(';')).join('\n'), 'text/csv');
});
})();
