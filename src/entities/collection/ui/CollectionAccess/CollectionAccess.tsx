import { useCollectionFromParams } from '../../model/hooks';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { InfoItem } from '@/shared/ui/InfoItem';

const CollectionAccess = () => {
  // TODO: Убрать запрос
  const { collection } = useCollectionFromParams();

  return (
    <InfoGroup title="Доступ">
      <InfoItem title={collection?.isFree ? 'Для всех' : 'Для участников'} />
    </InfoGroup>
  );
};

export { CollectionAccess };
