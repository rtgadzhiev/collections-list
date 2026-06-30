import { InfoGroup } from '@/shared/ui/InfoGroup';
import { InfoItem } from '@/shared/ui/InfoItem';
import type { ICollection } from '../../model/types';

interface Props {
  collection: ICollection | undefined;
}

const CollectionAccess = ({ collection }: Props) => {
  return (
    <InfoGroup title="Доступ">
      <InfoItem title={collection?.isFree ? 'Для всех' : 'Для участников'} />
    </InfoGroup>
  );
};

export { CollectionAccess };
