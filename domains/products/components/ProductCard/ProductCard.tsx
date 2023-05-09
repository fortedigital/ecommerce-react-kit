import useDictionary from '../../../../localization/use-dictionary';
import { ProductListItemData } from '../../../../types/models';
import { Card, HeadingLevel, Price } from '../../../../ui';

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
      href={`/products/${product.id}`}
    >
      {product.price && (
        <>
          {product.discounted && (
            <div className={styles.discount}>
              {product.discountPercent && (
                <div className={styles.value}>
                  {translate('discount', { percent: product.discountPercent })}
                </div>
              )}
              {product.originalPrice && (
                <Price
                  className={styles.discountedPrice}
                  amount={product.originalPrice.amount}
                  currencyCode={product.originalPrice.currencyCode}
                />
              )}
            </div>
          )}
          <Price
            className={styles.price}
            amount={product.price.amount}
            currencyCode={product.price.currencyCode}
            total
          />
        </>
      )}
    </Card>
  );
}
