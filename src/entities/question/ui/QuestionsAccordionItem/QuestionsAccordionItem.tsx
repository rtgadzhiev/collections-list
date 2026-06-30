import styles from './QuestionsAccordionItem.module.css';
import { memo, useCallback } from 'react';
import arrow from '@/shared/assets/images/icons/accordion-arrow-icon.svg';
import type { IQuestion } from '../../model/types';
import { AccordionTrigger, AccordionBody } from '@/shared/ui/Accordion';
import { Arrow } from '@/shared/ui/Arrow';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { DetailDropdown } from '@/shared/ui/DetailDropdown';
import { MetricCard } from '@/shared/ui/MetricCard';
import clsx from 'clsx';
import DOMPurify from 'dompurify';

interface Props {
  question: IQuestion;
  isOpen: boolean;
  onToggle: (questionId: number) => void;
  questionId: number;
  collectionId: number | null;
}

const QuestionsAccordionItem = memo((props: Props) => {
  const { question, isOpen, onToggle, questionId, collectionId } = props;
  const dirtyAnswer = question?.shortAnswer ? question.longAnswer : '';
  const cleanAnswer = DOMPurify.sanitize(dirtyAnswer);

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
          <div className={clsx(styles.metrics)}>
            <MetricCard title="Рейтинг" score={question?.rate} />
            <MetricCard title="Сложность" score={question?.complexity} />
          </div>
          <DetailDropdown
            tabIndex={!isOpen ? -1 : undefined}
            to={{
              pathname: `/${collectionId}/${questionId}`,
              search: `collection=${collectionId}`,
            }}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: cleanAnswer }}></div>
        <ArrowLink
          className={styles.link}
          title={'Подробнее'}
          tabIndex={!isOpen ? -1 : undefined}
          to={{
            pathname: `/${collectionId}/${questionId}`,
            search: `collection=${collectionId}`,
          }}
        />
      </AccordionBody>
    </li>
  );
});

export { QuestionsAccordionItem };
