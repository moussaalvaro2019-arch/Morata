/* =====================================================================
   Assistant IA : appels à /api/ia (fonction Netlify → API Claude)
   ===================================================================== */
(function(){
'use strict';
const {$, esc, ic, toast, S} = A;
const ENDPOINT = (window.MRT_CONFIG && window.MRT_CONFIG.iaEndpoint) || '/api/ia';
const OFF_MSG = "L'assistant IA n'est pas encore activé sur ce site. Il fonctionne une fois le site publié sur Netlify avec la clé ANTHROPIC_API_KEY (voir GUIDE-INSTALLATION.md, étape 6).";

A.IA = {
  /* Envoie une demande et lit la réponse au fil de l'eau.
     onText(texteComplet) est appelé à chaque morceau reçu. */
  async stream(req, onText, signal){
    if(A.cfg().iaActive === false) return {ok:false, error:"L'assistant IA est désactivé par l'administration."};
    let res;
    try{
      const token = await A.db.token();
      res = await fetch(ENDPOINT, {method:'POST', signal, headers:{'Content-Type':'application/json', ...(token?{Authorization:'Bearer '+token}:{})}, body:JSON.stringify(req)});
    }catch(e){
      if(e.name === 'AbortError') return {ok:false, aborted:true, error:'Arrêté'};
      return {ok:false, error:OFF_MSG};
    }
    if(!res.ok){
      let msg = '';
      try{ const j = await res.json(); msg = j.error || ''; }catch(_){ }
      if(res.status === 404 || res.status === 405 || res.status === 501) msg = OFF_MSG;
      return {ok:false, error: msg || ('Erreur ' + res.status), status:res.status};
    }
    if(S.mode === 'local') A.db.logIa(req.kind, req.ref);
    const ctype = res.headers.get('content-type') || '';
    if(/text\/html/.test(ctype)) return {ok:false, error:OFF_MSG};
    const reader = res.body.getReader(), dec = new TextDecoder();
    let text = '';
    try{
      for(;;){ const {done, value} = await reader.read(); if(done) break; text += dec.decode(value, {stream:true}); onText && onText(text); }
    }catch(e){ if(e.name === 'AbortError') return {ok:true, text, aborted:true}; return {ok:false, text, error:'Connexion interrompue'}; }
    return {ok:true, text};
  },

  /* Aide contextuelle dans un chapitre */
  async lesson(m, c, mode, out){
    const Q = {
      simple:"Réexplique ce chapitre plus simplement, comme à un débutant, avec des images concrètes du chantier.",
      exemple:"Donne un exemple chiffré complet et détaillé (données, calcul pas à pas, résultat, vérification) qui applique ce chapitre.",
      exercice:"Propose un exercice d'application de niveau intermédiaire sur ce chapitre, puis sa correction détaillée.",
      chantier:"Explique concrètement comment ce chapitre s'applique sur un chantier de bâtiment en Côte d'Ivoire : gestes, contrôles, erreurs fréquentes.",
      resume:"Fais une fiche résumé de révision de ce chapitre : notions clés, formules, valeurs à retenir, pièges."
    };
    out.innerHTML = `<div class="row sub">${ic('spark')}L'IA rédige sa réponse <span class="typing"><i></i><i></i><i></i></span></div>`;
    out.scrollIntoView({behavior:'smooth', block:'nearest'});
    const r = await this.stream({kind:'expliquer', ref:c.id, ctx:ctx(m, c), messages:[{role:'user', content:Q[mode] || Q.simple}]}, t => { out.innerHTML = A.mdHtml(t, {inner:true}); });
    if(!r.ok) out.innerHTML = `<div class="note">${ic('info')}<span>${esc(r.error)}</span></div>`;
  },

  /* Quiz généré à la demande */
  async quiz(m, c){
    const r = await this.stream({kind:'quiz', ref:c.id, ctx:ctx(m, c), messages:[{role:'user', content:'Génère 5 nouvelles questions de quiz sur ce chapitre.'}]});
    if(!r.ok){ toast(r.error, 'x'); return null; }
    const items = parseQuiz(r.text);
    if(!items.length) toast("Réponse de l'IA illisible, réessayez", 'x');
    return items;
  },

  /* Rédaction d'un chapitre complet (espace PDG) */
  async chapter(opts, onText, signal){
    const req = {kind:'cours', ref:opts.mat, ctx:{matiere:opts.matTitre, chapitre:opts.titre, plan:opts.plan || '', niveau:opts.niveau || '', autres:opts.autres || ''}, messages:[{role:'user', content:`Rédige le chapitre « ${opts.titre} » de la matière « ${opts.matTitre} ».${opts.notes ? '\nConsignes du PDG : ' + opts.notes : ''}`}]};
    return this.stream(req, onText, signal);
  }
};
function ctx(m, c){ return {matiere:m.titre, chapitre:c ? c.titre : '', extrait: c ? String(c.contenu||'').slice(0, 14000) : ''}; }
function parseQuiz(t){
  try{
    const s = t.indexOf('['), e = t.lastIndexOf(']');
    if(s < 0 || e < s) return [];
    const arr = JSON.parse(t.slice(s, e+1));
    return arr.filter(x => x && x.q && Array.isArray(x.o) && x.o.length >= 2 && Number.isInteger(x.r) && x.r >= 0 && x.r < x.o.length).map(x => ({q:String(x.q), o:x.o.map(String), r:x.r, e:String(x.e||'')}));
  }catch(_){ return []; }
}
A.IA.parseQuiz = parseQuiz;
A.IA.splitChapter = t => {
  const k = t.indexOf('=== QUIZ ===');
  return k < 0 ? {contenu:t.trim(), quiz:[]} : {contenu:t.slice(0, k).trim(), quiz:parseQuiz(t.slice(k))};
};

/* =====================================================================
   Page « Assistant IA » (conversation)
   ===================================================================== */
let CH = null, ctrl = null;
const key = () => 'chat_' + (S.me ? S.me.id : 'x');
function loadChat(){ if(!CH || CH.uid !== (S.me&&S.me.id)) CH = Object.assign({uid:S.me&&S.me.id, mat:'', msgs:[]}, A.ls.get(key(), {})); return CH; }
const saveChat = () => A.ls.set(key(), {mat:CH.mat, msgs:CH.msgs.slice(-40)});
const SUGG = [
  'Comment calculer la section d\'acier d\'une poutre de 5 m ?','Quel dosage de béton pour une dalle de maison ?','Explique-moi l\'essai Proctor simplement',
  'Comment implanter une maison avec des chaises et des cordeaux ?','Quelle différence entre semelle isolée et semelle filante ?','Combien d\'agglos pour un mur de 10 m × 3 m ?'
];
function msgHtml(x){
  return x.role === 'user' ? `<div class="msg u">${esc(x.content)}</div>`
    : `<div class="msg a"><span class="who2">${ic('spark')}Assistant ${esc(A.brandText())}</span>${x.pending && !x.content ? '<span class="typing"><i></i><i></i><i></i></span>' : A.mdHtml(x.content)}${x.error?`<div class="note" style="margin-top:6px">${ic('info')}<span>${esc(x.error)}</span></div>`:''}</div>`;
}
A.page('app/ia', {space:'app', title:'Assistant IA', crumb:'Votre professeur disponible 24 h/24', static:true,
 actions:() => `<button class="btn b-line b-sm" data-act="chatnew">${ic('plus')}Nouvelle conversation</button>`,
 render(){
  loadChat();
  const qm = A.query().get('m'); if(qm && A.mat(qm)) CH.mat = qm;
  const cat = A.catalog();
  return `<div class="chat"><div class="msgs" id="msgs">${CH.msgs.length ? CH.msgs.map(msgHtml).join('') : `<div class="stack" style="margin:auto;max-width:620px;text-align:center;justify-items:center;padding:20px">
     <span style="width:64px;height:64px;border-radius:20px;display:grid;place-items:center;font-size:30px;background:linear-gradient(140deg,#2F6FDB,#E8752A);color:#fff">${ic('spark')}</span>
     <h2>Posez votre question</h2><p class="muted">Calculs, normes, techniques de chantier, révisions d'examen… L'assistant répond en français avec les formules et des exemples.</p>
     <div class="sugg" style="justify-content:center">${SUGG.map(s=>`<button data-sugg="${esc(s)}">${esc(s)}</button>`).join('')}</div></div>`}</div>
   <form class="composer" id="fChat">
    <div class="row nw"><select class="inp sm" id="chMat" style="width:auto;max-width:60%"><option value="">Toutes matières</option>${cat.map(m=>`<option value="${m.id}" ${m.id===CH.mat?'selected':''}>${esc(m.titre)}</option>`).join('')}</select><span class="sub grow">${A.cfg().iaQuota ? `Jusqu'à ${A.cfg().iaQuota} questions par jour` : ''}</span></div>
    <div class="row nw"><textarea class="inp" id="chIn" rows="1" placeholder="Écrivez votre question… (Entrée pour envoyer, Maj+Entrée pour aller à la ligne)"></textarea><button class="btn b-blue" id="chSend" aria-label="Envoyer">${ic('send')}</button></div>
   </form></div>`;
 },
 mount(){ const m = $('#msgs'); if(m) m.scrollTop = m.scrollHeight; const t = $('#chIn'); if(t) t.focus(); },
 unmount(){ if(ctrl){ ctrl.abort(); ctrl = null; } }
});
const reMsgs = () => { const m = $('#msgs'); if(!m) return; const atEnd = m.scrollHeight - m.scrollTop - m.clientHeight < 80; m.innerHTML = CH.msgs.map(msgHtml).join(''); if(atEnd) m.scrollTop = m.scrollHeight; };
async function send(text){
  text = String(text||'').trim(); if(!text) return;
  if(ctrl){ toast('Patientez, une réponse est en cours', 'clock'); return; }
  loadChat();
  CH.msgs.push({role:'user', content:text});
  const ans = {role:'assistant', content:'', pending:true}; CH.msgs.push(ans);
  const inp = $('#chIn'); if(inp){ inp.value = ''; inp.style.height = ''; }
  reMsgs(); const m = $('#msgs'); if(m) m.scrollTop = m.scrollHeight;
  const btn = $('#chSend'); if(btn) btn.innerHTML = ic('x');
  ctrl = new AbortController();
  const mat = CH.mat ? A.mat(CH.mat) : null;
  const history = CH.msgs.filter(x => !x.pending && !x.error && x.content).slice(-12).map(x => ({role:x.role, content:x.content}));
  const r = await A.IA.stream({kind:'chat', ref:CH.mat || 'general', ctx:{matiere: mat ? mat.titre : ''}, messages:history}, t => { ans.content = t; reMsgs(); }, ctrl.signal);
  ctrl = null; ans.pending = false;
  if(!r.ok && !r.aborted){ ans.error = r.error; if(!ans.content) ans.content = ''; }
  if(!ans.content && !ans.error) CH.msgs.pop();
  saveChat(); reMsgs();
  const b2 = $('#chSend'); if(b2) b2.innerHTML = ic('send');
}
A.on('submit', '#fChat', () => send(A.val('chIn')));
A.on('click', '#chSend', (el, e) => { if(ctrl){ e.preventDefault(); ctrl.abort(); } });
A.on('click', '[data-sugg]', el => send(el.dataset.sugg));
A.on('change', '#chMat', el => { loadChat(); CH.mat = el.value; saveChat(); });
A.on('click', '[data-act="chatnew"]', () => { loadChat(); if(ctrl) ctrl.abort(); CH.msgs = []; saveChat(); A.render(); });
document.addEventListener('keydown', e => {
  if(e.target && e.target.id === 'chIn'){
    if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); send(e.target.value); }
    setTimeout(() => { e.target.style.height = 'auto'; e.target.style.height = Math.min(180, e.target.scrollHeight) + 'px'; }, 0);
  }
});
})();
