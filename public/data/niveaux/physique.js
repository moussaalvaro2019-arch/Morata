/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Physique appliquée
   Physique du bâtiment · Thermique · Acoustique · Mécanique des fluides
   ===================================================================== */

/* ---------- PHYSIQUE DU BÂTIMENT ---------- */
A.addChapitres('pb', [
{id:'pb-6', niv:1, titre:'Le confort de l\'occupant : chaleur, humidité, air et lumière', duree:25, contenu:`## Ce qui fait qu'on se sent bien
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
> Un bon confort se conçoit dès le plan : orientation, toiture isolée, protections solaires et ventilation traversante coûtent bien moins cher qu'un climatiseur et son électricité.`,
 quiz:[
  {q:"Une humidité relative confortable se situe entre :", o:["10 et 20 %","40 et 70 %","80 et 100 %","0 et 10 %"], r:1, e:"Au-delà de 70 %, la sensation de moiteur apparaît."},
  {q:"Air à 28 °C, plafond à 36 °C : la température ressentie est d'environ :", o:["28 °C","32 °C","36 °C","64 °C"], r:1, e:"(28 + 36) / 2 = 32 °C."},
  {q:"Un brasseur d'air abaisse la température ressentie d'environ :", o:["0,1 °C","2 à 3 °C","10 °C","15 °C"], r:1, e:"Le mouvement d'air facilite l'évaporation de la sueur."},
  {q:"Le niveau de bruit souhaité dans une chambre la nuit est :", o:["Moins de 35 dB(A)","70 dB(A)","85 dB(A)","100 dB(A)"], r:0, e:"Au-delà, le sommeil est perturbé."}
 ]},
{id:'pb-7', niv:3, titre:'Air humide, point de rosée et condensation', duree:30, contenu:`## Humidité absolue et relative
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
- Ne pas descendre la consigne de climatisation trop bas (24 à 26 °C).`,
 quiz:[
  {q:"Le point de rosée est la température à laquelle :", o:["L'air humide commence à condenser","L'eau gèle","L'air est sec","Le béton prend"], r:0, e:"En dessous, la vapeur se transforme en gouttes."},
  {q:"Pour de l'air à 30 °C et 80 % d'humidité, le point de rosée vaut environ :", o:["15 °C","26 °C","30 °C","35 °C"], r:1, e:"Magnus donne Td ≈ 26,2 °C."},
  {q:"En climat chaud et humide climatisé, la vapeur migre :", o:["De l'extérieur vers l'intérieur","De l'intérieur vers l'extérieur","Elle ne migre pas","Du sol vers le toit uniquement"], r:0, e:"De l'air chaud et humide vers les locaux froids."},
  {q:"Pour éviter qu'une gaine de climatisation ne goutte, il faut :", o:["L'isoler avec un isolant à cellules fermées","La peindre en blanc","La percer","La laisser à l'air libre"], r:0, e:"Sa surface ne doit pas descendre sous le point de rosée de l'air ambiant."}
 ]},
{id:'pb-8', niv:3, titre:'Conception bioclimatique en climat tropical humide', duree:35, contenu:`## Les quatre principes
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
> Double toiture ventilée, faux plafond isolé, couleurs claires, arbres côté Ouest : ces choix bon marché font gagner plusieurs degrés.`,
 quiz:[
  {q:"Les façades les plus difficiles à protéger du soleil à Abidjan sont :", o:["Nord et Sud","Est et Ouest","Uniquement Sud","La toiture seulement"], r:1, e:"Le soleil y est bas le matin et l'après-midi."},
  {q:"Hauteur du soleil à midi sur une façade Sud à Abidjan en décembre :", o:["Environ 61°","Environ 90°","Environ 30°","Environ 5°"], r:0, e:"90 − (5,3 + 23,4) = 61,3°."},
  {q:"Pour protéger une fenêtre exposée à l'Ouest, on utilise de préférence :", o:["Des lames verticales ou de la végétation","Une casquette horizontale seule","Un vitrage clair","Rien"], r:0, e:"Le soleil couchant est bas : une casquette ne suffit pas."},
  {q:"En climat tropical humide, on privilégie :", o:["Une construction protégée, isolée en toiture et ventilée","Des murs très épais sans ouvertures","Une toiture-terrasse non isolée","De grandes baies à l'Ouest"], r:0, e:"La faible variation jour-nuit limite l'intérêt de l'inertie."}
 ]},
{id:'pb-9', niv:3, titre:'Énergie solaire photovoltaïque : dimensionner une installation', duree:35, contenu:`## Le principe
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
> Les besoins de climatisation (1 à 2 kW par appareil) font exploser la taille d'une installation autonome : commencez par réduire les besoins (isolation, LED, appareils économes).`,
 quiz:[
  {q:"Besoins de 3 880 Wh/j, 4,5 h de plein soleil, PR 0,75 : la puissance crête est d'environ :", o:["860 Wc","1 150 Wc","3 880 Wc","17 500 Wc"], r:1, e:"3 880 / (4,5 × 0,75) ≈ 1 150 Wc."},
  {q:"L'onduleur sert à :", o:["Transformer le courant continu en 230 V alternatif","Stocker l'énergie","Orienter les panneaux","Mesurer le soleil"], r:0, e:"Les modules et les batteries fonctionnent en continu."},
  {q:"À Abidjan, on incline les panneaux d'environ :", o:["10 à 15° vers le Sud","60° vers le Nord","90° (verticaux)","0° exactement"], r:0, e:"Faible latitude ; une légère pente permet l'autonettoyage."},
  {q:"Avec des batteries plomb, on limite la profondeur de décharge à environ :", o:["10 %","50 %","100 %","200 %"], r:1, e:"Au-delà, leur durée de vie chute."}
 ]}
]);

