import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../redux/actions";
import "./SearchBar.scss";

const SearchBar = ({ prop }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
    const trimmedQuery = value.trim();
    dispatch(searchItems(trimmedQuery, prop));
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyUp={(e) => handleSearch(e.target.value)}
        placeholder="Search..." 
      />
 
    </div>
  );
};

export default SearchBar;
