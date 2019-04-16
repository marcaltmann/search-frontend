import Component from '@ember/component';
import { notEmpty, reads } from '@ember/object/computed';

export default Component.extend({
  hasDistance: notEmpty('project._rankingInfo.matchedGeoLocation'),
  distance: reads('project._rankingInfo.matchedGeoLocation.distance'),
});
