import { executeQuery } from '@datocms/cda-client/src';
import { projectsQuery } from '@/lib/constants.ts';
import { queryOptions } from '@tanstack/react-query';
import { ApiResponseSchema } from '@/types/project.ts';

export const getProjectsQueryOptions = () =>
  queryOptions({
    queryKey: ['projects'],
    queryFn: async () => {
      const rawData = await getProjects();
      const validated = ApiResponseSchema.parse(rawData);

      return validated.allProjects.sort(
        (a, b) => a._firstPublishedAt.getTime() - b._firstPublishedAt.getTime()
      );
    },
  });

export const getProjects = async () => {
  return await executeQuery(projectsQuery, {
    token: import.meta.env.VITE_DATOCMS_TOKEN,
  });
};
