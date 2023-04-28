import pick from 'lodash/pick';

import dictionaries from './dictionaries';
import { Dictionary, DictionaryKey } from './types';

// TODO: Share with next.config.js
const defaultLocale = 'en-GB';

export default async function getDictionary(
  locale: string = defaultLocale,
  key: DictionaryKey | DictionaryKey[]
): Promise<Partial<Dictionary>> {
  let dictionary;

  try {
    dictionary = await dictionaries[locale]();
  } catch (error) {
    console.error(error);
    dictionary = await dictionaries[defaultLocale]();
  }

  return pick(dictionary, key);
}
