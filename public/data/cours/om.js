/* =====================================================================
   Outils mathématiques — cours complet (3 niveaux)
   Débutant : vecteurs et moments, fonctions usuelles, taux de variation
              et dérivée, angles en radians et fonctions trigonométriques
   Intermédiaire : dérivées et extremums, exponentielle et logarithme,
              intégrales (résultantes, centres de gravité, inerties),
              intégration en RDM, matrices et systèmes
   Avancé : équations différentielles, méthodes numériques, calcul
            matriciel des structures, régression, approximations et
            incertitudes
   ===================================================================== */
A.addMatiere({
 id:"om",
 titre:"Outils mathématiques",
 court:"Outils maths",
 groupe:"fond",
 icone:"fx",
 couleur:"#5B45A8",
 niveau:"Intermédiaire",
 heures:55,
 ordre:2,
 prerequis:["math"],
 resume:"Les outils mathématiques de l'ingénieur et du technicien supérieur : vecteurs et moments, fonctions, dérivées et extremums, exponentielle et logarithme, intégrales (résultantes, centres de gravité, inerties, déformées), matrices et systèmes, équations différentielles, méthodes numériques, calcul matriciel des structures, régression et incertitudes, avec applications à la RDM et exercices corrigés.",
 objectifs:[
  "Manipuler vecteurs, produits scalaires et moments",
  "Dériver une fonction et trouver un extremum (moment maximal, optimisation)",
  "Intégrer pour obtenir une résultante, un centre de gravité, un moment d'inertie, une déformée",
  "Résoudre des systèmes linéaires et comprendre la méthode des déplacements",
  "Résoudre des équations différentielles simples (déformée, vibrations, refroidissement)",
  "Utiliser des méthodes numériques, une régression et un calcul d'incertitudes"
 ],
 applications:[
  "Position et valeur du moment maximal dans une poutre",
  "Centre de gravité et moment d'inertie d'une section",
  "Flèche d'une poutre et fréquence propre d'un plancher",
  "Volumes de terrassement par Simpson",
  "Vérification des résultats d'un logiciel de calcul"
 ],
 chapitres:[
{id:"om-3", niv:1, titre:"Vecteurs, forces et moments", duree:45, contenu:`## Les vecteurs
Un vecteur possède une **direction**, un **sens** et une **norme**. Dans le plan : V = (Vx ; Vy), norme ‖V‖ = √(Vx² + Vy²).
- **Addition** : on additionne les coordonnées : c'est la **résultante** de plusieurs forces ;
- Une force F inclinée d'un angle α sur l'horizontale : **Fx = F cos α**, **Fy = F sin α**.

!fig:forces|Composition de deux forces

## Le produit scalaire
$$ U · V = Ux Vx + Uy Vy = ‖U‖ ‖V‖ cos θ
- Nul si les vecteurs sont **perpendiculaires** ;
- Le **travail** d'une force sur un déplacement est un produit scalaire : W = F · d = F d cos θ.

## Le moment d'une force
Le moment d'une force F par rapport à un point O mesure son **effet de rotation** :
$$ M = F × d   (d : bras de levier, distance perpendiculaire de O à la ligne d'action)
En coordonnées (O à l'origine, point d'application (x ; y)) : **M = x Fy − y Fx** (positif dans le sens trigonométrique).
> [!exemple] Console
> Une console de 2 m porte 15 kN en bout : moment à l'encastrement 15 × 2 = **30 kN·m**. Si la force est inclinée à 60° sur l'horizontale (5 kN), seule sa composante verticale crée un moment : 5 × sin 60° × 2 = **8,66 kN·m**.

## L'équilibre d'un solide
Une structure est en équilibre si la **somme des forces** est nulle **et** la **somme des moments** (par rapport à n'importe quel point) est nulle : ce sont les équations de la **statique**, base du calcul des réactions d'appui.

## Le produit vectoriel (en 3D)
M = r ∧ F : vecteur perpendiculaire au plan (r, F), de norme r F sin θ. Il sert pour les structures spatiales et la torsion.

> [!retenir]
> - Résultante = somme des vecteurs ; Fx = F cos α, Fy = F sin α.
> - Produit scalaire : U·V = ‖U‖‖V‖ cos θ ; nul si perpendiculaires.
> - Moment = force × bras de levier ; équilibre : Σ F = 0 et Σ M = 0.`,
 exercices:[
  {t:"Résultante de trois forces", d:2, e:`Trois forces s'appliquent en un point : F1 = 10 kN à 0°, F2 = 8 kN à 60°, F3 = 6 kN à 135° (angles mesurés depuis l'horizontale). Calculer la résultante (norme et angle).`, c:`Rx = 10 + 8 cos 60° + 6 cos 135° = 10 + 4 − 4,24 = **9,76 kN** ; Ry = 0 + 8 sin 60° + 6 sin 135° = 6,93 + 4,24 = **11,17 kN**.
R = √(9,76² + 11,17²) = **14,83 kN** ; angle : arctan(11,17 / 9,76) = **48,9°**.`},
  {t:"Travail d'une force", d:1, e:`On tire un chariot de 12 m avec une force de 500 N inclinée de 30° sur l'horizontale. Calculer le travail.`, c:`W = 500 × 12 × cos 30° = **5 196 J**.`},
  {t:"Réactions d'une poutre", d:1, e:`Une poutre de 6 m sur deux appuis A et B porte 20 kN à 1,50 m de A et 12 kN à 4,00 m de A. Calculer RA et RB.`, c:`Moments en A : 6 RB = 20 × 1,5 + 12 × 4 = 78 → **RB = 13 kN** ; forces : RA = 32 − 13 = **19 kN**.`},
  {t:"Vecteurs perpendiculaires", d:1, e:`Les vecteurs U (3 ; 4) et V (4 ; − 3) sont-ils perpendiculaires ? Calculer leurs normes et l'angle entre U et W (6 ; 8).`, c:`U · V = 12 − 12 = **0** → perpendiculaires ; ‖U‖ = ‖V‖ = **5**.
U · W = 18 + 32 = 50 = 5 × 10 × cos θ → cos θ = 1 → θ = **0°** (U et W ont la même direction : W = 2 U).`},
  {t:"Moment par les coordonnées", d:2, e:`Une force F (− 3 ; 6) kN s'applique au point (2 ; 1) m. Calculer son moment par rapport à l'origine.`, c:`M = x Fy − y Fx = 2 × 6 − 1 × (− 3) = 12 + 3 = **15 kN·m** (sens trigonométrique).`}
 ],
 quiz:[
  {q:"La composante verticale d'une force F inclinée de α sur l'horizontale est :", o:["F sin α","F cos α","F tan α","F"], r:0, e:"Projection."},
  {q:"Le produit scalaire de deux vecteurs perpendiculaires est :", o:["Nul","Maximal","Égal à 1","Négatif"], r:0, e:"cos 90° = 0."},
  {q:"Moment d'une force de 10 kN avec un bras de levier de 3 m :", o:["30 kN·m","13 kN·m","3,3 kN·m","7 kN·m"], r:0, e:"F × d."},
  {q:"Les deux conditions d'équilibre d'un solide sont :", o:["Σ F = 0 et Σ M = 0","Σ F = 0 seulement","Σ M = 1","F = M"], r:0, e:"Statique."},
  {q:"Norme du vecteur (5 ; 12) :", o:["13","17","7","60"], r:0, e:"√(25 + 144)."}
 ]},
{id:"om-6", niv:1, titre:"Fonctions usuelles et lecture de graphiques", duree:40, contenu:`## Qu'est-ce qu'une fonction ?
Une fonction associe à chaque valeur x une valeur unique y = f(x). Sur un chantier : le prix en fonction de la quantité, le temps en fonction du nombre d'ouvriers, la résistance du béton en fonction de son âge.

## Fonctions linéaires et affines
- **Linéaire** : y = a x (proportionnalité) : 7 sacs par m³ de béton → sacs = 7 × volume ;
- **Affine** : y = a x + b : droite de **pente a** qui coupe l'axe vertical en b.
> [!exemple] Livraison de sable
> Transport 25 000 F + 12 000 F par m³ : C(x) = 12 000 x + 25 000 → pour 6 m³ : **97 000 F**.

## Fonction carré et fonction inverse
- **y = x²** : doubler le côté d'une dalle carrée multiplie son aire par 4 ; le moment fléchissant a aussi une forme de parabole ;
- **y = k / x** : 120 heures-ouvrier durent 30 h avec 4 ouvriers, 20 h avec 6 ouvriers : le temps est **inversement proportionnel** à l'effectif.

## Une courbe qui se stabilise : le durcissement du béton
fcj = j / (4,76 + 0,83 j) × fc28 :
| Âge | 3 j | 7 j | 14 j | 28 j |
|---|---|---|---|---|
| fcj / fc28 | 0,41 | 0,66 | 0,85 | 1,00 |
Croissance rapide au début puis ralentie : c'est pourquoi on garde les étais 21 à 28 jours.

## Lire un graphique : le point d'équilibre
Louer une bétonnière coûte 15 000 F par jour ; l'acheter coûte 900 000 F plus 2 000 F par jour d'entretien : 15 000 x = 900 000 + 2 000 x → x ≈ **69 jours** : au-delà, l'achat est plus intéressant.

> [!retenir]
> - Affine : y = ax + b ; linéaire : y = ax.
> - y = x² : effet « au carré » ; y = k/x : proportionnalité inverse.
> - Intersection de deux courbes = point d'équilibre.`,
 exercices:[
  {t:"Fonction de coût", d:1, e:`Un fournisseur de gravier facture 30 000 F de livraison et 22 000 F par m³. Écrire C(x) et calculer le coût de 8 m³ et de 15 m³. Quel est le coût moyen par m³ dans chaque cas ?`, c:`C(x) = 22 000 x + 30 000 ; C(8) = **206 000 F** (25 750 F/m³) ; C(15) = **360 000 F** (24 000 F/m³) : la livraison fixe pèse moins sur une grosse commande.`},
  {t:"Proportionnalité inverse", d:1, e:`Un travail de 240 heures-ouvrier est confié à n ouvriers. Écrire la durée t(n) et calculer t(4), t(6), t(8).`, c:`t(n) = 240 / n → t(4) = **60 h** ; t(6) = **40 h** ; t(8) = **30 h** (en supposant que les ouvriers ne se gênent pas).`},
  {t:"Résistance au jeune âge", d:2, e:`Pour fc28 = 30 MPa, calculer fc3, fc7 et fc14 avec la formule du cours. À partir de quel âge dépasse-t-on 20 MPa (essayer 7, 8 et 9 jours) ?`, c:`fc3 = 3 / 7,25 × 30 = **12,4 MPa** ; fc7 = 7 / 10,57 × 30 = **19,9 MPa** ; fc14 = 14 / 16,38 × 30 = **25,6 MPa**.
fc8 = 8 / 11,40 × 30 = **21,1 MPa** → 20 MPa est dépassé vers le **8ᵉ jour**.`},
  {t:"Point d'équilibre", d:2, e:`Échafaudage : location 4 000 F par jour, ou achat 600 000 F et entretien 500 F par jour. Au-delà de combien de jours d'utilisation l'achat est-il préférable ?`, c:`4 000 x = 600 000 + 500 x → 3 500 x = 600 000 → x ≈ **171 jours**.`},
  {t:"Effet du carré", d:1, e:`Le moment maximal d'une poutre vaut q L² / 8. Si la portée passe de 4 m à 6 m (même charge), par combien le moment est-il multiplié ?`, c:`(6/4)² = **2,25** : le moment augmente de 125 % pour une portée 1,5 fois plus grande.`}
 ],
 quiz:[
  {q:"La représentation de y = 2x + 3 est :", o:["Une droite","Une parabole","Un cercle","Une hyperbole"], r:0, e:"Fonction affine."},
  {q:"Si le côté d'une dalle carrée triple, son aire est multipliée par :", o:["9","3","6","27"], r:0, e:"3²."},
  {q:"y = 60/x : pour x = 3, y = ", o:["20","180","57","63"], r:0, e:"60/3."},
  {q:"À 7 jours, le béton atteint environ :", o:["66 % de fc28","10 %","100 %","150 %"], r:0, e:"Formule BAEL."},
  {q:"Le point d'équilibre entre deux offres correspond :", o:["À l'intersection de leurs courbes de coût","Au minimum d'une courbe","À l'origine","Au maximum"], r:0, e:"Égalité des coûts."}
 ]},
{id:"om-7", niv:1, titre:"Taux de variation et notion de dérivée", duree:40, contenu:`## Le taux de variation moyen
Entre deux valeurs a et b : **(f(b) − f(a)) / (b − a)**. C'est une **vitesse moyenne** : un camion qui parcourt 90 km en 2 h roule en moyenne à 45 km/h.

## La dérivée : un taux de variation instantané
Quand l'intervalle devient très petit, le taux de variation tend vers la **dérivée** f'(x) : c'est la **pente de la tangente** à la courbe au point x.

## Les règles de base
| Fonction | Dérivée |
|---|---|
| constante k | 0 |
| a x + b | a |
| x² | 2 x |
| x³ | 3 x² |
| xⁿ | n xⁿ⁻¹ |
| u + v | u' + v' |
| k u | k u' |

## Exemples au bâtiment
> [!exemple] Remplissage d'une citerne
> V(t) = 0,5 t² + 2 t (m³, t en heures). Le débit est la dérivée : V'(t) = t + 2 → à t = 4 h, **6 m³/h**.

> [!exemple] Moment dans une poutre
> M(x) = 10 x − x² (kN·m) sur une poutre de 10 m. La dérivée V(x) = 10 − 2 x est l'**effort tranchant** ; elle s'annule en x = 5 m : le moment y est maximal, **M(5) = 25 kN·m**.

> [!retenir]
> - Taux moyen : Δf/Δx ; dérivée : pente de la tangente.
> - (xⁿ)' = n xⁿ⁻¹ ; (u + v)' = u' + v'.
> - Là où la dérivée s'annule, la fonction passe par un maximum ou un minimum.`,
 exercices:[
  {t:"Taux de variation moyen", d:1, e:`La résistance d'un béton passe de 16,6 MPa à 7 jours à 25 MPa à 28 jours. Quel est le gain moyen par jour entre ces deux dates ?`, c:`(25 − 16,6) / (28 − 7) = 8,4 / 21 = **0,4 MPa par jour**.`},
  {t:"Calculer des dérivées", d:1, e:`Dériver : a) f(x) = 5 x³ − 2 x + 7 ; b) g(x) = 0,5 x² + 3 x ; c) h(x) = 4 ; d) M(x) = 15 x − 2,5 x².`, c:`a) f'(x) = **15 x² − 2** ; b) g'(x) = **x + 3** ; c) h'(x) = **0** ; d) M'(x) = **15 − 5 x**.`},
  {t:"Pente d'une tangente", d:2, e:`Une rampe a pour profil y = 0,02 x² (x et y en m). Quelle est sa pente en x = 5 m ? en x = 10 m ? Exprimer en %.`, c:`y'(x) = 0,04 x → y'(5) = 0,20 → **20 %** ; y'(10) = 0,40 → **40 %** (la rampe devient de plus en plus raide).`},
  {t:"Moment maximal", d:2, e:`Le moment d'une poutre vaut M(x) = 18 x − 3 x² (kN·m, x en m, portée 6 m). Trouver l'effort tranchant V(x) = M'(x), l'abscisse où il s'annule et le moment maximal.`, c:`V(x) = **18 − 6 x** ; V = 0 pour **x = 3 m** ; M(3) = 54 − 27 = **27 kN·m**.`},
  {t:"Vitesse de remplissage", d:2, e:`Le volume d'une fouille noyée qui se vide vaut V(t) = 20 − 4 t + 0,2 t² (m³, t en h, pour 0 ≤ t ≤ 10). Calculer le débit de vidange V'(t) à t = 0 et à t = 5 h. Quand la fouille est-elle vide ?`, c:`V'(t) = − 4 + 0,4 t → à t = 0 : **− 4 m³/h** (vidange de 4 m³/h) ; à t = 5 : **− 2 m³/h**.
V = 0 : 0,2 t² − 4 t + 20 = 0 → t² − 20 t + 100 = 0 → (t − 10)² = 0 → **t = 10 h**.`}
 ],
 quiz:[
  {q:"La dérivée de x³ est :", o:["3x²","x²","3x","x⁴/4"], r:0, e:"n xⁿ⁻¹."},
  {q:"La dérivée d'une constante est :", o:["0","1","La constante","Infinie"], r:0, e:"Pas de variation."},
  {q:"Graphiquement, la dérivée est :", o:["La pente de la tangente","L'aire sous la courbe","La valeur maximale","L'ordonnée à l'origine"], r:0, e:"Taux instantané."},
  {q:"Si f'(x) = 0 en un point, f y passe souvent par :", o:["Un maximum ou un minimum","Zéro","L'infini","Une discontinuité"], r:0, e:"Extremum."},
  {q:"La dérivée du moment fléchissant est :", o:["L'effort tranchant","La flèche","La charge","La réaction"], r:0, e:"V = dM/dx."}
 ]},
{id:"om-10", niv:1, titre:"Angles en radians et fonctions trigonométriques", duree:40, contenu:`## Les unités d'angle
| Unité | Tour complet | Angle droit |
|---|---|---|
| Degré (°) | 360° | 90° |
| Grade ou gon (topographie) | 400 gon | 100 gon |
| Radian (rad, mathématiques et physique) | 2 π rad | π/2 rad |
Conversions : **180° = π rad = 200 gon** ; 1 gon = 0,9°.

## Le radian
Un angle de θ radians intercepte, sur un cercle de rayon R, un **arc de longueur s = R θ**. Les formules de dérivation (sin' = cos) et beaucoup de formules de physique supposent les angles en radians.
> [!exemple]
> Arc de 15 m sur un rayon de 20 m : θ = 15 / 20 = 0,75 rad = 0,75 × 180 / π = **42,97°**.

## Les fonctions sinus et cosinus
- sin x et cos x varient entre − 1 et 1 et sont **périodiques** de période 2π ;
- **sin² x + cos² x = 1** ; tan x = sin x / cos x ;
- Pour les **petits angles** (en radians), sin x ≈ tan x ≈ x : sin 2° = 0,03490 ≈ 2 × π/180 = 0,03491.

## Les oscillations
Une vibration sinusoïdale s'écrit x(t) = A sin(ω t) : amplitude A, **pulsation ω** (rad/s), **fréquence f = ω / (2π)** (Hz), **période T = 1/f** (s).
> [!exemple]
> Plancher qui vibre à 8 Hz : ω = 2π × 8 = **50,3 rad/s** ; période **0,125 s**. On évite les planchers de fréquence propre trop basse (< 5 à 8 Hz), désagréables quand on marche.

> [!retenir]
> - 180° = π rad = 200 gon.
> - Arc = R θ (θ en radians) ; petits angles : sin x ≈ x.
> - Oscillation : f = ω/(2π), T = 1/f.`,
 exercices:[
  {t:"Conversions d'angles", d:1, e:`Convertir : a) 45° en radians et en gon ; b) 150 gon en degrés ; c) 1,2 rad en degrés ; d) 3π/2 rad en degrés.`, c:`a) π/4 = **0,785 rad** = **50 gon** ; b) 150 × 0,9 = **135°** ; c) 1,2 × 180/π = **68,75°** ; d) **270°**.`},
  {t:"Longueur d'arc", d:1, e:`Une bordure de trottoir suit un arc de cercle de rayon 12 m sur un angle de 0,5 rad. Quelle est sa longueur ? Combien de bordures droites de 1 m faut-il environ ?`, c:`s = 12 × 0,5 = **6 m** → environ **6 bordures** (ou des bordures courbes adaptées au rayon).`},
  {t:"Approximation des petits angles", d:2, e:`Une poutre de 5 m tourne de 0,4° à son appui. Calculer la rotation en radians et le déplacement vertical approximatif à 5 m de l'appui (si la rotation était rigide).`, c:`θ = 0,4 × π / 180 = **0,00698 rad** ; déplacement ≈ 5 × 0,00698 = **0,035 m = 35 mm** (tan θ ≈ θ pour un petit angle).`},
  {t:"Fréquence d'une vibration", d:2, e:`Une passerelle oscille selon x(t) = 3 sin(12,6 t) (mm, t en s). Donner l'amplitude, la pulsation, la fréquence et la période. Les piétons marchent à environ 2 pas par seconde : quel risque ?`, c:`Amplitude **3 mm** ; ω = **12,6 rad/s** ; f = 12,6 / 2π = **2,0 Hz** ; T = **0,5 s**.
La fréquence de la passerelle coïncide avec celle des pas : risque de **résonance** (amplification des oscillations) : il faut rigidifier ou amortir la passerelle.`},
  {t:"Relation fondamentale", d:1, e:`Sachant que sin α = 0,6 avec α aigu, calculer cos α et tan α sans calculatrice.`, c:`cos² α = 1 − 0,36 = 0,64 → **cos α = 0,8** ; tan α = 0,6 / 0,8 = **0,75** (pente de 75 %).`}
 ],
 quiz:[
  {q:"π radians correspondent à :", o:["180°","360°","90°","200°"], r:0, e:"Demi-tour."},
  {q:"Un angle droit vaut en grades :", o:["100 gon","90 gon","400 gon","50 gon"], r:0, e:"Topographie."},
  {q:"Longueur d'un arc de rayon 10 m et d'angle 0,3 rad :", o:["3 m","30 m","0,03 m","33 m"], r:0, e:"R θ."},
  {q:"sin² x + cos² x = ", o:["1","0","2","tan x"], r:0, e:"Relation fondamentale."},
  {q:"Une vibration de pulsation 2π rad/s a une fréquence de :", o:["1 Hz","2π Hz","π Hz","0,5 Hz"], r:0, e:"f = ω/2π."}
 ]},
{id:"om-1", niv:2, titre:"Dérivées et recherche d'extremum", duree:50, contenu:`## Les dérivées usuelles
| Fonction f(x) | Dérivée f'(x) |
|---|---|
| constante k | 0 |
| xⁿ | n xⁿ⁻¹ |
| √x | 1 / (2√x) |
| 1 / x | − 1 / x² |
| sin x | cos x |
| cos x | − sin x |
| eˣ | eˣ |
| ln x | 1 / x |
Règles : (u + v)' = u' + v' ; (k u)' = k u' ; **(u v)' = u'v + u v'** ; **(u/v)' = (u'v − u v')/v²** ; (u(ax + b))' = a u'(ax + b).

## Extremum : là où la dérivée s'annule
Une fonction atteint un **maximum ou un minimum** là où f'(x) = 0 et change de signe (tableau de variations).
> [!exemple] Moment maximal d'une poutre
> Poutre sur deux appuis, portée L, charge uniforme q : M(x) = (q L / 2) x − q x² / 2.
> V(x) = M'(x) = q L / 2 − q x = 0 pour x = L/2 → **M max = q L² / 8**.

!fig:moments|Effort tranchant (dérivée) et moment (parabole)

> [!retenir]
> En RDM : **le moment est maximal là où l'effort tranchant s'annule**, car V = dM/dx.

## L'optimisation
> [!exemple] Bac de stockage
> Avec une tôle carrée de 1,20 m de côté, on découpe un carré x aux 4 coins et on replie : V(x) = x (1,2 − 2x)².
> V'(x) = (1,2 − 2x)(1,2 − 6x) = 0 → x = **0,20 m** → V max = 0,2 × 0,8² = **0,128 m³**.

## Dérivée et petites variations
Pour une petite variation dx : **df ≈ f'(x) dx**. Ex. : section d'une barre A = π d²/4 → dA = (π d / 2) dd ; une erreur de 0,3 mm sur un HA16 change la section de π × 16 / 2 × 0,3 ≈ **7,5 mm²** (3,75 %).

> [!retenir]
> - (uv)' = u'v + uv' ; (u/v)' = (u'v − uv')/v².
> - Extremum : f'(x) = 0 avec changement de signe.
> - df ≈ f'(x) dx pour les petites variations.`,
 exercices:[
  {t:"Calculer des dérivées", d:1, e:`Dériver : a) f(x) = x² (3 x + 1) ; b) g(x) = (2 x + 1)/(x − 1) ; c) h(x) = √x ; d) k(x) = 4 sin(2 x).`, c:`a) f(x) = 3x³ + x² → **f'(x) = 9x² + 2x** ; b) g'(x) = [2(x − 1) − (2x + 1)]/(x − 1)² = **− 3/(x − 1)²** ; c) **h'(x) = 1/(2√x)** ; d) **k'(x) = 8 cos(2x)**.`},
  {t:"Moment maximal", d:1, e:`Poutre sur deux appuis de 5 m, charge uniforme de 20 kN/m. Écrire M(x), V(x), trouver l'abscisse du maximum et sa valeur.`, c:`M(x) = 50 x − 10 x² ; V(x) = **50 − 20 x** = 0 → **x = 2,5 m** ; M max = 125 − 62,5 = **62,5 kN·m** (= q L²/8 ✔).`},
  {t:"Poutre taillée dans un tronc", d:3, e:`On taille une poutre rectangulaire b × h dans un tronc rond de diamètre D = 30 cm (b² + h² = D²). Sa résistance en flexion est proportionnelle au module W = b h²/6. Trouver b et h qui maximisent W.`, c:`h² = D² − b² → W(b) = b (D² − b²)/6 ; W'(b) = (D² − 3b²)/6 = 0 → **b = D/√3 = 17,3 cm** ; h = D √(2/3) = **24,5 cm** (rapport h/b = √2 ≈ 1,41).
W max = 17,3 × 24,5² / 6 ≈ **1 732 cm³**.`},
  {t:"Bac de stockage", d:2, e:`Reprendre le bac de l'exemple avec une tôle carrée de 0,90 m de côté. Trouver le côté x du carré à découper et le volume maximal.`, c:`V(x) = x (0,9 − 2x)² ; V'(x) = (0,9 − 2x)(0,9 − 6x) = 0 → **x = 0,15 m** (x = 0,45 donne V = 0).
V max = 0,15 × 0,6² = **0,054 m³ = 54 L**.`},
  {t:"Sensibilité d'une section", d:2, e:`Un HA20 réel mesure 19,6 mm. Estimer, par la dérivée, la perte de section par rapport à la section nominale, puis la vérifier par le calcul exact.`, c:`dA ≈ (π d / 2) dd = π × 20 / 2 × (− 0,4) = **− 12,6 mm²** (− 4 % de 314,2 mm²).
Exact : π × 19,6² / 4 = 301,7 mm² → **− 12,5 mm²** : l'approximation est excellente.`}
 ],
 quiz:[
  {q:"La dérivée de u × v est :", o:["u'v + uv'","u'v'","u'v − uv'","uv"], r:0, e:"Règle du produit."},
  {q:"La dérivée de sin x est :", o:["cos x","− cos x","− sin x","tan x"], r:0, e:"À connaître."},
  {q:"Pour une poutre uniformément chargée, M est maximal :", o:["Au milieu","Aux appuis","Au quart","Nulle part"], r:0, e:"V = 0 à L/2."},
  {q:"df ≈ ", o:["f'(x) dx","f(x) dx","f'(x)/dx","dx/f'(x)"], r:0, e:"Petites variations."},
  {q:"La dérivée de eˣ est :", o:["eˣ","x eˣ⁻¹","ln x","1/x"], r:0, e:"Propriété de l'exponentielle."}
 ]},
{id:"om-11", niv:2, titre:"Exponentielle, logarithme népérien et phénomènes d'évolution", duree:45, contenu:`## Les fonctions eˣ et ln x
- **eˣ** (e ≈ 2,718) est toujours positive, croissante, et **sa dérivée est elle-même** : (eˣ)' = eˣ ; (e^(kx))' = k e^(kx) ;
- **ln x** (logarithme népérien, x > 0) est la fonction réciproque : ln(eˣ) = x ; e^(ln x) = x ; (ln x)' = 1/x ;
- ln(ab) = ln a + ln b ; ln(aⁿ) = n ln a ; ln 1 = 0 ; ln e = 1.

## Résoudre des équations
e^(kx) = b → x = ln b / k ; ln x = c → x = e^c. Ex. : eˣ = 5 → x = ln 5 = **1,609**.

## Les phénomènes de croissance et de décroissance
Quand la vitesse de variation est **proportionnelle** à la quantité (y' = k y), la solution est **y = y₀ e^(kt)** :
- **Refroidissement** (loi de Newton) : T(t) = Ta + (T₀ − Ta) e^(− k t) ;
- **Consolidation**, décharge d'un condensateur, amortissement : décroissance vers une limite ;
- Croissance continue (intérêts continus, populations).
> [!exemple] Refroidissement d'un béton de masse
> Air à 30 °C ; béton à 60 °C au cœur ; k = 0,1 /h : T(t) = 30 + 30 e^(− 0,1 t).
> Après 10 h : 30 + 30 e^(−1) = **41,0 °C** ; pour atteindre 35 °C : e^(− 0,1 t) = 1/6 → t = ln 6 / 0,1 = **17,9 h**.

## Le temps caractéristique
Pour y = y₀ e^(− t/τ), τ est le **temps caractéristique** : au bout de τ, il reste 37 % ; au bout de 3τ, 5 % ; au bout de 4,6 τ, 1 %.

> [!retenir]
> - (e^(kx))' = k e^(kx) ; (ln x)' = 1/x ; ln(ab) = ln a + ln b.
> - y' = k y ⇔ y = y₀ e^(kt).
> - e^(kx) = b ⇔ x = ln b / k.`,
 exercices:[
  {t:"Équations exponentielles", d:1, e:`Résoudre : a) eˣ = 20 ; b) e^(2x) = 9 ; c) ln x = 2 ; d) 50 e^(− 0,2 t) = 10.`, c:`a) x = ln 20 = **3,00** ; b) 2x = ln 9 → **x = 1,10** ; c) x = e² = **7,39** ; d) e^(− 0,2 t) = 0,2 → t = − ln 0,2 / 0,2 = **8,05**.`},
  {t:"Dérivées", d:1, e:`Dériver : a) f(t) = 30 + 30 e^(− 0,1 t) ; b) g(x) = x eˣ ; c) h(x) = ln(3x + 1).`, c:`a) **f'(t) = − 3 e^(− 0,1 t)** (le béton se refroidit de 3 °C/h au départ) ; b) **g'(x) = eˣ (1 + x)** ; c) **h'(x) = 3/(3x + 1)**.`},
  {t:"Refroidissement", d:2, e:`Une dalle coulée à 45 °C se refroidit dans un air à 28 °C avec k = 0,15 /h. Écrire T(t), calculer T après 6 h et le temps pour descendre à 30 °C.`, c:`T(t) = 28 + 17 e^(− 0,15 t) ; T(6) = 28 + 17 × 0,407 = **34,9 °C**.
30 °C : e^(− 0,15 t) = 2/17 → t = ln(8,5) / 0,15 = **14,3 h**.`},
  {t:"Évolution vers une limite", d:2, e:`Le degré d'avancement d'un phénomène suit U(t) = 1 − e^(− t/τ) avec τ = 2 ans. Calculer U après 1, 2 et 4 ans. Quand atteint-on 90 % ?`, c:`U(1) = 1 − e^(−0,5) = **39 %** ; U(2) = 1 − e^(−1) = **63 %** ; U(4) = 1 − e^(−2) = **86 %**.
90 % : e^(− t/2) = 0,1 → t = 2 ln 10 = **4,6 ans**.`},
  {t:"Croissance continue", d:2, e:`Un capital de 10 M F placé à 6 % en intérêts continus vaut C(t) = 10 e^(0,06 t). Combien vaut-il après 10 ans ? Comparer aux intérêts composés annuels (10 × 1,06¹⁰ = 17,91 M).`, c:`C(10) = 10 e^0,6 = **18,22 M F**, légèrement plus que les intérêts composés annuels (17,91 M) : la capitalisation continue est la limite d'une capitalisation de plus en plus fréquente.`}
 ],
 quiz:[
  {q:"La dérivée de e^(3x) est :", o:["3 e^(3x)","e^(3x)","e^(3x)/3","3x e^(3x)"], r:0, e:"k e^(kx)."},
  {q:"ln(e⁴) = ", o:["4","e⁴","1","0"], r:0, e:"Fonctions réciproques."},
  {q:"La solution de y' = k y est :", o:["y = y₀ e^(kt)","y = k t","y = y₀ + kt","y = ln t"], r:0, e:"Croissance/décroissance exponentielle."},
  {q:"Au bout d'un temps τ, une décroissance e^(−t/τ) a gardé environ :", o:["37 %","50 %","10 %","0 %"], r:0, e:"e⁻¹ ≈ 0,37."},
  {q:"ln(a × b) = ", o:["ln a + ln b","ln a × ln b","ln a − ln b","a + b"], r:0, e:"Propriété du logarithme."}
 ]},
{id:"om-2", niv:2, titre:"Intégrales : résultantes, centres de gravité et inerties", duree:55, contenu:`## Primitive et intégrale
F est une primitive de f si F' = f ; l'intégrale de a à b vaut **∫ f(x) dx = F(b) − F(a)** : c'est l'**aire algébrique** sous la courbe.
Primitives usuelles : xⁿ → xⁿ⁺¹/(n + 1) ; 1/x → ln x ; eˣ → eˣ ; cos x → sin x ; sin x → − cos x.
Ex. : ∫₀⁴ (3x² + 2) dx = [x³ + 2x]₀⁴ = 64 + 8 = **72**.

## La résultante d'une charge répartie
Une charge répartie q(x) (kN/m) a pour **résultante R = ∫ q(x) dx**, appliquée au **centre de gravité** du diagramme de charge.
> [!exemple] Charge triangulaire (poussée des terres, pression de l'eau)
> q(x) = q₀ x / L : R = q₀ L / 2, appliquée à **2L/3** de l'origine (au tiers côté q₀). Poussée de 24 kN/m en pied d'un mur de 4 m : R = 24 × 4 / 2 = **48 kN/m**, à 4/3 = 1,33 m au-dessus de la base.

## Le centre de gravité d'une surface
xG = ∫ x dA / A ; yG = ∫ y dA / A ; pour une surface composée : **yG = Σ(Aᵢ yᵢ) / Σ Aᵢ**.
> [!exemple] Section en T
> Table 60 × 10 cm (A₁ = 600 cm², y₁ = 35 cm) et âme 20 × 30 cm (A₂ = 600 cm², y₂ = 15 cm), depuis la base : yG = (600 × 35 + 600 × 15) / 1 200 = **25 cm**.

## Le moment quadratique (moment d'inertie)
$$ I = ∫ y² dA
Rectangle b × h autour de son axe central : I = ∫ y² b dy (de − h/2 à h/2) = **b h³ / 12**. Théorème de **Huygens** : I(Δ) = I(G) + A d².
> [!exemple] Suite : inertie de la section en T autour de G
> Table : 60 × 10³ / 12 + 600 × (35 − 25)² = 5 000 + 60 000 = 65 000 cm⁴ ; âme : 20 × 30³ / 12 + 600 × (15 − 25)² = 45 000 + 60 000 = 105 000 cm⁴ → **I = 170 000 cm⁴**.
Doubler la hauteur d'une section rectangulaire multiplie I par **8** : on augmente la **hauteur** d'une poutre plutôt que sa largeur.

## L'intégration numérique
Quand on ne connaît f qu'en des points (profils, relevés), on approche l'aire par des trapèzes : S ≈ h × (y₀/2 + y₁ + … + yₙ₋₁ + yₙ/2) (voir chapitre Méthodes numériques).

> [!retenir]
> - ∫ₐᵇ f = F(b) − F(a) ; aire sous la courbe.
> - Résultante = ∫ q dx, au centre de gravité de la charge.
> - yG = Σ Aᵢ yᵢ / Σ Aᵢ ; I rectangle = b h³/12 ; Huygens : I = IG + A d².`,
 exercices:[
  {t:"Calculs d'intégrales", d:1, e:`Calculer : a) ∫₀² (4x + 1) dx ; b) ∫₁³ x² dx ; c) ∫₀^π sin x dx.`, c:`a) [2x² + x]₀² = 8 + 2 = **10** ; b) [x³/3]₁³ = 9 − 1/3 = **8,67** ; c) [− cos x]₀^π = 1 + 1 = **2**.`},
  {t:"Poussée de l'eau sur une paroi", d:2, e:`Une paroi de cuve retient 3 m d'eau : la pression vaut p(z) = 10 z kPa (z mesuré depuis la surface). Calculer la poussée par mètre de paroi et son point d'application.`, c:`R = ∫₀³ 10 z dz = 5 z² |₀³ = **45 kN/m**, appliquée aux 2/3 de la hauteur depuis la surface, soit **1 m au-dessus du fond**.`},
  {t:"Centre de gravité d'une cornière", d:2, e:`Une section en L est formée d'un rectangle vertical de 10 × 40 cm (de x = 0 à 10, y = 0 à 40) et d'un rectangle horizontal de 30 × 10 cm (de x = 10 à 40, y = 0 à 10). Calculer xG et yG.`, c:`A₁ = 400 cm² (x₁ = 5 ; y₁ = 20) ; A₂ = 300 cm² (x₂ = 25 ; y₂ = 5).
xG = (400 × 5 + 300 × 25) / 700 = **13,57 cm** ; yG = (400 × 20 + 300 × 5) / 700 = **13,57 cm** (la section est symétrique par rapport à la bissectrice).`},
  {t:"Inertie d'une poutre", d:1, e:`Comparer l'inertie d'une poutre 20 × 50 cm posée de chant (h = 50) et à plat (h = 20).`, c:`De chant : 20 × 50³ / 12 = **208 333 cm⁴** ; à plat : 50 × 20³ / 12 = **33 333 cm⁴** : 6,25 fois moins ! Une poutre se pose toujours de chant.`},
  {t:"Inertie d'une section en T", d:3, e:`Section en T : table 80 × 12 cm, âme 25 × 38 cm (hauteur totale 50 cm). Calculer yG depuis la base puis l'inertie IG.`, c:`A₁ = 960 cm², y₁ = 44 ; A₂ = 950 cm², y₂ = 19 → yG = (960 × 44 + 950 × 19) / 1 910 = (42 240 + 18 050) / 1 910 = **31,57 cm**.
Table : 80 × 12³/12 + 960 × (44 − 31,57)² = 11 520 + 148 308 = 159 828 ; âme : 25 × 38³/12 + 950 × (19 − 31,57)² = 114 317 + 150 121 = 264 438 → **IG ≈ 424 266 cm⁴**.`}
 ],
 quiz:[
  {q:"Une primitive de x² est :", o:["x³/3","2x","x³","3x²"], r:0, e:"xⁿ⁺¹/(n+1)."},
  {q:"La résultante d'une charge uniforme q sur L vaut :", o:["q L","q L²","q/L","q L/2"], r:0, e:"Aire du rectangle."},
  {q:"La résultante d'une charge triangulaire s'applique :", o:["Au tiers côté de la plus forte valeur","Au milieu","Au bout faible","À l'infini"], r:0, e:"Centre de gravité du triangle."},
  {q:"Inertie d'un rectangle b × h autour de son axe central :", o:["b h³/12","b² h/12","b h/12","b h³/3"], r:0, e:"Formule fondamentale."},
  {q:"Le théorème de Huygens donne :", o:["I = IG + A d²","I = IG − A d","I = A d","I = IG / d²"], r:0, e:"Changement d'axe."}
 ]},
{id:"om-12", niv:2, titre:"Intégration en RDM : diagrammes et déformées", duree:55, contenu:`## Les relations charge – effort tranchant – moment
Pour une poutre chargée par q(x) (vers le bas) :
$$ dV/dx = − q(x)      dM/dx = V(x)
On obtient donc V en intégrant − q, puis M en intégrant V, en utilisant les **conditions aux appuis** (M = 0 sur un appui simple ou une extrémité libre).
> [!exemple] Poutre sur deux appuis, q = 10 kN/m, L = 6 m
> RA = RB = 30 kN. V(x) = 30 − 10 x ; M(x) = 30 x − 5 x² ; V = 0 en x = 3 m → **M max = 45 kN·m**.

## L'équation de la déformée
La flèche y(x) vérifie :
$$ E I y''(x) = − M(x)
On intègre **deux fois** et on fixe les constantes par les conditions d'appui (y = 0 sur les appuis ; y' = 0 à un encastrement).
| Cas | Flèche maximale |
|---|---|
| Deux appuis, charge uniforme q | 5 q L⁴ / (384 E I) |
| Deux appuis, charge P au milieu | P L³ / (48 E I) |
| Console, charge uniforme q | q L⁴ / (8 E I) |
| Console, charge P en bout | P L³ / (3 E I) |
Rotation sur appui (deux appuis, charge uniforme) : θ = q L³ / (24 E I).

> [!exemple] Poutre en béton 20 × 40 cm
> I = 0,2 × 0,4³ / 12 = 1,067 × 10⁻³ m⁴ ; E = 30 000 MPa → EI = **3,2 × 10⁷ N·m²**.
> q = 15 kN/m, L = 6 m : f = 5 × 15 000 × 6⁴ / (384 × 3,2 × 10⁷) = **7,9 mm** < L/500 = 12 mm ✔ (flèche instantanée ; le fluage l'augmente à long terme).

## Pourquoi c'est utile
La déformée explique pourquoi la **hauteur** des poutres compte tant (I ∝ h³ et f ∝ L⁴ / I) : une portée 20 % plus longue augmente la flèche de 2,07 fois (1,2⁴).

> [!retenir]
> - dV/dx = − q ; dM/dx = V ; EI y'' = − M.
> - Intégrer deux fois et utiliser les conditions d'appui.
> - f = 5qL⁴/(384EI), PL³/(48EI), qL⁴/(8EI), PL³/(3EI).`,
 exercices:[
  {t:"Diagrammes par intégration", d:1, e:`Poutre sur deux appuis de 8 m, q = 12 kN/m. Calculer les réactions, V(x), M(x) et le moment maximal.`, c:`RA = RB = 48 kN ; V(x) = **48 − 12 x** ; M(x) = **48 x − 6 x²** ; V = 0 en x = 4 m → **M max = 96 kN·m** (= qL²/8 ✔).`},
  {t:"Flèche d'une poutre de plancher", d:2, e:`Poutre 20 × 40 cm (EI = 3,2 × 10⁷ N·m²), portée 6 m, charge uniforme 15 kN/m. Vérifier la flèche (limite L/500) et calculer la rotation sur appui.`, c:`f = 5 × 15 000 × 1 296 / (384 × 3,2 × 10⁷) = **7,9 mm** < 12 mm ✔.
θ = 15 000 × 216 / (24 × 3,2 × 10⁷) = **0,0042 rad** (0,24°).`},
  {t:"Charge concentrée", d:2, e:`La même poutre (EI = 3,2 × 10⁷ N·m², portée 5 m) reçoit une charge de 40 kN au milieu. Calculer la flèche.`, c:`f = 40 000 × 5³ / (48 × 3,2 × 10⁷) = 5 × 10⁶ / 1,536 × 10⁹ = **3,3 mm**.`},
  {t:"Console", d:2, e:`Un balcon en console de 2 m (EI = 3,2 × 10⁷ N·m² par mètre de largeur) porte 5 kN/m. Calculer la flèche en bout. Que devient-elle si la console mesure 2,5 m ?`, c:`f = 5 000 × 2⁴ / (8 × 3,2 × 10⁷) = **0,31 mm** ; à 2,5 m : × (2,5/2)⁴ = × 2,44 → **0,76 mm** (flèches instantanées, à majorer pour le fluage).`},
  {t:"Influence de la hauteur", d:2, e:`Une poutre 20 × 40 donne une flèche de 7,9 mm. Quelle flèche avec une poutre 20 × 50 (même charge et portée) ? avec une portée 20 % plus longue (section 20 × 40) ?`, c:`20 × 50 : I × (50/40)³ = × 1,95 → f = 7,9 / 1,95 = **4,0 mm**.
Portée + 20 % : f × 1,2⁴ = 7,9 × 2,07 = **16,4 mm** > 14,4 mm (L/500 pour 7,2 m) ✘ : il faudrait augmenter la hauteur.`}
 ],
 quiz:[
  {q:"dM/dx = ", o:["V","q","EI","y"], r:0, e:"Effort tranchant."},
  {q:"L'équation de la déformée est :", o:["EI y'' = − M","EI y = M","y' = q","M = EI"], r:0, e:"Courbure proportionnelle au moment."},
  {q:"Flèche d'une poutre sur deux appuis sous charge uniforme :", o:["5qL⁴/(384EI)","qL²/8","PL³/(3EI)","qL/2"], r:0, e:"À connaître."},
  {q:"Si la portée double (même section, même q), la flèche est multipliée par :", o:["16","2","4","8"], r:0, e:"L⁴."},
  {q:"À un encastrement, on a :", o:["y = 0 et y' = 0","M = 0","V = 0","y'' = 0"], r:0, e:"Ni déplacement ni rotation."}
 ]},
{id:"om-4", niv:2, titre:"Matrices et systèmes linéaires", duree:50, contenu:`## Écriture matricielle
Un système de n équations à n inconnues s'écrit **[K] {x} = {F}** : c'est la forme résolue par les logiciels de calcul de structures ([K] : **matrice de rigidité**, {x} : déplacements inconnus, {F} : forces).

## Les opérations sur les matrices
- **Somme** : terme à terme ; **produit** par un nombre : chaque terme ;
- **Produit de matrices** : terme (i, j) = ligne i × colonne j : (1 2 ; 3 4) × (2 0 ; 1 3) = (4 6 ; 10 12) ;
- Le produit n'est **pas commutatif** (AB ≠ BA en général).

## Déterminant et inverse 2 × 2
Pour (a b ; c d) : **det = a d − b c** ; si det ≠ 0, l'inverse vaut (1/det) × (d − b ; − c a). Règle de **Cramer** pour a x + b y = e ; c x + d y = f : x = (e d − b f)/det ; y = (a f − e c)/det.
> [!exemple]
> 2x + 3y = 13 ; x − y = − 1 → det = − 2 − 3 = − 5 ; x = (− 13 + 3)/(− 5) = **2** ; y = (− 2 − 13)/(− 5) = **3**.

## La méthode du pivot de Gauss
On élimine les inconnues une par une (opérations sur les lignes), puis on remonte.
> [!exemple] x + y + z = 6 ; 2x + 3y + z = 11 ; x + 2y + 3z = 14
> L2 − 2 L1 : y − z = − 1 ; L3 − L1 : y + 2z = 8 → 3z = 9 → **z = 3**, puis **y = 2**, puis **x = 1**.

## Application : réactions et rigidités
Les équations d'équilibre d'une poutre forment un petit système ; les matrices de rigidité des barres (k (1 − 1 ; − 1 1)) s'assemblent pour donner [K] (voir chapitre Calcul matriciel des structures).

> [!retenir]
> - [K]{x} = {F} : forme de tous les calculs de structures.
> - det 2 × 2 = ad − bc ; Cramer ; inverse = (1/det)(d − b ; − c a).
> - Pivot de Gauss pour les systèmes plus grands.`,
 exercices:[
  {t:"Cramer", d:1, e:`Résoudre par Cramer : 3x + 2y = 16 ; x + 4y = 12.`, c:`det = 12 − 2 = **10** ; x = (16 × 4 − 2 × 12)/10 = 40/10 = **4** ; y = (3 × 12 − 16 × 1)/10 = 20/10 = **2**.`},
  {t:"Pivot de Gauss", d:2, e:`Résoudre : x + 2y + z = 8 ; 2x + y + z = 7 ; x + y + 2z = 9.`, c:`L2 − 2L1 : − 3y − z = − 9 ; L3 − L1 : − y + z = 1.
De la 3ᵉ : z = 1 + y → − 3y − 1 − y = − 9 → **y = 2** ; z = **3** ; x = 8 − 4 − 3 = **1**.`},
  {t:"Produit de matrices", d:1, e:`Calculer A × B et B × A pour A = (1 2 ; 3 4) et B = (2 0 ; 1 3). Conclure.`, c:`AB = (1×2 + 2×1 ; 1×0 + 2×3 / 3×2 + 4×1 ; 3×0 + 4×3) = **(4 6 ; 10 12)**.
BA = (2×1 + 0×3 ; 2×2 + 0×4 / 1×1 + 3×3 ; 1×2 + 3×4) = **(2 4 ; 10 14)** ≠ AB : le produit matriciel n'est pas commutatif.`},
  {t:"Inverse d'une matrice de rigidité", d:2, e:`Calculer l'inverse de K = (4 − 2 ; − 2 3), puis résoudre K u = (2 ; 1).`, c:`det = 12 − 4 = **8** → K⁻¹ = (1/8) (3 2 ; 2 4).
u = K⁻¹ F = (1/8)(3 × 2 + 2 × 1 ; 2 × 2 + 4 × 1) = (8/8 ; 8/8) = **(1 ; 1)**.`},
  {t:"Réactions d'une poutre continue simplifiée", d:2, e:`Une poutre de 8 m sur appuis A et B porte 24 kN à 2 m de A et 16 kN à 6 m de A. Écrire le système (forces, moments en A) sous forme matricielle et le résoudre.`, c:`RA + RB = 40 ; 8 RB = 24 × 2 + 16 × 6 = 144 → matrice (1 1 ; 0 8) × (RA ; RB) = (40 ; 144).
**RB = 18 kN** ; **RA = 22 kN**.`}
 ],
 quiz:[
  {q:"Déterminant de (2 1 ; 4 3) :", o:["2","10","6","−2"], r:0, e:"6 − 4."},
  {q:"Si det = 0, le système :", o:["N'a pas de solution unique","A une solution unique","Est toujours impossible","Est toujours vrai"], r:0, e:"Matrice non inversible."},
  {q:"Le produit de matrices est-il commutatif ?", o:["Non en général","Oui toujours","Seulement pour 2 × 2","Seulement en génie civil"], r:0, e:"AB ≠ BA."},
  {q:"Les logiciels de structures résolvent :", o:["[K]{u} = {F}","y = ax + b","Une seule équation","Rien"], r:0, e:"Méthode des déplacements."},
  {q:"La méthode de Gauss consiste à :", o:["Éliminer les inconnues ligne par ligne","Deviner la solution","Dessiner les courbes","Calculer des intégrales"], r:0, e:"Pivot."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"om-5", niv:3, titre:"Équations différentielles : refroidissement, déformées et vibrations", duree:55, contenu:`## Qu'est-ce qu'une équation différentielle ?
Une équation différentielle relie une fonction inconnue y(t) ou y(x) à ses **dérivées**. Elle traduit une **loi physique locale** :
- « la vitesse de refroidissement est proportionnelle à l'écart de température » ;
- « la courbure d'une poutre est proportionnelle au moment fléchissant » ;
- « l'accélération d'une masse est proportionnelle à son écart à l'équilibre ».

Vocabulaire :
- **Ordre** : celui de la dérivée la plus élevée (y' : 1ᵉʳ ordre ; y'' : 2ᵉ ordre) ;
- La solution générale est une **famille de fonctions** contenant des constantes ;
- Les **conditions initiales** (valeur au temps 0) ou **aux limites** (appuis d'une poutre) fixent ces constantes.

## Premier ordre : y' = k y
$$ y' = k × y   ⇔   y(t) = y₀ × e^(k t)
- k > 0 : croissance exponentielle ; k < 0 : décroissance.
- Pour une décroissance on pose τ = − 1/k : la **constante de temps**. Au bout de τ, l'écart a diminué de 63 % ; au bout de 3τ, de 95 % ; au bout de 5τ, de 99 % (on considère le phénomène terminé).

## Premier ordre avec second membre : refroidissement de Newton
Un élément chaud (cœur d'un massif de béton qui s'échauffe pendant la prise, enrobé bitumineux, pièce métallique) se refroidit à une vitesse proportionnelle à l'écart avec l'air ambiant Ta :
$$ T'(t) = − k × (T − Ta)   ⇒   T(t) = Ta + (T₀ − Ta) × e^(− k t)

> [!exemple] Massif de béton en cours de prise
> Le cœur du massif est à T₀ = 60 °C, l'air à Ta = 30 °C, k = 0,1 h⁻¹.
> T(t) = 30 + 30 e^(− 0,1 t) ; après 10 h : T = 30 + 30 × e^(− 1) = 30 + 11,0 = **41,0 °C**.
> Pour descendre à 35 °C : e^(− 0,1 t) = 5/30 = 1/6 → t = 10 × ln 6 = **17,9 h**.

La même équation décrit, de façon simplifiée, la **consolidation** d'un sol argileux (s(t) = s∞ (1 − e^(− t/τ))), le **séchage** d'une chape ou la charge d'un condensateur.

## Second ordre : la déformée d'une poutre
La flèche y(x) d'une poutre fléchie (comptée positive vers le bas) vérifie :
$$ E I × y''(x) = − M(x)
On intègre **deux fois** puis on utilise les **conditions aux appuis** :
- appui simple : y = 0 ;
- encastrement : y = 0 et y' = 0 (rotation nulle) ;
- axe de symétrie : y' = 0.

> [!exemple] Poutre sur deux appuis, charge uniforme q
> M(x) = q x (L − x)/2 → E I y'' = − q L x/2 + q x²/2.
> 1ʳᵉ intégration : E I y' = − q L x²/4 + q x³/6 + C₁.
> 2ᵉ intégration : E I y = − q L x³/12 + q x⁴/24 + C₁ x + C₂.
> y(0) = 0 → C₂ = 0 ; y(L) = 0 → − q L⁴/12 + q L⁴/24 + C₁ L = 0 → C₁ = q L³/24.
> Au milieu : E I y(L/2) = q L⁴ × (− 4 + 1 + 8)/384 → **f = 5 q L⁴ / (384 E I)**.

> [!exemple] Application : solive en bois
> Section 8 × 20 cm ; E = 10 000 MPa ; L = 4 m ; q = 2 kN/m = 2 N/mm.
> I = 80 × 200³/12 = 53,3 × 10⁶ mm⁴.
> f = 5 × 2 × 4 000⁴/(384 × 10 000 × 53,3 × 10⁶) = 2,56 × 10¹⁵/2,05 × 10¹⁴ = **12,5 mm**.
> Limite L/300 = 13,3 mm : **acceptable**.

Pour une **console** encastrée en x = 0 et chargée par P en bout : M(x) = − P (L − x), donc E I y'' = P (L − x), avec y(0) = 0 et y'(0) = 0. On obtient la flèche en bout **P L³/(3 E I)** et la rotation **P L²/(2 E I)** (voir exercices).

## Second ordre : les vibrations libres
Une masse m portée par un élément de raideur k (pylône, poteaux, plancher, ressort), écartée de sa position d'équilibre, oscille selon :
$$ m × x'' + k × x = 0   ⇒   x(t) = A cos(ω t) + B sin(ω t)
$$ ω = √(k/m)   ;   f = ω/(2π)   ;   T = 1/f
- ω : pulsation propre (rad/s) ; f : **fréquence propre** (Hz) ; T : **période** (s).
- Plus la structure est **raide**, plus f est élevée ; plus elle est **lourde**, plus f est basse.
- En réalité les oscillations s'amortissent : x(t) ≈ A e^(− ξ ω t) cos(ω t), avec un amortissement ξ ≈ 2 à 5 % pour les structures courantes.

> [!exemple] Réservoir sur pylône
> Masse m = 20 t = 20 000 kg ; raideur latérale du pylône k = 8 000 kN/m = 8 × 10⁶ N/m.
> ω = √(8 × 10⁶/20 000) = √400 = **20 rad/s** ; f = 20/(2π) = **3,18 Hz** ; T = 1/3,18 = **0,31 s**.

> [!astuce] Ordres de grandeur utiles
> - Bâtiment de N niveaux : période fondamentale T ≈ 0,1 × N secondes (un R+9 oscille en 1 s environ).
> - Plancher : on vise f ≥ 3 Hz, car la marche humaine excite vers 2 Hz. Estimation rapide : f ≈ 18/√δ, avec δ la flèche en mm sous charges permanentes.
> - Si une excitation (machine, foule, vent) a une fréquence proche de f : **résonance**, les amplitudes deviennent dangereuses.

> [!retenir]
> - y' = k y → y = y₀ e^(k t) ; T' = − k (T − Ta) → T = Ta + (T₀ − Ta) e^(− k t).
> - E I y'' = − M ; deux intégrations + conditions d'appui ; f = 5 q L⁴/384 E I ; console : P L³/3 E I.
> - m x'' + k x = 0 → ω = √(k/m) ; f = ω/2π ; T = 1/f.`,
 exercices:[
  {t:"Refroidissement d'un voile en béton", d:1, e:`Le cœur d'un voile épais atteint 65 °C pendant la prise ; l'air est à 25 °C et k = 0,08 h⁻¹.
a) Écrire T(t).
b) Calculer la température après 12 h.
c) Au bout de combien de temps le cœur sera-t-il à 35 °C ?`, c:`a) T(t) = Ta + (T₀ − Ta) e^(− k t) = **25 + 40 e^(− 0,08 t)**.
b) T(12) = 25 + 40 × e^(− 0,96) = 25 + 40 × 0,383 = **40,3 °C**.
c) 25 + 40 e^(− 0,08 t) = 35 → e^(− 0,08 t) = 10/40 = 0,25 → − 0,08 t = ln 0,25 → t = ln 4/0,08 = **17,3 h**.`},
  {t:"Tassement de consolidation", d:2, e:`Le tassement d'un remblai sur argile suit le modèle simplifié s(t) = s∞ (1 − e^(− t/τ)), avec s∞ = 60 mm et τ = 8 mois.
a) Quel est le tassement après 6 mois ?
b) Au bout de combien de temps 90 % du tassement est-il atteint ?
c) Vérifier que s(t) est solution de s' = (s∞ − s)/τ.`, c:`a) s(6) = 60 × (1 − e^(− 0,75)) = 60 × (1 − 0,472) = **31,7 mm**.
b) s = 0,9 s∞ → e^(− t/8) = 0,1 → t = 8 × ln 10 = **18,4 mois** : on attendra un an et demi avant de réaliser les dallages.
c) s'(t) = (s∞/τ) e^(− t/τ) et s∞ − s = s∞ e^(− t/τ) → s' = (s∞ − s)/τ ✓.`},
  {t:"Flèche d'une solive", d:2, e:`Une solive en bois de 10 × 22 cm, de portée 4,50 m, sur deux appuis simples, porte q = 2,5 kN/m. E = 11 000 MPa.
Calculer la flèche et la comparer à la limite L/300.`, c:`I = 100 × 220³/12 = **88,7 × 10⁶ mm⁴** ; q = 2,5 N/mm ; L = 4 500 mm.
f = 5 q L⁴/(384 E I) = 5 × 2,5 × 4 500⁴/(384 × 11 000 × 88,7 × 10⁶) = 5,13 × 10¹⁵/3,75 × 10¹⁴ = **13,7 mm**.
Limite : 4 500/300 = **15 mm** → 13,7 < 15 : **vérifié** (de justesse ; une section 10 × 20 ne passerait pas car I varie comme h³).`},
  {t:"Démontrer la flèche d'une console", d:3, e:`Une console de longueur L, encastrée en x = 0, porte une charge P à son extrémité. On a M(x) = − P (L − x).
a) Intégrer E I y'' = − M(x) avec les conditions d'encastrement et en déduire la flèche et la rotation en bout.
b) Application : balcon en IPE 160 (I = 869 cm⁴), E = 210 000 MPa, L = 1,5 m, P = 10 kN. Comparer à 2L/250.`, c:`a) E I y'' = P (L − x).
E I y' = P (L x − x²/2) + C₁ ; y'(0) = 0 → C₁ = 0.
E I y = P (L x²/2 − x³/6) + C₂ ; y(0) = 0 → C₂ = 0.
En x = L : **y(L) = P L³/(3 E I)** et **y'(L) = P L²/(2 E I)**.
b) E I = 210 000 × 869 × 10⁴ = 1,825 × 10¹² N·mm².
f = 10 000 × 1 500³/(3 × 1,825 × 10¹²) = 3,375 × 10¹³/5,475 × 10¹² = **6,2 mm** ; rotation = 10 000 × 1 500²/(2 × 1,825 × 10¹²) = **0,0062 rad**.
Limite d'une console : 2 × 1 500/250 = **12 mm** → vérifié.`},
  {t:"Fréquence propre d'un château d'eau", d:2, e:`Un réservoir de 50 t est porté par une tour de raideur latérale k = 2 000 kN/m.
a) Calculer ω, f et T.
b) Que devient f si l'on double la raideur de la tour ? Si la masse est divisée par 2 (réservoir à moitié vide) ?`, c:`a) k = 2 × 10⁶ N/m ; m = 5 × 10⁴ kg.
ω = √(2 × 10⁶/5 × 10⁴) = √40 = **6,32 rad/s** ; f = 6,32/(2π) = **1,01 Hz** ; T = **0,99 s**.
b) f est proportionnelle à √(k/m) : doubler k multiplie f par √2 → **1,42 Hz** ; diviser m par 2 donne aussi × √2 → **1,42 Hz**. Le comportement dynamique change avec le remplissage, ce qu'on vérifie dans les calculs au vent et au séisme.`}
 ],
 quiz:[
  {q:"La solution de y' = − 0,2 y avec y(0) = 50 est :", o:["y = 50 e^(− 0,2 t)","y = 50 − 0,2 t","y = − 0,2 e^(50 t)","y = 50 t − 0,2"], r:0, e:"y = y₀ e^(k t) avec k = − 0,2."},
  {q:"L'équation de la déformée d'une poutre est :", o:["E I y'' = − M(x)","E A y' = N","E I y = M(x)","y = M/E"], r:0, e:"La courbure est proportionnelle au moment."},
  {q:"À un encastrement, les conditions sont :", o:["y = 0 et y' = 0","y = 0 seulement","y'' = 0","Aucune condition"], r:0, e:"Ni déplacement ni rotation."},
  {q:"Flèche d'une poutre sur deux appuis sous charge uniforme :", o:["5 q L⁴/(384 E I)","q L²/8","P L³/(3 E I)","q L⁴/(8 E I)"], r:0, e:"Obtenue par double intégration."},
  {q:"Si la raideur k est multipliée par 4, la fréquence propre est :", o:["Multipliée par 2","Multipliée par 4","Divisée par 2","Inchangée"], r:0, e:"f est proportionnelle à √k."}
 ]},

{id:"om-8", niv:3, titre:"Méthodes numériques : dichotomie, Newton, trapèzes, Simpson, Euler", duree:55, contenu:`## Pourquoi des méthodes numériques ?
Beaucoup de problèmes concrets n'ont **pas de formule exacte**, ou portent sur des **données mesurées** et non sur des fonctions connues :
- trouver la hauteur d'eau dans un canal, le taux d'un emprunt, la racine d'un polynôme de degré 3 ;
- calculer un volume de terrassement à partir de profils relevés tous les 10 m ;
- suivre une température ou un tassement au cours du temps.
On calcule alors une **valeur approchée**, avec une **précision maîtrisée**. C'est ce que font en permanence calculatrices, tableurs et logiciels de calcul.

## Résoudre f(x) = 0 par dichotomie
Si f est continue et si f(a) et f(b) sont de **signes contraires**, il existe une racine entre a et b. On coupe l'intervalle en deux, on garde la moitié où le signe change, et on recommence.
- Après n étapes, l'erreur est inférieure à (b − a)/2ⁿ.
- Méthode lente mais **toujours convergente**.

> [!exemple] x³ − 2x − 5 = 0 sur [2 ; 3] (f(2) = − 1 ; f(3) = + 16)
> | Étape | a | b | milieu m | f(m) |
> |---|---|---|---|---|
> | 1 | 2 | 3 | 2,5 | + 5,625 |
> | 2 | 2 | 2,5 | 2,25 | + 1,891 |
> | 3 | 2 | 2,25 | 2,125 | + 0,346 |
> | 4 | 2 | 2,125 | 2,0625 | − 0,351 |
> | 5 | 2,0625 | 2,125 | 2,09375 | − 0,009 |
> Après 5 étapes, la racine est entre 2,09375 et 2,125 (erreur < 1/2⁵ = 0,03).

## La méthode de Newton
On remplace la courbe par sa **tangente** au point xₙ, et on prend le point où cette tangente coupe l'axe des x :
$$ xₙ₊₁ = xₙ − f(xₙ) / f'(xₙ)
- Convergence **très rapide** : le nombre de décimales exactes double environ à chaque itération ;
- Il faut connaître f' et partir **assez près** de la racine (sinon la méthode peut diverger).

> [!exemple] Même équation, départ x₀ = 2
> f(x) = x³ − 2x − 5 ; f'(x) = 3x² − 2.
> x₁ = 2 − (− 1)/10 = **2,1** ; x₂ = 2,1 − 0,061/11,23 = **2,09457** ; x₃ = **2,0945515**.
> Trois itérations donnent 7 chiffres exacts ; il en faudrait plus de vingt par dichotomie.

> [!exemple] Racine carrée « à la main »
> Pour √2 on résout x² − 2 = 0 : xₙ₊₁ = xₙ − (xₙ² − 2)/(2 xₙ) = (xₙ + 2/xₙ)/2.
> Départ 1,5 → 1,41667 → 1,414216 → 1,4142136 (valeur exacte 1,41421356…).

## Application : hauteur d'eau dans un canal trapézoïdal
Un canal a un fond b = 2 m et des talus à 3/2 (m = 1,5) : sa section mouillée vaut A = h (b + m h). Quelle hauteur h donne A = 4 m² ?
> [!exemple] Newton sur f(h) = 1,5 h² + 2 h − 4
> f'(h) = 3 h + 2 ; départ h₀ = 1.
> h₁ = 1 − (− 0,5)/5 = 1,1 ; h₂ = 1,1 − 0,015/5,3 = **1,0972 m**.
> La formule du second degré donne aussi 1,0972 m : la méthode est validée, et elle reste utilisable quand aucune formule n'existe (formule de Manning, par exemple).

## Intégrer des données : trapèzes et Simpson
On connaît y₀, y₁, …, yₙ à **pas constant** h (sections de profils, largeurs d'un terrain, débits…).

**Méthode des trapèzes** : on relie les points par des segments.
$$ I ≈ h × [ (y₀ + yₙ)/2 + y₁ + y₂ + … + yₙ₋₁ ]
**Méthode de Simpson** : on relie les points trois par trois par des paraboles ; il faut un **nombre n d'intervalles pair**.
$$ I ≈ h/3 × [ y₀ + 4 × (y₁ + y₃ + …) + 2 × (y₂ + y₄ + …) + yₙ ]

> [!exemple] Volume de déblai entre 5 profils en travers
> Sections relevées tous les 10 m : 12 – 17 – 19 – 13 – 9 m².
> Trapèzes : V = 10 × [(12 + 9)/2 + 17 + 19 + 13] = 10 × 59,5 = **595 m³**.
> Simpson (n = 4) : V = 10/3 × [12 + 4 × 17 + 2 × 19 + 4 × 13 + 9] = 10/3 × 179 = **596,7 m³**.

En métré de terrassement, la méthode des trapèzes est celle des « **aires moyennes** » : chaque tronçon vaut (S₁ + S₂)/2 × d.

**Précision** : l'erreur des trapèzes varie comme h², celle de Simpson comme h⁴. Diviser le pas par 2 divise l'erreur par 4 (trapèzes) ou par 16 (Simpson). Test sur ∫₀¹ x² dx = 1/3 avec h = 0,25 : trapèzes 0,34375 (+ 3 %) ; Simpson 0,33333 (exact, car Simpson intègre exactement les polynômes de degré ≤ 3).

## Équations différentielles : la méthode d'Euler
Pour y' = F(t, y) avec y(t₀) = y₀, on avance pas à pas en suivant la tangente :
$$ yₙ₊₁ = yₙ + h × F(tₙ, yₙ)
> [!exemple] Refroidissement T' = − 0,1 (T − 30), T₀ = 60 °C, pas h = 1 h
> T₁ = 60 − 0,1 × 30 = 57 °C ; T₂ = 57 − 0,1 × 27 = **54,3 °C**.
> Valeur exacte à 2 h : 30 + 30 e^(− 0,2) = 54,56 °C. L'erreur est proportionnelle au pas : un pas plus petit donne un résultat plus précis.

> [!retenir]
> - Dichotomie : sûre mais lente ; erreur ≤ (b − a)/2ⁿ.
> - Newton : xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ), très rapide près de la racine.
> - Trapèzes : h [(y₀ + yₙ)/2 + somme des intermédiaires] ; Simpson (n pair) : h/3 [y₀ + 4 impairs + 2 pairs + yₙ].
> - Euler : yₙ₊₁ = yₙ + h F(tₙ, yₙ).`,
 exercices:[
  {t:"Dichotomie : √7", d:1, e:`On cherche √7, racine de f(x) = x² − 7 sur [2 ; 3].
a) Effectuer 5 étapes de dichotomie.
b) Combien d'étapes faut-il pour garantir une précision de 0,001 ?`, c:`a)
| Étape | a | b | m | f(m) |
|---|---|---|---|---|
| 1 | 2 | 3 | 2,5 | − 0,75 |
| 2 | 2,5 | 3 | 2,75 | + 0,563 |
| 3 | 2,5 | 2,75 | 2,625 | − 0,109 |
| 4 | 2,625 | 2,75 | 2,6875 | + 0,223 |
| 5 | 2,625 | 2,6875 | 2,65625 | + 0,056 |
La racine est entre 2,625 et 2,65625 (valeur exacte 2,6458).
b) 1/2ⁿ ≤ 0,001 → 2ⁿ ≥ 1 000 → **n = 10** étapes (2¹⁰ = 1 024).`},
  {t:"Newton : cuve cubique de 20 m³", d:2, e:`On veut une cuve cubique de 20 m³ : son côté a vérifie a³ = 20.
Appliquer la méthode de Newton à partir de a₀ = 3 jusqu'à obtenir 4 décimales stables.`, c:`f(a) = a³ − 20 ; f'(a) = 3a² → aₙ₊₁ = aₙ − (aₙ³ − 20)/(3 aₙ²).
a₁ = 3 − 7/27 = **2,7407** ;
a₂ = 2,7407 − 0,5875/22,535 = **2,7147** ;
a₃ = 2,7147 − 0,0056/22,108 = **2,7144** ; a₄ = 2,7144.
Côté intérieur : **a ≈ 2,714 m** (vérification : 2,7144³ = 20,00).`},
  {t:"Surface d'un terrain irrégulier", d:1, e:`Un terrain long de 30 m a été mesuré tous les 5 m ; les largeurs relevées sont : 8 – 11 – 12 – 10 – 9 – 8 – 6 m.
Calculer sa surface par la méthode des trapèzes puis par Simpson.`, c:`h = 5 m ; n = 6 intervalles (pair : Simpson possible).
Trapèzes : S = 5 × [(8 + 6)/2 + 11 + 12 + 10 + 9 + 8] = 5 × 57 = **285 m²**.
Simpson : S = 5/3 × [8 + 4 × (11 + 10 + 8) + 2 × (12 + 9) + 6] = 5/3 × (8 + 116 + 42 + 6) = 5/3 × 172 = **286,7 m²**.
L'écart est inférieur à 1 % : les deux méthodes sont cohérentes.`},
  {t:"Méthode d'Euler : refroidissement", d:2, e:`Un élément en béton refroidit selon T' = − 0,08 (T − 25), avec T₀ = 65 °C.
a) Calculer T à 2 h, 4 h et 6 h par la méthode d'Euler avec un pas h = 2 h.
b) Comparer à la valeur exacte à 6 h.`, c:`a) Tₙ₊₁ = Tₙ − 2 × 0,08 × (Tₙ − 25) = Tₙ − 0,16 (Tₙ − 25).
T(2) = 65 − 0,16 × 40 = **58,6 °C** ; T(4) = 58,6 − 0,16 × 33,6 = **53,2 °C** ; T(6) = 53,22 − 0,16 × 28,22 = **48,7 °C**.
b) Exact : 25 + 40 e^(− 0,48) = **49,75 °C**. Erreur ≈ 1 °C (2 %) ; avec h = 1 h, l'erreur serait environ divisée par 2.`},
  {t:"Hauteur normale dans un canal", d:3, e:`Un canal trapézoïdal a un fond b = 3 m et des talus à 45° (m = 1). On veut une section mouillée A = 6 m².
a) Écrire l'équation en h et la résoudre par Newton à partir de h₀ = 1 m.
b) Calculer le périmètre mouillé P = b + 2h√(1 + m²) et le rayon hydraulique R = A/P.`, c:`a) A = h (3 + h) = 6 → f(h) = h² + 3h − 6 ; f'(h) = 2h + 3.
h₁ = 1 − (− 2)/5 = 1,4 ; h₂ = 1,4 − 0,16/5,8 = 1,3724 ; h₃ = 1,3724 − 0,0008/5,745 = **1,3723 m**.
b) P = 3 + 2 × 1,3723 × √2 = **6,88 m** ; R = 6/6,88 = **0,872 m** (grandeur utilisée dans la formule de Manning pour le débit).`}
 ],
 quiz:[
  {q:"La dichotomie nécessite :", o:["f(a) et f(b) de signes contraires","La dérivée f'","Un nombre pair d'intervalles","Une fonction linéaire"], r:0, e:"Le changement de signe garantit une racine."},
  {q:"La formule de Newton est :", o:["xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)","xₙ₊₁ = (a + b)/2","xₙ₊₁ = xₙ + h f(xₙ)","xₙ₊₁ = f(xₙ)"], r:0, e:"Intersection de la tangente avec l'axe."},
  {q:"La méthode de Simpson exige :", o:["Un nombre pair d'intervalles","Un nombre impair d'intervalles","Un pas variable","Une fonction dérivable connue"], r:0, e:"Les paraboles regroupent les intervalles deux par deux."},
  {q:"Volume entre deux profils de 10 et 14 m² distants de 20 m (aires moyennes) :", o:["240 m³","280 m³","200 m³","120 m³"], r:0, e:"(10 + 14)/2 × 20."},
  {q:"En divisant le pas par 2, l'erreur des trapèzes est :", o:["Divisée par 4","Divisée par 2","Inchangée","Divisée par 16"], r:0, e:"Erreur proportionnelle à h²."}
 ]},

{id:"om-9", niv:3, titre:"Calcul matriciel des structures : la méthode des déplacements", duree:60, contenu:`## Le principe
Les logiciels de calcul de structures utilisent presque tous la **méthode des déplacements** (base de la méthode des éléments finis) :
1. On **découpe** la structure en éléments (barres, poutres) reliés par des **nœuds** ;
2. Les inconnues sont les **déplacements des nœuds** (degrés de liberté : translations, rotations) ;
3. Chaque élément a une **matrice de rigidité** [k] qui relie les forces à ses extrémités à leurs déplacements ;
4. On **assemble** les [k] dans la matrice globale [K] de la structure ;
5. On applique les **conditions d'appui** (déplacements bloqués) ;
6. On **résout** le système [K] {u} = {F} ;
7. On revient aux **efforts** dans chaque élément et aux **réactions**.

Grand avantage : la démarche est **identique** pour une structure isostatique ou **hyperstatique**.

## L'élément barre (traction – compression)
Une barre de longueur L, de section A et de module E se comporte comme un **ressort** de raideur :
$$ k = E × A / L
Si ses extrémités i et j se déplacent de uᵢ et uⱼ le long de son axe, l'effort normal vaut N = k (uⱼ − uᵢ), et les forces aux nœuds s'écrivent :
$$ { Fᵢ ; Fⱼ } = k × ( 1  − 1 ; − 1  1 ) × { uᵢ ; uⱼ }

> [!exemple] Raideur d'une barre en acier
> E = 200 000 MPa ; A = 10 cm² = 1 000 mm² ; L = 10 m = 10 000 mm.
> k = 200 000 × 1 000/10 000 = 20 000 N/mm = **20 000 kN/m** : il faut 20 kN pour l'allonger de 1 mm.

## L'assemblage : deux barres en série
Nœud 1 bloqué ; barre ① entre les nœuds 1 et 2 (k₁ = 20 000 kN/m) ; barre ② entre 2 et 3 (k₂ = 10 000 kN/m) ; force P = 10 kN au nœud 3.
Chaque terme de [K] reçoit la **somme des contributions** des barres qui relient les nœuds concernés :

| | u₁ | u₂ | u₃ |
|---|---|---|---|
| nœud 1 | k₁ | − k₁ | 0 |
| nœud 2 | − k₁ | k₁ + k₂ | − k₂ |
| nœud 3 | 0 | − k₂ | k₂ |

> [!exemple] Résolution
> u₁ = 0 (appui) → on supprime la ligne et la colonne 1 :
> (30 000  − 10 000 ; − 10 000  10 000) × {u₂ ; u₃} = {0 ; 10}
> det = 3 × 10⁸ − 10⁸ = 2 × 10⁸ ; Cramer : u₂ = (10 000 × 10)/(2 × 10⁸) = 0,0005 m = **0,5 mm** ; u₃ = (30 000 × 10)/(2 × 10⁸) = **1,5 mm**.
> Efforts : N₁ = 20 000 × 0,0005 = **10 kN** ; N₂ = 10 000 × (0,0015 − 0,0005) = **10 kN** ; réaction R₁ = **− 10 kN**.

Vérification : en série, les **souplesses** s'ajoutent : 1/k = 1/20 000 + 1/10 000 → k = 6 667 kN/m → u₃ = 10/6 667 = 1,5 mm ✓.

## Série, parallèle et hyperstatique
- **En série** (bout à bout) : 1/k = 1/k₁ + 1/k₂ ; chaque élément transmet le même effort.
- **En parallèle** (éléments qui se déplacent ensemble) : k = k₁ + k₂ ; chacun reprend Fᵢ = kᵢ × u, donc **le plus raide reprend le plus**.
- Une barre bloquée à ses deux extrémités et chargée au milieu est **hyperstatique** : la méthode des déplacements la traite sans difficulté (une seule inconnue u₂, voir exercices).

## La barre inclinée (treillis)
Pour une barre faisant l'angle α avec l'horizontale (c = cos α ; s = sin α), chaque nœud a deux déplacements (u, v). La matrice 4 × 4 de l'élément vaut :
$$ [k] = (E A/L) × ( c²  cs  − c²  − cs ; cs  s²  − cs  − s² ; − c²  − cs  c²  cs ; − cs  − s²  cs  s² )

> [!exemple] Treillis en V
> Deux barres symétriques à 45° (L = 2,83 m ; A = 5 cm² ; E = 210 000 MPa) portent P = 20 kN à leur sommet commun.
> k = 210 000 × 500/2 830 = 37 100 N/mm. Par symétrie, seul le déplacement vertical v compte : K = 2 k s² = 2 × 37 100 × 0,5 = 37 100 N/mm.
> v = 20 000/37 100 = **0,54 mm** ; N = k × v × s = 37 100 × 0,54 × 0,707 ≈ **14,1 kN**, soit bien P/(2 sin 45°).

## L'élément poutre (flexion)
Chaque nœud a une flèche v et une rotation θ. Pour un élément de longueur L et de rigidité E I :
$$ [k] = (E I/L³) × ( 12  6L  − 12  6L ; 6L  4L²  − 6L  2L² ; − 12  − 6L  12  − 6L ; 6L  2L²  − 6L  4L² )

> [!exemple] La console retrouvée par le calcul matriciel
> Encastrement au nœud 1 (v₁ = θ₁ = 0) ; force P au nœud 2. Il reste le bloc du nœud 2 :
> (E I/L³) × (12  − 6L ; − 6L  4L²) × {v₂ ; θ₂} = {P ; 0}
> det = (E I/L³)² × (48 L² − 36 L²) = 12 L² × (E I/L³)².
> v₂ = **P L³/(3 E I)** et θ₂ = **P L²/(2 E I)** : exactement les résultats de l'intégration de la déformée.

## Ce que fait le logiciel… et ce que fait l'ingénieur
- Un portique plan de 50 nœuds à 3 degrés de liberté (u, v, θ) donne un système de 150 équations : impossible à la main, instantané pour l'ordinateur.
- Les résultats ne valent que ce que valent les **données** : appuis, sections, charges, **unités**. L'ingénieur contrôle toujours : somme des réactions = charges totales, flèches plausibles, efforts du bon signe.

> [!retenir]
> - k = E A/L ; élément barre : k (1 − 1 ; − 1 1).
> - Assemblage : on additionne les contributions au même nœud ; on supprime lignes et colonnes des appuis.
> - [K]{u} = {F} → déplacements → efforts N = k Δu → réactions.
> - Série : souplesses ajoutées ; parallèle : raideurs ajoutées.
> - Élément poutre : (E I/L³)(12, 6L, 4L², 2L²) ; console : v = P L³/3 E I.`,
 exercices:[
  {t:"Raideur et allongement d'un tirant", d:1, e:`Un tirant en acier Ø 20 (A = 3,14 cm²), long de 4 m (E = 210 000 MPa), reprend N = 30 kN.
Calculer sa raideur, son allongement et sa contrainte.`, c:`k = E A/L = 210 000 × 314/4 000 = **16 485 N/mm** (≈ 16 500 kN/m).
ΔL = N/k = 30 000/16 485 = **1,82 mm**.
σ = N/A = 30 000/314 = **95,5 MPa** (bien inférieur à la limite élastique d'un acier B500 : 500 MPa).`},
  {t:"Éléments en parallèle", d:1, e:`Une poutre très rigide repose sur deux poteaux de raideurs k₁ = 50 000 kN/m (béton) et k₂ = 150 000 kN/m (plus court et plus gros). Une charge de 400 kN la fait descendre uniformément.
Calculer le tassement commun et l'effort repris par chaque poteau.`, c:`En parallèle : K = k₁ + k₂ = **200 000 kN/m**.
u = 400/200 000 = 0,002 m = **2 mm**.
F₁ = 50 000 × 0,002 = **100 kN** ; F₂ = 150 000 × 0,002 = **300 kN** (total 400 kN ✓).
Le poteau le plus raide reprend les trois quarts de la charge.`},
  {t:"Deux barres en série, deux charges", d:2, e:`Nœud 1 bloqué ; barre ① (1–2) : k₁ = 30 000 kN/m ; barre ② (2–3) : k₂ = 15 000 kN/m. Forces : F₂ = 12 kN au nœud 2 et F₃ = 6 kN au nœud 3.
Assembler, résoudre, puis calculer les efforts et la réaction.`, c:`Système réduit : (45 000  − 15 000 ; − 15 000  15 000) × {u₂ ; u₃} = {12 ; 6}.
det = 6,75 × 10⁸ − 2,25 × 10⁸ = **4,5 × 10⁸**.
u₂ = (12 × 15 000 + 15 000 × 6)/4,5 × 10⁸ = 270 000/4,5 × 10⁸ = 0,0006 m = **0,6 mm**.
u₃ = (45 000 × 6 + 15 000 × 12)/4,5 × 10⁸ = 450 000/4,5 × 10⁸ = **1,0 mm**.
N₁ = 30 000 × 0,0006 = **18 kN** (= 12 + 6 ✓) ; N₂ = 15 000 × 0,0004 = **6 kN** ✓ ; R₁ = **− 18 kN**.`},
  {t:"Une barre hyperstatique", d:2, e:`Une barre est bloquée à ses deux extrémités (nœuds 1 et 3). Le tronçon ① (1–2) a une raideur k₁ = 20 000 kN/m, le tronçon ② (2–3) k₂ = 30 000 kN/m. Une force P = 25 kN, dirigée de 1 vers 3, est appliquée au nœud 2.
Calculer le déplacement du nœud 2, les efforts dans chaque tronçon et les réactions.`, c:`u₁ = u₃ = 0 ; il ne reste qu'une inconnue : (k₁ + k₂) u₂ = P → u₂ = 25/50 000 = 0,0005 m = **0,5 mm**.
N₁ = k₁ (u₂ − u₁) = 20 000 × 0,0005 = **+ 10 kN** (traction) ; N₂ = k₂ (u₃ − u₂) = **− 15 kN** (compression).
Réactions : **10 kN** à l'appui 1 et **15 kN** à l'appui 3 (total 25 kN ✓). La statique seule ne permettait pas ce partage : il dépend des raideurs.`},
  {t:"Console par l'élément poutre", d:3, e:`Une console en IPE 160 (I = 869 cm⁴ ; E = 210 000 MPa) de longueur L = 2 m porte P = 8 kN en bout.
a) Écrire le système réduit en N et mm.
b) Le résoudre et comparer la flèche à 2L/250.`, c:`a) E I = 210 000 × 8,69 × 10⁶ = 1,825 × 10¹² N·mm² ; E I/L³ = 1,825 × 10¹²/8 × 10⁹ = **228,1 N/mm**.
6L = 12 000 mm ; 4L² = 16 × 10⁶ mm² :
228,1 × (12  − 12 000 ; − 12 000  16 × 10⁶) × {v ; θ} = {8 000 ; 0}.
b) v = P L³/(3 E I) = 8 000 × 8 × 10⁹/(5,475 × 10¹²) = **11,7 mm** ; θ = P L²/(2 E I) = 8 000 × 4 × 10⁶/(3,65 × 10¹²) = **0,0088 rad**.
Limite : 2 × 2 000/250 = **16 mm** → vérifié.`}
 ],
 quiz:[
  {q:"La raideur axiale d'une barre vaut :", o:["E A/L","E I/L³","A/L","E L/A"], r:0, e:"Ressort équivalent."},
  {q:"Dans la méthode des déplacements, les inconnues principales sont :", o:["Les déplacements des nœuds","Les réactions seulement","Les sections","Les charges"], r:0, e:"Les efforts s'en déduisent ensuite."},
  {q:"Deux éléments de raideurs k₁ et k₂ en parallèle équivalent à :", o:["k₁ + k₂","k₁ k₂/(k₁ + k₂)","k₁ − k₂","√(k₁ k₂)"], r:0, e:"Ils se déplacent ensemble."},
  {q:"Pour un appui bloqué (u = 0), on :", o:["Supprime la ligne et la colonne correspondantes","Double la raideur","Ajoute une force","Change le module E"], r:0, e:"Le déplacement est connu."},
  {q:"Deux poteaux en parallèle se partagent une charge :", o:["Proportionnellement à leur raideur","Toujours à parts égales","Proportionnellement à leur longueur","Le plus souple reprend tout"], r:0, e:"F = k × u avec u commun."}
 ]},

{id:"om-13", niv:3, titre:"Statistiques et régression linéaire appliquées aux essais", duree:50, contenu:`## Pourquoi des statistiques en génie civil ?
Les matériaux et les mesures **varient** : deux éprouvettes du même béton ne donnent jamais exactement la même résistance ; les essais de sol, les relevés topographiques ou les cadences de chantier sont dispersés. Les statistiques permettent de :
- **résumer** une série de mesures (moyenne, dispersion) ;
- définir des **valeurs caractéristiques** sûres, utilisées dans les calculs ;
- **relier** deux grandeurs entre elles (étalonnage, prévision des coûts).

## Résumer une série : moyenne et écart-type
Pour n valeurs x₁, …, xₙ :
$$ moyenne : m = (x₁ + x₂ + … + xₙ)/n
$$ écart-type : s = √[ Σ (xᵢ − m)² / (n − 1) ]
$$ coefficient de variation : CV = s/m
- L'écart-type mesure la **dispersion** autour de la moyenne (dans la même unité que les données).
- On divise par n − 1 (et non n) pour un **échantillon** : c'est l'écart-type estimé.
- Pour un béton, un CV inférieur à 10 % traduit une production régulière ; au-delà de 15 %, la fabrication est mal maîtrisée.

> [!exemple] Six éprouvettes de béton à 28 jours (MPa)
> | fc | 25 | 28 | 27 | 30 | 26 | 29 |
> |---|---|---|---|---|---|---|
> | xᵢ − m | − 2,5 | 0,5 | − 0,5 | 2,5 | − 1,5 | 1,5 |
> | carré | 6,25 | 0,25 | 0,25 | 6,25 | 2,25 | 2,25 |
> m = 165/6 = **27,5 MPa** ; Σ carrés = 17,5 ; s = √(17,5/5) = √3,5 = **1,87 MPa** ; CV = **6,8 %**.

## La loi normale et la valeur caractéristique
Les résistances suivent approximativement une **loi normale** (courbe « en cloche ») :
- 68 % des valeurs entre m − s et m + s ;
- 95 % entre m − 2s et m + 2s (exactement 1,96 s) ;
- **5 % seulement en dessous de m − 1,645 s**.

Les Eurocodes définissent la **valeur caractéristique** comme ce fractile 5 % : 95 % des résultats lui sont supérieurs.
$$ fk ≈ m − 1,645 × s
> [!exemple] Suite de l'exemple
> fk ≈ 27,5 − 1,645 × 1,87 = **24,4 MPa** : compatible avec un C20/25 (fck = 20 MPa sur cylindre), mais pas avec un C25/30.

> [!norme] Contrôle de conformité du béton
> La norme NF EN 206 fixe ses propres critères. Pour une production initiale jugée sur 3 résultats : moyenne ≥ fck + 4 MPa et chaque résultat ≥ fck − 4 MPa.

## Deux variables : nuage de points et droite de régression
On mesure deux grandeurs sur les mêmes objets (indice sclérométrique et résistance, quantité produite et coût…). On place les points (xᵢ ; yᵢ) : s'ils sont presque alignés, on cherche la droite **y = a x + b** qui passe au plus près, la **droite des moindres carrés** (elle minimise la somme des carrés des écarts verticaux).
$$ Sxx = Σ (xᵢ − x̄)²   ;   Syy = Σ (yᵢ − ȳ)²   ;   Sxy = Σ (xᵢ − x̄)(yᵢ − ȳ)
$$ a = Sxy / Sxx   ;   b = ȳ − a × x̄
$$ coefficient de corrélation : r = Sxy / √(Sxx × Syy)
- r est compris entre − 1 et + 1 ; |r| proche de 1 : forte liaison linéaire ; r proche de 0 : pas de liaison linéaire.
- r² est la part de la variation de y « expliquée » par x.
- La droite passe toujours par le **point moyen** (x̄ ; ȳ).

> [!exemple] Étalonnage d'un scléromètre
> Indice de rebond x et résistance mesurée y (MPa) sur 5 éprouvettes :
> | x | 30 | 34 | 38 | 42 | 46 |
> |---|---|---|---|---|---|
> | y | 20 | 25 | 29 | 33 | 38 |
> x̄ = 38 ; ȳ = 29 ; écarts x : − 8, − 4, 0, 4, 8 ; écarts y : − 9, − 4, 0, 4, 9.
> Sxy = 72 + 16 + 0 + 16 + 72 = 176 ; Sxx = 64 + 16 + 0 + 16 + 64 = 160 ; Syy = 81 + 16 + 0 + 16 + 81 = 194.
> a = 176/160 = **1,1** ; b = 29 − 1,1 × 38 = **− 12,8** → **y = 1,1 x − 12,8**.
> r = 176/√(160 × 194) = **0,999** : excellente corrélation. Pour un indice de 40 : y = 1,1 × 40 − 12,8 = **31,2 MPa**.

## Modèles non linéaires : se ramener à une droite
- y = B e^(k x) → **ln y = k x + ln B** : régression de ln y en fonction de x ;
- y = a ln x + b : régression de y en fonction de ln x (durcissement du béton dans le temps) ;
- y = B xⁿ → ln y = n ln x + ln B : régression de ln y en fonction de ln x.

> [!attention] Interpoler n'est pas extrapoler
> Une droite de régression n'est valable que dans le **domaine des mesures**. La prolonger loin au-delà peut donner des résultats absurdes. Et une corrélation forte ne prouve pas une relation de cause à effet.

> [!retenir]
> - m ; s (division par n − 1) ; CV = s/m.
> - Loi normale : fk ≈ m − 1,645 s (fractile 5 %).
> - Moindres carrés : a = Sxy/Sxx ; b = ȳ − a x̄ ; r = Sxy/√(Sxx Syy).
> - Modèles exponentiels ou logarithmiques : passer par ln.`,
 exercices:[
  {t:"Moyenne, écart-type et valeur caractéristique", d:1, e:`Six éprouvettes cylindriques d'un béton prévu en C25/30 donnent : 31 – 28 – 33 – 30 – 29 – 35 MPa.
Calculer m, s, CV et fk ≈ m − 1,645 s. Conclure.`, c:`m = 186/6 = **31 MPa**.
Écarts : 0 ; − 3 ; 2 ; − 1 ; − 2 ; 4 → carrés : 0 ; 9 ; 4 ; 1 ; 4 ; 16 → somme **34**.
s = √(34/5) = √6,8 = **2,61 MPa** ; CV = 2,61/31 = **8,4 %** (production régulière).
fk ≈ 31 − 1,645 × 2,61 = **26,7 MPa** ≥ 25 MPa → résultats **compatibles** avec un C25/30.`},
  {t:"Coût fixe et coût variable d'un bétonnage", d:2, e:`Sur cinq chantiers, on a relevé le volume coulé x (m³) et le coût total y (milliers de F CFA) :
| x | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|
| y | 820 | 1 450 | 2 150 | 2 800 | 3 480 |
Déterminer la droite y = a x + b, interpréter a et b, puis estimer le coût de 35 m³.`, c:`x̄ = 30 ; ȳ = 10 700/5 = 2 140.
Écarts x : − 20 ; − 10 ; 0 ; 10 ; 20 ; écarts y : − 1 320 ; − 690 ; 10 ; 660 ; 1 340.
Sxy = 26 400 + 6 900 + 0 + 6 600 + 26 800 = **66 700** ; Sxx = 400 + 100 + 0 + 100 + 400 = **1 000**.
a = 66,7 → **coût variable 66 700 F/m³** ; b = 2 140 − 66,7 × 30 = 139 → **coût fixe 139 000 F** (installation, pompe, déplacement).
Pour 35 m³ : y = 66,7 × 35 + 139 = 2 473,5 → **≈ 2 473 500 F**.`},
  {t:"Interpréter un coefficient de corrélation", d:1, e:`Pour une série de mesures, on a obtenu Sxx = 50, Syy = 60 et Sxy = 45.
Calculer r et r², puis interpréter.`, c:`r = 45/√(50 × 60) = 45/54,77 = **0,82** ; r² = **0,67**.
La liaison est **croissante** (r > 0) et assez forte, mais 67 % seulement de la variation de y est expliquée par x : la droite donne une tendance, pas une prévision précise.`},
  {t:"Durcissement du béton : modèle logarithmique", d:3, e:`Un béton donne 18 MPa à 3 jours, 24 MPa à 7 jours et 32 MPa à 28 jours. On adopte le modèle f = a ln t + b.
a) Déterminer a et b par régression de f en fonction de X = ln t.
b) Estimer f à 14 jours, puis à 90 jours. Commenter.`, c:`a) X = ln 3 ; ln 7 ; ln 28 = 1,099 ; 1,946 ; 3,332 → X̄ = 2,126 ; f̄ = 24,67.
Écarts X : − 1,027 ; − 0,180 ; 1,207 ; écarts f : − 6,67 ; − 0,67 ; 7,33.
SXf = 6,85 + 0,12 + 8,85 = **15,81** ; SXX = 1,055 + 0,032 + 1,456 = **2,543**.
a = 15,81/2,543 = **6,22** ; b = 24,67 − 6,22 × 2,126 = **11,45** → f = 6,22 ln t + 11,45.
b) f(14) = 6,22 × 2,639 + 11,45 = **27,9 MPa** (interpolation, fiable).
f(90) = 6,22 × 4,500 + 11,45 = **39,4 MPa** : c'est une **extrapolation**, à confirmer par un essai réel.`},
  {t:"Loi normale et dispersion", d:2, e:`Un béton a une résistance moyenne m = 30 MPa et un écart-type s = 3 MPa.
a) Dans quel intervalle se trouvent 95 % des résultats ?
b) Calculer fk.
c) Une autre centrale a s = 4 MPa : quelle moyenne doit-elle viser pour obtenir fk = 25 MPa ?`, c:`a) m ± 1,96 s = 30 ± 5,9 → **24,1 à 35,9 MPa**.
b) fk = 30 − 1,645 × 3 = **25,1 MPa**.
c) m = 25 + 1,645 × 4 = **31,6 MPa** : une production plus dispersée oblige à viser plus haut, donc à doser davantage de ciment. La régularité est une économie.`}
 ],
 quiz:[
  {q:"L'écart-type mesure :", o:["La dispersion autour de la moyenne","La valeur maximale","Le nombre de mesures","La moyenne"], r:0, e:"Même unité que les données."},
  {q:"La valeur caractéristique (fractile 5 %) vaut environ :", o:["m − 1,645 s","m + 1,645 s","m − s","m/s"], r:0, e:"5 % des résultats lui sont inférieurs."},
  {q:"Pente de la droite des moindres carrés :", o:["a = Sxy/Sxx","a = Sxx/Sxy","a = ȳ/x̄","a = r"], r:0, e:"Puis b = ȳ − a x̄."},
  {q:"r = − 0,98 signifie :", o:["Forte liaison linéaire décroissante","Aucune liaison","Liaison croissante faible","Une erreur de calcul"], r:0, e:"|r| proche de 1, signe négatif."},
  {q:"Pour ajuster y = B e^(k x), on fait la régression de :", o:["ln y en fonction de x","y en fonction de x²","x en fonction de y","e^y en fonction de x"], r:0, e:"ln y = k x + ln B est une droite."}
 ]},

{id:"om-14", niv:3, titre:"Approximations, ordres de grandeur et incertitudes", duree:45, contenu:`## Chiffres significatifs et arrondis
- Un résultat ne peut pas être plus précis que les données : 4,5 m × 3,2 m = 14,4 m², et non 14,400 m².
- Règle pratique : garder 3 ou 4 chiffres significatifs dans les calculs intermédiaires, **arrondir à la fin**.
- On arrondit **dans le sens de la sécurité** : quantités de matériaux et sections d'acier par excès, résistances par défaut.

## Ordres de grandeur : le premier contrôle d'un calcul
Avant de rendre un résultat, on vérifie qu'il est **plausible**. Une erreur d'unité (m au lieu de cm, kN au lieu de N) donne des écarts de 10, 100 ou 1 000 que l'ordre de grandeur détecte immédiatement.

> [!astuce] Quelques repères du bâtiment
> | Grandeur | Ordre de grandeur |
> |---|---|
> | Poids volumique du béton armé | 25 kN/m³ |
> | Poids d'une dalle pleine de 16 cm | 4 kN/m² |
> | Exploitation d'un logement | 1,5 kN/m² |
> | Charge ELU d'un plancher de logement | ≈ 10 kN/m² |
> | Contrainte de compression dans un poteau | ≈ 10 à 15 MPa |
> | Flèche admissible d'un plancher | L/250 à L/500 |
> | Dosage courant en ciment | 350 kg/m³ |

## Développements limités : remplacer une fonction par une droite
Pour x petit devant 1 (en pratique |x| < 0,1), on peut écrire :

| Fonction | Approximation | Exemple avec x = 0,04 |
|---|---|---|
| (1 + x)ⁿ | 1 + n x | 1,04³ ≈ 1,12 (exact 1,1249) |
| √(1 + x) | 1 + x/2 | √1,04 ≈ 1,02 (exact 1,0198) |
| 1/(1 + x) | 1 − x | 1/1,04 ≈ 0,96 (exact 0,9615) |
| eˣ | 1 + x | e^0,04 ≈ 1,04 (exact 1,0408) |
| ln(1 + x) | x | ln 1,04 ≈ 0,04 (exact 0,0392) |

Pour un angle α petit, **exprimé en radians** : sin α ≈ tan α ≈ α ; cos α ≈ 1 − α²/2.

> [!exemple] Pentes et angles
> Une pente de 2 % correspond à tan α = 0,02 → α ≈ 0,02 rad = 0,02 × 180/π = **1,15°**.
> Rampant d'une toiture de projection horizontale 10 m et de pente 10 % : L = 10 √(1 + 0,1²) ≈ 10 × (1 + 0,01/2) = **10,05 m** (exact 10,0499 m).

> [!exemple] Petites variations relatives : la dilatation
> Une poutre acier de 40 m (α = 12 × 10⁻⁶ /°C) subit un écart de 30 °C : L devient L (1 + α ΔT), soit ΔL = 12 × 10⁻⁶ × 40 × 30 = 0,0144 m ≈ **14 mm**, valeur qui dimensionne les joints de dilatation.

## Incertitudes absolues et relatives
Toute mesure est entachée d'une incertitude : x = x₀ ± Δx.
- **Incertitude absolue** Δx, dans l'unité de x ;
- **Incertitude relative** Δx/x, en %.

Règles de propagation (cas le plus défavorable) :
- **Somme ou différence** : on additionne les incertitudes **absolues** : Δ(x + y) = Δx + Δy ;
- **Produit ou quotient** : on additionne les incertitudes **relatives** : Δ(x y)/(x y) = Δx/x + Δy/y ;
- **Puissance** : Δ(xⁿ)/xⁿ = n × Δx/x.

> [!exemple] Section d'une armature
> d = 12 ± 0,2 mm → A = π d²/4 = **113,1 mm²**.
> ΔA/A = 2 × 0,2/12 = 3,3 % → ΔA = 0,033 × 113,1 ≈ **3,8 mm²** → A = 113,1 ± 3,8 mm².

> [!exemple] Volume d'une dalle
> 5,00 ± 0,02 m × 4,00 ± 0,02 m × 0,15 ± 0,005 m → V = **3,00 m³**.
> Incertitude relative : 0,4 % + 0,5 % + 3,3 % = 4,2 % → ΔV ≈ **0,13 m³**.
> C'est l'**épaisseur** qui pèse le plus : 5 mm sur 15 cm valent 3,3 %, alors que 2 cm sur 5 m ne valent que 0,4 %.

Quand les erreurs sont **indépendantes**, l'incertitude réaliste est plus faible : on combine les relatives de façon quadratique, √(0,4² + 0,5² + 3,3²) = 3,4 %.

## Les tolérances d'exécution
Les normes fixent des écarts admissibles sur l'ouvrage réalisé : implantation, aplomb, planéité, position des armatures. Par exemple, l'Eurocode 2 ajoute à l'enrobage minimal une **tolérance d'exécution** Δc_dev = 10 mm (valeur recommandée) : c_nom = c_min + 10 mm. Le calcul doit rester cohérent avec la précision réelle du chantier : afficher une flèche au centième de millimètre n'a aucun sens.

> [!retenir]
> - Arrondir à la fin, dans le sens de la sécurité ; toujours contrôler l'ordre de grandeur.
> - x petit : (1 + x)ⁿ ≈ 1 + n x ; √(1 + x) ≈ 1 + x/2 ; sin α ≈ tan α ≈ α (en radians).
> - Somme : incertitudes absolues ajoutées ; produit : relatives ajoutées ; puissance n : n fois la relative.`,
 exercices:[
  {t:"Calculs approchés", d:1, e:`Sans calculatrice, donner une valeur approchée de 1,03⁴ ; √1,06 ; 1/0,98. Comparer ensuite aux valeurs exactes.`, c:`1,03⁴ ≈ 1 + 4 × 0,03 = **1,12** (exact 1,1255).
√1,06 ≈ 1 + 0,06/2 = **1,03** (exact 1,0296).
1/0,98 = 1/(1 − 0,02) ≈ 1 + 0,02 = **1,02** (exact 1,0204).
Les écarts restent inférieurs à 0,5 % : largement suffisant pour un contrôle rapide.`},
  {t:"Rampe d'accès", d:1, e:`Une rampe pour personnes à mobilité réduite a une pente de 5 % sur une projection horizontale de 12 m.
Calculer le dénivelé, l'angle en degrés et la longueur réelle de la rampe.`, c:`Dénivelé : 12 × 0,05 = **0,60 m**.
Angle : α ≈ 0,05 rad = 0,05 × 180/π = **2,86°**.
Longueur : L = 12 √(1 + 0,05²) ≈ 12 × (1 + 0,0025/2) = **12,015 m** (soit 1,5 cm de plus que la projection).`},
  {t:"Incertitude sur une inertie", d:2, e:`Une poutre a une section b = 20 ± 0,5 cm, h = 40 ± 0,5 cm.
Calculer I = b h³/12 et son incertitude. Quelle dimension doit-on contrôler en priorité ?`, c:`I = 20 × 40³/12 = **106 667 cm⁴**.
ΔI/I = Δb/b + 3 Δh/h = 0,5/20 + 3 × 0,5/40 = 2,5 % + 3,75 % = **6,25 %** → ΔI ≈ **6 700 cm⁴**.
La hauteur intervient au cube : c'est elle qu'il faut contrôler en priorité (coffrage, épaisseur réelle).`},
  {t:"Commande de béton", d:2, e:`Une dalle mesure 6,00 ± 0,03 m × 5,00 ± 0,03 m × 0,16 ± 0,01 m.
Calculer le volume, son incertitude, et proposer un volume à commander.`, c:`V = 6 × 5 × 0,16 = **4,80 m³**.
ΔV/V = 0,03/6 + 0,03/5 + 0,01/0,16 = 0,5 % + 0,6 % + 6,25 % = **7,35 %** → ΔV ≈ **0,35 m³**.
On commande par excès : 4,80 + 0,35 ≈ **5,2 m³**. Là encore, c'est la régularité de l'épaisseur (niveau du coffrage) qui fait l'écart.`},
  {t:"Contrôle d'un calcul de poteau", d:3, e:`Un poteau de 25 × 25 cm porte 4 niveaux ; chaque niveau lui transmet 20 m² de plancher chargé à 10 kN/m² (ELU).
a) Estimer l'effort normal N.
b) Un collègue annonce N = 8 000 kN. Que penser ?
c) Calculer σ = N/A et son incertitude si N est connu à ± 5 % et chaque côté à ± 0,5 cm.`, c:`a) N ≈ 4 × 20 × 10 = **800 kN**.
b) 8 000 kN est **dix fois trop grand** : σ vaudrait 128 MPa, impossible pour un béton (erreur d'unité ou de virgule à rechercher).
c) A = 250 × 250 = 62 500 mm² → σ = 800 000/62 500 = **12,8 MPa** (plausible).
Δσ/σ = 5 % + 0,5/25 + 0,5/25 = 5 % + 2 % + 2 % = **9 %** → σ = 12,8 ± **1,2 MPa**.`}
 ],
 quiz:[
  {q:"Pour x petit, (1 + x)ⁿ ≈", o:["1 + n x","1 + xⁿ","n + x","1 − n x"], r:0, e:"Développement limité à l'ordre 1."},
  {q:"L'approximation sin α ≈ α est valable si α est :", o:["Petit et exprimé en radians","Exprimé en degrés","Supérieur à 1","Quelconque"], r:0, e:"En radians uniquement."},
  {q:"Incertitude sur un produit :", o:["On additionne les incertitudes relatives","On additionne les incertitudes absolues","On les multiplie","On garde la plus grande"], r:0, e:"Δ(xy)/(xy) = Δx/x + Δy/y."},
  {q:"d = 10 ± 0,1 mm : incertitude relative sur l'aire π d²/4 :", o:["2 %","1 %","0,1 %","4 %"], r:0, e:"2 × 0,1/10."},
  {q:"Un poteau de 25 × 25 cm sous 8 000 kN donnerait :", o:["128 MPa : résultat impossible, erreur à rechercher","12,8 MPa : normal","1,28 MPa","0,128 MPa"], r:0, e:"L'ordre de grandeur révèle l'erreur."}
 ]}
]});
