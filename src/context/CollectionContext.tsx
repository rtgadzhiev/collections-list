import { createContext, useMemo, type ReactNode } from 'react';
import { getPublicCollectionById } from '../api/apiQuestions';
import { useParams } from 'react-router';
import useFetch from '../heplers/hooks/useFetch';
import type { ICollection } from '../types/api';

interface Value {
  collection: ICollection | null;
  isLoading: boolean;
  error: Error | null;
}

export const CollectionContext = createContext<Value | null>(null);

interface Props {
  children: ReactNode;
}

export function CollectionProvider({ children }: Props) {
  const { collectionId } = useParams();

  const [collection, isLoading, error] = useFetch(
    getPublicCollectionById,
    collectionId,
  );

  const value = useMemo(
    () => ({ collection, isLoading, error }),
    [collection, isLoading, error],
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}
