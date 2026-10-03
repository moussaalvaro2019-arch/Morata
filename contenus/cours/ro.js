/* =====================================================================
   Recherche opérationnelle — cours complet (3 niveaux)
   Débutant : modéliser une décision, tâches et Gantt, graphes et plus
              court chemin, arbre couvrant minimal, analyse multicritère
   Intermédiaire : PERT et chemin critique, potentiels (MPM) et lissage,
              PERT probabiliste, compression coût-délai, stocks (Wilson),
              programmation linéaire graphique
   Avancé : simplexe, transport, affectation (méthode hongroise), files
            d'attente, décision dans l'incertain, renouvellement du
            matériel
   ===================================================================== */
A.addMatiere({
 id:"ro",
 titre:"Recherche opérationnelle",
 court:"Recherche op.",
 groupe:"fond",
 icone:"network",
 couleur:"#8E4FD1",
 niveau:"Intermédiaire",
 heures:60,
 ordre:4,
 prerequis:["math"],
 resume:"Les méthodes pour décider et optimiser sur un chantier ou dans une entreprise du bâtiment : modélisation, graphes (plus court chemin, réseaux de longueur minimale), planification PERT et MPM, marges, lissage, délais probabilistes, compression des délais, gestion des stocks, programmation linéaire et simplexe, transport, affectation, files d'attente, décision dans l'incertain et renouvellement du matériel.",
 objectifs:[
  "Traduire un problème de chantier en variables, contraintes et objectif",
  "Trouver un plus court chemin et un réseau de longueur minimale",
  "Construire un planning PERT ou MPM, calculer dates, marges et chemin critique",
  "Lisser les ressources et réduire un délai au moindre coût",
  "Estimer la probabilité de respecter un délai",
  "Calculer la quantité économique de commande et le point de commande",
  "Résoudre un programme linéaire graphiquement et par le simplexe",
  "Optimiser des transports et des affectations",
  "Analyser une file d'attente de camions et choisir dans l'incertain"
 ],
 applications:[
  "Itinéraires de livraison et réseaux de VRD d'un lotissement",
  "Planning, délais et pénalités d'un chantier",
  "Approvisionnement en ciment et en aciers",
  "Répartition des camions entre carrières et chantiers",
  "Affectation des équipes aux tâches",
  "Choix du matériel, de son nombre et de sa date de renouvellement"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"ro-1", niv:1, titre:"Modéliser un problème de décision", duree:45, contenu:`## Qu'est-ce que la recherche opérationnelle ?
La recherche opérationnelle (RO) regroupe les **méthodes mathématiques qui aident à prendre la meilleure décision** quand les ressources sont limitées : argent, temps, matériel, main-d'œuvre, matériaux. Née pendant la Seconde Guerre mondiale pour organiser la logistique, elle sert aujourd'hui à planifier les chantiers, organiser les livraisons, gérer les stocks, affecter les équipes…

## La démarche de modélisation
1. **Comprendre** le problème : qui décide, quoi, sous quelles limites ?
2. Choisir les **variables de décision** : les quantités que l'on peut choisir (nombre de poutrelles à fabriquer, m³ transportés de chaque carrière…) ;
3. Écrire les **contraintes** : les limites à respecter (stocks, heures de travail, capacité d'une machine, demandes) ;
4. Écrire la **fonction objectif** : ce que l'on veut **maximiser** (bénéfice, production) ou **minimiser** (coût, délai, distance) ;
5. **Résoudre** avec la méthode adaptée ;
6. **Interpréter et vérifier** : la solution est-elle réaliste ? que se passe-t-il si une donnée change ?

> [!exemple] Atelier de préfabrication
> Un atelier fabrique des **poutrelles** (bénéfice 4 000 F l'unité) et des **linteaux** (3 000 F).
> - Ciment disponible : 400 kg/jour ; une poutrelle en consomme 20 kg, un linteau 10 kg.
> - Main-d'œuvre : 30 h/jour ; 1 h par poutrelle, 1,5 h par linteau.
> - Le moule permet au plus 18 poutrelles par jour.
> **Variables** : x = nombre de poutrelles, y = nombre de linteaux par jour.
> **Objectif** : maximiser Z = 4 000 x + 3 000 y.
> **Contraintes** : 20 x + 10 y ≤ 400 (ciment) ; x + 1,5 y ≤ 30 (main-d'œuvre) ; x ≤ 18 (moule) ; x ≥ 0 ; y ≥ 0.
> On montrera (chapitre Programmation linéaire) que l'optimum est **15 poutrelles et 10 linteaux**, pour **90 000 F** par jour.

## Les grandes familles de problèmes
| Problème | Question type | Méthode |
|---|---|---|
| Plus court chemin | Quel itinéraire pour la toupie ? | Dijkstra |
| Réseau minimal | Quelle longueur minimale de canalisations ? | Kruskal, Prim |
| Ordonnancement | Quand faire chaque tâche ? Quel délai ? | PERT, MPM, Gantt |
| Stocks | Combien commander et quand ? | Formule de Wilson |
| Programmation linéaire | Quelle production, quel mélange ? | Graphique, simplexe |
| Transport | Quelle carrière livre quel chantier ? | Coin nord-ouest, moindre coût, potentiels |
| Affectation | Quelle équipe pour quelle tâche ? | Méthode hongroise |
| Files d'attente | Combien de camions, quelle attente ? | Modèle M/M/1 |
| Décision dans l'incertain | Quelle option face à la météo, au sol ? | Critères de décision, espérance |

## Quelques précautions
- Un modèle **simplifie** la réalité : il faut vérifier que la solution est applicable (sécurité, qualité, contraintes oubliées).
- Certaines variables doivent être **entières** (nombre de camions, d'ouvriers) : on ne loue pas 2,6 grues.
- Les données (rendements, prix, durées) sont souvent **incertaines** : on teste la sensibilité de la solution.

> [!retenir]
> - Modéliser = variables + contraintes + objectif.
> - Maximiser un bénéfice ou minimiser un coût, un délai, une distance.
> - Choisir la méthode selon la famille du problème ; toujours interpréter la solution.`,
 sujet:{titre:"Modéliser la production d'un atelier d'agglos", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un petit atelier de fabrication d'agglos à Daloa produit des **agglos creux de 15** et des **agglos pleins de 15**. Le gérant veut savoir combien en fabriquer chaque jour pour gagner le plus.

**Données (par jour)**
- Bénéfice : **120 F** par agglo creux ; **200 F** par agglo plein ;
- Ciment disponible : **840 kg** ; un creux consomme **1,5 kg**, un plein **2 kg** ;
- Temps de presse disponible : **480 min** ; un creux demande **1 min**, un plein **1,5 min** ;
- La clientèle n'achète pas plus de **240 agglos pleins** par jour.

### Partie A — Modélisation (8 points)
1. Définir les variables de décision. (1 pt)
2. Écrire la fonction objectif. (2 pts)
3. Écrire toutes les contraintes, y compris les contraintes de signe. (5 pts)

### Partie B — Tester des solutions (8 points)
4. Pour chacun des plans suivants, vérifier s'il est réalisable et calculer le bénéfice : (480 ; 0), (300 ; 120), (120 ; 240), (0 ; 240), (400 ; 120). (6 pts)
5. Quel plan est le meilleur parmi ceux testés ? Quelle contrainte n'est jamais « saturée » ? (2 pts)

### Partie C — Réflexion (4 points)
6. Calculer le bénéfice par minute de presse pour chaque produit. Pourquoi faut-il produire d'abord des agglos pleins ? (2 pts)
7. Citer deux limites de ce modèle par rapport à la réalité. (2 pts)`,
  corrige:`### Partie A — Modélisation (8 pts)
1. **x** : nombre d'agglos creux par jour ; **y** : nombre d'agglos pleins par jour. *(1 pt)*
2. Maximiser **Z = 120 x + 200 y** (F/jour). *(2 pts)*
3. *(5 pts)*
   - Ciment : **1,5 x + 2 y ≤ 840** ;
   - Presse : **x + 1,5 y ≤ 480** ;
   - Marché : **y ≤ 240** ;
   - Signe : **x ≥ 0 ; y ≥ 0** (et entiers).

### Partie B — Tests (8 pts)
4. *(6 pts)*

| Plan (x ; y) | Ciment (kg) | Presse (min) | y ≤ 240 | Réalisable | Z (F) |
|---|---|---|---|---|---|
| (480 ; 0) | 720 | 480 | oui | oui | 57 600 |
| (300 ; 120) | 690 | 480 | oui | oui | 60 000 |
| (120 ; 240) | 660 | 480 | oui | oui | **62 400** |
| (0 ; 240) | 480 | 360 | oui | oui | 48 000 |
| (400 ; 120) | 840 | 580 | oui | **non** (presse) | — |

5. **(120 ; 240)** avec **62 400 F/jour**. La contrainte de **ciment** n'est jamais saturée (il reste du ciment) : c'est le temps de presse et le marché qui limitent. *(2 pts)*

### Partie C — Réflexion (4 pts)
6. Creux : 120 / 1 = **120 F/min** ; plein : 200 / 1,5 = **133 F/min**. La presse étant la ressource rare, on la consacre d'abord au produit qui rapporte le plus par minute (les pleins), jusqu'à la limite du marché. *(2 pts)*
7. Bénéfices et temps supposés constants ; pas de casse ni de pannes ; demande des creux supposée illimitée ; stockage, séchage et cure ignorés. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier les contraintes de signe ou de marché.
> - Retenir un plan non réalisable parce qu'il rapporte plus.
> - Raisonner sur le bénéfice unitaire au lieu du bénéfice par unité de ressource rare.`},
 exercices:[
  {t:"Fabrication de parpaings", d:1, e:`Une briqueterie fabrique des parpaings de 15 (marge 50 F) et de 20 (marge 70 F). Un parpaing de 15 consomme 1,4 kg de ciment, un parpaing de 20 en consomme 1,8 kg. On dispose de 700 kg de ciment par jour et la presse produit au plus 450 parpaings par jour.
Écrire le modèle (variables, objectif, contraintes).`, c:`Variables : x = nombre de parpaings de 15 ; y = nombre de parpaings de 20 (par jour).
Objectif : **maximiser Z = 50 x + 70 y**.
Contraintes : **1,4 x + 1,8 y ≤ 700** (ciment) ; **x + y ≤ 450** (presse) ; x ≥ 0 ; y ≥ 0 ; x et y entiers.`},
  {t:"Reconnaître le type de problème", d:1, e:`Associer chaque situation à une méthode : a) relier 12 lots d'un lotissement au réseau d'eau avec le moins de tuyau possible ; b) trouver l'itinéraire le plus court entre la centrale à béton et le chantier ; c) savoir combien de sacs de ciment commander à chaque fois ; d) répartir 4 chefs d'équipe sur 4 bâtiments ; e) connaître la date de fin d'un chantier de 40 tâches.`, c:`a) **Arbre couvrant minimal** (Kruskal ou Prim).
b) **Plus court chemin** (Dijkstra).
c) **Gestion des stocks** (formule de Wilson).
d) **Affectation** (méthode hongroise).
e) **Ordonnancement** (PERT ou MPM, chemin critique).`},
  {t:"Mélange de deux sables", d:2, e:`On veut 100 m³ de sable de module de finesse compris entre 2,5 et 2,8, en mélangeant un sable fin S1 (MF = 2,0 ; 8 000 F/m³) et un sable grossier S2 (MF = 3,0 ; 12 000 F/m³). Le module du mélange est la moyenne pondérée par les volumes.
a) Écrire le modèle.
b) Le résoudre par un raisonnement simple.`, c:`a) Variables x (m³ de S1) et y (m³ de S2). Minimiser **C = 8 000 x + 12 000 y** avec **x + y = 100** ; **2 x + 3 y ≥ 250** ; **2 x + 3 y ≤ 280** ; x, y ≥ 0.
b) S1 est moins cher : on en met le plus possible. Avec y = 100 − x : 2x + 300 − 3x ≥ 250 → x ≤ 50.
Optimum : **x = 50 m³, y = 50 m³** (MF = 2,5) ; coût = 400 000 + 600 000 = **1 000 000 F**.`},
  {t:"Modéliser un transport", d:2, e:`Deux carrières A (300 m³/jour) et B (200 m³/jour) livrent deux chantiers C1 et C2 qui ont chacun besoin de 250 m³/jour. Coûts de transport (F/m³) : A→C1 : 2 000 ; A→C2 : 3 000 ; B→C1 : 4 000 ; B→C2 : 1 500.
a) Écrire le modèle.
b) Proposer une solution de bon sens et calculer son coût.`, c:`a) Variables xA1, xA2, xB1, xB2 (m³/jour). Minimiser **Z = 2 000 xA1 + 3 000 xA2 + 4 000 xB1 + 1 500 xB2** avec xA1 + xA2 ≤ 300 ; xB1 + xB2 ≤ 200 ; xA1 + xB1 = 250 ; xA2 + xB2 = 250 ; toutes ≥ 0.
b) B livre tout à C2 (le moins cher) : xB2 = 200 ; C2 reçoit encore 50 de A ; A livre 250 à C1.
Z = 250 × 2 000 + 50 × 3 000 + 200 × 1 500 = **950 000 F/jour** (c'est l'optimum).`},
  {t:"Variables entières", d:2, e:`Il faut évacuer 85 m³ de déblais (foisonnés) avec des camions de 10 m³. Un camion fait 6 rotations par jour.
a) Combien de rotations faut-il ? Combien de camions pour finir en une journée ?
b) Pourquoi ne peut-on pas simplement arrondir au plus proche ?`, c:`a) 85/10 = 8,5 → **9 rotations** ; 9/6 = 1,5 → **2 camions**.
b) Une solution arrondie « au plus proche » (8 rotations, 1 camion) ne respecte pas la contrainte : il resterait des déblais. Pour les variables entières, on arrondit **dans le sens qui respecte les contraintes**, puis on vérifie que la solution reste la meilleure.`}
 ],
 quiz:[
  {q:"Les trois éléments d'un modèle d'optimisation sont :", o:["Variables, contraintes, objectif","Plans, devis, planning","Données, graphique, tableau","Coûts, prix, marges"], r:0, e:"Base de la modélisation."},
  {q:"Minimiser un coût de transport relève :", o:["D'un problème de transport","D'un problème de stocks","D'un graphe sans poids","D'aucune méthode"], r:0, e:"Offres, demandes, coûts unitaires."},
  {q:"Une contrainte « x + 1,5 y ≤ 30 » représente ici :", o:["Une limite d'heures de travail","Un bénéfice","Une variable","Un objectif"], r:0, e:"Ressource limitée."},
  {q:"Le nombre de camions est une variable :", o:["Entière","Négative","Continue quelconque","Fictive"], r:0, e:"On ne loue pas une fraction de camion."},
  {q:"Pour relier tous les lots d'un lotissement avec le moins de tranchée, on cherche :", o:["Un arbre couvrant minimal","Un plus court chemin","Un chemin critique","Une file d'attente"], r:0, e:"Kruskal ou Prim."}
 ]},

{id:"ro-7", niv:1, titre:"Organiser des tâches : antériorités, niveaux et diagramme de Gantt", duree:45, contenu:`## Décomposer le projet en tâches
Planifier un chantier, c'est d'abord le **découper en tâches** (ou activités) : implantation, terrassement, fondations, élévation… Pour chaque tâche, on précise :
- sa **durée** (calculée à partir des quantités et des rendements) ;
- ses **antériorités** : les tâches qui doivent être terminées avant qu'elle puisse commencer ;
- les **ressources** nécessaires (équipe, grue, coffrages).

## Le tableau des antériorités
> [!exemple] Construction d'une maison simple
> | Tâche | Désignation | Durée (j) | Antériorités |
> |---|---|---|---|
> | A | Implantation, terrassement | 3 | — |
> | B | Fondations | 6 | A |
> | C | Soubassement, dallage | 5 | B |
> | D | Élévation des murs | 10 | C |
> | E | Chaînages et dalle | 8 | D |
> | F | Charpente, couverture | 6 | E |
> | G | Réseaux encastrés | 7 | E |
> | H | Enduits | 8 | F, G |
> | I | Menuiseries | 4 | H |
> | J | Peinture | 5 | I |

## Classer les tâches par niveaux
Pour dessiner proprement un planning, on range les tâches par **niveaux** (ou rangs) :
- **Niveau 0** : tâches sans antériorité ;
- **Niveau 1** : tâches dont toutes les antériorités sont de niveau 0 ;
- **Niveau k** : tâches dont toutes les antériorités sont déjà classées (niveau max des antériorités + 1).
Dans l'exemple : 0 : A ; 1 : B ; 2 : C ; 3 : D ; 4 : E ; 5 : F et G ; 6 : H ; 7 : I ; 8 : J.

## Le diagramme de Gantt
Chaque tâche est représentée par une **barre horizontale** dont la longueur est proportionnelle à sa durée, placée sur une échelle de temps (jours, semaines). On place d'abord chaque tâche **au plus tôt** : elle commence dès que toutes ses antériorités sont finies.

!fig:gantt|Diagramme de Gantt d'un chantier

> [!exemple] Dates au plus tôt de la maison
> A : 0 → 3 ; B : 3 → 9 ; C : 9 → 14 ; D : 14 → 24 ; E : 24 → 32 ;
> F : 32 → 38 et G : 32 → 39 (en parallèle) ; H commence quand F **et** G sont finies : 39 → 47 ;
> I : 47 → 51 ; J : 51 → **56 jours**.
> F finit 1 jour avant G : elle dispose d'**un jour de marge** ; un retard de F de 1 jour ne retarde pas le chantier, un retard de G, si.

## Lire et utiliser le Gantt
- Il montre **qui fait quoi et quand** ; on y ajoute les **jalons** (réception des fondations, mise hors d'eau…) ;
- On y reporte l'**avancement réel** (barre remplie) pour détecter les retards ;
- On passe des jours ouvrés aux **dates du calendrier** en tenant compte des jours non travaillés (dimanches, jours fériés) et des intempéries prévisibles (saison des pluies).

## Les limites du Gantt
Le Gantt est très lisible mais il montre mal les **liens** entre tâches et les **marges** quand le projet est grand. Les méthodes PERT et MPM (niveau intermédiaire) calculent ces éléments rigoureusement.

> [!retenir]
> - Tâches + durées + antériorités = base de tout planning.
> - Niveaux : une tâche est classée quand toutes ses antériorités le sont.
> - Gantt : barres à l'échelle, au plus tôt ; une tâche commence quand toutes ses antériorités sont finies.
> - Durée du projet = date de fin de la dernière tâche.`,
 sujet:{titre:"Antériorités, niveaux et diagramme de Gantt d'un petit bâtiment", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Construction d'un local commercial à Abobo (durées en jours ouvrés).

| Tâche | Désignation | Durée | Antériorités |
|---|---|---|---|
| A | Installation de chantier | 2 | — |
| B | Terrassements | 3 | A |
| C | Fondations | 5 | B |
| D | Commande des menuiseries | 15 | A |
| E | Élévation | 8 | C |
| F | Toiture | 4 | E |
| G | Réseaux encastrés | 5 | E |
| H | Pose des menuiseries | 2 | D, F |
| I | Enduits | 6 | F, G |
| J | Peinture et finitions | 4 | H, I |

### Partie A — Niveaux (6 points)
1. Établir le tableau des successeurs. (2 pts)
2. Déterminer le niveau (rang) de chaque tâche. (4 pts)

### Partie B — Dates (8 points)
3. Calculer les dates de début et de fin au plus tôt de chaque tâche et la durée du projet. (5 pts)
4. Quelles tâches ne peuvent pas être retardées sans retarder la fin du chantier ? (3 pts)

### Partie C — Gantt (6 points)
5. Tracer le diagramme de Gantt au plus tôt. (4 pts)
6. De combien de jours la commande des menuiseries peut-elle être retardée ? Quel intérêt pour la trésorerie ? (2 pts)`,
  corrige:`### Partie A — Niveaux (6 pts)
1. A → B, D ; B → C ; C → E ; D → H ; E → F, G ; F → H, I ; G → I ; H → J ; I → J ; J → (fin). *(2 pts)*
2. Niveau 0 : **A** ; niveau 1 : **B, D** ; niveau 2 : **C** ; niveau 3 : **E** ; niveau 4 : **F, G** ; niveau 5 : **H, I** ; niveau 6 : **J**. *(4 pts)*

### Partie B — Dates (8 pts)
3. *(5 pts)*

| Tâche | Début | Fin |
|---|---|---|
| A | 0 | 2 |
| B | 2 | 5 |
| D | 2 | 17 |
| C | 5 | 10 |
| E | 10 | 18 |
| F | 18 | 22 |
| G | 18 | 23 |
| H | 22 | 24 |
| I | 23 | 29 |
| J | 29 | 33 |

Durée : **33 jours**.
4. Chemin critique : **A – B – C – E – G – I – J** (F a 1 jour de marge, H 5 jours, D 10 jours). *(3 pts)*

### Partie C — Gantt (6 pts)
5. Une barre par tâche aux dates calculées, les tâches critiques en couleur ; les marges de D, F et H en pointillés. *(4 pts)*
6. D a **10 jours** de marge : on peut commander les menuiseries jusqu'au jour 12 sans retarder le chantier, ce qui décale le paiement de l'acompte au fournisseur (sans aller jusqu'au bout de la marge, par prudence). *(2 pts)*

> [!attention] Erreurs à éviter
> - Faire commencer une tâche après le premier de ses prédécesseurs terminé au lieu du dernier.
> - Oublier les tâches d'approvisionnement (commandes) dans le planning.
> - Consommer toute la marge d'une tâche « par confort ».`},
 exercices:[
  {t:"Classer par niveaux", d:1, e:`Classer par niveaux les tâches suivantes : A (—), B (A), C (A), D (B), E (B, C), F (D, E), G (C), H (F, G).`, c:`Niveau 0 : **A**.
Niveau 1 : **B, C** (leurs antériorités sont de niveau 0).
Niveau 2 : **D, E, G** (D après B ; E après B et C ; G après C).
Niveau 3 : **F** (après D et E).
Niveau 4 : **H** (après F et G).`},
  {t:"Dates au plus tôt et durée", d:1, e:`Avec les tâches de l'exercice précédent et les durées A 2 j ; B 4 j ; C 3 j ; D 5 j ; E 2 j ; F 3 j ; G 6 j ; H 2 j, calculer les dates de début et de fin au plus tôt et la durée du projet.`, c:`A : 0 → 2 ; B : 2 → 6 ; C : 2 → 5 ; D : 6 → 11 ; E : max(6 ; 5) = 6 → 8 ; G : 5 → 11 ;
F : max(11 ; 8) = 11 → 14 ; H : max(14 ; 11) = 14 → **16**.
Durée : **16 jours**. La chaîne A-B-D-F-H (2 + 4 + 5 + 3 + 2 = 16) n'a aucune marge.`},
  {t:"Du jour ouvré au calendrier", d:2, e:`Le projet précédent (16 jours ouvrés) commence un lundi matin.
a) Quel jour se termine-t-il si l'on travaille du lundi au vendredi ?
b) Et si l'on travaille aussi le samedi ?`, c:`a) 5 jours par semaine : 3 semaines = 15 jours ; le 16ᵉ jour est le **lundi de la 4ᵉ semaine** (fin le soir).
b) 6 jours par semaine : 2 semaines = 12 jours ; il reste 4 jours → fin le **jeudi de la 3ᵉ semaine**.`},
  {t:"Conséquence d'un retard", d:2, e:`Dans l'exemple de la maison (56 jours), quelles sont les conséquences : a) d'un retard de 2 jours sur la couverture F ? b) d'un retard de 2 jours sur les réseaux G ? c) d'un retard de 1 jour sur les fondations B ?`, c:`a) F : 32 → 40 ; H commence à max(40 ; 39) = 40 → fin du chantier **57 j** : + 1 jour seulement (F avait 1 jour de marge).
b) G : 32 → 41 → H : 41 → 49 → fin **58 j** : + 2 jours (G n'a pas de marge).
c) B est sur la chaîne sans marge : tout est décalé → **57 j**.`},
  {t:"Conflit de ressources", d:3, e:`Dans le projet de l'exercice 2, les tâches D (6 → 11) et G (5 → 11) utilisent toutes deux l'unique grue du chantier et ne peuvent donc pas se dérouler en même temps.
Quelle est la meilleure façon de les enchaîner et quelle est la nouvelle durée du projet ?`, c:`Option 1 : G d'abord (5 → 11), puis D (11 → 16) → F : 16 → 19 → H : 19 → 21 : **21 jours**.
Option 2 : D d'abord (6 → 11), puis G (11 → 17) ; F : 11 → 14 ; H : max(14 ; 17) = 17 → 19 : **19 jours**.
On retient l'**option 2** (+ 3 jours au lieu de + 5) : en cas de conflit, on donne la priorité à la tâche critique.`}
 ],
 quiz:[
  {q:"Une tâche de niveau 0 est une tâche :", o:["Sans antériorité","Sans durée","Critique","Terminée"], r:0, e:"Elle peut démarrer au début du projet."},
  {q:"Dans un Gantt, la longueur d'une barre représente :", o:["La durée de la tâche","Son coût","Son nombre d'ouvriers","Sa priorité"], r:0, e:"Échelle de temps."},
  {q:"Une tâche ayant deux antériorités finissant aux jours 8 et 11 commence au plus tôt :", o:["Au jour 11","Au jour 8","Au jour 19","Au jour 9,5"], r:0, e:"Il faut attendre la plus tardive."},
  {q:"Un jalon est :", o:["Un événement clé de durée nulle","Une tâche longue","Un ouvrier","Une ressource"], r:0, e:"Ex. : mise hors d'eau."},
  {q:"Le Gantt montre mal :", o:["Les liens et les marges des grands projets","Les durées","Les dates","L'avancement"], r:0, e:"D'où PERT et MPM."}
 ]},

