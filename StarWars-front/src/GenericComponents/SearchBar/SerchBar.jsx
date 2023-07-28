import React, { useState } from "react";
// import "./NavBar.scss";
// import { connect } from "react-redux";
import { searchItems } from "../../redux/actions";
import {useDispatch } from 'react-redux';


const SearchBar = ({prop}) => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleSearch = (value) => {
      const trimmedQuery = value.trim();
      setSearchQuery(trimmedQuery);
      dispatch(searchItems(trimmedQuery, prop));
    };

    return(
        
            <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Buscar</button> */}
      </div>
        
    )
}

export default SearchBar;