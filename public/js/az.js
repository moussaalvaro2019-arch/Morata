/* =====================================================================
   Module « Construction de A à Z » : étapes, éléments, projets types
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S} = A;
const Z = () => A.AZ || {etapes:[], elements:[], projets:[]};
const matTags = list => `<span class="mtags">${(list||[]).map(x => { const m = A.mat(x); return m ? `<a class="mtag" href="#/app/matiere/${m.id}">${esc(m.court||m.titre)}</a>` : ''; }).join('')}</span>`;
const money = v => F(v) + ' F';

/* ---------- Accueil du module ---------- */
let azTab = 'etapes';
A.page('app/construction', {space:'app', title:'Construction de A à Z', crumb:'Du terrain à la remise des clés', render(){
  const z = Z();
  const tabs = [['etapes','Les étapes du chantier', z.etapes.length],['elements','Les éléments d\'ouvrage', z.elements.length],['projets','Projets types', z.projets.length]];
  let body = '';
  if(azTab === 'etapes') body = `<div class="cols"><div class="timeline">${z.etapes.map((e,i) => `<a class="tstep" href="#/app/construction/etape/${e.id}"><span class="n">${i+1}</span><span class="c"><span class="row between"><b>${esc(e.titre)}</b><span class="pill p-mute">${ic('clock')}${esc(e.duree)}</span></span><span class="sub">${esc(e.resume)}</span>${matTags(e.matieres)}</span></a>`).join('')}</div>
   <div class="stack"><div class="card" style="background:var(--navy);color:#fff;border:0"><h3 style="color:#fff">Comment utiliser ce parcours</h3><p style="color:#B7C3D3;font-size:14px">Suivez les étapes dans l'ordre : chacune explique ce qui se fait sur le chantier, les contrôles à réaliser, les erreurs à éviter et les <b style="color:#FAD98D">matières</b> qui interviennent. Ouvrez ensuite un <b style="color:#FAD98D">projet type</b> pour voir les plans d'exécution et le métré complet.</p></div>
   <div class="card"><h3>Projets étudiés</h3><div class="stack s8">${z.projets.map(p=>`<a class="row between" style="text-decoration:none" href="#/app/construction/projet/${p.id}"><span><b style="font-size:14px">${esc(p.titre)}</b><div class="sub">${esc(p.niveauxTxt)} · ${p.surface} m²</div></span>${ic('chev')}</a>`).join('')}</div></div></div></div>`;
  if(azTab === 'elements') body = `<p class="muted">Pour chaque élément : rôle, dimensions courantes, ferraillage, enrobage, mise en œuvre et un calculateur.</p><div class="ecards">${z.elements.map(e => `<a class="ecard" href="#/app/construction/element/${e.id}"><div class="pv">${A.FIG[e.fig] ? A.FIG[e.fig]() : ''}</div><b>${esc(e.titre)}</b><span class="sub">${esc(e.resume)}</span></a>`).join('')}</div>`;
  if(azTab === 'projets') body = `<div class="pcards">${z.projets.map(p => `<a class="pcard" href="#/app/construction/projet/${p.id}"><div class="pv">${A.PLAN.thumb(p,{dark:true})}</div><div class="pb"><div class="row between"><span class="pill p-or">${esc(p.standing)}</span><span class="sub">${esc(p.niveauxTxt)}</span></div><b>${esc(p.titre)}</b><span class="sub">${esc(p.resume)}</span><span class="row small"><span>${ic('ruler')} ${p.surface} m²</span><span>${ic('coins')} ${F(p.budget[0]/1e6)} à ${F(p.budget[1]/1e6)} M FCFA</span></span></div></a>`).join('')}</div>`;
  return `<div class="tabs">${tabs.map(t => `<button class="tab ${azTab===t[0]?'on':''}" data-aztab="${t[0]}">${t[1]} <span class="cnt">${t[2]}</span></button>`).join('')}</div>${body}`;
}});
A.on('click', '[data-aztab]', el => { azTab = el.dataset.aztab; A.refresh(); });

