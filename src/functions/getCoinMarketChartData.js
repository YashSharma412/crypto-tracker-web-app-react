import axios from "axios";

async function getCoinMarketChartData(id, days) {
  try {
    if (!id) {
      throw new Error("Invalid coin id passed to getCoinMarketChartData");
    }

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: days,
          interval: "daily",
        },
      }
    );
    // console.log("market Chart response: ", response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching market chart data:", err.message);
    throw err;
  }
}

export default getCoinMarketChartData;
