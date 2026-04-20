import styles from './QuestionSkills.module.css';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Skill from '../ui/Skill/Skill';
import { useQuestion } from '../../heplers/hooks/useQuestion';

function QuestionSkills() {
  const { question } = useQuestion();

  return (
    <InfoGroup title="Навыки:">
      <ul className={styles.skills}>
        {question?.questionSkills.map((skill) => (
          <li key={skill.id}>
            <Skill title={skill.title} />
          </li>
        ))}
      </ul>
    </InfoGroup>
  );
}

export default QuestionSkills;
