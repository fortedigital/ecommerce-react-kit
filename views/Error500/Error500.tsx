import useDictionary from '../../localization/use-dictionary';
import { Heading } from '../../ui';

export default function Error500() {
  const translate = useDictionary('500');

  return (
    <article className="block">
      <Heading level={1} size="m">
        {translate('title')}
      </Heading>
    </article>
  );
}
