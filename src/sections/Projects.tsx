import { SECTIONS } from '@/lib/constants.ts';
import githubIcon from '@/assets/icons/github-mark.png';
import { useQuery } from '@tanstack/react-query';
import ProjectsList from '@/components/ProjectsList.tsx';
import { getProjectsQueryOptions } from '@/lib/getProjects.ts';
import LinkButton from '@/components/LinkButton.tsx';

export default function Projects() {
  const { data, error, isPending } = useQuery(getProjectsQueryOptions());

  const projects = data ?? null;

  return (
    <section
      id={SECTIONS.PROJECTS}
      className='flex w-full flex-col items-center justify-center gap-10 pt-5'>
      <h1 className='section-heading text-center'>
        A oto kilka moich <span className='text-yellow'>projektów</span>..
      </h1>
      <ProjectsList
        projects={projects}
        isLoading={isPending}
        error={error}
      />
      <LinkButton
        url='https://github.com/CandyyPL'
        buttonStyle='link-button'>
        <img
          src={githubIcon}
          alt='github'
          className='size-8'
        />
        Zobacz więcej
      </LinkButton>
    </section>
  );
}
