'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// 👇 Disable SSR
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};

export default function LineChart({ series }: Props) {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: [
      ' #008000', // orange
      '#ff0000', // red
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: '#6b7280', // gray-500
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          return `₦${(value / 1000000).toLocaleString()}M`;
        },
        style: {
          colors: '#6b7280',
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => {
          return `₦${value.toLocaleString()}`;
        },
      },
    },
    grid: {
      borderColor: '#e5e7eb',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'right',
    },
  };

  return <Chart options={options} series={series} type="area" height={350} />;
}
