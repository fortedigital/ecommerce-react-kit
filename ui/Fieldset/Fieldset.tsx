import clsx from 'clsx';

import styles from './Fieldset.module.css';

interface FieldsetProps extends React.ComponentPropsWithoutRef<'fieldset'> {
  children: React.ReactNode;
}

function Fieldset({ children, className, ...props }: FieldsetProps) {
  return (
    <fieldset className={clsx(styles.root, className)} {...props}>
      {children}
    </fieldset>
  );
}

Fieldset.Legend = Legend;

export default Fieldset;

interface LegendProps {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

function Legend({ children, className, required }: LegendProps) {
  return (
    <legend className={clsx(styles.legend, className)}>
      {children}
      {required && (
        <span className={styles.required} aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </legend>
  );
}
