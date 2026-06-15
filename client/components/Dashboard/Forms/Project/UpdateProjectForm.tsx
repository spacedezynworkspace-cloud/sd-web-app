'use client';

import React, { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import {
  addToast,
  Checkbox,
  CheckboxGroup,
  Form,
  Select,
  SelectItem,
} from '@heroui/react';
import { useUpdateProjectMutation } from '@/lib/services/projects/projects.api';
import { projectStages, UpdateProjectRequest } from '@/types/projects.types';
import SortableStage from './SortableStage';

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
  const [stageInput, setStageInput] = React.useState('');

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = stages.findIndex((stage) => stage.name === active.id);

    const newIndex = stages.findIndex((stage) => stage.name === over.id);

    setStages((items) => arrayMove(items, oldIndex, newIndex));
  };
  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <Form
      className="w-full space-y-6 flex flex-col"
      // validationErrors={errors}
      onSubmit={onSubmit}
      id="update-project-form"
    >
      <div className="grid grid-cols-1  gap-6 w-full">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={stages.map((stage) => stage.name)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {stages.map((stage) => (
                <SortableStage
                  key={stage.name}
                  stage={stage}
                  onToggle={(stageName, checked) => {
                    setStages((prev) =>
                      prev.map((s) =>
                        s.name === stageName
                          ? {
                              ...s,
                              completed: checked,
                            }
                          : s
                      )
                    );
                  }}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        {/* Phase  */}
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
        {/* Status  */}{' '}
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
          <SelectItem key="completed">Completed</SelectItem>
        </Select>
      </div>
    </Form>
  );
};

export default UpdateProjectForm;
