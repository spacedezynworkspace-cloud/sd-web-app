'use client';

import { Button, Card, CardBody, Divider, User } from '@heroui/react';
import { WalletIcon } from '@heroicons/react/24/outline';

import PayrollProgress from './PayrollProgress';
import PayrollStatusChip from './PayrollStatusChip';
import { PayrollSupervisor } from '@/types/supervisors.types';

interface PayrollCardProps {
  payroll: PayrollSupervisor;
  onPay: (payroll: PayrollSupervisor) => void;
}

const PayrollCard = ({ payroll, onPay }: PayrollCardProps) => {
  return (
    <Card className="shadow-sm border border-default-200">
      <CardBody className="gap-5">
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <User
            avatarProps={{
              radius: 'full',
            }}
            name={payroll.supervisor.email}
            description={payroll.supervisor.role}
          />

          <PayrollStatusChip payroll={payroll} />
        </div>

        <Divider />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p className="text-xs text-default-500">Project</p>

            <p className="font-semibold">{payroll.project?.name ?? '-'}</p>
          </div>

          <div>
            <p className="text-xs text-default-500">Client</p>

            <p className="font-semibold">{payroll.project?.client ?? '-'}</p>
          </div>
        </div>

        <PayrollProgress activeDays={payroll.active_days} />

        <Divider />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-xs text-default-500">Amount</p>

            <p className="text-2xl font-bold">₦150,000</p>
          </div>

          <Button
            color="warning"
            startContent={<WalletIcon className="w-4 h-4" />}
            className="w-full sm:w-auto"
            onPress={() => onPay(payroll)}
            isDisabled={payroll.salaryPaid}
          >
            {payroll.salaryPaid ? 'Paid' : 'Mark as Paid'}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default PayrollCard;
