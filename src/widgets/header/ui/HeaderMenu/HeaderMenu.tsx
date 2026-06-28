import { Link } from '@/shared/ui/Link';
import { MENU_ITEMS } from './constants';
import styles from './Menu.module.css';
import { ROUTES } from '@/shared/constants/routes';

interface Props {
  className?: string;
}

const HeaderMenu = ({ className }: Props) => {
  return (
    <nav className={className}>
      <ul className={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              className={styles.link}
              isActive={item.isActive}
              to={ROUTES.HOME}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderMenu };
