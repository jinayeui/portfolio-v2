import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: Props) {
  return (
    <h2 className={`title ${className || ''}`} data-aos="fade-up" data-aos-delay="200">
      {children}
    </h2>
  );
}