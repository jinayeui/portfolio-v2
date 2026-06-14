'use client';

import { careers } from '@/data/portfolio';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section id='career' className={styles.section}>
      <div className={styles.sectionLabel}>
        <p className={styles.labelText} data-aos="fade-left">01. Career</p>
        <div className={styles.labelLine} />
      </div>

      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
        Work
        <br />
        Experience
      </h2>

      <div className={styles.careerList}>
        {careers.map((career, idx) => (
          <article key={idx} className={styles.careerItem}>
            <div className={styles.careerHeader} data-aos="fade-up">
              <p className={styles.period}>{career.period}</p>
              <h3 className={styles.company}>{career.company}</h3>
              <p className={styles.role}>{career.role}</p>
            </div>

            <div className={styles.careerBody}>
              <ul className={styles.desc} data-aos="fade-left">
                {career.description.map((item, i) => (
                  <li key={i}>
                    <span className={styles.bullet}>›</span>
                    {item}
                  </li>
                ))}
              </ul>

              {career.techStack && career.techStack.length > 0 && (
                <ul className={styles.techStack} data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
                  {career.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
