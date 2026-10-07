/* =====================================================================
   Figures techniques dessinées en SVG (utilisées par !fig:nom dans les cours)
   ===================================================================== */
(function(){
'use strict';
const INK = '#14202E', OR = '#E8752A', BL = '#2F6FDB', GR = '#5E6B7A', CO = '#E9E4DA', ST = '#C8363B';
const svg = (w, h, body, label='Figure') => `<svg viewBox="0 0 ${w} ${h}" width="${w}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Segoe UI,sans-serif" font-size="12" role="img" aria-label="${label}"><defs>
 <marker id="fa" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${INK}"/></marker>
 <marker id="fo" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${OR}"/></marker>
 <marker id="fb" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${BL}"/></marker>
 <pattern id="fh" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#B5AC9C" stroke-width="1.6"/></pattern>
 <pattern id="fsol" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 14 L14 0" stroke="#A8916F" stroke-width="1"/><circle cx="4" cy="4" r="1" fill="#A8916F"/></pattern>
</defs><rect width="${w}" height="${h}" fill="#FBFAF7"/>${body}</svg>`;
const T = (x, y, t, o={}) => `<text x="${x}" y="${y}" ${o.a?`text-anchor="${o.a}"`:''} font-size="${o.s||12}" fill="${o.c||INK}" ${o.b?'font-weight="700"':''} ${o.r?`transform="rotate(${o.r} ${x} ${y})"`:''}>${t}</text>`;
const Ln = (x1, y1, x2, y2, o={}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c||INK}" stroke-width="${o.w||1.4}" ${o.d?`stroke-dasharray="${o.d}"`:''} ${o.m?`marker-end="url(#${o.m})"`:''} ${o.ms?`marker-start="url(#${o.ms})"`:''}/>`;
const Dim = (x1, y1, x2, y2, t, o={}) => { const hor = Math.abs(y2-y1) < 1; const mx = (x1+x2)/2, my = (y1+y2)/2;
  return Ln(x1,y1,x2,y2,{c:GR,w:1,m:'fa',ms:'fa'}) + (hor ? T(mx, my - 6, t, {a:'middle', s:11, c:GR}) : T(mx - 7, my, t, {a:'middle', s:11, c:GR, r:-90})); };
const bar = (x, y, r=5, c=OR) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${INK}" stroke-width="1"/>`;
const F = A.FIG = {};

/* ---------------- Béton armé : éléments ---------------- */
F['poteau-coupe'] = () => svg(520, 300, `
 <rect x="150" y="40" width="200" height="200" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 <rect x="175" y="65" width="150" height="150" rx="8" fill="none" stroke="${BL}" stroke-width="3"/>
 ${bar(185,75,7)}${bar(315,75,7)}${bar(185,205,7)}${bar(315,205,7)}
 ${Dim(150,262,350,262,'a = 20 cm')}${Dim(372,40,372,240,'b = 20 cm')}
 ${Dim(150,140,175,140,'')}${T(162,132,'c',{a:'middle',s:11,c:ST,b:1})}
 ${Ln(330,90,410,70,{c:GR,w:1})}${T(414,72,'4 HA12 (aciers longitudinaux)',{s:11})}
 ${Ln(255,215,410,230,{c:GR,w:1})}${T(414,233,'Cadre HA6 (armature',{s:11})}${T(414,247,'transversale)',{s:11})}
 ${T(20,60,'Enrobage c :',{b:1,s:12,c:ST})}${T(20,78,'≥ 2,5 cm à l\'intérieur',{s:11})}${T(20,94,'3 cm à l\'extérieur',{s:11})}${T(20,110,'4 à 5 cm en fondation',{s:11})}
 ${T(250,290,'Coupe transversale d\'un poteau 20 × 20',{a:'middle',b:1})}`, 'Coupe d\'un poteau');

F['poteau-elevation'] = () => svg(520, 340, `
 <rect x="0" y="20" width="520" height="34" fill="${CO}" stroke="${INK}"/>${T(10,42,'Poutre / chaînage',{s:11,c:GR})}
 <rect x="0" y="290" width="520" height="30" fill="url(#fh)" stroke="${INK}"/>${T(10,310,'Plancher bas / longrine',{s:11,c:GR})}
 <rect x="210" y="54" width="80" height="236" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(222,30,222,320,{c:OR,w:3})}${Ln(278,30,278,320,{c:OR,w:3})}
 ${[62,70,78,86,94,150,195,240,262,270,278,286].map(y=>Ln(216,y,284,y,{c:BL,w:2})).join('')}
 ${Dim(320,58,320,98,'zone critique')}${Dim(320,98,320,240,'zone courante : e ≤ 15 cm')}${Dim(320,240,320,288,'zone critique')}
 ${T(120,170,'Cadres resserrés',{a:'middle',s:11})}${T(120,185,'aux nœuds (e ≈ 10 cm)',{a:'middle',s:11})}
 ${Ln(170,175,212,82,{c:GR,w:1})}
 ${T(255,335,'Élévation d\'un poteau : aciers continus et cadres',{a:'middle',b:1})}`, 'Élévation d\'un poteau');

F['poutre-coupe'] = () => svg(520, 330, `
 <rect x="180" y="30" width="160" height="260" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 <rect x="202" y="52" width="116" height="216" rx="8" fill="none" stroke="${BL}" stroke-width="3"/>
 ${bar(213,63,6)}${bar(307,63,6)}
 ${bar(214,256,8)}${bar(260,256,8)}${bar(306,256,8)}
 ${Dim(180,308,340,308,'b = 20 cm')}${Dim(140,30,140,290,'h = 40 cm')}${Dim(370,30,370,256,'d ≈ 0,9 h = 36 cm')}
 ${Ln(318,63,430,50,{c:GR,w:1})}${T(434,48,'2 HA10',{s:11})}${T(434,62,'(aciers de montage)',{s:11,c:GR})}
 ${Ln(318,256,430,250,{c:GR,w:1})}${T(434,250,'3 HA12',{s:11})}${T(434,264,'(aciers tendus)',{s:11,c:GR})}
 ${Ln(318,160,430,160,{c:GR,w:1})}${T(434,164,'Cadre HA6',{s:11})}
 ${T(20,140,'Zone comprimée',{s:11,c:BL,b:1})}${T(20,240,'Zone tendue',{s:11,c:ST,b:1})}${T(20,256,'→ les aciers',{s:11,c:GR})}${T(20,270,'reprennent la traction',{s:11,c:GR})}`, 'Coupe d\'une poutre');

F['poutre-elevation'] = () => svg(620, 300, `
 <rect x="20" y="70" width="50" height="200" fill="${CO}" stroke="${INK}"/><rect x="550" y="70" width="50" height="200" fill="${CO}" stroke="${INK}"/>
 <rect x="20" y="70" width="580" height="80" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(30,136,590,136,{c:OR,w:3.5})}${Ln(30,84,190,84,{c:OR,w:3})}${Ln(430,84,590,84,{c:OR,w:3})}${Ln(190,88,430,88,{c:OR,w:1.6,d:'6 4'})}
 ${[80,95,110,125,140,155,170,200,240,280,320,360,400,430,445,460,475,490,505,520,535].map(x=>Ln(x,78,x,142,{c:BL,w:1.8})).join('')}
 ${T(110,60,'Chapeaux sur appui',{a:'middle',s:11,c:OR,b:1})}${T(510,60,'Chapeaux sur appui',{a:'middle',s:11,c:OR,b:1})}
 ${T(310,180,'Aciers inférieurs continus (traction en travée)',{a:'middle',s:11,c:OR,b:1})}
 ${T(310,200,'Cadres resserrés près des appuis (effort tranchant maximal)',{a:'middle',s:11,c:BL})}
 ${Dim(70,240,550,240,'Portée entre nus d\'appuis L')}
 ${T(310,290,'Élévation d\'une poutre sur deux appuis',{a:'middle',b:1})}`, 'Élévation d\'une poutre');

F['dalle-coupe'] = () => svg(620, 260, `
 <rect x="20" y="80" width="60" height="150" fill="${CO}" stroke="${INK}"/><rect x="540" y="80" width="60" height="150" fill="${CO}" stroke="${INK}"/>
 <rect x="20" y="80" width="580" height="50" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(30,118,590,118,{c:OR,w:3})}${[60,110,160,210,260,310,360,410,460,510,560].map(x=>bar(x,112,3.5,BL)).join('')}
 ${Ln(30,90,170,90,{c:OR,w:3})}${Ln(450,90,590,90,{c:OR,w:3})}
 ${Dim(620-10,80,620-10,130,'')}${T(612,108,'e',{s:11,c:GR})}
 ${T(310,60,'Dalle pleine ép. 12 à 16 cm',{a:'middle',b:1})}
 ${T(310,160,'Nappe inférieure : aciers porteurs (sens de la petite portée)',{a:'middle',s:11,c:OR})}
 ${T(310,178,'+ aciers de répartition (points bleus)',{a:'middle',s:11,c:BL})}
 ${T(100,72,'Chapeaux',{a:'middle',s:11,c:OR})}${T(520,72,'Chapeaux',{a:'middle',s:11,c:OR})}
 ${T(310,240,'Enrobage : 2 cm (intérieur) — cales en béton sous la nappe',{a:'middle',s:11,c:ST})}`, 'Coupe d\'une dalle');

F['hourdis'] = () => svg(620, 240, `
 <rect x="20" y="70" width="580" height="30" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>
 ${[0,1,2,3,4].map(k=>{const x=40+k*115;return `<rect x="${x}" y="100" width="12" height="70" fill="${CO}" stroke="${INK}"/><path d="M ${x-6} 170 h 24 v 14 h -24 z" fill="${CO}" stroke="${INK}"/>${bar(x+6,176,3.5)}`+(k<4?`<rect x="${x+18}" y="100" width="91" height="70" fill="#D9CDB8" stroke="${INK}"/>${[0,1,2].map(j=>`<rect x="${x+26+j*28}" y="112" width="20" height="46" rx="3" fill="#FBFAF7" stroke="${GR}"/>`).join('')}`:'');}).join('')}
 ${Ln(25,86,595,86,{c:BL,w:2,d:'10 5'})}
 ${T(310,55,'Table de compression 4 cm + treillis soudé',{a:'middle',s:11,c:BL,b:1})}
 ${T(150,210,'Poutrelle précontrainte ou armée',{a:'middle',s:11})}${T(420,210,'Hourdis (entrevous) de 16',{a:'middle',s:11})}
 ${T(310,232,'Plancher à corps creux « 16 + 4 »',{a:'middle',b:1})}`, 'Plancher à corps creux');

F['semelle'] = () => svg(560, 340, `
 <rect x="0" y="40" width="560" height="270" fill="url(#fsol)" opacity=".5"/>
 <rect x="0" y="0" width="560" height="40" fill="#FBFAF7"/>${Ln(0,40,560,40,{w:2})}${T(10,32,'Terrain naturel',{s:11,c:GR})}
 <rect x="120" y="262" width="320" height="16" fill="#D9D3C7" stroke="${INK}"/>${T(450,276,'Béton de propreté 5 cm',{s:11,c:GR})}
 <rect x="130" y="212" width="300" height="50" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 <rect x="250" y="40" width="60" height="172" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(262,10,262,252,{c:OR,w:3})}${Ln(298,10,298,252,{c:OR,w:3})}${Ln(262,252,232,252,{c:OR,w:3})}${Ln(298,252,328,252,{c:OR,w:3})}
 ${Ln(140,250,420,250,{c:OR,w:3})}${[155,185,215,245,275,305,335,365,395].map(x=>bar(x,244,3.5,BL)).join('')}
 ${[70,110,150,190].map(y=>Ln(256,y,304,y,{c:BL,w:1.8})).join('')}
 ${Dim(130,300,430,300,'A = 80 à 150 cm (selon charge et sol)')}${Dim(470,212,470,262,'h ≥ (A − a)/4')}
 ${Dim(120,262,130,262,'')}${T(70,240,'Enrobage 5 cm',{s:11,c:ST,b:1})}
 ${T(330,100,'Amorce de poteau',{s:11})}${T(330,114,'+ attentes',{s:11})}
 ${T(280,334,'Coupe d\'une semelle isolée sous poteau',{a:'middle',b:1})}`, 'Semelle isolée');

F['semelle-filante'] = () => svg(520, 300, `
 <rect x="0" y="60" width="520" height="210" fill="url(#fsol)" opacity=".5"/>${Ln(0,60,520,60,{w:2})}
 <rect x="130" y="230" width="260" height="14" fill="#D9D3C7" stroke="${INK}"/>
 <rect x="140" y="190" width="240" height="40" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 <rect x="230" y="20" width="60" height="170" fill="#E2DCCF" stroke="${INK}" stroke-width="1.6"/>
 ${[40,70,100,130,160].map(y=>Ln(230,y,290,y,{c:GR,w:1})).join('')}
 ${Ln(150,220,370,220,{c:OR,w:3})}${[170,210,250,290,330,350].map(x=>bar(x,214,3.5,BL)).join('')}
 ${T(300,40,'Mur en agglos pleins',{s:11})}${T(400,214,'Aciers filants',{s:11,c:BL})}${T(400,228,'+ transversaux',{s:11,c:OR})}
 ${Dim(140,262,380,262,'B = 40 à 60 cm')}
 ${T(260,292,'Semelle filante sous mur porteur',{a:'middle',b:1})}`, 'Semelle filante');

F['longrine'] = () => svg(620, 240, `
 <rect x="0" y="40" width="620" height="170" fill="url(#fsol)" opacity=".45"/>${Ln(0,90,620,90,{w:1.5,d:'8 4',c:GR})}${T(8,84,'Niveau du sol',{s:11,c:GR})}
 <rect x="30" y="150" width="120" height="40" fill="${CO}" stroke="${INK}" stroke-width="1.6"/><rect x="470" y="150" width="120" height="40" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>
 <rect x="75" y="40" width="30" height="110" fill="${CO}" stroke="${INK}"/><rect x="515" y="40" width="30" height="110" fill="${CO}" stroke="${INK}"/>
 <rect x="75" y="70" width="470" height="40" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(80,78,540,78,{c:OR,w:2.6})}${Ln(80,102,540,102,{c:OR,w:2.6})}${[120,160,200,240,280,320,360,400,440,480].map(x=>Ln(x,74,x,106,{c:BL,w:1.6})).join('')}
 ${T(310,132,'Longrine 20 × 30 : relie les semelles et porte le soubassement',{a:'middle',s:11,b:1})}
 ${T(90,212,'Semelle',{a:'middle',s:11})}${T(530,212,'Semelle',{a:'middle',s:11})}`, 'Longrine');

F['chainage'] = () => svg(520, 300, `
 ${[0,1,2,3,4,5].map(r=>[0,1,2,3].map(c=>`<rect x="${60+c*100+(r%2?50:0)}" y="${120+r*28}" width="98" height="26" fill="#E2DCCF" stroke="${GR}"/>`).join('')).join('')}
 <rect x="40" y="290" width="440" height="6" fill="${INK}"/>
 <rect x="40" y="70" width="440" height="50" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(48,80,472,80,{c:OR,w:2.6})}${Ln(48,110,472,110,{c:OR,w:2.6})}${[70,110,150,190,230,270,310,350,390,430,460].map(x=>Ln(x,76,x,114,{c:BL,w:1.6})).join('')}
 <rect x="40" y="70" width="40" height="226" fill="${CO}" stroke="${INK}" stroke-width="1.6"/><rect x="440" y="70" width="40" height="226" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>
 ${T(260,58,'Chaînage horizontal 20 × 20 (4 HA10, cadres HA6 / 15 cm)',{a:'middle',s:11,b:1})}
 ${T(60,170,'Poteau',{a:'middle',s:10,r:-90})}${T(460,170,'Poteau',{a:'middle',s:10,r:-90})}
 ${T(260,260,'Mur en agglos creux',{a:'middle',s:11,c:GR})}`, 'Chaînage');

F['escalier'] = () => svg(560, 330, `
 ${(()=>{let s='',x=60,y=290;for(let k=0;k<8;k++){s+=`<path d="M ${x} ${y} v -30 h 50" fill="none" stroke="${INK}" stroke-width="2"/>`;x+=50;y-=30;}return s;})()}
 ${Ln(60,290,460,50,{c:GR,w:1,d:'5 4'})}${Ln(80,318,480,78,{c:INK,w:2})}${Ln(60,290,80,318,{w:2})}
 ${Dim(110,276,160,276,'')}${T(135,268,'g = giron',{a:'middle',s:11,c:OR,b:1})}${Dim(175,260,175,230,'')}${T(200,248,'h',{s:12,c:OR,b:1})}
 ${T(300,250,'Paillasse en béton armé (ép. 12 à 15 cm)',{a:'middle',s:11,r:-31})}
 ${T(380,300,'Formule de Blondel :',{s:12,b:1})}${T(380,318,'60 cm ≤ 2h + g ≤ 64 cm',{s:12,c:BL,b:1})}
 ${T(380,262,'h ≈ 16 à 18 cm',{s:11})}${T(380,278,'g ≈ 26 à 30 cm',{s:11})}`, 'Escalier');

F['enrobage'] = () => svg(560, 260, `
 <rect x="40" y="40" width="200" height="170" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${bar(80,80,8)}${bar(200,80,8)}${bar(80,170,8)}${bar(200,170,8)}
 ${Dim(40,170,72,170,'')}${T(56,196,'c',{a:'middle',s:13,c:ST,b:1})}
 ${T(140,235,'c = distance entre la surface de l\'acier',{a:'middle',s:11})}${T(140,250,'et la paroi la plus proche',{a:'middle',s:11})}
 ${T(290,52,'Enrobages minimaux usuels',{b:1})}
 ${[['Locaux couverts, non exposés','≥ 1,5 à 2,5 cm'],['Dalles intérieures','2 cm'],['Poteaux, poutres intérieurs','2,5 cm'],['Parois exposées aux intempéries','3 cm'],['Éléments en contact avec le sol','4 à 5 cm'],['Bord de mer, milieu agressif','5 cm']].map((r,i)=>T(290,78+i*24,r[0],{s:11})+T(540,78+i*24,r[1],{s:11,a:'end',b:1,c:ST})).join('')}`, 'Enrobage');

F['coupe-type'] = () => svg(600, 460, `
 <rect x="0" y="330" width="600" height="130" fill="url(#fsol)" opacity=".5"/>${Ln(0,330,600,330,{w:2})}${T(8,324,'TN',{s:11,c:GR})}
 <rect x="120" y="420" width="140" height="10" fill="#D9D3C7" stroke="${INK}"/><rect x="130" y="390" width="120" height="30" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>
 <rect x="175" y="300" width="30" height="90" fill="${CO}" stroke="${INK}"/>
 <rect x="170" y="280" width="40" height="30" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>${T(270,298,'Longrine',{s:11})}
 <rect x="175" y="250" width="30" height="30" fill="#E2DCCF" stroke="${INK}"/>${T(270,268,'Soubassement (agglos pleins)',{s:11})}
 <rect x="205" y="258" width="380" height="12" fill="${CO}" stroke="${INK}"/><rect x="205" y="270" width="380" height="20" fill="url(#fh)" stroke="${GR}"/>${T(420,252,'Dallage 8 cm',{s:11})}${T(420,304,'Hérisson 15 cm',{s:11,c:GR})}
 <rect x="175" y="90" width="30" height="160" fill="#E2DCCF" stroke="${INK}"/>${[110,130,150,170,190,210,230].map(y=>Ln(175,y,205,y,{c:GR,w:.8})).join('')}${T(270,170,'Mur en agglos creux de 15 enduit',{s:11})}
 <rect x="170" y="62" width="40" height="28" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>${T(270,80,'Chaînage haut 20 × 20',{s:11})}
 <path d="M 120 70 L 300 20 L 600 20" fill="none" stroke="#B85C38" stroke-width="4"/>${T(330,14,'Couverture tôle sur charpente',{s:11})}
 ${Ln(205,92,585,92,{c:GR,w:2})}${T(420,108,'Faux plafond',{s:11,c:GR})}
 ${Dim(560,258,560,92,'h.s.p. ≈ 2,80 à 3,00 m')}${Dim(90,330,90,420,'0,80 à 1,20 m')}
 ${T(300,452,'Coupe verticale type : de la fondation à la toiture',{a:'middle',b:1})}`, 'Coupe type');

/* ---------------- Mathématiques ---------------- */
F['triangle'] = () => svg(480, 280, `
 <path d="M 80 230 L 400 230 L 400 50 Z" fill="#FFF4E8" stroke="${INK}" stroke-width="2"/>
 <path d="M 380 230 v -20 h 20" fill="none" stroke="${INK}"/>
 <path d="M 130 230 A 50 50 0 0 0 124 206" fill="none" stroke="${OR}" stroke-width="2"/>${T(142,218,'α',{s:15,c:OR,b:1})}
 ${T(240,252,'a : côté adjacent',{a:'middle',s:12})}${T(412,145,'b : côté opposé',{s:12})}${T(215,128,'c : hypoténuse',{a:'middle',s:12,r:-29})}
 ${T(20,30,'c² = a² + b²   (Pythagore)',{s:12,b:1,c:BL})}
 ${T(20,272,'cos α = a/c    sin α = b/c    tan α = b/a',{s:12,b:1,c:OR})}`, 'Triangle rectangle');

F['cercle-trigo'] = () => svg(420, 360, `
 ${Ln(30,180,390,180,{c:GR,w:1,m:'fa'})}${Ln(210,340,210,20,{c:GR,w:1,m:'fa'})}
 <circle cx="210" cy="180" r="140" fill="none" stroke="${INK}" stroke-width="2"/>
 ${Ln(210,180,331,110,{c:OR,w:2.4})}${Ln(331,110,331,180,{c:BL,w:2,d:'5 4'})}${Ln(210,110,331,110,{c:BL,w:1,d:'3 3'})}
 <path d="M 260 180 A 50 50 0 0 0 253 155" fill="none" stroke="${OR}" stroke-width="2"/>${T(266,168,'θ',{s:14,c:OR,b:1})}
 ${bar(331,110,4,OR)}${T(338,104,'M (cos θ ; sin θ)',{s:11})}
 ${T(270,198,'cos θ',{s:11,c:BL})}${T(338,150,'sin θ',{s:11,c:BL})}
 ${T(356,196,'1',{s:11})}${T(196,36,'1',{s:11})}`, 'Cercle trigonométrique');

F['forces'] = () => svg(480, 280, `
 ${bar(120,200,5,INK)}
 ${Ln(120,200,330,200,{c:BL,w:2.6,m:'fb'})}${Ln(120,200,200,70,{c:BL,w:2.6,m:'fb'})}${Ln(120,200,410,70,{c:OR,w:3,m:'fo'})}
 ${Ln(330,200,410,70,{c:GR,w:1,d:'5 4'})}${Ln(200,70,410,70,{c:GR,w:1,d:'5 4'})}
 ${T(230,222,'F₁',{s:14,c:BL,b:1})}${T(140,126,'F₂',{s:14,c:BL,b:1})}${T(280,120,'R = F₁ + F₂',{s:14,c:OR,b:1})}
 ${T(20,30,'Règle du parallélogramme : la résultante est la diagonale',{s:12,b:1})}`, 'Composition de forces');

F['pl'] = () => svg(460, 340, `
 ${Ln(50,300,430,300,{c:INK,w:1.4,m:'fa'})}${Ln(50,300,50,20,{c:INK,w:1.4,m:'fa'})}${T(434,316,'x',{s:13,b:1})}${T(36,24,'y',{s:13,b:1})}
 <path d="M 50 300 L 50 140 L 190 90 L 330 180 L 370 300 Z" fill="rgba(47,111,219,.15)" stroke="${BL}" stroke-width="2"/>
 ${Ln(50,140,330,40,{c:GR,w:1,d:'4 3'})}${Ln(130,40,400,300,{c:GR,w:1,d:'4 3'})}${Ln(300,40,390,320,{c:GR,w:1,d:'4 3'})}
 ${bar(190,90,5,OR)}${T(198,82,'Optimum (sommet)',{s:11,c:OR,b:1})}
 ${Ln(60,330,280,40,{c:OR,w:1.4,d:'8 5'})}${T(240,330,'Droite d\'iso-profit Z = cte',{s:11,c:OR})}
 ${T(140,240,'Domaine des',{a:'middle',s:12,c:BL,b:1})}${T(140,256,'solutions réalisables',{a:'middle',s:12,c:BL,b:1})}`, 'Programmation linéaire');

F['pert'] = () => svg(600, 240, `
 ${[[50,120,'1'],[190,60,'2'],[190,180,'3'],[340,120,'4'],[480,60,'5'],[560,150,'6']].map(n=>`<circle cx="${n[0]}" cy="${n[1]}" r="20" fill="#fff" stroke="${INK}" stroke-width="2"/>${T(n[0],n[1]+5,n[2],{a:'middle',b:1})}`).join('')}
 ${Ln(70,112,170,68,{m:'fa',c:ST,w:2.4})}${Ln(70,128,170,172,{m:'fa'})}${Ln(210,68,320,112,{m:'fa',c:ST,w:2.4})}${Ln(210,172,320,128,{m:'fa'})}${Ln(360,112,460,68,{m:'fa'})}${Ln(360,128,540,148,{m:'fa',c:ST,w:2.4})}${Ln(500,68,545,135,{m:'fa'})}
 ${T(110,80,'A (3 j)',{s:11})}${T(105,170,'B (2 j)',{s:11})}${T(270,80,'C (5 j)',{s:11})}${T(260,168,'D (4 j)',{s:11})}${T(400,78,'E (2 j)',{s:11})}${T(440,155,'F (6 j)',{s:11})}${T(530,98,'G (1 j)',{s:11})}
 ${T(300,225,'Chemin critique en rouge : A → C → F (14 jours)',{a:'middle',s:12,c:ST,b:1})}`, 'Réseau PERT');

F['gantt'] = () => svg(620, 260, `
 ${['Installation','Terrassement','Fondations','Élévation','Toiture','Second œuvre','Finitions'].map((t,i)=>T(10,46+i*28,t,{s:11})).join('')}
 ${[0,1,2,3,4,5,6,7,8,9,10,11,12].map(k=>Ln(130+k*36,24,130+k*36,236,{c:'#E3DFD7',w:1})+T(130+k*36+18,18,'S'+(k+1),{a:'middle',s:9,c:GR})).join('')}
 ${[[0,1],[1,1],[2,2],[3,3],[6,2],[7,3],[10,3]].map((b,i)=>`<rect x="${130+b[0]*36}" y="${32+i*28}" width="${b[1]*36}" height="18" rx="4" fill="${i===2||i===3||i===5?ST:OR}" opacity=".85"/>`).join('')}
 ${T(310,254,'Diagramme de Gantt (en rouge : tâches critiques)',{a:'middle',s:11,b:1})}`, 'Diagramme de Gantt');

/* ---------------- RDM / MMC ---------------- */
F['moments'] = () => svg(600, 380, `
 ${Ln(60,80,540,80,{w:5})}<path d="M 60 80 l -14 24 h 28 z" fill="none" stroke="${INK}" stroke-width="1.6"/><circle cx="540" cy="92" r="11" fill="none" stroke="${INK}" stroke-width="1.6"/>${Ln(520,104,560,104)}
 ${[80,120,160,200,240,280,320,360,400,440,480,520].map(x=>Ln(x,30,x,72,{c:BL,w:1.4,m:'fb'})).join('')}${Ln(60,30,540,30,{c:BL,w:1.4})}${T(300,22,'q (kN/m)',{a:'middle',s:12,c:BL,b:1})}
 ${Dim(60,120,540,120,'L')}
 ${Ln(60,200,540,200,{c:GR,w:1})}<path d="M 60 160 L 540 240" fill="none" stroke="${OR}" stroke-width="2.4"/>${T(66,152,'V = + qL/2',{s:11,c:OR,b:1})}${T(470,256,'− qL/2',{s:11,c:OR,b:1})}${T(14,204,'V',{s:13,b:1})}
 ${Ln(60,290,540,290,{c:GR,w:1})}<path d="M 60 290 Q 300 410 540 290" fill="rgba(47,111,219,.12)" stroke="${BL}" stroke-width="2.4"/>${T(300,368,'M max = qL²/8 à mi-portée',{a:'middle',s:12,c:BL,b:1})}${T(14,294,'M',{s:13,b:1})}`, 'Poutre sur deux appuis');

F['console'] = () => svg(560, 300, `
 <rect x="40" y="40" width="30" height="110" fill="url(#fh)" stroke="${INK}"/>${Ln(70,90,480,90,{w:5})}${Ln(480,20,480,82,{c:OR,w:2.6,m:'fo'})}${T(488,36,'P',{s:14,c:OR,b:1})}
 ${Dim(70,120,480,120,'L')}
 ${Ln(70,200,480,200,{c:GR,w:1})}<path d="M 70 200 L 70 280 L 480 200 Z" fill="rgba(47,111,219,.12)" stroke="${BL}" stroke-width="2.2"/>${T(80,296,'M max = − P·L (à l\'encastrement)',{s:12,c:BL,b:1})}`, 'Console');

F['traction'] = () => svg(620, 300, `
 ${Ln(50,260,290,260,{m:'fa'})}${Ln(50,260,50,30,{m:'fa'})}${T(280,280,'ε',{s:13})}${T(30,40,'σ',{s:13})}
 <path d="M 50 260 L 110 100 L 280 100" fill="none" stroke="${OR}" stroke-width="2.6"/>${T(120,92,'fe (palier plastique)',{s:11,c:OR})}${T(60,190,'E = 200 000 MPa',{s:11,r:-69})}
 ${T(170,24,'Acier (HA Fe E500)',{a:'middle',b:1})}
 ${Ln(350,260,600,260,{m:'fa'})}${Ln(350,260,350,30,{m:'fa'})}${T(592,280,'ε',{s:13})}${T(330,40,'σ',{s:13})}
 <path d="M 350 260 Q 410 110 460 110 L 560 110" fill="none" stroke="${BL}" stroke-width="2.6"/>${T(462,102,'0,85 fc28/γb',{s:11,c:BL})}${T(460,276,'2 ‰',{a:'middle',s:10,c:GR})}${T(560,276,'3,5 ‰',{a:'middle',s:10,c:GR})}${Ln(460,110,460,260,{c:GR,w:1,d:'3 3'})}${Ln(560,110,560,260,{c:GR,w:1,d:'3 3'})}
 ${T(470,24,'Béton : parabole-rectangle',{a:'middle',b:1})}`, 'Lois de comportement');

F['flambement'] = () => svg(600, 300, `
 ${[[80,'L₀ = 2L','Encastré – libre'],[230,'L₀ = L','Articulé – articulé'],[380,'L₀ = 0,7L','Encastré – articulé'],[530,'L₀ = 0,5L','Encastré – encastré']].map((c,i)=>`
  <rect x="${c[0]-30}" y="250" width="60" height="10" fill="url(#fh)" stroke="${INK}"/>
  ${i===1||i===2?`<rect x="${c[0]-30}" y="30" width="60" height="10" fill="url(#fh)" stroke="${INK}"/>`:''}${i===3?`<rect x="${c[0]-30}" y="30" width="60" height="10" fill="url(#fh)" stroke="${INK}"/>`:''}
  <path d="M ${c[0]} 250 ${i===0?`Q ${c[0]} 150 ${c[0]+30} 50`:i===1?`Q ${c[0]+40} 145 ${c[0]} 40`:i===2?`Q ${c[0]+35} 110 ${c[0]} 40`:`C ${c[0]} 200 ${c[0]+40} 145 ${c[0]+10} 145 S ${c[0]} 90 ${c[0]} 40`}" fill="none" stroke="${OR}" stroke-width="2.4"/>
  ${Ln(c[0],250,c[0],40,{c:GR,w:1,d:'4 4'})}${T(c[0],280,c[1],{a:'middle',s:12,b:1,c:BL})}${T(c[0],296,c[2],{a:'middle',s:10,c:GR})}`).join('')}`, 'Longueurs de flambement');

F['mohr'] = () => svg(560, 300, `
 ${Ln(40,250,540,250,{m:'fa'})}${Ln(60,270,60,20,{m:'fa'})}${T(530,270,'σ',{s:13})}${T(40,30,'τ',{s:13})}
 <path d="M 200 250 A 110 110 0 0 1 420 250" fill="rgba(47,111,219,.12)" stroke="${BL}" stroke-width="2.2"/>
 ${Ln(60,180,520,60,{c:ST,w:2.4})}${T(400,70,'τ = c + σ·tan φ',{s:12,c:ST,b:1})}
 ${T(62,176,'c',{s:13,c:ST,b:1})}<path d="M 140 159 A 40 40 0 0 0 146 177" fill="none" stroke="${ST}"/>${T(150,170,'φ',{s:13,c:ST,b:1})}
 ${T(200,268,'σ₃',{a:'middle',s:12})}${T(420,268,'σ₁',{a:'middle',s:12})}
 ${T(310,132,'Cercle de Mohr à la rupture',{a:'middle',s:11,c:BL})}`, 'Critère de Mohr-Coulomb');

/* ---------------- Géotechnique ---------------- */
F['granulo'] = () => svg(600, 320, `
 ${Ln(60,270,570,270,{m:'fa'})}${Ln(60,270,60,20,{m:'fa'})}${T(16,36,'% passant',{s:11})}${T(560,292,'d (mm, échelle log)',{a:'end',s:11})}
 ${['0,08','0,2','0,5','1','2','5','10','20'].map((t,i)=>Ln(80+i*65,266,80+i*65,274,{w:1})+T(80+i*65,288,t,{a:'middle',s:10,c:GR})).join('')}
 ${[0,25,50,75,100].map(p=>T(52,270-p*2.4+4,p,{a:'end',s:10,c:GR})+Ln(60,270-p*2.4,570,270-p*2.4,{c:'#ECE8E1',w:1})).join('')}
 <path d="M 80 262 C 160 250 220 200 280 150 S 380 60 470 34 L 540 30" fill="none" stroke="${OR}" stroke-width="2.6"/>${T(330,120,'Sable bien gradué',{s:11,c:OR,b:1})}
 <path d="M 80 268 C 300 268 330 250 360 150 S 400 40 450 30" fill="none" stroke="${BL}" stroke-width="2.4" stroke-dasharray="7 4"/>${T(430,190,'Sable uniforme',{s:11,c:BL,b:1})}`, 'Courbe granulométrique');

F['proctor'] = () => svg(560, 300, `
 ${Ln(60,260,520,260,{m:'fa'})}${Ln(60,260,60,30,{m:'fa'})}${T(500,282,'w (%)',{s:12})}${T(20,40,'γd',{s:13})}
 <path d="M 90 220 Q 260 40 470 210" fill="none" stroke="${OR}" stroke-width="2.6"/>
 ${Ln(270,128,270,260,{c:GR,w:1,d:'4 4'})}${Ln(60,128,270,128,{c:GR,w:1,d:'4 4'})}${bar(270,128,5,OR)}
 ${T(270,278,'w OPN',{a:'middle',s:11,b:1})}${T(66,120,'γd max',{s:11,b:1})}
 <path d="M 200 60 Q 360 130 500 170" fill="none" stroke="${BL}" stroke-width="1.6" stroke-dasharray="6 4"/>${T(430,140,'Courbe de saturation',{s:11,c:BL})}`, 'Courbe Proctor');

F['tassement'] = () => svg(560, 280, `
 ${Ln(60,40,520,40,{m:'fa'})}${Ln(60,40,60,260,{m:'fa'})}${T(500,30,'temps (log)',{s:11})}${T(14,250,'tassement',{s:11})}
 <path d="M 60 50 C 180 54 240 90 300 170 S 420 220 520 228" fill="none" stroke="${OR}" stroke-width="2.6"/>
 ${T(200,120,'Consolidation primaire',{s:11,c:OR,b:1})}${T(400,250,'Compression secondaire (fluage)',{s:11,c:GR})}`, 'Courbe de consolidation');

F['fondations-types'] = () => svg(620, 260, `
 <rect x="0" y="80" width="620" height="180" fill="url(#fsol)" opacity=".45"/>${Ln(0,80,620,80,{w:2})}
 <rect x="50" y="40" width="20" height="90" fill="${CO}" stroke="${INK}"/><rect x="25" y="130" width="70" height="24" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>${T(60,190,'Semelle isolée',{a:'middle',s:11,b:1})}
 <rect x="185" y="40" width="20" height="100" fill="#E2DCCF" stroke="${INK}"/><rect x="165" y="140" width="60" height="18" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>${T(195,190,'Semelle filante',{a:'middle',s:11,b:1})}
 <rect x="290" y="110" width="150" height="22" fill="${CO}" stroke="${INK}" stroke-width="1.6"/>${[310,365,420].map(x=>`<rect x="${x-8}" y="40" width="16" height="70" fill="${CO}" stroke="${INK}"/>`).join('')}${T(365,190,'Radier général',{a:'middle',s:11,b:1})}
 <rect x="510" y="40" width="20" height="60" fill="${CO}" stroke="${INK}"/><rect x="490" y="100" width="60" height="16" fill="${CO}" stroke="${INK}"/>${[500,540].map(x=>`<rect x="${x-6}" y="116" width="12" height="130" fill="${CO}" stroke="${INK}"/>`).join('')}${T(520,190,'Pieux',{a:'end',s:11,b:1})}
 ${T(310,30,'Fondations superficielles → profondes selon la portance du sol',{a:'middle',s:12,b:1})}`, 'Types de fondations');

F['bulbe'] = () => svg(520, 300, `
 <rect x="0" y="60" width="520" height="240" fill="url(#fsol)" opacity=".35"/>${Ln(0,60,520,60,{w:2})}
 <rect x="200" y="50" width="120" height="22" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${[0.8,0.6,0.4,0.2].map((k,i)=>`<path d="M 200 72 C ${200-40-i*40} ${100+i*50} ${320+40+i*40} ${100+i*50} 320 72" fill="none" stroke="${BL}" stroke-width="1.6"/>${T(260,110+i*52,Math.round(k*100)+' %',{a:'middle',s:10,c:BL})}`).join('')}
 ${T(260,290,'Bulbe des contraintes sous une semelle (isobares en % de q)',{a:'middle',s:11,b:1})}`, 'Bulbe de contraintes');

/* ---------------- Topographie ---------------- */
F['nivellement'] = () => svg(620, 300, `
 <path d="M 0 250 Q 300 230 620 180 L 620 300 L 0 300 Z" fill="#EFE8DA" stroke="${INK}" stroke-width="1.6"/>
 <rect x="76" y="80" width="8" height="166" fill="#FFF" stroke="${INK}"/>${[0,1,2,3,4,5,6,7].map(k=>`<rect x="76" y="${80+k*20}" width="8" height="10" fill="${ST}"/>`).join('')}${T(80,72,'Mire A',{a:'middle',s:11,b:1})}
 <rect x="526" y="40" width="8" height="150" fill="#FFF" stroke="${INK}"/>${[0,1,2,3,4,5,6].map(k=>`<rect x="526" y="${40+k*20}" width="8" height="10" fill="${ST}"/>`).join('')}${T(530,32,'Mire B',{a:'middle',s:11,b:1})}
 ${Ln(300,120,300,236,{w:2})}${Ln(285,236,315,236)}${Ln(300,236,280,262)}${Ln(300,236,320,262)}<rect x="270" y="108" width="60" height="16" rx="4" fill="${INK}"/>${T(300,100,'Niveau',{a:'middle',s:11,b:1})}
 ${Ln(84,116,526,116,{c:OR,w:1.6,d:'8 4'})}${T(300,148,'ligne de visée horizontale',{a:'middle',s:10,c:OR})}
 ${Dim(110,116,110,242,'L.AR = 1,85')}${Dim(560,116,560,186,'L.AV = 0,92')}
 ${T(310,290,'ΔH(A→B) = Lecture arrière − Lecture avant = 1,85 − 0,92 = + 0,93 m',{a:'middle',s:12,b:1,c:BL})}`, 'Nivellement direct');

F['gisement'] = () => svg(460, 340, `
 ${Ln(120,300,120,30,{m:'fa',w:1.6})}${T(120,22,'Nord (Y)',{a:'middle',s:12,b:1})}${Ln(120,300,430,300,{m:'fa',w:1.6})}${T(430,320,'Est (X)',{a:'end',s:12,b:1})}
 ${bar(120,300,5,INK)}${T(100,318,'A',{s:13,b:1})}${bar(360,110,5,OR)}${T(368,104,'B',{s:13,b:1})}
 ${Ln(120,300,360,110,{c:OR,w:2.4})}
 <path d="M 120 220 A 80 80 0 0 1 182 251" fill="none" stroke="${BL}" stroke-width="2" marker-end="url(#fb)"/>${T(160,214,'G(AB)',{s:12,c:BL,b:1})}
 ${Ln(360,110,360,300,{c:GR,w:1,d:'4 4'})}${T(240,322,'ΔX',{a:'middle',s:12})}${T(372,210,'ΔY',{s:12})}
 ${T(230,60,'tan G = ΔX / ΔY',{s:12,b:1,c:BL})}${T(230,80,'D = √(ΔX² + ΔY²)',{s:12,b:1,c:BL})}`, 'Gisement');

F['implantation'] = () => svg(600, 320, `
 <rect x="150" y="90" width="300" height="160" fill="#FFF4E8" stroke="${INK}" stroke-width="1.6" stroke-dasharray="8 4"/>
 ${[[150,90],[450,90],[150,250],[450,250]].map(p=>{const dx=p[0]<300?-1:1, dy=p[1]<170?-1:1; const x=p[0]+dx*60, y=p[1]+dy*50;
  return `<path d="M ${x} ${y-dy*40} L ${x} ${y} L ${x-dx*50} ${y}" fill="none" stroke="#8B5A2B" stroke-width="5"/>${Ln(x,y-dy*40,x,y-dy*48,{w:2})}${Ln(x-dx*50,y,x-dx*58,y,{w:2})}`}).join('')}
 ${Ln(70,90,530,90,{c:OR,w:1.4})}${Ln(70,250,530,250,{c:OR,w:1.4})}${Ln(150,20,150,300,{c:OR,w:1.4})}${Ln(450,20,450,300,{c:OR,w:1.4})}
 ${T(300,175,'Emprise du bâtiment',{a:'middle',s:12,b:1})}${T(300,194,'Contrôle : diagonales égales',{a:'middle',s:11,c:BL})}
 ${Ln(150,90,450,250,{c:BL,w:1,d:'4 4'})}${Ln(450,90,150,250,{c:BL,w:1,d:'4 4'})}
 ${T(78,40,'Chaise d\'implantation',{s:11,c:'#8B5A2B',b:1})}${T(470,312,'Cordeaux (axes des murs)',{s:11,c:OR,b:1})}`, 'Implantation');

/* ---------------- Physique du bâtiment ---------------- */
F['paroi'] = () => svg(600, 300, `
 <rect x="150" y="40" width="40" height="220" fill="#E8E2D6" stroke="${INK}"/><rect x="190" y="40" width="160" height="220" fill="#D9CDB8" stroke="${INK}"/><rect x="350" y="40" width="90" height="220" fill="#F6E7A8" stroke="${INK}"/><rect x="440" y="40" width="30" height="220" fill="#E8E2D6" stroke="${INK}"/>
 ${T(170,280,'enduit',{a:'middle',s:10})}${T(270,280,'agglo / brique',{a:'middle',s:10})}${T(395,280,'isolant',{a:'middle',s:10})}${T(455,280,'plâtre',{a:'middle',s:10})}
 <path d="M 60 70 L 150 78 L 190 92 L 350 140 L 440 228 L 470 232 L 560 236" fill="none" stroke="${ST}" stroke-width="2.6"/>
 ${T(70,62,'θe = 35 °C (extérieur)',{s:11,c:ST,b:1})}${T(470,226,'θi = 25 °C',{s:11,c:ST,b:1})}
 ${T(300,24,'Profil de température : la chute est forte dans l\'isolant (R élevé)',{a:'middle',s:11,b:1})}`, 'Paroi multicouche');

F['pont-thermique'] = () => svg(520, 300, `
 <rect x="200" y="20" width="60" height="260" fill="#D9CDB8" stroke="${INK}"/><rect x="260" y="120" width="260" height="40" fill="${CO}" stroke="${INK}"/><rect x="200" y="120" width="60" height="40" fill="${CO}" stroke="${INK}"/>
 <rect x="170" y="20" width="30" height="260" fill="#F6E7A8" stroke="${INK}"/>
 ${[60,90,190,220,250].map(y=>Ln(40,y,166,y,{c:ST,w:1.6,m:'fa'})).join('')}${Ln(40,140,196,140,{c:ST,w:3.2})}${Ln(196,140,320,140,{c:ST,w:3.2,m:'fa'})}
 ${T(40,40,'Flux de chaleur',{s:11,c:ST,b:1})}${T(380,110,'Dalle en béton',{s:11})}${T(330,190,'Le béton traverse l\'isolant :',{s:11,b:1})}${T(330,206,'pont thermique (fuite de chaleur,',{s:11})}${T(330,222,'risque de condensation)',{s:11})}`, 'Pont thermique');

F['loi-masse'] = () => svg(560, 300, `
 ${Ln(60,260,520,260,{m:'fa'})}${Ln(60,260,60,30,{m:'fa'})}${T(512,282,'masse surfacique m (kg/m², log)',{a:'end',s:11})}${T(20,40,'R (dB)',{s:11})}
 <path d="M 70 230 L 500 70" fill="none" stroke="${BL}" stroke-width="2.6"/>${T(300,120,'+ 6 dB quand la masse double',{s:12,c:BL,b:1,r:-20})}
 ${[[110,'50'],[230,'100'],[350,'200'],[470,'400']].map(p=>Ln(p[0],256,p[0],264)+T(p[0],278,p[1],{a:'middle',s:10,c:GR})).join('')}
 ${T(300,24,'Loi de masse : une paroi lourde isole mieux des bruits aériens',{a:'middle',s:11,b:1})}`, 'Loi de masse');

F['bernoulli'] = () => svg(620, 260, `
 <path d="M 20 120 L 220 120 L 320 150 L 600 150 L 600 190 L 320 190 L 220 220 L 20 220 Z" fill="#E4EDFC" stroke="${INK}" stroke-width="2"/>
 ${Ln(40,170,180,170,{c:BL,w:2,m:'fb'})}${Ln(380,170,560,170,{c:BL,w:3.4,m:'fb'})}${T(110,160,'v₁ faible',{a:'middle',s:11,c:BL})}${T(470,162,'v₂ élevée',{a:'middle',s:11,c:BL})}
 <rect x="110" y="30" width="16" height="90" fill="#fff" stroke="${INK}"/><rect x="111" y="50" width="14" height="70" fill="${BL}" opacity=".5"/>
 <rect x="460" y="30" width="16" height="120" fill="#fff" stroke="${INK}"/><rect x="461" y="100" width="14" height="50" fill="${BL}" opacity=".5"/>
 ${T(160,60,'p₁ élevée',{s:11})}${T(490,96,'p₂ plus faible',{s:11})}
 ${T(310,250,'p + ½ρv² + ρgz = constante le long d\'une ligne de courant',{a:'middle',s:12,b:1})}`, 'Théorème de Bernoulli');

F['hydrostatique'] = () => svg(520, 300, `
 <rect x="120" y="40" width="200" height="220" fill="#E4EDFC" stroke="none"/><rect x="320" y="20" width="24" height="250" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 ${Ln(120,40,320,40,{c:BL,w:1.4,d:'6 4'})}${T(200,34,'surface libre',{a:'middle',s:11,c:BL})}
 <path d="M 344 40 L 344 260 L 470 260 Z" fill="rgba(232,117,42,.15)" stroke="${OR}" stroke-width="2"/>
 ${[90,140,190,240].map(y=>Ln(344+(y-40)*126/220,y,348,y,{c:OR,w:1.4,m:'fo'})).join('')}
 ${T(420,284,'p = ρ·g·h',{a:'middle',s:13,c:OR,b:1})}${Dim(100,40,100,260,'h')}${T(440,150,'Poussée',{s:11,c:OR})}${T(440,166,'F = ρ g h² / 2',{s:11,c:OR,b:1})}`, 'Pression hydrostatique');

F['treillis'] = () => svg(600, 240, `
 ${(()=>{const xs=[60,180,300,420,540];let s=Ln(60,190,540,190,{w:3})+Ln(180,70,420,70,{w:3});s+=Ln(60,190,180,70,{w:3})+Ln(420,70,540,190,{w:3});s+=Ln(180,70,180,190,{w:2})+Ln(300,70,300,190,{w:2})+Ln(420,70,420,190,{w:2});s+=Ln(180,190,300,70,{w:2})+Ln(420,190,300,70,{w:2});xs.forEach(x=>s+=`<circle cx="${x}" cy="190" r="5" fill="#fff" stroke="${INK}" stroke-width="2"/>`);[180,300,420].forEach(x=>s+=`<circle cx="${x}" cy="70" r="5" fill="#fff" stroke="${INK}" stroke-width="2"/>`);return s;})()}
 <path d="M 60 196 l -12 20 h 24 z" fill="none" stroke="${INK}"/><circle cx="540" cy="204" r="8" fill="none" stroke="${INK}"/>
 ${[180,300,420].map(x=>Ln(x,20,x,62,{c:OR,w:2,m:'fo'})).join('')}${T(300,16,'charges aux nœuds',{a:'middle',s:11,c:OR})}
 ${T(300,232,'Ferme en treillis : barres tendues ou comprimées uniquement',{a:'middle',s:11,b:1})}`, 'Treillis');

/* ---------------- Physique du bâtiment ---------------- */
F['soleil'] = () => svg(560, 300, `
 <rect x="0" y="250" width="560" height="18" fill="url(#fsol)"/>${Ln(0,250,560,250,{w:2})}
 <rect x="230" y="200" width="100" height="50" fill="${CO}" stroke="${INK}" stroke-width="2"/><path d="M 220 200 L 280 172 L 340 200 Z" fill="#D9C9A8" stroke="${INK}" stroke-width="2"/>
 ${[[188,48,'#E8A33A'],[294,40,'#E8752A'],[376,66,'#C8363B']].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="13" fill="${c}" stroke="${INK}"/>`+Ln(x,y+12,280,170,{c:c,w:2,d:'6 4',m:'fo'})).join('')}
 ${T(168,44,'21 juin : 72°',{a:'end',s:11,b:1})}${T(168,58,'soleil au nord',{a:'end',s:10,c:GR})}
 ${T(294,16,'Équinoxes : 85° (presque au zénith)',{a:'middle',s:11,b:1})}
 ${T(396,62,'21 décembre : 61°',{s:11,b:1})}${T(396,76,'soleil au sud',{s:10,c:GR})}
 ${T(14,240,'NORD',{b:1,s:12})}${T(546,240,'SUD',{b:1,s:12,a:'end'})}
 ${T(280,290,'Hauteur du soleil à midi à Abidjan (latitude 5,3° N) : h = 90° − |φ − δ|',{a:'middle',s:11,b:1})}`, 'Course du soleil à midi');

F['debord'] = () => svg(520, 300, `
 <rect x="150" y="30" width="40" height="240" fill="${CO}" stroke="${INK}" stroke-width="2"/>
 <rect x="150" y="120" width="40" height="100" fill="#E4EDFC" stroke="${INK}"/>${T(170,174,'baie',{a:'middle',s:10,r:-90})}
 <rect x="190" y="96" width="120" height="14" fill="${CO}" stroke="${INK}" stroke-width="2"/>${T(250,90,'débord (auvent)',{a:'middle',s:11})}
 ${Ln(420,-12,190,220,{c:OR,w:2.4,m:'fo'})}${T(400,40,'rayon solaire',{s:11,c:OR})}
 <path d="M 270 220 A 80 80 0 0 0 251 168" fill="none" stroke="${OR}" stroke-width="1.6"/>${T(282,196,'h',{s:13,c:OR,b:1})}${Ln(190,220,330,220,{c:GR,w:1,d:'4 3'})}
 ${Dim(190,282,310,282,'d')}${Dim(120,110,120,220,'H')}
 ${T(430,240,'Baie entièrement à l\'ombre si',{a:'middle',s:11})}${T(430,258,'d ≥ H / tan h',{a:'middle',s:14,b:1,c:ST})}
 ${T(260,20,'Coupe perpendiculaire à la façade',{a:'middle',s:11,b:1})}`, 'Dimensionnement d\'un débord');
/* ---------------- Dessin technique et architectural ---------------- */
const Rt = (x, y, w, h, o={}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${o.rx?`rx="${o.rx}"`:''} fill="${o.f||'none'}" stroke="${o.c||INK}" stroke-width="${o.w||1.4}" ${o.d?`stroke-dasharray="${o.d}"`:''}/>`;
const Pa = (d, o={}) => `<path d="${d}" fill="${o.f||'none'}" stroke="${o.c||INK}" stroke-width="${o.w||1.4}" stroke-linejoin="round" ${o.d?`stroke-dasharray="${o.d}"`:''}/>`;
const tick = (x, y) => Ln(x - 5, y + 5, x + 5, y - 5, {w:1.8});
const lvl = (x, y, t, o={}) => Ln(x - 30, y, x + 40, y, {c:GR, w:1}) + Pa(`M ${x} ${y} L ${x - 6} ${y - 9} L ${x + 6} ${y - 9} Z`, {f:o.f || 'none', w:1.2}) + T(x + 10, y - 3, t, {s:11, b:1, c:o.c || INK});

F['formats'] = () => svg(560, 390, `
 ${Rt(40,20,480,340,{w:2.6})}${Rt(40,20,240,340,{w:1.6})}${Rt(280,20,240,170,{w:1.6})}${Rt(280,190,120,170,{w:1.6})}${Rt(400,190,120,85,{w:1.6})}${Rt(400,275,120,85,{w:1.6})}
 ${T(160,180,'A1',{a:'middle',s:26,b:1,c:BL})}${T(160,202,'594 × 841 mm',{a:'middle',s:12})}
 ${T(400,100,'A2',{a:'middle',s:22,b:1,c:BL})}${T(400,120,'420 × 594 mm',{a:'middle',s:12})}
 ${T(340,270,'A3',{a:'middle',s:18,b:1,c:BL})}${T(340,288,'297 × 420',{a:'middle',s:11})}
 ${T(460,230,'A4',{a:'middle',s:15,b:1,c:BL})}${T(460,246,'210 × 297',{a:'middle',s:10})}
 ${T(460,315,'A4',{a:'middle',s:15,b:1,c:BL})}${T(460,331,'210 × 297',{a:'middle',s:10})}
 ${T(280,382,'A0 = 841 × 1 189 mm (1 m²) · chaque format est la moitié du précédent · côtés dans le rapport √2',{a:'middle',s:11,b:1})}`, 'Formats normalisés de la série A');

F['cartouche'] = () => svg(600, 370, `
 ${Rt(10,10,580,345,{c:GR,w:1})}${Rt(40,22,538,321,{w:2.6})}
 ${Dim(10,40,40,40,'')}${T(25,58,'20',{a:'middle',s:10,c:GR})}${T(48,40,'marge de reliure (20 mm)',{s:10,c:GR})}
 <g opacity=".55">${Rt(80,60,220,150,{w:2.2})}${Ln(80,130,190,130,{w:2.2})}${Ln(190,60,190,175,{w:2.2})}${T(130,100,'Séjour',{a:'middle',s:11})}${T(245,100,'Chambre',{a:'middle',s:11})}</g>
 ${T(190,240,'zone de dessin',{a:'middle',s:12,c:GR})}
 <circle cx="520" cy="70" r="18" fill="none" stroke="${INK}"/>${Pa('M 520 52 L 512 80 L 520 74 L 528 80 Z',{f:INK,w:1})}${T(520,46,'N',{a:'middle',s:12,b:1})}
 ${Rt(338,233,240,110,{w:2.2})}${Ln(338,258,578,258,{w:1})}${Ln(338,292,578,292,{w:1})}${Ln(338,317,578,317,{w:1})}${Ln(478,292,478,343,{w:1})}
 ${T(344,250,'Projet : villa R+1 — lot 245, Cocody',{s:11})}
 ${T(458,282,'PLAN DU REZ-DE-CHAUSSÉE',{a:'middle',s:14,b:1})}
 ${T(344,309,'Échelle : 1/50',{s:11,b:1})}${T(484,309,'Date : 07/10/2026',{s:10})}
 ${T(344,334,'Dessiné : K. Yao',{s:10})}${T(484,334,'Plan A-02 · indice B',{s:10,b:1})}
 ${Ln(250,300,332,300,{c:OR,w:1.2,m:'fo'})}${T(60,284,'cartouche : en bas à droite,',{s:11,c:OR,b:1})}${T(60,300,'lisible une fois le plan plié en A4',{s:11,c:OR,b:1})}
 ${Ln(560,150,578,150,{c:OR,w:1.2,m:'fo'})}${T(556,146,'cadre en trait fort',{a:'end',s:11,c:OR})}${T(556,160,'(bord de feuille en trait fin)',{a:'end',s:10,c:GR})}`, 'Cadre et cartouche');

F['traits'] = () => svg(600, 268, `
 ${Ln(30,30,230,30,{w:2.8})}${Ln(30,70,230,70,{w:1})}${Ln(30,110,230,110,{w:1.3,d:'10 5'})}${Ln(30,150,230,150,{w:1,d:'22 4 2 4'})}
 ${Ln(30,190,62,190,{w:2.8})}${Ln(62,190,198,190,{w:1,d:'22 4 2 4'})}${Ln(198,190,230,190,{w:2.8})}${Ln(34,190,34,174,{w:1.4,m:'fa'})}${Ln(226,190,226,174,{w:1.4,m:'fa'})}${T(22,178,'A',{s:12,b:1})}${T(236,178,'A',{s:12,b:1})}
 ${Pa('M 30 230 L 112 230 L 118 220 L 126 240 L 132 230 L 230 230',{w:1})}
 ${[['Continu fort (0,5 à 0,7 mm)','contours et arêtes vus, murs coupés en plan et en coupe'],['Continu fin (0,13 à 0,25 mm)','lignes de cote et d\'attache, hachures, mobilier, carrelage'],['Interrompu fin','contours et arêtes cachés (non vus)'],['Mixte fin (trait-point)','axes, plans de symétrie, trajectoires'],['Mixte fin, fort aux extrémités','trace d\'un plan de coupe (flèches = sens d\'observation)'],['Continu fin avec zigzag','limite d\'une vue partielle ou d\'une coupe interrompue']].map((r,i)=>T(256,34+40*i,r[0],{s:12,b:1})+T(256,50+40*i,r[1],{s:11,c:GR})).join('')}`, 'Types de traits');

F['cotation'] = () => svg(600, 300, `
 ${T(150,26,'Dessin industriel : flèches, cotes en mm',{a:'middle',s:12,b:1})}
 ${Rt(40,70,200,100,{w:2.6})}
 ${Ln(40,175,40,228,{c:GR,w:1})}${Ln(240,175,240,228,{c:GR,w:1})}${Ln(40,218,240,218,{w:1,m:'fa',ms:'fa'})}${T(140,212,'200',{a:'middle',s:13,b:1})}
 ${Ln(245,70,298,70,{c:GR,w:1})}${Ln(245,170,298,170,{c:GR,w:1})}${Ln(288,70,288,170,{w:1,m:'fa',ms:'fa'})}${T(281,120,'100',{a:'middle',s:13,b:1,r:-90})}
 ${Ln(70,262,42,224,{c:OR,w:1,m:'fo'})}${T(74,268,'ligne d\'attache',{s:11,c:OR})}
 ${Ln(176,252,176,222,{c:OR,w:1,m:'fo'})}${T(150,262,'ligne de cote',{s:11,c:OR})}
 ${T(160,212,'← chiffre de cote',{s:10,c:OR})}
 ${T(470,26,'Bâtiment : traits obliques, cotes en m ou cm',{a:'middle',s:12,b:1})}
 ${Rt(340,80,60,14,{f:'url(#fh)',w:2.2})}${Rt(445,80,125,14,{f:'url(#fh)',w:2.2})}<path d="M 445 94 A 45 45 0 0 1 400 139" fill="none" stroke="${INK}" stroke-width="1"/>${Ln(400,94,400,139,{w:2})}
 ${[340,400,445,570].map(x=>Ln(x,100,x,190,{c:GR,w:1})).join('')}${Ln(334,150,576,150,{w:1})}${[340,400,445,570].map(x=>tick(x,150)).join('')}
 ${T(370,144,'1,20',{a:'middle',s:12,b:1})}${T(422,144,'0,90',{a:'middle',s:12,b:1})}${T(507,144,'2,50',{a:'middle',s:12,b:1})}
 ${Ln(334,180,576,180,{w:1})}${tick(340,180)}${tick(570,180)}${T(455,174,'4,60',{a:'middle',s:12,b:1})}
 ${T(455,212,'cotes en chaîne (1re ligne) puis cote totale (2e ligne) :',{a:'middle',s:11,c:GR})}${T(455,228,'1,20 + 0,90 + 2,50 = 4,60 ✓',{a:'middle',s:12,c:BL,b:1})}
 ${T(455,262,'Les cotes se lisent du bas ou de la droite de la feuille',{a:'middle',s:11,c:GR})}`, 'Éléments de la cotation');

F['vues'] = () => { const k = .9, ox = 470, oy = 232, P = (x, y, z) => `${(ox + (x - y)*.866*k).toFixed(1)} ${(oy - ((x + y)*.5 + z)*k).toFixed(1)}`, poly = (pts, f) => Pa('M ' + pts.map(p => P(...p)).join(' L ') + ' Z', {f, w:1.8});
 return svg(600, 330, `
 ${Pa('M 40 130 L 160 130 L 160 90 L 100 90 L 100 50 L 40 50 Z',{w:2.4})}${T(100,40,'Vue de face',{a:'middle',s:12,b:1})}
 ${Rt(40,160,120,70,{w:2.4})}${Ln(100,160,100,230,{w:2.4})}${T(100,248,'Vue de dessus',{a:'middle',s:12,b:1})}
 ${Rt(190,50,70,80,{w:2.4})}${Ln(190,90,260,90,{w:1.3,d:'7 4'})}${T(225,40,'Vue de gauche',{a:'middle',s:12,b:1})}
 ${[40,100,160].map(x=>Ln(x,134,x,156,{c:GR,w:.8,d:'3 3'})).join('')}${[50,90,130].map(y=>Ln(164,y,186,y,{c:GR,w:.8,d:'3 3'})).join('')}
 ${T(268,94,'arête cachée',{s:10,c:GR})}
 ${poly([[60,0,40],[120,0,40],[120,70,40],[60,70,40]],'#F3EEE4')}${poly([[0,0,80],[60,0,80],[60,70,80],[0,70,80]],'#F3EEE4')}
 ${poly([[0,0,0],[0,70,0],[0,70,80],[0,0,80]],'#D9D2C4')}${poly([[0,0,0],[120,0,0],[120,0,40],[60,0,40],[60,0,80],[0,0,80]],CO)}
 ${T(490,100,'Perspective de la pièce',{a:'middle',s:11,c:GR})}${Ln(548,248,533,224,{c:OR,w:1,m:'fo'})}${T(540,262,'face',{s:11,c:OR,b:1})}
 ${T(300,304,'Méthode européenne : la vue de dessus se place SOUS la vue de face,',{a:'middle',s:11,b:1})}${T(300,320,'la vue de gauche à DROITE de la vue de face ; les vues sont alignées par des lignes de rappel.',{a:'middle',s:11,b:1})}`, 'Projections orthogonales'); };

F['coupe-principe'] = () => svg(600, 330, `
 ${Pa('M 40 30 L 240 30 L 240 130 L 40 130 Z M 55 45 L 55 115 L 225 115 L 225 45 Z',{f:'url(#fh)',w:2.4})}
 ${Ln(14,80,52,80,{w:2.8})}${Ln(52,80,228,80,{w:1,d:'22 4 2 4'})}${Ln(228,80,266,80,{w:2.8})}${Ln(18,80,18,58,{w:1.6,m:'fa'})}${Ln(262,80,262,58,{w:1.6,m:'fa'})}${T(10,54,'A',{s:13,b:1})}${T(266,54,'A',{s:13,b:1})}
 ${T(140,152,'Vue en plan avec la trace du plan de coupe A–A',{a:'middle',s:11,b:1})}
 ${Pa('M 40 180 L 55 180 L 55 265 L 225 265 L 225 180 L 240 180 L 240 280 L 40 280 Z',{f:'url(#fh)',w:2.4})}${Ln(55,180,225,180,{w:1.2})}
 ${T(140,305,'Coupe A–A',{a:'middle',s:12,b:1})}
 ${Ln(330,236,236,232,{c:OR,w:1,m:'fo'})}${T(336,232,'parties coupées : trait fort + hachures',{s:11,c:OR,b:1})}
 ${Ln(330,176,150,181,{c:BL,w:1,m:'fb'})}${T(336,180,'parties vues au-delà : trait fin (sans hachures)',{s:11,c:BL,b:1})}
 ${T(330,60,'On coupe l\'objet par un plan fictif, on enlève',{s:11})}${T(330,76,'la partie située entre l\'observateur et le plan,',{s:11})}${T(330,92,'puis on dessine ce qui reste, vu dans le sens',{s:11})}${T(330,108,'des flèches.',{s:11})}`, 'Principe de la coupe');

F['perspectives'] = () => svg(600, 290, `
 ${Pa('M 60 120 L 95.4 84.6 L 195.4 84.6 L 160 120 Z',{f:'#F3EEE4',w:2})}${Pa('M 160 120 L 195.4 84.6 L 195.4 184.6 L 160 220 Z',{f:'#D9D2C4',w:2})}${Rt(60,120,100,100,{f:CO,w:2})}
 ${Ln(95.4,184.6,95.4,84.6,{w:1,d:'6 4'})}${Ln(95.4,184.6,195.4,184.6,{w:1,d:'6 4'})}${Ln(95.4,184.6,60,220,{w:1,d:'6 4'})}
 ${Ln(160,220,215,220,{c:GR,w:1,d:'4 3'})}<path d="M 196 220 A 36 36 0 0 0 185.5 194.5" fill="none" stroke="${OR}" stroke-width="1.4"/>${T(200,206,'45°',{s:11,c:OR,b:1})}
 ${T(110,250,'Cavalière',{a:'middle',s:13,b:1})}${T(110,266,'face en vraie grandeur ; fuyantes à 45°',{a:'middle',s:11,c:GR})}${T(110,280,'réduites de moitié (k = 0,5)',{a:'middle',s:11,c:GR})}
 ${Pa('M 430 130 L 516.6 80 L 430 30 L 343.4 80 Z',{f:'#F3EEE4',w:2})}${Pa('M 430 230 L 516.6 180 L 516.6 80 L 430 130 Z',{f:CO,w:2})}${Pa('M 430 230 L 343.4 180 L 343.4 80 L 430 130 Z',{f:'#D9D2C4',w:2})}
 ${Ln(430,230,548,230,{c:GR,w:1,d:'4 3'})}<path d="M 500 230 A 70 70 0 0 0 490.6 195" fill="none" stroke="${OR}" stroke-width="1.4"/>${T(504,218,'30°',{s:11,c:OR,b:1})}
 ${T(430,250,'Isométrique',{a:'middle',s:13,b:1})}${T(430,266,'trois axes à 120° ; vraies longueurs',{a:'middle',s:11,c:GR})}${T(430,280,'mesurées sur les axes (k = 1)',{a:'middle',s:11,c:GR})}`, 'Perspectives cavalière et isométrique');

F['symboles'] = () => { const W = (x, y, w) => Rt(x, y, w, 10, {f:'url(#fh)', w:1.6}), tile = (c, r, body, lab) => { const x = 10 + c*147, y = 8 + r*146; return Rt(x, y, 140, 138, {c:'#E3DFD7', w:1, rx:10}) + body(x, y) + T(x + 70, y + 130, lab, {a:'middle', s:11, b:1}); };
 return svg(600, 304, [
  tile(0, 0, (x, y) => W(x+10,y+30,30) + W(x+100,y+30,30) + Ln(x+40,y+40,x+40,y+100,{w:2.2}) + `<path d="M ${x+100} ${y+40} A 60 60 0 0 1 ${x+40} ${y+100}" fill="none" stroke="${INK}" stroke-width="1"/>`, 'Porte battante'),
  tile(1, 0, (x, y) => W(x+10,y+50,30) + W(x+100,y+50,30) + Rt(x+40,y+50,60,10,{w:1}) + Ln(x+40,y+55,x+100,y+55,{w:1}) + Ln(x+34,y+66,x+106,y+66,{w:1}) + T(x+70,y+84,'appui',{a:'middle',s:10,c:GR}), 'Fenêtre'),
  tile(2, 0, (x, y) => W(x+5,y+50,25) + W(x+110,y+50,25) + Ln(x+30,y+53,x+76,y+53,{w:2.2}) + Ln(x+64,y+57,x+110,y+57,{w:2.2}) + Ln(x+46,y+78,x+86,y+78,{w:1,m:'fa'}), 'Baie coulissante'),
  tile(3, 0, (x, y) => Rt(x+30,y+12,80,100,{w:1.6}) + [1,2,3,4,5,6,7].map(i => Ln(x+30,y+12+i*12.5,x+110,y+12+i*12.5,{w:1})).join('') + Ln(x+70,y+106,x+70,y+20,{w:1.2,m:'fa'}) + `<circle cx="${x+70}" cy="${y+107}" r="3" fill="${INK}"/>`, 'Escalier (sens de montée)'),
  tile(0, 1, (x, y) => Ln(x+20,y+16,x+120,y+16,{w:2.6}) + Rt(x+50,y+18,40,14,{w:1.4}) + `<ellipse cx="${x+70}" cy="${y+62}" rx="18" ry="26" fill="none" stroke="${INK}" stroke-width="1.4"/><ellipse cx="${x+70}" cy="${y+64}" rx="11" ry="17" fill="none" stroke="${INK}" stroke-width="1"/>`, 'WC'),
  tile(1, 1, (x, y) => Ln(x+20,y+16,x+120,y+16,{w:2.6}) + Rt(x+38,y+18,64,46,{w:1.4,rx:8}) + `<ellipse cx="${x+70}" cy="${y+44}" rx="24" ry="15" fill="none" stroke="${INK}" stroke-width="1"/><circle cx="${x+70}" cy="${y+26}" r="3" fill="${INK}"/>`, 'Lavabo'),
  tile(2, 1, (x, y) => Rt(x+30,y+14,80,80,{w:1.6}) + Ln(x+30,y+14,x+110,y+94,{w:.8}) + Ln(x+110,y+14,x+30,y+94,{w:.8}) + `<circle cx="${x+70}" cy="${y+54}" r="5" fill="#fff" stroke="${INK}"/>`, 'Douche (bac 80 × 80)'),
  tile(3, 1, (x, y) => Ln(x+10,y+16,x+130,y+16,{w:2.6}) + Rt(x+10,y+18,120,56,{w:1.4}) + Rt(x+18,y+26,36,40,{w:1,rx:5}) + Rt(x+58,y+26,36,40,{w:1,rx:5}) + [0,1,2,3].map(i => Ln(x+100,y+30+i*10,x+124,y+30+i*10,{w:.8})).join(''), 'Évier 2 bacs + égouttoir')
 ].join(''), 'Symboles des plans d\'architecture'); };

F['niveaux'] = () => svg(600, 330, `
 <rect x="0" y="259" width="600" height="40" fill="url(#fsol)"/>${Ln(0,259,600,259,{w:1.6})}
 ${Rt(230,250,200,6,{f:CO,w:1.4})}${Rt(230,160,200,6,{f:CO,w:1.4})}${Rt(230,70,200,6,{f:CO,w:1.4})}
 ${Rt(220,52,10,207,{f:'url(#fh)',w:2})}${Rt(430,52,10,207,{f:'url(#fh)',w:2})}${Rt(208,259,34,30,{f:CO,w:1.4})}${Rt(418,259,34,30,{f:CO,w:1.4})}
 ${lvl(60,250,'±0,00 sol fini RDC',{c:BL})}${lvl(60,160,'+3,00 sol fini étage')}${lvl(60,70,'+6,00 dessus dalle')}${lvl(60,52,'+6,60 acrotère')}${lvl(515,259,'TN −0,30')}
 ${Dim(300,166,300,250,'HSP 2,80')}${Dim(300,76,300,160,'HSP 2,80')}${Dim(470,160,470,250,'3,00')}${Dim(470,70,470,160,'3,00')}
 ${T(320,214,'Rez-de-chaussée',{s:12})}${T(320,124,'Étage',{s:12})}
 ${T(482,190,'hauteur d\'étage',{s:11,c:GR})}${T(482,204,'(sol fini à sol fini)',{s:10,c:GR})}
 ${T(300,318,'Repère : ±0,00 = altitude 32,75 m. Les cotes de niveau sont en mètres, relatives à ce repère.',{a:'middle',s:11,b:1})}`, 'Cotes de niveau en coupe');

F['toiture-4pans'] = () => svg(600, 320, `
 ${Rt(40,60,320,180,{w:2})}${Ln(130,150,270,150,{w:3,c:ST})}${Ln(40,60,130,150,{w:2})}${Ln(40,240,130,150,{w:2})}${Ln(360,60,270,150,{w:2})}${Ln(360,240,270,150,{w:2})}
 ${T(200,142,'faîtage',{a:'middle',s:11,b:1,c:ST})}${T(78,96,'arêtier',{s:11,b:1,r:45})}
 ${Ln(200,128,200,78,{c:OR,w:1.6,m:'fo'})}${Ln(200,172,200,222,{c:OR,w:1.6,m:'fo'})}${Ln(108,150,58,150,{c:OR,w:1.6,m:'fo'})}${Ln(292,150,342,150,{c:OR,w:1.6,m:'fo'})}
 ${T(214,108,'long pan',{s:11})}${T(214,206,'long pan',{s:11})}${T(64,170,'croupe',{s:11})}${T(296,170,'croupe',{s:11})}
 ${Dim(40,262,360,262,'L = longueur')}${Dim(22,60,22,240,'l = largeur')}${T(200,300,'Plan de toiture : pentes égales → arêtiers à 45° en plan',{a:'middle',s:11,b:1})}
 ${Ln(400,250,527,250,{w:1.6})}${Ln(527,250,527,198,{w:1.6,c:BL})}${Ln(400,250,527,198,{w:2.6,c:ST})}
 ${T(463,268,'arêtier en plan = (l/2)·√2',{a:'middle',s:10.5})}${T(533,228,'f',{s:13,b:1,c:BL})}${T(450,214,'vraie grandeur',{a:'middle',s:11,b:1,c:ST,r:-22})}
 ${T(490,60,'Rabattement de l\'arêtier',{a:'middle',s:12,b:1})}${T(490,80,'f = (l/2) · tan α',{a:'middle',s:11})}${T(490,98,'VG = √(plan² + f²)',{a:'middle',s:11,b:1,c:ST})}`, 'Toiture à quatre pans');

F['perspective-conique'] = () => svg(600, 290, `
 ${Ln(10,110,590,110,{c:BL,w:1.4})}${T(300,102,'ligne d\'horizon (hauteur des yeux)',{a:'middle',s:11,c:BL})}
 <circle cx="40" cy="110" r="4" fill="${OR}"/><circle cx="560" cy="110" r="4" fill="${OR}"/>${T(40,130,'PF1',{a:'middle',s:12,b:1,c:OR})}${T(560,130,'PF2',{a:'middle',s:12,b:1,c:OR})}
 ${[[260,150],[260,250],[150,130],[150,180]].map(([x,y])=>Ln(x,y,40,110,{c:GR,w:.8,d:'4 4'})).join('')}${[[260,150],[260,250],[400,131.3],[400,184.7]].map(([x,y])=>Ln(x,y,560,110,{c:GR,w:.8,d:'4 4'})).join('')}
 ${Pa('M 260 150 L 150 130 L 275 123.9 L 400 131.3 Z',{f:'#F3EEE4',w:2})}${Pa('M 260 150 L 150 130 L 150 180 L 260 250 Z',{f:'#D9D2C4',w:2})}${Pa('M 260 150 L 400 131.3 L 400 184.7 L 260 250 Z',{f:CO,w:2})}
 ${T(300,280,'Les verticales restent verticales ; les horizontales fuient vers deux points de fuite situés sur l\'horizon.',{a:'middle',s:11,b:1})}`, 'Perspective conique à deux points de fuite');

F['plan-masse'] = () => svg(600, 350, `
 <rect x="0" y="318" width="600" height="32" fill="#E3DFD7"/>${T(300,338,'Voie publique (emprise 12 m)',{a:'middle',s:11,b:1})}
 ${Pa('M 60 40 L 470 30 L 500 300 L 80 310 Z',{w:1.6,d:'14 4 2 4'})}${[[60,40,'B1'],[470,30,'B2'],[500,300,'B3'],[80,310,'B4']].map(([x,y,t])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="${INK}" stroke-width="1.6"/>`+T(x+(x<300?-10:10),y-8,t,{a:x<300?'end':'start',s:11,b:1})).join('')}
 ${Rt(170,110,200,120,{f:CO,w:2.6})}${T(270,165,'Villa R+1',{a:'middle',s:13,b:1})}${T(270,184,'emprise 20,00 × 12,00 m',{a:'middle',s:11})}${lvl(300,212,'±0,00 = 32,75',{f:INK})}
 ${Dim(70,150,170,150,'4,00')}${Dim(370,150,486,150,'4,50')}${Dim(250,230,250,306,'5,00')}
 ${Ln(430,330,430,262,{c:OR,w:2.4,m:'fo'})}${T(446,300,'accès',{s:11,c:OR,b:1})}
 ${Rt(100,250,30,20,{w:1.2})}${T(115,264,'FS',{a:'middle',s:9})}<circle cx="150" cy="260" r="8" fill="none" stroke="${INK}"/>${T(98,288,'fosse + puisard',{s:9,c:GR})}
 ${[[100,80],[420,70],[440,240]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14" fill="#DDEBD9" stroke="#3E7B4F"/>`).join('')}
 ${T(74,60,'TN 32,40',{s:10,c:GR})}${T(458,50,'TN 32,95',{s:10,c:GR,a:'end'})}${T(486,290,'TN 32,60',{s:10,c:GR,a:'end'})}
 <circle cx="550" cy="70" r="20" fill="none" stroke="${INK}"/>${Pa('M 550 50 L 541 82 L 550 75 L 559 82 Z',{f:INK,w:1})}${T(550,44,'N',{a:'middle',s:12,b:1})}`, 'Plan de masse');
F['plan-type'] = () => { const k = 40, X = m => 110 + m*k, Y = m => 40 + m*k, fr = v => v.toFixed(2).replace('.', ',');
 const wall = (x1, y1, x2, y2, f) => Rt(X(x1), Y(y1), (x2 - x1)*k, (y2 - y1)*k, {f:f || 'url(#fh)', w:2});
 const winH = (x1, x2, y) => Rt(X(x1), Y(y), (x2 - x1)*k, .2*k, {w:1}) + Ln(X(x1), Y(y + .1), X(x2), Y(y + .1), {w:1});
 const winV = (y1, y2, x) => Rt(X(x), Y(y1), .2*k, (y2 - y1)*k, {w:1}) + Ln(X(x + .1), Y(y1), X(x + .1), Y(y2), {w:1});
 const chainH = (xs, y) => Ln(X(xs[0]) - 6, y, X(xs[xs.length - 1]) + 6, y, {w:1}) + xs.map(x => tick(X(x), y)).join('') + xs.slice(1).map((x, i) => T((X(x) + X(xs[i]))/2, y - 4, fr(x - xs[i]), {a:'middle', s:10, b:1})).join('');
 const chainV = (ys, x) => Ln(x, Y(ys[0]) - 6, x, Y(ys[ys.length - 1]) + 6, {w:1}) + ys.map(y => tick(x, Y(y))).join('') + ys.slice(1).map((y, i) => T(x - 4, (Y(y) + Y(ys[i]))/2, fr(y - ys[i]), {a:'middle', s:10, b:1, r:-90})).join('');
 const door = (hx, hy, lx, ly, ax, ay, sw) => Ln(X(hx), Y(hy), X(lx), Y(ly), {w:2}) + `<path d="M ${X(ax)} ${Y(ay)} A ${Math.hypot(lx - hx, ly - hy)*k} ${Math.hypot(lx - hx, ly - hy)*k} 0 0 ${sw} ${X(lx)} ${Y(ly)}" fill="none" stroke="${INK}" stroke-width="1"/>`;
 return svg(600, 400, `
 ${T(110,24,'Plan du rez-de-chaussée — 1/100 — cotes en mètres',{s:12,b:1})}
 ${[[0,1.2],[2.4,3.4],[4.4,6.8],[8,10]].map(([a,b]) => wall(a,6.8,b,7)).join('')}${[[0,2],[3.2,10]].map(([a,b]) => wall(a,0,b,.2)).join('')}${wall(0,.2,.2,6.8)}${wall(9.8,.2,10,1.4)}${wall(9.8,2.6,10,6.8)}
 ${[[.2,1],[1.8,5],[5.8,6.8]].map(([a,b]) => wall(5.6,a,5.7,b,CO)).join('')}${wall(5.7,4,9.8,4.1,CO)}
 ${winH(1.2,2.4,6.8)}${winH(6.8,8,6.8)}${winH(2,3.2,0)}${winV(1.4,2.6,9.8)}
 ${door(3.4,6.8,3.4,5.8,4.4,6.8,0)}${door(5.7,1.8,6.5,1.8,5.7,1,1)}${door(5.7,5,6.5,5,5.7,5.8,0)}
 ${T(X(2.9),Y(2.3),'Séjour',{a:'middle',s:13,b:1})}${T(X(2.9),Y(2.3)+16,'35,64 m²',{a:'middle',s:11})}${T(X(7.75),Y(2.3),'Chambre',{a:'middle',s:13,b:1})}${T(X(7.75),Y(2.3)+16,'15,58 m²',{a:'middle',s:11})}${T(X(7.75),Y(5.4),'Cuisine',{a:'middle',s:13,b:1})}${T(X(7.75),Y(5.4)+16,'11,07 m²',{a:'middle',s:11})}
 ${T(X(2.9),Y(2.3)+31,'5,40 × 6,60',{a:'middle',s:10,c:GR})}${T(X(7.75),Y(2.3)+31,'4,10 × 3,80',{a:'middle',s:10,c:GR})}${T(X(7.75),Y(5.4)+31,'4,10 × 2,70',{a:'middle',s:10,c:GR})}
 ${[0,1.2,2.4,3.4,4.4,6.8,8,10,5.65].map(x => Ln(X(x),Y(7)+4,X(x),388,{c:GR,w:.7})).join('')}${chainH([0,1.2,2.4,3.4,4.4,6.8,8,10],340)}${chainH([0,5.65,10],362)}${chainH([0,10],384)}
 ${[0,1.4,2.6,4.05,7].map(y => Ln(X(10)+4,Y(y),578,Y(y),{c:GR,w:.7})).join('')}${chainV([0,1.4,2.6,7],530)}${chainV([0,4.05,7],552)}${chainV([0,7],574)}
 <circle cx="55" cy="80" r="20" fill="none" stroke="${INK}"/>${Pa('M 55 60 L 46 92 L 55 85 L 64 92 Z',{f:INK,w:1})}${T(55,54,'N',{a:'middle',s:12,b:1})}
 ${T(55,150,'1re ligne :',{a:'middle',s:10,c:GR})}${T(55,163,'ouvertures',{a:'middle',s:10,c:GR})}${T(55,183,'2e : axes',{a:'middle',s:10,c:GR})}${T(55,203,'3e : totale',{a:'middle',s:10,c:GR})}`, 'Plan de niveau coté'); };
F['symboles-elec'] = () => { const tile = (c, r, body, lab) => { const x = 10 + c*147, y = 8 + r*146; return Rt(x, y, 140, 138, {c:'#E3DFD7', w:1, rx:10}) + body(x + 70, y + 60) + T(x + 70, y + 130, lab, {a:'middle', s:11, b:1}); };
 const pl = (x, y, r=16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="1.6"/>` + Ln(x - r*.7, y - r*.7, x + r*.7, y + r*.7, {w:1.4}) + Ln(x - r*.7, y + r*.7, x + r*.7, y - r*.7, {w:1.4});
 const sw = (x, y, dirs) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff" stroke="${INK}" stroke-width="1.6"/>` + dirs.map(([dx, dy]) => { const x1 = x + dx*5, y1 = y + dy*5, x2 = x + dx*30, y2 = y + dy*30; return Ln(x1, y1, x2, y2, {w:1.6}) + Ln(x2, y2, x2 + dy*8, y2 - dx*8, {w:1.6}); }).join('');
 return svg(600, 304, [
  tile(0, 0, (x, y) => pl(x, y, 20), 'Point lumineux (plafond)'),
  tile(1, 0, (x, y) => Ln(x - 50, y - 30, x + 50, y - 30, {w:3}) + Ln(x, y - 30, x, y - 16, {w:1.6}) + pl(x, y), 'Applique murale'),
  tile(2, 0, (x, y) => sw(x, y + 10, [[.707, -.707]]), 'Interrupteur simple'),
  tile(3, 0, (x, y) => sw(x, y, [[.707, -.707], [-.707, .707]]), 'Va-et-vient'),
  tile(0, 1, (x, y) => `<path d="M ${x - 18} ${y} A 18 18 0 0 1 ${x + 18} ${y}" fill="none" stroke="${INK}" stroke-width="1.6"/>` + Ln(x - 18, y, x + 18, y, {w:1.6}) + Ln(x, y, x, y + 30, {w:1.6}) + Ln(x - 22, y - 24, x + 22, y - 24, {w:1.6}) + Ln(x, y - 24, x, y - 18, {w:1.6}), 'Prise de courant 2P+T'),
  tile(1, 1, (x, y) => Rt(x - 36, y - 18, 72, 36, {w:1.6}) + `<path d="M ${x - 36} ${y + 18} L ${x + 36} ${y - 18} L ${x + 36} ${y + 18} Z" fill="${INK}"/>`, 'Tableau de répartition'),
  tile(2, 1, (x, y) => Rt(x - 40, y - 14, 80, 28, {w:1.6, rx:4}) + T(x, y + 5, 'CLIM', {a:'middle', s:12, b:1}) + Ln(x - 30, y + 22, x - 30, y + 40, {w:1, m:'fa'}) + Ln(x, y + 22, x, y + 40, {w:1, m:'fa'}) + Ln(x + 30, y + 22, x + 30, y + 40, {w:1, m:'fa'}), 'Climatiseur (split)'),
  tile(3, 1, (x, y) => sw(x - 42, y + 24, [[.707, -.707]]) + pl(x + 34, y - 14, 13) + `<path d="M ${x - 30} ${y + 4} Q ${x - 10} ${y - 34} ${x + 22} ${y - 20}" fill="none" stroke="${GR}" stroke-width="1.2" stroke-dasharray="5 3"/>`, 'Liaison de commande')
 ].join(''), 'Symboles électriques'); };

F['assainissement'] = () => { const X = d => 150 + d*12.4, Y = z => 250 - (z - 30.6)*100;
 const R = [['R1', 0, 32.20, 31.60], ['R2', 18, 32.10, 31.24], ['R3', 33, 31.85, 30.94]], fr = (v, d=2) => v.toFixed(d).replace('.', ',');
 let g = T(300, 20, 'Profil en long d\'un collecteur (hauteurs exagérées)', {a:'middle', s:12, b:1});
 g += Pa('M ' + R.map(r => `${Math.max(130, X(r[1]) - 40)} ${Y(r[2])} L ${Math.min(590, X(r[1]) + 40)} ${Y(r[2])}`).join(' L '), {c:'#7A5C2E', w:2});
 g += `<path d="M ${R.map(r => `${X(r[1])} ${Y(r[2])}`).join(' L ')} L ${X(33)} 240 L ${X(0)} 240 Z" fill="url(#fsol)" opacity=".35"/>`;
 g += Pa('M ' + R.map(r => `${X(r[1])} ${Y(r[3])}`).join(' L '), {c:BL, w:2}) + Pa('M ' + R.map(r => `${X(r[1])} ${Y(r[3] + .125)}`).join(' L '), {c:BL, w:1.2});
 g += R.map(r => Rt(X(r[1]) - 8, Y(r[2]), 16, (r[2] - r[3] + .1)*100, {f:'#fff', w:1.6}) + T(X(r[1]), Y(r[2]) - 8, r[0], {a:'middle', s:12, b:1})).join('');
 g += T((X(0) + X(18))/2, (Y(31.60) + Y(31.24))/2 + 22, 'PVC Ø 125 — p = 2 %', {a:'middle', s:10.5, c:BL, b:1}) + T(X(26), Y(32.0) - 10, 'terrain', {a:'middle', s:10.5, c:'#7A5C2E'}) + T(X(27), Y(31.0) + 22, 'fil d\'eau', {a:'middle', s:10.5, c:BL});
 const rows = [['Distance (m)', r => fr(r[1], 2)], ['Tampon', r => fr(r[2])], ['Fil d\'eau (FE)', r => fr(r[3])], ['Profondeur (m)', r => fr(r[2] - r[3])]];
 rows.forEach(([l, f], i) => { const y = 272 + i*17; g += T(14, y, l, {s:10.5, c:GR}) + R.map(r => T(X(r[1]), y, f(r), {a:'middle', s:10.5, b:i === 3})).join(''); });
 g += Ln(10, 258, 590, 258, {c:'#E3DFD7', w:1});
 return svg(600, 340, g, 'Profil en long d\'assainissement'); };
})();
