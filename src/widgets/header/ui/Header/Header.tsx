import styles from './Header.module.css';
import { Container } from '@/shared/ui/Container';
import { HeaderNavigation } from '../HeaderNavigation';
import { HeaderActions } from '../HeaderActions';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.сontent}>
        <HeaderNavigation />
        <HeaderActions />
      </Container>
    </header>
  );
};

export { Header };
