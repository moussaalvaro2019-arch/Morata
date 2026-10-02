/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Sciences fondamentales
   Mathématiques · Outils mathématiques · Sciences physiques · Recherche opérationnelle
   ===================================================================== */

/* ---------- MATHÉMATIQUES (niveau avancé) ---------- */
A.addChapitres('math', [
{id:'math-7', niv:3, titre:'Trigonométrie appliquée aux ouvrages', duree:30, contenu:`## Rappels dans le triangle rectangle
- **sin α** = côté opposé / hypoténuse, **cos α** = côté adjacent / hypoténuse, **tan α** = côté opposé / côté adjacent.
- Une pente en pourcentage est une tangente : **pente (%) = tan α × 100**. Une pente de 30 % correspond à α = arctan 0,30 = **16,7°**.

## Les triangles quelconques
Sur une parcelle ou une charpente, les triangles ne sont pas toujours rectangles. Deux relations suffisent :
$$ Loi des sinus :  a / sin A = b / sin B = c / sin C
$$ Al-Kashi :  c² = a² + b² − 2 a b cos C
$$ Aire :  S = ½ a b sin C

> [!exemple] Parcelle triangulaire
> Deux limites de 25 m et 18 m forment un angle de 70°.
> Troisième côté : c² = 625 + 324 − 2 × 25 × 18 × cos 70° = 949 − 307,8 = 641,2 → **c = 25,32 m**.
> Surface : S = ½ × 25 × 18 × sin 70° = 225 × 0,9397 = **211,4 m²**.

## Toitures
- **Rampant** (longueur d'un chevron) = demi-portée / cos α.
- **Hauteur au faîtage** = demi-portée × tan α.
- Un **arêtier** de toiture à 4 pans a une projection en plan égale à la demi-portée × √2 (pans à 45° en plan).

> [!exemple] Toiture en tuiles, portée 8 m, pente 30°
> Rampant : 4 / cos 30° = 4 / 0,866 = **4,62 m** (+ débord de 0,50 m horizontal : 0,50 / 0,866 = 0,58 m, soit 5,20 m de chevron).
> Faîtage : 4 × tan 30° = **2,31 m** au-dessus de l'arase.
> Arêtier : projection 4 × √2 = 5,66 m ; longueur réelle √(5,66² + 2,31²) = **6,11 m**.

## Rampes et talus
- Rampe d'accès à 5 % pour monter 0,60 m : longueur = 0,60 / 0,05 = **12 m** (angle 2,9°).
- Talus « 3 pour 2 » (3 m à l'horizontale pour 2 m de hauteur) : angle = arctan (2/3) = **33,7°**. Une fouille de 2 m de profondeur talutée ainsi déborde de 3 m de chaque côté.

> [!attention]
> La calculatrice doit être en **degrés** (et non en radians ou en grades) pour ces calculs.`,
 quiz:[
  {q:"Une pente de 30 % correspond à un angle d'environ :", o:["16,7°","30°","27°","8,5°"], r:0, e:"α = arctan 0,30 ≈ 16,7°."},
  {q:"La relation d'Al-Kashi permet de calculer :", o:["Un côté d'un triangle quelconque connaissant les deux autres et l'angle compris","Uniquement l'hypoténuse","Le périmètre d'un cercle","Une pente en %"], r:0, e:"c² = a² + b² − 2ab cos C."},
  {q:"Une rampe à 5 % doit monter 0,40 m. Sa longueur est :", o:["2 m","8 m","5 m","20 m"], r:1, e:"0,40 / 0,05 = 8 m."},
  {q:"Demi-portée 3 m, pente 30° : le rampant mesure environ :", o:["2,60 m","3,46 m","1,73 m","6,00 m"], r:1, e:"3 / cos 30° = 3 / 0,866 = 3,46 m."}
 ]},
{id:'math-8', niv:3, titre:'Mathématiques financières : intérêts et emprunts', duree:30, contenu:`## Intérêts simples et composés
- **Intérêts simples** : I = C × t × n (les intérêts ne produisent pas d'intérêts).
- **Intérêts composés** : Cn = C0 × (1 + t)ⁿ (les intérêts s'ajoutent au capital chaque année).

> [!exemple]
> 10 000 000 F placés à 5 % pendant 3 ans : intérêts simples → 11 500 000 F ; intérêts composés → 10 000 000 × 1,05³ = **11 576 250 F**.

## Emprunt à mensualités constantes
Pour un capital C emprunté sur n mois au taux mensuel i (taux annuel / 12) :
$$ M = C × i / (1 − (1 + i)^(−n))

> [!exemple] Crédit immobilier pour une villa
> C = 30 000 000 F sur 15 ans (n = 180 mois) à 9 % par an (i = 0,75 % par mois).
> (1,0075)¹⁸⁰ = 3,838 → (1,0075)^(−180) = 0,2606.
> M = 30 000 000 × 0,0075 / (1 − 0,2606) = 225 000 / 0,7394 ≈ **304 280 F par mois**.
> Total remboursé : 304 280 × 180 = 54 770 400 F → **coût du crédit ≈ 24,8 millions F**.

## Le tableau d'amortissement
Chaque mensualité contient des **intérêts** (calculés sur le capital restant dû) et un **amortissement** du capital.
| Mois | Capital restant dû | Intérêts | Amortissement |
|---|---|---|---|
| 1 | 30 000 000 | 225 000 | 79 280 |
| 2 | 29 920 720 | 224 405 | 79 875 |

Au début, la mensualité rembourse surtout des intérêts ; à la fin, surtout du capital.

## Capacité d'emprunt
Les banques limitent la mensualité à environ **33 % des revenus**. Pour 304 280 F par mois, il faut au moins 304 280 / 0,33 ≈ **922 000 F de revenus mensuels**.

> [!retenir]
> Allonger la durée diminue la mensualité mais augmente fortement le coût total du crédit. Comparez toujours le **coût total** et pas seulement la mensualité.`,
 quiz:[
  {q:"1 000 000 F placés à 10 % en intérêts composés pendant 2 ans deviennent :", o:["1 200 000 F","1 210 000 F","1 100 000 F","1 020 000 F"], r:1, e:"1 000 000 × 1,1² = 1 210 000 F."},
  {q:"Dans une mensualité constante, la part des intérêts :", o:["Augmente avec le temps","Diminue avec le temps","Reste fixe","Est nulle"], r:1, e:"Les intérêts sont calculés sur le capital restant dû, qui diminue."},
  {q:"Un taux annuel de 12 % correspond à un taux mensuel de :", o:["12 %","1 %","0,12 %","3 %"], r:1, e:"12 / 12 = 1 % par mois."},
  {q:"Le coût total d'un crédit est :", o:["La mensualité × 12","Le total des mensualités − le capital emprunté","Le capital emprunté","Le taux × la durée"], r:1, e:"C'est la somme des intérêts payés."}
 ]},
{id:'math-9', niv:3, titre:'Statistiques du contrôle qualité', duree:30, contenu:`## Pourquoi des statistiques sur un chantier ?
Les résultats d'essais (résistance du béton, densité d'un remblai, épaisseur d'un enduit) varient d'un prélèvement à l'autre. Les statistiques permettent de juger un **lot** à partir d'un **échantillon**.

## Moyenne et écart-type
$$ moyenne :  x̄ = Σ xi / n
$$ écart-type :  s = √( Σ (xi − x̄)² / (n − 1) )
Le **coefficient de variation** s / x̄ mesure la régularité de la fabrication : moins de 10 % pour un béton bien maîtrisé.

> [!exemple] Six éprouvettes écrasées à 28 jours (béton C25)
> Résultats : 30,5 · 32,0 · 28,5 · 31,0 · 33,5 · 29,5 MPa.
> Moyenne : 185 / 6 = **30,83 MPa**.
> Écarts au carré : 0,11 · 1,36 · 5,44 · 0,03 · 7,11 · 1,78 → somme 15,83.
> s = √(15,83 / 5) = **1,78 MPa** ; coefficient de variation : 1,78 / 30,83 = 5,8 %.

## La résistance caractéristique
La **résistance caractéristique** est la valeur que 95 % des résultats dépassent (fractile 5 %). Avec une loi normale :
$$ fck ≈ x̄ − 1,64 s = 30,83 − 1,64 × 1,78 = 27,9 MPa  ≥ 25 MPa ✔

> [!norme] Critère simplifié pour une petite série (NF EN 206)
> Moyenne de 3 résultats ≥ fck + 4 MPa (ici 29 MPa) et chaque résultat ≥ fck − 4 MPa (ici 21 MPa). Les résultats ci-dessus sont **conformes**.

## La loi normale en pratique
- 68 % des valeurs sont entre x̄ − s et x̄ + s ;
- 95 % entre x̄ − 2 s et x̄ + 2 s ;
- 5 % sont en dessous de x̄ − 1,64 s.

## Organiser les prélèvements
Au moins **un prélèvement de 3 éprouvettes par jour de bétonnage ou par 15 m³** pour les éléments porteurs, avec repérage précis de l'ouvrage (poteaux du RDC, dalle du R+1…).`,
 quiz:[
  {q:"L'écart-type mesure :", o:["La valeur la plus fréquente","La dispersion des résultats","La valeur maximale","Le nombre d'essais"], r:1, e:"Plus il est grand, plus les résultats sont dispersés."},
  {q:"La résistance caractéristique correspond au fractile :", o:["50 %","5 %","95 %","1 %"], r:1, e:"95 % des résultats doivent la dépasser."},
  {q:"La moyenne de 30, 32 et 34 MPa est :", o:["32 MPa","31 MPa","33 MPa","96 MPa"], r:0, e:"96 / 3 = 32 MPa."},
  {q:"Le coefficient de variation est égal à :", o:["s × moyenne","s / moyenne","moyenne / s","s²"], r:1, e:"Il s'exprime souvent en %."}
 ]}
]);

