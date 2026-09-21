# Portfolio

웹 퍼블리셔 정지나의 포트폴리오 사이트입니다.
Next.js + TypeScript + CSS Modules 기반 포트폴리오 프로젝트입니다.

> 이 프로젝트의 개발 규칙(폴더 구조, 컴포넌트·네이밍·TypeScript 규칙, 접근성, CSS 작성 순서 등)은 [CLAUDE.md](./CLAUDE.md)에 정리해 두었고, Claude Code로 개발할 때 이 지침을 기준으로 작업했습니다.

## Tech Stack

- **Framework**: Next.js (App Router), React
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animation**: GSAP (ScrollTrigger), AOS
- **Font**: Pretendard, Syne, DM Mono

## Sections

| 섹션 | 설명 |
| --- | --- |
| Hero | 메인 타이틀 |
| About | 소개와 기술 스택 (GSAP 가로 스크롤) |
| Career | 경력 |
| Projects | 프로젝트 목록 |

## Project Structure

```
├─ app/           # Next.js App Router
├─ components/
│  ├─ ui/         # 기본 UI 컴포넌트
│  ├─ layout/     # 레이아웃 컴포넌트
│  ├─ section/    # 페이지 섹션 컴포넌트
│  └─ features/   # 기능별 컴포넌트
├─ data/          # 포트폴리오 콘텐츠 데이터
├─ hooks/         # Custom React Hooks
├─ lib/           # 초기화 등 유틸리티
├─ styles/        # 전역 스타일
├─ types/         # TypeScript 타입 정의
└─ public/        # 정적 파일 (폰트, 이미지)
```

## Responsive

- Mobile: `320px` ~ `767px`
- Tablet: `768px` ~ `1024px`
- Desktop: `1025px` ~
