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
  const [days, setDays] = useState(30);
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

  useEffect(()=>{
    if (chartData) {
      console.log("chartData", chartData);
    }
  }, [chartData])

  // !   Component change functions
  // ! 1.) handle coin selection
  async function handleCoinSelect(event, coin2) {
    if (coin2) {
      setLoading(true);
      setCryptoId2(event.target.value);
      //   getCoinData(event.target.value, setCryptoTwoData, setMarket2Data);
    } else {
      setLoading(true);
      setCrptoId1(event.target.value);
      //   getCoinData(event.target.value, setCryptoOneData, setMarket1Data);
    }
  }

  async function handleDaysChange(event) {
    setDays(event.target.value);
  }

  // ~~~~~~~~~~~~~~~~
  // ! 3.) handle Chart Axis-type Change
  async function handleChartTypeChange(event, newType) {
    if(newType!== null) setChartType(newType);
    // rerenderChart(newType);

  }

  async function rerenderChart(chartType) {
    try {
      if (!chartResponse) {
        console.log("Chart data is not available");
        return;
      }
      await settingCoinChartData(setChartData, chartResponse[chartType], id);
      // setChartLoading(false);
    } catch (error) {
      console.error("Error occurred while rendering the chart:", error);
      // setChartLoading(false);
      // Additional error handling logic can be added here, such as displaying an error message to the user
    }
  }

  // ! returns
  const compare__options_cont = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.75rem 1rem 1.5rem 1rem",
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
                  (!chartData && chartLoading) ? <Loader /> : 
                  <LineChart chartData={chartData} chartType={"prices"} multiAxis={true}/>
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
