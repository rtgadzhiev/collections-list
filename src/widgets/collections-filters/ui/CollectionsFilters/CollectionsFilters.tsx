import { Aside } from '@/shared/ui/Aside';
import styles from './CollectionsFilters.module.css';
import { useUI } from '@/shared/lib/hooks/useUI';
import { CloseButton } from '@/shared/ui/CloseButton';
import { CollectionsSearch } from '@/features/search-collections';
import { CollectionsSpecializations } from '@/features/filter-collections-by-specialization';
import { AccessSpecializations } from '@/features/filter-collections-by-access';

const CollectionsFilters = () => {
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

export { CollectionsFilters };
