import clsx from 'clsx';

import Breadcrumbs from './Breadcrumbs';
import Header from './Header';

import useDictionary from '../../localization/use-dictionary';
import { BreadcrumbData } from '../../types/models';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbData[];
  className?: string;
}

export default function Layout({
  breadcrumbs,
  children,
  className,
}: LayoutProps) {
  const translate = useDictionary('layout');

  return (
    <div className={className}>
      <Header className="block" />
      <main className={styles.root}>
        {breadcrumbs && (
          <Breadcrumbs
            className={clsx('block', styles.breadcrumbs)}
            title={translate('breadcrumbs.title')}
            items={breadcrumbs}
          />
        )}
        {children}
      </main>
    </div>
  );
}
