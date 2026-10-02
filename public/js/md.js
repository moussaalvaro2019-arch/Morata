/* =====================================================================
   Rendu des cours : Markdown simplifié + formules + encadrés + figures
   Syntaxe :
     ## Titre            ### Sous-titre
     - liste             1. liste numérotée
     **gras**  *italique*  ==formule en ligne==  [lien](#/app/...)
     $$ formule en bloc  (plusieurs lignes $$ consécutives = un seul bloc)
     > [!retenir] Titre  (retenir | attention | exemple | astuce | norme)
     > texte de l'encadré
     | tableau | ... |
     !fig:nom|Légende    (figures dessinées par js/plans.js)
   ===================================================================== */
(function(){
'use strict';
const {esc, ic} = A;
const CALL = {retenir:['star','À retenir'], attention:['alert','Attention'], exemple:['calc','Exemple'], astuce:['zap','Astuce'], norme:['shield','Norme / règle']};
const GREEK = {alpha:'α',beta:'β',gamma:'γ',delta:'δ',Delta:'Δ',epsilon:'ε',varepsilon:'ε',eta:'η',theta:'θ',lambda:'λ',mu:'μ',nu:'ν',pi:'π',rho:'ρ',sigma:'σ',Sigma:'Σ',tau:'τ',phi:'φ',varphi:'φ',Phi:'Φ',omega:'ω',Omega:'Ω',psi:'ψ',xi:'ξ',chi:'χ',kappa:'κ',zeta:'ζ'};
const SUP = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻','+':'⁺','n':'ⁿ'};
const SUB = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};

/* Convertit un peu de LaTeX (souvent produit par l'IA) en texte lisible */
function texish(s){
  let t = String(s);
  for(let k=0;k<3;k++) t = t.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)');
  t = t.replace(/\\sqrt\{([^{}]*)\}/g, '√($1)').replace(/\\sqrt/g, '√')
       .replace(/\\(times)/g, '×').replace(/\\cdot/g, '·').replace(/\\leq?/g, '≤').replace(/\\geq?/g, '≥').replace(/\\neq/g, '≠').replace(/\\approx/g, '≈')
       .replace(/\\infty/g, '∞').replace(/\\int/g, '∫').replace(/\\sum/g, 'Σ').replace(/\\partial/g, '∂').replace(/\\rightarrow|\\to/g, '→').replace(/\\Rightarrow/g, '⇒').replace(/\\pm/g, '±').replace(/\\circ/g, '°').replace(/\\%/g, '%')
       .replace(/\\(?:text|mathrm|mathbf|operatorname)\{([^{}]*)\}/g, '$1').replace(/\\left|\\right/g, '').replace(/\\[,;!: ]/g, ' ')
       .replace(/\\([A-Za-z]+)/g, (m, g) => GREEK[g] || g)
       .replace(/\^\{([0-9n+-]+)\}/g, (m, g) => [...g].map(c => SUP[c] || c).join('')).replace(/\^([0-9n])/g, (m, g) => SUP[g])
       .replace(/_\{([0-9]+)\}/g, (m, g) => [...g].map(c => SUB[c] || c).join('')).replace(/_\{([^{}]*)\}/g, '$1')
       .replace(/[{}]/g, '');
  return t;
}
A.texish = texish;

