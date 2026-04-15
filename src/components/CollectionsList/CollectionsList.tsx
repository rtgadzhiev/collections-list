import useCollections from '../../heplers/hooks/useCollections';
import { CollectionItem } from '../CollectionItem/CollectionItem';
import styles from './CollectionsList.module.css';

export const CollectionsList = () => {
  const { collections } = useCollections();

  return (
    <ul className={styles.list}>
      {collections?.data.map((collection) => (
        <CollectionItem
          key={collection.id}
          title={collection.title}
          imageSrc={null}
          keywords={collection.keywords.slice(0, 5)}
          isFree={collection.isFree}
          questionsCount={collection.questionsCount}
          specializations={collection.specializations}
        />
      ))}
    </ul>
  );
};
