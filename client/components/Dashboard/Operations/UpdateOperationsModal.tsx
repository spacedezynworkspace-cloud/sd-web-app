'use client';

import React from 'react';
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
  Select,
  SelectItem,
  Spinner,
} from '@heroui/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { useUpdateProjectMutation } from '@/lib/services/projects/projects.api';
import { UpdateProjectRequest } from '@/types/projects.types';

interface UpdateOperationsModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedProject: {
    id: string;
    status?: number;
    name: string;
    phase?: number;
  } | null;
}
const UpdateOperationsModal = ({
  isOpen,
  onOpenChange,
  selectedProject,
}: UpdateOperationsModalProps) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: UpdateProjectRequest = {
      id: selectedProject?.id || '',
      data: {
        status: Number(form.get('status')),
        phase: Number(form.get('phase')),
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
    <div className="sm:w-auto w-full flex justify-end">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">
                  Update {selectedProject?.name}
                </h3>
                <p className="text-sm text-default-500">
                  Update the project details below.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full space-y-6"
                  // validationErrors={errors}
                  onSubmit={onSubmit}
                  id="new-project-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <Select
                      className="sm:max-w-xs w-full"
                      // placeholder="Select status"
                      name="status"
                      // items={statuses}
                      // selectedKeys={[statusFilter]}
                      // startContent={'Status:'}
                      // onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <SelectItem key={1}>{'In Progress'}</SelectItem>
                      <SelectItem key={3}>{'Inspection'}</SelectItem>
                      <SelectItem key={5}>{'Completed'}</SelectItem>
                    </Select>
                    <Select
                      className="sm:max-w-xs w-full"
                      label="Phase"
                      name="phase"
                    >
                      <SelectItem key={0}>{'Planning'}</SelectItem>
                      <SelectItem key={1}>{'Design'}</SelectItem>
                      <SelectItem key={2}>{'Execution'}</SelectItem>
                      <SelectItem key={3}>{'Closure'}</SelectItem>
                    </Select>

                    {/* Date end */}
                    <DatePicker
                      isRequired
                      color="warning"
                      errorMessage="Please enter a valid date."
                      className=""
                      label="End date"
                      labelPlacement="outside"
                      defaultValue={today(getLocalTimeZone())}
                      minValue={today(getLocalTimeZone())}
                      name="endDate"
                    />
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="new-project-form" // 🔥 connects to form
                  className="bg-orange-400 text-white font-semibold"
                >
                  Update Project
                  {isLoading && (
                    <Spinner size="sm" variant="spinner" color="white" />
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateOperationsModal;
