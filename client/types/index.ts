import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ChartFilter = 'week' | 'month' | 'year';

export type SupervisorFundsRequestType = {
  id: number;
  name: string;
  avatar: string;
  role: string;
  requestDetails: {
    amount: string;
    purpose: string;
    projectName: string;
    description: string;
    date: string;
    status: string;
  };
  opened: boolean;
};
