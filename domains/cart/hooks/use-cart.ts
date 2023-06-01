import { useCallback } from 'react';

import { client } from '../../../platform';
import { useFetch } from '../../../utils';

export default function useCart() {
  // HACK: Temporary workaround for swr not returning loading: true when run on the server from dotnet
  if (typeof window === "undefined") {
    return { cart: undefined, count: 0, isLoading: true, refreshCart: () => {}};
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, mutate } = useFetch('/api/cart', client.cartGet);
  const count = data?.count ?? 0;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refreshCart = useCallback(async () => {
    await mutate(undefined, { revalidate: false });
  }, [mutate]);

  return { cart: data, count, isLoading, refreshCart };
}
