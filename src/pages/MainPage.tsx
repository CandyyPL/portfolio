import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';
import Projects from '@/sections/Projects.tsx';
import About from '@/sections/About.tsx';
import Contact from '@/sections/Contact.tsx';
import Footer from '@/components/Footer.tsx';
import { useEffect } from 'react';
import { usePrevLocation } from '@/hooks/usePrevLocation.ts';

export default function MainPage() {
  const { prevLocation } = usePrevLocation();

  useEffect(() => {
    console.log(prevLocation);

    if (prevLocation === 'projects') {
      setTimeout(() => {
        const element = document.getElementById(prevLocation);
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
