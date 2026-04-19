import { LIMIT } from '../../constants/api';
import Skeleton from '../ui/Skeleton/Skeleton';
import styles from './QuestionsAccordion.module.css';
import useQuestions from '../../heplers/hooks/useQuestions';
import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import useAccordion from '../../heplers/hooks/useAccordion';

function QuestionsAccordion() {
  const { questions, isLoading, error } = useQuestions();
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
          />
        ))}
      {!isLoading && error && (
        <span className={styles.error}>
          {error.name}: {error.message}
        </span>
      )}
      {!isLoading && !error && !questions?.data.length && 'Вопросы не найдены'}
    </ul>
  );
}

export default QuestionsAccordion;
