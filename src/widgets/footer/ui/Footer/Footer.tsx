import styles from './Footer.module.css';
import { Container } from '@/shared/ui/Container';
import { Logo } from '@/shared/ui/Logo';
import { Copyright } from '@/shared/ui/Copyright';
import { FooterSocials } from '../FooterSocials';

const Footer = () => {
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
          <FooterSocials />
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
