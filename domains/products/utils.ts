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
      choices.push({ optionId: option.id, value: choice });
    }

    return choices;
  }, []);
}

export function getChosenProductVariant(
  optionChoices: ProductOptionChoiceData[],
  variants: ProductVariantData[]
) {
  return variants.find((variant) =>
    optionChoices.every((optionChoice) =>
      variant.options.some(
        (variantOptionChoice) =>
          variantOptionChoice.optionId === optionChoice.optionId &&
          variantOptionChoice.value === optionChoice.value
      )
    )
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
  optionChoices.forEach(({ optionId, value }) => {
    newSearchParams.set(optionId, value);
  });
  const searchParamsString = newSearchParams.toString();
  return searchParamsString ? `${pathname}?${searchParamsString}` : pathname;
}
