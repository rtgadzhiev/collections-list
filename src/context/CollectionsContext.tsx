import { createContext, useEffect, useMemo, type ReactNode } from 'react';
import { getPublicCollections } from '../api/apiQuestions';
import { useSearchParams } from 'react-router';
import useFetch from '../heplers/hooks/useFetch';
import type { ICollections } from '../types/api';

interface Value {
  collections: ICollections | null;
  isLoading: boolean;
  error: Error | null;
}

export const CollectionsContext = createContext<Value | null>(null);

interface Props {
  children: ReactNode;
}

export function CollectionsProvider({ children }: Props) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const specializationId = searchParams.get('specializationId');

  const [collections, isLoading, error] = useFetch(
    getPublicCollections,
    searchParams,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, specializationId]);

  const value = useMemo(
    () => ({ collections, isLoading, error }),
    [collections, isLoading, error],
  );

  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
}
