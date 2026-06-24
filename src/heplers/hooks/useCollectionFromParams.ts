import { useParams, useSearchParams } from 'react-router';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';
import { getErrorMessage } from '../getErrorMessage';
import useScrollToTop from './useScrollToTop';

function useCollectionFromParams() {
  const { collectionId } = useParams();
  const {
    data: collection,
    isLoading,
    error,
  } = useGetCollectionByIdQuery(collectionId);

  const errorMessage = getErrorMessage(error);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const specializationId = searchParams.get('specializationId');

  useScrollToTop([page, specializationId]);

  return { collection, isLoading, error, errorMessage, collectionId };
}

export default useCollectionFromParams;
