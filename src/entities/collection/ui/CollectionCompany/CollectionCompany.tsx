import type { ICollection } from '../../model/types';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { InfoItem } from '@/shared/ui/InfoItem';

interface Props {
  collection: ICollection;
}

const CollectionCompany = ({ collection }: Props) => {
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

export { CollectionCompany };
