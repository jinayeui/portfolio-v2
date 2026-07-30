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

export const metadata: Metadata = {
  title: '정지나 포트폴리오 | Web Publisher',
  description: '웹 퍼블리셔 정지나입니다.',
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
