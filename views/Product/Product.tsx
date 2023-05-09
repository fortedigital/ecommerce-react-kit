import { useEffect } from 'react';
import clsx from 'clsx';

import ProductOptionList from '../../domains//products/components/ProductOptionList';
import { AddToCartButton } from '../../domains/cart/components';
import {
  buildProductUrl,
  getChosenProductVariant,
  getMainProductVariant,
  restoreProductOptionChoicesFromUrl,
} from '../../domains/products/utils';
import useDictionary from '../../localization/use-dictionary';
import { useRouter } from '../../platform';
import { ProductData } from '../../types/models';
import { Heading, Image, Markup, Price } from '../../ui';

import styles from './Product.module.css';

interface ProductProps {
  product: ProductData;
}

export default function Product({ product }: ProductProps) {
  const translate = useDictionary('product');
  const router = useRouter();

  const optionChoices = restoreProductOptionChoicesFromUrl(
    product.options,
    router.searchParams
  );
  const chosenVariant = getChosenProductVariant(
    optionChoices,
    product.variants
  );
  const displayVariant =
    chosenVariant ?? getMainProductVariant(product.variants);
  const displayProduct = displayVariant ?? product;

  useEffect(() => {
    if (router.isReady && optionChoices.length === 0 && displayVariant) {
      const url = buildProductUrl(
        router.pathname,
        router.searchParams,
        displayVariant.options
      );
      router.replace(url);
    }
  }, [optionChoices.length, router, displayVariant]);

  return (
    <article className="block grid-l items-center">
      <div className="col-span-6">
        <Heading level={1} size="m">
          {displayProduct.name}
        </Heading>
        {displayProduct.description && (
          <Markup className={styles.description}>
            {displayProduct.description}
          </Markup>
        )}
        {product.options && (
          <ProductOptionList
            className={styles.variants}
            options={product.options}
          />
        )}
        {displayProduct.price && (
          <>
            <div className={styles.pricing}>
              {displayProduct.discounted && (
                <div className={styles.discount}>
                  {displayProduct.discountPercent && (
                    <div className={styles.value}>
                      {translate('discount', {
                        percent: displayProduct.discountPercent,
                      })}
                    </div>
                  )}
                  {displayProduct.originalPrice && (
                    <Price
                      className={styles.originalPrice}
                      amount={displayProduct.originalPrice.amount}
                      currencyCode={displayProduct.originalPrice.currencyCode}
                    />
                  )}
                </div>
              )}
              <Price
                className={styles.price}
                amount={displayProduct.price.amount}
                currencyCode={displayProduct.price.currencyCode}
                total
              />
            </div>
            <AddToCartButton itemId={displayProduct.id}>
              {translate('toCart')}
            </AddToCartButton>
          </>
        )}
      </div>
      <div className={clsx('col-span-6', styles.imageContainer)}>
        {displayProduct.image && (
          <Image
            className={styles.image}
            src={displayProduct.image.src}
            alt={displayProduct.image.alt}
            height={900}
            width={900}
            preload
          />
        )}
      </div>
    </article>
  );
}
