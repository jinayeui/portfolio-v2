# 프로젝트 지침

이 프로젝트는 Next.js (App Router) + TypeScript + CSS Modules 기반 포트폴리오 프로젝트입니다.
아래 가이드를 기반으로 코드를 작성합니다.

## Next.js 버전 주의
이 프로젝트의 Next.js는 기존에 알려진 버전과 달리 API, 컨벤션, 파일 구조가 바뀐 부분이 있습니다.
코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽고, deprecation 안내를 따릅니다.

## 브라우저 지원 범위
- Mobile: `320px` ~ `767px`
- Tablet: `768px` ~ `1024px`
- Desktop: `1025px` ~

## 폴더 구조
```
project/
├─ app/           # Next.js App Router
├─ components/
│  ├─ ui/         # 기본 UI 컴포넌트
│  ├─ layout/     # 레이아웃 컴포넌트
│  ├─ section/    # 페이지 섹션 컴포넌트 (Hero, About, Career, Projects)
│  └─ features/   # 기능별 컴포넌트 (인터랙션 포함)
├─ lib/           # 유틸리티, 상수, store
├─ hooks/         # Custom React Hooks
├─ types/         # TypeScript 타입 정의
├─ styles/        # 전역 스타일
└─ public/        # 정적 파일
```

## 이 프로젝트의 CSS 변수 네이밍
- 배경: `--color-bg`
- 포인트: `--color-primary`, `--color-primary-dim`
- 보조: `--color-secondary`
- 텍스트: `--color-black`, `--color-white`, `--color-gray`
- 폰트: `--font-eng`(Syne), `--font-code`(DM Mono), `--font-default`(Pretendard)

## 컴포넌트 작성 규칙
- 파일명 **PascalCase**: `Header.tsx`, `Button.tsx`
- CSS Module 파일은 컴포넌트와 동일명: `Header.module.css`
- 단일 책임 원칙 — 하나의 컴포넌트는 하나의 역할만
- 3회 이상 사용 UI는 공통 컴포넌트로 분리
- 200줄 초과 시 분리 검토

## `'use client'` 사용 원칙
- `useState`, `useEffect`, `useRef` 등 React 훅 사용 시
- `window`, `document`, `localStorage` 등 브라우저 API 사용 시
- 이벤트 핸들러(`onClick`, `onChange`) 사용 시
- AOS, Framer Motion 등 DOM 조작 라이브러리 사용 시
- 컴포넌트 트리의 **말단(leaf)** 에 작게 격리

## TypeScript 규칙
- 객체 구조 → `interface`, 유니온/교차 타입 → `type`
- `any` 사용 금지 — 모를 경우 `unknown` + 타입 가드
- `?.` Optional Chaining 적극 사용
- `!` Non-null Assertion 최소화
- `import type` 명시적 사용

## 데이터 페칭
- 기본적으로 **Server Components** 사용
- 폼 제출/뮤테이션 → **Server Actions** 우선
- 클라이언트 인터랙션 필요 시에만 `'use client'`

## 이미지 최적화
- 반드시 Next.js `Image` 컴포넌트 사용
- LCP 이미지 → `priority` 속성 추가
- 고정 크기: `width`/`height` 지정
- 부모 채우기: `fill` 사용 (부모에 `position: relative` 필요)

## 접근성 (A11y)
- 시맨틱 HTML 사용 (`<button>`, `<nav>`, `<main>`)
- 필요 시 ARIA 속성 추가
- 모든 인터랙티브 요소는 키보드 접근 가능

## 네이밍 규칙
- 컴포넌트/클래스: PascalCase (`Header`, `CareerItem`)
- CSS Module 클래스: camelCase (`careerList`, `btnEmail`)
- 변수/함수: camelCase (`handleClick`)
- 상수: UPPER_SNAKE_CASE (`MAX_COUNT`)

## CSS 속성 선언 순서
1. Positioning (`position`, `top`, `left`, `z-index`)
2. Display & Box Model (`display`, `width`, `height`, `padding`, `margin`)
3. Typography (`font-size`, `font-weight`, `color`, `line-height`)
4. Visual (`background`, `border`, `border-radius`, `box-shadow`)
5. Animation (`transition`, `animation`)