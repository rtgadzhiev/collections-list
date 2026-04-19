import { Collection } from '../Collection/Collection';
import { CollectionQuestions } from '../CollectionQuestions/CollectionQuestions';
import styles from './CollectionSection.module.css';

export const CollectionSection = () => {
  return (
    <section className={styles.section}>
      <Collection />
      <CollectionQuestions />
    </section>
  );
};
