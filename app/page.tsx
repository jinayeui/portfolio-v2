'use client';

import { useActiveOnMount } from '@/hooks/useActiveOnMount';
import { useActiveOnView } from '@/hooks/useActiveOnView';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useActiveOnMount();
  useActiveOnView();

  return (
    <div id="wrap">
      <Header />
      <main>
        <Intro />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
