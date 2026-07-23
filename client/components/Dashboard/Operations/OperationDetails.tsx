import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from '@/lib/services/projects/projects.api';
import {
  ArrowLeftIcon,
  CheckBadgeIcon,
  ClockIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Key, useEffect } from 'react';
import DashboardHeader from '../DashboardHeader';
import { useSession } from 'next-auth/react';
import { formatDate, formatDateAndTime } from '@/utils/dateFormat.utils';
import {
  addToast,
  Autocomplete,
  AutocompleteItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Spinner,
  Tooltip,
  useDisclosure,
} from '@heroui/react';
import { projectStages, UpdateProjectRequest } from '@/types/projects.types';
import { IoClose } from 'react-icons/io5';
import {
  useAssignSupervisorMutation,
  useGetAllSupervisorsQuery,
} from '@/lib/services/supervisor/supervisors.api';
import RemoveSupervisorModal from './RemoveSupervisorModal';

const OperationDetails = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useGetProjectByIdQuery({ id: projectId });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  const [stageInput, setStageInput] = React.useState('');
  const [stages, setStages] = React.useState<projectStages[]>(
    data?.data.stages || []
  );

  const [updateProject, { isLoading: projectUpdateLoading }] =
    useUpdateProjectMutation();

  const [assignSupervisor, { isLoading: assignSupervisorLoading }] =
    useAssignSupervisorMutation();

  const [search, setSearch] = React.useState('');
  const [selectedSupervisor, setSelectedSupervisor] = React.useState('');
  const [removeSelectedSupervisor, setRemoveSelectedSupervisor] =
    React.useState<{
      id: string;
      email: string;
    }>();

  const handlGetSupervisorDetails = (key: React.Key | null) => {
    return supervisorsData?.data.find((s) => s._id === String(key));
  };

  const onSelectedSupervisorChange = (key: React.Key | null) => {
    if (!key) {
      setSelectedSupervisor('');
      return;
    }

    setSelectedSupervisor(String(key));

    const supervisor = handlGetSupervisorDetails(key);

    if (supervisor) {
      setSearch(supervisor.email);
    }
  };

  const onSupervisorInputChange = (value: string) => {
    setSearch(value);
  };

  const { data: supervisorsData, isLoading: isSupervisorsLoading } =
    useGetAllSupervisorsQuery({ isActive: false });

  const addStage = () => {
    console.log('clicked');

    if (!stageInput.trim()) return;
    setStages([...stages, { name: stageInput, completed: false }]);
    setStageInput('');
  };

  const removeStage = (index: number) => {
    setStages(stages.filter((_, i) => i !== index));
  };

  const onSubmit = async () => {
    console.log('Submit...');

    const payload: UpdateProjectRequest = {
      id: projectId || '',
      data: {
        stages: stages,
      },
    };

    try {
      const res = await updateProject(payload).unwrap();
      console.log(res);

      addToast({
        title: 'Project updated',
        description: res.message,
        color: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignSupervisor = async () => {
    if (selectedSupervisor === '') {
      return;
    }
    const payload: {
      id: string;
      data: { supervisorId: string };
    } = {
      id: projectId || '',
      data: { supervisorId: (selectedSupervisor as string) || '' },
    };

    try {
      const res = await assignSupervisor(payload).unwrap();

      addToast({
        title: 'Project updated',
        description: res.message,
        color: 'success',
      });
      setSelectedSupervisor('');
      setSearch('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data?.data.stages && !isLoading) {
      setStages([...data?.data.stages]);
    }
  }, [data]);

  return (
    <section className="flex flex-col gap-5">
      {(session?.user.role === 'supervisor' ||
        session?.user.role === 'admin') && (
        <Link
          href={'/dashboard/operations'}
          className="flex items-center gap-1 text-sm"
        >
          <ArrowLeftIcon className="size-5 text-[#F19645]" />
          <span> Back to opertations table</span>
        </Link>
      )}
      <div className="bg-white border-b-[#F19645] border-b-1 dark:bg-transparent  shadow rounded-lg p-4">
        <DashboardHeader
          title={`${isLoading ? 'Loading...' : data?.data.name}`}
          description={`Here you can see all milestones of your project `}
        />
      </div>
      <div className="grid gap-4">
        {isLoading ? (
          <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4">
            Loading project details...
          </div>
        ) : (
          <div className="flex sm:flex-row flex-col-reverse gap-4 w-full">
            <div className="flex flex-col gap-4 sm:w-1/2">
              <div className="rounded-lg bg-white w-full dark:bg-gray-800 shadow p-4">
                <h2 className="text-lg font-semibold mb-3">Project overview</h2>
                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Client
                    </p>
                    <p className="font-medium">{data?.data.client ?? 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Status
                    </p>
                    <p className="font-medium capitalize">
                      {data?.data.status === 'in_progress' ? (
                        <span className="bg-green-200 text-green-500 rounded-3xl px-2 py-0.5 text-xs">
                          In progress
                        </span>
                      ) : (
                        <span>On Hold</span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Project code
                    </p>
                    <p className="font-medium">{projectId}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white w-full dark:bg-gray-800 shadow p-4">
                <h2 className="text-lg font-semibold mb-3">Project Stages</h2>
                <ul className="list-inside list-disc flex flex-col gap-1 text-sm mb-10">
                  {stages.map((stage) => {
                    return (
                      <li key={stage.name} className="flex items-center gap-1">
                        {stage.completed ? (
                          <CheckBadgeIcon className="size-4 text-success" />
                        ) : (
                          <ClockIcon className="size-4 text-warning" />
                        )}
                        {stage.name}{' '}
                      </li>
                    );
                  })}
                </ul>
                {(session?.user.role === 'supervisor' ||
                  session?.user.role === 'admin') && (
                  <div className="sm:col-span-2">
                    <Input
                      aria-label="Update project stages"
                      type="text"
                      label="Add stage"
                      labelPlacement="outside"
                      name="stages"
                      value={stageInput}
                      placeholder="Enter projects stage"
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
                          {!stage.completed && (
                            <button
                              type="button"
                              onClick={() => removeStage(i)}
                              className="bg-gray-400 rounded-full"
                            >
                              <IoClose className="size-3" />
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(session?.user.role === 'supervisor' ||
                  session?.user.role === 'admin') && (
                  <Button
                    onPress={() => {
                      onSubmit();
                    }}
                    className="bg-[#F19645] flex items-center text-white font-semibold mt-4"
                  >
                    <p>Update stages</p>
                    {projectUpdateLoading && (
                      <Spinner size="sm" variant="spinner" color="white" />
                    )}
                  </Button>
                )}
              </div>
            </div>
            <div className="rounded-lg bg-white sm:w-1/2 dark:bg-gray-800 shadow p-4 sm:max-h-[500px]">
              <h2 className="text-lg font-semibold mb-3">Details</h2>
              <dl className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Description
                  </dt>
                  <dd>
                    {data?.data.description ?? 'No description available.'}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Start date
                  </dt>
                  <dd>{formatDate(data?.data.startDate || '') ?? '-'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    End date
                  </dt>
                  <dd>{formatDate(data?.data.endDate || '') ?? '-'}</dd>
                </div>

                {(session?.user.role === 'supervisor' ||
                  session?.user.role === 'admin') && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Last updated
                    </dt>
                    <dd>
                      {formatDateAndTime(data?.data.updatedAt || '') ?? '-'}
                    </dd>
                  </div>
                )}
                {isAdmin && (
                  <div className="flex flex-col gap-4">
                    <div>
                      {data?.data.assignedTo && (
                        <Dropdown>
                          <DropdownTrigger>
                            <Button variant="bordered">
                              <dt className="text-xs flex items-center gap-1 uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                <UsersIcon className="size-4" />{' '}
                                <span>
                                  {' '}
                                  Assigned to ({data?.data.assignedTo.length})
                                </span>
                              </dt>
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="List of assigned supervisors"
                            onAction={(key) => {
                              console.log(key);

                              const supervisor = handlGetSupervisorDetails(key);
                              setRemoveSelectedSupervisor({
                                id: supervisor?._id || '',
                                email: supervisor?.email || '',
                              });
                              onOpen();
                            }}
                          >
                            {data?.data.assignedTo?.map((user) => {
                              return (
                                <DropdownItem key={user._id}>
                                  {user.email}
                                </DropdownItem>
                              );
                            })}
                          </DropdownMenu>
                        </Dropdown>
                      )}
                      {/* <dd className="flex flex-col gap-2 mt-2">
                        {data?.data.assignedTo?.map((user) => {
                          return (
                            <div
                              key={user._id}
                              className="flex items-center gap-1 "
                            >
                              <p className=" font-semibold p-2 rounded-lg">
                                {user.email}
                              </p>
                              <Tooltip content="Remove supervisor">
                                <button>
                                  <TrashIcon className="size-6 p-1 border-1 border-red-500 rounded-lg text-red-500" />
                                </button>
                              </Tooltip>
                            </div>
                          );
                        })}
                      </dd> */}
                      {removeSelectedSupervisor && (
                        <RemoveSupervisorModal
                          onOpenChange={onOpenChange}
                          isOpen={isOpen}
                          selectedSupervisor={removeSelectedSupervisor}
                          projectId={projectId}
                        />
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                      <Autocomplete
                        className="max-w-xs"
                        defaultItems={supervisorsData?.data || []}
                        aria-label="Add supervisor"
                        placeholder="Search for supervisor"
                        selectedKey={selectedSupervisor || null}
                        inputValue={search}
                        onSelectionChange={onSelectedSupervisorChange}
                        onInputChange={onSupervisorInputChange}
                        isLoading={isSupervisorsLoading}
                      >
                        {(supervisor) => (
                          <AutocompleteItem key={supervisor._id}>
                            {supervisor.email}
                          </AutocompleteItem>
                        )}
                      </Autocomplete>

                      <Button
                        size="sm"
                        onPress={async () => {
                          await handleAssignSupervisor();
                        }}
                        className="bg-[#F19645] flex items-center text-white font-semibold sm:mt-0 mt-4"
                      >
                        <p>Add supevisor</p>
                        {assignSupervisorLoading && (
                          <Spinner size="sm" variant="spinner" color="white" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </dl>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OperationDetails;
