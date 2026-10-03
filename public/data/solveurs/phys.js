/* =====================================================================
   Solveurs guidés : physique du bâtiment, thermique, acoustique,
   mécanique des fluides
   ===================================================================== */
(function(){
'use strict';
const S = A.SOL, {nf, ns, R, plot, SV, T, Ln, Pth, Rc, Ci, Dim, C} = S.U, need = S.need, Err = S.Err;
const tb = (h, rows) => `| ${h.join(' | ')} |\n| ${h.map(() => '---').join(' | ')} |\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
const lg = Math.log10;

/* ---------------- PHYSIQUE DU BÂTIMENT ---------------- */
const psat = t => 610.5*Math.exp(17.269*t/(237.3 + t));
S.reg({id:'pb-rosee', mat:'pb', mats:['pb', 'therm'], niv:2, titre:'Risque de condensation sur une paroi (point de rosée)', resume:'Pression de vapeur, point de rosée, température de surface de la paroi et coefficient U maximal.',
 champs:[{k:'Tc', l:'Température côté chaud', u:'°C'}, {k:'HR', l:'Humidité relative côté chaud', u:'%'}, {k:'Tf', l:'Température côté froid', u:'°C'}, {k:'U', l:'Coefficient U de la paroi', u:'W/m².K'}],
 ex:{Tc:30, HR:80, Tf:18, U:2.8},
 rnd:() => ({Tc:R.s(27, 34, 1), HR:R.s(65, 90, 5), Tf:R.s(16, 24, 1), U:R.s(.8, 4.5, .1)}),
 enonce:p => `Un local frigorifique ou fortement climatisé est maintenu à **${nf(p.Tf)} °C**. L'air extérieur (côté chaud) est à **${nf(p.Tc)} °C** avec **${nf(p.HR)} %** d'humidité relative (climat d'Abidjan). La paroi a un coefficient **U = ${nf(p.U)} W/m².K**. On prend la résistance superficielle côté chaud Rs = 0,13 m².K/W.\n\n1. Calculer la pression de vapeur de l'air chaud et son point de rosée.\n2. Calculer la température de la surface de la paroi côté chaud.\n3. Y a-t-il condensation ? Quel U maximal faudrait-il ?`,
 solve(p){
  need(p, [['Tc', 'T chaude', -10, 60], ['HR', 'HR', 1, 100], ['Tf', 'T froide', -30, 60], ['U', 'U', .05, 10]]); if(p.Tf >= p.Tc) throw new Err('Le côté froid doit être plus froid que le côté chaud.');
  const ps = psat(p.Tc), pv = p.HR/100*ps, x = Math.log(pv/610.5), Td = 237.3*x/(17.269 - x), Rs = .13, th = p.Tc - p.U*Rs*(p.Tc - p.Tf), Umax = (p.Tc - Td)/(Rs*(p.Tc - p.Tf)), st = [];
  st.push({t:'Pression de vapeur saturante et réelle', md:`Formule de Magnus : $$ ps(θ) = 610,5 × exp(17,269 θ / (237,3 + θ))   (Pa)\n$$ ps(${nf(p.Tc)} °C) = ${nf(ps, 0)} Pa\n$$ pv = HR × ps = ${nf(p.HR/100, 2)} × ${nf(ps, 0)} = ${nf(pv, 0)} Pa`, ask:[{l:'pv', v:pv, u:'Pa'}]});
  st.push({t:'Point de rosée', md:`Le point de rosée est la température à laquelle pv devient saturante : ps(θr) = pv.\n$$ θr = 237,3 × ln(pv/610,5) / (17,269 − ln(pv/610,5)) = ${nf(Td, 2)} °C`, ask:[{l:'θr', v:Td, u:'°C', abs:.2}], hint:'Inversez la formule de Magnus : x = ln(pv/610,5), puis θr = 237,3 x/(17,269 − x).'});
  st.push({t:'Température de surface côté chaud', md:`Le flux traverse la paroi : φ = U (Tc − Tf) = ${nf(p.U*(p.Tc - p.Tf), 2)} W/m². La surface côté chaud est plus froide que l'air de :\n$$ Δθ = Rs × φ = 0,13 × ${nf(p.U*(p.Tc - p.Tf), 2)} = ${nf(p.U*Rs*(p.Tc - p.Tf), 2)} °C\n$$ θs = ${nf(p.Tc)} − ${nf(p.U*Rs*(p.Tc - p.Tf), 2)} = ${nf(th, 2)} °C`, ask:[{l:'θs', v:th, u:'°C', abs:.15}]});
  st.push({t:'Conclusion', md:`${th < Td ? `θs = ${nf(th, 2)} °C < θr = ${nf(Td, 2)} °C : **il y a condensation** sur la face chaude (moisissures, coulures, dégradation des enduits).` : `θs = ${nf(th, 2)} °C ≥ θr = ${nf(Td, 2)} °C : **pas de condensation superficielle**.`}\n\nPour l'éviter, il faut θs ≥ θr, soit :\n$$ U ≤ (Tc − θr) / (Rs (Tc − Tf)) = ${nf(Umax, 2)} W/m².K\n${th < Td ? '→ ajouter un isolant (polystyrène, laine minérale) et un pare-vapeur **du côté chaud** de l\'isolant.' : ''}`, ask:[{l:'U maximal', v:Umax, u:'W/m².K'}]});
  return {steps:st, bilan:`Point de rosée **${nf(Td, 1)} °C** ; surface à **${nf(th, 1)} °C** → ${th < Td ? '**condensation**' : 'pas de condensation'} ; U max = **${nf(Umax, 2)} W/m².K**.`};
 }});

