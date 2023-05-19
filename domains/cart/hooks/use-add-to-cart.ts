import { client } from '../../../platform';
import { useMutate } from '../../../utils';

export default function useAddToCart() {
  const { trigger } = useMutate('/api/cart', client.cartAddItem);
  return { addToCart: trigger };
}
