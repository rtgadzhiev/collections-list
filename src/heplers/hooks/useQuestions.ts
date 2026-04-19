import { useContext } from 'react';
import { QuestionsContext } from '../../context/QuestionsContext';

export default function useQuestions() {
  const questionsContext = useContext(QuestionsContext);

  if (!questionsContext)
    throw new Error(
      'useQuestions must be used within a QuestionsContextProvider',
    );

  return questionsContext;
}