const ETA = [[.6, .35], [.8, .42], [1, .47], [1.25, .52], [1.5, .56], [2, .61], [2.5, .64], [3, .67], [4, .7], [5, .72]];
const etaOf = K => { if(K <= ETA[0][0]) return ETA[0][1]; for(let i = 1; i < ETA.length; i++) if(K <= ETA[i][0]){ const [k0, e0] = ETA[i-1], [k1, e1] = ETA[i]; return e0 + (e1 - e0)*(K - k0)/(k1 - k0); } return ETA[ETA.length - 1][1]; };
S.reg({id:'pb-eclairage', mat:'pb', niv:1, titre:'Éclairage d\'un local (méthode des lumens)', resume:'Indice du local, facteur d\'utilisation, nombre de luminaires et puissance installée.',
 champs:[{k:'L', l:'Longueur du local', u:'m'}, {k:'l', l:'Largeur', u:'m'}, {k:'hu', l:'Hauteur utile (luminaires → plan de travail)', u:'m'}, {k:'E', l:'Éclairement demandé', u:'lux'}, {k:'Phi', l:'Flux d\'un luminaire', u:'lm'}, {k:'Pw', l:'Puissance d\'un luminaire', u:'W'}, {k:'fm', l:'Facteur de maintenance'}],
 ex:{L:9, l:7, hu:2.2, E:300, Phi:3600, Pw:36, fm:.8},
 rnd:() => ({L:R.s(5, 15, .5), l:R.s(4, 10, .5), hu:R.s(1.8, 3, .1), E:R.p([150, 200, 300, 500]), Phi:R.p([1800, 2400, 3600, 4400]), Pw:R.p([18, 24, 36, 40]), fm:.8}),
 enonce:p => `Une salle de classe de **${nf(p.L)} m × ${nf(p.l)} m** doit recevoir un éclairement moyen de **${nf(p.E)} lux** sur les tables. Les luminaires LED (flux **${nf(p.Phi)} lm**, **${nf(p.Pw)} W**) sont fixés à **${nf(p.hu)} m** au-dessus du plan de travail. Facteur de maintenance ${nf(p.fm)}.\n\n1. Calculer l'indice du local K et en déduire le facteur d'utilisation η.\n2. Calculer le nombre de luminaires.\n3. Proposer une implantation et calculer la puissance installée.`,
 solve(p){
  need(p, [['L', 'Longueur', .5], ['l', 'Largeur', .5], ['hu', 'Hauteur utile', .3], ['E', 'Éclairement', 10], ['Phi', 'Flux', 50], ['Pw', 'Puissance', 1], ['fm', 'Facteur de maintenance', .3, 1]]);
  const Sx = p.L*p.l, K = Sx/(p.hu*(p.L + p.l)), eta = etaOf(K), Ft = p.E*Sx/(eta*p.fm), N = Ft/p.Phi, Nr = Math.ceil(N);
  let best = [1, Nr]; for(let a = 1; a <= Nr; a++){ const b = Math.ceil(Nr/a); if(Math.abs(p.L/b - p.l/a) < Math.abs(p.L/best[1] - p.l/best[0]) || (a*b < best[0]*best[1] && Math.abs(p.L/b - p.l/a) < 1)) best = [a, b]; }
  const nn = best[0]*best[1], st = [];
  st.push({t:'Indice du local et facteur d\'utilisation', md:`$$ K = (L × l) / (h_u × (L + l)) = (${nf(p.L)} × ${nf(p.l)}) / (${nf(p.hu)} × ${nf(p.L + p.l)}) = ${nf(K, 2)}\nLe facteur d'utilisation η (part du flux qui arrive sur le plan de travail) se lit dans le tableau du fabricant ; valeurs courantes (plafond clair, murs moyens) :\n\n${tb(['K', ...ETA.map(e => nf(e[0], 2))], [['η', ...ETA.map(e => nf(e[1], 2))]])}\n\nPar interpolation : **η = ${nf(eta, 3)}**.`, ask:[{l:'K', v:K}], hint:'K = surface / (hauteur utile × demi-périmètre).'});
  st.push({t:'Flux total et nombre de luminaires', md:`$$ Φ total = E × S / (η × fm) = ${nf(p.E)} × ${nf(Sx, 2)} / (${nf(eta, 3)} × ${nf(p.fm)}) = ${nf(Ft, 0)} lm\n$$ N = Φ total / Φ luminaire = ${nf(Ft, 0)} / ${nf(p.Phi)} = ${nf(N, 2)}  →  ${Nr} luminaires`, ask:[{l:'Φ total', v:Ft, u:'lm'}, {l:'N (arrondi)', v:Nr, abs:.01}]});
  st.push({t:'Implantation et puissance', md:`Pour un éclairage uniforme, on répartit les luminaires en quadrillage : **${best[0]} rangées × ${best[1]} luminaires = ${nn}**, espacés de ${nf(p.L/best[1], 2)} m × ${nf(p.l/best[0], 2)} m (à ${nf(p.L/best[1]/2, 2)} m et ${nf(p.l/best[0]/2, 2)} m des murs).\n$$ P installée = ${nn} × ${nf(p.Pw)} = ${nf(nn*p.Pw)} W  soit ${nf(nn*p.Pw/Sx, 2)} W/m²\nÉclairement obtenu : $$ E = ${nn} × ${nf(p.Phi)} × ${nf(eta, 3)} × ${nf(p.fm)} / ${nf(Sx, 2)} = ${nf(nn*p.Phi*eta*p.fm/Sx, 0)} lux`, ask:[{l:'Puissance installée', v:nn*p.Pw, u:'W', abs:.5}]});
  return {steps:st, bilan:`K = ${nf(K, 2)}, η = ${nf(eta, 2)} → **${nn} luminaires** (${best[0]} × ${best[1]}), ${nf(nn*p.Pw)} W.`};
 }});

