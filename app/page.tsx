import Header from '@/components/layout/Header';
import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Career from '@/components/section/Career';
import Projects from '@/components/section/Projects';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div id="wrap">
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
