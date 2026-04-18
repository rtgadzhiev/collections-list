import Container from '../components/layout/Container/Container';
import Grid from '../components/layout/Grid/Grid';
import { UIProvider } from '../context/UIContext';

const CollectionPage = () => {
  return (
    <Container>
      <Grid>
        <UIProvider>
          <div>collection</div>
          <div>filters</div>
        </UIProvider>
      </Grid>
    </Container>
  );
};

export default CollectionPage;
