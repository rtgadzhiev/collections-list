import styles from './QuestionAuthor.module.css';
import type { IQuestion } from '../../model/types';
import { Author } from '@/shared/ui/Author';

interface Props {
  question: IQuestion | undefined;
}

const QuestionAuthor = ({ question }: Props) => {
  return (
    <span className={styles.author}>
      Автор:
      {question?.createdBy && <Author name={question?.createdBy?.username} />}
    </span>
  );
};

export { QuestionAuthor };
