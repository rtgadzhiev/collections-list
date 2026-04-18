import Button from '../Button/Button';
import clsx from 'clsx';
import styles from './BurgerButton.module.css';
import type { JSX, MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

function BurgerButton({ onClick, isOpen }: Props): JSX.Element {
  return (
    <Button
      onClick={onClick}
      className={clsx(styles.burgerButton, { [styles.isOpen]: isOpen })}
      title="Открыть меню"
    >
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
      <span className={clsx(styles.line, { [styles.isOpen]: isOpen })}></span>
    </Button>
  );
}

export default BurgerButton;
