import styles from './CollectionsFilters.module.css';
import CollectionsSearch from '../../../features/CollectionsSearch/CollectionsSearch';
import CollectionsSpecializations from '../../../components/CollectionsSpecializations/CollectionsSpecializations';
import { AccessSpecializations } from '../../../components/AccessSpecializations/AccessSpecializations';
import { useUI } from '@/shared/lib/hooks/useUI';
import Aside from '@/shared/ui/Aside/Aside';
import CloseButton from '@/shared/ui/CloseButton/CloseButton';

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
