import clsx from 'clsx';
import styles from './FilterCheckbox.module.css';

interface Props {
  className?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  imageSrc?: string;
}

function FilterCheckbox({
  className,
  label,
  checked,
  onChange,
  imageSrc,
}: Props) {
  return (
    <div
      className={clsx(styles.checkbox, className, {
        [styles.isChecked]: checked,
      })}
    >
      <label className={clsx(styles.label, { [styles.isImage]: imageSrc })}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {imageSrc && <img src={imageSrc} alt="" width="30" height="30" />}
        {label}
      </label>
    </div>
  );
}

export default FilterCheckbox;
