import BurgerButton from '../ui/BurgerButton/BurgerButton';
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary';
import Link from '../ui/Link/Link';
import clsx from 'clsx';
import styles from './HeaderActions.module.css';
import useToggle from '../../helpers/hooks/useToggle';

function HeaderActions() {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <>
      <div className={clsx(styles.buttons, { [styles.isOpen]: isOpen })}>
        <div className={styles.wrapper}>
          <Link className={styles.link}>Вход</Link>
          <ButtonPrimary>Регистрация</ButtonPrimary>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default HeaderActions;
