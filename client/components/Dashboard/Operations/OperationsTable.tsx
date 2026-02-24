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
} from '@heroui/react';
import { Project } from '@/types/projects.types';
import { getPhaseLabel } from '@/utils/project.utils';

interface OperationsTabledProps {
  projects: Project[];
  handleSort: (column: string) => void;
  isLoading: boolean;
  search: string;
  setSearch: (value: string) => void;
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}
const OperationsTable = ({
  projects,
  handleSort,
  isLoading,
  page,
  totalPages,
  setPage,
}: OperationsTabledProps) => {
  const renderCell = (project: Project, columnKey: React.Key) => {
    console.log('renderCell:', project);

    switch (columnKey) {
      case 'name':
        return <User name={project.name} description={project.email} />;

      case 'client':
        return <div className="text-sm">{project.client}</div>;

      case 'budget':
        return `₦${project.budget.toLocaleString()}`;

      case 'startDate':
        return new Date(project.startDate).toLocaleDateString();

      case 'phase':
        return getPhaseLabel(project.phase || 0);

      case 'status':
        return (
          <Progress
            aria-label="Project progress"
            classNames={{
              base: 'w-[220px]',
              // track: ' border border-default radius-lg',
              indicator: 'bg-orange-400',
              label: 'tracking-wider font-medium text-default-600',
              value: 'text-sm',
            }}
            color={
              project.status === 1
                ? 'success'
                : project.status === 2
                  ? 'danger'
                  : 'warning'
            }
            showValueLabel={true}
            size="md"
            value={project.status * 20}
            //   isIndeterminate={true}
          />
        );

      case 'location':
        return (
          <div className="text-sm capitalize">{project.location.state}</div>
        );

      // case 'actions':
      //   return (
      //     <div className="flex gap-2">
      //       <Tooltip content="Details">
      //         <EyeIcon className="w-5 h-5 cursor-pointer" />
      //       </Tooltip>
      //       <Tooltip content="Edit">
      //         <PencilIcon className="w-5 h-5 cursor-pointer" />
      //       </Tooltip>
      //       <Tooltip color="danger" content="Delete">
      //         <TrashIcon className="w-5 h-5 cursor-pointer" />
      //       </Tooltip>
      //     </div>
      //   );

      default:
        return project[columnKey as keyof Project] as React.ReactNode;
    }
  };

  return (
    <>
      {/* 🔎 Search */}
      {/* <Input
        placeholder="Search by name, email, client..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      /> */}

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
            key="client"
            onClick={() => handleSort('client')}
            allowsSorting
          >
            Client
          </TableColumn>

          <TableColumn
            key="startDate"
            onClick={() => handleSort('startDate')}
            allowsSorting
          >
            Date Started
          </TableColumn>

          <TableColumn key="status">Status</TableColumn>

          <TableColumn key="phase">Phase</TableColumn>

          <TableColumn key="location">Location</TableColumn>

          <TableColumn
            key="budget"
            onClick={() => handleSort('budget')}
            allowsSorting
          >
            Budget
          </TableColumn>

          {/* <TableColumn key="actions">Actions</TableColumn> */}
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
              <TableRow key={item.email}>
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
    </>
  );
};

export default OperationsTable;
