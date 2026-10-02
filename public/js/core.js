/* =====================================================================
   Morata · noyau : outils, données (Supabase ou démo locale), routeur,
   gabarits des espaces (site public, apprenant, PDG)
   ===================================================================== */
(function(){
'use strict';
const A = window.A = {};

/* ---------- outils ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ic = n => `<svg class="i"><use href="#i-${n}"/></svg>`;
const F = (n, d=0) => (Math.round((+n||0)*Math.pow(10,d))/Math.pow(10,d)).toLocaleString('fr-FR',{minimumFractionDigits:d,maximumFractionDigits:d}).replace(/[  ]/g,' ');
const uid = (p='') => p + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const now = () => Date.now();
const ts = v => typeof v === 'number' ? v : (v ? Date.parse(v) : 0);
const fd = (v, o={day:'numeric',month:'short',year:'numeric'}) => v ? new Date(ts(v)).toLocaleDateString('fr-FR', o) : '—';
const fdt = v => v ? new Date(ts(v)).toLocaleString('fr-FR',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'}) : '—';
function ago(v){
  if(!v) return 'jamais';
  const s = Math.max(0, (now() - ts(v)) / 1000);
  if(s < 60) return "à l'instant";
  if(s < 3600) return 'il y a ' + Math.floor(s/60) + ' min';
  if(s < 86400) return 'il y a ' + Math.floor(s/3600) + ' h';
  if(s < 86400*7) return 'il y a ' + Math.floor(s/86400) + ' j';
  return fd(v);
}
const initials = n => String(n||'?').trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
const AVC = ['#E8752A','#2F6FDB','#1E9B5E','#8E4FD1','#C8363B','#0E8C95','#B8700A','#5B6B7F','#D2477C'];
const avc = s => AVC[[...String(s)].reduce((a,c)=>a+c.charCodeAt(0),0) % AVC.length];
const emailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e||'').trim());
const ls = {
  get(k, d){ try{ const v = localStorage.getItem('mrt_'+k); return v == null ? d : JSON.parse(v); }catch(_){ return d; } },
  set(k, v){ try{ localStorage.setItem('mrt_'+k, JSON.stringify(v)); }catch(_){} },
  del(k){ try{ localStorage.removeItem('mrt_'+k); }catch(_){} }
};
const ss = {
  get(k){ try{ return sessionStorage.getItem('mrt_'+k); }catch(_){ return null; } },
  set(k, v){ try{ sessionStorage.setItem('mrt_'+k, v); }catch(_){} },
  del(k){ try{ sessionStorage.removeItem('mrt_'+k); }catch(_){} }
};
async function sha(t){
  try{
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  }catch(_){ let h = 0; for(const c of String(t)) h = (h*31 + c.charCodeAt(0)) >>> 0; return 'h' + h.toString(16); }
}
function toast(m, icon='check'){
  const t = $('#toast'); if(!t) return;
  t.innerHTML = ic(icon) + esc(m); t.classList.add('on');
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove('on'), 2800);
}
function copy(txt){
  const ok = () => toast('Copié', 'copy');
  try{ navigator.clipboard.writeText(txt).then(ok, fb); }catch(_){ fb(); }
  function fb(){ const a = document.createElement('textarea'); a.value = txt; document.body.appendChild(a); a.select(); try{ document.execCommand('copy'); ok(); }catch(_){} a.remove(); }
}
function device(ua){
  ua = String(ua||'');
  const os = /Android/i.test(ua) ? 'Android' : /iPhone|iPad|iOS/i.test(ua) ? 'iPhone/iPad' : /Windows/i.test(ua) ? 'Windows' : /Mac OS/i.test(ua) ? 'Mac' : /Linux/i.test(ua) ? 'Linux' : 'Autre';
  const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Chrome\//.test(ua) ? 'Chrome' : /Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'Navigateur';
  return os + ' · ' + br;
}
function download(name, content, type='text/plain'){
  const blob = content instanceof Blob ? content : new Blob([content], {type});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
const val = id => { const el = document.getElementById(id); return el ? el.value : ''; };
Object.assign(A, {$, $$, esc, ic, F, uid, now, ts, fd, fdt, ago, initials, avc, emailOk, ls, ss, sha, toast, copy, device, download, val});

/* ---------- référentiels ---------- */
A.GROUPES = [
  {id:'fond',   n:'Sciences fondamentales'},
  {id:'phys',   n:'Physique du bâtiment'},
  {id:'struct', n:'Mécanique & structures'},
  {id:'sol',    n:'Sol & terrain'},
  {id:'constr', n:'Matériaux & construction'},
  {id:'gest',   n:'Gestion, économie & métré'}
];
A.PROFILS = ['Élève / étudiant','Technicien','Ouvrier / artisan','Ingénieur','Architecte / dessinateur','Entrepreneur','Autre'];
A.MODELES = [
  {id:'claude-opus-5-5',   n:'Claude Opus 5.5 · le plus complet (par défaut)'},
  {id:'claude-sonnet-5-5', n:'Claude Sonnet 5.5 · rapide et moins coûteux'},
  {id:'claude-haiku-4-5',  n:'Claude Haiku 4.5 · très économique'}
];
A.DEF = {
  name1:'Morata', name2:'', tagline:'Académie du bâtiment', ceo:'DOUMBIA Moussa',
  heroTitle:'Apprenez le bâtiment', heroAccent:'de A à Z.',
  heroText:"Toutes les matières du génie civil, de la mathématique au béton armé, la construction d'une maison expliquée étape par étape, un atelier de dessin de plans, le métré et un professeur IA disponible jour et nuit.",
  about:"Morata est une plateforme d'apprentissage créée pour former techniciens, étudiants, ouvriers et passionnés aux métiers du bâtiment. Les cours suivent les référentiels de BTS et de licence en génie civil, avec des exemples tirés des chantiers d'Afrique de l'Ouest.",
  city:"Abidjan, Côte d'Ivoire", phone:'', whatsapp:'', email:'',
  openSignup:true, preview:1,
  iaActive:true, iaModel:'claude-opus-5-5', iaQuota:30,
  devise:'FCFA', tva:18
};
A.cfg = () => Object.assign({}, A.DEF, (A.S.settings||{}).main || {});

/* ---------- matières (remplies par data/matieres/*.js) ---------- */
A.M = [];
/* 3 niveaux par matière : chaque chapitre porte niv = 1 (débutant), 2 (intermédiaire) ou 3 (avancé) */
A.NIVEAUX = [
  {id:1, n:'Débutant', d:'Les notions de base, sans prérequis', c:'#1E9B5E', bg:'#E7F5EE'},
  {id:2, n:'Intermédiaire', d:'Méthodes de calcul et applications courantes', c:'#D9661F', bg:'#FDEEE2'},
  {id:3, n:'Avancé', d:'Dimensionnement, cas complexes et approfondissements', c:'#C8363B', bg:'#FBE9E9'}
];
A.nivOf = c => Math.min(3, Math.max(1, +(c && c.niv) || 2));
A.addMatiere = m => { m.chapitres = m.chapitres || []; m.chapitres.forEach((c,i)=>{ c.mat = m.id; c.niv = A.nivOf(c); c._i = i; }); m.chapitres.sort((a,b) => a.niv - b.niv || a._i - b._i); m.chapitres.forEach((c,i) => { c.ordre = c.ordre ?? i; }); A.M.push(m); };
let catCache = null, catKey = '';
A.catalog = function(all){
  const cont = A.S.contents || {};
  const key = JSON.stringify(Object.keys(cont).map(k => k + (cont[k].updatedAt||'') + (cont[k].cache?'h':''))) + A.M.length + (all?'a':'');
  if(catCache && catKey === key) return catCache;
  const mats = A.M.map(m => ({...m, chapitres: m.chapitres.map(c => ({...c}))}));
  Object.entries(cont).forEach(([id, d]) => {
    if(id.startsWith('mat:') && d.custom && !mats.find(m => m.id === id.slice(4))) mats.push({id:id.slice(4), chapitres:[], custom:true, ...d});
  });
  mats.forEach(m => {
    const o = cont['mat:'+m.id];
    if(o) Object.assign(m, o, {id:m.id, chapitres:m.chapitres});
  });
  Object.entries(cont).forEach(([id, d]) => {
    if(!id.startsWith('chap:')) return;
    const cid = id.slice(5);
    let found = null;
    mats.forEach(m => { const c = m.chapitres.find(x => x.id === cid); if(c){ found = c; Object.assign(c, d, {id:cid, mat:m.id, edited:true}); } });
    if(!found && d.mat){ const m = mats.find(x => x.id === d.mat); if(m) m.chapitres.push({...d, id:cid, custom:true}); }
  });
  mats.forEach(m => { m.chapitres.sort((a,b) => A.nivOf(a) - A.nivOf(b) || (a.ordre??0) - (b.ordre??0)); if(!all) m.chapitres = m.chapitres.filter(c => !c.cache); });
  const out = all ? mats : mats.filter(m => !m.cache);
  out.sort((a,b) => A.GROUPES.findIndex(g=>g.id===a.groupe) - A.GROUPES.findIndex(g=>g.id===b.groupe) || (a.ordre??50) - (b.ordre??50));
  catCache = out; catKey = key; return out;
};
A.mat = id => A.catalog().find(m => m.id === id) || A.catalog(true).find(m => m.id === id);
A.chap = id => { for(const m of A.catalog(true)){ const c = m.chapitres.find(x => x.id === id); if(c) return {m, c}; } return null; };
A.matProgress = (m, prog) => {
  prog = prog || A.S.progress || {};
  const total = m.chapitres.length, done = m.chapitres.filter(c => prog[c.id] && prog[c.id].done).length;
  return {done, total, pct: total ? Math.round(done/total*100) : 0};
};
A.addChapitres = (mid, list) => { const m = A.M.find(x => x.id === mid); if(!m) return; const n0 = m.chapitres.length;
  list.forEach((c,i) => { c.mat = mid; c.niv = A.nivOf(c); c._i = 100 + n0 + i; m.chapitres.push(c); });
  m.chapitres.sort((a,b) => a.niv - b.niv || a._i - b._i); m.chapitres.forEach((c,i) => { c.ordre = i; }); };
A.matLevels = (m, prog) => {
  prog = prog || A.S.progress || {};
  return A.NIVEAUX.map(N => { const ch = m.chapitres.filter(c => A.nivOf(c) === N.id), done = ch.filter(c => prog[c.id] && prog[c.id].done).length;
    return {...N, ch, done, total:ch.length, pct:ch.length ? Math.round(done/ch.length*100) : 0, min:ch.reduce((a,c) => a + (c.duree||20), 0)}; });
};
A.myNiv = mid => { const d = A.S.me && A.S.me.data; return (d && d.niv && d.niv[mid]) || 0; };
A.setNiv = async (mid, n) => { const S = A.S; const data = Object.assign({}, S.me.data, {niv:Object.assign({}, (S.me.data||{}).niv, {[mid]:n})}); return A.db.saveProfile(data); };
A.nivPill = c => { const N = A.NIVEAUX[A.nivOf(c)-1]; return `<span class="pill" style="background:${N.bg};color:${N.c}">${'●'.repeat(N.id)} ${N.n}</span>`; };
A.matIcon = m => `<span class="ic" style="background:${esc(m.couleur||'#5B6B7F')}">${ic(m.icone||'book')}</span>`;
A.matIconSm = m => `<span style="width:32px;height:32px;border-radius:9px;display:grid;place-items:center;color:#fff;flex:none;background:${esc(m.couleur||'#5B6B7F')}">${ic(m.icone||'book')}</span>`;

/* =====================================================================
   ÉTAT & DONNÉES
   ===================================================================== */
const S = A.S = {mode:'local', ready:false, settings:{}, contents:{}, annonces:{}, me:null, progress:{}, quiz:[], works:{}, adm:null};
const CONF = window.MRT_CONFIG || {};
let sb = null;

/* ---- démo locale : tout est gardé dans ce navigateur ---- */
function demoSeed(){
  const d = {users:{}, admins:{}, invites:{}, connexions:[], progress:{}, quiz:{}, works:{}, ia:[], settings:{main:{}}, contents:{}, annonces:{}, annales:{}};
  const t = now(), day = 86400000;
  const people = [
    ['u_ak','Koné Aminata','Élève / étudiant','Yopougon'],['u_kj','Kouassi Jean-Marc','Technicien','Cocody'],
    ['u_ti','Traoré Ibrahim','Ouvrier / artisan','Abobo'],['u_yc','Yao Christelle','Élève / étudiant','Bouaké'],
    ['u_bs','Bamba Souleymane','Entrepreneur','San-Pédro'],['u_np',"N'Guessan Paul",'Ingénieur','Marcory']
  ];
  people.forEach(([id,name,profil,city],i) => {
    d.users[id] = {email: name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]+/g,'.').replace(/^\.|\.$/g,'') + '@exemple.ci', pass:'', data:{name, profil, city, phone:'07'+String(10203040+i*1111111).slice(0,8)}, status:'actif', created_at: t - (20+i*3)*day, last_seen: t - [2,40,300,2000,9000,90000][i]*60000, last_page:['#/app/cours/ba-2','#/app/atelier','#/app/matieres','#/app','#/app/metre','#/app/ia'][i]};
    for(let k=0;k<6+i;k++) d.connexions.push({id:uid('cx'), owner:id, at: t - (k*1.7+i*.4)*day - i*3600000, data:{ua: i%2 ? 'Mozilla/5.0 (Linux; Android 13) Chrome/124' : 'Mozilla/5.0 (Windows NT 10.0) Chrome/124', page:'#/app'}});
  });
  const pick = {u_ak:['math-1','math-2','math-3','rdm-1','rdm-2','ba-1','ba-2'], u_kj:['ba-1','ba-2','ba-3','ba-4','rdm-1','rdm-2','rdm-3','metre-1','metre-2','geo-1'], u_ti:['tech-1','tech-2','mat-1'], u_yc:['math-1','om-1','sp-1','sp-2'], u_bs:['metre-1','metre-2','metre-3','eco-1','eco-2','chant-1','chant-2'], u_np:['rdm-1','rdm-2','rdm-3','rdm-4','ba-1','ba-2','ba-3','ba-4','ba-5','geo-1','geo-2','mmc-1']};
  Object.entries(pick).forEach(([u, list]) => list.forEach((c,k) => {
    d.progress[u+':'+c] = {owner:u, data:{chap:c, mat:c.split('-')[0], done:true, at: t - (list.length-k)*day*.8}};
    if(k%2===0) d.quiz[u+':'+c+':'+k] = {owner:u, data:{chap:c, mat:c.split('-')[0], score: 2 + (k*7+u.length)%3, total:4, at: t - (list.length-k)*day*.8}};
  }));
  d.ia.push({owner:'u_np', at:t-3*3600000, data:{kind:'chat', ref:'ba'}},{owner:'u_kj', at:t-26*3600000, data:{kind:'expliquer', ref:'ba-2'}},{owner:'u_ak', at:t-50*3600000, data:{kind:'chat', ref:'rdm'}});
  d.annonces.a1 = {titre:'Bienvenue sur Morata', texte:"Les cours de béton armé et de métré sont en ligne. Commencez par la Construction de A à Z pour voir comment toutes les matières s'enchaînent sur un vrai chantier.", at: t - 2*day};
  return d;
}
const L = {
  db: null,
  load(){ this.db = ls.get('db', null); if(!this.db || !this.db.users){ this.db = demoSeed(); this.save(); } },
  save(){ ls.set('db', this.db); },
  sess(){ return ls.get('sess', null); }
};