/* ---------- OUTILS MATHÉMATIQUES ---------- */
A.addChapitres('om', [
{id:'om-6', niv:1, titre:'Fonctions usuelles et lecture de graphiques', duree:25, contenu:`## Qu'est-ce qu'une fonction ?
Une fonction associe à chaque valeur x une valeur unique y = f(x). Sur un chantier : le prix en fonction de la quantité, le temps en fonction du nombre d'ouvriers, la résistance du béton en fonction de son âge.

## Fonctions linéaires et affines
- **Linéaire** : y = a x (proportionnalité). 1 m³ de béton dosé à 350 kg → 7 sacs : sacs = 7 × volume.
- **Affine** : y = a x + b. Le graphique est une droite de **pente a** qui coupe l'axe vertical en b.

> [!exemple] Livraison de sable
> Le transport coûte 25 000 F plus 12 000 F par m³ : C(x) = 12 000 x + 25 000. Pour 6 m³ : C = 72 000 + 25 000 = **97 000 F**.

## Fonction carré
y = x². L'aire d'une dalle carrée de côté a vaut a² : **doubler le côté multiplie l'aire par 4**. Le moment fléchissant dans une poutre a aussi la forme d'une parabole.

## Fonction inverse
y = k / x. Un travail de 120 heures-ouvrier dure 30 h avec 4 ouvriers, 20 h avec 6 ouvriers : le temps est **inversement proportionnel** à l'effectif.

## Une courbe qui se stabilise : le durcissement du béton
Le BAEL donne la résistance à j jours : **fcj = j / (4,76 + 0,83 j) × fc28**.
| Âge | 3 j | 7 j | 14 j | 28 j |
|---|---|---|---|---|
| fcj / fc28 | 0,41 | 0,66 | 0,85 | 1,00 |

La croissance est rapide au début puis ralentit : c'est pourquoi on garde les étais 21 à 28 jours.

## Lire un graphique : le point d'équilibre
Louer une bétonnière coûte 15 000 F par jour ; l'acheter coûte 900 000 F plus 2 000 F par jour d'entretien.
$$ 15 000 x = 900 000 + 2 000 x  →  x = 900 000 / 13 000 ≈ 69 jours
Au-delà de **69 jours d'utilisation**, l'achat devient plus intéressant : c'est l'intersection des deux droites.`,
 quiz:[
  {q:"La fonction C(x) = 12 000 x + 25 000 est :", o:["Linéaire","Affine","Carrée","Inverse"], r:1, e:"Elle a la forme a x + b avec b ≠ 0."},
  {q:"Si on double le côté d'une dalle carrée, son aire est :", o:["Doublée","Multipliée par 4","Inchangée","Multipliée par 8"], r:1, e:"(2a)² = 4a²."},
  {q:"Location 15 000 F/j contre achat 900 000 F + 2 000 F/j : l'achat devient rentable après environ :", o:["30 jours","69 jours","120 jours","60 jours"], r:1, e:"900 000 / 13 000 ≈ 69 jours."},
  {q:"D'après le BAEL, à 7 jours un béton atteint environ :", o:["25 % de fc28","66 % de fc28","95 % de fc28","100 % de fc28"], r:1, e:"7 / (4,76 + 0,83 × 7) ≈ 0,66."}
 ]},
{id:'om-7', niv:1, titre:'Taux de variation et notion de dérivée', duree:25, contenu:`## Le taux de variation moyen
Entre deux valeurs a et b, le taux de variation moyen d'une fonction f est :
$$ (f(b) − f(a)) / (b − a)
C'est une **vitesse moyenne** : un camion qui parcourt 90 km en 2 h roule en moyenne à 45 km/h.

## La dérivée : un taux de variation instantané
Quand l'intervalle devient très petit, le taux de variation tend vers la **dérivée** f'(x). Graphiquement, c'est la **pente de la tangente** à la courbe au point x.

## Les règles de base
| Fonction | Dérivée |
|---|---|
| constante k | 0 |
| a x + b | a |
| x² | 2x |
| x³ | 3x² |
| xⁿ | n xⁿ⁻¹ |
| u + v | u' + v' |

## Exemples au bâtiment
> [!exemple] Remplissage d'une citerne
> Volume (m³) en fonction du temps t (h) : V(t) = 0,5 t² + 2 t. Le débit est la dérivée : V'(t) = t + 2. À t = 4 h, le débit vaut **6 m³/h**.

> [!exemple] Moment dans une poutre
> M(x) = 10 x − x² (kN·m) sur une poutre de 10 m. La dérivée V(x) = 10 − 2x est l'**effort tranchant**. Elle s'annule en x = 5 m : le moment y est maximal, **M(5) = 25 kN·m**.

> [!retenir]
> Là où la dérivée s'annule, la fonction passe par un **maximum ou un minimum**. C'est la méthode qui permet de trouver l'endroit le plus sollicité d'une poutre ou la dimension la plus économique.`,
 quiz:[
  {q:"La dérivée de x³ est :", o:["3x","x²","3x²","x³/3"], r:2, e:"(xⁿ)' = n xⁿ⁻¹."},
  {q:"La dérivée de 5x + 2 est :", o:["5","2","5x","0"], r:0, e:"La dérivée d'une fonction affine est sa pente."},
  {q:"M(x) = 10x − x² est maximal pour :", o:["x = 10","x = 5","x = 0","x = 2"], r:1, e:"M'(x) = 10 − 2x = 0 pour x = 5."},
  {q:"La dérivée du volume par rapport au temps est :", o:["La pression","Le débit","La masse","La vitesse du son"], r:1, e:"Débit = dV/dt."}
 ]},
{id:'om-8', niv:3, titre:'Méthodes numériques : Newton, trapèzes et Simpson', duree:30, contenu:`## Quand le calcul exact est impossible
Beaucoup d'équations de dimensionnement n'ont pas de solution « à la main » (hauteur d'eau dans un caniveau, profondeur d'une palplanche, équation du 3e degré). On les résout **pas à pas** avec une précision choisie.

## Résoudre f(x) = 0
- **Dichotomie** : on encadre la solution entre a et b tels que f(a) et f(b) soient de signes contraires, puis on coupe l'intervalle en deux à chaque étape.
- **Méthode de Newton** : on part d'une valeur proche x0 et on améliore :
$$ x(n+1) = x(n) − f(x(n)) / f'(x(n))

> [!exemple] Équation x³ − 2x − 5 = 0
> f'(x) = 3x² − 2. Départ x0 = 2 : f(2) = −1, f'(2) = 10 → x1 = 2,1.
> f(2,1) = 0,061, f'(2,1) = 11,23 → x2 = 2,1 − 0,0054 = **2,0946**. Deux itérations suffisent pour 4 décimales.

## Calculer une intégrale : volumes de terrassement
On connaît les **surfaces de profils en travers** tous les h mètres le long d'une plateforme ou d'une route.
$$ Trapèzes :  V ≈ h × [ (S0 + Sn)/2 + S1 + … + S(n−1) ]
$$ Simpson :  V ≈ h/3 × [ S0 + 4 S1 + 2 S2 + 4 S3 + … + Sn ]   (nombre d'intervalles pair)

> [!exemple] Déblai d'une voie d'accès
> Profils tous les 10 m : 12 · 17 · 19 · 13 · 9 m².
> Trapèzes : 10 × [(12 + 9)/2 + 17 + 19 + 13] = 10 × 59,5 = **595 m³**.
> Simpson : 10/3 × [12 + 4×17 + 2×19 + 4×13 + 9] = 10/3 × 179 = **596,7 m³**.

## Précision et vérification
- Diminuer le pas h améliore la précision.
- Simpson est plus précis que les trapèzes pour des profils réguliers.
- Toujours **contrôler l'ordre de grandeur** d'un résultat de logiciel par un calcul simple.`,
 quiz:[
  {q:"La méthode de Newton utilise :", o:["f et sa dérivée f'","Seulement f","L'intégrale de f","Un tirage au hasard"], r:0, e:"x(n+1) = x(n) − f/f'."},
  {q:"La méthode de Simpson exige :", o:["Un nombre pair d'intervalles","Un seul intervalle","Des profils nuls","Des pas différents"], r:0, e:"Les coefficients 1-4-2-4-…-1 vont par paires d'intervalles."},
  {q:"La dichotomie consiste à :", o:["Couper l'intervalle de recherche en deux à chaque étape","Dériver deux fois","Calculer une aire","Tirer des nombres au hasard"], r:0, e:"On garde la moitié où la fonction change de signe."},
  {q:"Profils 10 et 14 m² distants de 20 m : volume par les trapèzes :", o:["240 m³","480 m³","120 m³","280 m³"], r:0, e:"20 × (10 + 14)/2 = 240 m³."}
 ]},
{id:'om-9', niv:3, titre:'Calcul matriciel des structures : la méthode des déplacements', duree:35, contenu:`## Le principe
Les logiciels de structure (Robot, SAP2000, Etabs) découpent l'ouvrage en **éléments** reliés par des **nœuds**. Pour chaque élément, on écrit la relation entre les forces aux nœuds et les déplacements. En assemblant tous les éléments :
$$ [F] = [K] × [u]
F : forces appliquées, K : **matrice de rigidité** de la structure, u : déplacements inconnus.

## L'élément barre (traction-compression)
La rigidité d'une barre de longueur L, de section A et de module E est **k = E A / L**. Sa matrice élémentaire relie les deux nœuds :
$$ k × [ 1  −1 ; −1  1 ]

> [!exemple] Deux barres en série
> Nœud 1 encastré ; barre 1 (k1 = 20 000 kN/m) entre les nœuds 1 et 2 ; barre 2 (k2 = 10 000 kN/m) entre 2 et 3 ; force P = 10 kN au nœud 3.
> Après suppression du nœud bloqué : [K] = [ 30 000  −10 000 ; −10 000  10 000 ], [F] = [0 ; 10].
> Résolution : u3 = 3 u2 et 20 000 u2 = 10 → **u2 = 0,5 mm**, **u3 = 1,5 mm**.
> Efforts : N1 = k1 × u2 = 10 kN ; N2 = k2 × (u3 − u2) = 10 kN (la même force traverse les deux barres ✔).

## L'élément poutre
Pour une poutre fléchie, chaque nœud a une flèche et une rotation. La matrice élémentaire (4 × 4) contient les termes **12 EI/L³, 6 EI/L², 4 EI/L et 2 EI/L** : ce sont les mêmes coefficients que dans les formules de la RDM (encastrements, flèches).

## Les étapes d'un calcul
1. Modéliser (nœuds, éléments, appuis, matériaux, sections) ;
2. Assembler [K] et le vecteur des charges [F] ;
3. Appliquer les conditions d'appui (déplacements bloqués) ;
4. Résoudre le système [K][u] = [F] ;
5. En déduire les **efforts** (N, V, M) et les réactions.

> [!attention]
> Un logiciel donne toujours un résultat, même avec une erreur de saisie. Vérifiez l'**équilibre** (somme des réactions = somme des charges) et comparez avec un calcul manuel simplifié.`,
 quiz:[
  {q:"La méthode des déplacements résout le système :", o:["[F] = [K] × [u]","[u] = [F] + [K]","E = σ / ε","M = qL²/8"], r:0, e:"K est la matrice de rigidité."},
  {q:"La rigidité axiale d'une barre vaut :", o:["E A / L","E I / L³","A / E L","L / E A"], r:0, e:"k = EA/L."},
  {q:"Dans l'exemple des deux barres en série, le déplacement du nœud 3 vaut :", o:["0,5 mm","1,0 mm","1,5 mm","3,0 mm"], r:2, e:"u3 = 10/20 000 + 10/10 000 = 1,5 mm."},
  {q:"Le meilleur contrôle d'un calcul par logiciel est :", o:["Vérifier l'équilibre global et l'ordre de grandeur","Relancer le calcul","Changer de logiciel","Augmenter les sections"], r:0, e:"Somme des réactions = somme des charges."}
 ]}
]);

