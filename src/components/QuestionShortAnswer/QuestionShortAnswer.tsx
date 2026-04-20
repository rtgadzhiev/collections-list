import styles from './QuestionShortAnswer.module.css';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import Skeleton from '../ui/Skeleton/Skeleton';
import { useQuestion } from '../../heplers/hooks/useQuestion';

function QuestionShortAnswer() {
  const { question, isLoading } = useQuestion();

  if (isLoading) {
    return <Skeleton className={styles.skeleton} />;
  } else {
    return (
      <Card className={styles.card} isShadow={true}>
        <Title type="h2">Краткий ответ</Title>
        {question && (
          <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }}></div>
        )}
      </Card>
    );
  }
}

export default QuestionShortAnswer;
