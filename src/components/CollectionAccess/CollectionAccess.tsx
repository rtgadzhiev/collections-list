import { useParams } from 'react-router';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';

export const CollectionAccess = () => {
  const { collectionId } = useParams();
  const { data: collection } = useGetCollectionByIdQuery(collectionId);

  return (
    <InfoGroup title="Доступ">
      <InfoItem title={collection?.isFree ? 'Для всех' : 'Для участников'} />
    </InfoGroup>
  );
};
