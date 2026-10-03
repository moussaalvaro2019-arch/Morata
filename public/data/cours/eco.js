/* =====================================================================
   Économie du bâtiment — cours complet (3 niveaux)
   Débutant : notions de base, prix-coûts-marges-TVA, coût global d'une
              opération, devis et offres, budget d'un particulier
   Intermédiaire : sous-détail de prix, estimation, marchés et appels
              d'offres, mathématiques financières, l'entreprise de BTP,
              garanties et assurances
   Avancé : rentabilité immobilière, VAN et TRI, coût global et choix
            énergétiques, contrôle des coûts et réclamations, étude de cas
   ===================================================================== */
A.addMatiere({
 id:"eco",
 titre:"Économie du bâtiment",
 court:"Économie",
 groupe:"gest",
 icone:"coins",
 couleur:"#1E9B5E",
 niveau:"Intermédiaire",
 heures:60,
 ordre:2,
 prerequis:["metre"],
 resume:"Comprendre et maîtriser l'argent de la construction : coûts, prix, marges et TVA, coût global d'une opération, devis et appels d'offres, budget d'un particulier, sous-détail de prix, estimation, marchés et révision des prix, emprunts et intérêts, gestion de l'entreprise de BTP, garanties et assurances, rentabilité immobilière, VAN et TRI, coût global énergétique et contrôle des coûts, avec applications et exercices corrigés.",
 objectifs:[
  "Calculer prix, marges, TVA, pourcentages et indices",
  "Décomposer le coût global d'une opération et établir un budget",
  "Établir un sous-détail de prix et estimer un projet à chaque phase",
  "Comprendre les marchés, les appels d'offres, la révision des prix et les garanties",
  "Calculer un emprunt, une VAN, un TRI et la rentabilité d'un projet",
  "Contrôler les coûts et argumenter une réclamation"
 ],
 applications:[
  "Budget et financement d'une maison individuelle",
  "Réponse à un appel d'offres et analyse des offres",
  "Contrôle des devis d'entreprises",
  "Montage d'un projet de location ou de vente d'appartements",
  "Choix d'investissements économes en énergie"
 ],
 chapitres:[
{id:"eco-10", niv:1, titre:"Les notions de base : pourcentages, indices et inflation", duree:45, contenu:`## L'économie de la construction
Construire mobilise beaucoup d'argent : celui du **maître d'ouvrage** (particulier, entreprise, État), des **banques**, des **entreprises** et de leurs **fournisseurs**. L'économiste de la construction (ou métreur-vérificateur) aide à **prévoir**, **maîtriser** et **contrôler** ces dépenses. Quelques outils de calcul simples reviennent sans cesse.

## Les pourcentages
- Augmenter de p % : multiplier par **(1 + p/100)** ; diminuer de p % : multiplier par **(1 − p/100)** ;
- Des variations successives se **multiplient** : + 10 % puis + 5 % = × 1,10 × 1,05 = × 1,155, soit **+ 15,5 %** (et non + 15 %) ;
- + 20 % puis − 20 % = × 1,2 × 0,8 = × 0,96 : on **perd 4 %** ;
- Part d'un poste : montant du poste / total × 100.
> [!exemple] Hausse du ciment
> Un sac à 5 500 F augmente de 12 % : 5 500 × 1,12 = **6 160 F**.

## Les indices
Un **indice** suit l'évolution d'un prix par rapport à une base (souvent 100) : variation = (I / I₀ − 1) × 100. Les marchés utilisent des index (ciment, acier, salaires, bâtiment) pour **réviser les prix**.
> [!exemple]
> Index du bâtiment passé de 112 à 121 : variation = (121 / 112 − 1) × 100 = **+ 8,0 %**.

## L'inflation
Les prix montent avec le temps : à **i % par an** pendant n années, un coût est multiplié par **(1 + i)ⁿ**.
> [!exemple]
> Coût de construction de 200 000 F/m² avec 4 % d'inflation par an : dans 3 ans, 200 000 × 1,04³ = **224 973 F/m²**. Attendre pour construire peut coûter cher.

## Prix, coût, valeur
- **Coût** : ce que dépense celui qui produit (l'entreprise) ;
- **Prix** : ce que paie l'acheteur (le client) ;
- **Valeur** : ce que vaut le bien sur le marché (emplacement, état, demande), qui peut être supérieure ou inférieure au coût de construction.

## Application : construire un indice base 100
Prix du sac de ciment relevé chaque année ; on prend 2021 comme base 100 : indice = prix / prix de base × 100.

| Année | Prix du sac | Indice (base 100 en 2021) |
|---|---|---|
| 2021 | 4 800 F | 100,0 |
| 2022 | 5 100 F | 106,3 |
| 2023 | 5 400 F | 112,5 |
| 2024 | 5 500 F | 114,6 |

Hausse totale : + 14,6 % en 3 ans. Taux **moyen** annuel : (5 500 / 4 800)^(1/3) − 1 = **4,6 % par an** (et non 14,6 / 3 = 4,9 %).

> [!exemple] Actualiser un ancien devis
> Devis de 25 M F établi quand l'index valait 112 ; l'index vaut aujourd'hui 121.
> Montant actualisé : 25 × 121 / 112 = **27,0 M F**.

> [!exemple] Taux moyen de variations successives
> + 10 %, puis − 5 %, puis + 8 % : × 1,10 × 0,95 × 1,08 = × 1,1286.
> Hausse globale **+ 12,9 %** ; taux moyen annuel : 1,1286^(1/3) − 1 = **4,1 %**.

## Raisonner en francs constants
Avec 4 % d'inflation par an, 30 M F disponibles dans 3 ans n'auront le pouvoir d'achat que de 30 / 1,04³ = **26,7 M F** d'aujourd'hui. Pour comparer des montants à des dates différentes, on les ramène à la même date.

## Méthode
1. Identifier la **valeur de référence** (initiale, ou base de l'indice) ;
2. Calculer le **coefficient multiplicateur** (valeur finale / valeur initiale) ;
3. En déduire le pourcentage : (coefficient − 1) × 100 ;
4. Pour plusieurs périodes, multiplier les coefficients puis prendre la racine n-ième pour un taux moyen.

> [!attention] Erreurs fréquentes
> - Confondre **points** d'indice et **pourcentage** : de 112 à 121, c'est + 9 points mais + 8,0 %.
> - Additionner des pourcentages successifs.
> - Calculer un pourcentage par rapport à la mauvaise base (la valeur finale au lieu de l'initiale).

> [!retenir]
> - + p % : × (1 + p/100) ; variations successives : on multiplie les coefficients.
> - Variation d'un indice : I/I₀ − 1.
> - Inflation : × (1 + i)ⁿ.
> - Coût ≠ prix ≠ valeur.`,
 exercices:[
  {t:"Variations successives", d:1, e:`Le prix du fer à béton augmente de 8 % en janvier puis de 6 % en juin. Quelle est la hausse totale ? Un HA12 à 9 000 F la barre coûte combien après ces hausses ?`, c:`Coefficient : 1,08 × 1,06 = **1,1448** → hausse de **14,48 %** (et non 14 %).
Barre : 9 000 × 1,1448 = **10 303 F**.`},
  {t:"Baisse puis hausse", d:1, e:`Un fournisseur accorde une remise de 15 % sur un carrelage à 12 000 F/m², puis augmente son tarif de 15 % le mois suivant (sur le prix remisé). Quel est le prix final ? Commenter.`, c:`12 000 × 0,85 × 1,15 = **11 730 F/m²**, soit **− 2,25 %** par rapport au prix initial : une baisse puis une hausse du même pourcentage ne se compensent pas.`},
  {t:"Variation d'un index", d:1, e:`L'index des salaires du BTP passe de 125,4 à 133,2 en un an. Calculer la variation. Un coût de main-d'œuvre de 2 400 000 F suivrait-il cette évolution ?`, c:`Variation : 133,2 / 125,4 − 1 = **+ 6,2 %** → 2 400 000 × 1,062 = **2 549 000 F** environ.`},
  {t:"Le prix de l'attente", d:2, e:`Une maison est estimée à 30 M F aujourd'hui. Avec une inflation des coûts de construction de 5 % par an, combien coûtera-t-elle dans 2 ans ? dans 5 ans ?`, c:`2 ans : 30 × 1,05² = **33,08 M F** ; 5 ans : 30 × 1,05⁵ = **38,29 M F** (+ 28 %). L'épargne doit rapporter au moins autant que l'inflation pour garder son pouvoir d'achat.`},
  {t:"Part des lots", d:1, e:`Un devis de 25 M F comprend : gros œuvre 11,5 M ; toiture 2,8 M ; menuiseries 2,5 M ; électricité-plomberie 3,2 M ; revêtements et peinture 5 M. Calculer la part de chaque lot.`, c:`Gros œuvre **46 %** ; toiture **11,2 %** ; menuiseries **10 %** ; électricité-plomberie **12,8 %** ; revêtements et peinture **20 %** (total 100 %).`}
 ],
 quiz:[
  {q:"+ 10 % puis + 10 % donnent :", o:["+ 21 %","+ 20 %","+ 10 %","+ 11 %"], r:0, e:"1,1 × 1,1 = 1,21."},
  {q:"Un indice passe de 100 à 110 :", o:["+ 10 %","+ 110 %","− 10 %","+ 1 %"], r:0, e:"110/100 − 1."},
  {q:"Avec 3 % d'inflation par an pendant 2 ans, un coût est multiplié par :", o:["1,0609","1,06","1,03","2,03"], r:0, e:"1,03²."},
  {q:"Le coût est :", o:["Ce que dépense le producteur","Ce que paie le client","La valeur du marché","La TVA"], r:0, e:"Coût ≠ prix."},
  {q:"− 20 % puis + 20 % donnent :", o:["− 4 %","0 %","+ 4 %","− 40 %"], r:0, e:"0,8 × 1,2 = 0,96."}
 ]},
{id:"eco-6", niv:1, titre:"Prix, coûts, marges et TVA", duree:50, contenu:`## Du coût au prix de vente
- Le **déboursé sec (DS)** est ce que coûte directement un ouvrage : matériaux + main-d'œuvre + matériel ;
- L'entreprise ajoute ses **frais de chantier**, ses **frais généraux** et son **bénéfice** grâce à un **coefficient de vente K** (souvent 1,25 à 1,45) :
$$ Prix de vente HT = DS × K
> [!exemple] Un m² de mur en agglos de 15 enduit
> Matériaux 6 500 F + main-d'œuvre 2 500 F + matériel 500 F = **DS = 9 500 F** ; avec K = 1,35 : **12 825 F/m² HT** ; avec la TVA à 18 % : 12 825 × 1,18 = **15 134 F/m² TTC**.

## Marge et marque
Prix de revient (tous frais compris) : 900 000 F ; prix de vente HT : 1 000 000 F → bénéfice 100 000 F.
- **Taux de marge** (sur le coût) : 100 000 / 900 000 = **11,1 %** ;
- **Taux de marque** (sur le prix de vente) : 100 000 / 1 000 000 = **10 %**.
On précise toujours sur quoi porte le pourcentage.

## HT, TVA et TTC
- TTC = HT × 1,18 ; HT = TTC / 1,18 (taux normal de **18 %** en Côte d'Ivoire). 59 000 F TTC correspondent à **50 000 F HT**, pas à 59 000 × 0,82 !
- L'entreprise **collecte** la TVA sur ses factures et **déduit** celle payée sur ses achats ; elle reverse la différence à l'État.
> [!exemple] TVA d'une entreprise sur un mois
> Factures : 50 M HT → TVA collectée 9 M ; achats : 30 M HT → TVA déductible 5,4 M → TVA à reverser : **3,6 M F**.
Pour un particulier (qui ne récupère pas la TVA), c'est le **TTC** qui compte.

## Remises et rabais
Une remise s'applique sur le HT ; la TVA se calcule ensuite sur le montant remisé : 12 M HT − 5 % = 11,4 M HT → **13,452 M TTC**.

## Prix unitaire ou forfait ?
- **Prix unitaire** : on paie la quantité réellement exécutée × le prix (m², m³, kg, u) ;
- **Forfait** : un prix global pour un ouvrage défini, quelles que soient les quantités.

> [!attention]
> Un prix inférieur au déboursé sec n'est pas une bonne affaire : l'entreprise se rattrapera sur la qualité (dosages, aciers) ou abandonnera le chantier.

## Application : le prix plafond accepté par le marché
Le marché local paie un m² de maçonnerie **12 000 F HT**. Avec un coefficient K = 1,35, le déboursé sec ne doit pas dépasser 12 000 / 1,35 = **8 889 F/m²**. Si le DS calculé vaut 9 500 F, il faut améliorer le rendement, négocier les achats ou renoncer : baisser K revient à travailler sans bénéfice.

## Passer de la marge à la marque
- Prix de vente **avec un taux de marque** de 15 % : PV = coût / (1 − 0,15) ; pour un coût de revient de 850 000 F : **1 000 000 F** ;
- Prix de vente **avec un taux de marge** de 15 % : PV = coût × 1,15 = **977 500 F** ;
- Conversion : taux de marque = taux de marge / (1 + taux de marge) : 11,1 % de marge ↔ 0,111 / 1,111 = **10 %** de marque.

> [!exemple] La TVA ne coûte rien à l'entreprise
> Un sac de ciment acheté 5 900 F TTC coûte 5 000 F HT à l'entreprise, qui récupère 900 F de TVA.
> Dans ses sous-détails, l'entreprise compte donc 5 000 F.
> Le particulier qui achète le même sac paie réellement 5 900 F.

## Méthode : établir un prix de vente
1. Calculer le **déboursé sec** par unité d'ouvrage (matériaux avec pertes, main-d'œuvre, matériel) ;
2. Appliquer le **coefficient K** (frais de chantier, frais généraux, bénéfice) ;
3. Comparer au **prix du marché** et ajuster ;
4. Appliquer les éventuelles remises sur le HT ;
5. Ajouter la **TVA** pour obtenir le TTC.

> [!attention] Erreurs fréquentes
> - Appliquer K à un montant TTC (la TVA serait comptée dans le bénéfice).
> - Confondre taux de marge et taux de marque.
> - Calculer la TVA avant la remise.
> - Retrouver un HT en multipliant le TTC par 0,82.

> [!retenir]
> - PV HT = DS × K ; TTC = HT × 1,18 ; HT = TTC / 1,18.
> - Marge sur le coût, marque sur le prix de vente.
> - TVA à reverser = TVA collectée − TVA déductible.`,
 exercices:[
  {t:"HT et TTC", d:1, e:`a) Convertir en TTC : 2 500 000 F HT. b) Convertir en HT : 4 720 000 F TTC. c) Quelle est la TVA contenue dans 1 180 000 F TTC ?`, c:`a) 2 500 000 × 1,18 = **2 950 000 F TTC** ; b) 4 720 000 / 1,18 = **4 000 000 F HT** ; c) HT = 1 000 000 F → TVA = **180 000 F**.`},
  {t:"Coefficient de vente", d:1, e:`Le déboursé sec d'un m³ de béton armé est 128 000 F. L'entreprise applique K = 1,32. Calculer le prix HT, puis TTC.`, c:`HT : 128 000 × 1,32 = **168 960 F** ; TTC : 168 960 × 1,18 = **199 373 F**.`},
  {t:"Marge et marque", d:2, e:`Un chantier facturé 45 M F HT a coûté 40,5 M F tous frais compris. Calculer le bénéfice, le taux de marge et le taux de marque.`, c:`Bénéfice : **4,5 M F** ; taux de marge (sur coût) : 4,5 / 40,5 = **11,1 %** ; taux de marque (sur prix) : 4,5 / 45 = **10 %**.`},
  {t:"TVA à reverser", d:2, e:`En mars, une entreprise facture 38 M F HT et achète pour 22 M F HT de matériaux et de sous-traitance (TVA 18 % partout). Combien de TVA doit-elle reverser ?`, c:`Collectée : 38 × 0,18 = **6,84 M** ; déductible : 22 × 0,18 = **3,96 M** → à reverser : **2,88 M F**.`},
  {t:"Remise et devis", d:1, e:`Un devis s'élève à 8 600 000 F HT. L'entreprise accorde 4 % de remise commerciale. Calculer le montant HT remisé, la TVA et le TTC.`, c:`HT remisé : 8 600 000 × 0,96 = **8 256 000 F** ; TVA : **1 486 080 F** ; TTC : **9 742 080 F**.`}
 ],
 quiz:[
  {q:"59 000 F TTC (TVA 18 %) correspondent à :", o:["50 000 F HT","48 380 F HT","59 000 F HT","69 620 F HT"], r:0, e:"59 000 / 1,18."},
  {q:"Le taux de marque se calcule sur :", o:["Le prix de vente","Le coût","La TVA","Le déboursé sec seul"], r:0, e:"Marge sur le coût."},
  {q:"Prix de vente HT = ", o:["DS × K","DS + TVA","DS / K","K − DS"], r:0, e:"Coefficient de vente."},
  {q:"La TVA à reverser par l'entreprise = ", o:["TVA collectée − TVA déductible","TVA collectée + déductible","Le chiffre d'affaires","Zéro"], r:0, e:"Différence."},
  {q:"Pour un particulier, le montant qui compte est :", o:["Le TTC","Le HT","Le DS","La marge"], r:0, e:"Il ne récupère pas la TVA."}
 ]},
{id:"eco-1", niv:1, titre:"Le coût global d'une opération de construction", duree:45, contenu:`## Ce que coûte réellement un projet
Le coût des travaux n'est qu'une partie du coût total :
| Poste | Part indicative |
|---|---|
| Terrain (foncier) et frais d'acquisition | très variable (10 à 40 % du total) |
| Études : architecte, BET, géotechnique, géomètre, contrôle | 6 à 12 % des travaux |
| Taxes, permis de construire, branchements (eau, électricité) | 2 à 5 % |
| **Travaux** (gros œuvre, second œuvre, VRD) | le poste principal |
| Frais financiers (intérêts pendant les travaux) | 2 à 6 % |
| Imprévus | 5 à 10 % |

> [!exemple] Villa moyen standing
> Travaux : 48 M F TTC. Études et suivi (8 %) : 3,84 M. Permis et branchements (3 %) : 1,44 M. Imprévus (7 %) : 3,36 M.
> Total hors terrain : **56,64 M F**. Avec un terrain de 600 m² à 25 000 F/m² (15 M) et ses frais : environ **73 M F**.

## Le coût global (coût de cycle de vie)
Sur 30 ans, le coût d'**exploitation** et d'**entretien** (électricité, climatisation, eau, peintures, étanchéité, remplacements) peut dépasser le coût de construction ! Un investissement initial un peu plus élevé peut être largement rentabilisé :
- isolation de la toiture et protections solaires → factures de climatisation réduites ;
- matériaux durables (menuiseries aluminium, peintures de qualité, bonnes étanchéités) → moins d'entretien ;
- installations électriques et sanitaires bien conçues → sécurité et moindre consommation.
> [!astuce] Temps de retour simple
> Isolant au plafond : 1 500 000 F ; économie de climatisation : 45 000 F/mois, soit 540 000 F/an → temps de retour : 1 500 000 / 540 000 ≈ **2,8 ans**.

## Application : coût global de deux toitures sur 20 ans
Villa de 150 m². Solution A : tôle simple, 4,0 M F, climatisation 1 200 000 F/an. Solution B : tôle avec isolant et plafond ventilé, 5,2 M F, climatisation 800 000 F/an.

| Poste sur 20 ans | Solution A | Solution B |
|---|---|---|
| Investissement | 4,0 M | 5,2 M |
| Climatisation (20 × coût annuel) | 24,0 M | 16,0 M |
| **Coût global (non actualisé)** | **28,0 M** | **21,2 M** |

La solution la plus chère à construire fait économiser **6,8 M F** ; son surcoût (1,2 M) est remboursé en 1,2 / 0,4 = **3 ans**. (Le calcul actualisé du chapitre « Coût global et investissements économes » affine ce résultat.)

## Le ratio au m²
Il permet de comparer des projets de tailles différentes : la villa de l'exemple coûte 56,64 M F hors terrain pour 150 m², soit **377 600 F/m²** ; on le compare aux ratios du marché pour le même standing.

## Méthode : établir le budget d'une opération
1. Partir du coût des **travaux** (estimation ou devis) ;
2. Ajouter les **études** et le suivi en pourcentage des travaux ;
3. Ajouter **taxes, permis, branchements** ;
4. Ajouter les **imprévus** (plus élevés si les études sont sommaires) ;
5. Ajouter le **terrain** et ses frais, puis les **frais financiers** si l'on emprunte ;
6. Vérifier le total avec un ratio au m².

> [!attention] Erreurs fréquentes
> - Ne budgéter que les travaux et oublier études, taxes, branchements et imprévus.
> - Mélanger des montants HT et TTC dans un même budget.
> - Choisir la solution la moins chère à construire sans regarder l'exploitation.

> [!retenir]
> - Coût de l'opération = terrain + études + taxes et branchements + travaux + frais financiers + imprévus.
> - Raisonner en coût global : le moins cher à construire n'est pas forcément le moins cher à posséder.
> - Temps de retour = surcoût / économie annuelle.`,
 exercices:[
  {t:"Budget complet", d:1, e:`Travaux : 35 M F TTC ; études 8 % ; permis et branchements 3 % ; imprévus 7 % (pourcentages des travaux) ; terrain de 450 m² à 20 000 F/m² + 10 % de frais d'acquisition. Calculer le coût total.`, c:`Études 2,8 M ; permis et branchements 1,05 M ; imprévus 2,45 M ; terrain 9 M + frais 0,9 M.
Total : 35 + 2,8 + 1,05 + 2,45 + 9,9 = **51,2 M F**.`},
  {t:"Coût global sur 30 ans", d:2, e:`Une maison coûte 40 M F à construire ; son exploitation (électricité, eau, entretien) coûte 1,8 M F par an. Comparer les deux montants sur 30 ans (sans actualisation). Une variante isolée coûte 2,5 M de plus mais réduit l'exploitation de 400 000 F par an : intéressante ?`, c:`Exploitation sur 30 ans : 1,8 × 30 = **54 M F**, plus que la construction (40 M).
Variante : surcoût 2,5 M ; économie 0,4 × 30 = 12 M → gain net **9,5 M F** ; temps de retour 2,5 / 0,4 = **6,3 ans** → intéressante.`},
  {t:"Temps de retour", d:1, e:`Calculer le temps de retour : a) chauffe-eau solaire, surcoût 500 000 F, économie 110 000 F/an ; b) lampes LED, surcoût 60 000 F, économie 30 000 F/an ; c) climatiseur inverter, surcoût 120 000 F, économie 40 000 F/an.`, c:`a) 500 000 / 110 000 = **4,5 ans** ; b) **2 ans** ; c) **3 ans**. Les trois investissements sont rentables bien avant la fin de vie des équipements.`},
  {t:"Part des postes", d:1, e:`Dans l'exemple de la villa à 73 M F, quelle part représentent le terrain (15 M + 1,5 M de frais) et les travaux (48 M) ?`, c:`Terrain : 16,5 / 73 = **22,6 %** ; travaux : 48 / 73 = **65,8 %** ; le reste (études, taxes, imprévus) ≈ 11,6 %.`},
  {t:"Oublis fréquents", d:1, e:`Un particulier a budgété uniquement le devis de l'entreprise (30 M F). Citer cinq dépenses qu'il a probablement oubliées.`, c:`Étude de sol, honoraires d'architecte et de suivi, permis de construire, branchements eau et électricité, clôture et portail, fosse septique et VRD, frais de notaire ou de titre foncier, mobilier de cuisine, imprévus (5 à 10 %).`}
 ],
 quiz:[
  {q:"Les études (architecte, BET…) représentent environ :", o:["6 à 12 % des travaux","50 %","0 %","1 %"], r:0, e:"Honoraires."},
  {q:"Le coût global inclut :", o:["Construction, exploitation et entretien","Seulement les travaux","Seulement le terrain","La décoration"], r:0, e:"Cycle de vie."},
  {q:"Temps de retour d'un surcoût de 1 M rapportant 250 000 F/an :", o:["4 ans","25 ans","0,25 an","1 an"], r:0, e:"1 / 0,25."},
  {q:"Une provision pour imprévus courante est de :", o:["5 à 10 %","50 %","0 %","100 %"], r:0, e:"Selon le stade du projet."},
  {q:"Le poste principal d'une opération est généralement :", o:["Les travaux","Les taxes","Le permis","Le géomètre"], r:0, e:"Gros œuvre et second œuvre."}
 ]},
{id:"eco-7", niv:1, titre:"Lire un devis et comparer des offres", duree:45, contenu:`## Ce que doit contenir un devis
- Nom et coordonnées de l'entreprise, du client, date et **durée de validité** ;
- Ouvrages classés par **lots**, avec une **désignation précise** (dimensions, dosages, marques, finitions) ;
- **Unité, quantité, prix unitaire, montant** pour chaque ligne ;
- Total **HT**, **TVA**, total **TTC** ;
- **Délais**, échéancier de paiement, garanties, assurances.

## Les points à vérifier
1. Les **calculs** : chaque montant = quantité × prix unitaire ; les totaux ;
2. Les **quantités** correspondent-elles aux plans ? (refaire un métré rapide) ;
3. Les **prix unitaires** sont-ils dans la fourchette du marché ?
4. Qu'est-ce qui est **inclus ou exclu** : fourniture, pose, évacuation des déblais, nettoyage, raccordements ?
5. L'**acompte** demandé est-il raisonnable (souvent 20 à 30 % au démarrage, puis paiement à l'avancement) ?
6. L'entreprise est-elle **assurée** et a-t-elle des **références** ?

## Comparer plusieurs offres
> [!exemple] Gros œuvre d'une villa, estimation du maître d'œuvre : 26 M F
> | Entreprise | Montant HT | Écart à l'estimation |
> |---|---|---|
> | A | 24,5 M | − 6 % |
> | B | 27,8 M | + 7 % |
> | C | 19,9 M | **− 23 %** |
> L'offre C est **anormalement basse** : oubli de postes, quantités sous-estimées, dosages réduits ? On demande le détail avant de la retenir.

## Un échéancier de paiement sain
Le paiement suit l'**avancement** réel (fondations, élévation, toiture, finitions), avec un acompte limité et une **retenue** à la fin jusqu'à la levée des réserves. Payer d'avance la totalité, c'est perdre tout moyen de pression.

## Négocier intelligemment
On peut discuter les quantités, proposer des **variantes** ou un phasage, mais **jamais** réduire les aciers, le dosage du béton ou les fondations.

## Application : vérifier un devis ligne par ligne
| Désignation | U | Quantité | PU (F) | Montant annoncé | Montant recalculé |
|---|---|---|---|---|---|
| Béton de fondation dosé à 350 kg/m³ | m³ | 12,5 | 95 000 | 1 187 500 | 1 187 500 ✔ |
| Maçonnerie d'agglos de 15 | m² | 180 | 9 500 | 1 791 000 | **1 710 000 ✘** |
| Enduit 2 faces | m² | 360 | 2 500 | 900 000 | 900 000 ✔ |

La 2ᵉ ligne est surévaluée de **81 000 F** (erreur de calcul ou de saisie) : on le signale à l'entreprise, qui corrige le total HT, la TVA et le TTC. On contrôle aussi la **cohérence des quantités** entre elles : 180 m² de murs enduits sur les deux faces donnent bien 360 m² d'enduit.

## Comparer au « mieux-disant »
On ne retient pas forcément le moins cher : on note le **prix** et la **valeur technique** (méthode, délai, références, personnel).
- Note prix = 100 × offre la plus basse / offre étudiée ;
- Note finale = 60 % × note prix + 40 % × note technique (pondérations fixées à l'avance).

| Entreprise | Montant | Note prix | Note technique | Note finale |
|---|---|---|---|---|
| A | 24,5 M | 100,0 | 70 | **88,0** |
| B | 27,8 M | 88,1 | 90 | **88,9** |

L'offre C ayant été écartée comme anormalement basse, l'offre B est la **mieux-disante** malgré un prix supérieur de 13 %.

## Méthode de comparaison
1. Vérifier que toutes les offres répondent au **même périmètre** (mêmes lots, mêmes prestations) ;
2. Comparer en **HT** (ou toutes en TTC) ;
3. Recalculer les montants et corriger les erreurs ;
4. Écarter ou faire justifier les offres anormalement basses ;
5. Noter prix et technique, puis négocier avec l'offre retenue.

> [!attention] Erreurs fréquentes
> - Comparer une offre HT avec une offre TTC.
> - Comparer des offres qui n'incluent pas les mêmes prestations.
> - Ignorer la durée de validité du devis.

> [!retenir]
> - Vérifier calculs, quantités, prix, inclusions, échéancier, assurances.
> - Une offre très inférieure à l'estimation doit être justifiée.
> - Payer à l'avancement, garder une retenue jusqu'à la levée des réserves.`,
 exercices:[
  {t:"Vérifier les calculs d'un devis", d:1, e:`Lignes : 12,6 m³ de béton armé à 180 000 F = 2 268 000 F ; 85 m² de carrelage à 14 000 F = 1 090 000 F ; 640 kg d'acier à 1 000 F = 640 000 F. Total HT annoncé : 3 998 000 F. Trouver l'erreur.`, c:`Béton : 12,6 × 180 000 = 2 268 000 ✔ ; carrelage : 85 × 14 000 = **1 190 000** (et non 1 090 000) ✘ ; acier ✔.
Total exact : 2 268 000 + 1 190 000 + 640 000 = **4 098 000 F HT** (le total annoncé, 3 998 000, reprend l'erreur de 100 000 F).`},
  {t:"Comparer trois offres", d:2, e:`Estimation : 18 M F HT. Offres : A = 16,9 M ; B = 13,2 M ; C = 21,5 M. Calculer les écarts et proposer une conduite à tenir.`, c:`A : **− 6,1 %** ; B : **− 26,7 %** ; C : **+ 19,4 %**.
B est anormalement basse : demander le détail (quantités, dosages, ce qui est exclu) ; C est chère : vérifier ses quantités et prix, négocier ; A paraît cohérente : vérifier son devis ligne par ligne avant de signer.`},
  {t:"Échéancier", d:1, e:`Un marché de 24 M F TTC prévoit : acompte 20 % ; fin des fondations 20 % ; fin de l'élévation 25 % ; toiture 15 % ; finitions 15 % ; 5 % à la levée des réserves. Calculer chaque versement.`, c:`Acompte **4,8 M** ; fondations **4,8 M** ; élévation **6 M** ; toiture **3,6 M** ; finitions **3,6 M** ; levée des réserves **1,2 M** (total 24 M).`},
  {t:"Ce qui manque au devis", d:2, e:`Un devis de maison indique seulement : « Construction villa F4 clé en main : 28 000 000 F ». Que manque-t-il ? Quels risques ?`, c:`Il manque : le détail par **lots** et par ouvrages (quantités, prix unitaires), les **spécifications** (dosages, aciers, matériaux, finitions), ce qui est **inclus/exclu** (VRD, branchements, clôture, fosse), le **délai**, l'**échéancier**, les **garanties et assurances**, la TVA.
Risques : litiges sur ce qui est dû, qualité au rabais, travaux supplémentaires facturés en cours de route.`},
  {t:"Négocier", d:2, e:`Le client veut réduire de 10 % un devis de 30 M F. Proposer des pistes acceptables et dire ce qu'il ne faut pas toucher.`, c:`Pistes : **variantes** de finitions (carrelage, menuiseries, peintures), simplifier certains détails architecturaux, **phaser** (construire le gros œuvre et la toiture, finir plus tard certaines pièces), réduire les surfaces, comparer les fournisseurs.
À ne pas toucher : **fondations, aciers, dosage du béton**, étanchéités, sécurité électrique.`}
 ],
 quiz:[
  {q:"Un devis doit préciser pour chaque ligne :", o:["Unité, quantité, prix unitaire, montant","Seulement le total","La couleur du camion","Rien"], r:0, e:"Base de vérification."},
  {q:"Une offre à − 25 % de l'estimation est :", o:["Anormalement basse, à justifier","Forcément la meilleure","Interdite","Hors TVA"], r:0, e:"Risque d'oubli."},
  {q:"Un bon échéancier de paiement suit :", o:["L'avancement réel des travaux","Le calendrier sans contrôle","La volonté de l'entreprise","Le hasard"], r:0, e:"Paiement contre travaux."},
  {q:"Pour réduire un devis, on ne touche jamais :", o:["Aux fondations et aux aciers","Aux finitions","Aux surfaces","Au phasage"], r:0, e:"Sécurité."},
  {q:"La retenue de fin de chantier sert à :", o:["Garantir la levée des réserves","Payer la TVA","Rien","Acheter le terrain"], r:0, e:"Moyen de pression."}
 ]},
{id:"eco-11", niv:1, titre:"Le budget d'un particulier : financer sa maison", duree:45, contenu:`## Construire avec ses moyens
En Côte d'Ivoire, beaucoup de particuliers construisent **par étapes**, au rythme de leur épargne, parfois avec un **crédit** bancaire ou un prêt d'employeur. Bien préparer son budget évite les chantiers arrêtés pendant des années (et les matériaux qui se dégradent).

## Les ressources
- **Apport personnel** (épargne, terrain déjà payé) ;
- **Crédit** : la banque prête en fonction des revenus ; la **mensualité** ne doit en général pas dépasser **un tiers des revenus** (taux d'endettement ≈ 33 %) ;
- Épargne mensuelle pour une construction par tranches.

## La capacité d'emprunt
Capital empruntable = mensualité × facteur d'actualisation : C = m × [1 − (1 + i)⁻ⁿ] / i (i : taux mensuel, n : nombre de mensualités).
> [!exemple] Revenus de 900 000 F par mois
> Mensualité maximale : 900 000 / 3 = **300 000 F**. Crédit sur 15 ans (180 mois) à 8 % par an (i = 0,667 %/mois) : facteur 104,64 → capital ≈ **31,4 M F**.
> Avec 6 M d'apport et ≈ 3 % de frais (dossier, assurance, garanties) : budget de construction ≈ **36,5 M F**.

## Construire par tranches
1. Terrain sécurisé (titre foncier, ACD) et plans complets dès le début ;
2. **Tranche 1** : fondations, élévation, toiture (≈ 55 % du coût) : le bâtiment est **hors d'eau** et protégé ;
3. **Tranche 2** : menuiseries, réseaux, enduits ;
4. **Tranche 3** : revêtements, peinture, équipements.
Ne jamais laisser des fers en attente ou des maçonneries exposées pendant des années sans protection.

## Le coût du crédit
Rembourser 250 000 F par mois pendant 15 ans représente 45 M F versés pour environ 26,2 M F empruntés : le crédit coûte **≈ 18,8 M F d'intérêts**, mais il permet d'habiter (ou de louer) plus tôt et d'échapper à l'inflation des coûts de construction.

## Application : la durée change tout
Pour une mensualité de 300 000 F à 8 % par an (taux mensuel 0,667 %) :
| Durée | Facteur | Capital empruntable |
|---|---|---|
| 10 ans (120 mois) | 82,4 | **24,7 M F** |
| 15 ans (180 mois) | 104,6 | **31,4 M F** |
| 20 ans (240 mois) | 119,6 | **35,9 M F** |
Allonger la durée augmente la capacité d'emprunt, mais aussi le coût total du crédit.

> [!exemple] Tenir compte des crédits en cours
> Revenus 900 000 F/mois avec déjà 80 000 F/mois de crédit auto.
> Mensualité disponible : 300 000 − 80 000 = **220 000 F**.
> Sur 15 ans à 8 % : 220 000 × 104,6 ≈ **23,0 M F** au lieu de 31,4 M.

## Épargner d'abord ou emprunter ?
Pour une première tranche de 20 M F en épargnant 250 000 F/mois, il faut 80 mois (**6 ans et 8 mois**). Pendant ce temps, avec 4 % d'inflation par an, la même tranche coûtera 20 × 1,04^6,67 ≈ **26 M F** : l'épargne court derrière les prix. Le crédit coûte des intérêts mais fige le coût des travaux et permet d'habiter (ou de louer) plus tôt.

## Méthode : bâtir son plan de financement
| Emplois (besoins) | Ressources |
|---|---|
| Terrain et frais | Apport personnel |
| Études et permis | Crédit bancaire |
| Travaux (par tranches) | Prêt d'employeur, aides |
| Frais de crédit, imprévus (≥ 5 %) | Épargne mensuelle |
Les deux colonnes doivent être **égales** ; sinon, on réduit le projet ou on le phase.

> [!attention] Erreurs fréquentes
> - Oublier les frais annexes (dossier, assurance, garanties, notaire).
> - Arrêter la première tranche avant la toiture : les murs et les fers en attente se dégradent.
> - Se fier à la seule mensualité sans regarder le coût total du crédit.

> [!retenir]
> - Mensualité ≤ 1/3 des revenus ; capital = m × [1 − (1 + i)⁻ⁿ] / i.
> - Construire par tranches en mettant d'abord le bâtiment hors d'eau.
> - Comparer le coût du crédit à l'inflation et au loyer économisé.`,
 exercices:[
  {t:"Capacité d'emprunt", d:2, e:`Un ménage gagne 600 000 F par mois. Mensualité maximale à 33 % ? Capital empruntable sur 15 ans à 8 % (facteur 104,64) ?`, c:`Mensualité : 0,33 × 600 000 = **198 000 F** ; capital : 198 000 × 104,64 = **≈ 20,7 M F**.`},
  {t:"Planifier des tranches", d:2, e:`Maison estimée à 30 M F ; apport 8 M ; épargne 500 000 F par mois. Tranche 1 (gros œuvre + toiture) : 55 % du coût. Dans combien de mois peut-on lancer la tranche 1 ? Combien de mois d'épargne pour la suite ?`, c:`Tranche 1 : 0,55 × 30 = **16,5 M** → il manque 16,5 − 8 = 8,5 M → **17 mois** d'épargne.
Tranches 2 et 3 : 13,5 M → **27 mois** de plus (sans compter l'inflation).
Au total, plus de 3,5 ans : un crédit partiel peut raccourcir fortement cette durée.`},
  {t:"Inflation ou crédit ?", d:2, e:`La maison de 30 M F augmente de 5 % par an. Si l'on attend 2 ans pour réunir l'épargne, combien coûtera-t-elle ? Comparer au coût des intérêts d'un crédit de 10 M sur 5 ans à 9 % (mensualité ≈ 207 600 F).`, c:`Dans 2 ans : 30 × 1,05² = **33,08 M** (+ 3,08 M).
Crédit : 207 600 × 60 = 12,456 M remboursés pour 10 M → **2,46 M d'intérêts**.
Ici, le crédit coûte moins que l'attente, sans compter le loyer économisé en emménageant plus tôt.`},
  {t:"Coût total d'un crédit", d:1, e:`Un crédit est remboursé par 180 mensualités de 250 000 F. Le capital emprunté est 26,2 M F. Combien rembourse-t-on et combien coûtent les intérêts ?`, c:`Remboursé : 180 × 250 000 = **45 M F** ; intérêts : 45 − 26,2 = **18,8 M F**.`},
  {t:"Le chantier arrêté", d:1, e:`Un chantier est arrêté depuis 3 ans au niveau des poteaux du RDC, aciers en attente exposés à la pluie. Quels problèmes ? Que faire avant de reprendre ?`, c:`Aciers **rouillés** (section réduite, mauvaise adhérence), maçonneries et bétons dégradés, éventuellement fondations affouillées, prix des matériaux en hausse.
Avant de reprendre : faire **diagnostiquer** l'état (BET), brosser ou remplacer les aciers, protéger les attentes, actualiser le budget, et cette fois **planifier** les tranches pour mettre rapidement le bâtiment hors d'eau.`}
 ],
 quiz:[
  {q:"La mensualité d'un crédit ne doit pas dépasser environ :", o:["1/3 des revenus","La totalité des revenus","1 % des revenus","Le double des revenus"], r:0, e:"Taux d'endettement."},
  {q:"Construire par tranches, on commence par :", o:["Mettre le bâtiment hors d'eau","Les peintures","Le mobilier","La décoration"], r:0, e:"Protéger l'ouvrage."},
  {q:"Les intérêts d'un crédit sont :", o:["La différence entre total remboursé et capital","Le capital","La TVA","Les frais de notaire"], r:0, e:"Coût du crédit."},
  {q:"Attendre pour construire peut coûter cher à cause de :", o:["L'inflation","La TVA","Le soleil","Rien"], r:0, e:"Hausse des prix."},
  {q:"Avant de reprendre un chantier abandonné, il faut :", o:["Faire diagnostiquer les ouvrages","Couler directement","Peindre","Rien"], r:0, e:"Aciers et bétons dégradés."}
 ]},
{id:"eco-2", niv:2, titre:"Le sous-détail de prix et le prix de vente", duree:55, contenu:`## Le déboursé sec (DS)
C'est ce que coûte **directement** un ouvrage à l'entreprise :
- **matériaux** (avec pertes, rendus chantier) ;
- **main-d'œuvre** (temps unitaire × coût horaire chargé) ;
- **matériel** (amortissement ou location, carburant).

## Le coût horaire de la main-d'œuvre
Il comprend le salaire, les **charges sociales** patronales, et une part pour les heures payées non productives (congés, fériés, intempéries, déplacements).
> [!exemple] Maçon (chiffres d'exercice)
> Salaire brut 160 000 F/mois ; charges patronales 20 % → 192 000 F ; 173 h/mois → 1 108 F/h ; avec 15 % d'heures non productives : **≈ 1 274 F par heure productive**.

## Du déboursé sec au prix de vente
On ajoute les **frais de chantier** (installation, encadrement, gardiennage, eau, électricité), les **frais généraux** de l'entreprise (bureaux, direction, assurances, comptabilité) et le **bénéfice et aléas** :
$$ Prix de vente HT = DS × K      K = (1 + frais de chantier) × (1 + frais généraux) × (1 + bénéfice et aléas)
Ex. : 10 %, 12 % et 8 % → K = 1,10 × 1,12 × 1,08 = **1,331**.

## Exemple : 1 m² de maçonnerie d'agglos de 15
| Composant | Calcul | Montant (F) |
|---|---|---|
| Agglos | 12,5 u × 400 F (+ 2 % de casse) | 5 100 |
| Mortier | 0,015 m³ × 45 000 F/m³ | 675 |
| Main-d'œuvre | binôme (8 000 + 5 000 F/j) pour 10 m²/j | 1 300 |
| Petit matériel | 5 % de la main-d'œuvre | 65 |
| **Déboursé sec** | | **7 140** |
| Prix de vente HT | 7 140 × 1,331 | **≈ 9 500 F/m²** |

## Exemple : 1 m³ de béton de propreté (150 kg/m³)
Ciment 3 sacs + 5 % = 3,15 × 5 500 = 17 325 F ; sable 0,44 m³ × 12 000 = 5 280 F ; gravier 0,88 m³ × 22 000 = 19 360 F ; main-d'œuvre 6 h × 900 F = 5 400 F ; matériel 2 000 F → **DS = 49 365 F** → PV = 49 365 × 1,331 ≈ **65 700 F HT/m³**.

## Les prix nouveaux
Quand un ouvrage non prévu au bordereau est demandé, on établit un **prix nouveau** par sous-détail, avec les mêmes bases (salaires, prix des matériaux, coefficient K) que le marché ; il est accepté par écrit avant exécution.

> [!attention]
> Un prix inférieur au déboursé sec (« prix anormalement bas ») mène l'entreprise à la faillite ou à la mauvaise qualité (dosages réduits, aciers manquants). Le maître d'ouvrage doit s'en méfier.

## Application : sous-détail d'1 m² d'enduit au mortier de ciment
**Coût de la journée d'équipe** (1 maçon + 2 manœuvres, 8 h) : (1 274 + 2 × 800) × 8 = **22 992 F/jour**. Rendement de l'équipe : 25 m²/jour.

| Composant | Calcul | Montant (F/m²) |
|---|---|---|
| Mortier (2 cm, + 10 % de pertes) | 0,02 × 45 000 × 1,10 | 990 |
| Main-d'œuvre | 22 992 / 25 | 920 |
| Petit matériel | 5 % de la main-d'œuvre | 46 |
| **Déboursé sec** | | **1 956** |
| Prix de vente HT | 1 956 × 1,331 | **≈ 2 600 F/m²** |

## La sensibilité au rendement
Si l'équipe ne fait que 20 m²/jour (support irrégulier, échafaudage mal préparé), la main-d'œuvre passe à 1 150 F/m², le DS à 2 197 F et le prix de vente à **2 924 F/m²** (+ 12 %). Le rendement est souvent la donnée la plus incertaine d'un sous-détail : on le prend dans les relevés de chantiers comparables.

## Méthode d'un sous-détail
1. Définir l'**unité d'ouvrage** et ce qu'elle comprend (fourniture, pose, nettoyage) ;
2. Chiffrer les **matériaux** avec leurs pertes et leur prix rendu chantier ;
3. Chiffrer la **main-d'œuvre** : coût de l'équipe divisé par son rendement ;
4. Ajouter le **matériel** (location, amortissement, carburant) ;
5. Appliquer le coefficient K une seule fois ;
6. Comparer au prix du marché.

> [!attention] Erreurs fréquentes
> - Oublier les pertes et la casse des matériaux.
> - Utiliser le salaire brut sans les charges ni les heures non productives.
> - Retenir un rendement de chantier idéal.
> - Appliquer K deux fois (une fois sur les matériaux, une fois sur le total).

> [!retenir]
> - DS = matériaux (avec pertes) + main-d'œuvre (Tu × coût horaire chargé) + matériel.
> - PV HT = DS × K, K = (1 + FC)(1 + FG)(1 + B).
> - Prix nouveau : sous-détail sur les bases du marché, accepté avant exécution.`,
 exercices:[
  {t:"Coût horaire chargé", d:1, e:`Un ferrailleur gagne 150 000 F brut par mois ; charges patronales 20 % ; 173 heures payées ; 12 % d'heures non productives. Calculer le coût par heure productive.`, c:`Coût mensuel : 150 000 × 1,2 = **180 000 F** → 180 000 / 173 = 1 040 F/h → × 1,12 = **≈ 1 165 F par heure productive**.`},
  {t:"Calculer K", d:1, e:`Frais de chantier 8 %, frais généraux 14 %, bénéfice et aléas 7 %. Calculer K, puis le prix de vente d'un ouvrage dont le DS vaut 2 400 000 F.`, c:`K = 1,08 × 1,14 × 1,07 = **1,317** → PV = 2 400 000 × 1,317 = **≈ 3 162 000 F HT**.`},
  {t:"Sous-détail d'un m² de chape", d:2, e:`Chape de 4 cm dosée à 350 kg/m³ (7 sacs/m³ de mortier, + 5 % de pertes) ; sable 1,1 m³ par m³ de mortier ; ciment 5 500 F le sac ; sable 12 000 F/m³ ; main-d'œuvre 0,5 h de maçon (1 250 F/h) et 0,5 h de manœuvre (750 F/h) par m² ; matériel 150 F/m² ; K = 1,331. Calculer DS et PV.`, c:`Mortier : 0,04 m³/m² → ciment 0,04 × 7 × 1,05 = 0,294 sac × 5 500 = **1 617 F** ; sable 0,04 × 1,1 = 0,044 m³ × 12 000 = **528 F**.
Main-d'œuvre : 625 + 375 = **1 000 F** ; matériel **150 F**.
DS = **3 295 F/m²** → PV = 3 295 × 1,331 ≈ **4 386 F/m² HT**.`},
  {t:"Prix nouveau", d:2, e:`Le client demande des appuis de fenêtres préfabriqués (non prévus). Pour 1 ml : béton 0,012 m³ à 60 000 F/m³ ; acier 1,2 kg à 800 F ; coffrage réutilisé 300 F ; main-d'œuvre 0,8 h à 1 100 F ; pose 0,3 h à 1 100 F. K du marché : 1,331. Établir le prix nouveau.`, c:`Béton : 720 F ; acier : 960 F ; coffrage : 300 F ; fabrication : 880 F ; pose : 330 F → **DS = 3 190 F/ml**.
Prix nouveau : 3 190 × 1,331 = **≈ 4 246 F/ml HT**, à faire accepter par écrit (OS ou avenant) avant exécution.`},
  {t:"Prix trop bas", d:2, e:`Une entreprise propose le m² de maçonnerie d'agglos de 15 à 6 800 F HT. En vous appuyant sur le sous-détail du cours (DS = 7 140 F), que penser de cette offre ?`, c:`Le prix (6 800 F) est **inférieur au déboursé sec** (7 140 F) : l'entreprise perd de l'argent sur chaque m² avant même ses frais. Soit elle s'est trompée, soit elle compte réduire la qualité (moins de ciment, agglos faibles, joints vides) ou récupérer sur des travaux supplémentaires. Il faut lui demander son sous-détail et des garanties avant de la retenir.`}
 ],
 quiz:[
  {q:"Le déboursé sec comprend :", o:["Matériaux, main-d'œuvre et matériel","Le bénéfice","La TVA","Les frais généraux"], r:0, e:"Coût direct."},
  {q:"Avec FC 10 %, FG 10 %, B 10 %, K vaut :", o:["1,331","1,30","1,10","3,3"], r:0, e:"1,1³."},
  {q:"Le coût horaire chargé inclut :", o:["Salaire, charges sociales et heures non productives","Seulement le salaire net","La TVA","Le prix du ciment"], r:0, e:"Coût réel pour l'entreprise."},
  {q:"Un prix nouveau s'établit :", o:["Par sous-détail sur les bases du marché","Au hasard","Après exécution sans accord","Toujours au double"], r:0, e:"Accepté avant exécution."},
  {q:"Un prix inférieur au déboursé sec est :", o:["Anormalement bas","Normal","Idéal pour le client","Obligatoire"], r:0, e:"Risque de malfaçons."}
 ]},
{id:"eco-3", niv:2, titre:"Les méthodes d'estimation", duree:50, contenu:`## Précision selon la phase
| Phase | Méthode | Précision |
|---|---|---|
| Programme, esquisse | Ratio global (F/m²) | ± 20 à 30 % |
| APS | Ratios par lots ou par éléments | ± 15 % |
| APD | Avant-métré sommaire | ± 10 % |
| DCE / marché | Métré détaillé et DQE | ± 5 % |

## Estimation par ratio global
Coût = surface × ratio au m², selon le standing (ordres de grandeur à actualiser : économique 180 000 à 280 000 F/m², moyen standing 280 000 à 380 000, haut standing 400 000 à 600 000 et plus).
> [!exemple]
> Maison de 120 m² moyen standing : 120 × 330 000 = **39,6 M F** (± 25 %, soit entre ≈ 30 et 50 M).

## Estimation par lots
| Lot | Maison courante |
|---|---|
| Terrassements, fondations | 12 à 18 % |
| Élévation, béton armé, maçonnerie | 22 à 30 % |
| Toiture / étanchéité | 10 à 14 % |
| Menuiseries | 10 à 12 % |
| Électricité | 7 à 10 % |
| Plomberie sanitaire | 7 à 9 % |
| Revêtements, enduits | 12 à 16 % |
| Peinture, VRD | 6 à 10 % |

## Estimation par éléments (ouvrages élémentaires)
On estime chaque grand élément par une quantité simple et un prix composé : m² de plancher, m² de façade, m² de toiture, nombre de points d'eau… C'est plus précis que le ratio global et rapide à mettre à jour quand le projet change.

## Ratios techniques (contrôle d'un DQE)
- **Béton** : 0,25 à 0,40 m³ par m² de plancher (ossature) ;
- **Acier** : 80 à 120 kg par m³ de béton armé ;
- **Coffrage** : 6 à 10 m² par m³ (poteaux et poutres) ;
- **Agglos** : 12,5 par m² ; **ciment** : ≈ 1,5 à 2,5 sacs par m² de surface bâtie.

## Actualiser une estimation
Une estimation ancienne s'actualise avec un **index** : montant × I / I₀.

## Application : estimation par éléments d'une maison de 120 m²
| Élément | Quantité | Prix composé | Montant |
|---|---|---|---|
| Fondations et dallage | 130 m² d'emprise | 60 000 F/m² | 7,80 M |
| Murs (élévation et enduits) | 260 m² | 30 000 F/m² | 7,80 M |
| Toiture (charpente, couverture, plafond) | 150 m² | 45 000 F/m² | 6,75 M |
| Menuiseries | 14 u | 250 000 F/u | 3,50 M |
| Électricité | 120 m² | 25 000 F/m² | 3,00 M |
| Plomberie sanitaire | 8 points d'eau | 300 000 F/u | 2,40 M |
| Revêtements de sol et faïence | 140 m² | 35 000 F/m² | 4,90 M |
| Peinture | 600 m² | 3 500 F/m² | 2,10 M |
| **Total** | | | **38,25 M F** |

Ratio : 38,25 M / 120 m² = **318 750 F/m²**, cohérent avec l'estimation par ratio global (39,6 M). Si le client ajoute deux fenêtres ou agrandit la toiture, on ne modifie que la ligne concernée.

## L'influence de la forme
À surface égale, une maison **compacte** coûte moins cher : un rectangle de 10 × 12 m (périmètre 44 m) demande 18 % de murs de façade de moins qu'un rectangle de 6 × 20 m (52 m). Les décrochements, les toitures complexes et les étages en porte-à-faux font monter le ratio.

## Méthode
1. Choisir la méthode adaptée à la **phase** des études ;
2. Utiliser des ratios **récents**, du même standing et de la même région ;
3. Actualiser les références anciennes avec un index ;
4. Ajouter les postes souvent oubliés : VRD, clôture, branchements, aléas ;
5. Annoncer la **fourchette** de précision avec le chiffre.

> [!attention] Erreurs fréquentes
> - Utiliser un ratio d'un autre standing, d'une autre ville ou d'une autre époque.
> - Oublier les extérieurs (clôture, VRD, assainissement autonome).
> - Présenter une estimation d'esquisse comme un prix ferme.

> [!retenir]
> - La précision croît avec l'avancement des études (± 30 % → ± 5 %).
> - Ratio global, répartition par lots, éléments, métré détaillé.
> - Les ratios techniques servent surtout à **contrôler** les devis.`,
 exercices:[
  {t:"Fourchette d'estimation", d:1, e:`Une villa de 160 m² est envisagée en moyen standing (ratio 330 000 F/m², précision ± 25 % au stade esquisse). Calculer l'estimation et sa fourchette.`, c:`160 × 330 000 = **52,8 M F** ; fourchette : 52,8 × 0,75 = **39,6 M** à 52,8 × 1,25 = **66 M F**.`},
  {t:"Répartition par lots", d:1, e:`Répartir 52,8 M F : fondations 15 %, élévation 26 %, toiture 12 %, menuiseries 11 %, électricité 8 %, plomberie 8 %, revêtements 13 %, peinture et VRD 7 %.`, c:`Fondations **7,92 M** ; élévation **13,73 M** ; toiture **6,34 M** ; menuiseries **5,81 M** ; électricité **4,22 M** ; plomberie **4,22 M** ; revêtements **6,86 M** ; peinture et VRD **3,70 M** (total 52,8 M).`},
  {t:"Contrôle par ratios", d:2, e:`Un DQE de bâtiment R+2 (3 planchers de 180 m²) annonce 98 m³ de béton armé et 18 t d'acier. Les ratios sont-ils plausibles ?`, c:`Béton : 98 / 540 = **0,18 m³/m²**, sous la fourchette 0,25 – 0,40 : un poste semble **manquer** (dalles ? fondations ?).
Acier : 18 000 / 98 = **184 kg/m³**, au-dessus de 80 – 120 : quantité d'acier **trop élevée** ou béton sous-estimé. Le DQE doit être revu.`},
  {t:"Actualiser une estimation", d:1, e:`Une estimation de 42 M F a été faite quand l'index du bâtiment valait 108,5. Il vaut aujourd'hui 117,2. Actualiser l'estimation.`, c:`42 × 117,2 / 108,5 = **45,37 M F** (+ 8 %).`},
  {t:"Estimation par éléments", d:2, e:`Maison de plain-pied : 110 m² de plancher bas (dallage) à 18 000 F/m² ; 105 m de murs extérieurs de 3 m de haut à 32 000 F/m² de façade (ouvertures comprises) ; 125 m² de toiture à 30 000 F/m² ; 8 points d'eau à 180 000 F ; second œuvre intérieur 120 000 F/m² de plancher. Estimer le coût.`, c:`Dallage : 1,98 M ; façades : 105 × 3 = 315 m² × 32 000 = 10,08 M ; toiture : 3,75 M ; points d'eau : 1,44 M ; second œuvre : 110 × 120 000 = 13,2 M.
Total : **30,45 M F**, soit ≈ 277 000 F/m² : cohérent avec un standing économique à moyen.`}
 ],
 quiz:[
  {q:"Au stade esquisse, la précision d'une estimation est d'environ :", o:["± 20 à 30 %","± 1 %","± 100 %","Exacte"], r:0, e:"Ratio global."},
  {q:"Un ratio d'acier de 100 kg/m³ de béton armé est :", o:["Plausible","Impossible","Trop faible pour tout","Interdit"], r:0, e:"80 à 120 kg/m³."},
  {q:"Pour actualiser une estimation, on la multiplie par :", o:["I / I₀","I₀ / I","1,18","2"], r:0, e:"Évolution de l'index."},
  {q:"L'estimation la plus précise est celle du :", o:["Métré détaillé (DCE)","Ratio global","Programme","Coup d'œil"], r:0, e:"± 5 %."},
  {q:"Les ratios techniques servent surtout à :", o:["Contrôler les devis","Fixer la TVA","Payer les ouvriers","Choisir les couleurs"], r:0, e:"Détecter les erreurs."}
 ]},
{id:"eco-4", niv:2, titre:"Marchés, appels d'offres et révision des prix", duree:55, contenu:`## Les formes de prix
- **Prix global et forfaitaire** : l'entreprise s'engage sur un montant total pour un ouvrage bien défini ; les erreurs de quantités sont à sa charge (sauf modification du projet) ;
- **Prix unitaires** (BPU) : on paie les **quantités réellement exécutées** × prix unitaires ; adapté quand les quantités sont incertaines (terrassements, fondations, VRD) ;
- **Régie** : on rembourse les dépenses contrôlées + un coefficient ; pour de petits travaux imprévus.

## Marchés publics et privés
Les marchés de l'État et des collectivités suivent le **Code des marchés publics** : publicité, mise en concurrence, transparence, égalité des candidats, recours possibles devant l'autorité de régulation. Les procédures vont de l'**appel d'offres ouvert** (règle générale) à l'appel d'offres restreint, aux consultations simplifiées pour les petits montants, et exceptionnellement au gré à gré. Les marchés privés sont plus libres mais gagnent à suivre la même rigueur.

## L'appel d'offres
1. Le maître d'ouvrage prépare le **dossier d'appel d'offres** (DAO) : avis, règlement de consultation, CCAP, CCTP, plans, cadre du BPU/DQE, critères d'attribution ;
2. Les entreprises remettent une **offre administrative** (pièces, cautions), **technique** (moyens, méthodes, planning, références) et **financière** ;
3. **Ouverture des plis** puis **analyse** : conformité, correction des **erreurs arithmétiques** (le prix unitaire fait foi), détection des prix anormalement bas, notation ;
4. **Attribution** au moins-disant conforme ou au mieux-disant (meilleur rapport qualité-prix), signature, ordre de service.
> [!exemple] Notation (technique sur 30, financière sur 70)
> Note financière = 70 × offre la plus basse / offre. Offres : A 52 M (technique 26/30), B 48 M (22/30), C 55 M (28/30).
> A : 26 + 70 × 48/52 = **90,6** ; B : 22 + 70 = **92,0** ; C : 28 + 70 × 48/55 = **89,1** → **B** est retenue.

## Les garanties financières
**Caution de soumission** (sérieux de l'offre), **caution de bonne exécution** (5 à 10 % du marché), **caution de restitution d'avance**, **retenue de garantie** (5 %) ou caution équivalente (voir chapitre Garanties et assurances).

## La révision des prix
Pour les chantiers longs, le prix suit l'évolution des coûts (ciment, acier, salaires) par une **formule paramétrique** :
$$ P = P₀ × (a + b × I / I₀)      a + b = 1 (a : partie fixe, souvent 0,15)
> [!exemple]
> Situation de 10 000 000 F, a = 0,15, b = 0,85, index passé de 100 à 108 : P = 10 000 000 × (0,15 + 0,85 × 1,08) = **10 680 000 F**.
Une formule peut combiner plusieurs index pondérés : P = P₀ × (0,15 + 0,35 × S/S₀ + 0,30 × C/C₀ + 0,20 × A/A₀) (salaires, ciment, acier).

> [!retenir]
> - Forfait si le projet est bien défini, prix unitaires si les quantités sont incertaines.
> - Appel d'offres : DAO, offres, analyse (erreurs, prix anormalement bas, notation), attribution.
> - Révision : P = P₀ (a + b I/I₀).`,
 exercices:[
  {t:"Choisir la forme de prix", d:1, e:`Choisir : a) construction d'un bâtiment scolaire type dont les plans sont complets ; b) terrassements d'une route avec un sol mal connu ; c) petites réparations imprévues après un orage.`, c:`a) **Prix global et forfaitaire** ; b) **prix unitaires** (quantités réellement exécutées) ; c) **régie** (dépenses contrôlées + coefficient) ou bons de commande à prix unitaires.`},
  {t:"Corriger une erreur arithmétique", d:1, e:`Dans une offre : « 85 m³ de béton à 182 000 F = 15 740 000 F ». Corriger, sachant que le prix unitaire fait foi. Le total de l'offre était 64 250 000 F : nouveau total ?`, c:`85 × 182 000 = **15 470 000 F** (l'offre a inversé deux chiffres : + 270 000 F).
Nouveau total : 64 250 000 − 270 000 = **63 980 000 F** ; c'est ce montant corrigé qui est comparé aux autres offres.`},
  {t:"Notation des offres", d:2, e:`Critères : technique 40 points, prix 60 points (60 × offre la plus basse / offre). Offres : A 120 M (35/40), B 104 M (27/40), C 112 M (33/40). Classer.`, c:`A : 35 + 60 × 104/120 = 35 + 52,0 = **87,0** ; B : 27 + 60 = **87,0** ; C : 33 + 60 × 104/112 = 33 + 55,7 = **88,7**.
Classement : **C** (88,7), puis A et B ex aequo (87,0). Le mieux-disant n'est pas le moins cher.`},
  {t:"Révision des prix", d:2, e:`Travaux du mois : 18 M F. Formule : P = P₀ (0,15 + 0,35 S/S₀ + 0,30 C/C₀ + 0,20 A/A₀). Index : salaires 100 → 106 ; ciment 100 → 112 ; acier 100 → 95. Calculer le montant révisé.`, c:`Coefficient : 0,15 + 0,35 × 1,06 + 0,30 × 1,12 + 0,20 × 0,95 = 0,15 + 0,371 + 0,336 + 0,19 = **1,047**.
Montant révisé : 18 × 1,047 = **18,846 M F** (+ 0,846 M).`},
  {t:"Forfait et quantités", d:2, e:`Un marché à forfait de 40 M F prévoyait 120 m³ de béton ; l'entreprise en a coulé 135 m³ sans modification du projet. Peut-elle réclamer le supplément ? Et si le maître d'ouvrage avait ajouté un étage ?`, c:`Sans modification du projet : **non**, l'erreur de quantité est à la charge de l'entreprise dans un marché forfaitaire.
Si le maître d'ouvrage modifie le projet (étage ajouté) : **oui**, par un **avenant** chiffré (prix du bordereau ou prix nouveaux), signé avant exécution.`}
 ],
 quiz:[
  {q:"Dans un marché à prix unitaires, on paie :", o:["Les quantités réellement exécutées","Un montant fixe","Rien","Le double"], r:0, e:"BPU × quantités."},
  {q:"En cas d'erreur de calcul dans une offre, fait foi :", o:["Le prix unitaire","Le total","Le montant le plus bas","Le montant le plus haut"], r:0, e:"Correction arithmétique."},
  {q:"Le mieux-disant est :", o:["L'offre au meilleur rapport qualité-prix","Toujours la moins chère","La plus chère","Le premier arrivé"], r:0, e:"Notation."},
  {q:"Dans la formule de révision, a représente :", o:["La partie fixe","La TVA","La marge","L'index"], r:0, e:"Souvent 0,15."},
  {q:"Dans un marché forfaitaire, une erreur de quantité de l'entreprise :", o:["Reste à sa charge","Est payée par le client","Annule le marché","Est remboursée par l'État"], r:0, e:"Sauf modification du projet."}
 ]},
{id:"eco-12", niv:2, titre:"Mathématiques financières : intérêts, emprunts et amortissements", duree:55, contenu:`## Intérêts simples et composés
- **Intérêts simples** (court terme) : I = C × t × n ; ex. 5 M F à 6 % pendant 3 ans → **900 000 F** ;
- **Intérêts composés** (les intérêts produisent eux-mêmes des intérêts) : Cn = C × (1 + t)ⁿ ; ex. 5 M F à 6 % pendant 3 ans → 5 × 1,06³ = **5,955 M F** ;
- **Taux équivalents** : un taux annuel de 8 % équivaut à un taux mensuel de 1,08^(1/12) − 1 = 0,643 % (les banques utilisent souvent le taux proportionnel 8 / 12 = 0,667 %).

## L'emprunt à annuités (ou mensualités) constantes
$$ a = C × i / [1 − (1 + i)⁻ⁿ]
C : capital emprunté ; i : taux par période ; n : nombre de périodes. Chaque échéance contient des **intérêts** (calculés sur le capital restant dû) et un **amortissement** du capital ; au début, la part d'intérêts est forte.
> [!exemple] Emprunt de 20 M F à 9 % sur 10 ans, mensualités
> i = 0,09 / 12 = 0,75 % ; n = 120 → **m ≈ 253 352 F**. Total remboursé : 30,40 M → **intérêts : 10,40 M F**.
> | Mois | Intérêts | Amortissement | Capital restant |
> |---|---|---|---|
> | 1 | 150 000 | 103 352 | 19 896 648 |
> | 2 | 149 225 | 104 127 | 19 792 522 |
> | 3 | 148 444 | 104 908 | 19 687 614 |

## Le coût d'un emprunt
**Coût total** = somme des échéances − capital, plus les frais de dossier et d'assurance. Allonger la durée diminue la mensualité mais **augmente** fortement le coût total.

## Actualiser et capitaliser
Valeur acquise dans n ans : C × (1 + t)ⁿ ; valeur actuelle d'une somme future F : F / (1 + t)ⁿ ; valeur actuelle d'une suite de n versements constants a : a × [1 − (1 + t)⁻ⁿ] / t (même facteur que pour l'emprunt).

## Application : l'effet de la durée sur un emprunt de 20 M F à 9 %
| Durée | Mensualité | Coût total des intérêts |
|---|---|---|
| 10 ans (120 mois) | 253 352 F | 10,40 M F |
| 15 ans (180 mois) | 202 853 F | 16,51 M F |
| 20 ans (240 mois) | 179 945 F | 23,19 M F |
Passer de 10 à 20 ans réduit la mensualité de 29 % mais **double** presque le coût du crédit.

## Le capital restant dû
Après k échéances, le capital restant dû est la valeur actuelle des échéances restantes :
$$ CRD = m × [1 − (1 + i)^−(n − k)] / i
> [!exemple] Remboursement anticipé à mi-parcours
> Emprunt de 20 M F à 9 % sur 10 ans ; après 5 ans (60 mensualités) : CRD = 253 352 × [1 − 1,0075⁻⁶⁰] / 0,0075 = **12,20 M F**.
> À mi-durée, on n'a remboursé que 7,8 M F de capital : les premières échéances sont surtout des intérêts.

## Méthode
1. Ramener le taux à la période des échéances (taux mensuel = taux annuel / 12 en pratique bancaire) ;
2. Compter le nombre d'échéances n ;
3. Calculer l'annuité, puis le coût total (n × a − C) ;
4. Dresser les premières lignes du tableau d'amortissement pour contrôler (intérêts = capital restant × i).

> [!attention] Erreurs fréquentes
> - Utiliser un taux annuel avec un nombre de mois.
> - Comparer deux crédits sur la seule mensualité, sans le coût total ni les frais.
> - Croire qu'à mi-durée la moitié du capital est remboursée.

> [!retenir]
> - Simples : C t n ; composés : C (1 + t)ⁿ.
> - Annuité constante : a = C i / [1 − (1 + i)⁻ⁿ] ; intérêts sur le capital restant dû.
> - Coût du crédit = total remboursé − capital (+ frais).`,
 exercices:[
  {t:"Intérêts simples et composés", d:1, e:`On place 8 M F à 7 % par an pendant 4 ans. Calculer la valeur finale avec des intérêts simples, puis composés.`, c:`Simples : 8 + 8 × 0,07 × 4 = **10,24 M F**.
Composés : 8 × 1,07⁴ = 8 × 1,3108 = **10,49 M F** (+ 0,25 M grâce à la capitalisation).`},
  {t:"Mensualité d'un crédit", d:2, e:`Un ménage emprunte 15 M F à 8 % par an sur 7 ans (mensualités, taux mensuel 8/12 %). Calculer la mensualité, le total remboursé et le coût des intérêts.`, c:`i = 0,6667 % ; n = 84 → m = 15 000 000 × 0,006667 / (1 − 1,006667⁻⁸⁴) ≈ **233 800 F**.
Total : 233 800 × 84 ≈ **19,64 M F** → intérêts ≈ **4,64 M F**.`},
  {t:"Annuités d'un prêt d'entreprise", d:2, e:`Une entreprise emprunte 12 M F à 10 % sur 5 ans (annuités constantes). Calculer l'annuité et établir les deux premières lignes du tableau d'amortissement.`, c:`a = 12 000 000 × 0,10 / (1 − 1,1⁻⁵) ≈ **3 165 570 F**.
Année 1 : intérêts 1 200 000 ; amortissement 1 965 570 ; capital restant **10 034 430 F**.
Année 2 : intérêts 1 003 443 ; amortissement 2 162 127 ; capital restant **7 872 303 F**.`},
  {t:"Durée et coût", d:2, e:`Comparer, pour 20 M F à 9 %, une durée de 10 ans (mensualité 253 352 F) et de 15 ans (mensualité 202 853 F) : total remboursé et intérêts. Conclure.`, c:`10 ans : 253 352 × 120 = **30,40 M** → intérêts **10,40 M**.
15 ans : 202 853 × 180 = **36,51 M** → intérêts **16,51 M**.
Allonger de 5 ans réduit la mensualité de 50 500 F mais coûte **6,1 M F** d'intérêts en plus.`},
  {t:"Valeur actuelle de loyers", d:2, e:`Un local rapporte 1,2 M F de loyer net par an pendant 10 ans. Quelle est la valeur actuelle de ces loyers au taux de 8 % (facteur [1 − 1,08⁻¹⁰] / 0,08 = 6,710) ?`, c:`Valeur actuelle : 1,2 × 6,710 = **8,05 M F** : c'est le prix maximal à payer aujourd'hui pour ces loyers si l'on exige 8 % de rendement (hors valeur de revente).`}
 ],
 quiz:[
  {q:"Intérêts simples de 2 M à 5 % pendant 2 ans :", o:["200 000 F","100 000 F","2 100 000 F","20 000 F"], r:0, e:"2 M × 0,05 × 2."},
  {q:"Dans une mensualité constante, la part d'intérêts :", o:["Diminue au fil du temps","Augmente","Reste fixe","Est nulle"], r:0, e:"Calculée sur le capital restant dû."},
  {q:"Allonger la durée d'un crédit :", o:["Baisse la mensualité mais augmente le coût total","Baisse le coût total","Ne change rien","Supprime les intérêts"], r:0, e:"Plus d'intérêts."},
  {q:"Valeur acquise de 1 M à 10 % composés pendant 2 ans :", o:["1,21 M","1,20 M","1,10 M","2 M"], r:0, e:"1,1²."},
  {q:"Le coût d'un crédit = ", o:["Total remboursé − capital (+ frais)","Capital","Mensualité","Taux × 100"], r:0, e:"Intérêts et frais."}
 ]},
{id:"eco-13", niv:2, titre:"L'entreprise de BTP : charges, résultat et seuil de rentabilité", duree:50, contenu:`## Les charges de l'entreprise
- **Charges variables** : elles suivent l'activité (matériaux, sous-traitance, main-d'œuvre de chantier, carburant) ;
- **Charges fixes** : elles existent même sans chantier (loyers, salaires du personnel permanent, amortissement du matériel, assurances, frais financiers).

## Le compte de résultat simplifié
| Ligne | Montant (M F) |
|---|---|
| Chiffre d'affaires (travaux facturés HT) | 300 |
| − Charges variables | 240 |
| = **Marge sur coût variable** (MCV) | 60 (20 % du CA) |
| − Charges fixes | 45 |
| = **Résultat** (avant impôt) | **15** (5 % du CA) |

## Le seuil de rentabilité
C'est le chiffre d'affaires pour lequel le résultat est **nul** : la MCV couvre juste les charges fixes.
$$ Seuil de rentabilité = charges fixes / taux de MCV
> [!exemple] Suite
> SR = 45 / 0,20 = **225 M F**. Avec 300 M de CA, la **marge de sécurité** est de 75 M (25 % du CA) : l'entreprise peut perdre un quart de son activité avant d'être en perte.

## Le besoin en fonds de roulement (BFR)
Une entreprise de BTP avance de l'argent : elle paie ses ouvriers et fournisseurs avant d'être payée par ses clients.
$$ BFR = créances clients + stocks − dettes fournisseurs
> [!exemple]
> CA mensuel 25 M, clients payant à 60 jours (50 M de créances), stocks 8 M, fournisseurs payés à 30 jours (15 M) : **BFR = 43 M F** à financer (fonds propres, crédit de trésorerie, avances de démarrage).

## Les indicateurs de santé
Taux de marge brute par chantier, résultat / CA, trésorerie, délais de paiement clients, carnet de commandes (nombre de mois de travail assurés), taux d'accidents. Une entreprise rentable peut faire faillite par **manque de trésorerie**.

## Application : la date du point mort
Avec un seuil de rentabilité de 225 M F et un chiffre d'affaires annuel de 300 M F réparti régulièrement, le seuil est atteint après 225 / 300 × 12 = **9 mois**, fin septembre : l'entreprise ne gagne de l'argent que sur le dernier trimestre.

## Faire varier les hypothèses
| Changement | Calcul | Nouveau seuil |
|---|---|---|
| Achat d'un camion (+ 6 M de charges fixes) | 51 / 0,20 | **255 M F** |
| Meilleurs achats (taux de MCV 22 %) | 45 / 0,22 | **204,5 M F** |

## Le levier opérationnel
Si le CA augmente de 10 % (330 M), la MCV passe à 66 M et le résultat à 66 − 45 = **21 M** : **+ 40 %** de résultat pour + 10 % d'activité. À l'inverse, une baisse d'activité fait fondre le résultat très vite : les charges fixes ne baissent pas.

> [!exemple] Accepter un petit chantier en période creuse ?
> Chantier de 10 M F HT avec 8,5 M F de charges variables : MCV = 1,5 M F.
> Les charges fixes sont payées de toute façon : ce chantier améliore le résultat de **1,5 M F**.
> Il ne faut jamais accepter un prix inférieur aux charges variables.

## Méthode
1. Classer chaque charge en **fixe** ou **variable** ;
2. Calculer la MCV et son taux (MCV / CA) ;
3. Calculer le seuil, la marge de sécurité et la date du point mort ;
4. Tester les hypothèses (prix, activité, investissements) ;
5. Vérifier la **trésorerie** (BFR) en plus du résultat.

> [!attention] Erreurs fréquentes
> - Confondre MCV et résultat.
> - Oublier l'amortissement du matériel dans les charges fixes.
> - Croire qu'un chantier facturé est payé : le BFR peut asphyxier une entreprise bénéficiaire.

> [!retenir]
> - Charges variables (suivent l'activité) et fixes.
> - Résultat = MCV − charges fixes ; SR = CF / taux de MCV.
> - BFR = clients + stocks − fournisseurs : à financer.`,
 exercices:[
  {t:"Seuil de rentabilité", d:1, e:`Une PME réalise 180 M F de CA ; charges variables 75 % du CA ; charges fixes 36 M. Calculer le résultat, le seuil de rentabilité et la marge de sécurité.`, c:`MCV = 25 % × 180 = 45 M → résultat : 45 − 36 = **9 M F**.
SR = 36 / 0,25 = **144 M F** ; marge de sécurité : 180 − 144 = **36 M** (20 % du CA).`},
  {t:"Baisse d'activité", d:2, e:`La même PME voit son CA tomber à 160 M F (mêmes taux et charges fixes). Nouveau résultat ? Et à 140 M ? Commenter.`, c:`160 M : 0,25 × 160 − 36 = **4 M F** ; 140 M : 0,25 × 140 − 36 = **− 1 M F** (perte, sous le seuil de 144 M).
Une baisse de 22 % du CA fait passer l'entreprise en perte : il faut réduire les charges fixes ou trouver des chantiers.`},
  {t:"BFR", d:2, e:`CA mensuel 25 M F ; clients à 60 jours ; stocks 8 M ; fournisseurs à 30 jours sur des achats de 15 M par mois. Calculer le BFR. Que devient-il si les clients paient à 90 jours ?`, c:`Créances : 2 × 25 = 50 M → BFR = 50 + 8 − 15 = **43 M F**.
À 90 jours : créances 75 M → BFR = **68 M F** (+ 25 M à financer) : les retards de paiement des clients publics ou privés mettent en danger les petites entreprises.`},
  {t:"Charges fixes ou variables ?", d:1, e:`Classer : ciment ; loyer du siège ; salaire du comptable ; sous-traitance électricité ; amortissement d'une pelle ; gasoil des camions ; assurance responsabilité civile annuelle ; main-d'œuvre de chantier temporaire.`, c:`**Variables** : ciment, sous-traitance électricité, gasoil des camions, main-d'œuvre temporaire.
**Fixes** : loyer du siège, salaire du comptable, amortissement de la pelle, assurance RC annuelle.`},
  {t:"Réduire le seuil", d:2, e:`Avec CF = 45 M et un taux de MCV de 20 %, le seuil est 225 M. Comparer deux actions : a) réduire les charges fixes de 5 M ; b) améliorer le taux de MCV à 22 % (meilleurs achats, moins de pertes).`, c:`a) SR = 40 / 0,20 = **200 M** (− 25 M).
b) SR = 45 / 0,22 = **204,5 M** (− 20,5 M), et le résultat à 300 M de CA monte à 0,22 × 300 − 45 = **21 M** (+ 6 M).
Les deux leviers se combinent : 40 / 0,22 = **181,8 M**.`}
 ],
 quiz:[
  {q:"Le ciment acheté pour un chantier est une charge :", o:["Variable","Fixe","Exceptionnelle","Fiscale"], r:0, e:"Suit l'activité."},
  {q:"Seuil de rentabilité pour CF = 30 M et taux de MCV 25 % :", o:["120 M","30 M","7,5 M","55 M"], r:0, e:"30/0,25."},
  {q:"Le BFR augmente quand :", o:["Les clients paient plus tard","Les clients paient comptant","Les stocks baissent","Les fournisseurs sont payés plus tard"], r:0, e:"Créances plus élevées."},
  {q:"Une entreprise rentable peut faire faillite à cause :", o:["D'un manque de trésorerie","D'un excès de commandes payées","De bénéfices trop élevés","Rien"], r:0, e:"Décalages de paiement."},
  {q:"La marge de sécurité est :", o:["CA − seuil de rentabilité","Le bénéfice","Les charges fixes","La TVA"], r:0, e:"Baisse d'activité supportable."}
 ]},
{id:"eco-14", niv:2, titre:"Garanties, cautions et assurances de la construction", duree:45, contenu:`## Les garanties financières d'un marché
| Garantie | Rôle | Montant courant |
|---|---|---|
| **Caution de soumission** | Prouve le sérieux de l'offre ; perdue si l'entreprise retenue refuse de signer | 1 à 2 % du montant de l'offre |
| **Caution de bonne exécution** | Garantit l'exécution du marché | 5 à 10 % du marché |
| **Caution de restitution d'avance** | Garantit le remboursement de l'avance de démarrage | Égale à l'avance |
| **Retenue de garantie** (ou caution qui la remplace) | Garantit la levée des réserves | 5 % des situations |
Une **caution bancaire** est un engagement de la banque de payer à la place de l'entreprise défaillante ; elle coûte une **commission** (souvent 1 à 3 % par an du montant garanti) et mobilise la capacité de crédit de l'entreprise.

> [!exemple] Marché de 80 M F
> Soumission (2 %) : **1,6 M** ; bonne exécution (5 %) : **4 M** ; restitution d'une avance de 15 % : **12 M** ; retenue de garantie (5 %) : **4 M**, remplaçable par une caution (commission 2 %/an pendant 18 mois : ≈ **120 000 F**), ce qui libère 4 M de trésorerie.

## Les assurances
| Assurance | Couvre | Qui la souscrit |
|---|---|---|
| **Responsabilité civile** professionnelle | Dommages causés aux tiers pendant l'activité | Entreprise, maître d'œuvre |
| **Tous risques chantier (TRC)** | Dommages à l'ouvrage en cours de travaux (effondrement, incendie, inondation…) | Maître d'ouvrage ou entreprise |
| **Responsabilité décennale** | Désordres graves pendant 10 ans après réception | Constructeurs (entreprises, architectes, BET) |
| **Dommages-ouvrage** (selon les pays) | Préfinance la réparation des désordres décennaux | Maître d'ouvrage |
Le coût des assurances est intégré dans les **frais généraux** ou les **frais de chantier** de l'entreprise (quelques dixièmes de % à quelques % du montant des travaux selon les risques).

## Les garanties légales après réception
Parfait achèvement (1 an), bon fonctionnement (2 ans), décennale (10 ans) : voir le cours de Technologie. Un maître d'ouvrage vérifie toujours que les entreprises sont **assurées** (attestations à jour) avant de signer.

## Application : une situation de travaux avec retenues
Marché de 80 M F HT ; avance de démarrage de 12 M F remboursée par un précompte de 20 % sur chaque situation ; retenue de garantie de 5 %. Situation n° 3 : **15 M F HT** de travaux exécutés dans le mois.
| Ligne | Calcul | Montant |
|---|---|---|
| Travaux du mois | | 15,00 M |
| Retenue de garantie | 15 × 5 % | − 0,75 M |
| Remboursement de l'avance | 15 × 20 % | − 3,00 M |
| **Net à payer HT** | | **11,25 M** |
L'entreprise ne touche que 75 % de ses travaux du mois : sa trésorerie doit le prévoir.

## Retenue de garantie ou caution ?
Bloquer 4 M F pendant 18 mois coûte à l'entreprise, si elle doit les emprunter à 10 % par an : 4 × 0,10 × 1,5 = **600 000 F**. La caution qui la remplace ne coûte que **120 000 F** : elle est 5 fois moins chère.

> [!exemple] Sinistre pendant les travaux (TRC)
> Un orage endommage un mur en cours d'élévation : 6 M F de dégâts.
> Franchise du contrat : 10 % avec un minimum de 500 000 F, soit 600 000 F.
> Indemnité versée : 6 − 0,6 = **5,4 M F**.

## Méthode : vérifier avant de signer
1. Exiger les **attestations d'assurance** (RC, décennale) en cours de validité, avec les activités réellement exercées ;
2. Vérifier les **cautions** : banque reconnue, montant, durée, conditions de mainlevée ;
3. Préciser dans le marché le taux de retenue, les conditions de remboursement de l'avance et de libération des garanties ;
4. Vérifier que les **sous-traitants** sont aussi assurés.

> [!attention] Erreurs fréquentes
> - Accepter une attestation périmée ou qui ne couvre pas l'activité (une entreprise de peinture qui fait du gros œuvre).
> - Oublier de libérer la retenue ou la caution après la levée des réserves.
> - Confondre la garantie décennale (désordres graves) et le parfait achèvement (toutes les réserves).

> [!retenir]
> - Cautions : soumission (1–2 %), bonne exécution (5–10 %), restitution d'avance (= avance), retenue de garantie (5 %).
> - Une caution coûte une commission annuelle mais préserve la trésorerie.
> - RC, TRC, décennale : exiger les attestations.`,
 exercices:[
  {t:"Montants des cautions", d:1, e:`Pour un marché de 120 M F avec une avance de 15 %, calculer : caution de soumission (1 %), de bonne exécution (5 %), de restitution d'avance et retenue de garantie (5 %).`, c:`Soumission : **1,2 M** ; bonne exécution : **6 M** ; restitution d'avance : 15 % × 120 = **18 M** ; retenue de garantie : **6 M** (au total, sur toute la durée du marché).`},
  {t:"Coût d'une caution", d:1, e:`La caution de bonne exécution de 6 M F coûte 2 % par an ; elle est maintenue 14 mois. Calculer son coût.`, c:`6 000 000 × 0,02 × 14 / 12 = **140 000 F** (à intégrer dans les frais du chantier).`},
  {t:"Retenue ou caution ?", d:2, e:`Sur un marché de 60 M F réalisé en 8 mois (situations égales), la retenue de 5 % serait gardée par le client jusqu'à un an après la réception. L'entreprise peut la remplacer par une caution à 2 % par an pendant 20 mois. Comparer.`, c:`Retenue : 5 % × 60 = **3 M F** immobilisés progressivement (375 000 F par mois) et restitués plus d'un an après la fin : un besoin de trésorerie important pour une PME.
Caution : 3 M × 0,02 × 20 / 12 = **100 000 F** de commission : c'est en général bien moins cher que le coût de financement de 3 M F (découvert à 10 %/an ≈ 300 000 F par an).`},
  {t:"Quelle assurance joue ?", d:2, e:`a) Pendant le chantier, une grue abîme la toiture du voisin ; b) un incendie détruit la charpente avant la réception ; c) 6 ans après la réception, une poutre se fissure dangereusement ; d) un ouvrier blesse un passant avec une chute de planche.`, c:`a) **Responsabilité civile** de l'entreprise (dommage à un tiers) ; b) **TRC** (dommage à l'ouvrage en cours) ; c) **Décennale** du constructeur responsable ; d) **Responsabilité civile** (et la réglementation des accidents du travail pour l'ouvrier s'il est blessé).`},
  {t:"Avant de signer", d:1, e:`Citer quatre documents qu'un maître d'ouvrage doit demander à une entreprise avant de signer un marché.`, c:`Attestations d'**assurance** (RC et décennale) à jour, **caution** de bonne exécution (et de restitution d'avance si avance), **pièces administratives** (registre de commerce, attestations fiscales et sociales), **références** de chantiers similaires (avec contacts).`}
 ],
 quiz:[
  {q:"La caution de bonne exécution représente souvent :", o:["5 à 10 % du marché","50 %","0,1 %","100 %"], r:0, e:"Garantie d'exécution."},
  {q:"Une caution bancaire coûte :", o:["Une commission annuelle","Rien","Le montant garanti","La TVA"], r:0, e:"1 à 3 %/an environ."},
  {q:"Les dommages à l'ouvrage pendant les travaux sont couverts par :", o:["La TRC","La décennale","L'assurance-vie","La caution de soumission"], r:0, e:"Tous risques chantier."},
  {q:"La caution de restitution d'avance garantit :", o:["Le remboursement de l'avance","La qualité des peintures","Le paiement des ouvriers","La TVA"], r:0, e:"Égale à l'avance."},
  {q:"Remplacer la retenue de garantie par une caution permet :", o:["De préserver la trésorerie","De supprimer les garanties","D'éviter la réception","De payer moins d'impôts"], r:0, e:"Moins d'argent immobilisé."}
 ]},
{id:"eco-5", niv:3, titre:"Rentabilité d'un projet immobilier : promotion et location", duree:55, contenu:`## Le bilan d'une opération de promotion
| Recettes / Dépenses | Montant |
|---|---|
| **Chiffre d'affaires** (ventes des logements) | |
| − Terrain et frais d'acquisition | |
| − Travaux | |
| − Honoraires, études, assurances | |
| − Frais financiers, commercialisation, taxes | |
| **= Marge** | souvent visée entre 10 et 20 % du CA |

> [!exemple] Immeuble R+4 de 10 appartements F3
> Terrain : 60 M. Travaux : 336 M. Honoraires et études (8 %) : 27 M. Frais financiers, commercialisation, taxes : 20 M → **coût total : 443 M F**.
> Vente : 10 × 55 M = **550 M F** → marge = 107 M F, soit **19,5 % du CA**.

## Le prix de vente minimal
Pour viser un taux de marge m sur le CA : **CA minimal = coût total / (1 − m)**. Ex. : 443 / 0,85 = 521 M pour 15 % → **52,1 M F** par logement.

## La location : rendement locatif
$$ Rendement brut = loyers annuels / coût total × 100
> [!exemple] Même immeuble en location
> Loyer d'un F3 : 250 000 F/mois → 10 × 250 000 × 12 = **30 M F/an** → rendement brut = 30 / 443 = **6,8 %**.
> Rendement net : en retirant la vacance (≈ 8 %), l'entretien et la gestion (≈ 12 %) et les impôts fonciers, il reste environ 24 M F → **5,4 %**. Temps de retour simple : 443 / 24 ≈ **18,5 ans**.

## La sensibilité
Le bilan dépend fortement de quelques hypothèses : coût des travaux, prix de vente, délai de vente, taux d'intérêt. On teste leur variation (± 10 %) pour mesurer le **risque**.

## Les leviers de rentabilité
Maîtriser le coût de construction (conception compacte, trames régulières, matériaux standard), réduire les délais (moins de frais financiers, loyers plus tôt), bien choisir l'emplacement et le produit (type de logement demandé), limiter l'entretien futur.

## Application : le compte à rebours du promoteur
Pour savoir combien on peut payer un terrain, on part du prix de vente et de la marge visée :
1. CA prévisionnel : 10 × 55 M = 550 M F ;
2. Coût total admissible pour 15 % de marge : 550 × 0,85 = **467,5 M F** ;
3. Moins travaux (336), honoraires (27) et frais (20) : 467,5 − 383 = **84,5 M F**.
C'est la **charge foncière admissible** : au-delà, l'opération n'atteint plus 15 % de marge.

## Application : tableau de sensibilité
| Hypothèse | Coût total | CA | Marge | Taux sur CA |
|---|---|---|---|---|
| Base | 443 M | 550 M | 107 M | 19,5 % |
| Travaux + 10 % | 476,6 M | 550 M | 73,4 M | 13,3 % |
| Prix de vente − 10 % | 443 M | 495 M | 52 M | 10,5 % |
Une baisse de 10 % du prix de vente divise la marge par deux : le **prix de vente** est l'hypothèse la plus sensible. Une étude de marché sérieuse vaut plus qu'une économie de chantier.

## Méthode : bilan de promotion
1. Estimer le **CA** à partir d'une étude de marché (prix au m², rythme de vente) ;
2. Chiffrer toutes les dépenses (terrain, travaux, honoraires, assurances, taxes, commercialisation, frais financiers) ;
3. Calculer la marge et son taux sur le CA ;
4. Tester la sensibilité aux hypothèses principales ;
5. Décider : lancer, modifier le programme ou renoncer.

> [!attention] Erreurs fréquentes
> - Oublier les frais de commercialisation et les frais financiers liés aux délais de vente.
> - Confondre rendement brut et rendement net.
> - Présenter un bilan sans test de sensibilité.

> [!retenir]
> - Marge = CA − (terrain + travaux + honoraires + frais) ; viser 10 à 20 % du CA.
> - CA minimal = coût / (1 − m).
> - Rendement brut = loyers / coût ; net après vacance, entretien, gestion, impôts.
> - Tester la sensibilité aux hypothèses.`,
 exercices:[
  {t:"Bilan d'une petite promotion", d:2, e:`8 logements : terrain 40 M ; travaux 260 M ; honoraires 8 % des travaux ; frais financiers, commercialisation et taxes 18 M. Vente : 50 M par logement. Calculer le coût total, la marge et son taux.`, c:`Honoraires : 20,8 M → coût total : 40 + 260 + 20,8 + 18 = **338,8 M F**.
CA : 8 × 50 = **400 M** → marge : **61,2 M F**, soit **15,3 %** du CA.`},
  {t:"Prix de vente minimal", d:1, e:`Avec le coût total de 338,8 M F, quel prix de vente minimal par logement pour obtenir 15 % de marge sur le CA ?`, c:`CA minimal : 338,8 / 0,85 = **398,6 M** → **49,8 M F** par logement.`},
  {t:"Rendement locatif", d:2, e:`Les 8 logements sont loués 220 000 F par mois chacun ; charges (vacance, entretien, gestion, impôts) : 20 % des loyers. Calculer les rendements brut et net, et le temps de retour simple.`, c:`Loyers : 8 × 220 000 × 12 = **21,12 M F/an** → brut : 21,12 / 338,8 = **6,2 %**.
Net : 21,12 × 0,8 = 16,90 M → **5,0 %** ; temps de retour : 338,8 / 16,90 ≈ **20 ans**.`},
  {t:"Sensibilité au coût des travaux", d:2, e:`Dans la promotion de l'exercice 1, les travaux augmentent de 10 % (et les honoraires restent fixes). Nouvelle marge ? Que conclure ?`, c:`Travaux : + 26 M → coût total **364,8 M** → marge : 400 − 364,8 = **35,2 M F**, soit **8,8 %** du CA (au lieu de 15,3 %).
Une dérive de 10 % des travaux fait perdre plus de 40 % de la marge : il faut une estimation fiable, des marchés bien ficelés et un suivi des coûts serré.`},
  {t:"Vendre ou louer ?", d:2, e:`Comparer pour l'immeuble de 10 F3 (coût 443 M F) : a) vendre (marge 107 M immédiatement, en fin de commercialisation) ; b) louer (24 M F nets par an). Quels critères pour décider ?`, c:`Vente : gain rapide de **107 M F**, capital récupéré pour un autre projet, pas de gestion.
Location : revenus réguliers de 24 M F/an (5,4 % net), patrimoine conservé qui prend de la valeur, mais capital immobilisé, gestion, vacance et entretien.
Critères : besoins de trésorerie, coût du crédit, perspectives de valeur du quartier, capacité de gestion ; on compare les deux options par la **VAN** (chapitre suivant).`}
 ],
 quiz:[
  {q:"Une marge de promotion courante visée est de :", o:["10 à 20 % du CA","1 %","80 %","0 %"], r:0, e:"Selon le risque."},
  {q:"Rendement brut de 18 M de loyers pour 300 M de coût :", o:["6 %","18 %","3 %","60 %"], r:0, e:"18/300."},
  {q:"CA minimal pour 20 % de marge avec 400 M de coût :", o:["500 M","480 M","420 M","400 M"], r:0, e:"400/0,8."},
  {q:"Le rendement net tient compte :", o:["De la vacance, de l'entretien, de la gestion et des impôts","Seulement des loyers","De la TVA seulement","De rien"], r:0, e:"Charges réelles."},
  {q:"Une analyse de sensibilité sert à :", o:["Mesurer le risque lié aux hypothèses","Fixer les loyers","Dessiner les plans","Payer les taxes"], r:0, e:"± 10 % sur les postes clés."}
 ]},
{id:"eco-8", niv:3, titre:"Choisir un investissement : actualisation, VAN et TRI", duree:55, contenu:`## Un franc d'aujourd'hui vaut plus qu'un franc demain
Pour comparer des sommes reçues à des dates différentes, on les **actualise** au taux a (coût de l'argent, rendement attendu) :
$$ valeur actuelle = F / (1 + a)ⁿ      suite de n flux constants F : F × [1 − (1 + a)⁻ⁿ] / a

## La valeur actuelle nette (VAN)
$$ VAN = − investissement + Σ flux nets / (1 + a)ᵗ + valeur résiduelle / (1 + a)ⁿ
Le projet est rentable au taux a si **VAN > 0** ; entre deux projets, on préfère (à risque égal) celui qui a la plus grande VAN.
> [!exemple] Immeuble de rapport
> Investissement 400 M F ; loyers nets 36 M F/an pendant 20 ans ; revente estimée 250 M F dans 20 ans ; taux 8 %.
> Loyers : 36 × (1 − 1,08⁻²⁰) / 0,08 = 36 × 9,818 = **353,5 M** ; revente : 250 / 1,08²⁰ = **53,6 M**.
> VAN = − 400 + 353,5 + 53,6 = **+ 7,1 M** → rentable à 8 %.

## Le taux de rentabilité interne (TRI)
C'est le taux pour lequel la VAN s'annule. Ici, à 8,5 % la VAN vaut − 10,4 M : par **interpolation linéaire** entre 8 % (+ 7,1) et 8,5 % (− 10,4) : TRI ≈ 8 + 0,5 × 7,1 / 17,5 ≈ **8,2 %**. On compare le TRI au coût de l'argent (taux du crédit, rendement attendu par l'investisseur).

## L'effet de levier du crédit
Financer une partie par un crédit augmente la rentabilité des **fonds propres** si le projet rapporte plus que le crédit ne coûte ; dans le cas contraire, le levier joue à l'envers et peut ruiner l'investisseur.

## Le délai de récupération
Nombre d'années pour que les flux cumulés (éventuellement actualisés) remboursent l'investissement : simple à comprendre, mais il ignore ce qui se passe ensuite. On l'utilise en complément de la VAN.

## Application : comparer deux projets
Taux d'actualisation 10 %.
| Projet | Investissement | Flux nets | Durée | VAN | Indice de profitabilité |
|---|---|---|---|---|---|
| A | 50 M | 12 M/an | 6 ans | **+ 2,26 M** | 1,05 |
| B | 80 M | 18 M/an | 7 ans | **+ 7,63 M** | 1,10 |
Les deux projets sont rentables. B crée plus de valeur (VAN plus élevée) et rapporte plus par franc investi (indice de profitabilité IP = 1 + VAN / investissement).

## Le délai de récupération actualisé
Pour A, on cumule les flux actualisés : − 50 + 10,91 + 9,92 + 9,02 + 8,20 + 7,45 = − 4,51 M après 5 ans ; le 6ᵉ flux actualisé vaut 6,77 M. Délai ≈ 5 + 4,51 / 6,77 = **5,7 ans**, pour une durée de 6 ans : le projet A laisse peu de marge.

## L'effet de levier chiffré
Projet de 100 M F rapportant 10 %/an (10 M), financé par 40 M de fonds propres et 60 M de crédit à 7 % (4,2 M d'intérêts) :
- rentabilité des fonds propres : (10 − 4,2) / 40 = **14,5 %** ;
- si le projet ne rapporte que 5 % : (5 − 4,2) / 40 = **2 %** seulement.
Le levier amplifie dans les deux sens.

## Méthode
1. Lister les flux de chaque année (investissement, recettes nettes, valeur résiduelle) ;
2. Choisir le taux d'actualisation (coût du financement ou rendement exigé) ;
3. Calculer la VAN, l'indice de profitabilité, le délai de récupération ;
4. Encadrer le TRI par deux taux et interpoler ;
5. Décider en tenant compte du risque.

> [!attention] Erreurs fréquentes
> - Oublier la valeur résiduelle ou les gros remplacements.
> - Comparer les TRI de projets de tailles très différentes sans regarder la VAN.
> - Additionner des flux de dates différentes sans les actualiser.

> [!retenir]
> - Actualiser : F / (1 + a)ⁿ ; flux constants : F [1 − (1 + a)⁻ⁿ] / a.
> - VAN > 0 → rentable au taux a ; TRI : taux qui annule la VAN (interpolation).
> - Levier : favorable si rentabilité du projet > coût du crédit.`,
 exercices:[
  {t:"Valeur actuelle", d:1, e:`Quelle est la valeur actuelle, au taux de 10 %, de : a) 5 M F reçus dans 3 ans ; b) 1 M F reçu chaque année pendant 8 ans (facteur 5,335) ?`, c:`a) 5 / 1,1³ = 5 / 1,331 = **3,76 M F** ; b) 1 × 5,335 = **5,34 M F** (et non 8 M).`},
  {t:"VAN d'un projet", d:2, e:`Un petit immeuble coûte 50 M F ; il rapporte 9 M F nets par an pendant 8 ans, puis il est revendu 20 M F. Calculer la VAN à 10 % (facteur 5,335 ; 1,1⁸ = 2,144).`, c:`Loyers : 9 × 5,335 = **48,01 M** ; revente : 20 / 2,144 = **9,33 M**.
VAN = − 50 + 48,01 + 9,33 = **+ 7,34 M F** → rentable à 10 %.`},
  {t:"TRI par interpolation", d:3, e:`Pour le projet de l'exercice 2, la VAN vaut + 2,79 M à 12 % et − 1,24 M à 14 %. Estimer le TRI. Le projet est-il intéressant si le crédit coûte 9 % ?`, c:`TRI ≈ 12 + 2 × 2,79 / (2,79 + 1,24) = 12 + 1,38 = **13,4 %** (le calcul exact donne 13,36 %).
TRI (13,4 %) > coût du crédit (9 %) → projet **intéressant**, et le crédit aura un effet de levier favorable.`},
  {t:"Comparer deux projets", d:2, e:`Au taux de 8 %, le projet A a une VAN de + 12 M F pour un investissement de 100 M ; le projet B a une VAN de + 8 M pour 40 M. Lequel choisir si l'on ne peut en faire qu'un ? Et si le capital est limité à 100 M et qu'on peut faire deux projets B ?`, c:`Un seul projet, capital non limitant : **A** (VAN la plus grande).
Capital limité à 100 M : deux projets B (80 M investis) donnent 2 × 8 = **16 M** de VAN > 12 M : rapportée au capital, B est plus efficace (indice VAN/investissement 0,20 contre 0,12).`},
  {t:"Effet de levier", d:2, e:`Un projet de 100 M rapporte 10 M par an (10 %). On l'achète avec 30 M de fonds propres et 70 M de crédit à 7 % (intérêts seuls, pour simplifier). Calculer la rentabilité des fonds propres. Et si le crédit coûtait 12 % ?`, c:`Intérêts à 7 % : 4,9 M → revenu net 5,1 M pour 30 M de fonds propres → **17 %** (effet de levier favorable).
À 12 % : intérêts 8,4 M → 1,6 M pour 30 M → **5,3 %**, moins que sans crédit (10 %) : levier **défavorable**.`}
 ],
 quiz:[
  {q:"Valeur actuelle de 1,21 M reçus dans 2 ans à 10 % :", o:["1 M","1,21 M","1,1 M","0,5 M"], r:0, e:"1,21/1,1²."},
  {q:"Un projet est rentable au taux a si :", o:["VAN > 0","VAN < 0","TRI < a","Le délai de récupération > 50 ans"], r:0, e:"Critère de la VAN."},
  {q:"Le TRI est le taux qui :", o:["Annule la VAN","Double l'investissement","Égale la TVA","Fixe les loyers"], r:0, e:"Rentabilité intrinsèque."},
  {q:"L'effet de levier est favorable si :", o:["La rentabilité du projet dépasse le coût du crédit","Le crédit coûte plus que le projet ne rapporte","Il n'y a pas de crédit","Toujours"], r:0, e:"Sinon il joue à l'envers."},
  {q:"Le délai de récupération :", o:["Ignore ce qui se passe après la récupération","Remplace la VAN","Est toujours actualisé","N'a aucun intérêt"], r:0, e:"Critère complémentaire."}
 ]},
{id:"eco-15", niv:3, titre:"Coût global et choix d'investissements économes en énergie", duree:45, contenu:`## Raisonner sur la durée de vie
Un équipement ou une solution constructive se compare sur **toute sa durée de vie** : investissement + exploitation (énergie, eau) + entretien + remplacements − valeur résiduelle. La solution la moins chère à l'achat est souvent la plus chère au total.

## La méthode
1. Calculer le **surcoût** d'investissement de la solution performante ;
2. Estimer l'**économie annuelle** (kWh × prix, entretien évité) ;
3. Calculer le **temps de retour simple** (surcoût / économie) ;
4. Calculer la **VAN** de l'investissement supplémentaire : − surcoût + économie × [1 − (1 + a)⁻ⁿ] / a, sur la durée de vie n.

> [!exemple] Climatiseur inverter contre climatiseur classique
> Surcoût : 120 000 F ; économie : 500 kWh/an × 80 F = 40 000 F/an ; durée de vie 8 ans ; taux 8 % (facteur 5,747).
> Temps de retour : **3 ans** ; VAN = − 120 000 + 40 000 × 5,747 = **+ 109 900 F** → choix rentable.

> [!exemple] Chauffe-eau solaire contre chauffe-eau électrique
> Surcoût : 500 000 F ; économie nette : 144 000 F d'électricité − 24 000 F d'appoint − 10 000 F d'entretien = **110 000 F/an** ; 12 ans à 8 % (facteur 7,536).
> VAN = − 500 000 + 110 000 × 7,536 = **+ 329 000 F**.

## Les solutions les plus rentables sous les tropiques
- **Toiture** : isolation, couleur claire, combles ventilés (premier poste de chaleur) ;
- **Protections solaires** des baies (débords, brise-soleil, volets) ;
- **Ventilation naturelle** (moins d'heures de climatisation) ;
- Équipements efficaces : climatiseurs inverter, LED, chauffe-eau solaires ;
- Production d'électricité **photovoltaïque** selon le prix et la fiabilité du réseau.

## Application : isoler la toiture d'une villa
Surcoût de l'isolation : 1,5 M F ; économie de climatisation : 540 000 F/an ; durée de vie : 20 ans ; taux 8 % (facteur 9,818).
VAN = − 1 500 000 + 540 000 × 9,818 = **+ 3,80 M F**. C'est l'un des investissements les plus rentables du bâtiment.

## Application : 3 kWc de panneaux photovoltaïques
Coût 3,6 M F ; production 3 × 1 400 = **4 200 kWh/an** ; durée 25 ans (facteur à 8 % : 10,675) ; remplacement de l'onduleur à 10 ans : 400 000 F, soit 400 000 / 1,08¹⁰ = 185 000 F actualisés.
| Prix du kWh évité | Économie annuelle | VAN |
|---|---|---|
| 80 F | 336 000 F | **− 0,20 M F** |
| 100 F | 420 000 F | **+ 0,70 M F** |
La rentabilité dépend du **prix de l'électricité** et de l'autoconsommation : on commence par réduire les besoins (isolation, protections solaires) avant de produire.

## Le coût actualisé du kWh économisé
Diviser le surcoût par le nombre total de kWh économisés (éventuellement actualisés) donne un **prix du kWh économisé** que l'on compare au tarif : si l'économie coûte 30 F/kWh et que l'électricité coûte 80 F, l'investissement est intéressant.

> [!attention] Erreurs fréquentes
> - Oublier les remplacements en cours de vie (onduleur, batteries, compresseur).
> - Prendre une durée de vie supérieure à la durée réelle de l'équipement.
> - Compter une économie qui suppose un usage irréaliste (climatisation 24 h/24).
> - Comparer des solutions qui n'offrent pas le même confort.

> [!retenir]
> - Coût global = investissement + exploitation + entretien + remplacements.
> - Temps de retour = surcoût / économie annuelle ; VAN de l'économie sur la durée de vie.
> - Priorité : toiture, protections solaires, ventilation, équipements efficaces.`,
 exercices:[
  {t:"Isolation de toiture", d:2, e:`Isoler la toiture d'une maison coûte 2,5 M F de plus et économise 400 000 F de climatisation par an pendant 20 ans. Calculer le temps de retour et la VAN à 8 % (facteur 9,818).`, c:`Temps de retour : 2,5 / 0,4 = **6,3 ans**.
VAN = − 2 500 000 + 400 000 × 9,818 = **+ 1 427 000 F** → investissement rentable.`},
  {t:"Éclairage LED", d:1, e:`Remplacer 20 lampes fluocompactes de 20 W par des LED de 9 W, allumées 5 h par jour, coûte 80 000 F. Prix du kWh : 80 F. Calculer l'économie annuelle et le temps de retour.`, c:`Économie de puissance : 20 × 11 W = 220 W → 0,22 × 5 × 365 = **401,5 kWh/an** → 401,5 × 80 = **32 120 F/an**.
Temps de retour : 80 000 / 32 120 ≈ **2,5 ans**.`},
  {t:"Comparer deux climatiseurs", d:2, e:`Climatiseur A : 300 000 F, consommation 1 500 kWh/an ; B (inverter) : 420 000 F, 1 000 kWh/an ; prix 80 F/kWh ; durée 8 ans ; taux 8 % (facteur 5,747). Calculer le coût global actualisé de chacun.`, c:`A : 300 000 + 1 500 × 80 × 5,747 = 300 000 + 689 640 = **989 640 F**.
B : 420 000 + 1 000 × 80 × 5,747 = 420 000 + 459 760 = **879 760 F**.
B coûte **≈ 110 000 F de moins** sur sa durée de vie, bien qu'il soit plus cher à l'achat.`},
  {t:"Chauffe-eau solaire", d:2, e:`Reprendre l'exemple du chauffe-eau solaire avec un prix de l'électricité de 60 F/kWh (consommation électrique évitée 1 800 kWh/an ; appoint 300 kWh ; entretien 10 000 F/an). La VAN reste-t-elle positive ?`, c:`Électricité évitée : 1 800 × 60 = 108 000 F ; appoint : 300 × 60 = 18 000 F → économie nette : 108 000 − 18 000 − 10 000 = **80 000 F/an**.
VAN = − 500 000 + 80 000 × 7,536 = **+ 102 900 F** : encore rentable, mais beaucoup moins : le résultat dépend fortement du prix de l'énergie.`},
  {t:"Hiérarchiser les investissements", d:2, e:`Budget disponible : 2 M F. Options : A isolation toiture (2,5 M, VAN + 1,43 M) ; B LED (80 000 F, VAN + 120 000 F) ; C climatiseurs inverter (360 000 F, VAN + 330 000 F) ; D chauffe-eau solaire (500 000 F, VAN + 329 000 F) ; E brise-soleil (900 000 F, VAN + 600 000 F). Que choisir ?`, c:`A dépasse le budget. Classement par **VAN par franc investi** : B (1,5), C (0,92), E (0,67), D (0,66).
B + C + E + D = 80 000 + 360 000 + 900 000 + 500 000 = **1,84 M F** ≤ 2 M → VAN totale ≈ **1,38 M F**. On garde l'isolation de toiture pour la prochaine tranche (sa VAN est la plus forte : à financer en priorité si un crédit est possible).`}
 ],
 quiz:[
  {q:"Le coût global d'un équipement inclut :", o:["Achat, énergie, entretien et remplacements","Seulement l'achat","Seulement l'énergie","La TVA uniquement"], r:0, e:"Toute la durée de vie."},
  {q:"Temps de retour d'un surcoût de 300 000 F économisant 100 000 F/an :", o:["3 ans","30 ans","0,3 an","1 an"], r:0, e:"300/100."},
  {q:"Sous les tropiques, le premier poste d'apport de chaleur est souvent :", o:["La toiture","Le dallage","Les portes intérieures","Les fondations"], r:0, e:"Isoler et ventiler."},
  {q:"Si le prix de l'électricité baisse, la rentabilité d'un chauffe-eau solaire :", o:["Diminue","Augmente","Ne change pas","Devient infinie"], r:0, e:"Économies plus faibles."},
  {q:"Pour classer des investissements avec un budget limité, on utilise :", o:["La VAN par franc investi","Le prix d'achat seul","La couleur","Le poids"], r:0, e:"Indice de profitabilité."}
 ]},
{id:"eco-9", niv:3, titre:"Contrôle des coûts, avenants et réclamations", duree:50, contenu:`## Suivre un budget
Pour chaque lot : **budget** initial, **engagements** (commandes, contrats), **dépenses** réelles, **reste à faire** et **prévision à terminaison** (PAT). L'écart PAT − budget est analysé chaque mois.

## La méthode de la valeur acquise (rappel)
VP (prévu au budget à la date), VA (réalisé au prix du budget), CR (coût réel) ; **IPC = VA / CR** (efficacité des coûts), **IPD = VA / VP** (respect des délais) ; PAT ≈ budget / IPC (voir le cours de Gestion de chantier).
> [!exemple] Chantier de 340 M F, semaine 20
> VP = 120 M, VA = 100 M, CR = 110 M → IPC = **0,91** (dépassement), IPD = **0,83** (retard), PAT ≈ 340 / 0,91 ≈ **374 M** (34 M de dépassement).

## Les avenants
Travaux supplémentaires, modifications du client, imprévus techniques : ils doivent être **chiffrés et acceptés avant exécution** (ordre de service, avenant), avec des **prix nouveaux** justifiés par un sous-détail. Un avenant précise l'objet, le montant (en plus ou en moins), l'incidence sur le **délai** et le nouveau montant du marché. Dans les marchés publics, l'augmentation cumulée par avenants est **plafonnée** (au-delà, une nouvelle procédure est nécessaire).

## Les réclamations de l'entreprise
Une réclamation (demande d'indemnisation pour un préjudice : arrêt de chantier, plans tardifs, sujétions imprévues) doit être **écrite, chiffrée et justifiée** : journal de chantier, comptes rendus, ordres de service, photos, sous-détails, et respecter les **délais contractuels** de présentation.
> [!exemple] Arrêt de chantier de 3 jours faute de plans
> Équipe immobilisée : 3 × 71 000 F = 213 000 F ; matériel loué immobilisé : 3 × 25 000 F = 75 000 F → préjudice direct **288 000 F**, plus les frais de chantier prolongés et l'éventuelle prolongation de délai.

## Les causes fréquentes de dérive
Métré initial erroné, prix d'achat sous-estimés, rendements trop optimistes, pertes et vols, reprises de malfaçons, modifications non chiffrées, retards (frais fixes prolongés), révision des prix mal anticipée.

## Application : le tableau de bord mensuel
Chantier de 340 M F (montants en M F) :
| Lot | Budget | Dépensé | Reste à faire estimé | PAT | Écart |
|---|---|---|---|---|---|
| Terrassements | 20 | 22 | 0 | 22 | + 2 |
| Gros œuvre | 180 | 120 | 70 | 190 | + 10 |
| Second œuvre | 100 | 15 | 85 | 100 | 0 |
| Provision pour aléas | 40 | 0 | 25 | 25 | − 15 |
| **Total** | **340** | **157** | **180** | **337** | **− 3** |
Les dépassements du terrassement et du gros œuvre sont couverts par la provision : le total reste dans le budget, mais la provision restante (25 M) doit être surveillée.

> [!exemple] Cumul des avenants
> Marché de 340 M F ; avenants : + 12 M, + 8 M, − 3 M.
> Cumul : + 17 M F, soit **+ 5 %** ; nouveau montant du marché : **357 M F**.
> On vérifie que le cumul reste sous le plafond réglementaire.

## Méthode : traiter une modification
1. **Ordre de service** ou demande écrite du maître d'ouvrage ;
2. **Devis** de l'entreprise (sous-détail, prix nouveaux, incidence sur le délai) ;
3. **Vérification** par le maître d'œuvre ;
4. **Avenant** signé par les deux parties ;
5. **Exécution**, puis intégration au tableau de bord.

> [!attention] Erreurs fréquentes
> - Exécuter des travaux supplémentaires sur simple accord oral.
> - Oublier l'incidence d'une modification sur le **délai**.
> - Ne pas tenir de journal de chantier : sans preuves, une réclamation est perdue.
> - Consommer la provision pour aléas dès le début du chantier.

> [!retenir]
> - Budget / engagé / réalisé / reste à faire / PAT, chaque mois.
> - IPC et IPD pour piloter coûts et délais.
> - Avenant avant exécution : objet, prix, délai.
> - Réclamation : écrite, chiffrée, justifiée, dans les délais.`,
 exercices:[
  {t:"Indices de performance", d:2, e:`Chantier de 200 M F, mois 5 : VP = 90 M ; VA = 81 M ; CR = 86 M. Calculer IPC, IPD et la PAT. Conclure.`, c:`IPC = 81 / 86 = **0,94** (dépassement de coûts) ; IPD = 81 / 90 = **0,90** (retard).
PAT ≈ 200 / 0,94 = **212,3 M F** (≈ 12 M de dépassement) : analyser les causes et agir sur les lots en dérive.`},
  {t:"Rédiger un avenant", d:2, e:`Le client demande d'ajouter une pergola en béton (coût selon prix nouveaux : 2,35 M F HT) et de supprimer un faux plafond prévu à 0,6 M F HT. Le marché initial vaut 45 M F HT. Établir les éléments de l'avenant.`, c:`Objet : ajout d'une pergola (+ 2,35 M) et suppression du faux plafond du séjour (− 0,6 M).
Montant de l'avenant : **+ 1,75 M F HT** ; nouveau montant du marché : **46,75 M F HT** (+ 3,9 %).
Incidence sur le délai : à préciser (par exemple + 10 jours) ; prix nouveaux annexés (sous-détails) ; signatures du maître d'ouvrage et de l'entreprise avant exécution.`},
  {t:"Chiffrer une réclamation", d:2, e:`Faute de décision du client sur les menuiseries, le chantier est arrêté 4 jours. Coûts : équipe de 58 500 F/jour ; location d'un échafaudage 15 000 F/jour ; frais de chantier fixes 20 000 F/jour. Chiffrer le préjudice.`, c:`Équipe : 4 × 58 500 = 234 000 F ; échafaudage : 60 000 F ; frais de chantier : 80 000 F → **374 000 F HT**, à présenter par écrit avec les preuves (comptes rendus, courriers, journal) et une demande de prolongation de délai de 4 jours.`},
  {t:"Analyser une dérive", d:2, e:`Le lot maçonnerie, budgété 12 M F, présente une PAT de 13,8 M. Le rendement réel est de 8 m²/j au lieu de 10, et les pertes de ciment atteignent 9 %. Expliquer l'écart et proposer des actions.`, c:`Écart : **+ 1,8 M F (15 %)**. Causes : rendement 20 % plus faible (main-d'œuvre plus coûteuse au m²) et pertes de ciment presque doubles (5 % normal).
Actions : réorganiser les postes (approvisionnement des maçons, manœuvre dédiée au mortier), contrôler les dosages et le magasin, envisager un tâcheron au m² pour le reste, suivre le rendement chaque jour.`},
  {t:"Avenants cumulés", d:1, e:`Un marché public de 300 M F a déjà reçu deux avenants de + 18 M et + 24 M. Le règlement plafonne l'augmentation cumulée à 20 %. Un troisième avenant de + 25 M est-il possible ?`, c:`Cumul actuel : 42 M = **14 %** ; avec + 25 M : 67 M = **22,3 %** > 20 % → **non** : il faudrait réduire l'avenant à 18 M au plus (60 M cumulés) ou lancer une nouvelle procédure pour les travaux supplémentaires.`}
 ],
 quiz:[
  {q:"IPC = 0,9 signifie :", o:["Les travaux coûtent plus que prévu","Ils coûtent moins","Le chantier est en avance","Rien"], r:0, e:"VA < CR."},
  {q:"Un avenant doit être signé :", o:["Avant l'exécution des travaux","Après la réception","Jamais","Seulement oralement"], r:0, e:"Sinon litige."},
  {q:"Une réclamation recevable est :", o:["Écrite, chiffrée, justifiée, dans les délais","Orale","Sans preuve","Faite après le DGD"], r:0, e:"Traçabilité."},
  {q:"PAT d'un budget de 100 M avec IPC = 0,8 :", o:["125 M","80 M","100 M","108 M"], r:0, e:"100/0,8."},
  {q:"Une cause fréquente de dérive des coûts est :", o:["Des rendements trop optimistes","Un métré exact","Des achats bien négociés","Une bonne organisation"], r:0, e:"Hypothèses irréalistes."}
 ]},
{id:"eco-16", niv:3, titre:"Étude de cas : montage financier d'un immeuble de rapport", duree:60, contenu:`## Le projet
Immeuble R+4 de 10 appartements F3 (voir chapitre Rentabilité) : **coût total 443 M F** (terrain 60, travaux 336, honoraires 27, frais 20). Loyers nets attendus : **24 M F/an** (après vacance, entretien, gestion, impôts). Valeur de revente estimée dans 20 ans : 300 M F.

## 1. Rentabilité intrinsèque
Rendement net : 24 / 443 = **5,4 %**. VAN à 8 % sur 20 ans : − 443 + 24 × 9,818 + 300 / 4,661 = − 443 + 235,6 + 64,4 = **− 143 M** : à 8 %, l'opération n'est **pas rentable** en location pure ; le TRI est d'environ 4,4 %.

## 2. Le financement
| Option | Emprunt | Annuité | Cash-flow annuel (24 M − annuité) |
|---|---|---|---|
| 70 % sur 15 ans à 8 % | 310,1 M | **36,2 M** | **− 12,2 M** |
| 50 % sur 20 ans à 7 % | 221,5 M | **20,9 M** | **+ 3,1 M** |
Avec 70 % de crédit, les loyers ne couvrent pas les remboursements : l'investisseur doit **ajouter 12 M F chaque année**. Avec 50 % de crédit sur 20 ans, le cash-flow devient légèrement positif, mais l'apport atteint 221,5 M F.

## 3. Les alternatives
- **Vendre** les appartements : marge de **107 M F** (19,5 % du CA) en 2 à 3 ans, risque commercial ;
- **Panacher** : vendre 4 appartements pour rembourser une partie du crédit et louer les 6 autres ;
- **Optimiser le coût** : conception plus compacte, trames régulières, matériaux standard (− 5 à 10 % de travaux) ;
- **Augmenter les recettes** : commerces au rez-de-chaussée (loyers plus élevés), appartements meublés.

## 4. Le tableau de décision
| Critère | Vente | Location (50 % de crédit) |
|---|---|---|
| Gain | 107 M en 2–3 ans | 3,1 M/an + revente lointaine |
| Apport bloqué | Récupéré à la vente | 221,5 M sur 20 ans |
| Risque | Commercialisation | Vacance, impayés, taux |
| Gestion | Faible | Importante |

## 5. Le panachage chiffré
Vendre 4 appartements à 55 M F rapporte **220 M F** ; il reste 443 − 220 = **223 M F** à financer pour 6 appartements loués, qui rapportent 24 × 6/10 = **14,4 M F/an** nets.
- Rendement net : 14,4 / 223 = **6,5 %** (contre 5,4 % en location totale) ;
- Avec 50 % de crédit (111,5 M F sur 20 ans à 7 %), l'annuité vaut **10,5 M F** et le cash-flow **+ 3,9 M F/an** ;
- L'apport ne vaut plus que **111,5 M F** (contre 221,5 M).

## 6. Optimiser le coût de construction
Une conception plus compacte économisant 8 % des travaux (− 26,9 M F) ramène le coût total à 416,1 M F et porte le rendement net de la location totale à 24 / 416,1 = **5,8 %**.

## Méthode d'une étude de cas
1. **Rentabilité intrinsèque** : rendement, VAN, TRI, sans tenir compte du financement ;
2. **Financement** : apport, crédit, annuités, cash-flow annuel ;
3. **Alternatives** : vente, location, panachage, optimisation ;
4. **Sensibilité** : coût, prix, loyers, taux d'intérêt ;
5. **Décision** : tableau multicritère (gain, apport, risque, gestion).

> [!attention] Erreurs fréquentes
> - Juger un projet sur le seul rendement brut.
> - Oublier que le crédit doit être remboursé avec les loyers **nets**.
> - Négliger le risque de vacance et d'impayés.

> [!retenir]
> Un bon projet immobilier se juge sur sa **rentabilité intrinsèque** (rendement, VAN, TRI) **et** sur son **financement** (cash-flow, apport, risques). Un rendement de 5 % ne permet pas de financer l'essentiel par un crédit à 8 % sur 15 ans.`,
 exercices:[
  {t:"Cash-flow avec crédit", d:2, e:`Vérifier l'annuité d'un emprunt de 221,5 M F à 7 % sur 20 ans (facteur d'annuité 0,09439) et le cash-flow annuel avec 24 M F de loyers nets.`, c:`Annuité : 221,5 × 0,09439 = **20,91 M F** → cash-flow : 24 − 20,91 = **+ 3,09 M F/an**.`},
  {t:"Rentabilité des fonds propres", d:2, e:`Dans l'option à 50 % de crédit, l'investisseur apporte 221,5 M F et reçoit 3,09 M F par an. Calculer ce rendement « en trésorerie ». Pourquoi est-il trompeur à lui seul ?`, c:`3,09 / 221,5 = **1,4 %** par an en trésorerie.
Trompeur car il ignore le **remboursement du capital** contenu dans les annuités (l'investisseur s'enrichit de la part de capital remboursée) et la **valeur de revente** de l'immeuble : il faut raisonner par la VAN ou le TRI des fonds propres.`},
  {t:"Panacher vente et location", d:3, e:`On vend 4 appartements à 55 M F (220 M) et on loue les 6 autres (loyers nets 6 × 2,4 = 14,4 M F/an). Le produit des ventes réduit le besoin de financement : 443 − 220 = 223 M, dont 100 M de crédit à 7 % sur 20 ans (facteur 0,09439). Calculer l'annuité et le cash-flow.`, c:`Annuité : 100 × 0,09439 = **9,44 M F** → cash-flow : 14,4 − 9,44 = **+ 4,96 M F/an**, avec un apport de 123 M F (223 − 100) : meilleur équilibre que la location totale.`},
  {t:"Réduire le coût de construction", d:2, e:`Une conception optimisée réduit les travaux de 8 %. Calculer le nouveau coût total et le nouveau rendement net (24 M de loyers), puis la nouvelle marge en cas de vente (550 M).`, c:`Travaux : 336 × 0,92 = 309,1 M (− 26,9 M) → coût total : **416,1 M F**.
Rendement net : 24 / 416,1 = **5,8 %** ; marge de vente : 550 − 416,1 = **133,9 M F** (24,3 % du CA au lieu de 19,5 %).`},
  {t:"Recommandation", d:2, e:`Rédiger en quelques lignes une recommandation au maître d'ouvrage à partir des résultats de l'étude.`, c:`« En location pure, l'opération rapporte 5,4 % net, moins que le coût du crédit (7 à 8 %) : elle n'est pas finançable majoritairement à crédit sans apport important. Nous recommandons soit la **vente** (marge d'environ 107 M F, 134 M avec une conception optimisée), soit un **montage mixte** (vente de 4 logements, location des 6 autres avec un crédit limité à 100 M sur 20 ans, cash-flow ≈ + 5 M F/an). Dans tous les cas, l'optimisation du coût des travaux (− 8 %) améliore nettement le résultat. »`}
 ],
 quiz:[
  {q:"Un cash-flow négatif signifie que :", o:["Les loyers ne couvrent pas les remboursements","Le projet est très rentable","Il n'y a pas de crédit","La TVA est nulle"], r:0, e:"Apport annuel nécessaire."},
  {q:"Pour améliorer le cash-flow d'un immeuble locatif, on peut :", o:["Allonger la durée du crédit ou augmenter l'apport","Augmenter le taux d'intérêt","Réduire les loyers","Raccourcir le crédit"], r:0, e:"Annuité plus faible."},
  {q:"Un rendement net de 5 % financé à 8 % :", o:["Crée un effet de levier défavorable","Est toujours rentable","Ne dépend pas du crédit","Double les gains"], r:0, e:"Le crédit coûte plus que le projet ne rapporte."},
  {q:"Réduire le coût des travaux de 8 % :", o:["Augmente le rendement et la marge","Ne change rien","Réduit les loyers","Augmente les intérêts"], r:0, e:"Moins de capital investi."},
  {q:"Le montage mixte consiste à :", o:["Vendre une partie et louer le reste","Tout donner","Ne rien construire","Doubler le crédit"], r:0, e:"Équilibre entre risque et revenus."}
 ]}
]});
