import { createContext, useMemo, type ReactNode } from 'react';

import useClickOutside from '../heplers/hooks/useClickOutside';
import useToggle from '../heplers/hooks/useToggle';

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
