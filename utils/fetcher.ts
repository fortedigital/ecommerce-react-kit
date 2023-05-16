type FetcherParameters = Parameters<typeof fetch>;

async function fetcher<T>(
  resource: FetcherParameters[0],
  init: FetcherParameters[1]
): Promise<T | undefined> {
  const res = await fetch(resource, { headers: { "content-type": "application/json" }, ...init });

  if (!res.ok) {
    throw res;
  }

  return res.json();
}

export default fetcher;
