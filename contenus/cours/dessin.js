/* =====================================================================
   Dessin technique et architectural — cours complet (3 niveaux)
   Débutant : rôle, normes, matériel, formats, traits, écriture, hachures, échelles,
              cotation, constructions géométriques, vues, lecture d'un plan
   Intermédiaire : coupes et sections, perspectives, plan de niveau, façades et niveaux,
              coupe de bâtiment, escaliers
   Avancé : coffrage et ferraillage, réseaux, toitures, plan de masse et implantation,
              dossier de plans, DAO et perspective conique
   ===================================================================== */
A.addMatiere({
 id:"dessin",
 titre:"Dessin technique et architectural",
 court:"Dessin technique",
 groupe:"constr",
 icone:"compass",
 couleur:"#3D5A99",
 niveau:"Débutant",
 heures:90,
 ordre:3,
 prerequis:["math"],
 resume:"Lire et dessiner les plans du bâtiment : matériel et normes, formats et cartouche, traits, écriture et hachures, échelles et cotation, constructions géométriques, vues et coupes, perspectives, plans de niveau, façades, coupes et escaliers, plans de coffrage et de ferraillage, réseaux, toitures, plan de masse, dossier de permis de construire et passage à la DAO, avec exercices corrigés, quiz et sujets d'examen.",
 objectifs:[
  "Utiliser le matériel de dessin et respecter les normes (formats, traits, écriture, cartouche)",
  "Choisir une échelle et coter un dessin selon les règles du bâtiment",
  "Réaliser les constructions géométriques utiles au dessin et au chantier",
  "Représenter un objet en vues orthogonales, en coupe et en perspective",
  "Lire puis dessiner un plan de niveau, une façade et une coupe de bâtiment",
  "Calculer et dessiner un escalier et une toiture (pentes, vraies grandeurs)",
  "Lire les plans de coffrage, de ferraillage et de réseaux",
  "Établir un plan de masse et constituer un dossier de plans complet",
  "Passer du dessin à la main à la DAO et à la maquette numérique"
 ],
 applications:["Plans d'une villa (niveaux, façades, coupes)", "Dossier de demande de permis de construire", "Lecture des plans sur le chantier (implantation, coffrage, ferraillage)", "Plans de récolement des réseaux", "Croquis côtés et relevés d'un bâtiment existant", "Perspectives de présentation pour un client"],
 chapitres:[
{id:"dessin-1", niv:1, titre:"Rôle du dessin technique, normes, matériel et formats", duree:50, contenu:`## Le dessin, langage commun du bâtiment
Le **dessin technique** est le langage écrit commun à l'architecte, à l'ingénieur, au dessinateur, à l'entreprise et à l'ouvrier. Un bon plan permet de **construire sans explication orale** : il dit **quoi** construire (formes), **combien** (dimensions) et **comment** (matériaux, détails). Un plan mal lu ou mal dessiné coûte cher : mur mal implanté, réservation oubliée, escalier qui ne passe pas sous la dalle.
On distingue plusieurs types de dessins selon l'avancement du projet :
| Type | Caractéristiques | Exemple |
|---|---|---|
| **Croquis** | à main levée, proportions respectées, cotes relevées | relevé d'une maison existante |
| **Esquisse** | première idée du projet, échelle approximative | répartition des pièces d'une villa |
| **Avant-projet** (APS, APD) | dessin à l'échelle, surfaces, façades | dossier présenté au client |
| **Plan d'exécution** | complet, coté, détaillé, sert à construire | plans de coffrage, de ferraillage |
| **Plan de récolement** | ce qui a réellement été construit | réseaux enterrés après travaux |

## Les normes
Pour que tout le monde lise un plan de la même façon, le dessin suit des **normes** (ISO, reprises en NF EN ISO) :
- **ISO 5457** : formats et présentation des feuilles (cadre, marges) ;
- **ISO 7200** : cartouche (zone d'identification du plan) ;
- **ISO 128** : traits et principes de représentation ;
- **ISO 3098** : écriture ;
- **ISO 5455** : échelles ;
- **ISO 129** : cotation ;
- **ISO 7519** : principes de représentation des dessins de construction.
Les bureaux d'études et les écoles de Côte d'Ivoire appliquent ces conventions, héritées des normes françaises.

## Le matériel de dessin
| Matériel | Usage |
|---|---|
| Planche à dessin (ou table) avec **té** ou règle parallèle | tracer les horizontales |
| **Équerres** 45° et 30°/60° | verticales, obliques, angles courants |
| Porte-mines 0,3 – 0,5 – 0,7 mm (mines H, HB, B) | traits fins (mine dure H), traits forts (HB, B) |
| Stylos à encre calibrés (0,18 à 0,7 mm) | mise au net |
| **Compas**, rapporteur, gabarits (cercles, mobilier, sanitaires) | arcs, angles, symboles |
| **Réglet d'échelles** (kutsch, triangulaire) | lire directement 1/50, 1/100, 1/200… |
| Gomme, cache-gomme, ruban adhésif | correction, fixation de la feuille |
Aujourd'hui, la majorité des plans est produite en **DAO** (dessin assisté par ordinateur), mais savoir dessiner à la main reste indispensable : croquis sur le chantier, examens, compréhension des conventions.

## Les formats de papier (série A)
Le format de base **A0** a une surface de **1 m²** et des côtés dans le rapport **√2** : en le pliant en deux, on obtient le format suivant, de mêmes proportions.
!fig:formats|Chaque format est la moitié du format précédent
| Format | Dimensions (mm) | Usage courant |
|---|---|---|
| A0 | 841 × 1 189 | plans d'ensemble de grands projets |
| A1 | 594 × 841 | plans d'exécution, plans de masse |
| A2 | 420 × 594 | plans de niveaux d'une villa au 1/50 |
| A3 | 297 × 420 | plans au 1/100, examens |
| A4 | 210 × 297 | détails, notices, pliage des plans |
$$ côté long = côté court × √2      surface(An) = 1 m² / 2ⁿ

## Cadre, marges et cartouche
Sur chaque feuille, on trace un **cadre** en trait fort, à **20 mm** du bord gauche (marge de reliure) et **10 mm** des autres bords. Le **cartouche** se place **en bas à droite**, pour rester visible quand le plan est plié au format A4. Il contient au minimum :
- le nom du **projet** et du maître d'ouvrage ;
- le **titre** du plan (ex. « Plan du rez-de-chaussée ») ;
- l'**échelle** principale ;
- la **date**, le nom du dessinateur et du vérificateur ;
- le **numéro du plan** et son **indice** de révision (A, B, C…).
!fig:cartouche|Cadre en trait fort et cartouche en bas à droite

> [!exemple] Pliage d'un plan A3
> On plie l'A3 (297 × 420) en deux dans le sens de la longueur : on obtient 297 × 210, soit un A4, avec le cartouche visible au recto. Un A1 se plie en accordéon jusqu'au format A4, cartouche toujours en dessus.

> [!retenir]
> - Le plan est un document contractuel : il doit être clair, complet, normalisé.
> - A0 = 1 m² ; chaque format est la moitié du précédent ; A4 = 210 × 297 mm.
> - Cadre à 20 mm à gauche, 10 mm ailleurs ; cartouche en bas à droite.
> - Le cartouche identifie le plan : projet, titre, échelle, date, auteur, numéro, indice.`,
 sujet:{titre:"Préparer les feuilles d'un dossier de plans", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Le cabinet d'architecture où vous êtes stagiaire à Yamoussoukro prépare le dossier d'une villa R+1. Le chef de projet vous demande de préparer les feuilles et les cartouches.

**Données**
- Plans à produire : plan de masse, plans du RDC et de l'étage, deux façades, une coupe, un plan de toiture ;
- Le plan du RDC au 1/50 mesure **0,95 m × 0,62 m** sur le papier (cotes et cartouche compris) ;
- Les façades au 1/100 tiennent sur **38 cm × 24 cm** ;
- Le client veut un exemplaire de chaque plan dans une chemise A4.

### Partie A — Formats (8 points)
1. Rappeler la surface du format A0 et la relation entre deux formats successifs. (2 pts)
2. Calculer les dimensions du A2 à partir de celles du A0 (841 × 1 189 mm). (2 pts)
3. Choisir le format du plan du RDC et celui des façades. Justifier. (4 pts)

### Partie B — Cadre et cartouche (8 points)
4. Indiquer les marges du cadre et le type de trait utilisé. (2 pts)
5. Où place-t-on le cartouche ? Pourquoi ? (2 pts)
6. Proposer le contenu complet du cartouche du plan du RDC. (4 pts)

### Partie C — Matériel et pliage (4 points)
7. Citer deux instruments permettant de tracer des perpendiculaires et l'outil permettant de lire directement les échelles. (2 pts)
8. Comment remettre le plan du RDC au client dans une chemise A4 ? (2 pts)`,
  corrige:`### Partie A — Formats (8 pts)
1. A0 = **1 m²** ; chaque format est la **moitié** du précédent (on coupe le grand côté en deux), avec des côtés dans le rapport √2. *(2 pts)*
2. A1 = 594 × 841 (moitié de 1 189) ; A2 = **420 × 594 mm** (moitié de 841). *(2 pts)*
3. *(4 pts)*
   - Plan du RDC : 0,95 × 0,62 m = 950 × 620 mm ; l'A1 (841 × 594) est trop petit, il faut un **A0** (1 189 × 841) ; on peut aussi choisir le 1/100 sur un A2 si le client l'accepte.
   - Façades : 380 × 240 mm entrent dans la zone utile de l'A3 (390 × 277 mm), mais il ne reste plus la place du cartouche (≈ 180 × 50 mm) ni dessous (240 + 50 > 277) ni à côté : on choisit un **A2** (564 × 400 utiles), ou une façade par feuille A3.

### Partie B — Cadre et cartouche (8 pts)
4. **20 mm** à gauche (reliure), **10 mm** sur les autres côtés ; cadre en **trait continu fort**. *(2 pts)*
5. **En bas à droite** : il reste visible quand le plan est plié au format A4 et rangé. *(2 pts)*
6. Nom du projet (villa R+1, lot, ville), maître d'ouvrage, cabinet, titre « Plan du rez-de-chaussée », échelle 1/50, date, dessinateur, vérificateur, numéro de plan (ex. A-02), indice de révision, unité des cotes, orientation (flèche du nord sur le plan). *(4 pts : 0,5 par information pertinente)*

### Partie C — Matériel et pliage (4 pts)
7. Té (ou règle parallèle) + équerre, ou deux équerres ; **réglet d'échelles** (kutsch). *(2 pts)*
8. On plie le A0 **en accordéon** jusqu'à 210 × 297 mm, cartouche visible au-dessus ; ou on fournit un tirage réduit en A3 plié en deux (en précisant que l'échelle n'est plus respectée). *(2 pts)*

> [!attention] Erreurs à éviter
> - Choisir un format sans tenir compte des marges et du cartouche.
> - Placer le cartouche en haut ou à gauche : il disparaît au pliage.
> - Oublier l'échelle et l'indice : un plan sans indice ne permet pas de savoir s'il est à jour.`},
 exercices:[
  {t:"Dimensions des formats", d:1, e:`1. Vérifier que l'A0 (841 × 1 189 mm) a bien une surface d'environ 1 m².
2. En déduire les dimensions des formats A1, A2, A3 et A4.
3. Combien de feuilles A4 contient une feuille A1 ?`, c:`1. 0,841 × 1,189 = **1,000 m²** (0,99995).
2. On divise chaque fois le grand côté par 2 : A1 = **594 × 841** ; A2 = **420 × 594** ; A3 = **297 × 420** ; A4 = **210 × 297** mm.
3. A1 → A2 → A3 → A4 : 2 × 2 × 2 = **8 feuilles A4**.`},
  {t:"Rapport √2", d:2, e:`Montrer que si une feuille de côtés a et b (a > b) vérifie a / b = √2, alors la moitié de cette feuille a les mêmes proportions. Vérifier sur l'A4.`, c:`La moitié a pour côtés b et a/2. Son rapport vaut b / (a/2) = 2b / a = 2 / √2 = **√2** : mêmes proportions.
A4 : 297 / 210 = **1,414** ≈ √2 ✓.`},
  {t:"Zone utile d'une feuille", d:1, e:`On dessine sur un A3 horizontal (420 × 297 mm), cadre à 20 mm à gauche et 10 mm ailleurs. Le cartouche mesure 180 × 50 mm.
1. Quelles sont les dimensions intérieures du cadre ?
2. Un dessin de 360 × 200 mm peut-il tenir sans toucher le cartouche ?`, c:`1. Largeur : 420 − 20 − 10 = **390 mm** ; hauteur : 297 − 10 − 10 = **277 mm**.
2. Au-dessus du cartouche, la hauteur libre est 277 − 50 = 227 mm sur toute la largeur : un dessin de 360 × 200 mm **tient** (360 < 390 et 200 < 227), en le plaçant en haut de la feuille.`},
  {t:"Contenu du cartouche", d:1, e:`Classer les informations suivantes : celles qui doivent figurer dans le cartouche, celles qui vont ailleurs sur le plan, celles qui ne vont pas sur le plan.
Échelle — nom du dessinateur — flèche du nord — prix du terrain — indice de révision — légende des hachures — titre du plan — numéro de téléphone personnel de l'ouvrier — date.`, c:`- **Cartouche** : échelle, nom du dessinateur, indice de révision, titre du plan, date (et aussi numéro du plan, projet, maître d'ouvrage).
- **Ailleurs sur le plan** : flèche du nord (près du dessin), légende des hachures (en marge ou au-dessus du cartouche).
- **Pas sur le plan** : prix du terrain, numéro de téléphone personnel de l'ouvrier.`},
  {t:"Choisir le format", d:2, e:`Une maison de 14,40 m × 10,80 m est dessinée au 1/50, avec 2 cm de cotes sur chaque côté. Quel format de la série A faut-il ? Et au 1/100 ?`, c:`Au 1/50 : 14,40 m → 28,8 cm et 10,80 m → 21,6 cm ; avec les cotes : **32,8 × 25,6 cm**. Sur un A3 (utile 39 × 27,7 cm), le dessin seul tient, mais le cartouche (18 × 5 cm) ne trouve sa place ni dessous (25,6 + 5 = 30,6 > 27,7) ni à côté (32,8 + 18 = 50,8 > 39) → **A2** (utile ≈ 56,4 × 40 cm).
Au 1/100 : 14,4 × 10,8 cm + cotes = **18,4 × 14,8 cm** ; sur un A4 le cartouche ne tient plus → **A3**, très confortable.`}
 ],
 quiz:[
  {q:"Le format A0 a une surface de :", o:["0,5 m²","1 m²","2 m²","0,25 m²"], r:1, e:"A0 = 841 × 1 189 mm ≈ 1 m²."},
  {q:"Les dimensions du format A4 sont :", o:["210 × 297 mm","297 × 420 mm","200 × 300 mm","148 × 210 mm"], r:0, e:"A4 = 210 × 297 mm."},
  {q:"Le cartouche se place :", o:["En haut à gauche","Au centre","En bas à droite","N'importe où"], r:2, e:"En bas à droite, visible après pliage en A4."},
  {q:"La marge de reliure du cadre est de :", o:["5 mm","10 mm","20 mm","50 mm"], r:2, e:"20 mm à gauche, 10 mm ailleurs."},
  {q:"Le plan qui décrit ce qui a réellement été construit s'appelle :", o:["Esquisse","Avant-projet","Plan d'exécution","Plan de récolement"], r:3, e:"Le récolement est établi après travaux."}
 ]},

{id:"dessin-2", niv:1, titre:"Traits, écriture et hachures normalisés", duree:50, contenu:`## Les types de traits
Sur un plan, chaque trait a une **signification**. On combine deux paramètres : le **type** (continu, interrompu, mixte) et l'**épaisseur** (fort ou fin, dans le rapport 2 à 1).
!fig:traits|Les six traits à connaître
Les épaisseurs normalisées (ISO 128) suivent une progression de rapport √2 :
$$ 0,13 – 0,18 – 0,25 – 0,35 – 0,5 – 0,7 – 1,0 – 1,4 – 2,0 mm
En dessin de bâtiment à la main, on utilise couramment trois épaisseurs :
| Épaisseur | Valeur courante | Usage |
|---|---|---|
| **Forte** | 0,5 à 0,7 mm | murs et poteaux **coupés**, contours principaux |
| **Moyenne** | 0,35 mm | éléments vus (allèges, marches, menuiseries) |
| **Fine** | 0,18 à 0,25 mm | cotes, hachures, mobilier, axes, carrelage |

## Règles de tracé
- Quand deux traits se superposent, on dessine dans l'ordre de priorité : **trait fort vu** > **interrompu (caché)** > **mixte (axe)** > trait fin.
- Les traits interrompus et mixtes **commencent et finissent par un tiret**, et se croisent sur des tirets.
- Un **axe** déborde de 2 à 3 mm du contour qu'il partage.
- Les angles sont nets : pas de dépassement ni de trou aux intersections de murs.

> [!astuce] Méthode du crayon
> On trace d'abord tout le dessin en **traits de construction** très fins (mine H, presque invisibles), puis on **repasse** au trait fort les éléments coupés, au trait moyen les éléments vus. On efface ce qui reste à la fin.

## L'écriture normalisée
L'écriture (ISO 3098) doit être **lisible** et **régulière**. Hauteurs normalisées des caractères :
$$ 2,5 – 3,5 – 5 – 7 – 10 – 14 – 20 mm
| Texte | Hauteur conseillée |
|---|---|
| Chiffres de cote, annotations | 2,5 à 3,5 mm |
| Désignation des pièces, titres de vues | 3,5 à 5 mm |
| Titre du plan dans le cartouche | 5 à 7 mm |
L'écriture droite ou penchée à 75° est tracée entre deux lignes guides fines ; l'épaisseur du trait vaut h/10 (écriture de type B).

## Les hachures
Les **hachures** indiquent les parties **coupées** d'un objet. En dessin industriel, une hachure fine à 45° suffit ; en dessin de bâtiment, la hachure indique aussi le **matériau**. Les conventions usuelles :
| Matériau coupé | Représentation usuelle |
|---|---|
| Béton armé | hachures à 45° serrées, ou aplat gris foncé |
| Béton non armé, gros béton | points et petits triangles (granulats) |
| Maçonnerie (agglos, briques) | hachures à 45° plus espacées, ou aplat gris clair |
| Terre, remblai | traits obliques et points |
| Isolant | zigzag ou ondulations |
| Bois coupé | cernes ou croix diagonales |
| Acier (profilé mince) | noirci |
> [!attention]
> Il existe plusieurs conventions selon les bureaux d'études : on ajoute toujours une **légende** des hachures sur le plan.
Règles : hachures à 45° de préférence, **même espacement** pour une même pièce, **sens opposé** pour deux pièces voisines, interrompues autour des chiffres de cote.

> [!exemple] Lire un plan de niveau
> Un mur de 20 cm dessiné avec deux traits forts et des hachures à 45° est un mur **coupé** par le plan horizontal. L'allège d'une fenêtre, plus basse que le plan de coupe, est dessinée en trait **moyen** sans hachures : elle est **vue**.

> [!retenir]
> - Fort = coupé ou contour principal ; fin = cotes, hachures, mobilier ; interrompu = caché ; mixte = axe.
> - Épaisseurs dans le rapport √2 ; fort ≈ 2 × fin.
> - Écriture 2,5 à 7 mm, régulière, entre lignes guides.
> - Hachures = parties coupées (et matériau en bâtiment), toujours avec légende.`,
 sujet:{titre:"Mettre au net un plan selon les conventions de trait", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Un dessinateur débutant a tracé un plan de boutique à Bouaké avec un seul crayon HB et des hachures dans tous les sens. Vous êtes chargé d'expliquer comment le reprendre.

**Données**
- Éléments présents sur le plan : murs extérieurs en agglos de 20 cm coupés, poteaux en béton armé 20 × 20 coupés, cloisons de 10 cm, allèges des fenêtres, comptoir (mobilier), axes des poteaux, poutre au-dessus de la porte (au-dessus du plan de coupe), cotes, désignation « Boutique 24,50 m² » ;
- Matériel disponible : stylos 0,18 – 0,25 – 0,35 – 0,5 – 0,7 mm.

### Partie A — Les traits (10 points)
1. Attribuer à chaque élément de la liste un type de trait et une épaisseur. (6 pts)
2. Comment représenter la poutre située au-dessus de la porte ? Justifier. (2 pts)
3. Énoncer l'ordre de priorité quand deux traits se superposent. (2 pts)

### Partie B — Écriture (4 points)
4. Proposer la hauteur d'écriture des cotes, de la désignation des pièces et du titre du plan. (3 pts)
5. Pourquoi trace-t-on des lignes guides ? (1 pt)

### Partie C — Hachures (6 points)
6. Comment distinguer, par les hachures, le poteau en béton armé du mur en agglos ? (2 pts)
7. Énoncer trois règles de tracé des hachures. (3 pts)
8. Que faut-il ajouter sur le plan pour qu'il soit compris par tous ? (1 pt)`,
  corrige:`### Partie A — Traits (10 pts)
1. *(6 pts, 0,75 par élément)*
   - Murs extérieurs coupés : **continu fort 0,7** (ou 0,5) + hachures ;
   - Poteaux BA coupés : **continu fort 0,7** + hachures béton armé (ou noirci) ;
   - Cloisons de 10 cm coupées : **continu fort 0,5** ;
   - Allèges (vues) : **continu moyen 0,35** ;
   - Comptoir (mobilier) : **continu fin 0,25** ;
   - Axes des poteaux : **mixte fin 0,18** ;
   - Cotes : **continu fin 0,18** ;
   - Désignation : écriture 3,5 mm au stylo 0,35.
2. La poutre est **au-dessus du plan de coupe** : elle n'est ni coupée ni vue en regardant vers le bas. On la représente en **trait interrompu fin** (élément caché ou situé au-dessus), éventuellement avec l'annotation « retombée de poutre ». *(2 pts)*
3. Trait fort vu > trait interrompu > trait mixte (axe) > trait fin (cotes, hachures). *(2 pts)*

### Partie B — Écriture (4 pts)
4. Cotes : **2,5 mm** ; désignation des pièces : **3,5 à 5 mm** ; titre : **5 à 7 mm**. *(3 pts)*
5. Pour obtenir des caractères de **hauteur régulière** et des lignes droites. *(1 pt)*

### Partie C — Hachures (6 pts)
6. Béton armé : hachures à 45° **serrées** ou aplat foncé ; agglos : hachures plus **espacées** ou aplat clair. *(2 pts)*
7. Hachures à 45° ; même espacement sur une même pièce ; sens opposé sur deux pièces voisines ; interrompues autour des chiffres ; trait fin. *(3 pts)*
8. Une **légende** des hachures et des traits. *(1 pt)*`},
 exercices:[
  {t:"Reconnaître les traits", d:1, e:`Indiquer le type de trait utilisé pour : (a) l'arête cachée d'une semelle ; (b) l'axe d'un poteau ; (c) un mur coupé ; (d) une ligne de cote ; (e) la trace du plan de coupe A–A ; (f) un meuble dessiné sur un plan.`, c:`(a) **interrompu fin** ; (b) **mixte fin** ; (c) **continu fort** ; (d) **continu fin** ; (e) **mixte fin, fort aux extrémités**, avec flèches et lettres ; (f) **continu fin**.`},
  {t:"Série des épaisseurs", d:1, e:`1. Quelle est l'épaisseur qui suit 0,35 mm dans la série normalisée ? Calculer le rapport entre deux épaisseurs successives.
2. Si les murs coupés sont tracés en 0,7 mm, quelle épaisseur choisir pour les traits fins ?`, c:`1. 0,35 × √2 = 0,49 → **0,5 mm** ; rapport **√2 ≈ 1,41** (0,5 / 0,35 = 1,43 ; 0,7 / 0,5 = 1,4).
2. Rapport fort / fin = 2 : **0,35 mm** au maximum ; en bâtiment on choisit souvent **0,25 mm** (ou 0,18) pour les cotes et hachures.`},
  {t:"Hauteur d'écriture et échelle", d:2, e:`Un plan au 1/100 est réduit en photocopie de l'A1 à l'A3. Les cotes ont été écrites en 2,5 mm. Quelle sera leur hauteur après réduction ? Sont-elles encore lisibles ? Quelle hauteur fallait-il prévoir ?`, c:`De A1 à A3, on divise les longueurs par 2 (A1 → A2 : ÷ √2 ; A2 → A3 : ÷ √2). Les cotes passent à 2,5 / 2 = **1,25 mm** : **difficilement lisibles** (minimum conseillé 1,8 à 2 mm).
Il fallait écrire en **3,5 mm** (→ 1,75 mm) ou mieux **5 mm** (→ 2,5 mm) si la réduction était prévue.`},
  {t:"Choisir une hachure", d:1, e:`Dans une coupe de maison on trouve : semelle en béton armé, béton de propreté, terre sous le dallage, hérisson de pierres, mur en agglos, isolant sous toiture. Proposer une représentation pour chacun.`, c:`- Semelle BA : hachures 45° **serrées** (ou aplat foncé) ;
- Béton de propreté : **points et petits triangles** (béton non armé) ;
- Terre : **traits obliques et points** ;
- Hérisson : **cailloux** dessinés (petits polygones) ;
- Mur en agglos : hachures 45° **espacées** (ou aplat clair) ;
- Isolant : **zigzag**.
Et une **légende** sur le plan.`},
  {t:"Ordre de tracé", d:2, e:`Décrire, dans l'ordre, les étapes pour dessiner à la main un plan de pièce de 4,00 × 3,50 m avec une porte et une fenêtre, au 1/50.`, c:`1. Fixer la feuille, tracer cadre et cartouche.
2. Placer le dessin (8 × 7 cm + cotes) et tracer les **axes** des murs en trait de construction.
3. Tracer l'**épaisseur des murs** (traits de construction légers).
4. Placer les **ouvertures** (porte, fenêtre) et effacer les murs à leur emplacement.
5. **Repasser** les murs coupés au trait fort, les allèges et menuiseries au trait moyen, l'arc d'ouverture de la porte au trait fin.
6. **Hachurer** les murs, ajouter le mobilier en trait fin.
7. **Coter** (lignes d'attache, lignes de cote, chiffres), écrire la désignation et la surface.
8. Gommer les traits de construction, compléter le cartouche.`}
 ],
 quiz:[
  {q:"Un mur coupé par le plan de coupe se dessine en :", o:["Trait continu fin","Trait continu fort","Trait interrompu","Trait mixte"], r:1, e:"Les parties coupées sont en trait fort."},
  {q:"Les arêtes cachées se représentent en :", o:["Trait mixte fin","Trait continu fin","Trait interrompu fin","Trait fort"], r:2, e:"Interrompu fin pour les contours cachés."},
  {q:"Un axe de poteau se dessine en :", o:["Trait mixte fin","Trait interrompu","Trait fort","Zigzag"], r:0, e:"Trait-point fin."},
  {q:"Le rapport entre deux épaisseurs de trait normalisées successives est :", o:["2","1,5","√2","3"], r:2, e:"0,25 – 0,35 – 0,5 – 0,7 : rapport √2."},
  {q:"Les hachures représentent :", o:["Les parties vues","Les parties coupées","Les parties cachées","Les axes"], r:1, e:"On hachure ce que le plan de coupe traverse."}
 ]},

{id:"dessin-3", niv:1, titre:"Échelles et cotation", duree:60, contenu:`## L'échelle
L'**échelle** est le rapport entre une dimension mesurée **sur le dessin** et la dimension **réelle** correspondante :
$$ E = dimension sur le dessin / dimension réelle
- **1/1** (ou 1:1) : vraie grandeur ;
- **1/50** : réduction, 1 cm sur le dessin représente 50 cm ;
- **2/1** : agrandissement (petites pièces mécaniques).
$$ dimension dessin = dimension réelle × E      dimension réelle = dimension dessin / E
| Échelle | 1 cm représente | Usage dans le bâtiment |
|---|---|---|
| 1/1 – 1/2 – 1/5 | 1 à 5 cm | détails de menuiserie, d'étanchéité |
| 1/10 – 1/20 | 10 à 20 cm | détails de ferraillage, d'escalier, de fondation |
| **1/50** | 50 cm | **plans d'exécution** (niveaux, coupes, façades) |
| **1/100** | 1 m | **avant-projet**, permis de construire |
| 1/200 – 1/500 | 2 à 5 m | plans de masse |
| 1/1 000 – 1/5 000 | 10 à 50 m | plans de situation, lotissements |
Seules les échelles **normalisées** (ISO 5455) sont utilisées : 1/2, 1/5, 1/10 et leurs multiples par 10, 100…

> [!exemple] Passer d'une échelle à l'autre
> Un mur de 7,35 m mesure au 1/50 : 735 cm / 50 = **14,7 cm** ; au 1/100 : **7,35 cm** ; au 1/200 : **3,675 cm**.
> Sur un plan au 1/100, une chambre mesure 3,2 × 3,6 cm : en réalité **3,20 × 3,60 m** = 11,52 m².

## Choisir l'échelle
On choisit la **plus grande** échelle normalisée qui permet de faire entrer le dessin (avec ses cotes) dans le format disponible :
$$ E ≤ dimension utile du papier / dimension réelle de l'objet
> [!exemple] Façade de 18,60 m sur un A3
> Largeur utile ≈ 36 cm (cotes comprises) : E ≤ 36 / 1 860 = 1/51,7. Le 1/50 est trop grand ; on prend le **1/100** (18,6 cm). Au 1/100, la façade est petite : on peut préférer un A2 au 1/50.
L'**échelle graphique** (segment gradué dessiné sur le plan) reste juste même si le plan est agrandi ou réduit à la photocopie.

## Les éléments d'une cote
!fig:cotation|Éléments de la cotation : industrie et bâtiment
- La **ligne d'attache** (ou de rappel) prolonge l'élément coté, sans le toucher (léger jour de 1 à 2 mm), et dépasse la ligne de cote de 2 mm.
- La **ligne de cote**, parallèle à la dimension, en trait fin, est limitée par des **flèches** (industrie) ou des **traits obliques à 45°** (bâtiment).
- Le **chiffre de cote** est écrit **au-dessus** de la ligne de cote, lisible depuis le **bas** ou la **droite** de la feuille.
- La cote donne toujours la **dimension réelle**, quelle que soit l'échelle.

## Règles de cotation en bâtiment
1. Unité unique, indiquée dans le cartouche : **mètre** (3,20), ou **centimètre** (320). Les épaisseurs se donnent souvent en cm (20).
2. Autour d'un plan de niveau, on dispose généralement **trois lignes de cotes** à l'extérieur :
   - 1re ligne (la plus proche) : **ouvertures et trumeaux** ;
   - 2e ligne : **axes des murs ou poteaux** et décrochements ;
   - 3e ligne : **cote totale** (cote hors tout).
3. À l'intérieur : dimensions des pièces (cotes intérieures), épaisseurs des cloisons.
4. **Contrôle** : la somme des cotes en chaîne doit égaler la cote totale.
5. Les **niveaux** (hauteurs) ne se cotent pas en plan par une ligne de cote mais par une **cote de niveau** (±0,00 ; +3,00) ; les ouvertures portent leurs dimensions **largeur / hauteur** (ex. 120 / 120 ou 90 × 210).
6. Ne pas coter deux fois la même dimension ; ne pas coter sur des traits cachés ; éviter que les lignes de cote se croisent.

## Cotation en chaîne, cumulée, par coordonnées
| Mode | Principe | Avantage / inconvénient |
|---|---|---|
| **En chaîne** | les cotes se suivent, d'un élément au suivant | lecture directe des longueurs ; les erreurs s'additionnent |
| **Cumulée** (en parallèle ou superposée) | toutes les cotes partent d'une **origine** commune | implantation précise ; plus encombrant |
| **Par coordonnées** | tableau des X, Y des points | adaptée à l'implantation topographique |
Sur le chantier, l'implantation se fait plutôt **à partir d'une origine** (axe de référence) pour éviter le cumul des erreurs.

> [!retenir]
> - Dimension dessin = dimension réelle × échelle ; la cote donne la dimension réelle.
> - Plans d'exécution au 1/50, avant-projet au 1/100, masse 1/200 – 1/500.
> - Cote : ligne d'attache, ligne de cote, extrémités (flèches ou traits obliques), chiffre au-dessus.
> - Trois lignes de cotes autour du plan ; somme des cotes partielles = cote totale.`,
 sujet:{titre:"Échelles et cotation du plan d'un magasin", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Un commerçant de Daloa fait construire un magasin rectangulaire de **12,40 m × 8,20 m** (dimensions extérieures), murs en agglos de **20 cm**. La façade principale comporte, de gauche à droite : un trumeau de 1,20 m, une porte de 2,40 m, un trumeau de 2,00 m, une fenêtre de 1,80 m, un trumeau de 2,00 m, une fenêtre de 1,80 m et un dernier trumeau.

### Partie A — Échelles (7 points)
1. Quelle longueur occupe la façade au 1/50, au 1/100 et au 1/200 ? (3 pts)
2. On dispose d'un A3 (zone utile 39 × 27,7 cm, cartouche de 18 × 5 cm). Choisir l'échelle du plan, cotes comprises (prévoir 3 cm de cotes de chaque côté). (3 pts)
3. Sur un tirage réduit du plan, une porte mesure 1,2 cm alors qu'elle fait 2,40 m. Quelle est l'échelle du tirage ? (1 pt)

### Partie B — Cotation de la façade principale (9 points)
4. Calculer la largeur du dernier trumeau. (2 pts)
5. Écrire la ligne de cotes des ouvertures et trumeaux, puis la cote totale. Vérifier la cohérence. (4 pts)
6. Quelles sont les dimensions intérieures du magasin et sa surface utile ? (3 pts)

### Partie C — Règles (4 points)
7. Comment sont limitées les lignes de cote en dessin de bâtiment ? Où écrit-on le chiffre ? (2 pts)
8. Comment indique-t-on la hauteur d'une fenêtre sur un plan de niveau ? (2 pts)`,
  corrige:`### Partie A — Échelles (7 pts)
1. 12,40 m = 1 240 cm : 1/50 → **24,8 cm** ; 1/100 → **12,4 cm** ; 1/200 → **6,2 cm**. *(3 pts)*
2. Au 1/50 : 24,8 + 6 = 30,8 cm et 16,4 + 6 = 22,4 cm. La largeur 30,8 < 39 ✓ ; la hauteur 22,4 < 27,7 − 5 = 22,7 ✓ : le **1/50** convient (juste) ; on peut placer le cartouche à droite si besoin. *(3 pts)*
3. E = 1,2 / 240 = **1/200**. *(1 pt)*

### Partie B — Cotation (9 pts)
4. 12,40 − (1,20 + 2,40 + 2,00 + 1,80 + 2,00 + 1,80) = 12,40 − 11,20 = **1,20 m**. *(2 pts)*
5. Ligne 1 : **1,20 | 2,40 | 2,00 | 1,80 | 2,00 | 1,80 | 1,20** ; ligne 2 (cote totale) : **12,40**. Contrôle : la somme vaut 12,40 ✓. *(4 pts)*
6. Intérieur : 12,40 − 2 × 0,20 = **12,00 m** et 8,20 − 0,40 = **7,80 m** ; surface utile = **93,60 m²**. *(3 pts)*

### Partie C — Règles (4 pts)
7. Par des **traits obliques à 45°** (ou des points) ; le chiffre est écrit **au-dessus** de la ligne, lisible depuis le bas ou la droite. *(2 pts)*
8. Par l'annotation **largeur / hauteur** près de l'ouverture (ex. 180 / 120), complétée par la hauteur d'allège (ex. allège 1,00) ; les hauteurs se lisent aussi sur les façades et les coupes. *(2 pts)*`},
 exercices:[
  {t:"Calculs d'échelle", d:1, e:`1. Au 1/50, quelle longueur sur le papier pour 3,85 m ? pour 0,20 m ?
2. Au 1/200, un bâtiment mesure 9,3 cm. Quelle est sa longueur réelle ?
3. Sur un détail, une marche de 17 cm mesure 3,4 cm. Quelle est l'échelle ?`, c:`1. 385 / 50 = **7,7 cm** ; 20 / 50 = **0,4 cm** (4 mm).
2. 9,3 × 200 = 1 860 cm = **18,60 m**.
3. 3,4 / 17 = 0,2 = **1/5**.`},
  {t:"Choisir une échelle normalisée", d:2, e:`Un bâtiment de 26,50 m × 14,20 m doit être dessiné sur un A1 horizontal (zone utile ≈ 80 × 57 cm), avec 4 cm de cotes de chaque côté et un cartouche de 18 × 6 cm. Quelle est la plus grande échelle normalisée possible ?`, c:`Dimensions disponibles pour le bâtiment : 80 − 8 = 72 cm et 57 − 8 = 49 cm (en mettant le cartouche à côté si nécessaire).
E ≤ 72 / 2 650 = 1/36,8 et E ≤ 49 / 1 420 = 1/29 → la plus grande échelle normalisée inférieure est **1/50** (53 × 28,4 cm, soit 61 × 36,4 cm avec cotes ✓).`},
  {t:"Échelle graphique", d:1, e:`Dessiner (décrire) une échelle graphique pour un plan au 1/200 graduée tous les 2 m jusqu'à 10 m. Quelle est la longueur de chaque graduation et de l'échelle complète ?`, c:`Au 1/200, 2 m = 200 cm / 200 = **1 cm** par graduation ; 10 m → **5 cm** au total.
On trace un segment de 5 cm divisé en 5 parties de 1 cm, numérotées 0 – 2 – 4 – 6 – 8 – 10 m, la première graduation pouvant être subdivisée en 4 (tous les 0,50 m).`},
  {t:"Vérifier une chaîne de cotes", d:2, e:`Sur un plan, on lit en façade : 0,20 | 1,15 | 1,20 | 2,35 | 0,90 | 2,40 | 1,20 | 1,10 | 0,20 et une cote totale de 10,80 m. Le plan est-il cohérent ? Où chercher l'erreur ?`, c:`Somme : 0,20 + 1,15 + 1,20 + 2,35 + 0,90 + 2,40 + 1,20 + 1,10 + 0,20 = **10,70 m** ≠ 10,80 m : **écart de 10 cm**.
Il faut vérifier sur la 2e ligne (axes) et sur les autres plans (façade, plan de structure) quelle cote partielle est fausse avant d'implanter. Sur le chantier, on ne « répartit » jamais un écart : on demande la correction au dessinateur.`},
  {t:"Surface réelle à partir d'un plan", d:2, e:`Sur un plan au 1/100, un séjour en L est formé de deux rectangles de 5,2 × 4,0 cm et 2,4 × 2,0 cm. Calculer sa surface réelle. Quelle surface occuperait-il sur un plan au 1/50 ?`, c:`Réel : 5,20 × 4,00 + 2,40 × 2,00 = 20,80 + 4,80 = **25,60 m²**.
Au 1/50, les longueurs sont doublées par rapport au 1/100, donc les surfaces sont multipliées par 4 : 25,6 cm² × 4 = **102,4 cm²** (10,4 × 8 + 4,8 × 4).`}
 ],
 quiz:[
  {q:"Au 1/50, 1 cm sur le plan représente :", o:["5 cm","50 cm","5 m","0,5 cm"], r:1, e:"1 cm × 50 = 50 cm."},
  {q:"Un mur de 6 m mesure au 1/100 :", o:["0,6 cm","6 cm","60 cm","12 cm"], r:1, e:"600 cm / 100 = 6 cm."},
  {q:"En dessin de bâtiment, les lignes de cote sont limitées par :", o:["Des flèches uniquement","Des traits obliques","Des cercles","Rien"], r:1, e:"Traits obliques à 45° (ou points)."},
  {q:"La cote inscrite sur un plan au 1/100 indique :", o:["La longueur sur le papier","La dimension réelle","La dimension divisée par 100","La surface"], r:1, e:"Toujours la dimension réelle."},
  {q:"L'échelle courante des plans d'exécution de bâtiment est :", o:["1/500","1/200","1/50","1/1"], r:2, e:"1/50 pour l'exécution, 1/100 pour l'avant-projet."}
 ]},

{id:"dessin-4", niv:1, titre:"Constructions géométriques utiles au dessin et au chantier", duree:55, contenu:`## Pourquoi la géométrie ?
Arcs de baies, escaliers balancés, toitures, ronds-points, bassins, implantation d'angles droits : le dessinateur et le chef de chantier utilisent en permanence quelques **constructions géométriques** à la règle, à l'équerre et au compas (ou au cordeau et au ruban sur le terrain).

## Perpendiculaires et parallèles
- **Médiatrice** d'un segment AB : deux arcs de même rayon (> AB/2) centrés en A et en B se coupent en deux points ; la droite qui les joint est perpendiculaire à AB en son milieu.
- **Perpendiculaire en un point** P d'une droite : on reporte de part et d'autre deux longueurs égales, puis on trace la médiatrice.
- **Parallèle** à une droite : à l'équerre glissant sur une règle, ou en reportant deux fois la même distance perpendiculairement.
- **Angle droit par le triangle 3-4-5** : sur le chantier, on tend un cordeau de 3 m, un de 4 m ; quand la diagonale mesure exactement **5 m**, l'angle est droit (3² + 4² = 5²). Multiples : 6-8-10, 9-12-15.

> [!exemple] Vérifier l'équerrage d'une fondation
> Un rectangle d'implantation de 12,00 × 9,00 m doit avoir des diagonales égales à √(12² + 9²) = **15,00 m**. Si l'on mesure 15,06 et 14,94 m, l'implantation n'est pas d'équerre : on corrige avant de couler.

## Bissectrice et division d'un segment
- **Bissectrice** d'un angle : un arc centré au sommet coupe les côtés en deux points ; deux arcs égaux centrés sur ces points se coupent sur la bissectrice.
- **Diviser un segment en n parties égales** (théorème de Thalès) : on trace une demi-droite quelconque depuis A, on y reporte n longueurs égales, on joint le dernier point à B, puis on mène des parallèles. Utile pour répartir les **marches** d'un escalier ou les **chevrons** d'une toiture.

## Polygones réguliers
Un polygone régulier de n côtés inscrit dans un cercle de rayon R a pour côté :
$$ c = 2 R sin(180° / n)
| Polygone | Côté | Construction |
|---|---|---|
| Triangle équilatéral | R √3 = 1,732 R | reporter R six fois, prendre un point sur deux |
| Carré | R √2 = 1,414 R | deux diamètres perpendiculaires |
| **Hexagone** | **R** | reporter le rayon six fois sur le cercle |
| Octogone | 0,765 R | bissectrices des angles du carré |
L'hexagone sert pour les pavés autobloquants, les kiosques (paillotes) et les poteaux décoratifs.

## Raccordements et arcs
Un **raccordement** relie deux lignes par un arc **tangent** : le centre de l'arc est à la distance R des deux lignes, et le point de tangence est sur la perpendiculaire menée du centre à la ligne.
- Raccorder deux droites perpendiculaires (angle d'un trottoir, d'une bordure) : le centre est à R des deux droites, les points de tangence à R du sommet.
- **Arcs de baies** : plein cintre (demi-cercle, flèche = portée / 2), arc surbaissé (flèche < portée / 2).
Pour un arc de corde (portée) c et de flèche f, le rayon vaut :
$$ R = (c² / 4 + f²) / (2 f)
> [!exemple] Arc surbaissé d'une baie de 2,40 m
> Flèche f = 0,30 m : R = (2,40² / 4 + 0,30²) / (2 × 0,30) = (1,44 + 0,09) / 0,60 = **2,55 m**. Le centre est à 2,55 − 0,30 = 2,25 m sous le sommet de l'arc.

## L'ellipse
Utilisée pour les bassins, les perspectives de cercles, certains escaliers :
- **méthode du jardinier** : deux piquets aux foyers F et F', une corde de longueur 2a (grand axe) ; les foyers sont à c = √(a² − b²) du centre ;
- **méthode des deux cercles concentriques** (rayons a et b) : pour chaque rayon tracé, on combine l'abscisse du point sur le grand cercle et l'ordonnée du point sur le petit.

> [!retenir]
> - Angle droit sur le terrain : triangle 3-4-5 ; contrôle par diagonales égales.
> - Thalès pour diviser un segment en parties égales (marches, chevrons).
> - Côté de l'hexagone inscrit = R ; c = 2 R sin(180°/n).
> - Rayon d'un arc : R = (c²/4 + f²) / (2f) ; raccordement : centre à R des deux lignes.`,
 sujet:{titre:"Géométrie de l'implantation d'un kiosque et de son allée", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Dans la cour d'un maquis à Grand-Bassam, on construit un **kiosque hexagonal** et une allée dont l'angle est arrondi. L'entrée de la cour est surmontée d'un **arc surbaissé**.

**Données**
- Kiosque : hexagone régulier inscrit dans un cercle de **R = 2,50 m** ; poteaux aux sommets ;
- Allée : deux bordures perpendiculaires raccordées par un arc de **R = 1,50 m** ;
- Portail : baie de **3,00 m** de portée, flèche de l'arc **0,40 m** ;
- Implantation du rectangle de la salle : **10,00 × 7,50 m**.

### Partie A — Le kiosque (7 points)
1. Calculer la distance entre deux poteaux voisins et le périmètre du kiosque. (2 pts)
2. Décrire la construction de l'hexagone au compas. (2 pts)
3. Calculer la surface du kiosque (6 triangles équilatéraux). (3 pts)

### Partie B — Allée et portail (7 points)
4. Où se trouve le centre de l'arc de raccordement de l'allée ? Décrire la construction. (3 pts)
5. Calculer le rayon de l'arc surbaissé du portail et la position de son centre. (4 pts)

### Partie C — Implantation de la salle (6 points)
6. Quelle longueur de diagonale doit-on mesurer ? (2 pts)
7. Expliquer comment obtenir un angle droit avec un ruban de 20 m (méthode 3-4-5 adaptée). (2 pts)
8. On mesure des diagonales de 12,54 et 12,46 m. Conclure. (2 pts)`,
  corrige:`### Partie A — Kiosque (7 pts)
1. Côté de l'hexagone inscrit = R = **2,50 m** ; périmètre = 6 × 2,50 = **15,00 m**. *(2 pts)*
2. Tracer le cercle de rayon 2,50 m (à l'échelle), puis reporter le rayon au compas six fois sur le cercle à partir d'un point ; joindre les points. *(2 pts)*
3. Triangle équilatéral de côté a : S = (√3 / 4) a² = 0,433 × 6,25 = 2,706 m² ; kiosque : 6 × 2,706 = **16,24 m²**. *(3 pts)*

### Partie B — Allée et portail (7 pts)
4. Le centre est à **1,50 m de chacune des deux bordures**, sur la bissectrice de l'angle ; les points de tangence sont à 1,50 m du sommet de l'angle, sur chaque bordure (pieds des perpendiculaires menées du centre). *(3 pts)*
5. R = (c²/4 + f²) / (2f) = (9/4 + 0,16) / 0,80 = (2,25 + 0,16) / 0,80 = **3,01 m** ; le centre est sur l'axe de la baie, à 3,01 − 0,40 = **2,61 m sous le sommet** de l'arc (donc 2,21 m sous les naissances). *(4 pts)*

### Partie C — Implantation (6 pts)
6. d = √(10² + 7,5²) = √156,25 = **12,50 m**. *(2 pts)*
7. On utilise un triangle 6-8-10 (multiple de 3-4-5) : 6 m sur un côté, 8 m sur l'autre ; on ajuste jusqu'à ce que l'hypoténuse mesure **10,00 m**. *(2 pts)*
8. Les diagonales diffèrent de 8 cm : le rectangle **n'est pas d'équerre** (c'est un parallélogramme). On fait pivoter les côtés jusqu'à obtenir deux diagonales de 12,50 m. *(2 pts)*`},
 exercices:[
  {t:"Triangle 3-4-5", d:1, e:`1. Montrer que le triangle 3-4-5 est rectangle.
2. Avec un ruban de 30 m, on veut un triangle le plus grand possible de proportions 3-4-5. Quels côtés prendre ?`, c:`1. 3² + 4² = 9 + 16 = 25 = 5² : d'après la réciproque de Pythagore, le triangle est **rectangle**.
2. Périmètre 3 + 4 + 5 = 12 unités ; avec 30 m de ruban : unité 2,5 m → **7,50 – 10,00 – 12,50 m**.`},
  {t:"Diviser un segment", d:1, e:`On doit répartir 13 marches régulièrement sur une longueur de volée de 3,25 m dessinée au 1/20. Expliquer la construction graphique et donner le giron.`, c:`Au 1/20, la volée mesure 16,25 cm. On trace depuis une extrémité une demi-droite oblique, on y reporte 13 longueurs égales (par exemple 13 × 1,5 cm), on joint le 13e point à l'autre extrémité et on mène des parallèles : la volée est divisée en 13 parties égales.
Giron : 3,25 / 13 = **0,25 m** (1,25 cm au 1/20).`},
  {t:"Polygone régulier", d:2, e:`Un bassin octogonal est inscrit dans un cercle de 3,00 m de diamètre. Calculer la longueur d'un côté et le périmètre de la margelle.`, c:`R = 1,50 m ; c = 2 R sin(180°/8) = 3 × sin 22,5° = 3 × 0,3827 = **1,148 m**.
Périmètre : 8 × 1,148 = **9,18 m**.`},
  {t:"Rayon d'un arc", d:2, e:`1. Une baie de 1,80 m est couverte par un arc plein cintre. Quels sont le rayon et la flèche ?
2. On remplace par un arc surbaissé de flèche 0,25 m. Calculer le rayon.`, c:`1. Plein cintre : demi-cercle → **R = f = 0,90 m**.
2. R = (1,80²/4 + 0,25²) / (2 × 0,25) = (0,81 + 0,0625) / 0,50 = **1,745 m**.`},
  {t:"Ellipse d'un bassin", d:3, e:`On trace au sol un bassin elliptique de 6,00 m × 4,00 m par la méthode du jardinier.
1. Où planter les deux piquets ?
2. Quelle longueur de corde utiliser (boucle passant autour des piquets) ?`, c:`1. a = 3,00 m, b = 2,00 m ; c = √(a² − b²) = √5 = **2,236 m** : les piquets (foyers) sont sur le grand axe, à 2,236 m de part et d'autre du centre.
2. Pour tout point M de l'ellipse : MF + MF' = 2a = 6,00 m. Avec une boucle fermée passant autour des deux piquets et de la pointe traçante, la longueur totale est 2a + 2c = 6,00 + 4,47 = **10,47 m** (ou une corde de 6,00 m attachée aux deux piquets).`}
 ],
 quiz:[
  {q:"Le côté d'un hexagone régulier inscrit dans un cercle de rayon R vaut :", o:["R/2","R","R√2","2R"], r:1, e:"On reporte le rayon six fois."},
  {q:"Pour vérifier qu'un rectangle d'implantation est d'équerre, on compare :", o:["Les côtés opposés","Les diagonales","Les angles au rapporteur","Les surfaces"], r:1, e:"Diagonales égales ⇒ rectangle."},
  {q:"Pour diviser un segment en 7 parties égales, on utilise :", o:["Le théorème de Pythagore","Le théorème de Thalès","La trigonométrie","Le compas seul"], r:1, e:"Parallèles et proportionnalité (Thalès)."},
  {q:"Un arc plein cintre a une flèche égale à :", o:["La portée","La moitié de la portée","Le quart de la portée","Zéro"], r:1, e:"Demi-cercle : f = R = portée/2."},
  {q:"Le centre d'un arc de raccordement entre deux droites est situé :", o:["Sur l'une des droites","À la distance R des deux droites","Au sommet de l'angle","N'importe où"], r:1, e:"Il est équidistant (R) des deux droites."}
 ]},

{id:"dessin-5", niv:1, titre:"Projections orthogonales : les vues", duree:60, contenu:`## Le principe
Un dessin sur papier n'a que deux dimensions. Pour décrire **exactement** un objet en trois dimensions, on le représente par plusieurs **vues**, chacune obtenue en regardant l'objet **perpendiculairement** à l'une de ses faces : c'est la **projection orthogonale**. Chaque vue montre les dimensions en **vraie grandeur** des faces parallèles au plan de projection.
- La **vue de face** (élévation principale) est choisie pour montrer la forme la plus caractéristique.
- La **vue de dessus** montre la largeur et la profondeur.
- La **vue de gauche** (ou de droite) montre la profondeur et la hauteur.
On peut obtenir six vues (face, dessus, dessous, gauche, droite, arrière) ; on n'en dessine que le **nombre nécessaire** à la compréhension (souvent trois).

## La méthode européenne
!fig:vues|Les trois vues d'une pièce en marche d'escalier (méthode européenne)
En **méthode européenne** (symbole E, utilisée en Afrique francophone et en Europe), chaque vue se place **à l'opposé** du côté d'où l'on regarde :
| Vue | Position par rapport à la vue de face |
|---|---|
| Vue de dessus | **en dessous** |
| Vue de dessous | au-dessus |
| Vue de gauche | **à droite** |
| Vue de droite | à gauche |
| Vue arrière | à droite de la vue de gauche |
En **méthode américaine** (symbole A), c'est l'inverse : la vue de dessus est au-dessus, la vue de droite à droite. Le symbole de la méthode utilisée figure dans le cartouche.

## La correspondance des vues
Les vues sont **alignées** :
- la vue de face et la vue de dessus ont la même **largeur** (alignement vertical) ;
- la vue de face et la vue de gauche ont la même **hauteur** (alignement horizontal) ;
- la vue de dessus et la vue de gauche ont la même **profondeur** : on la reporte avec une **ligne à 45°** ou au compas.
Les **lignes de rappel** (traits fins de construction) assurent ces alignements. On ne cote jamais deux fois la même dimension dans deux vues.

## Arêtes vues et arêtes cachées
- Une arête **visible** depuis le point de vue se dessine en **trait continu fort**.
- Une arête **cachée** par la matière se dessine en **trait interrompu fin**.
- Les **axes** de symétrie, de trous, de cylindres se dessinent en **trait mixte fin**.
Dans l'exemple ci-dessus, l'arête du « palier » à mi-hauteur n'est pas visible depuis la gauche : elle est en trait interrompu sur la vue de gauche.

> [!exemple] Lire trois vues
> Vue de face : un rectangle 1,20 × 0,40 m. Vue de dessus : un rectangle 1,20 × 0,60 m avec un cercle de Ø 0,20 au centre. Vue de gauche : un rectangle 0,60 × 0,40 m avec deux traits interrompus verticaux distants de 0,20 m.
> C'est un **bloc de 1,20 × 0,60 × 0,40 m percé d'un trou vertical de Ø 20 cm** (la réservation d'une gaine dans un massif, par exemple). Les traits interrompus de la vue de gauche sont les génératrices du trou, cachées.

## Le bâtiment : plans, façades et coupes
En architecture, on retrouve les mêmes principes avec des noms différents :
| Dessin industriel | Dessin de bâtiment |
|---|---|
| Vue de dessus | **Plan de toiture** ou plan de masse |
| Coupe horizontale | **Plan de niveau** (vue en plan) |
| Vues de face, de côté | **Façades** (élévations) nord, sud, est, ouest |
| Coupe verticale | **Coupe** A–A, B–B |
Les façades sont nommées par leur **orientation** ou leur position (façade principale, sur rue, arrière).

> [!retenir]
> - Méthode européenne : dessus en dessous, gauche à droite.
> - Largeurs alignées verticalement, hauteurs horizontalement, profondeurs reportées à 45°.
> - Vu : trait fort ; caché : interrompu ; axe : mixte.
> - En bâtiment : plans (coupes horizontales), façades (vues), coupes verticales.`,
 sujet:{titre:"Vues d'un massif de fondation et d'une marche", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Le bureau d'études vous demande de dessiner les vues d'un **massif de fondation en béton** qui recevra un poteau métallique d'auvent, à Korhogo.

**Données (dimensions réelles)**
- Massif : semelle de **1,00 × 1,00 m**, hauteur **0,30 m** ; surmontée d'un fût centré de **0,40 × 0,40 m**, hauteur **0,60 m** ;
- Dans le fût, une **réservation verticale** carrée de 0,15 × 0,15 m, profonde de 0,40 m depuis le haut, centrée (pour sceller le poteau) ;
- Dessin à réaliser sur A4 vertical (zone utile 18 × 27,7 cm), méthode européenne.

### Partie A — Choix (5 points)
1. Combien de vues sont nécessaires ? Lesquelles ? (2 pts)
2. Choisir une échelle normalisée permettant de placer trois vues (prévoir 3 cm entre les vues et 2 cm pour les cotes). (3 pts)

### Partie B — Description des vues (11 points)
3. Décrire la vue de face : formes, dimensions sur le papier, traits utilisés (y compris la réservation). (4 pts)
4. Décrire la vue de dessus. (4 pts)
5. La vue de gauche est-elle différente de la vue de face ? Conclure sur son utilité. (3 pts)

### Partie C — Volumes (4 points)
6. Calculer le volume de béton du massif (réservation déduite). (4 pts)`,
  corrige:`### Partie A — Choix (5 pts)
1. Le massif est symétrique : **deux vues** suffisent (face + dessus), la vue de dessus montrant que les sections sont carrées. *(2 pts)*
2. Hauteur totale : face 0,90 m + dessus 1,00 m + 3 cm d'intervalle + cotes ; largeur 1,00 m + cotes. Au 1/10 : 9 + 10 + 3 + 4 = 26 cm de haut ≤ 27,7 ✓ et 10 + 4 = 14 cm ≤ 18 ✓ → **1/10**. *(3 pts)*

### Partie B — Vues (11 pts)
3. Vue de face (1/10) : rectangle de **10 × 3 cm** (semelle) surmonté d'un rectangle centré de **4 × 6 cm** (fût), en **traits forts** ; réservation : rectangle **1,5 × 4 cm** en **traits interrompus** (caché), partant du haut du fût ; **axe** vertical en trait mixte. *(4 pts)*
4. Vue de dessus, placée **sous** la vue de face : carré de **10 × 10 cm** (semelle), carré centré de **4 × 4 cm** (dessus du fût, visible), carré centré de **1,5 × 1,5 cm** (réservation, **visible** depuis le dessus, donc en trait fort) ; deux axes perpendiculaires en trait mixte. *(4 pts)*
5. La vue de gauche est **identique** à la vue de face (symétrie de révolution d'ordre 4) : elle n'apporte aucune information, on ne la dessine pas. *(3 pts)*

### Partie C — Volume (4 pts)
6. Semelle : 1,00 × 1,00 × 0,30 = 0,300 m³ ; fût : 0,40 × 0,40 × 0,60 = 0,096 m³ ; réservation : 0,15 × 0,15 × 0,40 = 0,009 m³.
V = 0,300 + 0,096 − 0,009 = **0,387 m³**. *(4 pts)*`},
 exercices:[
  {t:"Position des vues", d:1, e:`En méthode européenne, où place-t-on : (a) la vue de dessus ; (b) la vue de gauche ; (c) la vue de droite ; (d) la vue de dessous ? Et en méthode américaine pour (a) et (b) ?`, c:`Européenne : (a) **sous** la vue de face ; (b) **à droite** ; (c) **à gauche** ; (d) **au-dessus**.
Américaine : vue de dessus **au-dessus** de la vue de face ; vue de gauche **à gauche**.`},
  {t:"Dimensions communes", d:1, e:`Une pièce mesure 80 mm de large, 50 mm de haut et 30 mm de profondeur. Quelles dimensions lit-on sur la vue de face, la vue de dessus et la vue de gauche ?`, c:`Face : **80 × 50** (largeur × hauteur) ; dessus : **80 × 30** (largeur × profondeur) ; gauche : **30 × 50** (profondeur × hauteur).`},
  {t:"Identifier un objet", d:2, e:`Vue de face : un triangle isocèle de base 2,00 m et de hauteur 1,00 m. Vue de dessus : un rectangle de 2,00 × 6,00 m avec une ligne médiane dans le sens de la longueur. Vue de gauche : un rectangle de 6,00 × 1,00 m. Quel est cet objet ?`, c:`Un **prisme triangulaire** couché : c'est la forme d'une **toiture à deux versants** de 6,00 m de long, de 2,00 m de portée et 1,00 m de hauteur au faîtage. La ligne médiane de la vue de dessus est le **faîtage**.`},
  {t:"Arêtes cachées", d:2, e:`Un mur de clôture de 3,00 m de long, 1,80 m de haut et 0,20 m d'épaisseur est percé d'une ouverture de 1,00 × 1,00 m dont l'allège est à 0,60 m. Décrire la vue de dessus et la vue de gauche, en précisant les traits.`, c:`- **Vue de dessus** : rectangle 3,00 × 0,20 m en trait fort ; l'ouverture n'est pas visible depuis le dessus (elle est sous la partie haute du mur) : deux traits **interrompus** transversaux à 1,00 m d'écart.
- **Vue de gauche** : rectangle 0,20 × 1,80 m en trait fort ; l'ouverture est cachée : deux traits **interrompus** horizontaux à 0,60 m et 1,60 m de hauteur.`},
  {t:"Report de profondeur à 45°", d:2, e:`Expliquer comment, à partir de la vue de face et de la vue de dessus, on construit la vue de gauche sans mesurer les profondeurs à la règle.`, c:`On trace une **ligne à 45°** passant à droite de la vue de dessus (en dessous de la vue de gauche à construire). Depuis chaque point de la vue de dessus, on mène une **horizontale** jusqu'à la ligne à 45°, puis une **verticale** vers le haut : on obtient les profondeurs. Depuis la vue de face, on mène des **horizontales** vers la droite : on obtient les hauteurs. Les intersections donnent les points de la vue de gauche.`}
 ],
 quiz:[
  {q:"En méthode européenne, la vue de dessus est placée :", o:["Au-dessus de la vue de face","En dessous de la vue de face","À droite","À gauche"], r:1, e:"Méthode européenne : dessus en dessous."},
  {q:"En méthode européenne, la vue de gauche est placée :", o:["À gauche de la vue de face","À droite de la vue de face","Au-dessus","En dessous"], r:1, e:"Elle se place à l'opposé du point de vue."},
  {q:"La vue de face et la vue de dessus ont en commun :", o:["La hauteur","La largeur","La profondeur","Aucune dimension"], r:1, e:"Alignement vertical : même largeur."},
  {q:"Une arête cachée se dessine en :", o:["Trait fort","Trait interrompu fin","Trait mixte","Trait ondulé"], r:1, e:"Interrompu fin."},
  {q:"En dessin de bâtiment, la façade correspond à :", o:["Une coupe horizontale","Une vue (élévation)","Un plan de masse","Une perspective"], r:1, e:"La façade est une élévation (vue)."}
 ]},

{id:"dessin-6", niv:1, titre:"Lire un plan de bâtiment", duree:60, contenu:`## Le dossier de plans d'un bâtiment
Un bâtiment est décrit par un **ensemble de plans** complémentaires, à lire **ensemble** :
| Document | Échelle courante | Ce qu'il montre |
|---|---|---|
| **Plan de situation** | 1/2 000 à 1/25 000 | où se trouve le terrain dans la ville ou le quartier |
| **Plan de masse** | 1/200 – 1/500 | le bâtiment sur la parcelle : limites, reculs, accès, réseaux, niveaux |
| **Plans de niveaux** | 1/50 – 1/100 | chaque étage vu en coupe horizontale : murs, ouvertures, pièces |
| **Façades** | 1/50 – 1/100 | aspect extérieur : ouvertures, matériaux, hauteurs |
| **Coupes** | 1/50 – 1/100 | hauteurs, planchers, fondations, toiture |
| **Plan de toiture** | 1/100 – 1/200 | pentes, faîtages, évacuation des eaux |
| **Détails** | 1/20 – 1/1 | escaliers, menuiseries, étanchéité |
| **Plans techniques** | 1/50 | structure (coffrage, ferraillage), électricité, plomberie |

## Qu'est-ce qu'un plan de niveau ?
Un **plan de niveau** est une **coupe horizontale** du bâtiment, faite à environ **1,00 m** au-dessus du sol fini (entre 1,00 et 1,50 m selon les usages), et vue **de dessus**. Le plan de coupe traverse donc :
- les **murs** et **poteaux** → dessinés **coupés** (trait fort, hachures) ;
- les **portes** et **fenêtres** → l'ouverture apparaît comme une interruption du mur, avec son symbole.
Les éléments **plus bas** que le plan de coupe (allèges, marches, mobilier, sanitaires) sont **vus** en trait moyen ou fin. Les éléments **plus hauts** (poutres, retombées, trémies, débords de toiture) sont en **trait interrompu**.

## Les symboles
!fig:symboles|Symboles courants des plans d'architecture
- **Porte battante** : l'arc indique le **sens d'ouverture** du vantail (pour vérifier qu'il ne bute pas contre un mur ou un meuble).
- **Fenêtre** : deux ou trois traits fins dans l'épaisseur du mur (châssis et vitrage), l'appui côté extérieur.
- **Escalier** : la **flèche** part du bas et indique le sens de la **montée** ; il est coupé en biais par le plan de coupe (ligne de brisure).
- **Sanitaires** : WC, lavabo, douche, évier, baignoire, dessinés à l'échelle avec des gabarits.
- **Nord** : flèche indiquant l'orientation, indispensable pour l'ensoleillement et la ventilation.

## Méthode de lecture
1. **Cartouche** : projet, titre du plan, échelle, unité des cotes, date, indice.
2. **Orientation** : flèche du nord, accès, rue.
3. **Organisation** : entrée, séjour, cuisine, chambres, sanitaires ; circulations.
4. **Dimensions** : cotes extérieures (totales, axes, ouvertures), cotes intérieures, épaisseurs des murs.
5. **Surfaces** : chaque pièce porte son nom et sa surface (ex. « Chambre 1 — 12,60 m² »).
6. **Niveaux** : ±0,00 et cotes de niveau des terrasses, marches, seuils.
7. **Renvois** : traces des **coupes** (A–A), repères de détails, renvois aux autres plans.

> [!exemple] Lire une désignation de fenêtre
> Sur un plan au 1/50, on lit « F2 — 120 / 120 — all. 100 ». C'est la fenêtre de type F2 (voir tableau des menuiseries), de **1,20 m de large** et **1,20 m de haut**, avec une **allège** (hauteur du bas de la fenêtre au-dessus du sol fini) de **1,00 m**. Son linteau est donc à 2,20 m.

## Vérifier la cohérence d'un plan
Sur le chantier, avant d'implanter, on vérifie :
- la **somme des cotes partielles** = cote totale, sur chaque ligne ;
- la concordance entre plans (une fenêtre du plan doit apparaître sur la façade correspondante, à la même place) ;
- la concordance entre le plan d'architecte et le plan de **structure** (poteaux, poutres) ;
- les dimensions minimales usuelles : portes intérieures 0,80 à 0,90 m, porte d'entrée 0,90 à 1,00 m, couloirs ≥ 0,90 m, hauteur sous plafond ≈ 2,70 à 3,00 m en climat chaud.

> [!retenir]
> - Le plan de niveau est une coupe horizontale à environ 1 m, vue de dessus.
> - Coupé : trait fort et hachures ; vu en dessous : trait moyen ; au-dessus : trait interrompu.
> - Porte : arc = sens d'ouverture ; escalier : flèche = montée.
> - Toujours lire le cartouche, le nord, les cotes, les surfaces, les niveaux et les renvois.`,
 sujet:{titre:"Lecture du plan d'une maison F4", duree:60, niveau:"CAP / BT Dessin bâtiment", bareme:20,
  enonce:`**Contexte.** Un client vous apporte le plan au **1/100** de sa future maison à Bingerville et vous demande de le lui expliquer.

**Données lues sur le plan**
- Emprise extérieure : **13,40 × 10,40 m** ; murs extérieurs de 20 cm, cloisons de 10 cm ;
- Pièces et cotes intérieures : séjour 5,60 × 4,80 m ; cuisine 3,00 × 2,80 m ; chambre 1 : 3,60 × 3,40 m ; chambre 2 : 3,40 × 3,20 m ; chambre 3 : 3,20 × 3,00 m ; douche-WC 2,00 × 1,60 m (×2) ; couloir 6,00 × 1,00 m ; magasin 2,00 × 1,80 m ;
- Fenêtres « F1 — 120/120 — all. 100 » ; porte d'entrée « 100/220 » ;
- Un trait mixte fort aux extrémités, avec deux flèches et la lettre A, traverse le séjour ;
- Une flèche dans un cercle avec la lettre N pointe vers le haut de la feuille ; la façade sur rue est en bas de la feuille.

### Partie A — Comprendre le plan (8 points)
1. Qu'est-ce qu'un plan de niveau ? À quelle hauteur est-il « coupé » ? (2 pts)
2. Que représente le trait mixte avec la lettre A ? (2 pts)
3. Quelle est l'orientation de la façade sur rue ? Conséquence pour l'ensoleillement à Abidjan (latitude 5° N) ? (2 pts)
4. Expliquer la désignation « F1 — 120/120 — all. 100 ». (2 pts)

### Partie B — Surfaces (8 points)
5. Calculer la surface de chaque pièce et la surface habitable totale. (5 pts)
6. Calculer l'emprise au sol et la surface occupée par les murs et cloisons. (3 pts)

### Partie C — Contrôles (4 points)
7. Sur le plan au 1/100, quelle longueur mesure-t-on à la règle pour l'emprise ? (2 pts)
8. Citer deux vérifications à faire avant de commencer l'implantation. (2 pts)`,
  corrige:`### Partie A — Comprendre (8 pts)
1. Une **coupe horizontale** du bâtiment, vue de dessus, faite à **environ 1 m** au-dessus du sol fini pour couper murs et ouvertures. *(2 pts)*
2. La **trace du plan de coupe A–A** : les flèches indiquent le sens d'observation ; la coupe A–A est dessinée sur un autre plan. *(2 pts)*
3. Le nord est vers le haut, la façade sur rue est en bas : elle est orientée au **sud**. À Abidjan, le soleil de midi est presque au zénith, au sud d'octobre à février et au nord de mai à août : les façades nord et sud reçoivent peu de soleil direct si elles ont des débords ; ce sont les façades **est et ouest** qui sont les plus exposées. *(2 pts)*
4. Fenêtre de type **F1**, **1,20 m de large × 1,20 m de haut**, avec une **allège de 1,00 m** (le linteau est à 2,20 m). *(2 pts)*

### Partie B — Surfaces (8 pts)
5. *(5 pts)*
| Pièce | Calcul | Surface |
|---|---|---|
| Séjour | 5,60 × 4,80 | 26,88 m² |
| Cuisine | 3,00 × 2,80 | 8,40 m² |
| Chambre 1 | 3,60 × 3,40 | 12,24 m² |
| Chambre 2 | 3,40 × 3,20 | 10,88 m² |
| Chambre 3 | 3,20 × 3,00 | 9,60 m² |
| Douches-WC | 2 × 2,00 × 1,60 | 6,40 m² |
| Couloir | 6,00 × 1,00 | 6,00 m² |
| Magasin | 2,00 × 1,80 | 3,60 m² |
| **Total** | | **84,00 m²** |
6. Emprise : 13,40 × 10,40 = **139,36 m²** ; murs, cloisons et espaces non décrits : 139,36 − 84,00 = **55,36 m²** (la différence comprend aussi d'éventuels espaces extérieurs couverts non listés : terrasse, véranda). *(3 pts)*

### Partie C — Contrôles (4 pts)
7. 13,40 m → **13,4 cm** ; 10,40 m → **10,4 cm**. *(2 pts)*
8. Somme des cotes partielles = cote totale ; concordance plan / façades / plan de structure ; position du bâtiment sur le plan de masse (reculs, niveaux). *(2 pts)*`},
 exercices:[
  {t:"Vu, coupé ou caché ?", d:1, e:`Sur un plan de niveau coupé à 1,00 m, comment représente-t-on : (a) un poteau ; (b) une allège de fenêtre à 0,90 m ; (c) une poutre ; (d) un lavabo ; (e) le débord de la toiture ; (f) une marche d'escalier ?`, c:`(a) **coupé** : trait fort + hachures ; (b) **vue** (sous le plan de coupe) : trait moyen ; (c) **au-dessus** : trait interrompu ; (d) **vu** : trait fin ; (e) **au-dessus** : trait interrompu ; (f) **vue** (les premières marches) : trait moyen, l'escalier étant interrompu par une ligne de brisure.`},
  {t:"Désignation des ouvertures", d:1, e:`Expliquer : « P1 — 90/210 », « F3 — 60/60 — all. 160 », « PF — 240/220 ».`, c:`- P1 : porte de type P1, **0,90 m × 2,10 m** ;
- F3 : petite fenêtre (ventilation de WC par exemple) de **0,60 × 0,60 m**, allège à **1,60 m** (linteau à 2,20 m) ;
- PF : **porte-fenêtre** (baie) de **2,40 m × 2,20 m**, sans allège.`},
  {t:"Surface d'une pièce en L", d:2, e:`Un séjour en L a les cotes intérieures suivantes : grand rectangle 6,40 × 3,80 m et retour de 2,60 × 2,20 m. Calculer sa surface et son périmètre (pour les plinthes).`, c:`S = 6,40 × 3,80 + 2,60 × 2,20 = 24,32 + 5,72 = **30,04 m²**.
Périmètre d'un L : il vaut celui du rectangle englobant, soit 2 × (6,40 + (3,80 + 2,20)) = 2 × 12,40 = **24,80 m** (si le retour est accolé sur la longueur de 6,40 m). Les plinthes se déduisent en retirant les largeurs des portes.`},
  {t:"Orientation", d:2, e:`Sur un plan, la flèche du nord fait un angle de 30° vers la droite par rapport au haut de la feuille. La façade principale est en bas de la feuille. Quelle est son orientation ?`, c:`La façade du bas regarde vers le bas de la feuille, c'est-à-dire vers la direction opposée au haut de la feuille. Le nord est à 30° à droite du haut, donc le haut de la feuille est au **330°** (N 30° O) ; le bas de la feuille regarde vers 330° − 180° = **150°** : la façade est orientée **sud-sud-est** (S 30° E).`},
  {t:"Hauteur de linteau", d:1, e:`Une fenêtre de 1,40 m de haut a une allège de 0,95 m ; le plancher haut est à +3,00 et la dalle a 16 cm d'épaisseur. Quelle est la hauteur entre le haut de la fenêtre et le dessous de la dalle ?`, c:`Haut de la fenêtre : 0,95 + 1,40 = **2,35 m** ; dessous de la dalle : 3,00 − 0,16 = 2,84 m.
Hauteur disponible pour le linteau (et l'éventuel coffre de volet) : 2,84 − 2,35 = **0,49 m**.`}
 ],
 quiz:[
  {q:"Le plan de niveau est :", o:["Une vue de dessus de la toiture","Une coupe horizontale vue de dessus","Une façade","Une coupe verticale"], r:1, e:"Coupe horizontale à environ 1 m."},
  {q:"Sur un plan, l'arc tracé devant une porte indique :", o:["La hauteur","Le sens d'ouverture","Le matériau","Le seuil"], r:1, e:"L'arc montre le débattement du vantail."},
  {q:"La flèche dessinée sur un escalier indique :", o:["La descente","La montée","Le palier","La rampe"], r:1, e:"Elle part du bas vers le haut."},
  {q:"« F1 — 120/120 — all. 100 » signifie que l'allège est à :", o:["1,20 m","1,00 m","2,20 m","0,20 m"], r:1, e:"all. 100 = allège à 1,00 m."},
  {q:"Le plan qui situe le bâtiment sur la parcelle est :", o:["Le plan de situation","Le plan de masse","Le plan de niveau","La coupe"], r:1, e:"Plan de masse : bâtiment, limites, accès, réseaux."}
 ]},

{id:"dessin-7", niv:2, titre:"Coupes et sections", duree:60, contenu:`## Pourquoi couper ?
Quand un objet a des formes **intérieures** (trous, cavités, épaisseurs), les vues extérieures se remplissent de traits interrompus difficiles à lire. On imagine alors qu'on le **coupe** par un plan fictif, qu'on retire la partie située entre l'observateur et ce plan, et qu'on dessine ce qui reste.
!fig:coupe-principe|Trace du plan de coupe et coupe A–A d'un regard
- La **trace** du plan de coupe est indiquée sur une autre vue par un **trait mixte fin, fort aux extrémités**, avec des **flèches** (sens d'observation) et des **lettres** (A–A, B–B).
- La coupe porte le **titre** correspondant : « Coupe A–A ».
- Les surfaces **coupées** sont **hachurées** et entourées d'un trait fort ; ce qui est **vu au-delà** du plan de coupe est dessiné en trait continu (moyen ou fin) sans hachures.
- Les arêtes **cachées** ne sont en général plus dessinées sur une coupe.

## Coupe ou section ?
| Représentation | Ce qu'on dessine | Usage |
|---|---|---|
| **Coupe** | la partie coupée (hachurée) **+ tout ce qui est vu derrière** | coupe d'un bâtiment, d'un regard |
| **Section** | **uniquement** la surface coupée | profil d'une poutre, d'un poteau, d'un profilé métallique |
Une **section sortie** est dessinée à côté de la vue, sur le prolongement de la trace ; une **section rabattue** est dessinée directement sur la vue, en trait fin (on fait pivoter la section de 90°).

> [!exemple] Section d'une poutre
> Sur l'élévation d'une poutre, on trace un plan de coupe transversal 1–1 ; la section 1–1 montre un rectangle de 20 × 40 cm avec les aciers (points noirs) et le cadre : c'est la base du **plan de ferraillage**.

## Les différents types de coupes
| Type | Principe | Exemple |
|---|---|---|
| **Coupe simple** | un seul plan de coupe | coupe d'un caniveau |
| **Coupe brisée** (à plans parallèles) | plusieurs plans parallèles reliés par des décrochements | coupe d'une maison passant par l'escalier **puis** par une fenêtre |
| **Demi-coupe** | une moitié en vue, l'autre en coupe (pièce symétrique) | regard circulaire, poteau rond |
| **Coupe partielle** (arrachement) | on ne coupe qu'une petite zone, limitée par un trait fin ondulé | montrer un ancrage, une réservation |
Dans une coupe brisée, les décrochements du plan de coupe ne sont **pas dessinés** sur la coupe : on la dessine comme si les plans étaient alignés.

## Règles particulières
- En **dessin industriel**, on ne coupe pas longitudinalement les pièces pleines (vis, axes, clavettes, nervures) : elles sont dessinées comme vues.
- En **dessin de bâtiment**, le plan de coupe est choisi pour être **le plus informatif** : il traverse l'escalier, les ouvertures, les changements de niveau, les différents types de planchers.
- Les hachures indiquent le **matériau** (voir chapitre « Traits, écriture et hachures ») ; les éléments de faible épaisseur (dalles, cloisons sur un petit dessin) peuvent être **noircis**.

## Lire une coupe
1. Repérer la **trace** sur le plan : où passe la coupe et dans quel sens on regarde.
2. Identifier ce qui est **coupé** (hachuré) et ce qui est **vu**.
3. Lire les **niveaux** et les **hauteurs** (cotes verticales).
4. Croiser avec le plan : chaque mur coupé sur la coupe doit correspondre à un mur traversé par la trace sur le plan.

> [!retenir]
> - Trace : mixte fin, fort aux extrémités, flèches et lettres ; titre « Coupe A–A ».
> - Coupe = coupé + vu au-delà ; section = seulement la surface coupée.
> - Coupe simple, brisée, demi-coupe, coupe partielle.
> - En bâtiment, la coupe passe par l'escalier et les points intéressants.`,
 sujet:{titre:"Coupes d'un caniveau et d'un regard de visite", duree:60, niveau:"BT Dessin bâtiment / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour l'assainissement d'une cour d'école à Abengourou, on construit un **caniveau** rectangulaire couvert de dallettes et un **regard de visite**.

**Données**
- Caniveau en béton armé : largeur intérieure **0,40 m**, profondeur intérieure **0,50 m**, parois et radier de **0,12 m** ; dallettes de couverture de **0,08 m** posées dans une feuillure ; longueur **24,00 m** ;
- Regard : intérieur **0,80 × 0,80 m**, profondeur intérieure **1,20 m**, parois et radier de **0,15 m**, tampon en fonte ; le caniveau y arrive par une ouverture de 0,40 × 0,50 m ;
- Dessin au **1/10** pour le caniveau, au **1/20** pour le regard.

### Partie A — Le caniveau (8 points)
1. Quel type de représentation choisir pour montrer la forme du caniveau ? Justifier. (2 pts)
2. Décrire la coupe transversale (dimensions sur le papier au 1/10, traits, hachures). (4 pts)
3. Calculer le volume de béton des parois et du radier (sans les dallettes). (2 pts)

### Partie B — Le regard (8 points)
4. Où placer la trace de la coupe A–A sur la vue en plan pour montrer l'arrivée du caniveau ? (2 pts)
5. Décrire ce qui est coupé et ce qui est vu sur la coupe A–A. (4 pts)
6. Calculer le volume de béton du regard (ouverture déduite). (2 pts)

### Partie C — Notions (4 points)
7. Différence entre une coupe et une section ; entre une section sortie et une section rabattue. (2 pts)
8. Qu'est-ce qu'une coupe brisée ? Donner un exemple dans un bâtiment. (2 pts)`,
  corrige:`### Partie A — Caniveau (8 pts)
1. Une **section** (ou coupe) transversale : la forme est constante sur toute la longueur ; une seule section cotée suffit, complétée d'une vue en plan pour la longueur. *(2 pts)*
2. Au 1/10 : forme en **U** de largeur extérieure (0,40 + 2 × 0,12) = 0,64 m → **6,4 cm**, hauteur extérieure (0,50 + 0,12) = 0,62 m → **6,2 cm** ; parois et radier de **1,2 cm** ; parties coupées en **trait fort** avec hachures **béton armé** (45° serrées) ; dallette de 0,8 cm dans la feuillure, coupée elle aussi ; terre autour représentée par sa hachure ; cotes en cm. *(4 pts)*
3. Section de béton = 0,64 × 0,62 − 0,40 × 0,50 = 0,3968 − 0,2000 = **0,1968 m²** ; V = 0,1968 × 24 = **4,72 m³**. *(2 pts)*

### Partie B — Regard (8 pts)
4. La trace A–A passe par l'**axe du caniveau**, perpendiculairement à la paroi d'arrivée, flèches orientées pour voir l'ouverture de face ou de profil (coupe longitudinale du caniveau). *(2 pts)*
5. **Coupés** : deux parois du regard (0,15 m), le radier, le caniveau (radier et dallette) dans l'axe, le tampon ; **vus** au-delà : la paroi du fond du regard (sans hachures), avec l'éventuelle échelle ou les échelons ; le terrain naturel est représenté de part et d'autre. *(4 pts)*
6. Extérieur : 1,10 × 1,10 × (1,20 + 0,15) = 1,6335 m³ ; vide : 0,80 × 0,80 × 1,20 = 0,768 m³ ; ouverture : 0,40 × 0,50 × 0,15 = 0,030 m³.
V = 1,6335 − 0,768 − 0,030 = **0,836 m³**. *(2 pts)*

### Partie C — Notions (4 pts)
7. Coupe : partie coupée + ce qui est vu derrière ; section : uniquement la partie coupée. Section **sortie** : dessinée à côté de la vue ; section **rabattue** : dessinée sur la vue, en trait fin. *(2 pts)*
8. Coupe obtenue par **plusieurs plans parallèles** reliés par des décrochements ; ex. une coupe de maison qui passe par l'escalier puis par la fenêtre du séjour. *(2 pts)*`},
 exercices:[
  {t:"Coupe ou section ?", d:1, e:`Pour chacun des cas suivants, faut-il une coupe ou une section ? (a) montrer le profil d'un fer IPE ; (b) montrer l'intérieur d'une fosse septique avec ses chicanes ; (c) montrer la forme d'une poutre en T ; (d) montrer les hauteurs des pièces d'une maison.`, c:`(a) **section** (seul le profil compte) ; (b) **coupe** (les chicanes vues derrière le plan de coupe sont utiles) ; (c) **section** ; (d) **coupe** de bâtiment.`},
  {t:"Section d'un agglo creux", d:2, e:`Un agglo creux de 15 (50 × 20 × 15 cm) a deux alvéoles de 19 × 9 cm sur toute la hauteur. Dessiner (décrire) la section horizontale au 1/5 et calculer le pourcentage de vide.`, c:`Au 1/5 : rectangle de **10 × 3 cm** avec deux rectangles intérieurs de **3,8 × 1,8 cm** (non hachurés) ; parties pleines hachurées.
Vide : 2 × 19 × 9 = 342 cm² sur 50 × 15 = 750 cm² → **45,6 %** de vide.`},
  {t:"Section d'un profilé", d:2, e:`Un IPE 200 a les dimensions : hauteur 200 mm, largeur des ailes 100 mm, épaisseur des ailes 8,5 mm, épaisseur de l'âme 5,6 mm. Calculer (sans les congés) l'aire de la section et la masse au mètre (acier 7 850 kg/m³). Comparer au catalogue (22,4 kg/m).`, c:`Ailes : 2 × 100 × 8,5 = 1 700 mm² ; âme : (200 − 2 × 8,5) × 5,6 = 183 × 5,6 = 1 024,8 mm² ; A ≈ **2 725 mm² = 27,25 cm²**.
Masse : 27,25 × 10⁻⁴ m² × 7 850 = **21,4 kg/m** ; le catalogue donne 22,4 kg/m car il compte les **congés** de raccordement (A = 28,5 cm²).`},
  {t:"Lire une coupe brisée", d:2, e:`Sur un plan, la trace B–B part de la façade sud, traverse le séjour, se décale de 2,00 m vers l'est dans le couloir, puis traverse la chambre jusqu'à la façade nord. Comment se présente la coupe B–B ? Le décrochement apparaît-il ?`, c:`La coupe B–B est dessinée **comme si les deux plans étaient alignés** : de gauche à droite (ou inversement selon les flèches), façade sud coupée, séjour, mur du couloir, chambre, façade nord coupée. Le décrochement de 2,00 m **n'est pas représenté** sur la coupe (il n'est visible que sur la trace en plan).`},
  {t:"Volume d'une semelle filante", d:2, e:`La section d'une semelle filante en béton armé est un rectangle de 0,60 × 0,25 m sur un béton de propreté de 0,05 m (largeur 0,70 m). La longueur totale des semelles est de 48,50 m. Calculer les volumes de béton armé et de béton de propreté.`, c:`Béton armé : 0,60 × 0,25 × 48,50 = **7,28 m³** ; béton de propreté : 0,70 × 0,05 × 48,50 = **1,70 m³**.`}
 ],
 quiz:[
  {q:"La trace d'un plan de coupe se dessine en :", o:["Trait interrompu","Trait mixte fin, fort aux extrémités","Trait fort continu","Trait ondulé"], r:1, e:"Avec flèches et lettres."},
  {q:"Une section montre :", o:["La partie coupée et ce qui est derrière","Uniquement la partie coupée","Uniquement les parties cachées","La vue de dessus"], r:1, e:"La coupe ajoute ce qui est vu au-delà."},
  {q:"Les flèches de la trace de coupe indiquent :", o:["Le nord","Le sens d'observation","La pente","La hauteur de coupe"], r:1, e:"On regarde dans le sens des flèches."},
  {q:"Sur une coupe, les parties coupées sont :", o:["En trait interrompu","Hachurées et en trait fort","En trait mixte","Non dessinées"], r:1, e:"Hachures + contour fort."},
  {q:"Une coupe brisée est obtenue par :", o:["Un plan incliné","Plusieurs plans parallèles","Un plan horizontal","Une perspective"], r:1, e:"Plans parallèles reliés par des décrochements."}
 ]},

{id:"dessin-8", niv:2, titre:"Perspectives cavalière et isométrique", duree:60, contenu:`## À quoi sert une perspective ?
Les vues orthogonales décrivent exactement un objet, mais il faut de l'entraînement pour les « lire ». Une **perspective** montre l'objet en volume, d'un seul coup d'œil : elle sert à **expliquer** (détail de ferraillage, assemblage de charpente, notice de montage), à **vérifier** une forme, ou à **présenter** un projet au client.
Les perspectives **axonométriques** (cavalière, isométrique) conservent le **parallélisme** : des arêtes parallèles dans la réalité restent parallèles sur le dessin. On peut y **mesurer** des longueurs le long des axes.
!fig:perspectives|Le même cube en cavalière et en isométrique

## La perspective cavalière
- La **face avant** (frontale) est dessinée en **vraie grandeur** : c'est sa vue de face.
- Les arêtes perpendiculaires à cette face (les **fuyantes**) sont tracées selon un angle α, en général **45°** (parfois 30° ou 60°).
- Les longueurs des fuyantes sont multipliées par un **coefficient de réduction** k, en général **0,5** (parfois 0,7).
$$ longueur dessinée d'une fuyante = k × longueur réelle × échelle
Avantage : très rapide, les cercles de la face avant restent des **cercles**. Inconvénient : l'aspect est déformé si k est mal choisi.

> [!exemple] Bloc de fondation en cavalière
> Semelle de 1,20 × 0,80 × 0,30 m au 1/20, face avant 1,20 × 0,30 m : rectangle de 6 × 1,5 cm. Fuyantes (0,80 m) à 45° avec k = 0,5 : 0,80 × 0,5 / 20 = **2 cm** à 45°.

## La perspective isométrique
- Les trois axes (largeur, profondeur, hauteur) font entre eux des angles de **120°** ; les axes horizontaux sont tracés à **30°** de l'horizontale (avec l'équerre 30°/60°), la hauteur reste verticale.
- En projection exacte, les longueurs sur les axes sont réduites de 0,816 ; en pratique, on dessine en **vraie grandeur sur les axes** (k = 1) : c'est le **dessin isométrique**, un peu plus grand que la réalité mais beaucoup plus simple.
- Seules les longueurs **parallèles aux axes** sont mesurables ; une diagonale ou un arc ne l'est pas : on les construit par leurs points d'extrémité.
Avantage : les trois faces visibles sont traitées de la même façon, l'aspect est naturel. Les cercles deviennent des **ellipses** (en dessin isométrique : grand axe ≈ 1,22 D, petit axe ≈ 0,71 D), tracées par la **méthode des quatre centres** (ovale) ou au gabarit.

## La méthode de la boîte
Pour dessiner n'importe quel objet :
1. Dessiner la **boîte englobante** (parallélépipède aux dimensions hors tout) en traits de construction.
2. Reporter sur les arêtes de la boîte les dimensions des détails (toujours **parallèlement aux axes**).
3. Joindre les points obtenus, enlever les volumes à creuser.
4. Repasser les arêtes **vues** en trait fort ; en général, on ne dessine pas les arêtes cachées.

> [!exemple] Perspective d'une marche
> Pour une marche de 1,00 × 0,28 × 0,17 m : boîte de 1,00 × 0,28 × 0,17, nez de marche sur l'arête avant supérieure ; pour un escalier de 5 marches, boîte de 1,00 × (5 × 0,28) × (5 × 0,17) puis découpage en « escalier » sur la face latérale, que l'on prolonge selon l'axe de l'emmarchement.

## Autres perspectives
- **Perspective dimétrique** : deux axes avec le même coefficient, le troisième différent ; aspect plus naturel que l'isométrique.
- **Perspective conique** (vue « photographique », avec points de fuite) : étudiée au niveau avancé, pour les vues de présentation.
- **Vue éclatée** : les pièces d'un assemblage écartées le long d'axes, pour montrer l'ordre de montage.

> [!retenir]
> - Cavalière : face avant en vraie grandeur, fuyantes à 45°, k = 0,5.
> - Isométrique : axes à 120° (30° de l'horizontale), vraies longueurs sur les axes.
> - On ne mesure que parallèlement aux axes ; méthode de la boîte englobante.
> - Cercles : vrais cercles en face avant de la cavalière, ellipses en isométrique.`,
 sujet:{titre:"Perspectives d'un bloc sanitaire et d'un détail de ferraillage", duree:60, niveau:"BT Dessin bâtiment / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une ONG fait construire des blocs sanitaires dans des villages autour de Man. Pour la notice destinée aux maçons, vous devez réaliser des perspectives simples.

**Données**
- Bloc sanitaire : **4,00 m** de long, **2,40 m** de profondeur, **2,80 m** de haut, toiture monopente (on l'ignore ici) ; deux portes de **0,80 × 2,10 m** en façade ;
- Feuille A4 horizontale (zone utile 26,7 × 19 cm) ;
- Détail : un poteau de **20 × 20 cm** de section, 3,00 m de haut, avec 4 HA12 et des cadres tous les 15 cm.

### Partie A — Cavalière (8 points)
1. On représente le bloc en cavalière, façade en face avant, au 1/50, α = 45°, k = 0,5. Calculer les dimensions dessinées de la façade et la longueur des fuyantes. (4 pts)
2. Le dessin tient-il sur la feuille ? Calculer l'encombrement. (2 pts)
3. Comment dessine-t-on les portes ? Sont-elles déformées ? (2 pts)

### Partie B — Isométrique (8 points)
4. On dessine le même bloc en isométrique (k = 1) au 1/50. Calculer la longueur dessinée de chaque arête et l'encombrement horizontal et vertical du dessin. (5 pts)
5. Quelle perspective donne l'aspect le plus naturel ? Laquelle est la plus rapide ? (3 pts)

### Partie C — Le poteau (4 points)
6. Quelle perspective et quelle échelle proposer pour un détail de 1,00 m de hauteur du poteau, montrant les aciers et les cadres ? Combien de cadres dessine-t-on ? (4 pts)`,
  corrige:`### Partie A — Cavalière (8 pts)
1. Façade : 4,00 m → **8 cm** ; 2,80 m → **5,6 cm** (vraie grandeur au 1/50). Fuyantes : 2,40 × 0,5 / 50 = **2,4 cm** à 45°. *(4 pts)*
2. Décalage des fuyantes : 2,4 × cos 45° = **1,70 cm** horizontalement et 1,70 cm verticalement. Encombrement : (8 + 1,7) × (5,6 + 1,7) = **9,7 × 7,3 cm** : le dessin tient largement ; on peut même passer au 1/20 (24,2 × 18,2 cm). *(2 pts)*
3. Les portes sont sur la **face avant** : elles sont en **vraie grandeur** (0,80 × 2,10 m → 1,6 × 4,2 cm au 1/50), sans déformation. *(2 pts)*

### Partie B — Isométrique (8 pts)
4. Arêtes : 4,00 m → **8 cm** (à 30°), 2,40 m → **4,8 cm** (à 30° dans l'autre sens), 2,80 m → **5,6 cm** (verticale). *(3 pts)*
Encombrement horizontal : (8 + 4,8) × cos 30° = 12,8 × 0,866 = **11,1 cm** ; vertical : 5,6 + (8 + 4,8) × sin 30° = 5,6 + 6,4 = **12,0 cm**. *(2 pts)*
5. L'**isométrique** donne l'aspect le plus naturel (les trois faces sont traitées de la même façon) ; la **cavalière** est la plus rapide (face avant en vraie grandeur). *(3 pts)*

### Partie C — Poteau (4 pts)
6. Une **perspective cavalière** (ou isométrique) au **1/10** : 1,00 m → 10 cm de haut, section 2 × 2 cm (fuyantes 1 cm avec k = 0,5). Sur 1,00 m avec un espacement de 15 cm : 100 / 15 = 6,7 → **7 cadres** (8 si l'on en place un à chaque extrémité). On montre les 4 barres aux angles des cadres, et l'enrobage. *(4 pts)*`},
 exercices:[
  {t:"Longueurs en cavalière", d:1, e:`Un cube de 3,00 m d'arête est dessiné au 1/100 en cavalière (α = 45°, k = 0,5). Quelles longueurs dessine-t-on pour les arêtes frontales et pour les fuyantes ?`, c:`Arêtes frontales : 300 / 100 = **3 cm** ; fuyantes : 3 × 0,5 = **1,5 cm** à 45°.`},
  {t:"Encombrement d'une isométrique", d:2, e:`Un parallélépipède de 6 × 4 × 3 m est dessiné en isométrique (k = 1) au 1/100. Calculer la largeur et la hauteur totales du dessin.`, c:`Arêtes : 6 cm, 4 cm (à 30°) et 3 cm (vertical).
Largeur : (6 + 4) × cos 30° = 10 × 0,866 = **8,66 cm** ; hauteur : 3 + (6 + 4) × sin 30° = 3 + 5 = **8 cm**.`},
  {t:"Ellipse isométrique", d:2, e:`Une colonne ronde de diamètre 40 cm est dessinée en isométrique (k = 1) au 1/20. Quelles sont les dimensions de l'ellipse de la face supérieure ?`, c:`D dessiné = 40 / 20 = 2 cm. Grand axe ≈ 1,22 × 2 = **2,44 cm** (horizontal), petit axe ≈ 0,71 × 2 = **1,42 cm** (vertical).`},
  {t:"Longueur non mesurable", d:3, e:`Dans un dessin isométrique (k = 1), on mesure la diagonale de la face supérieure d'un cube de 10 cm. Trouve-t-on 14,14 cm ? Calculer la longueur dessinée des deux diagonales.`, c:`Non : seules les longueurs parallèles aux axes sont en vraie grandeur. Sur la face supérieure, les deux arêtes font ±30° avec l'horizontale ; leurs vecteurs sont (8,66 ; 5) et (−8,66 ; 5).
Diagonale 1 : somme (0 ; 10) → **10 cm** (verticale) ; diagonale 2 : différence (17,32 ; 0) → **17,32 cm** (horizontale). La vraie diagonale (14,14 cm) n'apparaît pas.`},
  {t:"Choisir la perspective", d:1, e:`Quelle perspective choisir pour : (a) un détail de ferraillage d'une semelle ; (b) la présentation d'une villa à un client ; (c) une notice de montage d'une étagère avec des trous ronds sur la face avant ?`, c:`(a) **isométrique** ou cavalière (lisible, mesurable) ; (b) **perspective conique** (aspect réaliste) ou isométrique en avant-projet ; (c) **cavalière** avec la face trouée en face avant : les trous restent des **cercles**.`}
 ],
 quiz:[
  {q:"En cavalière, la face avant est dessinée :", o:["Réduite de moitié","En vraie grandeur","Inclinée à 45°","En ellipse"], r:1, e:"Seules les fuyantes sont réduites."},
  {q:"Le coefficient de réduction courant des fuyantes en cavalière est :", o:["1","0,5","0,816","2"], r:1, e:"k = 0,5 avec un angle de 45°."},
  {q:"En isométrique, les axes font entre eux :", o:["90°","120°","45°","60°"], r:1, e:"Trois angles de 120°."},
  {q:"En isométrique, on peut mesurer directement :", o:["Toutes les longueurs","Les longueurs parallèles aux axes","Les diagonales","Les rayons des cercles"], r:1, e:"Seulement le long des axes."},
  {q:"Dans une perspective axonométrique, des arêtes parallèles :", o:["Convergent vers un point de fuite","Restent parallèles","Deviennent courbes","Disparaissent"], r:1, e:"Le parallélisme est conservé."}
 ]},

{id:"dessin-9", niv:2, titre:"Dessiner un plan de niveau", duree:70, contenu:`## Les données de départ
Pour dessiner un plan de niveau, il faut : le **programme** (liste des pièces et surfaces souhaitées), l'**esquisse** validée par le client, le **système constructif** (murs porteurs, ossature poteaux-poutres) et les **épaisseurs** :
| Élément | Épaisseur usuelle (brute + enduits) |
|---|---|
| Mur extérieur en agglos creux de 15 | 15 + 2 × 1,5 ≈ **18 cm** (souvent dessiné 20) |
| Mur extérieur en agglos de 20 | 20 + 2 × 1,5 ≈ **23 cm** |
| Cloison en agglos de 10 | 10 + 2 × 1,5 ≈ **13 cm** (dessinée 10 à 15) |
| Poteau béton armé | 20 × 20, 20 × 25, 25 × 25 cm |
| Mur mitoyen ou de clôture | 15 à 20 cm |
Dimensions courantes des ouvertures :
| Ouverture | Largeur × hauteur courantes |
|---|---|
| Porte d'entrée | 0,90 à 1,20 × 2,10 à 2,20 m |
| Porte de chambre, cuisine | 0,80 à 0,90 × 2,10 m |
| Porte de WC, douche | 0,70 × 2,10 m |
| Fenêtre de séjour, chambre | 1,20 × 1,20 m à 1,60 × 1,40 m, allège 0,90 à 1,00 m |
| Fenêtre de WC, douche | 0,60 × 0,60 m, allège 1,50 à 1,60 m |
| Porte-fenêtre, baie | 1,40 à 2,40 × 2,10 à 2,20 m |
En climat chaud et humide, on privilégie la **ventilation traversante** (ouvertures sur deux façades opposées), les débords de toiture et les protections solaires.

## Les étapes du dessin
1. **Mise en page** : choisir l'échelle (1/50 ou 1/100) et la position du dessin, en réservant la place des cotes (3 lignes) et du cartouche.
2. **Axes** : tracer les axes des murs porteurs et des poteaux (trait mixte fin), puis les **nus** (faces) des murs en traits de construction.
3. **Murs et cloisons** : tracer les épaisseurs ; marquer les **poteaux**.
4. **Ouvertures** : placer portes et fenêtres par leurs cotes, interrompre les murs, dessiner les **symboles** (vantaux et arcs d'ouverture, châssis, appuis).
5. **Escaliers**, gaines, conduits ; **sanitaires** et équipements de cuisine.
6. **Mise au net** : traits forts pour le coupé, moyens pour le vu, hachures ou aplats des murs.
7. **Cotation** : trois lignes de cotes extérieures sur chaque façade, cotes intérieures des pièces, épaisseurs.
8. **Annotations** : nom et **surface** de chaque pièce, désignation des menuiseries (P1, F2…), **cotes de niveau**, traces des **coupes**, flèche du **nord**, titre et échelle.
!fig:plan-type|Plan de niveau coté : trois lignes de cotes, désignation des pièces et surfaces

## La cotation d'un plan de niveau
- **1re ligne** (la plus proche du mur) : les **ouvertures** et **trumeaux** de la façade, d'un angle à l'autre.
- **2e ligne** : les **axes** ou les **décrochements** (murs de refend, cloisons, saillies).
- **3e ligne** : la **cote totale** hors tout.
- **Cotes intérieures** : dimensions de chaque pièce (entre faces finies), épaisseurs des cloisons ; elles peuvent être écrites sous le nom de la pièce (« 4,10 × 3,80 »).
- Les cotes de niveau (±0,00, −0,15 pour une douche, −0,02 pour une terrasse) sont placées dans les pièces concernées.

## Surfaces et tableau des surfaces
Chaque pièce porte sa **surface** ; on récapitule dans un **tableau des surfaces** :
| Notion | Définition usuelle |
|---|---|
| **Surface d'une pièce** | surface au sol entre les faces intérieures des murs et cloisons |
| **Surface habitable** | somme des surfaces des pièces d'habitation et de service fermées (séjour, chambres, cuisine, salles d'eau, couloirs), **sans** les murs, cloisons, gaines, escaliers, ni les terrasses, garages, vérandas ouvertes |
| **Surface bâtie** (emprise) | surface au sol occupée par le bâtiment, murs compris |
| **Surface de plancher** | somme des surfaces de tous les niveaux, mesurées au nu intérieur des murs de façade (définition variable selon les règlements) |
Le **rapport surface habitable / surface bâtie** (souvent 0,75 à 0,85 pour une maison) mesure l'efficacité du plan : plus il est élevé, moins on « perd » de surface dans les murs et les circulations.

> [!exemple] Surfaces du plan ci-dessus
> Séjour 5,40 × 6,60 = 35,64 m² ; chambre 4,10 × 3,80 = 15,58 m² ; cuisine 4,10 × 2,70 = 11,07 m². Surface habitable : **62,29 m²**. Emprise : 10,00 × 7,00 = **70,00 m²**. Rapport : 62,29 / 70 = **0,89** (plan très compact, sans couloir).

> [!retenir]
> - Axes → murs → ouvertures → équipements → mise au net → cotes → annotations.
> - Trois lignes de cotes extérieures : ouvertures, axes, totale ; cotes intérieures des pièces.
> - Chaque pièce : nom + surface ; tableau des surfaces ; nord ; traces des coupes ; niveaux.
> - Surface habitable < emprise ; rapport usuel 0,75 à 0,85.`,
 sujet:{titre:"Dessin du plan d'une maison de deux chambres", duree:90, niveau:"BT Dessin bâtiment / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un enseignant de Soubré fait construire une maison simple. Vous devez préparer le dessin du plan du rez-de-chaussée au **1/50** et vérifier les surfaces.

**Données**
- Emprise rectangulaire hors tout : **11,40 m × 8,20 m** ; murs extérieurs de **20 cm**, cloisons de **10 cm** ;
- Organisation (cotes intérieures) : un séjour-salle à manger occupant toute la profondeur à gauche, de **4,60 m** de large ; à droite, côté façade sud, **deux chambres égales** de **3,40 m** de profondeur séparées par une cloison ; derrière elles, un **couloir** de **1,10 m** ; au fond, une **douche-WC** de **1,80 m** de large et la **cuisine** ;
- Façade principale (sud) : porte d'entrée 1,00 × 2,20 m dans le séjour, fenêtre F1 1,40 × 1,20 m du séjour, fenêtres F2 1,20 × 1,20 m des chambres ;
- Feuille A2 (zone utile 56,4 × 40 cm).

### Partie A — Mise en page (4 points)
1. Calculer l'encombrement du plan au 1/50 avec 4 cm de cotes de chaque côté. Le plan tient-il sur l'A2 avec un cartouche de 18 × 6 cm ? (4 pts)

### Partie B — Organisation et cotes (10 points)
2. Calculer la largeur intérieure disponible à droite du séjour, puis la largeur de chaque chambre. (3 pts)
3. Calculer la profondeur restante au fond pour la douche-WC et la cuisine, puis la largeur de la cuisine. (4 pts)
4. Écrire la 2e ligne de cotes de la façade sud (murs et cloisons) et vérifier la cote totale. (3 pts)

### Partie C — Surfaces (6 points)
5. Calculer les surfaces de toutes les pièces, la surface habitable et le rapport surface habitable / emprise. (6 pts)`,
  corrige:`### Partie A — Mise en page (4 pts)
Au 1/50 : 11,40 → 22,8 cm et 8,20 → 16,4 cm ; avec les cotes : **30,8 × 24,4 cm**. Sur l'A2 (56,4 × 40), il reste 56,4 − 30,8 = 25,6 cm à côté pour le cartouche (18 cm) et la légende : **le plan tient** largement (on peut même ajouter la façade sud au 1/50). *(4 pts)*

### Partie B — Organisation (10 pts)
2. Largeur intérieure totale : 11,40 − 2 × 0,20 = 11,00 m ; à droite du séjour : 11,00 − 4,60 − 0,10 (cloison) = **6,30 m** ; chaque chambre : (6,30 − 0,10) / 2 = **3,10 m**. *(3 pts)*
3. Profondeur intérieure : 8,20 − 0,40 = 7,80 m ; au fond : 7,80 − 3,40 − 0,10 − 1,10 − 0,10 = **3,10 m**. Cuisine : 6,30 − 1,80 − 0,10 = **4,40 m** de large. *(4 pts)*
4. **0,20 | 4,60 | 0,10 | 3,10 | 0,10 | 3,10 | 0,20** = 11,40 m ✓. *(3 pts)*

### Partie C — Surfaces (6 pts)
| Pièce | Calcul | Surface |
|---|---|---|
| Séjour | 4,60 × 7,80 | 35,88 m² |
| Chambre 1 | 3,10 × 3,40 | 10,54 m² |
| Chambre 2 | 3,10 × 3,40 | 10,54 m² |
| Couloir | 6,30 × 1,10 | 6,93 m² |
| Douche-WC | 1,80 × 3,10 | 5,58 m² |
| Cuisine | 4,40 × 3,10 | 13,64 m² |
Surface habitable : **83,11 m²** ; emprise : 11,40 × 8,20 = **93,48 m²** ; rapport : 83,11 / 93,48 = **0,89**. *(6 pts)*`},
 exercices:[
  {t:"Ordre des étapes", d:1, e:`Remettre dans l'ordre : hachurer les murs — tracer les axes — coter — placer les ouvertures — tracer les épaisseurs des murs — écrire les surfaces — dessiner les sanitaires.`, c:`1. Tracer les **axes** ; 2. tracer les **épaisseurs** des murs ; 3. placer les **ouvertures** ; 4. dessiner les **sanitaires** ; 5. **hachurer** (mise au net) ; 6. **coter** ; 7. écrire les **surfaces**.`},
  {t:"Trois lignes de cotes", d:2, e:`Une façade de 9,60 m (murs de 0,20) comporte de gauche à droite : trumeau 0,80, fenêtre 1,20, trumeau 1,40, porte 0,90, trumeau, fenêtre 1,20, trumeau 0,80. Un mur de refend a son axe à 5,05 m du bord gauche. Écrire les trois lignes de cotes.`, c:`Trumeau manquant : 9,60 − (0,80 + 1,20 + 1,40 + 0,90 + 1,20 + 0,80) = 9,60 − 6,30 = **3,30 m**.
- 1re ligne : **0,80 | 1,20 | 1,40 | 0,90 | 3,30 | 1,20 | 0,80** ;
- 2e ligne : **5,05 | 4,55** (axe du refend) ;
- 3e ligne : **9,60**.`},
  {t:"Surface habitable", d:2, e:`Une maison a une emprise de 12,00 × 9,00 m. Ses pièces : séjour 32,40 m², 3 chambres de 11,20 m², cuisine 9,80 m², 2 salles d'eau de 4,50 m², couloir 7,60 m², terrasse couverte 14,00 m². Calculer la surface habitable et le rapport surface habitable / emprise.`, c:`Surface habitable (sans la terrasse) : 32,40 + 3 × 11,20 + 9,80 + 2 × 4,50 + 7,60 = 32,40 + 33,60 + 9,80 + 9,00 + 7,60 = **92,40 m²**.
Emprise : 108 m² (si la terrasse est hors emprise du bâtiment clos). Rapport : 92,40 / 108 = **0,86**.`},
  {t:"Débattement d'une porte", d:2, e:`Une porte de chambre de 0,90 m s'ouvre vers l'intérieur.
1. Quelle surface de plancher son débattement occupe-t-il ?
2. Un lit est placé parallèlement au mur de la porte, à 0,70 m de ce mur, devant la porte. La porte peut-elle s'ouvrir complètement ?
3. Que proposer ?`, c:`1. Quart de cercle de rayon 0,90 m : π × 0,90² / 4 = **0,64 m²**.
2. Ouverte à 90°, la porte avance de **0,90 m** dans la pièce : le lit à 0,70 m l'arrête vers arcsin(0,70 / 0,90) ≈ **51°** : **non**.
3. Inverser le sens d'ouverture (vers le couloir), déplacer la porte, ou éloigner le lit à plus de 0,90 m en gardant un passage de 0,60 à 0,70 m autour.`},
  {t:"Ventilation d'une chambre", d:3, e:`Une chambre de 3,40 × 3,20 m a une fenêtre de 1,20 × 1,20 m. On souhaite une surface vitrée d'au moins 1/6 de la surface de la pièce. Est-ce suffisant ? Quelle fenêtre proposer ? Pourquoi ajouter une seconde ouverture sur une autre façade ?`, c:`Surface de la pièce : 10,88 m² ; 1/6 → **1,81 m²** ; fenêtre 1,20 × 1,20 = **1,44 m²** : **insuffisant**.
On peut proposer **1,40 × 1,40 = 1,96 m²** ou 1,60 × 1,20 = 1,92 m². Une seconde ouverture sur une autre façade (même petite, ou une imposte) crée une **ventilation traversante**, indispensable pour le confort en climat chaud et humide.`}
 ],
 quiz:[
  {q:"La 1re ligne de cotes extérieures (la plus proche du mur) donne :", o:["La cote totale","Les ouvertures et trumeaux","Les axes","Les niveaux"], r:1, e:"Puis axes, puis cote totale."},
  {q:"La surface habitable ne comprend pas :", o:["Les chambres","Le séjour","Les murs et les terrasses","La cuisine"], r:2, e:"Ni murs, ni cloisons, ni terrasses."},
  {q:"Une porte de douche mesure couramment :", o:["0,70 m","0,90 m","1,20 m","0,50 m"], r:0, e:"0,70 × 2,10 m."},
  {q:"Sur un plan de niveau, chaque pièce porte :", o:["Son prix","Son nom et sa surface","Son volume","Son orientation"], r:1, e:"Nom et surface (et parfois les cotes intérieures)."},
  {q:"On commence le dessin d'un plan de niveau par :", o:["Les cotes","Les axes","Les hachures","Le mobilier"], r:1, e:"Axes, puis murs, puis ouvertures…"}
 ]},

{id:"dessin-10", niv:2, titre:"Façades (élévations) et cotes de niveau", duree:55, contenu:`## Qu'est-ce qu'une façade ?
Une **façade** (ou élévation) est la **vue** du bâtiment depuis l'extérieur, perpendiculairement à l'un de ses murs. Elle n'est pas coupée : tout y est **vu**. On dessine en général les **quatre façades**, nommées selon leur **orientation** (façade nord, sud, est, ouest) ou leur position (façade principale, sur rue, arrière, latérale gauche).
La façade montre ce que le plan ne montre pas : les **hauteurs**, l'aspect des **ouvertures** et des **menuiseries**, la **toiture**, les **matériaux** et les **finitions** (enduit, peinture, parement de pierre, claustras).

## Construire une façade à partir du plan
1. Placer le **plan** au-dessus (ou à côté) de la feuille, la façade à dessiner tournée vers le bas.
2. Abaisser des **lignes de rappel** verticales depuis chaque angle, chaque ouverture, chaque décrochement.
3. Tracer les **lignes de niveau** horizontales : terrain naturel, sol fini, allèges, linteaux, planchers, égout et faîtage de la toiture, acrotère.
4. Les intersections donnent les contours ; on dessine ensuite les menuiseries, les appuis, les garde-corps, la toiture.
5. Mise au net : contour du bâtiment et ligne de terre en trait **fort** ; ouvertures et détails en trait **moyen** ; matériaux et texture en trait **fin**.

## Les hauteurs courantes
| Élément | Hauteur usuelle |
|---|---|
| Soubassement (sol fini au-dessus du terrain) | 0,15 à 0,60 m (protection contre les eaux de ruissellement) |
| Allège de fenêtre | 0,90 à 1,10 m ; 1,50 à 1,60 m pour les salles d'eau |
| Dessous de linteau | 2,10 à 2,20 m |
| Hauteur sous plafond (HSP) | 2,70 à 3,00 m en climat chaud |
| Épaisseur de plancher | 16 à 25 cm (hourdis 16 + 4, dalle pleine 15 à 20) |
| Hauteur d'étage | HSP + épaisseur du plancher, souvent **3,00 à 3,20 m** |
| Acrotère (au-dessus de la terrasse) | 0,40 à 1,00 m (garde-corps si terrasse accessible : 1,00 m) |
| Garde-corps de balcon | 1,00 m |

## Les cotes de niveau
Les hauteurs se donnent par des **cotes de niveau** rapportées à un **niveau de référence**, le **±0,00**, qui est en général le **sol fini du rez-de-chaussée**. Les niveaux sont en **mètres**, avec le signe + au-dessus et − au-dessous.
!fig:niveaux|Cotes de niveau sur une coupe ou une façade
- Sur une façade ou une coupe, le symbole est un **triangle** dont la pointe touche la ligne de niveau, avec la valeur à côté.
- Sur un plan, la cote de niveau est écrite dans la pièce, souvent encadrée ou précédée d'une croix.
- Le ±0,00 est rattaché à une **altitude** (par exemple ±0,00 = 32,75 m) donnée par le géomètre à partir d'un repère de nivellement : cela permet de vérifier l'écoulement des eaux vers la rue et les réseaux.
On distingue **niveau fini** (dessus du carrelage) et **niveau brut** (dessus de la dalle) : la différence est l'épaisseur du revêtement et de sa chape (5 à 8 cm).

> [!exemple] Calculer des niveaux
> ±0,00 = sol fini du RDC ; revêtement + chape = 6 cm ; dalle de l'étage 20 cm ; HSP du RDC 2,80 m.
> Dessous de la dalle d'étage : **+2,80** ; dessus brut de la dalle : 2,80 + 0,20 = **+3,00** ; sol fini de l'étage : 3,00 + 0,06 = **+3,06** ; hauteur d'étage : **3,06 m**.
> Le terrain naturel est à −0,40 : il faut **3 marches** de 13,3 cm ou 2 marches de 20 cm (trop hautes) pour accéder au séjour : on prend 3 marches.

## Le rendu des façades
- **Ombres** : la lumière est supposée venir à 45° depuis le haut à gauche ; les débords, auvents, balcons projettent une ombre de largeur égale à leur saillie.
- **Matériaux** : enduit (pointillé léger), parement de pierre (appareillage), bardage (lignes), tuiles ou tôles (lignes de pente).
- **Végétation et personnages** donnent l'échelle (un personnage ≈ 1,70 m).

> [!retenir]
> - Façade = vue extérieure, nommée par son orientation ; construite par lignes de rappel depuis le plan.
> - ±0,00 = sol fini du RDC, rattaché à une altitude ; niveaux en m avec signe.
> - Hauteur d'étage = HSP + plancher (+ revêtement), souvent 3,00 à 3,20 m.
> - Triangle de niveau en façade et en coupe ; niveau fini ≠ niveau brut.`,
 sujet:{titre:"Façade principale et niveaux d'une villa R+1", duree:75, niveau:"BT Dessin bâtiment / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous dessinez la façade principale d'une villa R+1 à Cocody Angré et vous établissez le tableau des niveaux.

**Données**
- ±0,00 = sol fini du RDC = altitude **18,45 m** ; terrain naturel devant la façade : altitude **17,95 m** ;
- HSP : **2,80 m** au RDC et à l'étage ; planchers en hourdis **16 + 4** ; revêtements (carrelage + chape) **6 cm** ;
- Toiture terrasse : dalle de 20 cm, forme de pente + étanchéité **8 cm** en moyenne, acrotère de **0,60 m** au-dessus de l'étanchéité ;
- Fenêtres : 1,40 × 1,40 m, allège 1,00 m ; porte d'entrée 1,20 × 2,20 m ;
- Façade au **1/50**.

### Partie A — Niveaux (10 points)
1. Calculer les niveaux suivants : dessous du plancher haut du RDC, dessus brut, sol fini de l'étage, dessous de la dalle de toiture, dessus brut, dessus étanchéité, dessus acrotère. (6 pts)
2. Calculer la hauteur totale du bâtiment au-dessus du terrain naturel et l'altitude du dessus de l'acrotère. (2 pts)
3. Combien de marches faut-il pour monter du terrain au sol fini du RDC (hauteur de marche ≤ 17 cm) ? (2 pts)

### Partie B — Ouvertures (5 points)
4. Calculer les niveaux du bas et du haut des fenêtres du RDC et de l'étage. (3 pts)
5. Quelle hauteur reste-t-il entre le haut d'une fenêtre de l'étage et le dessous de la dalle de toiture ? À quoi sert cet espace ? (2 pts)

### Partie C — Dessin (5 points)
6. Décrire la méthode de construction de la façade à partir du plan. (3 pts)
7. Quelle hauteur dessinée a la façade (du TN au dessus de l'acrotère) au 1/50 ? (2 pts)`,
  corrige:`### Partie A — Niveaux (10 pts)
1. *(6 pts)*
| Niveau | Calcul | Valeur |
|---|---|---|
| Dessous plancher haut RDC | HSP | **+2,80** |
| Dessus brut plancher | 2,80 + 0,20 | **+3,00** |
| Sol fini étage | 3,00 + 0,06 | **+3,06** |
| Dessous dalle de toiture | 3,06 + 2,80 | **+5,86** |
| Dessus brut dalle | 5,86 + 0,20 | **+6,06** |
| Dessus étanchéité | 6,06 + 0,08 | **+6,14** |
| Dessus acrotère | 6,14 + 0,60 | **+6,74** |
2. TN = 17,95 − 18,45 = **−0,50**. Hauteur au-dessus du TN : 6,74 + 0,50 = **7,24 m** ; altitude de l'acrotère : 18,45 + 6,74 = **25,19 m**. *(2 pts)*
3. 0,50 / 0,17 = 2,94 → **3 marches** de 16,7 cm. *(2 pts)*

### Partie B — Ouvertures (5 pts)
4. RDC : bas **+1,00**, haut **+2,40** ; étage : bas 3,06 + 1,00 = **+4,06**, haut **+5,46**. *(3 pts)*
5. 5,86 − 5,46 = **0,40 m** : place du **linteau** et du **chaînage** (et éventuellement d'un coffre de volet roulant). *(2 pts)*

### Partie C — Dessin (5 pts)
6. Placer le plan au-dessus de la feuille (façade principale vers le bas), abaisser des **lignes de rappel** depuis les angles et les ouvertures, tracer les **lignes de niveau** (TN, ±0,00, allèges, linteaux, planchers, acrotère), dessiner les contours et menuiseries, mettre au net (contour fort, détails moyens, texture fine), coter les niveaux avec le symbole triangle. *(3 pts)*
7. 7,24 m au 1/50 → **14,5 cm**. *(2 pts)*`},
 exercices:[
  {t:"Niveaux brut et fini", d:1, e:`La dalle du RDC (brute) est à −0,06 ; le revêtement fait 6 cm. Le plancher haut a 20 cm d'épaisseur et la HSP est de 3,00 m. Donner le sol fini du RDC, le dessus brut du plancher haut et le sol fini de l'étage.`, c:`Sol fini RDC : −0,06 + 0,06 = **±0,00** ; dessus brut du plancher haut : 3,00 + 0,20 = **+3,20** ; sol fini de l'étage : **+3,26**.`},
  {t:"Hauteur d'étage", d:1, e:`Avec une HSP de 2,80 m, un plancher de 16 + 4 et 6 cm de revêtement, quelle est la hauteur d'étage (sol fini à sol fini) ?`, c:`2,80 + 0,20 + 0,06 = **3,06 m**.`},
  {t:"Altitudes", d:2, e:`Le ±0,00 est à l'altitude 45,30 m. Le regard de branchement sur le réseau public a son fil d'eau à l'altitude 43,90 m, à 25 m de la maison. La sortie des eaux usées de la maison est à −0,60. La pente disponible est-elle suffisante (minimum 1 %) ?`, c:`Altitude de la sortie : 45,30 − 0,60 = **44,70 m** ; dénivelée : 44,70 − 43,90 = **0,80 m** ; pente : 0,80 / 25 = **3,2 %** ≥ 1 % : **suffisante**.`},
  {t:"Ombre portée", d:2, e:`Un auvent en saillie de 0,80 m surmonte une porte. Avec la convention d'éclairage à 45°, quelle est la hauteur de l'ombre portée sur la façade sous l'auvent ?`, c:`À 45°, l'ombre descend d'autant que la saillie : **0,80 m** sous le dessous de l'auvent (au 1/50 : 1,6 cm).`},
  {t:"Lignes de rappel", d:2, e:`Expliquer pourquoi la largeur d'une fenêtre doit être prise sur le plan et sa hauteur sur la coupe ou dans le tableau des menuiseries, et comment on vérifie la cohérence entre plan, façade et coupe.`, c:`Le **plan** donne les positions horizontales (largeurs, trumeaux) ; la **coupe** et le **tableau des menuiseries** donnent les hauteurs (allège, hauteur de baie, linteau). La façade est construite par **lignes de rappel** depuis le plan (verticales) et par **lignes de niveau** depuis la coupe (horizontales) : une fenêtre doit avoir la même largeur sur le plan et sur la façade, et les mêmes niveaux sur la façade et sur la coupe.`}
 ],
 quiz:[
  {q:"Le niveau ±0,00 correspond en général à :", o:["Le terrain naturel","Le sol fini du rez-de-chaussée","Le dessus de la fondation","Le niveau de la rue"], r:1, e:"Sol fini du RDC."},
  {q:"Sur une façade, une cote de niveau est représentée par :", o:["Un cercle","Un triangle sur une ligne","Une flèche double","Un carré"], r:1, e:"Triangle dont la pointe touche la ligne."},
  {q:"Une façade est :", o:["Une coupe verticale","Une vue extérieure","Une coupe horizontale","Une perspective"], r:1, e:"Élévation, sans coupe."},
  {q:"Avec une HSP de 2,80 m et un plancher de 20 cm, la hauteur d'étage brute vaut :", o:["2,60 m","2,80 m","3,00 m","3,20 m"], r:2, e:"2,80 + 0,20 = 3,00 m (+ revêtement)."},
  {q:"L'allège d'une fenêtre de salle d'eau est souvent à :", o:["0,50 m","1,00 m","1,60 m","2,20 m"], r:2, e:"1,50 à 1,60 m pour l'intimité."}
 ]},

{id:"dessin-11", niv:2, titre:"La coupe de bâtiment", duree:65, contenu:`## Rôle de la coupe
La **coupe** d'un bâtiment est une **section verticale** qui montre ce que ni le plan ni la façade ne montrent : les **fondations**, l'épaisseur des **planchers**, les **hauteurs** intérieures, les **escaliers**, la **toiture** et sa structure, les différences de niveau. C'est le document indispensable pour le gros œuvre et pour vérifier qu'un escalier « passe ».
La position de la coupe est choisie pour être la plus informative : elle passe en général par l'**escalier**, par des **ouvertures** (portes et fenêtres) et par les zones où les niveaux changent (terrasse, douche, garage). On dessine souvent **deux coupes** perpendiculaires (A–A et B–B).

## Ce que l'on dessine, de bas en haut
!fig:coupe-type|Coupe verticale type d'une maison
| Partie | Éléments représentés |
|---|---|
| **Infrastructure** | terrain naturel (hachure de terre), fouilles, béton de propreté, **semelles**, amorces de poteaux, **longrines** |
| **Soubassement** | maçonnerie en agglos pleins, remblai compacté, **hérisson**, dallage (8 à 12 cm) avec film polyane |
| **Murs** | murs coupés (hachures), allèges, **linteaux**, **chaînages** horizontaux |
| **Planchers** | dalle pleine ou plancher à **hourdis** (16 + 4, 20 + 5), **poutres** coupées ou vues, revêtement |
| **Escaliers** | paillasse et marches coupées, volée vue au-delà, garde-corps |
| **Toiture** | charpente (fermes, pannes), couverture (tôles, tuiles), **faux plafond**, ou terrasse : forme de pente, étanchéité, **acrotère** |
On ajoute : les **cotes de niveau** à chaque plancher, les **cotes verticales** (hauteurs d'étage, HSP, allèges, linteaux, épaisseurs) et les annotations des matériaux.

## Ce qui est coupé et ce qui est vu
- **Coupé** (trait fort, hachures) : murs traversés par la trace, planchers, poutres coupées transversalement, fondations, toiture sur la ligne de coupe.
- **Vu au-delà** (trait moyen ou fin, sans hachures) : murs du fond avec leurs ouvertures, portes, poutres vues en élévation, marches de la volée qui n'est pas coupée.
Une **poutre** coupée apparaît comme un rectangle hachuré sous la dalle (sa retombée) ; une poutre parallèle au plan de coupe, au-delà, apparaît comme une bande sous la dalle, en trait fin.

## Les planchers en coupe
| Plancher | Épaisseur | Représentation |
|---|---|---|
| Dalle pleine | 12 à 20 cm | rectangle hachuré (béton armé) |
| Hourdis 16 + 4 | 20 cm | entrevous (alvéoles) + dalle de compression de 4 cm ; poutrelles tous les 60 cm environ |
| Dallage sur terre-plein | 8 à 12 cm | sur hérisson et film, avec isolant éventuel |
!fig:hourdis|Plancher à poutrelles et entrevous (hourdis)

> [!exemple] Empilement d'un plancher d'étage
> Du bas vers le haut : enduit sous plafond 1,5 cm ; plancher hourdis 16 + 4 = 20 cm ; chape 4 cm ; carrelage et colle 2 cm.
> Épaisseur totale : 1,5 + 20 + 4 + 2 = **27,5 cm**. Avec une hauteur d'étage de 3,10 m (sol fini à sol fini), la HSP sous enduit vaut 3,10 − 0,275 = **2,825 m**.

## Vérifier avec la coupe
- L'**échappée** de l'escalier (hauteur libre au-dessus des marches) doit être d'au moins 1,90 à 2,00 m sous la trémie.
- Les **retombées** de poutres ne doivent pas passer au-dessus d'une porte trop haute ou couper une fenêtre.
- Les **niveaux** extérieurs doivent permettre l'écoulement des eaux de pluie loin du bâtiment (pente de 2 % au moins).
- La profondeur des **fondations** doit atteindre le bon sol indiqué par l'étude géotechnique.

> [!retenir]
> - La coupe passe par l'escalier, des ouvertures et les changements de niveau.
> - On dessine de la fondation à la toiture : semelles, soubassement, dallage, murs, planchers, toiture.
> - Coupé : fort + hachures ; vu au-delà : fin ; niveaux à chaque plancher.
> - La coupe sert à vérifier hauteurs, échappée, retombées et écoulement des eaux.`,
 sujet:{titre:"Coupe d'une maison à toiture en tôle", duree:75, niveau:"BT Dessin bâtiment / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour une maison de plain-pied à Divo, on vous demande d'établir les cotes de la coupe A–A et de vérifier quelques quantités.

**Données**
- Terrain naturel à **−0,45** ; ±0,00 = sol fini ;
- Fondations : béton de propreté **5 cm**, semelles filantes **60 × 25 cm** dont le dessous est à **−1,20** ; soubassement en agglos pleins de 20 jusqu'au dallage ;
- Dallage : hérisson **15 cm**, dallage béton **10 cm**, chape + carrelage **5 cm** ;
- Murs en agglos creux de 15 ; HSP sous faux plafond **2,90 m** ; chaînage haut 20 × 20 au-dessus des linteaux ;
- Toiture deux versants, portée **9,00 m** entre murs, pente **20°**, débords **0,60 m**.

### Partie A — Niveaux de l'infrastructure (8 points)
1. Calculer les niveaux du dessus de la semelle, du dessus du dallage brut, du dessous du dallage et du dessous du hérisson. (4 pts)
2. Calculer la hauteur du soubassement en agglos (du dessus de la semelle au dessous du dallage) et le nombre de rangs d'agglos de 20 cm de hauteur. (2 pts)
3. Quelle profondeur de fouille mesure-t-on depuis le terrain naturel ? (2 pts)

### Partie B — Superstructure et toiture (8 points)
4. Le faux plafond est fixé sous l'entrait des fermes, posées sur le chaînage. Quel est le niveau du dessus du chaînage ? (2 pts)
5. Calculer la hauteur du faîtage au-dessus du chaînage (on néglige l'épaisseur des pièces) et la longueur d'un rampant (débord compris). (4 pts)
6. Quel est le niveau approximatif du faîtage ? (2 pts)

### Partie C — Représentation (4 points)
7. Citer les éléments coupés et les éléments vus sur la coupe A–A passant par la porte d'entrée et une fenêtre. (4 pts)`,
  corrige:`### Partie A — Infrastructure (8 pts)
1. *(4 pts)*
   - Dessous de la semelle : −1,20 ; béton de propreté sous la semelle (de −1,25 à −1,20) ; dessus de la semelle : −1,20 + 0,25 = **−0,95** ;
   - Dessus du dallage brut : 0,00 − 0,05 = **−0,05** ;
   - Dessous du dallage : −0,05 − 0,10 = **−0,15** ;
   - Dessous du hérisson : −0,15 − 0,15 = **−0,30**.
2. Soubassement de −0,95 à −0,15 : **0,80 m** → 0,80 / 0,20 = **4 rangs** d'agglos pleins. *(2 pts)*
3. Fond de fouille = dessous du béton de propreté = −1,25 ; profondeur depuis le TN : 1,25 − 0,45 = **0,80 m**. *(2 pts)*

### Partie B — Superstructure (8 pts)
4. Le faux plafond est à +2,90 ; il est fixé sous l'entrait, posé sur le chaînage : dessus du chaînage ≈ **+2,90** (plus l'épaisseur des pièces de fixation). *(2 pts)*
5. f = (9,00 / 2) × tan 20° = 4,50 × 0,364 = **1,64 m** ; rampant = (4,50 + 0,60) / cos 20° = 5,10 / 0,940 = **5,43 m**. *(4 pts)*
6. Faîtage ≈ 2,90 + 1,64 = **+4,54** (sans l'épaisseur de l'entrait et des pannes). *(2 pts)*

### Partie C — Représentation (4 pts)
7. **Coupés** : semelles, béton de propreté, soubassement, hérisson et dallage, murs de façade traversés (avec la porte et la fenêtre coupées : linteaux, appui), chaînage, ferme et couverture sur la ligne de coupe, faux plafond. **Vus** : murs intérieurs au-delà avec leurs portes, fermes suivantes, rives de toiture. *(4 pts)*`},
 exercices:[
  {t:"Choisir la position de la coupe", d:1, e:`Sur le plan d'une villa R+1, par où faire passer la coupe A–A ? Citer trois critères.`, c:`Faire passer la coupe par : **l'escalier** (vérifier l'échappée et la trémie), des **ouvertures** (portes, fenêtres : hauteurs d'allège et de linteau), les zones où **les niveaux changent** (terrasse, douche, garage) ; et choisir le sens d'observation qui montre le plus de détails.`},
  {t:"Empilement d'un plancher", d:2, e:`Un plancher comporte : faux plafond suspendu à 10 cm sous la dalle, dalle pleine de 16 cm, chape de 5 cm, carrelage 1 cm. La hauteur d'étage (sol fini à sol fini) est de 3,20 m. Calculer la hauteur sous faux plafond.`, c:`Épaisseur au-dessus du faux plafond : 0,10 + 0,16 + 0,05 + 0,01 = **0,32 m** (plus l'épaisseur du faux plafond, négligée). HSP = 3,20 − 0,32 = **2,88 m**.`},
  {t:"Retombée de poutre", d:2, e:`Une poutre de 20 × 50 cm (hauteur totale, dalle de 16 cm comprise) passe au-dessus d'une porte de 2,20 m de haut. Le dessous de la dalle est à +2,90. La porte passe-t-elle sous la poutre ?`, c:`Retombée sous la dalle : 0,50 − 0,16 = **0,34 m** ; dessous de la poutre : 2,90 − 0,34 = **+2,56** ; la porte (2,20 m) passe avec **0,36 m** de marge pour le linteau et le cadre ✓.`},
  {t:"Profondeur de fondation", d:2, e:`Le bon sol est à 1,40 m sous le terrain naturel (TN à −0,30). La semelle a 30 cm d'épaisseur et repose sur 5 cm de béton de propreté, ancrée de 20 cm dans le bon sol. Donner le niveau du fond de fouille et celui du dessus de la semelle.`, c:`Bon sol : −0,30 − 1,40 = **−1,70**. Fond de fouille (ancrage de 20 cm) : **−1,90** ; dessus du béton de propreté : −1,85 ; dessus de la semelle : −1,85 + 0,30 = **−1,55**.`},
  {t:"Pente du terrain autour", d:1, e:`Autour de la maison, on réalise un trottoir de 1,00 m de large en pente de 2 % vers l'extérieur. Son bord intérieur est à −0,05. Quel est le niveau de son bord extérieur ?`, c:`Dénivelée : 0,02 × 1,00 = 0,02 m → bord extérieur à **−0,07**.`}
 ],
 quiz:[
  {q:"La coupe de bâtiment passe de préférence par :", o:["Un mur plein","L'escalier et des ouvertures","Le jardin","Le toit seulement"], r:1, e:"Pour montrer le maximum d'informations."},
  {q:"Un plancher en hourdis 16 + 4 a une épaisseur de :", o:["16 cm","20 cm","4 cm","24 cm"], r:1, e:"16 cm d'entrevous + 4 cm de dalle de compression."},
  {q:"Sur une coupe, les éléments vus au-delà du plan de coupe sont dessinés :", o:["Hachurés","En trait fin ou moyen","En trait interrompu","Ils ne sont pas dessinés"], r:1, e:"Sans hachures."},
  {q:"L'échappée d'un escalier est :", o:["La largeur des marches","La hauteur libre au-dessus des marches","La longueur de la volée","La pente"], r:1, e:"Au moins 1,90 à 2,00 m."},
  {q:"Le hérisson est :", o:["Une couche de pierres sous le dallage","Un type de charpente","Un enduit","Un acier"], r:0, e:"Couche drainante de pierres sous le dallage."}
 ]},

{id:"dessin-12", niv:2, titre:"Dessiner un escalier", duree:65, contenu:`## Le vocabulaire de l'escalier
| Terme | Définition |
|---|---|
| **Marche** | surface horizontale où l'on pose le pied |
| **Contremarche** | partie verticale entre deux marches |
| **Hauteur de marche** h | distance verticale entre deux marches successives |
| **Giron** g | distance horizontale entre deux nez de marche successifs |
| **Emmarchement** | largeur utile de l'escalier |
| **Volée** | suite ininterrompue de marches entre deux paliers |
| **Palier** | plate-forme de repos ou d'arrivée |
| **Ligne de foulée** | trajet théorique du pied, à 0,50 m environ du bord intérieur |
| **Paillasse** | dalle inclinée en béton armé qui porte les marches |
| **Trémie** | ouverture dans le plancher haut pour le passage |
| **Échappée** | hauteur libre au-dessus du nez des marches (≥ 1,90 à 2,00 m) |
| **Limon** | pièce latérale qui porte les marches (bois, métal) |

## Le calcul : loi de Blondel
!fig:escalier|Hauteur de marche, giron et loi de Blondel
Pour être confortable, un escalier doit respecter la **loi de Blondel** (le pas moyen d'un adulte) :
$$ 60 cm ≤ 2h + g ≤ 64 cm
avec, pour un logement : h ≈ 16 à 18 cm et g ≈ 25 à 30 cm ; pour un bâtiment recevant du public, h ≤ 16 à 17 cm et g ≥ 28 cm.
Méthode :
1. Hauteur à monter H (de sol fini à sol fini).
2. Nombre de marches : n = H / h souhaitée, arrondi à l'entier ; hauteur exacte h = H / n (**toutes les marches identiques**).
3. Giron par Blondel : g = 63 − 2h (cm).
4. Une volée de n marches compte **n − 1 girons** (la dernière marche est le palier d'arrivée) : longueur L = (n − 1) × g.
5. Pente : α = arctan(h / g) ; elle est confortable entre 25° et 35° environ.
6. Trémie : sa longueur doit garantir l'échappée : Lt ≈ (échappée + épaisseur du plancher) / tan α.

> [!exemple] Escalier d'une villa R+1
> H = 3,06 m, h souhaitée 17 cm : n = 306 / 17 = 18 marches ; h = 306 / 18 = **17,0 cm**.
> g = 63 − 34 = **29 cm** ; L = 17 × 0,29 = **4,93 m** ; α = arctan(17 / 29) = **30,4°**.
> Trémie : (2,00 + 0,20) / tan 30,4° = 2,20 / 0,586 = **3,75 m**.
> Une volée droite de 4,93 m est longue : on peut prévoir deux volées de 9 marches avec un palier intermédiaire (escalier à retour).

## Les types d'escaliers
| Type | Caractéristiques |
|---|---|
| **Droit** | une volée rectiligne ; simple, mais encombrant en longueur |
| **Quart tournant** | changement de direction de 90° par un palier ou par des marches **balancées** |
| **Demi-tournant** (à retour) | deux volées parallèles et un palier ; compact, courant en R+1 |
| **Hélicoïdal** | marches autour d'un noyau ; très compact, moins confortable |
Les **marches balancées** (dansantes) ont un giron variable : on conserve le giron calculé **sur la ligne de foulée** et on répartit les marches progressivement (méthode du balancement).

## Représentation en plan et en coupe
- **En plan**, l'escalier est coupé à environ 1 m au-dessus du sol : on dessine les marches **vues** du bas en trait moyen, une **ligne de brisure** oblique à l'endroit de la coupe, et la partie au-dessus en trait interrompu (ou on l'omet).
- La **ligne de foulée** porte une **flèche** qui part de la première marche (un petit cercle) et indique le sens de la **montée** ; on **numérote** les marches.
- Au niveau supérieur, on voit l'escalier **par-dessus** la trémie, entouré d'un garde-corps.
- **En coupe**, on dessine la paillasse et les marches coupées (hachures béton armé), les paliers, la trémie, l'échappée et le garde-corps (hauteur ≥ 0,90 m le long des volées, 1,00 m sur les paliers).

> [!retenir]
> - Blondel : 60 ≤ 2h + g ≤ 64 cm ; h ≈ 16 – 18 cm ; g ≈ 25 – 30 cm.
> - n = H / h (entier), h = H / n ; L = (n − 1) × g.
> - Échappée ≥ 1,90 à 2,00 m ; trémie Lt ≈ (échappée + plancher) / tan α.
> - En plan : flèche de montée, marches numérotées, ligne de brisure.`,
 sujet:{titre:"Conception de l'escalier d'un immeuble R+2", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Dans un petit immeuble de bureaux R+2 à Yopougon, l'escalier principal est à **deux volées et palier intermédiaire** (escalier à retour). Hauteur d'étage (sol fini à sol fini) : **3,24 m**. Plancher : **20 cm**. Cage d'escalier : longueur intérieure disponible **4,40 m**, largeur intérieure **2,60 m**.

**Données complémentaires** : bâtiment recevant du public : h ≤ 17 cm, g ≥ 28 cm ; emmarchement minimal 1,20 m ; échappée 2,00 m ; palier d'au moins 1,20 m de profondeur.

### Partie A — Calcul (10 points)
1. Déterminer le nombre total de marches par étage et leur hauteur exacte. (3 pts)
2. Calculer le giron (2h + g = 63 cm) et vérifier les conditions. (2 pts)
3. Répartir les marches entre les deux volées et calculer la longueur de chaque volée. (3 pts)
4. Vérifier que la cage est assez longue (volée + palier intermédiaire + palier d'arrivée de 1,20 m). (2 pts)

### Partie B — Vérifications (6 points)
5. L'emmarchement de chaque volée tient-il dans la largeur de 2,60 m (jour central de 0,20 m) ? (2 pts)
6. Calculer l'inclinaison et la longueur de la trémie nécessaire au-dessus de la première volée. (4 pts)

### Partie C — Représentation (4 points)
7. Décrire la représentation de cet escalier sur le plan du rez-de-chaussée et sur celui du 1er étage. (4 pts)`,
  corrige:`### Partie A — Calcul (10 pts)
1. 324 / 17 = 19,06 → **20 marches** (h ≤ 17 cm impose d'arrondir au-dessus) ; h = 324 / 20 = **16,2 cm**. *(3 pts)*
2. g = 63 − 2 × 16,2 = **30,6 cm** → on retient **30 cm** (2h + g = 62,4 cm ✓ ; g ≥ 28 ✓ ; h ≤ 17 ✓). *(2 pts)*
3. Deux volées de **10 marches** : chaque volée compte 10 − 1 = 9 girons → L = 9 × 0,30 = **2,70 m**. *(3 pts)*
4. 2,70 + 1,20 (palier intermédiaire) = 3,90 m ≤ 4,40 m ✓ ; il reste 0,50 m, insuffisant pour un palier d'arrivée de 1,20 m dans l'alignement : le palier d'arrivée se place **sur le côté**, au départ de la volée suivante (c'est le cas d'un escalier à retour : arrivée et départ sont du même côté). *(2 pts)*

### Partie B — Vérifications (6 pts)
5. (2,60 − 0,20) / 2 = **1,20 m** par volée ✓ (juste égal au minimum). *(2 pts)*
6. α = arctan(16,2 / 30) = **28,4°**. Trémie : (2,00 + 0,20) / tan 28,4° = 2,20 / 0,540 = **4,07 m** : pratiquement toute la cage ; c'est normal pour un escalier à retour, la trémie couvre les deux volées et le palier intermédiaire. *(4 pts)*

### Partie C — Représentation (4 pts)
7. **RDC** : première volée dessinée depuis la marche 1 (petit cercle, ligne de foulée et flèche vers le haut), coupée par une **ligne de brisure** oblique vers la 6e ou 7e marche ; au-delà, trait interrompu ou rien ; marches numérotées.
**1er étage** : on voit, au travers de la trémie, la volée d'arrivée et le palier intermédiaire (vus de dessus), la volée de départ vers le 2e étage coupée par une ligne de brisure, et le **garde-corps** autour de la trémie ; flèches de montée sur chaque volée. *(4 pts)*`},
 exercices:[
  {t:"Calcul d'un escalier droit", d:1, e:`Hauteur à monter : 2,88 m ; hauteur de marche souhaitée : 18 cm. Calculer n, h, g (2h + g = 63) et la longueur de la volée.`, c:`n = 288 / 18 = **16 marches** ; h = **18,0 cm** ; g = 63 − 36 = **27 cm** ; L = 15 × 0,27 = **4,05 m**.`},
  {t:"Vérifier Blondel", d:1, e:`Un escalier existant a des marches de 19 cm et un giron de 22 cm. Est-il confortable ?`, c:`2h + g = 38 + 22 = **60 cm** : à la limite basse de Blondel, mais h = 19 cm et g = 22 cm donnent un escalier **raide** (α = arctan(19/22) = 40,8°) : inconfortable et dangereux à la descente. À réserver à un escalier de service ou de cave.`},
  {t:"Trémie", d:2, e:`Un escalier a h = 17 cm et g = 28 cm ; le plancher haut a 16 cm d'épaisseur. Calculer la longueur de trémie nécessaire pour une échappée de 2,00 m.`, c:`tan α = 17 / 28 = 0,607 ; Lt = (2,00 + 0,16) / 0,607 = **3,56 m**.`},
  {t:"Nombre de girons", d:1, e:`Pourquoi une volée de 15 marches ne compte-t-elle que 14 girons ? Quelle erreur commet-on si l'on compte 15 girons ?`, c:`La dernière « marche » (la 15e contremarche) arrive au niveau du **palier** (ou du plancher) : il n'y a pas de giron à dessiner pour elle. Compter 15 girons allonge l'escalier d'un giron (≈ 0,28 m) : la volée ne tombe plus au bon endroit et la trémie est mal placée.`},
  {t:"Escalier à retour", d:2, e:`Une cage de 3,60 × 2,40 m (intérieur) doit recevoir un escalier à retour pour monter 3,06 m, avec h ≈ 17 cm, g = 28 cm et un palier intermédiaire de 1,00 m. Les volées tiennent-elles ?`, c:`n = 306 / 17 = 18 marches → 2 volées de 9 ; chaque volée : 8 girons × 0,28 = **2,24 m** ; avec le palier : 2,24 + 1,00 = **3,24 m** ≤ 3,60 ✓. Emmarchement : (2,40 − jour) / 2 ≈ **1,15 m** par volée, convenable pour un logement.`}
 ],
 quiz:[
  {q:"La loi de Blondel s'écrit :", o:["h + g = 45 cm","60 ≤ 2h + g ≤ 64 cm","2g + h = 63 cm","h × g = 500"], r:1, e:"Le pas moyen vaut environ 63 cm."},
  {q:"Une volée de 16 marches comporte :", o:["16 girons","15 girons","17 girons","8 girons"], r:1, e:"n − 1 girons."},
  {q:"L'échappée minimale courante est de :", o:["1,50 m","1,90 à 2,00 m","2,50 m","3,00 m"], r:1, e:"Hauteur libre au-dessus des nez de marche."},
  {q:"Sur un plan, la flèche de l'escalier indique :", o:["La descente","La montée","La pente du toit","Le nord"], r:1, e:"Du bas vers le haut."},
  {q:"La paillasse est :", o:["La partie verticale d'une marche","La dalle inclinée qui porte les marches","Le palier","La main courante"], r:1, e:"Dalle en béton armé inclinée."}
 ]},

{id:"dessin-13", niv:3, titre:"Plans de structure : coffrage et ferraillage", duree:75, contenu:`## Le dossier du bureau d'études structure
Les plans d'architecte disent **ce que l'on voit** ; les plans du bureau d'études (BET) disent **comment le bâtiment tient**. Le dossier de structure comprend :
| Plan | Contenu |
|---|---|
| **Plan de fondations** | implantation des semelles (S1, S2…), longrines, niveaux d'assise, amorces de poteaux |
| **Plans de coffrage** (un par plancher) | forme et dimensions de tous les éléments en béton : poteaux, poutres, dalles, trémies, réservations, niveaux |
| **Plans de ferraillage** | position, nombre, diamètre et forme de chaque barre d'acier ; coupes ; nomenclatures |
| **Note de calcul** | hypothèses, charges, dimensionnement (document écrit) |
Tous ces plans sont repérés sur une **grille d'axes** commune avec les plans d'architecte : files numérotées 1, 2, 3… dans un sens, lettres A, B, C… dans l'autre. Un poteau se désigne par son intersection (poteau B3).

## Le repérage des éléments
Chaque élément porte un **repère** et ses dimensions, par exemple :
- **S1 (1,20 × 1,20 × 0,30)** : semelle isolée type 1 ;
- **P1 (20 × 20)** : poteau type 1 ;
- **L1 (20 × 40)** : longrine ;
- **N1 ou Pt1 (20 × 40)** : poutre (la hauteur comprend la dalle) ;
- **Plancher 16 + 4** ou **dalle e = 15** ; **flèche double** indiquant le **sens de portée** des poutrelles ou de la dalle.
Les conventions varient d'un bureau d'études à l'autre : la **légende** du plan fait foi.

## Le plan de coffrage
Le plan de coffrage d'un plancher montre la **forme du béton** à coffrer :
- les **poteaux** du niveau inférieur (qui portent le plancher), hachurés ou noircis ;
- les **poutres** : selon le bureau d'études, le plancher est représenté vu de dessus (les retombées sous la dalle sont alors en trait interrompu) ou vu de dessous ; le mode retenu est indiqué sur le plan ;
- les **trémies** (escalier, gaines) marquées d'une **croix** en diagonale ;
- les **réservations** (passages de canalisations) avec leurs dimensions et leur niveau ;
- les **niveaux bruts** (NB) des dessus de dalle et les **cotes** entre axes et entre nus.
!fig:poutre-elevation|Élévation d'une poutre : aciers longitudinaux, chapeaux et cadres

## Le plan de ferraillage
Pour chaque élément, on dessine une **élévation** (ou une vue en plan pour une dalle) et des **coupes transversales** :
- les **barres** sont dessinées en **trait fort**, le béton en trait fin ;
- chaque barre (ou groupe de barres identiques) porte un **numéro de repère** dans un cercle et une désignation : **3 HA12 — L = 5,40** (3 barres haute adhérence de 12 mm, longueur 5,40 m) ;
- les **cadres**, étriers et épingles : **Cad. HA6 e = 15** (espacement 15 cm), avec leur **répartition** (resserrés près des appuis) ;
- l'**enrobage** (distance entre la barre la plus extérieure et la surface du béton : 2,5 à 4 cm selon l'exposition) ;
- les **ancrages** (crochets, retours) et les **recouvrements**.
!fig:poutre-coupe|Coupe transversale : aciers tendus en bas, aciers de montage en haut, cadre

## La nomenclature des aciers
Elle récapitule, pour chaque repère : nombre, diamètre, **schéma de façonnage** coté, longueur unitaire, longueur totale et **masse**. La masse linéique d'une barre vaut :
$$ masse (kg/m) = 0,00617 × Ø²      (Ø en mm)
| Ø (mm) | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 25 |
|---|---|---|---|---|---|---|---|---|
| kg/m | 0,222 | 0,395 | 0,617 | 0,888 | 1,208 | 1,578 | 2,466 | 3,853 |

> [!exemple] Nomenclature d'une poutre N1 (20 × 40, L = 4,70 m)
> | Rep. | Désignation | Long. unitaire | Long. totale | kg/m | Masse |
> |---|---|---|---|---|---|
> | 1 | 3 HA12 (aciers inférieurs) | 4,90 m | 14,70 m | 0,888 | 13,05 kg |
> | 2 | 2 HA10 (montage) | 4,90 m | 9,80 m | 0,617 | 6,05 kg |
> | 3 | 25 cadres HA6 (14 × 34 + crochets) | 1,10 m | 27,50 m | 0,222 | 6,11 kg |
> Total ≈ **25,2 kg** pour 0,20 × 0,40 × 4,70 = 0,376 m³ de béton, soit environ **67 kg/m³**.

## Lire un plan de structure sur le chantier
1. Vérifier le **numéro** et l'**indice** du plan (dernière version !).
2. Repérer l'élément par ses **axes** et son **repère**.
3. Lire la section, les niveaux, les réservations sur le **coffrage** ; puis le nombre, le diamètre, la position et la longueur des barres sur le **ferraillage**.
4. Contrôler avant bétonnage : nombre de barres, diamètres, espacement des cadres, enrobage (cales), longueur des chapeaux, ancrages.

> [!retenir]
> - Grille d'axes commune ; repères S, P, L, N/Pt ; la légende fait foi.
> - Coffrage = forme du béton (sections, trémies, réservations, niveaux) ; ferraillage = aciers.
> - Désignation : 3 HA12 — L = 5,40 ; cadres HA6 e = 15.
> - Masse d'une barre : 0,00617 × Ø² kg/m ; nomenclature = base de la commande d'acier.`,
 sujet:{titre:"Lecture d'un plan de coffrage et nomenclature d'une poutre", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un immeuble R+3 à Marcory, le chef de chantier vous confie le plan de coffrage du plancher haut du RDC et le plan de ferraillage de la poutre **N3**.

**Données lues sur les plans**
- Grille d'axes : files 1 à 4 espacées de **4,50 m**, files A à C espacées de **5,00 m** ; poteaux **P1 (25 × 25)** à toutes les intersections ;
- Plancher **16 + 4**, flèche double parallèle aux files 1 à 4 ; poutres principales **N3 (25 × 40)** sur les files A, B et C, continues sur 3 travées (axes 1 à 4) ; poutres secondaires **N1 (20 × 30)** sur les files 1 à 4 ;
- Trémie d'escalier entre les axes 3–4 et A–B ;
- Ferraillage de la poutre N3 de la file B : rep. 1 : **3 HA14** filants, L = 14,10 m (avec recouvrements) ; rep. 2 : **chapeaux 2 HA12**, L = 2,40 m, sur les 2 appuis intermédiaires ; rep. 3 : **2 HA10** de montage, L = 14,10 m ; rep. 4 : **cadres HA6**, longueur développée 1,20 m, espacés de **15 cm** ;
- NB du dessus de dalle : **+3,20**.

### Partie A — Lecture du coffrage (7 points)
1. Que signifient « N3 (25 × 40) » et la flèche double ? Dans quel sens portent les poutrelles ? (3 pts)
2. Comment la trémie est-elle représentée ? Quelles poutres bordent la trémie ? (2 pts)
3. Quel est le niveau du dessous de la poutre N3 ? Peut-on y placer une porte de 2,20 m sous linteau si le sol fini du RDC est à ±0,00 ? (2 pts)

### Partie B — Nomenclature de N3 (9 points)
4. Calculer le nombre de cadres (longueur totale 3 × 4,50 m, un cadre à chaque extrémité). (2 pts)
5. Établir la nomenclature (repère, nombre, Ø, longueur unitaire, longueur totale, masse). (5 pts)
6. Calculer le volume de béton de N3 (sous la dalle seulement, entre les nus des poteaux) et le ratio d'acier en kg/m³ sur le volume total de la poutre. (2 pts)

### Partie C — Contrôles (4 points)
7. Citer quatre contrôles à faire avant le bétonnage de N3. (4 pts)`,
  corrige:`### Partie A — Coffrage (7 pts)
1. Poutre de repère **N3**, de **25 cm de large et 40 cm de haut** (dalle comprise). La flèche double indique le **sens de portée** du plancher : les poutrelles sont **parallèles aux files 1 à 4** ; elles portent de la file A à la file B puis de B à C (**5,00 m**) et s'appuient sur les poutres **N3**. Les poutres N1, parallèles aux poutrelles, sont des poutres secondaires (chaînages, raidisseurs). *(3 pts)*
2. Par une **croix en diagonale** dans le rectangle de la trémie ; elle est bordée par les poutres N3 des files **A et B** (entre les axes 3 et 4) et par les poutres N1 des files **3 et 4** (entre A et B) ; les poutrelles sont supprimées dans cette travée. *(2 pts)*
3. Dessous de N3 : 3,20 − 0,40 = **+2,80**. Une porte de 2,20 m laisse 0,60 m : **oui**, avec la place d'un linteau (ou la poutre sert de linteau). *(2 pts)*

### Partie B — Nomenclature (9 pts)
4. 13,50 / 0,15 = 90 intervalles → **91 cadres** (on peut en retirer ceux qui sont dans les poteaux : environ 88). On retient **91**. *(2 pts)*
5. *(5 pts)*
| Rep. | Nb × Ø | L unit. | L totale | kg/m | Masse |
|---|---|---|---|---|---|
| 1 | 3 HA14 | 14,10 m | 42,30 m | 1,208 | 51,10 kg |
| 2 | 2 × 2 HA12 | 2,40 m | 9,60 m | 0,888 | 8,52 kg |
| 3 | 2 HA10 | 14,10 m | 28,20 m | 0,617 | 17,40 kg |
| 4 | 91 HA6 | 1,20 m | 109,20 m | 0,222 | 24,24 kg |
| | | | | **Total** | **101,3 kg** |
6. Retombée : 0,40 − 0,20 = 0,20 m ; entre nus : 13,50 − 3 × 0,25 = 12,75 m (moitiés de poteaux d'about comprises dans les 3 × 0,25 m) ; V = 0,25 × 0,20 × 12,75 = **0,64 m³** sous la dalle. Volume total de la poutre (dalle comprise) : 0,25 × 0,40 × 12,75 = 1,275 m³ → ratio ≈ 101,3 / 1,275 = **79 kg/m³**. *(2 pts)*

### Partie C — Contrôles (4 pts)
7. Indice du plan à jour ; nombre et diamètre des barres de chaque repère ; espacement et resserrement des cadres près des appuis ; longueur et position des chapeaux ; **enrobage** (cales) ; ancrages et recouvrements ; propreté des aciers ; étaiement et coffrage étanche. *(4 pts, 1 par contrôle pertinent)*`},
 exercices:[
  {t:"Lire une désignation", d:1, e:`Expliquer : (a) 4 HA16 — L = 6,20 ; (b) Cad. HA8 e = 20 ; (c) P2 (25 × 30) ; (d) Plancher 20 + 5 ; (e) NB +6,40.`, c:`(a) **4 barres haute adhérence** de **16 mm**, longueur **6,20 m** ; (b) **cadres** en HA8 espacés de **20 cm** ; (c) **poteau** de type P2, section **25 × 30 cm** ; (d) plancher à entrevous de **20 cm** + dalle de compression de **5 cm** (25 cm au total) ; (e) **niveau brut** (dessus du béton) à **+6,40**.`},
  {t:"Masses linéiques", d:1, e:`Vérifier par la formule 0,00617 × Ø² les masses linéiques des HA10, HA12 et HA16, puis calculer la masse de 12 barres HA12 de 12 m.`, c:`HA10 : 0,00617 × 100 = **0,617 kg/m** ; HA12 : 0,00617 × 144 = **0,888 kg/m** ; HA16 : 0,00617 × 256 = **1,580 kg/m** (1,578 au catalogue).
12 barres de 12 m : 144 m × 0,888 = **127,9 kg**.`},
  {t:"Nombre de cadres", d:2, e:`Une poutre de 5,00 m entre nus reçoit des cadres HA6 : 6 cadres espacés de 10 cm à chaque extrémité, puis un espacement de 20 cm au milieu. Combien de cadres au total ?`, c:`À chaque extrémité : 6 cadres occupent 5 × 0,10 = 0,50 m. Zone centrale : 5,00 − 2 × 0,50 = 4,00 m à 20 cm → 4,00 / 0,20 = 20 intervalles → **19 cadres** intermédiaires (les extrémités de la zone étant déjà occupées par le dernier cadre de chaque zone serrée).
Total : 6 + 6 + 19 = **31 cadres**.`},
  {t:"Longueur développée d'un cadre", d:2, e:`Une poutre de 20 × 40 cm a un enrobage de 3 cm. Les cadres HA6 ont deux crochets de 8 cm chacun. Calculer la longueur développée d'un cadre (à l'axe des barres, on néglige les arrondis).`, c:`Dimensions extérieures du cadre : (20 − 2 × 3) × (40 − 2 × 3) = **14 × 34 cm**.
Périmètre : 2 × (14 + 34) = 96 cm ; crochets : 2 × 8 = 16 cm ; longueur développée ≈ **1,12 m**.`},
  {t:"Ratio d'acier d'une semelle", d:2, e:`Une semelle S1 de 1,40 × 1,40 × 0,35 m est armée par deux nappes croisées de 8 HA12 de 1,30 m chacune et reçoit 4 HA14 en attente de 1,20 m pour le poteau. Calculer la masse d'acier et le ratio en kg/m³.`, c:`Nappes : 2 × 8 × 1,30 = 20,80 m × 0,888 = **18,47 kg** ; attentes : 4 × 1,20 = 4,80 m × 1,208 = **5,80 kg** ; total **24,27 kg**.
Volume : 1,40 × 1,40 × 0,35 = 0,686 m³ → ratio ≈ **35 kg/m³**.`}
 ],
 quiz:[
  {q:"« 3 HA12 » signifie :", o:["3 barres lisses de 12 cm","3 barres haute adhérence de 12 mm","12 barres de 3 mm","3 cadres de 12 cm"], r:1, e:"HA = haute adhérence ; 12 = diamètre en mm."},
  {q:"La masse linéique d'une barre HA10 est d'environ :", o:["0,222 kg/m","0,617 kg/m","1,0 kg/m","0,888 kg/m"], r:1, e:"0,00617 × 10² = 0,617 kg/m."},
  {q:"Sur un plan de coffrage, une trémie est représentée par :", o:["Des hachures","Une croix en diagonale","Un cercle","Un trait mixte"], r:1, e:"Croix diagonale dans le vide."},
  {q:"Le plan qui donne la forme et les dimensions du béton est :", o:["Le plan de ferraillage","Le plan de coffrage","La nomenclature","La note de calcul"], r:1, e:"Le ferraillage donne les aciers."},
  {q:"L'enrobage est :", o:["La longueur de recouvrement","La distance entre l'acier et la surface du béton","L'espacement des cadres","Le diamètre des barres"], r:1, e:"Il protège les aciers de la corrosion et du feu."}
 ]},

{id:"dessin-14", niv:3, titre:"Plans de réseaux : électricité, plomberie, assainissement", duree:70, contenu:`## Des plans pour chaque corps d'état
Sur le fond de plan d'architecte (murs en gris clair), chaque lot technique dessine ses **réseaux** : électricité (courants forts et faibles), plomberie sanitaire (alimentation et évacuations), assainissement extérieur, climatisation. Ces plans servent à **chiffrer**, à **réaliser** les saignées et les réservations **avant** les enduits et les dalles, puis à établir le **récolement**.

## Électricité
Deux types de documents :
- le **plan d'implantation** (ou schéma architectural) : position des appareils sur le plan de niveau, et liaisons de commande (un trait courbe relie l'interrupteur au point lumineux qu'il commande) ;
- le **schéma unifilaire** : le tableau de répartition, ses protections (disjoncteurs) et ses circuits, représentés par un seul trait par circuit.
!fig:symboles-elec|Symboles électriques usuels (à rappeler dans la légende)
Valeurs usuelles d'une installation domestique (selon la norme d'installation appliquée, en Afrique francophone souvent inspirée de la NF C 15-100) :
| Circuit | Section des conducteurs | Protection |
|---|---|---|
| Éclairage | 1,5 mm² | 10 A (16 A) |
| Prises de courant | 2,5 mm² | 16 à 20 A |
| Climatiseur (circuit dédié) | 2,5 à 4 mm² | 16 à 25 A |
| Cuisinière, plaque | 6 mm² | 32 A |
Hauteurs courantes : interrupteurs à **1,10 m**, prises à **0,30 m** (1,10 à 1,20 m au-dessus des plans de travail), tableau à hauteur d'homme. La protection différentielle 30 mA et la **mise à la terre** sont indispensables.

## Plomberie sanitaire
- **Alimentation** : eau froide (EF, souvent en bleu) et eau chaude (EC, en rouge) ; tuyaux PVC pression, PPR ou multicouche, Ø 20 à 32 mm ; compteur, vanne d'arrêt générale, robinets d'arrêt par pièce d'eau.
- **Évacuation** : eaux usées (**EU** : lavabos, douches, éviers), eaux vannes (**EV** : WC) et eaux pluviales (**EP** : toitures). Diamètres usuels : lavabo et douche Ø 40 à 50, évier Ø 40 à 50, **WC Ø 100**, chutes et collecteurs Ø 100 à 125, descentes EP Ø 80 à 100.
- Les canalisations sont repérées par leur nature, leur diamètre et leur pente : **PVC Ø 100 — p = 2 %**.

## Assainissement extérieur
Le plan d'assainissement (sur le plan de masse) montre le parcours des canalisations enterrées, les **regards** et l'exutoire :
- **réseau public** (branchement au collecteur de la rue) ou **assainissement autonome** : fosse septique + puisard ou tranchées d'épandage ;
- **système séparatif** (EU-EV d'un côté, EP de l'autre) ou **unitaire** ;
- un **regard** à chaque changement de direction, à chaque raccordement et au moins tous les 30 à 50 m en ligne droite ;
- pente des canalisations : **1 % minimum**, 2 à 3 % conseillés pour les eaux usées ;
- à chaque regard, on indique la **cote du terrain** (TN ou tampon) et la **cote du fil d'eau** (FE : niveau du fond intérieur du tuyau).
!fig:assainissement|Profil en long d'une canalisation : terrain, fil d'eau et profondeurs des regards
$$ FE aval = FE amont − pente × longueur      profondeur = cote tampon − FE

> [!exemple] Profondeur d'un regard
> Sortie de la maison : FE = 31,60 ; canalisation PVC Ø 125 à 2 % sur 18 m jusqu'au regard R2 : FE(R2) = 31,60 − 0,02 × 18 = **31,24**. Le tampon de R2 est à 32,10 : profondeur = 32,10 − 31,24 = **0,86 m**.

## La synthèse des réseaux
Avant de couler une dalle, on **superpose** les plans (architecture, structure, réseaux) pour vérifier que :
- chaque canalisation qui traverse une poutre ou une dalle a sa **réservation** dessinée sur le plan de coffrage ;
- les réseaux ne se croisent pas au même endroit (eau et électricité séparées) ;
- les pentes des évacuations sont possibles dans l'épaisseur disponible.

> [!retenir]
> - Électricité : plan d'implantation + schéma unifilaire ; légende des symboles obligatoire.
> - Plomberie : EF / EC ; évacuations EU, EV (WC Ø 100), EP.
> - Assainissement : regards aux changements de direction, pente ≥ 1 % ; FE aval = FE amont − p × L.
> - Synthèse : réservations sur les plans de coffrage avant de couler.`,
 sujet:{titre:"Réseaux d'une villa : électricité et assainissement", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous préparez les plans de réseaux d'une villa de plain-pied à Bassam.

**Données**
- Séjour de **6,00 × 4,80 m** : 2 points lumineux commandés par un va-et-vient (deux entrées), 6 prises de courant, 1 climatiseur ;
- Chambres (×3) : 1 point lumineux sur interrupteur simple, 3 prises, 1 climatiseur chacune ;
- Assainissement : sortie EU-EV de la maison au regard R1 (tampon **24,80**, FE **24,30**) ; R1 → R2 : **12,00 m** ; R2 → R3 : **15,00 m** ; R3 → regard de branchement RB sur la rue : **8,00 m**, FE du collecteur public au droit de RB : **23,60** ; cotes des tampons : R2 **24,70**, R3 **24,55**, RB **24,40** ; PVC Ø 125.

### Partie A — Électricité (8 points)
1. Expliquer la différence entre plan d'implantation et schéma unifilaire. (2 pts)
2. Combien de points lumineux, de prises et de circuits climatiseurs compte-t-on ? Proposer un découpage en circuits (au plus 8 prises par circuit de 2,5 mm²). (4 pts)
3. À quelles hauteurs placer interrupteurs et prises ? (2 pts)

### Partie B — Assainissement (10 points)
4. Calculer la pente maximale possible entre R1 et RB (FE de RB pris égal à 23,70, soit 10 cm au-dessus du collecteur). (3 pts)
5. Avec une pente uniforme de 2 %, calculer les FE de R2, R3 et RB. Le raccordement est-il possible ? (4 pts)
6. Calculer la profondeur de chaque regard. (3 pts)

### Partie C — Synthèse (2 points)
7. Que doit-on vérifier sur le plan de coffrage pour les réseaux ? (2 pts)`,
  corrige:`### Partie A — Électricité (8 pts)
1. **Plan d'implantation** : position des appareils (lumières, interrupteurs, prises) sur le plan de niveau, avec les liaisons de commande. **Schéma unifilaire** : le tableau, ses protections et ses circuits, chaque circuit étant représenté par un seul trait. *(2 pts)*
2. Points lumineux : 2 + 3 = **5** ; prises : 6 + 9 = **15** ; climatiseurs : **4**. Circuits : 1 circuit éclairage (1,5 mm², 10 A) ; **2 circuits prises** (8 + 7 prises, 2,5 mm², 16 ou 20 A) ; **4 circuits climatiseurs** dédiés ; soit au moins **7 circuits**, plus les circuits cuisine. *(4 pts)*
3. Interrupteurs à **1,10 m** ; prises à **0,30 m** (et 1,10 à 1,20 m au-dessus d'un plan de travail). *(2 pts)*

### Partie B — Assainissement (10 pts)
4. Longueur totale : 12 + 15 + 8 = **35 m** ; dénivelée : 24,30 − 23,70 = 0,60 m ; pente maximale **1,71 %**. *(3 pts)*
5. Avec 2 % : R2 = 24,30 − 0,24 = **24,06** ; R3 = 24,06 − 0,30 = **23,76** ; RB = 23,76 − 0,16 = **23,60** : c'est exactement le FE du collecteur, il ne reste pas la marge de 10 cm → **2 % n'est pas possible** ; on prend la pente maximale de **1,7 %** (≥ 1 % ✓). *(4 pts)*
Avec 1,7 % : R2 = 24,096 ≈ **24,10** ; R3 = 24,10 − 0,255 ≈ **23,84** ; RB ≈ **23,70** ✓.
6. Profondeurs (avec 1,7 %) : R1 : 24,80 − 24,30 = **0,50 m** ; R2 : 24,70 − 24,10 = **0,60 m** ; R3 : 24,55 − 23,84 = **0,71 m** ; RB : 24,40 − 23,70 = **0,70 m**. *(3 pts)*

### Partie C — Synthèse (2 pts)
7. Que chaque traversée de poutre, de longrine ou de dalle par une canalisation possède sa **réservation** (position, dimension, niveau) sur le plan de coffrage, et qu'aucune canalisation ne passe dans une semelle ou un poteau. *(2 pts)*`},
 exercices:[
  {t:"Reconnaître les eaux", d:1, e:`Classer en EU, EV ou EP : lavabo, WC, douche, gouttière de toiture, évier, urinoir, siphon de cour, machine à laver.`, c:`- **EU** (eaux usées) : lavabo, douche, évier, machine à laver ;
- **EV** (eaux vannes) : WC, urinoir ;
- **EP** (eaux pluviales) : gouttière de toiture, siphon de cour (s'il ne reçoit que la pluie).`},
  {t:"Fil d'eau", d:1, e:`Une canalisation de 22 m part d'un regard dont le FE est à 18,45 avec une pente de 1,5 %. Quel est le FE à l'arrivée ? Le tampon d'arrivée est à 19,20 : quelle est la profondeur du regard ?`, c:`FE arrivée = 18,45 − 0,015 × 22 = 18,45 − 0,33 = **18,12** ; profondeur = 19,20 − 18,12 = **1,08 m**.`},
  {t:"Pente disponible", d:2, e:`Le FE de sortie d'une maison est à 50,20 ; le collecteur public, à 40 m, a son FE à 49,90. Quelle pente maximale peut-on donner ? Est-ce acceptable ? Que faire sinon ?`, c:`Pente = (50,20 − 49,90) / 40 = 0,30 / 40 = **0,75 %** < 1 % : **insuffisant**. Solutions : sortir plus bas de la maison (abaisser le FE de départ en approfondissant), choisir un tracé plus court, ou installer une **station de relevage** (pompe).`},
  {t:"Circuits de prises", d:2, e:`Un appartement compte 23 prises de courant et 3 climatiseurs. Avec au plus 8 prises par circuit (2,5 mm²) et un circuit dédié par climatiseur, combien de circuits faut-il ? Ajouter l'éclairage (au plus 8 points par circuit) pour 14 points lumineux.`, c:`Prises : 23 / 8 = 2,9 → **3 circuits** ; climatiseurs : **3 circuits** ; éclairage : 14 / 8 = 1,75 → **2 circuits**. Total : **8 circuits** (plus la cuisine : plaque, four, lave-linge).`},
  {t:"Regards", d:2, e:`Un collecteur privé de 62 m en ligne droite reçoit deux raccordements (à 15 m et à 40 m) et change de direction à son extrémité. Combien de regards prévoir au minimum (en plus du regard de départ) si l'on impose un regard au moins tous les 30 m ?`, c:`Regards aux deux **raccordements** (15 m et 40 m), au **changement de direction** (62 m) : 3 regards. Intervalles : 0–15, 15–40 (25 m), 40–62 (22 m) : tous ≤ 30 m ✓. Au minimum **3 regards** en plus du regard de départ.`}
 ],
 quiz:[
  {q:"Les eaux vannes (EV) proviennent :", o:["Des lavabos","Des WC","Des toitures","Des douches"], r:1, e:"EV = WC et urinoirs."},
  {q:"La pente minimale courante d'une canalisation d'eaux usées est :", o:["0,1 %","1 %","10 %","25 %"], r:1, e:"1 % minimum, 2 à 3 % conseillés."},
  {q:"Le diamètre usuel de l'évacuation d'un WC est :", o:["Ø 32","Ø 40","Ø 100","Ø 250"], r:2, e:"Ø 100 mm."},
  {q:"Le fil d'eau (FE) est :", o:["Le niveau du tampon","Le niveau du fond intérieur du tuyau","Le diamètre du tuyau","La pente"], r:1, e:"Cote du radier de la canalisation."},
  {q:"Le schéma unifilaire représente :", o:["La position des prises dans les pièces","Le tableau et ses circuits","Le plan de masse","Les canalisations d'eau"], r:1, e:"Un trait par circuit, depuis le tableau."}
 ]},

{id:"dessin-15", niv:3, titre:"Toitures : plans, pentes et vraies grandeurs", duree:75, contenu:`## Le vocabulaire de la toiture
| Terme | Définition |
|---|---|
| **Versant** (pan) | surface plane inclinée de la couverture |
| **Faîtage** | arête horizontale supérieure, à la rencontre de deux versants |
| **Égout** | bord inférieur horizontal d'un versant, où l'eau s'écoule |
| **Rive** | bord latéral incliné d'un versant (côté pignon) |
| **Arêtier** | arête inclinée **saillante**, entre deux versants qui se rencontrent à un angle sortant |
| **Noue** | arête inclinée **rentrante** (angle rentrant), où l'eau se concentre |
| **Croupe** | versant triangulaire (ou trapézoïdal) en bout de bâtiment |
| **Pignon** | mur dont le sommet suit la pente des versants |
| **Débord** (avant-toit) | partie de la toiture en saillie des murs |
| **Rampant** | longueur d'un versant mesurée dans la pente |

## Les pentes
La pente se donne en **degrés** ou en **pourcentage** :
$$ p (%) = 100 × tan α      α = arctan(p / 100)
| α | 10° | 15° | 20° | 25° | 30° | 35° | 45° |
|---|---|---|---|---|---|---|---|
| p | 17,6 % | 26,8 % | 36,4 % | 46,6 % | 57,7 % | 70,0 % | 100 % |
La pente **minimale** dépend de la couverture et de la longueur du rampant (consulter le fabricant) : de l'ordre de **5 à 10 %** pour les bacs métalliques à grandes ondes, **15 à 20 %** et plus pour les tôles ondulées, **30 à 45 %** pour les tuiles ; **1 à 2 %** (forme de pente) pour une toiture terrasse étanchée.

## Dessiner un plan de toiture
On part du **contour de l'égout** (murs + débords). Quand tous les versants ont la **même pente** :
1. Chaque **arêtier** et chaque **noue** est la **bissectrice** de l'angle formé par les deux égouts en plan : à 45° pour un angle droit.
2. Le **faîtage** est à égale distance des deux égouts parallèles (au milieu du rectangle).
3. Les arêtiers et noues se rejoignent sur le faîtage ; on vérifie que chaque point de rencontre est à la même hauteur.
!fig:toiture-4pans|Plan d'une toiture à quatre pans et rabattement de l'arêtier
Pour un rectangle L × l à quatre pans égaux :
$$ faîtage = L − l      hauteur f = (l / 2) × tan α
$$ rampant = (l / 2) / cos α      arêtier en plan = (l / 2) × √2
$$ arêtier en vraie grandeur = √((l/2)² × 2 + f²)
Pour une maison en **L**, on décompose en rectangles : la **noue** part de l'angle rentrant à 45°, et le faîtage de l'aile la plus étroite est plus **bas** que celui de l'aile la plus large.

## Vraies grandeurs et surfaces
Sur le plan, les versants sont vus **en raccourci** : une longueur mesurée dans la pente est plus grande que sa projection. On obtient la **vraie grandeur** par **rabattement** : on fait tourner l'élément autour d'un axe horizontal jusqu'à le rendre parallèle au plan de dessin (pour un arêtier : triangle rectangle de base « arêtier en plan » et de hauteur f).
Propriété très utile pour le métré : quand tous les versants ont la même pente α,
$$ surface de couverture = surface en plan (débords compris) / cos α

> [!exemple] Toiture de 12,00 × 8,00 m à 4 pans, pente 25°
> f = 4,00 × tan 25° = **1,87 m** ; rampant = 4,00 / cos 25° = **4,41 m** ; faîtage = 12,00 − 8,00 = **4,00 m** ;
> arêtier en plan = 4,00 × 1,414 = 5,66 m ; en vraie grandeur √(5,66² + 1,87²) = **5,96 m** ;
> surface = 96 / cos 25° = 96 / 0,906 = **105,9 m²**.

## La charpente
- **Fermes** (triangulées : entrait, arbalétriers, poinçon, contrefiches) espacées de 3 à 4 m en bois, davantage en métal ; ou **murs pignons** porteurs.
- **Pannes** (faîtière, intermédiaires, sablières) portées par les fermes, espacées selon la couverture (1,00 à 1,50 m pour les bacs).
- **Chevrons** et liteaux pour les tuiles.
- **Arêtiers** et **noues** : pièces de charpente qui suivent les arêtes, de longueur égale à la **vraie grandeur**.
En coupe, on dessine les fermes coupées ou vues, les pannes en section, la couverture et le faux plafond.

## Les eaux pluviales
Gouttières (ou chéneaux) à l'égout, avec une légère pente (≈ 0,5 %) vers les **descentes** ; on prévoit environ **une descente Ø 100 pour 80 à 100 m²** de toiture en projection sous climat tropical (à vérifier selon l'intensité des pluies), et l'on évite les noues trop longues qui concentrent l'eau.

> [!retenir]
> - p = 100 tan α ; pente minimale selon la couverture.
> - Pentes égales : arêtiers et noues à 45° en plan (bissectrices), faîtage = L − l.
> - f = (l/2) tan α ; rampant = (l/2) / cos α ; surface = surface en plan / cos α.
> - Vraie grandeur par rabattement (triangle rectangle).`,
 sujet:{titre:"Plan de toiture d'une villa à quatre pans", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une villa de plain-pied à San-Pédro a un plan rectangulaire de **15,00 × 9,00 m** (nus extérieurs des murs). On réalise une toiture à **quatre pans** de même pente, couverte en bacs aluminium, avec des **débords de 0,80 m** sur tout le pourtour.

**Données** : pente **22°** ; pannes espacées au plus de **1,20 m** ; fermes métalliques ; plan de toiture au **1/100**.

### Partie A — Géométrie (10 points)
1. Calculer les dimensions du contour d'égout. (1 pt)
2. Calculer la longueur du faîtage et sa hauteur au-dessus du niveau de l'égout. (3 pts)
3. Calculer le rampant des versants. (2 pts)
4. Calculer la longueur d'un arêtier en plan et en vraie grandeur, puis la pente de l'arêtier. (4 pts)

### Partie B — Surfaces et quantités (6 points)
5. Calculer la surface de chaque long pan, de chaque croupe, et la surface totale ; vérifier par la formule surface en plan / cos α. (4 pts)
6. Combien de files de pannes par versant faut-il ? Combien de descentes d'eaux pluviales prévoir ? (2 pts)

### Partie C — Dessin (4 points)
7. Décrire la construction du plan de toiture au 1/100 (dimensions sur le papier, traits, indications). (4 pts)`,
  corrige:`### Partie A — Géométrie (10 pts)
1. 15,00 + 2 × 0,80 = **16,60 m** ; 9,00 + 1,60 = **10,60 m**. *(1 pt)*
2. Faîtage : 16,60 − 10,60 = **6,00 m** ; f = 5,30 × tan 22° = 5,30 × 0,404 = **2,14 m**. *(3 pts)*
3. Rampant = 5,30 / cos 22° = 5,30 / 0,927 = **5,72 m**. *(2 pts)*
4. Arêtier en plan = 5,30 × √2 = **7,50 m** ; vraie grandeur = √(7,50² + 2,14²) = √(56,18 + 4,58) = **7,79 m** ; pente : arctan(2,14 / 7,50) = **15,9°** (plus faible que celle des versants). *(4 pts)*

### Partie B — Surfaces (6 pts)
5. Long pan (trapèze) : (16,60 + 6,00) / 2 × 5,72 = **64,64 m²** ; croupe (triangle) : 10,60 × 5,72 / 2 = **30,32 m²** ; total : 2 × 64,64 + 2 × 30,32 = **189,9 m²**. Vérification : 16,60 × 10,60 / cos 22° = 175,96 / 0,927 = **189,8 m²** ✓. *(4 pts)*
6. Pannes : 5,72 / 1,20 = 4,8 → 5 intervalles → **6 files** par versant (sablière et faîtière comprises). Descentes : 176 m² en projection / 80 à 100 m² → **2 descentes** Ø 100 au minimum ; on en place souvent **4** (une à chaque angle) pour raccourcir le parcours de l'eau dans les gouttières. *(2 pts)*

### Partie C — Dessin (4 pts)
7. Contour d'égout : **16,6 × 10,6 cm** en trait fort ; murs (15 × 9 cm) en **trait interrompu** sous la toiture ; arêtiers à **45°** depuis les angles (5,3 cm de recul), faîtage de **6 cm** au centre ; flèches de pente sur chaque versant avec la valeur (22° ou 40 %) ; position des descentes ; cotes du contour, des débords et du faîtage ; titre et échelle. *(4 pts)*`},
 exercices:[
  {t:"Conversions de pentes", d:1, e:`1. Convertir en % : 12°, 18°, 30°.
2. Convertir en degrés : 15 %, 35 %, 100 %.`, c:`1. tan 12° = 0,213 → **21,3 %** ; tan 18° = 0,325 → **32,5 %** ; tan 30° = 0,577 → **57,7 %**.
2. arctan 0,15 = **8,5°** ; arctan 0,35 = **19,3°** ; arctan 1 = **45°**.`},
  {t:"Toiture à deux versants", d:1, e:`Une maison de 10,00 m de large (portée) a une toiture à deux versants de pente 30 %, débords de 0,50 m. Calculer la hauteur du faîtage au-dessus de l'égout et la longueur du rampant.`, c:`Demi-largeur à l'égout : 5,00 + 0,50 = 5,50 m ; f = 5,50 × 0,30 = **1,65 m** au-dessus de l'égout (1,50 m au-dessus du haut des murs).
α = arctan 0,30 = 16,7° ; rampant = 5,50 / cos 16,7° = **5,74 m**.`},
  {t:"Arêtier en vraie grandeur", d:2, e:`Toiture à 4 pans sur un contour de 14,00 × 9,00 m, pente 30°. Calculer f, la longueur de l'arêtier en plan et en vraie grandeur, et la longueur du faîtage.`, c:`f = 4,50 × tan 30° = **2,60 m** ; arêtier en plan = 4,50 × √2 = **6,36 m** ; vraie grandeur = √(6,36² + 2,60²) = √(40,5 + 6,75) = **6,87 m** ; faîtage = 14,00 − 9,00 = **5,00 m**.`},
  {t:"Surface de couverture", d:2, e:`Une toiture à pans de même pente (20°) couvre une maison en L dont le contour d'égout a une surface en plan de 148 m². Calculer la surface de couverture et le nombre de bacs de 1,00 m de largeur utile si le rampant moyen est de 5,20 m (ajouter 10 % pour les coupes des arêtiers et noues).`, c:`Surface = 148 / cos 20° = 148 / 0,940 = **157,5 m²**.
Bacs : 157,5 m² / (1,00 × 5,20) = 30,3 → avec 10 % de pertes : 33,3 → **34 bacs** équivalents de 5,20 m (en pratique on commande par longueurs sur mesure, versant par versant).`},
  {t:"Noue d'une maison en L", d:3, e:`Une maison en L est formée de deux ailes de 8,00 m et 6,00 m de large, toutes deux couvertes à 25°. Quelles sont les hauteurs des deux faîtages ? Comment se raccordent-ils ?`, c:`Aile de 8,00 m : f = 4,00 × tan 25° = **1,87 m** ; aile de 6,00 m : f = 3,00 × tan 25° = **1,40 m**.
Le faîtage de l'aile étroite est **plus bas** de 0,47 m : il vient buter sur le versant de l'aile large. Les deux **noues** partent de l'angle rentrant à 45° en plan et rejoignent l'extrémité du faîtage bas sur ce versant.`}
 ],
 quiz:[
  {q:"Une pente de 100 % correspond à :", o:["90°","45°","100°","30°"], r:1, e:"tan 45° = 1."},
  {q:"L'arête rentrante entre deux versants s'appelle :", o:["Arêtier","Noue","Faîtage","Rive"], r:1, e:"La noue recueille l'eau."},
  {q:"Pour un toit à 4 pans égaux sur un rectangle L × l, le faîtage mesure :", o:["L","L − l","l / 2","L + l"], r:1, e:"Les arêtiers à 45° retirent l/2 à chaque bout."},
  {q:"Avec des pentes égales α, la surface de couverture vaut :", o:["Surface en plan × cos α","Surface en plan / cos α","Surface en plan × tan α","Surface en plan"], r:1, e:"Chaque pan est agrandi de 1/cos α."},
  {q:"La vraie grandeur d'un arêtier s'obtient par :", o:["Une projection","Un rabattement","Une perspective","Une section"], r:1, e:"Triangle rectangle : plan et hauteur."}
 ]},

{id:"dessin-16", niv:3, titre:"Plan de situation, plan de masse et implantation", duree:70, contenu:`## Le plan de situation
Il permet de **trouver le terrain** : extrait de plan de ville ou de lotissement à **1/2 000 – 1/5 000** (ou carte au 1/25 000 en zone rurale), avec le terrain repéré (contour, hachure), le **nord**, les voies d'accès, des repères (carrefour, école, marché), le nom du quartier et le numéro de lot (îlot, lot).

## Le plan de masse
À **1/200 – 1/500**, il montre le **bâtiment sur sa parcelle** :
!fig:plan-masse|Plan de masse : parcelle, bornes, emprise, reculs, accès, niveaux et nord
- les **limites** de la parcelle et les **bornes** (B1, B2…), avec les longueurs des côtés et la surface ;
- l'**emprise** du bâtiment (contour extérieur, souvent grisé ou hachuré) et ses dimensions ;
- les **reculs** (distances aux limites et à l'alignement de la voie), qui doivent respecter le règlement d'urbanisme ;
- les **accès** (portail, allée, stationnement), la **clôture** ;
- les **réseaux** : branchement d'eau, d'électricité, assainissement (fosse septique, puisard, regards, raccordement à l'égout), évacuation des eaux pluviales ;
- les **niveaux** : terrain naturel (TN) aux angles, **±0,00** du bâtiment rattaché à une altitude, niveaux des allées et de la voie ;
- les **plantations** existantes et projetées, le **nord**, l'échelle.

## Les règles d'urbanisme
Le règlement du lotissement ou du plan d'urbanisme fixe en particulier :
| Règle | Définition |
|---|---|
| **CES** (coefficient d'emprise au sol) | emprise du bâtiment / surface de la parcelle |
| **COS** (coefficient d'occupation du sol) | surface de plancher (tous niveaux) / surface de la parcelle |
| **Reculs** | distances minimales aux limites séparatives et à l'alignement |
| **Hauteur maximale** | en mètres ou en nombre de niveaux (R+1, R+2…) |
$$ CES = emprise / surface parcelle      COS = surface de plancher / surface parcelle

> [!exemple] Vérifier un projet
> Parcelle de 600 m² ; villa R+1 d'emprise 20,00 × 12,00 = 240 m² ; surface de plancher : 2 × 216 = 432 m².
> CES = 240 / 600 = **0,40** ; COS = 432 / 600 = **0,72**. Si le règlement impose CES ≤ 0,50 et COS ≤ 1,0 : **conforme**.
> Les valeurs maximales dépendent de chaque zone : on les lit dans le règlement applicable (cahier des charges du lotissement, plan d'urbanisme).

## De la parcelle à l'implantation
Le **plan d'implantation** donne au géomètre et au chef de chantier tout ce qu'il faut pour placer le bâtiment :
- les **axes** principaux (ou les nus des murs) cotés **à partir des bornes** ou d'une ligne de référence (alignement de la voie) ;
- ou les **coordonnées** X, Y des angles et des axes dans le repère du géomètre ;
- le **repère de nivellement** et l'altitude du ±0,00.
Sur le terrain : on implante deux points d'un axe, on trace les perpendiculaires (station totale, équerre optique ou triangle 3-4-5), on **contrôle les diagonales**, puis on reporte les axes sur des **chaises** (planches horizontales clouées sur des piquets, hors de l'emprise des fouilles) où l'on tend des **cordeaux**.

> [!exemple] Implantation par rapport à une limite
> La façade principale doit être à **5,00 m** de l'alignement de la voie et le pignon gauche à **4,00 m** de la limite séparative. On mesure 5,00 m perpendiculairement à l'alignement en deux points (A et B), on tend le cordeau AB : c'est le nu de la façade ; sur cette ligne, on place l'angle à 4,00 m de la limite, puis on trace la perpendiculaire.

## Terrassements et niveaux
Le plan de masse permet aussi de calculer les terrassements : décapage de la terre végétale (10 à 20 cm), **plateforme** au niveau voulu, déblais et remblais, pente des allées (2 % pour l'écoulement vers la voie ou les caniveaux).

> [!retenir]
> - Situation : où est le terrain (1/2 000 – 1/5 000) ; masse : le bâtiment sur la parcelle (1/200 – 1/500).
> - Plan de masse : limites, bornes, emprise, reculs, accès, réseaux, niveaux, nord.
> - CES = emprise / parcelle ; COS = surface de plancher / parcelle.
> - Implantation : axes cotés depuis les bornes, perpendiculaires, diagonales, chaises et cordeaux.`,
 sujet:{titre:"Plan de masse et implantation d'une villa sur un lot de 500 m²", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un client a acquis à Abatta un **lot rectangulaire de 20,00 m × 25,00 m**, le petit côté donnant sur une voie de 10 m. Il veut une villa **R+1** et une guérite.

**Données**
- Règlement du lotissement : recul de **5,00 m** à l'alignement de la voie, **3,00 m** aux limites séparatives ; **CES ≤ 0,45** ; **COS ≤ 0,90** ;
- Villa : rectangle de **12,60 × 10,40 m** (emprise), deux niveaux identiques ; guérite de **2,50 × 2,50 m** à l'entrée ;
- Altitudes du terrain naturel aux angles : bord de voie **12,40** (deux angles) ; fond de parcelle **13,10** (deux angles) ; ±0,00 de la villa : **+0,45 au-dessus du TN moyen** sous l'emprise.

### Partie A — Règles d'urbanisme (7 points)
1. Calculer la surface de la parcelle, l'emprise totale (villa + guérite), le CES et le COS (surface de plancher : on compte 90 % de l'emprise par niveau). Conclure. (5 pts)
2. Quelle est la plus grande largeur possible du bâtiment compte tenu des reculs latéraux ? (2 pts)

### Partie B — Plan de masse (7 points)
3. Choisir l'échelle du plan de masse pour un A3 (zone utile 39 × 27,7 cm). (2 pts)
4. La villa est centrée en largeur et placée au recul minimal de la voie. Donner les distances aux quatre limites. (3 pts)
5. Calculer l'altitude du ±0,00 (le TN varie linéairement de la voie au fond). (2 pts)

### Partie C — Implantation (6 points)
6. Décrire la méthode d'implantation de la villa à partir des bornes. (3 pts)
7. Quelle longueur doivent avoir les diagonales de la villa ? (1 pt)
8. Quel est le rôle des chaises d'implantation ? (2 pts)`,
  corrige:`### Partie A — Urbanisme (7 pts)
1. Parcelle : 20 × 25 = **500 m²** ; emprise : 12,60 × 10,40 + 2,50 × 2,50 = 131,04 + 6,25 = **137,29 m²** ; **CES = 0,27** ≤ 0,45 ✓. Surface de plancher : 2 × 0,90 × 131,04 + 0,90 × 6,25 = 235,87 + 5,63 = **241,5 m²** ; **COS = 0,48** ≤ 0,90 ✓. **Projet conforme.** *(5 pts)*
2. 20,00 − 2 × 3,00 = **14,00 m** : la villa (12,60 m de large côté voie) tient. *(2 pts)*

### Partie B — Plan de masse (7 pts)
3. 25 m sur 27,7 cm : E ≤ 27,7 / 2 500 = 1/90 → au **1/100** : 20 × 25 cm, il reste la place du cartouche à côté (39 − 20 = 19 cm ≥ 18) ✓ ; le **1/200** est possible mais petit. *(2 pts)*
4. Latérales : (20,00 − 12,60) / 2 = **3,70 m** de chaque côté (≥ 3,00 ✓) ; voie : **5,00 m** ; fond : 25,00 − 5,00 − 10,40 = **9,60 m**. *(3 pts)*
5. TN sous l'emprise : à 5,00 m de la voie : 12,40 + 0,70 × 5/25 = 12,54 ; à 15,40 m : 12,40 + 0,70 × 15,4/25 = 12,83 ; TN moyen ≈ **12,69** ; ±0,00 = 12,69 + 0,45 = **13,14**. *(2 pts)*

### Partie C — Implantation (6 pts)
6. Repérer les bornes ; matérialiser l'**alignement** de la voie ; reporter 5,00 m perpendiculairement en deux points pour obtenir la ligne de façade ; placer les angles à 3,70 m des limites latérales ; tracer les perpendiculaires (station totale, équerre optique ou 3-4-5 : 6-8-10 m) ; reporter 10,40 m ; contrôler les diagonales ; reporter les axes sur des chaises. *(3 pts)*
7. √(12,60² + 10,40²) = √(158,76 + 108,16) = √266,92 = **16,34 m**. *(1 pt)*
8. Les chaises, placées **hors de l'emprise** des fouilles, gardent la position des **axes** (clous, traits de scie) pendant les terrassements : on y retend les cordeaux à chaque étape (fouilles, semelles, murs) ; elles peuvent aussi porter le **niveau** de référence. *(2 pts)*`},
 exercices:[
  {t:"CES et COS", d:1, e:`Parcelle de 450 m² ; maison R+2 d'emprise 150 m² ; surface de plancher par niveau 135 m². Calculer CES et COS.`, c:`CES = 150 / 450 = **0,33** ; COS = 3 × 135 / 450 = 405 / 450 = **0,90**.`},
  {t:"Emprise maximale", d:2, e:`Sur une parcelle de 25 × 30 m, avec CES ≤ 0,40 et reculs de 5 m sur la voie (côté 25 m) et de 3 m sur les autres limites, quelle est l'emprise maximale autorisée ? Le rectangle constructible permet-il de l'atteindre ?`, c:`Par le CES : 0,40 × 750 = **300 m²**. Rectangle constructible : (25 − 2 × 3) × (30 − 5 − 3) = 19 × 22 = **418 m²** ≥ 300 : oui, le CES est la règle la plus contraignante.`},
  {t:"Échelle du plan de masse", d:1, e:`Une parcelle de 32 × 45 m doit être dessinée sur un A3 (zone utile 39 × 27,7 cm) avec un cartouche de 18 × 5 cm. Choisir l'échelle normalisée.`, c:`Au 1/200 : 16 × 22,5 cm ; le cartouche se place à côté (39 − 16 = 23 cm ≥ 18) ✓. Au 1/100 : 32 × 45 cm, trop grand. → **1/200**.`},
  {t:"Altitude du ±0,00", d:2, e:`Le TN est à 20,30 en façade et 20,90 au fond d'une maison de 12 m de profondeur. On veut le ±0,00 à 0,40 m au-dessus du point le plus haut du terrain sous la maison. Quelle est son altitude ? Combien de marches (≤ 17 cm) faut-il pour entrer par la façade ?`, c:`±0,00 = 20,90 + 0,40 = **21,30**. Hauteur à monter en façade : 21,30 − 20,30 = **1,00 m** → 1,00 / 0,17 = 5,9 → **6 marches** de 16,7 cm.`},
  {t:"Coordonnées d'implantation", d:3, e:`Dans le repère du géomètre, l'angle A de la villa a pour coordonnées (100,00 ; 200,00) et la façade AB est orientée selon l'axe X (B à droite de A). La villa mesure 12,00 m (AB) × 9,00 m (vers les Y croissants). Donner les coordonnées de B, C et D, et la longueur des diagonales.`, c:`B (112,00 ; 200,00) ; C (112,00 ; 209,00) ; D (100,00 ; 209,00).
Diagonales AC = BD = √(12² + 9²) = **15,00 m**.`}
 ],
 quiz:[
  {q:"Le CES est le rapport :", o:["Surface de plancher / parcelle","Emprise / parcelle","Parcelle / emprise","Hauteur / largeur"], r:1, e:"Coefficient d'emprise au sol."},
  {q:"Le plan de masse est en général à l'échelle :", o:["1/20","1/50","1/200 à 1/500","1/25 000"], r:2, e:"Il montre la parcelle entière."},
  {q:"Les chaises d'implantation servent à :", o:["S'asseoir sur le chantier","Conserver les axes hors des fouilles","Mesurer les pentes","Couler le béton"], r:1, e:"On y retend les cordeaux à chaque étape."},
  {q:"Le COS d'une maison R+1 de 100 m² de plancher par niveau sur 400 m² vaut :", o:["0,25","0,50","1","2"], r:1, e:"200 / 400 = 0,50."},
  {q:"Sur le plan de masse, les bornes indiquent :", o:["Les angles du bâtiment","Les limites de la parcelle","Les regards","Les arbres"], r:1, e:"Les sommets de la parcelle."}
 ]},

{id:"dessin-17", niv:3, titre:"Le dossier de plans : permis de construire et exécution", duree:60, contenu:`## Les phases d'un projet
Un projet passe par des **phases** successives ; à chacune correspondent des plans plus précis :
| Phase | Contenu des plans | Échelles |
|---|---|---|
| **Esquisse** (ESQ) | organisation générale, volumes, implantation | 1/200 – 1/500 |
| **Avant-projet sommaire** (APS) | plans, coupes, façades, surfaces | 1/100 – 1/200 |
| **Avant-projet définitif** (APD) | dimensions arrêtées, matériaux, estimation | 1/100 – 1/50 |
| **Dossier de permis de construire** (PC) | pièces réglementaires (voir ci-dessous) | 1/100 – 1/500 |
| **Projet / dossier de consultation** (PRO, DCE) | plans cotés, détails, descriptif, pour consulter les entreprises | 1/50 |
| **Exécution** (EXE) | plans de chantier : coffrage, ferraillage, réseaux, détails, synthèse | 1/50 – 1/1 |
| **Récolement** (DOE) | ouvrage tel que construit, réseaux enterrés | 1/50 – 1/200 |

## Le dossier de permis de construire
Les pièces exigées dépendent de la réglementation de chaque pays et de la commune ; un dossier comprend en général :
- **pièces graphiques** : plan de situation, plan de masse (avec réseaux et niveaux), plans de tous les niveaux, plan de toiture, façades, au moins une coupe, éventuellement une perspective ou une insertion du projet dans son environnement ;
- **pièces écrites** : formulaire de demande, justificatif de propriété du terrain (en Côte d'Ivoire, par exemple l'arrêté de concession définitive ou le titre foncier), notice descriptive, éventuelle étude de sol ou note de structure pour les bâtiments importants ;
- les plans signés par un **architecte** lorsque la réglementation l'impose.
En Côte d'Ivoire, la demande est instruite par les services du ministère chargé de la construction (guichet unique du permis de construire à Abidjan) : la liste à jour des pièces est à vérifier auprès du service instructeur avant tout dépôt.

> [!attention]
> Le permis vérifie la conformité aux règles d'urbanisme (CES, COS, reculs, hauteurs, aspect). Il ne remplace ni les plans d'exécution ni l'étude de structure : on ne construit pas avec les seuls plans du permis.

## Organiser un dossier de plans
- **Codification** : chaque plan a un numéro unique qui indique le lot et le type, par exemple **A-03** (architecture, plan n° 3), **S-12** (structure), **E-02** (électricité), **P-04** (plomberie).
- **Indice** de révision : A, B, C… à chaque modification, avec un **tableau des indices** dans le cartouche (indice, date, objet de la modification, auteur). On **entoure** ou on signale les zones modifiées sur le plan (nuage de révision).
- **Bordereau** (liste des plans) : numéro, titre, échelle, format, indice en vigueur, date ; il est diffusé avec chaque envoi.
- **Diffusion** : visa du maître d'œuvre et du bureau de contrôle, mention « bon pour exécution » (BPE) ; on retire du chantier les tirages périmés.
- **Formats numériques** : PDF pour la diffusion, fichiers DAO (DWG, DXF) ou maquette (IFC) pour l'échange entre bureaux d'études.

> [!exemple] Tableau des indices du plan A-03
> | Ind. | Date | Objet | Auteur |
> |---|---|---|---|
> | A | 05/03/2026 | Première diffusion (APD) | K. Y. |
> | B | 22/04/2026 | Déplacement de la cuisine, ajout d'une fenêtre F2 | K. Y. |
> | C | 10/06/2026 | Mise à jour EXE : réservations des gaines | A. B. |
> Sur le chantier, seul l'indice **C** est valable.

## La cohérence du dossier
Avant de diffuser, on vérifie que :
- les **cotes** concordent entre plans, coupes, façades et plans de structure ;
- les **ouvertures** du plan figurent sur les façades, aux mêmes positions, avec les mêmes dimensions que dans le **tableau des menuiseries** ;
- les **niveaux** sont identiques sur tous les plans ;
- les **réservations** des réseaux figurent sur les plans de coffrage ;
- chaque plan porte le bon **cartouche**, la bonne échelle, le **nord**, une **légende**.

> [!retenir]
> - ESQ → APS → APD → PC → PRO/DCE → EXE → récolement.
> - Permis : situation, masse, niveaux, coupes, façades, toiture + pièces écrites ; à vérifier auprès du service instructeur.
> - Codification, indices, bordereau, visa « bon pour exécution ».
> - Un seul indice valable sur le chantier : le dernier.`,
 sujet:{titre:"Constituer le dossier d'une villa R+1", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes dessinateur projeteur dans un cabinet d'architecture à Abidjan. Le projet d'une villa R+1 passe de l'APD au permis de construire, puis à l'exécution.

**Données** : villa de 220 m² de plancher sur un lot de 600 m² ; structure en béton armé (poteaux, poutres, dalles en hourdis) ; assainissement autonome (fosse septique + puisard).

### Partie A — Phases (6 points)
1. Classer dans l'ordre chronologique : DCE, esquisse, plans de récolement, APD, plans d'exécution, permis de construire, APS. (3 pts)
2. Quelle est la différence essentielle entre un plan de permis de construire et un plan d'exécution ? (3 pts)

### Partie B — Permis de construire (6 points)
3. Établir la liste des pièces graphiques du dossier de permis avec, pour chacune, une échelle adaptée. (4 pts)
4. Citer deux pièces écrites. Pourquoi faut-il consulter le service instructeur avant le dépôt ? (2 pts)

### Partie C — Organisation (8 points)
5. Proposer une codification des plans d'exécution (architecture, structure, électricité, plomberie) avec un exemple pour chaque lot. (3 pts)
6. Le plan S-05 (coffrage du plancher haut RDC) passe de l'indice B à l'indice C pour ajouter deux réservations. Que faut-il faire ? (3 pts)
7. Citer deux vérifications de cohérence entre les plans d'architecture et de structure. (2 pts)`,
  corrige:`### Partie A — Phases (6 pts)
1. **Esquisse → APS → APD → permis de construire → DCE → plans d'exécution → plans de récolement**. *(3 pts)*
2. Le plan de **permis** montre le projet pour vérifier sa **conformité réglementaire** (implantation, surfaces, aspect, hauteurs) ; le plan d'**exécution** est complet, coté, détaillé et coordonné avec les autres lots pour **construire** (coffrage, ferraillage, réseaux, détails). *(3 pts)*

### Partie B — Permis (6 pts)
3. Plan de situation (1/2 000 à 1/5 000) ; plan de masse avec réseaux et niveaux (1/200 ou 1/500) ; plans du RDC et de l'étage (1/100) ; plan de toiture (1/100 – 1/200) ; façades (1/100) ; coupe(s) (1/100) ; éventuellement une perspective. *(4 pts)*
4. Formulaire de demande, justificatif de propriété (ACD, titre foncier), notice descriptive, étude de sol. Les pièces exigées **changent selon les pays, les communes et les époques** : un dossier incomplet est retourné et retarde le chantier. *(2 pts)*

### Partie C — Organisation (8 pts)
5. Par exemple : **A-01** plan du RDC, A-02 plan de l'étage… ; **S-01** plan de fondations, S-05 coffrage du plancher haut RDC… ; **E-01** électricité RDC ; **P-01** plomberie RDC. *(3 pts)*
6. Modifier le plan en **signalant** les réservations ajoutées (nuage), passer l'indice à **C** et remplir le tableau des indices (date, objet, auteur), mettre à jour le **bordereau**, diffuser le plan à tous les intervenants avec visa, et **retirer** l'indice B du chantier. *(3 pts)*
7. Les **axes** et les **cotes** des poteaux et poutres concordent avec les murs ; les **niveaux** (bruts / finis) sont cohérents ; les retombées de poutres ne coupent pas les ouvertures ; les trémies d'escalier ont les mêmes dimensions. *(2 pts)*`},
 exercices:[
  {t:"Phases et échelles", d:1, e:`Associer chaque document à sa phase et à une échelle : plan de ferraillage d'une poutre ; esquisse d'implantation ; plan de récolement des réseaux ; plan du RDC pour le permis.`, c:`- Ferraillage d'une poutre : **EXE**, 1/20 – 1/50 ;
- Esquisse d'implantation : **ESQ**, 1/200 – 1/500 ;
- Récolement des réseaux : **DOE**, 1/100 – 1/200 ;
- Plan du RDC pour le permis : **PC**, 1/100.`},
  {t:"Lire un tableau d'indices", d:1, e:`Un plan porte les indices A (03/02), B (15/03), C (02/05). Sur le chantier, le chef d'équipe travaille sur un tirage à l'indice B. Que faire ?`, c:`Arrêter le travail concerné, **vérifier** ce qui a changé entre B et C (tableau des indices, nuages), remplacer le tirage par l'**indice C** et détruire (ou barrer « périmé ») l'ancien. Si des travaux ont déjà été faits selon B, prévenir le conducteur de travaux.`},
  {t:"Bordereau de plans", d:2, e:`Rédiger le bordereau d'un envoi de 5 plans d'architecture d'une villa : plans du RDC et de l'étage au 1/50 (A1), façades et coupes au 1/50 (A1), plan de toiture au 1/100 (A2), indice B pour les deux premiers, A pour les autres.`, c:`| N° | Titre | Échelle | Format | Indice |
|---|---|---|---|---|
| A-01 | Plan du rez-de-chaussée | 1/50 | A1 | B |
| A-02 | Plan de l'étage | 1/50 | A1 | B |
| A-03 | Façades | 1/50 | A1 | A |
| A-04 | Coupes | 1/50 | A1 | A |
| A-05 | Plan de toiture | 1/100 | A2 | A |
Avec la date d'envoi, les destinataires et le visa.`},
  {t:"Cohérence plan / façade", d:2, e:`Sur le plan, la chambre 2 a une fenêtre F2 (1,20 × 1,20, all. 1,00) sur la façade est ; sur la façade est, on voit une fenêtre de 1,40 × 1,20 à cet endroit. Que faire ?`, c:`Il y a une **incohérence** : consulter le **tableau des menuiseries** et l'architecte pour savoir quelle dimension est la bonne ; corriger le plan ou la façade, **changer l'indice** du plan corrigé et le rediffuser. On ne commande pas la menuiserie tant que la question n'est pas tranchée.`},
  {t:"Liste du permis", d:1, e:`Citer les pièces graphiques usuelles d'un permis de construire et dire laquelle permet de vérifier le CES.`, c:`Plan de situation, **plan de masse**, plans de niveaux, plan de toiture, façades, coupes (et éventuellement une perspective). Le **plan de masse** (emprise et surface de la parcelle) permet de vérifier le CES ; les plans de niveaux permettent de calculer la surface de plancher pour le COS.`}
 ],
 quiz:[
  {q:"La phase qui précède immédiatement l'APD est :", o:["L'APS","Le DCE","L'exécution","Le récolement"], r:0, e:"ESQ → APS → APD."},
  {q:"L'indice de révision d'un plan sert à :", o:["Donner l'échelle","Identifier la version du plan","Donner le format","Numéroter les pièces"], r:1, e:"A, B, C… avec tableau des modifications."},
  {q:"Le plan de récolement montre :", o:["Le projet initial","L'ouvrage tel que construit","Le permis de construire","L'esquisse"], r:1, e:"Il est établi après les travaux."},
  {q:"Un plan de permis de construire suffit-il pour construire ?", o:["Oui","Non, il faut les plans d'exécution","Seulement pour une villa","Seulement en R+1"], r:1, e:"Il manque coffrage, ferraillage, réseaux, détails."},
  {q:"Le bordereau de plans est :", o:["Un plan de masse","La liste des plans avec leurs indices","Un détail de menuiserie","Une note de calcul"], r:1, e:"Il accompagne chaque diffusion."}
 ]},

{id:"dessin-18", niv:3, titre:"Du dessin à la DAO et à la maquette numérique ; perspective conique", duree:70, contenu:`## La DAO : dessiner en vraie grandeur
En **DAO** (dessin assisté par ordinateur : AutoCAD, ArchiCAD, Revit, SketchUp, ou des logiciels gratuits comme LibreCAD, QCAD, FreeCAD), on ne dessine plus « à l'échelle » : on dessine en **vraie grandeur** dans l'**espace objet** (une unité = 1 cm ou 1 m, à fixer une fois pour toutes), et l'échelle n'intervient qu'à la **mise en page** (espace papier), où chaque **fenêtre** affiche le modèle à 1/50, 1/100…
L'atelier de dessin de la plateforme fonctionne sur ce principe : on dessine murs, ouvertures et cotes en mètres, puis on exporte ou on imprime.

## Organiser son dessin
- **Calques** (layers) : un calque par famille d'objets, avec sa couleur, son type de ligne et son épaisseur : MURS (0,5), CLOISONS (0,35), MENUISERIES (0,25), COTES (0,18), HACHURES (0,13), AXES (mixte), MOBILIER, TEXTES… On peut ainsi masquer, verrouiller ou imprimer sélectivement.
- **Blocs** : éléments répétitifs (portes, fenêtres, sanitaires, cartouche) dessinés une fois et insérés autant de fois que nécessaire ; modifier le bloc modifie toutes ses copies.
- **Styles** de texte et de cote : hauteur sur le papier (2,5 mm, 3,5 mm…), extrémités en traits obliques, unité et précision.
- **Références externes** : le plan d'architecte inséré comme fond de plan dans les plans de structure ou de réseaux, mis à jour automatiquement.

> [!exemple] Hauteur des textes dans l'espace objet
> Si l'on dessine en centimètres et qu'on imprime au 1/50, un texte qui doit mesurer **2,5 mm** sur le papier doit mesurer dans le modèle 2,5 mm × 50 = 125 mm = **12,5 unités** (cm). Les styles **annotatifs** font ce calcul automatiquement.

## Commandes essentielles
| Commande | Usage en bâtiment |
|---|---|
| Ligne, polyligne | contours, murs |
| **Décaler** (offset) | épaisseur des murs à partir des axes |
| **Ajuster / prolonger** (trim / extend) | nettoyer les intersections de murs |
| Copier, déplacer, rotation, **miroir** | répéter des éléments, plans symétriques |
| **Réseau** (array) | poteaux, marches, chevrons |
| Hachures | murs coupés, matériaux |
| Cotation linéaire, continue, de base | lignes de cotes en chaîne et cumulées |
| Accrochages (extrémité, milieu, intersection, perpendiculaire) | précision du dessin |

## La maquette numérique (BIM)
Avec un logiciel **BIM** (modélisation des informations du bâtiment), on ne dessine plus des traits mais des **objets** (mur, dalle, poteau, porte) qui portent leurs **propriétés** (matériau, épaisseur, résistance, prix). Plans, coupes, façades, perspectives et **métrés** sont **extraits** automatiquement de la même maquette : une modification se répercute partout. L'échange entre logiciels se fait au format **IFC**. Le BIM facilite la **synthèse** (détection des conflits entre structure et réseaux) et la gestion du bâtiment après livraison.

## La perspective conique
C'est la perspective de l'œil et de l'appareil photo : les objets **lointains paraissent plus petits** et les droites parallèles **convergent** vers des **points de fuite**.
!fig:perspective-conique|Perspective conique à deux points de fuite
- La **ligne d'horizon** est à la hauteur des yeux de l'observateur (≈ **1,60 m** pour une vue à hauteur d'homme ; plus haut pour une vue « aérienne »).
- Les droites horizontales parallèles fuient vers un **point de fuite situé sur l'horizon**.
- **Un point de fuite** (perspective frontale) : une face de l'objet est parallèle au tableau ; idéale pour les vues d'**intérieur** (couloir, pièce vue de face).
- **Deux points de fuite** (perspective oblique ou angulaire) : l'objet est vu par un angle ; c'est la vue classique d'une **maison**.
- **Trois points de fuite** : vue plongeante ou contre-plongeante (immeuble de grande hauteur).
Méthode simplifiée à deux points de fuite : tracer l'horizon, placer PF1 et PF2 assez éloignés (sinon la vue est déformée), dessiner l'**arête verticale la plus proche** en vraie grandeur (à l'échelle), relier ses extrémités aux deux points de fuite, choisir la profondeur des faces (à l'œil ou par la méthode des points de mesure), tracer les autres verticales, puis détailler (ouvertures, toiture) en reliant toujours aux points de fuite.

> [!exemple] Où placer l'horizon ?
> Pour une maison R+1 de 7 m de haut vue par un passant, l'horizon est à 1,60 m : on voit le **dessous** des débords de toiture et le **dessus** des marches. Pour une vue aérienne du même projet, on place l'horizon au-dessus du toit : on voit la toiture.

> [!retenir]
> - DAO : dessiner en vraie grandeur ; l'échelle n'intervient qu'à la mise en page.
> - Calques par famille (couleur, type, épaisseur), blocs, styles annotatifs, références externes.
> - BIM : objets porteurs d'informations ; plans et métrés extraits ; échange IFC.
> - Perspective conique : horizon à hauteur des yeux, points de fuite sur l'horizon ; 1 PF pour l'intérieur, 2 PF pour une maison.`,
 sujet:{titre:"Organiser un dossier de plans en DAO et réaliser une perspective de présentation", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le cabinet passe ses projets du dessin à la main à la DAO. Vous êtes chargé de définir le gabarit (fichier modèle) et de préparer une perspective de présentation d'une villa.

**Données** : unité de dessin : **1 unité = 1 cm** ; plans imprimés au **1/50** (exécution) et au **1/100** (permis) ; textes : cotes **2,5 mm**, désignations **3,5 mm**, titres **5 mm** sur le papier ; villa R+1 de **14,00 × 10,00 m**, hauteur à l'acrotère **7,20 m**.

### Partie A — Gabarit DAO (10 points)
1. Proposer une liste de 8 calques avec, pour chacun, le type de ligne et l'épaisseur d'impression. (4 pts)
2. Quelle hauteur faut-il donner (en unités) aux textes de cotes et de désignations dans l'espace objet pour une impression au 1/50 ? au 1/100 ? Quel outil évite ces calculs ? (4 pts)
3. Quels éléments transformer en blocs ? Quel avantage ? (2 pts)

### Partie B — Perspective conique (7 points)
4. On veut une vue de la villa depuis la rue, à hauteur d'homme. Où placer l'horizon ? Combien de points de fuite ? (2 pts)
5. L'arête verticale la plus proche est dessinée au 1/100. Quelle est sa longueur sur le papier ? Que voit-on des débords de toiture ? (2 pts)
6. Décrire les étapes de construction. (3 pts)

### Partie C — BIM (3 points)
7. Citer trois avantages d'une maquette BIM par rapport à des plans DAO indépendants. (3 pts)`,
  corrige:`### Partie A — Gabarit (10 pts)
1. Par exemple : **AXES** (mixte fin, 0,18) ; **MURS** (continu, 0,50 – 0,70) ; **CLOISONS** (continu, 0,35 – 0,50) ; **MENUISERIES** (continu, 0,25) ; **HACHURES** (continu, 0,13) ; **COTES** (continu, 0,18) ; **TEXTES** (0,25) ; **MOBILIER / SANITAIRES** (continu, 0,18) ; **CACHÉ / AU-DESSUS** (interrompu, 0,25) ; **CARTOUCHE** (0,35). *(4 pts)*
2. Au 1/50 : cotes 2,5 mm × 50 = 125 mm = **12,5 unités** ; désignations 3,5 × 50 = **17,5 unités** ; titres **25 unités**. Au 1/100 : **25**, **35** et **50 unités**. Les **styles annotatifs** (ou une échelle d'annotation) adaptent automatiquement la taille des textes et des cotes à l'échelle de chaque fenêtre. *(4 pts)*
3. Portes, fenêtres, sanitaires, mobilier, symboles électriques, flèche du nord, cartouche : on les dessine une fois ; une modification du bloc met à jour toutes les copies ; le métré des blocs (nombre de portes…) est automatique. *(2 pts)*

### Partie B — Perspective (7 pts)
4. Horizon à **1,60 m** au-dessus du sol (hauteur des yeux) ; vue d'angle → **deux points de fuite** sur l'horizon. *(2 pts)*
5. 7,20 m → **7,2 cm** au 1/100 (+ hauteur au-dessus du TN si le ±0,00 est surélevé) ; l'horizon étant bas, on voit le **dessous** des débords et des balcons. *(2 pts)*
6. Tracer l'horizon ; placer PF1 et PF2 éloignés ; dessiner l'arête verticale la plus proche en vraie grandeur ; relier ses extrémités aux points de fuite ; fixer la profondeur des deux façades (points de mesure ou à l'œil) et tracer les verticales d'angle ; reporter les niveaux (planchers, ouvertures) sur l'arête proche et les faire fuir ; dessiner ouvertures, toiture, puis le rendu (ombres, matériaux, végétation, personnages à l'échelle). *(3 pts)*

### Partie C — BIM (3 pts)
7. Une seule maquette : plans, coupes, façades **toujours cohérents** ; **métrés** automatiques ; **détection des conflits** entre structure et réseaux ; échange IFC entre bureaux d'études ; exploitation du bâtiment après livraison. *(3 pts)*`},
 exercices:[
  {t:"Unités en DAO", d:1, e:`On dessine en mètres (1 unité = 1 m). Un mur de 20 cm d'épaisseur et de 7,35 m de long : quelles valeurs saisir ? Et si 1 unité = 1 cm ?`, c:`En mètres : épaisseur **0,20**, longueur **7,35** ; en centimètres : **20** et **735**. L'important est de choisir une unité unique et de la garder pour tout le projet (et de l'indiquer dans le gabarit).`},
  {t:"Hauteur de texte", d:2, e:`Dessin en millimètres (1 unité = 1 mm), impression au 1/20. Quelle hauteur donner à un texte de 3,5 mm sur le papier ? Et au 1/200 ?`, c:`1/20 : 3,5 × 20 = **70 unités** ; 1/200 : 3,5 × 200 = **700 unités**.`},
  {t:"Calques et impression", d:1, e:`Pourquoi ne faut-il pas dessiner les cotes et les murs sur le même calque ? Donner deux raisons.`, c:`1. Pour **imprimer** avec des épaisseurs différentes (murs forts, cotes fines). 2. Pour pouvoir **masquer** les cotes (vue de présentation) ou les **réutiliser** comme fond de plan pour les autres lots sans les cotes d'architecture ; et pour sélectionner/modifier rapidement une famille d'objets.`},
  {t:"Type de perspective", d:1, e:`Quel type de perspective conique choisir pour : (a) l'intérieur d'un séjour vu depuis la porte ; (b) une maison vue depuis l'angle de la rue ; (c) une tour de 20 étages vue depuis son pied ?`, c:`(a) **un point de fuite** (perspective frontale) ; (b) **deux points de fuite** ; (c) **trois points de fuite** (contre-plongée).`},
  {t:"Hauteur de l'horizon", d:2, e:`Sur une perspective au 1/100, la ligne d'horizon est à 4,5 cm au-dessus de la ligne de sol. À quelle hauteur réelle est l'œil de l'observateur ? Quel type de vue obtient-on ?`, c:`4,5 cm × 100 = **4,50 m** : l'observateur est surélevé (fenêtre d'un étage, talus) ; on voit le dessus des murs de clôture et des auvents bas, mais toujours le dessous d'une toiture située plus haut que 4,50 m.`}
 ],
 quiz:[
  {q:"En DAO, on dessine en général :", o:["À l'échelle du papier","En vraie grandeur","Au 1/100 toujours","En pouces"], r:1, e:"L'échelle intervient à la mise en page."},
  {q:"Un calque sert à :", o:["Regrouper des objets de même nature","Changer l'échelle","Imprimer en couleur","Calculer les surfaces"], r:0, e:"Avec couleur, type de ligne et épaisseur."},
  {q:"Le format d'échange entre logiciels BIM est :", o:["PDF","IFC","JPG","DOC"], r:1, e:"Industry Foundation Classes."},
  {q:"En perspective conique, la ligne d'horizon est :", o:["Au niveau du sol","À la hauteur des yeux de l'observateur","Au sommet du bâtiment","Toujours au milieu de la feuille"], r:1, e:"Environ 1,60 m pour une vue à hauteur d'homme."},
  {q:"Une vue d'intérieur de pièce se dessine souvent avec :", o:["Un point de fuite","Deux points de fuite","Trois points de fuite","Aucun point de fuite"], r:0, e:"Perspective frontale."}
 ]}
 ]
});
