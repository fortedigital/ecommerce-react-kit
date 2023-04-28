export interface AddressData {
  addressLine?: string;
  city?: string;
  country?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  phoneNumber?: string;
  postcode?: string;
}

export interface EntityData {
  id: string;
}

export interface CartData extends EntityData {
  count: number;
  lineItems: LineItemData[];
  subtotalWithoutDiscount: PriceData;
  discount: PriceData;
  discounted: boolean;
  subtotal: PriceData;
}

export interface CheckoutData {
  cartId: string;
  contact: Required<Omit<CustomerData, 'fullName' | 'id' | 'address'>>;
  shipment: ShipmentData;
}

export interface CustomerData extends EntityData {
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: AddressData;
}


export interface ImageData {
  alt: string;
  src: string;
}

export interface LineItemData extends EntityData {
  name: string;
  productId: string;
  unitPrice: PriceData;
  quantity: number;
  originalPrice: PriceData;
  discounted: boolean;
  price: PriceData;
  image?: ImageData;
}

export interface OrderData extends EntityData {
  customer: CustomerData;
  deliveryAddress: AddressData;
  lineItems: LineItemData[];
  shippingTotal: PriceData;
  subtotal: PriceData;
  discount: PriceData;
  total: PriceData;
}

export interface ProductData extends EntityData {
  name: string;
  description?: string;
  discounted?: boolean;
  discountPercent?: number;
  image?: ImageData;
  originalPrice?: PriceData;
  price?: PriceData;
  shortDescription?: string;
}

export interface PriceData {
  amount: number;
  currencyCode: string;
}

export interface ShippingOptionData {
  methodName: string;
  price: PriceData;
  company?: string;
  deliveryTime?: string;
  displayName?: string;
}

export interface ShipmentData {
  address: AddressData;
  shippingMethodName: string;
}
