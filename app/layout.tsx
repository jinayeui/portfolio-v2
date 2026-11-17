import type { Metadata, Viewport } from 'next';
import { Syne, DM_Mono } from 'next/font/google';
import AOSInit from '@/lib/AOSInit';
import ActiveHooks from '@/lib/ActiveHooks';
import '@/styles/fonts.css';
import '@/styles/variables.css';
import '@/styles/common.css';
import '@/styles/layout.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const SITE_TITLE = '정지나 포트폴리오 | UI Developer';
const SITE_DESCRIPTION = 'UI 개발자 정지나의 포트폴리오입니다.';

const SITE_URL = 'https://portfolio-jinajeong.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    siteName: '정지나 포트폴리오',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/portfolio.jpg',
        width: 1280,
        height: 741,
        alt: '정지나 포트폴리오',
      },
    ],
  },
};

const syne = Syne({ subsets: ['latin'], weight: ['700'], variable: '--font-eng' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-code' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={`${syne.variable} ${dmMono.variable}`}>
      <head>
        <link rel='preload' href='/fonts/Pretendard/Pretendard-Black.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
      </head>
      <body>
        <AOSInit />
        <ActiveHooks />
        {children}
      </body>
    </html>
  );
}
