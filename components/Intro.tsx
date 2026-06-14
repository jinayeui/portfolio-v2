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

      <span className={styles.scrollIndicator}>SCROLL</span>
    </section>
  );
}
