import React, { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { Tooltip, Zoom } from "@mui/material";
import "./styles.css";
import PrettifyNumber from "../../../functions/PrettifyNumber";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import WatchListButton from "../../Common/WatchListButton";
const ListCoinRow = ({ coin, coinId, idx }) => {
  const [wished,setWished] = useState(false);
  function handleWish(e){
    setWished(!wished);
    console.log("Added to wishlist /---------------------")
    e.stopPropagation();
  }
  return (
    <Link to={`/coin/${coinId}`}>
      <>
        <motion.tr
          className="ListCoin__row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <td className="logo-col">
            <div>
              <img src={coin.image} alt="logo" />
            </div>
          </td>
          <td className="name-col">
            <h1>{coin.symbol}</h1>
            <h3>{coin.name}</h3>
          </td>
          <td className="listCoin__pills pills-col">
            <Tooltip
              title="Percentage change last 24hr"
              arrow
              TransitionComponent={Zoom}
            >
              <div
                className={`percent__box percent ${
                  coin.price_change_percentage_24h > 0 ? "positive" : "negative"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </Tooltip>
            <Tooltip
              title="Percentage change last 24hr"
              arrow
              TransitionComponent={Zoom}
            >
              <div
                className={`percent__box trending ${
                  coin.price_change_percentage_24h > 0 ? "positive" : "negative"
                }`}
              >
                {coin.price_change_percentage_24h > 0 ? (
                  <TrendingUpRoundedIcon fontSize="small" />
                ) : (
                  <TrendingDownRoundedIcon fontSize="small" />
                )}
              </div>
            </Tooltip>
          </td>
          <td className="price-col">
            <Tooltip title="Current price" TransitionComponent={Zoom} arrow>
              <h3
                className={`coin__price ${
                  coin.price_change_percentage_24h > 0 ? "positive" : "negative"
                }`}
              >
                $ {coin.current_price.toLocaleString()}
              </h3>
            </Tooltip>
          </td>
          <td className="stats-col">
            <p className="stats-detail lg">
              <Tooltip
                title="Total Volume Traded"
                arrow
                TransitionComponent={Zoom}
              >
                <span>
                  <b>Total Vol. :</b> {coin.total_volume.toLocaleString()}
                </span>
              </Tooltip>
            </p>
            <p className="stats-detail md">
              <Tooltip
                title="Total Volume Traded"
                arrow
                TransitionComponent={Zoom}
              >
                <span>
                  <b>TV :</b> {coin.total_volume.toLocaleString()}
                </span>
              </Tooltip>
            </p>
            <p className="stats-detail xs">
              <Tooltip
                title={`Total Volume : ${coin.total_volume.toLocaleString()}`}
                arrow
                TransitionComponent={Zoom}
              >
                <span>
                  <b>TV :</b> {PrettifyNumber(coin.total_volume)}
                </span>
              </Tooltip>
            </p>           
            <p className="stats-detail lg">
              <Tooltip title="Market Capacity" arrow TransitionComponent={Zoom}>
                <span>
                  <b>Market Cap. :</b> {coin.market_cap.toLocaleString()}
                </span>
              </Tooltip>
            </p>
            <p className="stats-detail md">
              <Tooltip title="Market Capacity" arrow TransitionComponent={Zoom}>
                <span>
                  <b>MC :</b> {coin.market_cap.toLocaleString()}
                </span>
              </Tooltip>
            </p>
            <p className="stats-detail xs">
              <Tooltip title={`Market Capacity : ${coin.market_cap.toLocaleString()}`} arrow TransitionComponent={Zoom}>
                <span>
                  <b>MC :</b> {PrettifyNumber(coin.market_cap)}
                </span>
              </Tooltip>
            </p>
          </td>
          <td 
            className=" wish-col"
          >
            <WatchListButton coinId={coinId} isPositive={coin.price_change_percentage_24h > 0 ? true : false} isGrid={false}/>
          </td>
        </motion.tr>
      </>
    </Link>
  );
};

export default ListCoinRow;
