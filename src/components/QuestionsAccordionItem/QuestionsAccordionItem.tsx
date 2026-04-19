import styles from './QuestionsAccordionItem.module.css';
import { memo, useCallback } from 'react';
import AccordionTrigger from '../AccordionTrigger/AccordionTrigger';
import AccordionBody from '../AccordionBody/AccordionBody';
import Arrow from '../ui/Arrow/Arrow';
import arrow from '../../assets/images/icons/accordion-arrow-icon.svg';
import ArrowLink from '../ui/ArrowLink/ArrowLink';
import Metrics from '../ui/Metrics/Metrics';
import type { IQuestion } from '../../types/api';
import DetailDropdown from '../DetailDropdown/DetailDropdown';

interface Props {
  question: IQuestion;
  isOpen: boolean;
  onToggle: (questionId: number) => void;
  questionId: number;
}

const QuestionsAccordionItem = memo((props: Props) => {
  const { question, isOpen, onToggle, questionId } = props;

  const handleToggle = useCallback(() => {
    onToggle(questionId);
  }, [onToggle, questionId]);

  return (
    <li className={styles.accordionItem}>
      <AccordionTrigger isOpen={isOpen} onToggle={handleToggle}>
        <p className={styles.title}>{question.title}</p>
        <Arrow className={styles.arrow} isOpen={isOpen} arrow={arrow} />
      </AccordionTrigger>
      <AccordionBody isOpen={isOpen}>
        <div className={styles.bodyHeader}>
          <Metrics rate={question.rate} complexity={question.complexity} />
          <DetailDropdown
            tabIndex={!isOpen ? -1 : undefined}
            to={`${questionId}`}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }}></div>
        <ArrowLink
          className={styles.link}
          title={'Подробнее'}
          tabIndex={!isOpen ? -1 : undefined}
          to={`${questionId}`}
        />
      </AccordionBody>
    </li>
  );
});

export default QuestionsAccordionItem;
