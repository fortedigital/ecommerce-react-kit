import ProductCard from '../ProductCard';

import { ProductData } from '../../../../types/models';
import { HeadingLevel, List } from '../../../../ui';

import styles from './ProductList.module.css';

interface ProductListProps {
  level: HeadingLevel;
  products: ProductData[];
}

export default function ProductList({
  level,
  products,
}: ProductListProps) {
  return (
    <List className={styles.root} items={products}>
      {(product) => (
        <List.Item key={product.id}>
          <ProductCard level={(level + 1) as HeadingLevel} product={product} />
        </List.Item>
      )}
    </List>
  );
}
