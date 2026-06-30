import styles from './QuestionHeader.module.css';
import image from '@/shared/assets/images/question-mock-image.png';
import icon from '@/shared/assets/images/icons/info-button-icon.svg';
import clsx from 'clsx';
import type { IQuestion } from '../../model/types';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import { Error } from '@/shared/ui/Error';
import { useUI } from '@/shared/lib';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Title } from '@/shared/ui/Title';
import { Card } from '@/shared/ui/Card';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';

interface Props {
  question: IQuestion | undefined;
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
}

const QuestionHeader = ({ question, isLoading, error }: Props) => {
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
            <ButtonIcon
              iconSrc={icon}
              onClick={toggle}
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
};

export { QuestionHeader };
