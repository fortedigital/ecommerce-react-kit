import cookie from 'cookie';

const cartCookieName = 'ecommerce_cartId';

export function createCartCookie(cartId: string, maxAge?: number) {
  return cookie.serialize(cartCookieName, cartId, { path: '/', maxAge });
}

export function deleteCartCookie() {
  return createCartCookie('', -1);
}

export function getCartId(cookies: Record<string, string | undefined>) {
  return Reflect.get(cookies, cartCookieName) ?? '';
}
