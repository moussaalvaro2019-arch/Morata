/* Fichier généré par outils/catalogue.mjs — ne pas modifier à la main.
   Liste des matières et des chapitres ; le contenu est servi par /api/cours (dossier contenus/cours) */
A.addMatiere({id:"acou", titre:"Acoustique du bâtiment", court:"Acoustique", groupe:"phys", icone:"sound", couleur:"#0E8C95", niveau:"Intermédiaire", heures:50, ordre:3, prerequis:["sp"], resume:"Le son et les décibels, propagation et mesure du bruit, gêne et santé, isolation aux bruits aériens (loi de masse, parois doubles et composites), bruits de choc et d'équipements, réverbération et acoustique des salles, bruit des chantiers, de la circulation et des groupes électrogènes, conception de bâtiments calmes.", objectifs:[
  "Calculer, additionner et soustraire des niveaux sonores en décibels",
  "Prévoir la décroissance du bruit avec la distance et derrière un écran",
  "Mesurer un niveau équivalent et évaluer l'exposition des travailleurs",
  "Choisir une paroi avec la loi de masse et traiter les points faibles",
  "Réduire les bruits de choc et les vibrations des équipements",
  "Calculer un temps de réverbération et corriger une salle",
  "Concevoir un plan qui protège du bruit"
 ], applications:[
  "Isolation entre deux logements d'un immeuble",
  "Chambre côté rue, façade sur une voie à fort trafic",
  "Salle de classe, salle de réunion, lieu de culte",
  "Groupes électrogènes, climatiseurs et pompes",
  "Bruit de chantier et protection auditive"
 ], src:"data/cours/acou.js?v=8bff7663", chapitres:[
  {id:"acou-1", niv:1, titre:"Le son et les décibels", duree:45, nq:5, nex:5},
  {id:"acou-10", niv:1, titre:"La propagation du son : distance, obstacles et réflexions", duree:40, nq:5, nex:5},
  {id:"acou-11", niv:1, titre:"Mesurer le bruit : sonomètre, niveau équivalent et indicateurs", duree:40, nq:5, nex:5},
  {id:"acou-5", niv:1, titre:"Les bruits du quotidien et la gêne : santé et bonnes pratiques", duree:40, nq:5, nex:5},
  {id:"acou-6", niv:1, titre:"Absorber ou isoler ? Choisir ses matériaux", duree:40, nq:5, nex:5},
  {id:"acou-2", niv:2, titre:"Isolation aux bruits aériens : loi de masse et parois doubles", duree:55, nq:5, nex:5},
  {id:"acou-12", niv:2, titre:"Parois composites : fenêtres, portes, entrées d'air et fuites", duree:45, nq:5, nex:5},
  {id:"acou-3", niv:2, titre:"Bruits de choc et bruits d'équipements", duree:45, nq:5, nex:5},
  {id:"acou-4", niv:2, titre:"Correction acoustique : réverbération et formule de Sabine", duree:50, nq:5, nex:5},
  {id:"acou-15", niv:2, titre:"Le bruit des chantiers et la protection des travailleurs", duree:45, nq:5, nex:5},
  {id:"acou-7", niv:3, titre:"Isolement entre locaux : transmissions latérales et DnT", duree:50, nq:5, nex:5},
  {id:"acou-8", niv:3, titre:"Acoustique des salles : classes, salles polyvalentes, lieux de culte", duree:50, nq:5, nex:5},
  {id:"acou-9", niv:3, titre:"Bruit de l'environnement : circulation, écrans et urbanisme", duree:50, nq:5, nex:5},
  {id:"acou-14", niv:3, titre:"Équipements techniques : niveaux de puissance, capotages et antivibratiles", duree:50, nq:5, nex:5},
  {id:"acou-16", niv:3, titre:"Concevoir un bâtiment calme : méthode de synthèse", duree:45, nq:5, nex:5}
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
 ], src:"data/cours/ba.js?v=16f54aa6", chapitres:[
  {id:"ba-1", niv:1, titre:"Principe du béton armé et caractéristiques des matériaux", duree:60, nq:5, nex:5, ns:1},
  {id:"ba-2", niv:1, titre:"États limites, actions et combinaisons", duree:55, nq:5, nex:5, ns:1},
  {id:"ba-11", niv:1, titre:"Descente de charges d'un bâtiment", duree:70, nq:5, nex:5, ns:1},
  {id:"ba-3", niv:1, titre:"Dispositions constructives : enrobage, espacements, sections minimales", duree:55, nq:5, nex:5, ns:1},
  {id:"ba-12", niv:1, titre:"Adhérence, ancrages et recouvrements", duree:55, nq:5, nex:5, ns:1},
  {id:"ba-8", niv:1, titre:"Lire un plan de ferraillage, façonner et contrôler les aciers", duree:50, nq:5, nex:5, ns:1},
  {id:"ba-13", niv:2, titre:"Tirants : pièces en traction simple", duree:45, nq:5, nex:4, ns:1},
  {id:"ba-4", niv:2, titre:"Poteaux en compression centrée", duree:70, nq:5, nex:5, ns:1},
  {id:"ba-5", niv:2, titre:"Flexion simple à l'ELU : section rectangulaire", duree:80, nq:5, nex:5, ns:1},
  {id:"ba-14", niv:2, titre:"Flexion simple à l'ELS : contraintes et fissuration", duree:65, nq:5, nex:4, ns:1},
  {id:"ba-15", niv:2, titre:"Poutres en T : la dalle participe à la résistance", duree:60, nq:5, nex:4, ns:1},
  {id:"ba-9", niv:2, titre:"Effort tranchant : cadres, étriers et vérifications d'appui", duree:70, nq:5, nex:5, ns:1},
  {id:"ba-6", niv:2, titre:"Les dalles pleines : portant dans un sens ou dans deux sens", duree:75, nq:5, nex:5, ns:1},
  {id:"ba-7", niv:2, titre:"Fondations superficielles : semelles isolées et filantes", duree:75, nq:5, nex:5, ns:1},
  {id:"ba-16", niv:2, titre:"Poutres continues : méthode forfaitaire, méthode de Caquot et arrêt des barres", duree:75, nq:5, nex:4, ns:1},
  {id:"ba-17", niv:3, titre:"Planchers à corps creux : poutrelles et dalle de compression", duree:60, nq:5, nex:4, ns:1},
  {id:"ba-18", niv:3, titre:"Semelles excentrées, longrines et radiers", duree:65, nq:5, nex:4, ns:1},
  {id:"ba-19", niv:3, titre:"Escaliers, paliers et balcons", duree:65, nq:5, nex:4, ns:1},
  {id:"ba-20", niv:3, titre:"Voiles et murs de soutènement en béton armé", duree:65, nq:5, nex:4, ns:1},
  {id:"ba-21", niv:3, titre:"Flexion composée : poteaux de portique et éléments excentrés", duree:70, nq:5, nex:4, ns:1},
  {id:"ba-22", niv:3, titre:"Flèches et durabilité : vérifications de service", duree:60, nq:5, nex:4, ns:1},
  {id:"ba-23", niv:3, titre:"Étude complète d'un bâtiment : du plan au ferraillage (BAEL et Eurocode 2)", duree:80, nq:5, nex:4, ns:1}
 ]});
