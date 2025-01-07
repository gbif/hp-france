---
lang-ref: partage-donnees
title: Partager ses données dans le réseau GBIF
layout: post
description: Quelles sont les étapes nécessaires à la mise en ligne de données sur le réseau GBIF ?
background: assets/images/placeholders/quadrant.jpg
imageLicense: |
  © Sophie Pamerlon (licensed under https://creativecommons.org/licenses/by-sa/4.0/)
height: 70vh
toc: true
---
## Pourquoi partager ses données de biodiversité ?

La mise en ligne de données de biodiversité sur le site du GBIF les rend plus visibles, plus faciles à utiliser et démultiplie leur utilité en les intégrant dans la communauté mondiale de l’information sur la biodiversité.
Elles peuvent ensuite être visualisées, téléchargées et réutilisées dans de nombreux domaines et thématiques : protection des espèces et des espaces, suivi des espèces exotiques envahissantes, sécurité alimentaire, santé humaine, étude et prévention des zoonoses...
Des exemples de réutilisation des données partagées dans le réseau GBIF sont disponibles dans la [Science Review (revue scientifique)](https://www.gbif.org/science-review){:target="_blank"}, publiée régulièrement par le GBIF pour illustrer ces thématiques.

Les données partagées restent la propriété de leur producteur d'origine, qui en conserve le contrôle et la responsabilité en termes de qualité et de niveau d'information fourni (il est par exemple possible de ne partager qu’une partie de ces informations si certaines données sont trop sensibles pour être rendu publiques ; dans ce cas, le GBIF met aussi à sa disposition des outils de réflexion à ce sujet qui permettent à la fois de protéger la biodiversité étudiée et de partager le plus d’informations possibles).

Le GBIF France peut héberger certaines bases et fichiers de données connectés au GBIF (via son installation IPT), mais il est aussi possible de connecter des bases de données qui resteront sous le contrôle physique de leur institution d’origine.
Les bases ou jeux de données publiés sur le site du GBIF peuvent être mis à jour à tout moment, afin de préciser ou modifier certaines informations.


## Devenir un producteur de données (data publisher) GBIF

### Conditions

Afin de publier vos données à l’aide de l'[IPT GBIF France](https://ipt.gbif.fr/){:target="_blank"} vous devez répondre aux critères suivants :
- Vous êtes associé à une institution française (qu'elle soit centrée ou pas sur la recherche scientifique).
- Cette dernière est [enregistrée en tant que “data publisher” GBIF](https://www.gbif.org/fr/become-a-publisher){:target="_blank"}.
- Vous publiez des jeux de données de spécimens ou d’observations, une checklist taxonomique, un jeu de données d’échantillonnage ou simplement des métadonnées (en  d’autres mots, l’un des 4 types de jeu de données pris en charge par l’IPT).
- Vous détenez les droits pour publier ces données.
- Vous avez la volonté de maintenir ce jeu de données et d’améliorer sa qualité si cela est possible.
- Vous avez la volonté de fournir des métadonnées les plus complètes possibles, afin que les utilisateurs puissent aisément comprendre de quoi traite votre jeu de données.
- Vous voulez publier vos données [sous une licence ouverte](../../partage_valorisation/science_ouverte/#le-gbif-et-la-science-ouverte){:target="_blank"}. Nous vous recommandons vivement la publication sous CC-BY correspondant à la licence Etalab. Le GBIF accepte également les licences CC-0 et CC-BY-NC, mais nous ne recommendons pas cette dernière.  

Pour de plus d’information sur les types de données que vous pourrez faire remonter, veuillez vous référer aux guides du GBIF suivants

- [Qualité demandée pour la publication de données d’occurence](https://www.gbif.org/fr/data-quality-requirements-occurrences){:target="_blank"}.
- [Qualité demandée pour la publication de listes taxonomiques](https://www.gbif.org/data-quality-requirements-checklists){:target="_blank"}.
- [Qualité demandée pour la publication de données d’échantillonnage](https://www.gbif.org/fr/data-quality-requirements-sampling-events){:target="_blank"}.


### Enregistrement de l'institution

Préalablement à tout partage de données vers le GBIF, chaque institution ou organisation doit s'enregistrer comme "data publisher" (producteur de données) via ce [formulaire en ligne](https://www.gbif.org/fr/become-a-publisher){:target="_blank"}.
Après validation par le point nodal GBIF du pays dont dépend le producteur de données (ici GBIF France), cette procédure permet d'ajouter le producteur de données dans l'annuaire GBIF et de lui affilier ses jeux de données partagés dans le réseau GBIF.

### Création de votre ressource sur l’IPT

Le GBIF France utilise l’[Outil de Publication Intégré du GBIF (IPT)](https://ipt.gbif.fr/){:target="_blank"}, une application web libre de droit développée par le GBIF. Afin de pouvoir créer et gérer votre propre jeu de données (appelé « ressource »), vous aurez besoin d’un compte utilisateur. [Contactez-nous](mailto:connexion@gbif.fr) afin que nous puissions vous le créer.

Une fois votre compte créé, connectez-vous en haut de cette page. Cliquez sur l’onglet gérer les ressources afin d’accéder à votre page de gestion. Cette page affiche toutes les ressources que vous gérez. Elle vous apparaîtra donc vide lors de la première utilisation, sauf si vous avez été ajouté comme co-gestionnaire de ressource existante par un administrateur ou un autre utilisateur. Vous pouvez créer une nouvelle ressource au bas de la page. Suivez le [manuel de l’IPT](https://ipt.gbif.org/manual/en/ipt/latest/){:target="_blank"} pour de plus amples instructions.

Attention : veuillez ne pas utiliser de caractères spéciaux ni d'espaces pour le nom court de votre ressource, car ce dernier se retrouvera dans l'URL permanente de celle-ci.

Vous pouvez également voir sur cette page une case “Import à partir d'une ressource archivée” ; elle n’est utile que dans le cas où vous souhaitez migrer une ressource existante d’une installation IPT à une autre, vous pouvez donc la laisser décochée lors de la creation d’une ressource.
Dès que votre ressource est créée, vous pourrez voir une vue d’ensemble de votre ressource, qui est actuellement vide.

Si nécessaire, nous disposons d'une instance test de l'IPT si vous souhaitez prendre en main l'outil sans risque de publier par inadvertance les données sur GBIF.org

>Dans le cadre de ses efforts constants pour enrichir le modèle de données du GBIF et prendre en compte un plus large éventail de données sur la biodiversité, le secrétariat du GBIF a lancé un nouveau programme visant à améliorer l'intégration des données de métabarcoding. Le GBIF France participe à la phase pilote de l'initiative et gère une instance d'un nouvel outil - [le Metabarcoding Data Toolkit (MDT)](https://mdt.gbif.fr/){:target="_blank"} -, équivalent de l'IPT pour les ressources d'ADNe. Le MDT permet  d'impliquer les chercheurs et les communautés du monde entier qui détiennent des données de métabarcoding sur la biodiversité. Pour le MDT, vous pourrez vous connecter avec votre compte utilisateur [GBIF.org](https://www.gbif.org/){:target="_blank"}. 


### Export depuis votre base de données

La manière la plus simple pour ajouter vos données sur l’IPT est d’exporter celles-ci de votre base de données sous forme de fichier .txt, .tab ou .csv. La plupart des systèmes de gestion de bases de données et les tableurs offrent au moins l’une de ces options d’export. Utilisez le format d’encodage des caractères UTF-8 lors de votre export afin d’éviter de mauvaises surprises au niveau des caractères spéciaux (ex. é, à, ü, î ). Si l’option vous est offerte, choisissez d’inclure la ligne d’en-tête dans votre fichier d’exportation (la première ligne avec les noms des champs), puisque cette information sera utile par la suite.

###  Import sur l'IPT

Importer votre fichier source sur l’IPT est une étape simple : allez sur la vue d’ensemble de votre ressource > Source de Données puis cliquez sur Choisissez un fichier. Suivez le [manuel de l’IPT](https://ipt.gbif.org/manual/en/ipt/latest/){:target="_blank"} si nécessaire pour plus d’infomations (incluant l’import de fichiers source multiples, ou directement via la connexion à une base de données).

Une fois que votre fichier source a été correctement importé, une page de détails apparaît (voir l’exemple de capture d’écran dans le manuel IPT), affichant comment votre fichier a été interprété par l’IPT (nombres de colonnes, lignes, lignes d’en-tête, encodage des caractères, délimiteurs de texte, etc.). Cliquez sur le bouton aperçu pour vérifier l’exactitude des informations, puis cliquez sur enregistrer.

### Alignement avec le Darwin Core

Les données de biodiversité sont publiées selon le standard Darwin Core. Cela signifie que les champs de votre base ou fichier d’origine sont renommés suivant une liste de termes, ce qui permet que vos données soient interprétées et agrégées correctement par tout le monde. Cela permet également à un agrégateur comme le GBIF de combiner toutes les données reçues, quels que soit leur format et leur origine, les rendant ainsi interopérables.

L’alignement (ou mapping) Darwin Core est l’étape qui vous permet de lier les champs de votre fichier source aux termes Darwin Core appropriés. C’est l’étape la plus fastidieuse dans le processus de publication de vos données, et ce pour deux raisons : 1) la liste des termes Darwin Core peut être impressionnante, et il peut être complexe de choisir les termes appropriés à votre jeu de données, et 2) la facilité de l'alignement va dépendre de la structure de votre jeu de données. 

C’est pour ces raisons que nous sommes là ! [Contactez-nous](mailto:connexion@gbif.fr){:target="_blank"} pour que nous puissions vous guider à travers les étapes, vérifier votre alignement Darwin Core, suggérer l’utilisation de termes et résoudre tout autre problème lié au Darwin Core.
Vous trouverez plus d’informations à propos de l’alignement Darwin Core dans le manuel de l’IPT (incluant les types de noyaux, les extensions, la conversion automatique, les valeurs par défaut, les traductions de valeurs, etc.).

### Ajout de métadonnées

Allez sur la vue d’ensemble de votre ressource > Métadonnées et cliquez sur Modifier pour ouvrir l’éditeur de métadonnées. 

Toutes les informations que vous fournirez ici seront directement visibles sur la page de votre ressource et associées à vos données lors de la publication. Les métadonnées sont exprimées en EML, qui est un standard utilisé par GBIF, et peuvent également être téléchargées sous forme de fichier RTF (Rich Text Format). Ce dernier peut servir d’ébauche de manuscrit décrivant votre jeu de données (un data paper), qui peut être soumis pour publication dans des revues scientifiques.

Si vous disposez déjà d’un fichier de métadonnées au format EML, il est désormais possible de l’ajouter à votre resource via l’option d’import située à côté du bouton d’édition des métadonnées sur la page principale de la resource > Métadonnées.

### Publication sur l'IPT

Tout est maintenant prêt pour la publication ! Rendez-vous sur la vue d’ensemble de votre ressource > Versions publiées et cliquez sur Publier. L’IPT va transformer vos données en Darwin Core, les combiner avec les métadonnées et les assembler dans un fichier compressé appelé une “Archive Darwin Core”. 

En retournant sur la vue d’ensemble de votre ressource > Versions publiées, vous pouvez voir les détails de votre premier jeu de données publié, incluant la date de publication et la version. Votre jeu de données étant publié de manière privée, la dernière chose qu’il vous reste à faire est de cliquer sur Visibilité de la ressource > Public (voir le [manuel de l’IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#publication){:target="_blank"}) afin de le rendre disponible à tous. Attention, il sera requis de recliquer sur Publier après avoir passé la ressource en mode public, afin de la voir apparaître sur la page d'accueil de l'IPT.

### Affichage sur le GBIF

Même si votre jeu de données est maintenant accessible à tous sur l'IPT, il n'est à ce stade pas recensé par GBIF.org, ce qui le rend difficile à trouver. À ce stade, il est nécessaire de signaler l'existence de cette ressource au GBIF pour qu'elle soit récupérée et affichée sur GBIF.org. Le GBIF se chargera alors de vérifier la cohérence des données avec ses propres référentiels (géographique et taxonomique). Sur la page de la vue d’ensemble de votre ressource, cliquez sur *Visibilité de la ressource* > *Enregistrement* (voir le manuel de l’IPT) afin de déclarer votre jeu de données auprès du GBIF.

### Note 

Cette page est issue de la modification de la page suivante par Canadensys (Desmet, P. & C. Sinou. (2012). 7-step guide to data publication. *Canadensys*. [https://canadensys.net/fr/publish/7-step-guide/](https://canadensys.net/fr/publish/7-step-guide/){:target="_blank"}). Elle prend en compte les derniers développements de l'IPT et les spécificités du contexte français des données de biodiversité.
