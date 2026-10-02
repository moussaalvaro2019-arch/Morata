A.addMatiere({
 id:'metre', titre:'Métré', court:'Métré', groupe:'gest', icone:'list', couleur:'#2D6FB5', niveau:'Débutant', heures:26, ordre:3, prerequis:['math','tech'],
 resume:"Règles du métré, terrassements, fondations, béton armé, maçonnerie, enduits, revêtements, menuiseries et peinture, jusqu'au devis quantitatif et estimatif.",
 objectifs:["Appliquer les règles et conventions du métré","Calculer les quantités de chaque lot avec la bonne unité","Établir le sous-détail des matériaux (ciment, sable, gravier, acier, agglos)","Construire un DQE et son récapitulatif"],
 applications:["Avant-métré d'une maison à partir des plans","Commande des matériaux","Vérification d'un devis d'entreprise","Utilisation de l'outil Métré de la plateforme"],
 chapitres:[
{id:'metre-1', titre:'Principes et règles du métré', duree:25, contenu:`## Définitions
- **Métré** : mesure des quantités d'ouvrages à partir des plans (avant-métré) ou sur place (métré contradictoire / attachement).
- **Avant-métré** : calcul des quantités avant les travaux, pour établir le devis.
- **DQE** : devis quantitatif et estimatif = quantités × prix unitaires.

## Les unités de mesure
| Ouvrage | Unité |
|---|---|
| Terrassements, bétons | m³ |
| Maçonnerie, enduits, carrelage, peinture, coffrage | m² |
| Plinthes, linteaux, gouttières, canalisations, chaînages (parfois) | ml (mètre linéaire) |
| Aciers | kg |
| Portes, appareils sanitaires, prises, points lumineux | u (unité) |
| Ensembles (fosse septique, tableau électrique) | ens ou ft (forfait) |

## Les règles de l'art du métré
1. **Ordre logique** : suivre l'ordre d'exécution (terrassement → fondations → élévation → second œuvre) et, dans chaque lot, un ordre de lecture constant (de gauche à droite, de bas en haut).
2. **Décomposer** en éléments simples : nb × longueur × largeur × hauteur.
3. **Écrire les calculs** (pas seulement les résultats) pour pouvoir les vérifier.
4. **Ne pas compter deux fois** les intersections : par exemple, le béton d'un poteau n'est pas recompté dans la poutre (on compte les poutres entre nus de poteaux).
5. **Déduire les vides** selon la règle fixée par le marché : souvent on déduit les ouvertures de plus de 0,5 m² (à préciser dans le CCTP).
6. Arrondir les résultats à 2 décimales.

## Le tableau de métré
| N° | Désignation | Nb | L | l | h | Quantité | U |
|---|---|---|---|---|---|---|---|
| 1 | Béton semelles S1 | 12 | 0,80 | 0,80 | 0,25 | 1,92 | m³ |
| 2 | Béton longrines | 1 | 62,40 | 0,20 | 0,30 | 3,74 | m³ |

> [!astuce]
> L'outil **Métré** de la plateforme reprend exactement ce tableau : Nb × L × l × h, avec la bibliothèque d'ouvrages et le calcul automatique du devis.

> [!retenir]
> Une unité adaptée à chaque ouvrage, des calculs écrits, pas de double compte, des vides déduits selon la règle du marché.`,
 quiz:[
  {q:"Unité de mesure d'un enduit :", o:["m³","m²","ml","kg"], r:1, e:"On mesure la surface enduite."},
  {q:"Unité des aciers dans un devis :", o:["m","kg","m³","u"], r:1, e:"On compte le poids d'acier."},
  {q:"Les poutres se mesurent en général :", o:["Entre nus des poteaux","Axe à axe en recomptant les poteaux","Sans mesurer","En m²"], r:0, e:"Pour ne pas compter deux fois le béton aux intersections."},
  {q:"L'avant-métré est établi :", o:["Après les travaux","À partir des plans, avant les travaux","Par le notaire","Uniquement pour la peinture"], r:1, e:"Il sert à préparer le devis."}
 ]},
{id:'metre-2', titre:'Terrassements et fondations', duree:30, contenu:`## Terrassements
- **Décapage** de la terre végétale : surface de l'emprise + 1 à 2 m autour (m²).
- **Fouilles en puits** (semelles) : nb × (A + 2 × 0,10 à 0,15) × (B + …) × profondeur (m³).
- **Fouilles en rigole** (longrines, semelles filantes) : longueur × largeur × profondeur (m³). Longueur prise à l'axe, en déduisant les fouilles en puits déjà comptées.
- **Remblais** : volume des fouilles − volume des ouvrages enterrés ; remblai sous dallage : surface × épaisseur.
- **Évacuation** : volume en place × coefficient de foisonnement.
| Sol | Foisonnement |
|---|---|
| Sable | 1,10 à 1,20 |
| Terre ordinaire | 1,20 à 1,30 |
| Argile | 1,30 à 1,40 |
| Roche | 1,50 à 1,70 |

## Fondations
> [!exemple] Maison de 12 semelles 0,80 × 0,80 × 0,25 m et 62 m de longrines 20 × 30
> **Fouilles en puits** : 12 × 1,10 × 1,10 × 0,90 = **13,07 m³**.
> **Béton de propreté** : 12 × 0,90 × 0,90 × 0,05 + 62 × 0,30 × 0,05 = 0,49 + 0,93 = **1,42 m³**.
> **Béton des semelles** : 12 × 0,80 × 0,80 × 0,25 = **1,92 m³**.
> **Amorces de poteaux** : 12 × 0,20 × 0,20 × 1,00 = **0,48 m³**.
> **Longrines** : 62 × 0,20 × 0,30 = **3,72 m³**.
> **Soubassement en agglos pleins** (h = 0,60 m) : 62 × 0,60 = **37,2 m²**, soit 37,2 × 12,5 = **465 agglos**.
> **Dallage** : surface intérieure (exemple 68 m²) × 0,08 = **5,44 m³**, hérisson 68 m².

## Sous-détail des matériaux
Pour 1 m³ de béton armé dosé à 350 kg/m³ : **7 sacs**, **0,40 m³ de sable**, **0,80 m³ de gravier**.
> [!exemple]
> Semelles + amorces + longrines = 1,92 + 0,48 + 3,72 = 6,12 m³ → ciment : 6,12 × 7 = **42,8 → 43 sacs** ; sable 2,45 m³ ; gravier 4,90 m³.
> Béton de propreté (150 kg/m³, 3 sacs/m³) : 1,42 × 3 = 4,3 → **5 sacs**.

> [!retenir]
> Toujours séparer les fouilles en puits et en rigole, le béton de propreté et le béton armé, et calculer le sous-détail des matériaux.`,
 quiz:[
  {q:"Le volume à évacuer de 30 m³ de fouilles en argile (foisonnement 1,3) :", o:["23 m³","30 m³","39 m³","13 m³"], r:2, e:"30 × 1,3 = 39 m³."},
  {q:"Volume de 8 semelles 1,00 × 1,00 × 0,30 :", o:["0,24 m³","2,4 m³","24 m³","8 m³"], r:1, e:"8 × 0,30 = 2,4 m³."},
  {q:"Pour 5 m³ de béton dosé à 350 kg/m³, il faut :", o:["5 sacs","35 sacs","70 sacs","17 sacs"], r:1, e:"5 × 7 = 35 sacs."},
  {q:"Nombre d'agglos pour 20 m² de soubassement :", o:["125","250","200","20"], r:1, e:"20 × 12,5 = 250."}
 ]},
{id:'metre-3', titre:'Béton armé : bétons, coffrages et aciers', duree:35, contenu:`## Les bétons d'élévation
- **Poteaux** : nb × a × b × hauteur (de dessus de dalle à dessous de poutre, ou hauteur d'étage si on exclut les poutres).
- **Poutres et chaînages** : longueur entre nus de poteaux × largeur × retombée (hauteur sous la dalle si la dalle est comptée à part).
- **Dalles** : surface × épaisseur (en déduisant les trémies d'escalier).
- **Linteaux** : (largeur de baie + 2 × 0,20) × section.

## Les coffrages (m²)
Surface de béton en contact avec le coffrage :
- poteau : périmètre × hauteur (4 × 0,20 × 2,80 = 2,24 m² pour un poteau 20 × 20) ;
- poutre : (2 × retombée + largeur) × longueur ;
- dalle : surface en sous-face + rives.

## Les aciers
**Méthode précise : la nomenclature** (bordereau des aciers), à partir des plans de ferraillage :
| Repère | Ø | Nombre | Longueur unitaire | Longueur totale | Poids (kg/m) | Poids |
|---|---|---|---|---|---|---|
| Poteaux, filantes | HA12 | 4 × 12 poteaux | 3,60 m | 172,8 m | 0,888 | 153,4 kg |
| Cadres poteaux | HA6 | 20 × 12 | 0,74 m | 177,6 m | 0,222 | 39,4 kg |

**Méthode rapide : les ratios** (kg d'acier par m³ de béton) :
| Élément | Ratio courant |
|---|---|
| Semelles | 30 à 50 kg/m³ |
| Longrines, chaînages | 70 à 100 kg/m³ |
| Poteaux | 100 à 150 kg/m³ |
| Poutres | 90 à 130 kg/m³ |
| Dalles pleines | 70 à 90 kg/m³ |

> [!exemple] Poteaux d'une maison
> 25 poteaux 20 × 20 × 3,00 m : béton 25 × 0,04 × 3 = **3,00 m³** ; coffrage 25 × 0,80 × 3 = **60 m²** ; acier au ratio 110 kg/m³ → **330 kg**.
> Vérification par nomenclature : 25 × 4 HA10 × 3,60 m × 0,617 = 222 kg + cadres HA6 (20 par poteau × 0,70 m × 0,222) = 78 kg → **300 kg** : cohérent.

> [!attention]
> Les longueurs de **recouvrement** et les **chutes** de barres (barres de 12 m) augmentent les quantités de 5 à 10 % : à prévoir dans la commande.

> [!retenir]
> Béton en m³, coffrage en m², acier en kg (nomenclature précise ou ratios pour estimer).`,
 quiz:[
  {q:"Coffrage d'un poteau 20 × 20 de 3 m de haut :", o:["0,12 m²","2,4 m²","0,8 m²","1,2 m²"], r:1, e:"Périmètre 0,80 × 3 = 2,4 m²."},
  {q:"Ratio d'acier courant pour des poteaux :", o:["10 kg/m³","100 à 150 kg/m³","500 kg/m³","1 000 kg/m³"], r:1, e:"Ordre de grandeur courant."},
  {q:"Poids de 100 m de HA10 :", o:["61,7 kg","88,8 kg","617 kg","6,17 kg"], r:0, e:"100 × 0,617 = 61,7 kg."},
  {q:"Pourquoi majorer la commande d'acier de 5 à 10 % ?", o:["Pour la TVA","Pour les recouvrements et les chutes","Pour la rouille","Ce n'est pas utile"], r:1, e:"Barres de 12 m, recouvrements, coupes."}
 ]},
{id:'metre-4', titre:'Maçonnerie et enduits', duree:30, contenu:`## Les murs
$$ Surface nette = Longueur × Hauteur − Ouvertures
- **Longueur** : on mesure les murs en évitant de compter deux fois les angles (longueur extérieure d'un côté, intérieure de l'autre, ou à l'axe pour tous).
- **Hauteur** : du dessus du soubassement (ou de la longrine) au dessous du chaînage.
- On **déduit** les poteaux qui interrompent le mur et les ouvertures (portes, fenêtres) selon la règle du marché.
- Distinguer **agglos de 15** (murs extérieurs) et **agglos de 10** (cloisons).

> [!exemple] Pièce de 4,00 × 3,50 m, murs de 2,80 m
> Périmètre à l'axe : 2 × (4,00 + 3,50) = 15,00 m → 15,00 × 2,80 = 42,00 m².
> À déduire : 4 poteaux 20 × 20 (4 × 0,20 × 2,80 = 2,24 m²), une porte 0,90 × 2,20 (1,98 m²), une fenêtre 1,20 × 1,20 (1,44 m²).
> Surface nette : 42,00 − 2,24 − 1,98 − 1,44 = **36,34 m²** → 36,34 × 12,5 = **455 agglos** (+ 3 % de casse ≈ 470).

## Les mortiers de pose
Environ **0,015 m³ de mortier par m²** pour des agglos de 15 (0,010 pour des agglos de 10), dosé à 300 kg/m³ :
- ciment : 0,015 × 300 = 4,5 kg/m² → environ **1 sac pour 11 m²** ;
- sable : 0,015 m³/m².

## Les enduits
- Surface à enduire = surfaces de murs **des deux côtés** (intérieur et extérieur), ouvertures déduites, **tableaux** ajoutés (retours autour des ouvertures) si le marché le prévoit.
- Épaisseur courante 1,5 à 2 cm → **0,018 à 0,020 m³ de mortier par m²**, dosé à 350 kg/m³ → environ **6,5 kg de ciment par m²** (1 sac pour 7 à 8 m²).

> [!exemple] Suite
> Enduits intérieur + extérieur : 2 × 36,34 = 72,68 m² → mortier 72,68 × 0,018 = 1,31 m³ → ciment 1,31 × 350 / 50 = **9,2 → 10 sacs** ; sable 1,4 m³.

> [!retenir]
> Murs : L × H − poteaux − ouvertures ; 12,5 agglos/m² ; enduit = 2 faces.`,
 quiz:[
  {q:"Surface nette d'un mur de 10 m × 3 m avec 4 m² d'ouvertures :", o:["30 m²","26 m²","34 m²","40 m²"], r:1, e:"30 − 4 = 26 m²."},
  {q:"Quantité de mortier de pose pour 20 m² d'agglos de 15 :", o:["0,03 m³","0,3 m³","3 m³","30 m³"], r:1, e:"20 × 0,015 = 0,30 m³."},
  {q:"Pour enduire un mur intérieur des deux côtés de 15 m², la surface d'enduit est :", o:["15 m²","30 m²","7,5 m²","45 m²"], r:1, e:"Deux faces."},
  {q:"Pourquoi ajouter 3 % aux agglos ?", o:["Pour la TVA","Pour la casse","Pour les poteaux","Pour le transport"], r:1, e:"Quelques agglos se cassent à la manutention et à la coupe."}
 ]},
{id:'metre-5', titre:'Revêtements, menuiseries et peinture', duree:25, contenu:`## Revêtements de sol
- **Carrelage** : surface intérieure de chaque pièce (entre murs finis) + **5 à 10 % de chutes** (plus pour la pose en diagonale).
- **Plinthes** : périmètre des pièces − largeurs des portes (ml).
- **Chape** : surface × épaisseur si elle est prévue séparément.

## Faïence
Périmètre de la pièce d'eau × hauteur de faïence (1,80 à 2,20 m) − ouvertures, + crédences de cuisine (longueur du plan de travail × 0,60 m).

> [!exemple] Salle d'eau de 2,40 × 2,20 m
> Sol : (2,40 − 0,15) × (2,20 − 0,15) = 4,61 m² + 8 % → **5,0 m²** de carreaux.
> Faïence (h = 2,00 m) : 2 × (2,25 + 2,05) × 2,00 = 17,2 m² − porte (0,70 × 2,00 = 1,40) − fenêtre (0,60 × 0,60 = 0,36) = 15,44 m² + 8 % → **16,7 m²**.

## Menuiseries
Comptées à l'**unité** par type et dimensions (portes 0,70 × 2,10 ; 0,80 × 2,10 ; porte d'entrée 0,90 × 2,20…) ou au **m²** pour les fenêtres et baies vitrées. Ajouter quincaillerie, grilles, habillages si non compris.

## Peinture
- Murs intérieurs : surfaces des murs enduits (ouvertures déduites).
- Plafonds : surfaces des pièces.
- Façades : surfaces extérieures + soubassement.
- Quantité de peinture : surface × nombre de couches / rendement (8 à 12 m²/L par couche selon le produit et le support).

> [!exemple]
> 250 m² de murs et plafonds, 2 couches, rendement 10 m²/L : 250 × 2 / 10 = **50 L** de finition + impression (250 / 12 ≈ 21 L).

## Électricité et plomberie
Comptées à l'**unité** (points lumineux, prises, interrupteurs, appareils sanitaires) ou à l'**ensemble** (tableau, fosse septique), avec les longueurs de canalisations principales en ml si le marché le demande.

> [!retenir]
> Sols et faïences en m² avec chutes, plinthes en ml, menuiseries à l'unité, peinture en m² puis en litres selon le rendement.`,
 quiz:[
  {q:"Pourcentage de chutes courant pour le carrelage :", o:["0 %","5 à 10 %","30 %","50 %"], r:1, e:"Coupes en rive et casse."},
  {q:"Les plinthes se mesurent :", o:["En m²","En ml, périmètre moins les portes","À l'unité","En m³"], r:1, e:"Elles longent les murs."},
  {q:"Litres pour 100 m², 2 couches, rendement 10 m²/L :", o:["10 L","20 L","5 L","200 L"], r:1, e:"100 × 2 / 10 = 20 L."},
  {q:"Les portes intérieures se comptent :", o:["En m³","À l'unité par type","En kg","En ml"], r:1, e:"Par dimensions et types."}
 ]},
{id:'metre-6', titre:'Du métré au devis quantitatif et estimatif', duree:30, contenu:`## Construire le DQE
1. Reprendre les quantités du métré, **lot par lot**, avec la même désignation que le bordereau des prix.
2. Multiplier chaque quantité par son **prix unitaire** (fourniture et pose).
3. Faire le **sous-total de chaque lot**.
4. Établir le **récapitulatif** : total HT, TVA (18 %), total TTC.

| N° | Désignation | U | Quantité | P.U. (F) | Montant (F) |
|---|---|---|---|---|---|
| 2.1 | Béton de propreté dosé à 150 kg/m³ | m³ | 1,42 | 75 000 | 106 500 |
| 2.2 | Béton armé dosé à 350 kg/m³ pour semelles | m³ | 1,92 | 185 000 | 355 200 |
| 2.3 | Aciers HA façonnés et posés | kg | 420 | 1 000 | 420 000 |
| | **Sous-total lot 2 : Fondations** | | | | **881 700** |

## Le récapitulatif
| Lot | Montant HT |
|---|---|
| 1. Terrassements | … |
| 2. Fondations | … |
| … | … |
| **Total HT** | |
| TVA 18 % | |
| **Total TTC** | |

## Le sous-détail des matériaux (pour les commandes)
À partir des quantités, on calcule les besoins en **ciment, sable, gravier, acier, agglos, carreaux**, etc., en appliquant les dosages :
| Ouvrage | Ciment | Sable | Gravier |
|---|---|---|---|
| 1 m³ béton armé (350) | 7 sacs | 0,40 m³ | 0,80 m³ |
| 1 m³ béton de propreté (150) | 3 sacs | 0,40 m³ | 0,80 m³ |
| 1 m² maçonnerie agglos 15 | 0,09 sac | 0,015 m³ | — |
| 1 m² enduit 1,5 cm (350) | 0,13 sac | 0,018 m³ | — |

## Les contrôles de cohérence
- Ratio global au m² comparé aux références du standing.
- Répartition par lots (gros œuvre ≈ 40 à 50 % d'une maison courante).
- Ratios béton / m² de plancher et acier / m³ de béton.

> [!astuce] Avec la plateforme
> Ouvrez un **projet type** (Construction A→Z) : son avant-métré et son devis sont calculés automatiquement à partir des plans. Cliquez sur « Ouvrir le détail dans l'outil Métré » pour modifier les quantités et les prix, puis exporter en CSV ou imprimer.

> [!retenir]
> Métré → DQE (quantités × prix) → récapitulatif HT, TVA, TTC → sous-détail des matériaux → contrôle par ratios.`,
 quiz:[
  {q:"Le DQE s'obtient en multipliant :", o:["Les quantités par les prix unitaires","Les prix par la TVA","Les surfaces par 12,5","Le budget par K"], r:0, e:"Devis quantitatif et estimatif."},
  {q:"Total TTC d'un devis de 10 000 000 F HT (TVA 18 %) :", o:["10 180 000 F","11 800 000 F","8 200 000 F","18 000 000 F"], r:1, e:"10 000 000 × 1,18."},
  {q:"Montant de 1,92 m³ à 185 000 F/m³ :", o:["355 200 F","185 000 F","96 350 F","3 552 000 F"], r:0, e:"1,92 × 185 000 = 355 200 F."},
  {q:"Le sous-détail des matériaux sert surtout à :", o:["Fixer la TVA","Préparer les commandes","Calculer les honoraires","Faire les plans"], r:1, e:"On en déduit sacs de ciment, sable, gravier, acier…"}
 ]}
]});
