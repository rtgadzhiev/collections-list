import { useParams, useSearchParams } from 'react-router';
import { useGetCollectionByIdQuery } from '../../api';
import { useScrollToTop } from '@/shared/lib';

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

  useScrollToTop([page, specializationId]);

  return { collection, isLoading, error, collectionId };
}

export { useCollectionFromParams };
