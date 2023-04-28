import ButtonOrLink, { ButtonOrLinkProps } from '../ButtonOrLink';

import { Link as LinkElement } from '../../framework';
import LinkElementProps from '../../types/link-props';

type LinkProps = Omit<ButtonOrLinkProps, 'children'> & LinkElementProps;

export default function Link({
  children,
  className,
  href,
  ...props
}: LinkProps) {
  return (
    <ButtonOrLink className={className} {...props}>
      <LinkElement href={href}>{children}</LinkElement>
    </ButtonOrLink>
  );
}
