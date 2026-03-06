'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import {
  addToast,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NumberInput,
  Select,
  SelectItem,
  Spinner,
} from '@heroui/react';
import { getLocalTimeZone, today, parseDate } from '@internationalized/date';
import { useUpdateProjectMutation } from '@/lib/services/projects/projects.api';
import { UpdateProjectRequest } from '@/types/projects.types';

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
    status: number;
    name: string;
    phase: string;
    endDate: string;
  };
}

const UpdateProjectForm = ({
  setIsLoading,
  onOpenChange,
  selectedProject,
}: UpdateProjectFormProps) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  const [phase, setPhase] = useState<string>(selectedProject.phase);
  const [status, setStatus] = useState<number>(selectedProject?.status);
  // const [endDate, setEndDate] = useState<string>(
  //   selectedProject?.endDate || ''
  // );

  console.log(selectedProject);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: UpdateProjectRequest = {
      id: selectedProject?.id || '',
      data: {
        status: Number(form.get('status')),
        phase: form.get('phase') as string,
        // endDate: form.get('endDate') as string,
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
  return (
    <Form
      className="w-full space-y-6"
      // validationErrors={errors}
      onSubmit={onSubmit}
      id="update-project-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <NumberInput
          hideStepper
          name="status"
          type="number"
          label="Status"
          labelPlacement="outside"
          value={status}
          onValueChange={setStatus}
          // description="100 represents the project is completed."
        />
        <Select
          className="sm:max-w-xs w-full"
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

        {/* Date end */}
        {/* <DatePicker
                      color="warning"
                      errorMessage="Please enter a valid date."
                      className=""
                      label="End date"
                      labelPlacement="outside"
                      defaultValue={endDate ? parseDate(endDate) : undefined}
                      minValue={today(getLocalTimeZone())}
                      name="endDate"
                      onChange={handleEndDateChange}
                    /> */}
      </div>
    </Form>
  );
};

export default UpdateProjectForm;