/* ---- chargement des données ---- */
function applyPublic(settings, contents, annonces){
  S.settings = settings || {}; S.contents = contents || {}; S.annonces = annonces || {};
}
function rows2obj(rows){ const o = {}; (rows||[]).forEach(r => o[r.id] = r.data || {}); return o; }

async function loadMine(){
  const me = S.me; if(!me) return;
  if(S.mode === 'local'){
    const d = L.db;
    S.progress = {}; Object.values(d.progress).filter(p => p.owner === me.id).forEach(p => S.progress[p.data.chap] = p.data);
    S.quiz = Object.values(d.quiz).filter(q => q.owner === me.id).map(q => q.data).sort((a,b)=>b.at-a.at);
    S.works = {}; Object.entries(d.works).filter(([,w]) => w.owner === me.id).forEach(([id,w]) => S.works[id] = {kind:w.kind, data:w.data, updated_at:w.updated_at});
    return;
  }
  const [p, q, w] = await Promise.all([
    sb.from('progress').select('id,data').eq('owner', me.id).limit(5000),
    sb.from('quiz_results').select('id,data').eq('owner', me.id).order('created_at',{ascending:false}).limit(1000),
    sb.from('works').select('id,kind,data,updated_at').eq('owner', me.id).order('updated_at',{ascending:false}).limit(500)
  ]);
  S.progress = {}; (p.data||[]).forEach(r => S.progress[r.data.chap] = r.data);
  S.quiz = (q.data||[]).map(r => r.data);
  S.works = {}; (w.data||[]).forEach(r => S.works[r.id] = {kind:r.kind, data:r.data, updated_at:r.updated_at});
}

