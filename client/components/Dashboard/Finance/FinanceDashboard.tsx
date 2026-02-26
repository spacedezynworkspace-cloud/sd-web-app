'use client';
import React from 'react';
import DashboardHeader from '../DashboardHeader';
import {
  ArrowTrendingUpIcon,
  ArrowUpIcon,
  BanknotesIcon,
  CheckCircleIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import AnalyticsCard from '@/components/Cards/Dashboard/AnalyticsCard';
import LineChart from '@/components/Charts/LineChart';
import DonutChart from '@/components/Charts/DonutChart';
import FinanceRequestDetailsModal from './FinanceRequestDetailsModal';
import SupervisorFundsRequest from './SupervisorFundsRequest';
import { ExpenseFundsRequestType } from '@/types';
import FinanceRecentTransactions from './FinanceRecentTransactions';
import {
  Button,
  ButtonGroup,
  Spinner,
  Tab,
  Tabs,
  useDisclosure,
} from '@heroui/react';
import {
  useGetFinanceAnalyticsQuery,
  useGetFinanceMonthlyCashFlowQuery,
} from '@/lib/services/finance/finance.api';
import ExpenseRequestFormModal from './Expenses/ExpenseRequestFormModal';
import {
  useGetAllExpensesByTypeQuery,
  useGetAllExpensesQuery,
} from '@/lib/services/expense/expenses.api';
import { formatDate, formatDateAndTime } from '@/utils/dateFormat.utils';
import PaymentRequestFormModal from './Payments/PaymentRequestFormModal';
import ExpensesDashboard from './Expenses/ExpensesDashboard';
import PaymentDashboard from './Payments/PaymentDashboard';

const FinanceDashboard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRequest, setSelectedRequest] =
    React.useState<ExpenseFundsRequestType | null>(null);

  const {
    data: financeDataAnalytics,
    isLoading: isLoadingFinanceDataAnalytics,
  } = useGetFinanceAnalyticsQuery();

  const {
    data: financeLineChartData,
    isLoading: isLoadingFinanceLineChartData,
  } = useGetFinanceMonthlyCashFlowQuery();

  // const { data: financeDataByType, isLoading: isLoadingFinanceDataByType } =
  //   useGetFinanceExpensesByTypeQuery();

  const { data: financeExpensesData, isLoading: isLoadingFinanceExpensesData } =
    useGetAllExpensesQuery({ page: 1, limit: 10 });
  const {
    data: financeExpensesByTypeData,
    isLoading: isLoadingFinanceExpensesByTypeData,
  } = useGetAllExpensesByTypeQuery();

  console.log('financeExpensesByTypeData: ', financeExpensesByTypeData);

  const expensesByTypeChartData = financeExpensesByTypeData?.data || [];

  const expensesByTypeSeries = expensesByTypeChartData.map(
    (item) => item.total
  );
  const expensesByTypeLabels = expensesByTypeChartData.map((item) => item._id);
  const analyticsData = [
    {
      value: `₦${financeDataAnalytics?.data.totalProjectValue.toLocaleString() || 0} revenue`,
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-green-400" />,
      descriptionIcon: <ArrowUpIcon className="h-3 w-3 text-green-400" />,
      descriptionText: '5% increase from last week',
      bgColor: 'bg-green-200/50',
    },

    {
      // value: `₦500M `,
      value: `₦${financeDataAnalytics?.data.totalPayments.toLocaleString() || 0}`,
      icon: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
      descriptionIcon: '',
      descriptionText: 'Completed payments',
      bgColor: 'bg-green-200/50',
    },
    {
      value: `₦${financeDataAnalytics?.data.totalExpenses.toLocaleString() || 0} Expenses`,
      icon: <CircleStackIcon className="h-6 w-6 text-red-400" />,
      descriptionIcon: <ArrowUpIcon className="h-3 w-3 text-red-400" />,
      descriptionText: 'Company expenses',
      bgColor: 'bg-red-200/50',
    },
    {
      value: `₦${financeDataAnalytics?.data.outstanding.toLocaleString() || 0}`,
      icon: <BanknotesIcon className="h-6 w-6 text-orange-400" />,
      descriptionIcon: '',
      descriptionText: 'Outstanding payments',
    },
  ];

  const expenses: ExpenseFundsRequestType[] = financeExpensesData?.data.length
    ? financeExpensesData?.data.map((expense, index) => {
        return {
          id: expense._id || '',
          name: expense.requestedBy,
          avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
          role: 'Site Supervisor',
          requestDetails: {
            amount: expense.amount,
            purpose: expense.type,
            description: expense.description,
            date: formatDate(`${expense.requestedDate}`),
            projectName: 'Project A',
            createdAt: formatDateAndTime(`${expense.createdAt}`),
            status: expense.status,
          },
          opened: false,
        };
      })
    : [];

  const [financeTab, setFilter] = React.useState<
    'expenses' | 'payments' | 'overview'
  >('overview');

  const filters: {
    label: string;
    value: 'expenses' | 'payments' | 'overview';
  }[] = [
    { label: 'Overview', value: 'overview' },
    { label: 'Expenses', value: 'expenses' },
    { label: 'Payments', value: 'payments' },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="bg-white dark:bg-transparent dark:p-0 shadow rounded-lg p-4">
        <div className="flex sm:flex-row flex-col sm:justify-between gap-4 sm:gap-0 items-center sm:mb-0 mb-8">
          <DashboardHeader
            title="Finance Dashboard Overview"
            description="Welcome to your finance dashboard overview. Here you can see an overview of your project's financial performance and recent activity."
          />

          {financeTab === 'expenses' && <ExpenseRequestFormModal />}
          {financeTab === 'payments' && <PaymentRequestFormModal />}
        </div>
        <div className="">
          <ButtonGroup>
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={financeTab === filter.value ? 'solid' : 'flat'}
                className={
                  financeTab === filter.value
                    ? 'bg-orange-400 text-white font-semibold'
                    : ''
                }
                onPress={() => setFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      {financeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Analytics Card */}
            {analyticsData.map((data, index) => (
              <AnalyticsCard key={index} data={data} />
            ))}
          </div>
          {/* Charts  */}
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="bg-white dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] h-[570px] w-full">
              <div className=" dark:p-0 p-4">
                <DashboardHeader
                  title="Net cash flow Over Time"
                  description="Visualize your revenue and expenses trends over the past year to identify patterns and make informed financial decisions."
                />
              </div>
              <div className="mb-4 h-full dark:text-black">
                {isLoadingFinanceLineChartData && (
                  <div className="w-full sm-mt-32 -mt-40 h-full flex items-center justify-center">
                    <Spinner
                      label="Chart loading..."
                      size="sm"
                      variant="spinner"
                      color="warning"
                    />
                  </div>
                )}
                {/* Chart  */}
                {!isLoadingFinanceLineChartData && (
                  <LineChart
                    series={[
                      {
                        name: 'Revenue',
                        data: financeLineChartData?.data.payments || [],
                      },
                      {
                        name: 'Expenses',
                        data: financeLineChartData?.data.expenses || [],
                      },
                    ]}
                  />
                )}
              </div>
            </div>
            <div>
              <div className="bg-white  dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] h-[550px] p-4 w-full">
                <DashboardHeader
                  title="Supervisors Request"
                  description="Track supervisors requests received over time to manage expenses."
                />
                <div className="mb-4">
                  <div className="flex flex-col gap-2 overflow-y-scroll h-[350px]">
                    {isLoadingFinanceExpensesData && (
                      <div className="w-full h-full flex items-center justify-center">
                        <Spinner
                          label="Funds request loading..."
                          size="sm"
                          variant="spinner"
                          color="warning"
                        />
                      </div>
                    )}
                    {expenses.map((expense) => (
                      <SupervisorFundsRequest
                        key={expense.id}
                        onOpen={onOpen}
                        expense={expense}
                        setSelectedRequest={setSelectedRequest}
                      />
                    ))}
                  </div>
                  <FinanceRequestDetailsModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    expense={selectedRequest}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="bg-white dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] p-4 w-full">
              <div>
                <DashboardHeader
                  title="Recent Transactions"
                  description="View your recent financial transactions and their status."
                />
              </div>
              <div className="mb-4 sm:h-[400px]">
                <FinanceRecentTransactions />
              </div>
            </div>
            <div className="bg-white  dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] p-4 w-full">
              <div>
                <DashboardHeader
                  title="Expense Categories"
                  description="Track your expenses across different categories."
                />
              </div>
              <div className="mb-4">
                {isLoadingFinanceExpensesByTypeData && (
                  <div className="w-full h-full sm:mt-36 mt-40 flex items-center justify-center">
                    <Spinner
                      label="Expenses by category Loading..."
                      size="sm"
                      variant="spinner"
                      color="warning"
                    />
                  </div>
                )}
                {/* Chart  */}
                {!isLoadingFinanceExpensesByTypeData && (
                  <DonutChart
                    series={expensesByTypeSeries || [0]}
                    labels={expensesByTypeLabels || ['No data']}
                    colors={[
                      '#F97316', // Electrical - Brand Orange
                      '#F59E0B', // Wood - Amber
                      '#16A34A', // Tools - Green
                      '#0EA5E9', // Materials - Sky Blue
                      '#6366F1', // Labor - Indigo
                      '#A855F7', // Logistics - Soft Purple
                    ]}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {financeTab === 'expenses' && <ExpensesDashboard />}
      {financeTab === 'payments' && <PaymentDashboard />}
    </section>
  );
};

export default FinanceDashboard;
