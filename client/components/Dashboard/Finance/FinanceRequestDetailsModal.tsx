'use client';

import React from 'react';
import { SupervisorFundsRequestType } from '@/types';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  User,
} from '@heroui/react';

interface FinanceRequestDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  supervisor: SupervisorFundsRequestType | null;
}
const FinanceRequestDetailsModal = (props: FinanceRequestDetailsModalProps) => {
  const [submitted, setSubmitted] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Record<string, string>;

    const newErrors: Record<string, string> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(formData);

    console.log('Project created:', formData);
  };

  return (
    <div className="sm:w-auto w-full flex justify-end">
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.supervisor && (
                  <div className="w-full">
                    <User
                      avatarProps={{
                        src: props.supervisor.avatar,
                      }}
                      description={
                        <div>
                          <h3>{props.supervisor.name}</h3>
                          <p
                            className={`${props.supervisor.opened ? '' : 'text-black dark:text-white'}`}
                          >
                            {props.supervisor.role}
                          </p>
                        </div>
                      }
                      name="Requested Funds"
                      className={`${props.supervisor.opened ? '' : 'text-black dark:text-white'} `}
                    />
                  </div>
                )}
              </ModalHeader>

              <ModalBody className="space-y-6">
                <div className="grid grid-cols-1 gap-2">
                  <div className="text-sm">
                    <span className="font-light">Project name:</span>
                    <span> {props.supervisor?.requestDetails.projectName}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Amount:</span>
                    <span> {props.supervisor?.requestDetails.amount}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Date:</span>
                    <span> {props.supervisor?.requestDetails.date}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Request Time:</span>
                    <span> 02:34PM</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Purpose:</span>
                    <span> {props.supervisor?.requestDetails.purpose}</span>
                  </div>
                </div>

                <Divider />

                <div>
                  <p className="text-sm font-medium text-default-600 mb-2">
                    Comment
                  </p>
                  <div className="bg-default-100 p-4 rounded-xl text-sm text-default-700">
                    {props.supervisor?.requestDetails.description}
                  </div>
                </div>
                <div className="flex justify-end">
                  <strong>
                    Total : {props.supervisor?.requestDetails.amount}
                  </strong>
                </div>
              </ModalBody>

              <ModalFooter>
                {/* <Button variant="light" onPress={onClose}>
                  Close
                </Button> */}

                <Button
                  color="danger"
                  variant="flat"
                  onPress={() => {
                    // onDecline(request);
                    onClose();
                  }}
                >
                  Decline
                </Button>

                <Button
                  className="bg-orange-400 text-white font-semibold"
                  onPress={() => {
                    // onApprove(request);
                    onClose();
                  }}
                >
                  Approve
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FinanceRequestDetailsModal;
