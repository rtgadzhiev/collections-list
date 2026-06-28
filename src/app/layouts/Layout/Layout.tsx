import { Outlet } from 'react-router';
import Footer from '../../../components/layout/Footer/Footer';
import Header from '../../../components/layout/Header/Header';
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
