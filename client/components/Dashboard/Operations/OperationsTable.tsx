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
  Button,
  useDisclosure,
} from '@heroui/react';
import { Project } from '@/types/projects.types';
import { getPhaseLabel } from '@/utils/project.utils';
import { formatDate } from '@/utils/dateFormat.utils';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import UpdateOperationsModal from './UpdateOperationsModal';

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

  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]
  );
  const renderCell = (project: Project, columnKey: React.Key) => {
    console.log('renderCell:', project);

    switch (columnKey) {
      case 'name':
        return <User name={project.name} description={project.email} />;

      // case 'client':
      //   return <div className="text-sm">{project.client}</div>;

      // case 'budget':
      //   return `₦${project.budget.toLocaleString()}`;

      case 'startDate':
        return formatDate(project.startDate);
      case 'endDate':
        return formatDate(project.endDate);

      case 'phase':
        return <div className="capitalize">{project.phase}</div>;
      case 'assignedTo':
        return <div className="capitalize">{project.assignedTo[0].email}</div>;

      case 'status':
        return (
          <Progress
            aria-label="Project progress"
            classNames={{
              base: 'w-[220px]',
              indicator: `${project.status === 100 ? 'bg-green-400' : 'bg-orange-400'}`,
              label: 'tracking-wider font-medium text-default-600',
              value: 'text-sm',
            }}
            showValueLabel={true}
            size="md"
            value={project.status}
          />
        );

      case 'location':
        return (
          <div className="text-sm capitalize">{project.location.state}</div>
        );

      case 'actions':
        return (
          <div className="flex gap-2">
            {project.status === 100 ? (
              <div>Closed</div>
            ) : (
              <Tooltip content="Edit">
                <Button
                  onPress={() => {
                    setSelectedProject(project);
                    onOpen();
                  }}
                  className="bg-orange-400 text-white font-semibold"
                >
                  <PencilIcon className="w-5 h-5 cursor-pointer" />
                </Button>
              </Tooltip>
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

          {/* <TableColumn
            key="client"
            onClick={() => handleSort('client')}
            allowsSorting
          >
            Client
          </TableColumn> */}

          <TableColumn
            key="startDate"
            onClick={() => handleSort('startDate')}
            allowsSorting
          >
            Start Date
          </TableColumn>
          <TableColumn key="endDate">End Date</TableColumn>

          <TableColumn key="status">Status</TableColumn>

          <TableColumn key="phase">Phase</TableColumn>
          <TableColumn key="assignedTo">Supervisor</TableColumn>

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
      <UpdateOperationsModal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        selectedProject={{
          phase: selectedProject?.phase || '',
          status: selectedProject?.status || 0,
          id: selectedProject?._id || '',
          name: selectedProject?.name || '',
          endDate: selectedProject?.endDate || '',
        }}
      />
    </>
  );
};

export default OperationsTable;
