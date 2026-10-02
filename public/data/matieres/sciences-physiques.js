A.addMatiere({
 id:'sp', titre:'Sciences physiques', court:'Physique-chimie', groupe:'fond', icone:'atom', couleur:'#0E8C95', niveau:'Débutant', heures:22, ordre:3,
 resume:"Grandeurs et unités, masse et poids, forces et équilibre, énergie et puissance, électricité et chimie des matériaux de construction.",
 objectifs:["Utiliser le système international d'unités","Distinguer masse, poids et masse volumique","Appliquer l'équilibre d'un solide (forces et moments)","Calculer énergie, puissance et grandeurs électriques","Comprendre la prise du ciment et la corrosion des aciers"],
 applications:["Poids propre des éléments (béton, acier, agglos)","Puissance d'une pompe ou d'une bétonnière","Choix d'une section de câble électrique","Protection des armatures contre la rouille"],
 chapitres:[
{id:'sp-1', niv:1, titre:'Grandeurs physiques et unités SI', duree:20, contenu:`## Le système international (SI)
| Grandeur | Unité SI | Symbole |
|---|---|---|
| Longueur | mètre | m |
| Masse | kilogramme | kg |
| Temps | seconde | s |
| Température | kelvin (ou °C) | K |
| Intensité électrique | ampère | A |
| Force | newton | N = kg·m/s² |
| Pression, contrainte | pascal | Pa = N/m² |
| Énergie | joule | J = N·m |
| Puissance | watt | W = J/s |

## Analyse dimensionnelle
Une formule juste est **homogène** : les deux membres ont la même unité. C'est un moyen très efficace de détecter une erreur.

> [!exemple]
> σ = N / A : des newtons divisés par des m² donnent des N/m² = Pa : c'est bien une contrainte.
> f = 5 q L⁴ / (384 E I) : (N/m × m⁴) / (N/m² × m⁴) = m : c'est bien une longueur.

## Chiffres significatifs et incertitudes
Une mesure au mètre ruban est précise à ±1 mm environ ; un résultat de calcul ne peut pas être plus précis que les données. Donner « 4,49 cm² » est raisonnable, « 4,49327 cm² » n'a pas de sens.

## Ordres de grandeur utiles
- Accélération de la pesanteur : **g ≈ 9,81 m/s²** (on prend souvent 10).
- Pression atmosphérique : ≈ 101 300 Pa ≈ 1 bar.
- Résistance d'un béton courant : 25 MPa ; d'un acier HA : 500 MPa.

> [!retenir]
> Toujours écrire l'unité à côté d'un résultat et vérifier l'homogénéité des formules.`,
 quiz:[
  {q:"L'unité SI de la force est :", o:["le kilogramme","le newton","le pascal","le joule"], r:1, e:"1 N = 1 kg·m/s²."},
  {q:"1 pascal correspond à :", o:["1 N/m²","1 N/mm²","1 kg/m²","1 J/s"], r:0, e:"Le pascal est une force par unité de surface : N/m²."},
  {q:"Une formule est homogène si :", o:["Elle donne un nombre entier","Ses deux membres ont la même unité","Elle n'a pas d'unité","Elle contient g"], r:1, e:"C'est le principe de l'analyse dimensionnelle."},
  {q:"Le watt est l'unité de :", o:["L'énergie","La puissance","La pression","La force"], r:1, e:"1 W = 1 J/s."}
 ]},
{id:'sp-2', niv:1, titre:'Masse, poids et masse volumique', duree:25, contenu:`## Masse et poids
- La **masse** m (kg) est la quantité de matière.
- Le **poids** P (N) est la force exercée par la pesanteur : **P = m × g**.

## Masse volumique et poids volumique
$$ ρ = m / V   (kg/m³)        γ = ρ × g   (N/m³ ou kN/m³)

| Matériau | ρ (kg/m³) | γ (kN/m³) |
|---|---|---|
| Eau | 1 000 | 10 |
| Béton armé | 2 500 | 25 |
| Béton non armé | 2 300 | 23 |
| Acier | 7 850 | 78,5 |
| Sable sec | 1 500 à 1 700 | 15 à 17 |
| Gravier | 1 500 à 1 600 | 15 à 16 |
| Ciment en vrac | 1 200 à 1 400 | 12 à 14 |
| Bois tropical courant | 600 à 1 000 | 6 à 10 |
| Mur en agglos creux de 15 enduit | ≈ 200 kg/m² | ≈ 2 kN/m² |

> [!exemple] Poids propre d'une dalle
> Dalle pleine de 15 cm : 25 kN/m³ × 0,15 m = **3,75 kN/m²**. Pour une pièce de 4 × 5 m : 3,75 × 20 = 75 kN, soit environ 7,5 tonnes.

## Densité
La densité d est le rapport ρ / ρ(eau) : elle n'a pas d'unité. L'acier a une densité de 7,85.

## Masse volumique apparente et absolue
Pour les granulats, on distingue :
- la masse volumique **absolue** (le grain seul, ≈ 2 650 kg/m³ pour un sable siliceux) ;
- la masse volumique **apparente** (grains + vides, ≈ 1 600 kg/m³).
C'est la raison pour laquelle 1 m³ de béton demande plus d'1 m³ de matériaux secs : les petits grains remplissent les vides entre les gros.

> [!retenir]
> Béton armé : 25 kN/m³ · Acier : 78,5 kN/m³ · Eau : 10 kN/m³.`,
 quiz:[
  {q:"Le poids d'une masse de 50 kg vaut environ :", o:["50 N","500 N","5 N","5 000 N"], r:1, e:"P = m g ≈ 50 × 10 = 500 N."},
  {q:"Le poids volumique du béton armé vaut :", o:["10 kN/m³","25 kN/m³","78,5 kN/m³","15 kN/m³"], r:1, e:"On retient 25 kN/m³ dans les calculs."},
  {q:"Poids propre d'une dalle de 20 cm :", o:["2 kN/m²","5 kN/m²","20 kN/m²","0,5 kN/m²"], r:1, e:"25 × 0,20 = 5 kN/m²."},
  {q:"La densité de l'acier est :", o:["7,85","785","0,785","78,5"], r:0, e:"ρ acier / ρ eau = 7 850 / 1 000 = 7,85."}
 ]},
{id:'sp-3', niv:1, titre:'Forces et équilibre d\'un solide', duree:30, contenu:`## Qu'est-ce qu'une force ?
Une force est une action mécanique caractérisée par son **point d'application**, sa **direction**, son **sens** et son **intensité** (en N). On la représente par un vecteur.

## Principe fondamental de la statique (PFS)
Un solide est en équilibre si :
1. la **somme vectorielle des forces** est nulle : ΣFx = 0 et ΣFy = 0 ;
2. la **somme des moments** par rapport à n'importe quel point est nulle : ΣM = 0.

## Le moment d'une force
$$ M = F × d
d est le **bras de levier** : la distance perpendiculaire entre le point et la ligne d'action de la force.

> [!exemple] Levier et brouette
> Une brouette porte 80 kg (800 N) à 0,40 m de la roue ; les bras sont tenus à 1,40 m de la roue. Effort aux mains : F × 1,40 = 800 × 0,40 → F = **229 N** (environ 23 kg). C'est l'intérêt du levier.

> [!exemple] Réactions d'une poutre
> Poutre de 5 m sur deux appuis, charge de 40 kN à 2 m de l'appui A.
> Moments en A : RB × 5 = 40 × 2 → RB = 16 kN. Forces : RA = 40 − 16 = **24 kN**.

## Actions de contact et frottement
La force de frottement maximale vaut **f × N** (f : coefficient de frottement, N : effort normal). C'est ce qui empêche un mur de soutènement de glisser sur sa base.

> [!retenir]
> ΣF = 0 et ΣM = 0 : ces deux équations suffisent pour calculer les réactions de toutes les structures isostatiques (voir RDM).`,
 quiz:[
  {q:"Pour qu'un solide soit en équilibre, il faut :", o:["ΣF = 0 seulement","ΣM = 0 seulement","ΣF = 0 et ΣM = 0","Que les forces soient égales"], r:2, e:"Les deux conditions du principe fondamental de la statique."},
  {q:"Le bras de levier est :", o:["La longueur de la force","La distance perpendiculaire à la ligne d'action","Le poids","L'angle de la force"], r:1, e:"Le moment se calcule avec la distance perpendiculaire."},
  {q:"Poutre de 4 m, charge 20 kN à 1 m de A. La réaction en B vaut :", o:["5 kN","15 kN","10 kN","20 kN"], r:0, e:"RB × 4 = 20 × 1 → RB = 5 kN, RA = 15 kN."},
  {q:"La force de frottement maximale dépend :", o:["De la surface de contact","De l'effort normal et du coefficient f","De la vitesse","Du volume"], r:1, e:"Fmax = f × N."}
 ]},
{id:'sp-4', niv:2, titre:'Énergie, travail et puissance', duree:25, contenu:`## Travail d'une force
$$ W = F × d × cos θ   (joules)
Lever une charge de masse m d'une hauteur h demande un travail **W = m g h**.

## Puissance
$$ P = W / t   (watts)        1 kW = 1 000 W ;  1 ch ≈ 736 W

> [!exemple] Monte-charge
> Monter 500 kg de matériaux de 9 m en 30 s : W = 500 × 9,81 × 9 = 44 145 J ; P = 44 145 / 30 = 1 470 W. Avec un rendement de 70 % : moteur de **2,1 kW** minimum.

## Pompe à eau
Puissance hydraulique : **P = ρ g Q H** (Q en m³/s, H hauteur manométrique en m).

> [!exemple]
> Remplir un château d'eau à 15 m avec un débit de 2 L/s : P = 1 000 × 9,81 × 0,002 × 15 = 294 W. Rendement 60 % : moteur de **0,5 kW** environ.

## Énergie électrique
L'énergie consommée s'exprime en **kWh** : E = P × t. Un climatiseur de 1,2 kW fonctionnant 8 h consomme 9,6 kWh par jour.

## Rendement
η = puissance utile / puissance absorbée (toujours inférieur à 1). Une bétonnière de 1,5 kW avec un rendement de 80 % fournit 1,2 kW utiles.

> [!retenir]
> W = m g h pour lever une charge ; P = W/t ; P hydraulique = ρ g Q H ; E (kWh) = P (kW) × t (h).`,
 quiz:[
  {q:"Le travail pour lever 100 kg de 3 m vaut environ :", o:["300 J","3 000 J","30 J","30 000 J"], r:1, e:"W = 100 × 10 × 3 = 3 000 J."},
  {q:"1 kWh correspond à :", o:["1 000 J","3 600 J","3 600 000 J","60 000 J"], r:2, e:"1 kWh = 1 000 W × 3 600 s = 3,6 × 10⁶ J."},
  {q:"Un appareil de 2 kW utilisé 5 h consomme :", o:["2,5 kWh","10 kWh","7 kWh","0,4 kWh"], r:1, e:"E = 2 × 5 = 10 kWh."},
  {q:"Le rendement d'une machine est :", o:["Toujours supérieur à 1","Égal à 1","Inférieur à 1","Négatif"], r:2, e:"Il y a toujours des pertes."}
 ]},
{id:'sp-5', niv:2, titre:'Électricité appliquée au bâtiment', duree:30, contenu:`## Grandeurs de base
- **Tension U** (volts, V) : 230 V en monophasé, 400 V entre phases en triphasé (réseau CIE).
- **Intensité I** (ampères, A).
- **Résistance R** (ohms, Ω). Loi d'Ohm : **U = R × I**.
- **Puissance** : en courant continu P = U I ; en alternatif monophasé **P = U I cos φ** ; en triphasé **P = √3 U I cos φ**.

> [!exemple] Intensité d'un circuit
> Un chauffe-eau de 2 000 W sous 230 V (cos φ = 1) : I = 2 000 / 230 = **8,7 A** → circuit 2,5 mm² protégé par un disjoncteur 20 A.

## Choix des sections de câbles (cuivre)
| Usage | Section | Protection |
|---|---|---|
| Éclairage (8 points max) | 1,5 mm² | 10 ou 16 A |
| Prises 16 A (8 max) | 2,5 mm² | 20 A |
| Chauffe-eau, climatiseur | 2,5 mm² | 20 A |
| Plaque de cuisson | 6 mm² | 32 A |

## Chute de tension
Un câble long et fin provoque une chute de tension : **ΔU = 2 ρ L I / S** en monophasé (ρ cuivre ≈ 0,0225 Ω·mm²/m). On limite ΔU à 3 % pour l'éclairage et 5 % pour les autres usages.

> [!exemple]
> Pompe de 10 A à 40 m du tableau en 2,5 mm² : ΔU = 2 × 0,0225 × 40 × 10 / 2,5 = 7,2 V, soit 3,1 % : acceptable pour un moteur.

## Sécurité
> [!attention]
> Le **différentiel 30 mA** coupe le courant en cas de fuite vers la terre (contact avec une personne). Il ne remplace pas la **prise de terre**, qui doit avoir une résistance faible (souvent moins de 100 Ω avec un différentiel 30 mA ; plus c'est bas, mieux c'est).

## Le facteur de puissance
Les moteurs (pompes, climatiseurs) ont un cos φ inférieur à 1 (0,8 environ) : ils appellent plus de courant pour la même puissance utile.`,
 quiz:[
  {q:"La loi d'Ohm s'écrit :", o:["P = U I","U = R I","I = U R","R = U I"], r:1, e:"U = R × I."},
  {q:"Section de câble pour un circuit de prises 16 A :", o:["1,5 mm²","2,5 mm²","6 mm²","10 mm²"], r:1, e:"Prises : 2,5 mm² protégés par 20 A."},
  {q:"Intensité absorbée par un appareil de 1 150 W sous 230 V (cos φ = 1) :", o:["2 A","5 A","10 A","0,2 A"], r:1, e:"1 150 / 230 = 5 A."},
  {q:"Le différentiel 30 mA protège :", o:["Les câbles contre la surcharge","Les personnes contre les fuites de courant","Contre la foudre","Contre les coupures CIE"], r:1, e:"Il détecte un courant de fuite et coupe."}
 ]},
{id:'sp-6', niv:2, titre:'Chimie des matériaux : ciment, corrosion, durabilité', duree:25, contenu:`## L'hydratation du ciment
Le ciment Portland est surtout constitué de silicates de calcium (C₃S, C₂S). Mélangés à l'eau, ils forment des **silicates de calcium hydratés (C-S-H)**, la « colle » du béton, et de la **portlandite** Ca(OH)₂.
- La réaction est **exothermique** : elle dégage de la chaleur (attention aux grands volumes coulés par temps chaud).
- Elle a besoin d'eau pendant des jours : d'où l'importance de la **cure** (arrosage, protection contre le soleil et le vent).

## Le rapport eau / ciment
Pour hydrater le ciment, il suffit d'environ 0,25 kg d'eau par kg de ciment. On en met davantage (E/C ≈ 0,5) pour obtenir un béton maniable, mais **l'excès d'eau laisse des pores** : le béton est moins résistant et moins durable.

> [!attention]
> Ajouter de l'eau sur le chantier pour « fluidifier » le béton peut faire perdre 20 à 30 % de résistance. Utilisez plutôt un **plastifiant** ou vibrez davantage.

## Pourquoi les aciers ne rouillent pas dans le béton
Le béton est très **basique** (pH ≈ 12,5 à 13) grâce à la portlandite : l'acier est protégé par une fine couche passive. Deux phénomènes détruisent cette protection :
1. la **carbonatation** : le CO₂ de l'air réagit avec la chaux et fait baisser le pH ; elle progresse de quelques millimètres par an depuis la surface ;
2. les **chlorures** (bord de mer, sable de mer non lavé) qui attaquent l'acier même en milieu basique.

> [!retenir]
> Un **enrobage suffisant** et un **béton compact** (bien dosé, bien vibré, bien curé) protègent les aciers pendant toute la durée de vie de l'ouvrage. N'utilisez jamais de sable de mer non lavé.

## La rouille
Fe → oxydes de fer : la rouille occupe **plusieurs fois le volume** de l'acier d'origine. Elle fait éclater le béton d'enrobage (épaufrures) et met les aciers à nu : désordre très fréquent sur les balcons et poteaux en bord de lagune.`,
 quiz:[
  {q:"Le pH d'un béton sain est environ :", o:["7","3","12,5 à 13","10"], r:2, e:"Le béton est fortement basique, ce qui protège l'acier."},
  {q:"La carbonatation est due :", o:["À l'eau de pluie","Au CO₂ de l'air","Au ciment","Au sable"], r:1, e:"Le CO₂ réagit avec la chaux et fait baisser le pH."},
  {q:"Trop d'eau dans le béton entraîne :", o:["Une meilleure résistance","Plus de pores et moins de résistance","Une prise plus rapide","Aucun effet"], r:1, e:"L'eau en excès s'évapore et laisse des vides."},
  {q:"Pourquoi interdire le sable de mer non lavé ?", o:["Il est trop fin","Ses chlorures corrodent les aciers","Il coûte cher","Il est trop lourd"], r:1, e:"Les chlorures détruisent la protection des armatures."}
 ]}
]});