/* ---------- THERMIQUE ---------- */
A.addChapitres('therm', [
{id:'therm-6', niv:1, titre:'Matériaux isolants et inertie : les bases', duree:25, contenu:`## Conducteurs et isolants
La **conductivité thermique λ** (W/m·K) indique la facilité avec laquelle un matériau laisse passer la chaleur : plus λ est petit, plus le matériau est **isolant**.
| Matériau | λ (W/m·K) |
|---|---|
| Béton armé | 1,75 |
| Agglo creux (valeur équivalente) | ≈ 1,0 |
| Brique de terre cuite | 0,5 à 0,8 |
| Bois | 0,15 |
| Laine de verre / laine de roche | 0,04 |
| Polystyrène, polyuréthane | 0,025 à 0,035 |
| Air immobile | 0,025 |

## La résistance thermique
$$ R = e / λ   (e en mètres, R en m²·K/W)
> [!exemple]
> 5 cm de laine de verre : R = 0,05 / 0,04 = **1,25**. 20 cm de béton : R = 0,20 / 1,75 = **0,11**.
> Il faudrait plus de 2 m de béton pour isoler autant que 5 cm de laine !

## L'inertie thermique
Les matériaux lourds (béton, pierre, brique pleine) **stockent** la chaleur et la restituent avec retard. C'est utile quand les nuits sont fraîches ; en climat humide où les nuits restent chaudes, l'inertie seule ne suffit pas.

## Où isoler en priorité en climat chaud ?
1. **La toiture** : elle reçoit le soleil toute la journée (faux plafond + laine minérale, ou isolant sous la tôle).
2. Les **murs Est et Ouest**.
3. Les **gaines et tuyaux froids** de climatisation.

> [!attention]
> Un isolant mouillé n'isole plus. Protégez-le de la pluie et de la condensation, et prévoyez une lame d'air ventilée sous la couverture.`,
 quiz:[
  {q:"Plus la conductivité λ est faible, plus le matériau est :", o:["Isolant","Lourd","Conducteur","Résistant mécaniquement"], r:0, e:"λ mesure la facilité à transmettre la chaleur."},
  {q:"La résistance thermique de 10 cm de polystyrène (λ = 0,035) vaut environ :", o:["0,35","2,86","0,0035","35"], r:1, e:"R = 0,10 / 0,035 ≈ 2,86 m²·K/W."},
  {q:"En climat chaud, on isole en priorité :", o:["La toiture","Le dallage","Les cloisons intérieures","Les fondations"], r:0, e:"Elle reçoit le plus de rayonnement solaire."},
  {q:"L'inertie thermique est apportée par :", o:["Les matériaux lourds","Les isolants légers","Le vitrage","L'air"], r:0, e:"Ils stockent la chaleur et la restituent avec retard."}
 ]},
{id:'therm-7', niv:1, titre:'Le confort d\'été : dix choix simples', duree:20, contenu:`## Avant de climatiser, protéger
La meilleure énergie est celle qu'on ne consomme pas. Ces choix se décident dès le plan et coûtent peu.

1. **Toiture claire** (tôle blanche ou couleur claire) : elle absorbe deux fois moins de rayonnement qu'une toiture sombre.
2. **Faux plafond isolé** avec une lame d'air ventilée sous la couverture.
3. **Débords de toit** de 60 à 100 cm qui ombragent les murs et les fenêtres.
4. **Façades Est et Ouest** peu percées, protégées par des persiennes ou de la végétation.
5. **Ventilation traversante** : fenêtres sur deux façades opposées.
6. **Ouvertures hautes** pour évacuer l'air chaud (impostes, grilles).
7. **Brasseurs d'air** au plafond : la sensation de fraîcheur gagne 2 à 3 °C pour 50 W seulement.
8. **Arbres d'ombrage** côté Ouest et sols plantés plutôt que bétonnés autour de la maison.
9. **Éclairage LED** et appareils économes : moins de chaleur dégagée à l'intérieur.
10. **Climatiseurs bien dimensionnés**, de type inverter, réglés à 25-26 °C.

## Un calcul d'économie
Chaque degré de consigne en moins sur un climatiseur augmente sa consommation d'environ **6 à 8 %**.
> [!exemple]
> Avec un brasseur d'air, on règle la climatisation à 26 °C au lieu de 23 °C : 3 degrés × 7 % ≈ **20 % d'électricité en moins**, pour un ventilateur de 50 W.

> [!retenir]
> Protéger (toiture, soleil), ventiler, puis seulement refroidir : c'est l'ordre logique du confort d'été.`,
 quiz:[
  {q:"Une toiture claire, par rapport à une toiture sombre :", o:["Absorbe moins de rayonnement","Absorbe plus de rayonnement","Ne change rien","Doit être isolée deux fois plus"], r:0, e:"Son albédo est plus élevé."},
  {q:"Un brasseur d'air améliore la sensation de fraîcheur d'environ :", o:["2 à 3 °C","10 °C","0 °C","20 °C"], r:0, e:"Le mouvement d'air accélère l'évaporation."},
  {q:"Remonter la consigne de climatisation de 3 °C fait économiser environ :", o:["2 %","20 %","60 %","100 %"], r:1, e:"Environ 6 à 8 % par degré."},
  {q:"L'ordre logique du confort d'été est :", o:["Protéger, ventiler, puis refroidir","Refroidir d'abord","Isoler les fondations","Fermer toutes les fenêtres"], r:0, e:"La climatisation vient en dernier."}
 ]},
{id:'therm-8', niv:3, titre:'Régime variable : inertie, déphasage et amortissement', duree:30, contenu:`## La chaleur arrive par vagues
La température extérieure et le rayonnement solaire varient sur **24 heures**. Une paroi lourde ne transmet pas cette vague instantanément : elle la **retarde** (déphasage) et la **réduit** (amortissement).

## La diffusivité
$$ a = λ / (ρ × c)   (m²/s)
Plus la diffusivité est faible, plus la chaleur met de temps à traverser.

## Une estimation simple
Pour une onde de période P = 24 h, la chaleur pénètre dans un mur épais sur une profondeur caractéristique :
$$ δ = √(a × P / π)
À travers une épaisseur e, le **déphasage** vaut environ (e / δ) × 24 / (2π) heures et l'amplitude est multipliée par **e^(−e/δ)**.

> [!exemple] Mur en béton plein de 20 cm
> λ = 1,75 ; ρ = 2 400 kg/m³ ; c = 880 J/(kg·K) → a = 8,3 × 10⁻⁷ m²/s.
> δ = √(8,3 × 10⁻⁷ × 86 400 / π) = 0,15 m.
> e / δ = 1,33 → déphasage ≈ 1,33 × 24 / 6,28 ≈ **5 h** ; amplitude × e^(−1,33) ≈ **0,27**.
> Le pic de chaleur de 14 h arrive à l'intérieur vers 19 h, fortement atténué.

## Conséquences pratiques
- Une **tôle avec isolant léger** a un déphasage presque nul : la chaleur passe dans l'heure, mais l'isolant la réduit fortement.
- Une **toiture-terrasse en béton non isolée** stocke la chaleur toute la journée et la restitue **le soir et la nuit** dans les chambres du dernier étage : c'est le cas typique d'inconfort nocturne.
- Solution : isoler la terrasse **par l'extérieur** (isolant sous la protection) pour garder la masse du côté intérieur.

> [!retenir]
> Inertie et isolation sont complémentaires : l'isolant réduit le flux de chaleur, l'inertie le décale dans le temps.`,
 quiz:[
  {q:"La diffusivité thermique vaut :", o:["λ / (ρ c)","ρ c / λ","λ × e","e / λ"], r:0, e:"Elle mesure la vitesse de propagation de la chaleur dans le matériau."},
  {q:"Le déphasage d'un mur en béton de 20 cm est d'environ :", o:["5 heures","5 minutes","24 heures","5 jours"], r:0, e:"Le pic de chaleur de l'après-midi arrive en soirée."},
  {q:"Une toiture-terrasse en béton non isolée provoque surtout :", o:["Un inconfort nocturne au dernier étage","Un froid excessif","Aucun effet","Des condensations en façade"], r:0, e:"La dalle restitue la nuit la chaleur stockée le jour."},
  {q:"Pour garder l'inertie côté intérieur, on isole une terrasse :", o:["Par l'extérieur","Par l'intérieur","Pas du tout","Seulement en rive"], r:0, e:"La masse reste en contact avec l'ambiance intérieure."}
 ]},
{id:'therm-9', niv:3, titre:'Performance énergétique et consommation de climatisation', duree:30, contenu:`## De la puissance à l'énergie
La puissance frigorifique installée ne fonctionne pas à pleine charge toute la journée. Énergie électrique annuelle :
$$ E = P froid × taux de charge moyen × heures par an / EER
L'**EER** (ou COP en froid) est le rapport entre le froid produit et l'électricité consommée : 2,5 à 3 pour un climatiseur classique, 3,5 à 4,5 pour un modèle **inverter** performant.

> [!exemple] Villa haut standing (puissance frigorifique 24,7 kW)
> Taux de charge moyen 40 %, 10 h par jour, 365 jours : froid produit = 24,7 × 0,4 × 10 × 365 ≈ 36 000 kWh.
> Avec EER = 3 : **12 000 kWh électriques par an**, soit environ **1,2 million F CFA** à 100 F/kWh.

## Les leviers d'économie
| Mesure | Gain indicatif sur la climatisation |
|---|---|
| Isolation de la toiture (5 à 10 cm) | 20 à 30 % |
| Protections solaires des vitrages | 10 à 20 % |
| Climatiseurs inverter (EER 4 au lieu de 3) | 25 % |
| Consigne 26 °C au lieu de 23 °C | environ 20 % |
| Menuiseries étanches, portes fermées | 5 à 10 % |

## Indicateurs et certifications
- **Consommation en kWh/m²/an** : indicateur simple pour comparer les bâtiments.
- **EDGE** (IFC, Banque mondiale), utilisée en Afrique de l'Ouest : exige au moins **20 % d'économie** d'énergie, d'eau et d'énergie grise des matériaux par rapport à un bâtiment de référence.
- Les étiquettes énergie des climatiseurs guident le choix des appareils.

> [!astuce]
> Sur un projet, chiffrez le **surcoût** d'une mesure (isolant, appareils inverter) et l'**économie annuelle** : le temps de retour est souvent inférieur à 3 ans pour l'isolation de toiture.`,
 quiz:[
  {q:"L'EER d'un climatiseur est le rapport :", o:["Froid produit / électricité consommée","Électricité / froid","Puissance / surface","Température / humidité"], r:0, e:"Plus il est élevé, plus l'appareil est efficace."},
  {q:"36 000 kWh de froid avec un EER de 3 consomment :", o:["12 000 kWh électriques","108 000 kWh","36 000 kWh","3 000 kWh"], r:0, e:"36 000 / 3 = 12 000 kWh."},
  {q:"La certification EDGE exige au moins :", o:["20 % d'économie d'énergie, d'eau et d'énergie grise","50 % de panneaux solaires","Une toiture verte","Aucune climatisation"], r:0, e:"Par rapport à un bâtiment de référence."},
  {q:"Parmi ces mesures, laquelle réduit le plus la consommation de climatisation d'une villa sous toiture ?", o:["Isoler la toiture","Changer les poignées de porte","Peindre les cloisons","Agrandir les fenêtres Ouest"], r:0, e:"20 à 30 % d'économie."}
 ]}
]);

