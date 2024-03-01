import axios from "axios";

async function getCoinMarketChartData(id, days) {
  console.log("~~~~~~~~~~~~~~~~~~ Coin Market Chart Data Api ~~~~~~~~~~~~~~~~~~~~~")
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
    if(!response) throw new Error("failed to get Chart data for coin " + id);
    return response.data;
  } catch (err) {
    console.error("Error fetching market chart data:", err.message);
    throw err;
  }
}

export default getCoinMarketChartData;
