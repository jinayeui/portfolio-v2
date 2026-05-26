'use client';

import { careers } from '@/data/portfolio';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section id='career' className={`${styles.section} reveal`}>
      <div className={styles.sectionLabel}>
        <span className={styles.labelText}>01. Career</span>
        <div className={styles.labelLine} />
      </div>

      <h2 className={styles.title}>
        Work
        <br />
        Experience
      </h2>

      <div className={styles.careerList}>
        {careers.map((career, idx) => (
          <article key={idx} className={styles.careerItem}>
            <div className={styles.careerHeader}>
              <p className={styles.period}>{career.period}</p>
              <h3 className={styles.company}>{career.company}</h3>
              <p className={styles.role}>{career.role}</p>
            </div>

            <ul className={styles.careerDesc}>
              {career.description.map((item, i) => (
                <li key={i}>
                  <span className={styles.bullet}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
