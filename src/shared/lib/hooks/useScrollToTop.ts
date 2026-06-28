import { useEffect } from 'react';

function useScrollToTop(deps: unknown[]) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, deps);
}

export default useScrollToTop;
