import styles from './MetricCard.module.css';

interface Props {
  title: string;
  score: number;
}

function MetricCard({ title, score }: Props) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.title}>{title}:</span>
      <div className={styles.score}>{score}</div>
    </div>
  );
}

export default MetricCard;
