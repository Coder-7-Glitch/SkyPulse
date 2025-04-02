import React from "react";
import Chart from "react-apexcharts";

export default function Charts() {
  const lineOptions = {
    chart: {
      id: "balance-trend",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Earning", "Saving", "Expense", "Investment"],
      title: {
        text: "Financial Categories",
        style: {
          fontSize: "18px",
          fontWeight: "semibold",
          color: "#6DD9D3",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      title: {
        text: "Amount (in Millions)",
        style: {
          fontSize: "18px",
          fontWeight: "semibold",
          color: "#6DD9D3",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
      min: 0,
      max: 14,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#1E90FF"],
    markers: {
      size: 5,
      colors: ["#1E90FF"],
      strokeWidth: 2,
    },
    grid: {
      borderColor: "#444",
      strokeDashArray: 5,
    },
    tooltip: {
      theme: "dark",
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "100%",
            height: "270px",
          },
        },
      },
    ],
  };

  const lineSeries = [
    {
      name: "Total Balance",
      data: [13, 5, 4, 4],
    },
  ];

  const pieOptions = {
    labels: ["Earning", "Savings", "Expense", "Investments"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#6DD9D3",
        style: {
          fontSize: "18px",
          fontWeight: 600,
        },
      },
      markers: {
        width: 16,
        height: 16,
        offsetX: -5,
      },
    },
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

  const pieSeries = [13, 5, 4, 4];

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
        <div className="border border-[#4d4d4d] rounded-2xl p-4">
          <h2 className="text-2xl md:text-3xl text-text_Color mb-2">
            Total Balance
          </h2>
          <p className="text-sm md:text-md text-[#9d9d9d] mb-4">
            Total balance reflects assets, expenses, and net worth.
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
        <div className="border border-[#4d4d4d] rounded-2xl p-4">
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
  );
}
