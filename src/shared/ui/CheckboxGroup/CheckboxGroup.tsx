import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Skeleton from '../Skeleton/Skeleton';
import styles from './CheckboxGroup.module.css';
import { Button } from '@/shared/ui/Button';

export type CheckboxOption = {
  id: number;
  title: string;
  imageSrc?: string | null;
};

interface Props {
  legend: string;
  options: CheckboxOption[] | undefined;
  isLoading?: boolean;
  onChange: (optionId: number) => void;
  isChecked: (optionId: number) => boolean;
  isShowAllButton?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  skeletonCount?: number;
}

const CheckboxGroup = (props: Props) => {
  const {
    legend,
    options,
    isLoading = false,
    onChange,
    isChecked,
    isShowAllButton = false,
    onClick,
    isOpen,
    skeletonCount = 3,
  } = props;

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
              checked={isChecked(option.id)}
              // imageSrc={option?.imageSrc}
            />
          ))
        )}
      </div>
      {isShowAllButton && (
        <Button className={styles.button} onClick={onClick}>
          {isOpen ? 'Скрыть' : 'Посмотреть все'}
        </Button>
      )}
    </fieldset>
  );
};

export { CheckboxGroup };
