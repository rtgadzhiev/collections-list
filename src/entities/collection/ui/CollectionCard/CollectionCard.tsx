import styles from './Collection.module.css';
import Card from '../ui/Card/Card';
import image from '../../assets/images/collection-item-image.jpg';
import icon from '../../assets/images/icons/filters-button-icon.svg';
import useCollectionFromParams from '../../model/hooks/useCollectionFromParams';
import { Button } from '@/shared/ui/Button';
import { useUI } from '@/shared/lib/hooks/useUI';

export const Collection = () => {
  const { toggle } = useUI();
  // TODO: Убрать запрос
  const { collection } = useCollectionFromParams();

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
          <Button
            variant="icon"
            onClick={toggle}
            title="Открыть фильтры"
            iconSrc={icon}
          />
        </header>
        <p className={styles.description}>{collection?.description}</p>
      </div>
    </Card>
  );
};
