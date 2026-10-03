/* =====================================================================
   Thermique du bâtiment — cours complet (3 niveaux)
   Débutant : modes de transfert, matériaux et inertie, flux à travers
              une paroi, sources de chaleur d'un logement, confort d'été
   Intermédiaire : résistance et coefficient U, échanges superficiels et
              rayonnement, toitures et ponts thermiques, apports solaires,
              vitrages, renouvellement d'air (sensible et latent)
   Avancé : bilan thermique et climatisation, régime variable (inertie),
            systèmes de climatisation, performance énergétique, eau
            chaude solaire
   ===================================================================== */
A.addMatiere({
 id:"therm",
 titre:"Thermique du bâtiment",
 court:"Thermique",
 groupe:"phys",
 icone:"thermo",
 couleur:"#C8363B",
 niveau:"Intermédiaire",
 heures:55,
 ordre:2,
 prerequis:["sp", "pb"],
 resume:"Comprendre et calculer les échanges de chaleur d'un bâtiment tropical : conduction, convection, rayonnement, résistance thermique et coefficient U, toitures et ponts thermiques, apports solaires et vitrages, renouvellement d'air sensible et latent, bilan de climatisation, inertie, systèmes de climatisation, consommation et eau chaude solaire.",
 objectifs:[
  "Distinguer et calculer conduction, convection et rayonnement",
  "Calculer la résistance R et le coefficient U d'une paroi multicouche",
  "Comparer des toitures et traiter les ponts thermiques",
  "Évaluer les apports solaires par les vitrages et les parois opaques",
  "Calculer les charges sensibles et latentes de l'air neuf",
  "Établir le bilan thermique d'un local et choisir un climatiseur",
  "Exploiter l'inertie thermique et estimer les consommations",
  "Dimensionner un chauffe-eau solaire"
 ],
 applications:[
  "Choix d'un isolant de toiture et d'un faux plafond",
  "Comparaison agglos, BTC, brique et béton",
  "Choix des vitrages et des protections solaires",
  "Dimensionnement des climatiseurs d'un bureau ou d'une villa",
  "Réduction de la facture de climatisation",
  "Eau chaude solaire d'un hôtel ou d'un centre de santé"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"therm-1", niv:1, titre:"Chaleur, température et modes de transfert", duree:45, contenu:`## Température et chaleur
- La **température** (°C ou K) mesure l'agitation des molécules : T(K) = T(°C) + 273,15. Un écart de 1 °C égale un écart de 1 K.
- La **chaleur** (J) est une énergie qui passe **toujours du corps chaud vers le corps froid**.
- Le **flux thermique** Φ (W = J/s) est la chaleur transmise chaque seconde ; la **densité de flux** φ (W/m²) est le flux par m² de paroi : Φ = φ × S.

## Les trois modes de transfert
**1. La conduction** : la chaleur traverse un matériau de proche en proche, sans déplacement de matière (un mur, une dalle, une tôle).
$$ φ = λ × ΔT / e     (loi de Fourier)
λ : **conductivité thermique** du matériau (W/(m·K)) ; e : épaisseur (m) ; ΔT : écart de température entre les deux faces.
> [!exemple] Dalle en béton de 20 cm
> λ = 2 W/(m·K), écart de 5 °C entre les faces : φ = 2 × 5/0,20 = **50 W/m²**.

**2. La convection** : la chaleur est transportée par un fluide en mouvement (air, eau) au contact d'une surface.
$$ φ = h × (T(surface) − T(air))
h : coefficient de convection (2 à 5 W/(m²·K) en air calme, 10 à 25 avec du vent).
> [!exemple] Plafond chaud
> Plafond à 40 °C, air de la pièce à 30 °C, h = 8 W/(m²·K) : φ = 8 × 10 = **80 W/m²** cédés à l'air.

**3. Le rayonnement** : tout corps émet un rayonnement infrarouge, d'autant plus intense qu'il est chaud ; il traverse l'air (et le vide) sans le chauffer.
$$ φ = ε × σ × T⁴     σ = 5,67 × 10⁻⁸ W/(m²·K⁴), T en kelvins
ε : **émissivité** de la surface (0,9 pour la plupart des matériaux de construction, 0,05 pour l'aluminium poli).
> [!exemple] Tôle chauffée par le soleil
> Une tôle à 60 °C (333 K) d'émissivité 0,9 émet 0,9 × 5,67 × 10⁻⁸ × 333⁴ ≈ **630 W/m²**. Face à un plafond à 32 °C, l'échange net reste d'environ **190 W/m²** : c'est la chaleur rayonnante que l'on « sent » sous une toiture en tôle.

## Les trois modes agissent ensemble
Sous le soleil, une toiture **absorbe** le rayonnement solaire, s'échauffe, **conduit** la chaleur vers sa sous-face, qui la **rayonne** et la cède par **convection** à l'air de la pièce. Chaque solution technique agit sur un mode :
| Mode | Solution |
|---|---|
| Absorption du soleil | Couleur claire, peinture réfléchissante, ombrage |
| Conduction | Isolant (faible λ), épaisseur |
| Rayonnement | Lame d'air avec feuille réfléchissante (faible émissivité) |
| Convection | Ventilation des combles, mouvement d'air dans la pièce |

> [!retenir]
> - La chaleur va du chaud vers le froid ; Φ (W) = φ (W/m²) × S.
> - Conduction : φ = λ ΔT/e ; convection : φ = h ΔT ; rayonnement : φ = ε σ T⁴.
> - Une toiture tropicale combine les trois : agir sur chacun.`,
 exercices:[
  {t:"Conversion et flux", d:1, e:`a) Convertir 32 °C et 24 °C en kelvins ; quel est l'écart en K ?
b) Une densité de flux de 45 W/m² traverse un mur de 18 m². Calculer le flux total.`, c:`a) 32 + 273,15 = **305,15 K** ; 24 + 273,15 = **297,15 K** ; écart **8 K** (= 8 °C).
b) Φ = 45 × 18 = **810 W**.`},
  {t:"Conduction à travers une cloison", d:1, e:`Une cloison en brique de 10 cm (λ = 0,6 W/(m·K)) sépare un local à 31 °C d'un local climatisé à 24 °C (on prend les températures de surface égales à celles des locaux).
Calculer la densité de flux et le flux pour 12 m².`, c:`φ = 0,6 × 7/0,10 = **42 W/m²** ; Φ = 42 × 12 = **504 W** (calcul majorant : les échanges en surface réduisent ce flux, voir chapitre suivant).`},
  {t:"Identifier les modes", d:1, e:`Indiquer le mode de transfert principal : a) la chaleur ressentie au visage face à un four ouvert ; b) l'air chaud qui monte au-dessus d'un réchaud ; c) la poignée métallique d'une casserole qui devient chaude ; d) la fraîcheur apportée par un ventilateur.`, c:`a) **Rayonnement** ; b) **Convection** naturelle ; c) **Conduction** dans le métal ; d) **Convection** forcée (et évaporation de la sueur).`},
  {t:"Convection sur une façade", d:2, e:`Une façade ensoleillée atteint 45 °C ; l'air extérieur est à 31 °C. Calculer la densité de flux cédée par convection avec un air calme (h = 4) puis avec un vent qui donne h = 15 W/(m²·K).`, c:`Air calme : φ = 4 × 14 = **56 W/m²** ; vent : φ = 15 × 14 = **210 W/m²**.
Le vent refroidit fortement les façades : c'est une raison de plus pour bien exposer les bâtiments aux vents dominants.`},
  {t:"Rayonnement d'une toiture", d:2, e:`Calculer la densité de flux émise par une surface à 70 °C d'émissivité 0,9, puis par une surface aluminium à 70 °C d'émissivité 0,05. Conclure.`, c:`T = 343 K → T⁴ = 1,384 × 10¹⁰.
ε = 0,9 : φ = 0,9 × 5,67 × 10⁻⁸ × 1,384 × 10¹⁰ = **706 W/m²**.
ε = 0,05 : φ = **39 W/m²**.
Une sous-face de toiture revêtue d'aluminium rayonne presque 20 fois moins vers la pièce : c'est le principe des **écrans réfléchissants** sous toiture.`}
 ],
 quiz:[
  {q:"La chaleur passe toujours :", o:["Du chaud vers le froid","Du froid vers le chaud","Du haut vers le bas","De l'intérieur vers l'extérieur"], r:0, e:"Second principe."},
  {q:"La loi de Fourier concerne :", o:["La conduction","La convection","Le rayonnement","L'évaporation"], r:0, e:"φ = λ ΔT/e."},
  {q:"Un ventilateur agit surtout sur :", o:["La convection","La conduction dans les murs","Le rayonnement solaire","L'émissivité"], r:0, e:"Mouvement d'air."},
  {q:"L'émissivité de l'aluminium poli est d'environ :", o:["0,05","0,9","1","0,5"], r:0, e:"Il rayonne très peu."},
  {q:"Le rayonnement d'une surface est proportionnel à :", o:["T⁴ (en kelvins)","T","T²","1/T"], r:0, e:"Loi de Stefan-Boltzmann."}
 ]},

{id:"therm-6", niv:1, titre:"Matériaux isolants et inertie : les bases", duree:45, contenu:`## La conductivité thermique λ
Plus λ est **petit**, plus le matériau est **isolant**.
| Matériau | λ (W/(m·K)) |
|---|---|
| Aluminium | 230 |
| Acier | 50 |
| Béton armé | 2,0 |
| Pierre, granite | 2,5 à 3,5 |
| Verre | 1,0 |
| Brique de terre cuite pleine | 0,6 à 0,8 |
| Bloc de terre comprimée (BTC) | 0,8 à 1,1 |
| Bois (iroko, samba) | 0,13 à 0,18 |
| Plâtre | 0,25 à 0,35 |
| Laine de verre, laine de roche | 0,032 à 0,040 |
| Polystyrène expansé (PSE) | 0,032 à 0,038 |
| Polyuréthane | 0,022 à 0,028 |
| Air immobile | 0,025 |
On appelle **isolant thermique** un matériau de λ ≤ 0,065 W/(m·K). Les isolants doivent leur efficacité à l'**air immobile** emprisonné dans leurs fibres ou leurs cellules.

## La résistance thermique d'une couche
$$ R = e / λ     (m²·K/W)
Plus R est grand, mieux la couche isole.
> [!exemple] Ce que valent 5 cm de laine minérale
> R = 0,05/0,04 = **1,25 m²·K/W**.
> Pour la même résistance en béton : e = R × λ = 1,25 × 2 = **2,5 m** de béton !
> Les murs lourds ne sont pas isolants : leur intérêt est ailleurs (l'inertie).

## Choisir un isolant sous les tropiques
- **Laine minérale** : bon marché, incombustible, mais à protéger de l'humidité et des rongeurs ; idéale sur faux plafond ;
- **Polystyrène, polyuréthane** : insensibles à l'eau, utilisés sur toitures-terrasses (sous protection) ; combustibles, à protéger du feu et des UV ;
- **Isolants naturels** : fibres de coco, de kénaf, paille, liège : locaux et peu énergivores, mais à traiter contre les insectes et l'humidité ;
- **Écrans réfléchissants** (aluminium) : efficaces contre le rayonnement sous toiture s'ils font face à une lame d'air ; à garder propres.

## L'inertie thermique
L'**inertie** est la capacité d'un matériau à **stocker la chaleur** et à la restituer **plus tard**. Elle dépend de sa **capacité thermique volumique** ρ × c :
| Matériau | ρ (kg/m³) | c (J/(kg·K)) | ρ c (MJ/(m³·K)) |
|---|---|---|---|
| Béton | 2 400 | 880 | 2,1 |
| BTC, terre | 1 900 | 900 | 1,7 |
| Brique | 1 800 | 840 | 1,5 |
| Bois | 600 | 1 600 | 1,0 |
| Laine minérale | 30 | 1 000 | 0,03 |
| Eau | 1 000 | 4 180 | 4,2 |
Chaleur stockée par une couche de surface S, épaisseur e, dont la température s'élève de ΔT :
$$ Q = ρ × c × S × e × ΔT
> [!exemple] Une dalle qui stocke la chaleur
> 1 m² de dalle béton de 20 cm qui s'échauffe de 10 °C stocke 2 400 × 880 × 0,20 × 10 = 4,2 MJ, soit **1,2 kWh** ; elle le restituera dans la pièce la nuit suivante.

## Isolation ou inertie ?
- L'**isolant** freine le passage de la chaleur ;
- L'**inertie** retarde et lisse les variations de température (voir le régime variable au niveau avancé).
Une paroi lourde **exposée au soleil** et non ventilée la nuit restitue la chaleur la nuit : mauvais au sud humide. Une paroi lourde **isolée côté extérieur** ou **à l'ombre**, rafraîchie la nuit, stabilise la température : excellent au nord sec.

> [!retenir]
> - Isolant : λ ≤ 0,065 ; R = e/λ.
> - 5 cm de laine (R = 1,25) ≈ 2,5 m de béton.
> - Inertie : stockage de chaleur Q = ρ c S e ΔT.
> - Isolation et inertie jouent des rôles différents et complémentaires.`,
 exercices:[
  {t:"Résistances de couches", d:1, e:`Calculer la résistance thermique de : a) 20 cm de béton ; b) 15 cm de BTC (λ = 1,0) ; c) 4 cm de polystyrène (λ = 0,035) ; d) 2,5 cm de lambris bois (λ = 0,15).`, c:`a) 0,20/2 = **0,10 m²·K/W** ; b) 0,15/1,0 = **0,15** ; c) 0,04/0,035 = **1,14** ; d) 0,025/0,15 = **0,17**.
Les 4 cm de polystyrène isolent onze fois plus que 20 cm de béton.`},
  {t:"Épaisseur équivalente", d:1, e:`Quelle épaisseur de brique (λ = 0,6) faut-il pour obtenir la même résistance que 8 cm de laine de verre (λ = 0,04) ?`, c:`R = 0,08/0,04 = **2,0 m²·K/W** → e = 2,0 × 0,6 = **1,20 m** de brique.`},
  {t:"Isolant ou non ?", d:1, e:`Parmi les matériaux suivants, lesquels sont des isolants thermiques au sens strict ? Bois (0,15) ; liège (0,045) ; plâtre (0,30) ; fibre de coco (0,05) ; béton cellulaire (0,11).`, c:`Isolants (λ ≤ 0,065) : **liège** et **fibre de coco**.
Le bois et le béton cellulaire sont des matériaux **peu conducteurs** mais pas des isolants au sens strict ; le plâtre non plus.`},
  {t:"Chaleur stockée par un mur", d:2, e:`Un mur en BTC de 30 cm (ρ c = 1,7 MJ/(m³·K)) de 12 m² s'échauffe en moyenne de 6 °C dans la journée.
Quelle chaleur stocke-t-il (en MJ et en kWh) ?`, c:`Q = 1,7 × 10⁶ × 12 × 0,30 × 6 = **36,7 MJ** = 36,7/3,6 = **10,2 kWh**.
Si cette chaleur est évacuée la nuit par ventilation, le mur absorbe autant de chaleur le lendemain sans que la pièce ne chauffe.`},
  {t:"Choisir un isolant de toiture", d:2, e:`Pour une toiture-terrasse en béton accessible, on hésite entre de la laine minérale et du polystyrène extrudé posés sur la dalle sous la protection. Lequel choisir ? Justifier.`, c:`Sur une toiture-terrasse, l'isolant peut être **humide** (infiltrations, condensation) et doit supporter des **charges** : le **polystyrène extrudé** (insensible à l'eau, résistant à la compression) convient ; la laine minérale perdrait ses qualités en se mouillant et s'écraserait.
On la réserve aux faux plafonds, à l'abri de l'eau.`}
 ],
 quiz:[
  {q:"Un isolant thermique a une conductivité :", o:["λ ≤ 0,065 W/(m·K)","λ ≥ 1","λ = 2","λ ≥ 50"], r:0, e:"Définition usuelle."},
  {q:"Résistance de 10 cm de laine (λ = 0,04) :", o:["2,5 m²·K/W","0,4","25","0,004"], r:0, e:"0,10/0,04."},
  {q:"L'efficacité des isolants vient surtout :", o:["De l'air immobile qu'ils emprisonnent","De leur poids","De leur couleur","De leur dureté"], r:0, e:"λ(air immobile) = 0,025."},
  {q:"L'inertie thermique dépend surtout :", o:["De la capacité thermique ρ c et de l'épaisseur","De la couleur","De la conductivité seule","Du prix"], r:0, e:"Capacité à stocker la chaleur."},
  {q:"Le béton est :", o:["Lourd mais peu isolant","Très isolant","Léger et isolant","Un isolant au sens strict"], r:0, e:"λ = 2 W/(m·K)."}
 ]},

{id:"therm-10", niv:1, titre:"Calculer le flux à travers une paroi simple", duree:40, contenu:`## Les résistances superficielles
L'air au contact des faces d'une paroi freine aussi le passage de la chaleur (convection et rayonnement). On en tient compte par des **résistances superficielles** :
| Position | Rsi (intérieur) | Rse (extérieur) |
|---|---|---|
| Paroi verticale (flux horizontal) | 0,13 | 0,04 |
| Plancher haut, flux vers le bas (toiture sous le soleil) | 0,17 | 0,04 |
| Flux vers le haut | 0,10 | 0,04 |
(en m²·K/W)

## Résistance totale et coefficient U
Pour une paroi d'une seule couche :
$$ R(totale) = Rsi + e/λ + Rse      ;      U = 1 / R(totale)     (W/(m²·K))
**U** est le **coefficient de transmission thermique** : le flux qui traverse 1 m² de paroi pour 1 °C d'écart entre l'air intérieur et l'air extérieur. Plus U est **petit**, plus la paroi isole.

## Le flux à travers la paroi
$$ Φ = U × S × (T(ext) − T(int))     (W)
> [!exemple] Mur de 20 cm de béton, local climatisé
> R = 0,13 + 0,20/2 + 0,04 = 0,27 m²·K/W → U = 1/0,27 = **3,7 W/(m²·K)**.
> Pour 20 m² de mur, extérieur à 32 °C, intérieur à 25 °C : Φ = 3,7 × 20 × 7 = **518 W**.
> (Ce calcul ne compte pas le soleil sur le mur : voir chapitre Apports solaires.)

## Comparer des murs courants
| Mur (enduits compris) | U (W/(m²·K)) |
|---|---|
| Béton 20 cm | 3,7 |
| Parpaing creux de 15 cm enduit | 2,5 |
| BTC 30 cm | 2,1 |
| Brique de terre cuite 20 cm | 2,0 |
| Parpaing 15 cm + 5 cm de laine + plaque de plâtre | 0,54 |
Les murs courants laissent passer 4 à 7 fois plus de chaleur qu'un mur isolé. Sous les tropiques, on isole en priorité la **toiture**, puis les murs **exposés au soleil** des locaux climatisés.

## Profil de température dans une paroi
La chute de température dans chaque couche (et chaque résistance superficielle) est **proportionnelle à sa résistance** :
$$ ΔT(couche) = R(couche) / R(totale) × (T(ext) − T(int))
Avec le mur en béton ci-dessus (ΔT total 7 °C) : chute dans Rse : 0,04/0,27 × 7 = 1,0 °C → surface extérieure à 31,0 °C ; dans le béton : 0,10/0,27 × 7 = 2,6 °C ; dans Rsi : 3,4 °C → surface intérieure à 28,4 °C.

> [!retenir]
> - R(totale) = Rsi + Σ e/λ + Rse ; U = 1/R(totale).
> - Φ = U × S × ΔT.
> - Murs courants : U ≈ 2 à 3,7 ; mur isolé : U ≈ 0,5.
> - La chute de température dans chaque couche est proportionnelle à sa résistance.`,
 exercices:[
  {t:"Coefficient U d'un mur en brique", d:1, e:`Calculer U pour un mur en brique de 20 cm (λ = 0,6), sans enduit, paroi verticale.`, c:`R = 0,13 + 0,20/0,6 + 0,04 = 0,13 + 0,333 + 0,04 = **0,503 m²·K/W** → U = **1,99 W/(m²·K)**.`},
  {t:"Flux à travers un mur", d:1, e:`Un mur en parpaing enduit (U = 2,5) de 30 m² sépare un bureau climatisé à 24 °C de l'extérieur à 30 °C.
Calculer le flux de chaleur qui entre.`, c:`Φ = 2,5 × 30 × 6 = **450 W**, sans compter l'effet du soleil sur la façade.`},
  {t:"Gain apporté par l'isolation", d:2, e:`Le même mur de 30 m² est doublé de 5 cm de laine et d'une plaque de plâtre (U = 0,54).
Calculer le nouveau flux et le pourcentage de réduction.`, c:`Φ = 0,54 × 30 × 6 = **97 W** ; réduction : (450 − 97)/450 = **78 %**.`},
  {t:"Température de surface intérieure", d:2, e:`Un mur en béton de 20 cm (R totale = 0,27) sépare l'extérieur à 34 °C d'une chambre climatisée à 24 °C.
Calculer la température de sa surface intérieure. Est-ce confortable ?`, c:`Chute dans Rsi : 0,13/0,27 × 10 = **4,8 °C** → surface intérieure à 24 + 4,8 = **28,8 °C**.
La paroi « rayonne » vers l'occupant 4,8 °C de plus que l'air : sensation de chaleur près du mur (température opérative plus élevée) ; d'où l'intérêt d'isoler les murs exposés.`},
  {t:"Choisir le mur d'une chambre climatisée", d:3, e:`Une chambre climatisée (24 °C) a 25 m² de murs extérieurs ; l'extérieur est en moyenne à 30 °C pendant 10 h d'utilisation par jour. Comparer l'énergie journalière qui traverse un mur en BTC 30 cm (U = 2,1) et un mur en parpaing isolé (U = 0,54), puis l'électricité consommée par un climatiseur produisant 3 kWh de froid par kWh électrique.`, c:`BTC : 2,1 × 25 × 6 = 315 W × 10 h = **3,15 kWh/jour** de chaleur → 1,05 kWh électrique.
Parpaing isolé : 0,54 × 25 × 6 = 81 W × 10 h = **0,81 kWh/jour** → 0,27 kWh électrique.
Économie : **0,78 kWh/jour**, environ 285 kWh par an pour cette seule chambre (hors soleil sur les murs, qui accentue l'écart).`}
 ],
 quiz:[
  {q:"Le coefficient U s'exprime en :", o:["W/(m²·K)","m²·K/W","W/m","J/kg"], r:0, e:"Flux par m² et par degré."},
  {q:"U = 1/R(totale) avec R(totale) =", o:["Rsi + Σ e/λ + Rse","Σ λ/e","Rsi × Rse","e × λ"], r:0, e:"Les résistances s'additionnent."},
  {q:"Résistance superficielle intérieure d'un mur vertical :", o:["0,13 m²·K/W","0,04","1","0"], r:0, e:"Valeur conventionnelle."},
  {q:"Plus U est petit :", o:["Plus la paroi isole","Moins la paroi isole","Plus elle est lourde","Plus elle est chaude"], r:0, e:"Moins de flux."},
  {q:"Φ pour U = 2, S = 10 m², ΔT = 5 °C :", o:["100 W","20 W","50 W","1 000 W"], r:0, e:"2 × 10 × 5."}
 ]},

{id:"therm-11", niv:1, titre:"D'où vient la chaleur dans un logement ?", duree:40, contenu:`## Les apports de chaleur
Dans un bâtiment tropical, la chaleur vient de deux familles de sources.

**Les apports extérieurs**
- le **soleil sur la toiture**, de loin le plus important pour un logement de plain-pied ou un dernier étage ;
- le **soleil à travers les vitrages** (surtout à l'est et à l'ouest) ;
- le soleil sur les **murs** exposés ;
- l'**air chaud** qui entre par les ouvertures et les infiltrations (chaleur et humidité) ;
- la conduction à travers les parois quand il fait plus chaud dehors que dedans.

**Les apports intérieurs**
| Source | Puissance dégagée (ordre de grandeur) |
|---|---|
| Une personne au repos | 100 W (dont 70 W de chaleur sensible et 30 W de vapeur) |
| Une personne en activité légère | 130 à 150 W |
| Lampe à incandescence de 60 W | 60 W (tout devient chaleur) |
| Lampe LED équivalente | 8 W |
| Téléviseur | 60 à 120 W |
| Ordinateur avec écran | 100 à 150 W |
| Réfrigérateur | 50 à 80 W en moyenne |
| Cuisson au gaz | 1 500 à 3 000 W pendant l'utilisation |
Toute l'électricité consommée dans un local finit en **chaleur** dans ce local.

## Ordres de grandeur d'une villa
> [!exemple] Villa de plain-pied de 100 m², en début d'après-midi
> | Source | Puissance |
> |---|---|
> | Toiture en tôle sans isolation ni faux plafond | ≈ 20 kW |
> | Toiture en tôle avec faux plafond, lame d'air et 5 cm de laine | ≈ 2,7 kW |
> | Fenêtres non protégées à l'ouest (4 m² × 500 W/m² × 0,85) | 1,7 kW |
> | 4 occupants | 0,4 kW |
> | Éclairage, téléviseur, réfrigérateur, ordinateur | 0,3 à 0,5 kW |
> La toiture non isolée apporte à elle seule **plus que toutes les autres sources réunies** : c'est elle qu'il faut traiter en premier.

## Les deux formes de chaleur
- La **chaleur sensible** élève la température de l'air (soleil, parois, appareils) ;
- La **chaleur latente** est contenue dans la **vapeur d'eau** (respiration, transpiration, cuisson, air extérieur humide). Elle ne chauffe pas l'air, mais le climatiseur doit la retirer en condensant cette vapeur : sous les tropiques, elle représente souvent 25 à 40 % du travail d'un climatiseur.

## Les leviers d'action
1. **Empêcher** la chaleur d'entrer : toiture claire, isolée et ventilée, protections solaires extérieures, végétation ;
2. **Réduire** les apports intérieurs : LED, appareils sobres, cuisine ventilée et séparée ;
3. **Évacuer** la chaleur : ventilation traversante, ventilation nocturne ;
4. **Refroidir** en dernier recours : ventilateurs, puis climatisation de locaux bien fermés.

> [!retenir]
> - Apports extérieurs (toiture, vitrages, murs, air) + apports intérieurs (occupants, éclairage, appareils).
> - Toiture non isolée : premier poste de loin.
> - Toute l'électricité consommée devient chaleur.
> - Chaleur sensible (température) et latente (vapeur d'eau).`,
 exercices:[
  {t:"Apports internes d'un bureau", d:1, e:`Un bureau accueille 4 personnes en activité légère (130 W chacune), 4 ordinateurs (120 W), 6 lampes LED de 18 W et une imprimante de 200 W (allumée en permanence).
Calculer les apports internes.`, c:`Personnes : 4 × 130 = **520 W** ; ordinateurs : **480 W** ; éclairage : 6 × 18 = **108 W** ; imprimante : **200 W**.
Total : **1 308 W**, l'équivalent d'un radiateur électrique allumé en permanence.`},
  {t:"Remplacer l'éclairage", d:1, e:`Dans une salle de classe, on remplace 8 lampes à incandescence de 100 W par des LED de 14 W. Quelle puissance de chaleur en moins dans la salle ?`, c:`Avant : 800 W ; après : 112 W → **688 W de chaleur en moins** (et autant d'électricité économisée).`},
  {t:"Classer les sources", d:2, e:`Pour une maison de plain-pied à Abidjan, classer de la plus forte à la plus faible : 4 occupants ; toiture en tôle nue de 90 m² (≈ 200 W/m² en début d'après-midi) ; fenêtres ouest de 3 m² sans protection (500 W/m², g = 0,85) ; téléviseur de 100 W.`, c:`Toiture : 90 × 200 = **18 000 W** ; fenêtres : 3 × 500 × 0,85 = **1 275 W** ; occupants : **400 W** ; téléviseur : **100 W**.
La toiture domine très largement : isoler et ventiler la toiture est la priorité.`},
  {t:"Chaleur latente des occupants", d:2, e:`Une salle de réunion reçoit 20 personnes ; chacune dégage 70 W sensibles et 45 W latents. Combien de vapeur d'eau produisent-elles par heure ? (Il faut environ 2 450 kJ pour évaporer 1 kg d'eau.)`, c:`Puissance latente : 20 × 45 = **900 W** = 900 J/s → par heure : 900 × 3 600 = 3,24 MJ.
Vapeur : 3 240/2 450 = **1,3 kg d'eau par heure**, que le climatiseur devra condenser.`},
  {t:"Plan d'action", d:2, e:`Un propriétaire veut rafraîchir sa maison de plain-pied (toiture en tôle nue, fenêtres ouest sans protection, éclairage à incandescence). Il a un budget limité. Dans quel ordre conseiller les travaux ?`, c:`1) **Toiture** : faux plafond avec isolant et ventilation des combles (et/ou peinture réfléchissante) : le poste le plus important ;
2) **Protections extérieures** des fenêtres ouest (volets, brise-soleil, arbres) ;
3) **LED** à la place des incandescences (peu coûteux, gain immédiat) ;
4) **Ventilateurs de plafond** ;
5) Seulement ensuite, si besoin, un **climatiseur** pour la chambre, qui sera alors plus petit et consommera moins.`}
 ],
 quiz:[
  {q:"Dans une maison de plain-pied non isolée, la principale source de chaleur est :", o:["La toiture","Les occupants","Le téléviseur","Les murs nord"], r:0, e:"Elle reçoit le soleil toute la journée."},
  {q:"Une personne au repos dégage environ :", o:["100 W","10 W","1 000 W","1 W"], r:0, e:"Dont environ 70 W sensibles."},
  {q:"L'électricité consommée par un appareil dans une pièce :", o:["Finit en chaleur dans la pièce","Disparaît","Refroidit la pièce","N'a aucun effet thermique"], r:0, e:"Conservation de l'énergie."},
  {q:"La chaleur latente correspond :", o:["À la vapeur d'eau","À la température de l'air","Au soleil direct","Aux murs"], r:0, e:"Le climatiseur doit la condenser."},
  {q:"Le premier levier contre la chaleur est de :", o:["L'empêcher d'entrer","Climatiser davantage","Fermer les fenêtres la nuit","Peindre les murs en noir"], r:0, e:"Protection solaire et isolation."}
 ]},

{id:"therm-7", niv:1, titre:"Le confort d'été : dix choix simples et efficaces", duree:40, contenu:`## Pourquoi « dix choix simples » ?
Beaucoup de décisions qui rendent une maison fraîche ne coûtent presque rien si elles sont prises **au moment de la conception**. Elles deviennent chères, voire impossibles, une fois le bâtiment construit.

## 1. Orienter les façades principales au nord et au sud
Le soleil haut se maîtrise avec un simple débord ; on évite les grandes baies à l'ouest (soleil bas de l'après-midi, au moment le plus chaud).

## 2. Traiter la toiture en priorité
Couleur **claire**, **faux plafond** avec **isolant** (5 à 10 cm de laine minérale) et **combles ventilés** : la chaleur reçue par la sous-face des pièces est divisée par 5 à 8.

## 3. Prévoir de larges débords et des galeries
60 cm à 1 m de débord, des vérandas sur les façades exposées : ombre sur les murs et les fenêtres, protection contre la pluie, espaces de vie frais.

## 4. Protéger les fenêtres de l'extérieur
Volets, persiennes, brise-soleil, stores extérieurs : une protection **extérieure** arrête 80 à 90 % du soleil ; un rideau intérieur seulement 30 à 40 %.

## 5. Ventiler de part en part
Ouvertures sur **deux façades opposées**, face aux vents dominants, impostes au-dessus des portes intérieures : un courant d'air de 1 m/s vaut 3 à 4 °C de moins ressentis.

## 6. Évacuer l'air chaud en hauteur
Ouvertures hautes, lanterneaux, aérateurs de faîtage, hauts plafonds (≥ 2,80 m) : l'air chaud monte et sort.

## 7. Choisir des couleurs claires
Toiture et murs clairs absorbent **deux à trois fois moins** de soleil que des teintes sombres.

## 8. Planter et ombrager
Arbres à l'est et à l'ouest, pelouse plutôt que béton autour de la maison, pergolas plantées : 2 à 3 °C de moins dans l'air, sols moins chauds.

## 9. Réduire la chaleur intérieure
Éclairage **LED**, réfrigérateur performant, cuisine bien ventilée ou extérieure, appareils éteints quand on ne s'en sert pas.

## 10. Ventilateurs d'abord, climatisation ensuite
Un ventilateur de plafond (50 à 75 W) suffit dans une maison bien conçue ; la climatisation (1 000 à 2 500 W) est réservée aux pièces et aux périodes qui en ont vraiment besoin, réglée à 25-26 °C, portes et fenêtres fermées.

> [!exemple] Ce que rapportent ces choix
> Une même maison de 100 m² à Abidjan :
> - mal conçue (tôle nue, baies à l'ouest sans protection, pas de ventilation traversante) : 3 à 4 climatiseurs nécessaires, facture de climatisation de l'ordre de 600 à 800 kWh par mois ;
> - bien conçue : ventilateurs de plafond la plupart du temps, éventuellement un climatiseur dans une chambre : 100 à 200 kWh par mois.
> Le surcoût de construction (faux plafond isolé, protections, débords) est rapidement remboursé.

> [!retenir]
> - Orientation nord-sud, toiture isolée et ventilée, débords et galeries.
> - Protections extérieures, ventilation traversante et sorties hautes.
> - Couleurs claires, végétation, apports intérieurs réduits.
> - Ventilateurs d'abord, climatisation ciblée ensuite.`,
 exercices:[
  {t:"Associer problèmes et solutions", d:1, e:`Associer à chaque problème le choix le plus efficace : a) plafond brûlant l'après-midi ; b) séjour surchauffé de 15 h à 18 h par une baie vitrée ; c) air immobile et moite dans les chambres ; d) murs extérieurs chauds au toucher le soir.`, c:`a) **Toiture** : faux plafond isolé + combles ventilés + couleur claire.
b) Baie à l'**ouest** : protection extérieure (brise-soleil, volets, store extérieur) ou galerie, arbres.
c) **Ventilation traversante** (ouvertures opposées, impostes) + ventilateur de plafond.
d) Murs exposés : **débords**, couleur claire, végétation, éventuellement isolation par l'extérieur.`},
  {t:"Couleur de toiture", d:1, e:`Une toiture sombre absorbe 90 % du rayonnement solaire, une toiture blanche 30 %. Sous un soleil de 900 W/m², combien de watts par m² chacune absorbe-t-elle ?`, c:`Sombre : 0,9 × 900 = **810 W/m²** ; blanche : 0,3 × 900 = **270 W/m²**, trois fois moins.`},
  {t:"Ventilateur ou climatiseur ?", d:2, e:`Une chambre peut être rafraîchie par un ventilateur de 60 W (8 h par nuit) ou par un climatiseur de 1 100 W (8 h par nuit). Calculer la consommation sur un an et le coût à 90 F/kWh (valeur indicative).`, c:`Ventilateur : 0,06 × 8 × 365 = **175 kWh** → 15 800 F/an.
Climatiseur : 1,1 × 8 × 365 = **3 212 kWh** → 289 000 F/an.
Le climatiseur coûte **18 fois plus** à l'usage.`},
  {t:"Hauteur sous plafond", d:2, e:`Pourquoi les maisons coloniales et traditionnelles des pays chauds ont-elles souvent de grandes hauteurs sous plafond (3,5 à 4 m) et des ouvertures hautes ?`, c:`L'air chaud **monte** : avec un plafond haut, il s'accumule au-dessus de la zone occupée ; les **ouvertures hautes** l'évacuent (tirage thermique), tandis que les ouvertures basses font entrer l'air plus frais. Le plafond, éloigné des occupants, leur rayonne aussi moins de chaleur.`},
  {t:"Projet à améliorer", d:3, e:`Un plan de maison type prévoit : façade principale vitrée à l'ouest, toiture en tôle bac acier sans faux plafond, fenêtres de 1 m² dans les chambres sur une seule façade, pas de débord. Proposer une version améliorée en appliquant au moins six des dix choix.`, c:`1) Retourner la maison pour mettre la façade vitrée au **nord ou au sud** ; 2) **faux plafond** isolé (laine 5 à 10 cm) et combles ventilés, tôle de couleur claire ; 3) **débords** de 80 cm et une **galerie** sur la façade principale ; 4) **volets/persiennes extérieurs** ; 5) chambres **traversantes** (deuxième ouverture ou imposte sur le couloir), fenêtres plus grandes ; 6) **aérateurs** de faîtage ; 7) **arbres** à l'ouest ; 8) **LED** et **ventilateurs de plafond** dans chaque pièce.`}
 ],
 quiz:[
  {q:"La première décision pour une maison fraîche est :", o:["L'orientation et le traitement de la toiture","Le choix du climatiseur","La couleur des portes","Le carrelage"], r:0, e:"Décision de conception."},
  {q:"Une protection solaire extérieure arrête environ :", o:["80 à 90 % du soleil","10 %","100 % de la lumière","Rien"], r:0, e:"Contre 30 à 40 % pour un rideau."},
  {q:"Les ouvertures hautes servent à :", o:["Évacuer l'air chaud","Faire entrer la pluie","Chauffer la pièce","Rien"], r:0, e:"Tirage thermique."},
  {q:"Une toiture claire absorbe, par rapport à une toiture sombre :", o:["Deux à trois fois moins","Autant","Deux fois plus","Dix fois plus"], r:0, e:"Coefficient d'absorption."},
  {q:"Réglage recommandé d'un climatiseur :", o:["25 à 26 °C","18 °C","21 °C","30 °C"], r:0, e:"Confort et économie."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"therm-2", niv:2, titre:"Parois multicouches : résistance thermique et coefficient U", duree:50, contenu:`## Les résistances en série
Une paroi est souvent faite de plusieurs couches (enduit, maçonnerie, isolant, plâtre). Le flux traverse toutes les couches successivement : leurs résistances **s'additionnent**.
$$ R(totale) = Rsi + e₁/λ₁ + e₂/λ₂ + … + R(lame d'air) + Rse      ;      U = 1/R(totale)

## Les matériaux à alvéoles et les lames d'air
- Les blocs creux (parpaings, briques creuses) ont une résistance **globale** donnée par le fabricant ou les règles de calcul : parpaing creux de 15 cm ≈ 0,20 m²·K/W ; brique creuse de 15 cm ≈ 0,30 à 0,40.
- Une **lame d'air immobile** de 2 à 5 cm a une résistance d'environ **0,16 à 0,18 m²·K/W** ; si l'une de ses faces est **réfléchissante** (aluminium propre), elle peut atteindre 0,5 à 0,6, car le rayonnement à travers la lame est presque supprimé.
- Une lame d'air **fortement ventilée** (combles ventilés) ne compte pas comme résistance ; mais elle **évacue la chaleur** avant qu'elle n'atteigne le plafond.

> [!exemple] Mur en parpaing enduit
> | Couche | e (m) | λ | R (m²·K/W) |
> |---|---|---|---|
> | Rse | | | 0,04 |
> | Enduit ciment extérieur | 0,02 | 1,15 | 0,017 |
> | Parpaing creux 15 cm | | | 0,20 |
> | Enduit intérieur | 0,02 | 1,15 | 0,017 |
> | Rsi | | | 0,13 |
> | **Total** | | | **0,404** |
> U = 1/0,404 = **2,47 W/(m²·K)**.
> En ajoutant 5 cm de laine (R = 1,43 avec λ = 0,035) et une plaque de plâtre (R = 0,05) à la place de l'enduit intérieur : R = 1,87 → U = **0,54 W/(m²·K)**.

## Les toitures
> [!exemple] Comparaison de toitures (flux descendant : Rsi = 0,17)
> | Toiture | U (W/(m²·K)) |
> |---|---|
> | Tôle seule (Rsi + Rse) | 4,8 |
> | Tôle + lame d'air + faux plafond en plâtre | 2,4 |
> | Tôle + lame d'air + 5 cm de laine + faux plafond | 0,60 |
> | Dalle en béton de 15 cm | 3,5 |
> | Dalle de 15 cm + 5 cm de polystyrène | 0,58 |
Le faux plafond seul divise le flux par deux ; avec 5 cm d'isolant, par huit.

## Une paroi composée de parties différentes
Si une paroi comporte des zones différentes (un mur percé d'une fenêtre), on calcule le flux de chaque partie et on les additionne :
$$ Φ = (U₁ S₁ + U₂ S₂ + …) × ΔT
On peut définir un U moyen = Σ Uᵢ Sᵢ/Σ Sᵢ.

> [!retenir]
> - Les résistances des couches s'additionnent ; U = 1/R(totale).
> - Lame d'air immobile ≈ 0,17 ; avec face réfléchissante ≈ 0,5.
> - Toiture : faux plafond seul ÷ 2 ; avec 5 cm d'isolant ÷ 8.
> - Paroi composée : Φ = Σ Uᵢ Sᵢ ΔT.`,
 exercices:[
  {t:"Mur en BTC enduit", d:1, e:`Calculer U pour un mur en BTC de 30 cm (λ = 1,0) avec un enduit de 1,5 cm (λ = 0,9) sur chaque face.`, c:`R = 0,13 + 0,015/0,9 + 0,30/1,0 + 0,015/0,9 + 0,04 = 0,13 + 0,017 + 0,30 + 0,017 + 0,04 = **0,503 m²·K/W** → U = **1,99 W/(m²·K)**.`},
  {t:"Toiture avec faux plafond", d:2, e:`Une toiture comprend une tôle (résistance négligeable), une lame d'air non ventilée (R = 0,16), 8 cm de laine (λ = 0,04) et un faux plafond en plâtre de 1,3 cm (λ = 0,25). Flux descendant : Rsi = 0,17 ; Rse = 0,04.
Calculer U.`, c:`R = 0,17 + 0,16 + 0,08/0,04 + 0,013/0,25 + 0,04 = 0,17 + 0,16 + 2,00 + 0,052 + 0,04 = **2,42 m²·K/W** → U = **0,41 W/(m²·K)**.`},
  {t:"Lame d'air réfléchissante", d:2, e:`Dans la toiture « tôle + lame d'air + faux plafond en plâtre » (R totale = 0,42 ; U = 2,4), on colle une feuille d'aluminium sous la tôle : la lame d'air passe de R = 0,16 à R = 0,55.
Calculer le nouveau U et le gain.`, c:`R = 0,42 − 0,16 + 0,55 = **0,81 m²·K/W** → U = **1,23 W/(m²·K)** : le flux est presque **divisé par deux** pour un coût faible, à condition que la feuille reste propre (la poussière augmente son émissivité).`},
  {t:"Mur avec fenêtre", d:2, e:`Une façade de 15 m² comprend une fenêtre de 3 m² (U = 5,8) et 12 m² de mur en parpaing (U = 2,47). Écart de température : 7 °C.
Calculer le flux total et le U moyen de la façade.`, c:`Mur : 2,47 × 12 × 7 = **207 W** ; fenêtre : 5,8 × 3 × 7 = **122 W** ; total **329 W**.
U moyen = (2,47 × 12 + 5,8 × 3)/15 = (29,6 + 17,4)/15 = **3,13 W/(m²·K)**.`},
  {t:"Épaisseur d'isolant pour un U visé", d:3, e:`On veut un U ≤ 0,5 W/(m²·K) pour une toiture-terrasse en dalle béton de 15 cm (Rsi = 0,17 ; Rse = 0,04), avec un isolant de λ = 0,035.
Quelle épaisseur d'isolant faut-il ?`, c:`R totale nécessaire : 1/0,5 = **2,0 m²·K/W**.
R sans isolant : 0,17 + 0,15/2 + 0,04 = 0,285 → R isolant ≥ 2,0 − 0,285 = **1,715**.
e = 1,715 × 0,035 = 0,060 m → **6 cm** d'isolant (commercialement 6 cm).`}
 ],
 quiz:[
  {q:"Les résistances thermiques des couches d'une paroi :", o:["S'additionnent","Se multiplient","Se soustraient","Ne comptent pas"], r:0, e:"Couches en série."},
  {q:"Une lame d'air immobile de 3 cm a une résistance d'environ :", o:["0,17 m²·K/W","2 m²·K/W","0,001","10"], r:0, e:"Avec faces ordinaires."},
  {q:"Une face réfléchissante dans une lame d'air :", o:["Réduit fortement le rayonnement à travers la lame","Augmente le flux","N'a aucun effet","Supprime la convection"], r:0, e:"Faible émissivité."},
  {q:"U d'une toiture en tôle seule :", o:["≈ 4,8 W/(m²·K)","≈ 0,5","≈ 0,05","≈ 50"], r:0, e:"Seules les résistances superficielles."},
  {q:"U moyen d'une paroi composée :", o:["Σ Uᵢ Sᵢ/Σ Sᵢ","Moyenne simple des U","Le plus grand U","Le plus petit U"], r:0, e:"Pondéré par les surfaces."}
 ]},

{id:"therm-12", niv:2, titre:"Échanges en surface, rayonnement et profil de température", duree:50, contenu:`## Ce qui se passe à la surface d'une paroi
Une surface échange de la chaleur avec l'air par **convection** et avec les autres surfaces par **rayonnement** ; on regroupe les deux dans un coefficient d'échange superficiel :
$$ h = h(c) + h(r)      ;      R(s) = 1/h
- Convection intérieure (air calme) : h(c) ≈ 2,5 W/(m²·K) ; extérieure avec du vent : h(c) ≈ 20 W/(m²·K) ;
- Rayonnement : h(r) ≈ 4 ε σ T³ ≈ **5,5 W/(m²·K)** pour ε = 0,9 à 300 K.
D'où les valeurs conventionnelles : à l'intérieur, h ≈ 8 → **Rsi ≈ 0,13** ; à l'extérieur, h ≈ 25 → **Rse ≈ 0,04 m²·K/W**.
À l'intérieur, **plus de la moitié** des échanges se font par rayonnement : c'est pourquoi la température des parois compte autant que celle de l'air dans le confort.

## Le rayonnement entre deux surfaces
Entre deux surfaces parallèles d'émissivités ε₁ et ε₂ :
$$ φ = ε(eff) × σ × (T₁⁴ − T₂⁴)      avec      1/ε(eff) = 1/ε₁ + 1/ε₂ − 1
> [!exemple] Sous une toiture en tôle
> Tôle à 60 °C, faux plafond à 35 °C, lame d'air entre les deux.
> | Sous-face de la tôle | ε(eff) | Flux rayonné vers le faux plafond |
> |---|---|---|
> | Ordinaire (ε = 0,9) | 0,82 | **153 W/m²** |
> | Aluminium propre (ε = 0,05) | 0,05 | **9 W/m²** |
> | Aluminium poussiéreux (ε ≈ 0,2) | 0,19 | 37 W/m² |
> Un **écran réfléchissant** sous la tôle supprime l'essentiel du transfert par rayonnement, qui est le mode principal dans une lame d'air sous toiture. Il doit faire face à une **lame d'air** (collé contre un matériau, il ne sert à rien) et rester **propre**.

## Le profil de température dans une paroi
En régime permanent, le même flux traverse toutes les couches ; la chute de température dans chacune est proportionnelle à sa résistance :
$$ ΔT(couche) = (R(couche)/R(totale)) × (T(ext) − T(int))

!fig:paroi|Profil de température dans une paroi multicouche

> [!exemple] Mur en parpaing doublé de laine (Te = 32 °C ; Ti = 25 °C)
> R(totale) = 1,87 m²·K/W.
> | Interface | Température |
> |---|---|
> | Surface extérieure | 31,9 °C |
> | Enduit / parpaing | 31,8 °C |
> | Parpaing / laine | 31,0 °C |
> | Laine / plâtre | 25,7 °C |
> | Surface intérieure | 25,5 °C |
> Presque toute la chute de température se fait dans l'**isolant** : la maçonnerie reste à la température extérieure, la surface intérieure reste proche de l'air (confort).

## Applications
- Calculer la **température de surface** intérieure (confort, risque de condensation : voir Physique du bâtiment) ;
- Choisir la **position de l'isolant** : à l'extérieur, la maçonnerie reste du côté intérieur et son inertie profite au local ; à l'intérieur, le local réagit vite à la climatisation (bureaux, chambres occupées la nuit).

> [!retenir]
> - h = hc + hr ; Rsi ≈ 0,13 ; Rse ≈ 0,04.
> - Rayonnement entre deux surfaces : ε(eff) = 1/(1/ε₁ + 1/ε₂ − 1).
> - Un écran réfléchissant face à une lame d'air divise le rayonnement par 10 à 15.
> - ΔT de chaque couche ∝ sa résistance : l'isolant « porte » presque tout l'écart.`,
 exercices:[
  {t:"Coefficient de rayonnement", d:1, e:`Calculer h(r) ≈ 4 ε σ T³ pour une surface d'émissivité 0,9 à 27 °C (300 K), puis pour une surface aluminium (ε = 0,05).`, c:`ε = 0,9 : h(r) = 4 × 0,9 × 5,67 × 10⁻⁸ × 300³ = **5,5 W/(m²·K)**.
ε = 0,05 : h(r) = **0,31 W/(m²·K)** : la surface aluminium n'échange presque plus par rayonnement.`},
  {t:"Émissivité effective", d:1, e:`Calculer l'émissivité effective entre : a) deux surfaces ordinaires (0,9 et 0,9) ; b) une surface ordinaire (0,9) et une feuille d'aluminium (0,05).`, c:`a) 1/(1/0,9 + 1/0,9 − 1) = 1/1,222 = **0,82**.
b) 1/(1/0,05 + 1/0,9 − 1) = 1/20,11 = **0,05** : c'est la surface la moins émissive qui impose l'échange.`},
  {t:"Températures dans un mur", d:2, e:`Un mur en béton de 20 cm (R = 0,10) avec Rsi = 0,13 et Rse = 0,04 sépare l'extérieur à 33 °C d'un local climatisé à 24 °C.
Calculer les températures des surfaces extérieure et intérieure.`, c:`R(totale) = 0,27 ; ΔT = 9 °C.
Chute dans Rse : 0,04/0,27 × 9 = 1,3 °C → surface extérieure à **31,7 °C**.
Chute dans Rsi : 0,13/0,27 × 9 = 4,3 °C → surface intérieure à **28,3 °C** (4,3 °C au-dessus de l'air : inconfort près du mur).`},
  {t:"Écran réfléchissant poussiéreux", d:2, e:`Sous une toiture, la tôle est à 60 °C et le faux plafond à 35 °C. L'écran aluminium, propre au départ (ε = 0,05), se couvre de poussière (ε = 0,2). Calculer le flux rayonné dans les deux cas (σ(T₁⁴ − T₂⁴) ≈ 187 W/m²).`, c:`Propre : ε(eff) = 0,05 → φ ≈ 0,05 × 187 = **9 W/m²**.
Poussiéreux : ε(eff) = 1/(5 + 1,11 − 1) = 0,196 → φ ≈ **37 W/m²** (4 fois plus).
On place la face réfléchissante **vers le bas** (face au faux plafond) : la poussière se dépose surtout sur les faces tournées vers le haut.`},
  {t:"Position de l'isolant", d:3, e:`Pour une salle de classe en béton occupée de 7 h à 17 h, ventilée naturellement, et pour une chambre climatisée seulement la nuit, où placer l'isolant (extérieur ou intérieur) ? Justifier.`, c:`**Salle de classe** (ventilation naturelle) : isolant **à l'extérieur** des murs exposés (ou protection solaire) : le béton reste côté intérieur, il est rafraîchi par la ventilation nocturne et absorbe les apports de la journée (inertie utile).
**Chambre climatisée la nuit** : isolant **à l'intérieur** : la climatisation ne doit refroidir que l'air et une paroi légère, la pièce devient fraîche en quelques minutes, sans avoir à « vider » la chaleur accumulée dans le béton pendant la journée.`}
 ],
 quiz:[
  {q:"Rse vaut conventionnellement :", o:["0,04 m²·K/W","0,13","1","0,4"], r:0, e:"Le vent augmente les échanges extérieurs."},
  {q:"À l'intérieur d'un local, le rayonnement représente :", o:["Plus de la moitié des échanges de surface","Moins de 1 %","Rien","Tout"], r:0, e:"hr ≈ 5,5 contre hc ≈ 2,5."},
  {q:"Un écran réfléchissant collé contre l'isolant sans lame d'air :", o:["Est presque inutile","Est très efficace","Double l'isolation","Supprime la conduction"], r:0, e:"Il lui faut une lame d'air."},
  {q:"Dans une paroi isolée, la plus grande chute de température se produit :", o:["Dans l'isolant","Dans l'enduit","Dans le béton","À l'extérieur"], r:0, e:"ΔT proportionnel à R."},
  {q:"L'émissivité effective entre 0,9 et 0,05 vaut environ :", o:["0,05","0,9","0,5","0,95"], r:0, e:"La surface faiblement émissive domine."}
 ]},

{id:"therm-3", niv:2, titre:"Toitures, isolation et ponts thermiques", duree:50, contenu:`## La toiture sous le soleil
La face extérieure d'une toiture au soleil se comporte comme si l'air extérieur était à la **température d'air-soleil** :
$$ T(as) = T(ext) + α × I / he
(α : absorption de la surface ; I : rayonnement ; he ≈ 20 à 25 W/(m²·K)). Le flux qui entre dans le local s'estime alors par :
$$ φ = U × (T(as) − T(int))
> [!exemple] Toitures sombres en plein soleil (T(as) ≈ 70 °C ; local à 26 °C)
> | Toiture | U | φ (W/m²) | Pour 100 m² |
> |---|---|---|---|
> | Tôle seule | 4,8 | 212 | 21 kW |
> | Tôle + faux plafond | 2,4 | 105 | 10,5 kW |
> | Tôle + faux plafond + 5 cm de laine | 0,60 | 27 | 2,7 kW |
> | Dalle béton 15 cm | 3,5 | 156 | 15,6 kW |
> | Dalle + 5 cm de polystyrène | 0,58 | 26 | 2,6 kW |
> Ordres de grandeur en régime permanent : pour la dalle lourde, le flux réel est **retardé** de plusieurs heures et **atténué** (voir Régime variable), mais il se retrouve le soir dans les chambres.

## Les solutions pour la toiture
1. **Réduire l'absorption** : couleur claire, peinture réfléchissante, gravillons clairs, végétalisation ;
2. **Ventiler** les combles ou réaliser une **double toiture** : l'air extérieur emporte la chaleur entre la couverture et le plafond ;
3. **Écran réfléchissant** face à une lame d'air ;
4. **Isoler** : laine sur faux plafond, polystyrène ou polyuréthane sur toiture-terrasse (isolation au-dessus de la dalle, sous la protection) ;
5. **Ombrer** : pergolas, panneaux solaires qui font aussi de l'ombre.

## Les ponts thermiques
Un **pont thermique** est une zone où l'isolation est interrompue ou affaiblie : la chaleur passe plus facilement.
- **Ponts linéaires** : jonctions plancher/mur, nez de dalle, poutres et chaînages, encadrements de fenêtres, refends ;
- **Ponts ponctuels** : fixations traversantes, consoles de balcon.

!fig:pont-thermique|Jonction dalle / mur : le béton traverse l'isolant

On les caractérise par un coefficient **ψ** (W/(m·K)) : flux supplémentaire par mètre de jonction et par degré.
$$ H = Σ (U × S) + Σ (ψ × L)      ;      Φ = H × ΔT

> [!exemple] Chambre climatisée isolée par l'intérieur
> Deux murs extérieurs : 22 m² isolés (U = 0,54) ; jonctions avec les planchers haut et bas : 16 m (ψ = 0,7) ; poteaux et refends : 6 m (ψ = 0,5).
> H = 22 × 0,54 + 16 × 0,7 + 6 × 0,5 = 11,9 + 11,2 + 3,0 = **26,1 W/K**.
> Les ponts thermiques (14,2 W/K) laissent passer **plus de chaleur que les murs eux-mêmes** !

## Traiter les ponts thermiques
- **Isolation par l'extérieur**, continue devant les dalles et les poteaux ;
- **Rupteurs** de ponts thermiques aux jonctions balcon/plancher ;
- Retours d'isolant sur les tableaux de fenêtres et en sous-face des dalles sur une bande de 0,6 à 1 m ;
- Dans les locaux climatisés, les ponts thermiques sont aussi des **points froids** où la vapeur de l'air extérieur peut condenser (face extérieure ou dans la paroi).

> [!retenir]
> - T(air-soleil) = T + α I/he ; φ ≈ U (T(as) − T(int)).
> - Toiture : couleur claire + ventilation + isolant ; tôle seule 21 kW pour 100 m², isolée 2,7 kW.
> - Ponts thermiques : H = Σ U S + Σ ψ L ; souvent aussi importants que les parois.
> - Isolation continue par l'extérieur, rupteurs, retours d'isolant.`,
 exercices:[
  {t:"Flux à travers une toiture-terrasse", d:1, e:`Une toiture-terrasse de 80 m² en béton (U = 3,5) a une température d'air-soleil de 65 °C l'après-midi ; le local est à 26 °C.
Calculer le flux (calcul en régime permanent).`, c:`φ = 3,5 × (65 − 26) = **136,5 W/m²** → Φ = 136,5 × 80 = **10,9 kW** : l'équivalent de trois gros climatiseurs.`},
  {t:"Effet d'une protection claire", d:2, e:`On recouvre la toiture précédente d'une peinture blanche réfléchissante : T(as) passe à 45 °C. On ajoute ensuite 5 cm de polystyrène (U = 0,58).
Calculer le flux dans chaque cas.`, c:`Peinture seule : 3,5 × (45 − 26) × 80 = **5,3 kW** (÷ 2).
Peinture + isolant : 0,58 × (45 − 26) × 80 = **0,88 kW** (÷ 12 par rapport à l'état initial).`},
  {t:"Ponts thermiques d'une façade", d:2, e:`Une façade de bureau comprend 40 m² de mur isolé (U = 0,5), 8 m² de fenêtres (U = 3,0), 24 m de jonctions de planchers (ψ = 0,6) et 18 m d'encadrements de fenêtres (ψ = 0,3).
Calculer H et la part des ponts thermiques.`, c:`Murs : 40 × 0,5 = 20 W/K ; fenêtres : 8 × 3,0 = 24 W/K ; jonctions : 24 × 0,6 = 14,4 W/K ; encadrements : 18 × 0,3 = 5,4 W/K.
H = **63,8 W/K** ; ponts thermiques : 19,8 W/K, soit **31 %** du total.`},
  {t:"Comparer deux toitures pour une villa", d:2, e:`Pour 120 m² de toiture (T(as) = 70 °C ; intérieur 26 °C), comparer : A) tôle + faux plafond en contreplaqué (U = 2,4) ; B) tôle + faux plafond + 8 cm de laine (U = 0,41). Combien de kW de climatisation la solution B évite-t-elle ?`, c:`A : 2,4 × 44 × 120 = **12,7 kW** ; B : 0,41 × 44 × 120 = **2,2 kW**.
Écart : **10,5 kW** de chaleur en moins au moment le plus chaud, soit environ trois climatiseurs de 12 000 BTU évités.`},
  {t:"Point froid et condensation", d:3, e:`Dans un hôtel climatisé à 22 °C, le nez de dalle en béton non isolé a sa face extérieure à environ 25 °C alors que l'air extérieur est à 30 °C et 85 % d'humidité (point de rosée ≈ 27,2 °C).
Que se passe-t-il et comment y remédier ?`, c:`25 °C < 27,2 °C : la vapeur de l'air extérieur **condense** sur la face extérieure du nez de dalle (et peut migrer dans les fissures) : traces, moisissures, corrosion des aciers à terme.
Remède : **isolation par l'extérieur continue** devant le nez de dalle (ou rupteur), pour que la surface extérieure reste proche de la température de l'air extérieur ; éviter aussi les consignes de climatisation trop basses.`}
 ],
 quiz:[
  {q:"La température d'air-soleil tient compte :", o:["De l'absorption du soleil par la surface","De l'humidité","Du vent seulement","De la nuit"], r:0, e:"T + α I/he."},
  {q:"Un pont thermique est :", o:["Une zone où l'isolation est interrompue","Un isolant épais","Une lame d'air","Un vitrage"], r:0, e:"La chaleur y passe plus facilement."},
  {q:"Le coefficient ψ s'exprime en :", o:["W/(m·K)","W/(m²·K)","m²·K/W","W"], r:0, e:"Par mètre de jonction."},
  {q:"La meilleure façon de supprimer les ponts thermiques des dalles est :", o:["L'isolation continue par l'extérieur","L'isolation par l'intérieur seulement","Peindre en noir","Augmenter l'épaisseur des dalles"], r:0, e:"L'isolant passe devant les nez de dalle."},
  {q:"Pour une toiture de 100 m² en tôle seule en plein soleil, le flux est de l'ordre de :", o:["20 kW","200 W","2 MW","2 kW"], r:0, e:"≈ 212 W/m²."}
 ]},

{id:"therm-4", niv:2, titre:"Apports solaires par les vitrages et les parois opaques", duree:50, contenu:`## Le soleil sur les façades
L'énergie solaire reçue dépend de l'orientation. Ordres de grandeur par ciel clair en Côte d'Ivoire :
| Surface | Rayonnement maximal | Énergie par jour |
|---|---|---|
| Horizontale (toiture) | 900 à 1 000 W/m² | 5 à 6 kWh/m² |
| Façade est ou ouest | 500 à 600 W/m² | 2,5 à 3 kWh/m² |
| Façade nord ou sud | 150 à 250 W/m² | 1,2 à 1,8 kWh/m² |
La toiture reçoit deux fois plus que les façades est/ouest et trois à quatre fois plus que les façades nord/sud.

## Apports à travers un vitrage
$$ Φ = S × I × g × F(s)
S : surface vitrée ; I : rayonnement incident ; g : **facteur solaire** du vitrage (fraction de l'énergie qui entre) ; F(s) : facteur d'ombrage (1 sans ombre ; 0,2 à 0,3 avec une bonne protection extérieure).
> [!exemple] Baie de 2 m² à l'ouest à 16 h (I = 500 W/m²)
> Vitrage clair sans protection (g = 0,85) : Φ = 2 × 500 × 0,85 = **850 W**.
> Avec un store extérieur (g global ≈ 0,15) : Φ = 2 × 500 × 0,15 = **150 W**.

## Apports à travers une paroi opaque
Le soleil chauffe la face extérieure, et une petite partie de cette énergie traverse la paroi :
$$ Φ = U × S × (α × I / he + T(ext) − T(int))
On définit le **facteur solaire d'une paroi opaque** : S(paroi) = α U/he, fraction du rayonnement incident qui traverse.
| Paroi | α | U | S(paroi) | Apport sous 550 W/m² |
|---|---|---|---|---|
| Mur en parpaing de couleur moyenne | 0,6 | 2,47 | 0,059 | 33 W/m² |
| Même mur peint en blanc | 0,3 | 2,47 | 0,030 | 16 W/m² |
| Tôle sombre (toiture) sous 900 W/m² | 0,9 | 4,8 | 0,17 | 154 W/m² |
| Toiture isolée claire sous 900 W/m² | 0,3 | 0,6 | 0,007 | 6 W/m² |
(he = 25 W/(m²·K) ; apports dus au soleil seul, sans l'écart de température)

> [!exemple] Mur ouest de 10 m², 16 h
> Parpaing (U = 2,47 ; α = 0,6), I = 500 W/m², Te = 32 °C, Ti = 26 °C :
> Φ = 2,47 × 10 × (0,6 × 500/25 + 6) = 24,7 × 18 = **445 W**.
> Le soleil (12 °C « équivalents ») pèse deux fois plus que l'écart de température (6 °C).

## Réduire les apports solaires
- **Vitrages** : protection extérieure d'abord, puis vitrages à contrôle solaire (g = 0,3 à 0,4) ; réduire les surfaces à l'est et à l'ouest ;
- **Parois opaques** : couleurs claires, ombrage (débords, végétation), double peau ventilée (bardage), isolation ;
- **Toiture** : priorité absolue (voir chapitre précédent).

> [!retenir]
> - Toiture : ≈ 1 000 W/m² ; est/ouest : ≈ 550 W/m² ; nord/sud : ≈ 200 W/m².
> - Vitrage : Φ = S I g F(s) ; protection extérieure : g global ≈ 0,15.
> - Paroi opaque : Φ = U S (α I/he + ΔT) ; S(paroi) = α U/he.
> - Couleurs claires et ombrage divisent les apports des murs par deux ou plus.`,
 exercices:[
  {t:"Apports par une fenêtre", d:1, e:`Une fenêtre de 1,5 m² exposée à l'est reçoit 550 W/m² à 8 h. Calculer les apports avec un vitrage clair (g = 0,85), puis avec des persiennes extérieures fermées (g ≈ 0,1).`, c:`Vitrage clair : 1,5 × 550 × 0,85 = **701 W** ; persiennes : 1,5 × 550 × 0,1 = **83 W**.`},
  {t:"Facteur solaire d'un mur", d:1, e:`Calculer le facteur solaire d'un mur en BTC (U = 2,0) de couleur ocre (α = 0,7), puis de couleur blanche (α = 0,25), avec he = 25 W/(m²·K).`, c:`Ocre : S = 0,7 × 2,0/25 = **0,056** ; blanc : S = 0,25 × 2,0/25 = **0,020**.
Le badigeon blanc divise par près de 3 la part du soleil qui traverse le mur.`},
  {t:"Bilan d'une façade ouest", d:2, e:`Une façade ouest comprend 12 m² de mur (U = 2,47 ; α = 0,6) et 3 m² de vitrage clair (g = 0,85 ; U = 5,8). À 16 h : I = 500 W/m², Te = 33 °C, Ti = 25 °C.
Calculer les apports du mur, du vitrage (solaire + conduction) et le total.`, c:`Mur : 2,47 × 12 × (0,6 × 500/25 + 8) = 29,6 × 20 = **593 W**.
Vitrage solaire : 3 × 500 × 0,85 = **1 275 W** ; conduction : 5,8 × 3 × 8 = **139 W**.
Total : **2 007 W** ; le vitrage (20 % de la surface) apporte 70 % de la chaleur.`},
  {t:"Choisir l'orientation des baies", d:2, e:`Un séjour doit recevoir 6 m² de baies. On compare : toutes à l'ouest (550 W/m²), ou toutes au nord (200 W/m²), vitrage clair g = 0,85, sans protection.
Calculer les apports solaires maximaux dans chaque cas.`, c:`Ouest : 6 × 550 × 0,85 = **2 805 W** ; nord : 6 × 200 × 0,85 = **1 020 W**.
L'orientation nord divise les apports par 2,75, et un simple débord peut encore les réduire fortement.`},
  {t:"Bardage ventilé", d:3, e:`Un mur ouest en béton (U = 3,7 ; α = 0,7) reçoit 550 W/m². On le protège par un bardage ventilé qui supprime 85 % du rayonnement atteignant le mur.
Calculer l'apport solaire par m² avant et après (he = 25 W/(m²·K)).`, c:`Avant : 3,7 × 0,7 × 550/25 = **57 W/m²**.
Après : 57 × 0,15 = **8,5 W/m²** : le bardage ventilé (ou une double peau, une végétation grimpante) est presque aussi efficace qu'un isolant pour les apports solaires.`}
 ],
 quiz:[
  {q:"La surface qui reçoit le plus de soleil sous les tropiques est :", o:["La toiture","La façade nord","La façade sud","Le sol intérieur"], r:0, e:"Soleil presque vertical."},
  {q:"Apports à travers un vitrage :", o:["S × I × g","S × U × ΔT seulement","S/g","I/g"], r:0, e:"Facteur solaire g."},
  {q:"Facteur solaire d'une paroi opaque :", o:["α U/he","U/α","α he/U","α + U"], r:0, e:"Fraction du rayonnement qui traverse."},
  {q:"Peindre un mur en blanc :", o:["Réduit les apports solaires","Les augmente","N'a pas d'effet","Augmente U"], r:0, e:"α diminue."},
  {q:"Rayonnement maximal sur une façade ouest en Côte d'Ivoire :", o:["Environ 550 W/m²","Environ 50 W/m²","Environ 2 000 W/m²","Nul"], r:0, e:"Soleil bas de l'après-midi."}
 ]},

{id:"therm-13", niv:2, titre:"Vitrages et menuiseries : U, facteur solaire et transmission lumineuse", duree:45, contenu:`## Les trois caractéristiques d'un vitrage
| Grandeur | Symbole | Ce qu'elle mesure |
|---|---|---|
| Coefficient de transmission thermique | Ug (W/(m²·K)) | Chaleur qui traverse par écart de température |
| Facteur solaire | g | Part de l'énergie solaire qui entre |
| Transmission lumineuse | TL | Part de la lumière visible qui entre |
Sous les tropiques, le **facteur solaire** est presque toujours plus important que Ug : l'écart de température intérieur-extérieur est faible (5 à 8 °C), alors que le soleil apporte des centaines de W/m².

## Les principaux vitrages
| Vitrage | Ug | g | TL |
|---|---|---|---|
| Simple vitrage clair 4 mm | 5,8 | 0,85 | 0,90 |
| Simple vitrage teinté (bronze, gris) | 5,8 | 0,55 à 0,65 | 0,40 à 0,55 |
| Simple vitrage réfléchissant | 5,7 | 0,30 à 0,45 | 0,20 à 0,40 |
| Double vitrage clair 4/16/4 | 2,8 | 0,75 | 0,80 |
| Double vitrage à contrôle solaire sélectif | 1,1 à 1,6 | 0,25 à 0,40 | 0,50 à 0,70 |

**Sélectivité** = TL/g : un bon vitrage tropical laisse passer la lumière mais pas la chaleur : sélectivité **≥ 1,5 à 2**. Les vitrages teintés ou réfléchissants assombrissent souvent les locaux (TL faible) : on allume alors l'éclairage, qui chauffe à son tour.

## La menuiserie compte aussi
Le coefficient d'une fenêtre complète :
$$ Uw = (Ag × Ug + Af × Uf + ψg × Lg) / Aw
Ag, Af : surfaces de vitrage et de cadre ; Uf : U du cadre ; ψg, Lg : pont thermique et longueur du bord du vitrage ; Aw = Ag + Af.
| Cadre | Uf (W/(m²·K)) |
|---|---|
| Aluminium sans rupture de pont thermique | 5,7 |
| Aluminium à rupture de pont thermique | 2 à 3,5 |
| Bois | 1,5 à 2,2 |
| PVC | 1,3 à 2 |
> [!exemple] Fenêtre de 1,5 m² (vitrage 1,2 m² ; cadre 0,3 m² ; bord de vitrage 4,4 m ; ψg = 0,06)
> Double vitrage (Ug = 2,8) en aluminium sans rupture : Uw = (1,2 × 2,8 + 0,3 × 5,7 + 0,06 × 4,4)/1,5 = **3,56 W/(m²·K)**.
> Même vitrage en aluminium à rupture (Uf = 2,5) : Uw = **2,92 W/(m²·K)**.

## Que choisir sous les tropiques ?
- **Logement ventilé naturellement** : simple vitrage clair + **protections extérieures** (volets, persiennes, débords) ; des jalousies (lames de verre orientables) permettent de ventiler ;
- **Bureaux climatisés** : protections extérieures + **vitrage à contrôle solaire sélectif** (g ≈ 0,3 ; TL ≈ 0,6), éventuellement double vitrage (bruit, longues heures de climatisation) ;
- Éviter les **façades entièrement vitrées** non protégées, surtout à l'est et à l'ouest.

> [!exemple] 10 m² de vitrage à l'ouest sous 550 W/m²
> | Solution | g | Apport solaire |
> |---|---|---|
> | Simple vitrage clair | 0,85 | 4 675 W |
> | Vitrage à contrôle solaire | 0,35 | 1 925 W |
> | Simple vitrage + brise-soleil extérieur | ≈ 0,15 | 825 W |

> [!retenir]
> - Sous les tropiques, g compte plus que Ug ; sélectivité TL/g ≥ 1,5.
> - Uw = (Ag Ug + Af Uf + ψg Lg)/Aw ; le cadre aluminium sans rupture est un pont thermique.
> - Protections extérieures d'abord ; vitrages sélectifs pour les bureaux climatisés.`,
 exercices:[
  {t:"Sélectivité", d:1, e:`Calculer la sélectivité de trois vitrages : A (TL = 0,90 ; g = 0,85) ; B (TL = 0,35 ; g = 0,40) ; C (TL = 0,62 ; g = 0,32). Lequel convient le mieux à un bureau climatisé ?`, c:`A : 0,90/0,85 = **1,06** ; B : 0,35/0,40 = **0,88** ; C : 0,62/0,32 = **1,94**.
**C** : beaucoup de lumière, peu de chaleur. B est sombre et laisse pourtant passer autant de chaleur que de lumière.`},
  {t:"Coefficient d'une fenêtre", d:2, e:`Une fenêtre de 2 m² comprend 1,6 m² de simple vitrage (Ug = 5,8) et 0,4 m² de cadre bois (Uf = 2,0). On néglige le pont thermique de bord.
Calculer Uw.`, c:`Uw = (1,6 × 5,8 + 0,4 × 2,0)/2 = (9,28 + 0,80)/2 = **5,04 W/(m²·K)**.`},
  {t:"Apports conduction et soleil", d:2, e:`Pour 1 m² de simple vitrage clair au soleil (500 W/m²), avec 8 °C d'écart de température, comparer l'apport par conduction (Ug = 5,8) et l'apport solaire (g = 0,85). Même calcul pour un double vitrage (Ug = 2,8 ; g = 0,75).`, c:`Simple : conduction 5,8 × 8 = **46 W** ; soleil 500 × 0,85 = **425 W**.
Double : conduction 2,8 × 8 = **22 W** ; soleil 500 × 0,75 = **375 W**.
Le double vitrage réduit surtout la conduction, qui pèse peu : contre le soleil, il faut un **faible g** ou une **protection extérieure**.`},
  {t:"Choisir une solution pour une façade", d:2, e:`Une façade ouest de bureaux comporte 20 m² de vitrage (I = 550 W/m²). Comparer les apports solaires : a) simple vitrage clair ; b) vitrage à contrôle solaire (g = 0,35) ; c) simple vitrage clair avec brise-soleil (g global = 0,15). Quelle puissance de climatisation chaque solution demande-t-elle pour ces seuls apports ?`, c:`a) 20 × 550 × 0,85 = **9,35 kW** ; b) 20 × 550 × 0,35 = **3,85 kW** ; c) 20 × 550 × 0,15 = **1,65 kW**.
La solution c) divise par plus de 5 la puissance de climatisation nécessaire, tout en gardant une bonne lumière (le brise-soleil laisse passer la lumière diffuse).`},
  {t:"Façade vitrée ou percée ?", d:3, e:`Un architecte propose une façade ouest de 60 m² entièrement vitrée (vitrage réfléchissant g = 0,4 ; TL = 0,3). Une alternative : 25 % de baies en vitrage clair (g = 0,85 ; TL = 0,9) protégées par des brise-soleil (facteur d'ombrage 0,2), le reste en mur isolé (apport ≈ 5 W/m² au soleil).
Comparer les apports solaires (I = 550 W/m²) et la lumière entrante (proportionnelle à surface × TL × ombrage).`, c:`Tout vitré : 60 × 550 × 0,4 = **13,2 kW** ; lumière : 60 × 0,3 = 18 (unités relatives).
Alternative : baies 15 m² × 550 × 0,85 × 0,2 = **1,4 kW** ; murs 45 m² × 5 = 0,2 kW → **1,6 kW** ; lumière : 15 × 0,9 × 0,5 (le brise-soleil laisse passer environ la moitié de la lumière diffuse) = 6,75.
L'alternative divise les apports par **8** ; la lumière est plus faible mais suffisante si les baies sont bien réparties (FLJ à vérifier).`}
 ],
 quiz:[
  {q:"Sous les tropiques, la caractéristique la plus importante d'un vitrage est souvent :", o:["Son facteur solaire g","Son épaisseur","Sa couleur du cadre","Son prix au m²"], r:0, e:"Le soleil domine les échanges."},
  {q:"La sélectivité d'un vitrage est :", o:["TL/g","g/TL","Ug × g","1/Ug"], r:0, e:"Lumière par rapport à la chaleur."},
  {q:"Ug d'un simple vitrage :", o:["5,8 W/(m²·K)","0,5","1,1","20"], r:0, e:"Valeur courante."},
  {q:"Un cadre aluminium sans rupture de pont thermique :", o:["Est très conducteur","Est isolant","N'a pas d'effet","Supprime la condensation"], r:0, e:"Uf ≈ 5,7."},
  {q:"Contre le soleil, le plus efficace est :", o:["Une protection extérieure","Un double vitrage clair","Un rideau intérieur","Un cadre PVC"], r:0, e:"g global ≈ 0,15."}
 ]},

{id:"therm-14", niv:2, titre:"Renouvellement d'air : charges sensibles et latentes", duree:45, contenu:`## L'air neuf apporte chaleur et humidité
L'air extérieur qui entre dans un local climatisé (air neuf de ventilation, infiltrations par les portes et fenêtres) doit être **refroidi** et **déshumidifié**. Sous les tropiques, c'est un poste majeur du bilan de climatisation, et surtout un poste **d'humidité**.

## La charge sensible
Pour refroidir un débit d'air q (m³/h) de ΔT :
$$ Φ(sensible) = 0,34 × q × ΔT     (W)
(0,34 = ρ × c/3 600 = 1,2 × 1 000/3 600 Wh/(m³·K))

## La charge latente
Pour retirer de l'air l'humidité excédentaire Δx (g d'eau par kg d'air sec) :
$$ Φ(latente) = 0,83 × q × Δx     (W)
(0,83 ≈ 1,2 × 2 500/3 600 : 2 500 kJ/kg est la chaleur de condensation de l'eau)

Teneurs en eau utiles (g/kg) :
| Air | x (g/kg) |
|---|---|
| 32 °C ; 60 % | 18,0 |
| 30 °C ; 80 % | 21,5 |
| 28 °C ; 85 % | 20,2 |
| 25 °C ; 50 % | 9,9 |
| 24 °C ; 50 % | 9,3 |

> [!exemple] Air neuf d'un bureau de 5 personnes (125 m³/h)
> Extérieur 30 °C, 80 % (x = 21,5) ; intérieur 24 °C, 50 % (x = 9,3).
> Sensible : 0,34 × 125 × 6 = **255 W**.
> Latente : 0,83 × 125 × 12,2 = **1 266 W**.
> La charge **latente est cinq fois la charge sensible** : l'air tropical est surtout « lourd d'eau ». Un climatiseur sous-dimensionné en déshumidification laisse une ambiance fraîche mais moite.

## Les infiltrations
Les fuites d'air (menuiseries mal jointives, portes ouvertes) représentent souvent 0,5 à 1 volume par heure dans un local « fermé » : pour une chambre de 60 m³, 30 à 60 m³/h d'air chaud et humide qui entrent sans contrôle. Une bonne **étanchéité à l'air** est indispensable dans un local climatisé.

## Réduire la charge de l'air neuf
- Débit d'air neuf **juste nécessaire** (25 m³/h par personne au bureau), réglé selon l'occupation (sonde de CO₂) ;
- **Récupérateur** (échangeur) sur l'air extrait : un échangeur enthalpique récupère une grande partie de la fraîcheur **et** de la sécheresse de l'air extrait ;
- **Sas** et portes à fermeture automatique sur les entrées très fréquentées ;
- Préférer la **ventilation naturelle** dans les locaux qui peuvent s'en passer de climatisation.

> [!retenir]
> - Φs = 0,34 q ΔT ; Φl = 0,83 q Δx (q en m³/h, Δx en g/kg).
> - Sous les tropiques, la charge latente de l'air neuf dépasse souvent largement la charge sensible.
> - Étanchéité à l'air, débit ajusté, récupération d'énergie.`,
 exercices:[
  {t:"Charge sensible d'une infiltration", d:1, e:`Une chambre de 60 m³ climatisée à 24 °C reçoit des infiltrations de 0,5 vol/h d'air à 30 °C.
Calculer la charge sensible.`, c:`q = 0,5 × 60 = **30 m³/h** → Φs = 0,34 × 30 × 6 = **61 W**.`},
  {t:"Charge latente de la même infiltration", d:1, e:`L'air infiltré est à 30 °C et 80 % (x = 21,5 g/kg) ; la chambre est maintenue à 24 °C et 50 % (x = 9,3 g/kg).
Calculer la charge latente et la comparer à la charge sensible.`, c:`Φl = 0,83 × 30 × 12,2 = **304 W**, cinq fois la charge sensible (61 W).`},
  {t:"Air neuf d'une salle de classe climatisée", d:2, e:`Une classe climatisée de 35 élèves reçoit 15 m³/h d'air neuf par élève. Extérieur : 30 °C, 80 % (21,5 g/kg) ; intérieur : 26 °C, 55 % (11,5 g/kg).
Calculer les charges sensible et latente de l'air neuf.`, c:`q = 35 × 15 = **525 m³/h**.
Sensible : 0,34 × 525 × 4 = **714 W** ; latente : 0,83 × 525 × 10 = **4 358 W**.
Total ≈ **5,1 kW** pour le seul air neuf : la climatisation d'une classe coûte cher ; une bonne conception bioclimatique avec ventilation naturelle est souvent préférable.`},
  {t:"Énergie journalière de l'air neuf", d:2, e:`Reprendre le bureau de l'exemple (255 W sensible + 1 266 W latent) pendant 10 h par jour. Quelle énergie frigorifique faut-il fournir chaque jour pour l'air neuf ? Quelle électricité avec un climatiseur produisant 3 kWh de froid par kWh électrique ?`, c:`Puissance : 1 521 W × 10 h = **15,2 kWh de froid** par jour → électricité : 15,2/3 = **5,1 kWh/jour**.`},
  {t:"Intérêt d'un récupérateur enthalpique", d:3, e:`Un récupérateur enthalpique d'efficacité 70 % (sur la chaleur sensible et l'humidité) est installé sur la ventilation du bureau de l'exemple. Calculer les nouvelles charges et l'économie journalière d'électricité (10 h/jour, rendement de 3).`, c:`Charges restantes : 30 % de 255 = **77 W** et 30 % de 1 266 = **380 W** → **457 W** au lieu de 1 521 W.
Économie : 1 064 W × 10 h = 10,6 kWh de froid → **3,5 kWh électriques par jour**, environ 900 kWh par an (250 jours ouvrés).`}
 ],
 quiz:[
  {q:"Charge sensible de l'air neuf :", o:["0,34 × q × ΔT","0,83 × q × Δx","q/ΔT","U S ΔT"], r:0, e:"q en m³/h."},
  {q:"La charge latente correspond à :", o:["L'humidité à retirer de l'air","La chaleur du soleil","La chaleur des murs","L'éclairage"], r:0, e:"Condensation de la vapeur."},
  {q:"Sous les tropiques, pour l'air neuf, la charge latente est souvent :", o:["Plus grande que la charge sensible","Négligeable","Nulle","Négative"], r:0, e:"Air très humide."},
  {q:"Un récupérateur enthalpique récupère :", o:["La fraîcheur et la sécheresse de l'air extrait","Seulement la lumière","L'eau de pluie","Le bruit"], r:0, e:"Chaleur sensible et humidité."},
  {q:"Infiltrations courantes d'un local fermé :", o:["0,5 à 1 volume par heure","50 volumes par heure","0 volume","10 volumes par heure"], r:0, e:"D'où l'importance de l'étanchéité à l'air."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"therm-5", niv:3, titre:"Bilan thermique d'un local et choix du climatiseur", duree:60, contenu:`## La démarche
Le bilan thermique (ou bilan de climatisation) additionne, à l'heure la plus défavorable (en général 15 à 17 h), tous les apports de chaleur du local. Le climatiseur doit pouvoir les extraire.
**Apports sensibles** (élèvent la température) :
1. Toiture (si dernier niveau) : U × S × (T(as) − Ti) ;
2. Murs extérieurs : U × S × (α I/he + Te − Ti) ;
3. Vitrages : soleil S × I × g × F(s) + conduction U × S × ΔT ;
4. Occupants : 70 à 75 W chacun (sensible) ;
5. Éclairage et équipements : leur puissance électrique ;
6. Air neuf et infiltrations : 0,34 × q × ΔT.
**Apports latents** (humidité) :
7. Occupants : 35 à 55 W chacun ;
8. Air neuf et infiltrations : 0,83 × q × Δx.
On ajoute une **marge** d'environ 10 %, puis on choisit l'appareil dont la **puissance frigorifique** est juste supérieure.

## Unités du commerce
Les climatiseurs sont vendus en BTU/h ou en « CV » : 1 kW = 3 412 BTU/h.
| Appareil | Puissance frigorifique |
|---|---|
| 9 000 BTU/h (« 1 CV ») | 2,6 kW |
| 12 000 BTU/h (« 1,5 CV ») | 3,5 kW |
| 18 000 BTU/h (« 2 CV ») | 5,3 kW |
| 24 000 BTU/h (« 2,5 à 3 CV ») | 7,0 kW |
Attention : le « CV » commercial désigne une capacité de froid, pas la puissance électrique absorbée (environ trois fois plus faible).

> [!exemple] Bureau de 20 m² au dernier étage (5 × 4 × 3 m), 2 personnes
> Conditions : Te = 32 °C, 60 % (x = 18,0 g/kg) ; Ti = 25 °C, 50 % (x = 9,9 g/kg) ; façade ouest de 15 m² avec 3 m² de vitrage protégé par un store extérieur ; façade sud de 12 m² à l'ombre ; toiture-terrasse isolée (U = 0,58 ; T(as) = 70,5 °C).
> | Poste | Calcul | Apport |
> |---|---|---|
> | Toiture | 0,58 × 20 × 45,5 | 528 W |
> | Mur ouest (12 m²) | 2,47 × 12 × (0,6 × 500/25 + 7) | 563 W |
> | Mur sud (12 m²) | 2,47 × 12 × 7 | 207 W |
> | Vitrage : soleil | 3 × 500 × 0,15 | 225 W |
> | Vitrage : conduction | 5,8 × 3 × 7 | 122 W |
> | Occupants (sensible) | 2 × 75 | 150 W |
> | Ordinateurs | 2 × 120 | 240 W |
> | Éclairage | 20 × 10 | 200 W |
> | Air neuf (sensible), 50 m³/h | 0,34 × 50 × 7 | 119 W |
> | **Total sensible** | | **2 354 W** |
> | Occupants (latent) | 2 × 55 | 110 W |
> | Air neuf (latent) | 0,83 × 50 × 8,1 | 338 W |
> | **Total latent** | | **448 W** |
> Total : 2 802 W ; avec 10 % de marge : **3,1 kW** → climatiseur de **12 000 BTU/h** (3,5 kW).
> Sans le store extérieur (vitrage clair, g = 0,85), l'apport du vitrage passerait de 225 à 1 275 W : total 4,2 kW → il faudrait un **18 000 BTU/h**.

## Les erreurs à éviter
- **Surdimensionner** : l'appareil fonctionne par courtes périodes, déshumidifie mal (ambiance froide et moite) et coûte plus cher ;
- Oublier la **charge latente** de l'air neuf (essentielle sous les tropiques) ;
- Utiliser des **ratios** (« 1 CV pour 15 m² ») sans tenir compte de la toiture, de l'orientation et de l'occupation : utiles pour un ordre de grandeur, ils ne remplacent pas le bilan ;
- Négliger les **protections solaires** : c'est souvent la mesure qui réduit le plus la taille du climatiseur.

> [!retenir]
> - Bilan = toiture + murs + vitrages + occupants + équipements + air neuf (sensible et latent) + 10 %.
> - 1 kW = 3 412 BTU/h ; 12 000 BTU/h ≈ 3,5 kW de froid.
> - La puissance frigorifique n'est pas la puissance électrique (≈ 3 fois moins).
> - Les protections solaires réduisent fortement la puissance nécessaire.`,
 exercices:[
  {t:"Conversions", d:1, e:`a) Convertir 18 000 BTU/h en kW.
b) Un bilan donne 4,6 kW avec la marge : quel appareil du commerce choisir ?`, c:`a) 18 000/3 412 = **5,3 kW**.
b) 4,6 kW × 3 412 = 15 700 BTU/h → appareil de **18 000 BTU/h** (5,3 kW), le 12 000 BTU/h (3,5 kW) étant insuffisant.`},
  {t:"Bilan d'une chambre", d:2, e:`Chambre de 4 × 3,5 × 2,8 m à un étage intermédiaire (pas de toiture). Mur sud à l'ombre : 9,7 m² (U = 2,47) ; fenêtre sud de 1,5 m² (U = 5,8), soleil diffus 200 W/m², g = 0,85, débord (F(s) = 0,3). La nuit : 2 occupants (60 W sensibles + 35 W latents chacun), éclairage 30 W, téléviseur 80 W. Infiltrations : 0,5 vol/h. Te = 30 °C (21,5 g/kg) ; Ti = 24 °C (9,3 g/kg).
Établir le bilan et choisir le climatiseur.`, c:`Mur : 2,47 × 9,7 × 6 = **144 W** ; fenêtre soleil : 1,5 × 200 × 0,85 × 0,3 = **77 W** ; conduction : 5,8 × 1,5 × 6 = **52 W** ; occupants : **120 W** ; éclairage + TV : **110 W** ; infiltrations : q = 19,6 m³/h → 0,34 × 19,6 × 6 = **40 W**.
Sensible : **543 W** ; latent : 70 + 0,83 × 19,6 × 12,2 = 70 + 198 = **268 W**.
Total : 811 W × 1,1 = **0,9 kW** → le plus petit appareil (**9 000 BTU/h**, 2,6 kW) suffit largement ; une chambre bien conçue n'a pas besoin de plus.`},
  {t:"Salle de réunion", d:2, e:`Salle de réunion de 60 m², sans mur extérieur, sous une toiture isolée (U = 0,58 ; T(as) = 70,5 °C ; Ti = 25 °C). 20 personnes (75 W sensibles + 55 W latents), éclairage 10 W/m², vidéoprojecteur 300 W, air neuf 25 m³/h par personne (Te = 32 °C, x = 18,0 ; Ti : x = 9,9).
Calculer le bilan et la puissance à installer.`, c:`Toiture : 0,58 × 60 × 45,5 = **1 583 W** ; occupants : **1 500 W** ; éclairage : **600 W** ; projecteur : **300 W** ; air neuf (500 m³/h) : 0,34 × 500 × 7 = **1 190 W** → sensible **5 173 W**.
Latent : 20 × 55 + 0,83 × 500 × 8,1 = 1 100 + 3 362 = **4 462 W**.
Total : 9,6 kW × 1,1 = **10,6 kW** (≈ 36 000 BTU/h) : deux appareils de 18 000 BTU/h, ou une cassette de 10,5 kW. La moitié de la charge est latente : il faut un appareil qui déshumidifie bien.`},
  {t:"Effet de la toiture", d:2, e:`Dans l'exemple du bureau du cours, la toiture-terrasse n'est pas isolée (U = 3,51). Recalculer l'apport de la toiture et le nouveau total.`, c:`Toiture : 3,51 × 20 × 45,5 = **3 194 W** au lieu de 528 W.
Nouveau total : 2 802 − 528 + 3 194 = **5 468 W** ; avec 10 % : 6,0 kW → **24 000 BTU/h** au lieu de 12 000 : l'isolation de la toiture divise par deux la puissance à installer.`},
  {t:"Puissance électrique absorbée", d:1, e:`Un climatiseur de 12 000 BTU/h a un coefficient d'efficacité (EER) de 3,2. Quelle puissance électrique absorbe-t-il à pleine charge ? Quel courant sous 230 V (cos φ = 0,95) ?`, c:`Froid : 3,52 kW → électrique : 3,52/3,2 = **1,1 kW**.
I = 1 100/(230 × 0,95) = **5,0 A**.`}
 ],
 quiz:[
  {q:"Un climatiseur de 12 000 BTU/h fournit environ :", o:["3,5 kW de froid","12 kW","1 kW","35 kW"], r:0, e:"12 000/3 412."},
  {q:"L'heure la plus défavorable du bilan est en général :", o:["L'après-midi (15 à 17 h)","Minuit","6 h du matin","Midi pile toujours"], r:0, e:"Soleil à l'ouest et murs chauds."},
  {q:"Un climatiseur surdimensionné :", o:["Déshumidifie mal","Déshumidifie mieux","Consomme moins","Dure plus longtemps"], r:0, e:"Cycles courts."},
  {q:"La charge latente d'une personne au repos est d'environ :", o:["35 à 55 W","500 W","5 W","0 W"], r:0, e:"Respiration et transpiration."},
  {q:"La puissance électrique d'un climatiseur est, par rapport à sa puissance frigorifique :", o:["Environ trois fois plus faible","Égale","Trois fois plus grande","Dix fois plus grande"], r:0, e:"EER ≈ 3."}
 ]},

{id:"therm-8", niv:3, titre:"Régime variable : inertie, déphasage et amortissement", duree:50, contenu:`## Des températures qui varient
La température extérieure et le soleil varient au cours de la journée (minimum vers 6 h, maximum vers 14-15 h). Une paroi lourde ne transmet pas immédiatement ces variations : elle les **retarde** et les **atténue**. C'est l'effet de l'**inertie thermique**.

## La diffusivité thermique
$$ a = λ / (ρ × c)     (m²/s)
Elle mesure la vitesse à laquelle une variation de température pénètre dans un matériau : petite diffusivité = pénétration lente.

## Amortissement et déphasage
Pour une variation périodique de période T₀ = 24 h (86 400 s) à travers une couche d'épaisseur e (formules simplifiées d'une couche homogène) :
$$ amortissement : f = exp( − e × √(π / (a × T₀)) )
$$ déphasage : Δt = (e / 2) × √(T₀ / (π × a))
- f : rapport entre l'amplitude de la variation transmise et celle reçue (0,3 = l'onde de chaleur est réduite à 30 %) ;
- Δt : retard entre le maximum extérieur et le maximum transmis.

> [!exemple] Comparaison de parois
> | Paroi | a (m²/s) | Amortissement f | Déphasage |
> |---|---|---|---|
> | Lambris bois 2,5 cm | 1,6 × 10⁻⁷ | 0,68 | 1,5 h |
> | Parpaing creux 15 cm (équivalent) | 6,1 × 10⁻⁷ | 0,32 | 4,4 h |
> | Béton 20 cm | 9,5 × 10⁻⁷ | 0,29 | 4,7 h |
> | BTC 30 cm | 5,9 × 10⁻⁷ | 0,09 | 9,0 h |
> | Mur en terre de 40 cm | 5,6 × 10⁻⁷ | 0,04 | 12,4 h |
> Un mur en BTC de 30 cm transmet son maximum vers **minuit** si l'extérieur culmine à 15 h ; un mur en terre de 40 cm vers 3 h du matin, très atténué.

## Utiliser l'inertie selon le climat
**Climat sec (nord)** : fort écart jour-nuit. Les murs épais reçoivent la chaleur du jour et la restituent la nuit, quand on peut **ventiler** avec l'air frais nocturne : la chaleur est évacuée et les murs, refroidis, absorbent les apports du lendemain. Stratégie : **inertie + ventilation nocturne + fermeture et occultation le jour**.

**Climat humide (sud)** : faible écart jour-nuit (6 à 8 °C), nuits chaudes. Une paroi lourde **exposée au soleil** restitue sa chaleur la nuit… dans les chambres, et la ventilation nocturne la refroidit mal. Stratégie : **protéger les parois lourdes du soleil** (débords, isolation extérieure, végétation) ou construire **léger et ventilé** ; l'inertie intérieure reste utile pour lisser les apports internes.

## Inertie et climatisation
- Local climatisé **en continu** (hôpital, salle serveurs) : l'inertie lisse les pointes et réduit la puissance de pointe ;
- Local climatisé **par intermittence** (chambre la nuit, salle de réunion) : une forte inertie intérieure oblige à refroidir aussi les murs à chaque démarrage → isolation **côté intérieur**, local léger, refroidi rapidement.

> [!retenir]
> - a = λ/(ρ c) ; f = exp(− e √(π/(a T₀))) ; Δt = (e/2) √(T₀/(π a)).
> - Béton 20 cm : f ≈ 0,3, Δt ≈ 5 h ; BTC 30 cm : f ≈ 0,1, Δt ≈ 9 h.
> - Climat sec : inertie + ventilation nocturne ; climat humide : parois lourdes à l'ombre ou construction légère ventilée.`,
 exercices:[
  {t:"Diffusivité de matériaux", d:1, e:`Calculer la diffusivité : a) du béton (λ = 2,0 ; ρ = 2 400 ; c = 880) ; b) du bois (λ = 0,15 ; ρ = 600 ; c = 1 600).`, c:`a) a = 2,0/(2 400 × 880) = **9,5 × 10⁻⁷ m²/s**.
b) a = 0,15/(600 × 1 600) = **1,6 × 10⁻⁷ m²/s** : la chaleur pénètre 6 fois plus lentement dans le bois, mais une planche mince stocke peu.`},
  {t:"Déphasage d'un mur en béton", d:2, e:`Calculer le déphasage et l'amortissement d'un mur en béton de 20 cm (a = 9,5 × 10⁻⁷ m²/s ; T₀ = 86 400 s).`, c:`√(π/(a T₀)) = √(3,1416/(9,5 × 10⁻⁷ × 86 400)) = √38,3 = **6,19 m⁻¹**.
f = exp(− 0,20 × 6,19) = exp(− 1,24) = **0,29**.
Δt = (0,20/2) × √(86 400/(π × 9,5 × 10⁻⁷)) = 0,10 × 170 200 = 17 020 s = **4,7 h**.`},
  {t:"Épaisseur pour un déphasage de 10 h", d:2, e:`Quelle épaisseur de BTC (a = 5,85 × 10⁻⁷ m²/s) donne un déphasage de 10 heures ?`, c:`√(T₀/(π a)) = √(86 400/(π × 5,85 × 10⁻⁷)) = √(4,70 × 10¹⁰) = 216 800 s/m.
Δt = 36 000 s = (e/2) × 216 800 → e = 2 × 36 000/216 800 = **0,33 m** : un mur de **33 cm** de BTC.`},
  {t:"Heure du maximum intérieur", d:2, e:`La surface extérieure d'un mur ouest culmine à 16 h. À quelle heure le maximum arrive-t-il à l'intérieur pour : a) un mur en béton de 20 cm ? b) un mur en BTC de 30 cm ? Lequel convient le mieux à un bureau occupé de 8 h à 17 h à Korhogo ? À une chambre à Abidjan ?`, c:`a) 16 h + 4,7 h ≈ **20 h 40** ; b) 16 h + 9 h = **1 h du matin**.
Bureau à Korhogo : les deux restituent la chaleur après le départ des occupants ; le BTC, beaucoup plus amorti (f = 0,09), est le meilleur ; la ventilation nocturne évacue la chaleur.
Chambre à Abidjan : les deux restituent la chaleur la nuit dans la chambre, alors que l'air extérieur reste chaud : il faut **protéger le mur du soleil** (débord, végétation, isolation extérieure) plutôt que compter sur l'inertie.`},
  {t:"Ventilation nocturne", d:3, e:`À Korhogo, en saison sèche, l'air extérieur est à 20 °C la nuit et 37 °C le jour. Un bâtiment en BTC de 100 m² de murs intérieurs (on considère les 10 premiers cm, ρ c = 1,7 MJ/(m³·K)) est ventilé la nuit et fermé le jour.
Si les murs se refroidissent de 4 °C pendant la nuit, combien de chaleur peuvent-ils absorber le lendemain sans que la pièce ne s'échauffe ?`, c:`Volume actif : 100 × 0,10 = **10 m³** → Q = 1,7 × 10⁶ × 10 × 4 = **68 MJ** = 68/3,6 = **18,9 kWh**.
C'est l'équivalent de plusieurs heures de fonctionnement d'un climatiseur de 3,5 kW, fourni gratuitement par l'air frais de la nuit.`}
 ],
 quiz:[
  {q:"La diffusivité thermique vaut :", o:["λ/(ρ c)","ρ c/λ","λ ρ c","e/λ"], r:0, e:"Vitesse de pénétration de la chaleur."},
  {q:"Le déphasage d'une paroi est :", o:["Le retard de la chaleur transmise","Sa résistance thermique","Son poids","Sa couleur"], r:0, e:"En heures."},
  {q:"Un amortissement de 0,1 signifie :", o:["La variation transmise est réduite à 10 %","La chaleur est multipliée par 10","Aucun effet","Un retard de 10 h"], r:0, e:"Onde très atténuée."},
  {q:"Au nord sec, une forte inertie est efficace avec :", o:["Une ventilation nocturne","Une ventilation permanente de jour","Des parois au soleil","Rien"], r:0, e:"La nuit refroidit les murs."},
  {q:"Pour une chambre climatisée seulement la nuit, on préfère :", o:["Un isolant côté intérieur","Des murs intérieurs très lourds","Aucune isolation","Une toiture sombre"], r:0, e:"Refroidissement rapide."}
 ]},

{id:"therm-15", niv:3, titre:"Les systèmes de climatisation : choisir, implanter, entretenir", duree:50, contenu:`## Le principe de la machine frigorifique
Un climatiseur est une **pompe à chaleur** : un fluide frigorigène circule en boucle entre deux échangeurs.
1. Dans l'**évaporateur** (unité intérieure), le fluide s'évapore à basse température et **absorbe la chaleur** de la pièce (l'air refroidi y dépose aussi son humidité : condensats) ;
2. Le **compresseur** (unité extérieure) comprime la vapeur, qui s'échauffe ;
3. Dans le **condenseur** (unité extérieure), le fluide se condense et **rejette la chaleur** dehors ;
4. Le **détendeur** fait chuter la pression, et le cycle recommence.
Chaleur rejetée dehors = chaleur extraite de la pièce + énergie électrique du compresseur.

## L'efficacité
$$ EER = puissance frigorifique / puissance électrique absorbée
- EER de 2,5 à 3,5 pour les appareils courants ; 4 à 5 et plus pour les meilleurs ;
- **SEER** : efficacité **saisonnière**, sur une année d'utilisation (charges partielles comprises) ;
- Les appareils **inverter** (vitesse de compresseur variable) adaptent leur puissance au besoin : moins de marches-arrêts, meilleure déshumidification, consommation réduite de 20 à 40 %.

## Les principaux systèmes
| Système | Usage | Puissance courante |
|---|---|---|
| Climatiseur de fenêtre (monobloc) | Petites pièces, provisoire | 1,5 à 3,5 kW |
| Split mural | Chambres, bureaux, séjours | 2,6 à 7 kW |
| Cassette, plafonnier, gainable | Salles, magasins, open spaces | 5 à 15 kW |
| Multisplit | Plusieurs pièces, une unité extérieure | 5 à 12 kW |
| DRV / VRV (débit de réfrigérant variable) | Immeubles de bureaux, hôtels | 20 à 150 kW |
| Eau glacée (groupe froid + ventilo-convecteurs, CTA) | Grands bâtiments, hôpitaux, centres commerciaux | 100 kW à plusieurs MW |
Les fluides frigorigènes ont un fort effet de serre en cas de fuite (R410A, R32 moins nocif) : la mise en service, l'entretien et la récupération doivent être faits par des techniciens qualifiés.

## Bien implanter
- **Unité extérieure** à l'**ombre**, bien **ventilée**, loin des sources de chaleur : en plein soleil ou enfermée, elle perd 10 à 20 % de performance et s'use plus vite ;
- **Liaisons frigorifiques** courtes et isolées ; supports antivibratiles ;
- **Évacuation des condensats** raccordée à un réseau (pente, siphon), jamais en façade ou sur le trottoir ;
- **Unité intérieure** placée pour souffler le long du plafond, sans viser directement les occupants ;
- Local **fermé** et étanche à l'air (fenêtres jointives, portes fermées), **air neuf** prévu séparément.

## Entretenir
- Nettoyer les **filtres** tous les mois (un filtre encrassé augmente la consommation de 5 à 15 % et dégrade la qualité de l'air) ;
- Nettoyer les **échangeurs** et vérifier les condensats chaque année ;
- Contrôler l'étanchéité du circuit (fuites de fluide) ;
- Désinfecter les bacs à condensats (bactéries).

> [!retenir]
> - Évaporateur (absorbe), compresseur, condenseur (rejette), détendeur.
> - EER = froid/électricité (2,5 à 5) ; inverter pour les usages variables.
> - Split pour les pièces, DRV pour les immeubles, eau glacée pour les grands bâtiments.
> - Unité extérieure à l'ombre et ventilée, condensats raccordés, filtres nettoyés.`,
 exercices:[
  {t:"Chaleur rejetée à l'extérieur", d:1, e:`Un climatiseur extrait 5,3 kW d'une pièce et absorbe 1,7 kW électriques.
Calculer son EER et la chaleur rejetée par l'unité extérieure.`, c:`EER = 5,3/1,7 = **3,1**.
Chaleur rejetée : 5,3 + 1,7 = **7,0 kW** : l'unité extérieure doit pouvoir l'évacuer (ombre, ventilation).`},
  {t:"Débit de condensats", d:1, e:`La charge latente traitée par un climatiseur est de 600 W. Quelle quantité d'eau condense-t-il par heure (2 450 kJ/kg) ? Sur 10 h ?`, c:`600 W × 3 600 s = 2,16 MJ par heure → 2 160/2 450 = **0,88 kg/h** (0,88 L).
Sur 10 h : **8,8 L** d'eau à évacuer proprement.`},
  {t:"Choisir un système", d:2, e:`Proposer un système de climatisation pour : a) une villa de 4 chambres climatisées la nuit ; b) un immeuble de bureaux de 8 niveaux (1 200 m² climatisés) ; c) un centre commercial de 15 000 m².`, c:`a) **Splits muraux inverter** (un par chambre, 9 000 BTU/h), ou un **multisplit** si l'on veut limiter les unités extérieures.
b) **DRV/VRV** : une ou plusieurs unités extérieures en toiture, unités intérieures par bureau, régulation individuelle et récupération possible.
c) **Eau glacée** : groupes froids centralisés, réseau d'eau glacée, centrales de traitement d'air (air neuf déshumidifié) et ventilo-convecteurs.`},
  {t:"Unité extérieure au soleil", d:2, e:`Un split de 3,5 kW froid a un EER de 3,2 à l'ombre. Installé en plein soleil, contre un mur chaud, son EER tombe à 2,7.
Calculer la puissance électrique absorbée dans les deux cas et le surcoût annuel pour 2 000 h de fonctionnement à 90 F/kWh.`, c:`Ombre : 3,5/3,2 = **1,09 kW** ; soleil : 3,5/2,7 = **1,30 kW**.
Écart : 0,21 kW × 2 000 h = **420 kWh/an** → **37 800 F/an** perdus, pour un simple mauvais emplacement.`},
  {t:"Filtres encrassés", d:3, e:`Un hôtel exploite 40 splits de 1,1 kW électriques, 3 000 h par an. Faute d'entretien, les filtres encrassés augmentent la consommation de 10 %.
Calculer l'énergie et le coût perdus par an (90 F/kWh), puis les comparer au coût d'un nettoyage mensuel des filtres (2 500 F par appareil et par mois).`, c:`Consommation normale : 40 × 1,1 × 3 000 = **132 000 kWh/an** ; surconsommation 10 % : **13 200 kWh** → **1 188 000 F/an**.
Nettoyage : 40 × 2 500 × 12 = **1 200 000 F/an** : l'entretien est remboursé par la seule économie d'énergie, et il améliore en plus la qualité de l'air et la durée de vie des appareils.`}
 ],
 quiz:[
  {q:"Dans un climatiseur, la chaleur de la pièce est absorbée par :", o:["L'évaporateur","Le condenseur","Le compresseur","Le filtre"], r:0, e:"Unité intérieure."},
  {q:"L'EER est le rapport :", o:["Froid produit/électricité absorbée","Électricité/froid","Froid/surface","Chaleur rejetée/froid"], r:0, e:"Efficacité."},
  {q:"Un appareil inverter :", o:["Adapte sa puissance au besoin","Fonctionne toujours à fond","N'a pas de compresseur","Ne déshumidifie pas"], r:0, e:"Vitesse variable."},
  {q:"L'unité extérieure doit être placée :", o:["À l'ombre et bien ventilée","En plein soleil","Dans un placard fermé","Contre un four"], r:0, e:"Sinon perte de performance."},
  {q:"Pour un grand centre commercial, on utilise plutôt :", o:["Un système à eau glacée","Des climatiseurs de fenêtre","Un seul split","Des ventilateurs seuls"], r:0, e:"Production centralisée."}
 ]},

{id:"therm-9", niv:3, titre:"Performance énergétique et consommation de climatisation", duree:50, contenu:`## De la puissance à l'énergie
Le bilan thermique donne la puissance **maximale** ; la consommation dépend de la **charge moyenne** sur l'année et du rendement :
$$ E(électrique) = Σ (puissance frigorifique moyenne × heures de fonctionnement) / SEER
On peut aussi écrire : E = P(froid installée) × taux de charge moyen × heures/SEER.
> [!exemple] Bureau de 3 kW de froid
> Taux de charge moyen 60 % ; 10 h par jour ; 250 jours ; SEER = 3,5.
> E = 3 × 0,6 × 10 × 250/3,5 = **1 286 kWh/an** → à 90 F/kWh : **115 700 F/an**.

## Les indicateurs
- **Consommation par m²** (kWh/(m²·an)) : un immeuble de bureaux climatisé en Afrique de l'Ouest consomme couramment **150 à 300 kWh/(m²·an)**, dont la moitié ou plus pour la climatisation ; un bâtiment bien conçu peut descendre sous 100 ;
- **Puissance installée par m²** (W/m²) ;
- Des démarches de certification (par exemple EDGE, utilisée en Afrique) exigent une réduction d'au moins 20 % de l'énergie par rapport à un bâtiment de référence.

## Les leviers et leurs gains
| Action | Économie typique sur la climatisation |
|---|---|
| Relever la consigne de 21 à 25 °C | 25 à 30 % (6 à 8 % par degré) |
| Isoler et éclaircir la toiture (dernier niveau) | 15 à 30 % |
| Protections solaires extérieures | 10 à 25 % |
| Appareils inverter à haut SEER | 20 à 40 % |
| LED et équipements sobres | 5 à 10 % (moins de chaleur interne) |
| Étanchéité à l'air, portes fermées | 5 à 15 % |
| Entretien des filtres | 5 à 15 % |
| Arrêt automatique (détecteurs, horloges) | 10 à 20 % |
Les économies de plusieurs actions **ne s'additionnent pas** : elles se **multiplient**. Après une première économie de 15 %, une seconde de 10 % ne porte que sur les 85 % restants.

> [!exemple] Bureau de 500 m² à 250 kWh/(m²·an)
> Consommation : 500 × 250 = **125 000 kWh/an** (11,25 M F à 90 F/kWh).
> Isolation de la toiture (− 15 %), protections solaires (− 10 %), consigne à 25 °C (− 25 %) :
> 125 000 × 0,85 × 0,90 × 0,75 = **71 700 kWh/an**, soit **− 43 %** et environ **4,8 M F économisés par an**.

## Le temps de retour
$$ temps de retour simple = investissement / économie annuelle
On classe les actions par temps de retour : les réglages et l'entretien se remboursent en quelques mois, les protections solaires et l'isolation de toiture en 2 à 5 ans, le remplacement des appareils en 3 à 8 ans.

> [!retenir]
> - E = P(froid) × charge moyenne × heures/SEER.
> - Bureaux climatisés : 150 à 300 kWh/(m²·an) ; bien conçus : < 100.
> - Les gains se multiplient : (1 − p₁)(1 − p₂)…
> - Classer les actions par temps de retour.`,
 exercices:[
  {t:"Consommation annuelle", d:1, e:`Une chambre d'hôtel est équipée d'un split de 2,6 kW de froid (SEER = 4) ; charge moyenne 50 %, 12 h par jour, 365 jours.
Calculer la consommation annuelle et le coût à 90 F/kWh.`, c:`E = 2,6 × 0,5 × 12 × 365/4 = **1 424 kWh/an** → **128 000 F/an** par chambre.`},
  {t:"Choisir un appareil plus efficace", d:2, e:`Un magasin a besoin de 4 kW de froid en moyenne (taux de charge déjà inclus), 8 h par jour, 300 jours par an. On compare un appareil de SEER 2,5 à 600 000 F et un appareil inverter de SEER 5 à 900 000 F.
Calculer les consommations, l'économie annuelle et le temps de retour du surcoût.`, c:`SEER 2,5 : 4 × 8 × 300/2,5 = **3 840 kWh/an** ; SEER 5 : **1 920 kWh/an**.
Économie : 1 920 kWh × 90 = **172 800 F/an** ; surcoût 300 000 F → temps de retour **1,7 an**.`},
  {t:"Gains combinés", d:2, e:`Un bâtiment consomme 80 000 kWh/an en climatisation. On réalise trois actions : − 20 %, − 15 % et − 10 %.
Calculer la consommation finale et l'économie totale en %. Pourquoi n'est-ce pas 45 % ?`, c:`80 000 × 0,80 × 0,85 × 0,90 = **48 960 kWh/an** → économie **38,8 %**.
Chaque action ne porte que sur la consommation qui reste après les précédentes : les gains se **multiplient**, ils ne s'additionnent pas.`},
  {t:"Consigne de température", d:1, e:`Un bureau dont la climatisation consomme 20 000 kWh/an est réglé à 22 °C. On passe à 25 °C (− 7 % par degré, en gains successifs).
Estimer la nouvelle consommation.`, c:`20 000 × 0,93³ = 20 000 × 0,804 = **16 090 kWh/an** (− 3 900 kWh, environ 350 000 F/an).`},
  {t:"Plan d'économies chiffré", d:3, e:`Un immeuble de bureaux de 1 000 m² consomme 260 kWh/(m²·an), dont 60 % pour la climatisation (90 F/kWh). Actions envisagées sur la climatisation : réglages et entretien (− 15 % ; coût 1 M F) ; films et brise-soleil (− 12 % ; 12 M F) ; isolation de la toiture (− 10 % ; 15 M F).
Calculer l'économie de chaque action (dans l'ordre donné) et son temps de retour.`, c:`Climatisation : 0,60 × 260 × 1 000 = **156 000 kWh/an**.
1) Réglages : 15 % × 156 000 = 23 400 kWh → **2,11 M F/an** ; retour **0,5 an**. Reste 132 600 kWh.
2) Protections : 12 % × 132 600 = 15 912 kWh → **1,43 M F/an** ; retour **8,4 ans**. Reste 116 688 kWh.
3) Toiture : 10 % × 116 688 = 11 669 kWh → **1,05 M F/an** ; retour **14,3 ans**.
On commence par les réglages et l'entretien ; les autres actions se justifient surtout lors d'une rénovation (et améliorent le confort, la durée de vie des équipements).`}
 ],
 quiz:[
  {q:"La consommation électrique d'une climatisation :", o:["P(froid) × charge moyenne × heures/SEER","P(froid) × SEER","Heures/SEER","P(froid)/heures"], r:0, e:"Énergie sur l'année."},
  {q:"Relever la consigne d'un degré économise environ :", o:["6 à 8 %","50 %","0,1 %","100 %"], r:0, e:"Règle pratique."},
  {q:"Deux actions de − 20 % et − 10 % donnent au total :", o:["− 28 %","− 30 %","− 10 %","− 2 %"], r:0, e:"0,8 × 0,9 = 0,72."},
  {q:"Temps de retour simple :", o:["Investissement/économie annuelle","Économie/investissement","Investissement × économie","Durée de vie"], r:0, e:"En années."},
  {q:"Un immeuble de bureaux climatisé consomme couramment :", o:["150 à 300 kWh/(m²·an)","5 kWh/(m²·an)","3 000 kWh/(m²·an)","0"], r:0, e:"Dont une grande part pour le froid."}
 ]},

{id:"therm-16", niv:3, titre:"Eau chaude solaire : dimensionner un chauffe-eau solaire", duree:45, contenu:`## Pourquoi l'eau chaude solaire ?
Produire de l'eau chaude à l'électricité coûte cher (hôtels, cliniques, internats, restaurants). Sous le soleil ivoirien, un **chauffe-eau solaire** couvre facilement 70 à 90 % des besoins.

## Les composants
- **Capteurs** : capteurs plans vitrés (une plaque noire absorbante parcourue par l'eau, sous un vitrage, dans un caisson isolé) ou tubes sous vide ;
- **Ballon de stockage** isolé (l'eau chauffée le jour est utilisée le soir et le matin) ;
- **Circulation** : par **thermosiphon** (l'eau chaude, plus légère, monte naturellement vers le ballon placé au-dessus des capteurs : simple, sans pompe) ou **forcée** (pompe et régulation, pour les grandes installations) ;
- **Appoint** électrique (ou gaz) pour les jours sans soleil.

## Les besoins
$$ Q = m × c × ΔT     (c = 4,18 kJ/(kg·K) ; 1 kWh = 3 600 kJ)
- Logement : 30 à 50 L par personne et par jour à 45-50 °C ;
- Hôtel : 50 à 80 L par chambre occupée ;
- Eau froide du réseau : 25 à 28 °C en Côte d'Ivoire (ΔT faible : c'est un avantage).

## La surface de capteurs
$$ S = Q(jour) / (H × η)
H : irradiation journalière dans le plan des capteurs (4,5 à 5,5 kWh/m²/jour) ; η : rendement moyen des capteurs (0,4 à 0,6).
Le **ballon** contient en général la consommation d'**une journée** (50 à 75 L par m² de capteur).

> [!exemple] Hôtel de 20 chambres (2 personnes, 50 L chacune)
> Besoin : 2 000 L/jour de 27 à 50 °C → Q = 2 000 × 4,18 × 23 = 192 280 kJ = **53,4 kWh/jour**.
> Capteurs (H = 5 ; η = 0,5) : S = 53,4/(5 × 0,5) = **21,4 m²** → par exemple 11 capteurs de 2 m² ; ballon de **2 000 L**.
> À l'électricité, ces besoins coûteraient 53,4 × 365 × 90 ≈ **1,75 M F par an**.

## Installer
- Capteurs orientés **plein sud**, inclinés de **10 à 20°**, sans ombre ;
- Ballon au-dessus des capteurs pour le thermosiphon, sinon pompe ;
- Tuyauteries **courtes et isolées** ;
- Prévoir la dilatation (vase d'expansion, soupape) et la **protection contre la surchauffe** ;
- Hygiène : monter périodiquement le ballon à **60 °C** (légionelles) ; mitigeur thermostatique pour éviter les brûlures au puisage.

> [!retenir]
> - Q = m c ΔT ; 1 kWh = 3 600 kJ.
> - S = Q/(H × η) ; ballon ≈ une journée de consommation.
> - Thermosiphon pour les petites installations ; capteurs au sud, 10 à 20°.
> - Économies importantes pour les hôtels, cliniques et internats.`,
 exercices:[
  {t:"Besoins d'une famille", d:1, e:`Une famille de 4 personnes utilise 40 L d'eau chaude par personne et par jour, chauffée de 27 à 47 °C.
Calculer l'énergie journalière nécessaire.`, c:`m = 160 kg → Q = 160 × 4,18 × 20 = 13 376 kJ = 13 376/3 600 = **3,7 kWh/jour**.`},
  {t:"Surface de capteurs d'une maison", d:1, e:`Avec les besoins de l'exercice précédent, H = 5 kWh/m²/jour et η = 0,5, quelle surface de capteurs faut-il ? Quel volume de ballon ?`, c:`S = 3,7/(5 × 0,5) = **1,5 m²** → un capteur de 2 m².
Ballon : 160 L de consommation → ballon de **200 L** (courant dans le commerce).`},
  {t:"Économie annuelle", d:2, e:`Un chauffe-eau solaire couvre 85 % des besoins de la famille (3,7 kWh/jour). Il coûte 650 000 F installé. Calculer l'économie annuelle par rapport à un chauffe-eau électrique (90 F/kWh) et le temps de retour.`, c:`Énergie solaire utile : 0,85 × 3,7 × 365 = **1 148 kWh/an** → **103 300 F/an**.
Temps de retour : 650 000/103 300 = **6,3 ans** (pour une durée de vie de 15 à 20 ans).`},
  {t:"Clinique", d:2, e:`Une clinique consomme 3 000 L d'eau chaude par jour à 55 °C (eau froide à 27 °C). H = 4,8 kWh/m²/jour ; η = 0,45.
Calculer les besoins journaliers, la surface de capteurs et le nombre de capteurs de 2,2 m².`, c:`Q = 3 000 × 4,18 × 28 = 351 120 kJ = **97,5 kWh/jour**.
S = 97,5/(4,8 × 0,45) = **45,1 m²** → 45,1/2,2 = 20,5 → **21 capteurs** ; ballon(s) de 3 000 L ; circulation forcée vu la taille.`},
  {t:"Vérifier le thermosiphon", d:3, e:`Pour un petit chauffe-eau à thermosiphon, on veut éviter que l'eau chaude du ballon ne redescende la nuit vers les capteurs (qui se refroidissent). Où placer le ballon ? Pourquoi les tuyauteries doivent-elles être courtes, isolées et sans contre-pente ?`, c:`Le **bas du ballon** doit être placé **au-dessus du haut des capteurs** (au moins 30 cm) : la nuit, l'eau froide (plus lourde) reste dans les capteurs et l'eau chaude dans le ballon : pas de circulation inverse.
Tuyauteries **courtes** et de bon diamètre : la force motrice du thermosiphon est faible (quelques pascals), toute perte de charge réduit le débit ; **isolées** pour ne pas perdre la chaleur ; **sans contre-pente** pour éviter les poches d'air qui bloquent la circulation.`}
 ],
 quiz:[
  {q:"Énergie pour chauffer 100 L d'eau de 20 °C :", o:["≈ 2,3 kWh","≈ 23 kWh","≈ 0,2 kWh","≈ 100 kWh"], r:0, e:"100 × 4,18 × 20/3 600."},
  {q:"Dans un thermosiphon, le ballon se place :", o:["Au-dessus des capteurs","Sous les capteurs","À côté, au même niveau obligatoirement","Dans le sol"], r:0, e:"L'eau chaude monte naturellement."},
  {q:"Volume de ballon conseillé :", o:["Environ une journée de consommation","Une semaine","Une heure","Un mois"], r:0, e:"Stockage jour-nuit."},
  {q:"Pour limiter les légionelles, on porte périodiquement le ballon à :", o:["60 °C","30 °C","100 °C","40 °C"], r:0, e:"Désinfection thermique."},
  {q:"Rendement moyen d'un capteur plan :", o:["0,4 à 0,6","0,05","0,99","2"], r:0, e:"Pertes optiques et thermiques."}
 ]}
]});
