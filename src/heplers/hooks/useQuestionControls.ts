import { useParams } from 'react-router';
import useQuestions from './useQuestions';

export const useQuestionControls = () => {
  const { collectionId, questionId } = useParams();
  const { questions } = useQuestions();
  const currentQuestionIndex = questions?.data.findIndex(
    (question) => question.id === Number(questionId),
  );
  const previosQuestionIndex =
    currentQuestionIndex === 0
      ? Number(questions?.data.length) - 1
      : Number(currentQuestionIndex) - 1;
  const previousQuestionId = questions?.data.find(
    (_, index) => index === previosQuestionIndex,
  )?.id;
  const nextQuestionIndex =
    currentQuestionIndex === Number(questions?.data.length) - 1
      ? 0
      : Number(currentQuestionIndex) + 1;
  const nextQuestionId = questions?.data.find(
    (_, index) => index === nextQuestionIndex,
  )?.id;

  return { collectionId, previousQuestionId, nextQuestionId };
};
