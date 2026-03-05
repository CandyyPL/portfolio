import { executeQuery } from '@datocms/cda-client/src';
import { projectsQuery } from '@/lib/constants.ts';

export const getProjects = async () => {
  return await executeQuery(projectsQuery, {
    token: import.meta.env.VITE_DATOCMS_TOKEN,
  });
};
