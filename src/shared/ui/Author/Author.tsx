import { ROUTES } from '@/shared/constants/routes';
import { Link } from '../Link';
import styles from './Author.module.css';

interface Props {
  name: string;
}

const Author = ({ name }: Props) => {
  return (
    <Link className={styles.author} to={ROUTES.HOME}>
      {name}
    </Link>
  );
};

export { Author };
