import clsx from 'clsx';

import { AddToCartButton } from '../../domains/cart/components';
import {
  ProductOptionList,
  ProductPrice,
} from '../../domains/products/components';
import { useInitProductOptionChoicesInUrl } from '../../domains/products/hooks';
import {
  getActiveProductVariant,
  restoreProductOptionChoicesFromUrl,
} from '../../domains/products/utils';
import useDictionary from '../../localization/use-dictionary';
import { useRouter } from '../../platform';
import { ProductData } from '../../types/models';
import { Gallery, Heading, Markup } from '../../ui';

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
  const activeVariant = getActiveProductVariant(
    optionChoices,
    product.variants
  );
  const activeVariantOrProduct = activeVariant ?? product;
  const description = activeVariant?.description ?? product.description;

  useInitProductOptionChoicesInUrl(router, optionChoices, activeVariant);

  return (
    <article className="block grid-l items-center">
      <div className="col-span-6">
        <Heading level={1} size="m">
          {product.name}
        </Heading>
        {description && (
          <Markup className={styles.description}>{description}</Markup>
        )}
        {product.options && (
          <ProductOptionList
            className={styles.variants}
            options={product.options}
          />
        )}
        {activeVariantOrProduct.price && (
          <>
            <ProductPrice
              className={styles.pricing}
              discounted={activeVariantOrProduct.discounted}
              discountPercent={activeVariantOrProduct.discountPercent}
              originalPrice={activeVariantOrProduct.originalPrice}
              price={activeVariantOrProduct.price}
              size="l"
            />
            <AddToCartButton itemId={activeVariantOrProduct.id}>
              {translate('toCart')}
            </AddToCartButton>
          </>
        )}
      </div>
      <Gallery
        className={clsx('col-span-6', styles.gallery)}
        title={translate('gallery')}
        images={product.images}
      />
    </article>
  );
}
