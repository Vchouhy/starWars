import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.scss";
import { searchItems } from "../../../redux/actions";

export default function SearchBar({ children }) {


  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const [hasSearchResults, setHasSearchResults] = useState(false);

  function handleSearch(query) {
    setName(query);
    // Only dispatch the searchItems action if the query is not empty
    if (query.trim() !== "") {
      dispatch(searchItems(query, children));
      setHasSearchResults(true);
    } else {
      // If the query is empty, reset the search results
      dispatch(searchItems("", null)); // You might need to handle null prop in your reducer or action creator
      setHasSearchResults(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Only dispatch the searchItems action if the searchQuery is not empty
    if (name.trim() !== "") {
      dispatch(searchItems(name, children));
    }
  }

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={(e) => handleSearch(e.target.value)}
        value={name}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
