import { useState } from 'react';

import { CartEmpty } from '../../domains/cart/components';
import { useCart } from '../../domains/cart/hooks';
import {
  CheckoutForm,
  CheckoutSummary,
} from '../../domains/checkout/components';
import { CheckoutFormValues } from '../../domains/checkout/components/CheckoutForm';
import useCheckout from '../../domains/checkout/hooks/use-checkout';
import useDictionary from '../../localization/use-dictionary';
import { useRouter } from '../../platform';
import { ShippingOptionData } from '../../types/models';
import { Heading, Loader } from '../../ui';
import { useSubmitFormRemotely } from '../../utils';

interface CheckoutProps {
  shippingOptions: ShippingOptionData[];
}

export default function Checkout({ shippingOptions }: CheckoutProps) {
  const translate = useDictionary('checkout');
  const router = useRouter();
  const { cart, isLoading, count, refreshCart } = useCart();
  const { submitCheckout } = useCheckout();
  const { formRef, submit } = useSubmitFormRemotely();
  const [shippingOption, setShippingOption] = useState<ShippingOptionData>();
  const isEmpty = !cart || count === 0;

  const handleShippingMethodChange = (methodName: string) => {
    const shippingOption = shippingOptions.find(
      (option) => option.methodName === methodName
    );

    if (!shippingOption) {
      throw new Error(`Shipping method ${methodName} not found`);
    }

    setShippingOption(shippingOption);
  };

  const handleSubmit = async (values: CheckoutFormValues) => {
    if (!cart) {
      throw Error('Cart not found');
    }

    const order = await submitCheckout(cart, values);
    await refreshCart();
    router.push(`/orders/${order.id}`);
  };

  return (
    <section className="block">
      <Heading level={1} size="l">
        {translate('title')}
      </Heading>
      {isLoading ? (
        <Loader />
      ) : isEmpty ? (
        <CartEmpty />
      ) : (
        <div className="grid-l gap-row-m items-start">
          <CheckoutForm
            ref={formRef}
            className="col-span-8"
            shippingOptions={shippingOptions}
            onShippingOptionChange={handleShippingMethodChange}
            onSubmit={handleSubmit}
          />
          <CheckoutSummary
            className="col-span-4"
            cart={cart}
            shippingOption={shippingOption}
            onSubmit={submit}
          />
        </div>
      )}
    </section>
  );
}
