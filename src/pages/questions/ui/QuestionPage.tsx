import QuestionInfo from '@/components/QuestionInfo/QuestionInfo';
import QuestionSection from '@/components/QuestionSection/QuestionSection';
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
