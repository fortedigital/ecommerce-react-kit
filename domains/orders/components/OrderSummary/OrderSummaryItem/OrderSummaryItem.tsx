import styles from './OrderSummaryItem.module.css';

interface OrderSummaryItemProps {
  label: string;
  value: React.ReactNode;
}

export default function OrderSummaryItem({
  label,
  value,
}: OrderSummaryItemProps) {
  return (
    <div className={styles.root}>
      <dd className={styles.label}>{label}</dd>
      <dt className={styles.value}>{value}</dt>
    </div>
  );
}
