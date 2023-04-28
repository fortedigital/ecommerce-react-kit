import useSWRMutation from 'swr/mutation';

import fetcher from './fetcher';

export default function useMutate<TInput, TOutput>(
  url: string,
  options: { method: 'DELETE' | 'PATCH' | 'POST' | 'PUT' }
) {
  return useSWRMutation(
    url,
    (url, { arg }: { arg: TInput }) =>
      fetcher<TOutput>(url, {
        method: options.method,
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(arg),
      }),
    { populateCache: true, revalidate: false }
  );
}
