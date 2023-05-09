import { useRouter } from '../../../../../../platform';
import { ProductOptionChoiceData } from '../../../../../../types/models';
import { Link } from '../../../../../../ui';
import { buildProductUrl } from '../../../../utils';

import styles from './ProductOptionChoice.module.css';

type ProductOptionChoiceProps = ProductOptionChoiceData;

export default function ProductOptionChoice({
  optionId,
  value,
}: ProductOptionChoiceProps) {
  const { pathname, searchParams } = useRouter();
  const href = buildProductUrl(pathname, searchParams, [{ optionId, value }]);
  const isChosen = searchParams.get(optionId) === value;
  
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