/* ---------- ACOUSTIQUE ---------- */
A.addChapitres('acou', [
{id:'acou-5', niv:1, titre:'Les bruits du quotidien et la gêne', duree:20, contenu:`## D'où viennent les bruits ?
- **Extérieurs** : circulation, maquis et lieux de culte, chantiers, groupes électrogènes du voisinage ;
- **Voisinage** : voix, musique, pas sur le plancher du dessus ;
- **Équipements** : climatiseurs, pompes, ascenseurs, chasses d'eau.

## L'échelle des décibels
| Situation | Niveau en dB(A) |
|---|---|
| Chambre calme la nuit | 30 |
| Bureau calme | 40 |
| Conversation normale | 60 |
| Rue animée | 70 |
| Seuil de danger pour 8 h d'exposition | 85 |
| Marteau-piqueur à 1 m | 100 |
| Seuil de la douleur | 120 |

## Deux règles simples
- **Deux sources identiques** ne doublent pas le niveau : elles ajoutent **3 dB**.
- Pour une source ponctuelle, chaque **doublement de distance** fait baisser le niveau de **6 dB**.

> [!exemple] Un groupe électrogène bruyant
> 85 dB(A) à 1 m. À 2 m : 79 ; à 4 m : 73 ; à 8 m : **67 dB(A)**. Pour gagner davantage, on le place dans un **caisson insonorisé** (15 à 25 dB de moins) et loin des chambres.

## Protéger les travailleurs
Au-delà de **85 dB(A)**, le port de **protections auditives** (casque, bouchons) est obligatoire sur le chantier : disqueuse, marteau-piqueur, bétonnière, groupe.`,
 quiz:[
  {q:"Deux climatiseurs identiques de 50 dB fonctionnant ensemble donnent :", o:["100 dB","53 dB","50 dB","25 dB"], r:1, e:"Deux sources égales ajoutent 3 dB."},
  {q:"Pour une source ponctuelle, doubler la distance diminue le niveau de :", o:["3 dB","6 dB","10 dB","20 dB"], r:1, e:"−6 dB par doublement de distance."},
  {q:"Les protections auditives deviennent obligatoires à partir de :", o:["60 dB(A)","85 dB(A)","120 dB(A)","30 dB(A)"], r:1, e:"Seuil d'exposition sur une journée de travail."},
  {q:"Une conversation normale se situe vers :", o:["30 dB(A)","60 dB(A)","100 dB(A)","120 dB(A)"], r:1, e:"Environ 60 dB(A) à 1 m."}
 ]},
{id:'acou-6', niv:1, titre:'Choisir ses matériaux pour le confort acoustique', duree:20, contenu:`## Isoler ou absorber : deux actions différentes
- **Isoler**, c'est empêcher le bruit de **passer** d'une pièce à l'autre : il faut de la **masse** et de l'**étanchéité**.
- **Absorber**, c'est réduire l'**écho** dans une pièce : il faut des matériaux **poreux ou souples** (faux plafond acoustique, rideaux, tapis).

## Les bons choix courants
| Ouvrage | Plus performant | Moins performant |
|---|---|---|
| Mur entre logements | Agglo plein enduit, double mur | Agglo creux de 10 |
| Plancher | Dalle pleine + chape | Plancher bois léger |
| Porte de chambre | Porte pleine avec joints | Porte isoplane creuse |
| Fenêtre sur rue | Double vitrage, menuiserie étanche | Persiennes, naco |
| Sol | Carrelage sur sous-couche, tapis | Carrelage collé directement |

## L'étanchéité compte autant que la masse
Une fente ou un trou laisse passer le bruit comme une fenêtre ouverte.
> [!exemple]
> Un mur qui isole de 50 dB, percé d'une ouverture représentant **1 %** de sa surface (gaine mal rebouchée, porte détalonnée), n'isole plus que **20 dB** environ.

## Équipements
- Poser climatiseurs, pompes et groupes sur des **plots antivibratiles** ;
- Désolidariser les tuyauteries (colliers isophoniques) ;
- Éloigner les machines des chambres.

> [!retenir]
> Masse + étanchéité pour isoler ; matériaux poreux pour absorber. Les deux ne se remplacent pas.`,
 quiz:[
  {q:"Pour isoler une chambre du bruit de la pièce voisine, il faut surtout :", o:["De la masse et de l'étanchéité","Une moquette","Une peinture acoustique","Une couleur claire"], r:0, e:"L'absorption ne remplace pas l'isolation."},
  {q:"Un mur de 50 dB percé d'une ouverture de 1 % n'isole plus que :", o:["49 dB","35 dB","20 dB environ","50 dB"], r:2, e:"Le trou laisse passer 1 % de l'énergie : −20 dB."},
  {q:"Pour réduire l'écho dans une salle, on ajoute :", o:["Des matériaux absorbants (faux plafond acoustique, rideaux)","Du carrelage","Des murs plus épais","Des vitres"], r:0, e:"Ils diminuent la réverbération."},
  {q:"Les climatiseurs se posent sur :", o:["Des plots antivibratiles","Des cales en bois serrées","Directement sur la dalle","Des briques"], r:0, e:"Pour éviter de transmettre les vibrations à la structure."}
 ]},
{id:'acou-7', niv:3, titre:'Isolement entre locaux : transmissions latérales et DnT', duree:30, contenu:`## Du laboratoire au bâtiment
- **R** : indice d'affaiblissement d'une paroi mesuré en laboratoire (une seule paroi transmet).
- **R'** : indice apparent sur chantier, plus faible à cause des **transmissions latérales** (planchers et murs continus qui transportent les vibrations).
- **DnT** : isolement **standardisé** entre deux pièces réelles, corrigé de la réverbération de la pièce de réception :
$$ DnT = L1 − L2 + 10 log (T / 0,5)

> [!exemple] Mesure entre deux séjours d'un immeuble
> Niveau émis L1 = 95 dB, niveau reçu L2 = 48 dB, durée de réverbération de la pièce de réception T = 0,8 s.
> DnT = 95 − 48 + 10 log(1,6) = 47 + 2,0 = **49 dB**, inférieur à l'objectif de 53 dB → non conforme.

## Les transmissions latérales
Le bruit contourne la paroi séparative par les **planchers, les façades et les murs de refend** qui la traversent. Elles font perdre couramment **3 à 7 dB**. Remèdes : désolidariser (joints souples), doublages, chapes flottantes.

## Le système masse-ressort-masse
Un doublage (plaque de plâtre + laine minérale + lame d'air) devant un mur lourd améliore fortement l'isolement, à condition que sa **fréquence de résonance** soit basse (moins de 100 Hz) :
$$ f0 = 60 × √( (1/m1 + 1/m2) / d )   (m en kg/m², d en m)
> [!exemple]
> Mur de 230 kg/m² + plaque de 10 kg/m² avec 5 cm de vide rempli de laine : f0 = 60 × √((1/230 + 1/10)/0,05) ≈ **87 Hz** ✔.

## Objectifs courants pour les logements
- Entre logements : **DnT,A ≥ 53 dB** (bruits aériens) ;
- Bruits de choc reçus : **L'nT,w ≤ 58 dB** ;
- Équipements : moins de 30 à 35 dB(A) dans les chambres.`,
 quiz:[
  {q:"L'isolement standardisé DnT se calcule avec :", o:["L1 − L2 + 10 log(T/0,5)","L1 + L2","R × T","20 log(m)"], r:0, e:"On corrige la différence de niveaux par la réverbération."},
  {q:"Les transmissions latérales font généralement perdre :", o:["3 à 7 dB","0 dB","30 dB","50 dB"], r:0, e:"Le bruit contourne la paroi par les éléments continus."},
  {q:"Pour un doublage masse-ressort-masse efficace, la fréquence de résonance doit être :", o:["Basse (moins de 100 Hz)","Élevée (plus de 1 000 Hz)","Égale à 500 Hz","Sans importance"], r:0, e:"Au-dessus de f0, l'isolement augmente fortement."},
  {q:"L'isolement courant visé entre deux logements est :", o:["DnT,A ≥ 53 dB","DnT,A ≥ 20 dB","DnT,A ≥ 90 dB","Aucune exigence"], r:0, e:"Valeur de référence de la réglementation française souvent reprise."}
 ]},
{id:'acou-8', niv:3, titre:'Acoustique des salles : classes, lieux de culte, auditoriums', duree:30, contenu:`## La bonne durée de réverbération
| Usage | Durée conseillée |
|---|---|
| Salle de classe, bureau, salle de réunion | 0,5 à 0,8 s |
| Salle polyvalente, lieu de culte (parole et chants) | 1,0 à 1,5 s |
| Salle de concert | 1,5 à 2,0 s |

Trop longue, la réverbération rend la parole inintelligible ; trop courte, la salle paraît « sourde ».

## Calcul avec la formule de Sabine
$$ T = 0,16 × V / A      A = Σ S × α
> [!exemple] Une salle de classe de 9 × 7 × 3,2 m (40 élèves)
> V = 201,6 m³.
> Sol carrelé 63 m² × 0,02 = 1,26 ; plafond enduit 63 × 0,03 = 1,89 ; murs 90,4 m² × 0,03 = 2,71 ; fenêtres 12 m² × 0,10 = 1,20 ; élèves 40 × 0,40 = 16,0 → A = 23,1 m².
> T = 0,16 × 201,6 / 23,1 = **1,40 s** : beaucoup trop long, les élèves du fond comprennent mal.
> Avec un **faux plafond acoustique** (α = 0,70) : A augmente de 63 × (0,70 − 0,03) = 42,2 → A = 65,3 m² → **T = 0,49 s** ✔.

## La forme de la salle
- Éviter les murs parallèles très réfléchissants (échos flottants) : traiter au moins un des deux ;
- Utiliser le plafond au-dessus de l'orateur comme **réflecteur** et placer l'absorbant au fond ;
- Les coupoles et voûtes concentrent le son en certains points : à traiter.

## Le bruit de fond
Les climatiseurs, ventilateurs et bruits extérieurs doivent rester sous **35 dB(A)** dans une classe. Une sonorisation ne compense pas une salle trop réverbérante : elle ajoute du son à une salle qui en contient déjà trop.`,
 quiz:[
  {q:"La durée de réverbération conseillée pour une salle de classe est :", o:["0,5 à 0,8 s","2 à 3 s","0,1 s","5 s"], r:0, e:"Pour une bonne intelligibilité de la parole."},
  {q:"La formule de Sabine s'écrit :", o:["T = 0,16 V / A","T = A / V","T = 0,16 A / V","T = V × A"], r:0, e:"V volume en m³, A aire d'absorption en m²."},
  {q:"Dans l'exemple, le faux plafond acoustique fait passer T de 1,40 s à :", o:["0,49 s","1,20 s","2,10 s","0,05 s"], r:0, e:"L'aire d'absorption passe de 23 à 65 m²."},
  {q:"Les échos flottants sont dus à :", o:["Des murs parallèles très réfléchissants","Des fenêtres ouvertes","Un plafond acoustique","Des élèves trop nombreux"], r:0, e:"Le son rebondit de l'un à l'autre."}
 ]},
{id:'acou-9', niv:3, titre:'Bruit de l\'environnement : routes, chantiers et protections', duree:30, contenu:`## Source ponctuelle et source linéique
- Une machine isolée est une **source ponctuelle** : −6 dB par doublement de distance.
- Une route chargée est une **source linéique** : seulement **−3 dB** par doublement de distance.
> [!exemple]
> Une voie express produit 75 dB(A) à 10 m. À 40 m (deux doublements), il reste encore 75 − 6 = **69 dB(A)**.

## Les écrans acoustiques
Un mur ou un merlon entre la route et les logements crée une **zone d'ombre** acoustique. Son efficacité dépend de la **différence de marche** δ (allongement du trajet du son qui passe par-dessus l'écran). Approximation de Maekawa :
$$ ΔL ≈ 10 log (3 + 20 N)   avec N = 2 δ / λ
> [!exemple]
> δ = 0,5 m à 500 Hz (λ = 0,68 m) : N = 1,47 → ΔL ≈ 10 log(32,4) ≈ **15 dB**. Un écran est moins efficace pour les sons graves (λ plus grande).

## L'isolement des façades
Isolement nécessaire ≈ niveau extérieur − niveau intérieur souhaité.
> Façade exposée à 70 dB(A), chambre visée à 35 dB(A) → **35 dB d'isolement** : menuiseries acoustiques, entrées d'air insonorisées, coffres de volets étanches.

## Le bruit de chantier
- Respecter les **horaires** (pas de bruit de nuit ni tôt le matin) ;
- Matériel récent et capoté, groupe électrogène en caisson, centrales à béton éloignées des riverains ;
- Informer le voisinage des phases bruyantes (démolition, battage, sciage).

## Urbanisme
Les **cartes de bruit** permettent d'éviter de placer écoles et logements le long des grands axes, ou de les protéger par des bâtiments-écrans (bureaux, commerces) et des espaces tampons.`,
 quiz:[
  {q:"Pour une route (source linéique), doubler la distance diminue le niveau de :", o:["3 dB","6 dB","10 dB","0 dB"], r:0, e:"Contre 6 dB pour une source ponctuelle."},
  {q:"Un écran acoustique est le moins efficace pour :", o:["Les sons graves","Les sons aigus","Les sons de 1 000 Hz","Les ultrasons"], r:0, e:"Leur grande longueur d'onde contourne l'écran."},
  {q:"Façade à 70 dB(A), chambre visée à 35 dB(A) : l'isolement à obtenir est :", o:["35 dB","105 dB","70 dB","2 dB"], r:0, e:"70 − 35 = 35 dB."},
  {q:"Le paramètre clé de l'efficacité d'un écran est :", o:["La différence de marche du son","La couleur de l'écran","Le prix","La hauteur des logements"], r:0, e:"Plus le détour est grand, plus l'atténuation est forte."}
 ]}
]);

