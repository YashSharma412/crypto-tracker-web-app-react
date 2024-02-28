import PrettifyDateData from "./PrettifyDateData";

function settingCoinChartData(setChartData, pricesData){
    setChartData({
        labels: pricesData.map((pair) => PrettifyDateData(pair[0])),
        datasets: [
          {
            label: 'Prices',
            data: pricesData.map((pair) => pair[1]),
            borderColor: "rgba(127, 206, 148, 1)",
            backgroundColor: "rgba(168, 255, 192, 0.2)",
            borderWidth: 2,
            pointRadius: 1,
            pointHoverRadius: 2,
            fill: true,
            fillColor: "rgba(168, 255, 192, 0.2)",
            tension: 0.25,
            // yAxisID: "y",
          }
        ]
      })
}

export default settingCoinChartData;