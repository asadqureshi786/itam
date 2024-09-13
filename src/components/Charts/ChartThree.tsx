import { ApexOptions } from "apexcharts";
import React, { useState } from "react";


import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#191D26", "#1B4DFF", "#191D26"],
  labels: ["Desktop", "Tablet", "Mobile"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  stroke:{
    colors:['#000']
   },
  dataLabels: {
    enabled: false,
  },
  
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ]
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [15, 70, 15],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [15, 15, 70],
    }));
  };
  handleReset;

  return (
    <>
  <div id="chartThree" className="">
          <Chart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>

      <div className="asset_overview_chart w-100">
        <div className="items assigned">
          <div className="d-flex w-full gap-2 align-items-center">
            <span className="mr-2 round_boxes assigned round_color block h-3 w-full max-w-3 rounded-sm	 "></span>
            <p className="d-flex w-100 mb-0 justify-content-between text-sm font-medium text-black dark:text-white">
              <span className="text-white text" > Assigned </span>
              <span className="text-white text" > 65% </span>
            </p>
          </div>
        </div>
        <div className="items on_maintenance">
          <div className="d-flex w-full gap-2 align-items-center">
            <span className="mr-2 round_boxes maintenance round_color block h-3 w-full max-w-3 rounded-sm	 "></span>
            <p className="d-flex w-100 mb-0 justify-content-between text-sm font-medium text-black dark:text-white">
              <span className="text-white text" > On Maintenance </span>
              <span className="text-white text" > 34% </span>
            </p>
          </div>
        </div>
        <div className="items unassigned">
          <div className="d-flex w-full gap-2 align-items-center">
            <span className="mr-2 round_boxes Unassigned_boxes round_color block h-3 w-full max-w-3 rounded-sm	 "></span>
            <p className="d-flex mb-0 w-100 justify-content-between text-sm font-medium text-black dark:text-white">
              <span className="text-white text" > Unassigned </span>
              <span className="text-white text" > 45% </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartThree;
