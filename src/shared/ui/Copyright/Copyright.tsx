import clsx from 'clsx';
import styles from './Copyright.module.css';
import { Link } from '../Link';
import { ROUTES } from '@/shared/constants/routes';

interface Props {
  className?: string;
}

const Copyright = ({ className }: Props) => {
  const currentYear: number = new Date().getFullYear();

  return (
    <small className={clsx(styles.copyright, className)}>
      <span>© {currentYear} YeaHub</span>
      <Link className={styles.link} to={ROUTES.HOME}>
        Документы
      </Link>
    </small>
  );
};

export { Copyright };
