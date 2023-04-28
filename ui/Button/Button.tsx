import ButtonOrLink, { ButtonOrLinkProps } from '../ButtonOrLink';

type ButtonAttributes = React.ComponentPropsWithoutRef<'button'>;

interface ButtonProps
  extends ButtonAttributes,
    Omit<ButtonOrLinkProps, 'children'> {
  type: NonNullable<ButtonAttributes['type']>;
  color?: ButtonOrLinkProps['color'];
  variant?: 'solid' | 'outline' | 'ghost';
}

export default function Button({
  className,
  color,
  fullWidth,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      className={className}
      color={color}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
    >
      <button {...props} />
    </ButtonOrLink>
  );
}
