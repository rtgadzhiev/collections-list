import { createContext, useMemo, type ReactNode } from 'react';
import { useToggle } from '@/shared/lib/hooks/useToggle';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';

interface Value {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
  ref: React.RefObject<HTMLElement | null>;
}

export const UIContext = createContext<null | Value>(null);

interface Props {
  children: ReactNode;
}

export function UIProvider({ children }: Props) {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  const closeFilters = () => setIsOpen(false);
  const ref = useClickOutside(closeFilters);

  const value = useMemo(
    () => ({ isOpen, setIsOpen, toggle, ref }),
    [isOpen, toggle, setIsOpen, ref],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
