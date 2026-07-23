'use client';

import { Card, CardBody } from '@heroui/react';

interface PayrollSummaryCardsProps {
  totalDue: number;
  dueTomorrow: number;
  paid: number;
  totalPayroll: number;
}

const PayrollSummaryCards = ({
  totalDue,
  dueTomorrow,
  paid,
  totalPayroll,
}: PayrollSummaryCardsProps) => {
  const cards = [
    {
      label: 'Payment Due',
      value: totalDue,
    },
    {
      label: 'Due Tomorrow',
      value: dueTomorrow,
    },
    {
      label: 'Paid',
      value: paid,
    },
    {
      label: 'Total Payroll',
      value: `₦${totalPayroll.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardBody>
            <p className="text-sm text-default-500">{card.label}</p>

            <h2 className="text-3xl font-bold">{card.value}</h2>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PayrollSummaryCards;
