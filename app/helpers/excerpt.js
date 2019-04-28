import { helper } from '@ember/component/helper';

const MAX_CHARS = 300;

export function excerpt(params/*, hash*/) {
  let text = params[0];

  if (text.length <= MAX_CHARS) {
    return text;
  }

  let textExcerpt = `${text.slice(0, MAX_CHARS)}…`;

  return textExcerpt;
}

export default helper(excerpt);
