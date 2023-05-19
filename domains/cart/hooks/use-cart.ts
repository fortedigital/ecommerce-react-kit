import { useCallback } from 'react';

import { client } from '../../../platform';
import { useFetch } from '../../../utils';

export default function useCart() {
  const { data, isLoading, mutate } = useFetch('/api/cart', client.cartGet);
  const count = data?.count ?? 0;

  const refreshCart = useCallback(async () => {
    await mutate(undefined, { revalidate: false });
  }, [mutate]);

  return { cart: data, count, isLoading, refreshCart };
}
