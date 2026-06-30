import styles from './CollectionCard.module.css';
import image from '@/shared/assets/images/collection-item-image.jpg';
import icon from '@/shared/assets/images/icons/filters-button-icon.svg';
import { useUI } from '@/shared/lib/';
import { Card } from '@/shared/ui/Card';
import type { ICollection } from '../../model/types';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon';

interface Props {
  collection: ICollection | undefined;
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
          <ButtonIcon iconSrc={icon} onClick={toggle} title="Открыть фильтры" />
        </header>
        <p className={styles.description}>{collection?.description}</p>
      </div>
    </Card>
  );
};

export { CollectionCard };
