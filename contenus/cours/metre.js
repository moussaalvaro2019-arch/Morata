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
 sujet:{titre:"Organiser un avant-métré : unités, règles et feuille de métré d'une boutique", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un commerçant de Yopougon veut construire une **boutique** simple de **8,00 × 5,00 m** (dimensions extérieures brutes). Vous êtes stagiaire dans un bureau d'études et vous préparez l'avant-métré du gros œuvre.

**Données**
- Murs en agglos creux de **15 cm** (épaisseur brute 0,15 m) ;
- Semelle filante sous tous les murs : **0,40 m** de large, **0,20 m** de haut, sur un béton de propreté de **5 cm** (même largeur) ;
- Fouilles en rigole : **0,40 m** de large, **0,60 m** de profondeur ;
- Hauteur de maçonnerie (dessus dallage → dessous chaînage) : **3,00 m** ;
- Ouvertures : 1 porte métallique **1,20 × 2,40 m** et 2 fenêtres **1,20 × 1,00 m** ;
- Dallage intérieur entre murs bruts.

### Partie A — Vocabulaire (5 points)
1. Définir : avant-métré, métré, devis quantitatif et estimatif (DQE), attachement. (2 pts)
2. Donner l'unité de mesure des ouvrages suivants : fouilles, béton armé, coffrage, aciers, maçonnerie, plinthes, portes, installation de chantier, enduit, gouttière. (3 pts)

### Partie B — Règles de base (5 points)
3. Dans quel ordre présente-t-on les ouvrages d'un avant-métré ? Citer trois règles de présentation d'une feuille de métré. (2 pts)
4. Calculer le périmètre extérieur, le périmètre intérieur et le **périmètre à l'axe** des murs. Lequel utilise-t-on pour les murs extérieurs et pourquoi ? (3 pts)

### Partie C — Feuille de métré (10 points)
5. Établir la feuille de métré (colonnes : n°, désignation, nombre, longueur, largeur, hauteur, quantité partielle, quantité totale, unité) pour : (8 pts)
   - les fouilles en rigole ;
   - le béton de propreté ;
   - le béton de la semelle filante ;
   - la maçonnerie d'agglos de 15 (ouvertures déduites) ;
   - le dallage.
6. Pourquoi les déductions sont-elles écrites comme des quantités partielles négatives plutôt que soustraites de tête ? (2 pts)`,
  corrige:`### Partie A — Vocabulaire (5 pts)
1. *(2 pts)*
   - **Avant-métré** : calcul des quantités d'ouvrages **sur plans**, avant les travaux (pour le devis ou l'appel d'offres).
   - **Métré** : mesure des quantités **réellement exécutées**, sur le chantier ou sur plans de récolement.
   - **DQE** : tableau quantités × prix unitaires = montants, par article et par lot.
   - **Attachement** : constat écrit et contradictoire des quantités exécutées (indispensable pour les ouvrages cachés).
2. Fouilles **m³** ; béton armé **m³** ; coffrage **m²** ; aciers **kg** ; maçonnerie **m²** ; plinthes **ml** ; portes **u** ; installation de chantier **ft** (forfait) ; enduit **m²** ; gouttière **ml**. *(3 pts, 0,3 par réponse)*

### Partie B — Règles (5 pts)
3. Ordre **d'exécution** des lots (terrassements → fondations → élévation → toiture → finitions → lots techniques → VRD) et, dans un lot, du bas vers le haut. Règles : un ouvrage par ligne avec un libellé précis ; dimensions toujours dans le même ordre (L × l × h) ; deux décimales ; quantités partielles puis total ; repérer chaque ligne (axe, pièce, repère du plan). *(2 pts)*
4. *(3 pts)*
   - Extérieur : 2 × (8,00 + 5,00) = **26,00 m** ;
   - Intérieur : 2 × (7,70 + 4,70) = **24,80 m** ;
   - Axe : 2 × (7,85 + 4,85) = **25,40 m** (moyenne des deux).
   On mesure les murs extérieurs **à l'axe** : les angles comptés en trop à l'extérieur compensent exactement ceux comptés en moins à l'intérieur, pour toute section symétrique (mur, semelle, fouille centrée).

### Partie C — Feuille de métré (10 pts)
5. *(8 pts)*

| N° | Désignation | Nb | L | l | h | Partiel | Total | U |
|---|---|---|---|---|---|---|---|---|
| 1 | Fouilles en rigole | 1 | 25,40 | 0,40 | 0,60 | 6,10 | **6,10** | m³ |
| 2 | Béton de propreté ép. 5 cm | 1 | 25,40 | 0,40 | 0,05 | 0,51 | **0,51** | m³ |
| 3 | Béton armé de semelle filante | 1 | 25,40 | 0,40 | 0,20 | 2,03 | **2,03** | m³ |
| 4 | Maçonnerie d'agglos de 15 : brut | 1 | 25,40 | | 3,00 | 76,20 | | |
| | à déduire : porte | −1 | 1,20 | | 2,40 | −2,88 | | |
| | à déduire : fenêtres | −2 | 1,20 | | 1,00 | −2,40 | **70,92** | m² |
| 5 | Dallage | 1 | 7,70 | 4,70 | | 36,19 | **36,19** | m² |

6. Écrire chaque déduction sur sa ligne (nombre négatif) rend le calcul **vérifiable** par un tiers, évite les oublis et permet de reprendre facilement une quantité si le plan change (une fenêtre ajoutée = une ligne). *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser le périmètre extérieur (26,00 m) pour les fouilles et les semelles : on compte deux fois les angles.
> - Oublier l'unité ou mélanger m² et m³ dans une même colonne.
> - Soustraire les ouvertures de tête sans les écrire : le métré n'est plus contrôlable.`},
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
 sujet:{titre:"Lire un dossier de plans avant de métrer : échelles, cotes et niveaux", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On vous remet le dossier de plans d'une maison basse à Bouaké. Avant tout métré, le chef de bureau vous demande de vérifier que vous savez exploiter le plan de masse, les cotes et les niveaux.

**Données**
- **Plan de masse au 1/500** : la parcelle mesure **4,0 × 5,0 cm** sur le plan ; l'emprise de la maison **2,26 × 1,66 cm** ;
- **Plan du rez-de-chaussée au 1/100** ; un détail de fenêtre au **1/20** montre un appui de **6,0 cm** de long ;
- Chaîne de cotes de la façade principale (de gauche à droite) : 0,15 – 3,50 – 0,10 – **x** – 0,10 – 4,30 – 0,15 ; cote totale **11,30** ;
- Chaîne de cotes du pignon : 0,15 – 4,00 – 0,10 – **y** – 0,15 ; cote totale **8,30** ;
- Coupe : niveau fini RDC **± 0,00** ; terrain naturel **− 0,30** ; niveau fini de la terrasse accessible **+ 3,20** ; dalle **16 cm**, chape et carrelage **4 cm** ;
- Nomenclature des menuiseries : P1 porte d'entrée 0,90 × 2,20 (×1) ; P2 portes intérieures 0,80 × 2,10 (×5) ; F1 fenêtres 1,20 × 1,20 (×6) ; F2 fenêtres 0,60 × 0,60 (×3). Les P2 sont toutes dans des cloisons.

### Partie A — Échelles (5 points)
1. Calculer les dimensions réelles de la parcelle et sa surface. (2 pts)
2. Calculer l'emprise au sol de la maison et le coefficient d'emprise au sol (CES). (2 pts)
3. Quelle est la longueur réelle de l'appui de fenêtre ? (1 pt)

### Partie B — Cotes (6 points)
4. Calculer les cotes manquantes x et y. (2 pts)
5. Expliquer la différence entre cotes partielles, cotes cumulées et cote totale ; pourquoi la vérification « somme des partielles = totale » est-elle indispensable ? (2 pts)
6. Pourquoi ne faut-il jamais mesurer à la règle sur un plan quand une cote existe ? (2 pts)

### Partie C — Niveaux (4 points)
7. Calculer la hauteur sous plafond du rez-de-chaussée (sans faux plafond ni enduit). (2 pts)
8. De combien faut-il remblayer sous le dallage si celui-ci (8 cm) repose sur un hérisson de 15 cm ? (2 pts)

### Partie D — Nomenclature (5 points)
9. Calculer la surface totale des baies, puis la surface des baies à déduire de la maçonnerie des **murs extérieurs**. (3 pts)
10. Citer quatre documents du dossier à consulter avant de métrer et ce qu'on y cherche. (2 pts)`,
  corrige:`### Partie A — Échelles (5 pts)
1. 1 cm au 1/500 = 5 m → parcelle **20,00 × 25,00 m = 500 m²**. *(2 pts)*
2. Emprise : 2,26 × 5 = 11,30 m ; 1,66 × 5 = 8,30 m → **93,79 m²** ; **CES = 93,79 / 500 = 0,19 (18,8 %)**. *(2 pts)*
3. Au 1/20, 1 cm = 0,20 m → appui **1,20 m**. *(1 pt)*

### Partie B — Cotes (6 pts)
4. x = 11,30 − (0,15 + 3,50 + 0,10 + 0,10 + 4,30 + 0,15) = 11,30 − 8,30 = **3,00 m** ; y = 8,30 − (0,15 + 4,00 + 0,10 + 0,15) = **3,90 m**. *(2 pts)*
5. **Partielles** : entre deux éléments voisins (murs, baies) ; **cumulées** : depuis une origine unique (pas d'erreurs qui s'additionnent) ; **totale** : hors tout. Si la somme des partielles ne donne pas la totale, le plan contient une erreur : on la signale à l'architecte avant de métrer. *(2 pts)*
6. Le papier se déforme, l'impression peut être réduite, le dessin peut être faux alors que la cote est juste : **la cote prime sur le dessin**. *(2 pts)*

### Partie C — Niveaux (4 pts)
7. HSP = 3,20 − 0,04 − 0,16 = **3,00 m**. *(2 pts)*
8. Dessous du dallage : 0,00 − 0,08 = −0,08 ; dessous du hérisson : −0,08 − 0,15 = **−0,23**. Terrain naturel à −0,30 → remblai compacté de **0,07 m** seulement (après décapage de la terre végétale, souvent davantage). *(2 pts)*

### Partie D — Nomenclature (5 pts)
9. *(3 pts)*
   - P1 : 1,98 m² ; P2 : 5 × 1,68 = 8,40 m² ; F1 : 6 × 1,44 = 8,64 m² ; F2 : 3 × 0,36 = 1,08 m² → **total 20,10 m²** ;
   - murs extérieurs (P2 exclues) : 1,98 + 8,64 + 1,08 = **11,70 m²**.
10. Plan de masse (implantation, emprise, VRD) ; plans des niveaux (dimensions, baies) ; coupes (hauteurs, niveaux, épaisseurs) ; plans de structure et de ferraillage (béton, aciers) ; CCTP (qualité, règles de mesure) ; nomenclature des menuiseries. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier de convertir l'échelle au carré pour les surfaces (1 cm² au 1/500 = 25 m²).
> - Déduire les portes intérieures de la maçonnerie des murs extérieurs.
> - Confondre niveau fini (carrelage) et niveau brut (dalle) dans le calcul des hauteurs.`},
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
 sujet:{titre:"Géométrie du métreur : terrasse, citerne, pignon, talus et pentes", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un hôtel à Grand-Bassam, vous devez fournir rapidement plusieurs quantités qui demandent un peu de géométrie.

**Données**
- Terrasse en forme de **trapèze** : bases **12,00 m** et **8,00 m**, distance entre les bases **6,50 m** ;
- Citerne cylindrique enterrée : diamètre intérieur **2,50 m**, hauteur utile **2,00 m** ;
- Pignon triangulaire d'un bâtiment de **8,30 m** de large, toiture à deux pans de pente **30 %** ;
- Débord de toiture : projection horizontale d'un pan, débord compris : **4,65 m** ;
- Fouille de bassin : fond **10,00 × 6,00 m**, profondeur **1,50 m**, talus à **45°** (1 pour 1) sur les quatre côtés ;
- Canalisation : regard amont fil d'eau **− 0,80 m**, longueur **30,00 m**, pente **1,5 %**.

Formule du prismoïde : V = h / 6 × (S1 + S2 + 4 Sm).

### Partie A — Surfaces (6 points)
1. Calculer la surface de la terrasse. (2 pts)
2. Calculer la hauteur du pignon (sur l'axe du faîtage) et la surface du pignon en maçonnerie. (2 pts)
3. Calculer la longueur du rampant d'un pan et l'angle de la toiture en degrés. (2 pts)

### Partie B — Volumes (8 points)
4. Calculer la contenance de la citerne en m³ et en litres. (2 pts)
5. Calculer les dimensions de la fouille du bassin en surface, puis la section à mi-profondeur. (2 pts)
6. Calculer le volume de la fouille par la formule du prismoïde. (2 pts)
7. Calculer le volume par la moyenne des deux aires et l'écart en %. Conclure. (2 pts)

### Partie C — Pentes (6 points)
8. Calculer la cote du fil d'eau du regard aval. (2 pts)
9. Une rampe d'accès PMR monte de **0,30 m**. Quelle longueur minimale faut-il pour une pente de **5 %** ? (2 pts)
10. Convertir 30 % en degrés et 45° en %. (2 pts)`,
  corrige:`### Partie A — Surfaces (6 pts)
1. S = (12,00 + 8,00) / 2 × 6,50 = **65,00 m²**. *(2 pts)*
2. Demi-largeur 4,15 m → h = 4,15 × 0,30 = **1,245 m** ; S = 8,30 × 1,245 / 2 = **5,17 m²**. *(2 pts)*
3. $$ rampant = 4,65 × √(1 + 0,30²) = 4,65 × 1,044 = 4,85 m
   angle = arctan 0,30 = **16,7°**. *(2 pts)*

### Partie B — Volumes (8 pts)
4. V = π × 1,25² × 2,00 = **9,82 m³ ≈ 9 820 L**. *(2 pts)*
5. Talus 1 pour 1 sur 1,50 m : + 1,50 m de chaque côté → surface **13,00 × 9,00 m** (S2 = 117 m²) ; fond S1 = 60 m² ; mi-profondeur : **11,50 × 7,50 = 86,25 m²**. *(2 pts)*
6. V = 1,50 / 6 × (60 + 117 + 4 × 86,25) = 0,25 × 522 = **130,50 m³**. *(2 pts)*
7. (60 + 117) / 2 × 1,50 = **132,75 m³**, soit **+ 1,7 %** : la moyenne des aires surestime toujours un peu le volume d'une fouille en talus ; l'écart reste faible et on l'accepte souvent sur chantier. *(2 pts)*

### Partie C — Pentes (6 pts)
8. Chute = 30,00 × 0,015 = 0,45 m → fil d'eau aval **− 1,25 m**. *(2 pts)*
9. L = 0,30 / 0,05 = **6,00 m** (en projection horizontale). *(2 pts)*
10. arctan 0,30 = **16,7°** ; tan 45° = 1 → **100 %**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre pente en % et angle en degrés (30 % ≠ 30°).
> - Calculer la section à mi-hauteur comme la moyenne des surfaces : on prend la moyenne des **dimensions**.
> - Oublier le débord dans la projection du rampant.`},
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
 sujet:{titre:"Terrassements d'une villa : fouilles, remblais, évacuation et apports", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Villa R+0 à Abatta. Vous établissez le métré du lot terrassements à partir du plan de fondations.

**Données**
- Emprise du bâtiment **14,00 × 10,00 m** ; décapage de la terre végétale sur **15 cm**, **1,50 m** autour de l'emprise ;
- Terrain naturel (après décapage) à **0,00** ; sol : latérite, foisonnement **1,25** ;
- **12 semelles isolées 1,20 × 1,20 × 0,30 m** sur béton de propreté de **5 cm**, fond de fouille à **− 1,20** ; surlargeur de travail **0,15 m** de chaque côté ;
- **Amorces de poteaux 25 × 25** du dessus des semelles jusqu'au TN ;
- **Longrines 20 × 40** (dessus au TN) : longueur totale à l'axe **64,00 m** en **17 tronçons** ; fouilles en rigole **0,40 × 0,45 m**, avec béton de propreté de 5 cm sur la largeur de la rigole ;
- Remblai d'apport sous dallage : surface **120 m²**, épaisseur compactée **0,30 m**, coefficient d'approvisionnement **1,30** ;
- Camions de **8 m³**.

### Partie A — Fouilles (8 points)
1. Calculer la surface décapée et le volume de terre végétale foisonnée à évacuer. (2 pts)
2. Calculer le volume des fouilles en puits. (2 pts)
3. Expliquer pourquoi les rigoles se mesurent entre les puits, puis calculer leur volume. (3 pts)
4. En déduire le volume total des fouilles. (1 pt)

### Partie B — Remblais et évacuation (8 points)
5. Calculer le volume des ouvrages enterrés : bétons de propreté, semelles, amorces (25 × 25 × 0,85 m), longrines (longueur entre poteaux). (4 pts)
6. Calculer le volume de remblai des fouilles. (2 pts)
7. Calculer le volume foisonné de déblais excédentaires et le nombre de rotations de camion. (2 pts)

### Partie C — Remblai d'apport (4 points)
8. Calculer le volume en place puis le volume à approvisionner, et le nombre de camions. (2 pts)
9. Pourquoi ne peut-on pas réutiliser la terre végétale en remblai sous dallage ? (2 pts)`,
  corrige:`### Partie A — Fouilles (8 pts)
1. (14,00 + 3,00) × (10,00 + 3,00) = **221 m²** ; terre végétale 221 × 0,15 = 33,15 m³ en place → × 1,25 = **41,44 m³** foisonnés (6 rotations de 8 m³), sauf si on la stocke pour les espaces verts. *(2 pts)*
2. Puits : 12 × (1,20 + 2 × 0,15)² × 1,20 = 12 × 1,50 × 1,50 × 1,20 = **32,40 m³**. *(2 pts)*
3. Les puits sont déjà creusés sur toute leur profondeur : compter les rigoles sur toute la longueur compterait deux fois les zones communes. Longueur en rigole : 64,00 − 17 × 1,50 = **38,50 m** → 38,50 × 0,40 × 0,45 = **6,93 m³**. *(3 pts)*
4. Total fouilles : 32,40 + 6,93 = **39,33 m³**. *(1 pt)*

### Partie B — Remblais et évacuation (8 pts)
5. *(4 pts)*

| Ouvrage | Calcul | m³ |
|---|---|---|
| Propreté des semelles | 12 × 1,20 × 1,20 × 0,05 | 0,86 |
| Semelles | 12 × 1,20 × 1,20 × 0,30 | 5,18 |
| Amorces | 12 × 0,25 × 0,25 × 0,85 | 0,64 |
| Longrines | (64,00 − 17 × 0,25) × 0,20 × 0,40 | 4,78 |
| Propreté des longrines | 38,50 × 0,40 × 0,05 | 0,77 |
| **Total** | | **12,24** |

6. Remblai des fouilles : 39,33 − 12,24 = **27,09 m³** (en place, compacté par couches). *(2 pts)*
7. Excédent : 12,24 × 1,25 = **15,30 m³** foisonnés → 15,30 / 8 = 1,9 → **2 rotations**. *(2 pts)*

### Partie C — Remblai d'apport (4 pts)
8. 120 × 0,30 = **36,00 m³** en place → × 1,30 = **46,80 m³** à approvisionner → 46,80 / 8 = 5,85 → **6 camions**. *(2 pts)*
9. Elle contient des matières organiques qui pourrissent et se tassent : le dallage fissurerait. On utilise de la latérite ou du sable compacté par couches de 20 cm. *(2 pts)*

> [!attention] Erreurs à éviter
> - Appliquer le foisonnement au volume des fouilles pour le paiement : les fouilles se paient **en place**.
> - Oublier les surlargeurs dans les puits (et les compter dans les rigoles, qui ont déjà leur largeur de travail).
> - Calculer les longrines sur 64 m sans retirer les poteaux, ou les rigoles sans retirer les puits.`},
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
 sujet:{titre:"Fondations filantes, soubassement et dallage d'une maison", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Maison à Daloa fondée sur semelles filantes. Vous établissez le métré du lot fondations et la commande de ciment correspondante.

**Données**
- Murs extérieurs : rectangle de **11,00 × 7,30 m à l'axe** ; un **refend** traverse la largeur ;
- Béton de propreté **5 cm**, largeur **0,60 m** ; semelle filante **0,50 × 0,25 m** ;
- Les semelles du refend se mesurent **entre nus des semelles extérieures** ; le béton de propreté du refend, entre nus des propretés extérieures ;
- Soubassement en **agglos pleins de 15**, hauteur **0,60 m**, casse **3 %** ; le refend se mesure entre nus des murs ;
- Chaînage bas **15 × 20** sur tous les murs (coffré sur deux faces) ;
- Dallage **8 cm** dosé à **300 kg/m³** sur hérisson de **15 cm** (0,16 m³ de pierres par m²), treillis soudé en panneaux de surface utile **13,00 m²** ;
- Ciment (sacs de 50 kg) : béton de propreté **3 sacs/m³** ; béton armé **7 sacs/m³** ; dallage **6 sacs/m³**.

### Partie A — Béton de propreté et semelles (6 points)
1. Calculer la longueur de semelle à métrer (axe des murs extérieurs + refend). (2 pts)
2. Calculer le volume de béton de propreté. (2 pts)
3. Calculer le volume de béton des semelles. (2 pts)

### Partie B — Soubassement et chaînage (6 points)
4. Calculer la surface de soubassement et le nombre d'agglos pleins. (3 pts)
5. Calculer le volume de béton et la surface de coffrage du chaînage bas. (3 pts)

### Partie C — Dallage (5 points)
6. Calculer la surface intérieure à daller (refend déduit). (2 pts)
7. Calculer le volume de pierres du hérisson, le volume de béton du dallage et le nombre de panneaux de treillis. (3 pts)

### Partie D — Ciment (3 points)
8. Calculer le nombre total de sacs de ciment pour les ouvrages de ce lot (+ 5 % de pertes). (3 pts)`,
  corrige:`### Partie A — Propreté et semelles (6 pts)
1. Périmètre à l'axe : 2 × (11,00 + 7,30) = **36,60 m** ; refend : 7,30 − 0,50 = **6,80 m** → **43,40 m**. *(2 pts)*
2. Propreté : refend 7,30 − 0,60 = 6,70 m → (36,60 + 6,70) × 0,60 × 0,05 = 43,30 × 0,03 = **1,30 m³**. *(2 pts)*
3. Semelles : 43,40 × 0,50 × 0,25 = **5,43 m³**. *(2 pts)*

### Partie B — Soubassement et chaînage (6 pts)
4. Longueur : 36,60 + (7,30 − 0,15) = **43,75 m** ; surface 43,75 × 0,60 = **26,25 m²** ; agglos 26,25 × 12,5 × 1,03 = **338 agglos pleins**. *(3 pts)*
5. Béton : 43,75 × 0,15 × 0,20 = **1,31 m³** ; coffrage : 43,75 × 2 × 0,20 = **17,50 m²**. *(3 pts)*

### Partie C — Dallage (5 pts)
6. Intérieur : (11,00 − 0,15) × (7,30 − 0,15) = 10,85 × 7,15 = 77,58 m² ; refend : 7,15 × 0,15 = 1,07 m² → **76,51 m²**. *(2 pts)*
7. *(3 pts)*
   - Pierres : 76,51 × 0,16 = **12,24 m³** ;
   - Béton : 76,51 × 0,08 = **6,12 m³** ;
   - Treillis : 76,51 / 13,00 = 5,9 → **6 panneaux**.

### Partie D — Ciment (3 pts)
8. Propreté 1,30 × 3 = 3,9 ; semelles 5,43 × 7 = 38,0 ; chaînage 1,31 × 7 = 9,2 ; dallage 6,12 × 6 = 36,7 → **87,8 sacs** ; + 5 % → 92,2 → **93 sacs** (hors mortier du soubassement : 26,25 × 0,09 ≈ 2,4 sacs de plus). *(3 pts)*

> [!attention] Erreurs à éviter
> - Mesurer le refend d'axe à axe (7,30 m) : on compterait deux fois les croisements.
> - Oublier de retirer l'emprise du refend dans la surface du dallage.
> - Commander le treillis à la surface brute sans tenir compte des recouvrements.`},
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
 sujet:{titre:"Maçonneries d'une maison : murs extérieurs, cloisons, matériaux et montant", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Maison de plain-pied à Yamoussoukro. On vous demande le métré du lot maçonnerie, la commande de matériaux et le montant HT.

**Données**
- Murs extérieurs en **agglos creux de 15**, rectangle de **12,00 × 9,00 m à l'axe** ;
- Hauteur de maçonnerie (dessus dallage → dessous chaînage) : **2,80 m** ;
- **12 poteaux** noyés dans les murs, largeur vue **0,20 m** ;
- Baies des murs extérieurs : 1 porte **1,00 × 2,20** ; 7 fenêtres **1,20 × 1,40** ; 2 fenêtres **0,60 × 0,60** placées juste sous le chaînage (sans linteau) ;
- Linteaux de **20 cm** de haut, débordant de **20 cm** de chaque côté des baies ;
- Le CCTP prévoit de ne déduire que les vides de **plus de 0,50 m²** ;
- Cloisons en **agglos creux de 10** : trois cloisons de **8,85 m, 4,85 m et 3,85 m** entre nus, 4 portes **0,80 × 2,10** avec linteaux de 1,20 × 0,20 m ;
- 12,5 agglos/m², casse **4 %** ; mortier dosé à **300 kg/m³** : 0,015 m³/m² (agglos de 15) et 0,010 m³/m² (agglos de 10) ;
- Prix du bordereau : agglos de 15 : **12 000 F/m²** ; agglos de 10 : **9 500 F/m²**.

### Partie A — Murs extérieurs (8 points)
1. Calculer la surface brute de maçonnerie. (2 pts)
2. Calculer les déductions : poteaux, baies (en appliquant la règle des 0,50 m²) et linteaux. (4 pts)
3. En déduire la surface nette. (2 pts)

### Partie B — Cloisons (5 points)
4. Calculer la surface nette des cloisons. (3 pts)
5. Pourquoi mesure-t-on les cloisons entre nus et non à l'axe ? (2 pts)

### Partie C — Matériaux (4 points)
6. Calculer le nombre d'agglos de 15 et de 10 à commander. (2 pts)
7. Calculer le volume de mortier et le nombre de sacs de ciment. (2 pts)

### Partie D — Montant (3 points)
8. Calculer le montant HT du lot maçonnerie. (3 pts)`,
  corrige:`### Partie A — Murs extérieurs (8 pts)
1. Périmètre à l'axe 2 × (12,00 + 9,00) = 42,00 m → **42,00 × 2,80 = 117,60 m²**. *(2 pts)*
2. *(4 pts)*
   - Poteaux : 12 × 0,20 × 2,80 = **6,72 m²** ;
   - Baies > 0,50 m² : 1 × 2,20 + 7 × 1,68 = **13,96 m²** (les fenêtres de 0,36 m² ne se déduisent pas) ;
   - Linteaux : (1,40 + 7 × 1,60) × 0,20 = 12,60 × 0,20 = **2,52 m²**.
3. Net : 117,60 − 6,72 − 13,96 − 2,52 = **94,40 m²**. *(2 pts)*

### Partie B — Cloisons (5 pts)
4. Brut : (8,85 + 4,85 + 3,85) × 2,80 = 17,55 × 2,80 = 49,14 m² ; portes 4 × 1,68 = 6,72 ; linteaux 4 × 1,20 × 0,20 = 0,96 → **41,46 m²**. *(3 pts)*
5. La cloison s'arrête au nu du mur qu'elle rencontre : à l'axe, on compterait deux fois la partie déjà comptée dans le mur. *(2 pts)*

### Partie C — Matériaux (4 pts)
6. Agglos de 15 : 94,40 × 12,5 × 1,04 = **1 228** ; agglos de 10 : 41,46 × 12,5 × 1,04 = **539**. *(2 pts)*
7. Mortier : 94,40 × 0,015 = 1,416 m³ et 41,46 × 0,010 = 0,415 m³ → **1,83 m³** ; ciment 1,83 × 300 = 549 kg → **11 sacs** (8,5 + 2,5) ; sable ≈ 1,83 m³. *(2 pts)*

### Partie D — Montant (3 pts)
8. 94,40 × 12 000 = 1 132 800 F ; 41,46 × 9 500 = 393 870 F → **1 526 670 F HT**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier la règle du marché sur les petits vides (ici, ne pas déduire les 0,60 × 0,60).
> - Compter les poteaux et linteaux en maçonnerie : ils sont payés au lot béton armé.
> - Mesurer les murs extérieurs entre nus intérieurs ou au périmètre extérieur.`},
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
 sujet:{titre:"Enduits intérieurs, façades, plafonds et chapes d'un bâtiment de deux pièces", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un bâtiment de deux pièces (bureau et salle de réunion) est en fin de gros œuvre à Korhogo. Vous métrez les enduits et la chape.

**Données**
- **Chambre-bureau** : **4,00 × 4,20 m** entre murs bruts ; **salle** : **5,60 × 4,20 m** entre murs bruts ; murs de **15 cm** (3 murs transversaux) ;
- Hauteur sous plafond brute : **2,80 m** ;
- Baies : porte d'entrée de la salle **1,00 × 2,20** ; porte de communication **0,80 × 2,10** ; fenêtre du bureau **1,20 × 1,20** ; 2 fenêtres de la salle **1,20 × 1,40** ;
- Tableaux des fenêtres (2 côtés + linteau, pas l'appui) enduits côté intérieur, comptés en m² (profondeur 0,15 m) ;
- Façades : hauteur enduite **3,20 m** ;
- Mortier (dosé à 350 kg/m³) : intérieur **0,018 m³/m²** (0,13 sac) ; plafond **0,015 m³/m²** (0,11 sac) ; façade **0,022 m³/m²** (0,15 sac) ;
- Chape de **4 cm** dosée à **300 kg/m³** (6 sacs/m³) mesurée entre murs enduits (enduit de **1,5 cm**).

### Partie A — Enduits intérieurs (7 points)
1. Calculer l'enduit des murs du bureau (tableaux compris). (3 pts)
2. Calculer l'enduit des murs de la salle (tableaux compris). (3 pts)
3. Pourquoi la porte de communication est-elle déduite dans les deux pièces ? (1 pt)

### Partie B — Plafonds et façades (5 points)
4. Calculer l'enduit des plafonds. (1 pt)
5. Calculer les dimensions extérieures du bâtiment, le périmètre extérieur et la surface nette des façades. (4 pts)

### Partie C — Matériaux (5 points)
6. Calculer le nombre de sacs de ciment pour l'ensemble des enduits. (3 pts)
7. Calculer le volume de sable (+ 10 %). (2 pts)

### Partie D — Chape (3 points)
8. Calculer la surface de chape, son volume et le ciment nécessaire. (3 pts)`,
  corrige:`### Partie A — Enduits intérieurs (7 pts)
1. Bureau : 2 × (4,00 + 4,20) × 2,80 = 45,92 m² − porte 1,68 − fenêtre 1,44 + tableaux (2 × 1,20 + 1,20) × 0,15 = 0,54 → **43,34 m²**. *(3 pts)*
2. Salle : 2 × (5,60 + 4,20) × 2,80 = 54,88 m² − 2,20 − 1,68 − 2 × 1,68 + tableaux 2 × (2 × 1,40 + 1,20) × 0,15 = 1,20 → **48,84 m²**. *(3 pts)*
3. La porte traverse le mur : il manque de l'enduit sur **chacune des deux faces**. *(1 pt)*
   Total murs intérieurs : **92,18 m²**.

### Partie B — Plafonds et façades (5 pts)
4. 4,00 × 4,20 + 5,60 × 4,20 = 16,80 + 23,52 = **40,32 m²**. *(1 pt)*
5. Longueur : 4,00 + 5,60 + 3 × 0,15 = **10,05 m** ; largeur : 4,20 + 2 × 0,15 = **4,50 m** ; périmètre **29,10 m** ; brut 29,10 × 3,20 = 93,12 m² ; baies extérieures 2,20 + 1,44 + 3,36 = 7,00 m² → **86,12 m²** (tableaux déjà comptés à l'intérieur). *(4 pts)*

### Partie C — Matériaux (5 pts)
6. Ciment : 92,18 × 0,13 = 11,98 ; 40,32 × 0,11 = 4,44 ; 86,12 × 0,15 = 12,92 → **29,3 → 30 sacs**. *(3 pts)*
7. Sable : 92,18 × 0,018 + 40,32 × 0,015 + 86,12 × 0,022 = 1,66 + 0,60 + 1,89 = 4,16 m³ → + 10 % = **4,6 m³**. *(2 pts)*

### Partie D — Chape (3 pts)
8. Entre enduits : 3,97 × 4,17 + 5,57 × 4,17 = 16,55 + 23,23 = **39,78 m²** ; volume 39,78 × 0,04 = **1,59 m³** ; ciment 1,59 × 6 = 9,5 → **10 sacs**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Mesurer la façade sur le périmètre intérieur.
> - Oublier les tableaux, souvent oubliés alors qu'ils prennent du temps à réaliser.
> - Métrer la chape entre murs bruts : l'enduit est fait avant.`},
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
 sujet:{titre:"Béton armé d'élévation d'un rez-de-chaussée : volumes et coffrages sans double compte", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Rez-de-chaussée d'un immeuble de bureaux à Cocody. Vous métrez le béton et les coffrages des ouvrages d'élévation (hors aciers).

**Données**
- **10 poteaux 20 × 20**, hauteur du dessus du dallage au **dessous des poutres** : **2,80 m** ;
- Poutres **20 × 40** (hauteur totale, dalle comprise) ; longueur cumulée **entre poteaux** : **37,20 m** ;
- Dalle pleine de **15 cm**, dimensions hors tout **10,20 × 8,20 m**, avec une **trémie d'escalier de 3,00 × 1,20 m** ;
- Linteaux **15 × 20** : longueur cumulée **14,60 m** (coffrés sur le fond et les deux joues) ;
- Règles : poteaux arrêtés sous les poutres ; poutres comptées **en retombée sous la dalle**, entre poteaux ; sous-face de dalle coffrée hors emprise des poutres ; rives de dalle et bords de trémie coffrés sur 15 cm ;
- Prix du bordereau : béton armé dosé à 350 (hors coffrage et aciers) **120 000 F/m³** ; coffrage **6 500 F/m²**.

### Partie A — Poteaux (4 points)
1. Calculer le volume de béton et la surface de coffrage des poteaux. (4 pts)

### Partie B — Poutres (5 points)
2. Calculer la hauteur de retombée et le volume de béton des poutres. (2 pts)
3. Calculer le coffrage des poutres (fond + deux joues de retombée). (3 pts)

### Partie C — Dalle (6 points)
4. Calculer le volume de béton de la dalle (trémie déduite). (2 pts)
5. Calculer la sous-face coffrée, la rive de dalle et les bords de trémie. (4 pts)

### Partie D — Linteaux et récapitulatif (5 points)
6. Calculer le béton et le coffrage des linteaux. (2 pts)
7. Récapituler béton et coffrage, calculer le ratio coffrage / béton et le montant HT. (3 pts)`,
  corrige:`### Partie A — Poteaux (4 pts)
1. Béton : 10 × 0,20 × 0,20 × 2,80 = **1,12 m³** ; coffrage : 10 × 4 × 0,20 × 2,80 = **22,40 m²**. *(4 pts)*

### Partie B — Poutres (5 pts)
2. Retombée : 0,40 − 0,15 = **0,25 m** ; béton : 37,20 × 0,20 × 0,25 = **1,86 m³**. *(2 pts)*
3. Fond : 37,20 × 0,20 = 7,44 m² ; joues : 2 × 37,20 × 0,25 = 18,60 m² → **26,04 m²**. *(3 pts)*

### Partie C — Dalle (6 pts)
4. 10,20 × 8,20 × 0,15 = 12,55 m³ − trémie 3,00 × 1,20 × 0,15 = 0,54 m³ → **12,01 m³**. *(2 pts)*
5. *(4 pts)*
   - Sous-face : 83,64 − 3,60 (trémie) − 7,44 (fonds de poutres) = **72,60 m²** ;
   - Rive : 2 × (10,20 + 8,20) × 0,15 = **5,52 m²** (avec la joue de retombée, la face extérieure d'une poutre de rive fait bien 0,40 m) ;
   - Bords de trémie : 2 × (3,00 + 1,20) × 0,15 = **1,26 m²**.

### Partie D — Linteaux et récapitulatif (5 pts)
6. Béton : 14,60 × 0,15 × 0,20 = **0,44 m³** ; coffrage : 14,60 × 0,15 + 2 × 14,60 × 0,20 = 2,19 + 5,84 = **8,03 m²**. *(2 pts)*
7. *(3 pts)*

| Ouvrage | Béton (m³) | Coffrage (m²) |
|---|---|---|
| Poteaux | 1,12 | 22,40 |
| Poutres | 1,86 | 26,04 |
| Dalle | 12,01 | 79,38 |
| Linteaux | 0,44 | 8,03 |
| **Total** | **15,43** | **135,85** |

Ratio : 135,85 / 15,43 = **8,8 m² de coffrage par m³** (ordre de grandeur courant pour une structure poteaux-poutres-dalle).
Montant : 15,43 × 120 000 = 1 851 600 F ; 135,85 × 6 500 = 883 025 F → **2 734 625 F HT**.

> [!attention] Erreurs à éviter
> - Compter les poutres sur 40 cm de haut **et** la dalle sur toute sa surface : la partie commune est comptée deux fois.
> - Prolonger les poteaux jusqu'au-dessus de la dalle.
> - Oublier la trémie dans le béton et dans la sous-face.`},
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
 sujet:{titre:"Nomenclature d'aciers d'un ensemble semelle + poteau et commande en barres de 12 m", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une villa compte **12 ensembles identiques « semelle isolée + poteau »**. Vous établissez la nomenclature des aciers, les ratios et la commande.

**Données**
- Semelle **1,20 × 1,20 × 0,30 m**, enrobage **5 cm** ; nappe inférieure en **HA12** espacés de **15 cm** dans les deux sens, chaque barre avec deux retours de **0,15 m** ;
- Poteau **25 × 25** de hauteur totale **3,65 m** (amorce 0,85 m + RDC 2,80 m), enrobage **2,5 cm** ;
- Aciers longitudinaux : **4 HA14** de longueur droite **3,90 m** plus un retour en pied de **0,30 m** ;
- Cadres **HA6** espacés de **15 cm** ; crochets : 2 × 10 Ø ;
- Masses linéiques : HA6 **0,222** ; HA12 **0,888** ; HA14 **1,208 kg/m** ; barres du commerce de **12 m**.

### Partie A — Semelle (5 points)
1. Calculer le nombre de barres par direction (longueur couverte = 1,20 − 2 × 0,05). (2 pts)
2. Calculer la longueur développée d'une barre, la longueur totale et le poids. (3 pts)

### Partie B — Poteau (6 points)
3. Calculer la longueur et le poids des aciers longitudinaux. (2 pts)
4. Calculer les dimensions intérieures d'un cadre, sa longueur développée et le nombre de cadres. (3 pts)
5. En déduire le poids des cadres. (1 pt)

### Partie C — Récapitulatif et ratios (4 points)
6. Présenter la nomenclature d'un ensemble et le poids pour les 12 ensembles. (2 pts)
7. Calculer le volume de béton d'un ensemble et le ratio kg/m³ ; le comparer aux ratios usuels (semelles 30 à 50 ; poteaux 100 à 150). (2 pts)

### Partie D — Commande (5 points)
8. Combien de morceaux peut-on couper dans une barre de 12 m pour chaque diamètre ? En déduire le nombre de barres à commander. (3 pts)
9. Calculer le taux de chutes pour le HA14 et proposer une solution pour le réduire. (2 pts)`,
  corrige:`### Partie A — Semelle (5 pts)
1. 1,10 / 0,15 = 7,3 → 8 espacements → **9 barres** par direction (18 barres). *(2 pts)*
2. L = 1,10 + 2 × 0,15 = **1,40 m** ; 18 × 1,40 = **25,20 m** ; 25,20 × 0,888 = **22,38 kg**. *(3 pts)*

### Partie B — Poteau (6 pts)
3. 4 × (3,90 + 0,30) = **16,80 m** × 1,208 = **20,29 kg**. *(2 pts)*
4. Cadre intérieur : 0,25 − 2 × 0,025 = **0,20 × 0,20 m** ; L = 4 × 0,20 + 2 × 10 × 0,006 = 0,80 + 0,12 = **0,92 m** ; nombre : 3,65 / 0,15 = 24,3 → 25 espacements → **26 cadres**. *(3 pts)*
5. 26 × 0,92 = 23,92 m × 0,222 = **5,31 kg**. *(1 pt)*

### Partie C — Récapitulatif (4 pts)
6. *(2 pts)*

| Repère | Ø | Nb | L. unitaire | L. totale | Poids (kg) |
|---|---|---|---|---|---|
| 1 – nappe de semelle | HA12 | 18 | 1,40 | 25,20 | 22,38 |
| 2 – filantes du poteau | HA14 | 4 | 4,20 | 16,80 | 20,29 |
| 3 – cadres | HA6 | 26 | 0,92 | 23,92 | 5,31 |
| **Total d'un ensemble** | | | | | **47,98** |

12 ensembles : **575,8 kg**.
7. Béton : 1,20 × 1,20 × 0,30 + 0,25² × 3,65 = 0,432 + 0,228 = **0,660 m³** → **72,7 kg/m³** (semelle seule : 22,38 / 0,432 = 51,8 kg/m³, en haut de la fourchette ; poteau seul : 25,60 / 0,228 = 112 kg/m³, dans la fourchette). *(2 pts)*

### Partie D — Commande (5 pts)
8. *(3 pts)*
   - HA12 : 12 / 1,40 = 8 morceaux par barre ; 12 × 18 = 216 morceaux → **27 barres** ;
   - HA14 : 12 / 4,20 = 2 morceaux ; 48 morceaux → **24 barres** ;
   - HA6 : 12 / 0,92 = 13 cadres ; 312 cadres → **24 barres**.
9. HA14 commandé : 24 × 12 × 1,208 = 347,9 kg pour 243,5 kg utiles → **30 % de chutes** (3,60 m par barre). Solutions : réutiliser les chutes de 3,60 m (chapeaux, linteaux, attentes) ; ou couper les poteaux en deux barres avec recouvrement au niveau de l'amorce ; ou commander des longueurs sur mesure. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le « + 1 » dans le nombre de barres ou de cadres.
> - Calculer le cadre sur les dimensions extérieures du poteau.
> - Commander au poids théorique sans tenir compte des chutes.`},
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
 sujet:{titre:"Plancher à corps creux 16+4 et escalier droit : quantités et matériaux", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Duplex à Bingerville : vous métrez le plancher de l'étage d'une pièce et l'escalier droit qui y mène.

**Données — plancher**
- Panneau de **8,40 × 4,50 m** entre appuis ; poutrelles préfabriquées parallèles au côté de **4,50 m**, entraxe **0,60 m**, appui de **0,10 m** à chaque extrémité ;
- Entrevous de 16 cm : **20 cm** de long dans le sens des poutrelles ;
- Béton coulé en place (nervures + dalle de compression 4 cm) : **0,07 m³/m²**, dosé à 350 (7 sacs/m³) ;
- Treillis soudé : **1,10 m²** par m² de plancher (recouvrements compris) ; casse des entrevous **5 %**.

**Données — escalier**
- **18 contremarches** pour une hauteur de **3,06 m** ; giron **0,28 m** ; largeur **1,00 m** ;
- Paillasse de **15 cm** d'épaisseur ; le palier d'arrivée est compté avec la dalle.

### Partie A — Poutrelles et entrevous (8 points)
1. Calculer le nombre de rangées d'entrevous et le nombre de poutrelles. (3 pts)
2. Calculer la longueur d'une poutrelle et la longueur totale à commander. (2 pts)
3. Calculer le nombre d'entrevous (casse comprise) et comparer au ratio de 8,3 entrevous par m². (3 pts)

### Partie B — Béton et treillis (5 points)
4. Calculer la surface du plancher, le volume de béton et le nombre de sacs de ciment. (3 pts)
5. Calculer la surface de treillis soudé. (2 pts)

### Partie C — Escalier (7 points)
6. Calculer la hauteur d'une marche, la projection horizontale de la volée et l'angle de la paillasse. (3 pts)
7. Calculer la longueur de la paillasse et son volume de béton. (2 pts)
8. Calculer le volume des marches (prismes triangulaires) et le volume total de l'escalier. (2 pts)`,
  corrige:`### Partie A — Poutrelles et entrevous (8 pts)
1. 8,40 / 0,60 = **14 rangées** d'entrevous ; les rangées de rive s'appuient sur les chaînages → **13 poutrelles**. *(3 pts)*
2. 4,50 + 2 × 0,10 = **4,70 m** ; 13 × 4,70 = **61,10 ml** (ratio : 61,10 / 37,80 = 1,6 ml/m²). *(2 pts)*
3. Par rangée : 4,50 / 0,20 = 22,5 → 23 ; 14 × 23 = 322 → + 5 % = **339 entrevous**. Ratio : 37,80 × 8,33 = 315 : notre décompte est un peu supérieur (arrondi de chaque rangée), il est plus juste pour la commande. *(3 pts)*

### Partie B — Béton et treillis (5 pts)
4. Surface **37,80 m²** ; béton 37,80 × 0,07 = **2,65 m³** ; ciment 2,65 × 7 = 18,5 → **19 sacs**. *(3 pts)*
5. 37,80 × 1,10 = **41,58 m²** de treillis. *(2 pts)*

### Partie C — Escalier (7 pts)
6. h = 3,06 / 18 = **0,17 m** ; 17 girons → projection 17 × 0,28 = **4,76 m** ; tan α = 0,17 / 0,28 = 0,607 → **α = 31,3°**. *(3 pts)*
7. L = 4,76 / cos 31,3° = **5,57 m** ; paillasse : 5,57 × 1,00 × 0,15 = **0,84 m³**. *(2 pts)*
8. Une marche : 0,28 × 0,17 / 2 × 1,00 = 0,0238 m³ ; 17 marches → **0,40 m³** ; total **1,24 m³** (coffrage : sous-face 5,57 m² + contremarches 18 × 0,17 × 1,00 = 3,06 m²). *(2 pts)*

> [!attention] Erreurs à éviter
> - Compter autant de poutrelles que de rangées d'entrevous.
> - Oublier les longueurs d'appui des poutrelles.
> - Calculer la paillasse sur la projection horizontale au lieu de sa longueur inclinée.`},
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
 sujet:{titre:"Toiture à deux pans en bac aluminium : couverture, eaux pluviales, charpente et étanchéité", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Salle polyvalente à San-Pédro : bâtiment de **12,00 × 8,00 m** couvert par une toiture à deux pans, plus un petit auvent en toiture-terrasse.

**Données**
- Faîtage parallèle à la grande longueur ; pente **25 %** ; débords de **0,60 m** sur les quatre côtés ;
- Bac aluminium de largeur utile **1,00 m**, longueurs commandées sur mesure (arrondies aux 10 cm supérieurs) ;
- Pannes en bois **8 × 16**, entraxe **1,00 m** mesuré sur le rampant (une panne à l'égout et une au faîtage) ;
- Fixations : **6 par m²** ; descentes Ø 100 (78,5 cm²) de **3,50 m** ; règle : **1 cm² de descente par m² de toiture projetée** ;
- Auvent en toiture-terrasse de **4,00 × 3,00 m**, adossé au bâtiment par un côté de 4,00 m : étanchéité avec **relevés de 0,20 m** sur les trois autres côtés ;
- Prix : couverture **9 500 F/m²** ; faîtière **6 000 F/ml** ; gouttière **8 000 F/ml** ; descente **7 500 F/ml** ; charpente **12 000 F/m²** (surface projetée) ; étanchéité **15 000 F/m²**.

### Partie A — Couverture (6 points)
1. Calculer la projection horizontale d'un pan, débord compris, et la longueur du rampant. (2 pts)
2. Calculer la longueur couverte et la surface de couverture. (2 pts)
3. Calculer le nombre de tôles et leur longueur de commande. (2 pts)

### Partie B — Accessoires et eaux pluviales (5 points)
4. Calculer les longueurs de faîtière, de rives et de gouttières. (2 pts)
5. Vérifier qu'une descente Ø 100 par pan suffit et calculer la longueur de descentes. (3 pts)

### Partie C — Charpente (4 points)
6. Calculer le nombre de lignes de pannes, la longueur totale et le volume de bois. (3 pts)
7. Calculer le nombre de fixations. (1 pt)

### Partie D — Étanchéité de l'auvent (2 points)
8. Calculer la surface d'étanchéité, relevés compris. (2 pts)

### Partie E — Montant (3 points)
9. Calculer le montant HT de la toiture (couverture, accessoires, eaux pluviales, charpente, étanchéité). (3 pts)`,
  corrige:`### Partie A — Couverture (6 pts)
1. Projection : 8,00 / 2 + 0,60 = **4,60 m** ; rampant = 4,60 × √(1 + 0,25²) = 4,60 × 1,031 = **4,74 m**. *(2 pts)*
2. Longueur : 12,00 + 2 × 0,60 = **13,20 m** ; surface : 2 × 4,74 × 13,20 = **125,14 m²**. *(2 pts)*
3. 13,20 / 1,00 = 13,2 → 14 tôles par pan → **28 tôles de 4,80 m**. *(2 pts)*

### Partie B — Accessoires et eaux pluviales (5 pts)
4. Faîtière **13,20 ml** ; rives 4 × 4,74 = **18,96 ml** ; gouttières 2 × 13,20 = **26,40 ml**. *(2 pts)*
5. Surface projetée : 13,20 × 9,20 = 121,44 m², soit **60,72 m² par pan** → section nécessaire 60,72 cm² ≤ 78,5 cm² ✔ (et moins de 80 m² par descente) → **2 descentes**, 2 × 3,50 = **7,00 ml** (+ 2 naissances et coudes). *(3 pts)*

### Partie C — Charpente (4 pts)
6. Par pan : lignes à 0 – 1 – 2 – 3 – 4 m et au faîtage (4,74 m) → **6 lignes** ; 12 lignes × 13,20 = **158,40 ml** ; bois 158,40 × 0,08 × 0,16 = **2,03 m³**. *(3 pts)*
7. 125,14 × 6 = **751 fixations**. *(1 pt)*

### Partie D — Étanchéité (2 pts)
8. 4,00 × 3,00 = 12,00 m² ; relevés : (4,00 + 3,00 + 3,00) × 0,20 = 2,00 m² → **14,00 m²**. *(2 pts)*

### Partie E — Montant (3 pts)
9. *(3 pts)*

| Ouvrage | Qté | P.U. (F) | Montant (F) |
|---|---|---|---|
| Couverture bac alu | 125,14 m² | 9 500 | 1 188 830 |
| Faîtière | 13,20 ml | 6 000 | 79 200 |
| Gouttières | 26,40 ml | 8 000 | 211 200 |
| Descentes | 7,00 ml | 7 500 | 52 500 |
| Charpente | 121,44 m² | 12 000 | 1 457 280 |
| Étanchéité auvent | 14,00 m² | 15 000 | 210 000 |
| **Total HT** | | | **3 199 010** |

> [!attention] Erreurs à éviter
> - Mesurer la couverture en projection : elle se paie **en rampant**, débords compris.
> - Oublier les débords en pignon dans la longueur couverte.
> - Oublier les relevés d'étanchéité, qui sont la partie la plus exposée aux fuites.`},
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
 sujet:{titre:"Carrelage, plinthes et faïence d'un appartement : quantités, commande et montant", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Appartement F3 à Marcory : vous établissez le métré du lot revêtements, la commande et le montant.

**Données (dimensions entre murs enduits)**

| Pièce | Dimensions (m) | Portes (largeur) |
|---|---|---|
| Séjour | 6,17 × 4,47 | 1,00 + 0,80 |
| Chambre 1 | 3,97 × 3,57 | 0,80 |
| Chambre 2 | 3,57 × 3,27 | 0,80 |
| Couloir | 3,60 × 1,20 | 4 × 0,80 |
| Cuisine | 3,07 × 2,47 | (faïence, pas de plinthes) |
| Salle d'eau | 2,47 × 1,97 | (faïence, pas de plinthes) |

- Faïence de la salle d'eau sur **2,10 m** de haut ; porte **0,70 × 2,10**, fenêtre **0,60 × 0,60** ;
- Crédence de la cuisine : **0,60 m** de haut sur deux murs (3,07 + 2,47 m) ;
- Carreaux de sol 40 × 40 en cartons de **1,44 m²**, majoration **8 %** ; faïence en cartons de **1,50 m²**, majoration **10 %** ; plinthes + **5 %** ;
- Colle : sol **5 kg/m²**, faïence **3,5 kg/m²** (sacs de 25 kg) ; joint **0,3 kg/m²** ;
- Prix : carrelage posé **11 000 F/m²** ; plinthes **2 000 F/ml** ; faïence **13 000 F/m²**.

### Partie A — Sols et plinthes (7 points)
1. Calculer la surface de carrelage de chaque pièce et le total. (3 pts)
2. Calculer les plinthes de chaque pièce concernée et le total. (3 pts)
3. Pourquoi mesure-t-on entre murs enduits ? (1 pt)

### Partie B — Faïence (4 points)
4. Calculer la faïence de la salle d'eau et de la crédence. (4 pts)

### Partie C — Commande (6 points)
5. Calculer le nombre de cartons de carreaux de sol et de faïence, et la longueur de plinthes à commander. (3 pts)
6. Calculer le nombre de sacs de colle et la masse de joint. (3 pts)

### Partie D — Montant (3 points)
7. Calculer le montant HT du lot. (3 pts)`,
  corrige:`### Partie A — Sols et plinthes (7 pts)
1. *(3 pts)*

| Pièce | Sol (m²) | Plinthes (ml) |
|---|---|---|
| Séjour | 27,58 | 2 × (6,17 + 4,47) − 1,80 = 19,48 |
| Chambre 1 | 14,17 | 15,08 − 0,80 = 14,28 |
| Chambre 2 | 11,67 | 13,68 − 0,80 = 12,88 |
| Couloir | 4,32 | 9,60 − 3,20 = 6,40 |
| Cuisine | 7,58 | — |
| Salle d'eau | 4,87 | — |
| **Total** | **70,19** | **53,04** |

2. Voir le tableau : **53,04 ml**. *(3 pts)*
3. Le carrelage se pose après les enduits : c'est la surface réellement couverte. *(1 pt)*

### Partie B — Faïence (4 pts)
4. Salle d'eau : 2 × (2,47 + 1,97) × 2,10 = 18,65 m² − porte 1,47 − fenêtre 0,36 = **16,82 m²** ; crédence : (3,07 + 2,47) × 0,60 = **3,32 m²** → **20,14 m²**. *(4 pts)*

### Partie C — Commande (6 pts)
5. Sol : 70,19 × 1,08 = 75,81 m² / 1,44 = 52,6 → **53 cartons** ; faïence : 20,14 × 1,10 = 22,15 / 1,50 = 14,8 → **15 cartons** ; plinthes : 53,04 × 1,05 = **55,7 → 56 ml**. *(3 pts)*
6. Colle sol : 70,19 × 5 = 351 kg → **15 sacs** ; colle faïence : 20,14 × 3,5 = 70 kg → **3 sacs** ; joint : (70,19 + 20,14) × 0,3 = **27 kg**. *(3 pts)*

### Partie D — Montant (3 pts)
7. 70,19 × 11 000 = 772 090 ; 53,04 × 2 000 = 106 080 ; 20,14 × 13 000 = 261 820 → **1 139 990 F HT**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Mettre des plinthes dans les pièces faïencées, ou oublier de déduire les portes.
> - Commander la surface nette sans majoration : il manquera des carreaux du même lot (teinte).
> - Arrondir les cartons à l'unité inférieure.`},
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
 sujet:{titre:"Menuiseries, grilles, faux plafonds et peinture d'une villa", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Second œuvre d'une villa à Assinie. Vous chiffrez les menuiseries, les grilles de défense, le faux plafond et la peinture.

**Données**
- Nomenclature : P1 porte d'entrée métallique 1,00 × 2,20 (×1) à **250 000 F/u** ; P2 portes isoplanes 0,80 × 2,10 (×6) à **85 000 F/u** ; F1 fenêtres aluminium 1,20 × 1,40 (×7) et F2 0,60 × 0,60 (×3) à **75 000 F/m²** ;
- Grilles des F1 : barreaux verticaux en **carré de 12** (1,13 kg/m) espacés de **12 cm** (9 barreaux de 1,40 m), cadre en **plat 30 × 5** (1,18 kg/m) ; prix **2 200 F/kg** ;
- Faux plafond en dalles **60 × 60** : surface des pièces **85 m²**, corniches **74 ml** ; + 5 % ; prix **7 500 F/m²** et **1 500 F/ml** ;
- Peinture : murs intérieurs **280 m²**, façades **160 m²** ; 1 couche d'impression (**10 m²/L**) + 2 couches de finition (intérieur **8 m²/L** par couche, façade **6 m²/L** par couche) ; seaux de **20 L** ;
- Prix peinture : intérieur **2 500 F/m²**, façade **3 500 F/m²** (trois couches comprises).

### Partie A — Menuiseries (6 points)
1. Calculer la surface de fenêtres et le montant de chaque ligne de menuiserie. (4 pts)
2. Quels contrôles faire sur la nomenclature avant de chiffrer ? (2 pts)

### Partie B — Grilles (4 points)
3. Calculer le poids d'une grille, des 7 grilles, et leur montant. (4 pts)

### Partie C — Faux plafond (4 points)
4. Calculer le nombre de dalles et la longueur de corniches à commander. (2 pts)
5. Calculer le montant du faux plafond. (2 pts)

### Partie D — Peinture (6 points)
6. Calculer les litres d'impression et de finition, à l'intérieur et en façade, et le nombre de seaux. (4 pts)
7. Calculer le montant de la peinture et le total du lot. (2 pts)`,
  corrige:`### Partie A — Menuiseries (6 pts)
1. Fenêtres : 7 × 1,68 + 3 × 0,36 = **12,84 m²**. *(4 pts)*

| Repère | Qté | P.U. (F) | Montant (F) |
|---|---|---|---|
| P1 | 1 u | 250 000 | 250 000 |
| P2 | 6 u | 85 000 | 510 000 |
| F1 + F2 | 12,84 m² | 75 000 | 963 000 |
| **Total** | | | **1 723 000** |

2. Compter les repères **sur chaque niveau** et sur les façades, vérifier les sens d'ouverture et les dimensions (tableau fini ou brut), et ce que comprend le prix (huisserie, quincaillerie, vitrage, pose). *(2 pts)*

### Partie B — Grilles (4 pts)
3. Barreaux : 9 × 1,40 × 1,13 = 14,24 kg ; cadre : 2 × (1,20 + 1,40) × 1,18 = 6,14 kg → **20,37 kg** par grille ; 7 grilles : **142,6 kg** ; montant 7 × 20,37 × 2 200 = **313 698 F**. *(4 pts)*

### Partie C — Faux plafond (4 pts)
4. 85 / 0,36 = 236,1 → + 5 % → **248 dalles** ; corniches 74 × 1,05 = **78 ml**. *(2 pts)*
5. 85 × 7 500 + 74 × 1 500 = 637 500 + 111 000 = **748 500 F**. *(2 pts)*

### Partie D — Peinture (6 pts)
6. *(4 pts)*
   - Intérieur : impression 280 / 10 = **28 L** (2 seaux) ; finition 2 × 280 / 8 = **70 L** (4 seaux) ;
   - Façade : impression 160 / 10 = **16 L** (1 seau) ; finition 2 × 160 / 6 = **53,3 L** (3 seaux).
7. 280 × 2 500 + 160 × 3 500 = **1 260 000 F** ; total du lot : 1 723 000 + 313 698 + 748 500 + 1 260 000 = **4 045 198 F HT**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier les petites fenêtres ou compter les portes en m² quand le bordereau les paie à l'unité.
> - Calculer la peinture pour une seule couche.
> - Peser une grille sans son cadre.`},
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
 sujet:{titre:"Du métré aux commandes : sous-détail des matériaux d'un chantier de gros œuvre", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le métré du gros œuvre d'un groupe de deux villas est terminé. Le conducteur de travaux vous demande la liste des matériaux, le nombre de camions et le budget d'achat.

**Quantités d'ouvrages**
- Béton armé dosé à 350 : **24,5 m³** ; béton de dallage dosé à 300 : **9,2 m³** ; béton de propreté dosé à 150 : **2,4 m³** ;
- Maçonnerie d'agglos de 15 : **310 m²** ; agglos de 10 : **120 m²** ;
- Enduits (1,8 cm, dosés à 350) : **900 m²**.

**Fiche de sous-détail**
- Béton : 0,40 m³ de sable et 0,80 m³ de gravier par m³ ; ciment : 7 / 6 / 3 sacs par m³ (350 / 300 / 150) ;
- Agglos de 15 : 0,09 sac et 0,015 m³ de sable par m² ; agglos de 10 : 0,06 sac et 0,010 m³ ; 12,5 agglos/m² + 4 % ;
- Enduit : 0,13 sac et 0,018 m³ de sable par m² ;
- Majorations : ciment **+ 5 %** ; sable et gravier **+ 10 %** ; camions de **12 m³** ;
- Prix rendus chantier : ciment **5 500 F/sac** ; sable **12 000 F/m³** ; gravier **25 000 F/m³** ; agglo de 15 **350 F** ; agglo de 10 **300 F**.

### Partie A — Ciment (6 points)
1. Calculer le nombre de sacs pour chaque ouvrage et le total majoré. (5 pts)
2. Exprimer la commande en tonnes. (1 pt)

### Partie B — Granulats (5 points)
3. Calculer le sable et le gravier nécessaires, majorés. (3 pts)
4. En déduire le nombre de camions de chaque granulat. (2 pts)

### Partie C — Agglos et organisation (4 points)
5. Calculer le nombre d'agglos de 15 et de 10. (2 pts)
6. Pourquoi ne faut-il pas faire livrer tout le ciment en une fois ? Proposer une règle de stockage. (2 pts)

### Partie D — Gâchées (3 points)
7. Pour couler **1,20 m³** de béton dosé à 350 à la bétonnière (1 sac = 0,143 m³ de béton ; 1 brouette de sable, 2 de gravier et 25 L d'eau par sac), calculer le nombre de gâchées et les quantités. (3 pts)

### Partie E — Budget (2 points)
8. Calculer le budget d'achat de ces matériaux. (2 pts)`,
  corrige:`### Partie A — Ciment (6 pts)
1. *(5 pts)*

| Ouvrage | Calcul | Sacs |
|---|---|---|
| Béton armé | 24,5 × 7 | 171,5 |
| Dallage | 9,2 × 6 | 55,2 |
| Propreté | 2,4 × 3 | 7,2 |
| Agglos de 15 | 310 × 0,09 | 27,9 |
| Agglos de 10 | 120 × 0,06 | 7,2 |
| Enduits | 900 × 0,13 | 117,0 |
| **Total** | | **386,0** |

Majoré de 5 % : 405,3 → **406 sacs**.
2. 406 × 50 kg = **20,3 t**. *(1 pt)*

### Partie B — Granulats (5 pts)
3. Béton total : 24,5 + 9,2 + 2,4 = 36,1 m³ → sable 14,44 m³ et gravier 28,88 m³. Sable des maçonneries et enduits : 310 × 0,015 + 120 × 0,010 + 900 × 0,018 = 4,65 + 1,20 + 16,20 = 22,05 m³. *(3 pts)*
   - Sable : 14,44 + 22,05 = 36,49 → + 10 % = **40,1 m³** ;
   - Gravier : 28,88 → + 10 % = **31,8 m³**.
4. Sable : 40,1 / 12 = 3,3 → **4 camions** ; gravier : 31,8 / 12 = 2,6 → **3 camions**. *(2 pts)*

### Partie C — Agglos et organisation (4 pts)
5. Agglos de 15 : 310 × 12,5 × 1,04 = **4 030** ; agglos de 10 : 120 × 12,5 × 1,04 = **1 560**. *(2 pts)*
6. Le ciment s'évente avec l'humidité (prise partielle, perte de résistance) et immobilise de la trésorerie : livrer par lots selon le planning (2 à 3 semaines de consommation), stocker sur palettes, à l'abri, piles de 10 sacs maximum, et utiliser les plus anciens d'abord. *(2 pts)*

### Partie D — Gâchées (3 pts)
7. 1,20 / 0,143 = 8,4 → **9 gâchées** (9 sacs) : **9 brouettes de sable**, **18 brouettes de gravier**, environ **225 L d'eau** (sans en rajouter pour fluidifier). *(3 pts)*

### Partie E — Budget (2 pts)
8. 406 × 5 500 = 2 233 000 ; 40,14 × 12 000 = 481 680 ; 31,77 × 25 000 = 794 250 ; 4 030 × 350 = 1 410 500 ; 1 560 × 300 = 468 000 → **5 387 430 F**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le sable des mortiers et enduits (souvent plus que celui des bétons).
> - Additionner des sacs, des m³ et des tonnes dans la même colonne.
> - Arrondir les camions à l'unité inférieure.`},
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
 sujet:{titre:"Établir et contrôler le DQE du gros œuvre d'une villa", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le métré du gros œuvre d'une villa de **108 m²** (surface hors œuvre) est terminé. Vous établissez le DQE à partir du bordereau, puis vous contrôlez l'offre d'une entreprise.

**Quantités et prix unitaires (F HT)**

| N° | Désignation | U | Qté | P.U. |
|---|---|---|---|---|
| 1.1 | Installation de chantier | ft | 1 | 350 000 |
| 1.2 | Décapage | m² | 221 | 500 |
| 1.3 | Fouilles | m³ | 39,33 | 4 500 |
| 1.4 | Remblai d'apport compacté | m³ | 36,00 | 6 000 |
| 1.5 | Évacuation des déblais | m³ | 15,30 | 3 500 |
| 2.1 | Béton de propreté | m³ | 1,30 | 75 000 |
| 2.2 | Béton armé de fondations (coffrage compris) | m³ | 6,74 | 185 000 |
| 2.3 | Aciers HA façonnés et posés | kg | 580 | 1 000 |
| 2.4 | Soubassement en agglos pleins de 15 | m² | 26,25 | 12 000 |
| 2.5 | Hérisson ép. 15 cm | m² | 76,51 | 6 500 |
| 2.6 | Dallage 8 cm + treillis | m² | 76,51 | 9 500 |
| 3.1 | Béton armé d'élévation (coffrage compris) | m³ | 15,43 | 185 000 |
| 3.2 | Aciers HA façonnés et posés | kg | 1 450 | 1 000 |
| 3.3 | Maçonnerie d'agglos de 15 | m² | 94,40 | 12 000 |
| 3.4 | Cloisons en agglos de 10 | m² | 41,46 | 9 500 |

L'offre de l'entreprise indique : article 2.6 → **762 845 F** ; article 3.1 → quantité **15,34 m³**, montant **2 837 900 F**.

### Partie A — DQE (9 points)
1. Calculer le montant de chaque article. (6 pts)
2. Calculer les sous-totaux des lots 1 (terrassements), 2 (fondations) et 3 (élévation). (3 pts)

### Partie B — Récapitulatif (5 points)
3. Établir le récapitulatif : total HT, TVA 18 %, total TTC. (3 pts)
4. Le maître d'ouvrage veut une provision pour imprévus de 5 % sur le TTC : quel budget doit-il prévoir ? (2 pts)

### Partie C — Contrôle de l'offre (3 points)
5. Identifier et corriger les deux anomalies de l'offre. De combien le total HT de l'entreprise est-il faussé ? (3 pts)

### Partie D — Ratios (3 points)
6. Calculer le coût du gros œuvre au m². (1 pt)
7. Si le gros œuvre représente 45 % du coût total, estimer le coût total HT de la villa. (2 pts)`,
  corrige:`### Partie A — DQE (9 pts)
1. et 2. *(9 pts)*

| N° | Montant (F) |
|---|---|
| 1.1 | 350 000 |
| 1.2 | 110 500 |
| 1.3 | 176 985 |
| 1.4 | 216 000 |
| 1.5 | 53 550 |
| **Lot 1** | **907 035** |
| 2.1 | 97 500 |
| 2.2 | 1 246 900 |
| 2.3 | 580 000 |
| 2.4 | 315 000 |
| 2.5 | 497 315 |
| 2.6 | 726 845 |
| **Lot 2** | **3 463 560** |
| 3.1 | 2 854 550 |
| 3.2 | 1 450 000 |
| 3.3 | 1 132 800 |
| 3.4 | 393 870 |
| **Lot 3** | **5 831 220** |

### Partie B — Récapitulatif (5 pts)
3. Total HT = 907 035 + 3 463 560 + 5 831 220 = **10 201 815 F** ; TVA 18 % = **1 836 327 F** ; TTC = **12 038 142 F**. *(3 pts)*
4. 12 038 142 × 1,05 = **12 640 049 F**. *(2 pts)*

### Partie C — Contrôle (3 pts)
5. *(3 pts)*
   - 2.6 : 76,51 × 9 500 = **726 845 F** (chiffres inversés) → + 36 000 F ;
   - 3.1 : quantité mal recopiée (15,34 au lieu de **15,43**) → 2 854 550 F, soit − 16 650 F dans l'offre.
   Le total HT de l'entreprise est faussé de 36 000 − 16 650 = **+ 19 350 F**. C'est le prix unitaire (et en cas de désaccord, le prix en lettres) qui fait foi : on corrige les montants.

### Partie D — Ratios (3 pts)
6. 10 201 815 / 108 = **94 460 F/m²** de gros œuvre. *(1 pt)*
7. 10 201 815 / 0,45 = **22,7 millions F HT** environ. *(2 pts)*

> [!attention] Erreurs à éviter
> - Appliquer la TVA article par article puis arrondir : on l'applique au total HT.
> - Recopier les quantités sans les comparer au métré.
> - Confondre provision pour imprévus (maître d'ouvrage) et aléas (inclus dans les prix de l'entreprise).`},
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
 sujet:{titre:"Sous-détail du prix d'un m² de maçonnerie et négociation du prix", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une entreprise répond à un appel d'offres pour un groupe scolaire. Le maître d'ouvrage trouve le prix de la maçonnerie trop élevé (12 000 F/m²) et propose **10 500 F/m²**. Vous établissez le sous-détail pour décider.

**Données pour 1 m² de maçonnerie d'agglos creux de 15**
- 12,5 agglos + **4 %** de casse, à **450 F** l'agglo rendu chantier ;
- Mortier : **0,09 sac** de ciment (+ 5 %) à **5 500 F/sac** ; **0,015 m³** de sable (+ 10 %) à **12 000 F/m³** ; eau : **50 F** ;
- Équipe : 1 maçon (**1 250 F/h** chargé) + 1 manœuvre (**750 F/h** chargé), qui posent **10 m²** par journée de **8 h** ;
- Petit matériel et échafaudage : **150 F/m²** ;
- Coefficients de l'entreprise : frais de chantier **10 %**, frais généraux **12 %**, bénéfice et aléas **10 %**.

### Partie A — Déboursé sec (9 points)
1. Calculer le coût des matériaux pour 1 m². (4 pts)
2. Calculer le temps unitaire et le coût de main-d'œuvre. (3 pts)
3. En déduire le déboursé sec. (2 pts)

### Partie B — Prix de vente (5 points)
4. Calculer le coefficient de vente K et le prix de vente HT. (3 pts)
5. Comparer au prix de 12 000 F/m² de l'offre. (2 pts)

### Partie C — Négociation (6 points)
6. Calculer le coefficient K correspondant à 10 500 F/m², puis le taux de bénéfice restant (FC et FG inchangés). L'entreprise doit-elle accepter ? (3 pts)
7. Le rendement réel tombe à **8 m²/jour** (chantier en étage, approvisionnement difficile). Recalculer le déboursé sec et le prix de vente. (3 pts)`,
  corrige:`### Partie A — Déboursé sec (9 pts)
1. *(4 pts)*

| Poste | Calcul | F/m² |
|---|---|---|
| Agglos | 12,5 × 1,04 = 13 × 450 | 5 850 |
| Ciment | 0,09 × 1,05 × 5 500 | 520 |
| Sable | 0,015 × 1,10 × 12 000 | 198 |
| Eau | forfait | 50 |
| **Matériaux** | | **6 618** |

2. Temps unitaire : 8 h / 10 m² = **0,8 h/m²** pour chacun ; MO = 0,8 × (1 250 + 750) = **1 600 F/m²**. *(3 pts)*
3. DS = 6 618 + 1 600 + 150 = **8 368 F/m²**. *(2 pts)*

### Partie B — Prix de vente (5 pts)
4. K = 1,10 × 1,12 × 1,10 = **1,355** ; PV = 8 368 × 1,355 = **11 340 F/m²**. *(3 pts)*
5. L'offre à 12 000 F/m² contient environ 660 F/m² de marge en plus (K réel = 12 000 / 8 368 = 1,434) : elle est négociable, mais pas jusqu'à n'importe quel prix. *(2 pts)*

### Partie C — Négociation (6 pts)
6. K = 10 500 / 8 368 = **1,255** ; 1 + B = 1,255 / (1,10 × 1,12) = 1,0185 → **B ≈ 1,9 %**. Le bénéfice et les aléas sont presque nuls : le moindre imprévu (casse, retard) rend l'ouvrage déficitaire. L'entreprise peut descendre vers 11 300 – 11 500 F/m², pas à 10 500. *(3 pts)*
7. Temps unitaire 8 / 8 = **1,0 h/m²** → MO = **2 000 F/m²** ; DS = 6 618 + 2 000 + 150 = **8 768 F/m²** ; PV = 8 768 × 1,355 = **11 880 F/m²**. Le rendement pèse lourd : il faut le mesurer sur chantier pour fiabiliser les prix. *(3 pts)*

> [!attention] Erreurs à éviter
> - Utiliser des salaires bruts au lieu des taux horaires chargés.
> - Additionner les pourcentages (10 + 12 + 10 = 32 %) au lieu de multiplier les coefficients.
> - Oublier la casse et les pertes dans les quantités de matériaux.`},
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
 sujet:{titre:"Lots techniques d'une maison F4 : électricité, climatisation et plomberie", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Maison F4 à Angré. Vous métrez les lots électricité, climatisation et plomberie sanitaire à partir des plans techniques.

**Électricité**
- **22 points lumineux** (12 m de câble 1,5 mm² chacun) ; **28 prises 16 A** (10 m de câble 2,5 mm² chacune) ;
- Prises spécialisées : cuisinière (**15 m de 6 mm²**), chauffe-eau (**15 m de 2,5 mm²**), 4 climatiseurs (**15 m de 2,5 mm²** chacun) ;
- Majoration des câbles **10 %** ; câbles vendus en rouleaux de **100 m** ;
- Au plus **8 points** par circuit d'éclairage et **8 prises** par circuit de prises ; un circuit par appareil spécialisé.

**Climatisation** : 3 chambres de **12, 14 et 16 m²** et un séjour vitré de **35 m²** ; ratio **600 BTU/m²** ; gammes : 9 000 – 12 000 – 18 000 – 24 000 BTU.

**Plomberie** : 2 WC, 2 lavabos, 2 douches, 1 évier, 1 chauffe-eau ; PVC mesuré sur plan : Ø 100 **18 m**, Ø 50 **22 m**, Ø 40 **9 m** ; PPR : eau froide **48 m**, eau chaude **16 m** ; + 10 % ; barres de **4 m**.

**Prix (F, fourni posé)** : point lumineux 18 000 ; prise 15 000 ; prise spécialisée 25 000 ; tableau 250 000 ; split 9 000 BTU 250 000 ; 12 000 BTU 320 000 ; 24 000 BTU 550 000 ; WC 120 000 ; lavabo 75 000 ; douche 90 000 ; évier 95 000 ; chauffe-eau 180 000.

### Partie A — Câbles (5 points)
1. Calculer les longueurs de câble de 1,5 – 2,5 – 6 mm² et le nombre de rouleaux. (5 pts)

### Partie B — Circuits (3 points)
2. Calculer le nombre de circuits d'éclairage, de prises et spécialisés. Quelle protection des personnes impose-t-on ? (3 pts)

### Partie C — Climatisation (4 points)
3. Calculer la puissance nécessaire et choisir le split de chaque pièce. (4 pts)

### Partie D — Plomberie (4 points)
4. Calculer le nombre de barres de PVC par diamètre et de PPR. (3 pts)
5. Pourquoi le WC a-t-il une évacuation en Ø 100 ? (1 pt)

### Partie E — Montant (4 points)
6. Calculer le montant de chaque lot et le total. (4 pts)`,
  corrige:`### Partie A — Câbles (5 pts)
1. *(5 pts)*
   - 1,5 mm² : 22 × 12 = 264 m + 10 % = **290 m** → **3 rouleaux** ;
   - 2,5 mm² : 28 × 10 + 15 + 4 × 15 = 355 m + 10 % = **391 m** → **4 rouleaux** ;
   - 6 mm² : 15 + 10 % = **16,5 m** (à la coupe).

### Partie B — Circuits (3 pts)
2. Éclairage : 22 / 8 = 2,75 → **3 circuits** ; prises : 28 / 8 = 3,5 → **4 circuits** ; spécialisés : cuisinière, chauffe-eau, 4 climatiseurs → **6 circuits** ; total **13 circuits**. Protection : interrupteurs **différentiels 30 mA** et mise à la terre. *(3 pts)*

### Partie C — Climatisation (4 pts)
3. *(4 pts)*

| Pièce | Besoin (BTU) | Split choisi |
|---|---|---|
| Chambre 12 m² | 7 200 | 9 000 |
| Chambre 14 m² | 8 400 | 9 000 |
| Chambre 16 m² | 9 600 | 12 000 |
| Séjour 35 m² | 21 000 | 24 000 |

### Partie D — Plomberie (4 pts)
4. Ø 100 : 19,8 m → **5 barres** ; Ø 50 : 24,2 m → **7 barres** ; Ø 40 : 9,9 m → **3 barres** ; PPR eau froide 52,8 m → **14 barres** ; eau chaude 17,6 m → **5 barres**. *(3 pts)*
5. Le WC évacue des matières solides avec un fort débit instantané : il faut un grand diamètre pour éviter les bouchages. *(1 pt)*

### Partie E — Montant (4 pts)
6. *(4 pts)*
   - Électricité : 22 × 18 000 + 28 × 15 000 + 6 × 25 000 + 250 000 = **1 216 000 F** ;
   - Climatisation : 2 × 250 000 + 320 000 + 550 000 = **1 370 000 F** ;
   - Sanitaires : 2 × 120 000 + 2 × 75 000 + 2 × 90 000 + 95 000 + 180 000 = **845 000 F** ;
   - **Total : 3 431 000 F HT** (hors tuyauteries, comptées à part).

> [!attention] Erreurs à éviter
> - Mettre tous les climatiseurs sur un même circuit de prises.
> - Choisir une puissance inférieure au besoin (le split tourne en permanence et use).
> - Oublier les montées et descentes verticales des tubes sur le plan.`},
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
 sujet:{titre:"VRD d'une villa : allée pavée, mur de clôture et assainissement autonome", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur une parcelle de **20 × 30 m** à Bassam, le budget de la villa a oublié les VRD. On vous demande de les métrer.

**Allée carrossable** : **30,00 × 3,50 m** en pavés autobloquants ; couche de base en graveleux latéritique de **20 cm** (coefficient d'approvisionnement **1,30**) ; lit de sable de **3 cm** ; pavés **+ 3 %** ; bordures des deux côtés.

**Mur de clôture**
- Sur tout le périmètre, sauf un portail de **4,00 m** et un portillon de **1,00 m** ;
- Fouille en rigole **0,40 × 0,60 m** ; semelle **0,40 × 0,20 m** ;
- Maçonnerie d'agglos de 15 sur **2,00 m** de haut, **36 poteaux 20 × 20** de 2,00 m ; chaînage haut **15 × 15** ;
- 12,5 agglos/m² + 4 %.

**Assainissement autonome**
- Fosse septique de dimensions extérieures **3,40 × 1,90 m**, profondeur **2,00 m** ; fouille avec **0,30 m** de surlargeur de chaque côté ;
- Puisard circulaire de **1,50 m** de diamètre et **3,00 m** de profondeur, rempli de pierres ;
- Foisonnement **1,25**.

### Partie A — Allée (6 points)
1. Calculer la couche de base en place et à approvisionner. (2 pts)
2. Calculer le sable de pose, les pavés à commander et les bordures. (3 pts)
3. Pourquoi ne pose-t-on pas les pavés directement sur le terrain naturel ? (1 pt)

### Partie B — Clôture (8 points)
4. Calculer la longueur de clôture. (1 pt)
5. Calculer les fouilles et le béton de semelle. (2 pts)
6. Calculer la maçonnerie nette et le nombre d'agglos. (3 pts)
7. Calculer le béton des poteaux et du chaînage. (2 pts)

### Partie C — Assainissement (6 points)
8. Calculer la fouille de la fosse et le remblai autour de la fosse. (3 pts)
9. Calculer la fouille du puisard. (1 pt)
10. Calculer le volume foisonné à évacuer. (2 pts)`,
  corrige:`### Partie A — Allée (6 pts)
1. 30,00 × 3,50 × 0,20 = **21,00 m³** en place → × 1,30 = **27,30 m³** à approvisionner. *(2 pts)*
2. Sable : 105 × 0,03 = **3,15 m³** ; pavés : 105 × 1,03 = **108,2 m²** ; bordures : 2 × 30 = **60 ml**. *(3 pts)*
3. Le terrain naturel n'est ni portant ni drainant : sous les roues, les pavés s'enfonceraient en ornières. *(1 pt)*

### Partie B — Clôture (8 pts)
4. Périmètre 2 × (20 + 30) = 100 m − 4,00 − 1,00 = **95,00 m**. *(1 pt)*
5. Fouilles : 95 × 0,40 × 0,60 = **22,80 m³** ; semelle : 95 × 0,40 × 0,20 = **7,60 m³**. *(2 pts)*
6. Brut : 95 × 2,00 = 190 m² − poteaux 36 × 0,20 × 2,00 = 14,40 m² → **175,60 m²** ; agglos : 175,60 × 12,5 × 1,04 = **2 283**. *(3 pts)*
7. Poteaux : 36 × 0,20 × 0,20 × 2,00 = **2,88 m³** ; chaînage : 95 × 0,15 × 0,15 = **2,14 m³**. *(2 pts)*

### Partie C — Assainissement (6 pts)
8. Fouille : 4,00 × 2,50 × 2,00 = **20,00 m³** ; volume de la fosse : 3,40 × 1,90 × 2,00 = 12,92 m³ → remblai : **7,08 m³**. *(3 pts)*
9. π × 0,75² × 3,00 = **5,30 m³**. *(1 pt)*
10. Excédent en place : 12,92 + 5,30 = 18,22 m³ → × 1,25 = **22,78 m³** foisonnés. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier les VRD dans le budget : 5 à 10 % du coût d'une maison.
> - Commander la latérite au volume en place.
> - Compter le portail dans la longueur de mur.`},
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
 sujet:{titre:"Cubatures d'une plate-forme et d'une voie d'accès : profils et carroyage", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Aménagement d'une zone d'activités à Akoupé : une voie d'accès (profils en travers) et une plate-forme de stockage (carroyage).

**Partie voie — surfaces des profils en travers**

| Profil | Distance au suivant | Déblai (m²) | Remblai (m²) |
|---|---|---|---|
| P1 | 20 m | 8,0 | 0 |
| P2 | 20 m | à calculer | 0 |
| P3 | 25 m | 6,2 | 3,4 |
| P4 | — | 0 | 11,8 |

Au profil P2, le terrain est horizontal : déblai de hauteur **1,40 m** sous une plate-forme de **8,00 m**, talus à **3/2** (1,5 horizontal pour 1 vertical).
Un m³ de remblai compacté demande **1,10 m³** de déblai en place ; foisonnement **1,25** ; camions de **10 m³**.

**Partie plate-forme** : carroyage de **2 × 2 mailles de 10 × 10 m** ; altitudes des nœuds (m) :

| | Col. 1 | Col. 2 | Col. 3 |
|---|---|---|---|
| Ligne 1 | 52,40 | 52,10 | 51,80 |
| Ligne 2 | 52,20 | 51,90 | 51,50 |
| Ligne 3 | 51,90 | 51,60 | 51,30 |

Formule : V = (a × b / 4) × Σ (p × h), avec p = 1 (coin), 2 (bord), 4 (intérieur) et h = Z − Zp.

### Partie A — Profils (10 points)
1. Calculer la surface de déblai du profil P2. (2 pts)
2. Calculer les volumes de déblai et de remblai par la moyenne des aires. (5 pts)
3. Calculer l'excédent de déblai en place, le volume foisonné et le nombre de rotations. (3 pts)

### Partie B — Carroyage (8 points)
4. Calculer le poids de chaque nœud et Σ p. (2 pts)
5. Pour une cote projet **Zp = 51,80 m**, calculer les hauteurs h et le volume net (déblai − remblai). (4 pts)
6. Calculer la cote d'équilibre déblai = remblai. (2 pts)

### Partie C — Synthèse (2 points)
7. Expliquer l'intérêt de caler la plate-forme à la cote d'équilibre et sa limite. (2 pts)`,
  corrige:`### Partie A — Profils (10 pts)
1. S = (l + n h) × h = (8,00 + 1,5 × 1,40) × 1,40 = 10,10 × 1,40 = **14,14 m²** (trapèze de bases 8,00 et 8,00 + 2 × 2,10 = 12,20 m). *(2 pts)*
2. *(5 pts)*
   - Déblai : (8,0 + 14,14) / 2 × 20 + (14,14 + 6,2) / 2 × 20 + (6,2 + 0) / 2 × 25 = 221,4 + 203,4 + 77,5 = **502,3 m³** ;
   - Remblai : 0 + (0 + 3,4) / 2 × 20 + (3,4 + 11,8) / 2 × 25 = 34 + 190 = **224 m³**.
3. Déblai réutilisé : 224 × 1,10 = 246,4 m³ → excédent en place : 502,3 − 246,4 = **255,9 m³** → foisonné : 255,9 × 1,25 = **319,9 m³** → 32,0 → **32 rotations**. *(3 pts)*

### Partie B — Carroyage (8 pts)
4. Coins (4 nœuds) p = 1 ; bords (4 nœuds) p = 2 ; centre p = 4 → **Σ p = 16** (= 4 mailles × 4). *(2 pts)*
5. *(4 pts)*

| h (m) | Col. 1 | Col. 2 | Col. 3 |
|---|---|---|---|
| Ligne 1 | + 0,60 | + 0,30 | 0,00 |
| Ligne 2 | + 0,40 | + 0,10 | − 0,30 |
| Ligne 3 | + 0,10 | − 0,20 | − 0,50 |

Σ p h = (0,60 + 0,00 + 0,10 − 0,50) × 1 + (0,30 + 0,40 − 0,30 − 0,20) × 2 + 0,10 × 4 = 0,20 + 0,40 + 0,40 = **1,00** → V = 100 / 4 × 1,00 = **25 m³** de déblai net.
6. Zéq = Σ p Z / Σ p = 829,80 / 16 = **51,86 m** (vérification : 25 m³ / 400 m² = 0,0625 m au-dessus de 51,80). *(2 pts)*

### Partie C — Synthèse (2 pts)
7. À la cote d'équilibre, les déblais servent de remblais : ni apport ni évacuation, donc moins de camions et de coût. Limites : il faut des déblais de bonne qualité (pas de terre végétale ni d'argile gonflante), tenir compte du foisonnement et du compactage, et respecter les contraintes d'écoulement des eaux et d'accès. *(2 pts)*

> [!attention] Erreurs à éviter
> - Faire la moyenne d'un profil en déblai et d'un profil en remblai sans point de passage.
> - Oublier les poids des nœuds dans le carroyage.
> - Évacuer le volume en place sans le foisonner.`},
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
 sujet:{titre:"Situation de travaux n° 4 : cumul, retenues, révision et net à payer", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Marché de gros œuvre d'un centre de santé à Divo : montant **120 000 000 F HT**, délai **10 mois**. Vous préparez la situation n° 4 de l'entreprise.

**Extrait du marché et avancement cumulé à la fin du mois 4**

| Article | U | P.U. (F) | Qté marché | Qté cumulée |
|---|---|---|---|---|
| Terrassements | ft | 4 500 000 | 1 | 100 % |
| Béton armé de fondations | m³ | 185 000 | 60 | 60 |
| Béton armé d'élévation | m³ | 195 000 | 140 | 85 |
| Maçonnerie | m² | 12 000 | 1 800 | 950 |
| Aciers | kg | 1 000 | 18 000 | 12 400 |

- Cumul de la situation n° 3 : **41 200 000 F HT** ;
- Retenue de garantie **5 %** ; remboursement de l'avance : **15 %** des travaux du mois ;
- Révision : P = P0 × (0,15 + 0,85 × I / I0) avec I0 = **100** et I = **104** ;
- TVA **18 %** sur le net.

### Partie A — Attachements (3 points)
1. Qu'est-ce qu'un attachement ? Pour quels ouvrages de cette liste est-il indispensable et pourquoi ? (3 pts)

### Partie B — Montant cumulé (7 points)
2. Calculer le montant cumulé de chaque article et le total. (4 pts)
3. Calculer le pourcentage d'avancement des trois derniers articles. (2 pts)
4. En déduire le montant des travaux du mois. (1 pt)

### Partie C — Décompte (8 points)
5. Calculer la retenue de garantie et le remboursement de l'avance. (2 pts)
6. Calculer le coefficient et le montant de la révision. (2 pts)
7. Calculer le net HT, la TVA et le net à payer TTC. (4 pts)

### Partie D — Pénalités (2 points)
8. À la fin du chantier, le retard est de **12 jours**. Calculer la pénalité (1/1 000 du marché par jour, plafond 5 %). (2 pts)`,
  corrige:`### Partie A — Attachements (3 pts)
1. Constat écrit et **contradictoire** (entreprise + maître d'œuvre, signé) des quantités exécutées, avec croquis cotés. Indispensable pour les **fondations** et les **aciers** : une fois bétonnés ou remblayés, on ne peut plus les mesurer. *(3 pts)*

### Partie B — Montant cumulé (7 pts)
2. *(4 pts)*

| Article | Calcul | Cumulé (F) |
|---|---|---|
| Terrassements | 100 % × 4 500 000 | 4 500 000 |
| BA fondations | 60 × 185 000 | 11 100 000 |
| BA élévation | 85 × 195 000 | 16 575 000 |
| Maçonnerie | 950 × 12 000 | 11 400 000 |
| Aciers | 12 400 × 1 000 | 12 400 000 |
| **Total** | | **55 975 000** |

3. BA élévation 85 / 140 = **60,7 %** ; maçonnerie 950 / 1 800 = **52,8 %** ; aciers 12 400 / 18 000 = **68,9 %**. *(2 pts)*
4. Travaux du mois : 55 975 000 − 41 200 000 = **14 775 000 F**. *(1 pt)*

### Partie C — Décompte (8 pts)
5. Retenue : 5 % × 14 775 000 = **738 750 F** ; avance : 15 % = **2 216 250 F**. *(2 pts)*
6. Coefficient : 0,15 + 0,85 × 1,04 = **1,034** ; révision : 14 775 000 × 0,034 = **+ 502 350 F**. *(2 pts)*
7. Net HT = 14 775 000 − 738 750 − 2 216 250 + 502 350 = **12 322 350 F** ; TVA = **2 218 023 F** ; **net à payer : 14 540 373 F TTC**. *(4 pts)*

### Partie D — Pénalités (2 pts)
8. 120 000 000 / 1 000 × 12 = **1 440 000 F** ; plafond 5 % = 6 000 000 F, non atteint → on retient 1 440 000 F. *(2 pts)*

> [!attention] Erreurs à éviter
> - Facturer le cumul au lieu des seuls travaux du mois.
> - Appliquer la révision au cumul déjà révisé dans les situations précédentes.
> - Oublier le remboursement de l'avance : l'écart se paie au décompte final.`},
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
 sujet:{titre:"Étude de cas : avant-métré et devis complet d'un studio-boutique", duree:180, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un client d'Abobo veut un **studio-boutique** de plain-pied. Vous réalisez l'avant-métré complet et le devis.

**Description**
- Murs en agglos de 15 : rectangle de **7,15 × 5,15 m** hors tout (murs de 0,15 m) ;
- Fondations : fouille en rigole **0,50 × 0,60** ; propreté **5 cm** sur 0,50 m ; semelle **0,40 × 0,20** ; soubassement en agglos pleins de 15 sur **0,60 m** ; chaînage bas **15 × 20** ;
- Dallage sur hérisson entre murs bruts ;
- Élévation : hauteur de maçonnerie **2,80 m** ; **6 poteaux 15 × 15** (largeur vue 0,15) ; chaînage haut **15 × 20** ; baies : 1 porte **0,90 × 2,20** et 2 fenêtres **1,20 × 1,20** ; linteaux **15 × 20** débordant de **0,20 m** de chaque côté ;
- Toiture à deux pans, faîtage dans la grande longueur, pente **20 %**, débords **0,50 m** partout ;
- Enduits : intérieur sur 2,80 m (sans tableaux), extérieur sur **3,40 m** de haut ; carrelage entre murs enduits (enduit 1,5 cm) ; peinture sur toutes les surfaces enduites.

**Prix unitaires (F HT)** : installation et implantation 150 000 (ft) ; fouilles 4 500/m³ ; propreté 75 000/m³ ; béton armé (aciers et coffrages compris) 250 000/m³ ; soubassement 12 000/m² ; dallage sur hérisson 16 000/m² ; maçonnerie 12 000/m² ; charpente + couverture 22 000/m² (rampant) ; enduit intérieur 3 000/m² ; enduit extérieur 3 500/m² ; carrelage 11 000/m² ; peinture 2 500/m² ; porte métallique 250 000 (u) ; fenêtres aluminium 75 000/m² ; électricité 450 000 (ft).

### Partie A — Infrastructure (6 points)
1. Calculer le périmètre à l'axe, les fouilles, la propreté, la semelle, le soubassement et le chaînage bas. (4 pts)
2. Calculer la surface du dallage. (2 pts)

### Partie B — Élévation (5 points)
3. Calculer la maçonnerie nette. (3 pts)
4. Calculer le béton armé d'élévation (poteaux, chaînage haut, linteaux). (2 pts)

### Partie C — Toiture et finitions (4 points)
5. Calculer le rampant et la surface de couverture. (2 pts)
6. Calculer les enduits intérieur et extérieur, le carrelage et la peinture. (2 pts)

### Partie D — Devis (5 points)
7. Établir le DQE, le total HT, la TVA (18 %) et le total TTC. (4 pts)
8. Calculer le coût au m² hors œuvre et commenter. (1 pt)`,
  corrige:`### Partie A — Infrastructure (6 pts)
1. Axe : 2 × (7,00 + 5,00) = **24,00 m**. *(4 pts)*
   - Fouilles : 24 × 0,50 × 0,60 = **7,20 m³** ;
   - Propreté : 24 × 0,50 × 0,05 = **0,60 m³** ;
   - Semelle : 24 × 0,40 × 0,20 = **1,92 m³** ;
   - Soubassement : 24 × 0,60 = **14,40 m²** ;
   - Chaînage bas : 24 × 0,15 × 0,20 = **0,72 m³**.
2. Dallage : 6,85 × 4,85 = **33,22 m²**. *(2 pts)*

### Partie B — Élévation (5 pts)
3. Brut 24 × 2,80 = 67,20 m² − poteaux 6 × 0,15 × 2,80 = 2,52 − porte 1,98 − fenêtres 2,88 − linteaux (1,30 + 2 × 1,60) × 0,20 = 0,90 → **58,92 m²**. *(3 pts)*
4. Poteaux 6 × 0,15 × 0,15 × 2,80 = 0,378 ; chaînage 24 × 0,15 × 0,20 = 0,720 ; linteaux 4,50 × 0,15 × 0,20 = 0,135 → **1,23 m³**. *(2 pts)*

### Partie C — Toiture et finitions (4 pts)
5. Projection : 5,15 / 2 + 0,50 = 3,075 m ; rampant = 3,075 × √1,04 = **3,14 m** ; longueur 7,15 + 1,00 = 8,15 m → **51,18 m²**. *(2 pts)*
6. Intérieur : 2 × (6,85 + 4,85) × 2,80 = 65,52 − 1,98 − 2,88 = **60,66 m²** ; extérieur : 2 × (7,15 + 5,15) × 3,40 = 83,64 − 4,86 = **78,78 m²** ; carrelage : 6,82 × 4,82 = **32,87 m²** ; peinture : **139,44 m²**. *(2 pts)*

### Partie D — Devis (5 pts)
7. *(4 pts)*

| Désignation | U | Qté | P.U. | Montant (F) |
|---|---|---|---|---|
| Installation, implantation | ft | 1 | 150 000 | 150 000 |
| Fouilles en rigole | m³ | 7,20 | 4 500 | 32 400 |
| Béton de propreté | m³ | 0,60 | 75 000 | 45 000 |
| Béton armé de fondations (1,92 + 0,72) | m³ | 2,64 | 250 000 | 660 000 |
| Soubassement | m² | 14,40 | 12 000 | 172 800 |
| Dallage sur hérisson | m² | 33,22 | 16 000 | 531 520 |
| Maçonnerie d'agglos de 15 | m² | 58,92 | 12 000 | 707 040 |
| Béton armé d'élévation | m³ | 1,23 | 250 000 | 307 500 |
| Charpente et couverture | m² | 51,18 | 22 000 | 1 125 960 |
| Enduit intérieur | m² | 60,66 | 3 000 | 181 980 |
| Enduit extérieur | m² | 78,78 | 3 500 | 275 730 |
| Carrelage | m² | 32,87 | 11 000 | 361 570 |
| Peinture | m² | 139,44 | 2 500 | 348 600 |
| Porte métallique | u | 1 | 250 000 | 250 000 |
| Fenêtres aluminium | m² | 2,88 | 75 000 | 216 000 |
| Électricité | ft | 1 | 450 000 | 450 000 |
| **Total HT** | | | | **5 816 100** |
| TVA 18 % | | | | 1 046 898 |
| **Total TTC** | | | | **6 862 998** |

8. Surface hors œuvre : 7,15 × 5,15 = 36,82 m² → 5 816 100 / 36,82 = **≈ 158 000 F HT/m²**. Le ratio est plus élevé que pour une grande maison : les postes fixes (installation, électricité, menuiseries) pèsent lourd sur une petite surface. *(1 pt)*

> [!attention] Erreurs à éviter
> - Oublier un lot entier (toiture, enduits extérieurs, électricité) : la vérification par ratio au m² permet de le détecter.
> - Mesurer l'enduit extérieur sur le périmètre à l'axe.
> - Mélanger dimensions hors tout, à l'axe et entre murs.`},
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
