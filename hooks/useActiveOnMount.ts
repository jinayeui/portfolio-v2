'use client';

import { useEffect } from 'react';

export function useActiveOnMount() {
  useEffect(() => {
    const elements = document.querySelectorAll('.target-mount');
    setTimeout(() => {
      requestAnimationFrame(() => {
        elements.forEach((el) => el.classList.add('is-active'));
      });
    }, 300);
  }, []);
}