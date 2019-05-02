import Controller from '@ember/controller';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['q', 'lat', 'lng', 'radius'],
  q: '',
  lat: null,
  lng: null,
  radius: 0,

  zoom: 12,
  selectedProjectId: null,

  projects: alias('model.hits'),

  actions: {
    changeLocation(latlng) {
      set(this, 'lat', latlng.lat);
      set(this, 'lng', latlng.lng);
    },

    selectProject(project) {
      set(this, 'selectedProject', project);
    },
  },
});
