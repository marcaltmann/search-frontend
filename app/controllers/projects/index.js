import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['lat', 'lng', 'radius'],
  lat: null,
  lng: null,
  radius: null,

  projects: alias('model.hits'),
});
