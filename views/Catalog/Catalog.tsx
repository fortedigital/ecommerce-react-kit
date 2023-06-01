import { CategoryNav, ProductList } from '../../domains/products/components';
import useDictionary from '../../localization/use-dictionary';
import { CategoryData, ProductListItemData } from '../../types/models';
import { Heading } from '../../ui';

interface CatalogProps {
  categories: CategoryData[];
  products: ProductListItemData[];
  activeCategoryId?: string;
}

export default function Catalog({
  activeCategoryId,
  categories,
  products,
}: CatalogProps) {
  const translate = useDictionary('catalog');

  return (
    <article className="block">
      <Heading level={1} size="l">
        {translate('title')}
      </Heading>
      <div className="grid-l">
        <CategoryNav
          className="col-span-2"
          activeCategoryId={activeCategoryId}
          categories={categories}
        />
        <ProductList className="col-span-10" level={1} products={products} />
      </div>
    </article>
  );
}
