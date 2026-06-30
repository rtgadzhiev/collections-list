import styles from './QuestionSkills.module.css';
import type { IQuestion } from '../../model/types';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { Skill } from '@/shared/ui/Skill';

interface Props {
  question: IQuestion | undefined;
}

const QuestionSkills = ({ question }: Props) => {
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
};

export { QuestionSkills };
