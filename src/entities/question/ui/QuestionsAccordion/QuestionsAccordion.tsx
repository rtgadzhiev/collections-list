import styles from './QuestionsAccordion.module.css';
import type { IQuestions } from '../../model/types';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import QuestionsAccordionItem from '../QuestionsAccordionItem';
import { useParams } from 'react-router';
import { useAccordion } from '@/shared/ui/Accordion';
import { LIMIT } from '@/shared/constants/api';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Error } from '@/shared/ui/Error';

interface Props {
  questions: IQuestions;
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
}

const QuestionsAccordion = ({ questions, isLoading, error }: Props) => {
  // const { questions, isLoading, error } = useQuestionsFromParams();
  const { collectionId } = useParams();
  const { isOpen, toggle } = useAccordion();

  return (
    <ul className={styles.accordion}>
      {isLoading && <Skeleton count={LIMIT} className={styles.skeleton} />}
      {!isLoading &&
        !error &&
        questions?.data.map((question) => (
          <QuestionsAccordionItem
            key={question.id}
            question={question}
            isOpen={isOpen(question.id)}
            onToggle={toggle}
            questionId={question.id}
            collectionId={collectionId ? Number(collectionId) : null}
          />
        ))}
      {!isLoading && error && <Error error={error} />}
      {!isLoading && !error && !questions?.data.length && 'Вопросы не найдены'}
    </ul>
  );
};

export { QuestionsAccordion };
