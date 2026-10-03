/* =====================================================================
   Mécanique des milieux continus — cours complet (3 niveaux)
   Débutant : hypothèses du milieu continu, traction simple, essais sur
              matériaux, cisaillement simple, efforts intérieurs
   Intermédiaire : tenseur des contraintes, déformations, loi de Hooke
              généralisée, contraintes dans les poutres, torsion et
              sollicitations composées
   Avancé : cercle de Mohr, critères de résistance, contraintes dans les
            sols, méthodes énergétiques, plasticité et rupture, éléments
            finis
   ===================================================================== */
A.addMatiere({
 id:"mmc",
 titre:"Mécanique des milieux continus",
 court:"MMC",
 groupe:"struct",
 icone:"cube",
 couleur:"#5B6B7F",
 niveau:"Avancé",
 heures:55,
 ordre:1,
 prerequis:["om", "sp"],
 resume:"Les bases théoriques communes à la RDM, au béton armé, à la construction métallique et à la géotechnique : contraintes et déformations, essais des matériaux, loi de Hooke, contraintes dans les poutres, torsion, cercle de Mohr, critères de résistance, contraintes effectives dans les sols, énergie de déformation, plasticité, rupture et éléments finis.",
 objectifs:[
  "Comprendre les hypothèses du milieu continu et de l'élasticité",
  "Calculer contraintes et déformations en traction, compression et cisaillement",
  "Interpréter un essai de traction ou de compression",
  "Décrire l'état de contrainte en un point et ses contraintes principales",
  "Relier contraintes et déformations par la loi de Hooke généralisée",
  "Calculer les contraintes de flexion, de cisaillement et de torsion dans une poutre",
  "Appliquer les critères de Tresca, von Mises et Mohr-Coulomb",
  "Utiliser l'énergie de déformation et lire un calcul aux éléments finis"
 ],
 applications:[
  "Justification des formules de RDM et de béton armé",
  "Vérification d'une pièce métallique sous efforts combinés",
  "Résistance des sols et des fondations (Mohr-Coulomb)",
  "Appareils d'appui, assemblages boulonnés, jauges de déformation",
  "Contrôle des résultats d'un logiciel aux éléments finis"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"mmc-1", niv:1, titre:"Hypothèses et notion de milieu continu", duree:40, contenu:`## Le milieu continu
La matière est en réalité faite d'atomes, de grains, de cristaux et de vides. À l'échelle d'une poutre, d'un mur ou d'une couche de sol, on la modélise comme un **milieu continu** : les grandeurs (déplacements, contraintes, déformations) varient de façon **continue** d'un point à l'autre. C'est possible parce que les dimensions des ouvrages sont très grandes devant celles des grains (un granulat de 2 cm dans une poutre de 50 cm, un grain de sable dans une fondation de 2 m).

## Les hypothèses usuelles
| Hypothèse | Signification | Limites |
|---|---|---|
| **Continuité** | Pas de vide ni de fissure à l'échelle étudiée | Béton fissuré, sols très hétérogènes |
| **Homogénéité** | Mêmes propriétés en tout point | Béton armé (acier + béton) : on homogénéise |
| **Isotropie** | Mêmes propriétés dans toutes les directions | Le bois (fibres), les sols stratifiés, les maçonneries sont anisotropes |
| **Petites déformations** | Les déformations restent très faibles (moins de 0,1 à 1 %) | Câbles, membranes, grandes flèches |
| **Élasticité linéaire** | Contraintes proportionnelles aux déformations, retour à l'état initial | Plastification de l'acier, fissuration, fluage du béton |

## Deux principes fondamentaux
**Principe de superposition** : en élasticité linéaire et petites déformations, l'effet de plusieurs charges est la **somme** des effets de chaque charge prise séparément. On calcule séparément le poids propre, les charges d'exploitation, le vent, puis on additionne (ou on combine avec des coefficients).

**Principe de Saint-Venant** : loin des points d'application des charges (à une distance de l'ordre de la plus grande dimension de la section), les contraintes ne dépendent que des **efforts résultants**, pas de la façon dont la charge est appliquée. C'est ce qui permet d'utiliser les formules de la RDM loin des appuis et des charges concentrées ; près d'eux, il faut des calculs ou des dispositions particulières (frettage sous les appuis, renforts).

## Du matériau à la structure
La MMC fournit les outils qui fondent :
- la **RDM** (poutres) : contraintes de flexion, de cisaillement, flèches ;
- le **béton armé** : comportement du béton et de l'acier, critères de rupture ;
- la **géotechnique** : contraintes dans les sols, rupture selon Mohr-Coulomb ;
- les **logiciels aux éléments finis**, qui résolvent numériquement les équations du milieu continu.

> [!retenir]
> - Milieu continu : grandeurs continues, dimensions grandes devant les grains.
> - Hypothèses : continuité, homogénéité, isotropie, petites déformations, élasticité linéaire.
> - Superposition des effets ; Saint-Venant : loin des charges, seuls comptent les efforts résultants.`,
 exercices:[
  {t:"Identifier les hypothèses", d:1, e:`Pour chaque matériau, dire quelle hypothèse est la moins bien vérifiée : a) le bois ; b) un béton armé fissuré ; c) un sol fait de couches d'argile et de sable ; d) un câble de précontrainte très tendu.`, c:`a) **Isotropie** (propriétés différentes le long et en travers des fibres).
b) **Continuité** et **homogénéité** (fissures, deux matériaux).
c) **Homogénéité** et **isotropie** (couches différentes).
d) L'**élasticité linéaire** reste valable, mais l'acier peut approcher sa limite ; pour un câble lâche, l'hypothèse des **petites déformations** (géométrie) ne tient plus.`},
  {t:"Superposition", d:1, e:`Une poutre subit une flèche de 6 mm sous son poids propre et de 4 mm sous les charges d'exploitation. Quelle est la flèche totale ? Sous quelles hypothèses ce calcul est-il valable ?`, c:`f = 6 + 4 = **10 mm** (superposition).
Valable si le comportement reste **élastique linéaire** et les **déformations petites** (pas de fissuration importante ni de plastification qui modifieraient la raideur).`},
  {t:"Échelle du milieu continu", d:1, e:`Pourquoi peut-on traiter le béton comme un milieu continu pour calculer une poutre de 30 × 60 cm, mais pas pour étudier ce qui se passe autour d'un granulat de 20 mm ?`, c:`Pour la poutre, les dimensions (30 à 60 cm) sont grandes devant les granulats (2 cm) : on raisonne sur un volume moyen. Autour d'un granulat, l'échelle d'étude est celle des hétérogénéités (pâte, granulat, interface) : il faut un modèle **à l'échelle des constituants**.`},
  {t:"Principe de Saint-Venant", d:2, e:`Un poteau de 30 × 30 cm reçoit une charge concentrée par une platine de 10 × 10 cm en tête. À partir de quelle distance de la tête peut-on considérer la contrainte uniforme sur la section ? Que faire dans la zone supérieure ?`, c:`D'après Saint-Venant, à une distance de l'ordre de la **plus grande dimension de la section**, soit environ **30 cm** sous la tête, la contrainte devient uniforme (σ = N/A).
Dans la zone supérieure, la charge se diffuse : il y a des contraintes de traction transversales (« éclatement ») : on dispose un **frettage** (cadres rapprochés) sous l'appui.`},
  {t:"Limite de l'élasticité", d:2, e:`Un tirant en acier est chargé jusqu'à 80 % de sa limite élastique, puis déchargé. Il revient à sa longueur initiale. Chargé ensuite à 120 % de la limite élastique et déchargé, il reste allongé. Expliquer avec les hypothèses du cours.`, c:`Sous la limite élastique, le comportement est **élastique** : la déformation disparaît au déchargement.
Au-delà, l'acier se **plastifie** : une partie de la déformation est **permanente**. L'hypothèse d'élasticité linéaire n'est plus valable ; la superposition non plus.`}
 ],
 quiz:[
  {q:"Un matériau isotrope a :", o:["Les mêmes propriétés dans toutes les directions","Les mêmes propriétés en tout point","Aucune déformation","Des fibres"], r:0, e:"Le bois n'est pas isotrope."},
  {q:"Le principe de superposition suppose :", o:["Élasticité linéaire et petites déformations","Des grandes déformations","La plasticité","L'anisotropie"], r:0, e:"Effets additifs."},
  {q:"Le principe de Saint-Venant dit que loin des charges :", o:["Seuls comptent les efforts résultants","La contrainte est nulle","Le matériau est plastique","Les déformations sont grandes"], r:0, e:"Base des formules de RDM."},
  {q:"Le béton armé est traité comme homogène :", o:["En homogénéisant acier et béton","Parce qu'il est isotrope","Jamais","Seulement sans armatures"], r:0, e:"Coefficient d'équivalence."},
  {q:"L'hypothèse des petites déformations signifie :", o:["Des déformations très faibles devant 1","Aucune déformation","Des déformations de 50 %","Des ruptures"], r:0, e:"On écrit l'équilibre sur la géométrie initiale."}
 ]},

{id:"mmc-6", niv:1, titre:"Forces, contraintes et déformations en traction simple", duree:45, contenu:`## La contrainte normale
Une barre de section A soumise à un effort normal N (traction ou compression) est sollicitée par une **contrainte normale** :
$$ σ = N / A     (MPa = N/mm²)
Par convention : σ > 0 en **traction**, σ < 0 en **compression** (en béton armé, on compte souvent la compression positive : attention aux conventions).

## La déformation
La barre de longueur L s'allonge (ou se raccourcit) de ΔL. La **déformation** (allongement relatif) est :
$$ ε = ΔL / L     (sans unité ; souvent exprimée en ‰ ou en µm/m)

## La loi de Hooke
Dans le domaine élastique, contrainte et déformation sont proportionnelles :
$$ σ = E × ε
E : **module d'élasticité** (module d'Young) :
| Matériau | E (MPa) |
|---|---|
| Acier | 200 000 à 210 000 |
| Aluminium | 70 000 |
| Béton | 30 000 à 35 000 (instantané) |
| Bois (le long des fibres) | 10 000 à 12 000 |
| Maçonnerie | 3 000 à 10 000 |
| Élastomère (néoprène) | 2 à 5 |

## L'effet Poisson
Une barre tendue s'allonge et devient **plus mince** ; comprimée, elle se raccourcit et **gonfle**. La déformation transversale vaut :
$$ ε(transversale) = − ν × ε(longitudinale)
ν : **coefficient de Poisson** : 0,3 pour l'acier ; 0,2 pour le béton ; 0,5 pour un matériau incompressible (caoutchouc, sol saturé non drainé).

> [!exemple] Tirant en acier Ø 20
> A = π × 20²/4 = 314 mm² ; N = 50 kN ; L = 3 m ; E = 210 000 MPa ; ν = 0,3.
> σ = 50 000/314 = **159 MPa** ; ε = 159/210 000 = **0,76 ‰** ; ΔL = 0,000 76 × 3 000 = **2,27 mm**.
> Variation du diamètre : Δd = − 0,3 × 0,000 76 × 20 = **− 0,005 mm** (imperceptible).

> [!exemple] Poteau en béton 25 × 25 cm
> N = 800 kN : σ = 800 000/62 500 = **12,8 MPa** (compression) ; ε = 12,8/30 000 = 0,43 ‰ ; sur 3 m : raccourcissement de **1,3 mm**.

## Rigidité d'une barre
L'allongement s'écrit aussi ΔL = N L/(E A) : la **rigidité axiale** EA/L est la « raideur de ressort » de la barre (voir le calcul matriciel des structures).

> [!retenir]
> - σ = N/A ; ε = ΔL/L ; σ = E ε ; ΔL = N L/(E A).
> - E : acier 210 000 MPa ; béton ≈ 30 000 MPa ; bois ≈ 11 000 MPa.
> - Effet Poisson : ε(trans) = − ν ε ; ν acier 0,3, béton 0,2.`,
 exercices:[
  {t:"Contrainte dans une suspente", d:1, e:`Une suspente en acier Ø 16 (A = 201 mm²) porte une charge de 30 kN. Calculer la contrainte.`, c:`σ = 30 000/201 = **149 MPa** (traction).`},
  {t:"Allongement d'un tirant", d:1, e:`Un tirant HA 25 (A = 491 mm²) de 6 m reprend 120 kN. Calculer σ, ε et ΔL (E = 200 000 MPa).`, c:`σ = 120 000/491 = **244 MPa** ; ε = 244/200 000 = **1,22 ‰** ; ΔL = 0,00122 × 6 000 = **7,3 mm**.`},
  {t:"Raccourcissement d'un poteau", d:2, e:`Un poteau en béton de 30 × 30 cm et 3,5 m de haut porte 1 200 kN. E = 32 000 MPa. Calculer la contrainte et le raccourcissement. Que devient ce raccourcissement à long terme (fluage : multiplier par 3) ?`, c:`σ = 1 200 000/90 000 = **13,3 MPa** ; ε = 13,3/32 000 = 0,42 ‰ ; ΔL = **1,46 mm** instantanément.
À long terme, le fluage triple environ la déformation : **≈ 4,4 mm**. Sur un immeuble de 15 niveaux, les raccourcissements cumulés deviennent importants (cloisons, façades, ascenseurs).`},
  {t:"Effet Poisson", d:2, e:`Une éprouvette de béton (ν = 0,2) de 16 cm de diamètre est comprimée avec un raccourcissement relatif de 1 ‰. De combien son diamètre augmente-t-il ?`, c:`ε(trans) = − ν × ε = − 0,2 × (− 0,001) = + 0,000 2 → Δd = 0,0002 × 160 = **0,032 mm** : le béton « gonfle » latéralement ; c'est en l'empêchant (frettage, cerces) qu'on augmente sa résistance.`},
  {t:"Section nécessaire", d:2, e:`Un tirant de charpente en acier doit reprendre 85 kN avec une contrainte d'au plus 160 MPa et un allongement d'au plus 3 mm sur 5 m (E = 210 000 MPa).
Quelle section minimale faut-il ? Proposer un diamètre de barre ronde.`, c:`Résistance : A ≥ 85 000/160 = **531 mm²**.
Allongement : ΔL = N L/(E A) ≤ 3 → A ≥ 85 000 × 5 000/(210 000 × 3) = **675 mm²**.
C'est la condition de **déformation** qui dimensionne : A ≥ 675 mm² → rond de **Ø 30** (707 mm²).`}
 ],
 quiz:[
  {q:"La contrainte normale vaut :", o:["N/A","N × A","A/N","N/L"], r:0, e:"En MPa = N/mm²."},
  {q:"Le module d'élasticité de l'acier :", o:["≈ 210 000 MPa","≈ 30 000 MPa","≈ 210 MPa","≈ 2 MPa"], r:0, e:"Sept fois celui du béton."},
  {q:"Une barre tendue :", o:["S'allonge et s'amincit","S'allonge et s'épaissit","Raccourcit","Ne change pas"], r:0, e:"Effet Poisson."},
  {q:"Coefficient de Poisson du béton :", o:["≈ 0,2","≈ 0,5","≈ 0,9","≈ 2"], r:0, e:"Acier : 0,3."},
  {q:"Allongement d'une barre :", o:["N L/(E A)","E A/N","N A/E","E/(N L)"], r:0, e:"Loi de Hooke intégrée."}
 ]},

{id:"mmc-7", niv:1, titre:"Comportement des matériaux : essais de traction et de compression", duree:45, contenu:`## L'essai de traction de l'acier
On tire sur une éprouvette jusqu'à la rupture en enregistrant la force et l'allongement : on obtient la courbe **contrainte-déformation**.

!fig:traction|Essai de traction : domaines élastique et plastique

1. **Domaine élastique** : droite de pente E ; la déformation disparaît si l'on décharge ;
2. **Limite d'élasticité** fe (ou fy) : au-delà, l'acier se **plastifie** (palier, puis écrouissage) ;
3. **Résistance à la traction** fu (ou Rm) : contrainte maximale ;
4. **Striction** puis **rupture** ; l'**allongement à la rupture** A % mesure la **ductilité**.

| Acier | fe ou fy (MPa) | fu (MPa) | Allongement |
|---|---|---|---|
| Armatures HA B500 | 500 | ≥ 540 | ≥ 5 % (classe B) |
| Acier de construction S235 | 235 | 360 | ≥ 26 % |
| Acier S355 | 355 | 470 | ≥ 22 % |
> [!exemple] Essai d'un HA 12
> A = 113 mm² ; limite élastique atteinte à 56,5 kN → fe = 56 500/113 = **500 MPa** ✓ ; force maximale 65 kN → fu = **575 MPa** ; rapport fu/fe = 1,15 ≥ 1,08 ✓ (ductilité suffisante).

## Ductile ou fragile ?
- Un matériau **ductile** (acier, aluminium) se déforme beaucoup avant de rompre : il **prévient** (grandes flèches, fissures visibles) et redistribue les efforts ;
- Un matériau **fragile** (béton non armé, fonte, verre, maçonnerie) rompt brutalement, sans grande déformation.
Le béton armé associe un matériau fragile et un matériau ductile : on le conçoit pour que l'**acier se plastifie avant que le béton ne s'écrase** (rupture ductile, « qui prévient »).

## Le comportement du béton
- **En compression** : courbe non linéaire ; résistance fc (sur cylindre à 28 jours : 20 à 40 MPa pour les bétons courants), déformation à la rupture ≈ 3,5 ‰ ;
- **En traction** : résistance faible, **ft ≈ 0,3 × fck^(2/3)** (≈ 2,6 MPa pour un C25/30), soit environ 10 % de fc : d'où les armatures ;
- **Fluage** (la déformation augmente sous charge constante) et **retrait** (raccourcissement en séchant) : le béton se déforme avec le temps.

## Le bois
Résistance et rigidité élevées **le long des fibres**, faibles **en travers** ; sensibilité à l'humidité et aux défauts (nœuds, fentes). Il est classé par résistance (classes C18 à C30 pour les résineux, D30 à D70 pour les feuillus).

> [!retenir]
> - Acier : élastique jusqu'à fe, puis plastique, fu, rupture ductile.
> - B500 : fe = 500 MPa ; S235 : fy = 235 MPa.
> - Béton : bon en compression, faible en traction (ft ≈ 0,3 fck^(2/3)) ; fluage et retrait.
> - Concevoir des ruptures ductiles.`,
 exercices:[
  {t:"Dépouiller un essai", d:1, e:`Une éprouvette d'acier de 10 mm de diamètre atteint sa limite élastique à 18,5 kN et sa force maximale à 28,3 kN. Calculer fy et fu. De quel acier s'agit-il probablement ?`, c:`A = 78,5 mm² → fy = 18 500/78,5 = **236 MPa** ; fu = 28 300/78,5 = **360 MPa** : acier **S235**.`},
  {t:"Allongement à la rupture", d:1, e:`Une éprouvette de 50 mm de longueur entre repères mesure 63 mm après rupture. Calculer l'allongement à la rupture. L'acier est-il ductile ?`, c:`A % = (63 − 50)/50 × 100 = **26 %** : acier **très ductile**.`},
  {t:"Résistance en traction du béton", d:2, e:`Calculer la résistance moyenne à la traction ft ≈ 0,3 × fck^(2/3) pour un C25/30 et un C40/50. Comparer à fck.`, c:`C25/30 : 0,3 × 25^(2/3) = 0,3 × 8,55 = **2,56 MPa** (≈ 10 % de 25).
C40/50 : 0,3 × 40^(2/3) = 0,3 × 11,70 = **3,51 MPa** (≈ 9 % de 40).
La traction du béton est faible et augmente moins vite que la compression.`},
  {t:"Module sécant du béton", d:2, e:`Lors d'un essai de compression sur cylindre, on mesure ε = 0,40 ‰ pour σ = 13 MPa. Calculer le module sécant. Est-il cohérent avec un béton courant ?`, c:`E = 13/0,0004 = **32 500 MPa** : valeur typique d'un béton C25/30 à C30/37.`},
  {t:"Ductilité d'une poutre en béton armé", d:3, e:`Expliquer pourquoi on limite la quantité d'armatures tendues d'une poutre en béton armé (pourcentage maximal) et pourquoi on impose aussi un pourcentage minimal.`, c:`**Maximum** : avec trop d'acier, le béton comprimé s'**écraserait avant** que l'acier ne se plastifie : rupture **fragile**, sans prévenir. On veut que l'acier atteigne fe d'abord (grandes déformations, fissures visibles).
**Minimum** : si l'acier est trop peu abondant, à la fissuration du béton tendu (dont la résistance est perdue d'un coup), l'acier ne pourrait pas reprendre l'effort : rupture **brutale** dès la première fissure. Le minimum garantit que l'acier reprend au moins la force que portait le béton tendu.`}
 ],
 quiz:[
  {q:"La limite élastique est :", o:["La contrainte au-delà de laquelle des déformations permanentes apparaissent","La contrainte de rupture","Le module d'Young","La déformation maximale"], r:0, e:"Fin du domaine élastique."},
  {q:"Un matériau ductile :", o:["Se déforme beaucoup avant de rompre","Rompt brutalement","N'a pas de domaine élastique","Est toujours fragile"], r:0, e:"Il prévient."},
  {q:"Limite élastique des armatures B500 :", o:["500 MPa","235 MPa","25 MPa","5 000 MPa"], r:0, e:"Haute adhérence."},
  {q:"La résistance du béton en traction est environ :", o:["10 % de sa résistance en compression","Égale à sa compression","Le double","Nulle"], r:0, e:"D'où les armatures."},
  {q:"Le fluage du béton est :", o:["L'augmentation de la déformation sous charge constante","Le retrait au séchage","La rupture","La prise"], r:0, e:"Effet du temps."}
 ]},

{id:"mmc-10", niv:1, titre:"Cisaillement simple et contraintes tangentielles", duree:40, contenu:`## La contrainte tangentielle
Quand deux parties d'une pièce tendent à **glisser** l'une par rapport à l'autre (boulon, rivet, clou, goujon, joint collé), la section est sollicitée par une **contrainte tangentielle** (de cisaillement) :
$$ τ = V / A     (MPa)
V : effort tranchant dans la section cisaillée ; A : aire de cette section (calcul en contrainte moyenne).

## Simple et double cisaillement
- **Simple cisaillement** : le boulon traverse deux plaques : une seule section est cisaillée ;
- **Double cisaillement** : il traverse trois plaques (une chape) : **deux sections** reprennent l'effort, chaque section porte V/2.
> [!exemple] Boulon M16 (section de la tige 201 mm² ; section résistante filetée 157 mm²)
> Effort de 30 kN en simple cisaillement : τ = 30 000/201 = **149 MPa** dans la tige, ou 30 000/157 = **191 MPa** si le plan de cisaillement passe dans le filetage.
> En double cisaillement : τ = 15 000/201 = **75 MPa**.

## La déformation de cisaillement
Le cisaillement déforme un petit carré de matière en losange : l'angle droit varie de γ (radians), la **distorsion**. Dans le domaine élastique :
$$ τ = G × γ      ;      G = E / (2 (1 + ν))
G : **module de cisaillement** (acier : 210 000/2,6 ≈ **81 000 MPa** ; néoprène : ≈ 0,9 MPa).

> [!exemple] Appareil d'appui en élastomère fretté
> Sous une poutre de pont ou une poutre précontrainte, un appui en néoprène de 300 × 400 mm et 40 mm d'épaisseur d'élastomère subit un déplacement horizontal de 10 mm (dilatation, freinage).
> γ = 10/40 = **0,25** ; τ = 0,9 × 0,25 = **0,225 MPa** ; force horizontale transmise : 0,225 × 120 000 = **27 kN**.
> La souplesse en cisaillement du néoprène permet à la poutre de se dilater sans pousser violemment sur les appuis.

## Le cisaillement dans les ouvrages
- **Assemblages** : boulons, rivets, soudures (cordons sollicités au cisaillement), connecteurs des planchers mixtes ;
- **Poinçonnement** : une charge concentrée (poteau sur dalle, pieu sous semelle) tend à découper un « cône » de béton : vérification au cisaillement sur un contour autour de la charge ;
- **Effort tranchant** des poutres : les contraintes tangentielles dans l'âme sont reprises par le béton et les **cadres** (voir chapitre Contraintes dans les poutres).

> [!retenir]
> - τ = V/A ; double cisaillement : chaque section porte V/2.
> - τ = G γ ; G = E/(2(1 + ν)) ; acier G ≈ 81 000 MPa.
> - Appuis en néoprène : grande souplesse en cisaillement.
> - Assemblages, poinçonnement, effort tranchant des poutres.`,
 exercices:[
  {t:"Cisaillement d'un boulon", d:1, e:`Un boulon M20 (section de tige 314 mm²) transmet 45 kN en simple cisaillement. Calculer τ. Et si l'assemblage est en double cisaillement ?`, c:`Simple : τ = 45 000/314 = **143 MPa** ; double : τ = 22 500/314 = **72 MPa**.`},
  {t:"Nombre de boulons", d:2, e:`Un assemblage doit transmettre 120 kN. Chaque boulon M16 (section résistante 157 mm²) peut supporter une contrainte de cisaillement de 150 MPa. Combien de boulons faut-il en simple cisaillement ? En double cisaillement ?`, c:`Capacité d'une section : 150 × 157 = **23,6 kN**.
Simple : 120/23,6 = 5,1 → **6 boulons** ; double (2 sections par boulon : 47,1 kN) : 120/47,1 = 2,5 → **3 boulons**.`},
  {t:"Module de cisaillement", d:1, e:`Calculer G pour un béton (E = 32 000 MPa ; ν = 0,2) et pour l'aluminium (E = 70 000 MPa ; ν = 0,33).`, c:`Béton : G = 32 000/(2 × 1,2) = **13 300 MPa** ; aluminium : G = 70 000/(2 × 1,33) = **26 300 MPa**.`},
  {t:"Appui en néoprène", d:2, e:`Un appui en néoprène (G = 0,9 MPa) de 250 × 350 mm et 30 mm d'élastomère doit reprendre un déplacement de 12 mm. Calculer γ, τ et l'effort horizontal transmis. On limite en général γ à 0,7 : est-ce vérifié ?`, c:`γ = 12/30 = **0,40** ≤ 0,7 ✓ ; τ = 0,9 × 0,40 = **0,36 MPa** ; H = 0,36 × 87 500 = **31,5 kN**.`},
  {t:"Collage d'un renfort", d:3, e:`On renforce une poutre en collant une plaque d'acier sous sa face inférieure. La colle résiste à 2 MPa en cisaillement. La plaque doit transmettre une force de 90 kN à la poutre ; elle a 100 mm de large.
Quelle longueur d'ancrage (de collage) faut-il au minimum à chaque extrémité, avec un coefficient de sécurité de 2 ?`, c:`Contrainte admissible : 2/2 = **1 MPa**. Surface collée nécessaire : 90 000/1 = **90 000 mm²** → longueur = 90 000/100 = **900 mm** à chaque extrémité (en réalité, les contraintes se concentrent aux extrémités : on suit les règles des fabricants).`}
 ],
 quiz:[
  {q:"Contrainte de cisaillement moyenne :", o:["τ = V/A","τ = N/A","τ = M/W","τ = E γ"], r:0, e:"V : effort tranchant."},
  {q:"En double cisaillement, chaque section reprend :", o:["La moitié de l'effort","Tout l'effort","Le double","Rien"], r:0, e:"Deux sections cisaillées."},
  {q:"Module de cisaillement :", o:["G = E/(2(1 + ν))","G = E ν","G = 2E","G = E/ν"], r:0, e:"Matériau isotrope."},
  {q:"La distorsion γ s'exprime en :", o:["Radians","Mètres","MPa","Newtons"], r:0, e:"Variation d'angle."},
  {q:"Les appuis en néoprène :", o:["Sont très souples en cisaillement","Sont très rigides","Sont en acier","N'existent pas"], r:0, e:"G ≈ 0,9 MPa."}
 ]},

{id:"mmc-11", niv:1, titre:"Efforts intérieurs : coupure et torseur de cohésion", duree:40, contenu:`## La méthode des coupures
Pour connaître les efforts qui « traversent » une pièce, on la **coupe** fictivement en une section et on isole une des deux parties. Pour qu'elle reste en équilibre, la partie supprimée exerce sur elle des **efforts intérieurs** (ou **efforts de cohésion**).

## Les composantes du torseur de cohésion
Dans le plan d'une poutre (axe x le long de la poutre) :
| Composante | Symbole | Effet | Contraintes associées |
|---|---|---|---|
| Effort normal | N | Traction ou compression | σ uniformes |
| Effort tranchant | V (ou T) | Glissement des sections | τ |
| Moment fléchissant | M | Flexion (courbure) | σ variables sur la hauteur |
En trois dimensions, on ajoute un second effort tranchant, un second moment fléchissant et le **moment de torsion** T (τ).

## Calculer les efforts intérieurs
On écrit l'équilibre de la partie isolée : la somme des forces et des moments (extérieurs + efforts intérieurs) est nulle.
> [!exemple] Console de 2 m, encastrée à gauche
> Charge répartie q = 5 kN/m et force P = 10 kN à l'extrémité libre. Section à la distance x de l'encastrement ; on isole la partie de droite (longueur 2 − x).
> V(x) = q (2 − x) + P = 5 (2 − x) + 10 ;
> M(x) = − [q (2 − x)²/2 + P (2 − x)] (moment négatif : fibres supérieures tendues).
> À l'encastrement (x = 0) : V = **20 kN** ; M = − (5 × 4/2 + 10 × 2) = **− 30 kN·m**.
> À x = 1 m : V = 15 kN ; M = − (2,5 + 10) = − 12,5 kN·m.

## Des efforts aux contraintes
Les efforts intérieurs sont les **résultantes** des contraintes sur la section :
- N = ∫ σ dA ;
- M = ∫ σ × y dA (y : distance à l'axe neutre) ;
- V = ∫ τ dA.
La RDM fournit les relations inverses : σ = N/A + M y/I ; τ = V S/(I b) (voir niveau intermédiaire).

## Les relations différentielles
Le long d'une poutre chargée par q(x) : **dV/dx = − q** et **dM/dx = V** (selon les conventions). Le moment est maximal là où l'effort tranchant s'annule.

> [!retenir]
> - Couper, isoler, écrire l'équilibre : efforts intérieurs N, V, M (et T en 3D).
> - Ce sont les résultantes des contraintes sur la section.
> - dM/dx = V : M maximal où V s'annule.`,
 exercices:[
  {t:"Efforts dans une console", d:1, e:`Une console de 1,5 m porte une charge de 12 kN à son extrémité (poids propre négligé). Calculer V et M à l'encastrement et au milieu.`, c:`Encastrement : V = **12 kN** ; M = − 12 × 1,5 = **− 18 kN·m**.
Milieu : V = **12 kN** ; M = − 12 × 0,75 = **− 9 kN·m**.`},
  {t:"Poutre sur deux appuis", d:1, e:`Une poutre de 6 m sur deux appuis porte q = 10 kN/m. Calculer les réactions, puis V et M à 1,5 m de l'appui gauche et au milieu.`, c:`Réactions : 10 × 6/2 = **30 kN** chacune.
À x = 1,5 m : V = 30 − 15 = **15 kN** ; M = 30 × 1,5 − 10 × 1,5²/2 = 45 − 11,25 = **33,75 kN·m**.
Milieu (x = 3) : V = **0** ; M = 30 × 3 − 10 × 9/2 = **45 kN·m** = qL²/8 (maximum, là où V = 0).`},
  {t:"Effort normal dans un poteau", d:1, e:`Un poteau de 3 m porte en tête 400 kN ; son poids propre est de 4,7 kN/m. Calculer l'effort normal en tête et en pied.`, c:`Tête : N = **400 kN** ; pied : N = 400 + 4,7 × 3 = **414,1 kN** (compression).`},
  {t:"Console avec charge répartie et ponctuelle", d:2, e:`Reprendre l'exemple du cours (q = 5 kN/m ; P = 10 kN ; L = 2 m) et calculer V et M à x = 1,5 m. Tracer l'allure des diagrammes.`, c:`Partie de droite : 0,5 m.
V = 5 × 0,5 + 10 = **12,5 kN** ; M = − (5 × 0,5²/2 + 10 × 0,5) = − (0,625 + 5) = **− 5,6 kN·m**.
V décroît linéairement de 20 kN (encastrement) à 10 kN (extrémité) ; M varie de façon parabolique de − 30 kN·m à 0.`},
  {t:"Arc ou portique : efforts combinés", d:3, e:`Un poteau de portique, encastré en pied, reçoit en tête une charge verticale de 200 kN et une force horizontale de 15 kN (vent). Sa hauteur est de 4 m. Calculer N, V et M en pied. Quelles contraintes ces efforts provoquent-ils ?`, c:`N = **200 kN** (compression) ; V = **15 kN** ; M = 15 × 4 = **60 kN·m** (en pied).
N produit une compression uniforme ; M une flexion (compression d'un côté, traction ou moindre compression de l'autre) ; V des contraintes tangentielles. Le poteau est en **flexion composée** (voir niveau intermédiaire).`}
 ],
 quiz:[
  {q:"Les efforts intérieurs d'une poutre plane sont :", o:["N, V, M","σ, τ, ε","E, ν, G","q, P, L"], r:0, e:"Torseur de cohésion."},
  {q:"Le moment fléchissant est maximal là où :", o:["L'effort tranchant s'annule","L'effort normal est maximal","La charge est nulle","Les appuis sont"], r:0, e:"dM/dx = V."},
  {q:"Moment à l'encastrement d'une console de longueur L chargée par P en bout :", o:["P L","P L/2","P/L","P L²"], r:0, e:"Bras de levier L."},
  {q:"Moment maximal d'une poutre sur deux appuis sous charge uniforme :", o:["q L²/8","q L/2","q L²/2","q L"], r:0, e:"Au milieu."},
  {q:"Les efforts intérieurs sont :", o:["Les résultantes des contraintes sur la section","Des charges extérieures","Des déformations","Des modules"], r:0, e:"N = ∫ σ dA…"}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"mmc-2", niv:2, titre:"L'état de contrainte en un point : vecteur et tenseur des contraintes", duree:50, contenu:`## Le vecteur contrainte
Coupons un solide par une facette de normale **n** passant par un point M. La partie enlevée exerce sur la facette une force par unité de surface : le **vecteur contrainte** T(M, n). Il se décompose en :
- une **contrainte normale** σ (perpendiculaire à la facette : traction si σ > 0) ;
- une **contrainte tangentielle** τ (dans le plan de la facette : glissement).
Le vecteur contrainte **dépend de l'orientation** de la facette : en un même point, une facette verticale et une facette inclinée ne portent pas les mêmes contraintes.

## Le tenseur des contraintes
L'état de contrainte en un point est entièrement décrit par les contraintes sur trois facettes perpendiculaires, rangées dans le **tenseur des contraintes** (matrice symétrique 3 × 3) :
$$ [σ] = ( σx  τxy  τxz ; τxy  σy  τyz ; τxz  τyz  σz )
**Réciprocité des contraintes tangentielles** : τxy = τyx (équilibre en moment d'un petit cube) : les contraintes tangentielles sur deux facettes perpendiculaires sont égales.

## Le cas plan
Dans de nombreux cas (plaques minces, voiles, âmes de poutres), on travaille en **contraintes planes** : seules σx, σy et τxy sont non nulles. Sur une facette dont la normale fait un angle θ avec l'axe x :
$$ σn = (σx + σy)/2 + (σx − σy)/2 × cos 2θ + τxy × sin 2θ
$$ τn = − (σx − σy)/2 × sin 2θ + τxy × cos 2θ
> [!exemple] État de contrainte σx = 80 MPa ; σy = − 20 MPa ; τxy = 30 MPa
> Facette inclinée de θ = 30° : σn = 30 + 50 × 0,5 + 30 × 0,866 = **81,0 MPa** ; τn = − 50 × 0,866 + 30 × 0,5 = **− 28,3 MPa**.

## L'équilibre local
Les contraintes varient d'un point à l'autre ; l'équilibre d'un petit élément donne les **équations d'équilibre** (par exemple ∂σx/∂x + ∂τxy/∂y + fx = 0, f : forces de volume comme le poids). Ce sont elles que résolvent les logiciels aux éléments finis.

## Pourquoi c'est utile
- Une poutre en béton se fissure **en biais** près des appuis : la traction maximale n'agit pas sur les sections droites mais sur des facettes inclinées ;
- Un sol cède le long de surfaces inclinées où τ dépasse la résistance au cisaillement ;
- Une soudure d'angle travaille sur un plan à 45° : on y calcule σ et τ.

> [!retenir]
> - Vecteur contrainte sur une facette : σ (normale) et τ (tangentielle) ; il dépend de la facette.
> - Tenseur symétrique : τxy = τyx.
> - Contraintes planes : formules de changement de facette en 2θ.
> - Les ruptures se produisent souvent sur des facettes inclinées.`,
 exercices:[
  {t:"Facette à 45° en traction simple", d:1, e:`Une barre est tendue à σx = 100 MPa (σy = τxy = 0). Calculer σn et τn sur une facette inclinée de 45°.`, c:`σn = 50 + 50 × cos 90° + 0 = **50 MPa** ; τn = − 50 × sin 90° = **− 50 MPa** (en valeur absolue 50 MPa).
En traction simple, le cisaillement est maximal à 45° et vaut σ/2 : c'est pourquoi les métaux ductiles glissent selon des plans à 45°.`},
  {t:"Facette quelconque", d:2, e:`État plan : σx = 50 MPa ; σy = − 30 MPa ; τxy = 20 MPa. Calculer σn et τn sur une facette inclinée de 60°.`, c:`(σx + σy)/2 = 10 ; (σx − σy)/2 = 40 ; 2θ = 120° (cos = − 0,5 ; sin = 0,866).
σn = 10 + 40 × (− 0,5) + 20 × 0,866 = **7,3 MPa** ; τn = − 40 × 0,866 + 20 × (− 0,5) = **− 44,6 MPa**.`},
  {t:"Compression d'un cylindre de béton", d:1, e:`Un cylindre de béton est comprimé à σx = − 12 MPa. Calculer les contraintes sur une facette inclinée de 30°.`, c:`(σx + σy)/2 = − 6 ; (σx − σy)/2 = − 6 ; 2θ = 60°.
σn = − 6 − 6 × 0,5 = **− 9 MPa** ; τn = 6 × 0,866 = **5,2 MPa** : même en compression pure, des facettes inclinées sont cisaillées (rupture « en cône » des éprouvettes).`},
  {t:"Réciprocité", d:1, e:`Sur la facette verticale d'un petit élément de l'âme d'une poutre, on mesure τ = 1,5 MPa vers le bas. Que vaut la contrainte tangentielle sur la facette horizontale ?`, c:`Par réciprocité, **τ = 1,5 MPa** sur la facette horizontale (avec le sens qui assure l'équilibre en rotation du petit élément) : il existe donc un cisaillement **horizontal** dans l'âme, que reprennent les connecteurs d'une poutre mixte ou les étriers d'une poutre en béton.`},
  {t:"Fissures inclinées près d'un appui", d:3, e:`Près de l'appui d'une poutre en béton, sur l'axe neutre, on a σx = 0 et τxy = 1,2 MPa. Calculer σn sur les facettes à + 45° et − 45°. En déduire l'orientation des fissures d'effort tranchant.`, c:`θ = + 45° : σn = 0 + 0 + 1,2 × sin 90° = **+ 1,2 MPa** (traction) ; θ = − 45° : σn = **− 1,2 MPa** (compression).
La traction maximale agit sur la facette à 45° : la fissure se forme **perpendiculairement** à cette traction, donc **inclinée à 45°** vers l'appui. Les **cadres** (et éventuellement les barres relevées) cousent ces fissures.`}
 ],
 quiz:[
  {q:"Le vecteur contrainte sur une facette se décompose en :", o:["σ normale et τ tangentielle","N et M","E et ν","x et y"], r:0, e:"Deux composantes."},
  {q:"Le tenseur des contraintes est :", o:["Symétrique","Toujours diagonal","Nul","Un scalaire"], r:0, e:"τxy = τyx."},
  {q:"En traction simple σ, le cisaillement maximal vaut :", o:["σ/2 à 45°","σ à 0°","0","2σ"], r:0, e:"Plans à 45°."},
  {q:"Les fissures d'effort tranchant d'une poutre en béton sont :", o:["Inclinées d'environ 45°","Verticales au milieu","Horizontales","Absentes"], r:0, e:"Traction sur facettes inclinées."},
  {q:"Les formules de changement de facette font intervenir :", o:["L'angle double 2θ","θ³","θ/2","Aucun angle"], r:0, e:"Cercle de Mohr."}
 ]},

{id:"mmc-3", niv:2, titre:"Les déformations : allongements, distorsions et jauges", duree:45, contenu:`## Décrire la déformation en un point
Un petit carré de matière se déforme de deux façons :
- ses côtés **s'allongent** ou **raccourcissent** : déformations linéiques εx, εy (εz) ;
- ses angles droits **varient** : distorsions γxy (γxz, γyz), en radians.
On les range dans le **tenseur des déformations** (symétrique), qui joue pour les déformations le même rôle que le tenseur des contraintes :
$$ [ε] = ( εx  γxy/2 ; γxy/2  εy )     (cas plan)

## À partir des déplacements
Si u(x, y) et v(x, y) sont les déplacements d'un point selon x et y :
$$ εx = ∂u/∂x      ;      εy = ∂v/∂y      ;      γxy = ∂u/∂y + ∂v/∂x
Exemple : une plaque de 200 mm qui devient 200,08 mm subit εx = 0,08/200 = **4 × 10⁻⁴** (400 µm/m).

## La variation de volume
En petites déformations, la variation relative de volume est la somme des déformations linéiques :
$$ ΔV/V = εx + εy + εz
Elle est nulle pour un matériau incompressible (ν = 0,5).

## Les déformations principales
Comme pour les contraintes, il existe deux directions perpendiculaires sans distorsion : les **directions principales**. Les déformations principales se calculent comme les contraintes principales :
$$ ε(1,2) = (εx + εy)/2 ± √( ((εx − εy)/2)² + (γxy/2)² )

## Mesurer les déformations : les jauges
Une **jauge de déformation** est un fil très fin collé sur la pièce : sa résistance électrique varie avec son allongement. On mesure ainsi des déformations de quelques µm/m sur des poutres, des armatures, des ponts en essai de chargement. Comme une jauge ne mesure que dans **une** direction, on colle des **rosettes** (trois jauges à 0°, 45° et 90°) pour retrouver εx, εy et γxy :
$$ εx = ε(0) ; εy = ε(90) ; γxy = 2 ε(45) − ε(0) − ε(90)
> [!exemple] Rosette à 0°, 45°, 90°
> ε(0) = 400 µm/m ; ε(45) = 300 µm/m ; ε(90) = − 100 µm/m.
> γxy = 600 − 400 + 100 = **300 µrad**.
> Centre (400 − 100)/2 = 150 ; rayon √(250² + 150²) = 291,5 → ε₁ = **441,5 µm/m** ; ε₂ = **− 141,5 µm/m** ; directions principales tournées de 15,5° par rapport aux jauges.
> Avec la loi de Hooke (chapitre suivant), on en déduit les contraintes.

> [!retenir]
> - εx = ∂u/∂x ; γxy = ∂u/∂y + ∂v/∂x.
> - ΔV/V = εx + εy + εz.
> - Déformations principales : (εx + εy)/2 ± √(((εx − εy)/2)² + (γxy/2)²).
> - Rosette 0/45/90 : γxy = 2ε45 − ε0 − ε90.`,
 exercices:[
  {t:"Déformation mesurée", d:1, e:`Deux repères distants de 100 mm sur une armature s'écartent de 0,03 mm sous charge. Calculer la déformation et la contrainte (E = 200 000 MPa).`, c:`ε = 0,03/100 = **3 × 10⁻⁴** (300 µm/m) → σ = 200 000 × 0,0003 = **60 MPa**.`},
  {t:"Variation de volume", d:1, e:`Un élément subit εx = 405 µm/m, εy = 95 µm/m et εz = − 214 µm/m. Calculer la variation relative de volume.`, c:`ΔV/V = 405 + 95 − 214 = **286 µm/m** = 2,86 × 10⁻⁴ (augmentation de volume de 0,029 %).`},
  {t:"Dépouiller une rosette", d:2, e:`Une rosette 0/45/90 collée sur l'âme d'une poutre métallique donne : ε(0) = 200 µm/m ; ε(45) = 350 µm/m ; ε(90) = 100 µm/m.
Calculer γxy et les déformations principales.`, c:`γxy = 2 × 350 − 200 − 100 = **400 µrad**.
Centre : 150 ; rayon : √(50² + 200²) = 206,2 → ε₁ = **356 µm/m** ; ε₂ = **− 56 µm/m**.`},
  {t:"Distorsion d'un panneau", d:2, e:`Un panneau carré de 2 m de côté se déforme : son coin supérieur se déplace horizontalement de 4 mm par rapport au coin inférieur, sans changement de longueur des côtés. Calculer la distorsion.`, c:`γ ≈ 4/2 000 = **0,002 rad** (2 mrad). Avec G = 13 300 MPa (béton), la contrainte de cisaillement correspondante serait τ = 13 300 × 0,002 = **26,6 MPa**, bien trop forte : le voile se fissurerait ; c'est un ordre de grandeur des déformations admissibles en contreventement.`},
  {t:"Essai de chargement d'un pont", d:3, e:`Lors d'un essai de chargement, une jauge longitudinale collée sous une poutre en béton précontraint mesure 120 µm/m de plus qu'à vide. Le calcul prévoyait 140 µm/m.
a) Quelle contrainte supplémentaire en déduit-on (E = 36 000 MPa) ? b) Comment interpréter l'écart ?`, c:`a) Δσ = 36 000 × 120 × 10⁻⁶ = **4,3 MPa** (le calcul prévoyait 5,0 MPa).
b) La structure est **plus raide** que prévu (écart de − 14 %) : module réel du béton plus élevé, participation d'éléments non pris en compte (dalle, corniches, continuité aux appuis). C'est un résultat **favorable**, à condition que la déformation revienne à zéro au déchargement (comportement élastique, pas de fissuration).`}
 ],
 quiz:[
  {q:"La distorsion γ mesure :", o:["La variation d'un angle droit","Un allongement","Une contrainte","Un volume"], r:0, e:"En radians."},
  {q:"εx en fonction du déplacement u :", o:["∂u/∂x","∂u/∂y","u/x²","u × x"], r:0, e:"Dérivée du déplacement."},
  {q:"Variation relative de volume :", o:["εx + εy + εz","εx × εy × εz","γxy","0 toujours"], r:0, e:"Petites déformations."},
  {q:"Une rosette de jauges sert à :", o:["Mesurer les déformations dans plusieurs directions","Mesurer une force","Peser","Mesurer la température"], r:0, e:"εx, εy, γxy."},
  {q:"300 µm/m correspond à :", o:["0,3 ‰","3 %","30 %","0,003 ‰"], r:0, e:"3 × 10⁻⁴."}
 ]},

{id:"mmc-4", niv:2, titre:"Loi de Hooke généralisée et déformations thermiques", duree:50, contenu:`## Hooke en trois dimensions
Pour un matériau élastique, linéaire et isotrope, chaque contrainte normale allonge le matériau dans sa direction et le contracte dans les deux autres (effet Poisson) :
$$ εx = [ σx − ν (σy + σz) ] / E
$$ εy = [ σy − ν (σx + σz) ] / E
$$ εz = [ σz − ν (σx + σy) ] / E
$$ γxy = τxy / G      (et de même pour γxz, γyz)
avec G = E/(2(1 + ν)). Deux constantes suffisent (E et ν) pour décrire un matériau isotrope.

> [!exemple] Plaque d'acier : σx = 100 MPa ; σy = 50 MPa ; σz = 0
> εx = (100 − 0,3 × 50)/210 000 = **4,05 × 10⁻⁴** ;
> εy = (50 − 0,3 × 100)/210 000 = **0,95 × 10⁻⁴** ;
> εz = − 0,3 × 150/210 000 = **− 2,14 × 10⁻⁴** (la plaque s'amincit).

## Le module de compressibilité
Sous une pression uniforme p (σx = σy = σz = − p) :
$$ ΔV/V = − p / K      avec      K = E / (3 (1 − 2ν))
Pour ν = 0,5, K est infini : le matériau est **incompressible** (élastomères, sols saturés en conditions non drainées).

## Les déformations empêchées
Si une déformation est **bloquée**, une contrainte apparaît. Exemples :
- **Compression confinée** (sol sous une large fondation, béton fretté) : si εy = εz = 0 sous σx, alors σy = σz = ν/(1 − ν) × σx. Pour un béton (ν = 0,2) comprimé à 20 MPa et confiné : contraintes latérales de **5 MPa** ; ce confinement augmente fortement sa résistance (poteaux frettés, cerces des pieux) ;
- **Déformation plane** (mur de soutènement long, tunnel) : εz = 0 → σz = ν (σx + σy).

## Les déformations thermiques
Une variation de température ΔT ajoute une déformation libre α ΔT dans toutes les directions :
$$ ε = σ / E + α × ΔT
Si la dilatation est **empêchée** (ε = 0), il apparaît une contrainte :
$$ σ = − E × α × ΔT
> [!exemple] Pièces bloquées
> Rail ou poutre en acier bloqué, échauffé de 40 °C : σ = − 210 000 × 12 × 10⁻⁶ × 40 = **− 101 MPa** (compression : risque de flambement).
> Dallage en béton bloqué, refroidi de 20 °C : σ = + 30 000 × 10⁻⁵ × 20 = **+ 6 MPa** (traction : il fissure, d'où les joints).

> [!retenir]
> - εx = [σx − ν(σy + σz)]/E ; γ = τ/G ; G = E/(2(1 + ν)) ; K = E/(3(1 − 2ν)).
> - Confinement : σlat = ν/(1 − ν) σ ; il augmente la résistance du béton.
> - ε = σ/E + α ΔT ; blocage : σ = − E α ΔT.`,
 exercices:[
  {t:"Déformations d'une tôle", d:1, e:`Une tôle d'acier (E = 210 000 MPa ; ν = 0,3) est soumise à σx = 120 MPa et σy = − 40 MPa (σz = 0). Calculer εx, εy et εz.`, c:`εx = (120 + 0,3 × 40)/210 000 = **6,29 × 10⁻⁴** ;
εy = (− 40 − 0,3 × 120)/210 000 = **− 3,62 × 10⁻⁴** ;
εz = − 0,3 × (120 − 40)/210 000 = **− 1,14 × 10⁻⁴**.`},
  {t:"Béton confiné", d:2, e:`Un béton (ν = 0,2) est comprimé à σx = − 20 MPa et empêché de se déformer latéralement (εy = εz = 0). Calculer les contraintes latérales.`, c:`σy = σz = ν/(1 − ν) × σx = 0,2/0,8 × (− 20) = **− 5 MPa** : le béton est comprimé dans les trois directions, ce qui retarde sa rupture (principe du frettage).`},
  {t:"Module de compressibilité", d:1, e:`Calculer K pour l'acier (E = 210 000 MPa ; ν = 0,3) et pour un caoutchouc (E = 3 MPa ; ν = 0,49).`, c:`Acier : K = 210 000/(3 × 0,4) = **175 000 MPa**.
Caoutchouc : K = 3/(3 × 0,02) = **50 MPa**, soit 17 fois son module E : très peu compressible, mais très déformable en cisaillement (G ≈ 1 MPa).`},
  {t:"Tuyau d'eau chaude encastré", d:2, e:`Un tube de cuivre (E = 120 000 MPa ; α = 17 × 10⁻⁶ /°C) de 6 m est encastré à ses deux extrémités et s'échauffe de 50 °C.
Calculer la contrainte si la dilatation est complètement empêchée, puis l'allongement libre qu'il faudrait permettre.`, c:`σ = − 120 000 × 17 × 10⁻⁶ × 50 = **− 102 MPa** (compression : risque de flambement et d'arrachement des fixations).
Allongement libre : 17 × 10⁻⁶ × 6 000 × 50 = **5,1 mm** : on prévoit des lyres ou des compensateurs de dilatation et des points fixes.`},
  {t:"Dalle bloquée et refroidie", d:3, e:`Une dalle en béton (E = 30 000 MPa ; α = 10⁻⁵ /°C ; ν = 0,2) coulée par forte chaleur se refroidit de 15 °C ; elle est bloquée dans ses deux directions (εx = εy = 0, σz = 0).
Calculer les contraintes σx = σy (indication : εx = [σx − ν σy]/E + α ΔT = 0). Comparer à la résistance en traction (≈ 2,5 MPa).`, c:`Avec σx = σy = σ et ΔT = − 15 °C : σ (1 − ν)/E = − α ΔT → σ = E α (15)/(1 − ν) = 30 000 × 10⁻⁵ × 15/0,8 = **5,6 MPa** (traction).
5,6 > 2,5 MPa : la dalle **fissure** ; il faut des **joints** (retrait et dilatation) et une cure soignée pour limiter les écarts de température.`}
 ],
 quiz:[
  {q:"Loi de Hooke généralisée : εx =", o:["[σx − ν(σy + σz)]/E","σx/G","ν σx/E","E σx"], r:0, e:"Effet Poisson inclus."},
  {q:"Combien de constantes élastiques pour un matériau isotrope ?", o:["Deux (E et ν)","Une","Six","Vingt et une"], r:0, e:"G et K s'en déduisent."},
  {q:"Un matériau incompressible a ν =", o:["0,5","0","0,3","1"], r:0, e:"K infini."},
  {q:"Une dilatation thermique empêchée crée :", o:["σ = − E α ΔT","σ = 0","σ = α ΔT","σ = E/ΔT"], r:0, e:"Contrainte thermique."},
  {q:"Le confinement latéral du béton :", o:["Augmente sa résistance","La diminue","N'a pas d'effet","Le rend fragile"], r:0, e:"Principe du frettage."}
 ]},

{id:"mmc-12", niv:2, titre:"Contraintes dans les poutres : flexion et cisaillement", duree:55, contenu:`## La flexion : formule de Navier
Dans une poutre fléchie, les sections droites restent planes (hypothèse de Navier-Bernoulli) : la déformation varie **linéairement** sur la hauteur, et en élasticité la contrainte aussi :
$$ σ(y) = M × y / I
y : distance à l'**axe neutre** (qui passe par le centre de gravité, en flexion simple) ; I : moment quadratique de la section. La contrainte est **nulle sur l'axe neutre** et **maximale** sur les fibres extrêmes :
$$ σ(max) = M × v / I = M / W     (W = I/v : module de flexion)
Rectangle b × h : I = b h³/12 ; W = b h²/6.

> [!exemple] Poutre 20 × 50 cm, M = 120 kN·m
> I = 0,20 × 0,50³/12 = 2,08 × 10⁻³ m⁴ ; σ(max) = 120 × 10³ × 0,25/2,08 × 10⁻³ = **14,4 MPa** (compression en haut, traction en bas pour un moment positif).
> À 15 cm de l'axe neutre : σ = 120 × 10³ × 0,15/2,08 × 10⁻³ = **8,6 MPa**.
> Le béton ne résistant pas à cette traction, des armatures sont placées en bas (béton armé).

## Le cisaillement : formule de Jourawski
L'effort tranchant V crée des contraintes tangentielles qui varient sur la hauteur :
$$ τ(y) = V × S(y) / (I × b(y))
S(y) : moment statique de la partie de section située au-delà de la fibre étudiée ; b(y) : largeur à ce niveau.
- **Rectangle** : répartition parabolique, nulle sur les bords, **maximale sur l'axe neutre** : τ(max) = **1,5 × V/(b h)** ;
- **Profilé en I** : l'**âme** reprend presque tout l'effort tranchant : τ ≈ V/(h(âme) × t(âme)).

> [!exemple] Même poutre, V = 80 kN
> τ(max) = 1,5 × 80 × 10³/(0,20 × 0,50) = **1,2 MPa** sur l'axe neutre ; au quart de la hauteur : 1,2 × (1 − 0,5²) = **0,9 MPa**.

> [!exemple] IPE 300 : M = 100 kN·m ; V = 80 kN
> W = 557 cm³ → σ(max) = 100 × 10⁶/557 × 10³ = **180 MPa** (< 235 MPa pour un S235).
> Âme : 278,6 × 7,1 mm → τ ≈ 80 000/1 978 = **40 MPa**.

## Pourquoi les profilés en I ?
La contrainte de flexion est maximale loin de l'axe neutre : on y place le maximum de matière (**semelles**), et on garde une âme mince pour l'effort tranchant. À poids égal, un I est 3 à 5 fois plus rigide en flexion qu'un rectangle plein.

> [!retenir]
> - Navier : σ = M y/I ; σ(max) = M/W ; rectangle W = b h²/6.
> - Jourawski : τ = V S/(I b) ; rectangle τ(max) = 1,5 V/(b h) sur l'axe neutre.
> - Profilé en I : semelles pour la flexion, âme pour le cisaillement.`,
 exercices:[
  {t:"Contrainte de flexion d'une poutre béton", d:1, e:`Une poutre de 25 × 60 cm subit M = 180 kN·m. Calculer W et σ(max) (section non fissurée).`, c:`W = 0,25 × 0,60²/6 = **0,015 m³** → σ(max) = 180 × 10³/0,015 = **12 MPa**.`},
  {t:"Solive en bois", d:1, e:`Une solive de 8 × 20 cm, sur 4 m de portée, porte q = 2 kN/m. Calculer M(max), V(max), σ(max) et τ(max). Comparer à des résistances de calcul de 12 MPa (flexion) et 1,2 MPa (cisaillement).`, c:`M = 2 × 4²/8 = **4 kN·m** ; V = 2 × 4/2 = **4 kN**.
I = 0,08 × 0,2³/12 = 5,33 × 10⁻⁵ m⁴ → σ = 4 × 10³ × 0,1/5,33 × 10⁻⁵ = **7,5 MPa** ≤ 12 ✓.
τ = 1,5 × 4 × 10³/(0,08 × 0,2) = **0,375 MPa** ≤ 1,2 ✓.`},
  {t:"Profilé métallique", d:2, e:`Un IPE 240 (W = 324 cm³ ; âme 220,4 × 6,2 mm) en S235 subit M = 60 kN·m et V = 70 kN. Calculer σ(max) et τ dans l'âme. Conclure.`, c:`σ = 60 × 10⁶/324 × 10³ = **185 MPa** ≤ 235 ✓.
τ ≈ 70 000/(220,4 × 6,2) = **51 MPa** ≤ 235/√3 ≈ 136 MPa ✓.`},
  {t:"Répartition du cisaillement", d:2, e:`Pour une section rectangulaire, la contrainte tangentielle vaut τ(y) = 1,5 V/(b h) × (1 − (2y/h)²). Avec τ(max) = 1,2 MPa, calculer τ aux fibres situées à h/4 et à h/2 de l'axe neutre. Conclure sur la position des connecteurs ou des cadres.`, c:`y = h/4 : τ = 1,2 × (1 − 0,25) = **0,9 MPa** ; y = h/2 (bord) : τ = **0**.
Le cisaillement est maximal au **centre** de la hauteur : c'est là que les fissures d'effort tranchant s'amorcent, et c'est l'**âme** que les cadres doivent coudre.`},
  {t:"Comparer un rectangle et un I", d:3, e:`On compare, pour une même aire de 60 cm², une barre rectangulaire de 3 × 20 cm (posée sur chant) et un profilé en I de 20 cm de haut (deux semelles de 10 × 2 cm et une âme de 16 × 1,25 cm).
Calculer I pour chaque section. Conclure.`, c:`Rectangle : I = 3 × 20³/12 = **2 000 cm⁴**.
Profilé en I : semelles : 2 × [10 × 2³/12 + 20 × 9²] = 2 × (6,7 + 1 620) = 3 253 cm⁴ ; âme : 1,25 × 16³/12 = 427 cm⁴ → I ≈ **3 680 cm⁴**.
À aire (donc poids) égale, le I est **1,8 fois** plus rigide, car la matière est loin de l'axe neutre (et bien plus stable latéralement qu'une lame de 3 cm d'épaisseur).`}
 ],
 quiz:[
  {q:"Formule de Navier :", o:["σ = M y/I","σ = N/A","τ = V/A","σ = E ε"], r:0, e:"Flexion."},
  {q:"La contrainte de flexion est nulle :", o:["Sur l'axe neutre","Sur les fibres extrêmes","Aux appuis toujours","Partout"], r:0, e:"Répartition linéaire."},
  {q:"Module de flexion d'un rectangle :", o:["b h²/6","b h³/12","b h","h²/6"], r:0, e:"W = I/v."},
  {q:"Dans un rectangle, τ(max) vaut :", o:["1,5 V/(b h)","V/(b h)","2 V/(b h)","0"], r:0, e:"Sur l'axe neutre."},
  {q:"Dans un profilé en I, l'effort tranchant est repris surtout par :", o:["L'âme","Les semelles","Les soudures","Les boulons"], r:0, e:"τ ≈ V/(h t)."}
 ]},

{id:"mmc-13", niv:2, titre:"Torsion et sollicitations composées", duree:50, contenu:`## La torsion des arbres circulaires
Un moment de torsion T (couple autour de l'axe de la pièce) crée des contraintes tangentielles qui croissent linéairement du centre vers la surface :
$$ τ(r) = T × r / J      ;      τ(max) = T × R / J
J : moment quadratique **polaire** ; section pleine de diamètre d : J = π d⁴/32 ; section creuse : J = π (D⁴ − d⁴)/32.
Angle de torsion sur une longueur L : **θ = T L/(G J)**.
> [!exemple] Arbre plein Ø 50 mm, T = 1 kN·m
> J = π × 50⁴/32 = 6,14 × 10⁵ mm⁴ ; τ(max) = 10⁶ × 25/6,14 × 10⁵ = **40,7 MPa** ;
> angle sur 1 m (G = 81 000 MPa) : θ = 10⁶ × 1 000/(81 000 × 6,14 × 10⁵) = 0,020 rad = **1,15°**.
Les sections **creuses** sont plus efficaces en torsion (la matière au centre travaille peu). Dans les bâtiments, la torsion apparaît dans les poutres de rive qui reçoivent des dalles en porte-à-faux, les poutres courbes, les escaliers hélicoïdaux ; les sections ouvertes (profilés en I, en U) résistent mal à la torsion.

## La flexion composée
Un élément soumis à la fois à un effort normal N et à un moment M (poteau excentré, poteau de portique, semelle sous charge excentrée) subit, par superposition :
$$ σ = N/A ± M/W
On peut aussi écrire M = N × e (e : **excentricité** de la charge).
> [!exemple] Poteau de 30 × 30 cm : N = 600 kN ; M = 30 kN·m
> N/A = 600/0,09 = 6,67 MPa ; M/W = 30/(0,3³/6) = 6,67 MPa → σ = **13,3 MPa** d'un côté et **0** de l'autre.
> L'excentricité e = 30/600 = 0,05 m = h/6 : la charge est à la limite du **noyau central**.

## Le noyau central
Pour une section rectangulaire, si la charge reste dans le **tiers central** (|e| ≤ h/6 dans chaque direction), toute la section reste **comprimée**. Au-delà, une partie est tendue (fissuration de la maçonnerie ou du béton non armé, soulèvement d'une partie d'une semelle).
> [!exemple] Semelle de 1,5 × 1,5 m : N = 300 kN ; M = 45 kN·m
> e = 45/300 = 0,15 m < 1,5/6 = 0,25 m → semelle entièrement comprimée.
> σ = 300/2,25 ± 45/(1,5³/6) = 133 ± 80 → **213 kPa** et **53 kPa** sous les deux bords (à comparer à la contrainte admissible du sol).

## La flexion déviée
Si le moment n'agit pas selon un axe principal de la section, on le décompose : σ = N/A ± Mx/Wx ± My/Wy. Les contraintes maximales sont dans les **coins** d'un rectangle.

> [!retenir]
> - Torsion : τ = T r/J ; J = π d⁴/32 ; θ = T L/(G J) ; sections creuses ou fermées efficaces.
> - Flexion composée : σ = N/A ± M/W ; e = M/N.
> - Noyau central d'un rectangle : |e| ≤ h/6 → section entièrement comprimée.`,
 exercices:[
  {t:"Torsion d'un arbre", d:1, e:`Un arbre plein de 40 mm transmet un couple de 0,8 kN·m. Calculer τ(max).`, c:`J = π × 40⁴/32 = 2,51 × 10⁵ mm⁴ → τ = 0,8 × 10⁶ × 20/2,51 × 10⁵ = **63,7 MPa**.`},
  {t:"Diamètre nécessaire", d:2, e:`Quel diamètre minimal doit avoir un arbre plein pour transmettre 2 kN·m avec τ ≤ 60 MPa ? (τ(max) = 16 T/(π d³))`, c:`d³ ≥ 16 × 2 × 10⁶/(π × 60) = 169 765 mm³ → d ≥ **55,4 mm** → on choisit **Ø 56 à 60 mm**.`},
  {t:"Poteau excentré", d:1, e:`Un poteau de 25 × 40 cm reçoit N = 500 kN et M = 40 kN·m autour de l'axe fort (h = 40 cm). Calculer les contraintes extrêmes et l'excentricité. La section est-elle entièrement comprimée ?`, c:`A = 0,10 m² ; W = 0,25 × 0,4²/6 = 6,67 × 10⁻³ m³.
σ = 5 ± 6 → **11 MPa** (compression) et **− 1 MPa** (traction).
e = 40/500 = **0,08 m** > h/6 = 0,067 m : la charge sort du noyau central ; une petite partie de la section est tendue (armatures nécessaires de ce côté).`},
  {t:"Semelle excentrée", d:2, e:`Une semelle de 2 × 2 m reçoit N = 500 kN et M = 100 kN·m. Calculer e, vérifier le noyau central et calculer les contraintes sous les bords.`, c:`e = 100/500 = **0,20 m** < 2/6 = 0,33 m ✓ (entièrement comprimée).
A = 4 m² ; W = 2 × 2²/6 = 1,333 m³ → σ = 125 ± 75 → **200 kPa** et **50 kPa**.`},
  {t:"Poutre de rive en torsion", d:3, e:`Une poutre de rive reçoit d'un balcon en console un moment de torsion réparti de 6 kN·m/m sur 5 m entre deux poteaux qui l'empêchent de tourner. Calculer le moment de torsion maximal (aux poteaux). Pourquoi faut-il des cadres fermés et des barres longitudinales réparties sur le pourtour ?`, c:`Torsion répartie t = 6 kN·m/m, encastrée aux deux bouts : T(max) = t L/2 = 6 × 5/2 = **15 kN·m** aux poteaux (nul au milieu).
La torsion produit des contraintes tangentielles qui **tournent** autour de la section (flux de cisaillement) et des fissures en **hélice** : il faut des **cadres fermés** (bien ancrés) et des **armatures longitudinales sur tout le pourtour** pour coudre ces fissures ; un simple étrier ouvert ne suffit pas.`}
 ],
 quiz:[
  {q:"Contrainte maximale de torsion d'un arbre circulaire :", o:["T R/J","T/A","M/W","N/A"], r:0, e:"Maximale en surface."},
  {q:"Moment polaire d'une section pleine :", o:["π d⁴/32","π d²/4","b h³/12","π d³/16"], r:0, e:"J."},
  {q:"En flexion composée, σ =", o:["N/A ± M/W","M/N","N × M","N/A seulement"], r:0, e:"Superposition."},
  {q:"Noyau central d'un rectangle :", o:["|e| ≤ h/6","|e| ≤ h/2","|e| ≤ h","e = 0 seulement"], r:0, e:"Section entièrement comprimée."},
  {q:"Les sections les plus efficaces en torsion sont :", o:["Les sections fermées ou creuses","Les profilés en I","Les plats minces","Les cornières"], r:0, e:"Flux de cisaillement fermé."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"mmc-8", niv:3, titre:"Contraintes principales et cercle de Mohr", duree:50, contenu:`## Les contraintes principales
En tout point, il existe des facettes sur lesquelles la contrainte tangentielle est **nulle** : ce sont les **facettes principales**. Les contraintes normales qui y agissent sont les **contraintes principales** σ₁ (maximale) et σ₂ (minimale) en état plan. Ce sont elles qui gouvernent la fissuration et la rupture.
$$ σ(1,2) = (σx + σy)/2 ± √( ((σx − σy)/2)² + τxy² )
$$ tan 2θ(p) = 2 τxy / (σx − σy)
Le **cisaillement maximal** vaut τ(max) = (σ₁ − σ₂)/2 et agit sur des facettes à 45° des directions principales.

## Le cercle de Mohr
Toutes les facettes passant par un point se représentent par des points (σ ; τ) situés sur un **cercle** :
- **centre** C = ((σx + σy)/2 ; 0) ;
- **rayon** R = √(((σx − σy)/2)² + τxy²) ;
- une rotation de la facette d'un angle θ correspond à une rotation de **2θ** sur le cercle.

!fig:mohr|Cercle de Mohr : contraintes principales et cisaillement maximal

> [!exemple] σx = 80 MPa ; σy = − 20 MPa ; τxy = 30 MPa
> C = 30 MPa ; R = √(50² + 30²) = **58,3 MPa**.
> σ₁ = 30 + 58,3 = **88,3 MPa** ; σ₂ = 30 − 58,3 = **− 28,3 MPa** ; τ(max) = **58,3 MPa**.
> 2θ(p) = arctan(60/100) = 31° → les directions principales sont tournées de **15,5°** par rapport aux axes x, y.

## Cas remarquables
| État | Cercle | Contraintes principales |
|---|---|---|
| Traction simple σ | Cercle passant par 0 et σ | σ₁ = σ ; σ₂ = 0 ; τ(max) = σ/2 à 45° |
| Cisaillement pur τ | Cercle centré à l'origine | σ₁ = + τ ; σ₂ = − τ à 45° |
| Compression hydrostatique | Cercle réduit à un point | Toutes égales, pas de cisaillement |

## Applications
- **Poutres en béton** : près des appuis (fort cisaillement), la traction principale est inclinée à environ 45° : fissures inclinées cousues par les cadres ; à mi-travée (flexion), la traction est horizontale : fissures verticales cousues par les armatures longitudinales ;
- **Âmes de poutres métalliques** : combinaison σ (flexion) et τ (tranchant) à vérifier avec un critère ;
- **Sols** : le cercle de Mohr des contraintes effectives est comparé à la droite de Coulomb (chapitre Contraintes dans les sols).

> [!retenir]
> - σ(1,2) = C ± R ; C = (σx + σy)/2 ; R = √(((σx − σy)/2)² + τ²).
> - τ(max) = R, sur des facettes à 45° des directions principales.
> - tan 2θp = 2τ/(σx − σy) ; rotation θ ↔ 2θ sur le cercle.`,
 exercices:[
  {t:"Contraintes principales", d:1, e:`État plan : σx = 60 MPa ; σy = − 40 MPa ; τxy = 30 MPa. Calculer σ₁, σ₂, τ(max) et l'orientation des directions principales.`, c:`C = 10 ; R = √(50² + 30²) = **58,3 MPa**.
σ₁ = **68,3 MPa** ; σ₂ = **− 48,3 MPa** ; τ(max) = **58,3 MPa**.
tan 2θ = 60/100 → 2θ = 31,0° → θp = **15,5°**.`},
  {t:"Compression bi-axiale", d:1, e:`Un élément de béton est comprimé : σx = − 10 MPa ; σy = − 50 MPa ; τxy = 15 MPa. Calculer les contraintes principales.`, c:`C = − 30 ; R = √(20² + 15²) = **25 MPa** → σ₁ = **− 5 MPa** ; σ₂ = **− 55 MPa** : tout l'élément est comprimé ; τ(max) = 25 MPa.`},
  {t:"Cisaillement pur", d:1, e:`Un élément subit uniquement τxy = 25 MPa. Tracer mentalement le cercle et donner σ₁, σ₂ et leurs orientations.`, c:`Centre à l'origine, rayon 25 : σ₁ = **+ 25 MPa** et σ₂ = **− 25 MPa**, sur des facettes à **45°** des axes. C'est pourquoi un arbre en matériau fragile (craie, fonte) tordu se rompt selon une hélice à 45° (en traction).`},
  {t:"Point d'une poutre métallique", d:2, e:`En un point de l'âme d'une poutre, σx = 150 MPa (flexion), σy = 0 et τxy = 80 MPa (tranchant). Calculer σ₁, σ₂, τ(max).`, c:`C = 75 ; R = √(75² + 80²) = **109,7 MPa** → σ₁ = **184,7 MPa** ; σ₂ = **− 34,7 MPa** ; τ(max) = 109,7 MPa.
La contrainte principale dépasse la seule contrainte de flexion (150 MPa) : il faut vérifier ce point avec un critère (chapitre suivant).`},
  {t:"Fissuration d'une poutre en béton", d:3, e:`Dans une poutre en béton non fissurée, au niveau de l'axe neutre près d'un appui, σx = 0 et τxy = 2,2 MPa ; un peu plus bas, σx = 1,0 MPa (traction de flexion) et τ = 1,8 MPa. Calculer la traction principale dans les deux cas et son inclinaison. Comparer à la résistance en traction ft = 2,6 MPa.`, c:`Axe neutre : σ₁ = τ = **2,2 MPa**, à **45°** < 2,6 MPa : pas encore de fissure.
Plus bas : C = 0,5 ; R = √(0,5² + 1,8²) = 1,87 → σ₁ = **2,37 MPa** ; 2θ = arctan(3,6/1) = 74,5° → θ = **37°** < 2,6 MPa, mais proche : une petite augmentation de charge fera apparaître des **fissures inclinées** à environ 50° de l'horizontale (perpendiculaires à σ₁). Les cadres doivent être prévus.`}
 ],
 quiz:[
  {q:"Sur une facette principale :", o:["La contrainte tangentielle est nulle","La contrainte normale est nulle","Tout est nul","τ est maximale"], r:0, e:"Définition."},
  {q:"Le rayon du cercle de Mohr vaut :", o:["√(((σx − σy)/2)² + τ²)","σx + σy","τ seulement","(σx + σy)/2"], r:0, e:"Il donne τ(max)."},
  {q:"Une rotation θ de la facette correspond sur le cercle à :", o:["2θ","θ","θ/2","4θ"], r:0, e:"Angle double."},
  {q:"En cisaillement pur τ, les contraintes principales valent :", o:["± τ à 45°","τ et 0","2τ","0"], r:0, e:"Cercle centré à l'origine."},
  {q:"Le cisaillement maximal agit sur des facettes à :", o:["45° des directions principales","0°","90°","30°"], r:0, e:"Haut du cercle."}
 ]},

{id:"mmc-5", niv:3, titre:"Critères de résistance : Rankine, Tresca, von Mises et Mohr-Coulomb", duree:50, contenu:`## Pourquoi un critère ?
Un essai de traction donne une limite (fy, fu) pour un état de contrainte **simple**. Dans une structure, les états sont **combinés** (σ et τ, contraintes dans plusieurs directions). Un **critère de résistance** transforme l'état réel en une **contrainte équivalente** à comparer à la limite de l'essai simple.

## Les matériaux fragiles : critère de Rankine
La rupture se produit quand la **plus grande contrainte principale de traction** atteint la résistance en traction : σ₁ ≤ ft. Il convient au béton en traction, à la pierre, au verre, à la fonte.

## Les matériaux ductiles
**Critère de Tresca** (cisaillement maximal) :
$$ σ(Tresca) = σ₁ − σ₂ ≤ fy      (si σ₁ et σ₂ sont de signes contraires ; en général la plus grande différence)
**Critère de von Mises** (énergie de distorsion), le plus utilisé pour l'acier :
$$ σ(VM) = √( σ₁² − σ₁ σ₂ + σ₂² ) ≤ fy
Pour un point de poutre (σ, τ) : **σ(VM) = √(σ² + 3 τ²)** et σ(Tresca) = √(σ² + 4 τ²). En cisaillement pur, von Mises donne la limite **τ(y) = fy/√3** (≈ 0,58 fy) : c'est la résistance au cisaillement utilisée pour les âmes des poutres métalliques.

> [!exemple] Point de l'âme d'une poutre en S235 : σ = 150 MPa ; τ = 80 MPa
> von Mises : √(150² + 3 × 80²) = **204 MPa** ≤ 235 ✓ (coefficient de sécurité 1,15).
> Tresca : √(150² + 4 × 80²) = **219 MPa** ≤ 235 ✓ (Tresca est un peu plus sévère).

## Les sols et les matériaux granulaires : Mohr-Coulomb
Pour les sols, les enrochements, le béton en compression multiaxiale, la résistance au cisaillement **augmente avec la compression** (frottement entre grains) :
$$ τ(f) = c + σ × tan φ
c : **cohésion** ; φ : **angle de frottement interne**. La rupture se produit quand le cercle de Mohr de l'état de contrainte **touche la droite de Coulomb**.
> [!exemple] Sol avec c = 10 kPa et φ = 30°
> Sur une facette où σ = 100 kPa : τ(f) = 10 + 100 × tan 30° = **67,7 kPa**.

## Coefficient de sécurité
Le **coefficient de sécurité** est le rapport entre la limite et la contrainte équivalente : 235/204 = 1,15 dans l'exemple. Les règlements (Eurocodes) l'intègrent sous forme de coefficients partiels sur les charges et sur les matériaux.

> [!retenir]
> - Fragile : Rankine σ₁ ≤ ft.
> - Ductile : Tresca σ₁ − σ₂ ; von Mises √(σ₁² − σ₁σ₂ + σ₂²) ; poutre : √(σ² + 3τ²) ; τ(y) = fy/√3.
> - Sols : τ(f) = c + σ tan φ ; rupture quand le cercle touche la droite de Coulomb.`,
 exercices:[
  {t:"Von Mises en état plan", d:1, e:`Un point d'une pièce en S235 a pour contraintes principales σ₁ = 68,3 MPa et σ₂ = − 48,3 MPa. Calculer σ(VM), σ(Tresca) et les coefficients de sécurité.`, c:`σ(VM) = √(68,3² + 68,3 × 48,3 + 48,3²) = √(4 665 + 3 299 + 2 333) = **101,5 MPa** → sécurité 235/101,5 = **2,3**.
σ(Tresca) = 68,3 + 48,3 = **116,6 MPa** → sécurité **2,0**.`},
  {t:"Résistance au cisaillement de l'acier", d:1, e:`Selon von Mises, quelle est la contrainte de cisaillement limite d'un acier S355 ?`, c:`τ(y) = 355/√3 = **205 MPa**.`},
  {t:"Vérifier un point d'une poutre", d:2, e:`Au raccord âme-semelle d'un IPE en S235, σ = 190 MPa et τ = 55 MPa. Vérifier avec von Mises.`, c:`σ(VM) = √(190² + 3 × 55²) = √(36 100 + 9 075) = **212,5 MPa** ≤ 235 ✓ (sécurité 1,11 : juste suffisant, à vérifier avec les coefficients partiels du règlement).`},
  {t:"Fissuration du béton (Rankine)", d:2, e:`En un point d'un voile, σx = − 8 MPa (compression), σy = 0 et τxy = 2,5 MPa. Calculer σ₁ et vérifier la non-fissuration (ft = 2,6 MPa).`, c:`C = − 4 ; R = √(4² + 2,5²) = 4,72 → σ₁ = − 4 + 4,72 = **0,72 MPa** ≤ 2,6 ✓ ; σ₂ = **− 8,72 MPa**.
La compression réduit la traction principale : un voile comprimé (par le poids des étages) résiste mieux au cisaillement du vent.`},
  {t:"Résistance d'une argile", d:3, e:`Une argile a c = 15 kPa et φ = 20°. a) Calculer τ(f) pour σ = 120 kPa. b) Un essai triaxial sur un sable (c = 0) donne à la rupture σ₃ = 100 kPa et σ₁ = 320 kPa. En déduire φ (sin φ = (σ₁ − σ₃)/(σ₁ + σ₃)).`, c:`a) τ(f) = 15 + 120 × tan 20° = 15 + 43,7 = **58,7 kPa**.
b) sin φ = 220/420 = 0,524 → **φ ≈ 31,6°** (sable moyennement dense).`}
 ],
 quiz:[
  {q:"Critère adapté au béton en traction :", o:["Rankine","von Mises","Tresca","Aucun"], r:0, e:"Matériau fragile."},
  {q:"Contrainte de von Mises pour un point (σ, τ) :", o:["√(σ² + 3τ²)","σ + τ","√(σ² + τ²)","σ − 3τ"], r:0, e:"Énergie de distorsion."},
  {q:"Selon von Mises, τ(y) = ", o:["fy/√3","fy/2","fy","2 fy"], r:0, e:"≈ 0,58 fy."},
  {q:"Loi de Coulomb :", o:["τ = c + σ tan φ","τ = G γ","σ = E ε","τ = V/A"], r:0, e:"Sols."},
  {q:"Dans le critère de Mohr-Coulomb, la résistance au cisaillement :", o:["Augmente avec la compression","Diminue avec la compression","Est constante","Est nulle"], r:0, e:"Frottement."}
 ]},

{id:"mmc-14", niv:3, titre:"Contraintes dans les sols : contraintes effectives et rupture", duree:55, contenu:`## Un milieu à trois phases
Un sol est fait de **grains** (squelette), d'**eau** et d'**air** dans les vides. Sous la nappe, les vides sont remplis d'eau (sol **saturé**). La MMC s'y applique, mais en distinguant ce que portent les grains et ce que porte l'eau.

## Les contraintes verticales dues au poids des terres
À la profondeur z, la contrainte verticale totale est le poids des couches au-dessus :
$$ σv = Σ γᵢ × hᵢ
γ : poids volumique du sol (16 à 20 kN/m³ au-dessus de la nappe ; 19 à 21 kN/m³ saturé).

## La pression de l'eau interstitielle
Sous la nappe, l'eau des pores est sous pression hydrostatique : **u = γw × (z − zw)** (γw ≈ 9,81 kN/m³ ; zw : profondeur de la nappe).

## Le principe des contraintes effectives (Terzaghi)
$$ σ' = σ − u
Seule la **contrainte effective** σ', transmise de grain à grain, gouverne la **résistance** et le **tassement** du sol. L'eau ne résiste pas au cisaillement.
> [!exemple] Sable : nappe à 2 m ; γ = 18 kN/m³ au-dessus, γ(sat) = 20 kN/m³ en dessous
> À z = 6 m : σv = 18 × 2 + 20 × 4 = **116 kPa** ; u = 9,81 × 4 = **39,2 kPa** ; σ'v = **76,8 kPa**.
> Résistance au cisaillement sur un plan horizontal (c' = 0 ; φ' = 32°) : τ(f) = 76,8 × tan 32° = **48 kPa**.

## Conséquences pratiques
- Une **remontée de nappe** augmente u, diminue σ' et donc la résistance : glissements de talus et instabilités en saison des pluies ;
- Un **rabattement** de nappe (pompage) augmente σ' : le sol se **tasse** (risque pour les bâtiments voisins) ;
- Un chargement rapide d'une **argile** saturée met d'abord l'eau en pression (comportement **non drainé**) ; l'eau s'évacue lentement (**consolidation**), σ' augmente et le sol tasse pendant des mois ou des années.

## La rupture : Mohr-Coulomb en contraintes effectives
$$ τ(f) = c' + σ' × tan φ'
L'essai **triaxial** (éprouvette cylindrique sous pression latérale σ₃, chargée axialement jusqu'à σ₁) permet de mesurer c' et φ'. Pour un sol sans cohésion, à la rupture :
$$ σ₁ = σ₃ × tan²(45° + φ/2)      ;      sin φ = (σ₁ − σ₃)/(σ₁ + σ₃)
avec une cohésion : σ₁ = σ₃ tan²(45° + φ/2) + 2c tan(45° + φ/2).
> [!exemple] Sable (φ = 30° ; c = 0) sous σ₃ = 100 kPa
> tan²(60°) = 3 → σ₁ = **300 kPa** à la rupture. Avec c = 20 kPa : σ₁ = 300 + 2 × 20 × 1,732 = **369 kPa**.

> [!retenir]
> - σv = Σ γ h ; u = γw (z − zw) ; σ' = σ − u (Terzaghi).
> - La résistance et le tassement dépendent de σ'.
> - Remontée de nappe : moins de résistance ; rabattement : tassements.
> - Mohr-Coulomb : τ = c' + σ' tan φ' ; triaxial : σ₁ = σ₃ tan²(45 + φ/2) + 2c tan(45 + φ/2).`,
 exercices:[
  {t:"Contraintes à 8 m", d:1, e:`Un sol a une nappe à 3 m ; γ = 17 kN/m³ au-dessus et 19,5 kN/m³ en dessous. Calculer σv, u et σ'v à 8 m.`, c:`σv = 17 × 3 + 19,5 × 5 = **148,5 kPa** ; u = 9,81 × 5 = **49,1 kPa** ; σ'v = **99,4 kPa**.`},
  {t:"Effet d'une remontée de nappe", d:2, e:`Dans l'exercice précédent, la nappe remonte jusqu'à la surface (on prend γ = 19,5 kN/m³ sur toute la hauteur). Calculer σ'v à 8 m et la résistance au cisaillement (c' = 0 ; φ' = 30°) avant et après.`, c:`Avant : σ'v = 99,4 kPa → τ(f) = 99,4 × tan 30° = **57,4 kPa**.
Après : σv = 19,5 × 8 = 156 kPa ; u = 9,81 × 8 = 78,5 kPa ; σ'v = **77,5 kPa** → τ(f) = **44,7 kPa** (− 22 %) : c'est pourquoi les glissements surviennent souvent en saison des pluies.`},
  {t:"Essai triaxial", d:2, e:`Un sable (c = 0 ; φ = 34°) est essayé sous σ₃ = 50 kPa puis 150 kPa. Prévoir σ₁ à la rupture.`, c:`tan²(45 + 17) = tan²(62°) = **3,54**.
σ₃ = 50 kPa → σ₁ = **177 kPa** ; σ₃ = 150 kPa → σ₁ = **531 kPa** : la résistance est proportionnelle au confinement.`},
  {t:"Rabattement de nappe", d:2, e:`On rabat la nappe de 4 m pour creuser un sous-sol. De combien augmente la contrainte effective sous la zone rabattue (on admet que le sol reste à γ = 19,5 kN/m³ et que l'eau s'en va) ? Quel risque pour les bâtiments voisins ?`, c:`L'eau qui portait une partie du poids ne le porte plus : u diminue de 9,81 × 4 = **39,2 kPa** → σ' augmente d'environ **39 kPa** (un peu moins, car le sol drainé devient plus léger).
Cette surcharge effective fait **tasser** les sols compressibles (argiles, vases) sous les bâtiments voisins : fissures. On limite le rabattement (parois étanches), on surveille les avoisinants.`},
  {t:"Argile chargée rapidement", d:3, e:`On construit rapidement un remblai sur une argile saturée de faible perméabilité ; il ajoute 50 kPa de contrainte totale. Décrire l'évolution de u et de σ' juste après la construction et à long terme. Pourquoi la stabilité est-elle la plus critique en fin de construction ?`, c:`Juste après : l'eau ne peut pas s'échapper : **u augmente d'environ 50 kPa**, σ' ne change presque pas (le sol n'a pas encore gagné de résistance) → comportement **non drainé**.
À long terme : l'eau s'évacue (**consolidation**), u revient à sa valeur hydrostatique, **σ' augmente de 50 kPa** et le sol tasse ; sa résistance augmente.
La stabilité est donc la plus critique **en fin de construction** : on construit par étapes, on place des drains verticaux pour accélérer la consolidation.`}
 ],
 quiz:[
  {q:"Contrainte effective :", o:["σ' = σ − u","σ' = σ + u","σ' = u","σ' = γ z"], r:0, e:"Principe de Terzaghi."},
  {q:"La résistance d'un sol dépend :", o:["Des contraintes effectives","De la pression de l'eau seule","De la contrainte totale seule","De la couleur"], r:0, e:"L'eau ne résiste pas au cisaillement."},
  {q:"Une remontée de nappe :", o:["Diminue la résistance du sol","L'augmente","N'a pas d'effet","Supprime le poids du sol"], r:0, e:"u augmente, σ' diminue."},
  {q:"Pour un sable (c = 0, φ = 30°), à la rupture σ₁/σ₃ =", o:["3","1","30","0,33"], r:0, e:"tan²(60°)."},
  {q:"La consolidation d'une argile est :", o:["L'évacuation lente de l'eau sous charge, avec tassement","Un séchage au soleil","Un compactage par rouleau","Un gel"], r:0, e:"σ' augmente avec le temps."}
 ]},

{id:"mmc-15", niv:3, titre:"Énergie de déformation et méthodes énergétiques", duree:50, contenu:`## L'énergie stockée dans un corps déformé
Quand on charge lentement une structure élastique, le travail des forces est **stocké** sous forme d'**énergie de déformation** W, restituée au déchargement (comme un ressort).
- Barre en traction : W = ½ N ΔL = **N² L/(2 E A)** ;
- Énergie par unité de volume : **w = σ²/(2E)** (ou ½ σ ε) ;
- Poutre fléchie : W = ∫ M²/(2 E I) dx (+ termes dus à N, V, T, souvent négligeables en flexion).

> [!exemple] Tirant Ø 20 sous 50 kN (L = 3 m)
> W = 50 000² × 3 000/(2 × 210 000 × 314) = 56 900 N·mm = **56,9 J** (= ½ × 50 000 × 2,27 mm ✓).
> Énergie volumique : w = 159²/(2 × 210 000) = **0,060 J/cm³**.

## Le théorème de Castigliano
Le déplacement du point d'application d'une force P, dans sa direction, est la **dérivée** de l'énergie par rapport à cette force :
$$ δ = ∂W / ∂P
> [!exemple] Console de longueur L chargée en bout
> M(x) = − P (L − x) → W = ∫₀ᴸ P² (L − x)²/(2 E I) dx = **P² L³/(6 E I)**.
> δ = ∂W/∂P = **P L³/(3 E I)** : on retrouve la flèche classique.
> Pour une console IPE 160 (I = 869 cm⁴) de 2 m sous 10 kN : δ = 10 000 × 2 000³/(3 × 210 000 × 8,69 × 10⁶) = **14,6 mm** ; W = ½ P δ = 73 J.

## La méthode de la charge unité (travaux virtuels)
Pour obtenir le déplacement d'un point où **aucune force n'agit**, on y applique une **force fictive unité** et l'on calcule :
$$ δ = ∫ M × m / (E I) dx + Σ N × n × L / (E A)
M, N : efforts sous les charges réelles ; m, n : efforts sous la force unité. C'est la méthode générale pour calculer les **flèches des poutres** et les **déplacements des treillis**, et pour résoudre les structures **hyperstatiques**.

## Intérêt pratique
- Calcul rapide des **flèches** et des **déplacements** ;
- **Absorption d'énergie** : un matériau ductile (grande surface sous la courbe σ-ε) absorbe beaucoup d'énergie avant de rompre : chocs, séismes, garde-corps, glissières ;
- Les **éléments finis** reposent sur la minimisation de l'énergie potentielle totale.

> [!retenir]
> - W = N² L/(2EA) ; w = σ²/(2E) ; poutre : W = ∫ M²/(2EI) dx.
> - Castigliano : δ = ∂W/∂P.
> - Charge unité : δ = ∫ M m/(EI) dx + Σ N n L/(EA).
> - Les matériaux ductiles absorbent beaucoup d'énergie (chocs, séismes).`,
 exercices:[
  {t:"Énergie d'une barre", d:1, e:`Une barre en acier (A = 491 mm² ; L = 6 m ; E = 200 000 MPa) reprend 120 kN. Calculer l'énergie de déformation.`, c:`W = 120 000² × 6 000/(2 × 200 000 × 491) = 8,64 × 10¹³/1,964 × 10⁸ = **440 000 N·mm = 440 J** (= ½ × 120 000 × 7,3 mm ✓).`},
  {t:"Énergie volumique", d:1, e:`Comparer l'énergie volumique stockée par un acier à 160 MPa (E = 210 000) et par un béton à 12 MPa (E = 30 000).`, c:`Acier : 160²/(2 × 210 000) = **0,061 J/cm³** ; béton : 12²/(2 × 30 000) = **0,0024 J/cm³** : l'acier stocke 25 fois plus d'énergie élastique par unité de volume.`},
  {t:"Castigliano sur une poutre", d:2, e:`Une poutre sur deux appuis de portée L porte une force P au milieu. Sachant que M(x) = P x/2 pour 0 ≤ x ≤ L/2 (symétrique), calculer W puis la flèche au milieu.`, c:`W = 2 × ∫₀^(L/2) (P x/2)²/(2 E I) dx = 2 × P²/(8 E I) × (L/2)³/3 = **P² L³/(96 E I)**.
δ = ∂W/∂P = **P L³/(48 E I)** : la flèche classique d'une charge centrée.`},
  {t:"Flèche d'une console", d:2, e:`Une console IPE 200 (I = 1 943 cm⁴ ; E = 210 000 MPa) de 1,8 m porte 15 kN en bout. Calculer la flèche par Castigliano (δ = P L³/(3 E I)) et l'énergie stockée.`, c:`δ = 15 000 × 1 800³/(3 × 210 000 × 1,943 × 10⁷) = 8,748 × 10¹³/1,224 × 10¹³ = **7,1 mm**.
W = ½ × 15 000 × 7,1 = **53 600 N·mm ≈ 54 J**.`},
  {t:"Absorption d'énergie d'un garde-corps", d:3, e:`Une personne de 80 kg tombe contre un garde-corps avec une vitesse de 2 m/s. Le garde-corps se comporte comme un ressort de raideur k = 400 kN/m.
a) Quelle énergie doit-il absorber ? b) Quelle déformation et quelle force maximale en résultent (comportement élastique) ?`, c:`a) Ec = ½ × 80 × 2² = **160 J**.
b) Énergie du ressort : ½ k δ² = 160 → δ = √(320/400 000) = **0,028 m = 28 mm** ; force : k δ = 400 000 × 0,028 = **11,3 kN**, bien plus que le poids de la personne (0,8 kN) : c'est pourquoi les garde-corps sont calculés pour des efforts dynamiques et doivent être **ductiles** (se déformer plutôt que casser).`}
 ],
 quiz:[
  {q:"Énergie de déformation d'une barre :", o:["N² L/(2EA)","N L/(EA)","E A/L","N/A"], r:0, e:"½ N ΔL."},
  {q:"Théorème de Castigliano :", o:["δ = ∂W/∂P","W = P δ²","δ = W × P","P = ∂δ/∂W"], r:0, e:"Dérivée de l'énergie."},
  {q:"Énergie volumique élastique :", o:["σ²/(2E)","σ E","E/σ","σ/2"], r:0, e:"½ σ ε."},
  {q:"La méthode de la charge unité sert à calculer :", o:["Un déplacement en un point quelconque","Une contrainte de rupture","Un module d'élasticité","Une masse"], r:0, e:"Travaux virtuels."},
  {q:"Un matériau ductile, face à un choc :", o:["Absorbe beaucoup d'énergie","Casse sans absorber","N'est pas concerné","Est toujours fragile"], r:0, e:"Grande aire sous la courbe."}
 ]},

{id:"mmc-16", niv:3, titre:"Plasticité, concentrations de contraintes, fatigue et rupture", duree:50, contenu:`## La plasticité dans une section fléchie
Pour une poutre en acier, la contrainte maximale atteint fy d'abord sur les fibres extrêmes : c'est le **moment élastique** Me = fy × W(él). Si l'on continue à charger, la plastification gagne vers l'axe neutre jusqu'à ce que toute la section soit plastifiée : c'est le **moment plastique** :
$$ Mp = fy × W(pl)
| Section | W(él) | W(pl) | Facteur de forme W(pl)/W(él) |
|---|---|---|---|
| Rectangle b × h | b h²/6 | b h²/4 | 1,5 |
| Profilé IPE | (catalogue) | (catalogue) | ≈ 1,12 à 1,15 |
> [!exemple] Rectangle d'acier 150 × 300 mm en S235
> Me = 235 × 150 × 300²/6 = **529 kN·m** ; Mp = 235 × 150 × 300²/4 = **793 kN·m** (+ 50 %).
> IPE 240 : Me = 235 × 324 cm³ = **76 kN·m** ; Mp = 235 × 367 cm³ = **86 kN·m** (+ 13 %).

## La rotule plastique et l'analyse limite
Quand une section atteint Mp, elle tourne sans reprendre plus de moment : c'est une **rotule plastique**. Une structure hyperstatique peut encore porter davantage, en redistribuant les moments, jusqu'à ce qu'il se forme assez de rotules pour créer un **mécanisme**.
> [!exemple] Poutre encastrée à ses deux extrémités, charge uniforme
> Calcul élastique : moment maximal aux encastrements q L²/12 → première plastification pour q = 12 Mp/L² (en assimilant Me à Mp).
> Analyse limite : rotules aux deux encastrements puis au milieu → ruine pour **q = 16 Mp/L²** : réserve de **33 %**.
Les Eurocodes autorisent ce calcul pour les sections **ductiles** (classe 1) ; il suppose que l'acier peut tourner beaucoup sans voilement ni rupture.

## Les concentrations de contraintes
Près d'un **trou**, d'une **entaille**, d'un angle vif, d'un changement brusque de section, la contrainte locale dépasse la contrainte nominale :
$$ σ(max) = Kt × σ(nominale)
Kt ≈ 3 au bord d'un petit trou circulaire dans une plaque tendue ; davantage pour une entaille aiguë.
> [!exemple] Plat de 120 × 8 mm percé d'un trou de 20 mm, tendu à 100 kN
> σ(nominale) = 100 000/((120 − 20) × 8) = **125 MPa** ; au bord du trou : ≈ 3 × 125 = **375 MPa** !
> Un acier ductile se plastifie localement et redistribue (ce n'est pas grave en statique) ; un matériau fragile ou une pièce sollicitée en **fatigue** fissure à cet endroit.

## La fatigue
Sous des charges **répétées** (ponts, ponts roulants, machines, éoliennes), une fissure peut s'amorcer et progresser à des contraintes bien **inférieures** à fy, puis provoquer une rupture brutale après des millions de cycles. Les détails soudés, les trous, les angles vifs sont les points faibles. On vérifie la **variation** de contrainte Δσ par rapport à des courbes de résistance à la fatigue (catégories de détails).

## La rupture fragile
Certains aciers (surtout épais, à basse température, ou avec des défauts de soudure) peuvent rompre **sans plastification**. On choisit des nuances résilientes (essais Charpy), on soigne les soudures et on évite les entailles.

> [!retenir]
> - Me = fy W(él) ; Mp = fy W(pl) ; facteur de forme 1,5 (rectangle), ≈ 1,13 (IPE).
> - Rotules plastiques et mécanisme : réserve des structures hyperstatiques ductiles.
> - σ(max) = Kt σ(nom) ; Kt ≈ 3 près d'un trou.
> - Fatigue sous charges répétées ; rupture fragile : choisir des aciers résilients, soigner les détails.`,
 exercices:[
  {t:"Moment plastique d'un rectangle", d:1, e:`Calculer Me et Mp d'un plat d'acier S355 de 100 × 200 mm (fléchi sur sa grande hauteur).`, c:`Me = 355 × 100 × 200²/6 = **236,7 kN·m** ; Mp = 355 × 100 × 200²/4 = **355 kN·m** (facteur 1,5).`},
  {t:"Réserve plastique d'un IPE", d:1, e:`Un IPE 300 a W(él) = 557 cm³ et W(pl) = 628 cm³. Calculer Me, Mp (S235) et le facteur de forme.`, c:`Me = 235 × 557 × 10³ = **130,9 kN·m** ; Mp = 235 × 628 × 10³ = **147,6 kN·m** ; facteur = 628/557 = **1,13**.`},
  {t:"Plat percé", d:2, e:`Un plat de 80 × 10 mm en S235, percé d'un trou de 18 mm pour un boulon, est tendu à 90 kN. Calculer σ(nominale) dans la section nette et la contrainte maximale au bord du trou (Kt = 3). Conclure en statique et en fatigue.`, c:`Section nette : (80 − 18) × 10 = 620 mm² → σ(nom) = 90 000/620 = **145 MPa** ; σ(max) ≈ **435 MPa**.
En **statique**, l'acier ductile se plastifie localement autour du trou et la section nette (145 < 235 MPa) suffit. En **fatigue** (charges répétées), ce pic de contrainte est le point d'amorçage d'une fissure : on vérifie Δσ avec la catégorie de détail « trou » ou l'on préfère un assemblage soudé bien conçu ou des boulons précontraints.`},
  {t:"Analyse limite d'une poutre", d:2, e:`Une poutre continue encastrée à ses deux extrémités, de 6 m, a un moment plastique Mp = 90 kN·m. Calculer la charge uniforme qui provoque la première rotule (calcul élastique, M(appuis) = qL²/12) et la charge de ruine (q = 16 Mp/L²).`, c:`Première rotule : q = 12 × 90/36 = **30 kN/m** ; ruine : q = 16 × 90/36 = **40 kN/m**.
La redistribution plastique offre **33 %** de réserve, à condition que la section soit ductile (pas de voilement local).`},
  {t:"Choisir un détail de soudure", d:3, e:`Une poutre de pont roulant en acier est soumise à des millions de cycles de chargement. Le projeteur hésite entre souder un raidisseur avec une soudure d'angle qui s'arrête brusquement au milieu de la semelle tendue, ou le prolonger et l'arrêter dans une zone comprimée. Que conseiller et pourquoi ?`, c:`Une fin de soudure brutale sur une **semelle tendue** crée une forte **concentration de contraintes** et un défaut géométrique : c'est un détail de mauvaise catégorie en **fatigue** (fissures après un nombre limité de cycles).
Conseil : **ne pas terminer** la soudure dans la zone tendue ; arrêter le raidisseur avant la semelle tendue (ou dans une zone comprimée), adoucir les extrémités (meulage, congés), choisir un acier résilient, et vérifier la variation de contrainte Δσ avec la catégorie de détail correspondante.`}
 ],
 quiz:[
  {q:"Facteur de forme d'une section rectangulaire :", o:["1,5","1,13","3","1"], r:0, e:"W(pl)/W(él) = (bh²/4)/(bh²/6)."},
  {q:"Une rotule plastique :", o:["Tourne sous un moment constant égal à Mp","Est une articulation boulonnée","Supprime l'effort tranchant","Est fragile"], r:0, e:"Section totalement plastifiée."},
  {q:"Coefficient de concentration près d'un petit trou dans une plaque tendue :", o:["≈ 3","≈ 1","≈ 0,5","≈ 10 toujours"], r:0, e:"Kt."},
  {q:"La fatigue se produit sous :", o:["Des charges répétées","Une charge unique très forte","Une charge permanente","Aucune charge"], r:0, e:"Millions de cycles."},
  {q:"Poutre bi-encastrée sous charge uniforme : la ruine plastique a lieu pour :", o:["q = 16 Mp/L²","q = 8 Mp/L²","q = 12 Mp/L²","q = 24 Mp/L²"], r:0, e:"Trois rotules."}
 ]},

{id:"mmc-9", niv:3, titre:"La méthode des éléments finis : principe et contrôle des résultats", duree:50, contenu:`## Le principe
Les équations de la MMC (équilibre, loi de Hooke, compatibilité) ne se résolvent à la main que pour des formes simples. La **méthode des éléments finis** (MEF) les résout de façon approchée pour n'importe quelle forme :
1. On **découpe** la structure en petits éléments (barres, poutres, coques, briques) reliés par des **nœuds** : c'est le **maillage** ;
2. Dans chaque élément, le déplacement est approché par des fonctions simples (fonctions de forme) qui dépendent des déplacements des nœuds ;
3. On écrit pour chaque élément sa **matrice de rigidité** (à partir de l'énergie de déformation) ;
4. On **assemble** et l'on résout le système [K]{u} = {F} (voir le calcul matriciel en Outils mathématiques) ;
5. On en déduit les **déformations** et les **contraintes** dans chaque élément.

## Les types d'éléments
| Élément | Usage |
|---|---|
| Barre | Treillis, tirants, contreventements |
| Poutre | Poteaux, poutres, portiques |
| Plaque, coque | Dalles, radiers, voiles, réservoirs |
| Volumique (brique, tétraèdre) | Massifs, nœuds complexes, sols |
Le nombre d'inconnues est le **nombre de degrés de liberté** : 6 par nœud en 3D pour les poutres et coques (3 translations, 3 rotations). Un modèle de bâtiment courant en compte des dizaines de milliers.

## Le maillage et la précision
- Plus le maillage est **fin**, plus le résultat est précis… et plus le calcul est long ;
- On **raffine** là où les contraintes varient vite (angles, ouvertures, appuis, charges concentrées) ;
- On vérifie la **convergence** : en raffinant, les résultats doivent se stabiliser.
**Singularités** : à un angle rentrant ou sous une charge ponctuelle, la contrainte calculée **augmente sans fin** quand on raffine : c'est un artefact du modèle (la réalité plastifie ou fissure). On lit alors les **efforts résultants** (moments, efforts par mètre) plutôt que les pics de contrainte.

## Contrôler les résultats : la responsabilité de l'ingénieur
Un logiciel calcule ce qu'on lui donne, y compris des erreurs. Contrôles indispensables :
1. **Équilibre** : la somme des réactions doit égaler la somme des charges ;
2. **Ordres de grandeur** : comparer quelques résultats à des **calculs manuels** simples (q L²/8, 5 q L⁴/384 E I, N par descente de charges) ;
3. **Déformée** : elle doit être plausible (sens, forme, continuité) ;
4. **Unités** et **données** : matériaux, sections, épaisseurs, appuis, cas de charge et combinaisons ;
5. **Hypothèses** : modules adaptés (béton fissuré, fluage), liaisons réalistes (encastrement ou articulation).

> [!exemple] Vérifier une dalle
> Dalle de 5 m sur deux appuis (bande de 1 m), q = 10 kN/m², h = 20 cm, E = 30 000 MPa.
> Moment manuel : q L²/8 = 10 × 25/8 = **31,3 kN·m/m** ; flèche manuelle : 5 q L⁴/(384 E I) avec I = 1 × 0,2³/12 = 6,67 × 10⁻⁴ m⁴ → 5 × 10 × 625/(384 × 30 × 10⁶ × 6,67 × 10⁻⁴) = **4,1 mm**.
> Si le logiciel donne 3,1 kN·m/m ou 41 mm, il y a une erreur (charge en kN au lieu de kN/m², épaisseur en m au lieu de cm…).

> [!retenir]
> - Maillage → matrices élémentaires → assemblage → [K]{u} = {F} → contraintes.
> - Raffiner là où ça varie ; vérifier la convergence ; se méfier des singularités.
> - Toujours vérifier : équilibre, ordres de grandeur, déformée, unités, hypothèses.`,
 exercices:[
  {t:"Degrés de liberté", d:1, e:`Un modèle de portique 3D comporte 150 nœuds d'éléments poutres (6 degrés de liberté par nœud). Combien d'inconnues ? Et un modèle plan de 1 000 nœuds à 3 degrés de liberté ?`, c:`3D : 150 × 6 = **900 inconnues** ; plan : 1 000 × 3 = **3 000 inconnues** (moins les degrés bloqués par les appuis).`},
  {t:"Contrôle de l'équilibre", d:1, e:`Un logiciel donne pour une dalle de 8 × 6 m chargée à 12 kN/m² des réactions totales de 488 kN. Est-ce cohérent ?`, c:`Charge totale : 12 × 48 = **576 kN** ≠ 488 kN : il manque **88 kN** (15 %) : une partie de la charge n'est pas appliquée (zone oubliée, cas de charge mal défini) ou une partie est transmise à un appui non pris en compte. Il faut chercher l'erreur avant d'exploiter les résultats.`},
  {t:"Vérifier une flèche", d:2, e:`Pour la dalle de l'exemple du cours, le logiciel donne une flèche de 12,5 mm. Proposer deux explications possibles (une erreur, une hypothèse légitime).`, c:`Flèche manuelle élastique non fissurée : **4,1 mm** ; 12,5 mm est trois fois plus.
Erreur possible : **module** E saisi trop faible, **épaisseur** erronée, charge doublée.
Hypothèse légitime : le logiciel tient compte de la **fissuration** et du **fluage** (module à long terme ≈ E/3) : la flèche à long terme peut alors être 2 à 3 fois la flèche instantanée. Il faut savoir quelle hypothèse a été retenue.`},
  {t:"Singularité de contrainte", d:2, e:`Dans le modèle d'un voile percé d'une ouverture, la contrainte au coin de l'ouverture passe de 8 à 15 puis 28 MPa quand on divise la taille des mailles par 2 à chaque fois. Comment l'interpréter et que faire ?`, c:`La contrainte **ne converge pas** : c'est une **singularité** (angle rentrant vif). La valeur dépend du maillage et n'a pas de sens physique (le béton fissure, l'acier plastifie localement).
On lit plutôt les **efforts résultants** sur une largeur (N, M par mètre) à une certaine distance du coin, et l'on dispose des **armatures de renfort** en diagonale aux angles des ouvertures, conformément aux règles du béton armé.`},
  {t:"Plan de vérification d'un modèle", d:3, e:`On vous remet le modèle aux éléments finis d'un immeuble R+5 réalisé par un stagiaire. Établir une liste de vérifications avant d'utiliser les résultats pour ferrailler.`, c:`1) **Géométrie** : niveaux, portées, épaisseurs, sections conformes aux plans.
2) **Matériaux** : classes de béton et d'acier, modules (instantané/long terme).
3) **Appuis** : encastrement ou articulation en pied, interaction avec le sol si nécessaire.
4) **Charges** : G, Q, vent (et séisme le cas échéant), valeurs et surfaces ; **combinaisons** ELU et ELS.
5) **Équilibre** : somme des réactions = somme des charges par cas.
6) **Ordres de grandeur** : descente de charges manuelle sur 2 ou 3 poteaux, moment d'une poutre type (q L²/8 à q L²/12), flèche d'une dalle.
7) **Déformée** et modes (pas de mécanisme, pas de nœud libre).
8) **Lecture** des résultats en efforts (pas de pics singuliers), cohérence des armatures proposées avec les règles constructives.`}
 ],
 quiz:[
  {q:"Le maillage d'un modèle aux éléments finis est :", o:["Le découpage en éléments reliés par des nœuds","Le ferraillage","La charge","Le plan d'architecte"], r:0, e:"Première étape."},
  {q:"Une singularité de contrainte :", o:["Augmente sans fin quand on raffine le maillage","Disparaît avec un maillage fin","Est toujours la valeur à retenir","N'existe pas"], r:0, e:"Angle rentrant, charge ponctuelle."},
  {q:"Le premier contrôle d'un modèle est :", o:["L'équilibre réactions/charges","La couleur des résultats","Le nombre de nœuds","La vitesse de calcul"], r:0, e:"Somme des réactions."},
  {q:"Degrés de liberté d'un nœud de poutre en 3D :", o:["6","3","2","1"], r:0, e:"3 translations et 3 rotations."},
  {q:"Les résultats d'un logiciel sont valables :", o:["Si les données et hypothèses sont correctes et vérifiées","Toujours","Jamais","Seulement en 2D"], r:0, e:"Responsabilité de l'ingénieur."}
 ]}
]});
