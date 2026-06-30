import { Container } from '@/shared/ui/Container';
import { Grid } from '@/shared/ui/Grid';
import { CollectionFilters } from '@/widgets/collection-filters';
import { CollectionSection } from '@/widgets/collection-viewer/ui/CollectionSection/CollectionSection';

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

export { CollectionPage };
