import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Radio.module.css';

interface RadioProps
  extends WithRequired<
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>,
    'value'
  > {
  label: React.ReactNode;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, label, name, value, ...props },
  ref
) {
  return (
    <label className={clsx(styles.root, className)}>
      <input
        type="radio"
        ref={ref}
        className={styles.input}
        name={name}
        value={value}
        {...props}
      />
      {label}
    </label>
  );
});

export default Radio;
