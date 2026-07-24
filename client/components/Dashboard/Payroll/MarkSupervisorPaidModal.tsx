'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  addToast,
  Spinner,
} from '@heroui/react';
import { PayrollSupervisor } from '@/types/supervisors.types';
import { IoCash } from 'react-icons/io5';
import { usePaySupervisorSalaryMutation } from '@/lib/services/supervisor/supervisors.api';
import { formatDateAndTime } from '@/utils/dateFormat.utils';

interface MarkSupervisorPaidModalProps {
  selectedSupervisor: PayrollSupervisor;
  onOpenChangeDrawer: () => void;
}
const MarkSupervisorPaidModal = ({
  selectedSupervisor,
  onOpenChangeDrawer,
}: MarkSupervisorPaidModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [paySupervisorSalary, { isLoading }] = usePaySupervisorSalaryMutation();

  const onSubmit = async () => {
    console.log('Submit...');

    try {
      const res = await await paySupervisorSalary({
        supervisorId: selectedSupervisor._id,
        amount: selectedSupervisor.amount,
        method: 'bank_transfer',
        reference: `${selectedSupervisor._id}-${new Date()}`,
        notes: `Salary payment for ${selectedSupervisor.supervisor.email} on ${formatDateAndTime(new Date().toLocaleString())}`,
      }).unwrap();
      console.log(res);

      addToast({
        title: 'Project created',
        description: res.message,
        color: 'success',
      });

      onOpenChange();
      onOpenChangeDrawer();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      {' '}
      <div className="flex justify-end w-full">
        <Button
          startContent={<IoCash className="w-4 h-4" />}
          className="bg-[#F19645] text-white font-semibold"
          onPress={onOpen}
          isDisabled={selectedSupervisor?.salaryPaid}
        >
          {selectedSupervisor?.salaryPaid ? 'Paid' : 'Mark as Paid'}
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">
                  Confirm Supervisor Payment
                </h3>
                <p className="text-sm text-default-500">
                  You are about to record a salary payment for{' '}
                  {selectedSupervisor.supervisor.email}.
                </p>
              </ModalHeader>
              <ModalBody className="text-xs">
                <p>
                  Please verify that the supervisor has received the salary
                  below before continuing.
                </p>
                <p>Confirming this payment will:</p>
                <ul className="list-disc list-inside">
                  <li>Create a payroll record.</li>
                  <li>Reset the supervisor's active working days to 0.</li>
                  <li>Start a new payroll cycle automatically.</li>
                  <li>Send a payment confirmation email to the supervisor.</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  className="bg-[#F19645] text-white font-semibold"
                  onPress={() => onSubmit()}
                >
                  Confirm payment
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

export default MarkSupervisorPaidModal;
