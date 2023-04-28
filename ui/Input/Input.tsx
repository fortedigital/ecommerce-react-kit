import { forwardRef } from 'react';
import clsx from 'clsx';

import ErrorMessage from '../ErrorMessage';

import styles from './Input.module.css';

interface InputProps
  extends WithRequired<
    React.ComponentPropsWithoutRef<'input'>,
    'type' | 'name'
  > {
  label: string;
  error?: string;
  errorMessages?: Record<string, string>;
  hideLabel?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, hideLabel = false, label, required, ...props },
  ref
) {
  return (
    <label className={clsx(styles.root, className)}>
      <span className={clsx(styles.label, { 'visually-hidden': hideLabel })}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </span>
      <input
        ref={ref}
        className={styles.field}
        required={required}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error && <ErrorMessage className={styles.error}>{error}</ErrorMessage>}
    </label>
  );
});

export default Input;
