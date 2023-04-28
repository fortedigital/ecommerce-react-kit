import { useId } from 'react';

import ErrorMessage from '../ErrorMessage';
import Fieldset from '../Fieldset';

import styles from './RadioGroup.module.css';

interface RadioGroupProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  error?: string;
  required?: boolean;
}

export default function RadioGroup({
  children,
  className,
  error,
  required,
  title,
}: RadioGroupProps) {
  const messageId = useId();
  const isError = !!error;

  return (
    <Fieldset
      role="radiogroup"
      className={className}
      aria-describedby={isError ? messageId : undefined}
      aria-invalid={isError}
      aria-required={required}
    >
      <Fieldset.Legend className={styles.title} required={required}>
        {title}
      </Fieldset.Legend>
      {children}
      {isError && (
        <ErrorMessage id={messageId} className={styles.error}>
          {error}
        </ErrorMessage>
      )}
    </Fieldset>
  );
}
