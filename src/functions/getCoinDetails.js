import axios from "axios";

const getCoinDetails = async (id) => {
  try {
    if (!id) {
      throw new Error("Invalid coin id passed to getCoinDetails");
    }

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
    // ShortenCoinDetailsData(response.data, setCoinData);
  } catch (err) {
    console.error("Error fetching coin details:", err.message);
    throw err;
  }

};

export default getCoinDetails;