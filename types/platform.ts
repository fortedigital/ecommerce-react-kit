import { UrlObject } from 'url';

import { CartData, CheckoutData, OrderData } from './models';

export interface EcommerceClient {
  cartAddItem(itemId: string): Promise<CartData | undefined>;

  cartDeleteItem(itemId: string): Promise<CartData | undefined>;

  cartGet(): Promise<CartData | undefined>;

  cartUpdateItem(item: {
    itemId: string;
    quantity: number;
  }): Promise<CartData | undefined>;

  orderCreate(checkout: CheckoutData): Promise<OrderData | undefined>;
}

export interface Routes {
  cart: string;
  catalog: (slug?: string) => string;
  checkout: string;
  home: string;
  order: (id: string) => string;
}

export interface Router {
  push(href: string): void;

  routes: Routes;
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
