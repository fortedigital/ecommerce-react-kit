import { UrlObject } from 'url';

import { CartData, CheckoutData, OrderData } from '@ecommerce-kit/types/models';

export interface EcommerceClient {
  cartAddItem(itemId: string): Promise<CartData | undefined>;

  cartDeleteItem(itemId: string): Promise<CartData | undefined>;

  cartGet(): Promise<CartData | undefined>;

  cartUpdateItem(item: { itemId: string; quantity: number }): Promise<CartData | undefined>;

  orderCreate(checkout: CheckoutData): Promise<OrderData | undefined>;
}

export interface Routes {
  cart: string;
  catalog: string;
  checkout: string;
  home: string;
  order: (id: string) => string;
  product: (productId: string, variantId?: string) => string;
}

export interface Router {
  /**
   * Determines if the searchParams is updated client-side and ready for use.
   * Should only be used inside of useEffect methods.
   */
  isReady: boolean;

  pathname: string;

  push(href: string): void;

  replace(href: string): void;

  routes: Routes;

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
