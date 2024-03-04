import React, { useEffect, useState } from 'react'
import testCoins from '../assets/testCoins'
import {toast, ToastContainer} from "react-toastify"
import { getWatchCoins } from '../functions/getWatchCoins';
import TabsComponent from '../Components/Dashboard/TabsComponent';

const WatchlistPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(()=>{
    getWatchPageData();
  },[])

  async function getWatchPageData(){
    setLoading(true);
    try {
      const myCoins = await getWatchCoins();
      if (myCoins) {
        setCoins(myCoins);
      }
    } catch (e) {
      console.log("Error in fetching coins list: ", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <TabsComponent loading={loading} coins={coins} isWatchList={true}/>
    </div>
  );
}

export default WatchlistPage;