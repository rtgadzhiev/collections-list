import type { ICollection } from '../../model/types';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { InfoItem } from '@/shared/ui/InfoItem';

interface Props {
  collection: ICollection;
}

const CollectionQuestionsCount = ({ collection }: Props) => {
  const questionCount = collection?.questionsCount;

  if (!questionCount) return null;

  return (
    <InfoGroup title="Количество вопросов ">
      <InfoItem title={questionCount} />
    </InfoGroup>
  );
};

export { CollectionQuestionsCount };
