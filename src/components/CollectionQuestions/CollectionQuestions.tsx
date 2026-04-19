import styles from './CollectionQuestions.module.css';
import Card from '../ui/Card/Card';
import QuestionsTitle from '../QuestionsTitle/QuestionsTitle';
import { QuestionsProvider } from '../../context/QuestionsContext';
import QuestionsAccordion from '../QuestionsAccordion/QuestionsAccordion';
import QuestionsPagination from '../QuestionsPagination/QuestionsPagination';
import useCollection from '../../heplers/hooks/useCollection';
import icon from '../../assets/images/icons/access-icon.svg';
import ArrowLink from '../ui/ArrowLink/ArrowLink';

export const CollectionQuestions = () => {
  const { collection } = useCollection();
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
      <QuestionsProvider>
        <QuestionsAccordion />
        <QuestionsPagination />
      </QuestionsProvider>
    </Card>
  );
};
