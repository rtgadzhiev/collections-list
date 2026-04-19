import styles from './Collection.module.css';
import Card from '../ui/Card/Card';
import image from '../../assets/images/collection-item-image.jpg';
import IconButton from '../ui/IconButton/IconButton';
import { useUI } from '../../heplers/hooks/useUI';
import icon from '../../assets/images/icons/filters-button-icon.svg';
import useCollection from '../../heplers/hooks/useCollection';

export const Collection = () => {
  const { toggle } = useUI();
  const { collection } = useCollection();

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
          <IconButton onClick={toggle} title="Открыть фильтры" icon={icon} />
        </header>
        <p className={styles.description}>{collection?.description}</p>
      </div>
    </Card>
  );
};
