import clsx from 'clsx';

import useDictionary from '../../../../localization/use-dictionary';
import { LineItemData } from '../../../../types/models';

import styles from './LineItems.module.css';

interface LineItemsProps {
  items: LineItemData[];
  className?: string;
  children: (item: LineItemData) => React.ReactNode;
}

export default function LineItems({
  children,
  className,
  items,
}: LineItemsProps) {
  const translate = useDictionary('lineItems');

  return (
    <table className={clsx(styles.root, className)}>
      <thead className={styles.rowWrapper}>
        <tr className={clsx(styles.row, styles.header)}>
          <th className={styles.heading}>
            <span className="visually-hidden">{translate('product')}</span>
          </th>
          <th className={styles.heading}>{translate('unitPrice')}</th>
          <th className={styles.heading}>{translate('quantity')}</th>
          <th className={styles.heading}>{translate('total')}</th>
        </tr>
      </thead>
      <tbody className={styles.rowWrapper}>
        {items.map((item) => (
          <tr className={styles.row} key={item.id}>
            {children(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
