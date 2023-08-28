import useDictionary from '../../../../../localization/use-dictionary';
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
                <Link className={styles.link} href={item.url}>
                  {item.name}
                </Link>
              </Heading>
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
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
              originalAmount={
                item.discounted ? item.originalPrice.amount : undefined
              }
              size="xs"
            />
          </List.Item>
        )}
      </List>
    </section>
  );
}
