import { CartData } from '../../../types/models';
import { useMutate } from '../../../utils';

export default function useAddItem() {
  const { trigger } = useMutate<{ itemId: string }, CartData>('/api/cart', {
    method: 'POST',
  });
  return { addItem: trigger };
}