/* ---------------- THERMIQUE ---------------- */
S.reg({id:'therm-paroi', mat:'therm', niv:1, titre:'Paroi multicouche : résistance, U, flux et températures', resume:'Résistances des couches, coefficient U, flux de chaleur et profil de température dans le mur.',
 ia:'{"Ti":24,"Te":35,"S":12,"c":[{"n":"Enduit","e":1.5,"lam":1.15}]} — e en cm, lam = λ en W/m.K ; Ti intérieur, Te extérieur (°C), S surface (m²)',
 champs:[{k:'Ti', l:'Température intérieure', u:'°C'}, {k:'Te', l:'Température extérieure', u:'°C'}, {k:'S', l:'Surface de la paroi', u:'m²'},
  {k:'c', l:'Couches (de l\'intérieur vers l\'extérieur)', t:'tab', min:1, max:8, cols:[{k:'n', l:'Matériau', t:'txt', w:130}, {k:'e', l:'e', u:'cm'}, {k:'lam', l:'λ', u:'W/m.K'}], row:() => ({n:'Isolant', e:4, lam:.04})}],
 ex:{Ti:24, Te:35, S:12, c:[{n:'Enduit plâtre', e:1.5, lam:.35}, {n:'Agglo creux de 15', e:15, lam:.95}, {n:'Enduit ciment', e:1.5, lam:1.15}]},
 rnd:() => ({Ti:R.s(22, 26, 1), Te:R.s(32, 38, 1), S:R.s(8, 30, 1), c:[{n:'Enduit intérieur', e:1.5, lam:.35}, R.p([{n:'Agglo creux de 15', e:15, lam:.95}, {n:'Brique de terre cuite', e:15, lam:.6}, {n:'Béton plein', e:15, lam:1.75}]), ...(Math.random() < .5 ? [{n:'Polystyrène', e:R.p([3, 4, 5]), lam:.04}] : []), {n:'Enduit ciment', e:1.5, lam:1.15}]}),
 enonce:p => `Un mur de **${nf(p.S)} m²** d'une chambre climatisée à **${nf(p.Ti)} °C** donne sur l'extérieur à **${nf(p.Te)} °C**. Il est composé (de l'intérieur vers l'extérieur) de :\n\n${tb(['Couche', 'Épaisseur (cm)', 'λ (W/m.K)'], p.c.map(r => [r.n, nf(r.e), nf(r.lam)]))}\n\nRésistances superficielles : Rsi = 0,13 et Rse = 0,04 m².K/W.\n\n1. Calculer la résistance de chaque couche et la résistance totale.\n2. En déduire U.\n3. Calculer le flux surfacique et le flux total traversant le mur.\n4. Calculer les températures aux interfaces et tracer le profil.`,
 solve(p){
  need(p, [['Ti', 'Ti'], ['Te', 'Te'], ['S', 'Surface', .01]]); const L = p.c.map(r => ({...r, e:+r.e, lam:+r.lam})); L.forEach((r, i) => { if(!(r.e > 0) || !(r.lam > 0)) throw new Err(`Couche ${i + 1} : épaisseur et λ doivent être positifs.`); });
  const Rs = L.map(r => r.e/100/r.lam), Rt = .13 + .04 + Rs.reduce((a, v) => a + v, 0), U = 1/Rt, dT = p.Te - p.Ti, phi = U*dT, Phi = phi*p.S, st = [];
  st.push({t:'Résistances thermiques', md:`Résistance d'une couche : $$ R = e / λ   (e en m)\n\n${tb(['Couche', 'e (m)', 'λ', 'R (m².K/W)'], L.map((r, i) => [r.n, nf(r.e/100, 3), nf(r.lam, 3), nf(Rs[i], 4)]).concat([['Rsi + Rse', '', '', '0,17']]))}\n$$ R totale = 0,13 + ${Rs.map(v => nf(v, 4)).join(' + ')} + 0,04 = ${nf(Rt, 4)} m².K/W`, ask:[{l:'R totale', v:Rt, u:'m².K/W'}], hint:'Convertissez les épaisseurs en mètres, puis additionnez toutes les résistances (couches + surfaces).'});
  st.push({t:'Coefficient de transmission U', md:`$$ U = 1 / R totale = 1 / ${nf(Rt, 4)} = ${nf(U, 3)} W/m².K`, ask:[{l:'U', v:U, u:'W/m².K'}]});
  st.push({t:'Flux de chaleur', md:`$$ φ = U × (Te − Ti) = ${nf(U, 3)} × ${nf(dT)} = ${nf(phi, 2)} W/m²\n$$ Φ = φ × S = ${nf(phi, 2)} × ${nf(p.S)} = ${nf(Phi, 1)} W\n${dT > 0 ? 'La chaleur entre dans la pièce : le climatiseur doit l\'évacuer.' : 'La chaleur sort de la pièce.'}`, ask:[{l:'φ', v:phi, u:'W/m²'}, {l:'Φ', v:Phi, u:'W'}]});
  const temps = [p.Ti]; let t = p.Ti - phi*(-.13); const xs = [0]; let x = 0; temps.push(t); xs.push(0);
  L.forEach((r, i) => { t += phi*Rs[i]; x += r.e; temps.push(t); xs.push(x); });
  const tse = temps[temps.length - 1];
  const rows = [['Air intérieur', nf(p.Ti, 2)], ['Surface intérieure', nf(temps[1], 2)]].concat(L.map((r, i) => [`Après ${r.n}`, nf(temps[i + 2], 2)])).concat([['Air extérieur', nf(p.Te, 2)]]);
  const pts = xs.slice(1).map((xx, i) => [xx, temps[i + 1]]);
  st.push({t:'Températures dans la paroi', md:`Le flux est le même dans chaque couche : la chute de température dans une couche vaut φ × R.\n$$ θ suivante = θ précédente + φ × R couche\n\n${tb(['Position', 'θ (°C)'], rows)}`, ask:[{l:'Température de la surface intérieure', v:temps[1], u:'°C', abs:.1}],
   html:`<div class="solfig">${plot(pts, {series:[{pts, c:C.RD}, {pts, dots:1, c:C.RD}], xl:'épaisseur (cm) depuis l\'intérieur', ylab:'θ (°C)', label:'Profil de température', y0:Math.min(p.Ti, p.Te) - 1, y1:Math.max(p.Ti, p.Te) + 1})}</div>`});
  return {steps:st, bilan:`R = **${nf(Rt, 3)} m².K/W**, U = **${nf(U, 2)} W/m².K**, flux **${nf(Phi, 0)} W** pour ${nf(p.S)} m².`};
 }});

