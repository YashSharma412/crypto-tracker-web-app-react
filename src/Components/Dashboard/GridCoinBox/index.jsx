import React, { useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import "./style.css";
import { Tooltip, Zoom } from "@mui/material";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import WatchListButton from "../../Common/WatchListButton";

const GridCoinBox = ({ coin, coinId, idx }) => {
  
  return (
    <motion.div
      className={`gridCoin__box ${
        coin.price_change_percentage_24h > 0 ? "positive" : "negative"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
    >
      <Link to={`/coin/${coinId}`}>
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
          <Tooltip
            title="Percentage change last 24hrs"
            TransitionComponent={Zoom}
            arrow
          >
            <div
              className={`ChangePercent__pill ${
                coin.price_change_percentage_24h > 0 ? "positive" : "negative"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </Tooltip>
          <div
            className={`ChangePercent__pill trendingIcon ${
              coin.price_change_percentage_24h > 0 ? "positive" : "negative"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpRoundedIcon fontSize="medium" />
            ) : (
              <TrendingDownRoundedIcon fontSize="medium" />
            )}
          </div>
        </div>
        <div className="gridCoin__stats">
          <Tooltip title="Current price" TransitionComponent={Zoom} arrow>
            <h3
              className={`gridCoin__price ${
                coin.price_change_percentage_24h > 0 ? "positive" : "negative"
              }`}
            >
              $ {coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
          <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
        </div>
      </Link>
      <WatchListButton coinId={coinId} isPositive={coin.price_change_percentage_24h > 0 ? true : false} isGrid={true}/>
    </motion.div>
  );
};

export default GridCoinBox;
