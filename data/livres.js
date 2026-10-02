// Résumés des grands livres de développement personnel.
// Pour ajouter un livre : copier un bloc { ... } et changer les champs.
// "id" doit être unique, en minuscules et sans espaces (il sert dans l'adresse de la page).
window.LIVRES = [
  {
    id: "habitudes-atomiques",
    titre: "Atomic Habits (Un rien peut tout changer)",
    auteur: "James Clear",
    annee: 2018,
    categorie: "Habitudes",
    tempsLecture: 6,
    accroche: "De petits changements répétés chaque jour produisent des résultats immenses avec le temps.",
    idees: [
      {
        titre: "S'améliorer de 1 % par jour",
        texte: "Les habitudes sont les intérêts composés de la vie. Un progrès minuscule, répété chaque jour, devient énorme sur un an. L'inverse est aussi vrai : de petites mauvaises habitudes s'accumulent en silence."
      },
      {
        titre: "Viser une identité, pas seulement un objectif",
        texte: "Au lieu de dire « je veux courir un marathon », dire « je suis un coureur ». Chaque action est un vote pour la personne que l'on veut devenir."
      },
      {
        titre: "Les quatre lois du changement",
        texte: "Pour créer une bonne habitude : la rendre évidente, attrayante, facile et satisfaisante. Pour en casser une mauvaise : la rendre invisible, repoussante, difficile et insatisfaisante."
      },
      {
        titre: "La règle des deux minutes",
        texte: "Réduire une nouvelle habitude à une version qui prend moins de deux minutes. « Lire 30 pages » devient « lire une page ». On apprend d'abord à se présenter, ensuite à progresser."
      },
      {
        titre: "Les systèmes battent les objectifs",
        texte: "Les gagnants et les perdants ont souvent les mêmes objectifs. Ce qui fait la différence, c'est le système quotidien qui mène au résultat."
      }
    ],
    aRetenir: "On ne s'élève pas au niveau de ses objectifs, on retombe au niveau de ses systèmes."
  },
  {
    id: "sept-habitudes",
    titre: "Les 7 habitudes de ceux qui réalisent tout ce qu'ils entreprennent",
    auteur: "Stephen R. Covey",
    annee: 1989,
    categorie: "Efficacité",
    tempsLecture: 7,
    accroche: "Passer de la dépendance à l'indépendance, puis à l'interdépendance, grâce à des principes durables.",
    idees: [
      {
        titre: "Être proactif",
        texte: "Entre un événement et notre réaction, il existe un espace : notre liberté de choisir. Se concentrer sur ce que l'on peut influencer plutôt que sur ce que l'on subit."
      },
      {
        titre: "Commencer avec la fin en tête",
        texte: "Définir ce qui compte vraiment pour soi, comme une mission personnelle, puis aligner ses actions sur cette vision."
      },
      {
        titre: "Donner la priorité aux priorités",
        texte: "Consacrer du temps à ce qui est important mais pas urgent : santé, relations, apprentissage, préparation. C'est là que se construit l'avenir."
      },
      {
        titre: "Penser gagnant-gagnant et chercher d'abord à comprendre",
        texte: "Dans une relation, rechercher des solutions bénéfiques pour tous. Écouter vraiment l'autre avant de chercher à se faire comprendre."
      },
      {
        titre: "Créer des synergies et aiguiser la scie",
        texte: "Le tout est plus grand que la somme des parties quand on coopère. Et il faut se renouveler régulièrement : corps, esprit, cœur et âme."
      }
    ],
    aRetenir: "Ce n'est pas ce qui nous arrive qui nous blesse, c'est notre réponse à ce qui nous arrive."
  },
  {
    id: "pere-riche-pere-pauvre",
    titre: "Père riche, père pauvre",
    auteur: "Robert T. Kiyosaki",
    annee: 1997,
    categorie: "Finance",
    tempsLecture: 5,
    accroche: "L'école apprend à travailler pour l'argent ; les riches apprennent à faire travailler l'argent pour eux.",
    idees: [
      {
        titre: "Actifs et passifs",
        texte: "Un actif met de l'argent dans votre poche (location, entreprise, placements). Un passif en retire (crédit conso, voiture de luxe). Les riches achètent des actifs."
      },
      {
        titre: "L'éducation financière d'abord",
        texte: "Comprendre la comptabilité, l'investissement, les marchés et la fiscalité compte plus que le niveau de salaire."
      },
      {
        titre: "Se payer en premier",
        texte: "Mettre de côté et investir une part de ses revenus avant de payer les dépenses, pour que l'épargne ne soit pas « ce qui reste »."
      },
      {
        titre: "Travailler pour apprendre",
        texte: "Choisir aussi ses emplois pour les compétences qu'ils apportent : vendre, communiquer, gérer. Ces compétences rapportent toute la vie."
      }
    ],
    aRetenir: "Ce n'est pas combien vous gagnez qui compte, mais combien vous gardez et ce que vous en faites."
  },
  {
    id: "quatre-accords-tolteques",
    titre: "Les quatre accords toltèques",
    auteur: "Don Miguel Ruiz",
    annee: 1997,
    categorie: "Sagesse",
    tempsLecture: 4,
    accroche: "Quatre engagements simples pour se libérer des croyances qui créent la souffrance.",
    idees: [
      {
        titre: "Que votre parole soit impeccable",
        texte: "Parler avec intégrité, dire ce que l'on pense vraiment, et ne pas utiliser les mots contre soi-même ou contre les autres."
      },
      {
        titre: "N'en faites jamais une affaire personnelle",
        texte: "Ce que disent et font les autres est une projection de leur propre réalité. En le comprenant, on devient beaucoup moins vulnérable."
      },
      {
        titre: "Ne faites pas de suppositions",
        texte: "Oser poser des questions et exprimer ce que l'on veut vraiment, plutôt que d'imaginer ce que pensent les autres."
      },
      {
        titre: "Faites toujours de votre mieux",
        texte: "Notre « mieux » change selon les jours. En faisant de son mieux, on évite le jugement de soi et les regrets."
      }
    ],
    aRetenir: "La liberté commence quand on cesse de vivre selon les accords que la peur nous a fait signer."
  },
  {
    id: "pouvoir-du-moment-present",
    titre: "Le pouvoir du moment présent",
    auteur: "Eckhart Tolle",
    annee: 1997,
    categorie: "Spiritualité",
    tempsLecture: 5,
    accroche: "La paix intérieure se trouve en sortant du bruit du mental pour habiter l'instant présent.",
    idees: [
      {
        titre: "Vous n'êtes pas votre mental",
        texte: "Le flot de pensées n'est pas qui nous sommes. Observer ses pensées sans s'y identifier est le premier pas vers la liberté."
      },
      {
        titre: "Le présent est tout ce qui existe",
        texte: "Le passé et le futur n'existent que dans la pensée. La vie se passe toujours maintenant."
      },
      {
        titre: "Accepter ce qui est",
        texte: "Résister à la réalité crée la souffrance. Accepter n'est pas se résigner : c'est agir à partir de la clarté plutôt que de la peur."
      }
    ],
    aRetenir: "Demandez-vous quel « problème » vous avez en ce moment, pas l'an prochain ni demain : maintenant."
  },
  {
    id: "comment-se-faire-des-amis",
    titre: "Comment se faire des amis",
    auteur: "Dale Carnegie",
    annee: 1936,
    categorie: "Relations",
    tempsLecture: 5,
    accroche: "Les principes intemporels pour être apprécié, convaincre sans blesser et influencer avec bienveillance.",
    idees: [
      {
        titre: "Ne pas critiquer, ne pas condamner",
        texte: "La critique met l'autre sur la défensive. Chercher à comprendre ses raisons est plus efficace et plus humain."
      },
      {
        titre: "S'intéresser sincèrement aux autres",
        texte: "On se fait plus d'amis en deux mois en s'intéressant aux autres qu'en deux ans en essayant de les intéresser à soi."
      },
      {
        titre: "Retenir les prénoms et sourire",
        texte: "Le prénom d'une personne est pour elle le son le plus doux. Un sourire sincère ouvre les portes."
      },
      {
        titre: "Laisser l'autre parler de lui",
        texte: "Être un bon auditeur et encourager les autres à parler d'eux-mêmes crée des liens solides."
      }
    ],
    aRetenir: "Parlez aux gens d'eux-mêmes et ils vous écouteront pendant des heures."
  }
];
