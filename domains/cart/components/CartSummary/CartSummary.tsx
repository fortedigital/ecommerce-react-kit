import useDictionary from '../../../../localization/use-dictionary';
import { CartData } from '../../../../types/models';
import { Box, Heading, Link, Price } from '../../../../ui';

import styles from './CartSummary.module.css';

interface CartSummaryProps {
  cart: CartData;
  className?: string;
}

export default function CartSummary({ className, cart }: CartSummaryProps) {
  const translate = useDictionary('cartSummary');

  return (
    <Box className={className} theme="dark">
      <Heading level={2} visuallyHidden>
        {translate('title')}
      </Heading>
      <dl>
        <dt className={styles.priceLabel}>{translate('subtotal')}</dt>
        <dd className={styles.price}>
          <Price
            amount={cart.subtotal.amount}
            currencyCode={cart.subtotal.currencyCode}
            total
          />
        </dd>
        {cart.discounted && (
          <>
            <div className={styles.discount}>
              <dt>{translate('discount')}</dt>
              <dd>
                <Price
                  amount={cart.discount.amount}
                  currencyCode={cart.discount.currencyCode}
                />
              </dd>
            </div>

            <div className={styles.originalPrice}>
              <dt>{translate('originalPrice')}</dt>
              <dd>
                <Price
                  amount={cart.subtotalWithoutDiscount.amount}
                  currencyCode={cart.subtotalWithoutDiscount.currencyCode}
                />
              </dd>
            </div>
          </>
        )}
      </dl>
      <p className={styles.disclaimer}>{translate('deliveryCharge')}</p>
      <Link
        className={styles.link}
        href="/checkout"
        color="accent"
        size="medium"
        variant="solid"
        fullWidth
      >
        {translate('toCheckout')}
      </Link>
    </Box>
  );
}
