import icon from '@/shared/assets/images/icons/dropdown-dots-icon.svg';
import styles from './DetailDropdown.module.css';
import { Dropdown, useDropdown, useDropdownPosition } from '../Dropdown';
import { Link } from '../Link';

interface Path {
  pathname: string;
  search: string;
  hash: string;
}

type To = string | Partial<Path>;

interface Props {
  tabIndex?: number;
  to: To;
}

const DetailDropdown = ({ tabIndex, to }: Props) => {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown(false);
  const dropdownPosistion = useDropdownPosition(dropdownRef);

  return (
    <Dropdown
      className={styles.dropdown}
      ref={dropdownRef}
      isOpen={isOpen}
      onToggle={toggleDropdown}
      trigger={
        <img className={styles.icon} src={icon} alt="" width="15" height="15" />
      }
      content={
        <Link className={styles.link} to={to}>
          Подробнее
        </Link>
      }
      position={dropdownPosistion}
      tabIndex={tabIndex}
    />
  );
};

export { DetailDropdown };
