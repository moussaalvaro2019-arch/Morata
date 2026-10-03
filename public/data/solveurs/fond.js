/* =====================================================================
   Solveurs guidés : mathématiques, outils mathématiques,
   sciences physiques, recherche opérationnelle
   ===================================================================== */
(function(){
'use strict';
const S = A.SOL, {nf, ns, R, plot, SV, T, Ln, Pth, Rc, Ci, Dim, C} = S.U, need = S.need, Err = S.Err;
const tb = (h, rows) => `| ${h.join(' | ')} |\n| ${h.map(() => '---').join(' | ')} |\n` + rows.map(r => `| ${r.join(' | ')} |`).join('\n');
const rad = d => d*Math.PI/180, deg = r => r*180/Math.PI;

/* ---------------- MATHÉMATIQUES ---------------- */
S.reg({id:'math-triangle', mat:'math', niv:1, titre:'Résolution d\'un triangle (terrain triangulaire)', resume:'Loi des cosinus, loi des sinus, surface (½ b c sin A et Héron), périmètre et hauteur.',
 champs:[{k:'cas', l:'Données connues', t:'sel', w:1, o:[['CCC', 'Les trois côtés'], ['CAC', 'Deux côtés et l\'angle compris'], ['ACA', 'Deux angles et le côté compris']]},
  {k:'a', l:'Côté a = BC', u:'m', if:p => p.cas === 'CCC'}, {k:'b', l:'Côté b = AC', u:'m', if:p => p.cas !== 'ACA'}, {k:'c', l:'Côté c = AB', u:'m'},
  {k:'A', l:'Angle Â', u:'°', if:p => p.cas !== 'CCC'}, {k:'B', l:'Angle B̂', u:'°', if:p => p.cas === 'ACA'}],
 ex:{cas:'CCC', a:25, b:32, c:40, A:55, B:62},
 rnd:() => { const cas = R.p(['CCC', 'CAC', 'ACA']); return {cas, a:R.s(18, 40, 1), b:R.s(20, 45, 1), c:R.s(25, 50, 1), A:R.s(35, 85, 1), B:R.s(35, 70, 1)}; },
 enonce:p => `Un terrain a la forme d'un triangle ABC. On a mesuré ${p.cas === 'CCC' ? `les trois côtés : a = BC = **${nf(p.a)} m**, b = AC = **${nf(p.b)} m** et c = AB = **${nf(p.c)} m**` : p.cas === 'CAC' ? `b = AC = **${nf(p.b)} m**, c = AB = **${nf(p.c)} m** et l'angle Â = **${nf(p.A)}°**` : `l'angle Â = **${nf(p.A)}°**, l'angle B̂ = **${nf(p.B)}°** et le côté c = AB = **${nf(p.c)} m**`}.\n\n1. Calculer les éléments manquants du triangle (côtés et angles).\n2. Calculer la surface du terrain.\n3. Calculer la longueur de clôture (périmètre) et la hauteur issue de C.`,
 solve(p){
  let a, b, c, Aa, Bb, Cc; const st = [];
  if(p.cas === 'CCC'){ need(p, [['a', 'a', .01], ['b', 'b', .01], ['c', 'c', .01]]); ({a, b, c} = p);
    if(a >= b + c || b >= a + c || c >= a + b) throw new Err('Ces longueurs ne forment pas un triangle : chaque côté doit être plus petit que la somme des deux autres.');
    Aa = deg(Math.acos((b*b + c*c - a*a)/(2*b*c))); Bb = deg(Math.acos((a*a + c*c - b*b)/(2*a*c))); Cc = 180 - Aa - Bb;
    st.push({t:'Méthode', md:`On connaît les trois côtés : on utilise la **loi des cosinus** (théorème d'Al-Kashi) pour chaque angle :\n$$ a² = b² + c² − 2 b c cos Â   ⇒   cos Â = (b² + c² − a²) / (2 b c)\nPuis on vérifie que Â + B̂ + Ĉ = 180°.`});
    st.push({t:'Angle Â', md:`$$ cos Â = (${nf(b)}² + ${nf(c)}² − ${nf(a)}²) / (2 × ${nf(b)} × ${nf(c)}) = ${nf((b*b + c*c - a*a)/(2*b*c), 5)}\n$$ Â = ${nf(Aa, 2)}°`, ask:[{l:'Â', v:Aa, u:'°', abs:.15}], hint:'cos Â = (b² + c² − a²)/(2bc), puis touche cos⁻¹ (calculatrice en degrés).'});
    st.push({t:'Angle B̂', md:`$$ cos B̂ = (a² + c² − b²) / (2 a c) = ${nf((a*a + c*c - b*b)/(2*a*c), 5)}\n$$ B̂ = ${nf(Bb, 2)}°`, ask:[{l:'B̂', v:Bb, u:'°', abs:.15}]});
    st.push({t:'Angle Ĉ', md:`$$ Ĉ = 180° − Â − B̂ = 180 − ${nf(Aa, 2)} − ${nf(Bb, 2)} = ${nf(Cc, 2)}°`, ask:[{l:'Ĉ', v:Cc, u:'°', abs:.2}]});
  } else if(p.cas === 'CAC'){ need(p, [['b', 'b', .01], ['c', 'c', .01], ['A', 'Â', .1, 179.9]]); ({b, c} = p); Aa = p.A;
    a = Math.sqrt(b*b + c*c - 2*b*c*Math.cos(rad(Aa))); Bb = deg(Math.acos((a*a + c*c - b*b)/(2*a*c))); Cc = 180 - Aa - Bb;
    st.push({t:'Côté a (loi des cosinus)', md:`$$ a² = b² + c² − 2 b c cos Â = ${nf(b)}² + ${nf(c)}² − 2 × ${nf(b)} × ${nf(c)} × cos ${nf(Aa)}° = ${nf(a*a, 3)}\n$$ a = ${nf(a, 3)} m`, ask:[{l:'a', v:a, u:'m'}], hint:'Al-Kashi : a² = b² + c² − 2bc cos Â.'});
    st.push({t:'Angle B̂', md:`$$ cos B̂ = (a² + c² − b²)/(2 a c) = ${nf((a*a + c*c - b*b)/(2*a*c), 5)}  ⇒  B̂ = ${nf(Bb, 2)}°`, ask:[{l:'B̂', v:Bb, u:'°', abs:.15}]});
    st.push({t:'Angle Ĉ', md:`$$ Ĉ = 180 − ${nf(Aa, 2)} − ${nf(Bb, 2)} = ${nf(Cc, 2)}°`, ask:[{l:'Ĉ', v:Cc, u:'°', abs:.2}]});
  } else { need(p, [['A', 'Â', .1, 179], ['B', 'B̂', .1, 179], ['c', 'c', .01]]); Aa = p.A; Bb = p.B; c = p.c; Cc = 180 - Aa - Bb;
    if(Cc <= 0) throw new Err('La somme des deux angles doit être inférieure à 180°.');
    a = c*Math.sin(rad(Aa))/Math.sin(rad(Cc)); b = c*Math.sin(rad(Bb))/Math.sin(rad(Cc));
    st.push({t:'Angle Ĉ', md:`$$ Ĉ = 180 − Â − B̂ = ${nf(Cc, 2)}°`, ask:[{l:'Ĉ', v:Cc, u:'°', abs:.1}]});
    st.push({t:'Côtés a et b (loi des sinus)', md:`$$ a / sin Â = b / sin B̂ = c / sin Ĉ = ${nf(c/Math.sin(rad(Cc)), 4)}\n$$ a = ${nf(c/Math.sin(rad(Cc)), 4)} × sin ${nf(Aa)}° = ${nf(a, 3)} m\n$$ b = ${nf(c/Math.sin(rad(Cc)), 4)} × sin ${nf(Bb)}° = ${nf(b, 3)} m`, ask:[{l:'a', v:a, u:'m'}, {l:'b', v:b, u:'m'}], hint:'Loi des sinus : a/sin Â = c/sin Ĉ.'});
  }
  const Sx = .5*b*c*Math.sin(rad(Aa)), per = a + b + c, sp = per/2, her = Math.sqrt(Math.max(0, sp*(sp - a)*(sp - b)*(sp - c))), hc = 2*Sx/c;
  st.push({t:'Surface du terrain', md:`$$ S = ½ × b × c × sin Â = ½ × ${nf(b, 3)} × ${nf(c, 3)} × sin ${nf(Aa, 2)}° = ${nf(Sx, 2)} m²\nVérification par la **formule de Héron** (demi-périmètre p = ${nf(sp, 3)} m) :\n$$ S = √(p (p − a)(p − b)(p − c)) = ${nf(her, 2)} m² ✓`, ask:[{l:'S', v:Sx, u:'m²'}]});
  st.push({t:'Périmètre et hauteur', md:`$$ Périmètre = a + b + c = ${nf(a, 3)} + ${nf(b, 3)} + ${nf(c, 3)} = ${nf(per, 2)} m  (longueur de clôture)\n$$ h_C = 2 S / c = ${nf(hc, 3)} m`, ask:[{l:'Périmètre', v:per, u:'m'}, {l:'h_C', v:hc, u:'m'}],
   html:(() => { const k = 300/Math.max(c, b*Math.abs(Math.cos(rad(Aa))) + c, 1), xa = 40, ya = 210, xb = xa + c*k, xc = xa + b*Math.cos(rad(Aa))*k, yc = ya - b*Math.sin(rad(Aa))*k, sc = Math.min(1, 180/(ya - yc));
     const Y = y => ya - (ya - y)*sc, X = x => xa + (x - xa)*sc;
     return `<div class="solfig">${SV(420, 250, Pth(`M${X(xa)},${Y(ya)} L${X(xb)},${Y(ya)} L${X(xc)},${Y(yc)} Z`, {f:'#FDEEE2', c:C.OR, w:2}) + Ln(X(xc), Y(yc), X(xc), Y(ya), {c:C.BL, w:1.2, d:'4 4'}) + T(X(xa) - 14, Y(ya) + 14, 'A', {b:1}) + T(X(xb) + 4, Y(ya) + 14, 'B', {b:1}) + T(X(xc), Y(yc) - 8, 'C', {a:'middle', b:1}) +
       T((X(xa) + X(xb))/2, Y(ya) + 18, 'c = ' + nf(c, 2) + ' m', {a:'middle', s:11}) + T((X(xa) + X(xc))/2 - 10, (Y(ya) + Y(yc))/2, 'b = ' + nf(b, 2), {a:'end', s:11}) + T((X(xb) + X(xc))/2 + 8, (Y(ya) + Y(yc))/2, 'a = ' + nf(a, 2), {s:11}) + T(X(xc) + 4, (Y(ya) + Y(yc))/2 + 20, 'h', {s:11, c:C.BL}), 'Triangle')}</div>`; })()});
  return {steps:st, bilan:`a = **${nf(a, 2)} m**, b = **${nf(b, 2)} m**, c = **${nf(c, 2)} m** ; Â = **${nf(Aa, 2)}°**, B̂ = **${nf(Bb, 2)}°**, Ĉ = **${nf(Cc, 2)}°** ; surface **${nf(Sx, 2)} m²** ; périmètre **${nf(per, 2)} m**.`};
 }});

S.reg({id:'math-2nd', mat:'math', niv:1, titre:'Équation du second degré et parabole', resume:'Discriminant, racines, factorisation, signe et sommet de la parabole.',
 champs:[{k:'a', l:'a'}, {k:'b', l:'b'}, {k:'c', l:'c'}],
 ex:{a:2, b:-2, c:-12},
 rnd:() => { if(Math.random() < .2) return {a:R.p([1, 2]), b:R.i(-4, 4), c:R.i(5, 12)}; const a = R.p([1, -1, 2, 3, -2]), r1 = R.i(-6, 5), r2 = R.i(r1 + 1, 8); return {a, b:-a*(r1 + r2), c:a*r1*r2}; },
 enonce:p => `On considère la fonction f(x) = ${nf(p.a)} x² ${p.b < 0 ? '−' : '+'} ${nf(Math.abs(p.b))} x ${p.c < 0 ? '−' : '+'} ${nf(Math.abs(p.c))}.\n\n1. Calculer le discriminant Δ.\n2. Résoudre l'équation f(x) = 0.\n3. Factoriser f(x) si possible et donner le signe de f(x).\n4. Donner les coordonnées du sommet de la parabole et la tracer.`,
 solve(p){
  need(p, [['a', 'a'], ['b', 'b'], ['c', 'c']]); const {a, b, c} = p; if(Math.abs(a) < 1e-12) throw new Err('a doit être non nul (sinon l\'équation est du premier degré).');
  const D = b*b - 4*a*c, st = [], f = x => a*x*x + b*x + c, xs = -b/(2*a), ys = f(xs);
  st.push({t:'Discriminant', md:`$$ Δ = b² − 4 a c = (${nf(b)})² − 4 × ${nf(a)} × (${nf(c)}) = ${nf(D, 4)}\n${D > 0 ? 'Δ > 0 : deux racines réelles distinctes.' : D === 0 ? 'Δ = 0 : une racine double.' : 'Δ < 0 : pas de racine réelle.'}`, ask:[{l:'Δ', v:D, abs:1e-6 + Math.abs(D)*.005}]});
  let r = [];
  if(D > 1e-12){ r = [(-b - Math.sqrt(D))/(2*a), (-b + Math.sqrt(D))/(2*a)].sort((u, v) => u - v);
    st.push({t:'Racines', md:`$$ x₁ = (−b − √Δ)/(2a) = (${nf(-b)} − ${nf(Math.sqrt(D), 4)})/${nf(2*a)}\n$$ x₂ = (−b + √Δ)/(2a) = (${nf(-b)} + ${nf(Math.sqrt(D), 4)})/${nf(2*a)}\nRacines rangées : **${nf(r[0], 4)}** et **${nf(r[1], 4)}**`, ask:[{l:'Plus petite racine', v:r[0], abs:.005 + Math.abs(r[0])*.005}, {l:'Plus grande racine', v:r[1], abs:.005 + Math.abs(r[1])*.005}]});
    st.push({t:'Factorisation et signe', md:`$$ f(x) = a (x − x₁)(x − x₂) = ${nf(a)} (x ${r[0] < 0 ? '+ ' + nf(-r[0], 4) : '− ' + nf(r[0], 4)})(x ${r[1] < 0 ? '+ ' + nf(-r[1], 4) : '− ' + nf(r[1], 4)})\nf(x) est du **signe de a** (${a > 0 ? 'positif' : 'négatif'}) à l'extérieur des racines et du signe contraire entre elles :\n\n${tb(['x', '−∞ … ' + nf(r[0], 3), nf(r[0], 3) + ' … ' + nf(r[1], 3), nf(r[1], 3) + ' … +∞'], [['f(x)', a > 0 ? '+' : '−', a > 0 ? '−' : '+', a > 0 ? '+' : '−']])}`}); }
  else if(Math.abs(D) <= 1e-12){ r = [-b/(2*a)]; st.push({t:'Racine double', md:`$$ x₀ = −b/(2a) = ${nf(r[0], 4)}\n$$ f(x) = ${nf(a)} (x − ${nf(r[0], 4)})²  : f(x) est du signe de a et s'annule seulement en x₀.`, ask:[{l:'x₀', v:r[0], abs:.005}]}); }
  else st.push({t:'Pas de racine réelle', md:`Δ < 0 : l'équation n'a pas de solution réelle et f(x) garde le signe de a (${a > 0 ? 'toujours positive' : 'toujours négative'}). Elle ne se factorise pas dans ℝ.\nLes racines complexes sont x = (−b ± i√(−Δ))/(2a) = ${nf(-b/(2*a), 4)} ± ${nf(Math.sqrt(-D)/(2*Math.abs(a)), 4)} i.`});
  const lo = Math.min(xs - 4, ...(r.length ? [r[0] - 1.5] : [])), hi = Math.max(xs + 4, ...(r.length ? [r[r.length - 1] + 1.5] : [])), pts = [];
  for(let i = 0; i <= 60; i++){ const x = lo + (hi - lo)*i/60; pts.push([x, f(x)]); }
  st.push({t:'Sommet de la parabole', md:`$$ α = −b/(2a) = ${nf(xs, 4)}     β = f(α) = ${nf(ys, 4)}\nLa parabole est tournée vers le ${a > 0 ? 'haut (minimum)' : 'bas (maximum)'} : ${a > 0 ? 'minimum' : 'maximum'} de f égal à ${nf(ys, 4)} en x = ${nf(xs, 4)}.`,
   ask:[{l:'α', v:xs, abs:.005}, {l:'β', v:ys, abs:.01 + Math.abs(ys)*.005}], html:`<div class="solfig">${plot(pts, {marks:[[xs, ys, 'S'], ...r.map(x => [x, 0, '', C.BL])], xl:'x', ylab:'f(x)', label:'Parabole'})}</div>`});
  return {steps:st, bilan:`Δ = ${nf(D, 3)} ; ${r.length === 2 ? `racines ${nf(r[0], 3)} et ${nf(r[1], 3)}` : r.length ? `racine double ${nf(r[0], 3)}` : 'pas de racine réelle'} ; sommet S(${nf(xs, 3)} ; ${nf(ys, 3)}).`};
 }});

S.reg({id:'math-systeme', mat:'math', niv:2, titre:'Système de 3 équations (méthode du pivot de Gauss)', resume:'Retrouver des prix unitaires à partir de trois factures : élimination de Gauss, remontée, vérification.',
 champs:[{k:'noms', l:'Inconnues (x, y, z)', t:'txt'}, {k:'eq', l:'Équations : a x + b y + c z = d', t:'tab', min:3, max:3, cols:[{k:'a', l:'a'}, {k:'b', l:'b'}, {k:'c', l:'c'}, {k:'d', l:'d', w:90}]}],
 ex:{noms:'prix du sac de ciment, du m³ de sable, du m³ de gravier', eq:[{a:20, b:2, c:3, d:169000}, {a:30, b:4, c:2, d:228000}, {a:10, b:1, c:4, d:122000}]},
 rnd:() => { const x = R.s(4500, 6500, 250), y = R.s(8000, 15000, 500), z = R.s(10000, 18000, 500); const eq = [0, 1, 2].map(() => { const a = R.i(5, 40), b = R.i(1, 6), c = R.i(1, 6); return {a, b, c, d:a*x + b*y + c*z}; }); return {eq}; },
 enonce:p => `Un entrepreneur a reçu trois factures (en FCFA) :\n\n${tb(['Facture', 'Ciment (sacs)', 'Sable (m³)', 'Gravier (m³)', 'Montant'], p.eq.map((e, i) => [i + 1, nf(e.a), nf(e.b), nf(e.c), nf(e.d)]))}\n\nOn note x, y et z respectivement le ${p.noms || 'prix de chaque article'}.\n\n1. Écrire le système d'équations.\n2. Le résoudre par la méthode du pivot de Gauss.\n3. Vérifier les résultats.`,
 solve(p){
  const E = (p.eq || []).map(e => [e.a, e.b, e.c, e.d]); if(E.length !== 3) throw new Err('Il faut exactement 3 équations.');
  E.forEach((r, i) => r.forEach(v => { if(!isFinite(v)) throw new Err(`Ligne ${i + 1} : valeur invalide.`); }));
  const st = [], M = E.map(r => r.slice()), show = (m, t) => tb(['', 'x', 'y', 'z', '= d'], m.map((r, i) => ['L' + (i + 1), ...r.map(v => nf(v, 4))])) + (t ? '\n\n' + t : '');
  const eqTxt = r => `${nf(r[0])} x + ${nf(r[1])} y + ${nf(r[2])} z = ${nf(r[3])}`;
  st.push({t:'Mise en équation', md:`Chaque facture donne une équation :\n${E.map((r, i) => `$$ (L${i + 1})  ${eqTxt(r)}`).join('\n')}\n\nOn écrit la **matrice augmentée** du système :\n\n${show(M)}`});
  let det = 1; const ops = [];
  for(let c = 0; c < 2; c++){
    let pv = c; for(let r = c + 1; r < 3; r++) if(Math.abs(M[r][c]) > Math.abs(M[pv][c]) && Math.abs(M[c][c]) < 1e-12) pv = r;
    if(Math.abs(M[pv][c]) < 1e-12) throw new Err('Pivot nul : le système n\'a pas de solution unique.');
    if(pv !== c){ [M[c], M[pv]] = [M[pv], M[c]]; det = -det; ops.push(`échange de L${c + 1} et L${pv + 1}`); }
    const txt = [];
    for(let r = c + 1; r < 3; r++){ const f = M[r][c]/M[c][c]; if(Math.abs(f) < 1e-15) continue; for(let k = c; k < 4; k++) M[r][k] -= f*M[c][k]; txt.push(`L${r + 1} ← L${r + 1} − (${nf(f, 5)}) × L${c + 1}`); }
    st.push({t:`Élimination de ${c ? 'y' : 'x'} (pivot ${nf(M[c][c], 4)})`, md:`On garde la ligne L${c + 1} et on annule le coefficient de ${c ? 'y' : 'x'} dans les lignes suivantes :\n${txt.map(t => '$$ ' + t).join('\n') || 'déjà nul'}\n\n${show(M)}`,
      ask:c === 1 ? [{l:'Coefficient de z dans L3 après élimination', v:M[2][2], abs:Math.abs(M[2][2])*.01 + 1e-6}] : null});
  }
  if(Math.abs(M[2][2]) < 1e-12) throw new Err('Le système n\'a pas de solution unique (déterminant nul).');
  det *= M[0][0]*M[1][1]*M[2][2];
  const z = M[2][3]/M[2][2], y = (M[1][3] - M[1][2]*z)/M[1][1], x = (M[0][3] - M[0][1]*y - M[0][2]*z)/M[0][0];
  st.push({t:'Remontée (substitution)', md:`Le système est **triangulaire** : on calcule z, puis y, puis x.\n$$ z = ${nf(M[2][3], 4)} / ${nf(M[2][2], 4)} = ${nf(z, 3)}\n$$ y = (${nf(M[1][3], 4)} − ${nf(M[1][2], 4)} × z) / ${nf(M[1][1], 4)} = ${nf(y, 3)}\n$$ x = (${nf(M[0][3], 4)} − ${nf(M[0][1], 4)} y − ${nf(M[0][2], 4)} z) / ${nf(M[0][0], 4)} = ${nf(x, 3)}\nDéterminant du système : produit des pivots = ${nf(det, 3)} (non nul ⇒ solution unique).`,
   ask:[{l:'z', v:z}, {l:'y', v:y}, {l:'x', v:x}], hint:'Commencez par la dernière ligne, qui ne contient plus que z.'});
  st.push({t:'Vérification', md:E.map((r, i) => `$$ L${i + 1} : ${nf(r[0])} × ${nf(x, 2)} + ${nf(r[1])} × ${nf(y, 2)} + ${nf(r[2])} × ${nf(z, 2)} = ${nf(r[0]*x + r[1]*y + r[2]*z, 2)} ✓`).join('\n')});
  return {steps:st, bilan:`x = **${nf(x, 2)}**, y = **${nf(y, 2)}**, z = **${nf(z, 2)}**${p.noms ? ` (${p.noms})` : ''}.`};
 }});

/* ---------------- OUTILS MATHÉMATIQUES ---------------- */
S.reg({id:'om-integration', mat:'om', niv:2, titre:'Aire d\'une surface courbe : trapèzes et Simpson', resume:'Intégration numérique d\'ordonnées relevées sur le terrain (rive, profil) : méthode des trapèzes et de Simpson.',
 champs:[{k:'h', l:'Pas entre les mesures h', u:'m'}, {k:'ys', l:'Ordonnées mesurées', t:'tab', min:3, max:25, cols:[{k:'y', l:'y', u:'m'}], lab:(i) => 'y' + i}],
 ex:{h:5, ys:[{y:12.4}, {y:14.1}, {y:15.8}, {y:15.2}, {y:13.9}, {y:12.0}, {y:10.6}]},
 rnd:() => { const n = R.p([4, 6, 8]), base = R.s(8, 16, .5); return {h:R.p([2, 2.5, 4, 5]), ys:Array.from({length:n + 1}, (_, i) => ({y:+(base + 3*Math.sin(i/n*Math.PI*R.p([1, 1.5])) + R.s(-.6, .6, .1)).toFixed(1)}))}; },
 enonce:p => `Pour calculer la surface d'un terrain limité d'un côté par une rive courbe, on a mesuré tous les **h = ${nf(p.h)} m** la distance y entre une ligne de base droite et la rive :\n\n${tb(['Point', ...p.ys.map((_, i) => 'y' + i)], [['y (m)', ...p.ys.map(r => nf(r.y))]])}\n\n1. Calculer la surface par la méthode des trapèzes.\n2. Calculer la surface par la méthode de Simpson.\n3. Comparer les deux résultats.`,
 solve(p){
  need(p, [['h', 'Pas h', .001]]); const y = p.ys.map(r => r.y); if(y.some(v => !isFinite(v))) throw new Err('Une ordonnée est invalide.');
  const n = y.length - 1, h = p.h, st = [];
  const Tz = h*((y[0] + y[n])/2 + y.slice(1, n).reduce((a, v) => a + v, 0));
  st.push({t:'Méthode des trapèzes', md:`On remplace la courbe par des segments : chaque bande est un trapèze de largeur h.\n$$ S ≈ h × [ (y₀ + yₙ)/2 + y₁ + y₂ + … + yₙ₋₁ ]\n$$ S ≈ ${nf(h)} × [ (${nf(y[0])} + ${nf(y[n])})/2 + ${nf(y.slice(1, n).reduce((a, v) => a + v, 0), 3)} ] = ${nf(Tz, 3)} m²`, ask:[{l:'S (trapèzes)', v:Tz, u:'m²'}], hint:'Les ordonnées extrêmes comptent pour moitié, les autres pour 1.'});
  let Sp = null;
  if(n % 2 === 0){ const odd = y.filter((v, i) => i % 2 === 1 && i < n).reduce((a, v) => a + v, 0), even = y.filter((v, i) => i % 2 === 0 && i > 0 && i < n).reduce((a, v) => a + v, 0);
    Sp = h/3*(y[0] + y[n] + 4*odd + 2*even);
    st.push({t:'Méthode de Simpson', md:`Le nombre d'intervalles n = ${n} est **pair** : on remplace la courbe par des arcs de parabole (deux bandes à la fois).\n$$ S ≈ h/3 × [ y₀ + yₙ + 4 × (y₁ + y₃ + …) + 2 × (y₂ + y₄ + …) ]\n$$ S ≈ ${nf(h)}/3 × [ ${nf(y[0] + y[n], 3)} + 4 × ${nf(odd, 3)} + 2 × ${nf(even, 3)} ] = ${nf(Sp, 3)} m²`, ask:[{l:'S (Simpson)', v:Sp, u:'m²'}], hint:'Coefficients 1 – 4 – 2 – 4 – … – 4 – 1, le tout multiplié par h/3.'}); }
  else st.push({t:'Méthode de Simpson', md:`Le nombre d'intervalles n = ${n} est **impair** : la méthode de Simpson exige un nombre pair d'intervalles. On peut l'appliquer aux ${n - 1} premiers intervalles et compter le dernier en trapèze, ou ajouter une mesure.`});
  const pts = y.map((v, i) => [i*h, v]);
  st.push({t:'Comparaison', md:Sp != null ? `Écart entre les deux méthodes : ${nf(Math.abs(Sp - Tz), 3)} m², soit ${nf(Math.abs(Sp - Tz)/Sp*100, 2)} %. Simpson est en général plus précise pour une rive régulièrement courbe.` : 'Seule la méthode des trapèzes est applicable ici.',
   html:`<div class="solfig">${plot(pts, {series:[{pts, c:C.OR}, {pts, dots:1, c:C.BL}], y0:0, xl:'x (m)', ylab:'y (m)', label:'Ordonnées relevées'})}</div>`});
  return {steps:st, bilan:`Surface ≈ **${nf(Tz, 2)} m²** (trapèzes)${Sp != null ? ` ; **${nf(Sp, 2)} m²** (Simpson)` : ''}.`};
 }});

S.reg({id:'om-regression', mat:'om', niv:2, titre:'Régression linéaire (méthode des moindres carrés)', resume:'Droite d\'ajustement y = a x + b, coefficient de corrélation et prévision : exemple résistance du béton / dosage.',
 champs:[{k:'xl', l:'Nom de x', t:'txt'}, {k:'yl', l:'Nom de y', t:'txt'}, {k:'pts', l:'Mesures', t:'tab', min:3, max:20, cols:[{k:'x', l:'x'}, {k:'y', l:'y'}]}, {k:'x0', l:'Valeur de x pour la prévision'}],
 ex:{xl:'dosage en ciment (kg/m³)', yl:'résistance à 28 jours (MPa)', pts:[{x:250, y:17.5}, {x:300, y:21.8}, {x:350, y:26.1}, {x:400, y:29.4}, {x:450, y:33.9}], x0:325},
 rnd:() => { const a = R.s(.06, .1, .005), b = R.s(-5, 2, .5), xs = [250, 300, 350, 400, 450].slice(0, R.p([4, 5])); return {pts:xs.map(x => ({x, y:+(a*x + b + R.s(-1, 1, .1)).toFixed(1)})), x0:R.p([275, 325, 375])}; },
 enonce:p => `On a mesuré ${p.yl || 'y'} en fonction de ${p.xl || 'x'} :\n\n${tb(['x', ...p.pts.map(r => nf(r.x))], [['y', ...p.pts.map(r => nf(r.y))]])}\n\n1. Calculer les moyennes, la variance de x et la covariance.\n2. Déterminer la droite des moindres carrés y = a x + b.\n3. Calculer le coefficient de corrélation r et conclure.\n4. Prévoir y pour x = ${nf(p.x0)}.`,
 solve(p){
  const P = p.pts.filter(r => isFinite(r.x) && isFinite(r.y)); if(P.length < 3) throw new Err('Il faut au moins 3 mesures valides.'); need(p, [['x0', 'x de prévision']]);
  const n = P.length, mx = P.reduce((a, r) => a + r.x, 0)/n, my = P.reduce((a, r) => a + r.y, 0)/n;
  const vx = P.reduce((a, r) => a + (r.x - mx)**2, 0)/n, vy = P.reduce((a, r) => a + (r.y - my)**2, 0)/n, cv = P.reduce((a, r) => a + (r.x - mx)*(r.y - my), 0)/n;
  if(vx < 1e-12) throw new Err('Toutes les valeurs de x sont égales.');
  const a = cv/vx, b = my - a*mx, rr = cv/Math.sqrt(vx*vy || 1e-12), y0 = a*p.x0 + b, st = [];
  st.push({t:'Moyennes', md:`$$ x̄ = Σx / n = ${nf(mx, 4)}     ȳ = Σy / n = ${nf(my, 4)}   (n = ${n})`, ask:[{l:'x̄', v:mx}, {l:'ȳ', v:my}]});
  st.push({t:'Variance et covariance', md:tb(['x', 'y', 'x − x̄', 'y − ȳ', '(x − x̄)²', '(x − x̄)(y − ȳ)'], P.map(r => [nf(r.x), nf(r.y), nf(r.x - mx, 3), nf(r.y - my, 3), nf((r.x - mx)**2, 3), nf((r.x - mx)*(r.y - my), 3)])) + `\n\n$$ V(x) = Σ(x − x̄)² / n = ${nf(vx, 4)}\n$$ cov(x, y) = Σ(x − x̄)(y − ȳ) / n = ${nf(cv, 4)}`, ask:[{l:'V(x)', v:vx}, {l:'cov(x, y)', v:cv}]});
  st.push({t:'Droite des moindres carrés', md:`$$ a = cov(x, y) / V(x) = ${nf(cv, 4)} / ${nf(vx, 4)} = ${ns(a, 5)}\n$$ b = ȳ − a x̄ = ${nf(my, 4)} − ${ns(a, 5)} × ${nf(mx, 4)} = ${nf(b, 4)}\nDroite d'ajustement : **y = ${ns(a, 5)} x ${b < 0 ? '−' : '+'} ${nf(Math.abs(b), 4)}**`, ask:[{l:'a', v:a}, {l:'b', v:b, abs:Math.abs(b)*.02 + .01}],
   html:`<div class="solfig">${plot(P.map(r => [r.x, r.y]), {series:[{pts:P.map(r => [r.x, r.y]), dots:1, c:C.OR}, {pts:[[Math.min(...P.map(r => r.x), p.x0), a*Math.min(...P.map(r => r.x), p.x0) + b], [Math.max(...P.map(r => r.x), p.x0), a*Math.max(...P.map(r => r.x), p.x0) + b]], c:C.BL}], marks:[[p.x0, y0, 'prévision', C.RD]], y0:Math.min(0, ...P.map(r => r.y)), xl:p.xl || 'x', ylab:p.yl || 'y', label:'Nuage de points et droite'})}</div>`});
  st.push({t:'Coefficient de corrélation', md:`$$ r = cov(x, y) / (σx σy) = ${nf(cv, 4)} / (${nf(Math.sqrt(vx), 4)} × ${nf(Math.sqrt(vy), 4)}) = ${nf(rr, 4)}\n${Math.abs(rr) >= .9 ? '|r| ≥ 0,9 : la corrélation linéaire est **forte**, la droite représente bien les mesures.' : Math.abs(rr) >= .7 ? 'Corrélation moyenne : la prévision est à prendre avec prudence.' : 'Corrélation faible : un modèle linéaire n\'est pas adapté.'}`, ask:[{l:'r', v:rr, abs:.005}]});
  st.push({t:'Prévision', md:`$$ y(${nf(p.x0)}) = ${ns(a, 5)} × ${nf(p.x0)} ${b < 0 ? '−' : '+'} ${nf(Math.abs(b), 4)} = ${nf(y0, 3)}`, ask:[{l:'y prévu', v:y0}]});
  return {steps:st, bilan:`y = **${ns(a, 4)} x ${b < 0 ? '−' : '+'} ${nf(Math.abs(b), 3)}**, r = **${nf(rr, 3)}** ; pour x = ${nf(p.x0)} : y ≈ **${nf(y0, 2)}**.`};
 }});

S.reg({id:'om-optim', mat:'om', niv:2, titre:'Optimisation par la dérivée (caniveau, citerne, bac)', resume:'Mettre le problème en fonction d\'une seule variable, dériver, annuler la dérivée et conclure.',
 champs:[{k:'forme', l:'Problème', t:'sel', w:1, o:[['caniveau', 'Caniveau rectangulaire ouvert : section S donnée, périmètre mouillé minimal'], ['citerne', 'Citerne cylindrique fermée : volume V donné, surface de tôle minimale'], ['bac', 'Bac à base carrée sans couvercle : volume V donné, surface minimale']]},
  {k:'S', l:'Section d\'écoulement S', u:'m²', if:p => p.forme === 'caniveau'}, {k:'V', l:'Volume V', u:'m³', if:p => p.forme !== 'caniveau'}],
 ex:{forme:'caniveau', S:.5, V:10},
 rnd:() => ({forme:R.p(['caniveau', 'citerne', 'bac']), S:R.s(.2, 1.2, .05), V:R.s(2, 30, 1)}),
 enonce:p => p.forme === 'caniveau' ? `On veut construire un caniveau en béton de section rectangulaire ouverte (largeur b, hauteur d'eau h) offrant une section d'écoulement **S = ${nf(p.S)} m²**. Pour limiter le frottement et la quantité de béton, on cherche le **périmètre mouillé P = b + 2h minimal**.\n\n1. Exprimer P en fonction de h seulement.\n2. Étudier les variations de P(h).\n3. En déduire b, h et le périmètre minimal.`
  : p.forme === 'citerne' ? `On fabrique une citerne cylindrique fermée de volume **V = ${nf(p.V)} m³**. On cherche le rayon r et la hauteur h qui **minimisent la surface de tôle**.\n\n1. Exprimer la surface A en fonction de r.\n2. Étudier ses variations.\n3. En déduire r, h et la surface minimale.`
  : `On construit un bac de rétention à base carrée (côté x), sans couvercle, de volume **V = ${nf(p.V)} m³**. On veut **minimiser la surface des parois** (donc le coût).\n\n1. Exprimer la surface A en fonction de x.\n2. Étudier ses variations.\n3. En déduire les dimensions optimales.`,
 solve(p){
  const st = []; let fx, xo, fo, varn, dims, d1, d2, xlab;
  if(p.forme === 'caniveau'){ need(p, [['S', 'S', .001]]); const Sv = p.S; xo = Math.sqrt(Sv/2); fo = 2*Math.sqrt(2*Sv); fx = h => Sv/h + 2*h; varn = 'h'; xlab = 'h (m)';
    st.push({t:'Fonction à minimiser', md:`$$ S = b × h  ⇒  b = S / h = ${nf(Sv)} / h\n$$ P(h) = b + 2h = ${nf(Sv)}/h + 2h      (h > 0)`});
    d1 = `$$ P'(h) = −${nf(Sv)}/h² + 2`; d2 = `$$ P'(h) = 0  ⇔  h² = S/2 = ${nf(Sv/2, 4)}  ⇔  h = √(S/2) = ${nf(xo, 4)} m`; dims = `$$ h = ${nf(xo, 3)} m     b = S/h = ${nf(Sv/xo, 3)} m  (b = 2h : le caniveau optimal est deux fois plus large que profond)\n$$ P min = ${nf(fo, 3)} m`; }
  else if(p.forme === 'citerne'){ need(p, [['V', 'V', .001]]); const V = p.V; xo = Math.cbrt(V/(2*Math.PI)); fx = r => 2*Math.PI*r*r + 2*V/r; fo = fx(xo); varn = 'r'; xlab = 'r (m)';
    st.push({t:'Fonction à minimiser', md:`$$ V = π r² h  ⇒  h = V/(π r²)\n$$ A(r) = 2 π r² + 2 π r h = 2 π r² + 2V/r = 2π r² + ${nf(2*V, 3)}/r`});
    d1 = `$$ A'(r) = 4 π r − 2V/r²`; d2 = `$$ A'(r) = 0  ⇔  r³ = V/(2π) = ${nf(V/(2*Math.PI), 4)}  ⇔  r = ${nf(xo, 4)} m`; dims = `$$ r = ${nf(xo, 3)} m   (diamètre ${nf(2*xo, 3)} m)     h = V/(π r²) = ${nf(V/(Math.PI*xo*xo), 3)} m  (h = 2r = diamètre)\n$$ A min = ${nf(fo, 3)} m²`; }
  else { need(p, [['V', 'V', .001]]); const V = p.V; xo = Math.cbrt(2*V); fx = x => x*x + 4*V/x; fo = fx(xo); varn = 'x'; xlab = 'x (m)';
    st.push({t:'Fonction à minimiser', md:`$$ V = x² h  ⇒  h = V/x²\n$$ A(x) = x² + 4 x h = x² + 4V/x = x² + ${nf(4*V, 3)}/x`});
    d1 = `$$ A'(x) = 2x − 4V/x²`; d2 = `$$ A'(x) = 0  ⇔  x³ = 2V = ${nf(2*V, 3)}  ⇔  x = ${nf(xo, 4)} m`; dims = `$$ x = ${nf(xo, 3)} m     h = V/x² = ${nf(V/(xo*xo), 3)} m  (h = x/2)\n$$ A min = ${nf(fo, 3)} m²`; }
  st.push({t:'Dérivée et valeur critique', md:`${d1}\n${d2}\nLa dérivée est négative avant cette valeur et positive après : la fonction **décroît puis croît**, c'est un **minimum**.`, ask:[{l:varn + ' optimal', v:xo, u:'m'}], hint:'Annulez la dérivée et isolez la variable.'});
  const pts = []; for(let i = 1; i <= 60; i++){ const x = xo*(.25 + 2.75*i/60); pts.push([x, fx(x)]); }
  st.push({t:'Dimensions optimales', md:dims, ask:[{l:'Valeur minimale', v:fo, u:p.forme === 'caniveau' ? 'm' : 'm²'}], html:`<div class="solfig">${plot(pts, {marks:[[xo, fo, 'minimum']], xl:xlab, ylab:p.forme === 'caniveau' ? 'P (m)' : 'A (m²)', label:'Fonction étudiée', y0:0})}</div>`});
  return {steps:st, bilan:dims.replace(/\$\$ /g, '').replace(/\n/g, ' ; ')};
 }});

/* ---------------- SCIENCES PHYSIQUES ---------------- */
S.reg({id:'sp-plan-incline', mat:'sp', niv:1, titre:'Charge sur une rampe (plan incliné avec frottement)', resume:'Poids, réaction, frottement : force pour monter une charge ou la retenir sur une rampe de chantier.',
 champs:[{k:'m', l:'Masse de la charge', u:'kg'}, {k:'mode', l:'Inclinaison donnée en', t:'sel', o:[['pc', 'pente (%)'], ['deg', 'degrés']]}, {k:'al', l:'Inclinaison', u:'% ou °'}, {k:'mu', l:'Coefficient de frottement μ'}],
 ex:{m:250, mode:'pc', al:15, mu:.3},
 rnd:() => ({m:R.s(80, 600, 10), mode:R.p(['pc', 'deg']), al:R.s(8, 30, 1), mu:R.s(.15, .5, .05)}),
 enonce:p => `Une brouette chargée (ou une palette sur patins) de masse **${nf(p.m)} kg** est sur une rampe de chantier inclinée de **${nf(p.al)} ${p.mode === 'pc' ? '%' : '°'}**. Le coefficient de frottement est **μ = ${nf(p.mu)}**. On prend g = 9,81 m/s².\n\n1. Calculer le poids P et ses composantes parallèle et perpendiculaire à la rampe.\n2. Calculer la réaction normale et la force de frottement maximale.\n3. La charge reste-t-elle immobile seule ?\n4. Quelle force parallèle à la rampe faut-il pour la monter à vitesse constante ?`,
 solve(p){
  need(p, [['m', 'Masse', .1], ['al', 'Inclinaison', 0], ['mu', 'μ', 0, 2]]);
  const a = p.mode === 'pc' ? Math.atan(p.al/100) : rad(p.al); if(a >= Math.PI/2) throw new Err('Inclinaison trop forte.');
  const P = p.m*9.81, Pt = P*Math.sin(a), Pn = P*Math.cos(a), Fm = p.mu*Pn, Fup = Pt + Fm, Fret = Pt - Fm, st = [];
  st.push({t:'Poids et angle', md:`$$ P = m × g = ${nf(p.m)} × 9,81 = ${nf(P, 1)} N\n${p.mode === 'pc' ? `$$ α = arctan(pente) = arctan(${nf(p.al/100, 3)}) = ${nf(deg(a), 2)}°` : `α = ${nf(p.al)}°`}`, ask:[{l:'P', v:P, u:'N'}]});
  st.push({t:'Composantes du poids', md:`$$ P_t = P sin α = ${nf(P, 1)} × sin ${nf(deg(a), 2)}° = ${nf(Pt, 1)} N   (tend à faire descendre)\n$$ P_n = P cos α = ${nf(Pn, 1)} N   (presse sur la rampe)`, ask:[{l:'P_t', v:Pt, u:'N'}, {l:'P_n', v:Pn, u:'N'}],
   html:(() => { const L = 300, x0 = 40, y0 = 200, x1 = x0 + L*Math.cos(a), y1 = y0 - L*Math.sin(a), mx = x0 + L*.55*Math.cos(a), my = y0 - L*.55*Math.sin(a), u = 70;
     return `<div class="solfig">${SV(400, 230, Pth(`M${x0},${y0} L${x1},${y1} L${x1},${y0} Z`, {f:'#E9E4DA', c:C.INK}) + `<rect x="${mx - 18}" y="${my - 30}" width="36" height="28" fill="${C.OR}" transform="rotate(${-deg(a)} ${mx} ${my})"/>` +
       Ln(mx, my - 14, mx, my - 14 + u, {c:C.RD, w:2.4, m:'sr'}) + T(mx + 6, my - 14 + u, 'P', {c:C.RD, b:1}) + Ln(mx, my - 14, mx - u*.9*Math.cos(a), my - 14 + u*.9*Math.sin(a), {c:C.BL, w:2, m:'sb'}) + T(mx - u*Math.cos(a) - 8, my + u*.9*Math.sin(a) - 4, 'Pt', {c:C.BL, b:1, a:'end'}) +
       Ln(mx, my - 14, mx + u*.6*Math.sin(a), my - 14 - u*.6*Math.cos(a), {c:C.OK, w:2, m:'sg'}) + T(mx + u*.6*Math.sin(a) + 4, my - 20 - u*.6*Math.cos(a), 'N', {c:C.OK, b:1}) + T(x0 + 50, y0 - 6, 'α = ' + nf(deg(a), 1) + '°', {s:11}), 'Plan incliné')}</div>`; })()});
  st.push({t:'Réaction et frottement', md:`La réaction normale équilibre P_n : $$ N = ${nf(Pn, 1)} N\nForce de frottement maximale (loi de Coulomb) : $$ F_max = μ N = ${nf(p.mu)} × ${nf(Pn, 1)} = ${nf(Fm, 1)} N\n${Pt <= Fm ? `P_t = ${nf(Pt, 1)} N ≤ F_max : **la charge reste immobile** seule (tan α = ${nf(Math.tan(a), 3)} ≤ μ).` : `P_t = ${nf(Pt, 1)} N > F_max : **la charge glisse** si on la lâche ; il faut la retenir avec au moins ${nf(Fret, 1)} N.`}`, ask:[{l:'F_max', v:Fm, u:'N'}]});
  st.push({t:'Force pour monter', md:`Pour monter à vitesse constante, la force F parallèle à la rampe équilibre P_t et le frottement (qui s'oppose au mouvement, donc vers le bas) :\n$$ F = P_t + μ N = ${nf(Pt, 1)} + ${nf(Fm, 1)} = ${nf(Fup, 1)} N  (≈ ${nf(Fup/9.81, 1)} kgf)`, ask:[{l:'F', v:Fup, u:'N'}]});
  return {steps:st, bilan:`P = ${nf(P, 0)} N ; N = ${nf(Pn, 0)} N ; frottement max ${nf(Fm, 0)} N ; force pour monter **${nf(Fup, 0)} N** ; ${Pt <= Fm ? 'la charge tient seule' : `force de retenue ${nf(Fret, 0)} N`}.`};
 }});

const DIL = {beton:['Béton', 10e-6, 30000], acier:['Acier', 12e-6, 210000], alu:['Aluminium', 23e-6, 70000], pvc:['PVC', 70e-6, 3000], bois:['Bois (fil)', 5e-6, 11000]};
S.reg({id:'sp-dilatation', mat:'sp', niv:1, titre:'Dilatation thermique et joint de dilatation', resume:'Allongement ΔL = α L ΔT, largeur de joint, contrainte si l\'élément est bloqué.',
 champs:[{k:'mat', l:'Matériau', t:'sel', o:Object.entries(DIL).map(([k, v]) => [k, v[0]])}, {k:'L', l:'Longueur', u:'m'}, {k:'T1', l:'Température à la pose', u:'°C'}, {k:'T2', l:'Température maximale', u:'°C'}, {k:'Ac', l:'Section', u:'cm²'}],
 ex:{mat:'beton', L:30, T1:22, T2:55, Ac:2000},
 rnd:() => ({mat:R.p(Object.keys(DIL)), L:R.s(6, 60, 1), T1:R.s(18, 28, 1), T2:R.s(45, 65, 1), Ac:R.s(5, 2500, 5)}),
 enonce:p => `Un élément en ${DIL[p.mat][0].toLowerCase()} de **${nf(p.L)} m** de long est posé à **${nf(p.T1)} °C**. Exposé au soleil, il peut atteindre **${nf(p.T2)} °C**. Sa section est de **${nf(p.Ac)} cm²**.\nOn donne α = ${ns(DIL[p.mat][1], 3)} /°C et E = ${nf(DIL[p.mat][2])} MPa.\n\n1. Calculer l'allongement libre ΔL.\n2. Quelle largeur de joint faut-il prévoir ?\n3. Si l'élément était bloqué à ses deux extrémités, quelle contrainte et quel effort apparaîtraient ?`,
 solve(p){
  need(p, [['L', 'Longueur', .01], ['T1', 'T pose'], ['T2', 'T max'], ['Ac', 'Section', .01]]); const [n, al, E] = DIL[p.mat], dT = p.T2 - p.T1, dL = al*p.L*dT, sg = E*al*dT, N = sg*p.Ac*100/1000, st = [];
  st.push({t:'Écart de température', md:`$$ ΔT = ${nf(p.T2)} − ${nf(p.T1)} = ${nf(dT)} °C`, ask:[{l:'ΔT', v:dT, u:'°C', abs:.01}]});
  st.push({t:'Allongement libre', md:`$$ ΔL = α × L × ΔT = ${ns(al, 3)} × ${nf(p.L)} × ${nf(dT)} = ${ns(dL, 4)} m = ${nf(dL*1000, 2)} mm`, ask:[{l:'ΔL', v:dL*1000, u:'mm'}], hint:'Attention aux unités : L en m donne ΔL en m ; multipliez par 1000 pour des mm.'});
  st.push({t:'Joint de dilatation', md:`Le joint doit absorber au moins ΔL = ${nf(dL*1000, 1)} mm, avec une marge (retrait, mise en œuvre) : on retient un joint de **${Math.max(10, Math.ceil(dL*1000*1.5/5)*5)} mm** rempli d'un matériau compressible.\n\n> [!norme] Règle pratique\n> En climat chaud, les bâtiments en béton sont fractionnés par des joints de dilatation tous les 25 à 30 m environ.`});
  st.push({t:'Élément bloqué', md:`Si l'allongement est empêché, la déformation thermique devient une contrainte (loi de Hooke) :\n$$ σ = E × α × ΔT = ${nf(E)} × ${ns(al, 3)} × ${nf(dT)} = ${nf(sg, 2)} MPa\n$$ N = σ × A = ${nf(sg, 2)} × ${nf(p.Ac*100)} mm² = ${nf(N, 1)} kN\n${p.mat === 'beton' ? `Pour le béton, ${nf(sg, 1)} MPa de compression est supportable, mais au refroidissement la même valeur en traction (> ft28 ≈ 2,1 MPa) **fissure** le béton : d'où les joints.` : ''}`, ask:[{l:'σ', v:sg, u:'MPa'}, {l:'N', v:N, u:'kN'}]});
  return {steps:st, bilan:`ΔL = **${nf(dL*1000, 1)} mm** ; contrainte si bloqué **${nf(sg, 1)} MPa** (effort ${nf(N, 0)} kN).`};
 }});

const SECT = [[1.5, 16], [2.5, 20], [4, 25], [6, 32], [10, 40], [16, 63], [25, 80], [35, 100], [50, 125]];
const CAL = [10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];
S.reg({id:'sp-elec', mat:'sp', niv:2, titre:'Section d\'un câble électrique et chute de tension', resume:'Courant d\'emploi, calibre du disjoncteur, section du câble (NF C 15-100 simplifiée) et chute de tension.',
 champs:[{k:'res', l:'Réseau', t:'sel', o:[['mono', 'Monophasé 230 V'], ['tri', 'Triphasé 400 V']]}, {k:'P', l:'Puissance', u:'W'}, {k:'cos', l:'Facteur de puissance cos φ'}, {k:'L', l:'Longueur du câble', u:'m'}, {k:'us', l:'Usage', t:'sel', o:[['ecl', 'Éclairage (ΔU ≤ 3 %)'], ['aut', 'Prises, climatiseur, pompe (ΔU ≤ 5 %)']]}],
 ex:{res:'mono', P:3500, cos:.85, L:28, us:'aut'},
 rnd:() => ({res:R.p(['mono', 'mono', 'tri']), P:R.s(800, 12000, 100), cos:R.s(.8, 1, .05), L:R.s(10, 80, 1), us:R.p(['ecl', 'aut'])}),
 enonce:p => `On alimente ${p.us === 'ecl' ? 'un circuit d\'éclairage' : 'un appareil (climatiseur, pompe…)'} de **${nf(p.P)} W** (cos φ = ${nf(p.cos)}) en ${p.res === 'mono' ? 'monophasé 230 V' : 'triphasé 400 V'}, avec un câble en cuivre de **${nf(p.L)} m**.\n\n1. Calculer le courant d'emploi.\n2. Choisir le calibre du disjoncteur et la section du câble.\n3. Vérifier la chute de tension (limite ${p.us === 'ecl' ? '3' : '5'} %) et corriger la section si besoin.`,
 solve(p){
  need(p, [['P', 'Puissance', 1], ['cos', 'cos φ', .3, 1], ['L', 'Longueur', 1]]); const mono = p.res === 'mono', U = mono ? 230 : 400, lim = p.us === 'ecl' ? 3 : 5, rho = .0225;
  const I = mono ? p.P/(U*p.cos) : p.P/(Math.sqrt(3)*U*p.cos); const cal = CAL.find(c => c >= I); if(!cal) throw new Err('Courant trop élevé pour cet exercice (plus de 125 A).');
  let k = SECT.findIndex(s => s[1] >= cal); if(p.us === 'ecl') k = Math.max(0, k); const st = [];
  const du = s => (mono ? 2 : Math.sqrt(3))*rho*p.L*I*p.cos/s, pc = s => du(s)/U*100;
  st.push({t:'Courant d\'emploi', md:mono ? `$$ I = P / (U cos φ) = ${nf(p.P)} / (230 × ${nf(p.cos)}) = ${nf(I, 2)} A` : `$$ I = P / (√3 U cos φ) = ${nf(p.P)} / (1,732 × 400 × ${nf(p.cos)}) = ${nf(I, 2)} A`, ask:[{l:'I', v:I, u:'A'}]});
  st.push({t:'Disjoncteur et section', md:`Le calibre In du disjoncteur doit être ≥ I : **In = ${cal} A**. La section du câble doit être protégée par ce calibre :\n\n${tb(['Section (mm²)', ...SECT.map(s => s[0])], [['Calibre max (A)', ...SECT.map(s => s[1])]])}\n\n→ section minimale **${SECT[k][0]} mm²**.`, ask:[{l:'Calibre In', v:cal, u:'A', abs:.1}, {l:'Section', v:SECT[k][0], u:'mm²', abs:.01}]});
  let kk = k; while(kk < SECT.length - 1 && pc(SECT[kk][0]) > lim) kk++;
  st.push({t:'Chute de tension', md:`$$ ΔU = ${mono ? '2' : '√3'} × ρ × L × I × cos φ / S   (ρ cuivre = 0,0225 Ω·mm²/m)\n$$ ΔU = ${mono ? '2' : '1,732'} × 0,0225 × ${nf(p.L)} × ${nf(I, 2)} × ${nf(p.cos)} / ${SECT[k][0]} = ${nf(du(SECT[k][0]), 2)} V  soit ${nf(pc(SECT[k][0]), 2)} %\n` + (kk === k ? `${nf(pc(SECT[k][0]), 2)} % ≤ ${lim} % : **la section ${SECT[k][0]} mm² convient**.` : `${nf(pc(SECT[k][0]), 2)} % > ${lim} % : on augmente la section → **${SECT[kk][0]} mm²** donne ΔU = ${nf(pc(SECT[kk][0]), 2)} %.`), ask:[{l:`ΔU en % avec ${SECT[k][0]} mm²`, v:pc(SECT[k][0]), u:'%'}]});
  return {steps:st, bilan:`I = **${nf(I, 1)} A** → disjoncteur **${cal} A**, câble cuivre **${SECT[kk][0]} mm²** (ΔU = ${nf(pc(SECT[kk][0]), 2)} %).`};
 }});

/* ---------------- RECHERCHE OPÉRATIONNELLE ---------------- */
S.reg({id:'ro-pert', mat:'ro', mats:['ro', 'chant'], niv:2, titre:'Planning PERT : dates, marges et chemin critique', resume:'Tableau des tâches et antériorités → dates au plus tôt et au plus tard, marges, chemin critique et diagramme de Gantt.',
 ia:'{"t":[{"code":"A","nom":"Implantation","d":2,"ant":""},{"code":"B","nom":"Fouilles","d":4,"ant":"A"}]} — d en jours, ant = codes des tâches antérieures séparés par des virgules',
 champs:[{k:'t', l:'Tâches', t:'tab', min:2, max:20, cols:[{k:'code', l:'Code', t:'txt', w:44}, {k:'nom', l:'Tâche', t:'txt', w:140}, {k:'d', l:'Durée', u:'j', w:50}, {k:'ant', l:'Antériorités', t:'txt', w:70}], row:rows => ({code:String.fromCharCode(65 + rows.length), nom:'Nouvelle tâche', d:2, ant:rows.length ? rows[rows.length - 1].code : ''})}],
 ex:{t:[{code:'A', nom:'Implantation', d:2, ant:''}, {code:'B', nom:'Fouilles', d:5, ant:'A'}, {code:'C', nom:'Ferraillage des semelles', d:3, ant:'A'}, {code:'D', nom:'Béton de propreté', d:1, ant:'B'}, {code:'E', nom:'Semelles et longrines', d:4, ant:'C,D'}, {code:'F', nom:'Soubassement', d:5, ant:'E'}, {code:'G', nom:'Remblai et dallage', d:3, ant:'F'}, {code:'H', nom:'Réseaux sous dallage', d:2, ant:'E'}]},
 rnd:() => { const names = ['Implantation', 'Fouilles', 'Ferraillage', 'Coffrage', 'Béton de propreté', 'Semelles', 'Soubassement', 'Réseaux', 'Remblai', 'Dallage', 'Élévation', 'Chaînage']; const n = R.i(6, 9), t = [];
   for(let i = 0; i < n; i++){ const code = String.fromCharCode(65 + i); let ant = ''; if(i){ const k = R.i(1, Math.min(2, i)); const s = new Set(); while(s.size < k) s.add(String.fromCharCode(65 + R.i(Math.max(0, i - 3), i - 1))); ant = [...s].sort().join(','); } t.push({code, nom:names[i], d:R.i(1, 6), ant}); } return {t}; },
 enonce:p => `Le conducteur de travaux prépare le planning des fondations d'une maison :\n\n${tb(['Code', 'Tâche', 'Durée (jours)', 'Antériorités'], p.t.map(r => [r.code, r.nom, nf(r.d), r.ant || '—']))}\n\n1. Calculer les dates de début au plus tôt et au plus tard de chaque tâche.\n2. Calculer les marges totales et libres.\n3. Déterminer le chemin critique et la durée minimale du chantier.\n4. Tracer le diagramme de Gantt.`,
 solve(p){
  const tk = p.t.map(r => ({code:String(r.code || '').trim().toUpperCase(), nom:r.nom, d:+r.d, ant:String(r.ant || '').toUpperCase().split(/[,;\s]+/).filter(Boolean)}));
  const by = {}; tk.forEach(t => { if(!t.code) throw new Err('Chaque tâche doit avoir un code.'); if(by[t.code]) throw new Err(`Code en double : ${t.code}`); if(!(t.d >= 0)) throw new Err(`Durée invalide pour ${t.code}`); by[t.code] = t; });
  tk.forEach(t => t.ant.forEach(a => { if(!by[a]) throw new Err(`Antériorité inconnue « ${a} » pour la tâche ${t.code}`); }));
  // rangs (tri topologique)
  const rank = {}; let changed = true, guard = 0;
  while(changed && guard++ < 100){ changed = false; tk.forEach(t => { const r = t.ant.length ? Math.max(...t.ant.map(a => rank[a] ?? -1)) + 1 : 0; if(t.ant.every(a => rank[a] != null) && rank[t.code] !== r){ rank[t.code] = r; changed = true; } }); }
  if(tk.some(t => rank[t.code] == null)) throw new Err('Le réseau contient une boucle (une tâche dépend d\'elle-même).');
  const ord = tk.slice().sort((a, b) => rank[a.code] - rank[b.code]);
  ord.forEach(t => { t.es = t.ant.length ? Math.max(...t.ant.map(a => by[a].ef)) : 0; t.ef = t.es + t.d; });
  const D = Math.max(...tk.map(t => t.ef));
  tk.forEach(t => { t.suc = tk.filter(u => u.ant.includes(t.code)); });
  ord.slice().reverse().forEach(t => { t.lf = t.suc.length ? Math.min(...t.suc.map(u => u.ls)) : D; t.ls = t.lf - t.d; });
  tk.forEach(t => { t.mt = t.ls - t.es; t.ml = (t.suc.length ? Math.min(...t.suc.map(u => u.es)) : D) - t.ef; });
  const crit = ord.filter(t => Math.abs(t.mt) < 1e-9), st = [];
  const levels = [...new Set(Object.values(rank))].sort((a, b) => a - b);
  st.push({t:'Niveaux du réseau (ordonnancement)', md:`On classe les tâches par **niveau** : niveau 0 = tâches sans antériorité, puis chaque tâche est d'un niveau de plus que sa dernière antériorité.\n\n${tb(['Niveau', 'Tâches'], levels.map(l => [l, tk.filter(t => rank[t.code] === l).map(t => t.code).join(', ')]))}`});
  st.push({t:'Dates au plus tôt', md:`On avance dans l'ordre des niveaux : **début au plus tôt = la plus grande fin au plus tôt des antériorités**.\n\n${tb(['Tâche', 'Durée', 'Antériorités', 'Début au plus tôt', 'Fin au plus tôt'], ord.map(t => [t.code, nf(t.d), t.ant.join(', ') || '—', nf(t.es), nf(t.ef)]))}\n\nDurée minimale du chantier : **${nf(D)} jours** (plus grande fin au plus tôt).`, ask:[{l:'Durée du chantier', v:D, u:'jours', abs:.01}], hint:'Une tâche ne peut commencer que quand toutes ses antériorités sont finies : on prend le maximum.'});
  const nc = ord.find(t => t.mt > 1e-9);
  st.push({t:'Dates au plus tard', md:`On repart de la fin (${nf(D)} j) en remontant : **fin au plus tard = le plus petit début au plus tard des successeurs**.\n\n${tb(['Tâche', 'Successeurs', 'Fin au plus tard', 'Début au plus tard'], ord.slice().reverse().map(t => [t.code, t.suc.map(u => u.code).join(', ') || 'fin', nf(t.lf), nf(t.ls)]))}`, ask:nc ? [{l:`Début au plus tard de ${nc.code}`, v:nc.ls, u:'j', abs:.01}] : null, hint:'Pour une tâche sans successeur, la fin au plus tard est la durée totale du chantier.'});
  st.push({t:'Marges', md:`- **Marge totale** = début au plus tard − début au plus tôt : retard possible sans retarder le chantier.\n- **Marge libre** = début au plus tôt du successeur le plus précoce − fin au plus tôt : retard possible sans retarder aucune autre tâche.\n\n${tb(['Tâche', 'Marge totale', 'Marge libre'], ord.map(t => [t.code, nf(t.mt), nf(t.ml)]))}`, ask:nc ? [{l:`Marge totale de ${nc.code}`, v:nc.mt, u:'j', abs:.01}] : null});
  const W = 640, H = 40 + tk.length*26, k = (W - 150)/Math.max(D, 1); let g = '';
  for(let d = 0; d <= D; d++) if(D <= 40 || d % 5 === 0) g += Ln(140 + d*k, 26, 140 + d*k, H - 6, {c:'#E3DFD7', w:1}) + T(140 + d*k, 20, String(d), {a:'middle', s:9.5, c:C.GR});
  ord.forEach((t, i) => { const y = 34 + i*26, cr = Math.abs(t.mt) < 1e-9; g += T(8, y + 12, `${t.code} ${String(t.nom || '').slice(0, 18)}`, {s:11, b:cr, c:cr ? C.RD : C.INK});
    g += Rc(140 + t.es*k, y, Math.max(2, t.d*k), 16, {f:cr ? '#F6C9C9' : '#C9DBF6', c:cr ? C.RD : C.BL, rx:3}); if(t.mt > 1e-9) g += Rc(140 + t.ef*k, y + 5, t.mt*k, 6, {f:'#EDEAE3', c:'#B5AC9C', w:1}); });
  st.push({t:'Chemin critique et diagramme de Gantt', md:`Les tâches de **marge totale nulle** forment le **chemin critique** : ${crit.map(t => t.code).join(' → ')} (${nf(D)} jours). Tout retard sur l'une d'elles retarde la fin du chantier : ce sont elles qu'il faut surveiller en priorité.\n\nSur le Gantt : tâches critiques en rouge, marges en gris.`, html:`<div class="solfig">${SV(W, H, g, 'Diagramme de Gantt')}</div>`});
  return {steps:st, bilan:`Durée minimale : **${nf(D)} jours** ; chemin critique **${crit.map(t => t.code).join(' → ')}**.`};
 }});

S.reg({id:'ro-pl', mat:'ro', niv:2, titre:'Programmation linéaire à deux variables (méthode graphique)', resume:'Maximiser un bénéfice sous contraintes : domaine des solutions, sommets, optimum.',
 champs:[{k:'xn', l:'Variable x', t:'txt'}, {k:'yn', l:'Variable y', t:'txt'}, {k:'c1', l:'Gain par unité de x'}, {k:'c2', l:'Gain par unité de y'},
  {k:'ct', l:'Contraintes a x + b y ≤ d', t:'tab', min:1, max:5, cols:[{k:'lab', l:'Ressource', t:'txt', w:110}, {k:'a', l:'a'}, {k:'b', l:'b'}, {k:'d', l:'d'}]}],
 ex:{xn:'centaines d\'agglos de 15 par jour', yn:'centaines d\'agglos de 20 par jour', c1:3000, c2:4000, ct:[{lab:'Ciment (sacs)', a:2, b:3, d:48}, {lab:'Main-d\'œuvre (h)', a:1, b:1, d:20}, {lab:'Presse (centaines)', a:1, b:0, d:15}]},
 rnd:() => ({c1:R.s(2000, 5000, 500), c2:R.s(3000, 6000, 500), ct:[{lab:'Ciment (sacs)', a:R.i(1, 3), b:R.i(2, 4), d:R.i(30, 60)}, {lab:'Main-d\'œuvre (h)', a:1, b:1, d:R.i(14, 24)}, {lab:'Presse (centaines)', a:1, b:0, d:R.i(8, 16)}]}),
 enonce:p => `Une petite unité fabrique deux produits : x = ${p.xn || 'quantité du produit 1'} et y = ${p.yn || 'quantité du produit 2'}. Chaque unité de x rapporte **${nf(p.c1)} FCFA**, chaque unité de y **${nf(p.c2)} FCFA**. Les ressources sont limitées :\n\n${tb(['Ressource', 'par unité de x', 'par unité de y', 'Disponible'], p.ct.map(c => [c.lab || '', nf(c.a), nf(c.b), nf(c.d)]))}\n\n1. Écrire le programme linéaire.\n2. Représenter le domaine des solutions possibles.\n3. Déterminer la production qui maximise le bénéfice.`,
 solve(p){
  need(p, [['c1', 'Gain x'], ['c2', 'Gain y']]); const ct = p.ct.filter(c => isFinite(c.a) && isFinite(c.b) && isFinite(c.d)); if(!ct.length) throw new Err('Ajoutez au moins une contrainte.');
  const lines = ct.map(c => [c.a, c.b, c.d]).concat([[-1, 0, 0], [0, -1, 0]]), ok = (x, y) => lines.every(([a, b, d]) => a*x + b*y <= d + 1e-7);
  const V = []; for(let i = 0; i < lines.length; i++) for(let j = i + 1; j < lines.length; j++){ const [a1, b1, d1] = lines[i], [a2, b2, d2] = lines[j], det = a1*b2 - a2*b1; if(Math.abs(det) < 1e-12) continue;
    const x = (d1*b2 - d2*b1)/det, y = (a1*d2 - a2*d1)/det; if(ok(x, y) && !V.some(v => Math.abs(v[0] - x) < 1e-7 && Math.abs(v[1] - y) < 1e-7)) V.push([x, y]); }
  if(V.length < 3) throw new Err('Le domaine est vide ou réduit à un segment : vérifiez les contraintes.');
  const far = 1e7; if((p.c1 > 0 && ok(far, 0)) || (p.c2 > 0 && ok(0, far)) || ok(far, far)) throw new Err('Domaine non borné : le bénéfice peut augmenter sans limite. Ajoutez une contrainte.');
  const cx = V.reduce((a, v) => a + v[0], 0)/V.length, cy = V.reduce((a, v) => a + v[1], 0)/V.length; V.sort((u, v) => Math.atan2(u[1] - cy, u[0] - cx) - Math.atan2(v[1] - cy, v[0] - cx));
  const Z = v => p.c1*v[0] + p.c2*v[1]; const best = V.reduce((a, v) => Z(v) > Z(a) + 1e-9 ? v : a, V[0]), st = [];
  st.push({t:'Programme linéaire', md:`Maximiser $$ Z = ${nf(p.c1)} x + ${nf(p.c2)} y\nsous les contraintes :\n${ct.map(c => `$$ ${nf(c.a)} x + ${nf(c.b)} y ≤ ${nf(c.d)}   (${c.lab || 'ressource'})`).join('\n')}\n$$ x ≥ 0 ,  y ≥ 0`});
  const mx = Math.max(...V.map(v => v[0]))*1.25 + .5, my = Math.max(...V.map(v => v[1]))*1.25 + .5, W = 420, H = 320, X = x => 40 + x/mx*(W - 60), Y = y => H - 30 - y/my*(H - 50);
  let g = Pth('M' + V.map(v => X(v[0]).toFixed(1) + ',' + Y(v[1]).toFixed(1)).join(' L') + ' Z', {f:'#E1F4EA', c:C.OK, w:2});
  ct.forEach((c, i) => { const pts = []; if(Math.abs(c.b) > 1e-12){ pts.push([0, c.d/c.b], [mx, (c.d - c.a*mx)/c.b]); } else pts.push([c.d/c.a, 0], [c.d/c.a, my]); g += Ln(X(pts[0][0]), Y(pts[0][1]), X(pts[1][0]), Y(pts[1][1]), {c:[C.BL, C.OR, C.RD, C.GR, C.INK][i % 5], w:1.4, d:'5 3'}); });
  g += Ln(40, H - 30, W - 10, H - 30, {c:C.INK, m:'sa'}) + Ln(40, H - 30, 40, 10, {c:C.INK, m:'sa'}) + T(W - 12, H - 12, 'x', {a:'end', b:1}) + T(48, 18, 'y', {b:1});
  V.forEach(v => { g += Ci(X(v[0]), Y(v[1]), 3.5, {f:C.INK, c:C.INK}) + T(X(v[0]) + 5, Y(v[1]) - 5, `(${nf(v[0], 2)} ; ${nf(v[1], 2)})`, {s:10}); });
  g += Ci(X(best[0]), Y(best[1]), 7, {c:C.RD, w:2.4});
  st.push({t:'Domaine des solutions et sommets', md:`Chaque contrainte est un demi-plan limité par une droite ; le **domaine** est l'intersection (zone verte). Ses sommets sont les intersections des droites qui respectent toutes les contraintes :\n\n${tb(['Sommet', 'x', 'y'], V.map((v, i) => ['S' + (i + 1), nf(v[0], 3), nf(v[1], 3)]))}`, html:`<div class="solfig">${SV(W, H, g, 'Domaine des solutions')}</div>`});
  st.push({t:'Optimum', md:`Le maximum d'une fonction linéaire sur ce domaine est atteint en un **sommet** : on calcule Z en chacun.\n\n${tb(['Sommet', 'x', 'y', 'Z'], V.map((v, i) => ['S' + (i + 1), nf(v[0], 3), nf(v[1], 3), (v === best ? '**' : '') + nf(Z(v), 2) + (v === best ? '**' : '')]))}\n\nMeilleure production : **x = ${nf(best[0], 3)}**, **y = ${nf(best[1], 3)}** pour un bénéfice **Z = ${nf(Z(best), 2)} FCFA**.`,
   ask:[{l:'x optimal', v:best[0], abs:.01}, {l:'y optimal', v:best[1], abs:.01}, {l:'Z max', v:Z(best)}], hint:'Calculez Z à chaque sommet du domaine et gardez le plus grand.'});
  const sat = ct.filter(c => Math.abs(c.a*best[0] + c.b*best[1] - c.d) < 1e-6).map(c => c.lab || 'ressource');
  st.push({t:'Interprétation', md:`Ressources **saturées** à l'optimum (entièrement utilisées) : ${sat.join(', ') || 'aucune'}. Pour produire plus, c'est sur elles qu'il faut agir (acheter plus de ciment, ajouter des heures…).`});
  return {steps:st, bilan:`Optimum : x = **${nf(best[0], 2)}**, y = **${nf(best[1], 2)}**, bénéfice **${nf(Z(best), 0)} FCFA**.`};
 }});
})();
