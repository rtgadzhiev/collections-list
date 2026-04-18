import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './IconButton.module.css';
import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

function IconButton({ onClick, icon, title, className }: Props) {
  return (
    <Button
      className={clsx(styles.button, className)}
      onClick={onClick}
      title={title}
    >
      <img className={styles.icon} src={icon} alt="" width="24" height="24" />
    </Button>
  );
}

export default IconButton;
