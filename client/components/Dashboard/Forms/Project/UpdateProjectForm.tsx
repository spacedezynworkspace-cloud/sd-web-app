'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import {
  addToast,
  Checkbox,
  CheckboxGroup,
  Form,
  NumberInput,
  Select,
  SelectItem,
  Spinner,
} from '@heroui/react';
import { getLocalTimeZone, today, parseDate } from '@internationalized/date';
import { useUpdateProjectMutation } from '@/lib/services/projects/projects.api';
import { projectStages, UpdateProjectRequest } from '@/types/projects.types';

const PHASES = [
  { key: 'planning', label: 'Planning' },
  { key: 'design', label: 'Design' },
  { key: 'inspection', label: 'Inspection' },
  { key: 'execution', label: 'Execution' },
  { key: 'closure', label: 'Closure' },
];

interface UpdateProjectFormProps {
  onOpenChange: () => void;
  setIsLoading: (value: boolean) => void;
  selectedProject: {
    id: string;
    status: 'on_hold' | 'in_progress' | 'completed';

    name: string;
    phase: string;
    endDate: string;
    stages: projectStages[];
  };
}

const UpdateProjectForm = ({
  setIsLoading,
  onOpenChange,
  selectedProject,
}: UpdateProjectFormProps) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  const [phase, setPhase] = useState<string>(selectedProject.phase);
  const [status, setStatus] = useState<string>(selectedProject?.status);
  const [stages, setStages] = useState<projectStages[]>(selectedProject.stages);

  const selectedStageNames = stages
    .filter((stage) => stage.completed)
    .map((stage) => stage.name);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: UpdateProjectRequest = {
      id: selectedProject?.id || '',
      data: {
        status: status,
        phase: form.get('phase') as string,
        stages: stages,
      },
    };
    console.log('payload: ', payload);

    try {
      const res = await updateProject(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Project updated',
        description: res.message,
        color: 'success',
      });

      onOpenChange();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <Form
      className="w-full space-y-6"
      // validationErrors={errors}
      onSubmit={onSubmit}
      id="update-project-form"
    >
      <div className="grid grid-cols-1  gap-6 w-full">
        <CheckboxGroup
          label="Stages"
          color="warning"
          value={selectedStageNames}
          onValueChange={(selectedKeys) => {
            const updatedStages = stages.map((stage) => ({
              ...stage,
              completed: selectedKeys.includes(stage.name),
            }));

            setStages(updatedStages);
          }}
        >
          {stages.map((stage, i) => (
            <Checkbox key={i} value={stage.name}>
              {stage.name}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <Select
          className=" w-full"
          label="Phase"
          name="phase"
          labelPlacement="outside"
          selectedKeys={[phase]}
          onChange={(e) => setPhase(e.target.value)}
          // description="Select the current phase of the project."
        >
          {PHASES.map((phase) => (
            <SelectItem key={phase.key}>{phase.label}</SelectItem>
          ))}
        </Select>
        <Select
          label="Status"
          labelPlacement="outside"
          name="status"
          placeholder="Select project status"
          selectedKeys={[status]}
          onChange={(e) => setStatus(e.target.value)}
        >
          <SelectItem key="on_hold">On Hold</SelectItem>
          <SelectItem key="in_progress">In progress</SelectItem>
        </Select>
      </div>
    </Form>
  );
};

export default UpdateProjectForm;
