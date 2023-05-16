import clsx from 'clsx';

import Price from '../Price';

import styles from './PriceWithDiscount.module.css';

interface PriceWithDiscountProps {
  amount: number;
  currencyCode: string;
  className?: string;
  direction?: 'column' | 'row';
  originalAmount?: number;
  position?: 'left' | 'center' | 'right';
  size?: 'xs' | 's' | 'm' | 'l';
  total?: boolean;
}

export default function PriceWithDiscount({
  amount,
  className,
  currencyCode,
  direction = 'row',
  originalAmount,
  position = 'left',
  size,
  total = false,
}: PriceWithDiscountProps) {
  return (
    <div
      className={clsx(
        styles.root,
        {
          [styles.column]: direction === 'column',
          [styles.row]: direction === 'row',
          [styles.extraSmall]: size === 'xs',
          [styles.small]: size === 's',
          [styles.medium]: size === 'm',
          [styles.large]: size === 'l',
          [styles.left]: position === 'left',
          [styles.center]: position === 'center',
          [styles.right]: position === 'right',
        },
        className
      )}
    >
      <Price
        className={styles.price}
        amount={amount}
        currencyCode={currencyCode}
        total={total}
      />
      {originalAmount && (
        <Price
          className={styles.originalPrice}
          amount={originalAmount}
          currencyCode={currencyCode}
        />
      )}
    </div>
  );
}
