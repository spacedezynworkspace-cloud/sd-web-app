'use client';
import React from 'react';
import {
  Pagination,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  // Tooltip,
  User,
  Spinner,
  Tooltip,
  useDisclosure,
} from '@heroui/react';
import { Project } from '@/types/projects.types';
import { calculateProgress } from '@/utils/project.utils';
import { formatDate, isPastDate } from '@/utils/dateFormat.utils';
import {
  CheckBadgeIcon,
  EyeIcon,
  PauseIcon,
  PencilIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import ProjectFormModal from '../Forms/ProjectFormModal';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';

interface OperationsTabledProps {
  projects: Project[];
  handleSort: (column: string) => void;
  isLoading: boolean;
  search: string;
  setSearch: (value: string) => void;
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
  operationsTab: 'owner' | '';
}
const OperationsTable = ({
  projects,
  handleSort,
  isLoading,
  page,
  totalPages,
  setPage,
  operationsTab,
}: OperationsTabledProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const [formSelected, setFormSelected] = React.useState<'update' | 'expense'>(
    'update'
  );

  const handleModalFormSelected = ({
    formSelected,
    project,
  }: {
    formSelected: 'update' | 'expense';
    project: Project;
  }) => {
    setSelectedProject(project);
    setFormSelected(formSelected);
    onOpen();
  };
  const renderCell = (project: Project, columnKey: React.Key) => {
    console.log('renderCell:', project);

    switch (columnKey) {
      case 'name':
        return (
          <div className="sm:w-[200px] w-[150px] relative  truncate">
            <div
              className={`${project.status === 'completed' ? 'bg-white' : project.status === 'on_hold' ? 'bg-[#F19645] ' : ''} absolute w-5 h-5 rounded-full flex items-center justify-center left-7 z-10 top-0`}
            >
              {project.status === 'on_hold' ? (
                <PauseIcon className="size-4 text-[#ffffff]" />
              ) : project.status === 'completed' ? (
                <CheckBadgeIcon className="size-4 text-[#358f3c]" />
              ) : (
                ''
              )}
            </div>

            <User name={project.name} description={project.email} />
          </div>
        );

      case 'startDate':
        return (
          <div className="text-sm w-[100px]">{`${formatDate(project.startDate)}`}</div>
        );
      case 'endDate':
        return (
          <div
            className={`${isPastDate(project.endDate) && 'text-red-500'} text-sm w-[100px]`}
          >{`${formatDate(project.endDate)}`}</div>
        );

      case 'phase':
        return <div className="capitalize">{project.phase}</div>;

      case 'assignedTo':
        return <div className="truncate">{project.assignedTo[0].email}</div>;

      case 'progress':
        return (
          <Progress
            aria-label="Project progress"
            classNames={{
              base: 'w-[220px]',
              indicator: `${project.status === 'completed' ? 'bg-green-400' : 'bg-[#F19645]'}`,
              label: 'tracking-wider font-medium text-default-600',
              value: 'text-sm',
            }}
            showValueLabel={true}
            size="md"
            value={calculateProgress(project.stages)}
          />
        );

      case 'location':
        return (
          <div className="text-sm capitalize">{project.location.state}</div>
        );

      case 'actions':
        return (
          <div className="flex gap-2">
            {project.status === 'completed' ? (
              <div>Closed</div>
            ) : !isLoading ? (
              <div className="flex items-center gap-2">
                <Tooltip content="Edit">
                  <button
                    onClick={() => {
                      handleModalFormSelected({
                        formSelected: 'update',
                        project,
                      });
                    }}
                    className=" p-2 rounded-lg text-[#F19645] font-semibold"
                  >
                    <PencilIcon className="w-5 h-5 cursor-pointer" />
                  </button>
                </Tooltip>
                <Tooltip content="Add expense">
                  <button
                    onClick={() => {
                      handleModalFormSelected({
                        formSelected: 'expense',
                        project,
                      });
                    }}
                    className="p-2 rounded-lg text-[#F19645] font-semibold"
                  >
                    <WalletIcon className="w-5 h-5 cursor-pointer" />
                  </button>
                </Tooltip>
                <Tooltip content="Project overview">
                  <Link
                    href={`/dashboard/operations/${slugify(project.client)}-${project._id}`}
                  >
                    <EyeIcon className="w-5 h-5 cursor-pointer" />
                  </Link>
                </Tooltip>
              </div>
            ) : (
              <></>
            )}
          </div>
        );

      default:
        return project[columnKey as keyof Project] as React.ReactNode;
    }
  };

  return (
    <>
      <Table
        isHeaderSticky
        bottomContent={
          <div className="flex justify-end py-4">
            <Pagination
              color="warning"
              page={page}
              total={totalPages}
              onChange={setPage}
              showControls
            />
          </div>
        }
        aria-sort="other"
      >
        <TableHeader>
          <TableColumn
            key="name"
            onClick={() => handleSort('name')}
            allowsSorting
          >
            Project Name
          </TableColumn>

          <TableColumn
            key="startDate"
            onClick={() => handleSort('startDate')}
            allowsSorting
          >
            Start Date
          </TableColumn>
          <TableColumn key="endDate">End Date</TableColumn>

          <TableColumn key="progress">Progress</TableColumn>

          <TableColumn key="phase">Phase</TableColumn>
          {operationsTab !== 'owner' ? (
            <TableColumn key="assignedTo">Supervisor</TableColumn>
          ) : (
            <></>
          )}

          <TableColumn key="location">Location</TableColumn>

          {operationsTab === 'owner' && !isLoading ? (
            <TableColumn key="actions">Action</TableColumn>
          ) : (
            <></>
          )}
        </TableHeader>

        {projects.length > 0 || isLoading ? (
          <TableBody<Project>
            items={projects}
            isLoading={isLoading}
            loadingContent={
              <Spinner
                label="Loading..."
                size="sm"
                variant="spinner"
                color="warning"
              />
            }
          >
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody emptyContent={'No data to display.'}>{[]}</TableBody>
        )}
      </Table>
      {selectedProject && (
        <ProjectFormModal
          formSelected={formSelected}
          onOpenChange={onOpenChange}
          isOpen={isOpen}
          selectedProject={{
            phase: selectedProject?.phase,
            status: selectedProject?.status,
            id: selectedProject?._id,
            name: selectedProject?.name,
            endDate: selectedProject?.endDate,
            assignedTo: selectedProject?.assignedTo[0].email,
            stages: selectedProject?.stages,
          }}
        />
      )}
    </>
  );
};

export default OperationsTable;
