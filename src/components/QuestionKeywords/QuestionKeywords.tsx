import styles from './QuestionKeywords.module.css';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Keyword from '../ui/Keyword/Keyword';
import { useQuestion } from '../../heplers/hooks/useQuestion';

function QuestionKeywords() {
  const { question } = useQuestion();

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
}

export default QuestionKeywords;
