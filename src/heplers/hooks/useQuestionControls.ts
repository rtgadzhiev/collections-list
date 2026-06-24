import { useParams } from 'react-router';
import useQuestionsFromParams from './useQuestionsFromParams';

export const useQuestionControls = () => {
  const { collectionId, questionId } = useParams();
  const { questions } = useQuestionsFromParams();
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
