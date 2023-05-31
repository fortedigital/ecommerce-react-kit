import clsx from 'clsx';

import ProductCard from '../ProductCard';

import { ProductListItemData } from '../../../../types/models';
import { HeadingLevel, List } from '../../../../ui';

import styles from './ProductList.module.css';

interface ProductListProps {
  level: HeadingLevel;
  products: ProductListItemData[];
  className?: string;
}

export default function ProductList({
  className,
  level,
  products,
}: ProductListProps) {
  return (
    <List className={clsx(styles.root, className)} items={products}>
      {(product) => (
        <List.Item key={product.id}>
          <ProductCard level={(level + 1) as HeadingLevel} product={product} />
        </List.Item>
      )}
    </List>
  );
}
