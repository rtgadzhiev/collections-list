import styles from './Layout.module.css';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router';
import { Footer } from '@/widgets/footer';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
