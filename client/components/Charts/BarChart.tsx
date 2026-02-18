"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};

export default function BarChart({ series }: Props) {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
    },

    plotOptions: {
      bar: {
        // horizontal: true,
        borderRadius: 8,
        barHeight: "55%",
      },
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Residential ",
        "Commercial ",
        "Smart Homes",
        "Shortlets",
        "3D Visualizations",
        "Interior Design",
      ],
      labels: {
        style: {
          colors: "#6b7280", // gray-500
        },
      },
    },

    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        gradientToColors: ["#fb923c"], // orange-400
        stops: [0, 100],
      },
    },

    colors: ["#f97316"], // orange-500

    tooltip: {
      theme: "light",
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={450}
    />
  );
}