/* ---------- Étape ---------- */
A.page('app/construction/etape/:id', {space:'app', title:p => (Z().etapes.find(e=>e.id===p.id)||{}).titre || 'Étape', crumb:'<a href="#/app/construction">Construction A→Z</a>', render(p){
  const L = Z().etapes, i = L.findIndex(e => e.id === p.id), e = L[i];
  if(!e) return A.empty('crane','Étape introuvable.');
  const prev = L[i-1], next = L[i+1];
  return `<div class="reader"><div class="stack s20" style="min-width:0">
   <article class="lesson"><div class="row between"><span class="kick">Étape ${i+1} sur ${L.length} · ${esc(e.duree)}</span>${matTags(e.matieres)}</div>
    <h1 style="font-size:clamp(24px,3vw,34px);margin:8px 0 18px">${esc(e.titre)}</h1>${A.mdHtml(e.contenu)}</article>
   <div class="aipanel"><div class="hd">${ic('spark')}Une question sur cette étape ?</div><div class="sugg"><button data-azia="${e.id}" data-q="Quels sont les contrôles qualité indispensables à cette étape et comment les faire ?">Contrôles qualité</button><button data-azia="${e.id}" data-q="Quelles sont les erreurs les plus fréquentes à cette étape sur les chantiers en Côte d'Ivoire et comment les éviter ?">Erreurs fréquentes</button><button data-azia="${e.id}" data-q="Quels matériaux, outils et main-d'œuvre faut-il prévoir pour cette étape sur une maison de 100 m² ?">Moyens à prévoir</button></div><div id="aiOut" class="aiout md" hidden></div></div>
   <div class="lnav">${prev?`<a class="btn b-line" href="#/app/construction/etape/${prev.id}">${ic('back')}${esc(prev.titre)}</a>`:'<span></span>'}${next?`<a class="btn b-pri" href="#/app/construction/etape/${next.id}">${esc(next.titre)} ${ic('arrow')}</a>`:`<a class="btn b-dark" href="#/app/construction">Retour au parcours ${ic('flag')}</a>`}</div>
  </div><aside class="toc"><div class="card" style="padding:12px"><b class="small faint mono" style="letter-spacing:.1em">LES ÉTAPES</b><div style="display:grid;gap:2px;margin-top:6px">${L.map((x,k)=>`<a href="#/app/construction/etape/${x.id}" class="${x.id===e.id?'on':''}">${ic('chev')}<span>${k+1}. ${esc(x.titre)}</span></a>`).join('')}</div></div></aside></div>`;
}});
A.on('click', '[data-azia]', el => {
  const e = Z().etapes.find(x => x.id === el.dataset.azia) || Z().elements.find(x => x.id === el.dataset.azia);
  const out = $('#aiOut'); out.hidden = false;
  out.innerHTML = `<div class="row sub">${ic('spark')}L'IA rédige sa réponse <span class="typing"><i></i><i></i><i></i></span></div>`;
  A.IA.stream({kind:'expliquer', ref:'az-'+e.id, ctx:{matiere:'Construction de A à Z', chapitre:e.titre, extrait:String(e.contenu).slice(0, 9000)}, messages:[{role:'user', content:el.dataset.q}]}, t => { out.innerHTML = A.mdHtml(t, {inner:true}); })
   .then(r => { if(!r.ok) out.innerHTML = `<div class="note">${ic('info')}<span>${esc(r.error)}</span></div>`; });
});

