var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
} 

var siteConfig = {
  version: 2,
  availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
  routes: {
    enabledRoutes: ['occurrenceSearch', 'institutionKey', 'institutionSearch', 'publisherSearch', 'publisherKey', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 1.8
    },
    rootPredicate: {
      "type": "or",
      "predicates": [
        {
          "key": "publishingCountry",
          "type": "equals",
          "value": "FR"
        },
        {
          "type": "and",
          "predicates": [
            {
              "key": "country",
              "type": "equals",
              "value": "FR"
            },
            {
              "key": "notIssues",
              "type": "equals",
              "value": "COUNTRY_COORDINATE_MISMATCH"
            }
          ]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'publisherKey', 'elevation', 'year', 'basisOfRecord', 'datasetName', 'occurrenceIssue'],
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  dataset: {
    rootFilter: {publishingCountry: 'FR'},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
  publisher: {
    rootFilter: {country: 'FR'},
    excludedFilters: ['countrySingle', 'networkKey'],
  },
  collection: {
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "FR",
	  active: true
    }
  },
  institution: {
    excludedFilters: ['countryGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "FR",
      active: true
    },
    mapSettings: {
      enabled: true,
      lat: 45.81,
      lng: 2.66,
      zoom: 5.4
    },
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['FR']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['FR']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  },
  maps: {
    locale: 'fr'
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }