import styles from './QuestionControls.module.css';
import clsx from 'clsx';
import { useQuestionControls } from '../../model/hooks/useQuestionControls';
import arrow from '@/shared/assets/images/icons/controls-arrow-icon.svg';
import { Card } from '@/shared/ui/Card';
import { Link } from '@/shared/ui/Link';

const QuestionControls = () => {
  const { collectionId, previousQuestionId, nextQuestionId } =
    useQuestionControls();

  return (
    <Card className={styles.controls} isShadow={true}>
      <Link
        className={styles.control}
        to={{
          pathname: `/${collectionId}/${previousQuestionId}`,
          search: `collection=${collectionId}`,
        }}
        replace={true}
      >
        <img
          className={styles.arrow}
          src={arrow}
          alt=""
          width="24"
          height="24"
        />
        <span>Предыдущий</span>
      </Link>
      <Link
        className={styles.control}
        to={{
          pathname: `/${collectionId}/${nextQuestionId}`,
          search: `collection=${collectionId}`,
        }}
        replace={true}
      >
        <span>Следующий</span>
        <img
          className={clsx(styles.arrow, styles.right)}
          src={arrow}
          alt=""
          width="24"
          height="24"
        />
      </Link>
    </Card>
  );
};

export { QuestionControls };
