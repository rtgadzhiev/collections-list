import clsx from 'clsx';
import styles from './Link.module.css';
import { NavLink } from 'react-router';
import { ROUTES } from '../../../constants/routes';
import type { JSX, ReactNode } from 'react';

export interface ITo {
  pathname: string;
  search?: string;
}

interface Props {
  className?: string;
  to?: string | ITo;
  children: ReactNode;
  isActive?: boolean;
  tabIndex?: number;
  title?: string;
  replace?: boolean;
}

function Link({
  className,
  to = ROUTES.HOME,
  children,
  isActive,
  tabIndex,
  title,
  replace,
}: Props): JSX.Element {
  return (
    <NavLink
      className={clsx(styles.link, { [styles.isActive]: isActive }, className)}
      to={to}
      tabIndex={tabIndex}
      title={title}
      aria-label={title}
      replace={replace}
    >
      {children}
    </NavLink>
  );
}

export default Link;
