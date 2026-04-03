import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from '@heroui/react';
import React from 'react';

const StartProjectCTAForm = ({ bgBtn }: { bgBtn: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      {' '}
      <Button
        onPress={onOpen}
        className={`${bgBtn ? 'bg-[#F19645] text-white' : 'bg-transparent text-[#F19645]'} font-semibold`}
      >
        Start project
        <ArrowRightIcon className="size-4" />
      </Button>
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
                <h3 className="text-lg font-semibold">Start project form</h3>
                <p className="text-sm text-default-500">
                  Share your project scope with us.
                </p>
              </ModalHeader>
              <ModalBody>Form</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#F19645] text-white font-semibold"
                >
                  submit
                  <Spinner size="sm" variant="spinner" color="white" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StartProjectCTAForm;
