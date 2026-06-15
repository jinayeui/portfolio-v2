import type { Metadata, Viewport } from 'next';
import AOSInit from '@/lib/AOSInit';
import '@/styles/fonts.css';
import '@/styles/variables.css';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '정지나 | Web Publisher',
  description: '웹 퍼블리셔 정지나입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
