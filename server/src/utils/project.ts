import { projectStages } from '../types/project.types';

export const calculateProgress = (stages: projectStages[]) => {
  const total = stages.length;
  const completed = stages.filter((s) => s.completed).length;

  if (total === 0) return 0;

  return (completed / total) * 100;
};
