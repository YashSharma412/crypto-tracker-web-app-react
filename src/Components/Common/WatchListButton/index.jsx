import React, { useState } from "react";
import { Tooltip, Zoom } from "@mui/material";
import "./style.css";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { addtoWatchList } from "../../../functions/addToWatchList";
import { removeCoinFromWatchlist } from "../../../functions/removeCoinFromWatchlist";
import { isPresentInWatchlist } from "../../../functions/isPresentInWatchlist";
// 
const WatchListButton = ({coinId, isPositive, isGrid}) => {
    const [watch, setWatch] = useState(isPresentInWatchlist(coinId));
    function handleWatch(e) {
        e.stopPropagation();
        e.preventDefault();
        if (watch) {
          removeCoinFromWatchlist(coinId)
          setWatch(false)
        } else {
          console.log("trying to add....")
          addtoWatchList(coinId)
          setWatch(true);
        }
    }

  return (
    <div
      style={{ cursor: "pointer" }}
      className={`wish__pill ${isGrid ? "gridView" : ""} ${
        isPositive ? "positive" : "negative"
      }`}
      onClick={(e) => handleWatch(e)}
    >
      <Tooltip title="Add to wishlist" TransitionComponent={Zoom} arrow>
        {!watch && (
          <BookmarkBorderRoundedIcon
            fontSize={`${isGrid ? "medium" : "small"}`}
            className="wishIcon"
          />
        )}
      </Tooltip>
      <Tooltip title="Added to your wishlist" TransitionComponent={Zoom} arrow>
        {watch && (
          <BookmarkRoundedIcon
            fontSize={`${isGrid ? "medium" : "small"}`}
            className="wishIcon"
          />
        )}
      </Tooltip>
    </div>
  );
};

export default WatchListButton;
