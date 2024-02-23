import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./style.css";
const GridCoinBox = ({ coin, coinId }) => {
  return (
    <div className={`gridCoin__box ${coin.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>
      <div className="gridCoin__header">
        <div className="gridCoin__img">
          <img src={coin.image} alt="logo" />
        </div>
        <div className="gridCoin__name">
          <h1>{coin.symbol}</h1>
          <h3>{coin.name}</h3>
        </div>
      </div>
      <div className="gridCoin__pills">
        <div className={`ChangePercent__pill ${
            coin.price_change_percentage_24h > 0 ? "positive" : "negative"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div
          className={`ChangePercent__pill trendingIcon ${
            coin.price_change_percentage_24h > 0 ? "positive" : "negative"
          }`}
        >
          {
            coin.price_change_percentage_24h > 0 ? (
              <TrendingUpRoundedIcon fontSize="medium" />
            ) : (
              <TrendingDownRoundedIcon fontSize="medium" />
            )
          }
        </div>
      </div>
      <div className="gridCoin__stats">
        <h3 className={`gridCoin__price ${coin.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>$ {coin.current_price.toLocaleString()}</h3>
        <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
        <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default GridCoinBox;
