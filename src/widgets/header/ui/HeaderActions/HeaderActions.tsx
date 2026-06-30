import styles from './HeaderActions.module.css';
import clsx from 'clsx';
import { Button } from '@/shared/ui/Button';
import { useToggle } from '@/shared/lib';
import { Link } from '@/shared/ui/Link';
import { ROUTES } from '@/shared/constants/routes';
import { BurgerButton } from '@/shared/ui/BurgerButton';

const HeaderActions = () => {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <>
      <div className={clsx(styles.buttons, { [styles.isOpen]: isOpen })}>
        <div className={styles.wrapper}>
          <Link className={styles.link} to={ROUTES.HOME}>
            Вход
          </Link>
          <Button variant="primary">Регистрация</Button>
        </div>
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
};

export { HeaderActions };
