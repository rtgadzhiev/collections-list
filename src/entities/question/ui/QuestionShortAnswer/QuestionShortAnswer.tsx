import { Skeleton } from '@/shared/ui/Skeleton';
import type { IQuestion } from '../../model/types';
import styles from './QuestionShortAnswer.module.css';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';

interface Props {
  question: IQuestion | undefined;
  isLoading: boolean;
}

const QuestionShortAnswer = ({ question, isLoading }: Props) => {
  if (isLoading) {
    return <Skeleton className={styles.skeleton} />;
  } else {
    return (
      <Card className={styles.card} isShadow={true}>
        <Title type="h2">Краткий ответ</Title>
        {question && (
          // TODO: СЕРИАЛИЗАЦИЯ???
          <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }}></div>
        )}
      </Card>
    );
  }
};

export { QuestionShortAnswer };
