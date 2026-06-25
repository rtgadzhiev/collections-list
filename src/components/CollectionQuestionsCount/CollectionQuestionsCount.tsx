import useCollectionFromParams from '../../helpers/hooks/useCollectionFromParams';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionQuestionsCount = () => {
  const { collection } = useCollectionFromParams();
  const questionCount = collection?.questionsCount;

  if (!questionCount) return null;

  return (
    <InfoGroup title="Количество вопросов ">
      <InfoItem title={questionCount} />
    </InfoGroup>
  );
};
