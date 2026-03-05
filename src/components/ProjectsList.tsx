import warningIcon from '@/assets/icons/warning-white.png';
import { TailSpin } from 'react-loader-spinner';
import ProjectCard from '@/components/ProjectCard.tsx';
import type { ProjectType } from '@/types/project.ts';

type Props = {
  projects: ProjectType[] | null;
  isLoading: boolean;
  error: Error | null;
};

export default function ProjectsList({ projects, isLoading, error }: Props) {
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
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      ) : (
        error && (
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
        )
      )}
    </ul>
  );
}
