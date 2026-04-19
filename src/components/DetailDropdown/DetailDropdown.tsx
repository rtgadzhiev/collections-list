import Dropdown from '../ui/Dropdown/Dropdown';
import Link, { type ITo } from '../ui/Link/Link';
import icon from '../../assets/images/icons/dropdown-dots-icon.svg';
import styles from './DetailDropdown.module.css';
import useDropdown from '../../heplers/hooks/useDropdown';
import useDropdownPosition from '../../heplers/hooks/useDropdownPosition';

interface Props {
  tabIndex?: number;
  to: string | ITo;
}

function DetailDropdown({ tabIndex, to }: Props) {
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
}

export default DetailDropdown;
