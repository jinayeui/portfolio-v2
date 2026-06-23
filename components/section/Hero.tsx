import { personalInfo } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id='hero' className={styles.section}>
      {/* <span className={styles.deco} /> */}
      <div className={styles.marquee}>
        <p>HELLO I'M A {personalInfo.role} JINA JEONG</p>
        <p>HELLO I'M A {personalInfo.role} JINA JEONG</p>
      </div>

      <div className={styles.inner}>
        <p className={styles.subtitle}>
          ✦ {personalInfo.role}
        </p>

        <h1 className={`${styles.title} target-mount`}>
          JINA's
          <br />
          <em>PORTFOLIO</em>
        </h1>
      </div>

      <div className={styles.scrollIndicator}>SCROLL</div>
    </section>
  );
}
