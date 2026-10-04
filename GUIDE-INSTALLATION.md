# BâtiPro Académie : mise en ligne (Supabase + GitHub + Netlify + IA)

Durée : environ 30 minutes, depuis un ordinateur. Même principe que pour EventLoc CI.

## En bref : mise en ligne en 7 étapes

| # | Où | Quoi faire |
|---|---|---|
| 1 | **Supabase** | Créer le projet, coller et exécuter `supabase.sql` (SQL Editor → Run), noter le **Project URL**, la clé **anon** et la clé **service_role** |
| 2 | **GitHub** | Fusionner la dernière version dans `main`, puis remplir `public/config.js` (URL + clé anon) |
| 3 | **Netlify** | Importer le dépôt `Morata` (branche `main`), **Deploy**, renommer le site (ex. `batipro-academie`) |
| 4 | **Netlify** | *Environment variables* : `ANTHROPIC_API_KEY`, `CHARIOW_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (+ facultatif `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_DIRECTION`), puis **Trigger deploy** |
| 5 | **Chariow** | *Automatisation → Pulses* : « vente réussie » vers `https://VOTRE-SITE.netlify.app/api/chariow/webhook` ; copier le secret `whsec_…` dans Netlify (`CHARIOW_WEBHOOK_SECRET`) et redéployer |
| 6 | **Supabase** | *Authentication → URL Configuration* : **Site URL** = l'adresse Netlify |
| 7 | **Votre site** | *Espace direction* : créer le compte PDG ; vérifier *Abonnements & paiements → Réglages* (Chariow : OK) ; faire un achat test ; ajouter vos livres et vos promotions |

Les clés secrètes (`sk_…`, `whsec_…`, service_role, `sk-ant-…`) se collent **uniquement** dans Netlify : jamais dans un fichier, sur GitHub ou dans un message.

## Contenu du dossier

| Fichier / dossier | Rôle |
|---|---|
| `public/` | Le site et toute l'application (pages, cours, atelier de dessin, métré, espace PDG) |
| `public/config.js` | **À remplir** avec les 2 informations de votre projet Supabase |
| `contenus/cours/` | Le contenu complet des 18 matières (cours, exercices, quiz, sujets d'examen). Il n'est **pas** publié tel quel : seule la fonction des cours le lit |
| `netlify/functions/cours.mjs` | Les cours protégés : n'envoie le contenu des chapitres payants qu'aux apprenants dont l'accès est actif |
| `netlify/functions/chariow.mjs` | Le paiement en ligne Chariow : envoie l'apprenant sur la page de paiement, puis reçoit l'avis de Chariow et ouvre l'accès (ou remet le livre) tout seul |
| `outils/` | Petits outils : catalogue des cours, serveur de test local |
| `netlify/edge-functions/ia.js` | L'assistant IA (appelle l'API Claude ; la clé reste secrète sur Netlify) |
| `package.json` | Indique à Netlify d'installer la bibliothèque de l'IA (rien à modifier) |
| `netlify.toml` | Réglages Netlify (dossier publié : `public`) |
| `supabase.sql` | Le script qui crée la base de données (à coller dans Supabase) |
| `doc.html` | Votre ancienne page BatiPro (non utilisée par la plateforme, vous pouvez la garder) |

Sans configuration, le site fonctionne en **mode démonstration** : les comptes et les données restent dans le navigateur (bandeau jaune en haut). C'est utile pour tester, mais rien n'est partagé entre appareils.

---

## Étape 1 : créer la base de données sur Supabase

