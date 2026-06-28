import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import styles from './CollectionsSection.module.css';
import icon from '../../assets/images/icons/filters-button-icon.svg';

import CollectionsPagination from '../CollectionsPagination/CollectionsPagination';
import { CollectionsList } from '../CollectionsList/CollectionsList';
import { useUI } from '@/shared/lib/hooks/useUI';
import { Button } from '@/shared/ui/Button';

export const CollectionsSection = () => {
  const { toggle } = useUI();

  return (
    <section>
      <Card className={styles.card} isShadow={true}>
        <header className={styles.header}>
          <Title>Коллекции</Title>
          <Button
            variant="icon"
            onClick={toggle}
            title="Открыть фильтры"
            iconSrc={icon}
          />
        </header>
        <CollectionsList />
        <CollectionsPagination />
      </Card>
    </section>
  );
};
