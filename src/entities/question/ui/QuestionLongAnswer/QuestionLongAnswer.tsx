import styles from './QuestionLongAnswer.module.css';
import clsx from 'clsx';
import arrow from '@/shared/assets/images/icons/chevron-down-icon.svg';
import type { IQuestion } from '../../model/types';
import { useHeightObserver, useToggle } from '@/shared/lib';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';
import DOMPurify from 'dompurify';

interface Props {
  question: IQuestion | undefined;
  isLoading: boolean;
}

const QuestionLongAnswer = ({ question, isLoading }: Props) => {
  const [isOpen, toggle] = useToggle(false);
  const { contentRef, height } = useHeightObserver();
  const dirtyAnswer = question?.longAnswer ? question.longAnswer : '';
  const cleanAnswer = DOMPurify.sanitize(dirtyAnswer);

  if (isLoading) {
    return <Skeleton className={styles.skeleton} />;
  } else {
    return (
      <Card className={styles.card} isShadow={true}>
        <Title type="h2">Развёрнутый ответ</Title>
        <div
          className={styles.answer}
          style={{ height: isOpen ? height + 45 : '400px' }}
        >
          <div ref={contentRef}>
            {question && (
              <div dangerouslySetInnerHTML={{ __html: cleanAnswer }}></div>
            )}
          </div>
        </div>
        <button
          className={clsx(styles.button, { [styles.isOpen]: isOpen })}
          onClick={toggle}
        >
          <img
            className={clsx(styles.arrow, { [styles.isOpen]: isOpen })}
            src={arrow}
            alt=""
            width="20"
            height="20"
          />
          {isOpen ? 'Cвернуть' : 'Развернуть'}
        </button>
      </Card>
    );
  }
};

export { QuestionLongAnswer };
