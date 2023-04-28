import { PriceData } from '../../types/models';

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
