import clsx from 'clsx';

import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  children: string;
  id?: string;
  className?: string;
}

export default function ErrorMessage({
  children,
  className,
  id,
}: ErrorMessageProps) {
  return (
    <span role="alert" id={id} className={clsx(styles.root, className)}>
      {children}
    </span>
  );
}
