'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { Button } from '@heroui/button';
import React from 'react';
import { Input, Textarea } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Form } from '@heroui/form';
import { Divider } from '@heroui/divider';

interface FinanceRequestFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
const FinanceRequestFormModal = (props: FinanceRequestFormModalProps) => {
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
                  id="finance-request-form"
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
                      name="supervisor"
                      placeholder="Enter supervisor name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Supervisor name is required'
                      }
                    />

                    {/* Request Date */}
                    <Input
                      isRequired
                      type="date"
                      label="Request Date"
                      labelPlacement="outside"
                      name="requestDate"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Request date is required'
                      }
                    />

                    {/* Category */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Expense Category"
                        labelPlacement="outside"
                        name="category"
                        placeholder="Select category"
                      >
                        <SelectItem key="Materials">Materials</SelectItem>
                        <SelectItem key="Labor">Labor</SelectItem>
                        <SelectItem key="Logistics">Logistics</SelectItem>
                        <SelectItem key="Equipment">Equipment</SelectItem>
                        <SelectItem key="Emergency">Emergency</SelectItem>
                      </Select>
                    </div>

                    {/* Payment Method */}
                    <div className="w-full">
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
                    </div>

                    {/* Vendor / Payee */}
                    <Input
                      isRequired
                      label="Vendor / Payee Name"
                      labelPlacement="outside"
                      name="vendor"
                      placeholder="Enter vendor or supplier name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Vendor name is required'
                      }
                    />

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
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="finance-request-form" // 🔥 connects to form
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
