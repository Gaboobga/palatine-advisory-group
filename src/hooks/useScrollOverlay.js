import { useEffect, useRef, useState } from 'react';

export function useScrollOverlay(fadeFraction = 0.5) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const vh = window.innerHeight;
          const start = vh;
          const end = vh * (1 - fadeFraction);
          const value = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
          setProgress(value);
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [fadeFraction]);

  return [ref, progress];
}