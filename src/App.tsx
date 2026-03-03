import Background from '@/components/Background.tsx';
import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';
import Projects from '@/sections/Projects.tsx';
import About from '@/sections/About.tsx';
import Contact from '@/sections/Contact.tsx';
import Footer from '@/components/Footer.tsx';

export default function App() {
  return (
    <>
      <Background />
      <Topbar />
      <main className='flex max-w-400 flex-col items-center justify-start gap-20 p-4'>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
