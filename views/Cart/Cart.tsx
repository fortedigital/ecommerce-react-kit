import clsx from 'clsx';

import { CartEmpty, CartSummary } from '../../domains/cart/components';
import {
  useCart,
  useDeleteItem,
  useUpdateItemQuantity,
} from '../../domains/cart/hooks';
import { LineItem, LineItems } from '../../domains/line-items/components';
import useDictionary from '../../localization/use-dictionary';
import { Heading, Loader } from '../../ui';

import styles from './Cart.module.css';

export default function Cart() {
  const translate = useDictionary('cart');
  const { cart, count, isLoading } = useCart();
  const { deleteItem, isDeleting } = useDeleteItem();
  const { updateItemQuantity, isUpdating } = useUpdateItemQuantity();
  const isEmpty = !cart || count === 0;

  const handleDeletion = async (itemId: string) => {
    await deleteItem({ itemId });
  };

  const handleQuantityChange = async (itemId: string, quantity: string) => {
    if (Number(quantity) === 0) {
      await deleteItem({ itemId });
    } else {
      await updateItemQuantity({ itemId, quantity });
    }
  };

  return (
    <article className="block">
      <Heading level={1} size="l">
        {translate('title')}
      </Heading>
      {isLoading ? (
        <Loader />
      ) : isEmpty ? (
        <CartEmpty />
      ) : (
        <>
          <div className="grid-l gap-row-m items-start">
            <p className="col-span-full">{translate('count', { count })}</p>
            <LineItems className="col-span-9" items={cart.lineItems}>
              {(item) => (
                <LineItem
                  item={item}
                  isLoading={isDeleting || isUpdating}
                  onDeletion={handleDeletion}
                  onQuantityChange={handleQuantityChange}
                />
              )}
            </LineItems>
            <CartSummary className="col-span-3" cart={cart} />
          </div>
          <small className={clsx(styles.identifier, 'col-span-full')}>
            {translate('identifier', { id: cart.id })}
          </small>
        </>
      )}
    </article>
  );
}
