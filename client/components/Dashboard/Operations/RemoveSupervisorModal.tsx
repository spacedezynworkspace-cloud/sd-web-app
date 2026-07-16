import React from 'react';
import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from '@heroui/react';
import { useRemoveSupervisorMutation } from '@/lib/services/supervisor/supervisors.api';

interface RemoveSupervisorModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedSupervisor: {
    id: string;
    email: string;
  };
  projectId: string;
}
const RemoveSupervisorModal = ({
  isOpen,
  onOpenChange,
  selectedSupervisor,
  projectId,
}: RemoveSupervisorModalProps) => {
  const [removeSupervisor, { isLoading: removeSupervisorLoading }] =
    useRemoveSupervisorMutation();

  const handleRemoveSupervisor = async () => {
    if (selectedSupervisor.id === '') {
      return;
    }
    const payload: {
      id: string;
      data: { supervisorId: string };
    } = {
      id: projectId || '',
      data: { supervisorId: (selectedSupervisor.id as string) || '' },
    };

    try {
      const res = await removeSupervisor(payload).unwrap();

      addToast({
        title: 'Project updated',
        description: res.message,
        color: 'success',
      });
      onOpenChange();
    } catch (error) {
      addToast({
        title: 'Project updated failed',
        description: `${error}`,
        color: 'danger',
      });
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      scrollBehavior="inside"
      isDismissable={false}
      aria-hidden
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col">
              <h3 className="text-lg font-semibold">Unassign supevisor</h3>
              <p className="text-sm text-default-500">
                Remove supervisor from current project
              </p>
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to remove{' '}
                <strong>{selectedSupervisor.email}</strong> from this project?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                onPress={handleRemoveSupervisor}
                className="bg-[#F19645] flex items-center gap-1 text-white font-semibold"
              >
                <p>Remove</p>
                {removeSupervisorLoading && (
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

export default RemoveSupervisorModal;
