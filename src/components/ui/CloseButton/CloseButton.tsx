import Button from '../Button/Button';
import icon from '../../../assets/images/icons/close-button-icon.svg';
import styles from './CloseButton.module.css';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen?: boolean;
}

function CloseButton({ onClick, isOpen }: Props) {
  return (
    <Button className={styles.button} onClick={onClick} disabled={isOpen}>
      <img className={styles.icon} src={icon} alt="" width="18" height="18" />
    </Button>
  );
}

export default CloseButton;
