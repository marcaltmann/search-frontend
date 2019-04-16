import Component from '@ember/component';
import places from 'places.js';
import ENV from 'search-frontend/config/environment';

export default Component.extend({
  didRender() {
    this._super(...arguments);

    let inputElement = this.element.querySelector('#search-input');
    let options = {
      appId: ENV.APP.ALGOLIA_APP_ID,
      apiKey: ENV.APP.ALGOLIA_API_KEY,
      container: inputElement,
    };

    let placesAutocomplete = places(options);
    placesAutocomplete.on('change', (event) => {
      let { latlng } = event.suggestion;
      console.log(latlng);

      // sendToSearchService(latlng.lat, latlng.lng);
    });

    this.placesAutocomplete = placesAutocomplete;
  },
});
