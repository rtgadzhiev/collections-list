import { Container } from '@/shared/ui/Container';
import { Grid } from '@/shared/ui/Grid';
import { CollectionsFilters } from '@/widgets/collections-filters';
import { CollectionsSection } from '@/widgets/collections-viewer';

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

export { CollectionsPage };
