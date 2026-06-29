import styles from './QuestionsTitle.module.css';
import { Title } from '@/shared/ui/Title';

const QuestionsTitle = () => {
  return <Title className={styles.title}>Список вопросов</Title>;
};

export { QuestionsTitle };
