import type { ProjectType } from '@/types/project.ts';
import { ICONS } from '@/lib/icons.ts';
import Markdown from 'react-markdown';
import githubIcon from '@/assets/icons/github-mark.png';
import linkIcon from '@/assets/icons/link.svg';
import LinkButton from '@/components/LinkButton.tsx';

type Props = {
  project: ProjectType;
};

export default function SingleProject({ project }: Props) {
  return (
    <article className='flex h-full w-full max-w-250 flex-col items-center gap-8'>
      <div className='flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row'>
        <h1 className='text-light w-full text-left text-3xl font-medium'>
          {project.name}
        </h1>
        <div className='flex w-full justify-start md:justify-end'>
          <LinkButton
            url='/'
            buttonStyle='link-button'
            blank={true}>
            Powrót
          </LinkButton>
        </div>
      </div>
      <div className='w-full max-w-250'>
        <img
          src={project.thumbnail.url}
          alt='thumbnail'
          className='w-full rounded-md'
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-4 md:flex-row-reverse md:items-start'>
        <div className='flex w-full max-w-250 flex-col items-center gap-8 md:max-w-50'>
          <h2 className='text-light text-2xl font-medium'>
            Użyte <span className='text-yellow'>technologie</span>
          </h2>
          <ul className='flex w-full flex-row items-center justify-center gap-12 md:flex-col md:gap-8'>
            {project.techlist.map((tech) => {
              const icon = ICONS.find((icon) => icon.name === tech.techname);

              return (
                <li
                  key={tech.id}
                  className='flex flex-col items-center justify-start gap-4 md:gap-2'>
                  <img
                    src={icon?.icon}
                    alt='tech-icon'
                    className='size-12'
                  />
                  <p className='text-light text-lg'>{icon?.displayName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='bg-background-light text-light project-desc-prose w-full rounded-md p-4'>
          <Markdown>{project.longdescription}</Markdown>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <LinkButton
          url={project.repo.url}
          buttonStyle='link-button'
          blank={true}>
          <img
            src={githubIcon}
            alt='github'
            className='size-8'
          />
          Repozytorium
        </LinkButton>
        <LinkButton
          url={project.link.url}
          buttonStyle='link-button'
          blank={true}>
          <img
            src={linkIcon}
            alt='github'
            className='size-8'
          />
          Odwiedź
        </LinkButton>
      </div>
    </article>
  );
}
