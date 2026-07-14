import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from '@/lib/services/projects/projects.api';
import {
  ArrowLeftIcon,
  CheckBadgeIcon,
  ClockIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';
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
} from '@heroui/react';
import { projectStages, UpdateProjectRequest } from '@/types/projects.types';
import { IoClose } from 'react-icons/io5';
import { useLazyGetAllSupervisorsQuery } from '@/lib/services/supervisor/supervisors.api';
import useDebounce from '@/hooks/useDebounceHook';

const OperationDetails = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useGetProjectByIdQuery({ id: projectId });

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  const handleSelectionChange = (
    keys: React.Key[] | Set<React.Key> | string | undefined
  ) => {
    if (keys === undefined) {
      setSelectedKeys(new Set());
      return;
    }

    if (typeof keys === 'string') {
      if (keys === 'all') {
        setSelectedKeys(
          new Set(['text', 'number', 'date', 'single_date', 'iteration'])
        );
      } else {
        setSelectedKeys(new Set([keys]));
      }
      return;
    }

    if (keys instanceof Set) {
      setSelectedKeys(new Set(Array.from(keys, String)));
      return;
    }

    if (Array.isArray(keys)) {
      setSelectedKeys(new Set(keys.map(String)));
      return;
    }

    setSelectedKeys(new Set());
  };

  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  const [stageInput, setStageInput] = React.useState('');
  const [stages, setStages] = React.useState<projectStages[]>(
    data?.data.stages || []
  );
  const [updateProject, { isLoading: projectUpdateLoading }] =
    useUpdateProjectMutation();

  const [search, setSearch] = React.useState('');
  const [selectedSupervisor, setSelectedSupervisor] = React.useState<
    string | null
  >(null);
  const debouncedSearch = useDebounce(search, 500);
  const [
    getSupervisors,
    { data: supervisorsData, isFetching: isSupervisorsFetching },
  ] = useLazyGetAllSupervisorsQuery();

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
    console.log('payload: ', payload);

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

  useEffect(() => {
    if (data?.data.stages && !isLoading) {
      setStages([...data?.data.stages]);
    }
  }, [data]);

  useEffect(() => {
    // Load all supervisors when the search is cleared
    if (!debouncedSearch.trim()) {
      getSupervisors({});
      return;
    }

    // Only search after at least 2 characters
    if (debouncedSearch.length >= 2) {
      getSupervisors({
        search: debouncedSearch,
      });
    }
  }, [debouncedSearch, getSupervisors]);
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
      <div className="bg-white dark:bg-transparent dark:p-0 shadow rounded-lg p-4">
        <DashboardHeader
          title={`${isLoading ? 'Loading...' : data?.data.name}`}
          description={`Here you can see and manage ${data?.data.name}`}
        />
      </div>
      <div className="grid gap-4">
        {isLoading ? (
          <div className="rounded-lg bg-white dark:bg-slate-900 shadow p-4">
            Loading project details...
          </div>
        ) : (
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 sm:w-1/2">
              <div className="rounded-lg bg-white w-full dark:bg-slate-900 shadow p-4">
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

              <div className="rounded-lg bg-white w-full dark:bg-slate-900 shadow p-4">
                <h2 className="text-lg font-semibold mb-3">Project Stages</h2>
                <ul className="list-inside list-disc text-sm mb-10">
                  {stages.map((stage) => {
                    return (
                      <li key={stage.name} className="flex items-center gap-1">
                        {stage.name}{' '}
                        {stage.completed ? (
                          <CheckBadgeIcon className="size-4 text-success" />
                        ) : (
                          <ClockIcon className="size-4 text-warning" />
                        )}
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
                    className="bg-[#F19645] text-white font-semibold mt-4"
                  >
                    Update stages
                  </Button>
                )}
              </div>
            </div>
            <div className="rounded-lg bg-white sm:w-1/2 dark:bg-slate-900 shadow p-4">
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
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <UsersIcon className="size-4" /> <span> Assigned to</span>
                    </dt>
                    <dd>
                      {data?.data.assignedTo
                        ?.map((user) => user.email)
                        .join(', ') || '-'}
                    </dd>
                    <div>
                      {isSupervisorsFetching ? (
                        <p>Loading supervisors...</p>
                      ) : (
                        <Autocomplete
                          label="Assign Supervisor"
                          placeholder="Search supervisor..."
                          isLoading={isSupervisorsFetching}
                          inputValue={search}
                          onInputChange={setSearch}
                          selectedKey={selectedSupervisor}
                          onSelectionChange={(key) =>
                            setSelectedSupervisor(key as string)
                          }
                        >
                          {(supervisorsData?.data || []).map((supervisor) => (
                            <AutocompleteItem
                              key={supervisor._id}
                              textValue={supervisor.email}
                            >
                              <div className="flex flex-col">
                                <span>{supervisor.name}</span>
                                <span className="text-xs text-default-500">
                                  {supervisor.email}
                                </span>
                              </div>
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      )}
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
