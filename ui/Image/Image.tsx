import clsx from 'clsx';

import { Image as ImageElement } from '../../platform';
import { ImageProps as ImageElementProps } from '../../types/platform';

import styles from './Image.module.css';

export interface ImageProps extends ImageElementProps {
  rounded?: boolean;
}

export default function Image({
  className,
  rounded = false,
  preload = false,
  ...props
}: ImageProps) {
  return (
    <ImageElement
      className={clsx({ [styles.rounded]: rounded }, className)}
      preload={preload}
      {...props}
    />
  );
}