/* ---------- Calculateurs ---------- */
const kgm = d => d*d/162;                   // kg/m d'une barre HA de diamètre d (mm)
const sec = d => Math.PI*d*d/400;           // cm²
const CALC = {
  poteau:{t:'Calculateur : poteau', f:[['a','Côté a','cm',20],['b','Côté b','cm',20],['h','Hauteur','m',3],['n','Nombre de barres','u',4],['d','Diamètre des barres','mm',12],['e','Espacement des cadres','cm',15],['nb','Nombre de poteaux','u',1]],
    run:v => { const V = v.a/100*v.b/100*v.h*v.nb; const Al = v.n*v.h*1.1*kgm(v.d)*v.nb; const per = 2*((v.a-5)+(v.b-5))/100 + .2; const nc = Math.ceil(v.h*100/v.e)+1; const Ac = nc*per*kgm(6)*v.nb; const As = v.n*sec(v.d), Bp = v.a*v.b, pct = As/Bp*100, amin = Math.max(.2*Bp/100, 4*2*(v.a+v.b)/100);
      return [['Volume de béton', F(V,3)+' m³'],['Ciment (350 kg/m³)', F(V*350/50,1)+' sacs de 50 kg'],['Sable / gravier', F(V*.4,2)+' m³ / '+F(V*.8,2)+' m³'],['Aciers longitudinaux', F(Al,1)+' kg'],['Cadres HA6 ('+nc+' par poteau)', F(Ac,1)+' kg'],['Section d\'acier', F(As,2)+' cm² ('+F(pct,2)+' % de B)'],['Minimum BAEL', F(amin,2)+' cm² → '+(As>=amin?'✔ vérifié':'✖ insuffisant')]]; }},
  poutre:{t:'Calculateur : poutre sur deux appuis', f:[['L','Portée','m',4.5],['b','Largeur b','cm',20],['h','Hauteur h','cm',40],['q','Charge (ELU)','kN/m',25],['fe','Acier fe','MPa',500]],
    run:v => { const M = v.q*v.L*v.L/8, Vmax = v.q*v.L/2, d = .9*v.h/100, fsu = v.fe/1.15; const As = M/(.9*d*fsu)*1e4/1e3; const opts = [10,12,14,16,20].map(D => [D, Math.max(2, Math.ceil(As/sec(D)))]).filter(o => o[1] <= 5).slice(0,3);
      const V = v.L*v.b/100*v.h/100;
      return [['Hauteur conseillée (L/12)', F(v.L*100/12,0)+' cm '+(v.h>=v.L*100/14?'✔':'⚠ un peu faible')],['Moment maximal M = qL²/8', F(M,1)+' kN·m'],['Effort tranchant V = qL/2', F(Vmax,1)+' kN'],['Hauteur utile d ≈ 0,9 h', F(d*100,1)+' cm'],['Acier tendu nécessaire As', F(As,2)+' cm²'],['Propositions', opts.map(o=>o[1]+' HA'+o[0]+' ('+F(o[1]*sec(o[0]),2)+' cm²)').join(' · ')],['Béton', F(V,3)+' m³ · '+F(V*350/50,1)+' sacs']]; }},
  dalle:{t:'Calculateur : dalle pleine', f:[['lx','Petite portée Lx','m',4],['ly','Grande portée Ly','m',5],['e','Épaisseur','cm',15],['r','Ratio d\'acier','kg/m³',80]],
    run:v => { const S = v.lx*v.ly, V = S*v.e/100; const rho = v.lx/v.ly;
      return [['Sens de portée', rho > .4 ? 'Dalle portant dans les deux sens (α = '+F(rho,2)+')' : 'Dalle portant dans un sens'],['Épaisseur conseillée', F(v.lx*100/(rho>.4?35:28),0)+' cm minimum'],['Surface', F(S,2)+' m²'],['Volume de béton', F(V,2)+' m³'],['Ciment (350 kg/m³)', F(V*7,1)+' sacs'],['Sable / gravier', F(V*.4,2)+' / '+F(V*.8,2)+' m³'],['Aciers (ratio)', F(V*v.r,0)+' kg'],['Poids propre', F(25*v.e/100,2)+' kN/m²']]; }},
  hourdis:{t:'Calculateur : plancher à corps creux', f:[['lx','Portée des poutrelles','m',4.2],['ly','Largeur du plancher','m',6],['ent','Entraxe des poutrelles','cm',60],['hc','Épaisseur dalle de compression','cm',4]],
    run:v => { const n = Math.ceil(v.ly*100/v.ent)+1, nh = Math.ceil((v.ly*100/v.ent))*Math.ceil(v.lx/.2), V = v.lx*v.ly*v.hc/100*1.15;
      return [['Plancher conseillé', v.lx<=3.5?'12+4':v.lx<=5?'16+4':v.lx<=6?'20+4':'25+5 ou dalle pleine'],['Nombre de poutrelles', n+' u de '+F(v.lx+.1,2)+' m'],['Nombre d\'entrevous (hourdis de 20 cm)', nh+' u'],['Béton de la dalle de compression', F(V,2)+' m³'],['Treillis soudé', F(v.lx*v.ly*1.1,1)+' m²'],['Étais conseillés', Math.ceil(v.ly/1)*Math.max(1,Math.floor(v.lx/1.6))+' u']]; }},
  semelle:{t:'Calculateur : semelle isolée', f:[['N','Charge du poteau (ELS)','kN',200],['s','Contrainte du sol','bar',1.5],['a','Côté du poteau','cm',20],['nb','Nombre de semelles','u',1]],
    run:v => { const q = v.s*100, Areq = v.N/q, A2 = Math.ceil(Math.sqrt(Areq)*20)/20, h = Math.max(.2, Math.ceil(((A2 - v.a/100)/4 + .05)*20)/20), V = A2*A2*h*v.nb;
      return [['Surface nécessaire N/σsol', F(Areq,2)+' m²'],['Semelle carrée proposée', F(A2,2)+' × '+F(A2,2)+' m'],['Hauteur h ≥ (A − a)/4 + 5 cm', F(h*100,0)+' cm'],['Contrainte réelle', F(v.N/(A2*A2)/100,2)+' bar ✔'],['Béton (toutes semelles)', F(V,2)+' m³'],['Béton de propreté', F((A2+.1)*(A2+.1)*.05*v.nb,3)+' m³'],['Fouille', F(Math.pow(A2+.3,2)*(h+.75)*v.nb,2)+' m³']]; }},
  filante:{t:'Calculateur : semelle filante', f:[['p','Charge linéique (ELS)','kN/m',60],['s','Contrainte du sol','bar',1.5],['b','Épaisseur du mur','cm',20],['L','Longueur totale','m',30]],
    run:v => { const B = Math.max(.4, Math.ceil(v.p/(v.s*100)*20)/20), h = Math.max(.2, Math.ceil(((B - v.b/100)/4 + .05)*20)/20), V = B*h*v.L;
      return [['Largeur B ≥ p/σsol', F(B*100,0)+' cm'],['Hauteur', F(h*100,0)+' cm'],['Volume de béton', F(V,2)+' m³'],['Ciment', F(V*7,1)+' sacs'],['Aciers filants (4 HA10)', F(4*v.L*1.05*kgm(10),0)+' kg'],['Aciers transversaux HA8/20', F(Math.ceil(v.L/.2)*(B-.1)*kgm(8),0)+' kg']]; }},
  lineaire:{t:'Calculateur : chaînage / longrine / linteau', f:[['L','Longueur totale','m',40],['b','Largeur','cm',20],['h','Hauteur','cm',20],['n','Nombre de barres','u',4],['d','Diamètre','mm',10],['e','Espacement cadres','cm',15]],
    run:v => { const V = v.L*v.b/100*v.h/100, Al = v.n*v.L*1.08*kgm(v.d), per = 2*((v.b-5)+(v.h-5))/100+.2, nc = Math.ceil(v.L*100/v.e), Ac = nc*per*kgm(6);
      return [['Volume de béton', F(V,3)+' m³'],['Ciment (350 kg/m³)', F(V*7,1)+' sacs'],['Aciers longitudinaux (recouvrements inclus)', F(Al,1)+' kg ('+Math.ceil(v.n*v.L*1.08/12)+' barres de 12 m)'],['Cadres HA6', nc+' u · '+F(Ac,1)+' kg'],['Coffrage (2 joues)', F(2*v.L*v.h/100,2)+' m²']]; }},
  escalier:{t:'Calculateur : escalier (Blondel)', f:[['H','Hauteur à franchir','m',3.06],['hm','Hauteur de marche visée','cm',17],['em','Emmarchement','m',1.0]],
    run:v => { const n = Math.round(v.H*100/v.hm), h = v.H*100/n, g = 63 - 2*h, L = (n-1)*g/100, bl = 2*h+g, pente = Math.atan(h/g)*180/Math.PI;
      return [['Nombre de marches', n+' contremarches'],['Hauteur de marche réelle', F(h,1)+' cm'],['Giron (Blondel 2h + g = 63)', F(g,1)+' cm'],['Contrôle Blondel', F(bl,1)+' cm '+(bl>=60&&bl<=64?'✔':'✖')],['Longueur en plan', F(L,2)+' m (sans palier)'],['Pente', F(pente,1)+' °'],['Volume de la paillasse (e = 15 cm)', F(Math.sqrt(L*L+v.H*v.H)*v.em*.15 + n*(h/100)*(g/100)/2*v.em,2)+' m³']]; }}
};
function calcHtml(id){
  const c = CALC[id]; if(!c) return '';
  return `<div class="calc" data-calcid="${id}"><b style="font-family:var(--fd);font-size:17px">${ic('calc')} ${esc(c.t)}</b><div class="g3">${c.f.map(f=>`<label class="fld"><span>${esc(f[1])} (${esc(f[2])})</span><input class="inp" type="number" step="any" data-cf="${f[0]}" value="${f[3]}"></label>`).join('')}</div><div class="res" data-cres></div></div>`;
}
function runCalc(box){
  const c = CALC[box.dataset.calcid]; const v = {};
  $$('[data-cf]', box).forEach(i => v[i.dataset.cf] = parseFloat(String(i.value).replace(',', '.')) || 0);
  let rows; try{ rows = c.run(v); }catch(e){ rows = [['Erreur', e.message]]; }
  $('[data-cres]', box).innerHTML = rows.map(r => `<div class="row between nw"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></div>`).join('');
}
A.on('input', '[data-cf]', el => runCalc(el.closest('[data-calcid]')));
A.calcHtml = calcHtml; A.runCalcs = root => $$('[data-calcid]', root).forEach(runCalc);

