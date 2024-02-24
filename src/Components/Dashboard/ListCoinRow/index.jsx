import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import PrettifyNumber from "../../../functions/PrettifyNumber";
import { Tooltip, Zoom } from "@mui/material";
const ListCoinRow = ({ coin }) => {
  return (
    <tr className="ListCoin__row">
      <td>
        <div className="listCoin__img_div">
          <img src={coin.image} alt="logo" />
        </div>
      </td>
      <td className="listCoin__name">
        <h1>{coin.symbol}</h1>
        <h3>{coin.name}</h3>
      </td>
      <td className="listCoin__pills">
        <Tooltip title="Percentage change last 24hr" arrow TransitionComponent={Zoom}>
        <div className={`ChangePercent__pill ${
            coin.price_change_percentage_24h > 0 ? "positive" : "negative"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div></Tooltip>
        <div className={`ChangePercent__pill trendingIcon ${
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
      </td>
      <td className="listCoin__price_cont">
        <Tooltip title="Current price" TransitionComponent={Zoom} arrow>
        <h3 className={`listCoin__price ${
            coin.price_change_percentage_24h > 0 ? "positive" : "negative"
            }`}
        >
          $ {coin.current_price.toLocaleString()}
        </h3></Tooltip>
      </td>
      <td className="listCoin__stats">
        <Tooltip title="Total Volume Traded" arrow TransitionComponent={Zoom}>
          <p className="stats-pc"><span>Total Vol. : </span> {coin.total_volume.toLocaleString()}</p>
          <p className="stats-pc-pretty"><span>Total Vol. : </span> {PrettifyNumber(coin.total_volume)}</p>
          <p className="stats-mob"><span>TV : </span> {coin.total_volume.toLocaleString()}</p>
          <p className="stats-mob-pretty"><span>TV : </span> {PrettifyNumber(coin.total_volume)}</p>
        </Tooltip>
        {/*  */}
        <Tooltip title="Market Capacity">
          <p className="stats-pc"><span>Market Cap. : </span> {coin.market_cap.toLocaleString()}</p>
          <p className="stats-pc-pretty"><span>Market Cap. : </span> {PrettifyNumber(coin.market_cap)}</p>
          <p className="stats-mob"><span>MC : </span> {coin.market_cap.toLocaleString()}</p>
          <p className="stats-mob-pretty"><span>MC : </span> {PrettifyNumber(coin.market_cap)}</p>
        </Tooltip>
      </td>
    </tr>
  );
};

export default ListCoinRow;
