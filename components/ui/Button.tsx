import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
}

export default function Button({
  text,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel,
  className,
}: ButtonProps) {
  return (
    <div className={`${styles.btn} ${className || ''}`}>
      <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
        {text}
      </a>
    </div>
  );
}
