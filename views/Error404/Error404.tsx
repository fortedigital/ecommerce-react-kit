import useDictionary from '../../localization/use-dictionary';
import { Heading } from '../../ui';

export default function Error404() {
  const translate = useDictionary('404');

  return (
    <article className="block">
      <Heading level={1} size="m">
        {translate('title')}
      </Heading>
    </article>
  );
}
