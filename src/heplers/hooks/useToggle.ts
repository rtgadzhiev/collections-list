import { useState } from 'react';

export default function useToggle(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggle = (): void => setIsOpen((prev) => !prev);

  return [isOpen, toggle, setIsOpen] as const;
}
