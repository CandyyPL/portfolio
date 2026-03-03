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
      <main className='mx-auto flex max-w-350 flex-col items-center justify-start gap-20 p-4 md:gap-40 xl:gap-80'>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
