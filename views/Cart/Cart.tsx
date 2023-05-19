import clsx from 'clsx';

import { CartEmpty, CartSummary } from '../../domains/cart/components';
import {
  useCart,
  useDeleteFromCart,
  useUpdateItemInCart,
} from '../../domains/cart/hooks';
import { LineItem, LineItems } from '../../domains/line-items/components';
import useDictionary from '../../localization/use-dictionary';
import { Heading, Loader } from '../../ui';

import styles from './Cart.module.css';

export default function Cart() {
  const translate = useDictionary('cart');
  const { cart, count, isLoading } = useCart();
  const { deleteFromCart, isDeleting } = useDeleteFromCart();
  const { updateItemInCart, isUpdating } = useUpdateItemInCart();
  const isEmpty = !cart || count === 0;

  const handleDeletion = async (itemId: string) => {
    await deleteFromCart(itemId);
  };

  const handleQuantityChange = async (itemId: string, quantity: string) => {
    const quantityNumeric = Number(quantity);

    try {
      if (quantityNumeric === 0) {
        await deleteFromCart(itemId);
      } else {
        await updateItemInCart({ itemId, quantity: quantityNumeric });
      }
    } catch (error) {
      // TODO: Handle an error in UI
      console.error(error);
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