{id:"ro-8", niv:1, titre:"Graphes et plus court chemin", duree:45, contenu:`## Qu'est-ce qu'un graphe ?
Un **graphe** est un ensemble de **sommets** (points) reliés par des **arêtes** (liaisons). Si les liaisons ont un sens, on parle d'**arcs** et de graphe **orienté**. Si chaque liaison porte un nombre (distance, durée, coût), le graphe est **pondéré** (ou valué).

Les graphes modélisent de nombreuses situations :
- un **réseau routier** (carrefours = sommets, routes = arêtes, poids = km ou minutes) ;
- un **réseau de canalisations** ou de câbles ;
- un **planning** (tâches et antériorités : graphe orienté sans circuit).

Vocabulaire : un **chemin** est une suite d'arêtes qui se suivent ; un **cycle** (ou circuit) revient à son point de départ ; le **degré** d'un sommet est le nombre d'arêtes qui y aboutissent.

## Représenter un graphe
- Par un **dessin** ;
- Par une **liste des arêtes** avec leurs poids ;
- Par une **matrice** (tableau) : la case (i, j) contient le poids de la liaison entre i et j, ou rien s'il n'y en a pas.

## Le problème du plus court chemin
On cherche le chemin de **poids total minimal** entre deux sommets : itinéraire le plus court pour un camion toupie, trajet le plus rapide pour une équipe, câblage le plus court entre deux armoires…

## L'algorithme de Dijkstra
Il fonctionne quand tous les poids sont **positifs** :
1. On donne la distance 0 au départ et ∞ aux autres sommets ;
2. On **choisit** le sommet non définitif de plus petite distance : sa distance devient **définitive** ;
3. On **met à jour** ses voisins : si passer par lui donne une distance plus courte, on la remplace et on note le **prédécesseur** ;
4. On recommence jusqu'à ce que l'arrivée soit définitive. Le chemin se lit à l'envers grâce aux prédécesseurs.

> [!exemple] De la centrale C au chantier F (distances en km)
> Routes : C–A 4 ; C–B 2 ; B–A 1 ; A–D 5 ; B–D 8 ; B–E 10 ; D–E 2 ; D–F 6 ; E–F 3.
> | Étape | Sommet fixé | A | B | D | E | F |
> |---|---|---|---|---|---|---|
> | 1 | C (0) | 4 (C) | 2 (C) | ∞ | ∞ | ∞ |
> | 2 | B (2) | 3 (B) | ✔ | 10 (B) | 12 (B) | ∞ |
> | 3 | A (3) | ✔ | ✔ | 8 (A) | 12 (B) | ∞ |
> | 4 | D (8) | ✔ | ✔ | ✔ | 10 (D) | 14 (D) |
> | 5 | E (10) | ✔ | ✔ | ✔ | ✔ | 13 (E) |
> | 6 | F (13) | | | | | ✔ |
> Plus court chemin : **C → B → A → D → E → F = 13 km** (prédécesseurs lus à l'envers : F ← E ← D ← A ← B ← C).
> La route directe C–A (4 km) est battue par C–B–A (3 km) : il faut toujours vérifier les détours.

## Plus long chemin dans un graphe de tâches
Dans un planning, on cherche au contraire le **plus long chemin** du début à la fin du projet : c'est le **chemin critique** qui fixe la durée totale. Comme le graphe des tâches n'a pas de circuit, on le calcule en avançant niveau par niveau (dates au plus tôt).

> [!astuce] Distance ou durée ?
> Le chemin le plus court en kilomètres n'est pas toujours le plus rapide : une piste en latérite de 10 km peut prendre plus de temps qu'une route bitumée de 15 km. On choisit le poids (km, minutes, coût) selon l'objectif.

> [!retenir]
> - Graphe = sommets + arêtes (ou arcs) ; pondéré si les liaisons portent un poids.
> - Dijkstra : fixer le sommet le plus proche, mettre à jour ses voisins, recommencer.
> - Les prédécesseurs permettent de reconstituer le chemin.
> - Dans un planning, le chemin critique est le plus long chemin.`,
 sujet:{titre:"Plus court chemin : itinéraire des toupies de la centrale au chantier", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une centrale à béton D doit livrer un chantier S à Abidjan. Le réseau de routes praticables (distances en km) est :
**D–A 7 ; D–B 3 ; B–A 2 ; A–C 4 ; B–C 8 ; B–E 6 ; C–E 1 ; C–S 5 ; E–S 7 ; E–F 3 ; F–S 3**.

Une toupie doit arriver en moins de **90 minutes** après chargement ; vitesse moyenne en ville **20 km/h** ; durée de chargement et de déchargement non comptée.

### Partie A — Le graphe (4 points)
1. Dessiner le graphe (sommets et arêtes valuées). (2 pts)
2. Pourquoi ce graphe est-il non orienté ? Dans quel cas faudrait-il l'orienter ? (2 pts)

### Partie B — Algorithme de Dijkstra (10 points)
3. Appliquer l'algorithme de Dijkstra depuis D en présentant le tableau des étapes. (7 pts)
4. Donner le plus court chemin de D à S et sa longueur. (3 pts)

### Partie C — Exploitation (6 points)
5. Calculer la durée du trajet. Le délai de 90 minutes est-il respecté ? (2 pts)
6. La route A–C est coupée par des travaux. Quel est le nouveau plus court chemin ? (3 pts)
7. Pourquoi faut-il parfois préférer un chemin un peu plus long ? (1 pt)`,
  corrige:`### Partie A — Graphe (4 pts)
1. 7 sommets (D, A, B, C, E, F, S) et 11 arêtes valuées par les distances. *(2 pts)*
2. Les routes se parcourent dans les deux sens. On l'orienterait pour des **sens uniques**. *(2 pts)*

### Partie B — Dijkstra (10 pts)
3. *(7 pts)*

| Étape | Sommet fixé | A | B | C | E | F | S |
|---|---|---|---|---|---|---|---|
| 1 | D (0) | 7 (D) | 3 (D) | ∞ | ∞ | ∞ | ∞ |
| 2 | B (3) | 5 (B) | ✔ | 11 (B) | 9 (B) | ∞ | ∞ |
| 3 | A (5) | ✔ | ✔ | 9 (A) | 9 (B) | ∞ | ∞ |
| 4 | C (9) | ✔ | ✔ | ✔ | 9 (B) | ∞ | 14 (C) |
| 5 | E (9) | ✔ | ✔ | ✔ | ✔ | 12 (E) | 14 (C) |
| 6 | F (12) | | | | | ✔ | 14 (C) |
| 7 | S (14) | | | | | | ✔ |

4. Prédécesseurs : S ← C ← A ← B ← D → **D – B – A – C – S = 14 km**. *(3 pts)*

### Partie C — Exploitation (6 pts)
5. 14 / 20 = 0,7 h = **42 min** < 90 min ✔ (marge pour les embouteillages). *(2 pts)*
6. Sans A–C : D – B – E – … : E à 9 ; S par E–S : 16 ; par E–F–S : 9 + 3 + 3 = 15 ; par E–C–S : 9 + 1 + 5 = **15** → deux chemins de **15 km** (D – B – E – C – S ou D – B – E – F – S). *(3 pts)*
7. Le plus court en distance n'est pas toujours le plus rapide (embouteillages, ponts limités en tonnage, routes non bitumées en saison des pluies) : on peut valuer le graphe en **temps** ou en coût. *(1 pt)*

> [!attention] Erreurs à éviter
> - Fixer un sommet avant d'avoir comparé toutes les distances provisoires.
> - Oublier de mettre à jour un sommet quand on trouve un chemin plus court.
> - Lire le chemin dans le mauvais sens (on remonte les prédécesseurs depuis l'arrivée).`},
 exercices:[
  {t:"Lire un graphe", d:1, e:`Pour le graphe de l'exemple du cours, donner : a) le nombre de sommets et d'arêtes ; b) le degré de B et de F ; c) deux chemins différents de C à E et leurs longueurs.`, c:`a) **6 sommets** (C, A, B, D, E, F) et **9 arêtes**.
b) B est relié à C, A, D, E : **degré 4** ; F est relié à D et E : **degré 2**.
c) Par exemple C–B–E = 2 + 10 = **12 km** ; C–B–A–D–E = 2 + 1 + 5 + 2 = **10 km**.`},
  {t:"Algorithme de Dijkstra", d:2, e:`Trouver le plus court chemin de S à T (distances en km) : S–1 : 7 ; S–2 : 3 ; 2–1 : 2 ; 1–3 : 4 ; 2–3 : 8 ; 2–4 : 9 ; 3–4 : 1 ; 3–T : 6 ; 4–T : 3.`, c:`Ordre de fixation : S = 0 ; 2 = 3 (S) ; 1 = 5 (par 2) ; 3 = 9 (par 1) ; 4 = 10 (par 3) ; T = 13 (par 4).
Plus court chemin : **S → 2 → 1 → 3 → 4 → T = 13 km**.
(Le chemin S–2–1–3–T fait 15 km : passer par 4 est plus court.)`},
  {t:"Matrice d'un réseau", d:1, e:`Écrire la matrice des distances (km) entre quatre sites reliés ainsi : dépôt–carrière 12 ; dépôt–chantier 20 ; carrière–chantier 9 ; chantier–centrale 5 ; dépôt–centrale 18.
Quel est le plus court trajet dépôt → chantier ?`, c:`| | Dépôt | Carrière | Chantier | Centrale |
|---|---|---|---|---|
| Dépôt | — | 12 | 20 | 18 |
| Carrière | 12 | — | 9 | — |
| Chantier | 20 | 9 | — | 5 |
| Centrale | 18 | — | 5 | — |
Trajets : direct **20 km** ; par la carrière 12 + 9 = 21 km ; par la centrale 18 + 5 = 23 km → le trajet direct est le plus court.`},
  {t:"Itinéraire le plus rapide", d:2, e:`Une toupie peut aller de la centrale au chantier par : la route bitumée (18 km à 50 km/h) ; ou une piste (11 km à 25 km/h) ; ou la route jusqu'au carrefour (8 km à 50 km/h) puis une piste (5 km à 25 km/h).
Quel itinéraire est le plus court ? Le plus rapide ?`, c:`Distances : 18 km ; **11 km** ; 13 km → le plus court est la piste directe.
Durées : 18/50 × 60 = **21,6 min** ; 11/25 × 60 = 26,4 min ; 8/50 × 60 + 5/25 × 60 = 9,6 + 12 = 21,6 min.
Les itinéraires 1 et 3 sont les plus rapides (21,6 min) : on préfère la route bitumée (moins de vibrations pour le béton, moins d'usure).`},
  {t:"Plus long chemin d'un planning", d:3, e:`Des tâches ont les durées et antériorités suivantes : A 3 j (—) ; B 5 j (A) ; C 2 j (A) ; D 4 j (C) ; E 6 j (B, D) ; F 3 j (C) ; G 2 j (E, F).
Calculer le plus long chemin du début à la fin et en déduire la durée du projet.`, c:`Dates au plus tôt : A 0 → 3 ; B 3 → 8 ; C 3 → 5 ; D 5 → 9 ; E max(8 ; 9) = 9 → 15 ; F 5 → 8 ; G max(15 ; 8) = 15 → 17.
Plus long chemin : **A – C – D – E – G = 3 + 2 + 4 + 6 + 2 = 17 jours** : c'est le chemin critique.
Le chemin A – B – E – G ne fait que 16 jours : B dispose d'un jour de marge.`}
 ],
 quiz:[
  {q:"Un graphe pondéré est un graphe dont les arêtes portent :", o:["Un poids (distance, durée, coût)","Une couleur","Un sens obligatoire","Un nom"], r:0, e:"On parle aussi de graphe valué."},
  {q:"L'algorithme de Dijkstra exige des poids :", o:["Positifs","Négatifs","Entiers","Égaux"], r:0, e:"Sinon il peut se tromper."},
  {q:"À chaque étape de Dijkstra, on fixe le sommet :", o:["Non définitif de plus petite distance","Le plus éloigné","Au hasard","D'arrivée"], r:0, e:"Sa distance ne peut plus diminuer."},
  {q:"Les prédécesseurs servent à :", o:["Reconstituer le chemin","Calculer les coûts fixes","Supprimer des arêtes","Classer les tâches"], r:0, e:"On remonte de l'arrivée au départ."},
  {q:"Dans un planning, la durée du projet est donnée par :", o:["Le plus long chemin","Le plus court chemin","La tâche la plus longue","La moyenne des durées"], r:0, e:"Chemin critique."}
 ]},

{id:"ro-10", niv:1, titre:"Arbre couvrant minimal : réseaux d'eau, d'électricité et de pistes", duree:40, contenu:`## Le problème
On doit **relier entre eux tous les points** d'un site (lots d'un lotissement, bâtiments d'une école, lampadaires, regards) par un réseau de canalisations, de câbles ou de pistes, avec la **longueur totale la plus faible** possible. Chaque liaison possible a une longueur (ou un coût).

On cherche un **arbre couvrant minimal** :
- **arbre** : réseau connexe (tous les points sont reliés) et **sans cycle** (aucune boucle inutile) ;
- **couvrant** : il passe par tous les sommets ;
- **minimal** : la somme des longueurs est la plus petite.
Un arbre reliant n sommets comporte toujours **n − 1 arêtes**.

> [!attention] Arbre minimal ≠ plus court chemin
> Le plus court chemin relie **deux** points ; l'arbre couvrant minimal relie **tous** les points au moindre coût total. Un lot peut se trouver loin du branchement en suivant l'arbre : pour l'eau, on vérifie ensuite les pressions et les diamètres.

## L'algorithme de Kruskal
1. Ranger toutes les liaisons par **longueur croissante** ;
2. Les examiner dans l'ordre : on **garde** une liaison si elle ne crée pas de cycle avec celles déjà gardées, sinon on la **rejette** ;
3. S'arrêter quand on a gardé n − 1 liaisons.

## L'algorithme de Prim
1. Partir d'un sommet quelconque (par exemple le branchement sur le réseau public) ;
2. À chaque étape, ajouter la **liaison la plus courte** qui relie un sommet déjà raccordé à un sommet non raccordé ;
3. Continuer jusqu'à ce que tous les sommets soient raccordés.
Les deux méthodes donnent la même longueur totale minimale.

> [!exemple] Réseau d'eau d'un petit lotissement
> Le regard de branchement R doit desservir 5 lots L1 à L5. Liaisons possibles (m) : R–L1 40 ; R–L2 60 ; L1–L2 30 ; L1–L3 50 ; L2–L3 45 ; L2–L4 70 ; L3–L4 35 ; L3–L5 65 ; L4–L5 40 ; R–L3 80.
> | Ordre | Liaison | Longueur | Décision |
> |---|---|---|---|
> | 1 | L1–L2 | 30 | gardée |
> | 2 | L3–L4 | 35 | gardée |
> | 3 | R–L1 | 40 | gardée |
> | 4 | L4–L5 | 40 | gardée |
> | 5 | L2–L3 | 45 | gardée (5 liaisons pour 6 sommets : fini) |
> | 6 | L1–L3 | 50 | rejetée (cycle L1–L2–L3) |
> Longueur totale : 30 + 35 + 40 + 40 + 45 = **190 m**. À 12 000 F le mètre (tranchée, tuyau, remblai) : **2 280 000 F**.
> Avec Prim depuis R : R–L1 (40), L1–L2 (30), L2–L3 (45), L3–L4 (35), L4–L5 (40) : même total, 190 m.

## Adapter le modèle à la réalité
- Une traversée de route, un rocher, un passage chez un voisin coûtent plus cher : on remplace la longueur par le **coût réel** de chaque liaison ;
- Une liaison interdite reçoit un coût infini (on ne la prend jamais) ;
- Pour les réseaux gravitaires (assainissement), les **pentes** imposent aussi le sens et le tracé : l'arbre minimal n'est qu'une première esquisse.

> [!retenir]
> - Arbre couvrant : tous les sommets reliés, sans cycle, n − 1 arêtes.
> - Kruskal : liaisons par ordre croissant, rejeter celles qui forment un cycle.
> - Prim : faire grandir le réseau en ajoutant la liaison la plus courte vers un nouveau sommet.
> - Remplacer les longueurs par les coûts réels quand le terrain l'impose.`,
 sujet:{titre:"Arbre couvrant minimal : réseau électrique d'un village et de son école", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un village proche de Katiola doit être raccordé au poste P. Les lignes possibles (longueurs en m) entre le poste et les sites 1 à 5 (école, centre de santé, forage, marché, mosquée) sont :
**P–1 120 ; P–2 200 ; 1–2 90 ; 1–3 150 ; 2–3 110 ; 2–4 180 ; 3–4 100 ; 3–5 170 ; 4–5 80 ; P–3 210**.

Coût d'une ligne basse tension : **15 000 F/m** (poteaux, câble, pose).

### Partie A — Le problème (4 points)
1. Pourquoi cherche-t-on un **arbre** (sans cycle) qui relie tous les sites ? (2 pts)
2. Combien d'arêtes comporte un arbre reliant 6 sommets ? (2 pts)

### Partie B — Kruskal (9 points)
3. Ranger les arêtes par longueur croissante. (2 pts)
4. Appliquer l'algorithme de Kruskal en justifiant chaque arête gardée ou rejetée. (5 pts)
5. Donner la longueur totale et le coût du réseau. (2 pts)

### Partie C — Vérification et variantes (7 points)
6. Retrouver le même arbre par l'algorithme de Prim en partant de P. (4 pts)
7. Le centre de santé (site 3) exige une alimentation de secours par un second chemin. Quelle arête ajouter au moindre coût ? Coût supplémentaire ? (3 pts)`,
  corrige:`### Partie A — Le problème (4 pts)
1. Tous les sites doivent être alimentés (graphe **connexe**) au moindre coût : un cycle ajouterait une ligne inutile pour la simple desserte. *(2 pts)*
2. **n − 1 = 5 arêtes**. *(2 pts)*

### Partie B — Kruskal (9 pts)
3. 4–5 (80) ; 1–2 (90) ; 3–4 (100) ; 2–3 (110) ; P–1 (120) ; 1–3 (150) ; 3–5 (170) ; 2–4 (180) ; P–2 (200) ; P–3 (210). *(2 pts)*
4. *(5 pts)*

| Arête | Longueur | Décision |
|---|---|---|
| 4–5 | 80 | gardée |
| 1–2 | 90 | gardée |
| 3–4 | 100 | gardée |
| 2–3 | 110 | gardée (relie {1, 2} à {3, 4, 5}) |
| P–1 | 120 | gardée → 5 arêtes, terminé |
| 1–3, 3–5, 2–4, P–2, P–3 | | rejetées (cycles) |

5. 80 + 90 + 100 + 110 + 120 = **500 m** → 500 × 15 000 = **7 500 000 F**. *(2 pts)*

### Partie C — Prim et variante (7 pts)
6. Depuis P : P–1 (120) ; 1–2 (90) ; 2–3 (110) ; 3–4 (100) ; 4–5 (80) → **même arbre, 500 m** ✔. *(4 pts)*
7. Le site 3 est relié par 2–3 ; un second chemin passant par une autre arête de 3 : la moins chère hors arbre est **1–3 (150 m)**, qui crée la boucle 1–2–3 → **+ 2 250 000 F**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Garder une arête qui ferme un cycle.
> - S'arrêter avant d'avoir n − 1 arêtes.
> - Confondre arbre couvrant minimal (relier tout au moindre coût) et plus court chemin (aller d'un point à un autre).`},
 exercices:[
  {t:"Kruskal : éclairage d'une cour", d:2, e:`Six candélabres A à F doivent être reliés par un câble enterré. Liaisons possibles (m) : A–B 50 ; A–C 80 ; B–C 40 ; B–D 70 ; C–D 60 ; C–E 90 ; D–E 30 ; D–F 100 ; E–F 50 ; B–E 110.
Déterminer l'arbre couvrant minimal par Kruskal et son coût à 15 000 F/m.`, c:`Ordre croissant : D–E 30 ✔ ; B–C 40 ✔ ; A–B 50 ✔ ; E–F 50 ✔ ; C–D 60 ✔ (5 liaisons pour 6 sommets : fini) ; les suivantes (B–D 70, A–C 80…) formeraient des cycles.
Longueur : 30 + 40 + 50 + 50 + 60 = **230 m** ; coût : 230 × 15 000 = **3 450 000 F**.`},
  {t:"Prim sur le même réseau", d:2, e:`Appliquer l'algorithme de Prim au réseau de l'exercice précédent en partant de A. Vérifier que l'on obtient la même longueur.`, c:`Départ A : A–B 50 (plus courte depuis A).
Depuis {A, B} : B–C 40. Depuis {A, B, C} : C–D 60 (B–D 70, A–C 80 plus longues).
Depuis {A, B, C, D} : D–E 30. Depuis {A, B, C, D, E} : E–F 50 (D–F 100).
Total : 50 + 40 + 60 + 30 + 50 = **230 m** ✓.`},
  {t:"Nombre de liaisons", d:1, e:`a) Un lotissement de 12 lots est relié à un regard de branchement. Combien de tronçons comporte un réseau en arbre ?
b) Un projet de réseau pour ces mêmes points comporte 14 tronçons. Qu'en conclure ?`, c:`a) 12 lots + 1 regard = 13 sommets → **12 tronçons**.
b) 14 > 12 : le réseau contient **au moins 2 cycles** (boucles). Ce peut être voulu (réseau maillé d'eau potable, plus sûr en cas de coupure), mais ce n'est pas l'arbre minimal.`},
  {t:"Arbre minimal ou réseau en étoile ?", d:1, e:`Dans l'exemple du cours, on aurait pu relier chaque lot directement au regard R (réseau en étoile) avec les longueurs R–L1 40 ; R–L2 60 ; R–L3 80 ; R–L4 95 ; R–L5 120 m.
Comparer avec l'arbre minimal (190 m) à 12 000 F/m.`, c:`Étoile : 40 + 60 + 80 + 95 + 120 = **395 m** → 4 740 000 F.
Arbre minimal : 190 m → 2 280 000 F.
Économie : 205 m soit **2 460 000 F** (− 52 %).`},
  {t:"Tenir compte d'une traversée de route", d:3, e:`Dans l'exemple du cours, la liaison L2–L3 traverse une route : il faut un fourreau et une remise en état de la chaussée, ce qui revient à ajouter l'équivalent de 40 m de réseau (coût L2–L3 = 85 m équivalents).
Recalculer l'arbre couvrant minimal.`, c:`Ordre : L1–L2 30 ✔ ; L3–L4 35 ✔ ; R–L1 40 ✔ ; L4–L5 40 ✔ ; L1–L3 50 ✔ (relie {R, L1, L2} à {L3, L4, L5}) → 5 liaisons : fini.
Total : 30 + 35 + 40 + 40 + 50 = **195 m** (contre 190 m + 40 m = 230 m si l'on avait gardé la traversée). Le nouveau tracé évite la route pour seulement 5 m de plus.`}
 ],
 quiz:[
  {q:"Un arbre reliant 8 sommets comporte :", o:["7 arêtes","8 arêtes","9 arêtes","16 arêtes"], r:0, e:"n − 1."},
  {q:"Dans l'algorithme de Kruskal, on rejette une liaison qui :", o:["Crée un cycle","Est la plus courte","Touche le branchement","Est horizontale"], r:0, e:"Un arbre n'a pas de cycle."},
  {q:"L'algorithme de Prim fait grandir le réseau en ajoutant :", o:["La liaison la plus courte vers un nouveau sommet","La liaison la plus longue","Une liaison au hasard","Toutes les liaisons"], r:0, e:"Depuis les sommets déjà reliés."},
  {q:"Pour relier tous les lots au moindre coût, on cherche :", o:["Un arbre couvrant minimal","Un plus court chemin","Un chemin critique","Un flot maximal"], r:0, e:"Réseau de longueur totale minimale."},
  {q:"Une liaison très difficile à réaliser (rocher, route) doit recevoir :", o:["Un coût augmenté","Un coût nul","La même longueur","Une priorité"], r:0, e:"On modélise le coût réel."}
 ]},

{id:"ro-11", niv:1, titre:"Choisir entre plusieurs solutions : analyse multicritère et seuil de rentabilité", duree:40, contenu:`## Décider avec plusieurs critères
Choisir un fournisseur, un sous-traitant, une technique de plancher ou un engin ne se fait presque jamais sur un seul critère. Le moins cher peut être en retard, le plus rapide peut être de mauvaise qualité. L'**analyse multicritère** rend le choix **explicite et justifiable**.

## La méthode de la somme pondérée
1. Lister les **solutions** possibles ;
2. Choisir les **critères** (prix, délai, qualité, références, garanties, conditions de paiement, risques) ;
3. Donner un **poids** à chaque critère (total 100 %) ;
4. **Noter** chaque solution sur chaque critère, sur la même échelle (par exemple sur 10) ;
5. Calculer la **note pondérée** : Σ (poids × note) ;
6. Classer, puis **tester la sensibilité** : le classement change-t-il si les poids varient un peu ?

> [!exemple] Choix d'un fournisseur de ciment
> Poids : prix 40 % ; délai de livraison 25 % ; régularité de la qualité 20 % ; conditions de paiement 15 %.
> | Fournisseur | Prix | Délai | Régularité | Paiement | Note pondérée |
> |---|---|---|---|---|---|
> | X | 8 | 6 | 7 | 5 | 6,85 |
> | Y | 6 | 9 | 8 | 7 | **7,30** |
> | Z | 9 | 5 | 5 | 8 | 7,05 |
> Y : 0,40 × 6 + 0,25 × 9 + 0,20 × 8 + 0,15 × 7 = 2,40 + 2,25 + 1,60 + 1,05 = **7,30** : Y est retenu, bien qu'il ne soit pas le moins cher.

## Transformer des valeurs en notes
Pour noter objectivement à partir de valeurs chiffrées :
- critère **à minimiser** (prix, délai) : note = 10 × (meilleure valeur)/(valeur de la solution) ;
- critère **à maximiser** (capacité, garantie) : note = 10 × (valeur de la solution)/(meilleure valeur).

## La dominance
Une solution est **dominée** si une autre est au moins aussi bonne sur tous les critères et meilleure sur au moins un. On élimine d'emblée les solutions dominées : cela simplifie le choix.

## Le seuil de rentabilité entre deux solutions
Beaucoup de choix opposent une solution à **coût fixe élevé et coût variable faible** (acheter) et une solution à **coût fixe faible et coût variable élevé** (louer). On calcule la quantité (jours, m³, mois) pour laquelle les deux coûtent autant : c'est le **point d'équivalence**.
> [!exemple] Louer ou acheter une bétonnière ?
> Location : 15 000 F par jour. Achat : 1 200 000 F + 3 000 F par jour d'entretien et de carburant supplémentaire.
> Égalité : 15 000 n = 1 200 000 + 3 000 n → 12 000 n = 1 200 000 → **n = 100 jours**.
> Moins de 100 jours d'utilisation : louer ; au-delà : acheter (sans oublier le stockage, l'immobilisation de trésorerie et la revente).

## Le coût global
Comparer seulement les prix d'achat est trompeur : on compare les **coûts globaux** sur la durée d'utilisation (achat + entretien + énergie + remplacement − revente). Une toiture plus chère mais mieux isolée peut coûter moins cher sur 20 ans grâce aux économies de climatisation.

> [!retenir]
> - Somme pondérée : poids (100 %) × notes sur la même échelle ; tester la sensibilité aux poids.
> - Éliminer les solutions dominées.
> - Point d'équivalence : égaliser coûts fixes + variables des deux solutions.
> - Raisonner en coût global, pas en prix d'achat.`,
 sujet:{titre:"Analyse multicritère et seuil de rentabilité : choisir un groupe électrogène", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une entreprise de BTP de Bouaké doit équiper ses chantiers d'un groupe électrogène et hésite entre louer et acheter.

**Critères et poids** : prix **35 %** ; consommation **25 %** ; fiabilité et service après-vente **25 %** ; niveau de bruit **15 %**.

| Groupe | Prix | Consommation | Fiabilité/SAV | Bruit |
|---|---|---|---|---|
| G1 | 7 | 6 | 8 | 5 |
| G2 | 9 | 5 | 6 | 6 |
| G3 | 6 | 8 | 8 | 8 |

(notes sur 10, 10 = meilleur)

**Louer ou acheter le groupe retenu** : location **25 000 F/jour** ; achat **3 000 000 F** + **5 000 F/jour** d'entretien et de frais ; utilisation prévue **120 jours/an** pendant 2 ans.

### Partie A — Analyse multicritère (9 points)
1. Calculer la note pondérée de chaque groupe. (5 pts)
2. Quel groupe retenir ? Est-ce le moins cher ? (2 pts)
3. Si le prix pesait 60 % (les autres poids réduits en proportion), le choix changerait-il ? Calculer. (2 pts)

### Partie B — Seuil de rentabilité (8 points)
4. Exprimer le coût de la location et de l'achat en fonction du nombre de jours n. (2 pts)
5. Calculer le seuil de rentabilité de l'achat. (3 pts)
6. Que conseiller pour 240 jours d'utilisation sur 2 ans ? (3 pts)

### Partie C — Limites (3 points)
7. Citer trois éléments que ces calculs simples ne prennent pas en compte. (3 pts)`,
  corrige:`### Partie A — Multicritère (9 pts)
1. *(5 pts)*
   - G1 : 0,35 × 7 + 0,25 × 6 + 0,25 × 8 + 0,15 × 5 = 2,45 + 1,50 + 2,00 + 0,75 = **6,70** ;
   - G2 : 3,15 + 1,25 + 1,50 + 0,90 = **6,80** ;
   - G3 : 2,10 + 2,00 + 2,00 + 1,20 = **7,30**.
2. **G3** (7,30), bien qu'il soit le **plus cher** (note prix 6) : sa faible consommation et sa fiabilité compensent. *(2 pts)*
3. Autres poids : 0,40 × (25/65) ≈ 0,154 chacun pour consommation et fiabilité, 0,40 × (15/65) ≈ 0,092 pour le bruit. G1 : 4,20 + 0,92 + 1,23 + 0,46 = 6,81 ; G2 : 5,40 + 0,77 + 0,92 + 0,55 = **7,64** ; G3 : 3,60 + 1,23 + 1,23 + 0,74 = 6,80 → **G2** passerait devant : le résultat dépend fortement des poids, qu'il faut justifier. *(2 pts)*

### Partie B — Seuil (8 pts)
4. Location : **CL = 25 000 n** ; achat : **CA = 3 000 000 + 5 000 n**. *(2 pts)*
5. 25 000 n = 3 000 000 + 5 000 n ⇔ 20 000 n = 3 000 000 ⇔ **n = 150 jours**. *(3 pts)*
6. 240 jours > 150 : **acheter** ; coût : 3 000 000 + 1 200 000 = 4,2 M contre 6,0 M en location (économie de 1,8 M), et le groupe garde une valeur de revente. *(3 pts)*

### Partie C — Limites (3 pts)
7. Valeur de **revente**, coût du **capital** (intérêts, trésorerie), **pannes** et immobilisation, transport, gardiennage, assurances, évolution des besoins. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier de multiplier les notes par les poids.
> - Choisir sur un seul critère (le prix).
> - Comparer un coût d'achat à un coût de location sans tenir compte de la durée d'utilisation.`},
 exercices:[
  {t:"Choisir un sous-traitant d'étanchéité", d:1, e:`Critères et poids : prix 35 % ; références 25 % ; délai 20 % ; garantie 20 %.
Notes sur 10 — E1 : 7, 8, 6, 9 ; E2 : 9, 5, 7, 6 ; E3 : 6, 9, 8, 8.
Calculer les notes pondérées et désigner l'entreprise retenue.`, c:`E1 = 0,35 × 7 + 0,25 × 8 + 0,20 × 6 + 0,20 × 9 = 2,45 + 2,00 + 1,20 + 1,80 = **7,45**.
E2 = 3,15 + 1,25 + 1,40 + 1,20 = **7,00**.
E3 = 2,10 + 2,25 + 1,60 + 1,60 = **7,55**.
**E3** est retenue, de peu devant E1 : une négociation sur le prix avec E3 conforterait le choix.`},
  {t:"Louer ou acheter un vibrateur-compacteur", d:1, e:`Location : 25 000 F/jour. Achat : 2 400 000 F, revente estimée 900 000 F en fin de chantier, frais d'entretien 5 000 F/jour.
a) Calculer le point d'équivalence.
b) Que choisir pour 120 jours d'utilisation ?`, c:`a) 25 000 n = (2 400 000 − 900 000) + 5 000 n → 20 000 n = 1 500 000 → **n = 75 jours**.
b) 120 jours : location 3 000 000 F ; achat 1 500 000 + 600 000 = 2 100 000 F → **acheter** (économie de 900 000 F).`},
  {t:"Noter à partir de valeurs", d:2, e:`Trois offres pour un lot de gros œuvre : A : 18 M F en 10 semaines ; B : 20 M F en 8 semaines ; C : 22,5 M F en 9 semaines. Poids : prix 60 %, délai 40 %.
Calculer les notes (critères à minimiser) puis les notes pondérées.`, c:`Prix (meilleur 18) : A 10 ; B 10 × 18/20 = 9 ; C 10 × 18/22,5 = 8.
Délai (meilleur 8) : A 10 × 8/10 = 8 ; B 10 ; C 10 × 8/9 = 8,89.
Pondérées : A = 6,0 + 3,2 = **9,20** ; B = 5,4 + 4,0 = **9,40** ; C = 4,8 + 3,56 = **8,36** → **B** retenue.`},
  {t:"Éliminer les solutions dominées", d:2, e:`Quatre grues mobiles sont proposées (coût mensuel ; capacité au rayon utile ; délai de mise à disposition) : G1 : 3,2 M F ; 4 t ; 2 semaines. G2 : 3,5 M F ; 4 t ; 3 semaines. G3 : 4,0 M F ; 6 t ; 2 semaines. G4 : 3,0 M F ; 3 t ; 4 semaines.
a) Quelle grue est dominée ?
b) La charge la plus lourde à lever pèse 5 t : laquelle choisir ?`, c:`a) **G2** est dominée par G1 : plus chère, même capacité, plus lente.
b) Seule **G3** (6 t) peut lever 5 t : la contrainte technique élimine G1 et G4 avant même la pondération.`},
  {t:"Sensibilité aux poids", d:3, e:`Reprendre l'exemple du cours (fournisseurs de ciment) avec les poids : prix 50 % ; délai 15 % ; régularité 20 % ; paiement 15 %.
