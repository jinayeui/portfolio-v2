'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  /** 세로 스크롤에 맞춰 가로로 이동하는 영역 */
  track: ReactNode;
  /** 고정된 상태로 남아 있는 영역 */
  children: ReactNode;
}

export default function HorizontalScroll({ track, children }: HorizontalScrollProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const trackEl = trackRef.current;
    const section = root?.closest('section');
    if (!root || !trackEl || !section) return;

    const mm = gsap.matchMedia();

    // 모션 최소화 설정에서는 애니메이션 없이 일반 가로 스크롤로 제공
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const getDistance = () => Math.max(trackEl.scrollWidth - trackEl.clientWidth, 0);

      gsap.to(trackEl, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          // 화면보다 큰 영역은 하단이 화면 끝에 닿는 지점에서 고정
          start: () => (section.offsetHeight > window.innerHeight ? 'bottom bottom' : 'top top'),
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // 웹폰트 로딩 후 레이아웃이 바뀌므로 위치를 다시 계산
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {children}
      <div ref={trackRef}>
        {track}
      </div>
    </div>
  );
}
