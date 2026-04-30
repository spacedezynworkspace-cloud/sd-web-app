'use client';

import React from 'react';
import PlusIcon from '@heroicons/react/24/outline/PlusIcon';
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
  NumberInput,
  Select,
  SelectItem,
  Spinner,
  Textarea,
  useDisclosure,
} from '@heroui/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { useCreateProjectMutation } from '@/lib/services/projects/projects.api';
import { CreateProjectRequest, projectStages } from '@/types/projects.types';
import { useGetAllSupervisorsQuery } from '@/lib/services/supervisor/supervisors.api';
import { IoClose } from 'react-icons/io5';

const CreateProjectForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [errors, setErrors] = React.useState({});

  const [searchSupervisor, setSearchSupervisor] = React.useState('');

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const { data: supervisors } = useGetAllSupervisorsQuery({
    search: searchSupervisor,
  });

  const [stageInput, setStageInput] = React.useState('');
  const [stages, setStages] = React.useState<projectStages[]>([]);

  const addStage = () => {
    console.log('clicked');

    if (!stageInput.trim()) return;
    setStages([...stages, { name: stageInput, completed: false }]);
    setStageInput('');
  };

  const removeStage = (index: number) => {
    setStages(stages.filter((_, i) => i !== index));
  };

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
      assignedTo: form.get('assignedTo') as string, // will be set in backend for now
      // budget: Number(form.get('budget')),
      location: {
        state: form.get('state') as string,
        address: 'Address not included',
      },
      startDate: form.get('startDate') as string,
      endDate: form.get('endDate') as string,
      stages: stages,
      description: form.get('description') as string,
      projectType: form.get('projectType') as string,
    };
    console.log('payload: ', payload);

    try {
      const res = await createProject(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Project created',
        description: res.message,
        color: 'success',
      });

      setStages([]);
      setErrors({});
      onOpenChange();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sm:w-auto w-full flex justify-end">
      <Button
        onPress={onOpen}
        className="bg-[#F19645] text-white font-semibold"
      >
        <PlusIcon className="size-5" />
        <span> New project</span>
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
                        <SelectItem key="smart_home_automation">
                          Smart Home Automation
                        </SelectItem>
                        <SelectItem key="3d_visualization">
                          3D Visualization
                        </SelectItem>
                        <SelectItem key="interior_design">
                          Interior Design
                        </SelectItem>
                      </Select>
                    </div>

                    {/* project type */}
                    <div className="w-full">
                      <Select
                        isRequired
                        label="Project type"
                        labelPlacement="outside"
                        name="projectType"
                        placeholder="Select project type"
                      >
                        <SelectItem key="commercial_design">
                          Commercial Design
                        </SelectItem>
                        <SelectItem key="residential_design">
                          Residential Design
                        </SelectItem>
                      </Select>
                    </div>

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
                        <SelectItem key="abuja">Abuja</SelectItem>
                        <SelectItem key="lagos">Lagos</SelectItem>
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
                      defaultValue={today(getLocalTimeZone())}
                      // minValue={today(getLocalTimeZone())}
                      name="startDate"
                    />
                    {/* Date Started */}
                    <DatePicker
                      isRequired
                      color="warning"
                      errorMessage="Please enter a valid date."
                      className=""
                      label="End date"
                      labelPlacement="outside"
                      defaultValue={today(getLocalTimeZone())}
                      minValue={today(getLocalTimeZone())}
                      name="endDate"
                    />

                    {/* Budget */}
                    {/* <NumberInput
                      hideStepper
                      isRequired
                      type="number"
                      label="Budget"
                      labelPlacement="outside"
                      name="budget"
                      formatOptions={{
                        style: 'currency',
                        currency: 'NGN',
                      }}
                      placeholder="Enter project budget"
                      min={5000000}
                      defaultValue={0}
                      errorMessage={({ validationDetails }) =>
                        validationDetails.valueMissing && 'Budget is required'
                      }
                    /> */}

                    <div className="sm:col-span-2">
                      <Input
                        aria-label="Project stages"
                        type="text"
                        label="Project stages"
                        labelPlacement="outside"
                        name="stages"
                        value={stageInput}
                        placeholder="Enter projects stages"
                        errorMessage="Please provide project stages"
                        endContent={
                          <button
                            className="bg-[#F19645] px-2 py-1 text-white font-semibold text-sm rounded-md"
                            type="button"
                            onClick={addStage}
                          >
                            Add
                          </button>
                        }
                        onValueChange={setStageInput}
                      />
                      <ul className="flex flex-wrap items-center gap-2 mt-3">
                        {stages.map((stage, i) => (
                          <li
                            key={i}
                            className="text-xs flex items-center gap-2 border-1 border-gray-500 rounded-md  justify-center p-1"
                          >
                            <span>{stage.name}</span>
                            <button
                              type="button"
                              onClick={() => removeStage(i)}
                              className="bg-gray-400 rounded-full"
                            >
                              <IoClose className="size-3" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full sm:col-span-2">
                      <Textarea
                        isRequired
                        name="description"
                        labelPlacement="outside"
                        label="Description"
                        errorMessage="Please enter project description"
                        className="w-full"
                      />
                    </div>

                    {/* Assigned to  */}
                    {/* <Select
                      isRequired
                      classNames={{
                        base: 'max-w-xs',
                        // trigger: 'h-12',
                      }}
                      items={supervisors?.data || []}
                      label="Assigned to"
                      name="assignedTo"
                      labelPlacement="outside"
                      placeholder="Select a user"
                      className="text-black"
                    >
                      {(user) => (
                        <SelectItem key={user._id} textValue={user.email}>
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                              <span className="text-small">{user.name}</span>
                              <span className="text-tiny text-black">
                                {user.email}
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      )}
                    </Select> */}
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
                  className="bg-[#F19645] text-white font-semibold"
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

export default CreateProjectForm;
