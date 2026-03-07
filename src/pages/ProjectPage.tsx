import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getProjectsQueryOptions } from '@/lib/getProjects.ts';
import { TailSpin } from 'react-loader-spinner';
import { Activity, useEffect } from 'react';
import warningIcon from '@/assets/icons/warning-white.png';
import SingleProject from '@/components/SingleProject.tsx';
import Footer from '@/components/Footer.tsx';
import { usePrevLocation } from '@/hooks/usePrevLocation.ts';

export default function ProjectPage() {
  const { slug } = useParams();
  const { setPrevLocation } = usePrevLocation();

  useEffect(() => {
    setPrevLocation('projects');
    window.scrollTo(0, 0);
  }, []);

  const { data, error, isPending } = useQuery(getProjectsQueryOptions());

  const project = data?.find((project) => project.slug === slug) ?? null;

  return (
    <>
      <main className='main-content items-center p-4 xl:p-8'>
        <section className='flex w-full max-w-300 flex-col items-center gap-4'>
          <Activity mode={isPending && !error ? 'visible' : 'hidden'}>
            <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
              <TailSpin
                width='50px'
                height='50px'
                color='#C1C3C2'
              />
              <p className='text-light text-lg'>Ładowanie</p>
            </div>
          </Activity>
          <Activity mode={error ? 'visible' : 'hidden'}>
            <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
              <img
                src={warningIcon}
                alt='error'
                className='size-14 opacity-90'
              />
              <p className='text-light text-center text-lg'>
                Wystąpił błąd. <br /> Przepraszam za utrudnienia.
              </p>
              <a href='/'>
                <button className='bg-yellow hover:bg-yellow-dim transition-bg text-dark w-full cursor-pointer px-6 py-2 text-lg duration-200'>
                  Strona główna
                </button>
              </a>
            </div>
          </Activity>
          {project && <SingleProject project={project} />}
        </section>
      </main>
      <Footer />
    </>
  );
}