S.reg({id:'therm-clim', mat:'therm', niv:2, titre:'Bilan thermique d\'une pièce climatisée', resume:'Apports par les murs, vitrages (dont soleil), renouvellement d\'air, occupants et appareils → puissance du climatiseur.',
 champs:[{k:'L', l:'Longueur', u:'m'}, {k:'l', l:'Largeur', u:'m'}, {k:'h', l:'Hauteur', u:'m'}, {k:'Te', l:'T extérieure', u:'°C'}, {k:'Ti', l:'T intérieure', u:'°C'},
  {k:'Sm', l:'Surface des murs extérieurs (hors vitrage)', u:'m²'}, {k:'Um', l:'U des murs', u:'W/m².K'}, {k:'Sv', l:'Surface vitrée', u:'m²'}, {k:'Uv', l:'U du vitrage', u:'W/m².K'},
  {k:'Isol', l:'Rayonnement solaire sur le vitrage', u:'W/m²'}, {k:'Fs', l:'Facteur solaire du vitrage'}, {k:'Sp', l:'Toiture / plafond sur l\'extérieur', u:'m²'}, {k:'Up', l:'U du plafond', u:'W/m².K'},
  {k:'n', l:'Renouvellement d\'air', u:'vol/h'}, {k:'occ', l:'Occupants'}, {k:'app', l:'Éclairage et appareils', u:'W'}],
 ex:{L:5, l:4, h:2.8, Te:34, Ti:25, Sm:20, Um:2.6, Sv:3, Uv:5.8, Isol:350, Fs:.7, Sp:20, Up:1.2, n:1, occ:2, app:250},
 rnd:() => ({L:R.s(3.5, 7, .5), l:R.s(3, 5, .5), h:2.8, Te:R.s(32, 36, 1), Ti:R.s(24, 26, 1), Sm:R.s(10, 30, 1), Um:R.s(1, 3, .1), Sv:R.s(1.5, 6, .5), Uv:R.p([2.8, 5.8]), Isol:R.s(200, 500, 50), Fs:R.s(.3, .85, .05), Sp:R.p([0, 0, 15, 20]), Up:R.s(.6, 2, .1), n:R.s(.5, 2, .5), occ:R.i(1, 4), app:R.s(100, 600, 50)}),
 enonce:p => `On veut climatiser une chambre de **${nf(p.L)} × ${nf(p.l)} × ${nf(p.h)} m** à Abidjan : extérieur **${nf(p.Te)} °C**, intérieur **${nf(p.Ti)} °C**.\n\n- Murs extérieurs : ${nf(p.Sm)} m², U = ${nf(p.Um)} W/m².K\n- Vitrage : ${nf(p.Sv)} m², U = ${nf(p.Uv)} W/m².K, facteur solaire ${nf(p.Fs)}, ensoleillement ${nf(p.Isol)} W/m²\n${p.Sp ? `- Plafond sous toiture : ${nf(p.Sp)} m², U = ${nf(p.Up)} W/m².K\n` : ''}- Renouvellement d'air : ${nf(p.n)} volume/h ; ${nf(p.occ)} occupant(s) ; éclairage et appareils : ${nf(p.app)} W\n\n1. Calculer chaque apport de chaleur.\n2. En déduire la puissance frigorifique nécessaire (en W et en BTU/h) et choisir le climatiseur.`,
 solve(p){
  need(p, [['L', 'Longueur', .5], ['l', 'Largeur', .5], ['h', 'Hauteur', 1], ['Te', 'Te'], ['Ti', 'Ti'], ['Sm', 'Murs', 0], ['Um', 'U murs', 0], ['Sv', 'Vitrage', 0], ['Uv', 'U vitrage', 0], ['Isol', 'Rayonnement', 0], ['Fs', 'Facteur solaire', 0, 1], ['Sp', 'Plafond', 0], ['Up', 'U plafond', 0], ['n', 'Renouvellement', 0], ['occ', 'Occupants', 0], ['app', 'Appareils', 0]]);
  const dT = p.Te - p.Ti, V = p.L*p.l*p.h, Qm = p.Um*p.Sm*dT, Qv = p.Uv*p.Sv*dT, Qs = p.Sv*p.Fs*p.Isol, Qp = p.Up*p.Sp*(dT + 5), Qa = .34*p.n*V*dT, Qo = p.occ*130, Qe = p.app;
  const Q = Qm + Qv + Qs + Qp + Qa + Qo + Qe, Qt = Q*1.1, btu = Qt*3.412, CL = [9000, 12000, 18000, 24000, 30000, 36000], pick = CL.find(c => c >= btu) || 'plusieurs appareils', st = [];
  st.push({t:'Apports par les parois', md:`$$ Q murs = U × S × ΔT = ${nf(p.Um)} × ${nf(p.Sm)} × ${nf(dT)} = ${nf(Qm, 0)} W\n$$ Q vitrage (conduction) = ${nf(p.Uv)} × ${nf(p.Sv)} × ${nf(dT)} = ${nf(Qv, 0)} W\n${p.Sp ? `$$ Q plafond = ${nf(p.Up)} × ${nf(p.Sp)} × (${nf(dT)} + 5) = ${nf(Qp, 0)} W   (+5 °C : comble chauffé par la tôle)` : ''}`, ask:[{l:'Q murs', v:Qm, u:'W'}]});
  st.push({t:'Apport solaire par le vitrage', md:`Le soleil qui traverse la vitre chauffe directement la pièce :\n$$ Q solaire = S × Fs × I = ${nf(p.Sv)} × ${nf(p.Fs)} × ${nf(p.Isol)} = ${nf(Qs, 0)} W\nC'est souvent l'apport le plus important : stores, brise-soleil et vitrages à faible facteur solaire le réduisent fortement.`, ask:[{l:'Q solaire', v:Qs, u:'W'}]});
  st.push({t:'Renouvellement d\'air, occupants et appareils', md:`$$ V = ${nf(p.L)} × ${nf(p.l)} × ${nf(p.h)} = ${nf(V, 2)} m³\n$$ Q air = 0,34 × n × V × ΔT = 0,34 × ${nf(p.n)} × ${nf(V, 2)} × ${nf(dT)} = ${nf(Qa, 0)} W\n$$ Q occupants = ${nf(p.occ)} × 130 W = ${nf(Qo, 0)} W   (chaleur sensible + latente d'une personne au repos)\n$$ Q appareils = ${nf(Qe, 0)} W`, ask:[{l:'Q air', v:Qa, u:'W'}]});
  st.push({t:'Puissance du climatiseur', md:`${tb(['Apport', 'W'], [['Murs', nf(Qm, 0)], ['Vitrage (conduction)', nf(Qv, 0)], ['Soleil', nf(Qs, 0)], ['Plafond', nf(Qp, 0)], ['Air neuf', nf(Qa, 0)], ['Occupants', nf(Qo, 0)], ['Appareils', nf(Qe, 0)], ['**Total**', '**' + nf(Q, 0) + '**']])}\n\nAvec 10 % de marge : $$ P = ${nf(Qt, 0)} W  →  × 3,412 = ${nf(btu, 0)} BTU/h\nOn choisit un climatiseur de **${typeof pick === 'number' ? nf(pick) + ' BTU/h' : pick}**.`, ask:[{l:'Puissance totale (sans marge)', v:Q, u:'W'}, {l:'Puissance en BTU/h (avec marge)', v:btu, u:'BTU/h', tol:.03}]});
  return {steps:st, bilan:`Apports : **${nf(Q, 0)} W** → climatiseur de **${typeof pick === 'number' ? nf(pick) + ' BTU/h' : pick}** (${nf(btu, 0)} BTU/h avec marge).`};
 }});

