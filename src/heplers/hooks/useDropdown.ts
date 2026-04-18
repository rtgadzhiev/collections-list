import useClickOutside from './useClickOutside';
import { useState, type MouseEventHandler } from 'react';

function useDropdown(initialState: boolean) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggleDropdown: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.target) {
      setIsOpen((prev) => !prev);
    }
  };
  const closeDropdown = (): void => {
    setIsOpen(false);
  };
  const dropdownRef: React.RefObject<HTMLElement | null> =
    useClickOutside(closeDropdown);

  return [isOpen, toggleDropdown, dropdownRef] as const;
}

export default useDropdown;
