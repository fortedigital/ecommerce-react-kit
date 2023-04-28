import clsx from 'clsx';

import { AddToCartButton } from '../../domains/cart/components';
import useDictionary from '../../localization/use-dictionary';
import { ProductData } from '../../types/models';
import { Heading, Image, Price } from '../../ui';

import styles from './Product.module.css';

interface ProductProps {
  product: ProductData;
}

export default function Product({ product }: ProductProps) {
  const translate = useDictionary('product');

  return (
    <article className="block grid-l items-center">
      <div className="col-span-6">
        <Heading level={1} size="l">
          {product.name}
        </Heading>
        {product.description && (
          <div
            dangerouslySetInnerHTML={{ __html: product.description }}
            className={styles.description}
          />
        )}
        {product.price && (
          <>
            <div className={styles.pricing}>
              {product.discounted && (
                <div className={styles.discount}>
                  {product.discountPercent && (
                    <div className={styles.value}>
                      {translate('discount', {
                        percent: product.discountPercent,
                      })}
                    </div>
                  )}
                  {product.originalPrice && (
                    <Price
                      className={styles.originalPrice}
                      amount={product.originalPrice.amount}
                      currencyCode={product.originalPrice.currencyCode}
                    />
                  )}
                </div>
              )}
              <Price
                className={styles.price}
                amount={product.price.amount}
                currencyCode={product.price.currencyCode}
                total
              />
            </div>
            <AddToCartButton item={product}>
              {translate('toCart')}
            </AddToCartButton>
          </>
        )}
      </div>
      <div className={clsx('col-span-6', styles.imageContainer)}>
        {product.image && (
          <Image
            className={styles.image}
            src={product.image.src}
            alt={product.image.alt}
            height={900}
            width={900}
          />
        )}
      </div>
    </article>
  );
}
