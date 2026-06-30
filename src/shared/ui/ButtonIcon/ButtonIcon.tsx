import styles from './ButtonIcon.module.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon';
import type { MouseEventHandler } from 'react';

interface Props {
  iconSrc: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  disabled?: boolean;
}

const ButtonIcon = ({ iconSrc, onClick, title, disabled }: Props) => {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      title={title}
      isLink={false}
      disabled={disabled}
    >
      <Icon className={styles.icon} src={iconSrc} />
    </Button>
  );
};

export { ButtonIcon };
