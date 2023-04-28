import NamespaceKeys from 'use-intl/dist/core/utils/NamespaceKeys';
import NestedKeyOf from 'use-intl/dist/core/utils/NestedKeyOf';

export type Dictionary =
  typeof import('../localization/dictionaries/en-GB.json');

export type DictionaryKey = NamespaceKeys<Dictionary, NestedKeyOf<Dictionary>>;
