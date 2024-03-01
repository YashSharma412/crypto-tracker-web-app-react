import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
// Components
import Loader from "../Components/Common/Loader";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/ComparePage/SelectCoins";
import SelectDays from "../Components/CoinInfo/SelectDays";
import ListCoinRow from "../Components/Dashboard/ListCoinRow";
import CoinDescription from "../Components/CoinInfo/CoinDecription";
import ChartTypeToggle from "../Components/CoinInfo/ChartTypeToggle";
import LineChart from "../Components/CoinInfo/LineChart";

// helper functions 
import getCoinDetails from "../functions/getCoinDetails";
import ShortenCoinDetailsData from "../functions/ShortenCoinDetailsData";
import getCoinMarketChartData from "../functions/getCoinMarketChartData";
import settingCoinChartData from "../functions/settingCoinChartData";

const ComparePage = () => {

  const [chartLoading, setChartLoading] = useState(false);  // loaders
  const [loading, setLoading] = useState(true);        
// 
  const [cryptoOne, setCryptoOne] = useState("bitcoin"); // ids
  const [cryptoTwo, setCryptoTwo] = useState("ethereum");
// 
  const [cryptoOneData, setCryptoOneData] = useState(null); // coin data for ids for coin descriptions
  const [cryptoTwoData, setCryptoTwoData] = useState(null);
// 
  const [chartData, setChartData] = useState(null);
  // const [chart2Data, setChart2Data] = useState(null);
  const [market1Data, setMarket1Data] = useState(null);
  const [market2Data, setMarket2Data] = useState(null);
  const [days, setDays] = useState(30);

// ! fetch and pass list of all coins to the select coins component on page load.
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data for Bitcoin and Ethereum
      await Promise.all([
        getCoinData("bitcoin", setCryptoOneData, setMarket2Data),
        getCoinData("ethereum", setCryptoTwoData, setMarket1Data)
      ]);
      
      // Delay before fetching the list data
      // await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Implement error handling and retry logic here if needed
    }
  }


// !   /~~~~~~~~~~~~~~~~~~

  useEffect(() => {
    renderChart()
  }, [market1Data, market2Data]);

  async function renderChart(){
    setChartLoading(true);
    try {
      if (market1Data && market2Data) {
        await settingCoinChartData(setChartData,market1Data.prices, market2Data.prices);
      } 
    } catch (err) {
      console.log("error caught in 120 coins fetch: ",err );
    } finally {
      setChartLoading(false);
    }
  }

  useEffect(() => {
    if (days) {
      console.log("days: ", days);
    }
  }, [days]);

  // Event functions

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  function handleCoinSelect(event, crypto2) {

    if (crypto2){ // when coin two is changed
      
        setLoading(true);
        setCryptoTwo(event.target.value)
        getCoinData(event.target.value, setCryptoTwoData, setMarket2Data)
      
    }
    else { // when coin one is changed
      
        setLoading(true)
        setCryptoOne(event.target.value)
        getCoinData(event.target.value, setCryptoOneData, setMarket1Data)
      
    };
  }

  useEffect(()=>{
    if (cryptoOneData) console.log("details of 1st coin: ", cryptoOneData);
  }, [cryptoOneData])

  useEffect(()=>{
    if (cryptoTwoData) console.log("details of 2nd coin: ", cryptoTwoData);
  }, [cryptoTwoData])

  async function getCoinData(id, setCoinFn, setMarketDataFn) {
    try {
      const coinDataFetched = await getCoinDetails(id); // async fetch data function
      if (coinDataFetched) {
        ShortenCoinDetailsData(coinDataFetched, setCoinFn);
        const marketChartDataResponse = await getCoinMarketChartData(id, days); // async fetch data function
        if (marketChartDataResponse) {
          console.log("market chart data response for" + id + ": ", marketChartDataResponse);
          setMarketDataFn(marketChartDataResponse);
          // const pricesData = marketChartDataResponse.prices;
          // await settingCoinChartData(setChartData, pricesData); // helper function to set chart data
        }
      }
    } catch (error) {
      console.log("Error fetching " + id +"coin data: ", error);
    } finally {
      setLoading(false);
    } 
  }

  return loading && totalCoinsList.length === 0 ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.75rem 1rem 1.5rem 1rem",
        }}
      >
        <SelectCoins
          totalCoinsList={totalCoinsList}
          handleCoinSelect={handleCoinSelect}
          cryptoOne={cryptoOne}
          cryptoTwo={cryptoTwo}
        />
        <SelectDays daysCount={days} handleChange={handleDaysChange} />
      </div>
      {
        loading && !cryptoOneData && !cryptoTwoData ? <Loader /> : <>
          <table className="listCoins__table">
            <tbody>
              {cryptoOneData &&  <ListCoinRow coin={cryptoOneData} idx={1} coinId={cryptoOne} />}
              {cryptoTwoData &&  <ListCoinRow coin={cryptoTwoData} idx={2} coinId={cryptoTwo} />}
            </tbody>
          </table>
          <motion.section 
                className="info__wrapper" 
                style={{ minHeight: "30dvh" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 2 * 0.2 }}
              >
                {/* <div className="chart__options">
                  <ChartTypeToggle
                    chartType={chartType}
                    handleChartTypeChange={handleChartTypeChange}
                  />
                </div> */}
                {chartData && !chartLoading ? (
                  <LineChart chartData={chartData} chartType={"prices"} multiAxis={true} />
                ) : (
                  <Loader />
                )}
              </motion.section>
          <div className="coin__descriptions">
            {cryptoOneData && <CoinDescription heading={cryptoOneData.name} description={cryptoOneData.desc} />}
            {cryptoTwoData &&  <CoinDescription heading={cryptoTwoData.name} description={cryptoTwoData.desc} />}
          </div>
        </>
      }

    </div>
  );
};

export default ComparePage;
