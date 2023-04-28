import clsx from 'clsx';

import styles from './Box.module.css';

interface BoxProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
  className?: string;
}

export default function Box({ children, className, theme }: BoxProps) {
  return (
    <section
      className={clsx(
        styles.root,
        {
          [styles.dark]: theme === 'dark',
          [styles.light]: theme === 'light',
        },
        className
      )}
    >
      {children}
    </section>
  );
}
