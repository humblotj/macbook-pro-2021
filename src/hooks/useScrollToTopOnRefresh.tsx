import { useEffect } from 'react';

const useScrollToTopOnRefresh = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    window.onpagehide = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        window.scrollTo(0, 0);
      }
    };
    return () => {
      window.onpagehide = null;
    };
  }, []);
};

export default useScrollToTopOnRefresh;
