import { CollectionFilters } from '../components/CollectionFilters/CollectionFilters';
import { CollectionSection } from '../components/CollectionSection/CollectionSection';
import Container from '../components/layout/Container/Container';
import Grid from '../components/layout/Grid/Grid';
import { UIProvider } from '../context/UIContext';

const CollectionPage = () => {
  return (
    <Container>
      <Grid>
        <UIProvider>
          <CollectionSection />
          <CollectionFilters />
        </UIProvider>
      </Grid>
    </Container>
  );
};

export default CollectionPage;
