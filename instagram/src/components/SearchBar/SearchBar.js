import React from "react";
import "./searchBar.css";
/*
props:
handleSearch={this.handleSearchInput}
input={this.state.searching}
*/
export default function SearchBar(props) {
  function handleChange(e) {
    props.handleSearch(e.target.value);
  }
  return (
    <div className="searchBar">
      <div className="logos">
        <img src="https://i.imgur.com/RzOn2Qz.png" alt="IG logo" />
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search"
          value={props.input}
          onChange={handleChange}
        />
      </div>
      <div className="navIcons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}
