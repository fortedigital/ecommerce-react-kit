import useSWRMutation from 'swr/mutation';

export default function useMutate<TInput, TOutput>(
  key: string,
  fn: (args: TInput) => TOutput
) {
  return useSWRMutation(key, (_, { arg }: { arg: TInput }) => fn(arg), {
    populateCache: true,
    revalidate: false,
  });
}
