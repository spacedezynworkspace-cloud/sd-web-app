'use client';

import { useCreateExpenseMutation } from '@/lib/services/expense/expenses.api';
import { CreateExpenseRequest } from '@/types/expenses.types';
import { PlusIcon } from '@heroicons/react/24/outline';
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
  Textarea,
  useDisclosure,
} from '@heroui/react';

import { getLocalTimeZone, today } from '@internationalized/date';
import React from 'react';

const FinanceRequestFormModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmitted] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const [createExpense, { isLoading }] = useCreateExpenseMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: CreateExpenseRequest = {
      project: form.get('project') as string,
      amount: Number(form.get('amount')),
      type: form.get('type') as
        | 'electrical'
        | 'wood'
        | 'tools'
        | 'material'
        | 'labor'
        | 'logistics',
      requestedDate: form.get('requestedDate') as string,
      requestedBy: form.get('requestedBy') as string,
      description: form.get('description') as string,
    };
    console.log('payload: ', payload);

    try {
      const res = await createExpense(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Expense created',
        description: res.message,
        color: 'success',
      });

      setSubmitted(payload);
      setErrors({});
      onOpenChange();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:w-auto w-full flex justify-end">
      <div>
        <Button
          onPress={onOpen}
          className="bg-orange-400 text-white font-semibold"
        >
          <PlusIcon className="size-5 text-white" /> Fund request
        </Button>
      </div>
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
                <h3 className="text-lg font-semibold">New Funds Request</h3>
                <p className="text-sm text-default-500">
                  Site supervisor fund requisition form.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full space-y-6"
                  validationErrors={errors}
                  onSubmit={onSubmit}
                  id="expense-request-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Project Name */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Project"
                        labelPlacement="outside"
                        name="project"
                        placeholder="Select project"
                      >
                        <SelectItem key="Lagos Mall">Lagos Mall</SelectItem>
                        <SelectItem key="Office Complex">
                          Office Complex
                        </SelectItem>
                        <SelectItem key="Hotel Expansion">
                          Hotel Expansion
                        </SelectItem>
                      </Select>
                    </div>

                    {/* Site Location */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Site Location"
                        labelPlacement="outside"
                        name="location"
                        placeholder="Select location"
                      >
                        <SelectItem key="Lagos">Lagos</SelectItem>
                        <SelectItem key="Abuja">Abuja</SelectItem>
                        <SelectItem key="Ikoyi">Ikoyi</SelectItem>
                      </Select>
                    </div>

                    {/* Supervisor Name */}
                    <Input
                      isRequired
                      label="Supervisor Name"
                      labelPlacement="outside"
                      name="requestedBy"
                      placeholder="Enter supervisor name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Supervisor name is required'
                      }
                    />

                    {/* Request Date */}
                    <DatePicker
                      isRequired
                      color="warning"
                      errorMessage="Please enter a valid date."
                      className=""
                      label="Requested date"
                      labelPlacement="outside"
                      defaultValue={today(getLocalTimeZone())}
                      minValue={today(getLocalTimeZone())}
                      name="requestedDate"
                    />

                    {/* Category */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Expense type"
                        labelPlacement="outside"
                        name="type"
                        placeholder="Select type"
                      >
                        <SelectItem key="material">Materials</SelectItem>
                        <SelectItem key="labor">Labor</SelectItem>
                        <SelectItem key="logistics">Logistics</SelectItem>
                        <SelectItem key="electrical">Electrical</SelectItem>
                        <SelectItem key="tools">Tools</SelectItem>
                        <SelectItem key="wood">Wood</SelectItem>
                      </Select>
                    </div>

                    {/* Payment Method */}
                    {/* <div className="w-full">
                      <Select
                        isRequired
                        label="Payment Method"
                        labelPlacement="outside"
                        name="paymentMethod"
                        placeholder="Select payment method"
                      >
                        <SelectItem key="Bank Transfer">
                          Bank Transfer
                        </SelectItem>
                        <SelectItem key="Cash">Cash</SelectItem>
                        <SelectItem key="POS">POS</SelectItem>
                      </Select>
                    </div> */}

                    {/* Vendor / Payee */}
                    {/* <Input
                      isRequired
                      label="Vendor / Payee Name"
                      labelPlacement="outside"
                      name="vendor"
                      placeholder="Enter vendor or supplier name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Vendor name is required'
                      }
                    /> */}

                    {/* Amount Requested */}
                    <Input
                      isRequired
                      type="number"
                      label="Amount Requested"
                      labelPlacement="outside"
                      name="amount"
                      placeholder="Enter amount"
                      min={0}
                      startContent={<span className="text-default-400">₦</span>}
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing && 'Amount is required'
                      }
                    />
                  </div>
                  {/* Urgency */}
                  <div className="w-full">
                    {' '}
                    <Select
                      isRequired
                      label="Urgency Level"
                      labelPlacement="outside"
                      name="urgency"
                      placeholder="Select urgency"
                    >
                      <SelectItem key="Low">Low</SelectItem>
                      <SelectItem key="Medium">Medium</SelectItem>
                      <SelectItem key="High">High</SelectItem>
                    </Select>
                  </div>
                  {/* Description Full Width */}
                  <div className="w-full">
                    <Textarea
                      isRequired
                      label="Purpose / Description"
                      labelPlacement="outside"
                      name="description"
                      placeholder="Explain why this fund is needed..."
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Description is required'
                      }
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
                  form="expense-request-form" // 🔥 connects to form
                  className="bg-orange-400 text-white font-semibold"
                >
                  Submit Funds Request
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FinanceRequestFormModal;
