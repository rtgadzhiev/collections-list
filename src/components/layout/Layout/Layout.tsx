import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.css';
import type { JSX } from 'react';

function Layout(): JSX.Element {
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
