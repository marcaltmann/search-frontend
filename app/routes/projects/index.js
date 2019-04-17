import Route from '@ember/routing/route';
import ENV from 'search-frontend/config/environment';
import algoliasearch from 'algoliasearch';

function initializeSearch() {
  const appId = ENV.APP.ALGOLIA_SEARCH_APP_ID;
  const apiKey = ENV.APP.ALGOLIA_SEARCH_API_KEY;
  const indexName = `project_${ENV.environment}`;

  let client = algoliasearch(appId, apiKey);
  let index = client.initIndex(indexName);
  return index;
}

export default Route.extend({
  queryParams: {
    lat: {
      refreshModel: true,
    },
    lng: {
      refreshModel: true,
    },
    radius: {
      refreshModel: true,
    },
  },

  model(params) {
    let index = initializeSearch();

    let aroundLatLng;
    if (params.lat && params.lng) {
      aroundLatLng = `${params.lat},${params.lng}`;
    }

    let aroundRadius;
    if (params.radius) {
      // aroundRadius needs to be in meters
      aroundRadius = parseInt(params.radius, 10) * 1000;
    }

    let projects = index.search('', {
      aroundLatLng,
      aroundRadius,
      getRankingInfo: true,
    });
    return projects;
  },
});
