import styles from './CollectionKeywords.module.css';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Keyword from '../ui/Keyword/Keyword';
import useCollectionFromParams from '../../heplers/hooks/useCollectionFromParams';

function CollectionKeywords() {
  const { collection } = useCollectionFromParams();

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
