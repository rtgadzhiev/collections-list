import { useSearchParams } from 'react-router';
import { useGetPublicQuestionsQuery } from '../../api/questionsApi';
import { useEffect } from 'react';
import { getErrorMessage } from '../narrowFetchBaseQueryErrors';

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  // TODO: Вынести в отдельный хук scrollTo

  return { questions, isLoading, error, errorMessage };
}

export default useQuestionsFromParams;
