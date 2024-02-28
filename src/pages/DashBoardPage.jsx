import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/Dashboard/TabsComponent";
import axios from "axios";
import testCoins from "../assets/testCoins";
import Search from "../Components/Dashboard/Search";
import PaginationNav from "../Components/Dashboard/PaginationNav";
import BackToTop from "../Components/Common/BackToTop";

const DashBoardPage = () => {
  const [coins, setCoins] = useState([]);
  // const [coins, setCoins] = useState(() => testCoins);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filteredCoins, setFilteredCoins] = useState([]);
  // useEffect(()=>{
  //   setPaginatedCoins(testCoins.slice(0,12))
  // }, [])
  
  const handlePageChange = (event, value) => {
    setPage(value);

    var initialCount = (value - 1) * 12;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 12));
  };

  var filteredCoins = coins.filter(
    (myCoin) =>
      myCoin.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      myCoin.symbol.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getCoinsFromApi = async function () {
    console.log("-----fetch Api ran-----");
    try {
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
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0,12))
      // setFilteredCoins(response.data);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
      getCoinsFromApi();
      setLoading(true)
    }, 500)
  }, []);

  // useEffect(() => {
  //   if (searchQuery.trim() === "") {
  //     setFilteredCoins(coins);
  //   } else {
  //     setFilteredCoins(
  //       coins.filter((coin) =>
  //         coin.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  //       )
  //     );
  //   }
  // }, [searchQuery]);

  // useEffect(()=>{
  //   console.log("filteredCoins: ", filteredCoins)
  // }, [filteredCoins])

  // // ! Printing the coins state
  // useEffect(() => {
  //   if (coins.length > 0) {
  //     console.log(coins);
  //   }
  // }, [coins]);

  return (
    <div>
      <Header />
      <BackToTop />
      <div style={{ paddingBottom: "0.5rem" }}></div>
      <section className="dashBoard__main" style={{position: "relative"}}>
            <Search searchQuery={searchQuery} onSearchChange={onSearchChange} />
            <TabsComponent loading={loading} coins={searchQuery ? filteredCoins : paginatedCoins} />
            {
              !searchQuery && !loading && 
              <PaginationNav page={page} handlePageChange={handlePageChange}/>
            } 
      </section>
    </div>
  );
};

export default DashBoardPage;
