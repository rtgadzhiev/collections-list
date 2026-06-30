import type { IBaseItem } from '@/shared/types';

interface IMenuItem extends IBaseItem {
  isActive?: boolean;
}

type TMenuItems = IMenuItem[];

export { type TMenuItems };
