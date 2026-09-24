import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(null);
  const visibleSections = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        const current = sectionIds.find((id) => visibleSections.current.has(id));
        setActiveId(current || null);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}