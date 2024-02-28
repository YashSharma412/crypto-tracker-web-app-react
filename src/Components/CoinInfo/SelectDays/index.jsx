import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDays({daysCount, handleChange}) {

  const etst = {
    marginBottom: "0.5rem",
  };
  return (
    <div sx={{ minWidth: 80 }} style={etst}>
      <FormControl
        variant="filled"
        size="small"
        sx={{
          m: 1,
          minWidth: 80,
          borderRadius: "5px",
          fontSize: "0.8rem",
          backgroundColor: "rgba(178, 155, 239, 0.5)",
          "&:hover": {
            "&& fieldset": {
              borderColor: "var(--purple)",
            },
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: "var(--white)", fontSize: "0.8rem", }}
        >
          Days
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={daysCount}
          label="Days"
          onChange={handleChange}
          sx={{
            height: "2.2rem",
            fontSize: "0.8rem",
            "& .MuiSelect-icon": {
              color: "var(--white)", // Change the color of the dropdown icon
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "var(--white)", // Change the border color when focused
              },
            "& .MuiSelect-select.MuiSelect-select": {
              color: "var(--white)", // Change the color of the selected text
            },
          }}
        >
          <MenuItem value={7}>1 Week</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={60}>2 Months</MenuItem>
          <MenuItem value={90}>3 Months</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
