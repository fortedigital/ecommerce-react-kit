import { createElement } from 'react';
import clsx from 'clsx';

import css from './Heading.module.css';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: React.ReactNode;
  level: HeadingLevel;
  className?: string;
  position?: 'left' | 'center' | 'right';
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
  visuallyHidden?: boolean;
}

export default function Heading({
  children,
  className,
  level,
  size,
  position = 'left',
  visuallyHidden = false,
}: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: clsx(
        css.root,
        {
          [css.extraExtraSmall]: size === 'xxs',
          [css.extraSmall]: size === 'xs',
          [css.small]: size === 's',
          [css.medium]: size === 'm',
          [css.large]: size === 'l',
          [css.extraLarge]: size === 'xl',
          [css.center]: position === 'center',
          [css.right]: position === 'right',
          'visually-hidden': visuallyHidden,
        },
        className
      ),
    },
    children
  );
}
