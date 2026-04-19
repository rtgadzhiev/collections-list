import clsx from 'clsx';

import styles from './Metrics.module.css';
import MetricCard from '../MetricCard/MetricCard';

interface Props {
  rate: number;
  complexity: number;
  className?: string;
}

function Metrics({ rate, complexity, className }: Props) {
  return (
    <div className={clsx(styles.metrics, className)}>
      <MetricCard title="Рейтинг" score={rate} />
      <MetricCard title="Сложность" score={complexity} />
    </div>
  );
}

export default Metrics;
