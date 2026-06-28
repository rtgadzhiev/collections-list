import { Collection } from '../../../../entities/collection/ui/CollectionCard/CollectionCard';
import { CollectionQuestions } from '../../../../components/CollectionQuestions/CollectionQuestions';
import styles from './CollectionSection.module.css';

export const CollectionSection = () => {
  return (
    <section className={styles.section}>
      <Collection />
      <CollectionQuestions />
    </section>
  );
};
