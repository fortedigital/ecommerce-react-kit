import clsx from 'clsx';

import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ className, children }: BadgeProps) {
  return <div className={clsx(styles.root, className)}>{children}</div>;
}
