import useCollection from '../../heplers/hooks/useCollection';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionAccess = () => {
  const { collection } = useCollection();

  return (
    <InfoGroup title="Доступ">
      <InfoItem title={collection?.isFree ? 'Для всех' : 'Для участников'} />
    </InfoGroup>
  );
};
