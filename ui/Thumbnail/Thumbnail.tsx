import clsx from 'clsx';

import Image, { ImageProps } from '../Image';

import styles from './Thumbnail.module.css';

type ThumbnailProps = Omit<ImageProps, 'rounded'>;

export default function Thumbnail({
  alt,
  className,
  ...props
}: ThumbnailProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <Image className={styles.image} alt={alt} rounded {...props} />
    </div>
  );
}
