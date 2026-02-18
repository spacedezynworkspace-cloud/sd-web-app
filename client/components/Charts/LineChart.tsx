"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// 👇 Disable SSR
const Chart = dynamic(() => import("react-apexcharts"), {
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
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#f97316"], // orange-500
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    grid: {
      borderColor: "#e5e7eb",
    },
    dataLabels: {
      enabled: false,
    },
  };



  return <Chart options={options} series={series} type="area" height={350} />;
}
