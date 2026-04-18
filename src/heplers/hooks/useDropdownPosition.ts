import { useEffect, useRef, useState } from 'react';

export type Position = 'left' | 'right';

function useDropdownPosition(dropdownRef: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<null | Position>(null);
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;

    const calculatePosition = (ref: HTMLElement | null): Position | null => {
      if (!ref) return null;

      const rect = ref.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const position: Position =
        rect.left < viewportWidth / 2 ? 'right' : 'left';

      return position;
    };

    const position = calculatePosition(dropdown);

    setPosition(position);

    const handleResize = () => {
      const timeout = timeoutRef.current;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeoutRef.current = setTimeout(() => {
        setPosition(calculatePosition(dropdown));
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dropdownRef]);

  return position;
}

export default useDropdownPosition;
