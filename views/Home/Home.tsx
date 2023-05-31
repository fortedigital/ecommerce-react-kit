import { ProductList } from '../../domains/products/components';
import useDictionary from '../../localization/use-dictionary';
import { useRouter } from '../../platform';
import { ImageData, ProductListItemData } from '../../types/models';
import { Heading, Hero, Link } from '../../ui';

interface HomeProps {
  products: ProductListItemData[];
  heroImage?: ImageData;
}

export default function Home({ heroImage, products }: HomeProps) {
  const translate = useDictionary('home');
  const { routes } = useRouter();

  return (
    <article className="block block-flow">
      <Hero title={translate('hero.title')} image={heroImage}>
        <Link
          href={routes.catalog}
          color="primary"
          size="medium"
          variant="solid"
        >
          {translate('hero.cta')}
        </Link>
      </Hero>
      <section>
        <Heading level={2} size="m">
          {translate('products')}
        </Heading>
        <ProductList level={2} products={products} />
        <div className="block-gap-m align-right">
          <Link href={routes.catalog} color="primary" variant="underlined">
            {translate('toProducts')} →
          </Link>
        </div>
      </section>
    </article>
  );
}
