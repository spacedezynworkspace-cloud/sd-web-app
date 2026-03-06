'use client';

import React from 'react';
import { ExpenseFundsRequestType } from '@/types';
import {
  addToast,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  User,
} from '@heroui/react';
import { useUpdateExpenseStatusMutation } from '@/lib/services/expense/expenses.api';

interface FinanceRequestDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  expense: ExpenseFundsRequestType | null;
}
const FinanceRequestDetailsModal = (props: FinanceRequestDetailsModalProps) => {
  const [updateExpense, { isLoading }] = useUpdateExpenseStatusMutation();

  const handleUpdateExpense = async (
    status: 'pending' | 'approved' | 'declined'
  ) => {
    try {
      const res = await updateExpense({
        id: props.expense?.id || '',
        status: status,
      }).unwrap();
      addToast({
        title: 'Expense updated',
        description: res.message,
        color: 'success',
      });
    } catch (error) {
      addToast({
        title: 'An error occured',
        description: 'Please try again',
        color: 'danger',
      });
    }
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
                {props.expense && (
                  <div className="w-full">
                    <User
                      description={
                        <div>
                          <h3>{props.expense.name}</h3>
                          <p
                            className={`${props.expense.opened ? '' : 'text-black dark:text-white'}`}
                          >
                            {props.expense.role}
                          </p>
                        </div>
                      }
                      name="Requested Funds"
                      className={`${props.expense.opened ? '' : 'text-black dark:text-white'} `}
                    />
                  </div>
                )}
              </ModalHeader>

              <ModalBody className="space-y-6">
                <div className="grid grid-cols-1 gap-2">
                  {/* <div>{props.expense?.id}</div> */}
                  <div className="text-sm">
                    <span className="font-light">Project name:</span>
                    <span> {props.expense?.requestDetails.projectName}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Amount:</span>
                    <span className="font-bold">
                      {' '}
                      ₦{props.expense?.requestDetails.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Date:</span>
                    <span> {props.expense?.requestDetails.date}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Request Time:</span>
                    <span> {props.expense?.requestDetails.createdAt}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-light">Expense Type:</span>
                    <span className="capitalize">
                      {' '}
                      {props.expense?.requestDetails.purpose}
                    </span>
                  </div>
                </div>

                <Divider />

                <div>
                  <p className="text-sm font-medium text-default-600 mb-2">
                    Comment
                  </p>
                  <div className="bg-default-100 p-4 rounded-xl text-sm text-default-700">
                    {props.expense?.requestDetails.description}
                  </div>
                </div>
                <div className="flex justify-end">
                  <strong>
                    Total : ₦
                    {props.expense?.requestDetails.amount.toLocaleString()}
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
                  Close
                </Button>

                {props.expense?.requestDetails.status === 'pending' && (
                  <Button
                    className="bg-orange-400 text-white font-semibold"
                    onPress={() => {
                      // onApprove(request);
                      handleUpdateExpense('approved');
                      onClose();
                    }}
                  >
                    Approve Expense
                    {isLoading && (
                      <Spinner size="sm" variant="spinner" color="white" />
                    )}
                  </Button>
                )}
                {props.expense?.requestDetails.status === 'approved' && (
                  <Button
                    className="bg-orange-400 text-white font-semibold"
                    onPress={() => {
                      // onApprove(request);
                      handleUpdateExpense('declined');
                      onClose();
                    }}
                  >
                    Decline Expense
                    {isLoading && (
                      <Spinner size="sm" variant="spinner" color="white" />
                    )}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FinanceRequestDetailsModal;
