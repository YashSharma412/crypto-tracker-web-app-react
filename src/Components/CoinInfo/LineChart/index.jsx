import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // needed for chart, Dont get rid of it
import PrettifyNumber from "../../../functions/PrettifyNumber";

const LineChart = ({ chartData, chartType, multiAxis }) => {
  
  const OptionsTwoCharts = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    // maintainAspectRatio: true, // Adjust aspect ratio based on container
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time Scale",
          color: "rgba(130, 95, 233, 1)",
          font: {
            family: "Sans-Serif",
            size: 14,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
      },
      y1: {
        display: true,
        type: "linear",
        position: "left",
        title: {
          display: true,
          text:
            (chartType == "prices" && "Prices") ||
            (chartType == "market_caps" && "Market Cap") ||
            (chartType == "total_volumes" && "Total Volume") ||
            (chartType == null && "Price"),
          color: "rgba(130, 95, 233, 1)",
          font: {
            family: "Sans-Serif",
            size: 14,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
        beginAtZero: false, // Ensure that the y-axis starts at zero
        ticks: { // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (chartType == "prices") return "$ " + value.toLocaleString();
            else return PrettifyNumber(value);
          },
        },
      },
      y2: {
        display: true,
        type: "linear",
        position: "right",
        beginAtZero: false, // Ensure that the y-axis starts at zero
        ticks: { // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (chartType == "prices") return "$ " + value.toLocaleString();
            else return PrettifyNumber(value);
          },
        },
      },
    },
  };
  const myOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    // maintainAspectRatio: true, // Adjust aspect ratio based on container
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time Scale",
          color: "rgba(130, 95, 233, 1)",
          font: {
            family: "Sans-Serif",
            size: 14,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
      },
      y1: {
        display: true,
        type: "linear",
        position: "left",
        title: {
          display: true,
          text:
            (chartType == "prices" && "Prices") ||
            (chartType == "market_caps" && "Market Cap") ||
            (chartType == "total_volumes" && "Total Volume") ||
            (chartType == null && "Price"),
          color: "rgba(130, 95, 233, 1)",
          font: {
            family: "Sans-Serif",
            size: 14,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
        beginAtZero: false, // Ensure that the y-axis starts at zero
        ticks: { // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (chartType == "prices") return "$ " + value.toLocaleString();
            else return PrettifyNumber(value);
          },
        },
      },
    },
  };
  return <Line data={chartData} options={multiAxis ? OptionsTwoCharts : myOptions} style={{paddingRight: "1.1rem"}} />;
};

export default LineChart;
