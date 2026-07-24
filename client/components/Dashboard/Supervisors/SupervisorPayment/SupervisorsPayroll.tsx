'use client';

import React from 'react';
import { Button, ButtonGroup } from '@heroui/react';
import { useSession } from 'next-auth/react';

import DashboardHeader from '../../DashboardHeader';

import useDebounce from '@/hooks/useDebounceHook';
import { useGetSupervisorPayrollQuery } from '@/lib/services/supervisor/supervisors.api';
import { PayrollSupervisor } from '@/types/supervisors.types';
import { PayrollList, PayrollSearch, PayrollSummaryCards } from '../../Payroll';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SupervisorsPayroll = () => {
  const { data: session } = useSession();

  const [search, setSearch] = React.useState('');

  const [showBal, setShowBal] = React.useState<boolean>(false);

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
      {/* <div className="bg-[#F19645] p-4 rounded-lg max-w-[300px]">
        <p className="text-gray-100">Payroll balance</p>
        <h2 className="text-white font-bold text-3xl">
          {showBal ? '₦4,250,000.00' : '******'}
        </h2>
        <div className="flex items-center gap-1">
          <p className="text-gray-100">Available Balance</p>
          <button
            onClick={() => {
              setShowBal(!showBal);
            }}
          >
            {!showBal ? (
              <EyeIcon className="size-4 text-gray-100" />
            ) : (
              <EyeSlashIcon className="size-4 text-gray-100" />
            )}
          </button>
        </div>

        <Button
          // onPress={() => setPayrollTab('transactions')}
          className={'font-semibold mt-4 text-[#F19645] bg-white'}
        >
          Fund Payroll
        </Button>
      </div> */}
      <PayrollSummaryCards
        totalDue={summary.totalDue}
        dueTomorrow={summary.dueTomorrow}
        // paid={summary.paid}
        overdue={summary.overdue}
        totalPayroll={summary.totalPayroll}
      />

      <div className="shadow bg-white dark:bg-black dark:p-0 p-4 rounded-lg flex flex-col gap-10">
        {' '}
        {session?.user.role === 'admin' && (
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <ButtonGroup className="w-auto">
              <Button
                variant={payrollTab === 'transactions' ? 'solid' : 'flat'}
                color={payrollTab === 'transactions' ? 'warning' : 'default'}
                onPress={() => setPayrollTab('transactions')}
                className={
                  payrollTab === 'transactions'
                    ? 'bg-[#F19645] w-full text-white font-semibold'
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
                    ? 'bg-[#F19645] w-full text-white font-semibold'
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
                    ? 'bg-[#F19645] w-full text-white font-semibold'
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
