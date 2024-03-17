import React, { useContext, useEffect, useState } from 'react'
import { getWatchCoins } from '../functions/getWatchCoins';
import TabsComponent from '../Components/Dashboard/TabsComponent';
import ErrorContext from '../Contexts/errors/ErrorContext';
import { useNavigate } from 'react-router-dom';

const WatchlistPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState([]);
  const {setErrMsg} = useContext(ErrorContext);
  const navigate = useNavigate()
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
      setErrMsg(e.toString());
      navigate("/error")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{flexGrow: 1, position: "relative"}}>
      <TabsComponent loading={loading} coins={coins} isWatchList={true}/>
    </div>
  );
}

export default WatchlistPage;