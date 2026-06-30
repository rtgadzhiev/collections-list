import clsx from 'clsx';
import styles from './BurgerButton.module.css';
import { Button } from '../Button';
import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const BurgerButton = ({ onClick, isOpen }: Props) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(styles.burgerButton, { [styles.isOpen]: isOpen })}
      title={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
    </Button>
  );
};

export { BurgerButton };
