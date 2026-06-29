import styles from './QuestionInfo.module.css';
import Aside from '../ui/Aside/Aside';
import CloseButton from '../ui/CloseButton/CloseButton';
import { useUI } from '../../helpers/hooks/useUI';
import QuestionMetrics from '../../../../entities/question/ui/QuestionMetrics/QuestionMetrics';
import QuestionSkills from '../../../../entities/question/ui/QuestionSkills/QuestionSkills';
import QuestionKeywords from '../../../../entities/question/ui/QuestionKeywords/QuestionKeywords';
import QuestionAuthor from '../../../../entities/question/ui/QuestionAuthor/QuestionAuthor';

function QuestionInfo() {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <div className={styles.info}>
        <CloseButton onClick={toggle} />
        <QuestionMetrics />
        <QuestionSkills />
        <QuestionKeywords />
        <QuestionAuthor />
      </div>
    </Aside>
  );
}

export default QuestionInfo;
