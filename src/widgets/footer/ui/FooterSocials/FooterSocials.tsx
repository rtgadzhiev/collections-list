import styles from './FooterSocials.module.css';
import { SOCIALS_ITEMS } from './constants';
import { Link } from '@/shared/ui/Link';
import { ROUTES } from '@/shared/constants/routes';

const FooterSocials = () => {
  return (
    <nav>
      <ul className={styles.socials}>
        {SOCIALS_ITEMS.map((item) => (
          <li key={item.id}>
            <Link to={ROUTES.HOME}>
              <img
                className={styles.icon}
                src={item.icon}
                alt={item.title}
                width="24"
                height="24"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { FooterSocials };
