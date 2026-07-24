'use client';

import { Chip } from '@heroui/react';
import { PayrollSupervisor } from '@/types/supervisors.types';

interface PayrollStatusChipProps {
  payroll: PayrollSupervisor;
}

const PayrollStatusChip = ({ payroll }: PayrollStatusChipProps) => {
  if (payroll.salaryPaid) {
    return (
      <Chip color="success" variant="flat">
        <div className="bg-green-600 h-1 w-1"></div> <span>Paid</span>
      </Chip>
    );
  }

  if (payroll.paymentDue) {
    return (
      <div className="flex flex-col gap-1">
        <Chip color="default" variant="flat">
          <div className="flex items-center gap-1">
            <div className="bg-gray-600 h-1.5 w-1.5 rounded-full"></div>{' '}
            <span className="text-xs font-semibold">Due Today</span>
          </div>
        </Chip>
        <p className="text-gray-400 font-semibold text-xs">
          {payroll.active_days}{' '}
          {`active day${payroll.active_days > 1 ? 's' : ''}`}
        </p>
      </div>
    );
  }
  if (payroll.paymentOverDue) {
    return (
      <div className="flex flex-col gap-1">
        <Chip color="danger" variant="flat">
          <div className="flex items-center gap-1">
            <div className="bg-red-600 h-1.5 w-1.5 rounded-full"></div>{' '}
            <span className="text-xs font-semibold">Overdue</span>
          </div>
        </Chip>
        <p className="text-gray-400 font-semibold text-xs">
          {payroll.active_days}{' '}
          {`active day${payroll.active_days > 1 ? 's' : ''}`}
        </p>
      </div>
    );
  }

  if (payroll.paymentTomorrow) {
    return (
      <div className="flex flex-col gap-1">
        <Chip color="warning" variant="flat">
          <div className="flex items-center gap-1">
            <div className="bg-yellow-600 h-1.5 w-1.5 rounded-full"></div>{' '}
            <span className="text-xs font-semibold">Due Tomorrow</span>
          </div>
        </Chip>
        <p className="text-gray-400 font-semibold text-xs">
          {payroll.active_days}{' '}
          {`active day${payroll.active_days > 1 ? 's' : ''}`}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <Chip color="success" variant="flat">
        <div className="flex items-center gap-1">
          <div className="bg-green-600 h-1.5 w-1.5 rounded-full"></div>{' '}
          <span className="text-xs font-semibold">Upcoming</span>
        </div>
      </Chip>
      <p className="text-gray-400 font-semibold text-xs">
        {payroll.active_days}{' '}
        {`active day${payroll.active_days > 1 ? 's' : ''}`}
      </p>
    </div>
  );
};

export default PayrollStatusChip;
