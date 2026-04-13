import { useUI } from '../../heplers/hooks/useUI';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import styles from './CollectionsSection.module.css';
import icon from '../../assets/images/icons/filters-button-icon.svg';
import IconButton from '../ui/IconButton/IconButton';
import { CollectionsProvider } from '../../context/CollectionsContext';

export const CollectionsSection = () => {
  const { toggle } = useUI();

  return (
    <section>
      <Card className={styles.card} isShadow={true}>
        <header className={styles.header}>
          <Title>Коллекции</Title>
          <IconButton onClick={toggle} title="Открыть фильтры" icon={icon} />
        </header>
        <CollectionsProvider>
          <div>123</div>
        </CollectionsProvider>
        {/* <QuestionsProvider>
          <QuestionsAccordion />
          <QuestionsPagination />
        </QuestionsProvider> */}
      </Card>
    </section>
  );
};
