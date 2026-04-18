import { BASE_URL } from '../constants/api';

export async function apiRequest<T>(
  pathname: string | URL,
  params?: string | URLSearchParams,
): Promise<T> {
  const url = new URL(pathname, BASE_URL);

  if (params) {
    url.search = params.toString();
  }

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data = (await response.json()) as T;
  return data;
}
