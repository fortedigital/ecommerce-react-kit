import Heading from '../Heading';
import Image, { ImageProps } from '../Image';

import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  children?: React.ReactNode;
  image?: Pick<ImageProps, 'src' | 'alt'>;
}

export default function Hero({ children, image, title }: HeroProps) {
  return (
    <section className={styles.root}>
      <div className={styles.text}>
        <Heading level={1} size="xl">
          {title}
        </Heading>
        {children}
      </div>
      {image?.src && (
        <Image
          className={styles.image}
          src={image.src}
          alt={image.alt}
          width={1900}
          height={700}
          preload
        />
      )}
    </section>
  );
}
