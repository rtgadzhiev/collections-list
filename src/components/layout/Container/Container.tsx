import clsx from 'clsx';
import styles from './Container.module.css';
import type { JSX, ReactNode } from 'react';

interface Props {
  className: string;
  children: ReactNode;
}

function Container({ className, children }: Props): JSX.Element {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}

export default Container;
