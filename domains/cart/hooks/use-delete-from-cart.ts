import { client } from '../../../platform';
import { useMutate } from '../../../utils';

export default function useDeleteFromCart() {
  const { trigger, isMutating } = useMutate('/api/cart', client.cartDeleteItem);
  return { deleteFromCart: trigger, isDeleting: isMutating };
}
