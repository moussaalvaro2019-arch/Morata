/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Construction
   Matériaux de construction · Technologie de construction
   ===================================================================== */

/* ---------- MATÉRIAUX (niveau avancé) ---------- */
A.addChapitres('mat', [
{id:'mat-7', niv:3, titre:'Formuler un béton : la méthode de Dreux-Gorisse', duree:40, contenu:`## Les données de départ
- Résistance visée : **fc28 = 25 MPa** (poteaux, poutres, dalles) ;
- Ouvrabilité : béton **plastique**, affaissement au cône d'Abrams de 7 à 9 cm ;
- Gravier concassé 5/25 et sable 0/4 ; ciment CEM II 42,5 (classe vraie σ'c ≈ 45 MPa).

## 1. Résistance moyenne à viser
On vise environ 15 % de plus que la résistance demandée pour tenir compte de la dispersion : **fm ≈ 1,15 × 25 ≈ 29 MPa**.

## 2. Rapport ciment / eau (formule de Bolomey)
$$ fm = G × σ'c × (C/E − 0,5)
Avec G ≈ 0,5 (granulats de bonne qualité) : C/E = 29 / (0,5 × 45) + 0,5 ≈ **1,8**.

## 3. Ciment et eau
Pour cette ouvrabilité, l'abaque de Dreux donne un dosage d'environ **350 kg de ciment par m³**. Eau : E = 350 / 1,8 ≈ **194 litres**.

## 4. Granulats (volumes absolus)
Un mètre cube = 1 000 litres de volumes absolus :
- ciment : 350 / 3,1 = 113 L ; eau : 194 L ; air occlus : 15 L ;
- il reste **678 L de granulats**, répartis d'après la courbe granulaire de référence : sable 35 % (237 L), gravier 65 % (441 L) ;
- masses (masse volumique des grains 2,65) : **sable 629 kg, gravier 1 168 kg**.

> [!retenir] Composition pour 1 m³ (granulats secs)
> Ciment 350 kg · eau 194 L · sable 629 kg · gravier 1 168 kg → masse volumique ≈ 2 340 kg/m³.

## 5. Corriger selon l'humidité du sable
Un sable humide à 5 % apporte 629 × 0,05 ≈ **31 L d'eau** : on ne verse que 194 − 31 = 163 L et on pèse 660 kg de sable humide.

## 6. Gâchée d'essai et contrôle
On fabrique une gâchée, on mesure l'**affaissement** et on confectionne des **éprouvettes** (7 et 28 jours). Si le béton est trop sec, on ajoute un plastifiant plutôt que de l'eau.

> [!attention]
> Chaque litre d'eau ajouté « pour faciliter le coulage » fait perdre de la résistance : 20 L d'eau en plus par m³ peuvent coûter 3 à 4 MPa.`,
 quiz:[
  {q:"La formule de Bolomey relie la résistance du béton au rapport :", o:["C/E","S/G","E/S","C/G"], r:0, e:"fm = G σ'c (C/E − 0,5)."},
  {q:"Avec 350 kg de ciment et C/E = 1,75, l'eau vaut :", o:["200 L","350 L","175 L","612 L"], r:0, e:"350 / 1,75 = 200 L."},
  {q:"Le cône d'Abrams mesure :", o:["L'ouvrabilité (affaissement)","La résistance","La teneur en air","La masse volumique"], r:0, e:"7 à 9 cm pour un béton plastique."},
  {q:"Un sable humide à 5 % (600 kg sec) apporte environ :", o:["30 L d'eau","5 L d'eau","300 L d'eau","0 L"], r:0, e:"600 × 0,05 = 30 kg = 30 L."}
 ]},
{id:'mat-8', niv:3, titre:'Durabilité et pathologies des matériaux', duree:35, contenu:`## La carbonatation du béton
Le gaz carbonique de l'air pénètre progressivement dans le béton et fait baisser son pH. Quand le front de carbonatation atteint les aciers, ceux-ci ne sont plus protégés et **rouillent**.
$$ x = K × √t
> [!exemple]
> Béton courant, K ≈ 5 mm/an^½ : au bout de 25 ans, x = 5 × √25 = **25 mm**. Un enrobage de 1,5 cm est dépassé en moins de 10 ans ; un enrobage de 3 cm protège plus de 35 ans.

Test sur chantier : on pulvérise de la **phénolphtaléine** sur une cassure fraîche : le béton sain devient **rose**, la zone carbonatée reste grise.

## Les autres agressions
- **Chlorures** (bord de mer, lagune, sel de déverglaçage) : corrosion rapide par piqûres ;
- **Sulfates** (certains sols, eaux usées) : gonflement et désagrégation ;
- **Cycles d'humidité** et retrait : fissures de surface.

## La corrosion des aciers
La rouille occupe **plusieurs fois le volume** de l'acier : elle fait éclater le béton d'enrobage (**épaufrures**) et laisse les aciers apparents. La section d'acier diminue, la sécurité aussi.

## Maçonneries, enduits et bois
- **Remontées capillaires** : salpêtre, peinture qui cloque en pied de mur ;
- Enduits **faïencés** (séchage trop rapide) ou décollés (support poussiéreux) ;
- **Termites** : ennemis n° 1 des charpentes et menuiseries en Côte d'Ivoire → bois durs ou traités, barrière anti-termites sous dallage, pas de bois en contact avec le sol.

## Diagnostiquer et réparer
1. Relever les désordres (photos, cartographie, largeur des fissures au fissuromètre) ;
2. Mesurer : profondeur de carbonatation, enrobage (détecteur d'armatures), résistance (scléromètre, carottes) ;
3. Réparer : **purger** le béton dégradé, **brosser et passiver** les aciers, reconstituer avec un **mortier de réparation**, puis protéger (peinture anti-carbonatation, hydrofuge).`,
 quiz:[
  {q:"Selon x = K √t avec K = 5 mm/an^½, la carbonatation atteint au bout de 16 ans :", o:["20 mm","80 mm","5 mm","16 mm"], r:0, e:"5 × √16 = 20 mm."},
  {q:"Avec la phénolphtaléine, le béton sain (non carbonaté) devient :", o:["Rose","Gris","Bleu","Noir"], r:0, e:"Le pH élevé fait virer l'indicateur."},
  {q:"Les épaufrures sont causées par :", o:["Le gonflement de la rouille des aciers","Un excès de ciment","La peinture","Le vent"], r:0, e:"La rouille occupe plusieurs fois le volume de l'acier."},
  {q:"Pour protéger une charpente des termites, on :", o:["Utilise des bois durs ou traités, sans contact avec le sol","Peint en blanc","Augmente la pente","Ajoute des tôles"], r:0, e:"Et barrière chimique sous le bâtiment."}
 ]},
{id:'mat-9', niv:3, titre:'Matériaux écologiques et innovants', duree:30, contenu:`## L'énergie grise et le carbone
Fabriquer les matériaux consomme de l'énergie et émet du CO₂. Le **ciment** est le plus gros poste : environ **0,8 à 0,9 t de CO₂ par tonne de clinker**. Les ciments composés (CEM II, CEM III avec laitier, pouzzolanes ou calcaire) en émettent moins.

## La brique de terre comprimée (BTC)
Terre latéritique tamisée, **stabilisée avec 6 à 8 % de ciment**, comprimée à la presse et séchée à l'ombre.
- Résistance : **4 à 6 MPa**, suffisante pour des murs porteurs de maisons et de petits R+1 ;
- Bon confort thermique (inertie, régulation de l'humidité), aspect apprécié ;
- Matériau local : moins de transport.

> [!exemple] Ciment consommé par m² de mur
> BTC 29,5 × 14 × 9,5 cm : environ 31 briques par m², chacune contenant ≈ 0,5 kg de ciment → **≈ 16 kg de ciment par m²**.
> Agglos creux de 15 : 12,5 blocs par m² à ≈ 2,3 kg de ciment chacun → **≈ 29 kg par m²**, sans compter le mortier.

## D'autres matériaux à valoriser
- **Bambou** : très résistant en traction, léger ; à traiter contre les insectes, réservé aux structures légères et aux échafaudages ;
- **Bois certifiés** (gestion durable des forêts), bois locaux durables (iroko, teck) ;
- **Isolants biosourcés** : fibre de coco, typha, laine de chanvre ;
- **Granulats recyclés** issus de la démolition, pour bétons non structurels et remblais.

## Les bétons bas carbone
Ciments à fort taux d'ajouts, **géopolymères** (activation alcaline de cendres ou de laitiers), optimisation des dosages (ne pas surdoser par habitude).

> [!retenir]
> Le matériau le plus écologique est souvent celui qui vient de près, qui est bien dosé, et qui dure longtemps sans réparation.`,
 quiz:[
  {q:"La stabilisation d'une BTC se fait couramment avec :", o:["6 à 8 % de ciment","50 % de ciment","Uniquement de l'eau","Du bitume"], r:0, e:"Le ciment améliore résistance et tenue à l'eau."},
  {q:"La résistance courante d'une BTC est de :", o:["4 à 6 MPa","40 à 60 MPa","0,4 MPa","100 MPa"], r:0, e:"Suffisante pour des murs porteurs de maisons."},
  {q:"Le matériau qui émet le plus de CO₂ dans un bâtiment courant est :", o:["Le ciment","Le bois","La terre","Le bambou"], r:0, e:"La cuisson du clinker libère beaucoup de CO₂."},
  {q:"Le bambou est surtout intéressant pour :", o:["Sa résistance en traction et sa légèreté","Sa résistance au feu","Son poids élevé","Son isolation phonique"], r:0, e:"Il doit être traité contre les insectes."}
 ]}
]);

