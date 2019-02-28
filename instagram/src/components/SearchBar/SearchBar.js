import React from "react";
//import "./searchBar.css";
import { Header, SearchInput, NavIcons } from "./SearchStyles.js";
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
    <Header>
      <div className="logos">
        <img src="https://i.imgur.com/RzOn2Qz.png" alt="IG logo" />
      </div>

      <SearchInput
        type="text"
        placeholder="Search"
        value={props.input}
        onChange={handleChange}
      />

      <NavIcons>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </NavIcons>
    </Header>
  );
}
