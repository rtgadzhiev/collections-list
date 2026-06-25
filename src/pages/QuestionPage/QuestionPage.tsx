import styles from './QuestionPage.module.css';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';

import { UIProvider } from '../../context/UIContext';
import PreviousPageButton from '../../components/ui/PreviousPageButton/PreviousPageButton';
import QuestionSection from '../../components/QuestionSection/QuestionSection';
import QuestionInfo from '../../components/QuestionInfo/QuestionInfo';

function QuestionPage() {
  return (
    <Container className={styles.container}>
      <PreviousPageButton />
      <UIProvider>
        <Grid className={styles.grid}>
          <QuestionSection />
          <QuestionInfo />
        </Grid>
      </UIProvider>
    </Container>
  );
}

export default QuestionPage;
