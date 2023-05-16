import CheckoutCostSummary from './CheckoutCostSummary';
import CheckoutLineItems from './CheckoutLineItems';

import useDictionary from '../../../../localization/use-dictionary';
import { CartData, ShippingOptionData } from '../../../../types/models';
import { Box, Button, Heading } from '../../../../ui';

import styles from './CheckoutSummary.module.css';

interface CheckoutSummaryProps {
  cart: CartData;
  onSubmit: () => void;
  className?: string;
  shippingOption?: ShippingOptionData;
}

export default function CheckoutSummary({
  className,
  cart,
  onSubmit,
  shippingOption,
}: CheckoutSummaryProps) {
  const translate = useDictionary('checkoutSummary');

  return (
    <Box className={className} theme="dark">
      <Heading level={2} visuallyHidden>
        {translate('title')}
      </Heading>
      <CheckoutLineItems items={cart.lineItems} />
      <CheckoutCostSummary cart={cart} shippingOption={shippingOption} />
      <Button
        className={styles.button}
        type="submit"
        color="accent"
        size="medium"
        variant="solid"
        fullWidth
        onClick={onSubmit}
      >
        {translate('toPayment')}
      </Button>
    </Box>
  );
}