Le classement change-t-il ? Quelle leçon en tirer ?`, c:`X = 0,5 × 8 + 0,15 × 6 + 0,2 × 7 + 0,15 × 5 = 4,00 + 0,90 + 1,40 + 0,75 = **7,05**.
Y = 3,00 + 1,35 + 1,60 + 1,05 = **7,00**.
Z = 4,50 + 0,75 + 1,00 + 1,20 = **7,45** → **Z** passe en tête.
Le résultat dépend fortement des poids : il faut les fixer et les justifier **avant** de noter les offres (c'est d'ailleurs une règle des marchés publics : critères et pondérations annoncés dans le règlement de consultation).`}
 ],
 quiz:[
  {q:"Dans une somme pondérée, la somme des poids vaut :", o:["100 %","10","Le nombre de critères","Le prix"], r:0, e:"Les poids sont des pourcentages."},
  {q:"Une solution dominée :", o:["Peut être éliminée","Doit être retenue","Est la moins chère","N'existe pas"], r:0, e:"Une autre est meilleure ou égale partout."},
  {q:"Note d'un prix de 25 M F si le meilleur prix est 20 M F (sur 10) :", o:["8","10","12,5","5"], r:0, e:"10 × 20/25."},
  {q:"Au-delà du point d'équivalence entre location et achat :", o:["L'achat devient plus avantageux","La location devient plus avantageuse","Les deux sont gratuits","On ne peut rien dire"], r:0, e:"Le coût fixe est amorti."},
  {q:"Le coût global d'un équipement comprend :", o:["Achat, entretien, énergie, remplacement, moins la revente","Le prix d'achat seulement","La TVA seulement","Le transport seulement"], r:0, e:"Sur toute la durée d'utilisation."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"ro-3", niv:2, titre:"Ordonnancement PERT : dates, marges et chemin critique", duree:55, contenu:`## Le réseau PERT
Dans la méthode **PERT**, chaque **tâche est une flèche** (arc) et chaque **étape** (événement : début ou fin de tâches) est un cercle numéroté. Une flèche part de l'étape où toutes ses antériorités sont terminées.

Quand deux tâches ont des antériorités partiellement communes, il faut une **tâche fictive** (flèche en pointillé, durée nulle) pour représenter correctement les liens. Exemple : F dépend de C et de D, mais E dépend seulement de D → une flèche fictive relie la fin de D au début de F.

!fig:pert|Réseau PERT : le chemin critique est en rouge

## Les dates au plus tôt (calcul aller)
On parcourt le réseau du début vers la fin :
- La date au plus tôt du début du projet vaut 0 ;
- **Début au plus tôt** d'une tâche = **maximum** des fins au plus tôt de ses antériorités ;
- Fin au plus tôt = début au plus tôt + durée.
La fin au plus tôt de la dernière tâche donne la **durée minimale du projet**.

## Les dates au plus tard (calcul retour)
On parcourt le réseau de la fin vers le début, en partant de la durée du projet :
- **Fin au plus tard** d'une tâche = **minimum** des débuts au plus tard de ses successeurs ;
- Début au plus tard = fin au plus tard − durée.

## Les marges
- **Marge totale** MT = début au plus tard − début au plus tôt : retard possible d'une tâche **sans retarder la fin du projet** (mais elle peut consommer la marge des tâches suivantes) ;
- **Marge libre** ML = (début au plus tôt du successeur le plus précoce) − (fin au plus tôt de la tâche) : retard possible **sans retarder aucune autre tâche**.
Toujours : 0 ≤ ML ≤ MT.

## Le chemin critique
Les tâches de **marge totale nulle** forment le **chemin critique** : c'est le plus long chemin du réseau. Tout retard sur une tâche critique retarde le projet d'autant ; pour raccourcir le projet, il faut raccourcir des tâches critiques.

> [!exemple] Petit immeuble (durées en semaines)
> | Tâche | Désignation | Durée | Antériorités |
> |---|---|---|---|
> | A | Terrassements | 4 | — |
> | B | Fondations | 6 | A |
> | C | Commande et fabrication des menuiseries | 12 | A |
> | D | Gros œuvre en élévation | 10 | B |
> | E | Planchers hauts | 7 | D |
> | F | Pose des menuiseries | 3 | C, D |
> | G | Étanchéité de toiture | 5 | E |
> | H | Finitions | 6 | F, G |

> [!exemple] Calcul des dates et des marges
> | Tâche | Début tôt | Fin tôt | Début tard | Fin tard | MT | ML |
> |---|---|---|---|---|---|---|
> | A | 0 | 4 | 0 | 4 | 0 | 0 |
> | B | 4 | 10 | 4 | 10 | 0 | 0 |
> | C | 4 | 16 | 17 | 29 | 13 | 4 |
> | D | 10 | 20 | 10 | 20 | 0 | 0 |
> | E | 20 | 27 | 20 | 27 | 0 | 0 |
> | F | 20 | 23 | 29 | 32 | 9 | 9 |
> | G | 27 | 32 | 27 | 32 | 0 | 0 |
> | H | 32 | 38 | 32 | 38 | 0 | 0 |
> Durée du projet : **38 semaines** ; chemin critique : **A – B – D – E – G – H** (4 + 6 + 10 + 7 + 5 + 6 = 38).
> C peut prendre jusqu'à 13 semaines de retard sans décaler la fin, mais au-delà de 4 semaines elle retarde la pose des menuiseries F.

## Exploiter les marges
- Les marges permettent de **décaler** des tâches pour lisser les ressources ou attendre une livraison ;
- Une tâche qui consomme toute sa marge **devient critique** : on surveille aussi les chemins « presque critiques » ;
- On met à jour le réseau régulièrement avec l'avancement réel.

> [!retenir]
> - PERT : tâches sur les flèches, étapes dans les cercles, tâches fictives si besoin.
> - Aller : début tôt = max des fins tôt des antériorités ; retour : fin tard = min des débuts tard des successeurs.
> - MT = début tard − début tôt ; ML = début tôt du successeur − fin tôt.
> - Chemin critique = tâches à MT nulle = plus long chemin.`,
 sujet:{titre:"Ordonnancement PERT : dates, marges et chemin critique d'un entrepôt", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Construction d'un entrepôt à charpente métallique à Vridi (durées en semaines).

| Tâche | Désignation | Durée | Antériorités |
|---|---|---|---|
| A | Études d'exécution | 3 | — |
| B | Terrassements | 2 | — |
| C | Fondations | 4 | A, B |
| D | Commande et fabrication de la charpente | 8 | A |
| E | Élévation des murs | 6 | C |
| F | Montage de la charpente | 3 | D, E |
| G | Réseaux | 4 | E |
| H | Couverture | 2 | F |
| I | Finitions | 5 | G, H |

### Partie A — Réseau (5 points)
1. Construire le graphe PERT (ou potentiels-tâches). (5 pts)

### Partie B — Dates et marges (11 points)
2. Calculer les dates au plus tôt et la durée du projet. (4 pts)
3. Calculer les dates au plus tard. (3 pts)
4. Calculer la marge totale et la marge libre de chaque tâche. (4 pts)

### Partie C — Analyse (4 points)
5. Donner le chemin critique. (2 pts)
6. La fabrication de la charpente (D) prend 3 semaines de retard. Conséquence ? (2 pts)`,
  corrige:`### Partie A — Réseau (5 pts)
1. Début → A, B ; A, B → C ; A → D ; C → E ; D, E → F ; E → G ; F → H ; G, H → I → Fin. *(5 pts)*

### Partie B — Dates et marges (11 pts)
2. à 4. *(11 pts)*

| Tâche | Début tôt | Fin tôt | Début tard | Fin tard | Marge totale | Marge libre |
|---|---|---|---|---|---|---|
| A | 0 | 3 | 0 | 3 | 0 | 0 |
| B | 0 | 2 | 1 | 3 | 1 | 1 |
| C | 3 | 7 | 3 | 7 | 0 | 0 |
| D | 3 | 11 | 5 | 13 | 2 | 2 |
| E | 7 | 13 | 7 | 13 | 0 | 0 |
| F | 13 | 16 | 13 | 16 | 0 | 0 |
| G | 13 | 17 | 14 | 18 | 1 | 1 |
| H | 16 | 18 | 16 | 18 | 0 | 0 |
| I | 18 | 23 | 18 | 23 | 0 | 0 |

Durée du projet : **23 semaines**.

### Partie C — Analyse (4 pts)
5. **A – C – E – F – H – I** (marges nulles). *(2 pts)*
6. Retard de 3 semaines sur D, qui n'a que **2 semaines** de marge → F commence en semaine 14 au lieu de 13 : **le chantier finit 1 semaine plus tard** (24 semaines) ; D devient critique. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer les dates au plus tard de gauche à droite (on part de la fin).
> - Confondre marge totale (retard sans décaler la fin du projet) et marge libre (sans décaler les successeurs).
> - Oublier que la fabrication en usine est souvent sur le chemin critique.`},
 exercices:[
  {t:"Durée d'un petit projet", d:1, e:`Tâches : A 4 j (—) ; B 3 j (A) ; C 5 j (A) ; D 2 j (B, C).
Calculer les dates au plus tôt, la durée du projet et la marge de B.`, c:`A : 0 → 4 ; B : 4 → 7 ; C : 4 → 9 ; D : max(7 ; 9) = 9 → **11 j**.
B : fin au plus tard = début tard de D = 9 → début tard 6 → **MT = 6 − 4 = 2 jours** (ML = 9 − 7 = 2 jours). Chemin critique : A – C – D.`},
  {t:"Calcul complet d'un réseau", d:2, e:`Tâches : A 5 j (—) ; B 3 j (—) ; C 4 j (A) ; D 6 j (A, B) ; E 2 j (B) ; F 5 j (C, D) ; G 3 j (D, E) ; H 4 j (F, G).
Calculer les dates au plus tôt et au plus tard, les marges totales et libres, et le chemin critique.`, c:`| Tâche | Début tôt | Fin tôt | Début tard | Fin tard | MT | ML |
|---|---|---|---|---|---|---|
| A | 0 | 5 | 0 | 5 | 0 | 0 |
| B | 0 | 3 | 2 | 5 | 2 | 0 |
| C | 5 | 9 | 7 | 11 | 2 | 2 |
| D | 5 | 11 | 5 | 11 | 0 | 0 |
| E | 3 | 5 | 11 | 13 | 8 | 6 |
| F | 11 | 16 | 11 | 16 | 0 | 0 |
| G | 11 | 14 | 13 | 16 | 2 | 2 |
| H | 16 | 20 | 16 | 20 | 0 | 0 |
Durée : **20 jours** ; chemin critique **A – D – F – H** (5 + 6 + 5 + 4).`},
  {t:"Tâches fictives", d:2, e:`Dans le réseau de l'exercice précédent, expliquer pourquoi des tâches fictives sont nécessaires pour dessiner le réseau PERT.`, c:`D dépend de **A et B**, alors que C ne dépend que de A et E que de B. Si l'on faisait partir C, D et E d'une même étape « fin de A et B », on imposerait à tort à C d'attendre B et à E d'attendre A.
Solution : une étape « fin de A » (départ de C), une étape « fin de B » (départ de E), et une étape « début de D » reliée aux deux précédentes par des **flèches fictives** de durée nulle. De même pour G (après D et E) et F (après C et D).`},
  {t:"Impact des retards", d:2, e:`Toujours avec le réseau de l'exercice 2 (20 jours), quelles sont les conséquences : a) d'un retard de 5 jours sur E ? b) d'un retard de 3 jours sur C ? c) d'un retard de 2 jours sur G ?`, c:`a) E : MT = 8 et ML = 6 → 5 jours de retard n'ont **aucune conséquence** (ni sur le projet, ni sur les autres tâches).
b) C : MT = 2 → le projet est retardé de 3 − 2 = **1 jour** (fin à 21 jours).
c) G : MT = 2 → **pas de retard** du projet, mais G devient **critique** : plus aucune marge.`},
  {t:"Réseau d'une villa", d:3, e:`Tâches (semaines) : A Terrassement 2 (—) ; B Fondations 3 (A) ; C Assainissement 2 (A) ; D Élévation 6 (B) ; E Dalle 3 (D) ; F Réseaux 3 (C, D) ; G Toiture 2 (E) ; H Enduits 4 (F, G) ; I Peinture 2 (H).
Calculer la durée, le chemin critique et les marges de C et F.`, c:`Dates au plus tôt : A 0 → 2 ; B 2 → 5 ; C 2 → 4 ; D 5 → 11 ; E 11 → 14 ; F max(4 ; 11) = 11 → 14 ; G 14 → 16 ; H max(14 ; 16) = 16 → 20 ; I 20 → **22 semaines**.
Retour : I 20 → 22 ; H 16 → 20 ; G 14 → 16 ; F : fin tard 16 → début tard 13 ; E 11 → 14 ; D : fin tard min(11 ; 13) = 11.
Chemin critique : **A – B – D – E – G – H – I** (2 + 3 + 6 + 3 + 2 + 4 + 2 = 22).
F : MT = 13 − 11 = **2 semaines** (ML = 16 − 14 = 2) ; C : fin tard = début tard de F = 13 → début tard 11 → **MT = 9 semaines**, ML = 11 − 4 = 7 semaines.`}
 ],
 quiz:[
  {q:"Dans un réseau PERT, les tâches sont représentées par :", o:["Des flèches","Des cercles","Des barres","Des colonnes"], r:0, e:"Les cercles sont les étapes."},
  {q:"Le début au plus tôt d'une tâche est :", o:["Le maximum des fins au plus tôt de ses antériorités","Le minimum","La somme","La moyenne"], r:0, e:"Il faut attendre toutes les antériorités."},
  {q:"Une tâche critique a une marge totale :", o:["Nulle","Maximale","Négative","Égale à sa durée"], r:0, e:"Tout retard retarde le projet."},
  {q:"La marge libre est :", o:["Le retard possible sans décaler aucune autre tâche","Le retard possible sans décaler la fin du projet","Toujours supérieure à la marge totale","La durée de la tâche"], r:0, e:"ML ≤ MT."},
  {q:"Une tâche fictive a une durée :", o:["Nulle","D'un jour","Égale à la plus longue","Variable"], r:0, e:"Elle ne représente qu'un lien."}
 ]},

