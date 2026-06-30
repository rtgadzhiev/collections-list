import {
  QuestionMetrics,
  QuestionSkills,
  QuestionKeywords,
  QuestionAuthor,
  useQuestion,
} from '@/entities/question';
import { useUI } from '@/shared/lib';
import { Aside } from '@/shared/ui/Aside';
import { CloseButton } from '@/shared/ui/CloseButton';
import styles from './QuestionInfo.module.css';

const QuestionInfo = () => {
  const { isOpen, toggle, ref } = useUI();
  const { question } = useQuestion();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <div className={styles.info}>
        <CloseButton onClick={toggle} />
        <QuestionMetrics question={question} />
        <QuestionSkills question={question} />
        <QuestionKeywords question={question} />
        <QuestionAuthor question={question} />
      </div>
    </Aside>
  );
};

export { QuestionInfo };
