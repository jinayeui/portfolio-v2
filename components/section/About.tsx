import { personalInfo } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <Section id='about' className={styles.about}>
        <HorizontalScroll
          track={
            <dl className={styles.techstack}>
              <div className={styles.skill}>
                <dt>HTML5</dt>
                <dt>CSS3</dt>
                <dd>
                  <strong>시맨틱 마크업</strong>과 <strong>웹 접근성</strong> 준수를 기본으로, <strong>CSS 변수</strong> 활용으로 <strong>유지보수성</strong>을 높여요💻
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>JavaScript</dt>
                <dt>jQuery</dt>
                <dd>
                  <strong>바닐라 자바스크립트</strong> 중심으로, <strong>성능 최적화</strong>를 고려한 코드 설계를 지향해요🔍
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>Responsive Web</dt>
                <dd>
                  전 구간에서 깨짐 없는 <strong>반응형 웹</strong>을 구현해요📲
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>Git</dt>
                <dd>
                  Git 기반 <strong>형상 관리</strong>와 <strong>협업</strong> 경험이 있어요📂
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>React</dt>
                <dt>Next.js</dt>
                <dt>TypeScript</dt>
                <dd>
                  <strong>프론트엔드 기술을 학습 중</strong>이에요📚
                </dd>
              </div>
            </dl>
          }
        >
          <Title className={styles.center}>About Me</Title>

          <p className={styles.text} data-aos='fade-in' data-aos-delay='200'>
            안녕하세요, 웹 퍼블리셔 정지나입니다. ☻<br />
            디자인부터 구축, 운영까지 <strong>전 과정에서 경험</strong>을 쌓았습니다.
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
        </HorizontalScroll>
      </Section>

      {/* <div className={styles.marquee}>
        <ul>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js TypeScript</li>
          <li>HTML5 CSS3 SCSS JavaScript jQuery React Next.js TypeScript</li>
        </ul>
      </div> */}
    </>
  );
}
