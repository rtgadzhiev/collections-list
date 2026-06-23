import { useParams } from 'react-router';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';

export const CollectionQuestionsCount = () => {
  const { collectionId } = useParams();
  const { data: collection } = useGetCollectionByIdQuery(collectionId);
  const questionCount = collection?.questionsCount;

  if (!questionCount) return null;

  return (
    <InfoGroup title="Количество вопросов ">
      <InfoItem title={questionCount} />
    </InfoGroup>
  );
};
