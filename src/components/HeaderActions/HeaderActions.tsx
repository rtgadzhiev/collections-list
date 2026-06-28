import clsx from 'clsx';
import styles from './HeaderActions.module.css';
import { Button } from '@/shared/ui/Button';

function HeaderActions() {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <>
      <div className={clsx(styles.buttons, { [styles.isOpen]: isOpen })}>
        <div className={styles.wrapper}>
          <Link className={styles.link}>Вход</Link>
          <Button variant="primary">Регистрация</Button>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
