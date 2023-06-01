import { BreadcrumbData } from '../../../types/models';
import Link from '../../../ui/Link';
import List from '../../../ui/List';

import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  items: BreadcrumbData[];
  title: string;
  className?: string;
}

export default function Breadcrumbs({
  className,
  items,
  title,
}: BreadcrumbsProps) {
  return (
    <nav className={className} aria-label={title}>
      <List as="ol" className={styles.list} items={items}>
        {(item) => (
          <List.Item className={styles.item} key={item.name}>
            {item.url ? (
              <Link href={item.url} variant="underlined" size="small">
                {item.name}
              </Link>
            ) : (
              <span className={styles.current}>{item.name}</span>
            )}
          </List.Item>
        )}
      </List>
    </nav>
  );
}
