import React from 'react'
import Chart from "react-apexcharts";

export default function Charts() {
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
                        height: "100%",
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
    <div>
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
  )
}
