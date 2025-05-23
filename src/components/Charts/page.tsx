"use client";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import React from "react";

const Chart: React.FC = () => {
  return (
    <>

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
