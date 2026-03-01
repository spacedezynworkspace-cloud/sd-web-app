'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  series: number[];
  labels: string[];
  colors: string[];
};

export default function DonutChart({ series, labels, colors }: Props) {
  const total = series.reduce((a, b) => a + b, 0);

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      toolbar: { show: false },

      // ✨ Animation
      animations: {
        enabled: true,
        // easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },

    labels,

    colors: colors,

    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val.toFixed(1) + '%';
      },
    },

    legend: {
      position: 'bottom',
      fontSize: '14px',
    },

    // 🍩 Donut settings
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,

            name: {
              show: true,
              fontSize: '14px',
            },

            value: {
              show: true,
              fontSize: '16px',
              formatter: function (val: number) {
                return val.toLocaleString();
              },
            },

            total: {
              show: true,
              label: 'Total',
              fontSize: '18px',
              fontWeight: 600,
              formatter: function () {
                return `₦${total.toLocaleString()}`;
              },
            },
          },
        },
      },
    },
  };

  return <Chart options={options} series={series} type="donut" height={350} />;
}
