import { Tooltip, Zoom } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
// 
const WatchListButton = ({coinId, isPositive, isGrid}) => {
    const [watch, setWatch] = useState(false);
    function handleWatch(e) {
        e.stopPropagation();
        console.log(coinId+" added to watch list /---------");
        setWatch(!watch);

    }
  return (
    <div
      className={`wish__pill ${isGrid ? "gridView" : ""} ${
        isPositive ? "positive" : "negative"
      }`}
      onClick={(e)=>handleWatch(e)}
    >
      <Tooltip title="Add to wishlist" TransitionComponent={Zoom} arrow>
        {!watch && (
          <BookmarkBorderRoundedIcon fontSize={`${isGrid? "medium":"small"}`} className="wishIcon" />
        )}
      </Tooltip>
      <Tooltip title="Added to your wishlist" TransitionComponent={Zoom} arrow>
        {watch && (
          <BookmarkRoundedIcon fontSize={`${isGrid? "medium":"small"}`} className="wishIcon" />
        )}
      </Tooltip>
    </div>
  );
};

export default WatchListButton;