/* ---------- TECHNOLOGIE (niveau avancé) ---------- */
A.addChapitres('tech', [
{id:'tech-7', niv:3, titre:'L\'étanchéité : terrasses, salles d\'eau et sous-sols', duree:30, contenu:`## La toiture-terrasse
Composition de bas en haut :
1. **Dalle** support (béton armé ou plancher à corps creux) ;
2. **Forme de pente** de 1,5 à 2 % vers les évacuations ;
3. **Isolant** (recommandé en climat chaud, voir Thermique) ;
4. **Revêtement d'étanchéité** : bicouche bitume élastomère SBS, membrane synthétique (PVC, EPDM) ou système liquide ;
5. **Protection** : gravillons (terrasse inaccessible), dallettes sur plots ou carrelage scellé (terrasse accessible).

## Les points singuliers (là où naissent les fuites)
- **Relevés** d'étanchéité d'au moins **15 cm** au-dessus de la protection, protégés en tête par une bande de solin ou une engravure dans l'acrotère ;
- **Évacuations** d'eaux pluviales : au moins **deux** par terrasse (une peut se boucher) + un **trop-plein** ;
- **Traversées** (gaines, pieds de supports de climatiseurs) avec platines et manchons ;
- **Joints de dilatation** traités par des profils adaptés.

> [!norme] Essai à l'eau
> Avant de poser la protection, on obstrue les évacuations et on met **5 cm d'eau pendant 48 heures** : aucune trace d'humidité ne doit apparaître en sous-face.

## Les salles d'eau
- Sol et murs de douche protégés par une **étanchéité sous carrelage** (SPEC : résine ou natte), remontée de 10 cm sur les murs et jusqu'à la hauteur de la douche ;
- **Pente de 1 à 2 %** vers le siphon de sol, joints de carrelage soignés, silicone aux angles ;
- Traversées de tuyaux étanchées avant carrelage.

## Les ouvrages enterrés
Cuves, fosses, sous-sols, piscines : béton compact et bien vibré, **joints de reprise** avec bandes d'arrêt d'eau (waterstop), **enduit hydrofuge** ou membrane côté eau, drainage autour.

> [!attention]
> Plus de la moitié des sinistres de toitures-terrasses viennent des relevés et des évacuations, pas de la partie courante.`,
 quiz:[
  {q:"La forme de pente d'une toiture-terrasse est d'au moins :", o:["1,5 à 2 %","0 %","10 %","30 %"], r:0, e:"Pour que l'eau ne stagne pas."},
  {q:"La hauteur minimale d'un relevé d'étanchéité au-dessus de la protection est :", o:["15 cm","2 cm","50 cm","1 m"], r:0, e:"Pour éviter les infiltrations en cas de stagnation."},
  {q:"L'essai d'étanchéité d'une terrasse consiste à :", o:["Mettre 5 cm d'eau pendant 48 h","Arroser 5 minutes","Mesurer la température","Peindre la dalle"], r:0, e:"Avant la pose de la protection."},
  {q:"Les sinistres de terrasses viennent le plus souvent :", o:["Des relevés et des évacuations","De la partie courante","De la couleur des gravillons","Du dallage"], r:0, e:"Ce sont les points singuliers."}
 ]},
{id:'tech-8', niv:3, titre:'Construire en hauteur : immeubles et organisation technique', duree:35, contenu:`## La structure d'un immeuble
- **Portiques** (poteaux-poutres) pour les charges verticales ;
- **Voiles en béton armé** (cage d'escalier, cage d'ascenseur, pignons) pour le **contreventement** contre le vent et les séismes ;
- **Descente de charges cumulée** : les poteaux du rez-de-chaussée portent tous les étages (voir le projet Immeuble R+4) ;
- **Joints de dilatation** tous les 25 à 30 m de longueur.

## Le cycle d'étage
Chaque niveau répète la même séquence : implantation des axes → poteaux et voiles → coffrage et étaiement du plancher → ferraillage et réservations → **coulage** → cure → décoffrage.
> [!exemple]
> Avec un cycle de **10 jours par niveau**, la structure d'un R+4 (5 niveaux) demande environ 50 jours, plus les fondations. Les étais restent en place sur 2 ou 3 niveaux (étaiement de reprise).

## Les coffrages et le levage
- **Banches** métalliques pour les voiles, **coffrages-tables** ou poutrelles et contreplaqué pour les planchers ;
- **Grue à tour** : attention à la **charge en bout de flèche**, bien plus faible qu'au pied du mât ;
- **Pompe à béton** pour couler vite et en hauteur ; monte-matériaux pour les agglos.

## Les réseaux verticaux
**Gaines techniques** superposées d'un niveau à l'autre : colonnes d'eau, chutes d'eaux usées ventilées, colonne montante électrique, télécoms. Un **ascenseur** devient indispensable au-delà de 4 ou 5 niveaux habités.

## Sécurité
- Garde-corps périphériques à chaque plancher, filets, trémies protégées ;
- **Escalier encloisonné** et désenfumé en exploitation, extincteurs, éclairage de sécurité ;
- Plan d'installation de chantier avec zones de levage interdites au public.`,
 quiz:[
  {q:"Les voiles de la cage d'escalier servent surtout à :", o:["Contreventer l'immeuble","Décorer les façades","Isoler du bruit","Porter les cloisons"], r:0, e:"Ils reprennent les efforts horizontaux."},
  {q:"Avec un cycle de 8 jours par niveau, 5 niveaux de structure prennent environ :", o:["40 jours","8 jours","13 jours","400 jours"], r:0, e:"5 × 8 = 40 jours."},
  {q:"La charge qu'une grue peut lever est la plus faible :", o:["En bout de flèche","Au pied du mât","Toujours identique","La nuit"], r:0, e:"Le moment de renversement augmente avec la portée."},
  {q:"Les joints de dilatation d'un bâtiment se placent environ tous les :", o:["25 à 30 m","2 m","100 m","5 m"], r:0, e:"Pour absorber les variations de longueur."}
 ]},
{id:'tech-9', niv:3, titre:'Pathologies, diagnostic et réhabilitation', duree:35, contenu:`## Lire une fissure
La forme et l'orientation d'une fissure renseignent sur sa cause :
| Fissure | Cause probable |
|---|---|
| En **escalier** dans la maçonnerie, près d'un angle | Tassement différentiel des fondations |
| **Verticale** en bas, au milieu d'une poutre | Flexion excessive (aciers insuffisants) |
| **Oblique** à 45° près d'un appui | Effort tranchant (cadres insuffisants) |
| **Le long des aciers**, avec rouille | Corrosion (enrobage trop faible) |
| Fin **réseau** de surface | Retrait (cure insuffisante) |

## Le diagnostic
1. **Relevé** : plans, photos, largeur des fissures (moins de 0,2 mm : esthétique ; plus de 2 mm : souvent structurel) ;
2. **Suivi** : témoins (plâtre, jauges) datés pour savoir si la fissure **évolue** ;
3. **Investigations** : sondages des fondations, carottes, détection des aciers, étude de sol ;
4. **Recalcul** de la structure avec les charges réelles.

## Les techniques de réparation
- **Reprise en sous-œuvre** : élargissement des semelles, micropieux ;
- **Renforcement** : chemisage de poteaux en béton armé, plats ou tissus de **fibre de carbone** collés, profilés métalliques ;
- **Injection** des fissures stabilisées à la résine époxy ;
- Traitement de la corrosion, hydrofuge, barrière anti-termites.

## Surélever une maison existante
> [!exemple] Ajouter un étage sur une maison de plain-pied
> Une semelle de 0,80 × 0,80 m portait 60 kN. L'étage ajoute environ 70 kN : N = 130 kN.
> Pression sur le sol : 130 / 0,64 = **203 kN/m²**, supérieure aux 150 kN/m² admissibles.
> Il faut élargir la semelle à √(130 × 1,08 / 150) ≈ **1,00 m** et vérifier les poteaux (souvent trop faibles : 4 HA10 ne suffisent plus).

> [!attention]
> Ne jamais surélever sans **note de calcul** : c'est l'une des premières causes d'effondrement de bâtiments.`,
 quiz:[
  {q:"Une fissure en escalier dans un mur près d'un angle indique souvent :", o:["Un tassement différentiel","Un excès de peinture","Une flexion de dalle","Un retrait du carrelage"], r:0, e:"Une partie des fondations s'enfonce plus que l'autre."},
  {q:"Une fissure oblique à 45° près de l'appui d'une poutre indique :", o:["Un effort tranchant mal repris","Un manque de peinture","Une dilatation","Un défaut d'enduit"], r:0, e:"Les cadres sont insuffisants."},
  {q:"Pour savoir si une fissure évolue, on pose :", o:["Des témoins datés","Du carrelage","Un drain","Un climatiseur"], r:0, e:"Plâtre ou jauges graduées."},
  {q:"Avant de surélever une maison, il faut :", o:["Une note de calcul des fondations et des poteaux","Seulement l'accord du voisin","Plus de ciment dans le mortier","Rien"], r:0, e:"Les charges augmentent fortement."}
 ]}
]);
