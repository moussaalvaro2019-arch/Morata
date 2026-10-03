/* =====================================================================
   ESPACE PDG (administrateur principal)
   ===================================================================== */
(function(){
'use strict';
const {$, $$, esc, ic, F, toast, S, fd, fdt, ago, ts, now} = A;
const DAY = 86400000;
const AD = () => S.adm || {profiles:[], connexions:[], progress:[], quiz:[], ia:[], works:[]};
const prof = id => AD().profiles.find(p => p.id === id) || {id, email:'(compte supprimé)', data:{name:'Utilisateur supprimé'}};
const nm = p => (p.data && p.data.name) || p.email || '—';
const who = (p, sub) => `<div class="who">${A.avatar(nm(p))}<span style="min-width:0"><b>${esc(nm(p))}</b><span class="sub">${esc(sub != null ? sub : p.email)}</span></span></div>`;
const onlineDot = p => A.isOnline(p) ? '<span class="online" title="En ligne"></span>' : '<span class="offline"></span>';
const learners = () => AD().profiles.filter(p => !p.admin);
const csv = (name, rows) => A.download(name, '﻿' + rows.map(r => r.map(c => '"' + String(c ?? '').replace(/"/g,'""') + '"').join(';')).join('\n'), 'text/csv');
const refreshBtn = () => `<button class="btn b-line b-sm" data-act="admrefresh">${ic('refresh')}<span class="hs">Actualiser</span></button>`;
A.on('click', '[data-act="admrefresh"]', async () => { await A.loadAdmin(); A.refresh(); toast('Données actualisées', 'refresh'); });
setInterval(async () => {
  if(!S.me || !S.me.isAdmin || !A.hash().startsWith('admin') || $('#ov')) return;
  const ae = document.activeElement; if(ae && /INPUT|TEXTAREA|SELECT/.test(ae.tagName)) return;
  try{ await A.loadAdmin(); A.refresh(); }catch(_){}
}, 60000);
function dayKey(t){ const d = new Date(t); return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(); }
function series(list, days, field='at'){
  const out = []; for(let i = days-1; i >= 0; i--){ const d = new Date(now() - i*DAY); out.push({k:dayKey(d), l:d.toLocaleDateString('fr-FR',{day:'2-digit', month:'2-digit'}), v:0, hl:i===0}); }
  list.forEach(x => { const o = out.find(s => s.k === dayKey(ts(x[field]))); if(o) o.v++; });
  return out;
}

/* ---------- Tableau de bord ---------- */
A.page('admin', {space:'admin', title:'Tableau de bord', crumb:() => 'Bonjour ' + esc(((S.me.data||{}).name||'').split(' ').slice(-1)[0] || 'PDG'), actions:refreshBtn, render(){
  const D = AD(), L = learners(), t = now();
  const on = L.filter(A.isOnline), week = D.connexions.filter(c => t - ts(c.at) < 7*DAY), today = D.connexions.filter(c => dayKey(ts(c.at)) === dayKey(t));
  const newW = L.filter(p => t - ts(p.created_at) < 7*DAY), done = D.progress.filter(p => p.done).length;
  const qavg = D.quiz.length ? Math.round(D.quiz.reduce((a,q)=>a+q.score/q.total,0)/D.quiz.length*100) : 0;
  const iaT = D.ia.filter(x => dayKey(ts(x.at)) === dayKey(t)).length, ia7 = D.ia.filter(x => t - ts(x.at) < 7*DAY).length;
  const cat = A.catalog();
  const popular = cat.map(m => ({m, n:new Set(D.progress.filter(p => p.mat === m.id).map(p => p.owner)).size})).sort((a,b)=>b.n-a.n).slice(0,7);
  const mx = Math.max(1, ...popular.map(x => x.n));
  const recent = D.connexions.slice(0, 8);
  return `<div class="kpis">
   <div class="kpi hl"><small>${ic('users')}Apprenants inscrits</small><b>${L.length}</b><em>+${newW.length} cette semaine</em></div>
   <div class="kpi"><small>${ic('online')}En ligne maintenant</small><b style="color:var(--ok)">${on.length}</b><em>${today.length} connexion(s) aujourd'hui</em></div>
   <div class="kpi"><small>${ic('chart')}Connexions (7 jours)</small><b>${week.length}</b><em>${new Set(week.map(c=>c.owner)).size} apprenants actifs</em></div>
   <div class="kpi"><small>${ic('spark')}Questions à l'IA</small><b>${iaT}</b><em>aujourd'hui · ${ia7} sur 7 jours</em></div>
  </div>
  <div class="kpis">
   <div class="kpi"><small>${ic('check')}Chapitres terminés</small><b>${done}</b><em>toutes matières confondues</em></div>
   <div class="kpi"><small>${ic('target')}Quiz passés</small><b>${D.quiz.length}</b><em>moyenne ${qavg} %</em></div>
   <div class="kpi"><small>${ic('folder')}Travaux enregistrés</small><b>${D.works.length}</b><em>${D.works.filter(w=>w.kind==='dessin').length} plans · ${D.works.filter(w=>w.kind==='metre').length} métrés</em></div>
   <div class="kpi"><small>${ic('book')}Contenus</small><b>${cat.length} matières</b><em>${cat.reduce((a,m)=>a+m.chapitres.length,0)} chapitres en ligne</em></div>
  </div>
  <div class="cols">
   <div class="card"><h3>Connexions par jour <small>14 derniers jours</small></h3>${A.barChart(series(D.connexions, 14), {label:'Connexions par jour'})}</div>
   <div class="card"><h3>En ligne maintenant <small>${on.length}</small></h3>${on.length ? `<div class="stack s8">${on.map(p=>`<a class="row between nw" style="text-decoration:none" href="#/admin/apprenant/${p.id}">${who(p, 'sur ' + (p.last_page||'#/').replace('#/',''))}<span class="online"></span></a>`).join('')}</div>` : '<p class="sub">Personne n\'est connecté en ce moment.</p>'}
    <h3 style="margin-top:18px">Nouveaux inscrits</h3>${L.slice().sort((a,b)=>ts(b.created_at)-ts(a.created_at)).slice(0,5).map(p=>`<a class="row between nw" style="text-decoration:none;margin-bottom:8px" href="#/admin/apprenant/${p.id}">${who(p, (p.data.profil||'') + (p.data.city?' · '+p.data.city:''))}<span class="small faint nowrap">${ago(p.created_at)}</span></a>`).join('') || '<p class="sub">Aucun inscrit pour le moment.</p>'}</div>
  </div>
  <div class="cols">
   <div class="card"><h3>Dernières connexions <a class="btn b-line b-xs" href="#/admin/connexions">Tout voir</a></h3>${recent.length ? `<div class="tw"><table class="t"><thead><tr><th>Apprenant</th><th>Date</th><th>Appareil</th></tr></thead><tbody>${recent.map(c=>{const p=prof(c.owner);return `<tr class="click" data-go="#/admin/apprenant/${c.owner}"><td>${who(p)}</td><td class="nowrap">${fdt(c.at)}<div class="small faint">${ago(c.at)}</div></td><td class="sub nowrap">${esc(A.device(c.data&&c.data.ua))}</td></tr>`}).join('')}</tbody></table></div>` : '<p class="sub">Aucune connexion enregistrée.</p>'}</div>
   <div class="card"><h3>Matières les plus suivies</h3><div class="bars">${popular.map(x=>`<div class="brow"><span>${esc(x.m.titre)}</span><span class="mono small">${x.n} apprenant${x.n>1?'s':''}</span>${A.bar(x.n/mx*100,'blue')}</div>`).join('')}</div></div>
  </div>`;
}});

/* ---------- Connexions ---------- */
let cxQ = '', cxP = '7';
A.page('admin/connexions', {space:'admin', title:'Connexions', crumb:'Qui s\'est connecté, quand et sur quel appareil', actions:() => `<div class="row">${refreshBtn()}<button class="btn b-line b-sm" data-act="cxcsv">${ic('download')}<span class="hs">Exporter</span></button></div>`, render(){
  const D = AD(), t = now();
  let L = D.connexions;
  if(cxP !== 'all') L = L.filter(c => t - ts(c.at) < (+cxP)*DAY);
  if(cxQ){ const q = cxQ.toLowerCase(); L = L.filter(c => { const p = prof(c.owner); return (nm(p) + ' ' + p.email).toLowerCase().includes(q); }); }
  const on = AD().profiles.filter(A.isOnline);
  const perUser = {}; L.forEach(c => perUser[c.owner] = (perUser[c.owner]||0) + 1);
  return `<div class="cols"><div class="card"><h3>Activité <small>${L.length} connexion(s)</small></h3>${A.barChart(series(L, cxP==='1'?7:cxP==='all'?30:+cxP>30?30:+cxP))}</div>
   <div class="card"><h3>En ligne maintenant <small>${on.length}</small></h3>${on.length?on.map(p=>`<a class="row between nw" style="text-decoration:none;margin-bottom:8px" href="#/admin/apprenant/${p.id}">${who(p, 'actif ' + ago(p.last_seen) + ' · ' + (p.last_page||'').replace('#/',''))}<span class="online"></span></a>`).join(''):'<p class="sub">Personne en ligne.</p>'}
    <h3 style="margin-top:16px">Les plus assidus</h3>${Object.entries(perUser).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([id,n])=>`<div class="row between nw" style="margin-bottom:8px">${who(prof(id))}<span class="pill p-info">${n}</span></div>`).join('') || '<p class="sub">—</p>'}</div></div>
  <div class="toolbar"><label class="search">${ic('search')}<input id="cxQ" placeholder="Rechercher un apprenant…" value="${esc(cxQ)}"></label>
   <div class="tabs">${[['1','Aujourd\'hui'],['7','7 jours'],['30','30 jours'],['all','Tout']].map(x=>`<button class="tab ${cxP===x[0]?'on':''}" data-cxp="${x[0]}">${x[1]}</button>`).join('')}</div></div>
  <div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Apprenant</th><th>Date et heure</th><th>Appareil</th><th>Page d'arrivée</th><th>Statut</th></tr></thead><tbody>${L.slice(0,300).map(c=>{const p=prof(c.owner);return `<tr class="click" data-go="#/admin/apprenant/${c.owner}"><td>${who(p)}</td><td class="nowrap">${fdt(c.at)}<div class="small faint">${ago(c.at)}</div></td><td class="nowrap">${ic((c.data&&c.data.w||1000)<760?'phone':'monitor')} ${esc(A.device(c.data&&c.data.ua))}</td><td class="sub">${esc(((c.data&&c.data.page)||'#/').replace('#/','') || 'accueil')}</td><td>${onlineDot(p)}</td></tr>`}).join('') || `<tr><td colspan="5">${A.empty('online','Aucune connexion sur cette période.')}</td></tr>`}</tbody></table></div></div>`;
}});
A.on('input', '#cxQ', el => { cxQ = el.value; A.refresh(); });
A.on('click', '[data-cxp]', el => { cxP = el.dataset.cxp; A.refresh(); });
A.on('click', '[data-act="cxcsv"]', () => csv('connexions.csv', [['Date','Nom','E-mail','Appareil','Page']].concat(AD().connexions.map(c => { const p = prof(c.owner); return [fdt(c.at), nm(p), p.email, A.device(c.data&&c.data.ua), (c.data&&c.data.page)||'']; }))));

/* ---------- Apprenants ---------- */
let apQ = '', apF = 'tous';
function lstats(id){
  const D = AD(); const pg = D.progress.filter(p => p.owner === id && p.done), qz = D.quiz.filter(q => q.owner === id);
  return {done:pg.length, quiz:qz.length, avg: qz.length ? Math.round(qz.reduce((a,q)=>a+q.score/q.total,0)/qz.length*100) : null, cx:D.connexions.filter(c => c.owner === id).length, ia:D.ia.filter(x => x.owner === id).length, works:D.works.filter(w => w.owner === id).length};
}
A.page('admin/apprenants', {space:'admin', title:'Apprenants', crumb:'Tous les comptes inscrits', actions:() => `<div class="row">${refreshBtn()}<button class="btn b-line b-sm" data-act="apcsv">${ic('download')}<span class="hs">Exporter</span></button></div>`, render(){
  let L = AD().profiles.slice().sort((a,b)=>ts(b.last_seen||b.created_at)-ts(a.last_seen||a.created_at));
  if(apF === 'enligne') L = L.filter(A.isOnline); if(apF === 'suspendus') L = L.filter(p => p.status === 'suspendu'); if(apF === 'admins') L = L.filter(p => p.admin);
  if(apF === 'inactifs') L = L.filter(p => now() - ts(p.last_seen||p.created_at) > 14*DAY);
  if(apQ){ const q = apQ.toLowerCase(); L = L.filter(p => (nm(p)+' '+p.email+' '+(p.data.city||'')+' '+(p.data.phone||'')+' '+(p.data.profil||'')).toLowerCase().includes(q)); }
  const all = AD().profiles;
  const tabs = [['tous','Tous',all.length],['enligne','En ligne',all.filter(A.isOnline).length],['inactifs','Inactifs (14 j)',all.filter(p=>now()-ts(p.last_seen||p.created_at)>14*DAY).length],['suspendus','Suspendus',all.filter(p=>p.status==='suspendu').length],['admins','Administrateurs',all.filter(p=>p.admin).length]];
  return `<div class="toolbar"><label class="search">${ic('search')}<input id="apQ" placeholder="Nom, e-mail, ville, téléphone…" value="${esc(apQ)}"></label><div class="tabs">${tabs.map(t=>`<button class="tab ${apF===t[0]?'on':''}" data-apf="${t[0]}">${t[1]} <span class="cnt">${t[2]}</span></button>`).join('')}</div></div>
  <div class="card pad0"><div class="tw"><table class="t"><thead><tr><th></th><th>Apprenant</th><th>Profil</th><th>Ville</th><th>Inscrit</th><th>Dernière activité</th><th class="r">Chapitres</th><th class="r">Quiz</th><th>Statut</th></tr></thead><tbody>
  ${L.map(p=>{const s=lstats(p.id);return `<tr class="click" data-go="#/admin/apprenant/${p.id}"><td>${onlineDot(p)}</td><td>${who(p)}</td><td class="sub">${esc(p.data.profil||'—')}</td><td class="sub">${esc(p.data.city||'—')}</td><td class="sub nowrap">${fd(p.created_at)}</td><td class="nowrap">${ago(p.last_seen)}</td><td class="r mono">${s.done}</td><td class="r mono">${s.quiz}${s.avg!=null?` <span class="sub">(${s.avg}%)</span>`:''}</td><td>${p.admin?'<span class="pill p-amber">Admin</span>':p.status==='suspendu'?'<span class="pill p-bad dot">Suspendu</span>':'<span class="pill p-ok dot">Actif</span>'}</td></tr>`}).join('') || `<tr><td colspan="9">${A.empty('users','Aucun apprenant ne correspond.')}</td></tr>`}
  </tbody></table></div></div>`;
}});
A.on('input', '#apQ', el => { apQ = el.value; A.refresh(); });
A.on('click', '[data-apf]', el => { apF = el.dataset.apf; A.refresh(); });
A.on('click', '[data-act="apcsv"]', () => csv('apprenants.csv', [['Nom','E-mail','Téléphone','Ville','Profil','Inscrit le','Dernière activité','Chapitres terminés','Quiz','Moyenne quiz','Connexions','Statut']].concat(AD().profiles.map(p => { const s = lstats(p.id); return [nm(p), p.email, p.data.phone, p.data.city, p.data.profil, fd(p.created_at), fdt(p.last_seen), s.done, s.quiz, s.avg ?? '', s.cx, p.status]; }))));

A.page('admin/apprenant/:id', {space:'admin', title:p => nm(prof(p.id)), crumb:'<a href="#/admin/apprenants">Apprenants</a>', render(p){
  const u = AD().profiles.find(x => x.id === p.id); if(!u) return A.empty('user','Apprenant introuvable.');
  const D = AD(), s = lstats(u.id), cat = A.catalog();
  const prog = {}; D.progress.filter(x => x.owner === u.id).forEach(x => prog[x.chap] = x);
  const qz = D.quiz.filter(q => q.owner === u.id).sort((a,b)=>b.at-a.at), cx = D.connexions.filter(c => c.owner === u.id), wk = D.works.filter(w => w.owner === u.id), ia = D.ia.filter(x => x.owner === u.id);
  const wa = String(u.data.phone||'').replace(/\D/g,'');
  return `<div class="cols"><div class="stack">
   <div class="card row between"><div class="row">${A.avatar(nm(u),'lg')}<div><h2 style="font-size:22px">${esc(nm(u))} ${onlineDot(u)}</h2><div class="sub">${esc(u.email)} · ${esc(u.data.profil||'Apprenant')}${u.data.city?' · '+esc(u.data.city):''}</div><div class="sub">Inscrit le ${fd(u.created_at)} · dernière activité ${ago(u.last_seen)}${u.last_page?' sur '+esc(u.last_page.replace('#/','')):''}</div></div></div>
    <div class="row">${wa?`<a class="btn b-ok b-sm" target="_blank" rel="noopener" href="https://wa.me/${esc(wa.length<=10?'225'+wa:wa)}">${ic('whatsapp')}WhatsApp</a>`:''}<a class="btn b-line b-sm" href="mailto:${esc(u.email)}">${ic('mail')}E-mail</a></div></div>
   <div class="kpis"><div class="kpi"><small>${ic('check')}Chapitres</small><b>${s.done}</b></div><div class="kpi"><small>${ic('target')}Quiz</small><b>${s.quiz}</b><em>${s.avg!=null?'moyenne '+s.avg+' %':'—'}</em></div><div class="kpi"><small>${ic('online')}Connexions</small><b>${s.cx}</b></div><div class="kpi"><small>${ic('spark')}Questions IA</small><b>${s.ia}</b></div></div>
   <div class="card"><h3>Progression par matière</h3><div class="bars">${cat.map(m=>{const pr=A.matProgress(m, prog);return pr.done?`<div class="brow"><span>${esc(m.titre)}</span><span class="mono small">${pr.done}/${pr.total}</span>${A.bar(pr.pct)}</div>`:''}).join('') || '<p class="sub">Aucun chapitre terminé pour le moment.</p>'}</div></div>
   <div class="card"><h3>Résultats aux quiz <small>${qz.length}</small></h3>${qz.length?`<div class="tw"><table class="t"><thead><tr><th>Chapitre</th><th>Date</th><th class="r">Score</th></tr></thead><tbody>${qz.slice(0,30).map(q=>{const f=A.chap(q.chap);const pc=Math.round(q.score/q.total*100);return `<tr><td>${esc(f?f.c.titre:q.chap)}<div class="small faint">${esc(f?f.m.titre:'')}</div></td><td class="sub nowrap">${fdt(q.at)}</td><td class="r"><span class="pill ${pc>=70?'p-ok':pc>=50?'p-warn':'p-bad'}">${q.score}/${q.total}</span></td></tr>`}).join('')}</tbody></table></div>`:'<p class="sub">Aucun quiz passé.</p>'}</div>
  </div><div class="stack">
   <div class="card"><h3>Informations</h3><dl class="kv"><dt>Téléphone</dt><dd>${esc(u.data.phone||'—')}</dd><dt>Ville</dt><dd>${esc(u.data.city||'—')}</dd><dt>Profil</dt><dd>${esc(u.data.profil||'—')}</dd><dt>Statut</dt><dd>${u.admin?'Administrateur':u.status==='suspendu'?'Suspendu':'Actif'}</dd></dl>
    ${u.admin || u.id === S.me.id ? '' : `<div class="row" style="margin-top:14px">${u.status==='suspendu'?`<button class="btn b-ok b-sm" data-ust="${u.id}" data-v="actif">${ic('check')}Réactiver</button>`:`<button class="btn b-line b-sm" data-ust="${u.id}" data-v="suspendu">${ic('lock')}Suspendre</button>`}<button class="btn b-bad b-sm" data-udel="${u.id}">${ic('trash')}Supprimer le compte</button></div>`}</div>
   <div class="card"><h3>Historique des connexions <small>${cx.length}</small></h3>${cx.length?`<div class="stack s8">${cx.slice(0,15).map(c=>`<div class="row between nw"><span class="small">${fdt(c.at)}</span><span class="small faint">${esc(A.device(c.data&&c.data.ua))}</span></div>`).join('')}</div>`:'<p class="sub">Aucune connexion.</p>'}</div>
   <div class="card"><h3>Travaux <small>${wk.length}</small></h3>${wk.length?`<div class="stack s8">${wk.map(w=>`<div class="row between nw"><span class="row nw">${A.workPill(w.kind)}<b style="font-size:13.5px">${esc(w.name||'Sans nom')}</b></span><button class="btn b-line b-xs" data-wopen="${w.id}">Ouvrir</button></div>`).join('')}</div>`:'<p class="sub">Aucun travail enregistré.</p>'}</div>
   ${ia.length?`<div class="card"><h3>Utilisation de l'IA <small>${ia.length}</small></h3><div class="stack s8">${ia.slice(0,10).map(x=>`<div class="row between nw small"><span>${esc(iaKind(x.data&&x.data.kind))} · ${esc((x.data&&x.data.ref)||'')}</span><span class="faint">${ago(x.at)}</span></div>`).join('')}</div></div>`:''}
  </div></div>`;
}});
A.on('click', '[data-ust]', async el => { await A.db.setStatus(el.dataset.ust, el.dataset.v); toast(el.dataset.v === 'suspendu' ? 'Compte suspendu' : 'Compte réactivé', 'lock'); A.refresh(); });
A.on('click', '[data-udel]', async el => {
  if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = ic('alert') + 'Confirmer : supprimer définitivement'; return; }
  if(await A.db.deleteUser(el.dataset.udel)){ toast('Compte supprimé', 'trash'); A.go('#/admin/apprenants'); }
});
A.on('click', '[data-wopen]', el => {
  const w = AD().works.find(x => x.id === el.dataset.wopen); if(!w || !w.data){ toast('Contenu indisponible', 'x'); return; }
  if(w.kind === 'photo'){ A.photoWin(w.data, nm(prof(w.owner))); return; }
  const copy = JSON.parse(JSON.stringify(w.data)); copy.name = (copy.name || 'Travail') + ' (copie de ' + nm(prof(w.owner)) + ')';
  if(w.kind === 'metre') A.METRE.openDoc(copy);
  else { A.ls.set('cadImport', copy); A.go('#/app/atelier/import'); }
});

/* ---------- Progression & quiz ---------- */
let pgMat = '';
A.page('admin/progression', {space:'admin', title:'Progression & quiz', crumb:'Suivi pédagogique', render(){
  const D = AD(), cat = A.catalog(), nL = Math.max(1, learners().length);
  const rows = cat.map(m => {
    const pr = D.progress.filter(p => p.mat === m.id && p.done), users = new Set(pr.map(p => p.owner)), qz = D.quiz.filter(q => q.mat === m.id);
    const full = [...users].filter(u => m.chapitres.every(c => pr.some(p => p.owner === u && p.chap === c.id))).length;
    return {m, users:users.size, done:pr.length, full, qz:qz.length, avg: qz.length ? Math.round(qz.reduce((a,q)=>a+q.score/q.total,0)/qz.length*100) : null};
  });
  const sel = pgMat ? A.mat(pgMat) : null;
  return `<div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Matière</th><th class="r">Apprenants</th><th class="r">Chapitres terminés</th><th class="r">Matière terminée</th><th class="r">Quiz</th><th class="r">Moyenne</th><th>Taux d'engagement</th></tr></thead><tbody>
   ${rows.map(r=>`<tr class="click" data-pgmat="${r.m.id}" style="${pgMat===r.m.id?'background:var(--or3)':''}"><td><b>${esc(r.m.titre)}</b></td><td class="r mono">${r.users}</td><td class="r mono">${r.done}</td><td class="r mono">${r.full}</td><td class="r mono">${r.qz}</td><td class="r">${r.avg!=null?`<span class="pill ${r.avg>=70?'p-ok':r.avg>=50?'p-warn':'p-bad'}">${r.avg} %</span>`:'—'}</td><td style="min-width:140px">${A.bar(r.users/nL*100,'blue')}</td></tr>`).join('')}</tbody></table></div></div>
  ${sel?`<div class="card"><h3>${esc(sel.titre)} : détail par chapitre</h3><div class="tw"><table class="t"><thead><tr><th>Chapitre</th><th class="r">Terminé par</th><th class="r">Quiz passés</th><th class="r">Moyenne</th></tr></thead><tbody>${sel.chapitres.map((c,i)=>{const pr=D.progress.filter(p=>p.chap===c.id&&p.done).length, qz=D.quiz.filter(q=>q.chap===c.id), av=qz.length?Math.round(qz.reduce((a,q)=>a+q.score/q.total,0)/qz.length*100):null;return `<tr><td>${i+1}. ${esc(c.titre)}</td><td class="r mono">${pr}</td><td class="r mono">${qz.length}</td><td class="r">${av!=null?av+' %':'—'}</td></tr>`}).join('')}</tbody></table></div><p class="sub">Une moyenne faible sur un chapitre indique qu'il faut peut-être le réécrire ou l'enrichir (espace Contenus).</p></div>`:''}
  <div class="card"><h3>Derniers quiz passés</h3><div class="tw"><table class="t"><thead><tr><th>Apprenant</th><th>Chapitre</th><th>Date</th><th class="r">Score</th></tr></thead><tbody>${D.quiz.slice().sort((a,b)=>b.at-a.at).slice(0,40).map(q=>{const f=A.chap(q.chap);const pc=Math.round(q.score/q.total*100);return `<tr class="click" data-go="#/admin/apprenant/${q.owner}"><td>${who(prof(q.owner))}</td><td>${esc(f?f.c.titre:q.chap)}<div class="small faint">${esc(f?f.m.titre:'')}</div></td><td class="sub nowrap">${fdt(q.at)}</td><td class="r"><span class="pill ${pc>=70?'p-ok':pc>=50?'p-warn':'p-bad'}">${q.score}/${q.total}</span></td></tr>`}).join('') || `<tr><td colspan="4" class="sub">Aucun quiz.</td></tr>`}</tbody></table></div></div>`;
}});
A.on('click', '[data-pgmat]', el => { pgMat = pgMat === el.dataset.pgmat ? '' : el.dataset.pgmat; A.refresh(); });

/* ---------- Contenus ---------- */
const ICONS = ['sigma','fx','atom','network','sun','thermo','sound','wave','cube','mountain','map','brick','hammer','beam','column','clip','coins','list','book','building','compass','layers','zap','drop','globe','calc'];
A.page('admin/contenus', {space:'admin', title:'Matières & cours', crumb:'Contenus pédagogiques', actions:() => `<button class="btn b-pri b-sm" data-matedit="">${ic('plus')}Nouvelle matière</button>`, render(){
  const all = A.catalog(true);
  return `<div class="note info">${ic('info')}<span>Les cours fournis avec la plateforme peuvent être modifiés, masqués ou complétés. Vos modifications sont enregistrées en ligne et visibles immédiatement par les apprenants. Utilisez <b>« Rédiger avec l'IA »</b> pour créer un nouveau chapitre en quelques secondes.</span></div>
  ${A.GROUPES.map(g => { const ms = all.filter(m => (m.groupe||'fond') === g.id); if(!ms.length) return '';
    return `<section class="grp"><h3>${esc(g.n)}</h3><div class="card pad0"><div class="tw"><table class="t"><tbody>${ms.map(m=>{const vis=m.chapitres.filter(c=>!c.cache).length;return `<tr class="click" data-go="#/admin/contenus/${m.id}"><td style="width:46px">${A.matIconSm(m)}</td><td><b>${esc(m.titre)}</b><div class="sub">${esc(m.resume||'')}</div></td><td class="r nowrap">${vis} chapitre${vis>1?'s':''}${m.chapitres.length>vis?` <span class="sub">(+${m.chapitres.length-vis} masqué)</span>`:''}</td><td class="nowrap">${m.cache?'<span class="pill p-mute">Masquée</span>':'<span class="pill p-ok dot">En ligne</span>'}${m.custom?' <span class="pill p-or">Ajoutée</span>':''}</td><td class="r">${ic('chev')}</td></tr>`}).join('')}</tbody></table></div></div></section>`; }).join('')}`;
}});
A.page('admin/contenus/:mat', {space:'admin', title:p => (A.mat(p.mat)||{}).titre || 'Matière', crumb:'<a href="#/admin/contenus">Matières & cours</a>',
 actions:p => `<div class="row"><button class="btn b-line b-sm" data-matedit="${p.mat}">${ic('edit')}<span class="hs">Modifier la matière</span></button><a class="btn b-pri b-sm" href="#/admin/chapitre/nouveau?mat=${p.mat}">${ic('plus')}Chapitre</a></div>`,
 render(p){
  const m = A.catalog(true).find(x => x.id === p.mat); if(!m) return A.empty('book','Matière introuvable.');
  return `${A.matHead(m)}
  <div class="aipanel"><div class="hd">${ic('spark')}Rédiger un nouveau chapitre avec l'IA</div><p class="sub">Indiquez le titre du chapitre : l'IA rédige le cours complet (notions, formules, exemples chiffrés, encadrés) et un quiz de 5 questions. Vous relisez et publiez.</p>
   <form class="row nw" id="fAiChap"><input class="inp" id="aiChapT" placeholder="Ex. : Calcul des semelles excentrées" required><button class="btn b-blue">${ic('spark')}Rédiger</button></form></div>
  ${A.matLevels(m, {}).map(L => `<div class="row between" style="margin-top:6px"><b style="color:${L.c}">${'●'.repeat(L.id)} Niveau ${L.n} <span class="sub">(${L.total} chapitres)</span></b><a class="btn b-line b-xs" href="#/admin/chapitre/nouveau?mat=${m.id}&n=${L.id}">${ic('plus')}Chapitre ${L.n.toLowerCase()}</a></div>`).join('')}
  <div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>#</th><th>Chapitre</th><th>Niveau</th><th class="r">Durée</th><th class="r">Quiz</th><th class="r">Exercices</th><th>État</th><th></th></tr></thead><tbody>
  ${m.chapitres.map((c,i)=>`<tr><td class="mono">${i+1}</td><td><b>${esc(c.titre)}</b></td><td>${A.nivPill(c)}</td><td class="r sub">${c.duree||20} min</td><td class="r mono">${A.nq(c)}</td><td class="r mono">${A.nex(c)}</td><td class="nowrap">${c.cache?'<span class="pill p-mute">Masqué</span>':'<span class="pill p-ok dot">En ligne</span>'}${c.custom?' <span class="pill p-or">Ajouté</span>':c.edited?' <span class="pill p-info">Modifié</span>':''}</td>
   <td class="r nowrap"><button class="ibtn" style="width:30px;height:30px" data-chmove="${c.id}" data-d="-1" title="Monter">${ic('chevd').replace('<svg','<svg style="transform:rotate(180deg)"')}</button><button class="ibtn" style="width:30px;height:30px" data-chmove="${c.id}" data-d="1" title="Descendre">${ic('chevd')}</button><button class="ibtn" style="width:30px;height:30px" data-chhide="${c.id}" title="${c.cache?'Afficher':'Masquer'}">${ic(c.cache?'eye':'eyeoff')}</button><a class="btn b-line b-xs" href="#/admin/chapitre/${c.id}">${ic('edit')}Modifier</a></td></tr>`).join('') || `<tr><td colspan="8">${A.empty('book','Aucun chapitre. Ajoutez-en un ou demandez à l\'IA de le rédiger.')}</td></tr>`}
  </tbody></table></div></div>`;
 }
});
async function saveChapPatch(c, patch){
  const id = 'chap:' + c.id, cur = (S.contents||{})[id] || {};
  const base = c.custom ? {mat:c.mat, titre:c.titre, contenu:c.contenu, quiz:c.quiz||[], exercices:c.exercices||[], duree:c.duree, ordre:c.ordre} : {};
  return A.db.saveContent(id, Object.assign({}, base, cur, patch, c.custom ? {mat:c.mat} : {}));
}
A.on('click', '[data-chhide]', async el => { const f = A.chap(el.dataset.chhide); await saveChapPatch(f.c, {cache: !f.c.cache}); toast(f.c.cache ? 'Chapitre affiché' : 'Chapitre masqué', 'eye'); A.refresh(); });
A.on('click', '[data-chmove]', async el => {
  const f = A.chap(el.dataset.chmove), list = A.catalog(true).find(m => m.id === f.m.id).chapitres, i = list.findIndex(c => c.id === f.c.id), j = i + (+el.dataset.d);
  if(j < 0 || j >= list.length) return;
  const a = list[i], b = list[j];
  await saveChapPatch(a, {ordre: j}); await saveChapPatch(b, {ordre: i});
  for(let k = 0; k < list.length; k++){ if(k !== i && k !== j && (list[k].ordre ?? k) !== k) await saveChapPatch(list[k], {ordre:k}); }
  A.refresh();
});
A.on('submit', '#fAiChap', () => { const t = A.val('aiChapT').trim(); if(!t) return; const mat = A.hash().split('/')[2]; A.ls.set('aiDraft', {mat, titre:t, auto:true}); A.go('#/admin/chapitre/nouveau?mat=' + mat); });

/* Fenêtre : créer / modifier une matière */
A.on('click', '[data-matedit]', el => {
  const id = el.dataset.matedit, m = id ? A.catalog(true).find(x => x.id === id) : {titre:'', court:'', resume:'', groupe:'fond', icone:'book', couleur:'#2F6FDB', niveau:'Débutant', heures:10, objectifs:[]};
  A.win({title: id ? 'Modifier la matière' : 'Nouvelle matière', body:`
   <label class="fld"><span>Titre</span><input class="inp" id="mtT" value="${esc(m.titre)}"></label>
   <div class="g2"><label class="fld"><span>Titre court</span><input class="inp" id="mtC" value="${esc(m.court||'')}"></label><label class="fld"><span>Groupe</span><select class="inp" id="mtG">${A.GROUPES.map(g=>`<option value="${g.id}" ${g.id===m.groupe?'selected':''}>${esc(g.n)}</option>`).join('')}</select></label></div>
   <label class="fld"><span>Résumé</span><textarea class="inp" id="mtR" rows="3">${esc(m.resume||'')}</textarea></label>
   <div class="g3"><label class="fld"><span>Public visé</span><input class="inp" id="mtN" value="${esc(m.niveau||'')}"></label><label class="fld"><span>Heures</span><input class="inp" id="mtH" type="number" value="${esc(m.heures||'')}"></label><label class="fld"><span>Couleur</span><input class="inp" id="mtK" type="color" value="${esc(m.couleur||'#2F6FDB')}" style="height:42px;padding:4px"></label></div>
   <label class="fld"><span>Icône</span><div class="row" id="mtI">${ICONS.map(n=>`<button type="button" class="ibtn ${n===m.icone?'on':''}" data-mticon="${n}">${ic(n)}</button>`).join('')}</div></label>
   <label class="fld"><span>Objectifs (un par ligne)</span><textarea class="inp" id="mtO" rows="4">${esc((m.objectifs||[]).join('\n'))}</textarea></label>
   ${id?`<label class="check"><input type="checkbox" id="mtX" ${m.cache?'checked':''}>Masquer cette matière aux apprenants</label>`:''}
   ${id && !m.custom && S.contents['mat:'+id]?`<button class="btn b-line b-sm" style="justify-self:start" data-matreset="${id}">${ic('refresh')}Restaurer la version d'origine</button>`:''}`,
   foot:`${id && m.custom?`<button class="btn b-bad" data-matdel="${id}">${ic('trash')}Supprimer</button>`:''}<button class="btn b-pri" data-matsave="${id}">${ic('save')}Enregistrer</button>`});
});
A.on('click', '[data-mticon]', el => { $$('[data-mticon]').forEach(b => b.classList.toggle('on', b === el)); });
A.on('click', '[data-matsave]', async el => {
  const id0 = el.dataset.matsave, titre = A.val('mtT').trim(); if(!titre){ toast('Titre obligatoire','x'); return; }
  const icone = ($('[data-mticon].on')||{}).dataset ? $('[data-mticon].on').dataset.mticon : 'book';
  const d = {titre, court:A.val('mtC').trim(), groupe:A.val('mtG'), resume:A.val('mtR').trim(), niveau:A.val('mtN').trim(), heures:+A.val('mtH')||undefined, couleur:A.val('mtK'), icone, objectifs:A.val('mtO').split('\n').map(x=>x.trim()).filter(Boolean)};
  const id = id0 || titre.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,24) + '-' + Math.random().toString(36).slice(2,5);
  if(id0){ const ex = A.catalog(true).find(m => m.id === id0); if($('#mtX')) d.cache = $('#mtX').checked; if(ex.custom) d.custom = true; }
  else d.custom = true;
  await A.db.saveContent('mat:' + id, Object.assign({}, (S.contents||{})['mat:'+id] || {}, d));
  A.closeWin(); toast('Matière enregistrée'); A.go('#/admin/contenus/' + id);
});
A.on('click', '[data-matreset]', async el => { await A.db.delContent('mat:' + el.dataset.matreset); A.closeWin(); toast('Version d\'origine restaurée'); A.refresh(); });
A.on('click', '[data-matdel]', async el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.textContent = 'Confirmer la suppression'; return; } const id = el.dataset.matdel; for(const k of Object.keys(S.contents)){ if(k === 'mat:'+id || (k.startsWith('chap:') && S.contents[k].mat === id)) await A.db.delContent(k); } A.closeWin(); toast('Matière supprimée', 'trash'); A.go('#/admin/contenus'); });

/* ---------- Éditeur de chapitre ---------- */
let CE = null, ceCtrl = null;
A.page('admin/chapitre/:id', {space:'admin', title:() => CE && CE.titre ? CE.titre : 'Chapitre', crumb:() => CE ? `<a href="#/admin/contenus">Contenus</a> › <a href="#/admin/contenus/${CE.mat}">${esc((A.mat(CE.mat)||{}).titre||'')}</a>` : '', static:true,
 actions:() => `<div class="row"><button class="btn b-line b-sm" data-act="cepreview">${ic('eye')}<span class="hs">Aperçu</span></button><button class="btn b-pri b-sm" data-act="cesave">${ic('save')}Publier</button></div>`,
 render(p){
  const draft = A.ls.get('aiDraft', null);
  if(p.id === 'nouveau'){
    const mat = A.query().get('mat') || (draft && draft.mat);
    if(!CE || CE.id || CE.mat !== mat) CE = {id:null, mat, titre:'', duree:25, contenu:'', quiz:[], exos:[], preview:false, niv:+A.query().get('n') || 1};
    if(draft && draft.mat === mat){ CE.titre = draft.titre; CE.autoAi = draft.auto; A.ls.del('aiDraft'); }
  } else if(!CE || CE.id !== p.id){
    const f0 = A.chap(p.id); if(!f0) return A.empty('book','Chapitre introuvable.');
    if(!A.chapReady(f0)) return A.chapLoading();
    const f = A.chap(p.id);
    CE = {id:p.id, mat:f.m.id, titre:f.c.titre, duree:f.c.duree||25, contenu:f.c.contenu||'', quiz:JSON.parse(JSON.stringify(f.c.quiz||[])), exos:JSON.parse(JSON.stringify(f.c.exercices||[])), custom:!!f.c.custom, edited:!!f.c.edited, cache:!!f.c.cache, preview:false, niv:A.nivOf(f.c)};
  }
  return ceHtml();
 },
 mount(){ if(CE && CE.autoAi){ CE.autoAi = false; aiWrite(); } },
 unmount(){ if(ceCtrl){ ceCtrl.abort(); ceCtrl = null; } }
});
function ceHtml(){
  const m = A.mat(CE.mat) || {titre:''};
  return `<div class="cols"><div class="stack" style="min-width:0">
   <div class="card stack"><div class="g3" style="grid-template-columns:2fr 1fr 1fr"><label class="fld"><span>Titre du chapitre</span><input class="inp" id="ceT" value="${esc(CE.titre)}"></label><label class="fld"><span>Niveau</span><select class="inp" id="ceNv">${A.NIVEAUX.map(N => `<option value="${N.id}" ${(CE.niv||1)===N.id?'selected':''}>${N.n}</option>`).join('')}</select></label><label class="fld"><span>Durée (min)</span><input class="inp" type="number" id="ceD" value="${esc(CE.duree)}"></label><label class="fld"><span>Matière</span><input class="inp" value="${esc(m.titre)}" disabled></label></div>
    ${CE.preview ? `<div class="lesson" style="padding:18px">${A.mdHtml(CE.contenu)}</div>${A.exosHtml({exercices:CE.exos.filter(x => x.t && x.e && x.c)})}` : `<label class="fld"><span>Contenu du cours (voir l'aide de mise en forme à droite)</span><textarea class="inp mono" id="ceC" rows="26" style="font-size:13px;min-height:420px">${esc(CE.contenu)}</textarea></label>`}</div>
   <div class="card stack"><h3>Quiz <small>${CE.quiz.length} question(s)</small><button class="btn b-line b-xs" data-act="ceqadd">${ic('plus')}Question</button></h3>
    ${CE.quiz.map((q,i)=>`<div class="qq" data-qi2="${i}"><div class="row nw"><b class="mono">${i+1}.</b><input class="inp" data-qe="q" value="${esc(q.q)}" placeholder="Question"><button class="ibtn" data-qdel="${i}" title="Supprimer">${ic('trash')}</button></div>
     ${q.o.map((o,j)=>`<label class="row nw"><input type="radio" name="qr${i}" data-qr="${j}" ${q.r===j?'checked':''} style="accent-color:var(--ok);width:18px;height:18px" title="Bonne réponse"><input class="inp sm" data-qo="${j}" value="${esc(o)}" placeholder="Réponse ${'ABCD'[j]}"></label>`).join('')}
     <input class="inp sm" data-qe="e" value="${esc(q.e||'')}" placeholder="Explication affichée après correction"></div>`).join('') || '<p class="sub">Aucune question. Ajoutez-en ou faites rédiger le chapitre par l\'IA.</p>'}</div>
   <div class="card stack"><h3>Exercices corrigés <small>${CE.exos.length} exercice(s)</small><button class="btn b-line b-xs" data-act="ceexadd">${ic('plus')}Exercice</button></h3>
    <p class="sub">Affichés à la fin du chapitre : l'apprenant lit l'énoncé, cherche, puis ouvre le corrigé détaillé. Même mise en forme que le cours (formules, tableaux, encadrés).</p>
    ${CE.exos.map((x,i)=>`<div class="qq" data-xi="${i}"><div class="row nw"><b class="mono">${i+1}.</b><input class="inp" data-xe="t" value="${esc(x.t||'')}" placeholder="Titre de l'exercice"><select class="inp sm" data-xe="d" style="width:auto">${[[1,'Application directe'],[2,'Entraînement'],[3,'Approfondissement']].map(([v,n])=>`<option value="${v}" ${(x.d||2)===v?'selected':''}>${n}</option>`).join('')}</select><button class="ibtn" data-xdel="${i}" title="Supprimer">${ic('trash')}</button></div>
     <label class="fld"><span>Énoncé (données et questions)</span><textarea class="inp mono" data-xe="e" rows="5" style="font-size:13px">${esc(x.e||'')}</textarea></label>
     <label class="fld"><span>Corrigé détaillé</span><textarea class="inp mono" data-xe="c" rows="8" style="font-size:13px">${esc(x.c||'')}</textarea></label></div>`).join('') || '<p class="sub">Aucun exercice pour ce chapitre.</p>'}</div>
  </div><div class="stack">
   <div class="aipanel"><div class="hd">${ic('spark')}Rédiger avec l'IA</div><p class="sub">L'IA écrit le chapitre complet à partir du titre, dans le format de la plateforme : cours détaillé avec applications chiffrées, exercices corrigés et quiz. Le texte actuel sera remplacé.</p>
    <textarea class="inp" id="ceN" rows="3" placeholder="Consignes facultatives : niveau, points à couvrir, exemples locaux…"></textarea>
    <div class="row"><button class="btn b-blue" data-act="ceai">${ic('spark')}${CE.contenu?'Réécrire':'Rédiger'} le chapitre</button>${ceCtrl?`<button class="btn b-line b-sm" data-act="ceaistop">${ic('x')}Arrêter</button>`:''}</div><div id="ceAiSt" class="sub"></div></div>
   <div class="card"><h3>État</h3><div class="stack s8">${CE.id?`<label class="check"><input type="checkbox" id="ceH" ${CE.cache?'checked':''}>Masquer ce chapitre</label>`:''}
    ${CE.id && !CE.custom && CE.edited?`<button class="btn b-line b-sm" data-act="cereset">${ic('refresh')}Restaurer la version d'origine</button>`:''}
    ${CE.id && CE.custom?`<button class="btn b-bad b-sm" data-act="cedel">${ic('trash')}Supprimer ce chapitre</button>`:''}
    ${CE.id?`<a class="btn b-line b-sm" href="#/app/cours/${CE.id}">${ic('eye')}Voir comme un apprenant</a>`:''}</div></div>
   <div class="card"><h3>Aide de mise en forme</h3><div class="sub mono" style="white-space:pre-wrap;font-size:12px;line-height:1.7">## Titre de section
### Sous-titre
**gras**  *italique*  ==formule==
- liste à puces
1. liste numérotée
$$ σ = N / A        (formule en bloc)
> [!retenir] Titre
> texte de l'encadré
(retenir, attention, exemple,
 astuce, norme)
| Col 1 | Col 2 |
|---|---|
| a | b |
!fig:semelle|Légende
(figures : ${Object.keys(A.FIG||{}).slice(0,12).join(', ')}…)</div></div>
  </div></div>`;
}
const ceSync = () => { if($('#ceNv')) CE.niv = +A.val('ceNv') || 1; if($('#ceT')) CE.titre = A.val('ceT'); if($('#ceD')) CE.duree = +A.val('ceD') || 25; if($('#ceC')) CE.contenu = A.val('ceC'); if($('#ceH')) CE.cache = $('#ceH').checked; };
const reCe = () => { ceSync(); const pg = $('#pg'); if(pg) pg.innerHTML = ceHtml(); };
A.on('input', '[data-qe]', el => { const i = +el.closest('[data-qi2]').dataset.qi2; CE.quiz[i][el.dataset.qe] = el.value; });
A.on('input', '[data-qo]', el => { const i = +el.closest('[data-qi2]').dataset.qi2; CE.quiz[i].o[+el.dataset.qo] = el.value; });
A.on('change', '[data-qr]', el => { const i = +el.closest('[data-qi2]').dataset.qi2; CE.quiz[i].r = +el.dataset.qr; });
A.on('click', '[data-qdel]', el => { CE.quiz.splice(+el.dataset.qdel, 1); reCe(); });
A.on('click', '[data-act="ceqadd"]', () => { CE.quiz.push({q:'', o:['','','',''], r:0, e:''}); reCe(); });
A.on('input', '[data-xe]', el => { const x = CE.exos[+el.closest('[data-xi]').dataset.xi]; x[el.dataset.xe] = el.dataset.xe === 'd' ? +el.value : el.value; });
A.on('change', 'select[data-xe]', el => { CE.exos[+el.closest('[data-xi]').dataset.xi].d = +el.value; });
A.on('click', '[data-xdel]', el => { CE.exos.splice(+el.dataset.xdel, 1); reCe(); });
A.on('click', '[data-act="ceexadd"]', () => { CE.exos.push({t:'', d:2, e:'', c:''}); reCe(); });
A.on('click', '[data-act="cepreview"]', () => { ceSync(); CE.preview = !CE.preview; reCe(); });
A.on('click', '[data-act="ceai"]', () => aiWrite());
A.on('click', '[data-act="ceaistop"]', () => { if(ceCtrl) ceCtrl.abort(); });
async function aiWrite(){
  ceSync(); if(!CE.titre.trim()){ toast('Indiquez d\'abord le titre du chapitre', 'x'); return; }
  const m = A.mat(CE.mat) || {titre:''};
  CE.preview = false; ceCtrl = new AbortController(); reCe();
  const st = () => $('#ceAiSt'); if(st()) st().innerHTML = `<span class="row">${ic('spark')}Rédaction en cours <span class="typing"><i></i><i></i><i></i></span></span>`;
  const autres = m.chapitres ? m.chapitres.map(c => c.titre).join(' ; ') : '';
  const r = await A.IA.chapter({mat:CE.mat, matTitre:m.titre, titre:CE.titre, notes:A.val('ceN'), autres, niveau:A.NIVEAUX[(CE.niv||1)-1].n + ' (' + A.NIVEAUX[(CE.niv||1)-1].d.toLowerCase() + ')'}, t => { const ta = $('#ceC'); const sp = A.IA.splitChapter(t); if(ta){ ta.value = sp.contenu; ta.scrollTop = ta.scrollHeight; } if(st()) st().textContent = F(t.length) + ' caractères reçus…'; }, ceCtrl.signal);
  ceCtrl = null;
  if(r.text){ const sp = A.IA.splitChapter(r.text); CE.contenu = sp.contenu; if(sp.quiz.length) CE.quiz = sp.quiz; if(sp.exos.length) CE.exos = sp.exos; }
  reCe();
  if(st()) st().textContent = r.ok ? (r.aborted ? 'Arrêté.' : 'Terminé. Relisez puis cliquez sur « Publier ».') : r.error;
  if(!r.ok) toast(r.error, 'x');
}
A.on('click', '[data-act="cesave"]', async () => {
  ceSync(); if(!CE.titre.trim()){ toast('Titre obligatoire', 'x'); return; }
  if(!CE.contenu.trim()){ toast('Le contenu est vide', 'x'); return; }
  const quiz = CE.quiz.filter(q => q.q.trim() && q.o.filter(o => o.trim()).length >= 2).map(q => ({q:q.q.trim(), o:q.o.map(o=>o.trim()).filter(Boolean), r:Math.min(q.r||0, q.o.filter(o=>o.trim()).length-1), e:(q.e||'').trim()}));
  const exercices = CE.exos.map(x => ({t:String(x.t||'').trim(), d:+x.d || 2, e:String(x.e||'').trim(), c:String(x.c||'').trim()})).filter(x => x.t && x.e && x.c);
  let id = CE.id;
  if(!id){
    const m = A.catalog(true).find(x => x.id === CE.mat);
    id = CE.mat + '-x' + Date.now().toString(36);
    await A.db.saveContent('chap:' + id, {mat:CE.mat, titre:CE.titre.trim(), duree:CE.duree, contenu:CE.contenu, quiz, exercices, niv:CE.niv || 1, ordre:(m ? m.chapitres.length : 99), cache:false});
  } else {
    const f = A.chap(id);
    await saveChapPatch(f.c, {titre:CE.titre.trim(), duree:CE.duree, contenu:CE.contenu, quiz, exercices, cache:CE.cache, niv:CE.niv || 1});
  }
  toast('Chapitre publié'); CE = null; A.go('#/admin/contenus/' + (A.chap(id) ? A.chap(id).m.id : ''));
});
A.on('click', '[data-act="cereset"]', async () => { await A.db.delContent('chap:' + CE.id); toast('Version d\'origine restaurée'); const id = CE.id; CE = null; A.go('#/admin/contenus/' + A.chap(id).m.id); });
A.on('click', '[data-act="cedel"]', async el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.textContent = 'Confirmer la suppression'; return; } const mat = CE.mat; await A.db.delContent('chap:' + CE.id); CE = null; toast('Chapitre supprimé', 'trash'); A.go('#/admin/contenus/' + mat); });

/* ---------- Annonces ---------- */
A.page('admin/annonces', {space:'admin', title:'Annonces', crumb:'Messages affichés sur le tableau de bord des apprenants', actions:() => `<button class="btn b-pri b-sm" data-annedit="">${ic('plus')}Nouvelle annonce</button>`, render(){
  const L = Object.entries(S.annonces||{}).map(([id,a])=>({id,...a})).sort((a,b)=>(b.at||0)-(a.at||0));
  return L.length ? `<div class="stack">${L.map(a=>`<div class="card row between"><div class="ann grow" style="background:transparent"><b>${esc(a.titre)}</b><span class="sub">${esc(a.texte)}</span><span class="small faint">${fd(a.at)}</span></div><div class="row"><button class="btn b-line b-sm" data-annedit="${a.id}">${ic('edit')}Modifier</button><button class="btn b-bad b-sm" data-anndel="${a.id}">${ic('trash')}</button></div></div>`).join('')}</div>` : A.empty('bell','Aucune annonce. Publiez une nouvelle : nouveaux cours, examens, événements…', `<button class="btn b-pri" data-annedit="">${ic('plus')}Nouvelle annonce</button>`);
}});
A.on('click', '[data-annedit]', el => { const id = el.dataset.annedit, a = id ? S.annonces[id] : {titre:'', texte:''};
  A.win({title: id ? 'Modifier l\'annonce' : 'Nouvelle annonce', body:`<label class="fld"><span>Titre</span><input class="inp" id="anT" value="${esc(a.titre)}"></label><label class="fld"><span>Message</span><textarea class="inp" id="anX" rows="5">${esc(a.texte)}</textarea></label>`, foot:`<button class="btn b-pri" data-annsave="${id}">${ic('send')}Publier</button>`}); });
A.on('click', '[data-annsave]', async el => { const titre = A.val('anT').trim(), texte = A.val('anX').trim(); if(!titre){ toast('Titre obligatoire','x'); return; } const id = el.dataset.annsave; await A.db.saveAnnonce(id || null, {titre, texte, at: id && S.annonces[id] ? S.annonces[id].at : now()}); A.closeWin(); toast('Annonce publiée', 'bell'); A.refresh(); });
A.on('click', '[data-anndel]', async el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.innerHTML = 'Confirmer'; return; } await A.db.delAnnonce(el.dataset.anndel); toast('Annonce supprimée', 'trash'); A.refresh(); });

/* ---------- Intelligence artificielle ---------- */
const iaKind = k => ({chat:'Conversation', expliquer:'Aide sur un cours', quiz:'Quiz généré', cours:'Rédaction de chapitre', photo:'Exercice en photo', corrige:'Corrigé d\'annale', transcrire:'Transcription d\'annale'}[k] || k || '—');
A.page('admin/ia', {space:'admin', title:'Intelligence artificielle', crumb:'Réglages et utilisation de l\'assistant', render(){
  const c = A.cfg(), D = AD(), t = now();
  const d1 = D.ia.filter(x => dayKey(ts(x.at)) === dayKey(t)).length, d7 = D.ia.filter(x => t - ts(x.at) < 7*DAY).length, d30 = D.ia.filter(x => t - ts(x.at) < 30*DAY).length;
  const by = {}; D.ia.forEach(x => { const k = (x.data && x.data.kind) || '—'; by[k] = (by[k]||0) + 1; });
  const users = {}; D.ia.forEach(x => users[x.owner] = (users[x.owner]||0) + 1);
  return `<div class="kpis"><div class="kpi hl"><small>${ic('spark')}Aujourd'hui</small><b>${d1}</b><em>requêtes</em></div><div class="kpi"><small>${ic('cal')}7 jours</small><b>${d7}</b></div><div class="kpi"><small>${ic('cal')}30 jours</small><b>${d30}</b></div><div class="kpi"><small>${ic('users')}Utilisateurs de l'IA</small><b>${Object.keys(users).length}</b></div></div>
  <div class="cols"><div class="stack">
   <div class="card"><h3>Réglages</h3><div class="stack">
    <label class="check"><input type="checkbox" id="iaOn" ${c.iaActive!==false?'checked':''}>Assistant IA activé pour les apprenants</label>
    <label class="fld"><span>Modèle utilisé</span><select class="inp" id="iaM">${A.MODELES.map(m=>`<option value="${m.id}" ${m.id===c.iaModel?'selected':''}>${esc(m.n)}</option>`).join('')}</select></label>
    <label class="fld"><span>Nombre maximal de questions par apprenant et par jour</span><input class="inp" type="number" id="iaQ" min="0" value="${esc(c.iaQuota)}"></label>
    <p class="sub">Le PDG et les administrateurs n'ont pas de limite. Le coût dépend du modèle choisi et du nombre de questions : surveillez votre consommation sur console.anthropic.com.</p>
    <button class="btn b-pri" style="justify-self:start" data-act="iasave">${ic('save')}Enregistrer</button></div></div>
   <div class="card"><h3>Tester l'assistant</h3><form id="fIaTest" class="row nw"><input class="inp" id="iaT" value="Quel est le dosage d'un béton pour poteaux ?"><button class="btn b-blue">${ic('send')}</button></form><div id="iaTO" class="aiout md" style="margin-top:12px"></div></div>
   <div class="card"><h3>Mise en service</h3>${A.mdHtml(`L'assistant fonctionne grâce à l'**API Claude** d'Anthropic, appelée par la fonction \`netlify/edge-functions/ia.js\` (la clé n'est jamais visible dans le navigateur).
1. Créez une clé API sur **console.anthropic.com** (rubrique API Keys) et ajoutez du crédit.
2. Sur Netlify : **Site configuration → Environment variables → Add a variable** : nom \`ANTHROPIC_API_KEY\`, valeur = votre clé.
3. Redéployez le site (Deploys → Trigger deploy).
Détails dans GUIDE-INSTALLATION.md, étape 6.`)}</div>
  </div><div class="stack">
   <div class="card"><h3>Par type d'utilisation</h3><div class="bars">${Object.entries(by).map(([k,n])=>`<div class="brow"><span>${esc(iaKind(k))}</span><span class="mono small">${n}</span>${A.bar(n/Math.max(1,D.ia.length)*100,'blue')}</div>`).join('') || '<p class="sub">Aucune utilisation pour le moment.</p>'}</div></div>
   <div class="card"><h3>Plus gros utilisateurs</h3>${Object.entries(users).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([id,n])=>`<div class="row between nw" style="margin-bottom:8px">${who(prof(id))}<span class="pill p-info">${n}</span></div>`).join('') || '<p class="sub">—</p>'}</div>
   <div class="card"><h3>Journal récent</h3><div class="stack s8">${D.ia.slice(0,15).map(x=>`<div class="row between nw small"><span><b>${esc(nm(prof(x.owner)))}</b> · ${esc(iaKind(x.data&&x.data.kind))}</span><span class="faint nowrap">${ago(x.at)}</span></div>`).join('') || '<p class="sub">—</p>'}</div></div>
  </div></div>`;
}});
A.on('click', '[data-act="iasave"]', async () => { if(await A.db.saveSettings({iaActive:$('#iaOn').checked, iaModel:A.val('iaM'), iaQuota:Math.max(0, +A.val('iaQ')||0)})){ toast('Réglages IA enregistrés', 'spark'); A.refresh(); } });
A.on('submit', '#fIaTest', async () => { const out = $('#iaTO'); out.innerHTML = `<span class="typing"><i></i><i></i><i></i></span>`; const r = await A.IA.stream({kind:'chat', ref:'test', ctx:{}, messages:[{role:'user', content:A.val('iaT')}]}, t => { out.innerHTML = A.mdHtml(t, {inner:true}); }); if(!r.ok) out.innerHTML = `<div class="note">${ic('info')}<span>${esc(r.error)}</span></div>`; });

/* ---------- Travaux des apprenants ---------- */
let twK = '';
A.page('admin/travaux', {space:'admin', title:'Travaux des apprenants', crumb:'Plans, métrés et exercices résolus en photo', render(){
  let L = AD().works; if(twK) L = L.filter(w => w.kind === twK);
  return `<div class="tabs">${[['','Tous'],['dessin','Plans'],['metre','Métrés'],['photo','Exercices en photo']].map(x=>`<button class="tab ${twK===x[0]?'on':''}" data-twk="${x[0]}">${x[1]}</button>`).join('')}</div>
  <div class="card pad0"><div class="tw"><table class="t"><thead><tr><th>Nom</th><th>Type</th><th>Apprenant</th><th>Modifié</th><th></th></tr></thead><tbody>${L.map(w=>`<tr><td><b>${esc(w.name||'Sans nom')}</b>${w.kind==='photo'&&w.data&&w.data.mat?`<div class="sub">${esc((A.mat(w.data.mat)||{}).titre||'')}</div>`:''}${w.kind==='dessin'&&w.data?`<div class="sub">${(w.data.ents||[]).length} objets</div>`:''}</td><td>${A.workPill(w.kind)}</td><td>${who(prof(w.owner))}</td><td class="sub nowrap">${ago(w.updated_at)}</td><td class="r"><button class="btn b-line b-xs" data-wopen="${w.id}">${w.kind==='photo'?'Voir':'Ouvrir une copie'}</button></td></tr>`).join('') || `<tr><td colspan="5">${A.empty('folder','Aucun travail enregistré.')}</td></tr>`}</tbody></table></div></div>`;
}});
A.on('click', '[data-twk]', el => { twK = el.dataset.twk; A.refresh(); });

/* ---------- Paramètres ---------- */
let setTab = 'general', admList = null;
A.page('admin/parametres', {space:'admin', title:'Paramètres', crumb:'Réglages de la plateforme', render(){
  const c = A.cfg();
  const tabs = [['general','Identité & site', 'globe'],['acces','Inscriptions & accès','lock'],['prix','Bordereau des prix','coins'],['admins','Administrateurs','crown'],['donnees','Données','download']];
  let body = '';
  if(setTab === 'general') body = `<div class="card stack"><div class="g2"><label class="fld"><span>Nom de la plateforme (titres, attestations, assistant IA)</span><input class="inp" id="s_nom" value="${esc(c.nom)}"></label><label class="fld"><span>Slogan (sous le logo)</span><input class="inp" id="s_tagline" value="${esc(c.tagline)}"></label></div>
   <div class="g2"><label class="fld"><span>Logo : début du nom</span><input class="inp" id="s_name1" value="${esc(c.name1)}"></label><label class="fld"><span>Logo : fin du nom (en couleur)</span><input class="inp" id="s_name2" value="${esc(c.name2)}"></label></div>
   <div class="g2"><label class="fld"><span>Nom du PDG</span><input class="inp" id="s_ceo" value="${esc(c.ceo)}"></label><label class="fld"><span>Ville / pays</span><input class="inp" id="s_city" value="${esc(c.city)}"></label></div>
   <div class="g3"><label class="fld"><span>Téléphone</span><input class="inp" id="s_phone" value="${esc(c.phone)}"></label><label class="fld"><span>WhatsApp</span><input class="inp" id="s_whatsapp" value="${esc(c.whatsapp)}"></label><label class="fld"><span>E-mail de contact</span><input class="inp" id="s_email" value="${esc(c.email)}"></label></div>
   <div class="g2"><label class="fld"><span>Titre de la page d'accueil</span><input class="inp" id="s_heroTitle" value="${esc(c.heroTitle)}"></label><label class="fld"><span>Suite du titre (en couleur)</span><input class="inp" id="s_heroAccent" value="${esc(c.heroAccent)}"></label></div>
   <label class="fld"><span>Texte d'accueil</span><textarea class="inp" id="s_heroText" rows="3">${esc(c.heroText)}</textarea></label>
   <label class="fld"><span>Page « À propos »</span><textarea class="inp" id="s_about" rows="4">${esc(c.about)}</textarea></label>
   <button class="btn b-pri" style="justify-self:start" data-setsave="nom,name1,name2,tagline,ceo,city,phone,whatsapp,email,heroTitle,heroAccent,heroText,about">${ic('save')}Enregistrer</button></div>`;
  if(setTab === 'acces') body = `<div class="card stack"><label class="check"><input type="checkbox" id="s_openSignup" ${c.openSignup!==false?'checked':''}>Inscriptions ouvertes au public</label>
   <label class="fld" style="max-width:360px"><span>Nombre de chapitres consultables sans compte (par matière)</span><input class="inp" type="number" id="s_preview" min="0" value="${esc(c.preview)}"></label>
   <button class="btn b-pri" style="justify-self:start" data-act="saveacces">${ic('save')}Enregistrer</button></div>
   <div class="card"><h3>Qui voit quoi ?</h3><div class="roles stack s8">${[['Visiteur','Site public, catalogue, premier chapitre de chaque matière'],['Apprenant','Tous les cours, quiz, Construction A→Z, atelier de dessin, métré, assistant IA, ses propres données'],['PDG / admin','Tout : apprenants, connexions, progression, contenus, annonces, IA, paramètres, travaux de tous']].map(r=>`<div class="row between" style="border:1px solid var(--line);border-radius:12px;padding:12px"><b style="min-width:110px">${r[0]}</b><span class="sub grow">${r[1]}</span></div>`).join('')}</div></div>`;
  if(setTab === 'prix'){ const P = A.METRE.PRIX, ov = c.prix || {};
    body = `<div class="card stack"><div class="g2" style="max-width:420px"><label class="fld"><span>Devise</span><input class="inp" id="s_devise" value="${esc(c.devise)}"></label><label class="fld"><span>TVA par défaut (%)</span><input class="inp" type="number" id="s_tva" value="${esc(c.tva)}"></label></div>
     <p class="sub">Prix unitaires (fourniture et pose) utilisés par l'outil Métré et les projets types. Laissez vide pour garder la valeur par défaut.</p>
     <div class="tw"><table class="t"><thead><tr><th>Ouvrage</th><th>Unité</th><th class="r">Par défaut</th><th class="r">Votre prix</th></tr></thead><tbody>${Object.entries(P).map(([k,p])=>`<tr><td>${esc(p.d)}<div class="small faint">${esc(p.lot)}</div></td><td>${p.u}</td><td class="r mono">${F(p.pu)}</td><td class="r"><input class="inp sm" style="width:120px;text-align:right" type="number" data-prix="${k}" value="${ov[k]??''}" placeholder="${p.pu}"></td></tr>`).join('')}</tbody></table></div>
     <button class="btn b-pri" style="justify-self:start" data-act="saveprix">${ic('save')}Enregistrer le bordereau</button></div>`; }
  if(setTab === 'admins'){
    if(!admList){ A.db.admins().then(r => { admList = r; A.refresh(); }); body = '<p class="sub">Chargement…</p>'; }
    else body = `<div class="cols"><div class="card"><h3>Mes accès</h3><div class="stack"><p class="sub">Connecté avec <b style="color:var(--ink)">${esc(S.me.email)}</b>.</p>
      <div class="g2"><label class="fld"><span>Nouveau mot de passe</span><input class="inp" id="pnPw" type="password" autocomplete="new-password"></label><label class="fld"><span>Confirmer</span><input class="inp" id="pnPw2" type="password" autocomplete="new-password"></label></div>
      <button class="btn b-pri" style="justify-self:start" data-act="pwsave">${ic('lock')}Changer mon mot de passe</button></div></div>
     <div class="card"><h3>Administrateurs <small>${admList.admins.length}</small></h3><div class="stack s8">${admList.admins.map(a=>`<div class="row between nw" style="border:1px solid var(--line);border-radius:12px;padding:10px">${who({data:{name:a.name}, email:a.email})}${a.uid===S.me.id?'<span class="pill p-amber">Vous</span>':`<button class="ibtn" data-admdel="${a.uid}" title="Retirer">${ic('trash')}</button>`}</div>`).join('')}
      ${admList.invites.map(a=>`<div class="row between nw" style="border:1px dashed var(--line2);border-radius:12px;padding:10px">${who({data:{name:a.name}, email:a.email}, a.email + ' · invitation en attente')}<button class="ibtn" data-invdel="${esc(a.email)}">${ic('x')}</button></div>`).join('')}</div>
      <div class="stack" style="margin-top:14px"><div class="g2"><input class="inp" id="invN" placeholder="Nom"><input class="inp" id="invE" type="email" placeholder="E-mail"></div><button class="btn b-line" style="justify-self:start" data-act="invite">${ic('plus')}Inviter un administrateur</button>
      <p class="sub">La personne s'inscrit (ou se connecte) avec cet e-mail puis passe par « Espace direction » : elle devient administrateur.</p></div></div></div>`;
  }
  if(setTab === 'donnees') body = `<div class="card stack"><h3>Exporter les données</h3><p class="sub">Téléchargez la liste des apprenants, l'historique des connexions et les résultats pour vos archives ou un tableur.</p>
   <div class="row"><button class="btn b-line" data-act="apcsv">${ic('download')}Apprenants (CSV)</button><button class="btn b-line" data-act="cxcsv">${ic('download')}Connexions (CSV)</button><button class="btn b-line" data-act="qzcsv">${ic('download')}Résultats aux quiz (CSV)</button><button class="btn b-line" data-act="ctjson">${ic('download')}Contenus modifiés (JSON)</button></div></div>
   ${S.mode==='local'?`<div class="card stack"><h3>Mode démonstration</h3><p class="sub">Les données sont stockées dans ce navigateur. Vous pouvez les remettre à zéro (les comptes de test seront recréés).</p><button class="btn b-bad" style="justify-self:start" data-act="demoreset">${ic('refresh')}Réinitialiser la démonstration</button></div>`:''}`;
  return `<div class="tabs">${tabs.map(t=>`<button class="tab ${setTab===t[0]?'on':''}" data-settab="${t[0]}">${ic(t[2])}${t[1]}</button>`).join('')}</div>${body}`;
}});
A.on('click', '[data-settab]', el => { setTab = el.dataset.settab; if(setTab === 'admins') admList = null; A.refresh(); });
A.on('click', '[data-setsave]', async el => { const patch = {}; el.dataset.setsave.split(',').forEach(k => patch[k] = A.val('s_' + k).trim()); if(await A.db.saveSettings(patch)){ toast('Paramètres enregistrés'); A.refresh(); } });
A.on('click', '[data-act="saveacces"]', async () => { if(await A.db.saveSettings({openSignup:$('#s_openSignup').checked, preview:Math.max(0, +A.val('s_preview')||0)})){ toast('Accès enregistrés', 'lock'); A.refresh(); } });
A.on('click', '[data-act="saveprix"]', async () => { const prix = {}; $$('[data-prix]').forEach(i => { if(i.value !== '') prix[i.dataset.prix] = +i.value; }); if(await A.db.saveSettings({prix, devise:A.val('s_devise').trim() || 'FCFA', tva:+A.val('s_tva') || 0})){ toast('Bordereau enregistré', 'coins'); A.refresh(); } });
A.on('click', '[data-act="invite"]', async () => { const e = A.val('invE').trim(), n = A.val('invN').trim(); if(!A.emailOk(e) || !n){ toast('Nom et e-mail valides obligatoires', 'x'); return; } if(await A.db.invite(e, n)){ toast(n + ' invité(e)'); admList = null; A.refresh(); } });
A.on('click', '[data-admdel]', async el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.style.background = 'var(--badbg)'; toast('Cliquez encore pour retirer', 'trash'); return; } if(await A.db.removeAdmin(el.dataset.admdel)){ toast('Administrateur retiré', 'trash'); admList = null; A.refresh(); } });
A.on('click', '[data-invdel]', async el => { await A.db.delInvite(el.dataset.invdel); admList = null; A.refresh(); });
A.on('click', '[data-act="qzcsv"]', () => csv('quiz.csv', [['Date','Nom','E-mail','Matière','Chapitre','Score','Total']].concat(AD().quiz.map(q => { const p = prof(q.owner), f = A.chap(q.chap); return [fdt(q.at), nm(p), p.email, f ? f.m.titre : q.mat, f ? f.c.titre : q.chap, q.score, q.total]; }))));
A.on('click', '[data-act="ctjson"]', () => A.download('contenus.json', JSON.stringify(S.contents, null, 2), 'application/json'));
A.on('click', '[data-act="demoreset"]', el => { if(el.dataset.c !== '1'){ el.dataset.c = '1'; el.textContent = 'Confirmer la réinitialisation'; return; } A.ls.del('db'); A.ls.del('sess'); location.hash = '#/'; location.reload(); });
})();
