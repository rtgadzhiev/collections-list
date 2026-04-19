import { CollectionFilters } from '../components/CollectionFilters/CollectionFilters';
import { CollectionSection } from '../components/CollectionSection/CollectionSection';
import Container from '../components/layout/Container/Container';
import Grid from '../components/layout/Grid/Grid';
import { CollectionProvider } from '../context/CollectionContext';
import { UIProvider } from '../context/UIContext';

const CollectionPage = () => {
  return (
    <Container>
      <Grid>
        <UIProvider>
          <CollectionProvider>
            <CollectionSection />
            <CollectionFilters />
          </CollectionProvider>
        </UIProvider>
      </Grid>
    </Container>
  );
};

export default CollectionPage;
