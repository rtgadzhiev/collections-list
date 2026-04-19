import { CollectionContext } from '../../context/CollectionContext';
import { useContext } from 'react';

export default function useCollection() {
  const collectionContext = useContext(CollectionContext);

  if (!collectionContext)
    throw new Error(
      'useCollection must be used within a CollectionContextProvider',
    );

  return collectionContext;
}
