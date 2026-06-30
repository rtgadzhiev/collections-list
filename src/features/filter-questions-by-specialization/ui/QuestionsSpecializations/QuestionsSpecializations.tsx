import { useCollectionFromParams } from '@/entities/collection';
import { useToggle } from '@/shared/lib';
import { CheckboxGroup } from '@/shared/ui/CheckboxGroup';
import { useSearchParams } from 'react-router';

const QuestionsSpecializations = () => {
  const [isOpen, toggleAllSpecializations] = useToggle(false);
  const { collection, isLoading } = useCollectionFromParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const specializationId = Number(searchParams.get('specializationId'));
  const specializationsLength = collection?.specializations?.length;

  const changeSpecialization = (id: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (specializationId === id) {
      newParams.delete('specializationId');
    } else {
      newParams.delete('specializationId');
      newParams.append('specializationId', String(id));
    }

    newParams.delete('page');

    setSearchParams(newParams);
  };

  const isChecked = (id: number) => {
    return specializationId === id;
  };

  return (
    <CheckboxGroup
      legend="Специализация"
      options={
        isOpen
          ? collection?.specializations
          : collection?.specializations.slice(0, 5)
      }
      isLoading={isLoading}
      onChange={changeSpecialization}
      isChecked={isChecked}
      isShowAllButton={
        specializationsLength && specializationsLength > 5 ? true : false
      }
      onClick={toggleAllSpecializations}
      isOpen={isOpen}
    />
  );
};

export { QuestionsSpecializations };
