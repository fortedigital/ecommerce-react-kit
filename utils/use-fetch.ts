import useSWR from 'swr';

export default function useFetch<T>(key: string, fn: () => Promise<T>) {
  return useSWR(key, () => fn());
}
