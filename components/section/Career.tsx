import { careers } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import SectionLabel from '@/components/ui/SectionLabel';
import Title from '@/components/ui/Title';
import styles from './Career.module.css';

export default function Career() {
  return (
    <Section id='career'>
      <SectionLabel text={'✦ Career'} />
      <Title>
        Work
        <br />
        Experience
      </Title>

      <div className={styles.careerList}>
        {careers.map((career, idx) => (
          <article key={idx} className={styles.careerItem}>
            <div className={styles.careerHeader} data-aos='fade-up'>
              <p className={styles.period}>{career.period}</p>
              <h3 className={styles.company}>{career.company}</h3>
              <p className={styles.role}>{career.role}</p>
            </div>

            <div className={styles.careerBody}>
              <ul className={styles.desc} data-aos='fade-left'>
                {career.description.map((item, i) => (
                  <li key={i}>
                    <span className={styles.bullet}>‣</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
