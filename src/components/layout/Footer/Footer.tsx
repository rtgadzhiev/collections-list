import Container from '../Container/Container';
import Copyright from '../../ui/Copyright/Copyright';
import Logo from '../../ui/Logo/Logo';
import Socials from '../../Socials/Socials';
import styles from './Footer.module.css';
import type { JSX } from 'react';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <Logo isTextLight={true} />
        <h2 className={styles.title}>
          Выбери, каким будет IT завтра, вместе с нами
        </h2>
        <p className={styles.description}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.bottom}>
          <Copyright />
          <span className={styles.socialsDescription}>
            Ищите нас и в других соцсетях @yeahub_it
          </span>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
