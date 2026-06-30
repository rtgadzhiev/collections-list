import styles from './Error.module.css';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import { getErrorMessage } from '@/shared/lib';

interface Props {
  error: FetchBaseQueryError | SerializedError | string;
}

const Error = ({ error }: Props) => {
  return (
    <span className={styles.error}>
      {typeof error === 'string' ? error : getErrorMessage(error)};
    </span>
  );
};

export { Error };
