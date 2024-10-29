---
title: Rechercher sur le GBIF France
description: À l'aide du titre ou des mots clés
layout: post
---

<div id="search-demo-container">
      <input type="search" id="search-input" placeholder="Chercher...">
      <ul id="results-container"></ul>
</div>

 <script src="{{ site.baseurl }}/scripts/simple-jekyll-search.min.js"></script>

<script>
      window.simpleJekyllSearch = new SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: "{{ site.baseurl }}/search.json",
        searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}">{title}</a></li>',
        noResultsText: 'Aucun résultat',
        limit: 10,
        fuzzy: false
      })
</script>
