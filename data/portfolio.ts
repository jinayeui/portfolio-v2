import { Career, PersonalInfo, Project } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: '정지나',
  role: 'Web Publisher',
  phone: '010-2562-1037',
  email: 'dev.jnjeong@gmail.com',
  github: 'https://github.com/jinayeui',
};

export const careers: Career[] = [
  {
    company: '아이뱅크(디지털웍스)',
    role: 'UI개발사업부 - 퍼블리셔',
    period: '2023.06 ~ 2026.08',
    description: [
      'CJ올리브영 온라인몰 운영 및 제안 퍼블리싱',
      '카페24 분석 및 가이드 제작',
      '나이키 코리아 .COM/APP 운영 (CMS 기반 PDP 콘텐츠 업데이트)',
    ],
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Git',
      'Jenkins',
      'Photoshop',
      'Figma',
    ],
  },
  {
    company: '팡홀딩스',
    role: '디자인팀 - 웹 디자이너/퍼블리셔',
    period: '2021.10 ~ 2022.11',
    description: [
      '클라이언트사 B2B/B2C 웹사이트 구축 및 고도화',
      '자사몰 유지보수',
      'XE, 카페24 기반 퍼블리싱',
      'UI/UX 디자인',
      '웹 콘텐츠 디자인',
    ],
    tags: [
      'HTML5',
      'CSS3',
      'jQuery',
      'XE',
      'Cafe24',
      'Photoshop',
      'Illustrator',
    ],
  },
];

const rawProjects: Omit<Project, 'id'>[] = [
  {
    title: '올리브영',
    subtitle: '온라인몰 퍼블리싱 운영',
    url: 'https://foggy-napkin-4b2.notion.site/3716da1da01180a19635d45220152d55?source=copy_link',
    thumbnail: '/images/oliveyoung.jpg',
    category: 'publishing',
  },
  {
    title: '리얼EMS',
    subtitle: '카페24 쇼핑몰 구축',
    contribution: '퍼블리싱 90%',
    url: 'https://foggy-napkin-4b2.notion.site/EMS-3716da1da0118029ab68fe32d9140641?source=copy_link',
    thumbnail: '/images/realems.jpg',
    category: 'publishing',
  },
  {
    title: '세라빔',
    subtitle: '카페24 쇼핑몰 리뉴얼',
    url: 'https://foggy-napkin-4b2.notion.site/3716da1da011807286b1e1ce81eae8c3?source=copy_link',
    thumbnail: '/images/cerabeam.jpg',
    category: 'publishing',
  },
  {
    title: '법률사무소 청한',
    subtitle: 'XE 사이트 구축',
    url: 'https://foggy-napkin-4b2.notion.site/3716da1da0118078a8f0e6b7ff9ec302?source=copy_link',
    thumbnail: '/images/chanlaw.jpg',
    category: 'publishing',
  },
  {
    title: '지애드스포츠',
    subtitle: 'XE 사이트 구축',
    url: 'https://foggy-napkin-4b2.notion.site/3716da1da01180ecb8d6dbacad0603fc?source=copy_link',
    thumbnail: '/images/gadsports.jpg',
    category: 'publishing',
  },
  {
    title: 'To-do List',
    subtitle: 'React',
    url: 'https://github.com/jinayeui/my-todo-app',
    thumbnail: '/images/todolist.jpg',
    category: 'publishing'
  },
  {
    title: '그랜드하얏트',
    subtitle: '리디자인/반응형',
    url: 'https://github.com/jinayeui/GrandHyatt',
    thumbnail: '/images/grandhyatt.jpg',
    category: 'publishing'
  },
  {
    title: '메리플래닛',
    subtitle: '리디자인/반응형',
    url: 'https://github.com/jinayeui/merryplanet',
    thumbnail: '/images/merryplanet.jpg',
    category: 'publishing'
  },
  {
    title: 'APP',
    subtitle: '디자인',
    url: 'https://scene.zeplin.io/project/62c7d6a7831e6319948c603e',
    thumbnail: '/images/app.jpg',
    category: 'design'
  },
  {
    title: 'WEB',
    subtitle: '디자인',
    url: 'https://foggy-napkin-4b2.notion.site/3cf6da1da01180fba8afe92d2873ae73',
    thumbnail: '/images/web.jpg',
    category: 'design'
  },
  {
    title: 'BANNER',
    subtitle: '디자인',
    url: 'https://foggy-napkin-4b2.notion.site/3cf6da1da0118055984adce4b27cd1db',
    thumbnail: '/images/banner.jpg',
    category: 'design'
  }
];

export const projects: Project[] = rawProjects.map((p, i) => ({
  id: String(i + 1).padStart(2, '0'),
  ...p,
}));