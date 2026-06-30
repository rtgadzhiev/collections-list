import { Skeleton } from '@/shared/ui/Skeleton';
import type { IQuestion } from '../../model/types';
import styles from './QuestionShortAnswer.module.css';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';
import DOMPurify from 'dompurify';

interface Props {
  question: IQuestion | undefined;
  isLoading: boolean;
}

const QuestionShortAnswer = ({ question, isLoading }: Props) => {
  if (isLoading) {
    return <Skeleton className={styles.skeleton} />;
  } else {
    const dirtyAnswer = question?.shortAnswer ? question.longAnswer : '';
    const cleanAnswer = DOMPurify.sanitize(dirtyAnswer);

    return (
      <Card className={styles.card} isShadow={true}>
        <Title type="h2">Краткий ответ</Title>
        {question && (
          <div dangerouslySetInnerHTML={{ __html: cleanAnswer }}></div>
        )}
      </Card>
    );
  }
};

export { QuestionShortAnswer };
