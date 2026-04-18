import Link from '../ui/Link/Link';
import { MENU_ITEMS } from '../../constants/constants';
import styles from './Menu.module.css';

interface Props {
  className?: string;
}

function Menu({ className }: Props) {
  return (
    <nav className={className}>
      <ul className={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link className={styles.link} isActive={item.isActive}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
