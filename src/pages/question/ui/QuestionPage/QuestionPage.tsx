import styles from './QuestionPage.module.css';
import { Container } from '@/shared/ui/Container';
import { Grid } from '@/shared/ui/Grid';
import { QuestionSection } from '@/widgets/question-viewer';
import { QuestionInfo } from '@/widgets/question-info';
import { PreviousPageButton } from '../PreviousPageButton';

const QuestionPage = () => {
  return (
    <Container className={styles.container}>
      <PreviousPageButton />
      <Grid className={styles.grid}>
        <QuestionSection />
        <QuestionInfo />
      </Grid>
    </Container>
  );
};

export { QuestionPage };
