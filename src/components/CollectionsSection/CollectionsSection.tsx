import { useUI } from '../../helpers/hooks/useUI';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import styles from './CollectionsSection.module.css';
import icon from '../../assets/images/icons/filters-button-icon.svg';
import IconButton from '../ui/IconButton/IconButton';
import CollectionsPagination from '../CollectionsPagination/CollectionsPagination';
import { CollectionsList } from '../CollectionsList/CollectionsList';

export const CollectionsSection = () => {
  const { toggle } = useUI();

  return (
    <section>
      <Card className={styles.card} isShadow={true}>
        <header className={styles.header}>
          <Title>Коллекции</Title>
          <IconButton onClick={toggle} title="Открыть фильтры" icon={icon} />
        </header>
        <CollectionsList />
        <CollectionsPagination />
      </Card>
    </section>
  );
};
