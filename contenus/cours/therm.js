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
 sujet:{titre:"Les trois modes de transfert de chaleur dans une maison en tôle à Bouaké", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une famille de Bouaké se plaint de la chaleur dans sa maison couverte en **tôle sans faux plafond**. On analyse, mode par mode, d'où vient la chaleur ressentie.

**Données**
- T(K) = T(°C) + 273,15 ; σ = 5,67 × 10⁻⁸ W/(m²·K⁴) ;
- Conduction : φ = λ × ΔT / e ; convection : φ = h × ΔT ; rayonnement net entre deux surfaces : φ ≈ ε × σ × (T₁⁴ − T₂⁴) ;
- Dalle de béton d'une pièce voisine : **15 cm**, λ = **2 W/(m·K)**, faces à **38 °C** et **31 °C**, surface **60 m²** ;
- Peau d'un occupant à **34 °C**, air à **29 °C**, surface du corps **1,8 m²** ; h = **3 W/(m²·K)** en air calme, **12 W/(m²·K)** sous un ventilateur ;
- Sous-face de la tôle à **65 °C**, ε = **0,9** ; surfaces de la pièce à **33 °C** ; surface de toiture **60 m²**.

### Partie A — Notions (4 points)
1. Expliquer la différence entre température et chaleur. Convertir 36 °C et 29 °C en kelvins et donner l'écart. (2 pts)
2. Nommer les trois modes de transfert et donner pour chacun un exemple pris dans la maison. (2 pts)

### Partie B — Conduction (4 points)
3. Calculer la densité de flux et le flux total qui traversent la dalle de la pièce voisine. (3 pts)
4. Que deviendrait la densité de flux avec une dalle de 30 cm, toutes choses égales par ailleurs ? (1 pt)

### Partie C — Convection (5 points)
5. Calculer la densité de flux et la puissance cédées par la peau de l'occupant en air calme, puis sous le ventilateur. (3 pts)
6. Expliquer pourquoi le ventilateur rafraîchit l'occupant alors qu'il ne refroidit pas l'air. (2 pts)

### Partie D — Rayonnement (5 points)
7. Calculer la densité de flux émise par la sous-face de la tôle, puis l'échange net avec les surfaces de la pièce et la puissance correspondante pour 60 m². (3 pts)
8. On colle un film aluminium propre (ε = 0,05) sous la tôle, face à une lame d'air. Recalculer l'échange net et la puissance. (2 pts)

### Partie E — Synthèse (2 points)
9. Proposer une solution technique qui agit sur chacun des modes (absorption, conduction, rayonnement, convection) pour cette maison. (2 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. La **température** mesure l'agitation des molécules (°C ou K) ; la **chaleur** est une énergie (J) qui passe toujours du corps chaud vers le corps froid. 36 °C = **309,15 K** ; 29 °C = **302,15 K** ; écart **7 K** (= 7 °C). *(2 pts)*
2. **Conduction** : chaleur qui traverse la tôle ou un mur ; **convection** : air chaud qui monte sous la toiture, air brassé par le ventilateur ; **rayonnement** : chaleur « ressentie » sous la tôle brûlante. *(2 pts)*

### Partie B — Conduction (4 pts)
3. Loi de Fourier :
$$ φ = 2 × 7 / 0,15 = 93,3 W/m²
$$ Φ = 93,3 × 60 = 5 600 W
*(3 pts)*
4. φ est inversement proportionnel à l'épaisseur : **46,7 W/m²** (flux divisé par deux). *(1 pt)*

### Partie C — Convection (5 pts)
5. Écart peau-air : 34 − 29 = 5 °C.
- Air calme : φ = 3 × 5 = **15 W/m²** → P = 15 × 1,8 = **27 W** ;
- Ventilateur : φ = 12 × 5 = **60 W/m²** → P = 60 × 1,8 = **108 W**. *(3 pts)*
6. Le ventilateur ne baisse pas la température de l'air, il **augmente h** en renouvelant l'air au contact de la peau : le corps évacue quatre fois plus de chaleur par convection, et la sueur s'évapore mieux. *(2 pts)*

### Partie D — Rayonnement (5 pts)
7. T₁ = 338,15 K ; T₂ = 306,15 K.
$$ φ(émis) = 0,9 × 5,67 × 10⁻⁸ × 338,15⁴ ≈ 667 W/m²
$$ φ(net) = 0,9 × 5,67 × 10⁻⁸ × (338,15⁴ − 306,15⁴) ≈ 219 W/m²
$$ Φ = 219 × 60 ≈ 13,1 kW
C'est l'équivalent de **dix radiateurs électriques** allumés au-dessus des occupants. *(3 pts)*
8. φ(net) = 0,05 × 5,67 × 10⁻⁸ × (338,15⁴ − 306,15⁴) ≈ **12 W/m²** → Φ ≈ **0,73 kW** : le rayonnement est divisé par **18**. *(2 pts)*

### Partie E — Synthèse (2 pts)
9. **Absorption** : peindre la tôle en blanc ou en couleur claire ; **conduction** : faux plafond avec 5 à 10 cm de laine minérale ; **rayonnement** : écran réfléchissant propre face à une lame d'air ; **convection** : ventiler les combles (entrées en bas de pente, sorties au faîtage) et utiliser des ventilateurs de plafond. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer le rayonnement avec des températures en °C : il faut des **kelvins**, à la puissance 4.
> - Confondre la densité de flux φ (W/m²) et le flux Φ (W).
> - Croire qu'un ventilateur refroidit l'air : il augmente seulement les échanges avec la peau.`},
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
 sujet:{titre:"Isolation ou inertie : choisir les matériaux d'une maison à Korhogo", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un particulier de Korhogo hésite entre des murs épais en **BTC** et des murs plus minces avec un **isolant**. On compare les deux notions : résistance thermique et inertie.

**Données**
- R = e / λ ; isolant thermique : λ ≤ 0,065 W/(m·K) ; Q = ρ × c × S × e × ΔT ; 1 kWh = 3,6 MJ ;
- Conductivités λ (W/(m·K)) : BTC **1,0** ; béton **2,0** ; brique **0,6** ; laine minérale **0,04** ; PSE **0,035** ; fibre de coco **0,05** ;
- Capacités volumiques ρ × c : BTC **1,7 MJ/(m³·K)** ; laine minérale **0,03 MJ/(m³·K)** ;
- Mur en BTC de **30 cm**, surface **40 m²**, qui s'échauffe en moyenne de **5 °C** dans la journée ;
- Évacuation nocturne : Φ = 0,34 × q × ΔT (W ; q en m³/h), écart air intérieur-extérieur la nuit : **4 °C**, durée **8 h**.

### Partie A — Notions (4 points)
1. Définir la conductivité thermique λ. Pourquoi les isolants sont-ils efficaces ? (2 pts)
2. Parmi les matériaux des données, lesquels sont des isolants au sens strict ? (2 pts)

### Partie B — Résistances thermiques (6 points)
3. Calculer la résistance de : 30 cm de BTC ; 15 cm de béton ; 8 cm de laine ; 6 cm de PSE ; 5 cm de fibre de coco. (3 pts)
4. Quelle épaisseur de béton, puis de brique, donnerait la même résistance que 8 cm de laine ? (2 pts)
5. Conclure : un mur lourd est-il isolant ? (1 pt)

### Partie C — Inertie (7 points)
6. Calculer la chaleur stockée par le mur en BTC dans la journée (en MJ et en kWh). (3 pts)
7. Même calcul pour une couche de laine de 8 cm de même surface. Conclure. (1 pt)
8. On veut évacuer la chaleur stockée par le mur en 8 h de ventilation nocturne. Calculer la puissance moyenne à évacuer et le débit d'air nécessaire. (3 pts)

### Partie D — Stratégie (3 points)
9. Le climat de Korhogo est sec avec un fort écart jour-nuit ; celui d'Abidjan est humide avec des nuits chaudes. Quelle stratégie (isolation, inertie, ventilation) recommander dans chaque ville ? (3 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. λ (W/(m·K)) est le flux qui traverse 1 m² d'un matériau de 1 m d'épaisseur pour 1 °C d'écart : plus λ est **petit**, plus le matériau isole. Les isolants doivent leur efficacité à l'**air immobile** (λ = 0,025) emprisonné dans leurs fibres ou cellules. *(2 pts)*
2. λ ≤ 0,065 : **laine minérale**, **PSE** et **fibre de coco**. Le BTC, la brique et le béton ne sont pas des isolants. *(2 pts)*

### Partie B — Résistances (6 pts)
3. Résistances des couches :
| Couche | Calcul | R (m²·K/W) |
|---|---|---|
| BTC 30 cm | 0,30/1,0 | **0,30** |
| Béton 15 cm | 0,15/2,0 | **0,075** |
| Laine 8 cm | 0,08/0,04 | **2,00** |
| PSE 6 cm | 0,06/0,035 | **1,71** |
| Coco 5 cm | 0,05/0,05 | **1,00** |
*(3 pts)*
4. e = R × λ : béton : 2,0 × 2,0 = **4,0 m** ; brique : 2,0 × 0,6 = **1,20 m**. *(2 pts)*
5. Non : 30 cm de BTC isolent presque **sept fois moins** que 8 cm de laine. L'intérêt du mur lourd est ailleurs : l'**inertie**. *(1 pt)*

### Partie C — Inertie (7 pts)
6. Q = 1,7 × 10⁶ × 40 × 0,30 × 5 = **102 MJ** = 102/3,6 = **28,3 kWh**. *(3 pts)*
7. Q = 0,03 × 10⁶ × 40 × 0,08 × 5 = **0,48 MJ** (0,13 kWh) : 200 fois moins. La laine **isole** mais ne **stocke** presque rien. *(1 pt)*
8. P = 28,3 kWh / 8 h ≈ **3,5 kW** ;
$$ q = P / (0,34 × ΔT) = 3 540 / (0,34 × 4) ≈ 2 600 m³/h
C'est un débit important, obtenu par une **ventilation traversante** de nuit (fenêtres opposées grandes ouvertes) ou un ventilateur d'extraction. *(3 pts)*

### Partie D — Stratégie (3 pts)
9. **Korhogo (sec)** : murs épais à forte inertie (BTC, terre), **fermés et occultés le jour**, **ventilés la nuit** quand l'air est frais ; la toiture reste isolée. **Abidjan (humide)** : nuits chaudes, ventilation nocturne peu efficace : **protéger les parois lourdes du soleil** (débords, isolation extérieure) ou construire **léger et ventilé** ; isoler la toiture en priorité. *(3 pts)*

> [!attention] Erreurs à éviter
> - Confondre isolation (freiner le flux, R = e/λ) et inertie (stocker la chaleur, ρ c e).
> - Oublier de convertir les centimètres en mètres dans R = e/λ.
> - Croire que l'inertie seule rafraîchit : sans évacuation nocturne, la chaleur stockée revient dans la pièce.`},
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
 sujet:{titre:"Murs d'une chambre climatisée à Abidjan : coefficient U, flux et température de surface", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une chambre de **4,00 × 3,50 m**, hauteur **2,80 m**, est climatisée la nuit. Deux de ses murs donnent sur l'extérieur ; ils comptent une fenêtre de **1,5 m²**.

**Données**
- Mur actuel : enduit **1,5 cm** (λ = 1,15) + brique de terre cuite **20 cm** (λ = 0,6) + enduit **1,5 cm** (λ = 1,15) ;
- Rsi = **0,13** ; Rse = **0,04 m²·K/W** ; R(totale) = Rsi + Σ e/λ + Rse ; U = 1/R(totale) ; Φ = U × S × ΔT ;
- T(ext) = **33 °C** ; T(int) = **25 °C** ; utilisation **10 h/jour**, **365 jours** ;
- Climatiseur : **3 kWh** de froid par kWh électrique ; électricité **90 F/kWh** ;
- Variante isolée : l'enduit intérieur est remplacé par **4 cm de PSE** (λ = 0,035) et une **plaque de plâtre de 13 mm** (λ = 0,25) ; coût **9 000 F/m²**.

### Partie A — Notions (3 points)
1. Que représente le coefficient U ? Dans quelle unité s'exprime-t-il ? Pourquoi Rse est-il plus faible que Rsi ? (3 pts)

### Partie B — Le mur actuel (8 points)
2. Calculer la surface opaque des murs extérieurs. (1 pt)
3. Calculer la résistance totale et le coefficient U du mur (présenter un tableau). (3 pts)
4. Calculer le flux qui entre par ces murs (sans tenir compte du soleil). (2 pts)
5. Calculer la température de la surface intérieure du mur. Commenter. (2 pts)

### Partie C — Le mur isolé (5 points)
6. Calculer la nouvelle résistance totale et le nouveau U. (2 pts)
7. Calculer le nouveau flux et le pourcentage de réduction. (2 pts)
8. Calculer la nouvelle température de surface intérieure. (1 pt)

### Partie D — Économie (4 points)
9. Calculer, pour chaque solution, l'électricité consommée par an pour compenser ce flux et son coût ; en déduire l'économie annuelle. (3 pts)
10. Calculer le temps de retour de l'isolation. Pourquoi est-il en réalité plus court ? (1 pt)`,
  corrige:`### Partie A — Notions (3 pts)
1. U est le **flux qui traverse 1 m² de paroi pour 1 °C d'écart** entre l'air intérieur et l'air extérieur, en **W/(m²·K)** ; plus U est petit, plus la paroi isole. À l'extérieur, le **vent** augmente fortement les échanges par convection : la résistance superficielle est donc plus faible (0,04 contre 0,13). *(3 pts)*

### Partie B — Mur actuel (8 pts)
2. S = (4,00 + 3,50) × 2,80 − 1,5 = 21,0 − 1,5 = **19,5 m²**. *(1 pt)*
3. Résistance totale du mur :
| Couche | R (m²·K/W) |
|---|---|
| Rsi | 0,130 |
| Enduit 0,015/1,15 | 0,013 |
| Brique 0,20/0,6 | 0,333 |
| Enduit 0,015/1,15 | 0,013 |
| Rse | 0,040 |
| **Total** | **0,529** |
U = 1/0,529 = **1,89 W/(m²·K)**. *(3 pts)*
4. Φ = 1,89 × 19,5 × 8 ≈ **295 W**. *(2 pts)*
5. Chute dans Rsi : 0,13/0,529 × 8 = 1,97 °C → T(si) ≈ **27,0 °C**. La paroi est 2 °C plus chaude que l'air : elle **rayonne** vers l'occupant, qui ressent une chaleur près du mur. *(2 pts)*

### Partie C — Mur isolé (5 pts)
6. R = 0,13 + 0,052 (plâtre) + 1,143 (PSE) + 0,333 + 0,013 + 0,04 = **1,711 m²·K/W** → U = **0,58 W/(m²·K)**. *(2 pts)*
7. Φ = 0,584 × 19,5 × 8 ≈ **91 W** ; réduction : (295 − 91)/295 = **69 %**. *(2 pts)*
8. T(si) = 25 + 0,13/1,711 × 8 = **25,6 °C** : la paroi est presque à la température de l'air. *(1 pt)*

### Partie D — Économie (4 pts)
9. Consommations comparées :
| | Mur actuel | Mur isolé |
|---|---|---|
| Froid par jour (10 h) | 2,95 kWh | 0,91 kWh |
| Électricité par jour (÷ 3) | 0,98 kWh | 0,30 kWh |
| Électricité par an | **358 kWh** | **111 kWh** |
| Coût annuel | **32 270 F** | **9 980 F** |
Économie : **≈ 248 kWh** et **≈ 22 300 F par an**. *(3 pts)*
10. Investissement : 19,5 × 9 000 = 175 500 F → 175 500 / 22 300 ≈ **7,9 ans**. Le calcul ignore le **soleil** sur les murs (qui peut doubler l'écart de température équivalent) et le gain de confort : le retour réel est nettement plus court. *(1 pt)*

> [!attention] Erreurs à éviter
> - Oublier Rsi et Rse : U serait fortement surestimé.
> - Laisser la fenêtre dans la surface du mur : elle a son propre coefficient.
> - Confondre l'énergie de froid et l'énergie électrique (diviser par le rendement du climatiseur).`},
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
 sujet:{titre:"Inventaire des sources de chaleur d'une villa de 120 m²", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une villa de plain-pied de **120 m²** à Yamoussoukro est très chaude en début d'après-midi. On dresse l'inventaire des apports de chaleur à 15 h pour hiérarchiser les travaux.

**Données**
- Toiture en tôle **sans isolation ni faux plafond** : **210 W/m²** entrent dans les pièces ; après travaux (faux plafond, lame d'air, 5 cm de laine) : **27 W/m²** ;
- Fenêtres à l'ouest : **5 m²** de vitrage clair, I = **500 W/m²**, g = **0,85** ; des persiennes extérieures arrêtent **80 %** du soleil ;
- **5 occupants** : 100 W chacun dont **70 W sensibles** et **30 W latents** ;
- Éclairage : **10 lampes à incandescence de 60 W** allumées, remplaçables par des LED de **8 W** ;
- Appareils en marche : téléviseur **100 W**, réfrigérateur **70 W**, ordinateur **120 W**.

### Partie A — Notions (3 points)
1. Distinguer apports extérieurs et apports intérieurs ; en citer trois de chaque sorte. (2 pts)
2. Pourquoi dit-on que toute l'électricité consommée dans un local finit en chaleur ? (1 pt)

### Partie B — Situation actuelle (8 points)
3. Calculer chaque apport et le total à 15 h (présenter un tableau). (5 pts)
4. Quelle part du total représente la toiture ? (1 pt)
5. Séparer la chaleur sensible et la chaleur latente. Pourquoi la chaleur latente compte-t-elle pour un climatiseur ? (2 pts)

### Partie C — Après travaux (6 points)
6. Recalculer le bilan après isolation de la toiture, pose des persiennes et passage aux LED ; calculer la réduction obtenue. (4 pts)
7. Quel est maintenant le premier poste ? Proposer deux améliorations supplémentaires. (2 pts)

### Partie D — Leviers d'action (3 points)
8. Classer les actions possibles pour cette villa selon les quatre leviers : empêcher, réduire, évacuer, refroidir. (3 pts)`,
  corrige:`### Partie A — Notions (3 pts)
1. **Extérieurs** : soleil sur la toiture, soleil à travers les vitrages, soleil sur les murs, air chaud et humide qui entre, conduction à travers les parois. **Intérieurs** : occupants, éclairage, appareils (téléviseur, réfrigérateur, cuisson). *(2 pts)*
2. L'énergie électrique est transformée (lumière, mouvement, son) mais finit toujours **dégradée en chaleur** dans le local : une lampe de 60 W chauffe la pièce de 60 W. *(1 pt)*

### Partie B — Situation actuelle (8 pts)
3. Bilan à 15 h :
| Poste | Calcul | Apport |
|---|---|---|
| Toiture | 120 × 210 | 25 200 W |
| Fenêtres ouest | 5 × 500 × 0,85 | 2 125 W |
| Occupants | 5 × 100 | 500 W |
| Éclairage | 10 × 60 | 600 W |
| Appareils | 100 + 70 + 120 | 290 W |
| **Total** | | **28 715 W ≈ 28,7 kW** |
*(5 pts)*
4. 25 200 / 28 715 = **88 %** : la toiture apporte plus de sept fois toutes les autres sources réunies. *(1 pt)*
5. Latent : 5 × 30 = **150 W** (vapeur d'eau des occupants) ; sensible : **28 565 W**. Le climatiseur doit **condenser** cette vapeur pour éviter une ambiance moite : sous les tropiques, avec l'air extérieur humide, le latent représente souvent 25 à 40 % de son travail. *(2 pts)*

### Partie C — Après travaux (6 pts)
6. Bilan après travaux :
| Poste | Calcul | Apport |
|---|---|---|
| Toiture isolée | 120 × 27 | 3 240 W |
| Fenêtres avec persiennes | 2 125 × 0,20 | 425 W |
| Occupants | inchangé | 500 W |
| LED | 10 × 8 | 80 W |
| Appareils | inchangé | 290 W |
| **Total** | | **4 535 W** |
Réduction : (28 715 − 4 535)/28 715 = **84 %**. *(4 pts)*
7. La toiture reste le premier poste (**71 %**). Améliorations : peindre la tôle en **blanc**, **ventiler les combles** (aérateurs de faîtage), passer à **10 cm de laine** ou ajouter un **écran réfléchissant**. *(2 pts)*

### Partie D — Leviers (3 pts)
8. **Empêcher** : toiture claire, isolée et ventilée ; persiennes ; débords ; arbres à l'ouest. **Réduire** : LED, réfrigérateur performant, cuisine ventilée. **Évacuer** : ventilation traversante, ventilation nocturne, ouvertures hautes. **Refroidir** (en dernier) : ventilateurs de plafond, puis climatisation d'une chambre bien fermée. *(3 pts)*

> [!attention] Erreurs à éviter
> - Commencer par changer les lampes alors que la toiture représente près de 90 % des apports.
> - Oublier la chaleur latente (occupants, air humide) dans le dimensionnement d'un climatiseur.
> - Compter le soleil sur les vitrages sans le facteur solaire g.`},
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
 sujet:{titre:"Concevoir une maison fraîche à Abidjan : critique d'un avant-projet", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un client présente l'avant-projet de sa maison de **100 m²** à Abidjan et demande pourquoi le bureau d'études prévoit « trop de climatiseurs ».

**Description de l'avant-projet**
- Grande baie vitrée de **6 m²** sur la façade **ouest**, protégée par des **rideaux intérieurs** ;
- Toiture en **tôle de couleur sombre**, sans faux plafond ;
- **Aucun débord** de toiture ; fenêtres des chambres sur **une seule façade** ;
- Cour entièrement **bétonnée** autour de la maison ; éclairage par **lampes halogènes**.

**Données**
- Soleil sur la façade ouest à 16 h : I = **500 W/m²** ; vitrage clair g = **0,85** ;
- Un rideau intérieur arrête **35 %** du soleil ; une persienne extérieure en arrête **85 %** ;
- Fenêtre de la façade sud : hauteur **1,20 m**, haut de la fenêtre **0,30 m** sous le débord ; hauteur du soleil à midi en saison chaude : **62°** ;
- Consommation de climatisation estimée : **650 kWh/mois** pour l'avant-projet, **150 kWh/mois** pour une maison bien conçue ; électricité **90 F/kWh** ; surcoût de construction des améliorations : **1 800 000 F**.

### Partie A — Analyse critique (8 points)
1. Relever six défauts de conception de l'avant-projet et proposer une correction pour chacun. (6 pts)
2. Pourquoi ces choix coûtent-ils peu s'ils sont faits à la conception ? (2 pts)

### Partie B — Protections solaires (6 points)
3. Calculer l'apport solaire de la baie ouest : sans protection, avec le rideau intérieur, avec une persienne extérieure. (3 pts)
4. Calculer la longueur de débord qui ombrage entièrement la fenêtre sud à midi. (3 pts)

### Partie C — Ventilateur ou climatiseur (2 points)
5. Comparer un ventilateur de plafond et un climatiseur (puissance absorbée, effet sur le confort). À quelles conditions la climatisation est-elle justifiée ? (2 pts)

### Partie D — Bilan économique (4 points)
6. Calculer l'économie annuelle d'électricité et le temps de retour du surcoût de construction. (4 pts)`,
  corrige:`### Partie A — Analyse critique (8 pts)
1. Défauts relevés et corrections :
| Défaut | Correction |
|---|---|
| Baie de 6 m² à l'ouest (soleil bas de l'après-midi) | Ouvrir au **nord et au sud** ; réduire et protéger les baies ouest |
| Rideaux intérieurs seulement | **Protections extérieures** : persiennes, brise-soleil, volets |
| Tôle sombre sans faux plafond | Tôle **claire**, **faux plafond isolé** (5 à 10 cm de laine), **combles ventilés** |
| Aucun débord | **Débords de 60 cm à 1 m**, galerie ou véranda |
| Fenêtres sur une seule façade | **Ventilation traversante** (façades opposées, impostes) |
| Cour bétonnée, halogènes | **Végétation**, pelouse, arbres à l'est et à l'ouest ; éclairage **LED** |
*(6 pts — 1 pt par défaut corrigé)*
2. À la conception, on **choisit** une orientation, une forme de toiture ou une position de fenêtre sans surcoût notable ; une fois construit, il faut démolir, ajouter ou climatiser : c'est cher, parfois impossible. *(2 pts)*

### Partie B — Protections solaires (6 pts)
3. Sans protection : Φ = 6 × 500 × 0,85 = **2 550 W** ; rideau intérieur : 2 550 × 0,65 = **1 658 W** ; persienne extérieure : 2 550 × 0,15 = **383 W**. La protection extérieure est **quatre fois plus efficace** que le rideau, qui a déjà laissé entrer la chaleur derrière le vitrage. *(3 pts)*
4. Le débord doit arrêter les rayons qui atteindraient le bas de la fenêtre, situé à 0,30 + 1,20 = 1,50 m sous le débord :
$$ d = 1,50 / tan 62° = 1,50 / 1,881 ≈ 0,80 m
→ débord de **0,80 m** (dans la fourchette de 60 cm à 1 m). *(3 pts)*

### Partie C — Ventilateur ou climatiseur (2 pts)
5. Ventilateur de plafond : **50 à 75 W**, un courant d'air de 1 m/s vaut **3 à 4 °C** de moins ressentis ; climatiseur : **1 000 à 2 500 W**. La climatisation se justifie pour les pièces et les périodes qui en ont vraiment besoin, **réglée à 25-26 °C**, portes et fenêtres **fermées**, dans des locaux déjà protégés du soleil. *(2 pts)*

### Partie D — Bilan économique (4 pts)
6. Économie : (650 − 150) × 12 = **6 000 kWh/an** → 6 000 × 90 = **540 000 F/an**.
$$ temps de retour = 1 800 000 / 540 000 ≈ 3,3 ans
Le surcoût est remboursé en un peu plus de trois ans, puis la maison économise chaque année 540 000 F tout en étant plus confortable. *(4 pts)*

> [!attention] Erreurs à éviter
> - Croire qu'un rideau intérieur protège du soleil autant qu'une persienne : la chaleur est déjà entrée.
> - Calculer le débord avec la hauteur de la fenêtre seule, sans la distance entre le débord et le haut de la fenêtre.
> - Dimensionner la climatisation avant d'avoir corrigé la conception.`},
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
 sujet:{titre:"Coefficients U des parois et de la toiture d'un immeuble de bureaux", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On réhabilite un petit immeuble de bureaux à Cocody. On compare les parois actuelles et les parois améliorées.

**Données**
- Rsi = **0,13** (mur) ; Rse = **0,04** ; toiture (flux descendant) : Rsi = **0,17** ; R(totale) = Rsi + Σ e/λ + R(lame) + Rse ; U = 1/R ;
- Mur actuel : enduit extérieur **2 cm** (λ = 1,15) + parpaing creux **20 cm** (R = **0,23 m²·K/W**) + enduit intérieur **2 cm** (λ = 1,15) ;
- Mur amélioré : l'enduit intérieur est remplacé par **6 cm de PSE** (λ = 0,035) et une **plaque de plâtre de 13 mm** (λ = 0,25) ;
- Toiture améliorée : tôle (résistance négligeable) + combles à lame d'air (R = **0,17**) + **8 cm de laine** (λ = 0,04) + faux plafond en plâtre (R = **0,04**) ; tôle seule : U = **4,8 W/(m²·K)** ;
- Façade d'un bureau : **10,00 × 3,00 m** percée de **4 fenêtres de 1,50 × 1,20 m** en simple vitrage (Uw = **5,8 W/(m²·K)**) ; écart de température **7 °C**.

### Partie A — Notions (3 points)
1. Pourquoi les résistances des couches s'additionnent-elles ? (1 pt)
2. Comparer la résistance d'une lame d'air immobile, d'une lame avec une face réfléchissante et d'une lame fortement ventilée. (2 pts)

### Partie B — Les murs (7 points)
3. Calculer R(totale) et U du mur actuel. (2 pts)
4. Calculer R(totale) et U du mur amélioré (présenter un tableau). (4 pts)
5. Dans quel rapport le flux est-il divisé ? (1 pt)

### Partie C — La toiture (4 points)
6. Calculer U de la toiture améliorée. (3 pts)
7. Comparer avec la tôle seule. (1 pt)

### Partie D — Une façade composée (6 points)
8. Calculer, pour la façade avec le mur actuel puis avec le mur amélioré : le coefficient H = Σ U × S, le U moyen et le flux. (4 pts)
9. Quelle part du flux passe par les fenêtres dans chaque cas ? Conclure. (2 pts)`,
  corrige:`### Partie A — Notions (3 pts)
1. Le même flux traverse **successivement** toutes les couches (montage en **série**) : les écarts de température s'ajoutent, donc les résistances aussi. *(1 pt)*
2. Lame immobile de 2 à 5 cm : **≈ 0,17 m²·K/W** ; avec une face **réfléchissante** propre : **0,5 à 0,6** (rayonnement presque supprimé) ; lame **fortement ventilée** : **ne compte pas** comme résistance, mais elle évacue la chaleur avant qu'elle n'atteigne le plafond. *(2 pts)*

### Partie B — Murs (7 pts)
3. R = 0,04 + 0,017 + 0,23 + 0,017 + 0,13 = **0,434 m²·K/W** → U = **2,30 W/(m²·K)**. *(2 pts)*
4. Résistance du mur amélioré :
| Couche | R (m²·K/W) |
|---|---|
| Rse | 0,040 |
| Enduit 0,02/1,15 | 0,017 |
| Parpaing creux 20 cm | 0,230 |
| PSE 0,06/0,035 | 1,714 |
| Plâtre 0,013/0,25 | 0,052 |
| Rsi | 0,130 |
| **Total** | **2,183** |
U = 1/2,183 = **0,46 W/(m²·K)**. *(4 pts)*
5. 2,30/0,46 ≈ **5** : le flux à travers la partie opaque est divisé par cinq. *(1 pt)*

### Partie C — Toiture (4 pts)
6. R = 0,04 + 0,17 + 0,08/0,04 + 0,04 + 0,17 = 0,04 + 0,17 + 2,00 + 0,04 + 0,17 = **2,42 m²·K/W** → U = **0,41 W/(m²·K)**. *(3 pts)*
7. 4,8/0,41 ≈ **12** : la toiture améliorée laisse passer douze fois moins de chaleur que la tôle seule. *(1 pt)*

### Partie D — Façade composée (6 pts)
8. Fenêtres : 4 × 1,50 × 1,20 = **7,2 m²** ; partie opaque : 30 − 7,2 = **22,8 m²**.
| | Mur actuel | Mur amélioré |
|---|---|---|
| U × S mur | 2,30 × 22,8 = 52,4 W/K | 0,458 × 22,8 = 10,4 W/K |
| U × S fenêtres | 5,8 × 7,2 = 41,8 W/K | 41,8 W/K |
| **H** | **94,2 W/K** | **52,2 W/K** |
| U moyen = H/30 | **3,14 W/(m²·K)** | **1,74 W/(m²·K)** |
| Φ = H × 7 | **659 W** | **365 W** |
*(4 pts)*
9. Fenêtres : 41,8/94,2 = **44 %** avant, 41,8/52,2 = **80 %** après. Une fois les murs isolés, les **fenêtres** deviennent le point faible : il faut aussi les traiter (vitrage plus performant, protections, menuiseries à rupture de pont thermique). *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser Rsi = 0,13 pour une toiture : en flux descendant, Rsi = 0,17.
> - Compter une lame d'air ventilée comme une résistance.
> - Faire la moyenne des U sans pondérer par les surfaces.`},
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
 sujet:{titre:"Écran réfléchissant sous toiture et position de l'isolant dans un mur", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour un centre de santé à Daloa, on étudie l'intérêt d'un écran réfléchissant sous la toiture et la position de l'isolant dans les murs.

**Données**
- σ = 5,67 × 10⁻⁸ ; h(r) = 4 × ε × σ × T³ (T = 300 K, ε = 0,9) ; h(c) intérieur = **2,5** ; h(c) extérieur = **20 W/(m²·K)** ;
- Rayonnement entre deux surfaces : φ = ε(eff) × σ × (T₁⁴ − T₂⁴) avec 1/ε(eff) = 1/ε₁ + 1/ε₂ − 1 ;
- Sous-face de la tôle à **65 °C** ; faux plafond à **36 °C** (ε = 0,9) ; surface **80 m²** ;
- Mur à isolation extérieure (de l'extérieur vers l'intérieur) : Rse = 0,04 ; **PSE 5 cm** (λ = 0,035) ; **BTC 30 cm** (λ = 1,0) ; enduit **1,5 cm** (λ = 1,15) ; Rsi = 0,13 ;
- Variante à isolation intérieure : enduit extérieur 1,5 cm ; BTC 30 cm ; PSE 5 cm ; plaque de plâtre 13 mm (λ = 0,25) ;
- T(ext) = **34 °C** ; T(int) = **25 °C**.

### Partie A — Échanges superficiels (4 points)
1. Calculer h(r), puis les coefficients h intérieur et extérieur et les résistances Rsi et Rse correspondantes. Comparer aux valeurs conventionnelles. (3 pts)
2. Quelle part des échanges intérieurs se fait par rayonnement ? Conséquence pour le confort. (1 pt)

### Partie B — Rayonnement sous toiture (7 points)
3. Sous-face de tôle ordinaire (ε = 0,9) : calculer ε(eff), la densité de flux rayonnée vers le faux plafond et la puissance pour 80 m². (3 pts)
4. Même calcul avec un aluminium propre (ε = 0,05), puis poussiéreux (ε = 0,2). (3 pts)
5. À quelles conditions l'écran réfléchissant est-il efficace ? (1 pt)

### Partie C — Profil de température, isolation extérieure (6 points)
6. Calculer R(totale), U et la densité de flux du mur. (2 pts)
7. Calculer la température à chaque interface. (4 pts)

### Partie D — Position de l'isolant (3 points)
8. Calculer les températures de part et d'autre du BTC dans la variante à isolation intérieure. (2 pts)
9. Quelle solution choisir pour une salle d'hospitalisation climatisée en continu ? pour un bureau climatisé par intermittence ? (1 pt)`,
  corrige:`### Partie A — Échanges superficiels (4 pts)
1. h(r) = 4 × 0,9 × 5,67 × 10⁻⁸ × 300³ = **5,5 W/(m²·K)**.
- Intérieur : h = 2,5 + 5,5 = **8,0** → Rsi = 1/8 = **0,125 ≈ 0,13** ;
- Extérieur : h = 20 + 5,5 = **25,5** → Rse = **0,039 ≈ 0,04 m²·K/W**.
On retrouve les valeurs conventionnelles. *(3 pts)*
2. 5,5/8 = **69 %** : à l'intérieur, le rayonnement domine ; la **température des parois** compte autant que celle de l'air pour le confort. *(1 pt)*

### Partie B — Rayonnement sous toiture (7 pts)
3. T₁ = 338,15 K ; T₂ = 309,15 K ; T₁⁴ − T₂⁴ = 3,94 × 10⁹ K⁴.
$$ ε(eff) = 1/(1/0,9 + 1/0,9 − 1) = 0,82
$$ φ = 0,82 × 5,67 × 10⁻⁸ × 3,94 × 10⁹ ≈ 183 W/m²   →   Φ = 183 × 80 ≈ 14,6 kW
*(3 pts)*
4. Comparaison des sous-faces :
| Sous-face | ε(eff) | φ (W/m²) | Φ pour 80 m² |
|---|---|---|---|
| Ordinaire (0,9) | 0,82 | 183 | 14,6 kW |
| Aluminium propre (0,05) | 0,050 | **11** | **0,89 kW** |
| Aluminium poussiéreux (0,2) | 0,196 | **44** | **3,5 kW** |
L'écran propre divise le rayonnement par **16** ; poussiéreux, seulement par **4**. *(3 pts)*
5. Il doit faire **face à une lame d'air** (collé contre un matériau, il ne sert à rien) et rester **propre** : face réfléchissante tournée vers le bas, ou protégée de la poussière. *(1 pt)*

### Partie C — Isolation extérieure (6 pts)
6. R = 0,04 + 1,429 + 0,300 + 0,013 + 0,13 = **1,912 m²·K/W** → U = **0,52 W/(m²·K)** ; φ = 9/1,912 = **4,7 W/m²**. *(2 pts)*
7. Chute dans chaque couche : ΔT = R/1,912 × 9.
| Interface | Température |
|---|---|
| Air extérieur | 34,0 °C |
| Surface extérieure (après Rse : − 0,19) | **33,8 °C** |
| PSE / BTC (− 6,73) | **27,1 °C** |
| BTC / enduit (− 1,41) | **25,7 °C** |
| Surface intérieure (− 0,06) | **25,6 °C** |
*(4 pts)*

### Partie D — Position de l'isolant (3 pts)
8. R = 0,04 + 0,013 + 0,30 + 1,429 + 0,052 + 0,13 = 1,964. Faces du BTC : côté extérieur **33,8 °C**, côté intérieur **32,4 °C** : la maçonnerie reste à la température extérieure. *(2 pts)*
9. Salle d'hospitalisation climatisée en continu : **isolation extérieure** (le BTC, entre 25,7 et 27,1 °C, apporte son inertie au local et lisse les pointes). Bureau climatisé par intermittence : **isolation intérieure** (le local, léger, se refroidit vite sans refroidir les murs). *(1 pt)*

> [!attention] Erreurs à éviter
> - Poser l'écran réfléchissant directement contre l'isolant ou le plafond : sans lame d'air, il est inutile.
> - Oublier de convertir en kelvins avant d'élever à la puissance 4.
> - Croire que la position de l'isolant change beaucoup U : elle change surtout la **température de la maçonnerie** (inertie).`},
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
 sujet:{titre:"Toiture d'une villa et ponts thermiques d'une chambre climatisée", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour une villa de **110 m²** à San-Pédro, on compare plusieurs toitures, puis on étudie les ponts thermiques d'une chambre climatisée isolée par l'intérieur.

**Données**
- Température d'air-soleil : T(as) = T(ext) + α × I / he ; φ = U × (T(as) − T(int)) ;
- T(ext) = **33 °C** ; I = **950 W/m²** ; he = **22 W/(m²·K)** ; T(int) = **26 °C** ; α = **0,9** (tôle sombre) ou **0,3** (tôle blanche) ;
- U (W/(m²·K)) : tôle seule **4,8** ; tôle + faux plafond **2,4** ; tôle + faux plafond + 5 cm de laine **0,60** ; dalle béton 15 cm **3,5** ; dalle + 5 cm de PSE **0,58** ;
- Chambre : murs extérieurs isolés **24 m²** (U = **0,50**) ; jonctions avec les planchers haut et bas **18 m** (ψ = **0,75**) ; tableaux de fenêtres **8 m** (ψ = **0,35**) ; poteaux **5,6 m** (ψ = **0,5 W/(m·K)**) ; écart de température **8 °C** ;
- Avec une isolation extérieure continue : ψ = **0,10** (planchers) ; **0,10** (tableaux) ; **0,05** (poteaux).

### Partie A — Notion (2 points)
1. Qu'est-ce que la température d'air-soleil ? Pourquoi l'utilise-t-on pour une toiture ? (2 pts)

### Partie B — Comparaison de toitures (8 points)
2. Calculer T(as) pour la tôle sombre et pour la tôle blanche. (2 pts)
3. Avec une couverture sombre, calculer la densité de flux et la puissance pour les cinq toitures (présenter un tableau). (4 pts)
4. Recalculer pour une tôle blanche : tôle seule, puis tôle + faux plafond + laine. Conclure. (2 pts)

### Partie C — Ponts thermiques (7 points)
5. Calculer le coefficient de déperdition H de la chambre, en distinguant murs et ponts thermiques. Quelle part revient aux ponts thermiques ? (4 pts)
6. Calculer le flux correspondant. (1 pt)
7. Recalculer H et le flux avec une isolation extérieure continue ; calculer la réduction. (2 pts)

### Partie D — Points froids (3 points)
8. Pourquoi les ponts thermiques d'un local climatisé sont-ils des zones à risque de condensation ? Citer trois traitements. (3 pts)`,
  corrige:`### Partie A — Notion (2 pts)
1. C'est la température d'un air **fictif** qui produirait sur la face extérieure le même flux que l'air réel **plus le soleil absorbé**. Elle permet de traiter la toiture comme une paroi ordinaire : φ = U × (T(as) − T(int)). *(2 pts)*

### Partie B — Toitures (8 pts)
2. Sombre : T(as) = 33 + 0,9 × 950/22 = 33 + 38,9 = **71,9 °C** ; blanche : 33 + 0,3 × 950/22 = 33 + 13,0 = **46,0 °C**. *(2 pts)*
3. Écart T(as) − T(int) = 71,9 − 26 = 45,9 °C.
| Toiture | U | φ (W/m²) | Pour 110 m² |
|---|---|---|---|
| Tôle seule | 4,8 | 220 | **24,2 kW** |
| Tôle + faux plafond | 2,4 | 110 | 12,1 kW |
| Tôle + faux plafond + laine | 0,60 | 27,5 | **3,0 kW** |
| Dalle béton 15 cm | 3,5 | 161 | 17,7 kW |
| Dalle + 5 cm de PSE | 0,58 | 26,6 | 2,9 kW |
*(4 pts)*
4. Écart 46,0 − 26 = 20,0 °C : tôle seule **96 W/m²** → **10,5 kW** ; tôle + faux plafond + laine **12 W/m²** → **1,3 kW**. Peindre en blanc divise le flux par **2,3** ; combinée à l'isolation, la couleur claire divise le flux de la tôle sombre nue par **18**. *(2 pts)*

### Partie C — Ponts thermiques (7 pts)
5. Murs : 24 × 0,50 = **12,0 W/K**. Ponts : 18 × 0,75 + 8 × 0,35 + 5,6 × 0,5 = 13,5 + 2,8 + 2,8 = **19,1 W/K**.
$$ H = 12,0 + 19,1 = 31,1 W/K
Les ponts thermiques représentent **61 %** : ils laissent passer plus de chaleur que les murs eux-mêmes. *(4 pts)*
6. Φ = 31,1 × 8 ≈ **249 W**. *(1 pt)*
7. Ponts : 18 × 0,10 + 8 × 0,10 + 5,6 × 0,05 = **2,88 W/K** → H = **14,9 W/K** → Φ ≈ **119 W** ; réduction **52 %**. *(2 pts)*

### Partie D — Points froids (3 pts)
8. Dans un local climatisé, les ponts thermiques sont des zones **froides** de la paroi ; l'air extérieur chaud et très humide qui les atteint (face extérieure, intérieur de la paroi) peut y descendre sous son **point de rosée** : condensation, moisissures, dégradation. Traitements : **isolation extérieure continue** devant les dalles et les poteaux ; **rupteurs** de ponts thermiques aux balcons ; **retours d'isolant** sur les tableaux et en sous-face des dalles (0,6 à 1 m). *(3 pts)*

> [!attention] Erreurs à éviter
> - Calculer le flux de toiture avec T(ext) au lieu de T(air-soleil) : on oublie l'essentiel, le soleil.
> - Oublier les ponts thermiques : dans une paroi isolée, ils peuvent dépasser le flux des murs.
> - Confondre U (W/(m²·K), multiplié par une surface) et ψ (W/(m·K), multiplié par une longueur).`},
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
 sujet:{titre:"Apports solaires de la façade ouest d'une salle de réunion", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une salle de réunion d'un siège social à Marcory a sa grande façade orientée **à l'ouest**. Les occupants se plaignent de la chaleur en fin d'après-midi.

**Données**
- Façade ouest : **15,00 × 3,20 m**, dont **12 m²** de vitrage clair (g = **0,85** ; U = **5,8 W/(m²·K)**) ;
- Mur en parpaing de teinte foncée : U = **2,47 W/(m²·K)**, α = **0,7** ; he = **25 W/(m²·K)** ;
- À 16 h : I = **520 W/m²** ; T(ext) = **33 °C** ; T(int) = **25 °C** ;
- Vitrage : Φ = S × I × g × F(s) ; paroi opaque : Φ = U × S × (α × I / he + T(ext) − T(int)) ;
- Rayonnement horaire sur la façade ouest (W/m²) : 13 h : **150** ; 14 h : **330** ; 15 h : **470** ; 16 h : **520** ; 17 h : **450** ; 18 h : **200** ;
- Solutions : store extérieur (g global = **0,15**) ; mur repeint en blanc (α = **0,3**) ; façade nord : I = **200 W/m²**.

### Partie A — Notions (3 points)
1. Classer la toiture, les façades est/ouest et les façades nord/sud selon le rayonnement reçu. Pourquoi la façade ouest est-elle la plus pénalisante ? (2 pts)
2. Définir le facteur solaire g et le facteur d'ombrage F(s). (1 pt)

### Partie B — Situation actuelle à 16 h (9 points)
3. Calculer l'apport solaire et l'apport par conduction du vitrage. (3 pts)
4. Calculer la surface du mur opaque, l'écart « équivalent » dû au soleil, le flux à travers le mur et la part due au soleil. (4 pts)
5. Calculer l'apport total de la façade et le facteur solaire du mur. (2 pts)

### Partie C — Solutions (5 points)
6. Avec le store extérieur et le mur peint en blanc, recalculer l'apport total et la réduction obtenue. (3 pts)
7. Quel serait l'apport solaire du vitrage si la même façade était orientée au nord ? Conclure. (2 pts)

### Partie D — Énergie de l'après-midi (3 points)
8. Calculer l'énergie solaire qui entre par le vitrage entre 13 h et 18 h, sans puis avec le store. (3 pts)`,
  corrige:`### Partie A — Notions (3 pts)
1. Toiture (≈ 1 000 W/m², 5 à 6 kWh/m²/jour) > façades est/ouest (≈ 550 W/m²) > façades nord/sud (≈ 200 W/m²). L'ouest reçoit un soleil **bas** (difficile à arrêter avec un débord) au moment où l'air est **le plus chaud** de la journée. *(2 pts)*
2. **g** : fraction de l'énergie solaire incidente qui entre réellement à travers le vitrage ; **F(s)** : fraction qui atteint le vitrage malgré les protections (1 sans ombre, 0,2 à 0,3 avec une bonne protection extérieure). *(1 pt)*

### Partie B — Situation actuelle (9 pts)
3. Soleil : Φ = 12 × 520 × 0,85 = **5 304 W** ; conduction : 5,8 × 12 × 8 = **557 W**. *(3 pts)*
4. S(opaque) = 15,00 × 3,20 − 12 = **36 m²** ; écart équivalent : α I/he = 0,7 × 520/25 = **14,6 °C**.
$$ Φ = 2,47 × 36 × (14,6 + 8) = 88,9 × 22,6 ≈ 2 006 W
Part du soleil : 88,9 × 14,56 ≈ **1 295 W** (65 %) ; part de l'écart de température : 88,9 × 8 ≈ **711 W**. *(4 pts)*
5. Total : 5 304 + 557 + 2 006 = **7 867 W ≈ 7,9 kW**. Facteur solaire du mur : S = α U/he = 0,7 × 2,47/25 = **0,069** : 6,9 % du rayonnement traverse le mur (36 W/m²), contre 85 % pour le vitrage. *(2 pts)*

### Partie C — Solutions (5 pts)
6. Vitrage : 12 × 520 × 0,15 = **936 W** ; conduction inchangée : 557 W ; mur blanc : 88,9 × (0,3 × 520/25 + 8) = 88,9 × 14,24 ≈ **1 266 W**.
$$ Total = 936 + 557 + 1 266 = 2 759 W     réduction = (7 867 − 2 759)/7 867 ≈ 65 %
*(3 pts)*
7. Nord : 12 × 200 × 0,85 = **2 040 W**, soit 2,6 fois moins qu'à l'ouest sans aucune protection : l'**orientation** décidée à la conception est la première protection solaire. *(2 pts)*

### Partie D — Énergie de l'après-midi (3 pts)
8. Somme des rayonnements horaires : 150 + 330 + 470 + 520 + 450 + 200 = **2 120 Wh/m²**.
- Sans store : 12 × 2,12 × 0,85 = **21,6 kWh** de chaleur par après-midi ;
- Avec store : 12 × 2,12 × 0,15 = **3,8 kWh**.
Le climatiseur doit extraire 17,8 kWh de moins chaque jour, soit environ 6 kWh d'électricité avec un rendement de 3. *(3 pts)*

> [!attention] Erreurs à éviter
> - Calculer le flux du mur avec le seul écart de température : sur une façade ouest, le soleil pèse presque deux fois plus.
> - Compter la surface vitrée deux fois (dans le mur et dans le vitrage).
> - Confondre une puissance (W, à 16 h) et une énergie (kWh, sur l'après-midi).`},
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
 sujet:{titre:"Choisir les menuiseries vitrées d'un immeuble de bureaux climatisé", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** La façade **est** d'un immeuble de bureaux climatisé au Plateau compte **24 fenêtres** de **1,80 × 1,50 m**. On compare quatre menuiseries.

**Données**
- Une fenêtre : vitrage Ag = **2,16 m²** ; cadre Af = **0,54 m²** ; bord de vitrage Lg = **7,2 m** ; Uw = (Ag × Ug + Af × Uf + ψg × Lg)/Aw ;
- ψg = **0,06 W/(m·K)** pour un double vitrage ; **0** pour un simple vitrage ;
- Solutions :
| Solution | Vitrage | Cadre | Ug | Uf | g | TL |
|---|---|---|---|---|---|---|
| A | Simple clair | Alu sans rupture | 5,8 | 5,7 | 0,85 | 0,90 |
| B | Double clair 4/16/4 | Alu à rupture | 2,8 | 2,5 | 0,75 | 0,80 |
| C | Double à contrôle solaire sélectif | Alu à rupture | 1,3 | 2,5 | 0,32 | 0,62 |
| D | Simple réfléchissant | Alu sans rupture | 5,7 | 5,7 | 0,35 | 0,25 |
- À 9 h : I = **550 W/m²** sur la façade ; écart de température **8 °C** ; énergie solaire journalière sur la façade : **2,8 kWh/m²** ;
- Climatisation : **3 kWh** de froid par kWh électrique ; **260 jours/an** ; **90 F/kWh** ; surcoût de la solution C par rapport à A : **60 000 F/m²** de fenêtre.

### Partie A — Notions (4 points)
1. Définir Ug, g et TL. Pourquoi g compte-t-il plus que Ug sous les tropiques ? (2 pts)
2. Définir la sélectivité. Calculer la sélectivité des quatre solutions. (2 pts)

### Partie B — Coefficient Uw (5 points)
3. Calculer Uw pour chaque solution. (4 pts)
4. Pourquoi le cadre en aluminium sans rupture de pont thermique est-il pénalisant ? (1 pt)

### Partie C — Apports à 9 h (6 points)
5. Calculer, pour chaque solution, les apports solaires, les apports par conduction et le total pour la façade (présenter un tableau). (5 pts)
6. Classer les solutions. Pourquoi la solution D, pourtant performante en apports, est-elle à écarter ? (1 pt)

### Partie D — Économie (5 points)
7. Calculer l'énergie solaire journalière qui entre avec A et avec C, puis l'économie annuelle d'électricité et d'argent. (3 pts)
8. Calculer le temps de retour du surcoût de C. Quel autre gain n'est pas compté ? (2 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. **Ug** : chaleur qui traverse le vitrage par écart de température (W/(m²·K)) ; **g** : part de l'énergie solaire qui entre ; **TL** : part de la lumière visible transmise. Sous les tropiques, l'écart de température est faible (5 à 8 °C) alors que le soleil apporte des centaines de W/m² : **g** domine. *(2 pts)*
2. Sélectivité = TL/g : A : 0,90/0,85 = **1,06** ; B : **1,07** ; C : 0,62/0,32 = **1,94** ; D : 0,25/0,35 = **0,71**. Seule C atteint l'objectif tropical (≥ 1,5) : beaucoup de lumière, peu de chaleur. *(2 pts)*

### Partie B — Uw (5 pts)
3. Aw = 2,70 m².
- A : (2,16 × 5,8 + 0,54 × 5,7)/2,70 = (12,53 + 3,08)/2,70 = **5,78 W/(m²·K)** ;
- B : (2,16 × 2,8 + 0,54 × 2,5 + 0,06 × 7,2)/2,70 = (6,05 + 1,35 + 0,43)/2,70 = **2,90** ;
- C : (2,81 + 1,35 + 0,43)/2,70 = **1,70** ;
- D : (12,31 + 3,08)/2,70 = **5,70**. *(4 pts)*
4. L'aluminium est très conducteur (λ = 230) : un cadre sans rupture (Uf = 5,7) est un **pont thermique**, qui annule une partie du gain d'un bon vitrage et crée des points froids (condensation côté extérieur). *(1 pt)*

### Partie C — Apports à 9 h (6 pts)
5. Surfaces : vitrage 24 × 2,16 = **51,84 m²** ; fenêtres 24 × 2,70 = **64,8 m²**.
| Solution | Solaire = 51,84 × 550 × g | Conduction = 64,8 × Uw × 8 | Total |
|---|---|---|---|
| A | 24 235 W | 2 996 W | **27,2 kW** |
| B | 21 384 W | 1 503 W | **22,9 kW** |
| C | 9 124 W | 881 W | **10,0 kW** |
| D | 9 979 W | 2 955 W | **12,9 kW** |
*(5 pts)*
6. C < D < B < A. Le double vitrage clair (B) ne gagne que 16 % : il agit sur Ug, pas sur le soleil. **D** a un TL de 0,25 : bureaux sombres, **éclairage allumé** toute la journée (qui chauffe à son tour), vue dégradée ; sa sélectivité est mauvaise. *(1 pt)*

### Partie D — Économie (5 pts)
7. A : 51,84 × 2,8 × 0,85 = **123,4 kWh/jour** ; C : 51,84 × 2,8 × 0,32 = **46,4 kWh/jour** ; différence : 77,0 kWh de froid → 25,6 kWh d'électricité par jour.
$$ 25,6 × 260 ≈ 6 670 kWh/an   →   6 670 × 90 ≈ 600 000 F/an
*(3 pts)*
8. Surcoût : 64,8 × 60 000 = **3 888 000 F** → temps de retour ≈ 3 888 000/600 000 ≈ **6,5 ans**. Non compté : la puissance de climatisation installée diminue de **17 kW** (environ cinq climatiseurs de 12 000 BTU/h en moins), le confort près des vitres et l'isolation acoustique du double vitrage. *(2 pts)*

> [!attention] Erreurs à éviter
> - Choisir un double vitrage clair pour « isoler » : sous les tropiques, c'est g qu'il faut réduire.
> - Calculer les apports solaires sur la surface totale de la fenêtre : le soleil entre par le vitrage (Ag).
> - Oublier le cadre dans Uw : en aluminium sans rupture, il pèse lourd.`},
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
 sujet:{titre:"Air neuf et infiltrations d'une salle de formation climatisée", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une salle de formation de **10,00 × 8,00 m**, hauteur **3,00 m**, accueille **30 stagiaires** à Abidjan. Elle est climatisée et ventilée mécaniquement.

**Données**
- Air neuf : **25 m³/h par personne** ; infiltrations : **0,5 volume par heure** ;
- Extérieur : **32 °C ; 60 %** (x = **18,0 g/kg**) ; intérieur : **25 °C ; 50 %** (x = **9,9 g/kg**) ;
- Φ(sensible) = 0,34 × q × ΔT ; Φ(latente) = 0,83 × q × Δx (q en m³/h ; Δx en g/kg) ; masse volumique de l'air **1,2 kg/m³** ;
- Utilisation **8 h/jour**, **200 jours/an** ; climatiseur : **3 kWh** de froid par kWh électrique ; **90 F/kWh** ;
- Récupérateur enthalpique : récupère **60 %** de la charge (sensible et latente) de l'air neuf ; coût installé **1 200 000 F**.

### Partie A — Notions (4 points)
1. Expliquer la différence entre charge sensible et charge latente. D'où viennent les coefficients 0,34 et 0,83 ? (3 pts)
2. Pourquoi l'air neuf est-il indispensable malgré son coût ? (1 pt)

### Partie B — Charges de l'air neuf (7 points)
3. Calculer le débit d'air neuf, puis les charges sensible et latente. Comparer. (4 pts)
4. Calculer la quantité d'eau condensée par heure par le climatiseur pour l'air neuf. (3 pts)

### Partie C — Infiltrations (4 points)
5. Calculer le volume de la salle, le débit d'infiltration et les charges correspondantes. (3 pts)
6. Citer deux moyens de réduire les infiltrations. (1 pt)

### Partie D — Récupération et économie (5 points)
7. Calculer la charge totale due à l'air (air neuf + infiltrations), puis la charge restante avec le récupérateur. (2 pts)
8. Calculer la consommation électrique annuelle correspondante avec et sans récupérateur, l'économie et le temps de retour. (3 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. La charge **sensible** sert à abaisser la **température** de l'air ; la charge **latente** sert à retirer sa **vapeur d'eau** en la condensant sur l'évaporateur. 0,34 = ρ × c/3 600 = 1,2 × 1 000/3 600 (Wh/(m³·K)) ; 0,83 ≈ 1,2 × 2 500/3 600, où 2 500 kJ/kg est la chaleur de condensation de l'eau. *(3 pts)*
2. L'air neuf évacue le **CO₂**, les odeurs et l'humidité produits par les occupants : sans lui, la concentration de CO₂ monte vite (somnolence, maux de tête) dans une salle de 30 personnes. *(1 pt)*

### Partie B — Air neuf (7 pts)
3. q = 30 × 25 = **750 m³/h** ; ΔT = 7 °C ; Δx = 18,0 − 9,9 = 8,1 g/kg.
$$ Φs = 0,34 × 750 × 7 = 1 785 W     Φl = 0,83 × 750 × 8,1 = 5 042 W
Total **6 827 W** : la charge latente vaut **2,8 fois** la charge sensible. *(4 pts)*
4. Masse d'air : 750 × 1,2 = 900 kg/h ; eau retirée : 900 × 8,1 = 7 290 g/h ≈ **7,3 litres par heure**, soit environ 58 L par journée de 8 h : l'évacuation des condensats doit être raccordée au réseau. *(3 pts)*

### Partie C — Infiltrations (4 pts)
5. V = 10 × 8 × 3 = **240 m³** ; q = 0,5 × 240 = **120 m³/h** ; Φs = 0,34 × 120 × 7 = **286 W** ; Φl = 0,83 × 120 × 8,1 = **807 W** ; total **1 093 W**. *(3 pts)*
6. Menuiseries **jointives** (joints, fenêtres fixes ou bien fermées), portes à **fermeture automatique**, **sas** d'entrée, calfeutrement des traversées de gaines. *(1 pt)*

### Partie D — Récupération (5 pts)
7. Charge de l'air : 6 827 + 1 093 = **7 920 W**. Avec récupérateur : 7 920 − 0,60 × 6 827 = **3 824 W**. *(2 pts)*
8. Sans récupérateur : 7,92 × 8 × 200/3 = **4 224 kWh/an** → 380 100 F ; avec : 3,82 × 8 × 200/3 = **2 039 kWh/an** → 183 500 F.
Économie : ≈ **2 185 kWh** et **196 600 F/an** ; temps de retour : 1 200 000/196 600 ≈ **6,1 ans** (calcul majorant : la charge réelle varie au cours de la journée). Une régulation du débit par **sonde de CO₂** réduit encore la charge quand la salle n'est pas pleine. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier la charge latente : sous les tropiques, c'est la plus grosse part de la charge de l'air neuf.
> - Prendre Δx en kg/kg dans la formule 0,83 × q × Δx, qui attend des g/kg.
> - Supprimer l'air neuf pour économiser : la qualité de l'air devient inacceptable.`},
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
 sujet:{titre:"Bilan thermique d'une salle de réunion et choix du climatiseur", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On doit climatiser une salle de réunion de **6,00 × 5,00 m**, hauteur **3,00 m**, au **dernier étage** d'un immeuble à Treichville, pour **8 personnes**. Les deux autres murs donnent sur des locaux climatisés (pas d'échange).

**Données**
- Extérieur : **32 °C ; 60 %** (x = **18,0 g/kg**) ; intérieur : **24 °C ; 50 %** (x = **9,3 g/kg**) ;
- Toiture-terrasse : dalle **15 cm** (λ = 2) + **4 cm de PSE** (λ = 0,035) ; Rsi = **0,17** ; Rse = **0,04** ; α = **0,8** ; I = **900 W/m²** ; he = **25 W/(m²·K)** ;
- Façade ouest **6,00 × 3,00 m** avec **4 m²** de vitrage protégé par un store extérieur (g global = **0,15**), I = **500 W/m²** ; mur en parpaing U = **2,47**, α = **0,6** ;
- Façade nord **5,00 × 3,00 m** à l'ombre, avec **2 m²** de vitrage clair (g = **0,85**), rayonnement diffus I = **150 W/m²** ;
- Vitrages : U = **5,8 W/(m²·K)** ; occupants : **75 W** sensibles et **55 W** latents ; vidéoprojecteur **300 W** ; 2 ordinateurs portables de **60 W** ; éclairage LED **8 W/m²** ;
- Air neuf : **25 m³/h par personne** ; Φs = 0,34 q ΔT ; Φl = 0,83 q Δx ; marge **10 %** ; 1 kW = **3 412 BTU/h** ;
- Gamme : 9 000 BTU/h (2,6 kW) ; 12 000 (3,5 kW) ; 18 000 (5,3 kW) ; 24 000 (7,0 kW).

### Partie A — Méthode (3 points)
1. Énumérer les postes d'un bilan thermique d'été en séparant sensible et latent. À quelle heure le fait-on ? (3 pts)

### Partie B — Calculs préliminaires (4 points)
2. Calculer le coefficient U de la toiture et sa température d'air-soleil. (2 pts)
3. Calculer les surfaces opaques des façades et le débit d'air neuf. (2 pts)

### Partie C — Bilan (9 points)
4. Calculer tous les apports sensibles (présenter un tableau). (6 pts)
5. Calculer les apports latents, le total et la puissance avec la marge. (3 pts)

### Partie D — Choix et analyse (4 points)
6. Choisir le climatiseur. Calculer sa puissance électrique approximative (rendement 3). (2 pts)
7. Que deviendrait la puissance sans le store extérieur ? Que donnerait le ratio « 1 CV pour 15 m² » ? Conclure. (2 pts)`,
  corrige:`### Partie A — Méthode (3 pts)
1. **Sensible** : toiture (si dernier niveau), murs (soleil + écart de température), vitrages (soleil + conduction), occupants, éclairage, équipements, air neuf et infiltrations. **Latent** : occupants, air neuf et infiltrations. On le fait à l'heure la plus défavorable, en général **15 à 17 h**, et on ajoute une marge d'environ 10 %. *(3 pts)*

### Partie B — Préliminaires (4 pts)
2. R = 0,17 + 0,15/2 + 0,04/0,035 + 0,04 = 0,17 + 0,075 + 1,143 + 0,04 = **1,428** → U = **0,70 W/(m²·K)** ; T(as) = 32 + 0,8 × 900/25 = **60,8 °C**. *(2 pts)*
3. Ouest : 18 − 4 = **14 m²** ; nord : 15 − 2 = **13 m²** ; air neuf : 8 × 25 = **200 m³/h**. *(2 pts)*

### Partie C — Bilan (9 pts)
4. Apports sensibles (ΔT = 8 °C) :
| Poste | Calcul | Apport |
|---|---|---|
| Toiture | 0,70 × 30 × (60,8 − 24) | 773 W |
| Mur ouest | 2,47 × 14 × (0,6 × 500/25 + 8) | 692 W |
| Mur nord | 2,47 × 13 × 8 | 257 W |
| Vitrage ouest : soleil | 4 × 500 × 0,15 | 300 W |
| Vitrage ouest : conduction | 5,8 × 4 × 8 | 186 W |
| Vitrage nord : soleil | 2 × 150 × 0,85 | 255 W |
| Vitrage nord : conduction | 5,8 × 2 × 8 | 93 W |
| Occupants | 8 × 75 | 600 W |
| Équipements | 300 + 2 × 60 | 420 W |
| Éclairage | 30 × 8 | 240 W |
| Air neuf | 0,34 × 200 × 8 | 544 W |
| **Total sensible** | | **4 360 W** |
*(6 pts)*
5. Latent : occupants 8 × 55 = **440 W** ; air neuf 0,83 × 200 × (18,0 − 9,3) = **1 444 W** ; total latent **1 884 W**.
$$ Total = 4 360 + 1 884 = 6 244 W     avec marge : 6 244 × 1,1 ≈ 6,87 kW ≈ 23 400 BTU/h
Le latent représente **30 %** de la charge. *(3 pts)*

### Partie D — Choix (4 pts)
6. Climatiseur de **24 000 BTU/h (7,0 kW)**, de préférence **inverter** (charge variable selon l'occupation). Puissance électrique ≈ 6,87/3 ≈ **2,3 kW**. *(2 pts)*
7. Sans store (g = 0,85) : + 4 × 500 × 0,70 = + 1 400 W → (6 244 + 1 400) × 1,1 ≈ **8,4 kW** : il faudrait deux appareils (24 000 + 9 000 BTU/h). Le ratio « 1 CV pour 15 m² » donnerait 2 CV (**5,3 kW**) : **sous-dimensionné** ici (dernier étage, façade ouest, 8 personnes, air neuf). Le bilan détaillé est indispensable, et le store est la mesure la plus rentable. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier la charge latente de l'air neuf (près du quart de la charge totale ici).
> - Confondre la puissance frigorifique (7,0 kW) et la puissance électrique absorbée (≈ 2,3 kW).
> - Dimensionner au ratio de surface sans tenir compte de la toiture, de l'orientation et de l'occupation.`},
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
 sujet:{titre:"Inertie des murs : amortissement et déphasage dans une maison à Bondoukou", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour une maison à Bondoukou (climat de transition, nuits plus fraîches), on compare quatre types de murs ouest du point de vue du régime variable.

**Données**
- Diffusivité : a = λ/(ρ × c) ; période T₀ = **86 400 s** ;
- Amortissement : f = exp(− e × √(π/(a × T₀))) ; déphasage : Δt = (e/2) × √(T₀/(π × a)) ;
- Matériaux :
| Mur | e (m) | λ (W/(m·K)) | ρ (kg/m³) | c (J/(kg·K)) |
|---|---|---|---|---|
| Béton | 0,15 | 2,0 | 2 400 | 880 |
| BTC | 0,35 | 1,0 | 1 900 | 900 |
| Terre (pisé) | 0,45 | 0,9 | 1 800 | 900 |
| Bardage bois | 0,03 | 0,15 | 600 | 1 600 |
- La température de la face extérieure du mur ouest oscille de **± 15 °C** autour de sa moyenne et culmine à **15 h**.

### Partie A — Notions (4 points)
1. Expliquer ce que sont l'amortissement et le déphasage d'une paroi. Que mesure la diffusivité ? (2 pts)
2. Pourquoi l'inertie n'a-t-elle pas le même intérêt à Korhogo (sec) et à Abidjan (humide) ? (2 pts)

### Partie B — Calculs (9 points)
3. Calculer la diffusivité de chaque mur. (2 pts)
4. Calculer l'amortissement, le déphasage, l'amplitude transmise et l'heure du maximum sur la face intérieure de chaque mur (présenter un tableau). (7 pts)

### Partie C — Dimensionnement (4 points)
5. Quelle épaisseur de BTC faut-il pour obtenir un déphasage de 10 h ? Quel est alors l'amortissement ? (3 pts)
6. À quelle heure la chaleur arrive-t-elle alors dans la pièce ? Est-ce favorable pour une chambre ? (1 pt)

### Partie D — Stratégie (3 points)
7. Proposer, pour cette maison, une stratégie complète d'utilisation de l'inertie (murs, ouvertures, ventilation, usage des pièces). (3 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. Une paroi lourde **atténue** l'onde de chaleur (amortissement f : rapport des amplitudes transmise et reçue) et la **retarde** (déphasage Δt : décalage entre le maximum extérieur et le maximum transmis). La diffusivité a mesure la **vitesse de pénétration** d'une variation de température : plus a est petite, plus la pénétration est lente. *(2 pts)*
2. **Korhogo** : fort écart jour-nuit ; la chaleur stockée le jour est évacuée la nuit par l'air frais (ventilation nocturne) : l'inertie rafraîchit. **Abidjan** : nuits chaudes et faible écart ; la chaleur restituée la nuit est mal évacuée et réchauffe les chambres : il faut mettre les parois lourdes à l'ombre ou construire léger et ventilé. *(2 pts)*

### Partie B — Calculs (9 pts)
3. Béton : 2,0/(2 400 × 880) = **9,5 × 10⁻⁷ m²/s** ; BTC : 1,0/(1 900 × 900) = **5,85 × 10⁻⁷** ; terre : 0,9/(1 800 × 900) = **5,6 × 10⁻⁷** ; bois : 0,15/(600 × 1 600) = **1,6 × 10⁻⁷**. *(2 pts)*
4. Exemple pour le BTC : √(π/(a T₀)) = √(π/(5,85 × 10⁻⁷ × 86 400)) = 7,88 m⁻¹ → f = exp(− 0,35 × 7,88) = 0,063 ; Δt = (0,35/2) × √(86 400/(π × 5,85 × 10⁻⁷)) = 0,175 × 216 820 = 37 940 s = 10,5 h.
| Mur | f | Δt | Amplitude transmise (± 15 × f) | Maximum intérieur |
|---|---|---|---|---|
| Béton 15 cm | 0,40 | 3,6 h | ± 5,9 °C | ≈ **18 h 30** |
| BTC 35 cm | 0,063 | 10,5 h | ± 0,9 °C | ≈ **1 h 30** |
| Terre 45 cm | 0,026 | 13,9 h | ± 0,4 °C | ≈ **4 h 55** |
| Bardage bois 3 cm | 0,63 | 1,7 h | ± 9,5 °C | ≈ **16 h 45** |
*(7 pts)*

### Partie C — Dimensionnement (4 pts)
5. e = 2 × Δt × √(π a/T₀) = 2 × 36 000 × √(π × 5,85 × 10⁻⁷/86 400) = 72 000 × 4,61 × 10⁻⁶ ≈ **0,33 m** ; f = exp(− 0,33 × 7,88) ≈ **0,07** : l'onde est réduite à 7 %. *(3 pts)*
6. 15 h + 10 h = **1 h du matin**, très atténuée (± 1 °C). Favorable si la chambre est **ventilée la nuit** (l'air frais évacue cette petite onde) ; défavorable si elle est fermée et climatisée. *(1 pt)*

### Partie D — Stratégie (3 pts)
7. Murs lourds (BTC 30 à 35 cm) à l'**est et à l'ouest**, protégés par des débords ou de la végétation ; **fermer et occulter le jour** (volets) pour garder la fraîcheur stockée ; **ventiler largement la nuit** (ouvertures opposées, impostes, ouvertures hautes) pour décharger les murs ; toiture **isolée et ventilée** (l'inertie ne compense pas une tôle nue) ; chambres plutôt côté **est** (la chaleur des murs est arrivée et évacuée avant la nuit suivante). *(3 pts)*

> [!attention] Erreurs à éviter
> - Confondre amortissement (rapport d'amplitudes, sans unité) et déphasage (heures).
> - Oublier que la formule du déphasage donne des **secondes** : diviser par 3 600.
> - Croire qu'un mur lourd « isole » : il retarde et atténue, mais sa résistance thermique reste faible.`},
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
 sujet:{titre:"Climatisation d'un hôtel de 24 chambres : choix du système, implantation et entretien", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un hôtel de **24 chambres** à Grand-Bassam doit être climatisé. Le bilan donne **3,0 kW** de froid par chambre, **18 kW** pour l'accueil et les couloirs, **25 kW** pour le restaurant.

**Données**
- Solution 1 : **splits individuels** : EER = **2,8** ; SEER = **3,0** ;
- Solution 2 : **DRV** (débit de réfrigérant variable) : EER = **4,2** ; SEER = **4,5** ; surcoût d'investissement **15 000 000 F** ;
- Fonctionnement : **16 h/jour**, **365 jours** ; taux de charge moyen **45 %** ; E = P(froid) × taux × heures/SEER ; électricité **90 F/kWh** ;
- Charge latente d'une chambre : **30 %** de sa charge ; chaleur de condensation de l'eau : **2 500 kJ/kg** ;
- Filtres encrassés : consommation **+ 12 %** ; unité extérieure en plein soleil : capacité **− 15 %**.

### Partie A — Principe (5 points)
1. Décrire le cycle frigorifique (quatre organes) en précisant où la chaleur est absorbée et où elle est rejetée. (3 pts)
2. Définir l'EER et le SEER. Qu'apporte la technologie inverter ? (2 pts)

### Partie B — Puissances et choix (7 points)
3. Calculer la puissance frigorifique totale, puis, pour chaque solution, la puissance électrique absorbée et la chaleur rejetée à l'extérieur. (3 pts)
4. Calculer les consommations annuelles des deux solutions, l'économie du DRV et son temps de retour. (3 pts)
5. Quel système proposer pour le restaurant ? (1 pt)

### Partie C — Implantation (5 points)
6. Calculer le débit de condensats d'une chambre et de l'ensemble des chambres. Comment les évacuer ? (3 pts)
7. Un split de 12 000 BTU/h (3,5 kW) est prévu par chambre. Que se passe-t-il si son unité extérieure est installée en plein soleil ? (2 pts)

### Partie D — Entretien (3 points)
8. Calculer le surcoût annuel des filtres encrassés pour la solution 1. Établir un plan d'entretien. (3 pts)`,
  corrige:`### Partie A — Principe (5 pts)
1. **Évaporateur** (unité intérieure) : le fluide s'évapore à basse température et **absorbe** la chaleur de la pièce (l'air y dépose son humidité) ; **compresseur** : comprime la vapeur, qui s'échauffe ; **condenseur** (unité extérieure) : le fluide se condense et **rejette** la chaleur dehors ; **détendeur** : fait chuter la pression, le cycle recommence. *(3 pts)*
2. **EER** = puissance frigorifique/puissance électrique absorbée (à pleine charge) ; **SEER** : efficacité **saisonnière**, sur une année, charges partielles comprises. L'**inverter** fait varier la vitesse du compresseur : moins de marches-arrêts, meilleure déshumidification, 20 à 40 % de consommation en moins. *(2 pts)*

### Partie B — Puissances et choix (7 pts)
3. P(froid) = 24 × 3,0 + 18 + 25 = **115 kW**.
| | Splits (EER 2,8) | DRV (EER 4,2) |
|---|---|---|
| Puissance électrique = 115/EER | **41,1 kW** | **27,4 kW** |
| Chaleur rejetée = froid + électricité | **156,1 kW** | **142,4 kW** |
*(3 pts)*
4. Splits : 115 × 0,45 × 5 840/3,0 = **100 740 kWh/an** ; DRV : 115 × 0,45 × 5 840/4,5 = **67 160 kWh/an**.
Économie : **33 580 kWh** → **3 022 200 F/an** ; temps de retour : 15 000 000/3 022 200 ≈ **5 ans**. *(3 pts)*
5. Restaurant : **cassettes** ou **gainable** (soufflage réparti dans une grande salle), raccordés au DRV ou en système propre ; prévoir l'**air neuf** et l'extraction de la cuisine. *(1 pt)*

### Partie C — Implantation (5 pts)
6. Latent d'une chambre : 0,30 × 3,0 = 0,9 kW ; débit d'eau : 0,9/2 500 = 3,6 × 10⁻⁴ kg/s = **1,3 L/h** ; pour 24 chambres : **≈ 31 L/h**. Évacuation par un **réseau de condensats** en pente avec siphon, raccordé aux eaux pluviales ou usées, **jamais** en façade ou sur le trottoir. *(3 pts)*
7. Capacité : 3,5 × 0,85 ≈ **2,98 kW** < 3,0 kW nécessaires : l'appareil devient **sous-dimensionné** aux heures chaudes, tourne en continu, consomme plus et s'use plus vite. Unité extérieure à l'**ombre**, bien **ventilée**, loin des sources de chaleur. *(2 pts)*

### Partie D — Entretien (3 pts)
8. Surcoût : 0,12 × 100 740 ≈ **12 090 kWh/an** → **≈ 1 088 000 F/an**, plus une mauvaise qualité de l'air. Plan : **filtres nettoyés chaque mois** ; **échangeurs** et bacs à condensats nettoyés et désinfectés chaque année ; contrôle d'**étanchéité** du circuit (fluide à fort effet de serre, récupération par technicien qualifié) ; vérification des **condensats** et des liaisons frigorifiques isolées. *(3 pts)*

> [!attention] Erreurs à éviter
> - Croire que la chaleur extraite « disparaît » : elle est rejetée dehors, augmentée de l'énergie du compresseur.
> - Confondre EER (pleine charge) et SEER (sur l'année) dans les calculs de consommation.
> - Installer les unités extérieures au soleil ou dans un local fermé.`},
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
 sujet:{titre:"Audit énergétique de la climatisation d'un immeuble de bureaux", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un immeuble de bureaux de **1 200 m²** au Plateau consomme **220 kWh/(m²·an)**. Le propriétaire commande un audit de la climatisation.

**Données**
- Climatisation : **200 kW** de froid installés ; taux de charge moyen **60 %** ; **11 h/jour** ; **260 jours/an** ; SEER = **2,6** ;
- E = P(froid) × taux de charge × heures / SEER ; électricité **90 F/kWh** ;
- Actions proposées :
| Action | Économie sur la climatisation | Investissement |
|---|---|---|
| 1. Consigne relevée de 22 à 25 °C (7 % par degré) | à calculer | 1 500 000 F |
| 2. Remise en état et entretien des filtres et échangeurs | 8 % | 900 000 F |
| 3. Brise-soleil extérieurs | 15 % | 6 000 000 F |
| 4. Remplacement par des appareils inverter (SEER 4,2) | à calculer | 25 000 000 F |
- Objectif d'une démarche de certification : **− 20 %** sur la consommation totale du bâtiment.

### Partie A — Situation actuelle (5 points)
1. Calculer la consommation annuelle de climatisation, sa part dans la consommation totale et son coût. (3 pts)
2. Calculer la puissance installée par m² et la consommation de climatisation par m². Commenter. (2 pts)

### Partie B — Actions une par une (7 points)
3. Calculer l'économie relative des actions 1 et 4. (2 pts)
4. Pour chaque action prise seule, calculer l'économie en kWh et en F, puis le temps de retour ; classer les actions. (5 pts)

### Partie C — Actions combinées (6 points)
5. Pourquoi les économies ne s'additionnent-elles pas ? Calculer l'économie réelle des quatre actions combinées. (4 pts)
6. Calculer la nouvelle consommation du bâtiment en kWh/(m²·an) et vérifier l'objectif de certification. (2 pts)

### Partie D — Synthèse (2 points)
7. Calculer le temps de retour global et proposer un ordre de réalisation. (2 pts)`,
  corrige:`### Partie A — Situation actuelle (5 pts)
1. E = 200 × 0,60 × 11 × 260/2,6 = **132 000 kWh/an**. Consommation totale : 220 × 1 200 = **264 000 kWh/an** → climatisation **50 %** ; coût : 132 000 × 90 = **11 880 000 F/an**. *(3 pts)*
2. 200 000/1 200 ≈ **167 W/m²** ; 132 000/1 200 = **110 kWh/(m²·an)**. Le bâtiment (220 kWh/(m²·an)) est dans la fourchette courante (150 à 300) mais loin d'un bâtiment bien conçu (< 100 au total). *(2 pts)*

### Partie B — Actions une par une (7 pts)
3. Action 1 : 3 degrés × 7 % = **21 %** ; action 4 : 1 − 2,6/4,2 = **38,1 %** (la consommation est inversement proportionnelle au SEER). *(2 pts)*
4. Résultats :
| Action | Économie (kWh) | Économie (F/an) | Temps de retour |
|---|---|---|---|
| 1. Consigne 25 °C | 27 720 | 2 494 800 | **0,6 an** |
| 2. Filtres et échangeurs | 10 560 | 950 400 | **0,9 an** |
| 3. Brise-soleil | 19 800 | 1 782 000 | **3,4 ans** |
| 4. Appareils inverter | 50 290 | 4 525 700 | **5,5 ans** |
Classement par temps de retour : **1, 2, 3, 4** (réglages et entretien d'abord, investissements lourds ensuite). *(5 pts)*

### Partie C — Actions combinées (6 pts)
5. Chaque action s'applique à la consommation **déjà réduite** par les précédentes : les économies se **multiplient**.
$$ 0,79 × 0,92 × 0,85 × 0,619 = 0,382
Consommation restante : 132 000 × 0,382 ≈ **50 480 kWh** ; économie : **81 520 kWh (− 62 %)**, soit **7 337 000 F/an**. La somme naïve (21 + 8 + 15 + 38 = 82 %) est fausse. *(4 pts)*
6. Bâtiment : 264 000 − 81 520 = 182 480 kWh → **152 kWh/(m²·an)** ; réduction totale : 81 520/264 000 = **30,9 %** > 20 % : objectif **atteint**. *(2 pts)*

### Partie D — Synthèse (2 pts)
7. Investissement total : 33 400 000 F → temps de retour global ≈ 33 400 000/7 337 000 ≈ **4,6 ans**. Ordre : consigne et horloges (immédiat), entretien, brise-soleil, puis remplacement des appareils (en fin de vie, en les choisissant **plus petits** car les charges ont baissé). *(2 pts)*

> [!attention] Erreurs à éviter
> - Additionner les pourcentages d'économie au lieu de les multiplier.
> - Confondre la puissance installée (kW) et la consommation (kWh).
> - Remplacer les appareils avant d'avoir réduit les besoins : on les surdimensionne.`},
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
 sujet:{titre:"Chauffe-eau solaire collectif d'une clinique à Bouaflé", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une clinique de **30 lits** à Bouaflé produit son eau chaude avec des chauffe-eau électriques. On étudie un chauffe-eau solaire collectif.

**Données**
- Besoins : **60 L par lit et par jour** à **50 °C**, plus **400 L/jour** pour la cuisine et la buanderie ; eau froide à **26 °C** ;
- Q = m × c × ΔT ; c = **4,18 kJ/(kg·K)** ; 1 kWh = **3 600 kJ** ;
- Irradiation dans le plan des capteurs H = **5,2 kWh/m²/jour** ; rendement moyen η = **0,45** ; S = Q/(H × η) ; capteurs de **2 m²** ;
- Taux de couverture solaire annuel : **80 %** ; électricité **90 F/kWh** ; coût installé **250 000 F par m²** de capteur ;
- Hygiène : montée en température du stockage à **60 °C** une fois par semaine.

### Partie A — Principe (4 points)
1. Décrire les composants d'un chauffe-eau solaire. (2 pts)
2. Expliquer le thermosiphon. Pourquoi prévoir une circulation forcée ici ? (2 pts)

### Partie B — Dimensionnement (9 points)
3. Calculer le volume d'eau chaude journalier et l'énergie nécessaire (kJ et kWh). (3 pts)
4. Calculer la surface de capteurs et le nombre de capteurs. (3 pts)
5. Proposer le volume de stockage. (1 pt)
6. Calculer la puissance d'appoint électrique pour produire la consommation d'une journée en 6 h. (2 pts)

### Partie C — Économie (4 points)
7. Calculer l'électricité économisée par an, l'économie en F et le temps de retour. (4 pts)

### Partie D — Installation et hygiène (3 points)
8. Donner l'orientation et l'inclinaison des capteurs ; citer deux dispositifs de sécurité. (2 pts)
9. Calculer l'énergie nécessaire pour monter le stockage de 50 à 60 °C. Pourquoi le faire ? (1 pt)`,
  corrige:`### Partie A — Principe (4 pts)
1. **Capteurs** (plaque noire absorbante parcourue par l'eau, sous vitrage, dans un caisson isolé, ou tubes sous vide) ; **ballon de stockage** isolé ; **circulation** (thermosiphon ou pompe et régulation) ; **appoint** électrique ou gaz pour les jours sans soleil ; tuyauteries isolées, vase d'expansion, soupape. *(2 pts)*
2. Dans le **thermosiphon**, l'eau chauffée, plus légère, monte naturellement vers le ballon placé **au-dessus** des capteurs, sans pompe. Avec 28 m² de capteurs et plus de 2 000 L de stockage, le ballon ne peut pas être posé au-dessus des capteurs sur la toiture : on prévoit une **circulation forcée** (pompe + régulation différentielle), ballons dans un local technique. *(2 pts)*

### Partie B — Dimensionnement (9 pts)
3. V = 30 × 60 + 400 = **2 200 L/jour** (2 200 kg) ; ΔT = 50 − 26 = 24 °C.
$$ Q = 2 200 × 4,18 × 24 = 220 704 kJ = 61,3 kWh/jour
*(3 pts)*
4. S = 61,3/(5,2 × 0,45) = **26,2 m²** → 26,2/2 = 13,1 → **14 capteurs** (28 m²). *(3 pts)*
5. Environ une journée de consommation, soit 50 à 75 L par m² de capteur (1 400 à 2 100 L) : **2 ballons de 1 000 L** (2 000 L). *(1 pt)*
6. P = 61,3 kWh/6 h ≈ **10,2 kW** (par exemple 2 résistances de 5 à 6 kW, une par ballon, commandées par horloge et thermostat). *(2 pts)*

### Partie C — Économie (4 pts)
7. E = 61,3 × 365 × 0,80 ≈ **17 900 kWh/an** → 17 900 × 90 ≈ **1 611 000 F/an**.
Investissement : 28 × 250 000 = **7 000 000 F** → temps de retour ≈ 7 000 000/1 611 000 ≈ **4,3 ans**, pour une durée de vie de 15 à 20 ans. *(4 pts)*

### Partie D — Installation et hygiène (3 pts)
8. Capteurs orientés **plein sud**, inclinés de **10 à 20°** (la pluie les nettoie), **sans ombre**. Sécurité : **vase d'expansion** et **soupape** (dilatation, surpression), protection contre la **surchauffe**, **mitigeur thermostatique** au puisage contre les brûlures. *(2 pts)*
9. Q = 2 000 × 4,18 × 10 = 83 600 kJ ≈ **23,2 kWh** par semaine. Ce choc thermique détruit les **légionelles**, bactéries qui prolifèrent entre 25 et 45 °C et sont dangereuses dans une clinique (inhalation lors des douches). *(1 pt)*

> [!attention] Erreurs à éviter
> - Oublier de convertir les kJ en kWh (diviser par 3 600).
> - Prendre ΔT par rapport à 0 °C au lieu de la température de l'eau froide (26 °C).
> - Dimensionner les capteurs sans rendement : la surface serait deux fois trop petite.`},
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
