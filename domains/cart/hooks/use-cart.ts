import { useCallback } from 'react';

import { CartData } from '../../../types/models';
import { useFetch } from '../../../utils';

export default function useCart() {
  const { data, isLoading, mutate } = useFetch<CartData>('/api/cart');
  const count = data?.count ?? 0;

  const refreshCart = useCallback(async () => {
    await mutate(undefined, { revalidate: false });
  }, [mutate]);

  return { cart: data, count, isLoading, refreshCart };
}
