import { CartData } from '../../../types/models';
import { useMutate } from '../../../utils';

export default function useDeleteItem() {
  const { trigger, isMutating } = useMutate<{ itemId: string }, CartData>(
    '/api/cart',
    { method: 'DELETE' }
  );
  return { deleteItem: trigger, isDeleting: isMutating };
}
