import { useCallback } from 'react';

import { client } from '../../../platform';
import { CartData, CheckoutFormData } from '../../../types/models';
import { composeCheckoutData } from '../utils';

export default function useCheckout() {
  const submitCheckout = useCallback(
    async (cart: CartData, form: CheckoutFormData) => {
      const checkout = composeCheckoutData(cart, form);
      const order = await client.orderCreate(checkout);

      if (!order) {
        throw Error('Order cannot be placed.');
      }

      return order;
    },
    []
  );

  return { submitCheckout };
}
