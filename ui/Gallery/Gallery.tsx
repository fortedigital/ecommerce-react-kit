import { useState } from 'react';

import Heading from '../Heading';
import Image from '../Image';
import List from '../List';
import GalleryItem, { GalleryImage } from './GalleryItem';

import styles from './Gallery.module.css';

interface GalleryProps {
  images: GalleryImage[];
  title: string;
  className?: string;
}

export default function Gallery({ className, images, title }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <Heading level={2} visuallyHidden>
        {title}
      </Heading>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={currentImage.src}
          alt={currentImage.alt}
          width={880}
          height={495}
          preload
        />
      </div>
      {images.length > 1 && (
        <List className={styles.images} items={images}>
          {(item, index) => (
            <List.Item key={index}>
              <GalleryItem image={item} onClick={setCurrentImage} />
            </List.Item>
          )}
        </List>
      )}
    </section>
  );
}
