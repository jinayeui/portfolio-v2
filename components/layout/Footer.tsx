import { personalInfo } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js
      </p>
    </footer>
  );
}
