import Link from '../ui/Link/Link';
import { SOCIALS_ITEMS } from '../../constants/constants';
import styles from './Socials.module.css';

function Socials() {
  return (
    <nav>
      <ul className={styles.socials}>
        {SOCIALS_ITEMS.map((item) => (
          <li key={item.id}>
            <Link>
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
}

export default Socials;
