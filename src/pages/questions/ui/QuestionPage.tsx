import QuestionInfo from '@/widgets/question-info/ui/QuestionInfo/QuestionInfo';
import QuestionSection from '@/widgets/question-viewer/ui/QuestionSection/QuestionSection';
import Container from '@/shared/ui/Container/Container';
import Grid from '@/shared/ui/Grid/Grid';
import styles from './QuestionPage.module.css';
import PreviousPageButton from './PreviousPageButton/PreviousPageButton';

function QuestionPage() {
  return (
    <Container className={styles.container}>
      <PreviousPageButton />
      <Grid className={styles.grid}>
        <QuestionSection />
        <QuestionInfo />
      </Grid>
    </Container>
  );
}

export default QuestionPage;