/* ---------- SCIENCES PHYSIQUES (niveau avancé) ---------- */
A.addChapitres('sp', [
{id:'sp-7', niv:3, titre:'Électricité avancée : triphasé, chute de tension, sections', duree:30, contenu:`## Monophasé et triphasé
- **Monophasé** (230 V) : P = U × I × cos φ. Maisons et petits locaux.
- **Triphasé** (400 V entre phases) : P = √3 × U × I × cos φ. Immeubles, ateliers, pompes, ascenseurs.

> [!exemple] Immeuble de 30 kW (cos φ = 0,9)
> En triphasé : I = 30 000 / (1,732 × 400 × 0,9) = **48 A** par phase.
> En monophasé il faudrait I = 30 000 / (230 × 0,9) = 145 A : des câbles trois fois plus gros.

## La chute de tension
Un câble long et fin provoque une chute de tension qui fait mal fonctionner les appareils. En monophasé (calcul simplifié) :
$$ ΔU = 2 × ρ × L × I / S     avec ρ = 0,0225 Ω·mm²/m pour le cuivre en service

> [!exemple] Circuit de prises 20 A, 25 m de câble 2,5 mm²
> ΔU = 2 × 0,0225 × 25 × 20 / 2,5 = **9,0 V**, soit 9 / 230 = 3,9 % → acceptable pour des prises (limite 5 %), mais **pas pour de l'éclairage** (limite 3 %).
> Plaque de cuisson 32 A sur 15 m de 6 mm² : ΔU = 3,6 V (1,6 %) ✔.

## Choisir la section
| Section cuivre | Protection maximale | Usage courant |
|---|---|---|
| 1,5 mm² | 16 A | Éclairage |
| 2,5 mm² | 20 A | Prises, chauffe-eau |
| 4 mm² | 25 A | Lignes longues, climatiseurs |
| 6 mm² | 32 A | Plaque de cuisson |

La section doit à la fois supporter le **courant** (échauffement) et limiter la **chute de tension**.

## Protection des personnes
- Dispositif **différentiel 30 mA** en tête des circuits ;
- **Prise de terre** de résistance inférieure à 100 Ω, reliée à toutes les masses métalliques ;
- En triphasé, **répartir les circuits** sur les trois phases pour équilibrer les courants.`,
 quiz:[
  {q:"En triphasé 400 V, la puissance vaut :", o:["U × I","√3 × U × I × cos φ","3 × U × I","U × I × cos φ / √3"], r:1, e:"P = √3 U I cos φ."},
  {q:"25 m de 2,5 mm² parcourus par 20 A donnent une chute de tension d'environ :", o:["2 V","9 V","25 V","0,9 V"], r:1, e:"2 × 0,0225 × 25 × 20 / 2,5 = 9 V."},
  {q:"La chute de tension maximale conseillée pour l'éclairage est :", o:["1 %","3 %","10 %","20 %"], r:1, e:"3 % pour l'éclairage, 5 % pour les autres usages."},
  {q:"Le principal avantage du triphasé pour un immeuble est :", o:["Un courant plus faible dans chaque conducteur","Une tension plus faible","Pas besoin de terre","Moins de disjoncteurs"], r:0, e:"À puissance égale, le courant par phase est environ 3 fois plus faible."}
 ]},
{id:'sp-8', niv:3, titre:'Chaleur, changements d\'état et dilatation', duree:25, contenu:`## Quantité de chaleur
$$ Q = m × c × ΔT
c est la **capacité thermique massique** : eau 4 180 J/(kg·K), béton ≈ 880, acier ≈ 460.

> [!exemple] Chauffe-eau de 100 litres
> Chauffer 100 kg d'eau de 25 à 60 °C : Q = 100 × 4 180 × 35 = 14,6 MJ = **4,06 kWh**. Avec une résistance de 1 500 W, il faut 4,06 / 1,5 ≈ **2 h 40**.

## Les changements d'état
Pour évaporer l'eau, il faut lui fournir de la chaleur sans que sa température change : c'est la **chaleur latente** (2 257 kJ par kg d'eau).
- L'évaporation **refroidit** : un toit mouillé ou une jarre en terre cuite restent plus frais.
- Un béton frais exposé au soleil et au vent **perd son eau** par évaporation avant d'avoir durci : d'où l'importance de la **cure** (arrosage, film, bâche).

## La chaleur d'hydratation du ciment
La prise du ciment dégage de la chaleur (environ 400 kJ par kg de ciment au total). Dans une pièce massive (radier, grosse semelle), le cœur chauffe plus que la surface : la différence de température peut provoquer des **fissures thermiques**. Solutions : ciment à faible chaleur d'hydratation, coulage le soir, refroidissement par arrosage.

## La dilatation thermique
$$ ΔL = α × L × ΔT
| Matériau | α (par °C) |
|---|---|
| Béton | 1,0 × 10⁻⁵ |
| Acier | 1,2 × 10⁻⁵ |
| Aluminium | 2,3 × 10⁻⁵ |
| PVC | 7 × 10⁻⁵ |

> [!retenir]
> Le béton et l'acier se dilatent presque autant : c'est ce qui rend le **béton armé** possible sans que les aciers se décollent.

> [!exemple]
> Gouttière en PVC de 10 m, écart de 40 °C : ΔL = 7 × 10⁻⁵ × 10 × 40 = **28 mm** → prévoir des manchons de dilatation. Dalle de 30 m : ΔL = 1 × 10⁻⁵ × 30 × 30 = 9 mm.`,
 quiz:[
  {q:"La chaleur pour chauffer un corps de ΔT vaut :", o:["Q = m c ΔT","Q = m g h","Q = U I t","Q = ρ V"], r:0, e:"m masse, c capacité thermique massique."},
  {q:"Le béton armé fonctionne notamment parce que :", o:["Le béton et l'acier ont des coefficients de dilatation voisins","L'acier ne rouille jamais","Le béton est léger","L'acier est isolant"], r:0, e:"≈ 1 × 10⁻⁵ et 1,2 × 10⁻⁵ par °C."},
  {q:"L'évaporation de l'eau :", o:["Absorbe de la chaleur et refroidit","Dégage de la chaleur","N'a aucun effet thermique","Augmente la température du béton"], r:0, e:"Chaleur latente de vaporisation : 2 257 kJ/kg."},
  {q:"Parmi ces matériaux, celui qui se dilate le plus est :", o:["Le béton","L'acier","Le PVC","La pierre"], r:2, e:"α PVC ≈ 7 × 10⁻⁵ /°C."}
 ]},
{id:'sp-9', niv:3, titre:'Ondes : le son et la lumière', duree:25, contenu:`## Caractériser une onde
- **Fréquence f** (Hz) : nombre d'oscillations par seconde ; **période** T = 1/f.
- **Célérité c** : vitesse de propagation.
- **Longueur d'onde** λ = c / f.

## Le son
Il se propage dans l'air à environ **340 m/s** (plus vite dans l'eau et dans le béton). L'oreille entend de 20 à 20 000 Hz.
| Fréquence | Longueur d'onde dans l'air |
|---|---|
| 100 Hz (grave) | 3,4 m |
| 1 000 Hz | 0,34 m |
| 4 000 Hz (aigu) | 8,5 cm |

Les sons graves, de grande longueur d'onde, **traversent et contournent** plus facilement les obstacles : ils sont les plus difficiles à isoler.

## Niveau sonore en décibels
$$ L = 10 log (I / I0)
Deux sources identiques ajoutent **3 dB** ; dix sources identiques ajoutent 10 dB.

## La lumière
- Célérité : 300 000 km/s ; spectre visible de **400 nm (violet) à 700 nm (rouge)**.
- Les **ultraviolets** dégradent les peintures et les PVC ; les **infrarouges** transportent la chaleur.
- Un vitrage à **contrôle solaire** laisse passer la lumière visible mais réfléchit une partie des infrarouges.

## Réflexion et absorption : la couleur des toitures
Une surface claire réfléchit le rayonnement (albédo élevé), une surface sombre l'absorbe.
> [!exemple]
> Sous 1 000 W/m² de soleil, une toiture claire (albédo 0,7) absorbe **300 W/m²**, une toiture sombre (albédo 0,2) absorbe **800 W/m²**. La différence se ressent directement sous le toit.

## L'éclairement
Mesuré en **lux** (lumens par m²). Pour une source ponctuelle, l'éclairement diminue avec le carré de la distance : **E = I / d²**. Une lampe de 1 000 candelas à 2 m donne 1 000 / 4 = 250 lux.`,
 quiz:[
  {q:"Pour un son de 170 Hz dans l'air (340 m/s), la longueur d'onde est :", o:["0,5 m","2 m","170 m","57 800 m"], r:1, e:"λ = c/f = 340/170 = 2 m."},
  {q:"Les sons les plus difficiles à isoler sont :", o:["Les aigus","Les graves","Les ultrasons","Ceux de 1 000 Hz"], r:1, e:"Leur grande longueur d'onde leur permet de traverser et contourner les obstacles."},
  {q:"Une toiture sombre, par rapport à une toiture claire :", o:["Absorbe davantage le rayonnement solaire","Réfléchit davantage","Ne change rien","Isole mieux"], r:0, e:"Son albédo est faible."},
  {q:"Si on double la distance à une lampe, l'éclairement est :", o:["Divisé par 2","Divisé par 4","Inchangé","Multiplié par 2"], r:1, e:"E = I / d²."}
 ]}
]);

