import { z } from 'zod';

export const TechSchema = z.object({
  id: z.string(),
  techname: z.string(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  longdescription: z.string(),
  thumbnail: z.object({
    url: z.string(),
  }),
  techlist: z.array(TechSchema),
  _firstPublishedAt: z.coerce.date(),
});

export const ApiResponseSchema = z.object({
  allProjects: z.array(ProjectSchema),
});

export type TechItemType = z.infer<typeof TechSchema>;
export type ProjectType = z.infer<typeof ProjectSchema>;
export type ApiResponseType = z.infer<typeof ApiResponseSchema>;
