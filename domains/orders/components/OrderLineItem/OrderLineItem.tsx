import clsx from 'clsx';

import { LineItemData } from '../../../../types/models';
import { Heading, Link, Price, Thumbnail } from '../../../../ui';

import styles from './OrderLineItem.module.css';

interface OrderItemProps {
  item: LineItemData;
}

export default function OrderLineItem({ item }: OrderItemProps) {
  return (
    <>
      <td className={clsx(styles.value, styles.info)}>
        <div>
          <Heading className={styles.title} level={2} size="xxs">
            <Link href={`/products/${item.productId}`}>{item.name}</Link>
          </Heading>
          <span className={styles.options}>
            {item.options.map((x) => x.value).join(' | ')}
          </span>
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
      </td>
      <td className={styles.value}>
        <Price
          amount={item.unitPrice.amount}
          currencyCode={item.unitPrice.currencyCode}
        />
      </td>
      <td className={styles.value}>{item.quantity}</td>
      <td className={styles.value}>
        {item.discounted && (
          <Price
            className={styles.originalPrice}
            amount={item.originalPrice.amount}
            currencyCode={item.originalPrice.currencyCode}
          />
        )}
        <Price
          className={styles.total}
          amount={item.price.amount}
          currencyCode={item.price.currencyCode}
        />
      </td>
    </>
  );
}
