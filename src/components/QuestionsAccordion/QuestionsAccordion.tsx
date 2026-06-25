import { LIMIT } from '../../constants/api';
import Skeleton from '../ui/Skeleton/Skeleton';
import styles from './QuestionsAccordion.module.css';
import QuestionsAccordionItem from '../QuestionsAccordionItem/QuestionsAccordionItem';
import useAccordion from '../../helpers/hooks/useAccordion';
import { useParams } from 'react-router';
import useQuestionsFromParams from '../../helpers/hooks/useQuestionsFromParams';
import Error from '../Error/Error';

function QuestionsAccordion() {
  const { questions, isLoading, error } = useQuestionsFromParams();
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
}

export default QuestionsAccordion;
