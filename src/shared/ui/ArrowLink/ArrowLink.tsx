import arrow from '@/shared/assets/images/icons/link-arrow-icon.svg';
import clsx from 'clsx';
import styles from './ArrowLink.module.css';
import type { NavLinkProps, NavLinkRenderProps } from 'react-router';
import { Link } from '../Link';

const ArrowLink = ({
  className,
  title,
  tabIndex,
  to,
}: NavLinkProps & Partial<NavLinkRenderProps>) => {
  return (
    <Link className={clsx(styles.link, className)} to={to} tabIndex={tabIndex}>
      <span>{title}</span>
      <img className={styles.arrow} src={arrow} alt="" width="24" height="24" />
    </Link>
  );
};

export { ArrowLink };
