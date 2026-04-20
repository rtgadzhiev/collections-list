import styles from './QuestionsError.module.css';

interface Props {
  error: Error;
}

function QuestionsError({ error }: Props) {
  return (
    <span className={styles.error}>
      {error.name}: {error.message}
    </span>
  );
}

export default QuestionsError;
