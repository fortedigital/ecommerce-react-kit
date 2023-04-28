import OrderSummaryItem from './OrderSummaryItem';

import useDictionary from '../../../../localization/use-dictionary';
import { PriceData } from '../../../../types/models';
import { Price } from '../../../../ui';

import styles from './OrderSummary.module.css';

interface PurchaseCostProps {
  discount: PriceData;
  shippingTotal: PriceData;
  subtotal: PriceData;
  total: PriceData;
  className?: string;
}

export default function OrderSummary({
  className,
  discount,
  shippingTotal,
  subtotal,
  total,
}: PurchaseCostProps) {
  const translate = useDictionary('orderSummary');

  return (
    <dl className={className}>
      <OrderSummaryItem
        label={translate('subtotal')}
        value={
          <Price
            amount={subtotal.amount}
            currencyCode={subtotal.currencyCode}
          />
        }
      />
      {discount.amount > 0 && (
        <OrderSummaryItem
          label={translate('discount')}
          value={
            <Price
              amount={discount.amount}
              currencyCode={discount.currencyCode}
            />
          }
        />
      )}
      <OrderSummaryItem
        label={translate('shippingTotal')}
        value={
          <Price
            amount={shippingTotal.amount}
            currencyCode={shippingTotal.currencyCode}
          />
        }
      />
      <OrderSummaryItem
        label={translate('total')}
        value={
          <Price
            className={styles.totalPrice}
            amount={total.amount}
            currencyCode={total.currencyCode}
            total
          />
        }
      />
    </dl>
  );
}
