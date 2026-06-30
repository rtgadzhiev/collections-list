import styles from './PreviousPageButton.module.css';
import caretLeft from '@/shared/assets/images/icons/caret-left-icon.svg';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button';

const PreviousPageButton = () => {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <Button className={styles.button} onClick={handlePreviousPage}>
      <img
        className={styles.arrow}
        src={caretLeft}
        alt=""
        width="20"
        height="20"
      />
      <span>Назад</span>
    </Button>
  );
};

export { PreviousPageButton };
