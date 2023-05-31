import CategoryLink from './CategoryLink';

import useDictionary from '../../../../localization/use-dictionary';
import { CategoryData } from '../../../../types/models';
import { List } from '../../../../ui';

interface CategoryListProps {
  items: CategoryData[];
  className?: string;
  slug?: string;
}

export default function CategoryList({
  className,
  items,
  slug,
}: CategoryListProps) {
  const translate = useDictionary('categoryList');
  const categories: CategoryData[] = [{ id: 'all', name: 'All' }, ...items];

  return (
    <nav className={className} aria-label={translate('title')}>
      <List items={categories}>
        {(item) => (
          <List.Item key={item.id}>
            <CategoryLink category={item} isActive={item.slug === slug} />
          </List.Item>
        )}
      </List>
    </nav>
  );
}
