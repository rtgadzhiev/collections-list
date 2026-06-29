import styles from './CollectionQuestions.module.css';
import Card from '../ui/Card/Card';
import QuestionsTitle from '../../../../entities/question/ui/QuestionsTitle/QuestionsTitle';
import QuestionsAccordion from '../../../../entities/question/ui/QuestionsAccordion/QuestionsAccordion';
import QuestionsPagination from '../../../../features/paginate-questions/ui/QuestionsPagination';
import icon from '../../assets/images/icons/access-icon.svg';
import ArrowLink from '../ui/ArrowLink/ArrowLink';
import useCollectionFromParams from '../../../../entities/collection/model/hooks/useCollectionFromParams';

export const CollectionQuestions = () => {
  const { collection } = useCollectionFromParams();
  const isFree = collection?.isFree;

  if (!isFree) {
    return (
      <Card className={styles.card} isShadow={true}>
        <header className={styles.header}>
          <QuestionsTitle />
          <ArrowLink
            className={styles.link}
            title="Стать участником сообщества"
            to="/"
          />
        </header>
        <Card className={styles.access} isShadow={true}>
          <img src={icon} alt="" width="68" height="68" />
          <p className={styles.description}>
            Список вопросов появится у участников сообщества
          </p>
        </Card>
      </Card>
    );
  }

  return (
    <Card className={styles.card} isShadow={true}>
      <header className={styles.header}>
        <QuestionsTitle />
      </header>
      <QuestionsAccordion />
      <QuestionsPagination />
    </Card>
  );
};
