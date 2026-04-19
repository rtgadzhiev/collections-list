import useCollection from '../../heplers/hooks/useCollection';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import { InfoItem } from '../ui/InfoItem/InfoItem';

export const CollectionQuestionsCount = () => {
  const { collection } = useCollection();
  const questionCount = collection?.questionsCount;

  if (!questionCount) return null;

  return (
    <InfoGroup title="Количество вопросов ">
      <InfoItem title={questionCount} />
    </InfoGroup>
  );
};
