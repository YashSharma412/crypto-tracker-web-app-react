import axios from "axios";

const getCoinDetails = async (id) => {
  console.log("~~~~~~~~~~~~~~~~~ Coin - Detail - Api ~~~~~~~~~~~~~~~~~~~~~")
  try {
    if (!id) {
      throw new Error("Invalid coin id passed to getCoinDetails");
    }

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-LYJnnBSiMXWPBwADnGqRN4Sq`
    );
    if(!response){
      throw new Error("!! failed to fetch coin details for: " + id);
    }
    return response.data;
  } catch (err) {
    console.error("Error fetching coin details:", err.message);
    throw new Error("!! failed to fetch coin details for: " + id, err)
  }
};

export default getCoinDetails;