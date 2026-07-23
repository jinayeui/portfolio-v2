import type { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h2 className={`title ${className || ''}`} data-aos="fade-up" data-aos-delay="200">
      {children}
    </h2>
  );
}