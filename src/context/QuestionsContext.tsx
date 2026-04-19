import { createContext, useEffect, useMemo, type ReactNode } from 'react';
import { getPublicQuestionsByCollection } from '../api/apiQuestions';
import { useSearchParams } from 'react-router';
import useFetch from '../heplers/hooks/useFetch';
import type { IQuestions } from '../types/api';

interface Value {
  questions: IQuestions | null;
  isLoading: boolean;
  error: Error | null;
}

export const QuestionsContext = createContext<Value | null>(null);

interface Props {
  children: ReactNode;
}

export function QuestionsProvider({ children }: Props) {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');

  const [questions, isLoading, error] = useFetch(
    getPublicQuestionsByCollection,
    searchParams,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const value = useMemo(
    () => ({ questions, isLoading, error }),
    [questions, isLoading, error],
  );

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
}
