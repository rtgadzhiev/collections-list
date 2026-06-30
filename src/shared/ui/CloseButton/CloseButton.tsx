import icon from '@/shared/assets/images/icons/close-button-icon.svg';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './CloseButton.module.css';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen?: boolean;
}

const CloseButton = ({ onClick, isOpen }: Props) => {
  return (
    <Button className={styles.button} onClick={onClick} disabled={isOpen}>
      <Icon className={styles.icon} src={icon} alt="" width={18} height={18} />
    </Button>
  );
};

export { CloseButton };
