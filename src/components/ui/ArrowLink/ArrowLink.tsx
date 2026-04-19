import Link, { type ITo } from '../Link/Link';
import arrow from '../../../assets/images/icons/link-arrow-icon.svg';
import clsx from 'clsx';
import styles from './ArrowLink.module.css';

interface Props {
  className?: string;
  title: string;
  tabIndex?: number;
  to: string | ITo;
}

function ArrowLink({ className, title, tabIndex, to }: Props) {
  return (
    <Link className={clsx(styles.link, className)} to={to} tabIndex={tabIndex}>
      <span>{title}</span>
      <img className={styles.arrow} src={arrow} alt="" width="24" height="24" />
    </Link>
  );
}

export default ArrowLink;
