import { useSearchParams } from 'react-router';
import { ACCESS_OPTIONS } from '../../constants/constants';
import CheckboxGroup from '../ui/CheckboxGroup/CheckboxGroup';

export const AccessSpecializations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isChecked = (id: number) => {
    const newParams = new URLSearchParams(searchParams);
    const isFree = newParams.get('isFree');

    return isFree === ACCESS_OPTIONS.find((option) => option.id === id)?.value;
  };

  const changeAccess = (id: number) => {
    const newParams = new URLSearchParams(searchParams);
    const isFree = newParams.get('isFree');
    const accessOption = ACCESS_OPTIONS.find(
      (option) => option.id === id,
    )?.value!;

    if (isFree === accessOption) {
      newParams.delete('isFree');
      setSearchParams(newParams);
    } else {
      newParams.set('isFree', accessOption);
      setSearchParams(newParams);
    }
  };

  return (
    <CheckboxGroup
      legend="Доступ"
      options={ACCESS_OPTIONS}
      onChange={changeAccess}
      isChecked={isChecked}
    />
  );
};
