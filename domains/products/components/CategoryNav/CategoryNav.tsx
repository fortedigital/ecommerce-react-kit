import CategoryNavLink from './CategoryNavLink';

import useDictionary from '../../../../localization/use-dictionary';
import { useRouter } from '../../../../platform';
import { CategoryData } from '../../../../types/models';
import { List } from '../../../../ui';

const allCategoriesNavLinkId = 'all';

interface CategoryNavProps {
  categories: CategoryData[];
  activeCategoryId?: string;
  className?: string;
}

export default function CategoryNav({
  activeCategoryId = allCategoriesNavLinkId,
  categories,
  className,
}: CategoryNavProps) {
  const { routes } = useRouter();
  const translate = useDictionary('categoryList');

  const items: CategoryData[] = [
    { id: allCategoriesNavLinkId, name: translate('all'), url: routes.catalog },
    ...categories,
  ];

  return (
    <nav className={className} aria-label={translate('title')}>
      <List items={items}>
        {(item) => (
          <List.Item key={item.id}>
            <CategoryNavLink
              category={item}
              isActive={item.id === activeCategoryId}
            />
          </List.Item>
        )}
      </List>
    </nav>
  );
}
