import ProductOptionChoice from './ProductOptionChoice';

import useDictionary from '../../../../../localization/use-dictionary';
import { ProductOptionData } from '../../../../../types/models';
import { List } from '../../../../../ui';

import styles from './ProductOption.module.css';

interface ProductOptionProps {
  option: ProductOptionData;
  className?: string;
}

export default function ProductOption({
  className,
  option,
}: ProductOptionProps) {
  const translate = useDictionary('productOption');

  return (
    <div className={className}>
      {/* TODO: Translation key */}
      <dt className={styles.title}>{translate('size')}</dt>
      <dd>
        <List className={styles.values} items={option.values}>
          {(item) => (
            <List.Item key={item}>
              <ProductOptionChoice optionId={option.id} value={item} />
            </List.Item>
          )}
        </List>
      </dd>
    </div>
  );
}
