import React from 'react';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Card, CardBody, ScrollShadow, Spinner } from '@heroui/react';
import { useGetAllApprovedExpensesQuery } from '@/lib/services/expense/expenses.api';

const FinanceRecentTransactions = () => {
  const { data, isLoading } = useGetAllApprovedExpensesQuery();

  return (
    <ScrollShadow className="w-full h-[360px] bg-transparent">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner
            label="Transactions Loading..."
            size="sm"
            variant="spinner"
            color="warning"
          />
        </div>
      )}
      {data?.data.length &&
        data.data.map((expense) => {
          return (
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
              key={expense._id}
            >
              {' '}
              <CardBody className="px-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-200/50 text-orange-400 flex items-center justify-center">
                    <HomeIcon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {expense.project} House of Anugu
                    </p>
                    <p className="text-xs text-default-500">Invoice Payment</p>
                  </div>
                  <span className="ml-auto text-sm font-semibold text-red-500">
                    -₦{expense.amount.toLocaleString()}
                  </span>
                </div>
              </CardBody>
            </Card>
          );
        })}
      {!isLoading && !data?.data.length && 'No data to display'}
    </ScrollShadow>
  );
};

export default FinanceRecentTransactions;
