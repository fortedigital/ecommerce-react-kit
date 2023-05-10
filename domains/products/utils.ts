import {
  ProductOptionChoiceData,
  ProductOptionData,
  ProductVariantData,
} from '../../types/models';

export function restoreProductOptionChoicesFromUrl(
  productOptions: ProductOptionData[],
  urlSearchParams: Readonly<URLSearchParams>
) {
  return productOptions.reduce<ProductOptionChoiceData[]>((choices, option) => {
    const choice = urlSearchParams.get(option.id);

    if (choice) {
      choices.push({ parentId: option.id, value: choice });
    }

    return choices;
  }, []);
}

export function getActiveProductVariant(
  optionChoices: ProductOptionChoiceData[],
  variants: ProductVariantData[]
) {
  return (
    getChosenProductVariant(optionChoices, variants) ??
    getMainProductVariant(variants)
  );
}

export function getMainProductVariant(variants: ProductVariantData[]) {
  return variants.length > 0 ? variants[0] : undefined;
}

export function buildProductUrl(
  pathname: string,
  searchParams: Readonly<URLSearchParams>,
  optionChoices: ProductOptionChoiceData[]
) {
  const newSearchParams = new URLSearchParams(searchParams);
  optionChoices.forEach(({ parentId, value }) => {
    newSearchParams.set(parentId, value);
  });
  const searchParamsString = newSearchParams.toString();
  return searchParamsString ? `${pathname}?${searchParamsString}` : pathname;
}

function getChosenProductVariant(
  optionChoices: ProductOptionChoiceData[],
  variants: ProductVariantData[]
) {
  return variants.find((variant) =>
    optionChoices.every((optionChoice) =>
      variant.options.some(
        (variantOptionChoice) =>
          variantOptionChoice.parentId === optionChoice.parentId &&
          variantOptionChoice.value === optionChoice.value
      )
    )
  );
}
