// Histoires classées par thème.
// Pour ajouter une histoire : copier un bloc { ... } et changer les champs.
// "theme" doit correspondre à un "id" de la liste THEMES ci-dessous.
// Les paragraphes du texte sont séparés par une ligne vide (\n\n).
window.THEMES = [
  { id: "amour", nom: "Amour", emoji: "❤️" },
  { id: "philosophie", nom: "Philosophie", emoji: "🦉" },
  { id: "developpement-personnel", nom: "Développement personnel", emoji: "🌱" },
  { id: "finance", nom: "Finance", emoji: "💰" },
  { id: "resilience", nom: "Résilience", emoji: "🔥" },
  { id: "sagesse", nom: "Sagesse & contes", emoji: "📜" },
  { id: "amitie", nom: "Amitié", emoji: "🤝" },
  { id: "spiritualite", nom: "Spiritualité", emoji: "✨" }
];

window.HISTOIRES = [
  {
    id: "le-paysan-et-le-cheval",
    titre: "Le paysan et le cheval",
    theme: "philosophie",
    tempsLecture: 2,
    resume: "Bonne nouvelle ou mauvaise nouvelle ? Qui peut vraiment le savoir ?",
    texte: "Un vieux paysan possédait un cheval. Un matin, le cheval s'enfuit. Les voisins vinrent le plaindre : « Quelle malchance ! » Le paysan répondit simplement : « Peut-être. »\n\nLe lendemain, le cheval revint, suivi de trois chevaux sauvages. « Quelle chance ! » s'exclamèrent les voisins. « Peut-être », dit le paysan.\n\nSon fils voulut dresser l'un des chevaux sauvages, tomba et se cassa la jambe. « Quel malheur ! » dirent les voisins. « Peut-être », répondit le paysan.\n\nQuelques jours plus tard, des soldats passèrent dans le village pour enrôler tous les jeunes hommes dans une guerre. Ils laissèrent le fils, à cause de sa jambe cassée. Les voisins dirent : « Quelle chance ! » Et le paysan sourit : « Peut-être. »",
    morale: "Nous jugeons trop vite les événements. Ce qui paraît un malheur aujourd'hui peut ouvrir la porte à un bien demain."
  },
  {
    id: "le-tailleur-de-pierre",
    titre: "Le tailleur de pierre",
    theme: "sagesse",
    tempsLecture: 3,
    resume: "Un homme qui voulait toujours être quelqu'un d'autre.",
    texte: "Un tailleur de pierre, fatigué de son travail, vit passer un riche marchand. « Si seulement j'étais riche ! » Aussitôt, il devint marchand.\n\nPuis il vit un haut fonctionnaire porté en chaise, que tous saluaient. « Si seulement j'étais aussi puissant ! » Et il devint fonctionnaire. Mais le soleil brûlant l'accablait. « Le soleil est plus puissant que moi ! » Il devint soleil.\n\nUn nuage vint le cacher. Il devint nuage. Le vent poussa le nuage. Il devint vent. Mais une grande montagne résistait au vent. Il devint montagne.\n\nAlors il sentit qu'on frappait à son pied, petit coup après petit coup. C'était un tailleur de pierre qui, patiemment, le taillait. Et l'homme sourit : il redevint tailleur de pierre, heureux.",
    morale: "Courir après la place des autres ne rend pas heureux. Chacun a sa propre force."
  },
  {
    id: "le-bambou-chinois",
    titre: "Le bambou chinois",
    theme: "developpement-personnel",
    tempsLecture: 2,
    resume: "Cinq ans sans rien voir… puis trente mètres en six semaines.",
    texte: "Un jardinier planta une graine de bambou. Il l'arrosa chaque jour. La première année, rien ne poussa. La deuxième année, toujours rien. La troisième et la quatrième année non plus. Ses voisins se moquaient de lui.\n\nMais il continua d'arroser, jour après jour.\n\nLa cinquième année, une petite pousse apparut. En six semaines seulement, le bambou grimpa à près de trente mètres de haut.\n\nLes voisins demandèrent : « Comment a-t-il pu pousser si vite ? » Le jardinier répondit : « Il n'a pas poussé en six semaines. Il a poussé en cinq ans. Pendant tout ce temps, il construisait des racines assez solides pour porter sa hauteur. »",
    morale: "Quand vos efforts ne montrent aucun résultat visible, vous êtes peut-être en train de construire vos racines. Ne vous arrêtez pas."
  },
  {
    id: "les-deux-epargnants",
    titre: "Les deux épargnants",
    theme: "finance",
    tempsLecture: 3,
    resume: "Amina commence tôt, Karim commence tard. Qui gagne ?",
    texte: "Amina et Karim avaient 25 ans et le même salaire. Amina décida de mettre de côté 100 € par mois et de les placer. Karim préféra profiter : « J'épargnerai plus tard, quand je gagnerai plus. »\n\nÀ 35 ans, Amina arrêta de verser de l'argent, mais laissa son épargne placée. Karim, lui, commença enfin à placer 100 € par mois… et continua jusqu'à 65 ans.\n\nAmina avait versé pendant 10 ans. Karim pendant 30 ans, soit trois fois plus. Pourtant, à 65 ans, avec un rendement moyen de 7 % par an, c'est Amina qui avait le plus gros capital.\n\nKarim ne comprenait pas. Amina lui expliqua : « Je n'ai pas gagné grâce à ce que j'ai versé, mais grâce au temps. Mes intérêts ont produit des intérêts pendant 40 ans. »",
    morale: "Le temps est l'ingrédient le plus puissant de la richesse. Commencer petit mais tôt bat commencer gros mais tard."
  },
  {
    id: "le-dernier-pas",
    titre: "Le dernier pas",
    theme: "amour",
    tempsLecture: 3,
    resume: "Un couple âgé, une promenade, et ce qui compte vraiment.",
    texte: "Chaque soir depuis cinquante ans, Hawa et Ibrahim faisaient le tour du quartier main dans la main. Les jeunes du coin leur demandaient parfois leur secret.\n\nUn jour, Ibrahim répondit : « Au début, nous pensions que l'amour, c'était le grand frisson. Ensuite, nous avons cru que c'était de ne jamais se disputer. Aujourd'hui, nous savons que l'amour, c'est revenir. Revenir après une dispute. Revenir après une journée difficile. Revenir vers l'autre, encore et encore. »\n\nHawa ajouta en riant : « Et ralentir le pas quand l'autre fatigue. »\n\nCe soir-là, comme tous les soirs, Ibrahim marcha un peu moins vite, et Hawa serra un peu plus fort sa main.",
    morale: "L'amour durable n'est pas un sentiment qu'on trouve, c'est un choix qu'on renouvelle chaque jour."
  },
  {
    id: "le-vase-fele",
    titre: "Le vase fêlé",
    theme: "resilience",
    tempsLecture: 2,
    resume: "Ce que l'on croit être un défaut peut être un cadeau.",
    texte: "Un porteur d'eau utilisait deux grands vases suspendus à une perche. L'un était parfait, l'autre était fêlé et perdait la moitié de son eau en chemin.\n\nLe vase fêlé avait honte. Un jour, il dit au porteur : « Je suis désolé, à cause de ma fêlure tu fais tout ce travail pour rien. »\n\nLe porteur sourit : « As-tu remarqué les fleurs le long du chemin, seulement de ton côté ? J'ai toujours connu ta fêlure. J'ai semé des graines de ton côté, et chaque jour tu les as arrosées. Sans toi, ce chemin ne serait pas aussi beau. »",
    morale: "Nos fêlures et nos blessures peuvent faire naître de la beauté. Personne n'est parfait, et c'est très bien ainsi."
  },
  {
    id: "les-deux-amis-et-le-sable",
    titre: "Les deux amis et le sable",
    theme: "amitie",
    tempsLecture: 2,
    resume: "Ce qu'on écrit dans le sable et ce qu'on grave dans la pierre.",
    texte: "Deux amis traversaient le désert. Au cours d'une dispute, l'un gifla l'autre. Blessé, celui-ci écrivit dans le sable : « Aujourd'hui, mon meilleur ami m'a giflé. »\n\nPlus loin, ils trouvèrent une oasis. Celui qui avait été giflé glissa et faillit se noyer. Son ami le sauva. Une fois remis, il grava sur une pierre : « Aujourd'hui, mon meilleur ami m'a sauvé la vie. »\n\nIntrigué, l'ami demanda : « Pourquoi le sable, puis la pierre ? » Il répondit : « Quand quelqu'un nous blesse, on l'écrit dans le sable, pour que le vent du pardon l'efface. Quand quelqu'un nous fait du bien, on le grave dans la pierre, pour que rien ne l'efface. »",
    morale: "Oubliez vite les offenses, souvenez-vous longtemps des bienfaits."
  },
  {
    id: "la-tasse-de-the",
    titre: "La tasse de thé",
    theme: "spiritualite",
    tempsLecture: 2,
    resume: "Un professeur vient apprendre auprès d'un maître zen.",
    texte: "Un professeur réputé rendit visite à un maître zen pour qu'il lui enseigne le zen. Pendant que le maître préparait le thé, le professeur parlait sans arrêt de ses connaissances et de ses opinions.\n\nLe maître commença à verser le thé dans la tasse de son invité. La tasse fut bientôt pleine, mais il continua de verser. Le thé déborda sur la table.\n\n« Arrêtez, elle est pleine ! » s'écria le professeur.\n\n« Comme cette tasse, répondit le maître, vous êtes plein de vos opinions. Comment pourrais-je vous enseigner quoi que ce soit si vous ne videz pas d'abord votre tasse ? »",
    morale: "Pour apprendre, il faut d'abord accepter de ne pas tout savoir."
  },
  {
    id: "les-lettres-du-mardi",
    titre: "Les lettres du mardi",
    theme: "amour",
    tempsLecture: 4,
    resume: "Une lettre par semaine, pendant deux ans, pour un amour séparé par la mer.",
    texte: "Quand Aïcha partit étudier à Lyon, Youssouf resta à Abidjan. Les appels coûtaient cher et la connexion coupait sans arrêt. Alors ils firent un pacte : chaque mardi, chacun écrirait une vraie lettre, sur du papier.\n\nAu début, les lettres parlaient de manque. Puis elles parlèrent de tout : le prix du garba qui augmentait, la neige qu'Aïcha voyait pour la première fois, les doutes, les petites victoires. Youssouf découvrit qu'il connaissait mieux Aïcha par écrit qu'en face, parce qu'on ose écrire ce qu'on n'ose pas dire.\n\nUn mardi, aucune lettre n'arriva. Ni le suivant. Youssouf crut que tout était fini. Le troisième mardi, on frappa à sa porte. C'était Aïcha, une valise à la main, ses études terminées un mois plus tôt que prévu.\n\nElle lui tendit une enveloppe : « C'est la lettre de ce mardi. Je voulais te la donner en main propre. » À l'intérieur, une seule phrase : « Toutes ces lettres m'ont appris que je ne voulais pas d'autre destinataire que toi. »",
    morale: "La distance n'éteint pas l'amour quand on prend le temps de se parler vraiment."
  },
  {
    id: "le-parapluie-jaune",
    titre: "Le parapluie jaune",
    theme: "amour",
    tempsLecture: 3,
    resume: "Elle oubliait toujours son parapluie. Il en avait toujours un de trop.",
    texte: "Chaque matin, à l'arrêt de bus, Fatou oubliait son parapluie. Et chaque matin de pluie, un jeune homme silencieux lui tendait un parapluie jaune, puis montait dans le bus sans un mot.\n\nElle le lui rendait le soir, à la descente du bus. « Merci. » « De rien. » Ce fut toute leur conversation pendant trois mois.\n\nUn jour, elle remarqua qu'il était trempé : il n'avait qu'un seul parapluie, et il le lui donnait. Elle lui demanda pourquoi. Il rougit : « Parce que c'est la seule façon que j'ai trouvée pour vous parler deux fois par jour. »\n\nLe lendemain, il pleuvait. Fatou arriva avec son propre parapluie, l'ouvrit, et lui fit une place dessous. « Comme ça, on pourra parler pendant tout le trajet. »",
    morale: "Les plus belles histoires commencent souvent par de petits gestes répétés avec sincérité."
  },
  {
    id: "les-deux-jardins",
    titre: "Les deux jardins",
    theme: "amour",
    tempsLecture: 3,
    resume: "Un vieux jardinier explique à un jeune marié pourquoi son amour se fane.",
    texte: "Six mois après son mariage, Koffi se plaignait à son grand-père : « Au début, tout était facile. Maintenant on se dispute pour rien. L'amour s'en va. »\n\nLe grand-père l'emmena dans son jardin. D'un côté, des fleurs magnifiques. De l'autre, des herbes sèches. « J'ai planté les mêmes graines des deux côtés, le même jour. »\n\n« Alors pourquoi celui-ci est mort ? » demanda Koffi.\n\n« Parce que je ne l'ai arrosé qu'au début. Je pensais qu'une fois les fleurs sorties, elles pousseraient toutes seules. L'amour, c'est pareil. Le jour du mariage, on plante. Mais chaque jour, il faut arroser : un mot gentil, un merci, une écoute, un pardon. »\n\nCe soir-là, Koffi rentra avec des fleurs, et surtout avec une question pour sa femme : « Qu'est-ce que je pourrais faire pour que tu te sentes mieux aimée ? »",
    morale: "L'amour ne meurt pas d'un coup : il se dessèche quand on oublie de l'entretenir."
  },
  {
    id: "la-promesse-du-pecheur",
    titre: "La promesse du pêcheur",
    theme: "amour",
    tempsLecture: 3,
    resume: "Pendant une tempête, une femme allume une lampe chaque nuit.",
    texte: "Dans un village au bord de la mer, un pêcheur partit un matin. Le soir, une tempête se leva et son bateau ne revint pas. Tout le village le crut perdu.\n\nSa femme, Mariam, refusa de pleurer. Chaque nuit, elle allumait une lampe à huile à la fenêtre qui donnait sur la mer. Les voisins lui disaient d'accepter la réalité. Elle répondait : « Il m'a promis de rentrer. Je lui ai promis de l'attendre. Je tiens ma part. »\n\nAu bout de neuf nuits, un bateau abîmé apparut au loin. Son mari avait été poussé sur une île et avait réparé sa barque avec ce qu'il trouvait. Pour retrouver le village dans le noir, il avait suivi une petite lumière, toujours au même endroit.\n\n« Sans ta lampe, lui dit-il, je me serais perdu à quelques mètres de la maison. »",
    morale: "La fidélité et l'espérance sont parfois la lumière qui ramène ceux qu'on aime."
  },
  {
    id: "la-caverne",
    titre: "Les prisonniers de la caverne",
    theme: "philosophie",
    tempsLecture: 3,
    resume: "La célèbre allégorie de Platon : et si ce que nous voyons n'était que des ombres ?",
    texte: "Imaginez des hommes enchaînés depuis leur naissance au fond d'une caverne, face à un mur. Derrière eux brûle un feu. Entre le feu et eux passent des objets, et ils n'en voient que les ombres sur le mur. Pour eux, ces ombres sont la réalité.\n\nUn jour, l'un d'eux est libéré. Il se retourne, voit le feu, et la lumière lui fait mal aux yeux. On le traîne dehors, au soleil. D'abord ébloui, il découvre peu à peu les arbres, le ciel, le vrai monde.\n\nPlein de joie, il redescend pour libérer ses compagnons. Mais ses yeux, habitués au soleil, ne voient plus bien dans l'obscurité. Les autres se moquent de lui : « Tu vois, sortir t'a abîmé les yeux ! » Et ils refusent de le suivre.",
    morale: "Apprendre fait parfois mal et nous éloigne des idées confortables. Mais la vérité vaut toujours mieux que les ombres."
  },
  {
    id: "le-mendiant-assis-sur-un-tresor",
    titre: "Le mendiant assis sur un trésor",
    theme: "developpement-personnel",
    tempsLecture: 2,
    resume: "Trente ans à mendier assis sur une vieille caisse.",
    texte: "Un mendiant était assis au bord d'une route depuis plus de trente ans. Un jour, un voyageur passa. « Une petite pièce ? » demanda le mendiant. « Je n'ai rien à vous donner, répondit le voyageur. Mais sur quoi êtes-vous assis ? »\n\n« Rien, juste une vieille caisse. Je suis assis dessus depuis toujours. »\n\n« Avez-vous déjà regardé à l'intérieur ? » « Non, à quoi bon ? Elle est vide. » « Regardez quand même. »\n\nLe mendiant força le couvercle. La caisse était remplie d'or.",
    morale: "Nous cherchons souvent à l'extérieur ce que nous possédons déjà en nous : des talents, des idées, une force. Il faut oser ouvrir la caisse."
  },
  {
    id: "le-boulanger-et-les-pieces",
    titre: "Le boulanger et les pièces",
    theme: "finance",
    tempsLecture: 2,
    resume: "Une pièce de côté chaque jour : bêtise ou génie ?",
    texte: "Un jeune boulanger gagnait peu. Chaque soir, il mettait une seule pièce dans une jarre. Ses amis riaient : « Avec une pièce par jour, tu ne seras jamais riche ! »\n\nAu bout d'un an, la jarre lui permit d'acheter un second four. Il fit deux fois plus de pain, et mit alors deux pièces par jour. La deuxième année, il embaucha un apprenti. La troisième, il ouvrit une seconde boulangerie.\n\nSes amis, eux, gagnaient autant que lui au départ, mais dépensaient tout au marché chaque semaine. Dix ans plus tard, ils travaillaient dans ses boulangeries.",
    morale: "La richesse ne vient pas d'un coup de chance mais d'une petite discipline répétée et réinvestie."
  }
];
