import { getSpecializations } from '../../api/apiQuestions';
import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';
import { useSearchParams } from 'react-router';
import useFetch from '../../heplers/hooks/useFetch';
import useToggle from '../../heplers/hooks/useToggle';

function Specializations() {
  const [isOpen, toggleAllSpecializations] = useToggle(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const specializationId = Number(searchParams.get('specializations'));

  const [options, isLoading] = useFetch(getSpecializations);

  const changeSpecialization = (id: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (specializationId === id) {
      newParams.delete('specializations');
    } else {
      newParams.delete('specializations');
      newParams.append('specializations', String(id));
    }

    newParams.delete('skills');
    newParams.delete('page');

    setSearchParams(newParams);
  };

  const isChecked = (id: number) => {
    return specializationId === id;
  };

  return (
    <CheckboxGroup
      legend="Специализация"
      options={isOpen ? options?.data : options?.data.slice(0, 5)}
      isLoading={isLoading}
      onChange={changeSpecialization}
      isChecked={isChecked}
      isShowAllButton={true}
      onClick={toggleAllSpecializations}
      isOpen={isOpen}
    />
  );
}

export default Specializations;
