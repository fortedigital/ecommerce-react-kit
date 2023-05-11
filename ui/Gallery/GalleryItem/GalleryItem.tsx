import Button from '../../Button';
import Image, { ImageProps } from '../../Image';

import styles from './GalleryItem.module.css';

export type GalleryImage = Pick<ImageProps, 'src' | 'alt'>;

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export default function GalleryItem({ image, onClick }: GalleryItemProps) {
  const handleClick = () => onClick(image);

  return (
    <Button type="button" className={styles.root} onClick={handleClick}>
      <Image
        className={styles.image}
        src={image.src}
        alt={image.alt}
        width={142}
        height={88}
        preload
      />
    </Button>
  );
}
