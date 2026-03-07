'use client';

import useDebounce from '@/hooks/useDebounceHook';
import { useCreatePaymentMutation } from '@/lib/services/payment/payment.api';
import { useGetAllProjectsQuery } from '@/lib/services/projects/projects.api';
import { CreatePaymentRequest } from '@/types/payment.types';
import { Project } from '@/types/projects.types';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  addToast,
  Autocomplete,
  AutocompleteItem,
  Button,
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
  Textarea,
  useDisclosure,
} from '@heroui/react';

import React from 'react';

const PaymentRequestFormModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [errors, setErrors] = React.useState({});
  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebounce(search, 500);
  const [projectId, setSelectedProjectId] = React.useState<string>('');

  const limit = 10;
  const { data, isLoading: isLoadingProjects } = useGetAllProjectsQuery({
    limit: limit,
    search: debouncedSearch,
  });

  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const onSelectionChange = (key: string) => {
    setSelectedProjectId(key);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: CreatePaymentRequest = {
      projectId: projectId,
      amount: Number(form.get('amount')),
      method: form.get('method') as 'cash' | 'bank_transfer' | 'cheque',
      notes: form.get('notes') as string,
    };
    console.log('payload: ', payload);

    try {
      const res = await createPayment(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Payment created',
        description: res.message,
        color: 'success',
      });

      setErrors({});
      onOpenChange();
    } catch (error) {
      addToast({
        title: 'Payment failed',
        description: 'Please try again.',
        color: 'danger',
      });
      console.log(error);
    }
  };

  return (
    <div className="sm:w-auto w-full flex justify-end">
      <div>
        <Button
          onPress={onOpen}
          className="bg-[#F19645] text-white font-semibold"
        >
          <PlusIcon className="size-5 text-white" /> New payment
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
                <h3 className="text-lg font-semibold">
                  New Payment Generation
                </h3>
                <p className="text-sm text-default-500">
                  Project payment installment form.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full space-y-6"
                  validationErrors={errors}
                  onSubmit={onSubmit}
                  id="payment-request-form"
                >
                  <Autocomplete
                    isRequired
                    label="Search Projects"
                    placeholder="Type a project name..."
                    labelPlacement="outside"
                    inputValue={search}
                    onInputChange={setSearch}
                    isLoading={isLoadingProjects}
                    defaultItems={data?.data || []}
                    className="max-w-md"
                    onSelectionChange={(key) =>
                      onSelectionChange(key as string)
                    }
                  >
                    {(project) => (
                      <AutocompleteItem
                        key={project._id}
                        textValue={project.name}
                      >
                        <div className="flex flex-col">
                          <span className="text-small">{project.name}</span>
                          <span className="text-tiny text-default-400">
                            {project.client} - {project.name}
                          </span>
                        </div>
                      </AutocompleteItem>
                    )}
                  </Autocomplete>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Amount Requested */}
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

                    {/* Payment Method */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Payment Method"
                        labelPlacement="outside"
                        name="method"
                        placeholder="Select payment method"
                      >
                        <SelectItem key="bank_transfer">
                          Bank Transfer
                        </SelectItem>
                        <SelectItem key="cash">Cash</SelectItem>
                        <SelectItem key="cheque">Check</SelectItem>
                      </Select>
                    </div>
                  </div>

                  {/* Description Full Width */}
                  <div className="w-full">
                    <Textarea
                      isRequired
                      label="Note / Description"
                      labelPlacement="outside"
                      name="notes"
                      placeholder="Payment description"
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
                  form="payment-request-form" // 🔥 connects to form
                  className="bg-[#F19645] text-white font-semibold"
                >
                  Add payment
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

export default PaymentRequestFormModal;
