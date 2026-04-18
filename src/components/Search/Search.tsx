import {
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';
import SearchInput from '../ui/SearchInput/SearchInput';
import { useSearchParams } from 'react-router';
import { useDebounce } from '../../heplers/hooks/useDebounce';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('titleOrDescriptionSearch') || '';
  const [value, setValue] = useState(title);
  const debouncedValue: string = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== title) {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedValue === '') {
        newParams.delete('titleOrDescriptionSearch');
      } else {
        newParams.set('titleOrDescriptionSearch', debouncedValue);
      }

      newParams.delete('page');
      setSearchParams(newParams);
    }
  }, [debouncedValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value !== title) {
        const newParams = new URLSearchParams(searchParams);

        if (value === '') {
          newParams.delete('titleOrDescriptionSearch');
        } else {
          newParams.set('titleOrDescriptionSearch', value);
        }

        newParams.delete('page');
        setSearchParams(newParams);
      }
    }
  };

  return (
    <SearchInput
      placeholder="Введите запрос…"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Search;
