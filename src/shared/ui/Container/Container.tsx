import clsx from 'clsx';
import styles from './Container.module.css';
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: Props) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export { Container };
