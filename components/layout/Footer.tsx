import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Thanks for visiting.<br />
        © 2026 Jina Jeong. All Rights Reserved.
      </p>
    </footer>
  );
}
