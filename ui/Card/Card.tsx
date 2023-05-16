import Badge from '../Badge';
import Heading, { HeadingLevel } from '../Heading';
import Image, { ImageProps } from '../Image';
import Link from '../Link';

import styles from './Card.module.css';

interface CardProps {
  title: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  image?: Pick<ImageProps, 'src' | 'alt'>;
  level?: HeadingLevel;
}

export default function Card({
  badge,
  children,
  href,
  image,
  level = 2,
  title,
}: CardProps) {
  return (
    <article className={styles.root}>
      <div className={styles.textContainer}>
        <Heading level={level} className={styles.title} size="xs">
          {href ? (
            <Link className={styles.link} href={href}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        {children}
      </div>
      {badge && <Badge className={styles.badge}>{badge}</Badge>}
      <div className={styles.imageContainer}>
        <div className={styles.imageContainerInner}>
          {image && (
            <Image
              className={styles.image}
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
            />
          )}
        </div>
      </div>
    </article>
  );
}
