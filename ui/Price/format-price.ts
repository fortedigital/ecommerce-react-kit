export default function formatPrice(amount: number, currencyCode: string) {
  switch (currencyCode) {
    case 'EUR':
      return `€${formatAmount(amount, 'en-IE')} ${currencyCode}`;
    case 'NOK':
      return `${formatAmount(amount, 'nb-NO')} NOK`;
    default:
      return `${amount} ${currencyCode}`;
  }
}

function formatAmount(amount: number, locale: Intl.LocalesArgument) {
  return Number(amount).toLocaleString(locale);
}