/* ---------- RECHERCHE OPÉRATIONNELLE ---------- */
A.addChapitres('ro', [
{id:'ro-7', niv:1, titre:'Organiser des tâches : antériorités et Gantt', duree:25, contenu:`## Découper le travail
Avant de planifier, on liste les **tâches**, leur **durée** et leurs **antériorités** (ce qui doit être terminé avant de commencer).

> [!exemple] Fondations d'une petite maison
| Tâche | Durée | Après |
|---|---|---|
| A. Implantation | 1 j | — |
| B. Fouilles | 3 j | A |
| C. Béton de propreté | 1 j | B |
| D. Façonnage des aciers des semelles | 2 j | A |
| E. Coulage des semelles | 1 j | C et D |
| F. Longrines | 3 j | E |

## Calculer les dates au plus tôt
- A : jours 0 à 1 ; B : 1 à 4 ; C : 4 à 5 ; D : 1 à 3 ;
- E commence quand C **et** D sont finies : au jour 5, finit au jour 6 ;
- F : jours 6 à 9. **Durée totale : 9 jours**.

La tâche D pourrait finir jusqu'au jour 5 sans retarder E : elle a **2 jours de marge**. Les tâches sans marge (A, B, C, E, F) sont **critiques**.

## Le diagramme de Gantt
Chaque tâche est une **barre** placée sur une échelle de temps (jours ou semaines). On y ajoute :
- les **jalons** (réception des fouilles, coulage) ;
- l'**avancement réel** (barre remplie) pour comparer au prévu ;
- les jours non travaillés (dimanches, fêtes) et les risques de pluie.

## Bonnes pratiques
- Des tâches de 1 à 10 jours, avec un responsable chacune ;
- Prévoir les **délais de séchage** (béton) et d'approvisionnement ;
- Mettre à jour le planning chaque semaine en réunion de chantier.

!fig:gantt|Diagramme de Gantt d'un chantier`,
 quiz:[
  {q:"Dans l'exemple, la tâche E peut commencer :", o:["Après A","Quand C et D sont terminées","Au jour 0","Après F"], r:1, e:"E a deux antériorités : C et D."},
  {q:"La durée totale des fondations de l'exemple est :", o:["6 jours","9 jours","11 jours","8 jours"], r:1, e:"Fin de F au jour 9."},
  {q:"La marge de la tâche D est :", o:["0 jour","2 jours","3 jours","5 jours"], r:1, e:"D finit au jour 3 et E ne commence qu'au jour 5."},
  {q:"Un diagramme de Gantt représente :", o:["Les tâches par des barres sur une échelle de temps","Les efforts dans une poutre","Le plan de masse","Les prix unitaires"], r:0, e:"C'est l'outil de planning le plus utilisé."}
 ]},
{id:'ro-8', niv:1, titre:'Graphes et plus court chemin', duree:25, contenu:`## Le vocabulaire des graphes
Un **graphe** est un ensemble de **sommets** reliés par des **arêtes** (ou des arcs s'il y a un sens). Chaque arête peut porter un **poids** : distance, durée, coût. Les graphes servent à organiser les livraisons, tracer des réseaux d'eau ou de câbles, enchaîner des tâches.

## Le plus court chemin : algorithme de Dijkstra
On part d'un sommet de départ et on « fixe » à chaque étape le sommet le plus proche non encore traité, en mettant à jour les distances de ses voisins.

> [!exemple] De la carrière D au chantier C
> Routes : D–A 12 km, D–B 7 km, B–A 3 km, A–C 8 km, B–E 10 km, E–C 4 km.
> 1. D = 0 ; voisins : A = 12, B = 7.
> 2. On fixe B (7) : A devient min(12 ; 7 + 3) = 10 ; E = 17.
> 3. On fixe A (10) : C = 18.
> 4. On fixe E (17) : C reste min(18 ; 21) = 18.
> **Plus court chemin : D → B → A → C = 18 km.**

## L'arbre couvrant minimal : relier au moindre coût
Pour raccorder plusieurs bâtiments à un réseau (eau, électricité, fibre) avec le moins de longueur possible, on choisit les liaisons les plus courtes **sans former de boucle** (algorithme de Kruskal).

> [!exemple] Quatre bâtiments
> Distances : A–B 40 m, A–C 35 m, A–D 60 m, B–C 25 m, B–D 30 m, C–D 45 m.
> On retient B–C (25), puis B–D (30), puis A–C (35) : les quatre bâtiments sont reliés avec **90 m** de tranchée.

> [!retenir]
> Plus court chemin : aller d'un point à un autre. Arbre couvrant : relier **tous** les points entre eux au moindre coût.`,
 quiz:[
  {q:"Dans l'exemple, le plus court chemin de D à C mesure :", o:["20 km","18 km","21 km","19 km"], r:1, e:"D → B → A → C = 7 + 3 + 8 = 18 km."},
  {q:"Dans un graphe, les points s'appellent :", o:["Des sommets","Des arcs","Des poids","Des nœuds de charpente"], r:0, e:"Ils sont reliés par des arêtes ou des arcs."},
  {q:"L'arbre couvrant minimal de l'exemple a une longueur totale de :", o:["90 m","100 m","120 m","65 m"], r:0, e:"25 + 30 + 35 = 90 m."},
  {q:"Pour raccorder tous les bâtiments d'un site au moindre coût, on cherche :", o:["Un plus court chemin","Un arbre couvrant minimal","Un chemin critique","Une matrice de rigidité"], r:1, e:"Algorithme de Kruskal ou de Prim."}
 ]},
{id:'ro-9', niv:3, titre:'Décider dans l\'incertain : risques et simulation', duree:30, contenu:`## La matrice de décision
Quand le résultat d'un choix dépend d'événements incertains (météo, prix du ciment, délais de livraison), on construit une **matrice** : décisions en lignes, scénarios en colonnes, conséquences (coûts ou gains) dans les cases.

> [!exemple] Couler une dalle en saison des pluies (coûts en millions de F)
| Décision | Pluie forte (p = 0,3) | Normale (p = 0,5) | Sèche (p = 0,2) |
|---|---|---|---|
| A. Couler maintenant | 3,0 | 1,0 | 0,5 |
| B. Attendre 3 semaines | 1,5 | 1,5 | 1,5 |
| C. Couler sous abri bâché | 1,2 | 1,1 | 1,0 |

## Les critères de choix
- **Espérance** (avec probabilités) : A = 0,9 + 0,5 + 0,1 = 1,5 ; B = 1,5 ; C = 0,36 + 0,55 + 0,20 = **1,11** → C.
- **Pessimiste (minimax)** : on retient la décision dont le pire cas est le moins mauvais : A 3,0 ; B 1,5 ; **C 1,2** → C.
- **Optimiste** : meilleur cas le plus favorable → A (0,5), un pari risqué.

## Durées incertaines : la méthode PERT probabiliste
Pour chaque tâche on estime une durée optimiste a, probable m et pessimiste b :
$$ te = (a + 4m + b) / 6      σ = (b − a) / 6
> [!exemple] Maçonnerie : a = 10 j, m = 14 j, b = 24 j → te = 90 / 6 = **15 j**, σ = 14 / 6 = 2,3 j.

Sur le chemin critique, on additionne les durées moyennes et les **variances** (σ²). Si la durée prévue est de 60 jours avec σ = 4 jours, la probabilité de finir en 66 jours se lit sur la loi normale pour z = (66 − 60)/4 = 1,5 : **environ 93 %**.

## La simulation de Monte-Carlo
Un tableur tire au hasard des milliers de durées pour chaque tâche et recalcule le planning : on obtient la **courbe de probabilité** de la date de fin.

## Le registre des risques
Pour chaque risque : probabilité × gravité, mesure de prévention, responsable. Exemples : pluie sur les fouilles, rupture de ciment, vol de matériel, accident.`,
 quiz:[
  {q:"La durée moyenne PERT d'une tâche (a = 10, m = 14, b = 24) vaut :", o:["14 j","15 j","16 j","24 j"], r:1, e:"(10 + 56 + 24)/6 = 15 j."},
  {q:"Le critère pessimiste (minimax) consiste à :", o:["Choisir la décision dont le pire résultat est le moins mauvais","Choisir le meilleur cas","Faire la moyenne sans probabilités","Tirer au sort"], r:0, e:"C'est le critère de prudence."},
  {q:"Dans l'exemple, le coût moyen de la décision C est :", o:["1,11 M","1,50 M","1,20 M","1,00 M"], r:0, e:"0,3×1,2 + 0,5×1,1 + 0,2×1,0 = 1,11."},
  {q:"Une simulation de Monte-Carlo consiste à :", o:["Recalculer le planning avec des milliers de tirages aléatoires","Compter les ouvriers","Dessiner un Gantt","Calculer une dérivée"], r:0, e:"On obtient une distribution des dates de fin."}
 ]}
]);
