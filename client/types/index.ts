import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ChartFilter = 'week' | 'month' | 'year';

export type ExpenseFundsRequestType = {
  id: string;
  name: string;
  // avatar: string;
  role: string;
  requestDetails: {
    amount: number;
    purpose: string;
    projectName: string;
    description: string;
    date: string;
    createdAt: string;
    status: 'pending' | 'approved' | 'declined';
  };
  opened: boolean;
};
