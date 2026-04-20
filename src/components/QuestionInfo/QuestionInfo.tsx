import styles from './QuestionInfo.module.css';
import Aside from '../ui/Aside/Aside';
import CloseButton from '../ui/CloseButton/CloseButton';
import { useUI } from '../../heplers/hooks/useUI';
import QuestionMetrics from '../QuestionMetrics/QuestionMetrics';
import QuestionSkills from '../QuestionSkills/QuestionSkills';
import QuestionKeywords from '../QuestionKeywords/QuestionKeywords';
import QuestionAuthor from '../QuestionAuthor/QuestionAuthor';

function QuestionInfo() {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <div className={styles.info}>
        <CloseButton onClick={toggle} isOpen={isOpen} />
        <QuestionMetrics />
        <QuestionSkills />
        <QuestionKeywords />
        <QuestionAuthor />
      </div>
    </Aside>
  );
}

export default QuestionInfo;
