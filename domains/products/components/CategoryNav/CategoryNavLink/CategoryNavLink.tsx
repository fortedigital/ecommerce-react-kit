import clsx from 'clsx';

import { CategoryData } from '../../../../../types/models';
import { Link } from '../../../../../ui';

import styles from './CategoryNavLink.module.css';

interface CategoryNavLinkProps {
  category: CategoryData;
  isActive: boolean;
}

export default function CategoryNavLink({
  category,
  isActive = false,
}: CategoryNavLinkProps) {
  return isActive ? (
    <span className={clsx(styles.root, styles.active)}>{category.name}</span>
  ) : (
    <Link
      className={styles.root}
      href={category.url}
      variant="underlined"
      size="small"
    >
      {category.name}
    </Link>
  );
}
