import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import testCoinDetails from "../assets/testCoinDetails";
import ShortenCoinDetailsData from "../functions/ShortenCoinDetailsData";
import ListCoinRow from "../Components/Dashboard/ListCoinRow";
import CoinDescription from "../Components/CoinInfo/CoinDecription";
import getCoinDetails from "../functions/getCoinDetails";
import getCoinMarketChartData from "../functions/getCoinMarketChartData";
import LineChart from "../Components/CoinInfo/LineChart";
import SelectDays from "../Components/CoinInfo/SelectDays";
import settingCoinChartData from "../functions/settingCoinChartData";
import ChartTypeToggle from "../Components/CoinInfo/ChartTypeToggle";
const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  // const [coinData, setCoinData] = useState(()=>testCoinDetails);
  const [loading, setLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState(30);
  const [chartResponse, setChartResponse] = useState(null);
  const [chartType, setChartType] = useState("prices");

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        getCoinPageData();
      }, 500);
    }
  }, [id]);

  useEffect(() => {
    if (coinData) console.log("usable coin data ", coinData);
  }, [coinData]);

  const handleDaysChange = async (event) => {
    setChartLoading(true);
    setDays(event.target.value);
    try {
      const marketChartDataResponse = await getCoinMarketChartData(id, event.target.value);
      if (!marketChartDataResponse) {
        throw new Error("No data recieved for the id and days value");
      }
      setChartResponse(marketChartDataResponse);
      if (
        marketChartDataResponse.prices &&
        marketChartDataResponse.prices.length > 0
      ) {
        settingCoinChartData(setChartData, marketChartDataResponse.prices);
        setChartLoading(false);
      }
    } catch (e) {
      console.error("Error occurred while fetching data for new days:", error);
      setChartLoading(false);
    }
  };

  const handleChartTypeChange = async (event, newType) => {
    setChartType(newType);
  };

  async function rerenderChart(chartType) {
    try {
      if (!chartResponse) {
        console.log("Chart data is not available");
        return;
      }
      await settingCoinChartData(setChartData, chartResponse[chartType]);
      setChartLoading(false);
    } catch (error) {
      console.error("Error occurred while rendering the chart:", error);
      // Additional error handling logic can be added here, such as displaying an error message to the user
    }
  }


  useEffect(() => {
    if(chartType){
      setChartLoading(true);
      rerenderChart(chartType);
    }
  }, [chartType]);

  useEffect(()=>{
    if (chartResponse) {
      console.log("market chart data response: ", chartResponse);
    }
  }, [chartResponse])

  async function getCoinPageData() {
    try {
      const coinDataFetched = await getCoinDetails(id); // async fetch data function
      if (coinDataFetched) {
        console.log("coin page details obj:", coinDataFetched);
        ShortenCoinDetailsData(coinDataFetched, setCoinData);

        const marketChartDataResponse = await getCoinMarketChartData(id, days); // async fetch data function
        if (marketChartDataResponse) {
          // console.log("market chart data response: ", marketChartDataResponse);
          setChartResponse(marketChartDataResponse);
          const pricesData = marketChartDataResponse.prices;
          await settingCoinChartData(setChartData, pricesData); // helper function to set chart data
        }
      }
    } catch (error) {
      console.log("Error fetching coin page data: ", error);
      // Handle error appropriately, e.g., show error message to user
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {coinData && (
            <>
              <section className="list__wrapper">
                <ListCoinRow coin={coinData} idx={1} coinId={id} />
              </section>
              <section className="info__wrapper" style={{ minHeight: "15dvh" }}>
                <SelectDays daysCount={days} handleChange={handleDaysChange} />
                <ChartTypeToggle
                  chartType={chartType}
                  handleChartTypeChange={handleChartTypeChange}
                />
                {chartData && !chartLoading ? (
                  <LineChart chartData={chartData} />
                ) : (
                  <Loader />
                )}
              </section>
              <CoinDescription
                heading={coinData.name}
                description={coinData.desc}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CoinPage;
