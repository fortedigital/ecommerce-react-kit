import clsx from 'clsx';

import Logo from '../Logo';
import Navigation from './Navigation';

import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(styles.root, className)}>
      <Logo />
      <Navigation />
    </header>
  );
}
