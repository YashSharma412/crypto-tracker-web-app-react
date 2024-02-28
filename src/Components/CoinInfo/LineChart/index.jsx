import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto"; // needed for chart, Dont get rid of it

const LineChart = ({ chartData, priceType, multiAxis }) => {
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
                beginAtZero: true // Ensure that the y-axis starts at zero
                // Add other yAxes configuration options here if needed
              }
            // yAxes: [{
            //     ticks: {
            //         beginAtZero: true
            //     }
            // }]
        }
    };

    return <Line data={chartData} options={options} />
}

export default LineChart