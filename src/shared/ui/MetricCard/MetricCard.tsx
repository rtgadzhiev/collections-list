import styles from './MetricCard.module.css';

interface Props {
  title: string;
  score: number;
}

const MetricCard = ({ title, score }: Props) => {
  return (
    <div className={styles.metricCard}>
      <span className={styles.title}>{title}:</span>
      <div className={styles.score}>{score}</div>
    </div>
  );
};

export { MetricCard };