A.addMatiere({id:"chant", titre:"Organisation et gestion de chantier", court:"Gestion chantier", groupe:"gest", icone:"clip", couleur:"#B8700A", niveau:"Intermédiaire", heures:65, ordre:1, prerequis:["tech"], resume:"Préparer, organiser et piloter un chantier : documents du marché, intervenants, installation, qualité, sécurité et environnement, préparation, rendements et planning, ressources, approvisionnements, matériel et engins, terrassements et bétonnages, suivi financier et quotidien, management, cadences, HSE, valeur acquise, avec applications et exercices corrigés.", objectifs:[
  "Connaître les pièces d'un marché, les documents et les intervenants du chantier",
  "Préparer un chantier et organiser son installation",
  "Établir un planning à partir des quantités et des rendements",
  "Dimensionner les équipes, le matériel, les engins et les approvisionnements",
  "Appliquer les règles de qualité, de sécurité et d'environnement",
  "Suivre l'avancement, les coûts et la trésorerie d'un chantier"
 ], applications:[
  "Préparer l'ouverture d'un chantier de villa ou d'immeuble",
  "Planifier et suivre l'avancement chaque semaine",
  "Organiser un bétonnage ou un terrassement important",
  "Tenir les réunions, le journal et les tableaux de bord",
  "Établir une situation et analyser les écarts de coût"
 ], src:"data/cours/chant.js?v=55f65dc3", chapitres:[
  {id:"chant-1", niv:1, titre:"Les documents du marché et du chantier", duree:45, nq:5, nex:5, ns:1},
  {id:"chant-10", niv:1, titre:"Les intervenants du chantier et l'organisation de l'équipe", duree:45, nq:5, nex:5, ns:1},
  {id:"chant-2", niv:1, titre:"L'installation de chantier", duree:45, nq:5, nex:5, ns:1},
  {id:"chant-5", niv:1, titre:"Qualité, sécurité et environnement", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-11", niv:1, titre:"La préparation de chantier", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-3", niv:2, titre:"Rendements, temps unitaires et durées", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-12", niv:2, titre:"Le planning : Gantt, liens, marges et chemin critique", duree:60, nq:5, nex:5, ns:1},
  {id:"chant-4", niv:2, titre:"Les ressources : main-d'œuvre, stocks et approvisionnements", duree:55, nq:5, nex:5, ns:1},
  {id:"chant-13", niv:2, titre:"Le matériel et les engins de chantier", duree:55, nq:5, nex:5, ns:1},
  {id:"chant-14", niv:2, titre:"Organiser les grandes opérations : terrassements et bétonnages", duree:55, nq:5, nex:5, ns:1},
  {id:"chant-6", niv:2, titre:"Le suivi financier du chantier : budget, coûts et trésorerie", duree:55, nq:5, nex:5, ns:1},
  {id:"chant-15", niv:2, titre:"Le suivi quotidien : réunions, comptes rendus et tableaux de bord", duree:45, nq:5, nex:5, ns:1},
  {id:"chant-7", niv:3, titre:"Management de projet : équipes, réunions et litiges", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-8", niv:3, titre:"Méthodes de construction : coffrages, rotations et cadences", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-9", niv:3, titre:"Gestion des risques, HSE et sinistres", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-16", niv:3, titre:"Piloter par la valeur acquise : délais et coûts", duree:50, nq:5, nex:5, ns:1},
  {id:"chant-17", niv:3, titre:"Étude de cas : préparer et piloter le chantier d'une villa", duree:70, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"eco", titre:"Économie du bâtiment", court:"Économie", groupe:"gest", icone:"coins", couleur:"#1E9B5E", niveau:"Intermédiaire", heures:60, ordre:2, prerequis:["metre"], resume:"Comprendre et maîtriser l'argent de la construction : coûts, prix, marges et TVA, coût global d'une opération, devis et appels d'offres, budget d'un particulier, sous-détail de prix, estimation, marchés et révision des prix, emprunts et intérêts, gestion de l'entreprise de BTP, garanties et assurances, rentabilité immobilière, VAN et TRI, coût global énergétique et contrôle des coûts, avec applications et exercices corrigés.", objectifs:[
  "Calculer prix, marges, TVA, pourcentages et indices",
  "Décomposer le coût global d'une opération et établir un budget",
  "Établir un sous-détail de prix et estimer un projet à chaque phase",
  "Comprendre les marchés, les appels d'offres, la révision des prix et les garanties",
  "Calculer un emprunt, une VAN, un TRI et la rentabilité d'un projet",
  "Contrôler les coûts et argumenter une réclamation"
 ], applications:[
  "Budget et financement d'une maison individuelle",
  "Réponse à un appel d'offres et analyse des offres",
  "Contrôle des devis d'entreprises",
  "Montage d'un projet de location ou de vente d'appartements",
  "Choix d'investissements économes en énergie"
 ], src:"data/cours/eco.js?v=8030332a", chapitres:[
  {id:"eco-10", niv:1, titre:"Les notions de base : pourcentages, indices et inflation", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-6", niv:1, titre:"Prix, coûts, marges et TVA", duree:50, nq:5, nex:5, ns:1},
  {id:"eco-1", niv:1, titre:"Le coût global d'une opération de construction", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-7", niv:1, titre:"Lire un devis et comparer des offres", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-11", niv:1, titre:"Le budget d'un particulier : financer sa maison", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-2", niv:2, titre:"Le sous-détail de prix et le prix de vente", duree:55, nq:5, nex:5, ns:1},
  {id:"eco-3", niv:2, titre:"Les méthodes d'estimation", duree:50, nq:5, nex:5, ns:1},
  {id:"eco-4", niv:2, titre:"Marchés, appels d'offres et révision des prix", duree:55, nq:5, nex:5, ns:1},
  {id:"eco-12", niv:2, titre:"Mathématiques financières : intérêts, emprunts et amortissements", duree:55, nq:5, nex:5, ns:1},
  {id:"eco-13", niv:2, titre:"L'entreprise de BTP : charges, résultat et seuil de rentabilité", duree:50, nq:5, nex:5, ns:1},
  {id:"eco-14", niv:2, titre:"Garanties, cautions et assurances de la construction", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-5", niv:3, titre:"Rentabilité d'un projet immobilier : promotion et location", duree:55, nq:5, nex:5, ns:1},
  {id:"eco-8", niv:3, titre:"Choisir un investissement : actualisation, VAN et TRI", duree:55, nq:5, nex:5, ns:1},
  {id:"eco-15", niv:3, titre:"Coût global et choix d'investissements économes en énergie", duree:45, nq:5, nex:5, ns:1},
  {id:"eco-9", niv:3, titre:"Contrôle des coûts, avenants et réclamations", duree:50, nq:5, nex:5, ns:1},
  {id:"eco-16", niv:3, titre:"Étude de cas : montage financier d'un immeuble de rapport", duree:60, nq:5, nex:5, ns:1}
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
 ], src:"data/cours/geo.js?v=46e2827c", chapitres:[
  {id:"geo-1", niv:1, titre:"Le sol : origine, constituants et paramètres d'état", duree:60, nq:5, nex:4, ns:1},
  {id:"geo-10", niv:1, titre:"Les sols de Côte d'Ivoire et les sols difficiles", duree:45, nq:5, nex:3, ns:1},
  {id:"geo-6", niv:1, titre:"Reconnaître les sols sur le terrain : puits, sondages et essais simples", duree:50, nq:5, nex:3, ns:1},
  {id:"geo-7", niv:1, titre:"L'eau dans le sol : nappe, capillarité et drainage", duree:45, nq:5, nex:3, ns:1},
  {id:"geo-2", niv:2, titre:"Identification des sols : granulométrie, Atterberg, VBS, équivalent de sable", duree:65, nq:5, nex:4, ns:1},
  {id:"geo-11", niv:2, titre:"Classification des sols pour les terrassements et les chaussées", duree:50, nq:5, nex:3, ns:1},
  {id:"geo-3", niv:2, titre:"Le compactage : essais Proctor, CBR et contrôle sur chantier", duree:65, nq:5, nex:4, ns:1},
  {id:"geo-12", niv:2, titre:"Contraintes dans le sol : poids des terres, contrainte effective et diffusion des charges", duree:65, nq:5, nex:4, ns:1},
  {id:"geo-13", niv:2, titre:"Écoulements, perméabilité et rabattement de nappe", duree:60, nq:5, nex:3, ns:1},
  {id:"geo-4", niv:2, titre:"Résistance au cisaillement des sols", duree:65, nq:5, nex:4, ns:1},
  {id:"geo-14", niv:3, titre:"Capacité portante des fondations superficielles", duree:70, nq:5, nex:5, ns:1},
  {id:"geo-5", niv:3, titre:"Tassements et consolidation des sols", duree:70, nq:5, nex:5, ns:1},
  {id:"geo-15", niv:3, titre:"Les essais in situ : pénétromètres, SPT, pressiomètre et essai de plaque", duree:65, nq:5, nex:5, ns:1},
  {id:"geo-8", niv:3, titre:"Fondations profondes : pieux et micropieux", duree:70, nq:5, nex:5, ns:1},
  {id:"geo-9", niv:3, titre:"Poussée et butée des terres, murs de soutènement", duree:70, nq:5, nex:5, ns:1},
  {id:"geo-16", niv:3, titre:"Stabilité des talus et des pentes", duree:65, nq:5, nex:5, ns:1},
  {id:"geo-17", niv:3, titre:"Amélioration et renforcement des sols", duree:60, nq:5, nex:5, ns:1},
  {id:"geo-18", niv:3, titre:"La mission géotechnique et le rapport de sol", duree:50, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"mat", titre:"Matériaux de construction", court:"Matériaux", groupe:"constr", icone:"brick", couleur:"#B85C38", niveau:"Débutant", heures:65, ordre:1, prerequis:["sp"], resume:"Connaître, choisir, doser et contrôler les matériaux : propriétés physiques et mécaniques, granulats, ciments et liants, mortiers et agglos, terre et matériaux locaux, bétons frais et durcis, adjuvants, contrôle du béton, aciers, bois, métaux, verre, matériaux de second œuvre, formulation des bétons, bétons spéciaux, durabilité et essais de laboratoire, avec applications et exercices corrigés.", objectifs:[
  "Calculer les grandeurs physiques d'un matériau (masses volumiques, porosité, teneur en eau)",
  "Choisir et contrôler les granulats, ciments, aciers et bois",
  "Doser un béton, un mortier et un enduit, et formuler un béton",
  "Interpréter des essais de laboratoire et de chantier",
  "Prévenir les pathologies et choisir des matériaux durables"
 ], applications:[
  "Contrôle à la réception (sable, ciment, aciers, agglos)",
  "Composition d'un béton pour un ouvrage donné",
  "Interprétation d'un procès-verbal d'essais",
  "Fabrication des agglos et des BTC sur chantier",
  "Choix d'un bois, d'un acier ou d'un isolant"
 ], src:"data/cours/mat.js?v=6d3d48e1", chapitres:[
  {id:"mat-10", niv:1, titre:"Les propriétés générales des matériaux", duree:55, nq:5, nex:5, ns:1},
  {id:"mat-1", niv:1, titre:"Les granulats : nature, granulométrie et contrôle", duree:55, nq:5, nex:5, ns:1},
  {id:"mat-2", niv:1, titre:"Les liants : ciments, chaux et plâtre", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-4", niv:1, titre:"Mortiers, enduits et agglos", duree:55, nq:5, nex:5, ns:1},
  {id:"mat-14", niv:1, titre:"La terre, la latérite et les matériaux locaux", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-3", niv:2, titre:"Le béton : composition, béton frais et béton durci", duree:60, nq:5, nex:5, ns:1},
  {id:"mat-11", niv:2, titre:"L'eau de gâchage et les adjuvants", duree:45, nq:5, nex:5, ns:1},
  {id:"mat-12", niv:2, titre:"Le contrôle du béton sur chantier et en laboratoire", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-5", niv:2, titre:"Les aciers pour béton armé", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-6", niv:2, titre:"Le bois : essences, humidité et protection", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-13", niv:2, titre:"Les métaux et le verre", duree:45, nq:5, nex:5, ns:1},
  {id:"mat-15", niv:2, titre:"Les matériaux de second œuvre : isolants, plâtres, peintures, plastiques", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-7", niv:3, titre:"Formuler un béton : la méthode de Dreux-Gorisse", duree:60, nq:5, nex:5, ns:1},
  {id:"mat-16", niv:3, titre:"Les bétons spéciaux", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-8", niv:3, titre:"Durabilité et pathologies des matériaux", duree:55, nq:5, nex:5, ns:1},
  {id:"mat-17", niv:3, titre:"Les essais de laboratoire et la lecture des procès-verbaux", duree:50, nq:5, nex:5, ns:1},
  {id:"mat-9", niv:3, titre:"Matériaux écologiques et construction bas carbone", duree:45, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"math", titre:"Mathématiques", court:"Maths", groupe:"fond", icone:"sigma", couleur:"#2F6FDB", niveau:"Débutant", heures:65, ordre:1, resume:"Les mathématiques utiles au bâtiment, du calcul de base aux outils avancés : unités et conversions, fractions et pourcentages, proportionnalité et échelles, géométrie plane et dans l'espace, Pythagore et trigonométrie, équations, fonctions, statistiques, triangles quelconques, repérage, suites, logarithmes, probabilités et calculs financiers, avec applications de chantier et exercices corrigés.", objectifs:[
  "Calculer avec les unités, les puissances de 10, les fractions et les pourcentages",
  "Calculer aires, périmètres et volumes d'ouvrages",
  "Utiliser Pythagore, Thalès et la trigonométrie (pentes, toitures, escaliers, topographie)",
  "Résoudre des équations et des systèmes, utiliser des fonctions",
  "Exploiter des statistiques et des probabilités pour le contrôle qualité",
  "Utiliser suites, logarithmes et calculs financiers"
 ], applications:[
  "Surfaces de carrelage et de peinture, volumes de béton et de fouilles",
  "Pente d'une toiture, d'une rampe ou d'une canalisation",
  "Lecture des plans au 1/50 et au 1/100",
  "Contrôle statistique des résistances du béton",
  "Calculs topographiques et financiers"
 ], src:"data/cours/math.js?v=29cf3356", chapitres:[
  {id:"math-1", niv:1, titre:"Calcul numérique, unités et conversions", duree:45, nq:5, nex:5},
  {id:"math-10", niv:1, titre:"Fractions, priorités et pourcentages", duree:40, nq:5, nex:5},
  {id:"math-6", niv:1, titre:"Proportionnalité, règle de trois et échelles", duree:45, nq:5, nex:5},
  {id:"math-2", niv:1, titre:"Géométrie plane : aires et périmètres", duree:45, nq:5, nex:5},
  {id:"math-11", niv:1, titre:"Angles, triangles, Thalès et constructions", duree:45, nq:5, nex:5},
  {id:"math-3", niv:2, titre:"Pythagore et trigonométrie dans le triangle rectangle", duree:50, nq:5, nex:5},
  {id:"math-4", niv:2, titre:"Géométrie dans l'espace : volumes et surfaces", duree:50, nq:5, nex:5},
  {id:"math-5", niv:2, titre:"Équations, inéquations et systèmes", duree:50, nq:5, nex:5},
  {id:"math-12", niv:2, titre:"Fonctions affines, graphiques et interpolation", duree:45, nq:5, nex:5},
  {id:"math-13", niv:2, titre:"Le second degré : paraboles et optimisation", duree:45, nq:5, nex:5},
  {id:"math-9", niv:2, titre:"Statistiques et contrôle qualité", duree:50, nq:5, nex:5},
  {id:"math-7", niv:3, titre:"Trigonométrie dans les triangles quelconques", duree:50, nq:5, nex:5},
  {id:"math-16", niv:3, titre:"Repérage, coordonnées et vecteurs", duree:45, nq:5, nex:5},
  {id:"math-14", niv:3, titre:"Les suites numériques", duree:45, nq:5, nex:5},
  {id:"math-17", niv:3, titre:"Logarithmes et exponentielles", duree:45, nq:5, nex:5},
  {id:"math-15", niv:3, titre:"Probabilités et contrôle par échantillonnage", duree:45, nq:5, nex:5},
  {id:"math-8", niv:3, titre:"Mathématiques financières : intérêts, actualisation et amortissements", duree:45, nq:5, nex:5}
 ]});
A.addMatiere({id:"mdf", titre:"Mécanique des fluides", court:"Méca. fluides", groupe:"phys", icone:"wave", couleur:"#2F6FDB", niveau:"Intermédiaire", heures:55, ordre:4, prerequis:["sp", "math"], resume:"L'eau dans et autour du bâtiment : pression et hydrostatique, poussées et sous-pressions, débits, Bernoulli, régimes d'écoulement et pertes de charge, réseaux d'eau potable, eaux pluviales et eaux usées, pompes et surpresseurs, caniveaux, buses et dalots, coup de bélier, réservoirs, assainissement autonome et hydrologie urbaine.", objectifs:[
  "Calculer des pressions, des poussées hydrostatiques et des sous-pressions",
  "Calculer débits, vitesses et appliquer la conservation du débit",
  "Appliquer le théorème de Bernoulli avec pertes de charge",
  "Dimensionner un réseau d'eau potable et vérifier la pression aux robinets",
  "Dimensionner gouttières, descentes, canalisations d'eaux usées et caniveaux",
  "Choisir une pompe ou un surpresseur et protéger un réseau du coup de bélier",
  "Dimensionner un réservoir, une fosse septique et un ouvrage de drainage"
 ], applications:[
  "Bâches à eau, cuves enterrées et châteaux d'eau",
  "Réseau d'alimentation d'une villa ou d'un immeuble",
  "Évacuation des eaux pluviales de toiture et de parcelle",
  "Réseaux d'eaux usées, fosse septique et épandage",
  "Caniveaux, buses et dalots de voirie"
 ], src:"data/cours/mdf.js?v=ccc4fb6f", chapitres:[
  {id:"mdf-1", niv:1, titre:"Propriétés des fluides et pression", duree:40, nq:5, nex:5},
  {id:"mdf-2", niv:1, titre:"Hydrostatique : pression en profondeur et poussées sur les parois", duree:50, nq:5, nex:5},
  {id:"mdf-10", niv:1, titre:"Poussée d'Archimède, flottaison et sous-pressions", duree:40, nq:5, nex:5},
  {id:"mdf-11", niv:1, titre:"Débits et vitesses d'écoulement", duree:40, nq:5, nex:5},
  {id:"mdf-6", niv:1, titre:"L'eau dans la maison : alimentation, évacuation et règles simples", duree:45, nq:5, nex:5},
  {id:"mdf-3", niv:2, titre:"Le théorème de Bernoulli et ses applications", duree:50, nq:5, nex:5},
  {id:"mdf-12", niv:2, titre:"Régimes d'écoulement : nombre de Reynolds et rugosité", duree:40, nq:5, nex:5},
  {id:"mdf-4", niv:2, titre:"Pertes de charge et dimensionnement des réseaux d'eau potable", duree:55, nq:5, nex:5},
  {id:"mdf-5", niv:2, titre:"Eaux pluviales : toitures, gouttières, descentes et parcelles", duree:50, nq:5, nex:5},
  {id:"mdf-13", niv:2, titre:"Évacuation des eaux usées : réseaux, pentes et diamètres", duree:45, nq:5, nex:5},
  {id:"mdf-7", niv:3, titre:"Pompes et surpresseurs : HMT, courbes et choix", duree:55, nq:5, nex:5},
  {id:"mdf-8", niv:3, titre:"Écoulements à surface libre : caniveaux, fossés, buses et dalots", duree:55, nq:5, nex:5},
  {id:"mdf-9", niv:3, titre:"Coup de bélier et protection des réseaux", duree:45, nq:5, nex:5},
  {id:"mdf-14", niv:3, titre:"Réservoirs et châteaux d'eau : volume, hauteur et fonctionnement", duree:45, nq:5, nex:5},
  {id:"mdf-15", niv:3, titre:"Assainissement autonome : fosse septique, épandage et puisards", duree:50, nq:5, nex:5},
  {id:"mdf-16", niv:3, titre:"Hydrologie urbaine : débit de projet et ouvrages de drainage", duree:55, nq:5, nex:5}
 ]});
A.addMatiere({id:"metre", titre:"Métré", court:"Métré", groupe:"gest", icone:"list", couleur:"#2D6FB5", niveau:"Débutant", heures:70, ordre:3, prerequis:["math", "tech"], resume:"Mesurer les ouvrages sur plans et sur chantier, de la fouille à la peinture : règles du métré, lecture des plans, géométrie utile, terrassements, fondations, maçonneries, béton armé et aciers, planchers, toitures, revêtements, lots techniques et VRD, jusqu'au sous-détail de prix, au devis quantitatif et estimatif et aux situations de travaux, avec applications chiffrées et exercices corrigés.", objectifs:[
  "Appliquer les règles et conventions du métré et lire les plans",
  "Calculer les quantités de chaque lot avec la bonne unité",
  "Établir le sous-détail des matériaux pour les commandes",
  "Établir le sous-détail d'un prix unitaire (déboursé sec, coefficient K)",
  "Construire un BPU, un DQE et son récapitulatif",
  "Établir des attachements, des situations et un décompte"
 ], applications:[
  "Avant-métré complet d'une maison à partir des plans",
  "Commande des matériaux (ciment, sable, gravier, acier, agglos)",
  "Réponse à un appel d'offres et vérification d'un devis",
  "Situations mensuelles de travaux",
  "Utilisation de l'outil Métré de la plateforme"
 ], src:"data/cours/metre.js?v=468450ed", chapitres:[
  {id:"metre-1", niv:1, titre:"Le métré : rôle, vocabulaire et règles de base", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-10", niv:1, titre:"Lire les plans pour métrer : échelles, cotes et documents", duree:45, nq:5, nex:5, ns:1},
  {id:"metre-11", niv:1, titre:"La géométrie du métreur : surfaces, volumes et pentes", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-2", niv:1, titre:"Métré des terrassements", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-12", niv:1, titre:"Métré des fondations, soubassements et dallages", duree:60, nq:5, nex:5, ns:1},
  {id:"metre-4", niv:1, titre:"Métré des maçonneries", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-13", niv:1, titre:"Métré des enduits, chapes et ravalements", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-3", niv:2, titre:"Métré du béton armé d'élévation : bétons et coffrages", duree:60, nq:5, nex:5, ns:1},
  {id:"metre-14", niv:2, titre:"Métré des aciers : nomenclatures, poids et commandes", duree:60, nq:5, nex:5, ns:1},
  {id:"metre-15", niv:2, titre:"Métré des planchers à corps creux, dalles et escaliers", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-16", niv:2, titre:"Métré des charpentes, couvertures et étanchéités", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-5", niv:2, titre:"Métré des revêtements de sols et de murs", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-17", niv:2, titre:"Métré des menuiseries, faux plafonds et peintures", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-20", niv:2, titre:"Le sous-détail des matériaux et les approvisionnements", duree:50, nq:5, nex:5, ns:1},
  {id:"metre-6", niv:2, titre:"Du métré au devis : BPU, DQE et récapitulatif", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-18", niv:3, titre:"Le sous-détail de prix : déboursé sec et prix de vente", duree:60, nq:5, nex:5, ns:1},
  {id:"metre-7", niv:3, titre:"Métré des lots techniques : électricité, plomberie, climatisation", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-8", niv:3, titre:"Métré des VRD et des aménagements extérieurs", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-21", niv:3, titre:"Les cubatures de terrassement : profils et carroyage", duree:60, nq:5, nex:5, ns:1},
  {id:"metre-9", niv:3, titre:"Attachements, situations de travaux et décomptes", duree:55, nq:5, nex:5, ns:1},
  {id:"metre-22", niv:3, titre:"Étude de cas : avant-métré et devis complet d'une maison", duree:75, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"mmc", titre:"Mécanique des milieux continus", court:"MMC", groupe:"struct", icone:"cube", couleur:"#5B6B7F", niveau:"Avancé", heures:55, ordre:1, prerequis:["om", "sp"], resume:"Les bases théoriques communes à la RDM, au béton armé, à la construction métallique et à la géotechnique : contraintes et déformations, essais des matériaux, loi de Hooke, contraintes dans les poutres, torsion, cercle de Mohr, critères de résistance, contraintes effectives dans les sols, énergie de déformation, plasticité, rupture et éléments finis.", objectifs:[
  "Comprendre les hypothèses du milieu continu et de l'élasticité",
  "Calculer contraintes et déformations en traction, compression et cisaillement",
  "Interpréter un essai de traction ou de compression",
  "Décrire l'état de contrainte en un point et ses contraintes principales",
  "Relier contraintes et déformations par la loi de Hooke généralisée",
  "Calculer les contraintes de flexion, de cisaillement et de torsion dans une poutre",
  "Appliquer les critères de Tresca, von Mises et Mohr-Coulomb",
  "Utiliser l'énergie de déformation et lire un calcul aux éléments finis"
 ], applications:[
  "Justification des formules de RDM et de béton armé",
  "Vérification d'une pièce métallique sous efforts combinés",
  "Résistance des sols et des fondations (Mohr-Coulomb)",
  "Appareils d'appui, assemblages boulonnés, jauges de déformation",
  "Contrôle des résultats d'un logiciel aux éléments finis"
 ], src:"data/cours/mmc.js?v=dea99f46", chapitres:[
  {id:"mmc-1", niv:1, titre:"Hypothèses et notion de milieu continu", duree:40, nq:5, nex:5},
  {id:"mmc-6", niv:1, titre:"Forces, contraintes et déformations en traction simple", duree:45, nq:5, nex:5},
  {id:"mmc-7", niv:1, titre:"Comportement des matériaux : essais de traction et de compression", duree:45, nq:5, nex:5},
  {id:"mmc-10", niv:1, titre:"Cisaillement simple et contraintes tangentielles", duree:40, nq:5, nex:5},
  {id:"mmc-11", niv:1, titre:"Efforts intérieurs : coupure et torseur de cohésion", duree:40, nq:5, nex:5},
  {id:"mmc-2", niv:2, titre:"L'état de contrainte en un point : vecteur et tenseur des contraintes", duree:50, nq:5, nex:5},
  {id:"mmc-3", niv:2, titre:"Les déformations : allongements, distorsions et jauges", duree:45, nq:5, nex:5},
  {id:"mmc-4", niv:2, titre:"Loi de Hooke généralisée et déformations thermiques", duree:50, nq:5, nex:5},
  {id:"mmc-12", niv:2, titre:"Contraintes dans les poutres : flexion et cisaillement", duree:55, nq:5, nex:5},
  {id:"mmc-13", niv:2, titre:"Torsion et sollicitations composées", duree:50, nq:5, nex:5},
  {id:"mmc-8", niv:3, titre:"Contraintes principales et cercle de Mohr", duree:50, nq:5, nex:5},
  {id:"mmc-5", niv:3, titre:"Critères de résistance : Rankine, Tresca, von Mises et Mohr-Coulomb", duree:50, nq:5, nex:5},
  {id:"mmc-14", niv:3, titre:"Contraintes dans les sols : contraintes effectives et rupture", duree:55, nq:5, nex:5},
  {id:"mmc-15", niv:3, titre:"Énergie de déformation et méthodes énergétiques", duree:50, nq:5, nex:5},
  {id:"mmc-16", niv:3, titre:"Plasticité, concentrations de contraintes, fatigue et rupture", duree:50, nq:5, nex:5},
  {id:"mmc-9", niv:3, titre:"La méthode des éléments finis : principe et contrôle des résultats", duree:50, nq:5, nex:5}
 ]});
A.addMatiere({id:"om", titre:"Outils mathématiques", court:"Outils maths", groupe:"fond", icone:"fx", couleur:"#5B45A8", niveau:"Intermédiaire", heures:55, ordre:2, prerequis:["math"], resume:"Les outils mathématiques de l'ingénieur et du technicien supérieur : vecteurs et moments, fonctions, dérivées et extremums, exponentielle et logarithme, intégrales (résultantes, centres de gravité, inerties, déformées), matrices et systèmes, équations différentielles, méthodes numériques, calcul matriciel des structures, régression et incertitudes, avec applications à la RDM et exercices corrigés.", objectifs:[
  "Manipuler vecteurs, produits scalaires et moments",
  "Dériver une fonction et trouver un extremum (moment maximal, optimisation)",
  "Intégrer pour obtenir une résultante, un centre de gravité, un moment d'inertie, une déformée",
  "Résoudre des systèmes linéaires et comprendre la méthode des déplacements",
  "Résoudre des équations différentielles simples (déformée, vibrations, refroidissement)",
  "Utiliser des méthodes numériques, une régression et un calcul d'incertitudes"
 ], applications:[
  "Position et valeur du moment maximal dans une poutre",
  "Centre de gravité et moment d'inertie d'une section",
  "Flèche d'une poutre et fréquence propre d'un plancher",
  "Volumes de terrassement par Simpson",
  "Vérification des résultats d'un logiciel de calcul"
 ], src:"data/cours/om.js?v=a08cb8be", chapitres:[
  {id:"om-3", niv:1, titre:"Vecteurs, forces et moments", duree:45, nq:5, nex:5},
  {id:"om-6", niv:1, titre:"Fonctions usuelles et lecture de graphiques", duree:40, nq:5, nex:5},
  {id:"om-7", niv:1, titre:"Taux de variation et notion de dérivée", duree:40, nq:5, nex:5},
  {id:"om-10", niv:1, titre:"Angles en radians et fonctions trigonométriques", duree:40, nq:5, nex:5},
  {id:"om-1", niv:2, titre:"Dérivées et recherche d'extremum", duree:50, nq:5, nex:5},
  {id:"om-11", niv:2, titre:"Exponentielle, logarithme népérien et phénomènes d'évolution", duree:45, nq:5, nex:5},
  {id:"om-2", niv:2, titre:"Intégrales : résultantes, centres de gravité et inerties", duree:55, nq:5, nex:5},
  {id:"om-12", niv:2, titre:"Intégration en RDM : diagrammes et déformées", duree:55, nq:5, nex:5},
  {id:"om-4", niv:2, titre:"Matrices et systèmes linéaires", duree:50, nq:5, nex:5},
  {id:"om-5", niv:3, titre:"Équations différentielles : refroidissement, déformées et vibrations", duree:55, nq:5, nex:5},
  {id:"om-8", niv:3, titre:"Méthodes numériques : dichotomie, Newton, trapèzes, Simpson, Euler", duree:55, nq:5, nex:5},
  {id:"om-9", niv:3, titre:"Calcul matriciel des structures : la méthode des déplacements", duree:60, nq:5, nex:5},
  {id:"om-13", niv:3, titre:"Statistiques et régression linéaire appliquées aux essais", duree:50, nq:5, nex:5},
  {id:"om-14", niv:3, titre:"Approximations, ordres de grandeur et incertitudes", duree:45, nq:5, nex:5}
 ]});
A.addMatiere({id:"pb", titre:"Physique du bâtiment", court:"Physique bât.", groupe:"phys", icone:"sun", couleur:"#D9921B", niveau:"Intermédiaire", heures:55, ordre:1, prerequis:["sp"], resume:"Concevoir des bâtiments sains, frais, lumineux et sûrs en climat tropical : climats de Côte d'Ivoire, course du soleil et protections solaires, confort, éclairage naturel et artificiel, eau et humidité, air humide et condensation, ventilation naturelle et qualité de l'air, sécurité et résistance au feu, énergie solaire photovoltaïque.", objectifs:[
  "Lire les données climatiques et adapter le bâtiment au climat",
  "Calculer la hauteur du soleil, les ombres et la profondeur d'un débord",
  "Évaluer le confort thermique, visuel et la qualité de l'air",
  "Dimensionner les ouvertures, l'éclairage artificiel et la ventilation",
  "Prévenir remontées capillaires, condensation et moisissures",
  "Appliquer les principes de sécurité incendie (dégagements, résistance au feu)",
  "Dimensionner une installation photovoltaïque autonome"
 ], applications:[
  "Orientation, débords de toiture et brise-soleil",
  "Arases étanches, drainage et traitement de l'humidité",
  "Taille des fenêtres et nombre de luminaires",
  "Débits de ventilation des logements, classes et bureaux",
  "Dégagements et compartimentage des immeubles",
  "Kit solaire d'un logement ou d'un dispensaire"
 ], src:"data/cours/pb.js?v=38ba2dc6", chapitres:[
  {id:"pb-1", niv:1, titre:"Le bâtiment et son climat", duree:40, nq:5, nex:5},
  {id:"pb-10", niv:1, titre:"Le soleil et le bâtiment : course, orientation et ombres", duree:45, nq:5, nex:5},
  {id:"pb-6", niv:1, titre:"Le confort de l'occupant : chaleur, humidité, air et lumière", duree:45, nq:5, nex:5},
  {id:"pb-3", niv:1, titre:"Éclairage naturel et artificiel : les bases", duree:45, nq:5, nex:5},
  {id:"pb-11", niv:1, titre:"L'eau et le bâtiment : pluie, sol et remontées capillaires", duree:45, nq:5, nex:5},
  {id:"pb-2", niv:2, titre:"L'humidité dans le bâtiment : diagnostic et traitements", duree:50, nq:5, nex:5},
  {id:"pb-12", niv:2, titre:"Dimensionner les protections solaires : débords, brise-soleil et masques", duree:50, nq:5, nex:5},
  {id:"pb-4", niv:2, titre:"Ventilation et qualité de l'air intérieur", duree:50, nq:5, nex:5},
  {id:"pb-13", niv:2, titre:"Éclairage artificiel : la méthode des flux", duree:45, nq:5, nex:5},
  {id:"pb-5", niv:2, titre:"Sécurité incendie : réaction au feu, compartimentage et évacuation", duree:55, nq:5, nex:5},
  {id:"pb-7", niv:3, titre:"Air humide, point de rosée et condensation", duree:55, nq:5, nex:5},
  {id:"pb-15", niv:3, titre:"Migration de vapeur dans les parois : la méthode de Glaser", duree:55, nq:5, nex:5},
  {id:"pb-16", niv:3, titre:"Ventilation naturelle : effet du vent et tirage thermique", duree:50, nq:5, nex:5},
  {id:"pb-8", niv:3, titre:"Conception bioclimatique en climat tropical : méthode et vérifications", duree:55, nq:5, nex:5},
  {id:"pb-17", niv:3, titre:"Résistance au feu des structures : béton, acier et bois", duree:50, nq:5, nex:5},
  {id:"pb-9", niv:3, titre:"Énergie solaire photovoltaïque : dimensionner une installation", duree:55, nq:5, nex:5}
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
 ], src:"data/cours/rdm.js?v=257eb1ff", chapitres:[
  {id:"rdm-7", niv:1, titre:"Introduction : forces, charges et unités", duree:50, nq:5, nex:5, ns:1},
  {id:"rdm-10", niv:1, titre:"Moments, résultantes et équilibre d'un solide", duree:55, nq:5, nex:5, ns:1},
  {id:"rdm-1", niv:1, titre:"Liaisons, appuis et calcul des réactions", duree:60, nq:5, nex:5, ns:1},
  {id:"rdm-11", niv:1, titre:"Contraintes, déformations et loi de Hooke", duree:55, nq:5, nex:5, ns:1},
  {id:"rdm-4", niv:1, titre:"Traction et compression simples", duree:60, nq:5, nex:5, ns:1},
  {id:"rdm-12", niv:1, titre:"Cisaillement simple et assemblages", duree:55, nq:5, nex:5, ns:1},
  {id:"rdm-3", niv:2, titre:"Caractéristiques géométriques des sections", duree:65, nq:5, nex:5, ns:1},
  {id:"rdm-2", niv:2, titre:"Efforts internes N, V, M : la méthode des coupures", duree:60, nq:5, nex:5, ns:1},
  {id:"rdm-13", niv:2, titre:"Diagrammes de V et M des poutres isostatiques", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-5", niv:2, titre:"Flexion simple : contraintes normales et dimensionnement", duree:65, nq:5, nex:5, ns:1},
  {id:"rdm-14", niv:2, titre:"Contraintes de cisaillement en flexion (Jourawski)", duree:50, nq:5, nex:5, ns:1},
  {id:"rdm-15", niv:2, titre:"Déformée et flèches des poutres", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-16", niv:2, titre:"Treillis isostatiques : méthode des nœuds et de Ritter", duree:60, nq:5, nex:5, ns:1},
  {id:"rdm-17", niv:2, titre:"Torsion des arbres et des poutres", duree:50, nq:5, nex:5, ns:1},
  {id:"rdm-18", niv:3, titre:"Sollicitations composées : flexion composée et flexion déviée", duree:65, nq:5, nex:5, ns:1},
  {id:"rdm-6", niv:3, titre:"Le flambement des éléments comprimés", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-19", niv:3, titre:"Structures hyperstatiques : la méthode des forces", duree:75, nq:5, nex:5, ns:1},
  {id:"rdm-8", niv:3, titre:"Poutres continues : le théorème des trois moments", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-20", niv:3, titre:"Méthodes énergétiques : Castigliano, Menabrea et intégrales de Mohr", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-9", niv:3, titre:"Portiques et cadres", duree:70, nq:5, nex:5, ns:1},
  {id:"rdm-21", niv:3, titre:"La méthode de Cross (distribution des moments)", duree:75, nq:5, nex:4, ns:1},
  {id:"rdm-22", niv:3, titre:"Lignes d'influence et charges mobiles", duree:55, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"ro", titre:"Recherche opérationnelle", court:"Recherche op.", groupe:"fond", icone:"network", couleur:"#8E4FD1", niveau:"Intermédiaire", heures:60, ordre:4, prerequis:["math"], resume:"Les méthodes pour décider et optimiser sur un chantier ou dans une entreprise du bâtiment : modélisation, graphes (plus court chemin, réseaux de longueur minimale), planification PERT et MPM, marges, lissage, délais probabilistes, compression des délais, gestion des stocks, programmation linéaire et simplexe, transport, affectation, files d'attente, décision dans l'incertain et renouvellement du matériel.", objectifs:[
  "Traduire un problème de chantier en variables, contraintes et objectif",
  "Trouver un plus court chemin et un réseau de longueur minimale",
  "Construire un planning PERT ou MPM, calculer dates, marges et chemin critique",
  "Lisser les ressources et réduire un délai au moindre coût",
  "Estimer la probabilité de respecter un délai",
  "Calculer la quantité économique de commande et le point de commande",
  "Résoudre un programme linéaire graphiquement et par le simplexe",
  "Optimiser des transports et des affectations",
  "Analyser une file d'attente de camions et choisir dans l'incertain"
 ], applications:[
  "Itinéraires de livraison et réseaux de VRD d'un lotissement",
  "Planning, délais et pénalités d'un chantier",
  "Approvisionnement en ciment et en aciers",
  "Répartition des camions entre carrières et chantiers",
  "Affectation des équipes aux tâches",
  "Choix du matériel, de son nombre et de sa date de renouvellement"
 ], src:"data/cours/ro.js?v=be291008", chapitres:[
  {id:"ro-1", niv:1, titre:"Modéliser un problème de décision", duree:45, nq:5, nex:5},
  {id:"ro-7", niv:1, titre:"Organiser des tâches : antériorités, niveaux et diagramme de Gantt", duree:45, nq:5, nex:5},
  {id:"ro-8", niv:1, titre:"Graphes et plus court chemin", duree:45, nq:5, nex:5},
  {id:"ro-10", niv:1, titre:"Arbre couvrant minimal : réseaux d'eau, d'électricité et de pistes", duree:40, nq:5, nex:5},
  {id:"ro-11", niv:1, titre:"Choisir entre plusieurs solutions : analyse multicritère et seuil de rentabilité", duree:40, nq:5, nex:5},
  {id:"ro-3", niv:2, titre:"Ordonnancement PERT : dates, marges et chemin critique", duree:55, nq:5, nex:5},
  {id:"ro-4", niv:2, titre:"Méthode des potentiels (MPM), Gantt et lissage des ressources", duree:50, nq:5, nex:5},
  {id:"ro-12", niv:2, titre:"PERT probabiliste : la probabilité de tenir un délai", duree:45, nq:5, nex:5},
  {id:"ro-13", niv:2, titre:"Réduire la durée d'un projet au moindre coût", duree:45, nq:5, nex:5},
  {id:"ro-6", niv:2, titre:"Gestion des stocks : quantité économique et point de commande", duree:45, nq:5, nex:5},
  {id:"ro-2", niv:2, titre:"Programmation linéaire : résolution graphique", duree:55, nq:5, nex:5},
  {id:"ro-14", niv:3, titre:"La méthode du simplexe", duree:60, nq:5, nex:5},
  {id:"ro-5", niv:3, titre:"Le problème de transport", duree:60, nq:5, nex:5},
  {id:"ro-15", niv:3, titre:"Le problème d'affectation : la méthode hongroise", duree:50, nq:5, nex:5},
  {id:"ro-16", niv:3, titre:"Files d'attente : camions, chargeuses et pompes à béton", duree:50, nq:5, nex:5},
  {id:"ro-9", niv:3, titre:"Décider dans l'incertain : critères, arbres de décision et simulation", duree:55, nq:5, nex:5},
  {id:"ro-17", niv:3, titre:"Renouvellement du matériel : quand remplacer un engin ?", duree:45, nq:5, nex:5}
 ]});
A.addMatiere({id:"sp", titre:"Sciences physiques", court:"Physique-chimie", groupe:"fond", icone:"atom", couleur:"#0E8C95", niveau:"Débutant", heures:60, ordre:3, resume:"La physique et la chimie utiles au technicien du bâtiment : unités, masse et poids, mouvements, forces et équilibre, machines simples, dynamique, énergie et puissance, électricité continue, alternative et triphasée, réactions chimiques, pH, chimie du ciment, de la chaux et du plâtre, corrosion des armatures, chaleur et dilatation, ondes, moteurs et transformateurs.", objectifs:[
  "Utiliser correctement les unités du système international et les conversions",
  "Calculer poids propres, masses volumiques et poussée d'Archimède",
  "Décrire un mouvement (vitesse, accélération, chute, freinage)",
  "Écrire l'équilibre d'un solide et utiliser leviers, poulies et plans inclinés",
  "Appliquer les lois de Newton au levage et au transport des charges",
  "Calculer travail, énergie, puissance et rendement d'un engin ou d'une pompe",
  "Dimensionner un circuit électrique simple, monophasé ou triphasé",
  "Écrire et exploiter une réaction chimique (chaux, ciment, plâtre, combustion)",
  "Expliquer le pH, l'agressivité des eaux et la corrosion des armatures",
  "Calculer quantités de chaleur, dilatations et contraintes thermiques"
 ], applications:[
  "Poids propre des éléments (béton, acier, agglos) et soulèvement des cuves enterrées",
  "Sécurité du levage : élingues, palans, coefficients dynamiques",
  "Puissance d'un monte-charge, d'une pompe d'épuisement ou d'une grue",
  "Bilan de puissance d'un logement et choix des sections de câbles",
  "Choix d'une eau de gâchage et d'un béton en milieu agressif",
  "Enrobage et durabilité des armatures, joints de dilatation, bétonnage par temps chaud"
 ], src:"data/cours/sp.js?v=f9f0d0df", chapitres:[
  {id:"sp-1", niv:1, titre:"Grandeurs physiques, unités SI et conversions", duree:45, nq:5, nex:5},
  {id:"sp-2", niv:1, titre:"Masse, poids, masse volumique et poussée d'Archimède", duree:45, nq:5, nex:5},
  {id:"sp-10", niv:1, titre:"Mouvements : vitesse et accélération", duree:45, nq:5, nex:5},
  {id:"sp-3", niv:1, titre:"Forces et équilibre d'un solide", duree:50, nq:5, nex:5},
  {id:"sp-11", niv:1, titre:"Machines simples : leviers, poulies, plan incliné et frottement", duree:45, nq:5, nex:5},
  {id:"sp-12", niv:1, titre:"Électricité : circuits en courant continu", duree:50, nq:5, nex:5},
  {id:"sp-13", niv:2, titre:"Lois de Newton : dynamique du levage et des engins", duree:50, nq:5, nex:5},
  {id:"sp-4", niv:2, titre:"Travail, énergie, puissance et rendement", duree:50, nq:5, nex:5},
  {id:"sp-5", niv:2, titre:"Courant alternatif monophasé et installation électrique d'un logement", duree:55, nq:5, nex:5},
  {id:"sp-14", niv:2, titre:"Atomes, molécules et réactions chimiques : la chimie de la chaux", duree:50, nq:5, nex:5},
  {id:"sp-15", niv:2, titre:"Acides, bases et pH : eaux et sols agressifs pour le béton", duree:45, nq:5, nex:5},
  {id:"sp-6", niv:2, titre:"Chimie des liants : plâtre, chaux et ciment", duree:55, nq:5, nex:5},
  {id:"sp-16", niv:3, titre:"Oxydoréduction et corrosion des armatures", duree:55, nq:5, nex:5},
  {id:"sp-7", niv:3, titre:"Électricité avancée : triphasé, moteurs, chute de tension et protections", duree:55, nq:5, nex:5},
  {id:"sp-8", niv:3, titre:"Chaleur, changements d'état et dilatation", duree:50, nq:5, nex:5},
  {id:"sp-9", niv:3, titre:"Ondes : son, ultrasons et lumière", duree:45, nq:5, nex:5},
  {id:"sp-17", niv:3, titre:"Magnétisme, transformateurs et moteurs électriques", duree:50, nq:5, nex:5}
 ]});
A.addMatiere({id:"tech", titre:"Technologie de construction", court:"Technologie", groupe:"constr", icone:"hammer", couleur:"#E8752A", niveau:"Débutant", heures:70, ordre:2, resume:"Comment se construit un bâtiment, du terrain nu à la réception : acteurs et étapes, systèmes constructifs, implantation, fondations, maçonnerie, béton armé sur chantier, planchers, escaliers, toitures, étanchéité, menuiseries, finitions, équipements, immeubles, ossatures métal et bois, construction durable, pathologies et contrôles, avec applications et exercices corrigés.", objectifs:[
  "Identifier les intervenants et les étapes d'un projet",
  "Nommer et situer tous les ouvrages d'un bâtiment",
  "Choisir un système constructif et des fondations adaptés",
  "Connaître la mise en œuvre et les règles de l'art de chaque ouvrage",
  "Organiser l'ordre d'intervention des corps d'état",
  "Diagnostiquer les désordres courants et contrôler l'exécution"
 ], applications:[
  "Lire un descriptif de travaux et un plan d'exécution",
  "Implanter et suivre un chantier de maison",
  "Dimensionner un escalier, une pente de toiture, une forme de pente",
  "Dialoguer avec architectes, bureaux d'études et artisans",
  "Réceptionner des ouvrages et rédiger des réserves"
 ], src:"data/cours/tech.js?v=010bffd7", chapitres:[
  {id:"tech-1", niv:1, titre:"Les acteurs et les étapes d'un projet de construction", duree:50, nq:5, nex:5, ns:1},
  {id:"tech-10", niv:1, titre:"Anatomie d'un bâtiment : vocabulaire et ouvrages", duree:45, nq:5, nex:5, ns:1},
  {id:"tech-2", niv:1, titre:"Les systèmes constructifs", duree:50, nq:5, nex:5, ns:1},
  {id:"tech-11", niv:1, titre:"Le terrain, l'installation de chantier et l'implantation", duree:50, nq:5, nex:5, ns:1},
  {id:"tech-3", niv:1, titre:"Les fondations superficielles et l'infrastructure d'une maison", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-4", niv:1, titre:"La maçonnerie : murs, chaînages et ouvertures", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-12", niv:2, titre:"Le béton armé sur le chantier : coffrage, ferraillage, bétonnage", duree:60, nq:5, nex:5, ns:1},
  {id:"tech-5", niv:2, titre:"Les planchers et les dalles", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-13", niv:2, titre:"Les escaliers : vocabulaire, tracé et mise en œuvre", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-14", niv:2, titre:"Les toitures inclinées : charpente et couverture", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-7", niv:2, titre:"L'étanchéité : toitures-terrasses, salles d'eau et ouvrages enterrés", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-15", niv:2, titre:"Les menuiseries extérieures et intérieures", duree:50, nq:5, nex:5, ns:1},
  {id:"tech-16", niv:2, titre:"Les finitions : enduits, chapes, carrelages, faux plafonds et peintures", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-6", niv:2, titre:"Les équipements techniques : électricité, plomberie et assainissement", duree:60, nq:5, nex:5, ns:1},
  {id:"tech-17", niv:3, titre:"Fondations profondes, radiers et ouvrages enterrés", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-8", niv:3, titre:"Construire en hauteur : immeubles et organisation technique", duree:60, nq:5, nex:5, ns:1},
  {id:"tech-18", niv:3, titre:"Les ossatures métalliques et en bois", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-19", niv:3, titre:"Construire durable en climat tropical : bioclimatique et matériaux locaux", duree:55, nq:5, nex:5, ns:1},
  {id:"tech-9", niv:3, titre:"Pathologies du bâtiment, diagnostic et réhabilitation", duree:60, nq:5, nex:5, ns:1},
  {id:"tech-20", niv:3, titre:"Contrôles d'exécution, réception des travaux et garanties", duree:50, nq:5, nex:5, ns:1}
 ]});
A.addMatiere({id:"therm", titre:"Thermique du bâtiment", court:"Thermique", groupe:"phys", icone:"thermo", couleur:"#C8363B", niveau:"Intermédiaire", heures:55, ordre:2, prerequis:["sp", "pb"], resume:"Comprendre et calculer les échanges de chaleur d'un bâtiment tropical : conduction, convection, rayonnement, résistance thermique et coefficient U, toitures et ponts thermiques, apports solaires et vitrages, renouvellement d'air sensible et latent, bilan de climatisation, inertie, systèmes de climatisation, consommation et eau chaude solaire.", objectifs:[
  "Distinguer et calculer conduction, convection et rayonnement",
  "Calculer la résistance R et le coefficient U d'une paroi multicouche",
  "Comparer des toitures et traiter les ponts thermiques",
  "Évaluer les apports solaires par les vitrages et les parois opaques",
  "Calculer les charges sensibles et latentes de l'air neuf",
  "Établir le bilan thermique d'un local et choisir un climatiseur",
  "Exploiter l'inertie thermique et estimer les consommations",
  "Dimensionner un chauffe-eau solaire"
 ], applications:[
  "Choix d'un isolant de toiture et d'un faux plafond",
  "Comparaison agglos, BTC, brique et béton",
  "Choix des vitrages et des protections solaires",
  "Dimensionnement des climatiseurs d'un bureau ou d'une villa",
  "Réduction de la facture de climatisation",
  "Eau chaude solaire d'un hôtel ou d'un centre de santé"
 ], src:"data/cours/therm.js?v=2a0b5d3d", chapitres:[
  {id:"therm-1", niv:1, titre:"Chaleur, température et modes de transfert", duree:45, nq:5, nex:5},
  {id:"therm-6", niv:1, titre:"Matériaux isolants et inertie : les bases", duree:45, nq:5, nex:5},
  {id:"therm-10", niv:1, titre:"Calculer le flux à travers une paroi simple", duree:40, nq:5, nex:5},
  {id:"therm-11", niv:1, titre:"D'où vient la chaleur dans un logement ?", duree:40, nq:5, nex:5},
  {id:"therm-7", niv:1, titre:"Le confort d'été : dix choix simples et efficaces", duree:40, nq:5, nex:5},
  {id:"therm-2", niv:2, titre:"Parois multicouches : résistance thermique et coefficient U", duree:50, nq:5, nex:5},
  {id:"therm-12", niv:2, titre:"Échanges en surface, rayonnement et profil de température", duree:50, nq:5, nex:5},
  {id:"therm-3", niv:2, titre:"Toitures, isolation et ponts thermiques", duree:50, nq:5, nex:5},
  {id:"therm-4", niv:2, titre:"Apports solaires par les vitrages et les parois opaques", duree:50, nq:5, nex:5},
  {id:"therm-13", niv:2, titre:"Vitrages et menuiseries : U, facteur solaire et transmission lumineuse", duree:45, nq:5, nex:5},
  {id:"therm-14", niv:2, titre:"Renouvellement d'air : charges sensibles et latentes", duree:45, nq:5, nex:5},
  {id:"therm-5", niv:3, titre:"Bilan thermique d'un local et choix du climatiseur", duree:60, nq:5, nex:5},
  {id:"therm-8", niv:3, titre:"Régime variable : inertie, déphasage et amortissement", duree:50, nq:5, nex:5},
  {id:"therm-15", niv:3, titre:"Les systèmes de climatisation : choisir, implanter, entretenir", duree:50, nq:5, nex:5},
  {id:"therm-9", niv:3, titre:"Performance énergétique et consommation de climatisation", duree:50, nq:5, nex:5},
  {id:"therm-16", niv:3, titre:"Eau chaude solaire : dimensionner un chauffe-eau solaire", duree:45, nq:5, nex:5}
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
 ], src:"data/cours/topo.js?v=28ec237b", chapitres:[
  {id:"topo-1", niv:1, titre:"Notions de base : unités, échelles et coordonnées", duree:55, nq:5, nex:5, ns:1},
  {id:"topo-10", niv:1, titre:"Les instruments du topographe et la mise en station", duree:50, nq:5, nex:4, ns:1},
  {id:"topo-2", niv:1, titre:"Mesure des distances et corrections", duree:55, nq:5, nex:4, ns:1},
  {id:"topo-6", niv:1, titre:"Lire un plan topographique, un plan de lotissement et un dossier foncier", duree:50, nq:5, nex:4, ns:1},
  {id:"topo-11", niv:1, titre:"Courbes de niveau, relief et profil en long simple", duree:50, nq:5, nex:4, ns:1},
  {id:"topo-3", niv:2, titre:"Le nivellement direct : principe, cheminement et compensation", duree:70, nq:5, nex:4, ns:1},
  {id:"topo-12", niv:2, titre:"Le nivellement sur le chantier : repères, plateformes et pentes", duree:55, nq:5, nex:4, ns:1},
  {id:"topo-13", niv:2, titre:"Mesure des angles au théodolite", duree:55, nq:5, nex:4, ns:1},
  {id:"topo-4", niv:2, titre:"Gisements, distances et coordonnées", duree:70, nq:5, nex:4, ns:1},
  {id:"topo-14", niv:2, titre:"Calcul des surfaces et division des parcelles", duree:55, nq:5, nex:4, ns:1},
  {id:"topo-5", niv:2, titre:"Implantation d'un bâtiment", duree:70, nq:5, nex:4, ns:1},
  {id:"topo-15", niv:2, titre:"Profils en long, profils en travers et lignes de projet", duree:60, nq:5, nex:4, ns:1},
  {id:"topo-9", niv:3, titre:"Polygonation : cheminement, fermetures et compensation", duree:80, nq:5, nex:4, ns:1},
  {id:"topo-16", niv:3, titre:"Tachéométrie et levé de détails à la station totale", duree:60, nq:5, nex:3, ns:1},
  {id:"topo-17", niv:3, titre:"Intersection, relèvement et densification du canevas", duree:50, nq:5, nex:3, ns:1},
  {id:"topo-7", niv:3, titre:"GNSS (GPS) et systèmes de coordonnées", duree:55, nq:5, nex:3, ns:1},
  {id:"topo-8", niv:3, titre:"Tracé routier : courbes circulaires et implantation", duree:70, nq:5, nex:4, ns:1},
  {id:"topo-18", niv:3, titre:"Cubatures et mouvements des terres", duree:70, nq:5, nex:4, ns:1},
  {id:"topo-19", niv:3, titre:"Erreurs, précision et tolérances des mesures", duree:55, nq:5, nex:4, ns:1}
 ]});
