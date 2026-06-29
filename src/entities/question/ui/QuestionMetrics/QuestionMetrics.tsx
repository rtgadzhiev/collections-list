import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Metrics from '../ui/Metrics/Metrics';
import styles from './QuestionMetrics.module.css';
import { useQuestion } from '../../helpers/hooks/useQuestion';

function QuestionMetrics() {
  const { question } = useQuestion();

  return (
    <InfoGroup title="Уровень:">
      {question && (
        <div className={clsx(styles.metrics, className)}>
          <MetricCard title="Рейтинг" score={question?.rate} />
          <MetricCard title="Сложность" score={question?.complexity} />
        </div>
      )}
    </InfoGroup>
  );
}

export default QuestionMetrics;
