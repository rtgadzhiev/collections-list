import type { ReactNode } from 'react';
import Button from '../Button/Button';
import styles from './ButtonPrimary.module.css';

interface Props {
  children: ReactNode;
}

function ButtonPrimary({ children }: Props) {
  return <Button className={styles.button}>{children}</Button>;
}

export default ButtonPrimary;
