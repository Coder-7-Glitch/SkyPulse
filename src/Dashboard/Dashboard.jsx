import React from "react";
import { IoStatsChart } from "react-icons/io5";
import Chart from "react-apexcharts";

export default function Dashboard() {
  const lineOptions = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    },
    stroke: {
      curve: "smooth",
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "100%",
            height: "100%"
          },
        },
      },
    ],
  };

  const lineSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 95, 100, 110],
    },
  ];
  const pieOptions = {
    labels: ["Earning", "Savings", "Expense", "Investments"],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: "100%",
            height: "200px",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const pieSeries = [30.8, 25, 15.5, 26.7];

  return (
    <div className="w-full lg:px-12 ps-[4rem] pe-[1rem] mb-3">
      <div className="pt-3">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text_Color">
            Dashboard
          </h1>
          <p className="text-sm md:text-lg text-[#9d9d9d] mt-1">
            With all of the styling tool options available in today's market
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-3 border border-[#4d4d4d] rounded-md w-full"
            >
              <div className="heading flex items-center justify-between w-full">
                <div className="content">
                  <h1 className="text-xl text-white">Network</h1>
                </div>
                <div className="icon text-2xl bg-icons_Color w-10 h-10 flex items-center justify-center rounded-xl text-text_Color">
                  <IoStatsChart />
                </div>
              </div>
              <div className="description flex items-baseline justify-between mt-1">
                <h1 className="text-3xl md:text-5xl text-text_Color">35M</h1>
                <h1 className="text-lg text-[#42DD75]">+50%</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
          <div className="border border-[#4d4d4d] rounded-md p-4">
            <h2 className="text-2xl md:text-3xl text-text_Color mb-2">
              Total Balance
            </h2>
            <p className="text-sm md:text-md text-[#9d9d9d] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="w-full">
              <Chart
                options={lineOptions}
                series={lineSeries}
                type="line"
                height={350}
                width="100%"
              />
            </div>
          </div>
          <div className="border border-[#4d4d4d] rounded-md p-4">
            <h2 className="text-2xl md:text-3xl text-text_Color mb-2">
              Balance Distribution
            </h2>
            <p className="text-sm md:text-md text-[#9d9d9d] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="w-full">
              <Chart
                options={pieOptions}
                series={pieSeries}
                type="pie"
                height={350}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
