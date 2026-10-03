/* =====================================================================
   Géotechnique — cours complet (3 niveaux)
   Débutant : le sol et ses paramètres, sols de Côte d'Ivoire, reconnaissance, eau dans le sol
   Intermédiaire : identification, classification, compactage, contraintes, écoulements, cisaillement
   Avancé : capacité portante, tassements, essais in situ, pieux, poussée des terres, pentes, amélioration, mission géotechnique
   ===================================================================== */
A.addMatiere({
 id:"geo",
 titre:"Géotechnique",
 court:"Géotechnique",
 groupe:"sol",
 icone:"mountain",
 couleur:"#8B5A2B",
 niveau:"Intermédiaire",
 heures:75,
 ordre:1,
 prerequis:["mmc", "sp"],
 resume:"Connaître le sol pour bien fonder : paramètres d'état, sols tropicaux et lagunaires, reconnaissance, identification et classification, compactage, contraintes et eau dans le sol, cisaillement, capacité portante, tassements, essais in situ, pieux, poussée des terres, stabilité des pentes et amélioration des sols, avec applications et exercices corrigés.",
 objectifs:[
  "Calculer les paramètres d'état d'un sol (w, γ, γd, e, n, Sr)",
  "Reconnaître les principaux sols de Côte d'Ivoire et leurs pièges",
  "Identifier et classer un sol (granulométrie, Atterberg, VBS)",
  "Spécifier et contrôler un compactage (Proctor, CBR)",
  "Calculer les contraintes effectives et l'effet de l'eau",
  "Calculer la capacité portante et les tassements d'une fondation",
  "Interpréter les essais in situ et un rapport d'étude de sol",
  "Calculer la poussée des terres et vérifier un talus",
  "Choisir le type de fondation ou d'amélioration de sol adapté"
 ],
 applications:[
  "Lecture d'un rapport d'étude de sol",
  "Contrôle des remblais et des couches de forme",
  "Dimensionnement des semelles et choix des fondations",
  "Fouilles sous la nappe et rabattement",
  "Sols difficiles : vases lagunaires, argiles gonflantes, remblais, talus instables"
 ],
 chapitres:[
{id:"geo-1", niv:1, titre:"Le sol : origine, constituants et paramètres d'état", duree:60, contenu:`## D'où viennent les sols ?
Les sols proviennent de l'**altération des roches** (granites, gneiss, schistes…) par l'eau, la chaleur et la végétation, puis éventuellement de leur **transport** par l'eau ou le vent. En climat tropical humide comme en Côte d'Ivoire, l'altération est profonde et rapide : elle produit des **sols latéritiques** (riches en oxydes de fer et d'alumine, de couleur rouge), des **arènes** granitiques sableuses, des **argiles**, et, dans les zones de lagune et de bas-fonds, des **sables** et des **vases** récents.
On distingue :
- les sols **grenus** (graves, sables) : grains visibles, peu sensibles à l'eau, résistance par frottement ;
- les sols **fins** (limons, argiles) : grains invisibles, très sensibles à l'eau (gonflement, retrait, perte de résistance), cohésion ;
- les sols **organiques** (vases, tourbes) : très compressibles, à éviter comme sol de fondation.

## Les trois phases du sol
Un sol est un milieu à **trois phases** : des **grains solides**, de l'**eau** et de l'**air** qui remplissent les vides. Ses propriétés dépendent des proportions de ces phases.
| Paramètre | Définition | Unité / valeurs courantes |
|---|---|---|
| Teneur en eau w | masse d'eau / masse de grains secs | % (5 à 30 %, plus de 50 % pour les vases) |
| Poids volumique humide γ | poids total / volume total | 17 à 21 kN/m³ |
| Poids volumique sec γd | poids des grains / volume total | 14 à 20 kN/m³ |
| Poids volumique des grains γs | poids des grains / volume des grains | 26 à 27 kN/m³ (latérites : jusqu'à 30) |
| Indice des vides e | volume des vides / volume des grains | 0,3 à 1 (vases : 2 et plus) |
| Porosité n | volume des vides / volume total | n = e / (1 + e) |
| Degré de saturation Sr | volume d'eau / volume des vides | 0 (sec) à 100 % (saturé) |

## Les relations à connaître
$$ γd = γ / (1 + w)      e = γs / γd − 1      n = e / (1 + e)
$$ Sr = w × γs / (e × γw)      (γw = 9,81 ≈ 10 kN/m³)
$$ γsat = γd + n × γw      γ' (déjaugé, sous la nappe) = γsat − γw
Pour un sol **saturé** (Sr = 1) : e = w × γs / γw.

> [!exemple] Paramètres d'un échantillon prélevé au cylindre
> Volume du cylindre 98 cm³ ; masse humide 185,6 g ; masse sèche (après étuve à 105 °C) 158,2 g ; γs = 26,5 kN/m³.
> w = (185,6 − 158,2) / 158,2 = **17,3 %**.
> ρ = 185,6 / 98 = 1,894 t/m³ → γ = 1,894 × 9,81 = **18,58 kN/m³** ; ρd = 158,2 / 98 = 1,614 t/m³ → γd = **15,84 kN/m³**.
> e = 26,5 / 15,84 − 1 = **0,673** ; n = 0,673 / 1,673 = **0,40** ; Sr = 0,173 × 26,5 / (0,673 × 9,81) = **69 %**.
> Si ce sol est noyé : γsat = 15,84 + 0,40 × 9,81 = **19,78 kN/m³** et γ' = **9,97 kN/m³**.

## Pourquoi ces paramètres sont importants
- **γ** sert à calculer le poids des terres (contraintes, poussée sur les murs) ;
- **γd** mesure la **compacité** : c'est le critère du **compactage** des remblais ;
- **w** indique la sensibilité à l'eau (un sol fin trop humide devient mou) ;
- **e** et **Sr** déterminent la **compressibilité** et les **tassements**.

> [!retenir]
> - Sol = grains + eau + air.
> - γd = γ / (1 + w) ; e = γs/γd − 1 ; n = e/(1 + e) ; Sr = w γs / (e γw).
> - Sous la nappe, on utilise le poids volumique déjaugé γ' = γsat − γw.
> - Teneur en eau mesurée par séchage à l'étuve à 105 °C jusqu'à masse constante.`,
 sujet:{titre:"Paramètres d'état d'un échantillon prélevé au cylindre", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le site d'un futur lycée à Agboville, le laboratoire prélève un échantillon intact de sable argileux au cylindre. Vous calculez ses paramètres d'état.

**Données**
- Volume du cylindre : **950 cm³** ;
- Masse du sol humide : **1 805 g** ; masse après étuvage à 105 °C : **1 552 g** ;
- Poids volumique des grains : **γs = 26,8 kN/m³** ; γw = **9,81 kN/m³** ; g = 9,81 m/s².

### Partie A — Les trois phases (4 points)
1. Faire le schéma des trois phases d'un sol (grains, eau, air) en indiquant volumes et poids. (2 pts)
2. Pourquoi sèche-t-on à 105 °C et pas plus ? (2 pts)

### Partie B — Paramètres de base (8 points)
3. Calculer la teneur en eau w. (2 pts)
4. Calculer le poids volumique humide γ et le poids volumique sec γd. (3 pts)
5. Calculer l'indice des vides e et la porosité n. (3 pts)

### Partie C — Saturation (8 points)
6. Calculer le degré de saturation Sr. (2 pts)
7. Calculer la teneur en eau qu'aurait ce sol s'il était saturé (même e). (2 pts)
8. Calculer γsat et le poids volumique déjaugé γ' utilisés sous la nappe. (2 pts)
9. Quel volume d'eau faut-il ajouter à 1 m³ de ce sol pour le saturer ? (2 pts)`,
  corrige:`### Partie A — Phases (4 pts)
1. Schéma : volume total V = Vs + Vw + Va (vides Vv = Vw + Va) ; poids W = Ws + Ww (l'air ne pèse pas). *(2 pts)*
2. À 105 °C on chasse l'eau libre et capillaire sans détruire l'eau de constitution des argiles ni brûler la matière organique (ce qui fausserait w). *(2 pts)*

### Partie B — Paramètres (8 pts)
3. w = (1 805 − 1 552) / 1 552 = **16,3 %**. *(2 pts)*
4. γ = 1,805 kg / 0,000 95 m³ × 9,81 = **18,64 kN/m³** ; γd = 1,552 / 0,000 95 × 9,81 = **16,03 kN/m³** (contrôle : γ / (1 + w) = 18,64 / 1,163 = 16,03). *(3 pts)*
5. e = γs / γd − 1 = 26,8 / 16,03 − 1 = **0,672** ; n = e / (1 + e) = **0,402** (40 % de vides). *(3 pts)*

### Partie C — Saturation (8 pts)
6. $$ Sr = w × γs / (e × γw) = 0,163 × 26,8 / (0,672 × 9,81) = 0,66
   Les vides sont remplis d'eau aux deux tiers. *(2 pts)*
7. wsat = e × γw / γs = 0,672 × 9,81 / 26,8 = **24,6 %**. *(2 pts)*
8. γsat = γd + n γw = 16,03 + 0,402 × 9,81 = **19,97 kN/m³** ; γ' = 19,97 − 9,81 = **10,16 kN/m³**. *(2 pts)*
9. Volume d'air = (1 − Sr) × n = 0,34 × 0,402 = **0,136 m³ ≈ 136 litres** par m³. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer w par rapport à la masse humide (il se rapporte à la masse **sèche**).
> - Confondre masse (kg) et poids (kN) : multiplier par g.
> - Utiliser γ au lieu de γ' sous la nappe.`},
 exercices:[
  {t:"Teneur en eau", d:1, e:`Un échantillon pèse 312 g à l'état naturel et 268 g après séchage à l'étuve. Calculer sa teneur en eau.`, c:`**w = (312 − 268) / 268 = 44 / 268 = 16,4 %**.`},
  {t:"Paramètres d'état", d:2, e:`Un sable argileux a un poids volumique humide γ = 19,2 kN/m³ et une teneur en eau w = 14 %. γs = 26,7 kN/m³. Calculer γd, e, n et Sr.`, c:`**γd = 19,2 / 1,14 = 16,84 kN/m³** ; **e = 26,7 / 16,84 − 1 = 0,585** ; **n = 0,585 / 1,585 = 0,37** ; **Sr = 0,14 × 26,7 / (0,585 × 9,81) = 65 %**.`},
  {t:"Argile saturée", d:2, e:`Une argile lagunaire saturée a une teneur en eau de 32 % ; γs = 26,8 kN/m³. Calculer e, γd, γsat et γ'.`, c:`Saturé : **e = w γs / γw = 0,32 × 26,8 / 9,81 = 0,874**.
**γd = 26,8 / 1,874 = 14,30 kN/m³** ; n = 0,874 / 1,874 = 0,466 ; **γsat = 14,30 + 0,466 × 9,81 = 18,88 kN/m³** ; **γ' = 9,07 kN/m³**.`},
  {t:"Eau à ajouter pour compacter", d:3, e:`On doit compacter une latérite à γd = 18,5 kN/m³ et à la teneur en eau optimale de 11 %. Le matériau est livré à w = 6 %. Quelle quantité d'eau faut-il ajouter par m³ de remblai compacté ?`, c:`Masse de grains secs par m³ compacté : ρd = 18,5 / 9,81 = 1,886 t/m³ = **1 886 kg**.
Eau à ajouter : 1 886 × (0,11 − 0,06) = **94 kg ≈ 94 litres par m³**, apportés à la citerne et mélangés (arrosage + malaxage à la niveleuse) avant compactage. Pour 500 m³ de remblai : environ 47 m³ d'eau.`}
 ],
 quiz:[
  {q:"La teneur en eau est le rapport :", o:["Masse d'eau / masse totale","Masse d'eau / masse des grains secs","Volume d'eau / volume total","Volume d'eau / volume des vides"], r:1, e:"w = Ww / Ws."},
  {q:"Le poids volumique sec vaut :", o:["γ × (1 + w)","γ / (1 + w)","γ − w","γs × w"], r:1, e:"γd = γ / (1 + w)."},
  {q:"Un sol dont tous les vides sont pleins d'eau a un degré de saturation de :", o:["0 %","50 %","100 %","Il dépend de w"], r:2, e:"Sol saturé."},
  {q:"Sous la nappe, on calcule les contraintes avec :", o:["γsat","γ' = γsat − γw","γd","γs"], r:1, e:"La poussée d'Archimède allège les grains."},
  {q:"Les vases et tourbes sont :", o:["D'excellents sols de fondation","Très compressibles, à éviter","Des roches","Des graves"], r:1, e:"Sols organiques."}
 ]},

{id:"geo-10", niv:1, titre:"Les sols de Côte d'Ivoire et les sols difficiles", duree:45, contenu:`## Un pays aux sols très variés
La Côte d'Ivoire repose en grande partie sur un **socle cristallin** ancien (granites, gneiss, schistes) profondément altéré, avec au sud un **bassin sédimentaire côtier** (sables, argiles, vases de lagune). On y rencontre principalement :
| Sol | Où ? | Comportement |
|---|---|---|
| Graveleux latéritiques | presque partout, sous la terre végétale | bon matériau de remblai et de couche de chaussée s'il est bien compacté ; sensible à l'eau s'il contient beaucoup de fines |
| Cuirasses latéritiques | plateaux, buttes | dures, bon sol d'appui ; parfois creuses en dessous |
| Arènes granitiques (sables d'altération) | régions de socle (centre, nord, ouest) | bon sol, mais érodable |
| Argiles d'altération | sous les latérites, bas de pente | variables ; certaines sont **gonflantes** |
| Sables argileux du « Continental terminal » | plateaux d'Abidjan (Cocody, Plateau, Yopougon…) | bon sol en général, sensible au ravinement |
| Sables et vases lagunaires | bords de lagune, bas-fonds (zones basses d'Abidjan, Grand-Bassam) | nappe peu profonde, vases très compressibles, sables lâches |
| Remblais anciens | zones urbaines remblayées | hétérogènes, souvent non compactés : à ne jamais prendre comme sol de fondation sans étude |

## Les sols difficiles et leurs pièges
### Les vases et argiles molles
Très compressibles et peu résistantes : un bâtiment fondé dessus **tasse** beaucoup (plusieurs décimètres) et de façon **différentielle**, ce qui fissure la structure. Solutions : fondations **profondes** (pieux jusqu'à une couche résistante), **radier**, ou **amélioration** du sol (préchargement, colonnes ballastées).
### Les argiles gonflantes
Elles **gonflent** quand elles s'humidifient (saison des pluies) et se **rétractent** en séchant (saison sèche) : les fondations superficielles montent et descendent, les murs se fissurent. Solutions : fonder **plus profondément** (sous la zone de variation de teneur en eau), dallage sur **vide sanitaire**, trottoir étanche périphérique, drainage, éloigner les arbres.
### Les remblais non contrôlés
Mélanges de terre, gravats et déchets : tassements imprévisibles. On les **traverse** jusqu'au terrain naturel (puits, gros béton, pieux) ou on les **purge** et on les remplace par un remblai compacté.
### Les sols érodables et les talus
Les sables argileux et les arènes s'érodent sous les fortes pluies : ravines, affouillement des fondations, **glissements** de talus dans les quartiers en pente. Il faut drainer, protéger (végétalisation, perrés, murs) et ne pas construire en crête ou en pied de talus instable.
### La nappe phréatique
Dans les zones basses et lagunaires, la nappe peut être à moins d'un mètre : fouilles inondées, poussée d'Archimède sur les ouvrages enterrés, remontées d'humidité. On prévoit **pompage**, **cuvelage**, **drainage**.

## La règle d'or
On ne fonde **jamais** un immeuble sans **étude de sol**. Pour une maison individuelle, on fait au minimum une reconnaissance simple (puits à la pelle, pénétromètre) et on s'informe auprès des voisins et des entreprises locales sur les problèmes connus du quartier.

> [!exemple] Deux terrains à Abidjan
> - Terrain A sur un plateau : sable argileux rouge jusqu'à 6 m, pas de nappe → semelles isolées à 1,0–1,5 m de profondeur, contrainte admissible de l'ordre de 0,15 à 0,25 MPa (à confirmer par l'étude).
> - Terrain B en bordure de lagune : 2 m de remblai, puis 8 m de vase, puis sable compact ; nappe à 0,8 m → fondations sur **pieux** ancrés dans le sable compact, ou radier si le bâtiment est léger et les tassements acceptables, et cuvelage pour tout sous-sol.

> [!retenir]
> - Latérites et sables argileux des plateaux : souvent de bons sols ; vases lagunaires et remblais : sols difficiles.
> - Argiles gonflantes : fonder plus profond, vide sanitaire, drainage.
> - Nappe proche : pompage, cuvelage, poussée d'Archimède.
> - Pas de fondation sans reconnaissance du sol.`,
 sujet:{titre:"Quatre terrains, quatre sols : diagnostic et choix des fondations en Côte d'Ivoire", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un promoteur hésite entre quatre terrains pour construire des immeubles R+3. Vous donnez un premier avis géotechnique avant l'étude de sol.

**Terrains**
- **T1 — Cocody (plateau)** : sables argileux rouges du Continental terminal, nappe profonde ;
- **T2 — Marcory (bord de lagune)** : 8 m de vase grise très molle (module œdométrique **Eoed = 1,5 MPa**) sur un sable dense ; nappe à 0,50 m ;
- **T3 — région de Bouaké** : argile d'altération avec **IP = 45** sur 1,50 m (zone de variation de teneur en eau), gonflement libre mesuré **4 %** ;
- **T4 — Yopougon** : ancienne carrière remblayée sur **2,00 m** de gravats et déchets, emprise du bâtiment **12 × 10 m**.

### Partie A — Les sols (5 points)
1. Présenter brièvement les grandes familles de sols de Côte d'Ivoire et leur localisation. (3 pts)
2. Pourquoi ne fonde-t-on jamais un immeuble sans étude de sol, même « là où les voisins ont construit » ? (2 pts)

### Partie B — Terrain T2 (5 points)
3. Estimer le tassement de la vase sous un supplément de contrainte moyen de **40 kPa** (s ≈ H × Δσ / Eoed). Conclure. (3 pts)
4. Proposer deux solutions de fondation. (2 pts)

### Partie C — Terrain T3 (5 points)
5. Estimer le soulèvement possible d'une semelle superficielle. (2 pts)
6. Décrire les dispositions constructives adaptées aux argiles gonflantes. (3 pts)

### Partie D — Terrain T4 (5 points)
7. On purge le remblai sous l'emprise et on le remplace par un remblai compacté. Calculer le volume purgé, le volume foisonné à évacuer (1,25) et le volume de matériau à approvisionner (coefficient 1,30). (3 pts)
8. Quelle autre solution peut-on envisager ? (2 pts)`,
  corrige:`### Partie A — Les sols (5 pts)
1. **Graveleux latéritiques** et cuirasses (presque partout, bons sols et matériaux) ; **arènes granitiques** (socle du centre, nord, ouest) ; **argiles d'altération** (parfois gonflantes) ; **sables argileux du Continental terminal** (plateaux d'Abidjan) ; **sables et vases lagunaires** (bords de lagune, bas-fonds) ; **remblais anciens** en ville. *(3 pts)*
2. Les sols varient sur quelques mètres (poche de vase, ancien talweg remblayé), les charges d'un immeuble sont bien supérieures à celles d'une maison, et une erreur de fondation est presque irréparable. *(2 pts)*

### Partie B — T2 (5 pts)
3. s ≈ 8 × 40 / 1 500 = **0,21 m** : plus de 20 cm, et surtout très différentiel → **inacceptable** pour une structure en béton armé (tolérance ≈ 5 cm). *(3 pts)*
4. **Pieux** ancrés dans le sable dense sous la vase (en tenant compte du frottement négatif) ; ou amélioration du sol (préchargement avec drains, colonnes) + radier pour un ouvrage léger. *(2 pts)*

### Partie C — T3 (5 pts)
5. 1,50 × 0,04 = **6 cm** de soulèvement possible, non uniforme → fissures. *(2 pts)*
6. Fonder **sous la zone active** (≥ 1,50 m) ; dallage sur **vide sanitaire** ; **trottoir étanche** et drainage périphérique pour stabiliser la teneur en eau ; éloigner les arbres ; chaînages soignés pour rigidifier. *(3 pts)*

### Partie D — T4 (5 pts)
7. Purge : 12 × 10 × 2,00 = **240 m³** ; évacuation : 240 × 1,25 = **300 m³** foisonnés ; apport : 240 × 1,30 = **312 m³**. *(3 pts)*
8. **Traverser** le remblai jusqu'au terrain naturel par des puits en gros béton ou des pieux courts, le dallage étant alors porté (plancher) et non posé sur le remblai. *(2 pts)*

> [!attention] Erreurs à éviter
> - Fonder sur un remblai non contrôlé parce qu'il « paraît dur » en saison sèche.
> - Sous-estimer les vases : leurs tassements durent des années.
> - Oublier que l'eau (pluies, fuites, arbres) commande le comportement des argiles gonflantes.`},
 exercices:[
  {t:"Identifier un risque", d:1, e:`Pour chaque situation, indiquer le risque principal et une précaution :
1. maison sur un terrain récemment remblayé avec des déchets de démolition ;
2. immeuble en bordure de lagune, nappe à 0,8 m ;
3. villa sur un sol argileux qui se fendille en saison sèche ;
4. construction en haut d'un talus raide.`, c:`1. **Tassements différentiels** du remblai → traverser le remblai (puits, gros béton) ou le purger et le remplacer par un remblai compacté.
2. **Sols compressibles et eau** → étude de sol, pieux ou radier, pompage pendant les travaux, cuvelage des sous-sols.
3. **Argile gonflante** (retrait-gonflement) → fondations plus profondes, vide sanitaire, trottoir étanche, drainage, pas d'arbres à proximité.
4. **Glissement** et érosion → recul par rapport à la crête, drainage, soutènement ou reprofilage du talus.`},
  {t:"Lire une coupe de sondage", d:2, e:`Un sondage donne : 0–0,3 m terre végétale ; 0,3–2,5 m graveleux latéritique rouge compact ; 2,5–5,0 m argile sableuse beige ferme ; nappe non rencontrée. Le projet est une maison R+1. Proposer un niveau et un type de fondation.`, c:`La terre végétale est toujours **décapée**. Le **graveleux latéritique compact** est un bon sol d'appui : on peut fonder la maison sur **semelles isolées et filantes** ancrées d'environ **0,8 à 1,2 m** dans cette couche (hors de la zone remaniée et sous la zone d'évaporation), en conservant au moins 1 m de latérite sous les semelles. La contrainte admissible sera donnée par l'étude (souvent 0,15 à 0,25 MPa pour ce type de sol).`},
  {t:"Choisir une solution de fondation", d:2, e:`Un entrepôt léger doit être construit sur 1,5 m de remblai hétérogène reposant sur un sable argileux compact. Proposer deux solutions de fondation.`, c:`1. **Puits** ou **semelles sur gros béton** : on creuse sous chaque poteau jusqu'au sable compact (≈ 1,8 m) et on remplit de gros béton jusqu'au niveau de la semelle armée.
2. **Purge et substitution** : on enlève le remblai sous l'emprise (et un peu au-delà), on le remplace par un graveleux latéritique compacté par couches de 20 à 30 cm à 95 % de l'OPM, puis on fonde superficiellement.
Le choix dépend du coût et de la surface ; dans les deux cas, le dallage ne doit pas reposer sur le remblai non contrôlé.`}
 ],
 quiz:[
  {q:"Les vases lagunaires sont :", o:["Très résistantes","Très compressibles","Imperméables et dures","Des roches"], r:1, e:"Elles tassent beaucoup sous charge."},
  {q:"Une argile gonflante :", o:["Ne change jamais de volume","Gonfle à l'humidification et se rétracte au séchage","Est toujours sèche","Est une latérite"], r:1, e:"Retrait-gonflement saisonnier."},
  {q:"Sur un remblai non contrôlé, on :", o:["Fonde directement","Traverse le remblai ou le remplace","Ajoute du ciment en surface","Ne fait rien"], r:1, e:"Tassements imprévisibles."},
  {q:"Les graveleux latéritiques bien compactés sont :", o:["Inutilisables","De bons matériaux de remblai et de chaussée","Des sols organiques","Gonflants"], r:1, e:"Très utilisés en Côte d'Ivoire."},
  {q:"Avant de fonder un immeuble, il faut :", o:["Une étude de sol","Seulement un permis","Seulement un plan","Rien"], r:0, e:"La règle d'or."}
 ]},

{id:"geo-6", niv:1, titre:"Reconnaître les sols sur le terrain : puits, sondages et essais simples", duree:50, contenu:`## Pourquoi reconnaître le sol ?
Avant de concevoir les fondations, il faut connaître la **succession des couches** (coupe du sol), leur **épaisseur**, leur **nature**, leur **résistance** et la position de la **nappe**. La reconnaissance va du plus simple (puits à la pelle) au plus complet (sondages carottés et essais en laboratoire), selon l'importance de l'ouvrage.

## Les moyens de reconnaissance
| Moyen | Ce qu'il apporte | Limites |
|---|---|---|
| Puits manuel ou à la pelle mécanique | vue directe des couches, prélèvements, observation de la nappe | profondeur 3 à 5 m, éboulements |
| Tarière (manuelle ou mécanique) | échantillons remaniés, nature des couches | pas d'échantillons intacts |
| Pénétromètre dynamique (PDL, PDB) | résistance à l'enfoncement couche par couche, repérage du bon sol | pas d'échantillon, résultat indirect |
| Sondage carotté | échantillons intacts pour le laboratoire | coûteux |
| Pressiomètre, pénétromètre statique, SPT | paramètres de calcul des fondations | matériel spécialisé |
| Piézomètre | niveau de la nappe et ses variations | suivi dans le temps |

## Décrire un sol à la main (essais visuels et tactiles)
- **Couleur** (rouge : latérite oxydée ; gris, bleuté : milieu sans oxygène, souvent sous la nappe ou vase ; noir : matière organique) ;
- **texture** : on frotte un peu de sol humide entre les doigts : **rugueux** (sable), **doux** (limon), **collant et plastique** (argile) ; on roule un boudin : une argile donne un boudin fin qui ne casse pas ;
- **odeur** (sols organiques), présence de **racines**, de **déchets** (remblai) ;
- **compacité** : la lame du couteau s'enfonce facilement (mou) ou pas (raide), le pic rebondit (cuirasse) ;
- **eau** : venues d'eau, niveau stabilisé dans le puits après quelques heures.
On établit une **coupe** : profondeur, épaisseur, description de chaque couche, niveau d'eau, date.

## Le pénétromètre dynamique léger (PDL)
Un **mouton** de masse M tombe d'une hauteur H sur une tige munie d'une **pointe** de section A. On compte le nombre de coups pour enfoncer la pointe de 10 cm. La **résistance dynamique de pointe** est donnée par la « formule des Hollandais » :
$$ qd = (M g H / (A e)) × M / (M + P)      (e : enfoncement par coup ; P : masse des tiges et de l'enclume)
On en déduit, de façon empirique et prudente, une contrainte admissible de l'ordre de **qd / 20** pour des semelles superficielles (à confirmer par une étude pour les bâtiments importants).

> [!exemple] Essai au PDL
> M = 10 kg, H = 0,50 m, pointe de 10 cm² (A = 0,001 m²), P = 6 kg ; 5 coups pour 10 cm, soit e = 2 cm par coup.
> qd = (10 × 9,81 × 0,50 / (0,001 × 0,02)) × 10 / 16 = **1,53 MPa** → contrainte admissible indicative ≈ 1,53 / 20 ≈ **0,077 MPa** (sol médiocre). Plus bas, 15 coups pour 20 cm donnent qd ≈ 2,3 MPa (≈ 0,11 MPa) : le sol s'améliore en profondeur.

## Les règles d'une bonne reconnaissance
- Faire au moins **un point de reconnaissance par angle** d'un petit bâtiment, ou un maillage régulier pour un grand ;
- descendre au moins à **1,5 fois la largeur des fondations** sous leur niveau, et plus bas en présence de couches molles ;
- noter la **date** (la nappe varie avec les saisons) ;
- conserver et étiqueter les échantillons (sacs étanches pour garder la teneur en eau) ;
- reboucher et compacter les puits.

> [!retenir]
> - Puits, tarière, pénétromètre, sondages : du plus simple au plus complet.
> - Description : couleur, texture (rugueux, doux, collant), compacité, eau.
> - PDL : qd = (M g H / (A e)) × M / (M + P) ; qadm indicative ≈ qd / 20.
> - Profondeur de reconnaissance ≥ 1,5 B sous les fondations.`,
 sujet:{titre:"Reconnaissance d'un terrain : puits, pénétromètre dynamique et choix du niveau d'assise", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour un groupe de villas à Abatta, vous organisez une reconnaissance simple : un puits à la pelle et un essai au pénétromètre dynamique léger (PDL).

**Données — puits** : 0 à 0,30 m terre végétale noire ; 0,30 à 1,20 m sable argileux brun, humide ; 1,20 à 2,10 m graveleux latéritique rouge compact ; pas d'eau à 2,10 m.

**Données — PDL** : M = **10 kg**, H = **0,50 m**, pointe **A = 10 cm²**, masse des tiges et de l'enclume **P = 6 kg** ; formule des Hollandais :
qd = (M g H / (A e)) × M / (M + P) ; contrainte admissible indicative ≈ qd / 20.

| Profondeur | Coups pour 10 cm |
|---|---|
| 0 à 0,40 m | 4 |
| 0,40 à 1,20 m | 7 |
| 1,20 à 2,00 m | 14 |

### Partie A — Méthodes (5 points)
1. Classer du plus simple au plus complet : puits, tarière, pénétromètre, sondage carotté, pressiomètre. Que donne chaque méthode ? (3 pts)
2. Quelles observations noter dans un puits ? (2 pts)

### Partie B — Essai PDL (9 points)
3. Calculer l'enfoncement par coup e dans chaque couche. (2 pts)
4. Calculer qd et la contrainte admissible indicative dans chaque couche. (6 pts)
5. Comparer avec la coupe du puits. (1 pt)

### Partie C — Décision (6 points)
6. Proposer un niveau d'assise et une contrainte de calcul pour des semelles de villas. (3 pts)
7. Une semelle doit reprendre **180 kN** : calculer ses dimensions (carrée). (2 pts)
8. Pourquoi ces résultats ne suffisent-ils pas pour un immeuble R+4 ? (1 pt)`,
  corrige:`### Partie A — Méthodes (5 pts)
1. *(3 pts)*
   - **Puits** : vue directe des couches, échantillons, eau ;
   - **tarière** : échantillons remaniés, plus profond ;
   - **pénétromètre** : résistance continue, sans échantillon ;
   - **sondage carotté** : échantillons intacts pour le laboratoire ;
   - **pressiomètre** : module et pression limite pour le calcul des fondations.
2. Profondeur et nature de chaque couche (couleur, texture, humidité, compacité), venues d'eau, éboulements des parois, racines, remblais, photos. *(2 pts)*

### Partie B — PDL (9 pts)
3. e = 10 cm / nombre de coups : **2,5 cm** ; **1,43 cm** ; **0,71 cm**. *(2 pts)*
4. M g H = 10 × 9,81 × 0,50 = 49,05 J ; M / (M + P) = 10 / 16 = 0,625. *(6 pts)*

| Couche | e (m) | qd (MPa) | qadm indicative (MPa) |
|---|---|---|---|
| 0 – 0,40 m | 0,025 | 1,23 | 0,06 |
| 0,40 – 1,20 m | 0,0143 | 2,15 | 0,11 |
| 1,20 – 2,00 m | 0,0071 | 4,29 | 0,21 |

5. Concordance : la résistance double dans le graveleux latéritique compact rencontré à 1,20 m dans le puits. *(1 pt)*

### Partie C — Décision (6 pts)
6. Asseoir les semelles dans le graveleux latéritique, à **1,20 – 1,30 m** ; contrainte de calcul prudente **0,15 à 0,20 MPa** (on retient 0,15 MPa en l'absence d'essais de laboratoire). *(3 pts)*
7. A = 180 / 150 = 1,20 m² → côté √1,20 = 1,10 m → **semelle 1,10 × 1,10 m** (ou 1,20 × 1,20). *(2 pts)*
8. Les charges et la profondeur influencée sont bien plus grandes : il faut des **sondages** et des **essais pressiométriques** jusqu'à plusieurs mètres sous les fondations (mission géotechnique G2). *(1 pt)*

> [!attention] Erreurs à éviter
> - Oublier le facteur M / (M + P) qui tient compte de la masse frappée.
> - Prendre qd directement comme contrainte admissible.
> - Fonder dans la terre végétale ou la couche humide superficielle.`},
 exercices:[
  {t:"Décrire un sol", d:1, e:`Sur un chantier, un sol humide est collant aux doigts, forme un boudin fin sans se casser, et laisse une trace brillante sous l'ongle. De quel type de sol s'agit-il ? Quelle précaution prendre pour fonder ?`, c:`C'est une **argile** (plastique). Précautions : vérifier par des essais (limites d'Atterberg) si elle est **gonflante**, fonder sous la zone de variation saisonnière de teneur en eau (souvent plus de 1 à 1,5 m), éviter de laisser les fouilles exposées à la pluie ou au soleil, drainer autour du bâtiment.`},
  {t:"Résistance au pénétromètre", d:2, e:`Avec le même PDL que dans le cours (M = 10 kg, H = 0,50 m, A = 10 cm², P = 6 kg), on compte 15 coups pour enfoncer la pointe de 20 cm. Calculer qd et la contrainte admissible indicative.`, c:`e = 0,20 / 15 = 0,0133 m par coup.
qd = (10 × 9,81 × 0,50 / (0,001 × 0,0133)) × 10 / 16 = **2,30 MPa** → **qadm ≈ 2,30 / 20 = 0,115 MPa**.`},
  {t:"Programmer une reconnaissance", d:2, e:`Une maison de 12 × 10 m doit être construite ; les semelles auront environ 1,0 m de large à 1,0 m de profondeur. Proposer un programme de reconnaissance simple.`, c:`- **4 points** au minimum (un près de chaque angle), plus un au centre si le terrain paraît hétérogène.
- **Puits** à la pelle mécanique jusqu'à 2,5 à 3 m (soit au moins 1,0 + 1,5 × 1,0 m), avec description des couches et observation de la nappe.
- **Pénétromètre dynamique** à côté des puits, jusqu'au refus ou 5 à 6 m, pour repérer d'éventuelles couches molles en profondeur.
- Prélèvement d'échantillons pour une identification simple (granulométrie, limites d'Atterberg) si un sol argileux est rencontré.`}
 ],
 quiz:[
  {q:"Un sol rugueux entre les doigts est plutôt :", o:["Une argile","Un sable","Une vase","Un limon"], r:1, e:"Les grains se sentent."},
  {q:"La couleur grise ou bleutée d'un sol indique souvent :", o:["Un sol sec","Un milieu saturé, sans oxygène","Une latérite","Un remblai"], r:1, e:"Sous la nappe ou vase."},
  {q:"Le pénétromètre dynamique mesure :", o:["La teneur en eau","La résistance à l'enfoncement d'une pointe","La granulométrie","La nappe"], r:1, e:"Nombre de coups par 10 cm."},
  {q:"La reconnaissance doit descendre au moins à :", o:["0,5 m sous le terrain","1,5 fois la largeur des fondations sous leur niveau","100 m","Jusqu'à la nappe seulement"], r:1, e:"Zone influencée par la fondation."},
  {q:"Pourquoi noter la date d'observation de la nappe ?", o:["Pour la facture","Parce que la nappe varie avec les saisons","Par habitude","Pour la météo"], r:1, e:"Saison sèche ou saison des pluies."}
 ]},

{id:"geo-7", niv:1, titre:"L'eau dans le sol : nappe, capillarité et drainage", duree:45, contenu:`## Les formes de l'eau dans le sol
- **Eau libre** (de gravité) : elle circule dans les vides et forme la **nappe phréatique** (zone saturée). Son niveau supérieur est la **surface libre** de la nappe, observée dans un puits ou un **piézomètre**.
- **Eau capillaire** : au-dessus de la nappe, l'eau monte dans les petits vides comme dans une paille fine : c'est la **frange capillaire**. Hauteur de remontée : quelques centimètres dans une grave, 0,1 à 0,5 m dans un sable, 1 à 5 m dans un limon, plus de 10 m dans une argile.
- **Eau adsorbée** : film d'eau lié aux particules d'argile, qui donne aux sols fins leur plasticité.

## La perméabilité et la loi de Darcy
L'eau s'écoule à travers le sol d'autant plus facilement que ses vides sont grands. La **loi de Darcy** relie le débit au **gradient hydraulique** i (perte de charge par mètre parcouru) :
$$ v = k × i      Q = k × i × A
(k : coefficient de **perméabilité**, en m/s ; A : section traversée.)
| Sol | k (m/s) | Comportement |
|---|---|---|
| Graviers | 10⁻² à 10⁻¹ | très perméables |
| Sables | 10⁻⁵ à 10⁻³ | perméables |
| Limons | 10⁻⁸ à 10⁻⁵ | peu perméables |
| Argiles | 10⁻¹¹ à 10⁻⁸ | pratiquement imperméables |

> [!exemple] Venue d'eau dans une fouille
> Fond de fouille de 20 m² dans un sable (k = 10⁻⁵ m/s), gradient i = 0,5 : Q = 10⁻⁵ × 0,5 × 20 = 10⁻⁴ m³/s = **0,36 m³/h**, facile à pomper. Dans un sable grossier (k = 2 × 10⁻⁴ m/s), sur 60 m² avec i = 0,8 : Q = **34,6 m³/h** : il faut une pompe adaptée, voire un rabattement de nappe.

## Les effets de l'eau sur les ouvrages
- Elle **diminue la résistance** des sols fins (une argile détrempée devient molle) ;
- sous la nappe, les terres sont **déjaugées** (poussée d'Archimède) : la capacité portante diminue ;
- elle exerce une **poussée** sur les murs (10 kN/m² par mètre de hauteur d'eau), d'où les barbacanes et drains ;
- elle **soulève** les ouvrages enterrés vides (bâches, fosses, piscines) : il faut vérifier leur poids ;
- elle provoque **érosion**, **affouillements** et **remontées capillaires** dans les murs (salpêtre, peintures qui cloquent).

## Les dispositions de drainage
- **Drain périphérique** autour des fondations et des sous-sols (tuyau perforé dans du gravier, entouré d'un géotextile, avec pente vers un exutoire) ;
- **barrière anti-capillarité** à la base des murs (arase étanche, chape hydrofuge) ;
- **vide sanitaire** ventilé ou dallage sur hérisson de pierres + film polyane ;
- **pentes** et caniveaux pour éloigner les eaux de pluie des fondations ;
- **pompage** pendant les travaux dans les fouilles sous la nappe.

> [!retenir]
> - Nappe (eau libre), frange capillaire, eau adsorbée.
> - Darcy : Q = k i A ; k de 10⁻¹ (graviers) à 10⁻¹¹ m/s (argiles).
> - L'eau affaiblit les sols fins, pousse les murs et soulève les ouvrages vides.
> - Drains, arases étanches, vides sanitaires, pentes d'évacuation.`,
 sujet:{titre:"L'eau dans le sol : venues d'eau, remontées capillaires et soulèvement d'une bâche", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Construction d'une résidence avec bâche à eau enterrée à Grand-Bassam (nappe peu profonde). Vous étudiez les effets de l'eau.

**Données**
- Fouille de **45 m²** dans un sable fin (**k = 2 × 10⁻⁵ m/s**), gradient hydraulique **i = 0,6** ; ailleurs, fouille de **80 m²** dans un sable grossier (**k = 1,5 × 10⁻⁴ m/s**), **i = 0,75** ;
- Logements en rez-de-chaussée sur un limon ; nappe à **1,20 m** sous le dallage ;
- Bâche en béton armé (25 kN/m³) : dimensions extérieures **4,40 × 3,40 m**, hauteur **2,90 m**, intérieures **4,00 × 3,00 × 2,50 m** ; dessus au niveau du terrain ; nappe à **1,00 m** sous le terrain ; γw = **10 kN/m³** ;
- Coefficient de sécurité exigé au soulèvement : **1,20**.

### Partie A — Formes de l'eau (4 points)
1. Distinguer eau libre, eau capillaire et eau adsorbée. (2 pts)
2. Énoncer la loi de Darcy et donner l'ordre de grandeur de k pour un gravier, un sable, un limon, une argile. (2 pts)

### Partie B — Venues d'eau (5 points)
3. Calculer le débit à pomper dans chaque fouille (en m³/h). (3 pts)
4. Quelle solution envisager pour la seconde fouille ? (2 pts)

### Partie C — Capillarité (4 points)
5. La frange capillaire d'un limon peut atteindre 1 à 5 m. Quel risque pour le dallage et les murs ? Quelles dispositions prendre ? (4 pts)

### Partie D — Soulèvement de la bâche vide (7 points)
6. Calculer la hauteur d'eau sous le radier et la poussée verticale de l'eau (sous-pression). (3 pts)
7. Calculer le poids propre de la bâche. (2 pts)
8. Vérifier la sécurité au soulèvement et proposer une solution. (2 pts)`,
  corrige:`### Partie A — Formes de l'eau (4 pts)
1. **Libre** : circule et forme la nappe ; **capillaire** : retenue au-dessus de la nappe dans les petits vides ; **adsorbée** : film lié aux argiles (plasticité). *(2 pts)*
2. **Q = k × i × A**. Graviers 10⁻² à 10⁻¹ ; sables 10⁻⁵ à 10⁻³ ; limons 10⁻⁸ à 10⁻⁵ ; argiles 10⁻¹¹ à 10⁻⁸ m/s. *(2 pts)*

### Partie B — Venues d'eau (5 pts)
3. Q1 = 2 × 10⁻⁵ × 0,6 × 45 = 5,4 × 10⁻⁴ m³/s = **1,9 m³/h** ; Q2 = 1,5 × 10⁻⁴ × 0,75 × 80 = 9 × 10⁻³ m³/s = **32,4 m³/h**. *(3 pts)*
4. Pompage puissant en continu (avec puisard filtrant), ou mieux un **rabattement de nappe** (puits filtrants, pointes filtrantes) avant d'ouvrir la fouille, pour éviter la boulance du fond. *(2 pts)*

### Partie C — Capillarité (4 pts)
5. L'eau remonte jusqu'au dallage et dans les murs : humidité, salpêtre, peintures qui cloquent, carrelage décollé. Dispositions : **hérisson** de pierres (rupture capillaire) avec film polyane, **arase étanche** (chape hydrofuge) à la base des murs, drainage périphérique, ou **vide sanitaire** ventilé. *(4 pts)*

### Partie D — Soulèvement (7 pts)
6. Dessous du radier à 2,90 m, nappe à 1,00 m → **hw = 1,90 m** ; U = 10 × 1,90 × 4,40 × 3,40 = **284,2 kN**. *(3 pts)*
7. Béton : 4,40 × 3,40 × 2,90 − 4,00 × 3,00 × 2,50 = 43,38 − 30,00 = **13,38 m³** → P = **334,6 kN**. *(2 pts)*
8. F = 334,6 / 284,2 = **1,18 < 1,20** : insuffisant quand la bâche est vide. Solutions : **débord du radier** (bêche) qui mobilise le poids des terres au-dessus, ou épaissir le radier (≈ 0,3 m³ de béton suffit ici), ou ne jamais vider la bâche (consigne fragile). *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier la sous-pression : des bâches et piscines vides sont déjà remontées de plusieurs centimètres.
> - Compter l'eau contenue dans la bâche comme poids stabilisant (elle peut être vidée).
> - Poser un dallage directement sur un limon humide sans rupture capillaire.`},
 exercices:[
  {t:"Débit d'une fouille", d:1, e:`Une fouille de 6 × 10 m est creusée sous la nappe dans un sable grossier (k = 2 × 10⁻⁴ m/s). Le gradient hydraulique est estimé à 0,8. Calculer le débit à pomper.`, c:`Q = k i A = 2 × 10⁻⁴ × 0,8 × 60 = 9,6 × 10⁻³ m³/s = **34,6 m³/h**. Il faut une pompe d'au moins 40 m³/h (avec une pompe de secours) et un puisard au point bas de la fouille.`},
  {t:"Soulèvement d'une bâche enterrée", d:2, e:`Une bâche à eau en béton de 4 × 3 m en plan est enterrée ; son fond est à 2,5 m sous le terrain et la nappe peut monter jusqu'à 0,5 m sous le terrain. Son poids propre (vide) est de 210 kN. Est-elle stable au soulèvement quand elle est vide ? (γw = 10 kN/m³, on néglige le frottement des terres)`, c:`Hauteur d'eau sous le fond : 2,5 − 0,5 = 2,0 m → pression 20 kN/m² ; poussée d'Archimède : 20 × 4 × 3 = **240 kN**.
Poids : 210 kN < 240 kN → la bâche **se soulève** quand elle est vidée en saison des pluies ! Solutions : alourdir (radier débordant chargé par les terres, béton de lestage), ou drainer pour empêcher la montée de la nappe. On vise un coefficient de sécurité d'au moins 1,1 à 1,2.`},
  {t:"Remontées capillaires", d:1, e:`Un mur de maison en agglos repose sur une fondation dans un limon ; la nappe est à 2,5 m. Le bas des murs est humide et la peinture cloque. Expliquer et proposer des remèdes.`, c:`Dans un limon, l'eau peut remonter **par capillarité** de 1 à 5 m au-dessus de la nappe : elle atteint les fondations puis monte dans les agglos poreux.
Remèdes : à la construction, une **arase étanche** (mortier hydrofuge ou bande bitumineuse) en pied de mur au-dessus du sol fini, un **drain** et un trottoir périphérique ; sur un existant, une **injection** de produit hydrofuge à la base des murs, l'amélioration de l'évacuation des eaux de pluie et des enduits respirants.`}
 ],
 quiz:[
  {q:"La loi de Darcy s'écrit :", o:["Q = k / (i A)","Q = k × i × A","Q = i / k","Q = k × A"], r:1, e:"Débit = perméabilité × gradient × section."},
  {q:"Le sol le moins perméable est :", o:["Le gravier","Le sable","Le limon","L'argile"], r:3, e:"k de l'ordre de 10⁻⁹ m/s ou moins."},
  {q:"La remontée capillaire est la plus forte dans :", o:["Les graviers","Les sables","Les argiles","Les cailloux"], r:2, e:"Plus les vides sont fins, plus l'eau monte."},
  {q:"Une bâche enterrée vide sous la nappe risque :", o:["De s'enfoncer","D'être soulevée par la poussée d'Archimède","De geler","Rien"], r:1, e:"Il faut vérifier son poids."},
  {q:"Un drain périphérique sert à :", o:["Évacuer l'eau autour des fondations","Porter les murs","Remplacer les semelles","Décorer"], r:0, e:"Tuyau perforé dans du gravier avec exutoire."}
 ]},

{id:"geo-2", niv:2, titre:"Identification des sols : granulométrie, Atterberg, VBS, équivalent de sable", duree:65, contenu:`## Pourquoi identifier un sol ?
L'identification permet de **nommer** un sol de façon objective, de prévoir son **comportement** (sensibilité à l'eau, compactage, portance) et de le **classer** pour choisir son usage (remblai, couche de forme, assise de fondation). Les essais d'identification sont simples, peu coûteux et réalisés sur échantillons remaniés.

## L'analyse granulométrique
On sépare les grains par **tamisage** (lavé) sur une série de tamis (de 50 mm à 0,08 mm), puis, pour la partie fine (< 80 µm), par **sédimentométrie** (vitesse de chute dans l'eau). On trace la **courbe granulométrique** : pourcentage de passants en fonction du diamètre (échelle logarithmique).
| Fraction | Dimension |
|---|---|
| Blocs, cailloux | > 20 mm |
| Graviers | 2 à 20 mm |
| Sables | 0,08 à 2 mm |
| Limons | 2 µm à 80 µm |
| Argiles | < 2 µm |
On lit sur la courbe les diamètres **D10**, **D30**, **D60** (diamètres correspondant à 10, 30 et 60 % de passants) et l'on calcule :
$$ Cu = D60 / D10   (coefficient d'uniformité)      Cc = D30² / (D10 × D60)   (coefficient de courbure)
- **Cu < 2** : granulométrie **serrée** (uniforme, sable de dune) ; **Cu > 4 à 6** : granulométrie **étalée** ;
- **1 < Cc < 3** et Cu élevé : sol **bien gradué** (les petits grains remplissent les vides des gros : bon compactage).

> [!exemple] Grave sableuse latéritique
> Passants : 20 mm 100 % ; 10 mm 88 % ; 5 mm 72 % ; 2 mm 55 % ; 1 mm 41 % ; 0,4 mm 26 % ; 0,2 mm 17 % ; 0,08 mm **9 %**.
> Par interpolation logarithmique : D10 ≈ 0,090 mm ; D30 ≈ 0,51 mm ; D60 ≈ 2,62 mm.
> Cu = 2,62 / 0,090 = **29** ; Cc = 0,51² / (0,090 × 2,62) = **1,1** → sol **bien gradué** avec 9 % de fines : bon matériau de remblai et de couche de forme.

## Les limites d'Atterberg (sols fins)
Un sol fin change d'état avec sa teneur en eau : solide, plastique, liquide. On mesure sur la fraction < 0,4 mm :
- la **limite de liquidité wL** (appareil de Casagrande ou cône de pénétration) ;
- la **limite de plasticité wP** (rouleau de 3 mm qui se fissure).
$$ IP = wL − wP   (indice de plasticité)      IC = (wL − w) / IP   (indice de consistance)
| IP | Sol | | IC | Consistance |
|---|---|---|---|---|
| < 12 | peu plastique (limon) | | < 0 | liquide |
| 12 – 25 | moyennement plastique | | 0 – 0,25 | très molle |
| 25 – 40 | plastique (argile) | | 0,25 – 0,50 | molle |
| > 40 | très plastique (argile gonflante probable) | | 0,50 – 0,75 | ferme |
| | | | 0,75 – 1 | très ferme |
| | | | > 1 | dure |

> [!exemple] Argile d'altération
> wL = 48 %, wP = 22 %, w = 30 % → **IP = 26** (argile plastique) ; **IC = (48 − 30) / 26 = 0,69** → consistance **ferme**. En saison des pluies, si w monte à 40 %, IC tombe à 0,31 (molle) : la portance diminue fortement.

## La valeur au bleu de méthylène (VBS)
On mesure la quantité de bleu de méthylène que les particules fines peuvent **adsorber** (surface spécifique des argiles). C'est un indicateur rapide de l'**argilosité** :
| VBS (g pour 100 g de sol) | Sol |
|---|---|
| < 0,1 | insensible à l'eau |
| 0,2 – 1,5 | sablo-limoneux, peu sensible |
| 1,5 – 2,5 | limoneux |
| 2,5 – 6 | limono-argileux |
| 6 – 8 | argileux |
| > 8 | très argileux |

## L'équivalent de sable (ES)
Pour les **sables** et graves : on agite le sol dans une solution floculante et on mesure la hauteur du sable déposé par rapport à la hauteur totale (sable + floc argileux). **ES > 80** : sable très propre (bétons) ; **ES < 60** : sable argileux (déconseillé pour les bétons, sensible à l'eau en remblai).

> [!retenir]
> - Granulométrie : % de fines (< 80 µm), Cu = D60/D10, Cc = D30²/(D10 D60).
> - Atterberg : IP = wL − wP (plasticité) ; IC = (wL − w)/IP (consistance).
> - VBS : argilosité ; ES : propreté des sables.
> - Ces essais servent à classer le sol (chapitre suivant).`,
 sujet:{titre:"Identification d'un sol : granulométrie, limites d'Atterberg, VBS et équivalent de sable", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Deux matériaux sont proposés pour les remblais d'une zone industrielle à Yamoussoukro. Vous dépouillez les essais d'identification.

**Matériau 1 — analyse granulométrique (passants cumulés)**

| Tamis (mm) | 20 | 10 | 5 | 2 | 1 | 0,5 | 0,2 | 0,1 | 0,08 |
|---|---|---|---|---|---|---|---|---|---|
| Passant (%) | 100 | 95 | 84 | 66 | 52 | 38 | 22 | 13 | 8 |

Équivalent de sable : **ES = 58** ; VBS = **0,4**.

**Matériau 2 — sol fin (65 % de fines)**
- Casagrande : **42,9 %** d'eau à **22 coups** et **41,4 %** à **28 coups** ;
- Limite de plasticité **wP = 21 %** ; teneur en eau naturelle **w = 28 %** ; VBS = **3,2**.

### Partie A — Granulométrie (8 points)
1. Déterminer par interpolation logarithmique D10, D30 et D60. (4 pts)
2. Calculer Cu et Cc. Le matériau est-il bien gradué ? (3 pts)
3. Quel est le pourcentage de fines ? (1 pt)

### Partie B — Atterberg (7 points)
4. Déterminer wL par interpolation (abscisse en log du nombre de coups). (2 pts)
5. Calculer IP et IC ; qualifier la plasticité et la consistance. (3 pts)
6. Que devient IC si w monte à 36 % en saison des pluies ? (2 pts)

### Partie C — VBS et ES (3 points)
7. Interpréter la VBS des deux matériaux et l'ES du matériau 1. Ce sable convient-il pour un béton ? (3 pts)

### Partie D — Conclusion (2 points)
8. Quel matériau choisir pour les remblais sous les dallages ? Pourquoi ? (2 pts)`,
  corrige:`### Partie A — Granulométrie (8 pts)
1. log D = log d1 + (p − p1) / (p2 − p1) × (log d2 − log d1) : *(4 pts)*
   - D10 (entre 0,08 → 8 % et 0,1 → 13 %) : **0,087 mm** ;
   - D30 (entre 0,2 → 22 % et 0,5 → 38 %) : **0,32 mm** ;
   - D60 (entre 1 → 52 % et 2 → 66 %) : **1,49 mm**.
2. Cu = 1,49 / 0,087 = **17** (granulométrie étalée) ; Cc = 0,32² / (0,087 × 1,49) = **0,77** < 1 → **pas bien gradué** au sens strict (il manque une fraction intermédiaire), malgré un Cu élevé. *(3 pts)*
3. Passant à 0,08 mm : **8 %** de fines. *(1 pt)*

### Partie B — Atterberg (7 pts)
4. wL = 42,9 + (log 25 − log 22) / (log 28 − log 22) × (41,4 − 42,9) = 42,9 − 0,53 × 1,5 = **42,1 % ≈ 42 %**. *(2 pts)*
5. IP = 42 − 21 = **21** (moyennement plastique) ; IC = (42 − 28) / 21 = **0,67** → **ferme**. *(3 pts)*
6. IC = (42 − 36) / 21 = **0,29** → **molle** : portance fortement réduite. *(2 pts)*

### Partie C — VBS et ES (3 pts)
7. Matériau 1 : VBS 0,4 → sablo-limoneux peu sensible à l'eau ; ES 58 < 60 → sable un peu argileux, **déconseillé pour les bétons**. Matériau 2 : VBS 3,2 → limono-argileux, sensible à l'eau. *(3 pts)*

### Partie D — Conclusion (2 pts)
8. Le **matériau 1** : peu de fines, peu sensible à l'eau, se compacte bien. Le matériau 2, plastique et sensible à l'eau, serait difficile à compacter en saison des pluies. *(2 pts)*

> [!attention] Erreurs à éviter
> - Interpoler linéairement sur les diamètres au lieu de leurs logarithmes.
> - Conclure « bien gradué » sur le seul Cu.
> - Calculer IC avec wP au lieu de wL au numérateur.`},
 exercices:[
  {t:"Indices d'Atterberg", d:1, e:`Une argile a wL = 55 %, wP = 25 % et une teneur en eau naturelle de 40 %. Calculer IP et IC et décrire le sol.`, c:`**IP = 55 − 25 = 30** : argile **plastique**.
**IC = (55 − 40) / 30 = 0,50** : à la limite entre **molle** et **ferme**. Sol sensible à l'eau, portance modeste ; un IP de 30 fait aussi craindre un comportement gonflant à vérifier.`},
  {t:"Coefficients granulométriques", d:2, e:`Un sable a D10 = 0,15 mm, D30 = 0,25 mm et D60 = 0,40 mm. Calculer Cu et Cc. Est-il bien gradué ?`, c:`**Cu = 0,40 / 0,15 = 2,7** ; **Cc = 0,25² / (0,15 × 0,40) = 1,04**.
Cc est entre 1 et 3, mais Cu est faible (< 4 à 6) : granulométrie **serrée** (sable assez uniforme), donc **mal gradué** : il se compacte moins bien qu'un sable étalé.`},
  {t:"Interpréter une VBS et un ES", d:1, e:`Deux sables sont proposés pour un béton : sable A (ES = 82, VBS = 0,3) et sable B (ES = 55, VBS = 2,2). Lequel choisir ?`, c:`**Sable A** : très propre (ES > 80) et peu argileux. Le sable B est **argileux** (ES faible, VBS limoneuse) : il demanderait plus d'eau, donnerait un béton moins résistant et plus sujet au retrait.`},
  {t:"Teneur en eau et consistance", d:2, e:`Un limon a wL = 32 % et wP = 20 %. En saison sèche, w = 15 % ; en saison des pluies, w = 28 %. Calculer IC dans les deux cas et commenter pour une fondation.`, c:`IP = 12.
Saison sèche : **IC = (32 − 15) / 12 = 1,42** → **dur**.
Saison des pluies : **IC = (32 − 28) / 12 = 0,33** → **mou**.
La résistance du sol varie fortement avec les saisons : on dimensionne les fondations pour l'état le plus **humide**, et l'on protège les fouilles de la pluie pendant les travaux.`}
 ],
 quiz:[
  {q:"Les fines d'un sol sont les grains de diamètre inférieur à :", o:["2 mm","0,4 mm","80 µm","2 µm"], r:2, e:"Passant au tamis de 0,08 mm."},
  {q:"L'indice de plasticité vaut :", o:["wL + wP","wL − wP","wP − wL","wL / wP"], r:1, e:"Étendue du domaine plastique."},
  {q:"Un IC supérieur à 1 signifie un sol :", o:["Liquide","Mou","Dur","Organique"], r:2, e:"Teneur en eau inférieure à wP."},
  {q:"Un sol bien gradué a :", o:["Cu < 2","Cu élevé et 1 < Cc < 3","Cc > 10","Que des grains identiques"], r:1, e:"Les petits grains remplissent les vides des gros."},
  {q:"L'équivalent de sable mesure :", o:["La teneur en eau","La propreté d'un sable","La résistance","La perméabilité"], r:1, e:"Proportion de sable par rapport au floc argileux."}
 ]},

{id:"geo-11", niv:2, titre:"Classification des sols pour les terrassements et les chaussées", duree:50, contenu:`## Pourquoi classer ?
La classification range les sols en **familles** de comportement voisin, ce qui permet d'utiliser les **règles d'emploi** (remblais, couches de forme, chaussées) sans refaire toute une étude. En France et en Afrique francophone, on utilise surtout le **GTR** (Guide des terrassements routiers, norme NF P 11-300) ; les bureaux d'études anglophones et les rapports internationaux utilisent la classification **USCS** (unifiée) ou **HRB/AASHTO** pour les routes.

## La classification GTR (simplifiée)
| Classe | Critère principal | Exemples | Comportement |
|---|---|---|---|
| **A** : sols fins | passant à 80 µm > 35 % | limons, argiles | très sensibles à l'eau |
| A1 | IP ≤ 12 ou VBS ≤ 2,5 | limons peu plastiques | changent vite d'état avec w |
| A2 | 12 < IP ≤ 25 | sables fins argileux, limons argileux | moyennement plastiques |
| A3 | 25 < IP ≤ 40 | argiles | plastiques, difficiles à compacter |
| A4 | IP > 40 | argiles très plastiques | gonflantes, à éviter en remblai |
| **B** : sols sableux et graveleux avec fines | passant à 80 µm de 12 à 35 %, ou ≤ 12 % avec VBS > 0,1 | sables et graves argileux, graveleux latéritiques | sensibles à l'eau selon leurs fines |
| **C** : sols à fines et gros éléments | éléments > 50 mm | arènes, éboulis argileux | selon la matrice fine |
| **D** : sols insensibles à l'eau | fines ≤ 12 % et VBS ≤ 0,1 | sables et graves propres | excellents remblais |
| **R** : matériaux rocheux | roches | cuirasses, granites | selon la dureté et la fragmentabilité |
On précise ensuite l'**état hydrique** (th : très humide, h : humide, m : moyen, s : sec, ts : très sec) par rapport à l'optimum Proctor : un sol A2 « h » est trop humide pour être compacté correctement sans traitement.

## La classification USCS (rappel)
Deux lettres : la première désigne la nature (**G** grave, **S** sable, **M** limon, **C** argile, **O** organique, **Pt** tourbe), la seconde la granulométrie ou la plasticité (**W** bien gradué, **P** mal gradué, **L** faible plasticité wL < 50, **H** forte plasticité wL > 50). Exemples : SW (sable bien gradué), GC (grave argileuse), CH (argile très plastique). Le **diagramme de plasticité de Casagrande** (IP en fonction de wL, avec la « ligne A » : IP = 0,73 (wL − 20)) sépare argiles (au-dessus) et limons (au-dessous).

## Les graveleux latéritiques
Matériaux de base des routes et des remblais en Côte d'Ivoire, ils se classent en général en **B** (B5, B6) ou **C**, selon leurs fines. Pour les **couches de chaussée**, on exige des critères supplémentaires : fines limitées (souvent ≤ 20 à 35 % selon la couche), IP ≤ 15 à 20, et un **CBR** élevé après compactage et imbibition (≥ 30 en couche de fondation, ≥ 80 en couche de base). S'ils ne suffisent pas, on les **améliore** au ciment ou à la chaux.

> [!exemple] Classer deux sols
> - Sol 1 : 9 % de fines, VBS = 0,4, grave sableuse bien graduée → plus de 0,1 de VBS → **B** (sable/grave peu argileux) ; bon remblai.
> - Sol 2 : 62 % de fines, wL = 48, wP = 22 (IP = 26) → **A3** (argile plastique) ; en USCS : IP = 26 > 0,73 × (48 − 20) = 20,4 → au-dessus de la ligne A, wL < 50 → **CL**. Remblai difficile, à réserver aux zones non porteuses ou à traiter à la chaux.

> [!retenir]
> - GTR : A (fins), B (sableux/graveleux avec fines), C (fines + gros éléments), D (insensibles à l'eau), R (rocheux).
> - A1 à A4 selon IP croissant ; A4 = argiles très plastiques à éviter.
> - USCS : G, S, M, C, O + W, P, L, H ; ligne A : IP = 0,73 (wL − 20).
> - Graveleux latéritiques : souvent B ou C, contrôlés par CBR pour les chaussées.`,
 sujet:{titre:"Classer quatre sols (GTR et USCS) et décider de leur emploi en terrassement", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le terrassement d'une plate-forme logistique à Bouaké mobilise quatre sols. Vous les classez et décidez de leur emploi.

**Données**

| Sol | Fines < 80 µm | wL | wP | VBS | Remarques |
|---|---|---|---|---|---|
| S1 | 58 % | 36 | 22 | 2,3 | w naturelle 19 %, wOPN 14 % |
| S2 | 18 % | — | — | 0,9 | graveleux latéritique, Dmax 20 mm |
| S3 | 4 % | — | — | 0,05 | sable de rivière propre |
| S4 | 72 % | 68 | 24 | 7,5 | argile noire de bas-fond |

Ligne A de Casagrande : IP = 0,73 (wL − 20).
Pour une couche de fondation de chaussée, on exige IP ≤ 15 à 20 et **CBR ≥ 30** ; le CBR mesuré sur S2 est **42**.

### Partie A — GTR (8 points)
1. Classer chaque sol dans le GTR (A1 à A4, B, D). (6 pts)
2. Qu'appelle-t-on état hydrique ? Donner celui du sol S1. (2 pts)

### Partie B — USCS (4 points)
3. Classer S1 et S4 dans le système USCS à l'aide de la ligne A. (4 pts)

### Partie C — Emploi (8 points)
4. Pour chaque sol, indiquer l'emploi possible : remblai courant, couche de forme, couche de fondation de chaussée, à éviter. (4 pts)
5. Que faire du sol S1 trop humide si on doit l'utiliser en remblai ? (2 pts)
6. Le sol S2 convient-il en couche de fondation ? En couche de base (CBR ≥ 80) ? (2 pts)`,
  corrige:`### Partie A — GTR (8 pts)
1. *(6 pts)*
   - **S1** : 58 % de fines > 35 % → sol fin ; IP = 14 → **A2** ;
   - **S2** : 18 % de fines (12 à 35 %) → **B** (graveleux argileux, sensible à l'eau selon ses fines) ;
   - **S3** : 4 % de fines et VBS ≤ 0,1 → **D** (insensible à l'eau) ;
   - **S4** : 72 % de fines ; IP = 44 > 40 → **A4** (très plastique, gonflante).
2. L'état hydrique situe la teneur en eau par rapport à l'optimum Proctor (th, h, m, s, ts). S1 : w = 19 % pour wOPN = 14 % → **humide (h)** : trop humide pour être bien compacté. *(2 pts)*

### Partie B — USCS (4 pts)
3. *(4 pts)*
   - S1 : ligne A = 0,73 × 16 = 11,7 ; IP 14 au-dessus, wL < 50 → **CL** (argile peu plastique) ;
   - S4 : ligne A = 0,73 × 48 = 35,0 ; IP 44 au-dessus, wL > 50 → **CH** (argile très plastique).

### Partie C — Emploi (8 pts)
4. *(4 pts)*
   - S1 : remblai courant après aération ou traitement ;
   - S2 : remblai, couche de forme, couche de fondation ;
   - S3 : excellent remblai (drainant), lit de pose, sable à béton ;
   - S4 : **à éviter** (gonflant, impossible à compacter correctement), à mettre en dépôt.
5. L'**aérer** (scarifier et laisser sécher par temps sec) ou le **traiter à la chaux** (1 à 3 %), qui assèche et améliore le sol. *(2 pts)*
6. Fondation : CBR 42 ≥ 30 ✔ (vérifier l'IP des fines). Base : 42 < 80 ✘ → traitement au ciment ou concassé. *(2 pts)*

> [!attention] Erreurs à éviter
> - Classer un sol fin sans calculer son IP.
> - Utiliser une argile très plastique en remblai sous un dallage.
> - Oublier que l'état hydrique peut changer la classe d'emploi d'un même sol.`},
 exercices:[
  {t:"Classer selon le GTR", d:1, e:`Classer selon le GTR (classe principale) :
1. sable de rivière lavé, 2 % de fines, VBS = 0,05 ;
2. argile, 70 % de fines, IP = 45 ;
3. limon, 85 % de fines, IP = 9 ;
4. graveleux latéritique, 22 % de fines, VBS = 1,2.`, c:`1. Fines ≤ 12 % et VBS ≤ 0,1 → **D** (insensible à l'eau).
2. Fines > 35 %, IP > 40 → **A4** (argile très plastique).
3. Fines > 35 %, IP ≤ 12 → **A1**.
4. Fines entre 12 et 35 % → **B** (sol graveleux avec fines).`},
  {t:"Diagramme de Casagrande", d:2, e:`Un sol fin a wL = 62 % et IP = 38. Calculer l'IP de la ligne A pour ce wL et donner son symbole USCS.`, c:`Ligne A : IP = 0,73 × (62 − 20) = **30,7**. IP = 38 > 30,7 → **argile** ; wL > 50 → plasticité **forte** → **CH** (argile très plastique, probablement gonflante).`},
  {t:"Choisir un matériau de remblai", d:2, e:`Pour le remblai sous le dallage d'un entrepôt, on dispose : d'une argile A3 sur place (état humide) et d'un graveleux latéritique B à 3 km. Que choisir et pourquoi ?`, c:`L'argile **A3 humide** est difficile à compacter, sensible à l'eau et risque de tasser ou de gonfler sous le dallage : à **éviter** (ou à traiter à la chaux, ce qui demande des moyens).
Le **graveleux latéritique B**, bien compacté à 95 % de l'OPM par couches de 20 à 30 cm, donne une assise portante et stable : c'est le bon choix, malgré le coût du transport.`}
 ],
 quiz:[
  {q:"Dans le GTR, un sol de classe A est :", o:["Un sol fin","Un sol rocheux","Un sol insensible à l'eau","Une grave propre"], r:0, e:"Plus de 35 % de fines."},
  {q:"Un sol D est :", o:["Très plastique","Insensible à l'eau","Organique","Une argile"], r:1, e:"Peu de fines, VBS ≤ 0,1."},
  {q:"En USCS, la lettre C désigne :", o:["Un caillou","Une argile","Un sable","Un sol organique"], r:1, e:"Clay."},
  {q:"La ligne A du diagramme de Casagrande vaut :", o:["IP = wL","IP = 0,73 (wL − 20)","IP = wL − wP","IP = 20"], r:1, e:"Elle sépare argiles et limons."},
  {q:"Un sol A4 en remblai est :", o:["Idéal","À éviter (argile très plastique, gonflante)","Insensible à l'eau","Rocheux"], r:1, e:"IP > 40."}
 ]},

{id:"geo-3", niv:2, titre:"Le compactage : essais Proctor, CBR et contrôle sur chantier", duree:65, contenu:`## Pourquoi compacter ?
Le **compactage** réduit le volume des vides d'un sol en chassant l'air par des moyens mécaniques. Un sol bien compacté est plus **résistant**, moins **déformable** (moins de tassements) et moins **perméable**. Tous les remblais sous ouvrages, les couches de forme et de chaussée, les fonds de forme des dallages doivent être compactés et **contrôlés**.

## L'essai Proctor
On compacte le sol dans un moule normalisé avec une énergie donnée, à plusieurs **teneurs en eau**, et on mesure chaque fois le **poids volumique sec** γd. La courbe γd(w) passe par un **maximum** :
- **γd max** (ou densité sèche maximale) ;
- **wOPN** (ou wOPM) : la **teneur en eau optimale**.
Trop sec, les grains frottent et se rangent mal ; trop humide, l'eau occupe les vides et ne peut pas être chassée.
- **Proctor normal** (OPN) : énergie modérée, remblais courants ;
- **Proctor modifié** (OPM) : énergie plus forte (engins lourds), couches de chaussée.

!fig:proctor|Courbe Proctor : maximum de densité sèche à la teneur en eau optimale

> [!exemple] Essai Proctor modifié sur une latérite
> | w (%) | 6 | 8 | 10 | 12 | 14 |
> |---|---|---|---|---|---|
> | γd (kN/m³) | 17,6 | 18,5 | 19,1 | 18,9 | 18,2 |
> En ajustant une parabole sur les trois points autour du sommet : **wOPM ≈ 10,5 %** et **γd max ≈ 19,1 kN/m³**.

## L'essai CBR (California Bearing Ratio)
Il mesure la **portance** d'un sol compacté : on enfonce un piston dans l'éprouvette (souvent après 4 jours d'**imbibition** dans l'eau, pour simuler la saison des pluies) et on compare l'effort à celui d'un matériau de référence :
$$ CBR = max (F2,5 / 13,2 kN ; F5 / 19,8 kN) × 100
(F2,5 et F5 : efforts pour 2,5 et 5 mm d'enfoncement.) Ordres de grandeur : argile 2 à 5 ; limon 5 à 10 ; sable 10 à 30 ; graveleux latéritique 30 à 80 ; grave concassée > 80. Le CBR sert à **dimensionner les chaussées** et les **plateformes**.

> [!exemple] Calcul d'un CBR
> F2,5 = 9,1 kN ; F5 = 13,7 kN → 9,1 / 13,2 = 69 % ; 13,7 / 19,8 = 69 % → **CBR = 69** : bon matériau de couche de fondation.

## Les spécifications et le contrôle sur chantier
On spécifie en général une **compacité** (rapport γd en place / γd max) :
- remblais courants : ≥ **95 % de l'OPN** ;
- couches de forme et de chaussée, dallages industriels : ≥ **95 à 98 % de l'OPM**.
On contrôle en place la densité par :
- le **densitomètre à membrane** (ou méthode du sable) : on creuse un trou, on pèse le sol extrait et on mesure le volume du trou ;
- le **gammadensimètre** (rapide, source radioactive, opérateur habilité) ;
- l'**essai de plaque** (module EV2, rapport EV2/EV1) pour la portance des plateformes.

> [!exemple] Contrôle au densitomètre
> Volume du trou : 1,85 L ; masse humide du sol extrait : 3,92 kg ; teneur en eau mesurée : 11,2 %.
> γ = 3,92 / 1,85 × 9,81 = 20,79 kN/m³ → γd = 20,79 / 1,112 = **18,69 kN/m³**.
> Compacité : 18,69 / 19,13 = **97,7 % de l'OPM** ✔ (spécification 95 %).

## Les bonnes pratiques
- Matériau à une teneur en eau **proche de l'optimum** (arroser ou laisser sécher) ;
- couches de **20 à 30 cm** (selon le compacteur), compactées avant la suivante ;
- **nombre de passes** défini par une planche d'essai ;
- compacteur adapté : **vibrant à bille lisse** pour les sables et graves, **à pieds dameurs** pour les sols fins, **plaque vibrante** ou pilonneuse dans les tranchées et contre les ouvrages ;
- ne pas compacter un sol détrempé (« matelassage ») : on attend ou on traite à la chaux.

> [!retenir]
> - Proctor : γd max à wopt ; OPN (remblais), OPM (chaussées).
> - CBR = max(F2,5/13,2 ; F5/19,8) × 100, souvent après imbibition.
> - Compacité = γd en place / γd max ≥ 95 %.
> - Couches de 20–30 cm, teneur en eau proche de l'optimum, contrôles réguliers.`,
 sujet:{titre:"Proctor, CBR et réception du compactage d'une couche de forme", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** La plate-forme d'un parking à Daloa reçoit une couche de forme en graveleux latéritique. Vous exploitez les essais de laboratoire puis vous contrôlez le compactage sur le chantier.

**Essai Proctor modifié**

| w (%) | 7 | 9 | 11 | 13 | 15 |
|---|---|---|---|---|---|
| γd (kN/m³) | 17,9 | 18,8 | 19,3 | 19,0 | 18,3 |

γs = **27,0 kN/m³** ; γw = **9,81 kN/m³**.

**Essai CBR** (éprouvette compactée à l'OPM, imbibée 4 jours) : force à 2,5 mm **7,4 kN** ; à 5 mm **12,3 kN** ; CBR = max(F2,5 / 13,2 ; F5 / 19,8) × 100.

**Contrôle au densitomètre à membrane** : volume du trou **2,10 L** ; masse de sol humide extrait **4,30 kg** ; teneur en eau **10,4 %** ; spécification : **95 % de l'OPM**.

Le matériau en dépôt a une teneur en eau de **6 %**.

### Partie A — Proctor (7 points)
1. Expliquer le principe de l'essai Proctor et la différence entre Proctor normal et modifié. (2 pts)
2. En ajustant une parabole sur les trois points autour du sommet, déterminer wOPM et γd max. (3 pts)
3. Calculer le γd de saturation à w = 13 % et vérifier que le point mesuré est bien en dessous. (2 pts)

### Partie B — CBR (4 points)
4. Calculer l'indice CBR et conclure (couche de forme : CBR ≥ 20 ; fondation : ≥ 30). (3 pts)
5. Pourquoi imbibe-t-on l'éprouvette 4 jours ? (1 pt)

### Partie C — Arrosage (3 points)
6. Calculer la quantité d'eau à ajouter par m³ compacté pour porter le matériau de 6 % à 11 % (γd visé : 95 % de l'OPM). (3 pts)

### Partie D — Contrôle (6 points)
7. Calculer γ, γd et la compacité de la couche. La couche est-elle réceptionnée ? (4 pts)
8. Proposer deux actions correctives. (2 pts)`,
  corrige:`### Partie A — Proctor (7 pts)
1. On compacte le sol dans un moule avec une énergie normalisée à différentes teneurs en eau et on mesure γd : la courbe passe par un **optimum**. Le Proctor **modifié** (dame plus lourde, plus de coups) correspond aux compacteurs lourds des routes ; le **normal** aux remblais courants. *(2 pts)*
2. Parabole par (9 ; 18,8), (11 ; 19,3), (13 ; 19,0) : sommet en **wOPM ≈ 11,2 %** et **γd max ≈ 19,31 kN/m³**. *(3 pts)*
3. $$ γd sat = γs / (1 + w γs / γw) = 27,0 / (1 + 0,13 × 27,0 / 9,81) = 19,89 kN/m³
   19,0 < 19,89 ✔ (il reste de l'air : aucun compactage ne peut dépasser la courbe de saturation). *(2 pts)*

### Partie B — CBR (4 pts)
4. 7,4 / 13,2 = 56 % ; 12,3 / 19,8 = 62 % → **CBR = 62** : convient en couche de forme et même en couche de fondation. *(3 pts)*
5. Pour se placer dans le cas le plus défavorable : sol saturé en saison des pluies. *(1 pt)*

### Partie C — Arrosage (3 pts)
6. γd visé = 0,95 × 19,31 = 18,34 kN/m³ → masse sèche ≈ 18,34 / 9,81 = **1,87 t/m³** ; eau = 0,05 × 1 870 = **≈ 94 L par m³** (plus les pertes par évaporation, à ajouter au moment du malaxage). *(3 pts)*

### Partie D — Contrôle (6 pts)
7. γ = 4,30 / 2,10 × 9,81 = **20,09 kN/m³** ; γd = 20,09 / 1,104 = **18,19 kN/m³** ; compacité = 18,19 / 19,31 = **94,2 % < 95 %** → **refusée**. *(4 pts)*
8. Ajouter des passes de compacteur (en restant près de l'OPM) ; vérifier l'épaisseur des couches (≤ 25 – 30 cm) et la teneur en eau ; changer de compacteur si besoin, puis refaire le contrôle. *(2 pts)*

> [!attention] Erreurs à éviter
> - Compacter trop sec (fines non lubrifiées) ou trop humide (matelassage).
> - Comparer γ humide à γd max.
> - Réceptionner une couche sur un seul essai : multiplier les points de contrôle.`},
 exercices:[
  {t:"Compacité d'un remblai", d:1, e:`L'OPM d'une latérite donne γd max = 19,1 kN/m³. Un contrôle en place donne γd = 17,9 kN/m³. La spécification est de 95 % de l'OPM. La couche est-elle acceptée ?`, c:`Compacité = 17,9 / 19,1 = **93,7 % < 95 %** → **refusée** : il faut compacter à nouveau (passes supplémentaires, éventuellement après arrosage ou séchage pour se rapprocher de l'optimum) puis recontrôler.`},
  {t:"Densité en place", d:2, e:`Au densitomètre à membrane : volume du trou 2,10 L ; masse humide extraite 4,28 kg ; teneur en eau 9,5 %. Calculer γd et la compacité par rapport à γd max = 19,4 kN/m³.`, c:`γ = 4,28 / 2,10 × 9,81 = **19,99 kN/m³** ; γd = 19,99 / 1,095 = **18,26 kN/m³** ; compacité = 18,26 / 19,4 = **94,1 %** : légèrement insuffisante pour 95 %.`},
  {t:"Volume d'emprunt", d:2, e:`Un remblai de 400 m³ doit être compacté à γd = 18,6 kN/m³. Dans la zone d'emprunt, le sol en place a γd = 16,5 kN/m³. Quel volume faut-il extraire de l'emprunt ? Combien de camions de 10 m³ (foisonnement 1,25) ?`, c:`Même masse de grains secs : Vemprunt = 400 × 18,6 / 16,5 = **451 m³ en place**.
Volume foisonné : 451 × 1,25 = **564 m³** → **57 camions** de 10 m³.`},
  {t:"Calcul d'un CBR", d:1, e:`Lors d'un essai CBR, on mesure F2,5 = 4,2 kN et F5 = 6,9 kN. Calculer le CBR et dire si le sol convient comme couche de fondation de chaussée (exigence CBR ≥ 30).`, c:`4,2 / 13,2 = 31,8 % ; 6,9 / 19,8 = 34,8 % → **CBR = 35** ≥ 30 ✔ : convient pour une couche de fondation (pas pour une couche de base, qui demande en général CBR ≥ 80).`}
 ],
 quiz:[
  {q:"L'essai Proctor détermine :", o:["La perméabilité","La teneur en eau optimale et la densité sèche maximale","Le CBR","La granulométrie"], r:1, e:"Courbe γd en fonction de w."},
  {q:"Un sol compacté trop humide :", o:["Atteint une densité plus grande","Ne peut pas atteindre une bonne densité, l'eau occupe les vides","Est toujours bon","Devient sec"], r:1, e:"Il faut se rapprocher de l'optimum."},
  {q:"La spécification courante pour un remblai sous ouvrage est :", o:["50 % OPN","95 % OPN ou OPM","150 %","Aucune"], r:1, e:"Compacité ≥ 95 %."},
  {q:"Le CBR sert surtout à dimensionner :", o:["Les poteaux","Les chaussées et plateformes","Les toitures","Les escaliers"], r:1, e:"Indice de portance."},
  {q:"Pour compacter une argile, on préfère un compacteur :", o:["À bille lisse vibrant","À pieds dameurs","À pneus seulement","Aucun"], r:1, e:"Les pieds pétrissent les sols fins."}
 ]},

{id:"geo-12", niv:2, titre:"Contraintes dans le sol : poids des terres, contrainte effective et diffusion des charges", duree:65, contenu:`## La contrainte verticale due au poids des terres
À la profondeur z, la contrainte verticale totale est le poids de la colonne de sol située au-dessus, par mètre carré :
$$ σv = Σ γi × hi      (kPa = kN/m²)
On utilise γ (humide) au-dessus de la nappe et γsat au-dessous.

## La pression de l'eau
Sous la nappe, l'eau des pores est sous pression : la **pression interstitielle** vaut, à une profondeur hw sous la surface de la nappe (eau au repos) :
$$ u = γw × hw      (γw = 9,81 kN/m³)

## Le principe de la contrainte effective (Terzaghi)
Le sol ne « sent » que la part de la contrainte transmise de grain à grain : la **contrainte effective**.
$$ σ' = σ − u
C'est elle qui gouverne la **résistance** (frottement entre grains) et les **tassements**. Conséquences pratiques :
- une **montée de la nappe** diminue σ' : la résistance et la portance baissent ;
- un **rabattement** (abaissement) de la nappe augmente σ' : le sol se tasse, ce qui peut endommager les **bâtiments voisins** d'une fouille pompée ;
- sous la nappe, on peut calculer directement σ' avec le poids déjaugé : σ' = Σ γ' h.

> [!exemple] Profil de contraintes
> 0 à 3 m : sable, γ = 18 kN/m³ (nappe à 3 m) ; 3 à 8 m : sable saturé, γsat = 20 kN/m³ ; 8 à 12 m : argile saturée, γsat = 18 kN/m³.
> | z (m) | σv (kPa) | u (kPa) | σ'v (kPa) |
> |---|---|---|---|
> | 3 | 3 × 18 = 54 | 0 | 54 |
> | 8 | 54 + 5 × 20 = 154 | 5 × 9,81 = 49,1 | 104,9 |
> | 12 | 154 + 4 × 18 = 226 | 9 × 9,81 = 88,3 | 137,7 |

## La diffusion des charges en profondeur
Une charge appliquée en surface (semelle, remblai) se **diffuse** dans le sol : la surcharge Δσ diminue avec la profondeur.
### Charge ponctuelle : formule de Boussinesq
$$ Δσz = (3 Q / (2π z²)) × [1 / (1 + (r/z)²)]^(5/2)      (r : distance horizontale à l'axe de la charge)
### Méthode simplifiée « 2 pour 1 » (ou pente 2/1)
On admet que la charge se répartit sur une surface qui s'élargit de 1 m horizontalement pour 2 m de profondeur de chaque côté :
$$ semelle B × L : Δσz = q × B × L / ((B + z)(L + z))      semelle filante : Δσz = q × B / (B + z)

> [!exemple] Surcharges sous une semelle et sous un poteau
> Semelle carrée 2 × 2 m transmettant q = 150 kPa : à 2 m sous la semelle, Δσ = 150 × 4 / (4 × 4) = **37,5 kPa** (le quart).
> Charge ponctuelle Q = 500 kN : à 2 m de profondeur sur l'axe, Δσ = 3 × 500 / (2π × 4) = **59,7 kPa** ; à 1 m de l'axe, Δσ = 59,7 × (1/1,25)^2,5 = **34,2 kPa**.

## La zone d'influence d'une fondation
La surcharge devient faible (moins de 10 à 20 % de q) à une profondeur d'environ **1,5 à 2 B** pour une semelle isolée et **3 à 4 B** pour une semelle filante : c'est la profondeur à reconnaître et dans laquelle les couches molles provoquent des tassements. Des semelles **voisines** superposent leurs bulbes de contraintes : deux semelles trop proches se chargent mutuellement.

!fig:bulbe|Bulbe des contraintes sous une semelle

> [!retenir]
> - σv = Σ γ h ; u = γw hw ; σ' = σ − u (Terzaghi).
> - Rabattre la nappe augmente σ' → tassements des voisins.
> - Boussinesq : Δσ = 3Q/(2π z²) sur l'axe ; méthode 2/1 : Δσ = q B L / ((B + z)(L + z)).
> - Zone d'influence ≈ 1,5 à 2 B (isolée), 3 à 4 B (filante).`,
 sujet:{titre:"Profil des contraintes dans le sol et diffusion des charges d'une semelle", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sous un futur immeuble à Port-Bouët, le sondage donne la coupe ci-dessous. Vous calculez les contraintes avant et après construction.

**Coupe**
- 0 à 2 m : remblai latéritique, **γ = 19 kN/m³** ; nappe à **2 m** ;
- 2 à 6 m : sable saturé, **γsat = 20 kN/m³** ;
- 6 à 11 m : argile saturée, **γsat = 17,5 kN/m³** ; γw = **9,81 kN/m³**.

**Ouvrage**
- Semelle rectangulaire **2,00 × 2,50 m** à **1,50 m** de profondeur, contrainte appliquée **q = 180 kPa** ;
- Ailleurs, une charge concentrée **Q = 600 kN** (poteau sur petit massif, assimilé à une charge ponctuelle en surface).

### Partie A — Contraintes initiales (9 points)
1. Calculer σv, u et σ'v à 2 m, 6 m, 8,5 m (milieu de l'argile) et 11 m. Présenter un tableau. (6 pts)
2. Énoncer le principe de Terzaghi et expliquer pourquoi c'est σ' qui gouverne le comportement du sol. (3 pts)

### Partie B — Diffusion (7 points)
3. Calculer le supplément de contrainte au milieu de l'argile sous la semelle (méthode 2/1 : Δσ = q B L / ((B + z)(L + z))). (3 pts)
4. Calculer Δσ sous la charge Q à 3 m de profondeur sur l'axe, puis à 1,50 m de l'axe (Boussinesq). (4 pts)

### Partie C — Rabattement de nappe (4 points)
5. Un pompage voisin abaisse la nappe de 2 m (le sable entre 2 et 4 m reste humide, γ = 18 kN/m³). Calculer le nouveau σ'v au milieu de l'argile et l'augmentation. Conséquence ? (4 pts)`,
  corrige:`### Partie A — Contraintes initiales (9 pts)
1. *(6 pts)*

| z (m) | σv (kPa) | u (kPa) | σ'v (kPa) |
|---|---|---|---|
| 2 | 2 × 19 = 38,0 | 0 | 38,0 |
| 6 | 38 + 4 × 20 = 118,0 | 4 × 9,81 = 39,2 | 78,8 |
| 8,5 | 118 + 2,5 × 17,5 = 161,8 | 6,5 × 9,81 = 63,8 | 98,0 |
| 11 | 118 + 5 × 17,5 = 205,5 | 9 × 9,81 = 88,3 | 117,2 |

2. **σ' = σ − u** : la contrainte effective est celle que se transmettent les grains ; c'est elle qui produit les tassements et la résistance au cisaillement (l'eau ne résiste pas au cisaillement). *(3 pts)*

### Partie B — Diffusion (7 pts)
3. z = 8,5 − 1,5 = 7,0 m → Δσ = 180 × 2,00 × 2,50 / (9,00 × 9,50) = **10,5 kPa** (6 % de q). *(3 pts)*
4. $$ Δσ = 3 Q / (2π z²) = 3 × 600 / (2π × 9) = 31,8 kPa
   À r = 1,50 m : r/z = 0,5 → × (1 / 1,25)^2,5 = × 0,572 → **18,2 kPa**. *(4 pts)*

### Partie C — Rabattement (4 pts)
5. σv à 8,5 m : 2 × 19 + 2 × 18 + 2 × 20 + 2,5 × 17,5 = 157,8 kPa ; u = (8,5 − 4) × 9,81 = 44,1 kPa → **σ'v = 113,6 kPa**, soit **+ 15,6 kPa** : l'argile se consolide → **tassements** des bâtiments voisins, même sans charge nouvelle. *(4 pts)*

> [!attention] Erreurs à éviter
> - Utiliser γsat au-dessus de la nappe ou oublier u sous la nappe.
> - Calculer z depuis la surface au lieu du niveau de la semelle pour la diffusion.
> - Penser que pomper la nappe est sans effet sur les voisins.`},
 exercices:[
  {t:"Contrainte effective", d:1, e:`Sable : γ = 18 kN/m³ au-dessus de la nappe (à 2 m de profondeur), γsat = 20 kN/m³ en dessous. Calculer σv, u et σ'v à 6 m de profondeur.`, c:`σv = 2 × 18 + 4 × 20 = **116 kPa** ; u = 4 × 9,81 = **39,2 kPa** ; **σ'v = 76,8 kPa**.`},
  {t:"Effet d'un rabattement de nappe", d:2, e:`Dans le sol de l'exercice précédent, on pompe pour rabattre la nappe de 2 m à 5 m de profondeur (le sable dénoyé garde γ = 18 kN/m³). Calculer la nouvelle contrainte effective à 6 m et son augmentation. Quelle conséquence pour les bâtiments voisins ?`, c:`σv = 5 × 18 + 1 × 20 = **110 kPa** ; u = 1 × 9,81 = 9,8 kPa → **σ'v = 100,2 kPa**, soit **+ 23,4 kPa**.
Cette augmentation de contrainte effective provoque un **tassement** des couches compressibles sous les bâtiments voisins (fissures possibles) : il faut limiter le rabattement dans le temps et dans l'espace, réinjecter l'eau si nécessaire et suivre les avoisinants (repères de tassement).`},
  {t:"Charge ponctuelle", d:1, e:`Un poteau transmet 400 kN au sol par une petite semelle. Calculer la surcharge à 3 m de profondeur sur l'axe (Boussinesq).`, c:`**Δσ = 3 × 400 / (2π × 9) = 21,2 kPa**.`},
  {t:"Semelle filante (méthode 2/1)", d:2, e:`Une semelle filante de 1,20 m de large transmet q = 180 kPa. Calculer la surcharge à 1,5 m et à 3,6 m sous la semelle. Commenter.`, c:`z = 1,5 m : **Δσ = 180 × 1,2 / 2,7 = 80 kPa** (44 % de q).
z = 3,6 m : **Δσ = 180 × 1,2 / 4,8 = 45 kPa** (25 % de q).
Sous une semelle filante, la surcharge diminue plus lentement que sous une semelle carrée : une couche molle à 3–4 m peut encore tasser. La reconnaissance doit aller au moins à 3 à 4 B sous la semelle.`}
 ],
 quiz:[
  {q:"La contrainte effective vaut :", o:["σ + u","σ − u","u − σ","σ × u"], r:1, e:"Principe de Terzaghi."},
  {q:"Quand la nappe monte, la contrainte effective :", o:["Augmente","Diminue","Ne change pas","Devient nulle partout"], r:1, e:"u augmente."},
  {q:"Le rabattement de nappe près d'un bâtiment existant peut provoquer :", o:["Un gonflement","Un tassement","Rien","Une augmentation de portance seulement"], r:1, e:"σ' augmente dans les couches compressibles."},
  {q:"Avec la méthode 2/1, sous une semelle carrée B = 2 m, à z = 2 m, la surcharge vaut :", o:["q","q/2","q/4","q/8"], r:2, e:"(2 × 2)/(4 × 4) = 1/4."},
  {q:"La pression interstitielle à 5 m sous la surface de la nappe vaut environ :", o:["5 kPa","49 kPa","100 kPa","0"], r:1, e:"5 × 9,81 = 49 kPa."}
 ]},

{id:"geo-13", niv:2, titre:"Écoulements, perméabilité et rabattement de nappe", duree:60, contenu:`## Mesurer la perméabilité
### Au laboratoire
- **Perméamètre à charge constante** (sols perméables : sables, graves) : on maintient une charge h, on mesure le volume Q écoulé pendant t à travers l'éprouvette (longueur L, section A) :
$$ k = Q × L / (A × h × t)
- **Perméamètre à charge variable** (sols peu perméables) : l'eau descend dans un tube de section a, de h1 à h2 pendant t :
$$ k = (a × L / (A × t)) × ln(h1 / h2)
### Sur le terrain
- **Essai Lefranc** dans un forage (injection ou pompage d'eau dans une cavité) ;
- **essai de pompage** dans un puits avec piézomètres d'observation (le plus représentatif pour dimensionner un rabattement).

> [!exemple] Perméamètre à charge variable
> a = 1 cm², A = 80 cm², L = 10 cm, h1 = 100 cm, h2 = 60 cm, t = 900 s.
> k = (1 × 10 / (80 × 900)) × ln(100/60) = 1,39 × 10⁻⁴ × 0,511 = 7,1 × 10⁻⁵ cm/s = **7,1 × 10⁻⁷ m/s** (limon).

## Le gradient hydraulique et la boulance
L'eau qui s'écoule de bas en haut exerce sur les grains une force qui s'oppose à leur poids. Quand le gradient atteint le **gradient critique** :
$$ ic = γ' / γw   (≈ 1 pour la plupart des sols)
la contrainte effective s'annule : le sable se met à « bouillir » (**boulance**) et perd toute résistance. Au fond d'une fouille pompée dans le sable, sous un écoulement ascendant, c'est un danger grave (fond qui se soulève, renard qui emporte le sol sous les palplanches). On vérifie un coefficient de sécurité ic / i ≥ 1,5 à 2, ou on allonge le chemin de l'eau (fiche des palplanches) ou on rabat la nappe **à l'extérieur** de la fouille.

## Le rabattement de nappe
Pour travailler **à sec** sous le niveau de la nappe, on la rabaisse provisoirement par **pompage** :
- **épuisement** en fond de fouille (puisard + pompe) : pour les petites venues d'eau et les sols peu perméables ;
- **pointes filtrantes** (wellpoints) : tubes de faible diamètre tous les 1 à 2 m autour de la fouille, reliés à une pompe à vide, pour 4 à 5 m de rabattement dans les sables ;
- **puits filtrants** équipés de pompes immergées pour les grands rabattements.

### Débit d'un puits (formule de Dupuit, nappe libre)
$$ Q = π × k × (H² − h²) / ln(R / r)
(H : épaisseur de la nappe avant pompage ; h : hauteur d'eau dans le puits ; r : rayon du puits ; R : rayon d'action, estimé par exemple par la formule de Sichardt R ≈ 3 000 × (H − h) × √k.)

> [!exemple] Rabattement par un puits
> Sable, k = 5 × 10⁻⁴ m/s ; nappe de H = 10 m d'épaisseur ; on veut h = 7 m dans le puits (rabattement 3 m) ; r = 0,15 m.
> R = 3 000 × 3 × √(5 × 10⁻⁴) = **201 m** ; Q = π × 5 × 10⁻⁴ × (100 − 49) / ln(201 / 0,15) = 0,0801 / 7,20 = 0,0111 m³/s = **40 m³/h**.
> Le rayon d'action de 200 m montre que le pompage influence un large voisinage (tassements possibles, puits voisins asséchés).

## Les précautions
- Étude hydrogéologique et autorisation pour les grands pompages ;
- **filtres** autour des pointes pour ne pas entraîner les fines (sinon : vides et tassements) ;
- rejet des eaux pompées vers un exutoire autorisé ;
- **surveillance** des bâtiments voisins (fissures, repères de tassement) et arrêt progressif du pompage ;
- pour les ouvrages définitifs sous la nappe : **cuvelage** étanche et vérification du soulèvement.

> [!retenir]
> - Charge constante : k = Q L / (A h t) ; charge variable : k = (a L / (A t)) ln(h1/h2).
> - Gradient critique ic = γ'/γw ≈ 1 → boulance si l'écoulement ascendant est trop fort.
> - Dupuit : Q = π k (H² − h²) / ln(R/r) ; Sichardt : R ≈ 3 000 s √k.
> - Rabattement : épuisement, pointes filtrantes, puits ; surveiller les avoisinants.`,
 sujet:{titre:"Perméabilité en laboratoire, rabattement de nappe et risque de boulance", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Construction d'une station de pompage enterrée à Treichville, avec une fouille de 3 m sous la nappe. Vous déterminez les perméabilités et dimensionnez le rabattement.

**Données — laboratoire**
- Sable, perméamètre à **charge constante** : volume recueilli **250 cm³** en **120 s** ; longueur **L = 12 cm** ; section **A = 78,5 cm²** ; charge **h = 40 cm** ;
- Limon, perméamètre à **charge variable** : tube **a = 0,8 cm²** ; A = 78,5 cm² ; L = 12 cm ; h1 = **120 cm**, h2 = **80 cm** en **1 800 s**.

**Données — rabattement**
- Nappe de **H = 12 m** d'épaisseur dans un sable (**k = 2 × 10⁻⁴ m/s**) ; rabattement voulu **3,5 m** dans le puits (h = 8,5 m) ; rayon du puits **r = 0,20 m** ;
- Formules : R ≈ 3 000 × (H − h) × √k ; Q = π k (H² − h²) / ln(R / r).

**Données — boulance** : palplanches avec une fiche de **4 m** sous le fond de fouille ; différence de niveau d'eau entre l'extérieur et le fond : **3 m** ; γ' = **10 kN/m³**.

### Partie A — Perméabilités (6 points)
1. Calculer k du sable (m/s). (3 pts)
2. Calculer k du limon (m/s). Pourquoi utilise-t-on deux appareils différents ? (3 pts)

### Partie B — Rabattement (8 points)
3. Calculer le rayon d'action R. (2 pts)
4. Calculer le débit d'un puits en m³/s et m³/h. (4 pts)
5. Quels risques ce rabattement fait-il courir aux bâtiments voisins ? (2 pts)

### Partie C — Boulance (6 points)
6. Estimer le gradient hydraulique de l'écoulement remontant (longueur d'écoulement ≈ 2 × fiche). (2 pts)
7. Calculer le gradient critique et le coefficient de sécurité. (2 pts)
8. Décrire le phénomène de boulance et deux moyens de l'éviter. (2 pts)`,
  corrige:`### Partie A — Perméabilités (6 pts)
1. $$ k = Q L / (A h t) = 250 × 12 / (78,5 × 40 × 120) = 7,96 × 10⁻³ cm/s
   → **k ≈ 8,0 × 10⁻⁵ m/s** (sable). *(3 pts)*
2. k = (a L / (A t)) × ln(h1 / h2) = (0,8 × 12 / (78,5 × 1 800)) × ln 1,5 = 2,75 × 10⁻⁵ cm/s → **k ≈ 2,8 × 10⁻⁷ m/s** (limon). À charge constante, le débit à travers un limon serait trop faible pour être mesuré : on suit la baisse du niveau dans un tube fin. *(3 pts)*

### Partie B — Rabattement (8 pts)
3. R = 3 000 × 3,5 × √(2 × 10⁻⁴) = **148 m**. *(2 pts)*
4. Q = π × 2 × 10⁻⁴ × (144 − 72,25) / ln(148,5 / 0,20) = 0,0451 / 6,61 = **6,8 × 10⁻³ m³/s ≈ 24,6 m³/h**. *(4 pts)*
5. L'abaissement de la nappe augmente σ' sous les bâtiments voisins (jusqu'à 150 m) → **tassements** et fissures, assèchement des puits ; entraînement de fines si les filtres sont mal faits. *(2 pts)*

### Partie C — Boulance (6 pts)
6. i ≈ 3 / (2 × 4) = **0,375**. *(2 pts)*
7. ic = γ' / γw = 10 / 10 = **1,0** ; F = 1,0 / 0,375 = **2,7** ✔ (on exige souvent F ≥ 1,5 à 2). *(2 pts)*
8. Si l'écoulement remontant annule la contrainte effective, le sable « bout » et perd toute résistance : le fond de fouille se soulève, les engins s'enfoncent. On l'évite en **allongeant la fiche** des palplanches (gradient plus faible) ou en **rabattant la nappe** sous le fond de fouille ; un tapis filtrant lesté aide aussi. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier de convertir les cm/s en m/s.
> - Utiliser le rabattement (H − h) au lieu de H² − h² dans la formule du débit.
> - Ouvrir une fouille sous la nappe dans un sable fin sans vérifier la boulance.`},
 exercices:[
  {t:"Perméamètre à charge constante", d:1, e:`Un sable de 12 cm de long et de section 78,5 cm² laisse passer 150 cm³ d'eau en 60 s sous une charge constante de 30 cm. Calculer k en m/s.`, c:`k = 150 × 12 / (78,5 × 30 × 60) = 1 800 / 141 300 = **0,0127 cm/s = 1,27 × 10⁻⁴ m/s** (sable moyen).`},
  {t:"Risque de boulance", d:2, e:`Au fond d'une fouille dans un sable (γsat = 20 kN/m³), l'écoulement ascendant crée un gradient i = 0,7. Calculer le gradient critique et le coefficient de sécurité. Conclure.`, c:`γ' = 20 − 9,81 = 10,19 kN/m³ → **ic = 10,19 / 9,81 = 1,04**.
F = 1,04 / 0,7 = **1,49** : juste insuffisant si l'on exige 1,5 à 2. Il faut réduire le gradient : **rabattre la nappe à l'extérieur** de la fouille (puits ou pointes filtrantes) ou **allonger la fiche** des palplanches, et éviter de pomper directement en fond de fouille.`},
  {t:"Débit de rabattement", d:2, e:`Une nappe libre de 8 m d'épaisseur dans un sable (k = 2 × 10⁻⁴ m/s) doit être rabattue de 3 m dans un puits de 0,20 m de rayon. Estimer le rayon d'action (Sichardt) et le débit.`, c:`**R = 3 000 × 3 × √(2 × 10⁻⁴) = 127 m**.
**Q = π × 2 × 10⁻⁴ × (64 − 25) / ln(127 / 0,2) = 0,0245 / 6,46 = 3,8 × 10⁻³ m³/s ≈ 13,7 m³/h**.`}
 ],
 quiz:[
  {q:"Pour un sable perméable, on utilise au laboratoire :", o:["Le perméamètre à charge constante","L'oedomètre","Le Proctor","Le CBR"], r:0, e:"Débit mesurable rapidement."},
  {q:"Le gradient critique de la plupart des sols vaut environ :", o:["0,1","1","10","100"], r:1, e:"ic = γ'/γw."},
  {q:"La boulance se produit quand :", o:["L'écoulement est descendant","L'écoulement ascendant annule la contrainte effective","Le sol est sec","Le sol est compacté"], r:1, e:"Le sable « bout »."},
  {q:"Les pointes filtrantes servent à :", o:["Compacter","Rabattre la nappe autour d'une fouille","Mesurer le CBR","Drainer un toit"], r:1, e:"Pompage par aspiration."},
  {q:"Un pompage prolongé près de bâtiments existants peut provoquer :", o:["Leur soulèvement","Leur tassement","Rien","Leur flambement"], r:1, e:"Augmentation de la contrainte effective."}
 ]},

{id:"geo-4", niv:2, titre:"Résistance au cisaillement des sols", duree:65, contenu:`## Les sols cèdent par cisaillement
Un sol ne se rompt pas par écrasement mais par **glissement** le long d'une surface : sous une fondation trop chargée, derrière un mur, dans un talus. Sa résistance est donc une **résistance au cisaillement** τ.

## Le critère de Mohr-Coulomb
$$ τ = c + σ × tan φ      (en contraintes effectives : τ = c' + σ' tan φ')
- **c** : la **cohésion** (kPa) : résistance des sols fins même sans contrainte normale (liaisons entre particules d'argile) ; nulle pour un sable propre ;
- **φ** : l'**angle de frottement interne** (degrés) : frottement et engrènement des grains.
| Sol | c' (kPa) | φ' (°) |
|---|---|---|
| Sable lâche | 0 | 28 – 32 |
| Sable dense, grave | 0 | 34 – 42 |
| Graveleux latéritique compacté | 10 – 30 | 30 – 38 |
| Limon | 0 – 10 | 25 – 30 |
| Argile raide | 10 – 30 | 20 – 28 |
| Argile molle, vase | 0 – 10 | 15 – 22 |

## Court terme et long terme
Dans un sol fin saturé, l'eau ne peut pas s'échapper rapidement quand on le charge : la surpression d'eau qui apparaît réduit la résistance. On distingue :
- le **comportement non drainé (court terme)**, juste après la construction : on utilise la **cohésion non drainée cu** (et φu = 0) ;
- le **comportement drainé (long terme)**, quand les surpressions se sont dissipées : on utilise **c' et φ'**.
Pour les argiles molles, c'est souvent le **court terme** qui est le plus défavorable (rupture pendant ou juste après la construction d'un remblai). Pour les sables, très perméables, on utilise toujours c' et φ'.
| Consistance de l'argile | cu (kPa) |
|---|---|
| Très molle | < 12 |
| Molle | 12 – 25 |
| Ferme | 25 – 50 |
| Raide | 50 – 100 |
| Très raide, dure | > 100 |

## Les essais
- **Boîte de cisaillement** (de Casagrande) : on cisaille l'éprouvette selon un plan imposé, sous plusieurs contraintes normales σ ; la droite τ = f(σ) donne c et φ.
- **Essai triaxial** : éprouvette cylindrique sous pression de confinement σ3, puis on augmente σ1 jusqu'à la rupture ; plusieurs essais donnent les cercles de Mohr et leur enveloppe. Variantes UU (non consolidé non drainé → cu), CU (avec mesure de u → c', φ'), CD (drainé → c', φ').
- **Scissomètre** (vane test) en place dans les argiles molles : donne cu directement.

> [!exemple] Essais à la boîte de cisaillement
> σ = 50, 100 et 200 kPa → τ à la rupture = 45, 72 et 126 kPa.
> Pente : (126 − 45) / (200 − 50) = 0,54 → **φ = arctan 0,54 = 28,4°** ; ordonnée à l'origine : **c = 45 − 50 × 0,54 = 18 kPa** (contrôle à 100 kPa : 18 + 54 = 72 ✔).

> [!exemple] Essai triaxial sur un sable
> σ3 = 100 kPa, rupture pour σ1 = 300 kPa (c = 0) : sin φ = (σ1 − σ3) / (σ1 + σ3) = 200 / 400 = 0,5 → **φ = 30°**.

!fig:mohr|Cercles de Mohr et droite intrinsèque de Coulomb

## À quoi sert la résistance au cisaillement ?
- calculer la **capacité portante** des fondations (c, φ ou cu entrent dans les facteurs de portance) ;
- calculer la **poussée** et la **butée** des terres (Ka et Kp dépendent de φ) ;
- vérifier la **stabilité des talus** et des remblais ;
- évaluer le frottement latéral des **pieux**.

> [!retenir]
> - τ = c + σ tan φ (Mohr-Coulomb), en effectives c', φ'.
> - Sable : c = 0, φ = 28 à 42° ; argile : c et φ plus faibles, cu à court terme.
> - Court terme (non drainé, cu) souvent critique pour les argiles molles.
> - Essais : boîte de cisaillement, triaxial (UU, CU, CD), scissomètre.`,
 sujet:{titre:"Résistance au cisaillement : boîte de Casagrande, triaxial et critère de Coulomb", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Pour un mur de soutènement et une fondation à Man, le laboratoire réalise des essais de cisaillement sur deux sols.

**Sol 1 — sable argileux, boîte de cisaillement (essais drainés)**

| Essai | σ (kPa) | τmax (kPa) |
|---|---|---|
| 1 | 50 | 46 |
| 2 | 100 | 74 |
| 3 | 200 | 130 |

**Sol 2 — sable propre, triaxial drainé** : pression de confinement **σ3 = 100 kPa**, contrainte axiale à la rupture **σ1 = 300 kPa**.

**Sol 3 — argile saturée, essai non consolidé non drainé (UU)** : déviateur à la rupture **σ1 − σ3 = 70 kPa**.

### Partie A — Critère de Coulomb (8 points)
1. Écrire le critère de Coulomb et expliquer c et φ. (2 pts)
2. Déterminer c et φ du sol 1 (tracer la droite intrinsèque). (4 pts)
3. Calculer la résistance au cisaillement du sol 1 à 4 m de profondeur (σ'v = 76 kPa). (2 pts)

### Partie B — Triaxial (6 points)
4. Tracer le cercle de Mohr à la rupture du sol 2 (centre et rayon). (2 pts)
5. Calculer φ du sol 2 (c = 0) : sin φ = (σ1 − σ3) / (σ1 + σ3). (2 pts)
6. Quelle serait la contrainte σ1 de rupture sous σ3 = 150 kPa ? (2 pts)

### Partie C — Comportement non drainé (6 points)
7. Calculer cu du sol 3. (2 pts)
8. Expliquer la différence entre comportement à court terme (non drainé) et à long terme (drainé) d'une argile. Lequel est le plus défavorable pour une fondation ? Pour un talus de déblai ? (4 pts)`,
  corrige:`### Partie A — Coulomb (8 pts)
1. **τ = c + σ tan φ** : c = cohésion (liaisons entre grains fins), φ = angle de frottement interne (frottement et enchevêtrement des grains). *(2 pts)*
2. Pente entre les essais 1 et 3 : (130 − 46) / (200 − 50) = 0,56 → **φ = arctan 0,56 = 29,2°** ; c = 46 − 0,56 × 50 = **18 kPa** (l'essai 2 tombe exactement sur la droite : 18 + 56 = 74 ✔). *(4 pts)*
3. τ = 18 + 76 × 0,56 = **60,6 kPa**. *(2 pts)*

### Partie B — Triaxial (6 pts)
4. Centre (σ1 + σ3) / 2 = **200 kPa** ; rayon (σ1 − σ3) / 2 = **100 kPa**. *(2 pts)*
5. sin φ = 200 / 400 = 0,5 → **φ = 30°**. *(2 pts)*
6. $$ σ1 = σ3 × (1 + sin φ) / (1 − sin φ) = 150 × 3 = 450 kPa
   *(2 pts)*

### Partie C — Non drainé (6 pts)
7. cu = 70 / 2 = **35 kPa** (φu = 0). *(2 pts)*
8. Sous une charge rapide, l'eau n'a pas le temps de s'évacuer : la surpression interstitielle réduit σ' et l'argile se comporte avec cu (φ = 0). À long terme, l'eau s'est évacuée : on utilise c', φ'. **Fondation** (chargement) : le court terme est le plus défavorable, l'argile se renforce en se consolidant. **Talus de déblai** (déchargement) : c'est le long terme, l'argile gonfle et se ramollit avec le temps. *(4 pts)*

> [!attention] Erreurs à éviter
> - Lire c sur l'axe des σ au lieu de l'axe des τ.
> - Utiliser des contraintes totales dans un calcul drainé.
> - Croire qu'une tranchée stable le premier jour le restera des semaines.`},
 exercices:[
  {t:"Paramètres de cisaillement", d:2, e:`Deux essais à la boîte de cisaillement donnent : σ = 100 kPa → τ = 80 kPa ; σ = 200 kPa → τ = 135 kPa. Calculer c et φ.`, c:`tan φ = (135 − 80) / (200 − 100) = 0,55 → **φ = 28,8°** ; **c = 80 − 100 × 0,55 = 25 kPa**.`},
  {t:"Essai triaxial drainé", d:2, e:`Un sable est cisaillé au triaxial drainé avec σ3 = 150 kPa ; la rupture se produit pour σ1 = 450 kPa. Calculer φ'.`, c:`sin φ' = (450 − 150) / (450 + 150) = 300 / 600 = 0,5 → **φ' = 30°**.`},
  {t:"Cohésion non drainée", d:1, e:`Un essai UU sur une argile donne un déviateur à la rupture σ1 − σ3 = 96 kPa. Calculer cu et qualifier l'argile.`, c:`**cu = 96 / 2 = 48 kPa** → argile **ferme** (25 à 50 kPa).`},
  {t:"Résistance en profondeur", d:2, e:`Dans un sable (φ' = 32°, c' = 0), la contrainte effective verticale à 6 m vaut 76,8 kPa. Quelle est la résistance au cisaillement sur un plan horizontal à cette profondeur ? Que devient-elle si la nappe monte et réduit σ' à 60 kPa ?`, c:`τ = 76,8 × tan 32° = **48,0 kPa**.
Avec σ' = 60 kPa : τ = 60 × 0,625 = **37,5 kPa** (− 22 %). La montée de la nappe réduit directement la résistance d'un sol frottant : c'est pourquoi les glissements de talus surviennent souvent en saison des pluies.`}
 ],
 quiz:[
  {q:"Le critère de Coulomb s'écrit :", o:["τ = c + σ tan φ","τ = σ / c","τ = c × φ","τ = E ε"], r:0, e:"Cohésion + frottement."},
  {q:"Un sable propre a une cohésion :", o:["Très grande","Nulle","Négative","Égale à φ"], r:1, e:"Il résiste uniquement par frottement."},
  {q:"À court terme, une argile saturée se calcule avec :", o:["c' et φ'","cu (φu = 0)","Seulement φ","Le CBR"], r:1, e:"Comportement non drainé."},
  {q:"Le scissomètre mesure en place :", o:["La perméabilité","La cohésion non drainée des argiles molles","La teneur en eau","Le CBR"], r:1, e:"Vane test."},
  {q:"La résistance au cisaillement sert à calculer :", o:["La capacité portante, la poussée des terres, la stabilité des talus","La couleur du sol","Le prix du terrain","La granulométrie"], r:0, e:"Tous les calculs de rupture."}
 ]},
{id:"geo-14", niv:3, titre:"Capacité portante des fondations superficielles", duree:70, contenu:`## Le problème
Une semelle transmet au sol une contrainte q. Si q devient trop grande, le sol **rompt par cisaillement** : un coin de sol s'enfonce sous la semelle et repousse latéralement les terres, qui se soulèvent à côté. La contrainte qui provoque cette rupture est la **capacité portante ultime qu**. On ne charge jamais le sol jusque-là : on applique un **coefficient de sécurité**.

!fig:bulbe|Diffusion des contraintes sous une semelle

## Les trois termes de la capacité portante
La formule générale (Terzaghi, complétée par Meyerhof et l'Eurocode 7) additionne trois contributions :
$$ qu = 0,5 × sγ × γ1 × B × Nγ  +  sc × c × Nc  +  γ2 × D × Nq
- **0,5 γ1 B Nγ** : terme de **surface** (le poids du sol sous la semelle) — γ1 : poids volumique du sol **sous** la fondation ;
- **c Nc** : terme de **cohésion** ;
- **γ2 D Nq** : terme de **profondeur** (le poids des terres autour de la semelle, qui s'oppose au soulèvement) — γ2 : poids volumique du sol **au-dessus** du niveau d'assise ;
- B : largeur de la semelle (m) ; D : profondeur d'encastrement (m) ;
- Nγ, Nc, Nq : **facteurs de portance**, qui ne dépendent que de φ ;
- sγ, sc : **coefficients de forme**.

## Les facteurs de portance
$$ Nq = e^(π tan φ) × tan²(45° + φ/2)      Nc = (Nq − 1) / tan φ      Nγ = 2 (Nq − 1) tan φ
| φ (°) | Nc | Nq | Nγ |
|---|---|---|---|
| 0 | 5,14 | 1,0 | 0 |
| 10 | 8,3 | 2,5 | 0,5 |
| 15 | 11,0 | 3,9 | 1,6 |
| 20 | 14,8 | 6,4 | 3,9 |
| 25 | 20,7 | 10,7 | 9,0 |
| 28 | 25,8 | 14,7 | 14,6 |
| 30 | 30,1 | 18,4 | 20,1 |
| 32 | 35,5 | 23,2 | 27,7 |
| 35 | 46,1 | 33,3 | 45,2 |
| 38 | 61,4 | 48,9 | 74,9 |
| 40 | 75,3 | 64,2 | 106,1 |
Les facteurs **croissent très vite avec φ** : passer de 30° à 35° multiplie Nγ par plus de 2. D'où l'importance de bien mesurer φ… et de ne pas le surestimer.

## Les coefficients de forme
| Semelle | sγ | sc |
|---|---|---|
| Filante (L > 5 B) | 1 | 1 |
| Rectangulaire B × L | 1 − 0,2 B/L | 1 + 0,2 B/L |
| Carrée ou circulaire | 0,8 | 1,2 |
Pour une semelle filante, on raisonne **par mètre linéaire** : la charge admissible vaut qadm × B (kN/m).

## Contrainte admissible
Approche classique (DTU 13.12) aux états de service :
$$ qadm = qu / 3
On vérifie ensuite : **q = N / A ≤ qadm** (N : charge de service, A : aire de la semelle). Aux états limites ultimes de l'Eurocode 7, on compare la charge ELU à la résistance divisée par un coefficient partiel (de l'ordre de 1,4), ce qui conduit à des dimensions voisines.

> [!exemple] Semelle filante sur sable
> B = 1,20 m ; D = 1,00 m ; sable γ = 18 kN/m³ ; φ = 30° ; c = 0. Facteurs : Nγ = 20,1 ; Nq = 18,4.
> - Terme de surface : 0,5 × 18 × 1,20 × 20,1 = **217,1 kPa**
> - Terme de profondeur : 18 × 1,00 × 18,4 = **331,2 kPa**
> - qu = 217,1 + 331,2 = **548,3 kPa** ; qadm = 548,3 / 3 = **182,8 kPa ≈ 0,18 MPa**
> - Charge admissible par mètre de mur : 182,8 × 1,20 = **219 kN/m**.

## Sols fins à court terme
Juste après la construction, une argile saturée se calcule en **non drainé** : φu = 0, c = cu. Alors Nγ = 0, Nq = 1, Nc = 5,14 :
$$ qu = 5,14 × sc × cu + γ D
> [!exemple] Semelle carrée sur argile
> Semelle 1,50 × 1,50 m à D = 1,20 m ; argile cu = 40 kPa ; γ = 19 kN/m³.
> qu = 1,2 × 5,14 × 40 + 19 × 1,20 = 246,7 + 22,8 = **269,5 kPa** → qadm = **89,8 kPa**.
> Une argile ferme ne porte qu'environ 0,09 MPa : il faudra une grande semelle, un radier ou des pieux si la charge est forte.

## Influence de la nappe
Sous la nappe, le sol est **déjaugé** : on remplace γ par **γ' = γsat − γw ≈ 10 kN/m³** dans les termes concernés.
- Nappe au niveau de l'assise : γ' dans le terme de **surface** ;
- Nappe au niveau du terrain naturel : γ' dans les **deux** termes ;
- Nappe à plus de B sous l'assise : pas d'influence.

> [!exemple] La semelle filante précédente avec nappe
> Nappe à l'assise : terme de surface 0,5 × 8 × 1,20 × 20,1 = 96,5 kPa → qu = 96,5 + 331,2 = 427,7 kPa → qadm = **142,6 kPa** (− 22 %).
> Nappe en surface : terme de profondeur 8 × 1 × 18,4 = 147,2 kPa → qu = 243,7 kPa → qadm = **81,2 kPa** (− 56 %).
> À Abidjan, en zone lagunaire, la nappe est souvent à moins de 2 m : l'ignorer peut diviser la sécurité par deux.

## Charges excentrées ou inclinées
Si la semelle reçoit un moment M en plus de N, la charge est excentrée de **e = M / N**. Méthode de Meyerhof : on remplace la largeur réelle B par une **largeur réduite B' = B − 2e**, centrée sur la résultante, et on calcule qu avec B' ; puis on vérifie **N / B' ≤ qadm**.
Une charge **inclinée** (poussée d'un mur, vent sur un portique) réduit aussi fortement la portance : on applique des coefficients d'inclinaison iγ, ic, iq inférieurs à 1.

> [!attention] Les causes fréquentes de sinistres
> - contrainte du sol supposée « 2 bars » sans étude de sol ;
> - semelles posées sur un remblai non compacté ou sur des déchets ;
> - nappe ignorée, ou saturation du sol par les eaux de toiture non évacuées ;
> - semelles voisines à des profondeurs différentes (la plus haute charge le sol de la plus basse).

> [!norme] Références
> DTU 13.12 (fondations superficielles), Eurocode 7 (NF EN 1997-1) et sa norme d'application NF P94-261. La valeur de calcul doit venir d'une **étude géotechnique** (mission G2).

> [!retenir]
> - qu = 0,5 sγ γ B Nγ + sc c Nc + γ D Nq ; qadm = qu / 3.
> - Facteurs Nγ, Nc, Nq croissant très vite avec φ.
> - Argile à court terme : qu = 5,14 sc cu + γ D.
> - Nappe : γ' ≈ 10 kN/m³ dans les termes immergés.
> - Charge excentrée : largeur réduite B' = B − 2e.`,
 sujet:{titre:"Capacité portante de semelles sur sable et sur argile, influence de la nappe", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Immeuble R+2 à Gagnoa. On vérifie une semelle carrée sur sable, l'effet d'une remontée de nappe, puis une semelle filante sur argile.

**Données — semelle carrée**
- B = **1,80 m** ; ancrage **D = 1,20 m** ; sable : **γ = 18 kN/m³**, **φ = 32°**, **c = 0** ; charge de service **N = 820 kN** ;
- φ = 32° : **Nγ = 27,7** ; **Nq = 23,2** ; semelle carrée : **sγ = 0,8** ;
- qu = 0,5 sγ γ1 B Nγ + sc c Nc + γ2 D Nq ; qadm = qu / 3 ;
- En saison des pluies, la nappe peut remonter jusqu'au niveau d'assise : γ1 = γ' = **10 kN/m³** sous la semelle.

**Données — semelle filante**
- Mur porteur de **95 kN/m** (service) ; argile saturée : **cu = 40 kPa**, γ = **19 kN/m³** ; D = **1,00 m** ; à court terme : qu = 5,14 sc cu + γ D.

### Partie A — Semelle carrée sur sable (8 points)
1. Calculer le terme de surface et le terme de profondeur. (4 pts)
2. Calculer qu, qadm et la charge admissible. Vérifier la semelle. (4 pts)

### Partie B — Influence de la nappe (5 points)
3. Recalculer qu, qadm et la charge admissible avec la nappe au niveau d'assise. (3 pts)
4. Conclure et proposer une solution. (2 pts)

### Partie C — Semelle filante sur argile (7 points)
5. Calculer qu et qadm à court terme. (2 pts)
6. Calculer la largeur minimale de la semelle filante. Pourquoi qu ne dépend-il pas de B ici ? (3 pts)
7. Pour un poteau sur semelle carrée dans cette argile (sc = 1,2), calculer qadm. (2 pts)`,
  corrige:`### Partie A — Sable (8 pts)
1. Surface : 0,5 × 0,8 × 18 × 1,80 × 27,7 = **359,0 kPa** ; profondeur : 18 × 1,20 × 23,2 = **501,1 kPa**. *(4 pts)*
2. qu = **860,1 kPa** ; qadm = **286,7 kPa** ; charge admissible = 286,7 × 1,80² = **929 kN ≥ 820 kN** ✔. *(4 pts)*

### Partie B — Nappe (5 pts)
3. Surface : 0,5 × 0,8 × 10 × 1,80 × 27,7 = 199,4 kPa → qu = **700,6 kPa** ; qadm = **233,5 kPa** ; charge admissible = **757 kN < 820 kN** ✘. *(3 pts)*
4. La remontée de la nappe réduit la portance de **19 %** : la semelle n'est plus vérifiée. Il faut l'agrandir (B = 1,95 à 2,00 m), ou l'approfondir si la nappe le permet, et drainer le site. *(2 pts)*

### Partie C — Argile (7 pts)
5. qu = 5,14 × 40 + 19 × 1,00 = **224,6 kPa** ; qadm = **74,9 kPa**. *(2 pts)*
6. B ≥ 95 / 74,9 = 1,27 → **B = 1,30 m**. Avec φu = 0, Nγ = 0 : le terme de surface disparaît, la portance par m² ne dépend plus de la largeur. *(3 pts)*
7. qu = 5,14 × 1,2 × 40 + 19 = **265,7 kPa** ; qadm = **88,6 kPa**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le coefficient de forme sγ = 0,8 pour une semelle carrée.
> - Garder γ = 18 sous la nappe au lieu de γ' ≈ 10.
> - Négliger le court terme dans une argile saturée : c'est souvent le cas le plus défavorable.`},
 exercices:[
  {t:"Semelle filante sur sol cohérent et frottant", d:1, e:`Semelle filante B = 1,00 m, D = 0,80 m. Sol : γ = 18 kN/m³, c = 10 kPa, φ = 25°. Calculer qu et qadm, puis la charge admissible par mètre.`, c:`Pour φ = 25° : Nγ = 9,0 ; Nc = 20,7 ; Nq = 10,7.
- Surface : 0,5 × 18 × 1,00 × 9,0 = **81,0 kPa**
- Cohésion : 10 × 20,7 = **207,0 kPa**
- Profondeur : 18 × 0,80 × 10,7 = **154,1 kPa**
qu = 81,0 + 207,0 + 154,1 = **442,1 kPa** ; qadm = 442,1 / 3 = **147,4 kPa**.
Charge admissible : 147,4 × 1,00 = **147 kN/m**.`},
  {t:"Semelle carrée sur argile molle (court terme)", d:2, e:`Semelle carrée de 2,00 m de côté, encastrée à 1,50 m dans une argile cu = 30 kPa, γ = 18,5 kN/m³. Calculer la contrainte admissible à court terme et la charge de service maximale que peut recevoir la semelle.`, c:`qu = sc × 5,14 × cu + γ D = 1,2 × 5,14 × 30 + 18,5 × 1,50 = 185,0 + 27,8 = **212,8 kPa**
qadm = 212,8 / 3 = **70,9 kPa**
Charge maximale : 70,9 × (2,00 × 2,00) = **284 kN**.
C'est faible : pour un poteau de 600 kN, il faudrait une semelle de plus de 3 m de côté ; on étudierait alors un radier ou des pieux.`},
  {t:"Dimensionner une semelle carrée", d:2, e:`Un poteau transmet N = 600 kN (ELS). Sable : γ = 18 kN/m³, φ = 32°, c = 0 ; assise à D = 1,00 m ; pas de nappe. Trouver le côté B de la semelle carrée (au décimètre près).`, c:`Pour φ = 32° : Nγ = 27,7 ; Nq = 23,2 ; carrée : sγ = 0,8.
qu(B) = 0,8 × 0,5 × 18 × B × 27,7 + 18 × 1 × 23,2 = 199,4 B + 417,6 → qadm = 66,5 B + 139,2.
| B (m) | qadm (kPa) | q = 600 / B² (kPa) | Vérifié ? |
|---|---|---|---|
| 1,40 | 232,3 | 306,1 | non |
| 1,50 | 238,9 | 266,7 | non |
| 1,60 | 245,6 | 234,4 | **oui** |
On retient **B = 1,60 m** (q = 234 kPa ≤ 246 kPa). La capacité portante augmente avec B : il faut donc itérer.`},
  {t:"Effet d'une remontée de nappe", d:2, e:`Semelle filante B = 2,00 m, D = 1,50 m, sable φ = 32°, γ = 19 kN/m³, γ' = 10 kN/m³. Calculer qadm : a) sol sec ; b) nappe à l'assise ; c) nappe au terrain naturel (saison des pluies). Commenter.`, c:`Nγ = 27,7 ; Nq = 23,2.
a) Sec : 0,5 × 19 × 2 × 27,7 = 526,3 ; 19 × 1,5 × 23,2 = 661,2 → qu = 1 187,5 kPa → **qadm = 395,8 kPa**.
b) Nappe à l'assise : 0,5 × 10 × 2 × 27,7 = 277,0 → qu = 277,0 + 661,2 = 938,2 kPa → **qadm = 312,7 kPa** (− 21 %).
c) Nappe en surface : 10 × 1,5 × 23,2 = 348,0 → qu = 277,0 + 348,0 = 625,0 kPa → **qadm = 208,3 kPa** (− 47 %).
La portance est presque divisée par deux : on dimensionne avec le **niveau de nappe le plus haut** (hautes eaux).`},
  {t:"Semelle filante excentrée", d:3, e:`Mur de soutènement léger : sa semelle filante reçoit N = 300 kN/m et M = 30 kN·m/m. Sable γ = 18 kN/m³, φ = 30°, D = 1,00 m. a) B = 1,50 m convient-il ? b) Trouver la largeur minimale (au décimètre).`, c:`e = M / N = 30 / 300 = **0,10 m**.
a) B' = 1,50 − 2 × 0,10 = 1,30 m ; qu = 0,5 × 18 × 1,30 × 20,1 + 18 × 1 × 18,4 = 235,2 + 331,2 = 566,4 kPa → qadm = 188,8 kPa.
Contrainte : N / B' = 300 / 1,30 = **230,8 kPa > 188,8 kPa** → **non vérifié**.
b) qadm(B') = 60,3 B' + 110,4 ; on cherche 300 / B' ≤ qadm :
| B (m) | B' (m) | qadm (kPa) | N / B' (kPa) |
|---|---|---|---|
| 1,60 | 1,40 | 194,8 | 214,3 ✘ |
| 1,70 | 1,50 | 200,9 | 200,0 ✔ (juste) |
| 1,80 | 1,60 | 206,9 | 187,5 ✔ |
B = 1,70 m est tout juste suffisant ; on retient **B = 1,80 m** pour garder une marge. Un moment de seulement 30 kN·m/m impose 30 cm de semelle en plus.`}
 ],
 quiz:[
  {q:"Les trois termes de qu correspondent à :", o:["La surface, la cohésion et la profondeur","Le béton, l'acier et le sol","Le vent, la neige et le séisme","La largeur, la longueur et la hauteur"], r:0, e:"0,5 γ B Nγ + c Nc + γ D Nq."},
  {q:"Quand φ passe de 30° à 35°, Nγ :", o:["Diminue","Reste constant","Fait plus que doubler","Devient nul"], r:2, e:"20,1 → 45,2."},
  {q:"Pour une argile à court terme (φu = 0), Nc vaut :", o:["1","5,14","20,1","0"], r:1, e:"Valeur de Prandtl."},
  {q:"Une nappe qui monte jusqu'à la surface :", o:["Augmente la portance","Réduit fortement la portance (γ' ≈ 10 kN/m³)","N'a aucun effet","Supprime le terme de cohésion"], r:1, e:"Le sol est déjaugé."},
  {q:"Pour une semelle excentrée de e, on calcule avec :", o:["B' = B + e","B' = B − 2e","B' = 2B","B' = B / e"], r:1, e:"Largeur réduite de Meyerhof."}
 ]},
{id:"geo-5", niv:3, titre:"Tassements et consolidation des sols", duree:70, contenu:`## Pourquoi un bâtiment tasse-t-il ?
Sous la charge d'un ouvrage, le sol se **comprime** : les grains se rapprochent, l'air et l'eau sont chassés des vides. Le bâtiment s'enfonce : c'est le **tassement**. Un tassement **uniforme** de quelques centimètres est sans gravité ; ce sont les **tassements différentiels** (une partie descend plus que l'autre) qui fissurent les murs, bloquent portes et fenêtres et cassent les canalisations.

## Les trois composantes du tassement
- **Tassement immédiat** (élastique) : instantané, à la mise en charge ; prépondérant dans les sables et les sols non saturés.
- **Tassement de consolidation primaire** : dans les sols fins saturés, l'eau doit s'évacuer pour que le sol se comprime ; il dure des **mois ou des années**. C'est le plus important dans les argiles et les vases.
- **Tassement secondaire** (fluage) : lente compression du squelette après la consolidation, importante dans les sols organiques et les tourbes.
$$ s = si + sc + ss

## Le tassement immédiat
Pour une semelle sur un sol assimilé à un milieu élastique (module E, coefficient de Poisson ν) :
$$ si = q × B × (1 − ν²) × Cf / E
Cf : coefficient de forme et de rigidité (semelle carrée rigide ≈ 0,88 ; filante ≈ 2,0 ; souple au centre : carrée 1,12).
> [!exemple] Semelle carrée sur sable
> B = 2,00 m ; q = 150 kPa ; E = 20 MPa ; ν = 0,3 ; Cf = 0,88.
> si = 150 × 2,00 × (1 − 0,09) × 0,88 / 20 000 = **0,012 m = 12 mm**.

## L'essai œdométrique
On place une éprouvette de sol intact (prélevée au carottier) dans un anneau rigide : elle ne peut se déformer que verticalement, comme une couche de sol sous une large charge. On applique des paliers de charge (souvent doublés : 25, 50, 100, 200, 400, 800 kPa) en mesurant la diminution de hauteur, d'où l'**indice des vides e**. On trace **e en fonction de log σ'** : la courbe œdométrique.

!fig:tassement|Courbe œdométrique et consolidation
On en déduit :
- **σ'p** : la **contrainte de préconsolidation**, la plus forte contrainte effective que le sol a déjà supportée dans son histoire ;
- **Cs** (indice de gonflement) : pente de la partie « recompression », pour σ' < σ'p (faible : 0,02 à 0,1) ;
- **Cc** (indice de compression) : pente de la partie « vierge », pour σ' > σ'p (argile : 0,2 à 0,5 ; vase organique : jusqu'à 1 et plus) ;
- **cv** : le **coefficient de consolidation** (vitesse du tassement).
Un sol est **normalement consolidé** (NC) si σ'0 ≈ σ'p, **surconsolidé** (SC) si σ'0 < σ'p (il a connu une charge plus forte : érosion, dessiccation). Les argiles superficielles séchées au soleil sont souvent surconsolidées ; les vases lagunaires récentes sont normalement consolidées et très compressibles.

## Le calcul du tassement de consolidation
Pour une couche d'épaisseur H, d'indice des vides initial e0, de contrainte effective initiale σ'0 (au milieu de la couche), chargée de Δσ (diffusion 2/1 ou Boussinesq), σ'f = σ'0 + Δσ :
- Sol **normalement consolidé** :
$$ sc = H / (1 + e0) × Cc × log(σ'f / σ'0)
- Sol **surconsolidé** avec σ'f > σ'p :
$$ sc = H / (1 + e0) × [Cs × log(σ'p / σ'0) + Cc × log(σ'f / σ'p)]
- Sol surconsolidé avec σ'f ≤ σ'p : seul le terme en Cs intervient (tassement faible).
Méthode simplifiée avec le **module œdométrique** Eoed (kPa) : **sc = Δσ × H / Eoed**.
Pour une couche épaisse, on la découpe en **sous-couches** de 1 à 2 m et on additionne les tassements.

> [!exemple] Couche d'argile normalement consolidée
> Argile de 4 m d'épaisseur : e0 = 1,20 ; Cc = 0,45 ; au milieu σ'0 = 60 kPa ; la construction apporte Δσ = 40 kPa.
> sc = 4 / 2,20 × 0,45 × log(100 / 60) = 1,818 × 0,45 × 0,2218 = **0,182 m ≈ 18 cm**.

> [!exemple] La même argile surconsolidée
> σ'p = 90 kPa, Cs = 0,05, Δσ = 60 kPa (σ'f = 120 kPa) :
> sc = 1,818 × [0,05 × log(90/60) + 0,45 × log(120/90)] = 1,818 × (0,0088 + 0,0562) = **0,118 m ≈ 12 cm**.
> Tant que la charge reste sous σ'p, le sol tasse peu : la surconsolidation est un atout.

## La vitesse de consolidation
L'eau doit parcourir la **longueur de drainage Hdr** pour sortir de la couche :
- couche drainée **des deux côtés** (sable au-dessus et au-dessous) : Hdr = H / 2 ;
- couche drainée **d'un seul côté** (argile sur un substratum imperméable) : Hdr = H.
$$ t = Tv × Hdr² / cv
Tv : facteur temps, lié au **degré de consolidation U** :
| U (%) | 20 | 50 | 70 | 90 |
|---|---|---|---|---|
| Tv | 0,031 | 0,197 | 0,403 | 0,848 |
> [!exemple] Durée du tassement
> Argile de 4 m drainée des deux côtés : Hdr = 2 m ; cv = 10⁻⁷ m²/s = 3,15 m²/an.
> t50 = 0,197 × 2² / 3,15 = **0,25 an (3 mois)** ; t90 = 0,848 × 4 / 3,15 = **1,08 an**.
> Drainée d'un seul côté (Hdr = 4 m) : les durées sont **multipliées par 4** (t90 ≈ 4,3 ans).
Le temps varie comme le **carré** de la longueur de drainage : c'est le principe des **drains verticaux** (chapitre amélioration des sols).

## Tassements admissibles
| Type d'ouvrage | Tassement absolu courant | Distorsion angulaire δ/L |
|---|---|---|
| Bâtiment en maçonnerie | 2,5 à 5 cm | 1/500 à 1/1 000 |
| Ossature béton armé | 5 cm | 1/500 |
| Hangar métallique | 5 à 8 cm | 1/300 |
| Réservoir souple | 10 cm et plus | 1/300 |
La **distorsion angulaire** est le tassement différentiel entre deux appuis divisé par leur distance.

> [!astuce] Réduire les tassements différentiels
> Homogénéiser le sol d'assise (purges, substitution), rigidifier la structure (longrines, chaînages, radier), séparer par des **joints** les blocs de hauteurs ou de charges très différentes, précharger les sols compressibles avant de construire.

> [!retenir]
> - s = immédiat + consolidation + secondaire.
> - NC : sc = H/(1+e0) × Cc log(σ'f/σ'0) ; SC : terme Cs jusqu'à σ'p, puis Cc.
> - t = Tv Hdr² / cv ; U 50 % : Tv = 0,197 ; U 90 % : Tv = 0,848.
> - Ce sont les tassements **différentiels** qui fissurent.`,
 sujet:{titre:"Tassements d'un bâtiment : immédiat, consolidation, durée et tassement différentiel", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un bâtiment de bureaux à Jacqueville repose sur un sable de 6 m, puis une couche d'argile de **5 m** drainée en haut et en bas par des sables.

**Données**
- Semelle carrée isolée : **B = 2,00 m**, **q = 200 kPa** ; sable : **E = 25 MPa**, **ν = 0,3**, **Cf = 0,88** ; si = q B (1 − ν²) Cf / E ;
- Argile : **e0 = 1,05** ; **Cc = 0,38** ; **Cs = 0,06** ; au milieu de la couche **σ'0 = 72 kPa** ; supplément dû au bâtiment **Δσ = 45 kPa** ;
- Coefficient de consolidation **cv = 2,5 m²/an** ; Tv(50 %) = **0,197** ; Tv(90 %) = **0,848** ;
- Tassements calculés sous deux poteaux voisins distants de **6,00 m** : **4,0 cm** et **2,2 cm** ; distorsion admissible pour une ossature béton armé : **1/500**.

### Partie A — Tassement immédiat (3 points)
1. Calculer le tassement immédiat de la semelle sur le sable. (3 pts)

### Partie B — Consolidation (8 points)
2. L'argile est normalement consolidée : calculer son tassement de consolidation. (3 pts)
3. Les essais œdométriques montrent en fait une pression de préconsolidation **σ'p = 100 kPa**. Recalculer le tassement. Conclure. (4 pts)
4. Expliquer pourquoi la consolidation d'une argile prend du temps. (1 pt)

### Partie C — Durée (5 points)
5. Calculer la longueur de drainage, puis t50 et t90. (3 pts)
6. Que deviendraient ces durées si l'argile reposait sur un rocher imperméable ? (2 pts)

### Partie D — Tassements différentiels (4 points)
7. Calculer la distorsion angulaire entre les deux poteaux et conclure. (2 pts)
8. Citer deux dispositions pour limiter les désordres. (2 pts)`,
  corrige:`### Partie A — Immédiat (3 pts)
1. si = 200 × 2,00 × (1 − 0,09) × 0,88 / 25 000 = **0,0128 m ≈ 13 mm**. *(3 pts)*

### Partie B — Consolidation (8 pts)
2. $$ sc = H / (1 + e0) × Cc × log(σ'f / σ'0) = 5 / 2,05 × 0,38 × log(117 / 72) = 2,439 × 0,38 × 0,211 = 0,195 m
   → **≈ 20 cm**. *(3 pts)*
3. σ'f = 117 > σ'p = 100 : *(4 pts)*
   sc = 2,439 × [0,06 × log(100 / 72) + 0,38 × log(117 / 100)] = 2,439 × (0,0086 + 0,0259) = **0,084 m ≈ 8 cm**.
   La surconsolidation divise le tassement par plus de deux : d'où l'importance des essais œdométriques sur échantillons intacts.
4. Le sol ne se tasse que si l'eau sort des vides ; dans une argile très peu perméable, elle met des mois ou des années à s'évacuer. *(1 pt)*

### Partie C — Durée (5 pts)
5. Drainée des deux côtés : **Hdr = 2,5 m** ; t50 = 0,197 × 2,5² / 2,5 = **0,49 an (≈ 6 mois)** ; t90 = 0,848 × 6,25 / 2,5 = **2,1 ans**. *(3 pts)*
6. Drainage d'un seul côté : Hdr = 5 m → durées **× 4** : t90 ≈ **8,5 ans**. *(2 pts)*

### Partie D — Différentiels (4 pts)
7. δ / L = (4,0 − 2,2) / 600 = **1/333** > 1/500 → **risque de fissuration**. *(2 pts)*
8. Homogénéiser les contraintes sous les semelles (dimensionner à tassement égal), rigidifier par des **longrines** ou passer à un **radier**, prévoir des **joints** entre parties d'ouvrages de charges différentes, ou traiter l'argile (préchargement). *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser Cc sur toute la plage de charge pour une argile surconsolidée.
> - Prendre Hdr = H pour une couche drainée des deux côtés.
> - Juger un tassement sur sa valeur absolue sans regarder les différentiels.`},
 exercices:[
  {t:"Tassement avec le module œdométrique", d:1, e:`Une couche de limon argileux de 3 m d'épaisseur (Eoed = 5 MPa) reçoit un supplément de contrainte moyen Δσ = 50 kPa. Calculer le tassement.`, c:`sc = Δσ × H / Eoed = 50 × 3 / 5 000 = **0,030 m = 3 cm**.`},
  {t:"Remblai sur argile normalement consolidée", d:2, e:`Un remblai de 2 m (γ = 20 kN/m³) est construit sur une argile de 6 m d'épaisseur, normalement consolidée, saturée : γsat = 17 kN/m³, e0 = 1,50, Cc = 0,60. Nappe en surface. Calculer le tassement de consolidation (une seule couche, contrainte au milieu).`, c:`Au milieu (z = 3 m) : σ'0 = (17 − 10) × 3 = **21 kPa**.
Remblai très large : Δσ = 20 × 2 = **40 kPa** (pas de diffusion) → σ'f = 61 kPa.
sc = 6 / (1 + 1,50) × 0,60 × log(61 / 21) = 2,4 × 0,60 × 0,463 = **0,667 m**.
Près de 67 cm ! Les argiles molles lagunaires tassent énormément : il faut précharger avant de construire.`},
  {t:"Argile surconsolidée", d:2, e:`Couche de 5 m : e0 = 0,90 ; Cs = 0,04 ; Cc = 0,30 ; σ'0 = 80 kPa ; σ'p = 150 kPa. Calculer le tassement pour : a) Δσ = 50 kPa ; b) Δσ = 120 kPa.`, c:`H / (1 + e0) = 5 / 1,90 = 2,632 m.
a) σ'f = 130 kPa ≤ σ'p : sc = 2,632 × 0,04 × log(130/80) = 2,632 × 0,04 × 0,2109 = **0,022 m (2,2 cm)**.
b) σ'f = 200 kPa > σ'p : sc = 2,632 × [0,04 × log(150/80) + 0,30 × log(200/150)] = 2,632 × (0,0109 + 0,0375) = **0,127 m (12,7 cm)**.
Dépasser σ'p multiplie le tassement par près de 6 alors que la charge n'est que 2,4 fois plus forte.`},
  {t:"Temps de consolidation", d:2, e:`Une couche d'argile de 6 m repose sur un rocher imperméable et est surmontée d'un sable. cv = 2 m²/an. a) Combien de temps faut-il pour atteindre 50 % puis 90 % du tassement ? b) Même question si une couche de sable drainante existait aussi sous l'argile.`, c:`a) Drainage d'un seul côté : Hdr = 6 m.
t50 = 0,197 × 36 / 2 = **3,5 ans** ; t90 = 0,848 × 36 / 2 = **15,3 ans**.
b) Drainage des deux côtés : Hdr = 3 m.
t50 = 0,197 × 9 / 2 = **0,89 an** ; t90 = 0,848 × 9 / 2 = **3,8 ans**.
Diviser la longueur de drainage par 2 divise le temps par 4.`},
  {t:"Distorsion angulaire", d:3, e:`Deux poteaux d'une ossature béton armé distants de 6 m tassent respectivement de 18 mm et 33 mm. a) Calculer la distorsion angulaire. b) Est-elle admissible (limite 1/500) ? c) Que proposer ?`, c:`a) Tassement différentiel : 33 − 18 = 15 mm ; δ / L = 0,015 / 6 = **1/400**.
b) 1/400 > 1/500 → **non admissible** : risque de fissuration des remplissages.
c) Agrandir la semelle la plus chargée pour égaliser les contraintes, relier les semelles par des **longrines** rigides, ou passer à un radier ; si le sol est très hétérogène, purger et substituer la zone compressible.`}
 ],
 quiz:[
  {q:"Le tassement de consolidation est surtout important dans :", o:["Les graviers","Les argiles et vases saturées","Le rocher","Les sables secs"], r:1, e:"L'eau doit s'évacuer lentement."},
  {q:"Un sol surconsolidé a :", o:["σ'0 > σ'p","σ'0 < σ'p","Cc = 0","e0 = 0"], r:1, e:"Il a déjà supporté plus que la charge actuelle."},
  {q:"Si la longueur de drainage est divisée par 2, le temps de consolidation est :", o:["Divisé par 2","Divisé par 4","Multiplié par 2","Inchangé"], r:1, e:"t est proportionnel à Hdr²."},
  {q:"Pour U = 90 %, le facteur temps Tv vaut :", o:["0,197","0,848","1,5","0,031"], r:1, e:"Valeur à retenir."},
  {q:"Les fissures des murs sont surtout dues :", o:["Au tassement uniforme","Aux tassements différentiels","Au poids du toit seul","À la couleur des enduits"], r:1, e:"Distorsion entre appuis."}
 ]},
{id:"geo-15", niv:3, titre:"Les essais in situ : pénétromètres, SPT, pressiomètre et essai de plaque", duree:65, contenu:`## Pourquoi tester le sol en place ?
Les essais de laboratoire portent sur de petits échantillons, parfois remaniés pendant le prélèvement. Les **essais in situ** testent le sol **dans son état naturel**, sur toute la hauteur du sondage, et donnent un **profil continu** de résistance. Ils sont rapides et économiques ; ils complètent toujours les sondages de reconnaissance (chapitre « Reconnaître les sols »).

## Le pénétromètre dynamique (PDL, PDB)
On compte les coups d'un mouton pour enfoncer une pointe (rappel : qd = (M g H / (A e)) × M / (M + P)).
- **PDL** (léger) : M = 10 à 30 kg ; profondeur ≤ 6 à 8 m ; maisons et petits bâtiments.
- **PDB** (lourd) : M = 63,5 kg, H = 0,75 m, pointe 20 cm² ; profondeurs plus grandes.
Atouts : simple, rapide, peu coûteux ; limites : pas d'échantillon, résultats influencés par le frottement des tiges, à interpréter avec prudence.

## Le pénétromètre statique (CPT)
Une pointe conique de 10 cm² est **enfoncée à vitesse constante** (2 cm/s) par un vérin. On mesure en continu :
- **qc** : la **résistance de pointe** (MPa) ;
- **fs** : le **frottement latéral unitaire** sur un manchon (kPa) ;
- **Rf = fs / qc** : le **rapport de frottement** (%), qui renseigne sur la nature du sol.
| Rf (%) | qc typique (MPa) | Sol probable |
|---|---|---|
| < 1 | 5 à 30 | Sable, grave |
| 1 à 2 | 2 à 8 | Sable limoneux, limon |
| 2 à 4 | 1 à 3 | Limon argileux, argile |
| > 4 | < 1 | Argile molle, vase, tourbe |
Dans les argiles, on estime la cohésion non drainée :
$$ cu ≈ (qc − σv0) / Nk      avec Nk ≈ 15 (de 10 à 20)
> [!exemple] Argile lagunaire
> À 5 m de profondeur : qc = 0,6 MPa, fs = 30 kPa, σv0 = 85 kPa.
> Rf = 30 / 600 = **5 %** → argile molle ; cu ≈ (600 − 85) / 15 = **34 kPa**.

## L'essai SPT (Standard Penetration Test)
Au fond d'un forage, on bat un **carottier fendu** avec un mouton de 63,5 kg tombant de 76 cm. On compte **N**, le nombre de coups pour enfoncer le carottier de 30 cm (après 15 cm d'amorçage). Avantage : on récupère un échantillon. Très utilisé dans les sables, dans les études internationales.
| N (coups / 30 cm) | Compacité du sable | φ' estimé |
|---|---|---|
| < 10 | Lâche | 28 – 30° |
| 10 – 30 | Moyennement dense | 30 – 36° |
| 30 – 50 | Dense | 36 – 41° |
| > 50 | Très dense | > 41° |
Corrélation de Peck : **φ' ≈ 27,1 + 0,3 N** (en degrés). Ex. : N = 24 → φ' ≈ 34°.

## L'essai pressiométrique Ménard
C'est l'essai de référence en France et dans les pays francophones, dont la Côte d'Ivoire. Dans un forage soigné, on place une **sonde cylindrique gonflable** que l'on dilate par paliers de pression. On mesure le volume injecté en fonction de la pression et on obtient :
- **EM** : le **module pressiométrique** (MPa), pour les tassements ;
- **pf** : la pression de fluage ;
- **pl** : la **pression limite** (MPa), pour la capacité portante ; on utilise la pression limite **nette** pl* = pl − p0 (p0 : contrainte horizontale au repos).
| Sol | pl* (MPa) | EM (MPa) |
|---|---|---|
| Vase, argile molle | < 0,4 | < 3 |
| Argile ferme, limon | 0,4 – 1,2 | 3 – 12 |
| Sable moyen, grave | 1 – 2 | 8 – 20 |
| Argile très raide, marne | 1,5 – 4 | 15 – 50 |
| Rocher altéré | > 2,5 | > 50 |

### Capacité portante pressiométrique
On calcule la **pression limite nette équivalente ple*** : moyenne **géométrique** des pl* mesurés sur une hauteur 1,5 B sous la base :
$$ ple* = (pl1* × pl2* × … × pln*)^(1/n)
La contrainte de rupture nette vaut **kp × ple***, kp étant le **facteur de portance pressiométrique** (≈ 0,8 dans les argiles et limons, ≈ 1 à 1,2 dans les sables et graves, pour une semelle peu encastrée). Approche classique aux ELS :
$$ qELS = q0 + kp × ple* / 3      (q0 = γ D : contrainte des terres au niveau de l'assise)
> [!exemple] Semelle carrée de 1,50 m
> D = 1,00 m (q0 = 18 kPa), kp = 1,0. Sous la base : pl* = 0,6 ; 0,9 ; 1,2 MPa.
> ple* = (0,6 × 0,9 × 1,2)^(1/3) = **0,865 MPa** ; qELS = 18 + 865 / 3 = **306 kPa** ; charge admissible = 306 × 2,25 = **690 kN**.

### Tassement pressiométrique (formule de Ménard)
$$ s = (2 / (9 EM)) × q × B0 × (λd × B / B0)^α  +  (α / (9 EM)) × q × λc × B
- q : contrainte nette appliquée ; B0 = 0,60 m (largeur de référence) ;
- λc, λd : coefficients de forme (carrée : λc = 1,10, λd = 1,12 ; filante : λc = 1,50, λd = 2,65) ;
- α : coefficient rhéologique (argile NC : 2/3 ; limon : 1/2 ; sable : 1/3 ; grave : 1/4).
> [!exemple] Semelle carrée B = 2 m sur limon
> q = 200 kPa, EM = 8 MPa, α = 1/2 :
> terme déviatorique : 2 / 72 000 × 200 × 0,60 × (1,12 × 2 / 0,6)^0,5 = **6,4 mm** ;
> terme sphérique : 0,5 / 72 000 × 200 × 1,10 × 2 = **3,1 mm** ; s ≈ **9,5 mm**.

## L'essai de plaque
On charge une **plaque rigide** de 60 cm de diamètre posée sur la plate-forme et on mesure son enfoncement w. Module :
$$ EV = 1,5 × q × r / w      (q : pression sous la plaque, r = 0,30 m : rayon)
On fait deux cycles : **EV1** (premier chargement) puis **EV2** (rechargement). Le rapport **k = EV2 / EV1** traduit la qualité du compactage (on exige souvent k ≤ 2). EV2 sert à classer les plates-formes : PF1 (20 à 50 MPa), PF2 (≥ 50 MPa), PF2+ (≥ 80 MPa), PF3 (≥ 120 MPa). L'essai à la **dynaplaque** donne une estimation plus rapide.

> [!astuce] Quel essai choisir ?
> - Maison, petit bâtiment : puits + PDL + identification.
> - Immeuble, ouvrage important : sondages carottés + **pressiomètre** (+ CPT dans les sols mous).
> - Plate-forme, chaussée : essais de plaque ou dynaplaque, densité en place.
> - Sables profonds, études internationales : SPT.

> [!retenir]
> - CPT : qc, fs, Rf = fs/qc ; argile : cu ≈ (qc − σv0)/15.
> - SPT : N coups / 30 cm ; φ' ≈ 27,1 + 0,3 N.
> - Pressiomètre : EM (tassement), pl* (portance) ; qELS = q0 + kp ple*/3.
> - Plaque : EV = 1,5 q r / w ; k = EV2/EV1 ≤ 2.`,
 sujet:{titre:"Exploiter des essais in situ : pénétromètre statique, pressiomètre et essai de plaque", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Le rapport de sol d'un centre commercial à Bingerville contient trois types d'essais in situ. Vous les exploitez pour le dimensionnement.

**Pénétromètre statique (CPT)** à 6 m : **qc = 0,8 MPa** ; frottement latéral **fs = 36 kPa** ; σv0 = **105 kPa** ; cu ≈ (qc − σv0) / Nk avec **Nk = 15**.

**Pressiomètre Ménard** — semelle carrée **B = 2,00 m**, ancrée à **D = 1,50 m** (γ = 18 kN/m³), limon argileux (**kp = 0,8**) ; pressions limites nettes sous la base : **0,55 – 0,70 – 0,95 MPa** (à 1, 2 et 3 m sous la base) ;
ple* = moyenne géométrique ; qELS = q0 + kp ple* / 3.

**Essai de plaque** sur la couche de forme : plaque de rayon **r = 0,30 m**, pression **q = 0,25 MPa** ; enfoncements : **2,10 mm** au premier chargement, **0,95 mm** au second ; EV = 1,5 q r / w ; exigences : **EV2 ≥ 50 MPa** et **EV2/EV1 ≤ 2,2**.

### Partie A — CPT (5 points)
1. Décrire l'essai CPT et ce qu'il mesure. (2 pts)
2. Calculer le rapport de frottement Rf = fs / qc et estimer cu. Quel sol ? (3 pts)

### Partie B — Pressiomètre (9 points)
3. Décrire l'essai pressiométrique et les deux paramètres obtenus. (2 pts)
4. Calculer ple*. Pourquoi une moyenne géométrique ? (3 pts)
5. Calculer q0, qELS et la charge admissible de la semelle. (4 pts)

### Partie C — Plaque (6 points)
6. Calculer EV1, EV2 et leur rapport. (4 pts)
7. La couche de forme est-elle réceptionnée ? Que signifie un rapport EV2/EV1 élevé ? (2 pts)`,
  corrige:`### Partie A — CPT (5 pts)
1. On enfonce à vitesse constante (2 cm/s) une pointe conique et on mesure la **résistance de pointe qc** et le **frottement latéral fs** sur un manchon : profil continu de résistance. *(2 pts)*
2. Rf = 36 / 800 = **4,5 %** → sol **argileux** (Rf élevé) ; cu ≈ (800 − 105) / 15 = **46 kPa** (argile moyennement consistante). *(3 pts)*

### Partie B — Pressiomètre (9 pts)
3. Une sonde gonflable dilate la paroi d'un forage par paliers de pression : on obtient le **module pressiométrique EM** (pour les tassements) et la **pression limite pl** (pour la portance). *(2 pts)*
4. $$ ple* = (0,55 × 0,70 × 0,95)^(1/3) = 0,715 MPa
   La moyenne géométrique atténue l'influence d'une valeur forte isolée : elle est prudente. *(3 pts)*
5. q0 = 18 × 1,50 = **27 kPa** ; qELS = 27 + 0,8 × 715 / 3 = **218 kPa** ; charge admissible = 218 × 4,00 = **871 kN**. *(4 pts)*

### Partie C — Plaque (6 pts)
6. EV1 = 1,5 × 0,25 × 0,30 / 0,0021 = **53,6 MPa** ; EV2 = 1,5 × 0,25 × 0,30 / 0,000 95 = **118,4 MPa** ; EV2 / EV1 = **2,21**. *(4 pts)*
7. EV2 = 118 ≥ 50 ✔ mais rapport 2,21 > 2,2 : **limite** → couche **insuffisamment compactée** (le premier chargement l'a encore densifiée). On compacte à nouveau et on refait l'essai. *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser la moyenne arithmétique des pl*.
> - Oublier q0 (poids des terres) dans qELS.
> - Réceptionner une plate-forme sur le seul EV2.`},
 exercices:[
  {t:"Interpréter un sondage au pénétromètre statique", d:1, e:`Un CPT donne : à 2 m, qc = 0,5 MPa et fs = 25 kPa ; à 6 m, qc = 3 MPa et fs = 45 kPa ; à 10 m, qc = 12 MPa et fs = 80 kPa. Calculer Rf et identifier les sols. Où fonder ?`, c:`| Profondeur | Rf = fs/qc | Sol probable |
|---|---|---|
| 2 m | 25 / 500 = **5 %** | Argile molle, vase |
| 6 m | 45 / 3 000 = **1,5 %** | Sable limoneux, limon |
| 10 m | 80 / 12 000 = **0,67 %** | Sable dense |
La couche superficielle molle est à proscrire ; pour un ouvrage lourd, on ancre des **pieux** dans le sable dense vers 10 m.`},
  {t:"Cohésion non drainée à partir du CPT", d:2, e:`Dans une argile (γ = 17 kN/m³, pas de nappe à considérer pour le calcul de σv0), on mesure qc = 0,9 MPa à 6 m. Estimer cu (Nk = 15) et la consistance.`, c:`σv0 = 17 × 6 = **102 kPa**.
cu ≈ (900 − 102) / 15 = **53 kPa** → argile **raide** (50 à 100 kPa), mais en limite basse.`},
  {t:"Portance pressiométrique d'une semelle", d:2, e:`Poteau : N = 700 kN (ELS). Semelle carrée de 1,80 m à D = 1,20 m (γ = 18,5 kN/m³). Sous la base : pl* = 0,45 ; 0,70 ; 1,10 MPa. kp = 0,9. La semelle convient-elle ?`, c:`q0 = 18,5 × 1,20 = **22,2 kPa**.
ple* = (0,45 × 0,70 × 1,10)^(1/3) = (0,3465)^(1/3) = **0,702 MPa**.
qELS = 22,2 + 0,9 × 702 / 3 = 22,2 + 210,7 = **232,9 kPa**.
Contrainte appliquée : 700 / (1,80 × 1,80) = **216,0 kPa ≤ 232,9 kPa** → **vérifié**.`},
  {t:"Tassement d'une semelle (méthode de Ménard)", d:3, e:`Semelle carrée B = 3,00 m sur argile normalement consolidée (α = 2/3), EM = 5 MPa, contrainte nette q = 150 kPa. Calculer le tassement.`, c:`9 EM = 45 000 kPa.
- Déviatorique : 2 / 45 000 × 150 × 0,60 × (1,12 × 3 / 0,6)^(2/3) = 0,004 × (5,6)^(2/3) = 0,004 × 3,153 = **12,6 mm**
- Sphérique : (2/3) / 45 000 × 150 × 1,10 × 3 = **7,3 mm**
s ≈ 12,6 + 7,3 = **19,9 mm ≈ 2 cm**, acceptable pour une ossature béton armé (< 5 cm), sous réserve des tassements différentiels.`},
  {t:"Réception d'une plate-forme à la plaque", d:2, e:`Essai de plaque (r = 0,30 m, q = 0,25 MPa) : premier cycle w1 = 3,0 mm, second cycle w2 = 1,2 mm. Calculer EV1, EV2 et k. La plate-forme est-elle acceptable (critère k ≤ 2) ?`, c:`EV1 = 1,5 × 0,25 × 300 / 3,0 = **37,5 MPa** ; EV2 = 1,5 × 0,25 × 300 / 1,2 = **93,8 MPa**.
k = 93,8 / 37,5 = **2,5 > 2** → compactage **insuffisant** : la couche se serre encore beaucoup au premier chargement. On recompacte (humidifier si trop sèche) puis on refait l'essai, même si EV2 dépasse 80 MPa.`}
 ],
 quiz:[
  {q:"Le rapport de frottement Rf d'une argile molle est généralement :", o:["< 1 %","> 4 %","Exactement 2 %","Nul"], r:1, e:"Fort frottement, faible pointe."},
  {q:"Dans l'essai SPT, N est le nombre de coups pour enfoncer le carottier de :", o:["10 cm","30 cm","1 m","5 cm"], r:1, e:"Après 15 cm d'amorçage."},
  {q:"Le module pressiométrique EM sert surtout à calculer :", o:["La teneur en eau","Les tassements","La granulométrie","Le prix"], r:1, e:"pl* sert à la portance."},
  {q:"ple* est la moyenne ___ des pl* sous la fondation :", o:["Arithmétique","Géométrique","Maximale","Minimale"], r:1, e:"Sur 1,5 B sous la base."},
  {q:"Un rapport EV2/EV1 élevé (> 2) indique :", o:["Un excellent compactage","Un compactage insuffisant","Un sol rocheux","Une nappe profonde"], r:1, e:"Le sol se tasse encore au premier cycle."}
 ]},
{id:"geo-8", niv:3, titre:"Fondations profondes : pieux et micropieux", duree:70, contenu:`## Quand faut-il des fondations profondes ?
Quand le bon sol est trop profond pour des semelles ou un radier : vases et argiles molles lagunaires (Abidjan : Marcory, Treichville, Koumassi, zone portuaire), remblais récents, charges très lourdes (immeubles, châteaux d'eau, silos, ponts), risque d'affouillement en rivière. Un **pieu** transmet la charge en profondeur, soit par sa **pointe** sur une couche résistante, soit par **frottement** le long de son fût, en général par les deux.

!fig:fondations-types|Fondations superficielles, semi-profondes et profondes

## Les types de pieux
| Type | Mise en œuvre | Usage |
|---|---|---|
| **Foré simple ou tubé** | Forage puis bétonnage en place (tube de travail si le terrain s'éboule) | Bâtiments, grands diamètres (0,6 à 1,5 m) |
| **Foré à la boue** | Forage stabilisé par une boue bentonitique, bétonnage au tube plongeur | Sols instables, sous la nappe |
| **Tarière creuse** | Tarière vissée, béton injecté par l'âme à la remontée | Rapide, sans vibrations, en ville |
| **Battu préfabriqué** | Pieu en béton armé ou acier enfoncé au mouton | Quais, zones portuaires, sols mous épais |
| **Micropieu** | Petit diamètre (< 30 cm), armature + coulis injecté | Reprises en sous-œuvre, accès difficile |
Les pieux sont reliés en tête par une **semelle de liaison** (chevêtre ou « massif sur pieux ») et souvent par des **longrines**.

## La charge limite d'un pieu
$$ Qu = Qp + Qs
- **Effort de pointe** : Qp = qp × Ap (Ap : section de la pointe) ;
- **Frottement latéral** : Qs = P × Σ (qsi × hi) (P : périmètre du pieu, qsi : frottement unitaire limite de la couche i d'épaisseur hi).
Les valeurs de qp et qs viennent des essais (pressiomètre : qp = kp × ple*, qs par des abaques selon pl* ; CPT : qp = kc × qce) ou, dans les argiles, de la cohésion non drainée :
$$ qp ≈ 9 × cu      qs = α × cu   (α ≈ 1 pour cu faible, ≈ 0,5 à 0,6 pour une argile raide)

## Charge admissible
Les coefficients de sécurité sont plus forts sur la pointe (elle ne se mobilise qu'après un enfoncement notable) que sur le frottement :
$$ Qadm = Qp / 3 + Qs / 2      (approche classique DTU 13.2)
On vérifie aussi la **résistance du béton** du pieu (contrainte de compression limitée à environ 5 à 7 MPa sous charges de service pour un pieu foré).

> [!exemple] Pieu foré Ø 0,60 m, longueur 14 m
> Sol : 0 à 10 m argile molle (qs = 20 kPa) ; 10 à 14 m sable dense (qs = 80 kPa) ; pointe dans le sable dense : qp = 4 000 kPa.
> P = π × 0,60 = 1,885 m ; Ap = π × 0,60² / 4 = 0,2827 m².
> Qs = 1,885 × (10 × 20 + 4 × 80) = **980 kN** ; Qp = 4 000 × 0,2827 = **1 131 kN**.
> Qadm = 1 131 / 3 + 980 / 2 = 377 + 490 = **867 kN**.

> [!exemple] Pieu battu Ø 0,40 m dans une argile
> 12 m dans une argile cu = 60 kPa, α = 0,6 :
> Qp = 9 × 60 × 0,1257 = **68 kN** ; Qs = 0,6 × 60 × (π × 0,40) × 12 = **543 kN** ; Qadm = 23 + 271 = **294 kN**.
> Dans les argiles, c'est le **frottement** qui porte : on allonge le pieu plutôt que de l'élargir.

## Le frottement négatif
Si une couche compressible **tasse autour du pieu** (sous un remblai récent, ou après rabattement de nappe), elle « s'accroche » au fût et le tire vers le bas : c'est le **frottement négatif**. Il **ajoute** une charge Fn au lieu de porter :
$$ Fn ≈ P × h × qsn      (qsn : frottement négatif unitaire, souvent 10 à 20 kPa dans les vases)
Le sol qui tasse ne doit évidemment pas être compté dans Qs. Remèdes : précharger le terrain avant de forer, chemiser le pieu (gaine bitumée), attendre la fin de la consolidation.

## Les groupes de pieux
Des pieux trop rapprochés interagissent : la capacité du groupe est inférieure à la somme des capacités individuelles. On respecte un **entraxe d'au moins 3 diamètres** et on applique un coefficient d'efficacité (formule de Converse-Labarre) :
$$ Ce = 1 − (θ / 90) × [(n − 1) m + (m − 1) n] / (m n)      avec θ = arctan(d / s) en degrés
(m lignes de n pieux ; d : diamètre ; s : entraxe). Pour 2 × 2 pieux avec s = 3 d : θ = 18,4° et **Ce = 0,795**.

## Contrôler la portance au battage
Pour un pieu battu, on mesure le **refus** e : l'enfoncement par coup en fin de battage. La formule des Hollandais donne la résistance dynamique :
$$ Ru = W² × H / [e × (W + P)]      Qadm ≈ Ru / 6
(W : poids du mouton ; P : poids du pieu et du casque ; H : hauteur de chute ; tout en kN et m).
> [!exemple] Battage
> W = 30 kN ; H = 1,00 m ; P = 25 kN ; refus 5 mm : Ru = 900 / (0,005 × 55) = **3 273 kN** ; Qadm ≈ **545 kN**.
Sur les grands chantiers, on réalise aussi des **essais de chargement statique** et des **contrôles d'intégrité** (essai sonique, carottage).

> [!attention] Points sensibles en exécution
> - Nettoyer le fond de forage (une pointe posée sur des boues ne porte rien) ;
> - Bétonner sans interruption, au tube plongeur sous l'eau ou la boue ;
> - Vérifier verticalité, recépage de la tête et ancrage des armatures dans la semelle de liaison.

> [!retenir]
> - Qu = Qp + Qs ; Qadm = Qp/3 + Qs/2.
> - Argile : qp ≈ 9 cu ; qs = α cu.
> - Le frottement négatif est une charge supplémentaire.
> - Entraxe ≥ 3 d ; efficacité de groupe Ce < 1.`,
 sujet:{titre:"Pieux forés dans une vase : portance, frottement négatif et effet de groupe", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un immeuble R+6 à Marcory-Zone 4 est fondé sur pieux forés, car le sol comporte 9 m de vase sous un remblai récent. Vous vérifiez un pieu et un groupe.

**Coupe et paramètres**
- 0 à 9 m : vase sous remblai récent (elle tasse encore) : frottement négatif **qsn = 15 kPa** ;
- 9 à 13 m : argile raide, **cu = 120 kPa**, α = **0,5** (qs = α cu) ;
- 13 à 16 m : sable dense, **qs = 90 kPa** ; pointe à 16 m : **qp = 4 500 kPa**.

**Pieu** : foré, **Ø 0,80 m**, longueur **16 m** ; Qadm = Qp / 3 + Qs / 2.

**Groupe** : poteau de **3 800 kN** (service) ; pieux à l'entraxe **s = 3 Ø = 2,40 m** ; efficacité (Converse-Labarre) : Ce = 1 − (θ / 90) × [(n − 1) m + (m − 1) n] / (m n), θ = arctan(d / s) en degrés.

### Partie A — Pieu isolé (9 points)
1. Calculer le périmètre et la section du pieu. (1 pt)
2. Calculer le frottement positif Qs (dans l'argile et le sable seulement) et la résistance de pointe Qp. (4 pts)
3. Calculer Qadm. (2 pts)
4. Pourquoi ne compte-t-on pas de frottement positif dans la vase ? (2 pts)

### Partie B — Frottement négatif (4 points)
5. Expliquer le frottement négatif et calculer Fn. (3 pts)
6. En déduire la charge utile admissible du pieu. (1 pt)

### Partie C — Groupe (7 points)
7. Calculer θ et l'efficacité d'un groupe de 2 × 2 pieux. La capacité du groupe suffit-elle ? (4 pts)
8. Vérifier un groupe de 2 × 3 pieux. (3 pts)`,
  corrige:`### Partie A — Pieu isolé (9 pts)
1. P = π × 0,80 = **2,513 m** ; Ap = π × 0,80² / 4 = **0,503 m²**. *(1 pt)*
2. Argile : qs = 0,5 × 120 = 60 kPa. *(4 pts)*
   - Qs = 2,513 × (4 × 60 + 3 × 90) = 2,513 × 510 = **1 282 kN** ;
   - Qp = 4 500 × 0,503 = **2 262 kN**.
3. Qadm = 2 262 / 3 + 1 282 / 2 = 754 + 641 = **1 395 kN**. *(2 pts)*
4. La vase tasse encore sous le remblai : elle descend **plus vite** que le pieu et le tire vers le bas au lieu de le porter. *(2 pts)*

### Partie B — Frottement négatif (4 pts)
5. Le sol qui tasse « s'accroche » au pieu et lui ajoute une charge. $$ Fn = P × h × qsn = 2,513 × 9 × 15 = 339 kN
   *(3 pts)*
6. Charge utile : 1 395 − 339 = **1 056 kN** par pieu. *(1 pt)*

### Partie C — Groupe (7 pts)
7. θ = arctan(0,80 / 2,40) = **18,4°** ; m = n = 2 : Ce = 1 − (18,4 / 90) × (2 + 2) / 4 = **0,795** ; capacité : 0,795 × 4 × 1 056 = **3 357 kN < 3 800 kN** ✘. *(4 pts)*
8. m = 2, n = 3 : Ce = 1 − 0,205 × (2 × 2 + 1 × 3) / 6 = **0,761** ; capacité : 0,761 × 6 × 1 056 = **4 820 kN ≥ 3 800** ✔ (ou pieux plus longs dans le sable). *(3 pts)*

> [!attention] Erreurs à éviter
> - Compter la vase comme couche porteuse.
> - Oublier que l'effet de groupe réduit la capacité de chaque pieu.
> - Appliquer le même coefficient de sécurité à la pointe et au frottement.`},
 exercices:[
  {t:"Charge admissible d'un pieu foré", d:1, e:`Pieu foré Ø 0,80 m de 12 m : de 0 à 8 m argile (qs = 30 kPa), de 8 à 12 m grave latéritique (qs = 90 kPa), qp = 3 500 kPa. Calculer Qp, Qs et Qadm.`, c:`P = π × 0,80 = 2,513 m ; Ap = π × 0,80² / 4 = 0,5027 m².
Qs = 2,513 × (8 × 30 + 4 × 90) = 2,513 × 600 = **1 508 kN**.
Qp = 3 500 × 0,5027 = **1 759 kN**.
Qadm = 1 759 / 3 + 1 508 / 2 = 586 + 754 = **1 340 kN**.`},
  {t:"Pieu battu dans des argiles", d:2, e:`Pieu battu Ø 0,50 m de 15 m. De 0 à 6 m : argile molle cu = 25 kPa (α = 1). De 6 à 15 m : argile raide cu = 70 kPa (α = 0,6). Calculer Qadm.`, c:`P = π × 0,50 = 1,571 m ; Ap = 0,1963 m².
Qs = 1,571 × (6 × 1,0 × 25 + 9 × 0,6 × 70) = 1,571 × (150 + 378) = **829 kN**.
Qp = 9 × 70 × 0,1963 = **124 kN**.
Qadm = 124 / 3 + 829 / 2 = 41 + 415 = **456 kN**.`},
  {t:"Nombre de pieux sous un château d'eau", d:2, e:`Un appui transmet 4 500 kN (ELS). On dispose de pieux de 1 340 kN (exercice 1), Ø 0,80 m, entraxe 2,40 m (3 d). a) 4 pieux en carré suffisent-ils ? b) Et 6 pieux (3 × 2) ?`, c:`θ = arctan(0,80 / 2,40) = **18,4°**.
a) 2 × 2 : Ce = 1 − (18,4 / 90) × (1 × 2 + 1 × 2) / 4 = **0,795** → 4 × 1 340 × 0,795 = **4 264 kN < 4 500 kN** ✘.
b) 3 × 2 (m = 3, n = 2) : Ce = 1 − (18,4 / 90) × (1 × 3 + 2 × 2) / 6 = **0,761** → 6 × 1 340 × 0,761 = **6 120 kN ≥ 4 500 kN** ✔.
Sans l'effet de groupe, 4 pieux auraient semblé suffire (5 360 kN) : ne pas l'oublier.`},
  {t:"Frottement négatif sous un remblai", d:2, e:`Un pieu Ø 0,60 m, de charge admissible 1 100 kN (frottement des couches compressibles non compté), traverse 9 m de vase sous un remblai récent ; frottement négatif unitaire qsn = 12 kPa. Quelle charge utile reste-t-il ?`, c:`Fn = π × 0,60 × 9 × 12 = **204 kN**.
Charge utile : 1 100 − 204 = **896 kN** (− 19 %). Un préchargement du remblai avant le forage aurait supprimé l'essentiel de ce frottement négatif.`},
  {t:"Refus à obtenir au battage", d:3, e:`On veut Qadm = 600 kN avec un mouton W = 30 kN tombant de H = 1,00 m ; poids du pieu et du casque P = 25 kN. Quel refus faut-il obtenir (formule des Hollandais, sécurité 6) ? Comment le mesurer ?`, c:`Ru = 6 × 600 = **3 600 kN**.
e = W² H / [Ru (W + P)] = 900 × 1,00 / (3 600 × 55) = 0,004 5 m = **4,5 mm par coup**.
On mesure l'enfoncement sur une série de **10 coups** (≤ 45 mm) en fin de battage ; si le refus n'est pas atteint, on poursuit le battage ou on rallonge le pieu.`}
 ],
 quiz:[
  {q:"La charge limite d'un pieu est la somme :", o:["Du poids et du vent","De l'effort de pointe et du frottement latéral","Du béton et de l'acier","De la longueur et du diamètre"], r:1, e:"Qu = Qp + Qs."},
  {q:"Dans l'approche classique, Qadm vaut :", o:["Qp/3 + Qs/2","(Qp + Qs)/10","Qp + Qs","Qs/3"], r:0, e:"Sécurité plus forte sur la pointe."},
  {q:"Le frottement négatif :", o:["Augmente la portance","Est une charge supplémentaire due au tassement du sol autour du pieu","N'existe que dans le rocher","Est dû au vent"], r:1, e:"Le sol tire le pieu vers le bas."},
  {q:"L'entraxe minimal courant entre pieux est :", o:["1 diamètre","3 diamètres","10 m","0,5 m"], r:1, e:"Pour limiter l'interaction."},
  {q:"Dans une argile, la pointe d'un pieu vaut environ :", o:["qp ≈ 9 cu","qp ≈ cu / 9","qp = 0","qp = γ D"], r:0, e:"Facteur 9."}
 ]},
{id:"geo-9", niv:3, titre:"Poussée et butée des terres, murs de soutènement", duree:70, contenu:`## Le sol pousse sur les écrans
Un mur, un voile de sous-sol, une palplanche retiennent un massif de terre qui **pousse** horizontalement. L'intensité de cette poussée dépend du **déplacement** de l'écran :
- écran **immobile** : poussée **au repos**, coefficient **K0 ≈ 1 − sin φ'** ;
- écran qui s'éloigne légèrement du sol (mur qui bascule de 1/1 000 de sa hauteur) : la poussée diminue jusqu'à la **poussée active** (coefficient **Ka**) ;
- écran poussé **contre** le sol : le sol résiste de plus en plus jusqu'à la **butée** (coefficient **Kp**), beaucoup plus forte mais qui demande un grand déplacement.
$$ σh = K × σ'v      (+ pression de l'eau u si le sol est noyé)

!fig:paroi|Diagramme de poussée sur un écran

## Les coefficients de Rankine
Pour un écran vertical lisse et un terre-plein horizontal :
$$ Ka = tan²(45° − φ/2)      Kp = tan²(45° + φ/2) = 1 / Ka
| φ (°) | K0 | Ka | Kp |
|---|---|---|---|
| 20 | 0,658 | 0,490 | 2,04 |
| 25 | 0,577 | 0,406 | 2,46 |
| 28 | 0,531 | 0,361 | 2,77 |
| 30 | 0,500 | 0,333 | 3,00 |
| 32 | 0,470 | 0,307 | 3,25 |
| 35 | 0,426 | 0,271 | 3,69 |
La méthode de **Coulomb** (coin de sol glissant) tient compte du frottement sol-mur δ, d'un parement incliné et d'un talus ; elle donne des Ka un peu plus faibles. Pour les cas courants, Rankine est suffisant et légèrement sécuritaire.

## Calculer la poussée
### Sol pulvérulent, sec
La contrainte croît linéairement avec la profondeur : diagramme **triangulaire**.
$$ Pa = 0,5 × Ka × γ × H²      appliquée à H/3 au-dessus de la base
> [!exemple] Mur de 3 m retenant un remblai sableux
> φ = 30° (Ka = 1/3), γ = 18 kN/m³ : Pa = 0,5 × 1/3 × 18 × 3² = **27 kN/m**, à 1,00 m de la base ; moment de renversement 27 kN·m/m.

### Surcharge sur le terre-plein
Une surcharge uniforme q (stockage, véhicules : 10 kPa courant) ajoute une poussée **rectangulaire** :
$$ Pq = Ka × q × H      appliquée à H/2

### Sol cohérent
La cohésion réduit la poussée :
$$ σa = Ka γ z − 2 c √Ka
Près de la surface, σa est négatif : le sol « tient » seul et se fissure sur une profondeur **z0 = 2c / (γ √Ka)**. On néglige la traction (et l'on considère qu'une fissure peut se remplir d'eau).
> [!exemple] Argile c = 10 kPa, φ = 20°, γ = 19 kN/m³, H = 4 m
> Ka = 0,490 ; √Ka = 0,700 ; z0 = 20 / (19 × 0,700) = **1,50 m**.
> À la base : σa = 0,490 × 19 × 4 − 2 × 10 × 0,700 = **23,3 kPa** ; Pa = 0,5 × 23,3 × (4 − 1,50) = **29,0 kN/m**.

### Présence d'eau
Sous la nappe, on calcule la poussée des terres avec **γ'** (déjaugé) et on **ajoute** la pression de l'eau **u = γw × hw**, qui agit avec un coefficient 1 (l'eau pousse autant dans toutes les directions).
> [!exemple] Mur de 4 m, nappe à 2 m de profondeur
> φ = 30°, γ = 18 au-dessus, γ' = 10 kN/m³ au-dessous.
> σ'h à 2 m : 1/3 × 36 = 12 kPa ; à 4 m : 1/3 × (36 + 20) = 18,7 kPa ; eau à 4 m : 20 kPa.
> Terres : 0,5 × 12 × 2 + (12 + 18,7)/2 × 2 = 42,7 kN/m ; eau : 0,5 × 20 × 2 = 20 kN/m ; **total 62,7 kN/m** contre 48 kN/m sans eau (+ 31 %).
D'où l'importance du **drainage** derrière les murs : couche drainante, barbacanes tous les 2 à 3 m, drain en pied.

## Les murs de soutènement
| Type | Principe | Hauteur courante |
|---|---|---|
| Mur poids (maçonnerie, béton cyclopéen, gabions) | Son poids s'oppose à la poussée | ≤ 4 m |
| Mur cantilever en béton armé (en T renversé) | Le poids des terres sur le talon stabilise | 2 à 8 m |
| Mur à contreforts | Voile raidi par des contreforts | > 6 m |
| Paroi berlinoise, palplanches, paroi moulée | Écran ancré ou butonné, fiché dans le sol | Fouilles profondes |
| Terre armée, sol cloué | Le sol renforcé forme lui-même le mur | Talus routiers |

## Les vérifications d'un mur poids
1. **Renversement** autour de l'arête aval : Fr = Ms / Mr ≥ 1,5 (Ms : moment stabilisant du poids, Mr : moment de la poussée).
2. **Glissement** sur la base : Fg = W tan δ / Pa ≥ 1,5 (δ = φ' pour un béton coulé en place sur le sol ; on néglige la butée devant le mur, souvent incertaine).
3. **Contraintes sous la base** : la résultante doit passer dans le **tiers central** (e ≤ B/6) et σmax ≤ qadm du sol.
4. **Stabilité générale** du massif (glissement profond) — chapitre suivant.

> [!exemple] Mur poids en béton cyclopéen
> H = 3 m, crête 0,60 m, base 1,80 m, parement côté terres vertical, γb = 23 kN/m³ ; remblai φ = 30°, γ = 18 kN/m³ : Pa = 27 kN/m à 1,00 m.
> Poids (moments par rapport à l'arête aval) : partie rectangulaire 0,60 × 3 × 23 = 41,4 kN à 1,50 m ; partie triangulaire 0,5 × 1,20 × 3 × 23 = 41,4 kN à 0,80 m ; **W = 82,8 kN/m**.
> - Renversement : Ms = 41,4 × 1,50 + 41,4 × 0,80 = 95,2 kN·m ; Mr = 27,0 → **Fr = 3,53 ≥ 1,5** ✔
> - Glissement : Fg = 82,8 × tan 30° / 27 = **1,77 ≥ 1,5** ✔
> - Excentricité : x = (95,2 − 27,0) / 82,8 = 0,824 m ; e = 0,90 − 0,824 = **0,076 m ≤ B/6 = 0,30 m** ✔
> - Contraintes : σ = (82,8 / 1,80) × (1 ± 6 × 0,076 / 1,80) → **σmax = 57,7 kPa ; σmin = 34,3 kPa** ✔

> [!attention] La butée, une alliée peu fiable
> Avec φ = 30°, la butée devant une fiche de 0,80 m vaut 0,5 × 3 × 18 × 0,8² = 17,3 kN/m. Mais elle n'est mobilisée qu'après un déplacement important et disparaît si l'on creuse une tranchée devant le mur : on la néglige pour les murs courants.

> [!retenir]
> - Ka = tan²(45 − φ/2) ; Kp = tan²(45 + φ/2) ; K0 ≈ 1 − sin φ.
> - Pa = 0,5 Ka γ H² à H/3 ; surcharge : Ka q H à H/2.
> - L'eau s'ajoute avec K = 1 : drainer derrière les murs.
> - Mur poids : renversement ≥ 1,5 ; glissement ≥ 1,5 ; e ≤ B/6 ; σmax ≤ qadm.`,
 sujet:{titre:"Mur poids en béton : poussée, surcharge et vérifications de stabilité", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un mur poids en béton cyclopéen soutient la plate-forme d'une école à Man, en terrain pentu.

**Données**
- Hauteur **H = 4,00 m** ; crête **0,60 m** ; base **2,20 m** ; parement côté terres **vertical**, parement aval incliné ; béton **γb = 23 kN/m³** ;
- Remblai : **φ = 32°**, **c = 0**, **γ = 18 kN/m³** ; surcharge sur le terre-plein **q = 10 kPa** (cour de récréation) ;
- Rankine : Ka = tan²(45° − φ/2) ; frottement sol-base : **tan φ** ; contrainte admissible du sol de fondation : **200 kPa** ;
- Coefficients de sécurité exigés : renversement **1,5**, glissement **1,5**.

### Partie A — Poussées (6 points)
1. Calculer Ka. (1 pt)
2. Calculer la poussée des terres Pa et la poussée due à la surcharge Pq, avec leurs points d'application. (3 pts)
3. Calculer le moment de renversement par rapport à l'arête aval de la base. (2 pts)

### Partie B — Poids et renversement (5 points)
4. Décomposer le mur en un rectangle et un triangle : calculer leurs poids et leurs bras de levier par rapport à l'arête aval. (3 pts)
5. Vérifier la sécurité au renversement. (2 pts)

### Partie C — Glissement et contraintes (6 points)
6. Vérifier la sécurité au glissement. Proposer une solution si besoin. (3 pts)
7. Calculer l'excentricité de la résultante et les contraintes sous la base. (3 pts)

### Partie D — Eau (3 points)
8. Si les barbacanes se bouchent et que l'eau monte derrière le mur sur toute sa hauteur, quelle poussée supplémentaire ? Conclure. (3 pts)`,
  corrige:`### Partie A — Poussées (6 pts)
1. Ka = tan²(29°) = **0,307**. *(1 pt)*
2. Pa = 0,5 × 0,307 × 18 × 4² = **44,2 kN/m** à H/3 = **1,33 m** ; Pq = 0,307 × 10 × 4 = **12,3 kN/m** à H/2 = **2,00 m**. *(3 pts)*
3. Mr = 44,2 × 1,333 + 12,3 × 2,00 = **83,6 kN·m/m**. *(2 pts)*

### Partie B — Renversement (5 pts)
4. *(3 pts)*
   - Rectangle (côté terres) : 0,60 × 4 × 23 = **55,2 kN**, à 2,20 − 0,30 = **1,90 m** ;
   - Triangle (aval) : 0,5 × 1,60 × 4 × 23 = **73,6 kN**, à 2/3 × 1,60 = **1,07 m** ;
   - W = **128,8 kN/m** ; Ms = 55,2 × 1,90 + 73,6 × 1,067 = **183,4 kN·m/m**.
5. Fr = 183,4 / 83,6 = **2,19 ≥ 1,5** ✔. *(2 pts)*

### Partie C — Glissement et contraintes (6 pts)
6. Fg = 128,8 × tan 32° / 56,5 = 80,5 / 56,5 = **1,42 < 1,5** ✘ → ajouter une **bêche** sous la base (butée), incliner la base, ou élargir le mur. *(3 pts)*
7. x = (183,4 − 83,6) / 128,8 = 0,775 m ; e = 1,10 − 0,775 = **0,325 m ≤ B/6 = 0,367** ✔ (base entièrement comprimée). *(3 pts)*
$$ σ = (128,8 / 2,20) × (1 ± 6 × 0,325 / 2,20)   →   σmax = 110 kPa ; σmin = 7 kPa
   110 ≤ 200 kPa ✔.

### Partie D — Eau (3 pts)
8. Pw = 0,5 × 10 × 4² = **80 kN/m**, plus que la poussée des terres elle-même : le mur glisserait et basculerait. D'où l'importance des **barbacanes**, du **drain** et du **massif drainant** derrière le mur, et de leur entretien. *(3 pts)*

> [!attention] Erreurs à éviter
> - Placer la poussée des terres à H/2 (elle est triangulaire : H/3).
> - Oublier la surcharge, ou la placer à H/3.
> - Prendre les bras de levier depuis l'arête amont pour le renversement.`},
 exercices:[
  {t:"Poussée sur un muret", d:1, e:`Un muret de 2,50 m retient un sable φ = 32°, γ = 19 kN/m³. Calculer Ka, Kp et la poussée active Pa (valeur et point d'application).`, c:`Ka = tan²(45 − 16) = tan² 29° = **0,307** ; Kp = tan² 61° = **3,25**.
Pa = 0,5 × 0,307 × 19 × 2,50² = **18,2 kN/m**, appliquée à 2,50 / 3 = **0,83 m** au-dessus de la base.`},
  {t:"Poussée avec surcharge", d:2, e:`Mur de 4 m : remblai φ = 30°, γ = 18 kN/m³, surcharge q = 15 kPa sur le terre-plein. Calculer la poussée totale et le moment de renversement à la base.`, c:`Terres : Pa = 0,5 × 1/3 × 18 × 4² = **48 kN/m** à 4/3 = 1,33 m.
Surcharge : Pq = 1/3 × 15 × 4 = **20 kN/m** à 2,00 m.
Poussée totale : **68 kN/m** ; moment : 48 × 1,333 + 20 × 2,00 = 64 + 40 = **104 kN·m/m**.`},
  {t:"Poussée d'un sol cohérent", d:2, e:`Talus excavé verticalement sur 5 m dans un limon argileux c = 15 kPa, φ = 25°, γ = 19 kN/m³, retenu par un voile. Calculer la profondeur de fissuration z0, la contrainte à la base et la poussée (traction négligée).`, c:`Ka = tan² 32,5° = **0,406** ; √Ka = 0,637.
z0 = 2 × 15 / (19 × 0,637) = **2,48 m**.
Base : σa = 0,406 × 19 × 5 − 2 × 15 × 0,637 = 38,6 − 19,1 = **19,4 kPa**.
Pa = 0,5 × 19,4 × (5 − 2,48) = **24,5 kN/m**, à (5 − 2,48)/3 = 0,84 m de la base.
Prudence : si la fissure se remplit d'eau, il faut ajouter la pression hydrostatique sur 2,48 m.`},
  {t:"Vérifier puis corriger un mur poids", d:3, e:`Mur en maçonnerie de moellons (γ = 22 kN/m³), H = 2,50 m, crête 0,50 m, base 1,20 m, parement côté terres vertical. Remblai φ = 28° (Ka = 0,361), γ = 18 kN/m³ ; sol de fondation tan δ = tan 28°. a) Vérifier le renversement, le glissement et l'excentricité. b) Reprendre avec une base de 1,60 m.`, c:`Pa = 0,5 × 0,361 × 18 × 2,50² = **20,3 kN/m** à 0,833 m → Mr = **16,9 kN·m/m**.
a) Rectangle : 0,50 × 2,50 × 22 = 27,5 kN à 0,95 m ; triangle : 0,5 × 0,70 × 2,50 × 22 = 19,25 kN à 0,467 m ; W = **46,75 kN/m** ; Ms = 26,1 + 9,0 = **35,1 kN·m/m**.
- Renversement : Fr = 35,1 / 16,9 = **2,07** ✔
- Glissement : Fg = 46,75 × 0,532 / 20,3 = **1,22 < 1,5** ✘
- x = (35,1 − 16,9) / 46,75 = 0,389 m ; e = 0,60 − 0,389 = **0,211 m > B/6 = 0,20 m** ✘ (base partiellement décomprimée)
b) Base 1,60 m (triangle de 1,10 m) : triangle 30,25 kN à 0,733 m ; rectangle 27,5 kN à 1,35 m ; W = **57,75 kN/m** ; Ms = 59,3 kN·m/m.
- Fr = 59,3 / 16,9 = **3,50** ✔ ; Fg = 57,75 × 0,532 / 20,3 = **1,51** ✔
- x = (59,3 − 16,9) / 57,75 = 0,734 m ; e = 0,80 − 0,734 = **0,066 m ≤ 0,267 m** ✔
- σmax = (57,75 / 1,60) × (1 + 6 × 0,066 / 1,60) = **45,0 kPa** ; σmin = **27,2 kPa** ✔
Une **bêche** sous la base est une autre solution contre le glissement.`},
  {t:"Barbacanes bouchées", d:2, e:`Mur de 3 m retenant un remblai φ = 30°. a) Remblai drainé et sec (γ = 18 kN/m³) ; b) barbacanes bouchées, remblai entièrement saturé jusqu'en tête (γ' = 10 kN/m³). Comparer les poussées totales.`, c:`a) Pa = 0,5 × 1/3 × 18 × 9 = **27 kN/m**.
b) Terres : 0,5 × 1/3 × 10 × 9 = 15 kN/m ; eau : 0,5 × 10 × 9 = 45 kN/m ; total **60 kN/m**.
La poussée est multipliée par **2,2** : c'est la cause n° 1 des ruptures de murs en saison des pluies. Entretenir les barbacanes et le drain est indispensable.`}
 ],
 quiz:[
  {q:"Pour φ = 30°, Ka vaut :", o:["1/3","3","0,5","1"], r:0, e:"tan² 30° = 1/3."},
  {q:"La poussée active d'un sol sec s'applique à :", o:["H/2","H/3 au-dessus de la base","La crête","2H/3 au-dessus de la base"], r:1, e:"Diagramme triangulaire."},
  {q:"L'eau derrière un mur :", o:["Réduit la poussée","Ajoute sa pression avec un coefficient 1","N'a pas d'effet","Supprime la poussée des terres"], r:1, e:"D'où le drainage."},
  {q:"Pour un mur poids, la résultante doit passer :", o:["Hors de la base","Dans le tiers central (e ≤ B/6)","Sur l'arête amont","Au sommet du mur"], r:1, e:"Base entièrement comprimée."},
  {q:"La butée :", o:["Est mobilisée sans déplacement","Est beaucoup plus forte que la poussée mais demande un grand déplacement","Est toujours nulle","Est égale à la poussée"], r:1, e:"On la néglige souvent."}
 ]},
{id:"geo-16", niv:3, titre:"Stabilité des talus et des pentes", duree:65, contenu:`## Les glissements de terrain
Un talus (déblai routier, remblai, berge, pente naturelle) peut **glisser** : une masse de sol se détache le long d'une surface de rupture. En Côte d'Ivoire, les glissements surviennent surtout **en saison des pluies** : à Abidjan (Attécoubé, Mossikro, Anyama…), les talus raides urbanisés s'effondrent sur les habitations, avec des victimes presque chaque année. Comprendre la stabilité des pentes, c'est aussi protéger des vies.

## Les causes des glissements
- **L'eau** (cause principale) : la pluie sature le sol, augmente son poids et surtout la **pression interstitielle u**, qui réduit la contrainte effective et donc le frottement ;
- les **terrassements** : pente trop raide, pied du talus creusé, surcharge en tête (constructions, remblais) ;
- l'**érosion** du pied par un cours d'eau ou un ravinement ;
- le **déboisement** (les racines retiennent le sol et pompent l'eau) ;
- les **vibrations** (engins, séismes).

## Le coefficient de sécurité
$$ F = résistance au cisaillement disponible / cisaillement nécessaire à l'équilibre
F < 1 : rupture ; F = 1 : équilibre limite ; on exige en général **F ≥ 1,5** pour un ouvrage permanent (1,3 pour un ouvrage provisoire).

## Le talus infini
Pour une pente longue d'inclinaison β, avec une surface de rupture parallèle à la pente à la profondeur z :
- **sol pulvérulent sec** : F = tan φ' / tan β → la pente maximale est l'angle de frottement (angle de talus naturel) ;
- **sol pulvérulent avec écoulement parallèle à la pente** (nappe en surface) : F ≈ (γ' / γsat) × tan φ' / tan β, soit environ **la moitié** ;
- **sol cohérent et frottant** :
$$ F = [c' + (γ z cos²β − u) tan φ'] / (γ z sin β cos β)
> [!exemple] Pente sableuse
> φ' = 32°, β = 25° : sec, F = tan 32° / tan 25° = 0,625 / 0,466 = **1,34** ; nappe affleurante (γ'/γsat = 0,5) : **F = 0,67** → glissement. Le même talus, stable en saison sèche, glisse en saison des pluies.

> [!exemple] Pente limoneuse
> c' = 5 kPa, φ' = 28°, γ = 19 kN/m³, β = 30°, surface de rupture à z = 2 m, sol sec (u = 0) :
> γ z cos²β = 28,5 kPa ; γ z sin β cos β = 16,5 kPa → F = (5 + 28,5 × 0,532) / 16,5 = **1,22** (insuffisant pour un ouvrage permanent).

## Hauteur critique d'une fouille verticale
Dans une argile à court terme (c = cu, φ = 0), une paroi verticale tient seule jusqu'à la hauteur critique :
$$ Hc ≈ 3,85 × cu / γ
Avec cu = 30 kPa et γ = 18 kN/m³ : Hc = 6,4 m ; avec F = 1,5 : 4,3 m. Mais la cohésion baisse avec le temps, l'eau et les fissures : **toute tranchée de plus de 1,30 m doit être blindée ou talutée** — c'est une règle de sécurité vitale, les éboulements de tranchées tuant chaque année des ouvriers.

## La méthode des tranches (Fellenius)
Pour une surface de rupture circulaire, on découpe la masse en **tranches verticales**. Pour chaque tranche : poids W, angle α de la base avec l'horizontale, longueur de base l, pression interstitielle u.
$$ F = Σ [c' l + (W cos α − u l) tan φ'] / Σ W sin α
On essaie de nombreux cercles (logiciels) ; le cercle donnant le **F minimal** est le cercle critique.
> [!exemple] Cercle à 5 tranches (c' = 10 kPa, φ' = 25°, sol sec)
> | Tranche | W (kN/m) | α (°) | l (m) | W cos α | c'l + W cos α tan φ' | W sin α |
> |---|---|---|---|---|---|---|
> | 1 | 40 | −10 | 2,0 | 39,4 | 38,4 | −6,9 |
> | 2 | 110 | 5 | 2,0 | 109,6 | 71,1 | 9,6 |
> | 3 | 150 | 20 | 2,1 | 141,0 | 86,7 | 51,3 |
> | 4 | 140 | 35 | 2,4 | 114,7 | 77,5 | 80,3 |
> | 5 | 70 | 52 | 3,2 | 43,1 | 52,1 | 55,2 |
> | Σ | | | | | **325,8** | **189,4** |
> F = 325,8 / 189,4 = **1,72** ✔. La tranche 1 (α < 0) est stabilisatrice : c'est le « pied » du glissement, qu'il ne faut jamais terrasser.

## Les moyens de stabilisation
| Action | Solutions |
|---|---|
| Réduire les forces motrices | Adoucir la pente (reprofilage en risbermes), décharger la tête du talus |
| Augmenter les forces résistantes | Butée de pied en enrochements ou gabions, mur de soutènement, clouage, pieux |
| **Drainer** (le plus efficace) | Fossés de crête, tranchées drainantes, drains subhorizontaux, masques drainants |
| Protéger la surface | Végétalisation (vétiver, gazon), perrés, géotextiles anti-érosion, descentes d'eau bétonnées |

> [!astuce] Règles simples pour les talus de chantier
> Pente 3/2 (H/V) dans les sols courants, 2/1 dans les sables et limons, risbermes tous les 5 à 6 m, fossé de crête pour détourner les eaux, pas de stockage de déblais en tête, visite après chaque forte pluie.

> [!retenir]
> - Talus infini sec : F = tan φ'/tan β ; avec écoulement : environ moitié.
> - Fellenius : F = Σ[c'l + (W cos α − u l) tan φ'] / Σ W sin α.
> - F ≥ 1,5 pour un ouvrage permanent.
> - L'eau est la première cause des glissements : drainer.
> - Tranchée de plus de 1,30 m : blindage ou talutage obligatoire.`,
 sujet:{titre:"Stabilité des pentes : talus infini, méthode de Fellenius et tranchées", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Lotissement en pente à Abobo-Anonkoua : on étudie un talus sableux, un glissement circulaire possible sous une voie et la sécurité des tranchées de réseaux.

**Talus sableux** : φ' = **34°**, c' = 0, pente **β = 26°** ; en saison des pluies, nappe affleurante avec écoulement parallèle à la pente (γ'/γsat ≈ **0,5**).

**Cercle de glissement (Fellenius)** : c' = **12 kPa**, φ' = **26°**, sol sec (u = 0) ; F = Σ [c' l + W cos α tan φ'] / Σ W sin α.

| Tranche | W (kN/m) | α (°) | l (m) |
|---|---|---|---|
| 1 | 40 | − 10 | 2,1 |
| 2 | 120 | 12 | 2,0 |
| 3 | 160 | 32 | 2,4 |
| 4 | 90 | 52 | 3,2 |

**Tranchée** dans une argile : cu = **25 kPa**, γ = **19 kN/m³** ; hauteur critique Hc ≈ 3,85 cu / γ.

### Partie A — Talus infini (6 points)
1. Calculer F en saison sèche. (2 pts)
2. Calculer F avec la nappe affleurante. Conclure. (2 pts)
3. Proposer deux mesures de confortement. (2 pts)

### Partie B — Fellenius (9 points)
4. Calculer pour chaque tranche le terme résistant et le terme moteur. (5 pts)
5. Calculer F et conclure (F ≥ 1,5 exigé). (2 pts)
6. Quel rôle joue la tranche 1 ? Quelle erreur de chantier faut-il éviter ? (2 pts)

### Partie C — Tranchées (5 points)
7. Calculer la hauteur critique et la hauteur admissible avec F = 1,5. (3 pts)
8. Pourquoi la règle impose-t-elle quand même de blinder ou taluter toute tranchée de plus de 1,30 m ? (2 pts)`,
  corrige:`### Partie A — Talus infini (6 pts)
1. F = tan 34° / tan 26° = 0,675 / 0,488 = **1,38**. *(2 pts)*
2. F ≈ 0,5 × 1,38 = **0,69 < 1** → **glissement** en saison des pluies. *(2 pts)*
3. **Drainage** (tranchées drainantes, masques drainants) pour supprimer l'écoulement ; **adoucir** la pente ; **végétaliser** et protéger contre le ruissellement ; mur ou gabions en pied. *(2 pts)*

### Partie B — Fellenius (9 pts)
4. Résistant : c' l + W cos α tan φ' (tan 26° = 0,488) ; moteur : W sin α. *(5 pts)*

| Tranche | Résistant (kN/m) | Moteur (kN/m) |
|---|---|---|
| 1 | 25,2 + 19,2 = 44,4 | − 6,9 |
| 2 | 24,0 + 57,2 = 81,2 | 24,9 |
| 3 | 28,8 + 66,2 = 95,0 | 84,8 |
| 4 | 38,4 + 27,0 = 65,4 | 70,9 |
| **Σ** | **286,1** | **173,7** |

5. F = 286,1 / 173,7 = **1,65 ≥ 1,5** ✔ (en sol sec). *(2 pts)*
6. α < 0 : son poids **retient** le glissement (butée de pied). Il ne faut jamais **terrasser le pied** d'un talus (pour élargir une voie ou une cour) sans étude. *(2 pts)*

### Partie C — Tranchées (5 pts)
7. Hc = 3,85 × 25 / 19 = **5,07 m** ; admissible : 5,07 / 1,5 = **3,38 m**. *(3 pts)*
8. La cohésion chute avec l'eau, les fissures de dessiccation, les vibrations et les surcharges en bord de fouille ; un éboulement même de 1 m³ peut ensevelir un ouvrier. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le signe négatif de la tranche de pied.
> - Juger un talus en saison sèche seulement.
> - Stocker les déblais en bord de tranchée.`},
 exercices:[
  {t:"Pente maximale d'un remblai sableux", d:1, e:`Un remblai en sable (φ' = 33°, c' = 0) doit avoir un coefficient de sécurité de 1,5. Quelle pente maximale (angle et pente H/V) peut-on donner à ses talus ?`, c:`tan β = tan 33° / 1,5 = 0,649 / 1,5 = **0,433** → **β = 23,4°**.
Pente H/V = 1 / 0,433 = **2,3 / 1** : 2,3 m d'horizontal pour 1 m de hauteur.`},
  {t:"Le même remblai sous la pluie", d:2, e:`Le talus de l'exercice 1 (β = 23,4°) est traversé par un écoulement parallèle à la pente (γ'/γsat = 0,5). Calculer F. Quelle pente faudrait-il pour garder F = 1,5 ?`, c:`F = 0,5 × tan 33° / tan 23,4° = 0,5 × 1,5 = **0,75** → **rupture**.
Pour F = 1,5 avec écoulement : tan β = 0,5 × 0,649 / 1,5 = 0,216 → **β = 12,2°**, soit une pente de **4,6/1**. Il est bien plus économique de **drainer** le remblai que de l'aplatir à ce point.`},
  {t:"Fouille verticale dans une argile", d:2, e:`On ouvre une fouille verticale dans une argile cu = 25 kPa, γ = 18,5 kN/m³. Calculer la hauteur critique et la hauteur admissible (F = 1,5). Que conclure pour une tranchée d'assainissement de 2,50 m ?`, c:`Hc = 3,85 × 25 / 18,5 = **5,20 m** ; Hadm = 5,20 / 1,5 = **3,47 m**.
Le calcul suggère que 2,50 m tiendraient, mais la règle de sécurité l'emporte : au-delà de **1,30 m**, la tranchée doit être **blindée** ou talutée (fissures, pluie, vibrations et surcharges de bord réduisent fortement la tenue réelle).`},
  {t:"Effet des pressions interstitielles (Fellenius)", d:3, e:`On reprend le cercle à 5 tranches du cours, après de fortes pluies : u = 5 ; 15 ; 20 ; 15 ; 0 kPa sur les bases des tranches 1 à 5. Recalculer F.`, c:`Pour chaque tranche : c'l + (W cos α − u l) tan 25°.
| Tranche | u l (kN/m) | W cos α − u l | Terme résistant |
|---|---|---|---|
| 1 | 10 | 29,4 | 33,7 |
| 2 | 30 | 79,6 | 57,1 |
| 3 | 42 | 99,0 | 67,1 |
| 4 | 36 | 78,7 | 60,7 |
| 5 | 0 | 43,1 | 52,1 |
| Σ | | | **270,7** |
Σ W sin α inchangé = 189,4 → **F = 270,7 / 189,4 = 1,43** (au lieu de 1,72) : la pluie fait perdre 17 % de sécurité, sans que la géométrie change.`},
  {t:"Talus en latérite remaniée", d:3, e:`Talus de déblai en sol latéritique : c' = 8 kPa, φ' = 26°, β = 35°, surface de glissement possible à z = 3 m. a) Sol sec, γ = 18 kN/m³. b) Nappe en surface et écoulement parallèle : γsat = 20 kN/m³, u = γw z cos²β. Calculer F dans les deux cas.`, c:`cos²35° = 0,671 ; sin 35° cos 35° = 0,470 ; tan 26° = 0,488.
a) γ z cos²β = 18 × 3 × 0,671 = 36,2 kPa ; γ z sin β cos β = 25,4 kPa → F = (8 + 36,2 × 0,488) / 25,4 = **1,01** : équilibre limite, déjà insuffisant.
b) u = 10 × 3 × 0,671 = 20,1 kPa ; γ z cos²β = 40,3 kPa ; γ z sin β cos β = 28,2 kPa → F = (8 + (40,3 − 20,1) × 0,488) / 28,2 = **0,63** → glissement certain.
Solutions : adoucir à 2/1 avec risbermes, fossé de crête, drains subhorizontaux et végétalisation.`}
 ],
 quiz:[
  {q:"La première cause des glissements de talus est :", o:["Le soleil","L'eau (pressions interstitielles)","La couleur du sol","Le vent"], r:1, e:"Elle réduit la contrainte effective."},
  {q:"Pour un talus infini sableux sec, F vaut :", o:["tan φ' / tan β","tan β / tan φ'","c' / γ","1"], r:0, e:"Stable tant que β < φ'."},
  {q:"Un écoulement parallèle à la pente :", o:["Double F","Divise F par environ 2","Ne change rien","Annule φ'"], r:1, e:"γ'/γsat ≈ 0,5."},
  {q:"Le coefficient de sécurité exigé pour un talus permanent est en général :", o:["1,0","1,5","5","0,5"], r:1, e:"1,3 pour du provisoire."},
  {q:"Au-delà de quelle profondeur une tranchée doit-elle être blindée ou talutée ?", o:["0,50 m","1,30 m","3 m","6 m"], r:1, e:"Règle de sécurité vitale."}
 ]},
{id:"geo-17", niv:3, titre:"Amélioration et renforcement des sols", duree:60, contenu:`## Améliorer plutôt que fonder profond
Face à un sol médiocre, trois stratégies : **éviter** (déplacer l'ouvrage), **traverser** (pieux), ou **améliorer** le sol pour pouvoir fonder superficiellement. L'amélioration est souvent la solution la plus économique pour les grandes surfaces (plates-formes industrielles, entrepôts, routes, remblais d'accès, lotissements en zone lagunaire).

## La substitution (purge)
On **enlève** le mauvais sol (vase, tourbe, remblai d'ordures, argile gonflante) et on le remplace par un matériau sélectionné **compacté par couches** (graveleux latéritique, sable, grave concassée).
- Économique jusqu'à 2 à 3 m de profondeur ;
- En dessous, ou sous la nappe, elle devient difficile (blindages, pompage) ;
- Il faut tenir compte du **foisonnement** des déblais (×1,2 à 1,4) et du **coefficient de compactage** de l'apport.
> [!exemple] Purge sous une emprise de 12 × 10 m sur 1,50 m
> Volume en place : 12 × 10 × 1,50 = **180 m³** ; foisonné (×1,25) : **225 m³** à évacuer, soit 23 rotations de camions de 10 m³. Apport : 180 m³ compactés, soit environ 180 × 1,3 = **234 m³** de graveleux en vrac à commander.

## Le compactage en surface et en profondeur
- **Compactage par couches** (rouleaux vibrants, pieds de mouton) : chapitre « Le compactage » ; efficace sur 20 à 40 cm par couche.
- **Compactage dynamique** (méthode Ménard) : on laisse tomber une masse de 10 à 40 t d'une hauteur de 10 à 30 m, selon un maillage, en plusieurs phases. Profondeur d'influence approchée : **D ≈ 0,5 × √(M H)** (M en tonnes, H en m). Ex. : M = 15 t, H = 20 m → D ≈ 0,5 × √300 = **8,7 m**. Adapté aux sables, remblais hétérogènes ; vibrations importantes (pas en ville).
- **Vibroflottation (vibrocompactage)** : un vibreur descendu dans le sol densifie les **sables propres** saturés ; inefficace dans les argiles.

## Le préchargement et les drains verticaux
Pour les **argiles molles et vases** très compressibles, on fait **tasser le sol avant de construire** :
1. On place un **remblai de préchargement** apportant une contrainte au moins égale (souvent 1,2 fois) à celle de l'ouvrage futur ;
2. On attend la consolidation en suivant les tassements (tassomètres, plaques) et les pressions d'eau (piézomètres) ;
3. On retire la surcharge et on construit : le sol ne tassera presque plus.
Exemple : ouvrage de 60 kPa → préchargement 1,2 × 60 = 72 kPa, soit **3,6 m** de remblai à 20 kN/m³.

Le préchargement seul est **trop lent** dans une couche épaisse (t ∝ Hdr²). On fonce alors des **drains verticaux préfabriqués** (bandes drainantes de 10 cm × 5 mm, diamètre équivalent dw ≈ 6,5 cm) selon un maillage serré : l'eau ne parcourt plus que quelques décimètres horizontalement jusqu'au drain le plus proche.
Théorie de Barron (consolidation radiale) :
$$ Uh = 1 − exp(−8 Th / F(n))      F(n) = ln(n) − 0,75      n = De / dw      t = Th × De² / ch
De : diamètre d'influence d'un drain (maillage triangulaire : De = 1,05 × entraxe ; carré : 1,13 × entraxe) ; ch : coefficient de consolidation horizontale.
> [!exemple] Vase de 10 m drainée d'un seul côté, cv = ch = 3 m²/an
> Sans drains : t90 = 0,848 × 10² / 3 = **28 ans** !
> Drains en maille triangulaire de 1,50 m : De = 1,575 m ; n = 24,2 ; F(n) = 2,44 ; pour U = 90 % : Th = 2,44 × ln 10 / 8 = 0,70 ; t90 = 0,70 × 1,575² / 3 = **0,58 an ≈ 7 mois**.

## Les inclusions dans le sol
- **Colonnes ballastées** : colonnes de gravier (Ø 0,6 à 1 m) mises en place au vibreur dans les sols fins mous ; elles portent une partie de la charge, drainent le sol et réduisent les tassements (facteur de réduction de l'ordre de 1,3 à 2). Si a = aire des colonnes / aire du maillage et n = rapport de concentration des contraintes (≈ 3 à 5) : **β ≈ 1 + a (n − 1)**.
- **Inclusions rigides** (pieux de béton non armé, sans liaison avec la structure) sous un **matelas de répartition** en grave : elles reprennent l'essentiel de la charge des dallages et radiers.
- **Jet grouting** : le sol est déstructuré par un jet à très haute pression et mélangé à un coulis de ciment, formant des colonnes de « sol-ciment » ; reprises en sous-œuvre, étanchement.
- **Injections** : coulis de ciment ou de résine dans les sols grossiers ou fissurés.

## Le traitement à la chaux et au ciment
- **Chaux vive** (CaO, 1 à 3 %) dans les sols **argileux humides** : elle assèche le sol (réaction avec l'eau), diminue la plasticité (IP) et rend le sol compactable ; à plus long terme, elle le rigidifie (réaction pouzzolanique).
- **Ciment** (3 à 8 %) dans les sols **sableux ou peu plastiques** : il crée un matériau lié (couches de forme, assises de chaussées, graveleux latéritique amélioré).
Le dosage se calcule en **pourcentage de la masse de sol sec**.
> [!exemple] Chaulage d'une plate-forme de 5 000 m²
> Couche traitée 35 cm, ρd = 1,68 t/m³, dosage 2,5 % : masse de sol par m² = 0,35 × 1,68 = 0,589 t → chaux = **14,7 kg/m²**, soit **73,6 t** pour 5 000 m².

## Les géosynthétiques
- **Géotextiles** : séparation (le sol fin ne pollue plus la grave), filtration, drainage ;
- **Géogrilles** : renforcement des remblais sur sols mous, murs en sol renforcé, plates-formes de travail ;
- **Géomembranes** : étanchéité (bassins, décharges) ;
- **Géocellules, géotextiles anti-érosion** : protection des talus.

> [!astuce] Choisir une technique
> | Problème | Solution type |
> |---|---|
> | Couche mauvaise peu épaisse (< 2 m) | Substitution |
> | Sable lâche épais | Compactage dynamique, vibroflottation |
> | Vase, argile molle épaisse | Préchargement + drains, colonnes ballastées, inclusions rigides |
> | Argile humide difficile à compacter | Traitement à la chaux |
> | Remblai sur sol mou | Géogrille de base + construction par étapes |

> [!retenir]
> - Substitution : jusqu'à 2–3 m, attention au foisonnement.
> - Compactage dynamique : D ≈ 0,5 √(M H).
> - Préchargement + drains : on fait tasser avant de construire ; les drains divisent la durée par des dizaines.
> - Chaux pour les argiles humides, ciment pour les sables.`,
 sujet:{titre:"Améliorer un sol de vase : purge, préchargement, drains verticaux, colonnes et chaulage", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une zone d'entrepôts est prévue à Vridi sur **12 m de vase** reposant sur une argile compacte imperméable (drainage par le haut seulement). Vous comparez plusieurs techniques d'amélioration.

**Données**
- Surface de la plate-forme : **4 000 m²** ; contrainte apportée par les entrepôts : **55 kPa** ;
- Vase : **cv = ch = 2 m²/an** ; Tv(90 %) = **0,848** ;
- Drains préfabriqués : dw = **0,065 m**, maillage **carré de 1,40 m** (De = 1,13 × entraxe) ; Uh = 1 − exp(− 8 Th / F(n)), F(n) = ln(n) − 0,75, t = Th De² / ch ;
- Colonnes ballastées : **Ø 0,80 m** en maille **2,00 × 2,00 m** ; rapport de concentration des contraintes **n = 4** ; β = 1 + a (n − 1) ; tassement sans traitement **25 cm** ;
- Couche de forme en limon traité à la chaux : épaisseur **0,35 m**, γd = **17 kN/m³**, dosage **2 %** ;
- Bureau d'accueil sur une ancienne décharge : emprise **12 × 10 m**, purge sur **1,50 m**.

### Partie A — Purge et substitution (3 points)
1. Calculer le volume purgé, le volume à évacuer (foisonnement 1,25) et le remblai d'apport (coefficient 1,30). (3 pts)

### Partie B — Préchargement et drains (9 points)
2. Calculer la contrainte de préchargement (1,2 fois l'ouvrage) et la hauteur de remblai (20 kN/m³). (2 pts)
3. Calculer le temps nécessaire pour 90 % de consolidation sans drains. (2 pts)
4. Avec les drains : calculer De, n, F(n), Th pour U = 90 % et la durée. (4 pts)
5. Conclure. (1 pt)

### Partie C — Colonnes ballastées (4 points)
6. Calculer le taux d'incorporation a, le facteur d'amélioration β et le tassement résiduel. (3 pts)
7. Pourquoi les colonnes accélèrent-elles aussi la consolidation ? (1 pt)

### Partie D — Chaulage (4 points)
8. Calculer la masse de chaux pour la couche de forme. (2 pts)
9. Expliquer les deux effets de la chaux vive sur un limon humide et une précaution de sécurité. (2 pts)`,
  corrige:`### Partie A — Purge (3 pts)
1. 12 × 10 × 1,50 = **180 m³** ; évacuation 180 × 1,25 = **225 m³** ; apport 180 × 1,30 = **234 m³**. *(3 pts)*

### Partie B — Préchargement (9 pts)
2. 1,2 × 55 = **66 kPa** → 66 / 20 = **3,3 m** de remblai. *(2 pts)*
3. Drainage par le haut : Hdr = 12 m → t90 = 0,848 × 144 / 2 = **61 ans** : impossible. *(2 pts)*
4. *(4 pts)*
   - De = 1,13 × 1,40 = **1,582 m** ; n = 1,582 / 0,065 = **24,3** ;
   - F(n) = ln 24,3 − 0,75 = **2,44** ;
   - Th = − F(n) × ln(1 − 0,90) / 8 = 2,44 × 2,303 / 8 = **0,703** ;
   - t = 0,703 × 1,582² / 2 = **0,88 an ≈ 10,5 mois**.
5. Les drains ramènent la durée de 61 ans à moins d'un an : préchargement **avec drains**, suivi par tassomètres et piézomètres avant de construire. *(1 pt)*

### Partie C — Colonnes (4 pts)
6. a = (π × 0,80² / 4) / 4,00 = 0,503 / 4 = **0,126** ; β = 1 + 0,126 × 3 = **1,38** ; tassement : 25 / 1,38 = **18 cm**. *(3 pts)*
7. Le gravier est très perméable : chaque colonne est aussi un **drain vertical**. *(1 pt)*

### Partie D — Chaulage (4 pts)
8. Masse sèche : 4 000 × 0,35 × 17 / 9,81 = **2 426 t** → chaux : 2 % = **48,5 t**. *(2 pts)*
9. **Effet immédiat** : la chaux vive consomme de l'eau en s'hydratant et en chauffant → le sol s'assèche et devient compactable ; **effet à long terme** : réaction avec les argiles (floculation, liants) → meilleure portance et moindre sensibilité à l'eau. Sécurité : produit **caustique** (lunettes, gants, masque), pas d'épandage par grand vent. *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser la longueur verticale Hdr dans la formule des drains (c'est De qui compte).
> - Retirer le préchargement avant d'avoir vérifié la fin des tassements.
> - Oublier la chaux dans le volume des approvisionnements et les mesures de sécurité.`},
 exercices:[
  {t:"Purge et remplacement", d:1, e:`Sous un bâtiment de 20 × 15 m, on purge 1,20 m de remblai d'ordures. Coefficient de foisonnement 1,30 ; coefficient de compactage de l'apport 1,25. Calculer les volumes à évacuer et à commander, et le nombre de rotations de camions de 12 m³ pour l'évacuation.`, c:`Volume en place : 20 × 15 × 1,20 = **360 m³**.
À évacuer : 360 × 1,30 = **468 m³** → 468 / 12 = 39 → **39 rotations**.
Apport à commander : 360 × 1,25 = **450 m³** de matériau en vrac, mis en œuvre en couches de 20 à 30 cm compactées.`},
  {t:"Hauteur de préchargement", d:1, e:`Un entrepôt appliquera 45 kPa sur une vase. On veut précharger avec 1,3 fois cette contrainte, au moyen d'un sable de γ = 18 kN/m³. Quelle hauteur de remblai faut-il ?`, c:`Contrainte de préchargement : 1,3 × 45 = **58,5 kPa**.
Hauteur : 58,5 / 18 = **3,25 m**. (À monter par étapes si la vase est très molle, pour ne pas la faire rompre.)`},
  {t:"Efficacité des drains verticaux", d:3, e:`Vase de 10 m (drainée d'un seul côté), ch = cv = 3 m²/an. On compare deux maillages triangulaires de drains (dw = 0,065 m) : 1,50 m et 2,00 m. Calculer t90 dans chaque cas et conclure.`, c:`Sans drains : t90 = 0,848 × 100 / 3 = **28 ans**.
Maille 1,50 m : De = 1,575 m ; n = 24,2 ; F(n) = ln 24,2 − 0,75 = 2,44 ; Th = 2,44 × 2,303 / 8 = 0,70 ; t90 = 0,70 × 1,575² / 3 = **0,58 an ≈ 7 mois**.
Maille 2,00 m : De = 2,10 m ; n = 32,3 ; F(n) = 2,73 ; Th = 0,78 ; t90 = 0,78 × 2,10² / 3 = **1,15 an ≈ 14 mois**.
Élargir la maille de 1,50 à 2,00 m divise par 1,8 le nombre de drains mais double le délai : le choix dépend du planning.`},
  {t:"Dosage en chaux", d:2, e:`On traite à la chaux vive (2 %) une couche de 30 cm d'argile humide, de masse volumique sèche 1,60 t/m³, sur une plate-forme de 120 × 40 m. Calculer la quantité de chaux et le nombre de sacs de 25 kg ou de citernes de 25 t correspondant.`, c:`Surface : 120 × 40 = 4 800 m².
Masse de sol sec par m² : 0,30 × 1,60 = 0,48 t → chaux = 0,48 × 0,02 = **9,6 kg/m²**.
Total : 9,6 × 4 800 = 46 080 kg ≈ **46,1 t**, soit environ **2 citernes** de 25 t (la chaux en vrac est épandue par un épandeur doseur ; en sacs, il en faudrait 1 844).`},
  {t:"Colonnes ballastées", d:3, e:`Colonnes ballastées Ø 0,80 m en maillage carré de 2,00 × 2,00 m sous un dallage. Rapport de concentration n = 4. Le tassement calculé sans traitement est de 30 cm. Estimer le tassement après traitement.`, c:`Aire d'une colonne : π × 0,80² / 4 = 0,503 m² ; aire de la maille : 4,00 m² → a = **0,126**.
β = 1 + 0,126 × (4 − 1) = **1,38**.
Tassement : 30 / 1,38 ≈ **22 cm**. La réduction est modeste : si le dallage ne tolère que 5 cm, il faut des inclusions rigides ou un préchargement.`}
 ],
 quiz:[
  {q:"La substitution est surtout économique :", o:["Jusqu'à 2 à 3 m de profondeur","À 20 m","Sous 10 m d'eau","Jamais"], r:0, e:"Au-delà, terrassements trop lourds."},
  {q:"Les drains verticaux servent à :", o:["Augmenter la cohésion","Accélérer la consolidation des sols fins","Évacuer les eaux de pluie des toitures","Compacter les sables secs"], r:1, e:"Ils raccourcissent le chemin de l'eau."},
  {q:"On traite à la chaux plutôt :", o:["Les sables propres","Les argiles humides","Les roches","Les graviers"], r:1, e:"Elle assèche et réduit la plasticité."},
  {q:"Le compactage dynamique consiste à :", o:["Laisser tomber une lourde masse d'une grande hauteur","Arroser le sol","Injecter de la résine","Poser des géotextiles"], r:0, e:"Méthode Ménard."},
  {q:"Un géotextile de séparation :", o:["Empêche le sol fin de polluer la couche granulaire","Porte les charges des poteaux","Remplace le béton","Augmente la nappe"], r:0, e:"Rôle anticontaminant."}
 ]},
{id:"geo-18", niv:3, titre:"La mission géotechnique et le rapport de sol", duree:50, contenu:`## Pourquoi une étude géotechnique ?
Le sol est le **seul matériau de construction que l'on ne choisit pas**. Les sinistres de fondations (fissures, effondrements, bâtiments penchés) coûtent très cher et sont souvent irréparables. Une étude de sol coûte en général **0,5 à 2 % du prix de l'ouvrage** : c'est l'assurance la moins chère du projet. En Côte d'Ivoire, les études sont réalisées par le **LBTP** (Laboratoire du Bâtiment et des Travaux Publics) et par des bureaux d'études géotechniques agréés.

## L'enchaînement des missions (norme NF P94-500)
| Mission | Moment | Contenu |
|---|---|---|
| **G1** Étude géotechnique préalable | Achat du terrain, faisabilité | ES : enquête documentaire, visite, premiers sondages ; PGC : principes généraux de construction |
| **G2** Étude géotechnique de conception | Phases AVP, PRO, DCE/ACT | Reconnaissance complète, choix et pré-dimensionnement des fondations, valeurs de calcul |
| **G3** Étude et suivi géotechniques d'exécution | Travaux (pour l'entreprise) | Études d'exécution, adaptation aux sols rencontrés, suivi |
| **G4** Supervision géotechnique d'exécution | Travaux (pour le maître d'ouvrage) | Contrôle de la G3, avis sur les adaptations |
| **G5** Diagnostic géotechnique | Sinistre, extension, existant | Étude d'un élément précis (fissures, tassements, glissement) |
On ne peut pas sauter d'étape : une étude G2 sans G1 n'a pas de sens, et **G3 et G4** sont deux regards complémentaires sur le chantier.

## Programmer une reconnaissance
- **Nombre de points** : au moins 3 pour un petit bâtiment (pour voir les variations), en général **un point pour 200 à 400 m²** d'emprise pour un bâtiment courant, aux angles et au droit des charges importantes ;
- **Profondeur** : sous les fondations superficielles, au moins **1,5 à 2 fois la largeur** de la semelle (ou de la largeur du bâtiment pour un radier) et jamais moins de 5 m ; pour des pieux, **5 m ou 7 diamètres sous la pointe** envisagée ;
- **Moyens** : sondages destructifs avec enregistrement des paramètres, sondages carottés (échantillons intacts pour le laboratoire), essais pressiométriques, CPT ou PDL, piézomètres pour suivre la nappe ;
- **Laboratoire** : identification, Proctor/CBR (voiries), œdomètre (tassements), cisaillement, agressivité de l'eau vis-à-vis des bétons.

## Lire un rapport de sol
Un rapport G2 comprend :
1. le contexte (projet, charges, géologie, historique du site) ;
2. les investigations réalisées (plan d'implantation des sondages, coupes, procès-verbaux d'essais) ;
3. le **modèle géologique et géotechnique** : succession des couches, paramètres de calcul de chacune, niveau de la nappe (et ses variations saisonnières) ;
4. les **recommandations** : type et niveau de fondation, contrainte de calcul (ou portance des pieux), tassements estimés, dallage, terrassements, soutènements, drainage, agressivité vis-à-vis des bétons ;
5. les **réserves** et les **limites** de l'étude (hypothèses, zones non reconnues).

> [!exemple] Synthèse type d'un rapport
> Bâtiment R+3, 30 × 15 m, Abidjan-Cocody (plateau). Coupe : 0 à 0,80 m terre végétale et remblai ; 0,80 à 6 m argile sableuse latéritique raide (pl* ≈ 0,9 MPa, EM ≈ 9 MPa) ; au-delà, sable argileux compact (pl* > 1,5 MPa). Nappe non rencontrée à 15 m.
> Recommandations : **semelles isolées** ancrées à 1,20 m minimum dans l'argile sableuse, **qELS = 0,25 MPa** ; tassements estimés < 2 cm ; dallage sur terre-plein après purge du remblai ; drainage périphérique conseillé.

## Les erreurs à éviter
- Construire avec une contrainte « habituelle » de 2 bars sans étude ;
- Réaliser l'étude **après** avoir figé le projet (on ne peut plus l'adapter) ;
- Implanter les sondages hors de l'emprise réelle du bâtiment ;
- Ne pas transmettre le rapport à l'entreprise et au bureau d'études structure ;
- Ignorer les **réserves** du rapport (par exemple : « à vérifier à l'ouverture des fouilles »).

> [!attention] La réception des fonds de fouille
> Avant de couler le béton de propreté, le géotechnicien (ou le conducteur de travaux formé) vérifie que le sol d'assise correspond au rapport : nature, compacité (pénétromètre de poche, PDL), absence d'eau et de remblai. Toute différence est signalée **avant** de bétonner.

> [!retenir]
> - G1 (préalable) → G2 (conception) → G3 (exécution, entreprise) + G4 (supervision, maître d'ouvrage) ; G5 (diagnostic).
> - Reconnaissance : ≥ 3 points, 1 point pour 200 à 400 m², profondeur ≥ 1,5 à 2 B (≥ 5 m), 5 m sous les pieux.
> - Le rapport donne le modèle géotechnique, les valeurs de calcul et les recommandations.
> - Coût de l'étude : 0,5 à 2 % de l'ouvrage.`,
 sujet:{titre:"La mission géotechnique : programmer l'étude et exploiter un rapport de sol", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un maître d'ouvrage veut construire un immeuble R+4 de **900 m² d'emprise** à Cocody-Angré. Vous l'accompagnez pour l'étude géotechnique, puis vous exploitez le rapport.

**Extrait de la synthèse du rapport (mission G2 AVP)**
- 0 à 0,80 m : remblai hétérogène ; 0,80 à 4,50 m : sable argileux rouge ; au-delà : sable argileux compact ;
- Nappe non rencontrée jusqu'à 12 m (sondages de saison sèche) ;
- **Semelles isolées ancrées à 1,50 m minimum**, **qELS = 0,25 MPa**, tassements estimés < 2 cm ;
- Dallage sur terre-plein **après purge du remblai** ; drainage périphérique conseillé ;
- Réserve : « niveau d'assise à confirmer à l'ouverture des fouilles ».

**Charges de service** : poteau de rive **620 kN** ; poteau central **1 050 kN**.

### Partie A — Les missions (6 points)
1. Présenter les missions G1 à G5 de la norme NF P 94-500 et dire à quel moment intervient chacune. (4 pts)
2. Pourquoi G3 et G4 sont-elles complémentaires ? (2 pts)

### Partie B — Programmer la reconnaissance (5 points)
3. Combien de points de sondage prévoir (un point pour 200 à 400 m², au moins 3) ? Où les placer ? (3 pts)
4. Jusqu'à quelle profondeur, pour des semelles de 2 m de large ? (2 pts)

### Partie C — Exploiter le rapport (7 points)
5. Dimensionner les semelles carrées des deux poteaux. (3 pts)
6. Quel volume de remblai faut-il purger sous un dallage de 900 m² ? (1 pt)
7. Quelle précaution prendre au sujet de la nappe ? (1 pt)
8. Que faire de la réserve « à confirmer à l'ouverture des fouilles » ? (2 pts)

### Partie D — Coût (2 points)
9. L'étude coûte **12 millions F** pour un ouvrage de **1,2 milliard F**. Quel pourcentage ? Comparer avec le coût d'une reprise en sous-œuvre (souvent 10 à 20 % de l'ouvrage). (2 pts)`,
  corrige:`### Partie A — Missions (6 pts)
1. *(4 pts)*
   - **G1** étude préalable (achat, faisabilité) : enquête, visite, premiers sondages, principes généraux ;
   - **G2** étude de conception (AVP, PRO, DCE) : reconnaissance complète, choix et prédimensionnement des fondations ;
   - **G3** étude et suivi d'exécution (pour l'entreprise) ;
   - **G4** supervision d'exécution (pour le maître d'ouvrage) ;
   - **G5** diagnostic (sinistre, extension).
2. G3 adapte le projet aux sols réellement rencontrés pour l'entreprise ; G4 contrôle ces adaptations pour le maître d'ouvrage : deux regards indépendants sur le chantier. *(2 pts)*

### Partie B — Programme (5 pts)
3. 900 / 300 ≈ **3 à 4 points**, plutôt **4** : aux angles de l'emprise et au droit des charges les plus fortes (et un point supplémentaire si les premiers résultats varient). *(3 pts)*
4. Au moins **1,5 à 2 fois la largeur** sous les fondations : 1,50 + 2 × 2 = **≈ 5,5 m minimum**, plus pour vérifier l'absence de couche molle profonde (en pratique 8 à 10 m). *(2 pts)*

### Partie C — Rapport (7 pts)
5. *(3 pts)*
   - Rive : 620 / 250 = 2,48 m² → **1,60 × 1,60 m** (2,56 m²) ;
   - Central : 1 050 / 250 = 4,20 m² → **2,10 × 2,10 m** (4,41 m²).
6. 900 × 0,80 = **720 m³** de remblai à purger et remplacer. *(1 pt)*
7. Sondages faits en **saison sèche** : la nappe peut remonter ; prévoir le drainage périphérique et vérifier les sous-pressions éventuelles. *(1 pt)*
8. Faire **réceptionner les fonds de fouille** par le géotechnicien (mission G3/G4) avant de couler le béton de propreté ; adapter la profondeur si le sable compact n'est pas atteint. *(2 pts)*

### Partie D — Coût (2 pts)
9. 12 / 1 200 = **1 %** du coût de l'ouvrage, contre **10 à 20 %** pour une reprise en sous-œuvre : l'étude de sol est l'assurance la moins chère du projet. *(2 pts)*

> [!attention] Erreurs à éviter
> - Lancer les plans d'exécution sans étude G2.
> - Ignorer les réserves du rapport.
> - Fonder dans le remblai superficiel parce qu'il semble compact.`},
 exercices:[
  {t:"Quelle mission commander ?", d:1, e:`Indiquer la mission géotechnique adaptée à chaque situation : a) un promoteur hésite à acheter un terrain en bordure de lagune ; b) l'architecte termine l'avant-projet d'un immeuble R+6 ; c) l'entreprise de gros œuvre découvre une poche de vase en ouvrant les fouilles ; d) une école existante présente des fissures en escalier ; e) le maître d'ouvrage veut un contrôle indépendant des travaux de fondations.`, c:`a) **G1** (étude préalable : faisabilité, risques).
b) **G2** (conception, phase AVP puis PRO).
c) **G3** (étude et suivi d'exécution, à la charge de l'entreprise) pour adapter les fondations.
d) **G5** (diagnostic des désordres).
e) **G4** (supervision géotechnique d'exécution pour le maître d'ouvrage).`},
  {t:"Programmer les sondages", d:2, e:`Bâtiment R+4 de 30 × 16 m, fondé a priori sur semelles de 2,20 m de largeur à 1,50 m de profondeur. Proposer un nombre de points de sondage et leur profondeur minimale.`, c:`Emprise : 30 × 16 = 480 m² ; 1 point pour 200 à 400 m² → 2 points minimum, mais il en faut **au moins 3** et la forme allongée conduit à **5 points** (4 angles + centre) pour détecter les variations.
Profondeur sous l'assise : 1,5 à 2 B = 3,3 à 4,4 m → 1,50 + 4,4 ≈ 6 m ; on retient **8 à 10 m** pour garder la possibilité de pieux et de vérifier l'absence de couche molle profonde (et ≥ 5 m dans tous les cas).`},
  {t:"Profondeur de reconnaissance pour des pieux", d:2, e:`Une étude préliminaire prévoit des pieux de Ø 0,80 m dont la pointe serait vers 18 m. Jusqu'à quelle profondeur faut-il reconnaître le sol ?`, c:`Sous la pointe : max(5 m ; 7 × 0,80 = 5,6 m) = **5,6 m** → reconnaissance jusqu'à 18 + 5,6 ≈ **24 m** (on retient 25 m), afin de vérifier qu'aucune couche molle ne se trouve sous les pointes.`},
  {t:"Budget d'une campagne", d:2, e:`Prix fictifs d'exercice : forfait d'amenée du matériel 400 000 FCFA ; sondage pressiométrique 30 000 FCFA/m (essais compris) ; PDL 50 000 FCFA l'unité ; essais de laboratoire 600 000 FCFA ; rapport 500 000 FCFA. On réalise 3 sondages pressiométriques de 15 m et 4 PDL. Calculer le coût et le comparer à un bâtiment de 450 millions FCFA.`, c:`- Amenée : 400 000
- Pressiomètre : 3 × 15 × 30 000 = 1 350 000
- PDL : 4 × 50 000 = 200 000
- Laboratoire : 600 000 ; rapport : 500 000
**Total : 3 050 000 FCFA**, soit 3,05 / 450 = **0,68 %** du coût du bâtiment — très faible au regard du risque évité.`},
  {t:"Exploiter une coupe de sondage", d:3, e:`Coupe : 0–1,2 m remblai ; 1,2–4 m argile sableuse ferme (pl* = 0,6 MPa) ; 4–9 m argile molle (pl* = 0,25 MPa) ; 9–15 m sable dense (pl* = 1,8 MPa). Poteaux de 900 kN. On envisage des semelles 2 × 2 m à 1,50 m. a) Calculer le supplément de contrainte au toit de l'argile molle (diffusion 2/1). b) Quels risques ? c) Quelles solutions ?`, c:`a) Le toit de l'argile molle est à 4 m, soit z = 2,50 m sous l'assise : Δσ = 900 / (2 + 2,50)² = **44,4 kPa**.
b) 44 kPa transmis à 5 m d'argile molle très compressible → **tassements importants et différentiels** (semelles voisines chargées différemment), même si la couche d'assise porte bien.
c) **Pieux** ancrés dans le sable dense vers 11–12 m (au moins 2 à 3 m dans la couche), ou **radier** général si les charges sont modérées, après calcul des tassements ; les semelles isolées sont à écarter. On demande au géotechnicien (G2) de chiffrer les deux solutions.`}
 ],
 quiz:[
  {q:"La mission G2 correspond à :", o:["L'étude de conception","Le diagnostic d'un sinistre","La supervision des travaux","L'achat du terrain"], r:0, e:"Choix et pré-dimensionnement des fondations."},
  {q:"La mission G4 est commandée par :", o:["L'entreprise","Le maître d'ouvrage","Le fournisseur de ciment","La mairie seule"], r:1, e:"Supervision indépendante."},
  {q:"Pour des pieux, on reconnaît le sol sous la pointe sur au moins :", o:["0,5 m","5 m ou 7 diamètres","1 diamètre","Rien"], r:1, e:"Pour vérifier l'absence de couche molle."},
  {q:"Le coût d'une étude de sol représente environ :", o:["0,5 à 2 % de l'ouvrage","25 %","50 %","Rien du tout"], r:0, e:"Une assurance peu chère."},
  {q:"Avant de couler le béton de propreté, on doit :", o:["Réceptionner le fond de fouille","Peindre les murs","Poser la toiture","Remblayer"], r:0, e:"Vérifier la conformité du sol d'assise."}
 ]}
]});
