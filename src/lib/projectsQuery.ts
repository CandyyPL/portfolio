import { executeQuery } from '@datocms/cda-client/src';
import { projectsQuery } from '@/lib/constants.ts';
import { ApiResponseSchema } from '@/types/project.ts';

export const getProjects = async () => {
  const res = await executeQuery(projectsQuery, {
    token: import.meta.env.VITE_DATOCMS_TOKEN,
  });

  return ApiResponseSchema.parse(res);
};
