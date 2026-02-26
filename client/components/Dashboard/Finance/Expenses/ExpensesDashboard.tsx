import React, { useCallback } from 'react';
import ExpensesTable from './ExpensesTable';
import { Expense } from '@/types/expenses.types';
import { useGetAllExpensesQuery } from '@/lib/services/expense/expenses.api';

const ExpensesDashboard = () => {
  const [page, setPage] = React.useState<number>(1);

  const [sortBy, setSortBy] = React.useState<string>('createdAt');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');

  // 🔥 Reset page when filters/search change
  React.useEffect(() => {
    setPage(1);
  }, [sortBy, sortOrder]);

  const { data: financeExpensesData, isLoading } = useGetAllExpensesQuery({
    page,
    limit: 10,
    sortBy,
    sortOrder,
  });
  const expenses: Expense[] = financeExpensesData?.data ?? [];
  const totalPages = financeExpensesData?.pagination?.totalPages ?? 1;

  console.log('financeExpensesData:', financeExpensesData);

  const handleSort = useCallback(
    (column: string) => {
      if (sortBy === column) {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortBy(column);
        setSortOrder('asc');
      }
    },
    [sortBy, sortOrder]
  );

  return (
    <div>
      <ExpensesTable
        expenses={expenses}
        handleSort={handleSort}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default ExpensesDashboard;
