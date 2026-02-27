import Background from '@/components/Background.tsx';
import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';
import Projects from '@/components/Projects.tsx';

export default function App() {
  return (
    <>
      <Background />
      <Topbar />
      <main className='flex flex-col items-center justify-start gap-20 p-4'>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
