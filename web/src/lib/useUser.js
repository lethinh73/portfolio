'use client';

import useSWR from 'swr';
import { api } from './api';

const fetcher = (url) =>
  api
    .get(url)
    .then((r) => r.data)
    .catch((e) => (e.response?.status === 401 ? null : Promise.reject(e)));

export function useUser() {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
  });
  return { user: data, loading: isLoading, error, refresh: mutate };
}
