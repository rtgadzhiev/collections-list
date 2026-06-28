import styles from './HeaderDropdown.module.css';
import useDropdown from '@/helpers/hooks/useDropdown';
import useDropdownPosition from '@/helpers/hooks/useDropdownPosition';
import { Arrow } from '@/shared/ui/Arrow';
import { Dropdown } from '@/shared/ui/Dropdown';
import arrow from '@/shared/assets/images/icons/dropdown-arrow-icon.svg';
import { HeaderMenu } from '../HeaderMenu';

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
