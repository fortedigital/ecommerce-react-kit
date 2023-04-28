import { Link } from '../../../ui';
import { Forte } from '../../../ui/icons';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link className={styles.root} href="/">
      <Forte width={48} height={48} />
      <span className="visually-hidden">Forte Digital</span>
    </Link>
  );
}
