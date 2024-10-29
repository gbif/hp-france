---
title: Les standards TDWG et le Darwin Core
layout: post
description: Qu'est-ce que le TDWG, et qu'est-ce que le Darwin Core ?
background: assets/logo/logo-TDWG.png
imageLicense: |
 Logo TDWG 
height: 70vh
toc: true
---
<style> .feature-img img {background-color: white; object-fit: contain }> </style>
## Le TDWG

Historiquement connu sous le nom de "Taxonomic Databases Working Group", ou Groupe de Travail sur les bases de données taxonomiques, l’organisation [Biodiversity Information Standards (TDWG)](https://www.tdwg.org/) a été créée pour favoriser la collaboration internationale entre les créateurs, gestionnaires et utilisateurs des informations sur la biodiversité, tout en promouvant une diffusion plus large et efficace des connaissances sur le patrimoine biologique mondial.

Pour atteindre ses objectifs, le TDWG :

  - Développe, ratifie et promeut des normes et directives pour l'enregistrement et l'échange des données relatives aux organismes.
  - Sert de forum pour discuter de tous les aspects de la gestion des informations sur la biodiversité à travers des réunions, des discussions en ligne et des publications.

Le GBIF France est investi dans la communauté TDWG comme peuvent témoigner ces publications dans le journal BISS (publié par Pensoft), à l'occasion des congrès associés:

<details>
  <summary><b>Quelques publications du GBIF France au TDWG</b></summary>
<ul>
<li>Lebas, N., Akbaraly, M., Archambeau, A.-S., Chenin, É., Gasc, D., Roca Ristol, P., & Vignes-Lebbe, R. (Eds.). (2011). GBIF France links with national programs : Architecture and Roadmap. <i>TDWG 2011 Annual Conference</i>. <a href="https://mbgocs.mobot.org/index.php/tdwg/2011/paper/view/158" target="_blank"> https://mbgocs.mobot.org/index.php/tdwg/2011/paper/view/158</a></li>

<li>Archambeau, A., Cavière, F., Koura, K., Lecoq, M., Pamerlon, S., & Ganglo, J. (2018). The Living Atlases community in action: the GBIF Benin data portal.<i> Biodiversity Information Science and Standards, 2,</i> Art. e25488.<a href="https://doi.org/10.3897/biss.2.25488" target="_blank"> https://doi.org/10.3897/biss.2.25488</a></li>

<li>Lecoq, M., Archambeau, A., Cavière, F., Koura, K., Pamerlon, S., & Ganglo, J. (2018). GBIF Benin’s data portal.<i> Biodiversity Information Science and Standards, 2,</i> Art. e25890.<a href=" https://doi.org/10.3897/biss.2.25890" target="_blank"> https://doi.org/10.3897/biss.2.25890</a></li>

<li>Ainsa, A., Pamerlon, S., Archambeau, A., Beauvieux, R., Radji, R., & Chevillotte, H. (2023). Regional Data Platform of West and Central African Herbaria. <i> Biodiversity Information Science and Standards, 7,</i> Art. e112180. <a href="https://doi.org/10.3897/biss.7.112180" target="_blank">https://doi.org/10.3897/biss.7.112180</a></li>

<li>Pamerlon, S., Archambeau, A., De La Hoz, F. P., Olivier, G., Michel, F., Tercerie, S., Rodinson, E., Maurel, N., Martínez-Sagarra, G., Kerner, A., Lebbe, R. V., Schatz, B., & Dupont, P. (2023). Knowledge Base on Species Life Traits: A Spanish/French Plinian Core implementation use case. <i> Biodiversity Information Science and Standards, 7,</i> Art. e111784.<a href="https://doi.org/10.3897/biss.7.111784" target="_blank"> https://doi.org/10.3897/biss.7.111784</a></li>
</ul>

</details>

<br>

Le TDWG sanctionne le développement de plusieurs standards utilisé par le GBIF, le plus connu étant certainement le Darwin Core 

## Le Darwin Core 

Le [standard Darwin Core (DwC)](https://dwc.tdwg.org/) offre un cadre stable, simple et flexible pour compiler des données sur la biodiversité provenant de sources variées et hétérogènes. Le Darwin Core est géré par le [groupe de maintenance Darwin Core](https://www.tdwg.org/community/dwc/). Il comprend un [glossaire de termes](https://dwc.tdwg.org/list/) destiné à faciliter le partage d'informations sur la biodiversité, en fournissant des identifiants, des labels et des définitions. Darwin Core est principalement axé sur les taxons, leurs occurrences dans la nature, telles que documentées par des observations, des spécimens de collection, des échantillons, et les informations associées. Il vise à assurer la compatibilité avec d'autres normes liées à la biodiversité et à faciliter l'ajout de composants et d'attributs aux données biologiques. 
Elle joue un rôle essentiel dans le partage, l'utilisation et la réutilisation des données en libre accès sur la biodiversité, représentant aujourd'hui la grande majorité des milliards d'occurrences d'espèces disponibles sur GBIF.org.

En pratique, l'utilisation de Darwin Core repose sur un format de fichier standard, le Darwin Core Archive (DwC-A). Ce format compact (un fichier ZIP) contient des fichiers texte interconnectés, permettant aux éditeurs de données de partager leurs informations avec une terminologie commune. Cette standardisation simplifie non seulement la publication des ensembles de données sur la biodiversité, mais facilite également leur découverte, recherche, évaluation et comparaison par les utilisateurs, répondant ainsi aux questions de recherche et de politique axées sur les données intensives d'aujourd'hui. 

Pour son utilisation par le GBIF, le Darwin Core est en constante évolution, par l'ajout par la communauté de champs nécessaires pour retranscrire au mieux leurs données sur la biodiversité à travers [des extensions](https://rs.gbif.org/extensions.html). Plus de détails sur l'utilisation du DwC par le GBIF peuvent être trouvés [ici](https://www.gbif.org/fr/darwin-core)


### Les extensions du Darwin Core


EN plus du vocabulaire de base du DwC, le TDWG propose deux extensions, le [Chronometric Age Extension](https://chrono.tdwg.org/terms/) pour les datations absolues et l'extension [Humboldt pour les inventaires écologiques](https://eco.tdwg.org/list/#4-vocabulary) 


Si des données transférées au GBIF ne correspondent pas à un champs du Darwin Core ni à une des extensions officielles, l'information peut quand même être transmise grâce à des extensions du DwC. La liste, disponible [ici](https://rs.gbif.org/extensions.html), contient des extensions portant entre autres sur les données génétiques, l'historique d'identification ou encore les noms vernaculaires. 

