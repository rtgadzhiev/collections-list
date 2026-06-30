import {
  QuestionHeader,
  QuestionShortAnswer,
  QuestionLongAnswer,
  useQuestion,
} from '@/entities/question';
import { QuestionControls } from '@/features/navigate-question';
import styles from './QuestionSection.module.css';

const QuestionSection = () => {
  const { question, isLoading } = useQuestion();

  return (
    <section className={styles.section}>
      <QuestionHeader question={question} isLoading={isLoading} />
      <QuestionControls />
      <QuestionShortAnswer question={question} isLoading={isLoading} />
      <QuestionLongAnswer question={question} isLoading={isLoading} />
    </section>
  );
};

export { QuestionSection };
