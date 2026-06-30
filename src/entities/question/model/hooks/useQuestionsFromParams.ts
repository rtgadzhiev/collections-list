import { useSearchParams } from 'react-router';
import { useGetPublicQuestionsQuery } from '../../api/questionsApi';
import { useScrollToTop } from '@/shared/lib';

function useQuestionsFromParams() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const paramsString = searchParams.toString();
  const {
    data: questions,
    isLoading,
    error,
  } = useGetPublicQuestionsQuery(paramsString);

  useScrollToTop([page]);

  return { questions, isLoading, error };
}

export { useQuestionsFromParams };
