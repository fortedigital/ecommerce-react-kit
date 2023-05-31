import { CategoryList, ProductList } from '../../domains/products/components';
import useDictionary from '../../localization/use-dictionary';
import { CategoryData, ProductListItemData } from '../../types/models';
import { Heading } from '../../ui';

interface CatalogProps {
  categories: CategoryData[];
  products: ProductListItemData[];
  slug?: string;
}

export default function Catalog({ categories, products, slug }: CatalogProps) {
  const translate = useDictionary('catalog');

  return (
    <article className="block">
      <Heading level={1} size="l">
        {translate('title')}
      </Heading>
      <div className="grid-l">
        <CategoryList className="col-span-2" items={categories} slug={slug} />
        <ProductList className="col-span-10" level={1} products={products} />
      </div>
    </article>
  );
}
