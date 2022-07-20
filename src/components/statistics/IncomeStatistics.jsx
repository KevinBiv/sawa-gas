import React, { useState } from "react";
import Chart from "chart.js/auto";
// import { Chart, registerables} from 'chart.js';
// Chart.register(...registerables);
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Shimmers from "../loaders/Shimmers";
import WeeklyFilter from "../filters/weeklyFilter";
import moment from "moment";
function IncomeStatistics() {
  const { isFetchingIncomesStatistics, incomesStatistics } = useSelector(
    ({ Statistics }) => Statistics
  );
  const [weeklyDate, setWeeklyDate] = useState({
    startDate: new Date(),
    weekRange: {
      from: moment().startOf("isoWeek").toDate(),
      to: moment().endOf("isoWeek").toDate(),
    },
    weekDays: {},
    datePickerIsOpen: false,
  });
  return (
    <div className="col-span-3">
      <h2 className="font-bold text-darkblue text-base my-2">
        Income Statistics
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {isFetchingIncomesStatistics ? (
          <Shimmers height="300px" width="400px" className="overflow-hidden" />
        ) : (
          <div className="">
            <div className=" flex">
              <WeeklyFilter
                weeklyDate={weeklyDate}
                setweeklyDate={setWeeklyDate}
              />
              <div></div>
            </div>
            <div>
              <Line
                data={{
                  labels: incomesStatistics?.labels,
                  datasets: [
                    {
                      label: "Income statistics",
                      data: incomesStatistics?.income_numbers,
                      display: false,
                      backgroundColor: "rgba(52, 190, 185, 0.15)",
                      tension: 0.3,
                      //pointRadius:0,
                      fill: true,
                      borderColor: "#34BEB9",
                      color: "#34BEB9",
                    },
                  ],
                }}
                height={300}
                width={400}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    y: {
                      display: true,
                      beginAtZero: true,
                      min: 0,
                      suggestedMax: 1000,
                      grid: {
                        display: true,
                      },
                      ticks: {
                        display: true,
                        callback: function (value, index, ticks) {
                          return value + "";
                        },
                      },
                    },
                    x: {
                      display: true,
                      grid: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    title: {
                      display: false,
                      text: "Income",
                      align: "start",
                      color: "#6b7280",
                      font: { size: "12px", weight: "normal" },
                    },
                    legend: {
                      display: false,
                      position: "top",
                      labels: {
                        color: "rgba(64, 137, 237, 1)",
                      },
                      title: {
                        text: "Students",
                        hidden: false,
                      },
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          var label = context.label;
                          var currentValue = context.raw;

                          return currentValue + " K";
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
        {isFetchingIncomesStatistics ? (
          <Shimmers height="300px" width="400px" className="overflow-hidden" />
        ) : (
          <div className="relative">
            <div className="absolute top-10 left-1/3 ">
              <p className=" text-darkblue font-bold text-sm">Services Usage</p>
              <p className=" text-gray-500 text-xs text-center ">
                My Team’s Sawa Services Consuption Rates
              </p>
            </div>
            <div>
              <Bar
                data={{
                  labels: incomesStatistics?.labels,
                  datasets: [
                    {
                      label: "Income statistics",
                      //data: [12, 19, 3, 5, 2, 3,6],
                      data: incomesStatistics?.income_numbers,
                      display: false,
                      backgroundColor: "rgba(46, 139, 192, 1)",
                      tension: 0.3,
                      //pointRadius:0,
                      // fill: true,
                      borderColor: "rgba(255, 255, 255, 1)",
                      color: "rgba(64, 137, 237, 1)",
                    },
                  ],
                }}
                height={300}
                width={400}
                style={{ background: "rgba(52, 190, 185, 1)" }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    y: {
                      display: false,
                      beginAtZero: true,
                      min: 0,
                      suggestedMax: 10,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                        callback: function (value, index, ticks) {
                          return value + "";
                        },
                      },
                      title: {
                        display: false,
                        color: "rgba(64, 137, 237, 1)",
                        text: "Services",
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    title: {
                      display: false,
                      text: "Services",
                      align: "start",
                      color: "#6b7280",
                      font: { size: "12px", weight: "normal" },
                    },

                    legend: {
                      display: false,
                      position: "center",
                      labels: {
                        color: ["rgba(255, 255, 255, 1)"],
                        boxHeight: 0,
                      },
                      title: {
                        text: incomesStatistics?.total_incomes,
                        hidden: false,
                      },
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          var label = context.label;
                          var currentValue = context.raw;

                          return currentValue + " services";
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IncomeStatistics;
