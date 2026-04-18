import Link from '../Link/Link';
import clsx from 'clsx';
import logo from '../../../assets/images/icons/yeahub-icon.svg';
import styles from './Logo.module.css';
import textDark from '../../../assets/images/icons/yeahub-text-icon-dark.svg';
import textLight from '../../../assets/images/icons/yeahub-text-icon-light.svg';
import { ROUTES } from '../../../constants/routes';
import type { JSX } from 'react';

interface Props {
  className?: string;
  isLogo?: boolean;
  isTextLight?: boolean;
  isTextHiddenOnMobile?: boolean;
}

function Logo({
  className,
  isLogo = false,
  isTextLight,
  isTextHiddenOnMobile,
}: Props): JSX.Element {
  return (
    <Link
      className={clsx(styles.logo, className)}
      to={ROUTES.HOME}
      title="YeaHub"
    >
      {isLogo && <img src={logo} alt="" width="33" height="33" />}
      <img
        className={clsx(styles.text, {
          [styles.hidden]: isTextHiddenOnMobile,
        })}
        src={isTextLight ? textLight : textDark}
        alt=""
        width="99"
        height="32"
      />
    </Link>
  );
}

export default Logo;
