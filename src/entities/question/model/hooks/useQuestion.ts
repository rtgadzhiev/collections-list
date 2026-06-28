import { useParams } from 'react-router';
import useQuestionsFromParams from './useQuestionsFromParams';

export const useQuestion = () => {
  const { questionId } = useParams();
  const { questions, isLoading, error } = useQuestionsFromParams();
  const question = questions?.data.find(
    (question) => question.id === Number(questionId),
  );

  return { question, isLoading, error };
};
