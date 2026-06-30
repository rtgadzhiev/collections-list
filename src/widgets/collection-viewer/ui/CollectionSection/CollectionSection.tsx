import { CollectionCard, useCollectionFromParams } from '@/entities/collection';
import { CollectionQuestions } from '../CollectionQuestions/CollectionQuestions';
import styles from './CollectionSection.module.css';

const CollectionSection = () => {
  const { collection } = useCollectionFromParams();

  return (
    <section className={styles.section}>
      <CollectionCard collection={collection} />
      <CollectionQuestions />
    </section>
  );
};

export { CollectionSection };
