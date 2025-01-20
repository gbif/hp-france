[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-france/badge/icon)](https://builds.gbif.org/job/hp-france/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: france

This Jekyll website, **[france (Staging)](https://france.hp.gbif-staging.org/)**, makes use of a theme and biodiversity widgets developed by the GBIF network.

You can find information on editing this site and more on [gbif/hosted-portals](https://github.com/gbif/hosted-portals)

> Powered by [GBIF](https://www.gbif.org/)

Url du site (en test) : https://france.hp.gbif-staging.org/ 

Getting started : https://github.com/gbif/hosted-portals/blob/main/getting-started/for-authors.md 

# Installation du projet en local

- Installer Visual Studio Code en cliquant [ici](https://code.visualstudio.com/Download)
- Installer Git (proposé lors de l'installation de Visual Studio Code) ou en cliquant [ici](https://git-scm.com/downloads)
- Cloner le projet sur Visual Studio Code
- Installer Ruby Gem en cliquant [ici](https://jekyllrb.com/docs/installation/)

- Lancer le projet en local : bundle exec jekyll serve -> site à présent disponible à l'url suivante : [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

# Bonnes pratiques de développement

  - Créer un nouvelle branche depuis la branche master sur Github (ou sur Visual Studio Code)
  - Faire les développements en local depuis cette nouvelle branche
  - Dans l'onglet Source Control, on peut voir les fichiers modifiés
  - Ajouter les fichiers à envoyer dans Staged changes
  - Commit & Push

  - Une fois qu'on a fini nos modifications, on retourne sur Github, sur la branche créé et on clique sur Compare & Pull request pour mettre les modifications apportées sur la branche master
  - On ajoute des commentaires, on verifie que tous les commits et fichiers modifiés sont ok et on peut merger

# Architecture du projet

  - Dossier _data/ :
    - Tous les fichiers .yml qui serviront pour les pages complexes
    - navigation.yml : fichier d'architecture du menu
  - Dossier _post/ :
    - Contient la listes des actualités
    - Pour ajouter une actualité : ajouter un fichier .md en mettant bien comme nom de fichier la yyyy-mm-dd-nom-de-l-actualite.md et en suivant les memes entêtes pour le contenu que sur les autres pages
  - Dossier _sass :
    - Contient le css, le style du site
  - Dossier assets/ :
    - Contient toutes les images présentes dans le site

 Tous les autres dossiers contiennent les pages du sites. Pour créer un nouvelle page, on crée un nouveau dossier. 
 Par exemple le fichier search.md dans le dossier occurrence, sera la page présente à cette url : url_du_site/occurrence/search/
 Voir la [documentation](https://jekyllrb.com/docs/pages/) pour l'ajout de pages.

 # Ajout de nouvelles section dans la page d'accueil

 La page d'accueil correspond au fichier home.md
 Dans la partie composition, il y a des 'type' qui correspondent aux différentes sections 
  - image de fond : type: heroimage
  - actualités entrée par le GBIF France : type: stats
  - actualités réccupérées sur le gbif.org : type: latestPost
  - ... cf compex.md pour explication des différents types
    
Il faut donc rajouter une section type pour ajouter une nouvelle section.
Si le type à une data: exemples.stories par exemple, il va venir réccupérer les informations du fichier home.yml (du dossier _data), sur la section stories
Plus d'information sur les type et data et leurs utilités sur la page complex.md 

# Ajout d'une news

Pour ajouter une news il faut ajouter un fichier .md dans le dossier _posts
Le nom de fichier commence par la date et et suivi par le titre.
Le fichier contient les informations suivantes:

- preTitle: Le sur titre, indiquant la date de publication de la news en toutes lettre
- title:  Le titre
- description: Le sous titre descriptif
- date:   La date de publication. Cette date là n'apparaîtra pas, mais attention, l'ajout d'une news avec une date de publication ultérieure à celle du jour rendra la news invisible
- categories: Les mots-clés
- background: L'image d'illustration
- thumbnail: L'image d'illustration de l'onglet
- lang: laisser fr
- imageLicense: L'autorat de l'image

# Ajout d'élément sur le calendrier

Pour ajouter une news sur le calendrier il faut ajouter un fichier .md dans le dossier _events
Le nom de fichier commence par la date et et suivi par le titre.
Le fichier contient les informations suivantes:

- title: Le titre, qui apparaitra sur le bandeau sur le calendrier
- event_date: La date de début de l'évenement au format AAAA-MM-JJ
- event_date_end: La date de fin de l'évenement **(exclue, donc j+1)** au format AAAA-MM-JJ
- url_post: Le lien vers le post correspondant (facultatif)

# Ajout d'élément sur une page simple et une page complexe

Il y a deux types de pages préconstruites dans le hosted portal. Les pages simples et les pages complexes. La page d'accueil et la page a propos/GBIF.org sont des pages complexes, le reste étant des pages simple.
Les pages simple comporte les éléments suivants: 
- title: Le titre
- layout: post (laisser la valeur par défaut)
- description: Le sous titre descriptif
- background: L'image d'illustration
- imageLicense:  L'autorat de l'image
- height: 70vh
- toc: true si l'on veut voir apparaitre l'index interactif à droite

