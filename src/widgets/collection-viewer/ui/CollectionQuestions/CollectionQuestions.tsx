import styles from './CollectionQuestions.module.css';
import icon from '@/shared/assets/images/icons/access-icon.svg';
import { QuestionsPagination } from '@/features/paginate-questions';
import {
  QuestionsTitle,
  QuestionsAccordion,
  useQuestionsFromParams,
} from '@/entities/question';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Card } from '@/shared/ui/Card';

interface Props {
  isFree?: boolean;
}

const CollectionQuestions = ({ isFree }: Props) => {
  const { questions, isLoading, error } = useQuestionsFromParams();

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
      <QuestionsAccordion
        questions={questions}
        isLoading={isLoading}
        error={error}
      />
      <QuestionsPagination />
    </Card>
  );
};

export { CollectionQuestions };
