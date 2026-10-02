/* =====================================================================
   Outils mathématiques — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"om",
 titre:"Outils mathématiques",
 court:"Outils maths",
 groupe:"fond",
 icone:"fx",
 couleur:"#5B45A8",
 niveau:"Intermédiaire",
 heures:22,
 ordre:2,
 prerequis:["math"],
 resume:"Dérivées, intégrales, vecteurs, matrices et équations différentielles : les outils de l'ingénieur pour la RDM, la MMC et le calcul des structures.",
 objectifs:[
  "Dériver une fonction et trouver un extremum (moment maximal)",
  "Intégrer pour obtenir une résultante, un centre de gravité, un moment d'inertie",
  "Manipuler vecteurs, produits scalaire et vectoriel",
  "Résoudre un système linéaire par la méthode de Gauss",
  "Comprendre les équations différentielles de la déformée et des vibrations"
 ],
 applications:[
  "Position du moment maximal dans une poutre",
  "Moment d'inertie d'une section",
  "Moments des forces et équilibre",
  "Calcul matriciel des structures (logiciels de calcul)"
 ],
 chapitres:[
{id:"om-3", niv:1, titre:"Vecteurs, forces et moments", duree:30, contenu:`## Vecteurs
Un vecteur possède une **direction**, un **sens** et une **norme**. Dans le plan : V = (Vx ; Vy), norme ‖V‖ = √(Vx² + Vy²).
- Addition : (a ; b) + (c ; d) = (a + c ; b + d).
- Une force F inclinée d'un angle α sur l'horizontale : Fx = F cos α, Fy = F sin α.

!fig:forces|Composition de deux forces

## Produit scalaire
$$ U · V = Ux Vx + Uy Vy = ‖U‖ ‖V‖ cos θ
- Nul si les vecteurs sont **perpendiculaires**.
- Le **travail** d'une force est un produit scalaire : W = F · d.

## Moment d'une force
Le moment d'une force F par rapport à un point O mesure son **effet de rotation** :
$$ M = F × d   (d : bras de levier, distance perpendiculaire de O à la ligne d'action)
En coordonnées (O à l'origine, point d'application (x ; y)) : **M = x Fy − y Fx** (positif dans le sens trigonométrique).

> [!exemple] Clé de serrage
> Une force de 200 N au bout d'une clé de 0,30 m produit M = 200 × 0,30 = **60 N·m**.

> [!exemple] Réaction d'une console
> Une console de 2 m porte 15 kN en bout. Moment à l'encastrement : 15 × 2 = **30 kN·m**.

## Produit vectoriel (en 3D)
M = r ∧ F : vecteur perpendiculaire au plan (r, F), de norme r F sin θ. Il sert en 3D (calcul de structures spatiales, torsion).

> [!retenir]
> Une structure est en équilibre si la **somme des forces** est nulle **et** la **somme des moments** est nulle (principe fondamental de la statique).`, quiz:[
  {q:"Norme du vecteur (3 ; 4) :", o:["7", "5", "12", "1"], r:1, e:"√(9 + 16) = 5."},
  {q:"Le produit scalaire de deux vecteurs perpendiculaires vaut :", o:["1", "0", "Leur produit", "−1"], r:1, e:"cos 90° = 0."},
  {q:"Une force de 10 kN à 3 m d'un point produit un moment de :", o:["3,3 kN·m", "13 kN·m", "30 kN·m", "7 kN·m"], r:2, e:"M = F × d = 10 × 3 = 30 kN·m."},
  {q:"La composante verticale d'une force F inclinée de α sur l'horizontale est :", o:["F cos α", "F sin α", "F tan α", "F / sin α"], r:1, e:"Fy = F sin α."}
 ]},

{id:"om-6", niv:1, titre:"Fonctions usuelles et lecture de graphiques", duree:25, contenu:`## Qu'est-ce qu'une fonction ?
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
Au-delà de **69 jours d'utilisation**, l'achat devient plus intéressant : c'est l'intersection des deux droites.`, quiz:[
  {q:"La fonction C(x) = 12 000 x + 25 000 est :", o:["Linéaire", "Affine", "Carrée", "Inverse"], r:1, e:"Elle a la forme a x + b avec b ≠ 0."},
  {q:"Si on double le côté d'une dalle carrée, son aire est :", o:["Doublée", "Multipliée par 4", "Inchangée", "Multipliée par 8"], r:1, e:"(2a)² = 4a²."},
  {q:"Location 15 000 F/j contre achat 900 000 F + 2 000 F/j : l'achat devient rentable après environ :", o:["30 jours", "69 jours", "120 jours", "60 jours"], r:1, e:"900 000 / 13 000 ≈ 69 jours."},
  {q:"D'après le BAEL, à 7 jours un béton atteint environ :", o:["25 % de fc28", "66 % de fc28", "95 % de fc28", "100 % de fc28"], r:1, e:"7 / (4,76 + 0,83 × 7) ≈ 0,66."}
 ]},

{id:"om-7", niv:1, titre:"Taux de variation et notion de dérivée", duree:25, contenu:`## Le taux de variation moyen
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
> Là où la dérivée s'annule, la fonction passe par un **maximum ou un minimum**. C'est la méthode qui permet de trouver l'endroit le plus sollicité d'une poutre ou la dimension la plus économique.`, quiz:[
  {q:"La dérivée de x³ est :", o:["3x", "x²", "3x²", "x³/3"], r:2, e:"(xⁿ)' = n xⁿ⁻¹."},
  {q:"La dérivée de 5x + 2 est :", o:["5", "2", "5x", "0"], r:0, e:"La dérivée d'une fonction affine est sa pente."},
  {q:"M(x) = 10x − x² est maximal pour :", o:["x = 10", "x = 5", "x = 0", "x = 2"], r:1, e:"M'(x) = 10 − 2x = 0 pour x = 5."},
  {q:"La dérivée du volume par rapport au temps est :", o:["La pression", "Le débit", "La masse", "La vitesse du son"], r:1, e:"Débit = dV/dt."}
 ]},

{id:"om-1", niv:2, titre:"Dérivées et recherche d'extremum", duree:30, contenu:`## Définition
La dérivée f'(x) mesure la **vitesse de variation** de f au point x : c'est la pente de la tangente à la courbe.

| Fonction f(x) | Dérivée f'(x) |
|---|---|
| constante k | 0 |
| xⁿ | n xⁿ⁻¹ |
| a x + b | a |
| √x | 1 / (2√x) |
| sin x | cos x |
| eˣ | eˣ |
| ln x | 1 / x |

Règles : (u + v)' = u' + v' ; (k u)' = k u' ; (u v)' = u'v + u v' ; (u/v)' = (u'v − u v')/v².

## Extremum : là où la dérivée s'annule
Une fonction atteint un **maximum ou un minimum** là où f'(x) = 0 (et où la dérivée change de signe).

> [!exemple] Moment maximal d'une poutre
> Poutre sur deux appuis de portée L, charge uniforme q. Le moment à l'abscisse x vaut :
> M(x) = (q L / 2) x − q x² / 2
> Sa dérivée est l'**effort tranchant** : V(x) = M'(x) = q L / 2 − q x.
> V(x) = 0 pour x = L/2 → M max = (qL/2)(L/2) − q(L/2)²/2 = **q L² / 8**.

!fig:moments|Effort tranchant (dérivée) et moment (parabole)

> [!retenir]
> En RDM : **le moment est maximal là où l'effort tranchant s'annule**, car V = dM/dx.

## Optimisation
> [!exemple] Bac de stockage
> Avec une tôle carrée de 1,20 m de côté, on découpe un carré x aux 4 coins et on replie. Volume : V(x) = x (1,2 − 2x)².
> V'(x) = (1,2 − 2x)² − 4x(1,2 − 2x) = (1,2 − 2x)(1,2 − 6x) = 0 → x = **0,20 m**.
> V max = 0,2 × 0,8² = **0,128 m³** (128 litres).

## Dérivée et petites variations
Pour une petite variation dx : **df ≈ f'(x) dx**. Exemple : si le diamètre d'une barre varie de 0,5 mm autour de 12 mm, la section A = πd²/4 varie de dA = (πd/2) dd = π × 12/2 × 0,5 ≈ 9,4 mm² (environ 8 %).`, quiz:[
  {q:"La dérivée de 3x² est :", o:["3x", "6x", "x³", "6"], r:1, e:"(xⁿ)' = n xⁿ⁻¹ donc (3x²)' = 6x."},
  {q:"Dans une poutre, la dérivée du moment fléchissant est :", o:["La flèche", "L'effort normal", "L'effort tranchant", "La charge"], r:2, e:"V(x) = dM/dx."},
  {q:"Le moment maximal d'une poutre sur deux appuis sous charge uniforme q vaut :", o:["qL/2", "qL²/2", "qL²/8", "qL²/12"], r:2, e:"Il est atteint à mi-portée : qL²/8."},
  {q:"Un extremum de f se trouve là où :", o:["f(x) = 0", "f'(x) = 0", "f''(x) = 1", "x = 0"], r:1, e:"La tangente est horizontale : la dérivée s'annule."}
 ]},

{id:"om-2", niv:2, titre:"Intégrales : résultantes, centres de gravité, inerties", duree:35, contenu:`## Primitive et intégrale
F est une primitive de f si F' = f. L'intégrale de a à b vaut :
$$ ∫ab f(x) dx = F(b) − F(a)
Elle représente l'**aire algébrique** sous la courbe de f entre a et b.

Primitives usuelles : xⁿ → xⁿ⁺¹/(n+1) ; 1/x → ln x ; eˣ → eˣ ; cos x → sin x.

## Résultante d'une charge répartie
Une charge répartie q(x) (en kN/m) a pour **résultante** R = ∫ q(x) dx, appliquée au **centre de gravité** du diagramme de charge.

> [!exemple] Charge triangulaire (poussée des terres, pression de l'eau)
> q(x) = q₀ x / L sur une longueur L : R = ∫₀ᴸ q₀ x/L dx = q₀ L / 2, appliquée à **2L/3** de l'origine (au tiers côté q₀).

## Centre de gravité d'une surface
$$ xG = ∫ x dA / A    et    yG = ∫ y dA / A
Pour une surface composée, on utilise les sommes : yG = Σ(Aᵢ yᵢ) / Σ Aᵢ.

> [!exemple] Section en T
> Table 60 × 10 cm (A₁ = 600 cm², y₁ = 35 cm) et âme 20 × 30 cm (A₂ = 600 cm², y₂ = 15 cm) depuis la base.
> yG = (600 × 35 + 600 × 15) / 1 200 = **25 cm**.

## Moment quadratique (moment d'inertie)
$$ I = ∫ y² dA
Pour un rectangle b × h autour de son axe central : I = ∫ y² b dy de −h/2 à h/2 = **b h³ / 12**.
Théorème de **Huygens** : I(Δ) = I(G) + A d² (d : distance entre les axes).

> [!exemple]
> Poutre 20 × 40 cm : I = 20 × 40³ / 12 = **106 667 cm⁴**. En doublant la hauteur, I est multiplié par 8 : c'est pourquoi on augmente la **hauteur** d'une poutre plutôt que sa largeur.

## Intégration numérique (méthode des trapèzes)
Quand on ne connaît f qu'en des points (relevé topographique, profil), on approche l'aire par des trapèzes :
$$ S ≈ h × (y₀/2 + y₁ + y₂ + … + yₙ₋₁ + yₙ/2)
Exemple : profondeurs relevées tous les 5 m : 0 ; 1,2 ; 1,8 ; 1,5 ; 0 → S ≈ 5 × (0 + 1,2 + 1,8 + 1,5 + 0) = **22,5 m²** de section de fouille.`, quiz:[
  {q:"Le moment quadratique d'un rectangle b × h vaut :", o:["bh²/6", "bh³/12", "b³h/3", "bh/2"], r:1, e:"I = bh³/12 autour de l'axe central parallèle à b."},
  {q:"Résultante d'une charge uniforme de 5 kN/m sur 4 m :", o:["20 kN", "1,25 kN", "9 kN", "40 kN"], r:0, e:"R = q × L = 5 × 4 = 20 kN."},
  {q:"Si on double la hauteur d'une poutre rectangulaire, son inertie est multipliée par :", o:["2", "4", "8", "16"], r:2, e:"I est proportionnel à h³ : 2³ = 8."},
  {q:"Une primitive de x² est :", o:["2x", "x³/3", "x³", "3x²"], r:1, e:"La dérivée de x³/3 est x²."}
 ]},

{id:"om-4", niv:2, titre:"Matrices et systèmes linéaires", duree:30, contenu:`## Écriture matricielle
Un système de n équations à n inconnues s'écrit **[K] {x} = {F}**. C'est exactement la forme résolue par les logiciels de calcul de structures : [K] est la **matrice de rigidité**, {x} les déplacements inconnus, {F} les forces.

## Déterminant 2 × 2
Pour la matrice (a b ; c d) : **det = a d − b c**. Si det ≠ 0, le système a une solution unique. Règle de Cramer : x = (e d − b f)/det, y = (a f − e c)/det pour a x + b y = e ; c x + d y = f.

## Méthode du pivot de Gauss
On élimine les inconnues une par une.

> [!exemple]
> x + y + z = 6 ; 2x + 3y + z = 11 ; x + 2y + 3z = 14.
> L2 − 2 L1 : y − z = −1. L3 − L1 : y + 2z = 8.
> Soustraction : 3z = 9 → **z = 3**, puis y = 2, puis x = 1.

## Application : réactions d'une poutre
Poutre de 6 m sur deux appuis A et B, charge de 30 kN à 2 m de A.
- Somme des forces verticales : RA + RB = 30.
- Somme des moments en A : 6 RB − 30 × 2 = 0.
Le système donne RB = **10 kN** et RA = **20 kN**.

## Matrice de rigidité d'un ressort
Deux ressorts en série de raideurs k₁ et k₂ : le calcul matriciel assemble des petites matrices élémentaires k (1 −1 ; −1 1). C'est le principe de la **méthode des éléments finis** utilisée par les logiciels (Robot, Effel, SAP2000…).

> [!retenir]
> Un logiciel de structure ne fait « que » résoudre [K]{x} = {F} avec des milliers d'équations : comprendre le principe permet de vérifier ses résultats par des calculs simples.`, quiz:[
  {q:"Déterminant de la matrice (2 3 ; 1 4) :", o:["5", "11", "8", "−5"], r:0, e:"2 × 4 − 3 × 1 = 5."},
  {q:"Poutre de 4 m, charge 20 kN au milieu : réaction en chaque appui :", o:["20 kN", "10 kN", "5 kN", "40 kN"], r:1, e:"Par symétrie, chaque appui reprend la moitié : 10 kN."},
  {q:"Si le déterminant d'un système est nul :", o:["Solution unique", "Pas de solution unique", "x = 0", "Le système est faux"], r:1, e:"Le système n'a pas de solution unique (aucune ou une infinité)."},
  {q:"La matrice de rigidité relie :", o:["Les contraintes et les déformations", "Les forces et les déplacements", "Les moments et les flèches", "Les charges et les poids"], r:1, e:"[K]{x} = {F} : forces et déplacements."}
 ]},

{id:"om-5", niv:3, titre:"Équations différentielles : déformées et vibrations", duree:30, contenu:`## Premier ordre : y' = k y
Solution : **y(t) = y₀ e^(k t)**. Elle décrit les croissances ou décroissances exponentielles.

> [!exemple] Refroidissement
> Loi de Newton : dT/dt = −k (T − Ta). La température d'un béton chaud tend vers celle de l'air : T(t) = Ta + (T₀ − Ta) e^(−kt).

> [!exemple] Consolidation des sols
> Le tassement d'une argile sous une charge évolue dans le temps selon une loi proche de la décroissance exponentielle : rapide au début, puis de plus en plus lent (voir Géotechnique).

## Second ordre : la déformée d'une poutre
La flèche y(x) d'une poutre vérifie :
$$ E I y''(x) = − M(x)
En intégrant deux fois et en utilisant les conditions aux appuis (y = 0 sur appuis), on obtient la flèche maximale d'une poutre sur deux appuis sous charge uniforme :
$$ f = 5 q L⁴ / (384 E I)

> [!exemple]
> Poutre en bois 8 × 20 cm (I = 8 × 20³/12 = 5 333 cm⁴ = 5,33 × 10⁻⁵ m⁴), E = 10 000 MPa, L = 4 m, q = 2 kN/m :
> f = 5 × 2 × 4⁴ / (384 × 10 × 10⁶ × 5,33 × 10⁻⁵) = 2 560 / 204 672 ≈ 0,0125 m = **12,5 mm** (limite usuelle L/300 = 13 mm : juste admissible).

## Second ordre : les vibrations
Une masse m sur un ressort de raideur k : m x'' + k x = 0. Solution sinusoïdale de pulsation **ω = √(k/m)** et de fréquence **f = ω / 2π**.
- Un plancher trop souple vibre à basse fréquence (inconfort quand on marche).
- Un bâtiment soumis à un séisme oscille à sa fréquence propre : la règle simple **T ≈ 0,1 × N** secondes (N = nombre de niveaux) donne l'ordre de grandeur de la période.

> [!retenir]
> EI y'' = −M relie la RDM (moment) à la déformée : plus EI est grand (matériau rigide, section haute), plus la flèche est faible.`, quiz:[
  {q:"La solution de y' = k y est :", o:["y = k x", "y = y₀ e^(kt)", "y = sin(kt)", "y = k/t"], r:1, e:"C'est la fonction exponentielle."},
  {q:"La flèche d'une poutre sous charge uniforme est proportionnelle à :", o:["L", "L²", "L³", "L⁴"], r:3, e:"f = 5qL⁴/(384EI)."},
  {q:"La pulsation propre d'un système masse-ressort vaut :", o:["k/m", "√(k/m)", "m/k", "k m"], r:1, e:"ω = √(k/m)."},
  {q:"Pour réduire la flèche d'une poutre, le plus efficace est :", o:["Augmenter sa largeur", "Augmenter sa hauteur", "Diminuer E", "Augmenter la portée"], r:1, e:"I varie avec h³ : la hauteur est le paramètre le plus efficace."}
 ]},

{id:"om-8", niv:3, titre:"Méthodes numériques : Newton, trapèzes et Simpson", duree:30, contenu:`## Quand le calcul exact est impossible
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
- Toujours **contrôler l'ordre de grandeur** d'un résultat de logiciel par un calcul simple.`, quiz:[
  {q:"La méthode de Newton utilise :", o:["f et sa dérivée f'", "Seulement f", "L'intégrale de f", "Un tirage au hasard"], r:0, e:"x(n+1) = x(n) − f/f'."},
  {q:"La méthode de Simpson exige :", o:["Un nombre pair d'intervalles", "Un seul intervalle", "Des profils nuls", "Des pas différents"], r:0, e:"Les coefficients 1-4-2-4-…-1 vont par paires d'intervalles."},
  {q:"La dichotomie consiste à :", o:["Couper l'intervalle de recherche en deux à chaque étape", "Dériver deux fois", "Calculer une aire", "Tirer des nombres au hasard"], r:0, e:"On garde la moitié où la fonction change de signe."},
  {q:"Profils 10 et 14 m² distants de 20 m : volume par les trapèzes :", o:["240 m³", "480 m³", "120 m³", "280 m³"], r:0, e:"20 × (10 + 14)/2 = 240 m³."}
 ]},

{id:"om-9", niv:3, titre:"Calcul matriciel des structures : la méthode des déplacements", duree:35, contenu:`## Le principe
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
> Un logiciel donne toujours un résultat, même avec une erreur de saisie. Vérifiez l'**équilibre** (somme des réactions = somme des charges) et comparez avec un calcul manuel simplifié.`, quiz:[
  {q:"La méthode des déplacements résout le système :", o:["[F] = [K] × [u]", "[u] = [F] + [K]", "E = σ / ε", "M = qL²/8"], r:0, e:"K est la matrice de rigidité."},
  {q:"La rigidité axiale d'une barre vaut :", o:["E A / L", "E I / L³", "A / E L", "L / E A"], r:0, e:"k = EA/L."},
  {q:"Dans l'exemple des deux barres en série, le déplacement du nœud 3 vaut :", o:["0,5 mm", "1,0 mm", "1,5 mm", "3,0 mm"], r:2, e:"u3 = 10/20 000 + 10/10 000 = 1,5 mm."},
  {q:"Le meilleur contrôle d'un calcul par logiciel est :", o:["Vérifier l'équilibre global et l'ordre de grandeur", "Relancer le calcul", "Changer de logiciel", "Augmenter les sections"], r:0, e:"Somme des réactions = somme des charges."}
 ]}
]});
