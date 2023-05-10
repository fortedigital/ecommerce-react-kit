import useDictionary from '../../../../../localization/use-dictionary';
import { ProductOptionChoiceData } from '../../../../../types/models';

import styles from './LineItemOptions.module.css';

interface LineItemOptionsProps {
  options: ProductOptionChoiceData[];
}

export default function LineItemOptions({ options }: LineItemOptionsProps) {
  const translate = useDictionary('lineItemOptions');

  if (options.length === 0) {
    return null;
  }

  return (
    <p className={styles.root}>
      {options
        .map((x) => translate(x.parentId, { [x.parentId]: x.value }))
        .join(' | ')}
    </p>
  );
}
