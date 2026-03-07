import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';
import Projects from '@/sections/Projects.tsx';
import About from '@/sections/About.tsx';
import Contact from '@/sections/Contact.tsx';
import Footer from '@/components/Footer.tsx';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

export default function MainPage() {
  const [params] = useSearchParams();

  useEffect(() => {
    const section = params.get('section');

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  return (
    <>
      <Topbar />
      <main className='main-content'>
        <div className='sections-container'>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
