import { CollectionsFilters } from '../components/CollectionsFilters/CollectionsFilters';
import { CollectionsSection } from '../components/CollectionsSection/CollectionsSection';
import Container from '../components/layout/Container/Container';
import Grid from '../components/layout/Grid/Grid';
import { UIProvider } from '../context/UIContext';

const CollectionsPage = () => {
  return (
    <Container>
      <Grid>
        <UIProvider>
          <CollectionsSection />
          <CollectionsFilters />
        </UIProvider>
      </Grid>
    </Container>
  );
};

export default CollectionsPage;
