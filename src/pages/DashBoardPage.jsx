import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/Dashboard/TabsComponent";
import axios from "axios";
import testCoins from "../assets/testCoins";

const DashBoardPage = () => {
  // const [coins, setCoins] = useState([]);
  const [coins, setCoins] = useState(() => testCoins);
  const getCoinsFromApi = async function () {
    console.log("-----fetch Api ran-----");
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
            locale: "en",
          },
        }
      );
      setCoins(response.data);
      // ! using Fetch
      // console.log(response.data);
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
      // setCoins(data);
      // console.log(data);
    } catch (err) {
      console.log("error cauth in catch, ", err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    // getCoinsFromApi();
  }, []);

  // ! Printing the coins state
  useEffect(() => {
    if (coins.length > 0) {
      console.log(coins);
    }
  }, [coins]);

  return (
    <div>
      <Header />
      <div style={{ paddingBottom: "1.5rem" }}></div>
      <TabsComponent coins={coins} />
    </div>
  );
};

export default DashBoardPage;
