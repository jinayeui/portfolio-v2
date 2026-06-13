'use client';

import { personalInfo } from '@/data/portfolio';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section id='intro' className={styles.section}>
      {/* <span className={styles.deco} /> */}

      <p className={styles.subtitle}>
        ✦ {personalInfo.role}
      </p>

      <h1 className={styles.title}>
        JINA's
        <br />
        <em>PORTFOLIO</em>
      </h1>

      {/* <div className={styles.badge}>
        <span className={styles.badgeDot} />
        <p className={styles.badgeText}>{personalInfo.role}</p>
      </div> */}

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
