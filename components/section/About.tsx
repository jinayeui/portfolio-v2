import { personalInfo } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import HorizontalScroll from '@/components/features/HorizontalScroll';
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
                <dt>SCSS</dt>
                <dd>
                  <ul>
                    <li>시맨틱 마크업, 웹 접근성 준수</li>
                    <li>CSS 변수 기반 디자인 시스템 구축</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>JavaScript</dt>
                <dt>jQuery</dt>
                <dd>
                  <ul>
                    <li>바닐라 JS 중심 개발</li>
                    <li>성능을 고려한 코드 설계</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>React</dt>
                <dt>Next.js</dt>
                <dd>
                  <ul>
                    <li>컴포넌트 단위 UI 구현</li>
                    <li>props를 통한 데이터 전달, 상태 관리</li>
                    <li>TypeScript 학습 중</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.skill}>
                <dt>Git</dt>
                <dd>
                  <ul>
                    <li>Git 기반 버전 관리, 협업</li>
                  </ul>
                </dd>
              </div>
            </dl>
          }
        >
          <Title className={styles.center}>About Me</Title>

          <p className={styles.text} data-aos='fade-in' data-aos-delay='200'>
            안녕하세요, UI 개발자 정지나입니다. ☻<br />
            디자인부터 구축과 운영까지 <strong>전 과정에서 경험</strong>을 쌓았습니다.<br />
            경험을 바탕으로 <strong>역할에 한계를 두지 않고</strong> 서비스 전반에 기여하고 싶습니다.<br />
            <strong>강한 책임감</strong>으로 맡은 프로젝트를 집요하게 파고 들어 최선의 결과물을 도출하겠습니다.
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
          </div>
        </HorizontalScroll>
      </Section>
    </>
  );
}
