import { useParams, useSearchParams } from 'react-router';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';
import { useEffect } from 'react';

function useCollectionFromParams() {
  const { collectionId } = useParams();
  const {
    data: collection,
    isLoading,
    error,
  } = useGetCollectionByIdQuery(collectionId);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const specializationId = searchParams.get('specializationId');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, specializationId]);

  return { collection, isLoading, error, collectionId };
}

export default useCollectionFromParams;
