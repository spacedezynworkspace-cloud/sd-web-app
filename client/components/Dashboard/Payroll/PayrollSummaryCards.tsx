'use client';

import {
  CalendarIcon,
  ClockIcon,
  ExclamationCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { Card, CardBody } from '@heroui/react';

interface PayrollSummaryCardsProps {
  totalDue: number;
  dueTomorrow: number;
  overdue: number;
  totalPayroll: number;
}

const PayrollSummaryCards = ({
  totalDue,
  dueTomorrow,
  totalPayroll,
  overdue,
}: PayrollSummaryCardsProps) => {
  const cards = [
    {
      label: 'Due for Payment ',
      value: totalDue,
      icon: <ClockIcon className="size-6 text-[#353534]" />,
      bg: 'bg-gray-300',
    },
    {
      label: 'Due Tomorrow',
      value: dueTomorrow,
      icon: <CalendarIcon className="size-6 text-yellow-600" />,
      bg: 'bg-warning/30',
    },
    {
      label: 'Over due',
      value: overdue,
      icon: <ExclamationCircleIcon className="size-6 text-red-500" />,
      bg: 'bg-red-200',
    },
    {
      label: "Today's Payroll",
      value: `₦${totalPayroll.toLocaleString()}`,
      icon: <WalletIcon className="size-6 text-green-500" />,
      bg: 'bg-green-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card
          key={card.label}
          className="shadow rounded-lg bg-white dark:bg-orange-100"
        >
          <CardBody className="flex flex-row items-start gap-2">
            <div
              className={`${card.bg} w-10 h-10 rounded-lg flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <div className="">
              <p className="text-sm font-semibold text-default-500 dark:text-black">
                {card.label}
              </p>
              <h2 className="text-3xl font-bold dark:text-black">
                {card.value}
              </h2>
              <p className="text-xs font-semibold text-default-500 dark:text-black">
                Supervisor
              </p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PayrollSummaryCards;
