'use client';

import React from 'react';
import { Button, ButtonGroup } from '@heroui/react';
import { useSession } from 'next-auth/react';

import DashboardHeader from '../../DashboardHeader';

import useDebounce from '@/hooks/useDebounceHook';
import { useGetSupervisorPayrollQuery } from '@/lib/services/supervisor/supervisors.api';
import { PayrollSupervisor } from '@/types/supervisors.types';
import { PayrollList, PayrollSearch, PayrollSummaryCards } from '../../Payroll';

const SupervisorsPayroll = () => {
  const { data: session } = useSession();

  const [search, setSearch] = React.useState('');

  const debouncedSearch = useDebounce(search, 500);

  const [payrollTab, setPayrollTab] = React.useState<
    'transactions' | 'due' | 'paid'
  >('transactions');

  const { data, isLoading } = useGetSupervisorPayrollQuery({
    search: debouncedSearch,
  });

  const payroll = data?.data ?? [];

  const filteredPayroll = React.useMemo(() => {
    switch (payrollTab) {
      case 'due':
        return payroll.filter((item) => item.paymentDue && !item.salaryPaid);

      case 'paid':
        return payroll.filter((item) => item.salaryPaid);

      default:
        return payroll;
    }
  }, [payroll, payrollTab]);

  const summary = React.useMemo(() => {
    return {
      totalDue: payroll.filter((item) => item.paymentDue && !item.salaryPaid)
        .length,

      dueTomorrow: payroll.filter((item) => item.paymentTomorrow).length,

      overdue: payroll.filter((item) => item.paymentOverDue).length,

      // paid: payroll.filter((item) => item.salaryPaid).length,

      totalPayroll: payroll
        .filter((item) => item.paymentDue && !item.salaryPaid)
        .reduce((sum, item) => sum + (item.amount ?? 0), 0),
    };
  }, [payroll]);

  const handlePay = (payroll: PayrollSupervisor) => {
    console.log(payroll);
    // Open Pay Supervisor Modal
  };

  return (
    <section className="flex flex-col gap-6">
      <DashboardHeader
        title="Payroll / Supervisor Payment"
        description="Manage supervisor salary payments"
      />

      <PayrollSummaryCards
        totalDue={summary.totalDue}
        dueTomorrow={summary.dueTomorrow}
        // paid={summary.paid}
        overdue={summary.overdue}
        totalPayroll={summary.totalPayroll}
      />

      <div className="shadow bg-white dark:bg-black dark:p-0 p-4 rounded-lg flex flex-col gap-4">
        {' '}
        {session?.user.role === 'admin' && (
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <ButtonGroup>
              <Button
                variant={payrollTab === 'transactions' ? 'solid' : 'flat'}
                color={payrollTab === 'transactions' ? 'warning' : 'default'}
                onPress={() => setPayrollTab('transactions')}
                className={
                  payrollTab === 'transactions'
                    ? 'bg-[#F19645] text-white font-semibold'
                    : ''
                }
              >
                All
              </Button>

              <Button
                variant={payrollTab === 'due' ? 'solid' : 'flat'}
                color={payrollTab === 'due' ? 'warning' : 'default'}
                onPress={() => setPayrollTab('due')}
                className={
                  payrollTab === 'due'
                    ? 'bg-[#F19645] text-white font-semibold'
                    : ''
                }
              >
                Due
              </Button>

              <Button
                variant={payrollTab === 'paid' ? 'solid' : 'flat'}
                color={payrollTab === 'paid' ? 'warning' : 'default'}
                onPress={() => setPayrollTab('paid')}
                className={
                  payrollTab === 'paid'
                    ? 'bg-[#F19645] text-white font-semibold'
                    : ''
                }
              >
                Paid
              </Button>
            </ButtonGroup>

            <div className="w-full lg:w-96">
              <PayrollSearch search={search} setSearch={setSearch} />
            </div>
          </div>
        )}
        <PayrollList
          payroll={filteredPayroll}
          isLoading={isLoading}
          onPay={handlePay}
        />
      </div>
    </section>
  );
};

export default SupervisorsPayroll;
