import styles from './CollectionQuestions.module.css';
import Card from '../ui/Card/Card';
import QuestionsTitle from '../QuestionsTitle/QuestionsTitle';
import { QuestionsProvider } from '../../context/QuestionsContext';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import QuestionsPagination from '../QuestionsPagination/QuestionsPagination';

export const CollectionQuestions = () => {
  return (
    <Card className={styles.card} isShadow={true}>
      <header className={styles.header}>
        <QuestionsTitle />
      </header>
      <QuestionsProvider>
        <QuestionsAccordion />
        <QuestionsPagination />
      </QuestionsProvider>
    </Card>
  );
};
