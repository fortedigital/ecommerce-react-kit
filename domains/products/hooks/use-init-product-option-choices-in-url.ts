import { useEffect } from 'react';

import {
  ProductOptionChoiceData,
  ProductVariantData,
} from '../../../types/models';
import { Router } from '../../../types/platform';
import { buildProductUrl } from '../utils';

export default function useInitProductOptionChoicesInUrl(
  router: Router,
  optionChoices: ProductOptionChoiceData[],
  variant?: ProductVariantData
) {
  useEffect(() => {
    if (router.isReady && optionChoices.length === 0 && variant) {
      const url = buildProductUrl(
        router.pathname,
        router.searchParams,
        variant.options
      );
      router.replace(url);
    }
  }, [optionChoices.length, router, variant]);
}
