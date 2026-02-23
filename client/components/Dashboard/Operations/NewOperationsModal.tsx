'use client';

import React from 'react';
import PlusIcon from '@heroicons/react/24/outline/PlusIcon';
import {
  addToast,
  alert,
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
  Spinner,
  useDisclosure,
} from '@heroui/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { useCreateProjectMutation } from '@/lib/services/projects/projects.api';
import { CreateProjectRequest } from '@/types/projects.types';
const NewOperationsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [password, setPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload: CreateProjectRequest = {
      name: form.get('name') as string,
      client: form.get('client') as string,
      email: form.get('email') as string,
      phoneNum: form.get('phoneNum') as string,
      serviceType: form.get('serviceType') as string,
      budget: Number(form.get('budget')),
      location: {
        state: form.get('state') as string,
        address: 'Address not included',
      },
      startDate: form.get('startDate') as string,
    };
    console.log('payload: ', payload);

    try {
      const res = await createProject(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Project creation',
        description: res.message,
        color: 'success',
      });

      setSubmitted(payload);
      setErrors({});
      onOpenChange();
    } catch (error) {
      console.error(error);
    }
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
                      name="name"
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
                      name="phoneNum"
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

                    {/* Service type */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Service type"
                        labelPlacement="outside"
                        name="serviceType"
                        placeholder="Select service type"
                      >
                        <SelectItem key="architech">Architech</SelectItem>
                        <SelectItem key="rennovation">Rennovation</SelectItem>
                        <SelectItem key="3d_visualization">
                          3D Visualization
                        </SelectItem>
                        <SelectItem key="interior_design">
                          Interior Dsign
                        </SelectItem>
                      </Select>
                    </div>
                    {/* Phase */}
                    {/* <div className="w-full">
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
                    </div> */}
                    {/* Location */}
                    <div className="w-full">
                      {' '}
                      <Select
                        isRequired
                        label="State"
                        labelPlacement="outside"
                        name="state"
                        placeholder="Select state"
                      >
                        <SelectItem key="Abuja">Abuja</SelectItem>
                        <SelectItem key="Lagos">Lagos</SelectItem>
                        {/* <SelectItem key="Ikoyi">Ikoyi</SelectItem> */}
                      </Select>
                    </div>

                    {/* Date Started */}
                    <DatePicker
                      isRequired
                      color="warning"
                      errorMessage="Please enter a valid date."
                      className=""
                      label="Start date"
                      labelPlacement="outside"
                      defaultValue={today(getLocalTimeZone()).subtract({
                        days: 1,
                      })}
                      minValue={today(getLocalTimeZone())}
                      name="startDate"
                    />

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

export default NewOperationsModal;
