import styles from './QuestionControls.module.css';
import Card from '../ui/Card/Card';
import Link from '../ui/Link/Link';
import arrow from '../../assets/images/icons/controls-arrow-icon.svg';
import clsx from 'clsx';
import { useQuestionControls } from '../../heplers/hooks/useQuestionControls';

function QuestionControls() {
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
}

export default QuestionControls;
