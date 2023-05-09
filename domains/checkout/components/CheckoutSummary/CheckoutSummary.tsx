import clsx from 'clsx';

import useDictionary from '../../../../localization/use-dictionary';
import { CartData, ShippingOptionData } from '../../../../types/models';
import {
  Box,
  Button,
  Heading,
  Link,
  List,
  Price,
  Thumbnail,
} from '../../../../ui';
import { calculateTotal } from '../../utils';

import styles from './CheckoutSummary.module.css';

interface CheckoutSummaryProps {
  cart: CartData;
  onSubmit: () => void;
  className?: string;
  shippingOption?: ShippingOptionData;
}

export default function CheckoutSummary({
  className,
  cart,
  onSubmit,
  shippingOption,
}: CheckoutSummaryProps) {
  const translate = useDictionary('checkoutSummary');
  const total = calculateTotal(cart.subtotal, shippingOption?.price);

  return (
    <Box className={className} theme="dark">
      <Heading level={2} size="xxs" visuallyHidden>
        {translate('title')}
      </Heading>
      <dl>
        <div className={styles.data}>
          <dt className="visually-hidden">{translate('cart')}</dt>
          <dd className={styles.lineItems}>
            <List items={cart.lineItems}>
              {(item) => (
                <List.Item className={styles.item} key={item.id}>
                  <div>
                    <Heading level={3}>
                      <Link className={styles.link} href={item.url}>
                        {item.name}
                      </Link>
                    </Heading>
                    <span>{item.options.map((x) => x.value).join(' | ')}</span>
                  </div>
                  {item.image && (
                    <Thumbnail
                      className={styles.image}
                      src={item.image.src}
                      alt={item.image.alt}
                      width={64}
                      height={64}
                    />
                  )}
                  <div className={styles.details}>
                    <span className={styles.quantity}>
                      {translate('quantity', { count: item.quantity })}
                    </span>
                    <div className={styles.pricing}>
                      {item.discounted && (
                        <Price
                          className={styles.regularPrice}
                          amount={item.originalPrice.amount}
                          currencyCode={item.price.currencyCode}
                        />
                      )}
                      <Price
                        amount={item.price.amount}
                        currencyCode={item.price.currencyCode}
                      />
                    </div>
                  </div>
                </List.Item>
              )}
            </List>
          </dd>
        </div>
        <div className={styles.data}>
          <dt>{translate('subtotal')}</dt>
          <dd>
            <Price
              amount={
                cart.subtotalWithoutDiscount?.amount ?? cart.subtotal.amount
              }
              currencyCode={
                cart.subtotalWithoutDiscount?.currencyCode ??
                cart.subtotal.currencyCode
              }
            />
          </dd>
        </div>
        {cart.discounted && (
          <div className={clsx(styles.data, styles.discount)}>
            <dt>{translate('discount')}</dt>
            <dd>
              <Price
                amount={cart.discount.amount}
                currencyCode={cart.subtotal.currencyCode}
              />
            </dd>
          </div>
        )}
        <div className={styles.data}>
          <dt>{translate('deliveryCost')}</dt>
          <dd>
            {shippingOption ? (
              <Price
                amount={shippingOption.price.amount}
                currencyCode={shippingOption.price.currencyCode}
              />
            ) : (
              translate('toShippingMethod')
            )}
          </dd>
        </div>
        <div className={styles.data}>
          <dt>{translate('total')}</dt>
          <dd>
            <Price
              className={styles.totalPrice}
              amount={total.amount}
              currencyCode={total.currencyCode}
              total
            />
          </dd>
        </div>
      </dl>
      <Button
        className={styles.button}
        type="submit"
        color="accent"
        size="medium"
        variant="solid"
        fullWidth
        onClick={onSubmit}
      >
        {translate('toPayment')}
      </Button>
    </Box>
  );
}
