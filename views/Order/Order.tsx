import { Address } from '../../domains/contact';
import { LineItems } from '../../domains/line-items/components';
import { OrderLineItem, OrderSummary } from '../../domains/orders/components';
import useDictionary from '../../localization/use-dictionary';
import { OrderData } from '../../types/models';
import { Box, Heading } from '../../ui';

import styles from './Order.module.css';

interface OrderProps {
  order: OrderData;
}

export default function Page({ order }: OrderProps) {
  const translate = useDictionary('order');

  return (
    <article className="block">
      <Heading level={1} className={styles.title} size="l">
        {translate('title', { id: order.id })}
      </Heading>
      <div className="grid-l gap-row-l">
        <div className="col-span-9">
          <LineItems items={order.lineItems}>
            {(item) => <OrderLineItem item={item} />}
          </LineItems>
          <OrderSummary
            className={styles.cost}
            discount={order.discount}
            shippingTotal={order.shippingTotal}
            subtotal={order.subtotal}
            total={order.total}
          />
        </div>
        <div className="col-span-3">
          <Box className={styles.details} theme="light">
            <Heading level={2} size="xxs">
              {translate('contactDetails')}
            </Heading>
            <Address address={order.customer} />
          </Box>
          <Box className={styles.details} theme="dark">
            <Heading level={2} size="xxs">
              {translate('deliveryAddress')}
            </Heading>
            <Address address={order.deliveryAddress} />
          </Box>
        </div>
      </div>
    </article>
  );
}
