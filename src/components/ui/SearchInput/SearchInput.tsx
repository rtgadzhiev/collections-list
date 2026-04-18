import clsx from 'clsx';
import styles from './SearchInput.module.css';

interface Props {
  className?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

function SearchInput({
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: Props) {
  return (
    <div className={styles.icon}>
      <input
        className={clsx(styles.input, className)}
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default SearchInput;
