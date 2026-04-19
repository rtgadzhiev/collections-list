import styles from './QuestionsTitle.module.css';
import { useSearchParams } from 'react-router';
import Title from '../ui/Title/Title';

function QuestionsTitle() {
  const [searchParams] = useSearchParams();

  return <Title className={styles.title}>Вопросы</Title>;
}

export default QuestionsTitle;
