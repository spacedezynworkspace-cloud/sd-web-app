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
import { formatDate } from '@/utils/dateFormat.utils';

interface PaymentsTableProps {
  projects: Project[];
  handleSort: (column: string) => void;
  isLoading: boolean;
  search: string;
  setSearch: (value: string) => void;
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}
const PaymentsTable = ({
  projects,
  handleSort,
  isLoading,
  page,
  totalPages,
  setPage,
}: PaymentsTableProps) => {
  const renderCell = (project: Project, columnKey: React.Key) => {
    console.log('renderCell:', project);

    switch (columnKey) {
      case 'client':
        return <User name={project.name} description={project.email} />;

      case 'project':
        return <div className="text-sm">{project.client}</div>;

      case 'amount':
        return `₦${project.budget.toLocaleString()}`;

      case 'paymentDate':
        return formatDate(project.startDate);

      case 'method':
        return (
          <div className="text-sm capitalize">{project.location.state}</div>
        );

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
            key="project"
            onClick={() => handleSort('project')}
            allowsSorting
          >
            Client Name
          </TableColumn>

          <TableColumn
            key="type"
            onClick={() => handleSort('type')}
            allowsSorting
          >
            Project
          </TableColumn>

          <TableColumn
            key="date"
            onClick={() => handleSort('date')}
            allowsSorting
          >
            Amount
          </TableColumn>

          <TableColumn key="requestedBy">Date paid</TableColumn>

          <TableColumn
            key="status"
            onClick={() => handleSort('status')}
            allowsSorting
          >
            Method
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

export default PaymentsTable;
