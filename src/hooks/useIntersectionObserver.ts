import { useEffect, type RefObject } from 'react';

/**
 * Custom hook to handle intersection observer for animations
 * @param refs Array of refs to observe
 * @param threshold Threshold value for the intersection observer (default: 0.1)
 */
const useIntersectionObserver = (
  refs: RefObject<(HTMLElement | null)[]>,
  threshold: number = 0.1
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const currentRefs = refs.current;
    if (currentRefs) {
      currentRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (currentRefs) {
        currentRefs.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [refs, threshold]);
};

export default useIntersectionObserver;