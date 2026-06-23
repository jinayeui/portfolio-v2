import Section from '@/components/layout/Section';
import Title from '@/components/ui/Title';
import styles from './About.module.css';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <Section id="about">
      <Title className={styles.center}>About Me</Title>

      <p className={styles.text} data-aos="fade-in">
        안녕하세요, 4년 차 퍼블리셔 정지나입니다. ☺︎<br />
        초기 구축부터 유지보수, 운영까지의 전 과정에서 경험을 쌓았습니다.<br />
        강한 책임감으로 맡은 프로젝트를 집요하게 파고 들어 최선의 결과물을 도출합니다.<br />
        현재는 프론트엔드 기술을 학습하며, 더 넓은 기술적 성장을 이어나가고 있습니다.
      </p>

      <div className={styles.btnWrap}>
        <div className={styles.btnPhone}>
          <a href={`tel:${personalInfo.phone}`}>📱 {personalInfo.phone}</a>
        </div>
        <div className={styles.btnEmail}>
          <a href={`mailto:${personalInfo.email}`}>📨 {personalInfo.email}</a>
        </div>
        <div className={styles.btnGithub}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            👩🏻‍💻 GitHub
          </a>
        </div>
      </div>

      {/* <ul className={styles.skills}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
      </ul> */}
    </Section>
  );
}
