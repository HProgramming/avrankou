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
            // Add the 'visible' class to the target element
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const currentRefs = refs.current;
    if (currentRefs) {
      currentRefs.forEach((ref) => {
        if (ref) {
          // Make sure the element has the 'visible' class if it's already intersecting
          // This ensures elements are visible even if the observer callback hasn't fired yet
          if (ref.getBoundingClientRect().top < window.innerHeight) {
            ref.classList.add('visible');
          }
          observer.observe(ref);
        }
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
