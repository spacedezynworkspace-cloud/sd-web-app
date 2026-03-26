import { projectStages } from '@/types/projects.types';

export const PHASE_LABELS: Record<0 | 1 | 2 | 3, string> = {
  0: 'Planning',
  1: 'Design',
  2: 'Execution',
  3: 'Closure',
};

export const getPhaseLabel = (phase: 0 | 1 | 2 | 3) => PHASE_LABELS[phase];

export const STATUS_LABELS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: 'Initiated',
  2: 'On Hold',
  3: 'In Progress',
  4: 'Completed',
  5: 'Cancelled',
};

export const getStatusLabel = (status: 1 | 2 | 3 | 4 | 5) =>
  STATUS_LABELS[status];

export const calculateProgress = (stages: projectStages[]) => {
  const total = stages.length;
  const completed = stages.filter((s) => s.completed).length;

  if (total === 0) return 0;

  return (completed / total) * 100;
};
