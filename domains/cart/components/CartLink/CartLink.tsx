import useDictionary from '../../../../localization/use-dictionary';
import { useRouter } from '../../../../platform';
import { Link } from '../../../../ui';
import { Cart } from '../../../../ui/icons';
import { useCart } from '../../hooks';

import styles from './CartLink.module.css';

export default function CartLink() {
  const translate = useDictionary('cartLink');
  const { count } = useCart();
  const { routes } = useRouter();

  return (
    <Link href={routes.cart} size="small" variant="ghost">
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