A.loadAdmin = async function(){
  if(!S.me || !S.me.isAdmin) return;
  if(S.mode === 'local'){
    const d = L.db;
    S.adm = {
      profiles: Object.entries(d.users).map(([id,u]) => ({id, email:u.email, data:u.data||{}, status:u.status||'actif', created_at:u.created_at, last_seen:u.last_seen, last_page:u.last_page, admin: !!d.admins[id]})),
      connexions: d.connexions.slice().sort((a,b)=>b.at-a.at),
      progress: Object.values(d.progress).map(p => ({owner:p.owner, ...p.data})),
      quiz: Object.values(d.quiz).map(q => ({owner:q.owner, ...q.data})),
      ia: d.ia.slice().sort((a,b)=>b.at-a.at),
      works: Object.entries(d.works).map(([id,w]) => ({id, owner:w.owner, kind:w.kind, name:(w.data||{}).name, updated_at:w.updated_at, data:w.data})),
      loadedAt: now()
    };
    return;
  }
  const [pr, cx, pg, qz, ia, wk, ad] = await Promise.all([
    sb.from('profiles').select('id,email,data,status,created_at,last_seen,last_page').limit(5000),
    sb.from('connexions').select('id,owner,at,data').order('at',{ascending:false}).limit(1000),
    sb.from('progress').select('owner,data').limit(10000),
    sb.from('quiz_results').select('owner,data').limit(10000),
    sb.from('ia_logs').select('owner,at,data').order('at',{ascending:false}).limit(1000),
    sb.from('works').select('id,owner,kind,updated_at,data').order('updated_at',{ascending:false}).limit(500),
    sb.from('admins').select('uid')
  ]);
  const admins = new Set((ad.data||[]).map(x=>x.uid));
  S.adm = {
    profiles: (pr.data||[]).map(p => ({...p, data:p.data||{}, status:p.status||'actif', admin: admins.has(p.id)})),
    connexions: (cx.data||[]).map(c => ({...c, at: ts(c.at)})),
    progress: (pg.data||[]).map(p => ({owner:p.owner, ...p.data})),
    quiz: (qz.data||[]).map(q => ({owner:q.owner, ...q.data})),
    ia: (ia.data||[]).map(x => ({...x, at: ts(x.at)})),
    works: (wk.data||[]).map(w => ({id:w.id, owner:w.owner, kind:w.kind, name:(w.data||{}).name, updated_at:w.updated_at, data:w.data})),
    loadedAt: now()
  };
};

