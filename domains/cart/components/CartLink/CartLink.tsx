import useDictionary from '../../../../localization/use-dictionary';
import { Link } from '../../../../ui';
import { Cart } from '../../../../ui/icons';
import { useCart } from '../../hooks';

import styles from './CartLink.module.css';

export default function CartLink() {
  const translate = useDictionary('cartLink');
  const { count } = useCart();

  return (
    <Link href="/cart" size="small" variant="ghost">
      <Cart width={24} />
      {count > 0 && (
        <sup className={styles.count} aria-hidden>
          {count}
        </sup>
      )}
      <span className="visually-hidden">{translate('count', { count })}</span>
    </Link>
  );
}
