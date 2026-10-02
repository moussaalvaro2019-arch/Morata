/* =====================================================================
   Métré — cours complet (3 niveaux)
   Débutant : principes et règles, lecture des plans, géométrie du métreur,
              terrassements, fondations, maçonneries, enduits et chapes
   Intermédiaire : bétons et coffrages, aciers, planchers et escaliers,
              charpente et couverture, revêtements, menuiseries et peinture,
              sous-détail des matériaux, BPU / DQE
   Avancé : sous-détail de prix, lots techniques, VRD, cubatures,
              attachements et situations, étude de cas complète
   ===================================================================== */
A.addMatiere({
 id:"metre",
 titre:"Métré",
 court:"Métré",
 groupe:"gest",
 icone:"list",
 couleur:"#2D6FB5",
 niveau:"Débutant",
 heures:70,
 ordre:3,
 prerequis:["math", "tech"],
 resume:"Mesurer les ouvrages sur plans et sur chantier, de la fouille à la peinture : règles du métré, lecture des plans, géométrie utile, terrassements, fondations, maçonneries, béton armé et aciers, planchers, toitures, revêtements, lots techniques et VRD, jusqu'au sous-détail de prix, au devis quantitatif et estimatif et aux situations de travaux, avec applications chiffrées et exercices corrigés.",
 objectifs:[
  "Appliquer les règles et conventions du métré et lire les plans",
  "Calculer les quantités de chaque lot avec la bonne unité",
  "Établir le sous-détail des matériaux pour les commandes",
  "Établir le sous-détail d'un prix unitaire (déboursé sec, coefficient K)",
  "Construire un BPU, un DQE et son récapitulatif",
  "Établir des attachements, des situations et un décompte"
 ],
 applications:[
  "Avant-métré complet d'une maison à partir des plans",
  "Commande des matériaux (ciment, sable, gravier, acier, agglos)",
  "Réponse à un appel d'offres et vérification d'un devis",
  "Situations mensuelles de travaux",
  "Utilisation de l'outil Métré de la plateforme"
 ],
 chapitres:[
{id:"metre-1", niv:1, titre:"Le métré : rôle, vocabulaire et règles de base", duree:50, contenu:`## À quoi sert le métré ?
Avant de construire, il faut savoir **combien** de béton, d'agglos, de carreaux, d'heures de travail… seront nécessaires, et **combien** cela coûtera. Le **métré** est l'art de mesurer les ouvrages et d'en calculer les quantités. C'est la base :
- du **devis** de l'entreprise et de l'estimation du maître d'ouvrage ;
- des **commandes** de matériaux ;
- du **paiement** des travaux (situations) ;
- du **contrôle des coûts** du chantier.
Le professionnel du métré est le **métreur** ; l'**économiste de la construction** va plus loin (estimation, analyse des prix, suivi financier).

## Le vocabulaire
| Terme | Signification |
|---|---|
| **Avant-métré** | Calcul des quantités à partir des plans, **avant** les travaux |
| **Métré contradictoire** | Mesure faite sur place, en présence de l'entreprise et du maître d'œuvre |
| **Attachement** | Constat écrit et signé des quantités exécutées (surtout ouvrages cachés) |
| **CCTP** | Cahier des clauses techniques particulières : décrit les ouvrages et les règles de métré du marché |
| **BPU** | Bordereau des prix unitaires : le prix de chaque ouvrage élémentaire |
| **DQE** | Devis quantitatif et estimatif : quantités × prix unitaires |
| **DPGF** | Décomposition du prix global et forfaitaire (marché au forfait) |
| **Lot** | Partie des travaux confiée à un corps d'état (gros œuvre, menuiserie, électricité…) |

## Les unités de mesure
Chaque ouvrage est mesuré dans l'unité qui représente le mieux le travail réalisé :
| Ouvrage | Unité |
|---|---|
| Terrassements, bétons, remblais | **m³** |
| Maçonneries, enduits, carrelage, peinture, coffrages, couverture | **m²** |
| Plinthes, linteaux, gouttières, bordures, canalisations, câbles | **ml** (mètre linéaire) |
| Aciers, charpente métallique | **kg** |
| Portes, appareils sanitaires, prises, regards | **u** (unité) |
| Ensembles (tableau électrique, fosse septique, installation de chantier) | **ens** ou **ft** (forfait) |

## Les règles d'or du métré
1. **Suivre un ordre logique** : l'ordre d'exécution (terrassements → fondations → élévation → toiture → second œuvre) et, dans chaque lot, un ordre de lecture constant (de gauche à droite, de haut en bas, pièce par pièce, dans le sens des aiguilles d'une montre).
2. **Décomposer** chaque ouvrage en éléments géométriques simples : nombre × longueur × largeur × hauteur.
3. **Écrire tous les calculs**, pas seulement les résultats, pour pouvoir être vérifié et se relire.
4. **Ne jamais compter deux fois** : aux intersections, on attribue le volume à un seul élément (les poutres se mesurent **entre nus** des poteaux, ou les poteaux s'arrêtent sous les poutres).
5. **Déduire les vides** selon la règle du marché, souvent : on déduit les vides de plus de 0,5 m² (petites réservations non déduites).
6. **Mesurer avec les cotes** des plans, jamais au double décimètre si une cote existe.
7. **Arrondir** les résultats à 2 décimales (3 pour les petits volumes), et ne pas arrondir les résultats intermédiaires.
8. **Grouper** les ouvrages identiques : « 12 semelles S1 » plutôt que 12 lignes.

## Le tableau de métré
| N° | Désignation | Nb | L (m) | l (m) | h (m) | Quantité | U |
|---|---|---|---|---|---|---|---|
| 1.1 | Décapage de la terre végétale | 1 | 10,00 | 7,00 | — | 70,00 | m² |
| 2.1 | Fouilles en rigole | 1 | 25,40 | 0,60 | 0,80 | 12,19 | m³ |
| 2.2 | Béton de propreté | 1 | 25,40 | 0,60 | 0,05 | 0,76 | m³ |
La colonne **N°** reprend la numérotation du bordereau (lot.article) pour faciliter le passage au devis.

> [!exemple] Petit magasin de 8,00 × 5,00 m hors tout, murs de 15 cm
> - Dimensions à l'axe des murs : 7,85 × 4,85 m → **périmètre à l'axe** = 2 × (7,85 + 4,85) = **25,40 m** (c'est la longueur à utiliser pour les ouvrages filants : fouilles, semelles, chaînages, murs).
> - Décapage (1 m autour) : (8 + 2) × (5 + 2) = **70,00 m²**.
> - Fouilles en rigole 0,60 × 0,80 : 25,40 × 0,60 × 0,80 = **12,19 m³**.
> - Semelle filante 0,50 × 0,20 : 25,40 × 0,50 × 0,20 = **2,54 m³**.
> - Murs (h = 3,00 m) : 25,40 × 3,00 = 76,20 m² − porte 1,20 × 2,20 (2,64) − 2 fenêtres 1,20 × 1,00 (2,40) = **71,16 m²**.
> - Dallage intérieur : (8,00 − 0,30) × (5,00 − 0,30) = 36,19 m² × 0,08 = **2,90 m³**.

> [!astuce] L'outil Métré de la plateforme
> Il reprend exactement ce tableau (Nb × L × l × h), propose une bibliothèque d'ouvrages avec prix indicatifs, calcule le devis et le sous-détail des matériaux.

> [!retenir]
> - Une unité adaptée à chaque ouvrage (m³, m², ml, kg, u, ens).
> - Ordre logique, calculs écrits, pas de double compte, vides déduits selon le marché.
> - Les ouvrages filants se mesurent sur le **périmètre à l'axe**.`,
 exercices:[
  {t:"Choisir les unités", d:1, e:`Donner l'unité de mesure de : a) un remblai ; b) un enduit de façade ; c) une gouttière ; d) les aciers d'une dalle ; e) un WC ; f) un carrelage ; g) une fosse septique ; h) un coffrage de poteau ; i) des bordures de trottoir ; j) une installation de chantier.`, c:`a) **m³** ; b) **m²** ; c) **ml** ; d) **kg** ; e) **u** ; f) **m²** ; g) **ens** ; h) **m²** ; i) **ml** ; j) **ft** (forfait).`},
  {t:"Remplir un tableau de métré", d:1, e:`Calculer les quantités : 10 semelles 1,00 × 1,00 × 0,30 m ; 45,60 m de longrines 0,20 × 0,40 ; un dallage de 60 m² épais de 8 cm ; 6 portes 0,80 × 2,10 ; 85 m² de murs à enduire sur les deux faces.`, c:`| Désignation | Calcul | Quantité |
|---|---|---|
| Béton semelles | 10 × 1,00 × 1,00 × 0,30 | **3,00 m³** |
| Béton longrines | 45,60 × 0,20 × 0,40 | **3,65 m³** |
| Béton dallage | 60 × 0,08 | **4,80 m³** |
| Portes | 6 | **6 u** |
| Enduits | 2 × 85 | **170,00 m²** |`},
  {t:"Le piège du double compte", d:2, e:`Une file de poutres 20 × 40 cm repose sur 4 poteaux 20 × 20 cm alignés ; la longueur hors tout de la file est 12,20 m. Les poteaux sont déjà comptés sur toute la hauteur (jusqu'au-dessus de la poutre). Quelle longueur de poutre faut-il compter ? Quel volume de béton serait compté deux fois si l'on prenait la longueur hors tout ?`, c:`Longueur entre nus : 12,20 − 4 × 0,20 = **11,40 m** → béton poutre = 11,40 × 0,20 × 0,40 = **0,912 m³**.
Avec la longueur hors tout : 12,20 × 0,08 = 0,976 m³ → **0,064 m³** comptés deux fois (4 nœuds de 0,20 × 0,20 × 0,40). Sur un immeuble avec des centaines de nœuds, l'erreur devient significative.`},
  {t:"Déduction des vides", d:1, e:`Un mur de 6,00 × 2,80 m comporte une fenêtre de 1,20 × 1,00 m, une porte de 0,90 × 2,10 m et une ventilation de 0,30 × 0,30 m. Le CCTP prévoit de déduire les vides de plus de 0,5 m². Calculer la surface de maçonnerie.`, c:`Surface brute : 6,00 × 2,80 = 16,80 m².
Fenêtre : 1,20 m² (> 0,5 → déduite) ; porte : 1,89 m² (déduite) ; ventilation : 0,09 m² (< 0,5 → **non déduite**).
Surface nette : 16,80 − 1,20 − 1,89 = **13,71 m²**.`},
  {t:"Périmètre à l'axe", d:2, e:`Une maison rectangulaire mesure 11,30 × 8,30 m hors tout, murs extérieurs de 15 cm d'épaisseur. a) Calculer le périmètre extérieur, intérieur et à l'axe. b) Lequel utiliser pour la longueur de la semelle filante périphérique ? Pourquoi ?`, c:`a) Extérieur : 2 × (11,30 + 8,30) = **39,20 m** ; intérieur : 2 × (11,00 + 8,00) = **38,00 m** ; à l'axe : 2 × (11,15 + 8,15) = **38,60 m**.
b) Le **périmètre à l'axe** : il compte exactement une fois chaque angle (l'excès de l'extérieur et le manque de l'intérieur aux angles se compensent).`}
 ],
 quiz:[
  {q:"Le DQE s'obtient en multipliant :", o:["Les quantités par les prix unitaires","Les prix par la TVA","Les plans par l'échelle","Les lots par 12,5"], r:0, e:"Devis quantitatif et estimatif."},
  {q:"Les aciers se comptent en :", o:["m³","kg","m²","u"], r:1, e:"Poids d'acier."},
  {q:"Les ouvrages filants (semelles, chaînages) se mesurent sur :", o:["Le périmètre extérieur","Le périmètre à l'axe","La diagonale","La surface habitable"], r:1, e:"Chaque angle compté une fois."},
  {q:"Le document qui décrit les ouvrages et les règles de métré du marché est :", o:["Le CCTP","Le permis de construire","Le plan de masse","La facture"], r:0, e:"Cahier des clauses techniques particulières."},
  {q:"Les poutres se mesurent en général :", o:["Hors tout en recomptant les poteaux","Entre nus des poteaux","En m²","Sans les mesurer"], r:1, e:"Pas de double compte."}
 ]},
{id:"metre-10", niv:1, titre:"Lire les plans pour métrer : échelles, cotes et documents", duree:45, contenu:`## Les documents du métreur
Le métré se fait à partir du **dossier de plans** et des pièces écrites :
| Document | Échelle courante | Ce qu'on y lit |
|---|---|---|
| Plan de situation | 1/2 000 à 1/5 000 | Emplacement du terrain |
| Plan de masse | 1/200 à 1/500 | Implantation, accès, réseaux extérieurs, VRD |
| Plan des fondations | 1/50 à 1/100 | Semelles, longrines, repères S1, S2… |
| Plans des niveaux (vue en plan) | 1/50 à 1/100 | Murs, cloisons, ouvertures, surfaces des pièces |
| Coupes | 1/50 | Hauteurs, épaisseurs de dalles, niveaux |
| Façades | 1/100 | Enduits, menuiseries, toiture vue |
| Plans de coffrage et de ferraillage | 1/20 à 1/50 | Sections du béton, armatures, nomenclatures |
| Plans des lots techniques | 1/50 à 1/100 | Prises, points lumineux, sanitaires, réseaux |
| Détails | 1/5 à 1/20 | Linteaux, acrotères, escaliers… |

## L'échelle
$$ Longueur réelle = longueur sur le plan × dénominateur de l'échelle
Sur un plan au 1/100, 1 cm représente 1 m ; au 1/50, 1 cm représente 0,50 m. On mesure à l'échelle **seulement** quand aucune cote n'existe (les tirages papier peuvent être réduits ou déformés).

## Les cotes
- **Cotes extérieures** : en général trois lignes autour du plan : détail des ouvertures et trumeaux, distances entre axes ou entre murs, cote totale ;
- **Cotes intérieures** : dimensions des pièces entre murs bruts (ou finis : à vérifier dans le cartouche) ;
- **Cotes de niveau** : altitudes des planchers par rapport au **niveau ±0,00** (souvent le sol fini du rez-de-chaussée), notées +3,10, −0,40… ;
- **Cotes des ouvertures** : largeur × hauteur (ex. 120 × 120), parfois avec la hauteur d'allège.
Contrôle indispensable : la **somme des cotes partielles** doit égaler la cote totale.

## Les conventions de représentation
- Murs **coupés** : traits forts, hachurés ou noircis ; murs vus : traits fins ;
- Agglos de 15 et cloisons de 10 distingués par l'épaisseur et la légende ;
- Portes : arc de cercle indiquant le sens d'ouverture ; fenêtres : traits fins dans l'épaisseur du mur ;
- Poteaux : petits carrés noircis ; poutres et linteaux : en pointillés (au-dessus du plan de coupe) ;
- Repères de coupe (A-A, B-B) et flèches indiquant le sens de vue.

## La nomenclature des menuiseries
Les plans comportent souvent un tableau récapitulatif des portes (P) et fenêtres (F) :
| Repère | Dimensions (l × h) | Nombre | Matériau |
|---|---|---|---|
| P1 | 0,90 × 2,20 | 1 | Métallique (entrée) |
| P2 | 0,80 × 2,10 | 5 | Bois isoplane |
| F1 | 1,20 × 1,20 | 6 | Aluminium + grille |
| F2 | 0,60 × 0,60 | 3 | Aluminium (salles d'eau) |
Ce tableau sert à la fois pour le lot menuiseries et pour **déduire les ouvertures** des maçonneries, enduits et peintures.

## Les hauteurs à lire sur les coupes
> [!exemple] Coupe d'une maison R+1
> Sol fini RDC ±0,00 ; dessus de la dalle d'étage brute +3,00 ; dalle de 20 cm (16 + 4).
> - Sous-face de la dalle : 3,00 − 0,20 = **+2,80** → hauteur sous plafond brute 2,80 m (moins 5 cm de revêtement de sol : **2,75 m** sous plafond fini) ;
> - Hauteur des murs de RDC à métrer, du dessus du dallage brut (−0,05) jusqu'au-dessous du chaînage de 20 cm placé sous la dalle (+2,60) : 2,80 − 0,20 + 0,05 = **2,65 m**.

> [!attention] Les sources d'erreurs
> - Confondre cotes brutes et cotes finies ;
> - Oublier une pièce ou un niveau (cocher sur le plan chaque élément métré) ;
> - Utiliser un plan périmé : vérifier l'**indice** (A, B, C…) et la date dans le cartouche.

> [!retenir]
> - Longueur réelle = mesure × dénominateur de l'échelle ; préférer toujours les cotes.
> - Vérifier : somme des cotes partielles = cote totale.
> - Niveaux par rapport au ±0,00 ; hauteurs de murs lues sur les coupes.
> - La nomenclature des menuiseries sert à déduire les ouvertures.`,
 exercices:[
  {t:"Échelles", d:1, e:`a) Sur un plan au 1/100, un mur mesure 7,4 cm. Longueur réelle ? b) Même mesure sur un plan au 1/50 ? c) Quelle longueur dessiner au 1/50 pour un mur de 4,25 m ? d) À quelle échelle un bâtiment de 24 m tient-il sur 12 cm ?`, c:`a) 7,4 × 100 = 740 cm = **7,40 m**.
b) 7,4 × 50 = 370 cm = **3,70 m**.
c) 425 / 50 = **8,5 cm**.
d) 2 400 / 12 = 200 → échelle **1/200**.`},
  {t:"Contrôler une chaîne de cotes", d:1, e:`Les cotes partielles d'une façade sont : 0,15 | 3,50 | 0,10 | 2,80 | 0,15 et la cote totale indiquée est 6,80 m. Y a-t-il une erreur ?`, c:`Somme : 0,15 + 3,50 + 0,10 + 2,80 + 0,15 = **6,70 m** ≠ 6,80 m → **incohérence de 10 cm**. Il faut la signaler à l'architecte avant de métrer (ou vérifier une cote mal lue).`},
  {t:"Ouvertures d'après la nomenclature", d:2, e:`Avec la nomenclature du cours (P1, P2, F1, F2), calculer : a) le nombre total de portes ; b) la surface totale des fenêtres ; c) la surface totale des portes ; d) la surface totale d'ouvertures à déduire des murs.`, c:`a) 1 + 5 = **6 portes**.
b) Fenêtres : 6 × 1,20 × 1,20 + 3 × 0,60 × 0,60 = 8,64 + 1,08 = **9,72 m²**.
c) Portes : 0,90 × 2,20 + 5 × 0,80 × 2,10 = 1,98 + 8,40 = **10,38 m²**.
d) Total : 9,72 + 10,38 = **20,10 m²** (attention : les portes intérieures ne se déduisent que des cloisons où elles se trouvent, pas des murs de façade).`},
  {t:"Hauteurs sur une coupe", d:2, e:`Sur une coupe : sol fini RDC ±0,00, revêtement de sol 5 cm ; dessus de dalle brute d'étage +3,20 ; dalle 16 + 4 ; poutres de 20 × 40 (retombée sous dalle 20 cm). Calculer : a) la hauteur sous plafond finie ; b) la hauteur sous poutre ; c) la hauteur de maçonnerie entre dallage brut et dessous de poutre.`, c:`Sous-face de dalle : 3,20 − 0,20 = +3,00.
a) Hauteur sous plafond finie : 3,00 − 0,00 = **3,00 m** (le sol fini est à ±0,00).
b) Dessous de poutre : 3,00 − 0,20 = +2,80 → hauteur sous poutre **2,80 m**.
c) Dallage brut à −0,05 → maçonnerie : 2,80 + 0,05 = **2,85 m**.`},
  {t:"Surface d'une pièce", d:1, e:`Une chambre est cotée 3,60 × 4,10 m entre murs bruts. Les enduits font 1,5 cm. Calculer : a) la surface brute ; b) la surface du carrelage (entre enduits) ; c) le périmètre pour les plinthes, sachant que la porte mesure 0,80 m.`, c:`a) 3,60 × 4,10 = **14,76 m²**.
b) (3,60 − 0,03) × (4,10 − 0,03) = 3,57 × 4,07 = **14,53 m²**.
c) 2 × (3,57 + 4,07) − 0,80 = 15,28 − 0,80 = **14,48 ml**.`}
 ],
 quiz:[
  {q:"Au 1/50, 1 cm représente :", o:["50 cm","1 m","5 m","0,5 cm"], r:0, e:"1 cm × 50."},
  {q:"Le niveau ±0,00 correspond généralement :", o:["Au sol fini du rez-de-chaussée","Au fond des fouilles","À la toiture","Au niveau de la mer"], r:0, e:"Référence des cotes de niveau."},
  {q:"Sur un plan, une porte est représentée par :", o:["Un arc de cercle indiquant le sens d'ouverture","Un carré noirci","Des pointillés","Rien"], r:0, e:"Convention graphique."},
  {q:"Avant de métrer, on vérifie dans le cartouche :", o:["L'indice et la date du plan","La couleur du papier","Le nom du dessinateur seulement","Rien"], r:0, e:"Pour ne pas utiliser un plan périmé."},
  {q:"La somme des cotes partielles doit être égale :", o:["À la cote totale","À zéro","Au périmètre","À l'échelle"], r:0, e:"Contrôle systématique."}
 ]},
{id:"metre-11", niv:1, titre:"La géométrie du métreur : surfaces, volumes et pentes", duree:50, contenu:`## Pourquoi ce formulaire ?
Tous les ouvrages se ramènent à quelques formes simples. Connaître ces formules par cœur évite les erreurs et fait gagner beaucoup de temps.

## Les surfaces
| Figure | Surface |
|---|---|
| Rectangle | L × l |
| Triangle | base × hauteur / 2 |
| Trapèze | (B + b) / 2 × h |
| Cercle | π R² = π D² / 4 |
| Couronne (anneau) | π (D² − d²) / 4 |
| Secteur d'angle α (°) | π R² × α / 360 |
| Polygone quelconque | Découpage en triangles et trapèzes |
Périmètre du cercle : **2 π R = π D**.

## Les volumes
| Solide | Volume |
|---|---|
| Prisme droit (semelle, mur, dalle) | Surface de base × hauteur |
| Cylindre (poteau rond, cuve, puits) | π R² × h |
| Pyramide, cône | Surface de base × h / 3 |
| **Tronc de pyramide** (fouille talutée, semelle à glacis) | h / 3 × (S1 + S2 + √(S1 × S2)) |
| **Prismoïde** (formule générale) | h / 6 × (S1 + S2 + 4 Sm) |
S1 et S2 : surfaces des deux bases ; Sm : surface de la section à mi-hauteur. La formule du prismoïde convient aussi aux talus et aux terrassements irréguliers.

> [!exemple] Fouille talutée pour une semelle
> Fond 1,20 × 1,20 m, profondeur 1,50 m, talus incliné à 1/2 (0,50 m d'horizontal par mètre de hauteur).
> Dimensions en haut : 1,20 + 2 × 0,75 = 2,70 m → S1 = 1,44 m² ; S2 = 7,29 m² ; √(S1 S2) = 3,24 m².
> V = 1,50 / 3 × (1,44 + 7,29 + 3,24) = **5,99 m³**.
> Contrôle par le prismoïde : Sm = 1,95² = 3,80 m² → V = 1,50 / 6 × (1,44 + 7,29 + 4 × 3,80) = **5,99 m³** ✔.
> En fouille verticale, on aurait 1,44 × 1,50 = 2,16 m³ seulement : le talutage multiplie ici le volume par 2,8.

## Pentes et longueurs inclinées
- Une **pente de p %** monte de p cm par mètre horizontal : tan α = p / 100.
- **Longueur inclinée** (rampant de toiture, talus, escalier) = longueur horizontale × √(1 + (p/100)²), ou = projection / cos α.
- **Théorème de Pythagore** : diagonale = √(a² + b²).
> [!exemple] Toiture à deux pans en tôle
> Bâtiment 10 × 8 m, débords de 0,50 m tout autour, pente 20 %.
> Projection horizontale d'un pan : (8 + 2 × 0,50) / 2 = 4,50 m ; rampant = 4,50 × √(1 + 0,04) = **4,59 m**.
> Surface de couverture : 2 × 4,59 × (10 + 1,00) = **100,96 m²** (contre 99 m² en projection).

## Cylindres et ouvrages circulaires
> [!exemple] Cuve et regard
> - Cuve Ø 2,00 m intérieur, 2,50 m de hauteur d'eau : V = π × 1,00² × 2,50 = **7,85 m³ = 7 854 L**.
> - Regard circulaire Ø ext 1,20 m, Ø int 1,00 m, hauteur 1,50 m : béton = π (1,20² − 1,00²) / 4 × 1,50 = **0,52 m³**.

> [!astuce] Contrôler ses calculs
> - Vérifier les **ordres de grandeur** (une semelle de maison fait moins de 1 m³) ;
> - Vérifier les **unités** (tout en mètres avant de multiplier) ;
> - Refaire le calcul par une autre décomposition quand c'est possible.

> [!retenir]
> - Trapèze : (B + b)/2 × h ; cercle : π D²/4.
> - Tronc de pyramide : h/3 (S1 + S2 + √S1S2) ; prismoïde : h/6 (S1 + S2 + 4 Sm).
> - Longueur inclinée = horizontale × √(1 + p²) (p en valeur décimale).`,
 exercices:[
  {t:"Fouille talutée", d:2, e:`Fouille de semelle : fond 1,00 × 1,00 m, profondeur 1,20 m, talus à 1/2. Calculer le volume de fouille.`, c:`Dimensions en haut : 1,00 + 2 × 0,60 = 2,20 m → S1 = 1,00 m² ; S2 = 4,84 m² ; √(S1 S2) = 2,20 m².
V = 1,20 / 3 × (1,00 + 4,84 + 2,20) = 0,40 × 8,04 = **3,22 m³**.`},
  {t:"Cuve de château d'eau", d:2, e:`Cuve cylindrique en béton : Ø intérieur 3,00 m, hauteur d'eau 2,50 m, paroi de 15 cm d'épaisseur sur 2,80 m de hauteur, radier de 15 cm débordant jusqu'au nu extérieur de la paroi. Calculer : a) la capacité en litres ; b) le béton de la paroi ; c) le béton du radier.`, c:`a) V = π × 1,50² × 2,50 = 17,67 m³ = **17 671 L**.
b) Ø extérieur 3,30 m : π (3,30² − 3,00²) / 4 × 2,80 = **4,16 m³**.
c) Radier Ø 3,30 m : π × 3,30² / 4 × 0,15 = **1,28 m³**.`},
  {t:"Couverture à deux pans", d:2, e:`Maison de 12,00 × 9,00 m, débords de 0,60 m tout autour, pente 25 %. Calculer la longueur des rampants et la surface de couverture.`, c:`Projection d'un pan : (9,00 + 1,20) / 2 = 5,10 m.
Rampant : 5,10 × √(1 + 0,25²) = 5,10 × 1,031 = **5,26 m**.
Surface : 2 × 5,26 × (12,00 + 1,20) = **138,78 m²** (projection horizontale : 134,64 m², soit + 3 %).`},
  {t:"Paillasse d'escalier", d:3, e:`Escalier droit d'1,00 m de large : 18 contremarches de 17 cm et 17 girons de 28 cm, paillasse de 15 cm d'épaisseur. Calculer le béton de la paillasse et des marches.`, c:`Projection horizontale : 17 × 0,28 = 4,76 m ; hauteur : 18 × 0,17 = 3,06 m.
Longueur inclinée de la paillasse : √(4,76² + 3,06²) = **5,66 m** → béton paillasse : 5,66 × 1,00 × 0,15 = **0,85 m³**.
Marches (triangles) : 18 × 0,28 × 0,17 / 2 × 1,00 = **0,43 m³**.
Total ≈ **1,28 m³** (approximation courante : on prend 18 marches de 28 cm).`},
  {t:"Surface d'un terrain", d:1, e:`Un terrain se décompose en un trapèze (bases 25 m et 32 m, hauteur 40 m) et un triangle accolé (base 32 m, hauteur 15 m). Calculer sa surface.`, c:`Trapèze : (25 + 32) / 2 × 40 = **1 140 m²** ; triangle : 32 × 15 / 2 = **240 m²**.
Surface totale : **1 380 m²**.`}
 ],
 quiz:[
  {q:"Surface d'un trapèze de bases 6 et 4 m et de hauteur 3 m :", o:["15 m²","30 m²","72 m²","13 m²"], r:0, e:"(6 + 4)/2 × 3."},
  {q:"Volume d'un cylindre de Ø 2 m et de 1 m de haut :", o:["3,14 m³","6,28 m³","12,57 m³","2 m³"], r:0, e:"π × 1² × 1."},
  {q:"La formule du tronc de pyramide sert pour :", o:["Les fouilles talutées","Les peintures","Les câbles","Les portes"], r:0, e:"Bases de surfaces différentes."},
  {q:"Une pente de 20 % monte de :", o:["20 cm par mètre horizontal","2 cm par mètre","20 m par cm","45°"], r:0, e:"tan α = 0,20."},
  {q:"La surface de couverture est :", o:["Plus grande que la projection horizontale","Égale à l'emprise au sol sans débords","Plus petite que la projection","Sans rapport"], r:0, e:"Rampant incliné et débords."}
 ]},
{id:"metre-2", niv:1, titre:"Métré des terrassements", duree:55, contenu:`## Les ouvrages de terrassement
| Ouvrage | Unité | Comment le mesurer |
|---|---|---|
| Installation et repli de chantier | ft | Forfait (clôture, baraques, eau, électricité) |
| Débroussaillage, décapage de la terre végétale | m² | Emprise du bâtiment + 1 à 2 m autour |
| Implantation | ft | Forfait |
| Fouilles en **puits** (semelles isolées) | m³ | Nb × (A + 2 s) × (B + 2 s) × profondeur |
| Fouilles en **rigole** (semelles filantes, longrines) | m³ | Longueur × largeur × profondeur |
| Fouilles en **grande masse** (sous-sol, plate-forme) | m³ | Volumes géométriques, prismoïde, profils |
| Blindages | m² | Surface de parois blindées |
| Remblais (de fouilles ou d'apport) | m³ | Volume compacté en place |
| Évacuation des déblais | m³ | Volume en place × foisonnement |
s = **surlargeur de travail** de chaque côté (0,10 à 0,30 m selon la profondeur et le CCTP), pour que l'ouvrier puisse coffrer et travailler.

## Les règles particulières
- Les profondeurs se mesurent depuis le **terrain naturel** (ou depuis le niveau après décapage) jusqu'au **fond de fouille** (sous le béton de propreté).
- Les **fouilles en rigole** se mesurent entre les fouilles en puits, pour ne pas compter deux fois les zones communes.
- Les volumes de fouilles sont toujours des **volumes en place** ; le **foisonnement** n'intervient que pour l'évacuation et le transport.
- Un **remblai d'apport** compacté demande plus de matériau en vrac que le volume en place (coefficient de 1,2 à 1,35).

## Le foisonnement
Un sol excavé occupe plus de place qu'en place : c'est le **foisonnement**.
| Sol | Coefficient de foisonnement |
|---|---|
| Sable | 1,10 à 1,20 |
| Terre ordinaire, latérite | 1,20 à 1,30 |
| Argile | 1,30 à 1,40 |
| Roche minée | 1,50 à 1,70 |

## Méthode : fouilles, remblais et évacuation
1. Calculer les **fouilles** (puits + rigoles + grande masse) ;
2. Calculer le **volume des ouvrages enterrés** (béton de propreté, semelles, amorces, longrines sous le terrain naturel) ;
3. **Remblai des fouilles** = fouilles − ouvrages enterrés ;
4. **Excédent à évacuer** = ouvrages enterrés (en place), multiplié par le foisonnement pour le transport.

> [!exemple] Villa : 10 semelles 1,00 × 1,00 et 52 m de longrines 20 × 40
> Terrain naturel à 0,00 ; fond des puits à −1,00 ; surlargeur 0,10 m.
> - **Fouilles en puits** : 10 × 1,20 × 1,20 × 1,00 = **14,40 m³**
> - **Fouilles en rigole** (0,40 × 0,45) : 13 tronçons de longrines, chacun raccourci de 2 × 0,60 m dans les puits → 52,00 − 13 × 1,20 = 36,40 m → 36,40 × 0,40 × 0,45 = **6,55 m³**
> - Total fouilles : **20,95 m³**
> - Ouvrages enterrés : propreté puits 10 × 1,10 × 1,10 × 0,05 = 0,61 ; propreté rigoles 36,40 × 0,40 × 0,05 = 0,73 ; semelles 10 × 1,00 × 1,00 × 0,25 = 2,50 ; amorces 10 × 0,20 × 0,20 × 0,30 = 0,12 ; longrines 52 × 0,20 × 0,40 = 4,16 → **8,11 m³**
> - **Remblai des fouilles** : 20,95 − 8,11 = **12,84 m³**
> - **Évacuation** : 8,11 × 1,25 = **10,14 m³** foisonnés, soit 2 rotations de camion de 6 m³.
> - **Décapage** (bâtiment 12 × 9 m + 1 m autour) : 14 × 11 = **154 m²** ; terre végétale de 20 cm : 30,8 m³ en place, 38,5 m³ foisonnés.

## Remblai sous dallage
Le dallage du rez-de-chaussée est souvent surélevé de 20 à 40 cm au-dessus du terrain naturel : on remblaie l'intérieur des longrines en **matériau d'apport compacté** (graveleux latéritique, sable).
> [!exemple] Suite
> Surface intérieure 95 m², hauteur de remblai 0,30 m : **28,50 m³** compactés → à commander : 28,50 × 1,30 = **37,05 m³** en vrac.

## Les fouilles en grande masse
Pour un sous-sol ou une plate-forme, on utilise les formules de volume (prismoïde) ou, pour un terrain irrégulier, la méthode des **profils** et du **carroyage** (chapitre « Cubatures »).

> [!attention] Ne pas oublier
> - les **blindages** des fouilles profondes (plus de 1,30 m) ;
> - l'**épuisement** des eaux (pompage) en terrain humide ou sous la nappe ;
> - les **sujétions** de terrain rocheux (brise-roche) : à prévoir dans un article séparé.

> [!retenir]
> - Fouilles et remblais en **m³ en place** ; évacuation × foisonnement.
> - Puits : (A + 2 s)(B + 2 s) × profondeur ; rigoles entre les puits.
> - Remblai = fouilles − ouvrages enterrés ; excédent = ouvrages enterrés.`,
 exercices:[
  {t:"Décapage et évacuation de la terre végétale", d:1, e:`On décape sur 20 cm un terrain de 25 × 18 m. Foisonnement : 1,25. Combien de rotations de camions de 8 m³ faut-il pour évacuer la terre ?`, c:`Surface : 25 × 18 = **450 m²** ; volume en place : 450 × 0,20 = **90 m³**.
Foisonné : 90 × 1,25 = **112,5 m³** → 112,5 / 8 = 14,06 → **15 rotations**.`},
  {t:"Fouilles en rigole", d:2, e:`Maison de 11,30 × 8,30 m hors tout (murs de 15 cm) avec un mur de refend central parallèle à la petite façade. Semelle filante de 0,60 m de large, surlargeur 0,15 m de chaque côté, profondeur de fouille 0,80 m. Calculer le volume de fouilles.`, c:`Périmètre à l'axe : 2 × (11,15 + 8,15) = **38,60 m** ; largeur de fouille : 0,60 + 2 × 0,15 = **0,90 m**.
Refend : on le mesure **entre les fouilles périphériques** déjà comptées : 8,15 (entre axes) − 2 × 0,45 = **7,25 m**.
Longueur totale : 38,60 + 7,25 = **45,85 m**.
Volume : 45,85 × 0,90 × 0,80 = **33,01 m³**.`},
  {t:"Remblai et évacuation", d:2, e:`Fouilles totales : 31,20 m³ ; volume des ouvrages enterrés (propreté, semelles, amorces, longrines) : 11,80 m³. Sol argileux (foisonnement 1,35). Calculer le remblai des fouilles et le volume à évacuer.`, c:`Remblai : 31,20 − 11,80 = **19,40 m³** (en place, compacté).
À évacuer : 11,80 m³ en place × 1,35 = **15,93 m³** foisonnés.`},
  {t:"Fouille en grande masse d'un sous-sol", d:3, e:`Sous-sol : fond de fouille 12 × 8 m, profondeur 3 m, talus à 1/1. Calculer le volume de fouille (prismoïde) et le comparer à une fouille blindée verticale.`, c:`Haut : (12 + 6) × (8 + 6) = 18 × 14 = 252 m² ; fond : 96 m² ; mi-hauteur : 15 × 11 = 165 m².
V = 3 / 6 × (96 + 252 + 4 × 165) = 0,5 × 1 008 = **504 m³**.
Fouille verticale blindée : 96 × 3 = **288 m³**. Le talutage ajoute 216 m³ (+ 75 %) mais évite les blindages : on compare les deux coûts.`},
  {t:"Durée et transport", d:2, e:`Les 504 m³ de l'exercice précédent sont terrassés avec une pelle de rendement 25 m³ en place par heure et évacués par camions de 10 m³ (foisonnement 1,25). Calculer la durée de terrassement (journées de 8 h) et le nombre de rotations.`, c:`Durée : 504 / 25 = 20,2 h → 20,2 / 8 = **2,5 jours**.
Volume foisonné : 504 × 1,25 = **630 m³** → 630 / 10 = **63 rotations**, soit environ 25 rotations par jour : il faut organiser 3 à 4 camions selon la distance de décharge.`}
 ],
 quiz:[
  {q:"Les fouilles se mesurent en :", o:["Volume en place","Volume foisonné","m²","Tonnes"], r:0, e:"Le foisonnement ne sert qu'au transport."},
  {q:"20 m³ de déblais argileux (foisonnement 1,3) occupent dans les camions :", o:["26 m³","20 m³","15,4 m³","13 m³"], r:0, e:"20 × 1,3."},
  {q:"Le remblai des fouilles vaut :", o:["Fouilles − ouvrages enterrés","Fouilles + ouvrages","Ouvrages enterrés seuls","Zéro"], r:0, e:"On remet la terre autour des ouvrages."},
  {q:"La surlargeur de travail sert à :", o:["Permettre de coffrer et de travailler dans la fouille","Augmenter le prix","Drainer","Rien"], r:0, e:"0,10 à 0,30 m de chaque côté."},
  {q:"Les fouilles en rigole se mesurent :", o:["Entre les fouilles en puits","En recomptant les puits","En m²","À l'unité"], r:0, e:"Pas de double compte."}
 ]},
{id:"metre-12", niv:1, titre:"Métré des fondations, soubassements et dallages", duree:60, contenu:`## Les ouvrages de fondation
| Ouvrage | Unité | Mesure |
|---|---|---|
| Béton de propreté (150 kg/m³) | m³ | Surface de la semelle + 5 cm de débord × 5 cm |
| Semelles isolées, filantes | m³ | Nb × A × B × h (glacis : tronc de pyramide) |
| Amorces de poteaux | m³ | Nb × a × b × hauteur (du dessus de semelle au dessous de longrine) |
| Longrines | m³ | Longueur entre nus des poteaux ou à l'axe selon la convention × section |
| Radier | m³ | Surface × épaisseur + nervures |
| Soubassement en agglos pleins | m² | Périmètre à l'axe × hauteur |
| Hérisson en pierres cassées | m² (ou m³) | Surface intérieure |
| Film polyane | m² | Surface + recouvrements |
| Dallage béton + treillis soudé | m² ou m³ | Surface intérieure (× épaisseur) |
| Aciers | kg | Nomenclature ou ratios |

!fig:semelle|Semelle isolée sous poteau

## Les semelles à glacis
Une semelle avec glacis (dessus incliné) se décompose en un **prisme** (le talon d'épaisseur constante) et un **tronc de pyramide** (le glacis).
> [!exemple] Semelle 1,40 × 1,40 m, talon 0,20 m, glacis de 0,25 m jusqu'à 0,40 × 0,40 m
> Talon : 1,40² × 0,20 = 0,392 m³ ; glacis : 0,25 / 3 × (1,96 + 0,16 + √(1,96 × 0,16)) = 0,25 / 3 × 2,68 = 0,223 m³.
> **V = 0,615 m³** (une semelle parallélépipédique de 0,45 m d'épaisseur ferait 0,882 m³ : le glacis économise 30 % de béton, mais demande plus de main-d'œuvre).

## Exemple complet : fondations d'une villa
> [!exemple] 12 semelles 0,80 × 0,80 × 0,25 ; 62 m de longrines 20 × 30 ; dallage de 68 m²
> - **Béton de propreté** : 12 × 0,90 × 0,90 × 0,05 + 62 × 0,30 × 0,05 = 0,49 + 0,93 = **1,42 m³**
> - **Semelles** : 12 × 0,80 × 0,80 × 0,25 = **1,92 m³**
> - **Amorces** : 12 × 0,20 × 0,20 × 1,00 = **0,48 m³**
> - **Longrines** : 62 × 0,20 × 0,30 = **3,72 m³**
> - **Soubassement** en agglos pleins de 15 (h = 0,60 m) : 62 × 0,60 = **37,20 m²**
> - **Hérisson** 15 cm : **68 m²** ; **dallage** 8 cm : 68 × 0,08 = **5,44 m³**, treillis soudé 68 × 1,10 = **74,8 m²** (recouvrements compris)

## Le sous-détail des matériaux
| Ouvrage (par unité) | Ciment | Sable | Gravier | Autres |
|---|---|---|---|---|
| 1 m³ béton armé dosé à 350 | 7 sacs | 0,40 m³ | 0,80 m³ | — |
| 1 m³ béton de propreté dosé à 150 | 3 sacs | 0,40 m³ | 0,80 m³ | — |
| 1 m³ béton de dallage dosé à 300 | 6 sacs | 0,40 m³ | 0,80 m³ | — |
| 1 m² agglos pleins de 15 | 0,09 sac | 0,015 m³ | — | 12,5 agglos |
| 1 m² hérisson de 15 cm | — | — | — | 0,16 m³ de pierres |
> [!exemple] Suite : commandes
> - Béton armé : 1,92 + 0,48 + 3,72 = 6,12 m³ → 6,12 × 7 = 42,8 → **43 sacs** ; sable **2,45 m³** ; gravier **4,90 m³**.
> - Propreté : 1,42 × 3 = 4,3 → **5 sacs** ; sable 0,57 m³ ; gravier 1,13 m³.
> - Dallage : 5,44 × 6 = 32,6 → **33 sacs** ; sable 2,18 m³ ; gravier 4,35 m³.
> - Soubassement : 37,20 × 12,5 = 465 agglos + 3 % de casse → **479 agglos** ; mortier 37,20 × 0,015 = 0,56 m³ → **3,4 sacs**.
> - Hérisson : 68 × 0,16 = **10,9 m³** de pierres cassées.
> - Aciers (ratios) : semelles 1,92 × 40 = 77 kg ; amorces 0,48 × 110 = 53 kg ; longrines 3,72 × 90 = 335 kg → **464 kg**, + 8 % de chutes et recouvrements → **≈ 500 kg**.

## Les ratios d'acier utiles
| Élément | kg d'acier par m³ de béton |
|---|---|
| Semelles isolées | 30 à 50 |
| Semelles filantes | 25 à 40 |
| Longrines | 70 à 100 |
| Amorces, poteaux | 100 à 150 |
| Radier | 60 à 90 |

> [!retenir]
> - Béton de propreté : semelle + 5 cm de débord, 5 cm d'épaisseur.
> - Semelle à glacis = prisme + tronc de pyramide.
> - Sous-détail : 7 sacs/m³ (350), 6 sacs (300), 3 sacs (150) ; 0,40 m³ de sable et 0,80 m³ de gravier par m³.
> - Majorer les aciers de 5 à 10 %.`,
 exercices:[
  {t:"Semelles de deux types", d:1, e:`Le plan des fondations comporte 8 semelles S1 de 1,00 × 1,00 × 0,30 m et 4 semelles S2 de 1,20 × 1,20 × 0,35 m. Calculer le béton des semelles et le béton de propreté (débord 5 cm, épaisseur 5 cm).`, c:`Semelles : 8 × 1,00 × 1,00 × 0,30 = 2,40 m³ ; 4 × 1,20 × 1,20 × 0,35 = 2,02 m³ → **4,42 m³**.
Propreté : 8 × 1,10 × 1,10 × 0,05 = 0,48 m³ ; 4 × 1,30 × 1,30 × 0,05 = 0,34 m³ → **0,82 m³**.`},
  {t:"Semelle à glacis", d:2, e:`Semelle 1,60 × 1,60 m : talon de 0,25 m, glacis de 0,30 m de haut montant jusqu'à 0,35 × 0,35 m (poteau 25 × 25 + 5 cm de débord). Calculer son volume.`, c:`Talon : 1,60² × 0,25 = **0,640 m³**.
Glacis : S1 = 2,56 m², S2 = 0,1225 m², √(S1 S2) = 0,56 m² → 0,30 / 3 × (2,56 + 0,1225 + 0,56) = **0,324 m³**.
Total : **0,964 m³**.`},
  {t:"Soubassement en agglos pleins", d:1, e:`Soubassement de 0,80 m de haut sur 46,45 m (périmètre à l'axe + refend). Calculer : surface, nombre d'agglos pleins (+ 3 %), mortier et ciment (0,015 m³/m², dosage 300 kg/m³).`, c:`Surface : 46,45 × 0,80 = **37,16 m²**.
Agglos : 37,16 × 12,5 = 464,5 → × 1,03 = 478,4 → **479 agglos**.
Mortier : 37,16 × 0,015 = **0,56 m³** → ciment 0,56 × 300 / 50 = **3,3 sacs** (4 sacs à commander) ; sable 0,56 m³.`},
  {t:"Dallage complet", d:2, e:`Dallage de 85 m² : hérisson de 15 cm (0,16 m³ de pierres par m²), film polyane, dallage de 8 cm dosé à 300 kg/m³ armé d'un treillis soudé (recouvrements 10 %). Établir les quantités et les matériaux.`, c:`- Hérisson : **85 m²** → pierres 85 × 0,16 = **13,6 m³**
- Polyane : 85 × 1,10 = **93,5 m²**
- Béton : 85 × 0,08 = **6,80 m³** → ciment 6,80 × 6 = **40,8 → 41 sacs** ; sable 6,80 × 0,40 = **2,72 m³** ; gravier **5,44 m³**
- Treillis : 85 × 1,10 = **93,5 m²**`},
  {t:"Récapitulatif des fondations", d:3, e:`Reprendre les semelles de l'exercice 1 (4,42 m³), avec 46,45 m de longrines 20 × 40 et 12 amorces 20 × 20 de 0,60 m. Calculer le béton armé total, le ciment, le sable, le gravier et les aciers par ratios (semelles 40, amorces 110, longrines 90 kg/m³, + 8 %).`, c:`Longrines : 46,45 × 0,20 × 0,40 = **3,72 m³** ; amorces : 12 × 0,20 × 0,20 × 0,60 = **0,29 m³**.
Béton armé : 4,42 + 3,72 + 0,29 = **8,42 m³** → ciment 8,42 × 7 = 58,9 → **59 sacs** ; sable **3,37 m³** ; gravier **6,74 m³**.
Aciers : 4,42 × 40 = 177 ; 0,29 × 110 = 32 ; 3,72 × 90 = 334 → 543 kg × 1,08 = **≈ 586 kg**.`}
 ],
 quiz:[
  {q:"Le béton de propreté se dose en général à :", o:["150 kg/m³","350 kg/m³","500 kg/m³","50 kg/m³"], r:0, e:"Béton maigre."},
  {q:"Pour 1 m³ de béton dosé à 350 kg/m³, il faut :", o:["7 sacs de 50 kg","3 sacs","12,5 sacs","1 sac"], r:0, e:"350 / 50 = 7."},
  {q:"Le volume d'un glacis de semelle se calcule comme :", o:["Un tronc de pyramide","Un cylindre","Un cube","Une sphère"], r:0, e:"Deux bases carrées différentes."},
  {q:"Un m² de mur en agglos de 40 × 20 contient :", o:["12,5 agglos","10 agglos","25 agglos","8 agglos"], r:0, e:"1 / (0,40 × 0,20)."},
  {q:"Pourquoi majorer les aciers de 5 à 10 % ?", o:["Recouvrements et chutes","TVA","Rouille","Transport"], r:0, e:"Barres de 12 m coupées."}
 ]},
{id:"metre-4", niv:1, titre:"Métré des maçonneries", duree:55, contenu:`## Les maçonneries courantes
| Matériau | Format | Usage | Quantité au m² |
|---|---|---|---|
| Agglos creux de 15 | 40 × 20 × 15 cm | Murs extérieurs, murs porteurs légers | 12,5 u |
| Agglos creux de 10 | 40 × 20 × 10 cm | Cloisons intérieures | 12,5 u |
| Agglos creux de 20 | 40 × 20 × 20 cm | Murs de clôture hauts, murs de soutènement légers | 12,5 u |
| Agglos pleins de 15 | 40 × 20 × 15 cm | Soubassements | 12,5 u |
| Claustras | 20 × 20 cm (courant) | Ventilation, décoration | 25 u |
| Briques de terre comprimée (BTC) | selon presse | Habitat économique | selon format + joint |
Nombre au m² = 1 / (surface d'un élément **joint compris**) : pour un agglo de 40 × 20, 1 / (0,40 × 0,20) = **12,5**. On ajoute **3 à 5 %** de casse.

## Les règles de mesure
- **Unité** : le m² de surface vue (une seule face), en séparant les épaisseurs.
- **Longueurs** : murs extérieurs à l'**axe** (périmètre à l'axe) ; murs de refend et cloisons **entre nus** des murs qu'ils rencontrent.
- **Hauteur** : du dessus du soubassement (ou du dallage) jusqu'au **dessous du chaînage** ou de la poutre.
- **Déductions** : poteaux et raidisseurs noyés dans le mur, linteaux, ouvertures (selon la règle du marché, souvent > 0,5 m²).
- Les **chaînages, poteaux et linteaux** en béton armé sont métrés dans le lot béton armé, pas dans la maçonnerie.
- Les **appuis de fenêtres** se comptent en ml (ou à l'unité).

## Le mortier de pose
| Maçonnerie | Mortier par m² | Ciment (mortier dosé à 300 kg/m³) |
|---|---|---|
| Agglos de 10 | 0,010 m³ | 3 kg ≈ 0,06 sac |
| Agglos de 15 | 0,015 m³ | 4,5 kg ≈ 0,09 sac |
| Agglos de 20 | 0,020 m³ | 6 kg ≈ 0,12 sac |
Sable : environ le volume de mortier.

> [!exemple] Rez-de-chaussée d'une maison de 11,30 × 8,30 m
> Murs extérieurs en agglos de 15, hauteur de maçonnerie 2,65 m ; 10 poteaux 20 × 20 dans les murs ; ouvertures en façade : 1 porte 0,90 × 2,20, 6 fenêtres 1,20 × 1,20, 3 fenêtres 0,60 × 0,60 ; linteaux de 20 cm de haut débordant de 20 cm de chaque côté.
> - Brut : 38,60 × 2,65 = **102,29 m²**
> - Poteaux : 10 × 0,20 × 2,65 = 5,30 m²
> - Ouvertures : 1,98 + 6 × 1,44 + 3 × 0,36 = 11,70 m²
> - Linteaux : (1,30 + 6 × 1,60 + 3 × 1,00) × 0,20 = 2,78 m²
> - **Net : 102,29 − 5,30 − 11,70 − 2,78 = 82,51 m²**
> - Agglos de 15 : 82,51 × 12,5 × 1,03 = **1 063 agglos** ; mortier 82,51 × 0,015 = 1,24 m³ → **7,4 sacs** ; sable 1,24 m³.
> Cloisons en agglos de 10 : 18,40 m entre nus × 2,65 = 48,76 m² − 5 portes 0,80 × 2,10 (8,40 m²) − linteaux (5 × 1,20 × 0,20 = 1,20 m²) = **39,16 m²** → **505 agglos** ; mortier 0,39 m³ → **2,4 sacs**.

!fig:chainage|Chaînages et raidisseurs dans la maçonnerie

## Les autres maçonneries
- **Murs de clôture** : en agglos de 15 ou 20 entre poteaux, sur soubassement ; on déduit les poteaux, on compte à part le chaperon (ml).
- **Maçonnerie de moellons** (pierres) : en **m³** (murs de soutènement, soubassements en zone rocheuse).
- **Claustras** : en m² ou à l'unité.
- **Conduits, souches, acrotères** maçonnés : en ml ou en m² selon le bordereau.

> [!astuce] Organiser le métré des murs
> Faire un tableau **par niveau** et **par épaisseur** : longueur, hauteur, brut, déductions (poteaux, ouvertures, linteaux), net. Repérer les ouvertures par leurs repères de la nomenclature (P1, F1…) pour ne pas en oublier.

> [!retenir]
> - 12,5 agglos/m² (+ 3 à 5 % de casse).
> - Murs extérieurs à l'axe, cloisons entre nus ; hauteur jusqu'au dessous du chaînage.
> - Déduire poteaux, linteaux et ouvertures ; le béton armé est compté à part.
> - Mortier : 0,010 / 0,015 / 0,020 m³ par m² pour 10 / 15 / 20.`,
 exercices:[
  {t:"Murs d'une pièce", d:1, e:`Pièce de 4,00 × 3,50 m à l'axe des murs (agglos de 15), hauteur 2,80 m. À déduire : 4 poteaux 20 × 20, une porte 0,90 × 2,20 et une fenêtre 1,20 × 1,20. Calculer la surface nette, le nombre d'agglos (+ 3 %) et le ciment de pose.`, c:`Brut : 2 × (4,00 + 3,50) × 2,80 = **42,00 m²**.
Déductions : poteaux 4 × 0,20 × 2,80 = 2,24 ; porte 1,98 ; fenêtre 1,44.
Net : 42,00 − 2,24 − 1,98 − 1,44 = **36,34 m²**.
Agglos : 36,34 × 12,5 × 1,03 = 467,9 → **468 agglos**.
Mortier : 36,34 × 0,015 = 0,55 m³ → ciment 0,55 × 300 / 50 = **3,3 sacs** (4 sacs).`},
  {t:"Mur de clôture", d:2, e:`Clôture de 120 m de périmètre comprenant un portail de 4,00 m et un portillon de 1,00 m (sans maçonnerie). Mur en agglos de 15 de 2,00 m de haut au-dessus du soubassement, poteaux 20 × 20 tous les 3 m (41 poteaux). Calculer la surface de maçonnerie, les agglos (+ 3 %) et le ciment de pose.`, c:`Longueur maçonnée : 120 − 4 − 1 = **115 m** → brut 115 × 2,00 = 230,00 m².
Poteaux : 41 × 0,20 × 2,00 = 16,40 m².
Net : 230,00 − 16,40 = **213,60 m²**.
Agglos : 213,60 × 12,5 × 1,03 = 2 750,1 → **2 751 agglos**.
Mortier : 213,60 × 0,015 = 3,20 m³ → ciment 3,20 × 6 = **19,2 sacs** (20 sacs) ; sable 3,2 m³.`},
  {t:"Cloisons intérieures", d:1, e:`Cloisons en agglos de 10 : 24,60 m entre nus, hauteur 2,70 m ; 6 portes de 0,80 × 2,10 avec linteaux de 1,20 × 0,20 m. Calculer la surface nette, les agglos (+ 3 %) et le ciment (0,06 sac/m²).`, c:`Brut : 24,60 × 2,70 = **66,42 m²**.
Portes : 6 × 1,68 = 10,08 ; linteaux : 6 × 0,24 = 1,44.
Net : 66,42 − 10,08 − 1,44 = **54,90 m²**.
Agglos : 54,90 × 12,5 × 1,03 = 706,8 → **707 agglos** ; ciment : 54,90 × 0,06 = **3,3 sacs**.`},
  {t:"Linteaux et appuis", d:2, e:`Une façade comporte 6 fenêtres F1 de 1,20 m et 3 fenêtres F2 de 0,60 m de large, et une porte de 0,90 m. Les linteaux débordent de 20 cm de chaque côté ; les appuis de fenêtre ont la largeur de la baie + 2 × 5 cm. Calculer la longueur totale de linteaux et d'appuis.`, c:`Linteaux : 6 × (1,20 + 0,40) + 3 × (0,60 + 0,40) + (0,90 + 0,40) = 9,60 + 3,00 + 1,30 = **13,90 ml**.
Appuis (fenêtres seulement) : 6 × (1,20 + 0,10) + 3 × (0,60 + 0,10) = 7,80 + 2,10 = **9,90 ml**.`},
  {t:"Paroi en claustras", d:1, e:`Une paroi de ventilation de 6,00 m de long et 1,20 m de haut est réalisée en claustras de 20 × 20 cm. Combien en commander (+ 3 %) ?`, c:`Surface : 6,00 × 1,20 = 7,20 m² ; 1 / (0,20 × 0,20) = **25 claustras/m²**.
7,20 × 25 = 180 → × 1,03 = 185,4 → **186 claustras**.`}
 ],
 quiz:[
  {q:"Les cloisons se mesurent en longueur :", o:["Entre nus des murs","À l'axe en traversant les murs","Hors tout","En diagonale"], r:0, e:"Pour ne pas compter les intersections."},
  {q:"Mortier de pose par m² d'agglos de 15 :", o:["0,015 m³","0,15 m³","1,5 m³","0,0015 m³"], r:0, e:"Environ 15 L."},
  {q:"Les chaînages en béton armé sont comptés :", o:["Dans le lot béton armé","Dans la peinture","Avec les agglos","Jamais"], r:0, e:"On les déduit de la maçonnerie."},
  {q:"Nombre de claustras 20 × 20 au m² :", o:["25","12,5","20","40"], r:0, e:"1 / 0,04."},
  {q:"La hauteur des murs se mesure jusqu'au :", o:["Dessous du chaînage ou de la poutre","Faîtage","Fond de fouille","Plafond fini"], r:0, e:"Le chaînage est en béton armé."}
 ]},
{id:"metre-13", niv:1, titre:"Métré des enduits, chapes et ravalements", duree:50, contenu:`## Les enduits
L'enduit protège et dresse les murs. On distingue :
- l'**enduit intérieur** au mortier de ciment (1,5 à 2 cm), parfois remplacé par un enduit plâtre ;
- l'**enduit extérieur** en trois couches : gobetis (accrochage), corps d'enduit, couche de finition (lissée, talochée, tyrolienne, grattée) ;
- l'**enduit de plafond** (sous-face des dalles) ;
- les enduits spéciaux : hydrofuge (salles d'eau, soubassements), décoratif.

## Les règles de mesure
- **Unité** : le m², surface **réellement enduite**, chaque face comptée séparément (intérieur et extérieur).
- **Murs intérieurs** : périmètre intérieur de chaque pièce × hauteur sous plafond, ouvertures déduites.
- **Façades** : périmètre extérieur × hauteur (du sol ou du dessus du soubassement jusqu'à l'égout de toiture ou l'acrotère).
- **Tableaux et voussures** (retours de l'enduit dans l'épaisseur du mur autour des baies) : ajoutés en m² (développé × épaisseur du mur) ou en ml selon le bordereau.
- **Arêtes** renforcées (cornières d'angle), **baguettes**, **joints** : en ml.
- Les **soubassements** extérieurs (enduit hydrofuge ou carrelé) se comptent à part.

## Le mortier d'enduit
| Ouvrage | Mortier par m² | Ciment (350 kg/m³ = 7 sacs/m³) |
|---|---|---|
| Enduit intérieur 1,5 cm | 0,015 à 0,018 m³ | 0,11 à 0,13 sac |
| Enduit extérieur 3 couches (≈ 2 cm) | 0,020 à 0,022 m³ | 0,14 à 0,15 sac |
| Enduit de plafond 1,5 cm | 0,015 m³ | 0,11 sac |
Sable : environ le volume de mortier.

> [!exemple] Chambre de 3,70 × 3,20 m entre murs bruts, hauteur 2,80 m
> - Murs : 2 × (3,70 + 3,20) × 2,80 = 38,64 m² − porte 0,80 × 2,10 (1,68) − fenêtre 1,20 × 1,20 (1,44) = 35,52 m²
> - Tableaux de la fenêtre (mur de 15) : (2 × 1,20 + 1,20) × 0,15 = 0,54 m² → murs : **36,06 m²**
> - Plafond : 3,70 × 3,20 = **11,84 m²**
> - Mortier : (36,06 + 11,84) × 0,018 = 0,86 m³ → ciment 0,86 × 7 = **6,0 sacs** ; sable 0,86 m³.

> [!exemple] Façades de la maison de 11,30 × 8,30 m
> Hauteur enduite 3,40 m ; périmètre extérieur 39,20 m → 133,28 m² − ouvertures 11,70 m² + tableaux (porte 0,80 m² ; 6 F1 : 6 × 3 × 1,20 × 0,15 = 3,24 m² ; 3 F2 : 0,81 m²) = **126,43 m²**.
> Mortier (2 cm) : 2,53 m³ → ciment **17,7 sacs**.

## Les chapes et ragréages
- **Chape** de mortier (3 à 5 cm, dosée à 350 – 400 kg/m³) : sous les revêtements collés ou pour dresser un sol ; en m² (épaisseur précisée) ou en m³.
- **Ragréage** autolissant (quelques mm) : en m², consommation ≈ 1,5 kg/m² par mm d'épaisseur.
- **Forme de pente** (toitures-terrasses, douches) : en m² avec épaisseur moyenne.
> [!exemple] Chape de 4 cm sur 85 m²
> 85 × 0,04 = **3,40 m³** de mortier dosé à 350 → 3,40 × 7 = **23,8 sacs** ; sable ≈ 3,4 m³.

## Le ravalement
Sur un bâtiment existant : nettoyage (lavage haute pression), piquage des parties dégradées, rebouchage, nouvel enduit ou peinture. Chaque opération fait l'objet d'un article en m² ; l'**échafaudage** est compté en m² de façade (ou au forfait) avec sa durée de location.

> [!attention] Erreurs fréquentes
> - Oublier une face (cloison enduite des deux côtés) ;
> - Oublier les tableaux, surtout dans les murs épais ;
> - Compter la façade à l'axe au lieu du périmètre extérieur.

> [!retenir]
> - Enduits : m² par face, ouvertures déduites, tableaux ajoutés.
> - Façade : périmètre **extérieur** × hauteur ; murs intérieurs : périmètre intérieur × hauteur.
> - Mortier : ≈ 0,018 m³/m² (int.), 0,020 m³/m² (ext.) ; 7 sacs par m³ à 350 kg/m³.`,
 exercices:[
  {t:"Enduits d'un séjour", d:2, e:`Séjour de 5,60 × 4,20 m entre murs bruts, hauteur 2,75 m. Ouvertures : porte d'entrée 0,90 × 2,20, porte intérieure 0,80 × 2,10 (cloison de 10, sans tableaux), 2 fenêtres 1,20 × 1,20, baie 2,40 × 2,20. Tableaux de 0,15 m pour la porte d'entrée (2 jambages + voussure), les fenêtres et la baie (3 côtés). Calculer les surfaces d'enduit des murs et du plafond et le ciment (0,018 m³/m², 7 sacs/m³).`, c:`Brut : 2 × (5,60 + 4,20) × 2,75 = **53,90 m²**.
Ouvertures : 1,98 + 1,68 + 2 × 1,44 + 5,28 = **11,82 m²**.
Tableaux : porte (2 × 2,20 + 0,90) × 0,15 = 0,795 ; fenêtres 2 × 3 × 1,20 × 0,15 = 1,08 ; baie (2 × 2,20 + 2,40) × 0,15 = 1,02 → **2,90 m²**.
Murs : 53,90 − 11,82 + 2,90 = **44,98 m²** ; plafond : 5,60 × 4,20 = **23,52 m²**.
Mortier : (44,98 + 23,52) × 0,018 = 1,23 m³ → **8,6 sacs** (9 sacs).`},
  {t:"Façades d'une villa", d:2, e:`Villa de 14,30 × 10,30 m hors tout ; hauteur enduite 3,60 m (au-dessus d'un soubassement de 0,40 m traité à part). Ouvertures : 18,40 m² ; tableaux : 6,20 m². Calculer la surface d'enduit de façade, la surface du soubassement et le ciment de l'enduit (0,020 m³/m²).`, c:`Périmètre extérieur : 2 × (14,30 + 10,30) = **49,20 m**.
Façade : 49,20 × 3,60 = 177,12 − 18,40 + 6,20 = **164,92 m²**.
Soubassement : 49,20 × 0,40 = **19,68 m²** (moins les seuils éventuels).
Mortier : 164,92 × 0,020 = 3,30 m³ → ciment 3,30 × 7 = **23,1 sacs**.`},
  {t:"Arêtes et tableaux", d:1, e:`8 fenêtres de 1,20 × 1,20 m dans des murs de 20 cm. Calculer : a) la longueur des arêtes extérieures à renforcer par des cornières (2 jambages + linteau + appui) ; b) la surface des tableaux (3 côtés, sans l'appui).`, c:`a) Par fenêtre : 2 × 1,20 + 1,20 + 1,20 = 4,80 ml → 8 × 4,80 = **38,40 ml**.
b) Par fenêtre : 3 × 1,20 × 0,20 = 0,72 m² → 8 × 0,72 = **5,76 m²**.`},
  {t:"Chape et ragréage", d:2, e:`Un plateau de bureaux de 120 m² reçoit une chape de 5 cm dosée à 400 kg/m³ puis un ragréage de 3 mm (1,5 kg/m²/mm, sacs de 25 kg). Calculer : le mortier de chape, le ciment, le sable et le nombre de sacs de ragréage.`, c:`Chape : 120 × 0,05 = **6,00 m³** → ciment 6,00 × 400 / 50 = **48 sacs** ; sable ≈ **6 m³**.
Ragréage : 120 × 3 × 1,5 = **540 kg** → 540 / 25 = 21,6 → **22 sacs**.`},
  {t:"Commande de ciment pour tous les enduits", d:2, e:`Une maison comporte 420 m² d'enduits intérieurs (0,018 m³/m²), 150 m² d'enduits extérieurs (0,020 m³/m²) et 95 m² de plafonds (0,015 m³/m²), tous dosés à 350 kg/m³. Calculer le mortier, le ciment et le sable.`, c:`Mortier : 420 × 0,018 + 150 × 0,020 + 95 × 0,015 = 7,56 + 3,00 + 1,43 = **11,99 m³**.
Ciment : 11,99 × 7 = 83,9 → **84 sacs** ; sable ≈ **12 m³**.`}
 ],
 quiz:[
  {q:"Une cloison enduite des deux côtés compte :", o:["Deux surfaces","Une surface","Zéro","Le volume"], r:0, e:"Une par face."},
  {q:"Les tableaux sont :", o:["Les retours d'enduit autour des baies","Les plans de l'architecte","Les devis","Les peintures"], r:0, e:"Dans l'épaisseur du mur."},
  {q:"La surface d'une façade se calcule avec :", o:["Le périmètre extérieur","Le périmètre à l'axe","Le périmètre intérieur","La diagonale"], r:0, e:"L'enduit est sur la face extérieure."},
  {q:"Consommation d'un ragréage de 3 mm sur 10 m² (1,5 kg/m²/mm) :", o:["45 kg","4,5 kg","450 kg","15 kg"], r:0, e:"10 × 3 × 1,5."},
  {q:"Un mortier dosé à 350 kg/m³ demande par m³ :", o:["7 sacs de ciment","3 sacs","10 sacs","1 sac"], r:0, e:"350 / 50."}
 ]},
{id:"metre-3", niv:2, titre:"Métré du béton armé d'élévation : bétons et coffrages", duree:60, contenu:`## Les éléments en béton armé
| Élément | Béton (m³) | Coffrage (m²) |
|---|---|---|
| Poteau a × b, hauteur h | Nb × a × b × h | Nb × 2 (a + b) × h |
| Poteau circulaire Ø D | Nb × π D²/4 × h | Nb × π D × h |
| Poutre b × retombée r, longueur entre nus L | b × r × L | (2 r + b) × L |
| Chaînage b × h sur maçonnerie | b × h × L | 2 h × L (fond posé sur le mur) |
| Linteau b × h, longueur l + 2 × 0,20 | b × h × L | (2 h + b) × L |
| Dalle pleine d'épaisseur e | Surface × e − trémies | Sous-face + rives |
| Voile d'épaisseur e | L × H × e − ouvertures | 2 × L × H − ouvertures + tableaux |

## Les conventions pour éviter les doubles comptes
Le marché fixe une convention ; la plus courante :
- les **poteaux** sont comptés du dessus de la dalle (ou du dallage) jusqu'au **dessous des poutres** ou chaînages ;
- les **poutres** et **chaînages** sont comptés sur toute leur longueur à l'axe, **sous la dalle** (retombée seulement) ;
- la **dalle** est comptée sur toute la surface hors tout, ses rives comprises ;
- les trémies (escaliers, gaines) de plus de 0,5 m² sont déduites.

!fig:poutre-elevation|Poutre : retombée sous la dalle

> [!exemple] Rez-de-chaussée de la maison de 11,30 × 8,30 m (dalle pleine de 15 cm)
> | Élément | Béton | Coffrage |
> |---|---|---|
> | 12 poteaux 20 × 20 × 2,65 m | 12 × 0,04 × 2,65 = **1,27 m³** | 12 × 0,80 × 2,65 = **25,44 m²** |
> | Chaînages 15 × 20 sur 46,60 m (périmètre à l'axe + refend) | 46,60 × 0,15 × 0,20 = **1,40 m³** | 2 × 0,20 × 46,60 = **18,64 m²** |
> | 2 poutres 20 × 25 (retombée) de 4,20 m entre nus | 2 × 4,20 × 0,20 × 0,25 = **0,42 m³** | (2 × 0,25 + 0,20) × 8,40 = **5,88 m²** |
> | Linteaux 15 × 20 : 13,90 ml | 13,90 × 0,15 × 0,20 = **0,42 m³** | 13,90 × 0,55 = **7,65 m²** |
> | Dalle 15 cm : 11,30 × 8,30 m | 93,79 × 0,15 = **14,07 m³** | sous-face 88,00 − 1,68 = 86,32 ; rives 39,20 × 0,15 = 5,88 → **92,20 m²** |
> | **Total** | **17,58 m³** | **149,81 m²** |
> Contrôles : coffrage / béton = 149,81 / 17,58 = **8,5 m²/m³** ; béton / surface de plancher = 17,58 / 93,79 = **0,19 m³/m²** : valeurs habituelles pour une maison à dalle pleine.

## Les ratios de contrôle
| Ratio | Valeur courante |
|---|---|
| Coffrage / béton : poteaux | 10 à 20 m²/m³ |
| Coffrage / béton : poutres | 8 à 12 m²/m³ |
| Coffrage / béton : dalle pleine 15 cm | ≈ 6,7 m²/m³ |
| Béton d'élévation par m² de plancher (bâtiment courant) | 0,20 à 0,35 m³/m² |
Un écart important signale souvent un oubli ou une erreur d'unité.

## Le coffrage dans les prix
Dans certains bordereaux, le coffrage est **inclus** dans le prix du m³ de béton armé (« coffrage compris ») ; dans d'autres, il fait l'objet d'un article séparé en m². Il faut lire attentivement le libellé pour ne pas le compter deux fois… ou l'oublier.

> [!astuce] Les escaliers, acrotères et ouvrages divers
> - Escalier : paillasse (longueur inclinée × largeur × épaisseur) + marches (triangles) + paliers (chapitre « Planchers et escaliers ») ;
> - Acrotère : ml (ou m³), avec son coffrage deux faces ;
> - Poteaux de clôture, raidisseurs : comme des poteaux.

> [!retenir]
> - Poteaux jusqu'au dessous des poutres ; poutres = retombée sous dalle ; dalle hors tout.
> - Coffrage = surfaces de béton en contact avec le moule.
> - Vérifier les ratios coffrage/béton et béton/m² de plancher.`,
 exercices:[
  {t:"Poteaux d'un R+1", d:1, e:`Un bâtiment R+1 compte 16 poteaux 25 × 25 cm par niveau, de 2,80 m de hauteur chacun. Calculer le béton et le coffrage des poteaux.`, c:`Béton : 2 × 16 × 0,25 × 0,25 × 2,80 = **5,60 m³**.
Coffrage : 2 × 16 × (4 × 0,25) × 2,80 = **89,60 m²** (ratio 16 m²/m³).`},
  {t:"Poutre continue", d:2, e:`Une poutre 20 × 50 cm de 13,25 m hors tout repose sur 4 poteaux 25 × 25 ; la dalle fait 15 cm. Calculer la longueur entre nus, le béton de la retombée et son coffrage.`, c:`Longueur entre nus : 13,25 − 4 × 0,25 = **12,25 m**.
Retombée : 0,50 − 0,15 = 0,35 m → béton : 12,25 × 0,20 × 0,35 = **0,86 m³**.
Coffrage : (2 × 0,35 + 0,20) × 12,25 = **11,03 m²**.`},
  {t:"Linteaux", d:1, e:`22,50 ml de linteaux 20 × 20 cm dans des murs de 20. Calculer le béton et le coffrage (deux joues + fond).`, c:`Béton : 22,50 × 0,20 × 0,20 = **0,90 m³**.
Coffrage : 22,50 × (2 × 0,20 + 0,20) = **13,50 m²**.`},
  {t:"Dalle avec trémie", d:2, e:`Dalle pleine de 16 cm : 9,50 × 7,20 m hors tout (murs de 15 cm), trémie d'escalier de 2,60 × 1,20 m. Calculer le béton et le coffrage (sous-face entre murs, rives extérieures et rives de trémie).`, c:`Béton : (9,50 × 7,20 − 2,60 × 1,20) × 0,16 = (68,40 − 3,12) × 0,16 = **10,44 m³**.
Coffrage : sous-face (9,20 × 6,90 − 3,12) = 60,36 m² ; rives extérieures 2 × (9,50 + 7,20) × 0,16 = 5,34 m² ; rives de trémie 2 × (2,60 + 1,20) × 0,16 = 1,22 m² → **66,92 m²**.`},
  {t:"Contrôler un métré par les ratios", d:3, e:`Un métré de gros œuvre annonce, pour un immeuble de 4 niveaux de 250 m² chacun : 95 m³ de béton d'élévation et 380 m² de coffrage. Ces chiffres sont-ils plausibles ?`, c:`Surface de plancher : 4 × 250 = 1 000 m² → béton : 95 / 1 000 = **0,095 m³/m²**, très inférieur à la fourchette 0,20 – 0,35 : un poste a probablement été oublié (les dalles ?).
Coffrage : 380 / 95 = **4 m²/m³**, également trop faible (attendu 6 à 12). Il faut reprendre le métré, en commençant par vérifier les dalles et les poutres.`}
 ],
 quiz:[
  {q:"Coffrage d'un poteau 20 × 20 de 3 m :", o:["2,40 m²","0,12 m²","1,20 m²","0,80 m²"], r:0, e:"0,80 × 3."},
  {q:"La retombée d'une poutre 20 × 40 sous une dalle de 15 cm vaut :", o:["25 cm","40 cm","55 cm","15 cm"], r:0, e:"40 − 15."},
  {q:"Dans la convention courante, les poteaux s'arrêtent :", o:["Sous les poutres","Au-dessus de la dalle","Au faîtage","Au milieu de la poutre"], r:0, e:"Pour ne pas compter les nœuds deux fois."},
  {q:"Le ratio coffrage/béton d'une dalle pleine de 15 cm est d'environ :", o:["6,7 m²/m³","20 m²/m³","1 m²/m³","50 m²/m³"], r:0, e:"1 / 0,15."},
  {q:"Le coffrage d'un chaînage posé sur un mur comprend :", o:["Les deux joues seulement","Les joues et le fond","Rien","Le fond seulement"], r:0, e:"Le mur sert de fond."}
 ]},
{id:"metre-14", niv:2, titre:"Métré des aciers : nomenclatures, poids et commandes", duree:60, contenu:`## Le poids des armatures
| Ø (mm) | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 25 |
|---|---|---|---|---|---|---|---|---|
| kg/m | 0,222 | 0,395 | 0,617 | 0,888 | 1,208 | 1,578 | 2,466 | 3,853 |
Formule : **poids (kg/m) ≈ 0,00617 × Ø²** (Ø en mm), qui vient de la masse volumique de l'acier (7 850 kg/m³). Les barres sont livrées en longueur de **12 m**.

## La nomenclature (bordereau des aciers)
À partir des plans de ferraillage, on établit pour chaque élément :
| Repère | Forme | Ø | Nombre | Longueur développée | Longueur totale | Poids |
|---|---|---|---|---|---|---|
La **longueur développée** est la longueur de la barre avant façonnage :
- barre droite : longueur de l'élément − 2 enrobages ;
- + **ancrages** (retours, crochets) : environ 10 à 20 Ø par crochet, ou longueur de scellement 40 Ø ;
- + **recouvrements** quand une barre est trop longue ou pour les attentes : 40 à 50 Ø ;
- **cadres et étriers** : périmètre intérieur (section − 2 enrobages) + 2 crochets (≈ 2 × 10 Ø).
Nombre de cadres = longueur / espacement + 1 (arrondi au-dessus).

!fig:poutre-coupe|Coupe d'une poutre : armatures et cadres

> [!exemple] Poutre 20 × 40, longueur 4,40 m, enrobage 2,5 cm
> | Repère | Ø | Nombre | L. unitaire | L. totale | kg/m | Poids |
> |---|---|---|---|---|---|---|
> | 1 – aciers inférieurs (retours 2 × 0,20) | HA14 | 3 | 4,35 + 0,40 = 4,75 m | 14,25 m | 1,208 | **17,21 kg** |
> | 2 – aciers supérieurs (retours 2 × 0,15) | HA10 | 2 | 4,35 + 0,30 = 4,65 m | 9,30 m | 0,617 | **5,74 kg** |
> | 3 – cadres 15 × 35, e = 15 cm | HA6 | 30 | 1,00 + 0,12 = 1,12 m | 33,60 m | 0,222 | **7,46 kg** |
> | **Total** | | | | | | **30,41 kg** |
> Béton : 4,40 × 0,20 × 0,40 = 0,352 m³ → ratio **86 kg/m³** (plausible pour une poutre).
> Nombre de cadres : 4,35 / 0,15 + 1 = 30.

## Les ratios d'acier (estimation rapide)
| Élément | kg/m³ de béton |
|---|---|
| Semelles | 30 à 50 |
| Longrines, chaînages | 70 à 100 |
| Poteaux | 100 à 150 |
| Poutres | 90 à 130 |
| Dalles pleines | 70 à 90 |
| Voiles | 40 à 70 |
| Escaliers | 80 à 100 |
On utilise les ratios en phase d'estimation, la nomenclature pour les commandes et le paiement.

## Les treillis soudés
Les dallages, dalles minces et tables de compression reçoivent des **treillis soudés** en panneaux (ex. 2,40 × 6,00 m). On les compte en m² de surface couverte **majorée des recouvrements** (≈ 10 %), ou en nombre de panneaux : surface / surface utile d'un panneau (recouvrement déduit).

## La commande et les chutes
- Commander par **diamètre**, en barres de 12 m, en optimisant les coupes (deux barres de 5,90 m dans une barre de 12 m, mais une seule de 6,10 m !) ;
- Prévoir **5 à 10 %** de chutes et recouvrements imprévus ;
- Ajouter le **fil à ligaturer** (≈ 1 % du poids d'acier) et les **cales** d'enrobage.

> [!attention] Erreurs fréquentes
> - Oublier les attentes (recouvrements avec le niveau supérieur) ;
> - Compter les cadres sans le « + 1 » ;
> - Confondre longueur de l'élément et longueur développée.

> [!retenir]
> - kg/m ≈ 0,00617 Ø² ; HA10 = 0,617 kg/m ; HA12 = 0,888 kg/m.
> - Nomenclature : nombre × longueur développée × poids au mètre.
> - Cadres : L/e + 1 ; recouvrement ≈ 40 Ø.
> - Ratios pour estimer ; commande en barres de 12 m + 5 à 10 %.`,
 exercices:[
  {t:"Poids au mètre", d:1, e:`Calculer avec la formule le poids au mètre d'un HA8, d'un HA16 et d'un HA20, puis le poids de 75 m de HA12.`, c:`HA8 : 0,00617 × 64 = **0,395 kg/m** ; HA16 : 0,00617 × 256 = **1,58 kg/m** ; HA20 : 0,00617 × 400 = **2,47 kg/m**.
75 m de HA12 : 75 × 0,888 = **66,6 kg**.`},
  {t:"Nomenclature d'un poteau", d:2, e:`Poteau 20 × 20 de 2,80 m : 4 HA12 avec attentes de 40 Ø pour le niveau supérieur ; cadres HA6 de 15 × 15 (+ 2 crochets de 6 cm), espacés de 15 cm. Enrobage 2,5 cm. Établir la nomenclature, puis le poids pour 12 poteaux.`, c:`Attente : 40 × 0,012 = 0,48 m → barres de 2,80 + 0,48 = 3,28 m.
HA12 : 4 × 3,28 = 13,12 m × 0,888 = **11,65 kg**.
Cadres : 2,80 / 0,15 + 1 = 19,7 → **20 cadres** de 4 × 0,15 + 0,12 = 0,72 m → 14,40 m × 0,222 = **3,20 kg**.
Un poteau : **14,85 kg** ; 12 poteaux : **178 kg** (ratio : 14,85 / 0,112 = 133 kg/m³).`},
  {t:"Grillage d'une semelle", d:2, e:`Semelle 1,00 × 1,00 × 0,25 m armée d'un grillage HA10 espacé de 15 cm dans les deux sens, enrobage 2,5 cm de chaque côté, retours de 15 cm à chaque extrémité. Calculer le poids d'acier d'une semelle, puis de 10 semelles, et le ratio.`, c:`Barres par sens : 0,95 / 0,15 + 1 = 7,3 → **8 barres** ; longueur : 0,95 + 2 × 0,15 = **1,25 m**.
Total : 2 × 8 × 1,25 = 20,0 m × 0,617 = **12,34 kg** par semelle → **123,4 kg** pour 10.
Ratio : 12,34 / 0,25 = **49 kg/m³** (dans la fourchette 30 – 50).`},
  {t:"Panneaux de treillis soudé", d:1, e:`Une dalle de 88 m² reçoit un treillis en panneaux de 2,40 × 6,00 m, avec 20 cm de recouvrement dans chaque sens. Combien de panneaux faut-il ?`, c:`Surface utile d'un panneau : (2,40 − 0,20) × (6,00 − 0,20) = 2,20 × 5,80 = **12,76 m²**.
Nombre : 88 / 12,76 = 6,9 → **7 panneaux** (plus éventuellement 1 pour les coupes selon la forme de la dalle).`},
  {t:"Optimiser la coupe", d:3, e:`Il faut 30 barres HA14 de 4,75 m. a) Combien de barres de 12 m commander ? b) Quel pourcentage de chute ? c) Que se passerait-il avec des barres de 6,10 m ?`, c:`a) Dans 12 m on coupe 2 barres de 4,75 m (9,50 m), chute 2,50 m → 30 / 2 = **15 barres de 12 m**.
b) Commandé : 15 × 12 = 180 m ; utilisé : 30 × 4,75 = 142,5 m → chute = 37,5 / 180 = **21 %** (on réutilise les chutes de 2,50 m pour des chapeaux ou des petites barres).
c) Une barre de 6,10 m par barre de 12 m (deux feraient 12,20 m) → 30 barres de 12 m, près de 50 % de chute : on ajusterait le plan (recouvrement) pour descendre à 6,00 m.`}
 ],
 quiz:[
  {q:"Poids d'un mètre de HA10 :", o:["0,617 kg","0,888 kg","1,578 kg","0,222 kg"], r:0, e:"0,00617 × 100."},
  {q:"Nombre de cadres sur 3,00 m espacés de 20 cm :", o:["16","15","20","60"], r:0, e:"3,00/0,20 + 1."},
  {q:"Un recouvrement courant vaut environ :", o:["40 Ø","2 Ø","400 Ø","1 m quel que soit Ø"], r:0, e:"Selon la nuance et le béton."},
  {q:"Les barres d'acier sont généralement livrées en longueur de :", o:["12 m","3 m","50 m","1 m"], r:0, e:"Optimiser les coupes."},
  {q:"La nomenclature sert surtout :", o:["À la commande et au paiement des aciers","À calculer la TVA","À dessiner les façades","À choisir la peinture"], r:0, e:"Quantités précises par diamètre."}
 ]},
{id:"metre-15", niv:2, titre:"Métré des planchers à corps creux, dalles et escaliers", duree:55, contenu:`## Le plancher à corps creux (hourdis)
C'est le plancher le plus courant en Côte d'Ivoire : des **poutrelles** préfabriquées (ou coulées sur chantier) espacées d'environ **60 cm**, des **entrevous** (hourdis) en béton posés entre elles, un **treillis soudé** et une **dalle de compression** de 4 à 5 cm coulée sur place. Désignation : **16 + 4** (hourdis de 16 cm + table de 4 cm), 20 + 5…

!fig:hourdis|Plancher à corps creux : poutrelles, entrevous et table de compression

## Les règles de mesure
- **Unité** : le m² de plancher (surface entre appuis, hors poutres et chaînages comptés à part), ou chaque composant séparément.
- **Poutrelles** : nombre × (portée libre + 2 appuis de 10 cm) en ml.
- **Entrevous** : nombre de rangées × nombre d'entrevous par rangée (portée / longueur d'un entrevous).
- **Béton de 2e phase** (nervures + table) : ≈ **0,07 m³/m²** pour un 16 + 4.
- **Treillis soudé** : surface × 1,10.

| Composant (16 + 4) | Quantité par m² |
|---|---|
| Entrevous 50 × 20 × 16 | 8,3 u |
| Poutrelles | 1,7 ml |
| Béton de 2e phase | 0,07 m³ (≈ 0,5 sac de ciment) |
| Treillis soudé | 1,10 m² |

> [!exemple] Plancher de 11,00 × 8,00 m en deux travées de 3,90 m
> - Poutrelles : 11,00 / 0,60 = 18,3 → **19 poutrelles par travée** de 3,90 + 0,20 = 4,10 m → 2 × 19 × 4,10 = **155,8 ml** (1,77 ml/m²)
> - Entrevous : 88 × 8,3 = 730 + 3 % de casse → **752 entrevous**
> - Béton : 88 × 0,07 = **6,16 m³** → ciment 43 sacs ; sable 2,46 m³ ; gravier 4,93 m³
> - Treillis : 88 × 1,10 = **96,8 m²**
> - Les chaînages et la poutre centrale sont métrés à part (béton armé).

## Les dalles pleines
Béton : surface × épaisseur − trémies ; coffrage : sous-face + rives ; aciers par nomenclature ou ratio (70 à 90 kg/m³). Une dalle pleine est plus lourde et plus chère qu'un corps creux de même portée, mais indispensable pour les balcons en console, les dalles de grande portée bidirectionnelles, les locaux humides lourds…

## Les escaliers
Un escalier droit se décompose en :
- **paillasse** : longueur inclinée × largeur × épaisseur ;
- **marches** : triangles de giron × hauteur / 2 × largeur (une par contremarche, approximation courante) ;
- **paliers** : surface × épaisseur ;
- **coffrage** : sous-face de paillasse et de palier, contremarches, joues latérales ;
- **aciers** : ratio 80 à 100 kg/m³ ou nomenclature.

!fig:escalier|Escalier droit : giron, hauteur de marche, paillasse

> [!exemple] Escalier de 1,00 m : 18 contremarches de 17 cm, 17 girons de 28 cm, paillasse 15 cm, palier 1,00 × 1,20 m
> - Longueur inclinée : √(4,76² + 3,06²) = 5,66 m → paillasse 5,66 × 1,00 × 0,15 = **0,85 m³**
> - Marches : 18 × 0,28 × 0,17 / 2 × 1,00 = **0,43 m³** ; palier : 1,00 × 1,20 × 0,15 = **0,18 m³** → **1,46 m³**
> - Coffrage : sous-face 5,66 + contremarches 18 × 0,17 = 3,06 + joues 2 × (5,66 × 0,15 + 0,43) = 2,55 + palier 1,20 → **12,47 m²**
> - Aciers (90 kg/m³) : **131 kg**

> [!astuce] Comparer les solutions
> Le métré permet de comparer objectivement deux variantes : dalle pleine ou corps creux, escalier en béton ou métallique… en quantités **et** en coût (chapitre « BPU et DQE »).

> [!retenir]
> - Corps creux 16 + 4 : 8,3 entrevous, 1,7 ml de poutrelles, 0,07 m³ de béton et 1,10 m² de treillis par m².
> - Poutrelles : portée + 2 × 0,10 m d'appui.
> - Escalier = paillasse + marches + paliers ; coffrage = sous-faces + contremarches + joues.`,
 exercices:[
  {t:"Matériaux d'un plancher 16 + 4", d:1, e:`Plancher à corps creux 16 + 4 de 120 m². Calculer les entrevous (+ 3 %), les poutrelles, le béton de 2e phase, le ciment, le sable, le gravier et le treillis.`, c:`Entrevous : 120 × 8,3 × 1,03 = 1 025,9 → **1 026** ; poutrelles : 120 × 1,7 = **204 ml**.
Béton : 120 × 0,07 = **8,40 m³** → ciment 8,40 × 7 = **58,8 → 59 sacs** ; sable **3,36 m³** ; gravier **6,72 m³**.
Treillis : 120 × 1,10 = **132 m²**.`},
  {t:"Calepinage d'une travée", d:2, e:`Une travée de plancher a une portée libre de 4,50 m et une largeur de 6,20 m. Poutrelles à 60 cm d'entraxe, appuis de 10 cm de chaque côté ; entrevous de 20 cm de long. Calculer le nombre et la longueur des poutrelles, puis le nombre d'entrevous (11 rangées). Comparer avec le ratio de 8,3/m².`, c:`Poutrelles : 6,20 / 0,60 = 10,3 → **10 poutrelles** de 4,50 + 0,20 = **4,70 m** → 47,0 ml.
Entrevous par rangée : 4,50 / 0,20 = 22,5 → 23 ; 11 rangées → **253 entrevous**.
Ratio : 4,50 × 6,20 = 27,90 m² × 8,3 = **232** : le calepinage réel donne plus à cause des coupes en rive ; pour la commande, on retient le calepinage.`},
  {t:"Escalier à deux volées", d:3, e:`Escalier de 1,10 m de large à deux volées identiques : chacune 9 contremarches de 17 cm et 8 girons de 28 cm, paillasse 14 cm ; palier intermédiaire de 2,30 × 1,10 m, épaisseur 14 cm. Calculer le béton, le ciment (350 kg/m³) et les aciers (90 kg/m³).`, c:`Une volée : hauteur 9 × 0,17 = 1,53 m ; projection 8 × 0,28 = 2,24 m ; longueur inclinée √(1,53² + 2,24²) = **2,71 m**.
Paillasse : 2,71 × 1,10 × 0,14 = 0,418 m³ ; marches : 9 × 0,28 × 0,17 / 2 × 1,10 = 0,236 m³.
Deux volées : 2 × 0,654 = 1,307 m³ ; palier : 2,30 × 1,10 × 0,14 = 0,354 m³ → **1,66 m³**.
Ciment : 1,66 × 7 = 11,6 → **12 sacs** ; aciers : 1,66 × 90 = **149 kg**.`},
  {t:"Dalle pleine ou corps creux ?", d:2, e:`Prix indicatifs : béton armé (coffrage compris) 185 000 F/m³, acier 1 000 F/kg, plancher corps creux 16 + 4 complet 28 000 F/m². Comparer le coût au m² d'une dalle pleine de 15 cm armée à 80 kg/m³ et du plancher à corps creux.`, c:`Dalle pleine : béton 0,15 × 185 000 = 27 750 F ; acier 0,15 × 80 × 1 000 = 12 000 F → **39 750 F/m²**.
Corps creux : **28 000 F/m²**, soit environ **30 % moins cher**, et plus léger (≈ 2,8 kN/m² contre 3,75 kN/m²). La dalle pleine se justifie pour les consoles, les grandes portées dans deux directions ou les charges lourdes.`},
  {t:"Coffrage et aciers d'un palier", d:1, e:`Palier de repos 2,40 × 1,20 m, épaisseur 15 cm, posé sur deux murs (rives libres sur les deux autres côtés de 1,20 m). Calculer le béton, le coffrage (sous-face + rives libres) et l'acier (80 kg/m³).`, c:`Béton : 2,40 × 1,20 × 0,15 = **0,432 m³**.
Coffrage : sous-face 2,88 m² + rives 2 × 1,20 × 0,15 = 0,36 m² → **3,24 m²**.
Acier : 0,432 × 80 = **34,6 kg**.`}
 ],
 quiz:[
  {q:"Dans un plancher 16 + 4, le « 4 » désigne :", o:["L'épaisseur de la table de compression","Le nombre de poutrelles","L'entraxe","Le nombre de travées"], r:0, e:"Dalle coulée sur les entrevous."},
  {q:"Nombre d'entrevous par m² (16 + 4 courant) :", o:["≈ 8,3","≈ 12,5","≈ 25","≈ 2"], r:0, e:"1 / (0,60 × 0,20)."},
  {q:"La longueur d'une poutrelle vaut :", o:["Portée libre + 2 appuis","Portée libre seule","Largeur de la pièce","2 × portée"], r:0, e:"Appuis de 10 cm environ."},
  {q:"Le béton d'un escalier comprend :", o:["Paillasse, marches et paliers","Seulement les marches","Seulement la rampe","Rien"], r:0, e:"Trois composantes."},
  {q:"Pour une petite portée courante, le plancher le plus économique est en général :", o:["Le corps creux","La dalle pleine de 25 cm","Le plancher métallique","Le plancher bois massif"], r:0, e:"Moins de béton et de coffrage."}
 ]},
{id:"metre-16", niv:2, titre:"Métré des charpentes, couvertures et étanchéités", duree:55, contenu:`## La toiture inclinée
Elle comprend la **charpente** (fermes, pannes, chevrons, liteaux ou charpente métallique) et la **couverture** (tôles bac aluminium, tôles ondulées, tuiles), plus les accessoires (faîtières, rives, gouttières, descentes).
| Ouvrage | Unité | Mesure |
|---|---|---|
| Charpente bois (forfait au m²) | m² | Surface couverte (projection ou rampant selon le bordereau) |
| Fermes | u | Par type |
| Pannes, chevrons, liteaux | ml (ou m³ de bois) | Longueur × nombre de lignes |
| Charpente métallique | kg | Nomenclature des profilés |
| Couverture | m² | **Surface en rampant**, débords compris |
| Faîtage, rives, arêtiers, noues | ml | Longueurs réelles |
| Gouttières, chéneaux | ml | Longueur des égouts |
| Descentes d'eaux pluviales | ml (+ u pour les coudes, naissances) | Hauteur × nombre |
| Faux plafond sous toiture | m² | Surface des pièces |

## La surface de couverture
$$ Surface = 2 × rampant × longueur (toiture à deux pans)      rampant = projection × √(1 + p²)
> [!exemple] Bâtiment 10 × 8 m, débords 0,50 m, pente 20 %
> - Rampant : 4,50 × √1,04 = **4,59 m** ; surface : 2 × 4,59 × 11,00 = **100,96 m²**
> - Tôles de largeur utile 1,00 m : 11 par pan → **22 tôles** de 4,60 m (longueur commandée sur mesure)
> - Faîtière : **11,00 ml** ; gouttières : 2 × 11,00 = **22,00 ml**
> - Pannes à 1,00 m d'entraxe : 6 lignes par pan × 11,00 m = **132 ml** (en 8 × 16 : 132 × 0,08 × 0,16 = **1,69 m³** de bois)
> - Fixations (tire-fonds ou crochets avec rondelles d'étanchéité) : ≈ 6 par m² → **606**

## Les eaux pluviales
En climat tropical, les averses sont violentes : règle pratique, **1 cm² de section de descente par m² de toiture** (en projection), avec **au moins une descente pour 80 m²** environ. Une descente Ø 100 offre 78,5 cm² ; une Ø 125, 122,7 cm².

## La toiture-terrasse
| Ouvrage | Unité | Mesure |
|---|---|---|
| Forme de pente (béton léger ou mortier) | m² ou m³ | Surface × épaisseur moyenne |
| Étanchéité multicouche (ou membrane) | m² | Surface + **relevés** (périmètre × hauteur, ≥ 15 cm) |
| Protection (gravillons, dallettes, autoprotection) | m² | Surface |
| Acrotères | ml (ou m³ et m²) | Périmètre |
| Entrées d'eau pluviale, trop-pleins | u | Nombre |
Épaisseur moyenne d'une forme de pente : (épaisseur minimale + épaisseur maximale) / 2 ; épaisseur maximale = épaisseur minimale + longueur d'écoulement × pente.
> [!exemple] Terrasse de 11,00 × 8,00 m entre acrotères, deux versants, pente 1,5 %
> - Longueur d'écoulement : 4,00 m → épaisseur 4 cm au bas, 4 + 400 × 0,015 = 10 cm au faîte → moyenne **7 cm** → forme : 88 × 0,07 = **6,16 m³**
> - Étanchéité : 88 m² + relevés 2 × (11,00 + 8,00) × 0,20 = 7,60 m² → **95,60 m²**

!fig:dalle-coupe|Coupe d'une toiture-terrasse

> [!attention] Points à ne pas oublier
> - Les **débords** de toiture et les **avancées** (auvents, préaux) ;
> - Les **recouvrements** des tôles (1 onde latéralement, 15 à 20 cm en long) si les tôles ne sont pas commandées à la longueur ;
> - Les relevés d'étanchéité, les naissances et les crapaudines ;
> - Le traitement du bois contre les termites (forfait ou m³).

> [!retenir]
> - Couverture en m² de **rampant**, débords compris.
> - Pannes et chevrons en ml (ou m³), charpente métallique en kg.
> - Eaux pluviales : ≈ 1 cm² de descente par m² de toiture.
> - Terrasse : forme de pente (épaisseur moyenne), étanchéité + relevés.`,
 exercices:[
  {t:"Couverture d'une maison", d:2, e:`Maison de 12,00 × 9,00 m, débords de 0,60 m, deux pans à 25 %, tôles de largeur utile 1,00 m. Calculer le rampant, la surface de couverture, le nombre de tôles, la faîtière, les gouttières et les fixations (6/m²).`, c:`Rampant : 5,10 × √(1 + 0,0625) = **5,26 m** ; surface : 2 × 5,26 × 13,20 = **138,78 m²**.
Tôles : 13,20 / 1,00 → 14 par pan → **28 tôles** de 5,30 m environ.
Faîtière : **13,20 ml** ; gouttières : 2 × 13,20 = **26,40 ml**.
Fixations : 138,78 × 6 = 832,7 → **833**.`},
  {t:"Descentes d'eaux pluviales", d:2, e:`Une toiture de 160 m² en projection doit être équipée de descentes. Combien de descentes Ø 100 ou Ø 125 faut-il (règle de 1 cm²/m², au moins une descente par 80 m²) ?`, c:`Section nécessaire : **160 cm²**.
Ø 100 : 78,5 cm² → 160 / 78,5 = 2,04 → **3 descentes** (2 seraient juste insuffisantes).
Ø 125 : 122,7 cm² → 2 descentes = 245 cm² ✔ et 160 / 2 = 80 m² par descente ✔ → **2 descentes Ø 125**.`},
  {t:"Forme de pente", d:2, e:`Terrasse de 14,00 × 9,00 m entre acrotères ; deux versants vers les grandes rives (longueur d'écoulement 4,50 m), pente 1,5 %, épaisseur minimale 4 cm. Calculer l'épaisseur moyenne, le volume et le ciment si le mortier est dosé à 250 kg/m³.`, c:`Épaisseur maximale : 4 + 450 × 0,015 = **10,75 cm** ; moyenne : (4 + 10,75) / 2 = **7,38 cm**.
Volume : 126 × 0,0738 = **9,29 m³**.
Ciment : 9,29 × 250 / 50 = **46,5 sacs** (47).`},
  {t:"Étanchéité", d:1, e:`Même terrasse (126 m², périmètre intérieur 46 m), relevés de 25 cm. Calculer la surface d'étanchéité, puis la quantité de membrane à commander avec 10 % de recouvrements.`, c:`Relevés : 46 × 0,25 = **11,50 m²** → surface : 126 + 11,50 = **137,50 m²**.
Commande : 137,50 × 1,10 = **151,25 m²** de membrane (par couche).`},
  {t:"Pannes en bois", d:2, e:`Une toiture à deux pans de 13,20 m de long comporte 7 lignes de pannes par pan, en section 8 × 16 cm. Calculer la longueur de pannes et le volume de bois à commander avec 10 % de chutes.`, c:`Longueur : 2 × 7 × 13,20 = **184,80 ml**.
Volume : 184,80 × 0,08 × 0,16 = **2,37 m³** → avec chutes : **2,60 m³**.`}
 ],
 quiz:[
  {q:"La couverture se mesure en :", o:["m² de rampant","m² de projection seulement","ml","kg"], r:0, e:"Surface réelle des tôles."},
  {q:"Rampant d'un pan de 4,00 m en projection à 25 % :", o:["4,12 m","4,00 m","5,00 m","3,88 m"], r:0, e:"4 × √1,0625."},
  {q:"Les relevés d'étanchéité se comptent :", o:["En plus de la surface de la terrasse","Jamais","À la place de la terrasse","En kg"], r:0, e:"Périmètre × hauteur."},
  {q:"Une charpente métallique se mesure en :", o:["kg","m³","u","ml seulement"], r:0, e:"Poids des profilés."},
  {q:"Section d'une descente Ø 100 :", o:["78,5 cm²","100 cm²","31,4 cm²","314 cm²"], r:0, e:"π × 10²/4."}
 ]},
{id:"metre-5", niv:2, titre:"Métré des revêtements de sols et de murs", duree:50, contenu:`## Les revêtements courants
| Ouvrage | Unité | Mesure |
|---|---|---|
| Carrelage de sol (grès cérame, granito…) | m² | Surface entre murs **finis** (enduits déduits) |
| Plinthes | ml | Périmètre de la pièce − largeurs des portes |
| Faïence murale | m² | Périmètre × hauteur − ouvertures + crédences |
| Seuils, appuis, nez de marche | ml | Longueurs |
| Marches et contremarches carrelées | ml ou u | Nombre × largeur |
| Chape de pose ou ragréage | m² | Surface |
| Revêtements souples (PVC, moquette) | m² | Surface + 5 % |

## Chutes et casse
On commande plus que la surface mesurée :
| Pose | Majoration |
|---|---|
| Pose droite, grands locaux | 5 % |
| Pose droite, petites pièces, nombreuses découpes | 8 à 10 % |
| Pose en diagonale | 12 à 15 % |
| Plinthes | 5 % |
Le nombre de **cartons** = surface majorée / surface d'un carton (ex. 1,44 m² pour 9 carreaux de 40 × 40), arrondi au carton supérieur.

## La pose et ses matériaux
- **Pose collée** sur chape ou dallage dressé : mortier-colle ≈ **5 kg/m²** (sacs de 25 kg), joint ≈ **0,3 kg/m²** ;
- **Pose scellée** traditionnelle : lit de mortier de 3 cm dosé à 300 kg/m³ (≈ 0,03 m³/m², soit 0,18 sac), plus une barbotine de ciment ;
- **Faïence** : colle ≈ 3 à 4 kg/m².

> [!exemple] Carrelage d'un appartement F3 (dimensions entre enduits)
> | Pièce | Dimensions | Sol (m²) | Portes (m) | Plinthes (ml) |
> |---|---|---|---|---|
> | Séjour | 5,57 × 4,17 | 23,23 | 0,90 + 0,80 | 17,78 |
> | Chambre 1 | 3,57 × 3,17 | 11,32 | 0,80 | 12,68 |
> | Chambre 2 | 3,27 × 3,17 | 10,37 | 0,80 | 12,08 |
> | Couloir | 4,00 × 1,10 | 4,40 | 4 × 0,80 | 7,00 |
> | Cuisine | 2,77 × 2,47 | 6,84 | — | (faïence) |
> | Salle d'eau | 2,25 × 2,05 | 4,61 | — | (faïence) |
> | **Total** | | **60,76** | | **49,54** |
> - Carreaux : 60,76 × 1,08 = 65,63 m² → cartons de 1,44 m² : 45,6 → **46 cartons**
> - Mortier-colle : 60,76 × 5 = 304 kg → **13 sacs** de 25 kg ; joint : **18 kg**
> - Plinthes : 49,54 × 1,05 = **52 ml**

## La faïence
> [!exemple] Salle d'eau de 2,25 × 2,05 m (entre enduits), faïence sur 2,00 m de haut
> Périmètre : 2 × (2,25 + 2,05) = 8,60 m → 8,60 × 2,00 = 17,20 m² − porte 0,70 × 2,00 (1,40) − fenêtre 0,60 × 0,60 (0,36) = **15,44 m²** ; + 8 % → **16,7 m²** à commander.
Dans une cuisine, on compte la **crédence** au-dessus du plan de travail : longueur × 0,60 m (ou toute hauteur si le marché le prévoit).

> [!astuce] Le calepinage
> Pour les grands carreaux (60 × 60 et plus) ou les poses décoratives, un **calepinage** (plan de pose) permet de compter exactement les carreaux entiers et coupés, et de placer les coupes là où elles se voient le moins.

> [!retenir]
> - Sol : surface entre murs finis + 5 à 15 % ; cartons arrondis au supérieur.
> - Plinthes : périmètre − portes (ml).
> - Faïence : périmètre × hauteur − ouvertures + crédences.
> - Colle ≈ 5 kg/m², joint ≈ 0,3 kg/m².`,
 exercices:[
  {t:"Carrelage en diagonale", d:1, e:`Salon de 6,00 × 4,50 m carrelé en 60 × 60 posé en diagonale (15 % de chutes), cartons de 1,44 m². Calculer la surface à commander, le nombre de carreaux, de cartons, de sacs de colle (5 kg/m², sacs de 25 kg) et de joint.`, c:`Surface : 6,00 × 4,50 = **27,00 m²** → commande 27,00 × 1,15 = **31,05 m²**.
Carreaux : 31,05 / 0,36 = 86,3 → **87 carreaux** ; cartons : 31,05 / 1,44 = 21,6 → **22 cartons**.
Colle : 27,00 × 5 = 135 kg → **5,4 → 6 sacs** ; joint : 27 × 0,3 = **8,1 kg**.`},
  {t:"Plinthes d'un étage", d:1, e:`Trois chambres de 3,40 × 3,10 m, 3,60 × 3,20 m et 4,00 × 3,50 m ont chacune une porte de 0,80 m ; la dernière a en plus une porte-fenêtre de 1,40 m. Calculer la longueur de plinthes à commander (+ 5 %).`, c:`Ch. 1 : 2 × (3,40 + 3,10) − 0,80 = **12,20 ml** ; ch. 2 : 2 × (3,60 + 3,20) − 0,80 = **12,80 ml** ; ch. 3 : 2 × (4,00 + 3,50) − 0,80 − 1,40 = **12,80 ml**.
Total : 37,80 ml × 1,05 = **39,7 ml** → 40 ml.`},
  {t:"Faïence d'une cuisine", d:2, e:`Cuisine : plan de travail en L de 3,20 + 2,60 m, crédence de 0,60 m de haut au-dessus ; mur de l'évier faïencé toute hauteur sur 1,80 m de large et 2,00 m de haut (dont une partie déjà comptée en crédence sur 1,80 m de long). Calculer la surface de faïence (+ 8 %).`, c:`Crédence : (3,20 + 2,60) × 0,60 = **3,48 m²**.
Mur de l'évier : 1,80 × 2,00 = 3,60 m², moins la partie déjà comptée en crédence : 1,80 × 0,60 = 1,08 m² → **2,52 m²**.
Total : 3,48 + 2,52 = 6,00 m² × 1,08 = **6,48 m²**.`},
  {t:"Escalier carrelé", d:2, e:`Escalier de 18 marches de 1,00 m de large (giron 30 cm avec nez, contremarche 17 cm). Calculer : la surface de carrelage des girons, celle des contremarches et la longueur de nez de marche.`, c:`Girons : 18 × 0,30 × 1,00 = **5,40 m²** ; contremarches : 18 × 0,17 × 1,00 = **3,06 m²** ; total **8,46 m²** (+ 10 % de coupes).
Nez de marche : 18 × 1,00 = **18 ml**.`},
  {t:"Pose scellée ou collée ?", d:2, e:`Pour le salon de 27 m² : a) en pose scellée (mortier 3 cm dosé à 300 kg/m³), combien de ciment et de sable ? b) En pose collée sur dallage dressé, combien de colle ? Commenter.`, c:`a) Mortier : 27 × 0,03 = **0,81 m³** → ciment 0,81 × 6 = **4,9 sacs** ; sable ≈ 0,81 m³.
b) Colle : 27 × 5 = **135 kg** (6 sacs de 25 kg).
La pose scellée rattrape les défauts de planéité mais est plus lente et plus lourde ; la pose collée exige un support bien dressé (chape ou ragréage), mais elle est rapide et adaptée aux grands formats.`}
 ],
 quiz:[
  {q:"Les chutes de carrelage en pose diagonale sont d'environ :", o:["12 à 15 %","0 %","50 %","1 %"], r:0, e:"Nombreuses coupes en biais."},
  {q:"Les plinthes se mesurent :", o:["En ml, périmètre moins portes","En m²","À l'unité","En kg"], r:0, e:"Longueur le long des murs."},
  {q:"Consommation courante de mortier-colle :", o:["≈ 5 kg/m²","≈ 50 kg/m²","≈ 0,5 kg/m²","≈ 500 kg/m²"], r:0, e:"Selon le peigne et le format."},
  {q:"La crédence est :", o:["La faïence au-dessus du plan de travail","Un type de porte","Une plinthe","Un faux plafond"], r:0, e:"Protection du mur."},
  {q:"Le nombre de cartons s'arrondit :", o:["Au carton supérieur","Au carton inférieur","À la dizaine","Jamais"], r:0, e:"On ne vend pas de demi-carton."}
 ]},
{id:"metre-17", niv:2, titre:"Métré des menuiseries, faux plafonds et peintures", duree:50, contenu:`## Les menuiseries
| Ouvrage | Unité | Remarques |
|---|---|---|
| Portes (bois, isoplanes, métalliques) | u | Par type et dimensions, huisserie et quincaillerie comprises ou non |
| Fenêtres, baies vitrées | m² ou u | Surface de baie (tableau) |
| Grilles de défense, garde-corps | m² ou kg | Selon le bordereau |
| Vitrerie | m² | Surface vitrée |
| Portails, portillons | u | Par type |
| Placards, habillages | u ou ml | Selon le cas |
On s'appuie sur la **nomenclature des menuiseries** des plans (repères P1, F1…), en vérifiant le nombre sur chaque niveau.

> [!exemple] Menuiseries d'une maison (prix indicatifs du bordereau)
> | Repère | Désignation | U | Qté | P.U. (F) | Montant (F) |
> |---|---|---|---|---|---|
> | P1 | Porte d'entrée métallique 0,90 × 2,20 | u | 1 | 250 000 | 250 000 |
> | P2 | Porte isoplane 0,80 × 2,10 + huisserie | u | 5 | 85 000 | 425 000 |
> | F1, F2 | Fenêtres aluminium + grille : 6 × 1,44 + 3 × 0,36 | m² | 9,72 | 75 000 | 729 000 |
> | | **Total menuiseries HT** | | | | **1 404 000** |

## Les grilles et ferronneries
Une grille se mesure en m² ou se pèse : poids = Σ longueurs × poids au mètre des fers (fer carré de 12 mm : 1,13 kg/m ; fer plat 30 × 5 : 1,18 kg/m).
> [!exemple] Grille 1,20 × 1,20 m
> 11 barreaux en carré de 12 de 1,20 m : 13,20 × 1,13 = 14,9 kg ; cadre en plat 30 × 5 : 4,80 × 1,18 = 5,7 kg → **20,6 kg**.

## Les faux plafonds
- **Surface** : m² des pièces (entre murs finis) ;
- **Plaques** (60 × 60, ou plaques de plâtre BA13) : surface / surface d'une plaque + 5 % ;
- **Corniches**, joints creux : ml (périmètre des pièces) ;
- **Ossature** (rails, suspentes) : souvent incluse dans le prix au m² ; trappes de visite : u.
> [!exemple] Chambre de 4,00 × 3,50 m en dalles 60 × 60
> 14 m² / 0,36 = 38,9 → + 5 % → **41 dalles** ; corniche : 2 × (4,00 + 3,50) = **15 ml**.

## Les peintures
| Support | Mesure |
|---|---|
| Murs intérieurs | Surfaces enduites (ouvertures déduites, tableaux ajoutés) |
| Plafonds | Surface des pièces |
| Façades | Surface des enduits extérieurs |
| Menuiseries bois | Surface × 2 faces (+ ≈ 10 % pour chants et huisseries) |
| Ferronneries | m² développés ou forfait par élément |
**Quantité de peinture** (litres) = surface × nombre de couches / rendement (m² par litre et par couche).
| Produit | Rendement courant |
|---|---|
| Impression (sous-couche) | 10 à 12 m²/L |
| Peinture vinylique (acrylique) intérieure | 8 à 12 m²/L/couche |
| Peinture de façade | 6 à 8 m²/L/couche |
| Glycéro / laque sur bois ou métal | 12 à 14 m²/L/couche |
> [!exemple] Peinture d'une maison
> Murs intérieurs 420 m² + plafonds 95 m² = 515 m² ; façades 150 m².
> - Intérieur : impression 515 / 12 = **43 L** ; finition 2 couches : 515 × 2 / 10 = **103 L** → 6 seaux de 20 L
> - Façades : impression 150 / 10 = **15 L** ; finition 2 couches : 150 × 2 / 8 = **37,5 L**

> [!attention] Bien distinguer
> Le métré des **surfaces** (pour le devis, en m²) et le calcul des **quantités de produit** (pour la commande, en litres ou en kg) sont deux opérations différentes.

> [!retenir]
> - Menuiseries à l'unité (portes) ou au m² (fenêtres), d'après la nomenclature.
> - Faux plafonds : m² + corniches en ml ; plaques + 5 %.
> - Peinture : m² par support ; litres = surface × couches / rendement.`,
 exercices:[
  {t:"Devis des menuiseries", d:1, e:`Une villa comporte : 1 porte d'entrée (250 000 F), 7 portes isoplanes (85 000 F l'unité), 8 fenêtres F1 de 1,20 × 1,20 et 4 fenêtres F2 de 0,60 × 0,60 (75 000 F/m²). Calculer le montant HT et TTC (TVA 18 %).`, c:`Fenêtres : 8 × 1,44 + 4 × 0,36 = **12,96 m²** → 12,96 × 75 000 = 972 000 F.
Portes : 250 000 + 7 × 85 000 = 845 000 F.
Total HT : **1 817 000 F** ; TTC : × 1,18 = **2 144 060 F**.`},
  {t:"Commande de peinture", d:2, e:`Murs intérieurs : 380 m² ; plafonds : 110 m² ; façades : 175 m². Intérieur : impression 12 m²/L puis 2 couches à 10 m²/L ; extérieur : impression 10 m²/L puis 2 couches à 8 m²/L. Peinture en seaux de 20 L. Établir la commande.`, c:`Intérieur (490 m²) : impression 490 / 12 = **40,8 L** → 3 seaux ; finition 490 × 2 / 10 = **98 L** → 5 seaux.
Extérieur (175 m²) : impression 175 / 10 = **17,5 L** → 1 seau ; finition 175 × 2 / 8 = **43,8 L** → 3 seaux.`},
  {t:"Faux plafond d'un étage", d:2, e:`Faux plafond en dalles 60 × 60 sur 85 m² (+ 5 % de coupes) ; corniches sur 92 ml ; ossature : 1,2 ml de profilé porteur par m². Calculer les quantités.`, c:`Dalles : 85 / 0,36 × 1,05 = 247,9 → **248 dalles**.
Corniches : **92 ml** (+ 5 % : 97 ml à commander).
Profilés porteurs : 85 × 1,2 = **102 ml**.`},
  {t:"Peinture des portes", d:2, e:`7 portes intérieures de 0,80 × 2,10 m sont peintes sur les deux faces, chants et huisseries comptés forfaitairement à + 10 %. Calculer la surface et la quantité de laque (2 couches, 12 m²/L).`, c:`Surface : 7 × 0,80 × 2,10 × 2 × 1,10 = **25,87 m²**.
Laque : 25,87 × 2 / 12 = **4,3 L** (une impression est à prévoir en plus sur bois neuf).`},
  {t:"Coût de la peinture", d:1, e:`Avec les surfaces de l'exercice 2 (490 m² intérieur, 175 m² extérieur) et les prix du bordereau (2 200 F/m² intérieur, 3 200 F/m² façade, fourniture et pose), calculer le montant HT du lot peinture.`, c:`Intérieur : 490 × 2 200 = 1 078 000 F ; façades : 175 × 3 200 = 560 000 F.
Total : **1 638 000 F HT**.`}
 ],
 quiz:[
  {q:"Les portes se métrent en général :", o:["À l'unité par type","Au m³","Au kg","À la tonne"], r:0, e:"Selon la nomenclature."},
  {q:"Litres pour 200 m², 2 couches, rendement 10 m²/L :", o:["40 L","20 L","400 L","4 L"], r:0, e:"200 × 2 / 10."},
  {q:"Les corniches de faux plafond se comptent :", o:["En ml","En m²","En kg","En m³"], r:0, e:"Périmètre des pièces."},
  {q:"Poids d'un mètre de fer carré de 12 mm (7 850 kg/m³) :", o:["≈ 1,13 kg","≈ 11,3 kg","≈ 0,11 kg","≈ 113 kg"], r:0, e:"0,012² × 7 850."},
  {q:"Une impression (sous-couche) sert à :", o:["Préparer et uniformiser le support avant la finition","Remplacer l'enduit","Étancher une toiture","Rien"], r:0, e:"Meilleure tenue et meilleur rendu."}
 ]},
{id:"metre-20", niv:2, titre:"Le sous-détail des matériaux et les approvisionnements", duree:50, contenu:`## Des quantités d'ouvrages aux quantités de matériaux
Le métré donne des **quantités d'ouvrages** (m³ de béton, m² de maçonnerie…). Pour commander, il faut les transformer en **quantités de matériaux** (sacs de ciment, m³ de sable et de gravier, agglos, kg d'acier…) : c'est le **sous-détail des matériaux**.

## La fiche de sous-détail (par unité d'ouvrage)
| Ouvrage | Ciment | Sable | Gravier | Autres |
|---|---|---|---|---|
| 1 m³ béton armé dosé à 350 | 7 sacs | 0,40 m³ | 0,80 m³ | eau ≈ 175 L |
| 1 m³ béton de dallage dosé à 300 | 6 sacs | 0,40 m³ | 0,80 m³ | — |
| 1 m³ béton de propreté dosé à 150 | 3 sacs | 0,40 m³ | 0,80 m³ | — |
| 1 m² agglos de 15 (mortier 300) | 0,09 sac | 0,015 m³ | — | 12,5 agglos |
| 1 m² agglos de 10 | 0,06 sac | 0,010 m³ | — | 12,5 agglos |
| 1 m² enduit (1,8 cm, dosé à 350) | 0,13 sac | 0,018 m³ | — | — |
| 1 m² plancher 16 + 4 | 0,5 sac | 0,03 m³ | 0,06 m³ | 8,3 entrevous, 1,7 ml poutrelles, 1,1 m² treillis |
| 1 m² hérisson 15 cm | — | — | — | 0,16 m³ de pierres |

## Les dosages pratiques sur le chantier
Sur un petit chantier, on mesure les granulats à la **brouette** (≈ 60 L) ou au seau. Pour **1 sac de 50 kg** :
| Mélange | Sable | Gravier | Eau |
|---|---|---|---|
| Béton dosé à 350 (1 sac = 0,143 m³ de béton) | 57 L ≈ **1 brouette** | 114 L ≈ **2 brouettes** | ≈ 25 L |
| Mortier dosé à 300 (1 sac = 0,167 m³ de mortier) | ≈ **3 brouettes** | — | ≈ 25 L |
Il faut **contrôler** ces volumes (une brouette « bien pleine » peut dépasser 80 L) et ne jamais rajouter d'eau pour faciliter la mise en œuvre : chaque litre d'eau en trop réduit la résistance.

## Les pertes et les majorations
| Matériau | Majoration courante |
|---|---|
| Ciment | 3 à 5 % |
| Sable, gravier | 10 % (pertes au sol, foisonnement du sable humide) |
| Agglos | 3 à 5 % (casse) |
| Carreaux | 5 à 15 % |
| Aciers | 5 à 10 % (chutes, recouvrements) |
| Bois de coffrage | selon le nombre de réemplois |

## Des m³ aux tonnes et aux camions
Les granulats sont souvent vendus **à la tonne** ou **au camion** :
| Matériau | Masse volumique apparente |
|---|---|
| Sable | ≈ 1,6 t/m³ |
| Gravier concassé | ≈ 1,5 t/m³ |
| Graveleux latéritique | ≈ 1,8 à 2,0 t/m³ |
| Ciment (en vrac) | ≈ 1,2 à 1,4 t/m³ |
Ex. : 12 m³ de sable ≈ 12 × 1,6 = 19,2 t.

> [!exemple] Fiche matériaux du gros œuvre d'une maison
> | Ouvrage | Quantité | Ciment (sacs) | Sable (m³) | Gravier (m³) |
> |---|---|---|---|---|
> | Béton de propreté | 1,42 m³ | 4,3 | 0,57 | 1,14 |
> | Béton armé fondations | 6,12 m³ | 42,8 | 2,45 | 4,90 |
> | Dallage (300) | 5,44 m³ | 32,6 | 2,18 | 4,35 |
> | Béton armé élévation | 17,58 m³ | 123,1 | 7,03 | 14,06 |
> | Soubassement agglos pleins | 37,20 m² | 3,3 | 0,56 | — |
> | Murs agglos de 15 | 82,51 m² | 7,4 | 1,24 | — |
> | Cloisons agglos de 10 | 39,16 m² | 2,3 | 0,39 | — |
> | Enduits | 300 m² | 39,0 | 5,40 | — |
> | **Total** | | **254,9** | **19,81** | **24,45** |
> | **Avec pertes** (5 % ; 10 % ; 10 %) | | **268 sacs (13,4 t)** | **21,8 m³ (≈ 35 t)** | **26,9 m³ (≈ 40 t)** |

## L'approvisionnement
- **Phaser** les commandes selon le planning (fondations, élévation, finitions) au lieu de tout livrer au début ;
- **Stocker** le ciment au sec, sur palettes, à l'abri, en piles de 10 sacs au plus, et l'utiliser dans le mois (premier entré, premier sorti) ;
- Stocker sable et gravier sur une aire propre, séparés ; protéger les aciers de la boue ;
- Tenir un **cahier de stock** (entrées, sorties, reste) pour détecter les pertes et les vols.

> [!retenir]
> - Sous-détail = quantités d'ouvrages × consommations unitaires.
> - 1 sac de ciment → béton 350 : 1 brouette de sable + 2 de gravier.
> - Majorer : ciment 5 %, granulats 10 %, agglos 3 à 5 %, aciers 5 à 10 %.
> - Sable ≈ 1,6 t/m³ ; gravier ≈ 1,5 t/m³.`,
 exercices:[
  {t:"Préparer une coulée de dalle", d:1, e:`On coule 2,50 m³ de béton dosé à 350 kg/m³ à la bétonnière. Calculer le nombre de sacs, de brouettes de sable et de gravier (60 L) et la quantité d'eau (E/C ≈ 0,5).`, c:`Ciment : 2,50 × 7 = **17,5 sacs** (18 sacs).
Sable : 2,50 × 0,40 = 1,00 m³ → 1 000 / 60 = **17 brouettes** ; gravier : 2,00 m³ → **34 brouettes**.
Eau : 2,50 × 350 × 0,5 = **≈ 440 L** (à ajuster selon l'humidité du sable).`},
  {t:"Commande en camions", d:1, e:`Il faut 21,8 m³ de sable et 26,9 m³ de gravier. Les camions livrent 16 t. Combien de camions commander ?`, c:`Sable : 21,8 × 1,6 = **34,9 t** → 34,9 / 16 = 2,2 → **3 camions** (ou 2 camions et un complément plus tard).
Gravier : 26,9 × 1,5 = **40,4 t** → 40,4 / 16 = 2,5 → **3 camions**.`},
  {t:"Sous-détail d'un lot", d:2, e:`Calculer le ciment, le sable et le gravier pour : 3,20 m³ de béton armé (350), 0,80 m³ de béton de propreté (150), 45 m² d'agglos de 15 et 90 m² d'enduit. Majorer de 5 % (ciment) et 10 % (granulats).`, c:`| Ouvrage | Ciment | Sable | Gravier |
|---|---|---|---|
| BA 3,20 m³ | 22,4 | 1,28 | 2,56 |
| Propreté 0,80 m³ | 2,4 | 0,32 | 0,64 |
| Agglos 45 m² | 4,05 | 0,68 | — |
| Enduit 90 m² | 11,7 | 1,62 | — |
| **Total** | **40,55** | **3,90** | **3,20** |
Avec pertes : ciment 40,55 × 1,05 = **43 sacs** ; sable 3,90 × 1,10 = **4,3 m³** ; gravier 3,20 × 1,10 = **3,5 m³**.`},
  {t:"Planifier les livraisons de ciment", d:2, e:`Le gros œuvre d'une maison nécessite 268 sacs sur 10 semaines : 60 sacs en semaines 1-2 (fondations), 150 en semaines 3-7 (élévation), 58 en semaines 8-10 (enduits). Le magasin contient au plus 80 sacs et le ciment doit être utilisé en moins d'un mois. Proposer un plan de livraisons.`, c:`- Semaine 1 : **60 sacs** (fondations) ;
- Semaine 3 : **75 sacs** ; semaine 5 : **75 sacs** (élévation, 30 sacs par semaine environ, stock toujours ≤ 80) ;
- Semaine 8 : **58 sacs** (enduits).
Total : 268 sacs en 4 livraisons ; chaque lot est consommé en 2 à 3 semaines (< 1 mois) et le magasin n'est jamais saturé.`},
  {t:"Agglos fabriqués sur le chantier", d:3, e:`Le chantier fabrique ses agglos : 1 063 agglos creux de 15 et 479 pleins de 15 avec 1 sac pour 35 agglos, 505 agglos de 10 avec 1 sac pour 45 agglos. Combien de sacs prévoir ? Quelle précaution prendre ?`, c:`Agglos de 15 : (1 063 + 479) / 35 = 44,1 → **45 sacs** ; agglos de 10 : 505 / 45 = 11,2 → **12 sacs** ; total **57 sacs**, à ajouter à la fiche matériaux.
Précautions : arroser les agglos pendant au moins 7 jours, les laisser sécher à l'ombre, et faire tester quelques agglos en compression (laboratoire) : un agglo trop maigre se casse et fragilise les murs.`}
 ],
 quiz:[
  {q:"Pour 1 sac de ciment en béton dosé à 350, on met environ :", o:["1 brouette de sable et 2 de gravier","5 brouettes de sable","1 seau de gravier","Rien d'autre"], r:0, e:"57 L de sable et 114 L de gravier."},
  {q:"Masse volumique apparente courante du sable :", o:["≈ 1,6 t/m³","≈ 7,85 t/m³","≈ 0,5 t/m³","≈ 2,5 t/m³"], r:0, e:"Pour convertir en tonnes."},
  {q:"Le ciment doit être stocké :", o:["Au sec, sur palettes, et utilisé dans le mois","Au soleil sur le sol","Sous la pluie","N'importe où"], r:0, e:"Il durcit avec l'humidité."},
  {q:"La majoration courante des granulats est :", o:["10 %","50 %","0 %","100 %"], r:0, e:"Pertes et foisonnement."},
  {q:"Le sous-détail des matériaux sert à :", o:["Commander les matériaux","Dessiner les plans","Fixer la TVA","Choisir la couleur"], r:0, e:"Passage des ouvrages aux matériaux."}
 ]},
{id:"metre-6", niv:2, titre:"Du métré au devis : BPU, DQE et récapitulatif", duree:55, contenu:`## Le bordereau des prix unitaires (BPU)
Le BPU liste chaque ouvrage avec :
- un **numéro** (lot.article : 2.3) ;
- un **libellé précis** : nature, dimensions, dosage, ce qui est compris (« fourniture et pose », « coffrage compris », « hors aciers ») ;
- une **unité** ;
- un **prix unitaire** hors taxes, en chiffres et souvent en lettres (le prix en lettres fait foi en cas de désaccord).

## Le devis quantitatif et estimatif (DQE)
$$ Montant d'un article = quantité × prix unitaire
Les quantités viennent du métré ; les articles reprennent exactement la numérotation et les libellés du BPU.
> [!exemple] DQE des lots 1 et 2 d'une maison (prix indicatifs)
> | N° | Désignation | U | Qté | P.U. (F) | Montant (F) |
> |---|---|---|---|---|---|
> | 1.1 | Décapage et nettoyage du terrain | m² | 154 | 500 | 77 000 |
> | 1.2 | Fouilles manuelles en terrain ordinaire | m³ | 20,95 | 4 500 | 94 275 |
> | 1.3 | Remblai d'apport compacté sous dallage | m³ | 28,50 | 6 000 | 171 000 |
> | | **Sous-total lot 1 : Terrassements** | | | | **342 275** |
> | 2.1 | Béton de propreté dosé à 150 kg/m³ | m³ | 1,42 | 75 000 | 106 500 |
> | 2.2 | Béton armé dosé à 350 kg/m³ (semelles, amorces, longrines) | m³ | 6,12 | 185 000 | 1 132 200 |
> | 2.3 | Aciers HA façonnés et posés | kg | 500 | 1 000 | 500 000 |
> | 2.4 | Maçonnerie d'agglos pleins de 15 (soubassement) | m² | 37,20 | 12 000 | 446 400 |
> | 2.5 | Hérisson en pierres cassées ép. 15 cm | m² | 68 | 6 500 | 442 000 |
> | 2.6 | Dallage béton 8 cm + treillis soudé | m² | 68 | 9 500 | 646 000 |
> | | **Sous-total lot 2 : Fondations** | | | | **3 273 100** |

## Le récapitulatif
| Lot | Montant HT (F) |
|---|---|
| 1. Terrassements | 342 275 |
| 2. Fondations | 3 273 100 |
| … | … |
| **Total HT** | |
| TVA 18 % | |
| **Total TTC** | |
On peut y ajouter une ligne d'**imprévus** (5 à 10 % en phase d'étude) ; dans une offre d'entreprise, les aléas sont normalement inclus dans les prix.

## L'estimation sommaire par ratios
Avant d'avoir un métré détaillé, on estime le coût par **ratio au m²** de surface construite, selon le standing (valeurs à actualiser localement), puis on répartit par lots :
| Lot (maison courante) | Part indicative |
|---|---|
| Gros œuvre (terrassements, fondations, élévation, maçonnerie) | 40 à 50 % |
| Toiture, étanchéité | 8 à 12 % |
| Enduits et revêtements | 12 à 18 % |
| Menuiseries | 8 à 12 % |
| Électricité | 5 à 8 % |
| Plomberie sanitaire | 6 à 9 % |
| Peinture | 4 à 6 % |
| VRD et divers | 2 à 10 % |

## Les contrôles avant de remettre un devis
- Recalculer chaque montant (quantité × prix) et chaque sous-total ;
- Vérifier la cohérence des **unités** entre métré et bordereau ;
- Comparer le coût au m² et la répartition par lots aux références ;
- Vérifier qu'aucun lot ou ouvrage n'a été oublié (VRD, installation de chantier, branchements).

## L'analyse des offres
Le maître d'ouvrage compare les offres des entreprises à son **estimation** : une offre très inférieure (par exemple moins de 80 % de l'estimation) est **anormalement basse** et doit être justifiée ; une offre très supérieure peut révéler une erreur ou un surcoût. On vérifie aussi les quantités et les prix article par article.

> [!astuce] Avec la plateforme
> L'outil **Métré** calcule automatiquement le DQE et le récapitulatif à partir de vos lignes de métré, avec la TVA, et exporte le tout en CSV.

> [!retenir]
> - BPU : libellés précis, unités, prix unitaires HT.
> - DQE : quantité × prix, sous-totaux par lot, récapitulatif HT, TVA 18 %, TTC.
> - Estimation sommaire : ratio au m² et répartition par lots.
> - Contrôler montants, unités, ratios et oublis.`,
 exercices:[
  {t:"Calculer des montants", d:1, e:`Calculer les montants et le sous-total : 12,40 m³ de béton armé à 185 000 F/m³ ; 37,50 m² de dallage à 9 500 F/m² ; 450 kg d'acier à 1 000 F/kg.`, c:`12,40 × 185 000 = **2 294 000 F** ; 37,50 × 9 500 = **356 250 F** ; 450 × 1 000 = **450 000 F**.
Sous-total : **3 100 250 F**.`},
  {t:"Établir le récapitulatif", d:2, e:`Sous-totaux HT (F) : terrassements 342 275 ; fondations 3 273 100 ; élévation 4 850 000 ; maçonnerie 2 150 000 ; toiture 1 950 000 ; enduits et revêtements 3 400 000 ; menuiseries 1 404 000 ; électricité 1 150 000 ; plomberie 1 480 000 ; peinture 1 638 000. Calculer le total HT, la TVA (18 %), le TTC et le coût HT au m² pour 95 m² construits.`, c:`Total HT : **21 637 375 F** ; TVA : **3 894 728 F** ; TTC : **25 532 103 F**.
Coût HT au m² : 21 637 375 / 95 = **227 762 F/m²**.`},
  {t:"Trouver l'erreur", d:2, e:`Dans un devis, on lit : « 2.2 – Béton armé dosé à 350 – m² – 6,12 – 185 000 – 11 322 000 ». Relever les erreurs.`, c:`- **Unité** : le béton se compte en **m³**, pas en m² ;
- **Montant** : 6,12 × 185 000 = **1 132 200 F**, et non 11 322 000 F (erreur de virgule, montant multiplié par 10).
Ce type d'erreur fausse tout le récapitulatif : on recalcule toujours chaque ligne.`},
  {t:"Estimation sommaire", d:2, e:`Un client veut une villa de 150 m² de standing moyen. Avec un ratio de 300 000 F HT/m² (hypothèse), estimer le coût et le répartir avec les parts : gros œuvre 45 %, toiture 10 %, revêtements 15 %, menuiseries 10 %, électricité 6 %, plomberie 7 %, peinture 5 %, divers 2 %.`, c:`Coût : 150 × 300 000 = **45 000 000 F HT**.
Gros œuvre **20 250 000** ; toiture **4 500 000** ; revêtements **6 750 000** ; menuiseries **4 500 000** ; électricité **2 700 000** ; plomberie **3 150 000** ; peinture **2 250 000** ; divers **900 000** (total 45 000 000 F).`},
  {t:"Analyser des offres", d:3, e:`Estimation du maître d'ouvrage : 45,0 M F HT. Offres reçues : A = 38,2 M ; B = 44,1 M ; C = 52,7 M ; D = 31,5 M. Classer les offres par rapport à l'estimation et dire lesquelles demandent une vérification particulière (seuil d'offre anormalement basse : 80 %).`, c:`A : 84,9 % ; B : 98,0 % ; C : 117,1 % ; D : **70,0 %**.
- **D** est sous le seuil de 80 % : offre **anormalement basse**, à faire justifier (oubli d'un lot ? prix intenables ?) avant toute décision ;
- **C** est nettement au-dessus : vérifier les quantités et les prix, éventuellement négocier ;
- A et B sont cohérentes ; on vérifie leurs DQE article par article avant d'attribuer.`}
 ],
 quiz:[
  {q:"Montant de 2,5 m³ à 185 000 F/m³ :", o:["462 500 F","185 000 F","74 000 F","4 625 000 F"], r:0, e:"2,5 × 185 000."},
  {q:"TTC d'un devis de 20 000 000 F HT (TVA 18 %) :", o:["23 600 000 F","20 180 000 F","16 400 000 F","38 000 000 F"], r:0, e:"× 1,18."},
  {q:"Dans un BPU, en cas de désaccord, fait foi :", o:["Le prix en lettres","Le prix en chiffres","Le plus bas des deux","Le plus haut"], r:0, e:"Règle habituelle des marchés."},
  {q:"Le gros œuvre d'une maison courante représente environ :", o:["40 à 50 % du coût","5 %","90 %","Rien"], r:0, e:"Le poste le plus lourd."},
  {q:"Une offre à 70 % de l'estimation est :", o:["Anormalement basse, à justifier","Forcément la meilleure","Interdite","Hors sujet"], r:0, e:"Risque d'oubli ou de malfaçons."}
 ]},
{id:"metre-18", niv:3, titre:"Le sous-détail de prix : déboursé sec et prix de vente", duree:60, contenu:`## D'où vient un prix unitaire ?
Le prix d'un m³ de béton ou d'un m² de maçonnerie n'est pas « inventé » : l'entreprise le construit à partir de ce qu'il lui coûte réellement, puis ajoute ses frais et sa marge. C'est le **sous-détail de prix** (ou analyse de prix).

## Le déboursé sec (DS)
C'est le coût **direct** de l'ouvrage :
$$ DS = matériaux + main-d'œuvre + matériel
- **Matériaux** : quantités du sous-détail (pertes comprises) × prix rendus chantier ;
- **Main-d'œuvre** : temps unitaires (h par unité d'ouvrage) × taux horaires **chargés** (salaire + charges sociales + primes) ;
- **Matériel** : location ou amortissement des engins et outils (bétonnière, vibreur, étais, échafaudages…), carburant.
Le **temps unitaire** se déduit du **rendement** : un maçon qui pose 10 m² d'agglos par journée de 8 h a un temps unitaire de 8 / 10 = 0,8 h/m².

## Du déboursé sec au prix de vente
On ajoute :
- les **frais de chantier** (FC) : encadrement, installations, gardiennage, eau, électricité, essais… ;
- les **frais généraux** (FG) de l'entreprise : siège, administration, assurances, études ;
- le **bénéfice et les aléas** (B).
$$ PV HT = DS × K      avec K = (1 + FC) × (1 + FG) × (1 + B)
Avec FC = 10 %, FG = 12 % et B = 10 % : K = 1,10 × 1,12 × 1,10 = **1,355**. Le coefficient K est propre à chaque entreprise et à chaque marché (souvent entre 1,25 et 1,60).

> [!exemple] Sous-détail de 1 m³ de béton armé dosé à 350 (coffrage compris, hors aciers)
> Prix rendus chantier fictifs d'exercice : ciment 5 500 F/sac ; sable 12 000 F/m³ ; gravier 25 000 F/m³ ; bois 175 000 F/m³ ; taux chargés : coffreur 1 250 F/h, équipe de bétonnage 900 F/h en moyenne, chef d'équipe 2 000 F/h.
> | Poste | Calcul | Montant (F) |
> |---|---|---|
> | Ciment (7 sacs + 5 %) | 7,35 × 5 500 | 40 425 |
> | Sable (0,40 + 10 %) | 0,44 × 12 000 | 5 280 |
> | Gravier (0,80 + 10 %) | 0,88 × 25 000 | 22 000 |
> | Eau | forfait | 200 |
> | Bois de coffrage (8 m², 0,03 m³/m², 3 réemplois) | 8 × 0,03 / 3 × 175 000 | 14 000 |
> | Pointes, fil, huile de décoffrage | 8 × 400 | 3 200 |
> | **Matériaux** | | **85 105** |
> | Coffrage et décoffrage (1,5 h/m²) | 8 × 1,5 × 1 250 | 15 000 |
> | Fabrication et mise en place du béton | 10 h × 900 | 9 000 |
> | Encadrement | 2 h × 2 000 | 4 000 |
> | **Main-d'œuvre** | | **28 000** |
> | Bétonnière, vibreur, étais | 6 000 + 2 000 + 8 000 | **16 000** |
> | **Déboursé sec** | | **129 105** |
> | **Prix de vente HT** (K = 1,355) | 129 105 × 1,355 | **≈ 175 000** |

> [!exemple] Sous-détail de 1 m² de maçonnerie d'agglos de 15
> Agglos : 12,5 × 1,03 = 12,88 × 350 F = 4 506 ; ciment 0,0945 × 5 500 = 520 ; sable 0,0165 × 12 000 = 198 ; eau 20 → matériaux **5 244 F**.
> Main-d'œuvre : maçon 0,8 h × 1 250 + manœuvre 0,8 h × 750 = **1 600 F** ; matériel (échafaudage, outillage) **300 F**.
> DS = **7 144 F** → PV = 7 144 × 1,355 = **≈ 9 680 F/m²** HT.

## Les usages du sous-détail
- **Répondre à un appel d'offres** avec des prix justifiés ;
- **Vérifier** qu'un prix imposé (bordereau du client, prix du marché) couvre les coûts : DS maximal = PV / K ;
- **Choisir** entre deux méthodes (fabriquer ou acheter les agglos, équipe propre ou tâcheron, béton de chantier ou béton prêt à l'emploi) ;
- **Suivre** la rentabilité du chantier : comparer les déboursés réels aux déboursés prévus.

> [!attention] Les pièges
> - Oublier les **pertes** sur les matériaux ;
> - Utiliser des salaires **non chargés** ;
> - Surestimer les rendements (fatigue, chaleur, intempéries, approvisionnements irréguliers) ;
> - Oublier le transport des matériaux jusqu'au chantier.

> [!retenir]
> - DS = matériaux + main-d'œuvre + matériel.
> - Temps unitaire = durée / rendement ; taux horaires chargés.
> - PV HT = DS × K, K = (1 + FC)(1 + FG)(1 + B).
> - DS maximal admissible = prix imposé / K.`,
 exercices:[
  {t:"Coefficient de vente", d:1, e:`Une entreprise a des frais de chantier de 8 %, des frais généraux de 15 % et vise un bénéfice de 10 %. Calculer K, puis le prix de vente d'un ouvrage dont le déboursé sec est 85 000 F.`, c:`K = 1,08 × 1,15 × 1,10 = **1,366**.
PV = 85 000 × 1,366 = **116 127 F HT**.`},
  {t:"Sous-détail d'un m² d'enduit", d:2, e:`Enduit ciment de 1,8 cm dosé à 350 : mortier 0,018 m³/m² + 5 % de pertes ; ciment 5 500 F/sac ; sable 12 000 F/m³ (+ 10 %). Main-d'œuvre : maçon 0,5 h (1 250 F/h) et manœuvre 0,5 h (750 F/h) ; matériel 150 F/m². K = 1,355. Calculer le DS et le prix de vente.`, c:`Mortier : 0,018 × 1,05 = 0,0189 m³ → ciment 0,0189 × 7 = 0,132 sac × 5 500 = **728 F** ; sable 0,018 × 1,10 = 0,0198 m³ × 12 000 = **238 F**.
Main-d'œuvre : 0,5 × 1 250 + 0,5 × 750 = **1 000 F** ; matériel **150 F**.
DS = 728 + 238 + 1 000 + 150 = **2 116 F** → PV = 2 116 × 1,355 = **≈ 2 870 F/m²** (le bordereau indicatif annonce 3 000 F).`},
  {t:"Rendement et durée", d:2, e:`Un binôme maçon + manœuvre pose 10 m² d'agglos par journée de 8 h. a) Quel est le temps unitaire ? b) Combien de journées pour 121,67 m² de murs et cloisons ? c) Et avec deux binômes ?`, c:`a) 8 / 10 = **0,8 h/m²** (pour le maçon comme pour le manœuvre).
b) 121,67 / 10 = **12,2 journées** de binôme.
c) Deux binômes : 121,67 / 20 = **6,1 jours**, à condition que l'approvisionnement suive (agglos, mortier).`},
  {t:"Prix imposé", d:2, e:`Le maître d'ouvrage impose 9 000 F HT/m² pour la maçonnerie d'agglos de 15. Avec K = 1,355, quel déboursé sec maximal l'entreprise peut-elle accepter ? Le sous-détail du cours (7 144 F) est-il compatible ?`, c:`DS maximal = 9 000 / 1,355 = **6 642 F/m²**.
Le DS calculé (7 144 F) le dépasse de 500 F : à ce prix, l'entreprise perdrait sa marge. Pistes : négocier le prix des agglos, améliorer le rendement, réduire K sur ce marché… ou refuser.`},
  {t:"Équipe propre ou tâcheron ?", d:3, e:`Pour 121,67 m² de maçonnerie, un tâcheron propose la main-d'œuvre et le petit matériel à 1 500 F/m². Avec l'équipe de l'entreprise, ce poste coûte 0,8 h × 1 250 + 0,8 h × 750 + 300 = ? Comparer et citer les autres critères de choix.`, c:`Équipe propre : 1 000 + 600 + 300 = **1 900 F/m²** → 121,67 × 1 900 = **231 173 F**.
Tâcheron : 121,67 × 1 500 = **182 505 F**, soit 48 668 F d'économie (21 %).
Autres critères : qualité et respect des plans (contrôle par le conducteur de travaux), délais, assurance et sécurité des ouvriers, déclaration sociale, capacité du tâcheron à suivre le planning.`}
 ],
 quiz:[
  {q:"Le déboursé sec comprend :", o:["Matériaux, main-d'œuvre et matériel","Seulement les matériaux","Le bénéfice","La TVA"], r:0, e:"Coût direct."},
  {q:"Avec K = 1,4, un DS de 10 000 F donne un prix de vente de :", o:["14 000 F","10 400 F","7 143 F","1 400 F"], r:0, e:"10 000 × 1,4."},
  {q:"Un ouvrier pose 16 m² en 8 h : son temps unitaire est :", o:["0,5 h/m²","2 h/m²","16 h/m²","8 h/m²"], r:0, e:"8/16."},
  {q:"Les frais généraux couvrent :", o:["Le siège, l'administration, les assurances","Le ciment","Les agglos","La TVA"], r:0, e:"Frais indirects de l'entreprise."},
  {q:"Pour vérifier un prix imposé, on calcule :", o:["DS maximal = prix / K","Prix × TVA","DS × 2","Rien"], r:0, e:"Ce que l'on peut dépenser au maximum."}
 ]},
{id:"metre-7", niv:3, titre:"Métré des lots techniques : électricité, plomberie, climatisation", duree:55, contenu:`## Électricité
On métre à partir du **plan d'électricité** (symboles normalisés) et du **schéma unifilaire** :
| Ouvrage | Unité |
|---|---|
| Points lumineux (simple allumage, va-et-vient), appliques | u |
| Prises de courant 16 A, prises spécialisées 20 / 32 A | u |
| Interrupteurs, boutons-poussoirs | u (souvent inclus dans le point lumineux) |
| Câbles par section (1,5 – 2,5 – 6 mm²…) et gaines ICTA | ml |
| Tableau (coffret, disjoncteurs, interrupteurs différentiels) | ens |
| Mise à la terre (piquet, câble), liaisons équipotentielles | ens |
| Branchement au réseau (CIE), compteur | ens |
**Règles de répartition courantes** : au plus **8 points lumineux** par circuit d'éclairage (1,5 mm²) et **8 prises** par circuit de prises (2,5 mm²) ; un circuit **spécialisé** par gros appareil (cuisinière, chauffe-eau, climatiseur, pompe…), protection par interrupteurs différentiels 30 mA.
> [!exemple] Maison F4
> 18 points lumineux × 12 m = 216 m de câble 1,5 mm² (+ 10 % → **238 m**) ; 24 prises × 10 m = 240 m de 2,5 mm² (+ 10 % → **264 m**) ; autant de gaines ICTA de diamètre adapté.
> Circuits : éclairage 18 / 8 → **3 circuits** ; prises 24 / 8 → **3 circuits** ; + circuits spécialisés.

## Plomberie sanitaire
| Ouvrage | Unité |
|---|---|
| Appareils (WC, lavabo, douche, évier, chauffe-eau) | u (posés et raccordés) |
| Alimentation eau froide / eau chaude (PPR, PEHD, cuivre) par diamètre | ml |
| Évacuations PVC (Ø 40 lavabo, Ø 50 évier et douche, Ø 100 WC et chutes) | ml |
| Raccords, coudes, tés, vannes | u ou % des tubes |
| Regards (de visite, de branchement) | u |
| Fosse septique, puisard ou épandage, bac à graisses | ens |
| Branchement au réseau SODECI, compteur | ens |
On mesure les tubes sur le plan (horizontal + montées et descentes) et on ajoute **10 %** pour les coupes et raccords. Les tubes PVC sont vendus en **barres de 4 m** (ou 6 m).

## Climatisation et ventilation
- Climatiseurs **à l'unité, par puissance** : en climat ivoirien, on compte environ **600 BTU par m²** de pièce bien isolée et peu ensoleillée (plus pour un séjour très vitré) : chambre de 12 m² → 9 000 BTU ; séjour de 32 m² → 18 000 à 24 000 BTU ;
- **Liaisons frigorifiques** cuivre isolées (ml), **évacuations des condensats** (ml), supports et alimentations électriques dédiées ;
- Extracteurs, VMC : u ; gaines : ml.

## Méthode pour un immeuble
Compter **par logement type**, puis multiplier par le nombre de logements identiques ; ajouter les **parties communes** (éclairage des circulations, colonnes montantes, comptages) et les **réseaux extérieurs**.

> [!astuce] Les oublis classiques
> Liaisons équipotentielles des salles d'eau, sonnette, réseau téléphone/internet (fourreaux et prises RJ45), éclairage extérieur, pompe et surpresseur, réservoir d'eau sur toiture, trop-pleins.

> [!retenir]
> - Électricité : appareils à l'unité, câbles et gaines en ml (+ 10 %), tableau à l'ensemble ; 8 points par circuit.
> - Plomberie : appareils à l'unité, tubes par diamètre en ml (+ 10 %), fosse à l'ensemble.
> - Climatisation : ≈ 600 BTU/m², liaisons en ml.`,
 exercices:[
  {t:"Câbles d'un duplex", d:1, e:`Un duplex comporte 26 points lumineux (11 m de câble 1,5 mm² chacun en moyenne), 32 prises (9 m de 2,5 mm²) et 6 circuits spécialisés (15 m de 6 mm² chacun). Calculer les longueurs à commander (+ 10 %).`, c:`1,5 mm² : 26 × 11 × 1,10 = **314,6 m** → 3 couronnes de 100 m + complément (ou 4 couronnes).
2,5 mm² : 32 × 9 × 1,10 = **316,8 m**.
6 mm² : 6 × 15 × 1,10 = **99 m**.`},
  {t:"Nombre de circuits", d:2, e:`Pour le duplex de l'exercice 1 (26 points lumineux, 32 prises, 6 circuits spécialisés), combien de circuits et de disjoncteurs divisionnaires prévoir (8 points ou 8 prises par circuit) ?`, c:`Éclairage : 26 / 8 = 3,25 → **4 circuits** ; prises : 32 / 8 = 4 → **4 circuits** ; spécialisés : **6**.
Total : **14 disjoncteurs divisionnaires**, répartis sous au moins 2 interrupteurs différentiels 30 mA, plus le disjoncteur de branchement. On choisit un tableau à 3 rangées pour garder des réserves.`},
  {t:"Évacuations PVC", d:1, e:`Le plan de plomberie donne : 22 m de PVC Ø 100, 14 m de Ø 50 et 18 m de Ø 40. Calculer les longueurs à commander (+ 10 %) et le nombre de barres de 4 m.`, c:`Ø 100 : 22 × 1,10 = 24,2 m → **7 barres** ; Ø 50 : 15,4 m → **4 barres** ; Ø 40 : 19,8 m → **5 barres**.`},
  {t:"Climatisation d'une villa", d:2, e:`Pièces : 3 chambres de 12, 13 et 14 m², un séjour de 32 m². Puissances disponibles : 9 000, 12 000, 18 000, 24 000 BTU. Choisir les appareils (600 BTU/m²) et estimer les liaisons frigorifiques (5 m par appareil + 10 %).`, c:`Chambres : 7 200 à 8 400 BTU → **3 × 9 000 BTU**.
Séjour : 32 × 600 = 19 200 BTU → **24 000 BTU** (la taille au-dessus de 18 000).
Liaisons : 4 × 5 × 1,10 = **22 ml** (paires de tubes isolés), plus autant d'évacuations de condensats.`},
  {t:"Devis électricité", d:2, e:`Prix : point lumineux complet 18 000 F ; prise 16 A complète 15 000 F ; circuit spécialisé 45 000 F ; tableau équipé + terre 250 000 F (ens). Calculer le montant HT pour le duplex (26 points, 32 prises, 6 circuits spécialisés, 1 tableau).`, c:`26 × 18 000 = 468 000 ; 32 × 15 000 = 480 000 ; 6 × 45 000 = 270 000 ; tableau 250 000.
Total : **1 468 000 F HT**.`}
 ],
 quiz:[
  {q:"Nombre maximal courant de prises par circuit 2,5 mm² :", o:["8","30","2","100"], r:0, e:"Règle de répartition courante."},
  {q:"Les câbles électriques se comptent en :", o:["ml","m²","kg","m³"], r:0, e:"Longueurs par section."},
  {q:"Un WC s'évacue en PVC de diamètre :", o:["100 mm","40 mm","20 mm","300 mm"], r:0, e:"Eaux vannes."},
  {q:"Puissance de climatiseur pour une chambre de 12 m² (≈ 600 BTU/m²) :", o:["9 000 BTU","48 000 BTU","1 000 BTU","100 000 BTU"], r:0, e:"7 200 → 9 000."},
  {q:"Sur un immeuble, on métre les lots techniques :", o:["Par logement type, puis on multiplie","Uniquement au RDC","Au hasard","Sans plans"], r:0, e:"Plus rapide et plus sûr."}
 ]},
{id:"metre-8", niv:3, titre:"Métré des VRD et des aménagements extérieurs", duree:55, contenu:`## Les VRD
**Voirie et Réseaux Divers** : tout ce qui est à l'extérieur du bâtiment : voies et parkings, réseaux d'eau, d'assainissement, d'électricité et de télécommunications, eaux pluviales, clôtures, espaces verts. Ces postes sont souvent **oubliés** dans les budgets de maisons alors qu'ils représentent couramment **5 à 10 %** du coût total.

## La voirie et les cours
Chaque couche se métre en **m³ en place** (surface × épaisseur) ou en **m² pour une épaisseur donnée** :
| Couche | Matériau courant | Épaisseur |
|---|---|---|
| Couche de forme / fondation | Graveleux latéritique compacté | 15 à 30 cm |
| Couche de base | Graveleux concassé, latérite améliorée au ciment | 12 à 20 cm |
| Imprégnation, revêtement | Bicouche, enrobé, béton, pavés sur lit de sable | 3 à 10 cm |
| Bordures, caniveaux | Préfabriqués béton | ml |
Le matériau à commander dépasse le volume en place : coefficient de foisonnement et de compactage **≈ 1,3** pour les graveleux.
> [!exemple] Allée carrossable de 40 × 4 m en pavés
> - Couche de base en graveleux latéritique de 20 cm : 40 × 4 × 0,20 = **32 m³ en place** → ≈ **42 m³** à approvisionner ;
> - Lit de pose en sable de 3 cm : 160 × 0,03 = **4,8 m³** ;
> - Pavés autobloquants : **160 m²** (+ 3 % de coupes) ;
> - Bordures des deux côtés : **80 ml**.

## Les réseaux enterrés
| Ouvrage | Unité |
|---|---|
| Tranchée (déblai) | m³ (ou ml pour une section type) |
| Lit de pose et enrobage en sable | m³ |
| Canalisations par nature et diamètre | ml |
| Grillage avertisseur | ml |
| Remblai de tranchée compacté | m³ |
| Regards (visite, branchement), chambres de tirage | u |
| Évacuation des déblais excédentaires | m³ foisonnés |
> [!exemple] Réseau d'eaux usées de 45 m en PVC Ø 160
> Tranchée 0,60 m de large, 1,20 m de profondeur moyenne : **32,40 m³** de déblai.
> Sable : lit de 10 cm + tuyau + 10 cm au-dessus = 0,36 m de hauteur → 45 × 0,60 × 0,36 = 9,72 m³ − volume du tuyau (π × 0,08² × 45 = 0,90 m³) = **8,82 m³**.
> Remblai : 32,40 − 9,72 = **22,68 m³** ; évacuation : 9,72 × 1,25 = **12,15 m³**.
> Regards : au départ, à chaque changement de direction et au moins tous les 30 m → **3 regards** environ.

## Les eaux pluviales et l'assainissement de surface
Caniveaux (ml, par section), dalots (u ou ml), grilles avaloirs (u), puisards ou bassins de rétention (u ou m³). Pour un caniveau coulé en place, on métre aussi le béton (section × longueur) et le coffrage.

## Les clôtures
Une clôture se métre comme un petit bâtiment : fouilles, semelle filante, soubassement, poteaux, maçonnerie, chaînage ou chaperon, enduits (deux faces), peinture, portail et portillon.

## Les espaces verts et divers
Terre végétale (m³), engazonnement (m²), arbres et arbustes (u), arrosage (ens), éclairage extérieur (u + câbles en ml), local poubelles, château d'eau ou réservoir (ens).

> [!attention] Les sujétions
> Traversée de voie existante, démolition de chaussée, présence de réseaux existants (sondages préalables), rabattement de nappe dans les tranchées : à prévoir dans des articles spécifiques.

> [!retenir]
> - Couches de chaussée : m³ en place (× 1,3 pour la commande) ou m² à épaisseur donnée.
> - Réseaux : tranchée, sable, canalisation, remblai, regards, évacuation.
> - Clôture = fondation + soubassement + poteaux + mur + chaperon + finitions.
> - VRD : 5 à 10 % du coût d'une maison.`,
 exercices:[
  {t:"Cour pavée", d:1, e:`Cour de 25 × 12 m : couche de fondation en graveleux latéritique de 20 cm, couche de base de 15 cm, lit de sable de 3 cm, pavés et bordures sur tout le périmètre. Calculer les quantités (coefficient 1,3 pour les graveleux, 3 % de coupes pour les pavés).`, c:`Surface : **300 m²**.
Fondation : 300 × 0,20 = **60 m³** en place → **78 m³** à approvisionner.
Base : 300 × 0,15 = **45 m³** → **58,5 m³**.
Sable : 300 × 0,03 = **9 m³** ; pavés : 300 × 1,03 = **309 m²** ; bordures : 2 × (25 + 12) = **74 ml**.`},
  {t:"Tranchée de réseau", d:2, e:`Réseau d'eau potable de 80 m en PEHD Ø 63 : tranchée de 0,40 × 0,80 m, sable sur 0,25 m de hauteur (on néglige le volume du tuyau), grillage avertisseur, remblai compacté, foisonnement 1,25. Calculer les quantités.`, c:`Déblai : 80 × 0,40 × 0,80 = **25,60 m³** ; sable : 80 × 0,40 × 0,25 = **8,00 m³**.
Canalisation : **80 ml** (+ 2 % pour les raccords) ; grillage avertisseur : **80 ml**.
Remblai : 25,60 − 8,00 = **17,60 m³** ; évacuation : 8,00 × 1,25 = **10,00 m³**.`},
  {t:"Caniveau coulé en place", d:2, e:`Caniveau en U de 60 m : section intérieure 0,40 × 0,40 m, parois et radier de 10 cm. Calculer le béton, le ciment (350 kg/m³), le coffrage (faces intérieures et extérieures des parois) et le déblai (largeur 0,60 m, profondeur 0,50 m).`, c:`Section de béton : radier 0,60 × 0,10 + 2 parois 0,10 × 0,40 = **0,14 m²** → béton 0,14 × 60 = **8,40 m³** → ciment **58,8 sacs**.
Coffrage : (2 × 0,40 + 2 × 0,50) × 60 = **108 m²**.
Déblai : 0,60 × 0,50 × 60 = **18 m³**.`},
  {t:"Clôture complète", d:3, e:`Clôture de 115 m maçonnés : semelle filante 0,40 × 0,20 ; soubassement en agglos pleins de 0,40 m ; 41 poteaux 20 × 20 de 2,60 m ; mur en agglos de 15 de 213,60 m² ; chaperon 20 × 15 cm ; enduit deux faces sur le mur et le soubassement. Établir les quantités principales.`, c:`- Semelle : 115 × 0,40 × 0,20 = **9,20 m³**
- Soubassement : 115 × 0,40 = **46,00 m²**
- Poteaux : 41 × 0,20 × 0,20 × 2,60 = **4,26 m³**
- Mur : **213,60 m²** (2 751 agglos)
- Chaperon : 115 × 0,20 × 0,15 = **3,45 m³** (ou **115 ml**)
- Enduits : 2 × (213,60 + 46,00) = **519,20 m²** (+ faces des poteaux si non comprises)`},
  {t:"Budget VRD", d:1, e:`Une maison coûte 25,5 millions F HT hors VRD. Quelle enveloppe prévoir pour les VRD (5 à 10 %) ? Citer quatre postes souvent oubliés.`, c:`Enveloppe : 25,5 × 0,05 = **1,28 M** à 25,5 × 0,10 = **2,55 M F HT**.
Postes souvent oubliés : branchements eau (SODECI) et électricité (CIE), fosse septique et puisard, caniveaux d'eaux pluviales, clôture et portail, allées et parking, éclairage extérieur.`}
 ],
 quiz:[
  {q:"Les VRD représentent souvent dans le coût d'une maison :", o:["5 à 10 %","50 %","0 %","90 %"], r:0, e:"Postes souvent oubliés."},
  {q:"Une couche de base de 20 cm sur 100 m² représente en place :", o:["20 m³","200 m³","2 m³","100 m³"], r:0, e:"100 × 0,20."},
  {q:"Les regards d'assainissement se comptent :", o:["À l'unité","En m²","En kg","En ml"], r:0, e:"Nombre d'ouvrages."},
  {q:"Le remblai d'une tranchée vaut :", o:["Déblai − (sable + tuyau)","Déblai + sable","Le sable seul","Zéro"], r:0, e:"On remet la terre au-dessus de l'enrobage."},
  {q:"Les bordures se métrent :", o:["En ml","En m³","En kg","En u seulement"], r:0, e:"Longueur posée."}
 ]},
{id:"metre-21", niv:3, titre:"Les cubatures de terrassement : profils et carroyage", duree:60, contenu:`## À quoi servent les cubatures ?
Pour une route, une plate-forme industrielle, un lotissement ou un grand bâtiment, les volumes de terrassement sont importants et le terrain naturel n'est pas plat. On calcule les **déblais** (terre enlevée) et les **remblais** (terre apportée) à partir des **levés topographiques**, puis on organise le **mouvement des terres** : réutiliser au maximum les déblais en remblai pour limiter les apports et les évacuations.

## La méthode des profils en travers
On découpe l'ouvrage par des **profils en travers** espacés de 10 à 25 m (plus serrés si le terrain est accidenté). Sur chaque profil, on calcule la **surface de déblai** et la **surface de remblai** entre la ligne du terrain naturel et celle du projet.

!fig:coupe-type|Profil en travers type

### Surface d'un profil
- Formes simples : trapèzes et triangles. Exemple : déblai sous un terrain horizontal, plate-forme de largeur l, talus de pente n (horizontal pour 1 vertical), hauteur h : **S = (l + n h) × h**.
- Forme quelconque : **formule des coordonnées** (Gauss) à partir des points (x, z) du contour pris dans l'ordre :
$$ S = ½ × | Σ (xi × zi+1 − xi+1 × zi) |

### Volume entre deux profils
**Méthode de la moyenne des aires** :
$$ V = (S1 + S2) / 2 × d      (d : distance entre les profils)
On l'applique séparément aux déblais et aux remblais. Quand un profil est en déblai et le suivant en remblai, on introduit le **point de passage** (surface nulle) entre les deux.
> [!exemple] Trois profils d'une voie
> | Profil | Distance au suivant | Déblai (m²) | Remblai (m²) |
> |---|---|---|---|
> | P1 | 20 m | 12,4 | 0 |
> | P2 | 25 m | 18,6 | 2,2 |
> | P3 | — | 9,8 | 6,4 |
> Déblai : (12,4 + 18,6)/2 × 20 + (18,6 + 9,8)/2 × 25 = 310 + 355 = **665 m³**.
> Remblai : (0 + 2,2)/2 × 20 + (2,2 + 6,4)/2 × 25 = 22 + 107,5 = **129,5 m³**.
> Excédent de déblai : environ 665 − 130 = **535 m³** en place (un peu moins si le remblai demande plus que son volume en place) à évacuer ou à réutiliser ailleurs.

## La méthode du carroyage (plates-formes)
Pour une plate-forme horizontale, on quadrille le terrain en mailles de côtés a × b (10 × 10 m, 20 × 20 m…) et on lève l'altitude de chaque nœud. Avec la **cote projet** Zp, la hauteur de terrassement à chaque nœud est h = Z − Zp (positive en déblai, négative en remblai). Chaque nœud appartient à 1, 2 ou 4 mailles (coin, bord, intérieur) : c'est son **poids n**.
$$ V = (a × b / 4) × Σ (n × h)
**Cote d'équilibre** (déblais = remblais) : moyenne pondérée des altitudes, **Zeq = Σ (n × Z) / Σ n**.
> [!exemple] Plate-forme de 20 × 20 m (4 mailles de 10 × 10 m)
> | | Col. 1 | Col. 2 | Col. 3 |
> |---|---|---|---|
> | Ligne 1 | 102,40 (n = 1) | 102,10 (2) | 101,80 (1) |
> | Ligne 2 | 102,00 (2) | 101,70 (4) | 101,30 (2) |
> | Ligne 3 | 101,60 (1) | 101,20 (2) | 100,90 (1) |
> Σ n Z = 406,70 + 2 × 406,60 + 4 × 101,70 = 1 626,70 ; Σ n = 16 → **cote d'équilibre 101,67 m**.
> Pour une cote projet de 101,50 : Σ n h = 0,70 + 2 × 0,60 + 4 × 0,20 = 2,70 → V = 100 / 4 × 2,70 = **67,5 m³** de déblai net.

## Le mouvement des terres
On compare déblais et remblais tronçon par tronçon et on décide : réemploi sur place, mise en dépôt, évacuation, apport. Les terres impropres (argiles humides, terre végétale) ne sont pas réutilisables en remblai : on les compte à part. Les logiciels de VRD automatisent ces calculs, mais le métreur doit savoir **vérifier les ordres de grandeur**.

> [!retenir]
> - Profils : surfaces par trapèzes ou coordonnées ; V = (S1 + S2)/2 × d.
> - Carroyage : V = (a b / 4) Σ n h, avec n = 1, 2 ou 4.
> - Cote d'équilibre : Σ n Z / Σ n.
> - Organiser le mouvement des terres pour limiter apports et évacuations.`,
 exercices:[
  {t:"Surface d'un profil en déblai", d:1, e:`Plate-forme de 10 m de large en déblai sous un terrain horizontal situé 2,00 m plus haut ; talus à 3/2 (1,5 m d'horizontal pour 1 m de hauteur). Calculer la largeur en tête et la surface de déblai.`, c:`Largeur en tête : 10 + 2 × 1,5 × 2,00 = **16 m**.
Surface : (10 + 16) / 2 × 2,00 = **26 m²** (ou (10 + 1,5 × 2) × 2 = 26 m²).`},
  {t:"Volume par la moyenne des aires", d:2, e:`Quatre profils successifs ont des surfaces de déblai de 8,5 ; 14,2 ; 20,6 et 11,0 m², séparés de 20 m, 20 m et 15 m. Calculer le volume de déblai.`, c:`(8,5 + 14,2)/2 × 20 = **227 m³** ; (14,2 + 20,6)/2 × 20 = **348 m³** ; (20,6 + 11,0)/2 × 15 = **237 m³**.
Total : **812 m³**.`},
  {t:"Plate-forme par carroyage", d:3, e:`Mailles de 10 × 10 m ; altitudes des nœuds (3 lignes × 4 colonnes) :
| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| L1 | 50,80 | 50,60 | 50,30 | 50,10 |
| L2 | 50,50 | 50,20 | 50,00 | 49,80 |
| L3 | 50,10 | 49,90 | 49,70 | 49,40 |
a) Calculer la cote d'équilibre. b) Calculer le volume net pour une cote projet de 49,50 m.`, c:`Poids : coins 1, bords 2, intérieurs 4 → Σ n = 4 + 2 × 6 + 4 × 2 = **24**.
a) Σ n Z = (50,80 + 50,10 + 50,10 + 49,40) + 2 × (50,60 + 50,30 + 49,90 + 49,70 + 50,50 + 49,80) + 4 × (50,20 + 50,00) = 200,40 + 601,60 + 400,80 = **1 202,80** → Zeq = 1 202,80 / 24 = **50,12 m**.
b) Σ n h = Σ n (Z − 49,50) = 1 202,80 − 24 × 49,50 = **14,80** → V = 100 / 4 × 14,80 = **370 m³** de déblai net.`},
  {t:"Profil quelconque par les coordonnées", d:3, e:`Le contour d'une surface de déblai a pour sommets, dans l'ordre (x ; z en m) : A (−5 ; 0), B (5 ; 0), C (8 ; 2,2), D (−7,5 ; 1,5). Calculer sa surface.`, c:`Σ (xi zi+1 − xi+1 zi) :
A→B : (−5)(0) − (5)(0) = 0 ; B→C : (5)(2,2) − (8)(0) = 11 ; C→D : (8)(1,5) − (−7,5)(2,2) = 12 + 16,5 = 28,5 ; D→A : (−7,5)(0) − (−5)(1,5) = 7,5.
Somme : 47 → S = 47 / 2 = **23,5 m²**.`},
  {t:"Mouvement des terres", d:2, e:`Une plate-forme donne 812 m³ de déblai (dont 120 m³ de terre végétale inutilisable) et nécessite 450 m³ de remblai compacté (coefficient 1,1 entre volume en place du déblai et volume compacté). Calculer le volume réutilisable, l'excédent à évacuer (foisonnement 1,25) et l'éventuel apport.`, c:`Déblai réutilisable : 812 − 120 = **692 m³** en place.
Besoin pour le remblai : 450 × 1,1 = **495 m³** en place → couvert par le déblai, pas d'apport.
Excédent : 692 − 495 + 120 = **317 m³** en place → 317 × 1,25 = **396 m³** foisonnés à évacuer (ou à mettre en dépôt pour la terre végétale, réutilisée dans les espaces verts).`}
 ],
 quiz:[
  {q:"La méthode de la moyenne des aires donne V =",o:["(S1 + S2)/2 × d","S1 × S2 × d","(S1 − S2) × d","S1 + S2"], r:0, e:"Entre deux profils."},
  {q:"Dans un carroyage, un nœud intérieur a un poids de :", o:["4","1","2","8"], r:0, e:"Il appartient à 4 mailles."},
  {q:"La cote d'équilibre est :", o:["La moyenne pondérée Σ n Z / Σ n","L'altitude la plus haute","L'altitude la plus basse","La cote du NGF"], r:0, e:"Déblais = remblais."},
  {q:"Le point de passage est :", o:["L'endroit où l'on passe du déblai au remblai","Un regard","Un panneau de chantier","Un profil en long"], r:0, e:"Surface nulle."},
  {q:"La terre végétale décapée :", o:["N'est pas réutilisable en remblai sous ouvrage","Est le meilleur remblai","Remplace le béton","Se compacte comme une grave"], r:0, e:"Elle est organique et compressible."}
 ]},
{id:"metre-9", niv:3, titre:"Attachements, situations de travaux et décomptes", duree:55, contenu:`## L'attachement
C'est le **constat écrit et contradictoire** des quantités réellement exécutées, établi au fur et à mesure et signé par l'entreprise et le maître d'œuvre. Il est **indispensable pour les ouvrages cachés** (fouilles, fondations, ferraillages, réseaux enterrés) qu'on ne pourra plus mesurer ensuite. Il comporte : la date, l'ouvrage, les croquis cotés, les quantités, les signatures.

## La situation mensuelle
Chaque mois, l'entreprise présente l'état des travaux exécutés. Méthode :
1. Quantités **cumulées** depuis le début (ou pourcentage d'avancement de chaque article) × prix unitaires = **montant cumulé** ;
2. − cumul de la situation précédente = **travaux du mois** ;
3. − **retenue de garantie** (souvent 5 %, ou caution bancaire à la place) ;
4. − **remboursement de l'avance** de démarrage (au prorata des travaux) ;
5. + **révision des prix** si le marché le prévoit ;
6. − **pénalités** éventuelles ;
7. + TVA selon le contrat → **net à payer**.
> [!exemple] Situation n° 3 d'un marché de 150 M F HT
> Cumul à fin de mois : 54 M ; cumul précédent : 36 M → **travaux du mois : 18 M**.
> Retenue de garantie 5 % : − 0,9 M ; remboursement de l'avance (15 % des travaux du mois) : − 2,7 M.
> **Net HT : 14,4 M** ; TVA 18 % : 2,592 M → **16,992 M TTC**.

## L'avancement par pourcentage
Pour les ouvrages difficiles à mesurer en cours de travaux, on paie un **pourcentage d'avancement** de l'article ou du lot :
| Lot | Montant du marché | Avancement | Montant cumulé |
|---|---|---|---|
| Fondations | 8,0 M | 100 % | 8,0 M |
| Élévation | 15,0 M | 60 % | 9,0 M |
Les quantités définitives restent établies par métré contradictoire.

## La révision des prix
Sur un marché long, les prix sont révisés pour tenir compte de l'évolution des coûts, avec une formule du type :
$$ P = P0 × (0,15 + 0,85 × I / I0)
P0 : montant aux conditions initiales ; I0 : index du mois de référence ; I : index du mois des travaux ; 0,15 : partie fixe non révisable.
> [!exemple] Révision des travaux du mois
> P0 = 18 M ; I0 = 100 ; I = 106 → coefficient 0,15 + 0,85 × 1,06 = 1,051 → **révision = 18 × 0,051 = 0,918 M**.

## Les pénalités de retard
Le marché fixe une pénalité par jour calendaire de retard, souvent **1/1 000 du montant du marché** par jour, plafonnée (5 à 10 % du marché). Elle est déduite des situations ou du décompte final.

## Les travaux modificatifs
Un ouvrage nouveau, non prévu au bordereau, fait l'objet d'un **prix nouveau** (établi par sous-détail et accepté par les deux parties) ; les variations importantes de la masse des travaux font l'objet d'un **avenant** au marché.

## La fin du marché
- **Réception** des travaux (avec ou sans réserves), point de départ des garanties ;
- **Décompte général et définitif (DGD)** : il récapitule toutes les quantités, avenants, révisions, pénalités et sommes déjà payées, et fixe le **solde** ;
- **Garantie de parfait achèvement** (1 an) : la retenue de garantie est restituée à son expiration, si les réserves sont levées.

> [!astuce] Le tableau de suivi
> Un tableau par lot : montant du marché, quantités cumulées, pourcentage d'avancement, montant cumulé, montant du mois. Il sert aux situations **et** au contrôle des coûts (comparaison avec les déboursés réels).

> [!retenir]
> - Attachement : constat contradictoire, indispensable pour les ouvrages cachés.
> - Travaux du mois = cumul − cumul précédent ; puis retenue, avance, révision, pénalités, TVA.
> - Révision : P = P0 (0,15 + 0,85 I/I0).
> - DGD : solde définitif ; retenue rendue après la garantie de parfait achèvement.`,
 exercices:[
  {t:"Net à payer d'une situation", d:1, e:`Marché de 80 M F HT. Cumul à fin de mois : 32 M ; cumul précédent : 20 M. Retenue de garantie 5 % ; remboursement de l'avance : 10 % des travaux du mois ; TVA 18 %. Calculer le net à payer HT et TTC.`, c:`Travaux du mois : 32 − 20 = **12 M**.
Retenue : 0,6 M ; avance : 1,2 M → net HT : 12 − 0,6 − 1,2 = **10,2 M**.
TVA : 1,836 M → **12,036 M TTC**.`},
  {t:"Situation par pourcentages", d:2, e:`Lots et avancements : terrassements 2,5 M (100 %) ; fondations 8,0 M (100 %) ; élévation 15,0 M (60 %) ; maçonnerie 6,0 M (40 %) ; toiture 5,0 M (0 %). Le cumul de la situation précédente était 15,3 M. Calculer le cumul et les travaux du mois.`, c:`Cumul : 2,5 + 8,0 + 0,60 × 15,0 + 0,40 × 6,0 + 0 = 2,5 + 8,0 + 9,0 + 2,4 = **21,9 M**.
Travaux du mois : 21,9 − 15,3 = **6,6 M**.`},
  {t:"Révision des prix", d:2, e:`Travaux du mois : 6,6 M aux conditions initiales. Formule : P = P0 (0,15 + 0,85 I/I0), avec I0 = 112,4 et I = 118,2. Calculer le montant de la révision.`, c:`I / I0 = 118,2 / 112,4 = **1,0516**.
Coefficient : 0,15 + 0,85 × 1,0516 = **1,0439**.
Révision : 6,6 × 0,0439 = **0,29 M F** (≈ 289 500 F) à ajouter à la situation.`},
  {t:"Pénalités de retard", d:1, e:`Marché de 80 M F HT ; pénalité de 1/1 000 du montant par jour calendaire, plafonnée à 10 %. Les travaux sont réceptionnés avec 25 jours de retard. Calculer la pénalité.`, c:`Par jour : 80 000 000 / 1 000 = **80 000 F** ; 25 jours : **2 000 000 F**.
Plafond : 10 % × 80 M = 8 M → non atteint : la pénalité est de **2 M F**.`},
  {t:"Attachement de fondations", d:3, e:`Le marché prévoyait 6,12 m³ de béton armé de fondations à 185 000 F/m³. À l'ouverture des fouilles, le sol étant moins bon que prévu, les semelles ont été approfondies et élargies ; l'attachement signé constate 7,85 m³. Calculer la plus-value, son pourcentage et dire pourquoi l'attachement est indispensable.`, c:`Écart : 7,85 − 6,12 = **1,73 m³** (+ 28 %) → plus-value : 1,73 × 185 000 = **320 050 F HT** (plus les aciers, fouilles et propreté correspondants).
Sans attachement signé avant le remblaiement, l'entreprise ne pourrait plus prouver ces quantités cachées sous terre : elle risquerait de ne pas être payée, et le maître d'ouvrage n'aurait pas de trace des fondations réellement exécutées.`}
 ],
 quiz:[
  {q:"L'attachement est surtout indispensable pour :", o:["Les ouvrages cachés","La peinture","Les plantations","Le mobilier"], r:0, e:"On ne peut plus les mesurer ensuite."},
  {q:"Cumul 80 M, cumul précédent 60 M : travaux du mois =", o:["20 M","140 M","80 M","60 M"], r:0, e:"80 − 60."},
  {q:"La retenue de garantie courante est de :", o:["5 %","50 %","0,5 %","18 %"], r:0, e:"Restituée après la garantie de parfait achèvement."},
  {q:"Dans la formule de révision, 0,15 représente :", o:["La partie fixe non révisable","La TVA","La marge","Les pénalités"], r:0, e:"Le reste suit l'index."},
  {q:"Le document qui fixe le solde final du marché est :", o:["Le décompte général et définitif","Le BPU","Le plan de masse","Le permis de construire"], r:0, e:"Il récapitule tout."}
 ]},
{id:"metre-22", niv:3, titre:"Étude de cas : avant-métré et devis complet d'une maison", duree:75, contenu:`## Le projet
Maison de plain-pied à **toiture-terrasse**, 11,30 × 8,30 m hors tout (**93,79 m²**), murs extérieurs en agglos de 15, un refend en agglos de 15 et des cloisons en agglos de 10, 12 poteaux 20 × 20, longrines 20 × 40 sur 46,60 m, dalle pleine de 15 cm, hauteur de maçonnerie 2,65 m. Ce chapitre rassemble les méthodes de tout le cours : il reprend les quantités calculées dans les chapitres précédents et les complète.

!fig:coupe-type|Coupe type de la maison

## 1. L'avant-métré par lots
| Lot | Ouvrage | Calcul | Quantité |
|---|---|---|---|
| Terrassements | Décapage (1 m autour) | 13,30 × 10,30 | 136,99 m² |
| | Fouilles en puits | 12 × 1,00 × 1,00 × 1,00 | 12,00 m³ |
| | Fouilles en rigole | 34,60 × 0,40 × 0,50 | 6,92 m³ |
| | Remblai d'apport sous dallage | 85 × 0,30 | 25,50 m³ |
| Fondations | Béton de propreté | 12 × 0,90² × 0,05 + 34,60 × 0,40 × 0,05 | 1,18 m³ |
| | Béton armé (semelles 1,92 + amorces 0,29 + longrines 3,73) | | 5,94 m³ |
| | Aciers (ratios + 8 %) | (1,92 × 40 + 0,29 × 110 + 3,73 × 90) × 1,08 | 480 kg |
| | Soubassement agglos pleins | 46,60 × 0,60 | 27,96 m² |
| | Hérisson, dallage 8 cm + treillis | surface intérieure | 85 m² |
| Élévation | Béton armé (poteaux, chaînages, poutres, linteaux, dalle) | chapitre « Bétons et coffrages » | 17,58 m³ |
| | Aciers (ratios + 8 %) | | 1 621 kg |
| Maçonnerie | Agglos de 15 (façades 82,51 + refend 19,05) | | 101,56 m² |
| | Agglos de 10 (cloisons) | | 39,16 m² |
| Toiture-terrasse | Forme de pente (7 cm moyens) | 88 × 0,07 | 6,16 m³ |
| | Étanchéité + relevés | 88 + 7,60 | 95,60 m² |
| Enduits et revêtements | Enduits (intérieurs 205 + plafonds 85 + façades 126,43) | | 416,43 m² |
| | Carrelage, plinthes, faïence | | 82 m² ; 70 ml ; 22 m² |
| Menuiseries | Porte d'entrée, 6 portes, fenêtres | | 1 u ; 6 u ; 9,72 m² |
| Électricité | Points lumineux, prises, tableau | | 14 u ; 18 u ; 1 ens |
| Plomberie | Appareils sanitaires, fosse et puisard | | 5 u ; 1 ens |
| Peinture | Intérieure, façades | | 290 m² ; 126,43 m² |

## 2. Le devis (prix indicatifs du bordereau)
| Lot | Montant HT (F) | Part |
|---|---|---|
| Installation de chantier (forfait) | 500 000 | 2,5 % |
| Terrassements | 306 635 | 1,5 % |
| Fondations | 3 362 920 | 17,0 % |
| Élévation béton armé | 4 873 300 | 24,6 % |
| Maçonnerie | 1 258 520 | 6,3 % |
| Toiture-terrasse (forme 85 000 F/m³, étanchéité 18 000 F/m²) | 2 244 400 | 11,3 % |
| Enduits et revêtements | 2 858 290 | 14,4 % |
| Menuiseries | 1 489 000 | 7,5 % |
| Électricité | 772 000 | 3,9 % |
| Plomberie sanitaire | 1 125 000 | 5,7 % |
| Peinture | 1 042 576 | 5,3 % |
| **Total HT** | **19 832 641** | 100 % |
| TVA 18 % | 3 569 875 | |
| **Total TTC** | **23 402 516** | |
Détail d'un lot (fondations) : propreté 1,18 × 75 000 = 88 500 ; béton armé 5,94 × 185 000 = 1 098 900 ; aciers 480 × 1 000 = 480 000 ; soubassement 27,96 × 12 000 = 335 520 ; hérisson 85 × 6 500 = 552 500 ; dallage 85 × 9 500 = 807 500 → **3 362 920 F**.

## 3. Les contrôles de cohérence
- **Coût au m²** : 19 832 641 / 93,79 = **≈ 211 500 F HT/m²** (≈ 249 500 F TTC/m²), hors VRD et hors branchements : cohérent pour une maison économique à moyenne ;
- **Gros œuvre** (terrassements + fondations + élévation + maçonnerie) : 9 801 375 F, soit **49 %** : dans la fourchette 40 – 50 % ;
- **Béton / m² de plancher** : (5,94 + 17,58) / 93,79 = 0,25 m³/m² ✔ ; **acier / béton** : 2 101 / 23,52 = 89 kg/m³ ✔.

## 4. Le sous-détail des matériaux (pour les commandes)
| Matériau | Calcul | Total avec pertes |
|---|---|---|
| Ciment | bétons 1,18 × 3 + 5,94 × 7 + 6,80 × 6 + 17,58 × 7 ; maçonneries (27,96 + 101,56) × 0,09 + 39,16 × 0,06 ; enduits 416,43 × 0,13 ; forme 6,16 × 5 → 307,9 sacs | **324 sacs (≈ 16,2 t)** |
| Sable | bétons 31,50 × 0,40 ; maçonneries ; enduits ; forme → 28,6 m³ | **31,5 m³ (≈ 50 t)** |
| Gravier | bétons 31,50 × 0,80 → 25,2 m³ | **27,7 m³ (≈ 42 t)** |
| Agglos | pleins 360 ; creux de 15 : 1 308 ; creux de 10 : 505 | **2 173 agglos** |
| Aciers | 480 + 1 621 | **2 101 kg** |

> [!astuce] Refaire l'étude avec la plateforme
> Ouvrez l'outil **Métré** : saisissez ces lignes (ou partez d'un projet type de « Construction de A à Z »), modifiez les prix selon votre région et comparez le total : c'est le meilleur entraînement pour l'examen comme pour le métier.

> [!retenir]
> - Démarche complète : plans → avant-métré par lots → DQE → récapitulatif → contrôles par ratios → sous-détail des matériaux.
> - Toujours vérifier coût au m², part du gros œuvre et ratios béton/acier.
> - Les VRD et branchements s'ajoutent (5 à 10 %).`,
 exercices:[
  {t:"Vérifier un lot du devis", d:1, e:`Recalculer le lot maçonnerie : 101,56 m² d'agglos de 15 à 9 500 F/m² et 39,16 m² d'agglos de 10 à 7 500 F/m².`, c:`101,56 × 9 500 = **964 820 F** ; 39,16 × 7 500 = **293 700 F**.
Total : **1 258 520 F HT** ✔ (identique au récapitulatif).`},
  {t:"Ajouter les VRD", d:2, e:`On ajoute au projet : clôture (4,2 M), fosse et branchements (déjà compris pour la fosse ; branchements eau et électricité 0,9 M), allée et caniveaux (1,1 M). Calculer le nouveau total HT et la part des VRD.`, c:`VRD : 4,2 + 0,9 + 1,1 = **6,2 M F**.
Nouveau total HT : 19 832 641 + 6 200 000 = **26 032 641 F**.
Part des VRD : 6,2 / 26,03 = **23,8 %** : bien au-delà des 5 à 10 % habituels à cause de la clôture, très coûteuse sur un grand terrain. Le client doit en être informé dès l'estimation.`},
  {t:"Variante : toiture en tôles", d:3, e:`On remplace la toiture-terrasse (2 244 400 F) par une charpente bois et une couverture en tôles bac alu sur 120 m² de rampant (charpente 12 000 F/m², tôles 9 500 F/m²) et un faux plafond de 85 m² (7 500 F/m²). La dalle de 15 cm (14,07 m³ de béton et 80 kg/m³ d'acier) est remplacée par un simple chaînage déjà compté. Calculer l'économie.`, c:`Nouvelle toiture : 120 × (12 000 + 9 500) + 85 × 7 500 = 2 580 000 + 637 500 = **3 217 500 F**.
Économie sur la dalle : béton 14,07 × 185 000 = 2 602 950 F ; acier 14,07 × 80 × 1,08 × 1 000 = 1 215 648 F → **3 818 598 F**.
Bilan : − 2 244 400 − 3 818 598 + 3 217 500 = **− 2 845 498 F** : la variante en tôles économise environ **2,8 M F HT** (14 %), mais sans possibilité de surélévation ultérieure.`},
  {t:"Planning des commandes de ciment", d:2, e:`Répartir les 324 sacs de ciment entre les phases : fondations et dallage (propreté, béton armé, soubassement, dallage), élévation (béton armé et maçonneries), finitions (forme de pente, enduits). Utiliser le tableau du sous-détail, avec 5 % de pertes.`, c:`- Fondations et dallage : 1,18 × 3 + 5,94 × 7 + 27,96 × 0,09 + 6,80 × 6 = 3,5 + 41,6 + 2,5 + 40,8 = 88,4 → **93 sacs**
- Élévation : 17,58 × 7 + 101,56 × 0,09 + 39,16 × 0,06 = 123,1 + 9,1 + 2,3 = 134,5 → **141 sacs**
- Finitions : 6,16 × 5 + 416,43 × 0,13 = 30,8 + 54,1 = 84,9 → **89 sacs**
Total : 323 sacs ≈ 324 ✔ (écart d'arrondi), livrés en au moins trois fois.`},
  {t:"Prix de vente au m²", d:2, e:`L'entreprise applique un coefficient K = 1,355 sur ses déboursés secs. Si le devis HT (19,83 M) est son prix de vente, quel est le déboursé sec total ? Quelle marge brute (frais + bénéfice) dégage-t-elle ?`, c:`DS = 19 832 641 / 1,355 = **≈ 14 637 000 F**.
Marge brute (frais de chantier, frais généraux et bénéfice) : 19 832 641 − 14 637 000 = **≈ 5 196 000 F**, soit 26 % du prix de vente.`}
 ],
 quiz:[
  {q:"La démarche complète du métreur est :", o:["Plans → métré → DQE → récapitulatif → contrôles → matériaux","Devis → plans → chantier","Peinture → fondations","Prix → plans"], r:0, e:"Toujours dans cet ordre."},
  {q:"Coût au m² = ", o:["Total HT / surface construite","Surface / total","Total × TVA","Prix du ciment × 7"], r:0, e:"Ratio de contrôle."},
  {q:"Dans l'étude de cas, le gros œuvre représente environ :", o:["49 %","5 %","90 %","15 %"], r:0, e:"Fourchette 40 – 50 %."},
  {q:"Le ratio acier / béton de l'étude (≈ 89 kg/m³) est :", o:["Plausible","Beaucoup trop fort","Nul","Impossible"], r:0, e:"Bâtiment courant : 70 à 110 kg/m³."},
  {q:"Les VRD de l'étude de cas sont :", o:["À ajouter au devis du bâtiment","Déjà compris","Interdits","Gratuits"], r:0, e:"5 à 10 % en général, parfois plus."}
 ]}
]});
