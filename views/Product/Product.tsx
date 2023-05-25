import clsx from 'clsx';

import { AddToCartButton } from '../../domains/cart/components';
import useDictionary from '../../localization/use-dictionary';
import { ImageData, PriceData } from '../../types/models';
import { Gallery, Heading, Markup, PriceWithDiscount } from '../../ui';

import styles from './Product.module.css';

interface ProductProps {
  id: string;
  images: ImageData[];
  name: string;
  description?: string;
  discounted?: boolean;
  forSale?: boolean;
  originalPrice?: PriceData;
  price?: PriceData;
  variantSelector?: React.ReactNode;
}

export default function Product({
  description,
  discounted = false,
  forSale = false,
  id,
  images,
  name,
  originalPrice,
  price,
  variantSelector,
}: ProductProps) {
  const translate = useDictionary('product');

  return (
    <article className="block grid-l items-center">
      <div className={clsx('col-span-5', styles.content)}>
        <Heading level={1} size="l">
          {name}
        </Heading>
        {description && <Markup>{description}</Markup>}
        {variantSelector}
        {price && (
          <PriceWithDiscount
            amount={price.amount}
            currencyCode={price.currencyCode}
            originalAmount={discounted ? originalPrice?.amount : undefined}
            size="l"
          />
        )}
        {forSale && (
          <AddToCartButton itemId={id}>{translate('toCart')}</AddToCartButton>
        )}
      </div>
      <Gallery
        className="col-span-7"
        title={translate('gallery')}
        images={images}
      />
    </article>
  );
}
