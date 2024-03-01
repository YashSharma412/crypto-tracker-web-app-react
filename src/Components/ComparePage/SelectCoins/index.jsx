import React, { useEffect, useState } from "react";
import "./styles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import get120Coins from "../../../functions/get120Coins";
// helper functions imported
//
const SelectCoins = ({cryptoId1, cryptoId2, handleCoinSelect}) => {
  const [allCoins, setAllCoins] = useState([]); // list for select components

  // ! fetching list of coins
  useEffect(()=>{
    getCoinsListData()
  },[])

  async function getCoinsListData() {
    try {
      const myCoins = await get120Coins();
      if (myCoins && myCoins.length > 0) {
        setAllCoins(myCoins);
      }
    } catch (e) {
      console.log("Error in fetching coins list: ", e);
    }
  }

  // Styles for mui components
  const formControlStyles = {
    m: 1,
    minWidth: 110,
    borderRadius: "5px",
    fontSize: "1rem",
    color: "var(--purple) !important",
    backgroundColor: "rgba(178, 155, 239, 0.5)",
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--purple)",
      },
    },
  };

  const inputLabelStyles = {
    color: "var(--white)",
    fontSize: "1rem",
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--purple) !important",
    },
  };

  const selectStyles = {
    fontSize: "1rem",
    "& .MuiSelect-icon": {
      color: "var(--white)", // Change the color of the dropdown icon
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)", // Change the border color when focused
    },
    "& .MuiSelect-select.MuiSelect-select": {
      color: "var(--white)", // Change the color of the selected text
    },
  };

  return (
    <div className="select__coin_container">
      <FormControl variant="filled" size="small" sx={formControlStyles}>
        <InputLabel id="coin-select-1" sx={inputLabelStyles}>
          1st Coin
        </InputLabel>
        <Select
          value={cryptoId1}
          label="1st Crypto Coin"
          onChange={(e) => handleCoinSelect(e)}
          autoWidth
          sx={selectStyles}
        >
          {allCoins.length > 0 &&
            allCoins
              .filter((item) => item.id != cryptoId2)
              .map((coin) => (
                <MenuItem key={coin.id} value={coin.id}>
                  {coin.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" size="small" sx={formControlStyles}>
        <InputLabel id="coin-select-2" sx={inputLabelStyles}>
          2nd Coin
        </InputLabel>
        <Select
          value={cryptoId2}
          label="2nd Crypto Coin"
          onChange={(e) => handleCoinSelect(e, true)}
          autoWidth
          sx={selectStyles}
        >
          {allCoins.length > 0 &&
            allCoins
              .filter((item) => item.id != cryptoId1)
              .map((coin) => (
                <MenuItem key={coin.id} value={coin.id}>
                  {coin.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCoins;
