import { useCallback } from 'react';

import { CartData, CheckoutData, OrderData } from '../../../types/models';
import { fetcher } from '../../../utils';
import { CheckoutFormValues } from '../components/CheckoutForm';

export default function useCheckout() {
  const submitCheckout = useCallback(
    async (cart: CartData, form: CheckoutFormValues) => {
      const { shippingMethod, ...address } = form.delivery;
      const data: CheckoutData = {
        cartId: cart.id,
        contact: form.contact,
        shipment: {
          address: { ...form.contact, ...address },
          shippingMethodName: shippingMethod,
        },
      };
      const order = await fetcher<OrderData>('/api/orders', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!order) {
        throw Error('Order cannot be placed.');
      }

      return order;
    },
    []
  );

  return { submitCheckout };
}
