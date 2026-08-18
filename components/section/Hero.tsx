import { personalInfo } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id='hero' className={styles.section}>
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden='true' />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden='true' />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden='true' />

      <div className={styles.inner}>
        <p className={styles.subtitle}>✦ {personalInfo.role}</p>

        <h1 className={`${styles.title} target-mount`}>
          JINA&#39;s
          <br />
          <em>PORTFOLIO</em>
        </h1>
      </div>

      <div className={styles.scrollIndicator}>SCROLL</div>
    </section>
  );
}
