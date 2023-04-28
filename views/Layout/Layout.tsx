import Header from './Header';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={className}>
      <Header className="block" />
      <main className={styles.root}>{children}</main>
    </div>
  );
}
