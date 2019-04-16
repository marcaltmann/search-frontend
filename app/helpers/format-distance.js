import { helper } from '@ember/component/helper';

export function formatDistance(params/*, hash*/) {
  let distance = params[0];

  let numberFormat = new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 });
  let formattedDistance = `${numberFormat.format(distance / 1000)} km`;

  return formattedDistance;
}

export default helper(formatDistance);
