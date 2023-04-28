import useDictionary from '../../../../localization/use-dictionary';
import { Link } from '../../../../ui';

export default function CartEmpty() {
  const translate = useDictionary('cartEmpty');

  return (
    <div>
      <p>{translate('noItems')}</p>
      <Link
        className="block-gap-s"
        href="/products"
        color="primary"
        size="medium"
        variant="solid"
      >
        {translate('toCatalog')}
      </Link>
    </div>
  );
}
