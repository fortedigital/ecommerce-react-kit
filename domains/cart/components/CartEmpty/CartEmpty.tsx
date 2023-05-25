import useDictionary from '../../../../localization/use-dictionary';
import { Link } from '../../../../ui';
import useRouter from "@platform/hooks/use-router";

export default function CartEmpty() {
  const translate = useDictionary('cartEmpty');
  const router = useRouter();
  
  return (
    <div>
      <p>{translate('noItems')}</p>
      <Link
        className="block-gap-s"
        href={router.routes.catalog}
        color="primary"
        size="medium"
        variant="solid"
      >
        {translate('toCatalog')}
      </Link>
    </div>
  );
}
