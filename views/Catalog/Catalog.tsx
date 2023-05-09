import { ProductList } from '../../domains/products/components';
import useDictionary from '../../localization/use-dictionary';
import { ProductListItemData } from '../../types/models';
import { Heading } from '../../ui';

interface CatalogProps {
  products: ProductListItemData[];
}

export default function Catalog({ products }: CatalogProps) {
  const translate = useDictionary('catalog');

  return (
    <article className="block">
      <Heading level={1} size="l">
        {translate('title')}
      </Heading>
      <ProductList level={1} products={products} />
    </article>
  );
}
