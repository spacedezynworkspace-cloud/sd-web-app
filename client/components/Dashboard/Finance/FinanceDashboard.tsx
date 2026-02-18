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
import { useDisclosure } from '@heroui/modal';
import SupervisorFundsRequest from './SupervisorFundsRequest';

const FinanceDashboard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRequest, setSelectedRequest] = React.useState(null);
  const supervisors = [
    {
      id: 1,
      name: 'Nma Chenedu',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
      role: 'Site Supervisor',
      requestDetails: {
        amount: '$5,000',
        purpose: 'Purchase of construction materials',
        date: '2024-06-15',
        status: 'Pending',
      },
      opened: false,
    },
    {
      id: 2,
      name: 'Adaeze Okafor',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026703d',
      role: 'Project Manager',
      requestDetails: {
        amount: '$10,000',
        purpose: 'Payment for subcontractors',
        date: '2024-06-10',
        status: 'Pending',
      },
      opened: false,
    },
    {
      id: 3,
      name: 'Emeka Nwosu',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026704d',
      role: 'Site Supervisor',
      requestDetails: {
        amount: '$3,000',
        purpose: 'Equipment rental',
        date: '2024-06-12',
        status: 'Rejected',
      },
      opened: true,
    },
    {
      id: 4,
      name: 'Jame Carter',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026704d',
      role: 'Site Supervisor',
      requestDetails: {
        amount: '$3,000',
        purpose: 'Equipment rental',
        date: '2024-06-12',
        status: 'approved',
      },
      opened: true,
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026705d',
      role: 'Site Supervisor',
      requestDetails: {
        amount: '$3,000',
        purpose: 'Equipment rental',
        date: '2024-06-12',
        status: 'approved',
      },
      opened: true,
    },
    {
      id: 6,
      name: 'Michael Okonkwo',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026706d',
      role: 'Project Manager',
      requestDetails: {
        amount: '$3,000',
        purpose: 'Equipment rental',
        date: '2024-06-12',
        status: 'approved',
      },
      opened: true,
    },
    {
      id: 7,
      name: 'David Smith',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026705d',
      role: 'Site Supervisor',
      requestDetails: {
        amount: '$3,000',
        purpose: 'Equipment rental',
        date: '2024-06-12',
        status: 'approved',
      },
      opened: true,
    },
  ];
  const analyticsData = [
    {
      value: `$560,000 revenue`,
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-green-400" />,
      descriptionIcon: <ArrowUpIcon className="h-3 w-3 text-green-400" />,
      descriptionText: '5% increase from last week',
      bgColor: 'bg-green-200/50',
    },

    {
      // value: `₦500M `,
      value: `$320,000 `,
      icon: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
      descriptionIcon: '',
      descriptionText: 'Completed payments',
      bgColor: 'bg-green-200/50',
    },
    {
      value: `$120,000 Expenses`,
      icon: <CircleStackIcon className="h-6 w-6 text-red-400" />,
      descriptionIcon: <ArrowUpIcon className="h-3 w-3 text-red-400" />,
      descriptionText: 'Company expenses',
      bgColor: 'bg-red-200/50',
    },
    {
      value: `$240,000`,
      icon: <BanknotesIcon className="h-6 w-6 text-orange-400" />,
      descriptionIcon: '',
      descriptionText: 'Outstanding payments',
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <DashboardHeader
        title="Finance Dashboard Overview"
        description="Welcome to your finance dashboard overview. Here you can see an overview of your project's financial performance and recent activity."
      />
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
              title="Revenue and Expenses Over Time"
              description="Visualize your revenue and expenses trends over the past year to identify patterns and make informed financial decisions."
            />
          </div>
          <div className="mb-4  dark:text-black">
            {/* Chart  */}
            <LineChart
              series={[
                {
                  name: 'Revenue',
                  data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 120, 110],
                },
                {
                  name: 'Expenses',
                  data: [20, 30, 25, 40, 39, 90, 60, 80, 100, 90, 95, 140],
                },
              ]}
            />
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
                {supervisors.map((supervisor) => (
                  <SupervisorFundsRequest
                    key={supervisor.id}
                    onOpen={onOpen}
                    supervisor={supervisor}
                  />
                ))}
              </div>
              <FinanceRequestDetailsModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="bg-white dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] p-4 w-full">
          <div>
            <DashboardHeader title="Task Overview" description="" />
          </div>
          <div className="mb-4">
            {/* Chart  */}
            <DonutChart
              series={[44, 55, 41, 17, 15]}
              labels={[
                'To do',
                'In progress',
                'Complete',
                'On hold',
                'Cancelled',
              ]}
              colors={['#f97316', '#22c55e', '#3b82f6', '#ef4444', '#8b5cf6']}
            />
          </div>
        </div>
        <div className="bg-white  dark:bg-transparent dark:text-white rounded-lg sm:h-[500px] p-4 w-full">
          <div>
            <DashboardHeader title="Lead Sources" description="" />
          </div>
          <div className="mb-4">
            {/* Chart  */}
            <DonutChart
              series={[44, 55, 41, 17, 15]}
              labels={['Instagram', 'Referrals', 'Website', 'Others']}
              colors={['#000000', '#1f1f1f', '#3f3f46', '#52525b', '#71717a']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceDashboard;
