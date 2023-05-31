import Link from '../Link';
import List from '../List';

import styles from './Breadcrumbs.module.css';

export interface Breadcrumb {
  name: string;
  url: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
  title: string;
  className?: string;
}

export default function Breadcrumbs({
  className,
  items,
  title,
}: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={className} aria-label={title}>
      <List as="ol" className={styles.list} items={items}>
        {(item) => (
          <List.Item className={styles.item} key={item.name}>
            <Link
              className={styles.link}
              href={item.url}
              aria-current={item.isActive ? 'page' : false}
            >
              {item.name}
            </Link>
          </List.Item>
        )}
      </List>
    </nav>
  );
}
