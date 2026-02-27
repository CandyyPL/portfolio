import Background from '@/components/Background.tsx';
import Hero from '@/sections/Hero.tsx';
import Topbar from '@/components/Topbar.tsx';

export default function App() {
  return (
    <>
      <Background />
      <Topbar />
      <main className='flex flex-col items-center justify-start p-4'>
        <Hero />
      </main>
    </>
  );
}
