import styles from './Error.module.css';
import { getErrorMessage } from '../../heplers/getErrorMessage';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

interface Props {
  error: FetchBaseQueryError | SerializedError | string;
}

function Error({ error }: Props) {
  return (
    <span className={styles.error}>
      {typeof error === 'string' ? error : getErrorMessage(error)};
    </span>
  );
}

export default Error;
