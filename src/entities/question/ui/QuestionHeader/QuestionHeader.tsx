import styles from './QuestionHeader.module.css';
import image from '../../assets/images/question-mock-image.png';
import Title from '../ui/Title/Title';
import icon from '../../assets/images/icons/info-button-icon.svg';
import Skeleton from '../ui/Skeleton/Skeleton';
import clsx from 'clsx';
import Card from '../ui/Card/Card';
import { useUI } from '../../helpers/hooks/useUI';
import { useQuestion } from '../../helpers/hooks/useQuestion';
import Error from '../../../../shared/ui/Error/Error';
import { Button } from '@/shared/ui/Button';

function QuestionHeader() {
  const { question, isLoading, error } = useQuestion();
  const { toggle, isOpen } = useUI();

  return (
    <Card className={styles.card} isShadow={true}>
      <header className={styles.header}>
        {!isLoading && error && <Error error={error} />}

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
            <Button
              variant="icon"
              onClick={toggle}
              iconSrc={icon}
              disabled={isOpen}
              title="Открыть фильтры"
            />
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
