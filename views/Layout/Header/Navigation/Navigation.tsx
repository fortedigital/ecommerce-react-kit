import { CartLink } from '../../../../domains/cart/components';
import useDictionary from '../../../../localization/use-dictionary';
import { useRouter } from '../../../../platform';
import { Heading, Link } from '../../../../ui';

import styles from './Navigation.module.css';

export default function Navigation() {
  const translate = useDictionary('navigation');
  const { routes } = useRouter();

  return (
    <nav className={styles.root}>
      <Heading level={2} visuallyHidden>
        {translate('menu')}
      </Heading>
      <Link href={routes.catalog} size="small" variant="ghost">
        {translate('products')}
      </Link>
      <CartLink />
    </nav>
  );
}
