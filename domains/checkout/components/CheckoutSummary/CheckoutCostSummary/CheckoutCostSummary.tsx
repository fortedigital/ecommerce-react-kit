import { CartData, ShippingOptionData } from '../../../../../types/models';
import { calculateTotal } from '../../../utils';
import useDictionary from './../../../../../localization/use-dictionary';
import { Heading, Price } from './../../../../../ui';

import styles from './CheckoutCostSummary.module.css';

interface CheckoutCostSummary {
  cart: CartData;
  shippingOption?: ShippingOptionData;
}

export default function CheckoutCostSummary({
  cart,
  shippingOption,
}: CheckoutCostSummary) {
  const translate = useDictionary('checkoutCostSummary');
  const subtotal = cart.subtotalWithoutDiscount ?? cart.subtotal;
  const total = calculateTotal(cart.subtotal, shippingOption?.price);

  return (
    <section>
      <Heading level={3} visuallyHidden>
        Cost summary
      </Heading>
      <p className={styles.row}>
        {translate('subtotal')}
        <Price amount={subtotal.amount} currencyCode={subtotal.currencyCode} />
      </p>
      <p className={styles.row}>
        {translate('discount')}
        <Price
          amount={cart.discount.amount}
          currencyCode={cart.discount.currencyCode}
        />
      </p>
      <p className={styles.row}>
        {translate('deliveryCost')}
        {shippingOption ? (
          <Price
            amount={shippingOption.price.amount}
            currencyCode={shippingOption.price.currencyCode}
          />
        ) : (
          <span>{translate('toShippingMethod')}</span>
        )}
      </p>
      <p className={styles.row}>
        {translate('total')}
        <Price
          className={styles.totalPrice}
          amount={total.amount}
          currencyCode={total.currencyCode}
          total
        />
      </p>
    </section>
  );
}
