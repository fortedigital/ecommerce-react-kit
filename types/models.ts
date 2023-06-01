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

export interface CategoryData extends EntityData {
  name: string;
  url: string;
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
  payment: PaymentData;
  shipment: ShipmentData;
}

export interface CheckoutFormData {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  delivery: {
    addressLine: string;
    postcode: string;
    city: string;
    country: string;
    shippingMethod: string;
  };
  paymentMethod: string;
}

export interface CustomerData extends EntityData {
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: AddressData;
}

export interface EntityData {
  id: string;
}

export interface BreadcrumbData {
  name: string;
  url?: string;
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
  url: string;
  description?: string;
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

export interface PaymentData {
  amount: number;
  currencyCode: string;
  paymentMethodName: string;
  transactionType?: string;
}

export interface PaymentMethodData {
  id: string;
  name: string;
}

export interface PriceData {
  amount: number;
  currencyCode: string;
}

export interface ProductData extends EntityData {
  discounted: boolean;
  forSale: boolean;
  images: ImageData[];
  name: string;
  options: ProductOptionData[];
  variants: ProductVariantData[];
  description?: string;
  discountPercent?: number;
  mainCategory?: CategoryData;
  originalPrice?: PriceData;
  price?: PriceData;
}

export interface ProductListItemData extends EntityData {
  name: string;
  url: string;
  discounted?: boolean;
  discountPercent?: number;
  image?: ImageData;
  originalPrice?: PriceData;
  price?: PriceData;
}

export interface ProductOptionData extends EntityData {
  values: string[];
}

export interface ProductOptionChoiceData {
  optionId: string;
  value: string;
}

export interface ProductVariantData extends EntityData {
  name: string;
  discounted: boolean;
  forSale: boolean;
  images: ImageData[];
  optionChoices: ProductOptionChoiceData[];
  description?: string;
  discountPercent?: number;
  originalPrice?: PriceData;
  price?: PriceData;
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
