import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./styles.css";
export default function ChartTypeToggle({ chartType, handleChartTypeChange}) {

  return ( //className="toggle__container"
    <div > 
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartTypeChange}
        aria-label="set chart type"
        size="small"
        sx={{
          "&.Mui-selected":{
            color: "var(--white) !important",
            backgroundColor: "var(--purple-lighter) !important",
          },
          borderColor: "var(--purple)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped":{
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--purple)"
          },
          "& .MuiToggleButton-standard":{
            color: "var(--purple)!important",
            "&.toggle-txt": {
              color: "var(--white)!important",
            },
          }

        }}
      >
        <ToggleButton value="prices" className="toggle-btn" aria-label="Price">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn" aria-label="Market Cap">
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn" aria-label="Total Volume">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
