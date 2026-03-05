import type { ProjectData } from '@/sections/Projects.tsx';

type Props = {
  project: ProjectData;
};

export default function ProjectCard({ project }: Props) {
  return (
    <li>
      <article className='project-card'>
        <img
          src={project.thumbnailUrl}
          alt='thumbnail'
          className='block w-full rounded-t-md'
        />
        <div className='flex min-h-67.5 flex-col justify-center gap-5 px-4'>
          <h1 className='text-light w-full text-2xl font-medium'>
            {project.title}
          </h1>
          <p className='text-light-dim line-clamp-4 text-lg'>{project.desc}</p>
          <button className='bg-yellow hover:bg-yellow-dim transition-bg text-dark w-full cursor-pointer px-6 py-2 text-lg duration-200'>
            Czytaj więcej
          </button>
        </div>
      </article>
    </li>
  );
}
