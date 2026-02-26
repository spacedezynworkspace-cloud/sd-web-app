'use client';
import React from 'react';
import {
  Pagination,
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
import { formatDate } from '@/utils/dateFormat.utils';
import { Payment } from '@/types/payment.types';

interface PaymentsTableProps {
  payments: Payment[];
  handleSort: (column: string) => void;
  isLoading: boolean;
  // search: string;
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}
const PaymentsTable = ({
  payments,
  handleSort,
  isLoading,
  page,
  totalPages,
  setPage,
}: PaymentsTableProps) => {
  const PAYMENT_METHOD: {
    label: string;
    value: 'cash' | 'bank_transfer' | 'cheque';
  }[] = [
    {
      label: 'Bank trasnfer',
      value: 'bank_transfer',
    },
    {
      label: 'Cash',
      value: 'cash',
    },
    {
      label: 'Cheque',
      value: 'cheque',
    },
  ];
  const SERVICE_TYPE: {
    label: string;
    value: 'architech' | 'rennovation' | '3d_visualization' | 'interior_design';
  }[] = [
    {
      label: 'Architech',
      value: 'architech',
    },
    {
      label: 'Rennovation',
      value: 'rennovation',
    },
    {
      label: '3d Visualization',
      value: '3d_visualization',
    },
    {
      label: 'Interior Design',
      value: 'interior_design',
    },
  ];
  const renderCell = (payment: Payment, columnKey: React.Key) => {
    console.log('renderCell:', payment);

    switch (columnKey) {
      case 'client':
        return (
          <User
            name={payment.project?.client}
            description={payment.project?.name}
          />
        );

      case 'serviceType':
        return (
          <div className="text-sm capitalize">
            {SERVICE_TYPE.find(
              (value) => value.value === payment.project?.serviceType
            )?.label || 'Unknown'}
          </div>
        );

      case 'amount':
        return `₦${payment.amount.toLocaleString()}`;

      case 'paymentDate':
        return formatDate(`${payment.paymentDate}`);

      case 'method':
        return (
          <div className="text-sm capitalize">
            {PAYMENT_METHOD.find((value) => value.value === payment.method)
              ?.label || 'Unknown'}
          </div>
        );

      default:
        return payment[columnKey as keyof Payment] as React.ReactNode;
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
            key="client"
            // onClick={() => handleSort('project')}
            // allowsSorting
          >
            Client Name
          </TableColumn>

          <TableColumn
            key="serviceType"
            // onClick={() => handleSort('type')}
            // allowsSorting
          >
            Service Type
          </TableColumn>

          <TableColumn key="paymentDate">Date paid</TableColumn>
          <TableColumn
            key="amount"
            onClick={() => handleSort('amount')}
            allowsSorting
          >
            Amount
          </TableColumn>

          <TableColumn
            key="method"
            // onClick={() => handleSort('method')}
            // allowsSorting
          >
            Method
          </TableColumn>

          {/* <TableColumn key="actions">Actions</TableColumn> */}
        </TableHeader>

        {payments.length > 0 || isLoading ? (
          <TableBody<Payment>
            items={payments}
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

export default PaymentsTable;
