import React, { useState } from "react";
import Chart from "chart.js/auto";
// import { Chart, registerables} from 'chart.js';
// Chart.register(...registerables);
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Shimmers from "../loaders/Shimmers";
import WeeklyFilter from "../filters/weeklyFilter";
import moment from "moment";
function ServiceUsage() {
  const {
    isFetchingIncomesStatistics,
    isFetchingPatientsStatistics,
    incomesStatistics,
    patientsStatistics,
  } = useSelector(({ Statistics }) => Statistics);
  const [weeklyDate, setWeeklyDate] = useState({
    startDate: new Date(),
    weekRange: {
      from: moment().startOf("isoWeek").toDate(),
      to: moment().endOf("isoWeek").toDate(),
    },
    weekDays: {},
    datePickerIsOpen: false,
  });

  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(1, "rgba(46, 139, 192, 1)");
      gradient.addColorStop(0.5, "rgba(46, 139, 192, 1)");
      gradient.addColorStop(0, "rgba(46, 139, 192, 0)");
    }

    return gradient;
  }
  return (
    <div className="col-span-3">
      <h2 className="font-bold text-darkblue text-lg mt-2 mb-3.5">
        Services Usage
      </h2>
      {isFetchingPatientsStatistics ? (
        <Shimmers height="300px" width="400px" className="overflow-hidden" />
      ) : (
        <div className="relative bg-white space-y-6 px-3.5 py-10 rounded-3">
          <div className=" ">
            <p className="px-3 text-lightergray font-semibold text-xs ">
              My Team’s Sawa Services Consuption Rates
            </p>
          </div>
          <div>
            <Bar
              id="canvas"
              data={{
                labels: incomesStatistics?.labels,
                datasets: [
                  {
                    label: "Income statistics",
                    //data: [12, 19, 3, 5, 2, 3,6],
                    data: incomesStatistics?.income_numbers,
                    display: false,
                    // backgroundColor: "rgba(46, 139, 192, 1)",
                    // backgroundColor: gradient,
                    backgroundColor: function (context) {
                      const chart = context.chart;
                      const { ctx, chartArea } = chart;

                      if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                      }
                      return getGradient(ctx, chartArea);
                    },
                    tension: 0.3,
                    //pointRadius:0,
                    // fill: true,
                    borderColor: "rgba(255, 255, 255, 1)",
                    color: "rgba(64, 137, 237, 1)",
                  },
                ],
              }}
              height={350}
              width={400}
              style={{
                background: "white",
                background: " #FFFFFF",
                padding: "10px",
                borderRadius: "8px",
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                  y: {
                    display: true,
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    suggestedMax: 10,
                    grid: {
                      display: true,
                    },
                    ticks: {
                      display: true,
                      color: "#8694AF",
                      callback: function (value, index, ticks) {
                        return value + "%";
                      },
                    },
                    title: {
                      display: false,
                      color: "rgba(64, 137, 237, 1)",
                      text: "Patients",
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "#003F6B",
                    },
                  },
                },
                plugins: {
                  title: {
                    display: false,
                    text: "Patients",
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
                      text: patientsStatistics?.total_patients,
                      hidden: false,
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        var label = context.label;
                        var currentValue = context.raw;

                        return currentValue + " % services";
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
  );
}

export default ServiceUsage;
