import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getProjectsQueryOptions } from '@/lib/getProjects.ts';

export default function SingleProject() {
  const { slug } = useParams();

  const { data, error, isPending } = useQuery(getProjectsQueryOptions());

  const project = data?.find((project) => project.projectslug === slug) ?? null;

  return <article></article>;
}
