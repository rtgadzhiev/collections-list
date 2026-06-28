import { Outlet } from 'react-router';
import Footer from '../../../widgets/footer/ui/Footer/Footer';
import Header from '../../../widgets/header/ui/Header/Header';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
