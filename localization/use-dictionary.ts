import { useTranslations } from 'use-intl';

import { DictionaryKey } from './types';

const useDictionary = (key: DictionaryKey) => {
  return useTranslations(key);
};

export default useDictionary;
