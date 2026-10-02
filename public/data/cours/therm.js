/* =====================================================================
   Thermique du bâtiment — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"therm",
 titre:"Thermique du bâtiment",
 court:"Thermique",
 groupe:"phys",
 icone:"thermo",
 couleur:"#C8363B",
 niveau:"Intermédiaire",
 heures:18,
 ordre:2,
 prerequis:["sp", "pb"],
 resume:"Transferts de chaleur, résistance thermique des parois, ponts thermiques, apports solaires et climatisation : construire des bâtiments frais et économes.",
 objectifs:[
  "Distinguer conduction, convection et rayonnement",
  "Calculer la résistance R et le coefficient U d'une paroi",
  "Repérer et traiter les ponts thermiques",
  "Limiter les apports solaires",
  "Estimer la puissance de climatisation d'une pièce"
 ],
 applications:["Choix d'un isolant de toiture", "Comparaison agglos / BTC / brique", "Dimensionnement des climatiseurs", "Protections solaires des façades"],
 chapitres:[
{id:"therm-1", niv:1, titre:"Chaleur, température et modes de transfert", duree:20, contenu:`## Température et chaleur
- La **température** (°C ou K) mesure l'agitation des molécules. T(K) = T(°C) + 273,15.
- La **chaleur** (J) est une énergie qui passe toujours du corps chaud vers le corps froid.
- Le **flux thermique** Φ (W) est la quantité de chaleur transmise par seconde ; la **densité de flux** φ (W/m²) est le flux par m² de paroi.

## Les trois modes de transfert
1. **Conduction** : la chaleur traverse la matière de proche en proche (à travers un mur, une dalle). Elle dépend de la **conductivité λ** du matériau.
2. **Convection** : la chaleur est transportée par un fluide en mouvement (air contre une paroi, ventilation).
3. **Rayonnement** : échange par ondes infrarouges entre surfaces, sans contact (soleil sur la toiture, toiture chaude qui rayonne vers les occupants).

> [!exemple] Une toiture en tôle à midi
> Le soleil (rayonnement) chauffe la tôle jusqu'à 60–70 °C. La tôle rayonne vers le plafond et chauffe l'air des combles (convection). Le plafond transmet la chaleur à la pièce (conduction puis rayonnement). Un **faux plafond avec isolant** et des **combles ventilés** coupent cette chaîne.

## Capacité thermique et inertie
La **capacité thermique massique** c (J/kg·K) indique l'énergie pour élever 1 kg de 1 °C : eau 4 180, béton ≈ 880, bois ≈ 1 600. Les matériaux lourds (béton, terre) stockent beaucoup de chaleur : c'est l'**inertie**, qui décale et amortit les pics de température.

> [!retenir]
> Conduction (dans la matière), convection (par l'air), rayonnement (par les infrarouges) : un bon bâtiment tropical agit sur les trois.`, quiz:[
  {q:"Le soleil chauffe une toiture principalement par :", o:["Conduction", "Convection", "Rayonnement", "Évaporation"], r:2, e:"Le rayonnement solaire traverse le vide et l'air."},
  {q:"La chaleur se déplace toujours :", o:["Du froid vers le chaud", "Du chaud vers le froid", "Vers le haut uniquement", "Au hasard"], r:1, e:"C'est le second principe de la thermodynamique."},
  {q:"25 °C correspondent à environ :", o:["25 K", "298 K", "248 K", "100 K"], r:1, e:"T(K) = 25 + 273 = 298 K."},
  {q:"L'inertie thermique d'un mur dépend surtout :", o:["De sa couleur", "De sa masse et de sa capacité thermique", "De sa longueur", "De sa peinture"], r:1, e:"Un mur lourd stocke la chaleur."}
 ]},

{id:"therm-6", niv:1, titre:"Matériaux isolants et inertie : les bases", duree:25, contenu:`## Conducteurs et isolants
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
> Un isolant mouillé n'isole plus. Protégez-le de la pluie et de la condensation, et prévoyez une lame d'air ventilée sous la couverture.`, quiz:[
  {q:"Plus la conductivité λ est faible, plus le matériau est :", o:["Isolant", "Lourd", "Conducteur", "Résistant mécaniquement"], r:0, e:"λ mesure la facilité à transmettre la chaleur."},
  {q:"La résistance thermique de 10 cm de polystyrène (λ = 0,035) vaut environ :", o:["0,35", "2,86", "0,0035", "35"], r:1, e:"R = 0,10 / 0,035 ≈ 2,86 m²·K/W."},
  {q:"En climat chaud, on isole en priorité :", o:["La toiture", "Le dallage", "Les cloisons intérieures", "Les fondations"], r:0, e:"Elle reçoit le plus de rayonnement solaire."},
  {q:"L'inertie thermique est apportée par :", o:["Les matériaux lourds", "Les isolants légers", "Le vitrage", "L'air"], r:0, e:"Ils stockent la chaleur et la restituent avec retard."}
 ]},

{id:"therm-7", niv:1, titre:"Le confort d'été : dix choix simples", duree:20, contenu:`## Avant de climatiser, protéger
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
> Protéger (toiture, soleil), ventiler, puis seulement refroidir : c'est l'ordre logique du confort d'été.`, quiz:[
  {q:"Une toiture claire, par rapport à une toiture sombre :", o:["Absorbe moins de rayonnement", "Absorbe plus de rayonnement", "Ne change rien", "Doit être isolée deux fois plus"], r:0, e:"Son albédo est plus élevé."},
  {q:"Un brasseur d'air améliore la sensation de fraîcheur d'environ :", o:["2 à 3 °C", "10 °C", "0 °C", "20 °C"], r:0, e:"Le mouvement d'air accélère l'évaporation."},
  {q:"Remonter la consigne de climatisation de 3 °C fait économiser environ :", o:["2 %", "20 %", "60 %", "100 %"], r:1, e:"Environ 6 à 8 % par degré."},
  {q:"L'ordre logique du confort d'été est :", o:["Protéger, ventiler, puis refroidir", "Refroidir d'abord", "Isoler les fondations", "Fermer toutes les fenêtres"], r:0, e:"La climatisation vient en dernier."}
 ]},

{id:"therm-2", niv:2, titre:"Conduction : résistance thermique et coefficient U", duree:30, contenu:`## Conductivité thermique λ
λ (W/m·K) indique la facilité avec laquelle un matériau conduit la chaleur. Plus λ est **faible**, plus le matériau est **isolant**.

| Matériau | λ (W/m·K) |
|---|---|
| Acier | 50 |
| Béton plein | 1,75 à 2,0 |
| Enduit ciment | 1,15 |
| Brique de terre comprimée (BTC) | 0,8 à 1,0 |
| Plâtre | 0,35 |
| Bois | 0,13 à 0,18 |
| Laine de verre, laine de roche | 0,035 à 0,040 |
| Polystyrène expansé | 0,035 à 0,038 |

## Résistance thermique d'une couche
$$ R = e / λ   (m²·K/W)    e : épaisseur en m
Pour les blocs creux, on utilise directement une résistance donnée par le fabricant : agglo creux de béton de 15 cm ≈ **0,20 m²·K/W**, de 20 cm ≈ 0,23.

## Résistances superficielles
Les échanges entre l'air et la paroi ajoutent **Rsi = 0,13** (intérieur) et **Rse = 0,04** m²·K/W (extérieur) pour une paroi verticale.

## Coefficient de transmission U
$$ Rtotal = Rsi + Σ(e/λ) + Rse        U = 1 / Rtotal   (W/m²·K)
$$ Flux : Φ = U × S × (θe − θi)

> [!exemple] Mur en agglos de 15 enduit des deux côtés
> Rsi 0,13 + enduit 0,015/1,15 = 0,013 + agglo 0,20 + enduit 0,013 + Rse 0,04 = **0,396 m²·K/W** → U ≈ **2,5 W/m²·K**.
> 30 m² de mur exposé, 35 °C dehors (paroi chauffée par le soleil), 25 °C dedans : Φ = 2,5 × 30 × 10 = **750 W**.

> [!exemple] Avec 4 cm de polystyrène
> R ajoutée = 0,04 / 0,038 = 1,05 → Rtotal = 1,45 → U ≈ **0,69 W/m²·K** : 3,6 fois moins de chaleur traverse le mur.

!fig:paroi|Profil de température dans une paroi multicouche

> [!retenir]
> R = e/λ s'additionne couche par couche ; U = 1/R ; une petite épaisseur d'isolant change tout.`, quiz:[
  {q:"Le meilleur isolant parmi ces matériaux est :", o:["Le béton", "L'acier", "Le polystyrène", "L'enduit ciment"], r:2, e:"λ ≈ 0,035 W/m·K."},
  {q:"Résistance de 10 cm de laine de verre (λ = 0,04) :", o:["0,4", "2,5", "4", "0,004"], r:1, e:"R = 0,10 / 0,04 = 2,5 m²·K/W."},
  {q:"Si R total vaut 0,5 m²·K/W, U vaut :", o:["0,5", "2", "5", "0,2"], r:1, e:"U = 1 / R = 2 W/m²·K."},
  {q:"Flux à travers 10 m² de paroi avec U = 2 et un écart de 5 °C :", o:["20 W", "100 W", "50 W", "10 W"], r:1, e:"Φ = 2 × 10 × 5 = 100 W."}
 ]},

{id:"therm-3", niv:2, titre:"Toitures, isolation et ponts thermiques", duree:25, contenu:`## La toiture, priorité absolue
En climat tropical, la toiture peut représenter **plus de la moitié** des apports de chaleur d'une maison de plain-pied.

| Solution de toiture | Effet |
|---|---|
| Tôle nue sans plafond | Très chaud : la tôle rayonne directement |
| Tôle + faux plafond | Amélioration nette |
| Tôle + combles ventilés + faux plafond | Bonne : l'air évacue la chaleur |
| + isolant 5 à 10 cm sur le plafond | Très bonne |
| Tôle de couleur claire ou réfléchissante | Réduit la température de la tôle de 10 à 20 °C |
| Toiture-terrasse béton + isolant + protection claire | Bonne, mais attention à la dalle qui stocke la chaleur sans isolant |

## Les ponts thermiques
Un **pont thermique** est une zone où l'isolation est interrompue : la chaleur y passe plus facilement.
!fig:pont-thermique|Jonction dalle / mur : le béton traverse l'isolant

Ponts thermiques courants : nez de dalle, poteaux et chaînages en béton dans un mur en matériau plus isolant, linteaux, encadrements de fenêtres.

Conséquences : surfaces plus chaudes (ou plus froides en local climatisé), risque de **condensation** et de moisissures, consommation de climatisation accrue.

Traitements : isolant continu par l'extérieur, rupteurs de ponts thermiques, retours d'isolant en tableau de fenêtre.

> [!astuce]
> Dans une maison climatisée, isoler d'abord le **plafond**, puis les murs **est et ouest**, puis traiter les fenêtres (protections solaires) : c'est l'ordre le plus rentable.`, quiz:[
  {q:"Dans une maison de plain-pied, la principale source de chaleur est souvent :", o:["Le sol", "La toiture", "La façade nord", "Les portes"], r:1, e:"Elle reçoit le soleil toute la journée."},
  {q:"Un pont thermique est :", o:["Un isolant", "Une zone où l'isolation est interrompue", "Une poutre", "Un escalier"], r:1, e:"La chaleur y passe plus facilement."},
  {q:"Pourquoi ventiler les combles ?", o:["Pour faire du bruit", "Pour évacuer l'air chaud sous la tôle", "Pour la pluie", "Pour l'éclairage"], r:1, e:"L'air extérieur emporte la chaleur accumulée."},
  {q:"Quel est l'élément à isoler en priorité ?", o:["Le plafond / la toiture", "Le sol", "La porte d'entrée", "Les cloisons intérieures"], r:0, e:"C'est le poste le plus rentable."}
 ]},

{id:"therm-4", niv:2, titre:"Apports solaires et protections", duree:25, contenu:`## Le rayonnement solaire
Sous les tropiques, le soleil est presque à la verticale à midi. Une surface horizontale peut recevoir jusqu'à **1 000 W/m²** en plein soleil ; une façade ouest reçoit l'après-midi un rayonnement intense et rasant.

## Le facteur solaire
Le **facteur solaire** S (ou g) d'une fenêtre est la fraction de l'énergie solaire incidente qui entre dans la pièce.
| Fenêtre | Facteur solaire approximatif |
|---|---|
| Simple vitrage clair, sans protection | 0,85 |
| Vitrage réfléchissant / teinté | 0,35 à 0,55 |
| Avec store intérieur clair | 0,45 |
| Avec protection extérieure (persienne, brise-soleil) | 0,10 à 0,20 |

> [!retenir]
> Une protection **extérieure** est 2 à 4 fois plus efficace qu'un rideau intérieur : la chaleur est arrêtée avant de traverser la vitre.

## Dimensionner un débord ou un auvent
Pour une façade nord ou sud, un débord de profondeur **d ≈ 0,4 à 0,6 × hauteur** de la fenêtre (mesurée sous le débord) protège l'essentiel de l'année. Pour l'est et l'ouest, le soleil est bas : il faut des **protections verticales** ou orientables (persiennes, claustras, lames).

> [!exemple] Apports d'une baie vitrée ouest
> Baie de 4 m², rayonnement 600 W/m², facteur solaire 0,85 : 4 × 600 × 0,85 = **2 040 W**, l'équivalent d'un radiateur électrique allumé ! Avec des persiennes extérieures (S = 0,15) : **360 W**.

## Couleur des parois
Un mur ou une tôle **clairs** absorbent 20 à 40 % du rayonnement, contre 80 à 95 % pour une couleur foncée. Peindre la toiture et les façades exposées en couleur claire est une mesure simple et efficace.`, quiz:[
  {q:"Une protection solaire est plus efficace :", o:["À l'intérieur", "À l'extérieur", "Dans le vitrage", "Sur le sol"], r:1, e:"La chaleur est arrêtée avant la vitre."},
  {q:"Le facteur solaire mesure :", o:["La transparence à la lumière", "La part d'énergie solaire qui entre", "La résistance du verre", "Le prix de la fenêtre"], r:1, e:"S = énergie transmise / énergie incidente."},
  {q:"Les façades les plus difficiles à protéger sont :", o:["Nord et sud", "Est et ouest", "Toutes pareilles", "Seulement le nord"], r:1, e:"Le soleil y est bas, il faut des protections verticales."},
  {q:"Une tôle claire par rapport à une tôle foncée :", o:["Chauffe plus", "Chauffe moins", "Ne change rien", "Rouille plus"], r:1, e:"Elle absorbe beaucoup moins de rayonnement."}
 ]},

{id:"therm-5", niv:3, titre:"Bilan thermique et climatisation", duree:25, contenu:`## Les charges thermiques d'une pièce
La puissance frigorifique à installer compense :
1. les apports à travers les **parois** (U × S × Δθ, avec un Δθ équivalent plus élevé pour les parois ensoleillées) ;
2. les apports **solaires** par les vitrages ;
3. les apports **internes** : occupants (≈ 100 à 130 W par personne), éclairage, appareils ;
4. l'**air neuf** ou les infiltrations (chaud et humide).

## Unités des climatiseurs
- 1 kW frigorifique = **3 412 BTU/h**.
- Dans le commerce : « 1 CV » ≈ 9 000 BTU/h ≈ **2,6 kW** froid ; « 1,5 CV » ≈ 12 000 BTU/h ≈ 3,5 kW ; « 2 CV » ≈ 18 000 BTU/h ≈ 5,3 kW.

## Méthode rapide (ordre de grandeur)
Pour une pièce de logement bien protégée du soleil, on compte souvent **150 à 200 W de froid par m²** (davantage sous une toiture non isolée ou avec de grandes baies ouest).

> [!exemple] Chambre de 14 m²
> 14 × 180 = 2 520 W ≈ 8 600 BTU/h → un climatiseur **« 1 CV » (9 000 BTU/h)**. Sous une tôle sans isolant : plutôt 1,5 CV.

## Efficacité énergétique
L'**EER** (ou le SEER) indique les kW de froid produits par kW électrique consommé. Un appareil **inverter** d'EER 3,5 consomme environ 2,6 / 3,5 = 0,75 kW électriques pour 2,6 kW de froid, contre 1,1 kW pour un vieil appareil d'EER 2,4.

> [!astuce]
> Avant d'acheter un climatiseur plus puissant, réduisez les charges : isolant au plafond, protections solaires, ampoules LED. C'est moins cher et les factures de la CIE baissent durablement.`, quiz:[
  {q:"1 kW frigorifique correspond à environ :", o:["1 000 BTU/h", "3 412 BTU/h", "9 000 BTU/h", "12 000 BTU/h"], r:1, e:"1 kW = 3 412 BTU/h."},
  {q:"Un climatiseur « 1 CV » produit environ :", o:["9 000 BTU/h", "3 000 BTU/h", "24 000 BTU/h", "1 000 BTU/h"], r:0, e:"≈ 2,6 kW de froid."},
  {q:"Chaleur dégagée par un occupant au repos :", o:["10 W", "100 W environ", "1 000 W", "5 kW"], r:1, e:"Environ 100 à 130 W."},
  {q:"Un EER plus élevé signifie :", o:["Plus de consommation", "Une meilleure efficacité", "Plus de bruit", "Un appareil plus petit"], r:1, e:"Plus de froid pour la même électricité."}
 ]},

{id:"therm-8", niv:3, titre:"Régime variable : inertie, déphasage et amortissement", duree:30, contenu:`## La chaleur arrive par vagues
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
> Inertie et isolation sont complémentaires : l'isolant réduit le flux de chaleur, l'inertie le décale dans le temps.`, quiz:[
  {q:"La diffusivité thermique vaut :", o:["λ / (ρ c)", "ρ c / λ", "λ × e", "e / λ"], r:0, e:"Elle mesure la vitesse de propagation de la chaleur dans le matériau."},
  {q:"Le déphasage d'un mur en béton de 20 cm est d'environ :", o:["5 heures", "5 minutes", "24 heures", "5 jours"], r:0, e:"Le pic de chaleur de l'après-midi arrive en soirée."},
  {q:"Une toiture-terrasse en béton non isolée provoque surtout :", o:["Un inconfort nocturne au dernier étage", "Un froid excessif", "Aucun effet", "Des condensations en façade"], r:0, e:"La dalle restitue la nuit la chaleur stockée le jour."},
  {q:"Pour garder l'inertie côté intérieur, on isole une terrasse :", o:["Par l'extérieur", "Par l'intérieur", "Pas du tout", "Seulement en rive"], r:0, e:"La masse reste en contact avec l'ambiance intérieure."}
 ]},

{id:"therm-9", niv:3, titre:"Performance énergétique et consommation de climatisation", duree:30, contenu:`## De la puissance à l'énergie
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
> Sur un projet, chiffrez le **surcoût** d'une mesure (isolant, appareils inverter) et l'**économie annuelle** : le temps de retour est souvent inférieur à 3 ans pour l'isolation de toiture.`, quiz:[
  {q:"L'EER d'un climatiseur est le rapport :", o:["Froid produit / électricité consommée", "Électricité / froid", "Puissance / surface", "Température / humidité"], r:0, e:"Plus il est élevé, plus l'appareil est efficace."},
  {q:"36 000 kWh de froid avec un EER de 3 consomment :", o:["12 000 kWh électriques", "108 000 kWh", "36 000 kWh", "3 000 kWh"], r:0, e:"36 000 / 3 = 12 000 kWh."},
  {q:"La certification EDGE exige au moins :", o:["20 % d'économie d'énergie, d'eau et d'énergie grise", "50 % de panneaux solaires", "Une toiture verte", "Aucune climatisation"], r:0, e:"Par rapport à un bâtiment de référence."},
  {q:"Parmi ces mesures, laquelle réduit le plus la consommation de climatisation d'une villa sous toiture ?", o:["Isoler la toiture", "Changer les poignées de porte", "Peindre les cloisons", "Agrandir les fenêtres Ouest"], r:0, e:"20 à 30 % d'économie."}
 ]}
]});
