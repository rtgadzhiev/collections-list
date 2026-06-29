import styles from './QuestionSection.module.css';
import QuestionHeader from '../../../../entities/question/ui/QuestionHeader/QuestionHeader';
import QuestionControls from '../../components/QuestionControls/QuestionControls';
import QuestionShortAnswer from '../../../../entities/question/ui/QuestionShortAnswer/QuestionShortAnswer';
import QuestionLongAnswer from '../../../../entities/question/ui/QuestionLongAnswer/QuestionLongAnswer';

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
