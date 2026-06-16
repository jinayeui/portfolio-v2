import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="wrap">
      <Header />
      <main>
        <Hero />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
