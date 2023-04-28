import Heading from '../Heading';
import Link from '../Link';

import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  children?: React.ReactNode;
}

export default function Hero({ children, title }: HeroProps) {
  return (
    <section className={styles.root}>
      <Heading level={1} size="xl">
        {title}
      </Heading>
      {children}
    </section>
  );
}
