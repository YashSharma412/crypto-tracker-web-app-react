import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/Dashboard/TabsComponent";
import axios from "axios";
import Search from "../Components/Dashboard/Search";
import PaginationNav from "../Components/Dashboard/PaginationNav";
import BackToTop from "../Components/Common/BackToTop";
import get120Coins from "../functions/get120Coins";

const DashBoardPage = () => {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);
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
    try {
      const myCoins = await get120Coins();
      if (myCoins) {
        setCoins(myCoins);
        setPaginatedCoins(myCoins.slice(0,12))
      } else {
        throw new Error("Failed to fetch coins")
      }
      
    } catch (err) {
      console.log("error caught in 120 coins fetch: ",err );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // setLoading(true)
    setTimeout(()=>{
      getCoinsFromApi();
    }, 700)
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
      {/* <Header /> */}
      <BackToTop />
      <div style={{ paddingBottom: "0.5rem" }}></div>
      <section className="dashBoard__main" style={{position: "relative"}}>
            <Search searchQuery={searchQuery} onSearchChange={onSearchChange} />
            <TabsComponent loading={loading} coins={searchQuery ? filteredCoins : paginatedCoins} />
            {
              !searchQuery && !loading && coins && coins.length > 0 &&
              <PaginationNav page={page} handlePageChange={handlePageChange}/>
            } 
      </section>
    </div>
  );
};

export default DashBoardPage;
