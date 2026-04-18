import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Skeleton from '../Skeleton/Skeleton';
import styles from './CheckboxGroup.module.css';

interface Props {
  legend: string;
  options: any[] | undefined;
  isLoading: boolean;
  onChange: (optionId: number) => void;
  isChecked: (optionId: number) => boolean;
  isShowAllButton?: boolean;
  onClick: () => void;
  isOpen: boolean;
  skeletonCount?: number;
}

function CheckboxGroup({
  legend,
  options,
  isLoading = false,
  onChange,
  isChecked,
  isShowAllButton = false,
  onClick,
  isOpen,
  skeletonCount = 3,
}: Props) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Skeleton className={styles.skeleton} count={skeletonCount} />
        ) : (
          options?.map((option) => (
            <FilterCheckbox
              className={styles.checkbox}
              key={option.id}
              label={option.title}
              onChange={() => onChange(option.id)}
              checked={isChecked ? isChecked(option.id) : false}
              // imageSrc={option?.imageSrc}
            />
          ))
        )}
      </div>
      {isShowAllButton && (
        <Button className={styles.button} onClick={onClick} type="button">
          {isOpen ? 'Скрыть' : 'Посмотреть все'}
        </Button>
      )}
    </fieldset>
  );
}

export default CheckboxGroup;
