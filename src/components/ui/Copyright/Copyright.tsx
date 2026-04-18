import Link from '../Link/Link';
import clsx from 'clsx';
import styles from './Copyright.module.css';
import type { JSX } from 'react';

interface Props {
  className?: string;
}

function Copyright({ className }: Props): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <small className={clsx(styles.copyright, className)}>
      <span>© {currentYear} YeaHub</span>
      <Link className={styles.link}>Документы</Link>
    </small>
  );
}

export default Copyright;
