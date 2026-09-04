import { personalInfo } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <Section id='about'>
        <Title className={styles.center}>About Me</Title>

        <p className={styles.text} data-aos='fade-in' data-aos-delay='200'>
          안녕하세요, 4년 경력의 웹 퍼블리셔 정지나입니다. ☻<br />
          디자인부터 구축, 운영까지 <strong>전 과정에서 경험</strong>을 쌓았습니다.<br />
          <strong>시맨틱 마크업</strong>과 <strong>웹 접근성</strong> 준수를 기본으로, <strong>재사용성</strong>과 <strong>성능 최적화</strong>를 고려한 코드 설계를 지향합니다.<br />
          <strong>강한 책임감</strong>으로 맡은 프로젝트를 집요하게 파고 들어 최선의 결과물을 도출합니다.<br />
          현재는 <strong>프론트엔드 기술을 학습</strong>하며, 더 넓은 기술적 성장을 이어나가고 있습니다.
        </p>

        <div className={styles.btnWrap}>
          <Button
            text={`📱 ${personalInfo.phone}`}
            href={`tel:${personalInfo.phone}`}
            target={'_self'}
            rel={''}
            ariaLabel='전화하기'
            className={'btnPhone'}
          />
          <Button
            text={`📨 ${personalInfo.email}`}
            href={`mailto:${personalInfo.email}`}
            target={'_self'}
            rel={''}
            ariaLabel='이메일 보내기'
            className={'btnEmail'}
          />
          <Button
            text={'👩🏻‍💻 GitHub'}
            href={personalInfo.github}
            ariaLabel={'GitHub 열기'}
            className={'btnGithub'}
          />
        </div>
      </Section>

      <div className={styles.marquee}>
        <ul>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js TypeScript</li>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js TypeScript</li>
        </ul>
      </div>
    </>
  );
}