1. Allez sur **supabase.com** → **Start your project** → connectez-vous (avec GitHub, c'est le plus simple).
2. **New project** :
   - Name : `batipro-academie`
   - Database Password : choisissez-en un et **gardez-le**
   - Region : **West EU (Paris)** ou **Frankfurt** (les plus proches d'Abidjan)
   - **Create new project**, attendez 1 à 2 minutes.
3. Menu de gauche → **SQL Editor** → **New query**. Ouvrez `supabase.sql`, copiez **tout** son contenu, collez, puis **Run**. Le message « Success. No rows returned » doit apparaître.
4. Menu de gauche → **Authentication** → **Sign In / Providers** → **Email** : désactivez **Confirm email** (les apprenants pourront se connecter juste après leur inscription). Laissez les connexions anonymes **désactivées** (elles ne servent pas ici).
5. Menu de gauche → **Project Settings** → **API** (ou **Data API**). Copiez :
   - **Project URL** (ex. `https://abcdefgh.supabase.co`)
   - la clé **anon public** ou **publishable** (longue chaîne)

## Étape 2 : remplir `public/config.js`

Ouvrez `public/config.js` avec le Bloc-notes et collez vos 2 informations entre les guillemets :

```js
window.MRT_CONFIG = {
  supabaseUrl: "https://abcdefgh.supabase.co",
  supabaseAnonKey: "eyJhbGciOi...."
};
```

Enregistrez. Cette clé est prévue pour être publique : la sécurité est assurée par les règles du script SQL. N'utilisez **jamais** la clé « service_role ».

## Étape 3 : mettre les fichiers sur GitHub

**Le code est déjà sur votre dépôt GitHub `Morata`.** La dernière version se trouve sur la branche `claude/learning-platform-construction-7a9vhm` : fusionnez-la dans `main` (GitHub → **Pull requests** → la demande de fusion → **Merge pull request** → **Confirm merge**), comme pour les mises à jour précédentes. Il ne reste qu'à modifier `public/config.js` sur GitHub (ouvrir le fichier → icône crayon → coller vos 2 informations → **Commit changes**).

Si vous repartez d'un dépôt vide :
1. Sur **github.com**, ouvrez votre dépôt ou créez-en un.
2. **Add file** → **Upload files** → glissez **le contenu** du dossier en gardant les sous-dossiers (`public`, `contenus`, `netlify`, `outils`, `package.json`, `netlify.toml`, `supabase.sql`, `GUIDE-INSTALLATION.md`, `README.md`) → **Commit changes**.
   Astuce : sur Chrome, on peut glisser directement les dossiers `public`, `contenus`, `netlify` et `outils`. **N'oubliez pas `contenus`** : sans lui, les cours ne s'affichent pas.

## Étape 4 : publier sur Netlify

1. **app.netlify.com** → connectez-vous avec GitHub.
2. **Add new site** (ou **Add new project**) → **Import an existing project** → **GitHub** → choisissez le dépôt `Morata`, branche **main**.
3. Laissez **Build command** vide. **Publish directory** : `public` (déjà indiqué par `netlify.toml`). → **Deploy**. Netlify installe aussi, sans rien vous demander, la fonction des cours protégés (`/api/cours`) et l'assistant IA.
4. Notez l'adresse du site (ex. `https://batipro-academie.netlify.app`). Vous pouvez la changer dans **Site configuration → Change site name**.
5. Retournez dans Supabase → **Authentication** → **URL Configuration** → **Site URL** : collez l'adresse Netlify (sert au lien « Mot de passe oublié »).

## Étape 5 : créer votre compte PDG

1. Ouvrez votre site → tout en bas de page, cliquez sur **Espace direction**.
2. Cliquez sur **Première utilisation : créer le compte PDG**.
3. Saisissez votre nom, votre e-mail et un mot de passe (6 caractères minimum).

Ce bouton disparaît dès que le compte PDG existe : personne d'autre ne peut le créer après vous. Ensuite, vous vous connectez toujours par **Espace direction**.

## Étape 6 : activer l'assistant IA

L'assistant (chat, aide dans les cours, quiz générés, rédaction de chapitres par le PDG) utilise l'**API Claude** d'Anthropic.

1. Allez sur **console.anthropic.com** → créez un compte → **Billing** : ajoutez du crédit (paiement par carte).
2. **API Keys** → **Create Key** → copiez la clé (elle commence par `sk-ant-`). Gardez-la secrète.
3. Sur Netlify : **Site configuration** → **Environment variables** → **Add a variable** :
   - Key : `ANTHROPIC_API_KEY`
   - Value : votre clé
4. **Deploys** → **Trigger deploy** → **Deploy site** (pour que la fonction prenne la clé).
5. Dans votre **Espace PDG → Intelligence artificielle** :
   - choisissez le **modèle** : Claude Opus 5.5 (par défaut, le plus complet), Claude Sonnet 5.5 (plus rapide, moins cher) ou Claude Haiku 4.5 (très économique) ;
   - fixez le **nombre de questions par apprenant et par jour** (30 par défaut) ;
   - testez avec le bouton **Tester l'assistant**.

Sécurité en place : la clé n'est jamais envoyée au navigateur ; seuls les comptes connectés et non suspendus peuvent poser des questions, dans la limite du quota ; la rédaction de chapitres est réservée à la direction. Chaque question est enregistrée dans le journal visible par le PDG.

Variables facultatives : `SUPABASE_URL` et `SUPABASE_ANON_KEY` (sinon la fonction les lit dans `config.js`), `SOURCES_AUTORISEES` (sites d'où le PDG peut importer des sujets d'examen, par défaut `fomesoutra.com`), `IA_SANS_CONNEXION=oui` uniquement pour un test en mode démonstration (déconseillé en production : n'importe qui pourrait utiliser votre crédit).

---

## Utilisation au quotidien

### Votre espace PDG (Espace direction)
- **Tableau de bord** : inscrits, personnes en ligne maintenant, connexions par jour, questions à l'IA, matières les plus suivies.
- **Connexions** : qui s'est connecté, quand, sur quel appareil (téléphone / ordinateur), et qui est en ligne en ce moment. Export CSV.
- **Apprenants** : fiche de chaque inscrit (contact, progression, quiz, connexions, travaux), boutons WhatsApp et e-mail, **suspendre** ou **supprimer** un compte.
- **Progression & quiz** : taux d'engagement et moyenne par matière et par chapitre.
- **Matières & cours** : chaque matière est rangée en 3 niveaux (Débutant, Intermédiaire, Avancé). Modifier, masquer, réordonner les chapitres, changer le niveau d'un chapitre, ajouter un chapitre directement dans un niveau (« + Chapitre débutant / intermédiaire / avancé »), ajouter des matières, **faire rédiger un chapitre par l'IA**, puis relire et publier.
- **Annonces** : messages affichés sur le tableau de bord des apprenants.
- **Intelligence artificielle** : modèle, quota, journal d'utilisation.
- **Travaux des apprenants** : plans dessinés et métrés (ouvrir une copie pour corriger).
- **Abonnements & paiements** : paiements à valider, historique (Mobile Money et paiements en ligne « En ligne »), apprenants actifs, non payés, expirés ; réglages du prix, des numéros, du paiement en ligne Chariow et des devises.
- **Livres** : vos livres (ajout, couverture, prix, publication, ventes, livres offerts).
- **Paramètres** : nom de la plateforme, textes d'accueil, contacts (WhatsApp), ouverture des inscriptions, **bordereau des prix** du métré, **administrateurs** (inviter un collaborateur), exports.

### Accès payant : premier chapitre gratuit, puis inscription à 4 000 FCFA
**Si votre site était déjà en ligne avant cette version** : relancez `supabase.sql` une fois (SQL Editor → New query → coller → Run). Il ajoute les colonnes d'accès des profils, la table des paiements et les fonctions de validation, sans toucher à vos données. Vos apprenants déjà inscrits sont alors **non payés** : activez dans l'onglet **Tous les apprenants** ceux que vous voulez garder gratuits.

**Réglages** — Espace PDG → **Abonnements & paiements** → onglet **Réglages** :
- **Activer l'accès payant** (décoché : toute la plateforme redevient gratuite) ;
- **Formule** : *Inscription : paiement unique* (4 000 FCFA par défaut) ou *Abonnement mensuel* (prix par mois, à utiliser quand la plateforme sera connue) ;
- **Chapitres gratuits par matière** : 1 par défaut (le premier de chaque matière, en lecture complète) ;
- **Promotion (facultatif)** : **prix normal barré** (affiché en rouge, barré, à côté du prix de l'inscription, avec le pourcentage de réduction), **fin de l'offre** et **nom de l'offre** (« Offre de lancement »). Visible sur l'accueil, l'inscription, « Mon abonnement » et l'écran des parties réservées. Mettez le même prix de vente sur le produit Chariow ;
- **Où les apprenants paient** : numéros **Wave** et **MTN Mobile Money** (0544176359 déjà rempli), Orange, Moov, Djamo, **nom du bénéficiaire affiché** et numéro **WhatsApp** pour les preuves de paiement.

> **Ne mettez jamais un numéro de carte bancaire** (16 chiffres, carte Visa Djamo…) : ces numéros sont visibles par tous les visiteurs et pourraient servir à des fraudes. Pour Djamo, indiquez le **numéro de téléphone** lié au compte. La plateforme refuse d'enregistrer un numéro de 16 chiffres ou plus.

**Au quotidien** :
1. L'apprenant lit gratuitement le premier chapitre, s'inscrit, puis ouvre **Mon abonnement** : il voit le montant et vos numéros, paie depuis son téléphone, puis **déclare son paiement** (numéro utilisé et référence du SMS) ; il peut aussi vous envoyer la capture sur WhatsApp.
2. Vous recevez l'argent **directement** sur votre numéro Wave ou MTN Money. Vous vérifiez la réception sur votre téléphone, puis Espace PDG → **Abonnements & paiements** → onglet **À valider** → **Valider** : l'accès s'ouvre aussitôt (ou **Refuser** si le paiement n'est pas arrivé).
3. Vous pouvez à tout moment **activer** (paiement en espèces, bourse, partenaire) ou **désactiver** un apprenant (onglets *Tous les apprenants*, *Accès actifs*, *Non payés*, *Expirés*), et, en formule mensuelle, prolonger d'un mois. Le tableau de bord de la page indique les encaissements.

**Ce qui est protégé** : sans accès actif, le serveur n'envoie ni le contenu des chapitres payants, ni leurs exercices, quiz et sujets d'examen ; l'assistant IA, la résolution en photo et les annales sont aussi réservés aux accès actifs. Les administrateurs ont toujours un accès complet.

**Recevoir l'argent automatiquement (sans validation manuelle)** : branchez le paiement en ligne Chariow (section suivante). Les paiements Wave / MTN directs sur votre numéro restent, eux, à valider en un clic : aucune application ne peut voir votre compte Wave ou MTN personnel. Aucune plateforme ne peut non plus prélever de l'argent sur un apprenant simplement parce qu'il se connecte : chaque paiement est fait (ou autorisé) par lui.

### Paiement en ligne international (Chariow) : accès ouvert automatiquement
Pour les apprenants qui ne sont pas en Côte d'Ivoire, ou quand Wave et MTN ne passent pas : ils paient sur votre boutique **Chariow** (carte bancaire, Mobile Money de nombreux pays, selon ce que Chariow propose) dans la devise de leur choix. Comme dans votre boutique Chariow, **tout est automatique** : dès que Chariow confirme le paiement, il prévient la plateforme, l'accès s'ouvre (ou le livre est ajouté), l'apprenant voit sa page se mettre à jour et reçoit un e-mail. Vous ne validez rien, mais vous gardez la main : désactiver, offrir, prolonger, ou demander à confirmer vous-même chaque paiement.

> La plateforme ne peut pas se connecter à votre compte Chariow à votre place : la création du produit et des clés se fait par vous, dans Chariow, en 10 minutes. **Ne communiquez jamais vos clés** (ni par message, ni dans le code) : elles se collent uniquement dans Netlify.

1. **Relancez `supabase.sql`** une fois (SQL Editor → New query → coller → Run) : il ajoute les paiements en ligne, les livres et leurs fonctions, sans toucher à vos données.
2. **Le produit est déjà créé** : « BâtiPro Académie : accès complet », `https://smart-digital.mychariow.shop/prd_7prkaptk` (identifiant `prd_7prkaptk`), déjà renseigné dans la plateforme et dans `supabase.sql`. Pour un autre produit (abonnement mensuel, livre), même méthode : **créez le produit dans Chariow** (app.chariow.com → votre boutique → **Produits** → nouveau produit numérique) : nom **« BâtiPro Académie : accès complet »**, prix **4 000 FCFA** (le même que dans vos réglages), description courte (« Accès complet à la plateforme : cours, exercices, sujets, IA… »). Comme contenu à livrer, mettez simplement le lien de votre site. Publiez-le, puis notez **le lien de la page du produit**, de la forme `https://smart-digital.mychariow.com/prd_…` : l'identifiant `prd_…` qu'il contient est repris automatiquement (si vous donnez au produit une adresse personnalisée, recopiez l'identifiant à part, il figure dans les détails du produit). Si vous passez un jour en abonnement mensuel, créez un second produit au prix du mois.
3. **Clé API** : Chariow → **Paramètres** → **Développeurs / API** → créez une clé et copiez-la.
4. **Pulse (avis de paiement)** : Chariow → **Automatisation** → **Pulses** → nouveau Pulse, événement **vente réussie** (`successful.sale`), adresse : `https://VOTRE-SITE.netlify.app/api/chariow/webhook` (elle est affichée avec un bouton Copier dans Espace PDG → Abonnements & paiements → Réglages). Ajoutez aussi l'événement de remboursement s'il est proposé. Copiez le **secret** du Pulse (il commence par `whsec_`).
5. **Netlify** → votre site → **Site configuration** → **Environment variables** → ajoutez :
   - `CHARIOW_API_KEY` = la clé API de l'étape 3 ;
   - `CHARIOW_WEBHOOK_SECRET` = le secret `whsec_…` de l'étape 4 ;
   - `SUPABASE_SERVICE_ROLE_KEY` = Supabase → **Project Settings** → **API** → clé **service_role** (ou **secret**). Elle permet à la fonction d'ouvrir l'accès : ne la mettez **jamais** dans `config.js` ni sur GitHub ;
   - facultatif, pour un e-mail « Votre accès est activé » envoyé par la plateforme en plus du reçu de Chariow : `RESEND_API_KEY` (compte gratuit sur resend.com) et `MAIL_FROM` (ex. `BâtiPro Académie <contact@votre-domaine.com>`) ;
   - facultatif, pour être prévenu vous-même à chaque paiement en ligne : `MAIL_DIRECTION` = votre adresse e-mail (fonctionne avec les deux variables précédentes) ;
   puis **Deploys** → **Trigger deploy**.
6. **Espace PDG → Abonnements & paiements → Réglages** → carte **Paiement en ligne international** : l'adresse de votre boutique et le produit d'inscription (`prd_7prkaptk`) sont déjà remplis ; pour un autre produit, collez son lien (l'identifiant `prd_…` se remplit seul), laissez cochée **Ouvrir l'accès automatiquement**, **Enregistrer**. La carte « Branchement de Chariow » doit afficher **OK** pour la clé API, le secret et la clé de service.
7. **Faites un achat test** avec un compte apprenant : sur **Mon abonnement**, choisissez **Paiement en ligne · tous pays**, payez ; au retour, la page affiche « Paiement en cours de confirmation… » puis l'accès s'ouvre seul, et le paiement apparaît dans l'Historique avec l'étiquette **En ligne**.

**Comment la plateforme sait qui a payé** : le paiement lancé depuis la plateforme porte l'identifiant du compte de l'apprenant ; un achat fait directement sur votre boutique Chariow est relié par **l'adresse e-mail** : si le compte n'existe pas encore, le paiement attend et l'accès s'ouvre dès que la personne s'inscrit avec cette adresse. Pour éviter qu'un inconnu s'inscrive avec l'adresse d'un acheteur avant lui, vous pouvez réactiver **Confirm email** dans Supabase (étape 1.4).

**Sécurité** : la fonction n'accepte que les avis signés par Chariow avec votre secret, ou des ventes qu'elle a vérifiées elle-même auprès de Chariow avec votre clé API ; une même vente n'est jamais comptée deux fois. Un produit Chariow non relié à une offre (identifiant inconnu) arrive dans **À valider** avec une note, pour que vous décidiez. En cas de remboursement signalé par Chariow, le paiement passe à « Remboursé » et vous retirez l'accès si nécessaire.

### Devises
Les prix restent fixés en **FCFA**. Partout où un prix est affiché (accueil, Mon abonnement, livres), le sélecteur **Devise** montre l'équivalent en franc CFA BEAC, euro, dollar américain ou canadien, livre sterling, cedi, naira, franc guinéen, leone, dollar libérien, dalasi, ouguiya ou escudo cap-verdien, et le paiement en ligne peut se faire dans cette devise (Chariow affiche le montant exact ; si une devise n'est pas acceptée, Chariow encaisse dans la devise de votre boutique). Espace PDG → Abonnements & paiements → Réglages → **Devises affichées** : mettez à jour les taux (nombre de FCFA pour 1 unité) et décochez les devises que vous ne voulez pas proposer. Le FCFA, l'euro et l'escudo ont une parité fixe.

### Vos livres
Espace PDG → **Livres** → **Ajouter un livre** : titre, sous-titre, auteur, résumé, présentation détaillée, format, pages, année, **prix en FCFA** (0 = gratuit pour les inscrits), **couverture** (envoyez une image depuis votre téléphone ou ordinateur, ou laissez la couverture dessinée aux couleurs de votre choix), **lien du livre complet** (par exemple un PDF partagé par lien sur Google Drive : il n'est montré qu'aux acheteurs), lien d'un **extrait gratuit**. Cochez **Publié** pour le montrer sur le site public (rubrique « Livres », page d'accueil si « Mettre en avant ») et dans l'espace des apprenants. Vous pouvez le modifier ou le masquer à tout moment ; un livre déjà acheté ne peut plus être supprimé (masquez-le : les acheteurs le gardent).
- **Vendre en ligne** : créez le livre comme produit dans votre boutique Chariow (livraison du PDF par Chariow), puis collez sur la fiche du livre le **lien** et l'**identifiant `prd_…`** du produit : l'acheteur paie par carte ou Mobile Money, le livre apparaît aussitôt dans « Mes livres ».
- **Vendre par Mobile Money** : l'apprenant paie sur votre numéro et déclare le paiement ; vous validez dans **Abonnements & paiements** (« Valider : remettre le livre »).
- **Offrir un livre** : sur la fiche du livre, choisissez l'apprenant → **Offrir le livre** (et **Retirer** pour annuler).
- **Mettre un livre en promotion (prix barré)** : sur la fiche du livre, **Prix de vente** = ce que l'acheteur paie (ex. 7 000), **Prix normal barré** = le prix affiché barré en rouge (ex. 10 000). La plateforme affiche alors ~~10 000 FCFA~~ **7 000 FCFA** avec l'étiquette **-30 %** (calculée toute seule), sur la couverture, dans le catalogue et sur la fiche, avec l'équivalent dans la devise du visiteur. Facultatif : **Nom de l'offre** (« Prix de lancement », « Spécial rentrée »…) et **Fin de l'offre** : « Offre valable jusqu'au … · plus que N jours » s'affiche, puis le prix barré disparaît tout seul le lendemain de cette date. Vous changez ou retirez la promotion quand vous voulez (videz « Prix normal barré »). Le prix réellement payé reste toujours le **prix de vente** : mettez le même dans Chariow pour le paiement en ligne.
Un visiteur sans compte peut voir le catalogue et chaque fiche ; pour acheter, il crée son compte puis revient automatiquement sur le livre.

> **Conseil marketing** : une promotion convainc quand elle est vraie et limitée dans le temps. Fixez une **date de fin** (2 à 4 semaines), annoncez-la sur WhatsApp et les réseaux, puis appliquez réellement le prix normal après l'offre (ou relancez une nouvelle offre nommée : rentrée, examens, fêtes). Un prix barré qui n'a jamais été pratiqué peut être considéré comme une pratique commerciale trompeuse par la réglementation sur la consommation.

### Sujets d'examen par chapitre
Chaque chapitre des 18 matières se termine par un **sujet type examen** (noté sur 20, durée et barème indiqués, contexte ivoirien) suivi de son **corrigé détaillé** et des « Erreurs à éviter » : 316 sujets au total. L'apprenant peut ouvrir le sujet en **mode examen** (chronomètre, corrigé masqué jusqu'à ce qu'il le demande, impression). Les sujets font partie du contenu payant, sauf dans les chapitres gratuits. Pour modifier un sujet, éditez le fichier de la matière dans `contenus/cours/` puis lancez `node outils/catalogue.mjs` (voir README).

### Annales d'examens (sujets officiels)
**Importer toute une rubrique d'un site autorisé (Fomesoutra…)** — Espace PDG → **Annales d'examens** → carte **Importer les sujets d'un site autorisé** :
1. L'adresse de la rubrique **BTS Génie Civil option bâtiment** de Fomesoutra est déjà remplie ; collez une autre rubrique si besoin (Licence, BTS Travaux publics…).
2. **Lister les sujets** : la plateforme lit la rubrique (toutes ses pages) et affiche chaque sujet avec l'**année** et la **matière** devinées d'après le titre. Corrigez-les dans le tableau si besoin, décochez ce que vous ne voulez pas. Les sujets déjà importés sont signalés et décochés.
3. Choisissez l'**examen** (BTS Bâtiment par défaut), laissez cochée l'option **Transcrire et rédiger le corrigé avec l'IA**, puis **Importer**. Pour chaque sujet : téléchargement du PDF, conversion en pages (16 au maximum), transcription de l'énoncé, corrigé détaillé, enregistrement **en brouillon**. Laissez la page ouverte pendant l'import (comptez environ 1 à 3 minutes par sujet avec l'IA) ; le bouton **Arrêter après ce sujet** permet de reprendre plus tard (les sujets déjà importés ne sont pas refaits).
4. Ouvrez chaque sujet dans la liste en dessous, **relisez le corrigé** (l'IA peut se tromper sur un calcul ou une lecture de figure), corrigez si besoin, cochez **Publié** et enregistrez.

Cette fonction n'est disponible que sur le site publié sur Netlify et seulement pour les administrateurs connectés. Par sécurité, seuls les sites listés dans la variable Netlify `SOURCES_AUTORISEES` peuvent être lus (par défaut : `fomesoutra.com`). Pour en ajouter : **Site configuration** → **Environment variables** → `SOURCES_AUTORISEES` = `fomesoutra.com, autre-site.com`, puis redéployez. N'importez que des sujets que vous avez le droit de reproduire sur votre plateforme et gardez la mention de la source (elle est affichée automatiquement sous chaque sujet importé).

**Ajouter un sujet à la main** — **Ajouter un sujet** : choisissez l'examen (BTS Bâtiment, Licence…), l'année, la matière, puis ajoutez le **PDF** ou les photos/scans des pages (16 au maximum). Les boutons **Transcrire les photos** et **Rédiger le corrigé avec l'IA** préparent le texte de l'énoncé et un corrigé détaillé : relisez-les, corrigez si besoin, cochez **Publié** et enregistrez. Seuls les sujets publiés sont visibles des apprenants.

> Si vous aviez déjà exécuté `supabase.sql`, **relancez-le** une fois : il ajoute la table `annales` sans toucher à vos données.

### Nom et logo de la plateforme
La plateforme s'appelle **BâtiPro Académie** (slogan : « Académie du bâtiment »). Tout se règle dans Espace PDG → **Paramètres** → **Identité & site** :
- **Nom de la plateforme** : utilisé dans les titres des pages, les attestations, le pied de page et par l'assistant IA ;
- **Logo : début du nom** et **fin du nom (en couleur)** : le logo affiche « Bâti » + « Pro » en orange, avec le slogan en dessous ;
- **Slogan** et texte de la page **À propos**.

**Si votre site était déjà en ligne sous le nom Morata** :
1. Relancez `supabase.sql` une fois (SQL Editor → New query → coller → Run) : vos réglages enregistrés sous l'ancien nom sont renommés (y compris le texte « À propos ») et l'assistant IA se présente sous le nouveau nom. Rien d'autre n'est modifié.
2. Netlify → **Site configuration** → **Change site name** : choisissez par exemple `batipro-academie` (l'adresse devient `https://batipro-academie.netlify.app`). Reportez ensuite cette nouvelle adresse dans Supabase → **Authentication** → **URL Configuration** → **Site URL**.
3. Facultatif : GitHub → votre dépôt → **Settings** → **Repository name** pour renommer le dépôt. Netlify reste relié au dépôt renommé.

Pour un nom de domaine propre (par exemple `batipro-academie.ci` ou `.com`), achetez-le chez un registraire puis ajoutez-le dans Netlify → **Domain management**. Avant de communiquer largement, vérifiez que le nom est libre et protégez-le si besoin : en Côte d'Ivoire, les marques se déposent auprès de l'OAPI (Organisation africaine de la propriété intellectuelle).

### Résolution d'exercices en photo
Les apprenants envoient la photo d'un exercice depuis **Résoudre en photo**. Chaque résolution (et chaque question de suivi) compte pour une question dans le quota quotidien réglé dans Espace PDG → Intelligence artificielle. Les résolutions sont visibles dans **Travaux des apprenants**.

### Ce que voit l'apprenant
- Sur chaque matière, les **trois niveaux** côte à côte : il choisit le sien (« Choisir comme mon niveau »), suit les chapitres dans l'ordre et passe au niveau suivant ; une **attestation** est délivrée pour chaque niveau terminé et pour la matière complète.
- Dans **Construction A→Z**, chaque projet type ouvre ses plans de tous les niveaux, ses coupes, sa note de calcul (fiche de chaque poteau, poutre, dalle, semelle…), les 18 matières appliquées au projet et sa maquette 3D modifiable.
- Dans l'**Atelier de dessin**, le bouton 3D (ou la vue partagée) affiche le dessin en volume ; les commandes 3D, matériaux et couleurs sont dans la barre de la vue 3D. La commande **RDM** ouvre l'étude complète de la poutre sélectionnée.
- **Exercices & annales** : solveurs guidés (l'apprenant répond à chaque étape, la plateforme corrige), exercices corrigés type BTS et Licence, épreuves d'entraînement chronométrées, annales publiées.
- **Études progressives** : à la fin des chapitres sur les poteaux, les dalles, les fondations et les poutres, la carte « Appliquer ce cours pas à pas » ouvre l'étude complète de l'élément (de la charge jusqu'au plan de ferraillage et à la nomenclature), en mode guidé ou en corrigé complet. Dans un projet type, chaque poteau, dalle et semelle a aussi son bouton « Étude pas à pas ».
- **Résoudre en photo** : photo de l'exercice → résolution pas à pas, guidage, vérification de la réponse ou explication de l'énoncé.

### Ajouter un administrateur
Paramètres → Administrateurs → nom + e-mail → **Inviter**. La personne s'inscrit (ou se connecte) avec cet e-mail puis passe par **Espace direction** : elle devient administrateur.

### Mettre à jour le site
Remplacez les fichiers modifiés sur GitHub : Netlify republie automatiquement en une minute. Les cours modifiés depuis l'espace PDG sont stockés dans Supabase et ne sont pas écrasés.

## En cas de problème

| Message / symptôme | Solution |
|---|---|
| Bandeau jaune « Mode démonstration » | `public/config.js` est vide ou mal rempli (guillemets, virgule) |
| « Base de données inaccessible » | Le script `supabase.sql` n'a pas été exécuté, ou l'URL / la clé sont fausses |
| « Compte créé. Ouvrez le lien reçu par e-mail… » | Désactivez « Confirm email » (étape 1.4) ou cliquez sur le lien reçu |
| « L'assistant IA n'est pas encore activé » | Ajoutez `ANTHROPIC_API_KEY` sur Netlify puis redéployez (étape 6) |
| « Clé ANTHROPIC_API_KEY invalide » | Recopiez la clé sans espace ; vérifiez qu'elle n'a pas été supprimée sur console.anthropic.com |
| « Limite de … questions atteinte » | Augmentez le quota dans Espace PDG → Intelligence artificielle |
| Le bouton « créer le compte PDG » n'apparaît pas | Un administrateur existe déjà : connectez-vous avec son e-mail |
| Les chapitres restent vides ou « Cours introuvable » | Le dossier `contenus` n'a pas été envoyé sur GitHub : ajoutez-le, puis attendez le redéploiement |
| Un apprenant a payé mais reste bloqué | Espace PDG → Abonnements & paiements → **À valider** (ou activez-le dans *Tous les apprenants*) ; il doit ensuite actualiser la page |
| « Activez votre accès » s'affiche pour tout le monde après la mise à jour | `supabase.sql` n'a pas été relancé : relancez-le (il ajoute les fonctions d'accès) |
| La rubrique Livres n'apparaît pas, ou « Livre introuvable » | Relancez `supabase.sql` (table des livres), puis publiez au moins un livre (case **Publié**) |
| « Le paiement en ligne n'est pas encore branché » | Ajoutez `CHARIOW_API_KEY` sur Netlify et redéployez, puis renseignez l'identifiant `prd_…` dans Réglages (ou sur la fiche du livre) |
| Paiement Chariow reçu mais accès toujours fermé | Réglages → carte « Branchement de Chariow » : les trois lignes doivent être **OK** ; vérifiez l'adresse du Pulse (`/api/chariow/webhook`) et l'identifiant `prd_…`. Chariow renvoie l'avis tant qu'il n'est pas accepté. En attendant, activez l'apprenant à la main |
| Un paiement en ligne est dans « À valider » | Soit le produit Chariow n'est pas relié (identifiant `prd_…` absent ou différent : corrigez-le), soit l'option « Ouvrir l'accès automatiquement » est décochée. Vérifiez la vente dans Chariow puis **Valider** |
| L'acheteur a payé sur Chariow sans compte | Il s'inscrit avec **la même adresse e-mail** : l'accès (ou le livre) est ajouté automatiquement à sa première connexion |
