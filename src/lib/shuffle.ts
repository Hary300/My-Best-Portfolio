import type { Project } from '@/types/projects';

export const shuffle = (arrayProjects: Project[]) => {
  return [...arrayProjects].sort(() => Math.random() - 0.5);
};
