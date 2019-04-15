import DS from 'ember-data';
import ENV from 'search-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
});
