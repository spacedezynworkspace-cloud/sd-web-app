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
        Paid
      </Chip>
    );
  }

  if (payroll.paymentDue) {
    return (
      <Chip color="danger" variant="flat">
        Payment Due
      </Chip>
    );
  }

  if (payroll.paymentTomorrow) {
    return (
      <Chip color="warning" variant="flat">
        Due Tomorrow
      </Chip>
    );
  }

  return (
    <Chip color="primary" variant="flat">
      Active
    </Chip>
  );
};

export default PayrollStatusChip;
