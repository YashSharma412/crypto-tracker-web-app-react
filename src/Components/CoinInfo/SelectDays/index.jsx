import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDays({ daysCount, handleChange, comparePage }) {
  
  const formControlStyles = {
    m: 1,
    minWidth: 80,
    borderRadius: "5px",
    fontSize: comparePage ? "1rem":"0.8rem",
    backgroundColor: "rgba(178, 155, 239, 0.5)",
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--purple)",
      },
    },
  }

  const inputLabelStyles = {
    color: "var(--white)",
    fontSize: comparePage ? "1rem":"0.8rem",
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--purple) !important",
    },
  }

  const selectStyles = {
    height: comparePage ? "unset":"2.2rem",
    fontSize: comparePage ? "1rem" : "0.8rem",
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
  }
  return (
    <div sx={{ minWidth: 80 }}>
      <FormControl
        variant="filled"
        size="small"
        sx={formControlStyles}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={inputLabelStyles}
        >
          Days
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={daysCount}
          label="Days"
          onChange={handleChange}
          sx={selectStyles}
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
