import type { IBaseItem } from '@/constants/constants';

interface IMenuItem extends IBaseItem {
  isActive?: boolean;
}

type TMenuItems = IMenuItem[];

export { type TMenuItems };
