import { personalInfo } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.marquee}>
        <ul>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js</li>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js</li>
        </ul>
      </div>

      <div className={styles.inner}>
        <p className={styles.subtitle}>
          ✦ {personalInfo.role}
        </p>

        <h1 className={`${styles.title} target-mount`}>
          JINA's<br />
          <em>PORTFOLIO</em>
        </h1>
      </div>

      <div className={styles.scrollIndicator}>SCROLL</div>
    </section>
  );
}
