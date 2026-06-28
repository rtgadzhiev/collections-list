import { CollectionFilters } from '@/components/CollectionFilters/CollectionFilters';
import { CollectionSection } from '@/widgets/Collection/ui/CollectionSection/CollectionSection';
import Container from '@/shared/ui/Container/Container';
import Grid from '@/shared/ui/Grid/Grid';

const CollectionPage = () => {
  return (
    <Container>
      <Grid>
        <CollectionSection />
        <CollectionFilters />
      </Grid>
    </Container>
  );
};

export default CollectionPage;
