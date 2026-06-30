import styles from './CollectionFilters.module.css';
import { QuestionsSpecializations } from '@/features/filter-questions-by-specialization';
import {
  CollectionAccess,
  CollectionCompany,
  CollectionQuestionsCount,
  CollectionKeywords,
  useCollectionFromParams,
} from '@/entities/collection';
import { useUI } from '@/shared/lib';
import { Aside } from '@/shared/ui/Aside';
import { CloseButton } from '@/shared/ui/CloseButton';

const CollectionFilters = () => {
  const { isOpen, toggle, ref } = useUI();
  const { collection } = useCollectionFromParams();

  return (
    <Aside ref={ref} isOpen={isOpen}>
      <CloseButton onClick={toggle} />
      <form className={styles.form}>
        <QuestionsSpecializations />
        <CollectionAccess collection={collection} />
        <CollectionCompany collection={collection} />
        <CollectionQuestionsCount collection={collection} />
        <CollectionKeywords collection={collection} />
      </form>
    </Aside>
  );
};

export { CollectionFilters };