/* ---------- MÉCANIQUE DES FLUIDES ---------- */
A.addChapitres('mdf', [
{id:'mdf-6', niv:1, titre:'L\'eau dans la maison : réseaux, appareils et règles simples', duree:25, contenu:`## Le trajet de l'eau potable
Branchement SODECI → **compteur** → robinet d'arrêt général → **réducteur de pression** si la pression dépasse 3 bars → nourrices de distribution → vannes par pièce d'eau → appareils.
Quand l'eau est coupée souvent, on ajoute une **bâche** (réservoir au sol) et un **surpresseur**, ou un réservoir en hauteur.

## Pression et hauteur d'eau
**1 bar ≈ 10 m de colonne d'eau.** Le confort aux robinets demande 1,5 à 3 bars.
> [!exemple]
> Un réservoir posé sur le toit, 6 m au-dessus de la douche, donne seulement 0,6 bar : le débit sera faible. Il faudrait un château d'eau à 15 m pour obtenir 1,5 bar, ou un surpresseur.

## Les débits des appareils
| Appareil | Débit de base |
|---|---|
| Lavabo | 0,10 L/s |
| Douche | 0,20 L/s |
| WC (réservoir) | 0,12 L/s |
| Évier | 0,20 L/s |

## L'évacuation des eaux usées
- Elle fonctionne **par gravité** : pente de **1 à 3 %** (1 à 3 cm par mètre) ;
- Chaque appareil a un **siphon** (garde d'eau contre les odeurs) ;
- Les chutes verticales sont **ventilées** en toiture ;
- Diamètres : 40 mm (lavabo, douche), 50 mm (évier), 100 mm (WC).

> [!attention] Erreurs fréquentes
> Contre-pente (l'eau stagne et bouche), raccordement des eaux de pluie dans la fosse septique, absence de regards de visite aux changements de direction.`,
 quiz:[
  {q:"1 bar correspond environ à une colonne d'eau de :", o:["1 m","10 m","100 m","0,1 m"], r:1, e:"La pression augmente de 1 bar tous les 10 m."},
  {q:"La pente d'une évacuation d'eaux usées est de :", o:["1 à 3 %","10 à 20 %","0 %","50 %"], r:0, e:"Assez pour l'autocurage, sans vider les siphons."},
  {q:"Le siphon d'un appareil sanitaire sert à :", o:["Empêcher les mauvaises odeurs de remonter","Augmenter la pression","Filtrer l'eau potable","Mesurer le débit"], r:0, e:"La garde d'eau bloque les gaz de l'égout."},
  {q:"Le diamètre d'évacuation d'un WC est :", o:["100 mm","40 mm","20 mm","200 mm"], r:0, e:"Les WC évacuent des matières solides."}
 ]},
{id:'mdf-7', niv:3, titre:'Pompes et surpresseurs : HMT, courbes et choix', duree:30, contenu:`## La hauteur manométrique totale (HMT)
La pompe doit fournir :
$$ HMT = hauteur géométrique + pertes de charge + pression résiduelle au point le plus défavorable

## La puissance
$$ P hydraulique = ρ × g × Q × HMT      P absorbée = P hydraulique / η

> [!exemple] Surpresseur d'un immeuble R+4
> Débit de pointe Q = 2,5 L/s ; dernier robinet à 15 m au-dessus de la pompe ; pertes de charge 6 m ; pression résiduelle 15 m (1,5 bar).
> HMT = 15 + 6 + 15 = **36 m**.
> P hydraulique = 1 000 × 9,81 × 0,0025 × 36 = 883 W ; avec un rendement η = 0,6 → **1,5 kW**.

## Courbe de pompe et courbe de réseau
Le fabricant donne la **courbe HMT = f(Q)** de la pompe. Le réseau a sa propre courbe (hauteur géométrique + pertes de charge qui augmentent comme Q²). Le **point de fonctionnement** est leur intersection : on choisit une pompe dont le point tombe près de son meilleur rendement.

## L'aspiration et la cavitation
Si la pression à l'aspiration est trop basse, l'eau se vaporise dans la pompe (**cavitation** : bruit, perte de débit, usure). On garde une aspiration courte, sans contre-pente, avec crépine et clapet, et la pompe **en charge** sous la bâche quand c'est possible.

## Dimensionner la bâche
10 logements × 5 personnes × 100 L/j = 5 m³/j. Pour **2 jours de coupure** : bâche de **10 m³**.

## Le réservoir à vessie
Il évite que la pompe démarre à chaque ouverture de robinet : on limite le nombre de démarrages à environ **10 à 15 par heure**.`,
 quiz:[
  {q:"La HMT d'une pompe comprend :", o:["Hauteur géométrique + pertes de charge + pression résiduelle","Seulement la hauteur du bâtiment","Le débit × le temps","La puissance du moteur"], r:0, e:"C'est l'énergie à fournir par unité de poids d'eau."},
  {q:"Q = 2,5 L/s, HMT = 36 m : la puissance hydraulique vaut environ :", o:["883 W","88 W","8,8 kW","36 W"], r:0, e:"1 000 × 9,81 × 0,0025 × 36 ≈ 883 W."},
  {q:"La cavitation est due à :", o:["Une pression trop basse à l'aspiration","Un débit trop faible","Une pompe trop puissante au refoulement","Une eau trop froide"], r:0, e:"L'eau se vaporise et forme des bulles qui implosent."},
  {q:"Le point de fonctionnement d'une pompe est :", o:["L'intersection de la courbe de pompe et de la courbe du réseau","La puissance maximale","Le débit nul","La hauteur du réservoir"], r:0, e:"C'est là que la pompe travaille réellement."}
 ]},
{id:'mdf-8', niv:3, titre:'Écoulements à surface libre : caniveaux et dalots', duree:30, contenu:`## La formule de Manning-Strickler
Pour un caniveau, un fossé ou un dalot où l'eau s'écoule avec une surface libre :
$$ Q = K × S × Rh^(2/3) × √i
- S : section mouillée (m²), P : périmètre mouillé (m), **Rh = S / P** : rayon hydraulique ;
- i : pente (m/m) ; K : coefficient de rugosité (béton lisse 70 à 80, maçonnerie 60, fossé en terre 30 à 40).

> [!exemple] Caniveau rectangulaire en béton
> Largeur 0,40 m, hauteur d'eau 0,25 m, pente 1 %, K = 70.
> S = 0,10 m² ; P = 0,40 + 2 × 0,25 = 0,90 m ; Rh = 0,111 m ; Rh^(2/3) = 0,231.
> Q = 70 × 0,10 × 0,231 × 0,10 = **0,162 m³/s (162 L/s)** ; vitesse V = Q / S = 1,6 m/s.

## Les vitesses à respecter
- Plus de **0,6 m/s** pour l'**autocurage** (sinon le sable se dépose) ;
- Moins de **3 à 4 m/s** dans un ouvrage en béton (sinon érosion), beaucoup moins dans un fossé en terre.

## Le débit à évacuer (méthode rationnelle)
$$ Q = C × i × A
> [!exemple]
> Parcelle de 600 m² imperméabilisée à 80 % (C = 0,8), pluie de projet de 180 mm/h (5 × 10⁻⁵ m/s) : Q = 0,8 × 5 × 10⁻⁵ × 600 = **0,024 m³/s = 24 L/s** → un caniveau de 0,30 × 0,30 m suffit largement.

## Les dalots et ponceaux
Sous une voie, le dalot doit évacuer le débit du bassin versant amont **sans mise en charge**, avec une revanche (marge) d'au moins 20 % de la hauteur. On contrôle aussi l'affouillement à la sortie (enrochements).

> [!attention]
> Beaucoup d'inondations urbaines viennent de caniveaux **bouchés** : prévoir des grilles, des regards et un entretien avant la saison des pluies.`,
 quiz:[
  {q:"Le rayon hydraulique vaut :", o:["S / P","P / S","S × P","√S"], r:0, e:"Section mouillée divisée par le périmètre mouillé."},
  {q:"La vitesse minimale d'autocurage d'un caniveau est d'environ :", o:["0,6 m/s","0,01 m/s","5 m/s","10 m/s"], r:0, e:"En dessous, le sable se dépose."},
  {q:"Parcelle de 1 000 m², C = 0,8, pluie de 5 × 10⁻⁵ m/s : le débit vaut :", o:["40 L/s","4 L/s","400 L/s","0,4 L/s"], r:0, e:"0,8 × 5 × 10⁻⁵ × 1 000 = 0,04 m³/s."},
  {q:"Le coefficient K de Strickler est plus élevé pour :", o:["Un caniveau en béton lisse","Un fossé en terre","Un oued encombré","Un canal herbeux"], r:0, e:"Plus la paroi est lisse, plus K est grand."}
 ]},
{id:'mdf-9', niv:3, titre:'Coup de bélier et protection des réseaux', duree:25, contenu:`## Le phénomène
Quand on ferme brusquement une vanne, l'eau en mouvement s'arrête d'un coup : son énergie se transforme en une **onde de surpression** qui parcourt la conduite à grande vitesse. Elle peut faire éclater les tuyaux, déboîter les raccords ou endommager les pompes.

## Fermeture brusque : formule de Joukowsky
$$ ΔH = c × ΔV / g
c est la **célérité** de l'onde : ≈ 1 200 m/s dans l'acier, 1 000 m/s dans la fonte, **300 à 400 m/s** dans le PVC et le PEHD (matériaux plus souples).

> [!exemple]
> Conduite en PVC (c = 400 m/s), eau à 1,5 m/s arrêtée net : ΔH = 400 × 1,5 / 9,81 ≈ **61 m**, soit **6 bars** de surpression qui s'ajoutent à la pression de service !

## Fermeture lente : formule de Michaud
Si la durée de fermeture T est supérieure à 2 L / c (aller-retour de l'onde) :
$$ ΔH = 2 × L × V / (g × T)
> Pour L = 200 m, V = 1,5 m/s et une fermeture en 10 s : ΔH = 2 × 200 × 1,5 / (9,81 × 10) ≈ **6 m** seulement.

## Les protections
- **Vannes à fermeture lente** et robinets non quart de tour sur les grosses conduites ;
- **Réservoirs anti-bélier** (ballons à vessie) au départ des pompes ;
- Démarrage et arrêt progressifs des pompes (**variateur de vitesse**) ;
- Soupapes de décharge et ventouses aux points hauts ;
- Bonne **butée** (massifs en béton) aux coudes et aux tés.

> [!retenir]
> Dans une maison, les « coups » entendus dans les tuyaux à la fermeture d'un robinet ou d'une machine à laver sont de petits coups de bélier : un mini anti-bélier se pose près de l'appareil.`,
 quiz:[
  {q:"La formule de Joukowsky donne la surpression pour :", o:["Une fermeture brusque","Une fermeture lente","Un écoulement à surface libre","Une pompe arrêtée depuis longtemps"], r:0, e:"ΔH = c ΔV / g."},
  {q:"Dans une conduite PVC (c = 400 m/s), l'arrêt brutal d'une eau à 1,5 m/s crée environ :", o:["6 bars","0,6 bar","60 bars","0,06 bar"], r:0, e:"ΔH ≈ 61 m d'eau, soit environ 6 bars."},
  {q:"Pour réduire le coup de bélier, on peut :", o:["Fermer les vannes lentement","Augmenter la vitesse de l'eau","Supprimer les butées","Utiliser des robinets quart de tour partout"], r:0, e:"La surpression diminue quand la fermeture dure plus que 2L/c."},
  {q:"Les massifs de butée en béton se placent :", o:["Aux coudes et aux tés","Au milieu des tronçons droits","Sous les compteurs uniquement","Nulle part"], r:0, e:"Les efforts de poussée y sont les plus importants."}
 ]}
]);
