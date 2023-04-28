import { CartData } from '../../../types/models';
import { useMutate } from '../../../utils';

export default function useUpdateItemQuantity() {
  const { trigger, isMutating } = useMutate<
    { itemId: string; quantity: number },
    CartData
  >('/api/cart', { method: 'PUT' });
  return { updateItemQuantity: trigger, isUpdating: isMutating };
}
