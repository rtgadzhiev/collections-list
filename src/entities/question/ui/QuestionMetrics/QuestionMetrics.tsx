import styles from './QuestionMetrics.module.css';
import type { IQuestion } from '../../model/types';
import clsx from 'clsx';
import { MetricCard } from '@/shared/ui/MetricCard';
import { InfoGroup } from '@/shared/ui/InfoGroup';

interface Props {
  question: IQuestion | undefined;
}

const QuestionMetrics = ({ question }: Props) => {
  return (
    <InfoGroup title="Уровень:">
      {question && (
        <div className={clsx(styles.metrics)}>
          <MetricCard title="Рейтинг" score={question?.rate} />
          <MetricCard title="Сложность" score={question?.complexity} />
        </div>
      )}
    </InfoGroup>
  );
};

export { QuestionMetrics };
