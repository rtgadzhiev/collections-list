import styles from './CollectionKeywords.module.css';
import InfoGroup from '../ui/InfoGroup/InfoGroup';
import Keyword from '../ui/Keyword/Keyword';
import useCollection from '../../heplers/hooks/useCollection';

function CollectionKeywords() {
  const { collection } = useCollection();

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
