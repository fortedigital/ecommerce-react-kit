import CategoryLink from './CategoryLink';

import useDictionary from '../../../../localization/use-dictionary';
import { useRouter } from '../../../../platform';
import { CategoryData } from '../../../../types/models';
import { List } from '../../../../ui';

interface CategoryListProps {
  items: CategoryData[];
  activeCategoryId?: string;
  className?: string;
}

export default function CategoryList({
  activeCategoryId,
  className,
  items,
}: CategoryListProps) {
  const { routes } = useRouter();
  const translate = useDictionary('categoryList');

  const categories: CategoryData[] = [
    { id: 'all', name: translate('all'), url: routes.catalog },
    ...items,
  ];

  return (
    <nav className={className} aria-label={translate('title')}>
      <List items={categories}>
        {(item) => (
          <List.Item key={item.id}>
            <CategoryLink
              category={item}
              isActive={item.id === activeCategoryId}
            />
          </List.Item>
        )}
      </List>
    </nav>
  );
}
