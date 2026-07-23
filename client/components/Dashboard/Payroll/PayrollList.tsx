'use client';

import { Spinner } from '@heroui/react';
import PayrollCard from './PayrollCard';
import { PayrollSupervisor } from '@/types/supervisors.types';

interface PayrollListProps {
  payroll: PayrollSupervisor[];
  isLoading: boolean;
  onPay: (payroll: PayrollSupervisor) => void;
}

const PayrollList = ({ payroll, isLoading, onPay }: PayrollListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner color="warning" />
      </div>
    );
  }

  if (!payroll.length) {
    return (
      <div className="text-center py-20 text-default-500">
        No supervisors found.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {payroll.map((item) => (
        <PayrollCard key={item._id} payroll={item} onPay={onPay} />
      ))}
    </div>
  );
};

export default PayrollList;
