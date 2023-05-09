import clsx from 'clsx';

import useDictionary from '../../../../localization/use-dictionary';
import { ProductData } from '../../../../types/models';
import { Price } from '../../../../ui';

import styles from './ProductPrice.module.css';

interface ProductPriceProps
  extends Pick<
    ProductData,
    'discounted' | 'discountPercent' | 'originalPrice' | 'price'
  > {
  size: 'm' | 'l';
  className?: string;
}

export default function ProductPrice({
  className,
  discounted,
  discountPercent,
  originalPrice,
  price,
  size,
}: ProductPriceProps) {
  const translate = useDictionary('productPrice');

  if (!price) {
    return null;
  }

  return (
    <div className={clsx(styles.root, {
      [styles.medium]: size === 'm',
      [styles.large]: size === 'l',
    }, className)}>
      {discounted && (
        <div className={styles.discount}>
          {discountPercent && (
            <div className={styles.value}>
              {translate('discount', {
                percent: discountPercent,
              })}
            </div>
          )}
          {originalPrice && (
            <Price
              className={styles.originalPrice}
              amount={originalPrice.amount}
              currencyCode={originalPrice.currencyCode}
            />
          )}
        </div>
      )}
      <Price
        className={styles.price}
        amount={price.amount}
        currencyCode={price.currencyCode}
        total
      />
    </div>
  );
}
