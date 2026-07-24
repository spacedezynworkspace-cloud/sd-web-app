'use client';

import React, { useMemo } from 'react';
import { Card, CardBody, Divider, useDisclosure } from '@heroui/react';
import {
  ChevronRightIcon,
  HomeModernIcon,
  // WalletIcon,
} from '@heroicons/react/24/outline';

import PayrollStatusChip from './PayrollStatusChip';
import { PayrollSupervisor } from '@/types/supervisors.types';
import PayrollSupervisorOverview from './PayrollSupervisorOverview';
interface PayrollCardProps {
  payroll: PayrollSupervisor;
  onPay: (payroll: PayrollSupervisor) => void;
}

const PayrollCard = ({ payroll, onPay }: PayrollCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedSupervisor, setSelectedSupervisor] =
    React.useState<PayrollSupervisor | null>(null);

  const fName = payroll.supervisor.email.split('.')[0];
  const lName = payroll.supervisor.email.split('.')[1].split('@')[0];
  const active_days = payroll.active_days;

  const dueDateCalculation = useMemo(() => {
    // 1. Check if the counter has passed the 30-day mark
    if (active_days > 30) {
      // 2. Subtract 30 from current counter to find overdue days
      const overdueDays = active_days - 30;

      return `${overdueDays} days overdue!`;
    } else if (active_days === 30) {
      return `Action required!`;
    } else {
      return `${30 - active_days} ${30 - active_days > 1 ? 'days' : 'day'} remaining.`;
    }
  }, [payroll.active_days]);
  return (
    <Card className="shadow-none">
      <CardBody className="gap-5">
        <div className="flex  sm:flex-row flex-col justify-between gap-3">
          {/* Avatar  */}
          <div className="flex justify-start sm:w-[300px] items-center gap-3">
            <div
              className={`${
                payroll.paymentDue
                  ? 'bg-default text-gray-600'
                  : payroll.paymentTomorrow
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-red-100 text-red-600'
              } sm:h-12 sm:w-12 h-10 w-10 rounded-full flex items-center justify-center uppercase font-semibold`}
            >
              <p>
                {fName[0]}
                {lName[0]}
              </p>
            </div>
            <div className="">
              <p className="capitalize font-semibold text-sm">
                {fName} {lName}
              </p>
              <p className="capitalize font-semibold text-xs text-gray-400">
                {payroll.supervisor.role}
              </p>
            </div>
          </div>

          {/* Project info  */}
          <div className="flex sm:w-[300px] justify-start items-center gap-3">
            <div
              className={`bg-[#F19645]/20 sm:h-12 sm:w-12 h-10 w-10 rounded-full flex items-center justify-center uppercase font-semibold`}
            >
              <HomeModernIcon className="size-6 text-[#F19645]" />
            </div>
            <div>
              <p className="capitalize font-semibold text-sm">
                {payroll.project?.name ?? '-'}
              </p>

              <div className="text-xs flex items-center gap-1 text-default-500">
                <span>Client: </span>

                <span className="capitalize font-semibold text-xs text-gray-500">
                  {payroll.project?.client ?? '-'}
                </span>
              </div>
            </div>
          </div>
          <div className="flex sm:w-[200px]  justify-start items-center gap-3">
            <PayrollStatusChip payroll={payroll} />
          </div>

          {/* Amount and date  */}
          <div className="flex gap-3 sm:w-[200px] items-center justify-end">
            <div className="flex flex-col items-end">
              <p className="text-sm font-bold">
                ₦{payroll.amount.toLocaleString()}
              </p>
              <div className="text-xs font-semibold">
                <div>
                  {payroll.paymentTomorrow && (
                    <span className="text-warning">
                      Due: {dueDateCalculation}
                    </span>
                  )}
                  {payroll.paymentDue && (
                    <span className="text-gray-500">
                      Due: {dueDateCalculation}
                    </span>
                  )}
                  {payroll.paymentOverDue && (
                    <span className="text-danger">
                      Overdue: {dueDateCalculation}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedSupervisor(payroll);
                onOpen();
              }}
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>
        <PayrollSupervisorOverview
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          selectedSupervisor={selectedSupervisor || null}
        />

        <Divider />
      </CardBody>
    </Card>
  );
};

export default PayrollCard;
