import { client } from '../../../platform';
import { useMutate } from '../../../utils';

export default function useUpdateItemInCart() {
  const { trigger, isMutating } = useMutate('/api/cart', client.cartUpdateItem);
  return { updateItemInCart: trigger, isUpdating: isMutating };
}
