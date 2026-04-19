import { useUI } from '../../heplers/hooks/useUI';
import { CollectionSpecializations } from '../CollectionSpecializations/CollectionSpecializations';
import Aside from '../ui/Aside/Aside';
import CloseButton from '../ui/CloseButton/CloseButton';
import styles from './CollectionFilters.module.css';

export const CollectionFilters = () => {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <CloseButton onClick={toggle} />
      <form className={styles.form}>
        <CollectionSpecializations />
      </form>
    </Aside>
  );
};
