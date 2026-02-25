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
} from '@heroui/react';
import { getPhaseLabel } from '@/utils/project.utils';
import { formatDate } from '@/utils/dateFormat.utils';
import { Expense } from '@/types/expenses.types';
import {
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

interface ExpensesTableProps {
  expenses: Expense[];
  handleSort: (column: string) => void;
  isLoading: boolean;
  search: string;
  setSearch: (value: string) => void;
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}
const ExpensesTable = ({
  expenses,
  handleSort,
  isLoading,
  page,
  totalPages,
  setPage,
}: ExpensesTableProps) => {
  const renderCell = (expense: Expense, columnKey: React.Key) => {
    console.log('renderCell:', expense);

    switch (columnKey) {
      case 'amount':
        return `₦${expense.amount.toLocaleString()}`;

      case 'project':
        return <div className="text-sm">{expense.project}</div>;

      case 'type':
        // return `₦${expense.budget.toLocaleString()}`;
        return <div className="text-sm capitalize">{expense.type}</div>;

      case 'description':
        return <div className="text-sm">{expense.description}</div>;

      case 'requestedBy':
        return <div className="text-sm">{expense.requestedBy}</div>;

      case 'requestedDate':
        return formatDate(`${expense.requestedDate}`);

      case 'status':
        return (
          <div className="text-sm capitalize flex items-center gap-1">
            <p> {expense.status}</p>
            {expense.status === 'declined' ? (
              <XCircleIcon className="size-4 text-red-400" />
            ) : expense.status === 'approved' ? (
              <CheckCircleIcon className="size-4 text-green-400" />
            ) : (
              <ClockIcon className="size-4 text-amber-400" />
            )}
          </div>
        );

      case 'urgencyLevel':
        return <div className="text-sm capitalize">{expense.urgencyLevel}</div>;

      case 'actions':
        return (
          <div className="flex gap-2">
            <Tooltip content="Details">
              <EyeIcon className="w-5 h-5 cursor-pointer" />
            </Tooltip>
            <Tooltip content="Edit">
              <PencilIcon className="w-5 h-5 cursor-pointer" />
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <TrashIcon className="w-5 h-5 cursor-pointer" />
            </Tooltip>
          </div>
        );

      default:
        return expense[columnKey as keyof Expense] as React.ReactNode;
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
            Project Name
          </TableColumn>

          <TableColumn
            key="type"
            onClick={() => handleSort('type')}
            allowsSorting
          >
            Category
          </TableColumn>

          <TableColumn
            key="requestedDate"
            onClick={() => handleSort('date')}
            allowsSorting
          >
            Date requested
          </TableColumn>

          <TableColumn key="requestedBy">Requested by</TableColumn>
          <TableColumn
            key="amount"
            onClick={() => handleSort('amount')}
            allowsSorting
          >
            Amount
          </TableColumn>

          <TableColumn
            key="status"
            onClick={() => handleSort('status')}
            allowsSorting
          >
            Status
          </TableColumn>

          {/* <TableColumn key="actions">Actions</TableColumn> */}
        </TableHeader>

        {expenses.length > 0 || isLoading ? (
          <TableBody<Expense>
            items={expenses}
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
    </>
  );
};

export default ExpensesTable;
