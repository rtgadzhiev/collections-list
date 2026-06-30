import styles from './CollectionKeywords.module.css';
import type { ICollection } from '../../model/types';
import { InfoGroup } from '@/shared/ui/InfoGroup';
import { Keyword } from '@/shared/ui/Keyword';

interface Props {
  collection: ICollection | undefined;
}

const CollectionKeywords = ({ collection }: Props) => {
  return (
    <InfoGroup title="Ключевые слова:">
      <ul className={styles.keywords}>
        {collection?.keywords?.map((keyword) => (
          <li key={keyword}>
            <Keyword title={keyword} />
          </li>
        ))}
      </ul>
    </InfoGroup>
  );
};

export { CollectionKeywords };
