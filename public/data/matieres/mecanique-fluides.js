A.addMatiere({
 id:'mdf', titre:'Mécanique des fluides', court:'Méca. fluides', groupe:'phys', icone:'wave', couleur:'#2F6FDB', niveau:'Intermédiaire', heures:20, ordre:4, prerequis:['sp','math'],
 resume:"Pression, hydrostatique, débit, Bernoulli, pertes de charge, réseaux d'eau potable, eaux pluviales et assainissement autonome.",
 objectifs:["Calculer une pression et une poussée hydrostatique","Appliquer la conservation du débit et Bernoulli","Estimer les pertes de charge et choisir un diamètre","Dimensionner gouttières, descentes et caniveaux","Connaître les règles d'une fosse septique"],
 applications:["Réservoirs, bâches à eau et châteaux d'eau","Réseau d'alimentation d'une maison","Évacuation des eaux pluviales de toiture","Fosse septique et puisard"],
 chapitres:[
{id:'mdf-1', niv:1, titre:'Propriétés des fluides et pression', duree:20, contenu:`## Les fluides
Un fluide (liquide ou gaz) se déforme sans résistance permanente et épouse la forme de son contenant.
- **Masse volumique** de l'eau : ρ = 1 000 kg/m³.
- **Viscosité** : résistance à l'écoulement. Eau à 20 °C : viscosité cinématique ν ≈ 1 × 10⁻⁶ m²/s ; le miel ou la boue sont beaucoup plus visqueux.
- L'eau est pratiquement **incompressible**.

## La pression
$$ p = F / S   (Pa)
Unités pratiques : 1 bar = 100 000 Pa ≈ **10 m de colonne d'eau** (m CE). Un robinet demande environ 1 à 3 bars pour bien fonctionner.

## Pression relative et absolue
- **Pression absolue** : mesurée par rapport au vide.
- **Pression relative** (manométrique) : mesurée par rapport à la pression atmosphérique (≈ 1 bar). Les manomètres de plomberie indiquent la pression relative.

> [!exemple]
> Un château d'eau dont le niveau est 25 m au-dessus d'un robinet fournit (sans écoulement) une pression de 25 m CE ≈ **2,5 bars**.

> [!retenir]
> 10 m d'eau ≈ 1 bar. C'est la règle à connaître pour toute installation d'eau.`,
 quiz:[
  {q:"1 bar correspond à environ :", o:["1 m d'eau","10 m d'eau","100 m d'eau","0,1 m d'eau"], r:1, e:"1 bar ≈ 10 m de colonne d'eau."},
  {q:"La masse volumique de l'eau vaut :", o:["100 kg/m³","1 000 kg/m³","2 500 kg/m³","10 kg/m³"], r:1, e:"ρ = 1 000 kg/m³."},
  {q:"Un réservoir 15 m au-dessus d'un robinet donne une pression statique de :", o:["0,15 bar","1,5 bar","15 bars","150 bars"], r:1, e:"15 m CE ≈ 1,5 bar."},
  {q:"Les manomètres de plomberie indiquent :", o:["La pression absolue","La pression relative","Le débit","La température"], r:1, e:"Par rapport à la pression atmosphérique."}
 ]},
{id:'mdf-2', niv:1, titre:'Hydrostatique : pression et poussées', duree:25, contenu:`## Loi fondamentale
Dans un liquide au repos, la pression augmente avec la profondeur h :
$$ p = ρ g h
La pression est la même à une profondeur donnée, quelle que soit la forme du récipient.

## Poussée sur une paroi verticale
La pression est triangulaire (nulle en surface, maximale au fond) :
$$ F = ρ g h² / 2   (par mètre de largeur), appliquée à h/3 du fond

!fig:hydrostatique|Diagramme triangulaire de pression sur une paroi

> [!exemple] Paroi d'une bâche à eau
> Hauteur d'eau 2,0 m : F = 1 000 × 9,81 × 2² / 2 = 19 620 N ≈ **19,6 kN par mètre** de paroi, appliquée à 0,67 m du fond. Moment à la base : 19,6 × 0,67 ≈ **13,1 kN·m/m** : la paroi doit être ferraillée comme un mur de soutènement.

## La poussée d'Archimède
Tout corps plongé dans un liquide reçoit une poussée verticale vers le haut égale au **poids du liquide déplacé** :
$$ FA = ρ g V

> [!attention] Sous-pression
> Une cuve enterrée vide, une fosse ou un sous-sol dans une nappe phréatique subit une poussée vers le haut. Une citerne vide en saison des pluies peut **remonter** et se fissurer. Il faut vérifier que son poids (+ remblai) dépasse la poussée, ou la lester / l'ancrer.

> [!exemple]
> Citerne enterrée de 10 m³ entièrement dans la nappe : poussée = 1 000 × 9,81 × 10 ≈ 98 kN (≈ 10 t). Une citerne en béton de 6 t vide remonte si elle n'est pas lestée.`,
 quiz:[
  {q:"La pression à 3 m de profondeur dans l'eau vaut environ :", o:["3 kPa","30 kPa","300 kPa","0,3 kPa"], r:1, e:"p = 1 000 × 9,81 × 3 ≈ 29,4 kPa."},
  {q:"La résultante de la poussée sur une paroi verticale est appliquée :", o:["En surface","À mi-hauteur","Au tiers de la hauteur depuis le fond","Au fond"], r:2, e:"Centre de gravité du triangle de pression."},
  {q:"La poussée d'Archimède est égale :", o:["Au poids de l'objet","Au poids du liquide déplacé","Au volume de l'objet","À la pression"], r:1, e:"FA = ρ g V."},
  {q:"Une citerne enterrée vide dans une nappe risque de :", o:["Couler","Remonter","Geler","Rouiller"], r:1, e:"La poussée d'Archimède peut dépasser son poids."}
 ]},
{id:'mdf-3', niv:2, titre:'Débit, continuité et Bernoulli', duree:30, contenu:`## Débit
$$ Q = V × S   (m³/s)    V : vitesse moyenne, S : section
1 L/s = 0,001 m³/s = 3,6 m³/h.

## Équation de continuité
Pour un fluide incompressible, le débit est le même partout dans une conduite : **V₁ S₁ = V₂ S₂**. Quand la section diminue, la vitesse augmente.

> [!exemple]
> 0,5 L/s dans un tube de diamètre intérieur 20 mm (S = 3,14 × 10⁻⁴ m²) : V = 0,0005 / 0,000314 = **1,6 m/s**.

## Théorème de Bernoulli
Le long d'un écoulement sans perte, l'énergie se conserve :
$$ p + ½ ρ V² + ρ g z = constante
Ou en hauteurs (m) : **p/(ρg) + V²/(2g) + z = constante** (charge totale H).

!fig:bernoulli|Là où la vitesse augmente, la pression baisse

## Applications
- **Vidange d'un réservoir** (Torricelli) : V = √(2 g h). Pour h = 2 m : V ≈ 6,3 m/s.
- **Pression disponible** : entre un château d'eau et un robinet, la charge se transforme en pression et en vitesse, moins les pertes.

> [!exemple] Réservoir surélevé
> Réservoir sur une tour de 6 m, douche à l'étage à 4 m au-dessus du sol : charge disponible = 6 − 4 = 2 m ≈ 0,2 bar, avant pertes. C'est trop faible pour une douche confortable (il faut ≥ 1 bar) : prévoir un **surpresseur** ou monter le réservoir.

> [!retenir]
> Q = V S ; V₁ S₁ = V₂ S₂ ; pression + vitesse + altitude = constante (moins les pertes de charge).`,
 quiz:[
  {q:"1 L/s correspond à :", o:["1 m³/h","3,6 m³/h","36 m³/h","0,36 m³/h"], r:1, e:"1 L/s × 3 600 s = 3 600 L/h = 3,6 m³/h."},
  {q:"Si la section d'une conduite est divisée par 2, la vitesse :", o:["Est divisée par 2","Double","Reste la même","Est multipliée par 4"], r:1, e:"V₁ S₁ = V₂ S₂."},
  {q:"Selon Bernoulli, là où la vitesse augmente :", o:["La pression augmente","La pression baisse","L'altitude augmente","Le débit augmente"], r:1, e:"L'énergie cinétique se prend sur la pression."},
  {q:"Vitesse de vidange sous 5 m d'eau (Torricelli) :", o:["≈ 10 m/s","≈ 50 m/s","≈ 5 m/s","≈ 2 m/s"], r:0, e:"√(2 × 9,81 × 5) ≈ 9,9 m/s."}
 ]},
{id:'mdf-4', niv:2, titre:'Pertes de charge et réseaux d\'eau potable', duree:30, contenu:`## Régimes d'écoulement
Le **nombre de Reynolds** Re = V D / ν indique le régime : laminaire si Re < 2 000, turbulent si Re > 4 000. Dans les réseaux d'eau, l'écoulement est presque toujours **turbulent**.

## Pertes de charge
L'eau perd de l'énergie par frottement :
- **Pertes linéaires** (Darcy-Weisbach) : ΔH = λ × (L/D) × V²/(2g), λ ≈ 0,02 à 0,03 pour des tubes lisses ;
- **Pertes singulières** (coudes, tés, vannes, compteur) : ΔH = K V²/(2g), souvent estimées à **10 à 20 %** des pertes linéaires dans un logement.

> [!exemple]
> Tube PPR de diamètre intérieur 20 mm, 0,4 L/s (V = 1,27 m/s), longueur 30 m, λ = 0,025 :
> ΔH = 0,025 × (30 / 0,02) × 1,27² / 19,62 = 37,5 × 0,082 ≈ **3,1 m** (0,31 bar), + 15 % de singularités ≈ 3,5 m.

## Règles de dimensionnement d'un réseau intérieur
1. Additionner les **débits de base** des appareils : lavabo 0,10 L/s, douche 0,20, WC (réservoir) 0,12, évier 0,20, machine à laver 0,20.
2. Appliquer un **coefficient de simultanéité** (tous les robinets ne sont pas ouverts en même temps) : environ y = 0,8 / √(n − 1) pour n appareils.
3. Choisir le diamètre pour que la vitesse reste **entre 0,5 et 2 m/s** (bruit et coups de bélier au-delà).
4. Vérifier qu'il reste au moins **1 bar** au robinet le plus défavorisé.

| Diamètre PPR (extérieur) | Usage courant |
|---|---|
| 20 mm | Alimentation d'un ou deux appareils |
| 25 mm | Distribution d'un logement |
| 32 mm | Colonne d'un petit immeuble, arrivée générale |

> [!attention]
> Le coup de bélier (fermeture brusque d'un robinet à grand débit) peut briser les tuyauteries : vitesses modérées, robinets à fermeture lente, anti-béliers.`,
 quiz:[
  {q:"Dans un réseau d'eau, l'écoulement est généralement :", o:["Laminaire","Turbulent","Statique","Nul"], r:1, e:"Re dépasse largement 4 000."},
  {q:"Vitesse conseillée dans les canalisations d'eau intérieures :", o:["0,1 m/s","0,5 à 2 m/s","5 m/s","10 m/s"], r:1, e:"Au-delà : bruit et coups de bélier."},
  {q:"Le coefficient de simultanéité tient compte du fait que :", o:["Les tuyaux fuient","Tous les robinets ne sont pas ouverts ensemble","L'eau est chaude","La pression varie"], r:1, e:"Il réduit le débit de calcul."},
  {q:"Les pertes de charge augmentent avec :", o:["Le diamètre","La vitesse et la longueur","La pression","L'altitude"], r:1, e:"ΔH est proportionnel à L et à V²."}
 ]},
{id:'mdf-5', niv:2, titre:'Eaux pluviales et assainissement', duree:30, contenu:`## Débit des eaux pluviales (méthode rationnelle)
$$ Q (L/s) = C × i (mm/h) × A (m²) / 3 600
- **C** : coefficient de ruissellement (toiture 0,9 à 1 ; voirie bitumée 0,9 ; pavés 0,6 ; jardin 0,1 à 0,3) ;
- **i** : intensité de pluie de projet (en zone côtière tropicale, on retient couramment **150 à 200 mm/h** pour les toitures) ;
- **A** : surface collectée (projection horizontale).

> [!exemple] Toiture de 120 m²
> Q = 0,95 × 180 × 120 / 3 600 = **5,7 L/s**. Avec des descentes de 100 mm (capacité ≈ 3 à 4 L/s chacune), il faut **2 descentes**.

## Canalisations d'évacuation
- **Pente** des collecteurs d'eaux usées : **1 à 3 %** (au moins 1 %).
- Diamètres usuels (PVC) : lavabo, douche 40 mm ; évier 50 mm ; WC et collecteurs 100 mm ; collecteur principal 110 à 125 mm.
- **Regards** de visite à chaque changement de direction et tous les 15 à 20 m.
- Vitesse d'autocurage : au moins 0,6 m/s pour éviter les dépôts.

## L'assainissement autonome
Sans réseau public, les eaux usées sont traitées sur la parcelle :
1. **Fosse septique toutes eaux** : décantation et digestion des matières solides. Volume indicatif : **3 m³ jusqu'à 5 pièces principales**, + 1 m³ par pièce supplémentaire.
2. **Traitement** des effluents : puisard (puits d'infiltration), tranchées d'épandage ou filtre à sable selon la perméabilité du sol.
3. **Ventilation** de la fosse par une conduite remontant en toiture.

> [!attention]
> Implanter la fosse et le puisard à au moins **5 m** de la maison, **3 m** des limites et **35 m** d'un puits d'eau potable. Vidanger la fosse tous les 3 à 4 ans environ.

## Séparer les eaux
Les eaux pluviales ne doivent **pas** aller dans la fosse septique : elles la feraient déborder et chasseraient les boues. On les envoie vers le caniveau ou un puits d'infiltration séparé.`,
 quiz:[
  {q:"Débit d'une toiture de 100 m² (C = 1) sous 180 mm/h :", o:["0,5 L/s","5 L/s","50 L/s","18 L/s"], r:1, e:"1 × 180 × 100 / 3 600 = 5 L/s."},
  {q:"Pente minimale d'une canalisation d'eaux usées :", o:["0,1 %","1 %","10 %","0 %"], r:1, e:"On vise 1 à 3 %."},
  {q:"Diamètre d'évacuation d'un WC :", o:["40 mm","50 mm","100 mm","20 mm"], r:2, e:"100 mm (110 mm extérieur en PVC)."},
  {q:"Les eaux pluviales doivent aller :", o:["Dans la fosse septique","Vers le caniveau ou un puits séparé","Dans le puits d'eau potable","Dans la cuisine"], r:1, e:"Elles perturberaient le fonctionnement de la fosse."}
 ]}
]});
