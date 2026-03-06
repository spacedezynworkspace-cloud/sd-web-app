'use client';
import React, { useEffect } from 'react';

import { useCreateExpenseMutation } from '@/lib/services/expense/expenses.api';
import { CreateExpenseRequest } from '@/types/expenses.types';
import {
  addToast,
  DatePicker,
  Form,
  Input,
  NumberInput,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';

import { getLocalTimeZone, today } from '@internationalized/date';

interface CreateExpenseFormProps {
  setIsLoading: (value: boolean) => void;
  onOpenChange: () => void;
  projectDetails: {
    name: string;
    id: string;
    assignedTo: string;
  };
}

const CreateExpenseForm = ({
  setIsLoading,
  onOpenChange,
  projectDetails,
}: CreateExpenseFormProps) => {
  const [errors, setErrors] = React.useState({});
  console.log(projectDetails);

  const [createExpense, { isLoading }] = useCreateExpenseMutation();
  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: CreateExpenseRequest = {
      project: projectDetails.id,
      amount: Number(form.get('amount')),
      type: form.get('type') as
        | 'electrical'
        | 'wood'
        | 'tools'
        | 'material'
        | 'labor'
        | 'logistics',
      requestedDate: form.get('requestedDate') as string,
      urgencyLevel: form.get('urgencyLevel') as 'low' | 'medium' | 'high',
      // requestedBy: form.get('requestedBy') as string,
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

      setErrors({});
      onOpenChange();
    } catch (error) {
      console.log(error);

      addToast({
        title: 'Expense failed',
        description: 'Please try again.',
        color: 'danger',
      });
    }
  };

  return (
    //   <Modal
    //     isOpen={isOpen}
    //     onOpenChange={onOpenChange}
    //     placement="center"
    //     scrollBehavior="inside"
    //   >
    //     <ModalContent>
    //       {(onClose) => (
    //         <>
    //           <ModalHeader className="flex flex-col gap-1">
    //             <h3 className="text-lg font-semibold">New Expense Request</h3>
    //             <p className="text-sm text-default-500">
    //               Site supervisor fund requisition form.
    //             </p>
    //           </ModalHeader>
    //           <ModalBody>
    <Form
      className="w-full space-y-6"
      validationErrors={errors}
      onSubmit={onSubmit}
      id="create-expense-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Project Name */}

        <Input
          isReadOnly
          type="text"
          label="Project Name"
          labelPlacement="outside"
          name="projectName"
          min={0}
          defaultValue={projectDetails.name}
        />
        {/* Supervisor Name */}
        <Input
          // isRequired
          readOnly
          type="text"
          label="Supervisor Name"
          labelPlacement="outside"
          name="requestedBy"
          defaultValue={projectDetails.assignedTo}
          placeholder="Enter supervisor name"
        />

        {/* Category */}
        <div className="flex items-center justify-between gap-5">
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
        <div>
          <Select
            isRequired
            label="Urgency Level"
            labelPlacement="outside"
            name="urgencyLevel"
            placeholder="Select urgency"
          >
            <SelectItem key="low">Low</SelectItem>
            <SelectItem key="medium">Medium</SelectItem>
            <SelectItem key="high">High</SelectItem>
          </Select>
        </div>

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

        {/* code  */}
        <Input
          isRequired
          type="text"
          label="Code"
          labelPlacement="outside"
          name="code"
          placeholder="Enter code"
          min={0}
          // startContent={<span className="text-default-400">₦</span>}
          errorMessage={({ validationDetails }) =>
            validationDetails.valueMissing && 'Code is required'
          }
        />
      </div>
      {/* Urgency */}
      <div className="w-full">
        <NumberInput
          hideStepper
          isRequired
          type="number"
          label="Amount Requested"
          labelPlacement="outside"
          name="amount"
          placeholder="Enter amount"
          formatOptions={{
            style: 'currency',
            currency: 'NGN',
          }}
          // min={5000000}
          // defaultValue={0}
          errorMessage={({ validationDetails }) =>
            validationDetails.valueMissing && 'Amount is required'
          }
        />
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
            validationDetails.valueMissing && 'Description is required'
          }
        />
      </div>
    </Form>
    /* </ModalBody>
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
                  {isLoading && (
                    <Spinner size="sm" variant="spinner" color="white" />
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */
  );
};

export default CreateExpenseForm;
