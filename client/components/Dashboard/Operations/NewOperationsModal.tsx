'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/modal';
import { Button } from '@heroui/button';
import PlusIcon from '@heroicons/react/24/outline/PlusIcon';
import React from 'react';
import { Input } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Form } from '@heroui/form';

const NewOperationsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [password, setPassword] = React.useState('');
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
      <Button
        onPress={onOpen}
        className="bg-orange-400 text-white font-semibold"
      >
        <PlusIcon className="size-5" />
        <span> New project</span>
      </Button>

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
                <h3 className="text-lg font-semibold">Create New Project</h3>
                <p className="text-sm text-default-500">
                  Fill in the details below to create a new project.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full space-y-6"
                  validationErrors={errors}
                  onSubmit={onSubmit}
                  id="new-project-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Project Name */}
                    <Input
                      isRequired
                      label="Project Name"
                      labelPlacement="outside"
                      name="projectTitle"
                      placeholder="Enter project name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Project name is required'
                      }
                    />

                    {/* Client */}
                    <Input
                      isRequired
                      label="Client"
                      labelPlacement="outside"
                      name="client"
                      placeholder="Enter client name"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Client name is required'
                      }
                    />

                    {/* Email */}
                    <Input
                      isRequired
                      type="email"
                      label="Email"
                      labelPlacement="outside"
                      name="email"
                      placeholder="Enter email address"
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing)
                          return 'Email is required';
                        if (validationDetails.typeMismatch)
                          return 'Enter a valid email';
                      }}
                    />

                    {/* Phone Number */}
                    <Input
                      isRequired
                      type="tel"
                      label="Phone Number"
                      labelPlacement="outside"
                      name="phone"
                      placeholder="Enter phone number"
                      pattern="[0-9]{10,11}"
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing)
                          return 'Phone number is required';
                        if (validationDetails.patternMismatch)
                          return 'Enter a valid phone number';
                      }}
                      startContent={
                        <span className="text-default-400 text-sm">+234</span>
                      }
                    />

                    {/* Date Started */}
                    <Input
                      isRequired
                      type="date"
                      label="Date Started"
                      labelPlacement="outside"
                      name="startDate"
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing &&
                        'Start date is required'
                      }
                    />

                    {/* Phase */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Phase"
                        labelPlacement="outside"
                        name="phase"
                        placeholder="Select project phase"
                      >
                        <SelectItem key="Planning">Planning</SelectItem>
                        <SelectItem key="Design">Design</SelectItem>
                        <SelectItem key="Execution">Execution</SelectItem>
                        <SelectItem key="Closure">Closure</SelectItem>
                      </Select>
                    </div>
                    {/* Location */}
                    <div className="w-full">
                      {' '}
                      <Select
                        isRequired
                        label="Location"
                        labelPlacement="outside"
                        name="location"
                        placeholder="Select location"
                      >
                        <SelectItem key="Lagos">Lagos</SelectItem>
                        <SelectItem key="Abuja">Abuja</SelectItem>
                        <SelectItem key="Ikoyi">Ikoyi</SelectItem>
                      </Select>
                    </div>

                    {/* Budget */}
                    <Input
                      isRequired
                      type="number"
                      label="Budget"
                      labelPlacement="outside"
                      name="budget"
                      placeholder="Enter project budget"
                      min={0}
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing && 'Budget is required'
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
                  form="new-project-form" // 🔥 connects to form
                  className="bg-orange-400 text-white font-semibold"
                >
                  Create Project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewOperationsModal;
