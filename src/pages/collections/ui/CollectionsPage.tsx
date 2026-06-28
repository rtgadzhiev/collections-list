import { CollectionsFilters } from '../../../widgets/Collection/ui/CollectionsFilters/CollectionsFilters';
import { CollectionsSection } from '../../../widgets/Collection/ui/CollectionsSection/CollectionsSection';
import Container from '../../../shared/ui/Container/Container';
import Grid from '../../../shared/ui/Grid/Grid';

const CollectionsPage = () => {
  return (
    <Container>
      <Grid>
        <CollectionsSection />
        <CollectionsFilters />
      </Grid>
    </Container>
  );
};

export default CollectionsPage;
