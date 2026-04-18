import clsx from 'clsx';
import styles from './Skeleton.module.css';

interface Props {
  className?: string;
  count?: number;
}

function Skeleton({ count = 1, className }: Props) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={clsx(styles.skeleton, className)}></div>
      ))}
    </>
  );
}

export default Skeleton;
