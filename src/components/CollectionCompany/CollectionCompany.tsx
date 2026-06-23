import { useParams } from 'react-router';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';

export const CollectionCompany = () => {
  const { collectionId } = useParams();
  const { data: collection } = useGetCollectionByIdQuery(collectionId);
  const title = collection?.company?.title;

  if (!title) {
    return null;
  }

  return (
    <InfoGroup title="Компания">
      <InfoItem title={collection?.company?.title || 'Компания'} />
    </InfoGroup>
  );
};
