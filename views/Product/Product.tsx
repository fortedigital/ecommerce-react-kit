import { AddToCartButton } from '../../domains/cart/components';
import { ProductOptionList } from '../../domains/products/components';
import { useInitProductOptionChoicesInUrl } from '../../domains/products/hooks';
import {
  getActiveProductVariant,
  restoreProductOptionChoicesFromUrl,
} from '../../domains/products/utils';
import useDictionary from '../../localization/use-dictionary';
import { useRouter } from '../../platform';
import { ProductData } from '../../types/models';
import { Gallery, Heading, Markup, PriceWithDiscount } from '../../ui';

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
      <div className="col-span-5">
        <Heading level={1} size="l">
          {product.name}
        </Heading>

        {description && <Markup className={styles.block}>{description}</Markup>}

        {product.options && (
          <ProductOptionList
            className={styles.block}
            options={product.options}
          />
        )}

        {activeVariantOrProduct.price && (
          <PriceWithDiscount
            className={styles.price}
            amount={activeVariantOrProduct.price.amount}
            currencyCode={activeVariantOrProduct.price.currencyCode}
            originalAmount={
              activeVariantOrProduct.discounted
                ? activeVariantOrProduct.originalPrice?.amount
                : undefined
            }
            size="l"
          />
        )}

        {activeVariantOrProduct.forSale && (
          <AddToCartButton
            className={styles.button}
            itemId={activeVariantOrProduct.id}
          >
            {translate('toCart')}
          </AddToCartButton>
        )}
      </div>

      <Gallery
        className="col-span-7"
        title={translate('gallery')}
        images={product.images}
      />
    </article>
  );
}
