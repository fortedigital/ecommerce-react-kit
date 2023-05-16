import useDictionary from '../../../../localization/use-dictionary';
import { ProductListItemData } from '../../../../types/models';
import { Card, HeadingLevel, PriceWithDiscount } from '../../../../ui';

interface ProductCardProps {
  level: HeadingLevel;
  product: ProductListItemData;
}

export default function ProductCard({ level, product }: ProductCardProps) {
  const translate = useDictionary('productCard');
  const badge =
    product.discounted &&
    translate('discount', { percent: product.discountPercent });

  return (
    <Card
      level={level}
      title={product.name}
      badge={badge}
      image={product.image}
      href={product.url}
    >
      {product.price && (
        <PriceWithDiscount
          amount={product.price.amount}
          currencyCode={product.price.currencyCode}
          originalAmount={
            product.discounted ? product.originalPrice?.amount : undefined
          }
          position="center"
          size="m"
        />
      )}
    </Card>
  );
}
