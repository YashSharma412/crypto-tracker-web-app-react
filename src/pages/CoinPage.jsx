import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {motion} from "framer-motion";
// Components
import Loader from "../Components/Common/Loader";
import ListCoinRow from "../Components/Dashboard/ListCoinRow";
import CoinDescription from "../Components/CoinInfo/CoinDecription";
import LineChart from "../Components/CoinInfo/LineChart";
import SelectDays from "../Components/CoinInfo/SelectDays";
import ChartTypeToggle from "../Components/CoinInfo/ChartTypeToggle";
// functions
import ShortenCoinDetailsData from "../functions/ShortenCoinDetailsData";
import getCoinDetails from "../functions/getCoinDetails";
import getCoinMarketChartData from "../functions/getCoinMarketChartData";
import settingCoinChartData from "../functions/settingCoinChartData";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(false);
// 
  const [coinData, setCoinData] = useState(null);
  const [days, setDays] = useState(90);
  const [chartData, setChartData] = useState(null);
  const [chartResponse, setChartResponse] = useState(null);
  const [chartType, setChartType] = useState("prices");

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        getCoinPageData();
      }, 500);
    }
  }, [id]);

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
        settingCoinChartData(setChartData, marketChartDataResponse.prices, id);
        setChartLoading(false);
      }
    } catch (e) {
      console.error("Error occurred while fetching data for new days:", e);
      setChartLoading(false);
    }
  };

  // ! handling Chart Axis-type change /~~~~~~~~~~~~~~
  const handleChartTypeChange = async (event, newType) => {
    if(newType !== null) setChartType(newType);
  };

  useEffect(() => {
    if(chartType){
      rerenderChart(chartType);
    }
  }, [chartType]);

  async function rerenderChart(chartType) {
    try {
      if (!chartResponse) {
        throw new Error("Chart data is not available");
        return;
      }
      await settingCoinChartData(setChartData, chartResponse[chartType], id);
    } catch (error) {
      console.error("Error occurred while rendering the chart:", error);
    }
  }

// !  /~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//! Handle page load
  async function getCoinPageData() {
    try {
      const coinDataFetched = await getCoinDetails(id); // async fetch data function
      if (coinDataFetched) {
        ShortenCoinDetailsData(coinDataFetched, setCoinData);
        const marketChartDataResponse = await getCoinMarketChartData(id, days); // async fetch data function
        if (marketChartDataResponse) {
          setChartResponse(marketChartDataResponse);
          await settingCoinChartData(setChartData, marketChartDataResponse[chartType], id); // helper function to set chart data
        }
      }
    } catch (error) {
      console.error("Error fetching coin page data: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {coinData && (
            <>
              <section className="list__wrapper">
                <ListCoinRow coin={coinData} idx={1} coinId={id} />
              </section>
              <motion.section
                className="info__wrapper"
                style={{ minHeight: "25dvh" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 2 * 0.2 }}
              >
                <div className="chart__options">
                  <SelectDays
                    daysCount={days}
                    handleChange={handleDaysChange}
                  />
                  <ChartTypeToggle
                    chartType={chartType}
                    handleChartTypeChange={handleChartTypeChange}
                  />
                </div>
                {chartData && !chartLoading ? (
                  <LineChart
                    chartData={chartData}
                    chartType={chartType}
                    multiAxis={false}
                  />
                ) : (
                  <Loader />
                )}
              </motion.section>
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
