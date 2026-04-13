import { useEffect, useState } from 'react';

type TUseFetch<T> = [T | null, boolean, Error | null];

export default function useFetch<T>(
  fetchFunction: (params: URLSearchParams) => Promise<T>,
  params: URLSearchParams,
): TUseFetch<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(String(error)));
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [fetchFunction, params.toString()]);

  return [data, isLoading, error];
}
