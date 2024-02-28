import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto"; // needed for chart, Dont get rid of it
import PrettifyNumber from '../../../functions/PrettifyNumber';

const LineChart = ({ chartData, chartType = "prices", multiAxis }) => {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        maintainAspectRatio: true, // Adjust aspect ratio based on container     
        scales: {
            y: {
                beginAtZero: false, // Ensure that the y-axis starts at zero
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(chartType == "prices") return '$ ' + value.toLocaleString();
                        else return PrettifyNumber(value);
                    }
                }
            }
        }
    };

    return <Line data={chartData} options={options} />
}

export default LineChart