function inline(s){
  let t = esc(s);
  t = t.replace(/\$\$([^$]+)\$\$/g, (m, f) => `<span class="f">${texish(f)}</span>`)
       .replace(/\$([^$\n]{1,120})\$/g, (m, f) => `<span class="f">${texish(f)}</span>`)
       .replace(/\\\(([^]*?)\\\)/g, (m, f) => `<span class="f">${texish(f)}</span>`)
       .replace(/==([^=]+)==/g, '<span class="f">$1</span>')
       .replace(/`([^`]+)`/g, '<code>$1</code>')
       .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
       .replace(/(^|[\s(])\*([^\s*][^*]*?)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>')
       .replace(/\[([^\]]+)\]\(((?:https?:\/\/|#\/)[^)\s]+)\)/g, (m, txt, url) => `<a href="${url}"${url.startsWith('http')?' target="_blank" rel="noopener"':''}>${txt}</a>`);
  return t;
}

A.md = function(src, opt={}){
  const lines = String(src || '').replace(/\r/g, '').split('\n');
  const out = []; const toc = [];
  let i = 0, para = [];
  const flush = () => { if(para.length){ out.push(`<p>${para.map(inline).join(opt.br ? '<br>' : ' ')}</p>`); para = []; } };
  while(i < lines.length){
    const raw = lines[i], l = raw.trim();
    if(!l){ flush(); i++; continue; }
    // bloc de code
    if(l.startsWith('```')){
      flush(); const buf = []; i++;
      while(i < lines.length && !lines[i].trim().startsWith('```')) buf.push(lines[i++]);
      i++; out.push(`<div class="fx">${esc(buf.join('\n'))}</div>`); continue;
    }
    // titres
    const h = l.match(/^(#{1,4})\s+(.*)$/);
    if(h){ flush(); const n = Math.min(4, h[1].length + (opt.shift||0)); const txt = h[2].replace(/\s*#+$/,'');
      if(n === 2){ const id = 's-' + (toc.length+1); toc.push({id, t: txt}); out.push(`<h2 id="${id}">${inline(txt)}</h2>`); }
      else out.push(`<h${n}>${inline(txt)}</h${n}>`); i++; continue; }
    // figure
    const fg = l.match(/^!fig:([\w-]+)(?:\|(.*))?$/);
    if(fg){ flush(); const fn = A.FIG && A.FIG[fg[1]]; if(fn){ let svg = ''; try{ svg = fn(); }catch(e){ console.warn(e); }
      out.push(`<figure>${svg}${fg[2]?`<figcaption>${inline(fg[2])}</figcaption>`:''}</figure>`); } i++; continue; }
    // séparateur
    if(/^(-{3,}|\*{3,})$/.test(l)){ flush(); out.push('<hr>'); i++; continue; }
    // formule en bloc
    if(l.startsWith('$$') && !/^\$\$[^$]+\$\$$/.test(l)){
      flush(); const buf = [];
      while(i < lines.length && lines[i].trim().startsWith('$$')){ const x = lines[i].trim().replace(/^\$\$\s?/, '').replace(/\$\$$/, ''); if(x) buf.push(texish(x)); i++; }
      if(buf.length) out.push(`<div class="fx">${esc(buf.join('\n')).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>')}</div>`); continue;
    }
    if(/^\\\[/.test(l)){ flush(); const buf = [l.replace(/^\\\[/, '')]; while(!/\\\]\s*$/.test(buf[buf.length-1]) && i+1 < lines.length){ i++; buf.push(lines[i]); } i++;
      out.push(`<div class="fx">${esc(texish(buf.join(' ').replace(/\\\]\s*$/, '')))}</div>`); continue; }
    // encadrés / citations
    if(l.startsWith('>')){
      flush(); const buf = [];
      while(i < lines.length && lines[i].trim().startsWith('>')){ buf.push(lines[i].trim().replace(/^>\s?/, '')); i++; }
      const c = buf[0] && buf[0].match(/^\[!(\w+)\]\s*(.*)$/);
      if(c && CALL[c[1].toLowerCase()]){
        const k = c[1].toLowerCase(), [icn, lab] = CALL[k];
        const inner = A.md(buf.slice(1).join('\n'), {inner:true, br:true}).html;
        out.push(`<div class="call ${k}"><b>${ic(icn)}${c[2] ? inline(c[2]) : lab}</b>${inner}</div>`);
      }else out.push(`<blockquote>${A.md(buf.join('\n'), {inner:true}).html}</blockquote>`);
      continue;
    }
    // tableau
    if(l.startsWith('|') && i+1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[i+1].trim())){
      flush(); const row = s => s.trim().replace(/^\||\|$/g, '').split('|').map(x => x.trim());
      const head = row(l); i += 2; const body = [];
      while(i < lines.length && lines[i].trim().startsWith('|')){ body.push(row(lines[i])); i++; }
      out.push(`<table><thead><tr>${head.map(x=>`<th>${inline(x)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map(x=>`<td>${inline(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      continue;
    }
    // listes
    if(/^([-*•]|\d+[.)])\s+/.test(l)){
      flush(); const ord = /^\d/.test(l); const start = ord ? parseInt(l, 10) : 1; const items = [];
      while(i < lines.length){
        const x = lines[i].trim();
        if(/^([-*•]|\d+[.)])\s+/.test(x)) items.push(x.replace(/^([-*•]|\d+[.)])\s+/, ''));
        else if(x && /^\s{2,}/.test(lines[i]) && items.length) items[items.length-1] += ' ' + x;
        else break;
        i++;
      }
      out.push(`<${ord?'ol':'ul'}${ord && start > 1 ? ` start="${start}"` : ''}>${items.map(x=>`<li>${inline(x)}</li>`).join('')}</${ord?'ol':'ul'}>`);
      continue;
    }
    para.push(l); i++;
  }
  flush();
  const html = out.join('\n');
  return opt.inner ? {html, toc} : {html: `<div class="md">${html}</div>`, toc};
};
A.mdHtml = (src, opt) => A.md(src, opt).html;
})();
