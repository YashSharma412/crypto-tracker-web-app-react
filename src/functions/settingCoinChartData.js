import PrettifyDateData from "./PrettifyDateData";

function settingCoinChartData(setChartData, chart1Data, chart1Label, chart2Data, chart2Label) {
  if (chart2Data) {
    setChartData({
      labels: chart1Data.map((pair) => PrettifyDateData(pair[0])),
      datasets: [
        {
          label: chart1Label ? chart1Label : "Coin 1",
          data: chart1Data.map((pair) => pair[1]),
          borderColor: "rgba(127, 206, 148, 1)",
          backgroundColor: "rgba(168, 255, 192, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
          pointHoverRadius: 2,
          fill: false,
          fillColor: "rgba(168, 255, 192, 0.2)",
          tension: 0.25,
          yAxisID: "y1",
        },
        {
          label: chart2Label ? chart2Label : "Coin 2",
          data: chart2Data.map((pair) => pair[1]),
          borderColor: "rgba(255, 175, 215, 1)",
          backgroundColor: "rgba(255, 175, 215, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
          pointHoverRadius: 2,
          fill: false,
          fillColor: "rgba(115, 198, 205, 0.2)",
          tension: 0.25,
          yAxisID: "y2",
        },
      ],
    });
  } else {
    setChartData({
      labels: chart1Data.map((pair) => PrettifyDateData(pair[0])),
      datasets: [
        {
          label: chart1Label ? chart1Label : "Coin",
          data: chart1Data.map((pair) => pair[1]),
          borderColor: "rgba(127, 206, 148, 1)",
          backgroundColor: "rgba(168, 255, 192, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
          pointHoverRadius: 2,
          fill: true,
          fillColor: "rgba(168, 255, 192, 0.2)",
          tension: 0.25,
          yAxisID: "y1",
        },
      ],
    });
  }
}

export default settingCoinChartData;