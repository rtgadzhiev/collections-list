import { useParams } from 'react-router';
import useQuestions from './useQuestions';

export const useQuestion = () => {
  const { questionId } = useParams();
  const { questions, isLoading, error } = useQuestions();
  const question = questions?.data.find(
    (question) => question.id === Number(questionId),
  );

  return { question, isLoading, error };
};