/* ---------------- ACOUSTIQUE ---------------- */
S.reg({id:'acou-niveaux', mat:'acou', niv:1, titre:'Addition de niveaux sonores et effet de la distance', resume:'Somme de plusieurs sources en décibels, puis atténuation avec la distance (source ponctuelle).',
 champs:[{k:'src', l:'Sources (niveau à la distance de référence)', t:'tab', min:1, max:8, cols:[{k:'n', l:'Source', t:'txt', w:130}, {k:'L', l:'L', u:'dB(A)'}]}, {k:'d1', l:'Distance de référence', u:'m'}, {k:'d2', l:'Distance du voisin', u:'m'}, {k:'lim', l:'Niveau admissible chez le voisin', u:'dB(A)'}],
 ex:{src:[{n:'Bétonnière', L:85}, {n:'Groupe électrogène', L:82}, {n:'Disqueuse', L:88}], d1:1, d2:40, lim:55},
 rnd:() => ({src:Array.from({length:R.i(2, 4)}, (_, i) => ({n:['Bétonnière', 'Groupe électrogène', 'Disqueuse', 'Marteau-piqueur'][i], L:R.s(75, 95, 1)})), d1:R.p([1, 5, 10]), d2:R.s(20, 120, 5), lim:R.p([50, 55, 60])}),
 enonce:p => `Sur un chantier en ville, on mesure à **${nf(p.d1)} m** de chaque machine :\n\n${tb(['Source', 'Niveau (dB(A))'], p.src.map(s => [s.n, nf(s.L)]))}\n\nLe voisin le plus proche est à **${nf(p.d2)} m** ; le niveau admissible est **${nf(p.lim)} dB(A)**.\n\n1. Calculer le niveau sonore total quand toutes les machines fonctionnent.\n2. Calculer le niveau reçu chez le voisin (propagation en champ libre).\n3. Conclure.`,
 solve(p){
  const L = p.src.map(s => +s.L); if(L.some(v => !isFinite(v))) throw new Err('Niveau invalide.'); need(p, [['d1', 'Distance de référence', .1], ['d2', 'Distance du voisin', .1], ['lim', 'Niveau admissible']]);
  const sum = L.reduce((a, v) => a + Math.pow(10, v/10), 0), Lt = 10*lg(sum), att = 20*lg(p.d2/p.d1), L2 = Lt - att, st = [];
  st.push({t:'Addition des niveaux', md:`Les décibels ne s'additionnent pas : on additionne les **intensités** (énergies).\n$$ L total = 10 log( Σ 10^(Li/10) )\n$$ Σ 10^(Li/10) = ${L.map(v => `10^${nf(v/10, 1)}`).join(' + ')} = ${ns(sum, 4)}\n$$ L total = 10 × log(${ns(sum, 4)}) = ${nf(Lt, 1)} dB(A)\n\n> [!astuce] Règle rapide\n> Deux sources égales donnent +3 dB ; si l'écart dépasse 10 dB, la plus faible ne compte presque plus.`, ask:[{l:'L total', v:Lt, u:'dB(A)', abs:.15}], hint:'Calculez 10^(L/10) pour chaque source, additionnez, puis 10 × log du total.'});
  st.push({t:'Atténuation avec la distance', md:`Pour une source ponctuelle en champ libre, le niveau baisse de **6 dB chaque fois que la distance double** :\n$$ L(d2) = L(d1) − 20 log(d2/d1) = ${nf(Lt, 1)} − 20 log(${nf(p.d2)}/${nf(p.d1)}) = ${nf(Lt, 1)} − ${nf(att, 1)} = ${nf(L2, 1)} dB(A)`, ask:[{l:'Niveau chez le voisin', v:L2, u:'dB(A)', abs:.15}]});
  st.push({t:'Conclusion', md:L2 <= p.lim ? `${nf(L2, 1)} dB(A) ≤ ${nf(p.lim)} dB(A) : le niveau est **admissible**.` : `${nf(L2, 1)} dB(A) > ${nf(p.lim)} dB(A) : **dépassement de ${nf(L2 - p.lim, 1)} dB**. Solutions : éloigner les machines (distance nécessaire ≈ ${nf(p.d1*Math.pow(10, (Lt - p.lim)/20), 0)} m), écrans acoustiques, capotage du groupe, horaires de travail adaptés.`});
  return {steps:st, bilan:`Niveau total **${nf(Lt, 1)} dB(A)** à ${nf(p.d1)} m → **${nf(L2, 1)} dB(A)** chez le voisin (${L2 <= p.lim ? 'admissible' : 'trop élevé'}).`};
 }});

S.reg({id:'acou-sabine', mat:'acou', niv:2, titre:'Temps de réverbération d\'une salle (Sabine) et correction', resume:'Aire d\'absorption équivalente, temps de réverbération, surface de matériau absorbant à ajouter.',
 champs:[{k:'L', l:'Longueur', u:'m'}, {k:'l', l:'Largeur', u:'m'}, {k:'h', l:'Hauteur', u:'m'}, {k:'s', l:'Surfaces', t:'tab', min:1, max:8, cols:[{k:'n', l:'Paroi', t:'txt', w:120}, {k:'S', l:'S', u:'m²'}, {k:'a', l:'α'}]},
  {k:'Tc', l:'Temps de réverbération visé', u:'s'}, {k:'aa', l:'α du matériau absorbant'}, {k:'ar', l:'α de la surface qu\'il recouvre'}],
 ex:{L:12, l:8, h:3.5, s:[{n:'Sol carrelé', S:96, a:.02}, {n:'Plafond enduit', S:96, a:.03}, {n:'Murs enduits', S:126, a:.03}, {n:'Vitrages', S:14, a:.1}], Tc:.8, aa:.7, ar:.03},
 rnd:() => { const L = R.s(8, 16, 1), l = R.s(6, 10, 1), h = R.s(3, 4.5, .5); return {L, l, h, s:[{n:'Sol carrelé', S:L*l, a:.02}, {n:'Plafond', S:L*l, a:R.p([.03, .05, .6])}, {n:'Murs', S:+(2*(L + l)*h - 12).toFixed(1), a:.03}, {n:'Vitrages', S:12, a:.1}], Tc:R.p([.6, .8, 1]), aa:R.s(.5, .9, .05), ar:.03}; },
 enonce:p => `Une salle de réunion mesure **${nf(p.L)} × ${nf(p.l)} × ${nf(p.h)} m**. Ses parois sont :\n\n${tb(['Paroi', 'Surface (m²)', 'α (500 Hz)'], p.s.map(r => [r.n, nf(r.S), nf(r.a)]))}\n\n1. Calculer le volume et l'aire d'absorption équivalente A.\n2. Calculer le temps de réverbération (formule de Sabine) et conclure.\n3. Quelle surface de panneaux absorbants (α = ${nf(p.aa)}) faut-il poser sur une paroi d'α = ${nf(p.ar)} pour obtenir **${nf(p.Tc)} s** ?`,
 solve(p){
  need(p, [['L', 'Longueur', .5], ['l', 'Largeur', .5], ['h', 'Hauteur', .5], ['Tc', 'T visé', .1], ['aa', 'α absorbant', .01, 1], ['ar', 'α existant', 0, 1]]); if(p.aa <= p.ar) throw new Err('Le matériau absorbant doit avoir un α plus grand que la paroi qu\'il recouvre.');
  const V = p.L*p.l*p.h, A_ = p.s.reduce((a, r) => a + (+r.S)*(+r.a), 0); if(!(A_ > 0)) throw new Err('L\'aire d\'absorption doit être positive.');
  const Tr = .16*V/A_, Ar = .16*V/p.Tc, dA = Ar - A_, Sab = dA/(p.aa - p.ar), st = [];
  st.push({t:'Volume et aire d\'absorption', md:`$$ V = ${nf(p.L)} × ${nf(p.l)} × ${nf(p.h)} = ${nf(V, 2)} m³\n$$ A = Σ αi Si = ${p.s.map(r => `${nf(r.a)} × ${nf(r.S)}`).join(' + ')} = ${nf(A_, 2)} m²`, ask:[{l:'A', v:A_, u:'m²'}], hint:'Multipliez chaque surface par son coefficient α, puis additionnez.'});
  st.push({t:'Temps de réverbération (Sabine)', md:`$$ T = 0,16 V / A = 0,16 × ${nf(V, 2)} / ${nf(A_, 2)} = ${nf(Tr, 2)} s\n${Tr > p.Tc ? `T > ${nf(p.Tc)} s : la salle est **trop réverbérante** (écho, parole peu intelligible).` : `T ≤ ${nf(p.Tc)} s : la salle est **correcte**.`}`, ask:[{l:'T', v:Tr, u:'s', abs:.03}]});
  st.push({t:'Correction acoustique', md:Tr > p.Tc ? `Aire d'absorption nécessaire : $$ A' = 0,16 V / T visé = 0,16 × ${nf(V, 2)} / ${nf(p.Tc)} = ${nf(Ar, 2)} m²\nIl manque $$ ΔA = ${nf(Ar, 2)} − ${nf(A_, 2)} = ${nf(dA, 2)} m²\nChaque m² de panneau remplace une paroi d'α = ${nf(p.ar)} : il apporte ${nf(p.aa)} − ${nf(p.ar)} = ${nf(p.aa - p.ar, 2)} m² d'absorption.\n$$ S panneaux = ΔA / (α panneau − α paroi) = ${nf(dA, 2)} / ${nf(p.aa - p.ar, 2)} = ${nf(Sab, 1)} m²` : 'Aucune correction nécessaire.',
   ask:Tr > p.Tc ? [{l:'Surface de panneaux', v:Sab, u:'m²'}] : null});
  return {steps:st, bilan:`T = **${nf(Tr, 2)} s**${Tr > p.Tc ? ` → poser **${nf(Sab, 1)} m²** de panneaux absorbants pour obtenir ${nf(p.Tc)} s` : ' (correct)'}.`};
 }});

