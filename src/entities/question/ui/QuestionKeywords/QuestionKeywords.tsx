import styles from './QuestionKeywords.module.css';
import type { IQuestion } from '../../model/types';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { Keyword } from '@/shared/ui/Keyword';

interface Props {
  question: IQuestion | undefined;
}

const QuestionKeywords = ({ question }: Props) => {
  return (
    <InfoGroup title="Ключевые слова:">
      <ul className={styles.keywords}>
        {question?.keywords.map((keyword) => (
          <li key={keyword}>
            <Keyword title={keyword} />
          </li>
        ))}
      </ul>
    </InfoGroup>
  );
};

export { QuestionKeywords };
