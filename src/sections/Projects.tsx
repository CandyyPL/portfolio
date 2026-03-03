import { SECTIONS } from '@/lib/constants.ts';
import ProjectCard from '@/components/ProjectCard.tsx';
import githubIcon from '@/assets/icons/github-mark.png';

export default function Projects() {
  return (
    <section
      id={SECTIONS.PROJECTS}
      className='flex w-full flex-col items-center gap-4 md:gap-12'>
      <h1 className='section-heading text-center'>
        A oto kilka moich <span className='text-yellow'>projektów</span>..
      </h1>
      <ul className='flex flex-col items-center gap-8 md:w-full md:flex-row md:flex-wrap md:justify-center'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
      <button className='bg-yellow text-dark hover:bg-yellow-dim transition-bg px-4 py-2 text-xl duration-200'>
        <a
          href='https://github.com/CandyyPL'
          target='_blank'
          className='flex items-center justify-center gap-4'>
          <img
            src={githubIcon}
            alt='github'
            className='size-8'
          />
          Zobacz więcej
        </a>
      </button>
    </section>
  );
}
