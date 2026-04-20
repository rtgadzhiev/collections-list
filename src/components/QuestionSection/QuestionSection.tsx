import styles from './QuestionSection.module.css';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import QuestionControls from '../QuestionControls/QuestionControls';
import QuestionShortAnswer from '../QuestionShortAnswer/QuestionShortAnswer';
import QuestionLongAnswer from '../QuestionLongAnswer/QuestionLongAnswer';

function QuestionSection() {
  return (
    <section className={styles.section}>
      <QuestionHeader />
      <QuestionControls />
      <QuestionShortAnswer />
      <QuestionLongAnswer />
    </section>
  );
}

export default QuestionSection;
