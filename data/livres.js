// Résumés des grands livres de développement personnel.
// Pour ajouter un livre : copier un bloc { ... } et changer les champs.
// "id" doit être unique, en minuscules et sans espaces (il sert dans l'adresse de la page).
// "questions" : questions pour réfléchir. "action" : un petit exercice concret.
window.LIVRES = [
  {
    id: "reflechissez-et-devenez-riche",
    titre: "Réfléchissez et devenez riche",
    auteur: "Napoleon Hill",
    annee: 1937,
    categorie: "Succès",
    tempsLecture: 7,
    accroche: "Tout accomplissement commence par une pensée claire, un désir brûlant et un plan suivi avec persévérance.",
    idees: [
      {
        titre: "Le désir ardent",
        texte: "Le point de départ de toute réussite est un désir précis et intense, pas un simple souhait. Hill conseille de fixer un montant exact, une date, ce que l'on donnera en échange, et de relire ce but matin et soir."
      },
      {
        titre: "La foi et l'autosuggestion",
        texte: "Ce que l'on se répète finit par s'imprimer dans le subconscient. En affirmant son objectif avec émotion chaque jour, on transforme le doute en conviction, et la conviction en action."
      },
      {
        titre: "Les connaissances spécialisées et l'imagination",
        texte: "Les connaissances générales ne rendent pas riche : il faut des connaissances utiles, organisées et mises en pratique. L'imagination est l'atelier où l'on transforme une idée en plan."
      },
      {
        titre: "La décision et la persévérance",
        texte: "Les personnes qui réussissent décident vite et changent d'avis lentement. La plupart des échecs viennent d'un abandon juste avant la réussite : la persévérance est l'ingrédient qui fait la différence."
      },
      {
        titre: "Le « Master Mind » (le cerveau collectif)",
        texte: "S'entourer d'un petit groupe de personnes qui coopèrent dans l'harmonie vers un même but multiplie l'énergie, les idées et les ressources de chacun."
      }
    ],
    aRetenir: "Tout ce que l'esprit humain peut concevoir et croire, il peut le réaliser.",
    questions: [
      "Quel est mon objectif principal, formulé avec un chiffre et une date ?",
      "Qu'est-ce que je suis prêt à donner en échange pour l'atteindre ?",
      "Qui pourrait faire partie de mon « Master Mind » ?"
    ],
    action: "Écrivez votre objectif sur une feuille (quoi, combien, quand, en échange de quoi) et lisez-le à voix haute ce soir et demain matin."
  },
  {
    id: "les-lois-du-succes",
    titre: "Les lois du succès",
    auteur: "Napoleon Hill",
    annee: 1928,
    categorie: "Succès",
    tempsLecture: 7,
    accroche: "Seize leçons tirées de l'étude des grands bâtisseurs pour construire sa réussite pas à pas.",
    idees: [
      {
        titre: "Un objectif principal défini",
        texte: "Sans but précis, l'énergie se disperse. Choisir un objectif majeur, l'écrire et organiser sa vie autour de lui est la première loi."
      },
      {
        titre: "La confiance en soi et l'initiative",
        texte: "La confiance se construit en agissant. Le leader fait ce qui doit être fait sans qu'on le lui demande, et il prend la responsabilité des résultats."
      },
      {
        titre: "L'habitude d'épargner",
        texte: "Mettre de côté régulièrement donne de la liberté et du courage. Celui qui n'a aucune réserve doit accepter n'importe quelle condition."
      },
      {
        titre: "En faire plus que ce pour quoi on est payé",
        texte: "Rendre plus de service que prévu, et avec bonne humeur, attire tôt ou tard la reconnaissance, les promotions et les opportunités."
      },
      {
        titre: "Tirer profit de l'échec",
        texte: "L'échec temporaire n'est pas une défaite : il contient une leçon et souvent la graine d'un avantage équivalent. Il faut la chercher."
      },
      {
        titre: "La maîtrise de soi et la règle d'or",
        texte: "Contrôler ses émotions, penser avec justesse, se concentrer, coopérer et traiter les autres comme on voudrait être traité : ce sont les fondations d'un succès durable."
      }
    ],
    aRetenir: "Le succès n'est pas un coup de chance : c'est l'application constante de quelques lois simples.",
    questions: [
      "Dans quel domaine est-ce que je disperse mon énergie ?",
      "Quel échec récent contient une leçon que je n'ai pas encore tirée ?",
      "Où pourrais-je en faire un peu plus que ce qu'on attend de moi cette semaine ?"
    ],
    action: "Cette semaine, faites une chose de plus que ce qu'on vous demande au travail ou à la maison, sans l'annoncer."
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
        titre: "Le corps de souffrance",
        texte: "Nous portons d'anciennes douleurs émotionnelles qui se réveillent et cherchent à se nourrir de drames. Les reconnaître quand elles surgissent leur enlève leur pouvoir."
      },
      {
        titre: "Accepter ce qui est",
        texte: "Résister à la réalité crée la souffrance. Accepter n'est pas se résigner : c'est agir à partir de la clarté plutôt que de la peur."
      }
    ],
    aRetenir: "Demandez-vous quel « problème » vous avez en ce moment, pas l'an prochain ni demain : maintenant.",
    questions: [
      "Combien de temps aujourd'hui ai-je passé dans le passé ou le futur ?",
      "Quelle situation est-ce que je refuse d'accepter, et qu'est-ce que cela me coûte ?",
      "Qu'est-ce qui se passe, là, maintenant, autour de moi ?"
    ],
    action: "Trois fois aujourd'hui, arrêtez-vous une minute et sentez simplement votre respiration et vos mains, sans juger."
  },
  {
    id: "lois-quotidiennes-365",
    titre: "Les lois quotidiennes : 365 leçons de Robert Greene",
    auteur: "Robert Greene",
    annee: 2021,
    categorie: "Stratégie",
    tempsLecture: 6,
    accroche: "Une leçon par jour, tirée de toute l'œuvre de Greene, pour mieux se connaître, comprendre les autres et maîtriser sa vie.",
    idees: [
      {
        titre: "Une leçon par jour, un thème par mois",
        texte: "Le livre se lit au rythme d'une page par jour. Chaque mois explore un grand thème : trouver sa vocation, devenir maître de son art, comprendre la nature humaine, la stratégie, le pouvoir, la persuasion, et enfin le sens de la vie."
      },
      {
        titre: "Trouver sa tâche de vie",
        texte: "Chacun porte une inclination profonde, souvent visible dès l'enfance. La retrouver et s'y consacrer donne de l'énergie et un avantage que personne ne peut copier."
      },
      {
        titre: "La maîtrise demande un long apprentissage",
        texte: "Il n'y a pas de raccourci : les maîtres acceptent des années d'apprentissage patient, d'erreurs et de pratique avant de devenir créatifs et libres."
      },
      {
        titre: "Comprendre la nature humaine",
        texte: "Nous sommes tous émotifs, envieux, vaniteux à des degrés divers. Observer ces traits chez soi d'abord, puis chez les autres, évite bien des pièges."
      },
      {
        titre: "Penser en stratège",
        texte: "Garder son calme, regarder loin, choisir ses batailles et agir avec un plan plutôt que réagir sous le coup de l'émotion."
      }
    ],
    aRetenir: "Un peu chaque jour : la connaissance de soi et des autres se construit lentement, comme un muscle.",
    questions: [
      "Qu'est-ce qui me passionnait naturellement quand j'étais enfant ?",
      "Dans quelle compétence suis-je encore apprenti, et l'ai-je accepté ?",
      "Quelle émotion me fait le plus souvent agir sans réfléchir ?"
    ],
    action: "Notez chaque soir pendant une semaine une situation où vous avez réagi sous le coup de l'émotion, et ce que vous auriez pu faire à la place."
  },
  {
    id: "48-lois-du-pouvoir",
    titre: "Power : les 48 lois du pouvoir",
    auteur: "Robert Greene",
    annee: 1998,
    categorie: "Stratégie",
    tempsLecture: 7,
    accroche: "Trois mille ans d'histoire résumés en 48 lois pour comprendre le jeu du pouvoir, et ne pas en être la victime.",
    idees: [
      {
        titre: "Ne surpassez jamais le maître (loi 1)",
        texte: "Faire sentir à ses supérieurs qu'ils sont brillants plutôt que de leur faire de l'ombre. Celui qui humilie son patron s'en fait un ennemi."
      },
      {
        titre: "Dites-en toujours moins que nécessaire (loi 4)",
        texte: "Plus on parle, plus on dévoile ses faiblesses et plus on risque de dire une bêtise. Les paroles rares paraissent plus fortes."
      },
      {
        titre: "Protégez votre réputation (loi 5)",
        texte: "La réputation est la pierre angulaire du pouvoir. Elle se construit lentement et peut s'effondrer en un instant : il faut la défendre."
      },
      {
        titre: "Utilisez l'absence pour accroître le respect (loi 16)",
        texte: "Ce qui est trop disponible perd de sa valeur. Savoir se retirer au bon moment rend sa présence plus précieuse."
      },
      {
        titre: "Soyez insaisissable (loi 48)",
        texte: "Rester flexible et s'adapter aux circonstances plutôt que s'enfermer dans une forme rigide que les autres peuvent prévoir et attaquer."
      },
      {
        titre: "Un livre à lire comme un bouclier",
        texte: "Beaucoup de lois décrivent des manipulations. Les connaître sert d'abord à les reconnaître quand on les subit, et à garder une ligne éthique dans ses propres choix."
      }
    ],
    aRetenir: "Le pouvoir est un jeu social : mieux vaut en connaître les règles que les subir.",
    questions: [
      "Dans quelle situation récente aurais-je dû parler moins ?",
      "Quelle loi ai-je déjà vu quelqu'un utiliser contre moi ?",
      "Où est ma limite éthique : quelles lois je refuse d'appliquer ?"
    ],
    action: "Pendant votre prochaine réunion ou discussion importante, parlez moins que d'habitude et observez l'effet."
  },
  {
    id: "guide-pour-investir",
    titre: "Guide pour investir",
    auteur: "Robert T. Kiyosaki",
    annee: 2000,
    categorie: "Finance",
    tempsLecture: 6,
    accroche: "La suite de Père riche, père pauvre : comment penser, s'organiser et apprendre pour devenir un véritable investisseur.",
    idees: [
      {
        titre: "Investir est un plan, pas un produit",
        texte: "Ce n'est pas l'action, l'immobilier ou le placement qui rend riche, c'est le plan et la discipline de l'investisseur. Le risque vient surtout du manque de connaissances."
      },
      {
        titre: "Sécurité, confort, puis richesse",
        texte: "Un plan financier se construit en trois étapes : d'abord se protéger, ensuite être à l'aise, enfin chercher la richesse. Brûler les étapes mène souvent à la perte."
      },
      {
        titre: "Les niveaux d'investisseurs",
        texte: "Kiyosaki décrit plusieurs niveaux, de celui qui n'a rien à investir jusqu'à l'investisseur « initié » qui crée et contrôle ses propres actifs. Le but est de monter de niveau en apprenant."
      },
      {
        titre: "Le triangle de l'entreprise",
        texte: "Les plus grands investisseurs créent des entreprises. Une entreprise solide repose sur une mission, une équipe, un leadership, des flux d'argent, de la communication, des systèmes, du juridique et un produit."
      },
      {
        titre: "Garder le contrôle",
        texte: "Plus on contrôle ses investissements (ses dépenses, ses dettes, ses actifs, ses décisions), moins on dépend de la chance. Le contrôle réduit le risque."
      }
    ],
    aRetenir: "Le plus grand risque, c'est de ne pas savoir ce que l'on fait.",
    questions: [
      "À quelle étape suis-je : sécurité, confort ou richesse ?",
      "Qu'est-ce que je contrôle vraiment dans mes finances aujourd'hui ?",
      "Quelle compétence financière dois-je apprendre en premier ?"
    ],
    action: "Faites la liste de vos actifs (ce qui vous rapporte) et de vos passifs (ce qui vous coûte) sur une seule page."
  },
  {
    id: "investisseur-intelligent",
    titre: "L'investisseur intelligent",
    auteur: "Benjamin Graham",
    annee: 1949,
    categorie: "Finance",
    tempsLecture: 7,
    accroche: "La bible de l'investissement à long terme : protéger son capital, garder la tête froide et acheter avec une marge de sécurité.",
    idees: [
      {
        titre: "Investir ou spéculer",
        texte: "Investir, c'est analyser, protéger son capital et viser un rendement raisonnable. Tout le reste est de la spéculation. Il faut savoir à tout moment lequel des deux on fait."
      },
      {
        titre: "Monsieur Marché",
        texte: "Imaginez un associé lunatique qui vous propose chaque jour un prix différent pour vos parts. Il ne faut pas le suivre dans ses humeurs, mais profiter de ses excès de pessimisme pour acheter."
      },
      {
        titre: "La marge de sécurité",
        texte: "N'acheter que lorsque le prix est nettement inférieur à la valeur réelle estimée. Cet écart protège contre les erreurs de calcul et la malchance."
      },
      {
        titre: "Investisseur défensif ou entreprenant",
        texte: "L'investisseur défensif cherche la simplicité : diversifier, répartir entre actions et obligations, investir régulièrement. L'entreprenant consacre beaucoup de temps à l'analyse. Il faut choisir honnêtement son camp."
      },
      {
        titre: "Le pire ennemi, c'est soi-même",
        texte: "Les plus grandes pertes viennent des émotions : la peur pendant les crises, l'avidité pendant les euphories. La discipline vaut plus que l'intelligence."
      }
    ],
    aRetenir: "Le problème principal de l'investisseur, et même son pire ennemi, est probablement lui-même.",
    questions: [
      "Est-ce que j'investis ou est-ce que je spécule en ce moment ?",
      "Comment ai-je réagi la dernière fois que mes placements ont baissé ?",
      "Suis-je plutôt un investisseur défensif ou entreprenant ?"
    ],
    action: "Avant votre prochain achat (placement ou gros achat), écrivez en trois lignes pourquoi le prix est inférieur à la valeur."
  },
  {
    id: "comment-parler-en-public",
    titre: "Comment parler en public",
    auteur: "Dale Carnegie",
    annee: 1926,
    categorie: "Communication",
    tempsLecture: 5,
    accroche: "Vaincre le trac, préparer son message et parler avec conviction devant n'importe quel public.",
    idees: [
      {
        titre: "La peur se vainc en parlant",
        texte: "Presque tout le monde a le trac. On ne le fait pas disparaître en attendant d'être prêt, mais en prenant la parole souvent, dans de petites occasions d'abord."
      },
      {
        titre: "Parler de ce que l'on connaît",
        texte: "Les meilleurs sujets sont ceux que la vie nous a appris : nos expériences, nos erreurs, nos convictions. On a « gagné le droit » d'en parler."
      },
      {
        titre: "Préparer sans apprendre par cœur",
        texte: "Réfléchir au sujet, rassembler des exemples, organiser les idées, puis répéter en parlant naturellement. Un texte récité sonne faux."
      },
      {
        titre: "Des exemples concrets et de l'enthousiasme",
        texte: "Les histoires, les chiffres, les images marquent plus que les idées abstraites. Et si vous êtes convaincu, votre public le sentira."
      },
      {
        titre: "Soigner le début et la fin",
        texte: "Accrocher l'attention dès la première phrase, et finir par un appel clair à l'action ou une phrase qui reste en tête."
      }
    ],
    aRetenir: "On n'a pas besoin d'être né orateur : il suffit d'avoir quelque chose à dire et l'envie de le partager.",
    questions: [
      "Sur quel sujet ai-je « gagné le droit » de parler grâce à mon expérience ?",
      "Quelle histoire personnelle pourrait illustrer mon message ?",
      "Quelle est la dernière fois où j'ai évité de prendre la parole ?"
    ],
    action: "Racontez une histoire de deux minutes à un proche ou devant votre téléphone en vidéo, puis réécoutez-vous."
  },
  {
    id: "homme-le-plus-riche-de-babylone",
    titre: "L'homme le plus riche de Babylone",
    auteur: "George S. Clason",
    annee: 1926,
    categorie: "Finance",
    tempsLecture: 5,
    accroche: "Des paraboles de l'ancienne Babylone qui enseignent les règles simples et éternelles de l'argent.",
    idees: [
      {
        titre: "Gardez au moins un dixième de ce que vous gagnez",
        texte: "Arkad, l'homme le plus riche de Babylone, commence par une règle : sur dix pièces gagnées, n'en dépenser que neuf. Cette pièce gardée est la graine de la fortune."
      },
      {
        titre: "Contrôlez vos dépenses",
        texte: "Les dépenses grandissent toujours au niveau des revenus si on ne les surveille pas. Distinguer les vrais besoins des simples envies."
      },
      {
        titre: "Faites travailler votre or",
        texte: "L'argent épargné doit être placé pour rapporter, et ses revenus doivent à leur tour rapporter. Chaque pièce devient un ouvrier qui travaille pour vous."
      },
      {
        titre: "Protégez votre capital",
        texte: "Ne pas confier son argent à ceux qui n'y connaissent rien, et se méfier des promesses de gains rapides. Demander conseil aux personnes expérimentées."
      },
      {
        titre: "Augmentez votre capacité à gagner",
        texte: "Apprendre, devenir plus compétent, et ainsi gagner plus. Posséder sa maison et préparer ses revenus futurs complètent les sept remèdes contre une bourse plate."
      }
    ],
    aRetenir: "Une partie de tout ce que vous gagnez doit vous appartenir.",
    questions: [
      "Quelle part de mes revenus est-ce que je garde vraiment chaque mois ?",
      "Quelles dépenses sont des envies déguisées en besoins ?",
      "À qui demandé-je conseil pour mon argent, et sont-ils compétents ?"
    ],
    action: "Dès votre prochain revenu, mettez 10 % de côté sur un compte séparé avant toute autre dépense."
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
      },
      {
        titre: "Éviter les disputes",
        texte: "On ne gagne jamais vraiment une dispute : même si on a raison, l'autre se sent humilié. Respecter son opinion et reconnaître vite ses propres torts."
      }
    ],
    aRetenir: "Parlez aux gens d'eux-mêmes et ils vous écouteront pendant des heures.",
    questions: [
      "Qui ai-je critiqué récemment, et qu'est-ce que cela a changé ?",
      "Quand ai-je vraiment écouté quelqu'un pour la dernière fois ?",
      "Quel prénom est-ce que j'oublie toujours ?"
    ],
    action: "Aujourd'hui, posez à quelqu'un trois questions sur lui sans parler de vous."
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
    aRetenir: "Ce n'est pas combien vous gagnez qui compte, mais combien vous gardez et ce que vous en faites.",
    questions: [
      "Ma maison, ma voiture, mon téléphone : actifs ou passifs ?",
      "Qu'est-ce que mon travail actuel m'apprend, en plus de me payer ?",
      "Si je perdais mon salaire, combien de mois pourrais-je tenir ?"
    ],
    action: "Calculez combien de mois vous pourriez vivre sans salaire avec votre épargne actuelle."
  },
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
    aRetenir: "On ne s'élève pas au niveau de ses objectifs, on retombe au niveau de ses systèmes.",
    questions: [
      "Quelle personne est-ce que je veux devenir, et quelle petite action le prouverait ?",
      "Quelle mauvaise habitude pourrais-je rendre plus difficile dès aujourd'hui ?",
      "Quelle est la version « deux minutes » de l'habitude que je repousse ?"
    ],
    action: "Choisissez une habitude et faites-en la version de deux minutes chaque jour pendant une semaine."
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
    aRetenir: "Ce n'est pas ce qui nous arrive qui nous blesse, c'est notre réponse à ce qui nous arrive.",
    questions: [
      "Qu'est-ce que je voudrais qu'on dise de moi à la fin de ma vie ?",
      "Quelle chose importante mais pas urgente est-ce que je repousse ?",
      "Avec qui devrais-je écouter avant de vouloir convaincre ?"
    ],
    action: "Bloquez une heure cette semaine pour une seule tâche « importante mais pas urgente »."
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
    aRetenir: "La liberté commence quand on cesse de vivre selon les accords que la peur nous a fait signer.",
    questions: [
      "Quelle phrase blessante me suis-je dite à moi-même cette semaine ?",
      "Quelle remarque ai-je prise personnellement alors qu'elle parlait surtout de l'autre ?",
      "Quelle supposition pourrais-je vérifier en posant simplement la question ?"
    ],
    action: "Aujourd'hui, à chaque fois que vous supposez ce que pense quelqu'un, posez-lui la question."
  },
  {
    id: "mindset",
    titre: "Changer d'état d'esprit (Mindset)",
    auteur: "Carol S. Dweck",
    annee: 2006,
    categorie: "Habitudes",
    tempsLecture: 5,
    accroche: "Croire que l'on peut progresser change la façon dont on apprend, échoue et réussit.",
    idees: [
      {
        titre: "État d'esprit fixe ou de développement",
        texte: "Avec un état d'esprit fixe, on croit que l'intelligence et le talent sont figés. Avec un état d'esprit de développement, on croit qu'ils se travaillent. Ce simple choix change tout."
      },
      {
        titre: "L'échec comme information",
        texte: "Pour l'état d'esprit fixe, l'échec dit « tu es nul ». Pour l'état d'esprit de développement, il dit « voilà ce qu'il faut encore apprendre »."
      },
      {
        titre: "Le pouvoir du « pas encore »",
        texte: "Remplacer « je n'y arrive pas » par « je n'y arrive pas encore » ouvre la porte à l'effort et à la progression."
      },
      {
        titre: "Féliciter l'effort, pas le talent",
        texte: "Dire à un enfant « tu es intelligent » le pousse à éviter les défis. Le féliciter pour ses efforts et sa stratégie lui donne envie d'en relever."
      }
    ],
    aRetenir: "Devenir est meilleur qu'être.",
    questions: [
      "Dans quel domaine est-ce que je me dis « je ne suis pas doué » ?",
      "Quel échec récent pourrais-je relire comme une information ?",
      "Comment est-ce que je félicite mes enfants ou mes proches ?"
    ],
    action: "Chaque fois que vous pensez « je n'y arrive pas » aujourd'hui, ajoutez « encore »."
  },
  {
    id: "homme-en-quete-de-sens",
    titre: "Découvrir un sens à sa vie (L'homme en quête de sens)",
    auteur: "Viktor E. Frankl",
    annee: 1946,
    categorie: "Sagesse",
    tempsLecture: 5,
    accroche: "Un psychiatre survivant des camps de concentration montre que trouver un sens permet de tout traverser.",
    idees: [
      {
        titre: "La dernière des libertés",
        texte: "On peut tout enlever à un être humain, sauf une chose : la liberté de choisir son attitude face aux circonstances."
      },
      {
        titre: "Le sens avant le bonheur",
        texte: "Le bonheur ne se poursuit pas directement : il arrive comme une conséquence quand on se consacre à quelque chose ou à quelqu'un."
      },
      {
        titre: "Trois sources de sens",
        texte: "On trouve du sens en créant une œuvre ou en accomplissant une tâche, en aimant quelqu'un, et en choisissant une attitude courageuse face à une souffrance inévitable."
      },
      {
        titre: "Avoir un « pourquoi »",
        texte: "Dans les camps, ceux qui avaient une raison de vivre (un être aimé à retrouver, un livre à écrire) résistaient mieux."
      }
    ],
    aRetenir: "Celui qui a un pourquoi peut supporter presque n'importe quel comment.",
    questions: [
      "Quel est mon « pourquoi » en ce moment ?",
      "Pour qui ou pour quoi est-ce que je me lève le matin ?",
      "Quelle souffrance pourrais-je regarder avec une autre attitude ?"
    ],
    action: "Écrivez en une phrase pour qui ou pour quoi vous voulez vous battre cette année."
  },
  {
    id: "pensees-pour-moi-meme",
    titre: "Pensées pour moi-même",
    auteur: "Marc Aurèle",
    annee: "vers 170-180",
    categorie: "Sagesse",
    tempsLecture: 5,
    accroche: "Le journal intime d'un empereur romain stoïcien : se gouverner soi-même avant de gouverner le monde.",
    idees: [
      {
        titre: "Ce qui dépend de nous",
        texte: "Nos jugements, nos choix et nos actions dépendent de nous ; le reste non. La paix vient de mettre son énergie uniquement dans ce qui dépend de nous."
      },
      {
        titre: "Se préparer chaque matin",
        texte: "Marc Aurèle se disait chaque matin qu'il rencontrerait des gens ingrats ou agressifs, et qu'il ne devait pas s'en étonner ni leur en vouloir."
      },
      {
        titre: "Tout passe",
        texte: "Les choses, les gens, la gloire passent vite. Se le rappeler remet les soucis à leur juste taille et invite à profiter du présent."
      },
      {
        titre: "Agir pour le bien commun",
        texte: "Nous sommes faits pour coopérer, comme les mains et les pieds d'un même corps. Une action juste est celle qui sert aussi les autres."
      }
    ],
    aRetenir: "Tu as du pouvoir sur ton esprit, pas sur les événements extérieurs. Comprends cela et tu trouveras la force.",
    questions: [
      "Qu'est-ce qui me préoccupe aujourd'hui et ne dépend pas de moi ?",
      "Dans dix ans, ce souci aura-t-il encore de l'importance ?",
      "Quelle action utile aux autres puis-je faire aujourd'hui ?"
    ],
    action: "Ce soir, écrivez trois lignes : ce qui s'est bien passé, ce que j'aurais pu mieux faire, ce que je ferai demain."
  },
  {
    id: "cinq-langages-de-l-amour",
    titre: "Les 5 langages de l'amour",
    auteur: "Gary Chapman",
    annee: 1992,
    categorie: "Relations",
    tempsLecture: 5,
    accroche: "Nous n'exprimons pas tous l'amour de la même façon. Apprendre la langue de l'autre change un couple.",
    idees: [
      {
        titre: "Cinq façons d'aimer",
        texte: "Les paroles valorisantes, les moments de qualité, les cadeaux, les services rendus et le toucher physique. Chacun a un langage principal."
      },
      {
        titre: "Le réservoir d'amour",
        texte: "Chaque personne a un réservoir affectif. Quand il est plein, on se sent aimé et on supporte mieux les difficultés. Quand il est vide, tout devient conflit."
      },
      {
        titre: "Parler la langue de l'autre",
        texte: "On a tendance à aimer l'autre dans sa propre langue. Offrir des cadeaux à quelqu'un qui a besoin de temps passé ensemble, c'est parler une langue qu'il ne comprend pas."
      },
      {
        titre: "L'amour est un choix",
        texte: "Après la passion des débuts, l'amour durable devient une décision quotidienne d'apprendre et de pratiquer le langage de l'autre."
      }
    ],
    aRetenir: "Aimer quelqu'un, c'est apprendre à lui dire « je t'aime » dans sa langue, pas dans la nôtre.",
    questions: [
      "Quel est mon langage de l'amour principal ?",
      "Et celui de la personne que j'aime ? Comment le sais-je ?",
      "Quand ai-je rempli son réservoir pour la dernière fois ?"
    ],
    action: "Demandez à la personne que vous aimez : « Qu'est-ce qui te fait te sentir le plus aimé(e) ? »"
  },
  {
    id: "l-alchimiste",
    titre: "L'Alchimiste",
    auteur: "Paulo Coelho",
    annee: 1988,
    categorie: "Spiritualité",
    tempsLecture: 4,
    accroche: "Un jeune berger part chercher un trésor et découvre que le voyage compte autant que le but.",
    idees: [
      {
        titre: "La Légende Personnelle",
        texte: "Chacun a un rêve profond, ce qu'il désire vraiment accomplir. Le suivre est la seule vraie obligation, même quand le monde nous pousse à y renoncer."
      },
      {
        titre: "Les signes sur le chemin",
        texte: "La vie envoie des signes et des rencontres à ceux qui avancent. Il faut rester attentif pour les reconnaître."
      },
      {
        titre: "La peur d'échouer",
        texte: "Ce qui empêche le plus de réaliser son rêve, c'est la peur de l'échec. Pourtant, chaque recherche commence par la chance du débutant et se termine par l'épreuve du conquérant."
      },
      {
        titre: "Le trésor était tout près",
        texte: "Le berger découvre que son trésor était là où il avait commencé, mais il fallait faire le voyage pour le comprendre."
      }
    ],
    aRetenir: "Quand tu veux quelque chose, tout l'Univers conspire à te permettre de réaliser ton désir.",
    questions: [
      "Quel rêve ai-je mis de côté pour plus tard ?",
      "Qu'est-ce que la peur m'empêche de commencer ?",
      "Quel signe récent pourrait m'indiquer la direction à prendre ?"
    ],
    action: "Écrivez le rêve que vous avez abandonné et la toute première petite étape pour le reprendre."
  }
];
