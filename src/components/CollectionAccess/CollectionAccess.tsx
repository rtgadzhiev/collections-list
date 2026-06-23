import useCollectionFromParams from '../../heplers/hooks/useCollectionFromParams';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionAccess = () => {
  const { collection } = useCollectionFromParams();

  return (
    <InfoGroup title="Доступ">
      <InfoItem title={collection?.isFree ? 'Для всех' : 'Для участников'} />
    </InfoGroup>
  );
};
