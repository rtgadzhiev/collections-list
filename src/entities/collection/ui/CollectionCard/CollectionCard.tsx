import styles from './Collection.module.css';
import image from '@/shared/assets/images/collection-item-image.jpg';
import icon from '@/shared/assets/images/icons/filters-button-icon.svg';
import { useUI } from '@/shared/lib/';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import type { ICollection } from '../../model/types';

interface Props {
  collection: ICollection;
}

const CollectionCard = ({ collection }: Props) => {
  const { toggle } = useUI();

  return (
    <Card className={styles.card} isShadow={true}>
      <img
        className={styles.image}
        src={image}
        alt=""
        width="157"
        height="157"
      />
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{collection?.title}</h1>
          <Button onClick={toggle} title="Открыть фильтры">
            <Icon src={icon} />
          </Button>
        </header>
        <p className={styles.description}>{collection?.description}</p>
      </div>
    </Card>
  );
};

export { CollectionCard };
