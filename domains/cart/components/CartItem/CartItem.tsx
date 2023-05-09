import clsx from 'clsx';

import useDictionary from '../../../../localization/use-dictionary';
import { LineItemData } from '../../../../types/models';
import { Button, Heading, Input, Link, Price, Thumbnail } from '../../../../ui';
import { Trash } from '../../../../ui/icons';
import { useDeleteItem, useUpdateItemQuantity } from '../../hooks';

import styles from './CartItem.module.css';

interface CartItemProps {
  item: LineItemData;
}

export default function CartItem({ item }: CartItemProps) {
  const translate = useDictionary('cartItem');
  const { deleteItem, isDeleting } = useDeleteItem();
  const { updateItemQuantity, isUpdating } = useUpdateItemQuantity();

  const handleDeletion = async () => {
    await deleteItem({ itemId: item.id });
  };

  const handleQuantityChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async (event) => {
    const quantity = Number(event.target.value);

    if (quantity === 0) {
      await deleteItem({ itemId: item.id });
    } else {
      await updateItemQuantity({ itemId: item.id, quantity });
    }
  };

  return (
    <>
      <td className={clsx(styles.value, styles.info)}>
        <div>
          <Heading className={styles.title} level={2} size="xxs">
            <Link href={item.url}>{item.name}</Link>
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
      <td className={clsx(styles.value, styles.quantity)}>
        <Input
          type="number"
          name="quantity"
          value={item.quantity}
          label={translate('quantity')}
          hideLabel
          onChange={handleQuantityChange}
          disabled={isUpdating || isDeleting}
        />
        <Button
          type="button"
          size="small"
          variant="ghost"
          onClick={handleDeletion}
        >
          <Trash height={16} />
          <span className="visually-hidden">{translate('delete')}</span>
        </Button>
      </td>
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
