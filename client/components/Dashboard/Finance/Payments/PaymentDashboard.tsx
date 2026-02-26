import React, { useCallback } from 'react';
import PaymentsTable from './PaymentsTable';
import { useGetAllPaymentsQuery } from '@/lib/services/payment/payment.api';
import { Payment } from '@/types/payment.types';

const PaymentDashboard = () => {
  const [page, setPage] = React.useState<number>(1);

  const [sortBy, setSortBy] = React.useState<string>('createdAt');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');

  // 🔥 Reset page when filters/search change
  React.useEffect(() => {
    setPage(1);
  }, [sortBy, sortOrder]);

  const { data, isLoading } = useGetAllPaymentsQuery({
    page,
    limit: 10,
    sortBy,
    sortOrder,
  });

  const payments: Payment[] = data?.data ?? [];
  const totalPages = data?.pagination?.totalPages ?? 1;

  console.log('payments:', payments);

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
      <PaymentsTable
        payments={payments}
        handleSort={handleSort}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default PaymentDashboard;
