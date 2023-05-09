import ButtonOrLink, { ButtonOrLinkProps } from '../ButtonOrLink';

import { Link as LinkElement } from '../../platform';
import { LinkProps as LinkElementProps } from '../../types/platform';

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