/* ---------- Élément ---------- */
A.page('app/construction/element/:id', {space:'app', title:p => (Z().elements.find(e=>e.id===p.id)||{}).titre || 'Élément', crumb:'<a href="#/app/construction">Construction A→Z</a> › Éléments', render(p){
  const L = Z().elements, e = L.find(x => x.id === p.id); if(!e) return A.empty('crane','Élément introuvable.');
  return `<div class="cols"><div class="stack s20" style="min-width:0">
   <article class="lesson"><div class="row between"><span class="kick">Élément d'ouvrage</span>${matTags(e.matieres)}</div><h1 style="font-size:clamp(24px,3vw,34px);margin:8px 0 6px">${esc(e.titre)}</h1><p class="muted" style="margin-bottom:14px">${esc(e.resume)}</p>
   ${A.FIG[e.fig] ? `<div class="md"><figure>${A.FIG[e.fig]()}</figure></div>` : ''}${A.mdHtml(e.contenu)}</article>
   <div class="aipanel"><div class="hd">${ic('spark')}Demander à l'IA</div><div class="sugg"><button data-azia="${e.id}" data-q="Calcule un exemple complet de ferraillage pour cet élément dans une maison R+1 courante, avec toutes les étapes.">Exemple de calcul complet</button><button data-azia="${e.id}" data-q="Décris pas à pas la mise en œuvre sur chantier de cet élément (coffrage, ferraillage, coulage, décoffrage) avec les contrôles.">Mise en œuvre pas à pas</button></div><div id="aiOut" class="aiout md" hidden></div></div>
  </div><div class="stack">${calcHtml(e.calc)}
   <div class="card"><h3>Autres éléments</h3><div class="stack s8">${L.filter(x=>x.id!==e.id).map(x=>`<a class="row between" style="text-decoration:none" href="#/app/construction/element/${x.id}"><b style="font-size:14px">${esc(x.titre)}</b>${ic('chev')}</a>`).join('')}</div></div>
  </div></div>`;
}, mount(root){ A.runCalcs(root); }});

