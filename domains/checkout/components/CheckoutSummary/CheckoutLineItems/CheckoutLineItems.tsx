﻿import useDictionary from '../../../../../localization/use-dictionary';
import { useRouter } from '../../../../../platform';
import { LineItemData } from '../../../../../types/models';
import {
  Heading,
  Link,
  List,
  PriceWithDiscount,
  Thumbnail,
} from '../../../../../ui';

import styles from './CheckoutLineItems.module.css';

interface CheckoutLineItemsProps {
  items: LineItemData[];
}

export default function CheckoutLineItems({ items }: CheckoutLineItemsProps) {
  const translate = useDictionary('checkoutLineItems');
  const { routes } = useRouter();

  return (
    <section>
      <Heading level={3} visuallyHidden>
        {translate('cart')}
      </Heading>
      <List items={items}>
        {(item) => (
          <List.Item className={styles.item} key={item.id}>
            <div className={styles.product}>
              <Heading level={3}>
                <Link
                  className={styles.link}
                  href={routes.product(item.productId)}
                >
                  {item.name}
                </Link>
              </Heading>
              <p className={styles.options}>
                {item.options
                  .map((o) => translate(o.parentId, { [o.parentId]: o.value }))
                  .join(' | ')}
              </p>
            </div>
            {item.image && (
              <Thumbnail
                className={styles.thumbnail}
                src={item.image.src}
                alt={item.image.alt}
                width={64}
                height={64}
              />
            )}
            <span className={styles.quantity}>
              {translate('quantity', { count: item.quantity })}
            </span>
            <PriceWithDiscount
              className={styles.price}
              amount={item.price.amount}
              currencyCode={item.price.currencyCode}
              originalAmount={item.originalPrice.amount}
              size="xs"
            />
          </List.Item>
        )}
      </List>
    </section>
  );
}
