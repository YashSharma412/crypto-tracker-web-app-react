import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./style.css";
import { Tooltip, Zoom } from "@mui/material";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

const GridCoinBox = ({ coin, coinId, idx }) => {

  return ( 
    <Link to={`/coin/${coinId}`}>
      <motion.div 
        className={`gridCoin__box ${coin.price_change_percentage_24h > 0 ? "positive" : "negative"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
      >
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

          <Tooltip title="Percentage change last 24hrs" TransitionComponent={Zoom} arrow >
          <div className={`ChangePercent__pill ${
              coin.price_change_percentage_24h > 0 ? "positive" : "negative"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div></Tooltip>
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
          <Tooltip title="Current price" TransitionComponent={Zoom} arrow>
            <h3 className={`gridCoin__price ${coin.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>$ {coin.current_price.toLocaleString()}</h3>
          </Tooltip>
          <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default GridCoinBox;
