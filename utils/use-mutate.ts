import useSWRMutation from 'swr/mutation';

import fetcher from './fetcher';

export default function useMutate<
  TInput extends Record<string, string>,
  TOutput
>(url: string, options: { method: 'DELETE' | 'PATCH' | 'POST' | 'PUT' }) {
  return useSWRMutation(
    url,
    (url, { arg }: { arg: TInput }) => {
      let body, query;

      if (options.method === 'DELETE') {
        query = new URLSearchParams(arg).toString();
      } else {
        body = JSON.stringify(arg);
      }

      return fetcher<TOutput>(query ? `${url}?${query}` : url, {
        method: options.method,
        body,
      });
    },
    { populateCache: true, revalidate: false }
  );
}
