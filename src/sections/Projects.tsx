import { SECTIONS } from '@/lib/constants.ts';
import githubIcon from '@/assets/icons/github-mark.png';
import { queryOptions, useQuery } from '@tanstack/react-query';
import ProjectsList from '@/components/ProjectsList.tsx';

export type ProjectData = {
  id: string;
  title: string;
  desc: string;
  thumbnailUrl: string;
};

type ApiResponse = {
  data: ProjectData[] | null;
  error?: Error | null;
};

const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Example',
    desc: 'Desc',
    thumbnailUrl: 'https://placehold.co/1280x720',
  },
];

const getProjects = async (fail?: boolean) =>
  new Promise<ApiResponse>((resolve) => {
    setTimeout(() => {
      if (fail) {
        resolve({ error: new Error('Error'), data: null });
      } else {
        resolve({ data: projects });
      }
    }, 3000);
  });

const getProjectsQueryOptions = () =>
  queryOptions({
    queryKey: ['projects'],
    queryFn: () => getProjects(false),
  });

export default function Projects() {
  const { data, isPending } = useQuery(getProjectsQueryOptions());

  const projects = data?.data ?? null;

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
      />
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
