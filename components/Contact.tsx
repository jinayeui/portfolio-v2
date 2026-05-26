'use client';

import { personalInfo } from '@/data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id='contact' className={`${styles.section} reveal`}>
      <div className={styles.sectionLabel}>
        <span className={styles.labelText}>03. Contact</span>
        <div className={styles.labelLine} />
      </div>

      <h2 className={styles.title}>Thank you</h2>

      {/* <div className={styles.content}>
        <p className={styles.desc}>감사합니다. 언제든지 연락 주세요!</p>
        <a className={styles.emailLink} href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div> */}

      <p className={styles.desc}>감사합니다. 언제든지 연락 주세요!</p>

      <div className={styles.btnEmail}>
        <a href={`mailto:${personalInfo.email}`}>
          📨 {personalInfo.email}
        </a>
      </div>
    </section>
  );
}
