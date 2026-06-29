import { useUI } from '../../helpers/hooks/useUI';
import { CollectionAccess } from '../../entities/collection/ui/CollectionAccess/CollectionAccess';
import { CollectionCompany } from '../../entities/collection/ui/CollectionCompany/CollectionCompany';
import CollectionKeywords from '../../entities/collection/ui/CollectionKeywords/CollectionKeywords';
import { CollectionQuestionsCount } from '../../entities/collection/ui/CollectionQuestionsCount/CollectionQuestionsCount';
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
        <CollectionAccess />
        <CollectionCompany />
        <CollectionQuestionsCount />
        <CollectionKeywords />
      </form>
    </Aside>
  );
};