{id:"ro-4", niv:2, titre:"Méthode des potentiels (MPM), Gantt et lissage des ressources", duree:50, contenu:`## La méthode des potentiels
Dans la **méthode des potentiels** (MPM), chaque **tâche est un nœud** (rectangle) et les **flèches représentent les liens**. Il n'y a jamais de tâche fictive : le graphe se dessine directement à partir du tableau des antériorités.

Chaque rectangle porte : le nom de la tâche, sa durée, son **début au plus tôt** et son **début au plus tard**. Les calculs sont les mêmes qu'en PERT (aller : maximum ; retour : minimum).

## Des liens plus riches
La MPM accepte facilement des liens autres que « fin – début » :
- **Fin – début avec délai** : décoffrer une dalle au moins 7 jours après le coulage (durcissement), poser le carrelage 21 jours après la chape ;
- **Début – début avec décalage** : les enduits d'un étage peuvent commencer 3 jours après le début de la maçonnerie de cet étage (travail **en chevauchement**) ;
- **Fin – fin** : la peinture ne peut finir qu'après la fin de la pose des menuiseries.

> [!exemple] Plancher coulé en place (jours)
> Coffrage C : 4 j. Ferraillage F : 3 j, peut commencer **2 jours après le début** du coffrage. Bétonnage B : 1 j, après la fin de C et de F. Décoffrage D : 2 j, au moins **7 jours après la fin** du bétonnage.
> C : 0 → 4 ; F : 0 + 2 = 2 → 5 ; B : max(4 ; 5) = 5 → 6 ; D : 6 + 7 = 13 → **15 jours**.
> Sans chevauchement (F après la fin de C), F irait de 4 à 7, B de 7 à 8 et D finirait au jour 17.

## Du réseau au Gantt
On reporte les tâches au plus tôt sur un Gantt, en dessinant la **marge** de chaque tâche par un trait fin après sa barre. On voit d'un coup d'œil ce qui peut glisser.

## L'histogramme des ressources
Sous le Gantt, on additionne jour par jour les **ressources** utilisées (ouvriers, grue, coffrages) : c'est l'**histogramme des charges**. Un histogramme en dents de scie oblige à embaucher puis renvoyer du personnel, ou laisse des ouvriers inoccupés.

## Le lissage
On utilise les **marges** des tâches non critiques pour les **décaler** et rendre l'histogramme le plus régulier possible, **sans allonger le projet** (on reste dans les marges totales).

> [!exemple] Lissage d'une équipe
> | Tâche | Durée (j) | Antériorités | Ouvriers |
> |---|---|---|---|
> | A | 2 | — | 4 |
> | B | 3 | A | 5 |
> | C | 2 | A | 3 |
> | D | 4 | B | 4 |
> | E | 2 | C | 4 |
> | F | 2 | D, E | 3 |
> Au plus tôt : A 0 → 2 ; B 2 → 5 ; C 2 → 4 ; D 5 → 9 ; E 4 → 6 ; F 9 → 11 : **11 jours**, chemin critique A – B – D – F ; C et E ont 3 jours de marge totale (partagée).
> Histogramme au plus tôt : jours 0-2 : 4 ; 2-4 : B + C = 8 ; 4-5 : B + E = **9** ; 5-6 : D + E = 8 ; 6-9 : 4 ; 9-11 : 3.
> Lissage : on décale E pour qu'elle ne chevauche plus B (E de 5 à 7) : jours 4-5 : 5 ; 5-7 : D + E = 8. Le **pic passe de 9 à 8 ouvriers**, sans changer la durée de 11 jours.

> [!astuce] Les règles du lissage
> - Décaler d'abord les tâches qui ont le plus de marge ;
> - Ne jamais dépasser la marge totale (sinon le projet est retardé) ;
> - Si le pic reste trop élevé, on peut **allonger** une tâche non critique avec moins d'ouvriers (même quantité de travail, en hommes-jours).

> [!retenir]
> - MPM : tâches dans les nœuds, pas de tâche fictive, liens avec délais ou chevauchements.
> - Gantt au plus tôt + marges ; histogramme des ressources jour par jour.
> - Lissage : décaler les tâches non critiques dans leurs marges pour écrêter les pics.`,
 sujet:{titre:"Méthode des potentiels, chevauchements et lissage d'une équipe", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous planifiez la réalisation d'un plancher et l'emploi d'une équipe sur un chantier de Bingerville (durées en jours).

**Partie plancher (liens avec décalage)**
- Coffrage **C** : 4 j ; ferraillage **F** : 3 j, peut commencer **2 jours après le début** de C ; bétonnage **B** : 1 j, après la **fin** de C et de F ; décoffrage **D** : 2 j, au moins **10 jours après la fin** de B (étais en place).

**Partie équipe**

| Tâche | Durée | Antériorités | Ouvriers |
|---|---|---|---|
| A | 2 | — | 4 |
| B | 4 | A | 5 |
| C | 3 | A | 3 |
| D | 3 | B | 4 |
| E | 2 | C | 4 |
| F | 2 | D, E | 3 |

### Partie A — Potentiels avec décalages (6 points)
1. Calculer les dates de début et de fin de C, F, B et D. Durée totale ? (4 pts)
2. Que deviendrait la durée sans chevauchement (F après la fin de C) ? (2 pts)

### Partie B — Ordonnancement de l'équipe (6 points)
3. Calculer les dates au plus tôt, la durée et les marges de chaque tâche. (6 pts)

### Partie C — Lissage (8 points)
4. Tracer l'histogramme des effectifs au plus tôt, jour par jour, et donner le pic. (4 pts)
5. Proposer un décalage dans les marges pour réduire le pic, sans allonger le projet. Nouvel histogramme et nouveau pic. (4 pts)`,
  corrige:`### Partie A — Potentiels (6 pts)
1. C : 0 → 4 ; F : 0 + 2 = **2 → 5** ; B : max(4 ; 5) = **5 → 6** ; D : 6 + 10 = **16 → 18** → durée **18 jours**. *(4 pts)*
2. F : 4 → 7 ; B : 7 → 8 ; D : 18 → 20 → **20 jours** : le chevauchement fait gagner 2 jours. *(2 pts)*

### Partie B — Équipe (6 pts)
3. *(6 pts)*

| Tâche | Début | Fin | Marge totale |
|---|---|---|---|
| A | 0 | 2 | 0 |
| B | 2 | 6 | 0 |
| C | 2 | 5 | 2 |
| D | 6 | 9 | 0 |
| E | 5 | 7 | 2 |
| F | 9 | 11 | 0 |

Durée : **11 jours** ; chemin critique A – B – D – F.

### Partie C — Lissage (8 pts)
4. Jours 1-2 : 4 ; jours 3-5 : B + C = **8** ; jour 6 : B + E = **9** ; jour 7 : D + E = 8 ; jours 8-9 : 4 ; jours 10-11 : 3 → **pic de 9 ouvriers**. *(4 pts)*
5. Décaler **E d'un jour** (6 → 8, dans sa marge de 2 jours) : jours 3-5 : 8 ; jour 6 : B seul = **5** ; jours 7-8 : D + E = **8** ; jour 9 : 4 ; jours 10-11 : 3 → **pic ramené à 8**, durée inchangée (11 jours). *(4 pts)*

> [!attention] Erreurs à éviter
> - Oublier le délai minimal après bétonnage (décoffrage).
> - Décaler une tâche au-delà de sa marge.
> - Lisser en allongeant le chemin critique sans le voir.`},
 exercices:[
  {t:"Liens avec délais", d:1, e:`Chape C : 2 jours. Carrelage K : 5 jours, au plus tôt 21 jours après la fin de la chape. Plinthes P : 1 jour, après le carrelage.
Calculer la date de fin.`, c:`C : 0 → 2 ; K : 2 + 21 = 23 → 28 ; P : 28 → **29 jours**.
Le délai de séchage pèse plus que les travaux eux-mêmes : on organise d'autres tâches pendant ce temps.`},
  {t:"Chevauchement de tâches", d:2, e:`Maçonnerie d'un étage M : 10 jours. Enduits E : 8 jours, pouvant commencer 4 jours après le début de M, mais devant finir au moins 2 jours après la fin de M.
Calculer le début et la fin des enduits et la durée totale.`, c:`M : 0 → 10.
E : début ≥ 0 + 4 = 4 → fin = 12 ; contrainte fin – fin : fin ≥ 10 + 2 = 12 ✓.
E : **4 → 12** ; durée totale **12 jours** (au lieu de 18 jours si l'on attendait la fin de la maçonnerie).`},
  {t:"Tableau MPM", d:2, e:`Tâches : A 3 j (—) ; B 4 j (A) ; C 2 j (A) ; D 5 j (B, C) ; E 3 j (C) ; F 2 j (D, E).
Donner pour chaque tâche le début au plus tôt et au plus tard, puis le chemin critique.`, c:`Aller : A 0 ; B 3 ; C 3 ; D max(7 ; 5) = 7 ; E 5 ; F max(12 ; 8) = 12 → fin **14 jours**.
Retour : F 12 ; D 12 − 5 = 7 ; E 12 − 3 = 9 ; B 7 − 4 = 3 ; C min(7 ; 9) − 2 = 5 ; A 0.
Marges : C = 5 − 3 = 2 ; E = 9 − 5 = 4 ; autres 0. Chemin critique : **A – B – D – F**.`},
  {t:"Lisser une équipe", d:2, e:`Tâches : A 2 j (—, 3 ouvriers) ; B 3 j (A, 4 ouvriers) ; C 2 j (A, 4 ouvriers) ; D 4 j (C, 2 ouvriers) ; E 2 j (B, D, 3 ouvriers).
a) Calculer les dates au plus tôt, la durée et la marge de B.
b) Tracer l'histogramme au plus tôt puis lisser.`, c:`a) A 0 → 2 ; B 2 → 5 ; C 2 → 4 ; D 4 → 8 ; E 8 → 10 : **10 jours** ; B : fin tard = 8 → début tard 5 → **MT = 3 jours**.
b) Au plus tôt : 0-2 : 3 ; 2-4 : B + C = **8** ; 4-5 : B + D = 6 ; 5-8 : D = 2 ; 8-10 : 3.
On décale B de 2 jours (4 → 7) : 2-4 : C = 4 ; 4-7 : B + D = 6 ; 7-8 : D = 2.
Le pic tombe de **8 à 6 ouvriers**, la durée reste 10 jours.`},
  {t:"Allonger une tâche pour écrêter", d:3, e:`Une tâche non critique T de 4 jours demande 6 ouvriers ; elle a 4 jours de marge totale. Pendant toute sa durée, les tâches critiques occupent déjà 6 ouvriers, et l'entreprise ne dispose que de 9 ouvriers.
Proposer une organisation qui respecte l'effectif sans retarder le projet.`, c:`Travail de T : 4 × 6 = **24 hommes-jours**.
Ouvriers disponibles pour T : 9 − 6 = **3**. Durée avec 3 ouvriers : 24/3 = **8 jours**.
Durée initiale 4 j + marge 4 j = 8 jours disponibles : T réalisée en **8 jours avec 3 ouvriers** consomme toute sa marge mais ne retarde pas le projet (elle devient critique).`}
 ],
 quiz:[
  {q:"En MPM, une tâche est représentée par :", o:["Un nœud (rectangle)","Une flèche","Une tâche fictive","Une barre"], r:0, e:"Les flèches sont les liens."},
  {q:"La MPM nécessite des tâches fictives :", o:["Jamais","Toujours","Une fois sur deux","Pour chaque délai"], r:0, e:"Avantage sur le PERT."},
  {q:"Un lien « début – début + 3 j » signifie :", o:["La tâche suivante peut commencer 3 jours après le début de la précédente","Elle commence 3 jours après la fin","Elles finissent ensemble","Elles sont indépendantes"], r:0, e:"Chevauchement."},
  {q:"Le lissage des ressources consiste à :", o:["Décaler des tâches dans leurs marges pour régulariser l'histogramme","Supprimer des tâches","Allonger le chemin critique","Augmenter les effectifs"], r:0, e:"Sans retarder le projet."},
  {q:"Une tâche de 5 jours à 4 ouvriers représente :", o:["20 hommes-jours","9 hommes-jours","1,25 homme-jour","5 hommes-jours"], r:0, e:"5 × 4."}
 ]},

{id:"ro-12", niv:2, titre:"PERT probabiliste : la probabilité de tenir un délai", duree:45, contenu:`## Des durées incertaines
Sur un chantier, les durées ne sont jamais certaines : pluie, retard de livraison, panne, absence, sol plus mauvais que prévu… Le **PERT probabiliste** demande trois estimations pour chaque tâche :
- **a** : durée **optimiste** (tout se passe bien) ;
- **m** : durée **la plus probable** ;
- **b** : durée **pessimiste** (beaucoup d'aléas, mais pas une catastrophe).

## Durée moyenne et écart-type d'une tâche
$$ te = (a + 4 m + b) / 6      ;      σ = (b − a) / 6      ;      variance V = σ²
La durée moyenne te est tirée vers la durée pessimiste quand b est loin de m : c'est le cas fréquent sur les chantiers (les retards sont plus probables que les avances).

## La durée du projet
On calcule le chemin critique avec les durées te. La durée du projet T est la **somme** des te des tâches critiques et, si les tâches sont indépendantes, sa **variance est la somme des variances** :
$$ T = Σ te      ;      σ(T) = √(Σ σ²)
D'après le théorème central limite, T suit approximativement une **loi normale**.

## Probabilité de respecter un délai D
$$ z = (D − T) / σ(T)      puis      P(durée ≤ D) = Φ(z)
| z | 0 | 0,5 | 0,84 | 1 | 1,28 | 1,5 | 1,645 | 2 | 2,33 |
|---|---|---|---|---|---|---|---|---|---|
| Φ(z) | 0,50 | 0,69 | 0,80 | 0,84 | 0,90 | 0,93 | 0,95 | 0,977 | 0,99 |
Pour z négatif : Φ(− z) = 1 − Φ(z).

> [!exemple] Chantier de quatre tâches critiques (jours)
> | Tâche | a | m | b | te | σ | σ² |
> |---|---|---|---|---|---|---|
> | Terrassement | 3 | 4 | 8 | 4,5 | 0,83 | 0,69 |
> | Fondations | 5 | 6 | 10 | 6,5 | 0,83 | 0,69 |
> | Gros œuvre | 18 | 22 | 32 | 23,0 | 2,33 | 5,44 |
> | Second œuvre | 12 | 15 | 21 | 15,5 | 1,50 | 2,25 |
> T = 4,5 + 6,5 + 23 + 15,5 = **49,5 jours** ; Σ σ² = 9,08 → σ(T) = **3,0 jours**.
> Délai de 52 jours : z = (52 − 49,5)/3,0 = 0,83 → P ≈ **80 %**.
> Délai de 48 jours : z = − 0,50 → P ≈ 1 − 0,69 = **31 %** seulement.
> Délai à annoncer pour être sûr à 95 % : D = 49,5 + 1,645 × 3,0 = **54,5 jours**.

## Utiliser le résultat
- Fixer un **délai contractuel** réaliste, ou une **réserve** pour aléas ;
- Évaluer le **risque de pénalités** de retard ;
- Repérer les tâches qui apportent le plus de **variance** (ici le gros œuvre) : c'est sur elles qu'il faut agir (préparation, approvisionnements sûrs, équipe de renfort).

> [!attention] Les chemins presque critiques
> Un chemin un peu plus court mais très incertain peut devenir critique. La probabilité de finir à temps est alors **plus faible** que celle calculée sur le seul chemin critique.

> [!retenir]
> - te = (a + 4m + b)/6 ; σ = (b − a)/6.
> - T = Σ te critiques ; σ(T) = √(Σ σ²) ; loi normale.
> - P(≤ D) = Φ((D − T)/σ(T)) ; délai sûr à 95 % : T + 1,645 σ(T).`,
 sujet:{titre:"PERT probabiliste : quelle chance de livrer à temps ?", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Le chemin critique d'un immeuble à Cocody comporte cinq tâches dont les durées sont incertaines (en jours) : estimation optimiste a, la plus probable m, pessimiste b.

| Tâche | a | m | b |
|---|---|---|---|
| Terrassement | 4 | 5 | 9 |
| Fondations | 8 | 10 | 15 |
| Gros œuvre | 30 | 36 | 48 |
| Toiture | 10 | 12 | 17 |
| Finitions | 20 | 24 | 34 |

Formules : te = (a + 4m + b) / 6 ; σ = (b − a) / 6 ; durée du projet T = Σ te ; σ(T) = √(Σ σ²) ; on admet que T suit une loi normale.
Valeurs de la loi normale centrée réduite : Φ(− 1,30) = 0,097 ; Φ(− 0,12) = 0,453 ; Φ(1,06) = 0,856 ; z(90 %) = 1,282 ; z(95 %) = 1,645.

### Partie A — Durées moyennes (8 points)
1. Calculer te, σ et σ² pour chaque tâche. (5 pts)
2. Calculer la durée moyenne du projet et son écart-type. (3 pts)

### Partie B — Probabilités (8 points)
3. Calculer la probabilité de finir en 95 jours au plus. (3 pts)
4. Calculer la probabilité de finir en 90 jours, puis en 85 jours. (3 pts)
5. Quel délai annoncer au client pour être sûr à 95 % ? (2 pts)

### Partie C — Analyse (4 points)
6. Quelle tâche contribue le plus à l'incertitude ? Que faire pour la réduire ? (2 pts)
7. Pourquoi faut-il rester prudent avec ce calcul (chemins presque critiques) ? (2 pts)`,
  corrige:`### Partie A — Durées (8 pts)
1. *(5 pts)*

| Tâche | te | σ | σ² |
|---|---|---|---|
| Terrassement | 5,5 | 0,83 | 0,69 |
| Fondations | 10,5 | 1,17 | 1,36 |
| Gros œuvre | 37,0 | 3,00 | 9,00 |
| Toiture | 12,5 | 1,17 | 1,36 |
| Finitions | 25,0 | 2,33 | 5,44 |

2. T = **90,5 jours** ; Σ σ² = 17,86 → **σ(T) = 4,23 jours**. *(3 pts)*

### Partie B — Probabilités (8 pts)
3. z = (95 − 90,5) / 4,23 = 1,06 → P = **85,6 %**. *(3 pts)*
4. 90 jours : z = − 0,12 → **45 %** ; 85 jours : z = − 1,30 → **9,7 %** seulement. *(3 pts)*
5. D = 90,5 + 1,645 × 4,23 = **97,5 jours** → annoncer **98 jours**. *(2 pts)*

### Partie C — Analyse (4 pts)
6. Le **gros œuvre** (σ² = 9, la moitié de la variance) : sécuriser ses approvisionnements, ses effectifs, ses méthodes (et les finitions ensuite). *(2 pts)*
7. Un chemin presque critique avec beaucoup d'incertitude peut devenir critique ; le calcul ne regarde qu'un seul chemin et suppose les tâches indépendantes (une saison des pluies retarde plusieurs tâches à la fois). *(2 pts)*

> [!attention] Erreurs à éviter
> - Additionner les écarts-types au lieu des variances.
> - Annoncer la durée moyenne comme délai : on n'a qu'une chance sur deux de la tenir.
> - Oublier les chemins non critiques mais très incertains.`},
 exercices:[
  {t:"Durée moyenne d'une tâche", d:1, e:`Le coulage des voiles d'un sous-sol est estimé à 6 jours au mieux, 8 jours le plus probablement et 16 jours au pire (saison des pluies).
Calculer te et σ.`, c:`te = (6 + 4 × 8 + 16)/6 = 54/6 = **9 jours** (et non 8 : le risque de pluie tire la moyenne vers le haut).
σ = (16 − 6)/6 = **1,67 jour**.`},
  {t:"Probabilité de finir à temps", d:2, e:`Le chemin critique d'un projet comprend trois tâches (jours) : (4 ; 5 ; 9), (10 ; 12 ; 20), (6 ; 8 ; 10) pour (a ; m ; b).
a) Calculer T et σ(T).
b) Quelle est la probabilité de finir en 28 jours ? En 30 jours ?`, c:`a) te : 5,5 ; 13 ; 8 → **T = 26,5 j**. Variances : 0,69 ; 2,78 ; 0,44 → Σ = 3,92 → **σ(T) = 1,98 j**.
b) 28 j : z = 1,5/1,98 = 0,76 → P ≈ **0,78** ; 30 j : z = 3,5/1,98 = 1,77 → P ≈ **0,96**.`},
  {t:"Délai à annoncer", d:2, e:`Pour le projet de l'exercice précédent, quel délai annoncer pour avoir 90 % de chances de le respecter ?`, c:`Φ(z) = 0,90 → z = 1,28.
D = 26,5 + 1,28 × 1,98 = **29,0 jours** : on annonce 29 jours (ou 30 jours avec une petite réserve).`},
  {t:"Risque de pénalités", d:2, e:`Toujours avec T = 26,5 j et σ(T) = 1,98 j, le maître d'ouvrage impose 25 jours. Quelle est la probabilité de payer des pénalités ?`, c:`z = (25 − 26,5)/1,98 = − 0,76 → P(durée ≤ 25) = 1 − 0,78 = 0,22.
Probabilité de dépasser : **78 %** : il faut négocier le délai ou renforcer les moyens sur la tâche la plus incertaine (celle de variance 2,78).`},
  {t:"Deux chemins presque critiques", d:3, e:`Un projet a deux chemins indépendants : chemin 1 (critique) : T₁ = 40 j, σ₁ = 2 j ; chemin 2 : T₂ = 38 j, σ₂ = 4 j.
Calculer la probabilité de finir en 42 jours : a) en ne regardant que le chemin critique ; b) en tenant compte des deux chemins.`, c:`a) z₁ = (42 − 40)/2 = 1 → P = **0,84**.
b) Chemin 2 : z₂ = (42 − 38)/4 = 1 → P = 0,84. Le projet est fini à temps si les deux chemins le sont : P = 0,84 × 0,84 = **0,71**.
Le chemin 2, plus court mais plus incertain, réduit nettement la probabilité : il faut le suivre aussi.`}
 ],
 quiz:[
  {q:"Durée moyenne PERT d'une tâche (a ; m ; b) :", o:["(a + 4m + b)/6","(a + m + b)/3","(b − a)/6","m"], r:0, e:"Pondération de la durée la plus probable."},
  {q:"Écart-type d'une tâche :", o:["(b − a)/6","(a + b)/2","b − a","√m"], r:0, e:"Étendue divisée par 6."},
  {q:"La variance de la durée du projet est :", o:["La somme des variances des tâches critiques","La plus grande variance","Le produit des variances","Nulle"], r:0, e:"Tâches indépendantes."},
  {q:"Si le délai D est égal à T, la probabilité de le tenir est :", o:["50 %","100 %","0 %","95 %"], r:0, e:"z = 0."},
  {q:"Pour être sûr à 95 %, on annonce :", o:["T + 1,645 σ(T)","T","T − σ(T)","2T"], r:0, e:"Fractile 95 % de la loi normale."}
 ]},

{id:"ro-13", niv:2, titre:"Réduire la durée d'un projet au moindre coût", duree:45, contenu:`## Durée et coût sont liés
On peut souvent **accélérer** une tâche : heures supplémentaires, deuxième équipe, matériel plus puissant, adjuvant accélérateur, coffrages en plus. Mais cela coûte. Pour chaque tâche on connaît :
- la **durée normale** Dn et son **coût normal** Cn ;
- la **durée accélérée** Da (la plus courte possible) et son **coût accéléré** Ca.
$$ coût marginal d'accélération = (Ca − Cn) / (Dn − Da)     (F par jour gagné)

## Les coûts du projet
- **Coûts directs** : main-d'œuvre, matériaux, matériel des tâches ; ils **augmentent** quand on accélère ;
- **Coûts indirects** : encadrement, installations de chantier, locations, frais financiers ; ils sont proportionnels à la durée et **diminuent** quand on raccourcit ;
- **Pénalités** de retard au-delà du délai contractuel (ou primes d'avance).
Le coût total passe par un **minimum** : c'est la **durée optimale**.

## La méthode pas à pas
1. Calculer le chemin critique avec les durées normales ;
2. Parmi les tâches **critiques** encore compressibles, choisir celle de **plus petit coût marginal** ;
3. La raccourcir d'un jour (ou de plusieurs, tant qu'aucun autre chemin ne devient plus long) ;
4. Si plusieurs chemins sont critiques, il faut raccourcir **chacun d'eux** : on cherche la combinaison la moins chère (une tâche commune aux chemins, ou une tâche sur chaque chemin) ;
5. Continuer tant que le coût d'accélération d'un jour est **inférieur** à l'économie (coûts indirects + pénalités évitées).

> [!astuce] Raccourcir une tâche non critique ne sert à rien
> Elle a déjà de la marge : on dépense de l'argent sans gagner un seul jour sur le projet.

> [!exemple] Projet à deux chemins (jours, coûts en milliers de F)
> Tâches : A (4 j) puis B (6 j) puis D (3 j) ; A puis C (4 j) puis D. Chemins : A-B-D = **13 j** (critique) ; A-C-D = 11 j.
> | Tâche | Jours gagnables | Coût marginal (par jour) |
> |---|---|---|
> | A | 1 | 100 |
> | B | 2 | 60 |
> | C | 1 | 40 |
> | D | 1 | 120 |
> Coûts directs normaux : 3 300 ; coûts indirects : 90 par jour → total à 13 jours : 3 300 + 13 × 90 = **4 470**.
> Étape 1 : la tâche critique la moins chère est B (60 < 90) → B = 5 j ; projet 12 j ; total 4 470 + 60 − 90 = **4 440**.
> Étape 2 : B encore (60 < 90) → B = 4 j ; les deux chemins font 11 j ; total **4 410**.
> Étape 3 : les deux chemins sont critiques. B est au minimum ; il faut raccourcir A ou D (communes) : 100 ou 120 > 90 → **on s'arrête**.
> Durée optimale : **11 jours** pour **4 410 000 F** (économie de 60 000 F par rapport à la durée normale).

> [!exemple] Et avec une pénalité ?
> Si le marché impose 10 jours avec une pénalité de 50 000 F par jour de retard, raccourcir A coûte 100 mais fait économiser 90 + 50 = 140 → on passe à **10 jours**.

> [!retenir]
> - Coût marginal = (Ca − Cn)/(Dn − Da).
> - On ne raccourcit que des tâches critiques, la moins chère d'abord.
> - Plusieurs chemins critiques : raccourcir tous les chemins en même temps.
> - On s'arrête quand un jour gagné coûte plus qu'il ne rapporte (indirects + pénalités).`,
 sujet:{titre:"Réduire la durée d'un projet au moindre coût", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un projet de construction comprend deux chemins (durées en jours ; coûts en milliers de F) :
- **A** (5 j) puis **B** (8 j) puis **D** (4 j) ;
- **A** puis **C** (6 j) puis **D**.

| Tâche | Jours gagnables | Coût marginal par jour gagné |
|---|---|---|
| A | 1 | 120 |
| B | 3 | 70 |
| C | 2 | 50 |
| D | 1 | 150 |

Coûts directs à durée normale : **5 000** ; coûts indirects (encadrement, installations, location du matériel) : **100 par jour**.

### Partie A — Situation normale (4 points)
1. Calculer la durée des deux chemins, le chemin critique et le coût total à durée normale. (4 pts)

### Partie B — Accélération (12 points)
2. Quelle tâche réduire en premier ? Pourquoi est-ce rentable ? Nouveau coût total à 16 jours. (3 pts)
3. Continuer jusqu'à ce que les deux chemins deviennent critiques. Coût total à 15 jours. (3 pts)
4. Pour descendre à 14 jours, comparer les possibilités (A seule, B + C ensemble, D seule) et calculer le coût total. (4 pts)
5. Quelle est la durée optimale du projet ? (2 pts)

### Partie C — Réflexion (4 points)
6. Pourquoi ne faut-il pas réduire une tâche non critique ? (2 pts)
7. Citer deux moyens concrets de réduire la durée d'une tâche de chantier. (2 pts)`,
  corrige:`### Partie A — Normal (4 pts)
1. A-B-D = **17 j** (critique) ; A-C-D = 15 j ; coût : 5 000 + 17 × 100 = **6 700**. *(4 pts)*

### Partie B — Accélération (12 pts)
2. Tâche critique la moins chère : **B** (70 < 100 de coûts indirects économisés) → B = 7 j, projet **16 j**, coût 6 700 + 70 − 100 = **6 670**. *(3 pts)*
3. B encore : B = 6 j → les deux chemins font **15 j** ; coût **6 640**. *(3 pts)*
4. Il faut réduire les deux chemins à la fois : A seule (120) ; B + C (70 + 50 = 120) ; D seule (150). Au mieux **120 > 100** : coût à 14 j = 6 640 + 120 − 100 = **6 660**. *(4 pts)*
5. **15 jours** (coût minimal 6 640) : au-delà, chaque jour gagné coûte plus qu'il ne fait économiser. *(2 pts)*

### Partie C — Réflexion (4 pts)
6. Elle a de la marge : la réduire ne raccourcit pas le projet et coûte pour rien. *(2 pts)*
7. Renforcer les **équipes**, travailler en **2 postes** ou le samedi, changer de **méthode** (préfabrication, béton prêt à l'emploi, coffrages-outils), louer un engin plus puissant. *(2 pts)*

> [!attention] Erreurs à éviter
> - Réduire sans comparer au coût indirect économisé.
> - Oublier qu'un second chemin devient critique en cours de réduction.
> - Accélérer au-delà de l'optimum « parce que le client est pressé » sans le chiffrer.`},
 exercices:[
  {t:"Coût marginal", d:1, e:`Le gros œuvre d'un bâtiment dure normalement 40 jours pour 18 M F. Avec une deuxième équipe, il peut durer 32 jours pour 19,6 M F.
Calculer le coût marginal d'accélération. Est-ce intéressant si les coûts indirects du chantier sont de 250 000 F par jour ?`, c:`Coût marginal = (19,6 − 18)/(40 − 32) = 1,6 M/8 = **200 000 F par jour**.
200 000 < 250 000 F : chaque jour gagné fait économiser **50 000 F** (si le gros œuvre est critique) → oui, intéressant.`},
  {t:"Choisir la tâche à accélérer", d:1, e:`Un chemin critique comprend les tâches P (coût marginal 80 000 F/j), Q (35 000 F/j) et R (55 000 F/j). Une tâche S non critique coûte 20 000 F/j à accélérer. Les coûts indirects sont de 60 000 F/j.
Quelle tâche accélérer en premier ? Jusqu'où ?`, c:`On n'accélère jamais S (non critique : aucun gain).
Ordre : **Q** (35 000) puis **R** (55 000), tant que le chemin reste seul critique ; P (80 000 > 60 000) n'est pas rentable.`},
  {t:"Optimiser un projet à deux chemins", d:2, e:`Tâches : A (5 j) et B (7 j) en parallèle au départ ; C (6 j) après A ; D (5 j) après B ; E (4 j) après C et D.
Possibilités d'accélération (jours ; coût par jour en milliers de F) : A (1 ; 50) ; B (2 ; 80) ; C (2 ; 40) ; D (1 ; 30) ; E (1 ; 150). Coûts indirects : 100 par jour.
Déterminer la durée normale, puis la durée optimale.`, c:`Chemins : A-C-E = 15 j ; B-D-E = **16 j** (critique).
Étape 1 : sur B-D-E, la moins chère est D (30 < 100) → D = 4 j : projet **15 j** ; gain 100 − 30 = 70.
Étape 2 : les deux chemins font 15 j. Options : E seule (150) ; ou une tâche sur chaque chemin : D épuisée, donc B (80) + C (40) = 120 ou B + A = 130. Toutes > 100 → **on s'arrête**.
Durée optimale : **15 jours**.`},
  {t:"Effet d'une pénalité", d:2, e:`Reprendre l'exercice précédent avec un délai contractuel de 14 jours et une pénalité de 60 000 F par jour de retard. Quelle est la nouvelle durée optimale ?`, c:`À 15 jours, un jour de plus gagné rapporte 100 (indirects) + 60 (pénalité) = 160.
Combinaison B + C = 120 < 160 → on passe à **14 jours** (B = 6 j ; C = 5 j).
À 14 jours, plus de pénalité : un jour gagné ne rapporte que 100 ; les options coûtent 120 (B + C) ou 150 (E) → arrêt à **14 jours**.`},
  {t:"Tableau des coûts totaux", d:3, e:`Avec les données de l'exercice 3 (coûts directs normaux : 5 000 ; indirects : 100 par jour) et la pénalité de l'exercice 4, calculer le coût total (milliers de F) pour 16, 15 et 14 jours.`, c:`16 j : 5 000 + 1 600 + 2 × 60 (pénalité) = **6 720**.
15 j : 5 030 + 1 500 + 60 = **6 590**.
14 j : 5 030 + 120 = 5 150 de directs ; 1 400 d'indirects ; pas de pénalité → **6 550** : c'est le minimum.`}
 ],
 quiz:[
  {q:"Le coût marginal d'accélération est :", o:["(Ca − Cn)/(Dn − Da)","Ca − Cn","Dn − Da","Cn/Dn"], r:0, e:"Coût par jour gagné."},
  {q:"Quand on raccourcit le projet, les coûts indirects :", o:["Diminuent","Augmentent","Ne changent pas","Doublent"], r:0, e:"Ils sont proportionnels à la durée."},
  {q:"Accélérer une tâche non critique :", o:["Ne fait gagner aucun jour","Raccourcit toujours le projet","Supprime les pénalités","Est obligatoire"], r:0, e:"Elle a déjà de la marge."},
  {q:"On arrête de raccourcir quand :", o:["Le coût d'un jour gagné dépasse l'économie réalisée","Toutes les tâches sont critiques","Le projet dure 0 jour","Les coûts directs baissent"], r:0, e:"Optimum économique."},
  {q:"Si deux chemins sont critiques, pour gagner un jour il faut :", o:["Raccourcir les deux chemins","Raccourcir un seul","Rallonger l'un","Ne rien faire"], r:0, e:"Sinon l'autre reste à la même durée."}
 ]},

