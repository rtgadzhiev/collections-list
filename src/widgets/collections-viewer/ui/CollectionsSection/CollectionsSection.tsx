import styles from './CollectionsSection.module.css';
import { CollectionsList } from '../CollectionsList';
import { CollectionsPagination } from '@/features/paginate-collections';
import icon from '@/shared/assets/images/icons/filters-button-icon.svg';
import { useUI } from '@/shared/lib/hooks/useUI';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';

export const CollectionsSection = () => {
  const { toggle } = useUI();

  return (
    <section>
      <Card className={styles.card} isShadow={true}>
        <header className={styles.header}>
          <Title>Коллекции</Title>
          <ButtonIcon onClick={toggle} title="Открыть фильтры" iconSrc={icon} />
        </header>
        <CollectionsList />
        <CollectionsPagination />
      </Card>
    </section>
  );
};
