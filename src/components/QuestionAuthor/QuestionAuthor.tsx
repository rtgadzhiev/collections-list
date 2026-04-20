import styles from './QuestionAuthor.module.css';
import { useQuestion } from '../../heplers/hooks/useQuestion';
import Author from '../ui/Author/Author';

function QuestionAuthor() {
  const { question } = useQuestion();

  return (
    <span className={styles.author}>
      Автор:
      {question?.createdBy && <Author name={question?.createdBy?.username} />}
    </span>
  );
}

export default QuestionAuthor;
