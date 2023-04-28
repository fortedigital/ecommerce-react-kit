import useSWR from 'swr';

import fetcher from './fetcher';

export default function useFetch<T>(url: string) {
  return useSWR(url, (url) => fetcher<T>(url, { method: 'GET' }));
}
