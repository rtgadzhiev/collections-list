import styles from './QuestionsTitle.module.css';
import Title from '../ui/Title/Title';

function QuestionsTitle() {
  return <Title className={styles.title}>Список вопросов</Title>;
}

export default QuestionsTitle;
