import { createElement } from 'react';
import clsx from 'clsx';

import styles from './List.module.css';

interface ListProps<TItem> {
  items: TItem[];
  children: (item: TItem, index: number) => React.ReactElement;
  as?: 'ol' | 'ul';
  className?: string;
}

function List<TItem>({
  as = 'ul',
  children,
  className,
  items,
}: ListProps<TItem>) {
  if (items.length === 0) {
    return null;
  }

  return createElement(
    as,
    { className: clsx(styles.root, className) },
    items.map((item, index) => children(item, index))
  );
}

List.Item = Item;

export default List;

interface ItemProps extends React.ComponentPropsWithoutRef<'li'> {
  key: React.Key;
}

function Item(props: ItemProps) {
  return <li {...props} />;
}
