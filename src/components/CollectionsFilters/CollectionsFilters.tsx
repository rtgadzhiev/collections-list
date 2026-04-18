import styles from './CollectionsFilters.module.css';
import { useUI } from '../../heplers/hooks/useUI';
import Aside from '../ui/Aside/Aside';
import CloseButton from '../ui/CloseButton/CloseButton';
import CollectionsSearch from '../CollectionsSearch/CollectionsSearch';
import CollectionsSpecializations from '../CollectionsSpecializations/CollectionsSpecializations';
import { AccessSpecializations } from '../AccessSpecializations/AccessSpecializations';

export const CollectionsFilters = () => {
  const { isOpen, toggle, ref } = useUI();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <CloseButton onClick={toggle} />
      <form className={styles.form}>
        <CollectionsSearch />
        <CollectionsSpecializations />
        <AccessSpecializations />
      </form>
    </Aside>
  );
};
