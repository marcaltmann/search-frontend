import Component from '@ember/component';
import places from 'places.js';
import ENV from 'search-frontend/config/environment';

export default Component.extend({
  didRender() {
    this._super(...arguments);

    let inputElement = this.element.querySelector('#search-input');
    let options = {
      appId: ENV.APP.ALGOLIA_PLACES_APP_ID,
      apiKey: ENV.APP.ALGOLIA_PLACES_API_KEY,
      container: inputElement,
      language: 'de',
      countries: ['de', 'ch', 'at'],
    };

    let placesAutocomplete = places(options);

    placesAutocomplete.on('change', (event) => {
      let { latlng } = event.suggestion;
      this.onChange(latlng);
    });

    placesAutocomplete.on('clear', () => {
      this.onChange({
        lat: null,
        lng: null,
      });
    });

    this.placesAutocomplete = placesAutocomplete;
  },
});
