'use client';

import { Progress } from '@heroui/react';

interface PayrollProgressProps {
  activeDays: number;
}

const PayrollProgress = ({ activeDays }: PayrollProgressProps) => {
  return (
    <Progress
      size="sm"
      value={Math.min((activeDays / 30) * 100, 100)}
      color={
        activeDays >= 30 ? 'danger' : activeDays === 29 ? 'warning' : 'primary'
      }
      showValueLabel
      label={`${activeDays} Active Days`}
    />
  );
};

export default PayrollProgress;
