'use client';

import { useEffect } from 'react';

export function useActiveOnView() {
  useEffect(() => {
    const elements = document.querySelectorAll('.target-view');

    const groups = new Map<number, Element[]>();
    elements.forEach((el) => {
      const threshold = parseFloat((el as HTMLElement).dataset.threshold ?? '0.3'); // default threshold: 0.3
      if (!groups.has(threshold)) groups.set(threshold, []);
      groups.get(threshold)!.push(el);
    });

    const observers: IntersectionObserver[] = [];
    groups.forEach((els, threshold) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-active');
            }
          });
        },
        { threshold }
      );
      els.forEach((el) => obs.observe(el));
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);
}
