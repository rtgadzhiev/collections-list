import clsx from 'clsx';
import styles from './Arrow.module.css';

interface Props {
  className: string;
  arrow: string;
  width?: number;
  heigth?: number;
  isOpen: boolean;
}

function Arrow({ className, arrow, width = 24, heigth = 24, isOpen }: Props) {
  return (
    <img
      className={clsx(styles.arrow, { [styles.isOpen]: isOpen }, className)}
      src={arrow}
      alt={isOpen ? 'Закрыть' : 'Открыть'}
      width={width}
      height={heigth}
    />
  );
}

export default Arrow;
