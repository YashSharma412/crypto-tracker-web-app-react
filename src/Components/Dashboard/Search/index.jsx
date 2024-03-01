import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = ({searchQuery, onSearchChange}) => {
  return (
    <div className="search__container">
      <label htmlFor="search">
        <SearchRoundedIcon fontSize="small" className="search__icon" />
      </label>
      <input
        className="search-input"
        name="search"
        type="text"
        placeholder="Search the Crypto Currency"
        value={searchQuery}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default Search;
