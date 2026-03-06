import Background from '@/components/Background.tsx';
import Topbar from '@/components/Topbar.tsx';
import SingleProject from '@/components/SingleProject.tsx';

export default function ProjectPage() {
  return (
    <>
      <Background />
      <Topbar />
      <main className='main-content'>
        <SingleProject />
      </main>
    </>
  );
}
