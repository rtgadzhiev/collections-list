import { CollectionsContext } from '../../context/CollectionsContext';
import { useContext } from 'react';

export default function useCollections() {
  const questionsContext = useContext(CollectionsContext);

  if (!questionsContext)
    throw new Error(
      'useCollections must be used within a CollectionsContextProvider',
    );

  return questionsContext;
}
