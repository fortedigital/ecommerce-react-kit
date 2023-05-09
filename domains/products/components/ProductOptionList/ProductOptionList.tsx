import ProductOption from './ProductOption';

import { ProductOptionData } from '../../../../types/models';
import { List } from '../../../../ui';

import styles from './ProductOptionList.module.css';

interface ProductOptionListProps {
  options: ProductOptionData[];
  className?: string;
}

export default function ProductOptionList({
  className,
  options,
}: ProductOptionListProps) {
  return options.length > 0 ? (
    <List as="dl" className={className} items={options}>
      {(item) => (
        <ProductOption className={styles.item} option={item} key={item.id} />
      )}
    </List>
  ) : null;
}
