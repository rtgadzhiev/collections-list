import styles from './QuestionHeader.module.css';
import image from '../../assets/images/question-mock-image.png';
import Title from '../ui/Title/Title';
import IconButton from '../ui/IconButton/IconButton';
import icon from '../../assets/images/icons/info-button-icon.svg';
import Skeleton from '../ui/Skeleton/Skeleton';
import clsx from 'clsx';
import Card from '../ui/Card/Card';
import QuestionsError from '../QuestionsError/QuestionsError';
import { useParams } from 'react-router';
import useQuestions from '../../heplers/hooks/useQuestions';
import { useUI } from '../../heplers/hooks/useUI';

function QuestionHeader() {
  const { questionId } = useParams();
  const { questions, isLoading, error } = useQuestions();
  const question = questions?.data.find(
    (question) => question.id === Number(questionId),
  );
  const { toggle } = useUI();

  return (
    <Card className={styles.card} isShadow={true}>
      <header className={styles.header}>
        {error && <QuestionsError error={error} />}
        {isLoading ? (
          <Skeleton className={clsx(styles.skeleton, styles.imageSkeleton)} />
        ) : (
          <img
            className={styles.image}
            src={image}
            alt=""
            width="160"
            height="160"
          />
        )}
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            {isLoading ? (
              <Skeleton
                className={clsx(styles.skeleton, styles.titleSkeleton)}
              />
            ) : (
              <Title className={styles.title}>{question?.title}</Title>
            )}
            <IconButton onClick={toggle} icon={icon} />
          </div>
          {isLoading ? (
            <Skeleton
              className={clsx(styles.skeleton, styles.descriptionSkeleton)}
            />
          ) : (
            <p className={styles.description}>{question?.description}</p>
          )}
        </div>
      </header>
    </Card>
  );
}

export default QuestionHeader;
