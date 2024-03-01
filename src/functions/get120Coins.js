import axios from "axios";

async function get120Coins() {
  if(localStorage.getItem("allCoins") && localStorage.getItem("allCoins").length > 0) {
    console.log("~~~~~fetched 120 coins from local storage~~~")
    return JSON.parse(localStorage.getItem("allCoins"));
  }
  try {
    console.log("~~~~~~~ fetch 120 coins Api ~~~~~~~");
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 120,
          page: 1,
          sparkline: false,
          locale: "en",
        },
      }
    );
    // ! using Fetch
    // const response = await fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?" +
    //     new URLSearchParams({
    //       vs_currency: "usd",
    //       order: "market_cap_desc",
    //       per_page: 2,
    //       page: 1,
    //       sparkline: false,
    //       locale: "en",
    //     })
    // );
    // const data = await response.json();
    localStorage.setItem("allCoins", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    // Handle the error here, you can log it or throw a custom error
    console.error("Error fetching 120 coins:", error);
    throw new Error("Failed to fetch coins. Please try again later.");
  }
}

export default get120Coins;
