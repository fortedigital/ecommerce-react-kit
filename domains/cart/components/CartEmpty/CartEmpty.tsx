import useRouter from '@platform/hooks/use-router';

import useDictionary from '../../../../localization/use-dictionary';
import { Link } from '../../../../ui';

export default function CartEmpty() {
  const translate = useDictionary('cartEmpty');
  const { routes } = useRouter();

  return (
    <div>
      <p>{translate('noItems')}</p>
      <Link
        className="block-gap-s"
        href={routes.catalog}
        color="primary"
        size="medium"
        variant="solid"
      >
        {translate('toCatalog')}
      </Link>
    </div>
  );
}