const RHO = {beton:['Béton plein', 2300], agglo:['Agglo creux (équivalent)', 1300], brique:['Brique pleine', 1800], placo:['Plaque de plâtre', 900], verre:['Verre', 2500], bois:['Bois', 600]};
S.reg({id:'acou-masse', mat:'acou', niv:1, titre:'Isolement d\'une paroi simple (loi de masse)', resume:'Masse surfacique, indice d\'affaiblissement R = 20 log(m f) − 47, effet du doublement de masse.',
 champs:[{k:'mat', l:'Matériau', t:'sel', o:Object.entries(RHO).map(([k, v]) => [k, v[0]])}, {k:'e', l:'Épaisseur', u:'cm'}, {k:'f', l:'Fréquence étudiée', u:'Hz'}, {k:'Lb', l:'Bruit à l\'extérieur', u:'dB'}],
 ex:{mat:'agglo', e:15, f:500, Lb:75},
 rnd:() => ({mat:R.p(Object.keys(RHO)), e:R.p([1.3, 4, 10, 15, 20]), f:R.p([125, 250, 500, 1000]), Lb:R.s(65, 85, 1)}),
 enonce:p => `Un mur simple en ${RHO[p.mat][0].toLowerCase()} (masse volumique ${nf(RHO[p.mat][1])} kg/m³) a une épaisseur de **${nf(p.e)} cm**. Le bruit extérieur est de **${nf(p.Lb)} dB** à **${nf(p.f)} Hz**.\n\n1. Calculer la masse surfacique du mur.\n2. Calculer son indice d'affaiblissement R par la loi de masse.\n3. Estimer le niveau transmis et l'effet d'un doublement de l'épaisseur.`,
 solve(p){
  need(p, [['e', 'Épaisseur', .1], ['f', 'Fréquence', 50, 8000], ['Lb', 'Bruit']]); const m = RHO[p.mat][1]*p.e/100, Rv = 20*lg(m*p.f) - 47, st = [];
  st.push({t:'Masse surfacique', md:`$$ m = ρ × e = ${nf(RHO[p.mat][1])} × ${nf(p.e/100, 3)} = ${nf(m, 1)} kg/m²`, ask:[{l:'m', v:m, u:'kg/m²'}]});
  st.push({t:'Indice d\'affaiblissement (loi de masse)', md:`$$ R = 20 log(m × f) − 47 = 20 log(${nf(m, 1)} × ${nf(p.f)}) − 47 = ${nf(Rv, 1)} dB\nLa loi de masse montre que R augmente de **6 dB quand la masse double** et de **6 dB quand la fréquence double** : les sons graves passent plus facilement.`, ask:[{l:'R', v:Rv, u:'dB', abs:.2}],
   html:`<div class="solfig">${plot([125, 250, 500, 1000, 2000, 4000].map(f => [Math.log2(f/125), 20*lg(m*f) - 47]), {series:[{pts:[125, 250, 500, 1000, 2000, 4000].map(f => [Math.log2(f/125), 20*lg(m*f) - 47]), c:C.BL}, {pts:[125, 250, 500, 1000, 2000, 4000].map(f => [Math.log2(f/125), 20*lg(2*m*f) - 47]), c:C.OR, d:'5 4'}], xl:'octaves (0 = 125 Hz … 5 = 4000 Hz)', ylab:'R (dB) — bleu : mur, orange : masse doublée', label:'Loi de masse', y0:0})}</div>`});
  st.push({t:'Niveau transmis et amélioration', md:`Estimation simple : $$ L intérieur ≈ L extérieur − R = ${nf(p.Lb)} − ${nf(Rv, 1)} = ${nf(p.Lb - Rv, 1)} dB\nEn doublant l'épaisseur : $$ R' = R + 20 log 2 = ${nf(Rv + 6.02, 1)} dB  (+6 dB seulement)\nPour gagner davantage, on préfère une **paroi double** (deux parois séparées par une lame d'air avec laine minérale) plutôt qu'un mur très épais.`, ask:[{l:'Niveau intérieur', v:p.Lb - Rv, u:'dB', abs:.2}]});
  return {steps:st, bilan:`m = **${nf(m, 0)} kg/m²**, R(${nf(p.f)} Hz) = **${nf(Rv, 1)} dB** → niveau intérieur ≈ ${nf(p.Lb - Rv, 0)} dB.`};
 }});

