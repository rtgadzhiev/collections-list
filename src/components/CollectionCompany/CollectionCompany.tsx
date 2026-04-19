import useCollection from '../../heplers/hooks/useCollection';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionCompany = () => {
  const { collection } = useCollection();

  return (
    <InfoGroup title="Компания">
      <InfoItem title={collection?.company?.title} />
    </InfoGroup>
  );
};
