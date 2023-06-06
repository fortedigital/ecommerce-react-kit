import {
  CartData,
  CheckoutData,
  CheckoutFormData,
  PriceData,
} from '../../types/models';

export function composeCheckoutData(
  cart: CartData,
  form: CheckoutFormData
): CheckoutData {
  const {
    contact,
    delivery: { shippingMethod, ...address },
    paymentMethod,
  } = form;

  return {
    cartId: cart.id,
    contact,
    payment: {
      ...cart.subtotal,
      paymentMethodId: paymentMethod,
    },
    shipment: {
      address: { ...contact, ...address },
      shippingMethodName: shippingMethod,
    },
  };
}

export function calculateTotal(...args: (PriceData | undefined)[]) {
  return args.reduce<PriceData>(
    (total, price) => {
      if (!price) {
        return total;
      }

      total.amount += price.amount;

      if (!total.currencyCode) {
        total.currencyCode = price.currencyCode;
      }

      return total;
    },
    {
      amount: 0,
      currencyCode: '',
    }
  );
}