/* ---------------- MÉCANIQUE DES FLUIDES ---------------- */
S.reg({id:'mdf-hydro', mat:'mdf', mats:['mdf', 'rdm'], niv:1, titre:'Poussée de l\'eau sur la paroi d\'un réservoir', resume:'Pression hydrostatique, force de poussée, point d\'application et moment au pied de la paroi.',
 champs:[{k:'h', l:'Hauteur d\'eau', u:'m'}, {k:'b', l:'Largeur de paroi étudiée', u:'m'}, {k:'z', l:'Profondeur d\'un point étudié', u:'m'}],
 ex:{h:3, b:1, z:2},
 rnd:() => { const h = R.s(1.5, 5, .1); return {h, b:R.p([1, 1, 2, 4]), z:+(h*R.s(.3, .9, .1)).toFixed(1)}; },
 enonce:p => `Un réservoir en béton armé contient **${nf(p.h)} m** d'eau (ρ = 1 000 kg/m³, g = 9,81 m/s²). On étudie une bande de paroi verticale de **${nf(p.b)} m** de large.\n\n1. Calculer la pression à ${nf(p.z)} m de profondeur et au fond.\n2. Calculer la poussée totale sur la bande et son point d'application.\n3. Calculer le moment au pied de la paroi (encastrée dans le radier).`,
 solve(p){
  need(p, [['h', 'Hauteur', .05], ['b', 'Largeur', .01], ['z', 'Profondeur', 0]]); if(p.z > p.h) throw new Err('Le point étudié doit être sous la surface (z ≤ h).');
  const g = 9.81, pz = 1000*g*p.z/1000, pf = 1000*g*p.h/1000, F = .5*1000*g*p.h*p.h*p.b/1000, M = F*p.h/3, st = [];
  st.push({t:'Pression hydrostatique', md:`$$ p = ρ g z   (pression relative, en kPa si on divise par 1000)\n$$ p(${nf(p.z)} m) = 1000 × 9,81 × ${nf(p.z)} = ${nf(pz, 2)} kPa\n$$ p(fond) = 1000 × 9,81 × ${nf(p.h)} = ${nf(pf, 2)} kPa\nLa pression augmente **linéairement** avec la profondeur : le diagramme est un triangle.`, ask:[{l:'p au fond', v:pf, u:'kPa'}]});
  st.push({t:'Poussée totale', md:`La poussée est l'aire du triangle des pressions multipliée par la largeur :\n$$ F = ½ × ρ g h² × b = ½ × 9,81 × ${nf(p.h)}² × ${nf(p.b)} = ${nf(F, 2)} kN\nElle s'applique au centre de gravité du triangle, à **h/3 = ${nf(p.h/3, 3)} m au-dessus du fond**.`, ask:[{l:'F', v:F, u:'kN'}],
   html:(() => { const k = 160/p.h, x0 = 120, y0 = 30, w = pf/pf*90; return `<div class="solfig">${SV(380, 230, Rc(x0 - 16, y0, 16, p.h*k + 10, {f:'url(#shh)', c:C.INK}) + Pth(`M${x0},${y0} L${x0},${y0 + p.h*k} L${x0 + w},${y0 + p.h*k} Z`, {f:'#E4EDFC', c:C.BL, w:1.6}) +
     Ln(x0 + w*.9, y0 + p.h*k*2/3, x0 + 2, y0 + p.h*k*2/3, {c:C.RD, w:2.6, m:'sr'}) + T(x0 + w + 8, y0 + p.h*k*2/3 + 4, 'F = ' + nf(F, 1) + ' kN', {c:C.RD, b:1}) + T(x0 + w + 8, y0 + p.h*k, 'p = ' + nf(pf, 1) + ' kPa', {s:11, c:C.BL}) + Dim(x0 + 180, y0 + p.h*k*2/3, x0 + 180, y0 + p.h*k, 'h/3') + T(x0 + 6, y0 - 6, 'surface libre', {s:11, c:C.GR}), 'Poussée hydrostatique')}</div>`; })()});
  st.push({t:'Moment au pied de la paroi', md:`La paroi travaille comme une **console** encastrée dans le radier :\n$$ M = F × h/3 = ${nf(F, 2)} × ${nf(p.h/3, 3)} = ${nf(M, 2)} kN·m   (pour ${nf(p.b)} m de largeur)\nCe moment tend la face **côté eau** : c'est là qu'il faut placer les aciers principaux, avec un enrobage et une fissuration adaptés aux réservoirs.`, ask:[{l:'M au pied', v:M, u:'kN·m'}]});
  return {steps:st, bilan:`Pression au fond **${nf(pf, 1)} kPa** ; poussée **${nf(F, 1)} kN** à ${nf(p.h/3, 2)} m du fond ; moment **${nf(M, 1)} kN·m**.`};
 }});

S.reg({id:'mdf-conduite', mat:'mdf', niv:2, titre:'Écoulement dans une conduite : pertes de charge et pression au robinet', resume:'Vitesse, Reynolds, coefficient λ (Swamee-Jain), pertes linéaires et singulières, Bernoulli.',
 champs:[{k:'Q', l:'Débit', u:'l/s'}, {k:'D', l:'Diamètre intérieur', u:'mm'}, {k:'L', l:'Longueur de conduite', u:'m'}, {k:'eps', l:'Rugosité ε', u:'mm'}, {k:'K', l:'Somme des coefficients singuliers ΣK'}, {k:'z1', l:'Cote du plan d\'eau (château d\'eau)', u:'m'}, {k:'z2', l:'Cote du robinet', u:'m'}],
 ex:{Q:1.5, D:40, L:120, eps:.05, K:6, z1:28, z2:9},
 rnd:() => ({Q:R.s(.3, 3, .1), D:R.p([25, 32, 40, 50, 63]), L:R.s(30, 300, 10), eps:R.p([.007, .05, .1]), K:R.s(2, 10, 1), z1:R.s(18, 35, 1), z2:R.s(0, 12, 1)}),
 enonce:p => `Un robinet situé à la cote **${nf(p.z2)} m** est alimenté par un château d'eau dont le plan d'eau est à **${nf(p.z1)} m**. La conduite a **${nf(p.L)} m** de long, un diamètre intérieur de **${nf(p.D)} mm** et une rugosité ε = ${nf(p.eps)} mm. Les coudes, vannes et tés représentent ΣK = ${nf(p.K)}. Le débit demandé est **${nf(p.Q)} l/s** (eau : ν = 10⁻⁶ m²/s).\n\n1. Calculer la vitesse et le nombre de Reynolds.\n2. Calculer le coefficient de perte de charge λ et les pertes de charge.\n3. Calculer la pression disponible au robinet.`,
 solve(p){
  need(p, [['Q', 'Débit', .001], ['D', 'Diamètre', 5], ['L', 'Longueur', .1], ['eps', 'Rugosité', 0], ['K', 'ΣK', 0], ['z1', 'z1'], ['z2', 'z2']]);
  const g = 9.81, Q = p.Q/1000, D = p.D/1000, Ar = Math.PI*D*D/4, V = Q/Ar, Re = V*D/1e-6, lam = Re < 2000 ? 64/Re : .25/Math.pow(lg(p.eps/1000/(3.7*D) + 5.74/Math.pow(Re, .9)), 2);
  const hv = V*V/(2*g), hl = lam*p.L/D*hv, hs = p.K*hv, P2 = (p.z1 - p.z2 - hl - hs - hv)*g, st = [];
  st.push({t:'Vitesse et régime', md:`$$ S = π D²/4 = ${ns(Ar, 4)} m²\n$$ V = Q/S = ${nf(Q, 5)} / ${ns(Ar, 4)} = ${nf(V, 3)} m/s\n$$ Re = V D / ν = ${nf(V, 3)} × ${nf(D, 3)} / 10⁻⁶ = ${nf(Re, 0)}\n${Re < 2000 ? 'Re < 2000 : écoulement **laminaire**.' : 'Re > 4000 : écoulement **turbulent** (cas habituel dans les réseaux d\'eau).'}`, ask:[{l:'V', v:V, u:'m/s'}, {l:'Re', v:Re}], hint:'Convertissez le débit en m³/s et le diamètre en m.'});
  st.push({t:'Coefficient de perte de charge', md:Re < 2000 ? `$$ λ = 64 / Re = ${nf(lam, 4)}` : `Formule de Swamee-Jain (approximation de Colebrook) :\n$$ λ = 0,25 / [ log( ε/(3,7 D) + 5,74/Re^0,9 ) ]² = ${nf(lam, 4)}`, ask:[{l:'λ', v:lam, tol:.03}]});
  st.push({t:'Pertes de charge', md:`$$ V²/2g = ${nf(hv, 4)} m\n$$ ΔH linéaire = λ (L/D) V²/2g = ${nf(lam, 4)} × (${nf(p.L)}/${nf(D, 3)}) × ${nf(hv, 4)} = ${nf(hl, 3)} m\n$$ ΔH singulière = ΣK × V²/2g = ${nf(p.K)} × ${nf(hv, 4)} = ${nf(hs, 3)} m`, ask:[{l:'ΔH linéaire', v:hl, u:'m', tol:.03}]});
  st.push({t:'Pression au robinet (Bernoulli)', md:`Entre le plan d'eau (pression atmosphérique, vitesse nulle) et le robinet :\n$$ z1 = z2 + p2/(ρg) + V²/2g + ΔH total\n$$ p2/(ρg) = ${nf(p.z1)} − ${nf(p.z2)} − ${nf(hv, 3)} − ${nf(hl + hs, 3)} = ${nf(P2/g, 2)} m de colonne d'eau\n$$ p2 = ${nf(P2, 1)} kPa = ${nf(P2/100, 2)} bar\n${P2/100 < .5 ? '**Pression insuffisante** (moins de 0,5 bar) : augmenter le diamètre ou surélever le réservoir.' : P2/100 > 3 ? 'Pression élevée : prévoir un réducteur de pression.' : 'Pression **correcte** pour un robinet (0,5 à 3 bar).'}`, ask:[{l:'p2', v:P2/100, u:'bar', tol:.03, abs:.02}]});
  return {steps:st, bilan:`V = ${nf(V, 2)} m/s, λ = ${nf(lam, 4)}, pertes ${nf(hl + hs, 2)} m → pression au robinet **${nf(P2/100, 2)} bar**.`};
 }});

