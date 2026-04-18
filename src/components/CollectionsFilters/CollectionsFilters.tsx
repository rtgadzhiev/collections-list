import styles from './CollectionsFilters.module.css';
import { useUI } from '../../heplers/hooks/useUI';
import Aside from '../ui/Aside/Aside';
import CloseButton from '../ui/CloseButton/CloseButton';
import Search from '../Search/Search';
import Specializations from '../Specializations/Specializations';

export const CollectionsFilters = () => {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <CloseButton onClick={toggle} />
      <form className={styles.form}>
        <Search />
        <Specializations />
      </form>
    </Aside>
  );
};
