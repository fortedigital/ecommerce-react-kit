import clsx from 'clsx';

import formatPrice from './format-price';

import styles from './Price.module.css';

interface PriceProps {
  amount: number;
  currencyCode: string;
  className?: string;
  total?: boolean;
}

export default function Price({
  amount,
  className,
  currencyCode,
  total = false,
}: PriceProps) {
  const Component: React.ElementType = total ? 'strong' : 'span';
  return (
    <Component className={clsx(styles.root, className)}>
      {formatPrice(amount, currencyCode)}
    </Component>
  );
}
