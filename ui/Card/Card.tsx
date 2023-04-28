import Heading, { HeadingLevel } from '../Heading';
import Image, { ImageProps } from '../Image';
import Link from '../Link';

import styles from './Card.module.css';

interface CardProps {
  title: string;
  image?: Pick<ImageProps, 'src' | 'alt'>;
  children?: React.ReactNode;
  description?: string;
  href?: string;
  label?: string;
  level?: HeadingLevel;
}

export default function Card({
  children,
  description,
  href,
  image,
  label,
  level = 2,
  title,
}: CardProps) {
  return (
    <article className={styles.root}>
      <div className={styles.textContainer}>
        <Heading level={level} size="xs">
          {href ? (
            <Link className={styles.link} href={href}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        {description && <p className={styles.description}>{description}</p>}
        {(children || label) && (
          <div className={styles.extension}>
            {children}
            {label && <span className={styles.label}>{label} →</span>}
          </div>
        )}
      </div>
      <div className={styles.imageContainer}>
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
    </article>
  );
}
