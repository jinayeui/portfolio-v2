import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  target = '_blank',
  rel,
  className = '',
}: ButtonProps) {
  // 새 창으로 열 때만 보안용 rel 적용
  const linkRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

  return (
    <div className={`${styles.btn} ${className}`}>
      <a href={href} target={target} rel={linkRel}>
        {children}
      </a>
    </div>
  );
}
