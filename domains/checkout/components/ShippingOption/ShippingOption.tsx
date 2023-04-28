import { ShippingOptionData } from '../../../../types/models';
import { Price } from '../../../../ui';

import styles from './ShippingOption.module.css';

interface ShippingOptionProps {
  option: ShippingOptionData;
}

export default function ShippingOption({ option }: ShippingOptionProps) {
  return (
    <span className={styles.root}>
      <strong className={styles.name}>
        {option.displayName || option.methodName}
      </strong>
      <Price
        amount={option.price.amount}
        currencyCode={option.price.currencyCode}
      />
      <span className={styles.deliveryTime}>{option.deliveryTime}</span>
    </span>
  );
}
