import ProductPrice from '../ProductPrice';

import useDictionary from '../../../../localization/use-dictionary';
import { ProductListItemData } from '../../../../types/models';
import { Card, HeadingLevel } from '../../../../ui';

import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: ProductListItemData;
  level: HeadingLevel;
}

export default function ProductCard({ level, product }: ProductCardProps) {
  const translate = useDictionary('productCard');

  return (
    <Card
      level={level}
      title={product.name}
      description={product.description}
      image={product.image}
      label={translate('toProduct')}
      href={product.url}
    >
      <ProductPrice
        className={styles.price}
        discounted={product.discounted}
        discountPercent={product.discountPercent}
        originalPrice={product.originalPrice}
        price={product.price}
        size="m"
      />
    </Card>
  );
}
