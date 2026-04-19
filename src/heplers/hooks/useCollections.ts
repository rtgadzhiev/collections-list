import { CollectionsContext } from '../../context/CollectionsContext';
import { useContext } from 'react';

export default function useCollections() {
  const collectionsContext = useContext(CollectionsContext);

  if (!collectionsContext)
    throw new Error(
      'useCollections must be used within a CollectionsContextProvider',
    );

  return collectionsContext;
}
