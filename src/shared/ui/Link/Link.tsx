import clsx from 'clsx';
import styles from './Link.module.css';
import {
  NavLink,
  type NavLinkProps,
  type NavLinkRenderProps,
} from 'react-router';
import { ROUTES } from '@/shared/constants/routes';

const Link = ({
  className,
  to = ROUTES.HOME,
  children,
  isActive,
  tabIndex,
  title,
  replace = false,
}: NavLinkProps & Partial<NavLinkRenderProps>) => {
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
};

export { Link };
