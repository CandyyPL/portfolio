import warningIcon from '@/assets/icons/warning-white.png';
import { TailSpin } from 'react-loader-spinner';
import type { ProjectData } from '@/sections/Projects.tsx';
import ProjectCard from '@/components/ProjectCard.tsx';

type Props = {
  projects: ProjectData[] | null;
  isLoading: boolean;
};

export default function ProjectsList({ projects, isLoading }: Props) {
  return (
    <ul className='flex flex-col items-center gap-8 md:w-full md:flex-row md:flex-wrap md:justify-center'>
      {isLoading ? (
        <div className='flex min-h-67.5 flex-col items-center justify-center gap-4'>
          <TailSpin
            width='50px'
            height='50px'
            color='#C1C3C2'
          />
          <p className='text-light text-lg'>Ładowanie</p>
        </div>
      ) : projects ? (
        projects.map((project) => <ProjectCard project={project} />)
      ) : (
        <div className='flex min-h-67.5 flex-col items-center justify-center gap-4'>
          <img
            src={warningIcon}
            alt='error'
            className='size-14 opacity-90'
          />
          <p className='text-light text-center text-lg'>
            Wystąpił błąd. <br /> Przepraszam za utrudnienia.
          </p>
        </div>
      )}
    </ul>
  );
}
