import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from '@heroui/react';
import CreateExpenseForm from './Expense/CreateExpenseForm';
import UpdateProjectForm from './Project/UpdateProjectForm';
import { projectStages } from '@/types/projects.types';

interface ProjectFormModalProps {
  formSelected: 'update' | 'expense';
  isOpen: boolean;
  onOpenChange: () => void;
  selectedProject: {
    id: string;
    status: 'on_hold' | 'in_progress' | 'completed';

    name: string;
    phase: string;
    endDate: string;
    assignedTo: string;
    stages: projectStages[];
  };
}
const ProjectFormModal = ({
  formSelected,
  isOpen,
  onOpenChange,
  selectedProject,
}: ProjectFormModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      scrollBehavior="inside"
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {formSelected === 'update' ? 'Update' : 'Add expense for'}{' '}
                {selectedProject?.name}
              </h3>
              <p className="text-sm text-default-500">
                {formSelected === 'update'
                  ? 'Update the project details below.'
                  : 'Create Expense for this project.'}
              </p>
            </ModalHeader>
            <ModalBody>
              {formSelected === 'update' ? (
                <UpdateProjectForm
                  onOpenChange={onOpenChange}
                  selectedProject={selectedProject}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <CreateExpenseForm
                  onOpenChange={onOpenChange}
                  projectDetails={{
                    name: selectedProject.name,
                    id: selectedProject.id,
                    assignedTo: selectedProject.assignedTo,
                  }}
                  setIsLoading={setIsLoading}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                form={
                  formSelected === 'update'
                    ? 'update-project-form'
                    : 'create-expense-form'
                } // 🔥 connects to form
                className="bg-[#F19645] text-white font-semibold"
              >
                {formSelected === 'update'
                  ? 'Update Project'
                  : 'Submit Expense '}
                {isLoading && (
                  <Spinner size="sm" variant="spinner" color="white" />
                )}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectFormModal;
