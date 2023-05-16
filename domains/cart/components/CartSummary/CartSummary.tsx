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
      <p className={styles.currentPrice}>
        <span className={styles.priceLabel}>{translate('subtotal')}</span>
        <Price
          className={styles.priceValue}
          amount={cart.subtotal.amount}
          currencyCode={cart.subtotal.currencyCode}
          total
        />
      </p>
      {cart.discounted && (
        <p className={styles.oldPrice}>
          <span className={styles.discount}>
            {translate('discount')}{' '}
            <Price
              amount={cart.discount.amount}
              currencyCode={cart.discount.currencyCode}
            />
          </span>
          {translate('originalPrice')}{' '}
          <Price
            amount={cart.subtotalWithoutDiscount.amount}
            currencyCode={cart.subtotalWithoutDiscount.currencyCode}
          />
        </p>
      )}
      <p className={styles.disclaimer}>{translate('deliveryCharge')}</p>
      <Link
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
