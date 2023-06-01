import clsx from 'clsx';

import styles from './ButtonOrLink.module.css';

export interface ButtonOrLinkProps {
  children: React.ReactElement;
  className?: string;
  color?: 'accent' | 'primary' | 'secondary';
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  variant?: 'solid' | 'outline' | 'ghost' | 'underlined';
}

export default function ButtonOrLink({
  children,
  className,
  color,
  fullWidth = false,
  size = "medium",
  variant,
  ...props
}: ButtonOrLinkProps) {
  return (
    <children.type
      className={clsx(
        styles.root,
        {
          [styles.fullWidth]: fullWidth,
          [styles.ghost]: variant === 'ghost',
          [styles.outline]: variant === 'outline',
          [styles.solid]: variant === 'solid',
          [styles.underlined]: variant === 'underlined',
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.colorAccent]: color === 'accent',
          [styles.colorPrimary]: color === 'primary',
          [styles.colorSecondary]: color === 'secondary',
        },
        className
      )}
      {...children.props}
      {...props}
    />
  );
}
