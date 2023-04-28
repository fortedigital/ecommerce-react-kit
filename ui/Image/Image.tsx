import clsx from 'clsx';

import { Image as ImageElement } from '../../framework';
import ImageElementProps from '../../types/image-props';

import styles from './Image.module.css';

interface ImageProps extends ImageElementProps {
  rounded?: boolean;
}

export default function Image({
  className,
  rounded = false,
  ...props
}: ImageProps) {
  return (
    <ImageElement
      className={clsx({ [styles.rounded]: rounded }, className)}
      {...props}
    />
  );
}
