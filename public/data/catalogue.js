/* Fichier généré par outils/catalogue.mjs — ne pas modifier à la main.
   Liste des matières et des chapitres ; le contenu est dans data/cours/<matière>.js */
A.addMatiere({id:"acou", titre:"Acoustique du bâtiment", court:"Acoustique", groupe:"phys", icone:"sound", couleur:"#0E8C95", niveau:"Intermédiaire", heures:14, ordre:3, prerequis:["sp"], resume:"Le son et les décibels, isolation aux bruits aériens et aux bruits de choc, correction acoustique des salles et bonnes pratiques de conception.", objectifs:[
  "Calculer et additionner des niveaux sonores en décibels",
  "Appliquer la loi de masse pour choisir une paroi",
  "Traiter les bruits d'impact et d'équipements",
  "Calculer un temps de réverbération (formule de Sabine)"
 ], applications:[
  "Isolation entre deux logements d'un immeuble",
  "Chambre côté rue",
  "Salle de classe, salle de réunion, lieu de culte",
  "Bruit des groupes électrogènes et climatiseurs"
 ], src:"data/cours/acou.js?v=730f3f60", chapitres:[
  {id:"acou-1", niv:1, titre:"Le son et les décibels", duree:25, nq:4, nex:0},
  {id:"acou-5", niv:1, titre:"Les bruits du quotidien et la gêne", duree:20, nq:4, nex:0},
  {id:"acou-6", niv:1, titre:"Choisir ses matériaux pour le confort acoustique", duree:20, nq:4, nex:0},
  {id:"acou-2", niv:2, titre:"Isolation aux bruits aériens", duree:30, nq:4, nex:0},
  {id:"acou-3", niv:2, titre:"Bruits de choc et d'équipements", duree:20, nq:4, nex:0},
  {id:"acou-4", niv:2, titre:"Correction acoustique et réverbération", duree:25, nq:4, nex:0},
  {id:"acou-7", niv:3, titre:"Isolement entre locaux : transmissions latérales et DnT", duree:30, nq:4, nex:0},
  {id:"acou-8", niv:3, titre:"Acoustique des salles : classes, lieux de culte, auditoriums", duree:30, nq:4, nex:0},
  {id:"acou-9", niv:3, titre:"Bruit de l'environnement : routes, chantiers et protections", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"ba", titre:"Béton armé", court:"Béton armé", groupe:"struct", icone:"column", couleur:"#14202E", niveau:"Intermédiaire", heures:100, ordre:3, prerequis:["rdm", "mat"], resume:"Du principe du béton armé au plan de ferraillage : matériaux, états limites, descente de charges, dispositions constructives, tirants, poteaux, poutres (ELU, ELS, sections en T, effort tranchant), dalles, fondations, poutres continues, escaliers, voiles, flexion composée et étude complète d'un bâtiment, selon le BAEL 91 et l'Eurocode 2.", objectifs:[
  "Connaître les caractéristiques de calcul du béton et des aciers",
  "Établir les combinaisons d'actions et faire la descente de charges d'un bâtiment",
  "Respecter enrobages, ancrages, recouvrements et espacements",
  "Dimensionner tirants, poteaux, poutres rectangulaires et en T à l'ELU et vérifier l'ELS",
  "Calculer les armatures d'effort tranchant et leur répartition",
  "Dimensionner dalles, semelles, longrines, escaliers et murs",
  "Calculer une poutre continue (méthode forfaitaire, Caquot) et arrêter les barres",
  "Produire un plan de ferraillage avec sa nomenclature"
 ], applications:[
  "Ferraillage complet d'une maison ou d'un immeuble R+2",
  "Plans de ferraillage et nomenclatures d'aciers",
  "Contrôle du ferraillage sur chantier avant coulage",
  "Lecture et vérification d'une note de calcul de bureau d'études"
 ], src:"data/cours/ba.js?v=81deb1a7", chapitres:[
  {id:"ba-1", niv:1, titre:"Principe du béton armé et caractéristiques des matériaux", duree:60, nq:5, nex:5},
  {id:"ba-2", niv:1, titre:"États limites, actions et combinaisons", duree:55, nq:5, nex:5},
  {id:"ba-11", niv:1, titre:"Descente de charges d'un bâtiment", duree:70, nq:5, nex:5},
  {id:"ba-3", niv:1, titre:"Dispositions constructives : enrobage, espacements, sections minimales", duree:55, nq:5, nex:5},
  {id:"ba-12", niv:1, titre:"Adhérence, ancrages et recouvrements", duree:55, nq:5, nex:5},
  {id:"ba-8", niv:1, titre:"Lire un plan de ferraillage, façonner et contrôler les aciers", duree:50, nq:5, nex:5},
  {id:"ba-13", niv:2, titre:"Tirants : pièces en traction simple", duree:45, nq:5, nex:4},
  {id:"ba-4", niv:2, titre:"Poteaux en compression centrée", duree:70, nq:5, nex:5},
  {id:"ba-5", niv:2, titre:"Flexion simple à l'ELU : section rectangulaire", duree:80, nq:5, nex:5},
  {id:"ba-14", niv:2, titre:"Flexion simple à l'ELS : contraintes et fissuration", duree:65, nq:5, nex:4},
  {id:"ba-15", niv:2, titre:"Poutres en T : la dalle participe à la résistance", duree:60, nq:5, nex:4},
  {id:"ba-9", niv:2, titre:"Effort tranchant : cadres, étriers et vérifications d'appui", duree:70, nq:5, nex:5},
  {id:"ba-6", niv:2, titre:"Les dalles pleines : portant dans un sens ou dans deux sens", duree:75, nq:5, nex:5},
  {id:"ba-7", niv:2, titre:"Fondations superficielles : semelles isolées et filantes", duree:75, nq:5, nex:5},
  {id:"ba-16", niv:2, titre:"Poutres continues : méthode forfaitaire, méthode de Caquot et arrêt des barres", duree:75, nq:5, nex:4},
  {id:"ba-17", niv:3, titre:"Planchers à corps creux : poutrelles et dalle de compression", duree:60, nq:5, nex:4},
  {id:"ba-18", niv:3, titre:"Semelles excentrées, longrines et radiers", duree:65, nq:5, nex:4},
  {id:"ba-19", niv:3, titre:"Escaliers, paliers et balcons", duree:65, nq:5, nex:4},
  {id:"ba-20", niv:3, titre:"Voiles et murs de soutènement en béton armé", duree:65, nq:5, nex:4},
  {id:"ba-21", niv:3, titre:"Flexion composée : poteaux de portique et éléments excentrés", duree:70, nq:5, nex:4},
  {id:"ba-22", niv:3, titre:"Flèches et durabilité : vérifications de service", duree:60, nq:5, nex:4},
  {id:"ba-23", niv:3, titre:"Étude complète d'un bâtiment : du plan au ferraillage (BAEL et Eurocode 2)", duree:80, nq:5, nex:4}
 ]});
A.addMatiere({id:"chant", titre:"Organisation et gestion de chantier", court:"Gestion chantier", groupe:"gest", icone:"clip", couleur:"#B8700A", niveau:"Intermédiaire", heures:24, ordre:1, prerequis:["tech"], resume:"Documents du marché, installation de chantier, planification, rendements, gestion des ressources et approvisionnements, qualité, sécurité, environnement et suivi financier.", objectifs:[
  "Connaître les pièces d'un marché et les documents de chantier",
  "Organiser l'installation de chantier",
  "Établir un planning à partir des quantités et des rendements",
  "Gérer main-d'œuvre, matériel et approvisionnements",
  "Appliquer les règles de qualité, de sécurité et de suivi financier"
 ], applications:[
  "Préparer l'ouverture d'un chantier",
  "Planifier une maison ou un petit immeuble",
  "Tenir le journal et les réunions de chantier",
  "Établir une situation de travaux"
 ], src:"data/cours/chant.js?v=115734f5", chapitres:[
  {id:"chant-1", niv:1, titre:"Les documents du marché et du chantier", duree:25, nq:4, nex:0},
  {id:"chant-2", niv:1, titre:"L'installation de chantier", duree:25, nq:4, nex:0},
  {id:"chant-5", niv:1, titre:"Qualité, sécurité et environnement", duree:30, nq:4, nex:0},
  {id:"chant-3", niv:2, titre:"Planification : rendements et durées", duree:30, nq:4, nex:0},
  {id:"chant-4", niv:2, titre:"Gestion des ressources et approvisionnements", duree:25, nq:4, nex:0},
  {id:"chant-6", niv:2, titre:"Suivi financier et réception des travaux", duree:25, nq:4, nex:0},
  {id:"chant-7", niv:3, titre:"Management de projet : équipes, réunions et litiges", duree:30, nq:4, nex:0},
  {id:"chant-8", niv:3, titre:"Méthodes de construction : coffrages, rotations et cadences", duree:30, nq:4, nex:0},
  {id:"chant-9", niv:3, titre:"Gestion des risques, HSE et sinistres", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"eco", titre:"Économie du bâtiment", court:"Économie", groupe:"gest", icone:"coins", couleur:"#1E9B5E", niveau:"Intermédiaire", heures:20, ordre:2, prerequis:["metre"], resume:"Coût global d'une opération, sous-détail des prix, coefficient de vente, estimations par ratios, marchés et appels d'offres, rentabilité d'un projet immobilier.", objectifs:[
  "Décomposer le coût global d'une opération de construction",
  "Établir un sous-détail de prix et un prix de vente",
  "Estimer un projet aux différentes phases",
  "Comprendre les marchés, les appels d'offres et la révision des prix",
  "Évaluer la rentabilité d'une opération immobilière"
 ], applications:["Budget d'une maison individuelle", "Réponse à un appel d'offres", "Contrôle des devis d'entreprises", "Projet de location ou de vente d'appartements"], src:"data/cours/eco.js?v=8e3a5a60", chapitres:[
  {id:"eco-1", niv:1, titre:"Le coût global d'une opération", duree:25, nq:4, nex:0},
  {id:"eco-6", niv:1, titre:"Les bases : prix, coûts, marges et TVA", duree:25, nq:4, nex:0},
  {id:"eco-7", niv:1, titre:"Lire un devis et comparer des offres", duree:25, nq:4, nex:0},
  {id:"eco-2", niv:2, titre:"Le sous-détail de prix et le prix de vente", duree:35, nq:4, nex:0},
  {id:"eco-3", niv:2, titre:"Les méthodes d'estimation", duree:30, nq:4, nex:0},
  {id:"eco-4", niv:2, titre:"Marchés, appels d'offres et révision des prix", duree:30, nq:4, nex:0},
  {id:"eco-5", niv:3, titre:"Rentabilité d'un projet immobilier", duree:30, nq:4, nex:0},
  {id:"eco-8", niv:3, titre:"Financement : actualisation, VAN et TRI", duree:35, nq:4, nex:0},
  {id:"eco-9", niv:3, titre:"Contrôle des coûts : valeur acquise, avenants et réclamations", duree:35, nq:4, nex:0}
 ]});
A.addMatiere({id:"geo", titre:"Géotechnique", court:"Géotechnique", groupe:"sol", icone:"mountain", couleur:"#8B5A2B", niveau:"Intermédiaire", heures:75, ordre:1, prerequis:["mmc", "sp"], resume:"Connaître le sol pour bien fonder : paramètres d'état, sols tropicaux et lagunaires, reconnaissance, identification et classification, compactage, contraintes et eau dans le sol, cisaillement, capacité portante, tassements, essais in situ, pieux, poussée des terres, stabilité des pentes et amélioration des sols, avec applications et exercices corrigés.", objectifs:[
  "Calculer les paramètres d'état d'un sol (w, γ, γd, e, n, Sr)",
  "Reconnaître les principaux sols de Côte d'Ivoire et leurs pièges",
  "Identifier et classer un sol (granulométrie, Atterberg, VBS)",
  "Spécifier et contrôler un compactage (Proctor, CBR)",
  "Calculer les contraintes effectives et l'effet de l'eau",
  "Calculer la capacité portante et les tassements d'une fondation",
  "Interpréter les essais in situ et un rapport d'étude de sol",
  "Calculer la poussée des terres et vérifier un talus",
  "Choisir le type de fondation ou d'amélioration de sol adapté"
 ], applications:[
  "Lecture d'un rapport d'étude de sol",
  "Contrôle des remblais et des couches de forme",
  "Dimensionnement des semelles et choix des fondations",
  "Fouilles sous la nappe et rabattement",
  "Sols difficiles : vases lagunaires, argiles gonflantes, remblais, talus instables"
 ], src:"data/cours/geo.js?v=bc9e1ed3", chapitres:[
  {id:"geo-1", niv:1, titre:"Le sol : origine, constituants et paramètres d'état", duree:60, nq:5, nex:4},
  {id:"geo-10", niv:1, titre:"Les sols de Côte d'Ivoire et les sols difficiles", duree:45, nq:5, nex:3},
  {id:"geo-6", niv:1, titre:"Reconnaître les sols sur le terrain : puits, sondages et essais simples", duree:50, nq:5, nex:3},
  {id:"geo-7", niv:1, titre:"L'eau dans le sol : nappe, capillarité et drainage", duree:45, nq:5, nex:3},
  {id:"geo-2", niv:2, titre:"Identification des sols : granulométrie, Atterberg, VBS, équivalent de sable", duree:65, nq:5, nex:4},
  {id:"geo-11", niv:2, titre:"Classification des sols pour les terrassements et les chaussées", duree:50, nq:5, nex:3},
  {id:"geo-3", niv:2, titre:"Le compactage : essais Proctor, CBR et contrôle sur chantier", duree:65, nq:5, nex:4},
  {id:"geo-12", niv:2, titre:"Contraintes dans le sol : poids des terres, contrainte effective et diffusion des charges", duree:65, nq:5, nex:4},
  {id:"geo-13", niv:2, titre:"Écoulements, perméabilité et rabattement de nappe", duree:60, nq:5, nex:3},
  {id:"geo-4", niv:2, titre:"Résistance au cisaillement des sols", duree:65, nq:5, nex:4},
  {id:"geo-14", niv:3, titre:"Capacité portante des fondations superficielles", duree:70, nq:5, nex:5},
  {id:"geo-5", niv:3, titre:"Tassements et consolidation des sols", duree:70, nq:5, nex:5},
  {id:"geo-15", niv:3, titre:"Les essais in situ : pénétromètres, SPT, pressiomètre et essai de plaque", duree:65, nq:5, nex:5},
  {id:"geo-8", niv:3, titre:"Fondations profondes : pieux et micropieux", duree:70, nq:5, nex:5},
  {id:"geo-9", niv:3, titre:"Poussée et butée des terres, murs de soutènement", duree:70, nq:5, nex:5},
  {id:"geo-16", niv:3, titre:"Stabilité des talus et des pentes", duree:65, nq:5, nex:5},
  {id:"geo-17", niv:3, titre:"Amélioration et renforcement des sols", duree:60, nq:5, nex:5},
  {id:"geo-18", niv:3, titre:"La mission géotechnique et le rapport de sol", duree:50, nq:5, nex:5}
 ]});
A.addMatiere({id:"mat", titre:"Matériaux de construction", court:"Matériaux", groupe:"constr", icone:"brick", couleur:"#B85C38", niveau:"Débutant", heures:24, ordre:1, prerequis:["sp"], resume:"Granulats, ciments, bétons, mortiers, agglos, aciers, bois et matériaux locaux : choisir, doser, contrôler et bien mettre en œuvre.", objectifs:[
  "Choisir et contrôler les granulats",
  "Connaître les ciments et leurs classes",
  "Doser un béton, un mortier et un enduit",
  "Contrôler la qualité des agglos et des aciers",
  "Utiliser les bois et matériaux locaux"
 ], applications:["Commande des matériaux d'une maison", "Contrôle à la réception (sable, ciment, fers)", "Fabrication des agglos sur chantier", "Choix d'un bois de charpente"], src:"data/cours/mat.js?v=df77576f", chapitres:[
  {id:"mat-1", niv:1, titre:"Les granulats : sable et gravier", duree:25, nq:4, nex:0},
  {id:"mat-2", niv:1, titre:"Les liants : ciments, chaux et plâtre", duree:25, nq:4, nex:0},
  {id:"mat-4", niv:1, titre:"Mortiers, enduits et agglos", duree:30, nq:4, nex:0},
  {id:"mat-3", niv:2, titre:"Le béton : composition et contrôle", duree:35, nq:5, nex:0},
  {id:"mat-5", niv:2, titre:"Les aciers pour béton armé", duree:25, nq:4, nex:0},
  {id:"mat-6", niv:2, titre:"Bois, métaux, verre et matériaux locaux", duree:25, nq:4, nex:0},
  {id:"mat-7", niv:3, titre:"Formuler un béton : la méthode de Dreux-Gorisse", duree:40, nq:4, nex:0},
  {id:"mat-8", niv:3, titre:"Durabilité et pathologies des matériaux", duree:35, nq:4, nex:0},
  {id:"mat-9", niv:3, titre:"Matériaux écologiques et innovants", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"math", titre:"Mathématiques", court:"Maths", groupe:"fond", icone:"sigma", couleur:"#2F6FDB", niveau:"Débutant", heures:24, ordre:1, resume:"Calcul numérique, unités, géométrie, trigonométrie, volumes, équations et proportionnalité : les outils de calcul de tous les jours sur un chantier.", objectifs:[
  "Maîtriser les puissances de 10, les unités et les conversions",
  "Calculer aires, périmètres et volumes d'ouvrages",
  "Utiliser Pythagore et la trigonométrie (pentes, toitures, escaliers)",
  "Résoudre des équations et lire une échelle de plan"
 ], applications:[
  "Surfaces de carrelage et de peinture",
  "Volumes de béton et de fouilles",
  "Pente d'une toiture, d'une rampe ou d'une canalisation",
  "Lecture des plans au 1/50 et au 1/100"
 ], src:"data/cours/math.js?v=cea7e7aa", chapitres:[
  {id:"math-1", niv:1, titre:"Calcul numérique, unités et conversions", duree:25, nq:5, nex:0},
  {id:"math-2", niv:1, titre:"Géométrie plane : aires et périmètres", duree:25, nq:4, nex:0},
  {id:"math-6", niv:1, titre:"Proportionnalité, échelles et statistiques", duree:25, nq:4, nex:0},
  {id:"math-3", niv:2, titre:"Pythagore et trigonométrie", duree:30, nq:5, nex:0},
  {id:"math-4", niv:2, titre:"Volumes : béton, fouilles et déblais", duree:30, nq:4, nex:0},
  {id:"math-5", niv:2, titre:"Équations, fonctions et systèmes", duree:30, nq:4, nex:0},
  {id:"math-7", niv:3, titre:"Trigonométrie appliquée aux ouvrages", duree:30, nq:4, nex:0},
  {id:"math-8", niv:3, titre:"Mathématiques financières : intérêts et emprunts", duree:30, nq:4, nex:0},
  {id:"math-9", niv:3, titre:"Statistiques du contrôle qualité", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"mdf", titre:"Mécanique des fluides", court:"Méca. fluides", groupe:"phys", icone:"wave", couleur:"#2F6FDB", niveau:"Intermédiaire", heures:20, ordre:4, prerequis:["sp", "math"], resume:"Pression, hydrostatique, débit, Bernoulli, pertes de charge, réseaux d'eau potable, eaux pluviales et assainissement autonome.", objectifs:[
  "Calculer une pression et une poussée hydrostatique",
  "Appliquer la conservation du débit et Bernoulli",
  "Estimer les pertes de charge et choisir un diamètre",
  "Dimensionner gouttières, descentes et caniveaux",
  "Connaître les règles d'une fosse septique"
 ], applications:["Réservoirs, bâches à eau et châteaux d'eau", "Réseau d'alimentation d'une maison", "Évacuation des eaux pluviales de toiture", "Fosse septique et puisard"], src:"data/cours/mdf.js?v=bb741b88", chapitres:[
  {id:"mdf-1", niv:1, titre:"Propriétés des fluides et pression", duree:20, nq:4, nex:0},
  {id:"mdf-2", niv:1, titre:"Hydrostatique : pression et poussées", duree:25, nq:4, nex:0},
  {id:"mdf-6", niv:1, titre:"L'eau dans la maison : réseaux, appareils et règles simples", duree:25, nq:4, nex:0},
  {id:"mdf-3", niv:2, titre:"Débit, continuité et Bernoulli", duree:30, nq:4, nex:0},
  {id:"mdf-4", niv:2, titre:"Pertes de charge et réseaux d'eau potable", duree:30, nq:4, nex:0},
  {id:"mdf-5", niv:2, titre:"Eaux pluviales et assainissement", duree:30, nq:4, nex:0},
  {id:"mdf-7", niv:3, titre:"Pompes et surpresseurs : HMT, courbes et choix", duree:30, nq:4, nex:0},
  {id:"mdf-8", niv:3, titre:"Écoulements à surface libre : caniveaux et dalots", duree:30, nq:4, nex:0},
  {id:"mdf-9", niv:3, titre:"Coup de bélier et protection des réseaux", duree:25, nq:4, nex:0}
 ]});
A.addMatiere({id:"metre", titre:"Métré", court:"Métré", groupe:"gest", icone:"list", couleur:"#2D6FB5", niveau:"Débutant", heures:26, ordre:3, prerequis:["math", "tech"], resume:"Règles du métré, terrassements, fondations, béton armé, maçonnerie, enduits, revêtements, menuiseries et peinture, jusqu'au devis quantitatif et estimatif.", objectifs:[
  "Appliquer les règles et conventions du métré",
  "Calculer les quantités de chaque lot avec la bonne unité",
  "Établir le sous-détail des matériaux (ciment, sable, gravier, acier, agglos)",
  "Construire un DQE et son récapitulatif"
 ], applications:[
  "Avant-métré d'une maison à partir des plans",
  "Commande des matériaux",
  "Vérification d'un devis d'entreprise",
  "Utilisation de l'outil Métré de la plateforme"
 ], src:"data/cours/metre.js?v=a782faff", chapitres:[
  {id:"metre-1", niv:1, titre:"Principes et règles du métré", duree:25, nq:4, nex:0},
  {id:"metre-2", niv:1, titre:"Terrassements et fondations", duree:30, nq:4, nex:0},
  {id:"metre-4", niv:1, titre:"Maçonnerie et enduits", duree:30, nq:4, nex:0},
  {id:"metre-3", niv:2, titre:"Béton armé : bétons, coffrages et aciers", duree:35, nq:4, nex:0},
  {id:"metre-5", niv:2, titre:"Revêtements, menuiseries et peinture", duree:25, nq:4, nex:0},
  {id:"metre-6", niv:2, titre:"Du métré au devis quantitatif et estimatif", duree:30, nq:4, nex:0},
  {id:"metre-7", niv:3, titre:"Métré des lots techniques : électricité, plomberie, climatisation", duree:30, nq:4, nex:0},
  {id:"metre-8", niv:3, titre:"Métré des VRD et des ouvrages extérieurs", duree:30, nq:4, nex:0},
  {id:"metre-9", niv:3, titre:"Attachements, situations et décomptes", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"mmc", titre:"Mécanique des milieux continus", court:"MMC", groupe:"struct", icone:"cube", couleur:"#5B6B7F", niveau:"Avancé", heures:20, ordre:1, prerequis:["om", "sp"], resume:"Contraintes, déformations, loi de Hooke, cercle de Mohr et critères de résistance : la base théorique de la RDM, du béton armé et de la géotechnique.", objectifs:[
  "Comprendre les hypothèses du milieu continu",
  "Décrire l'état de contrainte en un point et ses contraintes principales",
  "Relier contraintes et déformations par la loi de Hooke généralisée",
  "Utiliser le cercle de Mohr et les critères de Tresca, von Mises et Mohr-Coulomb"
 ], applications:[
  "Justification des formules de RDM",
  "Résistance des sols (Mohr-Coulomb)",
  "Vérification d'une pièce métallique sous efforts combinés",
  "Lecture des résultats d'un logiciel aux éléments finis"
 ], src:"data/cours/mmc.js?v=db256138", chapitres:[
  {id:"mmc-1", niv:1, titre:"Hypothèses et notion de milieu continu", duree:20, nq:4, nex:0},
  {id:"mmc-6", niv:1, titre:"Forces, contraintes et déformations en traction simple", duree:25, nq:4, nex:0},
  {id:"mmc-7", niv:1, titre:"Comportement des matériaux : essais de traction et de compression", duree:25, nq:4, nex:0},
  {id:"mmc-2", niv:2, titre:"Les contraintes", duree:30, nq:4, nex:0},
  {id:"mmc-3", niv:2, titre:"Les déformations", duree:25, nq:4, nex:0},
  {id:"mmc-4", niv:2, titre:"Loi de comportement élastique (Hooke)", duree:30, nq:4, nex:0},
  {id:"mmc-5", niv:3, titre:"Critères de résistance", duree:25, nq:4, nex:0},
  {id:"mmc-8", niv:3, titre:"Contraintes planes et cercle de Mohr appliqué", duree:35, nq:4, nex:0},
  {id:"mmc-9", niv:3, titre:"Introduction aux éléments finis", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"om", titre:"Outils mathématiques", court:"Outils maths", groupe:"fond", icone:"fx", couleur:"#5B45A8", niveau:"Intermédiaire", heures:22, ordre:2, prerequis:["math"], resume:"Dérivées, intégrales, vecteurs, matrices et équations différentielles : les outils de l'ingénieur pour la RDM, la MMC et le calcul des structures.", objectifs:[
  "Dériver une fonction et trouver un extremum (moment maximal)",
  "Intégrer pour obtenir une résultante, un centre de gravité, un moment d'inertie",
  "Manipuler vecteurs, produits scalaire et vectoriel",
  "Résoudre un système linéaire par la méthode de Gauss",
  "Comprendre les équations différentielles de la déformée et des vibrations"
 ], applications:[
  "Position du moment maximal dans une poutre",
  "Moment d'inertie d'une section",
  "Moments des forces et équilibre",
  "Calcul matriciel des structures (logiciels de calcul)"
 ], src:"data/cours/om.js?v=06ed648f", chapitres:[
  {id:"om-3", niv:1, titre:"Vecteurs, forces et moments", duree:30, nq:4, nex:0},
  {id:"om-6", niv:1, titre:"Fonctions usuelles et lecture de graphiques", duree:25, nq:4, nex:0},
  {id:"om-7", niv:1, titre:"Taux de variation et notion de dérivée", duree:25, nq:4, nex:0},
  {id:"om-1", niv:2, titre:"Dérivées et recherche d'extremum", duree:30, nq:4, nex:0},
  {id:"om-2", niv:2, titre:"Intégrales : résultantes, centres de gravité, inerties", duree:35, nq:4, nex:0},
  {id:"om-4", niv:2, titre:"Matrices et systèmes linéaires", duree:30, nq:4, nex:0},
  {id:"om-5", niv:3, titre:"Équations différentielles : déformées et vibrations", duree:30, nq:4, nex:0},
  {id:"om-8", niv:3, titre:"Méthodes numériques : Newton, trapèzes et Simpson", duree:30, nq:4, nex:0},
  {id:"om-9", niv:3, titre:"Calcul matriciel des structures : la méthode des déplacements", duree:35, nq:4, nex:0}
 ]});
A.addMatiere({id:"pb", titre:"Physique du bâtiment", court:"Physique bât.", groupe:"phys", icone:"sun", couleur:"#D9921B", niveau:"Intermédiaire", heures:18, ordre:1, prerequis:["sp"], resume:"Climat, confort, humidité, éclairage, ventilation et sécurité incendie : concevoir des bâtiments sains, frais et sûrs en climat tropical.", objectifs:[
  "Adapter un bâtiment au climat tropical humide",
  "Prévenir la condensation et les remontées d'humidité",
  "Dimensionner l'éclairage naturel et la ventilation",
  "Connaître les principes de la sécurité incendie"
 ], applications:["Orientation et protections solaires", "Arases étanches et traitement de l'humidité", "Taille des fenêtres", "Évacuation et compartimentage des immeubles"], src:"data/cours/pb.js?v=ddc2206c", chapitres:[
  {id:"pb-1", niv:1, titre:"Le bâtiment et son climat", duree:25, nq:4, nex:0},
  {id:"pb-3", niv:1, titre:"Éclairage naturel et artificiel", duree:20, nq:4, nex:0},
  {id:"pb-6", niv:1, titre:"Le confort de l'occupant : chaleur, humidité, air et lumière", duree:25, nq:4, nex:0},
  {id:"pb-2", niv:2, titre:"L'humidité dans le bâtiment", duree:30, nq:4, nex:0},
  {id:"pb-4", niv:2, titre:"Ventilation et qualité de l'air", duree:20, nq:4, nex:0},
  {id:"pb-5", niv:2, titre:"Sécurité incendie", duree:25, nq:4, nex:0},
  {id:"pb-7", niv:3, titre:"Air humide, point de rosée et condensation", duree:30, nq:4, nex:0},
  {id:"pb-8", niv:3, titre:"Conception bioclimatique en climat tropical humide", duree:35, nq:4, nex:0},
  {id:"pb-9", niv:3, titre:"Énergie solaire photovoltaïque : dimensionner une installation", duree:35, nq:4, nex:0}
 ]});
A.addMatiere({id:"rdm", titre:"Résistance des matériaux", court:"RDM", groupe:"struct", icone:"beam", couleur:"#2F6FDB", niveau:"Intermédiaire", heures:90, ordre:2, prerequis:["math", "sp", "om"], resume:"Des charges aux contraintes : équilibre, réactions d'appuis, efforts N, V, M, diagrammes, flexion, flèches, flambement, structures hyperstatiques, portiques et méthode de Cross, avec applications et exercices corrigés.", objectifs:[
  "Évaluer les charges qui s'appliquent sur un ouvrage et les transmettre jusqu'aux appuis",
  "Écrire l'équilibre d'un solide et calculer les réactions d'appuis d'une structure isostatique",
  "Calculer contraintes et déformations en traction, compression, cisaillement et torsion",
  "Calculer les caractéristiques géométriques d'une section (G, I, W, i)",
  "Tracer les diagrammes d'effort tranchant et de moment fléchissant de toute poutre isostatique",
  "Dimensionner une poutre en flexion (contraintes normales et tangentielles) et calculer sa flèche",
  "Vérifier un élément comprimé au flambement",
  "Résoudre une poutre continue ou un portique hyperstatique (forces, trois moments, Cross)"
 ], applications:[
  "Choix d'un profilé métallique (IPE, HEA) ou d'une section de bois",
  "Vérification d'un linteau, d'une poutre ou d'un poteau",
  "Calcul des sollicitations avant le ferraillage en béton armé",
  "Fermes de toiture en treillis, hangars et portiques",
  "Contrôle des résultats d'un logiciel de calcul de structures"
 ], src:"data/cours/rdm.js?v=c0572f13", chapitres:[
  {id:"rdm-7", niv:1, titre:"Introduction : forces, charges et unités", duree:50, nq:5, nex:5},
  {id:"rdm-10", niv:1, titre:"Moments, résultantes et équilibre d'un solide", duree:55, nq:5, nex:5},
  {id:"rdm-1", niv:1, titre:"Liaisons, appuis et calcul des réactions", duree:60, nq:5, nex:5},
  {id:"rdm-11", niv:1, titre:"Contraintes, déformations et loi de Hooke", duree:55, nq:5, nex:5},
  {id:"rdm-4", niv:1, titre:"Traction et compression simples", duree:60, nq:5, nex:5},
  {id:"rdm-12", niv:1, titre:"Cisaillement simple et assemblages", duree:55, nq:5, nex:5},
  {id:"rdm-3", niv:2, titre:"Caractéristiques géométriques des sections", duree:65, nq:5, nex:5},
  {id:"rdm-2", niv:2, titre:"Efforts internes N, V, M : la méthode des coupures", duree:60, nq:5, nex:5},
  {id:"rdm-13", niv:2, titre:"Diagrammes de V et M des poutres isostatiques", duree:70, nq:5, nex:5},
  {id:"rdm-5", niv:2, titre:"Flexion simple : contraintes normales et dimensionnement", duree:65, nq:5, nex:5},
  {id:"rdm-14", niv:2, titre:"Contraintes de cisaillement en flexion (Jourawski)", duree:50, nq:5, nex:5},
  {id:"rdm-15", niv:2, titre:"Déformée et flèches des poutres", duree:70, nq:5, nex:5},
  {id:"rdm-16", niv:2, titre:"Treillis isostatiques : méthode des nœuds et de Ritter", duree:60, nq:5, nex:5},
  {id:"rdm-17", niv:2, titre:"Torsion des arbres et des poutres", duree:50, nq:5, nex:5},
  {id:"rdm-18", niv:3, titre:"Sollicitations composées : flexion composée et flexion déviée", duree:65, nq:5, nex:5},
  {id:"rdm-6", niv:3, titre:"Le flambement des éléments comprimés", duree:70, nq:5, nex:5},
  {id:"rdm-19", niv:3, titre:"Structures hyperstatiques : la méthode des forces", duree:75, nq:5, nex:5},
  {id:"rdm-8", niv:3, titre:"Poutres continues : le théorème des trois moments", duree:70, nq:5, nex:5},
  {id:"rdm-20", niv:3, titre:"Méthodes énergétiques : Castigliano, Menabrea et intégrales de Mohr", duree:70, nq:5, nex:5},
  {id:"rdm-9", niv:3, titre:"Portiques et cadres", duree:70, nq:5, nex:5},
  {id:"rdm-21", niv:3, titre:"La méthode de Cross (distribution des moments)", duree:75, nq:5, nex:4},
  {id:"rdm-22", niv:3, titre:"Lignes d'influence et charges mobiles", duree:55, nq:5, nex:5}
 ]});
A.addMatiere({id:"ro", titre:"Recherche opérationnelle", court:"Recherche op.", groupe:"fond", icone:"network", couleur:"#8E4FD1", niveau:"Intermédiaire", heures:20, ordre:4, prerequis:["math"], resume:"Modéliser et optimiser : programmation linéaire, ordonnancement PERT et MPM, chemin critique, transport, affectation et gestion des stocks appliqués au chantier.", objectifs:[
  "Modéliser un problème de décision (variables, contraintes, objectif)",
  "Résoudre graphiquement un programme linéaire",
  "Construire un réseau PERT et trouver le chemin critique",
  "Optimiser des transports, des affectations et des stocks"
 ], applications:[
  "Planning et délais d'un chantier",
  "Répartition des camions entre carrières et chantiers",
  "Affectation des équipes aux tâches",
  "Quantité économique de commande de ciment"
 ], src:"data/cours/ro.js?v=32833946", chapitres:[
  {id:"ro-1", niv:1, titre:"Modéliser un problème de décision", duree:20, nq:4, nex:0},
  {id:"ro-7", niv:1, titre:"Organiser des tâches : antériorités et Gantt", duree:25, nq:4, nex:0},
  {id:"ro-8", niv:1, titre:"Graphes et plus court chemin", duree:25, nq:4, nex:0},
  {id:"ro-3", niv:2, titre:"Ordonnancement : le PERT et le chemin critique", duree:35, nq:4, nex:0},
  {id:"ro-4", niv:2, titre:"Méthode des potentiels, Gantt et lissage", duree:25, nq:4, nex:0},
  {id:"ro-6", niv:2, titre:"Gestion des stocks : la formule de Wilson", duree:25, nq:4, nex:0},
  {id:"ro-2", niv:3, titre:"Programmation linéaire", duree:35, nq:4, nex:0},
  {id:"ro-5", niv:3, titre:"Problèmes de transport et d'affectation", duree:30, nq:4, nex:0},
  {id:"ro-9", niv:3, titre:"Décider dans l'incertain : risques et simulation", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"sp", titre:"Sciences physiques", court:"Physique-chimie", groupe:"fond", icone:"atom", couleur:"#0E8C95", niveau:"Débutant", heures:22, ordre:3, resume:"Grandeurs et unités, masse et poids, forces et équilibre, énergie et puissance, électricité et chimie des matériaux de construction.", objectifs:[
  "Utiliser le système international d'unités",
  "Distinguer masse, poids et masse volumique",
  "Appliquer l'équilibre d'un solide (forces et moments)",
  "Calculer énergie, puissance et grandeurs électriques",
  "Comprendre la prise du ciment et la corrosion des aciers"
 ], applications:[
  "Poids propre des éléments (béton, acier, agglos)",
  "Puissance d'une pompe ou d'une bétonnière",
  "Choix d'une section de câble électrique",
  "Protection des armatures contre la rouille"
 ], src:"data/cours/sp.js?v=a8332186", chapitres:[
  {id:"sp-1", niv:1, titre:"Grandeurs physiques et unités SI", duree:20, nq:4, nex:0},
  {id:"sp-2", niv:1, titre:"Masse, poids et masse volumique", duree:25, nq:4, nex:0},
  {id:"sp-3", niv:1, titre:"Forces et équilibre d'un solide", duree:30, nq:4, nex:0},
  {id:"sp-4", niv:2, titre:"Énergie, travail et puissance", duree:25, nq:4, nex:0},
  {id:"sp-5", niv:2, titre:"Électricité appliquée au bâtiment", duree:30, nq:4, nex:0},
  {id:"sp-6", niv:2, titre:"Chimie des matériaux : ciment, corrosion, durabilité", duree:25, nq:4, nex:0},
  {id:"sp-7", niv:3, titre:"Électricité avancée : triphasé, chute de tension, sections", duree:30, nq:4, nex:0},
  {id:"sp-8", niv:3, titre:"Chaleur, changements d'état et dilatation", duree:25, nq:4, nex:0},
  {id:"sp-9", niv:3, titre:"Ondes : le son et la lumière", duree:25, nq:4, nex:0}
 ]});
A.addMatiere({id:"tech", titre:"Technologie de construction", court:"Technologie", groupe:"constr", icone:"hammer", couleur:"#E8752A", niveau:"Débutant", heures:26, ordre:2, resume:"Les acteurs d'un projet, les systèmes constructifs, fondations, maçonnerie, planchers, escaliers, toitures et second œuvre : comment se construit un bâtiment.", objectifs:[
  "Identifier les intervenants et les étapes d'un projet",
  "Distinguer les systèmes constructifs",
  "Connaître les ouvrages de gros œuvre et leur rôle",
  "Connaître les corps d'état du second œuvre"
 ], applications:[
  "Lire un descriptif de travaux",
  "Comprendre un plan d'exécution",
  "Organiser l'ordre d'intervention des corps d'état",
  "Dialoguer avec architectes, bureaux d'études et artisans"
 ], src:"data/cours/tech.js?v=40d4f876", chapitres:[
  {id:"tech-1", niv:1, titre:"Les acteurs et les étapes d'un projet", duree:25, nq:4, nex:0},
  {id:"tech-2", niv:1, titre:"Les systèmes constructifs", duree:25, nq:4, nex:0},
  {id:"tech-4", niv:1, titre:"Maçonnerie et murs", duree:25, nq:4, nex:0},
  {id:"tech-3", niv:2, titre:"Fondations et infrastructure", duree:25, nq:4, nex:0},
  {id:"tech-5", niv:2, titre:"Planchers, escaliers et toitures", duree:30, nq:4, nex:0},
  {id:"tech-6", niv:2, titre:"Le second œuvre", duree:25, nq:4, nex:0},
  {id:"tech-7", niv:3, titre:"L'étanchéité : terrasses, salles d'eau et sous-sols", duree:30, nq:4, nex:0},
  {id:"tech-8", niv:3, titre:"Construire en hauteur : immeubles et organisation technique", duree:35, nq:4, nex:0},
  {id:"tech-9", niv:3, titre:"Pathologies, diagnostic et réhabilitation", duree:35, nq:4, nex:0}
 ]});
A.addMatiere({id:"therm", titre:"Thermique du bâtiment", court:"Thermique", groupe:"phys", icone:"thermo", couleur:"#C8363B", niveau:"Intermédiaire", heures:18, ordre:2, prerequis:["sp", "pb"], resume:"Transferts de chaleur, résistance thermique des parois, ponts thermiques, apports solaires et climatisation : construire des bâtiments frais et économes.", objectifs:[
  "Distinguer conduction, convection et rayonnement",
  "Calculer la résistance R et le coefficient U d'une paroi",
  "Repérer et traiter les ponts thermiques",
  "Limiter les apports solaires",
  "Estimer la puissance de climatisation d'une pièce"
 ], applications:["Choix d'un isolant de toiture", "Comparaison agglos / BTC / brique", "Dimensionnement des climatiseurs", "Protections solaires des façades"], src:"data/cours/therm.js?v=b3c077ab", chapitres:[
  {id:"therm-1", niv:1, titre:"Chaleur, température et modes de transfert", duree:20, nq:4, nex:0},
  {id:"therm-6", niv:1, titre:"Matériaux isolants et inertie : les bases", duree:25, nq:4, nex:0},
  {id:"therm-7", niv:1, titre:"Le confort d'été : dix choix simples", duree:20, nq:4, nex:0},
  {id:"therm-2", niv:2, titre:"Conduction : résistance thermique et coefficient U", duree:30, nq:4, nex:0},
  {id:"therm-3", niv:2, titre:"Toitures, isolation et ponts thermiques", duree:25, nq:4, nex:0},
  {id:"therm-4", niv:2, titre:"Apports solaires et protections", duree:25, nq:4, nex:0},
  {id:"therm-5", niv:3, titre:"Bilan thermique et climatisation", duree:25, nq:4, nex:0},
  {id:"therm-8", niv:3, titre:"Régime variable : inertie, déphasage et amortissement", duree:30, nq:4, nex:0},
  {id:"therm-9", niv:3, titre:"Performance énergétique et consommation de climatisation", duree:30, nq:4, nex:0}
 ]});
A.addMatiere({id:"topo", titre:"Topographie", court:"Topographie", groupe:"sol", icone:"map", couleur:"#1E9B5E", niveau:"Intermédiaire", heures:80, ordre:2, prerequis:["math"], resume:"Mesurer, calculer et implanter : unités et échelles, instruments, distances, nivellement, angles, gisements et coordonnées, surfaces, implantation des bâtiments, profils, polygonation, station totale, GNSS, tracé routier et cubatures, avec applications et exercices corrigés.", objectifs:[
  "Utiliser les unités d'angles (grades, degrés) et les échelles des plans",
  "Mettre en station et utiliser niveau, théodolite, station totale et GNSS",
  "Mesurer des distances et appliquer les corrections",
  "Réaliser, calculer et compenser un nivellement",
  "Calculer gisements, distances, coordonnées et surfaces",
  "Implanter un bâtiment et contrôler l'implantation",
  "Calculer et compenser une polygonale",
  "Établir des profils et calculer des cubatures de terrassement",
  "Implanter une courbe circulaire de route"
 ], applications:[
  "Levé et plan topographique d'une parcelle",
  "Report du niveau ±0,00 et des niveaux de plateforme",
  "Implantation des axes et des poteaux d'un bâtiment",
  "Profils de route et de canalisation",
  "Volumes de déblais et de remblais",
  "Lotissement et bornage"
 ], src:"data/cours/topo.js?v=b548bf5b", chapitres:[
  {id:"topo-1", niv:1, titre:"Notions de base : unités, échelles et coordonnées", duree:55, nq:5, nex:5},
  {id:"topo-10", niv:1, titre:"Les instruments du topographe et la mise en station", duree:50, nq:5, nex:4},
  {id:"topo-2", niv:1, titre:"Mesure des distances et corrections", duree:55, nq:5, nex:4},
  {id:"topo-6", niv:1, titre:"Lire un plan topographique, un plan de lotissement et un dossier foncier", duree:50, nq:5, nex:4},
  {id:"topo-11", niv:1, titre:"Courbes de niveau, relief et profil en long simple", duree:50, nq:5, nex:4},
  {id:"topo-3", niv:2, titre:"Le nivellement direct : principe, cheminement et compensation", duree:70, nq:5, nex:4},
  {id:"topo-12", niv:2, titre:"Le nivellement sur le chantier : repères, plateformes et pentes", duree:55, nq:5, nex:4},
  {id:"topo-13", niv:2, titre:"Mesure des angles au théodolite", duree:55, nq:5, nex:4},
  {id:"topo-4", niv:2, titre:"Gisements, distances et coordonnées", duree:70, nq:5, nex:4},
  {id:"topo-14", niv:2, titre:"Calcul des surfaces et division des parcelles", duree:55, nq:5, nex:4},
  {id:"topo-5", niv:2, titre:"Implantation d'un bâtiment", duree:70, nq:5, nex:4},
  {id:"topo-15", niv:2, titre:"Profils en long, profils en travers et lignes de projet", duree:60, nq:5, nex:4},
  {id:"topo-9", niv:3, titre:"Polygonation : cheminement, fermetures et compensation", duree:80, nq:5, nex:4},
  {id:"topo-16", niv:3, titre:"Tachéométrie et levé de détails à la station totale", duree:60, nq:5, nex:3},
  {id:"topo-17", niv:3, titre:"Intersection, relèvement et densification du canevas", duree:50, nq:5, nex:3},
  {id:"topo-7", niv:3, titre:"GNSS (GPS) et systèmes de coordonnées", duree:55, nq:5, nex:3},
  {id:"topo-8", niv:3, titre:"Tracé routier : courbes circulaires et implantation", duree:70, nq:5, nex:4},
  {id:"topo-18", niv:3, titre:"Cubatures et mouvements des terres", duree:70, nq:5, nex:4},
  {id:"topo-19", niv:3, titre:"Erreurs, précision et tolérances des mesures", duree:55, nq:5, nex:4}
 ]});