{id:"ro-6", niv:2, titre:"Gestion des stocks : quantité économique et point de commande", duree:45, contenu:`## Pourquoi gérer les stocks ?
Un chantier consomme en continu ciment, aciers, agglos, carreaux… Commander **trop souvent** coûte cher en frais de commande et de transport ; commander **trop gros** immobilise de l'argent, occupe de la place et expose aux pertes (ciment qui prend en masse avec l'humidité, vols, casse). La gestion des stocks cherche le meilleur compromis.

## Les coûts en jeu
- **D** : consommation annuelle (ou sur la durée du chantier) ;
- **Cc** : **coût de passation** d'une commande (administratif, transport, réception) ;
- **Cp** : **coût de possession** d'une unité pendant un an = taux de possession × prix unitaire (frais financiers, stockage, assurance, pertes ; souvent 15 à 25 %/an).

Si l'on commande Q unités à chaque fois, avec une consommation régulière :
- nombre de commandes par an : N = D/Q ; coût de passation : (D/Q) × Cc ;
- stock moyen : Q/2 ; coût de possession : (Q/2) × Cp.

## La formule de Wilson
Le coût total est minimal quand les deux coûts sont égaux :
$$ Q* = √( 2 × D × Cc / Cp )
$$ N* = D / Q*      ;      période entre deux commandes T = (durée de la période)/N*      ;      coût de gestion minimal = √(2 D Cc Cp)

> [!exemple] Approvisionnement en ciment d'une entreprise
> D = 7 200 sacs/an (600 par mois) ; prix 5 000 F/sac ; Cc = 25 000 F par commande ; taux de possession 20 %/an → Cp = 1 000 F par sac et par an.
> Q* = √(2 × 7 200 × 25 000/1 000) = √360 000 = **600 sacs** (30 t).
> N* = 7 200/600 = **12 commandes par an**, une par mois.
> Passation : 12 × 25 000 = 300 000 F ; possession : 300 × 1 000 = 300 000 F ; total **600 000 F/an**.

> [!astuce] Wilson est « robuste »
> Le coût total varie peu autour de Q* : commander 500 ou 700 sacs au lieu de 600 n'augmente le coût que de 1 à 2 %. On peut donc arrondir aux camions complets ou aux palettes sans souci.

## Le stock de sécurité et le point de commande
La livraison n'est pas immédiate : il faut commander **avant** la rupture. Avec un **délai de livraison** L (jours) et une consommation journalière c :
$$ point de commande = c × L + stock de sécurité
Le **stock de sécurité** couvre les aléas (retard du fournisseur, consommation plus forte que prévu).
> [!exemple] Suite
> Consommation : 7 200/300 jours ouvrés = 24 sacs/jour ; délai de livraison : 5 jours ; sécurité : 2 jours de consommation.
> Point de commande = 24 × 5 + 24 × 2 = 120 + 48 = **168 sacs** : quand le stock descend à 168 sacs, on passe commande.

## Les limites pratiques
- **Durée de vie** : le ciment en sac se conserve environ 3 mois au sec ; il ne faut pas stocker plus que ce que l'on consommera dans ce délai ;
- **Capacité du magasin** : surface couverte, surélevée, ventilée ;
- **Remises sur quantité** : un prix plus bas pour une grosse commande peut justifier de s'écarter de Q* (on compare alors les coûts totaux, achat compris) ;
- **Chantier de durée limitée** : on raisonne sur la durée du chantier plutôt que sur l'année.

> [!retenir]
> - Q* = √(2 D Cc/Cp) ; N = D/Q ; Cp = taux × prix.
> - À l'optimum : coût de passation = coût de possession.
> - Point de commande = consommation pendant le délai + stock de sécurité.
> - Vérifier durée de vie, capacité de stockage et remises.`,
 sujet:{titre:"Gestion des stocks de ciment : quantité économique et point de commande", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une entreprise de construction de Yamoussoukro consomme régulièrement du ciment sur ses chantiers.

**Données**
- Consommation annuelle : **D = 9 600 sacs** ; **300 jours** de travail par an ;
- Prix d'un sac : **6 000 F** ; taux de possession : **20 %** par an ;
- Coût de passation d'une commande (transport, administration, réception) : **Cc = 40 000 F** ;
- Délai de livraison : **6 jours** ; stock de sécurité : **3 jours** de consommation ;
- Formule de Wilson : Q* = √(2 D Cc / Cp).

### Partie A — Les coûts (5 points)
1. Expliquer le coût de passation et le coût de possession. Comment varient-ils avec la quantité commandée ? (3 pts)
2. Calculer le coût de possession unitaire Cp (par sac et par an). (2 pts)

### Partie B — Quantité économique (8 points)
3. Calculer Q*, le nombre de commandes par an et la période entre deux commandes. (4 pts)
4. Calculer le coût annuel de passation, de possession et le coût total. (4 pts)

### Partie C — Point de commande (5 points)
5. Calculer la consommation journalière et le point de commande. (3 pts)
6. Le fournisseur propose une remise de 2 % pour des commandes de 1 600 sacs. Calculer le nouveau coût total (achats compris) et conclure. (2 pts)

### Partie D — Pratique (2 points)
7. Quelle contrainte de chantier peut empêcher d'appliquer Q* ? (2 pts)`,
  corrige:`### Partie A — Coûts (5 pts)
1. **Passation** : coût fixe à chaque commande ; il **diminue** quand on commande plus gros (moins de commandes). **Possession** : coût de garder le stock (capital immobilisé, magasin, assurance, pertes, éventement) ; il **augmente** avec la quantité stockée. Q* équilibre les deux. *(3 pts)*
2. Cp = 0,20 × 6 000 = **1 200 F/sac/an**. *(2 pts)*

### Partie B — Quantité économique (8 pts)
3. $$ Q* = √(2 × 9 600 × 40 000 / 1 200) = √640 000 = 800 sacs
   N = 9 600 / 800 = **12 commandes/an**, soit une par mois (≈ 25 jours ouvrés). *(4 pts)*
4. Passation : 12 × 40 000 = **480 000 F** ; possession : (800 / 2) × 1 200 = **480 000 F** ; total **960 000 F/an** (les deux coûts sont égaux à l'optimum). *(4 pts)*

### Partie C — Point de commande (5 pts)
5. 9 600 / 300 = **32 sacs/jour** ; point de commande : 32 × (6 + 3) = **288 sacs**. *(3 pts)*
6. Q = 1 600 : passation 6 × 40 000 = 240 000 ; possession 800 × 1 176 = 940 800 (Cp = 20 % × 5 880) ; achats 9 600 × 5 880 = 56 448 000 → total **57 628 800 F** contre 9 600 × 6 000 + 960 000 = **58 560 000 F** → la remise fait **gagner ≈ 931 000 F** : l'accepter si le magasin peut stocker 1 600 sacs à l'abri (et si le ciment ne s'évente pas en deux mois). *(2 pts)*

### Partie D — Pratique (2 pts)
7. La **capacité du magasin**, la **durée de conservation** du ciment (risque d'éventement au-delà d'un mois), la trésorerie, la taille des camions. *(2 pts)*

> [!attention] Erreurs à éviter
> - Prendre le prix du sac comme coût de possession (c'est un pourcentage).
> - Oublier le stock de sécurité dans le point de commande.
> - Comparer une remise sans intégrer le coût d'achat.`},
 exercices:[
  {t:"Quantité économique de ciment", d:1, e:`Une entreprise consomme 9 000 sacs de ciment par an. Une commande coûte 20 000 F ; un sac vaut 5 000 F et le taux de possession est de 20 %/an.
Calculer Q*, le nombre de commandes et le coût de gestion annuel.`, c:`Cp = 0,20 × 5 000 = **1 000 F/sac/an**.
Q* = √(2 × 9 000 × 20 000/1 000) = √360 000 = **600 sacs**.
N = 9 000/600 = **15 commandes/an** (environ toutes les 3 semaines et demie).
Coût : 15 × 20 000 + 300 × 1 000 = **600 000 F/an**.`},
  {t:"Point de commande", d:1, e:`Un chantier consomme 30 sacs de ciment par jour. Le fournisseur livre en 4 jours ; on veut 2 jours de stock de sécurité.
À quel niveau de stock faut-il commander ?`, c:`Point de commande = 30 × 4 + 30 × 2 = 120 + 60 = **180 sacs**.`},
  {t:"Commande des aciers", d:2, e:`Une entreprise utilise 120 t d'aciers HA par an, à 550 000 F/t. Une commande coûte 150 000 F (transport, déchargement). Taux de possession : 15 %/an.
a) Calculer Q*.
b) On décide de commander par lots de 20 t : combien de commandes et quel coût de gestion ? Comparer au coût minimal.`, c:`a) Cp = 0,15 × 550 000 = **82 500 F/t/an** ; Q* = √(2 × 120 × 150 000/82 500) = √436 = **20,9 t**.
b) 120/20 = **6 commandes** ; coût = 6 × 150 000 + 10 × 82 500 = 900 000 + 825 000 = **1 725 000 F**.
Coût minimal : √(2 × 120 × 150 000 × 82 500) = **1 723 400 F** : l'écart (1 600 F) est négligeable, l'arrondi à 20 t est justifié.`},
  {t:"Profiter d'une remise ?", d:2, e:`Reprendre l'exemple du cours (D = 7 200 sacs ; Cc = 25 000 F ; taux 20 %). Le fournisseur propose 4 800 F/sac au lieu de 5 000 F pour des commandes d'au moins 1 000 sacs.
Comparer le coût total annuel (achat + gestion) pour Q = 600 sacs et Q = 1 000 sacs.`, c:`Q = 600 à 5 000 F : achat 36 000 000 + gestion 600 000 = **36 600 000 F**.
Q = 1 000 à 4 800 F : Cp = 960 F ; achat 34 560 000 ; passation 7,2 × 25 000 = 180 000 ; possession 500 × 960 = 480 000 → **35 220 000 F**.
La remise fait gagner **1 380 000 F** : on l'accepte, si le magasin peut accueillir 1 000 sacs (50 t) et si cette quantité est consommée en moins de 3 mois (ici 1,7 mois ✓).`},
  {t:"Approvisionner un chantier de durée limitée", d:3, e:`Un chantier de 8 mois consommera 4 000 sacs de ciment de façon régulière. Une livraison coûte 40 000 F ; garder un sac un mois coûte 100 F (abri, pertes, immobilisation). Le magasin contient au plus 800 sacs.
a) Calculer la quantité économique sur la durée du chantier.
b) Est-elle compatible avec le magasin et la conservation du ciment ? Proposer une organisation.`, c:`a) Sur 8 mois : Cp = 8 × 100 = 800 F par sac pour la période. Q* = √(2 × 4 000 × 40 000/800) = √400 000 = **632 sacs**.
b) 632 < 800 sacs ✓ ; consommation : 500 sacs/mois → 632 sacs durent 1,3 mois < 3 mois ✓.
Organisation : **6 livraisons de 667 sacs** (4 000/6), une toutes les 5 à 6 semaines ; coût ≈ 6 × 40 000 + 333 × 800 = 240 000 + 266 700 = **506 700 F**.`}
 ],
 quiz:[
  {q:"Formule de Wilson :", o:["Q* = √(2 D Cc/Cp)","Q* = D/Cc","Q* = 2 D Cc Cp","Q* = √(D/2)"], r:0, e:"Quantité économique de commande."},
  {q:"Si l'on commande plus souvent, le coût de possession :", o:["Diminue","Augmente","Ne change pas","Devient infini"], r:0, e:"Le stock moyen Q/2 diminue."},
  {q:"À l'optimum de Wilson :", o:["Coût de passation = coût de possession","Coût de passation nul","Stock nul","Une seule commande par an"], r:0, e:"Propriété du minimum."},
  {q:"Point de commande :", o:["Consommation pendant le délai de livraison + stock de sécurité","Q*/2","Stock maximal","Nombre de commandes"], r:0, e:"Commander avant la rupture."},
  {q:"Le ciment en sac se conserve au sec environ :", o:["3 mois","3 ans","1 semaine","Indéfiniment"], r:0, e:"Il se charge d'humidité et perd sa qualité."}
 ]},

