import { personalInfo } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id='about' className={styles.about}>
      <Title className={styles.title}>About Me</Title>
      
      <p className={styles.description} data-aos='fade-right' data-aos-delay='200'>
        안녕하세요, UI 개발자 정지나입니다. ☻<br />
        디자인부터 웹 구축과 운영까지 <strong>전 과정에서 경험</strong>을 쌓았습니다.<br />
        경험을 바탕으로 <strong>역할에 한계를 두지 않고</strong> 서비스 전반에 기여하고 싶습니다.<br />
        <strong>강한 책임감</strong>으로 맡은 프로젝트를 집요하게 파고 들어 최선의 결과물을 도출하겠습니다.
      </p>

      <div className={styles.btnWrap}>
        <Button href={`tel:${personalInfo.phone}`} target='_self' className='btnPhone'>
          📱 {personalInfo.phone}
        </Button>
        <Button href={`mailto:${personalInfo.email}`} target='_self' className='btnEmail'>
          📨 {personalInfo.email}
        </Button>
      </div>

      <dl className={styles.techstack}>
        <div className={styles.skill}>
          <dt>HTML5</dt>
          <dt>CSS3</dt>
          <dt>SCSS</dt>
          <dd>
            <ul>
              <li>웹 표준과 접근성을 준수한 시맨틱 마크업</li>
              <li>CSS 변수 기반 디자인 시스템 구축</li>
              <li>유동형 레이아웃 기반 반응형 웹 구현</li>
              <li>keyframes를 활용한 애니메이션 효과 구현</li>
            </ul>
          </dd>
        </div>
        <div className={styles.skill}>
          <dt>JavaScript</dt>
          <dt>jQuery</dt>
          <dt>Axios</dt>
          <dd>
            <ul>
              <li>바닐라 자바스크립트 중심 개발</li>
              <li>성능 최적화를 고려한 코드 작성</li>
              <li>REST API 연동</li>
            </ul>
          </dd>
        </div>
        <div className={styles.skill}>
          <dt>React</dt>
          <dt>Next.js</dt>
          <dd>
            <ul>
              <li>컴포넌트 단위 UI 설계</li>
              <li>상태 변화에 따른 동적 UI 구현</li>
            </ul>
          </dd>
        </div>
        <div className={styles.skill}>
          <dt>styled-components</dt>
          <dt>Tailwind CSS</dt>
          <dd>
            <ul>
              <li>컴포넌트 스코프 기반 스타일링</li>
              <li>props에 따른 동적 스타일 적용</li>
              <li>유틸리티 클래스 기반 빠른 UI 구현</li>
            </ul>
          </dd>
        </div>
        <div className={styles.skill}>
          <dt>Git</dt>
          <dd>
            <ul>
              <li>Git 기반 버전 관리 및 협업 경험</li>
            </ul>
          </dd>
        </div>
        <div className={styles.skill}>
          <dt>Figma</dt>
          <dt>Photoshop</dt>
          <dd>
            <ul>
              <li>디자인 시안 기반 정확한 퍼블리싱</li>
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
