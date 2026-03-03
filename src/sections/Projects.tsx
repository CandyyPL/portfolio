import { SECTIONS } from '@/lib/constants.ts';
import ProjectCard from '@/components/ProjectCard.tsx';

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
    </section>
  );
}
