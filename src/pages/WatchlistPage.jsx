import React, { useEffect, useState } from 'react'
import testCoins from '../assets/testCoins'
import ListCoinRow from '../Components/Dashboard/ListCoinRow'
import getWatchListCoins from '../functions/getWatchListCoins'
/*
.grid__container{
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.listCoins__table{
    width: 98%;
    margin-inline: auto;
}


@media only screen and (max-width: 768px) {
    :root{
        --fs-medium: 1rem !important
    }

    .grid__container{
        gap: 1.5rem;
    }

    .myTabButton{
        font-size: 0.8rem !important;
    }
}

*/

const WatchlistPage = () => {
  const coinIds = ['bitcoin', 'ethereum', 'litecoin']; // Example list of coin IDs
  useEffect(()=>{
    // getWatchListCoins(coinIds);
  },[])
  const listTable = {
    width: "98%",
    marginInline: "auto",
  }
  return (
    <div>
      test
    </div>
  );
}

export default WatchlistPage