S.reg({id:'mdf-caniveau', mat:'mdf', mats:['mdf', 'tech'], niv:2, titre:'Dimensionnement d\'un caniveau (méthode rationnelle et Manning-Strickler)', resume:'Débit de pointe d\'un bassin versant, capacité d\'un caniveau rectangulaire, vitesse et vérification.',
 champs:[{k:'Cr', l:'Coefficient de ruissellement C'}, {k:'i', l:'Intensité de pluie', u:'mm/h'}, {k:'Ab', l:'Surface drainée', u:'ha'}, {k:'b', l:'Largeur du caniveau', u:'m'}, {k:'h', l:'Hauteur d\'eau maximale', u:'m'}, {k:'I', l:'Pente du caniveau', u:'%'}, {k:'K', l:'Coefficient de Strickler K'}],
 ex:{Cr:.8, i:120, Ab:1.2, b:.6, h:.5, I:.5, K:70},
 rnd:() => ({Cr:R.s(.5, .9, .05), i:R.s(80, 160, 10), Ab:R.s(.3, 3, .1), b:R.p([.4, .5, .6, .8, 1]), h:R.p([.3, .4, .5, .6, .8]), I:R.s(.2, 2, .1), K:R.p([60, 70, 75])}),
 enonce:p => `Un caniveau rectangulaire en béton doit évacuer les eaux de pluie d'un lotissement de **${nf(p.Ab)} ha** (coefficient de ruissellement C = ${nf(p.Cr)}) pour une pluie d'intensité **${nf(p.i)} mm/h**. Le caniveau fait **${nf(p.b)} m** de large, la hauteur d'eau admise est **${nf(p.h)} m**, la pente **${nf(p.I)} %** et K = ${nf(p.K)} (béton).\n\n1. Calculer le débit de pointe à évacuer (méthode rationnelle).\n2. Calculer la capacité du caniveau (formule de Manning-Strickler).\n3. Conclure et vérifier la vitesse.`,
 solve(p){
  need(p, [['Cr', 'C', .05, 1], ['i', 'Intensité', 1], ['Ab', 'Surface', .001], ['b', 'Largeur', .05], ['h', 'Hauteur', .02], ['I', 'Pente', .01], ['K', 'K', 10]]);
  const Q = p.Cr*p.i*p.Ab/360, Sx = p.b*p.h, P = p.b + 2*p.h, Rh = Sx/P, V = p.K*Math.pow(Rh, 2/3)*Math.sqrt(p.I/100), Qc = V*Sx, st = [];
  st.push({t:'Débit de pointe (méthode rationnelle)', md:`$$ Q = C × i × A / 360   (Q en m³/s, i en mm/h, A en ha)\n$$ Q = ${nf(p.Cr)} × ${nf(p.i)} × ${nf(p.Ab)} / 360 = ${nf(Q, 4)} m³/s = ${nf(Q*1000, 1)} l/s`, ask:[{l:'Q', v:Q, u:'m³/s'}]});
  st.push({t:'Caractéristiques hydrauliques', md:`$$ S mouillée = b × h = ${nf(Sx, 3)} m²\n$$ P mouillé = b + 2h = ${nf(P, 3)} m\n$$ Rh = S/P = ${nf(Rh, 4)} m`, ask:[{l:'Rh', v:Rh, u:'m'}]});
  st.push({t:'Capacité (Manning-Strickler)', md:`$$ V = K × Rh^(2/3) × √I = ${nf(p.K)} × ${nf(Rh, 4)}^(2/3) × √${nf(p.I/100, 4)} = ${nf(V, 3)} m/s\n$$ Q capable = V × S = ${nf(V, 3)} × ${nf(Sx, 3)} = ${nf(Qc, 4)} m³/s`, ask:[{l:'V', v:V, u:'m/s'}, {l:'Q capable', v:Qc, u:'m³/s'}]});
  st.push({t:'Conclusion', md:`${Qc >= Q ? `Q capable = ${nf(Qc, 3)} m³/s ≥ Q = ${nf(Q, 3)} m³/s : **le caniveau convient** (taux de remplissage ${nf(Q/Qc*100, 0)} %).` : `Q capable = ${nf(Qc, 3)} < Q = ${nf(Q, 3)} m³/s : **caniveau insuffisant** — augmenter la largeur, la hauteur ou la pente.`}\nVitesse : ${V < .6 ? `${nf(V, 2)} m/s < 0,6 m/s : risque de **dépôts** (ensablement).` : V > 4 ? `${nf(V, 2)} m/s > 4 m/s : risque d'**érosion** du béton.` : `${nf(V, 2)} m/s comprise entre 0,6 et 4 m/s : **correcte** (autocurage sans érosion).`}`});
  return {steps:st, bilan:`Débit à évacuer **${nf(Q*1000, 0)} l/s** ; capacité **${nf(Qc*1000, 0)} l/s** (V = ${nf(V, 2)} m/s) → ${Qc >= Q ? 'caniveau suffisant' : 'caniveau insuffisant'}.`};
 }});
})();
