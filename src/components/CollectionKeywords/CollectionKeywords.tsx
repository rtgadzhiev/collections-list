import styles from './CollectionKeywords.module.css';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Keyword from '../ui/Keyword/Keyword';
import { useParams } from 'react-router';
import { useGetCollectionByIdQuery } from '../../api/collectionsApi';

function CollectionKeywords() {
  const { collectionId } = useParams();
  const { data: collection } = useGetCollectionByIdQuery(collectionId);

  return (
    <InfoGroup title="Ключевые слова:">
      <ul className={styles.keywords}>
        {collection?.keywords.map((keyword) => (
          <li key={keyword}>
            <Keyword title={keyword} />
          </li>
        ))}
      </ul>
    </InfoGroup>
  );
}

export default CollectionKeywords;
