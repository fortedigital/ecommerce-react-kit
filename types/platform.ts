import { UrlObject } from 'url';

export interface Router {
  /**
   * Determines if the searchParams is updated client-side and ready for use.
   * Should only be used inside of useEffect methods.
   */
  isReady: boolean;

  pathname: string;

  push(href: string): void;

  replace(href: string): void;

  searchParams: Readonly<URLSearchParams>;
}

export interface ImageProps {
  alt: string;
  src: string;
  height: number;
  width: number;
  className?: string;
  preload?: boolean;
}

export interface LinkProps {
  children: React.ReactNode;
  href: string | UrlObject;
}
