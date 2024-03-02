import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

// ! components import
import Loader from "../Components/Common/Loader";
import SelectCoins from "../Components/ComparePage/SelectCoins";
import SelectDays from "../Components/CoinInfo/SelectDays";
import ListCoinRow from "../Components/Dashboard/ListCoinRow";
import ChartTypeToggle from "../Components/CoinInfo/ChartTypeToggle";
import LineChart from "../Components/CoinInfo/LineChart";
import CoinDescription from "../Components/CoinInfo/CoinDecription";
//!  helper function imports
import getCoinDetails from "../functions/getCoinDetails";
import ShortenCoinDetailsData from "../functions/ShortenCoinDetailsData";
import settingCoinChartData from "../functions/settingCoinChartData";
import getCoinMarketChartData from "../functions/getCoinMarketChartData";

const CompareCoinsPage = () => {
  const [loading, setLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(false);
  const [days, setDays] = useState(90);
  const [chartType, setChartType] = useState("prices");
  const [chartData, setChartData] = useState(null);
  //
  const [cryptoId1, setCrptoId1] = useState("bitcoin"); // ids
  const [cryptoId2, setCryptoId2] = useState("ethereum");
  //
  const [crypto1Data, setCrypto1Data] = useState(null);
  const [crypto2Data, setCrypto2Data] = useState(null);
  // 
  const [chartDataCoin1, setChartDataCoin1] = useState(null);
  const [chartDataCoin2, setChartDataCoin2] = useState(null);
  // ! On Page Load:
  
  useEffect(() => {
    setTimeout(() => {
      getCoinsComparePageData();
    }, 700);
  }, []);

  async function getCoinsComparePageData(){
    try {  // fetching coins data
      const coin1data = await getCoinDetails(cryptoId1);
      const coin2data = await getCoinDetails(cryptoId2);

      if(coin1data && coin2data){
        ShortenCoinDetailsData(coin1data, setCrypto1Data)
        ShortenCoinDetailsData(coin2data, setCrypto2Data)
        const dataChart1 = await getCoinMarketChartData(cryptoId1, days)
        const dataChart2 = await getCoinMarketChartData(cryptoId2, days)
        if (dataChart1 && dataChart2) {
          setChartDataCoin1(dataChart1);
          setChartDataCoin2(dataChart2);
          settingCoinChartData(setChartData, dataChart1[chartType], cryptoId1, dataChart2[chartType], cryptoId2);
        }
      }
    } catch (e){
      console.error("Error getting Compare Page Initial Data", e);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(()=>{
  //   if (chartData) {
  //     console.log("chartData", chartData);
  //   }
  // }, [chartData])

//!   Component change functions
//! 1.) handle coin selection
  
  async function handleCoinSelect(event, coin2) {
    if (coin2) {
      //  coin 2 is to be updated
      setLoading(true);
      setCryptoId2(event.target.value);
      updateCoinData(
        event.target.value,
        setCrypto2Data,
        setChartDataCoin2,
        true
      );
    } else {
      //  coin 1 is to be updated
      setLoading(true);
      setCrptoId1(event.target.value);
      updateCoinData(
        event.target.value,
        setCrypto1Data,
        setChartDataCoin1,
        false
      );
    }
  }

  async function updateCoinData(
    newId,
    setCoinFn,
    setCoinChartData,
    secondCoinUpdated
  ) {
    try {
      const coinData = await getCoinDetails(newId);
      if (!coinData)
        throw new Error("Failed to fetch coin details for: " + newId);
      ShortenCoinDetailsData(coinData, setCoinFn);

      const chartResponse = await getCoinMarketChartData(newId, days); // got timed out
      if (!chartResponse)
        throw new Error("Failed to fetch chart data for: " + newId);
      setCoinChartData(chartResponse);

      if (secondCoinUpdated) {
        if(!chartDataCoin1) throw new Error("my error")
        settingCoinChartData(
          setChartData,
          chartDataCoin1[chartType],
          cryptoId1,
          chartResponse[chartType],
          newId
        );
      } else {
        if(!chartDataCoin2) throw new Error("my error")
        settingCoinChartData(
          setChartData,
          chartResponse[chartType],
          newId,
          chartDataCoin2[chartType],
          cryptoId2
        );
      }
    } catch (err) {
      console.error(err);
      console.error("Error fetching updated details for : " + newId);
    } finally {
      setLoading(false);
    }
  }

  // ! 2.) handle data for days change

  async function handleDaysChange(event) {
    setDays(event.target.value);
    setChartLoading(true)
    try {
      const dataChart1 = await getCoinMarketChartData(
        cryptoId1,
        event.target.value
      );
      const dataChart2 = await getCoinMarketChartData(
        cryptoId2,
        event.target.value
      );
      if (dataChart1 && dataChart2) {
        setChartDataCoin1(dataChart1);
        setChartDataCoin2(dataChart2);
        settingCoinChartData(
          setChartData,
          dataChart1[chartType],
          cryptoId1,
          dataChart2[chartType],
          cryptoId2
        );
      }
    } catch (e){
      console.error(e)
      console.error("Error fetching updated chart data for new days: " + event.target.value);
    } finally {
      setChartLoading(false);
    }
    
  }

  // ~~~~~~~~~~~~~~~~
  // ! 3.) handle Chart Axis-type Change
  async function handleChartTypeChange(event, newType) {
    if (newType !== null) setChartType(newType);
    settingCoinChartData(
      setChartData,
      chartDataCoin1[newType],
      cryptoId1,
      chartDataCoin2[newType],
      cryptoId2
    );
  }

  // ! returns
  const compare__options_cont = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1.5rem 1rem 0rem 1rem",
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={compare__options_cont}>
            <SelectCoins
              handleCoinSelect={handleCoinSelect}
              cryptoId1={cryptoId1}
              cryptoId2={cryptoId2}
            />
            <SelectDays
              daysCount={days}
              handleChange={handleDaysChange}
              comparePage={true}
            />
          </div>
          {crypto1Data && crypto2Data ? (
            <>
              <table className="listCoins__table">
                <tbody>
                  <ListCoinRow coin={crypto1Data} idx={1} coinId={cryptoId1} />
                  <ListCoinRow coin={crypto2Data} idx={2} coinId={cryptoId2} />
                </tbody>
              </table>
              <motion.section 
                className="info__wrapper" 
                style={{ minHeight: "30dvh" }} 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -50 }} 
                transition={{ duration: 0.5, delay: 3 * 0.2 }}
              >
                <div className="chart__options compare">
                  <ChartTypeToggle
                    chartType={chartType}
                    handleChartTypeChange={handleChartTypeChange}
                  />
                </div>
                {
                  !chartData || chartLoading ? <Loader /> : 
                  <LineChart chartData={chartData} chartType={chartType} multiAxis={true}/>
                }
              </motion.section>
              <CoinDescription
                heading={crypto1Data.name}
                description={crypto1Data.desc}
              />
              <CoinDescription
                heading={crypto2Data.name}
                description={crypto2Data.desc}
              />
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </div>
  );
};

export default CompareCoinsPage;
