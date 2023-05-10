import { useRouter } from '../../../../../../platform';
import { ProductOptionChoiceData } from '../../../../../../types/models';
import { Link } from '../../../../../../ui';
import { buildProductUrl } from '../../../../utils';

import styles from './ProductOptionChoice.module.css';

type ProductOptionChoiceProps = ProductOptionChoiceData;

export default function ProductOptionChoice({
  parentId,
  value,
}: ProductOptionChoiceProps) {
  const { pathname, searchParams } = useRouter();
  const href = buildProductUrl(pathname, searchParams, [{ parentId, value }]);
  const isChosen = searchParams.get(parentId) === value;

  return (
    <Link
      className={styles.root}
      href={href}
      aria-current={isChosen ? 'page' : false}
    >
      {value}
    </Link>
  );
}