/* ---------- Projet type ---------- */
let pjTab = 'archi', pjLv = 0, pjCut = 0, pjId = null;
const pad = n => String(n).padStart(2, '0');
function sheets(pj){
  const L = A.PLAN.levels(pj), M = A.PRJ.model(pj), out = [];
  L.forEach((l,i) => out.push({code:'A' + pad(i+1), t:'Plan du ' + l.nom.toLowerCase(), tab:'archi', lv:i}));
  out.push({code:'A' + pad(L.length+1), t:'Plan de toiture', tab:'toit'});
  out.push({code:'A' + pad(L.length+2), t:'Façade principale', tab:'facade'});
  (pj.coupes || []).forEach((c,k) => out.push({code:'A' + pad(L.length+3+k), t:`Coupe ${c.nom}-${c.nom}`, tab:'coupe', cut:k}));
  out.push({code:'S01', t:'Plan de fondations', tab:'fond'});
  (M.slab ? L : L.slice(0,1)).forEach((l,i) => out.push({code:'S' + pad(i+2), t:M.slab ? 'Coffrage du plancher haut ' + l.court : 'Poteaux et chaînages', tab:'struct', lv:i}));
  L.forEach((l,i) => out.push({code:'E' + pad(i+1), t:'Électricité · ' + l.nom, tab:'elec', lv:i}));
  L.forEach((l,i) => out.push({code:'P' + pad(i+1), t:'Plomberie · ' + l.nom, tab:'plomb', lv:i}));
  return out;
}
A.page('app/construction/projet/:id', {space:'app', title:p => (Z().projets.find(x=>x.id===p.id)||{}).titre || 'Projet', crumb:'<a href="#/app/construction">Construction A→Z</a> › Projets types',
 actions:p => `<button class="btn b-line b-sm noprint" data-act="print">${ic('print')}<span class="hs">Imprimer</span></button>`,
 render(p){
  const pj = Z().projets.find(x => x.id === p.id); if(!pj) return A.empty('building','Projet introuvable.');
  if(pjId !== pj.id){ pjId = pj.id; pjTab = 'archi'; pjLv = 0; pjCut = 0; }
  A.PRJ.setCurrent(pj);
  const L = A.PLAN.levels(pj), Mo = A.PRJ.model(pj);
  const M = A.PLAN.metre(pj), dq = A.METRE ? A.METRE.fromLines(M.lines) : null;
  const perLevel = {archi:L.length, struct:Mo.slab ? L.length : 1, elec:L.length, plomb:L.length};
  if(perLevel[pjTab] && pjLv >= perLevel[pjTab]) pjLv = 0;
  const tabs = [['archi','Architecture'],['struct', Mo.slab ? 'Coffrage' : 'Structure'],['fond','Fondations'],['toit','Toiture'],['elec','Électricité'],['plomb','Plomberie'],['facade','Façade'],['coupe','Coupes'],['v3d','Maquette 3D']];
  let plan = '';
  if(pjTab === 'archi') plan = A.PLAN.archi(pj, pjLv);
  if(pjTab === 'fond') plan = A.PLAN.fondations(pj);
  if(pjTab === 'struct') plan = A.PLAN.structure(pj, pjLv);
  if(pjTab === 'toit') plan = A.PLAN.toiture(pj);
  if(pjTab === 'elec') plan = A.PLAN.elec(pj, pjLv);
  if(pjTab === 'plomb') plan = A.PLAN.plomberie(pj, pjLv);
  if(pjTab === 'facade') plan = A.PLAN.facade(pj);
  if(pjTab === 'coupe') plan = A.PLAN.coupe(pj, pjCut);
  if(pjTab === 'v3d') plan = A.V3D ? A.V3D.projectHtml(pj) : A.empty('cube', 'Maquette 3D indisponible.');
  const nL = perLevel[pjTab] || 0;
  const levelSel = nL > 1 ? `<div class="tabs lvtabs">${L.slice(0, nL).map((l,i)=>`<button class="tab ${i===pjLv?'on':''}" data-pjlv="${i}">${esc(l.court === 'RDC' ? 'Rez-de-chaussée' : l.nom)}</button>`).join('')}</div>` : '';
  const cutSel = pjTab === 'coupe' ? `<div class="tabs lvtabs">${(pj.coupes||[]).map((c,k)=>`<button class="tab ${k===pjCut?'on':''}" data-pjcut="${k}">Coupe ${c.nom}-${c.nom}</button>`).join('')}</div>` : '';
  const legend = {
    archi:`<span><i style="background:#2A3340"></i>Murs (ext. 20 cm, int. 15 cm)</span><span><i style="background:#FFF4E8;border:1px solid #ddd"></i>Pièces de vie</span><span><i style="background:#E6F5F6;border:1px solid #ddd"></i>Pièces d'eau</span><span style="color:#C8363B">— · — Lignes de coupe A et B</span>`,
    fond:`<span><i style="border:1.5px dashed #C95F18"></i>Semelles (calculées poteau par poteau)</span><span><i style="background:#EEF3FA;border:1px solid #2F6FDB"></i>Longrines</span><span><i style="background:#14202E"></i>Amorces de poteaux</span><span>Touchez un élément pour ouvrir sa fiche</span>`,
    struct:`<span><i style="background:#14202E"></i>Poteaux (repère = axes)</span><span><i style="border:1.5px dashed #C95F18"></i>${Mo.slab?'Poutres':'Chaînages'}</span>${Mo.slab?'<span><i style="background:#2F6FDB"></i>Sens des poutrelles</span>':''}<span>Touchez un poteau, une poutre ou un panneau</span>`,
    elec:`<span style="color:#C95F18">⊗ Point lumineux</span><span style="color:#2F6FDB">⊘ Interrupteur</span><span style="color:#1E9B5E">◓ Prise 16 A</span><span style="color:#8E4FD1">◓ Prise 32 A</span><span style="color:#0E8C95">▢ Chauffe-eau</span><span>▬ Tableau (TGBT)</span>`,
    plomb:`<span><i style="background:#2F6FDB"></i>Eau froide (PPR)</span><span><i style="background:#8B5A2B"></i>Évacuations (PVC Ø 100 / 40)</span><span><i style="border:1.5px solid #0E8C95"></i>Appareils sanitaires</span>`,
    toit:`<span><i style="background:#2F6FDB"></i>Gouttières / évacuations EP</span><span>→ sens de la pente</span>`,
    facade:'', coupe:`<span><i style="background:#BFB6A8"></i>Béton armé coupé</span><span><i style="background:#E3D9C6"></i>Maçonnerie coupée</span><span><i style="border:1.5px dashed #14202E"></i>Éléments vus en arrière-plan</span>`, v3d:''
  }[pjTab];
  const ed = pjTab === 'elec' ? A.PLAN.elecData(pj, pjLv) : null;
  const maxW = Math.max(...pj.planning.map(r => r[1] + r[2]));
  const SH = sheets(pj);
  const isOn = sh => sh.tab === pjTab && (sh.lv == null || sh.lv === pjLv) && (sh.cut == null || sh.cut === pjCut);
  const fmt = (v, d=1) => F(v, d);
  const sizes = arr => [...new Set(arr)].sort((a,b)=>a-b).map(v => Math.round(v*100)).join(', ');
  const descr = `<dl class="kv">
    <dt>Sol d'assise</dt><dd>${esc(Mo.sol.nature)} · σsol = ${fmt(Mo.sol.sigma)} bar</dd>
    <dt>Fondations</dt><dd>${Mo.semelles.length} semelles isolées, ${Mo.types.length} type(s) : ${Mo.types.map((t,i)=>`S${i+1} ${fmt(t[0],2)}×${fmt(t[0],2)}`).join(', ')} · fond de fouille −${fmt(Mo.sol.prof,2)}</dd>
    <dt>Longrines</dt><dd>${Mo.longs.length} longrines ${pj.struct.longrine.join(' × ')} cm (${fmt(Mo.longs.reduce((a,l)=>a+l.L,0))} m)</dd>
    <dt>Poteaux</dt><dd>${Mo.posts.length} files de poteaux · sections ${sizes(Mo.postEls.map(e=>e.d.a))} cm · ${[...new Set(Mo.postEls.map(e=>A.PRJ.barTxt(e.d.bars)))].join(', ')}</dd>
    <dt>${Mo.slab?'Poutres':'Chaînages'}</dt><dd>${Mo.beams.length} ${Mo.slab?'poutres':'chaînages'} · hauteurs ${sizes(Mo.beams.map(b=>b.h))} cm</dd>
    <dt>Planchers</dt><dd>${Mo.slab ? [...new Set(Mo.panels.filter(c=>!c.tremie).map(c=>c.hd))].map(h => `corps creux ${h} (${Mo.panels.filter(c=>c.hd===h&&!c.tremie).length} panneaux)`).join(', ') : 'Dallage sur terre-plein, faux plafond sous charpente'}</dd>
    <dt>Toiture</dt><dd>${pj.toit && pj.toit.type !== 'terrasse' ? esc(pj.toit.couverture) + ' sur ' + esc(pj.toit.charpente.toLowerCase()) + ', ' + pj.toit.type + ' à ' + pj.toit.pente + '°' : 'Toiture-terrasse étanchée, acrotère ' + fmt((pj.toit||{}).acrotere||.6,2) + ' m'}</dd>
    ${Mo.stairs.length ? `<dt>Escaliers</dt><dd>${Mo.stairs.length} volée(s) double(s) de ${Mo.stairs[0].n} marches (${fmt(Mo.stairs[0].hm*100)} × ${Math.round(Mo.stairs[0].g*100)} cm)</dd>` : ''}
    <dt>Béton armé</dt><dd><b>${fmt(Mo.totBeton)} m³</b> · aciers <b>${fmt(Mo.totAcier/1000,2)} t</b> (${fmt(Mo.totAcier/Mo.totBeton,0)} kg/m³)</dd></dl>`;
  return `<div class="mhead" style="background:linear-gradient(130deg,#22344D,#0E1A2B)"><span class="ic">${ic(pj.id==='immeuble'?'building':'home')}</span><div><span class="kick" style="color:var(--amber)">${esc(pj.standing)} · ${esc(pj.niveauxTxt)}</span><h2>${esc(pj.titre)}</h2><p>${esc(pj.resume)}</p></div>
   <div class="stack s8" style="text-align:right"><span class="pill" style="background:rgba(255,255,255,.14);color:#fff">${ic('ruler')}${pj.surface} m² habitables</span><span class="pill" style="background:rgba(255,255,255,.14);color:#fff">${ic('coins')}${F(pj.budget[0]/1e6)} – ${F(pj.budget[1]/1e6)} M FCFA</span><span class="pill" style="background:rgba(255,255,255,.14);color:#fff">${ic('pin')}${esc((pj.site||{}).ville||'')}</span></div></div>
  <div class="card">${A.mdHtml(pj.description)}</div>
  <div class="card stack" id="pjPlans"><div class="toolbar"><h3 style="margin:0;font-size:18px">Plans du projet <small>${SH.length} planches</small></h3><div class="plantabs">${tabs.map(t=>`<button class="tab ${pjTab===t[0]?'on':''}" data-pjtab="${t[0]}">${t[1]}</button>`).join('')}</div></div>
   ${levelSel}${cutSel}<div class="planbox${pjTab==='v3d'?' p3d':''}">${plan}</div>${legend?`<div class="legend">${legend}</div>`:''}
   ${ed?`<div class="tw"><table class="t"><thead><tr><th>Circuit</th><th class="r">Points</th><th class="r">Circuits</th><th>Câble</th><th>Protection</th><th class="r">Puissance estimée</th></tr></thead><tbody>${ed.circuits.filter(c=>c.nb).map(c=>`<tr><td>${esc(c.n)}</td><td class="r">${c.nb}</td><td class="r">${c.cir}</td><td>${c.cable}</td><td>${c.prot}</td><td class="r">${F(c.p)} W</td></tr>`).join('')}</tbody></table></div><p class="sub">Bilan simplifié selon les règles de la NF C 15-100 : 8 points d'éclairage ou 8 prises maximum par circuit ; protection différentielle 30 mA en tête.</p>`:''}
   ${pjTab==='v3d'?`<div class="row"><button class="btn b-dark b-sm" data-pjcad3d="${pj.id}">${ic('cube')}Modifier la maquette dans l'atelier 3D</button><span class="sub">Tous les niveaux, dalles, escaliers et toiture sont importés : vous pouvez dessiner, changer les hauteurs, les matériaux et les couleurs.</span></div>`:`<div class="row"><button class="btn b-dark b-sm" data-pjcad="${pj.id}">${ic('compass')}Ouvrir dans l'atelier de dessin</button><button class="btn b-line b-sm" data-pjdl="${pj.id}">${ic('download')}Télécharger la planche (SVG)</button></div>`}
   <details class="sheets"><summary>${ic('list')}Toutes les planches du dossier (${SH.length})</summary><div class="shgrid">${SH.map((sh,i)=>`<button class="shbtn ${isOn(sh)?'on':''}" data-sheet="${i}"><b class="mono">${sh.code}</b><span>${esc(sh.t)}</span></button>`).join('')}</div></details>
  </div>
  <div class="card stack"><div class="toolbar"><h3 style="margin:0;font-size:18px">Éléments de structure du projet <small>${Mo.all.length} éléments repérés</small></h3></div>${A.PRJ.listHtml(pj)}</div>
  <div class="card stack"><h3 style="margin:0;font-size:18px">Les matières appliquées à ce projet <small>calculs et choix propres à ce projet</small></h3>${A.APPLI ? A.APPLI.chips(pj) : ''}</div>
  <div class="cols"><div class="card"><h3>Descriptif de la structure <small>issu de la note de calcul</small></h3>${descr}</div>
   <div class="card"><h3>Répartition du budget <small>par lots</small></h3><div class="bars">${pj.lots.map(l=>`<div class="brow"><span>${esc(l[0])}</span><span class="mono small">${l[1]} % · ${F((pj.budget[0]+pj.budget[1])/2*l[1]/100/1e6,1)} M</span>${A.bar(l[1]*3)}</div>`).join('')}</div></div></div>
  <div class="card"><h3>Avant-métré et devis estimatif <small>calculés automatiquement à partir des plans et de la note de calcul</small></h3>
   <div class="kpis" style="margin-bottom:14px"><div class="kpi"><small>${ic('ruler')}Surface habitable calculée</small><b>${F(M.info.Shab,1)} m²</b></div><div class="kpi"><small>${ic('brick')}Murs extérieurs / intérieurs</small><b>${F(M.info.Lext,1)} / ${F(M.info.Lint,1)} m</b></div><div class="kpi"><small>${ic('column')}Acier (note de calcul)</small><b>${F(Mo.totAcier/1000,2)} t</b></div><div class="kpi hl"><small>${ic('coins')}Total TTC estimé</small><b>${dq?F(dq.ttc/1e6,1)+' M':'—'}</b><em>FCFA, prix du bordereau</em></div></div>
   ${dq ? A.METRE.recapHtml(dq) : ''}
   <div class="row" style="margin-top:12px"><button class="btn b-pri" data-pjmetre="${pj.id}">${ic('calc')}Ouvrir le détail dans l'outil Métré</button><span class="sub">Les prix unitaires sont indicatifs (Abidjan) et modifiables dans l'outil Métré.</span></div></div>
  <div class="card"><h3>Planning prévisionnel <small>en semaines</small></h3><div class="gantt">${pj.planning.map(r=>`<div class="gr"><span>${esc(r[0])}</span><div class="gt"><i style="left:${r[1]/maxW*100}%;width:${r[2]/maxW*100}%"></i></div></div>`).join('')}<div class="gr"><span></span><div class="row between small faint"><span>S1</span><span>S${Math.round(maxW/2)}</span><span>S${maxW}</span></div></div></div></div>`;
 },
 mount(root, p){ if(pjTab === 'v3d' && A.V3D){ const pj = Z().projets.find(x => x.id === p.id); if(pj) A.V3D.mountProject(root, pj); } },
 unmount(){ if(A.V3D) A.V3D.dispose(); }
});
A.on('click', '[data-pjtab]', el => { pjTab = el.dataset.pjtab; if(pjTab !== 'coupe') pjCut = pjCut; A.refresh(); });
A.on('click', '[data-pjlv]', el => { pjLv = +el.dataset.pjlv; A.refresh(); });
A.on('click', '[data-pjcut]', el => { pjCut = +el.dataset.pjcut; A.refresh(); });
A.on('click', '[data-sheet]', el => { const pj = Z().projets.find(x => x.id === pjId); const sh = sheets(pj)[+el.dataset.sheet]; pjTab = sh.tab; if(sh.lv != null) pjLv = sh.lv; if(sh.cut != null) pjCut = sh.cut; A.refresh(); const b = $('#pjPlans'); if(b) b.scrollIntoView({behavior:'smooth', block:'start'}); });
A.on('click', '.planbox [data-el]', el => { const pj = Z().projets.find(x => x.id === pjId); if(pj) A.PRJ.openEl(pj, el.dataset.el); });
A.on('click', '[data-pjdl]', el => { const box = $('.planbox svg'); if(box) A.download('plan-' + el.dataset.pjdl + '-' + pjTab + '.svg', box.outerHTML, 'image/svg+xml'); });
A.on('click', '[data-pjmetre]', el => { const pj = Z().projets.find(x => x.id === el.dataset.pjmetre); A.METRE.openFromProject(pj); });
A.on('click', '[data-pjcad3d]', el => { const pj = Z().projets.find(x => x.id === el.dataset.pjcad3d); A.CAD.openProject3D(pj); });
A.on('click', '[data-pjcad]', el => { const pj = Z().projets.find(x => x.id === el.dataset.pjcad); A.CAD.openProject(pj, pjLv); });
})();
