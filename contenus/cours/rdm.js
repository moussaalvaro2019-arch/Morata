/* =====================================================================
   Résistance des matériaux — cours complet (3 niveaux)
   Débutant : charges, équilibre, réactions, contraintes, traction, cisaillement
   Intermédiaire : sections, efforts internes, diagrammes, flexion, flèches, treillis, torsion
   Avancé : sollicitations composées, flambement, hyperstatique, énergie, portiques, Cross
   ===================================================================== */
A.addMatiere({
 id:"rdm",
 titre:"Résistance des matériaux",
 court:"RDM",
 groupe:"struct",
 icone:"beam",
 couleur:"#2F6FDB",
 niveau:"Intermédiaire",
 heures:90,
 ordre:2,
 prerequis:["math", "sp", "om"],
 resume:"Des charges aux contraintes : équilibre, réactions d'appuis, efforts N, V, M, diagrammes, flexion, flèches, flambement, structures hyperstatiques, portiques et méthode de Cross, avec applications et exercices corrigés.",
 objectifs:[
  "Évaluer les charges qui s'appliquent sur un ouvrage et les transmettre jusqu'aux appuis",
  "Écrire l'équilibre d'un solide et calculer les réactions d'appuis d'une structure isostatique",
  "Calculer contraintes et déformations en traction, compression, cisaillement et torsion",
  "Calculer les caractéristiques géométriques d'une section (G, I, W, i)",
  "Tracer les diagrammes d'effort tranchant et de moment fléchissant de toute poutre isostatique",
  "Dimensionner une poutre en flexion (contraintes normales et tangentielles) et calculer sa flèche",
  "Vérifier un élément comprimé au flambement",
  "Résoudre une poutre continue ou un portique hyperstatique (forces, trois moments, Cross)"
 ],
 applications:[
  "Choix d'un profilé métallique (IPE, HEA) ou d'une section de bois",
  "Vérification d'un linteau, d'une poutre ou d'un poteau",
  "Calcul des sollicitations avant le ferraillage en béton armé",
  "Fermes de toiture en treillis, hangars et portiques",
  "Contrôle des résultats d'un logiciel de calcul de structures"
 ],
 chapitres:[
{id:"rdm-7", niv:1, titre:"Introduction : forces, charges et unités", duree:50, contenu:`## À quoi sert la résistance des matériaux ?
La **résistance des matériaux** (RDM) permet de répondre à trois questions avant de construire :
1. **Résistance** : la pièce va-t-elle casser ? (on compare la contrainte à ce que le matériau supporte) ;
2. **Déformation** : va-t-elle trop se déformer ? (une poutre qui fléchit fissure les cloisons et le carrelage) ;
3. **Stabilité** : va-t-elle flamber ou basculer ? (un poteau élancé peut céder bien avant d'être écrasé).

Elle sert à **dimensionner** (trouver la section d'une poutre, d'un poteau, d'un tirant) et à **vérifier** une pièce existante. Le béton armé, la construction métallique et la construction bois s'appuient tous sur la RDM.

## Les unités à maîtriser
En bâtiment, on travaille en **kilonewtons** et en **mètres** pour les charges et les efforts, puis en **mégapascals** pour les contraintes.
| Grandeur | Unité courante | Équivalences utiles |
|---|---|---|
| Force | kN | 1 kN = 1 000 N ≈ le poids de 100 kg |
| Charge linéique (le long d'une poutre) | kN/m | 1 kN/m = 1 N/mm |
| Charge surfacique (sur un plancher) | kN/m² | 1 kN/m² ≈ 100 kg/m² |
| Poids volumique | kN/m³ | béton armé : 25 kN/m³ |
| Moment | kN·m | 1 kN·m = 10⁶ N·mm |
| Contrainte | MPa | 1 MPa = 1 N/mm² = 1 000 kN/m² |

> [!astuce] Le bon réflexe
> Pour passer d'une masse à un poids : P = m × g, avec g ≈ 9,81 m/s² (on arrondit souvent à 10). Un sac de ciment de 50 kg pèse donc environ 0,5 kN.

## Poids volumiques et charges permanentes usuelles
Les **charges permanentes G** sont les poids qui ne changent pas pendant la vie de l'ouvrage : structure, revêtements, cloisons, enduits.
| Matériau ou élément | Poids |
|---|---|
| Béton armé | 25 kN/m³ |
| Béton non armé | 22 à 24 kN/m³ |
| Acier | 78,5 kN/m³ |
| Bois (iroko, samba) | 6 à 8 kN/m³ |
| Terre, remblai | 18 à 20 kN/m³ |
| Eau | 10 kN/m³ |
| Mortier, chape | 20 à 22 kN/m³ |
| Mur en agglos creux de 15 cm enduit deux faces | environ 2,0 kN/m² |
| Mur en agglos creux de 20 cm enduit deux faces | environ 2,5 kN/m² |
| Carrelage + chape de pose (5 cm) | environ 1,0 à 1,2 kN/m² |
| Enduit plâtre ou ciment en sous-face (1,5 cm) | 0,3 kN/m² |
| Plancher à corps creux 16+4 | environ 2,8 kN/m² |

Le poids d'une dalle pleine se calcule simplement : **G = épaisseur × 25 kN/m³**. Une dalle de 15 cm pèse 0,15 × 25 = **3,75 kN/m²**.

## Les charges d'exploitation Q
Les **charges d'exploitation Q** sont dues à l'usage : personnes, meubles, stockage. Elles sont fixées par les normes (NF P 06-001, Eurocode 1).
| Local | Q (kN/m²) |
|---|---|
| Logements (chambres, séjour) | 1,5 |
| Balcons | 3,5 |
| Escaliers et circulations de logements | 2,5 |
| Bureaux | 2,5 |
| Salles de classe | 2,5 |
| Salles de réunion, lieux de culte | 4,0 à 5,0 |
| Terrasse non accessible | 1,0 |
| Terrasse accessible privée | 1,5 |
| Commerces, magasins | 5,0 |

D'autres actions existent : **vent W**, **séisme E**, **température**, poussée des terres ou de l'eau. En Côte d'Ivoire, le vent et la poussée des terres sont souvent les plus importants après G et Q.

## Les trois façons dont une charge s'applique
- **Charge ponctuelle** (ou concentrée) P en kN : un poteau posé sur une poutre, une machine.
- **Charge répartie linéique** q en kN/m : le poids d'un mur posé sur une poutre, le poids propre de la poutre.
- **Charge répartie surfacique** en kN/m² : les charges d'un plancher.

On passe d'une charge surfacique à une charge linéique en multipliant par la **largeur de plancher reprise** par la poutre (sa **largeur d'influence**) :
$$ q (kN/m) = charge surfacique (kN/m²) × largeur d'influence (m)

!fig:hourdis|Un plancher porte dans un sens et charge les poutres sur lesquelles il s'appuie

## Le cheminement des charges
Les charges descendent toujours jusqu'au sol en suivant un chemin : **dalle → poutres → poteaux (ou murs) → fondations → sol**. C'est la **descente de charges**. Une poutre intermédiaire reprend la moitié de la portée de la dalle de chaque côté ; une poutre de rive reprend la moitié d'un seul côté.

> [!exemple] Charges sur une poutre de plancher
> Dalle pleine de 15 cm, carrelage + chape 1,1 kN/m², enduit sous face 0,3 kN/m², logement (Q = 1,5 kN/m²). La poutre est intermédiaire entre deux travées de dalle de 3,6 m et 4,4 m. Section de la poutre : 20 × 40 cm.
> Charge permanente du plancher : 0,15 × 25 + 1,1 + 0,3 = 3,75 + 1,4 = **5,15 kN/m²**.
> Largeur d'influence : 3,6 / 2 + 4,4 / 2 = 1,8 + 2,2 = **4,0 m**.
> Poids propre de la poutre (partie sous la dalle) : 0,20 × (0,40 − 0,15) × 25 = **1,25 kN/m**.
> g = 5,15 × 4,0 + 1,25 = 20,6 + 1,25 = **21,85 kN/m** ; q = 1,5 × 4,0 = **6,0 kN/m**.

## ELU et ELS : deux façons de combiner les charges
On ne vérifie pas un ouvrage sous ses charges « réelles », mais sous des **combinaisons** qui majorent les charges :
- **ELU** (état limite ultime, on vérifie la **résistance**) : p = **1,35 G + 1,5 Q** ;
- **ELS** (état limite de service, on vérifie les **déformations** et la fissuration) : p = **G + Q**.

> [!exemple] Suite de l'exemple
> À l'ELU : pu = 1,35 × 21,85 + 1,5 × 6,0 = 29,50 + 9,0 = **38,50 kN/m**.
> À l'ELS : pser = 21,85 + 6,0 = **27,85 kN/m**.

## Les hypothèses de la RDM
Pour que les calculs restent simples, la RDM fait des hypothèses qui sont vérifiées dans les ouvrages courants :
- le matériau est **continu, homogène et isotrope** (mêmes propriétés partout et dans toutes les directions) ;
- il reste **élastique linéaire** : la déformation est proportionnelle à la contrainte (loi de Hooke) ;
- les **déformations sont petites** : on écrit l'équilibre sur la forme initiale de la pièce ;
- **Navier-Bernoulli** : une section plane et perpendiculaire à la fibre moyenne reste plane et perpendiculaire après déformation ;
- **Saint-Venant** : loin du point d'application d'une charge, seuls comptent sa résultante et son moment ;
- **superposition** : l'effet de plusieurs charges est la somme des effets de chaque charge prise seule.

## Modéliser une structure
Pour calculer, on remplace l'ouvrage réel par un **schéma mécanique** :
- une poutre ou un poteau devient sa **ligne moyenne** (l'axe passant par les centres de gravité des sections) ;
- ses liaisons deviennent des **appuis** (simple, articulation, encastrement) ;
- les charges sont ramenées sur la ligne moyenne en kN, kN/m ou kN·m.
La **portée de calcul** d'une poutre est en général la distance entre les axes des appuis (ou entre nus d'appuis augmentée de la hauteur utile, selon les règlements).

> [!retenir]
> - Toujours écrire les unités : kN, kN/m, kN/m², kN·m, MPa.
> - G = poids permanents (structure + revêtements), Q = exploitation (usage).
> - Charge linéique = charge surfacique × largeur d'influence.
> - ELU : 1,35 G + 1,5 Q (résistance) ; ELS : G + Q (déformations).

> [!attention] Erreurs fréquentes
> Oublier le poids propre de la poutre, compter deux fois la dalle dans la retombée de la poutre, confondre kN/m² et kN/m, ou oublier de convertir des centimètres en mètres.`,
 exercices:[
  {t:"Conversions d'unités", d:1, e:`Convertir :
1. 2 500 kg en kN (prendre g = 10 m/s²) ;
2. 35 kN/m en N/mm ;
3. 18,5 kN·m en N·mm ;
4. 250 000 N répartis sur une section de 40 000 mm² : donner la contrainte en MPa ;
5. 0,02 MPa en kN/m².`, c:`1. P = 2 500 × 10 = 25 000 N = **25 kN**.
2. 35 kN/m = 35 000 N / 1 000 mm = **35 N/mm**.
3. 18,5 kN·m = 18,5 × 1 000 N × 1 000 mm = **18,5 × 10⁶ N·mm**.
4. σ = 250 000 / 40 000 = **6,25 MPa** (1 MPa = 1 N/mm²).
5. 0,02 MPa = 0,02 × 1 000 kN/m² = **20 kN/m²** (c'est l'ordre de grandeur de la pression admissible d'un sol très médiocre… en kPa : 20 kPa).`},
  {t:"Poids d'une dalle et d'un mur", d:1, e:`1. Calculer le poids au m² d'une dalle pleine de 12 cm avec un carrelage + chape de 1,0 kN/m² et un enduit en sous-face de 0,3 kN/m².
2. Un mur en agglos creux de 15 cm (2,0 kN/m², enduits compris) a 2,80 m de hauteur. Quelle charge linéique apporte-t-il sur la poutre qui le porte ?
3. Quelle masse de béton (en tonnes) contient une poutre de 20 × 50 cm et de 6 m de long ?`, c:`1. G = 0,12 × 25 + 1,0 + 0,3 = 3,0 + 1,3 = **4,3 kN/m²**.
2. q = 2,0 × 2,80 = **5,6 kN/m** (on multiplie la charge surfacique du mur par sa hauteur).
3. Volume = 0,20 × 0,50 × 6 = 0,60 m³. Poids = 0,60 × 25 = 15 kN, soit une masse d'environ **1,5 t** (15 000 N / 10).`},
  {t:"Charges et combinaisons sur une poutre", d:2, e:`Une poutre de rive 20 × 35 cm porte une dalle pleine de 14 cm (portée de la dalle : 4,20 m, la poutre reprend un seul côté). Revêtements : 1,2 kN/m² ; enduit sous face : 0,3 kN/m². La poutre porte aussi un mur d'acrotère en agglos de 1,0 m de haut (2,0 kN/m²). Local : bureaux.
1. Calculer la charge permanente g et la charge d'exploitation q par mètre de poutre.
2. En déduire les charges de calcul à l'ELU et à l'ELS.`, c:`1. Plancher : G = 0,14 × 25 + 1,2 + 0,3 = 3,5 + 1,5 = 5,0 kN/m².
Largeur d'influence : 4,20 / 2 = **2,10 m** (poutre de rive).
Plancher sur la poutre : 5,0 × 2,10 = 10,50 kN/m.
Poids propre de la retombée : 0,20 × (0,35 − 0,14) × 25 = 1,05 kN/m.
Acrotère : 2,0 × 1,0 = 2,0 kN/m.
**g = 10,50 + 1,05 + 2,0 = 13,55 kN/m.**
Bureaux : Q = 2,5 kN/m² → **q = 2,5 × 2,10 = 5,25 kN/m**.
2. ELU : pu = 1,35 × 13,55 + 1,5 × 5,25 = 18,29 + 7,88 = **26,17 kN/m**.
ELS : pser = 13,55 + 5,25 = **18,80 kN/m**.`},
  {t:"Descente de charges sur un poteau", d:2, e:`Un poteau intérieur d'une maison R+1 reprend une surface de plancher de 4,0 m × 4,5 m à chaque niveau.
- Plancher haut du RDC : corps creux 16+4 (2,8 kN/m²) + revêtements 1,2 kN/m² ; Q = 1,5 kN/m².
- Toiture-terrasse inaccessible : corps creux 16+4 (2,8 kN/m²) + étanchéité et forme de pente 2,0 kN/m² ; Q = 1,0 kN/m².
- Poteau 20 × 20 cm, hauteur 3,0 m par niveau (2 niveaux).
Calculer G, Q puis l'effort normal ELU en pied de poteau du RDC (on néglige le poids des poutres).`, c:`Surface reprise : 4,0 × 4,5 = **18 m²** par niveau.
Terrasse : G1 = (2,8 + 2,0) × 18 = 4,8 × 18 = 86,4 kN ; Q1 = 1,0 × 18 = 18 kN.
Plancher du 1er : G2 = (2,8 + 1,2) × 18 = 4,0 × 18 = 72,0 kN ; Q2 = 1,5 × 18 = 27 kN.
Poids du poteau : 0,20 × 0,20 × 3,0 × 25 = 3,0 kN par niveau, soit 6,0 kN.
**G = 86,4 + 72,0 + 6,0 = 164,4 kN ; Q = 18 + 27 = 45 kN.**
Nu = 1,35 × 164,4 + 1,5 × 45 = 221,9 + 67,5 = **289,4 kN** en pied du poteau du RDC.`},
  {t:"Hypothèses de la RDM", d:1, e:`Pour chaque situation, dire quelle hypothèse de la RDM est utilisée :
1. On remplace une charge répartie par sa résultante pour calculer les réactions.
2. On calcule séparément l'effet du poids propre et celui d'une charge ponctuelle, puis on additionne.
3. On écrit l'équilibre d'une poutre comme si elle était restée droite, alors qu'elle a fléchi de 8 mm.
4. On suppose qu'une section d'une poutre fléchie reste plane.`, c:`1. Principe de **Saint-Venant** (et définition de la résultante) : pour l'équilibre global, seuls comptent la résultante et sa position.
2. Principe de **superposition** (valable car le comportement est élastique linéaire et les déformations sont petites).
3. Hypothèse des **petites déformations** : 8 mm est négligeable devant la portée, on raisonne sur la géométrie initiale.
4. Hypothèse de **Navier-Bernoulli** : elle permet d'établir que la contrainte de flexion varie linéairement sur la hauteur.`}
 ],
 quiz:[
  {q:"Une dalle pleine de 20 cm pèse :", o:["2,0 kN/m²","5,0 kN/m²","20 kN/m²","0,5 kN/m²"], r:1, e:"0,20 m × 25 kN/m³ = 5,0 kN/m²."},
  {q:"1 MPa est égal à :", o:["1 kN/m²","1 N/mm²","1 kN/mm²","10 N/mm²"], r:1, e:"1 MPa = 1 N/mm² = 1 000 kN/m²."},
  {q:"La combinaison de charges à l'ELU (cas courant) est :", o:["G + Q","1,5 G + 1,35 Q","1,35 G + 1,5 Q","G + 1,5 Q"], r:2, e:"1,35 G + 1,5 Q pour la résistance ; G + Q à l'ELS."},
  {q:"Une poutre reprend 2 m de dalle à 5 kN/m². La charge linéique vaut :", o:["2,5 kN/m","7 kN/m","10 kN/m","25 kN/m"], r:2, e:"5 × 2 = 10 kN/m."},
  {q:"La charge d'exploitation d'un logement vaut en général :", o:["1,5 kN/m²","5 kN/m²","0,5 kN/m²","10 kN/m²"], r:0, e:"1,5 kN/m² pour les pièces d'habitation, 3,5 pour les balcons."}
 ]},

{id:"rdm-10", niv:1, titre:"Moments, résultantes et équilibre d'un solide", duree:55, contenu:`## La force : un vecteur
Une force est définie par son **point d'application**, sa **direction**, son **sens** et son **intensité** (en kN). On la décompose souvent en deux composantes, horizontale et verticale :
$$ Fx = F × cos α      Fy = F × sin α      (α : angle avec l'horizontale)

!fig:forces|Décomposition d'une force inclinée

> [!exemple] Force inclinée
> Un câble tire une poutre avec F = 20 kN, à 30° au-dessus de l'horizontale.
> Fx = 20 × cos 30° = 20 × 0,866 = **17,32 kN** ; Fy = 20 × sin 30° = 20 × 0,5 = **10,0 kN**.

## Le moment d'une force
Une force tend à faire **tourner** un solide autour d'un point. Cet effet de rotation est le **moment** :
$$ M/A = F × d      (kN·m)
où **d** est le **bras de levier** : la distance perpendiculaire entre le point A et la ligne d'action de la force.
- Le moment est **nul** si la force passe par le point (d = 0).
- Signe : on choisit un sens positif, en général le **sens trigonométrique** (inverse des aiguilles d'une montre). Le plus important est de garder le même sens dans tout le calcul.

> [!exemple] Moments par rapport à un point
> Sur une poutre horizontale, on calcule les moments par rapport à l'extrémité A :
> - une charge verticale de 12 kN vers le bas à 2,5 m de A : M = −12 × 2,5 = **−30 kN·m** (sens horaire) ;
> - la force inclinée de 20 kN à 30° appliquée à 3 m de A : seule la composante verticale a un bras de levier (la composante horizontale passe par l'axe de la poutre), M = +10 × 3 = **+30 kN·m**.

**Théorème de Varignon** : le moment d'une force est égal à la somme des moments de ses composantes. C'est pourquoi on décompose systématiquement les forces inclinées.

## Le couple
Deux forces égales, parallèles et de sens opposés, distantes de d, forment un **couple** de moment C = F × d. Un couple fait tourner sans faire avancer : sa résultante est nulle et son moment est le **même par rapport à tous les points**. Exemple : la clé qui serre un écrou, ou un moment appliqué en bout de console.

## Résultante d'une charge répartie
Pour écrire l'équilibre, on remplace une charge répartie par une force unique équivalente, sa **résultante**, égale à l'**aire du diagramme de charge** et placée à son **centre de gravité**.
| Forme de la charge | Résultante R | Position |
|---|---|---|
| Rectangulaire q sur une longueur a | R = q × a | au milieu (a/2) |
| Triangulaire de 0 à q sur a | R = q × a / 2 | à 2a/3 du côté nul (a/3 du côté maximum) |
| Trapézoïdale de q1 à q2 | rectangle q1 × a + triangle (q2 − q1) × a / 2 | on combine les deux positions |

> [!exemple] Charge triangulaire
> Une charge passe de 0 en A à 12 kN/m en B sur 6 m (poussée de terre, charge de remblai…).
> R = 12 × 6 / 2 = **36 kN**, placée à 2/3 × 6 = **4,0 m de A**.

> [!exemple] Charge trapézoïdale
> Charge variant de 4 kN/m en A à 10 kN/m en B sur 5 m. On la découpe :
> - rectangle : R1 = 4 × 5 = 20 kN à 2,5 m de A ;
> - triangle : R2 = (10 − 4) × 5 / 2 = 15 kN à 2/3 × 5 = 3,333 m de A.
> R = 20 + 15 = **35 kN**. Position : x = (20 × 2,5 + 15 × 3,333) / 35 = (50 + 50) / 35 = **2,857 m de A**.

## Le principe fondamental de la statique (PFS)
Un solide est **en équilibre** si la somme des forces et la somme des moments qui s'exercent sur lui sont nulles. Dans le plan, cela donne **trois équations** :
$$ ΣFx = 0      ΣFy = 0      ΣM/A = 0  (A : point quelconque)
Méthode :
1. **Isoler** le solide et dessiner toutes les forces qui s'exercent sur lui, y compris les réactions inconnues ;
2. remplacer les charges réparties par leurs résultantes ;
3. écrire l'équation de moments en un point où passent le plus d'inconnues (elles disparaissent du calcul) ;
4. terminer avec ΣFx = 0 et ΣFy = 0, puis **vérifier** avec une seconde équation de moments.

> [!exemple] La brouette et le levier
> Une brouette porte 600 N de matériaux dont le centre de gravité est à 0,50 m de l'axe de la roue. Les mains tiennent les poignées à 1,40 m de l'axe. Moments par rapport à l'axe de la roue :
> F × 1,40 − 600 × 0,50 = 0 → F = 300 / 1,40 = **214 N**. La roue reprend 600 − 214 = **386 N**.
> Le levier permet de soulever 600 N en ne fournissant que 214 N.

## Équilibre et stabilité au renversement
Un mur, un panneau ou un massif soumis à une force horizontale peut **basculer** autour d'une arête. On compare :
- le **moment de renversement** Mr (forces qui font basculer) ;
- le **moment stabilisant** Ms (poids propre qui retient).
On exige en général **Ms / Mr ≥ 1,5**.

> [!exemple] Panneau de chantier soumis au vent
> Panneau de 3 m × 2 m dont le centre est à 4 m au-dessus de la base du massif ; pression du vent 0,6 kN/m².
> Force du vent : F = 0,6 × 3 × 2 = 3,6 kN. Moment de renversement à la base : Mr = 3,6 × 4 = 14,4 kN·m.
> Massif en béton de 1,2 × 1,2 × 1,0 m : poids = 1,44 × 25 = 36 kN, bras de levier jusqu'à l'arête = 0,6 m → Ms = 36 × 0,6 = 21,6 kN·m.
> Ms / Mr = 21,6 / 14,4 = **1,5** : juste suffisant (on néglige ici le poids du poteau et du panneau, ce qui va dans le sens de la sécurité).

> [!retenir]
> - M = F × d, d perpendiculaire à la force ; une force qui passe par le point a un moment nul.
> - Une charge répartie se remplace par l'aire de son diagramme, placée au centre de gravité.
> - Triangle : R = q a / 2 à a/3 du côté le plus chargé.
> - Équilibre plan : 3 équations ; toujours vérifier avec une équation supplémentaire.`,
 exercices:[
  {t:"Moments de plusieurs forces", d:1, e:`Une poutre AB de 6 m est soumise à :
- une force verticale de 15 kN vers le bas à 1,5 m de A ;
- une force verticale de 8 kN vers le bas à 4 m de A ;
- une force de 10 kN inclinée à 60° sur l'horizontale, vers le bas, appliquée en B.
Calculer le moment de chaque force par rapport à A (sens trigonométrique positif), puis le moment total.`, c:`- 15 kN : M = −15 × 1,5 = **−22,5 kN·m**.
- 8 kN : M = −8 × 4 = **−32 kN·m**.
- 10 kN à 60° : composante verticale 10 × sin 60° = 8,66 kN, bras de levier 6 m → M = −8,66 × 6 = **−51,96 kN·m** (la composante horizontale passe par A et l'axe de la poutre, son moment est nul).
Moment total : −22,5 − 32 − 51,96 = **−106,46 kN·m** (sens horaire). C'est ce moment que devra équilibrer la réaction de l'appui B dans le calcul des réactions.`},
  {t:"Résultantes de charges réparties", d:1, e:`Calculer la résultante et sa position (distance depuis l'extrémité gauche) pour :
1. une charge uniforme de 7,5 kN/m sur 4 m ;
2. une charge triangulaire de 0 (à gauche) à 9 kN/m (à droite) sur 3 m ;
3. une charge triangulaire de 16 kN/m (à gauche) à 0 (à droite) sur 4,5 m.`, c:`1. R = 7,5 × 4 = **30 kN** à **2 m**.
2. R = 9 × 3 / 2 = **13,5 kN** à 2/3 × 3 = **2 m** de la gauche (côté nul à gauche).
3. R = 16 × 4,5 / 2 = **36 kN** à 1/3 × 4,5 = **1,5 m** de la gauche (le maximum est à gauche, la résultante est proche de lui).`},
  {t:"Charge trapézoïdale", d:2, e:`Une poutre de 4 m porte une charge qui varie linéairement de 6 kN/m à gauche à 15 kN/m à droite.
1. Calculer la résultante totale.
2. Calculer sa position par rapport à l'extrémité gauche.`, c:`On découpe la charge en un rectangle et un triangle :
- rectangle : R1 = 6 × 4 = 24 kN, à 2 m ;
- triangle : R2 = (15 − 6) × 4 / 2 = 18 kN, à 2/3 × 4 = 2,667 m.
1. **R = 24 + 18 = 42 kN.**
2. x = (24 × 2 + 18 × 2,667) / 42 = (48 + 48) / 42 = **2,286 m** de la gauche (un peu à droite du milieu, du côté le plus chargé : c'est cohérent).`},
  {t:"Pied-de-biche", d:1, e:`Avec un pied-de-biche, un ouvrier soulève une planche de coffrage collée au béton. Il appuie avec 300 N à 1,20 m du point d'appui ; la planche est accrochée à 0,10 m de ce point.
1. Quelle force est exercée sur la planche ?
2. Quelle est la force sur le point d'appui (on suppose les forces verticales) ?`, c:`1. Équilibre des moments autour du point d'appui : F × 0,10 = 300 × 1,20 → F = 360 / 0,10 = **3 600 N** (3,6 kN : le levier multiplie l'effort par 12).
2. Les deux forces (300 N et 3 600 N) sont de part et d'autre de l'appui et tirent dans le même sens par rapport à lui ; l'appui reprend leur somme : R = 300 + 3 600 = **3 900 N**.`},
  {t:"Stabilité d'un mur de clôture au vent", d:3, e:`Un mur de clôture en agglos pleins de 15 cm (poids : 3,0 kN/m²) a 2,40 m de hauteur hors sol. Le vent exerce 0,5 kN/m² sur toute la hauteur. On étudie 1 m de longueur de mur, posé sur une semelle en béton de 0,60 m de large et 0,30 m d'épaisseur, centrée sous le mur. On néglige la terre sur la semelle.
1. Calculer le moment de renversement autour de l'arête de la semelle, côté sous le vent.
2. Calculer le moment stabilisant (mur + semelle).
3. Le mur est-il stable avec un coefficient de sécurité de 1,5 ?`, c:`On travaille pour 1 m de mur. La base de la semelle est 0,30 m sous le pied du mur.
1. Force du vent : F = 0,5 × 2,40 × 1 = 1,20 kN, appliquée à mi-hauteur du mur, soit à 1,20 + 0,30 = 1,50 m au-dessus de la base de la semelle.
**Mr = 1,20 × 1,50 = 1,80 kN·m.**
2. Poids du mur : 3,0 × 2,40 = 7,20 kN ; poids de la semelle : 0,60 × 0,30 × 25 = 4,50 kN. Les deux sont centrés : bras de levier jusqu'à l'arête = 0,30 m.
**Ms = (7,20 + 4,50) × 0,30 = 3,51 kN·m.**
3. Ms / Mr = 3,51 / 1,80 = **1,95 > 1,5** : le mur est stable au renversement. On remarque que c'est la largeur de la semelle qui donne le bras de levier : une semelle plus étroite rendrait le mur instable.`}
 ],
 quiz:[
  {q:"Le moment d'une force de 8 kN dont la ligne d'action passe à 2,5 m d'un point vaut :", o:["3,2 kN·m","10,5 kN·m","20 kN·m","5,5 kN·m"], r:2, e:"M = F × d = 8 × 2,5 = 20 kN·m."},
  {q:"La résultante d'une charge triangulaire de 0 à 10 kN/m sur 6 m vaut :", o:["60 kN","30 kN","20 kN","10 kN"], r:1, e:"Aire du triangle : 10 × 6 / 2 = 30 kN."},
  {q:"Cette résultante est placée :", o:["Au milieu","À 2 m du côté nul","À 4 m du côté nul","Sur l'appui"], r:2, e:"À 2/3 de la longueur depuis le côté nul, soit 4 m."},
  {q:"Combien d'équations d'équilibre a-t-on pour un solide dans le plan ?", o:["1","2","3","6"], r:2, e:"ΣFx = 0, ΣFy = 0, ΣM = 0."},
  {q:"Le moment d'un couple :", o:["Dépend du point choisi","Est le même en tout point","Est toujours nul","Vaut la somme des deux forces"], r:1, e:"Un couple a une résultante nulle et un moment identique par rapport à tout point."}
 ]},

{id:"rdm-1", niv:1, titre:"Liaisons, appuis et calcul des réactions", duree:60, contenu:`## Les liaisons d'une structure plane
Une poutre ou un portique est relié au reste de l'ouvrage par des **liaisons** (appuis). Chaque liaison empêche certains mouvements et développe, en échange, des **réactions** :
| Liaison | Mouvements empêchés | Réactions inconnues | Exemple réel |
|---|---|---|---|
| Appui simple (rouleau) | déplacement perpendiculaire à l'appui | 1 force (V) | poutre posée sur un appareil d'appui glissant |
| Articulation (rotule) | les deux déplacements | 2 forces (H et V) | pied de portique articulé, assemblage boulonné simple |
| Encastrement | les deux déplacements et la rotation | 2 forces + 1 moment (H, V, M) | console noyée dans un voile, pied de poteau sur grosse semelle |

!fig:console|Une console encastrée : l'encastrement reprend un effort vertical et un moment

> [!attention]
> Dans la réalité, une poutre en béton armé coulée avec ses poteaux n'est ni parfaitement articulée ni parfaitement encastrée. Le choix du modèle est une **hypothèse** du calculateur ; les règlements (BAEL, Eurocodes) donnent des règles pour en tenir compte.

## Isostatique, hyperstatique ou mécanisme ?
Pour une structure plane formée d'un seul solide, on compte les réactions inconnues **r** et on les compare aux **3 équations** de la statique. Le **degré d'hyperstaticité** vaut :
$$ h = r − 3
- **h = 0** : structure **isostatique** : les réactions se calculent avec la statique seule ;
- **h > 0** : structure **hyperstatique** de degré h : il faut ajouter h équations de déformation ;
- **h < 0** : **mécanisme** : la structure n'est pas stable.

Une **articulation intérieure** (rotule entre deux tronçons) ajoute une équation : le moment y est nul. On écrit alors h = r − 3 − (nombre de rotules intérieures simples).
| Structure | r | h | Nature |
|---|---|---|---|
| Poutre sur deux appuis (articulation + appui simple) | 3 | 0 | isostatique |
| Console (un encastrement) | 3 | 0 | isostatique |
| Poutre encastrée à un bout, appui simple à l'autre | 4 | 1 | hyperstatique d'ordre 1 |
| Poutre bi-encastrée | 6 | 3 | hyperstatique d'ordre 3 |
| Poutre continue sur 3 appuis | 4 | 1 | hyperstatique d'ordre 1 |
| Poutre sur deux appuis simples (rouleaux) | 2 | −1 | mécanisme (glisse horizontalement) |

> [!astuce]
> Une structure peut avoir assez d'appuis et rester instable si ceux-ci sont mal placés : trois appuis simples parallèles n'empêchent pas le glissement. Vérifiez toujours que les appuis bloquent les trois mouvements (deux translations et une rotation).

## Méthode de calcul des réactions d'une poutre isostatique
1. Dessiner la poutre, les charges et les réactions inconnues avec un **sens supposé** (vers le haut pour V, vers la droite pour H).
2. Remplacer chaque charge répartie par sa **résultante**.
3. Écrire **ΣM = 0 en un appui** : l'équation ne contient que la réaction de l'autre appui.
4. Écrire **ΣFy = 0** (et ΣFx = 0 s'il y a des forces horizontales).
5. **Vérifier** avec ΣM = 0 à l'autre appui.
6. Une réaction négative signifie simplement que son sens réel est inverse du sens supposé.

> [!exemple] Poutre sur deux appuis avec charges mixtes
> Portée AB = 6 m, charge répartie 5 kN/m sur toute la longueur, charge ponctuelle de 20 kN à 2 m de A.
> Résultante de la charge répartie : 5 × 6 = 30 kN à 3 m de A.
> ΣM/A = 0 : 6 RB − 20 × 2 − 30 × 3 = 0 → RB = 130 / 6 = **21,67 kN**.
> ΣFy = 0 : RA = 20 + 30 − 21,67 = **28,33 kN**.
> Vérification ΣM/B : 6 × 28,33 − 20 × 4 − 30 × 3 = 170 − 80 − 90 = 0 ✔.

> [!exemple] Console
> Console de 2,5 m encastrée en A, charge 4 kN/m et force de 10 kN en bout.
> VA = 4 × 2,5 + 10 = **20 kN** (vers le haut).
> MA = 4 × 2,5 × 2,5 / 2 + 10 × 2,5 = 12,5 + 25 = **37,5 kN·m** (l'encastrement retient la console qui tend à tourner vers le bas).

## Poutre avec porte-à-faux
Une poutre qui dépasse d'un appui (balcon prolongeant une poutre, auvent) a un **porte-à-faux**. La charge sur le porte-à-faux **soulage** l'appui opposé et **charge** l'appui voisin.

> [!exemple] Poutre ABC avec porte-à-faux
> Appuis A (articulation) et B (appui simple), AB = 5 m, porte-à-faux BC = 1,5 m. Charge répartie 8 kN/m sur toute la longueur (6,5 m) et force de 12 kN en C.
> Résultante : 8 × 6,5 = 52 kN à 3,25 m de A.
> ΣM/A : 5 RB − 52 × 3,25 − 12 × 6,5 = 0 → RB = (169 + 78) / 5 = **49,4 kN**.
> ΣFy : RA = 52 + 12 − 49,4 = **14,6 kN**.
> Vérification ΣM/B : 5 RA − 8 × 5 × 2,5 + 8 × 1,5 × 0,75 + 12 × 1,5 = 73 − 100 + 9 + 18 = 0 ✔.
> Si le porte-à-faux était plus long ou plus chargé, RA pourrait devenir **négative** : l'appui A devrait alors être **ancré** pour empêcher la poutre de se soulever.

## Charges inclinées et réactions horizontales
Une force inclinée a une composante horizontale qui doit être reprise par l'appui qui bloque l'horizontale (l'articulation ou l'encastrement).

> [!exemple] Force inclinée à 45°
> Poutre de 4 m : articulation en A, appui simple en B. Force de 10 kN inclinée à 45° vers le bas et vers la droite, à mi-portée.
> Composantes : 10 × cos 45° = 7,07 kN (horizontale) et 7,07 kN (verticale).
> ΣFx : HA = **7,07 kN** vers la gauche. Par symétrie de la charge verticale : VA = VB = 7,07 / 2 = **3,54 kN**.

## Poutres à articulation intérieure (poutres Gerber)
Une **poutre Gerber** comporte des rotules intérieures qui la rendent isostatique malgré plusieurs appuis. On la résout en commençant par le tronçon **porté** (celui qui s'appuie sur la rotule), puis on reporte la réaction de la rotule comme une charge sur le tronçon **porteur**.

> [!retenir]
> - Appui simple : 1 inconnue ; articulation : 2 ; encastrement : 3.
> - h = r − 3 (− 1 par rotule intérieure) : 0 = isostatique, > 0 = hyperstatique, < 0 = mécanisme.
> - Moments en un appui d'abord, puis ΣFy, puis vérification.
> - Une réaction négative est un résultat, pas une erreur : elle change simplement de sens.`,
 exercices:[
  {t:"Poutre avec une charge ponctuelle", d:1, e:`Une poutre AB de 5 m (articulation en A, appui simple en B) porte une charge ponctuelle de 30 kN à 2 m de A. Calculer les réactions et vérifier.`, c:`ΣM/A = 0 : 5 RB − 30 × 2 = 0 → **RB = 12 kN**.
ΣFy = 0 : RA = 30 − 12 = **18 kN**.
Vérification ΣM/B : 5 × 18 − 30 × 3 = 90 − 90 = 0 ✔.
Règle pratique : chaque appui reprend une part de la charge proportionnelle à la distance de la charge à l'**autre** appui (RA = 30 × 3/5, RB = 30 × 2/5).`},
  {t:"Degré d'hyperstaticité", d:1, e:`Donner le degré d'hyperstaticité et la nature des structures planes suivantes :
1. une poutre encastrée en A et posée sur un appui simple en B ;
2. une poutre sur une articulation et deux appuis simples ;
3. une console encastrée avec un appui simple en bout ;
4. une poutre sur deux articulations ;
5. une poutre encastrée en A, une rotule intérieure en B et un appui simple en C.`, c:`1. r = 3 + 1 = 4 → **h = 1** : hyperstatique d'ordre 1.
2. r = 2 + 1 + 1 = 4 → **h = 1** : hyperstatique d'ordre 1 (poutre continue à deux travées).
3. C'est le même cas que 1 : **h = 1**.
4. r = 2 + 2 = 4 → **h = 1** : hyperstatique d'ordre 1 (la réaction horizontale ne peut être déterminée par la statique ; en pratique elle est nulle sous charges verticales si la poutre peut se dilater… ce qui n'est pas le cas ici).
5. r = 3 + 1 = 4, une rotule intérieure → h = 4 − 3 − 1 = **0** : isostatique (poutre Gerber).`},
  {t:"Charges réparties partielles", d:2, e:`Une poutre AB de 7 m (articulation A, appui simple B) porte une charge répartie de 6 kN/m sur les 4 premiers mètres à partir de A, et une charge ponctuelle de 15 kN à 5,5 m de A. Calculer RA et RB et vérifier.`, c:`Résultante de la charge répartie : 6 × 4 = 24 kN à 2 m de A.
ΣM/A = 0 : 7 RB − 24 × 2 − 15 × 5,5 = 0 → 7 RB = 48 + 82,5 = 130,5 → **RB = 18,64 kN**.
ΣFy = 0 : RA = 24 + 15 − 18,64 = **20,36 kN**.
Vérification ΣM/B : 7 × 20,36 − 24 × 5 − 15 × 1,5 = 142,5 − 120 − 22,5 = 0 ✔.`},
  {t:"Console sous charge triangulaire", d:2, e:`Un balcon est modélisé par une console de 3 m encastrée en A. La charge varie de 9 kN/m à l'encastrement à 0 en bout libre. Calculer la réaction verticale et le moment d'encastrement.`, c:`Résultante : R = 9 × 3 / 2 = **13,5 kN**, placée au tiers de la longueur depuis le côté le plus chargé, soit à 1 m de A.
VA = **13,5 kN** (vers le haut).
MA = 13,5 × 1 = **13,5 kN·m**.
Remarque : si la même charge était inversée (0 à l'encastrement, 9 kN/m en bout), la résultante serait à 2 m de A et le moment doublerait : 27 kN·m. La position de la charge compte autant que son intensité.`},
  {t:"Poutre Gerber", d:3, e:`Une poutre ABC est encastrée en A, comporte une rotule intérieure en B et repose sur un appui simple en C. AB = 3 m, BC = 4 m. Elle porte une charge uniforme de 10 kN/m sur toute sa longueur.
1. Montrer qu'elle est isostatique.
2. Calculer la réaction en C et l'effort transmis par la rotule B.
3. Calculer les réactions de l'encastrement A.`, c:`1. r = 3 (encastrement) + 1 (appui C) = 4 ; une rotule intérieure apporte une équation (M = 0 en B) → h = 4 − 3 − 1 = **0** : isostatique.
2. On isole le tronçon **porté** BC, posé sur la rotule B et l'appui C, chargé par 10 × 4 = 40 kN au milieu.
Par symétrie : **RC = 20 kN** et l'effort dans la rotule vaut **20 kN**.
3. Le tronçon AB est une console de 3 m portant sa charge propre 10 × 3 = 30 kN (à 1,5 m de A) et, en B, la force de 20 kN transmise par le tronçon BC.
**VA = 30 + 20 = 50 kN.**
**MA = 30 × 1,5 + 20 × 3 = 45 + 60 = 105 kN·m.**
Vérification globale : VA + RC = 50 + 20 = 70 kN = 10 × 7 ✔.`}
 ],
 quiz:[
  {q:"Un encastrement plan a combien d'inconnues de réaction ?", o:["1","2","3","4"], r:2, e:"H, V et un moment."},
  {q:"Une poutre encastrée à un bout et posée sur un appui simple à l'autre est :", o:["Isostatique","Hyperstatique d'ordre 1","Hyperstatique d'ordre 3","Un mécanisme"], r:1, e:"4 inconnues − 3 équations = 1."},
  {q:"Poutre de 4 m, charge de 20 kN à 1 m de A. La réaction en B vaut :", o:["5 kN","10 kN","15 kN","20 kN"], r:0, e:"RB = 20 × 1 / 4 = 5 kN ; RA = 15 kN."},
  {q:"Une réaction calculée négative signifie :", o:["Une erreur de calcul","Que la réaction agit dans le sens inverse du sens supposé","Que la poutre casse","Que l'appui est inutile"], r:1, e:"Il suffit d'inverser le sens de la flèche."},
  {q:"Pour calculer RB en premier, on écrit :", o:["ΣFy = 0","ΣM en A = 0","ΣM en B = 0","ΣFx = 0"], r:1, e:"Les moments en A éliminent les inconnues de A."}
 ]},

{id:"rdm-11", niv:1, titre:"Contraintes, déformations et loi de Hooke", duree:55, contenu:`## De la force à la contrainte
Une même force n'a pas le même effet sur une barre fine et sur une barre épaisse. Pour juger si un matériau résiste, on ramène la force à la **surface** qui la reçoit : c'est la **contrainte**.
$$ σ = N / A      (contrainte normale, en MPa = N/mm²)
- **N** : effort normal (perpendiculaire à la section), en N ;
- **A** : aire de la section, en mm².
Une contrainte de traction est notée positive, une contrainte de compression négative (ou on précise simplement « compression »).

La contrainte **tangentielle** (ou de cisaillement) τ agit dans le plan de la section :
$$ τ = V / A      (contrainte tangentielle moyenne, en MPa)

!fig:traction|Une barre tendue : la contrainte est la force divisée par la section

> [!exemple] Une tige tendue
> Tige en acier de diamètre 20 mm tendue par N = 50 kN.
> A = π × 20² / 4 = 314,2 mm². σ = 50 000 / 314,2 = **159,2 MPa**.

> [!exemple] Un poteau comprimé
> Poteau en béton de 20 × 20 cm portant 400 kN. A = 200 × 200 = 40 000 mm².
> σ = 400 000 / 40 000 = **10 MPa** (en compression).

## La déformation
Sous l'effort, la barre change de longueur de ΔL. On appelle **déformation** (ou allongement relatif) :
$$ ε = ΔL / L      (sans unité, souvent exprimée en ‰ ou en μm/m)
Une déformation de 1 ‰ signifie 1 mm d'allongement par mètre de longueur.

## La loi de Hooke et le module d'Young
Tant que la contrainte reste modérée, la déformation est **proportionnelle** à la contrainte : c'est la **loi de Hooke**.
$$ σ = E × ε      donc      ΔL = N × L / (E × A)
**E** est le **module d'élasticité** (module d'Young) du matériau, en MPa. Plus E est grand, plus le matériau est **rigide**.
| Matériau | E (MPa) | Coefficient de Poisson ν |
|---|---|---|
| Acier | 200 000 à 210 000 | 0,3 |
| Aluminium | 70 000 | 0,33 |
| Béton (charges de courte durée) | 30 000 à 35 000 | 0,2 |
| Béton (charges de longue durée, fluage) | 10 000 à 12 000 | 0,2 |
| Bois (dans le sens des fibres) | 10 000 à 12 000 | — |
| Verre | 70 000 | 0,22 |

> [!exemple] Allongement de la tige
> Suite de la tige de 20 mm, longueur 3 m, E = 210 000 MPa :
> ε = 159,2 / 210 000 = 0,000 758 = **0,758 ‰**.
> ΔL = ε × L = 0,000 758 × 3 000 = **2,27 mm**.

## Le coefficient de Poisson
Quand une barre s'allonge, elle **s'amincit** ; quand on la comprime, elle **gonfle**. La déformation transversale est proportionnelle à la déformation longitudinale :
$$ εtransversale = − ν × εlongitudinale
Pour la tige précédente (ν = 0,3), le diamètre diminue de 0,3 × 0,000 758 × 20 = **0,0045 mm** : invisible, mais réel.

## L'essai de traction
On tire sur une éprouvette jusqu'à la rupture en mesurant la force et l'allongement. La courbe contrainte-déformation de l'acier montre :
1. une **zone élastique** (droite) : la pente est E ; si on relâche, l'éprouvette reprend sa longueur ;
2. la **limite d'élasticité** fy (ou fe, Re) : au-delà, des déformations **permanentes** apparaissent ;
3. un **palier** puis une **zone d'écrouissage** : la contrainte remonte jusqu'à la **résistance à la rupture** fu (ou Rm) ;
4. la **striction** puis la rupture. L'**allongement à la rupture** A% mesure la ductilité.
| Acier | fy (MPa) | fu (MPa) | Usage |
|---|---|---|---|
| S235 | 235 | 360 | profilés, plats, cornières |
| S275 | 275 | 430 | profilés |
| S355 | 355 | 490 | profilés de grande portée |
| FeE400 (HA) | 400 | ≥ 480 | armatures de béton armé |
| FeE500 (HA) | 500 | ≥ 550 | armatures de béton armé |

## Matériaux ductiles et matériaux fragiles
- **Ductile** (acier, aluminium) : grande déformation avant rupture ; l'ouvrage prévient avant de céder (fissures, flèches).
- **Fragile** (béton, fonte, verre, pierre) : rupture brutale, avec très peu de déformation.
Le béton résiste bien en compression mais mal en traction : pour un béton de résistance fc28 = 25 MPa, la résistance en traction vaut seulement environ
$$ ft28 = 0,6 + 0,06 × fc28 = 0,6 + 0,06 × 25 = 2,1 MPa
C'est pour cela qu'on place de l'**acier** dans les zones tendues : c'est le principe du **béton armé**.

## Contrainte admissible et coefficient de sécurité
On ne fait jamais travailler un matériau jusqu'à sa limite. On divise sa résistance par un **coefficient de sécurité** γ pour obtenir la contrainte à ne pas dépasser :
$$ σlim = résistance du matériau / γ      et on vérifie   σ ≤ σlim
Le coefficient couvre les incertitudes sur les charges, sur la qualité du matériau et sur les calculs. Exemples : γs = 1,15 pour les aciers de béton armé, γb = 1,5 pour le béton (BAEL), γM0 = 1,0 pour les profilés (Eurocode 3), coefficient 5 pour les câbles de levage.

> [!retenir]
> - σ = N / A (MPa = N/mm²) ; ε = ΔL / L ; σ = E ε ; ΔL = N L / (E A).
> - E acier ≈ 200 000 à 210 000 MPa ; E béton ≈ 30 000 MPa à court terme.
> - Ductile = prévient avant de rompre ; fragile = rupture brutale.
> - Toujours vérifier σ ≤ résistance / coefficient de sécurité.

> [!attention]
> Les unités ! Si N est en kN et A en cm², σ est en kN/cm² (1 kN/cm² = 10 MPa). Le plus sûr est de tout convertir en **N** et en **mm²** pour obtenir directement des MPa.`,
 exercices:[
  {t:"Contrainte dans une suspente", d:1, e:`Une suspente en plat d'acier de 40 × 8 mm supporte un effort de traction de 45 kN. Calculer la contrainte. L'acier est un S235 : la suspente résiste-t-elle (coefficient γM0 = 1,0) ?`, c:`A = 40 × 8 = 320 mm².
σ = 45 000 / 320 = **140,6 MPa**.
Contrainte limite : 235 / 1,0 = 235 MPa. 140,6 ≤ 235 : **la suspente résiste**, avec une marge de 235 / 140,6 = 1,67.`},
  {t:"Allongement d'une barre d'armature", d:1, e:`Une barre HA16 (section 201 mm²) de 4 m de long est tendue par un effort de 30 kN. E = 200 000 MPa. Calculer la contrainte, la déformation et l'allongement.`, c:`σ = 30 000 / 201 = **149,3 MPa**.
ε = σ / E = 149,3 / 200 000 = 7,46 × 10⁻⁴ = **0,746 ‰**.
ΔL = ε × L = 7,46 × 10⁻⁴ × 4 000 = **2,98 mm**.`},
  {t:"Exploiter un essai de traction", d:2, e:`Une éprouvette d'acier de diamètre 12 mm et de longueur entre repères L0 = 120 mm est soumise à un essai de traction. On relève :
- sous 15 kN, un allongement de 0,076 mm (domaine élastique) ;
- la limite d'élasticité est atteinte pour 30,5 kN ;
- la rupture se produit sous 46 kN ; la longueur finale entre repères est de 148 mm.
Calculer E, la limite d'élasticité Re, la résistance à la rupture Rm et l'allongement à la rupture A%.`, c:`A = π × 12² / 4 = **113,1 mm²**.
Sous 15 kN : σ = 15 000 / 113,1 = 132,6 MPa ; ε = 0,076 / 120 = 6,33 × 10⁻⁴.
**E = 132,6 / 6,33 × 10⁻⁴ ≈ 209 400 MPa** (valeur normale pour un acier).
**Re = 30 500 / 113,1 = 269,7 MPa.**
**Rm = 46 000 / 113,1 = 406,7 MPa.**
**A% = (148 − 120) / 120 = 23,3 %** : l'acier est ductile. Ces valeurs correspondent à peu près à un acier S275.`},
  {t:"Éprouvette de béton comprimée", d:2, e:`Une éprouvette cylindrique de béton de 16 cm de diamètre et 32 cm de hauteur est comprimée par une force de 400 kN. E = 32 000 MPa et ν = 0,2.
1. Calculer la contrainte de compression.
2. Calculer le raccourcissement de l'éprouvette.
3. Calculer l'augmentation de son diamètre.
4. L'éprouvette s'est rompue sous 500 kN : quelle est la résistance à la compression du béton ?`, c:`1. A = π × 160² / 4 = 20 106 mm². σ = 400 000 / 20 106 = **19,9 MPa**.
2. ε = 19,9 / 32 000 = 6,22 × 10⁻⁴ ; ΔL = 6,22 × 10⁻⁴ × 320 = **0,199 mm**.
3. εt = 0,2 × 6,22 × 10⁻⁴ = 1,24 × 10⁻⁴ ; Δd = 1,24 × 10⁻⁴ × 160 = **0,020 mm**.
4. fc = 500 000 / 20 106 = **24,9 MPa** : c'est un béton d'environ 25 MPa (classe C25/30).
Remarque : au voisinage de la rupture, le béton n'est plus élastique ; le calcul du raccourcissement n'est valable que pour des charges nettement inférieures à la rupture.`},
  {t:"Coefficient de sécurité d'un câble de levage", d:3, e:`Une grue lève une benne à béton de 1 200 kg (benne + béton) avec un câble d'acier de 12 mm de diamètre dont la charge de rupture garantie par le fabricant est de 85 kN.
1. Calculer le coefficient de sécurité. La réglementation exige au moins 5 pour un câble de levage : est-ce conforme ?
2. Quelle masse maximale peut-on lever avec ce câble ?
3. Au démarrage du levage, l'accélération vaut 1,5 m/s². Quel est alors l'effort dans le câble et le coefficient de sécurité réel ?`, c:`1. Poids : P = 1 200 × 9,81 = 11 772 N ≈ 11,8 kN. Coefficient : 85 / 11,8 = **7,2 ≥ 5** : conforme.
2. Charge maximale : 85 / 5 = 17 kN, soit une masse de 17 000 / 9,81 ≈ **1 730 kg**.
3. Au démarrage, le câble doit porter le poids et accélérer la charge : T = m (g + a) = 1 200 × (9,81 + 1,5) = 13 572 N ≈ **13,6 kN**. Coefficient réel : 85 / 13,6 = **6,3**. Les à-coups au levage réduisent la sécurité : c'est pourquoi le coefficient exigé est élevé.`}
 ],
 quiz:[
  {q:"La contrainte normale vaut :", o:["N × A","N / A","A / N","N × L / A"], r:1, e:"Force divisée par la section."},
  {q:"Une barre de 2 m qui s'allonge de 1 mm a une déformation de :", o:["2 ‰","0,5 ‰","0,05 ‰","5 ‰"], r:1, e:"1 / 2 000 = 0,0005 = 0,5 ‰."},
  {q:"Le module d'élasticité de l'acier vaut environ :", o:["30 000 MPa","2 000 MPa","200 000 MPa","2 000 000 MPa"], r:2, e:"200 000 à 210 000 MPa, soit environ 7 fois celui du béton."},
  {q:"Un matériau fragile :", o:["Se déforme beaucoup avant de rompre","Rompt brutalement avec peu de déformation","Ne résiste pas à la compression","Est toujours de l'acier"], r:1, e:"Béton, fonte, verre : rupture sans prévenir."},
  {q:"La résistance en traction d'un béton de 25 MPa vaut environ :", o:["25 MPa","12,5 MPa","2,1 MPa","0,2 MPa"], r:2, e:"ft28 = 0,6 + 0,06 × 25 = 2,1 MPa : environ 10 fois moins qu'en compression."}
 ]},

{id:"rdm-4", niv:1, titre:"Traction et compression simples", duree:60, contenu:`## Quand parle-t-on de traction ou de compression simple ?
Une pièce est en **traction simple** (ou **compression simple**) quand les forces qui la sollicitent se réduisent à un effort **N** appliqué au **centre de gravité** de ses sections et dirigé selon son axe. La contrainte est alors **uniforme** sur toute la section : σ = N / A.
- **Traction** : tirants de fermes, suspentes, câbles, armatures tendues, barres de contreventement.
- **Compression** : poteaux, murs porteurs, bielles de treillis, butons de blindage de fouille.

> [!attention]
> Une pièce comprimée longue et fine peut **flamber** bien avant que la contrainte n'atteigne la résistance du matériau. Ce chapitre traite des pièces **courtes** (ou trapues). Le flambement est étudié au niveau avancé.

## La condition de résistance
On vérifie que la contrainte reste inférieure à la contrainte limite du matériau :
$$ σ = N / A ≤ σlim
Deux usages de cette formule :
- **Vérifier** une pièce existante : on calcule σ et on compare ;
- **Dimensionner** une pièce : on cherche la section minimale A ≥ N / σlim, puis on choisit une section commerciale.

En construction métallique (Eurocode 3), la résistance d'une barre tendue est :
$$ Npl,Rd = A × fy / γM0      avec γM0 = 1,0
Si la barre est percée de trous de boulons, on vérifie aussi la section **nette** (section diminuée des trous) : Nu,Rd = 0,9 × Anet × fu / γM2, avec γM2 = 1,25.

> [!exemple] Dimensionner le tirant d'une ferme
> Le tirant d'une ferme de hangar subit N = 85 kN (ELU). Acier S235.
> Section minimale : A ≥ 85 000 / 235 = **361,7 mm²**.
> Un rond de 20 mm (314 mm²) est insuffisant ; un rond de **22 mm** (380 mm²) convient.
> Vérification : σ = 85 000 / 380 = 223,7 MPa ≤ 235 MPa ✔.

## Allongement et raideur
L'allongement d'une barre tendue se calcule avec la loi de Hooke :
$$ ΔL = N × L / (E × A)
Le rapport **k = E A / L** est la **raideur** de la barre (en N/mm) : la force nécessaire pour l'allonger d'un millimètre.
Pour une barre formée de plusieurs tronçons de sections différentes, on **additionne** les allongements de chaque tronçon.

> [!exemple] Allongement du tirant
> Tirant précédent, longueur 6 m, E = 210 000 MPa :
> ΔL = 85 000 × 6 000 / (210 000 × 380) = 510 × 10⁶ / 79,8 × 10⁶ = **6,4 mm**.
> Cet allongement fait descendre le faîtage de la ferme : il faut parfois le compenser par une **contreflèche** au montage.

## Compression des murs et des poteaux courts
Pour un mur, on raisonne souvent par mètre de longueur : la charge est en kN/m et la section vaut épaisseur × 1 000 mm.

> [!exemple] Mur en agglos pleins
> Un mur en agglos pleins de 15 cm reçoit 60 kN/m.
> σ = 60 000 / (150 × 1 000) = **0,40 MPa**. Des agglos pleins de bonne qualité résistent à 4 MPa environ ; avec un coefficient de sécurité de 3 à 5, la contrainte admissible de la maçonnerie est de l'ordre de 0,8 à 1,3 MPa : le mur convient.

## Contraintes d'origine thermique
Une barre qui chauffe de ΔT s'allonge librement de :
$$ ΔL = α × L × ΔT      (α ≈ 10 à 12 × 10⁻⁶ /°C pour l'acier et le béton)
Si la barre est **bloquée** entre deux appuis indéformables, elle ne peut pas s'allonger et se met en compression :
$$ σ = E × α × ΔT

> [!exemple] Dilatation d'une dalle et d'une barre bloquée
> Dalle de toiture en béton de 30 m chauffée de 30 °C par le soleil (α = 10 × 10⁻⁶) : ΔL = 10 × 10⁻⁶ × 30 000 × 30 = **9 mm**. D'où les **joints de dilatation** (tous les 25 à 35 m environ selon le climat).
> Barre d'acier bloquée chauffée de 30 °C : σ = 210 000 × 12 × 10⁻⁶ × 30 = **75,6 MPa**, sans aucune charge extérieure !

## Pièces composées de deux matériaux
Dans un poteau en béton armé, le béton et l'acier se raccourcissent **ensemble** (même déformation ε). Comme l'acier est plus rigide, il prend une contrainte plus forte :
$$ σs = n × σb      avec   n = Es / Eb   (coefficient d'équivalence)
On calcule une **section homogène** équivalente en béton : Ah = Ab + n × As, puis σb = N / Ah.

> [!exemple] Poteau en béton armé comprimé
> Poteau 25 × 25 cm armé de 4 HA12 (As = 452 mm²), N = 800 kN, n = 200 000 / 30 000 = 6,67.
> Ab = 62 500 − 452 = 62 048 mm² ; Ah = 62 048 + 6,67 × 452 = **65 063 mm²**.
> σb = 800 000 / 65 063 = **12,3 MPa** ; σs = 6,67 × 12,3 = **82,0 MPa**.
> Vérification : 12,3 × 62 048 + 82,0 × 452 = 763 kN + 37 kN = 800 kN ✔. L'acier, qui ne représente que 0,7 % de la section, porte près de 5 % de la charge.

## Concentrations de contraintes
Autour d'un **trou**, d'une **entaille** ou d'un changement brusque de section, la contrainte locale peut atteindre 2 à 3 fois la contrainte moyenne. Pour l'acier ductile, cela se redistribue ; pour les matériaux fragiles et les pièces soumises à la fatigue, il faut éviter les angles vifs (arrondis, transitions douces).

> [!retenir]
> - Vérifier : σ = N / A ≤ σlim ; dimensionner : A ≥ N / σlim.
> - ΔL = N L / (E A) ; on additionne les allongements des tronçons.
> - Barre bloquée chauffée : σ = E α ΔT → joints de dilatation.
> - Section mixte : Ah = Ab + n As, σs = n σb.`,
 exercices:[
  {t:"Dimensionner une suspente", d:1, e:`Une suspente en acier rond S235 doit porter 60 kN (ELU). Diamètres disponibles : 16, 18, 20, 22, 25 mm. Choisir le diamètre et calculer la contrainte obtenue.`, c:`A ≥ 60 000 / 235 = **255,3 mm²**.
Ø16 : 201 mm² (insuffisant) ; Ø18 : 254,5 mm² (insuffisant de peu) ; **Ø20 : 314,2 mm²** ✔.
σ = 60 000 / 314,2 = **191 MPa ≤ 235 MPa**.`},
  {t:"Poteau en bois trapu", d:1, e:`Un poteau de véranda en bois de 15 × 15 cm, court, porte 90 kN. La résistance de calcul du bois en compression vaut 12 MPa. Vérifier le poteau.`, c:`A = 150 × 150 = 22 500 mm².
σ = 90 000 / 22 500 = **4,0 MPa ≤ 12 MPa** ✔.
Le poteau est largement suffisant en compression ; il faudra cependant vérifier son flambement s'il est haut (voir le chapitre sur le flambement).`},
  {t:"Barre à deux tronçons", d:2, e:`Une barre d'acier (E = 210 000 MPa) est formée d'un tronçon de diamètre 20 mm et de 3 m de long, prolongé par un tronçon de diamètre 16 mm et de 2 m de long. Elle est tendue par 40 kN.
1. Calculer la contrainte dans chaque tronçon.
2. Calculer l'allongement total.`, c:`Sections : A1 = π × 20² / 4 = 314,2 mm² ; A2 = π × 16² / 4 = 201,1 mm².
1. **σ1 = 40 000 / 314,2 = 127,3 MPa** ; **σ2 = 40 000 / 201,1 = 198,9 MPa** (le tronçon fin est le plus sollicité).
2. ΔL1 = 40 000 × 3 000 / (210 000 × 314,2) = **1,82 mm** ; ΔL2 = 40 000 × 2 000 / (210 000 × 201,1) = **1,89 mm**.
**ΔL = 1,82 + 1,89 = 3,71 mm.**`},
  {t:"Tuyau bloqué entre deux murs", d:2, e:`Un tuyau d'acier de section 1 000 mm² est fixé rigidement entre deux murs. Il est posé à 25 °C puis chauffé à 50 °C par l'eau chaude qu'il transporte. α = 12 × 10⁻⁶ /°C, E = 210 000 MPa.
1. Calculer la contrainte qui apparaît dans le tuyau.
2. Quelle force exerce-t-il sur chaque mur ?
3. Que faut-il prévoir pour éviter ce problème ?`, c:`1. ΔT = 25 °C. σ = E α ΔT = 210 000 × 12 × 10⁻⁶ × 25 = **63 MPa** (compression).
2. N = σ × A = 63 × 1 000 = 63 000 N = **63 kN** sur chaque mur : de quoi fissurer une maçonnerie !
3. Prévoir une **lyre** ou un **compensateur de dilatation**, ou des fixations glissantes qui laissent le tuyau se dilater librement.`},
  {t:"Poteau en béton armé : partage des efforts", d:3, e:`Un poteau de 30 × 30 cm est armé de 4 HA14 (As = 6,16 cm²). Il porte 1 200 kN en service. On prend n = 15 pour tenir compte du fluage du béton (charges de longue durée).
1. Calculer la section homogène.
2. Calculer les contraintes dans le béton et dans l'acier.
3. Vérifier que la somme des efforts repris par le béton et l'acier redonne bien 1 200 kN.`, c:`1. As = 616 mm² ; Ab = 90 000 − 616 = 89 384 mm².
**Ah = 89 384 + 15 × 616 = 89 384 + 9 240 = 98 624 mm².**
2. **σb = 1 200 000 / 98 624 = 12,17 MPa** ; **σs = 15 × 12,17 = 182,5 MPa**.
3. Béton : 12,17 × 89 384 = 1 087,8 kN ; acier : 182,5 × 616 = 112,4 kN. Total : **1 200,2 kN** ✔ (aux arrondis près).
Avec le fluage (n = 15 au lieu de 6,7), l'acier reprend une part plus importante de la charge au fil des années.`}
 ],
 quiz:[
  {q:"Pour dimensionner un tirant, on calcule :", o:["A ≥ N / σlim","A ≥ N × σlim","A ≥ σlim / N","A ≥ N × L / E"], r:0, e:"La section minimale est l'effort divisé par la contrainte limite."},
  {q:"L'allongement d'une barre tendue vaut :", o:["N A / (E L)","N L / (E A)","E A / (N L)","N / (E A L)"], r:1, e:"ΔL = N L / (E A)."},
  {q:"Une barre d'acier bloquée chauffée de 20 °C (α = 12 × 10⁻⁶, E = 210 000 MPa) subit :", o:["5 MPa","50,4 MPa","252 MPa","0 MPa"], r:1, e:"σ = 210 000 × 12 × 10⁻⁶ × 20 = 50,4 MPa."},
  {q:"Dans un poteau en béton armé comprimé, l'acier subit une contrainte :", o:["Égale à celle du béton","Plus faible que celle du béton","n fois celle du béton","Nulle"], r:2, e:"Même déformation, mais l'acier est n fois plus rigide."},
  {q:"Les joints de dilatation servent à :", o:["Décorer la façade","Laisser le béton se dilater sans créer de contraintes","Évacuer l'eau","Augmenter la résistance"], r:1, e:"Ils évitent les contraintes et fissures d'origine thermique."}
 ]},

{id:"rdm-12", niv:1, titre:"Cisaillement simple et assemblages", duree:55, contenu:`## Le cisaillement simple
Une pièce est cisaillée quand deux forces **opposées**, très **proches** l'une de l'autre, tendent à faire **glisser** une section par rapport à sa voisine (comme les deux lames d'une cisaille). La contrainte apparaît **dans le plan** de la section : c'est la contrainte **tangentielle** τ.
$$ τmoy = V / A      (MPa)
Cas typiques : boulons, rivets, goujons, clous, cordons de soudure, broches, axes d'articulation, poinçonnement d'une dalle par un poteau.

## La déformation de cisaillement
Le cisaillement ne change pas les longueurs mais les **angles** : un carré devient un losange. L'angle de distorsion γ (en radians) est proportionnel à τ :
$$ τ = G × γ      avec   G = E / (2 (1 + ν))
G est le **module de cisaillement** (ou module de Coulomb). Pour l'acier : G = 210 000 / (2 × 1,3) ≈ **81 000 MPa**.

## Les assemblages boulonnés
Un boulon qui relie deux pièces est cisaillé dans le plan de contact :
- **simple cisaillement** : deux pièces, **un** plan cisaillé ;
- **double cisaillement** : trois pièces (une pièce prise entre deux couvre-joints), **deux** plans cisaillés : chaque plan ne reprend que la moitié de l'effort.
$$ τ = F / (m × A)      m : nombre de plans de cisaillement

> [!exemple] Boulon de 16 mm
> Un boulon de diamètre 16 mm (section de la tige A = 201 mm²) transmet F = 30 kN.
> Simple cisaillement : τ = 30 000 / 201 = **149 MPa**. Double cisaillement : τ = 30 000 / (2 × 201) = **74,6 MPa**.

### Résistance d'un boulon selon l'Eurocode 3
La résistance au cisaillement d'un boulon, **par plan cisaillé**, vaut :
$$ Fv,Rd = αv × fub × As / γM2      (αv = 0,6 ; γM2 = 1,25)
- fub : résistance à la rupture du boulon : 400 MPa pour la **classe 4.6**, 800 MPa pour la **classe 8.8** ;
- As : section **résistante** de la partie filetée.
| Boulon | As (mm²) | Fv,Rd classe 4.6 (kN) | Fv,Rd classe 8.8 (kN) |
|---|---|---|---|
| M12 | 84,3 | 16,2 | 32,4 |
| M16 | 157 | 30,1 | 60,3 |
| M20 | 245 | 47,0 | 94,1 |
| M24 | 353 | 67,8 | 135,6 |
Nombre de boulons : **n ≥ F / (m × Fv,Rd)**, arrondi au-dessus.

> [!exemple] Attache d'une diagonale de contreventement
> Une diagonale transmet 180 kN à un gousset ; elle est faite de deux cornières qui prennent le gousset en sandwich (double cisaillement), boulons M16.
> - Classe 8.8 : une M16 reprend 2 × 60,3 = 120,6 kN → n = 180 / 120,6 = 1,49 → **2 boulons**.
> - Classe 4.6 : une M16 reprend 2 × 30,1 = 60,2 kN → n = 180 / 60,2 = 2,99 → **3 boulons**.

### La pression diamétrale (matage)
Le boulon appuie aussi sur le bord du trou de la tôle. La pression de contact vaut environ σ = F / (d × t) (d : diamètre du boulon, t : épaisseur de la tôle). Une tôle trop mince **s'ovalise** : il faut vérifier aussi cette résistance, ainsi que les **pinces** (distances du trou aux bords, au moins 1,2 à 1,5 fois le diamètre du trou).

## Les assemblages soudés
Un **cordon de soudure d'angle** est défini par son épaisseur de **gorge a** (en mm) et sa **longueur utile l**. On vérifie, de façon simplifiée :
$$ τ = F / (a × l) ≤ fvw,d      avec   fvw,d = fu / (√3 × βw × γM2)
Pour un acier S235 : fu = 360 MPa, βw = 0,8 → fvw,d = 360 / (1,732 × 0,8 × 1,25) ≈ **208 MPa**.

> [!exemple] Longueur de soudure
> Un plat transmet 150 kN par des cordons de gorge a = 5 mm.
> l ≥ 150 000 / (5 × 208) = **144 mm** de cordon au total, par exemple **2 cordons de 75 mm**, auxquels on ajoute environ 2a à chaque extrémité pour les cratères de début et de fin de soudure.

## Le poinçonnement des dalles
Un poteau qui porte une dalle (plancher-dalle) ou une charge concentrée sur une dalle tend à la **perforer** en découpant un cône. Le BAEL vérifie la charge sur un contour situé à mi-hauteur de la dalle :
$$ Qu ≤ 0,045 × uc × h × fc28 / γb
- uc : périmètre du contour à mi-épaisseur : pour un poteau a × b, uc = 2 (a + b + 2h) ;
- h : épaisseur de la dalle.

> [!exemple] Poteau de 30 × 30 sous une dalle de 20 cm
> uc = 2 × (0,30 + 0,30 + 2 × 0,20) = 2,0 m. Béton fc28 = 25 MPa = 25 000 kN/m², γb = 1,5.
> Qu,lim = 0,045 × 2,0 × 0,20 × 25 000 / 1,5 = **300 kN**. Si le poteau apporte plus, il faut épaissir la dalle, créer un **chapiteau** ou ajouter des armatures de poinçonnement.

> [!retenir]
> - τ = V / A ; un boulon en double cisaillement est deux fois plus efficace.
> - Classe 8.8 ≈ deux fois plus résistante que 4.6.
> - Soudure : τ = F / (a l) ; on raisonne en longueur utile de cordon.
> - Poinçonnement : Qu ≤ 0,045 uc h fc28 / γb.`,
 exercices:[
  {t:"Axe d'articulation en double cisaillement", d:1, e:`Un axe de diamètre 25 mm articule une bielle prise entre deux flasques (double cisaillement). L'effort transmis vaut 70 kN. Calculer la contrainte de cisaillement dans l'axe.`, c:`A = π × 25² / 4 = 490,9 mm². Deux plans cisaillés :
τ = 70 000 / (2 × 490,9) = **71,3 MPa**.`},
  {t:"Nombre de boulons d'une éclisse", d:2, e:`On doit transmettre un effort de 100 kN par un assemblage à **simple** cisaillement avec des boulons M20 de classe 4.6.
1. Calculer la résistance d'un boulon.
2. Combien de boulons faut-il ?
3. Combien en faudrait-il en classe 8.8 ?`, c:`1. Fv,Rd = 0,6 × 400 × 245 / 1,25 = **47 040 N = 47,0 kN**.
2. n = 100 / 47,0 = 2,13 → **3 boulons**.
3. Classe 8.8 : Fv,Rd = 94,1 kN → n = 100 / 94,1 = 1,06 → **2 boulons** (on évite en général d'utiliser un seul boulon : une attache comporte au moins 2 boulons).`},
  {t:"Longueur d'un cordon de soudure", d:2, e:`Une cornière de contreventement transmet 110 kN à un gousset par deux cordons de soudure latéraux de gorge a = 4 mm (acier S235, fvw,d = 208 MPa).
1. Calculer la longueur utile totale nécessaire.
2. En déduire la longueur de chaque cordon à exécuter (ajouter 2a pour les extrémités).`, c:`1. l ≥ 110 000 / (4 × 208) = **132 mm** au total.
2. Par cordon : 132 / 2 = 66 mm utiles, plus 2 × 4 = 8 mm → on exécute **2 cordons d'environ 75 mm**.`},
  {t:"Poinçonnement d'une dalle", d:2, e:`Une dalle de 16 cm d'épaisseur repose sur un poteau de 25 × 25 cm qui lui transmet Qu = 180 kN. Béton fc28 = 25 MPa, γb = 1,5. Vérifier le poinçonnement selon le BAEL.`, c:`uc = 2 × (0,25 + 0,25 + 2 × 0,16) = 2 × 0,82 = **1,64 m**.
Qu,lim = 0,045 × 1,64 × 0,16 × 25 000 / 1,5 = **196,8 kN**.
180 kN ≤ 196,8 kN : **le poinçonnement est vérifié**, mais la marge est faible (9 %). Une dalle de 18 cm donnerait plus de confort.`},
  {t:"Appareil d'appui en élastomère", d:3, e:`Une poutre de pont repose sur un appareil d'appui en élastomère fretté de 200 × 300 mm, dont l'épaisseur totale d'élastomère vaut 30 mm. Le module de cisaillement de l'élastomère vaut G = 0,9 MPa. Le freinage des véhicules et la dilatation créent un effort horizontal de 20 kN.
1. Calculer la contrainte de cisaillement dans l'élastomère.
2. Calculer l'angle de distorsion γ.
3. En déduire le déplacement horizontal du dessus de l'appareil.`, c:`1. A = 200 × 300 = 60 000 mm². τ = 20 000 / 60 000 = **0,333 MPa**.
2. γ = τ / G = 0,333 / 0,9 = **0,37 rad**.
3. Déplacement : u = γ × e = 0,37 × 30 = **11,1 mm**.
C'est justement le rôle de cet appareil : laisser la poutre se déplacer horizontalement (dilatation) en restant souple en cisaillement, tout en étant très raide en compression grâce aux frettes d'acier. Les règles de calcul limitent en général γ à 0,5 à 0,7 sous ces efforts.`}
 ],
 quiz:[
  {q:"Un boulon en double cisaillement :", o:["Résiste deux fois moins","A deux plans cisaillés et résiste deux fois plus","Ne travaille pas en cisaillement","Est réservé au bois"], r:1, e:"L'effort se partage entre deux sections."},
  {q:"La contrainte de cisaillement moyenne vaut :", o:["V × A","V / A","A / V","V / (E A)"], r:1, e:"τ = V / A."},
  {q:"La classe de boulon 8.8 signifie notamment :", o:["fub = 800 MPa","8 boulons","Diamètre 8 mm","fub = 88 MPa"], r:0, e:"Le premier chiffre × 100 donne fub en MPa ; 8 × 100 = 800 MPa."},
  {q:"Le module de cisaillement de l'acier vaut environ :", o:["210 000 MPa","81 000 MPa","30 000 MPa","0,9 MPa"], r:1, e:"G = E / (2 (1 + ν)) = 210 000 / 2,6 ≈ 81 000 MPa."},
  {q:"Le poinçonnement concerne surtout :", o:["Les tirants","Les dalles portées par des poteaux ou sous charges concentrées","Les murs de clôture","Les câbles"], r:1, e:"Le poteau tend à perforer la dalle selon un cône."}
 ]},

{id:"rdm-3", niv:2, titre:"Caractéristiques géométriques des sections", duree:65, contenu:`## Pourquoi la forme de la section compte
Deux poutres de même section (même quantité de matière) peuvent avoir des résistances très différentes selon la **façon dont la matière est placée**. Un madrier posé à plat plie beaucoup plus que le même madrier posé sur chant. La RDM mesure cette efficacité par quelques grandeurs géométriques : **aire A**, **centre de gravité G**, **moment quadratique I**, **module de flexion W** et **rayon de giration i**.

## Aire et moment statique
L'**aire** A (en cm² ou mm²) intervient en traction, compression et cisaillement.
Le **moment statique** d'une surface par rapport à un axe vaut :
$$ S = Σ Ai × yi      (cm³)
où yi est la distance du centre de gravité de chaque morceau à l'axe. Le moment statique est **nul** par rapport à un axe passant par le centre de gravité.

## Le centre de gravité
Pour une section composée de morceaux simples (rectangles, triangles, cercles) :
$$ yG = Σ (Ai × yi) / Σ Ai
Méthode : 1) découper la section en rectangles ; 2) choisir un axe de référence (souvent la base) ; 3) dresser un tableau Ai, yi, Ai × yi ; 4) diviser.
Une section **symétrique** a son centre de gravité sur l'axe de symétrie.

> [!exemple] Section en T (poutre avec dalle)
> Table de 60 × 10 cm au-dessus d'une âme de 20 × 40 cm (hauteur totale 50 cm). Axe de référence : la base.
> | Morceau | Ai (cm²) | yi (cm) | Ai × yi (cm³) |
> |---|---|---|---|
> | Table | 600 | 45 | 27 000 |
> | Âme | 800 | 20 | 16 000 |
> | Total | 1 400 | | 43 000 |
> yG = 43 000 / 1 400 = **30,71 cm** au-dessus de la base.

## Le moment quadratique (moment d'inertie)
Le moment quadratique I (en cm⁴ ou mm⁴) mesure la **rigidité en flexion** de la section : il somme les petites aires multipliées par le **carré** de leur distance à l'axe. La matière éloignée de l'axe compte donc beaucoup plus que la matière proche.
| Section (axe passant par G) | I | v (fibre extrême) | W = I / v |
|---|---|---|---|
| Rectangle b × h (axe parallèle à b) | b h³ / 12 | h / 2 | b h² / 6 |
| Carré a × a | a⁴ / 12 | a / 2 | a³ / 6 |
| Disque plein de diamètre d | π d⁴ / 64 | d / 2 | π d³ / 32 |
| Tube D (extérieur), d (intérieur) | π (D⁴ − d⁴) / 64 | D / 2 | I / (D / 2) |
| Triangle base b, hauteur h | b h³ / 36 | 2h / 3 (sommet) | — |

> [!exemple] Poser la poutre sur chant !
> Rectangle de 20 × 50 cm, hauteur 50 cm : I = 20 × 50³ / 12 = **208 333 cm⁴**.
> Le même posé à plat (hauteur 20 cm) : I = 50 × 20³ / 12 = **33 333 cm⁴**, soit **6,25 fois moins**.
> Doubler la hauteur d'une poutre multiplie son I par 8 ; doubler sa largeur le multiplie seulement par 2.

## Le théorème de Huygens
Le moment quadratique d'une surface par rapport à un axe parallèle à son axe central, à la distance d, vaut :
$$ I = IG + A × d²
C'est l'outil indispensable pour les sections composées : on calcule l'inertie propre de chaque morceau, on y ajoute A × d² (d : distance entre le centre du morceau et le centre de gravité de la section complète), puis on additionne.

> [!exemple] Inertie de la section en T
> Table : IG = 60 × 10³ / 12 = 5 000 cm⁴ ; d = 45 − 30,71 = 14,29 cm ; A d² = 600 × 14,29² = 122 449 cm⁴.
> Âme : IG = 20 × 40³ / 12 = 106 667 cm⁴ ; d = 30,71 − 20 = 10,71 cm ; A d² = 800 × 10,71² = 91 837 cm⁴.
> **I = 5 000 + 122 449 + 106 667 + 91 837 = 325 953 cm⁴.**
> Fibres extrêmes : vinf = 30,71 cm, vsup = 50 − 30,71 = 19,29 cm.
> Winf = 325 953 / 30,71 = **10 612 cm³** ; Wsup = 325 953 / 19,29 = **16 901 cm³**.

Pour une section creuse ou en I symétrique, on peut aussi **retrancher** les vides : I = (B H³ − b h³) / 12 pour un I formé d'un grand rectangle B × H dont on retire les deux rectangles vides.

## Module de flexion et rayon de giration
- Le **module de flexion** (module élastique) W = I / v (en cm³) donne directement la contrainte maximale en flexion : σmax = M / W. Plus W est grand, plus la poutre résiste.
- Le **rayon de giration** i = √(I / A) (en cm) intervient dans le **flambement** : plus il est grand, moins la pièce comprimée est élancée. Pour un rectangle : i = h / √12 ≈ 0,289 h.

## Les profilés métalliques du commerce
Les catalogues donnent directement A, I, W et i. Extrait pour les IPE (axe fort y-y) :
| Profilé | Masse (kg/m) | A (cm²) | Iy (cm⁴) | Wel,y (cm³) | iy (cm) |
|---|---|---|---|---|---|
| IPE 100 | 8,1 | 10,3 | 171 | 34,2 | 4,07 |
| IPE 120 | 10,4 | 13,2 | 318 | 53,0 | 4,90 |
| IPE 140 | 12,9 | 16,4 | 541 | 77,3 | 5,74 |
| IPE 160 | 15,8 | 20,1 | 869 | 109 | 6,58 |
| IPE 180 | 18,8 | 23,9 | 1 317 | 146 | 7,42 |
| IPE 200 | 22,4 | 28,5 | 1 943 | 194 | 8,26 |
| IPE 220 | 26,2 | 33,4 | 2 772 | 252 | 9,11 |
| IPE 240 | 30,7 | 39,1 | 3 892 | 324 | 9,97 |
| IPE 270 | 36,1 | 45,9 | 5 790 | 429 | 11,2 |
| IPE 300 | 42,2 | 53,8 | 8 356 | 557 | 12,5 |
| IPE 330 | 49,1 | 62,6 | 11 770 | 713 | 13,7 |
| IPE 360 | 57,1 | 72,7 | 16 270 | 904 | 15,0 |
| IPE 400 | 66,3 | 84,5 | 23 130 | 1 160 | 16,5 |
La forme en I place la matière loin de l'axe, dans les **semelles** : c'est la forme la plus efficace en flexion pour un poids donné.

> [!retenir]
> - yG = Σ Ai yi / Σ Ai ; Huygens : I = IG + A d².
> - Rectangle : I = b h³ / 12, W = b h² / 6 ; disque : I = π d⁴ / 64.
> - La hauteur est le paramètre le plus efficace (puissance 3).
> - W = I / v pour les contraintes ; i = √(I / A) pour le flambement.

> [!attention]
> Dans Huygens, la distance d se mesure entre le centre du **morceau** et le centre de gravité de la **section entière**, pas l'axe de référence de départ. Et les unités : 1 cm⁴ = 10 000 mm⁴.`,
 exercices:[
  {t:"Madrier à plat ou sur chant", d:1, e:`Un madrier de bois mesure 7,5 × 22,5 cm.
1. Calculer I et W lorsqu'il est posé sur chant (hauteur 22,5 cm).
2. Même calcul posé à plat (hauteur 7,5 cm).
3. Dans quel rapport la résistance en flexion change-t-elle ?`, c:`1. Sur chant : I = 7,5 × 22,5³ / 12 = **7 119 cm⁴** ; W = 7,5 × 22,5² / 6 = **632,8 cm³**.
2. À plat : I = 22,5 × 7,5³ / 12 = **791 cm⁴** ; W = 22,5 × 7,5² / 6 = **210,9 cm³**.
3. Rapport des W : 632,8 / 210,9 = **3** (= 22,5 / 7,5). La rigidité (rapport des I) est, elle, multipliée par 9. On pose toujours les chevrons et les solives sur chant.`},
  {t:"Deux madriers collés ou simplement superposés", d:2, e:`On superpose deux madriers de 7,5 × 22,5 cm posés sur chant (hauteur totale 45 cm).
1. Calculer I s'ils sont parfaitement **collés** (section unique de 7,5 × 45 cm).
2. Calculer I s'ils sont simplement **posés** l'un sur l'autre et glissent librement (chacun fléchit autour de son propre axe).
3. Conclure.`, c:`1. Collés : I = 7,5 × 45³ / 12 = **56 953 cm⁴**.
2. Non solidarisés : I = 2 × 7,5 × 22,5³ / 12 = 2 × 7 119 = **14 238 cm⁴**.
3. Les madriers collés sont **4 fois plus rigides** (et 2 fois plus résistants). Pour qu'une poutre composée travaille comme une seule section, il faut empêcher le glissement entre ses éléments (colle, boulons, connecteurs) : c'est le même principe que les **connecteurs** des planchers mixtes acier-béton ou les **armatures de couture** entre une dalle et sa poutre.`},
  {t:"Poutre en T : centre de gravité et inertie", d:2, e:`Une poutre en T est formée d'une table de 80 × 12 cm et d'une âme de 25 × 48 cm (hauteur totale 60 cm).
1. Calculer la position du centre de gravité depuis la base.
2. Calculer le moment quadratique I par rapport à l'axe horizontal passant par G.
3. Calculer les modules de flexion des fibres inférieure et supérieure.`, c:`1. Table : A1 = 960 cm², y1 = 48 + 6 = 54 cm ; âme : A2 = 1 200 cm², y2 = 24 cm.
yG = (960 × 54 + 1 200 × 24) / 2 160 = (51 840 + 28 800) / 2 160 = **37,33 cm**.
2. Table : 80 × 12³ / 12 = 11 520 ; d = 54 − 37,33 = 16,67 cm ; A d² = 960 × 16,67² = 266 667.
Âme : 25 × 48³ / 12 = 230 400 ; d = 37,33 − 24 = 13,33 cm ; A d² = 1 200 × 13,33² = 213 333.
**I = 11 520 + 266 667 + 230 400 + 213 333 ≈ 721 920 cm⁴.**
3. vinf = 37,33 cm → **Winf = 721 920 / 37,33 ≈ 19 337 cm³** ; vsup = 22,67 cm → **Wsup ≈ 31 849 cm³**.`},
  {t:"Profil en I reconstitué soudé", d:2, e:`Un profil en I est reconstitué par soudage de deux semelles de 200 × 20 mm et d'une âme de 360 × 10 mm (hauteur totale 400 mm).
1. Calculer l'aire de la section.
2. Calculer Iy par la méthode du « grand rectangle moins les vides ».
3. Calculer Wel,y et comparer avec un IPE 400 (Wel,y = 1 160 cm³, A = 84,5 cm²).`, c:`1. A = 2 × 200 × 20 + 360 × 10 = 8 000 + 3 600 = **11 600 mm² = 116 cm²**.
2. Grand rectangle 200 × 400 moins deux vides de 95 × 360 (soit 190 × 360 au total) :
Iy = (200 × 400³ − 190 × 360³) / 12 = (12,80 × 10⁹ − 8,865 × 10⁹) / 12 = **3,279 × 10⁸ mm⁴ = 32 795 cm⁴**.
3. **Wel,y = 32 795 / 20 = 1 640 cm³**, soit 41 % de plus que l'IPE 400 pour 37 % de matière en plus : les semelles épaisses et larges sont efficaces en flexion.`},
  {t:"Renforcer un IPE 200 par un plat soudé", d:3, e:`Pour renforcer un IPE 200 (h = 20 cm, A = 28,5 cm², Iy = 1 943 cm⁴), on soude sous sa semelle inférieure un plat de 120 × 10 mm.
1. Calculer la position du nouveau centre de gravité (depuis la face inférieure du plat).
2. Calculer le nouveau moment quadratique.
3. Calculer les modules de flexion supérieur et inférieur. Le renfort est-il efficace pour la fibre supérieure ?`, c:`1. Plat : A = 12 cm², centre à 0,5 cm. IPE : centre à 1 + 10 = 11 cm.
yG = (28,5 × 11 + 12 × 0,5) / 40,5 = 319,5 / 40,5 = **7,89 cm**.
2. IPE : 1 943 + 28,5 × (11 − 7,89)² = 1 943 + 275,8 = 2 218,8 cm⁴.
Plat : 12 × 1² / 12 + 12 × (7,89 − 0,5)² = 1 + 655,2 = 656,2 cm⁴.
**I = 2 875 cm⁴** (+ 48 %).
3. vsup = 21 − 7,89 = 13,11 cm → **Wsup = 219,3 cm³** (contre 194 cm³ avant : + 13 % seulement) ; vinf = 7,89 cm → **Winf = 364,4 cm³**.
Le plat inférieur rapproche le centre de gravité du bas : la fibre supérieure, maintenant plus éloignée, reste la plus sollicitée. Pour renforcer efficacement en flexion, il faut renforcer **les deux semelles** (ou choisir un profilé plus haut).`}
 ],
 quiz:[
  {q:"Le moment quadratique d'un rectangle b × h (axe parallèle à b) vaut :", o:["b h² / 6","b h³ / 12","b³ h / 12","b h / 12"], r:1, e:"I = b h³ / 12 ; W = b h² / 6."},
  {q:"Si on double la hauteur d'une poutre rectangulaire, son moment quadratique est multiplié par :", o:["2","4","8","16"], r:2, e:"I varie comme h³ : 2³ = 8."},
  {q:"Le théorème de Huygens s'écrit :", o:["I = IG − A d²","I = IG + A d²","I = IG × A","I = A / d²"], r:1, e:"On ajoute A d² pour un axe parallèle décalé de d."},
  {q:"Le module de flexion W sert à calculer :", o:["La flèche","La contrainte maximale σ = M / W","Le centre de gravité","L'effort tranchant"], r:1, e:"W = I / v donne directement σmax = M / W."},
  {q:"Pourquoi les profilés en I sont-ils efficaces en flexion ?", o:["Ils sont moins chers à souder","La matière est placée loin de l'axe neutre, dans les semelles","Ils n'ont pas d'âme","Ils sont pleins"], r:1, e:"Le moment quadratique dépend du carré de la distance à l'axe."}
 ]},

{id:"rdm-2", niv:2, titre:"Efforts internes N, V, M : la méthode des coupures", duree:60, contenu:`## De l'extérieur à l'intérieur
Les réactions d'appuis assurent l'équilibre **global** de la poutre. Pour la dimensionner, il faut connaître ce qui se passe **à l'intérieur**, dans chaque section : c'est le rôle des **efforts internes** (ou **sollicitations**).
Dans une poutre plane, chaque section transmet trois efforts :
- **N** : l'**effort normal** (traction ou compression le long de l'axe) ;
- **V** : l'**effort tranchant** (perpendiculaire à l'axe, il tend à faire glisser les sections) ;
- **M** : le **moment fléchissant** (il tend à courber la poutre).

## La méthode des coupures
1. Calculer d'abord **toutes les réactions** d'appuis.
2. **Couper** la poutre par la pensée à l'abscisse x de la section étudiée.
3. Garder une des deux parties (en général la partie **de gauche**) et écrire que les efforts internes **équilibrent** les forces appliquées à cette partie.
4. On obtient N(x), V(x), M(x).
Avec la partie de gauche, on retient la convention suivante (utilisée dans tout ce cours et dans les solveurs de la plateforme) :
$$ N(x) = somme des forces horizontales à gauche, comptée positive en traction
$$ V(x) = somme des forces verticales à gauche de la coupure (vers le haut = positif)
$$ M(x) = somme des moments, au droit de la coupure, des forces à gauche (positif si la fibre inférieure est tendue)

> [!astuce] Le signe du moment
> Un moment **positif** fait « sourire » la poutre (concavité vers le haut) : la fibre **inférieure** est **tendue**. C'est le cas en travée d'une poutre sur deux appuis. Un moment **négatif** tend la fibre **supérieure** : sur une console ou au-dessus d'un appui intermédiaire. En béton armé, l'acier se place du côté tendu.

> [!attention]
> D'autres ouvrages utilisent la convention opposée pour V (somme des forces à **droite**, ou signe inversé). Les diagrammes ont alors le même aspect au signe près. Ce qui compte : **choisir une convention et s'y tenir**, et toujours vérifier le résultat à une extrémité.

## Exemple complet : poutre sur deux appuis sous charge uniforme
Poutre de portée L, charge q (kN/m). Réactions : RA = RB = qL / 2. Pour une coupure à l'abscisse x, la partie de gauche porte RA (vers le haut) et la charge q x (vers le bas, résultante à x / 2 de la coupure) :
$$ V(x) = qL/2 − q x
$$ M(x) = (qL/2) × x − q x² / 2 = q x (L − x) / 2
- V est une **droite** : qL/2 à gauche, 0 au milieu, −qL/2 à droite.
- M est une **parabole** : 0 aux appuis, maximum au milieu : **Mmax = qL² / 8**.

> [!exemple] Valeurs numériques
> L = 6 m, q = 10 kN/m : RA = RB = 30 kN.
> En x = 1,5 m : V = 30 − 15 = **15 kN** ; M = 30 × 1,5 − 10 × 1,5² / 2 = 45 − 11,25 = **33,75 kN·m**.
> En x = 3 m : V = 0 ; M = 10 × 6² / 8 = **45 kN·m** (maximum).

## Relations entre la charge, V et M
On démontre (en isolant un petit tronçon de longueur dx) que :
$$ dV/dx = − q(x)      et      dM/dx = V(x)
Conséquences pratiques, très utiles pour tracer et vérifier les diagrammes :
| Sur le tronçon… | V(x) | M(x) |
|---|---|---|
| aucune charge | constant | droite (linéaire) |
| charge uniforme q | droite de pente −q | parabole |
| charge triangulaire | parabole | courbe du 3ᵉ degré |
| au droit d'une force ponctuelle P | **saut** de −P (si P vers le bas) | **cassure** (changement de pente) |
| au droit d'un couple C | pas de changement | **saut** de la valeur du couple |
- Le moment est **maximal (ou minimal) là où V s'annule** (ou change de signe).
- La **variation** de M entre deux sections est égale à l'**aire** du diagramme de V entre ces sections.

## Exemple : charge ponctuelle
Poutre de 5 m, charge P = 30 kN à 2 m de A : RA = 18 kN, RB = 12 kN.
- Tronçon 0 ≤ x < 2 : V = 18 kN ; M = 18 x (de 0 à 36 kN·m).
- Tronçon 2 < x ≤ 5 : V = 18 − 30 = −12 kN ; M = 18 x − 30 (x − 2), qui vaut 36 kN·m en x = 2 et 0 en x = 5.
- V change de signe sous la charge : **Mmax = 36 kN·m** sous la charge. Vérification par l'aire de V : 18 × 2 = 36 ✔.

## Exemple : console
Console de longueur L encastrée à droite, charge q. On prend l'origine à l'extrémité libre (à gauche), aucune réaction à gauche :
$$ V(x) = − q x      M(x) = − q x² / 2
Au niveau de l'encastrement : V = −qL et **M = −qL² / 2** : le moment est négatif, la fibre **supérieure** est tendue (aciers en haut dans un balcon).

## L'effort normal
L'effort normal apparaît quand des forces ont une composante **parallèle** à l'axe : poteaux, poutres inclinées (rampants), tirants, poutres soumises à une force inclinée. Il est **constant** entre deux forces axiales et **saute** au droit de chaque force axiale.

> [!retenir]
> - Coupure → équilibre de la partie gauche → N, V, M.
> - dM/dx = V : le moment est extrême là où V s'annule.
> - Charge uniforme : V linéaire, M parabolique ; sans charge : V constant, M linéaire.
> - Poutre sur deux appuis + charge uniforme : Mmax = qL² / 8 ; console : M = −qL² / 2.`,
 exercices:[
  {t:"Efforts internes en une section", d:1, e:`Une poutre de 8 m sur deux appuis porte une charge uniforme de 12 kN/m. Calculer V et M en x = 2 m, x = 4 m et x = 6 m.`, c:`RA = RB = 12 × 8 / 2 = 48 kN.
- x = 2 m : V = 48 − 24 = **24 kN** ; M = 48 × 2 − 12 × 2² / 2 = 96 − 24 = **72 kN·m**.
- x = 4 m : V = 48 − 48 = **0** ; M = 48 × 4 − 12 × 16 / 2 = 192 − 96 = **96 kN·m** (= qL² / 8 = 12 × 64 / 8 ✔).
- x = 6 m : V = 48 − 72 = **−24 kN** ; M = 48 × 6 − 12 × 36 / 2 = 288 − 216 = **72 kN·m** (symétrie ✔).`},
  {t:"Expressions de V(x) et M(x) par tronçons", d:2, e:`Poutre AB de 6 m (appuis en A et B) portant une charge uniforme de 5 kN/m sur toute sa longueur et une charge ponctuelle de 20 kN à 2 m de A (RA = 28,33 kN, RB = 21,67 kN).
1. Écrire V(x) et M(x) sur les tronçons [0 ; 2] et [2 ; 6].
2. Où V s'annule-t-il ? En déduire le moment maximal.`, c:`1. Tronçon 0 ≤ x < 2 : V(x) = 28,33 − 5x ; M(x) = 28,33x − 2,5x².
Tronçon 2 < x ≤ 6 : V(x) = 28,33 − 20 − 5x = 8,33 − 5x ; M(x) = 28,33x − 20(x − 2) − 2,5x².
Vérification en x = 6 : V = 8,33 − 30 = −21,67 = −RB ✔ ; M = 170 − 80 − 90 = 0 ✔.
2. Sur le premier tronçon, V passe de 28,33 à 18,33 kN (ne s'annule pas). Sous la charge, V saute de 18,33 à −1,67 kN : il **change de signe en x = 2 m**.
**Mmax = M(2) = 28,33 × 2 − 2,5 × 4 = 56,67 − 10 = 46,67 kN·m**.`},
  {t:"Console de balcon", d:1, e:`Un balcon est modélisé par une console de 1,80 m encastrée dans la poutre de rive. Charges ELU : 12 kN/m répartis et 3 kN en bout (garde-corps).
1. Écrire V(x) et M(x) avec l'origine à l'extrémité libre.
2. Calculer V et M à l'encastrement. Où placer les aciers principaux ?`, c:`1. À l'abscisse x depuis le bout libre, la partie de gauche porte la charge 3 kN et 12x :
V(x) = −3 − 12x ; M(x) = −3x − 12x² / 2 = −3x − 6x².
2. En x = 1,80 m : **V = −3 − 21,6 = −24,6 kN** ; **M = −5,4 − 19,44 = −24,84 kN·m**.
Le moment est négatif : la fibre **supérieure** est tendue → les aciers principaux se placent **en haut** du balcon et doivent être bien ancrés dans la poutre (et prolongés dans la dalle intérieure).`},
  {t:"Utiliser l'aire du diagramme de V", d:2, e:`Pour une poutre de 6 m sur deux appuis, on donne le diagramme de l'effort tranchant :
- V = 25 kN de x = 0 à x = 1,5 m ;
- V = 5 kN de x = 1,5 m à x = 4 m ;
- V = −25 kN de x = 4 m à x = 6 m.
1. Quelles charges s'appliquent sur la poutre ?
2. Calculer M en x = 1,5 m et en x = 4 m à partir des aires du diagramme de V.`, c:`1. V est constant par morceaux : pas de charge répartie. Sauts : −20 kN en x = 1,5 m et −30 kN en x = 4 m → **deux charges ponctuelles de 20 kN et 30 kN**. Réactions : RA = 25 kN et RB = 25 kN.
2. M(0) = 0. M(1,5) = 25 × 1,5 = **37,5 kN·m**. M(4) = 37,5 + 5 × 2,5 = **50 kN·m**. M(6) = 50 − 25 × 2 = 0 ✔.
Le moment maximal (50 kN·m) est en x = 4 m, là où V change de signe.`},
  {t:"Poutre soumise à un couple", d:3, e:`Une poutre AB de 4 m sur deux appuis reçoit, à 1 m de A, un couple de 12 kN·m dans le sens horaire (par exemple transmis par une console soudée). Aucune autre charge.
1. Calculer les réactions.
2. Tracer qualitativement V et M et donner les valeurs remarquables.`, c:`1. ΣM/A = 0 (sens trigonométrique positif) : 4 RB − 12 = 0 → **RB = 3 kN** (vers le haut) ; ΣFy : **RA = −3 kN** (vers le bas).
2. V(x) = −3 kN sur toute la poutre (aucune force verticale entre les appuis).
M(x) = −3x pour x < 1 : M(1⁻) = **−3 kN·m**.
Au droit du couple horaire, le moment de la partie gauche augmente de 12 kN·m : M(1⁺) = −3 + 12 = **+9 kN·m**.
Puis M(x) = 9 − 3(x − 1), qui s'annule en B (x = 4) ✔.
Le couple crée un **saut** de 12 kN·m dans le diagramme de M, sans changer V.`}
 ],
 quiz:[
  {q:"Au droit d'une charge ponctuelle, le diagramme de V présente :", o:["Une parabole","Un saut","Un maximum arrondi","Rien de particulier"], r:1, e:"V saute de la valeur de la charge."},
  {q:"Le moment fléchissant est maximal là où :", o:["V est maximal","V s'annule ou change de signe","La charge est nulle","N est maximal"], r:1, e:"dM/dx = V."},
  {q:"Sous une charge uniforme, le moment fléchissant varie :", o:["De façon constante","Linéairement","Selon une parabole","Par sauts"], r:2, e:"V est linéaire, donc M est parabolique."},
  {q:"Dans une console, la fibre tendue est :", o:["La fibre inférieure","La fibre supérieure","Aucune","Les deux"], r:1, e:"Le moment est négatif : aciers en haut."},
  {q:"Mmax d'une poutre sur deux appuis de 5 m sous 8 kN/m vaut :", o:["25 kN·m","40 kN·m","20 kN·m","100 kN·m"], r:0, e:"qL² / 8 = 8 × 25 / 8 = 25 kN·m."}
 ]},

{id:"rdm-13", niv:2, titre:"Diagrammes de V et M des poutres isostatiques", duree:70, contenu:`## Pourquoi tracer les diagrammes ?
Les diagrammes de l'effort tranchant V et du moment fléchissant M montrent **d'un coup d'œil** où la poutre est la plus sollicitée :
- le **moment maximal** dimensionne la section et les aciers longitudinaux (ou le profilé) ;
- l'**effort tranchant maximal** (en général près des appuis) dimensionne l'âme et les armatures transversales (cadres, étriers) ;
- le **signe** de M indique la fibre tendue, donc l'emplacement des aciers en béton armé ;
- les points de **moment nul** fixent l'arrêt des barres.

!fig:moments|Poutre sur deux appuis sous charge uniforme : V linéaire, M parabolique, maximum à mi-portée

## Méthode générale par tronçons
1. Calculer les **réactions** et les vérifier.
2. Repérer les **points singuliers** : appuis, charges ponctuelles, couples, début et fin des charges réparties. Ils délimitent les **tronçons**.
3. Sur chaque tronçon, écrire V(x) et M(x) par la méthode des coupures (partie gauche).
4. Calculer les valeurs aux extrémités des tronçons et, si V s'annule à l'intérieur d'un tronçon, la valeur de M en ce point.
5. Tracer : V au-dessus de M, mêmes abscisses ; on dessine en général les moments **positifs vers le bas** (côté de la fibre tendue), comme le font de nombreux bureaux d'études.
6. **Vérifier** : V à droite doit valoir −RB ; M doit être nul aux extrémités articulées et libres.

## Méthode rapide par les relations entre q, V et M
On peut tracer sans écrire d'équations, en partant de la gauche :
- V **saute** de la valeur de chaque force ponctuelle (vers le haut si la force monte, vers le bas si elle descend) ;
- sous une charge uniforme, V **descend** linéairement de q par mètre ;
- M **augmente** de l'aire du diagramme de V : aire positive → M monte, aire négative → M descend.

## Le formulaire des cas courants
| Cas (portée L) | Réactions | Vmax | Mmax |
|---|---|---|---|
| Charge uniforme q | qL/2 et qL/2 | qL/2 | qL²/8 à mi-portée |
| Force P à mi-portée | P/2 et P/2 | P/2 | PL/4 sous la charge |
| Force P à a de A (b = L − a) | Pb/L et Pa/L | max(Pb/L ; Pa/L) | Pab/L sous la charge |
| Deux forces P symétriques à a des appuis | P et P | P | Pa, constant entre les charges |
| Charge triangulaire de 0 (A) à q (B) | qL/6 et qL/3 | qL/3 | qL²/(9√3) ≈ 0,064 qL² à x = L/√3 de A |
| Console, charge uniforme q | qL à l'encastrement | qL | −qL²/2 à l'encastrement |
| Console, force P en bout | P | P | −PL à l'encastrement |
Grâce au principe de **superposition**, on additionne les cas : une poutre sous charge uniforme **et** charge ponctuelle a pour réactions la somme des réactions de chaque cas (mais attention : les moments maximums ne s'additionnent que s'ils sont au même endroit).

> [!exemple] Poutre à charges mixtes
> AB = 6 m, charge uniforme 5 kN/m, force de 20 kN à 2 m de A. RA = 28,33 kN, RB = 21,67 kN.
> - V(0) = 28,33 ; juste avant la force V = 28,33 − 5 × 2 = 18,33 ; juste après V = 18,33 − 20 = −1,67 ; en B, V = −1,67 − 5 × 4 = −21,67 = −RB ✔.
> - V change de signe en x = 2 m : **Mmax = 28,33 × 2 − 5 × 2² / 2 = 46,67 kN·m**.
> - Contrôle par les aires : de 0 à 2, aire de V = (28,33 + 18,33) / 2 × 2 = 46,67 ✔.

## Poutre avec porte-à-faux : apparition d'un moment négatif
> [!exemple] Poutre ABC
> AB = 5 m (appuis A et B), porte-à-faux BC = 1,5 m, charge uniforme 8 kN/m sur 6,5 m, force de 12 kN en C. RA = 14,6 kN, RB = 49,4 kN.
> **Travée AB** : V(x) = 14,6 − 8x, nul en x = 14,6 / 8 = 1,825 m.
> M(x) = 14,6x − 4x² : maximum en travée **M = 14,6 × 1,825 − 4 × 1,825² = 13,32 kN·m**.
> **Sur l'appui B** : M(5) = 73 − 100 = **−27 kN·m** (on retrouve, côté porte-à-faux : −(8 × 1,5² / 2 + 12 × 1,5) = −(9 + 18) = −27 ✔).
> Moment nul en travée : 14,6x − 4x² = 0 → **x = 3,65 m**.
> **Effort tranchant** : en B à gauche V = 14,6 − 40 = −25,4 kN ; à droite V = −25,4 + 49,4 = 24,0 kN ; en C juste avant la force V = 24,0 − 12 = 12 kN, puis 0 ✔.
> En béton armé : aciers **inférieurs** de A jusqu'au-delà de x = 3,65 m, aciers **supérieurs** (chapeaux) au-dessus de B, de x ≈ 3,65 m jusqu'au bout du porte-à-faux.

## Charges triangulaires
Pour une charge qui croît linéairement de 0 en A à q en B (portée L) : q(x) = q x / L.
$$ V(x) = qL/6 − q x² / (2L)      M(x) = qL x / 6 − q x³ / (6L)
V s'annule pour x = L / √3 = 0,577 L, et Mmax = qL² / (9√3) ≈ **0,0642 qL²**.

## Lire et contrôler un diagramme
- Une poutre **sur deux appuis** sous charges descendantes a un moment **positif** partout.
- Sur une **console** ou au-dessus d'un **appui de porte-à-faux**, le moment est **négatif**.
- Aux **appuis simples d'extrémité** et aux **bouts libres**, M = 0 (sauf couple appliqué).
- L'effort tranchant est maximal (en valeur absolue) **près des appuis**.

> [!retenir]
> - Tronçons délimités par les points singuliers ; V et M écrits sur chaque tronçon.
> - Mmax là où V change de signe ; ΔM = aire de V.
> - Formulaire : qL²/8, PL/4, Pab/L, −qL²/2, −PL.
> - Porte-à-faux → moment négatif sur l'appui → aciers en haut.`,
 exercices:[
  {t:"Charge ponctuelle centrée", d:1, e:`Une poutre de 4 m sur deux appuis porte une force de 24 kN en son milieu.
1. Calculer les réactions.
2. Tracer V et M et donner Vmax et Mmax.`, c:`1. Par symétrie : **RA = RB = 12 kN**.
2. V = +12 kN de A au milieu, puis −12 kN du milieu à B (saut de 24 kN sous la charge).
M croît linéairement de 0 à **Mmax = PL / 4 = 24 × 4 / 4 = 24 kN·m** sous la charge, puis redescend linéairement à 0 en B.
**Vmax = 12 kN.**`},
  {t:"Poutre à deux charges ponctuelles", d:2, e:`Poutre AB de 6 m. Charges : P1 = 20 kN à 1,5 m de A et P2 = 30 kN à 4 m de A.
1. Calculer les réactions.
2. Calculer V sur chaque tronçon et M aux points de charge.
3. Où se trouve le moment maximal ?`, c:`1. ΣM/A : 6 RB = 20 × 1,5 + 30 × 4 = 30 + 120 = 150 → **RB = 25 kN** ; **RA = 50 − 25 = 25 kN**.
2. Tronçon A–P1 : V = 25 kN ; tronçon P1–P2 : V = 25 − 20 = 5 kN ; tronçon P2–B : V = 5 − 30 = −25 kN.
M(1,5) = 25 × 1,5 = **37,5 kN·m** ; M(4) = 37,5 + 5 × 2,5 = **50 kN·m** ; M(6) = 50 − 25 × 2 = 0 ✔.
3. V change de signe sous P2 : **Mmax = 50 kN·m à 4 m de A**.`},
  {t:"Console avec charge répartie et force en bout", d:2, e:`Une console de 2 m porte une charge uniforme de 6 kN/m et une force de 8 kN à son extrémité libre.
Tracer V et M (origine au bout libre) et donner les valeurs à l'encastrement.`, c:`Origine au bout libre : V(x) = −8 − 6x ; M(x) = −8x − 3x².
- Au bout libre (x = 0) : V = −8 kN, M = 0.
- À l'encastrement (x = 2 m) : **V = −8 − 12 = −20 kN** ; **M = −16 − 12 = −28 kN·m**.
V varie linéairement, M suit une parabole entièrement négative (fibre supérieure tendue). L'encastrement doit reprendre 20 kN et 28 kN·m.`},
  {t:"Poutre avec porte-à-faux", d:3, e:`Poutre ABC : appuis A et B, AB = 6 m, porte-à-faux BC = 2 m. Charge uniforme de 10 kN/m sur toute la longueur (8 m).
1. Calculer les réactions.
2. Calculer le moment maximal en travée et sa position.
3. Calculer le moment sur l'appui B.
4. Trouver le point de moment nul dans la travée AB.`, c:`1. Résultante : 80 kN à 4 m de A. ΣM/A : 6 RB = 80 × 4 = 320 → **RB = 53,33 kN** ; **RA = 26,67 kN**.
2. V(x) = 26,67 − 10x s'annule en **x = 2,667 m** : **Mmax = 26,67 × 2,667 − 5 × 2,667² = 71,11 − 35,56 = 35,56 kN·m**.
3. Côté porte-à-faux : **MB = −10 × 2² / 2 = −20 kN·m** (vérification par la gauche : 26,67 × 6 − 5 × 36 = 160 − 180 = −20 ✔).
4. M(x) = 26,67x − 5x² = 0 → **x = 5,33 m**. Entre 5,33 m et l'extrémité C, la fibre supérieure est tendue.`},
  {t:"Charge triangulaire", d:3, e:`Une poutre de 6 m sur deux appuis reçoit une charge triangulaire nulle en A et égale à 9 kN/m en B (poussée d'un remblai sur une poutre de mur, par exemple).
1. Calculer les réactions.
2. Calculer la position et la valeur du moment maximal.`, c:`1. Résultante : 9 × 6 / 2 = 27 kN à 2/3 × 6 = 4 m de A.
ΣM/A : 6 RB = 27 × 4 → **RB = 18 kN = qL/3** ; **RA = 9 kN = qL/6**.
2. V(x) = 9 − 9x² / (2 × 6) = 9 − 0,75x² = 0 → x² = 12 → **x = 3,464 m** (= L / √3).
M(x) = 9x − 9x³ / 36 = 9x − 0,25x³ → **Mmax = 9 × 3,464 − 0,25 × 41,57 = 31,18 − 10,39 = 20,78 kN·m**.
Contrôle par la formule : qL² / (9√3) = 9 × 36 / 15,59 = 20,78 kN·m ✔.`}
 ],
 quiz:[
  {q:"Pour une force P à mi-portée d'une poutre sur deux appuis, Mmax vaut :", o:["PL/8","PL/4","PL/2","PL"], r:1, e:"Mmax = PL/4 sous la charge."},
  {q:"Pour une force P à a de A (b = L − a), Mmax vaut :", o:["Pab/L","PL/4","Pa/L","Pb²/L"], r:0, e:"Sous la charge : RA × a = (Pb/L) × a."},
  {q:"Le moment au-dessus de l'appui d'un porte-à-faux chargé est :", o:["Positif","Négatif","Nul","Toujours maximal"], r:1, e:"Le porte-à-faux tend la fibre supérieure."},
  {q:"La variation de M entre deux sections est égale :", o:["À l'aire du diagramme de V entre ces sections","À la charge totale","À V au milieu","À zéro"], r:0, e:"dM/dx = V, donc ΔM = ∫V dx."},
  {q:"Pour une charge triangulaire de 0 à q sur L, la réaction du côté le plus chargé vaut :", o:["qL/6","qL/3","qL/2","qL/4"], r:1, e:"Résultante qL/2 à 2L/3 : RB = qL/3, RA = qL/6."}
 ]},

{id:"rdm-5", niv:2, titre:"Flexion simple : contraintes normales et dimensionnement", duree:65, contenu:`## Flexion pure et flexion simple
- **Flexion pure** : seul un moment M agit (V = 0), par exemple entre deux charges symétriques.
- **Flexion simple** : M et V agissent ensemble (cas courant des poutres). Le moment crée des contraintes **normales** σ, l'effort tranchant des contraintes **tangentielles** τ (chapitre suivant).

## Ce qui se passe dans une poutre fléchie
Une poutre sur deux appuis chargée se courbe : ses fibres **supérieures** se **raccourcissent** (compression) et ses fibres **inférieures** s'**allongent** (traction). Entre les deux, une fibre ne change pas de longueur : c'est la **fibre neutre**, qui passe par le **centre de gravité** de la section (pour un matériau homogène).
D'après Navier-Bernoulli, la déformation varie **linéairement** sur la hauteur, donc (loi de Hooke) la contrainte aussi.

## La formule de Navier
$$ σ(y) = M × y / I
- M : moment fléchissant dans la section (N·mm) ;
- y : distance de la fibre étudiée à l'axe neutre (mm) ;
- I : moment quadratique de la section (mm⁴).
La contrainte est **nulle** sur l'axe neutre et **maximale** sur les fibres extrêmes (y = v) :
$$ σmax = M × v / I = M / W

> [!exemple] Contraintes dans une poutre rectangulaire
> Section 20 × 50 cm (I = 208 333 cm⁴ = 2,083 × 10⁹ mm⁴), M = 60 kN·m = 60 × 10⁶ N·mm.
> Fibre extrême (y = 250 mm) : σ = 60 × 10⁶ × 250 / 2,083 × 10⁹ = **7,2 MPa**.
> À 150 mm de l'axe : σ = 60 × 10⁶ × 150 / 2,083 × 10⁹ = **4,3 MPa**.
> En haut : compression de 7,2 MPa ; en bas : traction de 7,2 MPa. Un béton non armé (résistance en traction ≈ 2,1 MPa) **fissurerait** : il faut des aciers en partie basse.

## Sections dissymétriques
Pour une section en T, la fibre neutre n'est pas à mi-hauteur : les deux fibres extrêmes ont des contraintes différentes, σsup = M / Wsup et σinf = M / Winf.

> [!exemple] Section en T
> Section en T du chapitre précédent : Wsup = 16 901 cm³, Winf = 10 612 cm³, M = 120 kN·m.
> σsup = 120 × 10⁶ / 16,90 × 10⁶ = **7,1 MPa** (compression) ; σinf = 120 × 10⁶ / 10,61 × 10⁶ = **11,3 MPa** (traction).
> La table, large, est peu comprimée : c'est pourquoi la dalle participe si bien à la résistance des poutres en béton armé (poutres en T).

## Dimensionner une poutre en flexion
La condition de résistance s'écrit σmax ≤ σlim, d'où le **module de flexion minimal** :
$$ Wnécessaire = M / σlim
Méthode :
1. Calculer le moment maximal à l'**ELU** ;
2. calculer W nécessaire ;
3. choisir dans le catalogue le premier profilé (ou la première section) qui a un W supérieur ;
4. ajouter le **poids propre** du profilé choisi et vérifier à nouveau ;
5. vérifier aussi l'effort tranchant et la **flèche** (souvent déterminante).

En construction métallique (Eurocode 3), la résistance élastique vaut Mel,Rd = Wel × fy / γM0. Les profilés courants (IPE, HEA) peuvent même atteindre la résistance **plastique** Mpl,Rd = Wpl × fy / γM0, avec Wpl environ 13 % plus grand que Wel pour un IPE (IPE 200 : Wpl = 221 cm³ contre Wel = 194 cm³). Dans ce chapitre, on reste en **élastique**, ce qui est du côté de la sécurité.

> [!exemple] Choisir un IPE
> Poutre de plancher de 5 m sur deux appuis, charge ELU qu = 18 kN/m (poids propre estimé compris), acier S235.
> M = 18 × 5² / 8 = **56,25 kN·m** = 56,25 × 10⁶ N·mm.
> W ≥ 56,25 × 10⁶ / 235 = 239 400 mm³ = **239,4 cm³** → **IPE 220** (W = 252 cm³).
> σ = 56,25 × 10⁶ / 252 × 10³ = **223 MPa ≤ 235 MPa** ✔.

> [!exemple] Une solive en bois
> Solive de 7,5 × 22,5 cm, portée 3,50 m, charge 3 kN/m (résistance de calcul du bois en flexion : 13 MPa).
> M = 3 × 3,5² / 8 = 4,59 kN·m ; W = 75 × 225² / 6 = 632 800 mm³.
> σ = 4,59 × 10⁶ / 632 800 = **7,3 MPa ≤ 13 MPa** ✔.

## Charge admissible d'une poutre existante
On inverse le raisonnement : Madm = W × σlim, puis on en déduit la charge maximale. Pour une poutre sur deux appuis sous charge uniforme : qadm = 8 Madm / L².

## Le choix de la forme
Pour une même aire, le profil en I est le plus efficace (matière loin de l'axe neutre). Le béton armé fonctionne autrement : le béton comprimé travaille en haut, les aciers tendus en bas, et le béton tendu (fissuré) est négligé. C'est l'objet du cours de **béton armé**, qui part de la même idée : un **couple** de forces (compression en haut, traction en bas) équilibre le moment.

> [!retenir]
> - σ = M y / I ; σmax = M / W ; axe neutre au centre de gravité.
> - Fibre supérieure comprimée, fibre inférieure tendue en travée.
> - Dimensionnement : W ≥ M / σlim, puis vérification avec le poids propre, V et la flèche.
> - Charge admissible : q = 8 W σlim / L² pour une poutre sur deux appuis.

> [!attention]
> Erreur classique : mélanger kN·m et N·mm. 1 kN·m = 10⁶ N·mm ; avec W en mm³, σ = M (N·mm) / W (mm³) donne des MPa.`,
 exercices:[
  {t:"Contrainte maximale dans un chevron", d:1, e:`Un chevron de 6 × 8 cm (hauteur 8 cm), de portée 2,40 m, porte une charge uniforme de 1,2 kN/m. Calculer la contrainte maximale de flexion.`, c:`M = 1,2 × 2,4² / 8 = **0,864 kN·m** = 0,864 × 10⁶ N·mm.
W = 60 × 80² / 6 = **64 000 mm³**.
**σmax = 0,864 × 10⁶ / 64 000 = 13,5 MPa** : c'est à la limite de la résistance d'un bois courant ; un chevron de 6 × 10 cm (W = 100 000 mm³, σ = 8,6 MPa) serait plus prudent.`},
  {t:"Choisir un IPE", d:2, e:`Une poutre métallique de 6 m de portée, sur deux appuis, porte une charge ELU de 25 kN/m (poids propre compris). Acier S235. Choisir le profilé IPE nécessaire (Wel : IPE 270 = 429 cm³ ; IPE 300 = 557 cm³ ; IPE 330 = 713 cm³).`, c:`M = 25 × 6² / 8 = **112,5 kN·m**.
W ≥ 112,5 × 10⁶ / 235 = 478 700 mm³ = **478,7 cm³**.
L'IPE 270 (429 cm³) est insuffisant : on choisit l'**IPE 300** (557 cm³).
Vérification : σ = 112,5 × 10⁶ / 557 × 10³ = **202 MPa ≤ 235 MPa** ✔. Il restera à vérifier la flèche.`},
  {t:"Charge maximale d'un IPE 240", d:2, e:`Un IPE 240 (Wel,y = 324 cm³), acier S235, franchit 5 m sur deux appuis. Quelle charge uniforme ELU maximale peut-il porter en flexion ?`, c:`Madm = W × σlim = 324 × 10³ × 235 = 76,14 × 10⁶ N·mm = **76,1 kN·m**.
qadm = 8 × 76,1 / 5² = **24,4 kN/m** (poids propre compris).`},
  {t:"Contraintes dans une section en T", d:2, e:`Une poutre en T (table 80 × 12 cm, âme 25 × 48 cm, I = 721 920 cm⁴, yG = 37,33 cm depuis la base, hauteur 60 cm) est soumise à un moment positif de 150 kN·m.
1. Calculer les contraintes sur les fibres supérieure et inférieure.
2. Calculer la contrainte à la jonction table-âme (à 48 cm de la base).`, c:`I = 721 920 cm⁴ = 7,219 × 10⁹ mm⁴ ; M = 150 × 10⁶ N·mm.
1. Fibre supérieure : y = 600 − 373,3 = 226,7 mm → **σsup = 150 × 10⁶ × 226,7 / 7,219 × 10⁹ = 4,71 MPa** (compression).
Fibre inférieure : y = 373,3 mm → **σinf = 7,76 MPa** (traction).
2. Jonction : y = 480 − 373,3 = 106,7 mm → **σ = 2,22 MPa** (compression). On vérifie la linéarité : σ est proportionnelle à la distance à l'axe neutre.`},
  {t:"Efficacité d'un renfort", d:3, e:`Un IPE 200 renforcé par un plat soudé sous sa semelle inférieure a les caractéristiques suivantes : Wsup = 219,3 cm³, Winf = 364,4 cm³. Il subit M = 50 kN·m. L'IPE 200 seul a W = 194 cm³.
1. Calculer les contraintes extrêmes de la poutre renforcée.
2. Comparer avec la contrainte de l'IPE 200 seul.
3. Quelle fibre limite la résistance ? Conclure.`, c:`1. **σsup = 50 × 10⁶ / 219,3 × 10³ = 228 MPa** ; **σinf = 50 × 10⁶ / 364,4 × 10³ = 137 MPa**.
2. IPE 200 seul : σ = 50 × 10⁶ / 194 × 10³ = **258 MPa > 235** : il ne passait pas.
3. Renforcé, c'est la fibre **supérieure** qui est déterminante (228 MPa, juste sous 235). Le renfort ne travaille qu'à 137 MPa : il est mal utilisé. Un renfort placé sur la semelle **comprimée** (ou sur les deux semelles) serait bien plus efficace pour le même poids d'acier.`}
 ],
 quiz:[
  {q:"Dans une poutre sur deux appuis chargée, la fibre inférieure est :", o:["Comprimée","Tendue","Sans contrainte","Cisaillée uniquement"], r:1, e:"Le moment positif tend la fibre inférieure."},
  {q:"L'axe neutre d'une section homogène passe :", o:["Par la fibre inférieure","Par le centre de gravité","Par la fibre supérieure","Au quart de la hauteur"], r:1, e:"Pour un matériau homogène, il passe par G."},
  {q:"La formule de Navier est :", o:["σ = N / A","σ = M y / I","σ = V S / (b I)","σ = E ε"], r:1, e:"La contrainte de flexion est proportionnelle à y."},
  {q:"M = 40 kN·m et W = 200 cm³ : σmax vaut :", o:["20 MPa","200 MPa","2 MPa","800 MPa"], r:1, e:"40 × 10⁶ / 200 × 10³ = 200 MPa."},
  {q:"Pour dimensionner un profilé en flexion, on cherche :", o:["A ≥ M / σ","W ≥ M / σlim","I ≥ M × σ","W ≥ σ / M"], r:1, e:"Module de flexion minimal = moment / contrainte limite."}
 ]},

{id:"rdm-14", niv:2, titre:"Contraintes de cisaillement en flexion (Jourawski)", duree:50, contenu:`## L'effort tranchant fait glisser les fibres
Prenez une pile de feuilles posée sur deux appuis : en fléchissant, les feuilles **glissent** les unes sur les autres. Dans une poutre pleine, ce glissement est empêché par la matière, qui subit alors des **contraintes tangentielles** τ, horizontales et verticales (elles sont égales : c'est la **réciprocité** des contraintes tangentielles). Elles sont dues à l'**effort tranchant V**.

## La formule de Jourawski
À une distance y de l'axe neutre, la contrainte tangentielle vaut :
$$ τ(y) = V × S(y) / (b(y) × I)
- V : effort tranchant dans la section (N) ;
- S(y) : **moment statique**, par rapport à l'axe neutre, de la partie de section située **au-delà** de la fibre étudiée (mm³) ;
- b(y) : **largeur** de la section au niveau de la fibre (mm) ;
- I : moment quadratique de toute la section (mm⁴).
τ est **nulle sur les fibres extrêmes** (S = 0) et en général **maximale sur l'axe neutre** (S maximal).

## Section rectangulaire
Pour un rectangle b × h, la répartition est **parabolique** et le maximum, sur l'axe neutre, vaut :
$$ τmax = 1,5 × V / (b × h)      (soit 1,5 fois la contrainte moyenne V / A)

> [!exemple] Poutre de 20 × 50 cm
> V = 80 kN : τmoy = 80 000 / (200 × 500) = 0,8 MPa ; **τmax = 1,5 × 0,8 = 1,2 MPa** sur l'axe neutre.

## Sections en I et en T
Dans un profilé en I, presque tout l'effort tranchant est repris par l'**âme**, où τ est à peu près uniforme. On utilise la formule approchée :
$$ τ ≈ V / Av      (Av : aire de cisaillement, voisine de hauteur × épaisseur d'âme)
L'Eurocode 3 donne la résistance plastique au cisaillement :
$$ Vpl,Rd = Av × (fy / √3) / γM0
Valeurs de Av pour quelques IPE : IPE 200 : 14,0 cm² ; IPE 220 : 15,9 cm² ; IPE 240 : 19,1 cm² ; IPE 300 : 25,7 cm².

> [!exemple] IPE 220 du chapitre précédent
> Poutre de 5 m, qu = 18 kN/m : V = 18 × 5 / 2 = 45 kN.
> Vpl,Rd = 1 590 × (235 / 1,732) = 215 700 N = **215,7 kN ≫ 45 kN** ✔ ; τ ≈ 45 000 / 1 590 = 28 MPa.
> Pour les profilés métalliques courants, le cisaillement est rarement déterminant, sauf pour les poutres **courtes et très chargées** ou au voisinage de grosses charges ponctuelles.

> [!exemple] Section en T en béton
> Section en T (table 60 × 10, âme 20 × 40, I = 325 953 cm⁴, axe neutre à 30,71 cm de la base), V = 150 kN.
> Moment statique de la partie située sous l'axe neutre : S = 20 × 30,71 × 30,71 / 2 = **9 431 cm³**.
> τmax = 150 000 × 9,431 × 10⁶ / (200 × 3,2595 × 10⁹) = **2,17 MPa** dans l'âme.

## Le bois et le béton sont sensibles au cisaillement
- Le **bois** résiste mal au cisaillement parallèle aux fibres (fv de l'ordre de 1 à 3 MPa) : les poutres courtes et très chargées peuvent se **fendre** horizontalement près des appuis.
- Le **béton** se fissure en biais (à 45° environ) près des appuis, là où V est grand : c'est pourquoi on place des **cadres et étriers** en béton armé, plus serrés près des appuis. Le BAEL utilise la contrainte conventionnelle τu = Vu / (b0 × d).

## Le glissement entre deux éléments : le flux de cisaillement
Le produit **f = τ × b = V × S / I** (en N/mm) est le **flux de cisaillement** : la force de glissement par unité de longueur au niveau d'une fibre. Il sert à dimensionner les liaisons entre éléments d'une poutre composée : clous et boulons d'une poutre en bois reconstituée, cordons de soudure âme-semelles, **connecteurs** d'un plancher mixte, **armatures de couture** entre la table et l'âme d'une poutre en T.

> [!retenir]
> - τ = V S / (b I) ; maximum en général sur l'axe neutre, nul aux fibres extrêmes.
> - Rectangle : τmax = 1,5 V / (b h).
> - Profilé en I : τ ≈ V / Av (âme) ; Vpl,Rd = Av fy / (√3 γM0).
> - Flux de cisaillement f = V S / I pour les liaisons et coutures.`,
 exercices:[
  {t:"Cisaillement maximal d'une poutre rectangulaire", d:1, e:`Une poutre de 15 × 40 cm subit un effort tranchant de 36 kN. Calculer la contrainte tangentielle moyenne et maximale.`, c:`τmoy = 36 000 / (150 × 400) = **0,6 MPa**.
**τmax = 1,5 × 0,6 = 0,9 MPa** sur l'axe neutre.`},
  {t:"Répartition des contraintes tangentielles", d:2, e:`Section rectangulaire de 20 × 40 cm, V = 60 kN.
Calculer τ sur l'axe neutre, à 10 cm de l'axe neutre et sur la fibre extrême, en utilisant la formule de Jourawski.`, c:`I = 200 × 400³ / 12 = 1,0667 × 10⁹ mm⁴ ; b = 200 mm.
Pour un rectangle, S(y) = (b / 2) × (h² / 4 − y²).
- y = 0 : S = 100 × 40 000 = 4 × 10⁶ mm³ → **τ = 60 000 × 4 × 10⁶ / (200 × 1,0667 × 10⁹) = 1,125 MPa** (= 1,5 V / bh ✔).
- y = 100 mm : S = 100 × (40 000 − 10 000) = 3 × 10⁶ mm³ → **τ = 0,844 MPa**.
- y = 200 mm (fibre extrême) : S = 0 → **τ = 0**.
La répartition est parabolique.`},
  {t:"Vérifier un IPE au cisaillement", d:2, e:`Un IPE 300 (Av = 25,7 cm², S235) de 6 m porte 25 kN/m à l'ELU (poutre sur deux appuis).
1. Calculer l'effort tranchant maximal.
2. Calculer Vpl,Rd et conclure.`, c:`1. **Vmax = 25 × 6 / 2 = 75 kN** (sur appuis).
2. Vpl,Rd = 2 570 × 235 / 1,732 = 348 700 N = **348,7 kN** ≥ 75 kN ✔ (taux de travail 22 %).
Comme V < 0,5 Vpl,Rd, l'Eurocode 3 n'impose même pas de réduire la résistance en flexion pour tenir compte de l'interaction M–V.`},
  {t:"Solive en bois au cisaillement", d:2, e:`Une solive de 7,5 × 22,5 cm de 3,50 m porte 3 kN/m. La résistance de calcul du bois au cisaillement vaut 1,2 MPa. Vérifier.`, c:`V = 3 × 3,5 / 2 = **5,25 kN**.
τmax = 1,5 × 5 250 / (75 × 225) = **0,47 MPa ≤ 1,2 MPa** ✔.
Le cisaillement n'est pas déterminant ici ; il le deviendrait pour une solive très courte et très chargée, ou entaillée à l'appui (l'entaille réduit h et crée une amorce de fente).`},
  {t:"Coutures entre table et âme", d:3, e:`Dans la poutre en T (table 60 × 10 cm, âme 20 × 40 cm, yG = 30,71 cm depuis la base, I = 325 953 cm⁴), l'effort tranchant vaut 150 kN.
1. Calculer le moment statique de la table par rapport à l'axe neutre.
2. Calculer le flux de cisaillement à la jonction table-âme.
3. Quelle force de glissement doit être reprise sur 1 m de poutre ?`, c:`1. Centre de la table à 45 cm de la base : d = 45 − 30,71 = 14,29 cm.
**S = 600 × 14,29 = 8 574 cm³ = 8,574 × 10⁶ mm³.**
2. **f = V S / I = 150 000 × 8,574 × 10⁶ / 3,2595 × 10⁹ = 394,6 N/mm.**
3. Sur 1 m : 394,6 × 1 000 = **394,6 kN**. Cette force est reprise par le béton et par les **armatures de couture** (aciers de la dalle qui traversent la jonction et les cadres de la poutre). En construction mixte, ce sont les connecteurs soudés sur le profilé qui la reprennent.`}
 ],
 quiz:[
  {q:"Pour une section rectangulaire, τmax vaut :", o:["V / (b h)","1,5 V / (b h)","2 V / (b h)","0,5 V / (b h)"], r:1, e:"1,5 fois la contrainte moyenne, sur l'axe neutre."},
  {q:"La contrainte tangentielle sur la fibre extrême d'une poutre fléchie est :", o:["Maximale","Nulle","Égale à σ","Égale à la moyenne"], r:1, e:"Le moment statique S y est nul."},
  {q:"Dans un IPE, l'effort tranchant est surtout repris par :", o:["Les semelles","L'âme","Les congés","Le béton"], r:1, e:"τ ≈ V / Av, Av ≈ aire de l'âme."},
  {q:"En béton armé, les cadres et étriers reprennent surtout :", o:["Le moment fléchissant","L'effort tranchant","L'effort normal","La torsion uniquement"], r:1, e:"Ils cousent les fissures inclinées dues à V."},
  {q:"Le flux de cisaillement V S / I s'exprime en :", o:["MPa","N/mm","N·mm","mm³"], r:1, e:"C'est une force de glissement par unité de longueur."}
 ]},

{id:"rdm-15", niv:2, titre:"Déformée et flèches des poutres", duree:70, contenu:`## Pourquoi calculer la flèche ?
Une poutre peut **résister** et pourtant être **inacceptable** : une flèche trop grande fissure les cloisons et le carrelage, fait stagner l'eau sur les toitures, coince les portes et inquiète les occupants. On vérifie donc la **flèche** (déplacement vertical maximal) à l'**ELS**, sous les charges réelles G + Q.

## L'équation de la déformée
On note y(x) le déplacement vertical de la fibre moyenne (compté positif vers le haut). On démontre, à partir de Navier-Bernoulli et de la loi de Hooke, que la **courbure** de la poutre est proportionnelle au moment :
$$ E × I × y''(x) = M(x)
- E I est la **rigidité en flexion** (N·mm²) ;
- y'(x) est la **rotation** (pente) de la section ;
- un moment positif rend la poutre concave vers le haut (« sourire »).

## Méthode de la double intégration
1. Écrire M(x) (par tronçons si nécessaire) ;
2. intégrer une fois : E I y' = ∫M dx + C1 ;
3. intégrer deux fois : E I y = ∫∫M dx + C1 x + C2 ;
4. trouver C1 et C2 avec les **conditions aux limites** : y = 0 sur un appui ; y = 0 **et** y' = 0 à un encastrement ; continuité de y et y' entre deux tronçons.

> [!exemple] Poutre sur deux appuis sous charge uniforme
> M(x) = q x (L − x) / 2 = qL x / 2 − q x² / 2.
> E I y' = qL x² / 4 − q x³ / 6 + C1 ; E I y = qL x³ / 12 − q x⁴ / 24 + C1 x + C2.
> y(0) = 0 → C2 = 0 ; y(L) = 0 → qL⁴ / 12 − qL⁴ / 24 + C1 L = 0 → C1 = − qL³ / 24.
> À mi-portée : E I y(L/2) = qL⁴ / 96 − qL⁴ / 384 − qL⁴ / 48 = − 5 qL⁴ / 384.
> D'où la flèche **f = 5 q L⁴ / (384 E I)** (vers le bas), et la rotation sur appui **θ = qL³ / (24 E I)**.

## Le formulaire des flèches
| Cas | Flèche maximale |
|---|---|
| Poutre sur deux appuis, charge uniforme q | 5 q L⁴ / (384 E I) à mi-portée |
| Poutre sur deux appuis, force P au milieu | P L³ / (48 E I) |
| Console, charge uniforme q | q L⁴ / (8 E I) en bout |
| Console, force P en bout | P L³ / (3 E I) en bout |
| Poutre encastrée-appuyée, charge uniforme | q L⁴ / (185 E I) |
| Poutre bi-encastrée, charge uniforme | q L⁴ / (384 E I) |
On remarque que la flèche varie comme **L⁴** sous charge répartie : doubler la portée multiplie la flèche par **16** ! Et elle est inversement proportionnelle à **I** : on gagne beaucoup en augmentant la hauteur.

## Les limites de flèche
| Élément | Flèche admissible courante |
|---|---|
| Poutres et planchers courants | L/300 (charges variables) à L/250 (total) |
| Planchers portant des cloisons ou carrelages fragiles | L/500 |
| Toitures (sans accès) | L/200 |
| Consoles | 2 × la valeur d'une travée de même portée (calcul sur 2L) |
| Béton armé (BAEL, L ≤ 5 m) | L/500 |
| Béton armé (BAEL, L > 5 m) | 0,5 cm + L/1 000 |

> [!exemple] Flèche d'un IPE 220
> L'IPE 220 du chapitre « Flexion » (L = 5 m, I = 2 772 cm⁴) porte en service q = 13 kN/m (soit 13 N/mm).
> f = 5 × 13 × 5 000⁴ / (384 × 210 000 × 2,772 × 10⁷) = **18,2 mm**, soit L / 275.
> C'est acceptable pour L/250 (20 mm), mais **pas** pour L/300 (16,7 mm) : il faudrait un IPE 240. La flèche est souvent plus contraignante que la résistance !

> [!exemple] Flèche d'une solive en bois
> Solive 7,5 × 22,5 cm (I = 7 119 cm⁴), E = 11 000 MPa, L = 3,50 m, q = 3 N/mm.
> f = 5 × 3 × 3 500⁴ / (384 × 11 000 × 7,119 × 10⁷) = **7,5 mm**, soit L / 468 ✔ pour L/300. (Le bois flue sous charge permanente : les règles bois majorent la flèche à long terme.)

## Le principe de superposition
Sous plusieurs charges, la flèche totale est la **somme** des flèches dues à chaque charge (si elles sont calculées au même point). Exemple : console sous charge uniforme et force en bout : f = qL⁴/(8EI) + PL³/(3EI).

## Le béton armé et la flèche
Pour une poutre en béton armé, I dépend de la **fissuration** (le béton tendu ne participe plus) et E dépend de la **durée** des charges (fluage). Le BAEL et l'Eurocode 2 donnent des méthodes spécifiques ; en pratique, on respecte d'abord des **rapports hauteur / portée** qui dispensent souvent du calcul : h ≥ L/16 pour une poutre isostatique, h ≥ L/22 pour une poutre continue (valeurs courantes).

> [!retenir]
> - E I y'' = M ; deux intégrations + conditions aux limites.
> - f = 5qL⁴/(384EI) ; PL³/(48EI) ; qL⁴/(8EI) ; PL³/(3EI).
> - Vérifier à l'ELS (G + Q) ; limites usuelles L/300 à L/500.
> - La flèche varie comme L⁴ et 1/I : la hauteur est la meilleure arme.`,
 exercices:[
  {t:"Flèche sous une charge ponctuelle", d:1, e:`Un IPE 200 (I = 1 943 cm⁴, E = 210 000 MPa) de 4 m porte une force de 20 kN (ELS) en son milieu. Calculer la flèche et la comparer à L/300.`, c:`f = P L³ / (48 E I) = 20 000 × 4 000³ / (48 × 210 000 × 1,943 × 10⁷) = **6,5 mm**.
L/300 = 13,3 mm : **6,5 mm ≤ 13,3 mm** ✔ (L/f = 615).`},
  {t:"Choisir un profilé par la flèche", d:2, e:`Une poutre de 6 m sur deux appuis porte en service (ELS) 18 kN/m. La flèche doit rester inférieure à L/300.
1. Calculer le moment quadratique minimal.
2. Choisir l'IPE (Iy : IPE 270 = 5 790 cm⁴ ; IPE 300 = 8 356 cm⁴ ; IPE 330 = 11 770 cm⁴) et calculer la flèche obtenue.`, c:`1. fadm = 6 000 / 300 = 20 mm. Imin = 5 q L⁴ / (384 E fadm) = 5 × 18 × 6 000⁴ / (384 × 210 000 × 20) = 7,23 × 10⁷ mm⁴ = **7 232 cm⁴**.
2. L'IPE 270 est insuffisant → **IPE 300** : f = 5 × 18 × 6 000⁴ / (384 × 210 000 × 8,356 × 10⁷) = **17,3 mm ≤ 20 mm** ✔.`},
  {t:"Flèche d'une console métallique", d:2, e:`Une console en IPE 200 (I = 1 943 cm⁴) de 1,80 m porte en service 8 kN/m et une force de 2 kN en bout. Calculer la flèche en bout. Limite pour une console : 2L/300.`, c:`Charge répartie : f1 = q L⁴ / (8 E I) = 8 × 1 800⁴ / (8 × 210 000 × 1,943 × 10⁷) = **2,57 mm**.
Force en bout : f2 = P L³ / (3 E I) = 2 000 × 1 800³ / (3 × 210 000 × 1,943 × 10⁷) = **0,95 mm**.
**f = 2,57 + 0,95 = 3,52 mm** (superposition). Limite : 2 × 1 800 / 300 = 12 mm ✔.`},
  {t:"Établir la flèche d'une console par double intégration", d:3, e:`Console de longueur L encastrée en x = 0, libre en x = L, force P (vers le bas) en bout.
1. Écrire M(x).
2. Intégrer deux fois l'équation E I y'' = M en utilisant les conditions à l'encastrement.
3. En déduire la flèche et la rotation en bout.`, c:`1. Partie à droite de la coupure : la force P à la distance (L − x) crée un moment qui tend la fibre supérieure : **M(x) = − P (L − x)**.
2. E I y'' = −P L + P x.
E I y' = −P L x + P x² / 2 + C1 ; à l'encastrement y'(0) = 0 → C1 = 0.
E I y = −P L x² / 2 + P x³ / 6 + C2 ; y(0) = 0 → C2 = 0.
3. En x = L : E I y(L) = −P L³ / 2 + P L³ / 6 = −P L³ / 3 → **f = P L³ / (3 E I)** (vers le bas).
E I y'(L) = −P L² + P L² / 2 = −P L² / 2 → **θ = P L² / (2 E I)**.`},
  {t:"Influence de la portée et de la hauteur", d:2, e:`Une poutre rectangulaire en bois sur deux appuis a une flèche de 6 mm sous sa charge.
1. Que devient la flèche si la portée passe de 3 m à 4 m (même charge par mètre) ?
2. Et si, à portée initiale, on augmente la hauteur de 20 cm à 25 cm ?`, c:`1. f ∝ L⁴ : f' = 6 × (4/3)⁴ = 6 × 3,16 = **19 mm** (plus du triple !).
2. f ∝ 1/I et I ∝ h³ : f' = 6 × (20/25)³ = 6 × 0,512 = **3,1 mm** (presque divisée par deux).
Conclusion : la portée est le paramètre le plus pénalisant ; la hauteur est la meilleure façon de rigidifier.`}
 ],
 quiz:[
  {q:"La flèche d'une poutre sur deux appuis sous charge uniforme vaut :", o:["qL²/8","5qL⁴/(384EI)","PL³/(48EI)","qL⁴/(8EI)"], r:1, e:"Formule de base à connaître."},
  {q:"Si la portée double (même charge par mètre), la flèche est multipliée par :", o:["2","4","8","16"], r:3, e:"La flèche varie comme L⁴."},
  {q:"On vérifie la flèche :", o:["À l'ELU","À l'ELS","Uniquement pour l'acier","Jamais en bâtiment"], r:1, e:"Sous les charges de service G + Q."},
  {q:"À un encastrement, les conditions aux limites sont :", o:["y = 0 seulement","y' = 0 seulement","y = 0 et y' = 0","M = 0"], r:2, e:"Ni déplacement ni rotation."},
  {q:"La flèche d'une console de longueur L avec force P en bout vaut :", o:["PL³/(48EI)","PL³/(3EI)","PL²/(2EI)","5PL⁴/(384EI)"], r:1, e:"f = PL³/(3EI) ; la rotation vaut PL²/(2EI)."}
 ]},

{id:"rdm-16", niv:2, titre:"Treillis isostatiques : méthode des nœuds et de Ritter", duree:60, contenu:`## Qu'est-ce qu'un treillis ?
Un **treillis** (ou système triangulé) est un assemblage de **barres** reliées à leurs extrémités par des **nœuds**, formant des **triangles**. On en trouve partout : fermes de toiture, poutres-treillis de hangars, pylônes, échafaudages, ponts métalliques, contreventements. Le triangle est la seule figure indéformable : c'est ce qui donne au treillis sa rigidité avec très peu de matière.

!fig:treillis|Poutre en treillis : membrures, montants et diagonales ; charges appliquées aux nœuds

## Les hypothèses de calcul
1. Les nœuds sont des **articulations** parfaites (en réalité boulonnés ou soudés, mais l'erreur est faible) ;
2. les charges sont appliquées **aux nœuds** uniquement ;
3. le poids propre des barres est négligé ou ramené aux nœuds.
Conséquence : chaque barre ne travaille qu'en **traction** ou en **compression** (effort normal N constant), sans flexion.
On note N > 0 une **traction** (la barre tire sur les nœuds) et N < 0 une **compression** (la barre pousse sur les nœuds).

## Le treillis est-il isostatique ?
Avec b barres, n nœuds et r réactions d'appuis, un treillis plan est **intérieurement et extérieurement isostatique** si :
$$ b + r = 2 n
(chaque nœud fournit 2 équations d'équilibre : ΣFx = 0 et ΣFy = 0). Si b + r > 2n, il est hyperstatique ; si b + r < 2n, c'est un mécanisme.
Vocabulaire : **membrure supérieure** et **membrure inférieure** (les « semelles »), **montants** (verticaux) et **diagonales** (obliques), **entrait** (membrure inférieure d'une ferme), **arbalétriers** (membrures supérieures inclinées), **poinçon**.

## La méthode des nœuds
1. Calculer les **réactions** d'appuis (équilibre global).
2. Choisir un nœud où il n'y a que **deux barres inconnues** (souvent un appui).
3. Supposer toutes les barres **tendues** (efforts dirigés vers l'extérieur du nœud) et écrire ΣFx = 0 et ΣFy = 0.
4. Passer au nœud suivant qui n'a plus que deux inconnues, et ainsi de suite.
5. Un résultat négatif indique une **compression**.

> [!exemple] Ferme triangulaire simple
> Triangle ABC : appuis A (articulation) et B (appui simple) distants de 6 m ; sommet C à 2 m au-dessus du milieu de AB ; charge de 30 kN en C. Barres : AC, BC (arbalétriers) et AB (entrait).
> Réactions : RA = RB = 15 kN. Angle des arbalétriers : tan α = 2 / 3 → α = 33,7° ; sin α = 0,555 ; cos α = 0,832.
> Nœud A : ΣFy = 0 → 15 + NAC × 0,555 = 0 → **NAC = −27,0 kN** (compression).
> ΣFx = 0 → NAB + NAC × 0,832 = 0 → **NAB = +22,5 kN** (traction).
> Par symétrie : NBC = −27,0 kN. L'entrait tendu empêche les arbalétriers de s'écarter : c'est lui qui « tient » la ferme.

## La méthode de Ritter (méthode des sections)
Pour trouver directement l'effort dans **une** barre sans passer par tous les nœuds :
1. **Couper** le treillis par une section qui traverse **trois barres** au plus, dont celle cherchée ;
2. isoler une des deux parties ;
3. écrire l'équilibre des **moments** autour du point où se **coupent les deux autres barres** : elles disparaissent de l'équation et il ne reste que l'inconnue cherchée.
Pour une diagonale entre deux membrures parallèles, on écrit plutôt ΣFy = 0.

## L'analogie avec une poutre
Une poutre-treillis à membrures parallèles de hauteur h se comporte comme une poutre :
- les **membrures** reprennent le **moment** : N ≈ ± M / h (membrure supérieure comprimée, inférieure tendue en travée) ;
- les **diagonales** reprennent l'**effort tranchant** : Ndiag ≈ V / sin θ (θ : angle de la diagonale avec l'horizontale).

> [!exemple] Poutre-treillis de 8 m
> Membrures parallèles, h = 1,50 m, 4 panneaux de 2 m, charges de 10 kN aux trois nœuds intermédiaires. Réactions : 15 kN de chaque côté.
> Moment à mi-portée (x = 4 m) : M = 15 × 4 − 10 × 2 = 40 kN·m → effort dans la membrure inférieure du panneau central : N = 40 / 1,5 = **26,7 kN** (traction) ; la membrure supérieure en face est comprimée de la même valeur.
> Effort tranchant dans le 2ᵉ panneau (entre x = 2 et 4 m) : V = 15 − 10 = 5 kN. Diagonale : tan θ = 1,5 / 2 → sin θ = 0,6 → **Ndiag = 5 / 0,6 = 8,3 kN**.

## Barres nulles et bon sens
- À un nœud **non chargé** où se rencontrent **deux barres non alignées**, les deux barres ont un effort **nul**.
- À un nœud non chargé où se rencontrent trois barres dont deux sont alignées, la troisième a un effort **nul**.
Ces barres ne sont pas inutiles : elles **raccourcissent la longueur de flambement** des barres comprimées et servent sous d'autres cas de charge.

## Du calcul au dimensionnement
- Les barres **tendues** se dimensionnent en traction : A ≥ N / σlim (section nette s'il y a des trous).
- Les barres **comprimées** se vérifient au **flambement** (voir niveau avancé) : ce sont elles qui gouvernent souvent le choix des cornières ou des tubes.

> [!retenir]
> - Barres articulées, charges aux nœuds : chaque barre est tendue ou comprimée.
> - Isostatique si b + r = 2n.
> - Nœuds : 2 inconnues max par nœud ; Ritter : moments autour de l'intersection des deux autres barres.
> - Membrures ≈ M / h ; diagonales ≈ V / sin θ.`,
 exercices:[
  {t:"Isostaticité d'un treillis", d:1, e:`Une poutre-treillis comporte 7 nœuds et 11 barres ; elle repose sur une articulation et un appui simple.
1. Est-elle isostatique ?
2. On ajoute une diagonale supplémentaire dans un panneau. Quel est alors son degré d'hyperstaticité ?`, c:`1. r = 2 + 1 = 3. b + r = 11 + 3 = 14 = 2 × 7 → **isostatique**.
2. b + r = 12 + 3 = 15 > 14 → **hyperstatique d'ordre 1** (deux diagonales croisées dans un même panneau : il faut les déformations pour partager l'effort, ou considérer que la diagonale comprimée flambe et ne garder que la tendue, ce que l'on fait pour les croix de Saint-André en câbles ou en ronds).`},
  {t:"Ferme triangulaire", d:2, e:`Une ferme triangulaire de 8 m de portée et de 2 m de hauteur porte une charge de 24 kN au faîtage. Calculer les efforts dans les arbalétriers et dans l'entrait. Préciser la nature des efforts.`, c:`Réactions : 12 kN de chaque côté. tan α = 2 / 4 = 0,5 → α = 26,57° ; sin α = 0,447 ; cos α = 0,894.
Nœud d'appui : ΣFy : 12 + Narb × 0,447 = 0 → **Narb = −26,8 kN** (compression).
ΣFx : Nentrait + Narb × 0,894 = 0 → **Nentrait = +24,0 kN** (traction).
Contrôle par l'analogie poutre : M au faîtage = 12 × 4 = 48 kN·m ; Nentrait = M / h = 48 / 2 = 24 kN ✔. Plus la ferme est plate, plus les efforts sont grands.`},
  {t:"Méthode de Ritter", d:2, e:`Poutre-treillis à membrures parallèles de 12 m (6 panneaux de 2 m), hauteur 2 m, charges de 15 kN aux 5 nœuds intermédiaires de la membrure inférieure.
1. Calculer les réactions.
2. Par Ritter, calculer l'effort dans la membrure inférieure du panneau central (entre x = 4 et 6 m), en prenant les moments au nœud supérieur situé en x = 6 m.
3. Calculer l'effort dans une diagonale du 1er panneau (entre x = 0 et 2 m).`, c:`1. Charge totale 75 kN → **RA = RB = 37,5 kN**.
2. Moment en x = 6 m de la partie gauche : M = 37,5 × 6 − 15 × 4 − 15 × 2 = 225 − 60 − 30 = 135 kN·m.
**Nmembrure inf = 135 / 2 = 67,5 kN** (traction).
3. Dans le 1er panneau, V = 37,5 kN. Diagonale : tan θ = 2 / 2 → θ = 45°, sin θ = 0,707.
**Ndiag = 37,5 / 0,707 = 53,0 kN** (traction ou compression selon le sens de la diagonale). Les diagonales les plus sollicitées sont près des appuis, comme l'effort tranchant.`},
  {t:"Barres à effort nul", d:1, e:`Dans une ferme, un nœud de la membrure inférieure n'est pas chargé ; y arrivent deux tronçons de membrure alignés et un montant vertical.
1. Quel est l'effort dans le montant ?
2. À quoi sert-il alors ?`, c:`1. Les deux tronçons de membrure, alignés et horizontaux, n'ont pas de composante verticale. L'équilibre vertical du nœud donne **Nmontant = 0**.
2. Il **maintient** la membrure (il réduit la longueur de flambement des barres voisines comprimées sous d'autres cas de charge, comme le vent en soulèvement) et il servira si une charge est un jour suspendue à ce nœud (gaine, palan). Il ne faut donc pas le supprimer.`},
  {t:"Dimensionner un entrait", d:3, e:`L'entrait d'une ferme subit une traction de 120 kN (ELU). On le réalise en deux cornières dos à dos assemblées par boulons M16 (trous de 18 mm). Acier S235 (fy = 235 MPa, fu = 360 MPa).
Choisir les cornières parmi : 2 L 50×50×5 (A = 2 × 4,80 cm²) ; 2 L 60×60×6 (A = 2 × 6,91 cm²). Vérifier la section brute (Npl,Rd = A fy) et la section nette (Nu,Rd = 0,9 Anet fu / 1,25), un trou par cornière.`, c:`**2 L 50×50×5** : A = 960 mm² ; Npl,Rd = 960 × 235 = 225,6 kN ✔.
Section nette : Anet = 960 − 2 × 18 × 5 = 780 mm² ; Nu,Rd = 0,9 × 780 × 360 / 1,25 = **202,2 kN ≥ 120 kN** ✔.
Les **2 L 50×50×5** suffisent largement (taux de travail 59 % en section nette). On vérifie ensuite le nombre de boulons : en double cisaillement M16 classe 4.6, 2 × 30,1 = 60,2 kN par boulon → 120 / 60,2 = 1,99 → 2 boulons (on en mettra 3 pour la robustesse, ou classe 8.8).`}
 ],
 quiz:[
  {q:"Dans un treillis idéal, une barre travaille :", o:["En flexion","En traction ou en compression","En torsion","En cisaillement"], r:1, e:"Nœuds articulés et charges aux nœuds : effort normal seul."},
  {q:"Un treillis plan est isostatique si :", o:["b = n","b + r = 2n","b + r = 3n","b = 2r"], r:1, e:"Deux équations par nœud."},
  {q:"Dans une ferme triangulaire sous charge descendante, l'entrait est :", o:["Comprimé","Tendu","Sans effort","Fléchi"], r:1, e:"Il empêche les arbalétriers de s'écarter."},
  {q:"Avec la méthode de Ritter, on écrit l'équation de moments autour :", o:["D'un appui","Du point d'intersection des deux autres barres coupées","Du milieu du treillis","D'un nœud chargé"], r:1, e:"Les deux autres inconnues disparaissent."},
  {q:"Dans une poutre-treillis, les membrures reprennent surtout :", o:["L'effort tranchant","Le moment fléchissant","La torsion","Rien"], r:1, e:"N ≈ M / h ; les diagonales reprennent V."}
 ]},

{id:"rdm-17", niv:2, titre:"Torsion des arbres et des poutres", duree:50, contenu:`## Qu'est-ce que la torsion ?
Une pièce est en **torsion** quand un moment agit **autour de son axe** : il tend à tordre la pièce, chaque section tournant par rapport à sa voisine. Ce moment s'appelle le **moment de torsion** T (en N·m ou kN·m).
Exemples : arbre de moteur de bétonnière, clé, tige de forage, mais aussi en bâtiment : **poutre de rive** qui porte un balcon en console, poutre recevant une dalle d'un seul côté, poutre courbe, escalier hélicoïdal.

## Torsion d'un arbre circulaire plein ou creux
Pour une section **circulaire**, les sections restent planes et tournent sans se déformer. La contrainte tangentielle est proportionnelle à la distance r au centre :
$$ τ(r) = T × r / J      τmax = T × R / J
- J : **moment quadratique polaire** : J = π d⁴ / 32 (plein) ; J = π (D⁴ − d⁴) / 32 (creux) ;
- R : rayon extérieur.
L'angle de torsion sur une longueur L vaut :
$$ θ = T × L / (G × J)      (en radians, G : module de cisaillement)

> [!exemple] Arbre plein
> Arbre de 40 mm de diamètre transmettant T = 0,5 kN·m = 500 000 N·mm, longueur 1 m, acier G = 81 000 MPa.
> J = π × 40⁴ / 32 = **251 300 mm⁴** ; τmax = 500 000 × 20 / 251 300 = **39,8 MPa**.
> θ = 500 000 × 1 000 / (81 000 × 251 300) = 0,0246 rad = **1,41°**.

## Pourquoi les arbres creux sont-ils efficaces ?
La matière au centre d'un arbre travaille peu (τ y est faible). Un **tube** de même poids, de plus grand diamètre, a un J beaucoup plus grand : il est à la fois plus **résistant** et plus **rigide** en torsion.

> [!exemple] Plein ou creux, même poids
> Un tube de diamètre extérieur 60 mm ayant la même aire que l'arbre plein de 40 mm a un diamètre intérieur d = √(60² − 40²) = 44,7 mm.
> J = π (60⁴ − 44,7⁴) / 32 = **879 700 mm⁴** (3,5 fois plus) ; τmax = 500 000 × 30 / 879 700 = **17,1 MPa** (2,3 fois moins).

## Puissance et couple
Un moteur de puissance P (W) qui tourne à la vitesse angulaire ω (rad/s) transmet un couple :
$$ T = P / ω      avec   ω = 2π n / 60   (n en tr/min)

> [!exemple] Moteur de bétonnière
> P = 2 kW, n = 1 450 tr/min : ω = 2π × 1 450 / 60 = 151,8 rad/s ; T = 2 000 / 151,8 = **13,2 N·m**. Après le réducteur (vitesse divisée par 50), le couple est multiplié par 50 environ.

## Sections non circulaires
Pour un **rectangle** b × h (b ≤ h), les sections se gauchissent. On utilise :
$$ τmax ≈ T / (α × b² × h)
| h / b | 1 | 1,5 | 2 | 3 | 5 | ∞ |
|---|---|---|---|---|---|---|
| α | 0,208 | 0,231 | 0,246 | 0,267 | 0,291 | 0,333 |
Les profils **ouverts** (I, U, cornières) sont très **souples** en torsion : il faut éviter de les faire travailler ainsi. Les profils **fermés** (tubes carrés, caissons) sont très efficaces.

## La torsion dans les ouvrages en béton armé
- **Torsion d'équilibre** : l'équilibre de la structure en dépend (poutre de rive qui porte un balcon en console sans autre appui). Il faut la calculer et la ferrailler.
- **Torsion de compatibilité** : elle n'apparaît que parce que les éléments sont liés (poutre de rive d'une dalle continue) ; si la poutre se fissure, les efforts se redistribuent. On la traite souvent par des dispositions constructives.
Le BAEL remplace la section pleine par une **section creuse équivalente** d'épaisseur e = a / 6 (a : plus petite dimension) :
$$ τu = Tu / (2 × Ω × e)      (Ω : aire délimitée par le feuillet moyen)
La torsion se reprend par des **cadres fermés** (bien ancrés) et des **armatures longitudinales** réparties sur le contour.

> [!exemple] Poutre de rive portant un balcon
> Le balcon en console transmet à la poutre de rive un moment de 24,8 kN·m par mètre (ELU). La poutre, de 3 m entre poteaux, est encastrée en torsion à ses extrémités : le moment de torsion maximal vaut T = 24,8 × 3 / 2 = **37,2 kN·m** aux appuis.
> Section 30 × 50 cm : e = 300 / 6 = 50 mm ; Ω = (300 − 50) × (500 − 50) = 112 500 mm².
> τu = 37,2 × 10⁶ / (2 × 112 500 × 50) = **3,31 MPa** : valeur élevée qui impose des cadres fermés serrés et des aciers longitudinaux de torsion (et la vérification combinée avec l'effort tranchant).

> [!retenir]
> - Arbre circulaire : τmax = T R / J ; θ = T L / (G J) ; J = π d⁴ / 32.
> - Tube = meilleur rapport résistance / poids en torsion.
> - T = P / ω.
> - Béton armé : section creuse équivalente e = a/6, τu = Tu / (2 Ω e), cadres fermés.`,
 exercices:[
  {t:"Contrainte dans un arbre", d:1, e:`Un arbre plein de 30 mm de diamètre transmet un couple de 150 N·m. Calculer la contrainte tangentielle maximale.`, c:`J = π × 30⁴ / 32 = **79 520 mm⁴**.
τmax = T R / J = 150 000 × 15 / 79 520 = **28,3 MPa**.`},
  {t:"Angle de torsion", d:2, e:`L'arbre précédent mesure 1,2 m. G = 81 000 MPa.
1. Calculer l'angle de torsion en degrés.
2. Quel diamètre faudrait-il pour limiter l'angle à 0,25° par mètre ?`, c:`1. θ = 150 000 × 1 200 / (81 000 × 79 520) = 0,0280 rad = **1,60°**.
2. 0,25°/m = 0,004 36 rad/m = 4,36 × 10⁻⁶ rad/mm. J ≥ T / (G × θ/L) = 150 000 / (81 000 × 4,36 × 10⁻⁶) = 424 700 mm⁴.
d⁴ ≥ 32 × 424 700 / π = 4,326 × 10⁶ → **d ≥ 45,6 mm**, soit un arbre de 46 ou 50 mm. Le critère de rigidité est ici plus sévère que celui de résistance.`},
  {t:"Couple transmis par un moteur", d:1, e:`Une pompe est entraînée par un moteur de 7,5 kW tournant à 2 900 tr/min. Calculer le couple transmis par l'arbre.`, c:`ω = 2π × 2 900 / 60 = **303,7 rad/s**.
T = P / ω = 7 500 / 303,7 = **24,7 N·m**.`},
  {t:"Section rectangulaire en torsion", d:2, e:`Une poutre en bois de 10 × 20 cm subit un moment de torsion de 1,5 kN·m. Calculer la contrainte maximale (h / b = 2 → α = 0,246). La résistance au cisaillement du bois vaut 1,5 MPa : conclure.`, c:`τmax = T / (α b² h) = 1,5 × 10⁶ / (0,246 × 100² × 200) = 1,5 × 10⁶ / 492 000 = **3,05 MPa**.
3,05 > 1,5 MPa : **la poutre ne résiste pas**. Il faut supprimer la torsion à la conception (appui supplémentaire, charges centrées) ou changer de section.`},
  {t:"Poutre de rive en béton armé", d:3, e:`Une poutre de rive de 25 × 45 cm, longue de 4 m entre deux poteaux qui l'empêchent de tourner, reçoit d'un auvent en console un moment uniformément réparti de 12 kN·m/m (ELU).
1. Calculer le moment de torsion maximal.
2. Calculer la contrainte tangentielle de torsion selon le BAEL.
3. Où place-t-on les armatures de torsion ?`, c:`1. Le moment réparti se partage entre les deux poteaux : **Tu = 12 × 4 / 2 = 24 kN·m** aux extrémités (nul à mi-portée).
2. e = 250 / 6 = 41,7 mm ; Ω = (250 − 41,7) × (450 − 41,7) = 208,3 × 408,3 = **85 050 mm²**.
**τu = 24 × 10⁶ / (2 × 85 050 × 41,7) = 3,38 MPa.**
3. Des **cadres fermés** (crochets à 135° bien ancrés, pas de simples étriers ouverts), plus serrés près des poteaux, et des **barres longitudinales** réparties sur tout le pourtour (y compris en partie haute et à mi-hauteur), en plus des aciers de flexion. On vérifie aussi l'interaction avec l'effort tranchant : (τu,V² + τu,T²) doit rester sous la limite du règlement.`}
 ],
 quiz:[
  {q:"Le moment quadratique polaire d'un arbre plein vaut :", o:["π d⁴ / 64","π d⁴ / 32","π d³ / 16","π d² / 4"], r:1, e:"J = π d⁴ / 32 (le double du moment quadratique diamétral)."},
  {q:"Dans un arbre circulaire en torsion, τ est maximale :", o:["Au centre","À la périphérie","À mi-rayon","Partout pareille"], r:1, e:"τ est proportionnelle à r."},
  {q:"À poids égal, un arbre creux est en torsion :", o:["Moins résistant","Plus résistant et plus rigide","Identique","Plus souple"], r:1, e:"La matière est placée loin du centre."},
  {q:"Le couple transmis par un moteur vaut :", o:["T = P × ω","T = P / ω","T = ω / P","T = P × n"], r:1, e:"Puissance = couple × vitesse angulaire."},
  {q:"En béton armé, la torsion se reprend par :", o:["Des étriers ouverts","Des cadres fermés et des aciers longitudinaux répartis","Uniquement des aciers inférieurs","Le béton seul"], r:1, e:"Il faut ceinturer la section."}
 ]},

{id:"rdm-18", niv:3, titre:"Sollicitations composées : flexion composée et flexion déviée", duree:65, contenu:`## Quand plusieurs sollicitations agissent ensemble
Dans la réalité, une pièce subit souvent **plusieurs** sollicitations à la fois : un poteau porte une charge **excentrée** (effort normal + moment), une semelle reçoit un effort vertical et un moment de vent, une panne de toiture inclinée fléchit dans **deux plans**. Tant que le matériau reste élastique, on **superpose** les contraintes de chaque sollicitation.

## Flexion composée : N + M
La contrainte normale en une fibre située à la distance y de l'axe neutre vaut :
$$ σ = N / A + M × y / I      soit sur les fibres extrêmes   σ = N / A ± M / W
(N positif en traction, négatif en compression ; on choisit le signe de M y selon que la fibre est tendue ou comprimée par le moment.)
Un effort normal N appliqué avec une **excentricité** e par rapport au centre de gravité équivaut à un effort centré N plus un moment **M = N × e**.

> [!exemple] Poteau chargé excentriquement
> Poteau de 30 × 30 cm portant une poutre qui lui transmet 400 kN avec une excentricité de 5 cm.
> A = 90 000 mm² ; W = 300 × 300² / 6 = 4,5 × 10⁶ mm³ ; M = 400 × 0,05 = 20 kN·m.
> σ = −400 000 / 90 000 ± 20 × 10⁶ / 4,5 × 10⁶ = −4,44 ± 4,44 MPa.
> Une face est comprimée à **8,89 MPa** (le double de la charge centrée), l'autre à **0** : l'excentricité a doublé la contrainte maximale.

## Le noyau central
Une section entièrement **comprimée** est intéressante pour les matériaux qui résistent mal à la traction (béton non armé, maçonnerie, sol sous une semelle). La traction apparaît dès que |M / W| > |N / A|, c'est-à-dire quand l'excentricité dépasse e = W / A.
La zone où l'on peut appliquer N sans créer de traction est le **noyau central** :
- rectangle de hauteur h : **e ≤ h / 6** (la charge doit rester dans le **tiers central**) ;
- disque de diamètre d : **e ≤ d / 8**.
C'est la « règle du tiers central » des murs en maçonnerie, des murs de soutènement poids et des semelles.

## Les semelles soumises à un moment
Sous une semelle rectangulaire B × L recevant N et M (dans le sens de B), la pression du sol vaut (diagramme trapézoïdal, si e = M / N ≤ B / 6) :
$$ σmax,min = (N / (B × L)) × (1 ± 6 e / B)
Si e > B / 6, une partie de la semelle se **soulève** ; le diagramme devient triangulaire sur une longueur 3 (B/2 − e) et :
$$ σmax = 2 N / (3 L (B/2 − e))

> [!exemple] Semelle de 1,50 × 1,50 m
> N = 300 kN, M = 30 kN·m → e = 0,10 m ≤ B / 6 = 0,25 m : semelle entièrement comprimée.
> σmoy = 300 / 2,25 = 133,3 kN/m² ; σmax = 133,3 × (1 + 6 × 0,10 / 1,50) = **186,7 kPa** ; σmin = 133,3 × 0,6 = **80 kPa**.
> On vérifie en général σmax ≤ 1,33 × σsol (ou la contrainte au quart, (3 σmax + σmin) / 4 ≤ σsol).

## La précontrainte : utiliser la flexion composée
En **béton précontraint**, on comprime volontairement la poutre par des câbles tendus placés **en partie basse** (excentricité e). L'effort P et le moment P × e créent une compression en bas qui **annule** la traction due aux charges : le béton reste entièrement comprimé, donc sans fissures. Les poutrelles des planchers à corps creux et les dalles alvéolées fonctionnent ainsi.

## Flexion déviée : deux moments
Quand la charge n'est pas dans un plan de symétrie de la section, on la décompose selon les **deux axes principaux** y et z :
$$ σ = ± My / Wy ± Mz / Wz      (+ N / A s'il y a un effort normal)
La contrainte maximale apparaît à un **coin** de la section, où les deux termes s'ajoutent.

> [!exemple] Panne de toiture inclinée
> Une panne IPE 140 (Wy = 77,3 cm³, Wz = 12,3 cm³) de 4 m franchit l'intervalle entre deux fermes ; la toiture est inclinée à 20° ; charge verticale 2,5 kN/m (ELU).
> Composantes : qy = 2,5 × cos 20° = 2,35 kN/m (perpendiculaire au rampant) ; qz = 2,5 × sin 20° = 0,855 kN/m (dans le plan du rampant).
> My = 2,35 × 4² / 8 = 4,70 kN·m → σ1 = 4,70 × 10⁶ / 77,3 × 10³ = 60,8 MPa.
> Mz = 0,855 × 4² / 8 = 1,71 kN·m → σ2 = 1,71 × 10⁶ / 12,3 × 10³ = **139,0 MPa**.
> σmax = 60,8 + 139,0 = **199,8 MPa** ≤ 235 ✔, mais l'axe faible est très sollicité.
> Une **lierne** (tige qui relie les pannes à mi-portée dans le plan du rampant) coupe la portée de l'axe faible : Mz ≈ qz (L/2)² / 8 = 0,43 kN·m → σ2 = 34,8 MPa. C'est pourquoi les toitures métalliques comportent des liernes.

> [!retenir]
> - σ = N/A ± M/W ; une charge excentrée de e crée M = N e.
> - Noyau central : e ≤ h/6 (rectangle), e ≤ d/8 (disque) → pas de traction.
> - Semelle : σ = (N/BL)(1 ± 6e/B) si e ≤ B/6.
> - Flexion déviée : on décompose selon les axes principaux et on additionne au coin le plus sollicité.`,
 exercices:[
  {t:"Charge centrée ou excentrée", d:1, e:`Un poteau de 25 × 25 cm porte 250 kN.
1. Calculer la contrainte si la charge est centrée.
2. Même calcul si la charge est excentrée de 3 cm selon un axe.
3. Jusqu'à quelle excentricité la section reste-t-elle entièrement comprimée ?`, c:`A = 62 500 mm² ; W = 250 × 250² / 6 = 2,604 × 10⁶ mm³.
1. σ = 250 000 / 62 500 = **4,0 MPa** (compression uniforme).
2. M = 250 × 0,03 = 7,5 kN·m ; M / W = 7,5 × 10⁶ / 2,604 × 10⁶ = 2,88 MPa.
**σmax = 4,0 + 2,88 = 6,88 MPa** ; **σmin = 4,0 − 2,88 = 1,12 MPa** (toujours en compression).
3. Noyau central : **e ≤ h / 6 = 25 / 6 = 4,17 cm**.`},
  {t:"Semelle sous moment", d:2, e:`Une semelle carrée de 1,80 m de côté reçoit N = 420 kN et M = 63 kN·m (ELS). La contrainte admissible du sol vaut 200 kPa.
1. Calculer l'excentricité et vérifier qu'elle est dans le noyau central.
2. Calculer σmax et σmin.
3. Vérifier avec le critère de la contrainte au quart : (3 σmax + σmin) / 4 ≤ σsol.`, c:`1. **e = 63 / 420 = 0,15 m** ; B / 6 = 0,30 m → e ≤ B/6 : semelle entièrement comprimée ✔.
2. σmoy = 420 / (1,80 × 1,80) = 129,6 kPa.
**σmax = 129,6 × (1 + 6 × 0,15 / 1,80) = 129,6 × 1,5 = 194,4 kPa** ; **σmin = 129,6 × 0,5 = 64,8 kPa**.
3. (3 × 194,4 + 64,8) / 4 = **162 kPa ≤ 200 kPa** ✔.`},
  {t:"Massif de fondation d'un pylône", d:3, e:`Un pylône d'antenne repose sur un massif carré de 2,50 m de côté. À la base du massif : N = 120 kN (poids du pylône et du massif) et M = 90 kN·m (vent).
1. Calculer l'excentricité. Le massif est-il entièrement comprimé ?
2. Calculer la longueur de contact et la contrainte maximale sous le massif.
3. Que conseillez-vous ?`, c:`1. **e = 90 / 120 = 0,75 m** > B / 6 = 0,417 m → une partie du massif se **soulève**.
2. Longueur comprimée : 3 × (B/2 − e) = 3 × (1,25 − 0,75) = **1,50 m** (60 % de la base).
**σmax = 2 × 120 / (3 × 2,50 × 0,50) = 240 / 3,75 = 64 kPa.**
3. La pression reste faible, mais le décollement de 40 % de la base rend le massif sensible au **renversement** : coefficient Ms/Mr = 120 × 1,25 / 90 = 1,67, acceptable mais juste. On peut **alourdir** le massif (le rendre plus épais) ou **l'élargir** : un massif plus lourd recentre la résultante.`},
  {t:"Noyau central d'un poteau circulaire", d:2, e:`Un poteau circulaire en béton de 40 cm de diamètre porte 600 kN avec une excentricité de 4 cm.
1. Calculer A, W et les contraintes extrêmes.
2. Vérifier la règle du noyau central.`, c:`1. A = π × 400² / 4 = 125 660 mm² ; W = π × 400³ / 32 = 6,283 × 10⁶ mm³ ; M = 600 × 0,04 = 24 kN·m.
N / A = 4,77 MPa ; M / W = 24 × 10⁶ / 6,283 × 10⁶ = 3,82 MPa.
**σmax = 8,59 MPa ; σmin = 0,95 MPa** (compression).
2. d / 8 = 400 / 8 = **5 cm** ; e = 4 cm ≤ 5 cm ✔ : la section reste entièrement comprimée, comme le montre σmin > 0.`},
  {t:"Panne en flexion déviée", d:3, e:`Une panne IPE 120 (Wy = 53,0 cm³ ; Wz = 8,65 cm³) de 3,60 m est posée sur une toiture inclinée à 15°. Charge verticale ELU : 2,0 kN/m. Acier S235.
1. Calculer les moments selon les deux axes.
2. Calculer la contrainte maximale. La panne convient-elle ?
3. Même calcul avec une lierne à mi-portée.`, c:`1. qy = 2,0 × cos 15° = 1,932 kN/m → **My = 1,932 × 3,6² / 8 = 3,13 kN·m**.
qz = 2,0 × sin 15° = 0,518 kN/m → **Mz = 0,518 × 3,6² / 8 = 0,839 kN·m**.
2. σ = 3,13 × 10⁶ / 53,0 × 10³ + 0,839 × 10⁶ / 8,65 × 10³ = 59,1 + 97,0 = **156,1 MPa ≤ 235** ✔.
3. Avec une lierne : Mz = 0,518 × 1,8² / 8 = 0,210 kN·m → σ2 = 24,3 MPa → **σ = 83,4 MPa**. La lierne divise presque par deux la contrainte : on pourrait garder la même panne pour une portée plus grande.`}
 ],
 quiz:[
  {q:"Une charge N excentrée de e équivaut à :", o:["N centrée seule","N centrée + un moment N × e","Un moment seul","N / e"], r:1, e:"On ramène la charge au centre de gravité en ajoutant M = N e."},
  {q:"Pour une section rectangulaire, la charge reste dans le noyau central si :", o:["e ≤ h/2","e ≤ h/3","e ≤ h/6","e ≤ h/8"], r:2, e:"Règle du tiers central : e ≤ h/6."},
  {q:"Sous une semelle, si e > B/6 :", o:["La pression est uniforme","Une partie de la semelle se soulève","La semelle est en traction","Rien ne change"], r:1, e:"Le sol ne reprend pas de traction : le diagramme devient triangulaire."},
  {q:"En flexion déviée, la contrainte maximale se trouve :", o:["Au centre","Sur l'axe neutre","À un coin de la section","Sur l'âme"], r:2, e:"Les deux contraintes de flexion s'y additionnent."},
  {q:"Les liernes d'une toiture servent à :", o:["Décorer","Réduire la flexion des pannes selon leur axe faible","Fixer les tôles","Porter les gouttières"], r:1, e:"Elles coupent la portée dans le plan du rampant."}
 ]},

{id:"rdm-6", niv:3, titre:"Le flambement des éléments comprimés", duree:70, contenu:`## Un phénomène d'instabilité
Appuyez sur une règle en plastique posée debout : bien avant de s'écraser, elle **se courbe brusquement** sur le côté. C'est le **flambement**. Il concerne toutes les pièces **comprimées et élancées** : poteaux, barres comprimées de treillis, étais de coffrage, butons, montants d'échafaudage. Le flambement est **brutal** et peut entraîner l'effondrement de toute la structure : c'est une vérification essentielle.

## La charge critique d'Euler
Pour une barre parfaitement droite, articulée à ses deux extrémités, Euler a montré qu'elle flambe sous la charge :
$$ Ncr = π² × E × I / Lf²
- I : le **plus petit** moment quadratique de la section (la barre flambe selon son axe faible) ;
- Lf : la **longueur de flambement**, qui dépend des liaisons aux extrémités.

!fig:flambement|Longueurs de flambement selon les conditions d'appui

| Liaisons aux extrémités | Longueur de flambement Lf |
|---|---|
| Articulé – articulé | L |
| Encastré – libre (mât, console) | 2 L |
| Encastré – articulé | 0,7 L |
| Encastré – encastré | 0,5 L |
| Poteau de bâtiment courant (BAEL, encastré en pied, relié à des poutres) | 0,7 L à L selon les cas |

> [!exemple] Barre ronde comprimée
> Rond plein de 40 mm, longueur 2 m, articulé aux deux bouts, E = 210 000 MPa.
> I = π × 40⁴ / 64 = 125 660 mm⁴ ; Ncr = π² × 210 000 × 125 660 / 2 000² = **65,1 kN**.
> La charge qui l'écraserait (A × fy = 1 257 × 235) vaut 295 kN : la barre **flambera bien avant** de s'écraser.

## Élancement et contrainte critique
On caractérise la sensibilité au flambement par l'**élancement** :
$$ λ = Lf / i      avec   i = √(I / A)   (rayon de giration)
La contrainte critique vaut alors σcr = π² E / λ². Plus λ est grand, plus la pièce est fragile vis-à-vis du flambement.
Pour un rectangle de petit côté a : i = a / √12, donc **λ = Lf × √12 / a = 3,46 Lf / a**.
La formule d'Euler n'est valable que si σcr reste inférieure à la limite élastique, soit pour λ > λ1 = π √(E / fy) : **λ1 = 93,9** pour l'acier S235.

## La vérification selon l'Eurocode 3 (acier)
Les barres réelles ne sont ni parfaitement droites ni parfaitement centrées et ont des contraintes résiduelles de laminage. L'Eurocode 3 en tient compte par un **coefficient de réduction χ** :
$$ Nb,Rd = χ × A × fy / γM1      (γM1 = 1,0)
avec l'élancement réduit **λ̄ = λ / λ1** et une **courbe de flambement** (a, b, c ou d) qui dépend de la forme du profilé et de l'axe de flambement (par exemple, HEA : courbe b selon y-y, courbe c selon z-z ; tubes laminés à chaud : courbe a).
| λ̄ | 0,2 | 0,4 | 0,6 | 0,8 | 1,0 | 1,2 | 1,4 | 1,6 | 1,8 | 2,0 |
|---|---|---|---|---|---|---|---|---|---|---|
| χ courbe b | 1,00 | 0,93 | 0,84 | 0,72 | 0,60 | 0,48 | 0,38 | 0,31 | 0,25 | 0,21 |
| χ courbe c | 1,00 | 0,90 | 0,79 | 0,66 | 0,54 | 0,43 | 0,35 | 0,28 | 0,24 | 0,20 |

> [!exemple] Poteau HEA 160
> HEA 160 (A = 38,8 cm², iy = 6,57 cm, iz = 3,98 cm), hauteur 3,50 m, articulé en tête et en pied, S235.
> Axe faible : λz = 3 500 / 39,8 = 87,9 ; λ̄z = 87,9 / 93,9 = 0,94 → courbe c : **χ ≈ 0,58**.
> Axe fort : λy = 3 500 / 65,7 = 53,3 ; λ̄y = 0,57 → courbe b : χ ≈ 0,85 (moins défavorable).
> **Nb,Rd = 0,58 × 3 880 × 235 = 527 kN**, contre 912 kN sans flambement : on perd 42 % de la résistance.

## Les poteaux en béton armé (BAEL)
Le BAEL limite l'élancement des poteaux à **λ ≤ 70** (au-delà, calcul spécial) et réduit la charge admissible par un coefficient α :
$$ λ ≤ 50 : α = 0,85 / (1 + 0,2 (λ / 35)²)      50 < λ ≤ 70 : α = 0,60 (50 / λ)²
puis Nu ≤ α [Br fc28 / (0,9 γb) + A fe / γs] (voir le cours de béton armé). La longueur de flambement d'un poteau de bâtiment courant est en général Lf = 0,7 l0 (l0 : hauteur libre) lorsqu'il est encastré en pied et relié à des poutres de raideur au moins égale.

> [!exemple] Élancement d'un poteau de maison
> Poteau 20 × 20 cm, hauteur libre l0 = 3,0 m, Lf = 0,7 × 3,0 = 2,10 m.
> λ = 3,46 × 2,10 / 0,20 = **36,4** → α = 0,85 / (1 + 0,2 × (36,4/35)²) = **0,70**.
> Le même poteau de 15 × 15 cm aurait λ = 48,5 et α = 0,61 : réduire la section pénalise doublement (moins de béton et plus de flambement).

## Comment éviter le flambement
- **Réduire la longueur de flambement** : entretoises, liernes, contreventements, encastrements.
- **Augmenter le rayon de giration** : tubes et caissons plutôt que plats et cornières ; profilés H plutôt que I pour les poteaux.
- Orienter le profilé pour que l'axe faible soit le mieux tenu.
- Pour les **étais de coffrage**, respecter les charges du fabricant **selon la hauteur de déploiement** (un étai déployé à 3,5 m porte bien moins qu'à 2 m).

> [!retenir]
> - Ncr = π² E I / Lf², avec le plus petit I.
> - Lf : L (articulé-articulé), 2L (console), 0,7L, 0,5L.
> - λ = Lf / i ; rectangle : λ = 3,46 Lf / a.
> - Acier : Nb,Rd = χ A fy ; béton armé : λ ≤ 70 et coefficient α.

> [!attention]
> Une erreur sur Lf est grave : la charge critique varie comme 1/Lf². Passer d'un encastrement supposé à une articulation réelle (Lf doublé) divise la résistance au flambement par **4**.`,
 exercices:[
  {t:"Charge critique d'Euler", d:1, e:`Un tube carré en acier de 60 × 60 × 3 mm (A = 6,61 cm², I = 35,1 cm⁴), longueur 3 m, est articulé à ses deux extrémités. E = 210 000 MPa.
1. Calculer Ncr.
2. Que devient Ncr si le tube est encastré à un bout et libre à l'autre ?`, c:`1. Lf = 3 000 mm ; Ncr = π² × 210 000 × 35,1 × 10⁴ / 3 000² = **80,8 kN**.
2. Lf = 2 × 3 000 = 6 000 mm → Ncr = 80,8 / 4 = **20,2 kN** : quatre fois moins.`},
  {t:"Élancement et coefficient α d'un poteau en béton armé", d:2, e:`Poteau de 25 × 25 cm, hauteur libre 3,40 m, Lf = 0,7 l0.
1. Calculer l'élancement.
2. Calculer le coefficient α du BAEL.
3. Quelle section carrée minimale faudrait-il pour que λ ≤ 35 ?`, c:`1. Lf = 0,7 × 3,40 = 2,38 m ; **λ = 3,46 × 2,38 / 0,25 = 32,9**.
2. λ ≤ 50 : **α = 0,85 / (1 + 0,2 × (32,9 / 35)²) = 0,85 / 1,177 = 0,72**.
3. λ ≤ 35 → a ≥ 3,46 × 2,38 / 35 = 0,235 m : la section de 25 cm convient déjà (λ = 32,9).`},
  {t:"Vérifier un poteau métallique (Eurocode 3)", d:2, e:`Un poteau HEA 200 (A = 53,8 cm², iy = 8,28 cm, iz = 4,98 cm), articulé en tête et en pied, mesure 4,20 m. Acier S235. Il porte NEd = 600 kN.
Utiliser la courbe b (axe y) et la courbe c (axe z) et le tableau du cours (interpoler).`, c:`Axe z : λz = 4 200 / 49,8 = 84,3 ; λ̄z = 84,3 / 93,9 = **0,90** → courbe c : χ ≈ (0,66 + 0,54) / 2 = **0,60**.
Axe y : λy = 4 200 / 82,8 = 50,7 ; λ̄y = 0,54 → courbe b : χ ≈ 0,86 (non déterminant).
**Nb,Rd = 0,60 × 5 380 × 235 = 758 kN ≥ 600 kN** ✔ (taux de travail 79 %).`},
  {t:"Longueur de flambement et contreventement", d:2, e:`Un poteau de hangar de 6 m, articulé en pied et en tête, flambe selon son axe faible. On ajoute une lisse de bardage à mi-hauteur qui le tient selon cet axe.
1. Quelle est la nouvelle longueur de flambement selon l'axe faible ?
2. De combien la charge critique d'Euler selon cet axe est-elle multipliée ?`, c:`1. La lisse crée un point fixe : selon l'axe faible, **Lf = 3 m** (deux tronçons articulés de 3 m).
2. Ncr ∝ 1 / Lf² → multipliée par (6 / 3)² = **4**. C'est le moyen le plus économique de renforcer un poteau élancé : le tenir latéralement plutôt que de grossir le profilé.`},
  {t:"Étais de coffrage", d:3, e:`Un étai tubulaire en acier (tube extérieur de diamètre 60 mm et épaisseur 2,5 mm), déployé à 3,20 m, est articulé à ses deux extrémités. E = 210 000 MPa.
1. Calculer I, A et i du tube.
2. Calculer l'élancement et la charge critique d'Euler.
3. Le fabricant garantit une charge d'utilisation égale à Ncr / 3. La dalle de 20 cm à couler est étayée tous les 1,20 m × 1,20 m ; charges à reprendre : béton frais 25 kN/m³ + 1,5 kN/m² de charges de chantier. L'étai convient-il ?`, c:`1. d = 55 mm. A = π (60² − 55²) / 4 = **452 mm²** ; I = π (60⁴ − 55⁴) / 64 = **187 000 mm⁴** ; i = √(187 000 / 452) = **20,3 mm**.
2. λ = 3 200 / 20,3 = **158** (très élancé) ; Ncr = π² × 210 000 × 187 000 / 3 200² = **37,8 kN**.
3. Charge d'utilisation : 37,8 / 3 = **12,6 kN**.
Charge par étai : (0,20 × 25 + 1,5) × 1,20 × 1,20 = 6,5 × 1,44 = **9,4 kN ≤ 12,6 kN** ✔.
En pratique, on lit directement la charge admissible dans le tableau du fabricant, en fonction de la hauteur de déploiement ; un étai plus déployé porte moins.`}
 ],
 quiz:[
  {q:"La charge critique d'Euler vaut :", o:["π² E I / Lf","π² E I / Lf²","E I / Lf²","π E A / Lf"], r:1, e:"Ncr = π² E I / Lf²."},
  {q:"La longueur de flambement d'un mât encastré en pied et libre en tête vaut :", o:["0,5 L","0,7 L","L","2 L"], r:3, e:"C'est le cas le plus défavorable."},
  {q:"Une pièce flambe selon :", o:["Son axe fort","Son axe faible (plus petit I)","N'importe quel axe","Son axe longitudinal"], r:1, e:"La flexion se produit dans la direction la moins rigide."},
  {q:"L'élancement d'un poteau rectangulaire de petit côté a vaut :", o:["Lf / a","3,46 Lf / a","a / Lf","Lf × a"], r:1, e:"i = a / √12, donc λ = Lf √12 / a."},
  {q:"Si Lf double, la charge critique est :", o:["Divisée par 2","Divisée par 4","Multipliée par 2","Inchangée"], r:1, e:"Ncr varie comme 1 / Lf²."}
 ]},

{id:"rdm-19", niv:3, titre:"Structures hyperstatiques : la méthode des forces", duree:75, contenu:`## Pourquoi des structures hyperstatiques ?
La plupart des ouvrages en béton armé sont **hyperstatiques** : poutres continues sur plusieurs appuis, poutres encastrées dans des poteaux, portiques. Elles ont **plus de liaisons** que le strict nécessaire, ce qui présente des avantages :
- les **moments** sont plus faibles (ils se répartissent entre travée et appuis) ;
- les **flèches** sont plus faibles ;
- la structure est plus **robuste** : si une liaison cède, les efforts se redistribuent.
En contrepartie, la statique ne suffit plus : il faut écrire des **équations de déformation** (compatibilité). Et les efforts deviennent sensibles aux **tassements d'appuis** et aux variations de température.

## Le principe de la méthode des forces
1. Déterminer le degré d'hyperstaticité **h**.
2. **Supprimer** h liaisons « en trop » pour obtenir une structure **isostatique associée** ; les efforts de ces liaisons deviennent des **inconnues hyperstatiques** X1, X2…
3. Calculer, dans la structure isostatique, le **déplacement** (ou la rotation) au droit de la liaison supprimée, sous les charges (δ10) et sous une force unité X = 1 (δ11).
4. Écrire la **compatibilité** : la liaison réelle impose un déplacement nul :
$$ δ10 + X1 × δ11 = 0      →      X1 = − δ10 / δ11
5. Toutes les autres réactions et les diagrammes s'obtiennent ensuite par la **statique** et la **superposition**.
Les déplacements se calculent avec le formulaire des flèches et rotations (ou par les intégrales de Mohr, au chapitre suivant).

## Exemple 1 : poutre encastrée-appuyée sous charge uniforme
Poutre AB de portée L, encastrée en A, appui simple en B, charge q. h = 4 − 3 = 1.
- On supprime l'appui B → **console** encastrée en A ; inconnue X = RB (vers le haut).
- Flèche en B sous q : qL⁴ / (8EI) vers le bas ; sous X : X L³ / (3EI) vers le haut.
- Compatibilité (flèche nulle en B) : X L³ / (3EI) = qL⁴ / (8EI) → **RB = 3qL / 8**.
Statique : **RA = 5qL / 8** ; moment d'encastrement **MA = − qL² / 8** (fibre supérieure tendue).
Moment maximal en travée, là où V = 0 (à 3L/8 de B) : **Mt = 9qL² / 128 ≈ 0,070 qL²**.

> [!exemple] Application numérique
> L = 5 m, q = 20 kN/m : RB = 3 × 20 × 5 / 8 = **37,5 kN** ; RA = **62,5 kN** ; MA = −20 × 25 / 8 = **−62,5 kN·m** ; Mt = 9 × 20 × 25 / 128 = **35,2 kN·m**.
> En isostatique (deux appuis simples), on aurait eu M = 62,5 kN·m en travée : l'encastrement a déplacé une partie du moment sur l'appui.

## Exemple 2 : poutre bi-encastrée sous charge uniforme
On part de la poutre sur deux appuis et on ajoute, par symétrie, le même moment M à chaque extrémité. La rotation sur appui due à q vaut qL³ / (24EI) ; celle due aux deux moments d'extrémité vaut M L / (2EI). Compatibilité (rotation nulle à l'encastrement) :
$$ M L / (2EI) = qL³ / (24EI)      →      Mappui = − qL² / 12   et   Mtravée = qL²/8 − qL²/12 = qL² / 24

## Exemple 3 : poutre continue sur trois appuis
Deux travées égales de portée L, charge q partout. h = 1. On supprime l'appui central : poutre isostatique de portée 2L.
- Flèche au milieu sous q : 5q(2L)⁴ / (384EI) = 5qL⁴ / (24EI) ;
- sous X : X(2L)³ / (48EI) = X L³ / (6EI).
Compatibilité : **X = Rcentral = 5qL / 4 = 1,25 qL**. Appuis d'extrémité : (2qL − 1,25qL) / 2 = **0,375 qL**.
Moment sur l'appui central : **M = − qL² / 8** ; moment maximal en travée : **Mt = 9qL² / 128**.

## Formulaire des poutres hyperstatiques courantes (charge uniforme q, portée L)
| Poutre | Moment sur appui | Moment en travée | Réactions |
|---|---|---|---|
| Encastrée – appuyée | −qL²/8 (encastrement) | 9qL²/128 | 5qL/8 et 3qL/8 |
| Bi-encastrée | −qL²/12 | qL²/24 | qL/2 et qL/2 |
| Continue, 2 travées égales | −qL²/8 (appui central) | 9qL²/128 | 0,375qL ; 1,25qL ; 0,375qL |
| Continue, 3 travées égales | −qL²/10 (appuis intermédiaires) | 0,08qL² (rives) ; 0,025qL² (centrale) | 0,4qL ; 1,1qL ; 1,1qL ; 0,4qL |
Pour une force P au milieu : encastrée-appuyée : MA = −3PL/16 et Mt = 5PL/32 ; bi-encastrée : M = ±PL/8.

## Sensibilité aux tassements
Si un appui d'une poutre hyperstatique **s'enfonce** de Δ, la compatibilité change et des efforts supplémentaires apparaissent (alors qu'une poutre isostatique suit le tassement sans effort). Pour la poutre sur trois appuis : un tassement Δ de l'appui central réduit sa réaction de **6 E I Δ / L³** (et augmente d'autant la somme des deux autres). D'où l'importance de fondations homogènes sous une même structure, et des **joints** entre parties de bâtiments fondées différemment.

> [!retenir]
> - Méthode des forces : supprimer h liaisons, calculer les déplacements, écrire la compatibilité δ10 + X δ11 = 0.
> - Encastrée-appuyée : MA = −qL²/8, Mt = 9qL²/128 ; bi-encastrée : −qL²/12 et qL²/24.
> - Deux travées égales : appui central 1,25 qL et M = −qL²/8.
> - L'hyperstaticité réduit les moments mais rend sensible aux tassements.`,
 exercices:[
  {t:"Poutre encastrée-appuyée", d:2, e:`Une poutre de 6 m, encastrée en A et simplement appuyée en B, porte 15 kN/m.
1. Calculer les réactions et le moment d'encastrement.
2. Calculer le moment maximal en travée et sa position.
3. Comparer avec la même poutre sur deux appuis simples.`, c:`1. **RB = 3qL/8 = 3 × 15 × 6 / 8 = 33,75 kN** ; **RA = 5qL/8 = 56,25 kN** ; **MA = −qL²/8 = −67,5 kN·m**.
2. V s'annule à 3L/8 = **2,25 m de B** : Mt = 33,75 × 2,25 − 15 × 2,25² / 2 = 75,94 − 37,97 = **37,97 kN·m** (= 9qL²/128 ✔).
3. Sur deux appuis : M = qL²/8 = **67,5 kN·m** en travée. L'encastrement réduit le moment de travée de 44 % mais crée un moment négatif de même valeur à l'encastrement (aciers supérieurs nécessaires).`},
  {t:"Poutre encastrée-appuyée sous force centrée", d:2, e:`Retrouver par la méthode des forces la réaction RB d'une poutre encastrée en A et appuyée en B, de portée L, portant une force P en son milieu. (Flèche en bout d'une console sous une force P placée à L/2 de l'encastrement : 5PL³ / (48EI).)`, c:`On supprime l'appui B : console de longueur L.
Flèche en B sous P (placée à L/2) : δ10 = 5PL³ / (48EI) vers le bas.
Flèche en B sous X = RB : δ11 × X = X L³ / (3EI) vers le haut.
Compatibilité : X L³ / (3EI) = 5PL³ / (48EI) → **RB = 5P/16**.
Puis RA = 11P/16 et MA = −P L/2 + 5P/16 × L = **−3PL/16** ; sous la charge : Mt = 5P/16 × L/2 = **5PL/32**.`},
  {t:"Poutre continue à deux travées égales", d:2, e:`Une poutre de plancher continue sur trois appuis A, B, C a deux travées de 4,5 m et porte 30 kN/m (ELU).
1. Calculer les trois réactions.
2. Calculer le moment sur l'appui B et le moment maximal en travée.`, c:`1. **RB = 1,25 qL = 1,25 × 30 × 4,5 = 168,75 kN** ; **RA = RC = 0,375 qL = 50,63 kN**. Total : 270 kN = 30 × 9 ✔.
2. **MB = −qL²/8 = −30 × 4,5² / 8 = −75,94 kN·m**.
En travée : V = 50,63 − 30x s'annule en x = 1,6875 m → **Mt = 50,63 × 1,6875 − 15 × 1,6875² = 42,72 kN·m** (= 9qL²/128 ✔).`},
  {t:"Poutre bi-encastrée sous force centrée", d:3, e:`Une poutre bi-encastrée de portée L porte une force P en son milieu. La rotation sur appui d'une poutre sur deux appuis sous P centrée vaut PL² / (16EI) ; celle due à deux moments d'extrémité égaux M vaut ML / (2EI).
1. Calculer le moment d'encastrement.
2. En déduire le moment à mi-portée.
3. Application : L = 5 m, P = 40 kN.`, c:`1. Compatibilité : M L / (2EI) = P L² / (16EI) → **Mappui = −PL/8**.
2. Moment isostatique au milieu : PL/4. **Mmilieu = PL/4 − PL/8 = PL/8**. Moments sur appuis et à mi-portée sont égaux en valeur absolue.
3. Mappui = −40 × 5 / 8 = **−25 kN·m** ; Mmilieu = **+25 kN·m** (contre 50 kN·m en isostatique).`},
  {t:"Effet d'un tassement d'appui", d:3, e:`Une poutre continue IPE 300 (I = 8 356 cm⁴, E = 210 000 MPa) repose sur trois appuis espacés de 6 m. L'appui central tasse de 10 mm.
1. De combien sa réaction diminue-t-elle ?
2. Quel moment supplémentaire apparaît sur l'appui central ?
3. Commenter.`, c:`1. ΔR = 6 E I Δ / L³ = 6 × 210 000 × 8,356 × 10⁷ × 10 / 6 000³ = **4 874 N ≈ 4,9 kN**.
2. Le tassement équivaut à retirer une force de 4,9 kN au milieu d'une poutre de 12 m : moment supplémentaire au milieu = ΔR × 2L / 4 = 4,9 × 12 / 4 = **+14,6 kN·m** (il réduit le moment négatif sur appui et augmente les moments de travée).
3. Pour une poutre métallique souple, l'effet reste modéré. Pour une poutre en béton armé raide (I bien plus grand), le même tassement crée des efforts beaucoup plus importants et peut fissurer la poutre : d'où l'exigence de fondations homogènes.`}
 ],
 quiz:[
  {q:"Le principe de la méthode des forces consiste à :", o:["Ignorer les liaisons","Supprimer des liaisons et écrire la compatibilité des déplacements","Doubler les charges","Utiliser seulement ΣM = 0"], r:1, e:"On revient à une structure isostatique associée."},
  {q:"Le moment d'encastrement d'une poutre bi-encastrée sous charge uniforme vaut :", o:["−qL²/8","−qL²/12","−qL²/24","−qL²/2"], r:1, e:"Et qL²/24 au milieu."},
  {q:"Dans une poutre continue à deux travées égales, l'appui central reprend :", o:["0,5 qL","qL","1,25 qL","2 qL"], r:2, e:"5qL/4."},
  {q:"Une structure hyperstatique :", o:["Est insensible aux tassements","Est sensible aux tassements d'appuis","Ne fléchit pas","Est un mécanisme"], r:1, e:"Un tassement modifie la compatibilité, donc les efforts."},
  {q:"Pour une poutre encastrée-appuyée sous q, la réaction de l'appui simple vaut :", o:["qL/2","3qL/8","5qL/8","qL/4"], r:1, e:"3qL/8, et 5qL/8 côté encastrement."}
 ]},

{id:"rdm-8", niv:3, titre:"Poutres continues : le théorème des trois moments", duree:70, contenu:`## L'idée de Clapeyron
Pour une poutre continue sur n appuis, la méthode des forces devient vite lourde. **Clapeyron** a eu l'idée de prendre comme inconnues les **moments sur appuis** M1, M2… et de couper la poutre en **travées indépendantes** sur appuis simples, chargées par leurs charges **et** par les moments d'appui. La condition de **continuité** est que les deux travées voisines aient la **même rotation** sur l'appui commun.

## L'équation des trois moments
Pour l'appui i, entre la travée i (à gauche, portée Li) et la travée i+1 (à droite, portée Li+1), avec EI constant :
$$ Mi−1 × Li + 2 Mi × (Li + Li+1) + Mi+1 × Li+1 = − 6 EI × (θgi + θdi+1)
où θgi et θdi+1 sont les rotations, sur l'appui i, des travées supposées sur appuis simples sous leurs **charges seules**. Pour les cas courants, le second membre vaut :
| Charge sur la travée de portée L | Terme 6 EI θ |
|---|---|
| Charge uniforme q | q L³ / 4 |
| Force P à a de l'appui étudié (b = L − a) | P a b (L + b) / L |
| Force P au milieu | 3 P L² / 8 |
Aux appuis d'**extrémité** simples, M = 0 ; un **porte-à-faux** impose un moment d'appui connu (−q c² / 2, etc.).
On écrit une équation par appui intermédiaire, on résout le système, puis chaque travée se calcule comme une poutre isostatique soumise à ses charges et aux deux moments d'appui.

## Exemple 1 : deux travées égales
L1 = L2 = L, charge q partout, M0 = M2 = 0 :
$$ 2 M1 (L + L) = − (qL³/4 + qL³/4)      →      M1 = − qL² / 8
On retrouve le résultat de la méthode des forces.

## Exemple 2 : deux travées inégales
> [!exemple] Travées de 4 m et 6 m sous 15 kN/m
> Équation en B : 2 MB (4 + 6) = − (15 × 4³ / 4 + 15 × 6³ / 4) = − (240 + 810) = −1 050 → **MB = −52,5 kN·m**.
> **Travée AB** (L = 4 m) : RA = qL/2 + MB/L = 30 − 13,13 = **16,88 kN** ; RB,gauche = 30 + 13,13 = 43,13 kN.
> **Travée BC** (L = 6 m) : RC = 45 − 52,5/6 = 45 − 8,75 = **36,25 kN** ; RB,droite = 45 + 8,75 = 53,75 kN.
> **RB = 43,13 + 53,75 = 96,88 kN**. Contrôle : 16,88 + 96,88 + 36,25 = 150 kN = 15 × 10 ✔.
> Moments en travée : travée BC, V = 0 à 36,25 / 15 = 2,42 m de C → **Mt = 36,25 × 2,42 − 7,5 × 2,42² = 43,8 kN·m** ; travée AB, V = 0 à 1,125 m de A → **Mt = 9,5 kN·m** seulement.
> La grande travée « charge » l'appui B et soulage la petite travée, dont le moment de travée devient très faible.

## Exemple 3 : trois travées égales
Par symétrie, M1 = M2 = M. Équation en 1 : 2 M (2L) + M L = − qL³/2 → 5 M L = − qL³/2 → **M = − qL² / 10**.
Réactions : 0,4 qL aux appuis de rive, 1,1 qL aux appuis intermédiaires ; moment de travée de rive : 0,08 qL².

## Cas de charge défavorables
Les charges d'exploitation Q peuvent être présentes sur certaines travées et absentes sur d'autres. Pour obtenir :
- le **moment maximal en travée** : charger cette travée et les travées **une sur deux** ;
- le **moment maximal (en valeur absolue) sur un appui** : charger les **deux travées adjacentes** (et ensuite une sur deux).
Les charges permanentes G sont toujours présentes partout. Les méthodes du BAEL (**forfaitaire**, **Caquot**) sont des simplifications de ces calculs adaptées au béton armé. Par exemple, pour deux travées égales, le calcul élastique donne sur l'appui central qL²/8, soit **1,0 M0** (M0 = qL²/8 : moment isostatique de la travée), alors que la méthode forfaitaire ne retient que **0,6 M0** : le béton armé fissuré **redistribue** une partie du moment d'appui vers les travées, dont les moments sont en contrepartie majorés.

> [!retenir]
> - Mi−1 Li + 2 Mi (Li + Li+1) + Mi+1 Li+1 = − (termes de charge) ; qL³/4 pour une charge uniforme.
> - Deux travées égales : −qL²/8 ; trois travées égales : −qL²/10.
> - Réactions par travée : qL/2 ± (différence des moments d'appui) / L.
> - Charger une travée sur deux pour le maximum en travée ; les deux travées adjacentes pour le maximum sur appui.`,
 exercices:[
  {t:"Deux travées égales", d:1, e:`Poutre continue de deux travées de 5 m sous 20 kN/m. Calculer le moment sur l'appui central par l'équation des trois moments, puis les réactions.`, c:`2 MB (5 + 5) = − (20 × 125 / 4 + 20 × 125 / 4) = −1 250 → **MB = −62,5 kN·m** (= qL²/8 ✔).
Travée AB : RA = 50 − 62,5/5 = **37,5 kN** ; RB,gauche = 50 + 12,5 = 62,5 kN. Par symétrie : **RB = 125 kN**, **RC = 37,5 kN**.`},
  {t:"Deux travées inégales", d:2, e:`Poutre continue ABC : AB = 5 m, BC = 3,5 m, charge uniforme 18 kN/m.
1. Calculer MB.
2. Calculer les réactions.
3. Calculer le moment maximal dans la travée AB.`, c:`1. 2 MB (5 + 3,5) = − (18 × 125 / 4 + 18 × 42,875 / 4) = − (562,5 + 192,9) = −755,4 → **MB = −755,4 / 17 = −44,4 kN·m**.
2. AB : RA = 45 − 44,4 / 5 = **36,1 kN** ; RB,g = 45 + 8,9 = 53,9 kN.
BC : RC = 31,5 − 44,4 / 3,5 = **18,8 kN** ; RB,d = 31,5 + 12,7 = 44,2 kN.
**RB = 98,1 kN.** Contrôle : 36,1 + 98,1 + 18,8 = 153 kN = 18 × 8,5 ✔.
3. Travée AB : V = 36,1 − 18x = 0 → x = 2,0 m → **Mt = 36,1 × 2,0 − 9 × 2,0² = 36,2 kN·m**.`},
  {t:"Trois travées avec charges différentes", d:3, e:`Poutre continue sur quatre appuis A, B, C, D ; trois travées de 4 m. Charges : 10 kN/m sur AB et CD, 25 kN/m sur BC (travée centrale plus chargée).
1. Écrire les équations des trois moments en B et en C.
2. Résoudre (utiliser la symétrie).
3. Calculer les réactions.`, c:`Termes de charge : travées de rive 10 × 4³ / 4 = 160 ; travée centrale 25 × 64 / 4 = 400.
1. En B : 2 MB (4 + 4) + MC × 4 = − (160 + 400) → 16 MB + 4 MC = −560.
En C : MB × 4 + 2 MC (4 + 4) = − (400 + 160) → 4 MB + 16 MC = −560.
2. Symétrie MB = MC = M : 20 M = −560 → **MB = MC = −28 kN·m**.
3. Travée AB : RA = 20 − 28/4 = **13 kN** ; RB,g = 20 + 7 = 27 kN.
Travée BC : moments égaux aux deux bouts → RB,d = RC,g = 25 × 4 / 2 = 50 kN.
**RB = RC = 27 + 50 = 77 kN** ; **RD = 13 kN**. Total : 13 + 77 + 77 + 13 = 180 kN = 10 × 8 + 25 × 4 ✔.`},
  {t:"Poutre continue avec charge ponctuelle", d:3, e:`Poutre continue ABC, AB = BC = 4 m. Une seule charge : P = 40 kN au milieu de AB.
1. Calculer MB.
2. Calculer les trois réactions. Que remarquez-vous pour l'appui C ?`, c:`1. Terme de charge de la travée AB pour une force au milieu : 3PL²/8 = 3 × 40 × 16 / 8 = 240. Travée BC non chargée : 0.
2 MB (4 + 4) = −240 → **MB = −15 kN·m**.
2. Travée AB : RA = 20 − 15/4 = **16,25 kN** ; RB,g = 20 + 3,75 = 23,75 kN.
Travée BC (seulement le moment MB) : RC = −15/4 = **−3,75 kN** ; RB,d = +3,75 kN.
**RB = 27,5 kN.** Contrôle : 16,25 + 27,5 − 3,75 = 40 ✔.
L'appui C est **tiré vers le haut** (réaction négative) : la travée chargée fait se soulever l'extrémité de la travée voisine. Il faut ancrer l'appui C (ou compter sur les charges permanentes pour le maintenir).`},
  {t:"Cas de charge le plus défavorable", d:2, e:`Une poutre continue de deux travées égales de 5 m porte G = 15 kN/m partout et Q = 10 kN/m (exploitation) qui peut être présente ou non sur chaque travée. On travaille à l'ELU (1,35 G + 1,5 Q).
1. Calculer le moment maximal sur l'appui central (les deux travées chargées).
2. Pour le moment maximal en travée AB, on charge Q seulement sur AB. Calculer MB dans ce cas et le moment maximal de la travée AB.`, c:`Charges ELU : avec Q : 1,35 × 15 + 1,5 × 10 = 35,25 kN/m ; sans Q : 1,35 × 15 = 20,25 kN/m.
1. Deux travées à 35,25 : **MB = −35,25 × 25 / 8 = −110,2 kN·m**.
2. AB à 35,25, BC à 20,25 : 2 MB × 10 = − (35,25 × 125 + 20,25 × 125) / 4 = −1 734,4 → **MB = −86,7 kN·m**.
Travée AB : RA = 35,25 × 5 / 2 − 86,7 / 5 = 88,1 − 17,3 = 70,8 kN ; V = 0 à x = 70,8 / 35,25 = 2,01 m → **Mt = 70,8 × 2,01 − 17,63 × 2,01² = 71,1 kN·m** (contre 62,0 kN·m si les deux travées étaient chargées).
Il faut donc étudier plusieurs cas de charge pour obtenir les enveloppes des moments.`}
 ],
 quiz:[
  {q:"Dans le théorème des trois moments, les inconnues sont :", o:["Les réactions","Les moments sur appuis","Les flèches","Les efforts tranchants"], r:1, e:"Une équation par appui intermédiaire."},
  {q:"Le terme de charge d'une travée de portée L sous charge uniforme q vaut :", o:["qL²/8","qL³/4","qL/2","qL⁴/384"], r:1, e:"6EIθ = 6 × qL³/24 = qL³/4."},
  {q:"Pour trois travées égales sous charge uniforme, le moment sur appui intermédiaire vaut :", o:["−qL²/8","−qL²/10","−qL²/12","−qL²/16"], r:1, e:"Résultat classique."},
  {q:"Pour obtenir le moment maximal en travée, on charge :", o:["Toutes les travées","La travée étudiée et une travée sur deux","Seulement les travées voisines","Aucune travée"], r:1, e:"Les travées voisines déchargées augmentent le moment de travée."},
  {q:"Une réaction négative sur un appui de rive signifie :", o:["Une erreur","Que la poutre tend à se soulever à cet appui","Que l'appui est surchargé","Que la poutre est isostatique"], r:1, e:"Il faut alors ancrer l'appui."}
 ]},

{id:"rdm-20", niv:3, titre:"Méthodes énergétiques : Castigliano, Menabrea et intégrales de Mohr", duree:70, contenu:`## L'énergie de déformation
Une poutre qui se déforme sous des charges **emmagasine de l'énergie**, comme un ressort. Cette énergie, appelée **énergie de déformation** U, vaut pour une structure plane (en négligeant l'effet de V, faible pour les poutres usuelles) :
$$ U = ∫ M² / (2 E I) dx + ∫ N² / (2 E A) dx
Pour une barre de treillis (N constant sur la longueur L) : U = N² L / (2 E A).
**Théorème de Clapeyron** : U est égale au travail des forces extérieures appliquées progressivement, U = ½ Σ Fi × δi.

## Théorème de Castigliano
Le déplacement du point d'application d'une force F, **dans la direction de F**, est la dérivée de l'énergie par rapport à cette force :
$$ δ = ∂U / ∂F      (et la rotation sous un couple C : θ = ∂U / ∂C)
Pour un déplacement en un point **sans** force, on y place une force fictive Φ, on dérive, puis on fait Φ = 0.

## La méthode de la charge unité (Maxwell-Mohr)
En pratique, on utilise la forme équivalente, plus rapide :
$$ δ = ∫ M × m / (E I) dx      (+ Σ N × n × L / (E A) pour les barres)
- M : moment dû aux **charges réelles** ;
- m : moment dû à une **force unité** (ou un couple unité pour une rotation) placée au point et dans la direction du déplacement cherché.

## Les intégrales de Mohr (méthode de Vereshchagin)
Quand M et m sont des formes simples, ∫ M m dx s'obtient sans intégrer, grâce à un tableau (L : longueur du tronçon ; M et m : valeurs maximales des deux diagrammes) :
| Diagramme M \\ diagramme m | Rectangle m | Triangle m (max à une extrémité) | Triangle symétrique m (max au milieu) |
|---|---|---|---|
| Rectangle M | L M m | L M m / 2 | L M m / 2 |
| Triangle M, même côté | L M m / 2 | L M m / 3 | L M m / 4 |
| Triangle M, côté opposé | L M m / 2 | L M m / 6 | L M m / 4 |
| Triangle symétrique M | L M m / 2 | L M m / 4 | L M m / 3 |
| Parabole symétrique M (charge uniforme, max au milieu) | 2 L M m / 3 | L M m / 3 | 5 L M m / 12 |
| Parabole de console (max à l'encastrement) | L M m / 3 | L M m / 4 (même côté) | — |

> [!exemple] Retrouver la flèche 5qL⁴/384EI
> Poutre sur deux appuis, charge q : M est une parabole symétrique de maximum qL²/8. Charge unité au milieu : m est un triangle symétrique de maximum L/4.
> ∫ M m dx = 5/12 × L × qL²/8 × L/4 = **5 qL⁴ / 384** → f = 5qL⁴ / (384 E I) ✔.

> [!exemple] Flèche d'une console
> Force P en bout : M est un triangle de valeur PL à l'encastrement ; force unité en bout : m triangle de valeur L, même côté.
> ∫ M m dx = L × PL × L / 3 = PL³/3 → f = **PL³ / (3 E I)** ✔.

## Déplacement d'un nœud de treillis
$$ δ = Σ N × n × L / (E A)
N : efforts réels dans les barres ; n : efforts dus à une force unité au nœud étudié.

> [!exemple] Flèche du sommet d'une ferme
> Ferme triangulaire de 6 m, hauteur 2 m, P = 30 kN au sommet : NAC = NBC = −27,04 kN (longueur 3,606 m, A = 1 000 mm²), NAB = 22,5 kN (6 m, A = 500 mm²). Sous une force unité au sommet : n = N / 30, soit −0,901 et 0,75.
> Arbalétriers : 2 × 27 040 × 0,901 × 3 606 / (210 000 × 1 000) = 0,84 mm ; entrait : 22 500 × 0,75 × 6 000 / (210 000 × 500) = 0,96 mm.
> **Flèche du sommet ≈ 1,80 mm.** L'entrait, tendu et de faible section, contribue le plus : le raidir réduit efficacement la flèche.

## Le théorème de Menabrea : résoudre l'hyperstatique
Pour une structure hyperstatique, les inconnues hyperstatiques X rendent l'énergie de déformation **minimale** :
$$ ∂U / ∂X = 0
C'est exactement la condition de compatibilité de la méthode des forces : ∫ (M0 + X m) m / (EI) dx = 0, soit X = − ∫ M0 m dx / ∫ m² dx, que l'on calcule avec le tableau des intégrales de Mohr.

> [!exemple] Poutre encastrée-appuyée par Menabrea
> Structure associée : console (on libère l'appui B), M0 parabole de console de valeur qL²/2 à l'encastrement ; X = RB : m triangle de valeur L (signe opposé).
> ∫ M0 m dx = − L × qL²/2 × L / 4 = − qL⁴/8 ; ∫ m² dx = L × L × L / 3 = L³/3.
> X = (qL⁴/8) / (L³/3) = **3qL/8** ✔ (comme au chapitre précédent).

> [!retenir]
> - U = ∫ M²/(2EI) dx + Σ N²L/(2EA).
> - Castigliano : δ = ∂U/∂F ; charge unité : δ = ∫ M m dx / EI + Σ N n L / EA.
> - Tableau de Mohr : parabole × triangle symétrique = 5LMm/12 ; triangles même côté = LMm/3.
> - Menabrea : ∂U/∂X = 0 ⇔ compatibilité de la méthode des forces.`,
 exercices:[
  {t:"Flèche sous une force centrée par les intégrales de Mohr", d:2, e:`Poutre sur deux appuis, portée L, force P au milieu. Retrouver la flèche à mi-portée avec le tableau des intégrales de Mohr.`, c:`M : triangle symétrique de maximum PL/4. m (force unité au milieu) : triangle symétrique de maximum L/4.
Tableau : triangle symétrique × triangle symétrique = L M m / 3.
∫ M m dx = L × (PL/4) × (L/4) / 3 = PL³ / 48 → **f = PL³ / (48 E I)** ✔.`},
  {t:"Rotation sur appui", d:2, e:`Poutre sur deux appuis, charge uniforme q. Calculer la rotation de l'appui A en appliquant un couple unité en A.`, c:`M : parabole symétrique de maximum qL²/8.
Couple unité en A : m varie linéairement de 1 (en A) à 0 (en B) → triangle de maximum 1.
Tableau : parabole symétrique × triangle = L M m / 3.
∫ M m dx = L × qL²/8 × 1 / 3 = qL³ / 24 → **θA = qL³ / (24 E I)** ✔.`},
  {t:"Flèche d'une console sous charge uniforme", d:3, e:`Console de longueur L sous charge uniforme q. Calculer la flèche en bout par les intégrales de Mohr. Application : L = 1,5 m, q = 10 kN/m, IPE 160 (I = 869 cm⁴), E = 210 000 MPa.`, c:`M : parabole de console de valeur qL²/2 à l'encastrement. m (force unité en bout) : triangle de valeur L à l'encastrement (même côté).
Tableau : L M m / 4 → ∫ = L × qL²/2 × L / 4 = qL⁴/8 → **f = qL⁴ / (8 E I)** ✔.
Application : f = 10 × 1 500⁴ / (8 × 210 000 × 8,69 × 10⁶) = **3,47 mm** (L/432).`},
  {t:"Déplacement d'un nœud de treillis", d:3, e:`La ferme triangulaire de 8 m de portée et 2 m de hauteur porte 24 kN au faîtage (Narbalétriers = −26,8 kN, longueur 4,47 m ; Nentrait = +24,0 kN, longueur 8 m). Sections : arbalétriers 1 200 mm², entrait 600 mm² ; E = 210 000 MPa.
1. Calculer les efforts n sous une force unité au faîtage.
2. Calculer la flèche du faîtage.`, c:`1. Les efforts sont proportionnels à la charge : n = N / 24 → narb = −1,117 ; nentrait = +1,0.
2. Arbalétriers : 2 × 26 800 × 1,117 × 4 470 / (210 000 × 1 200) = 2 × 0,531 = **1,06 mm**.
Entrait : 24 000 × 1,0 × 8 000 / (210 000 × 600) = **1,52 mm**.
**δ ≈ 2,6 mm.** Plus la ferme est plate, plus les efforts et donc la flèche augmentent.`},
  {t:"Inconnue hyperstatique par Menabrea", d:3, e:`Poutre bi-encastrée sous charge uniforme q. Par symétrie, on cherche le moment d'encastrement X (identique aux deux bouts). Structure associée : poutre sur deux appuis ; M0 : parabole de maximum qL²/8 ; un couple unité à chaque extrémité donne m = 1 constant (rectangle).
Appliquer ∂U/∂X = 0 pour trouver X.`, c:`M = M0 + X × m, avec m = 1 sur toute la longueur.
Condition : ∫ (M0 + X) × 1 dx = 0 → ∫ M0 dx + X L = 0.
Tableau : parabole × rectangle = 2 L M m / 3 → ∫ M0 dx = 2/3 × L × qL²/8 = qL³/12.
X = − qL³/12 / L = **− qL²/12** ✔ : moment d'encastrement d'une poutre bi-encastrée.`}
 ],
 quiz:[
  {q:"L'énergie de flexion d'une poutre vaut :", o:["∫ M²/(2EI) dx","∫ M/(EI) dx","∫ EI M dx","∫ M² dx"], r:0, e:"Analogue à ½ k x² pour un ressort."},
  {q:"Selon Castigliano, le déplacement sous une force F vaut :", o:["U × F","∂U/∂F","U / F","F / U"], r:1, e:"Dérivée de l'énergie par rapport à la force."},
  {q:"Pour une flèche par la charge unité, m est le moment dû à :", o:["Les charges réelles","Une force unité au point et dans la direction cherchés","Le poids propre","Les réactions seules"], r:1, e:"δ = ∫ M m dx / EI."},
  {q:"Le produit de deux triangles « même côté » dans le tableau de Mohr vaut :", o:["L M m","L M m / 2","L M m / 3","L M m / 6"], r:2, e:"Intégrale de deux fonctions linéaires nulles au même bout."},
  {q:"Le théorème de Menabrea s'écrit :", o:["∂U/∂X = 0","U = 0","∂U/∂F = δ","M = 0"], r:0, e:"Les inconnues hyperstatiques minimisent l'énergie."}
 ]},

{id:"rdm-9", niv:3, titre:"Portiques et cadres", duree:70, contenu:`## Qu'est-ce qu'un portique ?
Un **portique** est formé de **poteaux** et d'une **traverse** (poutre) reliés par des **nœuds rigides** : l'angle entre poteau et traverse reste constant (90°) après déformation. Les portiques forment l'ossature des hangars, des halls industriels, des marchés couverts, et le contreventement de nombreux bâtiments en béton armé (ossature poteaux-poutres).
Selon les liaisons en pied et les articulations intérieures :
| Type de portique | Inconnues de réaction | Degré d'hyperstaticité |
|---|---|---|
| Trois articulations (2 pieds articulés + rotule en clé) | 4 | 0 (isostatique) |
| Deux articulations (pieds articulés, nœuds rigides) | 4 | 1 |
| Pieds encastrés | 6 | 3 |
Un portique fermé (**cadre**) comme un dalot ou une bâche à eau est intérieurement hyperstatique d'ordre 3.

## Le portique à trois articulations (isostatique)
On dispose de 3 équations de statique globale + 1 équation : le moment est **nul à la rotule** de clé.
Méthode : 1) ΣM en un pied → réaction verticale de l'autre pied ; 2) ΣFy ; 3) moment nul en C pour la partie gauche (ou droite) → **poussée** horizontale H ; 4) ΣFx.

> [!exemple] Portique à trois articulations sous charge uniforme
> Poteaux de 4 m, traverse de 8 m avec rotule C à mi-portée, charge q = 12 kN/m sur la traverse.
> Par symétrie : VA = VB = 12 × 8 / 2 = **48 kN**.
> Moment nul en C (partie gauche) : VA × 4 − HA × 4 − 12 × 4 × 2 = 0 → 192 − 4 HA − 96 = 0 → **HA = 24 kN** (la poussée, dirigée vers l'intérieur ; HB = 24 kN aussi).
> Moment en tête de poteau (nœud) : M = −HA × 4 = **−96 kN·m** (fibre extérieure tendue).
> Le long de la traverse : M(x) = −96 + 48x − 6x² = −6(x − 4)², nul à la rotule.
> Les pieds doivent reprendre la **poussée** de 24 kN : massifs dimensionnés pour, ou tirant entre les pieds.

## Moments dans un portique : la règle de lecture
On dessine le diagramme de M **du côté de la fibre tendue**. Dans un portique sous charges verticales, les nœuds sont en général tendus **à l'extérieur** (aciers extérieurs en béton armé, qui doivent faire le tour de l'angle), et la traverse est tendue **en bas** au milieu.

## Le portique à deux articulations (hyperstatique d'ordre 1)
Inconnue : la poussée H. Par la méthode des forces (on libère le déplacement horizontal d'un pied), pour une charge uniforme q sur la traverse et des poteaux de hauteur h :
$$ H = q L² / (4 h (2k + 3))      avec   k = (Itraverse / Ipoteau) × (h / L)
$$ Mnœud = − H × h      Mmi-traverse = qL²/8 − H × h

> [!exemple] Influence de la raideur relative
> L = 8 m, h = 4 m, q = 12 kN/m :
> | k | H (kN) | Mnœud (kN·m) | Mmi-traverse (kN·m) |
> |---|---|---|---|
> | 0,5 (Itraverse = Ipoteau) | 12,0 | −48,0 | 48,0 |
> | 1 | 9,6 | −38,4 | 57,6 |
> | 2 (traverse 4 fois plus raide) | 6,9 | −27,4 | 68,6 |
> Plus la traverse est raide par rapport aux poteaux, plus elle se comporte comme une poutre sur appuis simples (qL²/8 = 96 kN·m) ; plus les poteaux sont raides, plus ils « encastrent » la traverse.

## Les charges horizontales (vent, séisme)
Une force horizontale F en tête d'un portique à trois articulations crée :
- des réactions verticales opposées : VB = −VA = F h / L (le portique tend à basculer) ;
- des poussées égales à F / 2 dans chaque pied (moment nul à la rotule) ;
- des moments de ± F h / 2 aux nœuds.
C'est le rôle des portiques de **contreventement** : reprendre le vent par la rigidité des nœuds. Dans les halls métalliques, on complète par des **palées de stabilité** (croix de Saint-André) dans les longs pans.

> [!retenir]
> - Trois articulations : isostatique, la rotule donne l'équation M = 0 → poussée H.
> - Nœuds tendus à l'extérieur sous charges verticales.
> - Deux articulations : H = qL² / (4h(2k+3)), k = (It/Ip)(h/L).
> - Les pieds reprennent une poussée : fondations ou tirant.`,
 exercices:[
  {t:"Degré d'hyperstaticité de portiques", d:1, e:`Donner le degré d'hyperstaticité :
1. portique à pieds encastrés ;
2. portique à pieds articulés sans rotule ;
3. portique à pieds articulés avec une rotule en clé ;
4. portique à un pied encastré et un pied articulé.`, c:`1. r = 6 → **h = 3**.
2. r = 4 → **h = 1**.
3. r = 4, une rotule → h = 4 − 3 − 1 = **0** (isostatique).
4. r = 3 + 2 = 5 → **h = 2**.`},
  {t:"Portique à trois articulations", d:2, e:`Un hangar est formé de portiques à trois articulations : poteaux de 5 m, traverse horizontale de 12 m avec rotule à mi-portée. Charge sur la traverse : 8 kN/m (ELU).
1. Calculer les réactions verticales et la poussée.
2. Calculer le moment aux nœuds.`, c:`1. **VA = VB = 8 × 12 / 2 = 48 kN.**
Moment nul en C : 48 × 6 − HA × 5 − 8 × 6 × 3 = 0 → 288 − 5 HA − 144 = 0 → **HA = HB = 28,8 kN**.
2. **Mnœud = −28,8 × 5 = −144 kN·m** (fibre extérieure tendue). Contrôle : c'est aussi qL²/8 = 144 kN·m, le moment isostatique de la traverse, entièrement « reporté » aux nœuds.`},
  {t:"Portique sous l'effet du vent", d:3, e:`Le portique précédent (h = 5 m, L = 12 m, trois articulations) reçoit une force de vent horizontale F = 15 kN en tête du poteau gauche.
1. Calculer les réactions verticales.
2. Calculer les poussées horizontales.
3. Calculer les moments aux nœuds.`, c:`1. ΣM/A : VB × 12 − 15 × 5 = 0 → **VB = 6,25 kN** (vers le haut) ; **VA = −6,25 kN** (vers le bas : le pied gauche est soulevé).
2. Moment nul en C pour la partie droite (seules agissent VB et HB) : 6,25 × 6 − HB × 5 = 0 → **HB = 7,5 kN** (vers la gauche) ; ΣFx : **HA = 15 − 7,5 = 7,5 kN** (vers la gauche). Chaque pied reprend F/2.
3. Nœud droit : M = HB × 5 = **37,5 kN·m** ; nœud gauche : M = 7,5 × 5 = **37,5 kN·m** (= F h / 2), de signes opposés. Ces moments s'ajoutent à ceux des charges verticales dans les combinaisons.`},
  {t:"Portique à deux articulations", d:2, e:`Portique à pieds articulés : h = 4,5 m, L = 9 m, q = 15 kN/m sur la traverse. Traverse IPE 330 (I = 11 770 cm⁴), poteaux HEA 220 (I = 5 410 cm⁴).
1. Calculer k.
2. Calculer la poussée H, le moment au nœud et le moment à mi-traverse.`, c:`1. **k = (11 770 / 5 410) × (4,5 / 9) = 2,176 × 0,5 = 1,088.**
2. **H = 15 × 81 / (4 × 4,5 × (2 × 1,088 + 3)) = 1 215 / 93,2 = 13,04 kN.**
**Mnœud = −13,04 × 4,5 = −58,7 kN·m** ; **Mmi-traverse = 15 × 81 / 8 − 58,7 = 151,9 − 58,7 = 93,2 kN·m**.`},
  {t:"Dimensionner la traverse", d:3, e:`Pour le portique de l'exercice précédent (Mmax traverse = 93,2 kN·m, acier S235, Wel : IPE 300 = 557 cm³ ; IPE 330 = 713 cm³), vérifier l'IPE 330 en flexion. Pourrait-on utiliser un IPE 300 ? (On négligera l'effort normal et le déversement.)`, c:`IPE 330 : σ = 93,2 × 10⁶ / 713 × 10³ = **131 MPa ≤ 235** ✔ (taux 56 %).
IPE 300 : σ = 93,2 × 10⁶ / 557 × 10³ = **167 MPa ≤ 235** ✔ en résistance.
Mais changer la traverse change k (traverse moins raide → k plus petit → H augmente, le moment à mi-traverse diminue un peu) : il faut refaire le calcul, puis vérifier la **flèche** et le **déversement** (instabilité latérale des poutres fléchies), souvent déterminants pour les traverses de portiques.`}
 ],
 quiz:[
  {q:"Un portique à trois articulations est :", o:["Hyperstatique d'ordre 3","Isostatique","Un mécanisme","Hyperstatique d'ordre 1"], r:1, e:"La rotule de clé fournit l'équation manquante."},
  {q:"La poussée d'un portique sous charges verticales :", o:["Est nulle","Écarte les pieds des poteaux vers l'extérieur","Rapproche les pieds","Agit seulement en tête"], r:1, e:"Les fondations (ou un tirant) doivent la reprendre."},
  {q:"Sous charges verticales, les nœuds d'un portique sont tendus :", o:["À l'intérieur","À l'extérieur","Pas du tout","Au centre"], r:1, e:"Les aciers doivent contourner l'angle extérieur."},
  {q:"Si la traverse devient très raide par rapport aux poteaux, le moment à mi-traverse tend vers :", o:["0","qL²/24","qL²/8","qL²/2"], r:2, e:"Les poteaux souples ne retiennent plus la traverse."},
  {q:"Sous une force horizontale F en tête d'un portique à trois articulations, chaque pied reprend :", o:["F","F/2","2F","0"], r:1, e:"Par symétrie et moment nul à la rotule."}
 ]},

{id:"rdm-21", niv:3, titre:"La méthode de Cross (distribution des moments)", duree:75, contenu:`## Une méthode d'ingénieur
Hardy **Cross** (1930) a proposé une méthode itérative, sans système d'équations, pour calculer les moments dans les poutres continues et les portiques à **nœuds fixes** (qui tournent mais ne se déplacent pas). Elle a été la méthode de référence des bureaux d'études avant les logiciels, et reste idéale pour contrôler un résultat informatique ou comprendre le cheminement des efforts.

## Les ingrédients
### 1. La raideur des barres
La **raideur** d'une barre est le moment qu'il faut appliquer à une extrémité pour la faire tourner d'un radian :
- extrémité opposée **encastrée** : k = 4 E I / L ;
- extrémité opposée **articulée** (appui de rive) : k = 3 E I / L ;
- dans un portique **symétrique** chargé symétriquement, traverse coupée sur l'axe : k = 2 E I / L.

### 2. Les coefficients de répartition
Quand on fait tourner un nœud, le moment appliqué se partage entre les barres qui y arrivent **proportionnellement à leurs raideurs** :
$$ r(barre) = k(barre) / Σ k(barres du nœud)      (Σ r = 1)

### 3. Le coefficient de transmission
Une barre dont on fait tourner une extrémité « transmet » à l'autre extrémité, si elle est encastrée, **la moitié** du moment (coefficient 1/2) ; si elle est articulée, rien (0).

### 4. Les moments d'encastrement parfait (MEP)
On commence en supposant tous les nœuds **bloqués** (encastrés). Convention de Cross : un moment est **positif s'il tourne dans le sens horaire** lorsqu'il agit sur l'extrémité de la barre.
| Charge sur la barre | MEP à gauche | MEP à droite |
|---|---|---|
| Charge uniforme q (deux bouts encastrés) | −qL²/12 | +qL²/12 |
| Force P au milieu | −PL/8 | +PL/8 |
| Charge uniforme, bout opposé articulé (barre encastrée-appuyée) | −qL²/8 (côté encastré gauche) | +qL²/8 (côté encastré droit) |

## Le déroulement
1. Calculer les **raideurs**, puis les **coefficients de répartition** à chaque nœud.
2. Écrire les **MEP** de chaque barre.
3. À chaque nœud libre, calculer le **moment de déséquilibre** (somme des moments des barres) et le **répartir** avec le signe opposé selon les r.
4. **Transmettre** la moitié de chaque moment réparti à l'autre extrémité des barres (si elle est encastrée).
5. Recommencer jusqu'à ce que les moments transmis deviennent négligeables (2 à 4 cycles suffisent en général).
6. Additionner les colonnes : on obtient les moments aux extrémités des barres, puis les diagrammes et réactions par la statique de chaque travée.

> [!exemple] Poutre continue à deux travées (extrémités articulées)
> AB = 4 m, BC = 6 m, q = 15 kN/m, EI constant ; A et C sont des appuis simples → raideurs « bout opposé articulé » : kBA = 3EI/4 = 0,75 EI ; kBC = 3EI/6 = 0,5 EI.
> rBA = 0,75 / 1,25 = **0,6** ; rBC = **0,4**.
> MEP (barres encastrées en B, articulées à l'autre bout) : MBA = +15 × 4² / 8 = **+30** ; MBC = −15 × 6² / 8 = **−67,5** kN·m.
> Déséquilibre en B : 30 − 67,5 = −37,5 → on répartit +37,5 : BA reçoit +22,5, BC reçoit +15.
> Moments finaux : **MBA = +52,5 ; MBC = −52,5 kN·m** (équilibre du nœud ✔), soit un moment d'appui de **−52,5 kN·m** (fibre supérieure tendue) : exactement le résultat du théorème des trois moments. Aucune transmission n'est nécessaire car A et C sont articulés.

> [!exemple] Poutre continue encastrée aux deux bouts
> A encastré, B appui, C encastré ; AB = 5 m, BC = 4 m, q = 20 kN/m.
> kBA = 4EI/5 = 0,8 EI ; kBC = 4EI/4 = 1,0 EI → rBA = 0,444 ; rBC = 0,556.
> MEP : MAB = −41,67 ; MBA = +41,67 ; MBC = −26,67 ; MCB = +26,67.
> Déséquilibre en B : +15,0 → on répartit −15,0 : BA : −6,67 ; BC : −8,33.
> Transmission vers A et C (½) : MAB : −3,33 ; MCB : −4,17.
> **Résultat : MAB = −45,0 ; MBA = +35,0 ; MBC = −35,0 ; MCB = +22,5 kN·m.** Les seuls nœuds libres étant B, un seul cycle suffit. Moments d'appui (convention habituelle) : MA = −45, MB = −35, MC = −22,5 kN·m.

## Application aux portiques
Pour un portique à nœuds fixes (symétrique sous charges symétriques, ou contreventé), on traite les nœuds poteau-traverse de la même façon : le moment de la traverse se répartit entre la traverse et les poteaux.

> [!exemple] Portique symétrique encastré en pied
> Poteaux de 4 m, traverse de 8 m, même inertie, q = 12 kN/m sur la traverse. Symétrie → traverse coupée en deux : ktraverse = 2EI/8 = 0,25 EI ; kpoteau = 4EI/4 = 1,0 EI.
> rpoteau = 1 / 1,25 = 0,8 ; rtraverse = 0,2.
> MEP de la traverse au nœud gauche : −12 × 8² / 12 = −64 kN·m. On répartit +64 : traverse +12,8 → **−51,2** ; poteau **+51,2** ; transmission en pied : **+25,6 kN·m**.
> Moment au nœud : 51,2 kN·m ; à mi-traverse : 96 − 51,2 = **44,8 kN·m** ; en pied de poteau : 25,6 kN·m (de signe opposé à celui du nœud).

> [!retenir]
> - k = 4EI/L (bout opposé encastré), 3EI/L (articulé) ; r = k / Σk.
> - Transmission ½ vers un bout encastré, 0 vers un bout articulé.
> - MEP : ∓qL²/12, ∓PL/8 ; ∓qL²/8 pour une barre encastrée-articulée.
> - Bloquer, répartir le déséquilibre, transmettre, recommencer, additionner.`,
 exercices:[
  {t:"Coefficients de répartition", d:1, e:`À un nœud B arrivent : une travée BA de 5 m dont A est un appui simple de rive, une travée BC de 4 m dont C est encastré, et un poteau BD de 3 m encastré en pied. Même EI partout. Calculer les coefficients de répartition.`, c:`kBA = 3EI/5 = 0,600 EI ; kBC = 4EI/4 = 1,000 EI ; kBD = 4EI/3 = 1,333 EI. Σk = 2,933 EI.
**rBA = 0,205 ; rBC = 0,341 ; rBD = 0,455** (somme = 1 ✔). Le poteau court et encastré est la barre la plus raide : il « attire » le plus de moment.`},
  {t:"Poutre continue à extrémités articulées", d:2, e:`Poutre continue ABC, A et C appuis simples. AB = 5 m (q = 18 kN/m), BC = 3,5 m (q = 18 kN/m), EI constant. Calculer le moment sur l'appui B par la méthode de Cross et comparer au résultat des trois moments (−44,4 kN·m).`, c:`kBA = 3EI/5 = 0,6 EI ; kBC = 3EI/3,5 = 0,857 EI → rBA = 0,412 ; rBC = 0,588.
MEP (barres encastrées en B, articulées ailleurs) : MBA = +18 × 25 / 8 = +56,25 ; MBC = −18 × 12,25 / 8 = −27,56.
Déséquilibre : +28,69 → on répartit −28,69 : BA : −11,82 → **MBA = +44,43** ; BC : −16,87 → **MBC = −44,43**.
Moment sur l'appui B : **−44,4 kN·m** : identique au théorème des trois moments ✔.`},
  {t:"Poutre continue encastrée", d:3, e:`Poutre ABC : A encastré, B appui simple, C encastré. AB = BC = 6 m. Charges : 12 kN/m sur AB, 24 kN/m sur BC. EI constant.
Calculer les moments aux appuis par la méthode de Cross.`, c:`kBA = kBC = 4EI/6 → rBA = rBC = 0,5.
MEP : MAB = −12 × 36 / 12 = −36 ; MBA = +36 ; MBC = −24 × 36 / 12 = −72 ; MCB = +72.
Déséquilibre en B : 36 − 72 = −36 → on répartit +36 : BA +18, BC +18.
Transmission : MAB +9 ; MCB +9.
**MAB = −27 ; MBA = +54 ; MBC = −54 ; MCB = +81 kN·m.**
Moments d'appui : **MA = −27 ; MB = −54 ; MC = −81 kN·m**. L'encastrement C, à côté de la travée la plus chargée, reçoit le plus grand moment.`},
  {t:"Portique symétrique", d:3, e:`Portique encastré en pied, symétrique : poteaux de 3,5 m (I poteau = I), traverse de 7 m (I traverse = 2I), q = 20 kN/m sur la traverse.
1. Calculer les raideurs et les coefficients de répartition au nœud (utiliser la symétrie).
2. Calculer les moments au nœud, en pied de poteau et à mi-traverse.`, c:`1. Traverse (symétrie) : k = 2E(2I)/7 = 0,571 EI ; poteau : k = 4EI/3,5 = 1,143 EI. Σ = 1,714 EI.
**rtraverse = 0,333 ; rpoteau = 0,667.**
2. MEP traverse : −20 × 49 / 12 = **−81,67 kN·m**. On répartit +81,67 : traverse +27,2 → **−54,4** ; poteau **+54,4** ; transmission en pied **+27,2**.
**Nœud : 54,4 kN·m** ; **pied : 27,2 kN·m** ; **mi-traverse : 20 × 49 / 8 − 54,4 = 122,5 − 54,4 = 68,1 kN·m**.`}
 ],
 quiz:[
  {q:"La raideur d'une barre dont l'extrémité opposée est encastrée vaut :", o:["3EI/L","4EI/L","2EI/L","EI/L"], r:1, e:"4EI/L ; 3EI/L si l'autre bout est articulé."},
  {q:"Le coefficient de transmission vers une extrémité encastrée vaut :", o:["0","1/2","1","2"], r:1, e:"La moitié du moment réparti est transmise."},
  {q:"Les coefficients de répartition d'un nœud :", o:["Ont une somme égale à 1","Valent tous 0,5","Dépendent des charges","Sont toujours égaux"], r:0, e:"r = k / Σk."},
  {q:"Le MEP à droite d'une barre bi-encastrée sous charge uniforme vaut (convention de Cross) :", o:["−qL²/12","+qL²/12","+qL²/8","−qL²/8"], r:1, e:"Horaire positif : +qL²/12 à droite, −qL²/12 à gauche."},
  {q:"La méthode de Cross convient directement :", o:["Aux structures à nœuds fixes","Aux treillis","Aux mécanismes","Aux câbles"], r:0, e:"Pour les nœuds qui se déplacent, il faut une étape supplémentaire (translation)."}
 ]},

{id:"rdm-22", niv:3, titre:"Lignes d'influence et charges mobiles", duree:55, contenu:`## Des charges qui se déplacent
Sur un pont, une passerelle, une poutre de roulement de pont roulant ou un plancher de parking, les charges **se déplacent**. Pour chaque section, il faut trouver la **position la plus défavorable** des charges. L'outil adapté est la **ligne d'influence** (LI).

## Définition
La ligne d'influence d'un effet E (réaction, effort tranchant ou moment en une section donnée) est la courbe qui donne la **valeur de E** lorsqu'une **force unité** se trouve à l'abscisse x de la poutre. Attention à ne pas confondre :
- un **diagramme** de moment : valeur de M dans **toutes les sections** pour une position **fixe** des charges ;
- une **ligne d'influence** du moment : valeur de M dans **une section fixe** pour **toutes les positions** de la charge.

## Lignes d'influence d'une poutre sur deux appuis (portée L)
| Effet | Ligne d'influence (charge unité en x) |
|---|---|
| Réaction RA | (L − x) / L : droite de 1 (en A) à 0 (en B) |
| Réaction RB | x / L : droite de 0 à 1 |
| Moment en la section S (abscisse a, b = L − a) | triangle de sommet a b / L au droit de S |
| Effort tranchant en S | −x/L pour x < a ; (L − x)/L pour x > a (saut de 1 en S) |

## Utiliser une ligne d'influence
- Pour des forces ponctuelles Pi placées aux abscisses xi : **E = Σ Pi × η(xi)** (η : ordonnée de la LI) ;
- pour une charge répartie q sur une zone : **E = q × (aire de la LI sous la zone chargée)** ;
- pour obtenir l'effet **maximal**, on charge uniquement les zones où la LI est de même signe, et on place les plus grosses charges sur les plus grandes ordonnées.

> [!exemple] Camion à deux essieux sur une poutre de 10 m
> Essieu avant 60 kN, essieu arrière 120 kN, distants de 4 m. LI du moment à mi-portée : triangle de sommet 10 × 10 / (4 × 10) = **2,5** (en m), η(x) = x/2 pour x ≤ 5 m.
> Essieu de 120 kN au milieu, essieu de 60 kN à 1 m de A : M = 120 × 2,5 + 60 × 0,5 = **330 kN·m**.
> Essieu de 60 kN au milieu, 120 kN à 1 m : M = 60 × 2,5 + 120 × 0,5 = 210 kN·m. La première position est la plus défavorable.

## Le moment maximal absolu : théorème de Barré
Pour un convoi de charges, le moment maximal **absolu** (dans toute la poutre) se produit **sous une des charges** (en général la plus lourde, proche de la résultante), lorsque le **milieu de la poutre** se trouve **à égale distance** de cette charge et de la résultante du convoi.

> [!exemple] Suite : moment maximal absolu
> Résultante : R = 180 kN, située à 60 × 4 / 180 = 1,333 m de l'essieu de 120 kN (vers l'essieu de 60 kN).
> On place le milieu de la poutre entre les deux, à 0,667 m de chacun : l'essieu de 120 kN est à 5,667 m de A, la résultante à 4,333 m de A.
> RB = 180 × 4,333 / 10 = 78,0 kN ; M sous l'essieu = 78,0 × (10 − 5,667) = **338 kN·m** (un peu plus que les 330 kN·m obtenus à mi-portée).

## Effort tranchant maximal
L'effort tranchant est maximal près de l'appui : on place la charge la plus lourde **juste à côté de l'appui**, et les autres sur la travée.

## Applications courantes
- **Ponts et dalots** : les règlements définissent des convois types (camions, charges réparties) à placer de façon défavorable ;
- **Poutres de roulement** de ponts roulants : deux galets distants de l'empattement du pont ;
- **Planchers de parkings** et quais de chargement ;
- **Poutres continues** : les lignes d'influence expliquent la règle « charger une travée sur deux ».

> [!retenir]
> - LI = valeur d'un effet en une section fixe quand une charge unité se déplace.
> - E = Σ P η + q × aire.
> - LI de M à mi-portée : triangle de sommet L/4 ; en S : sommet ab/L.
> - Barré : milieu de la poutre à égale distance de la charge et de la résultante.`,
 exercices:[
  {t:"Lignes d'influence des réactions", d:1, e:`Poutre de 8 m sur deux appuis. Une charge de 50 kN se déplace. Calculer RA et RB quand la charge est à 2 m, à 4 m et à 7 m de A.`, c:`RA = 50 (8 − x) / 8 ; RB = 50 x / 8.
- x = 2 m : **RA = 37,5 kN ; RB = 12,5 kN**.
- x = 4 m : **RA = RB = 25 kN**.
- x = 7 m : **RA = 6,25 kN ; RB = 43,75 kN**.
L'effort sur un appui est maximal quand la charge est sur cet appui.`},
  {t:"Moment maximal sous une charge mobile", d:1, e:`Une charge mobile P = 80 kN circule sur une poutre de 6 m. Où la placer pour avoir le moment maximal en x = 2 m ? Calculer ce moment.`, c:`LI du moment en S (a = 2 m, b = 4 m) : triangle de sommet a b / L = 2 × 4 / 6 = **1,333 m**, au droit de S.
On place la charge **en S** : **M = 80 × 1,333 = 106,7 kN·m** (= P a b / L).`},
  {t:"Effort tranchant maximal sous charge répartie mobile", d:2, e:`Une charge répartie mobile q = 10 kN/m, de longueur quelconque, circule sur une poutre de 10 m. Calculer l'effort tranchant maximal positif dans la section située à 3 m de A.`, c:`LI de V en S (a = 3 m) : partie négative −x/10 pour x < 3 ; partie positive (10 − x)/10 pour x > 3, de 0,7 (en S) à 0 (en B).
Pour le maximum positif, on charge **seulement de S à B** : aire = 0,7 × 7 / 2 = 2,45 m.
**Vmax = 10 × 2,45 = 24,5 kN.** (Si on chargeait toute la poutre, V en S ne vaudrait que 50 − 30 = 20 kN : la partie entre A et S réduit V.)`},
  {t:"Pont roulant sur une poutre de roulement", d:3, e:`Les deux galets d'un pont roulant, distants de 3 m, appliquent chacun 90 kN sur une poutre de roulement de 8 m (sur deux appuis).
1. Calculer le moment à mi-portée quand un galet est au milieu.
2. Calculer le moment maximal absolu par le théorème de Barré.`, c:`1. LI de M à mi-portée : sommet 2 m ; η(x) = x/2 pour x ≤ 4. Galet au milieu (η = 2), l'autre à 1 m de A (η = 0,5) : **M = 90 × 2 + 90 × 0,5 = 225 kN·m**.
2. Résultante 180 kN au milieu des deux galets (à 1,5 m de chacun). On place le milieu de la poutre à 0,75 m d'un galet et de la résultante : galet à 4,75 m de A, résultante à 4,0 − 0,75 = 3,25 m de A.
RB = 180 × 3,25 / 8 = 73,1 kN ; M sous le galet = 73,1 × (8 − 4,75) = **237,7 kN·m** (5 % de plus qu'avec le galet au milieu).`},
  {t:"Charger une travée sur deux", d:2, e:`Expliquer, à l'aide de la forme de la ligne d'influence du moment au milieu de la première travée d'une poutre continue à trois travées, pourquoi on charge les travées 1 et 3 (et pas la 2) pour obtenir le moment maximal dans la travée 1.`, c:`Dans une poutre continue, la ligne d'influence du moment au milieu de la travée 1 est **positive** dans la travée 1, **négative** dans la travée 2 (une charge sur la travée 2 fait tourner l'appui et soulève la travée 1) et de nouveau **positive**, mais faible, dans la travée 3.
Pour maximiser le moment positif, on charge donc les zones où la LI est positive (**travées 1 et 3**) et on laisse vide la travée 2. C'est la justification de la règle « une travée sur deux » utilisée pour les charges d'exploitation.`}
 ],
 quiz:[
  {q:"Une ligne d'influence donne :", o:["Le moment dans toutes les sections pour une charge fixe","La valeur d'un effet dans une section fixe pour une charge unité mobile","La flèche maximale","Les réactions sous le poids propre"], r:1, e:"Ne pas confondre avec un diagramme."},
  {q:"La LI du moment à mi-portée d'une poutre de portée L a pour sommet :", o:["L/2","L/4","L/8","1"], r:1, e:"a b / L = (L/2)(L/2)/L = L/4."},
  {q:"L'effet d'une charge répartie q se calcule avec :", o:["q × la plus grande ordonnée","q × l'aire de la LI sous la zone chargée","q × L","q / aire"], r:1, e:"Intégration des effets élémentaires."},
  {q:"Selon Barré, le moment maximal absolu se produit :", o:["Toujours à mi-portée","Sous une charge, quand le milieu est à égale distance de cette charge et de la résultante","Sur un appui","Sous la résultante"], r:1, e:"La position optimale est légèrement décalée du milieu."},
  {q:"Pour l'effort tranchant maximal près de l'appui A, on place la plus grosse charge :", o:["Au milieu","Près de l'appui B","Juste à côté de l'appui A","N'importe où"], r:2, e:"La LI de V a son ordonnée maximale près de l'appui."}
 ]}
]});
