/* =====================================================================
   Physique du bâtiment — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"pb",
 titre:"Physique du bâtiment",
 court:"Physique bât.",
 groupe:"phys",
 icone:"sun",
 couleur:"#D9921B",
 niveau:"Intermédiaire",
 heures:18,
 ordre:1,
 prerequis:["sp"],
 resume:"Climat, confort, humidité, éclairage, ventilation et sécurité incendie : concevoir des bâtiments sains, frais et sûrs en climat tropical.",
 objectifs:[
  "Adapter un bâtiment au climat tropical humide",
  "Prévenir la condensation et les remontées d'humidité",
  "Dimensionner l'éclairage naturel et la ventilation",
  "Connaître les principes de la sécurité incendie"
 ],
 applications:["Orientation et protections solaires", "Arases étanches et traitement de l'humidité", "Taille des fenêtres", "Évacuation et compartimentage des immeubles"],
 chapitres:[
{id:"pb-1", niv:1, titre:"Le bâtiment et son climat", duree:25, contenu:`## Le climat tropical humide
Le sud de la Côte d'Ivoire (Abidjan, San-Pédro) a un climat **chaud et humide** : températures de 24 à 32 °C toute l'année, humidité relative de 70 à 90 %, pluies abondantes (1 500 à 2 000 mm/an) avec deux saisons des pluies. Le nord (Korhogo, Odienné) est plus **sec** avec de forts écarts jour/nuit et l'harmattan.

## Le confort thermique
Le confort dépend de six paramètres : température de l'air, **température des parois**, humidité, **vitesse de l'air**, activité et habillement. En climat humide, la **ventilation** est le levier le plus efficace : un courant d'air de 1 m/s procure une sensation de fraîcheur de 3 à 4 °C.

## Principes de conception bioclimatique
1. **Orientation** : les façades longues au **nord et au sud** (soleil haut, facile à protéger) ; limiter les ouvertures à l'**est** et surtout à l'**ouest** (soleil bas et chaud l'après-midi).
2. **Protection solaire** : débords de toiture, auvents, brise-soleil, végétation. Une fenêtre protégée du soleil direct reçoit 4 à 5 fois moins de chaleur.
3. **Ventilation traversante** : ouvertures sur deux façades opposées, orientées vers les vents dominants (sud-ouest en zone côtière).
4. **Toiture** : c'est la paroi la plus exposée. Couleur claire, faux plafond, combles ventilés, isolant.
5. **Plan peu profond** : un bâtiment étroit (une seule rangée de pièces) se ventile naturellement.

> [!retenir]
> En climat chaud et humide : se protéger du soleil, laisser circuler l'air, éviter d'accumuler la chaleur dans la toiture.

## Climat sec (nord)
Ici, l'**inertie thermique** (murs épais en terre ou en béton) amortit les écarts : les murs stockent la fraîcheur de la nuit et la restituent le jour. Les ouvertures sont plus petites et protégées de la poussière.`, quiz:[
  {q:"Quelles façades faut-il privilégier pour les grandes ouvertures ?", o:["Est et ouest", "Nord et sud", "Ouest uniquement", "Peu importe"], r:1, e:"Le soleil y est haut et facile à arrêter avec un débord."},
  {q:"En climat chaud et humide, le levier de confort le plus efficace est :", o:["Le chauffage", "La ventilation", "Les murs très épais", "Le double vitrage"], r:1, e:"Le mouvement d'air favorise l'évaporation de la transpiration."},
  {q:"La paroi la plus exposée au soleil est :", o:["La façade nord", "Le sol", "La toiture", "La façade sud"], r:2, e:"Elle reçoit le soleil toute la journée."},
  {q:"L'inertie thermique est surtout utile :", o:["En climat sec à forts écarts jour/nuit", "En climat humide", "Sous l'équateur uniquement", "Jamais"], r:0, e:"Elle amortit les écarts de température."}
 ]},

{id:"pb-3", niv:1, titre:"Éclairage naturel et artificiel", duree:20, contenu:`## Grandeurs
- **Flux lumineux** (lumens, lm) : quantité de lumière émise par une lampe.
- **Éclairement** (lux, lx) : flux reçu par m² de surface. 1 lx = 1 lm/m².
- **Efficacité** d'une lampe (lm/W) : LED ≈ 100 à 150 lm/W, fluorescent ≈ 60 à 80, incandescence ≈ 12.

## Niveaux d'éclairement recommandés
| Local | Éclairement |
|---|---|
| Circulations, escaliers | 100 lx |
| Séjour, chambre | 100 à 200 lx |
| Cuisine (plan de travail) | 300 à 500 lx |
| Bureau, salle de classe | 300 à 500 lx |
| Atelier de précision | 750 lx et plus |

## Éclairage naturel
- **Surface vitrée** conseillée : au moins **1/6 de la surface du sol** pour une pièce principale (1/8 au minimum).
- Une fenêtre haute éclaire plus profondément qu'une fenêtre basse : la lumière pénètre environ **2 fois la hauteur du linteau**.
- **Facteur de lumière du jour (FLJ)** : rapport entre l'éclairement intérieur et l'éclairement extérieur par ciel couvert ; on vise 2 % au moins dans les pièces de vie.
- En climat tropical, on préfère une lumière **indirecte** (réfléchie par un débord ou un sol clair) pour éviter l'éblouissement et la chaleur.

## Calcul simple de l'éclairage artificiel
$$ Flux nécessaire = E × S / (U × Fm)
E : éclairement visé (lx), S : surface (m²), U : utilance (≈ 0,5), Fm : facteur de maintenance (≈ 0,8).

> [!exemple]
> Salle de classe de 7 × 8 m = 56 m², E = 400 lx : flux = 400 × 56 / (0,5 × 0,8) = **56 000 lm**, soit 14 réglettes LED de 4 000 lm (environ 36 W chacune, 500 W au total).

> [!astuce]
> Murs et plafonds clairs réfléchissent la lumière : ils réduisent le nombre de luminaires et la chaleur produite.`, quiz:[
  {q:"L'unité de l'éclairement est :", o:["Le lumen", "Le lux", "Le watt", "Le candela"], r:1, e:"1 lux = 1 lumen par m²."},
  {q:"Surface vitrée conseillée pour une pièce principale :", o:["1/20 du sol", "1/6 du sol", "Tout le mur", "1/2 du sol"], r:1, e:"Au moins 1/6 (1/8 au minimum)."},
  {q:"Les lampes les plus efficaces sont :", o:["À incandescence", "Halogènes", "LED", "Bougies"], r:2, e:"100 à 150 lm/W."},
  {q:"Éclairement conseillé pour un bureau :", o:["50 lx", "100 lx", "300 à 500 lx", "2 000 lx"], r:2, e:"Travail sur écran et papier."}
 ]},

{id:"pb-6", niv:1, titre:"Le confort de l'occupant : chaleur, humidité, air et lumière", duree:25, contenu:`## Ce qui fait qu'on se sent bien
Le confort dans un logement dépend de plusieurs paramètres à la fois :
| Paramètre | Valeurs confortables en climat chaud |
|---|---|
| Température de l'air | 25 à 27 °C |
| Humidité relative | 40 à 70 % |
| Vitesse de l'air | 0,5 à 1 m/s (brasseur d'air) |
| Éclairement | 150 à 300 lux selon la pièce |
| Bruit dans une chambre la nuit | moins de 35 dB(A) |

## La température ressentie
On ne ressent pas seulement la température de l'air, mais aussi celle des **parois** (murs, plafond) qui rayonnent. Approximation :
$$ T ressentie ≈ (T air + T parois) / 2

> [!exemple] Une chambre sous une toiture en tôle
> Air à 29 °C, plafond sous tôle à 38 °C : on ressent environ (29 + 38) / 2 = **33,5 °C**.
> Avec un faux plafond isolé, le plafond reste à 30 °C : on ressent **29,5 °C**, soit 4 °C de mieux sans climatiseur.

## L'humidité
À Abidjan, l'humidité dépasse souvent 80 % : la sueur s'évapore mal et la chaleur paraît plus forte. Un **mouvement d'air** (fenêtres opposées, brasseur) facilite l'évaporation et abaisse la température ressentie de 2 à 3 °C.

## L'air intérieur
Cuisine, salles d'eau et chambres occupées produisent vapeur d'eau, odeurs et CO₂ : il faut **renouveler l'air** en permanence (grilles, fenêtres, extraction).

## La lumière
La lumière naturelle est gratuite mais apporte de la chaleur : on cherche de grandes ouvertures **protégées du soleil direct** (débords, auvents, persiennes).

> [!retenir]
> Un bon confort se conçoit dès le plan : orientation, toiture isolée, protections solaires et ventilation traversante coûtent bien moins cher qu'un climatiseur et son électricité.`, quiz:[
  {q:"Une humidité relative confortable se situe entre :", o:["10 et 20 %", "40 et 70 %", "80 et 100 %", "0 et 10 %"], r:1, e:"Au-delà de 70 %, la sensation de moiteur apparaît."},
  {q:"Air à 28 °C, plafond à 36 °C : la température ressentie est d'environ :", o:["28 °C", "32 °C", "36 °C", "64 °C"], r:1, e:"(28 + 36) / 2 = 32 °C."},
  {q:"Un brasseur d'air abaisse la température ressentie d'environ :", o:["0,1 °C", "2 à 3 °C", "10 °C", "15 °C"], r:1, e:"Le mouvement d'air facilite l'évaporation de la sueur."},
  {q:"Le niveau de bruit souhaité dans une chambre la nuit est :", o:["Moins de 35 dB(A)", "70 dB(A)", "85 dB(A)", "100 dB(A)"], r:0, e:"Au-delà, le sommeil est perturbé."}
 ]},

{id:"pb-2", niv:2, titre:"L'humidité dans le bâtiment", duree:30, contenu:`## Humidité de l'air
L'air contient de la vapeur d'eau. L'**humidité relative** (HR, en %) indique le rapport entre la vapeur présente et le maximum possible à cette température. L'air chaud peut contenir beaucoup plus d'eau que l'air froid.

## Le point de rosée et la condensation
Quand de l'air humide se refroidit au contact d'une surface froide, il atteint son **point de rosée** et l'eau se condense.

| Air ambiant | Point de rosée approximatif |
|---|---|
| 30 °C, HR 80 % | 26 °C |
| 28 °C, HR 70 % | 22 °C |
| 25 °C, HR 60 % | 17 °C |

> [!exemple] Bureau climatisé
> Une salle climatisée à 22 °C a des murs et des conduites froides. L'air extérieur à 30 °C et 80 % HR qui s'infiltre condense (point de rosée 26 °C) : moisissures autour des fenêtres, gaines de climatisation qui « pleurent ». Remèdes : étanchéité à l'air, **isolation des conduites**, isolation des parois.

## Les remontées capillaires
L'eau du sol monte dans les maçonneries poreuses comme dans une mèche : salpêtre, peintures qui cloquent, enduits qui se décollent en bas des murs.
**Prévention** : longrines en béton, soubassement en agglos pleins, **arase étanche** (chape hydrofuge ou film bitumineux) entre le soubassement et le mur, dallage sur hérisson et film polyane.

## Les infiltrations d'eau de pluie
- Toitures et relevés d'étanchéité mal réalisés ;
- Appuis de fenêtres sans pente ni goutte d'eau ;
- Fissures de façade (enduit trop riche, absence de chaînages).

> [!attention]
> La pluie battante est forte en saison des pluies : les façades exposées au sud-ouest doivent avoir un enduit de bonne qualité et une peinture adaptée (pliolite, siloxane).

> [!retenir]
> Couper l'eau du sol (arase), protéger de la pluie (toiture, appuis, enduits), éviter les surfaces froides dans les locaux humides.`, quiz:[
  {q:"Le point de rosée est la température à laquelle :", o:["L'eau bout", "La vapeur d'eau se condense", "Le béton prend", "L'air se réchauffe"], r:1, e:"L'air saturé dépose son eau sur les surfaces froides."},
  {q:"Pour bloquer les remontées capillaires, on réalise :", o:["Une peinture intérieure", "Une arase étanche en pied de mur", "Un faux plafond", "Un enduit plus épais en haut"], r:1, e:"L'arase coupe la montée de l'eau dans le mur."},
  {q:"Les conduites d'eau froide ou de climatisation doivent être :", o:["Peintes en noir", "Isolées", "Enterrées", "Laissées nues"], r:1, e:"Sinon elles condensent l'humidité de l'air."},
  {q:"Un appui de fenêtre doit avoir :", o:["Une pente vers l'intérieur", "Une pente vers l'extérieur et une goutte d'eau", "Aucune pente", "Un trou"], r:1, e:"Pour évacuer l'eau loin de la façade."}
 ]},

{id:"pb-4", niv:2, titre:"Ventilation et qualité de l'air", duree:20, contenu:`## Pourquoi ventiler ?
- Évacuer l'humidité (cuisine, salles d'eau, respiration), les odeurs, le CO₂ et les polluants ;
- Rafraîchir par le mouvement d'air ;
- Éviter moisissures et condensation.

## Débits et renouvellement d'air
Le **taux de renouvellement** n s'exprime en volumes par heure. Pour un logement on vise 0,5 à 1 vol/h en moyenne, avec des extractions renforcées :
| Pièce | Débit d'extraction indicatif |
|---|---|
| Cuisine | 75 à 135 m³/h |
| Salle de bains | 30 m³/h |
| WC | 15 à 30 m³/h |

## La ventilation naturelle
1. **Ventilation traversante** : le vent crée une surpression sur la façade exposée et une dépression à l'opposé.
2. **Effet cheminée** : l'air chaud monte et sort par le haut (lanterneau, ouvertures hautes), aspirant de l'air frais en bas.
$$ Débit ≈ 0,6 × S × √(2 g h ΔT / T)
(S : section d'ouverture, h : différence de hauteur, ΔT : écart de température).

> [!astuce]
> Placer des **impostes** ou des claustras au-dessus des portes intérieures permet à l'air de traverser le logement même portes fermées.

## La ventilation mécanique (VMC)
Un ventilateur extrait l'air des pièces humides ; l'air neuf entre par des bouches dans les pièces principales. Indispensable dans les locaux climatisés et les pièces aveugles (WC et salles d'eau sans fenêtre).

> [!attention]
> Un local climatisé hermétique sans renouvellement d'air accumule CO₂ et humidité : maux de tête, moisissures. Prévoir toujours une entrée d'air neuf.`, quiz:[
  {q:"L'effet cheminée repose sur :", o:["Le vent uniquement", "L'air chaud qui monte", "Un ventilateur", "La pluie"], r:1, e:"La différence de température crée un tirage."},
  {q:"Une pièce aveugle (sans fenêtre) doit être :", o:["Fermée", "Ventilée mécaniquement", "Peinte en blanc", "Carrelée"], r:1, e:"Il faut une extraction d'air."},
  {q:"Le taux de renouvellement s'exprime en :", o:["m³", "vol/h", "m/s", "lux"], r:1, e:"Nombre de fois que le volume d'air est renouvelé par heure."},
  {q:"Les impostes au-dessus des portes servent à :", o:["Décorer", "Laisser passer l'air entre les pièces", "Isoler du bruit", "Éclairer la nuit"], r:1, e:"Elles favorisent la ventilation traversante."}
 ]},

{id:"pb-5", niv:2, titre:"Sécurité incendie", duree:25, contenu:`## Le triangle du feu
Un feu a besoin de **combustible**, de **comburant** (oxygène) et d'une **source de chaleur**. Supprimer l'un des trois éteint le feu.

## Réaction et résistance au feu
- **Réaction au feu** : comportement d'un matériau comme aliment du feu (classes A1 incombustible, A2, B, C, D, E, F). Béton, maçonnerie, acier : A1.
- **Résistance au feu** : durée pendant laquelle un élément conserve ses fonctions. Notation européenne :
  - **R** : capacité portante ; **E** : étanchéité aux flammes et gaz ; **I** : isolation thermique.
  - Exemple : un mur **REI 60** porte, reste étanche et isole pendant 60 minutes.

## Comportement des matériaux
- **Béton armé** : bon comportement ; l'**enrobage protège les aciers**. L'acier perd environ la moitié de sa résistance vers 550 °C.
- **Acier nu** : très sensible, nécessite une protection (peinture intumescente, flocage, enrobage).
- **Bois massif** : brûle mais se carbonise en surface à environ 0,7 mm/min, ce qui protège le cœur.

## Principes de conception
1. **Évacuation** : nombre et largeur des sorties adaptés à l'effectif, distances à parcourir limitées, escaliers protégés, portes ouvrant dans le sens de la sortie pour les grands effectifs.
2. **Compartimentage** : murs et portes coupe-feu pour limiter la propagation.
3. **Désenfumage** : la fumée tue plus que les flammes ; prévoir des ouvrants en partie haute des escaliers.
4. **Moyens de secours** : extincteurs (eau pulvérisée et CO₂), robinets d'incendie armés, alarme, éclairage de sécurité, accès pour les sapeurs-pompiers.

> [!attention]
> Les installations électriques non conformes (surcharges, rallonges, câbles sous-dimensionnés) sont l'une des premières causes d'incendie dans les habitations.

> [!retenir]
> R = porte, E = étanche, I = isole. L'enrobage des aciers est aussi une protection incendie.`, quiz:[
  {q:"Dans « REI 60 », la lettre I signifie :", o:["Incombustible", "Isolation thermique", "Intérieur", "Inspection"], r:1, e:"R : portance, E : étanchéité, I : isolation."},
  {q:"Vers quelle température l'acier perd-il environ la moitié de sa résistance ?", o:["100 °C", "250 °C", "550 °C", "1 500 °C"], r:2, e:"D'où la nécessité de le protéger."},
  {q:"Qu'est-ce qui cause le plus de victimes dans un incendie ?", o:["Les flammes", "Les fumées", "L'eau", "Le bruit"], r:1, e:"Les fumées sont toxiques et aveuglantes."},
  {q:"Le béton est classé en réaction au feu :", o:["A1 (incombustible)", "D", "F", "E"], r:0, e:"Il ne participe pas au feu."}
 ]},

{id:"pb-7", niv:3, titre:"Air humide, point de rosée et condensation", duree:30, contenu:`## Humidité absolue et relative
L'air contient de la vapeur d'eau. À une température donnée, il ne peut en contenir qu'une quantité maximale (**saturation**). L'**humidité relative** HR est le rapport entre la vapeur présente et ce maximum.

## Le point de rosée
Si l'on refroidit de l'air humide, il atteint la saturation à la **température de rosée** Td : en dessous, la vapeur se condense en gouttes. Formule de Magnus (précision de quelques dixièmes de degré) :
$$ γ = ln(HR) + 17,62 T / (243,12 + T)      Td = 243,12 γ / (17,62 − γ)

> [!exemple] Air extérieur d'Abidjan
> 30 °C et 80 % d'humidité : γ = ln 0,8 + 17,62 × 30 / 273,12 = 1,712 → **Td ≈ 26,2 °C**.
> Toute surface plus froide que 26 °C au contact de cet air **ruisselle** : tuyau d'eau froide, gaine de climatisation non isolée, mur extérieur d'une chambre climatisée à 22 °C.

## Le sens de la vapeur en climat tropical
En pays tempéré, la vapeur va de l'intérieur chauffé vers l'extérieur froid. **En climat chaud et humide climatisé, c'est l'inverse** : la vapeur extérieure migre vers les pièces froides.
- Un revêtement intérieur étanche (vinyle, peinture glycéro, carrelage mural) sur un mur de chambre climatisée peut piéger la vapeur dans le mur : **moisissures** derrière les armoires, cloques de peinture.
- On préfère des finitions intérieures **perméables à la vapeur** et des façades protégées de la pluie.

## La méthode de Glaser (principe)
On trace dans l'épaisseur de la paroi la température et la pression de vapeur. Là où la pression de vapeur dépasse la pression de saturation, il y a **condensation dans la paroi**.

## Les remèdes
- **Isoler les réseaux froids** (gaines frigorifiques, eau glacée) avec un isolant fermé (manchons en caoutchouc).
- Limiter les fuites d'air humide vers les locaux climatisés (portes, menuiseries étanches).
- Ne pas descendre la consigne de climatisation trop bas (24 à 26 °C).`, quiz:[
  {q:"Le point de rosée est la température à laquelle :", o:["L'air humide commence à condenser", "L'eau gèle", "L'air est sec", "Le béton prend"], r:0, e:"En dessous, la vapeur se transforme en gouttes."},
  {q:"Pour de l'air à 30 °C et 80 % d'humidité, le point de rosée vaut environ :", o:["15 °C", "26 °C", "30 °C", "35 °C"], r:1, e:"Magnus donne Td ≈ 26,2 °C."},
  {q:"En climat chaud et humide climatisé, la vapeur migre :", o:["De l'extérieur vers l'intérieur", "De l'intérieur vers l'extérieur", "Elle ne migre pas", "Du sol vers le toit uniquement"], r:0, e:"De l'air chaud et humide vers les locaux froids."},
  {q:"Pour éviter qu'une gaine de climatisation ne goutte, il faut :", o:["L'isoler avec un isolant à cellules fermées", "La peindre en blanc", "La percer", "La laisser à l'air libre"], r:0, e:"Sa surface ne doit pas descendre sous le point de rosée de l'air ambiant."}
 ]},

{id:"pb-8", niv:3, titre:"Conception bioclimatique en climat tropical humide", duree:35, contenu:`## Les quatre principes
1. **Se protéger du soleil** (toiture, façades Est et Ouest, vitrages) ;
2. **Ventiler** pour évacuer la chaleur et l'humidité ;
3. **Limiter les apports internes** (éclairage efficace, appareils) ;
4. **Éclairer naturellement** sans faire entrer le rayonnement direct.

## Orientation
À 5° de latitude nord (Abidjan), le soleil est presque à la verticale à midi. Les façades **Est et Ouest** reçoivent un soleil bas et brûlant : on les garde **courtes et peu percées**. Les grandes ouvertures se placent au **Nord et au Sud**, faciles à protéger.

## Dimensionner un débord ou une casquette
Hauteur du soleil à midi : **h = 90° − |latitude − déclinaison|** (déclinaison de −23,4° en décembre à +23,4° en juin).
> [!exemple] Fenêtre de 1,20 m de haut à Abidjan (latitude 5,3° N)
> **Façade Sud**, en décembre : h = 90 − (5,3 + 23,4) = 61,3°. Pour ombrer toute la fenêtre à midi, la casquette posée en haut de la fenêtre doit avancer de 1,20 / tan 61,3° = **0,66 m**.
> **Façade Nord**, en juin : h = 90 − (23,4 − 5,3) = 71,9° → débord de 1,20 / tan 71,9° = **0,39 m**.
> Pour les façades Est et Ouest, le soleil est bas : il faut des **lames verticales**, des persiennes ou de la végétation.

## Ventilation naturelle
- **Traversante** : ouvertures sur deux façades opposées, idéalement face aux vents dominants (sud-ouest à Abidjan) ;
- **Tirage thermique** : l'air chaud monte et sort par le haut (ouvertures hautes, cages d'escalier, lanterneaux) ;
- Des ouvertures représentant environ **20 % de la surface de façade** de chaque pièce donnent une ventilation efficace.

## Inertie ou légèreté ?
En climat humide, l'écart entre le jour et la nuit est faible (6 à 8 °C) : la masse ne se refroidit pas la nuit. On privilégie une construction **protégée, isolée en toiture et bien ventilée**. Une dalle de toiture-terrasse non isolée accumule la chaleur et la restitue la nuit dans les chambres du dernier étage.

> [!astuce]
> Double toiture ventilée, faux plafond isolé, couleurs claires, arbres côté Ouest : ces choix bon marché font gagner plusieurs degrés.`, quiz:[
  {q:"Les façades les plus difficiles à protéger du soleil à Abidjan sont :", o:["Nord et Sud", "Est et Ouest", "Uniquement Sud", "La toiture seulement"], r:1, e:"Le soleil y est bas le matin et l'après-midi."},
  {q:"Hauteur du soleil à midi sur une façade Sud à Abidjan en décembre :", o:["Environ 61°", "Environ 90°", "Environ 30°", "Environ 5°"], r:0, e:"90 − (5,3 + 23,4) = 61,3°."},
  {q:"Pour protéger une fenêtre exposée à l'Ouest, on utilise de préférence :", o:["Des lames verticales ou de la végétation", "Une casquette horizontale seule", "Un vitrage clair", "Rien"], r:0, e:"Le soleil couchant est bas : une casquette ne suffit pas."},
  {q:"En climat tropical humide, on privilégie :", o:[
    "Une construction protégée, isolée en toiture et ventilée",
    "Des murs très épais sans ouvertures",
    "Une toiture-terrasse non isolée",
    "De grandes baies à l'Ouest"
   ], r:0, e:"La faible variation jour-nuit limite l'intérêt de l'inertie."}
 ]},

{id:"pb-9", niv:3, titre:"Énergie solaire photovoltaïque : dimensionner une installation", duree:35, contenu:`## Le principe
Les **modules photovoltaïques** produisent du courant continu. Un **onduleur** le transforme en 230 V alternatif. En site isolé ou pour pallier les coupures, des **batteries** stockent l'énergie ; un **régulateur** les protège.

## 1. Évaluer les besoins journaliers
| Appareil | Puissance | Durée | Énergie |
|---|---|---|---|
| 10 lampes LED | 10 W | 5 h | 500 Wh |
| Téléviseur | 100 W | 5 h | 500 Wh |
| Réfrigérateur | 150 W | 8 h (cycles) | 1 200 Wh |
| 3 ventilateurs | 60 W | 8 h | 1 440 Wh |
| Ordinateur | 60 W | 4 h | 240 Wh |
| **Total** | | | **3 880 Wh/j** |

## 2. Puissance crête des panneaux
Abidjan reçoit environ **4,5 kWh/m² par jour** (soit 4,5 « heures de plein soleil »). Avec un rendement global de l'installation PR ≈ 0,75 :
$$ Pc = E / (heures de plein soleil × PR) = 3 880 / (4,5 × 0,75) ≈ 1 150 Wc
→ **3 modules de 400 Wc** (1 200 Wc).

## 3. Batteries
Pour 1 jour d'autonomie en 24 V :
$$ C = E × jours d'autonomie / (profondeur de décharge × U)
- Batteries plomb (décharge 50 %) : 3 880 / (0,5 × 24) = **323 Ah** → 4 batteries 12 V – 200 Ah (2 en série × 2 en parallèle).
- Lithium (décharge 80 %) : 3 880 / (0,8 × 24) = **202 Ah** → un bloc 24 V – 200 Ah.

## 4. Onduleur
Puissance de tous les appareils pouvant fonctionner ensemble : 100 + 100 + 150 + 180 + 60 = 590 W, × 1,25 de marge, et la pointe de démarrage du réfrigérateur → onduleur **1 à 1,5 kVA**.

## Pose et sécurité
- Panneaux orientés vers le **Sud**, inclinés de **10 à 15°** (l'eau de pluie les nettoie), sans ombre de 9 h à 16 h ;
- Fixations résistant au vent ; sur toiture-terrasse, supports lestés **sans percer l'étanchéité** ;
- Câbles solaires, fusibles et sectionneur côté continu, parafoudre, mise à la terre.

> [!attention]
> Les besoins de climatisation (1 à 2 kW par appareil) font exploser la taille d'une installation autonome : commencez par réduire les besoins (isolation, LED, appareils économes).`, quiz:[
  {q:"Besoins de 3 880 Wh/j, 4,5 h de plein soleil, PR 0,75 : la puissance crête est d'environ :", o:["860 Wc", "1 150 Wc", "3 880 Wc", "17 500 Wc"], r:1, e:"3 880 / (4,5 × 0,75) ≈ 1 150 Wc."},
  {q:"L'onduleur sert à :", o:["Transformer le courant continu en 230 V alternatif", "Stocker l'énergie", "Orienter les panneaux", "Mesurer le soleil"], r:0, e:"Les modules et les batteries fonctionnent en continu."},
  {q:"À Abidjan, on incline les panneaux d'environ :", o:["10 à 15° vers le Sud", "60° vers le Nord", "90° (verticaux)", "0° exactement"], r:0, e:"Faible latitude ; une légère pente permet l'autonettoyage."},
  {q:"Avec des batteries plomb, on limite la profondeur de décharge à environ :", o:["10 %", "50 %", "100 %", "200 %"], r:1, e:"Au-delà, leur durée de vie chute."}
 ]}
]});
