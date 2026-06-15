'use client';

import { personalInfo } from '@/data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <p className={styles.labelText} data-aos="fade-left">03. Contact</p>
          <div className={styles.labelLine} />
        </div>

        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">Thank you</h2>

        {/* <div className={styles.content}>
          <p className={styles.text}>감사합니다. 언제든지 연락 주세요!</p>
          <a className={styles.emailLink} href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </div> */}

        <p className={styles.text} data-aos="fade-right" data-aos-delay="200">감사합니다. 언제든지 연락 주세요!</p>

        <div className={styles.btnEmail}>
          <a href={`mailto:${personalInfo.email}`}>
            📨 {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