{id:"ro-2", niv:2, titre:"Programmation linéaire : résolution graphique", duree:55, contenu:`## Le programme linéaire
Un **programme linéaire** est un problème d'optimisation dont l'objectif et les contraintes sont des expressions **du premier degré** (pas de carrés, pas de produits de variables). Avec **deux variables**, on peut le résoudre **graphiquement**.

Reprenons l'atelier de préfabrication du chapitre « Modéliser » :
$$ maximiser Z = 4 000 x + 3 000 y
sous les contraintes : 20 x + 10 y ≤ 400 (ciment) ; x + 1,5 y ≤ 30 (main-d'œuvre) ; x ≤ 18 (moule) ; x ≥ 0 ; y ≥ 0.

## 1. Tracer le domaine des solutions possibles
Chaque contrainte « ≤ » est un **demi-plan** limité par une droite :
- Ciment : 20 x + 10 y = 400 passe par (20 ; 0) et (0 ; 40) ;
- Main-d'œuvre : x + 1,5 y = 30 passe par (30 ; 0) et (0 ; 20) ;
- Moule : droite verticale x = 18.
On garde le côté qui contient l'origine (0 ; 0) puisqu'elle vérifie les trois inégalités. L'intersection des demi-plans est le **domaine réalisable** : un polygone convexe.

!fig:pl|Domaine réalisable et optimum sur un sommet

## 2. Trouver les sommets du domaine
| Sommet | Obtenu par | x | y |
|---|---|---|---|
| O | origine | 0 | 0 |
| S1 | moule et axe des x | 18 | 0 |
| S2 | moule et ciment : 360 + 10 y = 400 | 18 | 4 |
| S3 | ciment et main-d'œuvre | 15 | 10 |
| S4 | main-d'œuvre et axe des y | 0 | 20 |
Pour S3 : x = 30 − 1,5 y → 20 (30 − 1,5 y) + 10 y = 400 → 600 − 20 y = 400 → y = 10 et x = 15.

## 3. Chercher l'optimum
**Théorème** : si un programme linéaire a une solution optimale, elle se trouve en un **sommet** du domaine.
| Sommet | Z = 4 000 x + 3 000 y |
|---|---|
| O (0 ; 0) | 0 |
| S1 (18 ; 0) | 72 000 |
| S2 (18 ; 4) | 84 000 |
| S3 (15 ; 10) | **90 000** |
| S4 (0 ; 20) | 60 000 |
Optimum : **15 poutrelles et 10 linteaux par jour, bénéfice 90 000 F**.

On peut aussi tracer les **droites d'iso-bénéfice** 4 000 x + 3 000 y = constante (toutes parallèles, de pente − 4/3) et les déplacer vers le haut jusqu'au dernier point du domaine touché.

## 4. Interpréter
- En S3, le **ciment** et la **main-d'œuvre** sont entièrement utilisés (contraintes **saturées**) ; le moule n'est pas plein (15 < 18 : 3 poutrelles de capacité libre).
- Acheter plus de ciment ou embaucher augmenterait le bénéfice ; agrandir le moule, non.
- **Sensibilité** : l'optimum reste en S3 tant que la pente de l'objectif reste comprise entre celles des deux contraintes saturées (− 2 et − 2/3), c'est-à-dire tant que le bénéfice d'un linteau reste entre **2 000 et 6 000 F** (avec 4 000 F par poutrelle).

## Minimisation avec des contraintes « ≥ »
> [!exemple] Achat de granulats au moindre coût
> Il faut au moins 120 m³ de gravier et 80 m³ de sable. Un camion du fournisseur P1 apporte 6 m³ de gravier et 2 m³ de sable (90 000 F) ; un camion de P2 apporte 3 m³ de gravier et 4 m³ de sable (80 000 F).
> Minimiser C = 90 x + 80 y (milliers de F) avec 6 x + 3 y ≥ 120 et 2 x + 4 y ≥ 80.
> Le domaine est **ouvert** vers le haut ; sommets : (0 ; 40) → 3 200 ; (13,3 ; 13,3) → 2 267 ; (40 ; 0) → 3 600.
> L'optimum théorique est fractionnaire ; en nombres entiers, on teste les points voisins qui respectent les contraintes : (13 ; 14) → 6 × 13 + 3 × 14 = 120 ✓ et 2 × 13 + 4 × 14 = 82 ✓ → **2 290 000 F** (13 camions de P1, 14 de P2).

> [!retenir]
> - Chaque contrainte = demi-plan ; domaine réalisable = polygone convexe.
> - L'optimum est sur un sommet : on calcule Z en chaque sommet.
> - Contraintes saturées = ressources entièrement utilisées.
> - Variables entières : vérifier les points entiers voisins de l'optimum.`,
 sujet:{titre:"Programmation linéaire : résolution graphique d'un plan de préfabrication", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une unité de préfabrication à Abidjan produit des **poutrelles** (x par semaine) et des **prédalles** (y par semaine).

**Données**
- Bénéfice : **40 000 F** par poutrelle (lot) ; **30 000 F** par prédalle ;
- Ciment : 3 unités par poutrelle, 2 par prédalle, **120 unités** disponibles ;
- Main-d'œuvre : 1 h par poutrelle, 2 h par prédalle, **80 h** disponibles ;
- Le banc de précontrainte limite les poutrelles à **30** par semaine.

### Partie A — Modèle (4 points)
1. Écrire la fonction objectif et les contraintes. (4 pts)

### Partie B — Résolution graphique (10 points)
2. Tracer les droites des contraintes et hachurer le domaine réalisable (1 cm = 5 unités). (4 pts)
3. Déterminer les coordonnées des sommets du domaine. (3 pts)
4. Calculer Z en chaque sommet et donner la solution optimale. (3 pts)

### Partie C — Analyse (6 points)
5. Quelles contraintes sont saturées à l'optimum ? Que reste-t-il de la ressource non saturée ? (2 pts)
6. Le bénéfice des prédalles passe à 60 000 F. Le plan optimal change-t-il ? (2 pts)
7. Tracer une droite d'isobénéfice et expliquer la méthode graphique. (2 pts)`,
  corrige:`### Partie A — Modèle (4 pts)
1. Max **Z = 40 x + 30 y** (milliers de F) ; **3x + 2y ≤ 120** ; **x + 2y ≤ 80** ; **x ≤ 30** ; x, y ≥ 0. *(4 pts)*

### Partie B — Graphique (10 pts)
2. Droites 3x + 2y = 120 (passe par (40 ; 0) et (0 ; 60)), x + 2y = 80 ((80 ; 0), (0 ; 40)), x = 30 ; domaine sous les trois droites, dans le quart positif. *(4 pts)*
3. Sommets : **(0 ; 0)**, **(0 ; 40)**, intersection ciment / main-d'œuvre : 3x + 2y = 120 et x + 2y = 80 → 2x = 40 → **(20 ; 30)** ; intersection ciment / x = 30 : **(30 ; 15)** ; **(30 ; 0)**. *(3 pts)*
4. *(3 pts)*

| Sommet | Z (milliers de F) |
|---|---|
| (0 ; 0) | 0 |
| (0 ; 40) | 1 200 |
| (20 ; 30) | **1 700** |
| (30 ; 15) | 1 650 |
| (30 ; 0) | 1 200 |

Optimum : **20 poutrelles et 30 prédalles**, **1 700 000 F/semaine**.

### Partie C — Analyse (6 pts)
5. **Ciment** (60 + 60 = 120) et **main-d'œuvre** (20 + 60 = 80) saturés ; le banc a **10 poutrelles** de capacité libre. *(2 pts)*
6. Z = 40 x + 60 y : (0 ; 40) → 2 400 ; (20 ; 30) → 2 600 ; (30 ; 15) → 2 100 → l'optimum reste **(20 ; 30)** avec 2,6 M F. *(2 pts)*
7. Les droites 40 x + 30 y = k sont parallèles ; on déplace cette droite dans le sens où k augmente jusqu'au dernier point du domaine touché : c'est l'optimum (un sommet). *(2 pts)*

> [!attention] Erreurs à éviter
> - Hachurer le mauvais côté d'une droite.
> - Chercher l'optimum à l'intérieur du domaine : il est toujours sur un sommet (ou une arête).
> - Mal calculer l'intersection de deux droites.`},
 exercices:[
  {t:"Résoudre graphiquement", d:2, e:`Maximiser Z = 3 x + 2 y avec x + y ≤ 8 ; x + 3 y ≤ 18 ; x ≤ 6 ; x, y ≥ 0.
Déterminer les sommets du domaine et l'optimum.`, c:`Sommets : O (0 ; 0) ; (6 ; 0) ; (6 ; 2) [x = 6 et x + y = 8] ; (3 ; 5) [x + y = 8 et x + 3y = 18 → 2y = 10] ; (0 ; 6).
Z : 0 ; 18 ; **22** ; 19 ; 12.
Optimum : **x = 6, y = 2, Z = 22**.`},
  {t:"Production de parpaings", d:2, e:`Reprendre le modèle des parpaings (ro-1) : maximiser Z = 50 x + 70 y avec 1,4 x + 1,8 y ≤ 700 et x + y ≤ 450 ; x, y ≥ 0.
Trouver l'optimum.`, c:`Sommets : (0 ; 0) ; (450 ; 0) ; intersection : 1,4 (450 − y) + 1,8 y = 700 → 0,4 y = 70 → y = 175, x = 275 ; (0 ; 388,9) (ciment seul).
Z : 0 ; 22 500 ; 13 750 + 12 250 = 26 000 ; 70 × 388,9 = 27 222.
Optimum continu : (0 ; 388,9). En nombres entiers : 388 parpaings de 20 consomment 698,4 kg ; les 1,6 kg restants permettent encore 1 parpaing de 15 → **x = 1, y = 388, Z = 27 210 F**. La presse n'est pas saturée (389 < 450) : c'est le ciment qui limite, et il vaut mieux l'utiliser pour les parpaings de 20 (70/1,8 = 38,9 F par kg de ciment contre 50/1,4 = 35,7 F).`},
  {t:"Contraintes saturées", d:1, e:`Dans l'exemple du cours (optimum x = 15, y = 10), calculer la consommation de chaque ressource et dire lesquelles sont saturées.`, c:`Ciment : 20 × 15 + 10 × 10 = **400 kg** = 400 disponibles → saturée.
Main-d'œuvre : 15 + 1,5 × 10 = **30 h** = 30 → saturée.
Moule : 15 < 18 → **non saturée** (3 poutrelles de capacité libre).`},
  {t:"Sensibilité au prix de vente", d:2, e:`Dans l'exemple du cours, le bénéfice d'un linteau passe de 3 000 F à 7 000 F. Le plan de production change-t-il ?`, c:`7 000 F > 6 000 F (limite de sensibilité) : l'optimum quitte S3.
Calcul aux sommets avec Z = 4 000 x + 7 000 y : S3 (15 ; 10) → 130 000 ; S4 (0 ; 20) → **140 000** ; S2 → 100 000.
Nouveau plan : **20 linteaux, aucune poutrelle**, Z = 140 000 F.`},
  {t:"Minimiser un coût de location", d:3, e:`Pour terrasser, il faut déplacer au moins 1 200 m³ de déblais et réaliser au moins 300 m de tranchées par semaine. Une pelle de type 1 fait 300 m³ et 50 m de tranchée par semaine (450 000 F) ; une pelle de type 2 fait 150 m³ et 100 m (350 000 F).
Combien louer de pelles de chaque type au moindre coût (nombres entiers) ?`, c:`Minimiser C = 450 x + 350 y (milliers) avec 300 x + 150 y ≥ 1 200 (soit 2x + y ≥ 8) et 50 x + 100 y ≥ 300 (soit x + 2y ≥ 6).
Sommets : (0 ; 8) → 2 800 ; intersection 2x + y = 8 et x + 2y = 6 → x = 10/3, y = 4/3 → 2 000 ; (6 ; 0) → 2 700.
Points entiers voisins : (4 ; 1) : 2×4 + 1 = 9 ≥ 8 ✓ ; 4 + 2 = 6 ≥ 6 ✓ → 1 800 + 350 = **2 150** ; (3 ; 2) : 8 ✓ ; 7 ✓ → 1 350 + 700 = **2 050** ; (2 ; 4) : 8 ✓ ; 10 ✓ → 900 + 1 400 = 2 300.
Optimum : **3 pelles de type 1 et 2 de type 2**, soit **2 050 000 F par semaine**.`}
 ],
 quiz:[
  {q:"Dans un programme linéaire à deux variables, l'optimum se trouve :", o:["En un sommet du domaine","Au centre du domaine","Toujours à l'origine","Hors du domaine"], r:0, e:"Théorème fondamental."},
  {q:"Une contrainte saturée à l'optimum signifie :", o:["Que la ressource est entièrement utilisée","Qu'elle est inutile","Qu'elle est violée","Qu'elle vaut zéro"], r:0, e:"Il n'en reste plus."},
  {q:"Les droites d'iso-bénéfice sont :", o:["Toutes parallèles","Toutes perpendiculaires","Des cercles","Des contraintes"], r:0, e:"Même pente, constante différente."},
  {q:"Pour un programme de minimisation avec des « ≥ », le domaine est souvent :", o:["Ouvert vers le haut","Réduit à un point","Vide","Un cercle"], r:0, e:"On cherche le sommet le plus bas."},
  {q:"Le point (2 ; 3) vérifie-t-il 4x + y ≤ 10 ?", o:["Non : 11 > 10","Oui : 11 ≤ 10","Oui : 5 ≤ 10","On ne peut pas savoir"], r:0, e:"4 × 2 + 3 = 11."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"ro-14", niv:3, titre:"La méthode du simplexe", duree:60, contenu:`## Pourquoi le simplexe ?
La méthode graphique ne fonctionne qu'avec deux variables. Les problèmes réels en comptent des dizaines ou des milliers (mélanges, plans de production, transports). La **méthode du simplexe** (Dantzig, 1947) parcourt les **sommets** du domaine de façon intelligente : à chaque étape, elle passe à un sommet voisin **meilleur**, jusqu'à l'optimum. C'est elle qu'utilisent les solveurs des tableurs.

## 1. La forme standard
On transforme chaque contrainte « ≤ » en **égalité** en ajoutant une **variable d'écart** positive, qui représente la ressource **non utilisée**.

Reprenons l'atelier de préfabrication, avec des unités simplifiées (ciment en dizaines de kg, travail en demi-heures, bénéfice en milliers de F) :
$$ maximiser Z = 4 x + 3 y
$$ 2x + y + e₁ = 40     (ciment)
$$ 2x + 3y + e₂ = 60     (main-d'œuvre)
$$ x + e₃ = 18     (moule)
avec x, y, e₁, e₂, e₃ ≥ 0.

## 2. La solution de départ
On part de l'origine : x = y = 0, donc e₁ = 40, e₂ = 60, e₃ = 18 et Z = 0. Les variables non nulles (e₁, e₂, e₃) forment la **base**.

> [!exemple] Tableau initial
> | Base | x | y | e₁ | e₂ | e₃ | Valeur |
> |---|---|---|---|---|---|---|
> | e₁ | 2 | 1 | 1 | 0 | 0 | 40 |
> | e₂ | 2 | 3 | 0 | 1 | 0 | 60 |
> | e₃ | **1** | 0 | 0 | 0 | 1 | 18 |
> | Z | 4 | 3 | 0 | 0 | 0 | Z = 0 |

## 3. Les règles de pivotage
1. **Variable entrante** : celle qui a le plus grand coefficient **positif** dans la ligne Z (ici x : 4) ;
2. **Variable sortante** : on divise la colonne « Valeur » par les coefficients **positifs** de la colonne entrante et on prend le **plus petit rapport** (40/2 = 20 ; 60/2 = 30 ; 18/1 = **18** → e₃ sort) ;
3. **Pivotage** : on divise la ligne du pivot par le pivot, puis on fait apparaître des zéros dans le reste de la colonne (combinaisons de lignes, comme dans le pivot de Gauss) ;
4. On recommence tant qu'il reste un coefficient positif dans la ligne Z.

> [!exemple] Itération 1 : x entre, e₃ sort
> | Base | x | y | e₁ | e₂ | e₃ | Valeur |
> |---|---|---|---|---|---|---|
> | e₁ | 0 | **1** | 1 | 0 | − 2 | 4 |
> | e₂ | 0 | 3 | 0 | 1 | − 2 | 24 |
> | x | 1 | 0 | 0 | 0 | 1 | 18 |
> | Z | 0 | 3 | 0 | 0 | − 4 | Z = 72 |
> Sommet (18 ; 0). y entre (coefficient 3) ; rapports : 4/1 = **4** ; 24/3 = 8 → e₁ sort.

> [!exemple] Itération 2 : y entre, e₁ sort
> | Base | x | y | e₁ | e₂ | e₃ | Valeur |
> |---|---|---|---|---|---|---|
> | y | 0 | 1 | 1 | 0 | − 2 | 4 |
> | e₂ | 0 | 0 | − 3 | 1 | **4** | 12 |
> | x | 1 | 0 | 0 | 0 | 1 | 18 |
> | Z | 0 | 0 | − 3 | 0 | 2 | Z = 84 |
> Sommet (18 ; 4). e₃ entre (coefficient 2) ; rapports sur les coefficients positifs : 12/4 = **3** ; 18/1 = 18 → e₂ sort.

> [!exemple] Itération 3 : e₃ entre, e₂ sort
> | Base | x | y | e₁ | e₂ | e₃ | Valeur |
> |---|---|---|---|---|---|---|
> | y | 0 | 1 | − 0,5 | 0,5 | 0 | 10 |
> | e₃ | 0 | 0 | − 0,75 | 0,25 | 1 | 3 |
> | x | 1 | 0 | 0,75 | − 0,25 | 0 | 15 |
> | Z | 0 | 0 | − 1,5 | − 0,5 | 0 | Z = 90 |
> Plus aucun coefficient positif dans la ligne Z : **optimum** x = 15, y = 10, Z = 90 000 F, avec e₃ = 3 (moule non saturé). On retrouve le résultat graphique.

## 4. Lire les prix fictifs (valeurs duales)
Les coefficients de la ligne Z sous les variables d'écart (au signe près) sont les **prix fictifs** des ressources : ce que rapporterait **une unité de plus** de chaque ressource.
- Ciment : 1,5 millier de F par dizaine de kg, soit **150 F par kg** de ciment supplémentaire ;
- Main-d'œuvre : 0,5 millier par demi-heure, soit **1 000 F par heure** ;
- Moule : 0 (il n'est pas saturé).
Si une heure supplémentaire coûte moins de 1 000 F, il est rentable de l'acheter.

> [!astuce] Cas particuliers
> - Si aucun coefficient de la colonne entrante n'est positif : le problème est **non borné** (erreur de modélisation probable) ;
> - Contraintes « ≥ » ou « = » : on ajoute des variables artificielles (méthode des deux phases ou du « grand M »), ce que font les logiciels automatiquement.

> [!retenir]
> - Forme standard : une variable d'écart par contrainte « ≤ ».
> - Entrante : plus grand coefficient positif de la ligne Z ; sortante : plus petit rapport positif.
> - Optimum quand la ligne Z n'a plus de coefficient positif.
> - Prix fictifs : valeur d'une unité supplémentaire de chaque ressource.`,
 sujet:{titre:"Méthode du simplexe : optimiser la production d'une centrale de préfabrication", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une centrale fabrique deux produits A (x unités) et B (y unités). On veut maximiser **Z = 5x + 4y** (centaines de milliers de F) sous les contraintes :
- **6x + 4y ≤ 24** (heures de malaxeur) ;
- **x + 2y ≤ 6** (heures de moulage) ;
- x, y ≥ 0.

### Partie A — Forme standard (4 points)
1. Introduire les variables d'écart e1 et e2 et écrire le programme sous forme standard. (2 pts)
2. Écrire le tableau initial du simplexe. Quelle est la solution de base initiale ? (2 pts)

### Partie B — Itérations (10 points)
3. Choisir la variable entrante et la variable sortante (test des rapports). (2 pts)
4. Effectuer le premier pivotage et donner le nouveau tableau, la solution et Z. (4 pts)
5. Effectuer le second pivotage. Le tableau est-il optimal ? Donner la solution. (4 pts)

### Partie C — Vérification et interprétation (6 points)
6. Vérifier graphiquement le résultat en calculant Z aux sommets du domaine. (3 pts)
7. Interpréter les coefficients des variables d'écart dans la ligne Z finale (valeurs marginales). (3 pts)`,
  corrige:`### Partie A — Forme standard (4 pts)
1. 6x + 4y + e1 = 24 ; x + 2y + e2 = 6 ; x, y, e1, e2 ≥ 0 ; max Z = 5x + 4y. *(2 pts)*
2. *(2 pts)*

| Base | x | y | e1 | e2 | Valeur |
|---|---|---|---|---|---|
| e1 | 6 | 4 | 1 | 0 | 24 |
| e2 | 1 | 2 | 0 | 1 | 6 |
| Z | 5 | 4 | 0 | 0 | 0 |

Solution de base : x = y = 0, e1 = 24, e2 = 6, Z = 0.

### Partie B — Itérations (10 pts)
3. Entrante : **x** (plus grand coefficient, 5) ; rapports 24/6 = **4** et 6/1 = 6 → **e1 sort** (pivot 6). *(2 pts)*
4. *(4 pts)*

| Base | x | y | e1 | e2 | Valeur |
|---|---|---|---|---|---|
| x | 1 | 2/3 | 1/6 | 0 | 4 |
| e2 | 0 | 4/3 | − 1/6 | 1 | 2 |
| Z | 0 | 2/3 | − 5/6 | 0 | Z = 20 |

Solution (4 ; 0), Z = 20.
5. y entre (2/3 > 0) ; rapports 4 / (2/3) = 6 et 2 / (4/3) = **1,5** → e2 sort. *(4 pts)*

| Base | x | y | e1 | e2 | Valeur |
|---|---|---|---|---|---|
| x | 1 | 0 | 1/4 | − 1/2 | 3 |
| y | 0 | 1 | − 1/8 | 3/4 | 1,5 |
| Z | 0 | 0 | − 3/4 | − 1/2 | Z = 21 |

Tous les coefficients de la ligne Z sont ≤ 0 : **optimal** → **x = 3, y = 1,5, Z = 21**.

### Partie C — Vérification (6 pts)
6. Sommets : (0 ; 0) → 0 ; (4 ; 0) → 20 ; (0 ; 3) → 12 ; (3 ; 1,5) → **21** ✔. *(3 pts)*
7. Une heure de malaxeur supplémentaire ferait gagner **0,75** ; une heure de moulage, **0,5** (centaines de milliers de F) : ce sont les **valeurs marginales** (prix maximaux à payer pour une heure de plus). *(3 pts)*

> [!attention] Erreurs à éviter
> - Choisir la variable sortante sans le test des rapports (on peut sortir du domaine).
> - Oublier de diviser la ligne du pivot par le pivot.
> - S'arrêter alors qu'il reste un coefficient positif dans la ligne Z.`},
 exercices:[
  {t:"Mettre sous forme standard", d:1, e:`Écrire sous forme standard : maximiser Z = 3x + 2y avec x + y ≤ 8 ; x + 3y ≤ 18 ; x ≤ 6 ; x, y ≥ 0. Donner la solution de base de départ.`, c:`x + y + e₁ = 8 ; x + 3y + e₂ = 18 ; x + e₃ = 6 ; toutes les variables ≥ 0.
Base de départ : x = y = 0 ; **e₁ = 8, e₂ = 18, e₃ = 6** ; Z = 0.`},
  {t:"Simplexe à deux variables", d:2, e:`Résoudre le programme de l'exercice précédent par le simplexe.`, c:`Itération 1 : x entre (3) ; rapports 8, 18, **6** → e₃ sort. x = 6 − e₃ ; il reste y + e₁ − e₃ = 2 ; 3y + e₂ − e₃ = 12 ; Z = 18 + 2y − 3e₃.
Itération 2 : y entre (2) ; rapports **2/1 = 2** ; 12/3 = 4 → e₁ sort. y = 2 − e₁ + e₃ ; e₂ = 6 + 3e₁ − 2e₃ ; Z = 22 − 2e₁ − e₃.
Plus de coefficient positif : **x = 6 ; y = 2 ; Z = 22** (e₂ = 6 : la 2ᵉ contrainte n'est pas saturée).`},
  {t:"Prix fictifs", d:2, e:`À l'optimum de l'exercice précédent, Z = 22 − 2 e₁ − e₃. Interpréter les coefficients 2 et 1. Que rapporterait une unité de plus pour la 2ᵉ contrainte ?`, c:`Une unité de plus pour la 1ʳᵉ contrainte (x + y ≤ 9) augmenterait Z de **2** ; une unité de plus pour la 3ᵉ (x ≤ 7) l'augmenterait de **1**.
La 2ᵉ contrainte n'est pas saturée (e₂ = 6 en base) : son prix fictif est **0**, inutile d'augmenter cette ressource.`},
  {t:"Reconnaître l'optimum", d:1, e:`Dans un tableau du simplexe (maximisation), la ligne Z contient les coefficients : x 0 ; y 0 ; e₁ − 2 ; e₂ 0,5 ; e₃ 0. L'optimum est-il atteint ? Que faire ?`, c:`**Non** : le coefficient de e₂ est positif (0,5). Faire entrer **e₂** dans la base (on libère un peu de la ressource 2 pour augmenter Z), en choisissant la sortante par le plus petit rapport positif.`},
  {t:"Simplexe à trois produits", d:3, e:`Une usine de préfabrication fabrique trois produits (x₁, x₂, x₃ en centaines d'unités) avec trois ressources limitées.
Maximiser Z = 5x₁ + 4x₂ + 3x₃ (centaines de milliers de F) avec 2x₁ + 3x₂ + x₃ ≤ 5 ; 4x₁ + x₂ + 2x₃ ≤ 11 ; 3x₁ + 4x₂ + 2x₃ ≤ 8.`, c:`Itération 1 : x₁ entre (5) ; rapports 5/2 = **2,5** ; 11/4 = 2,75 ; 8/3 = 2,67 → e₁ sort.
x₁ = 2,5 − 1,5x₂ − 0,5x₃ − 0,5e₁ ; Z = 12,5 − 3,5x₂ + 0,5x₃ − 2,5e₁ ; e₂ = 1 + 5x₂ + 2e₁ ; e₃ = 0,5 + 0,5x₂ − 0,5x₃ + 1,5e₁.
Itération 2 : x₃ entre (0,5) ; rapports : ligne x₁ : 2,5/0,5 = 5 ; ligne e₃ : 0,5/0,5 = **1** → e₃ sort.
x₃ = 1 + x₂ + 3e₁ − 2e₃ ; Z = 13 − 3x₂ − e₁ − e₃ : plus de coefficient positif.
Optimum : **x₁ = 2 ; x₂ = 0 ; x₃ = 1 ; Z = 13** (1 300 000 F), avec e₂ = 1 (2ᵉ ressource non saturée).`}
 ],
 quiz:[
  {q:"Une variable d'écart représente :", o:["La part de ressource non utilisée","Le bénéfice","Une erreur","La variable entrante"], r:0, e:"Elle transforme ≤ en =."},
  {q:"La variable entrante est celle qui a :", o:["Le plus grand coefficient positif dans la ligne Z","Le plus petit rapport","La plus grande valeur","Un coefficient nul"], r:0, e:"Elle augmente Z le plus vite."},
  {q:"La variable sortante est choisie par :", o:["Le plus petit rapport positif valeur/coefficient","Le plus grand coefficient","Le hasard","La ligne Z"], r:0, e:"Pour rester dans le domaine réalisable."},
  {q:"L'optimum est atteint quand :", o:["La ligne Z n'a plus de coefficient positif","Toutes les variables sont nulles","Z = 0","Il n'y a plus de variable d'écart"], r:0, e:"Aucun voisin n'est meilleur."},
  {q:"Le prix fictif d'une ressource non saturée est :", o:["Nul","Infini","Égal à son prix d'achat","Négatif"], r:0, e:"Une unité de plus ne sert à rien."}
 ]},

{id:"ro-5", niv:3, titre:"Le problème de transport", duree:60, contenu:`## Le problème
Des **origines** (carrières, centrales, dépôts) disposent de quantités **offertes** ; des **destinations** (chantiers) ont des **demandes**. On connaît le **coût unitaire** de transport de chaque origine vers chaque destination. Comment répartir les livraisons pour **minimiser le coût total** ?

C'est un programme linéaire particulier, avec m × n variables xᵢⱼ (quantité de i vers j), qu'on résout par des méthodes spécifiques très simples.

## Équilibrer le problème
On travaille avec **offre totale = demande totale**. Sinon, on ajoute :
- une **destination fictive** (stock restant en carrière) si l'offre dépasse la demande ;
- une **origine fictive** (demande non satisfaite) dans le cas contraire ;
avec un coût nul (ou une pénalité).

> [!exemple] Trois carrières, trois chantiers (coûts en F/m³)
> | | C1 | C2 | C3 | Offre (m³) |
> |---|---|---|---|---|
> | K1 | 4 000 | 3 000 | 5 000 | 400 |
> | K2 | 2 500 | 3 500 | 3 000 | 300 |
> | K3 | 4 500 | 2 000 | 4 000 | 300 |
> | Demande | 300 | 450 | 250 | 1 000 |

## 1. Une solution de départ
**Méthode du coin nord-ouest** : on remplit le tableau en partant de la case en haut à gauche, en livrant chaque fois le maximum possible, puis on avance vers la droite (demande épuisée) ou vers le bas (offre épuisée). Elle ignore les coûts.
> [!exemple] Coin nord-ouest
> K1→C1 : 300 ; K1→C2 : 100 ; K2→C2 : 300 ; K3→C2 : 50 ; K3→C3 : 250.
> Coût : 1 200 000 + 300 000 + 1 050 000 + 100 000 + 1 000 000 = **3 650 000 F**.

**Méthode du moindre coût** : on remplit d'abord la case la moins chère, puis la suivante, etc. Elle donne en général une meilleure solution de départ.
> [!exemple] Moindre coût
> K3→C2 (2 000) : 300 ; K2→C1 (2 500) : 300 ; K1→C2 (3 000) : 150 ; K1→C3 (5 000) : 250.
> Coût : 600 000 + 750 000 + 450 000 + 1 250 000 = **3 050 000 F**.

Une solution de base doit comporter **m + n − 1** cases remplies (ici 5). S'il y en a moins (cas « dégénéré », comme la solution du moindre coût ci-dessus qui n'en a que 4), on ajoute une case de quantité nulle.

## 2. Améliorer : la méthode des potentiels (MODI)
1. On associe un potentiel uᵢ à chaque origine et vⱼ à chaque destination, tels que **uᵢ + vⱼ = cᵢⱼ** pour chaque case remplie (on pose u₁ = 0) ;
2. Pour chaque case vide, on calcule le **gain marginal** Δᵢⱼ = cᵢⱼ − uᵢ − vⱼ ;
3. Si tous les Δ ≥ 0 : la solution est **optimale** ;
4. Sinon, on fait entrer la case de Δ le plus négatif : on trace un **cycle** de cases remplies (+, −, +, −…) et on déplace la plus petite quantité des cases « − ».

> [!exemple] Amélioration à partir du coin nord-ouest
> Potentiels : u₁ = 0 → v₁ = 4 000, v₂ = 3 000 ; u₂ = 500 ; u₃ = − 1 000 → v₃ = 5 000.
> Cases vides : Δ(K1,C3) = 0 ; Δ(K2,C1) = − 2 000 ; Δ(K2,C3) = − 2 500 ; Δ(K3,C1) = + 1 500.
> On fait entrer **K2→C3** : cycle K2C3 (+), K3C3 (−), K3C2 (+), K2C2 (−) ; on déplace 250 m³ → coût − 2 500 × 250 = **3 025 000 F**.
> Nouveaux potentiels : Δ(K2,C1) = − 2 000 → on fait entrer K2→C1 avec le cycle K2C1 (+), K1C1 (−), K1C2 (+), K2C2 (−) ; on déplace 50 m³ → **2 925 000 F**.
> Vérification : u₁ = 0, v₁ = 4 000, v₂ = 3 000, u₂ = − 1 500, v₃ = 4 500, u₃ = − 1 000 ; tous les Δ des cases vides sont positifs (500 ; 2 000 ; 1 500 ; 500) → **optimum**.

> [!exemple] Solution optimale
> | | C1 | C2 | C3 |
> |---|---|---|---|
> | K1 | 250 | 150 | — |
> | K2 | 50 | — | 250 |
> | K3 | — | 300 | — |
> Coût minimal : **2 925 000 F**, soit 725 000 F d'économie par rapport au coin nord-ouest.

> [!retenir]
> - Équilibrer offre et demande (origine ou destination fictive).
> - Départ : coin nord-ouest (simple) ou moindre coût (meilleur) ; m + n − 1 cases de base.
> - MODI : uᵢ + vⱼ = cᵢⱼ sur les cases remplies ; Δ = cᵢⱼ − uᵢ − vⱼ sur les vides ; optimum si tous Δ ≥ 0.
> - Améliorer par un cycle + / − en déplaçant la plus petite quantité « − ».`,
 sujet:{titre:"Problème de transport : approvisionner trois chantiers depuis trois carrières", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une entreprise routière doit livrer du gravier depuis trois carrières K1, K2, K3 vers trois chantiers C1, C2, C3 de la région de Bouaké. Coûts de transport en F/m³ :

| | C1 | C2 | C3 | Offre (m³) |
|---|---|---|---|---|
| K1 | 5 000 | 3 500 | 4 000 | 400 |
| K2 | 3 000 | 4 500 | 3 500 | 300 |
| K3 | 4 500 | 2 500 | 5 000 | 300 |
| Demande (m³) | 250 | 400 | 350 | 1 000 |

### Partie A — Le problème (3 points)
1. Le problème est-il équilibré ? Combien de variables et de contraintes comporte-t-il ? Combien de cases occupées dans une solution de base ? (3 pts)

### Partie B — Solutions de départ (8 points)
2. Construire une solution par la méthode du coin nord-ouest et calculer son coût. (4 pts)
3. Construire une solution par la méthode du moindre coût et calculer son coût. (4 pts)

### Partie C — Optimalité (MODI) (9 points)
4. Pour la solution du moindre coût, calculer les potentiels ui (lignes) et vj (colonnes) avec u1 = 0 et ui + vj = cij sur les cases occupées. (4 pts)
5. Calculer les coûts réduits δij = cij − ui − vj des cases vides. La solution est-elle optimale ? (4 pts)
6. Quelle économie apporte cette solution par rapport au coin nord-ouest ? (1 pt)`,
  corrige:`### Partie A — Le problème (3 pts)
1. Offre totale = demande totale = **1 000 m³** → équilibré. 9 variables (xij), 3 + 3 = 6 contraintes (dont une redondante) ; une solution de base occupe **m + n − 1 = 5 cases**. *(3 pts)*

### Partie B — Solutions de départ (8 pts)
2. Coin nord-ouest : K1→C1 **250** ; K1→C2 **150** ; K2→C2 **250** ; K2→C3 **50** ; K3→C3 **300**. Coût : 1 250 000 + 525 000 + 1 125 000 + 175 000 + 1 500 000 = **4 575 000 F**. *(4 pts)*
3. Moindre coût (cases dans l'ordre des coûts croissants) : K3→C2 **300** (2 500) ; K2→C1 **250** (3 000) ; K1→C2 **100** (3 500) ; K2→C3 **50** (3 500) ; K1→C3 **300** (4 000). Coût : 750 000 + 750 000 + 350 000 + 175 000 + 1 200 000 = **3 225 000 F**. *(4 pts)*

### Partie C — MODI (9 pts)
4. u1 = 0 ; K1C2 : v2 = 3 500 ; K1C3 : v3 = 4 000 ; K2C3 : u2 = − 500 ; K2C1 : v1 = 3 500 ; K3C2 : u3 = − 1 000. *(4 pts)*
5. *(4 pts)*
   - δ11 = 5 000 − 0 − 3 500 = **+ 1 500** ;
   - δ22 = 4 500 + 500 − 3 500 = **+ 1 500** ;
   - δ31 = 4 500 + 1 000 − 3 500 = **+ 2 000** ;
   - δ33 = 5 000 + 1 000 − 4 000 = **+ 2 000**.
   Tous positifs : la solution du moindre coût est **optimale** (et unique).
6. 4 575 000 − 3 225 000 = **1 350 000 F** d'économie (− 30 %). *(1 pt)*

> [!attention] Erreurs à éviter
> - Oublier de vérifier l'équilibre offre / demande (sinon ajouter une ligne ou une colonne fictive).
> - Calculer les potentiels avec les cases vides.
> - Conclure à l'optimalité avec un coût réduit négatif.`},
 exercices:[
  {t:"Coin nord-ouest", d:1, e:`Deux dépôts D1 (250 m³) et D2 (350 m³) livrent trois chantiers C1 (200), C2 (150), C3 (250). Coûts (milliers de F/m³) : D1 : 3 ; 5 ; 4 — D2 : 6 ; 2 ; 3.
Construire la solution du coin nord-ouest et calculer son coût.`, c:`D1→C1 : 200 (C1 servi) ; D1→C2 : 50 (D1 vide) ; D2→C2 : 100 ; D2→C3 : 250.
Coût : 200 × 3 + 50 × 5 + 100 × 2 + 250 × 3 = 600 + 250 + 200 + 750 = **1 800** milliers de F, soit 1 800 000 F.`},
  {t:"Moindre coût", d:1, e:`Même problème : appliquer la méthode du moindre coût.`, c:`Case la moins chère : D2→C2 (2) : 150. Puis coût 3 : D1→C1 : 200 ; D2→C3 : min(200 ; 250) = 200. Il reste 50 m³ en D1 et 50 m³ demandés par C3 : D1→C3 (4) : 50.
Coût : 300 + 600 + 600 + 200 = **1 700** milliers → **1 700 000 F** (meilleur que le coin nord-ouest).`},
  {t:"Vérifier l'optimalité", d:2, e:`Vérifier par les potentiels que la solution du moindre coût de l'exercice précédent est optimale.`, c:`Cases remplies (4 = 2 + 3 − 1 ✓) : D1C1, D1C3, D2C2, D2C3.
u₁ = 0 → v₁ = 3, v₃ = 4 ; u₂ = 3 − 4 = − 1 ; v₂ = 2 + 1 = 3.
Cases vides : Δ(D1,C2) = 5 − 0 − 3 = **2** ; Δ(D2,C1) = 6 + 1 − 3 = **4**. Tous positifs → **optimale**.`},
  {t:"Problème déséquilibré", d:2, e:`Deux carrières offrent 500 et 400 m³ ; deux chantiers demandent 300 et 350 m³.
Comment équilibrer le tableau ? Que représente la colonne ajoutée ?`, c:`Offre 900 > demande 650 : on ajoute une **destination fictive** demandant **250 m³**, avec des coûts nuls.
Les quantités affectées à cette colonne représentent ce que chaque carrière **ne livrera pas** (stock restant). La méthode choisira automatiquement la carrière dont les livraisons sont les plus chères pour le garder.`},
  {t:"Amélioration complète", d:3, e:`Deux centrales (60 et 40 toupies) livrent deux chantiers (30 et 70 toupies). Coûts par toupie (milliers de F) : centrale 1 : 8 ; 6 — centrale 2 : 4 ; 9.
Partir du coin nord-ouest et améliorer jusqu'à l'optimum.`, c:`Coin nord-ouest : (1,1) 30 ; (1,2) 30 ; (2,2) 40 → coût 240 + 180 + 360 = **780**.
Potentiels : u₁ = 0 ; v₁ = 8 ; v₂ = 6 ; u₂ = 3. Case vide (2,1) : Δ = 4 − 3 − 8 = **− 7** → on la fait entrer.
Cycle (2,1)+ ; (1,1)− ; (1,2)+ ; (2,2)− ; quantité déplacée : min(30 ; 40) = 30.
Nouvelle solution : (1,2) 60 ; (2,1) 30 ; (2,2) 10 → coût 360 + 120 + 90 = **570** (780 − 7 × 30).
Vérification : u₁ = 0 ; v₂ = 6 ; u₂ = 3 ; v₁ = 1 → Δ(1,1) = 8 − 0 − 1 = 7 ≥ 0 → **optimum : 570 000 F**.`}
 ],
 quiz:[
  {q:"Si l'offre totale dépasse la demande, on ajoute :", o:["Une destination fictive","Une origine fictive","Un coût négatif","Rien"], r:0, e:"Elle reçoit le surplus."},
  {q:"Une solution de base d'un tableau 3 × 4 comporte :", o:["6 cases remplies","12","7","3"], r:0, e:"m + n − 1."},
  {q:"La méthode du coin nord-ouest :", o:["Ignore les coûts","Donne toujours l'optimum","Commence par la case la moins chère","Utilise les potentiels"], r:0, e:"Solution de départ simple."},
  {q:"Dans la méthode MODI, une solution est optimale si :", o:["Tous les Δ des cases vides sont ≥ 0","Tous les Δ sont négatifs","Toutes les cases sont remplies","u₁ = 0"], r:0, e:"Aucun déplacement ne réduit le coût."},
  {q:"Dans un cycle d'amélioration, on déplace :", o:["La plus petite quantité des cases « − »","La plus grande","La demande totale","Une quantité au hasard"], r:0, e:"Pour qu'aucune quantité ne devienne négative."}
 ]},

{id:"ro-15", niv:3, titre:"Le problème d'affectation : la méthode hongroise", duree:50, contenu:`## Le problème
On doit affecter **n agents** (équipes, engins, chefs de chantier) à **n tâches** (chantiers, lots), **un agent par tâche**, en minimisant le coût ou la durée totale (ou en maximisant un rendement). Le tableau donne le coût de chaque couple agent-tâche.

Le nombre d'affectations possibles est n! (factorielle) : 24 pour 4 équipes, 3,6 millions pour 10. On ne peut pas tout essayer à la main : la **méthode hongroise** (Kuhn, 1955) trouve l'optimum en quelques étapes.

## Le principe
Retrancher une même valeur à toute une ligne (ou une colonne) ne change pas l'affectation optimale (tous les choix possibles diminuent de la même quantité). On fait donc apparaître des **zéros**, puis on cherche une affectation qui n'utilise que des zéros.

## L'algorithme
1. **Réduction des lignes** : retrancher à chaque ligne son plus petit élément ;
2. **Réduction des colonnes** : retrancher à chaque colonne son plus petit élément ;
3. **Couvrir tous les zéros** avec le **minimum de traits** (lignes ou colonnes). Si ce minimum vaut n, on peut choisir n zéros indépendants (un par ligne et par colonne) : c'est l'**optimum** ;
4. Sinon : trouver le plus petit élément **non couvert** ; le **retrancher** aux éléments non couverts et l'**ajouter** aux éléments couverts deux fois (intersections de traits) ; revenir à l'étape 3.

> [!exemple] Quatre équipes, quatre chantiers (durées en jours)
> | | T1 | T2 | T3 | T4 |
> |---|---|---|---|---|
> | E1 | 14 | 5 | 8 | 7 |
> | E2 | 2 | 12 | 6 | 5 |
> | E3 | 7 | 8 | 3 | 9 |
> | E4 | 2 | 4 | 6 | 10 |
> Réduction des lignes (5 ; 2 ; 3 ; 2) puis de la colonne T4 (minimum 2) :
> | | T1 | T2 | T3 | T4 |
> |---|---|---|---|---|
> | E1 | 9 | 0 | 3 | 0 |
> | E2 | 0 | 10 | 4 | 1 |
> | E3 | 4 | 5 | 0 | 4 |
> | E4 | 0 | 2 | 4 | 6 |
> E2 et E4 n'ont de zéro qu'en T1 : impossible d'affecter. Trois traits suffisent à couvrir les zéros (colonne T1, colonne T3, ligne E1) : pas encore l'optimum.
> Plus petit élément non couvert : **1** (E2, T4). On le retranche aux non couverts et on l'ajoute aux intersections (E1, T1) et (E1, T3) :
> | | T1 | T2 | T3 | T4 |
> |---|---|---|---|---|
> | E1 | 10 | 0 | 4 | 0 |
> | E2 | 0 | 9 | 4 | 0 |
> | E3 | 4 | 4 | 0 | 3 |
> | E4 | 0 | 1 | 4 | 5 |
> Affectation sur des zéros : E3 → T3 (seul zéro de E3) ; E4 → T1 (seul zéro de E4) ; E2 → T4 ; E1 → T2.
> Durée totale (tableau initial) : 5 + 5 + 3 + 2 = **15 jours** (c'est le minimum parmi les 24 possibilités).

## Les variantes
- **Maximisation** (rendements, bénéfices) : on remplace chaque valeur a par (max − a), c'est-à-dire par le « manque à gagner », et on minimise ;
- **Tableau non carré** (3 équipes pour 4 chantiers) : on ajoute une équipe **fictive** de coûts nuls ; le chantier qui lui est affecté ne sera pas traité (ou sous-traité) ;
- **Affectation interdite** (équipe non qualifiée) : coût très grand (M) dans la case.

> [!retenir]
> - Un agent par tâche ; n! possibilités : on utilise la méthode hongroise.
> - Réduire lignes puis colonnes ; couvrir les zéros avec le minimum de traits.
> - n traits : affecter sur les zéros ; sinon, retrancher le plus petit non couvert, l'ajouter aux intersections.
> - Maximisation : travailler sur (max − a) ; tableau non carré : ligne ou colonne fictive.`,
 sujet:{titre:"Affecter quatre équipes à quatre chantiers : la méthode hongroise", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une entreprise dispose de quatre équipes E1 à E4 à affecter à quatre chantiers C1 à C4 (une équipe par chantier). Le tableau donne la durée estimée (en jours) de chaque équipe sur chaque chantier :

| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| E1 | 11 | 5 | 8 | 5 |
| E2 | 13 | 7 | 9 | 11 |
| E3 | 7 | 13 | 6 | 14 |
| E4 | 9 | 13 | 15 | 7 |

On veut **minimiser la durée totale** (somme des durées).

### Partie A — Le problème (3 points)
1. Combien d'affectations possibles ? Pourquoi ne pas toutes les essayer pour un problème de 10 équipes ? (3 pts)

### Partie B — Méthode hongroise (13 points)
2. Soustraire le minimum de chaque ligne, puis de chaque colonne. (4 pts)
3. Peut-on trouver 4 zéros indépendants (un par ligne et par colonne) ? Couvrir les zéros avec le nombre minimal de droites. (3 pts)
4. Modifier le tableau (plus petit élément non couvert soustrait aux cases non couvertes, ajouté aux intersections). (3 pts)
5. Trouver l'affectation optimale et la durée totale. (3 pts)

### Partie C — Vérification (4 points)
6. Comparer à l'affectation « intuitive » qui donne à chaque équipe son chantier le plus court dans l'ordre E1, E2, E3, E4. (2 pts)
7. Comment traiter un problème de maximisation (rendements) ou une affectation interdite ? (2 pts)`,
  corrige:`### Partie A — Le problème (3 pts)
1. 4! = **24** affectations ; pour 10 équipes, 10! = 3 628 800 : impossible à la main, d'où une méthode systématique. *(3 pts)*

### Partie B — Hongroise (13 pts)
2. Minima des lignes : 5, 7, 6, 7 ; puis minimum de la colonne C1 : 1 (les autres colonnes contiennent déjà un zéro). *(4 pts)*

| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| E1 | 5 | 0 | 3 | 0 |
| E2 | 5 | 0 | 2 | 4 |
| E3 | 0 | 7 | 0 | 8 |
| E4 | 1 | 6 | 8 | 0 |

3. E2 doit prendre C2 (seul zéro), E4 doit prendre C4, E1 n'a alors plus de zéro libre : seulement **3 zéros indépendants**. Couverture minimale : colonne **C2**, colonne **C4**, ligne **E3** (3 droites). *(3 pts)*
4. Plus petit non couvert : **1** (E4, C1). On le retire des cases non couvertes et on l'ajoute aux intersections (E3, C2) et (E3, C4) : *(3 pts)*

| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| E1 | 4 | 0 | 2 | 0 |
| E2 | 4 | 0 | 1 | 4 |
| E3 | 0 | 8 | 0 | 9 |
| E4 | 0 | 6 | 7 | 0 |

5. E2 → C2 ; E1 → C4 ; E4 → C1 ; E3 → C3 : 7 + 5 + 9 + 6 = **27 jours**. *(3 pts)*

### Partie C — Vérification (4 pts)
6. Intuitive : E1 → C2 (5) ; E2 → C3 (9) ; E3 → C1 (7) ; E4 → C4 (7) = **28 jours** (1 jour de plus) — et l'ordre de choix change le résultat. *(2 pts)*
7. **Maximisation** : remplacer chaque valeur par (maximum − valeur) puis minimiser ; **affectation interdite** : mettre un coût très grand dans la case. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier la réduction des colonnes après celle des lignes.
> - Couvrir les zéros avec plus de droites que nécessaire.
> - Choisir les zéros au hasard : commencer par les lignes ou colonnes qui n'en ont qu'un.`},
 exercices:[
  {t:"Affectation directe", d:1, e:`Trois équipes doivent réaliser trois ouvrages ; durées (jours) — E1 : 6 ; 9 ; 5 — E2 : 7 ; 4 ; 8 — E3 : 5 ; 6 ; 7.
Trouver l'affectation optimale.`, c:`Réduction des lignes (5 ; 4 ; 5) : E1 : 1 ; 4 ; **0** — E2 : 3 ; **0** ; 4 — E3 : **0** ; 1 ; 2. Colonnes : minimums nuls.
Trois zéros indépendants : **E1 → ouvrage 3 ; E2 → ouvrage 2 ; E3 → ouvrage 1**.
Durée totale : 5 + 4 + 5 = **14 jours**.`},
  {t:"Quatre engins, quatre chantiers", d:2, e:`Coûts (centaines de milliers de F) — engin 1 : 10 ; 7 ; 8 ; 12 — engin 2 : 9 ; 11 ; 6 ; 10 — engin 3 : 12 ; 9 ; 13 ; 8 — engin 4 : 8 ; 10 ; 9 ; 11.
Appliquer la méthode hongroise.`, c:`Réduction des lignes (7 ; 6 ; 8 ; 8) :
engin 1 : 3 ; **0** ; 1 ; 5 — engin 2 : 3 ; 5 ; **0** ; 4 — engin 3 : 4 ; 1 ; 5 ; **0** — engin 4 : **0** ; 2 ; 1 ; 3.
Chaque colonne contient déjà un zéro, et les quatre zéros sont indépendants : **1 → chantier 2 ; 2 → chantier 3 ; 3 → chantier 4 ; 4 → chantier 1**.
Coût : 7 + 6 + 8 + 8 = **29**, soit 2 900 000 F.`},
  {t:"Maximiser des rendements", d:2, e:`Rendements (m² de coffrage par jour) de trois équipes sur trois chantiers — E1 : 40 ; 35 ; 50 — E2 : 45 ; 30 ; 40 — E3 : 38 ; 42 ; 36.
Quelle affectation maximise le rendement total ?`, c:`Manque à gagner (50 − a) : E1 : 10 ; 15 ; 0 — E2 : 5 ; 20 ; 10 — E3 : 12 ; 8 ; 14.
Réduction des lignes (0 ; 5 ; 8) : E1 : 10 ; 15 ; **0** — E2 : **0** ; 15 ; 5 — E3 : 4 ; **0** ; 6 → zéros indépendants.
**E1 → C3 ; E2 → C1 ; E3 → C2** : 50 + 45 + 42 = **137 m²/jour** (le maximum parmi les 6 possibilités).`},
  {t:"Tableau non carré", d:2, e:`Trois chefs de chantier pour quatre chantiers ; le chantier non attribué sera sous-traité. Comment adapter la méthode ?`, c:`On ajoute un **4ᵉ chef fictif** dont tous les coûts sont nuls (ou égaux au surcoût de sous-traitance de chaque chantier, si on le connaît).
Le chantier affecté à ce chef fictif est celui qui sera **sous-traité** ; la méthode choisit celui dont l'affectation à un vrai chef apporterait le moins.`},
  {t:"Compter les possibilités", d:3, e:`a) Combien d'affectations possibles pour 5 équipes et 5 chantiers ? Pour 8 ?
b) Une équipe E2 n'est pas qualifiée pour les travaux en hauteur du chantier T3. Comment l'indiquer dans le tableau ?`, c:`a) 5! = **120** ; 8! = **40 320** : l'énumération devient vite impossible à la main, d'où la méthode hongroise (quelques étapes seulement).
b) On met un **coût très grand** (noté M, par exemple 1 000 fois le plus grand coût) dans la case (E2, T3) : la méthode ne la choisira jamais.`}
 ],
 quiz:[
  {q:"Retrancher une constante à une ligne du tableau :", o:["Ne change pas l'affectation optimale","Change l'optimum","Est interdit","Double le coût"], r:0, e:"Tous les choix baissent de la même valeur."},
  {q:"On peut conclure à l'optimum quand le nombre minimal de traits couvrant les zéros vaut :", o:["n","n − 1","1","2n"], r:0, e:"n zéros indépendants existent."},
  {q:"Pour maximiser des rendements, on :", o:["Remplace a par (max − a) puis on minimise","Change le signe des lignes","Prend la diagonale","Divise par le maximum"], r:0, e:"Manque à gagner."},
  {q:"Avec 3 équipes et 4 chantiers, on ajoute :", o:["Une équipe fictive","Un chantier fictif","Rien","Deux équipes fictives"], r:0, e:"Tableau carré 4 × 4."},
  {q:"Nombre d'affectations possibles pour 4 équipes et 4 tâches :", o:["24","16","8","4"], r:0, e:"4! = 24."}
 ]},

{id:"ro-16", niv:3, titre:"Files d'attente : camions, chargeuses et pompes à béton", duree:50, contenu:`## Le phénomène d'attente
Des camions arrivent à une chargeuse, des toupies à une pompe à béton, des bennes à une grue. Si le poste est occupé, ils **attendent**. Même quand le poste peut servir en moyenne plus de clients qu'il n'en arrive, des files se forment, car les arrivées et les durées de service sont **irrégulières**.

Deux coûts s'opposent :
- l'**attente** des clients (camion et chauffeur immobilisés, béton qui vieillit) ;
- le **poste de service** (location d'une chargeuse plus puissante, d'une deuxième pompe).
La théorie des files d'attente aide à trouver le bon équilibre.

## Le modèle M/M/1
Hypothèses : arrivées aléatoires (loi de Poisson) de **taux moyen λ** (clients par heure), durées de service aléatoires (loi exponentielle) de **taux moyen µ** (clients servis par heure), **un seul poste**, premier arrivé premier servi.

$$ taux d'occupation : ρ = λ / µ     (il faut ρ < 1, sinon la file grandit sans fin)
$$ probabilité que le poste soit libre : P₀ = 1 − ρ
$$ nombre moyen de clients dans le système : L = ρ / (1 − ρ)
$$ nombre moyen dans la file : Lq = ρ² / (1 − ρ)
$$ temps moyen passé dans le système : W = 1 / (µ − λ)
$$ temps moyen d'attente avant service : Wq = ρ / (µ − λ)

**Loi de Little** (valable pour toutes les files) : L = λ × W et Lq = λ × Wq.

> [!exemple] Chargeuse sur une carrière
> Les camions arrivent au rythme de λ = 10 par heure ; la chargeuse peut charger µ = 12 camions par heure.
> ρ = 10/12 = **0,83** : la chargeuse est occupée 83 % du temps.
> L = 0,83/0,17 = **5 camions** dans le système en moyenne ; Lq = **4,2** camions en attente.
> W = 1/(12 − 10) = **0,5 h** ; Wq = 0,83/2 = 0,42 h = **25 min** d'attente par camion.

> [!attention] L'attente explose près de la saturation
> | ρ | 0,5 | 0,7 | 0,8 | 0,9 | 0,95 |
> |---|---|---|---|---|---|
> | Lq (camions en attente) | 0,5 | 1,6 | 3,2 | 8,1 | 18 |
> Viser un taux d'occupation de 100 % est une erreur : l'attente devient énorme. On accepte que le poste soit parfois inactif.

## L'étude économique
On compare le coût horaire total des solutions :
$$ coût total = (nombre moyen de camions dans le système L) × (coût horaire d'un camion) + coût horaire du poste
> [!exemple] Faut-il une chargeuse plus puissante ?
> Camion avec chauffeur : 20 000 F/h. Chargeuse actuelle (µ = 12/h) : 40 000 F/h. Chargeuse plus puissante (µ = 15/h) : 55 000 F/h. λ = 10/h.
> Actuelle : L = 5 → 5 × 20 000 + 40 000 = **140 000 F/h**.
> Plus puissante : ρ = 0,67 ; L = 2 → 2 × 20 000 + 55 000 = **95 000 F/h**.
> La machine plus chère fait économiser **45 000 F par heure** : les camions tournent davantage.

## Le cas du béton prêt à l'emploi
Pour une pompe, l'attente a un coût **technique** en plus du coût financier : un béton qui attend trop dans la toupie perd sa maniabilité. On espace les livraisons pour que l'attente reste courte, ou l'on prévoit une deuxième pompe. Avec un cadencement régulier (arrivées planifiées plutôt qu'aléatoires), l'attente diminue fortement : c'est tout l'intérêt de bien **planifier les rotations** des toupies.

> [!retenir]
> - ρ = λ/µ < 1 ; L = ρ/(1 − ρ) ; Lq = ρ²/(1 − ρ) ; W = 1/(µ − λ) ; Wq = ρ/(µ − λ).
> - Loi de Little : L = λ W.
> - L'attente explose quand ρ approche de 1.
> - Coût total = coût d'attente des clients + coût du poste : choisir le minimum.`,
 sujet:{titre:"Files d'attente : camions devant une chargeuse, faut-il un engin plus rapide ?", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Sur un chantier de terrassement à Anyama, les camions arrivent au hasard devant une chargeuse unique.

**Données** (modèle M/M/1)
- Arrivées : **λ = 6 camions/h** en moyenne ; chargeuse actuelle : **μ = 8 camions/h** ;
- Formules : ρ = λ/μ ; L = ρ/(1 − ρ) ; Lq = ρ²/(1 − ρ) ; W = 1/(μ − λ) ; Wq = ρ/(μ − λ) ; P0 = 1 − ρ ;
- Coût d'un camion immobilisé (chauffeur, engin) : **25 000 F/h** ;
- Chargeuse actuelle : **40 000 F/h** ; chargeuse plus puissante (μ = **10 camions/h**) : **55 000 F/h**.

### Partie A — Le modèle (4 points)
1. Que représentent λ, μ et ρ ? Que se passe-t-il si λ ≥ μ ? (4 pts)

### Partie B — Chargeuse actuelle (8 points)
2. Calculer ρ, P0, L, Lq, W et Wq. (6 pts)
3. Interpréter ces résultats pour le conducteur de travaux. (2 pts)

### Partie C — Chargeuse plus puissante (8 points)
4. Recalculer ρ, L, W et Wq avec μ = 10. (4 pts)
5. Calculer le coût horaire total (chargeuse + camions présents dans le système) des deux solutions. Conclure. (4 pts)`,
  corrige:`### Partie A — Modèle (4 pts)
1. **λ** : taux moyen d'**arrivée** des camions ; **μ** : taux moyen de **service** (camions chargés par heure) ; **ρ** : taux d'**occupation** de la chargeuse. Si λ ≥ μ, la file **s'allonge sans fin** : il faut ajouter une chargeuse ou réduire les arrivées. *(4 pts)*

### Partie B — Actuelle (8 pts)
2. *(6 pts)*
   - ρ = 6/8 = **0,75** ; P0 = **0,25** (chargeuse inactive 25 % du temps) ;
   - L = 0,75/0,25 = **3 camions** dans le système ; Lq = 0,5625/0,25 = **2,25 camions** en attente ;
   - W = 1/(8 − 6) = **0,5 h** (30 min) ; Wq = 0,75/2 = **0,375 h** (22,5 min).
3. Un camion passe en moyenne 30 minutes sur place dont 22,5 à attendre, alors que la chargeuse est inoccupée un quart du temps : l'aléa des arrivées crée des **files** même quand la capacité semble suffisante. *(2 pts)*

### Partie C — Plus puissante (8 pts)
4. ρ = **0,6** ; L = 0,6/0,4 = **1,5** ; W = 1/4 = **0,25 h** (15 min) ; Wq = 0,6/4 = **0,15 h** (9 min). *(4 pts)*
5. Actuelle : 40 000 + 25 000 × 3 = **115 000 F/h** ; puissante : 55 000 + 25 000 × 1,5 = **92 500 F/h** → la chargeuse plus puissante, plus chère à l'heure, fait **économiser 22 500 F/h** grâce aux camions moins immobilisés. *(4 pts)*

> [!attention] Erreurs à éviter
> - Croire qu'une chargeuse occupée à 75 % n'entraîne pas d'attente.
> - Oublier le coût des camions immobilisés dans la comparaison.
> - Appliquer le modèle avec λ ≥ μ.`},
 exercices:[
  {t:"Indicateurs d'une file", d:1, e:`Des camions arrivent à un poste de lavage de roues au rythme de 6 par heure ; le poste en traite 8 par heure.
Calculer ρ, P₀, L, Lq, W et Wq.`, c:`ρ = 6/8 = **0,75** ; P₀ = **25 %** du temps libre.
L = 0,75/0,25 = **3 camions** ; Lq = 0,5625/0,25 = **2,25 camions**.
W = 1/(8 − 6) = **0,5 h** ; Wq = 0,75/2 = 0,375 h = **22,5 min**.`},
  {t:"Loi de Little", d:1, e:`Sur un chantier, on observe en moyenne 3 camions présents à la zone de déchargement, et il en arrive 12 par heure.
Combien de temps un camion reste-t-il en moyenne sur la zone ?`, c:`W = L/λ = 3/12 = **0,25 h = 15 minutes**.`},
  {t:"Cadence des toupies", d:2, e:`Une pompe à béton vide en moyenne µ = 5 toupies par heure. Les toupies arrivent au hasard au rythme λ = 4 par heure.
a) Calculer le temps moyen d'attente. Est-ce acceptable ?
b) Quel rythme d'arrivée maximal permet une attente moyenne de 15 minutes au plus ?`, c:`a) ρ = 0,8 ; Wq = 0,8/(5 − 4) = **0,8 h = 48 min** : trop long pour du béton frais.
b) Wq = λ/(µ(µ − λ)) ≤ 0,25 → λ ≤ 1,25 × (5 − λ) → 2,25 λ ≤ 6,25 → **λ ≤ 2,8 toupies/h** : il faut ralentir les livraisons (ou mieux, les planifier à intervalles réguliers), ou ajouter une deuxième pompe.`},
  {t:"Choisir un poste plus rapide", d:2, e:`Une grue décharge µ = 6 camions par heure et il en arrive λ = 5 par heure. Le coût d'immobilisation d'un camion est 25 000 F/h. Un système de déchargement plus rapide (µ = 10 par heure) coûterait 30 000 F/h de plus.
Faut-il l'adopter ?`, c:`Actuel : ρ = 5/6 ; L = 0,833/0,167 = **5 camions** → 125 000 F/h d'immobilisation.
Nouveau : ρ = 0,5 ; L = **1 camion** → 25 000 F/h.
Économie : 100 000 F/h pour un surcoût de 30 000 F/h → **oui**, gain net 70 000 F/h.`},
  {t:"Combien de camions affecter ?", d:3, e:`Une chargeuse (µ = 12 camions/h) charge des camions qui arrivent au hasard. En affectant plus de camions, le rythme d'arrivée passerait de 8 à 10 camions par heure. Chaque chargement rapporte 6 000 F de marge ; un camion qui attend coûte 20 000 F/h.
Calculer, pour chaque rythme, la marge horaire des chargements et le coût de l'attente (Lq × 20 000 F). Conclure.`, c:`λ = 8 : ρ = 0,667 ; Lq = 0,444/0,333 = **1,33 camion** → attente **26 700 F/h** ; marge 8 × 6 000 = 48 000 F/h → solde **+ 21 300 F/h**.
λ = 10 : ρ = 0,833 ; Lq = **4,17 camions** → attente **83 300 F/h** ; marge 60 000 F/h → solde **− 23 300 F/h**.
Les 2 camions supplémentaires par heure coûtent plus en attente qu'ils ne rapportent : **rester à 8 camions par heure**, ou louer une seconde chargeuse pour augmenter la cadence.`}
 ],
 quiz:[
  {q:"Taux d'occupation d'un poste :", o:["ρ = λ/µ","ρ = µ/λ","ρ = λ − µ","ρ = 1/µ"], r:0, e:"Il doit rester inférieur à 1."},
  {q:"Loi de Little :", o:["L = λ W","L = µ W","W = λ L","L = ρ"], r:0, e:"Valable pour toute file stable."},
  {q:"Si ρ se rapproche de 1, l'attente :", o:["Augmente très fortement","Diminue","Reste constante","Devient nulle"], r:0, e:"Lq = ρ²/(1 − ρ)."},
  {q:"Temps moyen dans le système M/M/1 :", o:["1/(µ − λ)","λ/µ","µ − λ","1/λ"], r:0, e:"Attente + service."},
  {q:"Planifier les arrivées des toupies à intervalles réguliers :", o:["Réduit fortement l'attente","Augmente l'attente","N'a aucun effet","Est interdit"], r:0, e:"Moins d'irrégularité, moins de file."}
 ]},

{id:"ro-9", niv:3, titre:"Décider dans l'incertain : critères, arbres de décision et simulation", duree:55, contenu:`## Décisions et états de la nature
Beaucoup de décisions de chantier dépendent d'événements que l'on ne maîtrise pas : **météo** (saison des pluies), **qualité du sol**, **prix des matériaux**, **délai d'un fournisseur**. On construit un **tableau des gains** (ou des coûts) : une ligne par décision possible, une colonne par **état de la nature**.

> [!exemple] Combien de grues pour un chantier ?
> Bénéfice du chantier (millions de F) selon la météo :
> | Décision | Saison normale | Pluies modérées | Fortes pluies |
> |---|---|---|---|
> | D1 : une grue | 12 | 8 | 2 |
> | D2 : deux grues | 15 | 9 | − 2 |
> | D3 : une grue + un monte-charge | 10 | 9 | 6 |

## Les critères sans probabilités
- **Wald (maximin, prudent)** : on retient pour chaque décision son **pire** résultat et on choisit le meilleur des pires. D1 : 2 ; D2 : − 2 ; D3 : **6** → D3.
- **Maximax (optimiste)** : on choisit le meilleur des meilleurs. D1 : 12 ; D2 : **15** ; D3 : 10 → D2.
- **Laplace** : toutes les situations sont jugées également probables ; on prend la **moyenne**. D1 : 7,33 ; D2 : 7,33 ; D3 : **8,33** → D3.
- **Hurwicz** : compromis avec un coefficient d'optimisme α : α × meilleur + (1 − α) × pire. Avec α = 0,6 : D1 : 8,0 ; D2 : 8,2 ; D3 : **8,4** → D3.
- **Savage (minimax des regrets)** : le regret est l'écart avec le meilleur résultat possible dans chaque colonne ; on choisit la décision dont le **regret maximal** est le plus petit.
> [!exemple] Tableau des regrets (meilleurs par colonne : 15 ; 9 ; 6)
> | Décision | Normale | Modérées | Fortes | Regret max |
> |---|---|---|---|---|
> | D1 | 3 | 1 | 4 | **4** |
> | D2 | 0 | 0 | 8 | 8 |
> | D3 | 5 | 0 | 0 | 5 |
> Savage retient **D1**.

Les critères ne donnent pas tous la même réponse : ils traduisent des **attitudes** différentes face au risque. L'important est de choisir le critère **avant** de calculer, en fonction de la situation de l'entreprise (une petite entreprise ne peut pas se permettre une perte).

## Avec des probabilités : l'espérance
Si l'on peut estimer les probabilités (statistiques météo, sondages de sol), on calcule l'**espérance** de chaque décision : Σ (probabilité × gain).
> [!exemple] Probabilités : normale 0,5 ; modérées 0,3 ; fortes 0,2
> D1 : 6 + 2,4 + 0,4 = 8,8 ; D2 : 7,5 + 2,7 − 0,4 = **9,8** ; D3 : 5 + 2,7 + 1,2 = 8,9 → D2.
> **Valeur de l'information parfaite** : si l'on connaissait la météo à l'avance, on choisirait toujours la meilleure décision : 0,5 × 15 + 0,3 × 9 + 0,2 × 6 = 11,4. VIP = 11,4 − 9,8 = **1,6 million** : c'est le maximum qu'il serait raisonnable de payer pour une information sûre.

## L'arbre de décision
Pour des décisions **en plusieurs étapes** (faire une étude ou non, puis choisir une solution), on dessine un arbre :
- **carrés** : décisions ; **cercles** : événements aléatoires avec leurs probabilités ;
- on calcule **de droite à gauche** : espérance aux cercles, meilleur choix aux carrés.

## La simulation
Quand le problème est trop complexe (planning avec des dizaines de durées incertaines), on **simule** : on tire au hasard les valeurs incertaines (avec un tableur), on calcule le résultat, et on recommence des milliers de fois (**méthode de Monte-Carlo**). On obtient la distribution des résultats : probabilité de finir à temps, de dépasser le budget…

> [!retenir]
> - Tableau des gains : décisions × états de la nature.
> - Wald (prudent), maximax (optimiste), Laplace (moyenne), Hurwicz (α), Savage (regrets).
> - Avec probabilités : espérance ; VIP = espérance avec information parfaite − meilleure espérance.
> - Arbre de décision : calcul de droite à gauche ; simulation de Monte-Carlo pour les cas complexes.`,
 sujet:{titre:"Décider dans l'incertain : bétonner avant ou après la saison des pluies ?", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un entrepreneur doit décider comment réaliser le gros œuvre d'un bâtiment à Gagnoa à l'approche de la saison des pluies. Gains nets (en millions de F) selon la pluviométrie :

| Décision | S1 : pluies fortes | S2 : pluies moyennes | S3 : pluies faibles |
|---|---|---|---|
| D1 : bétonner tout de suite | − 6 | 4 | 10 |
| D2 : attendre la saison sèche | 2 | 3 | 4 |
| D3 : bétonner sous abri provisoire | 1 | 6 | 7 |

La météo donne les probabilités : S1 **0,3** ; S2 **0,5** ; S3 **0,2**.

### Partie A — Sans probabilités (10 points)
1. Appliquer le critère de Wald (maximin). (2 pts)
2. Appliquer le critère du maximax. (2 pts)
3. Appliquer le critère de Laplace (moyenne). (2 pts)
4. Appliquer le critère de Hurwicz avec α = 0,6 (optimisme). (2 pts)
5. Construire la matrice des regrets et appliquer le critère de Savage. (2 pts)

### Partie B — Avec probabilités (6 points)
6. Calculer l'espérance de gain de chaque décision. Quelle décision prendre ? (3 pts)
7. Calculer la valeur de l'information parfaite (EVPI). Combien l'entrepreneur pourrait-il payer au maximum une prévision météo parfaite ? (3 pts)

### Partie C — Synthèse (4 points)
8. Comparer les décisions conseillées par les différents critères et expliquer le lien avec l'attitude face au risque. (4 pts)`,
  corrige:`### Partie A — Sans probabilités (10 pts)
1. Minima : D1 − 6 ; D2 2 ; D3 1 → **D2** (prudent). *(2 pts)*
2. Maxima : 10 ; 4 ; 7 → **D1** (optimiste). *(2 pts)*
3. Moyennes : D1 2,67 ; D2 3,00 ; D3 4,67 → **D3**. *(2 pts)*
4. 0,6 × max + 0,4 × min : D1 0,6 × 10 − 0,4 × 6 = 3,6 ; D2 3,2 ; D3 0,6 × 7 + 0,4 × 1 = **4,6** → **D3**. *(2 pts)*
5. Regrets (meilleur de la colonne − gain) : D1 (8 ; 2 ; 0) ; D2 (0 ; 3 ; 6) ; D3 (1 ; 0 ; 3) ; regrets maximaux 8 ; 6 ; **3** → **D3**. *(2 pts)*

### Partie B — Probabilités (6 pts)
6. E(D1) = − 1,8 + 2,0 + 2,0 = **2,2** ; E(D2) = 0,6 + 1,5 + 0,8 = **2,9** ; E(D3) = 0,3 + 3,0 + 1,4 = **4,7** → **D3**. *(3 pts)*
7. Avec information parfaite : 0,3 × 2 + 0,5 × 6 + 0,2 × 10 = 5,6 → EVPI = 5,6 − 4,7 = **0,9 M F** : on ne paierait pas plus de 900 000 F une prévision parfaite. *(3 pts)*

### Partie C — Synthèse (4 pts)
8. Le prudent (Wald) attend (D2) ; le joueur (maximax) bétonne tout de suite (D1) ; la plupart des critères équilibrés et l'espérance conseillent **D3 (abri provisoire)**, qui limite la perte en cas de fortes pluies tout en gardant de bons gains : c'est une décision **robuste**. *(4 pts)*

> [!attention] Erreurs à éviter
> - Construire les regrets par ligne au lieu de par colonne.
> - Oublier les signes négatifs dans les espérances.
> - Croire qu'un critère est « le bon » : il traduit une attitude face au risque.`},
 exercices:[
  {t:"Critères de Wald et maximax", d:1, e:`Coûts (millions de F, à minimiser) de trois techniques de plancher selon le prix de l'acier (bas ; moyen ; haut) — T1 : 20 ; 24 ; 30 — T2 : 22 ; 23 ; 25 — T3 : 18 ; 25 ; 33.
Quelle technique choisir selon le critère prudent ? Selon le critère optimiste ?`, c:`Pour des **coûts**, on inverse : prudent = minimiser le pire coût (minimax) ; optimiste = minimiser le meilleur coût (minimin).
Pire coût : T1 30 ; T2 **25** ; T3 33 → prudent : **T2**.
Meilleur coût : T1 20 ; T2 22 ; T3 **18** → optimiste : **T3**.`},
  {t:"Laplace et Savage", d:2, e:`Même tableau de coûts. Appliquer le critère de Laplace, puis celui de Savage.`, c:`Laplace (moyennes) : T1 24,67 ; T2 **23,33** ; T3 25,33 → **T2**.
Savage : meilleurs coûts par colonne 18 ; 23 ; 25. Regrets — T1 : 2 ; 1 ; 5 (max 5) — T2 : 4 ; 0 ; 0 (max **4**) — T3 : 0 ; 2 ; 8 (max 8) → **T2**.`},
  {t:"Espérance et information parfaite", d:2, e:`Avec les probabilités 0,3 (acier bas) ; 0,5 (moyen) ; 0,2 (haut), calculer le coût espéré de chaque technique. Quelle est la valeur de l'information parfaite ?`, c:`T1 : 6 + 12 + 6 = **24,0** ; T2 : 6,6 + 11,5 + 5 = **23,1** ; T3 : 5,4 + 12,5 + 6,6 = 24,5 → **T2**.
Avec information parfaite : 0,3 × 18 + 0,5 × 23 + 0,2 × 25 = 5,4 + 11,5 + 5 = 21,9.
VIP = 23,1 − 21,9 = **1,2 million de F**.`},
  {t:"Faire une étude de sol ?", d:2, e:`On hésite entre une fondation superficielle (FS) et des pieux (FP). Le sol est bon avec la probabilité 0,6, mauvais avec 0,4. Coûts : FS : 20 M si bon, 50 M si mauvais (renforcements tardifs) ; FP : 35 M dans tous les cas. Une étude géotechnique fiable coûte 2 M.
Faut-il faire l'étude ?`, c:`Sans étude : FS = 0,6 × 20 + 0,4 × 50 = **32 M** ; FP = 35 M → on choisirait FS (32 M).
Avec étude : sol bon → FS (20) ; sol mauvais → FP (35) : 0,6 × 20 + 0,4 × 35 = 26 M ; + 2 M d'étude = **28 M**.
28 < 32 → **faire l'étude** (elle vaut jusqu'à 32 − 26 = 6 M).`},
  {t:"Sensibilité au coefficient d'optimisme", d:3, e:`Dans l'exemple du cours (grues), exprimer le critère de Hurwicz de chaque décision en fonction de α, puis déterminer pour quelles valeurs de α on choisit D2 plutôt que D3.`, c:`D1 = 12α + 2(1 − α) = 10α + 2 ; D2 = 15α − 2(1 − α) = 17α − 2 ; D3 = 10α + 6(1 − α) = 4α + 6.
D2 > D3 ⇔ 13α > 8 ⇔ **α > 0,615**. D3 > D1 ⇔ 6α < 4 ⇔ α < 0,667, et D2 > D1 dès α > 0,571.
Donc : α < 0,615 → **D3** ; α > 0,615 → **D2**. Le choix bascule pour un degré d'optimisme d'environ 0,6 : la décision est sensible, il faut en discuter avant de trancher.`}
 ],
 quiz:[
  {q:"Le critère de Wald (gains) choisit :", o:["Le meilleur des pires résultats","Le meilleur des meilleurs","La moyenne","Le plus petit regret"], r:0, e:"Critère prudent."},
  {q:"Le regret d'une décision dans un état de la nature est :", o:["L'écart avec le meilleur résultat possible dans cet état","Le pire résultat","La probabilité","Le gain moyen"], r:0, e:"Critère de Savage."},
  {q:"Le critère de Laplace suppose que les états de la nature sont :", o:["Équiprobables","Certains","Impossibles","Toujours défavorables"], r:0, e:"On prend la moyenne."},
  {q:"La valeur de l'information parfaite est :", o:["L'espérance avec information parfaite moins la meilleure espérance sans","Toujours nulle","Le prix d'une étude","Le pire gain"], r:0, e:"Prix maximal à payer pour savoir."},
  {q:"La méthode de Monte-Carlo consiste à :", o:["Simuler de nombreux tirages aléatoires","Choisir au hasard une seule fois","Ignorer l'incertitude","Calculer un plus court chemin"], r:0, e:"On obtient une distribution des résultats."}
 ]},

{id:"ro-17", niv:3, titre:"Renouvellement du matériel : quand remplacer un engin ?", duree:45, contenu:`## Le problème
Un engin (camion, bétonnière, chargeuse, groupe électrogène) coûte cher à l'achat, puis de plus en plus cher à entretenir en vieillissant, tandis que sa **valeur de revente** baisse. Le garder trop longtemps coûte en pannes et en réparations ; le remplacer trop tôt fait perdre beaucoup de valeur. Il existe une **durée de remplacement optimale**.

## Le coût moyen annuel
Si l'on garde l'engin n années :
$$ C(n) = [ A − R(n) + (E₁ + E₂ + … + Eₙ) ] / n
A : prix d'achat ; R(n) : valeur de revente après n années ; Eₖ : coût d'entretien et de réparation de l'année k.
La **durée optimale** est celle qui **minimise C(n)**.

> [!exemple] Camion benne (millions de F)
> Achat A = 40.
> | Année n | Revente R(n) | Entretien Eₙ | Entretien cumulé | C(n) |
> |---|---|---|---|---|
> | 1 | 30 | 1,5 | 1,5 | 11,50 |
> | 2 | 23 | 2,5 | 4,0 | 10,50 |
> | 3 | 18 | 4,0 | 8,0 | **10,00** |
> | 4 | 14 | 6,5 | 14,5 | 10,13 |
> | 5 | 11 | 8,5 | 23,0 | 10,40 |
> | 6 | 9 | 11,0 | 34,0 | 10,83 |
> Exemple pour n = 3 : C(3) = (40 − 18 + 8)/3 = 30/3 = 10.
> Le coût moyen est minimal pour **n = 3 ans** : on remplace le camion tous les 3 ans (10 millions par an).

## Le raisonnement marginal
Le **coût marginal** de l'année k (garder l'engin une année de plus) = perte de valeur de revente pendant l'année + entretien de l'année : m(k) = R(k − 1) − R(k) + Eₖ.
- Année 4 du camion : (18 − 14) + 6,5 = **10,5** > C(3) = 10 : garder l'engin une 4ᵉ année coûte plus que la moyenne obtenue → on le remplace après 3 ans.
Règle : **on remplace dès que le coût marginal de l'année suivante dépasse le coût moyen minimal**.

## Comparer des engins de durées différentes
Pour comparer deux engins qui ne durent pas le même nombre d'années, on compare leurs **coûts moyens annuels** (et non leurs coûts totaux).

## Tenir compte de l'actualisation
Pour des montants importants sur plusieurs années, un franc dépensé aujourd'hui vaut plus qu'un franc dépensé dans 5 ans (taux d'actualisation i). On calcule alors une **annuité équivalente** :
$$ a = [ A − R(n)/(1 + i)ⁿ ] × i / (1 − (1 + i)⁻ⁿ)   (+ coût d'entretien annuel moyen)
Le principe reste le même : on choisit la durée (ou l'engin) qui minimise le coût annuel équivalent.

## Les autres facteurs
- **Disponibilité** : un engin en panne arrête toute une équipe (coût caché important) ;
- **Évolution technique** : nouveaux engins plus économes en carburant ;
- **Fiscalité** : amortissements, cession ;
- **Sécurité** et conformité (contrôles périodiques des engins de levage).

> [!retenir]
> - C(n) = [A − R(n) + Σ Eₖ]/n ; remplacer à la durée qui minimise C(n).
> - Coût marginal de l'année k : R(k − 1) − R(k) + Eₖ ; remplacer quand il dépasse le coût moyen minimal.
> - Comparer des engins de durées différentes par leur coût annuel ; actualiser pour les longues durées.`,
 sujet:{titre:"Renouvellement du matériel : quand remplacer une chargeuse ?", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une entreprise de terrassement de Bouaké a acheté une chargeuse **40 M F**. Elle se demande au bout de combien d'années la remplacer.

| Année k | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Valeur de revente en fin d'année k (M F) | 28 | 20 | 14 | 10 | 7 | 5 |
| Entretien et réparations de l'année k (M F) | 2 | 3 | 5 | 7 | 10 | 13 |

On néglige l'actualisation et l'inflation.

### Partie A — Coûts cumulés (8 points)
1. Pour une durée de détention de k ans, exprimer le coût total : achat − revente + entretiens cumulés. (2 pts)
2. Calculer ce coût total pour k = 1 à 6. (6 pts)

### Partie B — Durée optimale (6 points)
3. Calculer le coût moyen annuel pour chaque durée. (3 pts)
4. En déduire la durée optimale de remplacement. (3 pts)

### Partie C — Discussion (6 points)
5. Pourquoi le coût moyen annuel commence-t-il par diminuer puis augmente-t-il ? (2 pts)
6. Quels éléments non chiffrés peuvent pousser à remplacer plus tôt (ou plus tard) ? (2 pts)
7. Comment intégrer l'actualisation dans ce calcul ? (2 pts)`,
  corrige:`### Partie A — Coûts (8 pts)
1. **CT(k) = 40 − R(k) + Σ entretiens des années 1 à k**. *(2 pts)*
2. *(6 pts)*

| k | Revente | Entretiens cumulés | Coût total | Coût moyen annuel |
|---|---|---|---|---|
| 1 | 28 | 2 | 14 | 14,00 |
| 2 | 20 | 5 | 25 | 12,50 |
| 3 | 14 | 10 | 36 | 12,00 |
| 4 | 10 | 17 | 47 | **11,75** |
| 5 | 7 | 27 | 60 | 12,00 |
| 6 | 5 | 40 | 75 | 12,50 |

### Partie B — Optimum (6 pts)
3. Voir la dernière colonne. *(3 pts)*
4. Coût moyen minimal : **11,75 M F/an** pour **k = 4 ans** → remplacer la chargeuse **au bout de 4 ans**. *(3 pts)*

### Partie C — Discussion (6 pts)
5. Au début, la perte de valeur (achat − revente) est **étalée** sur plus d'années ; ensuite, les **entretiens** qui augmentent vite l'emportent. *(2 pts)*
6. Plus tôt : pannes qui immobilisent les chantiers, nouvelles normes, technologie plus économe, image de l'entreprise ; plus tard : trésorerie insuffisante, faible utilisation de l'engin, bon état réel. *(2 pts)*
7. On ramène toutes les dépenses et la revente à la date d'achat (valeurs actuelles), puis on compare des **annuités équivalentes** (coût annuel constant de même valeur actuelle). *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier la valeur de revente.
> - Comparer des coûts totaux au lieu de coûts moyens annuels.
> - Garder un engin « parce qu'il est payé » sans compter ses réparations et ses pannes.`},
 exercices:[
  {t:"Coût moyen d'une année donnée", d:1, e:`Une bétonnière achetée 12 M F est revendue 4,5 M F après 3 ans ; l'entretien a coûté 0,5 ; 1 et 1,8 M F les trois années.
Calculer son coût moyen annuel sur 3 ans.`, c:`C(3) = (12 − 4,5 + 0,5 + 1 + 1,8)/3 = (7,5 + 3,3)/3 = 10,8/3 = **3,6 M F par an**.`},
  {t:"Durée optimale de remplacement", d:2, e:`Même bétonnière : reventes après 1 à 5 ans : 8 ; 6 ; 4,5 ; 3,5 ; 2,5 M F ; entretiens annuels : 0,5 ; 1 ; 1,8 ; 2,8 ; 4 M F.
Déterminer la durée optimale de remplacement.`, c:`C(1) = (12 − 8 + 0,5)/1 = **4,50** ; C(2) = (6 + 1,5)/2 = **3,75** ; C(3) = (7,5 + 3,3)/3 = **3,60** ; C(4) = (8,5 + 6,1)/4 = **3,65** ; C(5) = (9,5 + 10,1)/5 = **3,92**.
Minimum : **3 ans**, 3,6 M F par an.`},
  {t:"Raisonnement marginal", d:2, e:`Pour la bétonnière de l'exercice précédent, calculer le coût marginal de la 4ᵉ année et vérifier la règle de remplacement.`, c:`m(4) = R(3) − R(4) + E₄ = (4,5 − 3,5) + 2,8 = **3,8 M F**.
3,8 > C(3) = 3,6 : garder la bétonnière une 4ᵉ année coûterait plus que la moyenne optimale → on la **remplace après 3 ans** ✓.`},
  {t:"Comparer deux engins", d:2, e:`Engin M1 : 18 M F, dure 6 ans, revente 3 M F, entretien moyen 1,2 M F/an. Engin M2 : 12 M F, dure 4 ans, revente 2 M F, entretien moyen 1,8 M F/an.
Lequel est le plus économique (sans actualisation) ?`, c:`M1 : (18 − 3)/6 + 1,2 = 2,5 + 1,2 = **3,7 M F/an**.
M2 : (12 − 2)/4 + 1,8 = 2,5 + 1,8 = **4,3 M F/an**.
**M1** est plus économique malgré un prix d'achat plus élevé.`},
  {t:"Annuité équivalente avec actualisation", d:3, e:`Une chargeuse coûte 30 M F, dure 5 ans et sera revendue 5 M F. Taux d'actualisation : 10 %. Entretien : 2 M F par an.
Calculer le coût annuel équivalent.`, c:`Valeur actuelle de la revente : 5/1,1⁵ = 5/1,611 = **3,10 M F** → A − R actualisée = **26,90 M F**.
Facteur d'annuité : 0,10/(1 − 1,1⁻⁵) = 0,10/0,379 = **0,2638**.
Annuité : 26,90 × 0,2638 = **7,09 M F** ; avec l'entretien : **9,09 M F par an**. C'est ce montant qu'il faut comparer à un tarif de location annuel.`}
 ],
 quiz:[
  {q:"Le coût moyen annuel d'un engin gardé n ans est :", o:["[A − R(n) + Σ Eₖ]/n","A/n","Σ Eₖ","A − R(n)"], r:0, e:"Perte de valeur + entretiens, par an."},
  {q:"Avec l'âge, le coût d'entretien d'un engin :", o:["Augmente","Diminue","Reste nul","Devient négatif"], r:0, e:"Usure, pannes."},
  {q:"On remplace un engin quand le coût marginal de l'année suivante :", o:["Dépasse le coût moyen minimal","Est nul","Est inférieur au coût moyen","Égale le prix d'achat"], r:0, e:"Garder coûterait plus cher."},
  {q:"Pour comparer deux engins de durées de vie différentes, on compare :", o:["Leurs coûts annuels","Leurs prix d'achat","Leurs coûts totaux","Leurs couleurs"], r:0, e:"Même base de temps."},
  {q:"L'actualisation traduit le fait que :", o:["Un franc aujourd'hui vaut plus qu'un franc dans le futur","Les prix baissent toujours","L'entretien est gratuit","La revente est nulle"], r:0, e:"Coût de l'argent dans le temps."}
 ]}
]});
