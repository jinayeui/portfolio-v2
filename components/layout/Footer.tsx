import { personalInfo } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} {personalInfo.name} 포트폴리오. Built with Next.js and TypeScript, using Claude Code
      </p>
    </footer>
  );
}
