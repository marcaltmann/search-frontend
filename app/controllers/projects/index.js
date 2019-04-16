import Controller from '@ember/controller';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['lat', 'lng', 'radius'],
  lat: null,
  lng: null,
  radius: null,

  projects: alias('model.hits'),

  actions: {
    changeLocation(latlng) {
      set(this, 'lat', latlng.lat);
      set(this, 'lng', latlng.lng);
    },
  },
});
