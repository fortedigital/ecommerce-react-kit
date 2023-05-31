import { useRouter } from '../../../../../platform';
import { CategoryData } from '../../../../../types/models';
import { Link } from '../../../../../ui';

import styles from './CategoryLink.module.css';

interface CategoryLinkProps {
  category: CategoryData;
  isActive: boolean;
}

export default function CategoryLink({
  category,
  isActive = false,
}: CategoryLinkProps) {
  const { routes } = useRouter();

  return (
    <Link
      className={styles.root}
      href={routes.catalog(category.slug)}
      aria-current={isActive ? 'page' : false}
    >
      {category.name}
    </Link>
  );
}
