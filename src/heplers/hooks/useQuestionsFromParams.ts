import { useSearchParams } from 'react-router';
import { useGetPublicQuestionsQuery } from '../../api/questionsApi';
import { getErrorMessage } from '../getErrorMessage';
import useScrollToTop from './useScrollToTop';

function useQuestionsFromParams() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const paramsString = searchParams.toString();
  const {
    data: questions,
    isLoading,
    error,
  } = useGetPublicQuestionsQuery(paramsString);

  const errorMessage = getErrorMessage(error);

  useScrollToTop([page]);

  return { questions, isLoading, error, errorMessage };
}

export default useQuestionsFromParams;
