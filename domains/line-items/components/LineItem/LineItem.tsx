import clsx from 'clsx';

import LineItemOptions from './LineItemOptions';

import useDictionary from '../../../../localization/use-dictionary';
import { LineItemData } from '../../../../types/models';
import { Button, Heading, Input, Link, Price, Thumbnail } from '../../../../ui';
import { Trash } from '../../../../ui/icons';

import styles from './LineItem.module.css';

interface LineItemProps {
  item: LineItemData;
  isLoading?: boolean;
  onDeletion?: (itemId: string) => void;
  onQuantityChange?: (itemId: string, quantity: string) => void;
}

export default function LineItem({
  isLoading,
  item,
  onDeletion,
  onQuantityChange,
}: LineItemProps) {
  const translate = useDictionary('lineItem');

  return (
    <>
      <td className={clsx(styles.value, styles.info)}>
        <div>
          <Heading className={styles.title} level={2} size="xxs">
            <Link href={item.url}>{item.name}</Link>
          </Heading>
          <LineItemOptions options={item.options} />
        </div>
        {item.image && (
          <Thumbnail
            className={styles.thumbnail}
            src={item.image.src}
            alt={item.image.alt}
            height={64}
            width={64}
          />
        )}
      </td>
      <td className={styles.value}>
        <Price
          amount={item.unitPrice.amount}
          currencyCode={item.unitPrice.currencyCode}
        />
      </td>

      {onDeletion || onQuantityChange ? (
        <td className={clsx(styles.value, styles.quantity)}>
          {onQuantityChange && (
            <Input
              type="number"
              name="quantity"
              value={item.quantity}
              label={translate('quantity')}
              hideLabel
              onChange={(event) =>
                onQuantityChange(item.id, event.target.value)
              }
              disabled={isLoading}
            />
          )}
          {onDeletion && (
            <Button
              type="button"
              size="small"
              variant="ghost"
              onClick={() => onDeletion(item.id)}
            >
              <Trash height={16} />
              <span className="visually-hidden">{translate('delete')}</span>
            </Button>
          )}
        </td>
      ) : (
        <td className={styles.value}>{item.quantity}</td>
      )}

      <td className={styles.value}>
        {item.discounted && (
          <Price
            className={styles.originalPrice}
            amount={item.originalPrice.amount}
            currencyCode={item.originalPrice.currencyCode}
          />
        )}
        <Price
          className={styles.price}
          amount={item.price.amount}
          currencyCode={item.price.currencyCode}
        />
      </td>
    </>
  );
}
