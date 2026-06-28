import styles from './HeaderNavigation.module.css';
import { Logo } from '@/shared/ui/Logo';
import { HeaderDropdown } from '../HeaderDropdown';

const HeaderNavigation = () => {
  return (
    <div className={styles.navigation}>
      <Logo isTextHiddenOnMobile={true} isLogo={true} />
      <HeaderDropdown />
    </div>
  );
};

export { HeaderNavigation };
