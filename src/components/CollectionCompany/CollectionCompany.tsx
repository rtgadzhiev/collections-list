import useCollectionFromParams from '../../helpers/hooks/useCollectionFromParams';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionCompany = () => {
  const { collection } = useCollectionFromParams();
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