/* ---- connexion / session ---- */
async function afterAuth(user){
  if(!user){ S.me = null; S.progress = {}; S.quiz = []; S.works = {}; S.adm = null; return; }
  if(S.mode === 'local'){
    const u = L.db.users[user.id]; if(!u){ S.me = null; return; }
    S.me = {id:user.id, email:u.email, data:u.data||{}, status:u.status||'actif', isAdmin: !!L.db.admins[user.id], created_at:u.created_at};
  }else{
    const [{data:roles}, {data:prof}] = await Promise.all([sb.rpc('my_roles'), sb.from('profiles').select('*').eq('id', user.id).maybeSingle()]);
    S.adminExists = !!(roles && roles.admin_exists);
    S.me = {id:user.id, email:user.email, data:(prof&&prof.data)||user.user_metadata||{}, status:(prof&&prof.status)||'actif', isAdmin: !!(roles && roles.is_admin), created_at: prof && prof.created_at};
  }
  await loadMine();
  if(S.me.isAdmin) await A.loadAdmin().catch(e => console.warn(e));
  if(!ss.get('cx_'+S.me.id)){ ss.set('cx_'+S.me.id, '1'); A.db.logConnexion(); }
  A.db.touch();
}

A.db = {
  async init(){
    if(CONF.supabaseUrl && CONF.supabaseAnonKey && window.supabase){
      S.mode = 'sb';
      sb = A.sb = window.supabase.createClient(CONF.supabaseUrl, CONF.supabaseAnonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
      sb.auth.onAuthStateChange(ev => { if(ev === 'PASSWORD_RECOVERY') setTimeout(()=>A.openPwNew && A.openPwNew(), 300); });
      try{
        const [st, ct, an, ae] = await Promise.all([
          sb.from('settings').select('id,data'), sb.from('contents').select('id,data'), sb.from('annonces').select('id,data'), sb.rpc('admin_exists')
        ]);
        if(st.error) throw st.error;
        applyPublic(rows2obj(st.data), rows2obj(ct.data), rows2obj(an.data));
        S.adminExists = !!ae.data;
        const {data:{session}} = await sb.auth.getSession();
        await afterAuth(session ? session.user : null);
      }catch(e){ console.error(e); toast('Base de données inaccessible : vérifiez config.js et le script SQL', 'alert'); }
    }else{
      S.mode = 'local'; L.load();
      applyPublic(L.db.settings, L.db.contents, L.db.annonces);
      S.adminExists = true;
      const s = L.sess();
      await afterAuth(s && L.db.users[s.uid] ? {id:s.uid} : null);
    }
    S.ready = true;
    setInterval(() => { if(S.me && document.visibilityState === 'visible') A.db.touch(); }, 60000);
  },
  async signUp({email, password, name, phone, city, profil}){
    email = String(email).trim().toLowerCase();
    const data = {name:String(name).trim(), phone:String(phone||'').trim(), city:String(city||'').trim(), profil:profil||''};
    if(S.mode === 'local'){
      if(Object.values(L.db.users).some(u => u.email === email)) return {ok:false, msg:'Un compte existe déjà avec cet e-mail'};
      const id = uid('u_');
      L.db.users[id] = {email, pass: await sha(email+'|'+password), data, status:'actif', created_at: now(), last_seen: now()};
      L.save(); ls.set('sess', {uid:id}); await afterAuth({id}); return {ok:true};
    }
    const r = await sb.auth.signUp({email, password, options:{data, emailRedirectTo: location.origin + location.pathname}});
    if(r.error) return {ok:false, msg: /already|registered|exists/i.test(r.error.message) ? 'Un compte existe déjà avec cet e-mail. Connectez-vous.' : sbErr(r.error)};
    if(!r.data.session) return {ok:false, confirm:true, msg:'Compte créé. Ouvrez le lien reçu par e-mail pour l\'activer, puis connectez-vous.'};
    await afterAuth(r.data.session.user); return {ok:true};
  },
  async signIn(email, password){
    email = String(email).trim().toLowerCase();
    if(S.mode === 'local'){
      const h = await sha(email+'|'+password);
      const e = Object.entries(L.db.users).find(([,u]) => u.email === email && (u.pass === h || !u.pass));
      if(!e) return {ok:false, msg:'E-mail ou mot de passe incorrect'};
      ls.set('sess', {uid:e[0]}); ss.del('cx_'+e[0]); await afterAuth({id:e[0]}); return {ok:true};
    }
    const {data, error} = await sb.auth.signInWithPassword({email, password});
    if(error) return {ok:false, msg: /confirm/i.test(error.message) ? 'Confirmez d\'abord votre e-mail (lien reçu)' : 'E-mail ou mot de passe incorrect'};
    await sb.rpc('claim_admin_invite');
    ss.del('cx_'+data.user.id);
    await afterAuth(data.user); return {ok:true};
  },
  async signOut(){
    if(S.me) ss.del('cx_'+S.me.id);
    if(S.mode === 'local') ls.del('sess'); else { try{ await sb.auth.signOut(); }catch(_){} }
    await afterAuth(null);
  },
  async resetPw(email){
    if(S.mode === 'local') return {ok:false, msg:'Indisponible en mode démonstration'};
    const {error} = await sb.auth.resetPasswordForEmail(String(email).trim(), {redirectTo: location.origin + location.pathname});
    return error ? {ok:false, msg:sbErr(error)} : {ok:true};
  },
  async newPw(pw){
    if(S.mode === 'local'){ const u = L.db.users[S.me.id]; u.pass = await sha(u.email+'|'+pw); L.save(); return {ok:true}; }
    const {error} = await sb.auth.updateUser({password:pw}); return error ? {ok:false, msg:sbErr(error)} : {ok:true};
  },
  async demoAdmin(){
    if(S.mode !== 'local') return;
    if(!L.db.users.pdg) L.db.users.pdg = {email:'pdg@demo.local', pass:'', data:{name:A.cfg().ceo, profil:'PDG'}, status:'actif', created_at: now()};
    L.db.admins.pdg = {email:'pdg@demo.local', name:A.cfg().ceo}; L.save();
    ls.set('sess', {uid:'pdg'}); ss.del('cx_pdg'); await afterAuth({id:'pdg'});
  },
  async claimFirstAdmin(name, email, pw){
    const r = await this.signUp({email, password:pw, name, profil:'PDG'});
    if(!r.ok && !r.confirm){
      const s = await this.signIn(email, pw); if(!s.ok) return r;
    }else if(r.confirm) return r;
    const {data, error} = await sb.rpc('claim_first_admin', {p_name:name});
    if(error || !data) return {ok:false, msg: error ? sbErr(error) : 'Un compte PDG existe déjà'};
    const {data:{user}} = await sb.auth.getUser(); await afterAuth(user); return {ok:true};
  },
  async saveProfile(data){
    if(S.mode === 'local'){ L.db.users[S.me.id].data = data; L.save(); S.me.data = data; return true; }
    const {error} = await sb.from('profiles').update({data}).eq('id', S.me.id);
    if(error){ toast(sbErr(error), 'x'); return false; } S.me.data = data; return true;
  },
  async saveProgress(chap, mat, done){
    const data = {chap, mat, done, at: now()};
    S.progress[chap] = data;
    if(S.mode === 'local'){ L.db.progress[S.me.id+':'+chap] = {owner:S.me.id, data}; L.save(); return; }
    const {error} = await sb.from('progress').upsert({id:S.me.id+':'+chap, owner:S.me.id, data, updated_at:new Date().toISOString()});
    if(error) toast(sbErr(error), 'x');
  },
  async saveQuiz(chap, mat, score, total){
    const data = {chap, mat, score, total, at: now()};
    S.quiz.unshift(data);
    const id = S.me.id+':'+chap+':'+now();
    if(S.mode === 'local'){ L.db.quiz[id] = {owner:S.me.id, data}; L.save(); return; }
    const {error} = await sb.from('quiz_results').insert({id, owner:S.me.id, data}); if(error) toast(sbErr(error), 'x');
  },
  async saveWork(id, kind, data){
    id = id || uid(kind === 'dessin' ? 'd_' : kind === 'photo' ? 'ph_' : 'm_');
    const at = new Date().toISOString();
    S.works[id] = {kind, data, updated_at:at};
    if(S.mode === 'local'){ L.db.works[id] = {owner:S.me.id, kind, data, updated_at:at}; L.save(); return id; }
    const {error} = await sb.from('works').upsert({id, owner:S.me.id, kind, data, updated_at:at});
    if(error){ toast(sbErr(error), 'x'); throw error; } return id;
  },
  async delWork(id){
    delete S.works[id];
    if(S.mode === 'local'){ delete L.db.works[id]; L.save(); return; }
    const {error} = await sb.from('works').delete().eq('id', id); if(error) toast(sbErr(error), 'x');
  },
  async saveSettings(patch){
    const main = Object.assign({}, (S.settings||{}).main || {}, patch);
    S.settings = Object.assign({}, S.settings, {main});
    if(S.mode === 'local'){ L.db.settings.main = main; L.save(); return true; }
    const {error} = await sb.from('settings').upsert({id:'main', data:main, updated_at:new Date().toISOString()});
    if(error){ toast(sbErr(error), 'x'); return false; } return true;
  },
  async saveContent(id, data){
    data = Object.assign({}, data, {updatedAt: now()});
    S.contents = Object.assign({}, S.contents, {[id]:data});
    if(S.mode === 'local'){ L.db.contents[id] = data; L.save(); return true; }
    const {error} = await sb.from('contents').upsert({id, data, updated_at:new Date().toISOString()});
    if(error){ toast(sbErr(error), 'x'); return false; } return true;
  },
  async delContent(id){
    const c = Object.assign({}, S.contents); delete c[id]; S.contents = c;
    if(S.mode === 'local'){ delete L.db.contents[id]; L.save(); return; }
    const {error} = await sb.from('contents').delete().eq('id', id); if(error) toast(sbErr(error), 'x');
  },
  async saveAnnonce(id, data){
    id = id || uid('a_');
    S.annonces = Object.assign({}, S.annonces, {[id]:data});
    if(S.mode === 'local'){ L.db.annonces[id] = data; L.save(); return; }
    const {error} = await sb.from('annonces').upsert({id, data}); if(error) toast(sbErr(error), 'x');
  },
  async delAnnonce(id){
    const c = Object.assign({}, S.annonces); delete c[id]; S.annonces = c;
    if(S.mode === 'local'){ delete L.db.annonces[id]; L.save(); return; }
    const {error} = await sb.from('annonces').delete().eq('id', id); if(error) toast(sbErr(error), 'x');
  },
  async setStatus(id, status){
    if(S.mode === 'local'){ L.db.users[id].status = status; L.save(); }
    else{ const {error} = await sb.rpc('admin_set_status', {p_uid:id, p_status:status}); if(error){ toast(sbErr(error), 'x'); return; } }
    await A.loadAdmin();
  },
  async deleteUser(id){
    if(S.mode === 'local'){
      const d = L.db; delete d.users[id]; delete d.admins[id];
      d.connexions = d.connexions.filter(c => c.owner !== id); d.ia = d.ia.filter(c => c.owner !== id);
      ['progress','quiz','works'].forEach(k => Object.keys(d[k]).forEach(x => { if(d[k][x].owner === id) delete d[k][x]; }));
      L.save();
    }else{ const {error} = await sb.rpc('admin_delete_user', {p_uid:id}); if(error){ toast(sbErr(error), 'x'); return false; } }
    await A.loadAdmin(); return true;
  },
  async admins(){
    if(S.mode === 'local') return {admins: Object.entries(L.db.admins).map(([uid,a]) => ({uid, ...a})), invites: Object.entries(L.db.invites).map(([email,a]) => ({email, ...a}))};
    const [a, i] = await Promise.all([sb.from('admins').select('uid,email,name'), sb.from('admin_invites').select('email,name')]);
    return {admins:a.data||[], invites:i.data||[]};
  },
  async invite(email, name){
    email = email.trim().toLowerCase();
    if(S.mode === 'local'){ L.db.invites[email] = {name}; L.save(); return true; }
    const {error} = await sb.from('admin_invites').insert({email, name}); if(error){ toast(sbErr(error), 'x'); return false; } return true;
  },
  async delInvite(email){
    if(S.mode === 'local'){ delete L.db.invites[email]; L.save(); return; }
    await sb.from('admin_invites').delete().eq('email', email);
  },
  async removeAdmin(id){
    if(S.mode === 'local'){ delete L.db.admins[id]; L.save(); return true; }
    const {error} = await sb.from('admins').delete().eq('uid', id); if(error){ toast(sbErr(error), 'x'); return false; } return true;
  },
  async logConnexion(){
    if(!S.me) return;
    const data = {ua: navigator.userAgent.slice(0,200), page: location.hash || '#/', w: window.innerWidth};
    if(S.mode === 'local'){ L.db.connexions.push({id:uid('cx'), owner:S.me.id, at:now(), data}); L.save(); return; }
    await sb.from('connexions').insert({data});
  },
  async touch(){
    if(!S.me) return;
    const page = location.hash || '#/';
    if(S.mode === 'local'){ const u = L.db.users[S.me.id]; if(u){ u.last_seen = now(); u.last_page = page; L.save(); } return; }
    try{ await sb.rpc('touch', {p_page:page}); }catch(_){}
  },
  async logIa(kind, ref){
    if(S.mode === 'local'){ L.db.ia.push({owner:S.me ? S.me.id : 'anon', at:now(), data:{kind, ref}}); L.save(); }
  },
  /* ---- annales officielles (sujets d'examen importés par la direction) ----
     liste = métadonnées seules ; les photos des pages ne sont chargées qu'à l'ouverture */
  async annales(){
    if(S.mode === 'local'){ const a = L.db.annales || {}; return Object.entries(a).map(([id, r]) => ({id, ...r})).filter(r => r.pub || (S.me && S.me.isAdmin)); }
    const {data, error} = await sb.from('annales').select('id,meta,updated_at').order('updated_at', {ascending:false}).limit(2000);
    if(error){ console.warn(error); return []; }
    return (data || []).map(r => ({id:r.id, ...(r.meta || {}), updated_at:r.updated_at}));
  },
  async annale(id){
    if(S.mode === 'local'){ const r = (L.db.annales || {})[id]; if(!r) return null; const x = ls.get('ann_' + id, {}); return {id, ...r, pages:x.pages || [], enonce:x.enonce || '', corrige:x.corrige || ''}; }
    const {data, error} = await sb.from('annales').select('*').eq('id', id).maybeSingle();
    if(error || !data) return null;
    return {id:data.id, ...(data.meta || {}), pages:data.pages || [], enonce:data.enonce || '', corrige:data.corrige || '', updated_at:data.updated_at};
  },
  async saveAnnale(id, rec){
    id = id || uid('an_');
    const meta = {examen:rec.examen, option:rec.option || '', annee:+rec.annee || null, session:rec.session || '', mat:rec.mat || '', titre:rec.titre || '', pub:!!rec.pub, np:(rec.pages || []).length, hasC:!!String(rec.corrige || '').trim(), src:rec.src || '', at:now()};
    if(S.mode === 'local'){
      L.db.annales = L.db.annales || {};
      const prev = ls.get('ann_' + id, null);
      try{ localStorage.setItem('mrt_ann_' + id, JSON.stringify({pages:rec.pages || [], enonce:rec.enonce || '', corrige:rec.corrige || ''})); }
      catch(_){ if(prev) ls.set('ann_' + id, prev); toast('Stockage du navigateur plein : réduisez le nombre de photos', 'alert'); return null; }
      L.db.annales[id] = meta; L.save(); return id;
    }
    const {error} = await sb.from('annales').upsert({id, meta, pages:rec.pages || [], enonce:rec.enonce || '', corrige:rec.corrige || '', updated_at:new Date().toISOString()});
    if(error){ toast(sbErr(error), 'x'); return null; } return id;
  },
  async delAnnale(id){
    if(S.mode === 'local'){ if(L.db.annales) delete L.db.annales[id]; ls.del('ann_' + id); L.save(); return true; }
    const {error} = await sb.from('annales').delete().eq('id', id); if(error){ toast(sbErr(error), 'x'); return false; } return true;
  },
  async token(){
    if(S.mode !== 'sb') return '';
    const {data:{session}} = await sb.auth.getSession(); return session ? session.access_token : '';
  }
};
function sbErr(e){ const m = (e && (e.message || e.error_description || e.code)) || ''; return /row-level|permission|violates|refus/i.test(m) ? 'Action refusée : droits insuffisants' : (m || 'Erreur réseau, réessayez'); }
A.sbErr = sbErr;

/* =====================================================================
   ROUTEUR
   ===================================================================== */
A.routes = [];
A.page = (pattern, def) => A.routes.push({parts: pattern.split('/').filter(Boolean), def});
A.go = h => { if(location.hash === h) A.render(); else location.hash = h; };
A.hash = () => (location.hash || '#/').replace(/^#\/?/, '').split('?')[0];
A.query = () => new URLSearchParams((location.hash.split('?')[1]) || '');
function match(){
  const segs = A.hash().split('/').filter(Boolean).map(decodeURIComponent);
  for(const r of A.routes){
    if(r.parts.length !== segs.length) continue;
    const p = {}; let ok = true;
    r.parts.forEach((x,i) => { if(x[0] === ':') p[x.slice(1)] = segs[i]; else if(x !== segs[i]) ok = false; });
    if(ok) return {def:r.def, params:p, path:segs.join('/')};
  }
  return null;
}
let current = null;
A.render = function(opts={}){
  const app = $('#app'); if(!app) return;
  if(!S.ready){ app.innerHTML = `<div style="display:grid;place-items:center;min-height:100vh;color:var(--muted)"><div class="row">${ic('refresh')} Chargement…</div></div>`; return; }
  let m = match();
  if(!m){ location.replace('#/'); return; }
  const sp = m.def.space;
  if(sp === 'app' && !S.me){ A.ss.set('next', location.hash); location.replace('#/connexion'); return; }
  if(sp === 'admin' && !(S.me && S.me.isAdmin)){ location.replace('#/direction'); return; }
  if(S.me && S.me.status === 'suspendu' && sp !== 'site' && sp !== 'bare'){ app.innerHTML = suspended(); return; }
  if(opts.soft && current && current.path === m.path && current.def.static) return;
  if(current && current.def.unmount && (!opts.soft || current.path !== m.path)) try{ current.def.unmount(); }catch(e){ console.warn(e); }
  const keepScroll = opts.soft && current && current.path === m.path;
  const y = window.scrollY;
  const focusId = document.activeElement && document.activeElement.id;
  current = m;
  let body;
  try{ body = m.def.render(m.params) ; }catch(e){ console.error(e); body = `<div class="page"><div class="note bad">${ic('alert')}Erreur d'affichage : ${esc(e.message)}</div></div>`; }
  if(body == null) return;
  const title = typeof m.def.title === 'function' ? m.def.title(m.params) : m.def.title;
  const crumb = typeof m.def.crumb === 'function' ? m.def.crumb(m.params) : m.def.crumb;
  const actions = m.def.actions ? m.def.actions(m.params) : '';
  const demo = S.mode === 'local' ? `<div class="demob noprint">${ic('info')}Mode démonstration : données gardées dans ce navigateur (config.js non renseigné).</div>` : '';
  let html;
  if(sp === 'site') html = siteShell(body, m);
  else if(sp === 'app') html = appShell(body, m, title, crumb, actions, false);
  else if(sp === 'admin') html = appShell(body, m, title, crumb, actions, true);
  else html = body;
  app.innerHTML = demo + html;
  document.title = (title ? title + ' · ' : '') + brandText();
  closeSide();
  if(m.def.mount) try{ m.def.mount($('#pg'), m.params); }catch(e){ console.error(e); }
  if(keepScroll) window.scrollTo(0, y); else if(!opts.soft) window.scrollTo(0, 0);
  if(focusId && opts.soft){ const el = document.getElementById(focusId); if(el && el.tagName === 'INPUT'){ el.focus(); try{ const v = el.value; el.setSelectionRange(v.length, v.length); }catch(_){} } }
  if(winState) renderWin();
};
A.refresh = () => A.render({soft:true});
window.addEventListener('hashchange', () => { closeWin(); A.render(); A.db && S.me && A.db.touch(); });

/* =====================================================================
   GABARITS
   ===================================================================== */
const brandText = () => { const c = A.cfg(); return (c.name1 + (c.name2||'')).trim(); };
A.brandText = brandText;
A.lockup = (dark, tag) => { const c = A.cfg(); return `<a class="lock${dark?' dk':''}" href="#/"><svg class="logo"><use href="#logo"/></svg><span class="wm"><span>${esc(c.name1)}${c.name2?`<em>${esc(c.name2)}</em>`:''}</span><small>${esc(tag==null?c.tagline:tag)}</small></span></a>`; };

function siteShell(body, m){
  const cur = m.path.split('/')[0] || '';
  const L2 = [['','Accueil'],['matieres','Matières'],['construction','Construction A→Z'],['outils','Outils'],['a-propos','À propos']];
  const link = ([h,n]) => `<a href="#/${h}" ${cur===h?'aria-current="page"':''}>${n}</a>`;
  const acts = S.me
    ? `<a class="btn b-pri b-sm" href="${S.me.isAdmin?'#/admin':'#/app'}">${ic(S.me.isAdmin?'crown':'grid')}${S.me.isAdmin?'Espace PDG':'Mon espace'}</a>`
    : `<a class="btn b-ghost b-sm hs" href="#/connexion">Se connecter</a><a class="btn b-pri b-sm" href="#/inscription">S'inscrire</a>`;
  const c = A.cfg();
  return `<div class="site">
  <header class="shead"><div class="in">${A.lockup(false)}<nav class="snav" aria-label="Navigation principale">${L2.map(link).join('')}</nav><div class="sacts">${acts}<button class="ibtn mburger" data-act="smenu" aria-label="Menu">${ic('menu')}</button></div></div>
  <nav class="mmenu" id="smenu" hidden>${L2.map(link).join('')}${S.me?'':'<a href="#/connexion">Se connecter</a>'}</nav></header>
  <main id="pg" style="flex:1">${body}</main>
  <footer class="sfoot"><div class="wrap"><div class="fg">
   <div>${A.lockup(true)}<p style="margin-top:10px;max-width:40ch">${esc(c.tagline)} : cours, exercices, projets de construction réels, dessin de plans, métré et assistant IA.</p></div>
   <div><h4>Apprendre</h4><a href="#/matieres">Toutes les matières</a><a href="#/construction">Construction de A à Z</a><a href="#/outils">Atelier de dessin & métré</a></div>
   <div><h4>Compte</h4>${S.me?'<a href="#/app">Mon espace</a>':'<a href="#/inscription">Créer un compte</a><a href="#/connexion">Se connecter</a>'}</div>
   <div><h4>Contact</h4><span>${esc(c.city)}</span>${c.phone?`<span>${esc(c.phone)}</span>`:''}${c.email?`<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`:''}${c.whatsapp?`<a href="https://wa.me/${esc(String(c.whatsapp).replace(/\D/g,'').replace(/^0/,'2250'))}" target="_blank" rel="noopener">WhatsApp</a>`:''}</div>
  </div><div class="fbot"><span>© ${new Date().getFullYear()} ${esc(brandText())} · Tous droits réservés</span><a href="#/direction">${ic('lock')}Espace direction</a></div></div></footer></div>`;
}

const LNAV = [
  ['app','Tableau de bord','home'],['app/matieres','Matières','book'],['app/resoudre','Résoudre en photo','camera'],['app/exercices','Exercices & annales','target'],
  ['app/construction','Construction A→Z','crane'],['app/atelier','Atelier de dessin','compass'],['app/metre','Métré','calc'],['app/ia','Assistant IA','spark'],['app/profil','Mon profil','user']
];
const ANAV = [
  ['Pilotage'],['admin','Tableau de bord','chart'],['admin/connexions','Connexions','online'],
  ['Apprenants'],['admin/apprenants','Apprenants','users'],['admin/progression','Progression & quiz','target'],
  ['Contenus'],['admin/contenus','Matières & cours','book'],['admin/annales','Annales d\'examens','doc'],['admin/annonces','Annonces','bell'],
  ['Outils'],['admin/ia','Intelligence artificielle','spark'],['admin/travaux','Travaux des apprenants','folder'],
  ['Réglages'],['admin/parametres','Paramètres','cog']
];
function navActive(path, h){
  if(h === 'app' || h === 'admin') return path === h;
  const base = h.split('/')[1];
  const seg = path.split('/')[1] || '';
  const alias = {matiere:'matieres', cours:'matieres', apprenant:'apprenants', chapitre:'contenus', attestation:'profil', exercice:'exercices', solveur:'exercices', epreuve:'exercices', annale:path.startsWith('admin') ? 'annales' : 'exercices'};
  return seg === base || alias[seg] === base;
}
function appShell(body, m, title, crumb, actions, adm){
  const me = S.me, name = (me.data && me.data.name) || me.email;
  const nav = (adm ? ANAV : LNAV).map(n => n.length === 1 ? `<div class="sec">${n[0]}</div>` :
    `<a class="nav" href="#/${n[0]}" ${navActive(m.path, n[0])?'aria-current="page"':''}>${ic(n[2])}${n[1]}${n[0]==='admin/connexions'&&S.adm?`<span class="cnt">${onlineCount()}</span>`:''}</a>`).join('');
  const foot = adm
    ? `<a class="nav" href="#/app">${ic('book')}Voir l'espace apprenant</a><a class="nav" href="#/">${ic('globe')}Voir le site public</a>`
    : `${me.isAdmin?`<a class="nav" href="#/admin">${ic('crown')}Espace PDG</a>`:''}<a class="nav" href="#/">${ic('globe')}Site public</a>`;
  const bn = adm
    ? [['admin','Pilotage','chart'],['admin/apprenants','Apprenants','users'],['admin/contenus','Contenus','book'],['admin/connexions','Connexions','online'],['admin/parametres','Réglages','cog']]
    : [['app','Accueil','home'],['app/matieres','Cours','book'],['app/resoudre','Photo','camera'],['app/exercices','Exos','target'],['app/construction','A→Z','crane']];
  return `<div class="shell${adm?' adm':''}">
  <aside class="side" id="side">
    <div class="brand">${A.lockup(adm, adm?'Direction':null)}</div>
    ${adm?`<span class="pdgbadge">${ic('crown')}ADMINISTRATEUR PRINCIPAL</span>`:''}
    ${nav}
    <div class="foot">${foot}
      <a class="me" href="${adm?'#/admin/parametres':'#/app/profil'}"><span class="av" style="background:${avc(name)}">${esc(initials(name))}</span><span style="min-width:0"><b>${esc(name)}</b><small>${adm?'PDG · accès complet':esc((me.data&&me.data.profil)||'Apprenant')}</small></span></a>
      <button class="btn ${adm?'b-dark':'b-line'} b-sm" style="${adm?'background:#17263B;color:#C8D3E0':''}" data-act="logout">${ic('logout')}Se déconnecter</button>
    </div>
  </aside>
  <div class="main">
    <div class="mtop"><button class="ibtn" data-act="side" aria-label="Menu">${ic('menu')}</button>${A.lockup(true, adm?'Direction':null)}<span class="grow"></span>${adm?`<span class="pill p-amber">PDG</span>`:''}</div>
    ${m.def.noTop ? '' : `<div class="top"><h1>${crumb?`<span class="crumb">${crumb}</span>`:''}${esc(title||'')}</h1>${actions||''}</div>`}
    <main class="page${m.def.full?' full':''}" id="pg">${body}</main>
    <nav class="bnav">${bn.map(n=>`<a href="#/${n[0]}" ${navActive(m.path,n[0])?'aria-current="page"':''}>${ic(n[2])}${n[1]}</a>`).join('')}</nav>
  </div></div>`;
}
function onlineCount(){ return S.adm ? S.adm.profiles.filter(p => A.isOnline(p)).length : 0; }
A.isOnline = p => p.last_seen && (now() - ts(p.last_seen)) < 3*60000;
function suspended(){
  return `<div class="dir"><div class="dir-in"><div class="dcard"><h2>Compte suspendu</h2><p>Votre accès a été suspendu par l'administration. Contactez ${esc(A.cfg().email||'la direction')} pour plus d'informations.</p><button class="btn b-amber" data-act="logout">${ic('logout')}Se déconnecter</button></div></div></div>`;
}
function closeSide(){ const s = $('#side'); if(s) s.classList.remove('open'); const sc = $('.scrim'); if(sc) sc.remove(); }

/* =====================================================================
   FENÊTRES LATÉRALES
   ===================================================================== */
let winState = null;
A.win = function(def){ winState = def; renderWin(); };
function renderWin(){
  if(!winState) return;
  const d = typeof winState === 'function' ? winState() : winState;
  let ov = $('#ov');
  const keepScroll = ov ? ($('.win-b', ov)||{}).scrollTop : 0;
  if(!ov){ ov = document.createElement('div'); ov.id = 'ov'; ov.className = 'ov'; document.body.appendChild(ov); }
  ov.innerHTML = `<div class="win${d.wide?' wide':''}" role="dialog" aria-modal="true" aria-label="${esc(d.title)}"><div class="win-h"><h2>${esc(d.title)}</h2><button class="ibtn" data-act="closewin" aria-label="Fermer">${ic('x')}</button></div><div class="win-b">${d.body}</div>${d.foot?`<div class="win-f">${d.foot}</div>`:''}</div>`;
  const wb = $('.win-b', ov); if(wb && keepScroll) wb.scrollTop = keepScroll;
  if(d.mount) d.mount(ov);
}
function closeWin(){ winState = null; const o = $('#ov'); if(o) o.remove(); }
A.closeWin = closeWin;
A.rewin = () => renderWin();

/* =====================================================================
   ÉVÉNEMENTS DÉLÉGUÉS
   ===================================================================== */
const H = {click:[], submit:[], input:[], change:[]};
A.on = (type, sel, fn) => H[type].push([sel, fn]);
['click','submit','input','change'].forEach(type => document.addEventListener(type, e => {
  for(const [sel, fn] of H[type]){
    const el = e.target.closest ? e.target.closest(sel) : null;
    if(el){ if(type === 'submit') e.preventDefault(); try{ const r = fn(el, e); if(r && r.catch) r.catch(err => { console.error(err); toast(err.message||'Erreur', 'x'); }); }catch(err){ console.error(err); toast(err.message||'Erreur', 'x'); } }
  }
}));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && winState && !e.defaultPrevented){ closeWin(); } });
A.on('click', '[data-act="closewin"]', () => closeWin());
A.on('click', '.ov', (el, e) => { if(e.target === el) closeWin(); });
A.on('click', '[data-act="side"]', () => { const s = $('#side'); s.classList.add('open'); const sc = document.createElement('div'); sc.className = 'scrim'; sc.onclick = closeSide; document.body.appendChild(sc); });
A.on('click', '[data-act="smenu"]', () => { const m = $('#smenu'); m.hidden = !m.hidden; });
A.on('click', '[data-act="logout"]', async () => { await A.db.signOut(); toast('Déconnecté', 'logout'); A.go('#/'); });
A.on('click', '[data-copy]', el => copy(el.dataset.copy));
A.on('click', '[data-act="print"]', () => window.print());

