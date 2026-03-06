import type { ProjectType } from '@/types/project.ts';
import LinkButton from '@/components/LinkButton.tsx';

type Props = {
  project: ProjectType;
};

export default function ProjectCard({ project }: Props) {
  return (
    <li>
      <article className='project-card'>
        <img
          src={project.thumbnail.url}
          alt='thumbnail'
          className='block w-full rounded-t-md'
        />
        <div className='flex min-h-67.5 flex-col justify-between gap-4 p-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-light w-full text-2xl font-medium'>
              {project.name}
            </h1>
            <p className='text-light-dim line-clamp-4 text-lg'>
              {project.description}
            </p>
          </div>
          <LinkButton
            url={`/project/${project.slug}`}
            buttonStyle='link-button w-full'>
            Czytaj więcej
          </LinkButton>
        </div>
      </article>
    </li>
  );
}
