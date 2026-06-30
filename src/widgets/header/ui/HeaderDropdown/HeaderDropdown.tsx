import styles from './HeaderDropdown.module.css';
import { Arrow } from '@/shared/ui/Arrow';
import arrow from '@/shared/assets/images/icons/dropdown-arrow-icon.svg';
import { HeaderMenu } from '../HeaderMenu';
import {
  Dropdown,
  useDropdown,
  useDropdownPosition,
} from '@/shared/ui/Dropdown';

const HeaderDropdown = () => {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown(false);
  const dropdownPosition = useDropdownPosition(dropdownRef);

  return (
    <Dropdown
      ref={dropdownRef}
      isOpen={isOpen}
      onToggle={toggleDropdown}
      trigger={
        <>
          <span>Подготовка</span>
          <Arrow className={styles.arrow} arrow={arrow} isOpen={isOpen} />
        </>
      }
      content={<HeaderMenu />}
      isMobile={true}
      position={dropdownPosition}
    />
  );
};

export { HeaderDropdown };