/* ---------- petits composants ---------- */
A.ring = p => `<span class="ring" style="--p:${p}"><b>${p}%</b></span>`;
A.bar = (p, cls='') => `<div class="bar ${cls}"><i style="width:${Math.max(0,Math.min(100,p))}%"></i></div>`;
A.avatar = (name, cls='') => `<span class="av ${cls}" style="background:${avc(name)}">${esc(initials(name))}</span>`;
A.empty = (icon, msg, extra='') => `<div class="empty">${ic(icon)}<div>${msg}</div>${extra}</div>`;
A.barChart = function(data, opt={}){
  const W = 560, h = opt.h || 200, pl = 34, pr = 8, pt = 18, pb = 26;
  const mx = Math.max(1, ...data.map(d=>d.v));
  const raw = mx / 4, p10 = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / p10;
  const step = Math.max(1, (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p10), max = step * 4;
  const cw = (W-pl-pr) / data.length, bw = Math.min(30, cw*.62);
  let g = '';
  for(let k=0;k<=4;k++){ const y = pt + (h-pt-pb) * (1 - k/4); g += `<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="#E3DFD7" stroke-dasharray="${k?'3 4':''}"/><text x="${pl-6}" y="${y+3}" text-anchor="end">${Math.round(max*k/4)}</text>`; }
  data.forEach((d,i) => { const x = pl + i*cw + (cw-bw)/2, bh = (h-pt-pb) * d.v / max, y = h - pb - bh;
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${Math.max(0,bh)}" rx="4" fill="${d.hl?'#E8752A':'#2F6FDB'}" opacity="${d.hl?1:.85}"><title>${esc(d.l)} : ${d.v}</title></rect>`;
    if(data.length <= 16 || i % 2 === 0) g += `<text x="${x+bw/2}" y="${h-8}" text-anchor="middle">${esc(d.l)}</text>`; });
  return `<div class="chart"><svg viewBox="0 0 ${W} ${h}" role="img" aria-label="${esc(opt.label||'Graphique')}">${g}</svg></div>`;
};
})();
