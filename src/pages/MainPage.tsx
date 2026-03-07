import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';
import Projects from '@/sections/Projects.tsx';
import About from '@/sections/About.tsx';
import Contact from '@/sections/Contact.tsx';
import Footer from '@/components/Footer.tsx';

export default function MainPage() {
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
