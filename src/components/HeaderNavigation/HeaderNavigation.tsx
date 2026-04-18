import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import Logo from '../ui/Logo/Logo';
import styles from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <div className={styles.navigation}>
      <Logo isTextHiddenOnMobile={true} isLogo={true} />
      <HeaderDropdown />
    </div>
  );
}

export default HeaderNavigation;
